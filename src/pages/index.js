import React from 'react';
import { object } from 'prop-types';
import { graphql } from 'gatsby';
import { SEO, useSiteMetadata } from '@undataforum/gatsby-theme-base';
import {
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

import PostList from '../components/post-list';
import Background from '../../content/blurbs/background.mdx';
import EnsuringContinuityIcon from '../components/ensuring-continuity-icon';
import DataSolutionsIcon from '../components/data-solutions-icon';
import OpenDataIcon from '../components/open-data-icon';
import SharingIcon from '../components/sharing-icon';
import WebLinksIcon from '../components/web-links-icon';
import WorkingRemotelyIcon from '../components/working-remotely-icon';

const Homepage = ({ data, location }) => {
  const { siteTitle, siteDescription } = useSiteMetadata();
  return (
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
        <Styled.h1 style={{ display: 'none' }}>{siteTitle}</Styled.h1>
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
            <EnsuringContinuityIcon height={[64, 80, 96]} />
            <Heading as="h2" sx={{ mt: 2, mb: 3 }}>
              Ensuring continuity
            </Heading>
            <Text sx={{ flexGrow: 1, mb: 3 }}>
              Rapid adaptation of data collection, processing and dissemination
              methods to ensure continuity of key statistical programmes.
            </Text>
            <Button
              as={Link}
              sx={{ color: 'primary', bg: 'background' }}
              href="/ensuring-continuity/"
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
            <WorkingRemotelyIcon height={[64, 80, 96]} />
            <Heading as="h2" sx={{ mt: 2, mb: 3 }}>
              Working remotely
            </Heading>
            <Text sx={{ flexGrow: 1, mb: 3 }}>
              Guidance and possible approaches to address managerial and IT
              challenges for operational continuity during the emergency
              situation.
            </Text>
            <Button
              as={Link}
              sx={{ color: 'primary', bg: 'background' }}
              href="/working-remotely/"
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
              Data solutions
            </Heading>
            <Text sx={{ flexGrow: 1, mb: 3 }}>
              Guidance and possible approaches for the production of timely data
              to monitor the evolution and impacts of COVID-19.
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
              Open data
            </Heading>
            <Text sx={{ flexGrow: 1, mb: 3 }}>
              Resources to support and encourage national statistical offices
              and other data producers to leverage and use open data.
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
              Useful links
            </Heading>
            <Text sx={{ flexGrow: 1, mb: 3 }}>
              Initiatives and resources provided by agencies of the UN system
              and beyond, including the regional economic and social commissions
              and stakeholders from private sector, academia, and civil society.
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
              Share experiences
            </Heading>
            <Text sx={{ flexGrow: 1, mb: 3 }}>
              Online webinars and twitter chats to share knowledge and
              experience on how the statsitical system can respond to the
              COVID-19 emergency.
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

        <Styled.h2>Background</Styled.h2>
        <Box mb={4}>
          <Background />
        </Box>

        <Styled.h2>Latest posts</Styled.h2>
        <PostList posts={data.allPost.nodes} mb={4} />
      </Container>
    </Layout>
  );
};

Homepage.propTypes = {
  data: object.isRequired,
  location: object.isRequired,
};

export default Homepage;

export const query = graphql`
  query {
    allPost(
      limit: 10
      sort: { fields: date, order: DESC }
      filter: { collection: { eq: "posts" } }
    ) {
      nodes {
        ...PostFragment
      }
    }
  }
`;
