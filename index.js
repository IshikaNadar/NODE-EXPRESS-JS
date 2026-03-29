const express = require("express");
const app = express();
console.dir(app);
let port = 3000;
app.listen(port,  () => {
    console.log(`app is listening on port ${port}`);
});
app.get("/",(req,res) => {
    res.send("HELLO I am root path");
});
app.get("/:username/:id", (req,res) => {
 let {username, id}=req.params;
 let htmlStr = `<h1>WELCOME to the page of @${username}.</h1>`
 res.send(htmlStr);
});
app.get("/search", (req,res) => {
    let {q}= req.query;
    if(!q){
        res.send("<h1>NOTHING SEARCHED</h1>");
    }
    res.send(`Search results for query: ${q}`);
});
app.get("/help",(req,res)=> {
 res.send("You contacted HELP path");
});
app.post("/",(req,res)=>{
res.send("you sent a post request to root");
});
app.use((req, res) => {
  res.status(404).send('This PATH does not exist');
});
 /*    app.get("/search",(req,res) =>{
 console.log(req.query);
 res.send("NO RESULTS");
});
app.get("/search",(req,res)=>{
  res.send("You contacted SEARCH path");
});
app.use((req,res) => {
 console.log(req);
   console.log("request recieved");
 let code="<h1>HII EXPRESS USERS!</h1> <ul><li>Ishika</li> <li>Nadar</li></ul>";
   res.send(code);});
   */