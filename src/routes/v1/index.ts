import  express from "express";
/* importamos todas las rutas de cada controlador*/
import categoriaRoutes from './categorias';
import clientesRoutes from './clientes';
import pedidosRoutes from './pedidos';
import productosRoutes from './productos';
import usuariosRoutes from './usuarios';




const router =express.Router();

 router.use("/categorias", categoriaRoutes);
 router.use("/clientes", clientesRoutes);
 router.use("/pedidos", pedidosRoutes);
 router.use("/productos", productosRoutes);
 router.use("/usuarios", usuariosRoutes);

          

export default router;