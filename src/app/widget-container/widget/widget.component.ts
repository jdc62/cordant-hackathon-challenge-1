import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
declare var $: any;
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {WidgetService} from '../../services/widget.service';


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
  @Input() ticketPrefix: string;
  ticketForm: FormGroup;
  closeResult: string;

  urgency = [
    {name: 'Urgent', id: 4},
    {name: 'High', id: 3},
    {name: 'Medium', id: 2},
    {name: 'Low', id: 1},
    ];


  constructor(private route: Router, private modalService: NgbModal, private widgetService: WidgetService) { }

  ngOnInit() {
    this.ticketForm = new FormGroup({
      description: new FormControl(),
      urgency: new FormControl()
    });
  }

  saveTicket() {
    const ticketData = {
      ...this.ticketForm.value,
      urgency: +this.ticketForm.value.urgency
    };
    this.widgetService.saveTicket({
      freshServiceApiKey: this.freshServiceApiKey,
      personIdType: this.personIdType,
      personId: this.personId,
      personName: this.personName,
      ticketData: ticketData,
      ticketPrefix: this.ticketPrefix,
      url: this.route.url
    }).then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
