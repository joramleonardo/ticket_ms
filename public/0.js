(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AdminHome.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/AdminHome.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.vue */ "./resources/js/views/Header.vue");
/* harmony import */ var _Sidebar_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidebar.vue */ "./resources/js/views/Sidebar.vue");
/* harmony import */ var _Footer_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer.vue */ "./resources/js/views/Footer.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


 // import * as authService from './services/auth_service';

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Header: _Header_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Sidebar: _Sidebar_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Footer: _Footer_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      isLoggedIn: false
    };
  } // data () {
  //     return {
  //     }
  // },
  // beforeCreate: async function () {
  //     try {
  //         if(authService.isLoggedIn()) {
  //             const response = await authService.getUserProfile();
  //             this.$store.dispatch('authenticate', response.data);
  //         }
  //     } catch (error) {
  //     }
  // },

});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AdminHome.vue?vue&type=template&id=a27eb082&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/AdminHome.vue?vue&type=template&id=a27eb082& ***!
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
    "main",
    [
      _c("Header"),
      _vm._v(" "),
      _c(
        "div",
        { attrs: { id: "layoutSidenav" } },
        [
          _c("Sidebar"),
          _vm._v(" "),
          _c(
            "div",
            { attrs: { id: "layoutSidenav_content" } },
            [_c("main", [_c("router-view")], 1), _vm._v(" "), _c("Footer")],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("FlashMessage", { attrs: { position: "right bottom" } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Sidebar.vue?vue&type=template&id=02a6918d&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Sidebar.vue?vue&type=template&id=02a6918d& ***!
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
  return _c("div", { attrs: { id: "layoutSidenav_nav" } }, [
    _c(
      "nav",
      {
        staticClass: "sb-sidenav accordion sb-sidenav-dark",
        attrs: { id: "sidenavAccordion" }
      },
      [
        _c("div", { staticClass: "sb-sidenav-menu" }, [
          _c(
            "div",
            { staticClass: "nav" },
            [
              _c(
                "router-link",
                {
                  staticClass: "nav-link collapsed",
                  attrs: {
                    to: "/dashboard",
                    href: "#",
                    "data-toggle": "collapse",
                    "data-target": "#",
                    "aria-expanded": "false",
                    "aria-controls": "",
                    exact: ""
                  }
                },
                [
                  _c("div", { staticClass: "sb-nav-link-icon" }, [
                    _c("i", { staticClass: "fas fa-flask" })
                  ]),
                  _vm._v("\n                    Dashboard\n                ")
                ]
              ),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "nav-link collapsed",
                  attrs: {
                    to: "/admin/healthandtraining",
                    exact: "",
                    href: "#",
                    "data-toggle": "collapse",
                    "data-target": "#collapse_healthandtraining",
                    "aria-expanded": "false",
                    "aria-controls": "collapse_accountmanagement"
                  }
                },
                [
                  _c("div", { staticClass: "sb-nav-link-icon" }, [
                    _c("i", { staticClass: "fas fa-h-square" })
                  ]),
                  _vm._v(
                    "\n                    Health and Training\n                    "
                  ),
                  _c("div", { staticClass: "sb-sidenav-collapse-arrow" }, [
                    _c("i", { staticClass: "fas fa-angle-down" })
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "collapse",
                  attrs: {
                    id: "collapse_healthandtraining",
                    "aria-labelledby": "headingOne",
                    "data-parent": "#sidenavAccordion"
                  }
                },
                [
                  _c(
                    "nav",
                    { staticClass: "sb-sidenav-menu-nested nav" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "nav-link",
                          attrs: {
                            to: "/admin/healthandtraining/employee",
                            exact: ""
                          }
                        },
                        [
                          _c("div", { staticClass: "sb-nav-link-icon" }, [
                            _c("i", { staticClass: "fas fa-list-alt" })
                          ]),
                          _vm._v(
                            "\n                            Employee\n                        "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "router-link",
                        {
                          staticClass: "nav-link",
                          attrs: {
                            to: "/admin/healthandtraining/training",
                            exact: ""
                          }
                        },
                        [
                          _c("div", { staticClass: "sb-nav-link-icon" }, [
                            _c("i", { staticClass: "fas fa-list-alt" })
                          ]),
                          _vm._v(
                            "\n                            Training\n                        "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "router-link",
                        {
                          staticClass: "nav-link",
                          attrs: {
                            to: "/admin/healthandtraining/healthcondition",
                            exact: ""
                          }
                        },
                        [
                          _c("div", { staticClass: "sb-nav-link-icon" }, [
                            _c("i", { staticClass: "fas fa-list-alt" })
                          ]),
                          _vm._v(
                            "\n                            Health Condition\n                        "
                          )
                        ]
                      )
                    ],
                    1
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "nav-link collapsed",
                  attrs: {
                    to: "/admin/library",
                    href: "#",
                    "data-toggle": "collapse",
                    "data-target": "#collapse_library",
                    "aria-expanded": "false",
                    "aria-controls": "collapse_accountmanagement",
                    exact: ""
                  }
                },
                [
                  _c("div", { staticClass: "sb-nav-link-icon" }, [
                    _c("i", { staticClass: "fas fa-book-open" })
                  ]),
                  _vm._v("\n                    Library\n                    "),
                  _c("div", { staticClass: "sb-sidenav-collapse-arrow" }, [
                    _c("i", { staticClass: "fas fa-angle-down" })
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "collapse",
                  attrs: {
                    id: "collapse_library",
                    "aria-labelledby": "headingOne",
                    "data-parent": "#sidenavAccordion"
                  }
                },
                [
                  _c(
                    "nav",
                    { staticClass: "sb-sidenav-menu-nested nav" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "nav-link",
                          attrs: { to: "/admin/library/client", exact: "" }
                        },
                        [
                          _c("div", { staticClass: "sb-nav-link-icon" }, [
                            _c("i", { staticClass: "fas fa-list-alt" })
                          ]),
                          _vm._v(
                            "\n                            Client\n                        "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "router-link",
                        {
                          staticClass: "nav-link",
                          attrs: { to: "/admin/library/request", exact: "" }
                        },
                        [
                          _c("div", { staticClass: "sb-nav-link-icon" }, [
                            _c("i", { staticClass: "fas fa-list-alt" })
                          ]),
                          _vm._v(
                            "\n                            Request\n                        "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "router-link",
                        {
                          staticClass: "nav-link",
                          attrs: { to: "/admin/library/evaluation", exact: "" }
                        },
                        [
                          _c("div", { staticClass: "sb-nav-link-icon" }, [
                            _c("i", { staticClass: "fas fa-list-alt" })
                          ]),
                          _vm._v(
                            "\n                            Evaluation\n                        "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "router-link",
                        {
                          staticClass: "nav-link",
                          attrs: { to: "/admin/library/researchlog", exact: "" }
                        },
                        [
                          _c("div", { staticClass: "sb-nav-link-icon" }, [
                            _c("i", { staticClass: "fas fa-list-alt" })
                          ]),
                          _vm._v(
                            "\n                            Research Log\n                        "
                          )
                        ]
                      )
                    ],
                    1
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "nav-link collapsed",
                  attrs: {
                    to: "/admin/sciencejourno",
                    href: "#",
                    "data-toggle": "collapse",
                    "data-target": "#collapse_sciencejourno",
                    "aria-expanded": "false",
                    "aria-controls": "collapse_accountmanagement",
                    exact: ""
                  }
                },
                [
                  _c("div", { staticClass: "sb-nav-link-icon" }, [
                    _c("i", { staticClass: "fas fa-flask" })
                  ]),
                  _vm._v(
                    "\n                    Science Journo Ako\n                    "
                  ),
                  _c("div", { staticClass: "sb-sidenav-collapse-arrow" }, [
                    _c("i", { staticClass: "fas fa-angle-down" })
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "collapse",
                  attrs: {
                    id: "collapse_sciencejourno",
                    "aria-labelledby": "headingOne",
                    "data-parent": "#sidenavAccordion"
                  }
                },
                [
                  _c(
                    "nav",
                    { staticClass: "sb-sidenav-menu-nested nav" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "nav-link",
                          attrs: { to: "/admin/sciencejourno/event", exact: "" }
                        },
                        [
                          _c("div", { staticClass: "sb-nav-link-icon" }, [
                            _c("i", { staticClass: "fas fa-list-alt" })
                          ]),
                          _vm._v(
                            "\n                            Event\n                        "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "router-link",
                        {
                          staticClass: "nav-link",
                          attrs: {
                            to: "/admin/sciencejourno/speaker",
                            exact: ""
                          }
                        },
                        [
                          _c("div", { staticClass: "sb-nav-link-icon" }, [
                            _c("i", { staticClass: "fas fa-list-alt" })
                          ]),
                          _vm._v(
                            "\n                            Speaker\n                        "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "router-link",
                        {
                          staticClass: "nav-link",
                          attrs: {
                            to: "/admin/sciencejourno/participants",
                            exact: ""
                          }
                        },
                        [
                          _c("div", { staticClass: "sb-nav-link-icon" }, [
                            _c("i", { staticClass: "fas fa-list-alt" })
                          ]),
                          _vm._v(
                            "\n                            Participants\n                        "
                          )
                        ]
                      )
                    ],
                    1
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "nav-link collapsed",
                  attrs: {
                    to: "/admin/pjs",
                    href: "#",
                    "data-toggle": "collapse",
                    "data-target": "#collapse_PJS",
                    "aria-expanded": "false",
                    "aria-controls": "collapse_accountmanagement",
                    exact: ""
                  }
                },
                [
                  _c("div", { staticClass: "sb-nav-link-icon" }, [
                    _c("i", { staticClass: "fas fa-book" })
                  ]),
                  _vm._v("\n                    PJS\n                    "),
                  _c("div", { staticClass: "sb-sidenav-collapse-arrow" }, [
                    _c("i", { staticClass: "fas fa-angle-down" })
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "collapse",
                  attrs: {
                    id: "collapse_PJS",
                    "aria-labelledby": "headingOne",
                    "data-parent": "#sidenavAccordion"
                  }
                },
                [
                  _c(
                    "nav",
                    { staticClass: "sb-sidenav-menu-nested nav" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "nav-link",
                          attrs: { to: "/admin/pjs/researcher", exact: "" }
                        },
                        [
                          _c("div", { staticClass: "sb-nav-link-icon" }, [
                            _c("i", { staticClass: "fas fa-list-alt" })
                          ]),
                          _vm._v(
                            "\n                            Researcher\n                        "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "router-link",
                        {
                          staticClass: "nav-link",
                          attrs: { to: "/admin/pjs/manuscript", exact: "" }
                        },
                        [
                          _c("div", { staticClass: "sb-nav-link-icon" }, [
                            _c("i", { staticClass: "fas fa-list-alt" })
                          ]),
                          _vm._v(
                            "\n                            Manuscript\n                        "
                          )
                        ]
                      )
                    ],
                    1
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "nav-link collapsed",
                  attrs: {
                    to: "/admin/adminusers",
                    href: "#",
                    "data-toggle": "collapse",
                    "data-target": "#",
                    "aria-expanded": "false",
                    "aria-controls": "",
                    exact: ""
                  }
                },
                [
                  _c("div", { staticClass: "sb-nav-link-icon" }, [
                    _c("i", { staticClass: "fas fa-flask" })
                  ]),
                  _vm._v("\n                    Admin Users\n                ")
                ]
              ),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "nav-link collapsed",
                  attrs: {
                    to: "/login",
                    href: "#",
                    "data-toggle": "collapse",
                    "data-target": "#",
                    "aria-expanded": "false",
                    "aria-controls": "",
                    exact: ""
                  }
                },
                [
                  _c("div", { staticClass: "sb-nav-link-icon" }, [
                    _c("i", { staticClass: "fas fa-flask" })
                  ]),
                  _vm._v("\n                    Logout\n                ")
                ]
              )
            ],
            1
          )
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/AdminHome.vue":
/*!******************************************!*\
  !*** ./resources/js/views/AdminHome.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdminHome_vue_vue_type_template_id_a27eb082___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminHome.vue?vue&type=template&id=a27eb082& */ "./resources/js/views/AdminHome.vue?vue&type=template&id=a27eb082&");
/* harmony import */ var _AdminHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminHome.vue?vue&type=script&lang=js& */ "./resources/js/views/AdminHome.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdminHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminHome_vue_vue_type_template_id_a27eb082___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AdminHome_vue_vue_type_template_id_a27eb082___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/AdminHome.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/AdminHome.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/AdminHome.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AdminHome.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AdminHome.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/AdminHome.vue?vue&type=template&id=a27eb082&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/AdminHome.vue?vue&type=template&id=a27eb082& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminHome_vue_vue_type_template_id_a27eb082___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AdminHome.vue?vue&type=template&id=a27eb082& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AdminHome.vue?vue&type=template&id=a27eb082&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminHome_vue_vue_type_template_id_a27eb082___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminHome_vue_vue_type_template_id_a27eb082___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Sidebar.vue":
/*!****************************************!*\
  !*** ./resources/js/views/Sidebar.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sidebar_vue_vue_type_template_id_02a6918d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=template&id=02a6918d& */ "./resources/js/views/Sidebar.vue?vue&type=template&id=02a6918d&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Sidebar_vue_vue_type_template_id_02a6918d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Sidebar_vue_vue_type_template_id_02a6918d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Sidebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Sidebar.vue?vue&type=template&id=02a6918d&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/Sidebar.vue?vue&type=template&id=02a6918d& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_02a6918d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Sidebar.vue?vue&type=template&id=02a6918d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Sidebar.vue?vue&type=template&id=02a6918d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_02a6918d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_02a6918d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);