(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/tblTraining.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/tblTraining.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        employeeID: '',
        trainingType: null,
        trainingTopic: null,
        trainingTitle: '',
        startDate: '',
        endDate: '',
        noHours: '',
        trainingProvider: '',
        trainor: null,
        fundingSource: null
      },
      trainingsData_update: {},
      // drop_employeeID: [{ text: 'In-house', value: 'In-house' },{ text: 'Contracted', value: 'Contracted'}],
      drop_trainingType: [{
        text: 'Select Training Type here',
        value: null
      }, 'Managerial/ Leadership ', 'Administrative', 'Technical Information (library/IT)', 'Communication/Media', 'GAD Training', 'OSH Training'],
      drop_trainingTopic: [{
        text: 'Select Training Topic here',
        value: null
      }, 'Leadership', 'Communication (writing, audio-visual, etc.)', 'Digital', 'Finance & admin related', 'Library-science related',, 'IT related', 'Others'],
      radio_trainor: [{
        text: 'In-house',
        value: 'In-house'
      }, {
        text: 'Contracted',
        value: 'Contracted'
      }],
      radio_fundingSource: [{
        text: 'DOST-STII',
        value: 'DOST-STII'
      }, {
        text: 'External Fund',
        value: 'External Fund'
      }],
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
        sortable: true,
        label: 'Name'
      }, {
        key: 'trainingType',
        label: 'Training Type'
      }, {
        key: 'trainingTopic',
        label: 'Training Topic'
      }, {
        key: 'trainingTitle',
        label: 'Training Title'
      }, {
        key: 'startDate',
        label: 'Start Date'
      }, {
        key: 'endDate',
        label: 'End Date'
      }, {
        key: 'noHours',
        label: 'No of Hours'
      }, {
        key: 'trainingProvider',
        label: 'Training Provider'
      }, {
        key: 'trainor',
        label: 'Trainor'
      }, {
        key: 'fundingSource',
        label: 'Funding Source'
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
    loadEmployees: function () {
      var _loadEmployees = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _services_healthandtraining_service__WEBPACK_IMPORTED_MODULE_1__["loadEmployees"]();

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
    loadTrainings: function () {
      var _loadTrainings = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _services_healthandtraining_service__WEBPACK_IMPORTED_MODULE_1__["loadTrainings"]();

              case 3:
                response = _context2.sent;
                this.trainings = response.data;
                console.log(this.trainings);
                _context2.next = 11;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                this.flashMessage.error({
                  message: 'Some error occured! Please try again.',
                  time: 5000
                });

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 8]]);
      }));

      function loadTrainings() {
        return _loadTrainings.apply(this, arguments);
      }

      return loadTrainings;
    }(),
    createTraining: function () {
      var _createTraining = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                formData = new FormData();
                formData.append('id', this.trainingsData.employeeID);
                formData.append('employeeID', this.trainingsData.employeeID);
                formData.append('trainingType', this.trainingsData.trainingType);
                formData.append('trainingTopic', this.trainingsData.trainingTopic);
                formData.append('trainingTitle', this.trainingsData.trainingTitle);
                formData.append('startDate', this.trainingsData.startDate);
                formData.append('endDate', this.trainingsData.endDate);
                formData.append('noHours', this.trainingsData.noHours);
                formData.append('trainingProvider', this.trainingsData.trainingProvider);
                formData.append('trainor', this.trainingsData.trainor);
                formData.append('fundingSource', this.trainingsData.fundingSource);
                _context3.prev = 12;
                _context3.next = 15;
                return _services_healthandtraining_service__WEBPACK_IMPORTED_MODULE_1__["createTraining"](formData);

              case 15:
                response = _context3.sent;
                console.log(response);
                this.hideEmployeeModal();
                this.flashMessage.success({
                  status: '',
                  message: 'Training added successfully!',
                  time: 5000
                });
                this.trainingsData = {
                  employeeID: '',
                  trainingType: null,
                  trainingTopic: null,
                  trainingTitle: '',
                  startDate: '',
                  endDate: '',
                  noHours: '',
                  trainingProvider: '',
                  trainor: null,
                  fundingSource: null
                };
                _context3.next = 31;
                break;

              case 22:
                _context3.prev = 22;
                _context3.t0 = _context3["catch"](12);
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
                this.loadTrainings();
                this.clearModal();

              case 33:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[12, 22]]);
      }));

      function createTraining() {
        return _createTraining.apply(this, arguments);
      }

      return createTraining;
    }(),
    updateEmployee: function () {
      var _updateEmployee = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                formData = new FormData();
                formData.append('trainingType', this.trainingsData_update.trainingType);
                formData.append('trainingTopic', this.trainingsData_update.trainingTopic);
                formData.append('trainingTitle', this.trainingsData_update.trainingTitle);
                formData.append('startDate', this.trainingsData_update.startDate);
                formData.append('endDate', this.trainingsData_update.endDate);
                formData.append('noHours', this.trainingsData_update.noHours);
                formData.append('trainingProvider', this.trainingsData_update.trainingProvider);
                formData.append('trainor', this.trainingsData_update.trainor);
                formData.append('fundingSource', this.trainingsData_update.fundingSource);
                formData.append("_method", "put");
                _context4.next = 14;
                return _services_healthandtraining_service__WEBPACK_IMPORTED_MODULE_1__["updateTrainingData"](this.trainingsData_update.id, formData);

              case 14:
                response = _context4.sent;
                console.log(response);
                this.flashMessage.success({
                  status: '',
                  message: 'Training updated successfully!',
                  time: 5000
                });
                this.loadTrainings();
                _context4.next = 29;
                break;

              case 20:
                _context4.prev = 20;
                _context4.t0 = _context4["catch"](0);
                _context4.t1 = _context4.t0.response.status;
                _context4.next = _context4.t1 === 422 ? 25 : 27;
                break;

              case 25:
                this.errors = _context4.t0.response.data.errors;
                return _context4.abrupt("break", 29);

              case 27:
                this.flashMessage.error({
                  message: 'Some error occurred, Please try again!',
                  time: 5000
                });
                return _context4.abrupt("break", 29);

              case 29:
                this.loadTrainings();
                this.hideUpdateMdl();

              case 31:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 20]]);
      }));

      function updateEmployee() {
        return _updateEmployee.apply(this, arguments);
      }

      return updateEmployee;
    }(),
    deleteEmployee: function () {
      var _deleteEmployee = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(data) {
        var trainings_Data, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                trainings_Data = _objectSpread({}, data);
                _context5.prev = 1;
                _context5.next = 4;
                return _services_healthandtraining_service__WEBPACK_IMPORTED_MODULE_1__["deleteTraining"](trainings_Data.id);

              case 4:
                response = _context5.sent;
                console.log(response);
                this.flashMessage.success({
                  status: '',
                  message: 'Training deleted successfully!',
                  time: 5000
                });
                _context5.next = 12;
                break;

              case 9:
                _context5.prev = 9;
                _context5.t0 = _context5["catch"](1);
                this.flashMessage.success({
                  status: '',
                  message: 'Training deleted successfully!',
                  time: 5000
                });

              case 12:
                this.loadTrainings();

              case 13:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[1, 9]]);
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/tblTraining.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/tblTraining.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.font-weight-800{\n    font-weight: 800;\n}\n.font-weight-700{\n    font-weight: 700;\n}\n.font-weight-600{\n    font-weight: 600;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/tblTraining.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/tblTraining.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./tblTraining.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/tblTraining.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/tblTraining.vue?vue&type=template&id=1e084aee&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/tblTraining.vue?vue&type=template&id=1e084aee& ***!
  \*********************************************************************************************************************************************************************************************************/
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
              _vm._v("\n          LIST OF TRAININGS\n          "),
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
                                      value: _vm.trainingsData.employeeID,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.trainingsData,
                                          "employeeID",
                                          $$v
                                        )
                                      },
                                      expression: "trainingsData.employeeID"
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
                                    label: "Training Type:",
                                    "label-for": "trainingType",
                                    "label-cols-sm": "2",
                                    "label-align-sm": "right"
                                  }
                                },
                                [
                                  _c("b-form-select", {
                                    attrs: {
                                      id: "trainingType",
                                      options: _vm.drop_trainingType,
                                      required: ""
                                    },
                                    model: {
                                      value: _vm.trainingsData.trainingType,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.trainingsData,
                                          "trainingType",
                                          $$v
                                        )
                                      },
                                      expression: "trainingsData.trainingType"
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
                                    label: "Training Topic:",
                                    "label-for": "trainingTopic",
                                    "label-cols-sm": "2",
                                    "label-align-sm": "right"
                                  }
                                },
                                [
                                  _c("b-form-select", {
                                    attrs: {
                                      id: "trainingTopic",
                                      options: _vm.drop_trainingTopic,
                                      required: ""
                                    },
                                    model: {
                                      value: _vm.trainingsData.trainingTopic,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.trainingsData,
                                          "trainingTopic",
                                          $$v
                                        )
                                      },
                                      expression: "trainingsData.trainingTopic"
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
                                    label: "Training Title:",
                                    "label-for": "trainingTitle",
                                    "label-cols-sm": "2",
                                    "label-align-sm": "right"
                                  }
                                },
                                [
                                  _c("b-form-input", {
                                    attrs: {
                                      id: "trainingTitle",
                                      type: "text",
                                      placeholder:
                                        "Enter Training Title here...",
                                      required: ""
                                    },
                                    model: {
                                      value: _vm.trainingsData.trainingTitle,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.trainingsData,
                                          "trainingTitle",
                                          $$v
                                        )
                                      },
                                      expression: "trainingsData.trainingTitle"
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
                                    label: "Start Date:",
                                    "label-for": "startDate",
                                    "label-cols-sm": "2",
                                    "label-align-sm": "right"
                                  }
                                },
                                [
                                  _c("b-form-datepicker", {
                                    attrs: { id: "startDate", locale: "en" },
                                    model: {
                                      value: _vm.trainingsData.startDate,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.trainingsData,
                                          "startDate",
                                          $$v
                                        )
                                      },
                                      expression: "trainingsData.startDate"
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
                                    label: "End Date:",
                                    "label-for": "endDate",
                                    "label-cols-sm": "2",
                                    "label-align-sm": "right"
                                  }
                                },
                                [
                                  _c("b-form-datepicker", {
                                    attrs: { id: "endDate", locale: "en" },
                                    model: {
                                      value: _vm.trainingsData.endDate,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.trainingsData,
                                          "endDate",
                                          $$v
                                        )
                                      },
                                      expression: "trainingsData.endDate"
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
                                    label: "No of hours:",
                                    "label-for": "noHours",
                                    "label-cols-sm": "2",
                                    "label-align-sm": "right"
                                  }
                                },
                                [
                                  _c("b-form-input", {
                                    attrs: {
                                      id: "noHours",
                                      type: "text",
                                      placeholder: "Enter No of Hours...",
                                      required: ""
                                    },
                                    model: {
                                      value: _vm.trainingsData.noHours,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.trainingsData,
                                          "noHours",
                                          $$v
                                        )
                                      },
                                      expression: "trainingsData.noHours"
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
                                    label: "Training Provider:",
                                    "label-for": "trainingProvider",
                                    "label-cols-sm": "2",
                                    "label-align-sm": "right"
                                  }
                                },
                                [
                                  _c("b-form-input", {
                                    attrs: {
                                      id: "trainingProvider",
                                      type: "text",
                                      placeholder: "Enter Training Provider...",
                                      required: ""
                                    },
                                    model: {
                                      value: _vm.trainingsData.trainingProvider,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.trainingsData,
                                          "trainingProvider",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "trainingsData.trainingProvider"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("b-form-group", {
                                staticClass: "mb-0 font-weight-700",
                                attrs: {
                                  label: "Trainor:",
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
                                            id: "trainor",
                                            options: _vm.radio_trainor
                                          },
                                          model: {
                                            value: _vm.trainingsData.trainor,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.trainingsData,
                                                "trainor",
                                                $$v
                                              )
                                            },
                                            expression: "trainingsData.trainor"
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
                                  label: "Funding Source:",
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
                                            id: "fundingSource",
                                            options: _vm.radio_fundingSource
                                          },
                                          model: {
                                            value:
                                              _vm.trainingsData.fundingSource,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.trainingsData,
                                                "fundingSource",
                                                $$v
                                              )
                                            },
                                            expression:
                                              "trainingsData.fundingSource"
                                          }
                                        })
                                      ]
                                    }
                                  }
                                ])
                              })
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
                                    label: "Training Type:",
                                    "label-for": "trainingType",
                                    "label-cols-sm": "2",
                                    "label-align-sm": "right"
                                  }
                                },
                                [
                                  _c("b-form-select", {
                                    attrs: {
                                      id: "trainingType",
                                      options: _vm.drop_trainingType,
                                      required: ""
                                    },
                                    model: {
                                      value:
                                        _vm.trainingsData_update.trainingType,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.trainingsData_update,
                                          "trainingType",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "trainingsData_update.trainingType"
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
                                    label: "Training Topic:",
                                    "label-for": "trainingTopic",
                                    "label-cols-sm": "2",
                                    "label-align-sm": "right"
                                  }
                                },
                                [
                                  _c("b-form-select", {
                                    attrs: {
                                      id: "trainingTopic",
                                      options: _vm.drop_trainingTopic,
                                      required: ""
                                    },
                                    model: {
                                      value:
                                        _vm.trainingsData_update.trainingTopic,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.trainingsData_update,
                                          "trainingTopic",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "trainingsData_update.trainingTopic"
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
                                    label: "Training Title:",
                                    "label-for": "trainingTitle",
                                    "label-cols-sm": "2",
                                    "label-align-sm": "right"
                                  }
                                },
                                [
                                  _c("b-form-input", {
                                    attrs: {
                                      id: "trainingTitle",
                                      type: "text",
                                      placeholder:
                                        "Enter Training Title here...",
                                      required: ""
                                    },
                                    model: {
                                      value:
                                        _vm.trainingsData_update.trainingTitle,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.trainingsData_update,
                                          "trainingTitle",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "trainingsData_update.trainingTitle"
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
                                    label: "Start Date:",
                                    "label-for": "startDate",
                                    "label-cols-sm": "2",
                                    "label-align-sm": "right"
                                  }
                                },
                                [
                                  _c("b-form-datepicker", {
                                    attrs: { id: "startDate", locale: "en" },
                                    model: {
                                      value: _vm.trainingsData_update.startDate,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.trainingsData_update,
                                          "startDate",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "trainingsData_update.startDate"
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
                                    label: "End Date:",
                                    "label-for": "endDate",
                                    "label-cols-sm": "2",
                                    "label-align-sm": "right"
                                  }
                                },
                                [
                                  _c("b-form-datepicker", {
                                    attrs: { id: "endDate", locale: "en" },
                                    model: {
                                      value: _vm.trainingsData_update.endDate,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.trainingsData_update,
                                          "endDate",
                                          $$v
                                        )
                                      },
                                      expression: "trainingsData_update.endDate"
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
                                    label: "No of hours:",
                                    "label-for": "noHours",
                                    "label-cols-sm": "2",
                                    "label-align-sm": "right"
                                  }
                                },
                                [
                                  _c("b-form-input", {
                                    attrs: {
                                      id: "noHours",
                                      type: "text",
                                      placeholder: "Enter No of Hours...",
                                      required: ""
                                    },
                                    model: {
                                      value: _vm.trainingsData_update.noHours,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.trainingsData_update,
                                          "noHours",
                                          $$v
                                        )
                                      },
                                      expression: "trainingsData_update.noHours"
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
                                    label: "Training Provider:",
                                    "label-for": "trainingProvider",
                                    "label-cols-sm": "2",
                                    "label-align-sm": "right"
                                  }
                                },
                                [
                                  _c("b-form-input", {
                                    attrs: {
                                      id: "trainingProvider",
                                      type: "text",
                                      placeholder: "Enter Training Provider...",
                                      required: ""
                                    },
                                    model: {
                                      value:
                                        _vm.trainingsData_update
                                          .trainingProvider,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.trainingsData_update,
                                          "trainingProvider",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "trainingsData_update.trainingProvider"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("b-form-group", {
                                staticClass: "mb-0 font-weight-700",
                                attrs: {
                                  label: "Trainor:",
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
                                            id: "trainor",
                                            options: _vm.radio_trainor
                                          },
                                          model: {
                                            value:
                                              _vm.trainingsData_update.trainor,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.trainingsData_update,
                                                "trainor",
                                                $$v
                                              )
                                            },
                                            expression:
                                              "trainingsData_update.trainor"
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
                                  label: "Funding Source:",
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
                                            id: "fundingSource",
                                            options: _vm.radio_fundingSource
                                          },
                                          model: {
                                            value:
                                              _vm.trainingsData_update
                                                .fundingSource,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.trainingsData_update,
                                                "fundingSource",
                                                $$v
                                              )
                                            },
                                            expression:
                                              "trainingsData_update.fundingSource"
                                          }
                                        })
                                      ]
                                    }
                                  }
                                ])
                              })
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
        _vm._v("Home > Health and Training > Training ")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/tblTraining.vue":
/*!********************************************!*\
  !*** ./resources/js/views/tblTraining.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tblTraining_vue_vue_type_template_id_1e084aee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tblTraining.vue?vue&type=template&id=1e084aee& */ "./resources/js/views/tblTraining.vue?vue&type=template&id=1e084aee&");
/* harmony import */ var _tblTraining_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tblTraining.vue?vue&type=script&lang=js& */ "./resources/js/views/tblTraining.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _tblTraining_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tblTraining.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/tblTraining.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _tblTraining_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tblTraining_vue_vue_type_template_id_1e084aee___WEBPACK_IMPORTED_MODULE_0__["render"],
  _tblTraining_vue_vue_type_template_id_1e084aee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/tblTraining.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/tblTraining.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/tblTraining.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tblTraining_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./tblTraining.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/tblTraining.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tblTraining_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/tblTraining.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/tblTraining.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tblTraining_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./tblTraining.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/tblTraining.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tblTraining_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tblTraining_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tblTraining_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tblTraining_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/tblTraining.vue?vue&type=template&id=1e084aee&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/tblTraining.vue?vue&type=template&id=1e084aee& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tblTraining_vue_vue_type_template_id_1e084aee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./tblTraining.vue?vue&type=template&id=1e084aee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/tblTraining.vue?vue&type=template&id=1e084aee&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tblTraining_vue_vue_type_template_id_1e084aee___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tblTraining_vue_vue_type_template_id_1e084aee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);