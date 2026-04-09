import React, { useEffect, useState } from 'react'
import { BiArrowToTop } from "react-icons/bi";

const ScrollToTop = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-20 right-8 z-50 p-3 bg-cyan-600
                    hover:bg-cyan-700 text-white rounded-full shadow-lg
                    transition-all duration-300 hover:scale-110"
                    aria-label='scroll to top'
                >
                    <BiArrowToTop size={24} />
                </button>
            )}
        </div>
    )
}

export default ScrollToTop;