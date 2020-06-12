import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../subject-demo.service';

@Component({
  selector: 'app-subject-example',
  templateUrl: './subject-example.component.html',
  styleUrls: ['./subject-example.component.css']
})
export class SubjectExampleComponent implements OnInit {
  isEmitted: boolean = false
  constructor(private subjectService: SubjectService) { }

  ngOnInit() {
    this.subjectService.activateSubject.subscribe(data =>
      this.isEmitted = data)
  }

  ngOnDestroy(): void {
    //this.subjectService.activateSubject.unsubscribe()
  }

  onActivate() {
    this.subjectService.onActivateSubject()
  }

}
