import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import EventsPage from '@undataforum/gatsby-theme-events/src/components/events-page';
import { Box } from 'theme-ui';

import SharingBlurb from '../../../../content/blurbs/sharing.mdx';

const blurbs = { sharing: <SharingBlurb /> };

const ShadowedEventsPage = ({ data, pageContext, location }) => (
  <EventsPage
    blurb={<Box mb={4}>{blurbs[pageContext.collection]}</Box>}
    data={data}
    pageContext={pageContext}
    location={location}
  />
);

ShadowedEventsPage.propTypes = {
  data: shape({
    allEvent: shape({
      nodes: arrayOf(
        shape({
          title: shape({ text: string.isRequired }).isRequired,
          displayDate: string.isRequired,
          duration: string.isRequired,
          moderators: arrayOf(shape({ name: string.isRequired }).isRequired),
          speakers: arrayOf(shape({ name: string.isRequired }).isRequired),
          description: shape({
            childMdx: shape({ body: string.isRequired }).isRequired,
          }),
          registrationLink: string,
          path: string.isRequired,
        })
      ).isRequired,
    }).isRequired,
  }).isRequired,
  pageContext: shape({
    collection: string.isRequired,
    lang: string.isRequired,
  }),
  location: shape({ pathname: string.isRequired }).isRequired,
};

export default ShadowedEventsPage;
