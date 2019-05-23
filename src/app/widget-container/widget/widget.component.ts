import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
declare var $: any;
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {WidgetService} from '../../services/widget.service';
import Swal from 'sweetalert2';
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {

  @ViewChild('content') public modal;

  @Input() freshServiceApiKey: string;
  @Input() personIdType: string;
  @Input() personId: number;
  @Input() personName: string;
  @Input() ticketPrefix: string;
  ticketForm: FormGroup;
  closeResult: string;
  file;

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

  saveTicket(modal: any) {
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
      url: this.route.url,
      file: this.file
    }).then((result) => {
      modal.close();
      Swal.fire({
        type: 'success',
        title: 'Ticket Saved',
        text: 'Ticket Number: ' + result,
        showConfirmButton: true,
      });
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

  fileChange(event) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      this.file = file;
    }
  }
}
