import React from "react";
import Card from "../../molecules/Card/index";
import Header from "../../atoms/Header/index";
import styles from "./index.module.scss";

const BlogContent = () => {
    return (
        <div className={styles.container}>
            <Header title="Blog."></Header>
            <Card 
                title="Card Title"
                date="1/1/2020"
                url="https://tarikkdiry.com"
                forward="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
            <Card 
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
            />
        </div>
    )
}

export default BlogContent;