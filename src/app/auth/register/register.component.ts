import { Component, OnInit } from '@angular/core';
import { AuthService } from "../shared/auth.service";
import { Router } from "@angular/router";
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'bwm-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formData: any = {}
  errors: any[]=[];

  constructor(private auth: AuthService,
     private router: Router) { }

  ngOnInit() {
    this.formData={};
  }
  
  register(){
    this.auth.register(this.formData).subscribe(()=>{
      this.router.navigate(['/login',{registered:'success'}]);
      
    },(errResponse)=>{
      this.errors= errResponse.error.errors;

    })
    
  }

}


