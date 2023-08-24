import  express from "express";
//Se importan los controladores creados en categorias
import{
    getProducto,
    getProductos,
    postProducto,
    putProducto,
    deleteProducto
} from '../../../controllers/v1/productos';

import {updateDateMiddleware} from '../../../middleware/updateDate'

const router = express.Router();

/* Se crean los endpoint con todos los verbos para utilizar las categorias */

router.get("/", [updateDateMiddleware,getProductos]);
router.get("/:id", [updateDateMiddleware,getProducto]);
router.post("/", [updateDateMiddleware,postProducto]);
router.put("/:id",[updateDateMiddleware,putProducto]);
router.delete("/:id", [updateDateMiddleware,deleteProducto]);

export default router;
