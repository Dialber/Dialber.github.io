import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-module-routing.module';
import { FormComponent } from './components/form/form.component';
import { SharedModule } from '../shared-module/shared.module';
import { FormMainComponent } from './components/form-main/form-main.component';
import { DataComponent } from './components/data/data.component';
import { MediaComponent } from './components/media/media.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormComponent,
    FormMainComponent,
    DataComponent,
    MediaComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    FormMainComponent
  ]
})
export class ContactModuleModule { }
