// step - 1
import express from "express";

// step - 2
import dotenv from "dotenv";

// step - 8
import cors from "cors";

// step -
import  pathRoute  from "./routes/pathRoutes.js"

// step - 3
dotenv.config();

// step - 4
const server = express();

// step - 9 
server.use(cors());

// step - 10
server.use(express.json())

// step - 11
server.use( "/api/class", pathRoute )

// step - 6
const PORT = process.env.PORT || 5000 

// step - 7
server.listen( PORT, () => {

    console.log(`http://localhost:${PORT}`)

} )



