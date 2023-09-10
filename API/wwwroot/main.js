(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\Users\Andrew\Projects\fastflashcards\client-spa\src\main.ts */"zUnb");


/***/ }),

/***/ "0STe":
/*!******************************************************************************************************!*\
  !*** ./src/app/_components/pages/login/send-verification-email/send-verification-email.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: SendVerificationEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendVerificationEmailComponent", function() { return SendVerificationEmailComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/account.service */ "5ZPe");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");







function SendVerificationEmailComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter an email. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SendVerificationEmailComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Requires at least 3 characters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SendVerificationEmailComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Has a max length of 40 characters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SendVerificationEmailComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter a valid email address. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class SendVerificationEmailComponent {
    constructor(_fb, _accountService, _router, _titleService) {
        this._fb = _fb;
        this._accountService = _accountService;
        this._router = _router;
        this._titleService = _titleService;
        this.validationErrors = [];
        this.errors = {
            email: false,
        };
    }
    ngOnInit() {
        this._titleService.setTitle(`Request Verification Email | FastFlashCards.com`);
        this.initializeForm();
    }
    initializeForm() {
        this.requestVerificationEmailForm = this._fb.group({
            email: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(40),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email,
                ],
            ],
        });
    }
    requestEmailHandler() {
        this._accountService
            .requestVerificationEmail(this.requestVerificationEmailForm.get('email').value)
            .subscribe((response) => {
            this._router.navigateByUrl('/login/verification-email-success');
        }, (error) => {
            console.error(error);
        });
    }
}
SendVerificationEmailComponent.ɵfac = function SendVerificationEmailComponent_Factory(t) { return new (t || SendVerificationEmailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"])); };
SendVerificationEmailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SendVerificationEmailComponent, selectors: [["app-send-verification-email"]], decls: 14, vars: 8, consts: [[1, "container", "m-nav"], [1, "pt-3"], [1, "col-md-4", "mt-4", "requestVerificationEmailForm", 3, "formGroup", "ngSubmit"], [1, "form-group", "mb-3"], ["for", "email"], ["type", "email", "name", "email", "formControlName", "email", 1, "form-control", "mr-sm-2"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-warning", 3, "disabled"], [1, "invalid-feedback"]], template: function SendVerificationEmailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Request Verification Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SendVerificationEmailComponent_Template_form_ngSubmit_3_listener() { return ctx.requestVerificationEmailForm.valid && ctx.requestEmailHandler(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, SendVerificationEmailComponent_div_8_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, SendVerificationEmailComponent_div_9_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, SendVerificationEmailComponent_div_10_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, SendVerificationEmailComponent_div_11_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Request verification email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.requestVerificationEmailForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.requestVerificationEmailForm.get("email").errors && ctx.requestVerificationEmailForm.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.requestVerificationEmailForm.get("email").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.requestVerificationEmailForm.get("email").hasError("minlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.requestVerificationEmailForm.get("email").hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.requestVerificationEmailForm.get("email").hasError("email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.requestVerificationEmailForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".requestVerificationEmailForm[_ngcontent-%COMP%] {\r\n  max-width: 25rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbmQtdmVyaWZpY2F0aW9uLWVtYWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic2VuZC12ZXJpZmljYXRpb24tZW1haWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXF1ZXN0VmVyaWZpY2F0aW9uRW1haWxGb3JtIHtcclxuICBtYXgtd2lkdGg6IDI1cmVtO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "1aVU":
/*!********************************************************!*\
  !*** ./src/app/_components/navbar/navbar.component.ts ***!
  \********************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/account.service */ "5ZPe");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_services_deck_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/deck.service */ "ekfe");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _directives_has_claim_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_directives/has-claim.directive */ "vXBT");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "FE24");








function NavbarComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "svg", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "path", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "path", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "path", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "path", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "path", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "path", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "path", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "path", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/user/decks"]; };
function NavbarComponent_ul_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "svg", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "path", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "path", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "path", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "path", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "path", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "path", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "path", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "path", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Decks");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "svg", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "path", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "path", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "path", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Add Cards");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "svg", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "path", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "path", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "path", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Edit Cards");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("routerLink", ctx_r1.deckId ? "/user/add-cards/" + ctx_r1.deckId : "/user/add-cards/");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("routerLink", ctx_r1.deckId ? "/user/edit-cards/" + ctx_r1.deckId : "/user/edit-cards/");
} }
function NavbarComponent_ul_19_a_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c1 = function () { return ["IsAdmin"]; };
function NavbarComponent_ul_19_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Decks");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "li", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Add Cards");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Edit Cards");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Account Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_ul_19_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, NavbarComponent_ul_19_a_17_Template, 2, 0, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("routerLink", ctx_r2.deckId ? "/user/add-cards/" + ctx_r2.deckId : "/user/add-cards/");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("routerLink", ctx_r2.deckId ? "/user/edit-cards/" + ctx_r2.deckId : "/user/edit-cards/");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("appHasClaim", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c1));
} }
function NavbarComponent_div_21_ul_4_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Account Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "li", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_div_21_ul_4_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r12.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NavbarComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, NavbarComponent_div_21_ul_4_Template, 8, 0, "ul", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r10 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", user_r10.email, " ");
} }
const _c2 = function () { return ["/register"]; };
const _c3 = function () { return ["/login"]; };
function NavbarComponent_ul_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "li", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c3));
} }
class NavbarComponent {
    constructor(_accountService, _router, _route, _deckService) {
        this._accountService = _accountService;
        this._router = _router;
        this._route = _route;
        this._deckService = _deckService;
    }
    ngOnInit() {
        // this.deckId = parseInt(this._route.snapshot.paramMap.get('id'));
        this.getCurrentDeckId();
        this._accountService.currentUser$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1)).subscribe((user) => {
            this.currentUser = user;
        });
    }
    getCurrentDeckId() {
        this._deckService.currentDeckId$.subscribe((deckId) => {
            this.deckId = deckId;
        });
    }
    logout() {
        this._accountService.logout();
        this.deckId = null;
        this._router.navigateByUrl('/');
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_deck_service__WEBPACK_IMPORTED_MODULE_4__["DeckService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 25, vars: 15, consts: [[1, "navbar", "navbar-expand-md", "navbar-dark", "fixed-top", "colorPrimary"], [1, "container"], ["class", "navbar-nav d-md-none", 4, "ngIf"], ["class", "mobileUL", 4, "ngIf"], ["routerLink", "/", 1, "navbar-brand"], ["width", "50", "height", "40", "viewBox", "0 0 74 44", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M44.7979 29.6829L10.5324 35.7249C8.42915 36.0957 6.42688 34.4769 6.02051 32.1723L2.74358 13.5879C2.32856 11.2342 3.70888 9.06953 5.76832 8.70639L40.0338 2.66446C42.1371 2.2936 44.1394 3.91238 44.5457 6.21704L47.814 24.7524C48.229 27.1061 46.9012 29.3121 44.7979 29.6829Z", "fill", "#253544"], ["d", "M44.7979 29.6829L10.5324 35.7249C8.42915 36.0957 6.42688 34.4769 6.02051 32.1723L2.74358 13.5879C2.32856 11.2342 3.70888 9.06953 5.76832 8.70639L40.0338 2.66446C42.1371 2.2936 44.1394 3.91238 44.5457 6.21704L47.814 24.7524C48.229 27.1061 46.9012 29.3121 44.7979 29.6829Z", "stroke", "white", "stroke-width", "2", "stroke-miterlimit", "10", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M55.1147 42.3764H20.3206C18.1849 42.3764 16.4941 40.4345 16.4941 38.0943V19.2233C16.4941 16.8333 18.2294 14.9412 20.3206 14.9412H55.1147C57.2504 14.9412 58.9411 16.883 58.9411 19.2233V38.0445C58.9411 40.4345 57.2504 42.3764 55.1147 42.3764Z", "fill", "#253544"], ["d", "M55.1147 42.3764H20.3206C18.1849 42.3764 16.4941 40.4345 16.4941 38.0943V19.2233C16.4941 16.8333 18.2294 14.9412 20.3206 14.9412H55.1147C57.2504 14.9412 58.9411 16.883 58.9411 19.2233V38.0445C58.9411 40.4345 57.2504 42.3764 55.1147 42.3764Z", "stroke", "white", "stroke-width", "2", "stroke-miterlimit", "10", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M62.657 40.5176L28.6232 33.2835C26.8581 32.9083 25.7145 30.9685 26.1558 28.8924L30.0793 10.4337C30.5293 8.31673 32.3908 7.05845 34.1194 7.42587L68.1532 14.66C69.9184 15.0352 71.0619 16.975 70.6206 19.051L66.7075 37.461C66.255 39.5896 64.4188 40.892 62.657 40.5176Z", "fill", "#253544", "stroke", "black"], ["d", "M62.5531 41.0066L28.5193 33.7725C26.4303 33.3285 25.1802 31.0775 25.6667 28.7885L29.5903 10.3298C30.0872 7.99198 32.1779 6.50201 34.2234 6.9368L68.2572 14.1709C70.3462 14.6149 71.5963 16.8659 71.1097 19.155L67.1965 37.565C66.6996 39.9028 64.6421 41.4507 62.5531 41.0066Z", "stroke", "white", "stroke-width", "2", "stroke-miterlimit", "10", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M38.6509 17.5405L53.8409 20.7693", "stroke", "white", "stroke-width", "2", "stroke-miterlimit", "10", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M37.6096 22.439L47.6764 24.5787", "stroke", "white", "stroke-width", "2", "stroke-miterlimit", "10", "stroke-linecap", "round", "stroke-linejoin", "round"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarCollapse", "aria-controls", "navbarCollapse", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "collapsed"], [1, "navbar-toggler-icon"], ["id", "navbarCollapse", 1, "collapse", "navbar-collapse"], ["class", "navbar-nav me-auto collapseNavbarNav", 4, "ngIf"], ["class", "btn-group hideItemMobile", "dropdown", "", 4, "ngIf"], ["class", "navbar-nav collapseNavbarNav", 4, "ngIf"], [1, "navbar-nav", "d-md-none"], ["routerLink", "/", 1, "navbar-brand-mobile"], [1, "mobileUL"], [1, "liItem"], [1, "d-flex", "flex-column", "align-items-center", "justify-content-between", "link", 3, "routerLink"], ["width", "25", "height", "18", "viewBox", "0 0 25 18", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M17.457 12.6907H2.63053C1.72046 12.6907 1 11.8632 1 10.866L1 2.82468C1 1.80626 1.73942 1 2.63053 1L17.457 1C18.367 1 19.0875 1.82747 19.0875 2.82468V10.8448C19.0875 11.8632 18.367 12.6907 17.457 12.6907Z", "fill", "#253544"], ["d", "M17.457 12.6907H2.63053C1.72046 12.6907 1 11.8632 1 10.866L1 2.82468C1 1.80626 1.73942 1 2.63053 1L17.457 1C18.367 1 19.0875 1.82747 19.0875 2.82468V10.8448C19.0875 11.8632 18.367 12.6907 17.457 12.6907Z", "stroke", "white", "stroke-miterlimit", "10", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M19.5876 14.8213H4.76114C3.85108 14.8213 3.13062 13.9938 3.13062 12.9966V4.9553C3.13062 3.93687 3.87004 3.13062 4.76114 3.13062H19.5876C20.4977 3.13062 21.2181 3.95809 21.2181 4.9553V12.9754C21.2181 13.9938 20.4977 14.8213 19.5876 14.8213Z", "fill", "#253544"], ["d", "M19.5876 14.8213H4.76114C3.85108 14.8213 3.13062 13.9938 3.13062 12.9966V4.9553C3.13062 3.93687 3.87004 3.13062 4.76114 3.13062H19.5876C20.4977 3.13062 21.2181 3.95809 21.2181 4.9553V12.9754C21.2181 13.9938 20.4977 14.8213 19.5876 14.8213Z", "stroke", "white", "stroke-miterlimit", "10", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M21.8836 16.5H7.05716C6.47819 16.5 5.92664 15.9548 5.92664 15.1753V7.13401C5.92664 6.34131 6.49006 5.80933 7.05716 5.80933H21.8836C22.4626 5.80933 23.0141 6.35459 23.0141 7.13401V15.1541C23.0141 15.9587 22.4591 16.5 21.8836 16.5Z", "fill", "#253544", "stroke", "black"], ["d", "M21.8836 17H7.05716C6.1471 17 5.42664 16.1726 5.42664 15.1753V7.13401C5.42664 6.11558 6.16606 5.30933 7.05716 5.30933H21.8836C22.7937 5.30933 23.5141 6.1368 23.5141 7.13401V15.1541C23.5141 16.1726 22.7937 17 21.8836 17Z", "stroke", "white", "stroke-miterlimit", "10", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M10.027 9.07886H16.6444", "stroke", "white", "stroke-miterlimit", "10", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M10.0269 11.2128H14.4124", "stroke", "white", "stroke-miterlimit", "10", "stroke-linecap", "round", "stroke-linejoin", "round"], ["width", "27", "height", "18", "viewBox", "0 0 27 18", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M23.5232 16.5H3.23155C2.31712 16.5 1.5 15.6497 1.5 14.5027V3.49728C1.5 2.32917 2.33598 1.5 3.23155 1.5H23.5232C24.4376 1.5 25.2547 2.35028 25.2547 3.49728V14.4737C25.2547 15.6537 24.4341 16.5 23.5232 16.5Z", "fill", "#253544", "stroke", "black"], ["d", "M23.5232 17H3.23155C1.98603 17 1 15.8675 1 14.5027V3.49728C1 2.10345 2.01198 1 3.23155 1H23.5232C24.7687 1 25.7547 2.13249 25.7547 3.49728V14.4737C25.7547 15.8675 24.7687 17 23.5232 17Z", "stroke", "white", "stroke-miterlimit", "10", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M13.6038 9.09888H10.1046M13.6038 5.59973V9.09888V5.59973ZM13.6038 9.09888V12.598V9.09888ZM13.6038 9.09888H17.1029H13.6038Z", "stroke", "white", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M15.7819 5.23769L17.7424 7.19817L15.7819 5.23769ZM16.6135 4.40603C16.8735 4.14605 17.2261 4 17.5938 4C17.9614 4 18.314 4.14605 18.574 4.40603C18.834 4.66601 18.98 5.01861 18.98 5.38627C18.98 5.75394 18.834 6.10654 18.574 6.36652L10.9405 14H9V12.0196L16.6135 4.40603V4.40603Z", "stroke", "white", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "navbar-nav", "me-auto", "collapseNavbarNav"], [1, "nav-item"], ["routerLinkActive", "router-link-active", 1, "nav-link", "hideItemMobile", 3, "routerLink"], [1, "nav-item", "hideItemMedium"], ["data-toggle", "collapse", "data-target", "#navbarCollapse", "routerLink", "/user/account-settings", "routerLinkActive", "router-link-active", 1, "nav-link"], ["data-toggle", "collapse", "data-target", "#navbarCollapse", 1, "mobileCollapseBtn", 3, "click"], ["class", "nav-link", "routerLink", "/admin", "routerLinkActive", "router-link-active", 4, "appHasClaim"], ["routerLink", "/admin", "routerLinkActive", "router-link-active", 1, "nav-link"], ["dropdown", "", 1, "btn-group", "hideItemMobile"], ["id", "button-basic", "dropdownToggle", "", "type", "button", "aria-controls", "dropdown-basic", 1, "dropdown-toggle", "userBtn"], [1, "caret"], ["id", "dropdown-basic", "class", "dropdown-menu dropdown-menu-right", "role", "menu", "aria-labelledby", "button-basic", 4, "dropdownMenu"], ["id", "dropdown-basic", "role", "menu", "aria-labelledby", "button-basic", 1, "dropdown-menu", "dropdown-menu-right"], ["role", "menuitem"], ["routerLink", "/user/account-settings", 1, "dropdown-item"], [1, "divider", "dropdown-divider"], [1, "dropdown-item", 3, "click"], [1, "navbar-nav", "collapseNavbarNav"], ["data-toggle", "collapse", "data-target", "#navbarCollapse", "routerLinkActive", "router-link-active", 1, "nav-link", 3, "routerLink"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NavbarComponent_div_2_Template, 11, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, NavbarComponent_ul_4_Template, 30, 4, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, NavbarComponent_ul_19_Template, 18, 6, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, NavbarComponent_div_21_Template, 5, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, NavbarComponent_ul_23_Template, 7, 4, "ul", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 5, ctx._accountService.currentUser$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 7, ctx._accountService.currentUser$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 9, ctx._accountService.currentUser$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 11, ctx._accountService.currentUser$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 13, ctx._accountService.currentUser$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _directives_has_claim_directive__WEBPACK_IMPORTED_MODULE_6__["HasClaimDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__["BsDropdownDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__["BsDropdownToggleDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__["BsDropdownMenuDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: [".collapsing[_ngcontent-%COMP%] {\r\n  transition: none !important;\r\n}\r\n\r\n.colorPrimary[_ngcontent-%COMP%] {\r\n  background-color: #253544;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%] {\r\n  padding-top: 0.5rem;\r\n  padding-bottom: 0.5rem;\r\n}\r\n\r\n.emailNavLink[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  padding: 0.5rem 2rem;\r\n  display: block;\r\n}\r\n\r\n.logoutNavLink[_ngcontent-%COMP%]:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.userBtn[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  border: none;\r\n  color: #fff;\r\n}\r\n\r\n.userBtn[_ngcontent-%COMP%]:hover {\r\n  color: #18bc9c;\r\n}\r\n\r\n\r\n\r\n.mobileUL[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  padding-left: 0rem;\r\n  margin-bottom: 0rem;\r\n  display: none;\r\n}\r\n\r\n.liItem[_ngcontent-%COMP%] {\r\n  margin-right: 1.8rem;\r\n}\r\n\r\n.link[_ngcontent-%COMP%] {\r\n  color: white;\r\n  height: 100%;\r\n  text-decoration: none;\r\n}\r\n\r\n.editCardsSVG[_ngcontent-%COMP%] {\r\n  margin-top: -4px;\r\n}\r\n\r\n.hideItemMedium[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.mobileCollapseBtn[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  border: none;\r\n  color: #fff;\r\n}\r\n\r\n.mobileCollapseBtn[_ngcontent-%COMP%]:hover {\r\n  color: #18bc9c;\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n  .navbar-brand[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  .mobileUL[_ngcontent-%COMP%] {\r\n    display: flex;\r\n  }\r\n\r\n  .hideItemMobile[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  .hideItemMedium[_ngcontent-%COMP%] {\r\n    display: unset;\r\n  }\r\n\r\n  .collapseNavbarNav[_ngcontent-%COMP%] {\r\n    margin-top: 1rem;\r\n    text-align: right;\r\n    font-size: 1rem;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUEsa0JBQWtCOztBQUNsQjtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixlQUFlO0VBQ2pCO0FBQ0YiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sbGFwc2luZyB7XHJcbiAgdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY29sb3JQcmltYXJ5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUzNTQ0O1xyXG59XHJcblxyXG4ubmF2YmFyIHtcclxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XHJcbn1cclxuXHJcbi5lbWFpbE5hdkxpbmsge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ubG9nb3V0TmF2TGluazpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udXNlckJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4udXNlckJ0bjpob3ZlciB7XHJcbiAgY29sb3I6ICMxOGJjOWM7XHJcbn1cclxuXHJcbi8qIG1vYmlsZSBzdHlsZXMgKi9cclxuLm1vYmlsZVVMIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHBhZGRpbmctbGVmdDogMHJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwcmVtO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5saUl0ZW0ge1xyXG4gIG1hcmdpbi1yaWdodDogMS44cmVtO1xyXG59XHJcblxyXG4ubGluayB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5lZGl0Q2FyZHNTVkcge1xyXG4gIG1hcmdpbi10b3A6IC00cHg7XHJcbn1cclxuXHJcbi5oaWRlSXRlbU1lZGl1bSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLm1vYmlsZUNvbGxhcHNlQnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5tb2JpbGVDb2xsYXBzZUJ0bjpob3ZlciB7XHJcbiAgY29sb3I6ICMxOGJjOWM7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAubmF2YmFyLWJyYW5kIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAubW9iaWxlVUwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcblxyXG4gIC5oaWRlSXRlbU1vYmlsZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmhpZGVJdGVtTWVkaXVtIHtcclxuICAgIGRpc3BsYXk6IHVuc2V0O1xyXG4gIH1cclxuXHJcbiAgLmNvbGxhcHNlTmF2YmFyTmF2IHtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "3no8":
/*!**********************************************!*\
  !*** ./src/app/_services/loading.service.ts ***!
  \**********************************************/
/*! exports provided: LoadingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingService", function() { return LoadingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "7g+E");


class LoadingService {
    constructor(_spinnerService) {
        this._spinnerService = _spinnerService;
        this.loadingRequestCount = 0;
    }
    loading() {
        this.loadingRequestCount++;
        this._spinnerService.show(undefined, {
            type: 'line-scale-pulse-out',
            bdColor: 'rgba(256,256,256,0)',
            color: '#95A5A6',
            size: 'default',
        });
    }
    idle() {
        this.loadingRequestCount--;
        if (this.loadingRequestCount <= 0) {
            this.loadingRequestCount = 0;
            this._spinnerService.hide();
        }
    }
}
LoadingService.ɵfac = function LoadingService_Factory(t) { return new (t || LoadingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"])); };
LoadingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoadingService, factory: LoadingService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "590x":
/*!**************************************************************************!*\
  !*** ./src/app/_components/update-sw-modal/update-sw-modal.component.ts ***!
  \**************************************************************************/
/*! exports provided: UpdateSwModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateSwModalComponent", function() { return UpdateSwModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");


class UpdateSwModalComponent {
    constructor(bsModalRef) {
        this.bsModalRef = bsModalRef;
    }
    ngOnInit() { }
    reloadPage() {
        window.location.reload();
    }
}
UpdateSwModalComponent.ɵfac = function UpdateSwModalComponent_Factory(t) { return new (t || UpdateSwModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"])); };
UpdateSwModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UpdateSwModalComponent, selectors: [["app-update-sw-modal"]], decls: 13, vars: 0, consts: [[1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", "closeBtn", 3, "click"], ["aria-hidden", "true", 1, "timesSpan"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"]], template: function UpdateSwModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateSwModalComponent_Template_button_click_3_listener() { return ctx.bsModalRef.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " An update is available. Simply reload the page to get the updates.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateSwModalComponent_Template_button_click_9_listener() { return ctx.reloadPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Reload Page ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateSwModalComponent_Template_button_click_11_listener() { return ctx.bsModalRef.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".closeBtn[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  border: none;\r\n  margin-top: -1rem;\r\n}\r\n\r\n.timesSpan[_ngcontent-%COMP%] {\r\n  font-size: 1.8rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZS1zdy1tb2RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoidXBkYXRlLXN3LW1vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xvc2VCdG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBtYXJnaW4tdG9wOiAtMXJlbTtcclxufVxyXG5cclxuLnRpbWVzU3BhbiB7XHJcbiAgZm9udC1zaXplOiAxLjhyZW07XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "5Ks0":
/*!***********************************************************************************************!*\
  !*** ./src/app/_components/pages/edit-cards/delete-card-modal/delete-card-modal.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: DeleteCardModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteCardModalComponent", function() { return DeleteCardModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var src_app_services_card_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/card.service */ "Kuv3");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/user.service */ "VITL");




