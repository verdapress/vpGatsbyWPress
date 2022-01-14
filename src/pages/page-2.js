import * as React from "react"
import { graphql } from "gatsby"
import Post from "../components/Post";
import Layout from "../components/layout"
import Footer from "../components/Footer"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
    <h1>Welcome to the  VerdaPress Blog Page.</h1>
    <p>Built with MarkDown [vp].</p>
    <p>
    <div>
      {data.allMarkdownRemark.nodes.map(node => (
        <Post
          title={node.frontmatter.title}
          excerpt={node.excerpt}
        />
      ))}

    </div>
    </p>
    <Footer></Footer>
  </Layout>
    

  )
}

export const query = graphql ` 
{

  allMarkdownRemark {
  
  nodes{
  
  frontmatter {
  
  title
  date
  keywords}
  excerpt
  html}}
  }
`
