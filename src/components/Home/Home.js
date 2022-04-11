import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { BsPinAngleFill } from "react-icons/bs";
import { MdOutlineLabel, MdColorLens, MdPriorityHigh } from "react-icons/md";
import { useNote } from "../../Context/notes-context";

export default function Home() {
  const { noteState, noteDispatch } = useNote();
  const isPin = noteState.isPin;
  const [label, setLabel] = useState("");
  const [showLabel, setShowLabel] = useState(false);
  const [showPallete, setShowPallete] = useState(false);
  const [showPriority, setShowPriority] = useState(false);
  console.log(noteState.addLabel);
  let priorities = ["High", "Low", "Medium"];
  return (
    <div className="white-text-color d-grid ">
      <Sidebar />
      <div className="d-flex flex-justify-center">
        <div className="create-note-container p-1">
          <div className="d-flex flex-justify-space-between align-items-center">
            <input
              className="input-create-note gray-text-note  fs-2"
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
              onClick={() =>
                noteDispatch({
                  type: "SET_PIN",
                  payload: !isPin,
                })
              }
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
              onClick={() => {
                setShowLabel(true);
              }}
            />
            <MdColorLens
              className="fs-3  white-text-color cursor-pointer"
              title="Select color"
              onClick={() => {
                setShowPallete(true);
              }}
            />
            <div className="pos-relative">
              <MdPriorityHigh
                className="fs-3  white-text-color cursor-pointer"
                title="Add priority"
                onClick={() => {
                  setShowPriority(true);
                }}
              />
              <div
                className={
                  showPriority
                    ? "list-style-none priority-container"
                    : "hide-label"
                }
              >
                <div className="d-flex flex-justify-space-between">
                  <p className="font-weight-bold ml-1 mb-1">Priority</p>
                  <p
                    className="cursor-pointer"
                    onClick={() => setShowPriority(false)}
                  >
                    X
                  </p>
                </div>
                {priorities.map((currPriority) => {
                  return (
                    <li key={currPriority}>
                      <input
                        id={currPriority}
                        className="form-check-input"
                        type="radio"
                        name="rating"
                        checked={noteState.priority === currPriority}
                        onChange={() =>
                          noteDispatch({
                            type: "SET_PRIORITY",
                            payload: currPriority,
                          })
                        }
                      />
                      <label htmlFor={currPriority}>{currPriority}</label>
                    </li>
                  );
                })}
              </div>
            </div>
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
          <div className={showLabel ? "show-label" : "hide-label"}>
            <div className="d-flex flex-justify-space-between">
              <p className="font-weight-bold ml-1">Label</p>
              <p className="cursor-pointer" onClick={() => setShowLabel(false)}>
                X
              </p>
            </div>
            <div className="d-flex align-items-center">
              <input
                className="white-text-color mt-1 ml-1 input-label fs-3"
                placeholder="Add label"
                onChange={(e) => {
                  let timer = setTimeout(() => {
                    if (e.target.value !== "") {
                      setLabel(e.target.value);
                    }
                    clearTimeout(timer);
                  }, 2000);
                }}
              />
              <button
                className="cursor-pointer white-text-color fs-1 label-btn  btn-link btn-link-primary border-radius mt-1"
                title="Add Label"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  noteDispatch({
                    type: "SET_LABEL",
                    payload: label,
                  });
                }}
              >
                ADD
              </button>
            </div>
          </div>
          <div
            className={
              showPallete
                ? "d-flex color-pallete-container flex-column"
                : "hide-label"
            }
          >
            <div className="d-flex flex-justify-space-between">
              <p className="font-weight-bold ml-1">Color</p>
              <p
                className="cursor-pointer"
                onClick={() => setShowPallete(false)}
              >
                X
              </p>
            </div>
            <div className="d-flex flex-row flex-wrap mt-1 ml-1">
              <div className="color-container black-bg cursor-pointer"></div>
              <div className="color-container light-pink-bg cursor-pointer "></div>
              <div className="color-container dark-pink-bg cursor-pointer "></div>
              <div className="color-container violet-bg cursor-pointer "></div>
              <div className="color-container aqua-blue-bg cursor-pointer"></div>
              <div className="color-container light-yellow-bg cursor-pointer"></div>
              <div className="color-container dark-yellow-bg cursor-pointer "></div>
              <div className="color-container light-green-bg cursor-pointer"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
