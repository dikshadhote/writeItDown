import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logInHandler } from "../../ApiServices/ApiServices";
export default function Login() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const guestCredential = {
    email: "adarshbalika@gmail.com",
    password: "adarshBalika123",
  };
  const loggedIn = async (login) => {
    // login only available for current users in db
    const { data, status } = await logInHandler(login);
  };

  return (
    <div>
      <div className="d-flex flex-justify-center align-items-center mb-2">
        <div className="card nav-yellow-shadow  login-container flex-column">
          <div className="d-flex flex-justify-center">
            <h3 className="white-text-color">Login</h3>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              loggedIn(login);
            }}
          >
            <div className=" mt-2 ml-1 d-flex flex-column">
              <label htmlFor="input-email" className="ml-2  white-text-color">
                Email
              </label>
              <input
                className="input input-login black-light-bg white-text-color "
                id="input-email"
                placeholder="you@dreamstore.com"
                type="email"
                onChange={(e) => {
                  let timer = setTimeout(() => {
                    setLogin({ ...login, email: e.target.value });
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
                    setLogin({ ...login, password: e.target.value });
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
                  Remember me?
                </label>
              </span>
              <a href="#" className="black-text-color fs-small mr-2">
                Forgot your password?
              </a>
            </div>
            <button
              type="submit"
              className="btn orange-bg login-button ml-3 font-weight-bold"
            >
              Login
            </button>

            <button
              type="submit"
              className="btn orange-bg login-button ml-3 font-weight-bold"
              onClick={(e) => {
                e.preventDefault();
                loggedIn(guestCredential);
              }}
            >
              Login as Guest
            </button>
          </form>
          <div className="d-flex flex-justify-center align-items-center">
            <Link
              className="white-text-color d-flex flex-justify-center align-items-center"
              to="/signup"
            >
              create new account
              <span className="material-icons pl-1 fs-small white-text-color">
                arrow_forward_ios
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
