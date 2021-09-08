import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import footerStyles from "../styles/footer.module.scss"
import Socials from "./socials"
import gatsbyLogo from "../../static/Gatsby_Logo_Black.png"

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

  const {
    site: {
      siteMetadata: { author: authorTitle },
    },
  } = author

  return (
    <footer className={footerStyles.footer}>
      <Socials size="lg" />
      <span className={footerStyles.spacing}></span>
      <span className={footerStyles.footerText}>
        Created with
        <span role="img" aria-label="heart">
          {" "}
          ❤️{" "}
        </span>{" "}
        by &nbsp;
        <b>{authorTitle}</b>
        &nbsp;&copy; 2021
        <br />
        Built with &nbsp;
        <img src={gatsbyLogo} alt="gatsby-logo" />
      </span>{" "}
      <br />
      <span className={footerStyles.branding}></span>
    </footer>
  )
}
export default Footer
