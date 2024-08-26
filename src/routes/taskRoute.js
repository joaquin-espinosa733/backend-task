import {
  allTaskHandler,
  createTaskHandler,
  deleteTaskHandler,
  editTaskHandler
} from "../handlers/taskHandler.js";
import { Router } from "express";

const routerTask = Router();

routerTask.get("/", allTaskHandler);
routerTask.post("/create", createTaskHandler);
routerTask.delete("/delete/:id", deleteTaskHandler);
routerTask.patch("/edit/:id", editTaskHandler)

export default routerTask;
