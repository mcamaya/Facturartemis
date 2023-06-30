import { Router } from "express";
import { methodsHTTP as clientesController } from "../controllers/clientes.controllers.js";

const router = Router();

router.get("/", clientesController.getClientes);
router.get("/:id", clientesController.getUnicoCliente);
router.post("/", clientesController.postCliente);
router.put("/:id", clientesController.updateClientes);
router.delete("/:id", clientesController.deleteCliente);

export default router;