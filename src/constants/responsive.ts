/* MOBILE-FIRST APPROACH */
export const BREAKPOINTS = {
  screens: {
    tablet: 640,
    laptop: 1024,
    desktop: 1280,
  }
};

export const QUERIES = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.screens.tablet / 16}rem)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.screens.laptop / 16}rem)`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.screens.desktop / 16}rem)`,
  tabletOnly: `
    (min-width: ${BREAKPOINTS.screens.tablet / 16}rem) and
    (max-width: ${(BREAKPOINTS.screens.laptop - 1) / 16}rem)
  `,
};
