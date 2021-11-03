import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';


@Injectable()
export class SendFormService {

  private services_id:string="gmail";
  private template_id:string="template_rgjzltr";
  private user_id:string="user_nRzsBdYQolgdhvvi6KuA5";

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