import React, { useState } from "react";
import { MdOutlineLabel, MdOutlineArchive } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { NavLink, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();
  return (
    <div className="d-flex flex-column sidebar-width">
      <NavLink
        className="d-flex p-2 cursor-pointer align-items-center"
        to="/home"
      >
        <AiOutlineHome
          className={
            location.pathname === "/home"
              ? "fs-3 mr-2 link-active"
              : "fs-3 white-text-color mr-2"
          }
        />
        <h5
          className={
            location.pathname === "/home" ? "link-active" : "white-text-color"
          }
        >
          Home
        </h5>
      </NavLink>
      <NavLink
        className="d-flex p-2 cursor-pointer align-items-center"
        to="/label"
      >
        <MdOutlineLabel
          className={
            location.pathname === "/label"
              ? "fs-3 link-active mr-2"
              : "fs-3 white-text-color mr-2"
          }
        />
        <h5
          className={
            location.pathname === "/label" ? "link-active" : "white-text-color"
          }
        >
          Labels
        </h5>
      </NavLink>
      <NavLink
        className="d-flex p-2 cursor-pointer align-items-center"
        to="/archive"
      >
        <MdOutlineArchive
          className={
            location.pathname === "/archive"
              ? "fs-3 link-active mr-2"
              : "fs-3 white-text-color mr-2"
          }
        />
        <h5
          className={
            location.pathname === "/archive"
              ? "link-active"
              : "white-text-color"
          }
        >
          Archive
        </h5>
      </NavLink>
      <NavLink
        className="d-flex p-2 cursor-pointer align-items-center"
        to="/trash"
      >
        <BsTrash
          className={
            location.pathname === "/trash"
              ? "fs-3 link-active mr-2"
              : "fs-3 white-text-color mr-2"
          }
        />
        <h5
          className={
            location.pathname === "/trash" ? "link-active" : "white-text-color"
          }
        >
          Trash
        </h5>
      </NavLink>
    </div>
  );
}
