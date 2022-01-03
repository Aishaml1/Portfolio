import React from "react";
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./Components/Home";
import Nav from "./Components/Navbar";
import Projects from "./Components/Projects";

export default function App() {

  return (

    <main>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
      
    </main>


  );
}


