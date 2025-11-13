import React from 'react';
import ReactDOM from 'react-dom/client';

import About from './components/About';
import Personalinfo from './components/Personalinfo';
import Skills from './components/Skills';
import Navigation from './Navigation';

function Main() {
    return(
        <div>   
            <About />
            <Personalinfo />
            <Skills />
            <Navigation />
        </div>

    );
};

export default Main;
