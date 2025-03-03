const express = require('express');
const app = express();
const PORT =5000;

app.get('/',(req,res)=>{
    res.send('hello');
});

app.get('/about',(req,res)=>{
    res.send('this is about page');
});



app.listen(PORT,()=>{
    console.log(`Server चल रहा है: http://localhost:${PORT}`);
})