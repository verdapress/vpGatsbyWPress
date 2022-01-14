import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Footer from "../components/Footer";

const Contact = () => (
  <Layout>
    <h1>Contact US</h1>
    <p>
      <Link to="/page-2/">Go to Post Page</Link> <br />
    </p>
    <Footer></Footer>
  </Layout>
)

export default Contact
