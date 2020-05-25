import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-binding',
  templateUrl: './manage-binding.component.html',
  styleUrls: ['./manage-binding.component.css']
})
export class ManageBindingComponent implements OnInit {
  oddNumber: number[] = []
  evenNumber: number[] = []
  constructor() { }

  ngOnInit() {
  }

  onIntervalFired(count: number) {
    if (count % 2 === 0) {
      this.evenNumber.push(count)
    } else {
      this.oddNumber.push(count)
    }
  }

}
