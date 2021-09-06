import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faAngular,
  faCss3,
  faDocker,
  faGithub,
  faHtml5,
  faJava,
  faJs,
  faNode,
  faPython,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons"

const TechStackMinimal = () => (
  <React.Fragment>
    <FontAwesomeIcon icon={faJs} title="JavaScript" size="2x" color="black" />
    &nbsp;
    <img
      style={{ marginBlock: "-6px" }}
      alt="typescript"
      src="https://img.icons8.com/ios-filled/38/typescript.png"
      title="TypeScript"
    />
    &nbsp;
    <FontAwesomeIcon icon={faReact} title="React" size="2x" color="black" />
    &nbsp; &nbsp;
    <FontAwesomeIcon icon={faAngular} title="Angular" size="2x" color="black" />
    &nbsp; &nbsp;
    <FontAwesomeIcon icon={faNode} title="NodeJS" size="2x" color="black" />
    &nbsp; &nbsp;
    <img
      style={{ marginBlock: "-5px" }}
      alt="mysql"
      src="https://img.icons8.com/ios-filled/38/000000/mysql-logo.png"
    />
    &nbsp; &nbsp;
    <FontAwesomeIcon icon={faHtml5} title="HTML" size="2x" color="black" />
    &nbsp; &nbsp;
    <FontAwesomeIcon icon={faCss3} title="CSS" size="2x" color="black" />
    &nbsp; &nbsp;
    <FontAwesomeIcon icon={faSass} title="Scss" size="2x" color="black" />
    &nbsp; &nbsp;
    <FontAwesomeIcon icon={faPython} title="Python" size="2x" color="black" />
    &nbsp; &nbsp;
    <FontAwesomeIcon icon={faJava} title="Java" size="2x" color="black" />
    &nbsp; &nbsp;
    <FontAwesomeIcon icon={faGithub} title="Github" size="2x" color="black" />
    &nbsp; &nbsp;
    <FontAwesomeIcon icon={faDocker} title="Docker" size="2x" color="black" />
    &nbsp; &nbsp;
  </React.Fragment>
)

export default TechStackMinimal
