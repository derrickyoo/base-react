import { createGlobalStyle } from "styled-components/macro";
import { COLORS, FAMILIES, WEIGHTS } from "../../utils";

const GlobalStyles = createGlobalStyle`
  /* DESIGN TOKENS */
  :root {
    /* FONTS */
    --font-weight-normal: ${WEIGHTS.normal};
    --font-weight-medium: ${WEIGHTS.medium};
    --font-weight-bold: ${WEIGHTS.bold};
    --font-family-base: ${FAMILIES.base};
    --font-family-mono: ${FAMILIES.mono};

    /* COLORS */
    --color-gray-50: ${COLORS.gray[50]};
    --color-gray-100: ${COLORS.gray[100]};
    --color-gray-200: ${COLORS.gray[200]};
    --color-gray-300: ${COLORS.gray[300]};
    --color-gray-400: ${COLORS.gray[400]};
    --color-gray-500: ${COLORS.gray[500]};
    --color-gray-600: ${COLORS.gray[600]};
    --color-gray-700: ${COLORS.gray[700]};
    --color-gray-800: ${COLORS.gray[800]};
    --color-gray-900: ${COLORS.gray[900]};
  }

  /* GLOBAL STYLES */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }
  
  html, body {
    height: 100%;
  }
  
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  #root, #__next {
    isolation: isolate;
  }
`;

export default GlobalStyles;
