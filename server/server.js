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

app.listen(port, () => {console.log(`server is listen on port ${port}`)})