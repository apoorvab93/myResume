import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { AcademicsComponent } from "./academics/academics.component";
import { SkillsComponent } from "./skills/SkillsComponent";
import { HonorsComponent } from "./honors/HonorsComponent";
import { ProfessionalComponent } from "./professional/ProfessionalComponent";
import { AbilityComponent } from './abilities/ability.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    AcademicsComponent,
    HonorsComponent,
    SkillsComponent,
    ProfessionalComponent,
    AbilityComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
        { path: '', component: HomeComponent, pathMatch: 'full' },
        { path: 'home', component: HomeComponent },
        { path: 'academics', component: AcademicsComponent },
      { path: 'honors', component: HonorsComponent },
      { path: 'skills', component: AbilityComponent },
      { path: 'professional', component: ProfessionalComponent },
      { path: 'ability', component: AbilityComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
