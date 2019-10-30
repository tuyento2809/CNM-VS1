import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as moment from 'moment';

class DecodedToken {
  exp: number = 0;
  tenTaiKhoan: string = '';
}
const jwt = new JwtHelperService();

@Injectable()
export class AuthService {
  private decodedToken;

  constructor(private http: HttpClient) {
    this.decodedToken = JSON.parse(localStorage.getItem('bwm_meta')) || new DecodedToken();
  }

  // hàm lưu token 
  private saveToken(token: string): string {
    this.decodedToken = jwt.decodeToken(token);
    localStorage.setItem('bwm_auth', token);
    localStorage.setItem('bwm_meta', JSON.stringify(this.decodedToken));
    return token;
  }

  private getExpiration() {
    return moment.unix(this.decodedToken.exp);
  }

  // hàm đăng ký
  public register(taiKhoanData: any): Observable<any> {
    return this.http.post(environment.API_URL + '/api/v1/taikhoans/register', taiKhoanData);

  }

  // hàm đăng nhập
  public login(taiKhoanData: any): Observable<string> {
    return this.http.post(environment.API_URL + '/api/v1/taikhoans/auth',
      taiKhoanData).pipe(map(
        (token: string) => {

          return this.saveToken(token)
        }
      ));

  }

  // hàm đăng xuất
  public logout() {
    localStorage.removeItem('bwm_auth');
    localStorage.removeItem('bwm_meta');

    this.decodedToken = new DecodedToken();
  }

  // hàm hiển thị nút đăng nhập và đăng kí thông qua token
  public isAuthenticated(): boolean {
    return moment().isBefore(this.getExpiration());
  }

  // ben file token.intterceptor.ts sử dụng
  public getauthToken(): string {
    return localStorage.getItem('bwm_auth');
  }

  // hàm hiển thị tên người dùng sau khi đăng nhập
  public getUsername(): string {
    return this.decodedToken.tenTaiKhoan;
  }

// sau khi đăng nhập thành công thì kiểm tra xem , 
// nếu đăng nhập = nhân viên mới hiển thị chức năng thêm nhân viên
  public hienThiChucNangNhanVien(){
    if(this.getUsername){
      if(this.decodedToken.tenTaiKhoan=="nhanvien"){
        return this.decodedToken.tenTaiKhoan;
      }
    }
  }

  // hiển thị chức năng quản lý
  public hienThiChucNangQuanLy(){
    if(this.getUsername){
      if(this.decodedToken.tenTaiKhoan=="quanly"){
        return this.decodedToken.tenTaiKhoan;
      }
    }
  }

}