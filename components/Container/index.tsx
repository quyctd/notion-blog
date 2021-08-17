import styled from "styled-components"

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 862px;
  padding-left: 24px;
  padding-right: 24px;

  @media only screen and (max-width: 768px) {
    padding: 0 15px;
  }
`

export default Container
