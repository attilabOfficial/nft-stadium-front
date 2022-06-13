import { createGlobalStyle } from 'styled-components'

const GlobalStyleReset = createGlobalStyle`
  body {
    background-color: #F3F4F6;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    font-family: 'Clash Grotesk', sans-serif;
  }
`

export default GlobalStyleReset