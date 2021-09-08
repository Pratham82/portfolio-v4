import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import Socials from "../components/socials"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons"

const Contact = () => (
  <Layout>
    <Head title="Contact" />
    <h1>Contact</h1>
    <p>Connect with me: </p>
    <Socials size="2x" />
    &nbsp; &nbsp;
    <a href="mailto:mali.prathamesh82@gmail.com">
      <FontAwesomeIcon icon={faEnvelopeOpenText} size="2x" />
    </a>
    <br />
  </Layout>
)

export default Contact
