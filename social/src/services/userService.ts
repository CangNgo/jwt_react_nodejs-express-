import prisma from "../config/database";
import { user } from '@prisma/client';

//Lấy toàn bộ thông tin user
export const getAllUsers = async () => {
  try {
    const users = await prisma.user.findMany();
    return users; // Sửa từ res.send(users.json)
  } catch (error) {
    console.log(error);
    throw error;
  }
};

//Lấy thông tin theo trường unique(duy nhất): các trường unique hoặc id
export const getUserUnique = async (id:number) => {
  try {
    const user = await prisma.user.findUnique({
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
export const createUser = async (username:string, email:string, password:string) => {
  try {
    const roleUser = await prisma.role.findFirstOrThrow({
      where : {
        name : "User"
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

export const updateUser = async (id:number, user:user) => {
  try {
    const userById = await prisma.user.findUnique({
      where: {
        id: id
      }
    })
    if (userById != null) {
      userById.email = user.email
      const re = prisma.user.update({
        where: {id}, 
        data: {
          email: userById.email
        }
      })
      return re
    } else {
      console.log("Không tim thấy thông tin người dùng id = ", id);
    }

  } catch (error) {
    console.log("Lỗi khi cập nhật thông tin người dùng ");
    throw error

  }
}

export const getRoleUser = async (id:number)=>{ 
  try {
    const roleUser = await prisma.user.findUniqueOrThrow({
      where: {
        id: id
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

export const getAllUserRole = async (id:number) => {
  try {
    const result = await prisma.user.findUnique({
      where :{
        id : id
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

export const getUserUsernameAndEmail = async (username:string, email:string) => {
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

export const getUserAndRoleBSelect = async (id:number) => {
  try {
    const result = await prisma.user.findUnique({
      where :{
        id: id
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

