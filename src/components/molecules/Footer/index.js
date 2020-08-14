import React from "react";
import styles from "./index.module.scss";

const Footer = () => {
    const onMouseOver = e => {
        const el = e.target;
        el.style.color = '#FD9374';
    };

    const onMouseOut = e => {
        const el = e.target;
        el.style.color = '#81878C';
    };

    return (
        <div className={styles.container}>
            <a
                href="https://github.com/tarikkdiry/tarikkdiry.com"
                target="_blank"
                onMouseEnter={event => onMouseOver(event)}
                onMouseOut={event => onMouseOut(event)}
            >
                Designed and Developed with ❤️ by Tarik Kdiry
            </a>
        </div>
    )
}

export default Footer;