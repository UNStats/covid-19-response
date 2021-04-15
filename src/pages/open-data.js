import React from 'react';
import { object } from 'prop-types';
import { SEO } from '@undataforum/gatsby-theme-base';
import {
  Box,
  Container,
  Grid,
  Heading,
  Layout,
  Names,
  PostPreview,
  Styled,
} from '@undataforum/gatsby-theme-theme-ui';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql } from 'gatsby';
import DataSolutionsIcon from '../components/data-solutions-icon';

const OpenDataPage = ({ data, pageContext, location }) => {
  const posts = data.allPost.nodes;

  return (
    <Layout location={location}>
      <SEO
        title="Open data"
        description="Resources to support and encourage national statistical offices and other data producers to leverage and use open data."
        path={location.pathname}
      />
      <Container>
        <Styled.h1>Open data</Styled.h1>
        <Box sx={{ color: 'primary', mt: -2, mb: 2 }}>
          <DataSolutionsIcon height={96} />
        </Box>
        <Styled.p>
          This section provides resources to support and encourage national
          statistical offices and other data producers to leverage and use open
          data in the global response to the COVID-19 outbreak to ensure all
          users have access to trusted data.
        </Styled.p>
        <Grid gap={4} columns={[1, null, 2]} mt={4}>
          {posts.map((post) => (
            <PostPreview
              key={post.id}
              post={{
                title: (
                  <Heading as="h2" sx={{ textAlign: 'start', mb: 3 }}>
                    {post.title}
                  </Heading>
                ),
                authors: post.authors && <Names values={post.authors} mb={3} />,
                date: post.date,
                description: <MDXRenderer>{post.description.body}</MDXRenderer>,
                href: post.path,
              }}
            />
          ))}
        </Grid>
      </Container>
    </Layout>
  );
};

OpenDataPage.propTypes = {
  data: object.isRequired,
  pageContext: object.isRequired,
  location: object.isRequired,
};

export default OpenDataPage;

export const query = graphql`
  {
    allPost(
      sort: { fields: date, order: DESC }
      filter: { tags: { in: "open-data" } }
    ) {
      nodes {
        ...PostFragment
      }
    }
  }
`;
