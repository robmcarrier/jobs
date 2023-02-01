import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateJobDto {
  @Field(() => String)
  company: string;
  @Field(() => String)
  position: string;
  @Field(() => Date)
  applicationDate: Date;
  @Field(() => String, { defaultValue: 'APPLIED', nullable: true })
  status: string;
}
