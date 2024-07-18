import React from "react";
import Home from "./Home";
import Article from "./Article";
import Projects from "./Projects";
import Navbar from "./Navbar";

export default function HomePage() {
  return (
    <div className="bg-gray-600 text-white">
      {/* <Navbar /> */}
      <Home />
      <Article />
      <Projects />
    </div>
  );
}
