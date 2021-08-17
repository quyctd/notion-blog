import type { AppProps } from "next/app"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"

const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Inter', sans-serif;
  }

  *, :after, :before {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1, h2, h3, h4, p, a {
    margin: 0;
    padding: 0;
  }
`

const theme = {
  colors: {
    primary: "#0070f3",
  },
}

const App = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <App>
          <Component {...pageProps} />
        </App>
      </ThemeProvider>
    </>
  )
}
export default MyApp