class DeleteCardModalComponent {
    constructor(bsModalRef, _cardService, _userService) {
        this.bsModalRef = bsModalRef;
        this._cardService = _cardService;
        this._userService = _userService;
    }
    ngOnInit() { }
    deleteCard(id) {
        this._cardService.deleteCard(id).subscribe(() => {
            // in the subscribe callback, update the cache
            for (let i = 0; i < this._userService.userCache.decks.length; i++) {
                if (this._userService.userCache.decks[i].id === this.selectedCard.deckId) {
                    let card = this._userService.userCache.decks[i].cards.find((card) => card.id === this.selectedCard.id);
                    let cardIdx = this._userService.userCache.decks[i].cards.indexOf(card);
                    this._userService.userCache.decks[i].cards.splice(cardIdx, 1);
                    break;
                }
            }
            this.editCardForm.reset();
            this.selectedCard = null;
            this.editCardForm.controls['front'].disable();
            this.editCardForm.controls['back'].disable();
            this.editCardForm.controls['order'].disable();
            this.editCardForm.controls['deckId'].disable();
            this.bsModalRef.hide();
        });
    }
}
DeleteCardModalComponent.ɵfac = function DeleteCardModalComponent_Factory(t) { return new (t || DeleteCardModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_card_service__WEBPACK_IMPORTED_MODULE_2__["CardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
DeleteCardModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeleteCardModalComponent, selectors: [["app-delete-card-modal"]], decls: 13, vars: 0, consts: [[1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", "closeBtn", 3, "click"], ["aria-hidden", "true", 1, "timesSpan"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"]], template: function DeleteCardModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Delete Card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteCardModalComponent_Template_button_click_3_listener() { return ctx.bsModalRef.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Are you sure you want to delete this card?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteCardModalComponent_Template_button_click_9_listener() { return ctx.deleteCard(ctx.selectedCard.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteCardModalComponent_Template_button_click_11_listener() { return ctx.bsModalRef.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".closeBtn[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  border: none;\r\n  margin-top: -1rem;\r\n}\r\n\r\n.timesSpan[_ngcontent-%COMP%] {\r\n  font-size: 1.8rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbGV0ZS1jYXJkLW1vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJkZWxldGUtY2FyZC1tb2RhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsb3NlQnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgbWFyZ2luLXRvcDogLTFyZW07XHJcbn1cclxuXHJcbi50aW1lc1NwYW4ge1xyXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "5ZPe":
/*!**********************************************!*\
  !*** ./src/app/_services/account.service.ts ***!
  \**********************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.service */ "VITL");






class AccountService {
    constructor(_http, _userService) {
        this._http = _http;
        this._userService = _userService;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
        this.currentUserSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
        this.currentUser$ = this.currentUserSource.asObservable();
    }
    login(model) {
        console.log(this.baseUrl);
        return this._http.post(`${this.baseUrl}/account/login`, model).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => {
            const user = response;
            if (user) {
                this.setCurrentUser(user);
            }
        }));
    }
    register(model) {
        return this._http.post(`${this.baseUrl}/account/register`, model).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => {
            const user = response;
            // users are automatically logged in.
            if (user) {
                this.setCurrentUser(user);
            }
            return user;
        }, (error) => console.error(error)));
    }
    confirmEmail(userId, token) {
        return this._http
            .get(`${this.baseUrl}/account/confirm-email?userId=${userId}&token=${token}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => {
            const user = response;
            if (user) {
                this.setCurrentUser(user);
            }
        }));
    }
    setCurrentUser(user) {
        const isAdmin = this.getDecodedToken(user.token).IsAdmin;
        if (isAdmin !== undefined) {
            user.isAdmin = true;
        }
        else {
            user.isAdmin = false;
        }
        localStorage.setItem('user', JSON.stringify(user));
        this.currentUserSource.next(user);
    }
    logout() {
        localStorage.removeItem('user');
        this.currentUserSource.next(null);
        this._userService.userCache = null;
    }
    getDecodedToken(token) {
        return JSON.parse(atob(token.split('.')[1]));
    }
    forgotPassword(email) {
        return this._http
            .post(`${this.baseUrl}/account/ForgotPassword?email=${email}`, {})
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => { }));
    }
    resetPassword(dto) {
        return this._http
            .post(`${this.baseUrl}/account/ResetPassword`, dto)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => { }));
    }
    changePassword(dto) {
        return this._http
            .post(`${this.baseUrl}/account/ChangePassword`, dto)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => { }));
    }
    deleteData(dto) {
        return this._http
            .post(`${this.baseUrl}/account/DeleteUser`, dto)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => { }));
    }
    requestVerificationEmail(email) {
        return this._http
            .post(`${this.baseUrl}/account/SendVerificationEmail?email=${email}`, {})
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => { }));
    }
    demoLogin() {
        const model = {
            email: 'demo@fastflashcards.com',
            password: 'Gandalf1',
        };
        return this._http.post(`${this.baseUrl}/account/login`, model).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => {
            const user = response;
            if (user) {
                this.setCurrentUser(user);
            }
        }));
    }
}
AccountService.ɵfac = function AccountService_Factory(t) { return new (t || AccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"])); };
AccountService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AccountService, factory: AccountService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "6fPH":
/*!*************************************************************************************!*\
  !*** ./src/app/_components/pages/register/confirm-email/confirm-email.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ConfirmEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmEmailComponent", function() { return ConfirmEmailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/account.service */ "5ZPe");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");





function ConfirmEmailComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Confirming email...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/user/decks"]; };
function ConfirmEmailComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Thank you for confirming your email address. You are now logged in.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Get started");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
function ConfirmEmailComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Email confirmation failed. You do not have login access. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ConfirmEmailComponent {
    constructor(_route, _router, _accountService, _titleService) {
        this._route = _route;
        this._router = _router;
        this._accountService = _accountService;
        this._titleService = _titleService;
        this.confirmed = false;
        this.errors = {
            unauthorized: false,
        };
    }
    ngOnInit() {
        this._titleService.setTitle(`Email Confirmation | FastFlashCards.com`);
        this.confirmingEmail = true;
        this.userId = this._route.snapshot.queryParamMap.get('userId');
        this.token = this._route.snapshot.queryParamMap.get('token');
        this._accountService.confirmEmail(this.userId, this.token).subscribe((response) => {
            this.confirmingEmail = false;
            this.confirmed = true;
            // this._router.navigateByUrl('/user/decks');
        }, (error) => {
            this.confirmingEmail = false;
            this.confirmed = false;
            if (error.error.type === 'email not confirmed') {
                this.errors.unauthorized = true;
            }
        });
    }
}
ConfirmEmailComponent.ɵfac = function ConfirmEmailComponent_Factory(t) { return new (t || ConfirmEmailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"])); };
ConfirmEmailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmEmailComponent, selectors: [["app-confirm-email"]], decls: 6, vars: 3, consts: [[1, "container", "m-nav"], [1, "pt-3"], [4, "ngIf"], [3, "routerLink"], [1, "text-danger"]], template: function ConfirmEmailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Email Confirmation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ConfirmEmailComponent_div_3_Template, 3, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ConfirmEmailComponent_div_4_Template, 5, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ConfirmEmailComponent_div_5_Template, 3, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.confirmingEmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.confirmed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errors.unauthorized);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maXJtLWVtYWlsLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "6tBi":
/*!****************************************************************************************************************!*\
  !*** ./src/app/_components/pages/login/forgot-password-confirmation/forgot-password-confirmation.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: ForgotPasswordConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordConfirmationComponent", function() { return ForgotPasswordConfirmationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");

class ForgotPasswordConfirmationComponent {
    constructor() { }
    ngOnInit() {
    }
}
ForgotPasswordConfirmationComponent.ɵfac = function ForgotPasswordConfirmationComponent_Factory(t) { return new (t || ForgotPasswordConfirmationComponent)(); };
ForgotPasswordConfirmationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForgotPasswordConfirmationComponent, selectors: [["app-forgot-password-confirmation"]], decls: 6, vars: 0, consts: [[1, "container", "m-nav"], [1, "col-md-6"], [1, "pt-3"]], template: function ForgotPasswordConfirmationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Forgot Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " A reset password link has been sent to the provided email address. To change your password, check your email, click the link, and follow the instructions. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3Jnb3QtcGFzc3dvcmQtY29uZmlybWF0aW9uLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "8xvR":
/*!*************************************************************************************************!*\
  !*** ./src/app/_components/pages/account-settings/change-password/change-password.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/account.service */ "5ZPe");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");







function ChangePasswordComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ChangePasswordComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Password must be at least 6 characters, contain an uppercase letter, and a number. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ChangePasswordComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ChangePasswordComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Password must be at least 6 characters, contain an uppercase letter, and a number. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ChangePasswordComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please confirm your password. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ChangePasswordComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Your entered passwords don't match. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ChangePasswordComponent_div_22_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", error_r8, " ");
} }
function ChangePasswordComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ChangePasswordComponent_div_22_li_2_Template, 2, 1, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r6.validationErrors);
} }
class ChangePasswordComponent {
    constructor(_fb, _router, _accountService, _titleService) {
        this._fb = _fb;
        this._router = _router;
        this._accountService = _accountService;
        this._titleService = _titleService;
        this.validationErrors = [];
        this.errors = {
            currentPassword: false,
            newPassword: false,
            confirmNewPassword: false,
        };
    }
    ngOnInit() {
        this._titleService.setTitle(`Change Password | FastFlashCards.com`);
        this.initializeForm();
    }
    initializeForm() {
        this.changePasswordForm = this._fb.group({
            currentPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(6)]],
            newPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(6)]],
            confirmNewPassword: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, this.matchValues('newPassword')],
            ],
        });
        this.changePasswordForm.controls.newPassword.valueChanges.subscribe(() => {
            this.changePasswordForm.controls.confirmNewPassword.updateValueAndValidity();
        });
    }
    changePassword() {
        const dto = {
            currentPassword: this.changePasswordForm.value.currentPassword,
            newPassword: this.changePasswordForm.value.newPassword,
        };
        this._accountService.changePassword(dto).subscribe(() => {
            this._router.navigateByUrl(`/user/account-settings/change-password/success`);
        }, (error) => {
            this.validationErrors = error;
        });
    }
    matchValues(matchTo) {
        return (control) => {
            var _a;
            return (control === null || control === void 0 ? void 0 : control.value) === ((_a = control === null || control === void 0 ? void 0 : control.parent) === null || _a === void 0 ? void 0 : _a.controls[matchTo].value)
                ? null
                : { isMatching: true };
        };
    }
}
ChangePasswordComponent.ɵfac = function ChangePasswordComponent_Factory(t) { return new (t || ChangePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"])); };
ChangePasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ChangePasswordComponent, selectors: [["app-change-password"]], decls: 25, vars: 15, consts: [[1, "container", "m-nav"], [1, "h3", "pt-3"], [1, "mt-4", "col-md-4", "changePasswordForm", 3, "formGroup", "ngSubmit"], [1, "form-group", "mb-3"], ["for", "currentPassword"], ["type", "password", "formControlName", "currentPassword", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "newPassword"], ["type", "password", "formControlName", "newPassword", 1, "form-control"], ["for", "confirmNewPassword"], ["type", "password", "formControlName", "confirmNewPassword", 1, "form-control"], [4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", "w-100", "mt-3", 3, "disabled"], [1, "invalid-feedback"], [1, "text-danger"], [4, "ngFor", "ngForOf"]], template: function ChangePasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Change Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ChangePasswordComponent_Template_form_ngSubmit_3_listener() { return ctx.changePasswordForm.valid && ctx.changePassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Current Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ChangePasswordComponent_div_8_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ChangePasswordComponent_div_9_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ChangePasswordComponent_div_14_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ChangePasswordComponent_div_15_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Confirm New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ChangePasswordComponent_div_20_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, ChangePasswordComponent_div_21_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ChangePasswordComponent_div_22_Template, 3, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Change Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.changePasswordForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.changePasswordForm.get("currentPassword").errors && ctx.changePasswordForm.get("currentPassword").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.changePasswordForm.get("currentPassword").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.changePasswordForm.get("currentPassword").hasError("minlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.changePasswordForm.get("newPassword").errors && ctx.changePasswordForm.get("newPassword").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.changePasswordForm.get("newPassword").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.changePasswordForm.get("newPassword").hasError("minlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.changePasswordForm.get("confirmNewPassword").errors && ctx.changePasswordForm.get("confirmNewPassword").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.changePasswordForm.get("confirmNewPassword").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.changePasswordForm.get("confirmNewPassword").hasError("isMatching"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.validationErrors.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.changePasswordForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".changePasswordForm[_ngcontent-%COMP%] {\r\n  max-width: 25rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6ImNoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYW5nZVBhc3N3b3JkRm9ybSB7XHJcbiAgbWF4LXdpZHRoOiAyNXJlbTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'https://localhost:5001/api',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Btx/":
/*!**************************************************!*\
  !*** ./src/app/_interceptors/jwt.interceptor.ts ***!
  \**************************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/account.service */ "5ZPe");



class JwtInterceptor {
    constructor(_accountService) {
        this._accountService = _accountService;
    }
    intercept(request, next) {
        let currentUser;
        this._accountService.currentUser$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1))
            .subscribe((user) => (currentUser = user));
        if (currentUser) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`,
                },
            });
        }
        return next.handle(request);
    }
}
JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) { return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"])); };
JwtInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: JwtInterceptor, factory: JwtInterceptor.ɵfac });


/***/ }),

/***/ "C677":
/*!************************************************************!*\
  !*** ./src/app/_components/pages/login/login.component.ts ***!
  \************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/account.service */ "5ZPe");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");







function LoginComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This email address is not registered. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter an email. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Requires at least 3 characters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Has a max length of 40 characters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter a valid email address. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Invalid password. *Reminder: passwords require a number, uppercase letter, and at least 6 characters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter your password. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Password must be at least 6 characters, contain an uppercase letter, and a number. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_div_20_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", error_r11, " ");
} }
function LoginComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LoginComponent_div_20_li_2_Template, 2, 1, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r8.validationErrors);
} }
function LoginComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Confirm your email address to login.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Need a verification email? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Click here.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(_accountService, _router, _titleService, _fb) {
        this._accountService = _accountService;
        this._router = _router;
        this._titleService = _titleService;
        this._fb = _fb;
        this.validationErrors = [];
        this.errors = {
            email: false,
            password: false,
            confirmEmail: false,
            loadingProviders: false,
        };
        // external auth
        this.returnUrl = '/user/decks';
    }
    ngOnInit() {
        this._titleService.setTitle(`Login | FastFlashCards.com`);
        this.initializeForm();
    }
    login() {
        this.errors = {
            email: false,
            password: false,
            confirmEmail: false,
            loadingProviders: false,
        };
        this._accountService.login(this.loginForm.value).subscribe(() => {
            this._router.navigateByUrl('/user/decks');
        }, (error) => {
            if (error.error.type === 'email') {
                this.errors.email = true;
            }
            else if (error.error.type === 'password') {
                this.errors.password = true;
            }
            else if (error.error.type === 'confirm email') {
                this.errors.confirmEmail = true;
            }
        });
    }
    initializeForm() {
        this.loginForm = this._fb.group({
            email: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(40),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email,
                ],
            ],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(6)]],
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 26, vars: 16, consts: [[1, "col-lg-4", "col-md-6", "m-nav", "mx-auto", "loginWrapper"], [1, "text-center", "pt-3", "pt-lg-5", "h3"], [1, "mb-3", 3, "formGroup", "ngSubmit"], [1, "form-group", "mb-3"], ["for", "email"], ["type", "text", "name", "email", "formControlName", "email", 1, "form-control", "mr-sm-2"], ["class", "text-danger invalidFeedback", 4, "ngIf"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "password"], ["type", "password", "name", "password", "formControlName", "password", 1, "form-control", "mr-sm-2"], [4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", "mt-3", "w-100", 3, "disabled"], ["routerLink", "/login/forgot-password", 1, "forgotPasswordLink"], [1, "text-danger", "invalidFeedback"], [1, "invalid-feedback"], [1, "text-danger"], [4, "ngFor", "ngForOf"], ["routerLink", "/login/verification-email"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_3_listener() { return ctx.loginForm.valid && ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, LoginComponent_div_8_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, LoginComponent_div_9_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, LoginComponent_div_10_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, LoginComponent_div_11_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, LoginComponent_div_12_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, LoginComponent_div_17_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, LoginComponent_div_18_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, LoginComponent_div_19_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, LoginComponent_div_20_Template, 3, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, LoginComponent_div_21_Template, 7, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Forgot password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.loginForm.get("email").errors && ctx.loginForm.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errors.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loginForm.get("email").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loginForm.get("email").hasError("minlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loginForm.get("email").hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loginForm.get("email").hasError("email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.loginForm.get("password").errors && ctx.loginForm.get("password").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errors.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loginForm.get("password").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loginForm.get("password").hasError("minlength") && !ctx.errors.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.validationErrors.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errors.confirmEmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.loginForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".loginWrapper[_ngcontent-%COMP%] {\r\n  max-width: 25rem;\r\n  padding-left: 1rem;\r\n  padding-right: 1rem;\r\n}\r\n\r\n.forgotPasswordLink[_ngcontent-%COMP%] {\r\n  color: #253544;\r\n}\r\n\r\n.invalidFeedback[_ngcontent-%COMP%] {\r\n  font-size: 0.875em;\r\n  margin-top: 0.25rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW5XcmFwcGVyIHtcclxuICBtYXgtd2lkdGg6IDI1cmVtO1xyXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG4uZm9yZ290UGFzc3dvcmRMaW5rIHtcclxuICBjb2xvcjogIzI1MzU0NDtcclxufVxyXG5cclxuLmludmFsaWRGZWVkYmFjayB7XHJcbiAgZm9udC1zaXplOiAwLjg3NWVtO1xyXG4gIG1hcmdpbi10b3A6IDAuMjVyZW07XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "DbnP":
/*!********************************************************************!*\
  !*** ./src/app/_components/pages/add-cards/add-cards.component.ts ***!
  \********************************************************************/
/*! exports provided: AddCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCardsComponent", function() { return AddCardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_services_card_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/card.service */ "Kuv3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/user.service */ "VITL");
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/account.service */ "5ZPe");
/* harmony import */ var src_app_services_deck_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/deck.service */ "ekfe");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "FE24");











function AddCardsComponent_div_0_ul_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddCardsComponent_div_0_ul_7_ng_container_1_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const deck_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r7.selectDeck(deck_r6.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const deck_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", deck_r6.name, " ");
} }
function AddCardsComponent_div_0_ul_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddCardsComponent_div_0_ul_7_ng_container_1_Template, 4, 1, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.user.decks);
} }
function AddCardsComponent_div_0_div_8_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Queue (unsaved cards): ", ctx_r9.addCardQueue.length, " ");
} }
function AddCardsComponent_div_0_div_8_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddCardsComponent_div_0_div_8_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r11.saveAllToDatabase(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Save all ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddCardsComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Instructions: Add new cards to queue, click 'Save all' to add to database. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AddCardsComponent_div_0_div_8_p_6_Template, 2, 1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AddCardsComponent_div_0_div_8_button_7_Template, 2, 0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddCardsComponent_div_0_div_8_Template_form_ngSubmit_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.addCardToQueue(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Front");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "textarea", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "textarea", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Add to queue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Back to deck");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total cards: ", ctx_r2.selectedDeck.cards.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.addCardQueue.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.addCardQueue.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.addCardForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/user/decks/", ctx_r2.deckId, "");
} }
const _c0 = function () { return ["/user/decks"]; };
function AddCardsComponent_div_0_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "You don't have any decks yet.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Go to the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "decks page");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " to create a new one. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
function AddCardsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add Cards");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AddCardsComponent_div_0_ul_7_Template, 2, 1, "ul", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AddCardsComponent_div_0_div_8_Template, 22, 5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AddCardsComponent_div_0_ng_template_9_Template, 8, 2, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r0.user.decks.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.selectedDeck ? ctx_r0.selectedDeck.name : "Select a deck", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.selectedDeck)("ngIfElse", _r3);
} }
class AddCardsComponent {
    constructor(_route, _cardService, _fb, _userService, _accountService, _deckService, _toastr, _titleService) {
        this._route = _route;
        this._cardService = _cardService;
        this._fb = _fb;
        this._userService = _userService;
        this._accountService = _accountService;
        this._deckService = _deckService;
        this._toastr = _toastr;
        this._titleService = _titleService;
        this.addCardQueue = [];
    }
    ngOnInit() {
        this._titleService.setTitle(`Add Cards | FastFlashCards.com`);
        this.deckId = parseInt(this._route.snapshot.paramMap.get('id'));
        this.getLoggedInUser();
        this.loadUser();
        this.initializeForm();
    }
    getLoggedInUser() {
        this._accountService.currentUser$.subscribe((user) => {
            this.loggedInUser = user;
        });
    }
    loadUser() {
        this._userService.getUser(this.loggedInUser.id).subscribe((user) => {
            this.user = user;
            if (this.user.decks.length === 0)
                return;
            else if (this.deckId) {
                this.selectDeck(this.deckId);
            }
            else {
                this.selectDeck(this._userService.userCache.decks[0].id);
            }
        });
    }
    selectDeck(id) {
        this.selectedDeck = this.user.decks.find((deck) => deck.id === id);
        if (!this.selectedDeck) {
            console.error('Deck ID from route is not in cache.');
            this._toastr.error('Deck not found.');
            this.selectedDeck = this.user.decks[0];
        }
        this.deckId = this.selectedDeck.id;
        this._deckService.setCurrentDeckId(this.selectedDeck.id);
    }
    initializeForm() {
        this.addCardForm = this._fb.group({
            front: [''],
            back: [''],
        });
    }
    addCardToQueue() {
        const newCard = {
            front: this.addCardForm.value.front,
            back: this.addCardForm.value.back,
            appUserId: this.user.id,
        };
        this.addCardQueue.push(newCard);
        this.addCardForm.reset();
    }
    saveAllToDatabase() {
        this._cardService
            .createCards(this.deckId, this.selectedDeck.appUserId, this.addCardQueue)
            .subscribe((res) => {
            this.selectedDeck.cards = this.selectedDeck.cards.concat(res);
            this.addCardQueue = [];
        });
    }
}
AddCardsComponent.ɵfac = function AddCardsComponent_Factory(t) { return new (t || AddCardsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_card_service__WEBPACK_IMPORTED_MODULE_2__["CardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_account_service__WEBPACK_IMPORTED_MODULE_5__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_deck_service__WEBPACK_IMPORTED_MODULE_6__["DeckService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Title"])); };
AddCardsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddCardsComponent, selectors: [["app-add-cards"]], decls: 1, vars: 1, consts: [["class", "container m-nav", 4, "ngIf"], [1, "container", "m-nav"], [1, "h2", "pt-3"], ["dropdown", "", 1, "btn-group", "mt-3"], ["id", "button-basic", "dropdownToggle", "", "type", "button", "aria-controls", "dropdown-basic", 1, "btn", "btn-primary", "dropdown-toggle", "selectBtn"], [1, "caret"], ["id", "dropdown-basic", "class", "dropdown-menu", "role", "menu", "aria-labelledby", "button-basic", 4, "dropdownMenu"], ["class", "col-12 col-lg-7 col-xl-5", 4, "ngIf", "ngIfElse"], ["noDecks", ""], ["id", "dropdown-basic", "role", "menu", "aria-labelledby", "button-basic", 1, "dropdown-menu"], [4, "ngFor", "ngForOf"], ["role", "menuitem"], [1, "dropdown-item", 3, "click"], [1, "col-12", "col-lg-7", "col-xl-5"], [1, "text-muted", "mt-3"], [1, "cardCount"], [1, "d-flex", "queueWrapper"], ["class", "text-warning cardCount unsavedCardCount", 4, "ngIf"], ["class", "btn btn-warning btnSaveAll", "type", "button", 3, "click", 4, "ngIf"], [1, "mt-4", 3, "formGroup", "ngSubmit"], [1, "form-group", "mb-3"], ["for", "front"], ["rows", "4", "name", "front", "formControlName", "front", 1, "form-control"], ["for", "back"], ["rows", "4", "name", "back", "formControlName", "back", 1, "form-control"], [1, "d-flex", "pt-3"], ["type", "submit", 1, "btn", "btn-primary"], [1, "btn", "btn-outline-secondary", "d-inline-block", "backBtn", 3, "routerLink"], [1, "text-warning", "cardCount", "unsavedCardCount"], ["type", "button", 1, "btn", "btn-warning", "btnSaveAll", 3, "click"], [1, "col-md-5", "pt-4"], [3, "routerLink"]], template: function AddCardsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AddCardsComponent_div_0_Template, 11, 5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_10__["BsDropdownDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_10__["BsDropdownToggleDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_10__["BsDropdownMenuDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".selectBtn[_ngcontent-%COMP%] {\r\n  min-width: 9rem;\r\n}\r\n\r\n.cardCount[_ngcontent-%COMP%] {\r\n  font-size: 1.25rem;\r\n  margin-bottom: 0rem;\r\n}\r\n\r\n.unsavedCardCount[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n}\r\n\r\n.backBtn[_ngcontent-%COMP%] {\r\n  margin-left: 1.5rem;\r\n}\r\n\r\n.queueWrapper[_ngcontent-%COMP%] {\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.btnSaveAll[_ngcontent-%COMP%] {\r\n  margin-top: unset;\r\n}\r\n\r\n@media only screen and (max-width: 550px) {\r\n  .queueWrapper[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n    align-items: unset;\r\n    justify-content: unset;\r\n  }\r\n\r\n  .btnSaveAll[_ngcontent-%COMP%] {\r\n    margin-top: 0.5rem;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1jYXJkcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0U7SUFDRSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGIiwiZmlsZSI6ImFkZC1jYXJkcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGVjdEJ0biB7XHJcbiAgbWluLXdpZHRoOiA5cmVtO1xyXG59XHJcblxyXG4uY2FyZENvdW50IHtcclxuICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMHJlbTtcclxufVxyXG5cclxuLnVuc2F2ZWRDYXJkQ291bnQge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5iYWNrQnRuIHtcclxuICBtYXJnaW4tbGVmdDogMS41cmVtO1xyXG59XHJcblxyXG4ucXVldWVXcmFwcGVyIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmJ0blNhdmVBbGwge1xyXG4gIG1hcmdpbi10b3A6IHVuc2V0O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XHJcbiAgLnF1ZXVlV3JhcHBlciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IHVuc2V0O1xyXG4gICAganVzdGlmeS1jb250ZW50OiB1bnNldDtcclxuICB9XHJcblxyXG4gIC5idG5TYXZlQWxsIHtcclxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "Kuv3":
/*!*******************************************!*\
  !*** ./src/app/_services/card.service.ts ***!
  \*******************************************/
/*! exports provided: CardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardService", function() { return CardService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");



class CardService {
    constructor(_http) {
        this._http = _http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl;
    }
    createCards(deckId, appUserId, cards) {
        return this._http.post(`${this.baseUrl}/card`, {
            deckId: deckId,
            appUserId: appUserId,
            cards: cards,
        });
        // return this._http.post(`${this.baseUrl}/deck?deckName=${name}`, {}).pipe(
        //   map((deck: any) => {
        //     deck.cards = [];
        //     this._userService.userCache.decks.push(deck);
        //   })
        // );
    }
    editCard(card) {
        return this._http.put(`${this.baseUrl}/card/${card.id}`, {
            id: card.id,
            front: card.front,
            back: card.back,
            order: card.order,
            deckId: card.deckId,
            appUserId: card.appUserId,
        });
    }
    deleteCard(id) {
        return this._http.delete(`${this.baseUrl}/card/${id}`);
    }
}
CardService.ɵfac = function CardService_Factory(t) { return new (t || CardService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CardService, factory: CardService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "MHiA":
/*!**************************************************************************!*\
  !*** ./src/app/_components/pages/server-error/server-error.component.ts ***!
  \**************************************************************************/
/*! exports provided: ServerErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerErrorComponent", function() { return ServerErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");




function ServerErrorComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Your account has been created but there was an error sending your confirmation email. Please contact customer support. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ServerErrorComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " There was an error on the server. Please try again later. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ServerErrorComponent {
    constructor(_route, _titleService) {
        this._route = _route;
        this._titleService = _titleService;
    }
    ngOnInit() {
        this._titleService.setTitle(`Server Error | FastFlashCards.com`);
        this.error = this._route.snapshot.paramMap.get('error');
    }
}
ServerErrorComponent.ɵfac = function ServerErrorComponent_Factory(t) { return new (t || ServerErrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"])); };
ServerErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServerErrorComponent, selectors: [["app-server-error"]], decls: 5, vars: 2, consts: [[1, "container", "m-nav"], [1, "h3", "pt-3"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"]], template: function ServerErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Internal Server Error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ServerErrorComponent_div_3_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ServerErrorComponent_div_4_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error === "register-email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.error);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2ZXItZXJyb3IuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "MMab":
/*!****************************************************!*\
  !*** ./src/app/_interceptors/error.interceptor.ts ***!
  \****************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "EApP");





class ErrorInterceptor {
    constructor(_router, _toastr) {
        this._router = _router;
        this._toastr = _toastr;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((error) => {
            var _a, _b, _c, _d, _e;
            if (error) {
                switch (error.status) {
                    case 400:
                        if (error.error.errors) {
                            const modelStateErrors = [];
                            for (const key in error.error.errors) {
                                if (error.error.errors[key]) {
                                    modelStateErrors.push(error.error.errors[key]);
                                }
                            }
                            throw modelStateErrors.flat();
                        }
                        else if (error.error.type === 'email') {
                            const errorArr = [];
                            errorArr.push(error.error.message);
                            throw errorArr;
                        }
                        else if (error.error.type === 'username') {
                            const errorArr = [];
                            errorArr.push(error.error.message);
                            throw errorArr;
                        }
                        else if (error.error.type === 'user has password') {
                            const errorArr = [];
                            errorArr.push(error.error.message);
                            throw errorArr;
                        }
                        else if (typeof error.error === 'object') {
                            const modelStateErrors = [];
                            for (const key in error.error) {
                                if (error.error[key]) {
                                    modelStateErrors.push(error.error[key].description);
                                }
                            }
                            throw modelStateErrors.flat();
                        }
                        else {
                            console.error('error in 400 else block', error);
                        }
                        break;
                    case 401:
                        console.log(error);
                        // all 401 unauthorized errors are handled in login component try/catch block
                        if (((_a = error.error) === null || _a === void 0 ? void 0 : _a.source) === 'login') {
                            // handle error in login component
                            break;
                        }
                        else if (((_b = error.error) === null || _b === void 0 ? void 0 : _b.source) === 'confirm-email') {
                            // handle error in confirm-email component
                            break;
                        }
                        else if (((_c = error.error) === null || _c === void 0 ? void 0 : _c.source) === 'DeleteData') {
                            // handle error in delete-data component
                            break;
                        }
                        else {
                            this._toastr.error('Unauthorized', error.status);
                        }
                        break;
                    case 404:
                        this._router.navigateByUrl('/not-found');
                        break;
                    case 500:
                        if (((_d = error.error) === null || _d === void 0 ? void 0 : _d.source) === 'register' &&
                            ((_e = error.error) === null || _e === void 0 ? void 0 : _e.type) === 'send email') {
                            this._router.navigateByUrl('/server-error/register-email');
                            const errorArr = [];
                            errorArr.push(error.error.message);
                            throw errorArr;
                        }
                        const navigationExtras = {
                            state: { error: error.error },
                        };
                        this._toastr.error('error in case 500');
                        this._router.navigateByUrl('/server-error', navigationExtras);
                        break;
                    default:
                        console.log(error);
                        this._toastr.error('Something unexpected went wrong');
                        break;
                }
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(error);
        }));
    }
}
ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"])); };
ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac });


/***/ }),

/***/ "NWYD":
/*!****************************************!*\
  !*** ./src/app/_guards/admin.guard.ts ***!
  \****************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/account.service */ "5ZPe");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");




class AdminGuard {
    constructor(_accountService, router) {
        this._accountService = _accountService;
        this.router = router;
    }
    canActivate() {
        return this._accountService.currentUser$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((user) => {
            if (user.isAdmin)
                return true;
            this.router.navigateByUrl('/not-found');
        }));
    }
}
AdminGuard.ɵfac = function AdminGuard_Factory(t) { return new (t || AdminGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AdminGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AdminGuard, factory: AdminGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "OMJ/":
/*!********************************************!*\
  !*** ./src/app/_services/admin.service.ts ***!
  \********************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "IheW");





class AdminService {
    constructor(_http) {
        this._http = _http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    getUsers() {
        return this._http.get(`${this.baseUrl}/admin/getusers`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
            return response;
        }));
    }
    getUser(id) {
        if (this.userCache !== undefined &&
            this.userCache !== null &&
            id === this.userCache.id) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this.userCache);
        }
        return this._http.get(`${this.baseUrl}/admin?id=${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((user) => {
            this.userCache = user;
            return user;
        }));
    }
    editEmailConfirmed(emailConfirmed, id) {
        return this._http.put(`${this.baseUrl}/admin/UpdateEmailConfirmed?emailConfirmed=${emailConfirmed}&id=${id}`, {});
    }
    editPassword(newPassword, id) {
        const updatePasswordObj = {
            newPassword: newPassword,
            id: id,
        };
        return this._http.put(`${this.baseUrl}/admin/UpdatePassword`, updatePasswordObj);
    }
    deleteUser(userId) {
        return this._http.post(`${this.baseUrl}/admin/DeleteUser?id=${userId}`, {});
    }
}
AdminService.ɵfac = function AdminService_Factory(t) { return new (t || AdminService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
AdminService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AdminService, factory: AdminService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "PSoG":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/account.service */ "5ZPe");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");




class AuthGuard {
    constructor(_accountService, router) {
        this._accountService = _accountService;
        this.router = router;
    }
    canActivate() {
        return this._accountService.currentUser$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((user) => {
            if (user)
                return true;
            this.router.navigateByUrl('/login');
        }));
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "PZyb":
/*!*************************************************************************!*\
  !*** ./src/app/_components/pages/register/success/success.component.ts ***!
  \*************************************************************************/
/*! exports provided: SuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessComponent", function() { return SuccessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");


class SuccessComponent {
    constructor(_route) {
        this._route = _route;
    }
    ngOnInit() {
        this.email = this._route.snapshot.paramMap.get('email');
    }
}
SuccessComponent.ɵfac = function SuccessComponent_Factory(t) { return new (t || SuccessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
SuccessComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SuccessComponent, selectors: [["app-success"]], decls: 12, vars: 1, consts: [[1, "container", "m-nav"], [1, "pt-3"], [1, "email"], ["routerLink", "/user/decks", 1, "btn", "btn-success"]], template: function SuccessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Registration Success!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Please verify your email address at ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, ". You may need to check your spam folder. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "You are now logged in.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Get started");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.email);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".email[_ngcontent-%COMP%] {\r\n  \r\n  font-style: italic;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Y2Nlc3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3VjY2Vzcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVtYWlsIHtcclxuICAvKiBjb2xvcjogIzJjODFiYTsgKi9cclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "RB8j":
/*!**********************************************************************!*\
  !*** ./src/app/_components/pages/edit-cards/edit-cards.component.ts ***!
  \**********************************************************************/
/*! exports provided: EditCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCardsComponent", function() { return EditCardsComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _delete_card_modal_delete_card_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete-card-modal/delete-card-modal.component */ "5Ks0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/user.service */ "VITL");
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/account.service */ "5ZPe");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_services_card_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/card.service */ "Kuv3");
/* harmony import */ var src_app_services_deck_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_services/deck.service */ "ekfe");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "FE24");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-pagination */ "xkgV");















function EditCardsComponent_div_0_ul_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditCardsComponent_div_0_ul_7_ng_container_1_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const deck_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r9.selectDeck(deck_r8.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const deck_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", deck_r8.name, " ");
} }
function EditCardsComponent_div_0_ul_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, EditCardsComponent_div_0_ul_7_ng_container_1_Template, 4, 1, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.user.decks);
} }
const _c0 = function (a0) { return { active: a0 }; };
function EditCardsComponent_div_0_div_9_div_6_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditCardsComponent_div_0_div_9_div_6_ng_container_9_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const card_r13 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4); return ctx_r14.selectCard(card_r13.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const card_r13 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c0, card_r13.id === (ctx_r12.selectedCard == null ? null : ctx_r12.selectedCard.id)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](card_r13.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](card_r13.front);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](card_r13.back);
} }
const _c1 = function (a0, a1) { return { itemsPerPage: a0, currentPage: a1 }; };
function EditCardsComponent_div_0_div_9_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h5", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Front");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ul", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, EditCardsComponent_div_0_div_9_div_6_ng_container_9_Template, 8, 6, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "form", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "select", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "10");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "25");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "50");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Items Per Page");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "pagination-controls", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("pageChange", function EditCardsComponent_div_0_div_9_div_6_Template_pagination_controls_pageChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r16.p = $event; })("pageBoundsCorrection", function EditCardsComponent_div_0_div_9_div_6_Template_pagination_controls_pageBoundsCorrection_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r18.pageBoundsCorrection($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " >");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](10, 6, ctx_r11.collection, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](9, _c1, ctx_r11.itemsPerPageForm.value, ctx_r11.p)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r11.itemsPerPageForm)("value", ctx_r11.itemsPerPageForm.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", 50);
} }
function EditCardsComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h4", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Select Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, EditCardsComponent_div_0_div_9_div_6_Template, 24, 12, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Total cards: ", ctx_r2.selectedDeck.cards.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.selectedDeck.cards.length > 0);
} }
const _c2 = function () { return ["/user/decks"]; };
function EditCardsComponent_div_0_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "You don't have any decks yet.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Go to the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "decks page");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " to create a new one. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c2));
} }
function EditCardsComponent_div_0_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const deck_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", deck_r19.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](deck_r19.name);
} }
function EditCardsComponent_div_0_button_36_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditCardsComponent_div_0_button_36_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r20.openDeleteCardModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Delete card ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r6.selectedCard);
} }
function EditCardsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Edit Cards");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, EditCardsComponent_div_0_ul_7_Template, 2, 1, "ul", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, EditCardsComponent_div_0_div_9_Template, 7, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, EditCardsComponent_div_0_ng_template_10_Template, 8, 2, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function EditCardsComponent_div_0_Template_form_ngSubmit_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r22.saveChanges(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "h4", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Edit Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Change deck");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "select", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, EditCardsComponent_div_0_ng_container_20_Template, 3, 2, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Front");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "textarea", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "textarea", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Change Card # / Group #");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, " Save changes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, EditCardsComponent_div_0_button_36_Template, 2, 1, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](11);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("disabled", ctx_r0.user.decks.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.selectedDeck ? ctx_r0.selectedDeck.name : "Select a deck", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.selectedDeck)("ngIfElse", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.editCardForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r0.selectedCard ? ctx_r0.selectedCard.deckId : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.user.decks);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r0.selectedCard ? ctx_r0.selectedCard.front : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r0.selectedCard ? ctx_r0.selectedCard.back : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r0.selectedCard ? ctx_r0.selectedCard.order : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r0.editCardForm.pristine || !ctx_r0.selectedCard);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.deleteState);
} }
class EditCardsComponent {
    constructor(_userService, _accountService, _route, _fb, _cardService, _deckService, _toastr, _titleService, _modalService) {
        this._userService = _userService;
        this._accountService = _accountService;
        this._route = _route;
        this._fb = _fb;
        this._cardService = _cardService;
        this._deckService = _deckService;
        this._toastr = _toastr;
        this._titleService = _titleService;
        this._modalService = _modalService;
        this.p = 1;
        this.itemsPerPageForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](10);
    }
    ngOnInit() {
        this._titleService.setTitle('Edit Cards | FastFlashCards.com');
        this.deckId = parseInt(this._route.snapshot.paramMap.get('id'));
        this.getLoggedInUser();
        this.initializeForm();
        this.loadUser();
    }
    getLoggedInUser() {
        this._accountService.currentUser$.subscribe((user) => {
            this.loggedInUser = user;
        });
    }
    loadUser() {
        this._userService.getUser(this.loggedInUser.id).subscribe((user) => {
            this.user = user;
            if (this.user.decks.length === 0)
                return;
            else if (this.deckId) {
                this.selectDeck(this.deckId);
            }
            else {
                this.selectDeck(this._userService.userCache.decks[0].id);
            }
        });
    }
    initializeForm() {
        this.editCardForm = this._fb.group({
            front: [{ value: '', disabled: true }],
            back: [{ value: '', disabled: true }],
            order: [{ value: '', disabled: true }],
            deckId: [{ value: '', disabled: true }],
        });
    }
    selectDeck(id) {
        this.selectedDeck = this.user.decks.find((deck) => deck.id === id);
        if (!this.selectedDeck) {
            console.error('Deck ID from route is not in cache.');
            this._toastr.error('Deck not found.');
            this.selectedDeck = this.user.decks[0];
        }
        this.collection = this.selectedDeck.cards;
        this._deckService.setCurrentDeckId(this.selectedDeck.id);
        this.selectedCard = null;
        this.editCardForm.controls['front'].disable();
        this.editCardForm.controls['back'].disable();
        this.editCardForm.controls['order'].disable();
        this.editCardForm.controls['deckId'].disable();
    }
    selectCard(id) {
        if (this.selectedCard && this.selectedCard.id === id) {
            this.selectedCard = null;
            this.editCardForm.controls['front'].disable();
            this.editCardForm.controls['back'].disable();
            this.editCardForm.controls['order'].disable();
            this.editCardForm.controls['deckId'].disable();
            return;
        }
        this.selectedCard = this.selectedDeck.cards.find((card) => card.id === id);
        this.setFormValues();
        this.editCardForm.enable();
    }
    getForm(e) {
        this.editCardForm = e;
    }
    setFormValues() {
        this.editCardForm.setValue({
            front: this.selectedCard.front,
            back: this.selectedCard.back,
            order: this.selectedCard.order,
            deckId: this.selectedCard.deckId,
        });
    }
    pageBoundsCorrection(e) {
        this.p = e.value;
    }
    saveChanges() {
        const updatedCard = {
            id: this.selectedCard.id,
            front: this.editCardForm.value.front,
            back: this.editCardForm.value.back,
            order: this.editCardForm.value.order,
            deckId: parseInt(this.editCardForm.value.deckId),
            appUserId: this.selectedCard.appUserId,
        };
        this._cardService.editCard(updatedCard).subscribe(() => {
            // in the subscribe callback, update the cache
            if (this.selectedCard.deckId === updatedCard.deckId) {
                // then I can search the userCache by matching deckId's
                for (let i = 0; i < this._userService.userCache.decks.length; i++) {
                    let needToSortFlag = false;
                    if (this._userService.userCache.decks[i].id === updatedCard.deckId) {
                        for (let j = 0; j < this._userService.userCache.decks[i].cards.length; j++) {
                            if (this._userService.userCache.decks[i].cards[j].id ===
                                updatedCard.id) {
                                this._userService.userCache.decks[i].cards[j].front =
                                    updatedCard.front;
                                this._userService.userCache.decks[i].cards[j].back =
                                    updatedCard.back;
                                if (this._userService.userCache.decks[i].cards[j].order !==
                                    updatedCard.order) {
                                    this._userService.userCache.decks[i].cards[j].order =
                                        updatedCard.order;
                                    needToSortFlag = true;
                                }
                                break;
                            }
                        }
                        if (needToSortFlag) {
                            this._userService.userCache.decks[i].cards.sort((a, b) => a.order - b.order);
                            needToSortFlag = false;
                        }
                        break;
                    }
                }
            }
            else {
                // the deckId has been changed, so must search userCache to find card by id
                for (let i = 0; i < this._userService.userCache.decks.length; i++) {
                    let card = this._userService.userCache.decks[i].cards.find((card) => card.id === updatedCard.id);
                    if (card) {
                        card.front = updatedCard.front;
                        card.back = updatedCard.back;
                        card.deckId = updatedCard.deckId;
                        let cardIdx = this._userService.userCache.decks[i].cards.indexOf(card);
                        this._userService.userCache.decks[i].cards.splice(cardIdx, 1);
                        // loop through decks again and find the updatedCard's new deck
                        for (let j = 0; j < this._userService.userCache.decks.length; j++) {
                            if (this._userService.userCache.decks[j].id === updatedCard.deckId) {
                                // update order property according to new deck (unless deck is empty)
                                if (this._userService.userCache.decks[j].cards.length > 0) {
                                    this._userService.userCache.decks[j].cards.sort((a, b) => a.order - b.order);
                                    const arrLength = this._userService.userCache.decks[j].cards.length;
                                    const lastCard = this._userService.userCache.decks[j].cards[arrLength - 1];
                                    card.order = lastCard.order + 1;
                                    this._userService.userCache.decks[j].cards.push(card);
                                    break;
                                }
                                else {
                                    card.order = 1;
                                    this._userService.userCache.decks[j].cards.push(card);
                                }
                            }
                        }
                        break;
                    }
                }
            }
            this.editCardForm.reset();
            this.selectedCard = null;
            this.editCardForm.controls['front'].disable();
            this.editCardForm.controls['back'].disable();
            this.editCardForm.controls['order'].disable();
            this.editCardForm.controls['deckId'].disable();
        });
    }
    openDeleteCardModal() {
        this.bsModalRef = this._modalService.show(_delete_card_modal_delete_card_modal_component__WEBPACK_IMPORTED_MODULE_1__["DeleteCardModalComponent"]);
        this.bsModalRef.content.selectedCard = this.selectedCard;
        this.bsModalRef.content.editCardForm = this.editCardForm;
    }
}
EditCardsComponent.ɵfac = function EditCardsComponent_Factory(t) { return new (t || EditCardsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_card_service__WEBPACK_IMPORTED_MODULE_6__["CardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_deck_service__WEBPACK_IMPORTED_MODULE_7__["DeckService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__["BsModalService"])); };
EditCardsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EditCardsComponent, selectors: [["app-edit-cards"]], decls: 1, vars: 1, consts: [["class", "container m-nav", 4, "ngIf"], [1, "container", "m-nav"], [1, "h2", "pt-3"], ["dropdown", "", 1, "btn-group", "mt-3"], ["id", "button-basic", "dropdownToggle", "", "type", "button", "aria-controls", "dropdown-basic", 1, "btn", "btn-primary", "dropdown-toggle", "selectBtn"], [1, "caret"], ["id", "dropdown-basic", "class", "dropdown-menu", "role", "menu", "aria-labelledby", "button-basic", 4, "dropdownMenu"], [1, "row", "justify-content-between"], ["class", "col-xl-5 pt-4", 4, "ngIf", "ngIfElse"], ["noDecks", ""], [1, "col-12", "col-xl-5"], [1, "pt-4", 3, "formGroup", "ngSubmit"], [1, "editCardHeader"], [1, "form-group", "mb-3"], ["for", "deckId", 1, "form-label", "mt-1"], ["id", "deckId", "name", "deckId", "formControlName", "deckId", 1, "form-select", 3, "value"], [4, "ngFor", "ngForOf"], ["for", "front"], ["rows", "4", "name", "front", "formControlName", "front", 1, "form-control", 3, "value"], ["for", "back"], ["rows", "4", "name", "back", "formControlName", "back", 1, "form-control", 3, "value"], ["for", "order"], ["type", "number", "name", "order", "formControlName", "order", 1, "form-control", 3, "value"], [1, "d-flex", "pt-3", "justify-content-between"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], ["type", "button", "class", "btn btn-outline-danger deleteBtn", 3, "disabled", "click", 4, "ngIf"], ["id", "dropdown-basic", "role", "menu", "aria-labelledby", "button-basic", 1, "dropdown-menu"], ["role", "menuitem"], [1, "dropdown-item", 3, "click"], [1, "col-xl-5", "pt-4"], [1, "d-flex", "justify-content-between"], [1, "selectCardHeader"], [4, "ngIf"], [1, "w-100", "d-flex", "mt-1"], [1, "text-muted", "text-center", "listHeadingOrder"], [1, "w-50", "text-muted", "text-center", "listHeadingFront"], [1, "w-50", "text-muted", "text-center", "listHeadingBack"], [1, "list-group"], [1, "d-flex", "justify-content-between", "align-items-center", "mt-3", "paginationWrapper"], [1, "itemsPerPageForm"], [3, "formControl", "value"], [3, "value"], [1, "itemsPerPageLabel"], ["responsive", "true", "maxSize", "5", "screenReaderPaginationLabel", "Pagination", "screenReaderPageLabel", "page", "screenReaderCurrentLabel", "You're on page", 1, "my-pagination", 3, "pageChange", "pageBoundsCorrection"], ["type", "button", 1, "list-group-item", "list-group-item-action", "d-flex", "displayCardBtn", 3, "ngClass", "click"], [1, "displayCardOrder"], [1, "displayCardFront"], [1, "displayCardBack"], [1, "col-12", "col-xl-5", "pt-4"], [3, "routerLink"], ["type", "button", 1, "btn", "btn-outline-danger", "deleteBtn", 3, "disabled", "click"]], template: function EditCardsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, EditCardsComponent_div_0_Template, 37, 13, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.user);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_12__["BsDropdownDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_12__["BsDropdownToggleDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_12__["BsDropdownMenuDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_x"], ngx_pagination__WEBPACK_IMPORTED_MODULE_13__["PaginationControlsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_13__["PaginatePipe"]], styles: [".selectBtn[_ngcontent-%COMP%] {\r\n  min-width: 9rem;\r\n}\r\n\r\n.disabled[_ngcontent-%COMP%] {\r\n  pointer-events: none;\r\n}\r\n\r\n.listHeadingFront[_ngcontent-%COMP%] {\r\n  margin-left: 2rem;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.listHeadingBack[_ngcontent-%COMP%] {\r\n  margin-left: 0.5rem;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.listHeadingOrder[_ngcontent-%COMP%] {\r\n  padding-left: 1rem;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.displayCardOrder[_ngcontent-%COMP%] {\r\n  margin: 0.5rem 0.5rem 0.5rem 1rem;\r\n  max-height: 100px;\r\n  width: 3rem;\r\n}\r\n\r\n.displayCardFront[_ngcontent-%COMP%] {\r\n  margin: 0.5rem 0.5rem 0.5rem 1rem;\r\n  overflow: hidden;\r\n  overflow-wrap: anywhere;\r\n  max-height: 100px;\r\n  width: 50%;\r\n}\r\n\r\n.displayCardBack[_ngcontent-%COMP%] {\r\n  margin: 0.5rem 1rem 0.5rem 0.5rem;\r\n  overflow: hidden;\r\n  overflow-wrap: anywhere;\r\n  max-height: 100px;\r\n  width: 50%;\r\n}\r\n\r\n.displayCardBtn[_ngcontent-%COMP%] {\r\n  padding: 0rem;\r\n}\r\n\r\n.list-group-item[_ngcontent-%COMP%]:hover {\r\n  color: black;\r\n}\r\n\r\n.active[_ngcontent-%COMP%]:hover {\r\n  color: #fff;\r\n}\r\n\r\n.cancelDeleteBtn[_ngcontent-%COMP%] {\r\n  margin-left: 1rem;\r\n}\r\n\r\n.confirmDeleteBtn[_ngcontent-%COMP%] {\r\n  margin-left: 1rem;\r\n}\r\n\r\n.paginationWrapper[_ngcontent-%COMP%] {\r\n  font-size: 0.9rem;\r\n}\r\n\r\n.itemsPerPageLabel[_ngcontent-%COMP%] {\r\n  margin-left: 0.5rem;\r\n}\r\n\r\n.my-pagination[_ngcontent-%COMP%]     .ngx-pagination {\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  padding-left: 0rem;\r\n  margin-bottom: 0rem;\r\n}\r\n\r\n.my-pagination[_ngcontent-%COMP%]     .ngx-pagination li a {\r\n  text-decoration: none;\r\n  padding: 0.35rem 0.8rem;\r\n  border-radius: 3px;\r\n}\r\n\r\n.my-pagination[_ngcontent-%COMP%]     .ngx-pagination li a:hover {\r\n  background-color: #253544;\r\n  color: white;\r\n}\r\n\r\n.my-pagination[_ngcontent-%COMP%]     .ngx-pagination .current {\r\n  background: #253544;\r\n  padding: 0.35rem 0.8rem;\r\n  border-radius: 3px;\r\n}\r\n\r\n\r\n\r\n@media only screen and (max-width: 550px) {\r\n  .listHeadingOrder[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n  }\r\n  .listHeadingFront[_ngcontent-%COMP%] {\r\n    margin-left: unset;\r\n    font-size: 1rem;\r\n  }\r\n  .listHeadingBack[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n  }\r\n  .displayCardOrder[_ngcontent-%COMP%] {\r\n    margin: unset;\r\n    margin-top: 0.2rem;\r\n    max-height: 35px;\r\n    text-align: center;\r\n  }\r\n  .displayCardFront[_ngcontent-%COMP%] {\r\n    margin: 0.2rem 0.2rem 0.2rem 0.2rem;\r\n    max-height: 35px;\r\n    width: 50%;\r\n  }\r\n  .displayCardBack[_ngcontent-%COMP%] {\r\n    \r\n    margin: 0.2rem 0.2rem 0.2rem 0.2rem;\r\n    overflow: hidden;\r\n    max-height: 35px;\r\n    width: 50%;\r\n  }\r\n\r\n  .paginationWrapper[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .itemsPerPageForm[_ngcontent-%COMP%] {\r\n    margin-bottom: 1rem;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 1140px) {\r\n  .editCardHeader[_ngcontent-%COMP%] {\r\n    display: block;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtY2FyZHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxpQ0FBaUM7RUFDakMsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7QUFDQTtFQUNFLGlDQUFpQztFQUNqQyxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxpQ0FBaUM7RUFDakMsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsVUFBVTtBQUNaOztBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUNBO0VBQ0UsWUFBWTtBQUNkOztBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUVBOztHQUVHOztBQUVIO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxtQ0FBbUM7SUFDbkMsZ0JBQWdCO0lBQ2hCLFVBQVU7RUFDWjtFQUNBO0lBQ0UsdUNBQXVDO0lBQ3ZDLG1DQUFtQztJQUNuQyxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFVBQVU7RUFDWjs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCO0FBQ0YiLCJmaWxlIjoiZWRpdC1jYXJkcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGVjdEJ0biB7XHJcbiAgbWluLXdpZHRoOiA5cmVtO1xyXG59XHJcblxyXG4uZGlzYWJsZWQge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4ubGlzdEhlYWRpbmdGcm9udCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbn1cclxuLmxpc3RIZWFkaW5nQmFjayB7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG4ubGlzdEhlYWRpbmdPcmRlciB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcbi5kaXNwbGF5Q2FyZE9yZGVyIHtcclxuICBtYXJnaW46IDAuNXJlbSAwLjVyZW0gMC41cmVtIDFyZW07XHJcbiAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgd2lkdGg6IDNyZW07XHJcbn1cclxuLmRpc3BsYXlDYXJkRnJvbnQge1xyXG4gIG1hcmdpbjogMC41cmVtIDAuNXJlbSAwLjVyZW0gMXJlbTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xyXG4gIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuLmRpc3BsYXlDYXJkQmFjayB7XHJcbiAgbWFyZ2luOiAwLjVyZW0gMXJlbSAwLjVyZW0gMC41cmVtO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XHJcbiAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG4uZGlzcGxheUNhcmRCdG4ge1xyXG4gIHBhZGRpbmc6IDByZW07XHJcbn1cclxuLmxpc3QtZ3JvdXAtaXRlbTpob3ZlciB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5hY3RpdmU6aG92ZXIge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uY2FuY2VsRGVsZXRlQnRuIHtcclxuICBtYXJnaW4tbGVmdDogMXJlbTtcclxufVxyXG4uY29uZmlybURlbGV0ZUJ0biB7XHJcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbn1cclxuLnBhZ2luYXRpb25XcmFwcGVyIHtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxufVxyXG5cclxuLml0ZW1zUGVyUGFnZUxhYmVsIHtcclxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG59XHJcblxyXG4ubXktcGFnaW5hdGlvbiAvZGVlcC8gLm5neC1wYWdpbmF0aW9uIHtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAwcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDByZW07XHJcbn1cclxuXHJcbi5teS1wYWdpbmF0aW9uIC9kZWVwLyAubmd4LXBhZ2luYXRpb24gbGkgYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHBhZGRpbmc6IDAuMzVyZW0gMC44cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5cclxuLm15LXBhZ2luYXRpb24gL2RlZXAvIC5uZ3gtcGFnaW5hdGlvbiBsaSBhOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUzNTQ0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm15LXBhZ2luYXRpb24gL2RlZXAvIC5uZ3gtcGFnaW5hdGlvbiAuY3VycmVudCB7XHJcbiAgYmFja2dyb3VuZDogIzI1MzU0NDtcclxuICBwYWRkaW5nOiAwLjM1cmVtIDAuOHJlbTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcbi8qIC5lZGl0Q2FyZEhlYWRlciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufSAqL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTBweCkge1xyXG4gIC5saXN0SGVhZGluZ09yZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICB9XHJcbiAgLmxpc3RIZWFkaW5nRnJvbnQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IHVuc2V0O1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gIH1cclxuICAubGlzdEhlYWRpbmdCYWNrIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICB9XHJcbiAgLmRpc3BsYXlDYXJkT3JkZXIge1xyXG4gICAgbWFyZ2luOiB1bnNldDtcclxuICAgIG1hcmdpbi10b3A6IDAuMnJlbTtcclxuICAgIG1heC1oZWlnaHQ6IDM1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5kaXNwbGF5Q2FyZEZyb250IHtcclxuICAgIG1hcmdpbjogMC4ycmVtIDAuMnJlbSAwLjJyZW0gMC4ycmVtO1xyXG4gICAgbWF4LWhlaWdodDogMzVweDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG4gIC5kaXNwbGF5Q2FyZEJhY2sge1xyXG4gICAgLyogbWFyZ2luOiAwLjVyZW0gMXJlbSAwLjVyZW0gMC41cmVtOyAqL1xyXG4gICAgbWFyZ2luOiAwLjJyZW0gMC4ycmVtIDAuMnJlbSAwLjJyZW07XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWF4LWhlaWdodDogMzVweDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG5cclxuICAucGFnaW5hdGlvbldyYXBwZXIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gIC5pdGVtc1BlclBhZ2VGb3JtIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExNDBweCkge1xyXG4gIC5lZGl0Q2FyZEhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "SEUJ":
/*!************************************************************************************************!*\
  !*** ./src/app/_components/pages/admin/edit-user/view-user-decks/view-user-decks.component.ts ***!
  \************************************************************************************************/
/*! exports provided: ViewUserDecksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewUserDecksComponent", function() { return ViewUserDecksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/admin.service */ "OMJ/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");




function ViewUserDecksComponent_div_0_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const deck_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("routerLink", "/admin/edit-user/", ctx_r1.userId, "/view-deck/", deck_r2.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](deck_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](deck_r2.cards.length);
} }
function ViewUserDecksComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Admin View User Decks");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u2190 Back to edit user");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Deck Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Cards");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ViewUserDecksComponent_div_0_tr_14_Template, 6, 4, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/admin/edit-user/", ctx_r0.userId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.user.decks);
} }
class ViewUserDecksComponent {
    constructor(_adminService, _route) {
        this._adminService = _adminService;
        this._route = _route;
    }
    ngOnInit() {
        this.userId = this._route.snapshot.paramMap.get('id');
        this._adminService.getUser(this.userId).subscribe((res) => {
            this.user = res;
        });
    }
}
ViewUserDecksComponent.ɵfac = function ViewUserDecksComponent_Factory(t) { return new (t || ViewUserDecksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
ViewUserDecksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewUserDecksComponent, selectors: [["app-view-user-decks"]], decls: 1, vars: 1, consts: [["class", "container m-nav", 4, "ngIf"], [1, "container", "m-nav"], [1, "h2", "pt-3"], [3, "routerLink"], [1, "col-xl-6", "pt-3"], [1, "table", "table-hover"], [4, "ngFor", "ngForOf"]], template: function ViewUserDecksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ViewUserDecksComponent_div_0_Template, 15, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LXVzZXItZGVja3MuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "SPWz":
/*!****************************************************************************************************!*\
  !*** ./src/app/_components/pages/decks/deck-page/delete-deck-modal/delete-deck-modal.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: DeleteDeckModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteDeckModalComponent", function() { return DeleteDeckModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var src_app_services_deck_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/deck.service */ "ekfe");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/user.service */ "VITL");





