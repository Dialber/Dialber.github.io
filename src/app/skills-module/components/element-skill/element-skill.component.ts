import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-element-skill',
  templateUrl: './element-skill.component.html',
  styleUrls: ['./element-skill.component.scss']
})
export class ElementSkillComponent implements OnInit {

  @Input()value:number=0;
  @Input()title:string="";
  constructor() { }

  ngOnInit(): void {
  }

}
