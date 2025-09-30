import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import PostCard from "src/routes/Feed/PostList/PostCard"
import { DEFAULT_CATEGORY } from "src/constants"
import usePostsQuery from "src/hooks/usePostsQuery"

// 안전한 생성일 추출: created_time/createdAt 우선, 보조로 start_date/date/publishedAt
const getPostDate = (p: any): Date => {
  const created =
    p?.created_time ??   // Notion Page
    p?.createdAt;        // 일반 백엔드

  const notionStart =
    p?.properties?.start_date?.start ??
    p?.properties?.date?.start;

  const fallback =
    p?.date ??
    p?.publishedAt;

  const raw = created ?? notionStart ?? fallback;
  return raw ? new Date(raw) : new Date(0);
};

type Props = {
  q: string
}

const PostList: React.FC<Props> = ({ q }) => {
  const router = useRouter()
  const data = usePostsQuery()
  const base = Array.isArray(data) ? data : [];
  const [filteredPosts, setFilteredPosts] = useState(base)

  const currentTag = `${router.query.tag || ``}` || undefined
  const currentCategory = `${router.query.category || ``}` || DEFAULT_CATEGORY
  const currentOrder = `${router.query.order || ``}` || "desc"

  useEffect(() => {
    setFilteredPosts(() => {
      let newFilteredPosts = base
      // keyword
      newFilteredPosts = newFilteredPosts.filter((post) => {
        const tagContent = post.tags ? post.tags.join(" ") : ""
        const searchContent = post.title + post.summary + tagContent
        return searchContent.toLowerCase().includes(q.toLowerCase())
      })

      // tag
      if (currentTag) {
        newFilteredPosts = newFilteredPosts.filter(
          (post) => post && post.tags && post.tags.includes(currentTag)
        )
      }

      // category
      if (currentCategory !== DEFAULT_CATEGORY) {
        newFilteredPosts = newFilteredPosts.filter(
          (post) =>
            post && post.category && post.category.includes(currentCategory)
        )
      }
      // order by 생성일
      newFilteredPosts = [...newFilteredPosts].sort((a, b) => {
        const da = getPostDate(a).getTime()
        const db = getPostDate(b).getTime()
        return currentOrder === "asc" ? da - db : db - da
      })

      return newFilteredPosts
    })
  }, [q, currentTag, currentCategory, currentOrder, data, setFilteredPosts])

  return (
    <>
      <div className="my-2">
        {!filteredPosts.length && (
          <p className="text-gray-500 dark:text-gray-300">Nothing! 😺</p>
        )}
        {filteredPosts.map((post) => (
          <PostCard key={post.id} data={post} />
        ))}
      </div>
    </>
  )
}

export default PostList
