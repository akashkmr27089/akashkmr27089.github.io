import './App.css';
import { useState } from 'react';
import NavBar from './Components/NavBar/NavBar.js'

function App() {

  const [selectedComp, CompFunc] = useState('Home');
  return (
    <>
      <NavBar CompFunc={CompFunc} />
      {selectedComp}
    </>
  );
}

export default App;
