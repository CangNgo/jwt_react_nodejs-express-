import { Request, Response } from "express";

export const login = async (req:Request, res:Response) => {
    res.status(200).json({
        message:"Đăng nhập thành công", 
        data: {
            token: "có cái gì đâu "
        }
    })
}