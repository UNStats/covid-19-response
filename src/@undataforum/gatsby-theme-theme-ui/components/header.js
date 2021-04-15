import React from 'react';
import { shape, string } from 'prop-types';
import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  Text,
} from '@undataforum/gatsby-theme-theme-ui';
import { useSiteMetadata } from '@undataforum/gatsby-theme-base';

import UnitedNationsLogo from '../../../components/united-nations-logo';

const entity = 'Department of Economic and Social Affairs';
const topic = 'Statistics';
const links = [
  {
    href: '/',
    children: 'Home',
  },
  {
    href: '/ensuring-continuity/',
    children: 'Ensuring continuity',
  },
  {
    href: '/working-remotely/',
    children: 'Working remotely',
  },
  {
    href: '/data-solutions/',
    children: 'Data solutions',
  },
  {
    href: '/open-data/',
    children: 'Open data',
  },
  {
    href: '/useful-links/',
    children: 'Useful links',
  },
  {
    href: '/sharing/',
    children: 'Share experiences',
  },
];

const Header = ({ location, ...props }) => {
  const { siteTitle } = useSiteMetadata();
  return (
    <Container
      {...props}
      sx={{
        maxWidth: 'width.default',
        px: [2, 3, 4],
        pb: [2, 3],
        borderTop: (theme) => `solid 5px ${theme.colors.primary}`,
      }}
    >
      <Flex
        sx={{
          flexDirection: 'row',
          alignItems: 'center',
          py: [3, 4],
        }}
      >
        <UnitedNationsLogo height={[null, 80]} width={[256, 'unset']} />
        <Flex
          sx={{
            flexDirection: 'column',
            borderLeft: (theme) => `solid 2px ${theme.colors.secondary}`,
            color: 'secondary',
            pl: [2, 3],
          }}
        >
          <Heading sx={{ fontSize: [4, 5] }}>{entity}</Heading>
          <Text sx={{ fontSize: [3, 4], lineHeight: 'heading' }}>
            {`${topic}${siteTitle ? ' • ' : null}${siteTitle}`}
          </Text>
        </Flex>
      </Flex>
      <Flex
        sx={{
          flexDirection: ['column', 'row'],
          flexWrap: 'wrap',
        }}
      >
        {links.map((link) => {
          let isSubpath = false;
          // Prevent '/' from being always highlighted.
          if (link.href !== '/') {
            isSubpath = location.pathname.startsWith(link.href);
          }
          const isExactPath = location.pathname === link.href;
          // Turn off nav link for exact path matches by removing href prop.
          const href = isExactPath ? undefined : link.href;
          return (
            <Box
              key={link.href}
              sx={{
                // isExactPath is required to highlight Home nav.
                color: isSubpath || isExactPath ? 'text' : 'background',
                bg: isSubpath || isExactPath ? 'muted' : 'secondary',
                borderRight: [
                  'none',
                  (theme) => `solid 1px ${theme.colors.background}`,
                ],
                borderBottom: (theme) => `solid 1px ${theme.colors.background}`,
                p: 2,
                '@media (hover: hover)': {
                  '&:hover': {
                    color: 'text',
                    bg: 'muted',
                  },
                },
              }}
            >
              <Link
                href={href}
                sx={{
                  borderBottom: 'none',
                  color: 'inherit',
                }}
              >
                {link.children}
              </Link>
            </Box>
          );
        })}
      </Flex>
    </Container>
  );
};

Header.propTypes = {
  location: shape({ pathname: string.isRequired }).isRequired,
};

export default Header;
