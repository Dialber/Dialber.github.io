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
  @Input()description:string="";
  @Input()listTecnol:string[]=[];
  @Input()dirGitHub:string="";
  @Input()dirDepl:string="";


  slider:boolean=false;
  changeColor:boolean=false;
  moveDescription:boolean=false;

  @ViewChild('container')container!:ElementRef;
  @ViewChild('descript')descriptionElement!:ElementRef;
  @ViewChild('info')infoElement!:ElementRef;
  @ViewChild('gitHubCode') codeGitHub! :ElementRef;

  constructor( private render:Renderer2) { }
  
  ngAfterViewInit(): void {
    if(this.imgDir!=""){
       this.render.setStyle(this.container.nativeElement,"background-image",`url(${this.imgDir})`);
     }
     if(this.dirGitHub=="#"){
       this.render.setStyle(this.codeGitHub.nativeElement,"display","none");
     }
  }

  ngOnInit(): void {
   
  }
  /*changeColorGithub()---> En este método modifico el color de los iconos de github y nube,cuando hago 
  el hover en en elemento wraper*/
  changeColorGithub():void{
    this.slider=true;
    this.changeColor=true;
  }
  RestoreColorGithub():void{
    this.slider=false;  
    this.changeColor=false;
  }
  /**Mostrar y ocultar la descripción cuando el mouse está sobre el ícono de info */
  showDescription():void{
    this.moveDescription=true;
    this.render.addClass(this.container.nativeElement,"pauseAnimation");
    this.render.addClass(this.infoElement.nativeElement,"bi-x-circle");
  }
  pause():void{
    this.render.addClass(this.container.nativeElement,"pauseAnimation");
  }
  notPause():void{
    this.render.removeClass(this.container.nativeElement,"pauseAnimation");
  }
  
  hideDescription():void{
    this.moveDescription=false;
    this.render.removeClass(this.container.nativeElement,"pauseAnimation");   
    this.render.removeClass(this.infoElement.nativeElement,"bi-x-circle");   
  }
  /**Mostrar y ocultar la información al hacer click en el ícono */
  showhide():void{
    if(this.moveDescription==true){
      this.hideDescription();
    }
    else{
      this.showDescription();
    }
  }
}
