import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import { Box, Container, Flex, Heading, Text } from 'theme-ui';
import { SmartLink, SocialIcons } from '@undataforum/components';

import UnitedNationsLogo from './united-nations-logo';
import GlobalPartnershipLogo from './global-partnership-logo';
import OpenDataWatchLogo from './open-data-watch-logo';

const Footer = ({ links }) => (
  <Box
    as="footer"
    sx={{
      color: 'background',
      bg: 'secondary',
      borderTop: (theme) => `solid 5px ${theme.colors.primary}`,
    }}
  >
    <Container sx={{ maxWidth: 'width.default', px: [2, 3, 4], py: 4 }}>
      <Flex
        sx={{ flexDirection: 'column', alignItems: ['center', 'flex-start'] }}
      >
        <SmartLink href="https://unstats.un.org" variant="inherit">
          <Flex
            sx={{
              flexDirection: ['column', 'row'],
              alignItems: 'center',
              mb: 4,
            }}
          >
            <UnitedNationsLogo monochrome height={[64, 80]} />
            <Flex
              sx={{
                flexDirection: 'column',
                alignItems: ['center', 'flex-start'],
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
              <Heading sx={{ fontSize: [4, 5], textAlign: ['center', 'left'] }}>
                Department of Economic and Social Affairs
              </Heading>
              <Text
                sx={{
                  fontSize: [3, 4],
                  lineHeight: 'heading',
                  textAlign: ['center', 'left'],
                }}
              >
                Statistics
              </Text>
            </Flex>
          </Flex>
        </SmartLink>
        <Heading sx={{ mb: 3 }}>In partnership with</Heading>
        <Flex
          sx={{
            flexDirection: ['column', 'row'],
            flexWrap: ['none', 'wrap'],
            alignItems: 'center',
            mb: 4,
          }}
        >
          <SmartLink
            sx={{ mr: 3, mb: 3 }}
            href="http://www.data4sdgs.org/"
            variant="inherit"
          >
            <GlobalPartnershipLogo monochrome height={96} />
          </SmartLink>
          <SmartLink
            sx={{ mb: 3 }}
            href="https://opendatawatch.com/"
            variant="inherit"
          >
            <OpenDataWatchLogo monochrome height={96} />
          </SmartLink>
        </Flex>
        <SocialIcons
          platforms={[
            {
              id: 'twitter',
              username: 'UNStats',
              title: 'Follow us on Twitter',
            },
            {
              id: 'email',
              username: 'covid-19.stats@un.org',
              title: 'Send us an email',
            },
            {
              id: 'github',
              username: 'UNStats',
              title: 'Follow us on GitHub',
            },
          ]}
          size={48}
          variant="inherit"
          mb={[3, 4]}
        />
        <Flex sx={{ flexWrap: 'wrap', justifyContent: 'center' }}>
          {links.map((link) => (
            <SmartLink
              href={link.href}
              key={link.href}
              pr={[2, 3]}
              pb={[1, 2]}
              variant="inherit"
            >
              <Text sx={{ fontFamily: 'body', textAlign: 'center' }}>
                {link.text}
              </Text>
            </SmartLink>
          ))}
        </Flex>
      </Flex>
    </Container>
  </Box>
);

Footer.propTypes = {
  links: arrayOf(shape({ href: string.isRequired, text: string.isRequired }))
    .isRequired,
};

export default Footer;
