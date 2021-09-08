import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import TechStackMinimal from "../components/techStackMinimal"
import avatar from "../../static/avatar.png"
import homeStyles from "../styles/home.module.scss"

const Heading = () => (
  <Layout>
    <Head title="Home" />
    <div className={homeStyles.homeContainer}>
      <img
        src={avatar}
        alt="avatar"
        title="Prathamesh"
        className={homeStyles.avatarStyles}
      />
      <h2>
        Hi{" "}
        {/* <span role="img" aria-label="wave">
        👋{" "}
      </span>{" "} */}
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
      <br />
      <p>My current tech stack:</p>
      <TechStackMinimal size="2x" />
      <br />
      <br />
      <br />
      <Link to="/projects" className="cleanLink">
        <b>Projects ↗</b>
      </Link>
      &nbsp; &nbsp;
      <Link to="/blogs" className="cleanLink">
        <b>Blog ↗</b>
      </Link>
    </div>
  </Layout>
)

export default Heading
