import { useReducer, createContext, useContext } from "react";

const displayNoteContext = createContext();

const useDisplayNote = () => useContext(displayNoteContext);

const displayNoteReducer = (displayNoteState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case "TOGGLE_ARCHIVE":
      return { ...displayNoteState, isArchive: action.payload };
    case "TOGGLE_TRASH":
  }
};

const DisplayNoteProvider = ({ children }) => {
  const [displayNoteState, displayNoteDispatch] = useReducer(
    displayNoteReducer,
    {
      isArchive: false,
      isTrash: false,
      editNote: [],
    }
  );
  return (
    <displayNoteContext.Provider
      value={{ displayNoteState, displayNoteDispatch }}
    >
      {children}
    </displayNoteContext.Provider>
  );
};

export { DisplayNoteProvider, useDisplayNote };
