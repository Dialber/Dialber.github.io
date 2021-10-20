import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-title',
  templateUrl: './article-title.component.html',
  styleUrls: ['./article-title.component.scss']
})
export class ArticleTitleComponent implements OnInit {

  @Input()title:string="";
  @Input()number:string="";

  constructor() { }

  ngOnInit(): void {
  }

}
