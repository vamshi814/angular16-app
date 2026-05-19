import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-b',
  templateUrl: './child-b.component.html',
  styleUrls: ['./child-b.component.css']
})
export class ChildBComponent {

  @Output()
  msgEvent = new EventEmitter<string>();

  sendMsgToParent() {
    this.msgEvent.emit("Hello Parent, I am Child B");
  }
}
