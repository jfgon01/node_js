import  express from "express";
//Se importan los controladores creados en categorias
import{
    getUsuario,
    getUsuarios,
    postUsuario,
    putUsuario,
    deleteUsuario
} from '../../../controllers/v1/usuarios';

import {updateDateMiddleware} from '../../../middleware/updateDate'

const router = express.Router();

/* Se crean los endpoint con todos los verbos para utilizar las categorias */

router.get("/", [updateDateMiddleware,getUsuarios]);
router.get("/:id", [updateDateMiddleware,getUsuario]);
router.post("/", [updateDateMiddleware,postUsuario]);
router.put("/:id",[updateDateMiddleware,putUsuario]);
router.delete("/:id", [updateDateMiddleware,deleteUsuario]);

export default router;
