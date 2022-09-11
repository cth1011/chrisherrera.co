import React from "react";
import { createGlobalStyle } from "styled-components";
import tw, { theme, GlobalStyles as BaseStyles } from "twin.macro";

const CustomStyles = createGlobalStyle`
body,h1,h2,h3,h4,h5,h6, p, a, nav {
  font-family: Montserrat;
}

p {
  line-height: 2;
}
.nav {
  border-bottom: 1px solid transparent;
  letter-spacing: 1px;
  transition: all 0.5s;
}
.nav:hover {
  border-bottom: 1px solid #b1a7a6;
}

a.post-title {
  background: linear-gradient(
    to bottom,
    rgba(255, 183, 3, 0.2) 0%,
    rgba(255, 183, 3, 0.2) 100%
  );
  border-bottom: 3px solid transparent;
  background-position: 0 100%;
  background-repeat: repeat-x;
  background-size: 0px 0px;
  transition: all 1s; 
}

a.post-title:hover {
  background-size: 4px 50px;
  border-bottom-color: #ffb703;
}
h1 {
  font-size: 2em;
  font-weight: bold;
}
h2 {
  font-size: 1.5em;
  font-weight: bold;
}
h3 {
  font-size: 1.17em;
  font-weight: bold;
}

`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
