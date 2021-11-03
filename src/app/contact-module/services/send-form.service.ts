import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { environment } from 'src/environments/environment.prod';



@Injectable()
export class SendFormService {

  private services_id:string=environment.services_id;
  private template_id:string=environment.template_id;
  private user_id:string=environment.user_id;

  constructor() { }

  public sendEmail(e: Event) {
    emailjs.sendForm(this.services_id, this.template_id, e.target as HTMLFormElement, this.user_id)
      .then((result: EmailJSResponseStatus) => {
        alert("Datos enviados");
      }, (error) => {
        alert("Error al enviar los datos"+ error.text);
      });
  }
}