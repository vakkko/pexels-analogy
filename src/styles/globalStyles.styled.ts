import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Dancing Script", serif;
  background: linear-gradient(90deg, rgba(93,59,99,1) 35%, rgba(38,36,76,1) 100%);
}

`;

export default GlobalStyles;
