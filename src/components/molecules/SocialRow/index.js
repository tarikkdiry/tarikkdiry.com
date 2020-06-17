import React from "react";
import Email from "../../atoms/Social/Email/index";
import Github from "../../atoms/Social/GitHub/index";
import Instagram from "../../atoms/Social/Instagram/index";
import Linkedin from "../../atoms/Social/LinkedIn/index";
import Twitter from "../../atoms/Social/Twitter/index";
import styles from "./index.module.scss";

const SocialRow = () => {
    return (
        <div className={styles.container}>
            <Email></Email>
            <Github></Github>
            <Linkedin></Linkedin>
            <Instagram></Instagram>
            <Twitter></Twitter>
        </div>
    )
}

export default SocialRow;