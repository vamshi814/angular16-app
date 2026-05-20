import { Component } from '@angular/core';

@Component({
  selector: 'app-child-c',
  templateUrl: './child-c.component.html',
  styleUrls: ['./child-c.component.css']
})
export class ChildCComponent {
  greet() {
    alert("Hello from Child C");
    console.log("Child method called from parent using @ViewChild");
  }
}
