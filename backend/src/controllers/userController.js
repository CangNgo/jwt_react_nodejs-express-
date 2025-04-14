const { getAllUsers, createUser } = require("../services/userService");

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
  try {
    const body = req.body;
    console.log(body); // Body đã được parse thành object JavaScript
    const { name, email } = body;
    // Xử lý dữ liệu
    // Ví dụ: const { name, email } = body;
    console.log("body request: ", name, email);
    
    const res = createUser(name, email)
    // Trả về response
    return res.status(200).json({
      message: "Thêm mới user thành công",
      data: res,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Lỗi Khi thêm mới user",
    });
  }
};

module.exports = {
  getHomepage,
  fetchAllUser,
  postUser,
};
