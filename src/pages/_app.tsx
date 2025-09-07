import { AppPropsWithLayout } from "../types"
import { Hydrate, QueryClientProvider } from "@tanstack/react-query"
import { RootLayout } from "src/layouts"
import { queryClient } from "src/libs/react-query"
import { d2coding } from "@/assets/fonts/D2Coding"   // ⬅ 추가

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        {/* 전역 D2Coding 적용 */}
        <main className={d2coding.className}>
          <RootLayout>{getLayout(<Component {...pageProps} />)}</RootLayout>
        </main>
      </Hydrate>
    </QueryClientProvider>
  )
}

export default App