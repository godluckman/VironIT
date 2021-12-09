export class Router {

    routes = {};

    use (path, router){
        this.routes[path] = router.routes;

    }

    get(path, cbf){
    this.routeEmit(path, 'GET', cbf);
    }

    post(path, cbf){
        this.routeEmit(path, 'POST', cbf);
    }

    routeEmit(path, method, cbf){
            this.routes[path] = this.routes[path] || {};
            this.routes[path][method] = cbf
    }

}