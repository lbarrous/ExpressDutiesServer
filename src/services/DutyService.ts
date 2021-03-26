import { IDuty } from './../models/Duty.interface';
import { Duty } from "../models/Duty.model";
import { WELCOME_MESSAGE } from "../constants/dutyAPIConstants";

export class DutyService {
  public getWelcomeMessage() {
    return WELCOME_MESSAGE;
  }

  public findAll(): Promise<IDuty[]> {
    return Duty.find({}).exec();
  }

  public add(duty: IDuty): Promise<IDuty> {
    const newDuty = new Duty(duty);
    return newDuty.save();
  }

  public async findOne(id: string) {
    const dutyFound: Promise<IDuty> = await Duty.findById(id).exec() as any;

    if (!dutyFound) {
      throw new Error(`Duty with id '${id}' not found`);
    }

    return dutyFound;
  }

  public async delete(id: string) {
    const deletedDuty: Promise<IDuty> = await Duty.findByIdAndDelete(
      id
    ).exec() as any;

    if (!deletedDuty) {
      throw new Error(`Duty with id '${id}' not found`);
    }

    return deletedDuty;
  }

  public async update(id: string, duty: IDuty) {
    const updatedDuty: Promise<IDuty> = await Duty.findByIdAndUpdate(
      id,
      duty
    ).exec() as any;

    if (!updatedDuty) {
      throw new Error(`Duty with id '${id}' not found`);
    }

    return updatedDuty;
  }
}
