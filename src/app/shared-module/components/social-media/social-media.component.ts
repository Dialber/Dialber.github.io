import { Component, ElementRef, OnInit, QueryList, ViewChildren, Renderer2, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit,AfterViewInit {

  list:string[]=[];
  add:boolean=true;
  class:string="";

  @ViewChildren('media') listSocialMedia!:QueryList<ElementRef>;

  constructor(private render:Renderer2) {
    this.list=["facebook","gitHub","linkedin"];
   }
  ngAfterViewInit(): void {
    this.AddClass();
  }

  ngOnInit(): void {
   
  }
  private AddClass():void{
    this.listSocialMedia.forEach(element => {
      var value:string;
      value=element.nativeElement.innerText;
      switch (value) {
        case "facebook":
          this.render.addClass(element.nativeElement,"bi-facebook");
          this.render.setAttribute(element.nativeElement,"href","https://www.facebook.com/dialber.pascualcadena");
          break;
        case "linkedin":
          this.render.addClass(element.nativeElement,"bi-linkedin");
          this.render.setAttribute(element.nativeElement,"href","https://www.linkedin.com/in/dialber-pascual-cadenas-0462391a2/");
          break;
        case "gitHub":
          this.render.addClass(element.nativeElement,"bi-github"); 
          this.render.setAttribute(element.nativeElement,"href","https://github.com/Dialber"); 
          break;
        default:
          break;
      }
    });
  }
}
