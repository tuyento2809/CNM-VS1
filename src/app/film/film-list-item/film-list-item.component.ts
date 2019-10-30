import { Component, OnInit, Input } from '@angular/core';
import {AuthService  } from "../../auth/shared/auth.service";

@Component({
  selector: 'bwm-film-list-item',
  templateUrl: './film-list-item.component.html',
  styleUrls: ['./film-list-item.component.scss']
})
export class FilmListItemComponent implements OnInit {

  @Input()
  film: any;

  constructor(private auth: AuthService,) { }

  ngOnInit() {
  }
  kiemTraNguoiDangNhap(){
    if(this.auth.getUsername()==="nhanvien"){
      return true;
    }else{
      return false;
    }
  }

}
