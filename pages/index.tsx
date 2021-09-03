import Head from "next/head"
import styled from "styled-components"
import PageTitle from "../components/PageTitle"
import Container from "../components/Container"

const Paragraph = styled.p`
  margin-top: 1em;
  margin-bottom: 1em;
  line-height: 1.75;
`

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 748px;
  margin: 0 auto;
`

const Home = () => {
  return (
    <>
      <Head>
        <title>Quyctd | About</title>
      </Head>
      <Container>
        <PageTitle title="Dinh Quy" />
        <Flex>
          <Paragraph>
            Quy (b. 1998 Vietnam, live in Hanoi), is a developer, focusing on
            the front-end, UI and visuals.
          </Paragraph>
          <Paragraph>
            Started programming in high school, after graduated, he joins{" "}
            <b>Hanoi University of Science and Technology</b> and got his BSc
            degree in <b>Computer Science</b>. He has been trying many different
            fields of Software Development includes{" "}
            <i>Back-end, AI, Games,...</i> and later, he falls in love with the{" "}
            <b>Front-end development</b>.
          </Paragraph>
          <Paragraph>
            Currently, Quy is <b>Frontend Engineer</b>, working at{" "}
            <a href="https://vietnamdevcenter.linecorp.com/en/about">
              LINE Technology Vietnam
            </a>
            , trying to build world-class product. He also enjoys contributing
            to <b>open source, listening music, and watching anime</b>.
          </Paragraph>
        </Flex>
      </Container>
    </>
  )
}

export default Home
