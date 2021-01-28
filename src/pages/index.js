/** @jsx jsx */
import { object } from 'prop-types';
import { graphql } from 'gatsby';
import { SEO, useSiteMetadata } from '@undataforum/gatsby-theme-base';
import {
  jsx,
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Layout,
  Link,
  Styled,
  Text,
} from '@undataforum/gatsby-theme-theme-ui';
import { IntlProvider, FormattedMessage } from 'react-intl';

import PostList from '../components/post-list';
import Background from '../../content/blurbs/background.mdx';
import ContinuityIcon from '../components/continuity-icon';
import DataSolutionsIcon from '../components/data-solutions-icon';
import OpenDataIcon from '../components/open-data-icon';
import SharingIcon from '../components/sharing-icon';
import WebLinksIcon from '../components/web-links-icon';
import WorkRemotelyIcon from '../components/work-remotely-icon';
import messages from '../i18n/messages';

const Homepage = ({ data, location }) => {
  const { siteDescription, siteLanguage } = useSiteMetadata();
  return (
    <IntlProvider locale={siteLanguage} messages={messages[siteLanguage]}>
      <Layout location={location}>
        <Container
          sx={{
            maxWidth: 'width.default',
            px: [2, 3, 4],
            counterReset: 'collections',
          }}
        >
          <SEO
            title="Homepage"
            description={siteDescription}
            path={location.pathname}
          />
          <Styled.h1 sx={{ display: 'none' }}>About this website</Styled.h1>
          <Text sx={{ bg: 'muted', fontSize: 4, p: 4, mb: 4 }}>
            {siteDescription}
          </Text>

          <Grid sx={{ mb: 4 }} gap={3} columns={[1, 2, 3]}>
            <Flex
              sx={{
                flexDirection: 'column',
                alignItems: 'start',
                color: 'background',
                bg: 'primary',
                p: 3,
              }}
            >
              <ContinuityIcon height={[64, 80, 96]} />
              <Heading as="h2" sx={{ mt: 2, mb: 3 }}>
                <FormattedMessage id="statistical-programmes.title" />
              </Heading>
              <Text sx={{ flexGrow: 1, mb: 3 }}>
                <FormattedMessage id="statistical-programmes.description" />
              </Text>
              <Button
                as={Link}
                sx={{ color: 'primary', bg: 'background' }}
                href="/statistical-programmes/"
              >
                Read more
              </Button>
            </Flex>

            <Flex
              sx={{
                flexDirection: 'column',
                alignItems: 'start',
                color: 'background',
                bg: 'primary',
                p: 3,
              }}
            >
              <WorkRemotelyIcon height={[64, 80, 96]} />
              <Heading as="h2" sx={{ mt: 2, mb: 3 }}>
                <FormattedMessage id="work-remotely.title" />
              </Heading>
              <Text sx={{ flexGrow: 1, mb: 3 }}>
                <FormattedMessage id="work-remotely.description" />
              </Text>
              <Button
                as={Link}
                sx={{ color: 'primary', bg: 'background' }}
                href="/work-remotely/"
              >
                Read more
              </Button>
            </Flex>

            <Flex
              sx={{
                flexDirection: 'column',
                alignItems: 'start',
                color: 'background',
                bg: 'primary',
                p: 3,
              }}
            >
              <DataSolutionsIcon height={[64, 80, 96]} />
              <Heading as="h2" sx={{ mt: 2, mb: 3 }}>
                <FormattedMessage id="data-solutions.title" />
              </Heading>
              <Text sx={{ flexGrow: 1, mb: 3 }}>
                <FormattedMessage id="data-solutions.description" />
              </Text>
              <Button
                as={Link}
                sx={{ color: 'primary', bg: 'background' }}
                href="/data-solutions/"
              >
                Read more
              </Button>
            </Flex>

            <Flex
              sx={{
                flexDirection: 'column',
                alignItems: 'start',
                color: 'background',
                bg: 'primary',
                p: 3,
              }}
            >
              <OpenDataIcon height={[64, 80, 96]} />
              <Heading as="h2" sx={{ mt: 2, mb: 3 }}>
                <FormattedMessage id="open-data.title" />
              </Heading>
              <Text sx={{ flexGrow: 1, mb: 3 }}>
                <FormattedMessage id="open-data.description" />
              </Text>
              <Button
                as={Link}
                sx={{ color: 'primary', bg: 'background' }}
                href="/open-data/"
              >
                Read more
              </Button>
            </Flex>

            <Flex
              sx={{
                flexDirection: 'column',
                alignItems: 'start',
                color: 'background',
                bg: 'primary',
                p: 3,
              }}
            >
              <WebLinksIcon height={[64, 80, 96]} monochrome />
              <Heading as="h2" sx={{ mt: 2, mb: 3 }}>
                <FormattedMessage id="useful-links.title" />
              </Heading>
              <Text sx={{ flexGrow: 1, mb: 3 }}>
                <FormattedMessage id="useful-links.description" />
              </Text>
              <Button
                as={Link}
                sx={{ color: 'primary', bg: 'background' }}
                href="/useful-links/"
              >
                Read more
              </Button>
            </Flex>

            <Flex
              sx={{
                flexDirection: 'column',
                alignItems: 'start',
                color: 'background',
                bg: 'primary',
                p: 3,
              }}
            >
              <SharingIcon height={[64, 80, 96]} monochrome />
              <Heading as="h2" sx={{ mt: 2, mb: 3 }}>
                <FormattedMessage id="sharing.title" />
              </Heading>
              <Text sx={{ flexGrow: 1, mb: 3 }}>
                <FormattedMessage id="sharing.description" />
              </Text>
              <Button
                as={Link}
                sx={{ color: 'primary', bg: 'background' }}
                href="/sharing/"
              >
                Read more
              </Button>
            </Flex>
          </Grid>

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
          <PostList posts={data.workRemotely.nodes} mb={4} />

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
          <PostList posts={data.usefulLinks.nodes} mb={4} />

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
};

Homepage.propTypes = {
  data: object.isRequired,
  location: object.isRequired,
};

export default Homepage;

export const query = graphql`
  query {
    statisticalProgrammes: allPost(
      limit: 4
      sort: { fields: date, order: DESC }
      filter: { collection: { eq: "statistical-programmes" } }
    ) {
      nodes {
        id
        title
        date(formatString: "MMM DD, YYYY")
        description {
          body
        }
        path
      }
    }
    workRemotely: allPost(
      limit: 4
      sort: { fields: date, order: DESC }
      filter: { collection: { eq: "work-remotely" } }
    ) {
      nodes {
        id
        title
        date(formatString: "MMM DD, YYYY")
        description {
          body
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
        title
        date(formatString: "MMM DD, YYYY")
        description {
          body
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
        title
        date(formatString: "MMM DD, YYYY")
        description {
          body
        }
        path
      }
    }
    usefulLinks: allPost(
      limit: 4
      sort: { fields: date, order: DESC }
      filter: { collection: { eq: "useful-links" } }
    ) {
      nodes {
        id
        title
        date(formatString: "MMM DD, YYYY")
        description {
          body
        }
        path
      }
    }
  }
`;
