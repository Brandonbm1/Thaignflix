import { useState } from "react";
import Navbar from "./components/Navbar";
import Principal from "./pages/Principal";
import { Routes, Route } from "react-router-dom";
import PageRoutes from "./routes/PageRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <PageRoutes />
    </div>
  );
}

export default App;
