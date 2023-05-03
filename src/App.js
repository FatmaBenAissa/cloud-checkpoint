import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarr from "./components/Navbarr";
import GameList from "./components/GameList";
import About from "./components/About";
import Contact from "./components/Contact";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbarr />

      <Routes>
        <Route path="/" element={<GameList />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      
    </div>
  );
}

export default App;
