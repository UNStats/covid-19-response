import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import { Box, Grid, Heading } from 'theme-ui';
import { MDXRenderer } from '@undataforum/gatsby-theme-base';
import { PostPreview } from '@undataforum/components';

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
                  {title.text}
                </Heading>
              ),
              date,
              description: description && (
                // Wrap in Box to trigger last-child rule for <p> which sets mb={0}.
                <Box sx={{ mb: 3 }}>
                  <MDXRenderer>{description.childMdx.body}</MDXRenderer>
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
      title: shape({ text: string.isRequired }).isRequired,
      date: string.isRequired,
      description: shape({
        childMdx: shape({ body: string.isRequired }).isRequired,
      }).isRequired,
      path: string.isRequired,
    }).isRequired
  ).isRequired,
};

export default PostList;
