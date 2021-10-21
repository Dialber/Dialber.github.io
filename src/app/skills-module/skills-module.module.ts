import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsRoutingModule} from './skills-module-routing.module';
import { SkillsComponent } from './components/skills/skills.component';
import { ElementSkillComponent } from './components/element-skill/element-skill.component';
import { SharedModule } from '../shared-module/shared.module';


@NgModule({
  declarations: [
    SkillsComponent,
    ElementSkillComponent
  ],
  imports: [
    CommonModule,
    SkillsRoutingModule,
    SharedModule
  ],
  exports: [
    SkillsComponent
  ]
})
export class SkillsModuleModule { }
