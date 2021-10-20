import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { ArticleTitleComponent } from './components/article-title/article-title.component';
import { DataComponent } from './components/data/data.component';


@NgModule({
  declarations: [
    SocialMediaComponent,
    ArticleTitleComponent,
    DataComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[SocialMediaComponent,ArticleTitleComponent, DataComponent]
})
export class SharedModule { }
