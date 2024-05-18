import KUTE from "kute.js";

import "./scss/main.scss";

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


if(screen.width < 1360){
    window.alert("This is a work in progress. Currently view it in a desktop");
}
