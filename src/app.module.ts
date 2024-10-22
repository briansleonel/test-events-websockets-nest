import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsService } from './events/events.service';
import { EventsController } from './events/events.controller';
import { TasksModule } from './tasks/tasks.module';
import { NotificationsModule } from './notifications/notifications.module';

@Module({
  imports: [TasksModule, NotificationsModule],
  controllers: [AppController, EventsController],
  providers: [AppService, EventsService],
})
export class AppModule {}
