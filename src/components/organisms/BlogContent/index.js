import React from "react";
import Card from "../../molecules/Card/index";
import Header from "../../atoms/Header/index";
import styles from "./index.module.scss";
import { useStaticQuery, Link, graphql } from "gatsby";

const BlogContent = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost (
                sort: {
                    fields: publishedDate,
                    order: DESC
                }
            ) {
            edges {
                node {
                    title
                    slug
                    publishedDate(formatString: "MMMM D, YYYY")
                    body {
                        json
                    }
                    forward
                }
            }
            }
        }
    `)

    return (
        <div className={styles.container}>
            <Header title="Blog."></Header>
            {data.allContentfulBlogPost.edges.map((edge) => {
                return (
                    <Link to={`/blog/${edge.node.slug}`}>
                        <Card 
                            title={edge.node.title}
                            date={edge.node.publishedDate}
                            url={`/blog/${edge.node.slug}`}
                            forward={edge.node.forward}
                        />
                     </Link>
                )
            })}
            
            {/* <Card 
                title="Pretty Long Card Title"
                date="1/1/2020"
                url="https://tarikkdiry.com"
                forward="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
            <Card 
                title="Really Really Really Long Card Title"
                date="1/1/2020"
                url="https://tarikkdiry.com"
                forward="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            /> */}
        </div>
    )
}

export default BlogContent;