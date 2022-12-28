import "./signIn.scss";
import React from "react";

import { useContext, useState } from "react";
import { AuthContext } from "../../authContext/AuthContext";
import { login } from "../../authContext/ApiCalls";

const SignIn = () => {
  const [unique_name, setUniqueName] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login({ unique_name, password }, dispatch);
  };

  return (
    <div className="sign-in">
      <div className="wrapper">
        <div className="sign-in-box">
          <div className="top">
            <img
              src="/images/signIn/signInBackground.png"
              alt=""
              className="sign-in-background-image"
            />
          </div>
          <div className="bottom">
            <div className="title">SETANTA SPORTS</div>

            <div className="user">
              <div className="input-label">User Email</div>
              <input
                type="text"
                className="text-input"
                placeholder="adartsmelia@setantasports.com"
                onChange={(e) => setUniqueName(e.target.value)}
              />
            </div>

            <div className="password">
              <div className="input-label">User Password</div>
              <input
                type="password"
                className="text-input"
                placeholder="Your Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              className="finish"
              onClick={handleLogin}
              disabled={isFetching}
            >
              Sign In
            </button>

            <div className="slogan">
              <img src="/images/signIn/line.png" alt="" className="left-line" />
              <div className="slogan-text">
                If I had asked the public what they wanted, they would have said
                a faster horse
              </div>
              <img
                src="/images/signIn/line.png"
                alt=""
                className="right-line"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
