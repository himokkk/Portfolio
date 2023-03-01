import { Link } from "react-scroll";
import { BiUser, BiHomeAlt } from "react-icons/bi";
import { BsClipboardData } from "react-icons/bs";
import { MdContactPage } from "react-icons/md";
import { GiProgression } from "react-icons/gi";

import "../css/basic.css";
import "../css/navbar.css";

const NavBar = () => {
    return (
        <div className="prevent-select" id="navbar">
            <Link to="introduction" className="nav-button" activeClass="active" spy={true} smooth={true} duration={500}>
                <BiHomeAlt />
            </Link>

            <Link to="projects" className="nav-button" activeClass="active" spy={true} smooth={true} duration={500}>
                <BiUser />
            </Link>

            <Link to="skills" className="nav-button" activeClass="active" spy={true} smooth={true} duration={500}>
                <BsClipboardData />
            </Link>

            <Link to="timeline" className="nav-button" activeClass="active" spy={true} smooth={true} duration={500}>
                <GiProgression />
            </Link>

            <Link to="contact" className="nav-button" activeClass="active" spy={true} smooth={true} duration={500}>
                <MdContactPage />
            </Link>
        </div>
    );
};

export default NavBar;
