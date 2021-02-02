import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/react"
import { Helmet} from "react-helmet";
import { rhythm } from "../utils/typography"
import Layout from "../components/Layout"
import styles from "./index.module.css"
import perfil from "../images/perfil.jpg"
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faReddit, faGithub} from "@fortawesome/free-brands-svg-icons"

export default function Home({ data }) {
  return (
    <Layout>
      <div class="min-w-min">
          <Helmet>
            <meta charSet="utf-8"/>
            <title>Miguel's Blog</title>
          </Helmet>
          <div className={styles.about}>
            <h1
              css={css`
                display: inline-block;
                border-bottom: 1px solid;
              `}
            >
                Miguel's Blog
            </h1>
            <div className={styles.perfil}>
                <img src={perfil} />
            </div>
            <p>
                Soy un estudiante de ingenieria de software, entusiasta de linux, fullstack developer. Tambien me gusta el manga, el cine, libros, la musica.
            </p>
            <div className="m-4 p-4">
                <h3 className="text-center">Redes</h3>
                <div className={styles.container}>
                    <a href="https://www.reddit.com/user/maet98">
                        <FontAwesomeIcon  icon={faReddit} size="3x" />
                    </a>
                    <a href="https://github.com/maet98/">
                        <FontAwesomeIcon  icon={faGithub} size="3x" />
                    </a>
                </div>
            </div>
            <div className={styles.footer}>
                <h4>Miguel Estevez</h4>
                <h5>Republica Dominicana</h5>
            </div>
          </div>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        <div className="flex-1 m-4 space-y-2">
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <div key={node.id} className="flex-1">
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
                      <span className=""
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
          <div class="m-4 p-4 bg-white text-center w-auto grid rounded-xl">
              <h2>Literatura</h2>
              <img class="place-self-center" src="https://upload.wikimedia.org/wikipedia/en/2/22/All_the_Light_We_Cannot_See_%28Doerr_novel%29.jpg"/>
          </div>

          <div class="m-4 p-4 bg-white text-center w-auto grid rounded-xl">
              <h2 class="bg-gray m-2">Manga:</h2>
              <img class="place-self-center" src="https://upload.wikimedia.org/wikipedia/en/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg"/>
              <img class="place-self-center" src="https://upload.wikimedia.org/wikipedia/en/a/a8/Kingdom_volume_1.jpg"/>
          </div>
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
