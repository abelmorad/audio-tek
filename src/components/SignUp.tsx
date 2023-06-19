import logo from "../../public/logo.svg";
import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useState, useEffect } from "react";

function SignUp() {
  const [registerEmail, setRegisterEmail] = useState<any>("");
  const [registerPassword, setRegisterPassword] = useState<any>("");

  const [user, setUser] = useState<any>({});

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  async function signUp() {
    try {
      const userEmailPassword = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(userEmailPassword);
    } catch (error) {
      console.log(error);
    }
  }

  async function logout() {
    await signOut(auth);
  }

  function formPreventDefault(e: any) {
    e.preventDefault();
  }

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
      <p>{user?.email}</p>
      <button onClick={logout} onSubmit={formPreventDefault}>
        Sign Out
      </button>
      <form className="sign-in-form-wrapper" onSubmit={formPreventDefault}>
        <h2>Sign Up</h2>
        <input
          className="email-input"
          type="email"
          name="email"
          id="emailInput"
          placeholder="Email"
          onChange={(e) => setRegisterEmail(e.target.value)}
        />
        <input
          className="password-input"
          type="password"
          name="password"
          id="passwordInput"
          placeholder="Password"
          onChange={(e) => setRegisterPassword(e.target.value)}
        />
        <button
          className="sign-in-btn button-primary"
          type="submit"
          onClick={signUp}
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
