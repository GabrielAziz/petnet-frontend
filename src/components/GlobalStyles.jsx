import React from "react";
import "../styles/global.css";
import "../styles/responsive.css";



const GlobalStyles = () => (
  <style>
    {`
      :root {
        --netcao-blue: #1e3c70;
        --netcao-yellow: #fac060;
        --netcao-black: #000000;
        --netcao-white: #ffffff;
        --max-width: 1280px;
      }

      body {
        margin: 0;
        font-family: 'Inter', sans-serif;
        color: var(--netcao-black);
        background-color: white;
        scroll-behavior: smooth;
      }

      .container {
        max-width: var(--max-width);
        margin: 0 auto;
        padding: 0 1rem;
      }

      a {
        text-decoration: none;
      }
    `}
  </style>
);

export default GlobalStyles;
