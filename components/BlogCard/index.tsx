import styled from "styled-components"
import dayjs from "dayjs"
import Link from "next/link"
import Divider from "../DotDivider"

const BlogCardContainer = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  transition: all 0.2s cubic-bezier(0.25, 0.7, 0.25, 1);
  border: 1px solid #e1e1e1;

  &:hover {
    box-shadow: 0 35px 80px -20px rgba(0, 0, 10, 0.05),
      0 30px 60px -30px rgba(0, 0, 0, 0.15);
    cursor: pointer;
  }
`

const Title = styled.h5`
  font-weight: 800;
  color: #111;
  padding: 0;
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 21px;
  line-height: 1.3;
  overflow-wrap: break-word;

  @media (min-width: 576px) {
    font-size: 24px;
    line-height: 1.2;
  }
`

const TagContainer = styled.div`
  font-size: 15px;
  margin-bottom: 8px;
  display: flex;
  flex-direction: row;
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

const CardImgContainer = styled.div`
  padding-top: 50%;
  position: relative;
  border-radius: 4px 4px 0 0;
  overflow: hidden;
`

const StyledImage = styled.img`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const CardBody = styled.div`
  padding: 16px 16px 10px;
  display: flex;
  flex-direction: column;
  flex: 1;

  @media (min-width: 576px) {
    padding: 24px 24px 20px;
  }
`

const CardInfoContainer = styled.span`
  color: #767676;
  margin-top: auto;
  font-size: 15px;
  margin-bottom: 8px;
`

interface Props {
  blog: any
}

const BlogCard = (props: Props) => {
  const { blog } = props

  const tags = blog.properties.Tags.multi_select

  return (
    <BlogCardContainer>
      <Link href={`/post/${blog.id}`}>
        <a style={{ textDecoration: "none" }}>
          <CardImgContainer>
            <StyledImage src={blog.properties.Thumbnail.url} />
          </CardImgContainer>
          <CardBody>
            <TagContainer>
              {tags.map((tag: any) => (
                <Tag key={tag.id}>{tag.name}</Tag>
              ))}
            </TagContainer>
            <Title>{blog.properties.Name.title[0].text.content}</Title>
            <CardInfoContainer>
              <span>Natalie Brennan</span>
              <Divider>·</Divider>
              {dayjs(blog.created_at).format("D MMM, YYYY")}
            </CardInfoContainer>
          </CardBody>
        </a>
      </Link>
    </BlogCardContainer>
  )
}

export default BlogCard
