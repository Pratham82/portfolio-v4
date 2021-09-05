import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery, Link } from "gatsby"
import blogStyles from "./blog.module.scss"

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

  console.log(
    data.allMarkdownRemark.edges
      .map(v => v.node.frontmatter.date)
      .sort((a, b) => new Date(b) - new Date(a))
  )
  console.log(data.allMarkdownRemark.edges)

  // console.log(
  //   data.allMarkdownRemark.edges.sort(
  //     (a, b) =>
  //       new Date(a.node.fields.frontmatter.date) -
  //       new Date(b.node.fields.frontmatter.date)
  //   )
  // )

  // console.log(data.allMarkdownRemark.edges.map(v => v.node.frontmatter))

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
