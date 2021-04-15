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

import Blurb from '../../../../content/blurbs/useful-links.mdx';

const ShadowedPostsPage = ({ data, pageContext, location }) => {
  const posts = data.allPost.nodes;
  const { postsPageTitle, postsPageDescription } = pageContext.themeOptions;
  return (
    <Layout location={location}>
      <SEO
        title={postsPageTitle}
        description={postsPageDescription}
        path={location.pathname}
      />
      <Container>
        <Styled.h1>{postsPageTitle}</Styled.h1>
        <Box mb={4}>
          <Blurb />
        </Box>
        <Grid gap={4} columns={[1, null, 2]}>
          {posts.map((post) => (
            <PostPreview
              key={post.id}
              post={{
                title: (
                  <Heading as="h2" sx={{ textAlign: 'start', mb: 3 }}>
                    {post.title}
                  </Heading>
                ),
                // Authors is optional.
                authors: post.authors && <Names values={post.authors} mb={3} />,
                date: post.date,
                // Description is optional.
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

ShadowedPostsPage.propTypes = {
  data: object.isRequired,
  pageContext: object.isRequired,
  location: object.isRequired,
};

export default ShadowedPostsPage;
