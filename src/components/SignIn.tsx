import { Link } from "react-router-dom";
import logo from "../../public/logo.svg";
import { useState } from "react";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function SignIn() {
  const [signInEmail, setSignInEmail] = useState<any>("");
  const [signInpassword, setSignInPassword] = useState<any>("");

  async function signin() {
    try {
      const userEmailPassword = await signInWithEmailAndPassword(
        auth,
        signInEmail,
        signInpassword
      );
      console.log(userEmailPassword);
    } catch (error) {
      console.log(error);
    }
  }

  const handleSignIn = (e:any) => {
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
      <form className="sign-in-form-wrapper" onSubmit={handleSignIn}>
        <h2>Sign In</h2>
        <input
          className="email-input"
          type="email"
          name="email"
          id="emailInput"
          placeholder="Email"
          onChange={(e) => setSignInEmail(e.target.value)}
        />
        <input
          className="password-input"
          type="password"
          name="password"
          id="passwordInput"
          placeholder="Password"
          onChange={(e) => setSignInPassword(e.target.value)}
        />
        <a href="#">Forgot Password?</a>
        <button
          className="sign-in-btn button-primary"
          type="submit"
          onClick={signin}
        >
          Sign In
        </button>
        <p>
          Don't have an account? <Link to="signup">Sign Up Here</Link>
        </p>
      </form>
    </main>
  );
}

export default SignIn;
