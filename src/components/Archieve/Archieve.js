import React, { useState } from "react";
import { Sidebar } from "../index";

import { BsPinAngleFill, BsTrash } from "react-icons/bs";
import { MdOutlineModeEditOutline, MdOutlineUnarchive } from "react-icons/md";
import { useArchives } from "../../Context/archive-context";
import { useTrash } from "../../Context/trash-context";
import { useNote } from "../../Context/notes-context";
import EditModal from "../EditModal/EditModal";
export default function Archieve() {
  const { archiveData, restoreArchiveData } = useArchives();
  const { trashFromArchive } = useTrash();
  const { setShowModal, showModal, noteDispatch } = useNote();

  return (
    <div className=" d-grid ">
      <Sidebar />
      <div className="d-flex flex-column">
        <div className="d-flex  flex-justify-center ">
          {showModal ? <EditModal /> : ""}
        </div>
        <div className="d-flex m-5 flex-wrap">
          {archiveData.length > 0 ? (
            archiveData.map((note) => {
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
                      ? `displayNote archieve-height border-radius p-1 m-2 ${cardColor.cardColor}`
                      : "displayNote archieve-height border-radius p-1 m-2"
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
                      title={isPin ? "Unpin this note" : "Pin this note"}
                    />
                  </div>
                  <div className=" d-flex pl-2">
                    <p className="note-desc white-text-color">{description}</p>
                  </div>
                  <div className="d-flex p-2 mt-2">
                    <span
                      className={
                        addLabel ? "chips black-text-color" : "hide-label"
                      }
                      key={_id}
                    >
                      {addLabel}
                    </span>

                    <span
                      className={
                        priority ? "chips black-text-color" : "hide-label"
                      }
                    >
                      {priority}
                    </span>
                  </div>
                  <div className="d-flex flex-justify-around mt-1 align-items-center">
                    <MdOutlineUnarchive
                      className="fs-3  white-text-color cursor-pointer"
                      title="Add to archive"
                      onClick={() => {
                        restoreArchiveData(note);
                      }}
                    />
                    <BsTrash
                      className="fs-2 white-text-color cursor-pointer"
                      title="Add to trash"
                      onClick={() => {
                        trashFromArchive(note);
                      }}
                    />
                    <MdOutlineModeEditOutline
                      className="fs-2 white-text-color cursor-pointer"
                      title="Edit"
                      onClick={() => {
                        setShowModal(true);
                        noteDispatch({ type: "EDIT", payload: note });
                        window.scroll({ top: 0, behavior: "smooth" });
                      }}
                    />
                  </div>
                </div>
              );
            })
          ) : (
            <div>
              <h3 className="white-text-color">
                There are no notes found as archived
              </h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
