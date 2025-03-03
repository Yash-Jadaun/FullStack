const express = require('express');
const app = express();
app.use(express.json());


let users = [
    {id:1,name:'John Doe',email:'john@example.com'},
    {id:2,name:'Jane Doe',email:'jane@example.com'}
];

app.post('/user',(req,res)=>{
    const {name,email} = req.body;
    const newUser = {id:users.length+1,name,email};
    users.push(newUser);
    res.status(201).send(newUser);
})

app.get('/users',(req,res)=>{
    res.send(users);
});

app.get('/users/:id',(req,res)=>{
    const user = users.find(u=> u.id===parseInt(req.params.id));
    if(!user) return res.status(404).send('User not found');
    res.send(user);
})

app.put('/users/:id',(req,res)=>{
    const user = users.find(u=> u.id===parseInt(req,params.id));
    if(!user) return res.status(404).send('User not found');

    user.name = req.body.name;
    user.email = req.body.email;
    res.send(user);
})


app.delete('/users/:id',(req,res)=>{
  const userIndex = users.findIndex(u=> u.id === parseInt(req.params.id));
  if(userIndex===-1) return res.status(404).send('User not found');
  const deleteUser = users.splice(userIndex,1);
  res.send(deletedUser);
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});