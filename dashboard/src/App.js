import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css"
import Home from "./Pages/Home/Home";
import Test from "./Pages/Test/Test";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" exact={true} element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
