import React from "react";
import Layout from "../components/layouts/layout.js";
import Hero from "../components/molecules/Hero/index";
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
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

const BlogPost = (props) => {
    return (
        <Layout>
            <Hero 
                title={props.data.title}
                date={props.data.date}
                forward={props.forward}
            />
        </Layout>
    )
}

export default BlogPost;