import { createGlobalStyle } from "styled-components"

const theme = {
  DARK: { background: "#2D2E3B", text: "#F6F7FF" },
  LIGHT: { background: "#F6F7FF", text: "#1A1A22" },
}

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
  }

  body {
    box-sizing: border-box;
    font-family: 'Ubuntu', sans-serif;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.text};
  }

  h1 {
    font-family: 'Roboto Slab', serif;
    font-size: 4rem;
  }

  h2,h3,h4,h5 {
    font-family: 'Roboto Slab', serif;
  }

  .code, a {
    font-family: 'Roboto Mono', monospace;
    color: ${props => props.theme.text};
  }

  hr {
    color: ${props => props.theme.text};
  }
}
`

export default GlobalStyles
