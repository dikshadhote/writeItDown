const sortByPriority = (noteData, filterState) => {
  if (noteData !== [] || noteData != undefined) {
    const noteArr = [...noteData];

    if (filterState.sortByPriority === "High") {
      const arr = noteArr.filter((note) => note.priority === "High");
      return arr;
    }

    if (filterState.sortByPriority === "Low") {
      const arr = noteArr.filter((note) => note.priority === "Low");
      return arr;
    }
    if (filterState.sortByPriority === "Medium") {
      const arr = noteArr.filter((note) => note.priority === "Medium");
      return arr;
    }

    return noteArr;
  }
};
export { sortByPriority };
