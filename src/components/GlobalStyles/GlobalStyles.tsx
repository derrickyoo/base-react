import { createGlobalStyle } from "styled-components/macro";
import { COLORS, FAMILIES, WEIGHTS } from "../../utils";

const GlobalStyles = createGlobalStyle`
  /* DESIGN TOKENS */
  :root {
    --font-weight-normal: ${WEIGHTS.normal};
    --font-weight-medium: ${WEIGHTS.medium};
    --font-weight-bold: ${WEIGHTS.bold};
    --font-family-base: ${FAMILIES.base};
    --font-family-mono: ${FAMILIES.mono};

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

    --shadow-color: 210deg 15% 6%;
    --shadow-elevation-low:
      0.3px 0.5px 0.5px hsl(var(--shadow-color) / 0.38),
      0.4px 0.7px 0.8px -1.9px hsl(var(--shadow-color) / 0.3),
      0.9px 1.8px 1.9px -3.7px hsl(var(--shadow-color) / 0.21);
    --shadow-elevation-medium:
      0.3px 0.5px 0.5px hsl(var(--shadow-color) / 0.4),
      0.6px 1.1px 1.2px -1.2px hsl(var(--shadow-color) / 0.33),
      1.6px 3.3px 3.4px -2.5px hsl(var(--shadow-color) / 0.27),
      4.4px 8.8px 9.2px -3.7px hsl(var(--shadow-color) / 0.2);
    --shadow-elevation-high:
      0.3px 0.5px 0.5px hsl(var(--shadow-color) / 0.37),
      0.7px 1.5px 1.6px -0.5px hsl(var(--shadow-color) / 0.34),
      1.4px 2.8px 2.9px -1.1px hsl(var(--shadow-color) / 0.31),
      2.6px 5.1px 5.4px -1.6px hsl(var(--shadow-color) / 0.28),
      4.6px 9.1px 9.6px -2.1px hsl(var(--shadow-color) / 0.25),
      7.7px 15.4px 16.1px -2.7px hsl(var(--shadow-color) / 0.22),
      12.3px 24.6px 25.8px -3.2px hsl(var(--shadow-color) / 0.19),
      18.8px 37.5px 39.3px -3.7px hsl(var(--shadow-color) / 0.16);
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
