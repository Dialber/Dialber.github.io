import { Component, OnInit } from '@angular/core';
import { ElementForm } from '../../models/element-form';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  list:ElementForm[]=[];

  constructor() {
    this.list=[{name:"nombre",type:"text"},{name:"correo",type:"text"},{name:"asunto",type:"text"}];
  }

  ngOnInit(): void {
  }

}
