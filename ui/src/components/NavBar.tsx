import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import debounce from "lodash/debounce";
import { BiUser, BiHomeAlt } from "react-icons/bi";
import { BsClipboardData } from "react-icons/bs";
import { MdContactPage } from "react-icons/md";

import "../css/basic.css";
import "../css/navbar.css";

import ScrollTo from "../functions/ScrollTo";

interface Props {
    homeRef?: React.RefObject<HTMLDivElement>;
    contactRef?: React.RefObject<HTMLDivElement>;
    skillsRef?: React.RefObject<HTMLDivElement>;
}

const NavBar = (props: Props) => {
    const navigate = useNavigate();

    const home_scroll = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (props.homeRef) {
            ScrollTo(props.homeRef);
        } else {
            navigate("/");
        }
    };

    const skills_scroll = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (props.skillsRef) {
            ScrollTo(props.skillsRef);
        } else {
            navigate("/");
        }
    };

    const contact_scroll = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (props.contactRef) {
            ScrollTo(props.contactRef);
        } else {
            navigate("/");
        }
    };

    const [isHome, setIsHome] = useState<Boolean>(true);
    const [isSkills, setIsSkills] = useState<Boolean>(false);
    const [isContact, setIsContact] = useState<Boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            if (props.homeRef) {
                checkDivVisibility(props.homeRef, setIsHome);
            }
            if (props.skillsRef) {
                checkDivVisibility(props.skillsRef, setIsSkills);
            }
            if (props.contactRef) {
                checkDivVisibility(props.contactRef, setIsContact);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [props.contactRef, props.homeRef, props.skillsRef]);

    const checkDivVisibility = (
        ref: React.RefObject<HTMLDivElement>,
        setValue: React.Dispatch<React.SetStateAction<Boolean>>,
    ) => {
        let debouncedFn = debounce((entry: IntersectionObserverEntry) => {
            setValue(entry.isIntersecting);
        }, 20);

        const observer = new IntersectionObserver(
            ([entry]) => {
                debouncedFn(entry);
            },
            { threshold: 0.85 },
        );

        if (ref.current) {
            observer.observe(ref.current?.children.item(0) as HTMLDivElement);
        }

        return () => {
            observer.disconnect();
        };
    };

    return (
        <div className="navbar prevent-select">
            <Link to="introduction" className="nav-button" activeClass="active" spy={true} smooth={true} duration={500}>
                <BiHomeAlt />
            </Link>

            <Link to="projects" className="nav-button" activeClass="active" spy={true} smooth={true} duration={500}>
                <BiUser />
            </Link>

            <Link to="skills" className="nav-button" activeClass="active" spy={true} smooth={true} duration={500}>
                <BsClipboardData />
            </Link>

            <Link to="skills" className="nav-button" activeClass="active" spy={true} smooth={true} duration={500}>
                <BiUser />
            </Link>

            <Link to="contact" className="nav-button" activeClass="active" spy={true} smooth={true} duration={500}>
                <MdContactPage />
            </Link>
        </div>
    );
};

export default NavBar;
