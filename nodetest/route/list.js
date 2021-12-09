import {Router} from "../core/Router.js";
import {fruitsRouter} from "./fruits.js";

const goods = {
    fruits: {apple :'apple', pineapple: 'pineapple', orange: 'orange'},
    vegetables: {carrot: 'carrot', potato:'potato', cucumber: 'cucumber'}
}

export const listRouter = new Router();
listRouter.use('fruits', fruitsRouter);

listRouter.get('', (req, res) =>{
    let json = JSON.stringify(goods);
    res.end(json);
})