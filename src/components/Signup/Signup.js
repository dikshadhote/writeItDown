import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signUpHandler } from "../../ApiServices/ApiServices";
export default function Signup() {
  const [signIn, setSignin] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });

  const signUp = async (signIn) => {
    const { data } = await signUpHandler(signIn);
    localStorage.setItem("token", data.encodedToken);
  };
  console.log(signIn);
  return (
    <div className="d-flex flex-justify-center align-items-center">
      <div className="card nav-yellow-shadow  login-container flex-column">
        <div className="d-flex flex-justify-center">
          <h3 className="white-text-color">Signup</h3>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            signUp(signIn);
          }}
        >
          <div className=" mt-2 ml-1 d-flex flex-column">
            <label htmlFor="input-fname" className="ml-2 white-text-color">
              First Name
            </label>
            <input
              className="input input-login black-light-bg white-text-color"
              id="input-fname"
              placeholder="Loreum"
              onChange={(e) => {
                let timer = setTimeout(() => {
                  setSignin({ ...signIn, firstName: e.target.value });
                  clearTimeout(timer);
                }, 1000);
              }}
            />
          </div>
          <div className=" mt-2 ml-1 d-flex flex-column">
            <label htmlFor="input-lname" className="ml-2 white-text-color">
              Last Name
            </label>
            <input
              className="input input-login black-light-bg white-text-color"
              id="input-lname"
              placeholder="Ipsum"
              onChange={(e) => {
                let timer = setTimeout(() => {
                  setSignin({ ...signIn, lastName: e.target.value });
                  clearTimeout(timer);
                }, 1000);
              }}
            />
          </div>
          <div className=" mt-2 ml-1 d-flex flex-column">
            <label htmlFor="input-email" className="ml-2 white-text-color">
              Email
            </label>
            <input
              className="input input-login black-light-bg white-text-color"
              id="input-email"
              placeholder="you@dreamstore.com"
              type="email"
              onChange={(e) => {
                let timer = setTimeout(() => {
                  setSignin({ ...signIn, email: e.target.value });
                  clearTimeout(timer);
                }, 1000);
              }}
            />
          </div>
          <div className=" mt-2 ml-1 d-flex flex-column">
            <label htmlFor="input-password" className="ml-2 white-text-color">
              Password
            </label>
            <input
              className="input input-login black-light-bg white-text-color"
              id="input-password"
              placeholder="*******"
              type="password"
              onChange={(e) => {
                let timer = setTimeout(() => {
                  setSignin({ ...signIn, password: e.target.value });
                  clearTimeout(timer);
                }, 1000);
              }}
            />
          </div>

          <div className="d-flex flex-justify-around align-items-center">
            <span className="d-flex align-items-center">
              <input
                id="checkbox-unchecked"
                className="form-check-input"
                type="checkbox"
              />
              <label
                htmlFor="checkbox-unchecked"
                className="fs-small white-text-color"
              >
                I accept all terms and conditions
              </label>
            </span>
          </div>
          <button
            type="submit"
            className="btn orange-bg login-button ml-3 font-weight-bold"
          >
            Create New Account
          </button>
          <div className="d-flex flex-justify-center align-items-center">
            <Link
              className="white-text-color d-flex flex-justify-center align-items-center"
              to="/login"
            >
              Already have an account
              <span className="material-icons pl-1 fs-small white-text-color">
                arrow_forward_ios
              </span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
