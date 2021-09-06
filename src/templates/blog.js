import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import "../styles/blog.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faClock,
  faCalendarWeek,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons"
import blogStyles from "../styles/blog.module.scss"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "DD MMM YYYY")
      }
      html
      fields {
        # langKey
        readingTime {
          text
        }
      }
    }
  }
`
const Blog = props => {
  return (
    <Layout>
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <p>
        <FontAwesomeIcon icon={faCalendarWeek} />
        &nbsp;
        {props.data.markdownRemark.frontmatter.date}
        &nbsp; &nbsp;
        <FontAwesomeIcon icon={faClock} />
        &nbsp;
        {props.data.markdownRemark.fields.readingTime.text}
      </p>
      <div
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      ></div>
      <Link to="/blogs" className={blogStyles.goBack}>
        <FontAwesomeIcon icon={faChevronLeft} /> All Blogs
      </Link>
    </Layout>
  )
}

export default Blog
