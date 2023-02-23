import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import debounce from "lodash/debounce";

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
            <div
                className={`navbar-button float-left ${isHome ? " highlight-color" : " "}`}
                id="nameButton"
                onClick={home_scroll}
            >
                <div id="home-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                    </svg>
                </div>
                Paweł
            </div>

            <div className="navbar-button float-left" id="aboutButton">
                About
            </div>

            <div
                className={`navbar-button float-left ${isSkills ? " highlight-color" : " "}`}
                id="skillsButton"
                onClick={skills_scroll}
            >
                Skills
            </div>

            <div
                className={`navbar-button float-left ${isContact ? " highlight-color" : " "}`}
                id="contactButton"
                onClick={contact_scroll}
            >
                Contact
            </div>

            <div className="clear-both"></div>
        </div>
    );
};

export default NavBar;
