/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import "./App.css";
import "./index.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Works from "./components/Works";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Header/>
     <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/contact" element={<Contact/>}/>
      </Routes>
      </Router>
     
      
    </>
  );
}

export default App;
