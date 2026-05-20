import { Component, ViewChild } from '@angular/core';
import { ChildCComponent } from '../child-c/child-c.component';

@Component({
  selector: 'app-parent-c',
  templateUrl: './parent-c.component.html',
  styleUrls: ['./parent-c.component.css']
})
export class ParentCComponent {

  @ViewChild('mychild') var1!: ChildCComponent;
  callChildMethod() {
    //accessing the public method of child
    if(this.var1){
      this.var1.greet();
    }
  
  }

}
