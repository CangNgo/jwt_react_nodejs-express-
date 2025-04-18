const { prisma } = require("../config/database")

const createRole = async (name, description) => {
    try {
        const role = await prisma.role.create({
            data: { name, description }
        })
        return role
    } catch (error) {
        console.log("Lỗi khi tạo mới quyền truy cập");
        throw error
    }
}

const getRoles = async () => {
    try {
        console.log("service");

        const roles = await prisma.role.findMany()
        return roles
    } catch (error) {
        console.log("Lỗi khi lấy toàn bộ danh sách quyền truy cập");
        throw error
    }
}

module.exports = {
    createRole,
    getRoles
}