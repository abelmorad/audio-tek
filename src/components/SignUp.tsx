import logo from "../../public/logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { auth } from ".././config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  return (
    <main className="sign-in-container">
      <header className="sign-in-header-wrapper">
        <div className="sign-in-logo-wrapper">
          <img
            style={{ height: "40px", width: "40px" }}
            src={logo}
            alt="audio tek logo"
          />
          <h1>Audio Tek</h1>
        </div>
        <p>It's modular and designed to last</p>
      </header>
      <form className="sign-in-form-wrapper">
        <h2>Sign Up</h2>
        <input
          className="email-input"
          type="email"
          name="email"
          id="emailInput"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="password-input"
          type="password"
          name="password"
          id="passwordInput"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="sign-in-btn button-primary"
          type="submit"
          onClick={signup}
        >
          Sign Up
        </button>
        <span>OR</span>
        <div className="auth-wrapper">
          <div className="apple-auth">
            <a href="#"></a>
          </div>
          <div className="fb-auth">
            <a href="#"></a>
          </div>
          <div className="google-auth">
            <a href="#"></a>
          </div>
        </div>
        <p>
          Already have an account? <Link to="/">Sign In Here</Link>
        </p>
      </form>
    </main>
  );
}

export default SignUp;
