import React from "react";
import { Sidebar } from "../index";
import { useNote } from "../../Context/notes-context";
import { BsPinAngleFill, BsTrash } from "react-icons/bs";
import { MdOutlineArchive } from "react-icons/md";

import { useArchives } from "../../Context/archive-context";
import { useTrash } from "../../Context/trash-context";

export default function Label() {
  const { noteData, uniqueLabel } = useNote();
  const { addToArchive } = useArchives();
  const { addToTrash } = useTrash();

  return (
    <div className=" d-grid ">
      <Sidebar />
      <div>
        {uniqueLabel.length > 0 ? (
          uniqueLabel.map((label, idx) => {
            return (
              <div key={idx}>
                <h3 className="white-text-color ml-5 mt-4">{label}</h3>
                <div className="d-flex ml-4 flex-wrap">
                  {noteData.map((note) => {
                    const {
                      title,
                      isPin,
                      description,
                      cardColor,
                      priority,
                      _id,
                    } = note;
                    if (
                      label === note.addLabel[0] &&
                      note.addLabel[0] !== undefined
                    ) {
                      return (
                        <div key={note._id}>
                          <div
                            className={
                              note.cardColor
                                ? `displayNote border-radius p-1 m-2 ${cardColor.cardColor}`
                                : "displayNote border-radius p-1 m-2"
                            }
                            key={_id}
                          >
                            <div className="d-flex flex-justify-space-between  align-items-center p-1">
                              <h5 className="white-text-color">{title}</h5>
                              <BsPinAngleFill
                                className={
                                  note.isPin
                                    ? "aqua-color cursor-pointer"
                                    : "white-text-color cursor-pointer"
                                }
                                title={
                                  isPin ? "Unpin this note" : "Pin this note"
                                }
                              />
                            </div>
                            <div className=" d-flex pl-2">
                              <p className="note-desc white-text-color">
                                {description}
                              </p>
                            </div>
                            <div className="d-flex p-2 mt-2">
                              <span
                                className={
                                  priority
                                    ? "chips black-text-color"
                                    : "hide-label"
                                }
                              >
                                {priority}
                              </span>
                            </div>
                            <div className="d-flex flex-justify-around mt-1 align-items-center">
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
                            </div>
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            );
          })
        ) : (
          <div>
            <h3 className="white-text-color ml-5 mt-5">No label cards found</h3>
          </div>
        )}
      </div>
    </div>
  );
}
