/*
    js of interior
    --------------------------
    ** (Sticky elements) at scroll Down
    --------------------------
    ** Rotate at scroll
    --------------------------
    ** Hide box--signup
    --------------------------
    ** Particles
    --------------------------
*/

(function ($) {
  "use strict";

    jQuery(document).on('ready', function(){

      // ScrollMagic
      $(function() {
        /*-----------------------------
        (Sticky elements) at scroll Down
      -----------------------------*/
        // build scene
        var scene = new ScrollMagic.Scene({
            triggerElement: "#target1",
            duration: 300,
          })
          .setPin("#pin1")
          .addIndicators({
            name: "1 (duration: 300)",
          }) // add indicators (requires plugin)
          .addTo(controller);

        /*-----------------------------
        Rotate at scroll
      -----------------------------*/
        // build scene
        var scene = new ScrollMagic.Scene({
            triggerElement: "#targetRotate",
          })
          .setTween("#animateRotate", 0.5, {
            left: 100,
            rotation: 20,
            ease: Circ.easeInOut,
          }) // trigger a TweenMax.to tween
          .addIndicators({
            name: "1 (duration: 0)",
          }) // add indicators (requires plugin)
          .addTo(controller);

        /*-----------------------------
        Hide box--signup
      -----------------------------*/
        // build scene
        var scene = new ScrollMagic.Scene({
            triggerElement: "#triggerForm",
          })
          // trigger animation by adding a css class
          .setClassToggle("#animate1", "translat")
          .addIndicators({
            name: "1 - add a class",
          }) // add indicators (requires plugin)
          .addTo(controller);
      });

      /*-----------------------------
      Particles
    -----------------------------*/
      particlesJS("particles-js", {
        particles: {
          number: {
            value: 5,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: ["#F54955", "#3573F8", "#FAA749", "#19A389"],
          },
          shape: {
            type: ["circle"],
            stroke: {
              width: 0,
              color: "#000000",
            },
            polygon: {
              nb_sides: 5,
            },
          },
          opacity: {
            value: 1,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 1,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.3,
              sync: false,
            },
          },
          line_linked: {
            enable: false,
            distance: 500,
            color: "#ffffff",
            opacity: 1,
            width: 2,
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: false,
              mode: "bubble",
            },
            onclick: {
              enable: false,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 4,
              duration: 0.3,
              opacity: 1,
              speed: 1.5,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      });

    });

  }(jQuery));
