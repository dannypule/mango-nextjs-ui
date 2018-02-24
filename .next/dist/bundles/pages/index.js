module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// CONCATENATED MODULE: ./js/projects.js
/* harmony default export */ var projects = ([{
  imageUrl: "/static/images/arcadia.gif",
  title: "Website for Arcadia's Fashion Brands (2017 & 2018)",
  summary: "Online fashion store.",
  contribution: "This project touches on various aspects of the user journey\n    from product listing views to checkout. I'm a member of a cross-functional team which includes Javascript Engineers, UX\n    Designers, Quality Assurance, Business Analysts & Product Owners. ",
  skillsUsed: "React, Redux, Jest Testing, Git, Agile, HTML, CSS",
  className: "arc-image"
}, {
  imageUrl: "/static/images/ri-client-dashboard.png",
  title: "Data Visualisation Interface (2017)",
  summary: "A user interface for RI's Data Science team's analysis of client's retail data.",
  contribution: "I was involved from the early planning phases of this project and advised on the approach we would take for the UI.\n    I was the sole Javascript developer on this 6-month long project. Our received some initial wireframes for the UI and I took them\n    to the next level by implementing a glossy interface using Material Design.",
  skillsUsed: "Angular 4, Redux, Typescript, Node.js, Webpack, Git, Material Design, UX, Agile"
}, {
  imageUrl: "/static/images/osca.png",
  title: "Analytics Dashboards (2016 & 2017)",
  summary: "A minimum viable product used to market RI's retail analytics programmes to new clients.",
  contribution: "I lead the JavaScript aspects of the project. Working with the UX Designer/Developer to enhance the UX and\n    design of the application. Working with product owners in an agile environment to develop new features. The outcome\n    of the project was that RI was able to secure a multi-million pound contract with a large retailer.",
  skillsUsed: "Angular 1.x, Javascript, Node.js, Gulp, Git, Material Design, UX, Agile"
}, {
  imageUrl: "/static/images/screen_appsme.png",
  title: "Appsme App Builder (2016)",
  summary: "A wix.com-like app builder which allows small business owners to create an iOS and Android app for their\n    business. The online app builder made heavy use of Javascript.",
  contribution: "Adding new functionality and improving performance of Appsme's mobile app builder.",
  skillsUsed: "Javascript, Git, HTML, CSS, Less"
}, {
  imageUrl: "/static/images/appsme_getstarted.png",
  title: "Appsme Landing Page (2016)",
  summary: "A landing page for Appsme marketing campaigns.",
  contribution: "Design, sourcing and processing images, layout of page elements, optimizing for various screen sizes.",
  skillsUsed: "Javascript, Git, HTML, CSS, Less"
}, {
  imageUrl: "/static/images/screen-kiqplan-app.png",
  maxWidthForImage: true,
  title: "Kiqlan Mobile App v2 (2015)",
  summary: "A personal training app which is part of Kin Wellness's (formerly Fitbug) corporate wellness program.",
  contribution: "Pixel perfect CSS to match the look and feel of the design briefs.",
  skillsUsed: "HTML, CSS, Sass, Git"
}, {
  imageUrl: "/static/images/screen-kiqplan.png",
  title: "Kiqlan Website (2015)",
  summary: "A sales and user registration website for users of Kiqplan mobile app.",
  contribution: "SEO optimization, improving layout of existing pages, enhancing registration\n    functionality, creating new backend tools for user management and bug fixing.",
  skillsUsed: "Javascript, JQuery, PHP, AJAX, Git, HTML, CSS, Sass"
}, {
  imageUrl: "/static/images/screen-kiqplan-support.png",
  title: "Kiqplan Support Center (2014)",
  summary: "A ticketing and help centre for Kiqplan users.",
  contribution: "I heavily customized a very basic theme which only looked good on desktops and made it mobile ready.\n    The look and feel of the site was also given an overhaul to bring it more in line with the Kiqplan branding.",
  skillsUsed: "Javascript, HTML, CSS"
}]);
// CONCATENATED MODULE: ./components/Home/Projects.jsx



var Projects_Projects = function Projects() {
  return external__react__default.a.createElement(
    "div",
    { className: "projects-section grid" },
    external__react__default.a.createElement(
      "div",
      { className: "col-12" },
      external__react__default.a.createElement(
        "h1",
        null,
        "~ Projects ~"
      )
    ),
    projects.map(function (project, key) {
      return external__react__default.a.createElement(
        "div",
        {
          className: "projects-section-item col-6_sm-12 " + project.className,
          key: key
        },
        external__react__default.a.createElement(
          "h3",
          null,
          project.title
        ),
        external__react__default.a.createElement("img", {
          className: project.maxWidthForImage ? 'max-width' : '',
          src: project.imageUrl,
          alt: project.title
        }),
        external__react__default.a.createElement(
          "div",
          { className: "projects-section-item-inner" },
          external__react__default.a.createElement(
            "h5",
            null,
            project.summary
          ),
          external__react__default.a.createElement(
            "p",
            { className: "project-overview" },
            project.contribution
          ),
          external__react__default.a.createElement(
            "p",
            { className: "skills-used" },
            external__react__default.a.createElement(
              "span",
              { className: "bold-text" },
              "Skills used:"
            ),
            " ",
            project.skillsUsed
          )
        )
      );
    })
  );
};

/* harmony default export */ var Home_Projects = (Projects_Projects);
// CONCATENATED MODULE: ./js/codepens.js
/* harmony default export */ var codepens = (getCodepens());

