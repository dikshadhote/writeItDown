import { useReducer, createContext, useContext } from "react";

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
    default:
      return { ...noteState };
  }
};

const NoteProvider = ({ children }) => {
  const [noteState, noteDispatch] = useReducer(noteReducer, {
    title: "",
    description: "",
    isPin: false,
    addLabel: [],
    cardColor: {},
    priority: "",
  });

  return (
    <NoteContext.Provider value={{ noteState, noteDispatch }}>
      {children}
    </NoteContext.Provider>
  );
};

export { useNote, NoteProvider };
