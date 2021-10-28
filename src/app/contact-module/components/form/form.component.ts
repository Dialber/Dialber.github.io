import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ElementForm } from '../../models/element-form';
import { errosRegister } from '../../models/message-errors';
import { SendFormService } from '../../services/send-form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers:[SendFormService]
})
export class FormComponent implements OnInit {

  
  list:ElementForm[]=[];
  myForm :FormGroup | undefined;
  

  constructor( private sendFormService:SendFormService) {
    this.list=[{name:"nombre",type:"text"},{name:"correo",type:"text"},{name:"asunto",type:"text"}];
  }

  ngOnInit(): void {
    this.InitForm();
  }
  
  InitForm():void{
    this.myForm= new FormGroup({
      name : new FormControl('',Validators.required),
      email : new FormControl('',[Validators.email,Validators.required]),
      subject : new FormControl('',Validators.required),
      message : new FormControl('')
    });
  }
  public Senddata(event:Event):void{
    this.sendFormService.sendEmail(event);   
  }
  getError(controlName:string):string{
    const control=this.myForm?.get(controlName);
    if(control?.invalid){
     const messageErrors=errosRegister.find(x=>(x.formControlName==controlName))
     const validators=messageErrors!.validators.find(element=>control.errors![element.name])
     return validators!.message;
    }
    return"";
  }
  getControl(controlName:string):boolean | undefined{
    if(this.myForm?.get(controlName)?.invalid && this.myForm?.get(controlName)?.dirty){
      return true;
    }
    return false;
  }
}
