import React from 'react';
import { object } from 'prop-types';
import { SEO } from '@undataforum/gatsby-theme-base';
import {
  Container,
  EventPreview,
  Heading,
  Link,
  NewTabLink,
  Layout,
  Styled,
  Tags,
} from '@undataforum/gatsby-theme-theme-ui';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { createPath } from '@maiertech/gatsby-helpers';
const ShadowedEventPage = ({ data, pageContext, location }) => {
  const { event } = data;
  const { label } = pageContext.themeOptions;

  // Format start date.
  const date = new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'long',
  }).format(new Date(event.startDate));

  // Create values array for Tags component.
  const { basePath, tagCollection } = pageContext.themeOptions;
  let values = [];
  if (event.tags) {
    values = event.tags.map((tag) => ({
      tag,
      path: createPath(basePath, tagCollection, tag),
    }));
  }

  return (
    <Layout location={location}>
      <SEO
        title={event.title}
        description={event.description.text}
        path={location.pathname}
      />
      <Container variant="narrow">
        <EventPreview
          event={{
            tag: label,
            title: (
              <Heading as="h1" sx={{ textAlign: 'start', mb: 3 }}>
                {event.title}
              </Heading>
            ),
            date,
            registrationLink: event.registrationLink,
          }}
          mb={3}
        />
        <Tags values={values} variant="tags.secondary" mb={3} />
        <MDXRenderer>{event.body}</MDXRenderer>
        {event.attachments && event.attachments.length > 0 && (
          <>
            <Styled.h2>Presentations</Styled.h2>
            <ul>
              {event.attachments.map(({ base, publicURL }) => (
                <li key={base}>
                  <Link as={NewTabLink} href={publicURL}>
                    {base}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </Container>
    </Layout>
  );
};

ShadowedEventPage.propTypes = {
  data: object.isRequired,
  pageContext: object.isRequired,
  location: object.isRequired,
};

export default ShadowedEventPage;
