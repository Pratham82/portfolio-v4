import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import footerStyles from "../styles/footer.module.scss"
import gatsbyLogo from "../../static/Gatsby_Logo_Black.png"

const CommonLink = ({ link, title, icon }) => (
  <a
    target="__blank
    "
    href={link}
    style={{ textDecoration: "none", color: "black" }}
  >
    {title && title}
    {icon && icon}
  </a>
)

const Socials = ({ size, color }) => (
  <React.Fragment>
    <CommonLink
      link="https://github.com/pratham82"
      icon={<FontAwesomeIcon icon={faGithub} size={size} color={color} />}
    />
    &nbsp; &nbsp;
    <CommonLink
      link="https://www.linkedin.com/in/prathameshmali/"
      icon={<FontAwesomeIcon icon={faLinkedin} size={size} color={color} />}
    />
    &nbsp; &nbsp;
    <CommonLink
      link="https://twitter.com/Pratham_82"
      icon={<FontAwesomeIcon icon={faTwitter} size={size} color={color} />}
    />
  </React.Fragment>
)

const CustomFooter = ({ size, color, author }) => {
  return (
    <footer className={footerStyles.footer}>
      <Socials size={size} color={color} />
      <span className={footerStyles.spacing}></span>
      <span className={footerStyles.footerText}>
        Created with
        <span role="img" aria-label="heart">
          {" "}
          ❤️{" "}
        </span>{" "}
        by &nbsp;
        <b>{author}</b>
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

export default CustomFooter
