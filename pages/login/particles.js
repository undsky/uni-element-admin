// https://codepen.io/collection/DPOage

export const mouseTrail = {
    fullScreen: {
        enable: true,
        zIndex: 100
    },
    fpsLimit: 60,
    particles: {
        number: {
            value: 0,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#ff0000',
            animation: {
                enable: true,
                speed: 180,
                sync: true
            }
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000'
            },
            polygon: {
                nb_sides: 5
            }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 3,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 15,
            random: {
                enable: true,
                minimumValue: 5
            },
            animation: {
                enable: true,
                speed: 5,
                minimumValue: 5,
                sync: true,
                startValue: 'min',
                destroy: 'max'
            }
        },
        links: {
            enable: false
        },
        move: {
            enable: true,
            speed: 3.5,
            direction: 'none',
            random: false,
            straight: false,
            outMode: 'destroy',
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detectsOn: 'window',
        events: {
            onhover: {
                enable: true,
                mode: 'trail'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 0.8,
                speed: 3
            },
            repulse: {
                distance: 200
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            },
            trail: {
                delay: 0.005,
                quantity: 5,
                pauseOnStop: true
            }
        }
    },
    retina_detect: true
};

// 圆点
export const noise = {
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

// 折线
export const brokenLine = {
    background: {
        color: {
            value: '#C6E2FF'
        }
    },
    fpsLimit: 60,
    interactivity: {
        detectsOn: 'canvas',
        events: {
            onClick: {
                enable: true,
                mode: 'push'
            },
            onHover: {
                enable: true,
                mode: 'repulse'
            },
            resize: true
        },
        modes: {
            bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40
            },
            push: {
                quantity: 4
            },
            repulse: {
                distance: 200,
                duration: 0.4
            }
        }
    },
    particles: {
        color: {
            value: '#ffffff'
        },
        links: {
            color: '#ffffff',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1
        },
        collisions: {
            enable: true
        },
        move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 3,
            straight: false
        },
        number: {
            density: {
                enable: true,
                value_area: 800
            },
            value: 80
        },
        opacity: {
            value: 0.5
        },
        shape: {
            type: 'circle'
        },
        size: {
            random: true,
            value: 5
        }
    },
    detectRetina: true
};
