import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {WidgetData} from '../modals/widget.model';

@Injectable()
export class WidgetService {

  constructor(private http: HttpClient) {
  }

  saveTicket(data: WidgetData) {
    
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
