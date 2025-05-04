// const express = require('express');
// const app = express();
// const PORT = process.env.PORT || 3000;
// const path = require('path');


// // Middleware is a function that runs between the time the server gets the request
// // and the time the server send the request out to the client

// // Types of middleware  functions
// // 1. Application level middleware  
// // 2. Router level middleware
// // 3. Error handling middleware
// // 4. Built-in middleware
// // 5. Third-party middleware

// // Logger middleware function example below this comes under application level middleware
// const logger = (req,res,next)=>{
//     console.log(`${new Date()} Request type:${req.method}, Request Url:${req.url}`);
//     next();
// }
// // Third party middlewaree
// const morgan = require("morgan")
// // app.use(morgan("dev"));
// app.use(morgan('combined'))
// // To make use of this Logger middleware call it using app.use()
// app.use(logger)
// app.get('/',(req,res)=>{
//     res.send("Iam from home route")
// })

// // Router Level middleware
// const router = express.Router()
// app.use('/api/users',router);
// app.use(express.json())
// const getUsers = (req,res)=>{
//     res.json({
//         Message:"This is from Get method"
//     })
// }
// const createUsers = (req,res)=>{
//     res.json({
//         Message:"This is from Post method"
//     })
// }
// router.route("/")
// .get(getUsers)
// .post(createUsers);

// app.listen(PORT, () => {
//     console.log(`Server is running on port localhost:${PORT}`);
// })



const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// ------------------------------
// 📌 Middleware Overview
// ------------------------------
// Middleware functions are executed during the request-response cycle.
// Types:
// 1. Application-level middleware
// 2. Router-level middleware
// 3. Error-handling middleware
// 4. Built-in middleware (like express.json())
// 5. Third-party middleware (like morgan)

// ------------------------------
// ✅ Built-in & Third-party Middleware
// ------------------------------
app.use(express.json()); // Built-in middleware to parse incoming JSON
app.use(morgan('combined')); // Third-party logger middleware

// ------------------------------
// ✅ Application-level Middleware
// ------------------------------
const logger = (req, res, next) => {
    console.log(`${new Date()} | Method: ${req.method} | URL: ${req.url}`);
    next(); // Pass control to the next middleware
};

app.use(logger); // Apply logger to all routes

// ------------------------------
// ✅ Home Route (Root Level)
// ------------------------------
app.get('/', (req, res) => {
    res.send("I am from the home route.");
});

// ------------------------------
// ✅ Router-level Middleware (User Routes)
// ------------------------------
const userRouter = express.Router();

// Handlers
const getUsers = (req, res) => {
    res.json({ message: "This is from GET /api/users" });
};

const createUsers = (req, res) => {
    res.json({ message: "This is from POST /api/users" });
};

// Define route and handlers
userRouter.route('/')
    .get(getUsers)
    .post(createUsers);

// Mount router on path
app.use('/api/users', userRouter);

// ------------------------------
// ✅ Start the Server
// ------------------------------
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
