import axios from "axios";

const signUpHandler = async ({ email, firstName, lastName, password }) => {
  try {
    const { data } = await axios.post(`/api/auth/signup`, {
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: password,
    });
    console.log(data);
    return data;
  } catch (e) {
    console.error(e);
  }
};

export { signUpHandler };
