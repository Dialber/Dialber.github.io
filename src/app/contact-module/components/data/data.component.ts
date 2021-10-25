import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-datar',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
  encapsulation:ViewEncapsulation.ShadowDom
})
export class DataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
