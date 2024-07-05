(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[42],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ScienceJourno.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ScienceJourno.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_sja_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/sja_service */ "./resources/js/services/sja_service.js");


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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'employee',
  data: function data() {
    return {
      employees: [],
      employees_healthData: [],
      employees_trainingData: [],
      employeeData: {
        name: '',
        sex: null,
        age: '',
        designation: '',
        nature: null,
        level: null,
        division: null
      },
      radio_sex: [{
        text: 'Male',
        value: 'Male'
      }, {
        text: 'Female',
        value: 'Female'
      }],
      drop_status: [{
        text: 'Select Status here',
        value: null
      }, 'Requested', 'Initiated'],
      drop_participantType: [{
        text: 'Select Paticipant Type here',
        value: null
      }, 'Student', 'Professional'],
      drop_PWD: [{
        text: 'Select here',
        value: null
      }, 'Yes', 'No'],
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
        label: 'Event ID'
      }, {
        key: 'topic',
        label: 'Topic'
      }, {
        key: 'title',
        label: 'Title'
      }, {
        key: 'eventDate',
        label: 'Event Date'
      }, {
        key: 'eventPlace',
        label: 'Event Place'
      }, {
        key: 'eventHost',
        label: 'Event Host'
      }, {
        key: 'targetParticipants',
        label: 'Target Participants'
      }, {
        key: 'requested_initiated',
        label: 'Status'
      }, {
        key: 'actions',
        label: 'Action'
      }],
      speakerFields: [{
        key: 'name',
        label: 'Name'
      }, {
        key: 'sex',
        label: 'Sex'
      }, {
        key: 'affiliation',
        label: 'Affiliation'
      }, {
        key: 'designation',
        label: 'Designation'
      }],
      participantsFields: [{
        key: 'name',
        label: 'Name'
      }, {
        key: 'sex',
        label: 'Sex'
      }, {
        key: 'participantType',
        label: 'Participant Type'
      }, {
        key: 'affiliation',
        label: 'Affiliation'
      }, {
        key: 'pwd',
        label: 'PWD'
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
                return _services_sja_service__WEBPACK_IMPORTED_MODULE_1__["loadEmployees"]();

              case 3:
                response = _context.sent;
                this.employees = response.data.data;
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                this.flashMessage.error({
                  message: 'Some error occured! Please refresh.',
                  time: 5000
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 7]]);
      }));

      function loadEmployees() {
        return _loadEmployees.apply(this, arguments);
      }

      return loadEmployees;
    }(),
    loadEmployeeHealthAndTraining: function () {
      var _loadEmployeeHealthAndTraining = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(data) {
        var employees_tData, employees_hData, training_response, health_response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.$refs['htData'].show();
                employees_tData = _objectSpread({}, data);
                employees_hData = _objectSpread({}, data);
                _context2.prev = 3;
                _context2.next = 6;
                return _services_sja_service__WEBPACK_IMPORTED_MODULE_1__["loadEmployeeTraining"](employees_tData.id);

              case 6:
                training_response = _context2.sent;
                _context2.next = 9;
                return _services_sja_service__WEBPACK_IMPORTED_MODULE_1__["loadEmployeeHealth"](employees_hData.id);

              case 9:
                health_response = _context2.sent;
                console.log(training_response);
                console.log(health_response);
                this.employees_trainingData = training_response.data;
                this.employees_healthData = health_response.data;
                _context2.next = 19;
                break;

              case 16:
                _context2.prev = 16;
                _context2.t0 = _context2["catch"](3);
                this.flashMessage.error({
                  message: 'Some error occured! Please refresh.',
                  time: 5000
                });

              case 19:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[3, 16]]);
      }));

      function loadEmployeeHealthAndTraining(_x) {
        return _loadEmployeeHealthAndTraining.apply(this, arguments);
      }

      return loadEmployeeHealthAndTraining;
    }(),
    createEmployee: function () {
      var _createEmployee = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                formData = new FormData();
                formData.append('name', this.employeeData.name);
                formData.append('sex', this.employeeData.sex);
                formData.append('age', this.employeeData.age);
                formData.append('designation', this.employeeData.designation);
                formData.append('nature', this.employeeData.nature);
                formData.append('level', this.employeeData.level);
                formData.append('division', this.employeeData.division);
                _context3.prev = 8;
                _context3.next = 11;
                return _services_sja_service__WEBPACK_IMPORTED_MODULE_1__["createAccount"](formData);

              case 11:
                response = _context3.sent;
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
                  age: '',
                  designation: '',
                  nature: null,
                  level: null,
                  division: null
                };
                _context3.next = 27;
                break;

              case 18:
                _context3.prev = 18;
                _context3.t0 = _context3["catch"](8);
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

              case 28:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[8, 18]]);
      }));

      function createEmployee() {
        return _createEmployee.apply(this, arguments);
      }

      return createEmployee;
    }(),
    deleteEmployee: function () {
      var _deleteEmployee = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(employee) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (window.confirm("Are you sure you want to delete ".concat(employee.name))) {
                  _context4.next = 2;
                  break;
                }

                return _context4.abrupt("return");

              case 2:
                _context4.prev = 2;
                _context4.next = 5;
                return _services_sja_service__WEBPACK_IMPORTED_MODULE_1__["deleteEmployee"](employee.id);

              case 5:
                this.employees = this.employees.filter(function (obj) {
                  return obj.id != employee.id;
                });
                this.flashMessage.success({
                  message: 'Account deleted succesfully!',
                  time: 5000
                });
                _context4.next = 12;
                break;

              case 9:
                _context4.prev = 9;
                _context4.t0 = _context4["catch"](2);
                this.flashMessage.error({
                  message: 'Some error occured! Please refresh.',
                  time: 5000
                });

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[2, 9]]);
      }));

      function deleteEmployee(_x2) {
        return _deleteEmployee.apply(this, arguments);
      }

      return deleteEmployee;
    }(),
    hideEmployeeModal: function hideEmployeeModal() {
      this.$refs['htData'].hide();
    },
    showEmployeeModal: function showEmployeeModal() {
      this.$refs['htData'].show();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ScienceJourno.vue?vue&type=template&id=8be1ad50&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ScienceJourno.vue?vue&type=template&id=8be1ad50& ***!
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
  return _c("div", { staticClass: "container-fluid" }, [
    _c("h1", { staticClass: "mt-4 stii-font-color-red" }, [
      _vm._v("Science Journo Ako")
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
              _vm._v("\n          LIST OF DATA\n          "),
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
                      _c("b-tab", { attrs: { title: "Speaker" } }, [
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
                                    items: _vm.employees_trainingData,
                                    fields: _vm.speakerFields,
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
                      _c("b-tab", { attrs: { title: "Participants" } }, [
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
                                    items: _vm.employees_healthData,
                                    fields: _vm.participantsFields,
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
                                return _vm.filterTraining.apply(null, arguments)
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
                              [_vm._v("Select Year:")]
                            ),
                            _vm._v(" "),
                            _c("b-form-datepicker", {
                              staticClass: "mr-sm-4",
                              attrs: { id: "dateVisited", locale: "en" },
                              model: {
                                value: _vm.employeeData.dateVisited,
                                callback: function($$v) {
                                  _vm.$set(_vm.employeeData, "dateVisited", $$v)
                                },
                                expression: "employeeData.dateVisited"
                              }
                            }),
                            _vm._v(" "),
                            _c("b-button", { attrs: { variant: "primary" } }, [
                              _vm._v("Search")
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
                            [_vm._v("View Speaker and Participants")]
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
        _vm._v("Home > Science Journo Ako")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/services/http_service.js":
/*!***********************************************!*\
  !*** ./resources/js/services/http_service.js ***!
  \***********************************************/
/*! exports provided: http, httpFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "http", function() { return http; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpFile", function() { return httpFile; });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store */ "./resources/js/store.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function http() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
    baseURL: _store__WEBPACK_IMPORTED_MODULE_0__["default"].state.apiURL
  });
}
function httpFile() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
    baseURL: _store__WEBPACK_IMPORTED_MODULE_0__["default"].state.apiURL,
    header: {
      'Content-Type': 'multipart/form-date'
    }
  });
}

/***/ }),

/***/ "./resources/js/services/sja_service.js":
/*!**********************************************!*\
  !*** ./resources/js/services/sja_service.js ***!
  \**********************************************/
/*! exports provided: createAccount, loadEmployees, updateEmployeeData, deleteEmployee, loadEmployeeTraining, loadEmployeeHealth, createTraining, loadTrainings, updateTrainingData, deleteTraining, createHealth, loadHealth, updateHealthData, deleteHealths */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAccount", function() { return createAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadEmployees", function() { return loadEmployees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateEmployeeData", function() { return updateEmployeeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteEmployee", function() { return deleteEmployee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadEmployeeTraining", function() { return loadEmployeeTraining; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadEmployeeHealth", function() { return loadEmployeeHealth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTraining", function() { return createTraining; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadTrainings", function() { return loadTrainings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateTrainingData", function() { return updateTrainingData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteTraining", function() { return deleteTraining; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHealth", function() { return createHealth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadHealth", function() { return loadHealth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateHealthData", function() { return updateHealthData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteHealths", function() { return deleteHealths; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/services/http_service.js");
 // EVENT

function createAccount(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post('/event', data);
}
function loadEmployees() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/event');
}
function updateEmployeeData(id, data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post("event/".concat(id), data);
}
function deleteEmployee(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])()["delete"]("event/".concat(id));
}
function loadEmployeeTraining(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("/event-speaker-data/".concat(id));
}
function loadEmployeeHealth(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("/event-participants-data/".concat(id));
} // SPEAKER

function createTraining(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post('/speaker', data);
}
function loadTrainings() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/speaker');
}
function updateTrainingData(id, data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post("speaker/".concat(id), data);
}
function deleteTraining(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])()["delete"]("speaker/".concat(id));
} // PARTICIPANTS

function createHealth(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post('/participants', data);
}
function loadHealth() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/participants');
} // export function loadHealths(id){
//     return http().get(`participants/${id}`);
// }

function updateHealthData(id, data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post("participants/".concat(id), data);
}
function deleteHealths(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])()["delete"]("participants/".concat(id));
}

