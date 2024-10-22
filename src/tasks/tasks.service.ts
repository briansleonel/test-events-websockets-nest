import { Injectable } from '@nestjs/common';
import { IEvent } from 'src/event.interface';
import { EventsService } from 'src/events/events.service';

@Injectable()
export class TasksService {
  constructor(private readonly eventsService: EventsService) {}

  triggerEvent(data: IEvent) {
    console.log(data);
  }
}
