import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type JobDocument = HydratedDocument<Job>;

@Schema()
export class Job {
  @Prop()
  company: string;

  @Prop()
  applicationDate: Date;

  @Prop({
    enum: ['APPLIED', 'PENDING', 'INTERVIEW', 'DENIED'],
  })
  status: string;
}

export const JobSchema = SchemaFactory.createForClass(Job);
