const express=require("express");
const app=express();
app.get("/",(req,resp)=>{
    resp.sendFile("./public/Course.html",{root:__dirname});
})
app.get("/details",(req,resp)=>{
    resp.sendFile("public/Details.html",{root:__dirname});
})
app.listen(3000);
console.log("running on port : 3000");