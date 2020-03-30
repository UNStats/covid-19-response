/** @jsx jsx */
import { object, shape, string } from 'prop-types';
import { graphql } from 'gatsby';
import { Layout, Seo } from '@undataforum/gatsby-theme-base';
import { jsx, Box, Container, Styled } from 'theme-ui';
import { IntlProvider, FormattedMessage } from 'react-intl';
import messages from '@undataforum/gatsby-theme-blog/src/i18n/messages';

import PostList from '../components/post-list';
import Blurb from '../../content/blurbs/about.mdx';
import Background from '../../content/blurbs/background.mdx';

const Homepage = ({ data, location }) => (
  <IntlProvider locale="en" messages={messages.en}>
    <Layout location={location}>
      <Container
        sx={{
          maxWidth: 'width.default',
          px: [2, 3, 4],
          counterReset: 'collections',
        }}
      >
        <Seo
          title="Homepage"
          description={data.site.siteMetadata.description}
        />
        <Styled.h1>About this website</Styled.h1>
        <Box mb={4}>
          <Blurb />
        </Box>

        <Styled.h1>Background</Styled.h1>
        <Box mb={4}>
          <Background />
        </Box>

        <Styled.h2
          css={{
            textTransform: 'uppercase',
            '&::before': {
              counterIncrement: 'collections',
              content: 'counter(collections) ". "',
            },
          }}
        >
          <FormattedMessage id="statistical-programmes.title" />
        </Styled.h2>
        <Styled.p sx={{ fontStyle: 'italic', mb: 3 }}>
          <FormattedMessage id="statistical-programmes.description" />
        </Styled.p>
        <PostList posts={data.statisticalProgrammes.nodes} mb={4} />

        <Styled.h2
          css={{
            textTransform: 'uppercase',
            '&::before': {
              counterIncrement: 'collections',
              content: 'counter(collections) ". "',
            },
          }}
        >
          <FormattedMessage id="work-remotely.title" />
        </Styled.h2>
        <Styled.p sx={{ fontStyle: 'italic', mb: 3 }}>
          <FormattedMessage id="work-remotely.description" />
        </Styled.p>
        <PostList posts={data.workArrangements.nodes} mb={4} />

        <Styled.h2
          css={{
            textTransform: 'uppercase',
            '&::before': {
              counterIncrement: 'collections',
              content: 'counter(collections) ". "',
            },
          }}
        >
          <FormattedMessage id="data-solutions.title" />
        </Styled.h2>
        <Styled.p sx={{ fontStyle: 'italic', mb: 3 }}>
          <FormattedMessage id="data-solutions.description" />
        </Styled.p>
        <PostList posts={data.dataSolutions.nodes} mb={4} />

        <Styled.h2
          css={{
            textTransform: 'uppercase',
            '&::before': {
              counterIncrement: 'collections',
              content: 'counter(collections) ". "',
            },
          }}
        >
          <FormattedMessage id="useful-links.title" />
        </Styled.h2>
        <Styled.p sx={{ fontStyle: 'italic', mb: 3 }}>
          <FormattedMessage id="useful-links.description" />
        </Styled.p>
        <PostList posts={data.UsefulLinks.nodes} mb={4} />

        <Styled.h2
          css={{
            textTransform: 'uppercase',
            '&::before': {
              counterIncrement: 'collections',
              content: 'counter(collections) ". "',
            },
          }}
        >
          <FormattedMessage id="open-data.title" />
        </Styled.h2>
        <Styled.p sx={{ fontStyle: 'italic', mb: 3 }}>
          <FormattedMessage id="open-data.description" />
        </Styled.p>
        <PostList posts={data.openData.nodes} />
      </Container>
    </Layout>
  </IntlProvider>
);

Homepage.propTypes = {
  data: shape({
    site: shape({
      siteMetadata: shape({
        title: string.isRequired,
        lemma: string.isRequired,
        description: string.isRequired,
      }).isRequired,
    }).isRequired,
    dataCollection: object.isRequired,
    workArrangements: object.isRequired,
    dataPortals: object.isRequired,
  }).isRequired,
  location: shape({ pathname: string.isRequired }).isRequired,
};

export default Homepage;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    statisticalProgrammes: allPost(
      limit: 4
      sort: { fields: date, order: DESC }
      filter: { collection: { eq: "statistical-programmes" } }
    ) {
      nodes {
        id
        title {
          text
        }
        date(formatString: "MMM DD, YYYY")
        description {
          childMdx {
            body
          }
        }
        path
      }
    }
    workArrangements: allPost(
      limit: 4
      sort: { fields: date, order: DESC }
      filter: { collection: { eq: "work-remotely" } }
    ) {
      nodes {
        id
        title {
          text
        }
        date(formatString: "MMM DD, YYYY")
        description {
          childMdx {
            body
          }
        }
        path
      }
    }
    dataSolutions: allPost(
      limit: 4
      sort: { fields: date, order: DESC }
      filter: { collection: { eq: "data-solutions" } }
    ) {
      nodes {
        id
        title {
          text
        }
        date(formatString: "MMM DD, YYYY")
        description {
          childMdx {
            body
          }
        }
        path
      }
    }
    UsefulLinks: allPost(
      limit: 4
      sort: { fields: date, order: DESC }
      filter: { collection: { eq: "useful-links" } }
    ) {
      nodes {
        id
        title {
          text
        }
        date(formatString: "MMM DD, YYYY")
        description {
          childMdx {
            body
          }
        }
        path
      }
    }
    openData: allPost(
      limit: 4
      sort: { fields: date, order: DESC }
      filter: { collection: { eq: "open-data" } }
    ) {
      nodes {
        id
        title {
          text
        }
        date(formatString: "MMM DD, YYYY")
        description {
          childMdx {
            body
          }
        }
        path
      }
    }
  }
`;
