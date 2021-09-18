import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery, Link } from "gatsby"
import blogStyles from "../styles/blogs.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock, faCalendar } from "@fortawesome/free-solid-svg-icons"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "DD MMM YYYY")
              description
              tags
            }
            fields {
              slug
              readingTime {
                text
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <li className={blogStyles.post} key={edge.node.frontmatter.title}>
              <Link to={`/blog/${edge.node.fields.slug}`}>
                <h4 style={{ marginBottom: "2px" }}>
                  {edge.node.frontmatter.title}
                </h4>
                <span>{edge.node.frontmatter.description}</span>
                <p>
                  <FontAwesomeIcon icon={faCalendar} />
                  &nbsp;
                  {edge.node.frontmatter.date} &nbsp;{" "}
                  <FontAwesomeIcon icon={faClock} />
                  &nbsp;
                  <b>{edge.node.fields.readingTime.text}</b>
                </p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Blog
