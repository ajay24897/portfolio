import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import Projects from "./screens/Projects";
import About from "./screens/About";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <Projects />
      <About />
    </>
  );
}

export default App;
