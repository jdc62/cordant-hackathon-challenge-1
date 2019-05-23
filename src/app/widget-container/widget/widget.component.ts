import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
declare var $: any;
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


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
  closeResult: string;

  urgecy = ['urgent', 'high', 'medium', 'low'];


  constructor(private route: Router, private modalService: NgbModal) { }

  ngOnInit() {
    this.ticketForm = new FormGroup({
      description: new FormControl(),
      urgency: new FormControl()
    });
  }

  sendTicket() {
    console.log(this.ticketForm.value);
    // const ticktDetails = {
    //   ...this.ticketForm,
    //   url: this.route.url,
    //   personIdType: this.personIdType,
    //   personName: this.personName
    // };
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
