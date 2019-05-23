import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {WidgetData} from '../modals/widget.model';
import axios from 'axios';

@Injectable()
export class WidgetService {

  constructor(private http: HttpClient) {
  }

  saveTicket(data: WidgetData) {
    console.log(data);
    return axios({
      method: 'POST',
      url: 'https://cordantgroup-servicedesk.freshservice.com/helpdesk/tickets.json',
      auth: {
        username: 'DDPCF5z9nYoH7uGXtuWU',
        password: 'dummy'
      },
      data: {
        'helpdesk_ticket': {
            'description': data.ticketData.description,
            'subject': data.ticketPrefix ? data.ticketPrefix + ':' + data.url : data.url  ,
            'email': data.personName,
            'priority': 4,
            'ticket_type': 'Incident',
            'status': 2,
            'source': 1
        }
      }
    }).then((result) => {
      console.log(result.data);
    }).catch((error) => {
      console.log(error);
    });
  }

  saveClick(click) {
    // return this.http.post('http://localhost:8080/api/clicked/', click, {responseType: 'text'}).toPromise().then((data) => {
    //   if (data) {
    //     return this.getClicks();
    //   }
    // }).catch((error) => {
    //   console.log('Some error happened!');
    //   console.log(error);
    // });
  }
}
