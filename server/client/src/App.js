import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Errorpage from "./components/Errorpage";
import Home from "./components/Home";
import Login from "./components/Login";
import Parents from "./components/Parents";
function App() {
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
      </ul>
    </nav>
    <div style={{border:"solid 1px black", width:"50vw", margin:"auto"}}>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/parent" element={<Parents/>}/>
        <Route path="*" element={<Errorpage/>}/>

      </Routes>
    </div>
      
    </>
  );
}

export default App;
