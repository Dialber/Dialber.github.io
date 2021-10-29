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
        description:" Mi sitio personal,al que le he puesto tanto entusiasmo, donde plasmo todos mis trabajos, poco aún pero poco a poco irá creciendo",
        array:["Angular","BoostrapIcons","Scss","FontAwesome"]
      },
      {
        title:"Restaurante",img:"assets/img/projects/Restaurant.jpg",
        description:"Realicé la maquetación de este restaurante a partir de un diseño con el que choqué en la web,hice algunos ajustes en el diseño y este fué el resultado",
        array:["Javascript","Html","Scss","FontAwesome"]
      },
      {
        title:"Marvel vs DC",img:"assets/img/projects/marvel-vs-dc.jpg",
        description:"Un sitio para los amantes de los comics, no hay mejor manera de plasmar tus conocimientos que trabajar con las cosas que te gustan",
        array:["Angular","Scss","NgxCharts","BoostrapIcons","OMDB api de películas","Back4app como servicio de BASS"]
      },
      {
       title:"Gráfica con Morris",img:"assets/img/projects/Maqueta-morris.jpg",
       description:"Navegando en la web me topé con este diseño y hice la maquetación ... ",
       array:["Html","Scss","FontAwesome","MorrisJS"]
      }]
  }
  GetList():Project[]{
    return this.list;
  }
}
