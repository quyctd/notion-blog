import styled from "styled-components"

const BlogCardWrapper = styled.div`
  border: 1px solid #f2f5f4;
  background-color: #f2f5f4;
  border-radius: 10px;
  width: 100%;
  padding: 10px 30px;
  &:hover {
    background-color: ;
  }
`

const BlogCardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 2em 0;
`

const Title = styled.h1`
  font-size: 40px;
`

const SubScript = styled.p`
  font-size: 20px;
`

const Button = styled.button`
  border-radius: 25px;
  text-transform: capitalize;
  padding: 15px 25px;
  background-color: #0067ff;
  font-size: 16px;
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
  border-radius: 10px;
`

const BlogCard = () => {
  return (
    <BlogCardContainer>
      <BlogCardWrapper>
        <SubInfo>
          <Tag>product</Tag>
        </SubInfo>
        <Title>Our new system design</Title>
        <SubScript>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </SubScript>
        <Button>Read full post</Button>
      </BlogCardWrapper>
    </BlogCardContainer>
  )
}

export default BlogCard
