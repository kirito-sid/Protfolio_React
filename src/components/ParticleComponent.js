import React from "react";
import Particles from "react-particles-js";

export default () => (
  
    <Particles
      canvasClassName="example"
      height="50vh"
      width="100%"
      params={{
        particles: {
          number: {
            value: 300,
            density: {
              enable: true,
              value_area: 1803.4120608655228
            }
          },
          color: {
            value: "#000000"
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000"
            },
            polygon: {
              nb_sides: 3
            },
            image: {
              src: "img/github.svg",
              width: 150,
              height: 100
            }
          },
          opacity: {
            value: 0.7,
            random: true,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: true,
              speed: 10,
              size_min: 0.5,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 100,
            color: "#000000",
            opacity: 0.3687847739990702,
            width: 0.6413648243462091
          },
          move: {
            enable: true,
            speed: 1,
            direction: "top-right",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "window",
          events: {
            onhover: {
              enable: false,
              mode: "repulse"
            },
            onclick: {
              enable: false,
              mode: "repulse"
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
              distance: 500,
              size: 20,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            repulse: {
              distance: 100,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      }}
    />
);
