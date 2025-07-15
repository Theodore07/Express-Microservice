import User from '../model/User.js'

class UserRepository {
    async createUser(data){
        return await User.create(data)
    }

    async getUserById(id){
        const user = User.findByPk(id)
        return user
    }

    async updateUser(id, data){
        return await User.update(data, {where: {id: id}})
    }

    async deleteUser(userId) {
        await User.update({isActive:false }, {where: {id: userId}})
    }

    async getAllUsers(){
        return await User.findAll();
    }
}

export default new UserRepository();