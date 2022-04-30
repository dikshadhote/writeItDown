import { useReducer, createContext, useContext } from "react";
import { sortByPriority, sortByLabel } from "../Utils/apply-filters";
import { useNote } from "./notes-context";
const FilterContext = createContext();
const useFilter = () => useContext(FilterContext);

const FilterProvider = ({ children }) => {
  const filterReducer = (filterState, action) => {
    console.log(action);
    switch (action.type) {
      case "PRIORITY":
        return { ...filterState, sortByPriority: action.payload };
      case "LABEL":
        return { ...filterState, sortByLabel: action.payload };
      default:
        return { ...filterState };
    }
  };

  const [filterState, filterDispatch] = useReducer(filterReducer, {
    sortByPriority: "",
    sortByLabel: " ",
  });
  const { noteData, uniqueLabel } = useNote();
  // console.log(noteData);
  const filterData = sortByPriority(noteData, filterState);
  const filterData2 = sortByLabel(noteData, filterState, uniqueLabel);
  console.log(filterData2);
  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export { FilterProvider, useFilter };