class DeleteDeckModalComponent {
    constructor(bsModalRef, _deckService, _router, _userService) {
        this.bsModalRef = bsModalRef;
        this._deckService = _deckService;
        this._router = _router;
        this._userService = _userService;
    }
    ngOnInit() { }
    deleteDeck(id) {
        this._deckService.deleteDeck(id).subscribe(() => {
            // in the subscribe callback, update the cache
            let deckToDelete = this._userService.userCache.decks.find((deck) => deck.id === id);
            let deckIdx = this._userService.userCache.decks.indexOf(deckToDelete);
            this._userService.userCache.decks.splice(deckIdx, 1);
            this.bsModalRef.hide();
            this._router.navigate(['user/decks']);
        });
    }
}
DeleteDeckModalComponent.ɵfac = function DeleteDeckModalComponent_Factory(t) { return new (t || DeleteDeckModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_deck_service__WEBPACK_IMPORTED_MODULE_2__["DeckService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"])); };
DeleteDeckModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeleteDeckModalComponent, selectors: [["app-delete-deck-modal"]], decls: 13, vars: 0, consts: [[1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", "closeBtn", 3, "click"], ["aria-hidden", "true", 1, "timesSpan"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"]], template: function DeleteDeckModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Delete Deck");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteDeckModalComponent_Template_button_click_3_listener() { return ctx.bsModalRef.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Are you sure you want to delete this deck and all of its cards?\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteDeckModalComponent_Template_button_click_9_listener() { return ctx.deleteDeck(ctx.deckId); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteDeckModalComponent_Template_button_click_11_listener() { return ctx.bsModalRef.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".closeBtn[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  border: none;\r\n  margin-top: -1rem;\r\n}\r\n\r\n.timesSpan[_ngcontent-%COMP%] {\r\n  font-size: 1.8rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbGV0ZS1kZWNrLW1vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJkZWxldGUtZGVjay1tb2RhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsb3NlQnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgbWFyZ2luLXRvcDogLTFyZW07XHJcbn1cclxuXHJcbi50aW1lc1NwYW4ge1xyXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _components_update_sw_modal_update_sw_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_components/update-sw-modal/update-sw-modal.component */ "590x");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_services/account.service */ "5ZPe");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/service-worker */ "3pDu");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_components/navbar/navbar.component */ "1aVU");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_components/footer/footer.component */ "m3nw");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "7g+E");









