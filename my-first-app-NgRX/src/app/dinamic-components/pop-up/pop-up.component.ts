import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {

  @Output() closeButton = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit() {
  }

  onClose() {
    this.closeButton.emit(true)
  }

}
