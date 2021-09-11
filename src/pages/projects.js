import React, { useState } from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import AllProjects from "../data/projectData"
import Project from "../templates/project"
import projectStyles from "../styles/project.module.scss"

const Projects = () => {
  const [currentProject, setCurrentProject] = useState("neoG Projects")

  return (
    <Layout>
      <Head title="Projects" />
      <h1>Projects</h1>
      {Object.entries(AllProjects).map(([type, data]) => (
        <button
          onClick={() => setCurrentProject(type)}
          className={`${projectStyles.projectNav}
            ${currentProject === type && projectStyles.activeProject}`}
        >
          {type}
        </button>
      ))}
      <div className={projectStyles.allProjects}>
        {AllProjects[currentProject].map(project => (
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
}

export default Projects
