import { Request, Response, Router } from 'express';
import { DutyService } from "../services/DutyService";

export class DutyController {
  public router = Router();

  constructor(private dutyService: DutyService) {
    this.setRoutes();
  }

  private welcome = (_: Request, res: Response) => {
    const welcomeMessage = this.dutyService.getWelcomeMessage();
    res.send(welcomeMessage);
  };

  private findAll = async (_: Request, res: Response) => {
    try {
      const duties = await this.dutyService.findAll();
      res.send(duties);
    } catch (e) {
      res.status(500).send(e.message);
    }
  };

  private findOne = async (req: Request, res: Response) => {
    try {
        const dutyResult = await this.dutyService.findOne(
          req.params.id
        );
        res.send(dutyResult);
      } catch (e) {
        res.status(500).send(e.message);
      }
  };

  private add = async (req: Request, res: Response) => {
    try {
      const addDutyResult = await this.dutyService.add(req.body);
      res.send(addDutyResult);
    } catch (e) {
      res.status(500).send(e.message);
    }
  };

  private delete = async (req: Request, res: Response) => {
    try {
      const deleteDutyResult = await this.dutyService.delete(
        req.params.id
      );
      res.send(deleteDutyResult);
    } catch (e) {
      res.status(500).send(e.message);
    }
  };

  private update = async (req: Request, res: Response) => {
    try {
      const updateDutyResult = await this.dutyService.update(
        req.params.id,
        req.body
      );
      res.send(updateDutyResult);
    } catch (e) {
      res.status(500).send(e.message);
    }
  };

  public setRoutes() {
    this.router.get("/", this.welcome);
    this.router.route("/all").get(this.findAll);
    this.router.route("/addDuty").post(this.add);
    this.router.route("/get/:id").get(this.findOne);
    this.router.route("/delete/:id").delete(this.delete);
    this.router.route("/update/:id").put(this.update);
  }
}