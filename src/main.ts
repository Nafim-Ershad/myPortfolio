import appStore from "./stateManager";

import renderTechComponent from "./tech.component";
import renderToolsComponent from "./tools.component";

import "../scss/main.scss";

const techTab = document.querySelector<HTMLSpanElement>(".tab.tech");
const toolsTab = document.querySelector<HTMLSpanElement>(".tab.tools");

const state = appStore.getState();


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