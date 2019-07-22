(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Bar"],{

/***/ "./app/scripts/components/Bar.ts":
/*!***************************************!*\
  !*** ./app/scripts/components/Bar.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var Bar = /** @class */ (function () {
    function Bar(_a) {
        var context = _a.context;
        this.imageUrl = 'https://picsum.photos/v2/list?limit=2';
        this.$context = context;
        this.init();
    }
    Bar.prototype.init = function () {
        this.$context.innerHTML = 'I am lazy loaded';
        axios__WEBPACK_IMPORTED_MODULE_0___default.a.request({
            url: this.imageUrl,
            transformResponse: function (r) { return r; }
        }).then(function (response) {
            var data = response.data;
            console.log(data);
        });
    };
    return Bar;
}());
/* harmony default export */ __webpack_exports__["default"] = (Bar);


/***/ })

}]);
//# sourceMappingURL=Bar.js.map