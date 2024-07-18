import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./components";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}
