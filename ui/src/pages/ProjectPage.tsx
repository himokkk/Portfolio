import React from "react";
import { Link } from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi";

import "../css/basic.css";
import "../css/homepage.css";

const ProjectPage: React.FC = (() => {
    return(
    <div className="soon">
        <span>This content will be added soon.</span>
        <Link to="/">
            <BiHomeAlt className="icon"/>
        </Link>
    </div>)
})

export default ProjectPage;