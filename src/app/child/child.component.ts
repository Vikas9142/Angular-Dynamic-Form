import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() messageReceivedByChild;
  @Output() messageEvent = new EventEmitter<any>();
  dataMessage;

  constructor(private dataservice : DataService) {
      this.dataservice.sharedMessage.subscribe( res => {
      this.dataMessage = res;
    })
   }


  ngOnInit() {
     this.messageEvent.emit('Message sent and received from Child to Parent.');
     //this.dataservice.changeMessage('Message from Child to all components');

  }

}