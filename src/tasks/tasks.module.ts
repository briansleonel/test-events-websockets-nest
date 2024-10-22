import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { EventsService } from 'src/events/events.service';

@Module({
  controllers: [TasksController],
  providers: [TasksService, EventsService],
})
export class TasksModule {}
