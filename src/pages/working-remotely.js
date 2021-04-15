import React from 'react';
import { object } from 'prop-types';
import { SEO } from '@undataforum/gatsby-theme-base';
import {
  Box,
  Container,
  Grid,
  Heading,
  Layout,
  Names,
  PostPreview,
  Styled,
} from '@undataforum/gatsby-theme-theme-ui';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql } from 'gatsby';
import WorkingRemotelyIcon from '../components/working-remotely-icon';

const WorkingRemotleyPage = ({ data, pageContext, location }) => {
  const posts = data.allPost.nodes;

  return (
    <Layout location={location}>
      <SEO
        title="Working remotely"
        description="Guidance and possible approaches to address managerial and IT challenges for operational continuity during the emergency situation."
        path={location.pathname}
      />
      <Container>
        <Styled.h1>Working remotely</Styled.h1>
        <Box sx={{ color: 'primary', mt: -2, mb: 2 }}>
          <WorkingRemotelyIcon height={96} />
        </Box>
        <Styled.p>
          To help slow the spread of the COVID-19 pandemic, the staff of
          national statistical organizations around the world are being required
          to work from home, creating challenges in managing workflow solutions
          and, in many cases, accessing tools and support from external
          partners.
        </Styled.p>
        <Grid gap={4} columns={[1, null, 2]} mt={4}>
          {posts.map((post) => (
            <PostPreview
              key={post.id}
              post={{
                title: (
                  <Heading as="h2" sx={{ textAlign: 'start', mb: 3 }}>
                    {post.title}
                  </Heading>
                ),
                authors: post.authors && <Names values={post.authors} mb={3} />,
                date: post.date,
                description: <MDXRenderer>{post.description.body}</MDXRenderer>,
                href: post.path,
              }}
            />
          ))}
        </Grid>
      </Container>
    </Layout>
  );
};

WorkingRemotleyPage.propTypes = {
  data: object.isRequired,
  pageContext: object.isRequired,
  location: object.isRequired,
};

export default WorkingRemotleyPage;

export const query = graphql`
  {
    allPost(
      sort: { fields: date, order: DESC }
      filter: { tags: { in: "working-remotely" } }
    ) {
      nodes {
        ...PostFragment
      }
    }
  }
`;
