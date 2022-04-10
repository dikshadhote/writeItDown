import { useReducer, createContext, useContext } from "react";

const NoteContext = createContext();

const useNote = () => useContext(NoteContext);

const noteReducer = (noteState, action) => {
  switch (action.type) {
    case "SET_TITLE":
      break;
    case "SET_DESCRIPTION":

    case "SET_PIN":

    case "SET_CARD_COLOR":

    case "SET_LABEL":

    case "SET_PRIORITY":
    default:
      return { ...noteState };
  }
};

const NoteProvider = ({ children }) => {
  const [noteState, noteDispatch] = useReducer(noteReducer, {
    title: "",
    description: "",
    isPin: false,
    addLabel: "",
    cardColor: "",
    priority: "",
  });

  return (
    <NoteContext.Provider value={{ noteState, noteDispatch }}>
      {children}
    </NoteContext.Provider>
  );
};

export { useNote, NoteProvider };
