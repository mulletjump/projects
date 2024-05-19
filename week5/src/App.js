import React from "react"; //rafce
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Button from "./Components/Button";
import Write from "./Components/Write";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Button />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
