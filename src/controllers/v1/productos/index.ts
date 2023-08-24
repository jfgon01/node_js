import { PrismaClient, Prisma } from "@prisma/client";
import {Request,Response} from "express";

const prisma =new PrismaClient()

const getProductos = async (req:Request, res:Response)=>{

    try {
        const result =await prisma.productos.findMany({include:{categoria:true}});
        res.status(200).json(result);
        
    } catch (error) {
        console.log("Se Presento un error", error)
        res.status(500).json(error);
        
    }
}

const getProducto = async (req:Request, res:Response)=>{
    const {id} =req.params;
    

    try {
        const result =await prisma.productos.findUnique({
        where:{ id: parseInt(id)},
        include:{categoria:true}
    });
    res.status(200).json(result)
    
    } catch (error) {
        console.log("Se Presento un error", error)
        res.status(500).json(error);
        
    }
}
const postProducto = async (req:Request, res:Response)=>{


    try {
        const result =await prisma.productos.create({data: req.body})
        res.status(200).json(result)
        
    } catch (error) {
        console.log("Se Presento un error", error)
        res.status(500).json(error);
        
    }
}
const putProducto = async (req:Request, res:Response)=>{
    const {id} = req.params;
    const {body} =req;

    try {
        const result =await prisma.productos.update({where: {id:parseInt(id)}, data:body})
        res.status(200).json(result)
        
    } catch (error) {
        console.log("Se Presento un error", error)
        res.status(500).json(error);
        
    }
}
const deleteProducto = async (req:Request, res:Response)=>{
    const {id} = req.params;
    const {body} =req;

    try {
        const result =await prisma.productos.delete({
            where:{id:parseInt(id) }
        });
        
    } catch (error) {
        console.log("Se Presento un error", error)
        res.status(500).json(error);
        
    }
}
export{
    getProducto,
    getProductos,
    postProducto,
    putProducto,
    deleteProducto
}


