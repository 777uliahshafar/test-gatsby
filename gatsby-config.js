/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */

  /* Your data query */
  siteMetadata: {
    title:'Gatsby blog',
  },


  /* All plugin*/
  plugins:  [
    'gatsby-plugin-sass',

    {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'files',
          path: `${__dirname}/src/markdown`,
        },
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
          plugins: [
              'gatsby-remark-relative-images',
              {
                  resolve: 'gatsby-remark-images',
                  options: {
                      maxWidth: 750,
                      linkImagesToOriginal: false
                  },
              },
          ]
      },
  },
  {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [
        `Lato\:300,700`,
        `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
      ],
      display: 'swap'
    }
  }

]

}