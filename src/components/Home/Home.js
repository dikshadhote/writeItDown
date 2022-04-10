import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { BsPinAngleFill } from "react-icons/bs";
import { MdOutlineLabel, MdColorLens, MdPriorityHigh } from "react-icons/md";

export default function Home() {
  return (
    <div className="white-text-color d-grid ">
      <Sidebar />
      <div className="d-flex flex-justify-center">
        <div className="create-note-container p-1">
          <div className="d-flex flex-justify-space-between align-items-center">
            <input
              className="input-create-note white-text-color fs-2"
              placeholder="Title"
              onChange={(e) => console.log(e.target.value)}
            />
            <BsPinAngleFill
              className="white-text-color cursor-pointer"
              title="Pin this note"
            />
          </div>
          <div className="mt-1">
            <input
              className="input-create-note input-desc white-text-color fs-2"
              placeholder="Add note here..."
              onChange={(e) => console.log(e.target.value)}
            />
          </div>
          <div className="d-flex flex-justify-around mt-1 align-items-center">
            <MdOutlineLabel
              className="fs-3 white-text-color cursor-pointer"
              title="Add label"
            />
            <MdColorLens
              className="fs-3  white-text-color cursor-pointer"
              title="Select color"
            />
            <MdPriorityHigh
              className="fs-3  white-text-color cursor-pointer"
              title="Add label"
            />
            <button
              className="p-1 font-weight-bold cursor-pointer border-radius"
              title="Add Note"
            >
              ADD
            </button>
            <a
              className="p-1 font-weight-bold cursor-pointer border-radius cursor-pointer"
              title="Clear data"
            >
              CLEAR
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
