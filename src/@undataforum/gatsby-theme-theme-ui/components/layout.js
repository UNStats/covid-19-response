// Load typeface Roboto.
import 'typeface-roboto';

// You cannot import Layout like this:
// export { Layout as default } from '@undataforum/gatsby-theme-theme-ui';
// This results in recursive shadowing. You have to import the layout directly to avoid shadowing.
export { default } from '@undataforum/gatsby-theme-theme-ui/src/components/layout';
