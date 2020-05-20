import React from "react";
// import Icon from "../assets/icons/tk_logo_white.png";
// import { useStaticQuery, graphql } from "gatsby";

import headerStyles from './index.module.scss';

const Header = () => {
    return (
        <div className={headerStyles.container}>
            {/* <img src={Icon} className={headerStyles.logo}></img>  */}
            <h1>Header</h1>
        </div>
    )
};

export default Header;