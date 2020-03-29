import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { IntlProvider, FormattedMessage } from 'react-intl';
import merge from 'deepmerge';
import postsMessages from '@undataforum/gatsby-theme-blog/src/i18n/messages';
import eventsMessages from '@undataforum/gatsby-theme-events/src/i18n/messages';

import Header from '../../../components/header';

const messages = merge(postsMessages, eventsMessages);

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
    <IntlProvider locale="en" messages={messages.en}>
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
            children: <FormattedMessage id="un-system.title" />,
            href: '/un-system/',
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
