import React, { useState } from "react";
import { BsPinAngleFill } from "react-icons/bs";
import { MdOutlineLabel, MdColorLens, MdPriorityHigh } from "react-icons/md";
import { useNote } from "../../Context/notes-context";
import { colors } from "../colorsDB";
import { createNoteHandler } from "../../ApiServices/ApiServices";

export default function CreateNote() {
  const { noteState, noteData, noteDispatch, edit, editData, setEdit } =
    useNote();
  const isPin = noteState.isPin;
  const [label, setLabel] = useState("");
  const [showLabel, setShowLabel] = useState(false);
  const [showPallete, setShowPallete] = useState(false);
  const [showPriority, setShowPriority] = useState(false);
  let priorities = ["High", "Low", "Medium"];
  const createNote = async (data) => {
    await createNoteHandler(data);
  };
  return (
    <div>
      <form
        className={
          noteState.cardColor.cardColor
            ? `create-note-container p-1 ${noteState.cardColor.cardColor}`
            : "create-note-container p-1 black-bg"
        }
        onSubmit={(e) => {
          e.preventDefault();
          // return true if not exists
          const checkNoteExist = noteData.some(
            (note) => note._id === noteState._id
          );

          if (checkNoteExist) {
            editData(noteState);
            setEdit(false);
          } else {
            createNote(noteState);
          }
          noteDispatch({ type: "CLEAR_DATA" });
        }}
      >
        <div className="d-flex flex-justify-space-between align-items-center">
          <input
            required
            className={
              noteState.cardColor.inputColor
                ? `input-create-note gray-text-note  fs-2 ${noteState.cardColor.inputColor}`
                : "input-create-note gray-text-note fs-2 black-light-bg"
            }
            placeholder="Title"
            value={noteState.title}
            onChange={(e) => {
              noteDispatch({
                type: "SET_TITLE",
                payload: e.target.value,
              });
            }}
          />
          <BsPinAngleFill
            className={
              noteState.isPin
                ? "aqua-color cursor-pointer"
                : "white-text-color cursor-pointer"
            }
            title={noteState.isPin ? "Unpin this note" : "Pin this note"}
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
            required
            className={
              noteState.cardColor.inputColor
                ? `input-create-note input-desc white-text-color fs-2 ${noteState.cardColor.inputColor}`
                : "input-create-note input-desc white-text-color fs-2 black-light-bg"
            }
            placeholder="Add note here..."
            value={noteState.description}
            onChange={(e) => {
              noteDispatch({
                type: "SET_DESCRIPTION",
                payload: e.target.value,
              });
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <span
            className={
              noteState.addLabel ? "chips white-text-color" : "hide-label"
            }
          >
            {noteState.addLabel}
          </span>
          <span
            className={
              noteState.priority ? "chips white-text-color" : "hide-label"
            }
          >
            {noteState.priority}
          </span>
        </div>
        <div className="d-flex flex-justify-around mt-1 align-items-center">
          <div className="pos-relative">
            <MdOutlineLabel
              className="fs-3 white-text-color cursor-pointer"
              title="Add label"
              onClick={() => {
                setShowLabel(true);
              }}
            />
            <div className={showLabel ? "show-label" : "hide-label"}>
              <div className="d-flex flex-justify-space-between">
                <p className="font-weight-bold ml-1">Label</p>
                <p
                  className="cursor-pointer"
                  onClick={() => setShowLabel(false)}
                >
                  X
                </p>
              </div>
              <div className="d-flex align-items-center">
                <input
                  className="white-text-color mt-1 ml-1 input-label fs-3"
                  placeholder="Add label"
                  onChange={(e) => {
                    if (e.target.value !== "") {
                      setLabel(e.target.value);
                    }
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
          </div>
          <div className="pos-relative">
            <MdColorLens
              className="fs-3  white-text-color cursor-pointer"
              title="Select color"
              onClick={() => {
                setShowPallete(true);
              }}
            />
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
                {colors.map((item) => {
                  return (
                    <div
                      className={`color-container  cursor-pointer ${item.cardColor}`}
                      key={item.cardColor}
                      onClick={() =>
                        noteDispatch({
                          type: "SET_CARD_COLOR",
                          payload: {
                            inputColor: item.inputColor,
                            cardColor: item.cardColor,
                          },
                        })
                      }
                    ></div>
                  );
                })}
              </div>
            </div>
          </div>
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
            type="submit"
          >
            {edit === true ? "EDIT" : "ADD"}
          </button>
        </div>
      </form>
    </div>
  );
}
