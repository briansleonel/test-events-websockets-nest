import { Body, Controller, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { IEvent } from 'src/event.interface';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post('')
  emitEvent(@Body() data: IEvent) {
    return this.tasksService.triggerEvent(data);
  }
}
