import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  subject=new BehaviorSubject<boolean>(false)

  constructor() { }
  ChangeValue(){
    this.subject.next(!this.subject.getValue());
  }
  GetSubject():Observable<boolean>{
    return this.subject as Observable<boolean>;
  }
}
