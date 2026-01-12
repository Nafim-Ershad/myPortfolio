import React from 'react';
import { Routes, Route } from 'react-router';

import { AppProvider } from './context/AppContext';

import Background from './components/Background';
import HomeContainer from './container/HomeContainer';
import ContactContainer from './container/ContactContainer';
import ProjectsContainer from './container/ProjectsContainer';
import AboutContainer from './container/AboutContainer';

import "./App.scss";

function Index() {
    return(
        <AppProvider>
            <section className="main-section">
                <Background />
                <Routes>
                    <Route path="/" element={<HomeContainer />}/>
                    <Route path="/contact" element={<ContactContainer/>} />
                    <Route path="/projects" element={<ProjectsContainer />} />
                    <Route path="/about" element={<AboutContainer />} />
                </Routes>
            </section>
        </AppProvider>
    )
}


export default Index;