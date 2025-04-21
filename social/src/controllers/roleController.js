const { createRole, getRoles, getRoleIdOrName } = require("../services/roleService")

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

const getRoleIdOrNameController = async (req, res )=> {
    const {id, name} = req.query
    
    const result = await getRoleIdOrName(id, name)
    return res.status(200).json({
      message: "Lấy quyền thông tin quyền truy cập theo id hoặc name",
      data: result,
    });
  }

module.exports = {
    createRoleController, 
    getRolesController,
    getRoleIdOrNameController
}