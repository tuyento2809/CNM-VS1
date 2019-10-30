import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Validators } from "@angular/forms";
let LoginComponent = class LoginComponent {
    constructor(fb, auth, router, route) {
        this.fb = fb;
        this.auth = auth;
        this.router = router;
        this.route = route;
        this.errors = [];
        this.notifyMessage = '';
    }
    ngOnInit() {
        this.initForm();
        this.route.params.subscribe((params) => {
            if (params['registered'] === 'success') {
                this.notifyMessage = 'Bạn đã đăng ký thành công, bạn có thể đăng nhập bây giờ!';
            }
        });
    }
    initForm() {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required,
                    Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]],
            password: ['', Validators.required]
        });
    }
    isInvalidForm(fieldName) {
        return this.loginForm.controls[fieldName].invalid &&
            (this.loginForm.controls[fieldName].dirty || this.loginForm.controls[fieldName].touched);
    }
    isRequired(fieldName) {
        return this.loginForm.controls[fieldName].errors.required;
    }
    login() {
        console.log(this.loginForm);
        this.auth.login(this.loginForm.value).subscribe((token) => {
            // đăng nhập thành công = quanly sẽ đưa tới 
            if (this.loginForm.value.email == 'quanly@gmail.com' && this.loginForm.value.password == '12345') {
                this.router.navigate(['/register']);
            }
            // đăng nhập thành công sẽ đưa đến trang nào bạn muốn
            else {
                this.router.navigate(['/films']);
            }
        }, (errResponse) => {
            this.errors = errResponse.error.errors;
        });
    }
};
LoginComponent = tslib_1.__decorate([
    Component({
        selector: 'bwm-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map