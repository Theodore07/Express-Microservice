import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export const authMiddleware = (req, res, next) => {
    const header = req.headers.authorization
    if  (!header || !header.startsWith('Bearer ')){
        return res.status(403).json({message: 'Unauthorized'})
    }

    const token = header.split(' ')[1]

    try {
        const user = jwt.verify(token, process.env.JWT_SECRET)
        req.user = user
        console.log(user)
        next();
    } catch (error) {
        console.log('error: failed validating user', error)
        return res.status(403).json({ error: 'Invalid token' });
    }

}