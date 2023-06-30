import express from "express";
import categoriaRoutes from "./routes/categorias.routes.js";
import clientesRoutes from "./routes/clientes.routes.js";
import empleadosRoutes from "./routes/empleados.routes.js";

const app = express(); // servidor web
// Express es un framework donde se encuentran los módulos y dependencias para hacer servers y routers

app.set("port", 5000);

// Middleware -> Funciones intermedias
app.use(express.json());

// Routes
app.use("/api/categorias", categoriaRoutes);
app.use("/api/clientes", clientesRoutes);
app.use("/api/empleados", empleadosRoutes);

export default app;