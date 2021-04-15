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
import EnsuringContinuityIcon from '../components/ensuring-continuity-icon';

const EnsuringContinuityPage = ({ data, pageContext, location }) => {
  const posts = data.allPost.nodes;

  return (
    <Layout location={location}>
      <SEO
        title="Ensuring continuity"
        description="Rapid adaptation of data collection, processing and dissemination methods to ensure continuity of key statistical programmes."
        path={location.pathname}
      />
      <Container>
        <Styled.h1>Ensuring continuity</Styled.h1>
        <Box sx={{ color: 'primary', mt: -2, mb: 2 }}>
          <EnsuringContinuityIcon height={96} />
        </Box>
        <Styled.p>
          This section provides a space to explore challenges and solutions
          available to National Statistical Offices to be agile and innovative
          in adapting their data production methods and processes and ensure
          continuity of major official statistical programmes.
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

EnsuringContinuityPage.propTypes = {
  data: object.isRequired,
  pageContext: object.isRequired,
  location: object.isRequired,
};

export default EnsuringContinuityPage;

export const query = graphql`
  {
    allPost(
      sort: { fields: date, order: DESC }
      filter: { tags: { in: "ensuring-continuity" } }
    ) {
      nodes {
        ...PostFragment
      }
    }
  }
`;
