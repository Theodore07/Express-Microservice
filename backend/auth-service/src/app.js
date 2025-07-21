import express, { json } from 'express'
import router from './router/auth.router.js'

const app = express();
app.use(express.json())
app.use('/', router)

export default app