import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { IntlProvider, FormattedMessage } from 'react-intl';
import postsMessages from '@undataforum/gatsby-theme-blog/src/i18n/translations/en';
import eventsMessages from '@undataforum/gatsby-theme-events/src/i18n/translations/en';

import Header from '../../../components/header';

const messages = { ...eventsMessages, ...postsMessages };

const ShadowedHeader = (props) => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <IntlProvider locale="en" messages={messages}>
      <Header
        {...props}
        entity="Department of Economic and Social Affairs"
        topic="Statistics"
        title={data.site.siteMetadata.title}
        links={[
          {
            children: 'Home',
            href: '/',
          },
          {
            children: <FormattedMessage id="statistical-programmes.title" />,
            href: '/statistical-programmes/',
          },
          {
            children: <FormattedMessage id="work-remotely.title" />,
            href: '/work-remotely/',
          },
          {
            children: <FormattedMessage id="data-solutions.title" />,
            href: '/data-solutions/',
          },
          {
            children: <FormattedMessage id="open-data.title" />,
            href: '/open-data/',
          },
          {
            children: <FormattedMessage id="useful-links.title" />,
            href: '/useful-links/',
          },
          {
            children: <FormattedMessage id="sharing.title" />,
            href: '/sharing/',
          },
        ]}
      />
    </IntlProvider>
  );
};

export default ShadowedHeader;
