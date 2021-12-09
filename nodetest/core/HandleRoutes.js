import url from 'url';

export class HandleRoutes {
    constructor(router) {
        this.routes = router.routes;
    }

    handleReq(req, res){
        const currentUrl = url.parse(req.url, true);
        const pathName = currentUrl.pathname.split('/');

        let route = this.getRoute(pathName);
        if (!route){
            res.statusCode = 404;
            res.end('Not f')
            return;
        }

        const cbf = route[req.method] || route[''][req.method]
        cbf(req,res);
    }

    getRoute(pathName) {
    let route = this.routes;

    pathName.forEach((path, i) => {
            if(i) {
            route = route[path];
            }
        });
    return route;
    }
}