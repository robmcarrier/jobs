import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { JobsService } from './jobs.service';
import { NotFoundError } from 'rxjs';
import { Job } from './entities/job.entity';
import { CreateJobDto } from './dto/create-job.dto';

@Resolver(() => Job)
export class JobsResolver {
  constructor(private readonly jobService: JobsService) {}

  @Query(() => Job)
  async job(@Args('id') id: string): Promise<Job> {
    const job = await this.jobService.findOneById(id);
    if (!job) {
      throw new NotFoundError(id);
    }
    return job;
  }

  @Query(() => [Job])
  async jobs(): Promise<Job[]> {
    return this.jobService.findAll();
  }

  @Mutation(() => Job)
  createJob(@Args('createJobInput') createJobInput: CreateJobDto) {
    return this.jobService.create(createJobInput);
  }
}
