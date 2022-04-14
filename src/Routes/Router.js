import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Landing,
  Login,
  Signup,
  Home,
  Archieve,
  Label,
  Trash,
  MockmanComponent,
} from "../components";

export default function Router() {
  return (
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      <Route path="/archieve" element={<Archieve />} />
      <Route path="/label" element={<Label />} />
      <Route path="/trash" element={<Trash />} />
      <Route path="/mockman" element={<MockmanComponent />} />
    </Routes>
  );
}
