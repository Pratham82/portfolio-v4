import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const Heading = () => (
  <Layout>
    <Head title="Home" />
    <h2>
      Hi{" "}
      <span role="img" aria-label="wave">
        👋{" "}
      </span>{" "}
      I'm Prathamesh
    </h2>
    <h3>I'm a Full-stack Software Developer.</h3>
    <h4>
      Based in Mumbai{" "}
      <span role="img" aria-label="pushpin">
        {" "}
        📍
      </span>
    </h4>
    {/* Need a Developer{" "}
    <Link to="/contact" className="cleanLink">
      <b>Contact Me ↗</b>
    </Link> */}
  </Layout>
)

export default Heading
