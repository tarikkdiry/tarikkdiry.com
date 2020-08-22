import React from "react";
import Layout from "../components/layouts/layout.js";
import BlogPostContent from "../components/organisms/BlogPostContent/index";
import Subscribe from "../components/molecules/Subscribe/index";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import "../styles/global.scss";

export const query = graphql`
    query($slug: String!) {
        contentfulBlogPost(slug: {eq: $slug}) {
            title
            publishedDate(formatString: "MMMM Do, YYYY")
            body {
                json
            }
            forward
        }
    }
`

const options = {
    // For image rendering
    renderNode: {
        "embedded-asset-block": (node) => {
            const alt = node.data.target.fields.title['en-US']
            const url = node.data.target.fields.file['en-US'].url
            return <img alt={alt} src={url}/>
        }
    }
}  

const BlogPost = (props) => {
    return (
        <Layout>
            <BlogPostContent 
                title={props.data.contentfulBlogPost.title}
                date={props.data.contentfulBlogPost.publishedDate}
                forward={props.data.contentfulBlogPost.forward}
                content={
                    documentToReactComponents(props.data.contentfulBlogPost.body.json, options)
                }
            />
            <Subscribe></Subscribe>
        </Layout>
    )
}

export default BlogPost;