import React from 'react';
import {
  Box,
  Container,
  EmailIcon,
  Flex,
  GitHubIcon,
  Heading,
  Link,
  SocialIcons,
  Text,
  TwitterIcon,
} from '@undataforum/gatsby-theme-theme-ui';

import UnitedNationsLogo from '../../../components/united-nations-logo';
import GlobalPartnershipLogo from '../../../components/global-partnership-logo';
import OpenDataWatchLogo from '../../../components/open-data-watch-logo';

const links = [
  { text: 'Contact', href: '/contact/' },
  { text: 'Copyright', href: '/copyright/' },
  { text: 'Privacy Notice', href: '/privacy-notice/' },
  { text: 'Terms of Use', href: '/terms-of-use/' },
  { text: 'Credits', href: '/credits/' },
];

const ShadowedFooter = () => (
  <Box
    as="footer"
    sx={{
      color: 'background',
      bg: 'secondary',
      borderTop: (theme) => `solid 5px ${theme.colors.primary}`,
    }}
  >
    <Container sx={{ maxWidth: 'width.default', px: [2, 3, 4], py: 4 }}>
      <Flex sx={{ flexDirection: 'column', alignItems: 'start' }}>
        <Link href="https://unstats.un.org" sx={{ color: 'inherit' }}>
          <Flex
            sx={{
              flexDirection: ['column', 'row'],
              alignItems: ['start', 'center'],
              mb: 4,
            }}
          >
            <UnitedNationsLogo monochrome height={[64, 80]} />
            <Flex
              sx={{
                flexDirection: 'column',
                alignItems: 'start',
                borderTop: [
                  (theme) => `solid 2px ${theme.colors.background}`,
                  'none',
                ],

                borderLeft: [
                  'none',
                  (theme) => `solid 2px ${theme.colors.background}`,
                ],
                mt: [3, 0],
                pt: [2, 0],
                pl: [0, 3],
              }}
            >
              <Heading sx={{ fontSize: [4, 5], textAlign: 'left' }}>
                Department of Economic and Social Affairs
              </Heading>
              <Text
                sx={{
                  fontSize: [3, 4],
                  lineHeight: 'heading',
                  textAlign: 'start',
                }}
              >
                Statistics
              </Text>
            </Flex>
          </Flex>
        </Link>
        <Heading sx={{ mb: 3 }}>In partnership with</Heading>
        <Flex
          sx={{
            flexDirection: ['column', 'row'],
            flexWrap: ['none', 'wrap'],
            alignItems: 'start',
            mb: 4,
          }}
        >
          <Link
            href="http://www.data4sdgs.org/"
            sx={{ color: 'inherit', mr: 3, mb: 3 }}
          >
            <GlobalPartnershipLogo monochrome height={96} />
          </Link>
          <Link
            href="https://opendatawatch.com/"
            sx={{ color: 'inherit', mb: 3 }}
          >
            <OpenDataWatchLogo monochrome height={96} />
          </Link>
        </Flex>
        <SocialIcons
          values={[
            {
              id: 'twitter',
              icon: (
                <Link
                  href="https://twitter.com/unstats"
                  sx={{ color: 'inherit' }}
                >
                  <TwitterIcon size={48} title="Follow us on Twitter" />
                </Link>
              ),
            },
            {
              id: 'email',
              icon: (
                <Link
                  href="mailto:covid-19.stats@un.org"
                  sx={{ color: 'inherit' }}
                >
                  <EmailIcon size={48} title="Send us an email" />
                </Link>
              ),
            },
            {
              id: 'github',
              icon: (
                <Link
                  href="https://github.com/unstats"
                  sx={{ color: 'inherit' }}
                >
                  <GitHubIcon size={48} title="Follow us on GitHub" />
                </Link>
              ),
            },
          ]}
          align="start"
          mb={[3, 4]}
        />
        <Flex sx={{ flexWrap: 'wrap', justifyContent: 'start' }}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              sx={{ color: 'inherit', pr: [2, 3], pb: [1, 2] }}
            >
              <Text sx={{ fontFamily: 'body', textAlign: 'start' }}>
                {link.text}
              </Text>
            </Link>
          ))}
        </Flex>
      </Flex>
    </Container>
  </Box>
);

export default ShadowedFooter;
