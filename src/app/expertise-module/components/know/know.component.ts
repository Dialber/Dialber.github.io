import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-know',
  templateUrl: './know.component.html',
  styleUrls: ['./know.component.scss']
})
export class KnowComponent implements OnInit {

  number:string="02";
  title:string="Conocimientos";

  constructor() { }

  ngOnInit(): void {
  }

}
