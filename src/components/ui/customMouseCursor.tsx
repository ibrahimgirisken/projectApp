'use client'
import React, { useEffect, useRef } from 'react';

const CustomMouseCursor: React.FC = () => {
    const cursorInnerRef = useRef<HTMLDivElement>(null);
    const cursorOuterRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cursorInner = cursorInnerRef.current;
        const cursorOuter = cursorOuterRef.current;

        if (!cursorInner || !cursorOuter) {
            console.error("Cursor elements not found!");
            return;
        }

        let isHovered = false;

        const handleMouseMove = (event: MouseEvent) => {
            if (!isHovered) {
                cursorOuter.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
            }
            cursorInner.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
        };

        const handleMouseEnter = () => {
            cursorInner.classList.add('cursor-hover');
            cursorOuter.classList.add('cursor-hover');
            isHovered = true;
        };

        const handleMouseLeave = () => {
            cursorInner.classList.remove('cursor-hover');
            cursorOuter.classList.remove('cursor-hover');
            isHovered = false;
        };

        window.addEventListener('mousemove', handleMouseMove);

        const hoverElements = document.querySelectorAll('a, .cursor-pointer');
        hoverElements.forEach((element) => {
            element.addEventListener('mouseenter', handleMouseEnter);
            element.addEventListener('mouseleave', handleMouseLeave);
        });

        cursorInner.style.visibility = 'visible';
        cursorOuter.style.visibility = 'visible';

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            hoverElements.forEach((element) => {
                element.removeEventListener('mouseenter', handleMouseEnter);
                element.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    return (
        <>
            <div ref={cursorInnerRef} className="mouse-cursor cursor-inner" style={{ visibility: 'hidden' }} />
            <div ref={cursorOuterRef} className="mouse-cursor cursor-outer" style={{ visibility: 'hidden' }} />
        </>
    );
};

export default CustomMouseCursor;