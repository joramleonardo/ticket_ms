(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/tblRequest.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/tblRequest.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'employee',
  data: function data() {
    return {
      trainings: [],
      trainingsData: {
        client_ID: '',
        transactionDate: '',
        status: null,
        callNumber: '',
        source: '',
        title: '',
        volIssueNo: '',
        numPages: '',
        timeIssued: '',
        timeReceived: '',
        timeReturned: '',
        remarks: '',
        assistedBy: ''
      },
      trainingsData_update: {},
      drop_status: [{
        text: 'Select Status here',
        value: null
      }, 'Hard copy', 'Digital copy', 'Not Available'],
      errors: '',
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      filterOn: [],
      filter: null,
      sortDirection: 'asc',
      sortBy: 'id',
      sortDesc: false,
      requestFields: [{
        key: 'name',
        label: 'Name'
      }, {
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
    loadTrainings: function () {
      var _loadTrainings = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _services_library_service__WEBPACK_IMPORTED_MODULE_1__["loadTrainings"]();

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
                formData.append('client_ID', this.trainingsData.client_ID);
                formData.append('transactionDate', this.trainingsData.transactionDate);
                formData.append('status', this.trainingsData.status);
                formData.append('callNumber', this.trainingsData.callNumber);
                formData.append('source', this.trainingsData.source);
                formData.append('title', this.trainingsData.title);
                formData.append('volIssueNo', this.trainingsData.volIssueNo);
                formData.append('numPages', this.trainingsData.numPages);
                formData.append('timeIssued', this.trainingsData.timeIssued);
                formData.append('timeReceived', this.trainingsData.timeReceived);
                formData.append('timeReturned', this.trainingsData.timeReturned);
                formData.append('remarks', this.trainingsData.remarks);
                formData.append('assistedBy', this.trainingsData.assistedBy);
                _context3.prev = 14;
                _context3.next = 17;
                return _services_library_service__WEBPACK_IMPORTED_MODULE_1__["createTraining"](formData);

              case 17:
                response = _context3.sent;
                console.log(response);
                this.hideEmployeeModal();
                this.flashMessage.success({
                  status: '',
                  message: 'Training added successfully!',
                  time: 5000
                });
                this.trainingsData = {
                  client_ID: '',
                  transactionDate: '',
                  status: null,
                  callNumber: '',
                  source: '',
                  title: '',
                  volIssueNo: '',
                  numPages: '',
                  timeIssued: '',
                  timeReceived: '',
                  timeReturned: '',
                  remarks: '',
                  assistedBy: ''
                };
                _context3.next = 33;
                break;

              case 24:
                _context3.prev = 24;
                _context3.t0 = _context3["catch"](14);
                _context3.t1 = _context3.t0.response.status;
                _context3.next = _context3.t1 === 422 ? 29 : 31;
                break;

              case 29:
                this.errors = _context3.t0.response.data.errors;
                return _context3.abrupt("break", 33);

              case 31:
                this.flashMessage.error({
                  message: 'Some error occurred, Please try again!',
                  time: 5000
                });
                return _context3.abrupt("break", 33);

              case 33:
                this.loadTrainings();
                this.clearModal();

              case 35:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[14, 24]]);
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
                formData.append('client_ID', this.trainingsData_update.client_ID);
                formData.append('transactionDate', this.trainingsData_update.transactionDate);
                formData.append('status', this.trainingsData_update.status);
                formData.append('callNumber', this.trainingsData_update.callNumber);
                formData.append('source', this.trainingsData_update.source);
                formData.append('title', this.trainingsData_update.title);
                formData.append('volIssueNo', this.trainingsData_update.volIssueNo);
                formData.append('numPages', this.trainingsData_update.numPages);
                formData.append('timeIssued', this.trainingsData_update.timeIssued);
                formData.append('timeReceived', this.trainingsData_update.timeReceived);
                formData.append('timeReturned', this.trainingsData_update.timeReturned);
                formData.append('remarks', this.trainingsData_update.remarks);
                formData.append('assistedBy', this.trainingsData_update.assistedBy);
                formData.append("_method", "put");
                _context4.next = 18;
                return _services_library_service__WEBPACK_IMPORTED_MODULE_1__["updateTrainingData"](this.trainingsData_update.id, formData);

              case 18:
                response = _context4.sent;
                console.log(response);
                this.flashMessage.success({
                  status: '',
                  message: 'Training updated successfully!',
                  time: 5000
                });
                this.loadTrainings();
                _context4.next = 33;
                break;

              case 24:
                _context4.prev = 24;
                _context4.t0 = _context4["catch"](0);
                _context4.t1 = _context4.t0.response.status;
                _context4.next = _context4.t1 === 422 ? 29 : 31;
                break;

              case 29:
                this.errors = _context4.t0.response.data.errors;
                return _context4.abrupt("break", 33);

              case 31:
                this.flashMessage.error({
                  message: 'Some error occurred, Please try again!',
                  time: 5000
                });
                return _context4.abrupt("break", 33);

              case 33:
                this.loadTrainings();
                this.hideUpdateMdl();

              case 35:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 24]]);
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
                return _services_library_service__WEBPACK_IMPORTED_MODULE_1__["deleteTraining"](trainings_Data.id);

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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/tblRequest.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/tblRequest.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.font-weight-800{\n    font-weight: 800;\n}\n.font-weight-700{\n    font-weight: 700;\n}\n.font-weight-600{\n    font-weight: 600;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/tblRequest.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/tblRequest.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./tblRequest.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/tblRequest.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/tblRequest.vue?vue&type=template&id=21596aa0&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/tblRequest.vue?vue&type=template&id=21596aa0& ***!
  \********************************************************************************************************************************************************************************************************/
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
                                      value: _vm.trainingsData.status,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.trainingsData,
                                          "status",
                                          $$v
                                        )
                                      },
                                      expression: "trainingsData.status"
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
                                    label: "Call Number:",
                                    "label-for": "callNumber",
                                    "label-cols-sm": "2",
                                    "label-align-sm": "right"
                                  }
                                },
                                [
                                  _c("b-form-input", {
                                    attrs: {
                                      id: "callNumber",
                                      type: "text",
                                      placeholder: "Enter name here...",
                                      required: ""
                                    },
                                    model: {
                                      value: _vm.trainingsData.callNumber,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.trainingsData,
                                          "callNumber",
                                          $$v
                                        )
                                      },
                                      expression: "trainingsData.callNumber"
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
                                    label: "Source:",
                                    "label-for": "source",
                                    "label-cols-sm": "2",
                                    "label-align-sm": "right"
                                  }
                                },
                                [
                                  _c("b-form-input", {
                                    attrs: {
                                      id: "source",
                                      type: "text",
                                      placeholder: "Enter name here...",
                                      required: ""
                                    },
                                    model: {
                                      value: _vm.trainingsData.source,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.trainingsData,
                                          "source",
                                          $$v
                                        )
                                      },
                                      expression: "trainingsData.source"
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
                                      placeholder: "Enter name here...",
                                      required: ""
                                    },
                                    model: {
                                      value: _vm.trainingsData.title,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.trainingsData,
                                          "title",
                                          $$v
                                        )
                                      },
                                      expression: "trainingsData.title"
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
                                    label: "Vol Issue No:",
                                    "label-for": "volIssueNo",
                                    "label-cols-sm": "2",
                                    "label-align-sm": "right"
                                  }
                                },
                                [
                                  _c("b-form-input", {
                                    attrs: {
                                      id: "volIssueNo",
                                      type: "text",
                                      placeholder: "Enter name here...",
                                      required: ""
                                    },
                                    model: {
                                      value: _vm.trainingsData.volIssueNo,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.trainingsData,
                                          "volIssueNo",
                                          $$v
                                        )
                                      },
                                      expression: "trainingsData.volIssueNo"
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
                                    label: "Num Pages:",
                                    "label-for": "numPages",
                                    "label-cols-sm": "2",
                                    "label-align-sm": "right"
                                  }
                                },
                                [
                                  _c("b-form-input", {
                                    attrs: {
                                      id: "numPages",
                                      type: "text",
                                      placeholder: "Enter name here...",
                                      required: ""
                                    },
                                    model: {
                                      value: _vm.trainingsData.numPages,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.trainingsData,
                                          "numPages",
                                          $$v
                                        )
                                      },
                                      expression: "trainingsData.numPages"
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
                                    label: "Time Issued:",
                                    "label-for": "timeIssued",
                                    "label-cols-sm": "2",
                                    "label-align-sm": "right"
                                  }
                                },
                                [
                                  _c("b-form-timepicker", {
                                    attrs: { id: "timeIssued", locale: "en" },
                                    model: {
                                      value: _vm.trainingsData.timeIssued,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.trainingsData,
                                          "timeIssued",
                                          $$v
                                        )
                                      },
                                      expression: "trainingsData.timeIssued"
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
                                    label: "Time Received:",
                                    "label-for": "timeReceived",
                                    "label-cols-sm": "2",
                                    "label-align-sm": "right"
                                  }
                                },
                                [
                                  _c("b-form-timepicker", {
                                    attrs: { id: "timeReceived", locale: "en" },
                                    model: {
                                      value: _vm.trainingsData.timeReceived,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.trainingsData,
                                          "timeReceived",
                                          $$v
                                        )
                                      },
                                      expression: "trainingsData.timeReceived"
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
                                    label: "Time Returned:",
                                    "label-for": "timeReturned",
                                    "label-cols-sm": "2",
                                    "label-align-sm": "right"
                                  }
                                },
                                [
                                  _c("b-form-timepicker", {
                                    attrs: { id: "timeReturned", locale: "en" },
                                    model: {
                                      value: _vm.trainingsData.timeReturned,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.trainingsData,
                                          "timeReturned",
                                          $$v
                                        )
                                      },
                                      expression: "trainingsData.timeReturned"
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
                                    label: "Remarks:",
                                    "label-for": "remarks",
                                    "label-cols-sm": "2",
                                    "label-align-sm": "right"
                                  }
                                },
                                [
                                  _c("b-form-input", {
                                    attrs: {
                                      id: "remarks",
                                      type: "text",
                                      placeholder: "Enter name here...",
                                      required: ""
                                    },
                                    model: {
                                      value: _vm.trainingsData.remarks,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.trainingsData,
                                          "remarks",
                                          $$v
                                        )
                                      },
                                      expression: "trainingsData.remarks"
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
                                    label: "Assisted By:",
                                    "label-for": "assistedBy",
                                    "label-cols-sm": "2",
                                    "label-align-sm": "right"
                                  }
                                },
                                [
                                  _c("b-form-input", {
                                    attrs: {
                                      id: "assistedBy",
                                      type: "text",
                                      placeholder: "Enter name here...",
                                      required: ""
                                    },
                                    model: {
                                      value: _vm.trainingsData.assistedBy,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.trainingsData,
                                          "assistedBy",
                                          $$v
                                        )
                                      },
                                      expression: "trainingsData.assistedBy"
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
                                      value: _vm.trainingsData_update.status,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.trainingsData_update,
                                          "status",
                                          $$v
                                        )
                                      },
                                      expression: "trainingsData_update.status"
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
                                    label: "Call Number:",
                                    "label-for": "callNumber",
                                    "label-cols-sm": "2",
                                    "label-align-sm": "right"
                                  }
                                },
                                [
                                  _c("b-form-input", {
                                    attrs: {
                                      id: "callNumber",
                                      type: "text",
                                      placeholder: "Enter name here...",
                                      required: ""
                                    },
                                    model: {
                                      value:
                                        _vm.trainingsData_update.callNumber,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.trainingsData_update,
                                          "callNumber",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "trainingsData_update.callNumber"
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
                                    label: "Source:",
                                    "label-for": "source",
                                    "label-cols-sm": "2",
                                    "label-align-sm": "right"
                                  }
                                },
                                [
                                  _c("b-form-input", {
                                    attrs: {
                                      id: "source",
                                      type: "text",
                                      placeholder: "Enter name here...",
                                      required: ""
                                    },
                                    model: {
                                      value: _vm.trainingsData_update.source,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.trainingsData_update,
                                          "source",
                                          $$v
                                        )
                                      },
                                      expression: "trainingsData_update.source"
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
                                      placeholder: "Enter name here...",
                                      required: ""
                                    },
                                    model: {
                                      value: _vm.trainingsData_update.title,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.trainingsData_update,
                                          "title",
                                          $$v
                                        )
                                      },
                                      expression: "trainingsData_update.title"
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
                                    label: "Vol Issue No:",
                                    "label-for": "volIssueNo",
                                    "label-cols-sm": "2",
                                    "label-align-sm": "right"
                                  }
                                },
                                [
                                  _c("b-form-input", {
                                    attrs: {
                                      id: "volIssueNo",
                                      type: "text",
                                      placeholder: "Enter name here...",
                                      required: ""
                                    },
                                    model: {
                                      value:
                                        _vm.trainingsData_update.volIssueNo,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.trainingsData_update,
                                          "volIssueNo",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "trainingsData_update.volIssueNo"
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
                                    label: "Num Pages:",
                                    "label-for": "numPages",
                                    "label-cols-sm": "2",
                                    "label-align-sm": "right"
                                  }
                                },
                                [
                                  _c("b-form-input", {
                                    attrs: {
                                      id: "numPages",
                                      type: "text",
                                      placeholder: "Enter name here...",
                                      required: ""
                                    },
                                    model: {
                                      value: _vm.trainingsData_update.numPages,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.trainingsData_update,
                                          "numPages",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "trainingsData_update.numPages"
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
                                    label: "Time Issued:",
                                    "label-for": "timeIssued",
                                    "label-cols-sm": "2",
                                    "label-align-sm": "right"
                                  }
                                },
                                [
                                  _c("b-form-timepicker", {
                                    attrs: { id: "timeIssued", locale: "en" },
                                    model: {
                                      value:
                                        _vm.trainingsData_update.timeIssued,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.trainingsData_update,
                                          "timeIssued",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "trainingsData_update.timeIssued"
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
                                    label: "Time Received:",
                                    "label-for": "timeReceived",
                                    "label-cols-sm": "2",
                                    "label-align-sm": "right"
                                  }
                                },
                                [
                                  _c("b-form-timepicker", {
                                    attrs: { id: "timeReceived", locale: "en" },
                                    model: {
                                      value:
                                        _vm.trainingsData_update.timeReceived,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.trainingsData_update,
                                          "timeReceived",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "trainingsData_update.timeReceived"
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
                                    label: "Time Returned:",
                                    "label-for": "timeReturned",
                                    "label-cols-sm": "2",
                                    "label-align-sm": "right"
                                  }
                                },
                                [
                                  _c("b-form-timepicker", {
                                    attrs: { id: "timeReturned", locale: "en" },
                                    model: {
                                      value:
                                        _vm.trainingsData_update.timeReturned,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.trainingsData_update,
                                          "timeReturned",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "trainingsData_update.timeReturned"
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
                                    label: "Remarks:",
                                    "label-for": "remarks",
                                    "label-cols-sm": "2",
                                    "label-align-sm": "right"
                                  }
                                },
                                [
                                  _c("b-form-input", {
                                    attrs: {
                                      id: "remarks",
                                      type: "text",
                                      placeholder: "Enter name here...",
                                      required: ""
                                    },
                                    model: {
                                      value: _vm.trainingsData_update.remarks,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.trainingsData_update,
                                          "remarks",
                                          $$v
                                        )
                                      },
                                      expression: "trainingsData_update.remarks"
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
                                    label: "Assisted By:",
                                    "label-for": "assistedBy",
                                    "label-cols-sm": "2",
                                    "label-align-sm": "right"
                                  }
                                },
                                [
                                  _c("b-form-input", {
                                    attrs: {
                                      id: "assistedBy",
                                      type: "text",
                                      placeholder: "Enter name here...",
                                      required: ""
                                    },
                                    model: {
                                      value:
                                        _vm.trainingsData_update.assistedBy,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.trainingsData_update,
                                          "assistedBy",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "trainingsData_update.assistedBy"
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
        _vm._v("Home > Library > Request")
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

/***/ "./resources/js/views/tblRequest.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/tblRequest.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tblRequest_vue_vue_type_template_id_21596aa0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tblRequest.vue?vue&type=template&id=21596aa0& */ "./resources/js/views/tblRequest.vue?vue&type=template&id=21596aa0&");
/* harmony import */ var _tblRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tblRequest.vue?vue&type=script&lang=js& */ "./resources/js/views/tblRequest.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _tblRequest_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tblRequest.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/tblRequest.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _tblRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tblRequest_vue_vue_type_template_id_21596aa0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _tblRequest_vue_vue_type_template_id_21596aa0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/tblRequest.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/tblRequest.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/tblRequest.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tblRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./tblRequest.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/tblRequest.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tblRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/tblRequest.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/tblRequest.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tblRequest_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./tblRequest.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/tblRequest.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tblRequest_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tblRequest_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tblRequest_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tblRequest_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/tblRequest.vue?vue&type=template&id=21596aa0&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/tblRequest.vue?vue&type=template&id=21596aa0& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tblRequest_vue_vue_type_template_id_21596aa0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./tblRequest.vue?vue&type=template&id=21596aa0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/tblRequest.vue?vue&type=template&id=21596aa0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tblRequest_vue_vue_type_template_id_21596aa0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tblRequest_vue_vue_type_template_id_21596aa0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);