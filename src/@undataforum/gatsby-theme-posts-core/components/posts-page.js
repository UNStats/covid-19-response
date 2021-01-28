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
import {
  createIntl,
  createIntlCache,
  FormattedMessage,
  RawIntlProvider,
} from 'react-intl';
import { MDXRenderer } from 'gatsby-plugin-mdx';

// This is a quick and dirty workaround to get a blurb on each of the posts pages.
import StatisticalProgrammesBlurb from '../../../../content/blurbs/statistical-programmes.mdx';
import DataInnovationBlurb from '../../../../content/blurbs/data-solutions.mdx';
import OpenDataBlurb from '../../../../content/blurbs/open-data.mdx';
import UsefulLinksBlurb from '../../../../content/blurbs/useful-links.mdx';
import WorkRemotelyBlurb from '../../../../content/blurbs/work-remotely.mdx';
import messages from '../../../i18n/messages';

const blurbs = {
  'statistical-programmes': <StatisticalProgrammesBlurb />,
  'data-solutions': <DataInnovationBlurb />,
  'open-data': <OpenDataBlurb />,
  'useful-links': <UsefulLinksBlurb />,
  'work-remotely': <WorkRemotelyBlurb />,
};

const ShadowedPostsPage = ({ data, pageContext, location }) => {
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

  const posts = data.allPost.nodes;

  return (
    // We would normally use `IntlProvider`, but we already have `intl` and therefore reuse it with RawIntlProvider.
    <RawIntlProvider value={intl}>
      <Layout location={location}>
        <SEO
          title={intl.formatMessage({ id: `${pageContext.collection}.title` })}
          description={intl.formatMessage({
            id: `${pageContext.collection}.description`,
          })}
          path={location.pathname}
        />
        <Container>
          <Styled.h1>
            <FormattedMessage id={`${pageContext.collection}.title`} />
          </Styled.h1>
          <Box mb={4}>{blurbs[pageContext.collection]}</Box>
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
                  authors: post.authors && (
                    <Names values={post.authors} mb={3} />
                  ),
                  date: post.date,
                  // Description is optional.
                  description: (
                    <MDXRenderer>{post.description.body}</MDXRenderer>
                  ),
                  href: post.path,
                }}
              />
            ))}
          </Grid>
        </Container>
      </Layout>
    </RawIntlProvider>
  );
};

ShadowedPostsPage.propTypes = {
  data: object.isRequired,
  pageContext: object.isRequired,
  location: object.isRequired,
};

export default ShadowedPostsPage;
