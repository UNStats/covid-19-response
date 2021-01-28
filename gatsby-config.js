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
    'gatsby-plugin-mdx',
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
        collection: 'statistical-programmes',
        contentPath: 'content/statistical-programmes',
        mdxOtherwiseConfigured: true,
        // This option is passed through to page components.
        tagCollection: 'tags',
      },
    },
    {
      resolve: '@undataforum/gatsby-theme-posts-core',
      options: {
        // basePath: '/',
        collection: 'work-remotely',
        contentPath: 'content/work-remotely',
        mdxOtherwiseConfigured: true,
        // This option is passed through to page components.
        tagCollection: 'tags',
      },
    },
    {
      resolve: '@undataforum/gatsby-theme-posts-core',
      options: {
        // basePath: '/',
        collection: 'data-solutions',
        contentPath: 'content/data-solutions',
        // This option is passed through to page components.
        tagCollection: 'tags',
      },
    },
    {
      resolve: '@undataforum/gatsby-theme-posts-core',
      options: {
        // basePath: '/',
        collection: 'open-data',
        contentPath: 'content/open-data',
        // This option is passed through to page components.
        tagCollection: 'tags',
      },
    },
    {
      resolve: '@undataforum/gatsby-theme-posts-core',
      options: {
        // basePath: '/',
        collection: 'useful-links',
        contentPath: 'content/useful-links',
        assetPath: 'content/assets/posts',
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
        // This option is passed through to page components.
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
    // {
    //   resolve: '@maiertech/gatsby-theme-tags-core',
    //   options: {
    //     // basePath: '/',
    //     // tagCollection: 'tags',
    //     mdxCollections: [
    //       'statistical-programmes',
    //       'work-remotely',
    //       'data-solutions',
    //       'open-data',
    //       'useful-links',
    //       'sharing',
    //     ],
    //   },
    // },
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
