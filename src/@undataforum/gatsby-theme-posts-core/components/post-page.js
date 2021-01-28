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
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { createPath } from '@maiertech/gatsby-helpers';

import messages from '../../../i18n/messages';

const ShadowedPostPage = ({ data, pageContext, location }) => {
  // We need to localize props that are not React components:
  // https://github.com/formatjs/react-intl/blob/master/docs/API.md#createintl
  const cache = createIntlCache();
  const intl = createIntl(
    {
      locale: pageContext.lang,
      messages: messages[pageContext.lang],
    },
    cache
  );

  const { post } = data;

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
    // We would normally use `IntlProvider`, but we already have `intl` and therefore reuse it with RawIntlProvider.
    <RawIntlProvider value={intl}>
      <Layout location={location}>
        <SEO
          title={post.title}
          description={post.description.text}
          path={location.pathname}
        />
        <Container variant="narrow">
          <PostPreview
            post={{
              tag: intl.formatMessage({ id: `${post.collection}.title` }),
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
    </RawIntlProvider>
  );
};

ShadowedPostPage.propTypes = {
  data: object.isRequired,
  pageContext: object.isRequired,
  location: object.isRequired,
};

export default ShadowedPostPage;
