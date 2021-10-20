import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  number:string="01";
  title:string="Acerca de mi";
  constructor() { 

  }

  ngOnInit(): void {
  }

}
