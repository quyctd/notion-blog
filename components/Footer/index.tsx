import styled from "styled-components"
import Divider from "../DotDivider"

const YEAR = new Date().getFullYear()

const FooterWrapper = styled.footer`
  margin-top: 6rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ExternalLink = styled.a`
  font-size: 16px;
  color: #3093ef;
  text-decoration: underline;

  &:hover {
    cursor: pointer;
    text-decoration: none;
  }
`

const Footer = () => {
  return (
    <FooterWrapper>
      <span>
        <ExternalLink href="https://www.facebook.com/akashi.211/">
          Facebook
        </ExternalLink>
        <Divider>·</Divider>
        <ExternalLink href="https://github.com/quyctd">Github</ExternalLink>
        <Divider>·</Divider>
        <ExternalLink href="https://www.linkedin.com/in/quyctd/">
          LinkedIn
        </ExternalLink>
      </span>
      <small style={{ display: "block", marginTop: "1rem" }}>
        © <time>{YEAR}</time> Quyctd
      </small>
    </FooterWrapper>
  )
}

export default Footer
