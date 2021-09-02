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

const Footer = () => {
  return (
    <FooterWrapper>
      <span>
        <a href="https://www.facebook.com/akashi.211/">Facebook</a>
        <Divider>·</Divider>
        <a href="https://github.com/quyctd">Github</a>
        <Divider>·</Divider>
        <a href="https://www.linkedin.com/in/quyctd/">LinkedIn</a>
      </span>
      <small style={{ display: "block", marginTop: "1rem" }}>
        © <time>{YEAR}</time> Quyctd
      </small>
    </FooterWrapper>
  )
}

export default Footer
