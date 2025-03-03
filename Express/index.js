const express = require('express')
const path = require('path')
const app = express()
const port = 3000

// const yash =(req,res,next)=>{
//     console.log(req)
//     next()
// }

app.use(express.static(path.join(__dirname,"public"))) 

// app.get('/about', (req, res) => {
// //   res.send('Hello World!')

// })

// app.use(yash)


app.get('/hello/:name', (req, res) => {
//    res.sendFile(path.join(__dirname,'index.html'))
//    res.status(400)
    // res.json({"Yash":21})
    res.send('hello world' + req.params.name)
    
    })


    
app.get('/about', (req, res) => {
    //    res.sendFile(path.join(__dirname,'index.html'))
    //    res.status(400)
      res.send('engineering')
        
        })

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})