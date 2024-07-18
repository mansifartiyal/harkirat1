const express = require("express");
const app = express();
app.use(express.json());


function middleWareTicket(req,res,next){
    const ticket = req.body.ticket;
    if(ticket === "true"){
        return next();
    }
    else{
        return res.status(404).send("invalid");
    }
}
function middleWareAge(req,res,next){
    const age = req.body.age;
    if(age >= 20){
        return next();
    }
    else{
        return res.status(403).send("invalid");
    }
}
app.use(middleWareTicket);


app.get('/ride1' ,function(req,res,){
    res.send("welcome");
});

app.get('/ride2',function(req,res,){
    res.send("welcome");
});

app.use(middleWareAge);


app.get('/ride3',function(req,res){
    res.send("welcome");
})

app.get('/ride4',function(req,res){
    res.send("welcome");
});

app.listen(3000 , ()=>{
    console.log("server is running on port 3000")
});