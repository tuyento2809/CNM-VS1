import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
//import * as moment from 'moment';
class DecodedToken {
    constructor() {
        this.exp = 0;
        this.tenTaiKhoan = '';
    }
}
const jwt = new JwtHelperService();
let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
    }
    register(taiKhoanData) {
        return this.http.post(environment.API_URL + '/api/v1/taikhoans/register', taiKhoanData);
    }
    login(taiKhoanData) {
        return this.http.post(environment.API_URL + '/api/v1/taikhoans/auth', taiKhoanData).pipe(map((token) => {
            return this.saveToken(token);
        }));
    }
    // public logout(){
    //   localStorage.removeItem('bwm_auth');
    // }
    // public isAuthenticated(): boolean{
    //   return moment().isBefore();
    // }
    saveToken(token) {
        // jwt.decode
        this.decodedToken = jwt.decodeToken(token);
        localStorage.setItem('bwm_auth', token);
        localStorage.setItem('bwm_meta', JSON.stringify(this.decodedToken));
        return token;
    }
};
AuthService = tslib_1.__decorate([
    Injectable()
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map