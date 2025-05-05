const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const path = require('path')
// app.get('/',(req,res)=>{
//     // res.send("Hello bruh learning FST is intresting one!")
// })



// Middleware is a function that runs between the time the server gets the request
// and the time the server send the request out to the client

// Below code is for Routehandler
// Middleware functions
const one = (req, res, next) => {
    console.log("one");
    next();
  };
  
  const two = (req, res, next) => {
    console.log("two");
    next();
  };
  
  const three = (req, res, next) => {
    console.log("three");
    next();
  };
  
  const four = (req, res) => {
    console.log("four");
    res.send("🔥 Final response from route handler!");
  };    
  
  // Route using all 4 middleware
  app.get('/handler', one, two, three, four);



app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'./public')))


app.use('/subdir',require('./Routers/subdir'))
app.get(/\/$|\/index(.html)?/, (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.listen(PORT,()=>{
  console.log(`Server Running in port ${PORT}`)
})
