const { prisma } = require("../config/database")

const createRole = async (name) =>{
    try {
        const role = await prisma.role.create({
            name
        })
        return name 
    } catch (error) {
        console.log("Lỗi khi tạo mới role");
        throw error
    }
}

module.exports = {
    createRole, 
}