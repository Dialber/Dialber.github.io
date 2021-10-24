import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-main',
  templateUrl: './form-main.component.html',
  styleUrls: ['./form-main.component.scss']
})
export class FormMainComponent implements OnInit {

  
  title:string="Contáctame";
  number:string="04";
  change:boolean=true;
  
  constructor() { }

  ngOnInit(): void {
  }

}
