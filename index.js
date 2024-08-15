import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import routes from "./src/routes/index.js";

import connectDB from "./src/db/db.js";

const app = express();

app.use(bodyParser.json());
app.use(morgan("dev"));

connectDB();

app.use("/api", routes);

app.get("/", (req, res) => {
  res.status(200).send("hola mundo");
});

app.listen(3000, () => {
  console.log("server iniciado en el puesto http://localhost:3000");
});
