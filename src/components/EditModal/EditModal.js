import React, { useState } from "react";
import { useNote } from "../../Context/notes-context";
import { BsPinAngleFill } from "react-icons/bs";
import { MdOutlineLabel, MdColorLens, MdPriorityHigh } from "react-icons/md";
import { colors } from "../colorsDB";
import { useArchives } from "../../Context/archive-context";
export default function EditModal() {
  const { noteState, noteDispatch, editData, setShowModal } = useNote();
  const { archiveData, editArchiveData } = useArchives();
  const isPin = noteState.isPin;
  const [label, setLabel] = useState("");
  const [showLabel, setShowLabel] = useState(false);
  const [showPallete, setShowPallete] = useState(false);
  const [showPriority, setShowPriority] = useState(false);
  let priorities = ["High", "Low", "Medium"];
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
          const checkNoteExist = archiveData.some(
            (note) => note._id === noteState._id
          );

          if (checkNoteExist) {
            editArchiveData(noteState);
            setShowModal(false);
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
          {noteState.addLabel.map((label, idx) => (
            <span
              className={label ? "chips white-text-color" : "hide-label"}
              key={idx}
            >
              {label}
            </span>
          ))}
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
                <p className="font-weight-bold white-text-color ml-1">Label</p>
                <p
                  className="cursor-pointer white-text-color"
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
                <p className="font-weight-bold ml-1  white-text-color">Color</p>
                <p
                  className="cursor-pointer  white-text-color"
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
                <p className="font-weight-bold ml-1 mb-1 white-text-color">
                  Priority
                </p>
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
                    <label htmlFor={currPriority} className="white-text-color">
                      {currPriority}
                    </label>
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
            EDIT
          </button>
        </div>
      </form>
    </div>
  );
}
