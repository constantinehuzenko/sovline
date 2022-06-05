import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url(https://cdn.jsdelivr.net/gh/tonsky/FiraCode@1.206/distr/fira_code.css);
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  width: 100%;
  font-family: 'Open Sans', sans-serif;
}

body {
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #131C28;
  color: #ffffff;
}

#root {
  width: 100%;
  margin: 24px 0 360px 0;
}
`;
