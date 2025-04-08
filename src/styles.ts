import { createGlobalStyle } from 'styled-components'

export const colors = {
  silverGray: '#b3b3b3',
  white: '#fff',
  skyBlue: '#a5cfe8',
  indigoBlue: '#141475',
  cornflowerBlue: '#526bb5',
  gunmetal: '#2b2b36'
}

export const linearGradient = `
  linear-gradient(
    180deg,
    rgb(3, 18, 65) 14%,
    rgb(3, 4, 66) 43%,
    rgb(12, 12, 41) 73%
  );
`

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Space Grotesk", sans-serif;
    text-decoration: none;
    list-style: none;
  }

  body {
    width: 100vw;
    height: 100vh;
    overflow-y: hidden;
    overflow-x: hidden;
  }
`
