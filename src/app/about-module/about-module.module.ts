import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-module-routing.module';
import { MainComponent } from './components/main/main.component';
import { SharedModule } from '../shared-module/shared.module';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule
  ],
  exports: [
    MainComponent
  ]
})
export class AboutModuleModule { }
