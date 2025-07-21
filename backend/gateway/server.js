import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import dotenv from "dotenv";
import { authMiddleware } from "./middleware/auth.middleware";

dotenv.config();

const app = express();
const PORT = process.env.GATEWAY_PORT || 3000;
const USER_SERVICE = process.env.USER_SERVICE_URL || "http://localhost:3001";
const AUTH_SERVICE_URL = process.env.AUTH_SERVICE_URL || "http://localhost:3002";

app.use(express.json());

app.use(
  "/api/user",
  authMiddleware,
  createProxyMiddleware({
    target: USER_SERVICE,
    changeOrigin: true,
    on: {
      proxyReq: (proxyReq, req, res) => {
        if (req.body && Object.keys(req.body).length > 0) {
          const bodyData = JSON.stringify(req.body);
          proxyReq.setHeader("Content-Type", "application/json");
          proxyReq.setHeader("Content-Length", Buffer.byteLength(bodyData));
          proxyReq.write(bodyData);
        }
      },
    },
  })
);
app.use(
  "/api/auth",
  createProxyMiddleware({
    target: AUTH_SERVICE_URL,
    changeOrigin: true,
  })
);

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
