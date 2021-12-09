import http from 'http';
import {HandleRoutes} from "./core/HandleRoutes.js";
import {mainRouter} from "./route/mainCollector.js";
import {initDatabase} from "./database/dbinit.js";

const routesHandler = new HandleRoutes(mainRouter);

http.createServer((req, res) => {
    routesHandler.handleReq(req, res);
}).listen(3000, async ()=>{
await initDatabase();
});