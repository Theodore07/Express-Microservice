import app from "./src/app.js";
import dotenv from "dotenv";
import sequelize from "./src/database/db.js";
import User from "./src/model/User.js";
dotenv.config();

const PORT = process.env.PORT || 3001;

(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    app.listen(PORT, () => {
      console.log(`User service running on port ${PORT}`);
    });
  } catch (error) {
    console.log("Error running user-service: ", error);
  }
})();
