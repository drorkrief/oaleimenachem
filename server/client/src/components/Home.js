import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";
function Home() {
  // const [authenticateUser, setAuthenticateUser] = useState();
  // const [data, setData] = useState();
  const navigate = useNavigate()
  const [first, setFirst] = useState(false)
  const click1 = () => {
    setFirst(true)
    navigate("/login")
  }

  useEffect(() => {
    // axios.get("/api").then((res) => {
    //   setData(res.data);
    //   // console.log(res.data.name);
    // });
    // localStorage.setItem("user", JSON.stringify({ key:"qweqweqw123wwqw",name:"dror", type:"parent"}))
    let userData = localStorage.getItem("user");
    userData ? axios.get("/check_user").then((res) => console.log(res.data)) : navigate("/login");
    // console.log(userData);
    // userData = JSON.parse(userData);
    // console.log(userData);

  }, []);
  return (
    <>
      <div>Home</div>
      <button onClick={click1}>login</button>
      {/* <p>{data && data.name[0]}</p> */}
     
    </>
  );
}

export default Home;
