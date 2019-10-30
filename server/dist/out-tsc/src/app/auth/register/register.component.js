import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let RegisterComponent = class RegisterComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
        this.formData = {};
        this.errors = [];
    }
    ngOnInit() {
        this.formData = {};
    }
    register() {
        this.auth.register(this.formData).subscribe(() => {
            this.router.navigate(['/login', { registered: 'success' }]);
        }, (errResponse) => {
            this.errors = errResponse.error.errors;
        });
    }
};
RegisterComponent = tslib_1.__decorate([
    Component({
        selector: 'bwm-register',
        templateUrl: './register.component.html',
        styleUrls: ['./register.component.css']
    })
], RegisterComponent);
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map