let easing = [0.6, -0.85, 0.01, 0.99];

const fadeInUp = {
    initial: {
        y: 60,
        opacity: 0,
        transition: { duration: 0.6, ease: easing },
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: easing },
    },
};

const scale = { scale: 1.01 };

export { easing, fadeInUp, scale };
