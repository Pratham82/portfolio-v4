import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import projectData from "../data/projectData"
import Project from "../templates/project"
import projectStyles from "../styles/project.module.scss"

const Projects = () => (
  <Layout>
    <Head title="Projects" />
    <h1>Projects</h1>
    <div className={projectStyles.allProjects}>
      {projectData.map(project => (
        <Project
          key={project.title}
          title={project.title}
          desc={project.desc}
          stackUsed={project.stackUsed}
          git={project.git}
          live={project.live}
        />
      ))}
    </div>
  </Layout>
)

export default Projects
