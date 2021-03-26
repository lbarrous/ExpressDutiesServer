import { Application } from "express";
import { DutyController } from "./controllers/DutyController";
import { DutyService } from "./services/DutyService";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import { MONGO_URL } from "./constants/dutyAPIConstants";

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.setConfig();
    this.setControllers();
    this.setMongoConfig();
  }

  private setConfig() {
    // Allows us to receive requests with data in json format
    this.app.use(bodyParser.json({ limit: "50mb" }));
    // Allows us to receive requests with data in x-www-form-urlencoded format
    this.app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
    // Enables cors
    this.app.use(cors());
  }

  private setControllers() {
    // Creating a new instance of our Duty Controller
    const dutyController = new DutyController(new DutyService());

    // Telling express to use our Controller's routes
    this.app.use("/duties", dutyController.router);
  }

  private setMongoConfig() {
    mongoose.Promise = global.Promise;
    mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
    });
  }

}

export default new App().app;