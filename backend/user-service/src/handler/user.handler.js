import * as userService from "../service/user.service.js";

export const getAllUsers = async (req, res) => {
  try {
    const response = await userService.getAllUsers();
    res.status(200).json({ data: response, message: "retrieving all users" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
};

export const createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    res
      .status(201)
      .json({ status: 201, data: user, message: "user created successfully" });
  } catch (error) {
    console.log("failed creating user: ", error);
    res.status(500).json({ error: "failed creating user" });
  }
};

export const findUserByEmail = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await userService.findUserByEmail(email);
    if (user == null) {
      res.status(400).json({ message: "User not found", data: null });
    }
    return res.status(200).json({ data: user });
  } catch (error) {
    console.log("failed finding user: ", error);
    res.status(500).json({ error: "failed finding user" });
  }
};

export const checkInUser = async (req, res) => {
  const {id, timestamp} = req.body
  try {
    const response = await userService.checkIn(id, timestamp)
    if(response == null){
      res.status(200).json({message: "user checked in already"})
    }
    
    res.status(200).json({message: "user checked in successfully"})
  } catch (error) {
     console.log("failed checking in user: ", error);
    res.status(500).json({ error: "failed check in" });
  }
};

export const checkOutUser = async (req, res) => {
  const {id, timestamp} = req.body
  try {
    const response = await userService.checkOut(id, timestamp)
    if(response == null){
      res.status(200).json({message: "user checked out already"})
    }
    res.status(200).json({message: "user checked out successfully"})
  } catch (error) {
     console.log("failed checking out user: ", error);
    res.status(500).json({ error: "failed check out" });
  }
};

export const authenticateUser = async (req, res) => {
  const userInfo = req.headers['x-user']
  const parsedHeader = JSON.parse(userInfo)

  const user = await userService.authenticateUser(parsedHeader.id)
  res.status(200).json({ message: "user info", data: user})
}
