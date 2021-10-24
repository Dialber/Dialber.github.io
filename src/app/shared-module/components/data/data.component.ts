import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Data } from '../../models/data';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
  encapsulation:ViewEncapsulation.ShadowDom
})
export class DataComponent implements OnInit {

 list:Data[]=[]

  constructor() {
    this.list=[{title:"Localización",value:"Habana,Cuba"},{title:"Teléfono",value:"+5354061336"},{title:"Correo",value:"dialberob@gmail.com"}]
   }

  ngOnInit(): void {
  }

}
