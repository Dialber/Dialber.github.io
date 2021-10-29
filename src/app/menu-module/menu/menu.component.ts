import { Component, ElementRef, OnInit, QueryList, ViewChildren,Renderer2, AfterViewInit } from '@angular/core';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { MenuService } from 'src/app/core-module/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit,AfterViewInit {

  list:string[];
  constructor(private menuService:MenuService,private render:Renderer2) {
    this.list=["Inicio","Sobre mi","Skills","Proyectos","Contacto"]
   }
  ngAfterViewInit(): void {
    this.AddClassIconBootstrapHref();   
  }

   @ViewChildren("link") menu!:QueryList<ElementRef>;

  ngOnInit(): void {
   
  }
  hideMenu():void{
    this.menuService.ChangeValue();
  }
  private AddClassIconBootstrapHref():void{
    this.menu.forEach(element => {
      var value:string;
      value=element.nativeElement.innerText;
      switch (value) {
        case "Inicio":
          this.render.addClass(element.nativeElement,"bi-house");
          this.render.setAttribute(element.nativeElement,"href","#id-header");
          break;
        case "Sobre mi":
          this.render.addClass(element.nativeElement,"bi-emoji-smile");
          this.render.setAttribute(element.nativeElement,"href","#id-aboutme");
          break;
        case "Skills":
          this.render.addClass(element.nativeElement,"bi-pencil"); 
          this.render.setAttribute(element.nativeElement,"href","#id-skills"); 
          break;
        case "Proyectos":
          this.render.addClass(element.nativeElement,"bi-folder-check");
          this.render.setAttribute(element.nativeElement,"href","#id-projects");
          break;  
        default:
          this.render.addClass(element.nativeElement,"bi-person");
          this.render.setAttribute(element.nativeElement,"href","#id-contact");
          break;
      }
    });
  }

}
