import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MenuModule } from '../menu-module/menu-module.module';
import { SharedModule } from '../shared-module/shared.module';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MenuModule,
    SharedModule
  ],
  exports:[HeaderComponent]
})
export class HeaderModule { }
