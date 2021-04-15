import React from 'react';
import { object } from 'prop-types';
import { SEO } from '@undataforum/gatsby-theme-base';
import {
  Container,
  Heading,
  Layout,
  PostPreview,
  Tags,
} from '@undataforum/gatsby-theme-theme-ui';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { createPath } from '@maiertech/gatsby-helpers';

const ShadowedPostPage = ({ data, pageContext, location }) => {
  const { post } = data;
  const { label } = pageContext.themeOptions;

  // If post defines images in frontmatter, extract fluid images.
  const fluidImages = post.images
    ? post.images.map((image) => image.childImageSharp.fluid)
    : undefined;

  // Create values array for Tags component.
  const { basePath, tagCollection } = pageContext.themeOptions;
  let values = [];
  if (post.tags) {
    values = post.tags.map((tag) => ({
      tag,
      path: createPath(basePath, tagCollection, tag),
    }));
  }

  return (
    <Layout location={location}>
      <SEO
        title={post.title}
        description={post.description.text}
        path={location.pathname}
      />
      <Container variant="narrow">
        <PostPreview
          post={{
            tag: label,
            title: (
              <Heading as="h1" sx={{ textAlign: 'start', mb: 3 }}>
                {post.title}
              </Heading>
            ),
            date: post.date,
          }}
          mb={3}
        />
        <Tags values={values} variant="tags.secondary" mb={3} />
        <MDXRenderer images={fluidImages}>{post.body}</MDXRenderer>
      </Container>
    </Layout>
  );
};

ShadowedPostPage.propTypes = {
  data: object.isRequired,
  pageContext: object.isRequired,
  location: object.isRequired,
};

export default ShadowedPostPage;
