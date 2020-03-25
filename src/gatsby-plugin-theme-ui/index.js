import baseTheme from '@undataforum/gatsby-theme-base/src/gatsby-plugin-theme-ui';
import merge from 'deepmerge';

// Colors.
const blue = '#009edb';
const darkGrey = '#333333';
const grey = '#4D4D4D';
const lightGrey = '#F2F2F2';
const red = '#c20000';
const white = '#ffffff';

const customizedTheme = merge(baseTheme, {
  fonts: {
    body: 'Roboto, system-ui, sans-serif',
    heading: 'Roboto, system-ui, sans-serif',
  },
  colors: {
    text: darkGrey,
    background: white,
    primary: blue,
    secondary: grey,
    accent: red,
    muted: lightGrey,
  },
  styles: {
    h1: {
      color: 'secondary',
    },
    h2: {
      color: 'secondary',
    },
    h3: {
      color: 'secondary',
    },
    h4: {
      color: 'secondary',
    },
    h5: {
      color: 'secondary',
    },
    h6: {
      color: 'secondary',
    },
    a: {
      '@media (hover: hover)': {
        '&:hover': {
          textDecoration: 'none',
        },
      },
    },
  },
});

export default customizedTheme;
