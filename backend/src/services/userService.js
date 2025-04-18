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
        id : id
      }
    })

    return user
  } catch (error) {
    console.log("Lỗi khi lấy thông tin theo id");
    throw error
  }
}

//Tạo mới user
const createUser = async (name, email) => {
  try {
    const create = await prisma.user.create({
      name,
      email,
    });
    return create;
  } catch (error) {
    console.log(error);
    throw error;
  }
};


//export các method
module.exports = {
  createUser,
  getAllUsers,
};
