import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/core-module/services/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  nombre:string;
  h1:string;
  contact:string;
  hide:boolean=false;

  constructor(private menuService:MenuService) { 
    this.nombre="Hola mi nombre es Dialber."
    this.h1= "Soy Frontend Web Developer";
    this.contact="Contacto";
  }

  ngOnInit(): void {
    this.menuService.GetSubject().subscribe(data=>{
      this.hide=data;
    });
  }

  showMenu():void{    
    this.menuService.ChangeValue();
    
    this.menuService.GetSubject().subscribe(data=>{
      this.hide=data;
    });
  }
}
