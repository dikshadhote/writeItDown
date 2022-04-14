import axios from "axios";

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
  console.log(email, password);
  try {
    const res = await axios.post("/api/auth/login", {
      email: email,
      password: password,
    });
    console.log(res);
    return res;
  } catch (e) {
    console.error(e);
  }
};

export { signUpHandler, logInHandler };
