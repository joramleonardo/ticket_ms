(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/tblClient.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/tblClient.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
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
        clientType: null,
        profType: null,
        yearLevel: null,
        schoolCategory: null,
        sex: null,
        ageRange: null,
        office_school: '',
        dateVisited: '',
        timeIn: '',
        timeOut: ''
      },
      employeeData_update: {},
      radio_sex: [{
        text: 'Male',
        value: 'Male'
      }, {
        text: 'Female',
        value: 'Female'
      }],
      drop_clientType: [{
        text: 'Select Client Type here',
        value: null
      }, 'Student', 'Professional'],
      drop_profType: [{
        text: 'Select Professional Type here',
        value: null
      }, 'Government Employee', 'Private Employee'],
      drop_yearLevel: [{
        text: 'Select Year Level here',
        value: null
      }, 'Elementary', 'Junior High School', 'Senior High School', 'College', 'Post Graduate (Master’s/Ph.D.)', 'Tech Vocational Education'],
      drop_schoolCategory: [{
        text: 'Select School Category here',
        value: null
      }, 'Public School/College/University', 'Private School/College/University'],
      drop_ageRange: [{
        text: 'Select Age Range here',
        value: null
      }, 'below 18 years old', '18-24 years old', '25-34 years old', '35-44 years old', '45 years old and above'],
      drop_nature: [{
        text: 'Select Nature here',
        value: null
      }, 'Permanent', 'COS'],
      drop_level: [{
        text: 'Select Level here',
        value: null
      }, 'Executive', 'Middle Manager', 'Staff'],
      drop_division: [{
        text: 'Select Division here',
        value: null
      }, 'CRPD', 'IRAD', 'FAD', 'OD-MISPS'],
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
        label: 'Client ID'
      }, {
        key: 'name',
        sortable: true,
        label: 'Name'
      }, {
        key: 'clientType',
        sortable: true,
        label: 'Client Type'
      }, {
        key: 'profType',
        label: 'Prof Type'
      },, {
        key: 'yearLevel',
        label: 'Year Level'
      }, {
        key: 'schoolCategory',
        label: 'School Category'
      }, {
        key: 'sex',
        label: 'Sex'
      }, {
        key: 'ageRange',
        label: 'Age Range'
      }, {
        key: 'office_school',
        label: 'Office/School'
      }, {
        key: 'dateVisited',
        label: 'Date Visited'
      }, {
        key: 'timeIn',
        label: 'Time In'
      }, {
        key: 'timeOut',
        label: 'Time Out'
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
                return _services_library_service__WEBPACK_IMPORTED_MODULE_1__["loadEmployees"]();

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
                formData.append('clientType', this.employeeData.clientType);
                formData.append('profType', this.employeeData.profType);
                formData.append('yearLevel', this.employeeData.yearLevel);
                formData.append('schoolCategory', this.employeeData.schoolCategory);
                formData.append('sex', this.employeeData.sex);
                formData.append('ageRange', this.employeeData.ageRange);
                formData.append('office_school', this.employeeData.office_school);
                formData.append('dateVisited', this.employeeData.dateVisited);
                formData.append('timeIn', this.employeeData.timeIn);
                formData.append('timeOut', this.employeeData.timeOut);
                _context2.prev = 12;
                _context2.next = 15;
                return _services_library_service__WEBPACK_IMPORTED_MODULE_1__["createAccount"](formData);

              case 15:
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
                  clientType: null,
                  profType: null,
                  yearLevel: null,
                  schoolCategory: null,
                  sex: null,
                  ageRange: null,
                  office_school: '',
                  dateVisited: '',
                  timeIn: '',
                  timeOut: ''
                };
                _context2.next = 31;
                break;

              case 22:
                _context2.prev = 22;
                _context2.t0 = _context2["catch"](12);
                _context2.t1 = _context2.t0.response.status;
                _context2.next = _context2.t1 === 422 ? 27 : 29;
                break;

              case 27:
                this.errors = _context2.t0.response.data.errors;
                return _context2.abrupt("break", 31);

              case 29:
                this.flashMessage.error({
                  message: 'Some error occured! Please try again.',
                  time: 5000
                });
                return _context2.abrupt("break", 31);

              case 31:
                this.loadEmployees();
                this.clearModal();

              case 33:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[12, 22]]);
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
                formData.append('clientType', this.employeeData_update.clientType);
                formData.append('profType', this.employeeData_update.profType);
                formData.append('yearLevel', this.employeeData_update.yearLevel);
                formData.append('schoolCategory', this.employeeData_update.schoolCategory);
                formData.append('sex', this.employeeData_update.sex);
                formData.append('ageRange', this.employeeData_update.ageRange);
                formData.append('office_school', this.employeeData_update.office_school);
                formData.append('dateVisited', this.employeeData_update.dateVisited);
                formData.append('timeIn', this.employeeData_update.timeIn);
                formData.append('timeOut', this.employeeData_update.timeOut);
                formData.append("_method", "put");
                _context3.next = 16;
                return _services_library_service__WEBPACK_IMPORTED_MODULE_1__["updateEmployeeData"](this.employeeData_update.id, formData);

              case 16:
                response = _context3.sent;
                console.log(response);
                this.flashMessage.success({
                  status: '',
                  message: 'Employee updated successfully!',
                  time: 5000
                });
                this.loadEmployees();
                _context3.next = 31;
                break;

              case 22:
                _context3.prev = 22;
                _context3.t0 = _context3["catch"](0);
                _context3.t1 = _context3.t0.response.status;
                _context3.next = _context3.t1 === 422 ? 27 : 29;
                break;

              case 27:
                this.errors = _context3.t0.response.data.errors;
                return _context3.abrupt("break", 31);

              case 29:
                this.flashMessage.error({
                  message: 'Some error occurred, Please try again!',
                  time: 5000
                });
                return _context3.abrupt("break", 31);

              case 31:
                this.loadEmployees();
                this.hideUpdateMdl();

              case 33:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 22]]);
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
                return _services_library_service__WEBPACK_IMPORTED_MODULE_1__["deleteEmployee"](employee_data.id);

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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/tblClient.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/tblClient.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.font-weight-800{\n    font-weight: 800;\n}\n.font-weight-700{\n    font-weight: 700;\n}\n.font-weight-600{\n    font-weight: 600;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/tblClient.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/tblClient.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./tblClient.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/tblClient.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/tblClient.vue?vue&type=template&id=78b3feba&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/tblClient.vue?vue&type=template&id=78b3feba& ***!
  \*******************************************************************************************************************************************************************************************************/
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
        _vm._v("Library")
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
                _vm._v("\n          LIST OF CLIENTS\n          "),
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
            title: "Add New Employee",
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
                      _c(
                        "b-form-group",
                        {
                          staticClass: "font-weight-700",
                          attrs: {
                            label: "Client Type:",
                            "label-for": "clientType",
                            "label-cols-sm": "2",
                            "label-align-sm": "right"
                          }
                        },
                        [
                          _c("b-form-select", {
                            attrs: {
                              id: "clientType",
                              options: _vm.drop_clientType,
                              required: ""
                            },
                            model: {
                              value: _vm.employeeData.clientType,
                              callback: function($$v) {
                                _vm.$set(_vm.employeeData, "clientType", $$v)
                              },
                              expression: "employeeData.clientType"
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
                            label: "Professional Type:",
                            "label-for": "profType",
                            "label-cols-sm": "2",
                            "label-align-sm": "right"
                          }
                        },
                        [
                          _c("b-form-select", {
                            attrs: {
                              id: "profType",
                              options: _vm.drop_profType,
                              required: ""
                            },
                            model: {
                              value: _vm.employeeData.profType,
                              callback: function($$v) {
                                _vm.$set(_vm.employeeData, "profType", $$v)
                              },
                              expression: "employeeData.profType"
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
                            label: "Year Level:",
                            "label-for": "yearLevel",
                            "label-cols-sm": "2",
                            "label-align-sm": "right"
                          }
                        },
                        [
                          _c("b-form-select", {
                            attrs: {
                              id: "yearLevel",
                              options: _vm.drop_yearLevel,
                              required: ""
                            },
                            model: {
                              value: _vm.employeeData.yearLevel,
                              callback: function($$v) {
                                _vm.$set(_vm.employeeData, "yearLevel", $$v)
                              },
                              expression: "employeeData.yearLevel"
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
                            label: "School Category:",
                            "label-for": "schoolCategory",
                            "label-cols-sm": "2",
                            "label-align-sm": "right"
                          }
                        },
                        [
                          _c("b-form-select", {
                            attrs: {
                              id: "schoolCategory",
                              options: _vm.drop_schoolCategory,
                              required: ""
                            },
                            model: {
                              value: _vm.employeeData.schoolCategory,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.employeeData,
                                  "schoolCategory",
                                  $$v
                                )
                              },
                              expression: "employeeData.schoolCategory"
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
                            label: "Age Range:",
                            "label-for": "ageRange",
                            "label-cols-sm": "2",
                            "label-align-sm": "right"
                          }
                        },
                        [
                          _c("b-form-select", {
                            attrs: {
                              id: "ageRange",
                              options: _vm.drop_ageRange,
                              required: ""
                            },
                            model: {
                              value: _vm.employeeData.ageRange,
                              callback: function($$v) {
                                _vm.$set(_vm.employeeData, "ageRange", $$v)
                              },
                              expression: "employeeData.ageRange"
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
                            label: "Office/School:",
                            "label-for": "office_school",
                            "label-cols-sm": "2",
                            "label-align-sm": "right"
                          }
                        },
                        [
                          _c("b-form-input", {
                            attrs: {
                              id: "office_school",
                              type: "text",
                              placeholder: "Enter name here...",
                              required: ""
                            },
                            model: {
                              value: _vm.employeeData.office_school,
                              callback: function($$v) {
                                _vm.$set(_vm.employeeData, "office_school", $$v)
                              },
                              expression: "employeeData.office_school"
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
                            label: "Date Visited:",
                            "label-for": "dateVisited",
                            "label-cols-sm": "2",
                            "label-align-sm": "right"
                          }
                        },
                        [
                          _c("b-form-datepicker", {
                            attrs: { id: "dateVisited", locale: "en" },
                            model: {
                              value: _vm.employeeData.dateVisited,
                              callback: function($$v) {
                                _vm.$set(_vm.employeeData, "dateVisited", $$v)
                              },
                              expression: "employeeData.dateVisited"
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
                            label: "Time In:",
                            "label-for": "timeIn",
                            "label-cols-sm": "2",
                            "label-align-sm": "right"
                          }
                        },
                        [
                          _c("b-form-timepicker", {
                            attrs: { id: "timeIn", locale: "en" },
                            model: {
                              value: _vm.employeeData.timeIn,
                              callback: function($$v) {
                                _vm.$set(_vm.employeeData, "timeIn", $$v)
                              },
                              expression: "employeeData.timeIn"
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
                            label: "Time Out:",
                            "label-for": "timeOut",
                            "label-cols-sm": "2",
                            "label-align-sm": "right"
                          }
                        },
                        [
                          _c("b-form-timepicker", {
                            attrs: { id: "timeOut", locale: "en" },
                            model: {
                              value: _vm.employeeData.timeOut,
                              callback: function($$v) {
                                _vm.$set(_vm.employeeData, "timeOut", $$v)
                              },
                              expression: "employeeData.timeOut"
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
            title: "Add New Employee",
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
                      _c(
                        "b-form-group",
                        {
                          staticClass: "font-weight-700",
                          attrs: {
                            label: "Client Type:",
                            "label-for": "clientType",
                            "label-cols-sm": "2",
                            "label-align-sm": "right"
                          }
                        },
                        [
                          _c("b-form-select", {
                            attrs: {
                              id: "clientType",
                              options: _vm.drop_clientType,
                              required: ""
                            },
                            model: {
                              value: _vm.employeeData_update.clientType,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.employeeData_update,
                                  "clientType",
                                  $$v
                                )
                              },
                              expression: "employeeData_update.clientType"
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
                            label: "Professional Type:",
                            "label-for": "profType",
                            "label-cols-sm": "2",
                            "label-align-sm": "right"
                          }
                        },
                        [
                          _c("b-form-select", {
                            attrs: {
                              id: "profType",
                              options: _vm.drop_profType,
                              required: ""
                            },
                            model: {
                              value: _vm.employeeData_update.profType,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.employeeData_update,
                                  "profType",
                                  $$v
                                )
                              },
                              expression: "employeeData_update.profType"
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
                            label: "Year Level:",
                            "label-for": "yearLevel",
                            "label-cols-sm": "2",
                            "label-align-sm": "right"
                          }
                        },
                        [
                          _c("b-form-select", {
                            attrs: {
                              id: "yearLevel",
                              options: _vm.drop_yearLevel,
                              required: ""
                            },
                            model: {
                              value: _vm.employeeData_update.yearLevel,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.employeeData_update,
                                  "yearLevel",
                                  $$v
                                )
                              },
                              expression: "employeeData_update.yearLevel"
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
                            label: "School Category:",
                            "label-for": "schoolCategory",
                            "label-cols-sm": "2",
                            "label-align-sm": "right"
                          }
                        },
                        [
                          _c("b-form-select", {
                            attrs: {
                              id: "schoolCategory",
                              options: _vm.drop_schoolCategory,
                              required: ""
                            },
                            model: {
                              value: _vm.employeeData_update.schoolCategory,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.employeeData_update,
                                  "schoolCategory",
                                  $$v
                                )
                              },
                              expression: "employeeData_update.schoolCategory"
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
                            label: "Age Range:",
                            "label-for": "ageRange",
                            "label-cols-sm": "2",
                            "label-align-sm": "right"
                          }
                        },
                        [
                          _c("b-form-select", {
                            attrs: {
                              id: "ageRange",
                              options: _vm.drop_ageRange,
                              required: ""
                            },
                            model: {
                              value: _vm.employeeData_update.ageRange,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.employeeData_update,
                                  "ageRange",
                                  $$v
                                )
                              },
                              expression: "employeeData_update.ageRange"
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
                            label: "Office/School:",
                            "label-for": "office_school",
                            "label-cols-sm": "2",
                            "label-align-sm": "right"
                          }
                        },
                        [
                          _c("b-form-input", {
                            attrs: {
                              id: "office_school",
                              type: "text",
                              placeholder: "Enter name here...",
                              required: ""
                            },
                            model: {
                              value: _vm.employeeData_update.office_school,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.employeeData_update,
                                  "office_school",
                                  $$v
                                )
                              },
                              expression: "employeeData_update.office_school"
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
                            label: "Date Visited:",
                            "label-for": "dateVisited",
                            "label-cols-sm": "2",
                            "label-align-sm": "right"
                          }
                        },
                        [
                          _c("b-form-datepicker", {
                            attrs: { id: "dateVisited", locale: "en" },
                            model: {
                              value: _vm.employeeData_update.dateVisited,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.employeeData_update,
                                  "dateVisited",
                                  $$v
                                )
                              },
                              expression: "employeeData_update.dateVisited"
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
                            label: "Time In:",
                            "label-for": "timeIn",
                            "label-cols-sm": "2",
                            "label-align-sm": "right"
                          }
                        },
                        [
                          _c("b-form-timepicker", {
                            attrs: { id: "timeIn", locale: "en" },
                            model: {
                              value: _vm.employeeData_update.timeIn,
                              callback: function($$v) {
                                _vm.$set(_vm.employeeData_update, "timeIn", $$v)
                              },
                              expression: "employeeData_update.timeIn"
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
                            label: "Time Out:",
                            "label-for": "timeOut",
                            "label-cols-sm": "2",
                            "label-align-sm": "right"
                          }
                        },
                        [
                          _c("b-form-timepicker", {
                            attrs: { id: "timeOut", locale: "en" },
                            model: {
                              value: _vm.employeeData_update.timeOut,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.employeeData_update,
                                  "timeOut",
                                  $$v
                                )
                              },
                              expression: "employeeData_update.timeOut"
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
        _vm._v("Home > Library> Client")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/services/library_service.js":
/*!**************************************************!*\
  !*** ./resources/js/services/library_service.js ***!
  \**************************************************/
/*! exports provided: get_filtered_search, createAccount, loadEmployees, updateEmployeeData, deleteEmployee, loadClientRequestt, loadClientEvaluation, loadClientResearchLog, createTraining, loadTrainings, updateTrainingData, deleteTraining, createHealth, loadHealth, loadHealths, updateHealthData, deleteHealths, createResearchLog, loadResearchLog, loadResearchLogs, updateResearchLogData, deleteResearchLog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_filtered_search", function() { return get_filtered_search; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAccount", function() { return createAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadEmployees", function() { return loadEmployees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateEmployeeData", function() { return updateEmployeeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteEmployee", function() { return deleteEmployee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadClientRequestt", function() { return loadClientRequestt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadClientEvaluation", function() { return loadClientEvaluation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadClientResearchLog", function() { return loadClientResearchLog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTraining", function() { return createTraining; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadTrainings", function() { return loadTrainings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateTrainingData", function() { return updateTrainingData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteTraining", function() { return deleteTraining; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHealth", function() { return createHealth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadHealth", function() { return loadHealth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadHealths", function() { return loadHealths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateHealthData", function() { return updateHealthData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteHealths", function() { return deleteHealths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createResearchLog", function() { return createResearchLog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadResearchLog", function() { return loadResearchLog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadResearchLogs", function() { return loadResearchLogs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateResearchLogData", function() { return updateResearchLogData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteResearchLog", function() { return deleteResearchLog; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/services/http_service.js");
 //ADVANCE SEARCH

function get_filtered_search(filter_sex, filter_dateVisited, filter_clientType) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-filtered-search?filter_sex=' + filter_sex + '&filter_dateVisited=' + filter_dateVisited + '&filter_clientType=' + filter_clientType);
} // CLIENT

function createAccount(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post('/client', data);
}
function loadEmployees() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/client');
}
function updateEmployeeData(id, data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post("client/".concat(id), data);
}
function deleteEmployee(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])()["delete"]("client/".concat(id));
}
function loadClientRequestt(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("/client-requestt-data/".concat(id));
}
function loadClientEvaluation(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("/client-evaluation-data/".concat(id));
}
function loadClientResearchLog(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("/client-researchlog-data/".concat(id));
} // REQUEST

function createTraining(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post('/requestt', data);
}
function loadTrainings() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/requestt');
}
function updateTrainingData(id, data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post("requestt/".concat(id), data);
}
function deleteTraining(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])()["delete"]("requestt/".concat(id));
} // EVALUATION

function createHealth(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post('/evaluation', data);
}
function loadHealth() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/evaluation');
}
function loadHealths(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("evaluation/".concat(id));
}
function updateHealthData(id, data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post("evaluation/".concat(id), data);
}
function deleteHealths(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])()["delete"]("evaluation/".concat(id));
} // RESEARCH LOG

function createResearchLog(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post('/researchlog', data);
}
function loadResearchLog() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/researchlog');
}
function loadResearchLogs(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("researchlog/".concat(id));
}
function updateResearchLogData(id, data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post("researchlog/".concat(id), data);
}
function deleteResearchLog(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])()["delete"]("researchlog/".concat(id));
}

/***/ }),

/***/ "./resources/js/views/tblClient.vue":
/*!******************************************!*\
  !*** ./resources/js/views/tblClient.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tblClient_vue_vue_type_template_id_78b3feba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tblClient.vue?vue&type=template&id=78b3feba& */ "./resources/js/views/tblClient.vue?vue&type=template&id=78b3feba&");
/* harmony import */ var _tblClient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tblClient.vue?vue&type=script&lang=js& */ "./resources/js/views/tblClient.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _tblClient_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tblClient.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/tblClient.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _tblClient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tblClient_vue_vue_type_template_id_78b3feba___WEBPACK_IMPORTED_MODULE_0__["render"],
  _tblClient_vue_vue_type_template_id_78b3feba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/tblClient.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/tblClient.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/tblClient.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tblClient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./tblClient.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/tblClient.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tblClient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/tblClient.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/tblClient.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tblClient_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./tblClient.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/tblClient.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tblClient_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tblClient_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tblClient_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tblClient_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/tblClient.vue?vue&type=template&id=78b3feba&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/tblClient.vue?vue&type=template&id=78b3feba& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tblClient_vue_vue_type_template_id_78b3feba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./tblClient.vue?vue&type=template&id=78b3feba& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/tblClient.vue?vue&type=template&id=78b3feba&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tblClient_vue_vue_type_template_id_78b3feba___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tblClient_vue_vue_type_template_id_78b3feba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);