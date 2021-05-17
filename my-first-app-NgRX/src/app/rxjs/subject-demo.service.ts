import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class SubjectService {
    activateSubject = new Subject<boolean>()
    contructor() { }

    onActivateSubject() {
        this.activateSubject.next(true)
    }
}