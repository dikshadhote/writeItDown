import React from "react";
import { BsPinAngleFill, BsTrash } from "react-icons/bs";
import {
  MdOutlineLabel,
  MdOutlineModeEditOutline,
  MdOutlineArchive,
} from "react-icons/md";
import { useNote } from "../../Context/notes-context";
import { useArchives } from "../../Context/archive-context";
import { useTrash } from "../../Context/trash-context";
import { useFilter } from "../../Context/filter-notes-context";
export default function DisplayNote() {
  const { noteData, setEdit, noteDispatch, uniqueLabel } = useNote();
  const { addToArchive } = useArchives();
  const { addToTrash } = useTrash();
  const { filterDispatch } = useFilter();
  const priorityArr = ["Filter By Priority", "High", "Medium", "Low"];
  console.log(uniqueLabel);
  return (
    <div>
      <div className="d-flex align-items-center m-5 border-grey-top border-grey-bottom filter-container">
        <div className="white-text-color filt">Filters :</div>
        <div className="white-text-color filt border-grey-left ">
          <select
            id="filter-priority"
            name="filter-priority"
            className="p-1 border-radius select-container-bg white-text-color font-weight-bold"
            onChange={(e) => {
              filterDispatch({
                type: "PRIORITY",
                payload: e.target.value,
              });
            }}
          >
            {priorityArr.map((priority, idx) => {
              return (
                <option value={priority} key={idx}>
                  {priority}
                </option>
              );
            })}
          </select>
        </div>
        <div className="white-text-color filt border-grey-left ">
          <select
            id="filter-label"
            name="filter-label"
            className="p-1 border-radius select-container-bg white-text-color font-weight-bold"
            onChange={(e) => {
              filterDispatch({
                type: "LABEL",
                payload: e.target.value,
              });
            }}
          >
            <option value="Filter by Label"> Filter by Label</option>
            {uniqueLabel.map((label, idx) => {
              return (
                <option value={label} key={idx}>
                  {label}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="d-flex m-5 flex-wrap">
        {noteData.map((note) => {
          const {
            title,
            isPin,
            description,
            cardColor,
            addLabel,
            priority,
            _id,
          } = note;
          return (
            <div
              className={
                note.cardColor
                  ? `displayNote border-radius p-1 m-2 ${cardColor.cardColor}`
                  : "displayNote border-radius p-1 m-2"
              }
              key={_id}
            >
              <div className="d-flex flex-justify-space-between  align-items-center p-1">
                <h5>{title}</h5>
                <BsPinAngleFill
                  className={
                    note.isPin
                      ? "aqua-color cursor-pointer"
                      : "white-text-color cursor-pointer"
                  }
                  title={isPin ? "Unpin this note" : "Pin this note"}
                />
              </div>
              <div className=" d-flex pl-2">
                <p className="note-desc">{description}</p>
              </div>
              <div className="d-flex p-2 mt-2">
                {addLabel.map((label, idx) => (
                  <span
                    className={label ? "chips black-text-color" : "hide-label"}
                    key={idx}
                  >
                    {label}
                  </span>
                ))}
                <span
                  className={priority ? "chips black-text-color" : "hide-label"}
                >
                  {priority}
                </span>
              </div>
              <div className="d-flex flex-justify-around mt-1 align-items-center">
                <div className="pos-relative">
                  <MdOutlineLabel
                    className="fs-3 white-text-color cursor-pointer"
                    title="Add label"
                  />
                </div>
                <MdOutlineArchive
                  className="fs-3  white-text-color cursor-pointer"
                  title="Add to archive"
                  onClick={() => {
                    addToArchive(note);
                  }}
                />
                <BsTrash
                  className="fs-2 white-text-color cursor-pointer"
                  title="Add to trash"
                  onClick={() => {
                    addToTrash(note);
                  }}
                />
                <MdOutlineModeEditOutline
                  className="fs-2 white-text-color cursor-pointer"
                  title="Edit"
                  onClick={() => {
                    setEdit(true);
                    noteDispatch({ type: "EDIT", payload: note });
                    window.scroll({ top: 0, behavior: "smooth" });
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
