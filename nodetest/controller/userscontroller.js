import {Controller} from "../core/Controller.js";
import {userService} from "../services/userservice.js"
import url from "url";

export class usersController extends Controller{

    constructor() {
        const userServiceO = new userService();
        super(userServiceO);
    }

    getUsersList(req, res){
        const parsedUrl = url.parse(req.url, true)
        const usersList = this.service.getUsersList();
        res.end(usersList)
    }

    async createUser(req, res){
        await this.service.createUser();
        res.end('user created');
    }
}