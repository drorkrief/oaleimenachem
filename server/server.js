const express = require("express");
const app = express();
const port= process.env.PORT || 5000;
app.get("/api", (req,res) => {
    res.json({name:["dror","mosh"]})
})


app.listen(port, () => {console.log(`server is listen on port ${port}`)})