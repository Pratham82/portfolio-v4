import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import aboutStyles from "../styles/about.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDownload } from "@fortawesome/free-solid-svg-icons"
import countExp from "../helpers/countExp"

const About = () => (
  <Layout>
    <Head title="About" />
    <h1>About Me</h1>
    I'm a <b> Full-stack</b> software developer, experienced with <b>MERN</b>{" "}
    and <b>MEAN</b> stack. Passionate about <b>tech</b> and <b>opensource</b>. I
    like to learn new things every day.
    <br />
    <br />
    <br />
    <span className={aboutStyles.expHeader}>
      Work Experience
      <span className={aboutStyles.expYears}> &nbsp; {countExp()}</span>
    </span>
    <span className={aboutStyles.designation}>Software Developer</span>
    <span className={aboutStyles.company}>
      Edstem Technologies
      <span className={aboutStyles.location}> &nbsp; Kerala (Remote)</span>
    </span>
    <span className={aboutStyles.duration}>July 2021 - Present</span>
    <span className={aboutStyles.designation}>Junior Software Developer</span>
    <span className={aboutStyles.company}>
      Edulab
      <span className={aboutStyles.location}> &nbsp; Mumbai</span>
    </span>
    <span className={aboutStyles.duration}>Feb 2021 - June 2021</span>
    <br />
    <span className={aboutStyles.designation}>
      <span className={aboutStyles.expHeader}>Education</span>
      <br />
      <br />
      <span className={aboutStyles.company}>
        M.Sc Computer Science
        <br />
        <span className={aboutStyles.location}>
          Mumbai University (2019 - 2021)
        </span>
      </span>
      <span className={aboutStyles.company}>
        B.Sc Computer Science
        <br />
        <span className={aboutStyles.location}>
          Mumbai University (2017 - 2019)
        </span>
      </span>
    </span>
    <a
      href="https://drive.google.com/uc?id=1tQjEgSxDcFnxDuBuQs4pfETGLS4ju1ms&export=download"
      style={{ textDecoration: "none", display: "block", marginTop: "20px" }}
      className={aboutStyles.resumeBtn}
    >
      <FontAwesomeIcon icon={faDownload} />
      &nbsp; Resume
    </a>
  </Layout>
)

export default About
