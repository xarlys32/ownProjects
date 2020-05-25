import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-controll',
  templateUrl: './game-controll.component.html',
  styleUrls: ['./game-controll.component.css']
})
export class GameControllComponent implements OnInit {
  @Output() intervalFired = new EventEmitter()
  interval: any
  count = 0

  constructor() { }

  ngOnInit() {
  }

  onStart() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.count + 1)
      this.count++
    }, 1000)
  }

  onStop() {
    clearInterval(this.interval)
  }

}
