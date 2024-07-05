(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/tblHealthcondition.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/tblHealthcondition.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_healthandtraining_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/healthandtraining_service */ "./resources/js/services/healthandtraining_service.js");


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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'employee',
  data: function data() {
    return {
      healths: [],
      healthData: {
        employeeID: '',
        ageRange: null,
        yearCover: null,
        healthCondition: null,
        illnessType: null,
        fitStatus: null
      },
      healthData_update: {},
      // drop_ageRange: [{ text: 'Select Age Range here', value: null }, '20-29', '30-39', '40-49', '50-59', '60-65'],
      drop_ageRange: [{
        text: 'Select Age Range here',
        value: null
      }, '20', '30', '40', '50', '60'],
      radio_yearCover: [{
        text: '2019',
        value: '2019'
      }, {
        text: '2020',
        value: '2020'
      }],
      radio_healthCondition: [{
        text: 'With condition',
        value: 'With condition'
      }, {
        text: 'Without condition',
        value: 'Without condition'
      }],
      drop_illnessType: [{
        text: 'Select Illness Type here',
        value: null
      }, 'Cardio-related', 'Pulmonary/respiratory/respiratoryD', 'EENT', 'Overweight', 'Hemorrhoids'],
      drop_fitStatus: [{
        text: 'Select Fit Status here',
        value: null
      }, 'Class A - Fit to Work', 'Class B - Fit to work but needs treatment of minor ailments', 'Class D - Unfit to work'],
      drop_vaccine: [{
        text: 'Select Vaccine Status here',
        value: null
      }, 'Unvaccinated', 'Partially Vaccinated', 'Fully Vaccinated'],
      drop_booster: [{
        text: 'Select Booster Status here',
        value: null
      }, 'With 1 booster shot', 'With 2 booster shots', 'None'],
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
        key: 'employee_number',
        sortable: true,
        label: 'Employee Number'
      }, {
        key: 'name',
        label: 'Name'
      }, {
        key: 'ageRange',
        label: 'Age Range'
      }, {
        key: 'yearCover',
        label: 'Year Cover'
      }, {
        key: 'healthCondition',
        label: 'Health Condition'
      }, {
        key: 'illnessType',
        label: 'Illness Type'
      }, {
        key: 'fitStatus',
        label: 'Fit Status'
      }, {
        key: 'actions',
        label: 'Action'
      }]
    };
  },
  mounted: function mounted() {
    this.loadHealth();
  },
  methods: {
    showUpdateMdl: function showUpdateMdl(data) {
      this.healthData_update = _objectSpread({}, data);
      this.$refs.updateEmployeeModal.show();
    },
    hideUpdateMdl: function hideUpdateMdl(data) {
      this.healthData_update = _objectSpread({}, data);
      this.$refs.updateEmployeeModal.hide();
    },
    clearModal: function clearModal() {
      this.$refs.add - employee.removeData();
    },
    loadHealth: function () {
      var _loadHealth = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _services_healthandtraining_service__WEBPACK_IMPORTED_MODULE_1__["loadHealth"]();

              case 3:
                response = _context.sent;
                this.healths = response.data;
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                this.flashMessage.error({
                  message: 'Some error occured! Please try again.',
                  time: 5000
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 7]]);
      }));

      function loadHealth() {
        return _loadHealth.apply(this, arguments);
      }

      return loadHealth;
    }(),
    createHealth: function () {
      var _createHealth = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                formData = new FormData();
                formData.append('employeeID', this.healthData.employeeID);
                formData.append('ageRange', this.healthData.ageRange);
                formData.append('yearCover', this.healthData.yearCover);
                formData.append('healthCondition', this.healthData.healthCondition);
                formData.append('illnessType', this.healthData.illnessType);
                formData.append('fitStatus', this.healthData.fitStatus);
                _context2.prev = 7;
                _context2.next = 10;
                return _services_healthandtraining_service__WEBPACK_IMPORTED_MODULE_1__["createHealth"](formData);

              case 10:
                response = _context2.sent;
                console.log(response);
                this.hideEmployeeModal();
                this.flashMessage.success({
                  status: '',
                  message: 'Health condition added successfully!',
                  time: 5000
                });
                this.healthData = {
                  employeeID: '',
                  ageRange: null,
                  yearCover: null,
                  healthCondition: null,
                  illnessType: null,
                  fitStatus: null
                };
                _context2.next = 26;
                break;

              case 17:
                _context2.prev = 17;
                _context2.t0 = _context2["catch"](7);
                _context2.t1 = _context2.t0.response.status;
                _context2.next = _context2.t1 === 422 ? 22 : 24;
                break;

              case 22:
                this.errors = _context2.t0.response.data.errors;
                return _context2.abrupt("break", 26);

              case 24:
                this.flashMessage.error({
                  message: 'Some error occurred, Please try again!',
                  time: 5000
                });
                return _context2.abrupt("break", 26);

              case 26:
                this.loadHealth();
                this.clearModal();

              case 28:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[7, 17]]);
      }));

      function createHealth() {
        return _createHealth.apply(this, arguments);
      }

      return createHealth;
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
                formData.append('ageRange', this.healthData_update.ageRange);
                formData.append('yearCover', this.healthData_update.yearCover);
                formData.append('healthCondition', this.healthData_update.healthCondition);
                formData.append('illnessType', this.healthData_update.illnessType);
                formData.append('fitStatus', this.healthData_update.fitStatus);
                formData.append("_method", "put");
                _context3.next = 10;
                return _services_healthandtraining_service__WEBPACK_IMPORTED_MODULE_1__["updateHealthData"](this.healthData_update.id, formData);

              case 10:
                response = _context3.sent;
                console.log(response);
                this.flashMessage.success({
                  status: '',
                  message: 'Health condition updated successfully!',
                  time: 5000
                });
                _context3.next = 24;
                break;

              case 15:
                _context3.prev = 15;
                _context3.t0 = _context3["catch"](0);
                _context3.t1 = _context3.t0.response.status;
                _context3.next = _context3.t1 === 422 ? 20 : 22;
                break;

              case 20:
                this.errors = _context3.t0.response.data.errors;
                return _context3.abrupt("break", 24);

              case 22:
                this.flashMessage.error({
                  message: 'Some error occurred, Please try again!',
                  time: 5000
                });
                return _context3.abrupt("break", 24);

              case 24:
                this.loadHealth();
                this.hideUpdateMdl();

              case 26:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 15]]);
      }));

      function updateEmployee() {
        return _updateEmployee.apply(this, arguments);
      }

      return updateEmployee;
    }(),
    deleteEmployee: function () {
      var _deleteEmployee = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(data) {
        var health_Data, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                health_Data = _objectSpread({}, data);
                _context4.prev = 1;
                _context4.next = 4;
                return _services_healthandtraining_service__WEBPACK_IMPORTED_MODULE_1__["deleteHealths"](health_Data.id);

              case 4:
                response = _context4.sent;
                console.log(response);
                this.flashMessage.success({
                  status: '',
                  message: 'Health Condition deleted successfully!',
                  time: 5000
                });
                _context4.next = 12;
                break;

              case 9:
                _context4.prev = 9;
                _context4.t0 = _context4["catch"](1);
                this.flashMessage.error({
                  message: 'Some error occured! Please try again.',
                  time: 5000
                });

              case 12:
                this.loadHealth();

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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/tblHealthcondition.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/tblHealthcondition.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.font-weight-800{\n    font-weight: 800;\n}\n.font-weight-700{\n    font-weight: 700;\n}\n.font-weight-600{\n    font-weight: 600;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/tblHealthcondition.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/tblHealthcondition.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./tblHealthcondition.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/tblHealthcondition.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/tblHealthcondition.vue?vue&type=template&id=47db3960&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/tblHealthcondition.vue?vue&type=template&id=47db3960& ***!
  \****************************************************************************************************************************************************************************************************************/
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
      _vm._v("Health and Training")
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
              _vm._v("\n          LIST OF HEALTH CONDITIONS\n          "),
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
                          return _vm.createHealth.apply(null, arguments)
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
                                    label: "Employee ID:",
                                    "label-for": "employeeID",
                                    "label-cols-sm": "2",
                                    "label-align-sm": "right"
                                  }
                                },
                                [
                                  _c("b-form-input", {
                                    attrs: {
                                      id: "employeeID",
                                      type: "text",
                                      placeholder: "Enter Employee ID here...",
                                      required: ""
                                    },
                                    model: {
                                      value: _vm.healthData.employeeID,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.healthData,
                                          "employeeID",
                                          $$v
                                        )
                                      },
                                      expression: "healthData.employeeID"
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
                                    id: "input-group-5",
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
                                      value: _vm.healthData.ageRange,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.healthData,
                                          "ageRange",
                                          $$v
                                        )
                                      },
                                      expression: "healthData.ageRange"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("b-form-group", {
                                staticClass: "mb-0 font-weight-700",
                                attrs: {
                                  label: "Year Cover:",
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
                                          attrs: {
                                            id: "yearCover",
                                            options: _vm.radio_yearCover
                                          },
                                          model: {
                                            value: _vm.healthData.yearCover,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.healthData,
                                                "yearCover",
                                                $$v
                                              )
                                            },
                                            expression: "healthData.yearCover"
                                          }
                                        })
                                      ]
                                    }
                                  }
                                ])
                              }),
                              _vm._v(" "),
                              _c("b-form-group", {
                                staticClass: "mb-0 font-weight-700",
                                attrs: {
                                  label: "Health Condition:",
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
                                          attrs: {
                                            id: "healthCondition",
                                            options: _vm.radio_healthCondition
                                          },
                                          model: {
                                            value:
                                              _vm.healthData.healthCondition,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.healthData,
                                                "healthCondition",
                                                $$v
                                              )
                                            },
                                            expression:
                                              "healthData.healthCondition"
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
                                    id: "input-group-5",
                                    label: "Illness Type:",
                                    "label-for": "illnessType",
                                    "label-cols-sm": "2",
                                    "label-align-sm": "right"
                                  }
                                },
                                [
                                  _c("b-form-select", {
                                    attrs: {
                                      id: "illnessType",
                                      options: _vm.drop_illnessType,
                                      required: ""
                                    },
                                    model: {
                                      value: _vm.healthData.illnessType,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.healthData,
                                          "illnessType",
                                          $$v
                                        )
                                      },
                                      expression: "healthData.illnessType"
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
                                    id: "input-group-5",
                                    label: "Fit Status:",
                                    "label-for": "fitStatus",
                                    "label-cols-sm": "2",
                                    "label-align-sm": "right"
                                  }
                                },
                                [
                                  _c("b-form-select", {
                                    attrs: {
                                      id: "fitStatus",
                                      options: _vm.drop_fitStatus,
                                      required: ""
                                    },
                                    model: {
                                      value: _vm.healthData.fitStatus,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.healthData,
                                          "fitStatus",
                                          $$v
                                        )
                                      },
                                      expression: "healthData.fitStatus"
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
                                    id: "input-group-5",
                                    label: "Vaccine Status:",
                                    "label-for": "vaccineStatus",
                                    "label-cols-sm": "2",
                                    "label-align-sm": "right"
                                  }
                                },
                                [
                                  _c("b-form-select", {
                                    attrs: {
                                      id: "vaccineStatus",
                                      options: _vm.drop_vaccine,
                                      required: ""
                                    },
                                    model: {
                                      value: _vm.healthData.vaccineStatus,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.healthData,
                                          "vaccineStatus",
                                          $$v
                                        )
                                      },
                                      expression: "healthData.vaccineStatus"
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
                                    id: "input-group-5",
                                    label: "Booster Status:",
                                    "label-for": "boosterStatus",
                                    "label-cols-sm": "2",
                                    "label-align-sm": "right"
                                  }
                                },
                                [
                                  _c("b-form-select", {
                                    attrs: {
                                      id: "boosterStatus",
                                      options: _vm.drop_booster,
                                      required: ""
                                    },
                                    model: {
                                      value: _vm.healthData.boosterStatus,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.healthData,
                                          "boosterStatus",
                                          $$v
                                        )
                                      },
                                      expression: "healthData.boosterStatus"
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
                                    id: "input-group-5",
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
                                      value: _vm.healthData_update.ageRange,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.healthData_update,
                                          "ageRange",
                                          $$v
                                        )
                                      },
                                      expression: "healthData_update.ageRange"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("b-form-group", {
                                staticClass: "mb-0 font-weight-700",
                                attrs: {
                                  label: "Year Cover:",
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
                                          attrs: {
                                            id: "yearCover",
                                            options: _vm.radio_yearCover
                                          },
                                          model: {
                                            value:
                                              _vm.healthData_update.yearCover,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.healthData_update,
                                                "yearCover",
                                                $$v
                                              )
                                            },
                                            expression:
                                              "healthData_update.yearCover"
                                          }
                                        })
                                      ]
                                    }
                                  }
                                ])
                              }),
                              _vm._v(" "),
                              _c("b-form-group", {
                                staticClass: "mb-0 font-weight-700",
                                attrs: {
                                  label: "Health Condition:",
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
                                          attrs: {
                                            id: "healthCondition",
                                            options: _vm.radio_healthCondition
                                          },
                                          model: {
                                            value:
                                              _vm.healthData_update
                                                .healthCondition,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.healthData_update,
                                                "healthCondition",
                                                $$v
                                              )
                                            },
                                            expression:
                                              "healthData_update.healthCondition"
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
                                    id: "input-group-5",
                                    label: "Illness Type:",
                                    "label-for": "illnessType",
                                    "label-cols-sm": "2",
                                    "label-align-sm": "right"
                                  }
                                },
                                [
                                  _c("b-form-select", {
                                    attrs: {
                                      id: "illnessType",
                                      options: _vm.drop_illnessType,
                                      required: ""
                                    },
                                    model: {
                                      value: _vm.healthData_update.illnessType,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.healthData_update,
                                          "illnessType",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "healthData_update.illnessType"
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
                                    id: "input-group-5",
                                    label: "Fit Status:",
                                    "label-for": "fitStatus",
                                    "label-cols-sm": "2",
                                    "label-align-sm": "right"
                                  }
                                },
                                [
                                  _c("b-form-select", {
                                    attrs: {
                                      id: "fitStatus",
                                      options: _vm.drop_fitStatus,
                                      required: ""
                                    },
                                    model: {
                                      value: _vm.healthData_update.fitStatus,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.healthData_update,
                                          "fitStatus",
                                          $$v
                                        )
                                      },
                                      expression: "healthData_update.fitStatus"
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
                                    id: "input-group-5",
                                    label: "Vaccine Status:",
                                    "label-for": "vaccineStatus",
                                    "label-cols-sm": "2",
                                    "label-align-sm": "right"
                                  }
                                },
                                [
                                  _c("b-form-select", {
                                    attrs: {
                                      id: "vaccineStatus",
                                      options: _vm.drop_vaccine,
                                      required: ""
                                    },
                                    model: {
                                      value:
                                        _vm.healthData_update.vaccineStatus,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.healthData_update,
                                          "vaccineStatus",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "healthData_update.vaccineStatus"
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
                                    id: "input-group-5",
                                    label: "Booster Status:",
                                    "label-for": "boosterStatus",
                                    "label-cols-sm": "2",
                                    "label-align-sm": "right"
                                  }
                                },
                                [
                                  _c("b-form-select", {
                                    attrs: {
                                      id: "boosterStatus",
                                      options: _vm.drop_booster,
                                      required: ""
                                    },
                                    model: {
                                      value:
                                        _vm.healthData_update.boosterStatus,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.healthData_update,
                                          "boosterStatus",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "healthData_update.boosterStatus"
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
                    items: _vm.healths,
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
        _vm._v("Home > Health and Training > Health Condition ")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/tblHealthcondition.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/tblHealthcondition.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tblHealthcondition_vue_vue_type_template_id_47db3960___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tblHealthcondition.vue?vue&type=template&id=47db3960& */ "./resources/js/views/tblHealthcondition.vue?vue&type=template&id=47db3960&");
/* harmony import */ var _tblHealthcondition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tblHealthcondition.vue?vue&type=script&lang=js& */ "./resources/js/views/tblHealthcondition.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _tblHealthcondition_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tblHealthcondition.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/tblHealthcondition.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _tblHealthcondition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tblHealthcondition_vue_vue_type_template_id_47db3960___WEBPACK_IMPORTED_MODULE_0__["render"],
  _tblHealthcondition_vue_vue_type_template_id_47db3960___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/tblHealthcondition.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/tblHealthcondition.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/tblHealthcondition.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tblHealthcondition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./tblHealthcondition.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/tblHealthcondition.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tblHealthcondition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/tblHealthcondition.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/tblHealthcondition.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tblHealthcondition_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./tblHealthcondition.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/tblHealthcondition.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tblHealthcondition_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tblHealthcondition_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tblHealthcondition_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tblHealthcondition_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/tblHealthcondition.vue?vue&type=template&id=47db3960&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/tblHealthcondition.vue?vue&type=template&id=47db3960& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tblHealthcondition_vue_vue_type_template_id_47db3960___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./tblHealthcondition.vue?vue&type=template&id=47db3960& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/tblHealthcondition.vue?vue&type=template&id=47db3960&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tblHealthcondition_vue_vue_type_template_id_47db3960___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tblHealthcondition_vue_vue_type_template_id_47db3960___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);