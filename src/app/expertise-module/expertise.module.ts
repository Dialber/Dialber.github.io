import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpertiseRoutingModule } from './expertise-routing.module';
import { KnowComponent } from './components/know/know.component';
import { SharedModule } from '../shared-module/shared.module';


@NgModule({
  declarations: [
    KnowComponent
  ],
  imports: [
    CommonModule,
    ExpertiseRoutingModule,
    SharedModule
  ],
  exports:[KnowComponent]
})
export class ExpertiseModule { }
