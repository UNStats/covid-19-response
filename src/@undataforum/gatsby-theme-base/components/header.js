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
        { text: 'Statistical programmes', href: '/data-collection/' },
        { text: 'Work arrangements', href: '/work-arrangements/' },
        { text: 'Data innovation', href: '/data-innovation/' },
        { text: 'Open data', href: '/open-data/' },
      ]}
      variant="primary"
    />
  );
};

export default ShadowedHeader;
