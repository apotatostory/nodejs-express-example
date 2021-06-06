import BaseController from "./BaseController";
import StockController from "../controller/HelloController";

const controllers: Array<BaseController> = [
  new StockController(),
];

export default controllers;