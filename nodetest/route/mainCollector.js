import {Router} from "../core/Router.js";
import {userRouter} from "./user.js";
import {listRouter} from "./list.js";

export const mainRouter = new Router();

mainRouter.use('user', userRouter);
mainRouter.use('list', listRouter);


