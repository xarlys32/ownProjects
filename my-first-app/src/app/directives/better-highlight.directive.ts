import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {

  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent'
  constructor() { }

  @HostListener('mouseover') mouseover(eventData: Event) {
    this.backgroundColor = 'green'
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = 'transparent'
  }
}
