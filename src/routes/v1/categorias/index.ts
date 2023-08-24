import  express from "express";
//Se importan los controladores creados en categorias
import{
    
    getCategorias,
    getCategoria,
    postCategoria,
    putCategoria,
    deleteCategoria
} from '../../../controllers/v1/categorias';

import {updateDateMiddleware} from '../../../middleware/updateDate';

const router = express.Router();

/* Se crean los endpoint con todos los verbos para utilizar las categorias */

router.get("/", [updateDateMiddleware,getCategorias]);
router.get("/:id", [updateDateMiddleware,getCategoria]);
router.post("/", [updateDateMiddleware,postCategoria]);
router.put("/:id",[updateDateMiddleware,putCategoria]);
router.delete("/:id", [updateDateMiddleware,deleteCategoria]);

export default router;
