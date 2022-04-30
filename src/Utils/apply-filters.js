const sortByPriority = (data, payload) => {
  if (data !== [] || data != undefined) {
    const notes = [...data];
    if (payload.filterPriority === "high") {
      const arr = notes.sort((note) => note.priority === "high");
      return arr;
    }

    return notes;
  }
};