class AppComponent {
    constructor(_accountService, swUpdate, _modalService) {
        this._accountService = _accountService;
        this.swUpdate = swUpdate;
        this._modalService = _modalService;
    }
    ngOnInit() {
        this.setCurrentUser();
        if (this.swUpdate.isEnabled) {
            this.swUpdate.available.subscribe(() => {
                this.openUpdateModal();
            });
        }
    }
    setCurrentUser() {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            this._accountService.setCurrentUser(user);
        }
    }
    openUpdateModal() {
        this.bsModalRef = this._modalService.show(_components_update_sw_modal_update_sw_modal_component__WEBPACK_IMPORTED_MODULE_0__["UpdateSwModalComponent"]);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_service_worker__WEBPACK_IMPORTED_MODULE_3__["SwUpdate"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 1, consts: [[3, "disableAnimation"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ngx-spinner", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disableAnimation", true);
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerComponent"]], styles: ["main[_ngcontent-%COMP%] {\r\n  \r\n  min-height: 100vh;\r\n  display: grid;\r\n  grid-template-areas: \"navbar\" \"content\" \"footer\";\r\n  grid-template-columns: auto;\r\n  grid-template-rows: -webkit-min-content auto 1fr;\r\n  grid-template-rows: min-content auto 1fr;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQW9DO0VBQ3BDLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsZ0RBQWdEO0VBQ2hELDJCQUEyQjtFQUMzQixnREFBd0M7RUFBeEMsd0NBQXdDO0FBQzFDIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWFpbiB7XHJcbiAgLyogbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDc1cHgpOyAqL1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJuYXZiYXJcIiBcImNvbnRlbnRcIiBcImZvb3RlclwiO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IGF1dG8gMWZyO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "TXdk":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/_components/pages/account-settings/delete-data/delete-data-success/delete-data-success.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: DeleteDataSuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteDataSuccessComponent", function() { return DeleteDataSuccessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");


class DeleteDataSuccessComponent {
    constructor() { }
    ngOnInit() {
    }
}
DeleteDataSuccessComponent.ɵfac = function DeleteDataSuccessComponent_Factory(t) { return new (t || DeleteDataSuccessComponent)(); };
DeleteDataSuccessComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeleteDataSuccessComponent, selectors: [["app-delete-data-success"]], decls: 7, vars: 0, consts: [[1, "container", "m-nav"], [1, "h3", "pt-3"], [1, "mt-4"], ["routerLink", "/"]], template: function DeleteDataSuccessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Delete Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Your account and all of its associated data have been deleted. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Go to home page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGUtZGF0YS1zdWNjZXNzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "VITL":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "IheW");





class UserService {
    constructor(_http) {
        this._http = _http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    getUser(id) {
        if (this.userCache !== undefined && this.userCache !== null) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this.userCache);
        }
        return this._http.get(`${this.baseUrl}/user?id=${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((user) => {
            user.decks.forEach((deck) => {
                deck.cards.sort((a, b) => a.order - b.order);
            });
            this.userCache = user;
            return user;
        }));
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "VNsv":
/*!******************************************************!*\
  !*** ./src/app/_interceptors/loading.interceptor.ts ***!
  \******************************************************/
/*! exports provided: LoadingInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingInterceptor", function() { return LoadingInterceptor; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/loading.service */ "3no8");



class LoadingInterceptor {
    constructor(_loadingService) {
        this._loadingService = _loadingService;
    }
    intercept(request, next) {
        this._loadingService.loading();
        return next.handle(request).pipe(
        // delay(500),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["finalize"])(() => {
            this._loadingService.idle();
        }));
    }
}
LoadingInterceptor.ɵfac = function LoadingInterceptor_Factory(t) { return new (t || LoadingInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_loading_service__WEBPACK_IMPORTED_MODULE_2__["LoadingService"])); };
LoadingInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LoadingInterceptor, factory: LoadingInterceptor.ɵfac });


/***/ }),

/***/ "Vmf6":
/*!******************************************************************!*\
  !*** ./src/app/_components/pages/register/register.component.ts ***!
  \******************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/account.service */ "5ZPe");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");







function RegisterComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter an email. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Has a max length of 40 characters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter a valid email address. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter your password. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Password must be at least 6 characters, contain an uppercase letter, and a number. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please confirm your password. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Your entered passwords don't match. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_23_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", error_r9, " ");
} }
function RegisterComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RegisterComponent_div_23_li_2_Template, 2, 1, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r7.validationErrors);
} }
class RegisterComponent {
    constructor(_accountService, _fb, _router, _titleService) {
        this._accountService = _accountService;
        this._fb = _fb;
        this._router = _router;
        this._titleService = _titleService;
        this.validationErrors = [];
    }
    ngOnInit() {
        this._titleService.setTitle(`Register | FastFlashCards.com`);
        this.initializeForm();
    }
    register() {
        this._accountService.register(this.registerForm.value).subscribe((response) => {
            this._router.navigateByUrl(`/register/success/${response.email}`);
        }, (error) => {
            this.validationErrors = error;
        });
    }
    initializeForm() {
        this.registerForm = this._fb.group({
            email: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(40)],
            ],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(6)]],
            confirmPassword: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, this.matchValues('password')],
            ],
        });
        this.registerForm.controls.password.valueChanges.subscribe(() => {
            this.registerForm.controls.confirmPassword.updateValueAndValidity();
        });
    }
    matchValues(matchTo) {
        return (control) => {
            var _a;
            return (control === null || control === void 0 ? void 0 : control.value) === ((_a = control === null || control === void 0 ? void 0 : control.parent) === null || _a === void 0 ? void 0 : _a.controls[matchTo].value)
                ? null
                : { isMatching: true };
        };
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 26, vars: 16, consts: [[1, "col-lg-4", "col-md-6", "mx-auto", "m-nav", "registerWrapper"], [1, "text-center", "pt-3", "pt-md-5", "h3"], [3, "formGroup", "ngSubmit"], [1, "form-group", "mb-3"], ["for", "email"], ["type", "text", "formControlName", "email", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "password"], ["type", "password", "formControlName", "password", 1, "form-control"], ["for", "confirmPassword"], ["type", "password", "formControlName", "confirmPassword", 1, "form-control"], [4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", "w-100", "mt-3", 3, "disabled"], [1, "invalid-feedback"], [1, "text-danger"], [4, "ngFor", "ngForOf"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_3_listener() { return ctx.registerForm.valid && ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, RegisterComponent_div_8_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, RegisterComponent_div_9_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, RegisterComponent_div_10_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, RegisterComponent_div_15_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, RegisterComponent_div_16_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, RegisterComponent_div_21_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, RegisterComponent_div_22_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, RegisterComponent_div_23_Template, 3, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Register ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.registerForm.get("email").errors && ctx.registerForm.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.registerForm.get("email").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.registerForm.get("email").hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.registerForm.get("email").hasError("email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.registerForm.get("password").errors && ctx.registerForm.get("password").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.registerForm.get("password").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.registerForm.get("password").hasError("minlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.registerForm.get("confirmPassword").errors && ctx.registerForm.get("confirmPassword").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.registerForm.get("confirmPassword").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.registerForm.get("confirmPassword").hasError("isMatching"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.validationErrors.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.registerForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".registerWrapper[_ngcontent-%COMP%] {\r\n  max-width: 25rem;\r\n  padding-left: 1rem;\r\n  padding-right: 1rem;\r\n}\r\n\r\n.google-btn[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  height: 50px;\r\n  width: 240px;\r\n  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 25%);\r\n  border-radius: 1px;\r\n  box-sizing: border-box;\r\n  outline: none;\r\n  border: none;\r\n  transition: background-color 0.218s, border-color 0.218s, box-shadow 0.218s;\r\n  overflow: hidden;\r\n  align-items: center;\r\n  margin: 0 auto;\r\n}\r\n\r\n.bluePart[_ngcontent-%COMP%] {\r\n  background-color: #4285f4;\r\n  text-align: center;\r\n  color: white;\r\n  flex: 1;\r\n  height: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.google-btn[_ngcontent-%COMP%]:hover {\r\n  box-shadow: 0 0 3px 3px rgb(66 133 244 / 30%);\r\n}\r\n\r\n.rio-icon[_ngcontent-%COMP%] {\r\n  border: 1px solid #4285f4;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 50px;\r\n  width: 50px;\r\n  background-color: white;\r\n  border-radius: 1px;\r\n}\r\n\r\n.rio-image[_ngcontent-%COMP%] {\r\n  height: 18px;\r\n  width: 18px;\r\n}\r\n\r\n.google-btn-text[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLHdDQUF3QztFQUN4QyxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixZQUFZO0VBQ1osMkVBQTJFO0VBQzNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLE9BQU87RUFDUCxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDZDQUE2QztBQUMvQzs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osV0FBVztFQUNYLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVnaXN0ZXJXcmFwcGVyIHtcclxuICBtYXgtd2lkdGg6IDI1cmVtO1xyXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG4uZ29vZ2xlLWJ0biB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDI0MHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYigwIDAgMCAvIDI1JSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjIxOHMsIGJvcmRlci1jb2xvciAwLjIxOHMsIGJveC1zaGFkb3cgMC4yMThzO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmJsdWVQYXJ0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI4NWY0O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZmxleDogMTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZ29vZ2xlLWJ0bjpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogMCAwIDNweCAzcHggcmdiKDY2IDEzMyAyNDQgLyAzMCUpO1xyXG59XHJcbi5yaW8taWNvbiB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzQyODVmNDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFweDtcclxufVxyXG5cclxuLnJpby1pbWFnZSB7XHJcbiAgaGVpZ2h0OiAxOHB4O1xyXG4gIHdpZHRoOiAxOHB4O1xyXG59XHJcblxyXG4uZ29vZ2xlLWJ0bi10ZXh0IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "X038":
/*!**************************************************************************************!*\
  !*** ./src/app/_components/pages/login/forgot-password/forgot-password.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/account.service */ "5ZPe");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");







function ForgotPasswordComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter an email. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ForgotPasswordComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Requires at least 3 characters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ForgotPasswordComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Has a max length of 40 characters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ForgotPasswordComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter a valid email address. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class ForgotPasswordComponent {
    constructor(_fb, _accountService, _router, _titleService) {
        this._fb = _fb;
        this._accountService = _accountService;
        this._router = _router;
        this._titleService = _titleService;
        this.validationErrors = [];
        this.errors = {
            email: false,
        };
    }
    ngOnInit() {
        this._titleService.setTitle(`Forgot Password | FastFlashCards.com`);
        this.initializeForm();
    }
    initializeForm() {
        this.forgotPasswordForm = this._fb.group({
            email: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(40),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email,
                ],
            ],
        });
    }
    forgotPassword() {
        this.errors = {
            email: false,
        };
        this._accountService
            .forgotPassword(this.forgotPasswordForm.get('email').value)
            .subscribe((response) => {
            this._router.navigateByUrl('/login/forgot-password-confirmation');
        }, (error) => {
            console.error(error);
        });
    }
}
ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) { return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"])); };
ForgotPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ForgotPasswordComponent, selectors: [["app-forgot-password"]], decls: 14, vars: 8, consts: [[1, "container", "m-nav"], [1, "pt-3"], [1, "col-md-4", "mt-4", "forgotPasswordForm", 3, "formGroup", "ngSubmit"], [1, "form-group", "mb-3"], ["for", "email"], ["type", "email", "name", "email", "formControlName", "email", 1, "form-control", "mr-sm-2"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-warning", 3, "disabled"], [1, "invalid-feedback"]], template: function ForgotPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Forgot Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ForgotPasswordComponent_Template_form_ngSubmit_3_listener() { return ctx.forgotPasswordForm.valid && ctx.forgotPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ForgotPasswordComponent_div_8_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ForgotPasswordComponent_div_9_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ForgotPasswordComponent_div_10_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ForgotPasswordComponent_div_11_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Request reset password email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.forgotPasswordForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.forgotPasswordForm.get("email").errors && ctx.forgotPasswordForm.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.forgotPasswordForm.get("email").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.forgotPasswordForm.get("email").hasError("minlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.forgotPasswordForm.get("email").hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.forgotPasswordForm.get("email").hasError("email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.forgotPasswordForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".forgotPasswordForm[_ngcontent-%COMP%] {\r\n  max-width: 25rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6ImZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcmdvdFBhc3N3b3JkRm9ybSB7XHJcbiAgbWF4LXdpZHRoOiAyNXJlbTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "XHtl":
/*!************************************************************************************!*\
  !*** ./src/app/_components/pages/decks/new-deck-modal/new-deck-modal.component.ts ***!
  \************************************************************************************/
/*! exports provided: NewDeckModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewDeckModalComponent", function() { return NewDeckModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_services_deck_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/deck.service */ "ekfe");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");




class NewDeckModalComponent {
    constructor(_deckService, bsModalRef) {
        this._deckService = _deckService;
        this.bsModalRef = bsModalRef;
    }
    ngOnInit() { }
    createNewDeck(name) {
        this._deckService.createDeck(name).subscribe(() => {
            this.bsModalRef.hide();
            this.loadUser();
        });
    }
}
NewDeckModalComponent.ɵfac = function NewDeckModalComponent_Factory(t) { return new (t || NewDeckModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_deck_service__WEBPACK_IMPORTED_MODULE_1__["DeckService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"])); };
NewDeckModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewDeckModalComponent, selectors: [["app-new-deck-modal"]], decls: 17, vars: 1, consts: [[1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", "closeBtn", 3, "click"], ["aria-hidden", "true", 1, "timesSpan"], [1, "modal-body"], ["createDeckForm", ""], ["for", "name"], ["type", "text", "name", "name", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"]], template: function NewDeckModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "New Deck");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewDeckModalComponent_Template_button_click_3_listener() { return ctx.bsModalRef.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewDeckModalComponent_Template_input_ngModelChange_11_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewDeckModalComponent_Template_button_click_13_listener() { return ctx.createNewDeck(ctx.name); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewDeckModalComponent_Template_button_click_15_listener() { return ctx.bsModalRef.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: [".closeBtn[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  border: none;\r\n  margin-top: -1rem;\r\n}\r\n\r\n.timesSpan[_ngcontent-%COMP%] {\r\n  font-size: 1.8rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1kZWNrLW1vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJuZXctZGVjay1tb2RhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsb3NlQnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgbWFyZ2luLXRvcDogLTFyZW07XHJcbn1cclxuXHJcbi50aW1lc1NwYW4ge1xyXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "YR85":
/*!************************************************************************************!*\
  !*** ./src/app/_components/pages/admin/edit-user/view-deck/view-deck.component.ts ***!
  \************************************************************************************/
/*! exports provided: ViewDeckComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewDeckComponent", function() { return ViewDeckComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/admin.service */ "OMJ/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");




function ViewDeckComponent_div_0_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r2.front);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r2.back);
} }
function ViewDeckComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Admin View Deck:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u2190 Back to decks");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Front");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ViewDeckComponent_div_0_tr_14_Template, 5, 2, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/admin/edit-user/", ctx_r0.userId, "/view-user-decks");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.deck.cards);
} }
class ViewDeckComponent {
    constructor(_adminService, _route) {
        this._adminService = _adminService;
        this._route = _route;
    }
    ngOnInit() {
        this.userId = this._route.snapshot.paramMap.get('id');
        this.deckId = parseInt(this._route.snapshot.paramMap.get('deckId'));
        this._adminService.getUser(this.userId).subscribe((res) => {
            this.user = res;
            this.deck = this.user.decks.find((deck) => deck.id === this.deckId);
        });
    }
}
ViewDeckComponent.ɵfac = function ViewDeckComponent_Factory(t) { return new (t || ViewDeckComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
ViewDeckComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewDeckComponent, selectors: [["app-view-deck"]], decls: 1, vars: 1, consts: [["class", "container m-nav", 4, "ngIf"], [1, "container", "m-nav"], [1, "h2", "pt-3"], [3, "routerLink"], [1, "col-xl-6", "pt-3"], [1, "table", "table-hover"], [4, "ngFor", "ngForOf"]], template: function ViewDeckComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ViewDeckComponent_div_0_Template, 15, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deck);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LWRlY2suY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_components/navbar/navbar.component */ "1aVU");
/* harmony import */ var _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_components/pages/home/home.component */ "dkfK");
/* harmony import */ var _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_components/pages/login/login.component */ "C677");
/* harmony import */ var _components_pages_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_components/pages/register/register.component */ "Vmf6");
/* harmony import */ var _components_pages_decks_decks_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_components/pages/decks/decks.component */ "xO4e");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _components_pages_decks_new_deck_modal_new_deck_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_components/pages/decks/new-deck-modal/new-deck-modal.component */ "XHtl");
/* harmony import */ var _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_interceptors/jwt.interceptor */ "Btx/");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-spinner */ "7g+E");
/* harmony import */ var _interceptors_loading_interceptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_interceptors/loading.interceptor */ "VNsv");
/* harmony import */ var _components_pages_add_cards_add_cards_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_components/pages/add-cards/add-cards.component */ "DbnP");
/* harmony import */ var _components_pages_decks_study_study_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./_components/pages/decks/study/study.component */ "vnvB");
/* harmony import */ var _components_pages_decks_deck_page_deck_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./_components/pages/decks/deck-page/deck-page.component */ "xE7F");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "FE24");
/* harmony import */ var _components_pages_edit_cards_edit_cards_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./_components/pages/edit-cards/edit-cards.component */ "RB8j");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-pagination */ "xkgV");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./_components/footer/footer.component */ "m3nw");
/* harmony import */ var _components_pages_decks_deck_page_delete_deck_modal_delete_deck_modal_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./_components/pages/decks/deck-page/delete-deck-modal/delete-deck-modal.component */ "SPWz");
/* harmony import */ var _components_pages_decks_deck_page_edit_name_modal_edit_name_modal_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./_components/pages/decks/deck-page/edit-name-modal/edit-name-modal.component */ "hfjq");
/* harmony import */ var _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./_interceptors/error.interceptor */ "MMab");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _components_pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./_components/pages/not-found/not-found.component */ "jfA9");
/* harmony import */ var _components_pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./_components/pages/admin/admin.component */ "yF3x");
/* harmony import */ var _directives_has_claim_directive__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./_directives/has-claim.directive */ "vXBT");
/* harmony import */ var _components_pages_register_success_success_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./_components/pages/register/success/success.component */ "PZyb");
/* harmony import */ var _components_pages_register_confirm_email_confirm_email_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./_components/pages/register/confirm-email/confirm-email.component */ "6fPH");
/* harmony import */ var _components_pages_login_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./_components/pages/login/forgot-password/forgot-password.component */ "X038");
/* harmony import */ var _components_pages_login_forgot_password_confirmation_forgot_password_confirmation_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./_components/pages/login/forgot-password-confirmation/forgot-password-confirmation.component */ "6tBi");
/* harmony import */ var _components_pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./_components/pages/reset-password/reset-password.component */ "eLWC");
/* harmony import */ var _components_pages_reset_password_reset_password_confirmation_reset_password_confirmation_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./_components/pages/reset-password/reset-password-confirmation/reset-password-confirmation.component */ "uoKe");
/* harmony import */ var _components_pages_account_settings_account_settings_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./_components/pages/account-settings/account-settings.component */ "tym/");
/* harmony import */ var _components_pages_account_settings_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./_components/pages/account-settings/change-password/change-password.component */ "8xvR");
/* harmony import */ var _components_pages_account_settings_change_password_change_password_success_change_password_success_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./_components/pages/account-settings/change-password/change-password-success/change-password-success.component */ "mkZK");
/* harmony import */ var _components_pages_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./_components/pages/server-error/server-error.component */ "MHiA");
/* harmony import */ var _components_pages_edit_cards_delete_card_modal_delete_card_modal_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./_components/pages/edit-cards/delete-card-modal/delete-card-modal.component */ "5Ks0");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/service-worker */ "3pDu");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _components_update_sw_modal_update_sw_modal_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./_components/update-sw-modal/update-sw-modal.component */ "590x");
/* harmony import */ var _components_pages_account_settings_delete_data_delete_data_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./_components/pages/account-settings/delete-data/delete-data.component */ "eMoB");
/* harmony import */ var _components_pages_account_settings_delete_data_delete_data_success_delete_data_success_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./_components/pages/account-settings/delete-data/delete-data-success/delete-data-success.component */ "TXdk");
/* harmony import */ var _components_pages_admin_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./_components/pages/admin/edit-user/edit-user.component */ "qxKG");
/* harmony import */ var _components_pages_admin_edit_user_edit_email_confirmed_modal_edit_email_confirmed_modal_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./_components/pages/admin/edit-user/edit-email-confirmed-modal/edit-email-confirmed-modal.component */ "q16d");
/* harmony import */ var _components_pages_admin_edit_user_view_user_decks_view_user_decks_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./_components/pages/admin/edit-user/view-user-decks/view-user-decks.component */ "SEUJ");
/* harmony import */ var _components_pages_admin_edit_user_view_deck_view_deck_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./_components/pages/admin/edit-user/view-deck/view-deck.component */ "YR85");
/* harmony import */ var _components_pages_admin_edit_user_edit_password_modal_edit_password_modal_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./_components/pages/admin/edit-user/edit-password-modal/edit-password-modal.component */ "rmh8");
/* harmony import */ var _components_pages_admin_edit_user_delete_user_modal_delete_user_modal_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./_components/pages/admin/edit-user/delete-user-modal/delete-user-modal.component */ "sfeG");
/* harmony import */ var _components_pages_login_send_verification_email_send_verification_email_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./_components/pages/login/send-verification-email/send-verification-email.component */ "0STe");
/* harmony import */ var _components_pages_login_send_verification_email_confirmation_send_verification_email_confirmation_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./_components/pages/login/send-verification-email-confirmation/send-verification-email-confirmation.component */ "o/3F");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @angular/core */ "8Y7J");



























































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_54__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_54__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_13__["JwtInterceptor"], multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _interceptors_loading_interceptor__WEBPACK_IMPORTED_MODULE_15__["LoadingInterceptor"], multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_25__["ErrorInterceptor"], multi: true },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalModule"].forRoot(),
            ngx_spinner__WEBPACK_IMPORTED_MODULE_14__["NgxSpinnerModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_19__["BsDropdownModule"].forRoot(),
            ngx_pagination__WEBPACK_IMPORTED_MODULE_21__["NgxPaginationModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_26__["ToastrModule"].forRoot({
                positionClass: 'toast-bottom-left',
            }),
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_41__["ServiceWorkerModule"].register('ngsw-worker.js', {
                enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_42__["environment"].production,
                // Register the ServiceWorker as soon as the app is stable
                // or after 30 seconds (whichever comes first).
                registrationStrategy: 'registerImmediately',
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_54__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
        _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
        _components_pages_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
        _components_pages_decks_decks_component__WEBPACK_IMPORTED_MODULE_10__["DecksComponent"],
        _components_pages_decks_new_deck_modal_new_deck_modal_component__WEBPACK_IMPORTED_MODULE_12__["NewDeckModalComponent"],
        _components_pages_add_cards_add_cards_component__WEBPACK_IMPORTED_MODULE_16__["AddCardsComponent"],
        _components_pages_decks_study_study_component__WEBPACK_IMPORTED_MODULE_17__["StudyComponent"],
        _components_pages_decks_deck_page_deck_page_component__WEBPACK_IMPORTED_MODULE_18__["DeckPageComponent"],
        _components_pages_edit_cards_edit_cards_component__WEBPACK_IMPORTED_MODULE_20__["EditCardsComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_22__["FooterComponent"],
        _components_pages_decks_deck_page_delete_deck_modal_delete_deck_modal_component__WEBPACK_IMPORTED_MODULE_23__["DeleteDeckModalComponent"],
        _components_pages_decks_deck_page_edit_name_modal_edit_name_modal_component__WEBPACK_IMPORTED_MODULE_24__["EditNameModalComponent"],
        _components_pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_27__["NotFoundComponent"],
        _components_pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_28__["AdminComponent"],
        _directives_has_claim_directive__WEBPACK_IMPORTED_MODULE_29__["HasClaimDirective"],
        _components_pages_register_success_success_component__WEBPACK_IMPORTED_MODULE_30__["SuccessComponent"],
        _components_pages_register_confirm_email_confirm_email_component__WEBPACK_IMPORTED_MODULE_31__["ConfirmEmailComponent"],
        _components_pages_login_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_32__["ForgotPasswordComponent"],
        _components_pages_login_forgot_password_confirmation_forgot_password_confirmation_component__WEBPACK_IMPORTED_MODULE_33__["ForgotPasswordConfirmationComponent"],
        _components_pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_34__["ResetPasswordComponent"],
        _components_pages_reset_password_reset_password_confirmation_reset_password_confirmation_component__WEBPACK_IMPORTED_MODULE_35__["ResetPasswordConfirmationComponent"],
        _components_pages_account_settings_account_settings_component__WEBPACK_IMPORTED_MODULE_36__["AccountSettingsComponent"],
        _components_pages_account_settings_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_37__["ChangePasswordComponent"],
        _components_pages_account_settings_change_password_change_password_success_change_password_success_component__WEBPACK_IMPORTED_MODULE_38__["ChangePasswordSuccessComponent"],
        _components_pages_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_39__["ServerErrorComponent"],
        _components_pages_edit_cards_delete_card_modal_delete_card_modal_component__WEBPACK_IMPORTED_MODULE_40__["DeleteCardModalComponent"],
        _components_update_sw_modal_update_sw_modal_component__WEBPACK_IMPORTED_MODULE_43__["UpdateSwModalComponent"],
        _components_pages_account_settings_delete_data_delete_data_component__WEBPACK_IMPORTED_MODULE_44__["DeleteDataComponent"],
        _components_pages_account_settings_delete_data_delete_data_success_delete_data_success_component__WEBPACK_IMPORTED_MODULE_45__["DeleteDataSuccessComponent"],
        _components_pages_admin_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_46__["EditUserComponent"],
        _components_pages_admin_edit_user_edit_email_confirmed_modal_edit_email_confirmed_modal_component__WEBPACK_IMPORTED_MODULE_47__["EditEmailConfirmedModalComponent"],
        _components_pages_admin_edit_user_view_user_decks_view_user_decks_component__WEBPACK_IMPORTED_MODULE_48__["ViewUserDecksComponent"],
        _components_pages_admin_edit_user_view_deck_view_deck_component__WEBPACK_IMPORTED_MODULE_49__["ViewDeckComponent"],
        _components_pages_admin_edit_user_edit_password_modal_edit_password_modal_component__WEBPACK_IMPORTED_MODULE_50__["EditPasswordModalComponent"],
        _components_pages_admin_edit_user_delete_user_modal_delete_user_modal_component__WEBPACK_IMPORTED_MODULE_51__["DeleteUserModalComponent"],
        _components_pages_login_send_verification_email_send_verification_email_component__WEBPACK_IMPORTED_MODULE_52__["SendVerificationEmailComponent"],
        _components_pages_login_send_verification_email_confirmation_send_verification_email_confirmation_component__WEBPACK_IMPORTED_MODULE_53__["SendVerificationEmailConfirmationComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_14__["NgxSpinnerModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_19__["BsDropdownModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_21__["NgxPaginationModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_26__["ToastrModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_41__["ServiceWorkerModule"]] }); })();


/***/ }),

/***/ "dkfK":
/*!**********************************************************!*\
  !*** ./src/app/_components/pages/home/home.component.ts ***!
  \**********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/account.service */ "5ZPe");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");






function HomeComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.demoCards[ctx_r0.counter].back, " ");
} }
function HomeComponent_button_26_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_button_26_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.toggleReveal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Show Answer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_button_27_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_button_27_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/register"]; };
const _c1 = function () { return ["/login"]; };
class HomeComponent {
    constructor(_titleService, _router, _toastr, _accountService) {
        this._titleService = _titleService;
        this._router = _router;
        this._toastr = _toastr;
        this._accountService = _accountService;
        this.demoCards = [
            // {
            //   front: 'What are the benefits of flash cards?',
            //   back: 'Flash cards are one of the best ways to test yourself and train your brain to actively recall information.',
            // },
            {
                front: 'Why use FastFlashCards.com?',
                back: 'Take your cards with you everywhere! Just open your browser and study.',
            },
            {
                front: 'How do I start making cards?',
                back: "Register with an email and password. That's it!",
            },
            {
                front: 'Why do I have to make an account?',
                back: "That's the only way to save your cards! Your email and data will only be used here to manage your account.",
            },
        ];
        this.counter = 0;
        this.reveal = false;
    }
    ngOnInit() {
        this._titleService.setTitle(`Home | FastFlashCards.com`);
    }
    toggleReveal() {
        this.reveal = !this.reveal;
    }
    next() {
        if (this.counter + 1 >= this.demoCards.length) {
            this.reveal = false;
            this.counter = 0;
            return;
        }
        this.counter++;
        this.reveal = false;
    }
    resetCounter() {
        this.counter = 0;
    }
    demoLogin() {
        this._accountService.demoLogin().subscribe(() => {
            this._router.navigateByUrl('/user/decks');
        }, (error) => {
            this._toastr.error('Error logging into demo.');
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 28, vars: 10, consts: [[1, "container", "m-nav"], [1, "hero"], [1, "hero-info"], [1, "mb-4"], [1, "btn", "btn-success", "btn-lg", "registerBtn", 3, "routerLink"], [1, "btn", "btn-info", "btn-lg", "loginBtn", 3, "routerLink"], [1, "btn", "btn-lg", "btn-warning", "demoLoginBtn", 3, "click"], [1, "hero-graphic"], [1, "d-flex", "justify-content-between"], [1, "h6"], [1, "demo-deck-btn", 3, "click"], [1, "card", "mb-3", "my-card"], [1, "card-body"], [1, "h4", "text-center", "w-100"], [4, "ngIf"], [1, "card-footer", "d-flex", "justify-content-center"], ["type", "button", "class", "btn btn-primary", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-info", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-info", 3, "click"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Fast Flash Cards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Create an account to store all of your cards for free. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_11_listener() { return ctx.demoLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Try Demo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_16_listener() { return ctx.resetCounter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Demo Deck ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, HomeComponent_div_24_Template, 4, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, HomeComponent_button_26_Template, 2, 0, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, HomeComponent_button_27_Template, 2, 0, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.counter + 1, "/", ctx.demoCards.length, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.demoCards[ctx.counter].front);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reveal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.reveal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reveal);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".hero[_ngcontent-%COMP%] {\r\n  min-height: 75vh;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n}\r\n\r\n.h4[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h4[_ngcontent-%COMP%] {\r\n  font-weight: 400;\r\n}\r\n\r\n.hero-info[_ngcontent-%COMP%] {\r\n  align-self: center;\r\n  justify-self: center;\r\n}\r\n\r\n.hero-graphic[_ngcontent-%COMP%] {\r\n  width: 30rem;\r\n  align-self: center;\r\n  justify-self: center;\r\n}\r\n\r\n.registerBtn[_ngcontent-%COMP%] {\r\n  margin-right: 1rem;\r\n  width: 7rem;\r\n}\r\n\r\n.loginBtn[_ngcontent-%COMP%] {\r\n  width: 7rem;\r\n  margin-right: 1rem;\r\n}\r\n\r\n.my-card[_ngcontent-%COMP%] {\r\n  height: 20rem;\r\n  border-color: #c7c7c7;\r\n  box-shadow: 0px 2px 8px 1px rgb(14 30 37 / 12%);\r\n}\r\n\r\n.demo-deck-btn[_ngcontent-%COMP%] {\r\n  color: #18bc9c;\r\n  text-decoration: underline;\r\n  border: none;\r\n  background-color: transparent;\r\n}\r\n\r\n.demoLoginBtn[_ngcontent-%COMP%] {\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n}\r\n\r\n@media only screen and (max-width: 1050px) {\r\n  .hero[_ngcontent-%COMP%] {\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  .hero-info[_ngcontent-%COMP%] {\r\n    margin-top: 4rem;\r\n    margin-bottom: 4rem;\r\n    text-align: center;\r\n    align-self: center;\r\n    justify-self: center;\r\n  }\r\n\r\n  .hero-graphic[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    max-width: 30rem;\r\n    align-self: center;\r\n    justify-self: center;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 700px) {\r\n  .demoLoginBtn[_ngcontent-%COMP%] {\r\n    margin-top: 1rem;\r\n  }\r\n\r\n  .loginBtn[_ngcontent-%COMP%] {\r\n    margin-right: unset;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBOzs7RUFHRSxnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsK0NBQStDO0FBQ2pEOztBQUVBO0VBQ0UsY0FBYztFQUNkLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixvQkFBb0I7RUFDdEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCO0FBQ0YiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlcm8ge1xyXG4gIG1pbi1oZWlnaHQ6IDc1dmg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbn1cclxuXHJcbi5oNCxcclxuaDEsXHJcbmg0IHtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbi5oZXJvLWluZm8ge1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuLmhlcm8tZ3JhcGhpYyB7XHJcbiAgd2lkdGg6IDMwcmVtO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuLnJlZ2lzdGVyQnRuIHtcclxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgd2lkdGg6IDdyZW07XHJcbn1cclxuXHJcbi5sb2dpbkJ0biB7XHJcbiAgd2lkdGg6IDdyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG4ubXktY2FyZCB7XHJcbiAgaGVpZ2h0OiAyMHJlbTtcclxuICBib3JkZXItY29sb3I6ICNjN2M3Yzc7XHJcbiAgYm94LXNoYWRvdzogMHB4IDJweCA4cHggMXB4IHJnYigxNCAzMCAzNyAvIDEyJSk7XHJcbn1cclxuXHJcbi5kZW1vLWRlY2stYnRuIHtcclxuICBjb2xvcjogIzE4YmM5YztcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5kZW1vTG9naW5CdG4ge1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDUwcHgpIHtcclxuICAuaGVybyB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICB9XHJcblxyXG4gIC5oZXJvLWluZm8ge1xyXG4gICAgbWFyZ2luLXRvcDogNHJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDRyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5oZXJvLWdyYXBoaWMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDMwcmVtO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgLmRlbW9Mb2dpbkJ0biB7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLmxvZ2luQnRuIHtcclxuICAgIG1hcmdpbi1yaWdodDogdW5zZXQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "eLWC":
/*!******************************************************************************!*\
  !*** ./src/app/_components/pages/reset-password/reset-password.component.ts ***!
  \******************************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/account.service */ "5ZPe");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");







function ResetPasswordComponent_form_3_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ResetPasswordComponent_form_3_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Password must be at least 6 characters, contain an uppercase letter, and a number. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ResetPasswordComponent_form_3_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please confirm your password. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ResetPasswordComponent_form_3_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Your entered passwords don't match. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ResetPasswordComponent_form_3_div_13_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", error_r8, " ");
} }
function ResetPasswordComponent_form_3_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ResetPasswordComponent_form_3_div_13_li_2_Template, 2, 1, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r6.validationErrors);
} }
function ResetPasswordComponent_form_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ResetPasswordComponent_form_3_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.resetPasswordForm.valid && ctx_r9.resetPassword(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "New Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ResetPasswordComponent_form_3_div_5_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ResetPasswordComponent_form_3_div_6_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Confirm New Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ResetPasswordComponent_form_3_div_11_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ResetPasswordComponent_form_3_div_12_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ResetPasswordComponent_form_3_div_13_Template, 3, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Reset Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.resetPasswordForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx_r0.resetPasswordForm.get("password").errors && ctx_r0.resetPasswordForm.get("password").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.resetPasswordForm.get("password").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.resetPasswordForm.get("password").hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx_r0.resetPasswordForm.get("confirmPassword").errors && ctx_r0.resetPasswordForm.get("confirmPassword").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.resetPasswordForm.get("confirmPassword").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.resetPasswordForm.get("confirmPassword").hasError("isMatching"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.validationErrors.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r0.resetPasswordForm.valid);
} }
function ResetPasswordComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " An issue has occurred. Your password cannot be reset with the link you've used. Please make sure you're using the exact link from the email and try again. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class ResetPasswordComponent {
    constructor(_accountService, _router, _route, _fb, _titleService) {
        this._accountService = _accountService;
        this._router = _router;
        this._route = _route;
        this._fb = _fb;
        this._titleService = _titleService;
        this.validationErrors = [];
        this.errors = {
            password: false,
            confirmPassword: false,
            email: false,
            token: false,
        };
    }
    ngOnInit() {
        this._titleService.setTitle(`Reset Password | FastFlashCards.com`);
        this.initializeForm();
        this.email = this._route.snapshot.queryParamMap.get('email');
        this.token = this._route.snapshot.queryParamMap.get('token');
        if (!this.email)
            this.errors.email = true;
        if (!this.token)
            this.errors.token = true;
    }
    initializeForm() {
        this.resetPasswordForm = this._fb.group({
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(6)]],
            confirmPassword: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, this.matchValues('password')],
            ],
        });
        this.resetPasswordForm.controls.password.valueChanges.subscribe(() => {
            this.resetPasswordForm.controls.confirmPassword.updateValueAndValidity();
        });
    }
    matchValues(matchTo) {
        return (control) => {
            var _a;
            return (control === null || control === void 0 ? void 0 : control.value) === ((_a = control === null || control === void 0 ? void 0 : control.parent) === null || _a === void 0 ? void 0 : _a.controls[matchTo].value)
                ? null
                : { isMatching: true };
        };
    }
    resetPassword() {
        const dto = {
            email: this.email,
            token: this.token,
            password: this.resetPasswordForm.value.password,
        };
        this._accountService.resetPassword(dto).subscribe((response) => {
            this._router.navigateByUrl(`/reset-password/success`);
        }, (error) => {
            this.validationErrors = error;
        });
    }
}
ResetPasswordComponent.ɵfac = function ResetPasswordComponent_Factory(t) { return new (t || ResetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"])); };
ResetPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ResetPasswordComponent, selectors: [["app-reset-password"]], decls: 5, vars: 2, consts: [[1, "col-lg-4", "col-md-6", "m-nav", "mx-auto", "resetPasswordWrapper"], [1, "text-center", "pt-3", "pt-lg-5", "h3"], ["class", "mt-4", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["class", "text-danger mt-4", 4, "ngIf"], [1, "mt-4", 3, "formGroup", "ngSubmit"], [1, "form-group", "mb-3"], ["for", "password"], ["type", "password", "formControlName", "password", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "confirmPassword"], ["type", "password", "formControlName", "confirmPassword", 1, "form-control"], [4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", "w-100", "mt-3", 3, "disabled"], [1, "invalid-feedback"], [1, "text-danger"], [4, "ngFor", "ngForOf"], [1, "text-danger", "mt-4"]], template: function ResetPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Reset Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ResetPasswordComponent_form_3_Template, 16, 11, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ResetPasswordComponent_div_4_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.errors.email && !ctx.errors.token);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errors.email || ctx.errors.token);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".resetPasswordWrapper[_ngcontent-%COMP%] {\r\n  max-width: 25rem;\r\n  padding-left: 1rem;\r\n  padding-right: 1rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJyZXNldC1wYXNzd29yZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlc2V0UGFzc3dvcmRXcmFwcGVyIHtcclxuICBtYXgtd2lkdGg6IDI1cmVtO1xyXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "eMoB":
/*!*****************************************************************************************!*\
  !*** ./src/app/_components/pages/account-settings/delete-data/delete-data.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: DeleteDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteDataComponent", function() { return DeleteDataComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/account.service */ "5ZPe");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");







function DeleteDataComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DeleteDataComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Password must be at least 6 characters, contain an uppercase letter, and a number. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DeleteDataComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Invalid password. *Reminder: passwords require a number, uppercase letter, and at least 6 characters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DeleteDataComponent_div_11_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", error_r5, " ");
} }
function DeleteDataComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DeleteDataComponent_div_11_li_2_Template, 2, 1, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.validationErrors);
} }
class DeleteDataComponent {
    constructor(_fb, _router, _accountService, _titleService) {
        this._fb = _fb;
        this._router = _router;
        this._accountService = _accountService;
        this._titleService = _titleService;
        this.validationErrors = [];
        this.errors = {
            password: false,
        };
    }
    ngOnInit() {
        this._titleService.setTitle(`Delete Data | FastFlashCards.com`);
        this.initializeForm();
    }
    initializeForm() {
        this.deleteDataForm = this._fb.group({
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(6)]],
        });
    }
    deleteData() {
        const dto = {
            password: this.deleteDataForm.value.password,
        };
        this._accountService.deleteData(dto).subscribe(() => {
            this._router.navigateByUrl(`/user/account-settings/delete-data/success`);
            this._accountService.logout();
        }, (error) => {
            console.log('in deleteData component:', error);
            if (error.error.type === 'password') {
                this.errors.password = true;
            }
        });
    }
}
DeleteDataComponent.ɵfac = function DeleteDataComponent_Factory(t) { return new (t || DeleteDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"])); };
DeleteDataComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DeleteDataComponent, selectors: [["app-delete-data"]], decls: 14, vars: 8, consts: [[1, "container", "m-nav"], [1, "h3", "pt-3"], [1, "mt-4", "col-md-4", "changePasswordForm", 3, "formGroup", "ngSubmit"], [1, "form-group", "mb-3"], ["for", "currentPassword"], ["type", "password", "formControlName", "password", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["class", "text-danger invalidFeedback", 4, "ngIf"], [4, "ngIf"], ["type", "submit", 1, "btn", "btn-outline-danger", "w-100", "mt-3", 3, "disabled"], [1, "invalid-feedback"], [1, "text-danger", "invalidFeedback"], [1, "text-danger"], [4, "ngFor", "ngForOf"]], template: function DeleteDataComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Delete Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function DeleteDataComponent_Template_form_ngSubmit_3_listener() { return ctx.deleteDataForm.valid && ctx.deleteData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Enter your password to delete your account.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, DeleteDataComponent_div_8_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, DeleteDataComponent_div_9_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, DeleteDataComponent_div_10_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, DeleteDataComponent_div_11_Template, 3, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Delete Account ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.deleteDataForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.deleteDataForm.get("password").errors && ctx.deleteDataForm.get("password").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.deleteDataForm.get("password").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.deleteDataForm.get("password").hasError("minlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errors.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.validationErrors.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.deleteDataForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGUtZGF0YS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "ekfe":
/*!*******************************************!*\
  !*** ./src/app/_services/deck.service.ts ***!
  \*******************************************/
/*! exports provided: DeckService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeckService", function() { return DeckService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.service */ "VITL");






class DeckService {
    constructor(_http, _userService) {
        this._http = _http;
        this._userService = _userService;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
        // persisting deck across pages
        this.currentDeckIdSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
        this.currentDeckId$ = this.currentDeckIdSource.asObservable();
    }
    createDeck(name) {
        return this._http.post(`${this.baseUrl}/deck?deckName=${name}`, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((deck) => {
            deck.cards = [];
            this._userService.userCache.decks.push(deck);
        }));
    }
    setCurrentDeckId(id) {
        this.currentDeckIdSource.next(id);
    }
    getDeckById(id) {
        var _a;
        const deckFromCache = (_a = this._userService.userCache) === null || _a === void 0 ? void 0 : _a.decks.find((deck) => deck.id === id);
        if (deckFromCache) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(deckFromCache);
        }
        return this._http.get(`${this.baseUrl}/deck?id=${id}`);
    }
    editDeckName(name, id) {
        return this._http.put(`${this.baseUrl}/deck?name=${name}&id=${id}`, {});
    }
    deleteDeck(id) {
        return this._http.delete(`${this.baseUrl}/deck/${id}`);
    }
}
DeckService.ɵfac = function DeckService_Factory(t) { return new (t || DeckService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"])); };
DeckService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: DeckService, factory: DeckService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "hfjq":
/*!************************************************************************************************!*\
  !*** ./src/app/_components/pages/decks/deck-page/edit-name-modal/edit-name-modal.component.ts ***!
  \************************************************************************************************/
/*! exports provided: EditNameModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditNameModalComponent", function() { return EditNameModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var src_app_services_deck_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/deck.service */ "ekfe");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/user.service */ "VITL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");





class EditNameModalComponent {
    constructor(bsModalRef, _deckService, _userService) {
        this.bsModalRef = bsModalRef;
        this._deckService = _deckService;
        this._userService = _userService;
    }
    ngOnInit() { }
    editDeckName(name, deckId) {
        this._deckService.editDeckName(name, deckId).subscribe(() => {
            // in the subscribe callback, update the cache
            let deckToUpdate = this._userService.userCache.decks.find((deck) => deck.id === deckId);
            deckToUpdate.name = name;
            this.bsModalRef.hide();
        });
    }
}
EditNameModalComponent.ɵfac = function EditNameModalComponent_Factory(t) { return new (t || EditNameModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_deck_service__WEBPACK_IMPORTED_MODULE_2__["DeckService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
EditNameModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditNameModalComponent, selectors: [["app-edit-name-modal"]], decls: 17, vars: 1, consts: [[1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", "closeBtn", 3, "click"], ["aria-hidden", "true", 1, "timesSpan"], [1, "modal-body"], ["createDeckForm", ""], ["for", "name"], ["type", "text", "name", "name", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"]], template: function EditNameModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit Deck Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditNameModalComponent_Template_button_click_3_listener() { return ctx.bsModalRef.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditNameModalComponent_Template_input_ngModelChange_11_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditNameModalComponent_Template_button_click_13_listener() { return ctx.editDeckName(ctx.name, ctx.deckId); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditNameModalComponent_Template_button_click_15_listener() { return ctx.bsModalRef.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".closeBtn[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  border: none;\r\n  margin-top: -1rem;\r\n}\r\n\r\n.timesSpan[_ngcontent-%COMP%] {\r\n  font-size: 1.8rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtbmFtZS1tb2RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoiZWRpdC1uYW1lLW1vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xvc2VCdG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBtYXJnaW4tdG9wOiAtMXJlbTtcclxufVxyXG5cclxuLnRpbWVzU3BhbiB7XHJcbiAgZm9udC1zaXplOiAxLjhyZW07XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "jfA9":
/*!********************************************************************!*\
  !*** ./src/app/_components/pages/not-found/not-found.component.ts ***!
  \********************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");


class NotFoundComponent {
    constructor(_titleService) {
        this._titleService = _titleService;
    }
    ngOnInit() {
        this._titleService.setTitle(`Not Found | FastFlashCards.com`);
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 3, vars: 0, consts: [[1, "container", "m-nav"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Not Found Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "m3nw":
/*!********************************************************!*\
  !*** ./src/app/_components/footer/footer.component.ts ***!
  \********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");


class FooterComponent {
    constructor() { }
    ngOnInit() {
        let dateObj = new Date();
        this.year = dateObj.getFullYear();
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 18, vars: 1, consts: [[1, "container", "mt-5"], [1, "copyright"], ["routerLink", "/"], ["width", "42", "height", "25", "viewBox", "0 0 42 25", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M25.456 16.8188L5.87566 20.2713C4.6738 20.4833 3.52965 19.5582 3.29743 18.2413L1.4249 7.62165C1.18775 6.27668 1.9765 5.03973 3.15332 4.83222L22.7336 1.37969C23.9355 1.16777 25.0796 2.09279 25.3118 3.40974L27.1794 14.0014C27.4166 15.3463 26.6578 16.6069 25.456 16.8188Z", "fill", "#FEFEFE"], ["d", "M25.456 16.8188L5.87566 20.2713C4.6738 20.4833 3.52965 19.5582 3.29743 18.2413L1.4249 7.62165C1.18775 6.27668 1.9765 5.03973 3.15332 4.83222L22.7336 1.37969C23.9355 1.16777 25.0796 2.09279 25.3118 3.40974L27.1794 14.0014C27.4166 15.3463 26.6578 16.6069 25.456 16.8188Z", "stroke", "#212529", "stroke-miterlimit", "10", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M31.3512 24.0722H11.4689C10.2485 24.0722 9.28235 22.9625 9.28235 21.6253V10.8418C9.28235 9.47609 10.2739 8.3949 11.4689 8.3949H31.3512C32.5716 8.3949 33.5378 9.50454 33.5378 10.8418V21.5968C33.5378 22.9625 32.5716 24.0722 31.3512 24.0722Z", "fill", "#FEFEFE"], ["d", "M31.3512 24.0722H11.4689C10.2485 24.0722 9.28235 22.9625 9.28235 21.6253V10.8418C9.28235 9.47609 10.2739 8.3949 11.4689 8.3949H31.3512C32.5716 8.3949 33.5378 9.50454 33.5378 10.8418V21.5968C33.5378 22.9625 32.5716 24.0722 31.3512 24.0722Z", "stroke", "#212529", "stroke-miterlimit", "10", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M35.6018 23.2895L16.1539 19.1558C14.9602 18.902 14.2458 17.6158 14.5239 16.3077L16.7659 5.7599C17.0498 4.42402 18.2445 3.57261 19.4134 3.82106L38.8612 7.95484C40.055 8.20857 40.7693 9.49484 40.4913 10.8029L38.2552 21.3229C37.9712 22.6588 36.7955 23.5433 35.6018 23.2895Z", "fill", "#FEFEFE"], ["d", "M35.6018 23.2895L16.1539 19.1558C14.9602 18.902 14.2458 17.6158 14.5239 16.3077L16.7659 5.7599C17.0498 4.42402 18.2445 3.57261 19.4134 3.82106L38.8612 7.95484C40.055 8.20857 40.7693 9.49484 40.4913 10.8029L38.2552 21.3229C37.9712 22.6588 36.7955 23.5433 35.6018 23.2895Z", "stroke", "#212529"], ["d", "M35.6018 23.2895L16.1539 19.1558C14.9602 18.902 14.2458 17.6158 14.5239 16.3077L16.7659 5.7599C17.0498 4.42402 18.2445 3.57261 19.4134 3.82106L38.8612 7.95484C40.055 8.20857 40.7693 9.49484 40.4913 10.8029L38.2552 21.3229C37.9712 22.6588 36.7955 23.5433 35.6018 23.2895Z", "stroke", "#212529", "stroke-miterlimit", "10", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M21.9434 9.88025L30.6234 11.7252", "stroke", "#212529", "stroke-miterlimit", "10", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M21.3484 12.6794L27.1008 13.9022", "stroke", "#212529", "stroke-miterlimit", "10", "stroke-linecap", "round", "stroke-linejoin", "round"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Contact: admin@fastflashcards.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A9 ", ctx.year, " FastFlashCards.com");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["footer[_ngcontent-%COMP%] {\r\n  height: 6rem;\r\n  \r\n  \r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  border-top: 1px solid rgb(226, 226, 226);\r\n  font-size: 0.8rem;\r\n}\r\n\r\n.copyright[_ngcontent-%COMP%] {\r\n  margin-right: 0.7rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLCtCQUErQjtFQUMvQixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsd0NBQXdDO0VBQ3hDLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XHJcbiAgaGVpZ2h0OiA2cmVtO1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHRoaXN0bGU7ICovXHJcbiAgLyogbWFyZ2luLXRvcDogYXV0bzsgKi9cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMjI2LCAyMjYsIDIyNik7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbn1cclxuXHJcbi5jb3B5cmlnaHQge1xyXG4gIG1hcmdpbi1yaWdodDogMC43cmVtO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "mkZK":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/_components/pages/account-settings/change-password/change-password-success/change-password-success.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: ChangePasswordSuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordSuccessComponent", function() { return ChangePasswordSuccessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");

class ChangePasswordSuccessComponent {
    constructor() { }
    ngOnInit() {
    }
}
ChangePasswordSuccessComponent.ɵfac = function ChangePasswordSuccessComponent_Factory(t) { return new (t || ChangePasswordSuccessComponent)(); };
ChangePasswordSuccessComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChangePasswordSuccessComponent, selectors: [["app-change-password-success"]], decls: 5, vars: 0, consts: [[1, "container", "m-nav"], [1, "h3", "pt-3"], [1, "mt-4"]], template: function ChangePasswordSuccessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Change Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Your password has been changed.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFuZ2UtcGFzc3dvcmQtc3VjY2Vzcy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "o/3F":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/_components/pages/login/send-verification-email-confirmation/send-verification-email-confirmation.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: SendVerificationEmailConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendVerificationEmailConfirmationComponent", function() { return SendVerificationEmailConfirmationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");

class SendVerificationEmailConfirmationComponent {
    constructor() { }
    ngOnInit() {
    }
}
SendVerificationEmailConfirmationComponent.ɵfac = function SendVerificationEmailConfirmationComponent_Factory(t) { return new (t || SendVerificationEmailConfirmationComponent)(); };
SendVerificationEmailConfirmationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SendVerificationEmailConfirmationComponent, selectors: [["app-send-verification-email-confirmation"]], decls: 6, vars: 0, consts: [[1, "container", "m-nav"], [1, "col-md-6"], [1, "pt-3"]], template: function SendVerificationEmailConfirmationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Request Successful");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " An email has been sent to the provided address. To verify your email account, check your email and click the link. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZW5kLXZlcmlmaWNhdGlvbi1lbWFpbC1jb25maXJtYXRpb24uY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "q16d":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/_components/pages/admin/edit-user/edit-email-confirmed-modal/edit-email-confirmed-modal.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: EditEmailConfirmedModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEmailConfirmedModalComponent", function() { return EditEmailConfirmedModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/admin.service */ "OMJ/");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");





class EditEmailConfirmedModalComponent {
    constructor(bsModalRef, _adminService, _toastr) {
        this.bsModalRef = bsModalRef;
        this._adminService = _adminService;
        this._toastr = _toastr;
    }
    ngOnInit() { }
    editHandler() {
        this._adminService
            .editEmailConfirmed(this.emailConfirmed, this.userId)
            .subscribe((res) => {
            this.bsModalRef.hide();
            // this.parentNgOnInit();
            if (this._adminService.userCache !== undefined &&
                this._adminService.userCache !== undefined) {
                this._adminService.userCache.emailConfirmed = this.emailConfirmed;
            }
            this._toastr.success('Email confirmed updated.');
        }, (error) => {
            this._toastr.error('Error updading email confirmed.');
            console.error(error);
        });
    }
}
EditEmailConfirmedModalComponent.ɵfac = function EditEmailConfirmedModalComponent_Factory(t) { return new (t || EditEmailConfirmedModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"])); };
EditEmailConfirmedModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditEmailConfirmedModalComponent, selectors: [["app-edit-email-confirmed-modal"]], decls: 17, vars: 1, consts: [[1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", "closeBtn", 3, "click"], ["aria-hidden", "true", 1, "timesSpan"], [1, "modal-body"], ["editEmailConfirmed", ""], ["type", "checkbox", "name", "emailConfirmed", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "emailConfirmed", 1, "form-check-label"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"]], template: function EditEmailConfirmedModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit Email Confirmed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditEmailConfirmedModalComponent_Template_button_click_3_listener() { return ctx.bsModalRef.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditEmailConfirmedModalComponent_Template_input_ngModelChange_9_listener($event) { return ctx.emailConfirmed = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Email Confirmed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditEmailConfirmedModalComponent_Template_button_click_13_listener() { return ctx.editHandler(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Edit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditEmailConfirmedModalComponent_Template_button_click_15_listener() { return ctx.bsModalRef.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.emailConfirmed);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".closeBtn[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  border: none;\r\n  margin-top: -1rem;\r\n}\r\n\r\n.timesSpan[_ngcontent-%COMP%] {\r\n  font-size: 1.8rem;\r\n}\r\n\r\n.form-check-input[_ngcontent-%COMP%] {\r\n  margin-right: 0.5rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtZW1haWwtY29uZmlybWVkLW1vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJlZGl0LWVtYWlsLWNvbmZpcm1lZC1tb2RhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsb3NlQnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgbWFyZ2luLXRvcDogLTFyZW07XHJcbn1cclxuXHJcbi50aW1lc1NwYW4ge1xyXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xyXG59XHJcblxyXG4uZm9ybS1jaGVjay1pbnB1dCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "qxKG":
/*!**************************************************************************!*\
  !*** ./src/app/_components/pages/admin/edit-user/edit-user.component.ts ***!
  \**************************************************************************/
/*! exports provided: EditUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserComponent", function() { return EditUserComponent; });
/* harmony import */ var _delete_user_modal_delete_user_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete-user-modal/delete-user-modal.component */ "sfeG");
/* harmony import */ var _edit_email_confirmed_modal_edit_email_confirmed_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-email-confirmed-modal/edit-email-confirmed-modal.component */ "q16d");
/* harmony import */ var _edit_password_modal_edit_password_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-password-modal/edit-password-modal.component */ "rmh8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/admin.service */ "OMJ/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");








function EditUserComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h1", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Admin Edit User");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "\u2190 Back to admin home");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "table", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Is Email Confirmed?");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditUserComponent_div_0_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r1.openEditEmailConfirmedModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Decks");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Cards");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditUserComponent_div_0_Template_button_click_55_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r3.openEditPasswordModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "Delete User");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditUserComponent_div_0_Template_button_click_65_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r4.openDeleteUserModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.user.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.user.emailConfirmed);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.user.decks.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("routerLink", "/admin/edit-user/", ctx_r0.userId, "/view-user-decks");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.cardCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("routerLink", "/admin/edit-user/", ctx_r0.userId, "/view-user-decks");
} }
class EditUserComponent {
    constructor(_adminService, _route, _modalService) {
        this._adminService = _adminService;
        this._route = _route;
        this._modalService = _modalService;
        this.cardCount = 0;
    }
    ngOnInit() {
        this.userId = this._route.snapshot.paramMap.get('id');
        this._adminService.getUser(this.userId).subscribe((res) => {
            this.user = res;
            if (this.user.decks.length > 0) {
                this.countCards(this.user.decks);
            }
        });
    }
    countCards(decksArr) {
        let count = 0;
        for (let i = 0; i < decksArr.length; i++) {
            let cardsInDeck = decksArr[i].cards.length;
            count += cardsInDeck;
        }
        this.cardCount = count;
    }
    openEditEmailConfirmedModal() {
        this.bsModalRef = this._modalService.show(_edit_email_confirmed_modal_edit_email_confirmed_modal_component__WEBPACK_IMPORTED_MODULE_1__["EditEmailConfirmedModalComponent"]);
        this.bsModalRef.content.emailConfirmed = this.user.emailConfirmed;
        this.bsModalRef.content.userId = this.userId;
        this.bsModalRef.content.parentNgOnInit = this.ngOnInit.bind(this);
    }
    openEditPasswordModal() {
        this.bsModalRef = this._modalService.show(_edit_password_modal_edit_password_modal_component__WEBPACK_IMPORTED_MODULE_2__["EditPasswordModalComponent"]);
        this.bsModalRef.content.userId = this.userId;
    }
    openDeleteUserModal() {
        this.bsModalRef = this._modalService.show(_delete_user_modal_delete_user_modal_component__WEBPACK_IMPORTED_MODULE_0__["DeleteUserModalComponent"]);
        this.bsModalRef.content.userId = this.userId;
    }
}
EditUserComponent.ɵfac = function EditUserComponent_Factory(t) { return new (t || EditUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"])); };
EditUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: EditUserComponent, selectors: [["app-edit-user"]], decls: 1, vars: 1, consts: [["class", "container m-nav", 4, "ngIf"], [1, "container", "m-nav"], [1, "h2", "pt-3"], ["routerLink", "/admin"], [1, "col-xl-6", "pt-3"], [1, "table", "table-hover"], ["scope", "row"], [1, "anchorStyleBtn", 3, "click"], [3, "routerLink"], [1, "anchorStyleBtnDanger", 3, "click"]], template: function EditUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, EditUserComponent_div_0_Template, 67, 6, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.user);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], styles: [".anchorStyleBtn[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  border: none;\r\n  height: -webkit-min-content;\r\n  height: min-content;\r\n  color: #18bc9c;\r\n  text-decoration: underline;\r\n}\r\n\r\n.anchorStyleBtn[_ngcontent-%COMP%]:hover {\r\n  color: #14a085;\r\n}\r\n\r\n.anchorStyleBtnDanger[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  border: none;\r\n  height: -webkit-min-content;\r\n  height: min-content;\r\n  color: #e74c3c;\r\n  text-decoration: underline;\r\n}\r\n\r\n.anchorStyleBtnDanger[_ngcontent-%COMP%]:hover {\r\n  color: #c44133;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtdXNlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWiwyQkFBbUI7RUFBbkIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWiwyQkFBbUI7RUFBbkIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6ImVkaXQtdXNlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFuY2hvclN0eWxlQnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcclxuICBjb2xvcjogIzE4YmM5YztcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLmFuY2hvclN0eWxlQnRuOmhvdmVyIHtcclxuICBjb2xvcjogIzE0YTA4NTtcclxufVxyXG5cclxuLmFuY2hvclN0eWxlQnRuRGFuZ2VyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcclxuICBjb2xvcjogI2U3NGMzYztcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLmFuY2hvclN0eWxlQnRuRGFuZ2VyOmhvdmVyIHtcclxuICBjb2xvcjogI2M0NDEzMztcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "rmh8":
/*!********************************************************************************************************!*\
  !*** ./src/app/_components/pages/admin/edit-user/edit-password-modal/edit-password-modal.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: EditPasswordModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPasswordModalComponent", function() { return EditPasswordModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/admin.service */ "OMJ/");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");





class EditPasswordModalComponent {
    constructor(bsModalRef, _adminService, _toastr) {
        this.bsModalRef = bsModalRef;
        this._adminService = _adminService;
        this._toastr = _toastr;
    }
    ngOnInit() { }
    editPasswordHandler() {
        this._adminService.editPassword(this.newPassword, this.userId).subscribe((res) => {
            this.bsModalRef.hide();
            this._toastr.success('Password changed.');
        }, (error) => {
            this._toastr.error('Error changing password.');
            console.error(error);
        });
    }
}
EditPasswordModalComponent.ɵfac = function EditPasswordModalComponent_Factory(t) { return new (t || EditPasswordModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"])); };
EditPasswordModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditPasswordModalComponent, selectors: [["app-edit-password-modal"]], decls: 17, vars: 1, consts: [[1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", "closeBtn", 3, "click"], ["aria-hidden", "true", 1, "timesSpan"], [1, "modal-body"], ["editPasswordForm", ""], ["for", "newPassword", 1, "form-check-label"], ["type", "password", "name", "newPassword", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"]], template: function EditPasswordModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditPasswordModalComponent_Template_button_click_3_listener() { return ctx.bsModalRef.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditPasswordModalComponent_Template_input_ngModelChange_11_listener($event) { return ctx.newPassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditPasswordModalComponent_Template_button_click_13_listener() { return ctx.editPasswordHandler(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Edit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditPasswordModalComponent_Template_button_click_15_listener() { return ctx.bsModalRef.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newPassword);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".closeBtn[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  border: none;\r\n  margin-top: -1rem;\r\n}\r\n\r\n.timesSpan[_ngcontent-%COMP%] {\r\n  font-size: 1.8rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtcGFzc3dvcmQtbW9kYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6ImVkaXQtcGFzc3dvcmQtbW9kYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbG9zZUJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG1hcmdpbi10b3A6IC0xcmVtO1xyXG59XHJcblxyXG4udGltZXNTcGFuIHtcclxuICBmb250LXNpemU6IDEuOHJlbTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "sfeG":
/*!****************************************************************************************************!*\
  !*** ./src/app/_components/pages/admin/edit-user/delete-user-modal/delete-user-modal.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: DeleteUserModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteUserModalComponent", function() { return DeleteUserModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/admin.service */ "OMJ/");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");





class DeleteUserModalComponent {
    constructor(bsModalRef, _adminService, _toastr, _router) {
        this.bsModalRef = bsModalRef;
        this._adminService = _adminService;
        this._toastr = _toastr;
        this._router = _router;
    }
    ngOnInit() { }
    deleteUserHandler() {
        this._adminService.deleteUser(this.userId).subscribe((res) => {
            this.bsModalRef.hide();
            this._toastr.success('User deleted.');
            this._router.navigateByUrl(`/admin`);
        }, (error) => {
            this._toastr.error('Error deleting user.');
            console.error(error);
        });
    }
}
DeleteUserModalComponent.ɵfac = function DeleteUserModalComponent_Factory(t) { return new (t || DeleteUserModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
DeleteUserModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeleteUserModalComponent, selectors: [["app-delete-user-modal"]], decls: 13, vars: 0, consts: [[1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", "closeBtn", 3, "click"], ["aria-hidden", "true", 1, "timesSpan"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"]], template: function DeleteUserModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Delete User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteUserModalComponent_Template_button_click_3_listener() { return ctx.bsModalRef.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Are you sure you want to delete this account?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteUserModalComponent_Template_button_click_9_listener() { return ctx.deleteUserHandler(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteUserModalComponent_Template_button_click_11_listener() { return ctx.bsModalRef.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".closeBtn[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  border: none;\r\n  margin-top: -1rem;\r\n}\r\n\r\n.timesSpan[_ngcontent-%COMP%] {\r\n  font-size: 1.8rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbGV0ZS11c2VyLW1vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJkZWxldGUtdXNlci1tb2RhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsb3NlQnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgbWFyZ2luLXRvcDogLTFyZW07XHJcbn1cclxuXHJcbi50aW1lc1NwYW4ge1xyXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "tym/":
/*!**********************************************************************************!*\
  !*** ./src/app/_components/pages/account-settings/account-settings.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AccountSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountSettingsComponent", function() { return AccountSettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/user.service */ "VITL");
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/account.service */ "5ZPe");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");






function AccountSettingsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Account Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Email Address:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Password:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Change password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Data:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Delete Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "(Data is your account, decks, and cards.)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.user.email);
} }
class AccountSettingsComponent {
    constructor(_userService, _accountService, _titleService) {
        this._userService = _userService;
        this._accountService = _accountService;
        this._titleService = _titleService;
    }
    ngOnInit() {
        this._titleService.setTitle(`Account Settings | FastFlashCards.com`);
        this.getLoggedInUser();
        this.loadUser();
    }
    loadUser() {
        this._userService.getUser(this.loggedInUser.id).subscribe((user) => {
            this.user = user;
        });
    }
    getLoggedInUser() {
        this._accountService.currentUser$.subscribe((user) => {
            this.loggedInUser = user;
        });
    }
}
AccountSettingsComponent.ɵfac = function AccountSettingsComponent_Factory(t) { return new (t || AccountSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"])); };
AccountSettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccountSettingsComponent, selectors: [["app-account-settings"]], decls: 1, vars: 1, consts: [["class", "container m-nav", "style", "overflow-wrap: anywhere", 4, "ngIf"], [1, "container", "m-nav", 2, "overflow-wrap", "anywhere"], [1, "h3", "pt-3"], [1, "mt-3"], [1, "tableRow"], [1, "heading", "text-muted"], ["routerLink", "/user/account-settings/change-password"], ["routerLink", "/user/account-settings/delete-data", 1, "text-danger"], [1, "text-muted", "noteText"]], template: function AccountSettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AccountSettingsComponent_div_0_Template, 23, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], styles: ["table[_ngcontent-%COMP%] {\r\n  border-collapse: separate;\r\n  border-spacing: 0 0.5rem;\r\n}\r\n\r\n.heading[_ngcontent-%COMP%] {\r\n  padding-right: 3rem;\r\n  font-weight: 400;\r\n}\r\n\r\n.noteText[_ngcontent-%COMP%] {\r\n  font-size: 0.8rem;\r\n  margin-left: 0.8rem;\r\n}\r\n\r\n@media only screen and (max-width: 770px) {\r\n  .tableRow[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-bottom: 0.8rem;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQtc2V0dGluZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6Qix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixxQkFBcUI7RUFDdkI7QUFDRiIsImZpbGUiOiJhY2NvdW50LXNldHRpbmdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcclxuICBib3JkZXItc3BhY2luZzogMCAwLjVyZW07XHJcbn1cclxuXHJcbi5oZWFkaW5nIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAzcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi5ub3RlVGV4dCB7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDAuOHJlbTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NzBweCkge1xyXG4gIC50YWJsZVJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "uoKe":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/_components/pages/reset-password/reset-password-confirmation/reset-password-confirmation.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: ResetPasswordConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordConfirmationComponent", function() { return ResetPasswordConfirmationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");


class ResetPasswordConfirmationComponent {
    constructor() { }
    ngOnInit() {
    }
}
ResetPasswordConfirmationComponent.ɵfac = function ResetPasswordConfirmationComponent_Factory(t) { return new (t || ResetPasswordConfirmationComponent)(); };
ResetPasswordConfirmationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResetPasswordConfirmationComponent, selectors: [["app-reset-password-confirmation"]], decls: 8, vars: 0, consts: [[1, "container", "m-nav"], [1, "pt-3"], ["routerLink", "/login"]], template: function ResetPasswordConfirmationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Reset Password Confirmation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Your password has been reset. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Click here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " to log in. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNldC1wYXNzd29yZC1jb25maXJtYXRpb24uY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "vXBT":
/*!****************************************************!*\
  !*** ./src/app/_directives/has-claim.directive.ts ***!
  \****************************************************/
/*! exports provided: HasClaimDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HasClaimDirective", function() { return HasClaimDirective; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/account.service */ "5ZPe");



class HasClaimDirective {
    constructor(_viewContainerRef, _templateRef, _accountService) {
        this._viewContainerRef = _viewContainerRef;
        this._templateRef = _templateRef;
        this._accountService = _accountService;
        this._accountService.currentUser$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1)).subscribe((user) => {
            this.user = user;
        });
    }
    ngOnInit() {
        var _a;
        // clear view if no roles
        if (this.user === null) {
            this._viewContainerRef.clear();
            return;
        }
        if (((_a = this.user) === null || _a === void 0 ? void 0 : _a.isAdmin) && this.appHasClaim.includes('IsAdmin')) {
            this._viewContainerRef.createEmbeddedView(this._templateRef);
        }
        else {
            this._viewContainerRef.clear();
        }
    }
}
HasClaimDirective.ɵfac = function HasClaimDirective_Factory(t) { return new (t || HasClaimDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"])); };
HasClaimDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: HasClaimDirective, selectors: [["", "appHasClaim", ""]], inputs: { appHasClaim: "appHasClaim" } });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _components_pages_account_settings_account_settings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_components/pages/account-settings/account-settings.component */ "tym/");
/* harmony import */ var _components_pages_account_settings_change_password_change_password_success_change_password_success_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_components/pages/account-settings/change-password/change-password-success/change-password-success.component */ "mkZK");
/* harmony import */ var _components_pages_account_settings_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_components/pages/account-settings/change-password/change-password.component */ "8xvR");
/* harmony import */ var _components_pages_account_settings_delete_data_delete_data_success_delete_data_success_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_components/pages/account-settings/delete-data/delete-data-success/delete-data-success.component */ "TXdk");
/* harmony import */ var _components_pages_account_settings_delete_data_delete_data_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_components/pages/account-settings/delete-data/delete-data.component */ "eMoB");
/* harmony import */ var _components_pages_add_cards_add_cards_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_components/pages/add-cards/add-cards.component */ "DbnP");
/* harmony import */ var _components_pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_components/pages/admin/admin.component */ "yF3x");
/* harmony import */ var _components_pages_admin_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_components/pages/admin/edit-user/edit-user.component */ "qxKG");
/* harmony import */ var _components_pages_admin_edit_user_view_deck_view_deck_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_components/pages/admin/edit-user/view-deck/view-deck.component */ "YR85");
/* harmony import */ var _components_pages_admin_edit_user_view_user_decks_view_user_decks_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_components/pages/admin/edit-user/view-user-decks/view-user-decks.component */ "SEUJ");
/* harmony import */ var _components_pages_decks_deck_page_deck_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_components/pages/decks/deck-page/deck-page.component */ "xE7F");
/* harmony import */ var _components_pages_decks_decks_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_components/pages/decks/decks.component */ "xO4e");
/* harmony import */ var _components_pages_decks_study_study_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_components/pages/decks/study/study.component */ "vnvB");
/* harmony import */ var _components_pages_edit_cards_edit_cards_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_components/pages/edit-cards/edit-cards.component */ "RB8j");
/* harmony import */ var _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_components/pages/home/home.component */ "dkfK");
/* harmony import */ var _components_pages_login_forgot_password_confirmation_forgot_password_confirmation_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_components/pages/login/forgot-password-confirmation/forgot-password-confirmation.component */ "6tBi");
/* harmony import */ var _components_pages_login_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./_components/pages/login/forgot-password/forgot-password.component */ "X038");
/* harmony import */ var _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./_components/pages/login/login.component */ "C677");
/* harmony import */ var _components_pages_login_send_verification_email_confirmation_send_verification_email_confirmation_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./_components/pages/login/send-verification-email-confirmation/send-verification-email-confirmation.component */ "o/3F");
/* harmony import */ var _components_pages_login_send_verification_email_send_verification_email_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./_components/pages/login/send-verification-email/send-verification-email.component */ "0STe");
/* harmony import */ var _components_pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./_components/pages/not-found/not-found.component */ "jfA9");
/* harmony import */ var _components_pages_register_confirm_email_confirm_email_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./_components/pages/register/confirm-email/confirm-email.component */ "6fPH");
/* harmony import */ var _components_pages_register_register_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./_components/pages/register/register.component */ "Vmf6");
/* harmony import */ var _components_pages_register_success_success_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./_components/pages/register/success/success.component */ "PZyb");
/* harmony import */ var _components_pages_reset_password_reset_password_confirmation_reset_password_confirmation_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./_components/pages/reset-password/reset-password-confirmation/reset-password-confirmation.component */ "uoKe");
/* harmony import */ var _components_pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./_components/pages/reset-password/reset-password.component */ "eLWC");
/* harmony import */ var _components_pages_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./_components/pages/server-error/server-error.component */ "MHiA");
/* harmony import */ var _guards_admin_guard__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./_guards/admin.guard */ "NWYD");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./_guards/auth.guard */ "PSoG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/core */ "8Y7J");
































const routes = [
    { path: '', component: _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"] },
    { path: 'login', component: _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"] },
    { path: 'login/forgot-password', component: _components_pages_login_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_17__["ForgotPasswordComponent"] },
    {
        path: 'login/forgot-password-confirmation',
        component: _components_pages_login_forgot_password_confirmation_forgot_password_confirmation_component__WEBPACK_IMPORTED_MODULE_16__["ForgotPasswordConfirmationComponent"],
    },
    {
        path: 'login/verification-email',
        component: _components_pages_login_send_verification_email_send_verification_email_component__WEBPACK_IMPORTED_MODULE_20__["SendVerificationEmailComponent"],
    },
    {
        path: 'login/verification-email-success',
        component: _components_pages_login_send_verification_email_confirmation_send_verification_email_confirmation_component__WEBPACK_IMPORTED_MODULE_19__["SendVerificationEmailConfirmationComponent"],
    },
    { path: 'register', component: _components_pages_register_register_component__WEBPACK_IMPORTED_MODULE_23__["RegisterComponent"] },
    { path: 'register/success/:email', component: _components_pages_register_success_success_component__WEBPACK_IMPORTED_MODULE_24__["SuccessComponent"] },
    { path: 'register/confirm-email', component: _components_pages_register_confirm_email_confirm_email_component__WEBPACK_IMPORTED_MODULE_22__["ConfirmEmailComponent"] },
    { path: 'reset-password', component: _components_pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_26__["ResetPasswordComponent"] },
    {
        path: 'reset-password/success',
        component: _components_pages_reset_password_reset_password_confirmation_reset_password_confirmation_component__WEBPACK_IMPORTED_MODULE_25__["ResetPasswordConfirmationComponent"],
    },
    {
        path: 'user/account-settings/delete-data/success',
        component: _components_pages_account_settings_delete_data_delete_data_success_delete_data_success_component__WEBPACK_IMPORTED_MODULE_4__["DeleteDataSuccessComponent"],
    },
    {
        path: 'server-error/:error',
        component: _components_pages_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_27__["ServerErrorComponent"],
    },
    {
        path: 'server-error',
        component: _components_pages_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_27__["ServerErrorComponent"],
    },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_29__["AuthGuard"]],
        children: [
            { path: 'user/decks', component: _components_pages_decks_decks_component__WEBPACK_IMPORTED_MODULE_12__["DecksComponent"] },
            { path: 'user/decks/:id', component: _components_pages_decks_deck_page_deck_page_component__WEBPACK_IMPORTED_MODULE_11__["DeckPageComponent"] },
            { path: 'user/add-cards', component: _components_pages_add_cards_add_cards_component__WEBPACK_IMPORTED_MODULE_6__["AddCardsComponent"] },
            { path: 'user/add-cards/:id', component: _components_pages_add_cards_add_cards_component__WEBPACK_IMPORTED_MODULE_6__["AddCardsComponent"] },
            { path: 'user/decks/:id/study', component: _components_pages_decks_study_study_component__WEBPACK_IMPORTED_MODULE_13__["StudyComponent"] },
            { path: 'user/edit-cards', component: _components_pages_edit_cards_edit_cards_component__WEBPACK_IMPORTED_MODULE_14__["EditCardsComponent"] },
            { path: 'user/edit-cards/:id', component: _components_pages_edit_cards_edit_cards_component__WEBPACK_IMPORTED_MODULE_14__["EditCardsComponent"] },
            { path: 'user/account-settings', component: _components_pages_account_settings_account_settings_component__WEBPACK_IMPORTED_MODULE_1__["AccountSettingsComponent"] },
            {
                path: 'user/account-settings/change-password',
                component: _components_pages_account_settings_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_3__["ChangePasswordComponent"],
            },
            {
                path: 'user/account-settings/change-password/success',
                component: _components_pages_account_settings_change_password_change_password_success_change_password_success_component__WEBPACK_IMPORTED_MODULE_2__["ChangePasswordSuccessComponent"],
            },
            {
                path: 'user/account-settings/delete-data',
                component: _components_pages_account_settings_delete_data_delete_data_component__WEBPACK_IMPORTED_MODULE_5__["DeleteDataComponent"],
            },
        ],
    },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_28__["AdminGuard"]],
        children: [
            { path: 'admin', component: _components_pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_7__["AdminComponent"] },
            { path: 'admin/edit-user/:id', component: _components_pages_admin_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_8__["EditUserComponent"] },
            {
                path: 'admin/edit-user/:id/view-user-decks',
                component: _components_pages_admin_edit_user_view_user_decks_view_user_decks_component__WEBPACK_IMPORTED_MODULE_10__["ViewUserDecksComponent"],
            },
            {
                path: 'admin/edit-user/:id/view-deck/:deckId',
                component: _components_pages_admin_edit_user_view_deck_view_deck_component__WEBPACK_IMPORTED_MODULE_9__["ViewDeckComponent"],
            },
        ],
    },
    { path: '**', component: _components_pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_21__["NotFoundComponent"], pathMatch: 'full' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vnvB":
/*!******************************************************************!*\
  !*** ./src/app/_components/pages/decks/study/study.component.ts ***!
  \******************************************************************/
/*! exports provided: StudyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudyComponent", function() { return StudyComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var src_app_services_deck_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/deck.service */ "ekfe");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");







function StudyComponent_div_0_div_11_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.shuffleMode ? ctx_r3.shuffledDeck.cards[ctx_r3.counter].back : ctx_r3.deck.cards[ctx_r3.counter].back, " ");
} }
function StudyComponent_div_0_div_11_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StudyComponent_div_0_div_11_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r6.toggleReveal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Show Answer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function StudyComponent_div_0_div_11_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StudyComponent_div_0_div_11_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r8.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function StudyComponent_div_0_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, StudyComponent_div_0_div_11_div_4_Template, 4, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, StudyComponent_div_0_div_11_button_6_Template, 2, 0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, StudyComponent_div_0_div_11_button_7_Template, 2, 0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.shuffleMode ? ctx_r1.shuffledDeck.cards[ctx_r1.counter].front : ctx_r1.deck.cards[ctx_r1.counter].front, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.reveal);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.reveal);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.reveal);
} }
function StudyComponent_div_0_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Deck Complete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StudyComponent_div_0_div_12_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r10.restartDeck(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Restart Deck ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function StudyComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StudyComponent_div_0_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.shuffleDeck(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Shuffle deck ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, StudyComponent_div_0_div_11_Template, 8, 4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, StudyComponent_div_0_div_12_Template, 5, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function StudyComponent_div_0_Template_form_submit_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.goToCardForm.valid && ctx_r14.goToCardHandler(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Go to card");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/user/decks/", ctx_r0.deck.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.deck.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r0.counter + 1, "/", ctx_r0.deck.cards.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.deck && !ctx_r0.finished);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.deck && ctx_r0.finished);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.goToCardForm);
} }
class StudyComponent {
    constructor(_route, _titleService, _fb, _deckService) {
        this._route = _route;
        this._titleService = _titleService;
        this._fb = _fb;
        this._deckService = _deckService;
        this.counter = 0;
        this.reveal = false;
        this.finished = false;
        // shuffle mode
        this.shuffleMode = false;
        this.shuffledDeck = {
            cards: [],
        };
    }
    ngOnInit() {
        this._titleService.setTitle(`Decks | FastFlashCards.com`);
        this.deckId = parseInt(this._route.snapshot.paramMap.get('id'));
        this._deckService.getDeckById(this.deckId).subscribe((deck) => {
            this.deck = deck;
            this.initializeForm();
        });
    }
    toggleReveal() {
        this.reveal = !this.reveal;
    }
    next() {
        if (this.counter + 1 >= this.deck.cards.length) {
            this.finished = true;
            this.reveal = false;
            return;
        }
        this.counter++;
        this.reveal = false;
    }
    shuffleDeck() {
        this.shuffledDeck.cards = this.deck.cards.slice();
        for (var i = this.shuffledDeck.cards.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = this.shuffledDeck.cards[i];
            this.shuffledDeck.cards[i] = this.shuffledDeck.cards[j];
            this.shuffledDeck.cards[j] = temp;
        }
        this.shuffleMode = true;
    }
    restartDeck() {
        this.finished = false;
        this.counter = 0;
    }
    goToCardHandler() {
        this.counter = this.goToCardForm.get('cardNumber').value - 1;
        this.goToCardForm.reset();
    }
    initializeForm() {
        this.goToCardForm = this._fb.group({
            cardNumber: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(1),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].max(this.deck.cards.length),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                ],
            ],
        });
        // this.goToCardForm.controls.cardNumber.valueChanges.subscribe(() => {
        //   this.goToCardForm.controls.confirmPassword.updateValueAndValidity();
        // });
    }
}
StudyComponent.ɵfac = function StudyComponent_Factory(t) { return new (t || StudyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_deck_service__WEBPACK_IMPORTED_MODULE_4__["DeckService"])); };
StudyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: StudyComponent, selectors: [["app-study"]], decls: 1, vars: 1, consts: [["class", "container m-nav", 4, "ngIf"], [1, "container", "m-nav"], [1, "col-12", "col-xl-6", "pt-3", "mx-auto", "d-flex", "flex-column", "studyUserInterface"], [1, "d-flex", "flex-column", "mb-2"], [1, "h6"], [3, "routerLink"], [1, "d-flex", "justify-content-between"], [1, "shuffle-btn", 3, "click"], ["class", "card mb-3 my-card", 4, "ngIf"], ["class", "card mb-3 my-card deckCompleteCard", 4, "ngIf"], [1, "col-12", "col-xl-6", "mx-auto", "goToCardWrapper"], [1, "d-flex", "flex-column", "goToForm", 3, "formGroup", "submit"], ["for", "cardNumber"], ["name", "cardNumber", "type", "number", "formControlName", "cardNumber", 1, "goToCardInput"], [1, "card", "mb-3", "my-card"], [1, "card-body"], [1, "text-center", "w-100", "whiteSpace", "cardText"], [4, "ngIf"], [1, "card-footer", "d-flex", "justify-content-center", "cardFooter"], ["type", "button", "class", "btn btn-primary btn-lg", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-info btn-lg", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", "btn-lg", 3, "click"], ["type", "button", 1, "btn", "btn-info", "btn-lg", 3, "click"], [1, "card", "mb-3", "my-card", "deckCompleteCard"], [1, "btn", "btn-success", "mt-2", 3, "click"]], template: function StudyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, StudyComponent_div_0_Template, 19, 7, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.deck);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]], styles: [".my-card[_ngcontent-%COMP%] {\r\n  min-height: 30rem;\r\n  border-color: #c7c7c7;\r\n  box-shadow: 0px 2px 8px 1px rgb(14 30 37 / 12%);\r\n}\r\n\r\n.studyUserInterface[_ngcontent-%COMP%] {\r\n  max-width: 45rem;\r\n}\r\n\r\n.shuffle-btn[_ngcontent-%COMP%] {\r\n  border: none;\r\n  background-color: transparent;\r\n  height: -webkit-min-content;\r\n  height: min-content;\r\n  margin-right: 1.5rem;\r\n  color: #3498db;\r\n}\r\n\r\n.shuffle-btn[_ngcontent-%COMP%]:hover {\r\n  color: #2c81ba;\r\n}\r\n\r\n.cardText[_ngcontent-%COMP%] {\r\n  font-size: 1.4rem;\r\n}\r\n\r\n.whiteSpace[_ngcontent-%COMP%] {\r\n  white-space: pre-wrap;\r\n  overflow-wrap: anywhere;\r\n}\r\n\r\n.deckCompleteCard[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  padding-top: 4rem;\r\n}\r\n\r\n.goToForm[_ngcontent-%COMP%] {\r\n  float: right;\r\n}\r\n\r\n.goToCardInput[_ngcontent-%COMP%] {\r\n  width: 3rem;\r\n  margin-left: 0.5rem;\r\n}\r\n\r\n.goToCardWrapper[_ngcontent-%COMP%] {\r\n  max-width: 45rem;\r\n  margin-top: 0.5rem;\r\n}\r\n\r\n.cardFooter[_ngcontent-%COMP%] {\r\n  min-height: -webkit-min-content;\r\n  min-height: min-content;\r\n}\r\n\r\n@media only screen and (max-width: 550px) {\r\n  .studyUserInterface[_ngcontent-%COMP%] {\r\n    min-height: 60vh;\r\n  }\r\n\r\n  .my-card[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n  }\r\n\r\n  .cardText[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0dWR5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLCtDQUErQztBQUNqRDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsMkJBQW1CO0VBQW5CLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLCtCQUF1QjtFQUF2Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLE9BQU87RUFDVDs7RUFFQTtJQUNFLGVBQWU7RUFDakI7QUFDRiIsImZpbGUiOiJzdHVkeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15LWNhcmQge1xyXG4gIG1pbi1oZWlnaHQ6IDMwcmVtO1xyXG4gIGJvcmRlci1jb2xvcjogI2M3YzdjNztcclxuICBib3gtc2hhZG93OiAwcHggMnB4IDhweCAxcHggcmdiKDE0IDMwIDM3IC8gMTIlKTtcclxufVxyXG5cclxuLnN0dWR5VXNlckludGVyZmFjZSB7XHJcbiAgbWF4LXdpZHRoOiA0NXJlbTtcclxufVxyXG5cclxuLnNodWZmbGUtYnRuIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcclxuICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcclxuICBjb2xvcjogIzM0OThkYjtcclxufVxyXG5cclxuLnNodWZmbGUtYnRuOmhvdmVyIHtcclxuICBjb2xvcjogIzJjODFiYTtcclxufVxyXG5cclxuLmNhcmRUZXh0IHtcclxuICBmb250LXNpemU6IDEuNHJlbTtcclxufVxyXG5cclxuLndoaXRlU3BhY2Uge1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxuICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcclxufVxyXG5cclxuLmRlY2tDb21wbGV0ZUNhcmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogNHJlbTtcclxufVxyXG5cclxuLmdvVG9Gb3JtIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5nb1RvQ2FyZElucHV0IHtcclxuICB3aWR0aDogM3JlbTtcclxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG59XHJcblxyXG4uZ29Ub0NhcmRXcmFwcGVyIHtcclxuICBtYXgtd2lkdGg6IDQ1cmVtO1xyXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcclxufVxyXG5cclxuLmNhcmRGb290ZXIge1xyXG4gIG1pbi1oZWlnaHQ6IG1pbi1jb250ZW50O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XHJcbiAgLnN0dWR5VXNlckludGVyZmFjZSB7XHJcbiAgICBtaW4taGVpZ2h0OiA2MHZoO1xyXG4gIH1cclxuXHJcbiAgLm15LWNhcmQge1xyXG4gICAgZmxleDogMTtcclxuICB9XHJcblxyXG4gIC5jYXJkVGV4dCB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "xE7F":
/*!**************************************************************************!*\
  !*** ./src/app/_components/pages/decks/deck-page/deck-page.component.ts ***!
  \**************************************************************************/
/*! exports provided: DeckPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeckPageComponent", function() { return DeckPageComponent; });
/* harmony import */ var _delete_deck_modal_delete_deck_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete-deck-modal/delete-deck-modal.component */ "SPWz");
/* harmony import */ var _edit_name_modal_edit_name_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-name-modal/edit-name-modal.component */ "hfjq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_services_deck_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/deck.service */ "ekfe");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/user.service */ "VITL");
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_services/account.service */ "5ZPe");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "FE24");











function DeckPageComponent_div_0_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Add cards to your deck! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DeckPageComponent_div_0_ul_14_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Add Cards");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Edit Cards");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DeckPageComponent_div_0_ul_14_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r5.openEditDeckNameModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Edit Deck Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DeckPageComponent_div_0_ul_14_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r7.openDeleteDeckModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " Delete Deck ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "/user/add-cards/", ctx_r4.deck.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "/user/edit-cards/", ctx_r4.deck.id, "");
} }
function DeckPageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, DeckPageComponent_div_0_p_6_Template, 2, 0, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Study Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Options ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, DeckPageComponent_div_0_ul_14_Template, 14, 2, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.deck.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Total cards: ", ctx_r0.deck.cards.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.deck.cards.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("disableLink", ctx_r0.deck.cards.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "/user/decks/", ctx_r0.deck.id, "/study");
} }
const _c0 = function () { return ["/user/decks"]; };
function DeckPageComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Deck not found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Return to decks");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c0));
} }
class DeckPageComponent {
    constructor(_route, _deckService, _modalService, _userService, _accountService, _titleService) {
        this._route = _route;
        this._deckService = _deckService;
        this._modalService = _modalService;
        this._userService = _userService;
        this._accountService = _accountService;
        this._titleService = _titleService;
    }
    ngOnInit() {
        this._titleService.setTitle(`Decks | FastFlashCards.com`);
        this.deckId = parseInt(this._route.snapshot.paramMap.get('id'));
        this._deckService.setCurrentDeckId(this.deckId);
        if (!this._userService.userCache) {
            this.getLoggedInUser();
            this._userService.getUser(this.loggedInUser.id).subscribe((user) => {
                const deckFromCache = user.decks.find((deck) => deck.id === this.deckId);
                if (!deckFromCache) {
                    console.error('Deck ID not found in cache.');
                }
                this.deck = deckFromCache;
            });
        }
        else {
            this._deckService.getDeckById(this.deckId).subscribe((deck) => {
                this.deck = deck;
            });
        }
    }
    getLoggedInUser() {
        this._accountService.currentUser$.subscribe((user) => {
            this.loggedInUser = user;
        });
    }
    openDeleteDeckModal() {
        this.bsModalRef = this._modalService.show(_delete_deck_modal_delete_deck_modal_component__WEBPACK_IMPORTED_MODULE_0__["DeleteDeckModalComponent"]);
        this.bsModalRef.content.deckId = this.deckId;
    }
    openEditDeckNameModal() {
        this.bsModalRef = this._modalService.show(_edit_name_modal_edit_name_modal_component__WEBPACK_IMPORTED_MODULE_1__["EditNameModalComponent"]);
        this.bsModalRef.content.deckId = this.deckId;
    }
}
DeckPageComponent.ɵfac = function DeckPageComponent_Factory(t) { return new (t || DeckPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_deck_service__WEBPACK_IMPORTED_MODULE_4__["DeckService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_account_service__WEBPACK_IMPORTED_MODULE_7__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Title"])); };
DeckPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DeckPageComponent, selectors: [["app-deck-page"]], decls: 3, vars: 2, consts: [["class", "container m-nav", 4, "ngIf", "ngIfElse"], ["noDeck", ""], [1, "container", "m-nav"], [1, "col-12", "col-xl-6"], [1, "h2", "pt-3"], [1, "h5", "mt-3"], ["class", "text-muted mt-3", 4, "ngIf"], [1, "d-flex", "mt-4"], [1, "btn", "btn-success", "d-inline-block", "btn-margin", 3, "routerLink"], ["dropdown", "", 1, "btn-group"], ["id", "button-basic", "dropdownToggle", "", "type", "button", "aria-controls", "dropdown-basic", 1, "btn", "btn-secondary", "dropdown-toggle"], [1, "caret"], ["id", "dropdown-basic", "class", "dropdown-menu", "role", "menu", "aria-labelledby", "button-basic", 4, "dropdownMenu"], [1, "text-muted", "mt-3"], ["id", "dropdown-basic", "role", "menu", "aria-labelledby", "button-basic", 1, "dropdown-menu"], ["role", "menuitem"], [1, "dropdown-item", "secondaryDropdown", 3, "routerLink"], [1, "divider", "dropdown-divider"], [1, "dropdown-item", "secondaryDropdown", 3, "click"], [1, "col-5", "pt-4"], [1, "btn", "btn-secondary", "mt-3", 3, "routerLink"]], template: function DeckPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, DeckPageComponent_div_0_Template, 15, 6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DeckPageComponent_ng_template_1_Template, 6, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.deck)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_10__["BsDropdownDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_10__["BsDropdownToggleDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_10__["BsDropdownMenuDirective"]], styles: [".btn-margin[_ngcontent-%COMP%] {\r\n  margin-right: 1rem;\r\n}\r\n\r\n.secondaryDropdown[_ngcontent-%COMP%]:hover {\r\n  background-color: #778485;\r\n}\r\n\r\n.disableLink[_ngcontent-%COMP%] {\r\n  pointer-events: none;\r\n  opacity: 0.65;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlY2stcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGFBQWE7QUFDZiIsImZpbGUiOiJkZWNrLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tbWFyZ2luIHtcclxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbn1cclxuXHJcbi5zZWNvbmRhcnlEcm9wZG93bjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc3ODQ4NTtcclxufVxyXG5cclxuLmRpc2FibGVMaW5rIHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBvcGFjaXR5OiAwLjY1O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "xO4e":
/*!************************************************************!*\
  !*** ./src/app/_components/pages/decks/decks.component.ts ***!
  \************************************************************/
/*! exports provided: DecksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecksComponent", function() { return DecksComponent; });
/* harmony import */ var _new_deck_modal_new_deck_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-deck-modal/new-deck-modal.component */ "XHtl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/user.service */ "VITL");
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/account.service */ "5ZPe");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "iInd");








function DecksComponent_div_0_table_6_tr_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const deck_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/user/decks/", deck_r5.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](deck_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](deck_r5.cards.length);
} }
function DecksComponent_div_0_table_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Cards");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, DecksComponent_div_0_table_6_tr_8_Template, 6, 3, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.user.decks);
} }
function DecksComponent_div_0_ng_template_7_p_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " You haven't made any decks yet. Click \"New Deck\" to create one. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DecksComponent_div_0_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DecksComponent_div_0_ng_template_7_p_0_Template, 2, 0, "p", 11);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.user.decks.length === 0);
} }
function DecksComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Decks");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DecksComponent_div_0_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.openCreateDeckModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " New Deck + ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, DecksComponent_div_0_table_6_Template, 9, 1, "table", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, DecksComponent_div_0_ng_template_7_Template, 1, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.user.decks.length > 0)("ngIfElse", _r2);
} }
class DecksComponent {
    constructor(_userService, _accountService, _modalService, _titleService) {
        this._userService = _userService;
        this._accountService = _accountService;
        this._modalService = _modalService;
        this._titleService = _titleService;
    }
    ngOnInit() {
        this._titleService.setTitle(`Decks | FastFlashCards.com`);
        this.getLoggedInUser();
        this.loadUser();
    }
    loadUser() {
        this._userService.getUser(this.loggedInUser.id).subscribe((user) => {
            this.user = user;
        });
    }
    getLoggedInUser() {
        this._accountService.currentUser$.subscribe((user) => {
            this.loggedInUser = user;
        });
    }
    openCreateDeckModal() {
        this.bsModalRef = this._modalService.show(_new_deck_modal_new_deck_modal_component__WEBPACK_IMPORTED_MODULE_0__["NewDeckModalComponent"]);
        this.bsModalRef.content.loadUser = this.loadUser.bind(this);
    }
}
DecksComponent.ɵfac = function DecksComponent_Factory(t) { return new (t || DecksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"])); };
DecksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DecksComponent, selectors: [["app-decks"]], decls: 1, vars: 1, consts: [["class", "container m-nav", 4, "ngIf"], [1, "container", "m-nav"], [1, "col-12", "col-xl-6"], [1, "h2", "pt-3"], ["type", "button", 1, "btn", "btn-primary", "mt-3", 3, "click"], ["class", "table table-hover mt-3", 4, "ngIf", "ngIfElse"], ["noDecks", ""], [1, "table", "table-hover", "mt-3"], ["scope", "col"], [4, "ngFor", "ngForOf"], [3, "routerLink"], ["class", "mt-3", 4, "ngIf"], [1, "mt-3"]], template: function DecksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DecksComponent_div_0_Template, 9, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWNrcy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "yF3x":
/*!************************************************************!*\
  !*** ./src/app/_components/pages/admin/admin.component.ts ***!
  \************************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/admin.service */ "OMJ/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");





function AdminComponent_div_0_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/admin/edit-user/", user_r2.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r2.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r2.emailConfirmed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r2.decks.length);
} }
function AdminComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Admin Page");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "User List");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Is Email Confirmed?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Decks");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AdminComponent_div_0_tr_15_Template, 8, 4, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.users);
} }
class AdminComponent {
    constructor(_titleService, _adminService) {
        this._titleService = _titleService;
        this._adminService = _adminService;
        this.users = [];
    }
    ngOnInit() {
        this._titleService.setTitle(`Admin | FastFlashCards.com`);
        this._adminService.getUsers().subscribe((res) => {
            this.users = res;
        });
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"])); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 1, vars: 1, consts: [["class", "container m-nav", 4, "ngIf"], [1, "container", "m-nav"], [1, "h2", "pt-3"], [1, "h4"], [1, "table", "table-hover"], ["scope", "col"], [4, "ngFor", "ngForOf"], [3, "routerLink"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AdminComponent_div_0_Template, 16, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.users);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map