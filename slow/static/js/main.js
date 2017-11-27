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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

__webpack_require__(2);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Particle = function () {
  function Particle(x, y) {
    var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "#FFF";

    _classCallCheck(this, Particle);

    this.x = x;
    this.y = y;
    this.r = Math.random() * 5;
    this.color = color;
    this.xSpeed = Math.random();
    this.ySpeed = Math.random();
    this.scale = 1;
  }

  _createClass(Particle, [{
    key: 'drawParticle',
    value: function drawParticle(ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, 360);
      ctx.closePath();
      ctx.fillStyle = this.color;
      ctx.shadowColor = '#FFF';
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      ctx.shadowBlur = 10;
      ctx.fill();
    }
  }, {
    key: 'drawLine',
    value: function drawLine(ctx, particle) {
      var dx = this.x - particle.x;
      var dy = this.y - particle.y;
      var d = Math.sqrt(dx * dx + dy * dy);

      if (d < 150) {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(particle.x, particle.y);
        ctx.closePath();
        ctx.strokeStyle = 'rgba(200, 200, 200, .2)';
        ctx.stroke();
      }
    }
    // 粒子的移动，必须在屏幕范围内

  }, {
    key: 'move',
    value: function move(w, h) {
      this.xSpeed = this.x < w && this.x > 0 ? this.xSpeed : -this.xSpeed;
      this.ySpeed = this.y < h && this.y > 0 ? this.ySpeed : -this.ySpeed;
      this.x += this.xSpeed / 2;
      this.y += this.ySpeed / 2;
    }
  }]);

  return Particle;
}();

var CurrParticle = function (_Particle) {
  _inherits(CurrParticle, _Particle);

  function CurrParticle(x, y) {
    _classCallCheck(this, CurrParticle);

    var _this = _possibleConstructorReturn(this, (CurrParticle.__proto__ || Object.getPrototypeOf(CurrParticle)).call(this, x, y));

    _this.r = 2;
    return _this;
  }

  _createClass(CurrParticle, [{
    key: 'drawCurrParticle',
    value: function drawCurrParticle(ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, 360);
      ctx.closePath();
      ctx.fillStyle = 'rgba(204, 20, 204,.3)';
      ctx.fill();
    }
  }, {
    key: 'mouseControl',
    value: function mouseControl() {
      var _this2 = this;

      window.onmousemove = function (e) {
        _this2.x = e.clientX;
        _this2.y = e.clientY;
      };
    }
  }]);

  return CurrParticle;
}(Particle);

var ParticlesCanvas = function () {
  function ParticlesCanvas(_canvas, w, h, num) {
    _classCallCheck(this, ParticlesCanvas);

    this.ctx = _canvas.getContext('2d');
    this.w = w;
    this.h = h;
    this.num = num;
    this.particles = [];
    this.currParticle = new CurrParticle(0, 0);
  }

  _createClass(ParticlesCanvas, [{
    key: 'init',
    value: function init() {
      for (var i = 0; i < this.num; i++) {
        this.particles.push(new Particle(Math.random() * this.w, Math.random() * this.h));
      }
      this.draw();
      this.currParticle.mouseControl();
    }
  }, {
    key: 'draw',
    value: function draw() {
      var ctx = this.ctx;
      var particles = this.particles;
      var currParticle = this.currParticle;
      var w = this.w;
      var h = this.h;
      var num = this.num;
      (function _draw() {
        ctx.clearRect(0, 0, w, h);
        for (var i = 0; i < num; i++) {
          particles[i].move(w, h);
          particles[i].drawParticle(ctx);
          for (var j = 0; j < num - 1; j++) {
            // particles[i].drawLine(ctx, particles[j + 1])
          }
        }
        if (currParticle.x) {
          currParticle.drawCurrParticle(ctx);
          for (var _i = 0; _i < num; _i++) {
            currParticle.drawLine(ctx, particles[_i]);
          }
        }
        requestAnimationFrame(_draw);
      })();
    }
  }]);

  return ParticlesCanvas;
}();

var Slow = function (_Particle2) {
  _inherits(Slow, _Particle2);

  function Slow(x, y, color) {
    _classCallCheck(this, Slow);

    var _this3 = _possibleConstructorReturn(this, (Slow.__proto__ || Object.getPrototypeOf(Slow)).call(this, x, y, color));

    _this3.r = Math.random() * 10;
    _this3.ySpeed = Math.random() + 1;
    return _this3;
  }

  _createClass(Slow, [{
    key: 'move',
    value: function move(w, h) {
      this.y = this.y > h ? (this.x = Math.random() * w, -100) : this.y;
      // console.log(this.y)
      this.x -= this.xSpeed / 2;
      this.y += this.ySpeed / 2;
    }
  }]);

  return Slow;
}(Particle);

var SlowCanvas = function () {
  function SlowCanvas(_canvas, w, h, num) {
    _classCallCheck(this, SlowCanvas);

    this.ctx = _canvas.getContext('2d');
    this.w = w;
    this.h = h;
    this.slows = [];
    this.num = num;
  }

  _createClass(SlowCanvas, [{
    key: 'init',
    value: function init() {
      for (var i = 0; i < this.num; i++) {
        this.slows.push(new Slow(Math.random() * this.w, -100 * i / Math.sqrt(this.num / 2), '#FFF'));
      }
      this.draw();
    }
  }, {
    key: 'draw',
    value: function draw() {
      var ctx = this.ctx;
      var slows = this.slows;
      var num = this.num;
      var w = this.w;
      var h = this.h;(function _draw() {
        ctx.clearRect(0, 0, w, h);
        for (var i = 0; i < num; i++) {
          slows[i].move(w, h);
          slows[i].drawParticle(ctx);
        }
        requestAnimationFrame(_draw);
      })();
    }
  }]);

  return SlowCanvas;
}();

var bgBox = document.querySelector('.bg');
var canvas = bgBox.querySelector('#canvas');
var winW = bgBox.clientWidth;
var winH = document.documentElement.clientHeight;
canvas.width = winW;
canvas.height = winH;
var mySlow = new SlowCanvas(canvas, winW, winH, 200);
mySlow.init();
// let can = new ParticlesCanvas(
//   canvas,
//   winW,
//   winH,
//   250
// )
// can.init()

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);