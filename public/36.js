(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/PJS.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/PJS.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************/
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
      }],
      trainingFields: [// { key: 'researcher_id', sortable: true, label: 'Researcher ID'},
      {
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
                return _services_pjs_service__WEBPACK_IMPORTED_MODULE_1__["loadEmployees"]();

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
        var employees_tData, training_response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.$refs['htData'].show();
                employees_tData = _objectSpread({}, data);
                _context2.prev = 2;
                _context2.next = 5;
                return _services_pjs_service__WEBPACK_IMPORTED_MODULE_1__["loadEmployeeManuscript"](employees_tData.id);

              case 5:
                training_response = _context2.sent;
                console.log(training_response);
                this.employees_trainingData = training_response.data;
                _context2.next = 13;
                break;

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](2);
                this.flashMessage.error({
                  message: 'Some error occured! Please refresh.',
                  time: 5000
                });

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[2, 10]]);
      }));

      function loadEmployeeHealthAndTraining(_x) {
        return _loadEmployeeHealthAndTraining.apply(this, arguments);
      }

      return loadEmployeeHealthAndTraining;
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/PJS.vue?vue&type=template&id=e3931c2c&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/PJS.vue?vue&type=template&id=e3931c2c& ***!
  \*************************************************************************************************************************************************************************************************/
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
              _vm._v("\n          LIST OF DATA\n          "),
              _c(
                "b-modal",
                {
                  ref: "htData",
                  attrs: {
                    id: "htData",
                    title: "Researcher's Data",
                    "hide-footer": ""
                  }
                },
                [
                  _c(
                    "b-tabs",
                    { attrs: { card: "" } },
                    [
                      _c("b-tab", { attrs: { title: "Manuscripts" } }, [
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
                                    fields: _vm.trainingFields,
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
                      { attrs: { title: "Advance Search" } },
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
                              [_vm._v("Select:")]
                            ),
                            _vm._v(" "),
                            _c("b-form-select", {
                              staticClass: "mr-sm-4",
                              attrs: {
                                id: "inline-form-custom-select-pref",
                                "label-cols-sm": "4",
                                "label-cols-lg": "3",
                                "content-cols-sm": "",
                                "content-cols-lg": "7",
                                options: _vm.drop_trainingType
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "label",
                              {
                                staticClass: "mr-sm-2 font-weight-700",
                                attrs: { for: "inline-form-custom-select-pref" }
                              },
                              [_vm._v("Select:")]
                            ),
                            _vm._v(" "),
                            _c("b-form-select", {
                              staticClass: "mr-sm-4",
                              attrs: {
                                id: "inline-form-custom-select-pref",
                                "label-cols-sm": "4",
                                "label-cols-lg": "3",
                                "content-cols-sm": "",
                                "content-cols-lg": "7",
                                options: _vm.drop_trainingTopic
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
                            [_vm._v("View Manuscripts")]
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
        _vm._v("Home > Philippine Journal of Science")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/services/pjs_service.js":
/*!**********************************************!*\
  !*** ./resources/js/services/pjs_service.js ***!
  \**********************************************/
/*! exports provided: createAccount, loadEmployees, updateEmployeeData, deleteEmployee, loadEmployeeManuscript, createManuscript, loadManuscripts, updateManuscriptData, deleteManuscript */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAccount", function() { return createAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadEmployees", function() { return loadEmployees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateEmployeeData", function() { return updateEmployeeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteEmployee", function() { return deleteEmployee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadEmployeeManuscript", function() { return loadEmployeeManuscript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createManuscript", function() { return createManuscript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadManuscripts", function() { return loadManuscripts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateManuscriptData", function() { return updateManuscriptData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteManuscript", function() { return deleteManuscript; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/services/http_service.js");
 // RESEARCHER

function createAccount(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post('/researchers', data);
}
function loadEmployees() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/researchers');
}
function updateEmployeeData(id, data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post("researchers/".concat(id), data);
}
function deleteEmployee(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])()["delete"]("researchers/".concat(id));
}
function loadEmployeeManuscript(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("/researcher-manuscript-data/".concat(id));
} // MANUSCRIPT

function createManuscript(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post('/manuscript', data);
}
function loadManuscripts() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/manuscript');
}
function updateManuscriptData(id, data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post("manuscript/".concat(id), data);
}
function deleteManuscript(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])()["delete"]("manuscript/".concat(id));
}

/***/ }),

/***/ "./resources/js/views/PJS.vue":
/*!************************************!*\
  !*** ./resources/js/views/PJS.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PJS_vue_vue_type_template_id_e3931c2c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PJS.vue?vue&type=template&id=e3931c2c& */ "./resources/js/views/PJS.vue?vue&type=template&id=e3931c2c&");
/* harmony import */ var _PJS_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PJS.vue?vue&type=script&lang=js& */ "./resources/js/views/PJS.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PJS_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PJS_vue_vue_type_template_id_e3931c2c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PJS_vue_vue_type_template_id_e3931c2c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/PJS.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/PJS.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./resources/js/views/PJS.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PJS_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./PJS.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/PJS.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PJS_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/PJS.vue?vue&type=template&id=e3931c2c&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/PJS.vue?vue&type=template&id=e3931c2c& ***!
  \*******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PJS_vue_vue_type_template_id_e3931c2c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./PJS.vue?vue&type=template&id=e3931c2c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/PJS.vue?vue&type=template&id=e3931c2c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PJS_vue_vue_type_template_id_e3931c2c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PJS_vue_vue_type_template_id_e3931c2c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);