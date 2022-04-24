import { useState, createContext, useContext } from "react";
import {
  addNoteToTrash,
  restoreNoteFromTrash,
  deleteNoteFromTrash,
  moveToTrashFromArchive,
} from "../ApiServices/ApiServices";
import { useNote } from "./notes-context";
import { useArchives } from "./archive-context";
const TrashContext = createContext();

const useTrash = () => useContext(TrashContext);

const TrashProvider = ({ children }) => {
  const { setNoteData } = useNote();
  const { setArchiveData } = useArchives();
  const [trashData, setTrashData] = useState([]);

  const addToTrash = async (note) => {
    const { data } = await addNoteToTrash(note);
    setTrashData(data.trash);
    setNoteData(data.notes);
  };

  const restoreFromTrash = async (note) => {
    const { data } = await restoreNoteFromTrash(note);
    setTrashData(data.trash);
    setNoteData(data.notes);
  };

  const deleteFromTrash = async (note) => {
    const { data } = await deleteNoteFromTrash(note);
    setTrashData(data.trash);
  };

  const trashFromArchive = async (note) => {
    const { data } = await moveToTrashFromArchive(note);
    setTrashData(data.trash);
    setArchiveData(data.archives);
  };

  return (
    <TrashContext.Provider
      value={{
        trashData,
        setTrashData,
        addToTrash,
        restoreFromTrash,
        deleteFromTrash,
        trashFromArchive,
      }}
    >
      {children}
    </TrashContext.Provider>
  );
};

export { useTrash, TrashProvider };
