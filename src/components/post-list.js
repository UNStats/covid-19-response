import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import {
  Box,
  Grid,
  Heading,
  PostPreview,
} from '@undataforum/gatsby-theme-theme-ui';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const PostList = ({ posts, ...props }) => (
  <Grid {...props} gap={4} columns={1}>
    {posts.map((post) => {
      const { id, title, date, description, path } = post;
      return (
        <Box key={id} sx={{ bg: 'muted', p: 2 }}>
          <PostPreview
            post={{
              title: (
                <Heading as="h3" sx={{ textAlign: 'start', mb: 3 }}>
                  {title}
                </Heading>
              ),
              date,
              description: description && (
                // Wrap in Box to trigger last-child rule for <p> which sets mb={0}.
                <Box sx={{ mb: 3 }}>
                  <MDXRenderer>{description.body}</MDXRenderer>
                </Box>
              ),
              href: path,
            }}
          />
        </Box>
      );
    })}
  </Grid>
);

PostList.propTypes = {
  posts: arrayOf(
    shape({
      id: string.isRequired,
      title: string.isRequired,
      date: string.isRequired,
      description: shape({
        body: string.isRequired,
      }).isRequired,
      path: string.isRequired,
    }).isRequired
  ).isRequired,
};

export default PostList;
