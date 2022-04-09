import React from "react";
import { Routes, Route } from "react-router-dom";
import { Landing, Login, Signup } from "../components/components";

export default function Router() {
  return (
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}
