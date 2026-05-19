import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-b',
  templateUrl: './parent-b.component.html',
  styleUrls: ['./parent-b.component.css']
})
export class ParentBComponent {

  recieveMsg(msg: string) {
    alert(msg);
    console.log(msg);
  }
}
