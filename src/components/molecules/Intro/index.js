import React from "react";
import { Link } from "gatsby";
import styles from "./index.module.scss";
import '../../../styles/_variables.scss';

const Intro = () => {
    return (
        <div className={styles.container}>
            <p>Hi! I'm</p>
                <h1>Tarik Kdiry.</h1>
                <h3>software engineer. writer. builder for the web.</h3>
                <h4>I am a Software Engineer based out of Hoboken, NJ and operating globally from the New York City area.</h4>
                {/* <h4>Let's connect! While you're here, check out my <Link to='/blog' target="_blank" className={greetingStyles.links}>blog!</Link></h4> */}
        </div>
    );
}

export default Intro;