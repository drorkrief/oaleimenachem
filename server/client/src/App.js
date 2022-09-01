import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Errorpage from "./components/Errorpage";
import Home from "./components/Home";
import Login from "./components/Login";
import Parents from "./components/Parents";
import { useNavigate } from "react-router-dom";
import Signup from "./components/Signup";

function App() {
  // const [userActive, setUserActive] = useState();
  const navigate = useNavigate();

  // useEffect(() => {
  //   try {
  //     localStorage.getItem("user");
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, []);

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
          <li>
            <span onClick={logout}>log out</span>
          </li>
        </ul>
      </nav>
      <div style={{ border: "solid 1px black", width: "50vw", margin: "auto" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/parent" element={<Parents />} />
          <Route path="*" element={<Errorpage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
