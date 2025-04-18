const { createRole, getRoles } = require("../services/roleService")

const createRoleController = async (req, res ) => {
    try {
        const role = await createRole()
        res.send(role.json())
    } catch (error) {
        console.log("Lỗi khi lấy quyền truy cập");
        throw error
    }
}

const getRolesController = async (req, res ) => {
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

module.exports = {
    createRoleController, 
    getRolesController,
}