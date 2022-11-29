const express = require("express"); // import express library
const cors = require("cors"); //import cors module
const app = express(); //Initialize express

require("../Backend/configs/dotenv"); //Import your environmental configs

const user = require('../Backend/routes/users')

const client = require("../Backend/configs/db");


app.use(express.json());

const corsOption = {
    origin: ['http://localhost:4200'],
};
app.use(cors(corsOption));

const port = process.env.PORT || 5050;

client.connect((error) =>{ // Connect to the Database
   if (error) {
     } 
  else {
    console.log("Data logging initialised");
   }
});


app.use("/users", user); // User endpoint API

app.listen(port, process.env.baseURL , () =>{  
   console.log(`Here we go, All Engines started at ${port}.`) 
})
