import React from 'react';
import { node } from 'prop-types';
import { Layout } from '@undataforum/gatsby-theme-base';
import { Container } from 'theme-ui';

const HomepageLayout = ({ children, ...props }) => {
  return (
    <Layout {...props}>
      <Container
        sx={{
          maxWidth: 'width.default',
          px: [2, 3, 4],
        }}
      >
        {children}
      </Container>
    </Layout>
  );
};

HomepageLayout.propTypes = {
  children: node.isRequired,
};

export default HomepageLayout;
