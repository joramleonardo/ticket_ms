(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/tblResearcher.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/tblResearcher.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_pjs_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/pjs_service */ "./resources/js/services/pjs_service.js");


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
      employees: [],
      employeeData: {
        name: '',
        sex: null,
        location: null,
        countryName: '',
        affiliation: '',
        affiliationType: null,
        otherAffiliationType: ''
      },
      employeeData_update: {},
      radio_sex: [{
        text: 'Male',
        value: 'Male'
      }, {
        text: 'Female',
        value: 'Female'
      }],
      drop_location: [{
        text: 'Select Location here',
        value: null
      }, 'Metro Manila', 'Luzon', 'Visayas', 'Mindanao', 'Overseas'],
      drop_affiliationType: [{
        text: 'Select Affiliation Type here',
        value: null
      }, 'Government Organization/Office', 'SUCs', 'Private Colleges/Universities', 'Others'],
      errors: '',
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      filterOn: [],
      filter: null,
      sortDirection: 'asc',
      sortBy: 'id',
      sortDesc: false,
      fields: [{
        key: 'id',
        sortable: true,
        label: 'Researcher ID'
      }, {
        key: 'name',
        sortable: true,
        label: 'Name'
      }, {
        key: 'sex',
        sortable: true,
        label: 'Sex'
      }, {
        key: 'location',
        label: 'location'
      }, {
        key: 'countryName',
        sortable: true,
        label: 'Country Name'
      }, {
        key: 'affiliation',
        label: 'affiliation'
      }, {
        key: 'affiliationType',
        label: 'Affiliation Type'
      }, {
        key: 'otherAffiliationType',
        label: 'Other Affiliation Type'
      }, {
        key: 'actions',
        label: 'Action'
      }]
    };
  },
  mounted: function mounted() {
    this.loadEmployees();
  },
  methods: {
    showUpdateMdl: function showUpdateMdl(data) {
      this.employeeData_update = _objectSpread({}, data);
      this.$refs.updateEmployeeModal.show();
    },
    hideUpdateMdl: function hideUpdateMdl(data) {
      this.employeeData_update = _objectSpread({}, data);
      this.$refs.updateEmployeeModal.hide();
    },
    clearModal: function clearModal() {
      this.$refs.add - employee.removeData();
    },
    loadEmployees: function () {
      var _loadEmployees = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _services_pjs_service__WEBPACK_IMPORTED_MODULE_1__["loadEmployees"]();

              case 3:
                response = _context.sent;
                this.employees = response.data.data;
                this.totalRows = this.employees.length;
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

      function loadEmployees() {
        return _loadEmployees.apply(this, arguments);
      }

      return loadEmployees;
    }(),
    createEmployee: function () {
      var _createEmployee = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                formData = new FormData();
                formData.append('name', this.employeeData.name);
                formData.append('sex', this.employeeData.sex);
                formData.append('location', this.employeeData.location);
                formData.append('countryName', this.employeeData.countryName);
                formData.append('affiliation', this.employeeData.affiliation);
                formData.append('affiliationType', this.employeeData.affiliationType);
                formData.append('otherAffiliationType', this.employeeData.otherAffiliationType);
                _context2.prev = 8;
                _context2.next = 11;
                return _services_pjs_service__WEBPACK_IMPORTED_MODULE_1__["createAccount"](formData);

              case 11:
                response = _context2.sent;
                console.log(response);
                this.hideEmployeeModal();
                this.flashMessage.success({
                  status: '',
                  message: 'Employee added successfully!',
                  time: 5000
                });
                this.employeeData = {
                  name: '',
                  sex: null,
                  location: null,
                  affiliation: '',
                  affiliationType: null,
                  otherAffiliationType: ''
                };
                _context2.next = 27;
                break;

              case 18:
                _context2.prev = 18;
                _context2.t0 = _context2["catch"](8);
                _context2.t1 = _context2.t0.response.status;
                _context2.next = _context2.t1 === 422 ? 23 : 25;
                break;

              case 23:
                this.errors = _context2.t0.response.data.errors;
                return _context2.abrupt("break", 27);

              case 25:
                this.flashMessage.error({
                  message: 'Some error occured! Please try again.',
                  time: 5000
                });
                return _context2.abrupt("break", 27);

              case 27:
                this.loadEmployees();
                this.clearModal();

              case 29:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[8, 18]]);
      }));

      function createEmployee() {
        return _createEmployee.apply(this, arguments);
      }

      return createEmployee;
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
                formData.append('name', this.employeeData_update.name);
                formData.append('sex', this.employeeData_update.sex);
                formData.append('location', this.employeeData_update.location);
                formData.append('countryName', this.employeeData_update.countryName);
                formData.append('affiliation', this.employeeData_update.affiliation);
                formData.append('affiliationType', this.employeeData_update.affiliationType);
                formData.append('otherAffiliationType', this.employeeData_update.otherAffiliationType);
                formData.append("_method", "put");
                _context3.next = 12;
                return _services_pjs_service__WEBPACK_IMPORTED_MODULE_1__["updateEmployeeData"](this.employeeData_update.id, formData);

              case 12:
                response = _context3.sent;
                console.log(response);
                this.flashMessage.success({
                  status: '',
                  message: 'Employee updated successfully!',
                  time: 5000
                });
                this.loadEmployees();
                _context3.next = 27;
                break;

              case 18:
                _context3.prev = 18;
                _context3.t0 = _context3["catch"](0);
                _context3.t1 = _context3.t0.response.status;
                _context3.next = _context3.t1 === 422 ? 23 : 25;
                break;

              case 23:
                this.errors = _context3.t0.response.data.errors;
                return _context3.abrupt("break", 27);

              case 25:
                this.flashMessage.error({
                  message: 'Some error occurred, Please try again!',
                  time: 5000
                });
                return _context3.abrupt("break", 27);

              case 27:
                this.loadEmployees();
                this.hideUpdateMdl();

              case 29:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 18]]);
      }));

      function updateEmployee() {
        return _updateEmployee.apply(this, arguments);
      }

      return updateEmployee;
    }(),
    deleteEmployee: function () {
      var _deleteEmployee = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(data) {
        var employee_data, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                employee_data = _objectSpread({}, data);
                _context4.prev = 1;
                _context4.next = 4;
                return _services_pjs_service__WEBPACK_IMPORTED_MODULE_1__["deleteEmployee"](employee_data.id);

              case 4:
                response = _context4.sent;
                console.log(response);
                this.flashMessage.success({
                  status: '',
                  message: 'Employee deleted successfully!',
                  time: 5000
                });
                _context4.next = 11;
                break;

              case 9:
                _context4.prev = 9;
                _context4.t0 = _context4["catch"](1);

              case 11:
                this.loadEmployees();

              case 12:
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/tblResearcher.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/tblResearcher.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.font-weight-800{\n    font-weight: 800;\n}\n.font-weight-700{\n    font-weight: 700;\n}\n.font-weight-600{\n    font-weight: 600;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/tblResearcher.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/tblResearcher.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./tblResearcher.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/tblResearcher.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/tblResearcher.vue?vue&type=template&id=3b401712&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/tblResearcher.vue?vue&type=template&id=3b401712& ***!
  \***********************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "container-fluid" },
    [
      _c("h1", { staticClass: "mt-4 stii-font-color-red" }, [
        _vm._v("Philippine Journal of Science")
      ]),
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
                _vm._v("\n          LIST OF RESEARCHERS\n          "),
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
                      items: _vm.employees,
                      fields: _vm.fields,
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
                                staticClass:
                                  "mr-1 button-shadow jkl-btn-delete",
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
      ]),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "add-employee",
          attrs: {
            id: "add-employee",
            title: "Add New Researcher",
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
                  return _vm.createEmployee.apply(null, arguments)
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
                            label: "Name:",
                            "label-for": "name",
                            "label-cols-sm": "2",
                            "label-align-sm": "right"
                          }
                        },
                        [
                          _c("b-form-input", {
                            attrs: {
                              id: "name",
                              type: "text",
                              placeholder: "Enter name here...",
                              required: ""
                            },
                            model: {
                              value: _vm.employeeData.name,
                              callback: function($$v) {
                                _vm.$set(_vm.employeeData, "name", $$v)
                              },
                              expression: "employeeData.name"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("b-form-group", {
                        staticClass: "mb-0 font-weight-700",
                        attrs: {
                          label: "Sex:",
                          "label-cols-sm": "2",
                          "label-align-sm": "right"
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(ref) {
                              return [
                                _c("b-form-radio-group", {
                                  staticClass: "pt-2 font-weight-600",
                                  attrs: { id: "sex", options: _vm.radio_sex },
                                  model: {
                                    value: _vm.employeeData.sex,
                                    callback: function($$v) {
                                      _vm.$set(_vm.employeeData, "sex", $$v)
                                    },
                                    expression: "employeeData.sex"
                                  }
                                })
                              ]
                            }
                          }
                        ])
                      }),
                      _vm._v(" "),
                      _c(
                        "b-form-group",
                        {
                          staticClass: "font-weight-700",
                          attrs: {
                            label: "Location:",
                            "label-for": "location",
                            "label-cols-sm": "2",
                            "label-align-sm": "right"
                          }
                        },
                        [
                          _c("b-form-select", {
                            attrs: {
                              id: "location",
                              options: _vm.drop_location,
                              required: ""
                            },
                            model: {
                              value: _vm.employeeData.location,
                              callback: function($$v) {
                                _vm.$set(_vm.employeeData, "location", $$v)
                              },
                              expression: "employeeData.location"
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
                            label: "Country Name:",
                            "label-for": "countryName",
                            "label-cols-sm": "2",
                            "label-align-sm": "right"
                          }
                        },
                        [
                          _c("b-form-input", {
                            attrs: {
                              id: "countryName",
                              type: "text",
                              placeholder: "Enter Country Name here...",
                              required: ""
                            },
                            model: {
                              value: _vm.employeeData.countryName,
                              callback: function($$v) {
                                _vm.$set(_vm.employeeData, "countryName", $$v)
                              },
                              expression: "employeeData.countryName"
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
                            label: "Affiliation:",
                            "label-for": "affiliation",
                            "label-cols-sm": "2",
                            "label-align-sm": "right"
                          }
                        },
                        [
                          _c("b-form-input", {
                            attrs: {
                              id: "affiliation",
                              type: "text",
                              placeholder: "Enter affiliation here...",
                              required: ""
                            },
                            model: {
                              value: _vm.employeeData.affiliation,
                              callback: function($$v) {
                                _vm.$set(_vm.employeeData, "affiliation", $$v)
                              },
                              expression: "employeeData.affiliation"
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
                            label: "Affiliation Type:",
                            "label-for": "affiliationType",
                            "label-cols-sm": "2",
                            "label-align-sm": "right"
                          }
                        },
                        [
                          _c("b-form-select", {
                            attrs: {
                              id: "affiliationType",
                              options: _vm.drop_affiliationType,
                              required: ""
                            },
                            model: {
                              value: _vm.employeeData.affiliationType,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.employeeData,
                                  "affiliationType",
                                  $$v
                                )
                              },
                              expression: "employeeData.affiliationType"
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
                            label: "Other Affiliation Type:",
                            "label-for": "otherAffiliationType",
                            "label-cols-sm": "2",
                            "label-align-sm": "right"
                          }
                        },
                        [
                          _c("b-form-input", {
                            attrs: {
                              id: "otherAffiliationType",
                              type: "text",
                              placeholder:
                                "Enter Other Affiliation Type here...",
                              required: ""
                            },
                            model: {
                              value: _vm.employeeData.otherAffiliationType,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.employeeData,
                                  "otherAffiliationType",
                                  $$v
                                )
                              },
                              expression: "employeeData.otherAffiliationType"
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
                      attrs: { type: "button", variant: "outline-danger" },
                      on: { click: _vm.hideEmployeeModal }
                    },
                    [_vm._v("Cancel")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      staticClass: "btn",
                      attrs: { type: "submit", variant: "outline-success" }
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
            title: "Update Researcher",
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
                            label: "Name:",
                            "label-for": "name",
                            "label-cols-sm": "2",
                            "label-align-sm": "right"
                          }
                        },
                        [
                          _c("b-form-input", {
                            attrs: {
                              id: "name",
                              type: "text",
                              placeholder: "Enter name here...",
                              required: ""
                            },
                            model: {
                              value: _vm.employeeData_update.name,
                              callback: function($$v) {
                                _vm.$set(_vm.employeeData_update, "name", $$v)
                              },
                              expression: "employeeData_update.name"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("b-form-group", {
                        staticClass: "mb-0 font-weight-700",
                        attrs: {
                          label: "Sex:",
                          "label-cols-sm": "2",
                          "label-align-sm": "right"
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(ref) {
                              return [
                                _c("b-form-radio-group", {
                                  staticClass: "pt-2 font-weight-600",
                                  attrs: { id: "sex", options: _vm.radio_sex },
                                  model: {
                                    value: _vm.employeeData_update.sex,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.employeeData_update,
                                        "sex",
                                        $$v
                                      )
                                    },
                                    expression: "employeeData_update.sex"
                                  }
                                })
                              ]
                            }
                          }
                        ])
                      }),
                      _vm._v(" "),
                      _c(
                        "b-form-group",
                        {
                          staticClass: "font-weight-700",
                          attrs: {
                            label: "Location:",
                            "label-for": "location",
                            "label-cols-sm": "2",
                            "label-align-sm": "right"
                          }
                        },
                        [
                          _c("b-form-select", {
                            attrs: {
                              id: "location",
                              options: _vm.drop_location,
                              required: ""
                            },
                            model: {
                              value: _vm.employeeData_update.location,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.employeeData_update,
                                  "location",
                                  $$v
                                )
                              },
                              expression: "employeeData_update.location"
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
                            label: "Country Name:",
                            "label-for": "countryName",
                            "label-cols-sm": "2",
                            "label-align-sm": "right"
                          }
                        },
                        [
                          _c("b-form-input", {
                            attrs: {
                              id: "countryName",
                              type: "text",
                              placeholder: "Enter Country Name here...",
                              required: ""
                            },
                            model: {
                              value: _vm.employeeData_update.countryName,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.employeeData_update,
                                  "countryName",
                                  $$v
                                )
                              },
                              expression: "employeeData_update.countryName"
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
                            label: "Affiliation:",
                            "label-for": "affiliation",
                            "label-cols-sm": "2",
                            "label-align-sm": "right"
                          }
                        },
                        [
                          _c("b-form-input", {
                            attrs: {
                              id: "affiliation",
                              type: "text",
                              placeholder: "Enter affiliation here...",
                              required: ""
                            },
                            model: {
                              value: _vm.employeeData_update.affiliation,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.employeeData_update,
                                  "affiliation",
                                  $$v
                                )
                              },
                              expression: "employeeData_update.affiliation"
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
                            label: "Affiliation Type:",
                            "label-for": "affiliationType",
                            "label-cols-sm": "2",
                            "label-align-sm": "right"
                          }
                        },
                        [
                          _c("b-form-select", {
                            attrs: {
                              id: "affiliationType",
                              options: _vm.drop_affiliationType,
                              required: ""
                            },
                            model: {
                              value: _vm.employeeData_update.affiliationType,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.employeeData_update,
                                  "affiliationType",
                                  $$v
                                )
                              },
                              expression: "employeeData_update.affiliationType"
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
                            label: "Other Affiliation Type:",
                            "label-for": "otherAffiliationType",
                            "label-cols-sm": "2",
                            "label-align-sm": "right"
                          }
                        },
                        [
                          _c("b-form-input", {
                            attrs: {
                              id: "otherAffiliationType",
                              type: "text",
                              placeholder:
                                "Enter Other Affiliation Type here...",
                              required: ""
                            },
                            model: {
                              value:
                                _vm.employeeData_update.otherAffiliationType,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.employeeData_update,
                                  "otherAffiliationType",
                                  $$v
                                )
                              },
                              expression:
                                "employeeData_update.otherAffiliationType"
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
                      attrs: { type: "button", variant: "outline-danger" },
                      on: { click: _vm.hideEmployeeModal }
                    },
                    [_vm._v("Cancel")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      staticClass: "btn",
                      attrs: { type: "submit", variant: "outline-success" }
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
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ol", { staticClass: "breadcrumb mb-4" }, [
      _c("li", { staticClass: "breadcrumb-item active" }, [
        _vm._v("Home > Philippine Journal of Science > Researcher")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/tblResearcher.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/tblResearcher.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tblResearcher_vue_vue_type_template_id_3b401712___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tblResearcher.vue?vue&type=template&id=3b401712& */ "./resources/js/views/tblResearcher.vue?vue&type=template&id=3b401712&");
/* harmony import */ var _tblResearcher_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tblResearcher.vue?vue&type=script&lang=js& */ "./resources/js/views/tblResearcher.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _tblResearcher_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tblResearcher.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/tblResearcher.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _tblResearcher_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tblResearcher_vue_vue_type_template_id_3b401712___WEBPACK_IMPORTED_MODULE_0__["render"],
  _tblResearcher_vue_vue_type_template_id_3b401712___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/tblResearcher.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/tblResearcher.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/tblResearcher.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tblResearcher_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./tblResearcher.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/tblResearcher.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tblResearcher_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/tblResearcher.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/tblResearcher.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tblResearcher_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./tblResearcher.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/tblResearcher.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tblResearcher_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tblResearcher_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tblResearcher_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tblResearcher_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/tblResearcher.vue?vue&type=template&id=3b401712&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/tblResearcher.vue?vue&type=template&id=3b401712& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tblResearcher_vue_vue_type_template_id_3b401712___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./tblResearcher.vue?vue&type=template&id=3b401712& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/tblResearcher.vue?vue&type=template&id=3b401712&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tblResearcher_vue_vue_type_template_id_3b401712___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tblResearcher_vue_vue_type_template_id_3b401712___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);