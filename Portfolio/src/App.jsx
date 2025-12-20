import React, { useEffect, useState } from 'react';
import "./App.css"
import { Navbar} from "./Components/Navbar"
import {Hero} from './Components/Hero';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
function App() {

const[isLoaded ,setIsLoaded]=useState(false);

useEffect(()=>{
setIsLoaded(true);
}, [])

  return (
    <div className={`min-h-screen w-full app ${isLoaded && 'loaded'}`}> 
    
    <Navbar></Navbar>
    <Hero></Hero>
    <Projects></Projects>
    <Contact></Contact>

   
    </div>
  );
}

export default App;