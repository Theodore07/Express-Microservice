import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import dotenv from 'dotenv'

dotenv.config()

const app = express();
const PORT = process.env.GATEWAY_PORT || 3000
const USER_SERVICE = process.env.USER_SERVICE_URL || 'http://localhost:3001'
const MONITORING_SERVICE = process.env.MONITORING_SERVICE_URL || 'http://localhost:3002'


app.use(express.json())
app.use('/api/user', createProxyMiddleware(
    {
        target: USER_SERVICE,
        changeOrigin: true,
    }
))
app.use('/api/monitoring', createProxyMiddleware(
    {
        target: MONITORING_SERVICE,
        changeOrigin: true,
    }
))

app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`)
})
