export interface WidgetData {
  freshServiceApiKey: string;
  personIdType: string;
  personId: number;
  personName: string;
  ticketData: TicketData;
}

export class TicketData {
  urgency: string;
  description: string;
}
