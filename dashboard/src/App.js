import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css"
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/products" exact={true} element={<Home content="products" />} />
        <Route path="/users" exact={true} element={<Home content="users"/>} />
      </Routes>
    </div>
  );
}

export default App;
