import { Injectable } from '@nestjs/common';
import { Observable, Subject } from 'rxjs';
import { IEvent } from 'src/event.interface';

@Injectable()
export class EventsService {
  private organizationSubjects: Map<string, Subject<IEvent>> = new Map();

  // Método para obtener un flujo de eventos para el SSE
  getEventStream(organizationId: string): Observable<IEvent> {
    if (!this.organizationSubjects.has(organizationId)) {
      this.organizationSubjects.set(organizationId, new Subject<IEvent>());
    }

    // Retorna el Subject correspondiente como Observable
    return this.organizationSubjects.get(organizationId).asObservable();
  }

  // Método para emitir un evento
  triggerEvent(organizationId: string, data: any) {
    const event: IEvent = {
      data: JSON.stringify({
        message: data.message,
        timestamp: new Date(),
      }),
      id: new Date().getTime().toString(),
      type: `organization-${organizationId}`,
    };

    console.log(event);

    // Emitir el evento a todos los suscriptores de la organización
    console.log(this.organizationSubjects);

    if (!this.organizationSubjects.has(organizationId)) {
      this.organizationSubjects.set(organizationId, new Subject<IEvent>());
    }
    this.organizationSubjects.get(organizationId).next(event);
  }
}
