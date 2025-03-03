const express = require("express");
const app = express();

app.use(express.json());

//Get request
app.get("/",(req,res)=>{
    res.send("Welcome to home page!");
})

//post request
app.post("/submit",(req,res)=>{
    res.send("form submitted");
})

//put request
app.put("/update",(req,res)=>{
    res.send("data updated");
});

//delete request
app.delete("/delete",(req,res)=>{
    res.send("data deleted");
})

const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});