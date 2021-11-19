import React, { useState } from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import AllProjects from "../data/projectData"
import Project from "../templates/project"
import projectStyles from "../styles/project.module.scss"

const Projects = () => {
  const [currentProject, setCurrentProject] = useState("React")

  return (
    <Layout>
      <Head title="Projects" />
      <h1>Projects</h1>
      {Object.entries(AllProjects).map(([type, data], i) => (
        <button
          key={i}
          onClick={() => setCurrentProject(type)}
          className={`${projectStyles.projectNav}
            ${currentProject === type && projectStyles.activeProject}`}
        >
          {type}{" "}
          <span className={projectStyles.projectCount}>{data.length}</span>
        </button>
      ))}
      <div className={projectStyles.allProjects}>
        {AllProjects[currentProject].map(project => {
          const { title, desc, stackUsed, git, live, mark } = project
          return (
            <Project
              key={title}
              title={title}
              desc={desc}
              stackUsed={stackUsed}
              git={git}
              live={live}
              mark={mark}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export default Projects
