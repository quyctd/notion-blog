import type { AppProps } from "next/app";
import styled, { ThemeProvider } from "styled-components";
// core styles shared by all of react-notion-x
import "react-notion-x/src/styles.css";
// code syntax highlighting
import "prismjs/themes/prism-tomorrow.css";
// collection views
import "rc-dropdown/assets/index.css";
// rendering equations
import "katex/dist/katex.min.css";
// Global + Custom style
import "../styles/globals.css";
import "../styles/notion.css";

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

const App = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <App>
        <Component {...pageProps} />
      </App>
    </ThemeProvider>
  );
}
export default MyApp;
