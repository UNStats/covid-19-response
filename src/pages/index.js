/** @jsx jsx */
import { object, shape, string } from 'prop-types';
import { graphql } from 'gatsby';
import { Layout, Seo } from '@undataforum/gatsby-theme-base';
import { jsx, Box, Container, Styled } from 'theme-ui';
import { IntlProvider, FormattedMessage } from 'react-intl';
import messages from '@undataforum/gatsby-theme-blog/src/i18n/messages';

import PostList from '../components/post-list';
import Blurb from '../../content/blurb.mdx';
import Background from '../../content/background.mdx';

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
          <FormattedMessage id="data-collection.title" />
        </Styled.h2>
        <Styled.p sx={{ fontStyle: 'italic', mb: 3 }}>
          <FormattedMessage id="data-collection.description" />
        </Styled.p>
        <PostList posts={data.dataCollection.nodes} mb={4} />

        <Styled.h2
          css={{
            textTransform: 'uppercase',
            '&::before': {
              counterIncrement: 'collections',
              content: 'counter(collections) ". "',
            },
          }}
        >
          <FormattedMessage id="work-arrangements.title" />
        </Styled.h2>
        <Styled.p sx={{ fontStyle: 'italic', mb: 3 }}>
          <FormattedMessage id="work-arrangements.description" />
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
          <FormattedMessage id="data-innovation.title" />
        </Styled.h2>
        <Styled.p sx={{ fontStyle: 'italic', mb: 3 }}>
          <FormattedMessage id="data-innovation.description" />
        </Styled.p>
        <PostList posts={data.dataInnovation.nodes} mb={4} />

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
    dataCollection: allPost(
      limit: 4
      sort: { fields: date, order: DESC }
      filter: { collection: { eq: "data-collection" } }
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
      filter: { collection: { eq: "work-arrangements" } }
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
    dataInnovation: allPost(
      limit: 4
      sort: { fields: date, order: DESC }
      filter: { collection: { eq: "data-innovation" } }
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
