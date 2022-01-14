import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Footer from "../components/Footer";

const Contact = () => (
  <Layout>
    <h1>Contact Us</h1>
    <p>
    <Link to="/page-wpress/">Go to WP Post Page</Link> <br />
    </p>
    <Footer></Footer>
  </Layout>
)

export default Contact
