import React from "react"
import Header from "./header"
import "../styles/index.scss"
import layoutStyles from "../styles/layout.module.scss"
import CustomFooter from "./customFooter"

const Layout = props => (
  <div className={layoutStyles.container}>
    <div className={layoutStyles.content}>
      <Header />
      {props.children}{" "}
    </div>
    <CustomFooter size="lg" color="black" author="Prathamesh Mali" />
  </div>
)

export default Layout
