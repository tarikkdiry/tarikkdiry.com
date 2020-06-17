import React from "react";
import Intro from "../../molecules/Intro/index";
import SocialRow from "../../molecules/SocialRow/index";
import styles from "./index.module.scss";

const IntroBlock = () => {
    return (
        <div className={styles.container}>
            <Intro></Intro>
            <SocialRow></SocialRow>
        </div>
    )
}

export default IntroBlock;