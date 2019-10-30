import { Component, OnInit } from "@angular/core";
import {AuthService  } from "../../auth/shared/auth.service";
import { Route, Router } from "@angular/router";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['../header/header.component.scss']
  })
  export class HeaderComponent implements OnInit {
  
    constructor(public auth: AuthService,
                private router: Router
      ) { }
  
    ngOnInit() {
    }

    logout(){
      this.auth.logout();
      this.router.navigate(['/login']);
    }
    
    //tim kiem
    search(tenPhim: string,event: Event){
      //event.preventDefault();

    //  this.router.navigateByUrl(`/films/${tenPhim}/homes`)
     tenPhim ? this.router.navigate([`/films/${tenPhim}/homes`]) : this.router.navigate(['/films']);
     return false
    }
  
  }
  


