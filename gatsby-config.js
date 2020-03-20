const pkg = require('./package.json');

module.exports = {
  siteMetadata: {
    title: 'COVID-19 response for National Statistical Offices',
    description: pkg.description,
    keywords: ['National Statistical Offices'],
    siteTwitterUsername: 'UNStats',
    siteUrl: pkg.homepage,
  },
  plugins: [
    {
      resolve: '@undataforum/gatsby-theme-blog',
      options: {
        basePath: '/category1',
        contentPath: 'content/category1',
        // assetPath: 'content/assets',
        collection: 'category1',
      },
    },
    {
      resolve: '@undataforum/gatsby-theme-blog',
      options: {
        basePath: '/category2',
        contentPath: 'content/category2',
        // assetPath: 'content/assets'
        collection: 'category2',
      },
    },
    '@undataforum/gatsby-theme-profiles',
  ],
};
