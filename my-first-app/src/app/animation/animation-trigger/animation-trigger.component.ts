import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate} from '@angular/animations'

@Component({
  selector: 'app-animation-trigger',
  templateUrl: './animation-trigger.component.html',
  styleUrls: ['./animation-trigger.component.css'],
  animations:[
    trigger('divState', [
      state('normal', style({'background': 'green',
      'transform': 'translateX(0)'})),
      state('highlighted',  style({'background': 'purple',
      'transform': 'translateX(100px)'})),
      transition('normal<=>highlighted', animate(300))
    ]),
    trigger('wildState', [
      state('normal', style({'background': 'green',
      'transform': 'translateX(0) scale(1)'})),
      state('highlighted',  style({'background': 'purple',
      'transform': 'translateX(100px) scale(1)'})),
      state('shrunken', style({'background': 'orange',
        'transform': 'translateX(0) scale(0.5)'})),
      transition('normal <=> highlighted', animate(300)),
      /*transition('shrunken <=> *', [
        style({
          'background': 'cyan'
        }),
        animate(1000, style ({
          'border-radius': '50px'
        })),
        animate(300)
      ])*/
      transition('shrunken <=> *', animate(1000, style ({
          'border-radius': '50px'
        })))
        
    ])
  ]
})
export class AnimationTriggerComponent implements OnInit {

  state: string ='normal'
  wildState:string = 'normal'
  constructor() { }

  ngOnInit() {
  }

  onTrigger() {
    this.state = this.state == 'normal' ? 'highlighted' : 'normal'
    
    this.wildState = this.wildState == 'normal' ? 'highlighted' : 'normal'
  }

  onWild() {
    this.wildState = 'shrunken' == this.wildState ? 'normal' : 'shrunken'
  }

}
