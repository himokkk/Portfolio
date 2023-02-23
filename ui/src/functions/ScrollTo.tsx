import React from "react";

const ScrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    const targetElement = ref.current as HTMLDivElement;
    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
        top: targetPosition,
        behavior: "smooth" as ScrollBehavior,
    });
};

export default ScrollTo;
