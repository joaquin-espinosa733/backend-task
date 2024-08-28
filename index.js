import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import routes from "./src/routes/index.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

// Definir __dirname usando import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import connectDB from "./src/db/db.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(morgan("dev"));

connectDB();

app.use("/api", routes);

// Sirviendo el archivo HTML
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(3000, () => {
  console.log("server iniciado en el puerto http://localhost:3000;");
});
