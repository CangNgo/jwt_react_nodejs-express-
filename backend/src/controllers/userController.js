const { getRoles } = require("../services/roleService");
const { getAllUsers, createUser, getRoleUser } = require("../services/userService");

const getHomepage = async (req, res) => {
  return res.render("sample.ejs");
};

const fetchAllUser = async (req, res) => {
  try {
    const users = await getAllUsers();
    return res.status(200).json({
      message: "Lấy toàn bộ user thành công",
      data: users
    })
  } catch (error) {
    console.log(error);
    res.status(500).send("Error fetching users");
  }
};

const postUser = async (req, res) => {
  const body = req.body;
  console.log(body); // Body đã được parse thành object JavaScript
  const { username, email, password } = body;
  // Xử lý dữ liệu
  console.log("body request: ", username, email, password);

  const result = await createUser(username, email, password)
  console.log("Kết quả controller : ", result);
  
  // Trả về response
  return res.status(200).json({
    message: "Thêm mới user thành công",
    data: result,
  });

};

const getRoleUserController = async (req, res )=> {
  const {id} = req.query
  
  const result = await getRoleUser(id)
  return res.status(200).json({
    message: "Lấy quyền truy cập theo của người dùng thành công",
    data: result,
  });
}

module.exports = {
  getHomepage,
  fetchAllUser,
  postUser,
  getRoleUserController
};
