import styled from "@emotion/styled"
import { NavBar } from "./NavBar";  // <- 이렇게
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

const StyledWrapper = styled.div`
  flex-shrink: 0;
  ul {
    display: flex;
    flex-direction: row;
    li {
      display: block;
      margin-left: 1rem;
      color: ${({ theme }) => theme.colors.gray11};
    }
  }
`
