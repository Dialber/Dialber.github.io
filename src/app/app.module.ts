import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutModuleModule } from './about-module/about-module.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpertiseModule } from './expertise-module/expertise.module';
import { HeaderModule } from './header-module/header-module.module';
import { MenuModule } from './menu-module/menu-module.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    AboutModuleModule,
    MenuModule,
    ExpertiseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
