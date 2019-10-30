import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from "../app/common/header/header.component";
import { RouterModule } from '@angular/router';
import { FilmModule } from "./film/film.module";
import { AuthModule } from "./auth/auth.module";
const routes = [
    { path: '', redirectTo: '/films', pathMatch: 'full' },
];
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            AppComponent,
            HeaderComponent,
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            RouterModule.forRoot(routes),
            FilmModule,
            AuthModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map