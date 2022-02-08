import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  width: 100%;
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
  margin: 24px 0 160px 0;
}
`;
