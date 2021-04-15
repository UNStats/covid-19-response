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
import DataSolutionsIcon from '../components/data-solutions-icon';

const DataSolutionsPage = ({ data, pageContext, location }) => {
  const posts = data.allPost.nodes;

  return (
    <Layout location={location}>
      <SEO
        title="Data solutions"
        description="Guidance and possible approaches for the production of timely data to monitor the evolution and impacts of COVID-19."
        path={location.pathname}
      />
      <Container>
        <Styled.h1>Data solutions</Styled.h1>
        <Box sx={{ color: 'primary', mt: -2, mb: 2 }}>
          <DataSolutionsIcon height={96} />
        </Box>
        <Styled.p>
          National statistical systems are called to leverage all sources of
          data at their disposal and mobilize partners and experts from all
          sectors of society to implement solutions for the production of timely
          and disaggregated statistics urgently needed to understand and respond
          to the global COVID-19 crisis.
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

DataSolutionsPage.propTypes = {
  data: object.isRequired,
  pageContext: object.isRequired,
  location: object.isRequired,
};

export default DataSolutionsPage;

export const query = graphql`
  {
    allPost(
      sort: { fields: date, order: DESC }
      filter: { tags: { in: "data-solutions" } }
    ) {
      nodes {
        ...PostFragment
      }
    }
  }
`;
