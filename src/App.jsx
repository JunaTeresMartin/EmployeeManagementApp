import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import AddEmployees from "./AddEmployees";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddEmployees />} />
        <Route path="/edit/:employeeId" element={<AddEmployees />} />
      </Routes>
    </Router>
  );
}

export default App;
