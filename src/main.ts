import KUTE from "kute.js";
import AOS from "aos";

import "./scss/main.scss";


AOS.init();

// Wave Animation
const tween = new KUTE.fromTo(
    "#wave1", {
        path: "#wave1",
    }, {
        path: "#wave2",
    }, {
        repeat: 999,
        duration: 7000,
        yoyo: true,
    }
);

tween.start();

// ALERT MESSAGE FOR NON-MOBILE FRIENDLY DESIGN

// if(screen.width < 1360){
//     window.alert("This is a work in progress. Currently view it in a desktop");
// }


// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
particlesJS.load('particles', './scripts/particlejs-bg-config.json')