import { Component, Input, OnInit,Renderer2,ElementRef, ViewChild, AfterViewInit, QueryList, ViewChildren, HostListener} from '@angular/core';

@Component({
  selector: 'app-item-project',
  templateUrl: './item-project.component.html',
  styleUrls: ['./item-project.component.scss']
})
export class ItemProjectComponent implements OnInit,AfterViewInit {

  @Input()title:string="";
  @Input()number:string="";
  @Input()imgDir:string="";  

  @ViewChild('container')container!:ElementRef;
  @ViewChildren('github')githubList!:QueryList<ElementRef>;


  constructor( private render:Renderer2) { }
  
  ngAfterViewInit(): void {
    if(this.imgDir!=""){
       this.render.setStyle(this.container.nativeElement,"background-image",`url(${this.imgDir})`);
     }
  }

  ngOnInit(): void {
   
  }
  /*changeColorGithub()---> En este método modifico el color de los iconos de github y nube,cuando hago 
  el hover en en elemento wraper*/
  changeColorGithub(event:any):void{
    for (let index = 0; index < this.githubList.length; index++) {
      
      this.render.setStyle(this.githubList.get(index)?.nativeElement,"color","black")
    }
    
  }
  RestoreColorGithub(event:any):void{
    for (let index = 0; index < this.githubList.length; index++) {
      
      this.render.setStyle(this.githubList.get(index)?.nativeElement,"color","white")
    }
    
  }
}
