import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import CreateNote from "./CreateNote";

export default function Home() {
  return (
    <div className="white-text-color d-grid ">
      <Sidebar />
      <div className="d-flex flex-justify-center">
        <CreateNote />
      </div>
    </div>
  );
}
