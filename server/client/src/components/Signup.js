import React, { useState } from "react";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tagNum, setTagNum] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitHandle = (event) => {
    event.preventDefault();
    if (name.length < 4 || email.length < 4|| tagNum.length < 4|| pinCode.length < 4 || password !==confirmPassword) {
      return;
    }
    
  };
  return (
    <>
      <h1>Signup</h1>
      <form
        onSubmit={submitHandle}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <h2>הרשמה</h2>
        <label>
          <input
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          :הכנס את השם שלך{" "}
        </label>
        <label>
          <input
            name="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          : האימייל שלך{" "}
        </label>
        <label>
          <input
            type="text"
            value={tagNum}
            onChange={(e) => setTagNum(e.target.value)}
          />
          :הכנס את מספר הכרטיס שלך{" "}
        </label>
        <label>
          <input
            type="text"
            value={pinCode}
            onChange={(e) => setPinCode(e.target.value)}
          />
          :הקוד הראשוני{" "}
        </label>
        <label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          :הכנס סיסמה{" "}
        </label>
        <label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          :הכנס את הסיסמה שוב{" "}
        </label>
        <input type="submit" />
      </form>
    </>
  );
}

export default Signup;
