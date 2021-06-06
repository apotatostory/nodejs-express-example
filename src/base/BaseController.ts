import { Router } from "express";

export default abstract class BaseController {
    private rootPath: string = '/';
    protected router: Router = Router();

    constructor() {
        console.error('BaseController');
    }

    getRouter(): Router {
        return this.router;
    }

    abstract setRouter(): void;

    getRootPath(): string {
        return this.rootPath;
    }

}
