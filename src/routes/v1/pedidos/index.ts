import  express from "express";
//Se importan los controladores creados en categorias
import{
    getPedido,
    getPedidos,
    postPedido,
    putPedido,
    deletePedido
} from '../../../controllers/v1/pedidos';

import {updateDateMiddleware} from '../../../middleware/updateDate'

const router = express.Router();

/* Se crean los endpoint con todos los verbos para utilizar las categorias */

router.get("/", [updateDateMiddleware,getPedidos]);
router.get("/:id", [updateDateMiddleware,getPedido]);
router.post("/", [updateDateMiddleware,postPedido]);
router.put("/:id",[updateDateMiddleware,putPedido]);
router.delete("/:id", [updateDateMiddleware,deletePedido]);

export default router;
