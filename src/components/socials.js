import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import CommonLink from "../components/commonLink"

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
export default Socials
