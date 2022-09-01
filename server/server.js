const express = require("express");
const verificate = require("./emailverification");
const app = express();
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const User = require("./User");
const port = process.env.PORT || 5000;
const jwt = require("jsonwebtoken");
require("dotenv").config();
app.use(express.json());

mongoose.connect(
  "mongodb://localhost/maindb",
  () => {
    console.log("connected");
  },
  (e) => console.error(e)
);

async function addUser(userData, res) {
  try {
    const hashedPassword = await bcrypt.hash(userData.pass, 10);

    const user = await User.create({
      name: userData.username,
      email: userData.email,
      role: userData.role,
      password: hashedPassword,
    });
    await user.save();
    console.log(user);
    res.end("ok");
  } catch (e) {
    console.log(e.message);
  }
}

app.post("/signup", (req, res) => {
  console.log(req.body);
  addUser(req.body, res);
});

app.get("/api", (req, res) => {
  res.json({ name: ["dror", "mosh"] });
});

const isUserExist = async (req, res, next) => {
  // console.log(req.body);
  const finduser = await User.find({ email: req.body.email });
  if(finduser.length <1) {
    return res.status(400).send('Cannot find user')
  }
  req.body.userpass = finduser[0].password
  req.body.userData = {
    name:finduser[0].name,
    email:finduser[0].email,
    role:finduser[0].role
}
  next()

}
app.post("/login",isUserExist, async (req, res) => {
//  console.log(req.body.pass , req.body.userpass)
  try {
    if( await bcrypt.compare(req.body.pass , req.body.userpass)) {
      // res.send('success')
      // console.log(req.body.userData);
      const accessToken = generateAccessToken(req.body.userData);
        res.json({ accessToken: accessToken, body: req.body.userData  });
    } else{
      // res.send('not allowed')
      res.status(400).send('not allowed')

    }
  } catch (e) {
    res.status(500).send(e.message);
  }
  // console.log(finduser);
  // res.send("hello11");
});
const users = [
  { name: "aaaaa", pass: "11111", type: "admin" },
  { name: "zzzzz", pass: "11111", type: "admin" },
  { name: "xxxxx", pass: "11111", type: "parent" },
];
// app.post("/login", (req, res) => {
//   const currentUser = users.find(
//     (auser) => auser.name === req.body.username && auser.pass === req.body.pass
//   );
//   if (currentUser === undefined) {
//     return res.sendStatus(403);
//   }
// //   const username = req.body.username;
// //   const user = { user: username };

//   const accessToken = generateAccessToken(currentUser);
//   res.json({ accessToken: accessToken, body: currentUser  });
// });

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN, { expiresIn: "15s" });
}
app.get("/login_info", (req, res) => {
  res.send({ name: "123", key: "987123", type: "parent" });
});
const posts = [
  { name: "dror", key: "34234", type: "parent" },
  { name: "david", key: "987123", type: "parent" },
  { name: "mosh", key: "722311", type: "parent" },
];
app.get("/posts", authenticateToken, (req, res) => {
  console.log(req.user.user);
  res.json(posts.filter((post) => post.name === req.user.user));
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}
app.get("/check_user", (req, res) => {
  console.log(req.method);
  res.send("we are good!");
});

app.listen(port, () => {
  console.log(`server is listen on port ${port}`);
});
