const { createRole } = require("../services/roleService")

const getRole = async (req, res ) => {
    try {
        const role = await createRole()
    } catch (error) {
        
    }
}

module.exports = {
    getRole, 
}