import { DataTypes } from "sequelize";
import sequelize from "../database/db.js";

const User = sequelize.define("User", {
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isCheckedIn: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM("employee", "admin"),
    allowNull: false,
    defaultValue: "employee",
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  },
  lastCheckIn: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  lastCheckOut: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
    tableName: 'users',
    timestamps: true
});

export default User;