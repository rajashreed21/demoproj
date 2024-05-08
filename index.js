const bodyParser =require('body-parser');
const express = require('express')
const app = express();
app.use(bodyParser.json())
app.get("/",(req,res)=>{
    res.end("Hello World")
})
const userdetails=[];

// GET Request (ENDPOINTS)
app.get("/name/:myname", (req, res) => {
    res.end("Hello"+req.params.myname)
})

app.post("/login",(req,res)=>{
    const body=req.body;
    const username=body.username;
    const password=body.password;
     if(username==="Rajashree" && password===123)
     res.end("Logged in successfully")
    else
    res.end("Incorrect creds")
})

app.post("/register",(req,res)=>{
    const body=req.body;
    const username=body.username;
    const password=body.password;
    const address=body.address;
    userdetails[0]=username;
    userdetails[1]=password;
    userdetails[2]=address;
    res.end("Registered successfully")

})

app.get("/get-user/:name",(req,res)=>{
    const name=req.params.name;
    if(name===userdetails[0]){
        res.json({
            "password":userdetails[1],
            "Address":userdetails[2]
        })
    }
    else{
        res.end("Username not found")
    }
})
// http://localhost:8080/
app.listen(8080, () => console.log("Application started"))