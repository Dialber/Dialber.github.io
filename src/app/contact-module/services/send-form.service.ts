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
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }
 /*  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target as HTMLFormElement, 'YOUR_USER_ID')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  } */
}
/**
 * 
 * <form class="contact-form" (submit)="sendEmail($event)">
    <label>Name</label>
    <input type="text" name="user_name">
    <label>Email</label>
    <input type="email" name="user_email">
    <label>Message</label>
    <textarea name="message"></textarea>
    <input type="submit" value="Send">
</form>

If you use FormsModule, then you should use the ngSubmit listener without preventDefault method
 * 
 * 
 */