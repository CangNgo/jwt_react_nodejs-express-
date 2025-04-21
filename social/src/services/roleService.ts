import { EOF } from "dns";
import prisma from "../config/database"
import { BadRequestException } from "../exceptions/bad_request";
import { ErrorCode } from "../exceptions/root";
export const createRole = async (name: string, description: string) => {
  try {
    const role = await prisma.role.create({
      data: { name, description },
    });
    return role;
  } catch (error) {
    console.log("Lỗi khi tạo mới quyền truy cập");
    throw error;
  }
};

export const getRoles = async () => {
  try {
    const roles = await prisma.role.findMany({
      orderBy: {
        name: "desc",
      },
    });
    return roles;
  } catch (error) {
    console.log("Lỗi khi lấy toàn bộ danh sách quyền truy cập");
    throw error;
  }
};

export const getRoleIdOrName = async (id: number, name: string) => {
  try {
    // Chuyển đổi id thành số nguyên, kiểm tra tính hợp lệ
    if (!id) throw new BadRequestException("Không tìm thấy id người dùng", ErrorCode.USER_NOT_FOUND)
    const parsedId: number = parseInt(String(id), 10)

    const roles = await prisma.role.findMany({
      where: {
        OR: [{ id: id }, { name: name }],
      },
    });
    return roles;
  } catch (error) {
    console.log("Lỗi khi lấy quyền truy cập theo id hoặc name");
    throw error;
  }
};

