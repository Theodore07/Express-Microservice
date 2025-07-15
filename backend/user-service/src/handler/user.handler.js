import * as userService from "../service/user.service.js";

export const getAllUsers = async (req, res) => {
    try {
        const response = userService.getAllUsers()
        res.json({'data': response})
    } catch (error) {
        console.log(error)
        res.status(500).json({'error': error})
    }
}
