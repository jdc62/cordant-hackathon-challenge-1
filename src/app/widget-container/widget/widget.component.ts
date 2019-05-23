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

  ticketForm: FormGroup;


  constructor(private route: Router) { }

  ngOnInit() {
    this.ticketForm = new FormGroup({
      description: new FormControl(),
      urgency: new FormControl()
    });
  }

  sendTicket() {
    const ticktDetails = {
      ...this.ticketForm,
      url: this.route.url,
      personIdType: this.personIdType,
      personName: this.personName
    };
  }
}
