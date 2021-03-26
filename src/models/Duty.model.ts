import { IDuty } from "./Duty.interface";
import { model, Schema } from "mongoose";

const DutySchema = new Schema({
  name: { type: String, required: [true, "Name field is required"] },
  completed: { type: Boolean, required: [true, "Name field is required"] },
});

export const Duty = model<IDuty>("Duty", DutySchema);