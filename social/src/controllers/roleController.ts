import { Request, Response, NextFunction } from "express";
import { createRole, getRoleIdOrName, getRoles } from "../services/roleService";
import { ErrorCode, HttpException } from "../exceptions/root";

export const createRoleController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, description } = req.body;
    const role = await createRole(name, description);
    res.status(201).json({
      message: "Tạo mới quyền truy cập thành công",
      data: role,
    });
  } catch (error) {
    next(error);
  }
};

export const getRolesController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const roles = await getRoles();
    res.status(200).json({
      message: "Lấy danh sách quyền truy cập thành công",
      data: roles,
    });
  } catch (error) {
    console.error("Lỗi khi lấy toàn bộ danh sách quyền truy cập:", error);
    next(error);
  }
};

export const getRoleIdOrNameController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id, name } = req.query;

    if (!id && !name) {
      throw new HttpException(
        "Cần cung cấp id hoặc name",
        ErrorCode.MISSING_PARAM,
        400,
        null
      );
    }

    const parsedId = parseInt(id as string, 10);
    // if (id && isNaN(parsedId)) {
    //   throw new HttpException(
    //     "ID không hợp lệ",
    //     ErrorCode.MISSING_PARAM,
    //     400,
    //     null
    //   );
    // }

    const result = await getRoleIdOrName(parsedId, name as string);
    if (!result) {
      throw new HttpException(
        "Không tìm thấy vai trò",
        ErrorCode.USER_NOT_FOUND, // Nên đổi thành ROLE_NOT_FOUND
        404,
        null
      );
    }

    res.status(200).json({
      message: "Lấy thông tin quyền truy cập theo id hoặc name thành công",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
