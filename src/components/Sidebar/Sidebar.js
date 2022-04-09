import React, { useState } from "react";
import { MdOutlineLabel, MdOutlineArchive } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="d-flex flex-column sidebar-width">
      <NavLink
        className="d-flex p-2 cursor-pointer align-items-center"
        to="/home"
      >
        <AiOutlineHome className="fs-3 white-text-color mr-2" />
        <h5 className="white-text-color">Home</h5>
      </NavLink>
      <NavLink
        className="d-flex p-2 cursor-pointer align-items-center"
        to="/label"
      >
        <MdOutlineLabel className="fs-3 white-text-color mr-2" />
        <h5 className="white-text-color">Labels</h5>
      </NavLink>
      <NavLink
        className="d-flex p-2 cursor-pointer align-items-center"
        to="/label"
      >
        <MdOutlineArchive className="fs-3 white-text-color mr-2" />
        <h5 className="white-text-color">Archieve</h5>
      </NavLink>
      <NavLink
        className="d-flex p-2 cursor-pointer align-items-center"
        to="/label"
      >
        <BsTrash className="fs-3 white-text-color mr-2" />
        <h5 className="white-text-color">Trash</h5>
      </NavLink>
    </div>
  );
}
