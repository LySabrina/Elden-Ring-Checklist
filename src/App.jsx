import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Catalogue from "./components/Catalogue.jsx";
import Header from "./components/Header.jsx";

function App() {
  
  return (
    <>
      <Header />
      <Catalogue />
    </>
  );
}

export default App;
