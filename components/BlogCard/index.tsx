import styled from "styled-components"
import dayjs from "dayjs"
import Link from "next/link"

const BlogCardWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-left: -30px;

  @media only screen and (max-width: 768px) {
    margin-left: 0;
  }
`

const BlogCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #dadada;
  margin: 25px 0;
  padding: 10px 30px;
  border-radius: 10px;
  transition: all 0.3s ease;
  transform: translateX(15px);
  &:hover {
    box-shadow: 8px 8px 30px rgb(0 0 0 / 20%);
    transform: translate3d(15px, -5px, 0);
    background-color: white;
    @media only screen and (max-width: 768px) {
      transform: translate3d(0, -5px, 0);
    }
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    transform: none;
    padding: 10px;
    margin: 18px 0;
  }
`

const Title = styled.h1`
  font-size: 35px;
  margin: 5px 0 20px;

  @media only screen and (max-width: 768px) {
    font-size: 24px;
  }
`

const SubScript = styled.p`
  font-size: 18px;
  margin-bottom: 30px;

  @media only screen and (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 20px;
  }
`

const Button = styled.button`
  border-radius: 25px;
  text-transform: capitalize;
  padding: 12px 20px;
  background-color: #0067ff;
  font-size: 14px;
  margin: 10px 0;
  color: white;
  border: none;
  outline: none;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`

const SubInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Tag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  background-color: #caf7dc;
  color: #42a272;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 12px;
  border-radius: 15px;
  margin: 5px 15px 5px 0;

  @media only screen and (max-width: 425px) {
    margin: 5px 10px 5px 0;
  }
`

const PublishDate = styled.p`
  font-size: 14px;
`

const BackgroundWrapper = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 20px;
  flex-shrink: 0;
  transform: translateX(-60px);
  z-index: 2;

  @media only screen and (max-width: 768px) {
    width: 100%;
    transform: none;
    margin-bottom: 20px;
  }

  @media only screen and (max-width: 425px) {
    height: 150px;
  }
`

const Background = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 4px 4px 15px rgb(0 0 0 / 20%);
`

interface Props {
  blog: any
}

const BlogCard = (props: Props) => {
  const { blog } = props

  const tags = blog.properties.Tags.multi_select

  return (
    <BlogCardContainer>
      <BackgroundWrapper>
        <Background src={blog.properties.Thumbnail.url} />
      </BackgroundWrapper>
      <BlogCardWrapper>
        <SubInfo>
          {tags.map((tag: any) => (
            <Tag key={tag.id}>{tag.name}</Tag>
          ))}
          <PublishDate>
            {dayjs(blog.created_at).format("D MMM, YYYY")}
          </PublishDate>
        </SubInfo>
        <Title>{blog.properties.Name.title[0].text.content}</Title>
        <SubScript>
          {blog.properties.Description.rich_text[0].text.content}
        </SubScript>
        <Link href={`/post/${blog.id}`}>
          <a>
            <Button>Read full post</Button>
          </a>
        </Link>
      </BlogCardWrapper>
    </BlogCardContainer>
  )
}

export default BlogCard
