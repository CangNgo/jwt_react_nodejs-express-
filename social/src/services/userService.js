
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
    const user = await prisma.user.findUnique({
      where: { //Điều kiện
        id: parseInt(id)
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

const getAllUserRole = async (id) => {
  try {
    const result = await prisma.user.findUnique({
      where :{
        id : parseInt(id) 
      }, 
      include: {
        role: true
      }
    })
    return result
  } catch (error) {
    console.log("Lỗi khi lấy toàn bộ column user role")
    throw error
  }
}

const getUserUsernameAndEmail = async (username, email) => {
  try {
    const result = await prisma.user.findMany({
      where :{
        AND: [
          {username:username}, {email:email}
        ]
      }
    })
    return result
  } catch (error) {
    console.log("Lỗi khi lấy thông tin user theo username và password")
    throw error
  }
}

const getUserAndRoleBSelect = async (id) => {
  try {
    const result = await prisma.user.findUnique({
      where :{
        id: parseInt(id)
      }, 
      select: {
        username: true, 
        email: true, 
        role: {
          select: {
            name: true
          }
        }
      }
    })
    return result
  } catch (error) {
    console.log("Lỗi khi lấy thông tin user theo username và password")
    throw error
  }
}

//export các method
module.exports = {
  createUser,
  getAllUsers,
  getUserUnique,
  getRoleUser,
  getAllUserRole, 
  getUserUsernameAndEmail,
  getUserAndRoleBSelect
};
