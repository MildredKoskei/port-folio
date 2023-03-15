import './App.css';
import React from 'react'
import Navbar from "./Components/Navbar";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";
import Resume from "./Components/Resume/Resume";
import Footer from "./Components/Footer";
import { Route, Routes, BrowserRouter as Router} from "react-router-dom"

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
      </Routes>
   <Footer />
    </div>
    </Router>
  );
}

export default App;
