import React from "react";
import Intro from "../../molecules/Intro/index";
import styles from "./index.module.scss";

const IntroBlock = () => {
    return (
        <div className={styles.container}>
            <Intro></Intro>
        </div>
    )
}

export default IntroBlock;