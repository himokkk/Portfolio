import { Link } from "react-scroll";
import { BiUser, BiHomeAlt } from "react-icons/bi";
import { BsClipboardData } from "react-icons/bs";
import { MdContactPage } from "react-icons/md";
import { GiProgression } from "react-icons/gi";

import "./navbar.css";

const NavBarComponent = () => {
    return (
        <div className="prevent-select" id="navbar">
            <Link
                to="introduction"
                className="nav-button"
                activeClass="active"
                ignoreCancelEvents={true}
                spy={true}
                smooth={true}
                duration={500}
            >
                <BiHomeAlt />
            </Link>

            <Link
                to="projects"
                className="nav-button"
                activeClass="active"
                ignoreCancelEvents={true}
                spy={true}
                smooth={true}
                duration={500}
            >
                <BiUser />
            </Link>

            <Link
                to="skills"
                className="nav-button"
                activeClass="active"
                ignoreCancelEvents={true}
                spy={true}
                smooth={true}
                duration={500}
            >
                <BsClipboardData />
            </Link>

            <Link
                to="timeline"
                className="nav-button"
                activeClass="active"
                ignoreCancelEvents={true}
                spy={true}
                smooth={true}
                duration={500}
            >
                <GiProgression />
            </Link>

            <Link
                to="contact"
                className="nav-button"
                activeClass="active"
                ignoreCancelEvents={true}
                spy={true}
                smooth={true}
                duration={500}
            >
                <MdContactPage />
            </Link>
        </div>
    );
};

export default NavBarComponent;
