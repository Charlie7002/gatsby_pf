import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

//children and image emtpy fallback
const Seo = ({ title, description, location, image, children }) => {
  const { site } = useStaticQuery(graphql`
    {
      site(siteMetadata: {}) {
        siteMetadata {
          author
          description
          title
        }
      }
    }
  `)
  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{ lang: "fr" }}
      title={`${title} | ${site.siteMetadata.title}`}
      //   meta={[
      //     { name: `description`, content: metaDescription },
      //     { name: `charSet`, content: "utf-8" },
      //     { name: `og:url`, content: "location.href" },
      //   ]}
    >
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charset="utf-8" />
      <meta name="description" content={metaDescription} />
      {location && <meta property="og:url" content={location.href} />}
      <meta property="og:image" content={image || "/assets/icons/logocc.svg"} />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta
        property="og:site_name"
        content={site.siteMetadata.title}
        key="ogsitename"
      />
      <meta
        property="og:description"
        content={site.siteMetadata.description}
        key="ogdescription"
      />
      {children}
    </Helmet>
  )
}

export default Seo
