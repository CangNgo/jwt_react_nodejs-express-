const { prisma } = require("../config/database");

//Lấy toàn bộ thông tin user
const getAllUsers = async () => {
  try {
    const users = await prisma.user.findMany();
    return users; // Sửa từ res.send(users.json)
  } catch (error) {
    console.log(error);
    throw error;
  }
};

//Lấy thông tin theo trường unique(duy nhất): các trường unique hoặc id
const getUserUnique = async (id) => {
  try {
    const user = prisma.user.findUnique({
      where: { //Điều kiện
        id: id
      }
    })
    return user
  } catch (error) {
    console.log("Lỗi khi lấy thông tin theo id");
    throw error
  }
}

//Tạo mới user
const createUser = async (username, email, password) => {
  try {
    const roleUser = await prisma.role.findUniqueOrThrow({
      where : {
        name : "USER"
      }, 
      select: {
        id: true
      }
    })
    const create = await prisma.user.create({
      data: {
        username,
        email,
        password,
        profileId : null, 
        role_id: roleUser.id
      }
    });

    return create;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const updateUser = async (id, user) => {
  try {
    const userById = prisma.user.findUnique({
      where: {
        id: id
      }
    })
    if (userById != null) {
      userById.email = user.email
      const re = prisma.updateUser(id, userById)
      return re
    } else {
      console.log("Không tim thấy thông tin người dùng id = ", id);
      throw error("Không tìm thấy thông tin người dùng")
    }

  } catch (error) {
    console.log("Lỗi khi cập nhật thông tin người dùng ");
    throw error

  }
}

const getRoleUser = async (id)=>{ 
  try {
    const roleUser = await prisma.user.findUniqueOrThrow({
      where: {
        id: parseInt(id)
      }, 
      select: {
        username: true, 
        role: {
          select: {
            name: true
          }
        }
      }
    })

    return roleUser
  } catch (error) {
    console.log("Lỗi khi lấy quyền truy cập của user");
    throw error  
    
  }
}



//export các method
module.exports = {
  createUser,
  getAllUsers,
  getUserUnique,
  getRoleUser,
};
