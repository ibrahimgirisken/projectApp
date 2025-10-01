'use client'
import { useEffect } from 'react';
import { animate } from 'motion';
import { usePathname } from 'next/navigation';

const AddAnimation = () => {
    const pathName = usePathname()
    useEffect(() => {
        const slideUp = document.querySelectorAll('.slideUp');
        const slideLeft = document.querySelectorAll('.slideLeft');
        const slideRight = document.querySelectorAll('.slideRight');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const x = entry.target.getAttribute('data-delay');
                    animate(
                        entry.target,
                        { transform: 'translateY(0)' },
                        {
                            duration: 0.6,
                            delay: x ? parseFloat(x) : 0
                        }
                    );
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        slideUp.forEach(box => {
            animate(box, { transform: 'translateY(40px)' });
            observer.observe(box);
        });

        // Add slideLeft animation
        slideLeft.forEach(box => {
            animate(box, { transform: 'translateX(-40px)' });
            observer.observe(box);
        });

        // Add slideRight animation
        slideRight.forEach(box => {
            animate(box, { transform: 'translateX(40px)' });
            observer.observe(box);
        });

        return () => {
            slideUp.forEach(box => observer.unobserve(box));
            slideLeft.forEach(box => observer.unobserve(box));
            slideRight.forEach(box => observer.unobserve(box));
        };
    }, [pathName]);

    return<></>
}

export default AddAnimation