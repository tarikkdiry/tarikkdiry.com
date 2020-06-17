import React from "react";
import { useStaticQuery } from "gatsby";
import Icon from "../../../../assets/icons/social/linkedin.png";
import styles from "../social.module.scss";

const Linkedin = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    linkedin
                }
            }
        }
    `)

    return (
        <div className={styles.container}>
            <a href={data.site.siteMetadata.linkedin} target="_blank">
                <img src={Icon} className={styles.logo}></img>
            </a>
        </div>
    )
}

export default Linkedin;