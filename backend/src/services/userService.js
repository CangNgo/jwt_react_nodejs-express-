const { prisma } = require("../config/database");

const getAllUsers = async () => {
  try {
    const users = await prisma.user.findMany();
    return users; // Sửa từ res.send(users.json)
  } catch (error) {
    console.log(error);
    throw error;
  }
};

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

module.exports = {
  createUser,
  getAllUsers,
};
