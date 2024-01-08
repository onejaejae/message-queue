import { OnQueueActive, Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';

@Processor('testQueue')
export class AppConsumer {
  private readonly logger: Logger = new Logger(AppConsumer.name);

  @Process('test')
  getMessageQueue(job: Job) {
    this.logger.log(`id: ${job.id} 수신`);
  }

  @OnQueueActive()
  onActive(job: Job) {
    this.logger.log(
      `Processing job ${job.id} of type ${job.name} with data ${job.data}...`,
    );
  }
}
