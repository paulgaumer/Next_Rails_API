/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

// import React from "react"
// import PropTypes from "prop-types"
// import Helmet from "react-helmet"
// import { useStaticQuery, graphql } from "gatsby"

// function SEO({ lang, meta }) {
//   const { site } = useStaticQuery(
//     graphql`
//       query {
//         site {
//           siteMetadata {
//             title
//             description
//             author
//             image
//             siteUrl
//           }
//         }
//       }
//     `
//   )

//   return (
//     <Helmet
//       htmlAttributes={{
//         lang,
//       }}
//       title={site.siteMetadata.title}
//       titleTemplate={`${site.siteMetadata.title}`}
//       meta={[
//         {
//           name: `description`,
//           content: site.siteMetadata.description,
//         },
//         {
//           property: `og:title`,
//           content: site.siteMetadata.title,
//         },
//         {
//           property: `og:description`,
//           content: site.siteMetadata.description,
//         },
//         {
//           property: `og:image`,
//           content: `https://podwii.com/images/banner-seo.png`,
//         },
//         {
//           property: `og:image:width`,
//           content: `2400`,
//         },
//         {
//           property: `og:image:height`,
//           content: `1260`,
//         },
//         {
//           property: `og:type`,
//           content: `website`,
//         },
//         {
//           property: `og:url`,
//           content: site.siteMetadata.siteUrl,
//         },
//         {
//           name: `twitter:card`,
//           content: `summary_large_image`,
//         },
//         {
//           name: `twitter:creator`,
//           content: site.siteMetadata.author,
//         },
//         {
//           name: `twitter:image`,
//           content: `https://podwii.com/images/banner-seo.png`,
//         },
//         {
//           name: `twitter:creator`,
//           content: site.siteMetadata.author,
//         },
//         {
//           name: `twitter:title`,
//           content: site.siteMetadata.title,
//         },
//         {
//           name: `twitter:description`,
//           content: site.siteMetadata.description,
//         },
//       ].concat(meta)}
//     />
//   )
// }

// SEO.defaultProps = {
//   lang: `en`,
//   meta: [],
//   // description: ``,
// }

// SEO.propTypes = {
//   description: PropTypes.string,
//   lang: PropTypes.string,
//   meta: PropTypes.arrayOf(PropTypes.object),
//   title: PropTypes.string.isRequired,
// }

// export default SEO
