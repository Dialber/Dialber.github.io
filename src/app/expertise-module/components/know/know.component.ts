import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/shared-module/models/data';

@Component({
  selector: 'app-know',
  templateUrl: './know.component.html',
  styleUrls: ['./know.component.scss']
})
export class KnowComponent implements OnInit {

  number:string="02";
  title:string="Conocimientos";
  list:Data[]=[];
  change:boolean=true;

  constructor() {
    this.list=[
      {title:"Advance SCC",value:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum maiores consectetur omnis facere labore quisquam officiis ipsam cumque sit ullam."},
      {title:"Angular",value:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum maiores consectetur omnis facere labore quisquam officiis ipsam cumque sit ullam."},
      {title:"Typescript",value:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum maiores consectetur omnis facere labore quisquam officiis ipsam cumque sit ullam."},
      {title:"Boostrap",value:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum maiores consectetur omnis facere labore quisquam officiis ipsam cumque sit ullam."}
      
    ]
   }

  ngOnInit(): void {
  }

  public Value(value:number):string{
    let param=value+=1;
    let result:string=param.toString();
    return "0"+result;
  }

}
