import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Utama from "./Layouts/Utama";



function App() {
  return (
    <>
    <Router>
        <Routes>
        <Route path="/" element={<Utama/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
