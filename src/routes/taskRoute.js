import {
  allTaskHandler,
  createTaskHandler,
  deleteTaskHandler,
  editTaskHandler,
  findTaskHandler,
} from "../handlers/taskHandler.js";
import { Router } from "express";

const routerTask = Router();

routerTask.get("/", allTaskHandler);
routerTask.get("/:id", findTaskHandler);
routerTask.post("/create", createTaskHandler);
routerTask.delete("/delete/:id", deleteTaskHandler);
routerTask.patch("/edit/:id", editTaskHandler);

export default routerTask;
