import { where } from "sequelize";
import User from "../model/User.js";

class UserRepository {
  async createUser(data) {
    return await User.create(data);
  }

  async getUserById(id) {
    const user = User.findByPk(id, {
      attributes: [
        "id",
        "userName",
        "email",
        "role",
        "lastCheckIn",
        "lastCheckOut",
        "isCheckedIn"
      ],
    });
    return user;
  }

  async updateUser(id, data) {
    return await User.update(data, { where: { id: id } });
  }

  async checkIn(id, timestamps) {
    await User.update(
      { isCheckedIn: true, lastCheckIn: timestamps },
      { where: { id: id } }
    );
  }

  async checkOut(id, timestamps) {
    await User.update(
      { isCheckedIn: false, lastCheckOut: timestamps },
      { where: { id: id } }
    );
  }

  async deleteUser(userId) {
    await User.update({ isActive: false }, { where: { id: userId } });
  }

  async getAllUsers() {
    return await User.findAll({
      attributes: [
        "id",
        "userName",
        "email",
        "role",
        "lastCheckIn",
        "lastCheckOut",
        "isCheckedIn"
      ],
    });
  }

  async getUserByEmail(email) {
    return await User.findOne({
      where: {
        email: email,
      },
    });
  }
}

export default new UserRepository();
