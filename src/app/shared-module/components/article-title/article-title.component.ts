import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-title',
  templateUrl: './article-title.component.html',
  styleUrls: ['./article-title.component.scss']
})
export class ArticleTitleComponent implements OnInit {

  @Input()title:string="";
  @Input()number:string="";
  @Input()change:boolean=false;
  /*Uso el change para identificar si tengo que centrar el texto, como es un componente que reutilizo mucho,en algunos lugares los van centrados como el de Conocimientos*/

  constructor() { }

  ngOnInit(): void {
  }

  ChangeCenter(value:boolean){
    this.change=value;
  }
}
