import styled from "styled-components"

const BlogCardWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-left: -30px;
`

const BlogCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 25px 0;
  padding: 10px 30px;
  border-radius: 10px;
  transition: all 0.3s ease;
  transform: translateX(20px);
  &:hover {
    box-shadow: 8px 8px 30px rgb(0 0 0 / 20%);
    transform: translate3d(20px, -5px, 0);
  }
`

const Title = styled.h1`
  font-size: 35px;
  margin: 5px 0 20px;
`

const SubScript = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
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
  margin: 5px 0;
`

const PublishDate = styled.p`
  font-size: 14px;
  margin-left: 15px;
`

const BackgroundWrapper = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 20px;
  flex-shrink: 0;
  transform: translateX(-60px);
  z-index: 2;
`

const Background = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 4px 4px 15px rgb(0 0 0 / 20%);
`

const BlogCard = () => {
  return (
    <BlogCardContainer>
      <BackgroundWrapper>
        <Background src="https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/templates/social/reactt-light_1200x628.png?sfvrsn=43eb5f2a_2" />
      </BackgroundWrapper>
      <BlogCardWrapper>
        <SubInfo>
          <Tag>product</Tag>
          <PublishDate>28 Jun 2021</PublishDate>
        </SubInfo>
        <Title>Our new system design</Title>
        <SubScript>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit.
        </SubScript>
        <Button>Read full post</Button>
      </BlogCardWrapper>
    </BlogCardContainer>
  )
}

export default BlogCard
