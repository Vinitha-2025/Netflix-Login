const express=require("express")
const cors=require("cors")

const app=express()

app.use(express.json())
app.use(cors())

let email=""
let pass=""

var emails="user@gmail.com"
var passs="1234"

app.post("/signup",function(req,res){

 email=req.body.emailid
  pass=req.body.passid
  console.log(email)
  console.log(pass)

  res.send(true)

})

app.post("/login",function(req,res){

    if((email === req.body.emailid || pass === req.body.passid)
         && (emails === req.body.emailid || passs === req.body.passid)){
console.log("Stored  :",email,pass)
console.log("Login  :", req.body.emailid, req.body.passid)
        res.send(true)
        console.log("Success")
    } else{
        res.send(false)
        console.log("Fail")
    }
})

app.listen(3000,function(){
    console.log("Server Started")
})