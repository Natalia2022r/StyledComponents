import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePages from "./component/HomePages/HomePages";
import NextPages from "./component/NextPages/NextPages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePages />}></Route>
        <Route path="/nextPages" element={<NextPages />}></Route>
      </Routes>
    </div>
  );
}

export default App;
