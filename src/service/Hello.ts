import express from "express";
import { BaseService } from "../base/BaseService";

export default class Hello extends BaseService {

  constructor() {
    super();
  }

  public sayHello(req: express.Request, res: express.Response): void {
    res.send('Hello');
  }

}