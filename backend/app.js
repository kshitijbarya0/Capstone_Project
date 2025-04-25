require('dotenv').config();
const express = require('express');
const router = require('./routes/user_routes');
const userProgressRoutes = require('./routes/userProgress');
const errorHandler = require('./utils/errorHandler');
const cors = require("cors");
const mongoose = require('./service/db');
const app = express();
app.use(cors({
    origin: "https://learnpro-edu-rv.netlify.app", // Frontend URL
    credentials: true, // Allow cookies
  }));
app.use(express.json());
app.use("/api/user", router)
app.use('/api', userProgressRoutes);
app.use(errorHandler);

const port = process.env.PORT;

mongoose().then(()=>{
    app.listen(port || 8000,()=>{
        console.log(`connection successfull on port: ${process.env.PORT}`);
    });
}).catch((error)=>{
   console.log("DB connetion faild");
});
