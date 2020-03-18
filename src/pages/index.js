import React from 'react';
import { object, shape } from 'prop-types';
import { graphql } from 'gatsby';
import { Layout, MDXRenderer } from '@undataforum/gatsby-theme-base';
import { Container, Grid, Heading } from 'theme-ui';
import { Names, PostPreview } from '@undataforum/components';

const Homepage = ({ data }) => {
  const posts = data.allPost.nodes;

  return (
    <Layout title="Homepage" description={data.site.siteMetadata.description}>
      <Container
        sx={{
          maxWidth: 'width.default',
          px: [2, 3, 4],
        }}
      >
        <Grid gap={[4, 5]} columns={[1, null, 2]}>
          {posts.map(post => {
            const { id, title, date, authors, description, path } = post;
            return (
              <PostPreview
                post={{
                  title: (
                    <Heading as="h2" sx={{ textAlign: 'start', mb: 3 }}>
                      {title.text}
                    </Heading>
                  ),
                  date,
                  // Authors prop is optional.
                  authors: authors ? (
                    <Names values={authors.map(({ name }) => name)} mb={3} />
                  ) : (
                    undefined
                  ),
                  // Description is optional.
                  description: description && (
                    <MDXRenderer>{description.childMdx.body}</MDXRenderer>
                  ),
                  href: path,
                }}
                fontSize={[3, 4]}
                key={id}
              />
            );
          })}
        </Grid>
      </Container>
    </Layout>
  );
};

Homepage.propTypes = {
  data: shape({
    allPost: object.isRequired,
  }).isRequired,
};

export default Homepage;

export const query = graphql`
  {
    site {
      siteMetadata {
        description
      }
    }
    allPost(limit: 10, sort: { fields: date, order: DESC }) {
      nodes {
        id
        title {
          text
        }
        date(formatString: "MMM DD, YYYY")
        authors {
          name
        }
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
