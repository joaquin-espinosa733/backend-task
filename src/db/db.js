import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Cargar variables de entorno

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Conectado a MongoDB");
  } catch (error) {
    console.error("Error conectando a MongoDB:", error);
    process.exit(1); // Salir del proceso si falla la conexión
  }
};

export default connectDB;
