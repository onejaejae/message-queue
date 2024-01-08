import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import Bull, { Queue } from 'bull';

@Injectable()
export class AppService {
  constructor(@InjectQueue('testQueue') private testQueue: Queue) {}

  async proxy(userId: string): Promise<Bull.Job<any>> {
    const job = await this.testQueue.add('test', {
      id: userId,
    });

    return job;
  }
}
