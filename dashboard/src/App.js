import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css"
import Home from "./Pages/Home/Home";
import Table from "./Components/Main/SecondarySection/Table/Table";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Table />} />
        <Route path="/usuarios" element={<Table />} />
      </Routes>
    </div>
  );
}

export default App;
