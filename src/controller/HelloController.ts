import { Request, Response } from "express";
import Hello from '../service/Hello';
import BaseController from "../base/BaseController";

export default class StockController extends BaseController {
    private hello: Hello = new Hello();

    constructor() {
        super();
        this.setRouter();
    }

    setRouter(): void {
        /* GET home page. */
        this.router.get('/home', (req: Request, res: Response): void => {
            this.hello.sayHello(req, res);
        });
    }

}
