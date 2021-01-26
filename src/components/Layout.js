import React from "react"
import { css } from "@emotion/react"
import { StaticQuery, Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography";

export default class Layout extends React.Component {

    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        try {
            const deckdeckgoHighlightCodeLoader = require("@deckdeckgo/highlight-code/dist/loader")
            await deckdeckgoHighlightCodeLoader.defineCustomElements(window);
        } catch (err) {
            console.error(err);
        }
    }

    render() {
      return (
        <div
          css={css`
            margin: 0 auto;
            max-width: 700px;
            padding: ${rhythm(2)};
            padding-top: ${rhythm(1.5)};
          `}
        >
          <Link to={`/`}>
            <h3
              css={css`
                margin-bottom: ${rhythm(2)};
                display: inline-block;
                font-style: normal;
              `}
            >
                <StaticQuery query={graphql`
                    query {
                        site {
                            siteMetadata {
                                title
                            }
                        }
                    }
                    `}
                    render={ data => data.site.siteMetadata.title}/>
            </h3>
          </Link>
          <Link
            to={`/about/`}
            css={css`
              float: right;
            `}
          >
            About
          </Link>
          {this.props.children}
        </div>
      )}
}
