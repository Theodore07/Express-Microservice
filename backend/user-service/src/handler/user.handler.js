import * as userService from "../service/user.service.js";

export const getAllUsers = async (req, res) => {
  try {
    const response = await userService.getAllUsers();
    res.status(200).json({ data: response , message: "retrieving all users"});
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
};

export const createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json({ status: 201, data: user, message: "user created successfully" });
  } catch (error) {
    console.log("failed creating user: ", error);
    res.status(500).json({ error: "failed creating user" });
  } 
};

export const findUserByEmail = async (req, res) => {
  const {email} = req.body;
  try {
    const user = await userService.findUserByEmail(email)
    if (user == null){
      res.status(400).json({ message: 'User not found', data: null});
    }
    return res.status(200).json({data: user}) 
  } catch (error) {
    console.log("failed finding user: ", error);
    res.status(500).json({ error: "failed finding user" });
  }
}
