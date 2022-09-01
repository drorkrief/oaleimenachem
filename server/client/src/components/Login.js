import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

function Login() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [type, setType] = useState("");
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  // const clickHandler = () => {
  //   console.log(name + pass);
  // };
  const submitHandle = (event) => {
    event.preventDefault();
    if (name.length < 4 || pass.length < 2) {
      return;
    }
    console.log("submit");
    // axios.get("login_info").then((res) => {
    //   console.log(res.data);
    //   setType(res.data.type);
    //   // res.data.type === "parent" && useNavigate("/parent");
    //   localStorage.setItem(
    //     "user",
    //     JSON.stringify({ key: "qweqweqw123wwqw", name: "dror", type: "parent" })
    //   );
    // });
    axios({
      method:"post",
      url:"/login",
      data:{
        email:name,
        pass:pass
      }
    }).then((res) => {
      setType(res.data.body.role);
      localStorage.setItem("user", JSON.stringify(res.data.accessToken))
      console.log(res.data.body);
    })
    // axios.post("/login").then((res) => {
    //   console.log(res);
    // })

    setName("");
    setPass("");
  };

  useEffect(() => {
    try {
      const userStorage = localStorage.getItem("user");
      userStorage && setUser(true);
    } catch (err) {
      console.log(err);
    }
  }, []);
  const click1 = () => {
    navigate("/");
  };
  return (
    <>
      {type === "parent" && <Navigate to="/" />}
      <form
        onSubmit={submitHandle}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>התחברות</h2>
        <label>
          Enter your email:{" "}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Enter your password:{" "}
          <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </label>
        <input type="submit" />
        {/* <button onClick={clickHandler}>send</button> */}
        {user && (
          <>
            <h1>אתה כבר מחובר למערכת</h1>
            <button onClick={click1}>חזור</button>
          </>
        )}
      </form>
    </>
  );
}

export default Login;
