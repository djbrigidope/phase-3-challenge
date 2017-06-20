const express = require('express');
const app = express();
const port = 8000;

app.get('/zero',(req,res) =>{
  res.setHeader('Content-Type', 'text/plain');
  res.setStatus = 200;
  res.send('zero');
})

app.get('/add',(req,res) =>{
  res.setHeader('Content-Type', 'text/plain');
  res.setStatus = 200;
  res.send('zero');
})

app.get('/subtract',(req,res) =>{
  res.setHeader('Content-Type', 'text/plain');
  res.setStatus = 200;
  res.send('zero');
})

app.get('/double/:number',(req,res) =>{
  res.setHeader('Content-Type', 'text/plain');
  res.setStatus = 200;
  res.send('zero');
})


//call back consoles an error message jik server crashes before the console.log
app.listen(port, (err,res)=>{
  if(err){
    console.log("err on tha srrver bruh");
  }else{
    console.log("gthang hot on port 8thow wow");
  }
});
// app.listen(console.log("highthere"));
