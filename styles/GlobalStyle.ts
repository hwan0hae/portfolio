import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}
  html,body {
    box-sizing: border-box;
    font-size: 100%;
    min-width: 320px;
    margin: 0;
    padding: 0;
    border: 0;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  * { font-family: 'Spoqa Han Sans', 'Spoqa Han Sans JP', 'Sans-serif'}
  body{
    background-color: ${(props) => props.theme.bgColor};
    color:${(props) => props.theme.textColor};
  }
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }
  a { 
    cursor: pointer;
    text-decoration: none; 
    color:inherit;
  }
  h1,h2,h3,h4 {
    padding: 0;
    margin: 0;
    font-weight: bolder;
  }
  h1{
    font-size: 2rem;
  }
  h2{
    font-size: 1.5rem;
  }
  h3{
    font-size: 1.17rem;
  }
  menu, ol, ul,li {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  button {
    background: none;
    border: 0;
    margin: 0;
    padding: 0;
    font-size: 1rem;
    font-family: 'Spoqa Han Sans Neo', sans-serif;
    cursor: pointer;
  }
  input{
    font-size: 1rem;
  }
  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`
export default GlobalStyle
