import styled from "styled-components"

const TitleWrapper = styled.div`
  margin: 0 auto;
  padding: 84px 12px;
  text-align: center;
`

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 16px;
  line-height: 1.1;
  font-weight: bold;

  @media only screen and (max-width: 768px) {
    font-size: 2rem;
  }

  @media only screen and (max-width: 576px) {
    font-size: 1.5rem;
  }
`

const SubTitle = styled.h2`
  font-size: 18px;
  color: #767676;
  line-height: 1.35;
  font-weight: 400;

  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`

interface Props {
  title: string
  subtitle?: string
}

const PageTitle = (props: Props) => {
  const { title, subtitle } = props

  return (
    <TitleWrapper>
      <Title>{title}</Title>
      {subtitle && <SubTitle>{subtitle}</SubTitle>}
    </TitleWrapper>
  )
}

export default PageTitle
