(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/tblManuscript.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/tblManuscript.vue?vue&type=script&lang=js& ***!
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
//
//
//
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
        researcher_id: '',
        title: '',
        area: null,
        location: null,
        discipline: null,
        otherDiscipline: '',
        dateReceived: '',
        status: null,
        issueNo: ''
      },
      employeeData_update: {},
      drop_area: [{
        text: 'Select Area here',
        value: null
      }, 'Local', 'Overseas/Foreign'],
      drop_location: [{
        text: 'Select Location here',
        value: null
      }, 'Metro Manila', 'Luzon', 'Visayas', 'Mindanao', 'Overseas'],
      drop_discipline: [{
        text: 'Select Discipline here',
        value: null
      }, 'Agriculture', 'Biology', 'Chemistry', 'Computer Science', 'Earth Science', 'Engineering', 'Food Science and Technology', 'Forensics', 'Forestry', 'Mathematics', 'Medicine', 'Nutrition', 'Physics', 'Public Admin & Governance', 'Statistics', 'Social Science', 'Others'],
      drop_status: [{
        text: 'Select Status here',
        value: null
      }, 'Accepted', 'Rejected'],
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
        key: 'researcher_id',
        sortable: true,
        label: 'Researcher ID'
      }, {
        key: 'title',
        sortable: true,
        label: 'Title'
      }, {
        key: 'area',
        sortable: true,
        label: 'Area'
      }, {
        key: 'location',
        label: 'location'
      }, {
        key: 'discipline',
        sortable: true,
        label: 'Discipline'
      }, {
        key: 'otherDiscipline',
        label: 'Other Discipline'
      }, {
        key: 'dateReceived',
        label: 'Date Received'
      }, {
        key: 'status',
        label: 'Status'
      }, {
        key: 'issueNo',
        label: 'Issue No'
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
                return _services_pjs_service__WEBPACK_IMPORTED_MODULE_1__["loadManuscripts"]();

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
                formData.append('researcher_id', this.employeeData.researcher_id);
                formData.append('title', this.employeeData.title);
                formData.append('area', this.employeeData.area);
                formData.append('location', this.employeeData.location);
                formData.append('discipline', this.employeeData.discipline);
                formData.append('otherDiscipline', this.employeeData.otherDiscipline);
                formData.append('dateReceived', this.employeeData.dateReceived);
                formData.append('status', this.employeeData.status);
                formData.append('issueNo', this.employeeData.issueNo);
                _context2.prev = 10;
                _context2.next = 13;
                return _services_pjs_service__WEBPACK_IMPORTED_MODULE_1__["createManuscript"](formData);

              case 13:
                response = _context2.sent;
                console.log(response);
                this.hideEmployeeModal();
                this.flashMessage.success({
                  status: '',
                  message: 'Employee added successfully!',
                  time: 5000
                });
                this.employeeData = {
                  title: '',
                  area: null,
                  location: null,
                  discipline: null,
                  otherDiscipline: '',
                  dateReceived: '',
                  status: null,
                  issueNo: ''
                };
                _context2.next = 29;
                break;

              case 20:
                _context2.prev = 20;
                _context2.t0 = _context2["catch"](10);
                _context2.t1 = _context2.t0.response.status;
                _context2.next = _context2.t1 === 422 ? 25 : 27;
                break;

              case 25:
                this.errors = _context2.t0.response.data.errors;
                return _context2.abrupt("break", 29);

              case 27:
                this.flashMessage.error({
                  message: 'Some error occured! Please try again.',
                  time: 5000
                });
                return _context2.abrupt("break", 29);

              case 29:
                this.loadEmployees();
                this.clearModal();

              case 31:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[10, 20]]);
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
                formData.append('researcher_id', this.employeeData_update.researcher_id);
                formData.append('title', this.employeeData_update.title);
                formData.append('area', this.employeeData_update.area);
                formData.append('location', this.employeeData_update.location);
                formData.append('discipline', this.employeeData_update.discipline);
                formData.append('otherDiscipline', this.employeeData_update.otherDiscipline);
                formData.append('dateReceived', this.employeeData_update.dateReceived);
                formData.append('status', this.employeeData_update.status);
                formData.append('issueNo', this.employeeData_update.issueNo);
                formData.append("_method", "put");
                _context3.next = 14;
                return _services_pjs_service__WEBPACK_IMPORTED_MODULE_1__["updateManuscriptData"](this.employeeData_update.id, formData);

              case 14:
                response = _context3.sent;
                console.log(response);
                this.flashMessage.success({
                  status: '',
                  message: 'Employee updated successfully!',
                  time: 5000
                });
                this.loadEmployees();
                _context3.next = 29;
                break;

              case 20:
                _context3.prev = 20;
                _context3.t0 = _context3["catch"](0);
                _context3.t1 = _context3.t0.response.status;
                _context3.next = _context3.t1 === 422 ? 25 : 27;
                break;

              case 25:
                this.errors = _context3.t0.response.data.errors;
                return _context3.abrupt("break", 29);

              case 27:
                this.flashMessage.error({
                  message: 'Some error occurred, Please try again!',
                  time: 5000
                });
                return _context3.abrupt("break", 29);

              case 29:
                this.loadEmployees();
                this.hideUpdateMdl();

              case 31:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 20]]);
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
                return _services_pjs_service__WEBPACK_IMPORTED_MODULE_1__["deleteManuscript"](employee_data.id);

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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/tblManuscript.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/tblManuscript.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.font-weight-800{\n    font-weight: 800;\n}\n.font-weight-700{\n    font-weight: 700;\n}\n.font-weight-600{\n    font-weight: 600;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/tblManuscript.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/tblManuscript.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./tblManuscript.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/tblManuscript.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/tblManuscript.vue?vue&type=template&id=7c1aae56&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/tblManuscript.vue?vue&type=template&id=7c1aae56& ***!
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
                _vm._v("\n          LIST OF MANUSCRIPTS\n          "),
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
                            label: "Researcher ID:",
                            "label-for": "researcher_id",
                            "label-cols-sm": "2",
                            "label-align-sm": "right"
                          }
                        },
                        [
                          _c("b-form-input", {
                            attrs: {
                              id: "researcher_id",
                              type: "text",
                              placeholder: "Enter Researcher ID here...",
                              required: ""
                            },
                            model: {
                              value: _vm.employeeData.researcher_id,
                              callback: function($$v) {
                                _vm.$set(_vm.employeeData, "researcher_id", $$v)
                              },
                              expression: "employeeData.researcher_id"
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
                            label: "Title:",
                            "label-for": "title",
                            "label-cols-sm": "2",
                            "label-align-sm": "right"
                          }
                        },
                        [
                          _c("b-form-input", {
                            attrs: {
                              id: "title",
                              type: "text",
                              placeholder: "Enter title here...",
                              required: ""
                            },
                            model: {
                              value: _vm.employeeData.title,
                              callback: function($$v) {
                                _vm.$set(_vm.employeeData, "title", $$v)
                              },
                              expression: "employeeData.title"
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
                            label: "Area:",
                            "label-for": "area",
                            "label-cols-sm": "2",
                            "label-align-sm": "right"
                          }
                        },
                        [
                          _c("b-form-select", {
                            attrs: {
                              id: "area",
                              options: _vm.drop_area,
                              required: ""
                            },
                            model: {
                              value: _vm.employeeData.area,
                              callback: function($$v) {
                                _vm.$set(_vm.employeeData, "area", $$v)
                              },
                              expression: "employeeData.area"
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
                            label: "Discipline:",
                            "label-for": "discipline",
                            "label-cols-sm": "2",
                            "label-align-sm": "right"
                          }
                        },
                        [
                          _c("b-form-select", {
                            attrs: {
                              id: "discipline",
                              options: _vm.drop_discipline,
                              required: ""
                            },
                            model: {
                              value: _vm.employeeData.discipline,
                              callback: function($$v) {
                                _vm.$set(_vm.employeeData, "discipline", $$v)
                              },
                              expression: "employeeData.discipline"
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
                            label: "Other Discipline:",
                            "label-for": "otherDiscipline",
                            "label-cols-sm": "2",
                            "label-align-sm": "right"
                          }
                        },
                        [
                          _c("b-form-input", {
                            attrs: {
                              id: "otherDiscipline",
                              type: "text",
                              placeholder: "Enter Other Discipline here...",
                              required: ""
                            },
                            model: {
                              value: _vm.employeeData.otherDiscipline,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.employeeData,
                                  "otherDiscipline",
                                  $$v
                                )
                              },
                              expression: "employeeData.otherDiscipline"
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
                            label: "Date Received:",
                            "label-for": "dateReceived",
                            "label-cols-sm": "2",
                            "label-align-sm": "right"
                          }
                        },
                        [
                          _c("b-form-datepicker", {
                            attrs: { id: "dateReceived", locale: "en" },
                            model: {
                              value: _vm.employeeData.dateReceived,
                              callback: function($$v) {
                                _vm.$set(_vm.employeeData, "dateReceived", $$v)
                              },
                              expression: "employeeData.dateReceived"
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
                            label: "Status:",
                            "label-for": "status",
                            "label-cols-sm": "2",
                            "label-align-sm": "right"
                          }
                        },
                        [
                          _c("b-form-select", {
                            attrs: {
                              id: "status",
                              options: _vm.drop_status,
                              required: ""
                            },
                            model: {
                              value: _vm.employeeData.status,
                              callback: function($$v) {
                                _vm.$set(_vm.employeeData, "status", $$v)
                              },
                              expression: "employeeData.status"
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
                            label: "Issue No:",
                            "label-for": "issueNo",
                            "label-cols-sm": "2",
                            "label-align-sm": "right"
                          }
                        },
                        [
                          _c("b-form-input", {
                            attrs: {
                              id: "issueNo",
                              type: "text",
                              placeholder: "Enter Issue No here...",
                              required: ""
                            },
                            model: {
                              value: _vm.employeeData.issueNo,
                              callback: function($$v) {
                                _vm.$set(_vm.employeeData, "issueNo", $$v)
                              },
                              expression: "employeeData.issueNo"
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
                            label: "Researcher ID:",
                            "label-for": "researcher_id",
                            "label-cols-sm": "2",
                            "label-align-sm": "right"
                          }
                        },
                        [
                          _c("b-form-input", {
                            attrs: {
                              id: "researcher_id",
                              type: "text",
                              placeholder: "Enter Researcher ID here...",
                              required: ""
                            },
                            model: {
                              value: _vm.employeeData_update.researcher_id,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.employeeData_update,
                                  "researcher_id",
                                  $$v
                                )
                              },
                              expression: "employeeData_update.researcher_id"
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
                            label: "Title:",
                            "label-for": "title",
                            "label-cols-sm": "2",
                            "label-align-sm": "right"
                          }
                        },
                        [
                          _c("b-form-input", {
                            attrs: {
                              id: "title",
                              type: "text",
                              placeholder: "Enter title here...",
                              required: ""
                            },
                            model: {
                              value: _vm.employeeData_update.title,
                              callback: function($$v) {
                                _vm.$set(_vm.employeeData_update, "title", $$v)
                              },
                              expression: "employeeData_update.title"
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
                            label: "Area:",
                            "label-for": "area",
                            "label-cols-sm": "2",
                            "label-align-sm": "right"
                          }
                        },
                        [
                          _c("b-form-select", {
                            attrs: {
                              id: "area",
                              options: _vm.drop_area,
                              required: ""
                            },
                            model: {
                              value: _vm.employeeData_update.area,
                              callback: function($$v) {
                                _vm.$set(_vm.employeeData_update, "area", $$v)
                              },
                              expression: "employeeData_update.area"
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
                            label: "Discipline:",
                            "label-for": "discipline",
                            "label-cols-sm": "2",
                            "label-align-sm": "right"
                          }
                        },
                        [
                          _c("b-form-select", {
                            attrs: {
                              id: "discipline",
                              options: _vm.drop_discipline,
                              required: ""
                            },
                            model: {
                              value: _vm.employeeData_update.discipline,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.employeeData_update,
                                  "discipline",
                                  $$v
                                )
                              },
                              expression: "employeeData_update.discipline"
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
                            label: "Other Discipline:",
                            "label-for": "otherDiscipline",
                            "label-cols-sm": "2",
                            "label-align-sm": "right"
                          }
                        },
                        [
                          _c("b-form-input", {
                            attrs: {
                              id: "otherDiscipline",
                              type: "text",
                              placeholder: "Enter Other Discipline here...",
                              required: ""
                            },
                            model: {
                              value: _vm.employeeData_update.otherDiscipline,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.employeeData_update,
                                  "otherDiscipline",
                                  $$v
                                )
                              },
                              expression: "employeeData_update.otherDiscipline"
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
                            label: "Date Received:",
                            "label-for": "dateReceived",
                            "label-cols-sm": "2",
                            "label-align-sm": "right"
                          }
                        },
                        [
                          _c("b-form-datepicker", {
                            attrs: { id: "dateReceived", locale: "en" },
                            model: {
                              value: _vm.employeeData_update.dateReceived,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.employeeData_update,
                                  "dateReceived",
                                  $$v
                                )
                              },
                              expression: "employeeData_update.dateReceived"
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
                            label: "Status:",
                            "label-for": "status",
                            "label-cols-sm": "2",
                            "label-align-sm": "right"
                          }
                        },
                        [
                          _c("b-form-select", {
                            attrs: {
                              id: "status",
                              options: _vm.drop_status,
                              required: ""
                            },
                            model: {
                              value: _vm.employeeData_update.status,
                              callback: function($$v) {
                                _vm.$set(_vm.employeeData_update, "status", $$v)
                              },
                              expression: "employeeData_update.status"
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
                            label: "Issue No:",
                            "label-for": "issueNo",
                            "label-cols-sm": "2",
                            "label-align-sm": "right"
                          }
                        },
                        [
                          _c("b-form-input", {
                            attrs: {
                              id: "issueNo",
                              type: "text",
                              placeholder: "Enter Issue No here...",
                              required: ""
                            },
                            model: {
                              value: _vm.employeeData_update.issueNo,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.employeeData_update,
                                  "issueNo",
                                  $$v
                                )
                              },
                              expression: "employeeData_update.issueNo"
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
        _vm._v("Home > Philippine Journal of Science > Manuscript")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/tblManuscript.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/tblManuscript.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tblManuscript_vue_vue_type_template_id_7c1aae56___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tblManuscript.vue?vue&type=template&id=7c1aae56& */ "./resources/js/views/tblManuscript.vue?vue&type=template&id=7c1aae56&");
/* harmony import */ var _tblManuscript_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tblManuscript.vue?vue&type=script&lang=js& */ "./resources/js/views/tblManuscript.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _tblManuscript_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tblManuscript.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/tblManuscript.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _tblManuscript_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tblManuscript_vue_vue_type_template_id_7c1aae56___WEBPACK_IMPORTED_MODULE_0__["render"],
  _tblManuscript_vue_vue_type_template_id_7c1aae56___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/tblManuscript.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/tblManuscript.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/tblManuscript.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tblManuscript_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./tblManuscript.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/tblManuscript.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tblManuscript_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/tblManuscript.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/tblManuscript.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tblManuscript_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./tblManuscript.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/tblManuscript.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tblManuscript_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tblManuscript_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tblManuscript_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tblManuscript_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/tblManuscript.vue?vue&type=template&id=7c1aae56&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/tblManuscript.vue?vue&type=template&id=7c1aae56& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tblManuscript_vue_vue_type_template_id_7c1aae56___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./tblManuscript.vue?vue&type=template&id=7c1aae56& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/tblManuscript.vue?vue&type=template&id=7c1aae56&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tblManuscript_vue_vue_type_template_id_7c1aae56___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tblManuscript_vue_vue_type_template_id_7c1aae56___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);