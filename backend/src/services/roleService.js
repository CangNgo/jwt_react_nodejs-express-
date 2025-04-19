const { prisma } = require("../config/database");

const createRole = async (name, description) => {
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

const getRoles = async () => {
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

const getRoleIdOrName = async (id, name) => {
  try {
    // Chuyển đổi id thành số nguyên, kiểm tra tính hợp lệ
    const parsedId = id ? parseInt(String(id), 10) : undefined;
    if (id && isNaN(parsedId)) {
      throw new Error("ID không hợp lệ, phải là một số");
    }

    // Tạo điều kiện where
    const whereClause = {
      OR: [],
    };

    if (parsedId) {
      whereClause.OR.push({ id: parsedId });
    }
    if (name) {
      whereClause.OR.push({ name });
    }
    const roles = await prisma.role.findMany({
      where: whereClause
    });
    return roles;
  } catch (error) {
    console.log("Lỗi khi lấy quyền truy cập theo id hoặc name");
    throw error;
  }
};

module.exports = {
  createRole,
  getRoles,
  getRoleIdOrName,
};
