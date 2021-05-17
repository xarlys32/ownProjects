import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes} from '@angular/animations'

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
      transition('normal <=> highlighted', [
        style({
          'background': 'cyan'
        }),
        animate(1000)]),
      
      transition('shrunken <=> *', animate(1000, style ({
          'border-radius': '50px'
        })))
    ]),
    trigger('list1',[
      state('in', style({
        'opacity': 1,
        'transform': 'translateX(0)'
      })),
      transition('void=>*', [
        style({
          'opacity': 0,
          'transform': 'translateX(-100px)'
        }),
        animate(300)
      ])
    ]),
    trigger('list2',[
      state('in', style({
        'opacity': 1,
        'transform': 'translateX(0)'
      })),
      transition('void=>*', [
        animate(1000, keyframes([
          style({
            'transform': 'translateX(-100px)',
            'opacity': 0,
            'offset': 0
          }),
          style({
            'transform': 'translateX(-50px)',
            'opacity': 0.5,
            'offset': 0.3
          }),
          style({
            'transform': 'translateX(-20px)',
            'opacity': 1,
            'offset': 0.8
          }),
          style({
            'transform': 'translateX(0px)',
            'opacity': 1,
            'offset': 1
          }),
        ]))
      ])
  ])
]
})
export class AnimationTriggerComponent implements OnInit {

  state: string ='normal'
  wildState:string = 'normal'
  list: string[] = ['lickeriono','nemesio']
  cosa: string
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

  onAdd() {
    this.list.push(this.cosa)
  }

  onAnimationStart(event) {
    console.log(event)
  }

}
