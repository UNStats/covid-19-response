import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import PostsPage from '@undataforum/gatsby-theme-blog/src/components/posts-page';
import { Box } from 'theme-ui';

import StatisticalProgrammesBlurb from '../../../../content/blurbs/statistical-programmes.mdx';
import DataInnovationBlurb from '../../../../content/blurbs/data-solutions.mdx';
import OpenDataBlurb from '../../../../content/blurbs/open-data.mdx';
import OtherLinksBlurb from '../../../../content/blurbs/other-links.mdx';
import WorkRemotelyBlurb from '../../../../content/blurbs/work-remotely.mdx';

const blurbs = {
  'statistical-programmes': <StatisticalProgrammesBlurb />,
  'data-solutions': <DataInnovationBlurb />,
  'open-data': <OpenDataBlurb />,
  'other-links': <OtherLinksBlurb />,
  'work-remotely': <WorkRemotelyBlurb />,
};

const ShadowedPostsPage = ({ data, pageContext, location }) => (
  <PostsPage
    blurb={<Box mb={4}>{blurbs[pageContext.collection]}</Box>}
    data={data}
    pageContext={pageContext}
    location={location}
  />
);

ShadowedPostsPage.propTypes = {
  data: shape({
    allPost: shape({
      nodes: arrayOf(
        shape({
          title: shape({ text: string.isRequired }).isRequired,
          authors: arrayOf(shape({ name: string.isRequired }).isRequired),
          date: string.isRequired,
          description: shape({
            childMdx: shape({ body: string.isRequired }).isRequired,
          }),
          path: string.isRequired,
        }).isRequired
      ).isRequired,
    }).isRequired,
  }),
  pageContext: shape({
    collection: string.isRequired,
    lang: string.isRequired,
  }),
  location: shape({ pathname: string.isRequired }).isRequired,
};

export default ShadowedPostsPage;
