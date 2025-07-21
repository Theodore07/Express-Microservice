import axios from 'axios'
import bcrypt from 'bcrypt'
import {generateJwt} from '../utils/jwt.js'
import dotenv from 'dotenv'
dotenv.config()
const USER_SERVICE = process.env.USER_SERVICE_URL || 'http://localhost:3001'

export const login = async (email, password) => {
    const response = await axios.post(`${USER_SERVICE}/verify`, {email: email});
    const user = response.data.data

    const isValid = await bcrypt.compare(password, user.password)
    if (!isValid){
       return null
    }

    return generateJwt({id: user.id, role: user.role})
}