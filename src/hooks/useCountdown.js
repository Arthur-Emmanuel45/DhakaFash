import { useEffect, useRef, useState } from 'react';

const UseCountdown = (endDate) => {
    const [timeLeft, setTimeLeft] = useState(null);
    const intervalRef = useRef(null);

    useEffect(() => {
        if (!endDate) return;

        const end = new Date(endDate).getTime();

        const updateCountdown = () => {
            const now = Date.now();
            const distance = end - now;

            if (distance <= 0) {
                clearInterval(intervalRef.current);
                setTimeLeft({ expired: true });
                return;
            }

            setTimeLeft({
                expired: false,
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((distance / (1000 * 60)) % 60),
                seconds: Math.floor((distance / 1000) % 60),
            });
        };

        updateCountdown();
        intervalRef.current = setInterval(updateCountdown, 1000);

        return () => clearInterval(intervalRef.current);
    }, [endDate]);

    return timeLeft;
}

export default UseCountdown;
