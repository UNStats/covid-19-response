import React from 'react';

import Footer from '../../../components/footer';

const ShadowedFooter = () => (
  <Footer
    links={[
      { text: 'Contact', href: '/contact/' },
      { text: 'Copyright', href: '/copyright/' },
      { text: 'Privacy Notice', href: '/privacy/' },
      { text: 'Terms of Use', href: '/terms/' },
      { text: 'Credits', href: '/credits/' },
    ]}
  />
);

export default ShadowedFooter;
