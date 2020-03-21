const pkg = require('./package.json');

module.exports = {
  siteMetadata: {
    title: 'Response of statistical systems to COVID-19 emergency',
    lemma: 'COVID-19 response',
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
      resolve: '@undataforum/gatsby-theme-blog',
      options: {
        basePath: '/data-collection',
        contentPath: 'content/data-collection',
        // assetPath: 'content/assets',
        collection: 'data-collection',
      },
    },
    {
      resolve: '@undataforum/gatsby-theme-blog',
      options: {
        basePath: '/work-arrangements',
        contentPath: 'content/work-arrangements',
        // assetPath: 'content/assets'
        collection: 'work-arrangements',
      },
    },
    {
      resolve: '@undataforum/gatsby-theme-blog',
      options: {
        basePath: '/data-portals',
        contentPath: 'content/data-portals',
        // assetPath: 'content/assets'
        collection: 'data-portals',
      },
    },
    '@undataforum/gatsby-theme-profiles',
  ],
};
