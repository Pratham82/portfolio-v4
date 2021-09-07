import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import aboutStyles from "../styles/about.module.scss"

const About = () => (
  <Layout>
    <Head title="About" />
    <h1>About Me</h1>
    <b>Full-stack</b> software developer, experienced with <b>MERN</b> and{" "}
    <b>MEAN</b> stack. Passionate about <b>tech</b> and <b>opensource</b>. I
    like to learn new things every day.
    <br />
    <br />
    <br />
    <h1>Work Experience</h1>
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
  </Layout>
)

export default About
