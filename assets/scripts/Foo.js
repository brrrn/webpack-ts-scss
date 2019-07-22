(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Foo"],{

/***/ "./app/scripts/components/Foo.ts":
/*!***************************************!*\
  !*** ./app/scripts/components/Foo.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/loader */ "./app/scripts/utils/loader.ts");

var Foo = /** @class */ (function () {
    function Foo(_a) {
        var context = _a.context, params = _a.params;
        this.button = document.createElement('button');
        this.context = context;
        this.text = params.text;
        this.init();
    }
    Foo.prototype.init = function () {
        this.button.innerText = this.text;
        this.context.appendChild(this.button);
        this.addElement();
        this.bindEvents();
    };
    Foo.prototype.addElement = function () {
        var newElement = document.createElement('div');
        newElement.setAttribute('data-component', 'Bar');
        this.context.appendChild(newElement);
    };
    Foo.prototype.bindEvents = function () {
        var _this = this;
        this.button.addEventListener('click', function () {
            Object(_utils_loader__WEBPACK_IMPORTED_MODULE_0__["default"])(_this.context);
        });
    };
    return Foo;
}());
/* harmony default export */ __webpack_exports__["default"] = (Foo);


/***/ })

}]);
//# sourceMappingURL=Foo.js.map