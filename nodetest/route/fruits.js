import {Router} from "../core/Router.js";

export const fruitsRouter = new Router();

const fruits = {
apple :'apple', pineapple: 'pineapple', orange: 'orange'
}

fruitsRouter.get('', (req, res) =>{
    let json = JSON.stringify(fruits);
    res.end(json);
})