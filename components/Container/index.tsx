import styled from "styled-components"

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  padding-left: 24px;
  padding-right: 24px;
  max-width: 1100px;

  @media only screen and (max-width: 768px) {
    padding: 0 12px;
  }
`

export default Container
