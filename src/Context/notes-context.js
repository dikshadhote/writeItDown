import { useReducer, createContext, useContext } from "react";

const NoteContext = createContext();

const useNote = () => useContext(NoteContext);

const noteReducer = (noteState, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_TITLE":
      return { ...noteState, title: action.payload };
    case "SET_DESCRIPTION":
      return { ...noteState, description: action.payload };
    case "SET_PIN":
      return { ...noteState, isPin: action.payload };
    case "SET_CARD_COLOR":

    case "SET_LABEL":

    case "SET_PRIORITY":

    case "CLEAR_DATA":
      return {
        title: "",
        description: "",
        isPin: false,
        addLabel: "",
        cardColor: "",
        priority: "",
      };
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
