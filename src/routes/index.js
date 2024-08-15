import routerTask from "./taskRoute.js";
import { Router } from "express";

const router = Router();

router.use("/task", routerTask);

export default router;
