//step - 1
import express from "express";

// setp - 2
import dotenv from "dotenv";

// step- 8
import cors from "cors";

// step - 12
import UseRout from "./router/UseRout.js"

// step - 3
// dotenv.config() this is used to read inside the .env file datas;
dotenv.config(); 

// step - 4
// That is used to create your actual server.
const server = express();

// step - 9
server.use(cors());

// step - 10
server.use( express.json() )

// step - 11
server.use("/api/user", UseRout )

// step - 6
// process.env that is used to get the datas from the .env file
const PORT = process.env.PORT || 5000

// step - 7
server.listen( PORT, () => {

    console.log(`your server is running http://localhost:${PORT}`)

} )
