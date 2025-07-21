import { login } from "../service/auth.service.js";

export const loginHandler = async (req, res) => {
  const { email, password } = req.body();
  try {
    const token = await login(email, password);
    if (token == null) {
      return res.status(403).json({ error: "Unauthorized" });
    }

    return res.status(200).json({ token: token });
  } catch (error) {
    console.log("failed authenticating user: ", error);
    res.status(500).json({ error: "failed authenticating user" });
  }
};
