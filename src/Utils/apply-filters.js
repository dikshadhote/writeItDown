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

const sortByLabel = (noteData, filterState, uniqueLabel) => {
  if (noteData !== [] || noteData != undefined) {
    const noteArr = [...noteData];
    console.log(noteArr);
    console.log(filterState.sortByLabel);
    if (uniqueLabel.includes(filterState.sortByLabel)) {
      const arr = noteArr.filter(
        (note) => note.addLabel[0] === filterState.sortByLabel
      );
      return arr;
    }
  }
};
export { sortByPriority, sortByLabel };
