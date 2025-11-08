import express from "express";

import { UseControll } from "../controller/UseControll.js"

const routes = express.Router()

routes.post("/data", UseControll)

export default routes;