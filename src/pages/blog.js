import React from "react";
// import { graphql, Link, useStaticQuery } from "gatsby";
import Header from "../components/atoms/Header/index";
import Card from "../components/molecules/Card/index";
import Layout from "../components/layouts/layout";

const BlogPage = () => {
    return (
        <Layout>
            <Header title="Blog."></Header>
            <Card 
                title="Card Title"
                date="1/1/2020"
                url="https://google.com"
                forward="Card forward..."
            />
        </Layout>
    )
}

export default BlogPage;