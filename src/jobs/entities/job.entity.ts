import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ObjectType } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';

@Schema()
@ObjectType()
export class Job {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Prop()
  @Field(() => String, { description: 'Company Name' })
  company: string;

  @Prop()
  @Field(() => String, { description: 'Position' })
  position: string;

  @Prop()
  @Field(() => Date, { description: 'Date application was submitted' })
  applicationDate: Date;

  @Prop({
    enum: ['APPLIED', 'PENDING', 'INTERVIEW', 'DENIED'],
  })
  @Field(() => String, {
    description: 'Current status of application',
    nullable: true,
  })
  status: string;
}

export const JobSchema = SchemaFactory.createForClass(Job);
