import {
  useReducer,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { getNotedata, editNoteData } from "../ApiServices/ApiServices";
const NoteContext = createContext();

const useNote = () => useContext(NoteContext);

const noteReducer = (noteState, action) => {
  //   sort out unique label
  const repeatLabel = noteState.addLabel.some(
    (label) => label === action.payload
  );

  switch (action.type) {
    case "SET_TITLE":
      return { ...noteState, title: action.payload };
    case "SET_DESCRIPTION":
      return { ...noteState, description: action.payload };
    case "SET_PIN":
      return { ...noteState, isPin: action.payload };
    case "SET_CARD_COLOR":
      return { ...noteState, cardColor: action.payload };

    case "SET_LABEL":
      if (repeatLabel) {
        return {
          ...noteState,
        };
      }
      return {
        ...noteState,
        addLabel: [...noteState.addLabel, action.payload],
      };
    case "SET_PRIORITY":
      return { ...noteState, priority: action.payload };

    case "CLEAR_DATA":
      return {
        title: "",
        description: "",
        isPin: false,
        addLabel: [],
        cardColor: {},
        priority: "",
      };

    case "EDIT":
      return { ...action.payload };
    default:
      return { ...noteState };
  }
};

const NoteProvider = ({ children }) => {
  const [noteData, setNoteData] = useState([]);
  const [edit, setEdit] = useState(false);

  const getData = async () => {
    const {
      data: { notes },
    } = await getNotedata();

    setNoteData(notes);
  };

  const editData = async (editNote) => {
    const {
      data: { notes },
    } = await editNoteData(editNote);
    setNoteData(notes);
  };

  const [noteState, noteDispatch] = useReducer(noteReducer, {
    title: "",
    description: "",
    isPin: false,
    addLabel: [],
    cardColor: {},
    priority: "",
  });

  useEffect(() => {
    getData();
  }, [noteState]);
  return (
    <NoteContext.Provider
      value={{
        noteState,
        noteDispatch,
        noteData,
        setNoteData,
        setEdit,
        edit,
        editData,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

export { useNote, NoteProvider };
