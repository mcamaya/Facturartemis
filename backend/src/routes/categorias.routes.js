import { Router } from "express";
import { methodsHTTP as categoriaController } from "../controllers/categoria.controllers.js";

const router = Router();

router.get("/", categoriaController.getCategorias);
router.get("/:id", categoriaController.getUnicaCategoria); //la ruta recibe un parámetro
router.post("/", categoriaController.postCategorias);

export default router;