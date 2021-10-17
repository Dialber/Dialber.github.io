import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SocialMediaComponent } from './components/social-media/social-media.component';


@NgModule({
  declarations: [
    SocialMediaComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
