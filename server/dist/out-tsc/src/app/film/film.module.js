import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { NgPipesModule } from "ngx-pipes";
import { FilmComponent } from './film.component';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmListItemComponent } from './film-list-item/film-list-item.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FilmService } from "./shared/film.service";
import { FilmDetailComponent } from './film-detail/film-detail.component';
const routes = [
    {
        path: 'films', component: FilmComponent,
        children: [
            {
                path: '', component: FilmListComponent
            },
            {
                path: ':id', component: FilmDetailComponent
            }
        ]
    },
];
let FilmModule = class FilmModule {
};
FilmModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            NavBarComponent,
            FilmListComponent,
            FilmListItemComponent,
            FilmComponent,
            FilmDetailComponent
        ],
        imports: [
            CommonModule,
            RouterModule.forChild(routes),
            HttpClientModule,
            NgPipesModule
        ],
        providers: [FilmService]
    })
], FilmModule);
export { FilmModule };
//# sourceMappingURL=film.module.js.map