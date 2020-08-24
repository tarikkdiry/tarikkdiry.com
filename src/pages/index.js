import React from "react";
import Layout from "../components/layouts/layout";
import Intro from "../components/organisms/IntroBlock/index";
import About from "../components/organisms/AboutBlock/index";
import Projects from "../components/organisms/ProjectsBlock/index";
import Head from "../components/atoms/Head/index";

const IndexPage = () => (
  <Layout>
    <Head title="Home"/>
    <Intro></Intro>
    <About></About>
    <Projects></Projects>
  </Layout>
)

export default IndexPage;
