import { NextFunction, Request, Response } from "express"
import { createRole, getRoleById, getRoleIdOrName, getRoles } from "../services/roleService"
import { BadRequestException } from "../exceptions/bad_request"
import { ErrorCode } from "../exceptions/root"


export const createRoleController = async (req: Request, res: Response, next: NextFunction) => {
    const { name, description } = req.body
    console.log("body: ", req.body);

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
    if (id === undefined) {
        throw new BadRequestException("Id không tồn taj", ErrorCode.MISSING_PARAM)
    }
    const parseId: number = Number(id)
    const parseName: string = String(name)
    const result = await getRoleIdOrName(parseId, parseName)
    res.status(200).json({
        message: "Lấy quyền thông tin quyền truy cập theo id hoặc name",
        data: result,
    });
}

export const getRoleByIdController = async (req: Request, res: Response) => {
    let { id } = req.params
    console.log("param: ", id);

    const result = await getRoleById(Number(id));
    res.status(200).json({
        message: "Lấy role theo id thành công",
        data: result
    })
}
