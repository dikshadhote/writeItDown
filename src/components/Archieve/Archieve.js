import React, { useState, useEffect } from "react";
import { Sidebar } from "../index";
import { getArchivesdata } from "../../ApiServices/ApiServices";
import { BsPinAngleFill, BsTrash } from "react-icons/bs";
import { MdOutlineModeEditOutline, MdOutlineUnarchive } from "react-icons/md";
export default function Archieve() {
  const [archiveData, setArchiveData] = useState([]);

  const fetchArchiveData = async () => {
    const { data } = await getArchivesdata();
    setArchiveData(data.archives);
  };

  useEffect(() => {
    fetchArchiveData();
  }, []);
  console.log(archiveData);
  return (
    <div className=" d-grid ">
      <Sidebar />
      <div className="d-flex m-5 flex-wrap">
        {archiveData.map((note) => {
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
                <MdOutlineUnarchive
                  className="fs-3  white-text-color cursor-pointer"
                  title="Add to archive"
                  onClick={() => {
                    addToArchive(note);
                  }}
                />
                <BsTrash
                  className="fs-2 white-text-color cursor-pointer"
                  title="Add to trash"
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
