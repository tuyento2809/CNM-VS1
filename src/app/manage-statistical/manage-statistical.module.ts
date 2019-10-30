import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgPipesModule } from "ngx-pipes";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";

import { ManageThongkeComponent } from "./manage-thongke/manage-thongke.component";
import { ManageStatisticalComponent } from "./manage-statistical.component";

import { FilmService } from "../film/shared/film.service";
import { AuthGuard } from "../auth/shared/auth.guard";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ChartsModule } from "@progress/kendo-angular-charts";


import 'hammerjs';

const routes: Routes=[
    {
        path: 'manageStatistical',component: ManageStatisticalComponent, 
        children:[
            { path: 'statistical', component: ManageThongkeComponent,  }
        ]
        
    }

]

@NgModule({
  declarations: [
      ManageThongkeComponent,
      ManageStatisticalComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BrowserAnimationsModule,
    ChartsModule

  ],
  providers: [
   FilmService
  ],
  exports: [RouterModule]
})
export class ManageStaticModule { }
