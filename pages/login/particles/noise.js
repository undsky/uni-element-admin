export default {
    background: {
        color: {
            value: '#F4F4F5'
        }
    },
    fpsLimit: 120,
    particles: {
        number: {
            value: 100,
            density: {
                enable: false,
                value_area: 800
            }
        },
        color: {
            value: ['#5bc0eb', '#fde74c', '#9bc53d', '#e55934', '#fa7921']
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 1
        },
        size: {
            value: 32,
            random: {
                enable: true,
                minimumValue: 16
            }
        },
        line_linked: {
            enable: false,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            outMode: 'out',
            bounce: false,
            warp: false,
            noise: {
                enable: true,
                delay: {
                    value: 0.1
                }
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onHover: {
                enable: true,
                mode: 'push'
            },
            resize: true
        }
    },
    detectRetina: true,
    pauseOnBlur: true
};
