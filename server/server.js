const express = require("express");
const verificate = require("./emailverification");
const app = express();
const port= process.env.PORT || 5000;
app.get("/api", (req,res) => {
    res.json({name:["dror","mosh"]})
})
app.get("/login", (req, res) => {
    // verificate(req)
    console.log(req.method);
    res.send("hello11")
})
app.get("/login_info", (req, res) => {
res.send({name:"123",key:"987123", type:"parent"})
})

app.get("/check_user", (req, res) => {
    console.log(req.method);
    res.send("we are good!")
})

app.listen(port, () => {console.log(`server is listen on port ${port}`)})