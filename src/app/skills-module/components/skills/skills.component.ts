import { Component, OnInit } from '@angular/core';
import { Skill } from '../../models/skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  list:Skill[]=[];
  number:string="02";
  title:string="Skills";
  change:boolean=true;
  constructor() { 
    this.list=[{title:"html",value:90},{title:"(S)css",value:85},{title:"javascript",value:85},{title:"typescript",value:85},
                {title:"boostrap",value:80},{title:"Angular",value:80}]
  }

  ngOnInit(): void {
  }

}
