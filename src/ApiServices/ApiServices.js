import axios from "axios";

// Authentication
const signUpHandler = async ({ email, firstName, lastName, password }) => {
  try {
    const res = await axios.post(`/api/auth/signup`, {
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: password,
    });

    return res;
  } catch (e) {
    console.error(e);
  }
};

const logInHandler = async ({ email, password }) => {
  try {
    const res = await axios.post("/api/auth/login", {
      email: email,
      password: password,
    });
    return res;
  } catch (e) {
    console.error(e);
  }
};

// Notes

const createNoteHandler = async (data) => {
  try {
    const res = await axios.post(
      "/api/notes",
      {
        note: data,
      },
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );
    return res;
  } catch (e) {
    console.error(e);
  }
};

const getNotedata = async () => {
  try {
    const res = await axios.get("/api/notes", {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
    return res;
  } catch (e) {
    console.error(e);
  }
};

// Edit note data /notes/:noteId

const editNoteData = async (note) => {
  try {
    const res = await axios.post(
      `/api/notes/${note._id}`,
      {
        note,
      },
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );
    return res;
  } catch (e) {
    console.error(e);
  }
};

// Archive
// Add to archive
const addToArchiveHandler = async (note) => {
  try {
    const res = await axios.post(
      `/api/notes/archives/${note._id}`,
      {
        note: { ...note },
      },
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );
    return res;
  } catch (e) {
    console.error(e);
  }
};

// get all archive
const getArchivesdata = async () => {
  try {
    const res = await axios.get("/api/archives", {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
    return res;
  } catch (e) {
    console.error(e);
  }
};

// Restore from Archive

const restoreDataArchive = async (note) => {
  try {
    const res = await axios.post(
      `/api/archives/restore/${note._id}`,
      {
        note: { ...note },
      },
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );
    return res;
  } catch (e) {
    console.error(e);
  }
};

// Move to trash from archive

const moveToTrashFromArchive = async (note) => {
  try {
    const res = await axios.post(
      `/api/archives/trash/${note._id}`,
      {
        note: { ...note },
      },
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );
    return res;
  } catch (e) {
    console.error(e);
  }
};

// Edit from Archive

const editNoteFromArchive = async (note) => {
  try {
    const res = await axios.post(
      `/api/archives/${note._id}`,
      {
        note,
      },
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );
    console.log(res);
    return res;
  } catch (e) {
    console.error(e);
  }
};

// Add note to trash from home
const addNoteToTrash = async (note) => {
  try {
    const res = await axios.post(
      `/api/trash/delete/${note._id}`,
      {
        note: { ...note },
      },
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );
    return res;
  } catch (e) {
    console.error(e);
  }
};

// notes in trash

const getTrashdata = async () => {
  try {
    const res = await axios.get("/api/trash", {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
    return res;
  } catch (e) {
    console.error(e);
  }
};

// Restore note from trash to notes
const restoreNoteFromTrash = async (note) => {
  try {
    const res = await axios.post(
      `/api/trash/restore/${note._id}`,
      {
        note: { ...note },
      },
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );
    return res;
  } catch (e) {
    console.error(e);
  }
};

//  delete permanently

const deleteNoteFromTrash = async (note) => {
  try {
    const res = await axios.delete(`/api/trash/delete/${note._id}`, {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
    return res;
  } catch (e) {
    console.error(e);
  }
};
export {
  signUpHandler,
  logInHandler,
  createNoteHandler,
  getNotedata,
  editNoteData,
  addToArchiveHandler,
  getArchivesdata,
  restoreDataArchive,
  addNoteToTrash,
  restoreNoteFromTrash,
  deleteNoteFromTrash,
  getTrashdata,
  moveToTrashFromArchive,
  editNoteFromArchive,
};
