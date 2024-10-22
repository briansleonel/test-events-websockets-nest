import { Body, Controller, Param, Post, Sse } from '@nestjs/common';
import { EventsService } from './events.service';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Sse(':organizationId')
  listenToEvents(@Param('organizationId') organizationId: string) {
    return this.eventsService.getEventStream(organizationId);
  }

  // Endpoint para emitir eventos
  @Post('emit')
  emitEvent(@Body() data: { organizationId: string; message: string }) {
    console.log(data);

    this.eventsService.triggerEvent(data.organizationId, {
      message: data.message,
    });
    return { status: 'Event emitted' };
  }
}
