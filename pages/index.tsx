import useSWR from "swr"
import styled from "styled-components"
import fetcher from "../utils/fetcher"
import Container from "../components/Container"
import BlogCard from "../components/BlogCard"

const TitleWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px 45px;

  @media only screen and (max-width: 768px) {
    padding: 20px 0;
  }
`
const Title = styled.h1`
  font-size: 40px;
  margin: 20px 0;

  @media only screen and (max-width: 768px) {
    font-size: 32px;
    text-align: center;
  }
`

const SubTitle = styled.p`
  font-size: 20px;
  color: grey;

  @media only screen and (max-width: 768px) {
    font-size: 18px;
    text-align: center;
  }
`

const BlogList = styled.div`
  display: flex;
  flex-direction: column;
`

export default function Home() {
  const { data, error } = useSWR("/api/database", fetcher)

  console.log(data, error)

  return (
    <Container>
      <TitleWrapper>
        <Title>Quyctd Blog</Title>
        <SubTitle>
          The way I think, learn and solved all-kind-of things as a Software
          Engineer
        </SubTitle>
      </TitleWrapper>
      <BlogList>
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </BlogList>
    </Container>
  )
}
