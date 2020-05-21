import React from "react";
// import Icon from "src/assets/icons/tk_logo_white.png";
// import { useStaticQuery, graphql } from "gatsby";

import headerStyles from './index.module.scss';

const Header = () => {
    return (
        <div className={headerStyles.container}>
            <div className={headerStyles.logo}>
                {/* <img src={Icon} className={headerStyles.logo}></img>  */}
                <h1>Logo</h1>
            </div>
            <div className={headerStyles.links}>
                <h1>Blog</h1>
                {/* <h1>Resume</h1> */}
            </div>
            
        </div>
    )
};

export default Header;