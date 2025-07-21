import app from "./src/app.js";
import dotenv from "dotenv";
dotenv.config();

const PORT =
  process.env.PORT ||
  3002(
    (async = () => {
      try {
        app.listen(PORT, () => {
          console.log(`User service running on port ${PORT}`);
        });
      } catch (error) {
        console.log('Failed running auth-service:', error)
      }
    })
  );
