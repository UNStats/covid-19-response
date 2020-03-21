import React from 'react';
import { object, shape, string } from 'prop-types';
import { graphql } from 'gatsby';
import { Layout, Seo } from '@undataforum/gatsby-theme-base';
import { Container, Styled } from 'theme-ui';

import PostList from '../components/post-list';
import Blurb from '../../content/blurb.mdx';
import Background from '../../content/background.mdx';

const Homepage = ({ data, location }) => {
  return (
    <Layout location={location}>
      <Container
        sx={{
          maxWidth: 'width.default',
          px: [2, 3, 4],
        }}
      >
        <Seo
          title="Homepage"
          description={data.site.siteMetadata.description}
        />
        <Styled.h1>{data.site.siteMetadata.title}</Styled.h1>
        <Blurb />

        <Styled.h2>Background</Styled.h2>
        <Background />

        <Styled.h2>Data collection</Styled.h2>
        <PostList posts={data.dataCollection.nodes} mb={4} />

        <Styled.h2>Work arrangements</Styled.h2>
        <PostList posts={data.workArrangements.nodes} mb={4} />

        <Styled.h2>Data portals</Styled.h2>
        <PostList posts={data.dataPortals.nodes} />
      </Container>
    </Layout>
  );
};

Homepage.propTypes = {
  data: shape({
    site: shape({
      siteMetadata: shape({
        title: string.isRequired,
        lemma: string.isRequired,
        description: string.isRequired,
      }).isRequired,
    }).isRequired,
    dataCollection: object.isRequired,
    workArrangements: object.isRequired,
    dataPortals: object.isRequired,
  }).isRequired,
  location: shape({ pathname: string.isRequired }).isRequired,
};

export default Homepage;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    dataCollection: allPost(
      limit: 4
      sort: { fields: date, order: DESC }
      filter: { collection: { eq: "data-collection" } }
    ) {
      nodes {
        id
        title {
          text
        }
        date(formatString: "MMM DD, YYYY")
        description {
          childMdx {
            body
          }
        }
        path
      }
    }
    workArrangements: allPost(
      limit: 4
      sort: { fields: date, order: DESC }
      filter: { collection: { eq: "work-arrangements" } }
    ) {
      nodes {
        id
        title {
          text
        }
        date(formatString: "MMM DD, YYYY")
        description {
          childMdx {
            body
          }
        }
        path
      }
    }
    dataPortals: allPost(
      limit: 4
      sort: { fields: date, order: DESC }
      filter: { collection: { eq: "data-portals" } }
    ) {
      nodes {
        id
        title {
          text
        }
        date(formatString: "MMM DD, YYYY")
        description {
          childMdx {
            body
          }
        }
        path
      }
    }
  }
`;
