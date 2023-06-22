import express from "express";
import categoriaRoutes from "./routes/categorias.routes.js";

const app = express(); // servidor web
// Express es un framework donde se encuentran los módulos y dependencias para hacer servers y routers

app.set("port", 5000);

// Routes
app.use("/api/categorias", categoriaRoutes);

export default app;