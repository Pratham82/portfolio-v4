import React from "react"
// import { Link } from "gatsby"
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
      <h3>
        Hi{" "}
        <span role="img" aria-label="wave">
        👋{" "}
      </span>{" "}
        I'm Prathamesh ;
      </h3>
      <h4>I'm a Full-stack Software Developer ; based in Mumbai{" "}
        <span role="img" aria-label="pushpin">
          {" "}
          📍
        </span></h4>
      {/* <h5>
        Based in Mumbai{" "}
        <span role="img" aria-label="pushpin">
          {" "}
          📍
        </span>
      </h5> */}
      <br />
      <p style={{marginBottom: '5px'}}>My current tech stack:</p>
      <TechStackMinimal size="1x" />
      <br />
      <br />
      {/* <Link to="/projects" className="cleanLink">
        <b>Projects ↗</b>
      </Link>
      &nbsp; &nbsp;
      <Link to="/blogs" className="cleanLink">
        <b>Blog ↗</b>
      </Link> */}
      <a href="https://github.com/pratham82" target="_" style={{textDecoration:'none'}}>
        My github contributions:
      <img src="http://ghchart.rshah.org/pratham82" alt="Prathamesh's Github chart" className="background-tint"/>
      </a>
    </div>
  </Layout>
)

export default Heading
