import { NgModule, Component } from "@angular/core"
import { CommonModule } from "@angular/common";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { NgPipesModule } from "ngx-pipes";
import { EditableModule } from "../common/components/editable/editable.module";

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ImageUploadModule } from "../common/components/image-upload/image-upload.module";
import { PaymentModule } from "../payment/payment.module";

import { FilmComponent } from './film.component';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmListItemComponent } from './film-list-item/film-list-item.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { FilmDetailBookingComponent } from './film-detail/film-detail-booking/film-detail-booking.component';
import { FilmSearchComponent } from './film-search/film-search.component';

import { FilmService } from "./shared/film.service";
import { RapService } from "../rap/shared/rap.service";
import { GheService } from "../ghe/shared/ghe.service";
import { VeService } from "../ve/shared/ve.service";
import { TheLoaiService } from "../theloai/shared/theloai.service";
import { ImageUploadService } from "../common/components/image-upload/image-upload.service";


import { AuthGuard } from '../auth/shared/auth.guard';
import { FilmCreateComponent } from './film-create/film-create.component';
import { FilmDetailBookingIdComponent } from './film-detail/film-detail-booking-id/film-detail-booking-id.component';
import { FilmUpdateComponent } from './film-update/film-update.component';

const routes: Routes = [
    {
        path: 'films', component: FilmComponent,
        children: [
            {
                path: '', component: FilmListComponent
            },
            {
                path: 'new', component: FilmCreateComponent,canActivate: [AuthGuard]
            },
            {
                path: ':id', component: FilmDetailComponent, canActivate: [AuthGuard]
            },
            {
                path: ':tenPhim/homes', component: FilmSearchComponent
            },
            {
                path: 'ves/:id', component: FilmDetailBookingIdComponent
            },
            {
                path: ':id/edit', component: FilmUpdateComponent
            }
        ]
    },

]

@NgModule({
    declarations: [
        NavBarComponent,
        FilmListComponent,
        FilmListItemComponent,
        FilmComponent,
        FilmDetailComponent,
        FilmDetailBookingComponent,
        FilmSearchComponent,
        FilmCreateComponent,
        FilmDetailBookingIdComponent,
        FilmUpdateComponent

    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        HttpClientModule,
        NgPipesModule,
        FormsModule,
        ReactiveFormsModule,
        ImageUploadModule,
        BrowserAnimationsModule,
        EditableModule,
        PaymentModule,
        ToastrModule.forRoot({
            timeOut: 10000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: false
          }),
        
    ],
    providers: [FilmService,
                RapService,
                GheService,
                VeService,
                TheLoaiService,
                ImageUploadService
               ]
})

export class FilmModule { }