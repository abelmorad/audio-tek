import { Route, Routes } from "react-router-dom";

import "./scss/main.scss";

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
