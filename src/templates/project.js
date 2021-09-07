import React from "react"
import "../styles/blog.module.scss"
import projectStyles from "../styles/project.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLink } from "@fortawesome/free-solid-svg-icons"

const Project = ({ title, desc, imageKey, git, live, stackUsed }) => (
  <div className={projectStyles.projectContainer}>
    <span className={projectStyles.title}>{title}</span>
    <span className={projectStyles.desc}>{desc}</span>
    <span className={projectStyles.btnLink}>
      <a href={live} className={projectStyles.cleanLink}>
        <FontAwesomeIcon icon={faLink} />
        &nbsp; live
      </a>
    </span>
    <span className={projectStyles.btnLink}>
      <a href={git} className={projectStyles.cleanLink}>
        <FontAwesomeIcon icon={faGithub} />
        &nbsp; git
      </a>
    </span>
    {/* <div className={projectStyles.stack}> */}
    <div style={{ marginTop: "10px" }}>
      {stackUsed.map(stack => (
        <span key={stack} className={projectStyles.stack}>
          {stack}
        </span>
      ))}
    </div>
  </div>
)

export default Project
