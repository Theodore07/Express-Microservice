import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export const generateJwt = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h'});
}

export const verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET)
}


