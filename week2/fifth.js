const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://mansifartiyal8:12345%40piyu@cluster0.toxcosv.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

const User = mongoose.model('User', {
    name: String,
    email: String,
    password: String
});

app.get('/signup', async (req, res) => {

    const { name, email, password } = req.body;
    console.log('Received signup request:', req.body);
    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
        return res.status(409).send("User already exists");
    }

    const newUser = new User({
        name: name,
        email: email,
        password: password
    });

    await newUser.save();
    res.json({
        "msg": "User saved successfully"
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
