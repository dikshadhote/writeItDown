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

export default function DisplayNote() {
  const { noteData } = useNote();
  const { addToArchive } = useArchives();
  const { addToTrash } = useTrash();

  return (
    <div>
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
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
