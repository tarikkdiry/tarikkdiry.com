import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layouts/layout";
import Image from "../components/image";
// import SEO from "../components/seo"
import Header from "../components/molecules/Header/index";
// import Intro from "../components/molecules/Intro/index";
import Intro from "../components/organisms/IntroBlock/index";
import About from "../components/organisms/AboutBlock/index";

const IndexPage = () => (
  <Layout>
    {/* <SEO title="Home" /> */}
    {/* <div> */}
      {/* <Image /> */}
    {/* </div> */}
    <Intro></Intro>
    <About></About>
  </Layout>
)

export default IndexPage;
