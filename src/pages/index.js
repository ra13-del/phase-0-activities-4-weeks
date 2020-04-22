import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

function IndexPage({ data: { markdownRemark } }) {
  const { html } = markdownRemark
  return (
    <Layout>
      <SEO title="Home" keywords={[`Hacktiv8`, `Fullstack Javascript`, `React`]} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`