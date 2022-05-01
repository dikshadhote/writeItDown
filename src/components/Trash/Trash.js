import React from "react";
import { Sidebar } from "../index";
import { useTrash } from "../../Context/trash-context";
import { BsTrash } from "react-icons/bs";
import { FaTrashRestore } from "react-icons/fa";
export default function Trash() {
  const { trashData, restoreFromTrash, deleteFromTrash } = useTrash();

  return (
    <div className=" d-grid ">
      <Sidebar />
      <div className="d-flex m-5 flex-wrap">
        {trashData.length > 0 ? (
          trashData.map((note) => {
            const { title, description, cardColor, addLabel, priority, _id } =
              note;
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
                </div>
                <div className=" d-flex pl-2">
                  <p className="note-desc white-text-color">{description}</p>
                </div>
                <div className="d-flex p-2 mt-2">
                  <span
                    className={
                      addLabel ? "chips black-text-color" : "hide-label"
                    }
                    key={idx}
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
                  <FaTrashRestore
                    className="fs-2 white-text-color cursor-pointer"
                    title="Restore from trash"
                    onClick={() => restoreFromTrash(note)}
                  />
                  <BsTrash
                    className="fs-2 white-text-color cursor-pointer"
                    title="Permanently delete"
                    onClick={() => deleteFromTrash(note)}
                  />
                </div>
              </div>
            );
          })
        ) : (
          <div>
            <h3 className="white-text-color">There are no notes in trash</h3>
          </div>
        )}
      </div>
    </div>
  );
}
