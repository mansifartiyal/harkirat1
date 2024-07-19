const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

function generateJwt() {
    const token = jwt.sign({
        username: "ankit",
        password: "pass1234"
    }, jwtPassword);

    console.log(token);
}

function verify() {
    try {
        const response = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFua2l0IiwicGFzc3dvcmQiOiJwYXNzMTIzNCIsImlhdCI6MTcyMTI4ODc2Nn0.Fzibf2tURmgu6epqGOlzzOes7TVPEacSC2bpCGHZpXE", jwtPassword);
        console.log(response);
    } catch (err) {
        console.log(err);
    }
}

verify();
generateJwt();
