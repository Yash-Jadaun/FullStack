const express = require("express");
const app = express();

//custom middleware
const logger = (req,res,next)=>{
    console.log(`${req.method} ${req.url}`);
    next();
};

app.use(logger); //middleware apply kr diya

app.get("/", (req, res) => {
    res.send("Hello, Middleware!");
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});