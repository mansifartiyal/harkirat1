const express = require('express');
const jwt = require('jsonwebtoken');
const jwtPassword = "123456";

const app = express();
app.use(express.json());

const ALL_USERS = [
    {
        username: "harkirat@gmail.com",
        password: "123",
        name: "harkert sir",
    },
    {
        username: "striver@gmail.com",
        password: "112211",
        name: "striver bhaiya",
    },
    {
        username: "ankitadhikari@gmail.com",
        password: "123321",
        name: "ankit",
    },
];

function userExists(username, password) {
    let userExist = false; // Use 'let' to allow reassignment
    for (let i = 0; i < ALL_USERS.length; i++) {
        if (ALL_USERS[i].username === username && ALL_USERS[i].password === password) {
            userExist = true;
        }
    }
    return userExist; // Correct return variable
}

app.post("/sign", function(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    if (!userExists(username, password)) {
        return res.status(401).json({ // Correct 'json' method
            msg: "user does not exist in memory db",
        });
    }

    const token = jwt.sign({ username: username }, jwtPassword);
    return res.json({ // Correct 'json' method
        token,
    });
});

app.get("/signin", function(req, res) {
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        return res.json({ // Return a response when the token is valid
            msg: `Welcome ${username}`,
        });
    } catch (err) {
        return res.status(403).json({
            msg: "invalid token",
        });
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
