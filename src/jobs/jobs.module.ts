import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JobsService } from './jobs.service';
import { JobsResolver } from './jobs.resolver';
import { Job, JobSchema } from './entities/job.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Job.name, schema: JobSchema }])],
  providers: [JobsResolver, JobsService],
})
export class JobsModule {}
