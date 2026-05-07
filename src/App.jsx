import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />

      <div className="main-content">
        <Home />
      </div>

      <Footer />
    </>
  );
};

export default App;
