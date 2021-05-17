import { Directive, HostBinding, HostListener, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.show') active: boolean = false;
  @HostListener('click') mouseClick() {
    this.active = !this.active
    if (this.active) {
      this.renderer.setElementClass(this.el.nativeElement.lastElementChild, 'show', true);
    } else {
      this.renderer.setElementClass(this.el.nativeElement.lastElementChild, 'show', false);
    }
    //this.el.nativeElement.lastElementChild.classList.push("show")
  }
  constructor(private el: ElementRef, private renderer: Renderer) { }

}
