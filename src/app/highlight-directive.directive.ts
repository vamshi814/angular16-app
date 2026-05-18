import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightDirective]'
})
export class HighlightDirectiveDirective {

  // Inject ElementRef to get access to the "actor" (the HTML element)
  constructor(private el: ElementRef) { }
  //means mouse enters this event triggers
  //passes the color yellow to the highlight method
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  } 

  //means mouse leaves this event triggers
  //passes the color empty string to the highlight method to remove the background color
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }
  
  //method to set the background color of the element
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
