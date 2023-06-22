import express from "express";

const app = express(); // servidor web

// Express es un framework donde se encuentran los módulos y dependencias para hacer servers y routers

app.set("port", 5000);

export default app;