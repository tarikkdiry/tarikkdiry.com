import React from "react";
import Card from "../../molecules/Card/index";
import Header from "../../atoms/Header/index";
import styles from "./index.module.scss";
import { useStaticQuery, Link, graphql } from "gatsby";

const BlogPostList = () => {
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
        </div>
    )
}

export default BlogPostList;