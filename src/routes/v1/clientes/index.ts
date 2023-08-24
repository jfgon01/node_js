import  express from "express";
//Se importan los controladores creados en categorias
import{
    getCliente,
    getClientes,
    postCliente,
    putCliente,
    deleteCliente
} from '../../../controllers/v1/clientes';

import {updateDateMiddleware} from '../../../middleware/updateDate'

const router = express.Router();

/* Se crean los endpoint con todos los verbos para utilizar las categorias */

router.get("/", [updateDateMiddleware,getClientes]);
router.get("/:id", [updateDateMiddleware,getCliente]);
router.post("/", [updateDateMiddleware,postCliente]);
router.put("/:id",[updateDateMiddleware,putCliente]);
router.delete("/:id", [updateDateMiddleware,deleteCliente]);

export default router;
