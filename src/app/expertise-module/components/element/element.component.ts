import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class ElementComponent implements OnInit {

  @Input()title:string="";
  @Input()value:string="";
  @Input()number:string="";
  constructor() { }

  ngOnInit(): void {
  }

}
