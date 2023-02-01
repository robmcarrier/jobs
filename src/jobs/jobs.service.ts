import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateJobDto } from './dto/create-job.dto';
import { Job } from './entities/job.entity';

@Injectable()
export class JobsService {
  constructor(@InjectModel(Job.name) private jobModel: Model<Job>) {}

  async create(createJobDto: CreateJobDto): Promise<Job> {
    const createdJob = new this.jobModel(createJobDto);
    return createdJob.save();
  }

  async findOneById(id: string): Promise<Job> {
    return this.jobModel.findById(id).exec();
  }

  async findAll(): Promise<Job[]> {
    return this.jobModel.find().exec();
  }
}
