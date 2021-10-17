import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuModuleRoutingModule } from './menu-module-routing.module';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    MenuModuleRoutingModule
  ],
  exports:[MenuComponent]
})
export class MenuModule { }
