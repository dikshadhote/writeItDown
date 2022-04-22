import { useState, createContext, useContext } from "react";
import {
  addNoteToTrash,
  restoreNoteFromTrash,
  deleteNoteFromTrash,
} from "../ApiServices/ApiServices";
import { useNote } from "./notes-context";
const TrashContext = createContext();

const useTrash = () => useContext(TrashContext);

const TrashProvider = ({ children }) => {
  const { setNoteData } = useNote();
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

  return (
    <TrashContext.Provider
      value={{
        trashData,
        setTrashData,
        addToTrash,
        restoreFromTrash,
        deleteFromTrash,
      }}
    >
      {children}
    </TrashContext.Provider>
  );
};

export { useTrash, TrashProvider };
