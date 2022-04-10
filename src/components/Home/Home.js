import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { BsPinAngleFill } from "react-icons/bs";
import { MdOutlineLabel, MdColorLens, MdPriorityHigh } from "react-icons/md";
import { useNote } from "../../Context/notes-context";

export default function Home() {
  const { noteDispatch } = useNote();
  // console.log(value);

  return (
    <div className="white-text-color d-grid ">
      <Sidebar />
      <div className="d-flex flex-justify-center">
        <div className="create-note-container p-1">
          <div className="d-flex flex-justify-space-between align-items-center">
            <input
              className="input-create-note white-text-color fs-2"
              placeholder="Title"
              onChange={(e) => {
                let timer = setTimeout(() => {
                  noteDispatch({
                    type: "SET_TITLE",
                    payload: e.target.value,
                  });
                  clearTimeout(timer);
                }, 5000);
              }}
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
              onChange={(e) => {
                let timer = setTimeout(() => {
                  noteDispatch({
                    type: "SET_DESCRIPTION",
                    payload: e.target.value,
                  });
                  clearTimeout(timer);
                }, 5000);
              }}
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
