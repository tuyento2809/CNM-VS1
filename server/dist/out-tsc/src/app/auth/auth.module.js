import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from "./shared/auth.service";
const routes = [
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'register', component: RegisterComponent
    }
];
let AuthModule = class AuthModule {
};
AuthModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            LoginComponent,
            RegisterComponent
        ],
        imports: [
            RouterModule.forChild(routes),
            FormsModule,
            CommonModule,
            ReactiveFormsModule
        ],
        providers: [
            AuthService
        ]
    })
], AuthModule);
export { AuthModule };
//# sourceMappingURL=auth.module.js.map