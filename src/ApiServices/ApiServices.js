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

// Archive

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

export {
  signUpHandler,
  logInHandler,
  createNoteHandler,
  getNotedata,
  addToArchiveHandler,
};
