import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import footerStyles from "../styles/footer.module.scss"
import CommonLink from "../components/commonLink"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"

const Socials = ({ size }) => (
  <React.Fragment>
    <CommonLink
      link="https://github.com/pratham82"
      icon={<FontAwesomeIcon icon={faGithub} size={size} color="black" />}
    />
    &nbsp; &nbsp;
    <CommonLink
      link="https://www.linkedin.com/in/prathameshmali/"
      icon={<FontAwesomeIcon icon={faLinkedin} size={size} color="black" />}
    />
    &nbsp; &nbsp;
    <CommonLink
      link="https://twitter.com/Pratham_82"
      icon={<FontAwesomeIcon icon={faTwitter} size={size} color="black" />}
    />
  </React.Fragment>
)

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
