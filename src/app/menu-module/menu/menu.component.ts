import { Component, ElementRef, OnInit, QueryList, ViewChildren,Renderer2, AfterViewInit } from '@angular/core';
import { MenuService } from 'src/app/core-module/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit,AfterViewInit {

  list:string[];
  constructor(private menuService:MenuService,private render:Renderer2) {
    this.list=["Inicio","Sobre mi","Skills","Proyectos","Contactos"]
   }
  ngAfterViewInit(): void {
    this.AddClass();   
  }

   @ViewChildren("link") menu!:QueryList<ElementRef>;

  ngOnInit(): void {
   
  }
  hideMenu():void{
    this.menuService.ChangeValue();
  }
  private AddClass():void{
    this.menu.forEach(element => {
      var value:string;
      value=element.nativeElement.innerText;
      switch (value) {
        case "Inicio":
          this.render.addClass(element.nativeElement,"bi-house");
          break;
        case "Sobre mi":
          this.render.addClass(element.nativeElement,"bi-emoji-smile");
          break;
        case "Skills":
          this.render.addClass(element.nativeElement,"bi-pencil"); 
          break;
        case "Proyectos":
          this.render.addClass(element.nativeElement,"bi-folder-check");
          break;  
        default:
          this.render.addClass(element.nativeElement,"bi-person");
          break;
      }
    });
  }

}
