import { Injectable } from '@angular/core';
import { Project } from 'src/app/projects-module/components/models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private list:Project[]=[];
  constructor() { 
    this.list=[{title:"Portafolio",img:"assets/img/projects/Restaurant.jpg"},{title:"Restaurante",img:"assets/img/projects/Restaurant.jpg"},
    {title:"Marvel vs DC",img:"assets/img/projects/marvel-vs-dc.jpg"}, {title:"Gráfica con Morris",img:"assets/img/projects/Maqueta-morris.jpg"}]
  }
  GetList():Project[]{
    return this.list;
  }
}
