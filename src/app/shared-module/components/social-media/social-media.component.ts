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
    this.list=["facebook","twitter","linkedin"];
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
          break;
        case "linkedin":
          this.render.addClass(element.nativeElement,"bi-linkedin");
          break;
        case "twitter":
          this.render.addClass(element.nativeElement,"bi-twitter"); 
          break;
        default:
          break;
      }
    });
  }
}
