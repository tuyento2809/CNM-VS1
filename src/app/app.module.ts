import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from "../app/common/header/header.component";
import { FilmComponent } from "./film/film.component";

import { FilmModule } from "./film/film.module";
import { AuthModule } from "./auth/auth.module";
import { ManageModule } from "./manage/manage.module";
import { ManageComponent } from "./manage/manage.component";
import { ManageFilmComponent } from "./manage/manage-film/manage-film.component";
import { FooterComponent } from './common/footer/footer.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { ManageStaticModule } from "./manage-statistical/manage-statistical.module";





const routes: Routes=[
  { path:'', redirectTo: '/films',pathMatch: 'full'},

  
]

@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent, FooterComponent,     

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FilmModule,
    AuthModule,
    NgbModule,
    ManageModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,

    ManageStaticModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: false
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
