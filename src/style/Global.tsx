import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    max-width: 100vw;
  }

  * {
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  #___gatsby {
    overflow-x: hidden;
  }
`

export default Global

