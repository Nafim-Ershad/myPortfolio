import KUTE from "kute.js";

import appStore from "./utils/stateManager";

import renderTechComponent from "./components/tech.component";
import renderToolsComponent from "./components/tools.component";

import "./scss/main.scss";

// const app = document.querySelector("#app");

const techTab = document.querySelector<HTMLSpanElement>(".tab.tech");
const toolsTab = document.querySelector<HTMLSpanElement>(".tab.tools");

const state = appStore.getState();


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

activateTab(state.skillTab);

techTab?.addEventListener("click", function(event){
    event.preventDefault();

    activateTab("tech");
    renderTechComponent();
});

toolsTab?.addEventListener("click", function(event){
    event.preventDefault();

    activateTab("tools");
    renderToolsComponent();
});


function activateTab(tabName: String): void{
    if(tabName === "tech"){
        toolsTab?.classList.remove("active");
        techTab?.classList.add("active");
        
        renderTechComponent();
    }
    else if(tabName === "tools"){
        techTab?.classList.remove("active");
        toolsTab?.classList.add("active");

        renderToolsComponent();
    }
}