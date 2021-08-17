import styled from "styled-components"

const BlogCardWrapper = styled.div`
  position: relative;
  border: 1px solid #f2f5f4;
  //   background-color: #f2f5f4;
  width: 100%;
  padding: 10px 30px;
`

const BlogCardContainer = styled.div`
  display: flex;
  position: relative;
  margin: 2em 0;
  overflow: hidden;
  border-radius: 10px;
  transition: all 0.2s ease;
  &:hover {
    box-shadow: 0 8px 30px rgb(0 0 0 / 12%);
    transform: translate3d(0, -5px, 0);
  }
`

const Title = styled.h1`
  font-size: 35px;
  margin: 5px 0 20px;
`

const SubScript = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
  max-width: 60%;
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
  overflow: hidden;

  :after {
    position: absolute;
    border-radius: 10px;
    height: 100%;
    right: 0;
    left: 0;
    content: "";
    background: linear-gradient(
      to right,
      hsl(160deg 13% 97%) 30%,
      hsla(0, 0%, 97%, 0.3) 60%,
      hsla(0, 0%, 100%, 0)
    );
  }
`

const Background = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: contain;
  transform: translateX(40%);
  overflow: hidden;
  border-radius: 10px;
`

const BlogCard = () => {
  return (
    <BlogCardContainer>
      <BackgroundWrapper>
        <Background src="https://www.cloudanalogy.co.uk/wp-content/uploads/2019/06/react.png" />
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
