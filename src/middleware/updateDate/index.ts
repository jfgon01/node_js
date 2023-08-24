import { Request, Response, NextFunction } from "express";


export const updateDateMiddleware = (req:Request, res: Response, next: NextFunction)=>{
    console.log(req.method)
    if(req.method === 'POST'|| req.method === 'PUT'||req.method==='PATCH'){
        const currentDate =new Date();
        //@ts-ignore
        req.body.fech_act = currentDate;
        return next();
    }else{
        return next();
    }
}