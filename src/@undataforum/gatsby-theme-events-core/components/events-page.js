import React from 'react';
import { object } from 'prop-types';
import { SEO } from '@undataforum/gatsby-theme-base';
import {
  Box,
  Container,
  EventPreview,
  Grid,
  Heading,
  Layout,
  Styled,
} from '@undataforum/gatsby-theme-theme-ui';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Blurb from '../../../../content/blurbs/sharing.mdx';

const EventsPage = ({ data, pageContext, location }) => {
  const events = data.allEvent.nodes;
  const {
    eventsPageTitle,
    eventsPageDescription,
    label,
  } = pageContext.themeOptions;
  return (
    <Layout location={location}>
      <SEO
        title={eventsPageTitle}
        description={eventsPageDescription}
        path={location.pathname}
      />
      <Container>
        <Styled.h1>{eventsPageTitle}</Styled.h1>
        <Box mb={4}>
          <Blurb />
        </Box>
        <Grid gap={4} columns={[1, null, 2]}>
          {events.map((event) => {
            // Format start date.
            const date = new Intl.DateTimeFormat('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
              timeZoneName: 'long',
            }).format(new Date(event.startDate));
            return (
              <EventPreview
                key={event.id}
                event={{
                  tag: label,
                  title: (
                    <Heading as="h2" sx={{ textAlign: 'start', mb: 3 }}>
                      {event.title}
                    </Heading>
                  ),
                  date,
                  speakers: undefined,
                  description: event.description && (
                    <MDXRenderer>{event.description.body}</MDXRenderer>
                  ),
                  registrationLink: event.registrationLink,
                  href: event.path,
                }}
              />
            );
          })}
        </Grid>
      </Container>
    </Layout>
  );
};

EventsPage.propTypes = {
  data: object.isRequired,
  pageContext: object.isRequired,
  location: object.isRequired,
};

export default EventsPage;
