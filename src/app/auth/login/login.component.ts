import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from "@angular/forms";
import { AuthService } from "../shared/auth.service";
import { Router,ActivatedRoute } from "@angular/router";

@Component({
  selector: 'bwm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errors: any[] = [];
  notifyMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.initForm();

    this.route.params.subscribe((params)=>{
      if(params['registered'] === 'success'){
        this.notifyMessage= 'Bạn đã đăng ký thành công, bạn có thể đăng nhập bây giờ!'
      }
    })
  }

  initForm(){
    this.loginForm= this.fb.group({
      email:['',[Validators.required, 
                Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]],
      password:['',Validators.required]
    })
  }

  isInvalidForm(fieldName): boolean{
    return this.loginForm.controls[fieldName].invalid && 
    (this.loginForm.controls[fieldName].dirty || this.loginForm.controls[fieldName].touched)
  }

  isRequired(fieldName): boolean{
    return this.loginForm.controls[fieldName].errors.required;
  }

  login(){
    console.log(this.loginForm);
    
    this.auth.login(this.loginForm.value).subscribe(
      (token)=>{
        // đăng nhập thành công = quanly sẽ đưa tới 
       
        if(this.loginForm.value.email === "quanly@gmail.com" && this.loginForm.value.password === "12345"){
          console.log(this.loginForm.value.email);
          
          this.router.navigate(['/manageStatistical/statistical']);
        }
        // đăng nhập thành công = nhanvien sẽ đưa tới giao dien them film
        else if(this.loginForm.value.email === 'nhanvien@gmail.com' && this.loginForm.value.password ==='12345'){
          this.router.navigate(['/films/new']);
        }

        // đăng nhập thành công sẽ đưa đến trang nào bạn muốn
        else{
          this.router.navigate(['/films']);
        }

      },
      (errResponse)=>{
        this.errors= errResponse.error.errors;

    });

  }


}
