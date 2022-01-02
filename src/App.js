import React from "react";
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Nav from "./Components/Navbar";
import Projects from "./Components/Projects";

export default function App() {

  return (

    <main>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      
    </main>


  );
}


