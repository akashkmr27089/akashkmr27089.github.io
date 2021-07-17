import './App.css';
import { useState } from 'react';
import NavBar from './Components/NavBar/NavBar.js'
import { MenuItems } from './Components/NavBar/MenuItem'
import React from 'react';

import Home from './Pages/Home';
import About from './Pages/About';
import SelectedPage from './Pages/SelectedPage';
import Box from "./Components/Design/Box/Box";


function App() {

  const [selectedComp, CompFunc] = useState('Home');


  return (
    <>
      <NavBar CompFunc={CompFunc} />
      <SelectedPage selectedComp={selectedComp} />
      {/* {MenuItems.includes({ selectedComp }) ? <SelectedPage selected={selectedComp} /> : <Home />} */}
      {selectedComp}
      <Box />
    </>
  );
}

export default App;
