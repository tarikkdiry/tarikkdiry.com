import React from "react";
import { Link } from "gatsby";
import styles from "./index.module.scss";
// import logo from "../../../assets/tk_logo_white.png";
// import { useStaticQuery, graphql } from "gatsby";

import headerStyles from './index.module.scss';

const Header = () => {
    return (
        <div className={styles.container}>
            {/* <div className={headerStyles.logo}> */}
            {/* <img src={require("../../../assets/icons/tk_logo_white.png")} className={headerStyles.logo} style={{height: '40px', width: '50px'}} alt="tk" to="/"></img> */}
                
            {/* </div> */}
            <div className={styles.links}>
                <h3>
                    <Link className={styles.navItem} to="/blog">Blog</Link>
                </h3>
                {/* <h1>Resume</h1> */}
            </div>
            
        </div>
    )
};

export default Header;