// step - 12
import express from "express";
import { pathCollect } from "../controller/pathCollect.js";

// step - 13
const routes = express.Router()

// step - 16
routes.post( "/data", pathCollect )

// step - 14
export default routes;


