import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/react"
import { rhythm } from "../utils/typography"
import Layout from "../components/Layout"
import styles from "./index.module.css"
import perfil from "../images/perfil.jpg"

export default function Home({ data }) {
  console.log(data)
  return (
    <Layout>
      <div>
          <div className={styles.about}>
            <h1
              css={css`
                display: inline-block;
                border-bottom: 1px solid;
              `}
            >
                Miguel' Blog
            </h1>
            <div className={styles.perfil}>
                <img src={perfil} />
            </div>
            <p>
                Soy un estudiante de ingenieria de software, entusiasta de linux, fullstack developer. Tambien me gusta el manga, el cine, libros, la musica.
            </p>
            <div className={styles.footer}>
                <h4>Miguel Estevez</h4>
                <h5>Republica Dominicana</h5>
            </div>
          </div>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug}
                css={css`
                    text-decoration: none;
                    color:inherit;
                `}
            >
                <h3
                  css={css`
                    margin-bottom: ${rhythm(1 / 4)};
                  `}
                >
                  {node.frontmatter.title}{" "}
                  <span
                    css={css`
                      color: #bbb;
                    `}
                  >
                    — {node.frontmatter.date}
                  </span>
                </h3>
                <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
