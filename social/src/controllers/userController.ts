import { Request, Response } from "express";

import { createUser, getAllUserRole, getAllUsers, getUserAndRoleBSelect, getUserUnique, getUserUsernameAndEmail } from "../services/userService";


export const getHomepage = async (req:Request, res:Response) => {
   res.render("sample.ejs");
};

export const fetchAllUser = async (req:Request, res:Response) => {
  try {
    const users = await getAllUsers();
     res.status(200).json({
      message: "Lấy toàn bộ user thành công",
      data: users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error fetching users");
  }
};

export const getUserById = async (req:Request, res:Response) => {
  try {
    const { id } = req.params;

    const users = await getUserUnique(Number(id));
     res.status(200).json({
      message: "Lấy toàn bộ thông tin user thành công",
      data: users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error fetching users");
  }
};

export const postUser = async (req:Request, res:Response) => {
  const body = req.body;
  console.log(body); // Body đã được parse thành object JavaScript
  const { username, email, password } = body;
  // Xử lý dữ liệu
  console.log("body request: ", username, email, password);

  const result = await createUser(username, email, password);
  console.log("Kết quả controller : ", result);

  // Trả về response
   res.status(200).json({
    message: "Thêm mới user thành công",
    data: result,
  });
};

export const getRoleUserController = async (req:Request, res:Response) => {
  const { id } = req.query;

  const result = await getAllUserRole(Number(id));
   res.status(200).json({
    message: "Lấy quyền truy cập theo của người dùng thành công",
    data: result,
  });
};

export const getAllUserRoleController = async (req:Request, res:Response) => {
  const { id } = req.query;

  const result = await getAllUserRole(Number(id));
   res.status(200).json({
    message: "Lấy quyền thông tin người dùng và quyền truy cập thành công",
    data: result,
  });
};

export const getUserByUsernameAndEmailControler = async (req:Request, res:Response) => {
  const { username, email } = req.query;

  const result = await getUserUsernameAndEmail(String(username), String(email));
   res.status(200).json({
    message: "Lấy quyền thông tin người dùng và quyền truy cập thành công",
    data: result,
  });
};

export const getUserBySelectController = async (req:Request, res:Response) => {
  const { id } = req.query;

  const result = await getUserAndRoleBSelect(Number(id));
   res.status(200).json({
    message: "Lấy quyền thông tin người dùng và quyền truy cập thành công",
    data: result,
  });
};
