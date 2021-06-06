import express, { Application } from "express";
import morgan from "morgan";
import controllers from "./base/Controllers";

class App {
    public app: Application = express();

    constructor() {
        console.error('APP', this.app);
        this.app = express();
        this.app.use(morgan("dev")); // 日誌模組
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));

        for (let controller of controllers) {
            this.app.use(controller.getRootPath(), controller.getRouter());
        }
    }
}

export default new App().app;
