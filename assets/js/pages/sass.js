/*
    js of interior
    --------------------------
    ** Hide header
    --------------------------
    ** Show header
    --------------------------
    ** horizontal scroll
    --------------------------
    ** Toggle for Pricing
    --------------------------
    ** Particles
    --------------------------
*/

(function ($) {
  "use strict";

    jQuery(document).on('ready', function(){

      $(function() {
        /*-----------------------------
        Hide header
      -----------------------------*/
        // build scene
        var scene = new ScrollMagic.Scene({
            triggerElement: "#triggerForm",
          })
          // trigger animation by adding a css class
          .setClassToggle("#myNavbar", "hideheader")
          .addIndicators({
            name: "1 - add a class",
          }) // add indicators (requires plugin)
          .addTo(controller);

        /*-----------------------------
        Show header
      -----------------------------*/
        // build scene
        var scene = new ScrollMagic.Scene({
            triggerElement: "#triggerTo",
          })
          // trigger animation by adding a css class
          .setClassToggle("#myNavbar", "showheader")
          .addIndicators({
            name: "1 - add a class",
          }) // add indicators (requires plugin)
          .addTo(controller);
      });

      /*-----------------------------
      horizontal scroll
    -----------------------------*/
      // init controller
      var controller = new ScrollMagic.Controller();

      var controller = new ScrollMagic.Controller();

      // define movement of panels
      var wipeAnimation = new TimelineMax().to("#slideContainer", 1, {
        x: "-55%",
      });

      // create scene to pin and link animation
      new ScrollMagic.Scene({
          triggerElement: "#pinContainer",
          triggerHook: "onLeave",
          duration: "350%",
        })
        .setPin("#pinContainer")
        .setTween(wipeAnimation)
        .addIndicators()
        .addTo(controller);

      var horizontal = new ScrollMagic.Scene({
          offset: 50,
          duration: 300,
          // reverse: false
        })

        // .addIndicators()
        .addTo(controller);

      /*-----------------------------
      Toggle for Pricing
    -----------------------------*/
      var e = document.getElementById("filt-monthly"),
        d = document.getElementById("filt-yearly"),
        t = document.getElementById("switcher"),
        m = document.getElementById("monthly"),
        y = document.getElementById("yearly");

      e.addEventListener("click", function() {
        t.checked = false;
        e.classList.add("toggler--is-active");
        d.classList.remove("toggler--is-active");
        m.classList.remove("hide");
        y.classList.add("hide");
      });

      d.addEventListener("click", function() {
        t.checked = true;
        d.classList.add("toggler--is-active");
        e.classList.remove("toggler--is-active");
        m.classList.add("hide");
        y.classList.remove("hide");
      });

      t.addEventListener("click", function() {
        d.classList.toggle("toggler--is-active");
        e.classList.toggle("toggler--is-active");
        m.classList.toggle("hide");
        y.classList.toggle("hide");
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
