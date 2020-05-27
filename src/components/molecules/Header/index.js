import React from "react";
// import logo from "../../../assets/tk_logo_white.png";
// import { useStaticQuery, graphql } from "gatsby";

import headerStyles from './index.module.scss';

const Header = () => {
    return (
        <div className={headerStyles.container}>
            {/* <div className={headerStyles.logo}> */}
            {/* <img src={require("../../../assets/icons/tk_logo_white.png")} className={headerStyles.logo} style={{height: '40px', width: '50px'}} alt="tk" to="/"></img> */}
                
            {/* </div> */}
            <div className={headerStyles.links}>
                <h3>Blog</h3>
                {/* <h1>Resume</h1> */}
            </div>
            
        </div>
    )
};

export default Header;