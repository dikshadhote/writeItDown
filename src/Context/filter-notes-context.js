import { useReducer, createContext, useContext } from "react";

const FilterContext = createContext();
const useFilter = () => useContext(FilterContext);

const FilterProvider = ({ children }) => {
  const filterReducer = (filterState, action) => {
    switch (action.type) {
      case "PRIORITY":
        return {};
      case "LABEL":
        return {};
      default:
        return {};
    }
  };

  const [filterState, filterDispatch] = useReducer(filterReducer, {
    sortByPriority: "",
    sortByLabel: " ",
  });

  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export { FilterProvider, useFilter };
