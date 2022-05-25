import { createGlobalStyle } from 'styled-components'

const GlobalStyleReset = createGlobalStyle`
  body {
    background-color: black;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    font-family: 'Open Sans', sans-serif;
  }
`

export default GlobalStyleReset
