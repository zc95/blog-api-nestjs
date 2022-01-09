import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { DemoService } from './demo.service';

@Controller('demo')
export class DemoController {
  constructor(private readonly demoService: DemoService) {}

  // 查询
  @Get()
  fetch(@Query() { id }): string {
    return this.demoService.fetch(id);
  }

  // 创建
  @Post()
  save(@Body() { message }): string {
    console.log(message);
    return this.demoService.save(message);
  }
}