function getCodepens() {
  var pens = [{
    title: "Magical Elixir",
    subTitle: "CSS",
    code: "vywaZw"
  }, {
    title: "Old Master",
    subTitle: "CSS",
    code: "RWbYMq"
  }, {
    title: "Virtual Vault",
    subTitle: "React, CSS",
    code: "zKYbmP"
  }, {
    title: "Micro Control Unit",
    subTitle: "CSS",
    code: "Kgqbgp"
  }, {
    title: "Menu animation",
    subTitle: "CSS",
    code: "pEjEOR"
  }];

  return formatPens(pens);
}

function formatPens(pens) {
  var formattedPens = [];
  pens.forEach(function (pen) {
    formattedPens.push({
      title: pen.title,
      subTitle: pen.subTitle,
      code: pen.code,
      url: "//codepen.io/danny_pule/embed/" + pen.code + "/?height=800&theme-id=14066&default-tab=result&embed-version=2"
    });
  });
  return formattedPens;
}
// CONCATENATED MODULE: ./components/Home/Codepens.jsx



var Codepens_Projects = function Projects() {
  return external__react__default.a.createElement(
    "div",
    { className: "codepens-section" },
    external__react__default.a.createElement(
      "div",
      { className: "codepens-header" },
      external__react__default.a.createElement(
        "h1",
        null,
        "~ Codepens ~"
      )
    ),
    codepens.map(function (pen, key) {
      return external__react__default.a.createElement(
        "div",
        { className: "codepen-item", key: key },
        external__react__default.a.createElement(
          "div",
          { className: "codepen-item-header" },
          external__react__default.a.createElement(
            "h2",
            null,
            pen.title
          ),
          external__react__default.a.createElement(
            "h5",
            null,
            pen.subTitle
          )
        ),
        external__react__default.a.createElement(
          "div",
          { className: "codepen-item-body" },
          external__react__default.a.createElement("iframe", {
            height: "800",
            scrolling: "no",
            title: pen.title,
            src: pen.url,
            frameBorder: "no",
            allowFullScreen: "true"
          })
        )
      );
    })
  );
};

/* harmony default export */ var Codepens = (Codepens_Projects);
// CONCATENATED MODULE: ./components/Home/Footer.jsx

var Footer_Footer = function Footer() {
  return external__react__default.a.createElement(
    "div",
    { className: "credits-section" },
    external__react__default.a.createElement("span", null),
    external__react__default.a.createElement(
      "span",
      null,
      "\xA9\uFE0F ",
      new Date().getFullYear()
    )
  );
};

/* harmony default export */ var Home_Footer = (Footer_Footer);
// CONCATENATED MODULE: ./components/Home/Bio.jsx

var Bio_Bio = function Bio() {
  return external__react__default.a.createElement(
    "div",
    null,
    external__react__default.a.createElement(
      "div",
      { className: "bio" },
      external__react__default.a.createElement("img", {
        src: "/static/images/danny_pule.jpg",
        alt: "Danny Pule - Javascript Engineer"
      }),
      external__react__default.a.createElement(
        "h2",
        null,
        external__react__default.a.createElement(
          "span",
          null,
          "Danny Pule"
        )
      ),
      external__react__default.a.createElement(
        "h5",
        null,
        "Javascript Engineer based in South West London, UK"
      )
    ),
    external__react__default.a.createElement(
      "div",
      { className: "site-section how-i-do" },
      external__react__default.a.createElement(
        "div",
        { className: "section-inner" },
        external__react__default.a.createElement(
          "h1",
          null,
          "~ About ~"
        ),
        external__react__default.a.createElement(
          "p",
          null,
          "When I'm not building something or learning about some new Web technology you can find me scrolling through Dribbble.com appreciating the designs contained therein."
        )
      )
    ),
    external__react__default.a.createElement(
      "div",
      { className: "site-section skillz" },
      external__react__default.a.createElement(
        "div",
        { className: "section-inner" },
        external__react__default.a.createElement(
          "div",
          null,
          external__react__default.a.createElement(
            "h1",
            null,
            "~ Frontend Skills ~"
          ),
          external__react__default.a.createElement(
            "p",
            null,
            "React, Redux, Webpack,"
          ),
          external__react__default.a.createElement(
            "p",
            null,
            "HTML, CSS,"
          ),
          external__react__default.a.createElement(
            "p",
            null,
            "Angular 2+, Typescript,"
          ),
          external__react__default.a.createElement(
            "p",
            null,
            "Rx/JS, Modern Javascript"
          ),
          external__react__default.a.createElement("br", null),
          external__react__default.a.createElement(
            "h1",
            null,
            "~ Backend Skills ~"
          ),
          external__react__default.a.createElement(
            "p",
            null,
            "Node.js, Postgres,"
          ),
          external__react__default.a.createElement(
            "p",
            null,
            "Heroku, Docker"
          )
        )
      )
    )
  );
};

/* harmony default export */ var Home_Bio = (Bio_Bio);
// CONCATENATED MODULE: ./components/Home/Home.jsx






var Home_Home = function Home() {
  return external__react__default.a.createElement(
    'div',
    { className: 'Home' },
    external__react__default.a.createElement(Home_Bio, null),
    external__react__default.a.createElement(Home_Projects, null),
    external__react__default.a.createElement(Codepens, null),
    external__react__default.a.createElement(Home_Footer, null)
  );
};

/* harmony default export */ var components_Home_Home = (Home_Home);
// EXTERNAL MODULE: ./styles/styles.scss
var styles = __webpack_require__(10);
var styles_default = /*#__PURE__*/__webpack_require__.n(styles);

// CONCATENATED MODULE: ./pages/index.jsx




/* harmony default export */ var pages = __webpack_exports__["default"] = (function () {
  return external__react__default.a.createElement(components_Home_Home, null);
});

/***/ }),
/* 10 */
/***/ (function(module, exports) {



/***/ })
/******/ ]);