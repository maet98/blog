import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import {Helmet} from "react-helmet"

export default function BlogPost({ data }) {
    const post = data.markdownRemark
    return (
        <Layout>
            <Helmet>
              <title>{post.frontmatter.title}</title>
            </Helmet>
            <h1>{post.frontmatter.title } </h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Layout>
    )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
