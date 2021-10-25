import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  number:string="01";
  title:string="Acerca de mi";
  texto:string="";
  change:boolean=true;
  constructor() { 
    this.texto=" El mundo de la web es inmenso y me apaciona; por lo que estoy constantemente intentando superarme con nuevos retos.Aquí estoy como cada día, con ganas de crecer y lograr grandes cosas";
    
  }

  ngOnInit(): void {
  }

}
