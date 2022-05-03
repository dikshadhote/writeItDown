import { useReducer, createContext, useContext } from "react";
import { sortByPriority } from "../Utils/apply-filters";
import { useNote } from "./notes-context";
const FilterContext = createContext();
const useFilter = () => useContext(FilterContext);

const FilterProvider = ({ children }) => {
  const filterReducer = (filterState, action) => {
    switch (action.type) {
      case "PRIORITY":
        return { ...filterState, sortByPriority: action.payload };
      case "LABEL":
        return { ...filterState, sortByLabel: action.payload };
      case "CLEAR_ALL_FILTERS":
        return {
          sortByPriority: "",
          sortByLabel: " ",
        };
      default:
        return { ...filterState };
    }
  };

  const [filterState, filterDispatch] = useReducer(filterReducer, {
    sortByPriority: "",
    sortByLabel: " ",
  });

  const { noteData, uniqueLabel } = useNote();
  const sortByLabel = (noteData, filterState) => {
    if (noteData !== [] || noteData != undefined) {
      const noteArr = [...noteData];
      if (uniqueLabel.includes(filterState.sortByLabel)) {
        const arr = noteArr.filter(
          (note) => note.addLabel === filterState.sortByLabel
        );
        return arr;
      }
      return noteArr;
    }
  };

  const filterNotesBySorting = (filterState, ...sortFunctionArr) => {
    return (noteData) => {
      return sortFunctionArr.reduce((filteredListAcc, currFilterFunction) => {
        return currFilterFunction(filteredListAcc, filterState);
      }, noteData);
    };
  };

  const filteredNotes = filterNotesBySorting(
    filterState,
    sortByPriority,
    sortByLabel
  )(noteData);

  return (
    <FilterContext.Provider
      value={{ filterState, filterDispatch, filteredNotes }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export { FilterProvider, useFilter };
