const { createRole, getRoles } = require("../services/roleService")

const createRoleController = async (req, res ) => {
        const { name , description} = req.body
        const role = await createRole(name, description)
        res.status(200).json({
            mesage: "Tạo mới quyền truy cập thành công", 
            data: role
        })
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