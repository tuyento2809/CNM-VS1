import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgPipesModule } from "ngx-pipes";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";

import { ManageComponent } from "./manage.component";
import { ManageFilmComponent } from "./manage-film/manage-film.component";

import { FilmService } from "../film/shared/film.service";
import { AuthGuard } from "../auth/shared/auth.guard";


const routes: Routes=[
    {
        path: 'manage',component: ManageComponent, 
        children:[
            { path: 'films', component: ManageFilmComponent,  },

        ]
        
    }

]

@NgModule({
  declarations: [
      ManageComponent,
      ManageFilmComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

  ],
  providers: [
   FilmService
  ],
  exports: [RouterModule]
})
export class ManageModule { }
