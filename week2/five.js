const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://mansifartiyal8:12345%40piyu@cluster0.toxcosv.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

const user = new User({
    name: 'kitty',
    email: 'kitty@example.com',
    password: '123'
});

user.save().then(() => {
    console.log('User saved successfully');
}).catch((err) => {
    console.error('Error saving user:', err);
});
