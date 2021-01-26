import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReddit, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function about({ data }) {
    return (
        <Layout>
            <h1>About { data.site.siteMetadata.title }</h1>
            <p>
                Currently working on it.
            </p>
            <a href="https://github.com/maet98/">
                <FontAwesomeIcon  icon={faReddit} size="3x" />
            </a>
            <a href="https://github.com/maet98/">
                <FontAwesomeIcon  icon={faGithub} size="3x" />
            </a>
        </Layout>
    )
}

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`
