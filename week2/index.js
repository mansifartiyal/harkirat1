const express = require("express");
const zod = require("zod");

const app = express();
app.use(middleWare);

function middleWare(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;

    const schemausername = zod.string();
    const schemapassword = zod.string();

    const usernameResult = schemausername.safeParse(username);
    const passwordResult = schemapassword.safeParse(password);

    if (usernameResult.success && passwordResult.success) {
        if (username === 'mansi' && password === 'heloo') {
            return next();
        } else {
            return res.status(400).send('invalid');
        }
    } else {
        return res.status(401).send('invalid input');
    }
}

app.get('/mansi', function (req, res) {
    res.send('welcome');
});

app.use(function (err, req, res, next) {
    res.status(500).send('error');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
