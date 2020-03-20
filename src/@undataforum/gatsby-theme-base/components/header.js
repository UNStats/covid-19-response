import React from 'react';
import { Header } from '@undataforum/components';
import { useStaticQuery, graphql } from 'gatsby';

const ShadowedHeader = props => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <Header
      {...props}
      title={data.site.siteMetadata.title}
      links={[
        { text: 'Category 1', href: '/category1/' },
        { text: 'Category 2', href: '/category2/' },
      ]}
      variant="primary"
    />
  );
};

export default ShadowedHeader;
