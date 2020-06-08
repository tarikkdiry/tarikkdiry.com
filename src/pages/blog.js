import React from "react";
// import { graphql, Link, useStaticQuery } from "gatsby";
import BlogContent from "../components/organisms/BlogContent/index";
import Card from "../components/molecules/Card/index";
import Layout from "../components/layouts/layout";

const BlogPage = () => {
    return (
        <Layout>
            <BlogContent></BlogContent>
        </Layout>
    )
}

export default BlogPage;