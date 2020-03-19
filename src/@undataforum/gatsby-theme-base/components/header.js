import React from 'react';
import { Header } from '@undataforum/components';

const ShadowedHeader = props => (
  <Header
    {...props}
    links={[
      { text: 'Category 1', href: '/category1/' },
      { text: 'Category 2', href: '/category2/' },
    ]}
  />
);

export default ShadowedHeader;
