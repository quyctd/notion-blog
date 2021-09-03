import Head from "next/head"
import styled from "styled-components"
import PageTitle from "../../components/PageTitle"
import Container from "../../components/Container"
import BlogCard from "../../components/BlogCard"
import getDatabase from "../../utils/getDatabase"

const BlogSection = styled.section`
  padding: 64px 0;
`

const BlogList = styled.div`
  max-width: 1076px;
  margin: 0 auto;
`

const GridFeed = styled.div`
  display: grid;
  grid-gap: 12px;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));

  @media (min-width: 768px) {
    grid-gap: 18px;
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
        <title>Quyctd | Thoughts</title>
      </Head>
      <Container>
        <PageTitle
          title="My Thoughts"
          subtitle="An interesting, super exciting, completely spectacular, or possibly
            ordinary blog"
        />
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
