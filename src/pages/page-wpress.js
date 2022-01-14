import * as React from "react"
import { graphql } from "gatsby"
import Post from "../components/Post";
import Layout from "../components/layout"
import Footer from "../components/Footer"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
    <h1>Welcome to the  VerdaPress WP Blog Page.</h1>
    <p>Built with WordPress [vp].</p>
    <p>
    <div>
      {data.allWpPost.nodes.map(node => (
        <Post
          title={node.title}
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

  allWpPost {
    nodes {
      id
      title
      excerpt
      slug
      date(formatString: "MMMM DD, YYYY")
    }
  }

  }
`