/***/ }),

/***/ "./resources/js/store.js":
/*!*******************************!*\
  !*** ./resources/js/store.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vuex__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (new vuex__WEBPACK_IMPORTED_MODULE_1__["default"].Store({
  state: {
    apiURL: 'http://127.0.0.1:8000/api',
    serverPath: 'http://127.0.0.1:8000'
  },
  mutations: {},
  actions: {}
}));

/***/ }),

/***/ "./resources/js/views/ScienceJourno.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/ScienceJourno.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ScienceJourno_vue_vue_type_template_id_8be1ad50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScienceJourno.vue?vue&type=template&id=8be1ad50& */ "./resources/js/views/ScienceJourno.vue?vue&type=template&id=8be1ad50&");
/* harmony import */ var _ScienceJourno_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScienceJourno.vue?vue&type=script&lang=js& */ "./resources/js/views/ScienceJourno.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ScienceJourno_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ScienceJourno_vue_vue_type_template_id_8be1ad50___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ScienceJourno_vue_vue_type_template_id_8be1ad50___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/ScienceJourno.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/ScienceJourno.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/ScienceJourno.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScienceJourno_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ScienceJourno.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ScienceJourno.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScienceJourno_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/ScienceJourno.vue?vue&type=template&id=8be1ad50&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/ScienceJourno.vue?vue&type=template&id=8be1ad50& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ScienceJourno_vue_vue_type_template_id_8be1ad50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ScienceJourno.vue?vue&type=template&id=8be1ad50& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ScienceJourno.vue?vue&type=template&id=8be1ad50&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ScienceJourno_vue_vue_type_template_id_8be1ad50___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ScienceJourno_vue_vue_type_template_id_8be1ad50___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);