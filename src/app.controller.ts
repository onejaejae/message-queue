import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async proxy(@Req() req: Request) {
    const userId = req.headers.id as string;
    return await this.appService.proxy(userId);
  }
}
