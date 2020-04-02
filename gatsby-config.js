const pkg = require('./package.json');

module.exports = {
  siteMetadata: {
    title: 'COVID-19 response',
    description: pkg.description,
    keywords: [
      'COVID-19',
      'Global Statistical System',
      'National Statistical Systems',
    ],
    siteTwitterUsername: 'UNStats',
    siteUrl: pkg.homepage,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-48267274-9',
        anonymize: true,
        respectDNT: true,
      },
    },
    {
      resolve: '@undataforum/gatsby-theme-blog',
      options: {
        basePath: '/data-solutions',
        contentPath: 'content/data-solutions',
        assetPath: 'content/assets/posts',
        collection: 'data-solutions',
      },
    },
    {
      resolve: '@undataforum/gatsby-theme-blog',
      options: {
        basePath: '/statistical-programmes',
        contentPath: 'content/statistical-programmes',
        assetPath: 'content/assets/posts',
        collection: 'statistical-programmes',
      },
    },
    {
      resolve: '@undataforum/gatsby-theme-blog',
      options: {
        basePath: '/open-data',
        contentPath: 'content/open-data',
        assetPath: 'content/assets/posts',
        collection: 'open-data',
      },
    },
    {
      resolve: '@undataforum/gatsby-theme-blog',
      options: {
        basePath: '/useful-links',
        contentPath: 'content/useful-links',
        assetPath: 'content/assets/posts',
        collection: 'useful-links',
      },
    },
    {
      resolve: '@undataforum/gatsby-theme-blog',
      options: {
        basePath: '/work-remotely',
        contentPath: 'content/work-remotely',
        assetPath: 'content/assets/posts',
        collection: 'work-remotely',
      },
    },
    {
      resolve: '@undataforum/gatsby-theme-events',
      options: {
        basePath: '/sharing',
        contentPath: 'content/sharing',
        assetPath: 'content/assets/events',
        collection: 'sharing',
      },
    },
    '@undataforum/gatsby-theme-profiles',
  ],
};
