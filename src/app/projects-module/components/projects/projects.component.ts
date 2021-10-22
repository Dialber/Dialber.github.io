import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/core-module/services/projects.service';
import { Project } from '../models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  list:Project[]=[];
  title:string="Proyectos";
  number:string="03";
  change:boolean=true;
  constructor(private projectsService:ProjectsService) {
   }  

  ngOnInit(): void {
    this.list=this.projectsService.GetList();
  }
  ToNumber(value:number):string{
    let value1:number=value+=1;
    let value2:string=value1.toString();
    return `0${value2}`;
  }

}
