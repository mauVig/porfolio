import React from 'react'
import { Routes, Route } from "react-router-dom";
import Choose from './Choose.jsx'
import Page from './Page.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Choose />} />
        <Route path="/page" element={<Page />} />
      </Routes>
    </>
  );
}

export default App;
