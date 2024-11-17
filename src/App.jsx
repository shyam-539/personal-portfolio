import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Projects from "./components/project/Project";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <Projects />
        <Footer />
      </main>
    </>
  );
};

export default App;
