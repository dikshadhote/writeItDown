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
import PrivateRoute from "./PrivateRoute";
export default function Router() {
  return (
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/mockman" element={<MockmanComponent />} />
      <Route
        path="/home"
        element={<PrivateRoute navigateToPath={<Home />}></PrivateRoute>}
      />
      <Route
        path="/archieve"
        element={<PrivateRoute navigateToPath={<Archieve />}></PrivateRoute>}
      />
      <Route
        path="/label"
        element={<PrivateRoute navigateToPath={<Label />}></PrivateRoute>}
      />
      <Route
        path="/trash"
        element={<PrivateRoute navigateToPath={<Trash />}></PrivateRoute>}
      />
    </Routes>
  );
}
