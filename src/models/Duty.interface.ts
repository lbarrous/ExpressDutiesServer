import { Document } from "mongoose";

export interface IDuty extends Document {
  name: string;
}