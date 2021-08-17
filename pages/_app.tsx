import type { AppProps } from "next/app"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
// core styles shared by all of react-notion-x (required)
import "react-notion-x/src/styles.css"

// used for code syntax highlighting (optional)
import "prismjs/themes/prism-tomorrow.css"

// used for collection views (optional)
import "rc-dropdown/assets/index.css"

// used for rendering equations (optional)
import "katex/dist/katex.min.css"

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
