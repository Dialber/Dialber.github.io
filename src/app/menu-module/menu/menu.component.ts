import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/core-module/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  list:string[];
  constructor(private menuService:MenuService) {
    this.list=["Home","About","Conocimientos","Skills","Proyectos","Contactos"]
   }

  ngOnInit(): void {
  }
  hideMenu():void{
    this.menuService.ChangeValue();
  }

}
