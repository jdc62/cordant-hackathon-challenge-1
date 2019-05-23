import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-widget-container',
  templateUrl: './widget-container.component.html',
  styleUrls: ['./widget-container.component.css']
})
export class WidgetContainerComponent implements OnInit {

  freshServiceApiKey = 'DDPCF5z9nYoH7uGXtuWU';
  personIdType = 'Type';
  personId = 123456;
  personName =  'hackathon-user+User4@cordantgroup.com';
  ticketPrefix = 'Prefix';
  constructor() { }

  ngOnInit() {
  }

}
