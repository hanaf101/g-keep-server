import { Document } from 'mongoose';

export interface Note extends Document {
  readonly title: string;
  readonly description: number;
  readonly done: boolean;
  readonly date: Date;
}
