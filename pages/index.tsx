import Head from "next/head"
import styled from "styled-components"
import Container from "../components/Container"
import BlogCard from "../components/BlogCard"
import getDatabase from "../utils/getDatabase"

const TitleWrapper = styled.div`
  margin: 0 auto;
  padding: 104px 12px 56px;
  text-align: center;
`

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 24px;
  line-height: 1.1;
  font-weight: bold;

  @media only screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media only screen and (max-width: 576px) {
    font-size: 32px;
  }
`

const SubTitle = styled.h2`
  font-size: 21px;
  color: #767676;
  line-height: 1.35;
  font-weight: 400;

  @media only screen and (max-width: 768px) {
    font-size: 18px;
  }

  @media only screen and (max-width: 576px) {
    font-size: 16px;
  }
`

const BlogSection = styled.section`
  padding: 64px 0;
`

const BlogList = styled.div`
  max-width: 1320px;
  margin: 0 auto;
`

const GridFeed = styled.div`
  display: grid;
  grid-gap: 12px;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));

  @media (min-width: 768px) {
    grid-gap: 24px;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  }
`

interface Props {
  blogList: any
}

export default function Home(props: Props) {
  const blogList = props.blogList || []

  return (
    <>
      <Head>
        <title>Quyctd blog</title>
      </Head>
      <Container>
        <TitleWrapper>
          <Title>Quyctd Blog</Title>
          <SubTitle>
            An interesting, super exciting, completely spectacular, or possibly
            ordinary blog
          </SubTitle>
        </TitleWrapper>
        <BlogSection>
          <BlogList>
            <GridFeed>
              {blogList.map((blog: any) => (
                <BlogCard blog={blog} key={blog.id} />
              ))}
            </GridFeed>
          </BlogList>
        </BlogSection>
      </Container>
    </>
  )
}

export const getStaticProps = async () => {
  const blogList = await getDatabase()

  return {
    props: {
      blogList,
    },
    revalidate: 10,
  }
}
