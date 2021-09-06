import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
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

const Contact = () => (
  <Layout>
    <Head title="Contact" />
    <h1>Contact</h1>
    <p>Connect with me: </p>
    <Socials size="2x" />
  </Layout>
)

export default Contact
