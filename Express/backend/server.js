require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.log('❌ MongoDB Connection Error:', err));



  // Routes Setup
const User = require('./models/User');

// ✅ सभी Users को लाने के लिए (GET)
app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: '❌ Server Error' });
    }
});




// ✅ नया User जोड़ने के लिए (POST)
app.post('/users', async (req, res) => {
    try {
        const { name, age } = req.body;
        if (!name || !age) {
            return res.status(400).json({ message: '❌ Name और Age आवश्यक हैं' });
        }
        const newUser = new User({ name, age });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: '❌ Server Error' });
    }
});


// ✅ User को Update करने के लिए (PUT)
app.put('/users/:id', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: '❌ User नहीं मिला' });
        }
        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: '❌ Server Error' });
    }
});


// ✅ User को Delete करने के लिए (DELETE)
app.delete('/users/:id', async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ message: '❌ User नहीं मिला' });
        }
        res.json({ message: '✅ User Deleted' });
    } catch (error) {
        res.status(500).json({ message: '❌ Server Error' });
    }
});



// Server Start
app.listen(PORT, () => {
    console.log(`🚀 Server चल रहा है: http://localhost:${PORT}`);
});