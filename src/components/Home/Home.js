import React from "react";
import { Sidebar, CreateNote, DisplayNote } from "../index";
import { useNote } from "../../Context/notes-context";

export default function Home() {
  const { noteData } = useNote();
  return (
    <div className="white-text-color d-grid ">
      <Sidebar />
      <div className="d-flex flex-column">
        <div className="d-flex  flex-justify-center ">
          <CreateNote />
        </div>
        <div className="d-flex flex-justify-center">
          <h4 className={noteData.length > 0 ? "mt-4" : "hide-label"}>
            Available notes
          </h4>
        </div>
        <div className="d-flex flex-justify-center">
          <DisplayNote />
        </div>
      </div>
    </div>
  );
}
