import '../App.css';

import Home from './Home';
import About from './About';
import Projects from './Projects';
import React from 'react';

function SelectedPage({ selectedComp }) {
    return (
        <>
            {console.log("This is an Page ", { selectedComp })}
            {selectedComp == "Home" ? <Home /> : (selectedComp == "About Me" ? <About /> : <Projects />)}

        </>
    );
}

export default SelectedPage;
