import {sequelize} from "../database/dbstate.js";

export class userService{
    constructor() {

    }
    getUsersList(){
        return [1]
    }

    async createUser(){
        await sequelize.model('User').create({
            firstName: 'Ivan'
        })
    }
}

