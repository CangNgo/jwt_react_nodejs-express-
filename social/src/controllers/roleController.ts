import { NextFunction, Request, Response } from "express"
import { createRole, getRoleIdOrName, getRoles } from "../services/roleService"
import { BadRequestException } from "../exceptions/bad_request"
import { ErrorCode } from "../exceptions/root"


export const createRoleController = async (req: Request, res: Response) => {
    const { name, description } = req.body
    const role = await createRole(name, description)
    res.status(200).json({
        mesage: "Tạo mới quyền truy cập thành công",
        data: role
    })
}

export const getRolesController = async (req: Request, res: Response) => {
    try {
        const roles = await getRoles()
        res.status(200).json({
            mesage: "Lấy danh sách quyền truy cập thành công",
            data: roles
        })
    } catch (error) {
        console.log("Lỗi khi lấy toàn bộ danh sách quyền truy cập");
        throw error
    }
}

export const getRoleIdOrNameController = async (req: Request, res: Response) => {
    let { id, name } = req.query
    if (id=== undefined) {
        throw new BadRequestException("Id không tồn taj", ErrorCode.MISSING_PARAM)
    }
    const parseId:number = parseInt(id)
    const result = await getRoleIdOrName(parseId, name)
    return res.status(200).json({
        message: "Lấy quyền thông tin quyền truy cập theo id hoặc name",
        data: result,
    });
}
