const pkg = require('./package.json');

module.exports = {
  siteMetadata: {
    title: 'Response of statistical systems to COVID-19 emergency',
    lemma: 'Statistics emergency response',
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
        basePath: '/data-innovation',
        contentPath: 'content/data-innovation',
        // assetPath: 'content/assets'
        collection: 'data-innovation',
      },
    },
    {
      resolve: '@undataforum/gatsby-theme-blog',
      options: {
        basePath: '/open-data',
        contentPath: 'content/open-data',
        // assetPath: 'content/assets'
        collection: 'open-data',
      },
    },
    '@undataforum/gatsby-theme-profiles',
  ],
};
