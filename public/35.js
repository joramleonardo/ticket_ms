(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Library.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Library.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "employee",
  data: function data() {
    return {
      employees: [],
      // employees_healthData: [],
      // employees_trainingData: [],
      employees_data: [],
      employees_clientData: [],
      employees_requesttData: [],
      employees_evaluationData: [],
      employees_researchlogData: [],
      employeeData: {
        name: "",
        sex: null,
        age: "",
        designation: "",
        nature: null,
        level: null,
        division: null
      },
      drop_sex: [{
        text: 'Select Sex here',
        value: null
      }, 'Female', 'Male'],
      radio_sex: [{
        text: "Male",
        value: "Male"
      }, {
        text: "Female",
        value: "Female"
      }],
      drop_nature: [{
        text: "Select Nature here",
        value: null
      }, "Permanent", "COS"],
      drop_level: [{
        text: "Select Level here",
        value: null
      }, "Executive", "Middle Manager", "Staff"],
      drop_division: [{
        text: "Select Division here",
        value: null
      }, "CRPD", "IRAD", "FAD", "OD-MISPS"],
      drop_clientType: [{
        text: 'Select Client Type here',
        value: null
      }, 'Student', 'Professional'],
      errors: "",
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      filterOn: [],
      filter: null,
      sortDirection: "asc",
      sortBy: "id",
      sortDesc: false,
      fields: [{
        key: "id",
        sortable: true,
        label: "Client ID"
      }, {
        key: "name",
        sortable: true,
        label: "Name"
      }, {
        key: "clientType",
        sortable: true,
        label: "Client Type"
      }, {
        key: "profType",
        sortable: true,
        label: "Professional Type"
      }, {
        key: "yearLevel",
        sortable: true,
        label: "Yeal Level"
      }, {
        key: "schoolCategory",
        sortable: true,
        label: "School Category"
      }, {
        key: "sex",
        sortable: true,
        label: "Sex"
      }, {
        key: "ageRange",
        label: "Age"
      }, {
        key: "office_school",
        label: "Office/School"
      }, {
        key: "dateVisited",
        label: "Date Visited"
      }, {
        key: "timeIn",
        label: "Time In"
      }, {
        key: "timeOut",
        label: "Time Out"
      }, {
        key: "actions",
        label: "Action"
      }],
      requestFields: [{
        key: "transactionDate",
        label: "Transaction Date"
      }, {
        key: "status",
        label: "Status"
      }, {
        key: "callNumber",
        label: "Call Number"
      }, {
        key: "source",
        label: "Source"
      }, {
        key: "title",
        label: "Title"
      }, {
        key: "volIssueNo",
        label: "Vol Issue No"
      }, {
        key: "numPages",
        label: "Num Pages"
      }, {
        key: "timeIssued",
        label: "Time Issued"
      }, {
        key: "timeReceived",
        label: "Time Received"
      }, {
        key: "timeReturned",
        label: "Time Returned"
      }, {
        key: "remarks",
        label: "Remarks"
      }, {
        key: "assistedBy",
        label: "Assisted By"
      }],
      evaluationFields: [{
        key: "transactionDate",
        label: "Transaction Date"
      }, {
        key: "eval_1",
        label: "Relevance of the collection to the information needs"
      }, {
        key: "eval_2",
        label: "Promptness and immediate attention of staff"
      }, {
        key: "eval_3",
        label: "Knowledgeable and competent staff"
      }, {
        key: "eval_4",
        label: "Courteousness and approachability of staff"
      }, {
        key: "materialNotFound",
        label: "Material Not Found"
      }, {
        key: "suggestions",
        label: "Suggestions / Recommendations"
      }],
      researchLogFields: [{
        key: "transactionDate",
        label: "Transaction Date"
      }, {
        key: "subjectResearch",
        label: "Subject Research"
      }]
    };
  },
  mounted: function mounted() {
    this.loadEmployees();
  },
  methods: {
    showMdl: function showMdl(data) {
      this.healthData_update = _objectSpread({}, data);
      this.$refs.updateEmployeeModal.show();
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
    loadEmployeeHealthAndTraining: function () {
      var _loadEmployeeHealthAndTraining = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(data) {
        var employees_requestt_data, employees_evaluation_data, employees_researchLog_data, requestt_response, evaluation_response, researchLog_response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.$refs["htData"].show();
                employees_requestt_data = _objectSpread({}, data);
                employees_evaluation_data = _objectSpread({}, data);
                employees_researchLog_data = _objectSpread({}, data);
                _context2.prev = 4;
                _context2.next = 7;
                return _services_library_service__WEBPACK_IMPORTED_MODULE_1__["loadClientRequestt"](employees_requestt_data.id);

              case 7:
                requestt_response = _context2.sent;
                _context2.next = 10;
                return _services_library_service__WEBPACK_IMPORTED_MODULE_1__["loadClientEvaluation"](employees_evaluation_data.id);

              case 10:
                evaluation_response = _context2.sent;
                _context2.next = 13;
                return _services_library_service__WEBPACK_IMPORTED_MODULE_1__["loadClientResearchLog"](employees_researchLog_data.id);

              case 13:
                researchLog_response = _context2.sent;
                console.log(requestt_response);
                console.log(evaluation_response);
                console.log(researchLog_response);
                this.employees_requesttData = requestt_response.data;
                this.employees_evaluationData = evaluation_response.data;
                this.employees_researchlogData = researchLog_response.data;
                _context2.next = 25;
                break;

              case 22:
                _context2.prev = 22;
                _context2.t0 = _context2["catch"](4);
                this.flashMessage.error({
                  message: "Some error occured! Please refresh.",
                  time: 5000
                });

              case 25:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[4, 22]]);
      }));

      function loadEmployeeHealthAndTraining(_x) {
        return _loadEmployeeHealthAndTraining.apply(this, arguments);
      }

      return loadEmployeeHealthAndTraining;
    }(),
    deleteEmployee: function () {
      var _deleteEmployee = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(employee) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (window.confirm("Are you sure you want to delete ".concat(employee.name))) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return");

              case 2:
                _context3.prev = 2;
                _context3.next = 5;
                return _services_library_service__WEBPACK_IMPORTED_MODULE_1__["deleteEmployee"](employee.id);

              case 5:
                this.employees = this.employees.filter(function (obj) {
                  return obj.id != employee.id;
                });
                this.flashMessage.success({
                  message: "Account deleted succesfully!",
                  time: 5000
                });
                _context3.next = 12;
                break;

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](2);
                this.flashMessage.error({
                  message: "Some error occured! Please refresh.",
                  time: 5000
                });

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[2, 9]]);
      }));

      function deleteEmployee(_x2) {
        return _deleteEmployee.apply(this, arguments);
      }

      return deleteEmployee;
    }(),
    createEmployee: function () {
      var _createEmployee = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                formData = new FormData();
                formData.append("name", this.employeeData.name);
                formData.append("sex", this.employeeData.sex);
                formData.append("age", this.employeeData.age);
                formData.append("designation", this.employeeData.designation);
                formData.append("nature", this.employeeData.nature);
                formData.append("level", this.employeeData.level);
                formData.append("division", this.employeeData.division);
                _context4.prev = 8;
                _context4.next = 11;
                return _services_library_service__WEBPACK_IMPORTED_MODULE_1__["createAccount"](formData);

              case 11:
                response = _context4.sent;
                console.log(response);
                this.hideEmployeeModal();
                this.flashMessage.success({
                  status: "",
                  message: "Employee added successfully!",
                  time: 5000
                });
                this.employeeData = {
                  name: "",
                  sex: null,
                  age: "",
                  designation: "",
                  nature: null,
                  level: null,
                  division: null
                };
                _context4.next = 27;
                break;

              case 18:
                _context4.prev = 18;
                _context4.t0 = _context4["catch"](8);
                _context4.t1 = _context4.t0.response.status;
                _context4.next = _context4.t1 === 422 ? 23 : 25;
                break;

              case 23:
                this.errors = _context4.t0.response.data.errors;
                return _context4.abrupt("break", 27);

              case 25:
                this.flashMessage.error({
                  message: "Some error occurred, Please try again!",
                  time: 5000
                });
                return _context4.abrupt("break", 27);

              case 27:
                this.loadEmployees();

              case 28:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[8, 18]]);
      }));

      function createEmployee() {
        return _createEmployee.apply(this, arguments);
      }

      return createEmployee;
    }(),
    filterSearch: function () {
      var _filterSearch = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var filter_sex, filter_dateVisited, filter_clientType, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                // let formData = new FormData();
                filter_sex = this.employees_data.sex;
                filter_dateVisited = this.employees_data.dateVisited;
                filter_clientType = this.employees_data.clientType;
                _context5.next = 6;
                return _services_library_service__WEBPACK_IMPORTED_MODULE_1__["get_filtered_search"](filter_sex, filter_dateVisited, filter_clientType);

              case 6:
                response = _context5.sent;
                console.log(response);
                this.employees = response.data;
                this.totalRows = this.employees.data.length;
                this.flashMessage.success({
                  status: '',
                  message: 'Employee updated successfully!',
                  time: 5000
                });
                _context5.next = 22;
                break;

              case 13:
                _context5.prev = 13;
                _context5.t0 = _context5["catch"](0);
                _context5.t1 = _context5.t0.response.status;
                _context5.next = _context5.t1 === 422 ? 18 : 20;
                break;

              case 18:
                this.errors = _context5.t0.response.data.errors;
                return _context5.abrupt("break", 22);

              case 20:
                this.flashMessage.error({
                  message: "Some error occurred, Please try again!",
                  time: 5000
                });
                return _context5.abrupt("break", 22);

              case 22:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 13]]);
      }));

      function filterSearch() {
        return _filterSearch.apply(this, arguments);
      }

      return filterSearch;
    }(),
    clearFilters: function clearFilters() {
      this.employees_data.sex = '';
      this.employees_data.dateVisited = '';
      this.employees_data.clientType = '';
      this.loadEmployees();
    },
    hideEmployeeModal: function hideEmployeeModal() {
      this.$refs["htData"].hide();
    },
    showEmployeeModal: function showEmployeeModal() {
      this.$refs["htData"].show();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Library.vue?vue&type=template&id=126a3928&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Library.vue?vue&type=template&id=126a3928& ***!
  \*****************************************************************************************************************************************************************************************************/
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
              _vm._v(
                "\n                    LIST OF DATA\n                    "
              ),
              _c(
                "b-modal",
                {
                  ref: "htData",
                  attrs: {
                    id: "htData",
                    title: "Add New Employee",
                    "hide-footer": ""
                  }
                },
                [
                  _c(
                    "b-tabs",
                    { attrs: { card: "" } },
                    [
                      _c("b-tab", { attrs: { title: "Requests" } }, [
                        _c(
                          "div",
                          { staticClass: "card-body table-responsive p-4" },
                          [
                            _c(
                              "div",
                              [
                                _c("b-table", {
                                  attrs: {
                                    striped: "",
                                    hover: "",
                                    items: _vm.employees_requesttData,
                                    fields: _vm.requestFields,
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
                                  }
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
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("b-tab", { attrs: { title: "Evaluation" } }, [
                        _c(
                          "div",
                          { staticClass: "card-body table-responsive p-4" },
                          [
                            _c(
                              "div",
                              [
                                _c("b-table", {
                                  attrs: {
                                    striped: "",
                                    hover: "",
                                    items: _vm.employees_evaluationData,
                                    fields: _vm.evaluationFields,
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
                                  }
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
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("b-tab", { attrs: { title: "Research Log" } }, [
                        _c(
                          "div",
                          { staticClass: "card-body table-responsive p-4" },
                          [
                            _c(
                              "div",
                              [
                                _c("b-table", {
                                  attrs: {
                                    striped: "",
                                    hover: "",
                                    items: _vm.employees_researchlogData,
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
                                  }
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
                          ]
                        )
                      ])
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
                _c(
                  "b-tabs",
                  { attrs: { card: "" } },
                  [
                    _c(
                      "b-tab",
                      { attrs: { title: "Advanced Search" } },
                      [
                        _c(
                          "b-form",
                          {
                            attrs: { inline: "" },
                            on: {
                              submit: function($event) {
                                $event.preventDefault()
                                return _vm.filterSearch.apply(null, arguments)
                              }
                            }
                          },
                          [
                            _c(
                              "label",
                              {
                                staticClass: "mr-sm-2 font-weight-700",
                                attrs: { for: "inline-form-custom-select-pref" }
                              },
                              [_vm._v("Sex:")]
                            ),
                            _vm._v(" "),
                            _c("b-form-select", {
                              staticClass: "mr-sm-4",
                              attrs: {
                                "label-cols-sm": "4",
                                "label-cols-lg": "3",
                                "content-cols-sm": "",
                                "content-cols-lg": "7",
                                options: _vm.drop_sex,
                                id: "sex"
                              },
                              model: {
                                value: _vm.employees_data.sex,
                                callback: function($$v) {
                                  _vm.$set(_vm.employees_data, "sex", $$v)
                                },
                                expression: "employees_data.sex"
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "label",
                              {
                                staticClass: "mr-sm-2 font-weight-700",
                                attrs: { for: "inline-form-custom-select-pref" }
                              },
                              [_vm._v("Date Visited:")]
                            ),
                            _vm._v(" "),
                            _c("b-form-datepicker", {
                              staticClass: "mr-sm-4",
                              attrs: {
                                id: "dateVisited",
                                locale: "en",
                                "date-format-options": {
                                  year: "numeric",
                                  month: "short",
                                  day: "2-digit"
                                }
                              },
                              model: {
                                value: _vm.employees_data.dateVisited,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.employees_data,
                                    "dateVisited",
                                    $$v
                                  )
                                },
                                expression: "employees_data.dateVisited"
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "label",
                              {
                                staticClass: "mr-sm-2 font-weight-700",
                                attrs: { for: "inline-form-custom-select-pref" }
                              },
                              [_vm._v("Client Type:")]
                            ),
                            _vm._v(" "),
                            _c("b-form-select", {
                              staticClass: "mr-sm-4",
                              attrs: {
                                "label-cols-sm": "4",
                                "label-cols-lg": "3",
                                "content-cols-sm": "",
                                "content-cols-lg": "7",
                                options: _vm.drop_clientType,
                                id: "clientType"
                              },
                              model: {
                                value: _vm.employees_data.clientType,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.employees_data,
                                    "clientType",
                                    $$v
                                  )
                                },
                                expression: "employees_data.clientType"
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              {
                                staticClass: "mr-sm-2 jkl-btn-search",
                                attrs: { variant: "primary", type: "submit" }
                              },
                              [_vm._v("Search")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              {
                                staticClass: "jkl-btn-clear",
                                attrs: { variant: "danger" },
                                on: { click: _vm.clearFilters }
                              },
                              [_vm._v("Clear")]
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
                              staticClass: "mr-1 jkl-btn-view",
                              attrs: { size: "sm" },
                              on: {
                                click: function($event) {
                                  return _vm.loadEmployeeHealthAndTraining(
                                    row.item
                                  )
                                }
                              }
                            },
                            [_vm._v("View More Data")]
                          )
                        ]
                      }
                    }
                  ])
                }),
                _vm._v("\n\n                        Total Rows: "),
                _c("b", [_vm._v(_vm._s(_vm.totalRows))])
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
        _vm._v("Home > Library")
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

/***/ "./resources/js/views/Library.vue":
/*!****************************************!*\
  !*** ./resources/js/views/Library.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Library_vue_vue_type_template_id_126a3928___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Library.vue?vue&type=template&id=126a3928& */ "./resources/js/views/Library.vue?vue&type=template&id=126a3928&");
/* harmony import */ var _Library_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Library.vue?vue&type=script&lang=js& */ "./resources/js/views/Library.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Library_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Library_vue_vue_type_template_id_126a3928___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Library_vue_vue_type_template_id_126a3928___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Library.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Library.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/views/Library.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Library_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Library.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Library.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Library_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Library.vue?vue&type=template&id=126a3928&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/Library.vue?vue&type=template&id=126a3928& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Library_vue_vue_type_template_id_126a3928___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Library.vue?vue&type=template&id=126a3928& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Library.vue?vue&type=template&id=126a3928&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Library_vue_vue_type_template_id_126a3928___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Library_vue_vue_type_template_id_126a3928___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);