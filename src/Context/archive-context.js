import { useState, createContext, useContext } from "react";
import { useNote } from "./notes-context";
import { useTrash } from "./trash-context";
import {
  addToArchiveHandler,
  getArchivesdata,
  restoreDataArchive,
  editNoteFromArchive,
} from "../ApiServices/ApiServices";
const ArchiveContext = createContext();

const useArchives = () => useContext(ArchiveContext);

const ArchiveProvider = ({ children }) => {
  const { setNoteData } = useNote();
  const [archiveData, setArchiveData] = useState([]);

  const addToArchive = async (note) => {
    const { data } = await addToArchiveHandler(note);
    setNoteData(data.notes);
    setArchiveData(data.archives);
  };

  const fetchArchiveData = async () => {
    const { data } = await getArchivesdata();
    setArchiveData(data.archives);
  };

  const restoreArchiveData = async (note) => {
    const { data } = await restoreDataArchive(note);
    setNoteData(data.notes);
    setArchiveData(data.archives);
  };

  const editArchiveData = async (editNote) => {
    const {
      data: { archives },
    } = await editNoteFromArchive(editNote);
    setArchiveData(archives);
  };

  return (
    <ArchiveContext.Provider
      value={{
        addToArchive,
        fetchArchiveData,
        archiveData,
        setArchiveData,
        restoreArchiveData,
        editArchiveData,
      }}
    >
      {children}
    </ArchiveContext.Provider>
  );
};

export { ArchiveProvider, useArchives };
