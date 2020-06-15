import React from "react";
import BlogContent from "../components/organisms/BlogPostList/index";
import Card from "../components/molecules/Card/index";
import Layout from "../components/layouts/layout";
import Head from "../components/atoms/Head/index";

const BlogPage = () => {
    return (
        <Layout>
            <Head title="Blog" />
            <BlogContent></BlogContent>
        </Layout>
    )
}

export default BlogPage;