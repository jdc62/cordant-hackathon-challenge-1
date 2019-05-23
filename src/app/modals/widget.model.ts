export interface WidgetData {
  freshServiceApiKey: string;
  personIdType: string;
  personId: number;
  personName: string;
  ticketData: TicketData;
  ticketPrefix: string;
  url: string;
  file: File;
}

export class TicketData {
  urgency: number;
  description: string;
}
