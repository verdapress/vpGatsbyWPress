import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Footer from "../components/Footer";

const IndexPage = () => (
  <Layout>
    <h1>Welcome to the  VerdaPress Gatsby site.</h1>
    <p>Now go build something great [vp].</p>
    <StaticImage
      src="../images/vpLogo.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="VP Logo"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
    <Link to="/page-wpress/">Go to WP Post Page</Link> <br />
    </p>
    <Footer></Footer>
  </Layout>
)

export default IndexPage
