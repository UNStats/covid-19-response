import baseTheme from '@undataforum/gatsby-theme-base/src/gatsby-plugin-theme-ui';
import merge from 'deepmerge';

// Colors.
const blue = '#009edb';
const darkGrey = '#333333';
const grey = '#4D4D4D';
const lightGrey = '#F2F2F2';
const red = '#c20000';
const white = '#ffffff';

const theme = merge(baseTheme, {
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
});

export default theme;
