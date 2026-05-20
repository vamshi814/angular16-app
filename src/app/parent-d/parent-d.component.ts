import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent-d',
  templateUrl: './parent-d.component.html',
  styleUrls: ['./parent-d.component.css']
})
export class ParentDComponent implements AfterViewInit{

  @ViewChild('nameInput') nameInputRef!: ElementRef<HTMLInputElement>;

   ngAfterViewInit() {
    // Direct access to the DOM element via nativeElement
    this.nameInputRef.nativeElement.focus();
  }

  clearInput() {
    console.log("clearInput method called");
    this.nameInputRef.nativeElement.value = '';
  }

}
