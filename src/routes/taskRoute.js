import { allTaskHandler, createTaskHandler } from "../handlers/taskHandler.js";
import { Router } from "express";

const routerTask = Router();

routerTask.get("/", allTaskHandler);
routerTask.post("/create", createTaskHandler);

export default routerTask;
