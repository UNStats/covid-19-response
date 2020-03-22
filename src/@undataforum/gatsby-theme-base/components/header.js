import React from 'react';
import { Header } from '@undataforum/components';
import { useStaticQuery, graphql } from 'gatsby';

const ShadowedHeader = (props) => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          lemma
        }
      }
    }
  `);
  return (
    <Header
      {...props}
      title={data.site.siteMetadata.lemma}
      links={[
        { text: 'Data collection', href: '/data-collection/' },
        { text: 'Work arrangements', href: '/work-arrangements/' },
        { text: 'Data portals', href: '/data-portals/' },
      ]}
      variant="primary"
    />
  );
};

export default ShadowedHeader;
