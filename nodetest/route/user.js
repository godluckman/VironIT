import {Router} from "../core/Router.js";
import {usersController} from "../controller/userscontroller.js";

export const userRouter = new Router();
const usersControl = new usersController();

userRouter.get('', usersControl.getUsersList.bind(usersController));
userRouter.post('', usersControl.createUser.bind(usersController));
