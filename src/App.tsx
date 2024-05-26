import { useState, useEffect, CSSProperties } from "react";
import HashLoader from "react-spinners/HashLoader";
import "./App.scss";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import ScrollButton from "./components/ScrollToTop";

function App(this: any) {
  const [loading, setLoading] = useState(false);
  const [theme] = useState("light");
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );
  // const toggleTheme = () => {
  //   if (theme === "light") {
  //     setTheme("dark");
  //   } else {
  //     setTheme("light");
  //   }
  // };
  let override: CSSProperties = {};
  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  if (!matches) {
    override = {
      position: "absolute",
      top: "40%",
      left: "30%",
    };
  } else {
    override = {
      position: "absolute",
      top: "40%",
      left: "45%",
    };
  }
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    document.body.className = theme;
  }, []);
  return (
    <div className={`App ${theme} main`}>
      {loading ? (
        <>
          <HashLoader
            color="#330867"
            loading={loading}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
            className="hashloader"
          />
        </>
      ) : (
        <>
          {/* <button onClick={toggleTheme}>Toggle Theme</button> */}
          <Header />
          <Home />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
          <ScrollButton />
        </>
      )}
    </div>
  );
}

export default App;
