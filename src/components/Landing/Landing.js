import React from "react";
import { Link } from "react-router-dom";
import notesHero from "../../assets/note_hero.svg";
export default function Landing() {
  return (
    <div className="col-2-stretch">
      <div className="hero-container">
        <div className="mt-5">
          <h4 className="mt-5 ml-5 mb-4 white-text-note">
            Things that you write,are the things which gets done!
          </h4>
          <p className="gray-text-note fs-2 p-1 ml-4 mb-1">
            Star your writing journey with
            <span className="aqua-color fs-2 "> Write it down!</span>
          </p>
          <p className="gray-text-note fs-2 hero-desc ml-5">
            Manage your day like a pro.You can label your notes and organized
            them into categories.Increase your efficiency without spending any
            efforts.
          </p>
        </div>
        <Link
          className="btn orange-bg font-weight-bold btn-join black-text-color ml-5"
          to="/login"
        >
          JOIN NOW
        </Link>
        <div>
          <Link className="white-text-note ml-5 sign-up" to="/signup">
            Already have an account?
          </Link>
        </div>
      </div>
      <div>
        <img
          src={notesHero}
          className="hero-img mt-5 mr-5"
          alt="Note Hero Image"
        />
      </div>
    </div>
  );
}
