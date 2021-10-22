import { Injectable } from '@angular/core';
import { Project } from 'src/app/projects-module/components/models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private list:Project[]=[];
  constructor() { 
    this.list=[
      {
        title:"Portafolio",img:"assets/img/projects/Restaurant.jpg",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus magni adipisci magnam ex dolores quod vel voluptatibus nisi, vero optio?",
        array:["Angular,BoostrapIcons,Scss,FontAwesome"]
      },
      {
        title:"Restaurante",img:"assets/img/projects/Restaurant.jpg",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus magni adipisci magnam ex dolores quod vel voluptatibus nisi, vero optio?",
        array:["Javascript,Html,Scss,FontAwesome"]
      },
      {
        title:"Marvel vs DC",img:"assets/img/projects/marvel-vs-dc.jpg",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus magni adipisci magnam ex dolores quod vel voluptatibus nisi, vero optio?",
        array:["Angular","Scss","NgxCharts","BoostrapIcons","OMDB api de películas","Back4app como servicio de BASS"]
      },
      {
       title:"Gráfica con Morris",img:"assets/img/projects/Maqueta-morris.jpg",
       description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus magni adipisci magnam ex dolores quod vel voluptatibus nisi, vero optio?",
       array:["Html","Scss","FontAwesome","MorrisJS"]
      }]
  }
  GetList():Project[]{
    return this.list;
  }
}
