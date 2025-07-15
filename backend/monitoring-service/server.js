import app from './src/app.js'
import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT || 3002
app.listen(PORT, () => {
    console.log(`Monitoring service running on port ${PORT}`)
})