import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import PostsPage from '@undataforum/gatsby-theme-blog/src/components/posts-page';
import { Box } from 'theme-ui';

import DataCollectionBlurb from '../../../../content/blurbs/data-collection.mdx';
import DataInnovationBlurb from '../../../../content/blurbs/data-innovation.mdx';
import DataPortalsBlurb from '../../../../content/blurbs/data-portals.mdx';
import OpenDataBlurb from '../../../../content/blurbs/open-data.mdx';
import WorkArrangementsBlurb from '../../../../content/blurbs/work-arrangements.mdx';

const blurbs = {
  'data-collection': <DataCollectionBlurb />,
  'data-innovation': <DataInnovationBlurb />,
  'data-portals': <DataPortalsBlurb />,
  'open-data': <OpenDataBlurb />,
  'work-arrangements': <WorkArrangementsBlurb />,
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
