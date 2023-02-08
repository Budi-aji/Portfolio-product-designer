import { useEffect, useState} from 'react'

export const useScrollPos = () => {
    const [scrollPos, setScrollPosition] = useState(0);

    useEffect(() => {
        const updatePosition = () => {
            setScrollPosition(window.pageYOffset);
        };

    window.addEventListener('scroll', updatePosition);

    updatePosition();

    return () => window.removeEventListener('scroll', updatePosition);
    }, []);

    return scrollPos;
};
