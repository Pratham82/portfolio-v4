import React from "react"

const CommonLink = ({ link, title, icon }) => (
  <a
    target="__blank
    "
    href={link}
    style={{ textDecoration: "none", color: "black" }}
  >
    {title && title}
    {icon && icon}
  </a>
)

export default CommonLink
