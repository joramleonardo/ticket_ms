(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/tblResearchlog.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/tblResearchlog.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_library_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/library_service */ "./resources/js/services/library_service.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'employee',
  data: function data() {
    return {
      trainings: [],
      trainingsData: {
        client_ID: '',
        transactionDate: '',
        subjectResearch: null
      },
      trainingsData_update: {},
      drop_subjectResearch: [{
        text: 'Select Status here',
        value: null
      }, 'Acoustics', 'Agricultural Economics & Policy', 'Agricultural Engineering', 'Agriculture, Dairy & Animal Science', 'Agriculture, Multidisciplinary', 'Agriculture, Soil Science', 'Agronomy', 'Allergy', 'Anatomy & Morphology', 'Andrology', 'Anesthesiology'],
      errors: '',
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      filterOn: [],
      filter: null,
      sortDirection: 'asc',
      sortBy: 'id',
      sortDesc: false,
      researchLogFields: [{
        key: 'name',
        label: 'Name'
      }, {
        key: "transactionDate",
        label: "Transaction Date"
      }, {
        key: "subjectResearch",
        label: "Subject Research"
      }, {
        key: 'actions',
        label: 'Action'
      }]
    };
  },
  mounted: function mounted() {
    this.loadTrainings();
    this.loadEmployees();
  },
  methods: {
    showUpdateMdl: function showUpdateMdl(data) {
      this.trainingsData_update = _objectSpread({}, data);
      this.$refs.updateEmployeeModal.show();
    },
    hideUpdateMdl: function hideUpdateMdl(data) {
      this.trainingsData_update = _objectSpread({}, data);
      this.$refs.updateEmployeeModal.hide();
    },
    clearModal: function clearModal() {
      this.$refs.add - employee.removeData();
    },
    loadTrainings: function () {
      var _loadTrainings = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _services_library_service__WEBPACK_IMPORTED_MODULE_1__["loadResearchLog"]();

              case 3:
                response = _context.sent;
                this.trainings = response.data;
                console.log(this.trainings);
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                this.flashMessage.error({
                  message: 'Some error occured! Please try again.',
                  time: 5000
                });

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 8]]);
      }));

      function loadTrainings() {
        return _loadTrainings.apply(this, arguments);
      }

      return loadTrainings;
    }(),
    createTraining: function () {
      var _createTraining = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                formData = new FormData();
                formData.append('client_ID', this.trainingsData.client_ID);
                formData.append('transactionDate', this.trainingsData.transactionDate);
                formData.append('subjectResearch', this.trainingsData.subjectResearch);
                _context2.prev = 4;
                _context2.next = 7;
                return _services_library_service__WEBPACK_IMPORTED_MODULE_1__["createResearchLog"](formData);

              case 7:
                response = _context2.sent;
                console.log(response);
                this.hideEmployeeModal();
                this.flashMessage.success({
                  status: '',
                  message: 'Research Log added successfully!',
                  time: 5000
                });
                this.trainingsData = {
                  client_ID: '',
                  transactionDate: '',
                  subjectResearch: null
                };
                _context2.next = 23;
                break;

              case 14:
                _context2.prev = 14;
                _context2.t0 = _context2["catch"](4);
                _context2.t1 = _context2.t0.response.status;
                _context2.next = _context2.t1 === 422 ? 19 : 21;
                break;

              case 19:
                this.errors = _context2.t0.response.data.errors;
                return _context2.abrupt("break", 23);

              case 21:
                this.flashMessage.error({
                  message: 'Some error occurred, Please try again!',
                  time: 5000
                });
                return _context2.abrupt("break", 23);

              case 23:
                this.loadTrainings();
                this.clearModal();

              case 25:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[4, 14]]);
      }));

      function createTraining() {
        return _createTraining.apply(this, arguments);
      }

      return createTraining;
    }(),
    updateEmployee: function () {
      var _updateEmployee = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                formData = new FormData();
                formData.append('client_ID', this.trainingsData_update.client_ID);
                formData.append('transactionDate', this.trainingsData_update.transactionDate);
                formData.append('subjectResearch', this.trainingsData_update.subjectResearch);
                formData.append("_method", "put");
                _context3.next = 8;
                return _services_library_service__WEBPACK_IMPORTED_MODULE_1__["updateResearchLogData"](this.trainingsData_update.id, formData);

              case 8:
                response = _context3.sent;
                console.log(response);
                this.flashMessage.success({
                  status: '',
                  message: 'Research Log updated successfully!',
                  time: 5000
                });
                this.loadTrainings();
                _context3.next = 23;
                break;

              case 14:
                _context3.prev = 14;
                _context3.t0 = _context3["catch"](0);
                _context3.t1 = _context3.t0.response.status;
                _context3.next = _context3.t1 === 422 ? 19 : 21;
                break;

              case 19:
                this.errors = _context3.t0.response.data.errors;
                return _context3.abrupt("break", 23);

              case 21:
                this.flashMessage.error({
                  message: 'Some error occurred, Please try again!',
                  time: 5000
                });
                return _context3.abrupt("break", 23);

              case 23:
                this.loadTrainings();
                this.hideUpdateMdl();

              case 25:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 14]]);
      }));

      function updateEmployee() {
        return _updateEmployee.apply(this, arguments);
      }

      return updateEmployee;
    }(),
    deleteEmployee: function () {
      var _deleteEmployee = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(data) {
        var trainings_Data, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                trainings_Data = _objectSpread({}, data);
                _context4.prev = 1;
                _context4.next = 4;
                return _services_library_service__WEBPACK_IMPORTED_MODULE_1__["deleteResearchLog"](trainings_Data.id);

              case 4:
                response = _context4.sent;
                console.log(response);
                this.flashMessage.success({
                  status: '',
                  message: 'Research Log deleted successfully!',
                  time: 5000
                });
                _context4.next = 12;
                break;

              case 9:
                _context4.prev = 9;
                _context4.t0 = _context4["catch"](1);
                this.flashMessage.success({
                  status: '',
                  message: 'Research Log deleted successfully!',
                  time: 5000
                });

              case 12:
                this.loadTrainings();

              case 13:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[1, 9]]);
      }));

      function deleteEmployee(_x) {
        return _deleteEmployee.apply(this, arguments);
      }

      return deleteEmployee;
    }(),
    hideEmployeeModal: function hideEmployeeModal() {
      this.$refs['add-employee'].hide();
    },
    showEmployeeModal: function showEmployeeModal() {
      this.$refs.add - employee.show();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/tblResearchlog.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/tblResearchlog.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.font-weight-800{\n    font-weight: 800;\n}\n.font-weight-700{\n    font-weight: 700;\n}\n.font-weight-600{\n    font-weight: 600;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/tblResearchlog.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/tblResearchlog.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./tblResearchlog.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/tblResearchlog.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/tblResearchlog.vue?vue&type=template&id=4c63932c&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/tblResearchlog.vue?vue&type=template&id=4c63932c& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container-fluid" }, [
    _c("h1", { staticClass: "mt-4 stii-font-color-red" }, [_vm._v("Library")]),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-xl-12" }, [
        _c("div", { staticClass: "card mb-4" }, [
          _c(
            "div",
            {
              staticClass: "card-header card-header-title",
              staticStyle: { "background-color": "#ed262a", color: "white" }
            },
            [
              _c("i", { staticClass: "fas fa-list-alt mr-1" }),
              _vm._v("\n          LIST OF RESEARCH LOGS\n          "),
              _c(
                "b-button",
                {
                  directives: [
                    {
                      name: "b-modal",
                      rawName: "v-b-modal.add-employee",
                      modifiers: { "add-employee": true }
                    }
                  ],
                  staticClass: "float-right",
                  staticStyle: { "background-color": "white", color: "black" }
                },
                [_c("i", { staticClass: "fas fa-plus-square" })]
              ),
              _vm._v(" "),
              _c(
                "b-modal",
                {
                  ref: "add-employee",
                  attrs: {
                    id: "add-employee",
                    title: "Add New Training",
                    "hide-footer": ""
                  }
                },
                [
                  _c(
                    "b-form",
                    {
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.createTraining.apply(null, arguments)
                        }
                      }
                    },
                    [
                      _c(
                        "b-card",
                        { attrs: { "no-body": "" } },
                        [
                          _c(
                            "b-card",
                            { attrs: { "bg-variant": "light" } },
                            [
                              _c(
                                "b-form-group",
                                {
                                  staticClass: "font-weight-700",
                                  attrs: {
                                    label: "Client ID:",
                                    "label-for": "client_ID",
                                    "label-cols-sm": "2",
                                    "label-align-sm": "right"
                                  }
                                },
                                [
                                  _c("b-form-input", {
                                    attrs: {
                                      id: "client_ID",
                                      type: "text",
                                      placeholder: "Enter name here...",
                                      required: ""
                                    },
                                    model: {
                                      value: _vm.trainingsData.client_ID,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.trainingsData,
                                          "client_ID",
                                          $$v
                                        )
                                      },
                                      expression: "trainingsData.client_ID"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-form-group",
                                {
                                  staticClass: "font-weight-700",
                                  attrs: {
                                    label: "Transaction Date:",
                                    "label-for": "transactionDate",
                                    "label-cols-sm": "2",
                                    "label-align-sm": "right"
                                  }
                                },
                                [
                                  _c("b-form-datepicker", {
                                    attrs: {
                                      id: "transactionDate",
                                      locale: "en"
                                    },
                                    model: {
                                      value: _vm.trainingsData.transactionDate,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.trainingsData,
                                          "transactionDate",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "trainingsData.transactionDate"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-form-group",
                                {
                                  staticClass: "font-weight-700",
                                  attrs: {
                                    label: "Subject Research:",
                                    "label-for": "subjectResearch",
                                    "label-cols-sm": "2",
                                    "label-align-sm": "right"
                                  }
                                },
                                [
                                  _c("b-form-select", {
                                    attrs: {
                                      id: "subjectResearch",
                                      options: _vm.drop_subjectResearch,
                                      required: ""
                                    },
                                    model: {
                                      value: _vm.trainingsData.subjectResearch,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.trainingsData,
                                          "subjectResearch",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "trainingsData.subjectResearch"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "float-right" },
                        [
                          _c(
                            "b-button",
                            {
                              staticClass: "btn btn-default",
                              attrs: {
                                type: "button",
                                variant: "outline-danger"
                              },
                              on: { click: _vm.hideEmployeeModal }
                            },
                            [_vm._v("Cancel")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            {
                              staticClass: "btn",
                              attrs: {
                                type: "submit",
                                variant: "outline-success"
                              }
                            },
                            [_vm._v("Save")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-modal",
                {
                  ref: "updateEmployeeModal",
                  attrs: {
                    id: "updateEmployeeModal",
                    title: "Add New Training",
                    "hide-footer": ""
                  }
                },
                [
                  _c(
                    "b-form",
                    {
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.updateEmployee.apply(null, arguments)
                        }
                      }
                    },
                    [
                      _c(
                        "b-card",
                        { attrs: { "no-body": "" } },
                        [
                          _c(
                            "b-card",
                            { attrs: { "bg-variant": "light" } },
                            [
                              _c(
                                "b-form-group",
                                {
                                  staticClass: "font-weight-700",
                                  attrs: {
                                    label: "Client ID:",
                                    "label-for": "client_ID",
                                    "label-cols-sm": "2",
                                    "label-align-sm": "right"
                                  }
                                },
                                [
                                  _c("b-form-input", {
                                    attrs: {
                                      id: "client_ID",
                                      type: "text",
                                      placeholder: "Enter name here...",
                                      required: ""
                                    },
                                    model: {
                                      value: _vm.trainingsData_update.client_ID,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.trainingsData_update,
                                          "client_ID",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "trainingsData_update.client_ID"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-form-group",
                                {
                                  staticClass: "font-weight-700",
                                  attrs: {
                                    label: "Transaction Date:",
                                    "label-for": "transactionDate",
                                    "label-cols-sm": "2",
                                    "label-align-sm": "right"
                                  }
                                },
                                [
                                  _c("b-form-datepicker", {
                                    attrs: {
                                      id: "transactionDate",
                                      locale: "en"
                                    },
                                    model: {
                                      value:
                                        _vm.trainingsData_update
                                          .transactionDate,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.trainingsData_update,
                                          "transactionDate",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "trainingsData_update.transactionDate"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-form-group",
                                {
                                  staticClass: "font-weight-700",
                                  attrs: {
                                    label: "Subject Research:",
                                    "label-for": "subjectResearch",
                                    "label-cols-sm": "2",
                                    "label-align-sm": "right"
                                  }
                                },
                                [
                                  _c("b-form-select", {
                                    attrs: {
                                      id: "subjectResearch",
                                      options: _vm.drop_subjectResearch,
                                      required: ""
                                    },
                                    model: {
                                      value:
                                        _vm.trainingsData_update
                                          .subjectResearch,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.trainingsData_update,
                                          "subjectResearch",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "trainingsData_update.subjectResearch"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "float-right" },
                        [
                          _c(
                            "b-button",
                            {
                              staticClass: "btn btn-default",
                              attrs: {
                                type: "button",
                                variant: "outline-danger"
                              },
                              on: { click: _vm.hideEmployeeModal }
                            },
                            [_vm._v("Cancel")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            {
                              staticClass: "btn",
                              attrs: {
                                type: "submit",
                                variant: "outline-success"
                              }
                            },
                            [_vm._v("Save")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "card-tools" },
            [
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    { staticClass: "mt-3", attrs: { lg: "10" } },
                    [
                      _c(
                        "b-form-group",
                        {
                          attrs: {
                            label: "Search",
                            "label-for": "filter-input",
                            "label-cols-sm": "2",
                            "label-align-sm": "center"
                          }
                        },
                        [
                          _c(
                            "b-input-group",
                            [
                              _c("b-form-input", {
                                attrs: {
                                  id: "filter-input",
                                  type: "search",
                                  placeholder: "Type to Search"
                                },
                                on: {
                                  keydown: function($event) {
                                    return _vm.returnPaginate($event)
                                  }
                                },
                                model: {
                                  value: _vm.filter,
                                  callback: function($$v) {
                                    _vm.filter = $$v
                                  },
                                  expression: "filter"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "card-body table-responsive p-4" }, [
            _c(
              "div",
              [
                _c("b-table", {
                  attrs: {
                    striped: "",
                    hover: "",
                    items: _vm.trainings,
                    fields: _vm.researchLogFields,
                    "sort-by": _vm.sortBy,
                    "sort-desc": _vm.sortDesc,
                    "sort-icon-left": "",
                    responsive: "sm",
                    filter: _vm.filter,
                    "current-page": _vm.currentPage,
                    "per-page": _vm.perPage,
                    "filter-included-fields": _vm.filterOn
                  },
                  on: {
                    "update:sortBy": function($event) {
                      _vm.sortBy = $event
                    },
                    "update:sort-by": function($event) {
                      _vm.sortBy = $event
                    },
                    "update:sortDesc": function($event) {
                      _vm.sortDesc = $event
                    },
                    "update:sort-desc": function($event) {
                      _vm.sortDesc = $event
                    }
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "cell(actions)",
                      fn: function(row) {
                        return [
                          _c(
                            "b-button",
                            {
                              staticClass: "mr-1 button-shadow jkl-btn-edit",
                              attrs: { size: "sm", variant: "success" },
                              on: {
                                click: function($event) {
                                  return _vm.showUpdateMdl(
                                    row.item,
                                    row.index,
                                    $event.target
                                  )
                                }
                              }
                            },
                            [_c("i", { staticClass: "fas fa-user-edit" })]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            {
                              staticClass: "mr-1 button-shadow jkl-btn-delete",
                              attrs: { size: "sm", variant: "danger" },
                              on: {
                                click: function($event) {
                                  return _vm.deleteEmployee(
                                    row.item,
                                    row.index,
                                    $event.target
                                  )
                                }
                              }
                            },
                            [_c("i", { staticClass: "fas fa-trash" })]
                          )
                        ]
                      }
                    }
                  ])
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "my-1" },
              [
                _c("b-pagination", {
                  staticClass: "my-0",
                  attrs: {
                    "total-rows": _vm.totalRows,
                    "per-page": _vm.perPage,
                    align: "center"
                  },
                  model: {
                    value: _vm.currentPage,
                    callback: function($$v) {
                      _vm.currentPage = $$v
                    },
                    expression: "currentPage"
                  }
                })
              ],
              1
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ol", { staticClass: "breadcrumb mb-4" }, [
      _c("li", { staticClass: "breadcrumb-item active" }, [
        _vm._v("Home > Library > Research Log")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/tblResearchlog.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/tblResearchlog.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tblResearchlog_vue_vue_type_template_id_4c63932c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tblResearchlog.vue?vue&type=template&id=4c63932c& */ "./resources/js/views/tblResearchlog.vue?vue&type=template&id=4c63932c&");
/* harmony import */ var _tblResearchlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tblResearchlog.vue?vue&type=script&lang=js& */ "./resources/js/views/tblResearchlog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _tblResearchlog_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tblResearchlog.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/tblResearchlog.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _tblResearchlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tblResearchlog_vue_vue_type_template_id_4c63932c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _tblResearchlog_vue_vue_type_template_id_4c63932c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/tblResearchlog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/tblResearchlog.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/tblResearchlog.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tblResearchlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./tblResearchlog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/tblResearchlog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tblResearchlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/tblResearchlog.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/tblResearchlog.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tblResearchlog_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./tblResearchlog.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/tblResearchlog.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tblResearchlog_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tblResearchlog_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tblResearchlog_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tblResearchlog_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/tblResearchlog.vue?vue&type=template&id=4c63932c&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/tblResearchlog.vue?vue&type=template&id=4c63932c& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tblResearchlog_vue_vue_type_template_id_4c63932c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./tblResearchlog.vue?vue&type=template&id=4c63932c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/tblResearchlog.vue?vue&type=template&id=4c63932c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tblResearchlog_vue_vue_type_template_id_4c63932c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tblResearchlog_vue_vue_type_template_id_4c63932c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);