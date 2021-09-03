import Link from "next/link"
import styled from "styled-components"

const Head = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 200;
  max-width: 100vw;
  overflow: hidden;
  height: 54px;
  min-height: 54px;
  width: 100%;
  background: hsla(0, 0%, 100%, 0.8);
  box-shadow: inset 0 -1px 0 0 rgb(0 0 0 / 10%);
  backdrop-filter: saturate(180%) blur(16px);
`

const Nav = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 12px;
  line-height: 1.2;
  font-size: 14px;
  justify-content: space-between;
`

const Logo = styled.h3`
  flex-grow: 0;
  min-width: 0;
  margin-right: 8px;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 6px;
  a {
    font-size: 20px;
    color: #1a202c;
    text-decoration: none;
  }
`

const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    font-size: 14px;
    color: rgb(26, 32, 44);
    margin-left: 20px;
    text-decoration: none;
  }
`

const Header = () => {
  return (
    <Head>
      <Nav>
        <Logo>
          <Link href="/">
            <a>quyctd.dev</a>
          </Link>
        </Logo>
        <Links>
          <Link href="/blog">
            <a>Thoughts</a>
          </Link>
          <Link href="/">
            <a>About</a>
          </Link>
        </Links>
      </Nav>
    </Head>
  )
}

export default Header
