const pkg = require('./package.json');

module.exports = {
  siteMetadata: {
    siteTitle: 'COVID-19 response',
    siteDescription: pkg.description,
    siteKeywords: [
      'COVID-19',
      'Global Statistical System',
      'National Statistical Systems',
    ],
    siteUrl: pkg.homepage,
    siteTwitter: 'UNStats',
    siteLanguage: 'en',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: (file) => `downloads/${file.hash}/${file.name}`,
            },
          },
        ],
      },
    },
    {
      resolve: '@undataforum/gatsby-theme-base',
      options: {
        mdxOtherwiseConfigured: true,
      },
    },
    '@undataforum/gatsby-theme-theme-ui',
    {
      resolve: '@undataforum/gatsby-theme-posts-core',
      options: {
        // basePath: '/',
        // collection: 'posts',
        // contentPath: 'content/posts',
        mdxOtherwiseConfigured: true,
        // The following options passed through to page components.
        label: 'Post',
        tagCollection: 'tags',
        postsPageTitle: 'Posts',
        postsPageDescription: 'All posts.',
      },
    },
    {
      resolve: '@undataforum/gatsby-theme-posts-core',
      options: {
        // basePath: '/',
        collection: 'useful-links',
        contentPath: 'content/useful-links',
        mdxOtherwiseConfigured: true,
        // This option is passed through to page components.
        tagCollection: 'tags',
      },
    },
    {
      resolve: '@undataforum/gatsby-theme-events-core',
      options: {
        // basePath: '/',
        collection: 'sharing',
        contentPath: 'content/sharing',
        mdxOtherwiseConfigured: true,
        // These options are passed through to page components.
        label: 'Event',
        eventsPageTitle: 'Sharing experiences',
        eventsPageDescription:
          'Online webinars and twitter chats to share knowledge and experience on how the statsitical system can respond to the COVID-19 emergency.',
        tagCollection: 'tags',
      },
    },
    {
      resolve: '@maiertech/gatsby-theme-pages-core',
      options: {
        // basePath: '/',
        // collection: 'posts',
        // contentPath: 'content/pages',
        mdxOtherwiseConfigured: true,
      },
    },
    {
      resolve: '@maiertech/gatsby-theme-tags-core',
      options: {
        // basePath: '/',
        // tagCollection: 'tags',
        mdxCollections: ['posts'],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-48267274-9',
        anonymize: true,
        respectDNT: true,
      },
    },
  ],
};
