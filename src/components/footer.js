import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import footerStyles from "../styles/footer.module.scss"
import Socials from "./socials"
import CommonLink from "../components/commonLink"

const Footer = () => {
  const author = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer className={footerStyles.footer}>
      <Socials size="lg" />
      <br />
      <br />
      <span style={{ fontSize: "16px" }} className={footerStyles.footerText}>
        Created with
        <span role="img" aria-label="heart">
          {" "}
          ❤️{" "}
        </span>{" "}
        by &nbsp;
        <b>
          <CommonLink
            link="https://www.github.com/pratham82"
            title={author.site.siteMetadata.author}
          />
        </b>
        &nbsp;&copy; 2021
      </span>{" "}
    </footer>
  )
}
export default Footer
