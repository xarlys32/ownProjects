import { Directive, HostBinding, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.show') active: boolean = false;
  @HostListener('click') mouseClick() {
    this.active = !this.active
    if (this.active) {
      this.renderer.addClass(this.el.nativeElement.lastElementChild, 'show');
    } else {
      this.renderer.removeClass(this.el.nativeElement.lastElementChild, 'show');
    }
    //this.el.nativeElement.lastElementChild.classList.push("show")
  }
  constructor(private el: ElementRef, private renderer: Renderer2) { }

}
