import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {

  @Input() freshServiceApiKey: string;
  @Input() personIdType: string;
  @Input() personId: number;
  @Input() personName: string;

  ticketform: FormGroup;


  constructor(route: Router) { }

  ngOnInit() {
    this.ticketform = new FormGroup({
      description: new FormControl(),
      urgency: new FormControl()
    });
  }

  sendTicket() {
    const ticktInfo = {
      ...this.ticketForm,
      url: this.route,
      personIdType: this.personIdType,
      personName: this.personName
    };
  }
}
