import React from "react";
import { Link } from "gatsby";
import styles from "./index.module.scss";
import resume from "../../../assets/documents/tarik_kdiry_resume.pdf";
import '../../../styles/_variables.scss';
import '../../../styles/global.scss';

const randomizeAttribute = () => {
    let attr = ["fashion enthusiast", "wanna-be stylist", "plant hobbyist"];
    return attr[Math.floor(Math.random() * attr.length)];
}

const Intro = () => {
    let intro = `software engineer. writer. ${randomizeAttribute()}`;

    return (
        <div className={styles.container}>
            <p>Hi! I'm</p>
                <h1>Tarik Kdiry.</h1>
                <h3>{`software engineer. writer. aspiring actor.`}</h3>
                <h4>I am a <a href={resume} target="_blank" className={styles.links}>Software Engineer</a> based out of Hoboken, NJ and operating globally from the New York City area.</h4>
                <h4>Let's connect! While you're here, check out my <Link to='/blog' target="_blank" className={styles.links}>blog!</Link></h4>
        </div>
    );
}

export default Intro;
