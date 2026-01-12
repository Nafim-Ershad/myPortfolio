import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import AOS from "aos";

import App from './src/App';

import "./src/scss/main.scss";

AOS.init();

// Generate React
const rootApp = document.getElementById('app');

if(rootApp){

    const app = React.createElement(App);
    const router = React.createElement(BrowserRouter, null, app);

    createRoot(rootApp).render(router);
}




// ALERT MESSAGE FOR NON-MOBILE FRIENDLY DESIGN

if(screen.width < 1280){
    window.alert("This is a work in progress. Currently view it in a desktop");
}


// // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
// let vh = window.innerHeight * 0.01;
// // Then we set the value in the --vh custom property to the root of the document
// document.documentElement.style.setProperty('--vh', `${vh}px`);

