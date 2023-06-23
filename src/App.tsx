import { Route, Routes } from "react-router-dom";

import "./scss/main.scss";

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import ProductExplore from "./components/ProductExplore";
import Search from "./components/Search";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="home" element={<Home />} />
        <Route path="product" element={<ProductExplore />} />
        <Route path="search" element={<Search />} />
      </Routes>
    </>
  );
}

export default App;
