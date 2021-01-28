import baseTheme from '@undataforum/gatsby-theme-theme-ui/src/gatsby-plugin-theme-ui';

// Colors.
const blue = '#009edb';
const darkGrey = '#333333';
const grey = '#4D4D4D';
const lightGrey = '#F2F2F2';
const red = '#c20000';
const white = '#ffffff';

const theme = {
  ...baseTheme,
  fonts: {
    ...baseTheme.fonts,
    body: 'Roboto, system-ui, sans-serif',
    heading: 'Roboto, system-ui, sans-serif',
  },
  colors: {
    ...baseTheme.colors,
    text: darkGrey,
    background: white,
    primary: blue,
    secondary: grey,
    accent: red,
    muted: lightGrey,
  },
  styles: {
    ...baseTheme.styles,
    h1: {
      ...baseTheme.styles.h1,
      color: 'secondary',
    },
    h2: {
      ...baseTheme.styles.h2,
      color: 'secondary',
    },
    h3: {
      ...baseTheme.styles.h3,
      color: 'secondary',
    },
    h4: {
      ...baseTheme.styles.h4,
      color: 'secondary',
    },
    h5: {
      ...baseTheme.styles.h5,
      color: 'secondary',
    },
    h6: {
      ...baseTheme.styles.h6,
      color: 'secondary',
    },
    a: {
      ...baseTheme.styles.a,
      '@media (hover: hover)': {
        '&:hover': {
          textDecoration: 'none',
        },
      },
    },
  },
};

export default theme;
