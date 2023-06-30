import { Router } from "express";
import { methodsHTTP as empleadosController } from "../controllers/empleados.controllers.js";

const router = Router();

router.get("/", empleadosController.getEmpleados);
router.get("/:id", empleadosController.getUnicoEmpleado);
router.post("/", empleadosController.postEmpleado);
router.put("/:id", empleadosController.updateEmpleado);
router.delete("/:id", empleadosController.deleteEmpleado);

export default router;