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
        title:"Portafolio",img:"assets/img/projects/Portafolio.jpg",
        description:" Mi sitio personal, al que le he puesto tanto entusiasmo, ahora sabe a poco, pero con el tiempo irá creciendo",
        array:["Angular","Scss","EmailJs","BoostrapIcons","FontAwesome"],
        dirGitHub:"#",
        dirDepl:"",

      },
      {
        title:"Restaurante",img:"assets/img/projects/Restaurant.jpg",
        description:"Realicé la maquetación de este diseño al cual quise personalizar un poco la apariencia y este fué el resultado",
        array:["Javascript","Html","Scss","FontAwesome"],
        dirGitHub:"https://github.com/Dialber/restaurant.github.io",
        dirDepl:"https://dialber.github.io/restaurant.github.io/",
      },
      {
        title:"Marvel vs DC",img:"assets/img/projects/marvel-vs-dc.jpg",
        description:"Un sitio para los amantes de los comics; no hay mejor manera de mostrar tus conocimientos que trabajar con las cosas que te gustan",
        array:["Angular","Scss","NgxCharts","BoostrapIcons","OMDB api de películas","Back4app como servicio de BASS"],
        dirGitHub:"https://github.com/Dialber/Marvel-DC",
        dirDepl:"https://github.com/Dialber/Marvel-DC",
      },
      {
       title:"Consultoría",img:"assets/img/projects/Maqueta-morris.jpg",
       description:"Maquetación de un sitio dedicado a la asesoría en problemas de negocio o necesidades empresariales",
       array:["Html","Scss","FontAwesome","MorrisJS"],
       dirGitHub:"https://github.com/Dialber/Consultoria",
       dirDepl:"https://dialber.github.io/Consultoria/",
      }]
  }
  GetList():Project[]{
    return this.list;
  }
}
