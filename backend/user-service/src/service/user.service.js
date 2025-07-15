import userRepository from "../repository/user.repository.js"
import { v4 as uuidv4 } from 'uuid'
import bcrypt from 'bcrypt'

export const getAllUsers = async () => {
    const users = await userRepository.getAllUsers();
    return users.map((user) => {
        return user.toJSON()
    });
}

export const createUser = async ({userName, email, password, role}) => {
    const hashedPass = await bcrypt.hash(password, 10)
    const userData = {
        id: uuidv4(),
        userName: userName,
        email: email,
        password: hashedPass,
        role: role ?? 'employee',
        isActive: true,
        isCheckedIn: false,
    }
    //blom check duplicate email
    const user = await userRepository.createUser(userData)
    return user;
}

// export const updateUser = async () => {

// }