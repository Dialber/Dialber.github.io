import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutModuleModule } from './about-module/about-module.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactModuleModule } from './contact-module/contact-module.module';
import { ExpertiseModule } from './expertise-module/expertise.module';
import { HeaderModule } from './header-module/header-module.module';
import { MenuModule } from './menu-module/menu-module.module';
import { ProjectsModuleModule } from './projects-module/projects-module.module';
import { SkillsModuleModule } from './skills-module/skills-module.module';

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
    ExpertiseModule,
    SkillsModuleModule,
    ProjectsModuleModule,
    ContactModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
