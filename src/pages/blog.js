import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery, Link } from "gatsby"
import blogStyles from "../styles/blogs.module.scss"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              # date
              date(formatString: "DD MMM YYYY")
              description
              tags
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <li className={blogStyles.post} key={edge.node.frontmatter.title}>
              <Link to={`/blog/${edge.node.fields.slug}`}>
                <h3 style={{ marginBottom: "2px" }}>
                  {edge.node.frontmatter.title}
                </h3>
                <span>{edge.node.frontmatter.description}</span>
                <p>{edge.node.frontmatter.date}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Blog
