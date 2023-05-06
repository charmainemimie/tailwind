/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import "./App.css";
import "./index.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Works from "./components/Works";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
      <Works />
      <Footer />
    </>
  );
}

export default App;
