
/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  });
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from4, except, desc) => {
    if (from4 && typeof from4 === "object" || typeof from4 === "function") {
      for (let key of __getOwnPropNames(from4))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from4[key], enumerable: !(desc = __getOwnPropDesc(from4, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };

  // packages/shared/render/plugins/BaseSiteModules/tram-min.js
  var require_tram_min = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/tram-min.js"() {
      "use strict";
      window.tram = function(a) {
        function b(a2, b2) {
          var c2 = new M.Bare();
          return c2.init(a2, b2);
        }
        function c(a2) {
          return a2.replace(/[A-Z]/g, function(a3) {
            return "-" + a3.toLowerCase();
          });
        }
        function d(a2) {
          var b2 = parseInt(a2.slice(1), 16), c2 = b2 >> 16 & 255, d2 = b2 >> 8 & 255, e2 = 255 & b2;
          return [c2, d2, e2];
        }
        function e(a2, b2, c2) {
          return "#" + (1 << 24 | a2 << 16 | b2 << 8 | c2).toString(16).slice(1);
        }
        function f() {
        }
        function g(a2, b2) {
          j("Type warning: Expected: [" + a2 + "] Got: [" + typeof b2 + "] " + b2);
        }
        function h(a2, b2, c2) {
          j("Units do not match [" + a2 + "]: " + b2 + ", " + c2);
        }
        function i(a2, b2, c2) {
          if (void 0 !== b2 && (c2 = b2), void 0 === a2)
            return c2;
          var d2 = c2;
          return $2.test(a2) || !_.test(a2) ? d2 = parseInt(a2, 10) : _.test(a2) && (d2 = 1e3 * parseFloat(a2)), 0 > d2 && (d2 = 0), d2 === d2 ? d2 : c2;
        }
        function j(a2) {
          U.debug && window && window.console.warn(a2);
        }
        function k(a2) {
          for (var b2 = -1, c2 = a2 ? a2.length : 0, d2 = []; ++b2 < c2; ) {
            var e2 = a2[b2];
            e2 && d2.push(e2);
          }
          return d2;
        }
        var l = function(a2, b2, c2) {
          function d2(a3) {
            return "object" == typeof a3;
          }
          function e2(a3) {
            return "function" == typeof a3;
          }
          function f2() {
          }
          function g2(h2, i2) {
            function j2() {
              var a3 = new k2();
              return e2(a3.init) && a3.init.apply(a3, arguments), a3;
            }
            function k2() {
            }
            i2 === c2 && (i2 = h2, h2 = Object), j2.Bare = k2;
            var l2, m2 = f2[a2] = h2[a2], n2 = k2[a2] = j2[a2] = new f2();
            return n2.constructor = j2, j2.mixin = function(b3) {
              return k2[a2] = j2[a2] = g2(j2, b3)[a2], j2;
            }, j2.open = function(a3) {
              if (l2 = {}, e2(a3) ? l2 = a3.call(j2, n2, m2, j2, h2) : d2(a3) && (l2 = a3), d2(l2))
                for (var c3 in l2)
                  b2.call(l2, c3) && (n2[c3] = l2[c3]);
              return e2(n2.init) || (n2.init = h2), j2;
            }, j2.open(i2);
          }
          return g2;
        }("prototype", {}.hasOwnProperty), m = {
          ease: ["ease", function(a2, b2, c2, d2) {
            var e2 = (a2 /= d2) * a2, f2 = e2 * a2;
            return b2 + c2 * (-2.75 * f2 * e2 + 11 * e2 * e2 + -15.5 * f2 + 8 * e2 + 0.25 * a2);
          }],
          "ease-in": ["ease-in", function(a2, b2, c2, d2) {
            var e2 = (a2 /= d2) * a2, f2 = e2 * a2;
            return b2 + c2 * (-1 * f2 * e2 + 3 * e2 * e2 + -3 * f2 + 2 * e2);
          }],
          "ease-out": ["ease-out", function(a2, b2, c2, d2) {
            var e2 = (a2 /= d2) * a2, f2 = e2 * a2;
            return b2 + c2 * (0.3 * f2 * e2 + -1.6 * e2 * e2 + 2.2 * f2 + -1.8 * e2 + 1.9 * a2);
          }],
          "ease-in-out": ["ease-in-out", function(a2, b2, c2, d2) {
            var e2 = (a2 /= d2) * a2, f2 = e2 * a2;
            return b2 + c2 * (2 * f2 * e2 + -5 * e2 * e2 + 2 * f2 + 2 * e2);
          }],
          linear: ["linear", function(a2, b2, c2, d2) {
            return c2 * a2 / d2 + b2;
          }],
          "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(a2, b2, c2, d2) {
            return c2 * (a2 /= d2) * a2 + b2;
          }],
          "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(a2, b2, c2, d2) {
            return -c2 * (a2 /= d2) * (a2 - 2) + b2;
          }],
          "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(a2, b2, c2, d2) {
            return (a2 /= d2 / 2) < 1 ? c2 / 2 * a2 * a2 + b2 : -c2 / 2 * (--a2 * (a2 - 2) - 1) + b2;
          }],
          "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(a2, b2, c2, d2) {
            return c2 * (a2 /= d2) * a2 * a2 + b2;
          }],
          "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(a2, b2, c2, d2) {
            return c2 * ((a2 = a2 / d2 - 1) * a2 * a2 + 1) + b2;
          }],
          "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(a2, b2, c2, d2) {
            return (a2 /= d2 / 2) < 1 ? c2 / 2 * a2 * a2 * a2 + b2 : c2 / 2 * ((a2 -= 2) * a2 * a2 + 2) + b2;
          }],
          "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(a2, b2, c2, d2) {
            return c2 * (a2 /= d2) * a2 * a2 * a2 + b2;
          }],
          "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(a2, b2, c2, d2) {
            return -c2 * ((a2 = a2 / d2 - 1) * a2 * a2 * a2 - 1) + b2;
          }],
          "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(a2, b2, c2, d2) {
            return (a2 /= d2 / 2) < 1 ? c2 / 2 * a2 * a2 * a2 * a2 + b2 : -c2 / 2 * ((a2 -= 2) * a2 * a2 * a2 - 2) + b2;
          }],
          "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(a2, b2, c2, d2) {
            return c2 * (a2 /= d2) * a2 * a2 * a2 * a2 + b2;
          }],
          "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(a2, b2, c2, d2) {
            return c2 * ((a2 = a2 / d2 - 1) * a2 * a2 * a2 * a2 + 1) + b2;
          }],
          "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(a2, b2, c2, d2) {
            return (a2 /= d2 / 2) < 1 ? c2 / 2 * a2 * a2 * a2 * a2 * a2 + b2 : c2 / 2 * ((a2 -= 2) * a2 * a2 * a2 * a2 + 2) + b2;
          }],
          "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(a2, b2, c2, d2) {
            return -c2 * Math.cos(a2 / d2 * (Math.PI / 2)) + c2 + b2;
          }],
          "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(a2, b2, c2, d2) {
            return c2 * Math.sin(a2 / d2 * (Math.PI / 2)) + b2;
          }],
          "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(a2, b2, c2, d2) {
            return -c2 / 2 * (Math.cos(Math.PI * a2 / d2) - 1) + b2;
          }],
          "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(a2, b2, c2, d2) {
            return 0 === a2 ? b2 : c2 * Math.pow(2, 10 * (a2 / d2 - 1)) + b2;
          }],
          "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(a2, b2, c2, d2) {
            return a2 === d2 ? b2 + c2 : c2 * (-Math.pow(2, -10 * a2 / d2) + 1) + b2;
          }],
          "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(a2, b2, c2, d2) {
            return 0 === a2 ? b2 : a2 === d2 ? b2 + c2 : (a2 /= d2 / 2) < 1 ? c2 / 2 * Math.pow(2, 10 * (a2 - 1)) + b2 : c2 / 2 * (-Math.pow(2, -10 * --a2) + 2) + b2;
          }],
          "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(a2, b2, c2, d2) {
            return -c2 * (Math.sqrt(1 - (a2 /= d2) * a2) - 1) + b2;
          }],
          "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(a2, b2, c2, d2) {
            return c2 * Math.sqrt(1 - (a2 = a2 / d2 - 1) * a2) + b2;
          }],
          "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(a2, b2, c2, d2) {
            return (a2 /= d2 / 2) < 1 ? -c2 / 2 * (Math.sqrt(1 - a2 * a2) - 1) + b2 : c2 / 2 * (Math.sqrt(1 - (a2 -= 2) * a2) + 1) + b2;
          }],
          "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(a2, b2, c2, d2, e2) {
            return void 0 === e2 && (e2 = 1.70158), c2 * (a2 /= d2) * a2 * ((e2 + 1) * a2 - e2) + b2;
          }],
          "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(a2, b2, c2, d2, e2) {
            return void 0 === e2 && (e2 = 1.70158), c2 * ((a2 = a2 / d2 - 1) * a2 * ((e2 + 1) * a2 + e2) + 1) + b2;
          }],
          "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(a2, b2, c2, d2, e2) {
            return void 0 === e2 && (e2 = 1.70158), (a2 /= d2 / 2) < 1 ? c2 / 2 * a2 * a2 * (((e2 *= 1.525) + 1) * a2 - e2) + b2 : c2 / 2 * ((a2 -= 2) * a2 * (((e2 *= 1.525) + 1) * a2 + e2) + 2) + b2;
          }]
        }, n = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
        }, o = document, p = window, q = "bkwld-tram", r = /[\-\.0-9]/g, s = /[A-Z]/, t = "number", u = /^(rgb|#)/, v = /(em|cm|mm|in|pt|pc|px)$/, w = /(em|cm|mm|in|pt|pc|px|%)$/, x = /(deg|rad|turn)$/, y = "unitless", z = /(all|none) 0s ease 0s/, A = /^(width|height)$/, B = " ", C = o.createElement("a"), D = ["Webkit", "Moz", "O", "ms"], E = ["-webkit-", "-moz-", "-o-", "-ms-"], F = function(a2) {
          if (a2 in C.style)
            return {
              dom: a2,
              css: a2
            };
          var b2, c2, d2 = "", e2 = a2.split("-");
          for (b2 = 0; b2 < e2.length; b2++)
            d2 += e2[b2].charAt(0).toUpperCase() + e2[b2].slice(1);
          for (b2 = 0; b2 < D.length; b2++)
            if (c2 = D[b2] + d2, c2 in C.style)
              return {
                dom: c2,
                css: E[b2] + a2
              };
        }, G = b.support = {
          bind: Function.prototype.bind,
          transform: F("transform"),
          transition: F("transition"),
          backface: F("backface-visibility"),
          timing: F("transition-timing-function")
        };
        if (G.transition) {
          var H = G.timing.dom;
          if (C.style[H] = m["ease-in-back"][0], !C.style[H])
            for (var I in n)
              m[I][0] = n[I];
        }
        var J = b.frame = function() {
          var a2 = p.requestAnimationFrame || p.webkitRequestAnimationFrame || p.mozRequestAnimationFrame || p.oRequestAnimationFrame || p.msRequestAnimationFrame;
          return a2 && G.bind ? a2.bind(p) : function(a3) {
            p.setTimeout(a3, 16);
          };
        }(), K = b.now = function() {
          var a2 = p.performance, b2 = a2 && (a2.now || a2.webkitNow || a2.msNow || a2.mozNow);
          return b2 && G.bind ? b2.bind(a2) : Date.now || function() {
            return +/* @__PURE__ */ new Date();
          };
        }(), L = l(function(b2) {
          function d2(a2, b3) {
            var c2 = k(("" + a2).split(B)), d3 = c2[0];
            b3 = b3 || {};
            var e3 = Y[d3];
            if (!e3)
              return j("Unsupported property: " + d3);
            if (!b3.weak || !this.props[d3]) {
              var f3 = e3[0], g3 = this.props[d3];
              return g3 || (g3 = this.props[d3] = new f3.Bare()), g3.init(this.$el, c2, e3, b3), g3;
            }
          }
          function e2(a2, b3, c2) {
            if (a2) {
              var e3 = typeof a2;
              if (b3 || (this.timer && this.timer.destroy(), this.queue = [], this.active = false), "number" == e3 && b3)
                return this.timer = new S({
                  duration: a2,
                  context: this,
                  complete: h2
                }), void (this.active = true);
              if ("string" == e3 && b3) {
                switch (a2) {
                  case "hide":
                    o2.call(this);
                    break;
                  case "stop":
                    l2.call(this);
                    break;
                  case "redraw":
                    p2.call(this);
                    break;
                  default:
                    d2.call(this, a2, c2 && c2[1]);
                }
                return h2.call(this);
              }
              if ("function" == e3)
                return void a2.call(this, this);
              if ("object" == e3) {
                var f3 = 0;
                u2.call(this, a2, function(a3, b4) {
                  a3.span > f3 && (f3 = a3.span), a3.stop(), a3.animate(b4);
                }, function(a3) {
                  "wait" in a3 && (f3 = i(a3.wait, 0));
                }), t2.call(this), f3 > 0 && (this.timer = new S({
                  duration: f3,
                  context: this
                }), this.active = true, b3 && (this.timer.complete = h2));
                var g3 = this, j2 = false, k2 = {};
                J(function() {
                  u2.call(g3, a2, function(a3) {
                    a3.active && (j2 = true, k2[a3.name] = a3.nextStyle);
                  }), j2 && g3.$el.css(k2);
                });
              }
            }
          }
          function f2(a2) {
            a2 = i(a2, 0), this.active ? this.queue.push({
              options: a2
            }) : (this.timer = new S({
              duration: a2,
              context: this,
              complete: h2
            }), this.active = true);
          }
          function g2(a2) {
            return this.active ? (this.queue.push({
              options: a2,
              args: arguments
            }), void (this.timer.complete = h2)) : j("No active transition timer. Use start() or wait() before then().");
          }
          function h2() {
            if (this.timer && this.timer.destroy(), this.active = false, this.queue.length) {
              var a2 = this.queue.shift();
              e2.call(this, a2.options, true, a2.args);
            }
          }
          function l2(a2) {
            this.timer && this.timer.destroy(), this.queue = [], this.active = false;
            var b3;
            "string" == typeof a2 ? (b3 = {}, b3[a2] = 1) : b3 = "object" == typeof a2 && null != a2 ? a2 : this.props, u2.call(this, b3, v2), t2.call(this);
          }
          function m2(a2) {
            l2.call(this, a2), u2.call(this, a2, w2, x2);
          }
          function n2(a2) {
            "string" != typeof a2 && (a2 = "block"), this.el.style.display = a2;
          }
          function o2() {
            l2.call(this), this.el.style.display = "none";
          }
          function p2() {
            this.el.offsetHeight;
          }
          function r2() {
            l2.call(this), a.removeData(this.el, q), this.$el = this.el = null;
          }
          function t2() {
            var a2, b3, c2 = [];
            this.upstream && c2.push(this.upstream);
            for (a2 in this.props)
              b3 = this.props[a2], b3.active && c2.push(b3.string);
            c2 = c2.join(","), this.style !== c2 && (this.style = c2, this.el.style[G.transition.dom] = c2);
          }
          function u2(a2, b3, e3) {
            var f3, g3, h3, i2, j2 = b3 !== v2, k2 = {};
            for (f3 in a2)
              h3 = a2[f3], f3 in Z ? (k2.transform || (k2.transform = {}), k2.transform[f3] = h3) : (s.test(f3) && (f3 = c(f3)), f3 in Y ? k2[f3] = h3 : (i2 || (i2 = {}), i2[f3] = h3));
            for (f3 in k2) {
              if (h3 = k2[f3], g3 = this.props[f3], !g3) {
                if (!j2)
                  continue;
                g3 = d2.call(this, f3);
              }
              b3.call(this, g3, h3);
            }
            e3 && i2 && e3.call(this, i2);
          }
          function v2(a2) {
            a2.stop();
          }
          function w2(a2, b3) {
            a2.set(b3);
          }
          function x2(a2) {
            this.$el.css(a2);
          }
          function y2(a2, c2) {
            b2[a2] = function() {
              return this.children ? A2.call(this, c2, arguments) : (this.el && c2.apply(this, arguments), this);
            };
          }
          function A2(a2, b3) {
            var c2, d3 = this.children.length;
            for (c2 = 0; d3 > c2; c2++)
              a2.apply(this.children[c2], b3);
            return this;
          }
          b2.init = function(b3) {
            if (this.$el = a(b3), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = false, U.keepInherited && !U.fallback) {
              var c2 = W(this.el, "transition");
              c2 && !z.test(c2) && (this.upstream = c2);
            }
            G.backface && U.hideBackface && V(this.el, G.backface.css, "hidden");
          }, y2("add", d2), y2("start", e2), y2("wait", f2), y2("then", g2), y2("next", h2), y2("stop", l2), y2("set", m2), y2("show", n2), y2("hide", o2), y2("redraw", p2), y2("destroy", r2);
        }), M = l(L, function(b2) {
          function c2(b3, c3) {
            var d2 = a.data(b3, q) || a.data(b3, q, new L.Bare());
            return d2.el || d2.init(b3), c3 ? d2.start(c3) : d2;
          }
          b2.init = function(b3, d2) {
            var e2 = a(b3);
            if (!e2.length)
              return this;
            if (1 === e2.length)
              return c2(e2[0], d2);
            var f2 = [];
            return e2.each(function(a2, b4) {
              f2.push(c2(b4, d2));
            }), this.children = f2, this;
          };
        }), N = l(function(a2) {
          function b2() {
            var a3 = this.get();
            this.update("auto");
            var b3 = this.get();
            return this.update(a3), b3;
          }
          function c2(a3, b3, c3) {
            return void 0 !== b3 && (c3 = b3), a3 in m ? a3 : c3;
          }
          function d2(a3) {
            var b3 = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(a3);
            return (b3 ? e(b3[1], b3[2], b3[3]) : a3).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3");
          }
          var f2 = {
            duration: 500,
            ease: "ease",
            delay: 0
          };
          a2.init = function(a3, b3, d3, e2) {
            this.$el = a3, this.el = a3[0];
            var g2 = b3[0];
            d3[2] && (g2 = d3[2]), X[g2] && (g2 = X[g2]), this.name = g2, this.type = d3[1], this.duration = i(b3[1], this.duration, f2.duration), this.ease = c2(b3[2], this.ease, f2.ease), this.delay = i(b3[3], this.delay, f2.delay), this.span = this.duration + this.delay, this.active = false, this.nextStyle = null, this.auto = A.test(this.name), this.unit = e2.unit || this.unit || U.defaultUnit, this.angle = e2.angle || this.angle || U.defaultAngle, U.fallback || e2.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + B + this.duration + "ms" + ("ease" != this.ease ? B + m[this.ease][0] : "") + (this.delay ? B + this.delay + "ms" : ""));
          }, a2.set = function(a3) {
            a3 = this.convert(a3, this.type), this.update(a3), this.redraw();
          }, a2.transition = function(a3) {
            this.active = true, a3 = this.convert(a3, this.type), this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()), this.redraw()), "auto" == a3 && (a3 = b2.call(this))), this.nextStyle = a3;
          }, a2.fallback = function(a3) {
            var c3 = this.el.style[this.name] || this.convert(this.get(), this.type);
            a3 = this.convert(a3, this.type), this.auto && ("auto" == c3 && (c3 = this.convert(this.get(), this.type)), "auto" == a3 && (a3 = b2.call(this))), this.tween = new R({
              from: c3,
              to: a3,
              duration: this.duration,
              delay: this.delay,
              ease: this.ease,
              update: this.update,
              context: this
            });
          }, a2.get = function() {
            return W(this.el, this.name);
          }, a2.update = function(a3) {
            V(this.el, this.name, a3);
          }, a2.stop = function() {
            (this.active || this.nextStyle) && (this.active = false, this.nextStyle = null, V(this.el, this.name, this.get()));
            var a3 = this.tween;
            a3 && a3.context && a3.destroy();
          }, a2.convert = function(a3, b3) {
            if ("auto" == a3 && this.auto)
              return a3;
            var c3, e2 = "number" == typeof a3, f3 = "string" == typeof a3;
            switch (b3) {
              case t:
                if (e2)
                  return a3;
                if (f3 && "" === a3.replace(r, ""))
                  return +a3;
                c3 = "number(unitless)";
                break;
              case u:
                if (f3) {
                  if ("" === a3 && this.original)
                    return this.original;
                  if (b3.test(a3))
                    return "#" == a3.charAt(0) && 7 == a3.length ? a3 : d2(a3);
                }
                c3 = "hex or rgb string";
                break;
              case v:
                if (e2)
                  return a3 + this.unit;
                if (f3 && b3.test(a3))
                  return a3;
                c3 = "number(px) or string(unit)";
                break;
              case w:
                if (e2)
                  return a3 + this.unit;
                if (f3 && b3.test(a3))
                  return a3;
                c3 = "number(px) or string(unit or %)";
                break;
              case x:
                if (e2)
                  return a3 + this.angle;
                if (f3 && b3.test(a3))
                  return a3;
                c3 = "number(deg) or string(angle)";
                break;
              case y:
                if (e2)
                  return a3;
                if (f3 && w.test(a3))
                  return a3;
                c3 = "number(unitless) or string(unit or %)";
            }
            return g(c3, a3), a3;
          }, a2.redraw = function() {
            this.el.offsetHeight;
          };
        }), O = l(N, function(a2, b2) {
          a2.init = function() {
            b2.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), u));
          };
        }), P = l(N, function(a2, b2) {
          a2.init = function() {
            b2.init.apply(this, arguments), this.animate = this.fallback;
          }, a2.get = function() {
            return this.$el[this.name]();
          }, a2.update = function(a3) {
            this.$el[this.name](a3);
          };
        }), Q = l(N, function(a2, b2) {
          function c2(a3, b3) {
            var c3, d2, e2, f2, g2;
            for (c3 in a3)
              f2 = Z[c3], e2 = f2[0], d2 = f2[1] || c3, g2 = this.convert(a3[c3], e2), b3.call(this, d2, g2, e2);
          }
          a2.init = function() {
            b2.init.apply(this, arguments), this.current || (this.current = {}, Z.perspective && U.perspective && (this.current.perspective = U.perspective, V(this.el, this.name, this.style(this.current)), this.redraw()));
          }, a2.set = function(a3) {
            c2.call(this, a3, function(a4, b3) {
              this.current[a4] = b3;
            }), V(this.el, this.name, this.style(this.current)), this.redraw();
          }, a2.transition = function(a3) {
            var b3 = this.values(a3);
            this.tween = new T({
              current: this.current,
              values: b3,
              duration: this.duration,
              delay: this.delay,
              ease: this.ease
            });
            var c3, d2 = {};
            for (c3 in this.current)
              d2[c3] = c3 in b3 ? b3[c3] : this.current[c3];
            this.active = true, this.nextStyle = this.style(d2);
          }, a2.fallback = function(a3) {
            var b3 = this.values(a3);
            this.tween = new T({
              current: this.current,
              values: b3,
              duration: this.duration,
              delay: this.delay,
              ease: this.ease,
              update: this.update,
              context: this
            });
          }, a2.update = function() {
            V(this.el, this.name, this.style(this.current));
          }, a2.style = function(a3) {
            var b3, c3 = "";
            for (b3 in a3)
              c3 += b3 + "(" + a3[b3] + ") ";
            return c3;
          }, a2.values = function(a3) {
            var b3, d2 = {};
            return c2.call(this, a3, function(a4, c3, e2) {
              d2[a4] = c3, void 0 === this.current[a4] && (b3 = 0, ~a4.indexOf("scale") && (b3 = 1), this.current[a4] = this.convert(b3, e2));
            }), d2;
          };
        }), R = l(function(b2) {
          function c2(a2) {
            1 === n2.push(a2) && J(g2);
          }
          function g2() {
            var a2, b3, c3, d2 = n2.length;
            if (d2)
              for (J(g2), b3 = K(), a2 = d2; a2--; )
                c3 = n2[a2], c3 && c3.render(b3);
          }
          function i2(b3) {
            var c3, d2 = a.inArray(b3, n2);
            d2 >= 0 && (c3 = n2.slice(d2 + 1), n2.length = d2, c3.length && (n2 = n2.concat(c3)));
          }
          function j2(a2) {
            return Math.round(a2 * o2) / o2;
          }
          function k2(a2, b3, c3) {
            return e(a2[0] + c3 * (b3[0] - a2[0]), a2[1] + c3 * (b3[1] - a2[1]), a2[2] + c3 * (b3[2] - a2[2]));
          }
          var l2 = {
            ease: m.ease[1],
            from: 0,
            to: 1
          };
          b2.init = function(a2) {
            this.duration = a2.duration || 0, this.delay = a2.delay || 0;
            var b3 = a2.ease || l2.ease;
            m[b3] && (b3 = m[b3][1]), "function" != typeof b3 && (b3 = l2.ease), this.ease = b3, this.update = a2.update || f, this.complete = a2.complete || f, this.context = a2.context || this, this.name = a2.name;
            var c3 = a2.from, d2 = a2.to;
            void 0 === c3 && (c3 = l2.from), void 0 === d2 && (d2 = l2.to), this.unit = a2.unit || "", "number" == typeof c3 && "number" == typeof d2 ? (this.begin = c3, this.change = d2 - c3) : this.format(d2, c3), this.value = this.begin + this.unit, this.start = K(), a2.autoplay !== false && this.play();
          }, b2.play = function() {
            this.active || (this.start || (this.start = K()), this.active = true, c2(this));
          }, b2.stop = function() {
            this.active && (this.active = false, i2(this));
          }, b2.render = function(a2) {
            var b3, c3 = a2 - this.start;
            if (this.delay) {
              if (c3 <= this.delay)
                return;
              c3 -= this.delay;
            }
            if (c3 < this.duration) {
              var d2 = this.ease(c3, 0, 1, this.duration);
              return b3 = this.startRGB ? k2(this.startRGB, this.endRGB, d2) : j2(this.begin + d2 * this.change), this.value = b3 + this.unit, void this.update.call(this.context, this.value);
            }
            b3 = this.endHex || this.begin + this.change, this.value = b3 + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy();
          }, b2.format = function(a2, b3) {
            if (b3 += "", a2 += "", "#" == a2.charAt(0))
              return this.startRGB = d(b3), this.endRGB = d(a2), this.endHex = a2, this.begin = 0, void (this.change = 1);
            if (!this.unit) {
              var c3 = b3.replace(r, ""), e2 = a2.replace(r, "");
              c3 !== e2 && h("tween", b3, a2), this.unit = c3;
            }
            b3 = parseFloat(b3), a2 = parseFloat(a2), this.begin = this.value = b3, this.change = a2 - b3;
          }, b2.destroy = function() {
            this.stop(), this.context = null, this.ease = this.update = this.complete = f;
          };
          var n2 = [], o2 = 1e3;
        }), S = l(R, function(a2) {
          a2.init = function(a3) {
            this.duration = a3.duration || 0, this.complete = a3.complete || f, this.context = a3.context, this.play();
          }, a2.render = function(a3) {
            var b2 = a3 - this.start;
            b2 < this.duration || (this.complete.call(this.context), this.destroy());
          };
        }), T = l(R, function(a2, b2) {
          a2.init = function(a3) {
            this.context = a3.context, this.update = a3.update, this.tweens = [], this.current = a3.current;
            var b3, c2;
            for (b3 in a3.values)
              c2 = a3.values[b3], this.current[b3] !== c2 && this.tweens.push(new R({
                name: b3,
                from: this.current[b3],
                to: c2,
                duration: a3.duration,
                delay: a3.delay,
                ease: a3.ease,
                autoplay: false
              }));
            this.play();
          }, a2.render = function(a3) {
            var b3, c2, d2 = this.tweens.length, e2 = false;
            for (b3 = d2; b3--; )
              c2 = this.tweens[b3], c2.context && (c2.render(a3), this.current[c2.name] = c2.value, e2 = true);
            return e2 ? void (this.update && this.update.call(this.context)) : this.destroy();
          }, a2.destroy = function() {
            if (b2.destroy.call(this), this.tweens) {
              var a3, c2 = this.tweens.length;
              for (a3 = c2; a3--; )
                this.tweens[a3].destroy();
              this.tweens = null, this.current = null;
            }
          };
        }), U = b.config = {
          debug: false,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: false,
          hideBackface: false,
          perspective: "",
          fallback: !G.transition,
          agentTests: []
        };
        b.fallback = function(a2) {
          if (!G.transition)
            return U.fallback = true;
          U.agentTests.push("(" + a2 + ")");
          var b2 = new RegExp(U.agentTests.join("|"), "i");
          U.fallback = b2.test(navigator.userAgent);
        }, b.fallback("6.0.[2-5] Safari"), b.tween = function(a2) {
          return new R(a2);
        }, b.delay = function(a2, b2, c2) {
          return new S({
            complete: b2,
            duration: a2,
            context: c2
          });
        }, a.fn.tram = function(a2) {
          return b.call(null, this, a2);
        };
        var V = a.style, W = a.css, X = {
          transform: G.transform && G.transform.css
        }, Y = {
          color: [O, u],
          background: [O, u, "background-color"],
          "outline-color": [O, u],
          "border-color": [O, u],
          "border-top-color": [O, u],
          "border-right-color": [O, u],
          "border-bottom-color": [O, u],
          "border-left-color": [O, u],
          "border-width": [N, v],
          "border-top-width": [N, v],
          "border-right-width": [N, v],
          "border-bottom-width": [N, v],
          "border-left-width": [N, v],
          "border-spacing": [N, v],
          "letter-spacing": [N, v],
          margin: [N, v],
          "margin-top": [N, v],
          "margin-right": [N, v],
          "margin-bottom": [N, v],
          "margin-left": [N, v],
          padding: [N, v],
          "padding-top": [N, v],
          "padding-right": [N, v],
          "padding-bottom": [N, v],
          "padding-left": [N, v],
          "outline-width": [N, v],
          opacity: [N, t],
          top: [N, w],
          right: [N, w],
          bottom: [N, w],
          left: [N, w],
          "font-size": [N, w],
          "text-indent": [N, w],
          "word-spacing": [N, w],
          width: [N, w],
          "min-width": [N, w],
          "max-width": [N, w],
          height: [N, w],
          "min-height": [N, w],
          "max-height": [N, w],
          "line-height": [N, y],
          "scroll-top": [P, t, "scrollTop"],
          "scroll-left": [P, t, "scrollLeft"]
        }, Z = {};
        G.transform && (Y.transform = [Q], Z = {
          x: [w, "translateX"],
          y: [w, "translateY"],
          rotate: [x],
          rotateX: [x],
          rotateY: [x],
          scale: [t],
          scaleX: [t],
          scaleY: [t],
          skew: [x],
          skewX: [x],
          skewY: [x]
        }), G.transform && G.backface && (Z.z = [w, "translateZ"], Z.rotateZ = [x], Z.scaleZ = [t], Z.perspective = [v]);
        var $2 = /ms/, _ = /s|\./;
        return a.tram = b;
      }(window.jQuery);
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/underscore-custom.js
  var require_underscore_custom = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/underscore-custom.js"(exports, module) {
      "use strict";
      var $2 = window.$;
      var tram = require_tram_min() && $2.tram;
      module.exports = function() {
        var _ = {};
        _.VERSION = "1.6.0-Webflow";
        var breaker = {};
        var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;
        var push = ArrayProto.push, slice = ArrayProto.slice, concat5 = ArrayProto.concat, toString4 = ObjProto.toString, hasOwnProperty4 = ObjProto.hasOwnProperty;
        var nativeForEach = ArrayProto.forEach, nativeMap = ArrayProto.map, nativeReduce = ArrayProto.reduce, nativeReduceRight = ArrayProto.reduceRight, nativeFilter = ArrayProto.filter, nativeEvery = ArrayProto.every, nativeSome = ArrayProto.some, nativeIndexOf = ArrayProto.indexOf, nativeLastIndexOf = ArrayProto.lastIndexOf, nativeIsArray = Array.isArray, nativeKeys = Object.keys, nativeBind = FuncProto.bind;
        var each = _.each = _.forEach = function(obj, iterator, context) {
          if (obj == null)
            return obj;
          if (nativeForEach && obj.forEach === nativeForEach) {
            obj.forEach(iterator, context);
          } else if (obj.length === +obj.length) {
            for (var i = 0, length = obj.length; i < length; i++) {
              if (iterator.call(context, obj[i], i, obj) === breaker)
                return;
            }
          } else {
            var keys = _.keys(obj);
            for (var i = 0, length = keys.length; i < length; i++) {
              if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker)
                return;
            }
          }
          return obj;
        };
        _.map = _.collect = function(obj, iterator, context) {
          var results = [];
          if (obj == null)
            return results;
          if (nativeMap && obj.map === nativeMap)
            return obj.map(iterator, context);
          each(obj, function(value, index, list) {
            results.push(iterator.call(context, value, index, list));
          });
          return results;
        };
        _.find = _.detect = function(obj, predicate, context) {
          var result;
          any(obj, function(value, index, list) {
            if (predicate.call(context, value, index, list)) {
              result = value;
              return true;
            }
          });
          return result;
        };
        _.filter = _.select = function(obj, predicate, context) {
          var results = [];
          if (obj == null)
            return results;
          if (nativeFilter && obj.filter === nativeFilter)
            return obj.filter(predicate, context);
          each(obj, function(value, index, list) {
            if (predicate.call(context, value, index, list))
              results.push(value);
          });
          return results;
        };
        var any = _.some = _.any = function(obj, predicate, context) {
          predicate || (predicate = _.identity);
          var result = false;
          if (obj == null)
            return result;
          if (nativeSome && obj.some === nativeSome)
            return obj.some(predicate, context);
          each(obj, function(value, index, list) {
            if (result || (result = predicate.call(context, value, index, list)))
              return breaker;
          });
          return !!result;
        };
        _.contains = _.include = function(obj, target) {
          if (obj == null)
            return false;
          if (nativeIndexOf && obj.indexOf === nativeIndexOf)
            return obj.indexOf(target) != -1;
          return any(obj, function(value) {
            return value === target;
          });
        };
        _.delay = function(func, wait) {
          var args = slice.call(arguments, 2);
          return setTimeout(function() {
            return func.apply(null, args);
          }, wait);
        };
        _.defer = function(func) {
          return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
        };
        _.throttle = function(func) {
          var wait, args, context;
          return function() {
            if (wait)
              return;
            wait = true;
            args = arguments;
            context = this;
            tram.frame(function() {
              wait = false;
              func.apply(context, args);
            });
          };
        };
        _.debounce = function(func, wait, immediate) {
          var timeout, args, context, timestamp, result;
          var later = function() {
            var last = _.now() - timestamp;
            if (last < wait) {
              timeout = setTimeout(later, wait - last);
            } else {
              timeout = null;
              if (!immediate) {
                result = func.apply(context, args);
                context = args = null;
              }
            }
          };
          return function() {
            context = this;
            args = arguments;
            timestamp = _.now();
            var callNow = immediate && !timeout;
            if (!timeout) {
              timeout = setTimeout(later, wait);
            }
            if (callNow) {
              result = func.apply(context, args);
              context = args = null;
            }
            return result;
          };
        };
        _.defaults = function(obj) {
          if (!_.isObject(obj))
            return obj;
          for (var i = 1, length = arguments.length; i < length; i++) {
            var source = arguments[i];
            for (var prop in source) {
              if (obj[prop] === void 0)
                obj[prop] = source[prop];
            }
          }
          return obj;
        };
        _.keys = function(obj) {
          if (!_.isObject(obj))
            return [];
          if (nativeKeys)
            return nativeKeys(obj);
          var keys = [];
          for (var key in obj)
            if (_.has(obj, key))
              keys.push(key);
          return keys;
        };
        _.has = function(obj, key) {
          return hasOwnProperty4.call(obj, key);
        };
        _.isObject = function(obj) {
          return obj === Object(obj);
        };
        _.now = Date.now || function() {
          return (/* @__PURE__ */ new Date()).getTime();
        };
        _.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g
        };
        var noMatch = /(.)^/;
        var escapes = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029"
        };
        var escapeRegExp = /\\|'|\r|\n|\u2028|\u2029/g;
        var escapeChar = function(match) {
          return "\\" + escapes[match];
        };
        var bareIdentifier = /^\s*(\w|\$)+\s*$/;
        _.template = function(text, settings, oldSettings) {
          if (!settings && oldSettings)
            settings = oldSettings;
          settings = _.defaults({}, settings, _.templateSettings);
          var matcher = RegExp([(settings.escape || noMatch).source, (settings.interpolate || noMatch).source, (settings.evaluate || noMatch).source].join("|") + "|$", "g");
          var index = 0;
          var source = "__p+='";
          text.replace(matcher, function(match, escape5, interpolate, evaluate, offset) {
            source += text.slice(index, offset).replace(escapeRegExp, escapeChar);
            index = offset + match.length;
            if (escape5) {
              source += "'+\n((__t=(" + escape5 + "))==null?'':_.escape(__t))+\n'";
            } else if (interpolate) {
              source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
            } else if (evaluate) {
              source += "';\n" + evaluate + "\n__p+='";
            }
            return match;
          });
          source += "';\n";
          var argument = settings.variable;
          if (argument) {
            if (!bareIdentifier.test(argument))
              throw new Error("variable is not a bare identifier: " + argument);
          } else {
            source = "with(obj||{}){\n" + source + "}\n";
            argument = "obj";
          }
          source = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + source + "return __p;\n";
          var render;
          try {
            render = new Function(settings.variable || "obj", "_", source);
          } catch (e) {
            e.source = source;
            throw e;
          }
          var template = function(data) {
            return render.call(this, data, _);
          };
          template.source = "function(" + argument + "){\n" + source + "}";
          return template;
        };
        return _;
      }();
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-lib.js
  var require_webflow_lib = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-lib.js"(exports, module) {
      "use strict";
      var Webflow = {};
      var modules = {};
      var primary = [];
      var secondary = window.Webflow || [];
      var $2 = window.jQuery;
      var $win = $2(window);
      var $doc = $2(document);
      var isFunction3 = $2.isFunction;
      var _ = Webflow._ = require_underscore_custom();
      var tram = Webflow.tram = require_tram_min() && $2.tram;
      var domready = false;
      var destroyed = false;
      tram.config.hideBackface = false;
      tram.config.keepInherited = true;
      Webflow.define = function(name, factory, options) {
        if (modules[name]) {
          unbindModule(modules[name]);
        }
        var instance = modules[name] = factory($2, _, options) || {};
        bindModule(instance);
        return instance;
      };
      Webflow.require = function(name) {
        return modules[name];
      };
      function bindModule(module2) {
        if (Webflow.env()) {
          isFunction3(module2.design) && $win.on("__wf_design", module2.design);
          isFunction3(module2.preview) && $win.on("__wf_preview", module2.preview);
        }
        isFunction3(module2.destroy) && $win.on("__wf_destroy", module2.destroy);
        if (module2.ready && isFunction3(module2.ready)) {
          addReady(module2);
        }
      }
      function addReady(module2) {
        if (domready) {
          module2.ready();
          return;
        }
        if (_.contains(primary, module2.ready)) {
          return;
        }
        primary.push(module2.ready);
      }
      function unbindModule(module2) {
        isFunction3(module2.design) && $win.off("__wf_design", module2.design);
        isFunction3(module2.preview) && $win.off("__wf_preview", module2.preview);
        isFunction3(module2.destroy) && $win.off("__wf_destroy", module2.destroy);
        if (module2.ready && isFunction3(module2.ready)) {
          removeReady(module2);
        }
      }
      function removeReady(module2) {
        primary = _.filter(primary, function(readyFn) {
          return readyFn !== module2.ready;
        });
      }
      Webflow.push = function(ready) {
        if (domready) {
          isFunction3(ready) && ready();
          return;
        }
        secondary.push(ready);
      };
      Webflow.env = function(mode) {
        var designFlag = window.__wf_design;
        var inApp = typeof designFlag !== "undefined";
        if (!mode) {
          return inApp;
        }
        if (mode === "design") {
          return inApp && designFlag;
        }
        if (mode === "preview") {
          return inApp && !designFlag;
        }
        if (mode === "slug") {
          return inApp && window.__wf_slug;
        }
        if (mode === "editor") {
          return window.WebflowEditor;
        }
        if (mode === "test") {
          return window.__wf_test;
        }
        if (mode === "frame") {
          return window !== window.top;
        }
      };
      var userAgent = navigator.userAgent.toLowerCase();
      var touch = Webflow.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch;
      var chrome = Webflow.env.chrome = /chrome/.test(userAgent) && /Google/.test(navigator.vendor) && parseInt(userAgent.match(/chrome\/(\d+)\./)[1], 10);
      var ios = Webflow.env.ios = /(ipod|iphone|ipad)/.test(userAgent);
      Webflow.env.safari = /safari/.test(userAgent) && !chrome && !ios;
      var touchTarget;
      touch && $doc.on("touchstart mousedown", function(evt) {
        touchTarget = evt.target;
      });
      Webflow.validClick = touch ? function(clickTarget) {
        return clickTarget === touchTarget || $2.contains(clickTarget, touchTarget);
      } : function() {
        return true;
      };
      var resizeEvents = "resize.webflow orientationchange.webflow load.webflow";
      var scrollEvents = "scroll.webflow " + resizeEvents;
      Webflow.resize = eventProxy($win, resizeEvents);
      Webflow.scroll = eventProxy($win, scrollEvents);
      Webflow.redraw = eventProxy();
      function eventProxy(target, types) {
        var handlers = [];
        var proxy = {};
        proxy.up = _.throttle(function(evt) {
          _.each(handlers, function(h) {
            h(evt);
          });
        });
        if (target && types) {
          target.on(types, proxy.up);
        }
        proxy.on = function(handler) {
          if (typeof handler !== "function") {
            return;
          }
          if (_.contains(handlers, handler)) {
            return;
          }
          handlers.push(handler);
        };
        proxy.off = function(handler) {
          if (!arguments.length) {
            handlers = [];
            return;
          }
          handlers = _.filter(handlers, function(h) {
            return h !== handler;
          });
        };
        return proxy;
      }
      Webflow.location = function(url) {
        window.location = url;
      };
      if (Webflow.env()) {
        Webflow.location = function() {
        };
      }
      Webflow.ready = function() {
        domready = true;
        if (destroyed) {
          restoreModules();
        } else {
          _.each(primary, callReady);
        }
        _.each(secondary, callReady);
        Webflow.resize.up();
      };
      function callReady(readyFn) {
        isFunction3(readyFn) && readyFn();
      }
      function restoreModules() {
        destroyed = false;
        _.each(modules, bindModule);
      }
      var deferLoad;
      Webflow.load = function(handler) {
        deferLoad.then(handler);
      };
      function bindLoad() {
        if (deferLoad) {
          deferLoad.reject();
          $win.off("load", deferLoad.resolve);
        }
        deferLoad = new $2.Deferred();
        $win.on("load", deferLoad.resolve);
      }
      Webflow.destroy = function(options) {
        options = options || {};
        destroyed = true;
        $win.triggerHandler("__wf_destroy");
        if (options.domready != null) {
          domready = options.domready;
        }
        _.each(modules, unbindModule);
        Webflow.resize.off();
        Webflow.scroll.off();
        Webflow.redraw.off();
        primary = [];
        secondary = [];
        if (deferLoad.state() === "pending") {
          bindLoad();
        }
      };
      $2(Webflow.ready);
      bindLoad();
      module.exports = window.Webflow = Webflow;
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-brand.js
  var require_webflow_brand = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-brand.js"(exports, module) {
      "use strict";
      var Webflow = require_webflow_lib();
      Webflow.define("brand", module.exports = function($2) {
        var api = {};
        var doc = document;
        var $html = $2("html");
        var $body = $2("body");
        var namespace = ".w-webflow-badge";
        var location = window.location;
        var isPhantom = /PhantomJS/i.test(navigator.userAgent);
        var fullScreenEvents = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";
        var brandElement;
        api.ready = function() {
          var shouldBrand = $html.attr("data-wf-status");
          var publishedDomain = $html.attr("data-wf-domain") || "";
          if (/\.webflow\.io$/i.test(publishedDomain) && location.hostname !== publishedDomain) {
            shouldBrand = true;
          }
          if (shouldBrand && !isPhantom) {
            brandElement = brandElement || createBadge();
            ensureBrand();
            setTimeout(ensureBrand, 500);
            $2(doc).off(fullScreenEvents, onFullScreenChange).on(fullScreenEvents, onFullScreenChange);
          }
        };
        function onFullScreenChange() {
          var fullScreen = doc.fullScreen || doc.mozFullScreen || doc.webkitIsFullScreen || doc.msFullscreenElement || Boolean(doc.webkitFullscreenElement);
          $2(brandElement).attr("style", fullScreen ? "display: none !important;" : "");
        }
        function createBadge() {
          var $brand = $2('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs");
          var $logoArt = $2("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt", "").css({
            marginRight: "4px",
            width: "26px"
          });
          var $logoText = $2("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt", "Made in Webflow");
          $brand.append($logoArt, $logoText);
          return $brand[0];
        }
        function ensureBrand() {
          var found = $body.children(namespace);
          var match = found.length && found.get(0) === brandElement;
          var inEditor = Webflow.env("editor");
          if (match) {
            if (inEditor) {
              found.remove();
            }
            return;
          }
          if (found.length) {
            found.remove();
          }
          if (!inEditor) {
            $body.append(brandElement);
          }
        }
        return api;
      });
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-focus-visible.js
  var require_webflow_focus_visible = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-focus-visible.js"(exports, module) {
      "use strict";
      var Webflow = require_webflow_lib();
      Webflow.define("focus-visible", module.exports = function() {
        function applyFocusVisiblePolyfill(scope) {
          var hadKeyboardEvent = true;
          var hadFocusVisibleRecently = false;
          var hadFocusVisibleRecentlyTimeout = null;
          var inputTypesAllowlist = {
            text: true,
            search: true,
            url: true,
            tel: true,
            email: true,
            password: true,
            number: true,
            date: true,
            month: true,
            week: true,
            time: true,
            datetime: true,
            "datetime-local": true
          };
          function isValidFocusTarget(el) {
            if (el && el !== document && el.nodeName !== "HTML" && el.nodeName !== "BODY" && "classList" in el && "contains" in el.classList) {
              return true;
            }
            return false;
          }
          function focusTriggersKeyboardModality(el) {
            var type = el.type;
            var tagName = el.tagName;
            if (tagName === "INPUT" && inputTypesAllowlist[type] && !el.readOnly) {
              return true;
            }
            if (tagName === "TEXTAREA" && !el.readOnly) {
              return true;
            }
            if (el.isContentEditable) {
              return true;
            }
            return false;
          }
          function addFocusVisibleAttribute(el) {
            if (el.getAttribute("data-wf-focus-visible")) {
              return;
            }
            el.setAttribute("data-wf-focus-visible", "true");
          }
          function removeFocusVisibleAttribute(el) {
            if (!el.getAttribute("data-wf-focus-visible")) {
              return;
            }
            el.removeAttribute("data-wf-focus-visible");
          }
          function onKeyDown(e) {
            if (e.metaKey || e.altKey || e.ctrlKey) {
              return;
            }
            if (isValidFocusTarget(scope.activeElement)) {
              addFocusVisibleAttribute(scope.activeElement);
            }
            hadKeyboardEvent = true;
          }
          function onPointerDown() {
            hadKeyboardEvent = false;
          }
          function onFocus(e) {
            if (!isValidFocusTarget(e.target)) {
              return;
            }
            if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
              addFocusVisibleAttribute(e.target);
            }
          }
          function onBlur(e) {
            if (!isValidFocusTarget(e.target)) {
              return;
            }
            if (e.target.hasAttribute("data-wf-focus-visible")) {
              hadFocusVisibleRecently = true;
              window.clearTimeout(hadFocusVisibleRecentlyTimeout);
              hadFocusVisibleRecentlyTimeout = window.setTimeout(function() {
                hadFocusVisibleRecently = false;
              }, 100);
              removeFocusVisibleAttribute(e.target);
            }
          }
          function onVisibilityChange() {
            if (document.visibilityState === "hidden") {
              if (hadFocusVisibleRecently) {
                hadKeyboardEvent = true;
              }
              addInitialPointerMoveListeners();
            }
          }
          function addInitialPointerMoveListeners() {
            document.addEventListener("mousemove", onInitialPointerMove);
            document.addEventListener("mousedown", onInitialPointerMove);
            document.addEventListener("mouseup", onInitialPointerMove);
            document.addEventListener("pointermove", onInitialPointerMove);
            document.addEventListener("pointerdown", onInitialPointerMove);
            document.addEventListener("pointerup", onInitialPointerMove);
            document.addEventListener("touchmove", onInitialPointerMove);
            document.addEventListener("touchstart", onInitialPointerMove);
            document.addEventListener("touchend", onInitialPointerMove);
          }
          function removeInitialPointerMoveListeners() {
            document.removeEventListener("mousemove", onInitialPointerMove);
            document.removeEventListener("mousedown", onInitialPointerMove);
            document.removeEventListener("mouseup", onInitialPointerMove);
            document.removeEventListener("pointermove", onInitialPointerMove);
            document.removeEventListener("pointerdown", onInitialPointerMove);
            document.removeEventListener("pointerup", onInitialPointerMove);
            document.removeEventListener("touchmove", onInitialPointerMove);
            document.removeEventListener("touchstart", onInitialPointerMove);
            document.removeEventListener("touchend", onInitialPointerMove);
          }
          function onInitialPointerMove(e) {
            if (e.target.nodeName && e.target.nodeName.toLowerCase() === "html") {
              return;
            }
            hadKeyboardEvent = false;
            removeInitialPointerMoveListeners();
          }
          document.addEventListener("keydown", onKeyDown, true);
          document.addEventListener("mousedown", onPointerDown, true);
          document.addEventListener("pointerdown", onPointerDown, true);
          document.addEventListener("touchstart", onPointerDown, true);
          document.addEventListener("visibilitychange", onVisibilityChange, true);
          addInitialPointerMoveListeners();
          scope.addEventListener("focus", onFocus, true);
          scope.addEventListener("blur", onBlur, true);
        }
        function ready() {
          if (typeof document !== "undefined") {
            try {
              document.querySelector(":focus-visible");
            } catch (e) {
              applyFocusVisiblePolyfill(document);
            }
          }
        }
        return {
          ready
        };
      });
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-focus.js
  var require_webflow_focus = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-focus.js"(exports, module) {
      "use strict";
      var Webflow = require_webflow_lib();
      Webflow.define("focus", module.exports = function() {
        var capturedEvents = [];
        var capturing = false;
        function captureEvent(e) {
          if (capturing) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            capturedEvents.unshift(e);
          }
        }
        function isPolyfilledFocusEvent(e) {
          var el = e.target;
          var tag = el.tagName;
          return /^a$/i.test(tag) && el.href != null || // (A)
          /^(button|textarea)$/i.test(tag) && el.disabled !== true || // (B) (C)
          /^input$/i.test(tag) && /^(button|reset|submit|radio|checkbox)$/i.test(el.type) && !el.disabled || // (D)
          !/^(button|input|textarea|select|a)$/i.test(tag) && !Number.isNaN(Number.parseFloat(el.tabIndex)) || // (E)
          /^audio$/i.test(tag) || // (F)
          /^video$/i.test(tag) && el.controls === true;
        }
        function handler(e) {
          if (isPolyfilledFocusEvent(e)) {
            capturing = true;
            setTimeout(() => {
              capturing = false;
              e.target.focus();
              while (capturedEvents.length > 0) {
                var event = capturedEvents.pop();
                event.target.dispatchEvent(new MouseEvent(event.type, event));
              }
            }, 0);
          }
        }
        function ready() {
          if (typeof document !== "undefined" && document.body.hasAttribute("data-wf-focus-within") && Webflow.env.safari) {
            document.addEventListener("mousedown", handler, true);
            document.addEventListener("mouseup", captureEvent, true);
            document.addEventListener("click", captureEvent, true);
          }
        }
        return {
          ready
        };
      });
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-ix-events.js
  var require_webflow_ix_events = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-ix-events.js"(exports, module) {
      "use strict";
      var $2 = window.jQuery;
      var api = {};
      var eventQueue = [];
      var namespace = ".w-ix";
      var eventTriggers = {
        reset: function(i, el) {
          el.__wf_intro = null;
        },
        intro: function(i, el) {
          if (el.__wf_intro) {
            return;
          }
          el.__wf_intro = true;
          $2(el).triggerHandler(api.types.INTRO);
        },
        outro: function(i, el) {
          if (!el.__wf_intro) {
            return;
          }
          el.__wf_intro = null;
          $2(el).triggerHandler(api.types.OUTRO);
        }
      };
      api.triggers = {};
      api.types = {
        INTRO: "w-ix-intro" + namespace,
        OUTRO: "w-ix-outro" + namespace
      };
      api.init = function() {
        var count = eventQueue.length;
        for (var i = 0; i < count; i++) {
          var memo = eventQueue[i];
          memo[0](0, memo[1]);
        }
        eventQueue = [];
        $2.extend(api.triggers, eventTriggers);
      };
      api.async = function() {
        for (var key in eventTriggers) {
          var func = eventTriggers[key];
          if (!eventTriggers.hasOwnProperty(key)) {
            continue;
          }
          api.triggers[key] = function(i, el) {
            eventQueue.push([func, el]);
          };
        }
      };
      api.async();
      module.exports = api;
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-ix2-events.js
  var require_webflow_ix2_events = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-ix2-events.js"(exports, module) {
      "use strict";
      var IXEvents = require_webflow_ix_events();
      function dispatchCustomEvent2(element, eventName) {
        var event = document.createEvent("CustomEvent");
        event.initCustomEvent(eventName, true, true, null);
        element.dispatchEvent(event);
      }
      var $2 = window.jQuery;
      var api = {};
      var namespace = ".w-ix";
      var eventTriggers = {
        reset: function(i, el) {
          IXEvents.triggers.reset(i, el);
        },
        intro: function(i, el) {
          IXEvents.triggers.intro(i, el);
          dispatchCustomEvent2(el, "COMPONENT_ACTIVE");
        },
        outro: function(i, el) {
          IXEvents.triggers.outro(i, el);
          dispatchCustomEvent2(el, "COMPONENT_INACTIVE");
        }
      };
      api.triggers = {};
      api.types = {
        INTRO: "w-ix-intro" + namespace,
        OUTRO: "w-ix-outro" + namespace
      };
      $2.extend(api.triggers, eventTriggers);
      module.exports = api;
    }
  });

  // node_modules/@babel/runtime/helpers/typeof.js
  var require_typeof = __commonJS({
    "node_modules/@babel/runtime/helpers/typeof.js"(exports, module) {
      function _typeof(obj) {
        "@babel/helpers - typeof";
        return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
          return typeof obj2;
        } : function(obj2) {
          return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(obj);
      }
      module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/interopRequireWildcard.js
  var require_interopRequireWildcard = __commonJS({
    "node_modules/@babel/runtime/helpers/interopRequireWildcard.js"(exports, module) {
      var _typeof = require_typeof()["default"];
      function _getRequireWildcardCache(nodeInterop) {
        if (typeof WeakMap !== "function")
          return null;
        var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
        var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
        return (_getRequireWildcardCache = function _getRequireWildcardCache2(nodeInterop2) {
          return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
        })(nodeInterop);
      }
      function _interopRequireWildcard(obj, nodeInterop) {
        if (!nodeInterop && obj && obj.__esModule) {
          return obj;
        }
        if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
          return {
            "default": obj
          };
        }
        var cache = _getRequireWildcardCache(nodeInterop);
        if (cache && cache.has(obj)) {
          return cache.get(obj);
        }
        var newObj = {};
        var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var key in obj) {
          if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
        newObj["default"] = obj;
        if (cache) {
          cache.set(obj, newObj);
        }
        return newObj;
      }
      module.exports = _interopRequireWildcard, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/interopRequireDefault.js
  var require_interopRequireDefault = __commonJS({
    "node_modules/@babel/runtime/helpers/interopRequireDefault.js"(exports, module) {
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }
      module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/core-js/internals/global.js
  var require_global = __commonJS({
    "node_modules/core-js/internals/global.js"(exports, module) {
      var check = function(it) {
        return it && it.Math == Math && it;
      };
      module.exports = // eslint-disable-next-line es/no-global-this -- safe
      check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
      check(typeof self == "object" && self) || check(typeof global == "object" && global) || // eslint-disable-next-line no-new-func -- fallback
      function() {
        return this;
      }() || Function("return this")();
    }
  });

  // node_modules/core-js/internals/fails.js
  var require_fails = __commonJS({
    "node_modules/core-js/internals/fails.js"(exports, module) {
      module.exports = function(exec) {
        try {
          return !!exec();
        } catch (error) {
          return true;
        }
      };
    }
  });

  // node_modules/core-js/internals/descriptors.js
  var require_descriptors = __commonJS({
    "node_modules/core-js/internals/descriptors.js"(exports, module) {
      var fails = require_fails();
      module.exports = !fails(function() {
        return Object.defineProperty({}, 1, { get: function() {
          return 7;
        } })[1] != 7;
      });
    }
  });

  // node_modules/core-js/internals/function-call.js
  var require_function_call = __commonJS({
    "node_modules/core-js/internals/function-call.js"(exports, module) {
      var call = Function.prototype.call;
      module.exports = call.bind ? call.bind(call) : function() {
        return call.apply(call, arguments);
      };
    }
  });

  // node_modules/core-js/internals/object-property-is-enumerable.js
  var require_object_property_is_enumerable = __commonJS({
    "node_modules/core-js/internals/object-property-is-enumerable.js"(exports) {
      "use strict";
      var $propertyIsEnumerable = {}.propertyIsEnumerable;
      var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);
      exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
        var descriptor = getOwnPropertyDescriptor(this, V);
        return !!descriptor && descriptor.enumerable;
      } : $propertyIsEnumerable;
    }
  });

  // node_modules/core-js/internals/create-property-descriptor.js
  var require_create_property_descriptor = __commonJS({
    "node_modules/core-js/internals/create-property-descriptor.js"(exports, module) {
      module.exports = function(bitmap, value) {
        return {
          enumerable: !(bitmap & 1),
          configurable: !(bitmap & 2),
          writable: !(bitmap & 4),
          value
        };
      };
    }
  });

  // node_modules/core-js/internals/function-uncurry-this.js
  var require_function_uncurry_this = __commonJS({
    "node_modules/core-js/internals/function-uncurry-this.js"(exports, module) {
      var FunctionPrototype = Function.prototype;
      var bind2 = FunctionPrototype.bind;
      var call = FunctionPrototype.call;
      var callBind = bind2 && bind2.bind(call);
      module.exports = bind2 ? function(fn) {
        return fn && callBind(call, fn);
      } : function(fn) {
        return fn && function() {
          return call.apply(fn, arguments);
        };
      };
    }
  });

  // node_modules/core-js/internals/classof-raw.js
  var require_classof_raw = __commonJS({
    "node_modules/core-js/internals/classof-raw.js"(exports, module) {
      var uncurryThis = require_function_uncurry_this();
      var toString4 = uncurryThis({}.toString);
      var stringSlice = uncurryThis("".slice);
      module.exports = function(it) {
        return stringSlice(toString4(it), 8, -1);
      };
    }
  });

  // node_modules/core-js/internals/indexed-object.js
  var require_indexed_object = __commonJS({
    "node_modules/core-js/internals/indexed-object.js"(exports, module) {
      var global2 = require_global();
      var uncurryThis = require_function_uncurry_this();
      var fails = require_fails();
      var classof = require_classof_raw();
      var Object2 = global2.Object;
      var split4 = uncurryThis("".split);
      module.exports = fails(function() {
        return !Object2("z").propertyIsEnumerable(0);
      }) ? function(it) {
        return classof(it) == "String" ? split4(it, "") : Object2(it);
      } : Object2;
    }
  });

  // node_modules/core-js/internals/require-object-coercible.js
  var require_require_object_coercible = __commonJS({
    "node_modules/core-js/internals/require-object-coercible.js"(exports, module) {
      var global2 = require_global();
      var TypeError2 = global2.TypeError;
      module.exports = function(it) {
        if (it == void 0)
          throw TypeError2("Can't call method on " + it);
        return it;
      };
    }
  });

  // node_modules/core-js/internals/to-indexed-object.js
  var require_to_indexed_object = __commonJS({
    "node_modules/core-js/internals/to-indexed-object.js"(exports, module) {
      var IndexedObject = require_indexed_object();
      var requireObjectCoercible = require_require_object_coercible();
      module.exports = function(it) {
        return IndexedObject(requireObjectCoercible(it));
      };
    }
  });

  // node_modules/core-js/internals/is-callable.js
  var require_is_callable = __commonJS({
    "node_modules/core-js/internals/is-callable.js"(exports, module) {
      module.exports = function(argument) {
        return typeof argument == "function";
      };
    }
  });

  // node_modules/core-js/internals/is-object.js
  var require_is_object = __commonJS({
    "node_modules/core-js/internals/is-object.js"(exports, module) {
      var isCallable = require_is_callable();
      module.exports = function(it) {
        return typeof it == "object" ? it !== null : isCallable(it);
      };
    }
  });

  // node_modules/core-js/internals/get-built-in.js
  var require_get_built_in = __commonJS({
    "node_modules/core-js/internals/get-built-in.js"(exports, module) {
      var global2 = require_global();
      var isCallable = require_is_callable();
      var aFunction = function(argument) {
        return isCallable(argument) ? argument : void 0;
      };
      module.exports = function(namespace, method) {
        return arguments.length < 2 ? aFunction(global2[namespace]) : global2[namespace] && global2[namespace][method];
      };
    }
  });

  // node_modules/core-js/internals/object-is-prototype-of.js
  var require_object_is_prototype_of = __commonJS({
    "node_modules/core-js/internals/object-is-prototype-of.js"(exports, module) {
      var uncurryThis = require_function_uncurry_this();
      module.exports = uncurryThis({}.isPrototypeOf);
    }
  });

  // node_modules/core-js/internals/engine-user-agent.js
  var require_engine_user_agent = __commonJS({
    "node_modules/core-js/internals/engine-user-agent.js"(exports, module) {
      var getBuiltIn = require_get_built_in();
      module.exports = getBuiltIn("navigator", "userAgent") || "";
    }
  });

  // node_modules/core-js/internals/engine-v8-version.js
  var require_engine_v8_version = __commonJS({
    "node_modules/core-js/internals/engine-v8-version.js"(exports, module) {
      var global2 = require_global();
      var userAgent = require_engine_user_agent();
      var process2 = global2.process;
      var Deno = global2.Deno;
      var versions = process2 && process2.versions || Deno && Deno.version;
      var v8 = versions && versions.v8;
      var match;
      var version2;
      if (v8) {
        match = v8.split(".");
        version2 = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
      }
      if (!version2 && userAgent) {
        match = userAgent.match(/Edge\/(\d+)/);
        if (!match || match[1] >= 74) {
          match = userAgent.match(/Chrome\/(\d+)/);
          if (match)
            version2 = +match[1];
        }
      }
      module.exports = version2;
    }
  });

  // node_modules/core-js/internals/native-symbol.js
  var require_native_symbol = __commonJS({
    "node_modules/core-js/internals/native-symbol.js"(exports, module) {
      var V8_VERSION = require_engine_v8_version();
      var fails = require_fails();
      module.exports = !!Object.getOwnPropertySymbols && !fails(function() {
        var symbol = Symbol();
        return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
        !Symbol.sham && V8_VERSION && V8_VERSION < 41;
      });
    }
  });

  // node_modules/core-js/internals/use-symbol-as-uid.js
  var require_use_symbol_as_uid = __commonJS({
    "node_modules/core-js/internals/use-symbol-as-uid.js"(exports, module) {
      var NATIVE_SYMBOL = require_native_symbol();
      module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
    }
  });

  // node_modules/core-js/internals/is-symbol.js
  var require_is_symbol = __commonJS({
    "node_modules/core-js/internals/is-symbol.js"(exports, module) {
      var global2 = require_global();
      var getBuiltIn = require_get_built_in();
      var isCallable = require_is_callable();
      var isPrototypeOf = require_object_is_prototype_of();
      var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
      var Object2 = global2.Object;
      module.exports = USE_SYMBOL_AS_UID ? function(it) {
        return typeof it == "symbol";
      } : function(it) {
        var $Symbol = getBuiltIn("Symbol");
        return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, Object2(it));
      };
    }
  });

  // node_modules/core-js/internals/try-to-string.js
  var require_try_to_string = __commonJS({
    "node_modules/core-js/internals/try-to-string.js"(exports, module) {
      var global2 = require_global();
      var String2 = global2.String;
      module.exports = function(argument) {
        try {
          return String2(argument);
        } catch (error) {
          return "Object";
        }
      };
    }
  });

  // node_modules/core-js/internals/a-callable.js
  var require_a_callable = __commonJS({
    "node_modules/core-js/internals/a-callable.js"(exports, module) {
      var global2 = require_global();
      var isCallable = require_is_callable();
      var tryToString = require_try_to_string();
      var TypeError2 = global2.TypeError;
      module.exports = function(argument) {
        if (isCallable(argument))
          return argument;
        throw TypeError2(tryToString(argument) + " is not a function");
      };
    }
  });

  // node_modules/core-js/internals/get-method.js
  var require_get_method = __commonJS({
    "node_modules/core-js/internals/get-method.js"(exports, module) {
      var aCallable = require_a_callable();
      module.exports = function(V, P) {
        var func = V[P];
        return func == null ? void 0 : aCallable(func);
      };
    }
  });

  // node_modules/core-js/internals/ordinary-to-primitive.js
  var require_ordinary_to_primitive = __commonJS({
    "node_modules/core-js/internals/ordinary-to-primitive.js"(exports, module) {
      var global2 = require_global();
      var call = require_function_call();
      var isCallable = require_is_callable();
      var isObject2 = require_is_object();
      var TypeError2 = global2.TypeError;
      module.exports = function(input, pref) {
        var fn, val;
        if (pref === "string" && isCallable(fn = input.toString) && !isObject2(val = call(fn, input)))
          return val;
        if (isCallable(fn = input.valueOf) && !isObject2(val = call(fn, input)))
          return val;
        if (pref !== "string" && isCallable(fn = input.toString) && !isObject2(val = call(fn, input)))
          return val;
        throw TypeError2("Can't convert object to primitive value");
      };
    }
  });

  // node_modules/core-js/internals/is-pure.js
  var require_is_pure = __commonJS({
    "node_modules/core-js/internals/is-pure.js"(exports, module) {
      module.exports = false;
    }
  });

  // node_modules/core-js/internals/set-global.js
  var require_set_global = __commonJS({
    "node_modules/core-js/internals/set-global.js"(exports, module) {
      var global2 = require_global();
      var defineProperty = Object.defineProperty;
      module.exports = function(key, value) {
        try {
          defineProperty(global2, key, { value, configurable: true, writable: true });
        } catch (error) {
          global2[key] = value;
        }
        return value;
      };
    }
  });

  // node_modules/core-js/internals/shared-store.js
  var require_shared_store = __commonJS({
    "node_modules/core-js/internals/shared-store.js"(exports, module) {
      var global2 = require_global();
      var setGlobal = require_set_global();
      var SHARED = "__core-js_shared__";
      var store = global2[SHARED] || setGlobal(SHARED, {});
      module.exports = store;
    }
  });

  // node_modules/core-js/internals/shared.js
  var require_shared = __commonJS({
    "node_modules/core-js/internals/shared.js"(exports, module) {
      var IS_PURE = require_is_pure();
      var store = require_shared_store();
      (module.exports = function(key, value) {
        return store[key] || (store[key] = value !== void 0 ? value : {});
      })("versions", []).push({
        version: "3.19.0",
        mode: IS_PURE ? "pure" : "global",
        copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)"
      });
    }
  });

  // node_modules/core-js/internals/to-object.js
  var require_to_object = __commonJS({
    "node_modules/core-js/internals/to-object.js"(exports, module) {
      var global2 = require_global();
      var requireObjectCoercible = require_require_object_coercible();
      var Object2 = global2.Object;
      module.exports = function(argument) {
        return Object2(requireObjectCoercible(argument));
      };
    }
  });

  // node_modules/core-js/internals/has-own-property.js
  var require_has_own_property = __commonJS({
    "node_modules/core-js/internals/has-own-property.js"(exports, module) {
      var uncurryThis = require_function_uncurry_this();
      var toObject = require_to_object();
      var hasOwnProperty4 = uncurryThis({}.hasOwnProperty);
      module.exports = Object.hasOwn || function hasOwn3(it, key) {
        return hasOwnProperty4(toObject(it), key);
      };
    }
  });

  // node_modules/core-js/internals/uid.js
  var require_uid = __commonJS({
    "node_modules/core-js/internals/uid.js"(exports, module) {
      var uncurryThis = require_function_uncurry_this();
      var id = 0;
      var postfix = Math.random();
      var toString4 = uncurryThis(1 .toString);
      module.exports = function(key) {
        return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString4(++id + postfix, 36);
      };
    }
  });

  // node_modules/core-js/internals/well-known-symbol.js
  var require_well_known_symbol = __commonJS({
    "node_modules/core-js/internals/well-known-symbol.js"(exports, module) {
      var global2 = require_global();
      var shared = require_shared();
      var hasOwn3 = require_has_own_property();
      var uid = require_uid();
      var NATIVE_SYMBOL = require_native_symbol();
      var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
      var WellKnownSymbolsStore = shared("wks");
      var Symbol2 = global2.Symbol;
      var symbolFor = Symbol2 && Symbol2["for"];
      var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol2 : Symbol2 && Symbol2.withoutSetter || uid;
      module.exports = function(name) {
        if (!hasOwn3(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == "string")) {
          var description = "Symbol." + name;
          if (NATIVE_SYMBOL && hasOwn3(Symbol2, name)) {
            WellKnownSymbolsStore[name] = Symbol2[name];
          } else if (USE_SYMBOL_AS_UID && symbolFor) {
            WellKnownSymbolsStore[name] = symbolFor(description);
          } else {
            WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
          }
        }
        return WellKnownSymbolsStore[name];
      };
    }
  });

  // node_modules/core-js/internals/to-primitive.js
  var require_to_primitive = __commonJS({
    "node_modules/core-js/internals/to-primitive.js"(exports, module) {
      var global2 = require_global();
      var call = require_function_call();
      var isObject2 = require_is_object();
      var isSymbol = require_is_symbol();
      var getMethod = require_get_method();
      var ordinaryToPrimitive = require_ordinary_to_primitive();
      var wellKnownSymbol = require_well_known_symbol();
      var TypeError2 = global2.TypeError;
      var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
      module.exports = function(input, pref) {
        if (!isObject2(input) || isSymbol(input))
          return input;
        var exoticToPrim = getMethod(input, TO_PRIMITIVE);
        var result;
        if (exoticToPrim) {
          if (pref === void 0)
            pref = "default";
          result = call(exoticToPrim, input, pref);
          if (!isObject2(result) || isSymbol(result))
            return result;
          throw TypeError2("Can't convert object to primitive value");
        }
        if (pref === void 0)
          pref = "number";
        return ordinaryToPrimitive(input, pref);
      };
    }
  });

  // node_modules/core-js/internals/to-property-key.js
  var require_to_property_key = __commonJS({
    "node_modules/core-js/internals/to-property-key.js"(exports, module) {
      var toPrimitive = require_to_primitive();
      var isSymbol = require_is_symbol();
      module.exports = function(argument) {
        var key = toPrimitive(argument, "string");
        return isSymbol(key) ? key : key + "";
      };
    }
  });

  // node_modules/core-js/internals/document-create-element.js
  var require_document_create_element = __commonJS({
    "node_modules/core-js/internals/document-create-element.js"(exports, module) {
      var global2 = require_global();
      var isObject2 = require_is_object();
      var document2 = global2.document;
      var EXISTS = isObject2(document2) && isObject2(document2.createElement);
      module.exports = function(it) {
        return EXISTS ? document2.createElement(it) : {};
      };
    }
  });

  // node_modules/core-js/internals/ie8-dom-define.js
  var require_ie8_dom_define = __commonJS({
    "node_modules/core-js/internals/ie8-dom-define.js"(exports, module) {
      var DESCRIPTORS = require_descriptors();
      var fails = require_fails();
      var createElement = require_document_create_element();
      module.exports = !DESCRIPTORS && !fails(function() {
        return Object.defineProperty(createElement("div"), "a", {
          get: function() {
            return 7;
          }
        }).a != 7;
      });
    }
  });

  // node_modules/core-js/internals/object-get-own-property-descriptor.js
  var require_object_get_own_property_descriptor = __commonJS({
    "node_modules/core-js/internals/object-get-own-property-descriptor.js"(exports) {
      var DESCRIPTORS = require_descriptors();
      var call = require_function_call();
      var propertyIsEnumerableModule = require_object_property_is_enumerable();
      var createPropertyDescriptor = require_create_property_descriptor();
      var toIndexedObject = require_to_indexed_object();
      var toPropertyKey = require_to_property_key();
      var hasOwn3 = require_has_own_property();
      var IE8_DOM_DEFINE = require_ie8_dom_define();
      var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
        O = toIndexedObject(O);
        P = toPropertyKey(P);
        if (IE8_DOM_DEFINE)
          try {
            return $getOwnPropertyDescriptor(O, P);
          } catch (error) {
          }
        if (hasOwn3(O, P))
          return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
      };
    }
  });

  // node_modules/core-js/internals/an-object.js
  var require_an_object = __commonJS({
    "node_modules/core-js/internals/an-object.js"(exports, module) {
      var global2 = require_global();
      var isObject2 = require_is_object();
      var String2 = global2.String;
      var TypeError2 = global2.TypeError;
      module.exports = function(argument) {
        if (isObject2(argument))
          return argument;
        throw TypeError2(String2(argument) + " is not an object");
      };
    }
  });

  // node_modules/core-js/internals/object-define-property.js
  var require_object_define_property = __commonJS({
    "node_modules/core-js/internals/object-define-property.js"(exports) {
      var global2 = require_global();
      var DESCRIPTORS = require_descriptors();
      var IE8_DOM_DEFINE = require_ie8_dom_define();
      var anObject = require_an_object();
      var toPropertyKey = require_to_property_key();
      var TypeError2 = global2.TypeError;
      var $defineProperty = Object.defineProperty;
      exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
        anObject(O);
        P = toPropertyKey(P);
        anObject(Attributes);
        if (IE8_DOM_DEFINE)
          try {
            return $defineProperty(O, P, Attributes);
          } catch (error) {
          }
        if ("get" in Attributes || "set" in Attributes)
          throw TypeError2("Accessors not supported");
        if ("value" in Attributes)
          O[P] = Attributes.value;
        return O;
      };
    }
  });

  // node_modules/core-js/internals/create-non-enumerable-property.js
  var require_create_non_enumerable_property = __commonJS({
    "node_modules/core-js/internals/create-non-enumerable-property.js"(exports, module) {
      var DESCRIPTORS = require_descriptors();
      var definePropertyModule = require_object_define_property();
      var createPropertyDescriptor = require_create_property_descriptor();
      module.exports = DESCRIPTORS ? function(object, key, value) {
        return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
      } : function(object, key, value) {
        object[key] = value;
        return object;
      };
    }
  });

  // node_modules/core-js/internals/inspect-source.js
  var require_inspect_source = __commonJS({
    "node_modules/core-js/internals/inspect-source.js"(exports, module) {
      var uncurryThis = require_function_uncurry_this();
      var isCallable = require_is_callable();
      var store = require_shared_store();
      var functionToString = uncurryThis(Function.toString);
      if (!isCallable(store.inspectSource)) {
        store.inspectSource = function(it) {
          return functionToString(it);
        };
      }
      module.exports = store.inspectSource;
    }
  });

  // node_modules/core-js/internals/native-weak-map.js
  var require_native_weak_map = __commonJS({
    "node_modules/core-js/internals/native-weak-map.js"(exports, module) {
      var global2 = require_global();
      var isCallable = require_is_callable();
      var inspectSource = require_inspect_source();
      var WeakMap2 = global2.WeakMap;
      module.exports = isCallable(WeakMap2) && /native code/.test(inspectSource(WeakMap2));
    }
  });

  // node_modules/core-js/internals/shared-key.js
  var require_shared_key = __commonJS({
    "node_modules/core-js/internals/shared-key.js"(exports, module) {
      var shared = require_shared();
      var uid = require_uid();
      var keys = shared("keys");
      module.exports = function(key) {
        return keys[key] || (keys[key] = uid(key));
      };
    }
  });

  // node_modules/core-js/internals/hidden-keys.js
  var require_hidden_keys = __commonJS({
    "node_modules/core-js/internals/hidden-keys.js"(exports, module) {
      module.exports = {};
    }
  });

  // node_modules/core-js/internals/internal-state.js
  var require_internal_state = __commonJS({
    "node_modules/core-js/internals/internal-state.js"(exports, module) {
      var NATIVE_WEAK_MAP = require_native_weak_map();
      var global2 = require_global();
      var uncurryThis = require_function_uncurry_this();
      var isObject2 = require_is_object();
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      var hasOwn3 = require_has_own_property();
      var shared = require_shared_store();
      var sharedKey = require_shared_key();
      var hiddenKeys = require_hidden_keys();
      var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
      var TypeError2 = global2.TypeError;
      var WeakMap2 = global2.WeakMap;
      var set3;
      var get8;
      var has;
      var enforce = function(it) {
        return has(it) ? get8(it) : set3(it, {});
      };
      var getterFor = function(TYPE) {
        return function(it) {
          var state;
          if (!isObject2(it) || (state = get8(it)).type !== TYPE) {
            throw TypeError2("Incompatible receiver, " + TYPE + " required");
          }
          return state;
        };
      };
      if (NATIVE_WEAK_MAP || shared.state) {
        store = shared.state || (shared.state = new WeakMap2());
        wmget = uncurryThis(store.get);
        wmhas = uncurryThis(store.has);
        wmset = uncurryThis(store.set);
        set3 = function(it, metadata) {
          if (wmhas(store, it))
            throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
          metadata.facade = it;
          wmset(store, it, metadata);
          return metadata;
        };
        get8 = function(it) {
          return wmget(store, it) || {};
        };
        has = function(it) {
          return wmhas(store, it);
        };
      } else {
        STATE = sharedKey("state");
        hiddenKeys[STATE] = true;
        set3 = function(it, metadata) {
          if (hasOwn3(it, STATE))
            throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
          metadata.facade = it;
          createNonEnumerableProperty(it, STATE, metadata);
          return metadata;
        };
        get8 = function(it) {
          return hasOwn3(it, STATE) ? it[STATE] : {};
        };
        has = function(it) {
          return hasOwn3(it, STATE);
        };
      }
      var store;
      var wmget;
      var wmhas;
      var wmset;
      var STATE;
      module.exports = {
        set: set3,
        get: get8,
        has,
        enforce,
        getterFor
      };
    }
  });

  // node_modules/core-js/internals/function-name.js
  var require_function_name = __commonJS({
    "node_modules/core-js/internals/function-name.js"(exports, module) {
      var DESCRIPTORS = require_descriptors();
      var hasOwn3 = require_has_own_property();
      var FunctionPrototype = Function.prototype;
      var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
      var EXISTS = hasOwn3(FunctionPrototype, "name");
      var PROPER = EXISTS && function something() {
      }.name === "something";
      var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
      module.exports = {
        EXISTS,
        PROPER,
        CONFIGURABLE
      };
    }
  });

  // node_modules/core-js/internals/redefine.js
  var require_redefine = __commonJS({
    "node_modules/core-js/internals/redefine.js"(exports, module) {
      var global2 = require_global();
      var isCallable = require_is_callable();
      var hasOwn3 = require_has_own_property();
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      var setGlobal = require_set_global();
      var inspectSource = require_inspect_source();
      var InternalStateModule = require_internal_state();
      var CONFIGURABLE_FUNCTION_NAME = require_function_name().CONFIGURABLE;
      var getInternalState = InternalStateModule.get;
      var enforceInternalState = InternalStateModule.enforce;
      var TEMPLATE = String(String).split("String");
      (module.exports = function(O, key, value, options) {
        var unsafe = options ? !!options.unsafe : false;
        var simple = options ? !!options.enumerable : false;
        var noTargetGet = options ? !!options.noTargetGet : false;
        var name = options && options.name !== void 0 ? options.name : key;
        var state;
        if (isCallable(value)) {
          if (String(name).slice(0, 7) === "Symbol(") {
            name = "[" + String(name).replace(/^Symbol\(([^)]*)\)/, "$1") + "]";
          }
          if (!hasOwn3(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
            createNonEnumerableProperty(value, "name", name);
          }
          state = enforceInternalState(value);
          if (!state.source) {
            state.source = TEMPLATE.join(typeof name == "string" ? name : "");
          }
        }
        if (O === global2) {
          if (simple)
            O[key] = value;
          else
            setGlobal(key, value);
          return;
        } else if (!unsafe) {
          delete O[key];
        } else if (!noTargetGet && O[key]) {
          simple = true;
        }
        if (simple)
          O[key] = value;
        else
          createNonEnumerableProperty(O, key, value);
      })(Function.prototype, "toString", function toString4() {
        return isCallable(this) && getInternalState(this).source || inspectSource(this);
      });
    }
  });

  // node_modules/core-js/internals/to-integer-or-infinity.js
  var require_to_integer_or_infinity = __commonJS({
    "node_modules/core-js/internals/to-integer-or-infinity.js"(exports, module) {
      var ceil = Math.ceil;
      var floor = Math.floor;
      module.exports = function(argument) {
        var number = +argument;
        return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
      };
    }
  });

  // node_modules/core-js/internals/to-absolute-index.js
  var require_to_absolute_index = __commonJS({
    "node_modules/core-js/internals/to-absolute-index.js"(exports, module) {
      var toIntegerOrInfinity = require_to_integer_or_infinity();
      var max = Math.max;
      var min = Math.min;
      module.exports = function(index, length) {
        var integer = toIntegerOrInfinity(index);
        return integer < 0 ? max(integer + length, 0) : min(integer, length);
      };
    }
  });

  // node_modules/core-js/internals/to-length.js
  var require_to_length = __commonJS({
    "node_modules/core-js/internals/to-length.js"(exports, module) {
      var toIntegerOrInfinity = require_to_integer_or_infinity();
      var min = Math.min;
      module.exports = function(argument) {
        return argument > 0 ? min(toIntegerOrInfinity(argument), 9007199254740991) : 0;
      };
    }
  });

  // node_modules/core-js/internals/length-of-array-like.js
  var require_length_of_array_like = __commonJS({
    "node_modules/core-js/internals/length-of-array-like.js"(exports, module) {
      var toLength = require_to_length();
      module.exports = function(obj) {
        return toLength(obj.length);
      };
    }
  });

  // node_modules/core-js/internals/array-includes.js
  var require_array_includes = __commonJS({
    "node_modules/core-js/internals/array-includes.js"(exports, module) {
      var toIndexedObject = require_to_indexed_object();
      var toAbsoluteIndex = require_to_absolute_index();
      var lengthOfArrayLike = require_length_of_array_like();
      var createMethod = function(IS_INCLUDES) {
        return function($this, el, fromIndex) {
          var O = toIndexedObject($this);
          var length = lengthOfArrayLike(O);
          var index = toAbsoluteIndex(fromIndex, length);
          var value;
          if (IS_INCLUDES && el != el)
            while (length > index) {
              value = O[index++];
              if (value != value)
                return true;
            }
          else
            for (; length > index; index++) {
              if ((IS_INCLUDES || index in O) && O[index] === el)
                return IS_INCLUDES || index || 0;
            }
          return !IS_INCLUDES && -1;
        };
      };
      module.exports = {
        // `Array.prototype.includes` method
        // https://tc39.es/ecma262/#sec-array.prototype.includes
        includes: createMethod(true),
        // `Array.prototype.indexOf` method
        // https://tc39.es/ecma262/#sec-array.prototype.indexof
        indexOf: createMethod(false)
      };
    }
  });

  // node_modules/core-js/internals/object-keys-internal.js
  var require_object_keys_internal = __commonJS({
    "node_modules/core-js/internals/object-keys-internal.js"(exports, module) {
      var uncurryThis = require_function_uncurry_this();
      var hasOwn3 = require_has_own_property();
      var toIndexedObject = require_to_indexed_object();
      var indexOf = require_array_includes().indexOf;
      var hiddenKeys = require_hidden_keys();
      var push = uncurryThis([].push);
      module.exports = function(object, names) {
        var O = toIndexedObject(object);
        var i = 0;
        var result = [];
        var key;
        for (key in O)
          !hasOwn3(hiddenKeys, key) && hasOwn3(O, key) && push(result, key);
        while (names.length > i)
          if (hasOwn3(O, key = names[i++])) {
            ~indexOf(result, key) || push(result, key);
          }
        return result;
      };
    }
  });

  // node_modules/core-js/internals/enum-bug-keys.js
  var require_enum_bug_keys = __commonJS({
    "node_modules/core-js/internals/enum-bug-keys.js"(exports, module) {
      module.exports = [
        "constructor",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "toLocaleString",
        "toString",
        "valueOf"
      ];
    }
  });

  // node_modules/core-js/internals/object-get-own-property-names.js
  var require_object_get_own_property_names = __commonJS({
    "node_modules/core-js/internals/object-get-own-property-names.js"(exports) {
      var internalObjectKeys = require_object_keys_internal();
      var enumBugKeys = require_enum_bug_keys();
      var hiddenKeys = enumBugKeys.concat("length", "prototype");
      exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
        return internalObjectKeys(O, hiddenKeys);
      };
    }
  });

  // node_modules/core-js/internals/object-get-own-property-symbols.js
  var require_object_get_own_property_symbols = __commonJS({
    "node_modules/core-js/internals/object-get-own-property-symbols.js"(exports) {
      exports.f = Object.getOwnPropertySymbols;
    }
  });

  // node_modules/core-js/internals/own-keys.js
  var require_own_keys = __commonJS({
    "node_modules/core-js/internals/own-keys.js"(exports, module) {
      var getBuiltIn = require_get_built_in();
      var uncurryThis = require_function_uncurry_this();
      var getOwnPropertyNamesModule = require_object_get_own_property_names();
      var getOwnPropertySymbolsModule = require_object_get_own_property_symbols();
      var anObject = require_an_object();
      var concat5 = uncurryThis([].concat);
      module.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
        var keys = getOwnPropertyNamesModule.f(anObject(it));
        var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
        return getOwnPropertySymbols ? concat5(keys, getOwnPropertySymbols(it)) : keys;
      };
    }
  });

  // node_modules/core-js/internals/copy-constructor-properties.js
  var require_copy_constructor_properties = __commonJS({
    "node_modules/core-js/internals/copy-constructor-properties.js"(exports, module) {
      var hasOwn3 = require_has_own_property();
      var ownKeys = require_own_keys();
      var getOwnPropertyDescriptorModule = require_object_get_own_property_descriptor();
      var definePropertyModule = require_object_define_property();
      module.exports = function(target, source) {
        var keys = ownKeys(source);
        var defineProperty = definePropertyModule.f;
        var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          if (!hasOwn3(target, key))
            defineProperty(target, key, getOwnPropertyDescriptor(source, key));
        }
      };
    }
  });

  // node_modules/core-js/internals/is-forced.js
  var require_is_forced = __commonJS({
    "node_modules/core-js/internals/is-forced.js"(exports, module) {
      var fails = require_fails();
      var isCallable = require_is_callable();
      var replacement = /#|\.prototype\./;
      var isForced = function(feature, detection) {
        var value = data[normalize(feature)];
        return value == POLYFILL ? true : value == NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
      };
      var normalize = isForced.normalize = function(string) {
        return String(string).replace(replacement, ".").toLowerCase();
      };
      var data = isForced.data = {};
      var NATIVE = isForced.NATIVE = "N";
      var POLYFILL = isForced.POLYFILL = "P";
      module.exports = isForced;
    }
  });

  // node_modules/core-js/internals/export.js
  var require_export = __commonJS({
    "node_modules/core-js/internals/export.js"(exports, module) {
      var global2 = require_global();
      var getOwnPropertyDescriptor = require_object_get_own_property_descriptor().f;
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      var redefine = require_redefine();
      var setGlobal = require_set_global();
      var copyConstructorProperties = require_copy_constructor_properties();
      var isForced = require_is_forced();
      module.exports = function(options, source) {
        var TARGET = options.target;
        var GLOBAL = options.global;
        var STATIC = options.stat;
        var FORCED, target, key, targetProperty, sourceProperty, descriptor;
        if (GLOBAL) {
          target = global2;
        } else if (STATIC) {
          target = global2[TARGET] || setGlobal(TARGET, {});
        } else {
          target = (global2[TARGET] || {}).prototype;
        }
        if (target)
          for (key in source) {
            sourceProperty = source[key];
            if (options.noTargetGet) {
              descriptor = getOwnPropertyDescriptor(target, key);
              targetProperty = descriptor && descriptor.value;
            } else
              targetProperty = target[key];
            FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
            if (!FORCED && targetProperty !== void 0) {
              if (typeof sourceProperty == typeof targetProperty)
                continue;
              copyConstructorProperties(sourceProperty, targetProperty);
            }
            if (options.sham || targetProperty && targetProperty.sham) {
              createNonEnumerableProperty(sourceProperty, "sham", true);
            }
            redefine(target, key, sourceProperty, options);
          }
      };
    }
  });

  // node_modules/core-js/internals/object-keys.js
  var require_object_keys = __commonJS({
    "node_modules/core-js/internals/object-keys.js"(exports, module) {
      var internalObjectKeys = require_object_keys_internal();
      var enumBugKeys = require_enum_bug_keys();
      module.exports = Object.keys || function keys(O) {
        return internalObjectKeys(O, enumBugKeys);
      };
    }
  });

  // node_modules/core-js/internals/object-define-properties.js
  var require_object_define_properties = __commonJS({
    "node_modules/core-js/internals/object-define-properties.js"(exports, module) {
      var DESCRIPTORS = require_descriptors();
      var definePropertyModule = require_object_define_property();
      var anObject = require_an_object();
      var toIndexedObject = require_to_indexed_object();
      var objectKeys = require_object_keys();
      module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
        anObject(O);
        var props = toIndexedObject(Properties);
        var keys = objectKeys(Properties);
        var length = keys.length;
        var index = 0;
        var key;
        while (length > index)
          definePropertyModule.f(O, key = keys[index++], props[key]);
        return O;
      };
    }
  });

  // node_modules/core-js/internals/html.js
  var require_html = __commonJS({
    "node_modules/core-js/internals/html.js"(exports, module) {
      var getBuiltIn = require_get_built_in();
      module.exports = getBuiltIn("document", "documentElement");
    }
  });

  // node_modules/core-js/internals/object-create.js
  var require_object_create = __commonJS({
    "node_modules/core-js/internals/object-create.js"(exports, module) {
      var anObject = require_an_object();
      var defineProperties = require_object_define_properties();
      var enumBugKeys = require_enum_bug_keys();
      var hiddenKeys = require_hidden_keys();
      var html = require_html();
      var documentCreateElement = require_document_create_element();
      var sharedKey = require_shared_key();
      var GT = ">";
      var LT = "<";
      var PROTOTYPE = "prototype";
      var SCRIPT = "script";
      var IE_PROTO = sharedKey("IE_PROTO");
      var EmptyConstructor = function() {
      };
      var scriptTag = function(content) {
        return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
      };
      var NullProtoObjectViaActiveX = function(activeXDocument2) {
        activeXDocument2.write(scriptTag(""));
        activeXDocument2.close();
        var temp = activeXDocument2.parentWindow.Object;
        activeXDocument2 = null;
        return temp;
      };
      var NullProtoObjectViaIFrame = function() {
        var iframe = documentCreateElement("iframe");
        var JS = "java" + SCRIPT + ":";
        var iframeDocument;
        iframe.style.display = "none";
        html.appendChild(iframe);
        iframe.src = String(JS);
        iframeDocument = iframe.contentWindow.document;
        iframeDocument.open();
        iframeDocument.write(scriptTag("document.F=Object"));
        iframeDocument.close();
        return iframeDocument.F;
      };
      var activeXDocument;
      var NullProtoObject = function() {
        try {
          activeXDocument = new ActiveXObject("htmlfile");
        } catch (error) {
        }
        NullProtoObject = typeof document != "undefined" ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument);
        var length = enumBugKeys.length;
        while (length--)
          delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
        return NullProtoObject();
      };
      hiddenKeys[IE_PROTO] = true;
      module.exports = Object.create || function create5(O, Properties) {
        var result;
        if (O !== null) {
          EmptyConstructor[PROTOTYPE] = anObject(O);
          result = new EmptyConstructor();
          EmptyConstructor[PROTOTYPE] = null;
          result[IE_PROTO] = O;
        } else
          result = NullProtoObject();
        return Properties === void 0 ? result : defineProperties(result, Properties);
      };
    }
  });

  // node_modules/core-js/internals/add-to-unscopables.js
  var require_add_to_unscopables = __commonJS({
    "node_modules/core-js/internals/add-to-unscopables.js"(exports, module) {
      var wellKnownSymbol = require_well_known_symbol();
      var create5 = require_object_create();
      var definePropertyModule = require_object_define_property();
      var UNSCOPABLES = wellKnownSymbol("unscopables");
      var ArrayPrototype = Array.prototype;
      if (ArrayPrototype[UNSCOPABLES] == void 0) {
        definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
          configurable: true,
          value: create5(null)
        });
      }
      module.exports = function(key) {
        ArrayPrototype[UNSCOPABLES][key] = true;
      };
    }
  });

  // node_modules/core-js/modules/es.array.includes.js
  var require_es_array_includes = __commonJS({
    "node_modules/core-js/modules/es.array.includes.js"() {
      "use strict";
      var $2 = require_export();
      var $includes = require_array_includes().includes;
      var addToUnscopables = require_add_to_unscopables();
      $2({ target: "Array", proto: true }, {
        includes: function includes(el) {
          return $includes(this, el, arguments.length > 1 ? arguments[1] : void 0);
        }
      });
      addToUnscopables("includes");
    }
  });

  // node_modules/core-js/internals/entry-unbind.js
  var require_entry_unbind = __commonJS({
    "node_modules/core-js/internals/entry-unbind.js"(exports, module) {
      var global2 = require_global();
      var uncurryThis = require_function_uncurry_this();
      module.exports = function(CONSTRUCTOR, METHOD) {
        return uncurryThis(global2[CONSTRUCTOR].prototype[METHOD]);
      };
    }
  });

  // node_modules/core-js/es/array/includes.js
  var require_includes = __commonJS({
    "node_modules/core-js/es/array/includes.js"(exports, module) {
      require_es_array_includes();
      var entryUnbind = require_entry_unbind();
      module.exports = entryUnbind("Array", "includes");
    }
  });

  // node_modules/core-js/stable/array/includes.js
  var require_includes2 = __commonJS({
    "node_modules/core-js/stable/array/includes.js"(exports, module) {
      var parent = require_includes();
      module.exports = parent;
    }
  });

  // node_modules/core-js/features/array/includes.js
  var require_includes3 = __commonJS({
    "node_modules/core-js/features/array/includes.js"(exports, module) {
      var parent = require_includes2();
      module.exports = parent;
    }
  });

  // node_modules/lodash/_freeGlobal.js
  var require_freeGlobal = __commonJS({
    "node_modules/lodash/_freeGlobal.js"(exports, module) {
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      module.exports = freeGlobal;
    }
  });

  // node_modules/lodash/_root.js
  var require_root = __commonJS({
    "node_modules/lodash/_root.js"(exports, module) {
      var freeGlobal = require_freeGlobal();
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      module.exports = root;
    }
  });

  // node_modules/lodash/_Symbol.js
  var require_Symbol = __commonJS({
    "node_modules/lodash/_Symbol.js"(exports, module) {
      var root = require_root();
      var Symbol2 = root.Symbol;
      module.exports = Symbol2;
    }
  });

  // node_modules/lodash/_getRawTag.js
  var require_getRawTag = __commonJS({
    "node_modules/lodash/_getRawTag.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var objectProto = Object.prototype;
      var hasOwnProperty4 = objectProto.hasOwnProperty;
      var nativeObjectToString = objectProto.toString;
      var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
      function getRawTag(value) {
        var isOwn = hasOwnProperty4.call(value, symToStringTag), tag = value[symToStringTag];
        try {
          value[symToStringTag] = void 0;
          var unmasked = true;
        } catch (e) {
        }
        var result = nativeObjectToString.call(value);
        if (unmasked) {
          if (isOwn) {
            value[symToStringTag] = tag;
          } else {
            delete value[symToStringTag];
          }
        }
        return result;
      }
      module.exports = getRawTag;
    }
  });

  // node_modules/lodash/_objectToString.js
  var require_objectToString = __commonJS({
    "node_modules/lodash/_objectToString.js"(exports, module) {
      var objectProto = Object.prototype;
      var nativeObjectToString = objectProto.toString;
      function objectToString(value) {
        return nativeObjectToString.call(value);
      }
      module.exports = objectToString;
    }
  });

  // node_modules/lodash/_baseGetTag.js
  var require_baseGetTag = __commonJS({
    "node_modules/lodash/_baseGetTag.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var getRawTag = require_getRawTag();
      var objectToString = require_objectToString();
      var nullTag = "[object Null]";
      var undefinedTag = "[object Undefined]";
      var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
      function baseGetTag(value) {
        if (value == null) {
          return value === void 0 ? undefinedTag : nullTag;
        }
        return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
      }
      module.exports = baseGetTag;
    }
  });

  // node_modules/lodash/_overArg.js
  var require_overArg = __commonJS({
    "node_modules/lodash/_overArg.js"(exports, module) {
      function overArg(func, transform2) {
        return function(arg) {
          return func(transform2(arg));
        };
      }
      module.exports = overArg;
    }
  });

  // node_modules/lodash/_getPrototype.js
  var require_getPrototype = __commonJS({
    "node_modules/lodash/_getPrototype.js"(exports, module) {
      var overArg = require_overArg();
      var getPrototype = overArg(Object.getPrototypeOf, Object);
      module.exports = getPrototype;
    }
  });

  // node_modules/lodash/isObjectLike.js
  var require_isObjectLike = __commonJS({
    "node_modules/lodash/isObjectLike.js"(exports, module) {
      function isObjectLike(value) {
        return value != null && typeof value == "object";
      }
      module.exports = isObjectLike;
    }
  });

  // node_modules/lodash/isPlainObject.js
  var require_isPlainObject = __commonJS({
    "node_modules/lodash/isPlainObject.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var getPrototype = require_getPrototype();
      var isObjectLike = require_isObjectLike();
      var objectTag = "[object Object]";
      var funcProto = Function.prototype;
      var objectProto = Object.prototype;
      var funcToString = funcProto.toString;
      var hasOwnProperty4 = objectProto.hasOwnProperty;
      var objectCtorString = funcToString.call(Object);
      function isPlainObject(value) {
        if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
          return false;
        }
        var proto = getPrototype(value);
        if (proto === null) {
          return true;
        }
        var Ctor = hasOwnProperty4.call(proto, "constructor") && proto.constructor;
        return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
      }
      module.exports = isPlainObject;
    }
  });

  // node_modules/symbol-observable/lib/ponyfill.js
  var require_ponyfill = __commonJS({
    "node_modules/symbol-observable/lib/ponyfill.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = symbolObservablePonyfill;
      function symbolObservablePonyfill(root) {
        var result;
        var _Symbol = root.Symbol;
        if (typeof _Symbol === "function") {
          if (_Symbol.observable) {
            result = _Symbol.observable;
          } else {
            result = _Symbol("observable");
            _Symbol.observable = result;
          }
        } else {
          result = "@@observable";
        }
        return result;
      }
    }
  });

  // node_modules/symbol-observable/lib/index.js
  var require_lib = __commonJS({
    "node_modules/symbol-observable/lib/index.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _ponyfill = require_ponyfill();
      var _ponyfill2 = _interopRequireDefault(_ponyfill);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      var root;
      if (typeof self !== "undefined") {
        root = self;
      } else if (typeof window !== "undefined") {
        root = window;
      } else if (typeof global !== "undefined") {
        root = global;
      } else if (typeof module !== "undefined") {
        root = module;
      } else {
        root = Function("return this")();
      }
      var result = (0, _ponyfill2["default"])(root);
      exports["default"] = result;
    }
  });

  // node_modules/redux/lib/createStore.js
  var require_createStore = __commonJS({
    "node_modules/redux/lib/createStore.js"(exports) {
      "use strict";
      exports.__esModule = true;
      exports.ActionTypes = void 0;
      exports["default"] = createStore;
      var _isPlainObject = require_isPlainObject();
      var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
      var _symbolObservable = require_lib();
      var _symbolObservable2 = _interopRequireDefault(_symbolObservable);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      var ActionTypes = exports.ActionTypes = {
        INIT: "@@redux/INIT"
      };
      function createStore(reducer, preloadedState, enhancer) {
        var _ref2;
        if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
          enhancer = preloadedState;
          preloadedState = void 0;
        }
        if (typeof enhancer !== "undefined") {
          if (typeof enhancer !== "function") {
            throw new Error("Expected the enhancer to be a function.");
          }
          return enhancer(createStore)(reducer, preloadedState);
        }
        if (typeof reducer !== "function") {
          throw new Error("Expected the reducer to be a function.");
        }
        var currentReducer = reducer;
        var currentState = preloadedState;
        var currentListeners = [];
        var nextListeners = currentListeners;
        var isDispatching = false;
        function ensureCanMutateNextListeners() {
          if (nextListeners === currentListeners) {
            nextListeners = currentListeners.slice();
          }
        }
        function getState() {
          return currentState;
        }
        function subscribe(listener) {
          if (typeof listener !== "function") {
            throw new Error("Expected listener to be a function.");
          }
          var isSubscribed = true;
          ensureCanMutateNextListeners();
          nextListeners.push(listener);
          return function unsubscribe() {
            if (!isSubscribed) {
              return;
            }
            isSubscribed = false;
            ensureCanMutateNextListeners();
            var index = nextListeners.indexOf(listener);
            nextListeners.splice(index, 1);
          };
        }
        function dispatch(action) {
          if (!(0, _isPlainObject2["default"])(action)) {
            throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
          }
          if (typeof action.type === "undefined") {
            throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
          }
          if (isDispatching) {
            throw new Error("Reducers may not dispatch actions.");
          }
          try {
            isDispatching = true;
            currentState = currentReducer(currentState, action);
          } finally {
            isDispatching = false;
          }
          var listeners = currentListeners = nextListeners;
          for (var i = 0; i < listeners.length; i++) {
            listeners[i]();
          }
          return action;
        }
        function replaceReducer(nextReducer) {
          if (typeof nextReducer !== "function") {
            throw new Error("Expected the nextReducer to be a function.");
          }
          currentReducer = nextReducer;
          dispatch({ type: ActionTypes.INIT });
        }
        function observable() {
          var _ref;
          var outerSubscribe = subscribe;
          return _ref = {
            /**
             * The minimal observable subscription method.
             * @param {Object} observer Any object that can be used as an observer.
             * The observer object should have a `next` method.
             * @returns {subscription} An object with an `unsubscribe` method that can
             * be used to unsubscribe the observable from the store, and prevent further
             * emission of values from the observable.
             */
            subscribe: function subscribe2(observer) {
              if (typeof observer !== "object") {
                throw new TypeError("Expected the observer to be an object.");
              }
              function observeState() {
                if (observer.next) {
                  observer.next(getState());
                }
              }
              observeState();
              var unsubscribe = outerSubscribe(observeState);
              return { unsubscribe };
            }
          }, _ref[_symbolObservable2["default"]] = function() {
            return this;
          }, _ref;
        }
        dispatch({ type: ActionTypes.INIT });
        return _ref2 = {
          dispatch,
          subscribe,
          getState,
          replaceReducer
        }, _ref2[_symbolObservable2["default"]] = observable, _ref2;
      }
    }
  });

  // node_modules/redux/lib/utils/warning.js
  var require_warning = __commonJS({
    "node_modules/redux/lib/utils/warning.js"(exports) {
      "use strict";
      exports.__esModule = true;
      exports["default"] = warning;
      function warning(message) {
        if (typeof console !== "undefined" && typeof console.error === "function") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (e) {
        }
      }
    }
  });

  // node_modules/redux/lib/combineReducers.js
  var require_combineReducers = __commonJS({
    "node_modules/redux/lib/combineReducers.js"(exports) {
      "use strict";
      exports.__esModule = true;
      exports["default"] = combineReducers2;
      var _createStore = require_createStore();
      var _isPlainObject = require_isPlainObject();
      var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
      var _warning = require_warning();
      var _warning2 = _interopRequireDefault(_warning);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      function getUndefinedStateErrorMessage(key, action) {
        var actionType = action && action.type;
        var actionName = actionType && '"' + actionType.toString() + '"' || "an action";
        return "Given action " + actionName + ', reducer "' + key + '" returned undefined. To ignore an action, you must explicitly return the previous state.';
      }
      function assertReducerSanity(reducers) {
        Object.keys(reducers).forEach(function(key) {
          var reducer = reducers[key];
          var initialState5 = reducer(void 0, { type: _createStore.ActionTypes.INIT });
          if (typeof initialState5 === "undefined") {
            throw new Error('Reducer "' + key + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
          }
          var type = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
          if (typeof reducer(void 0, { type }) === "undefined") {
            throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.");
          }
        });
      }
      function combineReducers2(reducers) {
        var reducerKeys = Object.keys(reducers);
        var finalReducers = {};
        for (var i = 0; i < reducerKeys.length; i++) {
          var key = reducerKeys[i];
          if (false) {
            if (typeof reducers[key] === "undefined") {
              (0, _warning2["default"])('No reducer provided for key "' + key + '"');
            }
          }
          if (typeof reducers[key] === "function") {
            finalReducers[key] = reducers[key];
          }
        }
        var finalReducerKeys = Object.keys(finalReducers);
        if (false) {
          var unexpectedKeyCache = {};
        }
        var sanityError;
        try {
          assertReducerSanity(finalReducers);
        } catch (e) {
          sanityError = e;
        }
        return function combination() {
          var state = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0];
          var action = arguments[1];
          if (sanityError) {
            throw sanityError;
          }
          if (false) {
            var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
            if (warningMessage) {
              (0, _warning2["default"])(warningMessage);
            }
          }
          var hasChanged = false;
          var nextState = {};
          for (var i2 = 0; i2 < finalReducerKeys.length; i2++) {
            var key2 = finalReducerKeys[i2];
            var reducer = finalReducers[key2];
            var previousStateForKey = state[key2];
            var nextStateForKey = reducer(previousStateForKey, action);
            if (typeof nextStateForKey === "undefined") {
              var errorMessage = getUndefinedStateErrorMessage(key2, action);
              throw new Error(errorMessage);
            }
            nextState[key2] = nextStateForKey;
            hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
          }
          return hasChanged ? nextState : state;
        };
      }
    }
  });

  // node_modules/redux/lib/bindActionCreators.js
  var require_bindActionCreators = __commonJS({
    "node_modules/redux/lib/bindActionCreators.js"(exports) {
      "use strict";
      exports.__esModule = true;
      exports["default"] = bindActionCreators;
      function bindActionCreator(actionCreator, dispatch) {
        return function() {
          return dispatch(actionCreator.apply(void 0, arguments));
        };
      }
      function bindActionCreators(actionCreators, dispatch) {
        if (typeof actionCreators === "function") {
          return bindActionCreator(actionCreators, dispatch);
        }
        if (typeof actionCreators !== "object" || actionCreators === null) {
          throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? "null" : typeof actionCreators) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
        }
        var keys = Object.keys(actionCreators);
        var boundActionCreators = {};
        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          var actionCreator = actionCreators[key];
          if (typeof actionCreator === "function") {
            boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
          }
        }
        return boundActionCreators;
      }
    }
  });

  // node_modules/redux/lib/compose.js
  var require_compose = __commonJS({
    "node_modules/redux/lib/compose.js"(exports) {
      "use strict";
      exports.__esModule = true;
      exports["default"] = compose2;
      function compose2() {
        for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
          funcs[_key] = arguments[_key];
        }
        if (funcs.length === 0) {
          return function(arg) {
            return arg;
          };
        }
        if (funcs.length === 1) {
          return funcs[0];
        }
        var last = funcs[funcs.length - 1];
        var rest = funcs.slice(0, -1);
        return function() {
          return rest.reduceRight(function(composed, f) {
            return f(composed);
          }, last.apply(void 0, arguments));
        };
      }
    }
  });

  // node_modules/redux/lib/applyMiddleware.js
  var require_applyMiddleware = __commonJS({
    "node_modules/redux/lib/applyMiddleware.js"(exports) {
      "use strict";
      exports.__esModule = true;
      var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      exports["default"] = applyMiddleware;
      var _compose = require_compose();
      var _compose2 = _interopRequireDefault(_compose);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      function applyMiddleware() {
        for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
          middlewares[_key] = arguments[_key];
        }
        return function(createStore) {
          return function(reducer, preloadedState, enhancer) {
            var store = createStore(reducer, preloadedState, enhancer);
            var _dispatch = store.dispatch;
            var chain = [];
            var middlewareAPI = {
              getState: store.getState,
              dispatch: function dispatch(action) {
                return _dispatch(action);
              }
            };
            chain = middlewares.map(function(middleware) {
              return middleware(middlewareAPI);
            });
            _dispatch = _compose2["default"].apply(void 0, chain)(store.dispatch);
            return _extends({}, store, {
              dispatch: _dispatch
            });
          };
        };
      }
    }
  });

  // node_modules/redux/lib/index.js
  var require_lib2 = __commonJS({
    "node_modules/redux/lib/index.js"(exports) {
      "use strict";
      exports.__esModule = true;
      exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = void 0;
      var _createStore = require_createStore();
      var _createStore2 = _interopRequireDefault(_createStore);
      var _combineReducers = require_combineReducers();
      var _combineReducers2 = _interopRequireDefault(_combineReducers);
      var _bindActionCreators = require_bindActionCreators();
      var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);
      var _applyMiddleware = require_applyMiddleware();
      var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);
      var _compose = require_compose();
      var _compose2 = _interopRequireDefault(_compose);
      var _warning = require_warning();
      var _warning2 = _interopRequireDefault(_warning);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      if (false) {
        (0, _warning2["default"])("You are currently using minified code outside of NODE_ENV === 'production'. This means that you are running a slower development build of Redux. You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) to ensure you have the correct code for your production build.");
      }
      exports.createStore = _createStore2["default"];
      exports.combineReducers = _combineReducers2["default"];
      exports.bindActionCreators = _bindActionCreators2["default"];
      exports.applyMiddleware = _applyMiddleware2["default"];
      exports.compose = _compose2["default"];
    }
  });

  // packages/systems/ix2/shared/constants/trigger-events.ts
  var EventTypeConsts, EventAppliesTo, EventBasedOn, EventContinuousMouseAxes, EventLimitAffectedElements, QuickEffectIds, QuickEffectDirectionConsts;
  var init_trigger_events = __esm({
    "packages/systems/ix2/shared/constants/trigger-events.ts"() {
      "use strict";
      EventTypeConsts = {
        NAVBAR_OPEN: "NAVBAR_OPEN",
        NAVBAR_CLOSE: "NAVBAR_CLOSE",
        TAB_ACTIVE: "TAB_ACTIVE",
        TAB_INACTIVE: "TAB_INACTIVE",
        SLIDER_ACTIVE: "SLIDER_ACTIVE",
        SLIDER_INACTIVE: "SLIDER_INACTIVE",
        DROPDOWN_OPEN: "DROPDOWN_OPEN",
        DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
        MOUSE_CLICK: "MOUSE_CLICK",
        MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
        MOUSE_DOWN: "MOUSE_DOWN",
        MOUSE_UP: "MOUSE_UP",
        MOUSE_OVER: "MOUSE_OVER",
        MOUSE_OUT: "MOUSE_OUT",
        MOUSE_MOVE: "MOUSE_MOVE",
        MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
        SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
        SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
        SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
        ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
        ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
        PAGE_START: "PAGE_START",
        PAGE_FINISH: "PAGE_FINISH",
        PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
        PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
        PAGE_SCROLL: "PAGE_SCROLL"
      };
      EventAppliesTo = {
        ELEMENT: "ELEMENT",
        CLASS: "CLASS",
        PAGE: "PAGE"
      };
      EventBasedOn = {
        ELEMENT: "ELEMENT",
        VIEWPORT: "VIEWPORT"
      };
      EventContinuousMouseAxes = {
        X_AXIS: "X_AXIS",
        Y_AXIS: "Y_AXIS"
      };
      EventLimitAffectedElements = {
        CHILDREN: "CHILDREN",
        SIBLINGS: "SIBLINGS",
        IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
      };
      QuickEffectIds = {
        FADE_EFFECT: "FADE_EFFECT",
        SLIDE_EFFECT: "SLIDE_EFFECT",
        GROW_EFFECT: "GROW_EFFECT",
        SHRINK_EFFECT: "SHRINK_EFFECT",
        SPIN_EFFECT: "SPIN_EFFECT",
        FLY_EFFECT: "FLY_EFFECT",
        POP_EFFECT: "POP_EFFECT",
        FLIP_EFFECT: "FLIP_EFFECT",
        JIGGLE_EFFECT: "JIGGLE_EFFECT",
        PULSE_EFFECT: "PULSE_EFFECT",
        DROP_EFFECT: "DROP_EFFECT",
        BLINK_EFFECT: "BLINK_EFFECT",
        BOUNCE_EFFECT: "BOUNCE_EFFECT",
        FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
        FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
        RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
        JELLO_EFFECT: "JELLO_EFFECT",
        GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
        SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
        PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
      };
      QuickEffectDirectionConsts = {
        LEFT: "LEFT",
        RIGHT: "RIGHT",
        BOTTOM: "BOTTOM",
        TOP: "TOP",
        BOTTOM_LEFT: "BOTTOM_LEFT",
        BOTTOM_RIGHT: "BOTTOM_RIGHT",
        TOP_RIGHT: "TOP_RIGHT",
        TOP_LEFT: "TOP_LEFT",
        CLOCKWISE: "CLOCKWISE",
        COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
      };
    }
  });

  // packages/systems/ix2/shared/constants/animation-actions.ts
  var ActionTypeConsts, ActionAppliesTo;
  var init_animation_actions = __esm({
    "packages/systems/ix2/shared/constants/animation-actions.ts"() {
      "use strict";
      ActionTypeConsts = {
        TRANSFORM_MOVE: "TRANSFORM_MOVE",
        TRANSFORM_SCALE: "TRANSFORM_SCALE",
        TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
        TRANSFORM_SKEW: "TRANSFORM_SKEW",
        STYLE_OPACITY: "STYLE_OPACITY",
        STYLE_SIZE: "STYLE_SIZE",
        STYLE_FILTER: "STYLE_FILTER",
        STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
        STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
        STYLE_BORDER: "STYLE_BORDER",
        STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
        OBJECT_VALUE: "OBJECT_VALUE",
        PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
        PLUGIN_SPLINE: "PLUGIN_SPLINE",
        PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
        GENERAL_DISPLAY: "GENERAL_DISPLAY",
        GENERAL_START_ACTION: "GENERAL_START_ACTION",
        GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
        // TODO: Clean these up below because they're not used at this time
        GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
        GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
        GENERAL_LOOP: "GENERAL_LOOP",
        STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
      };
      ActionAppliesTo = {
        ELEMENT: "ELEMENT",
        ELEMENT_CLASS: "ELEMENT_CLASS",
        TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
      };
    }
  });

  // packages/systems/ix2/shared/constants/trigger-interactions.ts
  var InteractionTypeConsts;
  var init_trigger_interactions = __esm({
    "packages/systems/ix2/shared/constants/trigger-interactions.ts"() {
      "use strict";
      InteractionTypeConsts = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION"
      };
    }
  });

  // packages/systems/ix2/shared/constants/reduced-motion.ts
  var TRANSFORM_MOVE, TRANSFORM_SCALE, TRANSFORM_ROTATE, TRANSFORM_SKEW, STYLE_SIZE, STYLE_FILTER, STYLE_FONT_VARIATION, ReducedMotionTypes;
  var init_reduced_motion = __esm({
    "packages/systems/ix2/shared/constants/reduced-motion.ts"() {
      "use strict";
      init_animation_actions();
      ({
        TRANSFORM_MOVE,
        TRANSFORM_SCALE,
        TRANSFORM_ROTATE,
        TRANSFORM_SKEW,
        STYLE_SIZE,
        STYLE_FILTER,
        STYLE_FONT_VARIATION
      } = ActionTypeConsts);
      ReducedMotionTypes = {
        [TRANSFORM_MOVE]: true,
        [TRANSFORM_SCALE]: true,
        [TRANSFORM_ROTATE]: true,
        [TRANSFORM_SKEW]: true,
        [STYLE_SIZE]: true,
        [STYLE_FILTER]: true,
        [STYLE_FONT_VARIATION]: true
      };
    }
  });

  // packages/systems/ix2/shared/constants/IX2EngineActionTypes.ts
  var IX2EngineActionTypes_exports = {};
  __export(IX2EngineActionTypes_exports, {
    IX2_ACTION_LIST_PLAYBACK_CHANGED: () => IX2_ACTION_LIST_PLAYBACK_CHANGED,
    IX2_ANIMATION_FRAME_CHANGED: () => IX2_ANIMATION_FRAME_CHANGED,
    IX2_CLEAR_REQUESTED: () => IX2_CLEAR_REQUESTED,
    IX2_ELEMENT_STATE_CHANGED: () => IX2_ELEMENT_STATE_CHANGED,
    IX2_EVENT_LISTENER_ADDED: () => IX2_EVENT_LISTENER_ADDED,
    IX2_EVENT_STATE_CHANGED: () => IX2_EVENT_STATE_CHANGED,
    IX2_INSTANCE_ADDED: () => IX2_INSTANCE_ADDED,
    IX2_INSTANCE_REMOVED: () => IX2_INSTANCE_REMOVED,
    IX2_INSTANCE_STARTED: () => IX2_INSTANCE_STARTED,
    IX2_MEDIA_QUERIES_DEFINED: () => IX2_MEDIA_QUERIES_DEFINED,
    IX2_PARAMETER_CHANGED: () => IX2_PARAMETER_CHANGED,
    IX2_PLAYBACK_REQUESTED: () => IX2_PLAYBACK_REQUESTED,
    IX2_PREVIEW_REQUESTED: () => IX2_PREVIEW_REQUESTED,
    IX2_RAW_DATA_IMPORTED: () => IX2_RAW_DATA_IMPORTED,
    IX2_SESSION_INITIALIZED: () => IX2_SESSION_INITIALIZED,
    IX2_SESSION_STARTED: () => IX2_SESSION_STARTED,
    IX2_SESSION_STOPPED: () => IX2_SESSION_STOPPED,
    IX2_STOP_REQUESTED: () => IX2_STOP_REQUESTED,
    IX2_TEST_FRAME_RENDERED: () => IX2_TEST_FRAME_RENDERED,
    IX2_VIEWPORT_WIDTH_CHANGED: () => IX2_VIEWPORT_WIDTH_CHANGED
  });
  var IX2_RAW_DATA_IMPORTED, IX2_SESSION_INITIALIZED, IX2_SESSION_STARTED, IX2_SESSION_STOPPED, IX2_PREVIEW_REQUESTED, IX2_PLAYBACK_REQUESTED, IX2_STOP_REQUESTED, IX2_CLEAR_REQUESTED, IX2_EVENT_LISTENER_ADDED, IX2_EVENT_STATE_CHANGED, IX2_ANIMATION_FRAME_CHANGED, IX2_PARAMETER_CHANGED, IX2_INSTANCE_ADDED, IX2_INSTANCE_STARTED, IX2_INSTANCE_REMOVED, IX2_ELEMENT_STATE_CHANGED, IX2_ACTION_LIST_PLAYBACK_CHANGED, IX2_VIEWPORT_WIDTH_CHANGED, IX2_MEDIA_QUERIES_DEFINED, IX2_TEST_FRAME_RENDERED;
  var init_IX2EngineActionTypes = __esm({
    "packages/systems/ix2/shared/constants/IX2EngineActionTypes.ts"() {
      "use strict";
      IX2_RAW_DATA_IMPORTED = "IX2_RAW_DATA_IMPORTED";
      IX2_SESSION_INITIALIZED = "IX2_SESSION_INITIALIZED";
      IX2_SESSION_STARTED = "IX2_SESSION_STARTED";
      IX2_SESSION_STOPPED = "IX2_SESSION_STOPPED";
      IX2_PREVIEW_REQUESTED = "IX2_PREVIEW_REQUESTED";
      IX2_PLAYBACK_REQUESTED = "IX2_PLAYBACK_REQUESTED";
      IX2_STOP_REQUESTED = "IX2_STOP_REQUESTED";
      IX2_CLEAR_REQUESTED = "IX2_CLEAR_REQUESTED";
      IX2_EVENT_LISTENER_ADDED = "IX2_EVENT_LISTENER_ADDED";
      IX2_EVENT_STATE_CHANGED = "IX2_EVENT_STATE_CHANGED";
      IX2_ANIMATION_FRAME_CHANGED = "IX2_ANIMATION_FRAME_CHANGED";
      IX2_PARAMETER_CHANGED = "IX2_PARAMETER_CHANGED";
      IX2_INSTANCE_ADDED = "IX2_INSTANCE_ADDED";
      IX2_INSTANCE_STARTED = "IX2_INSTANCE_STARTED";
      IX2_INSTANCE_REMOVED = "IX2_INSTANCE_REMOVED";
      IX2_ELEMENT_STATE_CHANGED = "IX2_ELEMENT_STATE_CHANGED";
      IX2_ACTION_LIST_PLAYBACK_CHANGED = "IX2_ACTION_LIST_PLAYBACK_CHANGED";
      IX2_VIEWPORT_WIDTH_CHANGED = "IX2_VIEWPORT_WIDTH_CHANGED";
      IX2_MEDIA_QUERIES_DEFINED = "IX2_MEDIA_QUERIES_DEFINED";
      IX2_TEST_FRAME_RENDERED = "IX2_TEST_FRAME_RENDERED";
    }
  });

  // packages/systems/ix2/shared/constants/IX2EngineConstants.ts
  var IX2EngineConstants_exports = {};
  __export(IX2EngineConstants_exports, {
    ABSTRACT_NODE: () => ABSTRACT_NODE,
    AUTO: () => AUTO,
    BACKGROUND: () => BACKGROUND,
    BACKGROUND_COLOR: () => BACKGROUND_COLOR,
    BAR_DELIMITER: () => BAR_DELIMITER,
    BORDER_COLOR: () => BORDER_COLOR,
    BOUNDARY_SELECTOR: () => BOUNDARY_SELECTOR,
    CHILDREN: () => CHILDREN,
    COLON_DELIMITER: () => COLON_DELIMITER,
    COLOR: () => COLOR,
    COMMA_DELIMITER: () => COMMA_DELIMITER,
    CONFIG_UNIT: () => CONFIG_UNIT,
    CONFIG_VALUE: () => CONFIG_VALUE,
    CONFIG_X_UNIT: () => CONFIG_X_UNIT,
    CONFIG_X_VALUE: () => CONFIG_X_VALUE,
    CONFIG_Y_UNIT: () => CONFIG_Y_UNIT,
    CONFIG_Y_VALUE: () => CONFIG_Y_VALUE,
    CONFIG_Z_UNIT: () => CONFIG_Z_UNIT,
    CONFIG_Z_VALUE: () => CONFIG_Z_VALUE,
    DISPLAY: () => DISPLAY,
    FILTER: () => FILTER,
    FLEX: () => FLEX,
    FONT_VARIATION_SETTINGS: () => FONT_VARIATION_SETTINGS,
    HEIGHT: () => HEIGHT,
    HTML_ELEMENT: () => HTML_ELEMENT,
    IMMEDIATE_CHILDREN: () => IMMEDIATE_CHILDREN,
    IX2_ID_DELIMITER: () => IX2_ID_DELIMITER,
    OPACITY: () => OPACITY,
    PARENT: () => PARENT,
    PLAIN_OBJECT: () => PLAIN_OBJECT,
    PRESERVE_3D: () => PRESERVE_3D,
    RENDER_GENERAL: () => RENDER_GENERAL,
    RENDER_PLUGIN: () => RENDER_PLUGIN,
    RENDER_STYLE: () => RENDER_STYLE,
    RENDER_TRANSFORM: () => RENDER_TRANSFORM,
    ROTATE_X: () => ROTATE_X,
    ROTATE_Y: () => ROTATE_Y,
    ROTATE_Z: () => ROTATE_Z,
    SCALE_3D: () => SCALE_3D,
    SCALE_X: () => SCALE_X,
    SCALE_Y: () => SCALE_Y,
    SCALE_Z: () => SCALE_Z,
    SIBLINGS: () => SIBLINGS,
    SKEW: () => SKEW,
    SKEW_X: () => SKEW_X,
    SKEW_Y: () => SKEW_Y,
    TRANSFORM: () => TRANSFORM,
    TRANSLATE_3D: () => TRANSLATE_3D,
    TRANSLATE_X: () => TRANSLATE_X,
    TRANSLATE_Y: () => TRANSLATE_Y,
    TRANSLATE_Z: () => TRANSLATE_Z,
    WF_PAGE: () => WF_PAGE,
    WIDTH: () => WIDTH,
    WILL_CHANGE: () => WILL_CHANGE,
    W_MOD_IX: () => W_MOD_IX,
    W_MOD_JS: () => W_MOD_JS
  });
  var IX2_ID_DELIMITER, WF_PAGE, W_MOD_JS, W_MOD_IX, BOUNDARY_SELECTOR, CONFIG_X_VALUE, CONFIG_Y_VALUE, CONFIG_Z_VALUE, CONFIG_VALUE, CONFIG_X_UNIT, CONFIG_Y_UNIT, CONFIG_Z_UNIT, CONFIG_UNIT, TRANSFORM, TRANSLATE_X, TRANSLATE_Y, TRANSLATE_Z, TRANSLATE_3D, SCALE_X, SCALE_Y, SCALE_Z, SCALE_3D, ROTATE_X, ROTATE_Y, ROTATE_Z, SKEW, SKEW_X, SKEW_Y, OPACITY, FILTER, FONT_VARIATION_SETTINGS, WIDTH, HEIGHT, BACKGROUND_COLOR, BACKGROUND, BORDER_COLOR, COLOR, DISPLAY, FLEX, WILL_CHANGE, AUTO, COMMA_DELIMITER, COLON_DELIMITER, BAR_DELIMITER, CHILDREN, IMMEDIATE_CHILDREN, SIBLINGS, PARENT, PRESERVE_3D, HTML_ELEMENT, PLAIN_OBJECT, ABSTRACT_NODE, RENDER_TRANSFORM, RENDER_GENERAL, RENDER_STYLE, RENDER_PLUGIN;
  var init_IX2EngineConstants = __esm({
    "packages/systems/ix2/shared/constants/IX2EngineConstants.ts"() {
      "use strict";
      IX2_ID_DELIMITER = "|";
      WF_PAGE = "data-wf-page";
      W_MOD_JS = "w-mod-js";
      W_MOD_IX = "w-mod-ix";
      BOUNDARY_SELECTOR = ".w-dyn-item";
      CONFIG_X_VALUE = "xValue";
      CONFIG_Y_VALUE = "yValue";
      CONFIG_Z_VALUE = "zValue";
      CONFIG_VALUE = "value";
      CONFIG_X_UNIT = "xUnit";
      CONFIG_Y_UNIT = "yUnit";
      CONFIG_Z_UNIT = "zUnit";
      CONFIG_UNIT = "unit";
      TRANSFORM = "transform";
      TRANSLATE_X = "translateX";
      TRANSLATE_Y = "translateY";
      TRANSLATE_Z = "translateZ";
      TRANSLATE_3D = "translate3d";
      SCALE_X = "scaleX";
      SCALE_Y = "scaleY";
      SCALE_Z = "scaleZ";
      SCALE_3D = "scale3d";
      ROTATE_X = "rotateX";
      ROTATE_Y = "rotateY";
      ROTATE_Z = "rotateZ";
      SKEW = "skew";
      SKEW_X = "skewX";
      SKEW_Y = "skewY";
      OPACITY = "opacity";
      FILTER = "filter";
      FONT_VARIATION_SETTINGS = "font-variation-settings";
      WIDTH = "width";
      HEIGHT = "height";
      BACKGROUND_COLOR = "backgroundColor";
      BACKGROUND = "background";
      BORDER_COLOR = "borderColor";
      COLOR = "color";
      DISPLAY = "display";
      FLEX = "flex";
      WILL_CHANGE = "willChange";
      AUTO = "AUTO";
      COMMA_DELIMITER = ",";
      COLON_DELIMITER = ":";
      BAR_DELIMITER = "|";
      CHILDREN = "CHILDREN";
      IMMEDIATE_CHILDREN = "IMMEDIATE_CHILDREN";
      SIBLINGS = "SIBLINGS";
      PARENT = "PARENT";
      PRESERVE_3D = "preserve-3d";
      HTML_ELEMENT = "HTML_ELEMENT";
      PLAIN_OBJECT = "PLAIN_OBJECT";
      ABSTRACT_NODE = "ABSTRACT_NODE";
      RENDER_TRANSFORM = "RENDER_TRANSFORM";
      RENDER_GENERAL = "RENDER_GENERAL";
      RENDER_STYLE = "RENDER_STYLE";
      RENDER_PLUGIN = "RENDER_PLUGIN";
    }
  });

  // packages/systems/ix2/shared/constants/index.ts
  var constants_exports = {};
  __export(constants_exports, {
    ActionAppliesTo: () => ActionAppliesTo,
    ActionTypeConsts: () => ActionTypeConsts,
    EventAppliesTo: () => EventAppliesTo,
    EventBasedOn: () => EventBasedOn,
    EventContinuousMouseAxes: () => EventContinuousMouseAxes,
    EventLimitAffectedElements: () => EventLimitAffectedElements,
    EventTypeConsts: () => EventTypeConsts,
    IX2EngineActionTypes: () => IX2EngineActionTypes_exports,
    IX2EngineConstants: () => IX2EngineConstants_exports,
    InteractionTypeConsts: () => InteractionTypeConsts,
    QuickEffectDirectionConsts: () => QuickEffectDirectionConsts,
    QuickEffectIds: () => QuickEffectIds,
    ReducedMotionTypes: () => ReducedMotionTypes
  });
  var init_constants = __esm({
    "packages/systems/ix2/shared/constants/index.ts"() {
      "use strict";
      init_trigger_events();
      init_animation_actions();
      init_trigger_interactions();
      init_reduced_motion();
      init_IX2EngineActionTypes();
      init_IX2EngineConstants();
    }
  });

  // packages/systems/ix2/engine/reducers/IX2DataReducer.ts
  var IX2_RAW_DATA_IMPORTED2, ixData;
  var init_IX2DataReducer = __esm({
    "packages/systems/ix2/engine/reducers/IX2DataReducer.ts"() {
      "use strict";
      init_constants();
      ({ IX2_RAW_DATA_IMPORTED: IX2_RAW_DATA_IMPORTED2 } = IX2EngineActionTypes_exports);
      ixData = (state = Object.freeze({}), action) => {
        switch (action.type) {
          case IX2_RAW_DATA_IMPORTED2: {
            return action.payload.ixData || Object.freeze({});
          }
          default: {
            return state;
          }
        }
      };
    }
  });

  // node_modules/timm/lib/timm.js
  var require_timm = __commonJS({
    "node_modules/timm/lib/timm.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
        return typeof obj;
      } : function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
      exports.clone = clone;
      exports.addLast = addLast2;
      exports.addFirst = addFirst;
      exports.removeLast = removeLast;
      exports.removeFirst = removeFirst;
      exports.insert = insert;
      exports.removeAt = removeAt;
      exports.replaceAt = replaceAt;
      exports.getIn = getIn3;
      exports.set = set3;
      exports.setIn = setIn4;
      exports.update = update;
      exports.updateIn = updateIn;
      exports.merge = merge5;
      exports.mergeDeep = mergeDeep;
      exports.mergeIn = mergeIn4;
      exports.omit = omit;
      exports.addDefaults = addDefaults;
      var INVALID_ARGS = "INVALID_ARGS";
      function throwStr(msg) {
        throw new Error(msg);
      }
      function getKeysAndSymbols(obj) {
        var keys = Object.keys(obj);
        if (Object.getOwnPropertySymbols) {
          return keys.concat(Object.getOwnPropertySymbols(obj));
        }
        return keys;
      }
      var hasOwnProperty4 = {}.hasOwnProperty;
      function clone(obj) {
        if (Array.isArray(obj))
          return obj.slice();
        var keys = getKeysAndSymbols(obj);
        var out = {};
        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          out[key] = obj[key];
        }
        return out;
      }
      function doMerge(fAddDefaults, fDeep, first) {
        var out = first;
        !(out != null) && throwStr(false ? "At least one object should be provided to merge()" : INVALID_ARGS);
        var fChanged = false;
        for (var _len = arguments.length, rest = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
          rest[_key - 3] = arguments[_key];
        }
        for (var idx = 0; idx < rest.length; idx++) {
          var obj = rest[idx];
          if (obj == null)
            continue;
          var keys = getKeysAndSymbols(obj);
          if (!keys.length)
            continue;
          for (var j = 0; j <= keys.length; j++) {
            var key = keys[j];
            if (fAddDefaults && out[key] !== void 0)
              continue;
            var nextVal = obj[key];
            if (fDeep && isObject2(out[key]) && isObject2(nextVal)) {
              nextVal = doMerge(fAddDefaults, fDeep, out[key], nextVal);
            }
            if (nextVal === void 0 || nextVal === out[key])
              continue;
            if (!fChanged) {
              fChanged = true;
              out = clone(out);
            }
            out[key] = nextVal;
          }
        }
        return out;
      }
      function isObject2(o) {
        var type = typeof o === "undefined" ? "undefined" : _typeof(o);
        return o != null && (type === "object" || type === "function");
      }
      function addLast2(array, val) {
        if (Array.isArray(val))
          return array.concat(val);
        return array.concat([val]);
      }
      function addFirst(array, val) {
        if (Array.isArray(val))
          return val.concat(array);
        return [val].concat(array);
      }
      function removeLast(array) {
        if (!array.length)
          return array;
        return array.slice(0, array.length - 1);
      }
      function removeFirst(array) {
        if (!array.length)
          return array;
        return array.slice(1);
      }
      function insert(array, idx, val) {
        return array.slice(0, idx).concat(Array.isArray(val) ? val : [val]).concat(array.slice(idx));
      }
      function removeAt(array, idx) {
        if (idx >= array.length || idx < 0)
          return array;
        return array.slice(0, idx).concat(array.slice(idx + 1));
      }
      function replaceAt(array, idx, newItem) {
        if (array[idx] === newItem)
          return array;
        var len = array.length;
        var result = Array(len);
        for (var i = 0; i < len; i++) {
          result[i] = array[i];
        }
        result[idx] = newItem;
        return result;
      }
      function getIn3(obj, path) {
        !Array.isArray(path) && throwStr(false ? "A path array should be provided when calling getIn()" : INVALID_ARGS);
        if (obj == null)
          return void 0;
        var ptr = obj;
        for (var i = 0; i < path.length; i++) {
          var key = path[i];
          ptr = ptr != null ? ptr[key] : void 0;
          if (ptr === void 0)
            return ptr;
        }
        return ptr;
      }
      function set3(obj, key, val) {
        var fallback = typeof key === "number" ? [] : {};
        var finalObj = obj == null ? fallback : obj;
        if (finalObj[key] === val)
          return finalObj;
        var obj2 = clone(finalObj);
        obj2[key] = val;
        return obj2;
      }
      function doSetIn(obj, path, val, idx) {
        var newValue = void 0;
        var key = path[idx];
        if (idx === path.length - 1) {
          newValue = val;
        } else {
          var nestedObj = isObject2(obj) && isObject2(obj[key]) ? obj[key] : typeof path[idx + 1] === "number" ? [] : {};
          newValue = doSetIn(nestedObj, path, val, idx + 1);
        }
        return set3(obj, key, newValue);
      }
      function setIn4(obj, path, val) {
        if (!path.length)
          return val;
        return doSetIn(obj, path, val, 0);
      }
      function update(obj, key, fnUpdate) {
        var prevVal = obj == null ? void 0 : obj[key];
        var nextVal = fnUpdate(prevVal);
        return set3(obj, key, nextVal);
      }
      function updateIn(obj, path, fnUpdate) {
        var prevVal = getIn3(obj, path);
        var nextVal = fnUpdate(prevVal);
        return setIn4(obj, path, nextVal);
      }
      function merge5(a, b, c, d, e, f) {
        for (var _len2 = arguments.length, rest = Array(_len2 > 6 ? _len2 - 6 : 0), _key2 = 6; _key2 < _len2; _key2++) {
          rest[_key2 - 6] = arguments[_key2];
        }
        return rest.length ? doMerge.call.apply(doMerge, [null, false, false, a, b, c, d, e, f].concat(rest)) : doMerge(false, false, a, b, c, d, e, f);
      }
      function mergeDeep(a, b, c, d, e, f) {
        for (var _len3 = arguments.length, rest = Array(_len3 > 6 ? _len3 - 6 : 0), _key3 = 6; _key3 < _len3; _key3++) {
          rest[_key3 - 6] = arguments[_key3];
        }
        return rest.length ? doMerge.call.apply(doMerge, [null, false, true, a, b, c, d, e, f].concat(rest)) : doMerge(false, true, a, b, c, d, e, f);
      }
      function mergeIn4(a, path, b, c, d, e, f) {
        var prevVal = getIn3(a, path);
        if (prevVal == null)
          prevVal = {};
        var nextVal = void 0;
        for (var _len4 = arguments.length, rest = Array(_len4 > 7 ? _len4 - 7 : 0), _key4 = 7; _key4 < _len4; _key4++) {
          rest[_key4 - 7] = arguments[_key4];
        }
        if (rest.length) {
          nextVal = doMerge.call.apply(doMerge, [null, false, false, prevVal, b, c, d, e, f].concat(rest));
        } else {
          nextVal = doMerge(false, false, prevVal, b, c, d, e, f);
        }
        return setIn4(a, path, nextVal);
      }
      function omit(obj, attrs) {
        var omitList = Array.isArray(attrs) ? attrs : [attrs];
        var fDoSomething = false;
        for (var i = 0; i < omitList.length; i++) {
          if (hasOwnProperty4.call(obj, omitList[i])) {
            fDoSomething = true;
            break;
          }
        }
        if (!fDoSomething)
          return obj;
        var out = {};
        var keys = getKeysAndSymbols(obj);
        for (var _i = 0; _i < keys.length; _i++) {
          var key = keys[_i];
          if (omitList.indexOf(key) >= 0)
            continue;
          out[key] = obj[key];
        }
        return out;
      }
      function addDefaults(a, b, c, d, e, f) {
        for (var _len5 = arguments.length, rest = Array(_len5 > 6 ? _len5 - 6 : 0), _key5 = 6; _key5 < _len5; _key5++) {
          rest[_key5 - 6] = arguments[_key5];
        }
        return rest.length ? doMerge.call.apply(doMerge, [null, true, false, a, b, c, d, e, f].concat(rest)) : doMerge(true, false, a, b, c, d, e, f);
      }
      var timm = {
        clone,
        addLast: addLast2,
        addFirst,
        removeLast,
        removeFirst,
        insert,
        removeAt,
        replaceAt,
        getIn: getIn3,
        // eslint-disable-next-line object-shorthand
        set: set3,
        // so that flow doesn't complain
        setIn: setIn4,
        update,
        updateIn,
        merge: merge5,
        mergeDeep,
        mergeIn: mergeIn4,
        omit,
        addDefaults
      };
      exports.default = timm;
    }
  });

  // packages/systems/ix2/engine/reducers/IX2RequestReducer.ts
  var import_timm, IX2_PREVIEW_REQUESTED2, IX2_PLAYBACK_REQUESTED2, IX2_STOP_REQUESTED2, IX2_CLEAR_REQUESTED2, initialState, stateKeys, ixRequest;
  var init_IX2RequestReducer = __esm({
    "packages/systems/ix2/engine/reducers/IX2RequestReducer.ts"() {
      "use strict";
      init_constants();
      import_timm = __toESM(require_timm());
      ({
        IX2_PREVIEW_REQUESTED: IX2_PREVIEW_REQUESTED2,
        IX2_PLAYBACK_REQUESTED: IX2_PLAYBACK_REQUESTED2,
        IX2_STOP_REQUESTED: IX2_STOP_REQUESTED2,
        IX2_CLEAR_REQUESTED: IX2_CLEAR_REQUESTED2
      } = IX2EngineActionTypes_exports);
      initialState = {
        preview: {},
        playback: {},
        stop: {},
        clear: {}
      };
      stateKeys = Object.create(null, {
        [IX2_PREVIEW_REQUESTED2]: { value: "preview" },
        [IX2_PLAYBACK_REQUESTED2]: { value: "playback" },
        [IX2_STOP_REQUESTED2]: { value: "stop" },
        [IX2_CLEAR_REQUESTED2]: { value: "clear" }
      });
      ixRequest = (state = initialState, action) => {
        if (action.type in stateKeys) {
          const key = [stateKeys[action.type]];
          return (0, import_timm.setIn)(state, [key], { ...action.payload });
        }
        return state;
      };
    }
  });

  // packages/systems/ix2/engine/reducers/IX2SessionReducer.ts
  var import_timm2, IX2_SESSION_INITIALIZED2, IX2_SESSION_STARTED2, IX2_TEST_FRAME_RENDERED2, IX2_SESSION_STOPPED2, IX2_EVENT_LISTENER_ADDED2, IX2_EVENT_STATE_CHANGED2, IX2_ANIMATION_FRAME_CHANGED2, IX2_ACTION_LIST_PLAYBACK_CHANGED2, IX2_VIEWPORT_WIDTH_CHANGED2, IX2_MEDIA_QUERIES_DEFINED2, initialState2, TEST_FRAME_STEPS_SIZE, ixSession;
  var init_IX2SessionReducer = __esm({
    "packages/systems/ix2/engine/reducers/IX2SessionReducer.ts"() {
      "use strict";
      init_constants();
      import_timm2 = __toESM(require_timm());
      ({
        IX2_SESSION_INITIALIZED: IX2_SESSION_INITIALIZED2,
        IX2_SESSION_STARTED: IX2_SESSION_STARTED2,
        IX2_TEST_FRAME_RENDERED: IX2_TEST_FRAME_RENDERED2,
        IX2_SESSION_STOPPED: IX2_SESSION_STOPPED2,
        IX2_EVENT_LISTENER_ADDED: IX2_EVENT_LISTENER_ADDED2,
        IX2_EVENT_STATE_CHANGED: IX2_EVENT_STATE_CHANGED2,
        IX2_ANIMATION_FRAME_CHANGED: IX2_ANIMATION_FRAME_CHANGED2,
        IX2_ACTION_LIST_PLAYBACK_CHANGED: IX2_ACTION_LIST_PLAYBACK_CHANGED2,
        IX2_VIEWPORT_WIDTH_CHANGED: IX2_VIEWPORT_WIDTH_CHANGED2,
        IX2_MEDIA_QUERIES_DEFINED: IX2_MEDIA_QUERIES_DEFINED2
      } = IX2EngineActionTypes_exports);
      initialState2 = {
        active: false,
        tick: 0,
        eventListeners: [],
        eventState: {},
        playbackState: {},
        viewportWidth: 0,
        mediaQueryKey: null,
        hasBoundaryNodes: false,
        hasDefinedMediaQueries: false,
        reducedMotion: false
      };
      TEST_FRAME_STEPS_SIZE = 20;
      ixSession = (state = initialState2, action) => {
        switch (action.type) {
          case IX2_SESSION_INITIALIZED2: {
            const { hasBoundaryNodes, reducedMotion } = action.payload;
            return (0, import_timm2.merge)(state, {
              hasBoundaryNodes,
              reducedMotion
            });
          }
          case IX2_SESSION_STARTED2: {
            return (0, import_timm2.set)(state, "active", true);
          }
          case IX2_TEST_FRAME_RENDERED2: {
            const {
              payload: { step = TEST_FRAME_STEPS_SIZE }
            } = action;
            return (0, import_timm2.set)(state, "tick", state.tick + step);
          }
          case IX2_SESSION_STOPPED2: {
            return initialState2;
          }
          case IX2_ANIMATION_FRAME_CHANGED2: {
            const {
              payload: { now }
            } = action;
            return (0, import_timm2.set)(state, "tick", now);
          }
          case IX2_EVENT_LISTENER_ADDED2: {
            const eventListeners = (0, import_timm2.addLast)(state.eventListeners, action.payload);
            return (0, import_timm2.set)(state, "eventListeners", eventListeners);
          }
          case IX2_EVENT_STATE_CHANGED2: {
            const { stateKey, newState } = action.payload;
            return (0, import_timm2.setIn)(state, ["eventState", stateKey], newState);
          }
          case IX2_ACTION_LIST_PLAYBACK_CHANGED2: {
            const { actionListId, isPlaying } = action.payload;
            return (0, import_timm2.setIn)(state, ["playbackState", actionListId], isPlaying);
          }
          case IX2_VIEWPORT_WIDTH_CHANGED2: {
            const { width, mediaQueries } = action.payload;
            const mediaQueryCount = mediaQueries.length;
            let mediaQueryKey = null;
            for (let i = 0; i < mediaQueryCount; i++) {
              const { key, min, max } = mediaQueries[i];
              if (width >= min && width <= max) {
                mediaQueryKey = key;
                break;
              }
            }
            return (0, import_timm2.merge)(state, {
              viewportWidth: width,
              mediaQueryKey
            });
          }
          case IX2_MEDIA_QUERIES_DEFINED2: {
            return (0, import_timm2.set)(state, "hasDefinedMediaQueries", true);
          }
          default: {
            return state;
          }
        }
      };
    }
  });

  // node_modules/lodash/_listCacheClear.js
  var require_listCacheClear = __commonJS({
    "node_modules/lodash/_listCacheClear.js"(exports, module) {
      function listCacheClear() {
        this.__data__ = [];
        this.size = 0;
      }
      module.exports = listCacheClear;
    }
  });

  // node_modules/lodash/eq.js
  var require_eq = __commonJS({
    "node_modules/lodash/eq.js"(exports, module) {
      function eq(value, other) {
        return value === other || value !== value && other !== other;
      }
      module.exports = eq;
    }
  });

  // node_modules/lodash/_assocIndexOf.js
  var require_assocIndexOf = __commonJS({
    "node_modules/lodash/_assocIndexOf.js"(exports, module) {
      var eq = require_eq();
      function assocIndexOf(array, key) {
        var length = array.length;
        while (length--) {
          if (eq(array[length][0], key)) {
            return length;
          }
        }
        return -1;
      }
      module.exports = assocIndexOf;
    }
  });

  // node_modules/lodash/_listCacheDelete.js
  var require_listCacheDelete = __commonJS({
    "node_modules/lodash/_listCacheDelete.js"(exports, module) {
      var assocIndexOf = require_assocIndexOf();
      var arrayProto = Array.prototype;
      var splice = arrayProto.splice;
      function listCacheDelete(key) {
        var data = this.__data__, index = assocIndexOf(data, key);
        if (index < 0) {
          return false;
        }
        var lastIndex = data.length - 1;
        if (index == lastIndex) {
          data.pop();
        } else {
          splice.call(data, index, 1);
        }
        --this.size;
        return true;
      }
      module.exports = listCacheDelete;
    }
  });

  // node_modules/lodash/_listCacheGet.js
  var require_listCacheGet = __commonJS({
    "node_modules/lodash/_listCacheGet.js"(exports, module) {
      var assocIndexOf = require_assocIndexOf();
      function listCacheGet(key) {
        var data = this.__data__, index = assocIndexOf(data, key);
        return index < 0 ? void 0 : data[index][1];
      }
      module.exports = listCacheGet;
    }
  });

  // node_modules/lodash/_listCacheHas.js
  var require_listCacheHas = __commonJS({
    "node_modules/lodash/_listCacheHas.js"(exports, module) {
      var assocIndexOf = require_assocIndexOf();
      function listCacheHas(key) {
        return assocIndexOf(this.__data__, key) > -1;
      }
      module.exports = listCacheHas;
    }
  });

  // node_modules/lodash/_listCacheSet.js
  var require_listCacheSet = __commonJS({
    "node_modules/lodash/_listCacheSet.js"(exports, module) {
      var assocIndexOf = require_assocIndexOf();
      function listCacheSet(key, value) {
        var data = this.__data__, index = assocIndexOf(data, key);
        if (index < 0) {
          ++this.size;
          data.push([key, value]);
        } else {
          data[index][1] = value;
        }
        return this;
      }
      module.exports = listCacheSet;
    }
  });

  // node_modules/lodash/_ListCache.js
  var require_ListCache = __commonJS({
    "node_modules/lodash/_ListCache.js"(exports, module) {
      var listCacheClear = require_listCacheClear();
      var listCacheDelete = require_listCacheDelete();
      var listCacheGet = require_listCacheGet();
      var listCacheHas = require_listCacheHas();
      var listCacheSet = require_listCacheSet();
      function ListCache(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      ListCache.prototype.clear = listCacheClear;
      ListCache.prototype["delete"] = listCacheDelete;
      ListCache.prototype.get = listCacheGet;
      ListCache.prototype.has = listCacheHas;
      ListCache.prototype.set = listCacheSet;
      module.exports = ListCache;
    }
  });

  // node_modules/lodash/_stackClear.js
  var require_stackClear = __commonJS({
    "node_modules/lodash/_stackClear.js"(exports, module) {
      var ListCache = require_ListCache();
      function stackClear() {
        this.__data__ = new ListCache();
        this.size = 0;
      }
      module.exports = stackClear;
    }
  });

  // node_modules/lodash/_stackDelete.js
  var require_stackDelete = __commonJS({
    "node_modules/lodash/_stackDelete.js"(exports, module) {
      function stackDelete(key) {
        var data = this.__data__, result = data["delete"](key);
        this.size = data.size;
        return result;
      }
      module.exports = stackDelete;
    }
  });

  // node_modules/lodash/_stackGet.js
  var require_stackGet = __commonJS({
    "node_modules/lodash/_stackGet.js"(exports, module) {
      function stackGet(key) {
        return this.__data__.get(key);
      }
      module.exports = stackGet;
    }
  });

  // node_modules/lodash/_stackHas.js
  var require_stackHas = __commonJS({
    "node_modules/lodash/_stackHas.js"(exports, module) {
      function stackHas(key) {
        return this.__data__.has(key);
      }
      module.exports = stackHas;
    }
  });

  // node_modules/lodash/isObject.js
  var require_isObject = __commonJS({
    "node_modules/lodash/isObject.js"(exports, module) {
      function isObject2(value) {
        var type = typeof value;
        return value != null && (type == "object" || type == "function");
      }
      module.exports = isObject2;
    }
  });

  // node_modules/lodash/isFunction.js
  var require_isFunction = __commonJS({
    "node_modules/lodash/isFunction.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isObject2 = require_isObject();
      var asyncTag = "[object AsyncFunction]";
      var funcTag = "[object Function]";
      var genTag = "[object GeneratorFunction]";
      var proxyTag = "[object Proxy]";
      function isFunction3(value) {
        if (!isObject2(value)) {
          return false;
        }
        var tag = baseGetTag(value);
        return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
      }
      module.exports = isFunction3;
    }
  });

  // node_modules/lodash/_coreJsData.js
  var require_coreJsData = __commonJS({
    "node_modules/lodash/_coreJsData.js"(exports, module) {
      var root = require_root();
      var coreJsData = root["__core-js_shared__"];
      module.exports = coreJsData;
    }
  });

  // node_modules/lodash/_isMasked.js
  var require_isMasked = __commonJS({
    "node_modules/lodash/_isMasked.js"(exports, module) {
      var coreJsData = require_coreJsData();
      var maskSrcKey = function() {
        var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
        return uid ? "Symbol(src)_1." + uid : "";
      }();
      function isMasked(func) {
        return !!maskSrcKey && maskSrcKey in func;
      }
      module.exports = isMasked;
    }
  });

  // node_modules/lodash/_toSource.js
  var require_toSource = __commonJS({
    "node_modules/lodash/_toSource.js"(exports, module) {
      var funcProto = Function.prototype;
      var funcToString = funcProto.toString;
      function toSource(func) {
        if (func != null) {
          try {
            return funcToString.call(func);
          } catch (e) {
          }
          try {
            return func + "";
          } catch (e) {
          }
        }
        return "";
      }
      module.exports = toSource;
    }
  });

  // node_modules/lodash/_baseIsNative.js
  var require_baseIsNative = __commonJS({
    "node_modules/lodash/_baseIsNative.js"(exports, module) {
      var isFunction3 = require_isFunction();
      var isMasked = require_isMasked();
      var isObject2 = require_isObject();
      var toSource = require_toSource();
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var funcProto = Function.prototype;
      var objectProto = Object.prototype;
      var funcToString = funcProto.toString;
      var hasOwnProperty4 = objectProto.hasOwnProperty;
      var reIsNative = RegExp(
        "^" + funcToString.call(hasOwnProperty4).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      );
      function baseIsNative(value) {
        if (!isObject2(value) || isMasked(value)) {
          return false;
        }
        var pattern = isFunction3(value) ? reIsNative : reIsHostCtor;
        return pattern.test(toSource(value));
      }
      module.exports = baseIsNative;
    }
  });

  // node_modules/lodash/_getValue.js
  var require_getValue = __commonJS({
    "node_modules/lodash/_getValue.js"(exports, module) {
      function getValue(object, key) {
        return object == null ? void 0 : object[key];
      }
      module.exports = getValue;
    }
  });

  // node_modules/lodash/_getNative.js
  var require_getNative = __commonJS({
    "node_modules/lodash/_getNative.js"(exports, module) {
      var baseIsNative = require_baseIsNative();
      var getValue = require_getValue();
      function getNative(object, key) {
        var value = getValue(object, key);
        return baseIsNative(value) ? value : void 0;
      }
      module.exports = getNative;
    }
  });

  // node_modules/lodash/_Map.js
  var require_Map = __commonJS({
    "node_modules/lodash/_Map.js"(exports, module) {
      var getNative = require_getNative();
      var root = require_root();
      var Map2 = getNative(root, "Map");
      module.exports = Map2;
    }
  });

  // node_modules/lodash/_nativeCreate.js
  var require_nativeCreate = __commonJS({
    "node_modules/lodash/_nativeCreate.js"(exports, module) {
      var getNative = require_getNative();
      var nativeCreate = getNative(Object, "create");
      module.exports = nativeCreate;
    }
  });

  // node_modules/lodash/_hashClear.js
  var require_hashClear = __commonJS({
    "node_modules/lodash/_hashClear.js"(exports, module) {
      var nativeCreate = require_nativeCreate();
      function hashClear() {
        this.__data__ = nativeCreate ? nativeCreate(null) : {};
        this.size = 0;
      }
      module.exports = hashClear;
    }
  });

  // node_modules/lodash/_hashDelete.js
  var require_hashDelete = __commonJS({
    "node_modules/lodash/_hashDelete.js"(exports, module) {
      function hashDelete(key) {
        var result = this.has(key) && delete this.__data__[key];
        this.size -= result ? 1 : 0;
        return result;
      }
      module.exports = hashDelete;
    }
  });

  // node_modules/lodash/_hashGet.js
  var require_hashGet = __commonJS({
    "node_modules/lodash/_hashGet.js"(exports, module) {
      var nativeCreate = require_nativeCreate();
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      var objectProto = Object.prototype;
      var hasOwnProperty4 = objectProto.hasOwnProperty;
      function hashGet(key) {
        var data = this.__data__;
        if (nativeCreate) {
          var result = data[key];
          return result === HASH_UNDEFINED ? void 0 : result;
        }
        return hasOwnProperty4.call(data, key) ? data[key] : void 0;
      }
      module.exports = hashGet;
    }
  });

  // node_modules/lodash/_hashHas.js
  var require_hashHas = __commonJS({
    "node_modules/lodash/_hashHas.js"(exports, module) {
      var nativeCreate = require_nativeCreate();
      var objectProto = Object.prototype;
      var hasOwnProperty4 = objectProto.hasOwnProperty;
      function hashHas(key) {
        var data = this.__data__;
        return nativeCreate ? data[key] !== void 0 : hasOwnProperty4.call(data, key);
      }
      module.exports = hashHas;
    }
  });

  // node_modules/lodash/_hashSet.js
  var require_hashSet = __commonJS({
    "node_modules/lodash/_hashSet.js"(exports, module) {
      var nativeCreate = require_nativeCreate();
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      function hashSet(key, value) {
        var data = this.__data__;
        this.size += this.has(key) ? 0 : 1;
        data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
        return this;
      }
      module.exports = hashSet;
    }
  });

  // node_modules/lodash/_Hash.js
  var require_Hash = __commonJS({
    "node_modules/lodash/_Hash.js"(exports, module) {
      var hashClear = require_hashClear();
      var hashDelete = require_hashDelete();
      var hashGet = require_hashGet();
      var hashHas = require_hashHas();
      var hashSet = require_hashSet();
      function Hash(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      Hash.prototype.clear = hashClear;
      Hash.prototype["delete"] = hashDelete;
      Hash.prototype.get = hashGet;
      Hash.prototype.has = hashHas;
      Hash.prototype.set = hashSet;
      module.exports = Hash;
    }
  });

  // node_modules/lodash/_mapCacheClear.js
  var require_mapCacheClear = __commonJS({
    "node_modules/lodash/_mapCacheClear.js"(exports, module) {
      var Hash = require_Hash();
      var ListCache = require_ListCache();
      var Map2 = require_Map();
      function mapCacheClear() {
        this.size = 0;
        this.__data__ = {
          "hash": new Hash(),
          "map": new (Map2 || ListCache)(),
          "string": new Hash()
        };
      }
      module.exports = mapCacheClear;
    }
  });

  // node_modules/lodash/_isKeyable.js
  var require_isKeyable = __commonJS({
    "node_modules/lodash/_isKeyable.js"(exports, module) {
      function isKeyable(value) {
        var type = typeof value;
        return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
      }
      module.exports = isKeyable;
    }
  });

  // node_modules/lodash/_getMapData.js
  var require_getMapData = __commonJS({
    "node_modules/lodash/_getMapData.js"(exports, module) {
      var isKeyable = require_isKeyable();
      function getMapData(map, key) {
        var data = map.__data__;
        return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
      }
      module.exports = getMapData;
    }
  });

  // node_modules/lodash/_mapCacheDelete.js
  var require_mapCacheDelete = __commonJS({
    "node_modules/lodash/_mapCacheDelete.js"(exports, module) {
      var getMapData = require_getMapData();
      function mapCacheDelete(key) {
        var result = getMapData(this, key)["delete"](key);
        this.size -= result ? 1 : 0;
        return result;
      }
      module.exports = mapCacheDelete;
    }
  });

  // node_modules/lodash/_mapCacheGet.js
  var require_mapCacheGet = __commonJS({
    "node_modules/lodash/_mapCacheGet.js"(exports, module) {
      var getMapData = require_getMapData();
      function mapCacheGet(key) {
        return getMapData(this, key).get(key);
      }
      module.exports = mapCacheGet;
    }
  });

  // node_modules/lodash/_mapCacheHas.js
  var require_mapCacheHas = __commonJS({
    "node_modules/lodash/_mapCacheHas.js"(exports, module) {
      var getMapData = require_getMapData();
      function mapCacheHas(key) {
        return getMapData(this, key).has(key);
      }
      module.exports = mapCacheHas;
    }
  });

  // node_modules/lodash/_mapCacheSet.js
  var require_mapCacheSet = __commonJS({
    "node_modules/lodash/_mapCacheSet.js"(exports, module) {
      var getMapData = require_getMapData();
      function mapCacheSet(key, value) {
        var data = getMapData(this, key), size2 = data.size;
        data.set(key, value);
        this.size += data.size == size2 ? 0 : 1;
        return this;
      }
      module.exports = mapCacheSet;
    }
  });

  // node_modules/lodash/_MapCache.js
  var require_MapCache = __commonJS({
    "node_modules/lodash/_MapCache.js"(exports, module) {
      var mapCacheClear = require_mapCacheClear();
      var mapCacheDelete = require_mapCacheDelete();
      var mapCacheGet = require_mapCacheGet();
      var mapCacheHas = require_mapCacheHas();
      var mapCacheSet = require_mapCacheSet();
      function MapCache(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      MapCache.prototype.clear = mapCacheClear;
      MapCache.prototype["delete"] = mapCacheDelete;
      MapCache.prototype.get = mapCacheGet;
      MapCache.prototype.has = mapCacheHas;
      MapCache.prototype.set = mapCacheSet;
      module.exports = MapCache;
    }
  });

  // node_modules/lodash/_stackSet.js
  var require_stackSet = __commonJS({
    "node_modules/lodash/_stackSet.js"(exports, module) {
      var ListCache = require_ListCache();
      var Map2 = require_Map();
      var MapCache = require_MapCache();
      var LARGE_ARRAY_SIZE = 200;
      function stackSet(key, value) {
        var data = this.__data__;
        if (data instanceof ListCache) {
          var pairs = data.__data__;
          if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
            pairs.push([key, value]);
            this.size = ++data.size;
            return this;
          }
          data = this.__data__ = new MapCache(pairs);
        }
        data.set(key, value);
        this.size = data.size;
        return this;
      }
      module.exports = stackSet;
    }
  });

  // node_modules/lodash/_Stack.js
  var require_Stack = __commonJS({
    "node_modules/lodash/_Stack.js"(exports, module) {
      var ListCache = require_ListCache();
      var stackClear = require_stackClear();
      var stackDelete = require_stackDelete();
      var stackGet = require_stackGet();
      var stackHas = require_stackHas();
      var stackSet = require_stackSet();
      function Stack(entries) {
        var data = this.__data__ = new ListCache(entries);
        this.size = data.size;
      }
      Stack.prototype.clear = stackClear;
      Stack.prototype["delete"] = stackDelete;
      Stack.prototype.get = stackGet;
      Stack.prototype.has = stackHas;
      Stack.prototype.set = stackSet;
      module.exports = Stack;
    }
  });

  // node_modules/lodash/_setCacheAdd.js
  var require_setCacheAdd = __commonJS({
    "node_modules/lodash/_setCacheAdd.js"(exports, module) {
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      function setCacheAdd(value) {
        this.__data__.set(value, HASH_UNDEFINED);
        return this;
      }
      module.exports = setCacheAdd;
    }
  });

  // node_modules/lodash/_setCacheHas.js
  var require_setCacheHas = __commonJS({
    "node_modules/lodash/_setCacheHas.js"(exports, module) {
      function setCacheHas(value) {
        return this.__data__.has(value);
      }
      module.exports = setCacheHas;
    }
  });

  // node_modules/lodash/_SetCache.js
  var require_SetCache = __commonJS({
    "node_modules/lodash/_SetCache.js"(exports, module) {
      var MapCache = require_MapCache();
      var setCacheAdd = require_setCacheAdd();
      var setCacheHas = require_setCacheHas();
      function SetCache(values2) {
        var index = -1, length = values2 == null ? 0 : values2.length;
        this.__data__ = new MapCache();
        while (++index < length) {
          this.add(values2[index]);
        }
      }
      SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
      SetCache.prototype.has = setCacheHas;
      module.exports = SetCache;
    }
  });

  // node_modules/lodash/_arraySome.js
  var require_arraySome = __commonJS({
    "node_modules/lodash/_arraySome.js"(exports, module) {
      function arraySome(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (predicate(array[index], index, array)) {
            return true;
          }
        }
        return false;
      }
      module.exports = arraySome;
    }
  });

  // node_modules/lodash/_cacheHas.js
  var require_cacheHas = __commonJS({
    "node_modules/lodash/_cacheHas.js"(exports, module) {
      function cacheHas(cache, key) {
        return cache.has(key);
      }
      module.exports = cacheHas;
    }
  });

  // node_modules/lodash/_equalArrays.js
  var require_equalArrays = __commonJS({
    "node_modules/lodash/_equalArrays.js"(exports, module) {
      var SetCache = require_SetCache();
      var arraySome = require_arraySome();
      var cacheHas = require_cacheHas();
      var COMPARE_PARTIAL_FLAG = 1;
      var COMPARE_UNORDERED_FLAG = 2;
      function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
        if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
          return false;
        }
        var arrStacked = stack.get(array);
        var othStacked = stack.get(other);
        if (arrStacked && othStacked) {
          return arrStacked == other && othStacked == array;
        }
        var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
        stack.set(array, other);
        stack.set(other, array);
        while (++index < arrLength) {
          var arrValue = array[index], othValue = other[index];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
          }
          if (compared !== void 0) {
            if (compared) {
              continue;
            }
            result = false;
            break;
          }
          if (seen) {
            if (!arraySome(other, function(othValue2, othIndex) {
              if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                return seen.push(othIndex);
              }
            })) {
              result = false;
              break;
            }
          } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
            result = false;
            break;
          }
        }
        stack["delete"](array);
        stack["delete"](other);
        return result;
      }
      module.exports = equalArrays;
    }
  });

  // node_modules/lodash/_Uint8Array.js
  var require_Uint8Array = __commonJS({
    "node_modules/lodash/_Uint8Array.js"(exports, module) {
      var root = require_root();
      var Uint8Array2 = root.Uint8Array;
      module.exports = Uint8Array2;
    }
  });

  // node_modules/lodash/_mapToArray.js
  var require_mapToArray = __commonJS({
    "node_modules/lodash/_mapToArray.js"(exports, module) {
      function mapToArray(map) {
        var index = -1, result = Array(map.size);
        map.forEach(function(value, key) {
          result[++index] = [key, value];
        });
        return result;
      }
      module.exports = mapToArray;
    }
  });

  // node_modules/lodash/_setToArray.js
  var require_setToArray = __commonJS({
    "node_modules/lodash/_setToArray.js"(exports, module) {
      function setToArray(set3) {
        var index = -1, result = Array(set3.size);
        set3.forEach(function(value) {
          result[++index] = value;
        });
        return result;
      }
      module.exports = setToArray;
    }
  });

  // node_modules/lodash/_equalByTag.js
  var require_equalByTag = __commonJS({
    "node_modules/lodash/_equalByTag.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var Uint8Array2 = require_Uint8Array();
      var eq = require_eq();
      var equalArrays = require_equalArrays();
      var mapToArray = require_mapToArray();
      var setToArray = require_setToArray();
      var COMPARE_PARTIAL_FLAG = 1;
      var COMPARE_UNORDERED_FLAG = 2;
      var boolTag = "[object Boolean]";
      var dateTag = "[object Date]";
      var errorTag = "[object Error]";
      var mapTag = "[object Map]";
      var numberTag = "[object Number]";
      var regexpTag = "[object RegExp]";
      var setTag = "[object Set]";
      var stringTag = "[object String]";
      var symbolTag = "[object Symbol]";
      var arrayBufferTag = "[object ArrayBuffer]";
      var dataViewTag = "[object DataView]";
      var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
      var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
      function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
        switch (tag) {
          case dataViewTag:
            if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
              return false;
            }
            object = object.buffer;
            other = other.buffer;
          case arrayBufferTag:
            if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
              return false;
            }
            return true;
          case boolTag:
          case dateTag:
          case numberTag:
            return eq(+object, +other);
          case errorTag:
            return object.name == other.name && object.message == other.message;
          case regexpTag:
          case stringTag:
            return object == other + "";
          case mapTag:
            var convert = mapToArray;
          case setTag:
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
            convert || (convert = setToArray);
            if (object.size != other.size && !isPartial) {
              return false;
            }
            var stacked = stack.get(object);
            if (stacked) {
              return stacked == other;
            }
            bitmask |= COMPARE_UNORDERED_FLAG;
            stack.set(object, other);
            var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
            stack["delete"](object);
            return result;
          case symbolTag:
            if (symbolValueOf) {
              return symbolValueOf.call(object) == symbolValueOf.call(other);
            }
        }
        return false;
      }
      module.exports = equalByTag;
    }
  });

  // node_modules/lodash/_arrayPush.js
  var require_arrayPush = __commonJS({
    "node_modules/lodash/_arrayPush.js"(exports, module) {
      function arrayPush(array, values2) {
        var index = -1, length = values2.length, offset = array.length;
        while (++index < length) {
          array[offset + index] = values2[index];
        }
        return array;
      }
      module.exports = arrayPush;
    }
  });

  // node_modules/lodash/isArray.js
  var require_isArray = __commonJS({
    "node_modules/lodash/isArray.js"(exports, module) {
      var isArray = Array.isArray;
      module.exports = isArray;
    }
  });

  // node_modules/lodash/_baseGetAllKeys.js
  var require_baseGetAllKeys = __commonJS({
    "node_modules/lodash/_baseGetAllKeys.js"(exports, module) {
      var arrayPush = require_arrayPush();
      var isArray = require_isArray();
      function baseGetAllKeys(object, keysFunc, symbolsFunc) {
        var result = keysFunc(object);
        return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
      }
      module.exports = baseGetAllKeys;
    }
  });

  // node_modules/lodash/_arrayFilter.js
  var require_arrayFilter = __commonJS({
    "node_modules/lodash/_arrayFilter.js"(exports, module) {
      function arrayFilter(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array[index];
          if (predicate(value, index, array)) {
            result[resIndex++] = value;
          }
        }
        return result;
      }
      module.exports = arrayFilter;
    }
  });

  // node_modules/lodash/stubArray.js
  var require_stubArray = __commonJS({
    "node_modules/lodash/stubArray.js"(exports, module) {
      function stubArray() {
        return [];
      }
      module.exports = stubArray;
    }
  });

  // node_modules/lodash/_getSymbols.js
  var require_getSymbols = __commonJS({
    "node_modules/lodash/_getSymbols.js"(exports, module) {
      var arrayFilter = require_arrayFilter();
      var stubArray = require_stubArray();
      var objectProto = Object.prototype;
      var propertyIsEnumerable = objectProto.propertyIsEnumerable;
      var nativeGetSymbols = Object.getOwnPropertySymbols;
      var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
        if (object == null) {
          return [];
        }
        object = Object(object);
        return arrayFilter(nativeGetSymbols(object), function(symbol) {
          return propertyIsEnumerable.call(object, symbol);
        });
      };
      module.exports = getSymbols;
    }
  });

  // node_modules/lodash/_baseTimes.js
  var require_baseTimes = __commonJS({
    "node_modules/lodash/_baseTimes.js"(exports, module) {
      function baseTimes(n, iteratee) {
        var index = -1, result = Array(n);
        while (++index < n) {
          result[index] = iteratee(index);
        }
        return result;
      }
      module.exports = baseTimes;
    }
  });

  // node_modules/lodash/_baseIsArguments.js
  var require_baseIsArguments = __commonJS({
    "node_modules/lodash/_baseIsArguments.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isObjectLike = require_isObjectLike();
      var argsTag = "[object Arguments]";
      function baseIsArguments(value) {
        return isObjectLike(value) && baseGetTag(value) == argsTag;
      }
      module.exports = baseIsArguments;
    }
  });

  // node_modules/lodash/isArguments.js
  var require_isArguments = __commonJS({
    "node_modules/lodash/isArguments.js"(exports, module) {
      var baseIsArguments = require_baseIsArguments();
      var isObjectLike = require_isObjectLike();
      var objectProto = Object.prototype;
      var hasOwnProperty4 = objectProto.hasOwnProperty;
      var propertyIsEnumerable = objectProto.propertyIsEnumerable;
      var isArguments = baseIsArguments(function() {
        return arguments;
      }()) ? baseIsArguments : function(value) {
        return isObjectLike(value) && hasOwnProperty4.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
      };
      module.exports = isArguments;
    }
  });

  // node_modules/lodash/stubFalse.js
  var require_stubFalse = __commonJS({
    "node_modules/lodash/stubFalse.js"(exports, module) {
      function stubFalse() {
        return false;
      }
      module.exports = stubFalse;
    }
  });

  // node_modules/lodash/isBuffer.js
  var require_isBuffer = __commonJS({
    "node_modules/lodash/isBuffer.js"(exports, module) {
      var root = require_root();
      var stubFalse = require_stubFalse();
      var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
      var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var Buffer2 = moduleExports ? root.Buffer : void 0;
      var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
      var isBuffer = nativeIsBuffer || stubFalse;
      module.exports = isBuffer;
    }
  });

  // node_modules/lodash/_isIndex.js
  var require_isIndex = __commonJS({
    "node_modules/lodash/_isIndex.js"(exports, module) {
      var MAX_SAFE_INTEGER = 9007199254740991;
      var reIsUint = /^(?:0|[1-9]\d*)$/;
      function isIndex(value, length) {
        var type = typeof value;
        length = length == null ? MAX_SAFE_INTEGER : length;
        return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
      }
      module.exports = isIndex;
    }
  });

  // node_modules/lodash/isLength.js
  var require_isLength = __commonJS({
    "node_modules/lodash/isLength.js"(exports, module) {
      var MAX_SAFE_INTEGER = 9007199254740991;
      function isLength(value) {
        return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
      }
      module.exports = isLength;
    }
  });

  // node_modules/lodash/_baseIsTypedArray.js
  var require_baseIsTypedArray = __commonJS({
    "node_modules/lodash/_baseIsTypedArray.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isLength = require_isLength();
      var isObjectLike = require_isObjectLike();
      var argsTag = "[object Arguments]";
      var arrayTag = "[object Array]";
      var boolTag = "[object Boolean]";
      var dateTag = "[object Date]";
      var errorTag = "[object Error]";
      var funcTag = "[object Function]";
      var mapTag = "[object Map]";
      var numberTag = "[object Number]";
      var objectTag = "[object Object]";
      var regexpTag = "[object RegExp]";
      var setTag = "[object Set]";
      var stringTag = "[object String]";
      var weakMapTag = "[object WeakMap]";
      var arrayBufferTag = "[object ArrayBuffer]";
      var dataViewTag = "[object DataView]";
      var float32Tag = "[object Float32Array]";
      var float64Tag = "[object Float64Array]";
      var int8Tag = "[object Int8Array]";
      var int16Tag = "[object Int16Array]";
      var int32Tag = "[object Int32Array]";
      var uint8Tag = "[object Uint8Array]";
      var uint8ClampedTag = "[object Uint8ClampedArray]";
      var uint16Tag = "[object Uint16Array]";
      var uint32Tag = "[object Uint32Array]";
      var typedArrayTags = {};
      typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
      typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
      function baseIsTypedArray(value) {
        return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
      }
      module.exports = baseIsTypedArray;
    }
  });

  // node_modules/lodash/_baseUnary.js
  var require_baseUnary = __commonJS({
    "node_modules/lodash/_baseUnary.js"(exports, module) {
      function baseUnary(func) {
        return function(value) {
          return func(value);
        };
      }
      module.exports = baseUnary;
    }
  });

  // node_modules/lodash/_nodeUtil.js
  var require_nodeUtil = __commonJS({
    "node_modules/lodash/_nodeUtil.js"(exports, module) {
      var freeGlobal = require_freeGlobal();
      var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
      var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var freeProcess = moduleExports && freeGlobal.process;
      var nodeUtil = function() {
        try {
          var types = freeModule && freeModule.require && freeModule.require("util").types;
          if (types) {
            return types;
          }
          return freeProcess && freeProcess.binding && freeProcess.binding("util");
        } catch (e) {
        }
      }();
      module.exports = nodeUtil;
    }
  });

  // node_modules/lodash/isTypedArray.js
  var require_isTypedArray = __commonJS({
    "node_modules/lodash/isTypedArray.js"(exports, module) {
      var baseIsTypedArray = require_baseIsTypedArray();
      var baseUnary = require_baseUnary();
      var nodeUtil = require_nodeUtil();
      var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
      var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
      module.exports = isTypedArray;
    }
  });

  // node_modules/lodash/_arrayLikeKeys.js
  var require_arrayLikeKeys = __commonJS({
    "node_modules/lodash/_arrayLikeKeys.js"(exports, module) {
      var baseTimes = require_baseTimes();
      var isArguments = require_isArguments();
      var isArray = require_isArray();
      var isBuffer = require_isBuffer();
      var isIndex = require_isIndex();
      var isTypedArray = require_isTypedArray();
      var objectProto = Object.prototype;
      var hasOwnProperty4 = objectProto.hasOwnProperty;
      function arrayLikeKeys(value, inherited) {
        var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
        for (var key in value) {
          if ((inherited || hasOwnProperty4.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
          (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
          isIndex(key, length)))) {
            result.push(key);
          }
        }
        return result;
      }
      module.exports = arrayLikeKeys;
    }
  });

  // node_modules/lodash/_isPrototype.js
  var require_isPrototype = __commonJS({
    "node_modules/lodash/_isPrototype.js"(exports, module) {
      var objectProto = Object.prototype;
      function isPrototype(value) {
        var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
        return value === proto;
      }
      module.exports = isPrototype;
    }
  });

  // node_modules/lodash/_nativeKeys.js
  var require_nativeKeys = __commonJS({
    "node_modules/lodash/_nativeKeys.js"(exports, module) {
      var overArg = require_overArg();
      var nativeKeys = overArg(Object.keys, Object);
      module.exports = nativeKeys;
    }
  });

  // node_modules/lodash/_baseKeys.js
  var require_baseKeys = __commonJS({
    "node_modules/lodash/_baseKeys.js"(exports, module) {
      var isPrototype = require_isPrototype();
      var nativeKeys = require_nativeKeys();
      var objectProto = Object.prototype;
      var hasOwnProperty4 = objectProto.hasOwnProperty;
      function baseKeys(object) {
        if (!isPrototype(object)) {
          return nativeKeys(object);
        }
        var result = [];
        for (var key in Object(object)) {
          if (hasOwnProperty4.call(object, key) && key != "constructor") {
            result.push(key);
          }
        }
        return result;
      }
      module.exports = baseKeys;
    }
  });

  // node_modules/lodash/isArrayLike.js
  var require_isArrayLike = __commonJS({
    "node_modules/lodash/isArrayLike.js"(exports, module) {
      var isFunction3 = require_isFunction();
      var isLength = require_isLength();
      function isArrayLike(value) {
        return value != null && isLength(value.length) && !isFunction3(value);
      }
      module.exports = isArrayLike;
    }
  });

  // node_modules/lodash/keys.js
  var require_keys = __commonJS({
    "node_modules/lodash/keys.js"(exports, module) {
      var arrayLikeKeys = require_arrayLikeKeys();
      var baseKeys = require_baseKeys();
      var isArrayLike = require_isArrayLike();
      function keys(object) {
        return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
      }
      module.exports = keys;
    }
  });

  // node_modules/lodash/_getAllKeys.js
  var require_getAllKeys = __commonJS({
    "node_modules/lodash/_getAllKeys.js"(exports, module) {
      var baseGetAllKeys = require_baseGetAllKeys();
      var getSymbols = require_getSymbols();
      var keys = require_keys();
      function getAllKeys(object) {
        return baseGetAllKeys(object, keys, getSymbols);
      }
      module.exports = getAllKeys;
    }
  });

  // node_modules/lodash/_equalObjects.js
  var require_equalObjects = __commonJS({
    "node_modules/lodash/_equalObjects.js"(exports, module) {
      var getAllKeys = require_getAllKeys();
      var COMPARE_PARTIAL_FLAG = 1;
      var objectProto = Object.prototype;
      var hasOwnProperty4 = objectProto.hasOwnProperty;
      function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
        if (objLength != othLength && !isPartial) {
          return false;
        }
        var index = objLength;
        while (index--) {
          var key = objProps[index];
          if (!(isPartial ? key in other : hasOwnProperty4.call(other, key))) {
            return false;
          }
        }
        var objStacked = stack.get(object);
        var othStacked = stack.get(other);
        if (objStacked && othStacked) {
          return objStacked == other && othStacked == object;
        }
        var result = true;
        stack.set(object, other);
        stack.set(other, object);
        var skipCtor = isPartial;
        while (++index < objLength) {
          key = objProps[index];
          var objValue = object[key], othValue = other[key];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
          }
          if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
            result = false;
            break;
          }
          skipCtor || (skipCtor = key == "constructor");
        }
        if (result && !skipCtor) {
          var objCtor = object.constructor, othCtor = other.constructor;
          if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
            result = false;
          }
        }
        stack["delete"](object);
        stack["delete"](other);
        return result;
      }
      module.exports = equalObjects;
    }
  });

  // node_modules/lodash/_DataView.js
  var require_DataView = __commonJS({
    "node_modules/lodash/_DataView.js"(exports, module) {
      var getNative = require_getNative();
      var root = require_root();
      var DataView = getNative(root, "DataView");
      module.exports = DataView;
    }
  });

  // node_modules/lodash/_Promise.js
  var require_Promise = __commonJS({
    "node_modules/lodash/_Promise.js"(exports, module) {
      var getNative = require_getNative();
      var root = require_root();
      var Promise3 = getNative(root, "Promise");
      module.exports = Promise3;
    }
  });

  // node_modules/lodash/_Set.js
  var require_Set = __commonJS({
    "node_modules/lodash/_Set.js"(exports, module) {
      var getNative = require_getNative();
      var root = require_root();
      var Set2 = getNative(root, "Set");
      module.exports = Set2;
    }
  });

  // node_modules/lodash/_WeakMap.js
  var require_WeakMap = __commonJS({
    "node_modules/lodash/_WeakMap.js"(exports, module) {
      var getNative = require_getNative();
      var root = require_root();
      var WeakMap2 = getNative(root, "WeakMap");
      module.exports = WeakMap2;
    }
  });

  // node_modules/lodash/_getTag.js
  var require_getTag = __commonJS({
    "node_modules/lodash/_getTag.js"(exports, module) {
      var DataView = require_DataView();
      var Map2 = require_Map();
      var Promise3 = require_Promise();
      var Set2 = require_Set();
      var WeakMap2 = require_WeakMap();
      var baseGetTag = require_baseGetTag();
      var toSource = require_toSource();
      var mapTag = "[object Map]";
      var objectTag = "[object Object]";
      var promiseTag = "[object Promise]";
      var setTag = "[object Set]";
      var weakMapTag = "[object WeakMap]";
      var dataViewTag = "[object DataView]";
      var dataViewCtorString = toSource(DataView);
      var mapCtorString = toSource(Map2);
      var promiseCtorString = toSource(Promise3);
      var setCtorString = toSource(Set2);
      var weakMapCtorString = toSource(WeakMap2);
      var getTag = baseGetTag;
      if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise3 && getTag(Promise3.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap2 && getTag(new WeakMap2()) != weakMapTag) {
        getTag = function(value) {
          var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
          if (ctorString) {
            switch (ctorString) {
              case dataViewCtorString:
                return dataViewTag;
              case mapCtorString:
                return mapTag;
              case promiseCtorString:
                return promiseTag;
              case setCtorString:
                return setTag;
              case weakMapCtorString:
                return weakMapTag;
            }
          }
          return result;
        };
      }
      module.exports = getTag;
    }
  });

  // node_modules/lodash/_baseIsEqualDeep.js
  var require_baseIsEqualDeep = __commonJS({
    "node_modules/lodash/_baseIsEqualDeep.js"(exports, module) {
      var Stack = require_Stack();
      var equalArrays = require_equalArrays();
      var equalByTag = require_equalByTag();
      var equalObjects = require_equalObjects();
      var getTag = require_getTag();
      var isArray = require_isArray();
      var isBuffer = require_isBuffer();
      var isTypedArray = require_isTypedArray();
      var COMPARE_PARTIAL_FLAG = 1;
      var argsTag = "[object Arguments]";
      var arrayTag = "[object Array]";
      var objectTag = "[object Object]";
      var objectProto = Object.prototype;
      var hasOwnProperty4 = objectProto.hasOwnProperty;
      function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
        var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
        objTag = objTag == argsTag ? objectTag : objTag;
        othTag = othTag == argsTag ? objectTag : othTag;
        var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
        if (isSameTag && isBuffer(object)) {
          if (!isBuffer(other)) {
            return false;
          }
          objIsArr = true;
          objIsObj = false;
        }
        if (isSameTag && !objIsObj) {
          stack || (stack = new Stack());
          return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
        }
        if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
          var objIsWrapped = objIsObj && hasOwnProperty4.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty4.call(other, "__wrapped__");
          if (objIsWrapped || othIsWrapped) {
            var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
            stack || (stack = new Stack());
            return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
          }
        }
        if (!isSameTag) {
          return false;
        }
        stack || (stack = new Stack());
        return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
      }
      module.exports = baseIsEqualDeep;
    }
  });

  // node_modules/lodash/_baseIsEqual.js
  var require_baseIsEqual = __commonJS({
    "node_modules/lodash/_baseIsEqual.js"(exports, module) {
      var baseIsEqualDeep = require_baseIsEqualDeep();
      var isObjectLike = require_isObjectLike();
      function baseIsEqual(value, other, bitmask, customizer, stack) {
        if (value === other) {
          return true;
        }
        if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
          return value !== value && other !== other;
        }
        return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
      }
      module.exports = baseIsEqual;
    }
  });

  // node_modules/lodash/_baseIsMatch.js
  var require_baseIsMatch = __commonJS({
    "node_modules/lodash/_baseIsMatch.js"(exports, module) {
      var Stack = require_Stack();
      var baseIsEqual = require_baseIsEqual();
      var COMPARE_PARTIAL_FLAG = 1;
      var COMPARE_UNORDERED_FLAG = 2;
      function baseIsMatch(object, source, matchData, customizer) {
        var index = matchData.length, length = index, noCustomizer = !customizer;
        if (object == null) {
          return !length;
        }
        object = Object(object);
        while (index--) {
          var data = matchData[index];
          if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
            return false;
          }
        }
        while (++index < length) {
          data = matchData[index];
          var key = data[0], objValue = object[key], srcValue = data[1];
          if (noCustomizer && data[2]) {
            if (objValue === void 0 && !(key in object)) {
              return false;
            }
          } else {
            var stack = new Stack();
            if (customizer) {
              var result = customizer(objValue, srcValue, key, object, source, stack);
            }
            if (!(result === void 0 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) {
              return false;
            }
          }
        }
        return true;
      }
      module.exports = baseIsMatch;
    }
  });

  // node_modules/lodash/_isStrictComparable.js
  var require_isStrictComparable = __commonJS({
    "node_modules/lodash/_isStrictComparable.js"(exports, module) {
      var isObject2 = require_isObject();
      function isStrictComparable(value) {
        return value === value && !isObject2(value);
      }
      module.exports = isStrictComparable;
    }
  });

  // node_modules/lodash/_getMatchData.js
  var require_getMatchData = __commonJS({
    "node_modules/lodash/_getMatchData.js"(exports, module) {
      var isStrictComparable = require_isStrictComparable();
      var keys = require_keys();
      function getMatchData(object) {
        var result = keys(object), length = result.length;
        while (length--) {
          var key = result[length], value = object[key];
          result[length] = [key, value, isStrictComparable(value)];
        }
        return result;
      }
      module.exports = getMatchData;
    }
  });

  // node_modules/lodash/_matchesStrictComparable.js
  var require_matchesStrictComparable = __commonJS({
    "node_modules/lodash/_matchesStrictComparable.js"(exports, module) {
      function matchesStrictComparable(key, srcValue) {
        return function(object) {
          if (object == null) {
            return false;
          }
          return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
        };
      }
      module.exports = matchesStrictComparable;
    }
  });

  // node_modules/lodash/_baseMatches.js
  var require_baseMatches = __commonJS({
    "node_modules/lodash/_baseMatches.js"(exports, module) {
      var baseIsMatch = require_baseIsMatch();
      var getMatchData = require_getMatchData();
      var matchesStrictComparable = require_matchesStrictComparable();
      function baseMatches(source) {
        var matchData = getMatchData(source);
        if (matchData.length == 1 && matchData[0][2]) {
          return matchesStrictComparable(matchData[0][0], matchData[0][1]);
        }
        return function(object) {
          return object === source || baseIsMatch(object, source, matchData);
        };
      }
      module.exports = baseMatches;
    }
  });

  // node_modules/lodash/isSymbol.js
  var require_isSymbol = __commonJS({
    "node_modules/lodash/isSymbol.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isObjectLike = require_isObjectLike();
      var symbolTag = "[object Symbol]";
      function isSymbol(value) {
        return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
      }
      module.exports = isSymbol;
    }
  });

  // node_modules/lodash/_isKey.js
  var require_isKey = __commonJS({
    "node_modules/lodash/_isKey.js"(exports, module) {
      var isArray = require_isArray();
      var isSymbol = require_isSymbol();
      var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
      var reIsPlainProp = /^\w*$/;
      function isKey(value, object) {
        if (isArray(value)) {
          return false;
        }
        var type = typeof value;
        if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
          return true;
        }
        return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
      }
      module.exports = isKey;
    }
  });

  // node_modules/lodash/memoize.js
  var require_memoize = __commonJS({
    "node_modules/lodash/memoize.js"(exports, module) {
      var MapCache = require_MapCache();
      var FUNC_ERROR_TEXT = "Expected a function";
      function memoize2(func, resolver) {
        if (typeof func != "function" || resolver != null && typeof resolver != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        var memoized = function() {
          var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
          if (cache.has(key)) {
            return cache.get(key);
          }
          var result = func.apply(this, args);
          memoized.cache = cache.set(key, result) || cache;
          return result;
        };
        memoized.cache = new (memoize2.Cache || MapCache)();
        return memoized;
      }
      memoize2.Cache = MapCache;
      module.exports = memoize2;
    }
  });

  // node_modules/lodash/_memoizeCapped.js
  var require_memoizeCapped = __commonJS({
    "node_modules/lodash/_memoizeCapped.js"(exports, module) {
      var memoize2 = require_memoize();
      var MAX_MEMOIZE_SIZE = 500;
      function memoizeCapped(func) {
        var result = memoize2(func, function(key) {
          if (cache.size === MAX_MEMOIZE_SIZE) {
            cache.clear();
          }
          return key;
        });
        var cache = result.cache;
        return result;
      }
      module.exports = memoizeCapped;
    }
  });

  // node_modules/lodash/_stringToPath.js
  var require_stringToPath = __commonJS({
    "node_modules/lodash/_stringToPath.js"(exports, module) {
      var memoizeCapped = require_memoizeCapped();
      var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
      var reEscapeChar = /\\(\\)?/g;
      var stringToPath = memoizeCapped(function(string) {
        var result = [];
        if (string.charCodeAt(0) === 46) {
          result.push("");
        }
        string.replace(rePropName, function(match, number, quote, subString) {
          result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
        });
        return result;
      });
      module.exports = stringToPath;
    }
  });

  // node_modules/lodash/_arrayMap.js
  var require_arrayMap = __commonJS({
    "node_modules/lodash/_arrayMap.js"(exports, module) {
      function arrayMap(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length, result = Array(length);
        while (++index < length) {
          result[index] = iteratee(array[index], index, array);
        }
        return result;
      }
      module.exports = arrayMap;
    }
  });

  // node_modules/lodash/_baseToString.js
  var require_baseToString = __commonJS({
    "node_modules/lodash/_baseToString.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var arrayMap = require_arrayMap();
      var isArray = require_isArray();
      var isSymbol = require_isSymbol();
      var INFINITY = 1 / 0;
      var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
      var symbolToString = symbolProto ? symbolProto.toString : void 0;
      function baseToString(value) {
        if (typeof value == "string") {
          return value;
        }
        if (isArray(value)) {
          return arrayMap(value, baseToString) + "";
        }
        if (isSymbol(value)) {
          return symbolToString ? symbolToString.call(value) : "";
        }
        var result = value + "";
        return result == "0" && 1 / value == -INFINITY ? "-0" : result;
      }
      module.exports = baseToString;
    }
  });

  // node_modules/lodash/toString.js
  var require_toString = __commonJS({
    "node_modules/lodash/toString.js"(exports, module) {
      var baseToString = require_baseToString();
      function toString4(value) {
        return value == null ? "" : baseToString(value);
      }
      module.exports = toString4;
    }
  });

  // node_modules/lodash/_castPath.js
  var require_castPath = __commonJS({
    "node_modules/lodash/_castPath.js"(exports, module) {
      var isArray = require_isArray();
      var isKey = require_isKey();
      var stringToPath = require_stringToPath();
      var toString4 = require_toString();
      function castPath(value, object) {
        if (isArray(value)) {
          return value;
        }
        return isKey(value, object) ? [value] : stringToPath(toString4(value));
      }
      module.exports = castPath;
    }
  });

  // node_modules/lodash/_toKey.js
  var require_toKey = __commonJS({
    "node_modules/lodash/_toKey.js"(exports, module) {
      var isSymbol = require_isSymbol();
      var INFINITY = 1 / 0;
      function toKey(value) {
        if (typeof value == "string" || isSymbol(value)) {
          return value;
        }
        var result = value + "";
        return result == "0" && 1 / value == -INFINITY ? "-0" : result;
      }
      module.exports = toKey;
    }
  });

  // node_modules/lodash/_baseGet.js
  var require_baseGet = __commonJS({
    "node_modules/lodash/_baseGet.js"(exports, module) {
      var castPath = require_castPath();
      var toKey = require_toKey();
      function baseGet(object, path) {
        path = castPath(path, object);
        var index = 0, length = path.length;
        while (object != null && index < length) {
          object = object[toKey(path[index++])];
        }
        return index && index == length ? object : void 0;
      }
      module.exports = baseGet;
    }
  });

  // node_modules/lodash/get.js
  var require_get = __commonJS({
    "node_modules/lodash/get.js"(exports, module) {
      var baseGet = require_baseGet();
      function get8(object, path, defaultValue) {
        var result = object == null ? void 0 : baseGet(object, path);
        return result === void 0 ? defaultValue : result;
      }
      module.exports = get8;
    }
  });

  // node_modules/lodash/_baseHasIn.js
  var require_baseHasIn = __commonJS({
    "node_modules/lodash/_baseHasIn.js"(exports, module) {
      function baseHasIn(object, key) {
        return object != null && key in Object(object);
      }
      module.exports = baseHasIn;
    }
  });

  // node_modules/lodash/_hasPath.js
  var require_hasPath = __commonJS({
    "node_modules/lodash/_hasPath.js"(exports, module) {
      var castPath = require_castPath();
      var isArguments = require_isArguments();
      var isArray = require_isArray();
      var isIndex = require_isIndex();
      var isLength = require_isLength();
      var toKey = require_toKey();
      function hasPath(object, path, hasFunc) {
        path = castPath(path, object);
        var index = -1, length = path.length, result = false;
        while (++index < length) {
          var key = toKey(path[index]);
          if (!(result = object != null && hasFunc(object, key))) {
            break;
          }
          object = object[key];
        }
        if (result || ++index != length) {
          return result;
        }
        length = object == null ? 0 : object.length;
        return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
      }
      module.exports = hasPath;
    }
  });

  // node_modules/lodash/hasIn.js
  var require_hasIn = __commonJS({
    "node_modules/lodash/hasIn.js"(exports, module) {
      var baseHasIn = require_baseHasIn();
      var hasPath = require_hasPath();
      function hasIn(object, path) {
        return object != null && hasPath(object, path, baseHasIn);
      }
      module.exports = hasIn;
    }
  });

  // node_modules/lodash/_baseMatchesProperty.js
  var require_baseMatchesProperty = __commonJS({
    "node_modules/lodash/_baseMatchesProperty.js"(exports, module) {
      var baseIsEqual = require_baseIsEqual();
      var get8 = require_get();
      var hasIn = require_hasIn();
      var isKey = require_isKey();
      var isStrictComparable = require_isStrictComparable();
      var matchesStrictComparable = require_matchesStrictComparable();
      var toKey = require_toKey();
      var COMPARE_PARTIAL_FLAG = 1;
      var COMPARE_UNORDERED_FLAG = 2;
      function baseMatchesProperty(path, srcValue) {
        if (isKey(path) && isStrictComparable(srcValue)) {
          return matchesStrictComparable(toKey(path), srcValue);
        }
        return function(object) {
          var objValue = get8(object, path);
          return objValue === void 0 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
        };
      }
      module.exports = baseMatchesProperty;
    }
  });

  // node_modules/lodash/identity.js
  var require_identity = __commonJS({
    "node_modules/lodash/identity.js"(exports, module) {
      function identity2(value) {
        return value;
      }
      module.exports = identity2;
    }
  });

  // node_modules/lodash/_baseProperty.js
  var require_baseProperty = __commonJS({
    "node_modules/lodash/_baseProperty.js"(exports, module) {
      function baseProperty(key) {
        return function(object) {
          return object == null ? void 0 : object[key];
        };
      }
      module.exports = baseProperty;
    }
  });

  // node_modules/lodash/_basePropertyDeep.js
  var require_basePropertyDeep = __commonJS({
    "node_modules/lodash/_basePropertyDeep.js"(exports, module) {
      var baseGet = require_baseGet();
      function basePropertyDeep(path) {
        return function(object) {
          return baseGet(object, path);
        };
      }
      module.exports = basePropertyDeep;
    }
  });

  // node_modules/lodash/property.js
  var require_property = __commonJS({
    "node_modules/lodash/property.js"(exports, module) {
      var baseProperty = require_baseProperty();
      var basePropertyDeep = require_basePropertyDeep();
      var isKey = require_isKey();
      var toKey = require_toKey();
      function property(path) {
        return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
      }
      module.exports = property;
    }
  });

  // node_modules/lodash/_baseIteratee.js
  var require_baseIteratee = __commonJS({
    "node_modules/lodash/_baseIteratee.js"(exports, module) {
      var baseMatches = require_baseMatches();
      var baseMatchesProperty = require_baseMatchesProperty();
      var identity2 = require_identity();
      var isArray = require_isArray();
      var property = require_property();
      function baseIteratee(value) {
        if (typeof value == "function") {
          return value;
        }
        if (value == null) {
          return identity2;
        }
        if (typeof value == "object") {
          return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
        }
        return property(value);
      }
      module.exports = baseIteratee;
    }
  });

  // node_modules/lodash/_createFind.js
  var require_createFind = __commonJS({
    "node_modules/lodash/_createFind.js"(exports, module) {
      var baseIteratee = require_baseIteratee();
      var isArrayLike = require_isArrayLike();
      var keys = require_keys();
      function createFind(findIndexFunc) {
        return function(collection, predicate, fromIndex) {
          var iterable = Object(collection);
          if (!isArrayLike(collection)) {
            var iteratee = baseIteratee(predicate, 3);
            collection = keys(collection);
            predicate = function(key) {
              return iteratee(iterable[key], key, iterable);
            };
          }
          var index = findIndexFunc(collection, predicate, fromIndex);
          return index > -1 ? iterable[iteratee ? collection[index] : index] : void 0;
        };
      }
      module.exports = createFind;
    }
  });

  // node_modules/lodash/_baseFindIndex.js
  var require_baseFindIndex = __commonJS({
    "node_modules/lodash/_baseFindIndex.js"(exports, module) {
      function baseFindIndex(array, predicate, fromIndex, fromRight) {
        var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
        while (fromRight ? index-- : ++index < length) {
          if (predicate(array[index], index, array)) {
            return index;
          }
        }
        return -1;
      }
      module.exports = baseFindIndex;
    }
  });

  // node_modules/lodash/_trimmedEndIndex.js
  var require_trimmedEndIndex = __commonJS({
    "node_modules/lodash/_trimmedEndIndex.js"(exports, module) {
      var reWhitespace = /\s/;
      function trimmedEndIndex(string) {
        var index = string.length;
        while (index-- && reWhitespace.test(string.charAt(index))) {
        }
        return index;
      }
      module.exports = trimmedEndIndex;
    }
  });

  // node_modules/lodash/_baseTrim.js
  var require_baseTrim = __commonJS({
    "node_modules/lodash/_baseTrim.js"(exports, module) {
      var trimmedEndIndex = require_trimmedEndIndex();
      var reTrimStart = /^\s+/;
      function baseTrim(string) {
        return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
      }
      module.exports = baseTrim;
    }
  });

  // node_modules/lodash/toNumber.js
  var require_toNumber = __commonJS({
    "node_modules/lodash/toNumber.js"(exports, module) {
      var baseTrim = require_baseTrim();
      var isObject2 = require_isObject();
      var isSymbol = require_isSymbol();
      var NAN = 0 / 0;
      var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
      var reIsBinary = /^0b[01]+$/i;
      var reIsOctal = /^0o[0-7]+$/i;
      var freeParseInt = parseInt;
      function toNumber(value) {
        if (typeof value == "number") {
          return value;
        }
        if (isSymbol(value)) {
          return NAN;
        }
        if (isObject2(value)) {
          var other = typeof value.valueOf == "function" ? value.valueOf() : value;
          value = isObject2(other) ? other + "" : other;
        }
        if (typeof value != "string") {
          return value === 0 ? value : +value;
        }
        value = baseTrim(value);
        var isBinary = reIsBinary.test(value);
        return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
      }
      module.exports = toNumber;
    }
  });

  // node_modules/lodash/toFinite.js
  var require_toFinite = __commonJS({
    "node_modules/lodash/toFinite.js"(exports, module) {
      var toNumber = require_toNumber();
      var INFINITY = 1 / 0;
      var MAX_INTEGER = 17976931348623157e292;
      function toFinite(value) {
        if (!value) {
          return value === 0 ? value : 0;
        }
        value = toNumber(value);
        if (value === INFINITY || value === -INFINITY) {
          var sign = value < 0 ? -1 : 1;
          return sign * MAX_INTEGER;
        }
        return value === value ? value : 0;
      }
      module.exports = toFinite;
    }
  });

  // node_modules/lodash/toInteger.js
  var require_toInteger = __commonJS({
    "node_modules/lodash/toInteger.js"(exports, module) {
      var toFinite = require_toFinite();
      function toInteger(value) {
        var result = toFinite(value), remainder = result % 1;
        return result === result ? remainder ? result - remainder : result : 0;
      }
      module.exports = toInteger;
    }
  });

  // node_modules/lodash/findIndex.js
  var require_findIndex = __commonJS({
    "node_modules/lodash/findIndex.js"(exports, module) {
      var baseFindIndex = require_baseFindIndex();
      var baseIteratee = require_baseIteratee();
      var toInteger = require_toInteger();
      var nativeMax = Math.max;
      function findIndex(array, predicate, fromIndex) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return -1;
        }
        var index = fromIndex == null ? 0 : toInteger(fromIndex);
        if (index < 0) {
          index = nativeMax(length + index, 0);
        }
        return baseFindIndex(array, baseIteratee(predicate, 3), index);
      }
      module.exports = findIndex;
    }
  });

  // node_modules/lodash/find.js
  var require_find = __commonJS({
    "node_modules/lodash/find.js"(exports, module) {
      var createFind = require_createFind();
      var findIndex = require_findIndex();
      var find4 = createFind(findIndex);
      module.exports = find4;
    }
  });

  // packages/systems/ix2/shared/logic/IX2BrowserSupport.ts
  var IX2BrowserSupport_exports = {};
  __export(IX2BrowserSupport_exports, {
    ELEMENT_MATCHES: () => ELEMENT_MATCHES,
    FLEX_PREFIXED: () => FLEX_PREFIXED,
    IS_BROWSER_ENV: () => IS_BROWSER_ENV,
    TRANSFORM_PREFIXED: () => TRANSFORM_PREFIXED,
    TRANSFORM_STYLE_PREFIXED: () => TRANSFORM_STYLE_PREFIXED,
    withBrowser: () => withBrowser
  });
  var import_find, IS_BROWSER_ENV, withBrowser, ELEMENT_MATCHES, FLEX_PREFIXED, TRANSFORM_PREFIXED, TRANSFORM_PREFIX, TRANSFORM_STYLE_PREFIXED;
  var init_IX2BrowserSupport = __esm({
    "packages/systems/ix2/shared/logic/IX2BrowserSupport.ts"() {
      "use strict";
      import_find = __toESM(require_find());
      IS_BROWSER_ENV = typeof window !== "undefined";
      withBrowser = (fn, fallback) => {
        if (IS_BROWSER_ENV) {
          return fn();
        }
        return fallback;
      };
      ELEMENT_MATCHES = withBrowser(() => {
        return (0, import_find.default)(
          [
            "matches",
            "matchesSelector",
            "mozMatchesSelector",
            "msMatchesSelector",
            "oMatchesSelector",
            "webkitMatchesSelector"
          ],
          (key) => key in Element.prototype
        );
      });
      FLEX_PREFIXED = withBrowser(() => {
        const el = document.createElement("i");
        const values2 = [
          "flex",
          "-webkit-flex",
          "-ms-flexbox",
          "-moz-box",
          "-webkit-box"
        ];
        const none = "";
        try {
          const { length } = values2;
          for (let i = 0; i < length; i++) {
            const value = values2[i];
            el.style.display = value;
            if (el.style.display === value) {
              return value;
            }
          }
          return none;
        } catch (err) {
          return none;
        }
      }, "flex");
      TRANSFORM_PREFIXED = withBrowser(() => {
        const el = document.createElement("i");
        if (el.style.transform == null) {
          const prefixes = ["Webkit", "Moz", "ms"];
          const suffix = "Transform";
          const { length } = prefixes;
          for (let i = 0; i < length; i++) {
            const prop = prefixes[i] + suffix;
            if (el.style[prop] !== void 0) {
              return prop;
            }
          }
        }
        return "transform";
      }, "transform");
      TRANSFORM_PREFIX = TRANSFORM_PREFIXED.split("transform")[0];
      TRANSFORM_STYLE_PREFIXED = TRANSFORM_PREFIX ? TRANSFORM_PREFIX + "TransformStyle" : "transformStyle";
    }
  });

  // node_modules/bezier-easing/src/index.js
  var require_src = __commonJS({
    "node_modules/bezier-easing/src/index.js"(exports, module) {
      var NEWTON_ITERATIONS = 4;
      var NEWTON_MIN_SLOPE = 1e-3;
      var SUBDIVISION_PRECISION = 1e-7;
      var SUBDIVISION_MAX_ITERATIONS = 10;
      var kSplineTableSize = 11;
      var kSampleStepSize = 1 / (kSplineTableSize - 1);
      var float32ArraySupported = typeof Float32Array === "function";
      function A(aA1, aA2) {
        return 1 - 3 * aA2 + 3 * aA1;
      }
      function B(aA1, aA2) {
        return 3 * aA2 - 6 * aA1;
      }
      function C(aA1) {
        return 3 * aA1;
      }
      function calcBezier(aT, aA1, aA2) {
        return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
      }
      function getSlope(aT, aA1, aA2) {
        return 3 * A(aA1, aA2) * aT * aT + 2 * B(aA1, aA2) * aT + C(aA1);
      }
      function binarySubdivide(aX, aA, aB, mX1, mX2) {
        var currentX, currentT, i = 0;
        do {
          currentT = aA + (aB - aA) / 2;
          currentX = calcBezier(currentT, mX1, mX2) - aX;
          if (currentX > 0) {
            aB = currentT;
          } else {
            aA = currentT;
          }
        } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
        return currentT;
      }
      function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
        for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
          var currentSlope = getSlope(aGuessT, mX1, mX2);
          if (currentSlope === 0) {
            return aGuessT;
          }
          var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
          aGuessT -= currentX / currentSlope;
        }
        return aGuessT;
      }
      module.exports = function bezier(mX1, mY1, mX2, mY2) {
        if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
          throw new Error("bezier x values must be in [0, 1] range");
        }
        var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
        if (mX1 !== mY1 || mX2 !== mY2) {
          for (var i = 0; i < kSplineTableSize; ++i) {
            sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
          }
        }
        function getTForX(aX) {
          var intervalStart = 0;
          var currentSample = 1;
          var lastSample = kSplineTableSize - 1;
          for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
            intervalStart += kSampleStepSize;
          }
          --currentSample;
          var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
          var guessForT = intervalStart + dist * kSampleStepSize;
          var initialSlope = getSlope(guessForT, mX1, mX2);
          if (initialSlope >= NEWTON_MIN_SLOPE) {
            return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
          } else if (initialSlope === 0) {
            return guessForT;
          } else {
            return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
          }
        }
        return function BezierEasing3(x) {
          if (mX1 === mY1 && mX2 === mY2) {
            return x;
          }
          if (x === 0) {
            return 0;
          }
          if (x === 1) {
            return 1;
          }
          return calcBezier(getTForX(x), mY1, mY2);
        };
      };
    }
  });

  // packages/systems/ix2/shared/logic/IX2Easings.ts
  var IX2Easings_exports = {};
  __export(IX2Easings_exports, {
    bounce: () => bounce,
    bouncePast: () => bouncePast,
    ease: () => ease,
    easeIn: () => easeIn,
    easeInOut: () => easeInOut,
    easeOut: () => easeOut,
    inBack: () => inBack,
    inCirc: () => inCirc,
    inCubic: () => inCubic,
    inElastic: () => inElastic,
    inExpo: () => inExpo,
    inOutBack: () => inOutBack,
    inOutCirc: () => inOutCirc,
    inOutCubic: () => inOutCubic,
    inOutElastic: () => inOutElastic,
    inOutExpo: () => inOutExpo,
    inOutQuad: () => inOutQuad,
    inOutQuart: () => inOutQuart,
    inOutQuint: () => inOutQuint,
    inOutSine: () => inOutSine,
    inQuad: () => inQuad,
    inQuart: () => inQuart,
    inQuint: () => inQuint,
    inSine: () => inSine,
    outBack: () => outBack,
    outBounce: () => outBounce,
    outCirc: () => outCirc,
    outCubic: () => outCubic,
    outElastic: () => outElastic,
    outExpo: () => outExpo,
    outQuad: () => outQuad,
    outQuart: () => outQuart,
    outQuint: () => outQuint,
    outSine: () => outSine,
    swingFrom: () => swingFrom,
    swingFromTo: () => swingFromTo,
    swingTo: () => swingTo
  });
  function inQuad(pos) {
    return Math.pow(pos, 2);
  }
  function outQuad(pos) {
    return -(Math.pow(pos - 1, 2) - 1);
  }
  function inOutQuad(pos) {
    if ((pos /= 0.5) < 1) {
      return 0.5 * Math.pow(pos, 2);
    }
    return -0.5 * ((pos -= 2) * pos - 2);
  }
  function inCubic(pos) {
    return Math.pow(pos, 3);
  }
  function outCubic(pos) {
    return Math.pow(pos - 1, 3) + 1;
  }
  function inOutCubic(pos) {
    if ((pos /= 0.5) < 1) {
      return 0.5 * Math.pow(pos, 3);
    }
    return 0.5 * (Math.pow(pos - 2, 3) + 2);
  }
  function inQuart(pos) {
    return Math.pow(pos, 4);
  }
  function outQuart(pos) {
    return -(Math.pow(pos - 1, 4) - 1);
  }
  function inOutQuart(pos) {
    if ((pos /= 0.5) < 1) {
      return 0.5 * Math.pow(pos, 4);
    }
    return -0.5 * ((pos -= 2) * Math.pow(pos, 3) - 2);
  }
  function inQuint(pos) {
    return Math.pow(pos, 5);
  }
  function outQuint(pos) {
    return Math.pow(pos - 1, 5) + 1;
  }
  function inOutQuint(pos) {
    if ((pos /= 0.5) < 1) {
      return 0.5 * Math.pow(pos, 5);
    }
    return 0.5 * (Math.pow(pos - 2, 5) + 2);
  }
  function inSine(pos) {
    return -Math.cos(pos * (Math.PI / 2)) + 1;
  }
  function outSine(pos) {
    return Math.sin(pos * (Math.PI / 2));
  }
  function inOutSine(pos) {
    return -0.5 * (Math.cos(Math.PI * pos) - 1);
  }
  function inExpo(pos) {
    return pos === 0 ? 0 : Math.pow(2, 10 * (pos - 1));
  }
  function outExpo(pos) {
    return pos === 1 ? 1 : -Math.pow(2, -10 * pos) + 1;
  }
  function inOutExpo(pos) {
    if (pos === 0) {
      return 0;
    }
    if (pos === 1) {
      return 1;
    }
    if ((pos /= 0.5) < 1) {
      return 0.5 * Math.pow(2, 10 * (pos - 1));
    }
    return 0.5 * (-Math.pow(2, -10 * --pos) + 2);
  }
  function inCirc(pos) {
    return -(Math.sqrt(1 - pos * pos) - 1);
  }
  function outCirc(pos) {
    return Math.sqrt(1 - Math.pow(pos - 1, 2));
  }
  function inOutCirc(pos) {
    if ((pos /= 0.5) < 1) {
      return -0.5 * (Math.sqrt(1 - pos * pos) - 1);
    }
    return 0.5 * (Math.sqrt(1 - (pos -= 2) * pos) + 1);
  }
  function outBounce(pos) {
    if (pos < 1 / 2.75) {
      return 7.5625 * pos * pos;
    } else if (pos < 2 / 2.75) {
      return 7.5625 * (pos -= 1.5 / 2.75) * pos + 0.75;
    } else if (pos < 2.5 / 2.75) {
      return 7.5625 * (pos -= 2.25 / 2.75) * pos + 0.9375;
    } else {
      return 7.5625 * (pos -= 2.625 / 2.75) * pos + 0.984375;
    }
  }
  function inBack(pos) {
    const s = magicSwing;
    return pos * pos * ((s + 1) * pos - s);
  }
  function outBack(pos) {
    const s = magicSwing;
    return (pos -= 1) * pos * ((s + 1) * pos + s) + 1;
  }
  function inOutBack(pos) {
    let s = magicSwing;
    if ((pos /= 0.5) < 1) {
      return 0.5 * (pos * pos * (((s *= 1.525) + 1) * pos - s));
    }
    return 0.5 * ((pos -= 2) * pos * (((s *= 1.525) + 1) * pos + s) + 2);
  }
  function inElastic(pos) {
    let s = magicSwing;
    let p = 0;
    let a = 1;
    if (pos === 0) {
      return 0;
    }
    if (pos === 1) {
      return 1;
    }
    if (!p) {
      p = 0.3;
    }
    if (a < 1) {
      a = 1;
      s = p / 4;
    } else {
      s = p / (2 * Math.PI) * Math.asin(1 / a);
    }
    return -(a * Math.pow(2, 10 * (pos -= 1)) * Math.sin((pos - s) * (2 * Math.PI) / p));
  }
  function outElastic(pos) {
    let s = magicSwing;
    let p = 0;
    let a = 1;
    if (pos === 0) {
      return 0;
    }
    if (pos === 1) {
      return 1;
    }
    if (!p) {
      p = 0.3;
    }
    if (a < 1) {
      a = 1;
      s = p / 4;
    } else {
      s = p / (2 * Math.PI) * Math.asin(1 / a);
    }
    return a * Math.pow(2, -10 * pos) * Math.sin((pos - s) * (2 * Math.PI) / p) + 1;
  }
  function inOutElastic(pos) {
    let s = magicSwing;
    let p = 0;
    let a = 1;
    if (pos === 0) {
      return 0;
    }
    if ((pos /= 1 / 2) === 2) {
      return 1;
    }
    if (!p) {
      p = 0.3 * 1.5;
    }
    if (a < 1) {
      a = 1;
      s = p / 4;
    } else {
      s = p / (2 * Math.PI) * Math.asin(1 / a);
    }
    if (pos < 1) {
      return -0.5 * (a * Math.pow(2, 10 * (pos -= 1)) * Math.sin((pos - s) * (2 * Math.PI) / p));
    }
    return a * Math.pow(2, -10 * (pos -= 1)) * Math.sin((pos - s) * (2 * Math.PI) / p) * 0.5 + 1;
  }
  function swingFromTo(pos) {
    let s = magicSwing;
    return (pos /= 0.5) < 1 ? 0.5 * (pos * pos * (((s *= 1.525) + 1) * pos - s)) : 0.5 * ((pos -= 2) * pos * (((s *= 1.525) + 1) * pos + s) + 2);
  }
  function swingFrom(pos) {
    const s = magicSwing;
    return pos * pos * ((s + 1) * pos - s);
  }
  function swingTo(pos) {
    const s = magicSwing;
    return (pos -= 1) * pos * ((s + 1) * pos + s) + 1;
  }
  function bounce(pos) {
    if (pos < 1 / 2.75) {
      return 7.5625 * pos * pos;
    } else if (pos < 2 / 2.75) {
      return 7.5625 * (pos -= 1.5 / 2.75) * pos + 0.75;
    } else if (pos < 2.5 / 2.75) {
      return 7.5625 * (pos -= 2.25 / 2.75) * pos + 0.9375;
    } else {
      return 7.5625 * (pos -= 2.625 / 2.75) * pos + 0.984375;
    }
  }
  function bouncePast(pos) {
    if (pos < 1 / 2.75) {
      return 7.5625 * pos * pos;
    } else if (pos < 2 / 2.75) {
      return 2 - (7.5625 * (pos -= 1.5 / 2.75) * pos + 0.75);
    } else if (pos < 2.5 / 2.75) {
      return 2 - (7.5625 * (pos -= 2.25 / 2.75) * pos + 0.9375);
    } else {
      return 2 - (7.5625 * (pos -= 2.625 / 2.75) * pos + 0.984375);
    }
  }
  var import_bezier_easing, magicSwing, ease, easeIn, easeOut, easeInOut;
  var init_IX2Easings = __esm({
    "packages/systems/ix2/shared/logic/IX2Easings.ts"() {
      "use strict";
      import_bezier_easing = __toESM(require_src());
      magicSwing = 1.70158;
      ease = (0, import_bezier_easing.default)(0.25, 0.1, 0.25, 1);
      easeIn = (0, import_bezier_easing.default)(0.42, 0, 1, 1);
      easeOut = (0, import_bezier_easing.default)(0, 0, 0.58, 1);
      easeInOut = (0, import_bezier_easing.default)(0.42, 0, 0.58, 1);
    }
  });

  // packages/systems/ix2/shared/logic/IX2EasingUtils.ts
  var IX2EasingUtils_exports = {};
  __export(IX2EasingUtils_exports, {
    applyEasing: () => applyEasing,
    createBezierEasing: () => createBezierEasing,
    optimizeFloat: () => optimizeFloat
  });
  function optimizeFloat(value, digits = 5, base = 10) {
    const pow = Math.pow(base, digits);
    const float = Number(Math.round(value * pow) / pow);
    return Math.abs(float) > 1e-4 ? float : 0;
  }
  function createBezierEasing(easing) {
    return (0, import_bezier_easing2.default)(...easing);
  }
  function applyEasing(easing, position, customEasingFn) {
    if (position === 0) {
      return 0;
    }
    if (position === 1) {
      return 1;
    }
    if (customEasingFn) {
      return optimizeFloat(position > 0 ? customEasingFn(position) : position);
    }
    return optimizeFloat(
      position > 0 && easing && IX2Easings_exports[easing] ? IX2Easings_exports[easing](position) : position
    );
  }
  var import_bezier_easing2;
  var init_IX2EasingUtils = __esm({
    "packages/systems/ix2/shared/logic/IX2EasingUtils.ts"() {
      "use strict";
      init_IX2Easings();
      import_bezier_easing2 = __toESM(require_src());
    }
  });

  // packages/systems/ix2/shared/reducers/IX2ElementsReducer.ts
  var IX2ElementsReducer_exports = {};
  __export(IX2ElementsReducer_exports, {
    createElementState: () => createElementState,
    ixElements: () => ixElements,
    mergeActionState: () => mergeActionState
  });
  function createElementState(state, ref, refType, elementId, actionItem) {
    const refId = refType === PLAIN_OBJECT2 ? (0, import_timm3.getIn)(actionItem, ["config", "target", "objectId"]) : null;
    return (0, import_timm3.mergeIn)(state, [elementId], {
      id: elementId,
      ref,
      refId,
      refType
    });
  }
  function mergeActionState(state, elementId, actionTypeId, actionState, actionItem) {
    const units = pickUnits(actionItem);
    const mergePath = [elementId, refState, actionTypeId];
    return (0, import_timm3.mergeIn)(state, mergePath, actionState, units);
  }
  function pickUnits(actionItem) {
    const { config } = actionItem;
    return valueUnitPairs.reduce((result, pair) => {
      const valueKey = pair[0];
      const unitKey = pair[1];
      const configValue = config[valueKey];
      const configUnit = config[unitKey];
      if (configValue != null && configUnit != null) {
        result[unitKey] = configUnit;
      }
      return result;
    }, {});
  }
  var import_timm3, HTML_ELEMENT2, PLAIN_OBJECT2, ABSTRACT_NODE2, CONFIG_X_VALUE2, CONFIG_Y_VALUE2, CONFIG_Z_VALUE2, CONFIG_VALUE2, CONFIG_X_UNIT2, CONFIG_Y_UNIT2, CONFIG_Z_UNIT2, CONFIG_UNIT2, IX2_SESSION_STOPPED3, IX2_INSTANCE_ADDED2, IX2_ELEMENT_STATE_CHANGED2, initialState3, refState, ixElements, valueUnitPairs;
  var init_IX2ElementsReducer = __esm({
    "packages/systems/ix2/shared/reducers/IX2ElementsReducer.ts"() {
      "use strict";
      import_timm3 = __toESM(require_timm());
      init_constants();
      ({
        HTML_ELEMENT: HTML_ELEMENT2,
        PLAIN_OBJECT: PLAIN_OBJECT2,
        ABSTRACT_NODE: ABSTRACT_NODE2,
        CONFIG_X_VALUE: CONFIG_X_VALUE2,
        CONFIG_Y_VALUE: CONFIG_Y_VALUE2,
        CONFIG_Z_VALUE: CONFIG_Z_VALUE2,
        CONFIG_VALUE: CONFIG_VALUE2,
        CONFIG_X_UNIT: CONFIG_X_UNIT2,
        CONFIG_Y_UNIT: CONFIG_Y_UNIT2,
        CONFIG_Z_UNIT: CONFIG_Z_UNIT2,
        CONFIG_UNIT: CONFIG_UNIT2
      } = IX2EngineConstants_exports);
      ({ IX2_SESSION_STOPPED: IX2_SESSION_STOPPED3, IX2_INSTANCE_ADDED: IX2_INSTANCE_ADDED2, IX2_ELEMENT_STATE_CHANGED: IX2_ELEMENT_STATE_CHANGED2 } = IX2EngineActionTypes_exports);
      initialState3 = {};
      refState = "refState";
      ixElements = (state = initialState3, action = {}) => {
        switch (action.type) {
          case IX2_SESSION_STOPPED3: {
            return initialState3;
          }
          case IX2_INSTANCE_ADDED2: {
            const {
              elementId,
              element: ref,
              origin,
              actionItem,
              refType
            } = action.payload;
            const { actionTypeId } = actionItem;
            let newState = state;
            if ((0, import_timm3.getIn)(newState, [elementId, ref]) !== ref) {
              newState = createElementState(
                newState,
                ref,
                refType,
                elementId,
                actionItem
              );
            }
            return mergeActionState(
              newState,
              elementId,
              actionTypeId,
              origin,
              actionItem
            );
          }
          case IX2_ELEMENT_STATE_CHANGED2: {
            const { elementId, actionTypeId, current, actionItem } = action.payload;
            return mergeActionState(
              state,
              elementId,
              actionTypeId,
              current,
              actionItem
            );
          }
          default: {
            return state;
          }
        }
      };
      valueUnitPairs = [
        [CONFIG_X_VALUE2, CONFIG_X_UNIT2],
        [CONFIG_Y_VALUE2, CONFIG_Y_UNIT2],
        [CONFIG_Z_VALUE2, CONFIG_Z_UNIT2],
        [CONFIG_VALUE2, CONFIG_UNIT2]
      ];
    }
  });

  // packages/systems/ix2/plugins/IX2Lottie.js
  var require_IX2Lottie = __commonJS({
    "packages/systems/ix2/plugins/IX2Lottie.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.renderPlugin = exports.getPluginOrigin = exports.getPluginDuration = exports.getPluginDestination = exports.getPluginConfig = exports.createPluginInstance = exports.clearPlugin = void 0;
      var getPluginConfig2 = (actionItemConfig) => {
        return actionItemConfig.value;
      };
      exports.getPluginConfig = getPluginConfig2;
      var getPluginDuration3 = (element, actionItem) => {
        if (actionItem.config.duration !== "auto") {
          return null;
        }
        const duration = parseFloat(element.getAttribute("data-duration"));
        if (duration > 0) {
          return duration * 1e3;
        }
        return parseFloat(element.getAttribute("data-default-duration")) * 1e3;
      };
      exports.getPluginDuration = getPluginDuration3;
      var getPluginOrigin2 = (refState2) => {
        return refState2 || {
          value: 0
        };
      };
      exports.getPluginOrigin = getPluginOrigin2;
      var getPluginDestination2 = (actionItemConfig) => {
        return {
          value: actionItemConfig.value
        };
      };
      exports.getPluginDestination = getPluginDestination2;
      var createPluginInstance3 = (element) => {
        const instance = window.Webflow.require("lottie").createInstance(element);
        instance.stop();
        instance.setSubframe(true);
        return instance;
      };
      exports.createPluginInstance = createPluginInstance3;
      var renderPlugin2 = (pluginInstance, refState2, actionItem) => {
        if (!pluginInstance) {
          return;
        }
        const percent = refState2[actionItem.actionTypeId].value / 100;
        pluginInstance.goToFrame(pluginInstance.frames * percent);
      };
      exports.renderPlugin = renderPlugin2;
      var clearPlugin2 = (element) => {
        const instance = window.Webflow.require("lottie").createInstance(element);
        instance.stop();
      };
      exports.clearPlugin = clearPlugin2;
    }
  });

  // packages/systems/ix2/plugins/IX2Spline.js
  var require_IX2Spline = __commonJS({
    "packages/systems/ix2/plugins/IX2Spline.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.renderPlugin = exports.getPluginOrigin = exports.getPluginDuration = exports.getPluginDestination = exports.getPluginConfig = exports.createPluginInstance = exports.clearPlugin = void 0;
      var queryContainerElement = (elementId) => document.querySelector(`[data-w-id="${elementId}"]`);
      var getFrontendModule = () => window.Webflow.require("spline");
      var difference = (arr1, arr2) => arr1.filter((x) => !arr2.includes(x));
      var getPluginConfig2 = (actionItemConfig, key) => {
        return actionItemConfig.value[key];
      };
      exports.getPluginConfig = getPluginConfig2;
      var getPluginDuration3 = () => {
        return null;
      };
      exports.getPluginDuration = getPluginDuration3;
      var DEFAULT_VALUES = Object.freeze({
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1
      });
      var getPluginOrigin2 = (refState2, actionItem) => {
        const destination = actionItem.config.value;
        const destinationKeys = Object.keys(destination);
        if (refState2) {
          const stateKeys2 = Object.keys(refState2);
          const diffKeys = difference(destinationKeys, stateKeys2);
          if (diffKeys.length) {
            const origin2 = diffKeys.reduce((result, key) => {
              result[key] = DEFAULT_VALUES[key];
              return result;
            }, refState2);
            return origin2;
          }
          return refState2;
        }
        const origin = destinationKeys.reduce((result, key) => {
          result[key] = DEFAULT_VALUES[key];
          return result;
        }, {});
        return origin;
      };
      exports.getPluginOrigin = getPluginOrigin2;
      var getPluginDestination2 = (actionItemConfig) => {
        return actionItemConfig.value;
      };
      exports.getPluginDestination = getPluginDestination2;
      var createPluginInstance3 = (element, actionItem) => {
        var _actionItem$config, _actionItem$config$ta;
        const pluginElementId = actionItem === null || actionItem === void 0 ? void 0 : (_actionItem$config = actionItem.config) === null || _actionItem$config === void 0 ? void 0 : (_actionItem$config$ta = _actionItem$config.target) === null || _actionItem$config$ta === void 0 ? void 0 : _actionItem$config$ta.pluginElement;
        return pluginElementId ? queryContainerElement(pluginElementId) : null;
      };
      exports.createPluginInstance = createPluginInstance3;
      var renderPlugin2 = (containerElement, refState2, actionItem) => {
        const frontendModule = getFrontendModule();
        const instance = frontendModule.getInstance(containerElement);
        const objectId = actionItem.config.target.objectId;
        const renderSpline = (spline) => {
          if (!spline) {
            throw new Error("Invalid spline app passed to renderSpline");
          }
          const obj = objectId && spline.findObjectById(objectId);
          if (!obj) {
            return;
          }
          const {
            PLUGIN_SPLINE: props
          } = refState2;
          if (props.positionX != null) {
            obj.position.x = props.positionX;
          }
          if (props.positionY != null) {
            obj.position.y = props.positionY;
          }
          if (props.positionZ != null) {
            obj.position.z = props.positionZ;
          }
          if (props.rotationX != null) {
            obj.rotation.x = props.rotationX;
          }
          if (props.rotationY != null) {
            obj.rotation.y = props.rotationY;
          }
          if (props.rotationZ != null) {
            obj.rotation.z = props.rotationZ;
          }
          if (props.scaleX != null) {
            obj.scale.x = props.scaleX;
          }
          if (props.scaleY != null) {
            obj.scale.y = props.scaleY;
          }
          if (props.scaleZ != null) {
            obj.scale.z = props.scaleZ;
          }
        };
        if (instance) {
          renderSpline(instance.spline);
        } else {
          frontendModule.setLoadHandler(containerElement, renderSpline);
        }
      };
      exports.renderPlugin = renderPlugin2;
      var clearPlugin2 = () => {
        return null;
      };
      exports.clearPlugin = clearPlugin2;
    }
  });

  // packages/systems/ix2/plugins/IX2Variable.js
  var require_IX2Variable = __commonJS({
    "packages/systems/ix2/plugins/IX2Variable.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.getPluginOrigin = exports.getPluginDuration = exports.getPluginDestination = exports.getPluginConfig = exports.createPluginInstance = exports.clearPlugin = void 0;
      exports.normalizeColor = normalizeColor;
      exports.renderPlugin = void 0;
      function normalizeColor(inputColor) {
        let red;
        let green;
        let blue;
        let alpha = 1;
        const cleanColor = inputColor.replace(/\s/g, "").toLowerCase();
        if (cleanColor.startsWith("#")) {
          const hex = cleanColor.substring(1);
          if (hex.length === 3) {
            red = parseInt(hex[0] + hex[0], 16);
            green = parseInt(hex[1] + hex[1], 16);
            blue = parseInt(hex[2] + hex[2], 16);
          } else if (hex.length === 6) {
            red = parseInt(hex.substring(0, 2), 16);
            green = parseInt(hex.substring(2, 4), 16);
            blue = parseInt(hex.substring(4, 6), 16);
          }
        } else if (cleanColor.startsWith("rgba")) {
          const rgbaValues = cleanColor.match(/rgba\(([^)]+)\)/)[1].split(",");
          red = parseInt(rgbaValues[0], 10);
          green = parseInt(rgbaValues[1], 10);
          blue = parseInt(rgbaValues[2], 10);
          alpha = parseFloat(rgbaValues[3]);
        } else if (cleanColor.startsWith("rgb")) {
          const rgbValues = cleanColor.match(/rgb\(([^)]+)\)/)[1].split(",");
          red = parseInt(rgbValues[0], 10);
          green = parseInt(rgbValues[1], 10);
          blue = parseInt(rgbValues[2], 10);
        } else if (cleanColor.startsWith("hsla")) {
          const hslaValues = cleanColor.match(/hsla\(([^)]+)\)/)[1].split(",");
          const h = parseFloat(hslaValues[0]);
          const s = parseFloat(hslaValues[1].replace("%", "")) / 100;
          const l = parseFloat(hslaValues[2].replace("%", "")) / 100;
          alpha = parseFloat(hslaValues[3]);
          const C = (1 - Math.abs(2 * l - 1)) * s;
          const X = C * (1 - Math.abs(h / 60 % 2 - 1));
          const m = l - C / 2;
          let R;
          let G;
          let B;
          if (h >= 0 && h < 60) {
            R = C;
            G = X;
            B = 0;
          } else if (h >= 60 && h < 120) {
            R = X;
            G = C;
            B = 0;
          } else if (h >= 120 && h < 180) {
            R = 0;
            G = C;
            B = X;
          } else if (h >= 180 && h < 240) {
            R = 0;
            G = X;
            B = C;
          } else if (h >= 240 && h < 300) {
            R = X;
            G = 0;
            B = C;
          } else {
            R = C;
            G = 0;
            B = X;
          }
          red = Math.round((R + m) * 255);
          green = Math.round((G + m) * 255);
          blue = Math.round((B + m) * 255);
        } else if (cleanColor.startsWith("hsl")) {
          const hslValues = cleanColor.match(/hsl\(([^)]+)\)/)[1].split(",");
          const h = parseFloat(hslValues[0]);
          const s = parseFloat(hslValues[1].replace("%", "")) / 100;
          const l = parseFloat(hslValues[2].replace("%", "")) / 100;
          const C = (1 - Math.abs(2 * l - 1)) * s;
          const X = C * (1 - Math.abs(h / 60 % 2 - 1));
          const m = l - C / 2;
          let R;
          let G;
          let B;
          if (h >= 0 && h < 60) {
            R = C;
            G = X;
            B = 0;
          } else if (h >= 60 && h < 120) {
            R = X;
            G = C;
            B = 0;
          } else if (h >= 120 && h < 180) {
            R = 0;
            G = C;
            B = X;
          } else if (h >= 180 && h < 240) {
            R = 0;
            G = X;
            B = C;
          } else if (h >= 240 && h < 300) {
            R = X;
            G = 0;
            B = C;
          } else {
            R = C;
            G = 0;
            B = X;
          }
          red = Math.round((R + m) * 255);
          green = Math.round((G + m) * 255);
          blue = Math.round((B + m) * 255);
        }
        if (Number.isNaN(red) || Number.isNaN(green) || Number.isNaN(blue)) {
          `Invalid color in [ix2/lugins/IX2Variable.js] '${inputColor}'`;
        }
        return {
          red,
          green,
          blue,
          alpha
        };
      }
      var getPluginConfig2 = (actionItemConfig, key) => {
        return actionItemConfig.value[key];
      };
      exports.getPluginConfig = getPluginConfig2;
      var getPluginDuration3 = () => {
        return null;
      };
      exports.getPluginDuration = getPluginDuration3;
      var getPluginOrigin2 = (refState2, actionItem) => {
        if (refState2) {
          return refState2;
        }
        const destination = actionItem.config.value;
        const objectId = actionItem.config.target.objectId;
        const computedValue = getComputedStyle(document.documentElement).getPropertyValue(objectId);
        if (destination.size != null) {
          return {
            size: parseInt(computedValue, 10)
          };
        }
        if (destination.red != null && destination.green != null && destination.blue != null) {
          return normalizeColor(computedValue);
        }
      };
      exports.getPluginOrigin = getPluginOrigin2;
      var getPluginDestination2 = (actionItemConfig) => {
        return actionItemConfig.value;
      };
      exports.getPluginDestination = getPluginDestination2;
      var createPluginInstance3 = () => {
        return null;
      };
      exports.createPluginInstance = createPluginInstance3;
      var renderPlugin2 = (_, refState2, actionItem) => {
        const objectId = actionItem.config.target.objectId;
        const unit = actionItem.config.value.unit;
        const {
          PLUGIN_VARIABLE: props
        } = refState2;
        const {
          size: size2,
          red,
          green,
          blue,
          alpha
        } = props;
        let value;
        if (size2 != null) {
          value = size2 + unit;
        }
        if (red != null && blue != null && green != null && alpha != null) {
          value = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
        }
        if (value != null) {
          document.documentElement.style.setProperty(objectId, value);
        }
      };
      exports.renderPlugin = renderPlugin2;
      var clearPlugin2 = (ref, actionItem) => {
        const objectId = actionItem.config.target.objectId;
        document.documentElement.style.removeProperty(objectId);
      };
      exports.clearPlugin = clearPlugin2;
    }
  });

  // packages/systems/ix2/plugins/index.js
  var require_plugins = __commonJS({
    "packages/systems/ix2/plugins/index.js"(exports) {
      "use strict";
      var _interopRequireWildcard = require_interopRequireWildcard().default;
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.pluginMethodMap = void 0;
      var _constants = (init_constants(), __toCommonJS(constants_exports));
      var lottie = _interopRequireWildcard(require_IX2Lottie());
      var spline = _interopRequireWildcard(require_IX2Spline());
      var variable = _interopRequireWildcard(require_IX2Variable());
      var pluginMethodMap2 = exports.pluginMethodMap = /* @__PURE__ */ new Map([[_constants.ActionTypeConsts.PLUGIN_LOTTIE, {
        ...lottie
      }], [_constants.ActionTypeConsts.PLUGIN_SPLINE, {
        ...spline
      }], [_constants.ActionTypeConsts.PLUGIN_VARIABLE, {
        ...variable
      }]]);
    }
  });

  // packages/systems/ix2/shared/logic/IX2VanillaPlugins.ts
  var IX2VanillaPlugins_exports = {};
  __export(IX2VanillaPlugins_exports, {
    clearPlugin: () => clearPlugin,
    createPluginInstance: () => createPluginInstance,
    getPluginConfig: () => getPluginConfig,
    getPluginDestination: () => getPluginDestination,
    getPluginDuration: () => getPluginDuration,
    getPluginOrigin: () => getPluginOrigin,
    isPluginType: () => isPluginType,
    renderPlugin: () => renderPlugin
  });
  function isPluginType(actionTypeId) {
    return import_plugins.pluginMethodMap.has(actionTypeId);
  }
  var import_plugins, pluginMethod, getPluginConfig, getPluginOrigin, getPluginDuration, getPluginDestination, createPluginInstance, renderPlugin, clearPlugin;
  var init_IX2VanillaPlugins = __esm({
    "packages/systems/ix2/shared/logic/IX2VanillaPlugins.ts"() {
      "use strict";
      init_IX2BrowserSupport();
      import_plugins = __toESM(require_plugins());
      pluginMethod = (methodName) => (actionTypeId) => {
        if (!IS_BROWSER_ENV) {
          return () => null;
        }
        const plugin = import_plugins.pluginMethodMap.get(actionTypeId);
        if (!plugin) {
          throw new Error(`IX2 no plugin configured for: ${actionTypeId}`);
        }
        const method = plugin[methodName];
        if (!method) {
          throw new Error(`IX2 invalid plugin method: ${methodName}`);
        }
        return method;
      };
      getPluginConfig = pluginMethod("getPluginConfig");
      getPluginOrigin = pluginMethod("getPluginOrigin");
      getPluginDuration = pluginMethod("getPluginDuration");
      getPluginDestination = pluginMethod("getPluginDestination");
      createPluginInstance = pluginMethod("createPluginInstance");
      renderPlugin = pluginMethod("renderPlugin");
      clearPlugin = pluginMethod("clearPlugin");
    }
  });

  // node_modules/lodash/defaultTo.js
  var require_defaultTo = __commonJS({
    "node_modules/lodash/defaultTo.js"(exports, module) {
      function defaultTo3(value, defaultValue) {
        return value == null || value !== value ? defaultValue : value;
      }
      module.exports = defaultTo3;
    }
  });

  // node_modules/lodash/_arrayReduce.js
  var require_arrayReduce = __commonJS({
    "node_modules/lodash/_arrayReduce.js"(exports, module) {
      function arrayReduce(array, iteratee, accumulator, initAccum) {
        var index = -1, length = array == null ? 0 : array.length;
        if (initAccum && length) {
          accumulator = array[++index];
        }
        while (++index < length) {
          accumulator = iteratee(accumulator, array[index], index, array);
        }
        return accumulator;
      }
      module.exports = arrayReduce;
    }
  });

  // node_modules/lodash/_createBaseFor.js
  var require_createBaseFor = __commonJS({
    "node_modules/lodash/_createBaseFor.js"(exports, module) {
      function createBaseFor(fromRight) {
        return function(object, iteratee, keysFunc) {
          var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
          while (length--) {
            var key = props[fromRight ? length : ++index];
            if (iteratee(iterable[key], key, iterable) === false) {
              break;
            }
          }
          return object;
        };
      }
      module.exports = createBaseFor;
    }
  });

  // node_modules/lodash/_baseFor.js
  var require_baseFor = __commonJS({
    "node_modules/lodash/_baseFor.js"(exports, module) {
      var createBaseFor = require_createBaseFor();
      var baseFor = createBaseFor();
      module.exports = baseFor;
    }
  });

  // node_modules/lodash/_baseForOwn.js
  var require_baseForOwn = __commonJS({
    "node_modules/lodash/_baseForOwn.js"(exports, module) {
      var baseFor = require_baseFor();
      var keys = require_keys();
      function baseForOwn(object, iteratee) {
        return object && baseFor(object, iteratee, keys);
      }
      module.exports = baseForOwn;
    }
  });

  // node_modules/lodash/_createBaseEach.js
  var require_createBaseEach = __commonJS({
    "node_modules/lodash/_createBaseEach.js"(exports, module) {
      var isArrayLike = require_isArrayLike();
      function createBaseEach(eachFunc, fromRight) {
        return function(collection, iteratee) {
          if (collection == null) {
            return collection;
          }
          if (!isArrayLike(collection)) {
            return eachFunc(collection, iteratee);
          }
          var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
          while (fromRight ? index-- : ++index < length) {
            if (iteratee(iterable[index], index, iterable) === false) {
              break;
            }
          }
          return collection;
        };
      }
      module.exports = createBaseEach;
    }
  });

  // node_modules/lodash/_baseEach.js
  var require_baseEach = __commonJS({
    "node_modules/lodash/_baseEach.js"(exports, module) {
      var baseForOwn = require_baseForOwn();
      var createBaseEach = require_createBaseEach();
      var baseEach = createBaseEach(baseForOwn);
      module.exports = baseEach;
    }
  });

  // node_modules/lodash/_baseReduce.js
  var require_baseReduce = __commonJS({
    "node_modules/lodash/_baseReduce.js"(exports, module) {
      function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
        eachFunc(collection, function(value, index, collection2) {
          accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection2);
        });
        return accumulator;
      }
      module.exports = baseReduce;
    }
  });

  // node_modules/lodash/reduce.js
  var require_reduce = __commonJS({
    "node_modules/lodash/reduce.js"(exports, module) {
      var arrayReduce = require_arrayReduce();
      var baseEach = require_baseEach();
      var baseIteratee = require_baseIteratee();
      var baseReduce = require_baseReduce();
      var isArray = require_isArray();
      function reduce3(collection, iteratee, accumulator) {
        var func = isArray(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
        return func(collection, baseIteratee(iteratee, 4), accumulator, initAccum, baseEach);
      }
      module.exports = reduce3;
    }
  });

  // node_modules/lodash/findLastIndex.js
  var require_findLastIndex = __commonJS({
    "node_modules/lodash/findLastIndex.js"(exports, module) {
      var baseFindIndex = require_baseFindIndex();
      var baseIteratee = require_baseIteratee();
      var toInteger = require_toInteger();
      var nativeMax = Math.max;
      var nativeMin = Math.min;
      function findLastIndex(array, predicate, fromIndex) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return -1;
        }
        var index = length - 1;
        if (fromIndex !== void 0) {
          index = toInteger(fromIndex);
          index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
        }
        return baseFindIndex(array, baseIteratee(predicate, 3), index, true);
      }
      module.exports = findLastIndex;
    }
  });

  // node_modules/lodash/findLast.js
  var require_findLast = __commonJS({
    "node_modules/lodash/findLast.js"(exports, module) {
      var createFind = require_createFind();
      var findLastIndex = require_findLastIndex();
      var findLast2 = createFind(findLastIndex);
      module.exports = findLast2;
    }
  });

  // packages/systems/ix2/shared/logic/shallowEqual.ts
  function is(x, y) {
    if (x === y) {
      return x !== 0 || y !== 0 || 1 / x === 1 / y;
    }
    return x !== x && y !== y;
  }
  function shallowEqual(objA, objB) {
    if (is(objA, objB)) {
      return true;
    }
    if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
      return false;
    }
    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) {
      return false;
    }
    for (let i = 0; i < keysA.length; i++) {
      if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
        return false;
      }
    }
    return true;
  }
  var hasOwnProperty, shallowEqual_default;
  var init_shallowEqual = __esm({
    "packages/systems/ix2/shared/logic/shallowEqual.ts"() {
      "use strict";
      hasOwnProperty = Object.prototype.hasOwnProperty;
      shallowEqual_default = shallowEqual;
    }
  });

  // packages/systems/ix2/shared/logic/IX2VanillaUtils.ts
  var IX2VanillaUtils_exports = {};
  __export(IX2VanillaUtils_exports, {
    cleanupHTMLElement: () => cleanupHTMLElement,
    clearAllStyles: () => clearAllStyles,
    clearObjectCache: () => clearObjectCache,
    getActionListProgress: () => getActionListProgress,
    getAffectedElements: () => getAffectedElements,
    getComputedStyle: () => getComputedStyle2,
    getDestinationValues: () => getDestinationValues,
    getElementId: () => getElementId,
    getInstanceId: () => getInstanceId,
    getInstanceOrigin: () => getInstanceOrigin,
    getItemConfigByKey: () => getItemConfigByKey,
    getMaxDurationItemIndex: () => getMaxDurationItemIndex,
    getNamespacedParameterId: () => getNamespacedParameterId,
    getRenderType: () => getRenderType,
    getStyleProp: () => getStyleProp,
    mediaQueriesEqual: () => mediaQueriesEqual,
    observeStore: () => observeStore,
    reduceListToGroup: () => reduceListToGroup,
    reifyState: () => reifyState,
    renderHTMLElement: () => renderHTMLElement,
    shallowEqual: () => shallowEqual_default,
    shouldAllowMediaQuery: () => shouldAllowMediaQuery,
    shouldNamespaceEventParameter: () => shouldNamespaceEventParameter,
    stringifyTarget: () => stringifyTarget
  });
  function clearObjectCache() {
    objectCache.clear();
  }
  function getInstanceId() {
    return "i" + instanceCount++;
  }
  function getElementId(ixElements3, ref) {
    for (const key in ixElements3) {
      const ixEl = ixElements3[key];
      if (ixEl && ixEl.ref === ref) {
        return ixEl.id;
      }
    }
    return "e" + elementCount++;
  }
  function reifyState({ events, actionLists, site } = {}) {
    const eventTypeMap = (0, import_reduce.default)(
      events,
      (result, event) => {
        const { eventTypeId } = event;
        if (!result[eventTypeId]) {
          result[eventTypeId] = {};
        }
        result[eventTypeId][event.id] = event;
        return result;
      },
      {}
    );
    let mediaQueries = site && site.mediaQueries;
    let mediaQueryKeys = [];
    if (mediaQueries) {
      mediaQueryKeys = mediaQueries.map((mq) => mq.key);
    } else {
      mediaQueries = [];
      console.warn(`IX2 missing mediaQueries in site data`);
    }
    return {
      ixData: {
        events,
        actionLists,
        eventTypeMap,
        mediaQueries,
        mediaQueryKeys
      }
    };
  }
  function observeStore({
    // @ts-expect-error - TS7031 - Binding element 'store' implicitly has an 'any' type.
    store,
    // @ts-expect-error - TS7031 - Binding element 'select' implicitly has an 'any' type.
    select,
    // @ts-expect-error - TS7031 - Binding element 'onChange' implicitly has an 'any' type.
    onChange,
    comparator = strictEqual
  }) {
    const { getState, subscribe } = store;
    const unsubscribe = subscribe(handleChange);
    let currentState = select(getState());
    function handleChange() {
      const nextState = select(getState());
      if (nextState == null) {
        unsubscribe();
        return;
      }
      if (!comparator(nextState, currentState)) {
        currentState = nextState;
        onChange(currentState, store);
      }
    }
    return unsubscribe;
  }
  function normalizeTarget(target) {
    const type = typeof target;
    if (type === "string") {
      return { id: target };
    } else if (target != null && type === "object") {
      const { id, objectId, selector, selectorGuids, appliesTo, useEventTarget } = target;
      return { id, objectId, selector, selectorGuids, appliesTo, useEventTarget };
    }
    return {};
  }
  function getAffectedElements({
    config,
    event,
    eventTarget,
    elementRoot,
    elementApi
  }) {
    if (!elementApi) {
      throw new Error("IX2 missing elementApi");
    }
    const { targets } = config;
    if (Array.isArray(targets) && targets.length > 0) {
      return targets.reduce(
        (accumulator, target2) => accumulator.concat(
          getAffectedElements({
            config: { target: target2 },
            event,
            eventTarget,
            elementRoot,
            elementApi
          })
        ),
        []
      );
    }
    const {
      getValidDocument: getValidDocument2,
      getQuerySelector: getQuerySelector2,
      queryDocument: queryDocument2,
      getChildElements: getChildElements2,
      getSiblingElements: getSiblingElements2,
      matchSelector: matchSelector2,
      elementContains: elementContains2,
      isSiblingNode: isSiblingNode2
    } = elementApi;
    const { target } = config;
    if (!target) {
      return [];
    }
    const {
      id,
      objectId,
      selector,
      selectorGuids,
      appliesTo,
      useEventTarget
    } = normalizeTarget(target);
    if (objectId) {
      const ref = objectCache.has(objectId) ? objectCache.get(objectId) : objectCache.set(objectId, {}).get(objectId);
      return [ref];
    }
    if (appliesTo === EventAppliesTo.PAGE) {
      const doc = getValidDocument2(id);
      return doc ? [doc] : [];
    }
    const overrides = event?.action?.config?.affectedElements ?? {};
    const override = overrides[id || selector] || {};
    const validOverride = Boolean(override.id || override.selector);
    let limitAffectedElements;
    let baseSelector;
    let finalSelector;
    const eventTargetSelector = event && getQuerySelector2(normalizeTarget(event.target));
    if (validOverride) {
      limitAffectedElements = override.limitAffectedElements;
      baseSelector = eventTargetSelector;
      finalSelector = getQuerySelector2(override);
    } else {
      baseSelector = finalSelector = getQuerySelector2({
        id,
        selector,
        selectorGuids
      });
    }
    if (event && useEventTarget) {
      const eventTargets = eventTarget && (finalSelector || useEventTarget === true) ? [eventTarget] : queryDocument2(eventTargetSelector);
      if (finalSelector) {
        if (useEventTarget === PARENT2) {
          return queryDocument2(finalSelector).filter(
            (parentElement) => eventTargets.some(
              (targetElement) => elementContains2(parentElement, targetElement)
            )
          );
        }
        if (useEventTarget === CHILDREN2) {
          return queryDocument2(finalSelector).filter(
            (childElement) => eventTargets.some(
              (targetElement) => elementContains2(targetElement, childElement)
            )
          );
        }
        if (useEventTarget === SIBLINGS2) {
          return queryDocument2(finalSelector).filter(
            (siblingElement) => eventTargets.some(
              (targetElement) => isSiblingNode2(targetElement, siblingElement)
            )
          );
        }
      }
      return eventTargets;
    }
    if (baseSelector == null || finalSelector == null) {
      return [];
    }
    if (IS_BROWSER_ENV && elementRoot) {
      return queryDocument2(finalSelector).filter(
        (element) => elementRoot.contains(element)
      );
    }
    if (limitAffectedElements === CHILDREN2) {
      return queryDocument2(baseSelector, finalSelector);
    } else if (limitAffectedElements === IMMEDIATE_CHILDREN2) {
      return getChildElements2(queryDocument2(baseSelector)).filter(
        matchSelector2(finalSelector)
      );
    } else if (limitAffectedElements === SIBLINGS2) {
      return getSiblingElements2(queryDocument2(baseSelector)).filter(
        matchSelector2(finalSelector)
      );
    } else {
      return queryDocument2(finalSelector);
    }
  }
  function getComputedStyle2({ element, actionItem }) {
    if (!IS_BROWSER_ENV) {
      return {};
    }
    const { actionTypeId } = actionItem;
    switch (actionTypeId) {
      case STYLE_SIZE2:
      case STYLE_BACKGROUND_COLOR:
      case STYLE_BORDER:
      case STYLE_TEXT_COLOR:
      case GENERAL_DISPLAY:
        return window.getComputedStyle(element);
      default:
        return {};
    }
  }
  function getInstanceOrigin(element, refState2 = {}, computedStyle = {}, actionItem, elementApi) {
    const { getStyle: getStyle2 } = elementApi;
    const { actionTypeId } = actionItem;
    if (isPluginType(actionTypeId)) {
      return getPluginOrigin(actionTypeId)(refState2[actionTypeId], actionItem);
    }
    switch (actionItem.actionTypeId) {
      case TRANSFORM_MOVE2:
      case TRANSFORM_SCALE2:
      case TRANSFORM_ROTATE2:
      case TRANSFORM_SKEW2: {
        return (
          // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type '"TRANSFORM_MOVE" | "TRANSFORM_SCALE" | "TRANSFORM_ROTATE" | "TRANSFORM_SKEW"' can't be used to index type '{}'.
          refState2[actionItem.actionTypeId] || transformDefaults[actionItem.actionTypeId]
        );
      }
      case STYLE_FILTER2:
        return getFilterDefaults(
          // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type '"STYLE_FILTER"' can't be used to index type '{}'.
          refState2[actionItem.actionTypeId],
          actionItem.config.filters
        );
      case STYLE_FONT_VARIATION2:
        return getFontVariationDefaults(
          // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type '"STYLE_FONT_VARIATION"' can't be used to index type '{}'.
          refState2[actionItem.actionTypeId],
          actionItem.config.fontVariations
        );
      case STYLE_OPACITY:
        return { value: (0, import_defaultTo.default)(parseFloat(getStyle2(element, OPACITY2)), 1) };
      case STYLE_SIZE2: {
        const inlineWidth = getStyle2(element, WIDTH2);
        const inlineHeight = getStyle2(element, HEIGHT2);
        let widthValue;
        let heightValue;
        if (actionItem.config.widthUnit === AUTO2) {
          widthValue = pxValueRegex.test(inlineWidth) ? parseFloat(inlineWidth) : (
            // @ts-expect-error - TS18047 - 'computedStyle' is possibly 'null'.
            parseFloat(computedStyle.width)
          );
        } else {
          widthValue = (0, import_defaultTo.default)(
            parseFloat(inlineWidth),
            // @ts-expect-error - TS18047 - 'computedStyle' is possibly 'null'.
            parseFloat(computedStyle.width)
          );
        }
        if (actionItem.config.heightUnit === AUTO2) {
          heightValue = pxValueRegex.test(inlineHeight) ? parseFloat(inlineHeight) : (
            // @ts-expect-error - TS18047 - 'computedStyle' is possibly 'null'.
            parseFloat(computedStyle.height)
          );
        } else {
          heightValue = (0, import_defaultTo.default)(
            parseFloat(inlineHeight),
            // @ts-expect-error - TS18047 - 'computedStyle' is possibly 'null'.
            parseFloat(computedStyle.height)
          );
        }
        return {
          widthValue,
          heightValue
        };
      }
      case STYLE_BACKGROUND_COLOR:
      case STYLE_BORDER:
      case STYLE_TEXT_COLOR:
        return parseColor({
          element,
          actionTypeId: actionItem.actionTypeId,
          computedStyle,
          getStyle: getStyle2
        });
      case GENERAL_DISPLAY:
        return {
          // @ts-expect-error - TS18047 - 'computedStyle' is possibly 'null'.
          value: (0, import_defaultTo.default)(getStyle2(element, DISPLAY2), computedStyle.display)
        };
      case OBJECT_VALUE:
        return refState2[actionItem.actionTypeId] || { value: 0 };
      default: {
        return;
      }
    }
  }
  function getDestinationValues({
    element,
    actionItem,
    elementApi
  }) {
    if (isPluginType(actionItem.actionTypeId)) {
      return getPluginDestination(actionItem.actionTypeId)(actionItem.config);
    }
    switch (actionItem.actionTypeId) {
      case TRANSFORM_MOVE2:
      case TRANSFORM_SCALE2:
      case TRANSFORM_ROTATE2:
      case TRANSFORM_SKEW2: {
        const { xValue, yValue, zValue } = actionItem.config;
        return { xValue, yValue, zValue };
      }
      case STYLE_SIZE2: {
        const { getStyle: getStyle2, setStyle: setStyle2, getProperty: getProperty2 } = elementApi;
        const { widthUnit, heightUnit } = actionItem.config;
        let { widthValue, heightValue } = actionItem.config;
        if (!IS_BROWSER_ENV) {
          return { widthValue, heightValue };
        }
        if (widthUnit === AUTO2) {
          const temp = getStyle2(element, WIDTH2);
          setStyle2(element, WIDTH2, "");
          widthValue = getProperty2(element, "offsetWidth");
          setStyle2(element, WIDTH2, temp);
        }
        if (heightUnit === AUTO2) {
          const temp = getStyle2(element, HEIGHT2);
          setStyle2(element, HEIGHT2, "");
          heightValue = getProperty2(element, "offsetHeight");
          setStyle2(element, HEIGHT2, temp);
        }
        return { widthValue, heightValue };
      }
      case STYLE_BACKGROUND_COLOR:
      case STYLE_BORDER:
      case STYLE_TEXT_COLOR: {
        const { rValue, gValue, bValue, aValue } = actionItem.config;
        return { rValue, gValue, bValue, aValue };
      }
      case STYLE_FILTER2: {
        return actionItem.config.filters.reduce(
          reduceFilters,
          {}
        );
      }
      case STYLE_FONT_VARIATION2: {
        return actionItem.config.fontVariations.reduce(
          reduceFontVariations,
          {}
        );
      }
      default: {
        const { value } = actionItem.config;
        return { value };
      }
    }
  }
  function getRenderType(actionTypeId) {
    if (/^TRANSFORM_/.test(actionTypeId)) {
      return RENDER_TRANSFORM2;
    }
    if (/^STYLE_/.test(actionTypeId)) {
      return RENDER_STYLE2;
    }
    if (/^GENERAL_/.test(actionTypeId)) {
      return RENDER_GENERAL2;
    }
    if (/^PLUGIN_/.test(actionTypeId)) {
      return RENDER_PLUGIN2;
    }
  }
  function getStyleProp(renderType, actionTypeId) {
    return renderType === RENDER_STYLE2 ? actionTypeId.replace("STYLE_", "").toLowerCase() : null;
  }
  function renderHTMLElement(element, refState2, actionState, eventId, actionItem, styleProp, elementApi, renderType, pluginInstance) {
    switch (renderType) {
      case RENDER_TRANSFORM2: {
        return renderTransform(
          element,
          refState2,
          actionState,
          actionItem,
          elementApi
        );
      }
      case RENDER_STYLE2: {
        return renderStyle(
          element,
          refState2,
          actionState,
          actionItem,
          styleProp,
          elementApi
        );
      }
      case RENDER_GENERAL2: {
        return renderGeneral(element, actionItem, elementApi);
      }
      case RENDER_PLUGIN2: {
        const { actionTypeId } = actionItem;
        if (isPluginType(actionTypeId)) {
          return renderPlugin(actionTypeId)(pluginInstance, refState2, actionItem);
        }
      }
    }
  }
  function renderTransform(element, refState2, actionState, actionItem, elementApi) {
    const newTransform = transformKeys.map((actionTypeId) => {
      const defaults = transformDefaults[actionTypeId];
      const {
        xValue = defaults.xValue,
        yValue = defaults.yValue,
        zValue = defaults.zValue,
        xUnit = "",
        yUnit = "",
        zUnit = ""
      } = refState2[actionTypeId] || {};
      switch (actionTypeId) {
        case TRANSFORM_MOVE2:
          return `${TRANSLATE_3D2}(${xValue}${xUnit}, ${yValue}${yUnit}, ${zValue}${zUnit})`;
        case TRANSFORM_SCALE2:
          return `${SCALE_3D2}(${xValue}${xUnit}, ${yValue}${yUnit}, ${zValue}${zUnit})`;
        case TRANSFORM_ROTATE2:
          return `${ROTATE_X2}(${xValue}${xUnit}) ${ROTATE_Y2}(${yValue}${yUnit}) ${ROTATE_Z2}(${zValue}${zUnit})`;
        case TRANSFORM_SKEW2:
          return `${SKEW2}(${xValue}${xUnit}, ${yValue}${yUnit})`;
        default:
          return "";
      }
    }).join(" ");
    const { setStyle: setStyle2 } = elementApi;
    addWillChange(element, TRANSFORM_PREFIXED, elementApi);
    setStyle2(element, TRANSFORM_PREFIXED, newTransform);
    if (hasDefined3dTransform(actionItem, actionState)) {
      setStyle2(element, TRANSFORM_STYLE_PREFIXED, PRESERVE_3D2);
    }
  }
  function renderFilter(element, actionState, actionItemConfig, elementApi) {
    const filterValue = (0, import_reduce.default)(
      actionState,
      (result, value, type) => `${result} ${type}(${value}${getFilterUnit(type, actionItemConfig)})`,
      ""
    );
    const { setStyle: setStyle2 } = elementApi;
    addWillChange(element, FILTER2, elementApi);
    setStyle2(element, FILTER2, filterValue);
  }
  function renderFontVariation(element, actionState, actionItemConfig, elementApi) {
    const fontVariationValue = (0, import_reduce.default)(
      actionState,
      (result, value, type) => {
        result.push(`"${type}" ${value}`);
        return result;
      },
      []
    ).join(", ");
    const { setStyle: setStyle2 } = elementApi;
    addWillChange(element, FONT_VARIATION_SETTINGS2, elementApi);
    setStyle2(element, FONT_VARIATION_SETTINGS2, fontVariationValue);
  }
  function hasDefined3dTransform({ actionTypeId }, { xValue, yValue, zValue }) {
    return actionTypeId === TRANSFORM_MOVE2 && zValue !== void 0 || // SCALE_Z
    actionTypeId === TRANSFORM_SCALE2 && zValue !== void 0 || // ROTATE_X or ROTATE_Y
    actionTypeId === TRANSFORM_ROTATE2 && (xValue !== void 0 || yValue !== void 0);
  }
  function getFirstMatch(regex, value) {
    const match = regex.exec(value);
    return match ? match[1] : "";
  }
  function parseColor({ element, actionTypeId, computedStyle, getStyle: getStyle2 }) {
    const prop = colorStyleProps[actionTypeId];
    const inlineValue = getStyle2(element, prop);
    const value = rgbValidRegex.test(inlineValue) ? inlineValue : computedStyle[prop];
    const matches = getFirstMatch(rgbMatchRegex, value).split(COMMA_DELIMITER2);
    return {
      rValue: (0, import_defaultTo.default)(parseInt(matches[0], 10), 255),
      gValue: (0, import_defaultTo.default)(parseInt(matches[1], 10), 255),
      bValue: (0, import_defaultTo.default)(parseInt(matches[2], 10), 255),
      aValue: (0, import_defaultTo.default)(parseFloat(matches[3]), 1)
    };
  }
  function renderStyle(element, refState2, actionState, actionItem, styleProp, elementApi) {
    const { setStyle: setStyle2 } = elementApi;
    switch (actionItem.actionTypeId) {
      case STYLE_SIZE2: {
        let { widthUnit = "", heightUnit = "" } = actionItem.config;
        const { widthValue, heightValue } = actionState;
        if (widthValue !== void 0) {
          if (widthUnit === AUTO2) {
            widthUnit = "px";
          }
          addWillChange(element, WIDTH2, elementApi);
          setStyle2(element, WIDTH2, widthValue + widthUnit);
        }
        if (heightValue !== void 0) {
          if (heightUnit === AUTO2) {
            heightUnit = "px";
          }
          addWillChange(element, HEIGHT2, elementApi);
          setStyle2(element, HEIGHT2, heightValue + heightUnit);
        }
        break;
      }
      case STYLE_FILTER2: {
        renderFilter(element, actionState, actionItem.config, elementApi);
        break;
      }
      case STYLE_FONT_VARIATION2: {
        renderFontVariation(element, actionState, actionItem.config, elementApi);
        break;
      }
      case STYLE_BACKGROUND_COLOR:
      case STYLE_BORDER:
      case STYLE_TEXT_COLOR: {
        const prop = colorStyleProps[actionItem.actionTypeId];
        const rValue = Math.round(actionState.rValue);
        const gValue = Math.round(actionState.gValue);
        const bValue = Math.round(actionState.bValue);
        const aValue = actionState.aValue;
        addWillChange(element, prop, elementApi);
        setStyle2(
          element,
          prop,
          aValue >= 1 ? `rgb(${rValue},${gValue},${bValue})` : `rgba(${rValue},${gValue},${bValue},${aValue})`
        );
        break;
      }
      default: {
        const { unit = "" } = actionItem.config;
        addWillChange(element, styleProp, elementApi);
        setStyle2(element, styleProp, actionState.value + unit);
        break;
      }
    }
  }
  function renderGeneral(element, actionItem, elementApi) {
    const { setStyle: setStyle2 } = elementApi;
    switch (actionItem.actionTypeId) {
      case GENERAL_DISPLAY: {
        const { value } = actionItem.config;
        if (value === FLEX2 && IS_BROWSER_ENV) {
          setStyle2(element, DISPLAY2, FLEX_PREFIXED);
        } else {
          setStyle2(element, DISPLAY2, value);
        }
        return;
      }
    }
  }
  function addWillChange(element, prop, elementApi) {
    if (!IS_BROWSER_ENV) {
      return;
    }
    const validProp = willChangeProps[prop];
    if (!validProp) {
      return;
    }
    const { getStyle: getStyle2, setStyle: setStyle2 } = elementApi;
    const value = getStyle2(element, WILL_CHANGE2);
    if (!value) {
      setStyle2(element, WILL_CHANGE2, validProp);
      return;
    }
    const values2 = value.split(COMMA_DELIMITER2).map(trim);
    if (values2.indexOf(validProp) === -1) {
      setStyle2(
        element,
        WILL_CHANGE2,
        values2.concat(validProp).join(COMMA_DELIMITER2)
      );
    }
  }
  function removeWillChange(element, prop, elementApi) {
    if (!IS_BROWSER_ENV) {
      return;
    }
    const validProp = willChangeProps[prop];
    if (!validProp) {
      return;
    }
    const { getStyle: getStyle2, setStyle: setStyle2 } = elementApi;
    const value = getStyle2(element, WILL_CHANGE2);
    if (!value || value.indexOf(validProp) === -1) {
      return;
    }
    setStyle2(
      element,
      WILL_CHANGE2,
      value.split(COMMA_DELIMITER2).map(trim).filter((v) => v !== validProp).join(COMMA_DELIMITER2)
    );
  }
  function clearAllStyles({ store, elementApi }) {
    const { ixData: ixData2 } = store.getState();
    const { events = {}, actionLists = {} } = ixData2;
    Object.keys(events).forEach((eventId) => {
      const event = events[eventId];
      const { config } = event.action;
      const { actionListId } = config;
      const actionList = actionLists[actionListId];
      if (actionList) {
        clearActionListStyles({ actionList, event, elementApi });
      }
    });
    Object.keys(actionLists).forEach((actionListId) => {
      clearActionListStyles({ actionList: actionLists[actionListId], elementApi });
    });
  }
  function clearActionListStyles({ actionList = {}, event, elementApi }) {
    const { actionItemGroups, continuousParameterGroups } = actionList;
    actionItemGroups && // @ts-expect-error - TS7006 - Parameter 'actionGroup' implicitly has an 'any' type.
    actionItemGroups.forEach((actionGroup) => {
      clearActionGroupStyles({ actionGroup, event, elementApi });
    });
    continuousParameterGroups && // @ts-expect-error - TS7006 - Parameter 'paramGroup' implicitly has an 'any' type.
    continuousParameterGroups.forEach((paramGroup) => {
      const { continuousActionGroups } = paramGroup;
      continuousActionGroups.forEach((actionGroup) => {
        clearActionGroupStyles({ actionGroup, event, elementApi });
      });
    });
  }
  function clearActionGroupStyles({ actionGroup, event, elementApi }) {
    const { actionItems } = actionGroup;
    actionItems.forEach((actionItem) => {
      const { actionTypeId, config } = actionItem;
      let clearElement;
      if (isPluginType(actionTypeId)) {
        clearElement = (ref) => clearPlugin(actionTypeId)(ref, actionItem);
      } else {
        clearElement = processElementByType({
          effect: clearStyleProp,
          actionTypeId,
          elementApi
        });
      }
      getAffectedElements({ config, event, elementApi }).forEach(clearElement);
    });
  }
  function cleanupHTMLElement(element, actionItem, elementApi) {
    const { setStyle: setStyle2, getStyle: getStyle2 } = elementApi;
    const { actionTypeId } = actionItem;
    if (actionTypeId === STYLE_SIZE2) {
      const { config } = actionItem;
      if (config.widthUnit === AUTO2) {
        setStyle2(element, WIDTH2, "");
      }
      if (config.heightUnit === AUTO2) {
        setStyle2(element, HEIGHT2, "");
      }
    }
    if (getStyle2(element, WILL_CHANGE2)) {
      processElementByType({ effect: removeWillChange, actionTypeId, elementApi })(
        element
      );
    }
  }
  function clearStyleProp(element, prop, elementApi) {
    const { setStyle: setStyle2 } = elementApi;
    removeWillChange(element, prop, elementApi);
    setStyle2(element, prop, "");
    if (prop === TRANSFORM_PREFIXED) {
      setStyle2(element, TRANSFORM_STYLE_PREFIXED, "");
    }
  }
  function getMaxDurationItemIndex(actionItems) {
    let maxDuration = 0;
    let resultIndex = 0;
    actionItems.forEach((actionItem, index) => {
      const { config } = actionItem;
      const total = config.delay + config.duration;
      if (total >= maxDuration) {
        maxDuration = total;
        resultIndex = index;
      }
    });
    return resultIndex;
  }
  function getActionListProgress(actionList, instance) {
    const { actionItemGroups, useFirstGroupAsInitialState } = actionList;
    const { actionItem: instanceItem, verboseTimeElapsed = 0 } = instance;
    let totalDuration = 0;
    let elapsedDuration = 0;
    actionItemGroups.forEach((group, index) => {
      if (useFirstGroupAsInitialState && index === 0) {
        return;
      }
      const { actionItems } = group;
      const carrierItem = actionItems[getMaxDurationItemIndex(actionItems)];
      const { config, actionTypeId } = carrierItem;
      if (instanceItem.id === carrierItem.id) {
        elapsedDuration = totalDuration + verboseTimeElapsed;
      }
      const duration = getRenderType(actionTypeId) === RENDER_GENERAL2 ? 0 : config.duration;
      totalDuration += config.delay + duration;
    });
    return totalDuration > 0 ? optimizeFloat(elapsedDuration / totalDuration) : 0;
  }
  function reduceListToGroup({ actionList, actionItemId, rawData }) {
    const { actionItemGroups, continuousParameterGroups } = actionList;
    const newActionItems = [];
    const takeItemUntilMatch = (actionItem) => {
      newActionItems.push(
        (0, import_timm4.mergeIn)(actionItem, ["config"], {
          delay: 0,
          duration: 0
        })
      );
      return actionItem.id === actionItemId;
    };
    actionItemGroups && // @ts-expect-error - TS7031 - Binding element 'actionItems' implicitly has an 'any' type.
    actionItemGroups.some(({ actionItems }) => {
      return actionItems.some(takeItemUntilMatch);
    });
    continuousParameterGroups && // @ts-expect-error - TS7006 - Parameter 'paramGroup' implicitly has an 'any' type.
    continuousParameterGroups.some((paramGroup) => {
      const { continuousActionGroups } = paramGroup;
      return continuousActionGroups.some(({ actionItems }) => {
        return actionItems.some(takeItemUntilMatch);
      });
    });
    return (0, import_timm4.setIn)(rawData, ["actionLists"], {
      [actionList.id]: {
        id: actionList.id,
        actionItemGroups: [
          {
            actionItems: newActionItems
          }
        ]
      }
    });
  }
  function shouldNamespaceEventParameter(eventTypeId, { basedOn }) {
    return eventTypeId === EventTypeConsts.SCROLLING_IN_VIEW && (basedOn === EventBasedOn.ELEMENT || basedOn == null) || eventTypeId === EventTypeConsts.MOUSE_MOVE && basedOn === EventBasedOn.ELEMENT;
  }
  function getNamespacedParameterId(eventStateKey, continuousParameterGroupId) {
    const namespacedParameterId = eventStateKey + COLON_DELIMITER2 + continuousParameterGroupId;
    return namespacedParameterId;
  }
  function shouldAllowMediaQuery(mediaQueries, mediaQueryKey) {
    if (mediaQueryKey == null) {
      return true;
    }
    return mediaQueries.indexOf(mediaQueryKey) !== -1;
  }
  function mediaQueriesEqual(listA, listB) {
    return shallowEqual_default(listA && listA.sort(), listB && listB.sort());
  }
  function stringifyTarget(target) {
    if (typeof target === "string") {
      return target;
    }
    if (target.pluginElement && target.objectId) {
      return target.pluginElement + BAR_DELIMITER2 + target.objectId;
    }
    if (target.objectId) {
      return target.objectId;
    }
    const { id = "", selector = "", useEventTarget = "" } = target;
    return id + BAR_DELIMITER2 + selector + BAR_DELIMITER2 + useEventTarget;
  }
  var import_defaultTo, import_reduce, import_findLast, import_timm4, BACKGROUND2, TRANSFORM2, TRANSLATE_3D2, SCALE_3D2, ROTATE_X2, ROTATE_Y2, ROTATE_Z2, SKEW2, PRESERVE_3D2, FLEX2, OPACITY2, FILTER2, FONT_VARIATION_SETTINGS2, WIDTH2, HEIGHT2, BACKGROUND_COLOR2, BORDER_COLOR2, COLOR2, CHILDREN2, IMMEDIATE_CHILDREN2, SIBLINGS2, PARENT2, DISPLAY2, WILL_CHANGE2, AUTO2, COMMA_DELIMITER2, COLON_DELIMITER2, BAR_DELIMITER2, RENDER_TRANSFORM2, RENDER_GENERAL2, RENDER_STYLE2, RENDER_PLUGIN2, TRANSFORM_MOVE2, TRANSFORM_SCALE2, TRANSFORM_ROTATE2, TRANSFORM_SKEW2, STYLE_OPACITY, STYLE_FILTER2, STYLE_FONT_VARIATION2, STYLE_SIZE2, STYLE_BACKGROUND_COLOR, STYLE_BORDER, STYLE_TEXT_COLOR, GENERAL_DISPLAY, OBJECT_VALUE, trim, colorStyleProps, willChangeProps, objectCache, instanceCount, elementCount, strictEqual, pxValueRegex, getFilterDefaults, getFontVariationDefaults, reduceFilters, reduceFontVariations, getItemConfigByKey, transformDefaults, filterDefaults, fontVariationDefaults, getFilterUnit, transformKeys, paramCapture, rgbValidRegex, rgbMatchRegex, processElementByType;
  var init_IX2VanillaUtils = __esm({
    "packages/systems/ix2/shared/logic/IX2VanillaUtils.ts"() {
      "use strict";
      import_defaultTo = __toESM(require_defaultTo());
      import_reduce = __toESM(require_reduce());
      import_findLast = __toESM(require_findLast());
      import_timm4 = __toESM(require_timm());
      init_constants();
      init_shallowEqual();
      init_IX2EasingUtils();
      init_IX2VanillaPlugins();
      init_IX2BrowserSupport();
      ({
        BACKGROUND: BACKGROUND2,
        TRANSFORM: TRANSFORM2,
        TRANSLATE_3D: TRANSLATE_3D2,
        SCALE_3D: SCALE_3D2,
        ROTATE_X: ROTATE_X2,
        ROTATE_Y: ROTATE_Y2,
        ROTATE_Z: ROTATE_Z2,
        SKEW: SKEW2,
        PRESERVE_3D: PRESERVE_3D2,
        FLEX: FLEX2,
        OPACITY: OPACITY2,
        FILTER: FILTER2,
        FONT_VARIATION_SETTINGS: FONT_VARIATION_SETTINGS2,
        WIDTH: WIDTH2,
        HEIGHT: HEIGHT2,
        BACKGROUND_COLOR: BACKGROUND_COLOR2,
        BORDER_COLOR: BORDER_COLOR2,
        COLOR: COLOR2,
        CHILDREN: CHILDREN2,
        IMMEDIATE_CHILDREN: IMMEDIATE_CHILDREN2,
        SIBLINGS: SIBLINGS2,
        PARENT: PARENT2,
        DISPLAY: DISPLAY2,
        WILL_CHANGE: WILL_CHANGE2,
        AUTO: AUTO2,
        COMMA_DELIMITER: COMMA_DELIMITER2,
        COLON_DELIMITER: COLON_DELIMITER2,
        BAR_DELIMITER: BAR_DELIMITER2,
        RENDER_TRANSFORM: RENDER_TRANSFORM2,
        RENDER_GENERAL: RENDER_GENERAL2,
        RENDER_STYLE: RENDER_STYLE2,
        RENDER_PLUGIN: RENDER_PLUGIN2
      } = IX2EngineConstants_exports);
      ({
        TRANSFORM_MOVE: TRANSFORM_MOVE2,
        TRANSFORM_SCALE: TRANSFORM_SCALE2,
        TRANSFORM_ROTATE: TRANSFORM_ROTATE2,
        TRANSFORM_SKEW: TRANSFORM_SKEW2,
        STYLE_OPACITY,
        STYLE_FILTER: STYLE_FILTER2,
        STYLE_FONT_VARIATION: STYLE_FONT_VARIATION2,
        STYLE_SIZE: STYLE_SIZE2,
        STYLE_BACKGROUND_COLOR,
        STYLE_BORDER,
        STYLE_TEXT_COLOR,
        GENERAL_DISPLAY,
        OBJECT_VALUE
      } = ActionTypeConsts);
      trim = (v) => v.trim();
      colorStyleProps = Object.freeze({
        [STYLE_BACKGROUND_COLOR]: BACKGROUND_COLOR2,
        [STYLE_BORDER]: BORDER_COLOR2,
        [STYLE_TEXT_COLOR]: COLOR2
      });
      willChangeProps = Object.freeze({
        [TRANSFORM_PREFIXED]: TRANSFORM2,
        [BACKGROUND_COLOR2]: BACKGROUND2,
        [OPACITY2]: OPACITY2,
        [FILTER2]: FILTER2,
        [WIDTH2]: WIDTH2,
        [HEIGHT2]: HEIGHT2,
        [FONT_VARIATION_SETTINGS2]: FONT_VARIATION_SETTINGS2
      });
      objectCache = /* @__PURE__ */ new Map();
      instanceCount = 1;
      elementCount = 1;
      strictEqual = (a, b) => a === b;
      pxValueRegex = /px/;
      getFilterDefaults = (actionState, filters) => (
        // @ts-expect-error - TS7006 - Parameter 'result' implicitly has an 'any' type. | TS7006 - Parameter 'filter' implicitly has an 'any' type.
        filters.reduce((result, filter) => {
          if (result[filter.type] == null) {
            result[filter.type] = // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'any' can't be used to index type 'Readonly<{ blur: 0; 'hue-rotate': 0; invert: 0; grayscale: 0; saturate: 100; sepia: 0; contrast: 100; brightness: 100; }>'.
            filterDefaults[filter.type];
          }
          return result;
        }, actionState || {})
      );
      getFontVariationDefaults = (actionState, fontVariations) => fontVariations.reduce((result, fontVariation) => {
        if (result[fontVariation.type] == null) {
          result[fontVariation.type] = // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'Readonly<{ wght: 0; opsz: 0; wdth: 0; slnt: 0; }>'.
          fontVariationDefaults[fontVariation.type] || // @ts-expect-error - TS2339 - Property 'defaultValue' does not exist on type 'FontVariationItemConfigType'.
          fontVariation.defaultValue || 0;
        }
        return result;
      }, actionState || {});
      reduceFilters = (result, filter) => {
        if (filter) {
          result[filter.type] = filter.value || 0;
        }
        return result;
      };
      reduceFontVariations = (result, fontVariation) => {
        if (fontVariation) {
          result[fontVariation.type] = fontVariation.value || 0;
        }
        return result;
      };
      getItemConfigByKey = (actionTypeId, key, config) => {
        if (isPluginType(actionTypeId)) {
          return getPluginConfig(actionTypeId)(config, key);
        }
        switch (actionTypeId) {
          case STYLE_FILTER2: {
            const filter = (0, import_findLast.default)(config.filters, ({ type }) => type === key);
            return filter ? filter.value : 0;
          }
          case STYLE_FONT_VARIATION2: {
            const fontVariation = (0, import_findLast.default)(
              config.fontVariations,
              ({ type }) => type === key
            );
            return fontVariation ? fontVariation.value : 0;
          }
          default:
            return config[key];
        }
      };
      transformDefaults = {
        [TRANSFORM_MOVE2]: Object.freeze({
          xValue: 0,
          yValue: 0,
          zValue: 0
        }),
        [TRANSFORM_SCALE2]: Object.freeze({
          xValue: 1,
          yValue: 1,
          zValue: 1
        }),
        [TRANSFORM_ROTATE2]: Object.freeze({
          xValue: 0,
          yValue: 0,
          zValue: 0
        }),
        [TRANSFORM_SKEW2]: Object.freeze({
          xValue: 0,
          yValue: 0
        })
      };
      filterDefaults = Object.freeze({
        blur: 0,
        "hue-rotate": 0,
        invert: 0,
        grayscale: 0,
        saturate: 100,
        sepia: 0,
        contrast: 100,
        brightness: 100
      });
      fontVariationDefaults = Object.freeze({
        wght: 0,
        opsz: 0,
        wdth: 0,
        slnt: 0
      });
      getFilterUnit = (filterType, actionItemConfig) => {
        const filter = (0, import_findLast.default)(
          actionItemConfig.filters,
          ({ type }) => type === filterType
        );
        if (filter && filter.unit) {
          return filter.unit;
        }
        switch (filterType) {
          case "blur":
            return "px";
          case "hue-rotate":
            return "deg";
          default:
            return "%";
        }
      };
      transformKeys = Object.keys(transformDefaults);
      paramCapture = "\\(([^)]+)\\)";
      rgbValidRegex = /^rgb/;
      rgbMatchRegex = RegExp(`rgba?${paramCapture}`);
      processElementByType = ({
        effect,
        actionTypeId,
        elementApi
      }) => (
        // @ts-expect-error - TS7006 - Parameter 'element' implicitly has an 'any' type.
        (element) => {
          switch (actionTypeId) {
            case TRANSFORM_MOVE2:
            case TRANSFORM_SCALE2:
            case TRANSFORM_ROTATE2:
            case TRANSFORM_SKEW2:
              effect(element, TRANSFORM_PREFIXED, elementApi);
              break;
            case STYLE_FILTER2:
              effect(element, FILTER2, elementApi);
              break;
            case STYLE_FONT_VARIATION2:
              effect(element, FONT_VARIATION_SETTINGS2, elementApi);
              break;
            case STYLE_OPACITY:
              effect(element, OPACITY2, elementApi);
              break;
            case STYLE_SIZE2:
              effect(element, WIDTH2, elementApi);
              effect(element, HEIGHT2, elementApi);
              break;
            case STYLE_BACKGROUND_COLOR:
            case STYLE_BORDER:
            case STYLE_TEXT_COLOR:
              effect(element, colorStyleProps[actionTypeId], elementApi);
              break;
            case GENERAL_DISPLAY:
              effect(element, DISPLAY2, elementApi);
              break;
          }
        }
      );
    }
  });

  // packages/systems/ix2/shared/index.js
  var require_shared2 = __commonJS({
    "packages/systems/ix2/shared/index.js"(exports) {
      "use strict";
      var _interopRequireWildcard = require_interopRequireWildcard().default;
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.IX2VanillaUtils = exports.IX2VanillaPlugins = exports.IX2ElementsReducer = exports.IX2Easings = exports.IX2EasingUtils = exports.IX2BrowserSupport = void 0;
      var IX2BrowserSupport2 = _interopRequireWildcard((init_IX2BrowserSupport(), __toCommonJS(IX2BrowserSupport_exports)));
      exports.IX2BrowserSupport = IX2BrowserSupport2;
      var IX2Easings = _interopRequireWildcard((init_IX2Easings(), __toCommonJS(IX2Easings_exports)));
      exports.IX2Easings = IX2Easings;
      var IX2EasingUtils2 = _interopRequireWildcard((init_IX2EasingUtils(), __toCommonJS(IX2EasingUtils_exports)));
      exports.IX2EasingUtils = IX2EasingUtils2;
      var IX2ElementsReducer2 = _interopRequireWildcard((init_IX2ElementsReducer(), __toCommonJS(IX2ElementsReducer_exports)));
      exports.IX2ElementsReducer = IX2ElementsReducer2;
      var IX2VanillaPlugins2 = _interopRequireWildcard((init_IX2VanillaPlugins(), __toCommonJS(IX2VanillaPlugins_exports)));
      exports.IX2VanillaPlugins = IX2VanillaPlugins2;
      var IX2VanillaUtils5 = _interopRequireWildcard((init_IX2VanillaUtils(), __toCommonJS(IX2VanillaUtils_exports)));
      exports.IX2VanillaUtils = IX2VanillaUtils5;
    }
  });

  // packages/systems/ix2/engine/reducers/IX2InstancesReducer.ts
  var import_shared, import_timm5, IX2_RAW_DATA_IMPORTED3, IX2_SESSION_STOPPED4, IX2_INSTANCE_ADDED3, IX2_INSTANCE_STARTED2, IX2_INSTANCE_REMOVED2, IX2_ANIMATION_FRAME_CHANGED3, optimizeFloat2, applyEasing2, createBezierEasing2, RENDER_GENERAL3, getItemConfigByKey2, getRenderType2, getStyleProp2, continuousInstance, timedInstance, ixInstances;
  var init_IX2InstancesReducer = __esm({
    "packages/systems/ix2/engine/reducers/IX2InstancesReducer.ts"() {
      "use strict";
      init_constants();
      import_shared = __toESM(require_shared2());
      import_timm5 = __toESM(require_timm());
      ({
        IX2_RAW_DATA_IMPORTED: IX2_RAW_DATA_IMPORTED3,
        IX2_SESSION_STOPPED: IX2_SESSION_STOPPED4,
        IX2_INSTANCE_ADDED: IX2_INSTANCE_ADDED3,
        IX2_INSTANCE_STARTED: IX2_INSTANCE_STARTED2,
        IX2_INSTANCE_REMOVED: IX2_INSTANCE_REMOVED2,
        IX2_ANIMATION_FRAME_CHANGED: IX2_ANIMATION_FRAME_CHANGED3
      } = IX2EngineActionTypes_exports);
      ({ optimizeFloat: optimizeFloat2, applyEasing: applyEasing2, createBezierEasing: createBezierEasing2 } = import_shared.IX2EasingUtils);
      ({ RENDER_GENERAL: RENDER_GENERAL3 } = IX2EngineConstants_exports);
      ({ getItemConfigByKey: getItemConfigByKey2, getRenderType: getRenderType2, getStyleProp: getStyleProp2 } = import_shared.IX2VanillaUtils);
      continuousInstance = (state, action) => {
        const {
          position: lastPosition,
          parameterId,
          actionGroups,
          destinationKeys,
          smoothing,
          restingValue,
          actionTypeId,
          customEasingFn,
          skipMotion,
          skipToValue
        } = state;
        const { parameters } = action.payload;
        let velocity = Math.max(1 - smoothing, 0.01);
        let paramValue = parameters[parameterId];
        if (paramValue == null) {
          velocity = 1;
          paramValue = restingValue;
        }
        const nextPosition = Math.max(paramValue, 0) || 0;
        const positionDiff = optimizeFloat2(nextPosition - lastPosition);
        const position = skipMotion ? skipToValue : optimizeFloat2(lastPosition + positionDiff * velocity);
        const keyframePosition = position * 100;
        if (position === lastPosition && state.current) {
          return state;
        }
        let fromActionItem;
        let toActionItem;
        let positionOffset;
        let positionRange;
        for (let i = 0, { length } = actionGroups; i < length; i++) {
          const { keyframe, actionItems } = actionGroups[i];
          if (i === 0) {
            fromActionItem = actionItems[0];
          }
          if (keyframePosition >= keyframe) {
            fromActionItem = actionItems[0];
            const nextGroup = actionGroups[i + 1];
            const hasNextItem = nextGroup && keyframePosition !== keyframe;
            toActionItem = hasNextItem ? nextGroup.actionItems[0] : null;
            if (hasNextItem) {
              positionOffset = keyframe / 100;
              positionRange = (nextGroup.keyframe - keyframe) / 100;
            }
          }
        }
        const current = {};
        if (fromActionItem && !toActionItem) {
          for (let i = 0, { length } = destinationKeys; i < length; i++) {
            const key = destinationKeys[i];
            current[key] = getItemConfigByKey2(
              actionTypeId,
              key,
              fromActionItem.config
            );
          }
        } else if (fromActionItem && toActionItem && positionOffset !== void 0 && positionRange !== void 0) {
          const localPosition = (position - positionOffset) / positionRange;
          const easing = fromActionItem.config.easing;
          const eased = applyEasing2(easing, localPosition, customEasingFn);
          for (let i = 0, { length } = destinationKeys; i < length; i++) {
            const key = destinationKeys[i];
            const fromVal = getItemConfigByKey2(
              actionTypeId,
              key,
              fromActionItem.config
            );
            const toVal = getItemConfigByKey2(actionTypeId, key, toActionItem.config);
            const diff = toVal - fromVal;
            const value = diff * eased + fromVal;
            current[key] = value;
          }
        }
        return (0, import_timm5.merge)(state, {
          position,
          current
        });
      };
      timedInstance = (state, action) => {
        const {
          active,
          origin,
          start,
          immediate,
          renderType,
          verbose,
          actionItem,
          destination,
          destinationKeys,
          pluginDuration,
          instanceDelay,
          customEasingFn,
          skipMotion
        } = state;
        const easing = actionItem.config.easing;
        let { duration, delay } = actionItem.config;
        if (pluginDuration != null) {
          duration = pluginDuration;
        }
        delay = instanceDelay != null ? instanceDelay : delay;
        if (renderType === RENDER_GENERAL3) {
          duration = 0;
        } else if (immediate || skipMotion) {
          duration = delay = 0;
        }
        const { now } = action.payload;
        if (active && origin) {
          const delta = now - (start + delay);
          if (verbose) {
            const verboseDelta = now - start;
            const verboseDuration = duration + delay;
            const verbosePosition = optimizeFloat2(
              Math.min(Math.max(0, verboseDelta / verboseDuration), 1)
            );
            state = (0, import_timm5.set)(
              state,
              "verboseTimeElapsed",
              verboseDuration * verbosePosition
            );
          }
          if (delta < 0) {
            return state;
          }
          const position = optimizeFloat2(Math.min(Math.max(0, delta / duration), 1));
          const eased = applyEasing2(easing, position, customEasingFn);
          const newProps = {};
          let current = null;
          if (destinationKeys.length) {
            current = destinationKeys.reduce((result, key) => {
              const destValue = destination[key];
              const originVal = parseFloat(origin[key]) || 0;
              const diff = parseFloat(destValue) - originVal;
              const value = diff * eased + originVal;
              result[key] = value;
              return result;
            }, {});
          }
          newProps.current = current;
          newProps.position = position;
          if (position === 1) {
            newProps.active = false;
            newProps.complete = true;
          }
          return (0, import_timm5.merge)(state, newProps);
        }
        return state;
      };
      ixInstances = (state = Object.freeze({}), action) => {
        switch (action.type) {
          case IX2_RAW_DATA_IMPORTED3: {
            return action.payload.ixInstances || Object.freeze({});
          }
          case IX2_SESSION_STOPPED4: {
            return Object.freeze({});
          }
          case IX2_INSTANCE_ADDED3: {
            const {
              instanceId,
              elementId,
              actionItem,
              eventId,
              eventTarget,
              eventStateKey,
              actionListId,
              groupIndex,
              isCarrier,
              origin,
              destination,
              immediate,
              verbose,
              continuous,
              parameterId,
              actionGroups,
              smoothing,
              restingValue,
              pluginInstance,
              pluginDuration,
              instanceDelay,
              skipMotion,
              skipToValue
            } = action.payload;
            const { actionTypeId } = actionItem;
            const renderType = getRenderType2(actionTypeId);
            const styleProp = getStyleProp2(renderType, actionTypeId);
            const destinationKeys = Object.keys(destination).filter(
              (key) => (
                // Skip null destination values
                destination[key] != null && // Skip string destination values
                typeof destination[key] !== "string"
              )
            );
            const { easing } = actionItem.config;
            return (0, import_timm5.set)(state, instanceId, {
              id: instanceId,
              elementId,
              active: false,
              position: 0,
              start: 0,
              origin,
              destination,
              destinationKeys,
              immediate,
              verbose,
              current: null,
              actionItem,
              actionTypeId,
              eventId,
              eventTarget,
              eventStateKey,
              actionListId,
              groupIndex,
              renderType,
              isCarrier,
              styleProp,
              continuous,
              parameterId,
              actionGroups,
              smoothing,
              restingValue,
              pluginInstance,
              pluginDuration,
              instanceDelay,
              skipMotion,
              skipToValue,
              customEasingFn: Array.isArray(easing) && easing.length === 4 ? (
                // @ts-expect-error - TS2345 - Argument of type 'any[]' is not assignable to parameter of type 'IX2EasingCustomType'.
                createBezierEasing2(easing)
              ) : void 0
            });
          }
          case IX2_INSTANCE_STARTED2: {
            const { instanceId, time } = action.payload;
            return (0, import_timm5.mergeIn)(state, [instanceId], {
              active: true,
              complete: false,
              start: time
            });
          }
          case IX2_INSTANCE_REMOVED2: {
            const { instanceId } = action.payload;
            if (!state[instanceId]) {
              return state;
            }
            const newState = {};
            const keys = Object.keys(state);
            const { length } = keys;
            for (let i = 0; i < length; i++) {
              const key = keys[i];
              if (key !== instanceId) {
                newState[key] = state[key];
              }
            }
            return newState;
          }
          case IX2_ANIMATION_FRAME_CHANGED3: {
            let newState = state;
            const keys = Object.keys(state);
            const { length } = keys;
            for (let i = 0; i < length; i++) {
              const key = keys[i];
              const instance = state[key];
              const reducer = instance.continuous ? continuousInstance : timedInstance;
              newState = (0, import_timm5.set)(newState, key, reducer(instance, action));
            }
            return newState;
          }
          default: {
            return state;
          }
        }
      };
    }
  });

  // packages/systems/ix2/engine/reducers/IX2ParametersReducer.ts
  var IX2_RAW_DATA_IMPORTED4, IX2_SESSION_STOPPED5, IX2_PARAMETER_CHANGED2, ixParameters;
  var init_IX2ParametersReducer = __esm({
    "packages/systems/ix2/engine/reducers/IX2ParametersReducer.ts"() {
      "use strict";
      init_constants();
      ({ IX2_RAW_DATA_IMPORTED: IX2_RAW_DATA_IMPORTED4, IX2_SESSION_STOPPED: IX2_SESSION_STOPPED5, IX2_PARAMETER_CHANGED: IX2_PARAMETER_CHANGED2 } = IX2EngineActionTypes_exports);
      ixParameters = (state = {
        /*mutable flat state*/
      }, action) => {
        switch (action.type) {
          case IX2_RAW_DATA_IMPORTED4: {
            return action.payload.ixParameters || {
              /*mutable flat state*/
            };
          }
          case IX2_SESSION_STOPPED5: {
            return {
              /*mutable flat state*/
            };
          }
          case IX2_PARAMETER_CHANGED2: {
            const { key, value } = action.payload;
            state[key] = value;
            return state;
          }
          default: {
            return state;
          }
        }
      };
    }
  });

  // packages/systems/ix2/engine/reducers/IX2Reducer.ts
  var IX2Reducer_exports = {};
  __export(IX2Reducer_exports, {
    default: () => IX2Reducer_default
  });
  var import_redux, import_shared2, ixElements2, IX2Reducer_default;
  var init_IX2Reducer = __esm({
    "packages/systems/ix2/engine/reducers/IX2Reducer.ts"() {
      "use strict";
      import_redux = __toESM(require_lib2());
      init_IX2DataReducer();
      init_IX2RequestReducer();
      init_IX2SessionReducer();
      import_shared2 = __toESM(require_shared2());
      init_IX2InstancesReducer();
      init_IX2ParametersReducer();
      ({ ixElements: ixElements2 } = import_shared2.IX2ElementsReducer);
      IX2Reducer_default = (0, import_redux.combineReducers)({
        // @ts-expect-error - TS2322 - Type '(state: FixMeAny | null | undefined, action: {    type: typeof IX2_RAW_DATA_IMPORTED;    payload: {        ixData: FixMeAny;    };}) => any' is not assignable to type 'Reducer<any>'.
        ixData,
        ixRequest,
        ixSession,
        ixElements: ixElements2,
        ixInstances,
        ixParameters
      });
    }
  });

  // node_modules/lodash/isString.js
  var require_isString = __commonJS({
    "node_modules/lodash/isString.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isArray = require_isArray();
      var isObjectLike = require_isObjectLike();
      var stringTag = "[object String]";
      function isString2(value) {
        return typeof value == "string" || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
      }
      module.exports = isString2;
    }
  });

  // node_modules/lodash/_asciiSize.js
  var require_asciiSize = __commonJS({
    "node_modules/lodash/_asciiSize.js"(exports, module) {
      var baseProperty = require_baseProperty();
      var asciiSize = baseProperty("length");
      module.exports = asciiSize;
    }
  });

  // node_modules/lodash/_hasUnicode.js
  var require_hasUnicode = __commonJS({
    "node_modules/lodash/_hasUnicode.js"(exports, module) {
      var rsAstralRange = "\\ud800-\\udfff";
      var rsComboMarksRange = "\\u0300-\\u036f";
      var reComboHalfMarksRange = "\\ufe20-\\ufe2f";
      var rsComboSymbolsRange = "\\u20d0-\\u20ff";
      var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
      var rsVarRange = "\\ufe0e\\ufe0f";
      var rsZWJ = "\\u200d";
      var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
      function hasUnicode(string) {
        return reHasUnicode.test(string);
      }
      module.exports = hasUnicode;
    }
  });

  // node_modules/lodash/_unicodeSize.js
  var require_unicodeSize = __commonJS({
    "node_modules/lodash/_unicodeSize.js"(exports, module) {
      var rsAstralRange = "\\ud800-\\udfff";
      var rsComboMarksRange = "\\u0300-\\u036f";
      var reComboHalfMarksRange = "\\ufe20-\\ufe2f";
      var rsComboSymbolsRange = "\\u20d0-\\u20ff";
      var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
      var rsVarRange = "\\ufe0e\\ufe0f";
      var rsAstral = "[" + rsAstralRange + "]";
      var rsCombo = "[" + rsComboRange + "]";
      var rsFitz = "\\ud83c[\\udffb-\\udfff]";
      var rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")";
      var rsNonAstral = "[^" + rsAstralRange + "]";
      var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
      var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
      var rsZWJ = "\\u200d";
      var reOptMod = rsModifier + "?";
      var rsOptVar = "[" + rsVarRange + "]?";
      var rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*";
      var rsSeq = rsOptVar + reOptMod + rsOptJoin;
      var rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
      var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
      function unicodeSize(string) {
        var result = reUnicode.lastIndex = 0;
        while (reUnicode.test(string)) {
          ++result;
        }
        return result;
      }
      module.exports = unicodeSize;
    }
  });

  // node_modules/lodash/_stringSize.js
  var require_stringSize = __commonJS({
    "node_modules/lodash/_stringSize.js"(exports, module) {
      var asciiSize = require_asciiSize();
      var hasUnicode = require_hasUnicode();
      var unicodeSize = require_unicodeSize();
      function stringSize(string) {
        return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
      }
      module.exports = stringSize;
    }
  });

  // node_modules/lodash/size.js
  var require_size = __commonJS({
    "node_modules/lodash/size.js"(exports, module) {
      var baseKeys = require_baseKeys();
      var getTag = require_getTag();
      var isArrayLike = require_isArrayLike();
      var isString2 = require_isString();
      var stringSize = require_stringSize();
      var mapTag = "[object Map]";
      var setTag = "[object Set]";
      function size2(collection) {
        if (collection == null) {
          return 0;
        }
        if (isArrayLike(collection)) {
          return isString2(collection) ? stringSize(collection) : collection.length;
        }
        var tag = getTag(collection);
        if (tag == mapTag || tag == setTag) {
          return collection.size;
        }
        return baseKeys(collection).length;
      }
      module.exports = size2;
    }
  });

  // node_modules/lodash/negate.js
  var require_negate = __commonJS({
    "node_modules/lodash/negate.js"(exports, module) {
      var FUNC_ERROR_TEXT = "Expected a function";
      function negate(predicate) {
        if (typeof predicate != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        return function() {
          var args = arguments;
          switch (args.length) {
            case 0:
              return !predicate.call(this);
            case 1:
              return !predicate.call(this, args[0]);
            case 2:
              return !predicate.call(this, args[0], args[1]);
            case 3:
              return !predicate.call(this, args[0], args[1], args[2]);
          }
          return !predicate.apply(this, args);
        };
      }
      module.exports = negate;
    }
  });

  // node_modules/lodash/_defineProperty.js
  var require_defineProperty = __commonJS({
    "node_modules/lodash/_defineProperty.js"(exports, module) {
      var getNative = require_getNative();
      var defineProperty = function() {
        try {
          var func = getNative(Object, "defineProperty");
          func({}, "", {});
          return func;
        } catch (e) {
        }
      }();
      module.exports = defineProperty;
    }
  });

  // node_modules/lodash/_baseAssignValue.js
  var require_baseAssignValue = __commonJS({
    "node_modules/lodash/_baseAssignValue.js"(exports, module) {
      var defineProperty = require_defineProperty();
      function baseAssignValue(object, key, value) {
        if (key == "__proto__" && defineProperty) {
          defineProperty(object, key, {
            "configurable": true,
            "enumerable": true,
            "value": value,
            "writable": true
          });
        } else {
          object[key] = value;
        }
      }
      module.exports = baseAssignValue;
    }
  });

  // node_modules/lodash/_assignValue.js
  var require_assignValue = __commonJS({
    "node_modules/lodash/_assignValue.js"(exports, module) {
      var baseAssignValue = require_baseAssignValue();
      var eq = require_eq();
      var objectProto = Object.prototype;
      var hasOwnProperty4 = objectProto.hasOwnProperty;
      function assignValue(object, key, value) {
        var objValue = object[key];
        if (!(hasOwnProperty4.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
          baseAssignValue(object, key, value);
        }
      }
      module.exports = assignValue;
    }
  });

  // node_modules/lodash/_baseSet.js
  var require_baseSet = __commonJS({
    "node_modules/lodash/_baseSet.js"(exports, module) {
      var assignValue = require_assignValue();
      var castPath = require_castPath();
      var isIndex = require_isIndex();
      var isObject2 = require_isObject();
      var toKey = require_toKey();
      function baseSet(object, path, value, customizer) {
        if (!isObject2(object)) {
          return object;
        }
        path = castPath(path, object);
        var index = -1, length = path.length, lastIndex = length - 1, nested = object;
        while (nested != null && ++index < length) {
          var key = toKey(path[index]), newValue = value;
          if (key === "__proto__" || key === "constructor" || key === "prototype") {
            return object;
          }
          if (index != lastIndex) {
            var objValue = nested[key];
            newValue = customizer ? customizer(objValue, key, nested) : void 0;
            if (newValue === void 0) {
              newValue = isObject2(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
            }
          }
          assignValue(nested, key, newValue);
          nested = nested[key];
        }
        return object;
      }
      module.exports = baseSet;
    }
  });

  // node_modules/lodash/_basePickBy.js
  var require_basePickBy = __commonJS({
    "node_modules/lodash/_basePickBy.js"(exports, module) {
      var baseGet = require_baseGet();
      var baseSet = require_baseSet();
      var castPath = require_castPath();
      function basePickBy(object, paths, predicate) {
        var index = -1, length = paths.length, result = {};
        while (++index < length) {
          var path = paths[index], value = baseGet(object, path);
          if (predicate(value, path)) {
            baseSet(result, castPath(path, object), value);
          }
        }
        return result;
      }
      module.exports = basePickBy;
    }
  });

  // node_modules/lodash/_getSymbolsIn.js
  var require_getSymbolsIn = __commonJS({
    "node_modules/lodash/_getSymbolsIn.js"(exports, module) {
      var arrayPush = require_arrayPush();
      var getPrototype = require_getPrototype();
      var getSymbols = require_getSymbols();
      var stubArray = require_stubArray();
      var nativeGetSymbols = Object.getOwnPropertySymbols;
      var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
        var result = [];
        while (object) {
          arrayPush(result, getSymbols(object));
          object = getPrototype(object);
        }
        return result;
      };
      module.exports = getSymbolsIn;
    }
  });

  // node_modules/lodash/_nativeKeysIn.js
  var require_nativeKeysIn = __commonJS({
    "node_modules/lodash/_nativeKeysIn.js"(exports, module) {
      function nativeKeysIn(object) {
        var result = [];
        if (object != null) {
          for (var key in Object(object)) {
            result.push(key);
          }
        }
        return result;
      }
      module.exports = nativeKeysIn;
    }
  });

  // node_modules/lodash/_baseKeysIn.js
  var require_baseKeysIn = __commonJS({
    "node_modules/lodash/_baseKeysIn.js"(exports, module) {
      var isObject2 = require_isObject();
      var isPrototype = require_isPrototype();
      var nativeKeysIn = require_nativeKeysIn();
      var objectProto = Object.prototype;
      var hasOwnProperty4 = objectProto.hasOwnProperty;
      function baseKeysIn(object) {
        if (!isObject2(object)) {
          return nativeKeysIn(object);
        }
        var isProto = isPrototype(object), result = [];
        for (var key in object) {
          if (!(key == "constructor" && (isProto || !hasOwnProperty4.call(object, key)))) {
            result.push(key);
          }
        }
        return result;
      }
      module.exports = baseKeysIn;
    }
  });

  // node_modules/lodash/keysIn.js
  var require_keysIn = __commonJS({
    "node_modules/lodash/keysIn.js"(exports, module) {
      var arrayLikeKeys = require_arrayLikeKeys();
      var baseKeysIn = require_baseKeysIn();
      var isArrayLike = require_isArrayLike();
      function keysIn(object) {
        return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
      }
      module.exports = keysIn;
    }
  });

  // node_modules/lodash/_getAllKeysIn.js
  var require_getAllKeysIn = __commonJS({
    "node_modules/lodash/_getAllKeysIn.js"(exports, module) {
      var baseGetAllKeys = require_baseGetAllKeys();
      var getSymbolsIn = require_getSymbolsIn();
      var keysIn = require_keysIn();
      function getAllKeysIn(object) {
        return baseGetAllKeys(object, keysIn, getSymbolsIn);
      }
      module.exports = getAllKeysIn;
    }
  });

  // node_modules/lodash/pickBy.js
  var require_pickBy = __commonJS({
    "node_modules/lodash/pickBy.js"(exports, module) {
      var arrayMap = require_arrayMap();
      var baseIteratee = require_baseIteratee();
      var basePickBy = require_basePickBy();
      var getAllKeysIn = require_getAllKeysIn();
      function pickBy(object, predicate) {
        if (object == null) {
          return {};
        }
        var props = arrayMap(getAllKeysIn(object), function(prop) {
          return [prop];
        });
        predicate = baseIteratee(predicate);
        return basePickBy(object, props, function(value, path) {
          return predicate(value, path[0]);
        });
      }
      module.exports = pickBy;
    }
  });

  // node_modules/lodash/omitBy.js
  var require_omitBy = __commonJS({
    "node_modules/lodash/omitBy.js"(exports, module) {
      var baseIteratee = require_baseIteratee();
      var negate = require_negate();
      var pickBy = require_pickBy();
      function omitBy2(object, predicate) {
        return pickBy(object, negate(baseIteratee(predicate)));
      }
      module.exports = omitBy2;
    }
  });

  // node_modules/lodash/isEmpty.js
  var require_isEmpty = __commonJS({
    "node_modules/lodash/isEmpty.js"(exports, module) {
      var baseKeys = require_baseKeys();
      var getTag = require_getTag();
      var isArguments = require_isArguments();
      var isArray = require_isArray();
      var isArrayLike = require_isArrayLike();
      var isBuffer = require_isBuffer();
      var isPrototype = require_isPrototype();
      var isTypedArray = require_isTypedArray();
      var mapTag = "[object Map]";
      var setTag = "[object Set]";
      var objectProto = Object.prototype;
      var hasOwnProperty4 = objectProto.hasOwnProperty;
      function isEmpty2(value) {
        if (value == null) {
          return true;
        }
        if (isArrayLike(value) && (isArray(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
          return !value.length;
        }
        var tag = getTag(value);
        if (tag == mapTag || tag == setTag) {
          return !value.size;
        }
        if (isPrototype(value)) {
          return !baseKeys(value).length;
        }
        for (var key in value) {
          if (hasOwnProperty4.call(value, key)) {
            return false;
          }
        }
        return true;
      }
      module.exports = isEmpty2;
    }
  });

  // node_modules/lodash/mapValues.js
  var require_mapValues = __commonJS({
    "node_modules/lodash/mapValues.js"(exports, module) {
      var baseAssignValue = require_baseAssignValue();
      var baseForOwn = require_baseForOwn();
      var baseIteratee = require_baseIteratee();
      function mapValues2(object, iteratee) {
        var result = {};
        iteratee = baseIteratee(iteratee, 3);
        baseForOwn(object, function(value, key, object2) {
          baseAssignValue(result, key, iteratee(value, key, object2));
        });
        return result;
      }
      module.exports = mapValues2;
    }
  });

  // node_modules/lodash/_arrayEach.js
  var require_arrayEach = __commonJS({
    "node_modules/lodash/_arrayEach.js"(exports, module) {
      function arrayEach(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (iteratee(array[index], index, array) === false) {
            break;
          }
        }
        return array;
      }
      module.exports = arrayEach;
    }
  });

  // node_modules/lodash/_castFunction.js
  var require_castFunction = __commonJS({
    "node_modules/lodash/_castFunction.js"(exports, module) {
      var identity2 = require_identity();
      function castFunction(value) {
        return typeof value == "function" ? value : identity2;
      }
      module.exports = castFunction;
    }
  });

  // node_modules/lodash/forEach.js
  var require_forEach = __commonJS({
    "node_modules/lodash/forEach.js"(exports, module) {
      var arrayEach = require_arrayEach();
      var baseEach = require_baseEach();
      var castFunction = require_castFunction();
      var isArray = require_isArray();
      function forEach4(collection, iteratee) {
        var func = isArray(collection) ? arrayEach : baseEach;
        return func(collection, castFunction(iteratee));
      }
      module.exports = forEach4;
    }
  });

  // node_modules/lodash/now.js
  var require_now = __commonJS({
    "node_modules/lodash/now.js"(exports, module) {
      var root = require_root();
      var now = function() {
        return root.Date.now();
      };
      module.exports = now;
    }
  });

  // node_modules/lodash/debounce.js
  var require_debounce = __commonJS({
    "node_modules/lodash/debounce.js"(exports, module) {
      var isObject2 = require_isObject();
      var now = require_now();
      var toNumber = require_toNumber();
      var FUNC_ERROR_TEXT = "Expected a function";
      var nativeMax = Math.max;
      var nativeMin = Math.min;
      function debounce2(func, wait, options) {
        var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
        if (typeof func != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        wait = toNumber(wait) || 0;
        if (isObject2(options)) {
          leading = !!options.leading;
          maxing = "maxWait" in options;
          maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
          trailing = "trailing" in options ? !!options.trailing : trailing;
        }
        function invokeFunc(time) {
          var args = lastArgs, thisArg = lastThis;
          lastArgs = lastThis = void 0;
          lastInvokeTime = time;
          result = func.apply(thisArg, args);
          return result;
        }
        function leadingEdge(time) {
          lastInvokeTime = time;
          timerId = setTimeout(timerExpired, wait);
          return leading ? invokeFunc(time) : result;
        }
        function remainingWait(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
          return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
        }
        function shouldInvoke(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
          return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
        }
        function timerExpired() {
          var time = now();
          if (shouldInvoke(time)) {
            return trailingEdge(time);
          }
          timerId = setTimeout(timerExpired, remainingWait(time));
        }
        function trailingEdge(time) {
          timerId = void 0;
          if (trailing && lastArgs) {
            return invokeFunc(time);
          }
          lastArgs = lastThis = void 0;
          return result;
        }
        function cancel() {
          if (timerId !== void 0) {
            clearTimeout(timerId);
          }
          lastInvokeTime = 0;
          lastArgs = lastCallTime = lastThis = timerId = void 0;
        }
        function flush() {
          return timerId === void 0 ? result : trailingEdge(now());
        }
        function debounced() {
          var time = now(), isInvoking = shouldInvoke(time);
          lastArgs = arguments;
          lastThis = this;
          lastCallTime = time;
          if (isInvoking) {
            if (timerId === void 0) {
              return leadingEdge(lastCallTime);
            }
            if (maxing) {
              clearTimeout(timerId);
              timerId = setTimeout(timerExpired, wait);
              return invokeFunc(lastCallTime);
            }
          }
          if (timerId === void 0) {
            timerId = setTimeout(timerExpired, wait);
          }
          return result;
        }
        debounced.cancel = cancel;
        debounced.flush = flush;
        return debounced;
      }
      module.exports = debounce2;
    }
  });

  // node_modules/lodash/throttle.js
  var require_throttle = __commonJS({
    "node_modules/lodash/throttle.js"(exports, module) {
      var debounce2 = require_debounce();
      var isObject2 = require_isObject();
      var FUNC_ERROR_TEXT = "Expected a function";
      function throttle2(func, wait, options) {
        var leading = true, trailing = true;
        if (typeof func != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        if (isObject2(options)) {
          leading = "leading" in options ? !!options.leading : leading;
          trailing = "trailing" in options ? !!options.trailing : trailing;
        }
        return debounce2(func, wait, {
          "leading": leading,
          "maxWait": wait,
          "trailing": trailing
        });
      }
      module.exports = throttle2;
    }
  });

  // packages/systems/ix2/engine/actions/IX2EngineActions.ts
  var IX2EngineActions_exports = {};
  __export(IX2EngineActions_exports, {
    actionListPlaybackChanged: () => actionListPlaybackChanged,
    animationFrameChanged: () => animationFrameChanged,
    clearRequested: () => clearRequested,
    elementStateChanged: () => elementStateChanged,
    eventListenerAdded: () => eventListenerAdded,
    eventStateChanged: () => eventStateChanged,
    instanceAdded: () => instanceAdded,
    instanceRemoved: () => instanceRemoved,
    instanceStarted: () => instanceStarted,
    mediaQueriesDefined: () => mediaQueriesDefined,
    parameterChanged: () => parameterChanged,
    playbackRequested: () => playbackRequested,
    previewRequested: () => previewRequested,
    rawDataImported: () => rawDataImported,
    sessionInitialized: () => sessionInitialized,
    sessionStarted: () => sessionStarted,
    sessionStopped: () => sessionStopped,
    stopRequested: () => stopRequested,
    testFrameRendered: () => testFrameRendered,
    viewportWidthChanged: () => viewportWidthChanged
  });
  var import_shared3, IX2_RAW_DATA_IMPORTED5, IX2_SESSION_INITIALIZED3, IX2_SESSION_STARTED3, IX2_SESSION_STOPPED6, IX2_PREVIEW_REQUESTED3, IX2_PLAYBACK_REQUESTED3, IX2_STOP_REQUESTED3, IX2_CLEAR_REQUESTED3, IX2_EVENT_LISTENER_ADDED3, IX2_TEST_FRAME_RENDERED3, IX2_EVENT_STATE_CHANGED3, IX2_ANIMATION_FRAME_CHANGED4, IX2_PARAMETER_CHANGED3, IX2_INSTANCE_ADDED4, IX2_INSTANCE_STARTED3, IX2_INSTANCE_REMOVED3, IX2_ELEMENT_STATE_CHANGED3, IX2_ACTION_LIST_PLAYBACK_CHANGED3, IX2_VIEWPORT_WIDTH_CHANGED3, IX2_MEDIA_QUERIES_DEFINED3, reifyState2, rawDataImported, sessionInitialized, sessionStarted, sessionStopped, previewRequested, playbackRequested, stopRequested, clearRequested, eventListenerAdded, testFrameRendered, eventStateChanged, animationFrameChanged, parameterChanged, instanceAdded, instanceStarted, instanceRemoved, elementStateChanged, actionListPlaybackChanged, viewportWidthChanged, mediaQueriesDefined;
  var init_IX2EngineActions = __esm({
    "packages/systems/ix2/engine/actions/IX2EngineActions.ts"() {
      "use strict";
      init_constants();
      import_shared3 = __toESM(require_shared2());
      ({
        IX2_RAW_DATA_IMPORTED: IX2_RAW_DATA_IMPORTED5,
        IX2_SESSION_INITIALIZED: IX2_SESSION_INITIALIZED3,
        IX2_SESSION_STARTED: IX2_SESSION_STARTED3,
        IX2_SESSION_STOPPED: IX2_SESSION_STOPPED6,
        IX2_PREVIEW_REQUESTED: IX2_PREVIEW_REQUESTED3,
        IX2_PLAYBACK_REQUESTED: IX2_PLAYBACK_REQUESTED3,
        IX2_STOP_REQUESTED: IX2_STOP_REQUESTED3,
        IX2_CLEAR_REQUESTED: IX2_CLEAR_REQUESTED3,
        IX2_EVENT_LISTENER_ADDED: IX2_EVENT_LISTENER_ADDED3,
        IX2_TEST_FRAME_RENDERED: IX2_TEST_FRAME_RENDERED3,
        IX2_EVENT_STATE_CHANGED: IX2_EVENT_STATE_CHANGED3,
        IX2_ANIMATION_FRAME_CHANGED: IX2_ANIMATION_FRAME_CHANGED4,
        IX2_PARAMETER_CHANGED: IX2_PARAMETER_CHANGED3,
        IX2_INSTANCE_ADDED: IX2_INSTANCE_ADDED4,
        IX2_INSTANCE_STARTED: IX2_INSTANCE_STARTED3,
        IX2_INSTANCE_REMOVED: IX2_INSTANCE_REMOVED3,
        IX2_ELEMENT_STATE_CHANGED: IX2_ELEMENT_STATE_CHANGED3,
        IX2_ACTION_LIST_PLAYBACK_CHANGED: IX2_ACTION_LIST_PLAYBACK_CHANGED3,
        IX2_VIEWPORT_WIDTH_CHANGED: IX2_VIEWPORT_WIDTH_CHANGED3,
        IX2_MEDIA_QUERIES_DEFINED: IX2_MEDIA_QUERIES_DEFINED3
      } = IX2EngineActionTypes_exports);
      ({ reifyState: reifyState2 } = import_shared3.IX2VanillaUtils);
      rawDataImported = (rawData) => ({
        type: IX2_RAW_DATA_IMPORTED5,
        payload: {
          ...reifyState2(rawData)
        }
      });
      sessionInitialized = ({
        hasBoundaryNodes,
        reducedMotion
      }) => ({
        type: IX2_SESSION_INITIALIZED3,
        payload: {
          hasBoundaryNodes,
          reducedMotion
        }
      });
      sessionStarted = () => ({
        type: IX2_SESSION_STARTED3
      });
      sessionStopped = () => ({
        type: IX2_SESSION_STOPPED6
      });
      previewRequested = ({
        rawData,
        defer
      }) => ({
        type: IX2_PREVIEW_REQUESTED3,
        payload: {
          defer,
          rawData
        }
      });
      playbackRequested = ({
        actionTypeId = ActionTypeConsts.GENERAL_START_ACTION,
        actionListId,
        actionItemId,
        eventId,
        allowEvents,
        immediate,
        testManual,
        verbose,
        rawData
      }) => ({
        type: IX2_PLAYBACK_REQUESTED3,
        payload: {
          actionTypeId,
          actionListId,
          actionItemId,
          testManual,
          eventId,
          allowEvents,
          immediate,
          verbose,
          rawData
        }
      });
      stopRequested = (actionListId) => ({
        type: IX2_STOP_REQUESTED3,
        payload: {
          actionListId
        }
      });
      clearRequested = () => ({
        type: IX2_CLEAR_REQUESTED3
      });
      eventListenerAdded = (target, listenerParams) => ({
        type: IX2_EVENT_LISTENER_ADDED3,
        payload: {
          target,
          listenerParams
        }
      });
      testFrameRendered = (step = 1) => ({
        type: IX2_TEST_FRAME_RENDERED3,
        payload: {
          step
        }
      });
      eventStateChanged = (stateKey, newState) => ({
        type: IX2_EVENT_STATE_CHANGED3,
        payload: {
          stateKey,
          newState
        }
      });
      animationFrameChanged = (now, parameters) => ({
        type: IX2_ANIMATION_FRAME_CHANGED4,
        payload: {
          now,
          parameters
        }
      });
      parameterChanged = (key, value) => ({
        type: IX2_PARAMETER_CHANGED3,
        payload: {
          key,
          value
        }
      });
      instanceAdded = (options) => ({
        type: IX2_INSTANCE_ADDED4,
        payload: {
          ...options
        }
      });
      instanceStarted = (instanceId, time) => ({
        type: IX2_INSTANCE_STARTED3,
        payload: {
          instanceId,
          time
        }
      });
      instanceRemoved = (instanceId) => ({
        type: IX2_INSTANCE_REMOVED3,
        payload: {
          instanceId
        }
      });
      elementStateChanged = (elementId, actionTypeId, current, actionItem) => ({
        type: IX2_ELEMENT_STATE_CHANGED3,
        payload: {
          elementId,
          actionTypeId,
          current,
          actionItem
        }
      });
      actionListPlaybackChanged = ({
        actionListId,
        isPlaying
      }) => ({
        type: IX2_ACTION_LIST_PLAYBACK_CHANGED3,
        payload: {
          actionListId,
          isPlaying
        }
      });
      viewportWidthChanged = ({
        width,
        mediaQueries
      }) => ({
        type: IX2_VIEWPORT_WIDTH_CHANGED3,
        payload: {
          width,
          mediaQueries
        }
      });
      mediaQueriesDefined = () => ({
        type: IX2_MEDIA_QUERIES_DEFINED3
      });
    }
  });

  // packages/systems/ix2/engine/logic/IX2BrowserApi.ts
  var IX2BrowserApi_exports = {};
  __export(IX2BrowserApi_exports, {
    elementContains: () => elementContains,
    getChildElements: () => getChildElements,
    getClosestElement: () => getClosestElement,
    getProperty: () => getProperty,
    getQuerySelector: () => getQuerySelector,
    getRefType: () => getRefType,
    getSiblingElements: () => getSiblingElements,
    getStyle: () => getStyle,
    getValidDocument: () => getValidDocument,
    isSiblingNode: () => isSiblingNode,
    matchSelector: () => matchSelector,
    queryDocument: () => queryDocument,
    setStyle: () => setStyle
  });
  function setStyle(element, prop, value) {
    element.style[prop] = value;
  }
  function getStyle(element, prop) {
    return element.style[prop];
  }
  function getProperty(element, prop) {
    return element[prop];
  }
  function matchSelector(selector) {
    return (element) => element[ELEMENT_MATCHES2](selector);
  }
  function getQuerySelector({
    id,
    selector
  }) {
    if (id) {
      let nodeId = id;
      if (id.indexOf(IX2_ID_DELIMITER2) !== -1) {
        const pair = id.split(IX2_ID_DELIMITER2);
        const pageId = pair[0];
        nodeId = pair[1];
        if (pageId !== document.documentElement.getAttribute(WF_PAGE2)) {
          return null;
        }
      }
      return `[data-w-id="${nodeId}"], [data-w-id^="${nodeId}_instance"]`;
    }
    return selector;
  }
  function getValidDocument(pageId) {
    if (pageId == null || pageId === document.documentElement.getAttribute(WF_PAGE2)) {
      return document;
    }
    return null;
  }
  function queryDocument(baseSelector, descendantSelector) {
    return Array.prototype.slice.call(
      document.querySelectorAll(
        descendantSelector ? baseSelector + " " + descendantSelector : baseSelector
      )
    );
  }
  function elementContains(parent, child) {
    return parent.contains(child);
  }
  function isSiblingNode(a, b) {
    return a !== b && a.parentNode === b.parentNode;
  }
  function getChildElements(sourceElements) {
    const childElements = [];
    for (let i = 0, { length } = sourceElements || []; i < length; i++) {
      const { children } = sourceElements[i];
      const { length: childCount } = children;
      if (!childCount) {
        continue;
      }
      for (let j = 0; j < childCount; j++) {
        childElements.push(children[j]);
      }
    }
    return childElements;
  }
  function getSiblingElements(sourceElements = []) {
    const elements = [];
    const parentCache = [];
    for (let i = 0, { length } = sourceElements; i < length; i++) {
      const { parentNode } = sourceElements[i];
      if (!parentNode || !parentNode.children || !parentNode.children.length) {
        continue;
      }
      if (parentCache.indexOf(parentNode) !== -1) {
        continue;
      }
      parentCache.push(parentNode);
      let el = parentNode.firstElementChild;
      while (el != null) {
        if (sourceElements.indexOf(el) === -1) {
          elements.push(el);
        }
        el = el.nextElementSibling;
      }
    }
    return elements;
  }
  function getRefType(ref) {
    if (ref != null && typeof ref == "object") {
      return ref instanceof Element ? HTML_ELEMENT3 : PLAIN_OBJECT3;
    }
    return null;
  }
  var import_shared4, ELEMENT_MATCHES2, IX2_ID_DELIMITER2, HTML_ELEMENT3, PLAIN_OBJECT3, WF_PAGE2, getClosestElement;
  var init_IX2BrowserApi = __esm({
    "packages/systems/ix2/engine/logic/IX2BrowserApi.ts"() {
      "use strict";
      import_shared4 = __toESM(require_shared2());
      init_constants();
      ({ ELEMENT_MATCHES: ELEMENT_MATCHES2 } = import_shared4.IX2BrowserSupport);
      ({ IX2_ID_DELIMITER: IX2_ID_DELIMITER2, HTML_ELEMENT: HTML_ELEMENT3, PLAIN_OBJECT: PLAIN_OBJECT3, WF_PAGE: WF_PAGE2 } = IX2EngineConstants_exports);
      getClosestElement = Element.prototype.closest ? (element, selector) => {
        if (!document.documentElement.contains(element)) {
          return null;
        }
        return element.closest(selector);
      } : (element, selector) => {
        if (!document.documentElement.contains(element)) {
          return null;
        }
        let el = element;
        do {
          if (el[ELEMENT_MATCHES2] && el[ELEMENT_MATCHES2](selector)) {
            return el;
          }
          el = el.parentNode;
        } while (el != null);
        return null;
      };
    }
  });

  // node_modules/lodash/_baseCreate.js
  var require_baseCreate = __commonJS({
    "node_modules/lodash/_baseCreate.js"(exports, module) {
      var isObject2 = require_isObject();
      var objectCreate = Object.create;
      var baseCreate = function() {
        function object() {
        }
        return function(proto) {
          if (!isObject2(proto)) {
            return {};
          }
          if (objectCreate) {
            return objectCreate(proto);
          }
          object.prototype = proto;
          var result = new object();
          object.prototype = void 0;
          return result;
        };
      }();
      module.exports = baseCreate;
    }
  });

  // node_modules/lodash/_baseLodash.js
  var require_baseLodash = __commonJS({
    "node_modules/lodash/_baseLodash.js"(exports, module) {
      function baseLodash() {
      }
      module.exports = baseLodash;
    }
  });

  // node_modules/lodash/_LodashWrapper.js
  var require_LodashWrapper = __commonJS({
    "node_modules/lodash/_LodashWrapper.js"(exports, module) {
      var baseCreate = require_baseCreate();
      var baseLodash = require_baseLodash();
      function LodashWrapper(value, chainAll) {
        this.__wrapped__ = value;
        this.__actions__ = [];
        this.__chain__ = !!chainAll;
        this.__index__ = 0;
        this.__values__ = void 0;
      }
      LodashWrapper.prototype = baseCreate(baseLodash.prototype);
      LodashWrapper.prototype.constructor = LodashWrapper;
      module.exports = LodashWrapper;
    }
  });

  // node_modules/lodash/_isFlattenable.js
  var require_isFlattenable = __commonJS({
    "node_modules/lodash/_isFlattenable.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var isArguments = require_isArguments();
      var isArray = require_isArray();
      var spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : void 0;
      function isFlattenable(value) {
        return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
      }
      module.exports = isFlattenable;
    }
  });

  // node_modules/lodash/_baseFlatten.js
  var require_baseFlatten = __commonJS({
    "node_modules/lodash/_baseFlatten.js"(exports, module) {
      var arrayPush = require_arrayPush();
      var isFlattenable = require_isFlattenable();
      function baseFlatten(array, depth, predicate, isStrict, result) {
        var index = -1, length = array.length;
        predicate || (predicate = isFlattenable);
        result || (result = []);
        while (++index < length) {
          var value = array[index];
          if (depth > 0 && predicate(value)) {
            if (depth > 1) {
              baseFlatten(value, depth - 1, predicate, isStrict, result);
            } else {
              arrayPush(result, value);
            }
          } else if (!isStrict) {
            result[result.length] = value;
          }
        }
        return result;
      }
      module.exports = baseFlatten;
    }
  });

  // node_modules/lodash/flatten.js
  var require_flatten = __commonJS({
    "node_modules/lodash/flatten.js"(exports, module) {
      var baseFlatten = require_baseFlatten();
      function flatten(array) {
        var length = array == null ? 0 : array.length;
        return length ? baseFlatten(array, 1) : [];
      }
      module.exports = flatten;
    }
  });

  // node_modules/lodash/_apply.js
  var require_apply = __commonJS({
    "node_modules/lodash/_apply.js"(exports, module) {
      function apply(func, thisArg, args) {
        switch (args.length) {
          case 0:
            return func.call(thisArg);
          case 1:
            return func.call(thisArg, args[0]);
          case 2:
            return func.call(thisArg, args[0], args[1]);
          case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
        }
        return func.apply(thisArg, args);
      }
      module.exports = apply;
    }
  });

  // node_modules/lodash/_overRest.js
  var require_overRest = __commonJS({
    "node_modules/lodash/_overRest.js"(exports, module) {
      var apply = require_apply();
      var nativeMax = Math.max;
      function overRest(func, start, transform2) {
        start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
        return function() {
          var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
          while (++index < length) {
            array[index] = args[start + index];
          }
          index = -1;
          var otherArgs = Array(start + 1);
          while (++index < start) {
            otherArgs[index] = args[index];
          }
          otherArgs[start] = transform2(array);
          return apply(func, this, otherArgs);
        };
      }
      module.exports = overRest;
    }
  });

  // node_modules/lodash/constant.js
  var require_constant = __commonJS({
    "node_modules/lodash/constant.js"(exports, module) {
      function constant2(value) {
        return function() {
          return value;
        };
      }
      module.exports = constant2;
    }
  });

  // node_modules/lodash/_baseSetToString.js
  var require_baseSetToString = __commonJS({
    "node_modules/lodash/_baseSetToString.js"(exports, module) {
      var constant2 = require_constant();
      var defineProperty = require_defineProperty();
      var identity2 = require_identity();
      var baseSetToString = !defineProperty ? identity2 : function(func, string) {
        return defineProperty(func, "toString", {
          "configurable": true,
          "enumerable": false,
          "value": constant2(string),
          "writable": true
        });
      };
      module.exports = baseSetToString;
    }
  });

  // node_modules/lodash/_shortOut.js
  var require_shortOut = __commonJS({
    "node_modules/lodash/_shortOut.js"(exports, module) {
      var HOT_COUNT = 800;
      var HOT_SPAN = 16;
      var nativeNow = Date.now;
      function shortOut(func) {
        var count = 0, lastCalled = 0;
        return function() {
          var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
          lastCalled = stamp;
          if (remaining > 0) {
            if (++count >= HOT_COUNT) {
              return arguments[0];
            }
          } else {
            count = 0;
          }
          return func.apply(void 0, arguments);
        };
      }
      module.exports = shortOut;
    }
  });

  // node_modules/lodash/_setToString.js
  var require_setToString = __commonJS({
    "node_modules/lodash/_setToString.js"(exports, module) {
      var baseSetToString = require_baseSetToString();
      var shortOut = require_shortOut();
      var setToString = shortOut(baseSetToString);
      module.exports = setToString;
    }
  });

  // node_modules/lodash/_flatRest.js
  var require_flatRest = __commonJS({
    "node_modules/lodash/_flatRest.js"(exports, module) {
      var flatten = require_flatten();
      var overRest = require_overRest();
      var setToString = require_setToString();
      function flatRest(func) {
        return setToString(overRest(func, void 0, flatten), func + "");
      }
      module.exports = flatRest;
    }
  });

  // node_modules/lodash/_metaMap.js
  var require_metaMap = __commonJS({
    "node_modules/lodash/_metaMap.js"(exports, module) {
      var WeakMap2 = require_WeakMap();
      var metaMap = WeakMap2 && new WeakMap2();
      module.exports = metaMap;
    }
  });

  // node_modules/lodash/noop.js
  var require_noop = __commonJS({
    "node_modules/lodash/noop.js"(exports, module) {
      function noop2() {
      }
      module.exports = noop2;
    }
  });

  // node_modules/lodash/_getData.js
  var require_getData = __commonJS({
    "node_modules/lodash/_getData.js"(exports, module) {
      var metaMap = require_metaMap();
      var noop2 = require_noop();
      var getData = !metaMap ? noop2 : function(func) {
        return metaMap.get(func);
      };
      module.exports = getData;
    }
  });

  // node_modules/lodash/_realNames.js
  var require_realNames = __commonJS({
    "node_modules/lodash/_realNames.js"(exports, module) {
      var realNames = {};
      module.exports = realNames;
    }
  });

  // node_modules/lodash/_getFuncName.js
  var require_getFuncName = __commonJS({
    "node_modules/lodash/_getFuncName.js"(exports, module) {
      var realNames = require_realNames();
      var objectProto = Object.prototype;
      var hasOwnProperty4 = objectProto.hasOwnProperty;
      function getFuncName(func) {
        var result = func.name + "", array = realNames[result], length = hasOwnProperty4.call(realNames, result) ? array.length : 0;
        while (length--) {
          var data = array[length], otherFunc = data.func;
          if (otherFunc == null || otherFunc == func) {
            return data.name;
          }
        }
        return result;
      }
      module.exports = getFuncName;
    }
  });

  // node_modules/lodash/_LazyWrapper.js
  var require_LazyWrapper = __commonJS({
    "node_modules/lodash/_LazyWrapper.js"(exports, module) {
      var baseCreate = require_baseCreate();
      var baseLodash = require_baseLodash();
      var MAX_ARRAY_LENGTH = 4294967295;
      function LazyWrapper(value) {
        this.__wrapped__ = value;
        this.__actions__ = [];
        this.__dir__ = 1;
        this.__filtered__ = false;
        this.__iteratees__ = [];
        this.__takeCount__ = MAX_ARRAY_LENGTH;
        this.__views__ = [];
      }
      LazyWrapper.prototype = baseCreate(baseLodash.prototype);
      LazyWrapper.prototype.constructor = LazyWrapper;
      module.exports = LazyWrapper;
    }
  });

  // node_modules/lodash/_copyArray.js
  var require_copyArray = __commonJS({
    "node_modules/lodash/_copyArray.js"(exports, module) {
      function copyArray(source, array) {
        var index = -1, length = source.length;
        array || (array = Array(length));
        while (++index < length) {
          array[index] = source[index];
        }
        return array;
      }
      module.exports = copyArray;
    }
  });

  // node_modules/lodash/_wrapperClone.js
  var require_wrapperClone = __commonJS({
    "node_modules/lodash/_wrapperClone.js"(exports, module) {
      var LazyWrapper = require_LazyWrapper();
      var LodashWrapper = require_LodashWrapper();
      var copyArray = require_copyArray();
      function wrapperClone(wrapper) {
        if (wrapper instanceof LazyWrapper) {
          return wrapper.clone();
        }
        var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
        result.__actions__ = copyArray(wrapper.__actions__);
        result.__index__ = wrapper.__index__;
        result.__values__ = wrapper.__values__;
        return result;
      }
      module.exports = wrapperClone;
    }
  });

  // node_modules/lodash/wrapperLodash.js
  var require_wrapperLodash = __commonJS({
    "node_modules/lodash/wrapperLodash.js"(exports, module) {
      var LazyWrapper = require_LazyWrapper();
      var LodashWrapper = require_LodashWrapper();
      var baseLodash = require_baseLodash();
      var isArray = require_isArray();
      var isObjectLike = require_isObjectLike();
      var wrapperClone = require_wrapperClone();
      var objectProto = Object.prototype;
      var hasOwnProperty4 = objectProto.hasOwnProperty;
      function lodash(value) {
        if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
          if (value instanceof LodashWrapper) {
            return value;
          }
          if (hasOwnProperty4.call(value, "__wrapped__")) {
            return wrapperClone(value);
          }
        }
        return new LodashWrapper(value);
      }
      lodash.prototype = baseLodash.prototype;
      lodash.prototype.constructor = lodash;
      module.exports = lodash;
    }
  });

  // node_modules/lodash/_isLaziable.js
  var require_isLaziable = __commonJS({
    "node_modules/lodash/_isLaziable.js"(exports, module) {
      var LazyWrapper = require_LazyWrapper();
      var getData = require_getData();
      var getFuncName = require_getFuncName();
      var lodash = require_wrapperLodash();
      function isLaziable(func) {
        var funcName = getFuncName(func), other = lodash[funcName];
        if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
          return false;
        }
        if (func === other) {
          return true;
        }
        var data = getData(other);
        return !!data && func === data[0];
      }
      module.exports = isLaziable;
    }
  });

  // node_modules/lodash/_createFlow.js
  var require_createFlow = __commonJS({
    "node_modules/lodash/_createFlow.js"(exports, module) {
      var LodashWrapper = require_LodashWrapper();
      var flatRest = require_flatRest();
      var getData = require_getData();
      var getFuncName = require_getFuncName();
      var isArray = require_isArray();
      var isLaziable = require_isLaziable();
      var FUNC_ERROR_TEXT = "Expected a function";
      var WRAP_CURRY_FLAG = 8;
      var WRAP_PARTIAL_FLAG = 32;
      var WRAP_ARY_FLAG = 128;
      var WRAP_REARG_FLAG = 256;
      function createFlow(fromRight) {
        return flatRest(function(funcs) {
          var length = funcs.length, index = length, prereq = LodashWrapper.prototype.thru;
          if (fromRight) {
            funcs.reverse();
          }
          while (index--) {
            var func = funcs[index];
            if (typeof func != "function") {
              throw new TypeError(FUNC_ERROR_TEXT);
            }
            if (prereq && !wrapper && getFuncName(func) == "wrapper") {
              var wrapper = new LodashWrapper([], true);
            }
          }
          index = wrapper ? index : length;
          while (++index < length) {
            func = funcs[index];
            var funcName = getFuncName(func), data = funcName == "wrapper" ? getData(func) : void 0;
            if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
              wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
            } else {
              wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
            }
          }
          return function() {
            var args = arguments, value = args[0];
            if (wrapper && args.length == 1 && isArray(value)) {
              return wrapper.plant(value).value();
            }
            var index2 = 0, result = length ? funcs[index2].apply(this, args) : value;
            while (++index2 < length) {
              result = funcs[index2].call(this, result);
            }
            return result;
          };
        });
      }
      module.exports = createFlow;
    }
  });

  // node_modules/lodash/flow.js
  var require_flow = __commonJS({
    "node_modules/lodash/flow.js"(exports, module) {
      var createFlow = require_createFlow();
      var flow2 = createFlow();
      module.exports = flow2;
    }
  });

  // node_modules/lodash/_baseClamp.js
  var require_baseClamp = __commonJS({
    "node_modules/lodash/_baseClamp.js"(exports, module) {
      function baseClamp(number, lower, upper) {
        if (number === number) {
          if (upper !== void 0) {
            number = number <= upper ? number : upper;
          }
          if (lower !== void 0) {
            number = number >= lower ? number : lower;
          }
        }
        return number;
      }
      module.exports = baseClamp;
    }
  });

  // node_modules/lodash/clamp.js
  var require_clamp = __commonJS({
    "node_modules/lodash/clamp.js"(exports, module) {
      var baseClamp = require_baseClamp();
      var toNumber = require_toNumber();
      function clamp2(number, lower, upper) {
        if (upper === void 0) {
          upper = lower;
          lower = void 0;
        }
        if (upper !== void 0) {
          upper = toNumber(upper);
          upper = upper === upper ? upper : 0;
        }
        if (lower !== void 0) {
          lower = toNumber(lower);
          lower = lower === lower ? lower : 0;
        }
        return baseClamp(toNumber(number), lower, upper);
      }
      module.exports = clamp2;
    }
  });

  // packages/systems/ix2/engine/logic/IX2VanillaEvents.ts
  var import_flow, import_get, import_clamp, import_shared5, MOUSE_CLICK, MOUSE_SECOND_CLICK, MOUSE_DOWN, MOUSE_UP, MOUSE_OVER, MOUSE_OUT, DROPDOWN_CLOSE, DROPDOWN_OPEN, SLIDER_ACTIVE, SLIDER_INACTIVE, TAB_ACTIVE, TAB_INACTIVE, NAVBAR_CLOSE, NAVBAR_OPEN, MOUSE_MOVE, PAGE_SCROLL_DOWN, SCROLL_INTO_VIEW, SCROLL_OUT_OF_VIEW, PAGE_SCROLL_UP, SCROLLING_IN_VIEW, PAGE_FINISH, ECOMMERCE_CART_CLOSE, ECOMMERCE_CART_OPEN, PAGE_START, PAGE_SCROLL, COMPONENT_ACTIVE, COMPONENT_INACTIVE, COLON_DELIMITER3, getNamespacedParameterId2, composableFilter, isElement, containsElement, isOrContainsElement, getAutoStopEvent, hasAutoStopEvent, actionGroupCreator, withFilter, baseActionGroupOptions, baseActivityActionGroupOptions, SCROLL_EVENT_TYPES, MOUSE_OVER_OUT_TYPES, baseScrollActionGroupOptions, AUTO_STOP_DISABLED_EVENTS, getDocumentState, areBoxesIntersecting, isElementHovered, isElementVisible, whenComponentActiveChange, whenElementHoverChange, whenElementVisibiltyChange, whenScrollDirectionChange, pointIntersects, whenPageLoadFinish, whenPageLoadStart, whenClickCountChange, getComponentActiveOptions, getComponentInactiveOptions, scrollIntoOutOfViewOptions, MOUSE_OUT_ROUND_THRESHOLD, IX2VanillaEvents_default;
  var init_IX2VanillaEvents = __esm({
    "packages/systems/ix2/engine/logic/IX2VanillaEvents.ts"() {
      "use strict";
      import_flow = __toESM(require_flow());
      import_get = __toESM(require_get());
      import_clamp = __toESM(require_clamp());
      init_constants();
      init_IX2VanillaEngine();
      init_IX2EngineActions();
      import_shared5 = __toESM(require_shared2());
      ({
        MOUSE_CLICK,
        MOUSE_SECOND_CLICK,
        MOUSE_DOWN,
        MOUSE_UP,
        MOUSE_OVER,
        MOUSE_OUT,
        DROPDOWN_CLOSE,
        DROPDOWN_OPEN,
        SLIDER_ACTIVE,
        SLIDER_INACTIVE,
        TAB_ACTIVE,
        TAB_INACTIVE,
        NAVBAR_CLOSE,
        NAVBAR_OPEN,
        MOUSE_MOVE,
        PAGE_SCROLL_DOWN,
        SCROLL_INTO_VIEW,
        SCROLL_OUT_OF_VIEW,
        PAGE_SCROLL_UP,
        SCROLLING_IN_VIEW,
        PAGE_FINISH,
        ECOMMERCE_CART_CLOSE,
        ECOMMERCE_CART_OPEN,
        PAGE_START,
        PAGE_SCROLL
      } = EventTypeConsts);
      COMPONENT_ACTIVE = "COMPONENT_ACTIVE";
      COMPONENT_INACTIVE = "COMPONENT_INACTIVE";
      ({ COLON_DELIMITER: COLON_DELIMITER3 } = IX2EngineConstants_exports);
      ({ getNamespacedParameterId: getNamespacedParameterId2 } = import_shared5.IX2VanillaUtils);
      composableFilter = (predicate) => (options) => {
        if (typeof options === "object" && predicate(options)) {
          return true;
        }
        return options;
      };
      isElement = composableFilter(({ element, nativeEvent }) => {
        return element === nativeEvent.target;
      });
      containsElement = composableFilter(({ element, nativeEvent }) => {
        return element.contains(nativeEvent.target);
      });
      isOrContainsElement = (0, import_flow.default)([isElement, containsElement]);
      getAutoStopEvent = (store, autoStopEventId) => {
        if (autoStopEventId) {
          const { ixData: ixData2 } = store.getState();
          const { events } = ixData2;
          const eventToStop = events[autoStopEventId];
          if (eventToStop && !AUTO_STOP_DISABLED_EVENTS[eventToStop.eventTypeId]) {
            return eventToStop;
          }
        }
        return null;
      };
      hasAutoStopEvent = ({ store, event }) => {
        const { action: eventAction } = event;
        const { autoStopEventId } = eventAction.config;
        return Boolean(getAutoStopEvent(store, autoStopEventId));
      };
      actionGroupCreator = ({ store, event, element, eventStateKey }, state) => {
        const { action: eventAction, id: eventId } = event;
        const { actionListId, autoStopEventId } = eventAction.config;
        const eventToStop = getAutoStopEvent(store, autoStopEventId);
        if (eventToStop) {
          stopActionGroup({
            store,
            eventId: autoStopEventId,
            eventTarget: element,
            eventStateKey: autoStopEventId + COLON_DELIMITER3 + eventStateKey.split(COLON_DELIMITER3)[1],
            actionListId: (0, import_get.default)(eventToStop, "action.config.actionListId")
          });
        }
        stopActionGroup({
          store,
          eventId,
          eventTarget: element,
          eventStateKey,
          actionListId
        });
        startActionGroup({
          store,
          eventId,
          eventTarget: element,
          eventStateKey,
          actionListId
        });
        return state;
      };
      withFilter = (filter, handler) => (options, state) => filter(options, state) === true ? handler(options, state) : state;
      baseActionGroupOptions = {
        handler: withFilter(isOrContainsElement, actionGroupCreator)
      };
      baseActivityActionGroupOptions = {
        ...baseActionGroupOptions,
        types: [COMPONENT_ACTIVE, COMPONENT_INACTIVE].join(" ")
      };
      SCROLL_EVENT_TYPES = [
        { target: window, types: "resize orientationchange", throttle: true },
        {
          target: document,
          types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
          throttle: true
        }
      ];
      MOUSE_OVER_OUT_TYPES = "mouseover mouseout";
      baseScrollActionGroupOptions = {
        types: SCROLL_EVENT_TYPES
      };
      AUTO_STOP_DISABLED_EVENTS = {
        PAGE_START,
        PAGE_FINISH
      };
      getDocumentState = (() => {
        const supportOffset = window.pageXOffset !== void 0;
        const isCSS1Compat = document.compatMode === "CSS1Compat";
        const rootElement = isCSS1Compat ? document.documentElement : document.body;
        return () => ({
          scrollLeft: supportOffset ? window.pageXOffset : rootElement.scrollLeft,
          scrollTop: supportOffset ? window.pageYOffset : rootElement.scrollTop,
          // required to remove elasticity in Safari scrolling.
          stiffScrollTop: (0, import_clamp.default)(
            supportOffset ? window.pageYOffset : rootElement.scrollTop,
            0,
            rootElement.scrollHeight - window.innerHeight
          ),
          scrollWidth: rootElement.scrollWidth,
          scrollHeight: rootElement.scrollHeight,
          clientWidth: rootElement.clientWidth,
          clientHeight: rootElement.clientHeight,
          innerWidth: window.innerWidth,
          innerHeight: window.innerHeight
        });
      })();
      areBoxesIntersecting = (a, b) => !(a.left > b.right || a.right < b.left || a.top > b.bottom || a.bottom < b.top);
      isElementHovered = ({ element, nativeEvent }) => {
        const { type, target, relatedTarget } = nativeEvent;
        const containsTarget = element.contains(target);
        if (type === "mouseover" && containsTarget) {
          return true;
        }
        const containsRelated = element.contains(relatedTarget);
        if (type === "mouseout" && containsTarget && containsRelated) {
          return true;
        }
        return false;
      };
      isElementVisible = (options) => {
        const {
          element,
          event: { config }
        } = options;
        const { clientWidth, clientHeight } = getDocumentState();
        const scrollOffsetValue = config.scrollOffsetValue;
        const scrollOffsetUnit = config.scrollOffsetUnit;
        const isPX = scrollOffsetUnit === "PX";
        const offsetPadding = isPX ? scrollOffsetValue : clientHeight * (scrollOffsetValue || 0) / 100;
        return areBoxesIntersecting(element.getBoundingClientRect(), {
          left: 0,
          top: offsetPadding,
          right: clientWidth,
          bottom: clientHeight - offsetPadding
        });
      };
      whenComponentActiveChange = // @ts-expect-error - TS7006 - Parameter 'handler' implicitly has an 'any' type.
      (handler) => (options, oldState) => {
        const { type } = options.nativeEvent;
        const isActive = [COMPONENT_ACTIVE, COMPONENT_INACTIVE].indexOf(type) !== -1 ? type === COMPONENT_ACTIVE : oldState.isActive;
        const newState = {
          ...oldState,
          isActive
        };
        if (!oldState || newState.isActive !== oldState.isActive) {
          return handler(options, newState) || newState;
        }
        return newState;
      };
      whenElementHoverChange = (handler) => (options, oldState) => {
        const newState = {
          elementHovered: isElementHovered(options)
        };
        if (oldState ? newState.elementHovered !== oldState.elementHovered : newState.elementHovered) {
          return handler(options, newState) || newState;
        }
        return newState;
      };
      whenElementVisibiltyChange = (handler) => (options, oldState) => {
        const newState = {
          ...oldState,
          elementVisible: isElementVisible(options)
        };
        if (oldState ? newState.elementVisible !== oldState.elementVisible : newState.elementVisible) {
          return handler(options, newState) || newState;
        }
        return newState;
      };
      whenScrollDirectionChange = // @ts-expect-error - TS7006 - Parameter 'handler' implicitly has an 'any' type.
      (handler) => (options, oldState = {}) => {
        const {
          stiffScrollTop: scrollTop,
          scrollHeight,
          innerHeight
        } = getDocumentState();
        const {
          event: { config, eventTypeId }
        } = options;
        const { scrollOffsetValue, scrollOffsetUnit } = config;
        const isPX = scrollOffsetUnit === "PX";
        const scrollHeightBounds = scrollHeight - innerHeight;
        const percentTop = Number((scrollTop / scrollHeightBounds).toFixed(2));
        if (oldState && oldState.percentTop === percentTop) {
          return oldState;
        }
        const scrollTopPadding = (isPX ? scrollOffsetValue : innerHeight * (scrollOffsetValue || 0) / 100) / scrollHeightBounds;
        let scrollingDown;
        let scrollDirectionChanged;
        let anchorTop = 0;
        if (oldState) {
          scrollingDown = percentTop > oldState.percentTop;
          scrollDirectionChanged = oldState.scrollingDown !== scrollingDown;
          anchorTop = scrollDirectionChanged ? percentTop : oldState.anchorTop;
        }
        const inBounds = eventTypeId === PAGE_SCROLL_DOWN ? percentTop >= anchorTop + scrollTopPadding : percentTop <= anchorTop - scrollTopPadding;
        const newState = {
          ...oldState,
          percentTop,
          inBounds,
          anchorTop,
          scrollingDown
        };
        if (oldState && inBounds && // @ts-expect-error - TS2339 - Property 'inBounds' does not exist on type '{}'.
        (scrollDirectionChanged || newState.inBounds !== oldState.inBounds)) {
          return handler(options, newState) || newState;
        }
        return newState;
      };
      pointIntersects = (point, rect) => point.left > rect.left && point.left < rect.right && point.top > rect.top && point.top < rect.bottom;
      whenPageLoadFinish = (handler) => (options, oldState) => {
        const newState = {
          finished: document.readyState === "complete"
        };
        if (newState.finished && !(oldState && oldState.finshed)) {
          handler(options);
        }
        return newState;
      };
      whenPageLoadStart = (handler) => (options, oldState) => {
        const newState = {
          started: true
        };
        if (!oldState) {
          handler(options);
        }
        return newState;
      };
      whenClickCountChange = (handler) => (options, oldState = { clickCount: 0 }) => {
        const newState = {
          clickCount: oldState.clickCount % 2 + 1
        };
        if (newState.clickCount !== oldState.clickCount) {
          return handler(options, newState) || newState;
        }
        return newState;
      };
      getComponentActiveOptions = (allowNestedChildrenEvents = true) => ({
        ...baseActivityActionGroupOptions,
        handler: withFilter(
          allowNestedChildrenEvents ? isOrContainsElement : isElement,
          // @ts-expect-error - TS7006 - Parameter 'options' implicitly has an 'any' type. | TS7006 - Parameter 'state' implicitly has an 'any' type.
          whenComponentActiveChange((options, state) => {
            return state.isActive ? baseActionGroupOptions.handler(options, state) : state;
          })
        )
      });
      getComponentInactiveOptions = (allowNestedChildrenEvents = true) => ({
        ...baseActivityActionGroupOptions,
        handler: withFilter(
          allowNestedChildrenEvents ? isOrContainsElement : isElement,
          // @ts-expect-error - TS7006 - Parameter 'options' implicitly has an 'any' type. | TS7006 - Parameter 'state' implicitly has an 'any' type.
          whenComponentActiveChange((options, state) => {
            return !state.isActive ? baseActionGroupOptions.handler(options, state) : state;
          })
        )
      });
      scrollIntoOutOfViewOptions = {
        ...baseScrollActionGroupOptions,
        handler: whenElementVisibiltyChange((options, state) => {
          const { elementVisible } = state;
          const { event, store } = options;
          const { ixData: ixData2 } = store.getState();
          const { events } = ixData2;
          if (!events[event.action.config.autoStopEventId] && state.triggered) {
            return state;
          }
          if (event.eventTypeId === SCROLL_INTO_VIEW === elementVisible) {
            actionGroupCreator(options);
            return {
              ...state,
              triggered: true
            };
          } else {
            return state;
          }
        })
      };
      MOUSE_OUT_ROUND_THRESHOLD = 0.05;
      IX2VanillaEvents_default = {
        [SLIDER_ACTIVE]: getComponentActiveOptions(),
        [SLIDER_INACTIVE]: getComponentInactiveOptions(),
        [DROPDOWN_OPEN]: getComponentActiveOptions(),
        [DROPDOWN_CLOSE]: getComponentInactiveOptions(),
        // navbar elements may contain nested components in the menu. To prevent activity misfires, only listed for activity
        // events where the target is the navbar element, and ignore children that dispatch activitiy events.
        [NAVBAR_OPEN]: getComponentActiveOptions(false),
        [NAVBAR_CLOSE]: getComponentInactiveOptions(false),
        [TAB_ACTIVE]: getComponentActiveOptions(),
        [TAB_INACTIVE]: getComponentInactiveOptions(),
        [ECOMMERCE_CART_OPEN]: {
          types: "ecommerce-cart-open",
          handler: withFilter(isOrContainsElement, actionGroupCreator)
        },
        [ECOMMERCE_CART_CLOSE]: {
          types: "ecommerce-cart-close",
          handler: withFilter(isOrContainsElement, actionGroupCreator)
        },
        [MOUSE_CLICK]: {
          types: "click",
          handler: withFilter(
            isOrContainsElement,
            whenClickCountChange((options, { clickCount }) => {
              if (hasAutoStopEvent(options)) {
                clickCount === 1 && actionGroupCreator(options);
              } else {
                actionGroupCreator(options);
              }
            })
          )
        },
        [MOUSE_SECOND_CLICK]: {
          types: "click",
          handler: withFilter(
            isOrContainsElement,
            whenClickCountChange((options, { clickCount }) => {
              if (clickCount === 2) {
                actionGroupCreator(options);
              }
            })
          )
        },
        [MOUSE_DOWN]: {
          ...baseActionGroupOptions,
          types: "mousedown"
        },
        [MOUSE_UP]: {
          ...baseActionGroupOptions,
          types: "mouseup"
        },
        [MOUSE_OVER]: {
          types: MOUSE_OVER_OUT_TYPES,
          handler: withFilter(
            isOrContainsElement,
            whenElementHoverChange((options, state) => {
              if (state.elementHovered) {
                actionGroupCreator(options);
              }
            })
          )
        },
        [MOUSE_OUT]: {
          types: MOUSE_OVER_OUT_TYPES,
          handler: withFilter(
            isOrContainsElement,
            whenElementHoverChange((options, state) => {
              if (!state.elementHovered) {
                actionGroupCreator(options);
              }
            })
          )
        },
        [MOUSE_MOVE]: {
          types: "mousemove mouseout scroll",
          handler: ({ store, element, eventConfig, nativeEvent, eventStateKey }, state = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }) => {
            const {
              basedOn,
              selectedAxis,
              continuousParameterGroupId,
              reverse,
              restingState = 0
            } = eventConfig;
            const {
              clientX = state.clientX,
              clientY = state.clientY,
              pageX = state.pageX,
              pageY = state.pageY
            } = nativeEvent;
            const isXAxis = selectedAxis === "X_AXIS";
            const isMouseOut = nativeEvent.type === "mouseout";
            let value = restingState / 100;
            let namespacedParameterId = continuousParameterGroupId;
            let elementHovered = false;
            switch (basedOn) {
              case EventBasedOn.VIEWPORT: {
                value = isXAxis ? Math.min(clientX, window.innerWidth) / window.innerWidth : Math.min(clientY, window.innerHeight) / window.innerHeight;
                break;
              }
              case EventBasedOn.PAGE: {
                const { scrollLeft, scrollTop, scrollWidth, scrollHeight } = getDocumentState();
                value = isXAxis ? Math.min(scrollLeft + pageX, scrollWidth) / scrollWidth : Math.min(scrollTop + pageY, scrollHeight) / scrollHeight;
                break;
              }
              case EventBasedOn.ELEMENT:
              default: {
                namespacedParameterId = getNamespacedParameterId2(
                  eventStateKey,
                  continuousParameterGroupId
                );
                const isMouseEvent = nativeEvent.type.indexOf("mouse") === 0;
                if (isMouseEvent && isOrContainsElement({ element, nativeEvent }) !== true) {
                  break;
                }
                const rect = element.getBoundingClientRect();
                const { left, top, width, height } = rect;
                if (!isMouseEvent && !pointIntersects({ left: clientX, top: clientY }, rect)) {
                  break;
                }
                elementHovered = true;
                value = isXAxis ? (clientX - left) / width : (clientY - top) / height;
                break;
              }
            }
            if (isMouseOut && (value > 1 - MOUSE_OUT_ROUND_THRESHOLD || value < MOUSE_OUT_ROUND_THRESHOLD)) {
              value = Math.round(value);
            }
            if (basedOn !== EventBasedOn.ELEMENT || elementHovered || // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            elementHovered !== state.elementHovered) {
              value = reverse ? 1 - value : value;
              store.dispatch(parameterChanged(namespacedParameterId, value));
            }
            return {
              elementHovered,
              clientX,
              clientY,
              pageX,
              pageY
            };
          }
        },
        [PAGE_SCROLL]: {
          types: SCROLL_EVENT_TYPES,
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          handler: ({ store, eventConfig }) => {
            const { continuousParameterGroupId, reverse } = eventConfig;
            const { scrollTop, scrollHeight, clientHeight } = getDocumentState();
            let value = scrollTop / (scrollHeight - clientHeight);
            value = reverse ? 1 - value : value;
            store.dispatch(parameterChanged(continuousParameterGroupId, value));
          }
        },
        [SCROLLING_IN_VIEW]: {
          types: SCROLL_EVENT_TYPES,
          handler: ({ element, store, eventConfig, eventStateKey }, state = { scrollPercent: 0 }) => {
            const {
              scrollLeft,
              scrollTop,
              scrollWidth,
              scrollHeight,
              clientHeight: visibleHeight
            } = getDocumentState();
            const {
              basedOn,
              selectedAxis,
              continuousParameterGroupId,
              startsEntering,
              startsExiting,
              addEndOffset,
              addStartOffset,
              addOffsetValue = 0,
              endOffsetValue = 0
            } = eventConfig;
            const isXAxis = selectedAxis === "X_AXIS";
            if (basedOn === EventBasedOn.VIEWPORT) {
              const value = isXAxis ? scrollLeft / scrollWidth : scrollTop / scrollHeight;
              if (value !== state.scrollPercent) {
                store.dispatch(parameterChanged(continuousParameterGroupId, value));
              }
              return {
                scrollPercent: value
              };
            } else {
              const namespacedParameterId = getNamespacedParameterId2(
                eventStateKey,
                continuousParameterGroupId
              );
              const elementRect = element.getBoundingClientRect();
              let offsetStartPerc = (addStartOffset ? addOffsetValue : 0) / 100;
              let offsetEndPerc = (addEndOffset ? endOffsetValue : 0) / 100;
              offsetStartPerc = startsEntering ? offsetStartPerc : 1 - offsetStartPerc;
              offsetEndPerc = startsExiting ? offsetEndPerc : 1 - offsetEndPerc;
              const offsetElementTop = elementRect.top + Math.min(elementRect.height * offsetStartPerc, visibleHeight);
              const offsetElementBottom = elementRect.top + elementRect.height * offsetEndPerc;
              const offsetHeight = offsetElementBottom - offsetElementTop;
              const fixedScrollHeight = Math.min(
                visibleHeight + offsetHeight,
                scrollHeight
              );
              const fixedScrollTop = Math.min(
                Math.max(0, visibleHeight - offsetElementTop),
                fixedScrollHeight
              );
              const fixedScrollPerc = fixedScrollTop / fixedScrollHeight;
              if (fixedScrollPerc !== state.scrollPercent) {
                store.dispatch(
                  parameterChanged(namespacedParameterId, fixedScrollPerc)
                );
              }
              return {
                scrollPercent: fixedScrollPerc
              };
            }
          }
        },
        [SCROLL_INTO_VIEW]: scrollIntoOutOfViewOptions,
        [SCROLL_OUT_OF_VIEW]: scrollIntoOutOfViewOptions,
        [PAGE_SCROLL_DOWN]: {
          ...baseScrollActionGroupOptions,
          // @ts-expect-error - TS7006 - Parameter 'options' implicitly has an 'any' type. | TS7006 - Parameter 'state' implicitly has an 'any' type.
          handler: whenScrollDirectionChange((options, state) => {
            if (state.scrollingDown) {
              actionGroupCreator(options);
            }
          })
        },
        [PAGE_SCROLL_UP]: {
          ...baseScrollActionGroupOptions,
          // @ts-expect-error - TS7006 - Parameter 'options' implicitly has an 'any' type. | TS7006 - Parameter 'state' implicitly has an 'any' type.
          handler: whenScrollDirectionChange((options, state) => {
            if (!state.scrollingDown) {
              actionGroupCreator(options);
            }
          })
        },
        [PAGE_FINISH]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: withFilter(isElement, whenPageLoadFinish(actionGroupCreator))
        },
        [PAGE_START]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: withFilter(isElement, whenPageLoadStart(actionGroupCreator))
        }
      };
    }
  });

  // packages/systems/ix2/engine/logic/IX2VanillaEngine.ts
  var IX2VanillaEngine_exports = {};
  __export(IX2VanillaEngine_exports, {
    observeRequests: () => observeRequests,
    startActionGroup: () => startActionGroup,
    startEngine: () => startEngine,
    stopActionGroup: () => stopActionGroup,
    stopAllActionGroups: () => stopAllActionGroups,
    stopEngine: () => stopEngine
  });
  function observeRequests(store) {
    observeStore2({
      store,
      // @ts-expect-error - TS7031 - Binding element 'ixRequest' implicitly has an 'any' type.
      select: ({ ixRequest: ixRequest2 }) => ixRequest2.preview,
      onChange: handlePreviewRequest
    });
    observeStore2({
      store,
      // @ts-expect-error - TS7031 - Binding element 'ixRequest' implicitly has an 'any' type.
      select: ({ ixRequest: ixRequest2 }) => ixRequest2.playback,
      onChange: handlePlaybackRequest
    });
    observeStore2({
      store,
      // @ts-expect-error - TS7031 - Binding element 'ixRequest' implicitly has an 'any' type.
      select: ({ ixRequest: ixRequest2 }) => ixRequest2.stop,
      onChange: handleStopRequest
    });
    observeStore2({
      store,
      // @ts-expect-error - TS7031 - Binding element 'ixRequest' implicitly has an 'any' type.
      select: ({ ixRequest: ixRequest2 }) => ixRequest2.clear,
      onChange: handleClearRequest
    });
  }
  function observeMediaQueryChange(store) {
    observeStore2({
      store,
      // @ts-expect-error - TS7031 - Binding element 'ixSession' implicitly has an 'any' type.
      select: ({ ixSession: ixSession2 }) => ixSession2.mediaQueryKey,
      onChange: () => {
        stopEngine(store);
        clearAllStyles2({ store, elementApi: IX2BrowserApi_exports });
        startEngine({ store, allowEvents: true });
        dispatchPageUpdateEvent();
      }
    });
  }
  function observeOneRenderTick(store, onTick) {
    const unsubscribe = observeStore2({
      store,
      // @ts-expect-error - TS7031 - Binding element 'ixSession' implicitly has an 'any' type.
      select: ({ ixSession: ixSession2 }) => ixSession2.tick,
      // @ts-expect-error - TS7006 - Parameter 'tick' implicitly has an 'any' type.
      onChange: (tick) => {
        onTick(tick);
        unsubscribe();
      }
    });
  }
  function handlePreviewRequest({ rawData, defer }, store) {
    const start = () => {
      startEngine({ store, rawData, allowEvents: true });
      dispatchPageUpdateEvent();
    };
    defer ? setTimeout(start, 0) : start();
  }
  function dispatchPageUpdateEvent() {
    document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
  }
  function handlePlaybackRequest(playback, store) {
    const {
      actionTypeId,
      actionListId,
      actionItemId,
      eventId,
      allowEvents,
      immediate,
      testManual,
      verbose = true
    } = playback;
    let { rawData } = playback;
    if (actionListId && actionItemId && rawData && immediate) {
      const actionList = rawData.actionLists[actionListId];
      if (actionList) {
        rawData = reduceListToGroup2({
          actionList,
          actionItemId,
          rawData
        });
      }
    }
    startEngine({ store, rawData, allowEvents, testManual });
    if (actionListId && actionTypeId === ActionTypeConsts.GENERAL_START_ACTION || isQuickEffect(actionTypeId)) {
      stopActionGroup({ store, actionListId });
      renderInitialGroup({ store, actionListId, eventId });
      const started = startActionGroup({
        store,
        eventId,
        actionListId,
        immediate,
        verbose
      });
      if (verbose && started) {
        store.dispatch(
          actionListPlaybackChanged({ actionListId, isPlaying: !immediate })
        );
      }
    }
  }
  function handleStopRequest({ actionListId }, store) {
    if (actionListId) {
      stopActionGroup({ store, actionListId });
    } else {
      stopAllActionGroups({ store });
    }
    stopEngine(store);
  }
  function handleClearRequest(state, store) {
    stopEngine(store);
    clearAllStyles2({ store, elementApi: IX2BrowserApi_exports });
  }
  function startEngine({ store, rawData, allowEvents, testManual }) {
    const { ixSession: ixSession2 } = store.getState();
    if (rawData) {
      store.dispatch(rawDataImported(rawData));
    }
    if (!ixSession2.active) {
      store.dispatch(
        sessionInitialized({
          hasBoundaryNodes: Boolean(document.querySelector(BOUNDARY_SELECTOR2)),
          reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
        })
      );
      if (allowEvents) {
        bindEvents(store);
        addDocumentClass();
        if (store.getState().ixSession.hasDefinedMediaQueries) {
          observeMediaQueryChange(store);
        }
      }
      store.dispatch(sessionStarted());
      startRenderLoop(store, testManual);
    }
  }
  function addDocumentClass() {
    const { documentElement } = document;
    if (documentElement.className.indexOf(W_MOD_IX2) === -1) {
      documentElement.className += ` ${W_MOD_IX2}`;
    }
  }
  function startRenderLoop(store, testManual) {
    const handleFrame = (now) => {
      const { ixSession: ixSession2, ixParameters: ixParameters2 } = store.getState();
      if (ixSession2.active) {
        store.dispatch(animationFrameChanged(now, ixParameters2));
        if (testManual) {
          observeOneRenderTick(store, handleFrame);
        } else {
          requestAnimationFrame(handleFrame);
        }
      }
    };
    handleFrame(window.performance.now());
  }
  function stopEngine(store) {
    const { ixSession: ixSession2 } = store.getState();
    if (ixSession2.active) {
      const { eventListeners } = ixSession2;
      eventListeners.forEach(clearEventListener);
      clearObjectCache2();
      store.dispatch(sessionStopped());
    }
  }
  function clearEventListener({ target, listenerParams }) {
    target.removeEventListener.apply(target, listenerParams);
  }
  function createGroupInstances({
    // @ts-expect-error - TS7031 - Binding element 'store' implicitly has an 'any' type.
    store,
    // @ts-expect-error - TS7031 - Binding element 'eventStateKey' implicitly has an 'any' type.
    eventStateKey,
    // @ts-expect-error - TS7031 - Binding element 'eventTarget' implicitly has an 'any' type.
    eventTarget,
    // @ts-expect-error - TS7031 - Binding element 'eventId' implicitly has an 'any' type.
    eventId,
    // @ts-expect-error - TS7031 - Binding element 'eventConfig' implicitly has an 'any' type.
    eventConfig,
    // @ts-expect-error - TS7031 - Binding element 'actionListId' implicitly has an 'any' type.
    actionListId,
    // @ts-expect-error - TS7031 - Binding element 'parameterGroup' implicitly has an 'any' type.
    parameterGroup,
    // @ts-expect-error - TS7031 - Binding element 'smoothing' implicitly has an 'any' type.
    smoothing,
    // @ts-expect-error - TS7031 - Binding element 'restingValue' implicitly has an 'any' type.
    restingValue
  }) {
    const { ixData: ixData2, ixSession: ixSession2 } = store.getState();
    const { events } = ixData2;
    const event = events[eventId];
    const { eventTypeId } = event;
    const targetCache = {};
    const instanceActionGroups = {};
    const instanceConfigs = [];
    const { continuousActionGroups } = parameterGroup;
    let { id: parameterId } = parameterGroup;
    if (shouldNamespaceEventParameter2(eventTypeId, eventConfig)) {
      parameterId = getNamespacedParameterId3(eventStateKey, parameterId);
    }
    const eventElementRoot = ixSession2.hasBoundaryNodes && eventTarget ? getClosestElement(eventTarget, BOUNDARY_SELECTOR2) : null;
    continuousActionGroups.forEach((actionGroup) => {
      const { keyframe, actionItems } = actionGroup;
      actionItems.forEach((actionItem) => {
        const { actionTypeId } = actionItem;
        const { target } = actionItem.config;
        if (!target) {
          return;
        }
        const elementRoot = target.boundaryMode ? eventElementRoot : null;
        const key = stringifyTarget2(target) + COLON_DELIMITER4 + actionTypeId;
        instanceActionGroups[key] = appendActionItem(
          instanceActionGroups[key],
          keyframe,
          actionItem
        );
        if (!targetCache[key]) {
          targetCache[key] = true;
          const { config } = actionItem;
          getAffectedElements2({
            config,
            event,
            eventTarget,
            elementRoot,
            elementApi: IX2BrowserApi_exports
          }).forEach((element) => {
            instanceConfigs.push({ element, key });
          });
        }
      });
    });
    instanceConfigs.forEach(({ element, key }) => {
      const actionGroups = instanceActionGroups[key];
      const actionItem = (0, import_get2.default)(actionGroups, `[0].actionItems[0]`, {});
      const { actionTypeId } = actionItem;
      const pluginInstance = isPluginType2(actionTypeId) ? createPluginInstance2(actionTypeId)(element, actionItem) : null;
      const destination = getDestinationValues2(
        { element, actionItem, elementApi: IX2BrowserApi_exports },
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        pluginInstance
      );
      createInstance({
        store,
        element,
        eventId,
        actionListId,
        actionItem,
        destination,
        continuous: true,
        parameterId,
        actionGroups,
        smoothing,
        restingValue,
        pluginInstance
      });
    });
  }
  function appendActionItem(actionGroups = [], keyframe, actionItem) {
    const newActionGroups = [...actionGroups];
    let groupIndex;
    newActionGroups.some((group, index) => {
      if (group.keyframe === keyframe) {
        groupIndex = index;
        return true;
      }
      return false;
    });
    if (groupIndex == null) {
      groupIndex = newActionGroups.length;
      newActionGroups.push({
        keyframe,
        actionItems: []
      });
    }
    newActionGroups[groupIndex].actionItems.push(actionItem);
    return newActionGroups;
  }
  function bindEvents(store) {
    const { ixData: ixData2 } = store.getState();
    const { eventTypeMap } = ixData2;
    updateViewportWidth(store);
    (0, import_forEach.default)(eventTypeMap, (events, key) => {
      const logic = IX2VanillaEvents_default[key];
      if (!logic) {
        console.warn(`IX2 event type not configured: ${key}`);
        return;
      }
      bindEventType({
        logic,
        store,
        events
      });
    });
    const { ixSession: ixSession2 } = store.getState();
    if (ixSession2.eventListeners.length) {
      bindResizeEvents(store);
    }
  }
  function bindResizeEvents(store) {
    const handleResize = () => {
      updateViewportWidth(store);
    };
    WINDOW_RESIZE_EVENTS.forEach((type) => {
      window.addEventListener(type, handleResize);
      store.dispatch(eventListenerAdded(window, [type, handleResize]));
    });
    handleResize();
  }
  function updateViewportWidth(store) {
    const { ixSession: ixSession2, ixData: ixData2 } = store.getState();
    const width = window.innerWidth;
    if (width !== ixSession2.viewportWidth) {
      const { mediaQueries } = ixData2;
      store.dispatch(viewportWidthChanged({ width, mediaQueries }));
    }
  }
  function bindEventType({ logic, store, events }) {
    injectBehaviorCSSFixes(events);
    const { types: eventTypes, handler: eventHandler } = logic;
    const { ixData: ixData2 } = store.getState();
    const { actionLists } = ixData2;
    const eventTargets = mapFoundValues(events, getAffectedForEvent);
    if (!(0, import_size.default)(eventTargets)) {
      return;
    }
    (0, import_forEach.default)(eventTargets, (elements, key) => {
      const event = events[key];
      const {
        action: eventAction,
        id: eventId,
        mediaQueries = ixData2.mediaQueryKeys
      } = event;
      const { actionListId } = eventAction.config;
      if (!mediaQueriesEqual2(mediaQueries, ixData2.mediaQueryKeys)) {
        store.dispatch(mediaQueriesDefined());
      }
      if (eventAction.actionTypeId === ActionTypeConsts.GENERAL_CONTINUOUS_ACTION) {
        const configs = Array.isArray(event.config) ? event.config : [event.config];
        configs.forEach((eventConfig) => {
          const { continuousParameterGroupId } = eventConfig;
          const paramGroups = (0, import_get2.default)(
            actionLists,
            `${actionListId}.continuousParameterGroups`,
            []
          );
          const parameterGroup = (0, import_find2.default)(
            paramGroups,
            ({ id }) => id === continuousParameterGroupId
          );
          const smoothing = (eventConfig.smoothing || 0) / 100;
          const restingValue = (eventConfig.restingState || 0) / 100;
          if (!parameterGroup) {
            return;
          }
          elements.forEach((eventTarget, index) => {
            const eventStateKey = eventId + COLON_DELIMITER4 + index;
            createGroupInstances({
              store,
              eventStateKey,
              eventTarget,
              eventId,
              eventConfig,
              actionListId,
              parameterGroup,
              smoothing,
              restingValue
            });
          });
        });
      }
      if (eventAction.actionTypeId === ActionTypeConsts.GENERAL_START_ACTION || isQuickEffect(eventAction.actionTypeId)) {
        renderInitialGroup({ store, actionListId, eventId });
      }
    });
    const handleEvent = (nativeEvent) => {
      const { ixSession: ixSession2 } = store.getState();
      forEachEventTarget(eventTargets, (element, eventId, eventStateKey) => {
        const event = events[eventId];
        const oldState = ixSession2.eventState[eventStateKey];
        const { action: eventAction, mediaQueries = ixData2.mediaQueryKeys } = event;
        if (!shouldAllowMediaQuery2(mediaQueries, ixSession2.mediaQueryKey)) {
          return;
        }
        const handleEventWithConfig = (eventConfig = {}) => {
          const newState = eventHandler(
            {
              store,
              element,
              event,
              eventConfig,
              nativeEvent,
              eventStateKey
            },
            oldState
          );
          if (!shallowEqual2(newState, oldState)) {
            store.dispatch(eventStateChanged(eventStateKey, newState));
          }
        };
        if (eventAction.actionTypeId === ActionTypeConsts.GENERAL_CONTINUOUS_ACTION) {
          const configs = Array.isArray(event.config) ? event.config : [event.config];
          configs.forEach(handleEventWithConfig);
        } else {
          handleEventWithConfig();
        }
      });
    };
    const handleEventThrottled = (0, import_throttle.default)(handleEvent, THROTTLED_EVENT_WAIT);
    const addListeners = ({
      target = document,
      // @ts-expect-error - TS7031 - Binding element 'types' implicitly has an 'any' type.
      types,
      // @ts-expect-error - TS7031 - Binding element 'shouldThrottle' implicitly has an 'any' type.
      throttle: shouldThrottle
    }) => {
      types.split(" ").filter(Boolean).forEach((type) => {
        const handlerFunc = shouldThrottle ? handleEventThrottled : handleEvent;
        target.addEventListener(type, handlerFunc);
        store.dispatch(eventListenerAdded(target, [type, handlerFunc]));
      });
    };
    if (Array.isArray(eventTypes)) {
      eventTypes.forEach(addListeners);
    } else if (typeof eventTypes === "string") {
      addListeners(logic);
    }
  }
  function injectBehaviorCSSFixes(events) {
    if (!IS_MOBILE_SAFARI) {
      return;
    }
    const injectedSelectors = {};
    let cssText = "";
    for (const eventId in events) {
      const { eventTypeId, target } = events[eventId];
      const selector = getQuerySelector(target);
      if (injectedSelectors[selector]) {
        continue;
      }
      if (eventTypeId === EventTypeConsts.MOUSE_CLICK || eventTypeId === EventTypeConsts.MOUSE_SECOND_CLICK) {
        injectedSelectors[selector] = true;
        cssText += selector + "{cursor: pointer;touch-action: manipulation;}";
      }
    }
    if (cssText) {
      const style2 = document.createElement("style");
      style2.textContent = cssText;
      document.body.appendChild(style2);
    }
  }
  function renderInitialGroup({ store, actionListId, eventId }) {
    const { ixData: ixData2, ixSession: ixSession2 } = store.getState();
    const { actionLists, events } = ixData2;
    const event = events[eventId];
    const actionList = actionLists[actionListId];
    if (actionList && actionList.useFirstGroupAsInitialState) {
      const initialStateItems = (0, import_get2.default)(
        actionList,
        "actionItemGroups[0].actionItems",
        []
      );
      const mediaQueries = (0, import_get2.default)(event, "mediaQueries", ixData2.mediaQueryKeys);
      if (!shouldAllowMediaQuery2(mediaQueries, ixSession2.mediaQueryKey)) {
        return;
      }
      initialStateItems.forEach((actionItem) => {
        const { config: itemConfig, actionTypeId } = actionItem;
        const config = (
          // When useEventTarget is explicitly true, use event target/targets to query elements
          // However, skip this condition when objectId is defined
          itemConfig?.target?.useEventTarget === true && itemConfig?.target?.objectId == null ? { target: event.target, targets: event.targets } : itemConfig
        );
        const itemElements = getAffectedElements2({ config, event, elementApi: IX2BrowserApi_exports });
        const shouldUsePlugin = isPluginType2(actionTypeId);
        itemElements.forEach((element) => {
          const pluginInstance = shouldUsePlugin ? createPluginInstance2(actionTypeId)(element, actionItem) : null;
          createInstance({
            destination: getDestinationValues2(
              { element, actionItem, elementApi: IX2BrowserApi_exports },
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              pluginInstance
            ),
            immediate: true,
            store,
            element,
            eventId,
            actionItem,
            actionListId,
            pluginInstance
          });
        });
      });
    }
  }
  function stopAllActionGroups({ store }) {
    const { ixInstances: ixInstances2 } = store.getState();
    (0, import_forEach.default)(ixInstances2, (instance) => {
      if (!instance.continuous) {
        const { actionListId, verbose } = instance;
        removeInstance(instance, store);
        if (verbose) {
          store.dispatch(
            actionListPlaybackChanged({ actionListId, isPlaying: false })
          );
        }
      }
    });
  }
  function stopActionGroup({
    // @ts-expect-error - TS7031 - Binding element 'store' implicitly has an 'any' type.
    store,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    eventId,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    eventTarget,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    eventStateKey,
    // @ts-expect-error - TS7031 - Binding element 'actionListId' implicitly has an 'any' type.
    actionListId
  }) {
    const { ixInstances: ixInstances2, ixSession: ixSession2 } = store.getState();
    const eventElementRoot = ixSession2.hasBoundaryNodes && eventTarget ? getClosestElement(eventTarget, BOUNDARY_SELECTOR2) : null;
    (0, import_forEach.default)(ixInstances2, (instance) => {
      const boundaryMode = (0, import_get2.default)(instance, "actionItem.config.target.boundaryMode");
      const validEventKey = eventStateKey ? instance.eventStateKey === eventStateKey : true;
      if (instance.actionListId === actionListId && instance.eventId === eventId && validEventKey) {
        if (eventElementRoot && boundaryMode && !elementContains(eventElementRoot, instance.element)) {
          return;
        }
        removeInstance(instance, store);
        if (instance.verbose) {
          store.dispatch(
            actionListPlaybackChanged({ actionListId, isPlaying: false })
          );
        }
      }
    });
  }
  function startActionGroup({
    // @ts-expect-error - TS7031 - Binding element 'store' implicitly has an 'any' type.
    store,
    // @ts-expect-error - TS7031 - Binding element 'eventId' implicitly has an 'any' type.
    eventId,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    eventTarget,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    eventStateKey,
    // @ts-expect-error - TS7031 - Binding element 'actionListId' implicitly has an 'any' type.
    actionListId,
    groupIndex = 0,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    immediate,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    verbose
  }) {
    const { ixData: ixData2, ixSession: ixSession2 } = store.getState();
    const { events } = ixData2;
    const event = events[eventId] || {};
    const { mediaQueries = ixData2.mediaQueryKeys } = event;
    const actionList = (0, import_get2.default)(ixData2, `actionLists.${actionListId}`, {});
    const { actionItemGroups, useFirstGroupAsInitialState } = actionList;
    if (!actionItemGroups || !actionItemGroups.length) {
      return false;
    }
    if (groupIndex >= actionItemGroups.length && (0, import_get2.default)(event, "config.loop")) {
      groupIndex = 0;
    }
    if (groupIndex === 0 && useFirstGroupAsInitialState) {
      groupIndex++;
    }
    const isFirstGroup = groupIndex === 0 || groupIndex === 1 && useFirstGroupAsInitialState;
    const instanceDelay = isFirstGroup && isQuickEffect(event.action?.actionTypeId) ? event.config.delay : void 0;
    const actionItems = (0, import_get2.default)(actionItemGroups, [groupIndex, "actionItems"], []);
    if (!actionItems.length) {
      return false;
    }
    if (!shouldAllowMediaQuery2(mediaQueries, ixSession2.mediaQueryKey)) {
      return false;
    }
    const eventElementRoot = ixSession2.hasBoundaryNodes && eventTarget ? getClosestElement(eventTarget, BOUNDARY_SELECTOR2) : null;
    const carrierIndex = getMaxDurationItemIndex2(actionItems);
    let groupStartResult = false;
    actionItems.forEach((actionItem, actionIndex) => {
      const { config, actionTypeId } = actionItem;
      const shouldUsePlugin = isPluginType2(actionTypeId);
      const { target } = config;
      if (!target) {
        return;
      }
      const elementRoot = target.boundaryMode ? eventElementRoot : null;
      const elements = getAffectedElements2({
        config,
        event,
        eventTarget,
        elementRoot,
        elementApi: IX2BrowserApi_exports
      });
      elements.forEach((element, elementIndex) => {
        const pluginInstance = shouldUsePlugin ? createPluginInstance2(actionTypeId)(element, actionItem) : null;
        const pluginDuration = shouldUsePlugin ? getPluginDuration2(actionTypeId)(element, actionItem) : null;
        groupStartResult = true;
        const isCarrier = carrierIndex === actionIndex && elementIndex === 0;
        const computedStyle = getComputedStyle3({ element, actionItem });
        const destination = getDestinationValues2(
          { element, actionItem, elementApi: IX2BrowserApi_exports },
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          pluginInstance
        );
        createInstance({
          store,
          element,
          actionItem,
          eventId,
          eventTarget,
          eventStateKey,
          actionListId,
          groupIndex,
          isCarrier,
          computedStyle,
          destination,
          immediate,
          verbose,
          pluginInstance,
          pluginDuration,
          instanceDelay
        });
      });
    });
    return groupStartResult;
  }
  function createInstance(options) {
    const { store, computedStyle, ...rest } = options;
    const {
      element,
      actionItem,
      immediate,
      pluginInstance,
      continuous,
      restingValue,
      eventId
    } = rest;
    const autoStart = !continuous;
    const instanceId = getInstanceId2();
    const { ixElements: ixElements3, ixSession: ixSession2, ixData: ixData2 } = store.getState();
    const elementId = getElementId2(ixElements3, element);
    const { refState: refState2 } = ixElements3[elementId] || {};
    const refType = getRefType(element);
    const skipMotion = (
      // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'any' can't be used to index type '{ readonly TRANSFORM_MOVE: true; readonly TRANSFORM_SCALE: true; readonly TRANSFORM_ROTATE: true; readonly TRANSFORM_SKEW: true; readonly STYLE_SIZE: true; readonly STYLE_FILTER: true; readonly STYLE_FONT_VARIATION: true; }'.
      ixSession2.reducedMotion && ReducedMotionTypes[actionItem.actionTypeId]
    );
    let skipToValue;
    if (skipMotion && continuous) {
      switch (ixData2.events[eventId]?.eventTypeId) {
        case EventTypeConsts.MOUSE_MOVE:
        case EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
          skipToValue = restingValue;
          break;
        default:
          skipToValue = 0.5;
          break;
      }
    }
    const origin = getInstanceOrigin2(
      element,
      refState2,
      computedStyle,
      actionItem,
      IX2BrowserApi_exports,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      pluginInstance
    );
    store.dispatch(
      instanceAdded({
        instanceId,
        elementId,
        origin,
        refType,
        skipMotion,
        skipToValue,
        ...rest
      })
    );
    dispatchCustomEvent(document.body, "ix2-animation-started", instanceId);
    if (immediate) {
      renderImmediateInstance(store, instanceId);
      return;
    }
    observeStore2({
      store,
      // @ts-expect-error - TS7031 - Binding element 'ixInstances' implicitly has an 'any' type.
      select: ({ ixInstances: ixInstances2 }) => ixInstances2[instanceId],
      onChange: handleInstanceChange
    });
    if (autoStart) {
      store.dispatch(instanceStarted(instanceId, ixSession2.tick));
    }
  }
  function removeInstance(instance, store) {
    dispatchCustomEvent(document.body, "ix2-animation-stopping", {
      instanceId: instance.id,
      state: store.getState()
    });
    const { elementId, actionItem } = instance;
    const { ixElements: ixElements3 } = store.getState();
    const { ref, refType } = ixElements3[elementId] || {};
    if (refType === HTML_ELEMENT4) {
      cleanupHTMLElement2(ref, actionItem, IX2BrowserApi_exports);
    }
    store.dispatch(instanceRemoved(instance.id));
  }
  function dispatchCustomEvent(element, eventName, detail) {
    const event = document.createEvent("CustomEvent");
    event.initCustomEvent(eventName, true, true, detail);
    element.dispatchEvent(event);
  }
  function renderImmediateInstance(store, instanceId) {
    const { ixParameters: ixParameters2 } = store.getState();
    store.dispatch(instanceStarted(instanceId, 0));
    store.dispatch(animationFrameChanged(performance.now(), ixParameters2));
    const { ixInstances: ixInstances2 } = store.getState();
    handleInstanceChange(ixInstances2[instanceId], store);
  }
  function handleInstanceChange(instance, store) {
    const {
      active,
      continuous,
      complete,
      elementId,
      actionItem,
      actionTypeId,
      renderType,
      current,
      groupIndex,
      eventId,
      eventTarget,
      eventStateKey,
      actionListId,
      isCarrier,
      styleProp,
      verbose,
      pluginInstance
    } = instance;
    const { ixData: ixData2, ixSession: ixSession2 } = store.getState();
    const { events } = ixData2;
    const event = events[eventId] || {};
    const { mediaQueries = ixData2.mediaQueryKeys } = event;
    if (!shouldAllowMediaQuery2(mediaQueries, ixSession2.mediaQueryKey)) {
      return;
    }
    if (continuous || active || complete) {
      if (current || renderType === RENDER_GENERAL4 && complete) {
        store.dispatch(
          elementStateChanged(elementId, actionTypeId, current, actionItem)
        );
        const { ixElements: ixElements3 } = store.getState();
        const { ref, refType, refState: refState2 } = ixElements3[elementId] || {};
        const actionState = refState2 && refState2[actionTypeId];
        if (refType === HTML_ELEMENT4 || isPluginType2(actionTypeId)) {
          renderHTMLElement2(
            ref,
            refState2,
            actionState,
            eventId,
            actionItem,
            styleProp,
            IX2BrowserApi_exports,
            renderType,
            pluginInstance
          );
        }
      }
      if (complete) {
        if (isCarrier) {
          const started = startActionGroup({
            store,
            eventId,
            eventTarget,
            eventStateKey,
            actionListId,
            groupIndex: groupIndex + 1,
            verbose
          });
          if (verbose && !started) {
            store.dispatch(
              actionListPlaybackChanged({ actionListId, isPlaying: false })
            );
          }
        }
        removeInstance(instance, store);
      }
    }
  }
  var import_find2, import_get2, import_size, import_omitBy, import_isEmpty, import_mapValues, import_forEach, import_throttle, import_shared6, QuickEffectsIdList, isQuickEffect, COLON_DELIMITER4, BOUNDARY_SELECTOR2, HTML_ELEMENT4, RENDER_GENERAL4, W_MOD_IX2, getAffectedElements2, getElementId2, getDestinationValues2, observeStore2, getInstanceId2, renderHTMLElement2, clearAllStyles2, getMaxDurationItemIndex2, getComputedStyle3, getInstanceOrigin2, reduceListToGroup2, shouldNamespaceEventParameter2, getNamespacedParameterId3, shouldAllowMediaQuery2, cleanupHTMLElement2, clearObjectCache2, stringifyTarget2, mediaQueriesEqual2, shallowEqual2, isPluginType2, createPluginInstance2, getPluginDuration2, ua, IS_MOBILE_SAFARI, THROTTLED_EVENT_WAIT, WINDOW_RESIZE_EVENTS, mapFoundValues, forEachEventTarget, getAffectedForEvent;
  var init_IX2VanillaEngine = __esm({
    "packages/systems/ix2/engine/logic/IX2VanillaEngine.ts"() {
      "use strict";
      import_find2 = __toESM(require_find());
      import_get2 = __toESM(require_get());
      import_size = __toESM(require_size());
      import_omitBy = __toESM(require_omitBy());
      import_isEmpty = __toESM(require_isEmpty());
      import_mapValues = __toESM(require_mapValues());
      import_forEach = __toESM(require_forEach());
      import_throttle = __toESM(require_throttle());
      init_constants();
      import_shared6 = __toESM(require_shared2());
      init_IX2EngineActions();
      init_IX2BrowserApi();
      init_IX2VanillaEvents();
      QuickEffectsIdList = Object.keys(QuickEffectIds);
      isQuickEffect = (actionTypeId) => QuickEffectsIdList.includes(actionTypeId);
      ({
        COLON_DELIMITER: COLON_DELIMITER4,
        BOUNDARY_SELECTOR: BOUNDARY_SELECTOR2,
        HTML_ELEMENT: HTML_ELEMENT4,
        RENDER_GENERAL: RENDER_GENERAL4,
        W_MOD_IX: W_MOD_IX2
      } = IX2EngineConstants_exports);
      ({
        getAffectedElements: getAffectedElements2,
        getElementId: getElementId2,
        getDestinationValues: getDestinationValues2,
        observeStore: observeStore2,
        getInstanceId: getInstanceId2,
        renderHTMLElement: renderHTMLElement2,
        clearAllStyles: clearAllStyles2,
        getMaxDurationItemIndex: getMaxDurationItemIndex2,
        getComputedStyle: getComputedStyle3,
        getInstanceOrigin: getInstanceOrigin2,
        reduceListToGroup: reduceListToGroup2,
        shouldNamespaceEventParameter: shouldNamespaceEventParameter2,
        getNamespacedParameterId: getNamespacedParameterId3,
        shouldAllowMediaQuery: shouldAllowMediaQuery2,
        cleanupHTMLElement: cleanupHTMLElement2,
        clearObjectCache: clearObjectCache2,
        stringifyTarget: stringifyTarget2,
        mediaQueriesEqual: mediaQueriesEqual2,
        shallowEqual: shallowEqual2
      } = import_shared6.IX2VanillaUtils);
      ({ isPluginType: isPluginType2, createPluginInstance: createPluginInstance2, getPluginDuration: getPluginDuration2 } = import_shared6.IX2VanillaPlugins);
      ua = navigator.userAgent;
      IS_MOBILE_SAFARI = ua.match(/iPad/i) || ua.match(/iPhone/);
      THROTTLED_EVENT_WAIT = 12;
      WINDOW_RESIZE_EVENTS = ["resize", "orientationchange"];
      mapFoundValues = (object, iteratee) => (0, import_omitBy.default)((0, import_mapValues.default)(object, iteratee), import_isEmpty.default);
      forEachEventTarget = (eventTargets, eventCallback) => {
        (0, import_forEach.default)(eventTargets, (elements, eventId) => {
          elements.forEach((element, index) => {
            const eventStateKey = eventId + COLON_DELIMITER4 + index;
            eventCallback(element, eventId, eventStateKey);
          });
        });
      };
      getAffectedForEvent = (event) => {
        const config = { target: event.target, targets: event.targets };
        return getAffectedElements2({ config, elementApi: IX2BrowserApi_exports });
      };
    }
  });

  // packages/systems/ix2/engine/index.js
  var require_engine = __commonJS({
    "packages/systems/ix2/engine/index.js"(exports) {
      "use strict";
      var _interopRequireWildcard = require_interopRequireWildcard().default;
      var _interopRequireDefault = require_interopRequireDefault().default;
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.actions = void 0;
      exports.destroy = destroy2;
      exports.init = init2;
      exports.setEnv = setEnv;
      exports.store = void 0;
      require_includes3();
      var _redux = require_lib2();
      var _IX2Reducer = _interopRequireDefault((init_IX2Reducer(), __toCommonJS(IX2Reducer_exports)));
      var _IX2VanillaEngine = (init_IX2VanillaEngine(), __toCommonJS(IX2VanillaEngine_exports));
      var actions = _interopRequireWildcard((init_IX2EngineActions(), __toCommonJS(IX2EngineActions_exports)));
      exports.actions = actions;
      var store = exports.store = (0, _redux.createStore)(_IX2Reducer.default);
      function setEnv(env) {
        if (env()) {
          (0, _IX2VanillaEngine.observeRequests)(store);
        }
      }
      function init2(rawData) {
        destroy2();
        (0, _IX2VanillaEngine.startEngine)({
          store,
          rawData,
          allowEvents: true
        });
      }
      function destroy2() {
        (0, _IX2VanillaEngine.stopEngine)(store);
      }
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-ix2.js
  var require_webflow_ix2 = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-ix2.js"(exports, module) {
      "use strict";
      var Webflow = require_webflow_lib();
      var ix2 = require_engine();
      ix2.setEnv(Webflow.env);
      Webflow.define("ix2", module.exports = function() {
        return ix2;
      });
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-links.js
  var require_webflow_links = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-links.js"(exports, module) {
      "use strict";
      var Webflow = require_webflow_lib();
      Webflow.define("links", module.exports = function($2, _) {
        var api = {};
        var $win = $2(window);
        var designer;
        var inApp = Webflow.env();
        var location = window.location;
        var tempLink = document.createElement("a");
        var linkCurrent = "w--current";
        var indexPage = /index\.(html|php)$/;
        var dirList = /\/$/;
        var anchors;
        var slug;
        api.ready = api.design = api.preview = init2;
        function init2() {
          designer = inApp && Webflow.env("design");
          slug = Webflow.env("slug") || location.pathname || "";
          Webflow.scroll.off(scroll);
          anchors = [];
          var links = document.links;
          for (var i = 0; i < links.length; ++i) {
            select(links[i]);
          }
          if (anchors.length) {
            Webflow.scroll.on(scroll);
            scroll();
          }
        }
        function select(link) {
          var href = designer && link.getAttribute("href-disabled") || link.getAttribute("href");
          tempLink.href = href;
          if (href.indexOf(":") >= 0) {
            return;
          }
          var $link = $2(link);
          if (tempLink.hash.length > 1 && tempLink.host + tempLink.pathname === location.host + location.pathname) {
            if (!/^#[a-zA-Z0-9\-\_]+$/.test(tempLink.hash)) {
              return;
            }
            var $section = $2(tempLink.hash);
            $section.length && anchors.push({
              link: $link,
              sec: $section,
              active: false
            });
            return;
          }
          if (href === "#" || href === "") {
            return;
          }
          var match = tempLink.href === location.href || href === slug || indexPage.test(href) && dirList.test(slug);
          setClass($link, linkCurrent, match);
        }
        function scroll() {
          var viewTop = $win.scrollTop();
          var viewHeight = $win.height();
          _.each(anchors, function(anchor) {
            var $link = anchor.link;
            var $section = anchor.sec;
            var top = $section.offset().top;
            var height = $section.outerHeight();
            var offset = viewHeight * 0.5;
            var active = $section.is(":visible") && top + height - offset >= viewTop && top + offset <= viewTop + viewHeight;
            if (anchor.active === active) {
              return;
            }
            anchor.active = active;
            setClass($link, linkCurrent, active);
          });
        }
        function setClass($elem, className, add) {
          var exists = $elem.hasClass(className);
          if (add && exists) {
            return;
          }
          if (!add && !exists) {
            return;
          }
          add ? $elem.addClass(className) : $elem.removeClass(className);
        }
        return api;
      });
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-scroll.js
  var require_webflow_scroll = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-scroll.js"(exports, module) {
      "use strict";
      var Webflow = require_webflow_lib();
      Webflow.define("scroll", module.exports = function($2) {
        var NS_EVENTS = {
          WF_CLICK_EMPTY: "click.wf-empty-link",
          WF_CLICK_SCROLL: "click.wf-scroll"
        };
        var loc = window.location;
        var history = inIframe() ? null : window.history;
        var $win = $2(window);
        var $doc = $2(document);
        var $body = $2(document.body);
        var animate = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(fn) {
          window.setTimeout(fn, 15);
        };
        var rootTag = Webflow.env("editor") ? ".w-editor-body" : "body";
        var headerSelector = "header, " + rootTag + " > .header, " + rootTag + " > .w-nav:not([data-no-scroll])";
        var emptyHrefSelector = 'a[href="#"]';
        var localHrefSelector = 'a[href*="#"]:not(.w-tab-link):not(' + emptyHrefSelector + ")";
        var scrollTargetOutlineCSS = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}';
        var focusStylesEl = document.createElement("style");
        focusStylesEl.appendChild(document.createTextNode(scrollTargetOutlineCSS));
        function inIframe() {
          try {
            return Boolean(window.frameElement);
          } catch (e) {
            return true;
          }
        }
        var validHash = /^#[a-zA-Z0-9][\w:.-]*$/;
        function linksToCurrentPage(link) {
          return validHash.test(link.hash) && link.host + link.pathname === loc.host + loc.pathname;
        }
        const reducedMotionMediaQuery = typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)");
        function reducedMotionEnabled() {
          return document.body.getAttribute("data-wf-scroll-motion") === "none" || reducedMotionMediaQuery.matches;
        }
        function setFocusable($el, action) {
          var initialTabindex;
          switch (action) {
            case "add":
              initialTabindex = $el.attr("tabindex");
              if (initialTabindex) {
                $el.attr("data-wf-tabindex-swap", initialTabindex);
              } else {
                $el.attr("tabindex", "-1");
              }
              break;
            case "remove":
              initialTabindex = $el.attr("data-wf-tabindex-swap");
              if (initialTabindex) {
                $el.attr("tabindex", initialTabindex);
                $el.removeAttr("data-wf-tabindex-swap");
              } else {
                $el.removeAttr("tabindex");
              }
              break;
          }
          $el.toggleClass("wf-force-outline-none", action === "add");
        }
        function validateScroll(evt) {
          var target = evt.currentTarget;
          if (
            // Bail if in Designer
            Webflow.env("design") || // Ignore links being used by jQuery mobile
            window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(target.className)
          ) {
            return;
          }
          var hash = linksToCurrentPage(target) ? target.hash : "";
          if (hash === "")
            return;
          var $el = $2(hash);
          if (!$el.length) {
            return;
          }
          if (evt) {
            evt.preventDefault();
            evt.stopPropagation();
          }
          updateHistory(hash, evt);
          window.setTimeout(function() {
            scroll($el, function setFocus() {
              setFocusable($el, "add");
              $el.get(0).focus({
                preventScroll: true
              });
              setFocusable($el, "remove");
            });
          }, evt ? 0 : 300);
        }
        function updateHistory(hash) {
          if (loc.hash !== hash && history && history.pushState && // Navigation breaks Chrome when the protocol is `file:`.
          !(Webflow.env.chrome && loc.protocol === "file:")) {
            var oldHash = history.state && history.state.hash;
            if (oldHash !== hash) {
              history.pushState({
                hash
              }, "", hash);
            }
          }
        }
        function scroll($targetEl, cb) {
          var start = $win.scrollTop();
          var end = calculateScrollEndPosition($targetEl);
          if (start === end)
            return;
          var duration = calculateScrollDuration($targetEl, start, end);
          var clock = Date.now();
          var step = function() {
            var elapsed = Date.now() - clock;
            window.scroll(0, getY(start, end, elapsed, duration));
            if (elapsed <= duration) {
              animate(step);
            } else if (typeof cb === "function") {
              cb();
            }
          };
          animate(step);
        }
        function calculateScrollEndPosition($targetEl) {
          var $header = $2(headerSelector);
          var offsetY = $header.css("position") === "fixed" ? $header.outerHeight() : 0;
          var end = $targetEl.offset().top - offsetY;
          if ($targetEl.data("scroll") === "mid") {
            var available = $win.height() - offsetY;
            var elHeight = $targetEl.outerHeight();
            if (elHeight < available) {
              end -= Math.round((available - elHeight) / 2);
            }
          }
          return end;
        }
        function calculateScrollDuration($targetEl, start, end) {
          if (reducedMotionEnabled())
            return 0;
          var mult = 1;
          $body.add($targetEl).each(function(_, el) {
            var time = parseFloat(el.getAttribute("data-scroll-time"));
            if (!isNaN(time) && time >= 0) {
              mult = time;
            }
          });
          return (472.143 * Math.log(Math.abs(start - end) + 125) - 2e3) * mult;
        }
        function getY(start, end, elapsed, duration) {
          if (elapsed > duration) {
            return end;
          }
          return start + (end - start) * ease2(elapsed / duration);
        }
        function ease2(t) {
          return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        }
        function ready() {
          var {
            WF_CLICK_EMPTY,
            WF_CLICK_SCROLL
          } = NS_EVENTS;
          $doc.on(WF_CLICK_SCROLL, localHrefSelector, validateScroll);
          $doc.on(WF_CLICK_EMPTY, emptyHrefSelector, function(e) {
            e.preventDefault();
          });
          document.head.insertBefore(focusStylesEl, document.head.firstChild);
        }
        return {
          ready
        };
      });
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-touch.js
  var require_webflow_touch = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-touch.js"(exports, module) {
      "use strict";
      var Webflow = require_webflow_lib();
      Webflow.define("touch", module.exports = function($2) {
        var api = {};
        var getSelection = window.getSelection;
        $2.event.special.tap = {
          bindType: "click",
          delegateType: "click"
        };
        api.init = function(el) {
          el = typeof el === "string" ? $2(el).get(0) : el;
          return el ? new Touch(el) : null;
        };
        function Touch(el) {
          var active = false;
          var useTouch = false;
          var thresholdX = Math.min(Math.round(window.innerWidth * 0.04), 40);
          var startX;
          var lastX;
          el.addEventListener("touchstart", start, false);
          el.addEventListener("touchmove", move, false);
          el.addEventListener("touchend", end, false);
          el.addEventListener("touchcancel", cancel, false);
          el.addEventListener("mousedown", start, false);
          el.addEventListener("mousemove", move, false);
          el.addEventListener("mouseup", end, false);
          el.addEventListener("mouseout", cancel, false);
          function start(evt) {
            var touches = evt.touches;
            if (touches && touches.length > 1) {
              return;
            }
            active = true;
            if (touches) {
              useTouch = true;
              startX = touches[0].clientX;
            } else {
              startX = evt.clientX;
            }
            lastX = startX;
          }
          function move(evt) {
            if (!active) {
              return;
            }
            if (useTouch && evt.type === "mousemove") {
              evt.preventDefault();
              evt.stopPropagation();
              return;
            }
            var touches = evt.touches;
            var x = touches ? touches[0].clientX : evt.clientX;
            var velocityX = x - lastX;
            lastX = x;
            if (Math.abs(velocityX) > thresholdX && getSelection && String(getSelection()) === "") {
              triggerEvent("swipe", evt, {
                direction: velocityX > 0 ? "right" : "left"
              });
              cancel();
            }
          }
          function end(evt) {
            if (!active) {
              return;
            }
            active = false;
            if (useTouch && evt.type === "mouseup") {
              evt.preventDefault();
              evt.stopPropagation();
              useTouch = false;
              return;
            }
          }
          function cancel() {
            active = false;
          }
          function destroy2() {
            el.removeEventListener("touchstart", start, false);
            el.removeEventListener("touchmove", move, false);
            el.removeEventListener("touchend", end, false);
            el.removeEventListener("touchcancel", cancel, false);
            el.removeEventListener("mousedown", start, false);
            el.removeEventListener("mousemove", move, false);
            el.removeEventListener("mouseup", end, false);
            el.removeEventListener("mouseout", cancel, false);
            el = null;
          }
          this.destroy = destroy2;
        }
        function triggerEvent(type, evt, data) {
          var newEvent = $2.Event(type, {
            originalEvent: evt
          });
          $2(evt.target).trigger(newEvent, data);
        }
        api.instance = api.init(document);
        return api;
      });
    }
  });

  // node_modules/custom-event-polyfill/polyfill.js
  var init_polyfill = __esm({
    "node_modules/custom-event-polyfill/polyfill.js"() {
      (function() {
        if (typeof window === "undefined") {
          return;
        }
        try {
          var ce = new window.CustomEvent("test", { cancelable: true });
          ce.preventDefault();
          if (ce.defaultPrevented !== true) {
            throw new Error("Could not prevent default");
          }
        } catch (e) {
          var CustomEvent2 = function(event, params) {
            var evt, origPrevent;
            params = params || {};
            params.bubbles = !!params.bubbles;
            params.cancelable = !!params.cancelable;
            evt = document.createEvent("CustomEvent");
            evt.initCustomEvent(
              event,
              params.bubbles,
              params.cancelable,
              params.detail
            );
            origPrevent = evt.preventDefault;
            evt.preventDefault = function() {
              origPrevent.call(this);
              try {
                Object.defineProperty(this, "defaultPrevented", {
                  get: function() {
                    return true;
                  }
                });
              } catch (e2) {
                this.defaultPrevented = true;
              }
            };
            return evt;
          };
          CustomEvent2.prototype = window.Event.prototype;
          window.CustomEvent = CustomEvent2;
        }
      })();
    }
  });

  // node_modules/core-js/internals/is-array.js
  var require_is_array = __commonJS({
    "node_modules/core-js/internals/is-array.js"(exports, module) {
      var classof = require_classof_raw();
      module.exports = Array.isArray || function isArray(argument) {
        return classof(argument) == "Array";
      };
    }
  });

  // node_modules/core-js/internals/create-property.js
  var require_create_property = __commonJS({
    "node_modules/core-js/internals/create-property.js"(exports, module) {
      "use strict";
      var toPropertyKey = require_to_property_key();
      var definePropertyModule = require_object_define_property();
      var createPropertyDescriptor = require_create_property_descriptor();
      module.exports = function(object, key, value) {
        var propertyKey = toPropertyKey(key);
        if (propertyKey in object)
          definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
        else
          object[propertyKey] = value;
      };
    }
  });

  // node_modules/core-js/internals/to-string-tag-support.js
  var require_to_string_tag_support = __commonJS({
    "node_modules/core-js/internals/to-string-tag-support.js"(exports, module) {
      var wellKnownSymbol = require_well_known_symbol();
      var TO_STRING_TAG = wellKnownSymbol("toStringTag");
      var test2 = {};
      test2[TO_STRING_TAG] = "z";
      module.exports = String(test2) === "[object z]";
    }
  });

  // node_modules/core-js/internals/classof.js
  var require_classof = __commonJS({
    "node_modules/core-js/internals/classof.js"(exports, module) {
      var global2 = require_global();
      var TO_STRING_TAG_SUPPORT = require_to_string_tag_support();
      var isCallable = require_is_callable();
      var classofRaw = require_classof_raw();
      var wellKnownSymbol = require_well_known_symbol();
      var TO_STRING_TAG = wellKnownSymbol("toStringTag");
      var Object2 = global2.Object;
      var CORRECT_ARGUMENTS = classofRaw(function() {
        return arguments;
      }()) == "Arguments";
      var tryGet = function(it, key) {
        try {
          return it[key];
        } catch (error) {
        }
      };
      module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function(it) {
        var O, tag, result;
        return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = Object2(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) == "Object" && isCallable(O.callee) ? "Arguments" : result;
      };
    }
  });

  // node_modules/core-js/internals/is-constructor.js
  var require_is_constructor = __commonJS({
    "node_modules/core-js/internals/is-constructor.js"(exports, module) {
      var uncurryThis = require_function_uncurry_this();
      var fails = require_fails();
      var isCallable = require_is_callable();
      var classof = require_classof();
      var getBuiltIn = require_get_built_in();
      var inspectSource = require_inspect_source();
      var noop2 = function() {
      };
      var empty4 = [];
      var construct = getBuiltIn("Reflect", "construct");
      var constructorRegExp = /^\s*(?:class|function)\b/;
      var exec = uncurryThis(constructorRegExp.exec);
      var INCORRECT_TO_STRING = !constructorRegExp.exec(noop2);
      var isConstructorModern = function(argument) {
        if (!isCallable(argument))
          return false;
        try {
          construct(noop2, empty4, argument);
          return true;
        } catch (error) {
          return false;
        }
      };
      var isConstructorLegacy = function(argument) {
        if (!isCallable(argument))
          return false;
        switch (classof(argument)) {
          case "AsyncFunction":
          case "GeneratorFunction":
          case "AsyncGeneratorFunction":
            return false;
        }
        return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
      };
      module.exports = !construct || fails(function() {
        var called;
        return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function() {
          called = true;
        }) || called;
      }) ? isConstructorLegacy : isConstructorModern;
    }
  });

  // node_modules/core-js/internals/array-species-constructor.js
  var require_array_species_constructor = __commonJS({
    "node_modules/core-js/internals/array-species-constructor.js"(exports, module) {
      var global2 = require_global();
      var isArray = require_is_array();
      var isConstructor = require_is_constructor();
      var isObject2 = require_is_object();
      var wellKnownSymbol = require_well_known_symbol();
      var SPECIES = wellKnownSymbol("species");
      var Array2 = global2.Array;
      module.exports = function(originalArray) {
        var C;
        if (isArray(originalArray)) {
          C = originalArray.constructor;
          if (isConstructor(C) && (C === Array2 || isArray(C.prototype)))
            C = void 0;
          else if (isObject2(C)) {
            C = C[SPECIES];
            if (C === null)
              C = void 0;
          }
        }
        return C === void 0 ? Array2 : C;
      };
    }
  });

  // node_modules/core-js/internals/array-species-create.js
  var require_array_species_create = __commonJS({
    "node_modules/core-js/internals/array-species-create.js"(exports, module) {
      var arraySpeciesConstructor = require_array_species_constructor();
      module.exports = function(originalArray, length) {
        return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
      };
    }
  });

  // node_modules/core-js/internals/array-method-has-species-support.js
  var require_array_method_has_species_support = __commonJS({
    "node_modules/core-js/internals/array-method-has-species-support.js"(exports, module) {
      var fails = require_fails();
      var wellKnownSymbol = require_well_known_symbol();
      var V8_VERSION = require_engine_v8_version();
      var SPECIES = wellKnownSymbol("species");
      module.exports = function(METHOD_NAME) {
        return V8_VERSION >= 51 || !fails(function() {
          var array = [];
          var constructor = array.constructor = {};
          constructor[SPECIES] = function() {
            return { foo: 1 };
          };
          return array[METHOD_NAME](Boolean).foo !== 1;
        });
      };
    }
  });

  // node_modules/core-js/modules/es.array.concat.js
  var require_es_array_concat = __commonJS({
    "node_modules/core-js/modules/es.array.concat.js"() {
      "use strict";
      var $2 = require_export();
      var global2 = require_global();
      var fails = require_fails();
      var isArray = require_is_array();
      var isObject2 = require_is_object();
      var toObject = require_to_object();
      var lengthOfArrayLike = require_length_of_array_like();
      var createProperty = require_create_property();
      var arraySpeciesCreate = require_array_species_create();
      var arrayMethodHasSpeciesSupport = require_array_method_has_species_support();
      var wellKnownSymbol = require_well_known_symbol();
      var V8_VERSION = require_engine_v8_version();
      var IS_CONCAT_SPREADABLE = wellKnownSymbol("isConcatSpreadable");
      var MAX_SAFE_INTEGER = 9007199254740991;
      var MAXIMUM_ALLOWED_INDEX_EXCEEDED = "Maximum allowed index exceeded";
      var TypeError2 = global2.TypeError;
      var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function() {
        var array = [];
        array[IS_CONCAT_SPREADABLE] = false;
        return array.concat()[0] !== array;
      });
      var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("concat");
      var isConcatSpreadable = function(O) {
        if (!isObject2(O))
          return false;
        var spreadable = O[IS_CONCAT_SPREADABLE];
        return spreadable !== void 0 ? !!spreadable : isArray(O);
      };
      var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;
      $2({ target: "Array", proto: true, forced: FORCED }, {
        // eslint-disable-next-line no-unused-vars -- required for `.length`
        concat: function concat5(arg) {
          var O = toObject(this);
          var A = arraySpeciesCreate(O, 0);
          var n = 0;
          var i, k, length, len, E;
          for (i = -1, length = arguments.length; i < length; i++) {
            E = i === -1 ? O : arguments[i];
            if (isConcatSpreadable(E)) {
              len = lengthOfArrayLike(E);
              if (n + len > MAX_SAFE_INTEGER)
                throw TypeError2(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
              for (k = 0; k < len; k++, n++)
                if (k in E)
                  createProperty(A, n, E[k]);
            } else {
              if (n >= MAX_SAFE_INTEGER)
                throw TypeError2(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
              createProperty(A, n++, E);
            }
          }
          A.length = n;
          return A;
        }
      });
    }
  });

  // node_modules/core-js/internals/object-to-string.js
  var require_object_to_string = __commonJS({
    "node_modules/core-js/internals/object-to-string.js"(exports, module) {
      "use strict";
      var TO_STRING_TAG_SUPPORT = require_to_string_tag_support();
      var classof = require_classof();
      module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString4() {
        return "[object " + classof(this) + "]";
      };
    }
  });

  // node_modules/core-js/modules/es.object.to-string.js
  var require_es_object_to_string = __commonJS({
    "node_modules/core-js/modules/es.object.to-string.js"() {
      var TO_STRING_TAG_SUPPORT = require_to_string_tag_support();
      var redefine = require_redefine();
      var toString4 = require_object_to_string();
      if (!TO_STRING_TAG_SUPPORT) {
        redefine(Object.prototype, "toString", toString4, { unsafe: true });
      }
    }
  });

  // node_modules/core-js/internals/function-apply.js
  var require_function_apply = __commonJS({
    "node_modules/core-js/internals/function-apply.js"(exports, module) {
      var FunctionPrototype = Function.prototype;
      var apply = FunctionPrototype.apply;
      var bind2 = FunctionPrototype.bind;
      var call = FunctionPrototype.call;
      module.exports = typeof Reflect == "object" && Reflect.apply || (bind2 ? call.bind(apply) : function() {
        return call.apply(apply, arguments);
      });
    }
  });

  // node_modules/core-js/internals/to-string.js
  var require_to_string = __commonJS({
    "node_modules/core-js/internals/to-string.js"(exports, module) {
      var global2 = require_global();
      var classof = require_classof();
      var String2 = global2.String;
      module.exports = function(argument) {
        if (classof(argument) === "Symbol")
          throw TypeError("Cannot convert a Symbol value to a string");
        return String2(argument);
      };
    }
  });

  // node_modules/core-js/internals/array-slice.js
  var require_array_slice = __commonJS({
    "node_modules/core-js/internals/array-slice.js"(exports, module) {
      var uncurryThis = require_function_uncurry_this();
      module.exports = uncurryThis([].slice);
    }
  });

  // node_modules/core-js/internals/object-get-own-property-names-external.js
  var require_object_get_own_property_names_external = __commonJS({
    "node_modules/core-js/internals/object-get-own-property-names-external.js"(exports, module) {
      var classof = require_classof_raw();
      var toIndexedObject = require_to_indexed_object();
      var $getOwnPropertyNames = require_object_get_own_property_names().f;
      var arraySlice = require_array_slice();
      var windowNames = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
      var getWindowNames = function(it) {
        try {
          return $getOwnPropertyNames(it);
        } catch (error) {
          return arraySlice(windowNames);
        }
      };
      module.exports.f = function getOwnPropertyNames(it) {
        return windowNames && classof(it) == "Window" ? getWindowNames(it) : $getOwnPropertyNames(toIndexedObject(it));
      };
    }
  });

  // node_modules/core-js/internals/well-known-symbol-wrapped.js
  var require_well_known_symbol_wrapped = __commonJS({
    "node_modules/core-js/internals/well-known-symbol-wrapped.js"(exports) {
      var wellKnownSymbol = require_well_known_symbol();
      exports.f = wellKnownSymbol;
    }
  });

  // node_modules/core-js/internals/path.js
  var require_path = __commonJS({
    "node_modules/core-js/internals/path.js"(exports, module) {
      var global2 = require_global();
      module.exports = global2;
    }
  });

  // node_modules/core-js/internals/define-well-known-symbol.js
  var require_define_well_known_symbol = __commonJS({
    "node_modules/core-js/internals/define-well-known-symbol.js"(exports, module) {
      var path = require_path();
      var hasOwn3 = require_has_own_property();
      var wrappedWellKnownSymbolModule = require_well_known_symbol_wrapped();
      var defineProperty = require_object_define_property().f;
      module.exports = function(NAME) {
        var Symbol2 = path.Symbol || (path.Symbol = {});
        if (!hasOwn3(Symbol2, NAME))
          defineProperty(Symbol2, NAME, {
            value: wrappedWellKnownSymbolModule.f(NAME)
          });
      };
    }
  });

  // node_modules/core-js/internals/set-to-string-tag.js
  var require_set_to_string_tag = __commonJS({
    "node_modules/core-js/internals/set-to-string-tag.js"(exports, module) {
      var defineProperty = require_object_define_property().f;
      var hasOwn3 = require_has_own_property();
      var wellKnownSymbol = require_well_known_symbol();
      var TO_STRING_TAG = wellKnownSymbol("toStringTag");
      module.exports = function(it, TAG, STATIC) {
        if (it && !hasOwn3(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
          defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
        }
      };
    }
  });

  // node_modules/core-js/internals/function-bind-context.js
  var require_function_bind_context = __commonJS({
    "node_modules/core-js/internals/function-bind-context.js"(exports, module) {
      var uncurryThis = require_function_uncurry_this();
      var aCallable = require_a_callable();
      var bind2 = uncurryThis(uncurryThis.bind);
      module.exports = function(fn, that) {
        aCallable(fn);
        return that === void 0 ? fn : bind2 ? bind2(fn, that) : function() {
          return fn.apply(that, arguments);
        };
      };
    }
  });

  // node_modules/core-js/internals/array-iteration.js
  var require_array_iteration = __commonJS({
    "node_modules/core-js/internals/array-iteration.js"(exports, module) {
      var bind2 = require_function_bind_context();
      var uncurryThis = require_function_uncurry_this();
      var IndexedObject = require_indexed_object();
      var toObject = require_to_object();
      var lengthOfArrayLike = require_length_of_array_like();
      var arraySpeciesCreate = require_array_species_create();
      var push = uncurryThis([].push);
      var createMethod = function(TYPE) {
        var IS_MAP = TYPE == 1;
        var IS_FILTER = TYPE == 2;
        var IS_SOME = TYPE == 3;
        var IS_EVERY = TYPE == 4;
        var IS_FIND_INDEX = TYPE == 6;
        var IS_FILTER_REJECT = TYPE == 7;
        var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
        return function($this, callbackfn, that, specificCreate) {
          var O = toObject($this);
          var self2 = IndexedObject(O);
          var boundFunction = bind2(callbackfn, that);
          var length = lengthOfArrayLike(self2);
          var index = 0;
          var create5 = specificCreate || arraySpeciesCreate;
          var target = IS_MAP ? create5($this, length) : IS_FILTER || IS_FILTER_REJECT ? create5($this, 0) : void 0;
          var value, result;
          for (; length > index; index++)
            if (NO_HOLES || index in self2) {
              value = self2[index];
              result = boundFunction(value, index, O);
              if (TYPE) {
                if (IS_MAP)
                  target[index] = result;
                else if (result)
                  switch (TYPE) {
                    case 3:
                      return true;
                    case 5:
                      return value;
                    case 6:
                      return index;
                    case 2:
                      push(target, value);
                  }
                else
                  switch (TYPE) {
                    case 4:
                      return false;
                    case 7:
                      push(target, value);
                  }
              }
            }
          return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
        };
      };
      module.exports = {
        // `Array.prototype.forEach` method
        // https://tc39.es/ecma262/#sec-array.prototype.foreach
        forEach: createMethod(0),
        // `Array.prototype.map` method
        // https://tc39.es/ecma262/#sec-array.prototype.map
        map: createMethod(1),
        // `Array.prototype.filter` method
        // https://tc39.es/ecma262/#sec-array.prototype.filter
        filter: createMethod(2),
        // `Array.prototype.some` method
        // https://tc39.es/ecma262/#sec-array.prototype.some
        some: createMethod(3),
        // `Array.prototype.every` method
        // https://tc39.es/ecma262/#sec-array.prototype.every
        every: createMethod(4),
        // `Array.prototype.find` method
        // https://tc39.es/ecma262/#sec-array.prototype.find
        find: createMethod(5),
        // `Array.prototype.findIndex` method
        // https://tc39.es/ecma262/#sec-array.prototype.findIndex
        findIndex: createMethod(6),
        // `Array.prototype.filterReject` method
        // https://github.com/tc39/proposal-array-filtering
        filterReject: createMethod(7)
      };
    }
  });

  // node_modules/core-js/modules/es.symbol.js
  var require_es_symbol = __commonJS({
    "node_modules/core-js/modules/es.symbol.js"() {
      "use strict";
      var $2 = require_export();
      var global2 = require_global();
      var getBuiltIn = require_get_built_in();
      var apply = require_function_apply();
      var call = require_function_call();
      var uncurryThis = require_function_uncurry_this();
      var IS_PURE = require_is_pure();
      var DESCRIPTORS = require_descriptors();
      var NATIVE_SYMBOL = require_native_symbol();
      var fails = require_fails();
      var hasOwn3 = require_has_own_property();
      var isArray = require_is_array();
      var isCallable = require_is_callable();
      var isObject2 = require_is_object();
      var isPrototypeOf = require_object_is_prototype_of();
      var isSymbol = require_is_symbol();
      var anObject = require_an_object();
      var toObject = require_to_object();
      var toIndexedObject = require_to_indexed_object();
      var toPropertyKey = require_to_property_key();
      var $toString = require_to_string();
      var createPropertyDescriptor = require_create_property_descriptor();
      var nativeObjectCreate = require_object_create();
      var objectKeys = require_object_keys();
      var getOwnPropertyNamesModule = require_object_get_own_property_names();
      var getOwnPropertyNamesExternal = require_object_get_own_property_names_external();
      var getOwnPropertySymbolsModule = require_object_get_own_property_symbols();
      var getOwnPropertyDescriptorModule = require_object_get_own_property_descriptor();
      var definePropertyModule = require_object_define_property();
      var propertyIsEnumerableModule = require_object_property_is_enumerable();
      var arraySlice = require_array_slice();
      var redefine = require_redefine();
      var shared = require_shared();
      var sharedKey = require_shared_key();
      var hiddenKeys = require_hidden_keys();
      var uid = require_uid();
      var wellKnownSymbol = require_well_known_symbol();
      var wrappedWellKnownSymbolModule = require_well_known_symbol_wrapped();
      var defineWellKnownSymbol = require_define_well_known_symbol();
      var setToStringTag = require_set_to_string_tag();
      var InternalStateModule = require_internal_state();
      var $forEach = require_array_iteration().forEach;
      var HIDDEN = sharedKey("hidden");
      var SYMBOL = "Symbol";
      var PROTOTYPE = "prototype";
      var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
      var setInternalState = InternalStateModule.set;
      var getInternalState = InternalStateModule.getterFor(SYMBOL);
      var ObjectPrototype = Object[PROTOTYPE];
      var $Symbol = global2.Symbol;
      var SymbolPrototype = $Symbol && $Symbol[PROTOTYPE];
      var TypeError2 = global2.TypeError;
      var QObject = global2.QObject;
      var $stringify = getBuiltIn("JSON", "stringify");
      var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
      var nativeDefineProperty = definePropertyModule.f;
      var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
      var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
      var push = uncurryThis([].push);
      var AllSymbols = shared("symbols");
      var ObjectPrototypeSymbols = shared("op-symbols");
      var StringToSymbolRegistry = shared("string-to-symbol-registry");
      var SymbolToStringRegistry = shared("symbol-to-string-registry");
      var WellKnownSymbolsStore = shared("wks");
      var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
      var setSymbolDescriptor = DESCRIPTORS && fails(function() {
        return nativeObjectCreate(nativeDefineProperty({}, "a", {
          get: function() {
            return nativeDefineProperty(this, "a", { value: 7 }).a;
          }
        })).a != 7;
      }) ? function(O, P, Attributes) {
        var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
        if (ObjectPrototypeDescriptor)
          delete ObjectPrototype[P];
        nativeDefineProperty(O, P, Attributes);
        if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
          nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
        }
      } : nativeDefineProperty;
      var wrap2 = function(tag, description) {
        var symbol = AllSymbols[tag] = nativeObjectCreate(SymbolPrototype);
        setInternalState(symbol, {
          type: SYMBOL,
          tag,
          description
        });
        if (!DESCRIPTORS)
          symbol.description = description;
        return symbol;
      };
      var $defineProperty = function defineProperty(O, P, Attributes) {
        if (O === ObjectPrototype)
          $defineProperty(ObjectPrototypeSymbols, P, Attributes);
        anObject(O);
        var key = toPropertyKey(P);
        anObject(Attributes);
        if (hasOwn3(AllSymbols, key)) {
          if (!Attributes.enumerable) {
            if (!hasOwn3(O, HIDDEN))
              nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
            O[HIDDEN][key] = true;
          } else {
            if (hasOwn3(O, HIDDEN) && O[HIDDEN][key])
              O[HIDDEN][key] = false;
            Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
          }
          return setSymbolDescriptor(O, key, Attributes);
        }
        return nativeDefineProperty(O, key, Attributes);
      };
      var $defineProperties = function defineProperties(O, Properties) {
        anObject(O);
        var properties = toIndexedObject(Properties);
        var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
        $forEach(keys, function(key) {
          if (!DESCRIPTORS || call($propertyIsEnumerable, properties, key))
            $defineProperty(O, key, properties[key]);
        });
        return O;
      };
      var $create = function create5(O, Properties) {
        return Properties === void 0 ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
      };
      var $propertyIsEnumerable = function propertyIsEnumerable(V) {
        var P = toPropertyKey(V);
        var enumerable = call(nativePropertyIsEnumerable, this, P);
        if (this === ObjectPrototype && hasOwn3(AllSymbols, P) && !hasOwn3(ObjectPrototypeSymbols, P))
          return false;
        return enumerable || !hasOwn3(this, P) || !hasOwn3(AllSymbols, P) || hasOwn3(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
      };
      var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
        var it = toIndexedObject(O);
        var key = toPropertyKey(P);
        if (it === ObjectPrototype && hasOwn3(AllSymbols, key) && !hasOwn3(ObjectPrototypeSymbols, key))
          return;
        var descriptor = nativeGetOwnPropertyDescriptor(it, key);
        if (descriptor && hasOwn3(AllSymbols, key) && !(hasOwn3(it, HIDDEN) && it[HIDDEN][key])) {
          descriptor.enumerable = true;
        }
        return descriptor;
      };
      var $getOwnPropertyNames = function getOwnPropertyNames(O) {
        var names = nativeGetOwnPropertyNames(toIndexedObject(O));
        var result = [];
        $forEach(names, function(key) {
          if (!hasOwn3(AllSymbols, key) && !hasOwn3(hiddenKeys, key))
            push(result, key);
        });
        return result;
      };
      var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
        var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
        var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
        var result = [];
        $forEach(names, function(key) {
          if (hasOwn3(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn3(ObjectPrototype, key))) {
            push(result, AllSymbols[key]);
          }
        });
        return result;
      };
      if (!NATIVE_SYMBOL) {
        $Symbol = function Symbol2() {
          if (isPrototypeOf(SymbolPrototype, this))
            throw TypeError2("Symbol is not a constructor");
          var description = !arguments.length || arguments[0] === void 0 ? void 0 : $toString(arguments[0]);
          var tag = uid(description);
          var setter = function(value) {
            if (this === ObjectPrototype)
              call(setter, ObjectPrototypeSymbols, value);
            if (hasOwn3(this, HIDDEN) && hasOwn3(this[HIDDEN], tag))
              this[HIDDEN][tag] = false;
            setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
          };
          if (DESCRIPTORS && USE_SETTER)
            setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
          return wrap2(tag, description);
        };
        SymbolPrototype = $Symbol[PROTOTYPE];
        redefine(SymbolPrototype, "toString", function toString4() {
          return getInternalState(this).tag;
        });
        redefine($Symbol, "withoutSetter", function(description) {
          return wrap2(uid(description), description);
        });
        propertyIsEnumerableModule.f = $propertyIsEnumerable;
        definePropertyModule.f = $defineProperty;
        getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
        getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
        getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;
        wrappedWellKnownSymbolModule.f = function(name) {
          return wrap2(wellKnownSymbol(name), name);
        };
        if (DESCRIPTORS) {
          nativeDefineProperty(SymbolPrototype, "description", {
            configurable: true,
            get: function description() {
              return getInternalState(this).description;
            }
          });
          if (!IS_PURE) {
            redefine(ObjectPrototype, "propertyIsEnumerable", $propertyIsEnumerable, { unsafe: true });
          }
        }
      }
      $2({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
        Symbol: $Symbol
      });
      $forEach(objectKeys(WellKnownSymbolsStore), function(name) {
        defineWellKnownSymbol(name);
      });
      $2({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
        // `Symbol.for` method
        // https://tc39.es/ecma262/#sec-symbol.for
        "for": function(key) {
          var string = $toString(key);
          if (hasOwn3(StringToSymbolRegistry, string))
            return StringToSymbolRegistry[string];
          var symbol = $Symbol(string);
          StringToSymbolRegistry[string] = symbol;
          SymbolToStringRegistry[symbol] = string;
          return symbol;
        },
        // `Symbol.keyFor` method
        // https://tc39.es/ecma262/#sec-symbol.keyfor
        keyFor: function keyFor(sym) {
          if (!isSymbol(sym))
            throw TypeError2(sym + " is not a symbol");
          if (hasOwn3(SymbolToStringRegistry, sym))
            return SymbolToStringRegistry[sym];
        },
        useSetter: function() {
          USE_SETTER = true;
        },
        useSimple: function() {
          USE_SETTER = false;
        }
      });
      $2({ target: "Object", stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
        // `Object.create` method
        // https://tc39.es/ecma262/#sec-object.create
        create: $create,
        // `Object.defineProperty` method
        // https://tc39.es/ecma262/#sec-object.defineproperty
        defineProperty: $defineProperty,
        // `Object.defineProperties` method
        // https://tc39.es/ecma262/#sec-object.defineproperties
        defineProperties: $defineProperties,
        // `Object.getOwnPropertyDescriptor` method
        // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
        getOwnPropertyDescriptor: $getOwnPropertyDescriptor
      });
      $2({ target: "Object", stat: true, forced: !NATIVE_SYMBOL }, {
        // `Object.getOwnPropertyNames` method
        // https://tc39.es/ecma262/#sec-object.getownpropertynames
        getOwnPropertyNames: $getOwnPropertyNames,
        // `Object.getOwnPropertySymbols` method
        // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
        getOwnPropertySymbols: $getOwnPropertySymbols
      });
      $2({ target: "Object", stat: true, forced: fails(function() {
        getOwnPropertySymbolsModule.f(1);
      }) }, {
        getOwnPropertySymbols: function getOwnPropertySymbols(it) {
          return getOwnPropertySymbolsModule.f(toObject(it));
        }
      });
      if ($stringify) {
        FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function() {
          var symbol = $Symbol();
          return $stringify([symbol]) != "[null]" || $stringify({ a: symbol }) != "{}" || $stringify(Object(symbol)) != "{}";
        });
        $2({ target: "JSON", stat: true, forced: FORCED_JSON_STRINGIFY }, {
          // eslint-disable-next-line no-unused-vars -- required for `.length`
          stringify: function stringify5(it, replacer, space) {
            var args = arraySlice(arguments);
            var $replacer = replacer;
            if (!isObject2(replacer) && it === void 0 || isSymbol(it))
              return;
            if (!isArray(replacer))
              replacer = function(key, value) {
                if (isCallable($replacer))
                  value = call($replacer, this, key, value);
                if (!isSymbol(value))
                  return value;
              };
            args[1] = replacer;
            return apply($stringify, null, args);
          }
        });
      }
      var FORCED_JSON_STRINGIFY;
      if (!SymbolPrototype[TO_PRIMITIVE]) {
        valueOf = SymbolPrototype.valueOf;
        redefine(SymbolPrototype, TO_PRIMITIVE, function(hint) {
          return call(valueOf, this);
        });
      }
      var valueOf;
      setToStringTag($Symbol, SYMBOL);
      hiddenKeys[HIDDEN] = true;
    }
  });

  // node_modules/core-js/modules/es.symbol.async-iterator.js
  var require_es_symbol_async_iterator = __commonJS({
    "node_modules/core-js/modules/es.symbol.async-iterator.js"() {
      var defineWellKnownSymbol = require_define_well_known_symbol();
      defineWellKnownSymbol("asyncIterator");
    }
  });

  // node_modules/core-js/modules/es.symbol.description.js
  var require_es_symbol_description = __commonJS({
    "node_modules/core-js/modules/es.symbol.description.js"() {
      "use strict";
      var $2 = require_export();
      var DESCRIPTORS = require_descriptors();
      var global2 = require_global();
      var uncurryThis = require_function_uncurry_this();
      var hasOwn3 = require_has_own_property();
      var isCallable = require_is_callable();
      var isPrototypeOf = require_object_is_prototype_of();
      var toString4 = require_to_string();
      var defineProperty = require_object_define_property().f;
      var copyConstructorProperties = require_copy_constructor_properties();
      var NativeSymbol = global2.Symbol;
      var SymbolPrototype = NativeSymbol && NativeSymbol.prototype;
      if (DESCRIPTORS && isCallable(NativeSymbol) && (!("description" in SymbolPrototype) || // Safari 12 bug
      NativeSymbol().description !== void 0)) {
        EmptyStringDescriptionStore = {};
        SymbolWrapper = function Symbol2() {
          var description = arguments.length < 1 || arguments[0] === void 0 ? void 0 : toString4(arguments[0]);
          var result = isPrototypeOf(SymbolPrototype, this) ? new NativeSymbol(description) : description === void 0 ? NativeSymbol() : NativeSymbol(description);
          if (description === "")
            EmptyStringDescriptionStore[result] = true;
          return result;
        };
        copyConstructorProperties(SymbolWrapper, NativeSymbol);
        SymbolWrapper.prototype = SymbolPrototype;
        SymbolPrototype.constructor = SymbolWrapper;
        NATIVE_SYMBOL = String(NativeSymbol("test")) == "Symbol(test)";
        symbolToString = uncurryThis(SymbolPrototype.toString);
        symbolValueOf = uncurryThis(SymbolPrototype.valueOf);
        regexp = /^Symbol\((.*)\)[^)]+$/;
        replace = uncurryThis("".replace);
        stringSlice = uncurryThis("".slice);
        defineProperty(SymbolPrototype, "description", {
          configurable: true,
          get: function description() {
            var symbol = symbolValueOf(this);
            var string = symbolToString(symbol);
            if (hasOwn3(EmptyStringDescriptionStore, symbol))
              return "";
            var desc = NATIVE_SYMBOL ? stringSlice(string, 7, -1) : replace(string, regexp, "$1");
            return desc === "" ? void 0 : desc;
          }
        });
        $2({ global: true, forced: true }, {
          Symbol: SymbolWrapper
        });
      }
      var EmptyStringDescriptionStore;
      var SymbolWrapper;
      var NATIVE_SYMBOL;
      var symbolToString;
      var symbolValueOf;
      var regexp;
      var replace;
      var stringSlice;
    }
  });

  // node_modules/core-js/modules/es.symbol.has-instance.js
  var require_es_symbol_has_instance = __commonJS({
    "node_modules/core-js/modules/es.symbol.has-instance.js"() {
      var defineWellKnownSymbol = require_define_well_known_symbol();
      defineWellKnownSymbol("hasInstance");
    }
  });

  // node_modules/core-js/modules/es.symbol.is-concat-spreadable.js
  var require_es_symbol_is_concat_spreadable = __commonJS({
    "node_modules/core-js/modules/es.symbol.is-concat-spreadable.js"() {
      var defineWellKnownSymbol = require_define_well_known_symbol();
      defineWellKnownSymbol("isConcatSpreadable");
    }
  });

  // node_modules/core-js/modules/es.symbol.iterator.js
  var require_es_symbol_iterator = __commonJS({
    "node_modules/core-js/modules/es.symbol.iterator.js"() {
      var defineWellKnownSymbol = require_define_well_known_symbol();
      defineWellKnownSymbol("iterator");
    }
  });

  // node_modules/core-js/modules/es.symbol.match.js
  var require_es_symbol_match = __commonJS({
    "node_modules/core-js/modules/es.symbol.match.js"() {
      var defineWellKnownSymbol = require_define_well_known_symbol();
      defineWellKnownSymbol("match");
    }
  });

  // node_modules/core-js/modules/es.symbol.match-all.js
  var require_es_symbol_match_all = __commonJS({
    "node_modules/core-js/modules/es.symbol.match-all.js"() {
      var defineWellKnownSymbol = require_define_well_known_symbol();
      defineWellKnownSymbol("matchAll");
    }
  });

  // node_modules/core-js/modules/es.symbol.replace.js
  var require_es_symbol_replace = __commonJS({
    "node_modules/core-js/modules/es.symbol.replace.js"() {
      var defineWellKnownSymbol = require_define_well_known_symbol();
      defineWellKnownSymbol("replace");
    }
  });

  // node_modules/core-js/modules/es.symbol.search.js
  var require_es_symbol_search = __commonJS({
    "node_modules/core-js/modules/es.symbol.search.js"() {
      var defineWellKnownSymbol = require_define_well_known_symbol();
      defineWellKnownSymbol("search");
    }
  });

  // node_modules/core-js/modules/es.symbol.species.js
  var require_es_symbol_species = __commonJS({
    "node_modules/core-js/modules/es.symbol.species.js"() {
      var defineWellKnownSymbol = require_define_well_known_symbol();
      defineWellKnownSymbol("species");
    }
  });

  // node_modules/core-js/modules/es.symbol.split.js
  var require_es_symbol_split = __commonJS({
    "node_modules/core-js/modules/es.symbol.split.js"() {
      var defineWellKnownSymbol = require_define_well_known_symbol();
      defineWellKnownSymbol("split");
    }
  });

  // node_modules/core-js/modules/es.symbol.to-primitive.js
  var require_es_symbol_to_primitive = __commonJS({
    "node_modules/core-js/modules/es.symbol.to-primitive.js"() {
      var defineWellKnownSymbol = require_define_well_known_symbol();
      defineWellKnownSymbol("toPrimitive");
    }
  });

  // node_modules/core-js/modules/es.symbol.to-string-tag.js
  var require_es_symbol_to_string_tag = __commonJS({
    "node_modules/core-js/modules/es.symbol.to-string-tag.js"() {
      var defineWellKnownSymbol = require_define_well_known_symbol();
      defineWellKnownSymbol("toStringTag");
    }
  });

  // node_modules/core-js/modules/es.symbol.unscopables.js
  var require_es_symbol_unscopables = __commonJS({
    "node_modules/core-js/modules/es.symbol.unscopables.js"() {
      var defineWellKnownSymbol = require_define_well_known_symbol();
      defineWellKnownSymbol("unscopables");
    }
  });

  // node_modules/core-js/modules/es.json.to-string-tag.js
  var require_es_json_to_string_tag = __commonJS({
    "node_modules/core-js/modules/es.json.to-string-tag.js"() {
      var global2 = require_global();
      var setToStringTag = require_set_to_string_tag();
      setToStringTag(global2.JSON, "JSON", true);
    }
  });

  // node_modules/core-js/modules/es.math.to-string-tag.js
  var require_es_math_to_string_tag = __commonJS({
    "node_modules/core-js/modules/es.math.to-string-tag.js"() {
      var setToStringTag = require_set_to_string_tag();
      setToStringTag(Math, "Math", true);
    }
  });

  // node_modules/core-js/modules/es.reflect.to-string-tag.js
  var require_es_reflect_to_string_tag = __commonJS({
    "node_modules/core-js/modules/es.reflect.to-string-tag.js"() {
      var $2 = require_export();
      var global2 = require_global();
      var setToStringTag = require_set_to_string_tag();
      $2({ global: true }, { Reflect: {} });
      setToStringTag(global2.Reflect, "Reflect", true);
    }
  });

  // node_modules/core-js/es/symbol/index.js
  var require_symbol = __commonJS({
    "node_modules/core-js/es/symbol/index.js"(exports, module) {
      require_es_array_concat();
      require_es_object_to_string();
      require_es_symbol();
      require_es_symbol_async_iterator();
      require_es_symbol_description();
      require_es_symbol_has_instance();
      require_es_symbol_is_concat_spreadable();
      require_es_symbol_iterator();
      require_es_symbol_match();
      require_es_symbol_match_all();
      require_es_symbol_replace();
      require_es_symbol_search();
      require_es_symbol_species();
      require_es_symbol_split();
      require_es_symbol_to_primitive();
      require_es_symbol_to_string_tag();
      require_es_symbol_unscopables();
      require_es_json_to_string_tag();
      require_es_math_to_string_tag();
      require_es_reflect_to_string_tag();
      var path = require_path();
      module.exports = path.Symbol;
    }
  });

  // node_modules/core-js/internals/dom-iterables.js
  var require_dom_iterables = __commonJS({
    "node_modules/core-js/internals/dom-iterables.js"(exports, module) {
      module.exports = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
      };
    }
  });

  // node_modules/core-js/internals/dom-token-list-prototype.js
  var require_dom_token_list_prototype = __commonJS({
    "node_modules/core-js/internals/dom-token-list-prototype.js"(exports, module) {
      var documentCreateElement = require_document_create_element();
      var classList = documentCreateElement("span").classList;
      var DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;
      module.exports = DOMTokenListPrototype === Object.prototype ? void 0 : DOMTokenListPrototype;
    }
  });

  // node_modules/core-js/internals/iterators.js
  var require_iterators = __commonJS({
    "node_modules/core-js/internals/iterators.js"(exports, module) {
      module.exports = {};
    }
  });

  // node_modules/core-js/internals/correct-prototype-getter.js
  var require_correct_prototype_getter = __commonJS({
    "node_modules/core-js/internals/correct-prototype-getter.js"(exports, module) {
      var fails = require_fails();
      module.exports = !fails(function() {
        function F() {
        }
        F.prototype.constructor = null;
        return Object.getPrototypeOf(new F()) !== F.prototype;
      });
    }
  });

  // node_modules/core-js/internals/object-get-prototype-of.js
  var require_object_get_prototype_of = __commonJS({
    "node_modules/core-js/internals/object-get-prototype-of.js"(exports, module) {
      var global2 = require_global();
      var hasOwn3 = require_has_own_property();
      var isCallable = require_is_callable();
      var toObject = require_to_object();
      var sharedKey = require_shared_key();
      var CORRECT_PROTOTYPE_GETTER = require_correct_prototype_getter();
      var IE_PROTO = sharedKey("IE_PROTO");
      var Object2 = global2.Object;
      var ObjectPrototype = Object2.prototype;
      module.exports = CORRECT_PROTOTYPE_GETTER ? Object2.getPrototypeOf : function(O) {
        var object = toObject(O);
        if (hasOwn3(object, IE_PROTO))
          return object[IE_PROTO];
        var constructor = object.constructor;
        if (isCallable(constructor) && object instanceof constructor) {
          return constructor.prototype;
        }
        return object instanceof Object2 ? ObjectPrototype : null;
      };
    }
  });

  // node_modules/core-js/internals/iterators-core.js
  var require_iterators_core = __commonJS({
    "node_modules/core-js/internals/iterators-core.js"(exports, module) {
      "use strict";
      var fails = require_fails();
      var isCallable = require_is_callable();
      var create5 = require_object_create();
      var getPrototypeOf = require_object_get_prototype_of();
      var redefine = require_redefine();
      var wellKnownSymbol = require_well_known_symbol();
      var IS_PURE = require_is_pure();
      var ITERATOR = wellKnownSymbol("iterator");
      var BUGGY_SAFARI_ITERATORS = false;
      var IteratorPrototype;
      var PrototypeOfArrayIteratorPrototype;
      var arrayIterator;
      if ([].keys) {
        arrayIterator = [].keys();
        if (!("next" in arrayIterator))
          BUGGY_SAFARI_ITERATORS = true;
        else {
          PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
          if (PrototypeOfArrayIteratorPrototype !== Object.prototype)
            IteratorPrototype = PrototypeOfArrayIteratorPrototype;
        }
      }
      var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == void 0 || fails(function() {
        var test2 = {};
        return IteratorPrototype[ITERATOR].call(test2) !== test2;
      });
      if (NEW_ITERATOR_PROTOTYPE)
        IteratorPrototype = {};
      else if (IS_PURE)
        IteratorPrototype = create5(IteratorPrototype);
      if (!isCallable(IteratorPrototype[ITERATOR])) {
        redefine(IteratorPrototype, ITERATOR, function() {
          return this;
        });
      }
      module.exports = {
        IteratorPrototype,
        BUGGY_SAFARI_ITERATORS
      };
    }
  });

  // node_modules/core-js/internals/create-iterator-constructor.js
  var require_create_iterator_constructor = __commonJS({
    "node_modules/core-js/internals/create-iterator-constructor.js"(exports, module) {
      "use strict";
      var IteratorPrototype = require_iterators_core().IteratorPrototype;
      var create5 = require_object_create();
      var createPropertyDescriptor = require_create_property_descriptor();
      var setToStringTag = require_set_to_string_tag();
      var Iterators = require_iterators();
      var returnThis3 = function() {
        return this;
      };
      module.exports = function(IteratorConstructor, NAME, next) {
        var TO_STRING_TAG = NAME + " Iterator";
        IteratorConstructor.prototype = create5(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
        setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
        Iterators[TO_STRING_TAG] = returnThis3;
        return IteratorConstructor;
      };
    }
  });

  // node_modules/core-js/internals/a-possible-prototype.js
  var require_a_possible_prototype = __commonJS({
    "node_modules/core-js/internals/a-possible-prototype.js"(exports, module) {
      var global2 = require_global();
      var isCallable = require_is_callable();
      var String2 = global2.String;
      var TypeError2 = global2.TypeError;
      module.exports = function(argument) {
        if (typeof argument == "object" || isCallable(argument))
          return argument;
        throw TypeError2("Can't set " + String2(argument) + " as a prototype");
      };
    }
  });

  // node_modules/core-js/internals/object-set-prototype-of.js
  var require_object_set_prototype_of = __commonJS({
    "node_modules/core-js/internals/object-set-prototype-of.js"(exports, module) {
      var uncurryThis = require_function_uncurry_this();
      var anObject = require_an_object();
      var aPossiblePrototype = require_a_possible_prototype();
      module.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
        var CORRECT_SETTER = false;
        var test2 = {};
        var setter;
        try {
          setter = uncurryThis(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set);
          setter(test2, []);
          CORRECT_SETTER = test2 instanceof Array;
        } catch (error) {
        }
        return function setPrototypeOf2(O, proto) {
          anObject(O);
          aPossiblePrototype(proto);
          if (CORRECT_SETTER)
            setter(O, proto);
          else
            O.__proto__ = proto;
          return O;
        };
      }() : void 0);
    }
  });

  // node_modules/core-js/internals/define-iterator.js
  var require_define_iterator = __commonJS({
    "node_modules/core-js/internals/define-iterator.js"(exports, module) {
      "use strict";
      var $2 = require_export();
      var call = require_function_call();
      var IS_PURE = require_is_pure();
      var FunctionName = require_function_name();
      var isCallable = require_is_callable();
      var createIteratorConstructor = require_create_iterator_constructor();
      var getPrototypeOf = require_object_get_prototype_of();
      var setPrototypeOf2 = require_object_set_prototype_of();
      var setToStringTag = require_set_to_string_tag();
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      var redefine = require_redefine();
      var wellKnownSymbol = require_well_known_symbol();
      var Iterators = require_iterators();
      var IteratorsCore = require_iterators_core();
      var PROPER_FUNCTION_NAME = FunctionName.PROPER;
      var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
      var IteratorPrototype = IteratorsCore.IteratorPrototype;
      var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
      var ITERATOR = wellKnownSymbol("iterator");
      var KEYS = "keys";
      var VALUES = "values";
      var ENTRIES = "entries";
      var returnThis3 = function() {
        return this;
      };
      module.exports = function(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
        createIteratorConstructor(IteratorConstructor, NAME, next);
        var getIterationMethod = function(KIND) {
          if (KIND === DEFAULT && defaultIterator)
            return defaultIterator;
          if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype)
            return IterablePrototype[KIND];
          switch (KIND) {
            case KEYS:
              return function keys() {
                return new IteratorConstructor(this, KIND);
              };
            case VALUES:
              return function values2() {
                return new IteratorConstructor(this, KIND);
              };
            case ENTRIES:
              return function entries() {
                return new IteratorConstructor(this, KIND);
              };
          }
          return function() {
            return new IteratorConstructor(this);
          };
        };
        var TO_STRING_TAG = NAME + " Iterator";
        var INCORRECT_VALUES_NAME = false;
        var IterablePrototype = Iterable.prototype;
        var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype["@@iterator"] || DEFAULT && IterablePrototype[DEFAULT];
        var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
        var anyNativeIterator = NAME == "Array" ? IterablePrototype.entries || nativeIterator : nativeIterator;
        var CurrentIteratorPrototype, methods, KEY;
        if (anyNativeIterator) {
          CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
          if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
            if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
              if (setPrototypeOf2) {
                setPrototypeOf2(CurrentIteratorPrototype, IteratorPrototype);
              } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
                redefine(CurrentIteratorPrototype, ITERATOR, returnThis3);
              }
            }
            setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
            if (IS_PURE)
              Iterators[TO_STRING_TAG] = returnThis3;
          }
        }
        if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
          if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
            createNonEnumerableProperty(IterablePrototype, "name", VALUES);
          } else {
            INCORRECT_VALUES_NAME = true;
            defaultIterator = function values2() {
              return call(nativeIterator, this);
            };
          }
        }
        if (DEFAULT) {
          methods = {
            values: getIterationMethod(VALUES),
            keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
            entries: getIterationMethod(ENTRIES)
          };
          if (FORCED)
            for (KEY in methods) {
              if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
                redefine(IterablePrototype, KEY, methods[KEY]);
              }
            }
          else
            $2({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
        }
        if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
          redefine(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
        }
        Iterators[NAME] = defaultIterator;
        return methods;
      };
    }
  });

  // node_modules/core-js/modules/es.array.iterator.js
  var require_es_array_iterator = __commonJS({
    "node_modules/core-js/modules/es.array.iterator.js"(exports, module) {
      "use strict";
      var toIndexedObject = require_to_indexed_object();
      var addToUnscopables = require_add_to_unscopables();
      var Iterators = require_iterators();
      var InternalStateModule = require_internal_state();
      var defineIterator = require_define_iterator();
      var ARRAY_ITERATOR = "Array Iterator";
      var setInternalState = InternalStateModule.set;
      var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);
      module.exports = defineIterator(Array, "Array", function(iterated, kind) {
        setInternalState(this, {
          type: ARRAY_ITERATOR,
          target: toIndexedObject(iterated),
          // target
          index: 0,
          // next index
          kind
          // kind
        });
      }, function() {
        var state = getInternalState(this);
        var target = state.target;
        var kind = state.kind;
        var index = state.index++;
        if (!target || index >= target.length) {
          state.target = void 0;
          return { value: void 0, done: true };
        }
        if (kind == "keys")
          return { value: index, done: false };
        if (kind == "values")
          return { value: target[index], done: false };
        return { value: [index, target[index]], done: false };
      }, "values");
      Iterators.Arguments = Iterators.Array;
      addToUnscopables("keys");
      addToUnscopables("values");
      addToUnscopables("entries");
    }
  });

  // node_modules/core-js/modules/web.dom-collections.iterator.js
  var require_web_dom_collections_iterator = __commonJS({
    "node_modules/core-js/modules/web.dom-collections.iterator.js"() {
      var global2 = require_global();
      var DOMIterables = require_dom_iterables();
      var DOMTokenListPrototype = require_dom_token_list_prototype();
      var ArrayIteratorMethods = require_es_array_iterator();
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      var wellKnownSymbol = require_well_known_symbol();
      var ITERATOR = wellKnownSymbol("iterator");
      var TO_STRING_TAG = wellKnownSymbol("toStringTag");
      var ArrayValues = ArrayIteratorMethods.values;
      var handlePrototype = function(CollectionPrototype, COLLECTION_NAME2) {
        if (CollectionPrototype) {
          if (CollectionPrototype[ITERATOR] !== ArrayValues)
            try {
              createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
            } catch (error) {
              CollectionPrototype[ITERATOR] = ArrayValues;
            }
          if (!CollectionPrototype[TO_STRING_TAG]) {
            createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME2);
          }
          if (DOMIterables[COLLECTION_NAME2])
            for (var METHOD_NAME in ArrayIteratorMethods) {
              if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME])
                try {
                  createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
                } catch (error) {
                  CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
                }
            }
        }
      };
      for (COLLECTION_NAME in DOMIterables) {
        handlePrototype(global2[COLLECTION_NAME] && global2[COLLECTION_NAME].prototype, COLLECTION_NAME);
      }
      var COLLECTION_NAME;
      handlePrototype(DOMTokenListPrototype, "DOMTokenList");
    }
  });

  // node_modules/core-js/stable/symbol/index.js
  var require_symbol2 = __commonJS({
    "node_modules/core-js/stable/symbol/index.js"(exports, module) {
      var parent = require_symbol();
      require_web_dom_collections_iterator();
      module.exports = parent;
    }
  });

  // node_modules/core-js/modules/esnext.symbol.async-dispose.js
  var require_esnext_symbol_async_dispose = __commonJS({
    "node_modules/core-js/modules/esnext.symbol.async-dispose.js"() {
      var defineWellKnownSymbol = require_define_well_known_symbol();
      defineWellKnownSymbol("asyncDispose");
    }
  });

  // node_modules/core-js/modules/esnext.symbol.dispose.js
  var require_esnext_symbol_dispose = __commonJS({
    "node_modules/core-js/modules/esnext.symbol.dispose.js"() {
      var defineWellKnownSymbol = require_define_well_known_symbol();
      defineWellKnownSymbol("dispose");
    }
  });

  // node_modules/core-js/modules/esnext.symbol.matcher.js
  var require_esnext_symbol_matcher = __commonJS({
    "node_modules/core-js/modules/esnext.symbol.matcher.js"() {
      var defineWellKnownSymbol = require_define_well_known_symbol();
      defineWellKnownSymbol("matcher");
    }
  });

  // node_modules/core-js/modules/esnext.symbol.metadata.js
  var require_esnext_symbol_metadata = __commonJS({
    "node_modules/core-js/modules/esnext.symbol.metadata.js"() {
      var defineWellKnownSymbol = require_define_well_known_symbol();
      defineWellKnownSymbol("metadata");
    }
  });

  // node_modules/core-js/modules/esnext.symbol.observable.js
  var require_esnext_symbol_observable = __commonJS({
    "node_modules/core-js/modules/esnext.symbol.observable.js"() {
      var defineWellKnownSymbol = require_define_well_known_symbol();
      defineWellKnownSymbol("observable");
    }
  });

  // node_modules/core-js/modules/esnext.symbol.pattern-match.js
  var require_esnext_symbol_pattern_match = __commonJS({
    "node_modules/core-js/modules/esnext.symbol.pattern-match.js"() {
      var defineWellKnownSymbol = require_define_well_known_symbol();
      defineWellKnownSymbol("patternMatch");
    }
  });

  // node_modules/core-js/modules/esnext.symbol.replace-all.js
  var require_esnext_symbol_replace_all = __commonJS({
    "node_modules/core-js/modules/esnext.symbol.replace-all.js"() {
      var defineWellKnownSymbol = require_define_well_known_symbol();
      defineWellKnownSymbol("replaceAll");
    }
  });

  // node_modules/core-js/features/symbol/index.js
  var require_symbol3 = __commonJS({
    "node_modules/core-js/features/symbol/index.js"(exports, module) {
      var parent = require_symbol2();
      require_esnext_symbol_async_dispose();
      require_esnext_symbol_dispose();
      require_esnext_symbol_matcher();
      require_esnext_symbol_metadata();
      require_esnext_symbol_observable();
      require_esnext_symbol_pattern_match();
      require_esnext_symbol_replace_all();
      module.exports = parent;
    }
  });

  // node_modules/core-js/internals/iterator-close.js
  var require_iterator_close = __commonJS({
    "node_modules/core-js/internals/iterator-close.js"(exports, module) {
      var call = require_function_call();
      var anObject = require_an_object();
      var getMethod = require_get_method();
      module.exports = function(iterator, kind, value) {
        var innerResult, innerError;
        anObject(iterator);
        try {
          innerResult = getMethod(iterator, "return");
          if (!innerResult) {
            if (kind === "throw")
              throw value;
            return value;
          }
          innerResult = call(innerResult, iterator);
        } catch (error) {
          innerError = true;
          innerResult = error;
        }
        if (kind === "throw")
          throw value;
        if (innerError)
          throw innerResult;
        anObject(innerResult);
        return value;
      };
    }
  });

  // node_modules/core-js/internals/call-with-safe-iteration-closing.js
  var require_call_with_safe_iteration_closing = __commonJS({
    "node_modules/core-js/internals/call-with-safe-iteration-closing.js"(exports, module) {
      var anObject = require_an_object();
      var iteratorClose = require_iterator_close();
      module.exports = function(iterator, fn, value, ENTRIES) {
        try {
          return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
        } catch (error) {
          iteratorClose(iterator, "throw", error);
        }
      };
    }
  });

  // node_modules/core-js/internals/is-array-iterator-method.js
  var require_is_array_iterator_method = __commonJS({
    "node_modules/core-js/internals/is-array-iterator-method.js"(exports, module) {
      var wellKnownSymbol = require_well_known_symbol();
      var Iterators = require_iterators();
      var ITERATOR = wellKnownSymbol("iterator");
      var ArrayPrototype = Array.prototype;
      module.exports = function(it) {
        return it !== void 0 && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
      };
    }
  });

  // node_modules/core-js/internals/get-iterator-method.js
  var require_get_iterator_method = __commonJS({
    "node_modules/core-js/internals/get-iterator-method.js"(exports, module) {
      var classof = require_classof();
      var getMethod = require_get_method();
      var Iterators = require_iterators();
      var wellKnownSymbol = require_well_known_symbol();
      var ITERATOR = wellKnownSymbol("iterator");
      module.exports = function(it) {
        if (it != void 0)
          return getMethod(it, ITERATOR) || getMethod(it, "@@iterator") || Iterators[classof(it)];
      };
    }
  });

  // node_modules/core-js/internals/get-iterator.js
  var require_get_iterator = __commonJS({
    "node_modules/core-js/internals/get-iterator.js"(exports, module) {
      var global2 = require_global();
      var call = require_function_call();
      var aCallable = require_a_callable();
      var anObject = require_an_object();
      var tryToString = require_try_to_string();
      var getIteratorMethod = require_get_iterator_method();
      var TypeError2 = global2.TypeError;
      module.exports = function(argument, usingIterator) {
        var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
        if (aCallable(iteratorMethod))
          return anObject(call(iteratorMethod, argument));
        throw TypeError2(tryToString(argument) + " is not iterable");
      };
    }
  });

  // node_modules/core-js/internals/array-from.js
  var require_array_from = __commonJS({
    "node_modules/core-js/internals/array-from.js"(exports, module) {
      "use strict";
      var global2 = require_global();
      var bind2 = require_function_bind_context();
      var call = require_function_call();
      var toObject = require_to_object();
      var callWithSafeIterationClosing = require_call_with_safe_iteration_closing();
      var isArrayIteratorMethod = require_is_array_iterator_method();
      var isConstructor = require_is_constructor();
      var lengthOfArrayLike = require_length_of_array_like();
      var createProperty = require_create_property();
      var getIterator = require_get_iterator();
      var getIteratorMethod = require_get_iterator_method();
      var Array2 = global2.Array;
      module.exports = function from4(arrayLike) {
        var O = toObject(arrayLike);
        var IS_CONSTRUCTOR = isConstructor(this);
        var argumentsLength = arguments.length;
        var mapfn = argumentsLength > 1 ? arguments[1] : void 0;
        var mapping = mapfn !== void 0;
        if (mapping)
          mapfn = bind2(mapfn, argumentsLength > 2 ? arguments[2] : void 0);
        var iteratorMethod = getIteratorMethod(O);
        var index = 0;
        var length, result, step, iterator, next, value;
        if (iteratorMethod && !(this == Array2 && isArrayIteratorMethod(iteratorMethod))) {
          iterator = getIterator(O, iteratorMethod);
          next = iterator.next;
          result = IS_CONSTRUCTOR ? new this() : [];
          for (; !(step = call(next, iterator)).done; index++) {
            value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
            createProperty(result, index, value);
          }
        } else {
          length = lengthOfArrayLike(O);
          result = IS_CONSTRUCTOR ? new this(length) : Array2(length);
          for (; length > index; index++) {
            value = mapping ? mapfn(O[index], index) : O[index];
            createProperty(result, index, value);
          }
        }
        result.length = index;
        return result;
      };
    }
  });

  // node_modules/core-js/internals/check-correctness-of-iteration.js
  var require_check_correctness_of_iteration = __commonJS({
    "node_modules/core-js/internals/check-correctness-of-iteration.js"(exports, module) {
      var wellKnownSymbol = require_well_known_symbol();
      var ITERATOR = wellKnownSymbol("iterator");
      var SAFE_CLOSING = false;
      try {
        called = 0;
        iteratorWithReturn = {
          next: function() {
            return { done: !!called++ };
          },
          "return": function() {
            SAFE_CLOSING = true;
          }
        };
        iteratorWithReturn[ITERATOR] = function() {
          return this;
        };
        Array.from(iteratorWithReturn, function() {
          throw 2;
        });
      } catch (error) {
      }
      var called;
      var iteratorWithReturn;
      module.exports = function(exec, SKIP_CLOSING) {
        if (!SKIP_CLOSING && !SAFE_CLOSING)
          return false;
        var ITERATION_SUPPORT = false;
        try {
          var object = {};
          object[ITERATOR] = function() {
            return {
              next: function() {
                return { done: ITERATION_SUPPORT = true };
              }
            };
          };
          exec(object);
        } catch (error) {
        }
        return ITERATION_SUPPORT;
      };
    }
  });

  // node_modules/core-js/modules/es.array.from.js
  var require_es_array_from = __commonJS({
    "node_modules/core-js/modules/es.array.from.js"() {
      var $2 = require_export();
      var from4 = require_array_from();
      var checkCorrectnessOfIteration = require_check_correctness_of_iteration();
      var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function(iterable) {
        Array.from(iterable);
      });
      $2({ target: "Array", stat: true, forced: INCORRECT_ITERATION }, {
        from: from4
      });
    }
  });

  // node_modules/core-js/modules/es.array.is-array.js
  var require_es_array_is_array = __commonJS({
    "node_modules/core-js/modules/es.array.is-array.js"() {
      var $2 = require_export();
      var isArray = require_is_array();
      $2({ target: "Array", stat: true }, {
        isArray
      });
    }
  });

  // node_modules/core-js/modules/es.array.of.js
  var require_es_array_of = __commonJS({
    "node_modules/core-js/modules/es.array.of.js"() {
      "use strict";
      var $2 = require_export();
      var global2 = require_global();
      var fails = require_fails();
      var isConstructor = require_is_constructor();
      var createProperty = require_create_property();
      var Array2 = global2.Array;
      var ISNT_GENERIC = fails(function() {
        function F() {
        }
        return !(Array2.of.call(F) instanceof F);
      });
      $2({ target: "Array", stat: true, forced: ISNT_GENERIC }, {
        of: function of() {
          var index = 0;
          var argumentsLength = arguments.length;
          var result = new (isConstructor(this) ? this : Array2)(argumentsLength);
          while (argumentsLength > index)
            createProperty(result, index, arguments[index++]);
          result.length = argumentsLength;
          return result;
        }
      });
    }
  });

  // node_modules/core-js/modules/es.array.at.js
  var require_es_array_at = __commonJS({
    "node_modules/core-js/modules/es.array.at.js"() {
      "use strict";
      var $2 = require_export();
      var toObject = require_to_object();
      var lengthOfArrayLike = require_length_of_array_like();
      var toIntegerOrInfinity = require_to_integer_or_infinity();
      var addToUnscopables = require_add_to_unscopables();
      $2({ target: "Array", proto: true }, {
        at: function at(index) {
          var O = toObject(this);
          var len = lengthOfArrayLike(O);
          var relativeIndex = toIntegerOrInfinity(index);
          var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;
          return k < 0 || k >= len ? void 0 : O[k];
        }
      });
      addToUnscopables("at");
    }
  });

  // node_modules/core-js/internals/array-copy-within.js
  var require_array_copy_within = __commonJS({
    "node_modules/core-js/internals/array-copy-within.js"(exports, module) {
      "use strict";
      var toObject = require_to_object();
      var toAbsoluteIndex = require_to_absolute_index();
      var lengthOfArrayLike = require_length_of_array_like();
      var min = Math.min;
      module.exports = [].copyWithin || function copyWithin(target, start) {
        var O = toObject(this);
        var len = lengthOfArrayLike(O);
        var to = toAbsoluteIndex(target, len);
        var from4 = toAbsoluteIndex(start, len);
        var end = arguments.length > 2 ? arguments[2] : void 0;
        var count = min((end === void 0 ? len : toAbsoluteIndex(end, len)) - from4, len - to);
        var inc = 1;
        if (from4 < to && to < from4 + count) {
          inc = -1;
          from4 += count - 1;
          to += count - 1;
        }
        while (count-- > 0) {
          if (from4 in O)
            O[to] = O[from4];
          else
            delete O[to];
          to += inc;
          from4 += inc;
        }
        return O;
      };
    }
  });

  // node_modules/core-js/modules/es.array.copy-within.js
  var require_es_array_copy_within = __commonJS({
    "node_modules/core-js/modules/es.array.copy-within.js"() {
      var $2 = require_export();
      var copyWithin = require_array_copy_within();
      var addToUnscopables = require_add_to_unscopables();
      $2({ target: "Array", proto: true }, {
        copyWithin
      });
      addToUnscopables("copyWithin");
    }
  });

  // node_modules/core-js/internals/array-method-is-strict.js
  var require_array_method_is_strict = __commonJS({
    "node_modules/core-js/internals/array-method-is-strict.js"(exports, module) {
      "use strict";
      var fails = require_fails();
      module.exports = function(METHOD_NAME, argument) {
        var method = [][METHOD_NAME];
        return !!method && fails(function() {
          method.call(null, argument || function() {
            throw 1;
          }, 1);
        });
      };
    }
  });

  // node_modules/core-js/modules/es.array.every.js
  var require_es_array_every = __commonJS({
    "node_modules/core-js/modules/es.array.every.js"() {
      "use strict";
      var $2 = require_export();
      var $every = require_array_iteration().every;
      var arrayMethodIsStrict = require_array_method_is_strict();
      var STRICT_METHOD = arrayMethodIsStrict("every");
      $2({ target: "Array", proto: true, forced: !STRICT_METHOD }, {
        every: function every(callbackfn) {
          return $every(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
        }
      });
    }
  });

  // node_modules/core-js/internals/array-fill.js
  var require_array_fill = __commonJS({
    "node_modules/core-js/internals/array-fill.js"(exports, module) {
      "use strict";
      var toObject = require_to_object();
      var toAbsoluteIndex = require_to_absolute_index();
      var lengthOfArrayLike = require_length_of_array_like();
      module.exports = function fill(value) {
        var O = toObject(this);
        var length = lengthOfArrayLike(O);
        var argumentsLength = arguments.length;
        var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : void 0, length);
        var end = argumentsLength > 2 ? arguments[2] : void 0;
        var endPos = end === void 0 ? length : toAbsoluteIndex(end, length);
        while (endPos > index)
          O[index++] = value;
        return O;
      };
    }
  });

  // node_modules/core-js/modules/es.array.fill.js
  var require_es_array_fill = __commonJS({
    "node_modules/core-js/modules/es.array.fill.js"() {
      var $2 = require_export();
      var fill = require_array_fill();
      var addToUnscopables = require_add_to_unscopables();
      $2({ target: "Array", proto: true }, {
        fill
      });
      addToUnscopables("fill");
    }
  });

  // node_modules/core-js/modules/es.array.filter.js
  var require_es_array_filter = __commonJS({
    "node_modules/core-js/modules/es.array.filter.js"() {
      "use strict";
      var $2 = require_export();
      var $filter = require_array_iteration().filter;
      var arrayMethodHasSpeciesSupport = require_array_method_has_species_support();
      var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("filter");
      $2({ target: "Array", proto: true, forced: !HAS_SPECIES_SUPPORT }, {
        filter: function filter(callbackfn) {
          return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
        }
      });
    }
  });

  // node_modules/core-js/modules/es.array.find.js
  var require_es_array_find = __commonJS({
    "node_modules/core-js/modules/es.array.find.js"() {
      "use strict";
      var $2 = require_export();
      var $find = require_array_iteration().find;
      var addToUnscopables = require_add_to_unscopables();
      var FIND = "find";
      var SKIPS_HOLES = true;
      if (FIND in [])
        Array(1)[FIND](function() {
          SKIPS_HOLES = false;
        });
      $2({ target: "Array", proto: true, forced: SKIPS_HOLES }, {
        find: function find4(callbackfn) {
          return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
        }
      });
      addToUnscopables(FIND);
    }
  });

  // node_modules/core-js/modules/es.array.find-index.js
  var require_es_array_find_index = __commonJS({
    "node_modules/core-js/modules/es.array.find-index.js"() {
      "use strict";
      var $2 = require_export();
      var $findIndex = require_array_iteration().findIndex;
      var addToUnscopables = require_add_to_unscopables();
      var FIND_INDEX = "findIndex";
      var SKIPS_HOLES = true;
      if (FIND_INDEX in [])
        Array(1)[FIND_INDEX](function() {
          SKIPS_HOLES = false;
        });
      $2({ target: "Array", proto: true, forced: SKIPS_HOLES }, {
        findIndex: function findIndex(callbackfn) {
          return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
        }
      });
      addToUnscopables(FIND_INDEX);
    }
  });

  // node_modules/core-js/internals/flatten-into-array.js
  var require_flatten_into_array = __commonJS({
    "node_modules/core-js/internals/flatten-into-array.js"(exports, module) {
      "use strict";
      var global2 = require_global();
      var isArray = require_is_array();
      var lengthOfArrayLike = require_length_of_array_like();
      var bind2 = require_function_bind_context();
      var TypeError2 = global2.TypeError;
      var flattenIntoArray = function(target, original, source, sourceLen, start, depth, mapper, thisArg) {
        var targetIndex = start;
        var sourceIndex = 0;
        var mapFn = mapper ? bind2(mapper, thisArg) : false;
        var element, elementLen;
        while (sourceIndex < sourceLen) {
          if (sourceIndex in source) {
            element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];
            if (depth > 0 && isArray(element)) {
              elementLen = lengthOfArrayLike(element);
              targetIndex = flattenIntoArray(target, original, element, elementLen, targetIndex, depth - 1) - 1;
            } else {
              if (targetIndex >= 9007199254740991)
                throw TypeError2("Exceed the acceptable array length");
              target[targetIndex] = element;
            }
            targetIndex++;
          }
          sourceIndex++;
        }
        return targetIndex;
      };
      module.exports = flattenIntoArray;
    }
  });

  // node_modules/core-js/modules/es.array.flat.js
  var require_es_array_flat = __commonJS({
    "node_modules/core-js/modules/es.array.flat.js"() {
      "use strict";
      var $2 = require_export();
      var flattenIntoArray = require_flatten_into_array();
      var toObject = require_to_object();
      var lengthOfArrayLike = require_length_of_array_like();
      var toIntegerOrInfinity = require_to_integer_or_infinity();
      var arraySpeciesCreate = require_array_species_create();
      $2({ target: "Array", proto: true }, {
        flat: function flat2() {
          var depthArg = arguments.length ? arguments[0] : void 0;
          var O = toObject(this);
          var sourceLen = lengthOfArrayLike(O);
          var A = arraySpeciesCreate(O, 0);
          A.length = flattenIntoArray(A, O, O, sourceLen, 0, depthArg === void 0 ? 1 : toIntegerOrInfinity(depthArg));
          return A;
        }
      });
    }
  });

  // node_modules/core-js/modules/es.array.flat-map.js
  var require_es_array_flat_map = __commonJS({
    "node_modules/core-js/modules/es.array.flat-map.js"() {
      "use strict";
      var $2 = require_export();
      var flattenIntoArray = require_flatten_into_array();
      var aCallable = require_a_callable();
      var toObject = require_to_object();
      var lengthOfArrayLike = require_length_of_array_like();
      var arraySpeciesCreate = require_array_species_create();
      $2({ target: "Array", proto: true }, {
        flatMap: function flatMap2(callbackfn) {
          var O = toObject(this);
          var sourceLen = lengthOfArrayLike(O);
          var A;
          aCallable(callbackfn);
          A = arraySpeciesCreate(O, 0);
          A.length = flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
          return A;
        }
      });
    }
  });

  // node_modules/core-js/internals/array-for-each.js
  var require_array_for_each = __commonJS({
    "node_modules/core-js/internals/array-for-each.js"(exports, module) {
      "use strict";
      var $forEach = require_array_iteration().forEach;
      var arrayMethodIsStrict = require_array_method_is_strict();
      var STRICT_METHOD = arrayMethodIsStrict("forEach");
      module.exports = !STRICT_METHOD ? function forEach4(callbackfn) {
        return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
      } : [].forEach;
    }
  });

  // node_modules/core-js/modules/es.array.for-each.js
  var require_es_array_for_each = __commonJS({
    "node_modules/core-js/modules/es.array.for-each.js"() {
      "use strict";
      var $2 = require_export();
      var forEach4 = require_array_for_each();
      $2({ target: "Array", proto: true, forced: [].forEach != forEach4 }, {
        forEach: forEach4
      });
    }
  });

  // node_modules/core-js/modules/es.array.index-of.js
  var require_es_array_index_of = __commonJS({
    "node_modules/core-js/modules/es.array.index-of.js"() {
      "use strict";
      var $2 = require_export();
      var uncurryThis = require_function_uncurry_this();
      var $IndexOf = require_array_includes().indexOf;
      var arrayMethodIsStrict = require_array_method_is_strict();
      var un$IndexOf = uncurryThis([].indexOf);
      var NEGATIVE_ZERO = !!un$IndexOf && 1 / un$IndexOf([1], 1, -0) < 0;
      var STRICT_METHOD = arrayMethodIsStrict("indexOf");
      $2({ target: "Array", proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD }, {
        indexOf: function indexOf(searchElement) {
          var fromIndex = arguments.length > 1 ? arguments[1] : void 0;
          return NEGATIVE_ZERO ? un$IndexOf(this, searchElement, fromIndex) || 0 : $IndexOf(this, searchElement, fromIndex);
        }
      });
    }
  });

  // node_modules/core-js/modules/es.array.join.js
  var require_es_array_join = __commonJS({
    "node_modules/core-js/modules/es.array.join.js"() {
      "use strict";
      var $2 = require_export();
      var uncurryThis = require_function_uncurry_this();
      var IndexedObject = require_indexed_object();
      var toIndexedObject = require_to_indexed_object();
      var arrayMethodIsStrict = require_array_method_is_strict();
      var un$Join = uncurryThis([].join);
      var ES3_STRINGS = IndexedObject != Object;
      var STRICT_METHOD = arrayMethodIsStrict("join", ",");
      $2({ target: "Array", proto: true, forced: ES3_STRINGS || !STRICT_METHOD }, {
        join: function join(separator) {
          return un$Join(toIndexedObject(this), separator === void 0 ? "," : separator);
        }
      });
    }
  });

  // node_modules/core-js/internals/array-last-index-of.js
  var require_array_last_index_of = __commonJS({
    "node_modules/core-js/internals/array-last-index-of.js"(exports, module) {
      "use strict";
      var apply = require_function_apply();
      var toIndexedObject = require_to_indexed_object();
      var toIntegerOrInfinity = require_to_integer_or_infinity();
      var lengthOfArrayLike = require_length_of_array_like();
      var arrayMethodIsStrict = require_array_method_is_strict();
      var min = Math.min;
      var $lastIndexOf = [].lastIndexOf;
      var NEGATIVE_ZERO = !!$lastIndexOf && 1 / [1].lastIndexOf(1, -0) < 0;
      var STRICT_METHOD = arrayMethodIsStrict("lastIndexOf");
      var FORCED = NEGATIVE_ZERO || !STRICT_METHOD;
      module.exports = FORCED ? function lastIndexOf(searchElement) {
        if (NEGATIVE_ZERO)
          return apply($lastIndexOf, this, arguments) || 0;
        var O = toIndexedObject(this);
        var length = lengthOfArrayLike(O);
        var index = length - 1;
        if (arguments.length > 1)
          index = min(index, toIntegerOrInfinity(arguments[1]));
        if (index < 0)
          index = length + index;
        for (; index >= 0; index--)
          if (index in O && O[index] === searchElement)
            return index || 0;
        return -1;
      } : $lastIndexOf;
    }
  });

  // node_modules/core-js/modules/es.array.last-index-of.js
  var require_es_array_last_index_of = __commonJS({
    "node_modules/core-js/modules/es.array.last-index-of.js"() {
      var $2 = require_export();
      var lastIndexOf = require_array_last_index_of();
      $2({ target: "Array", proto: true, forced: lastIndexOf !== [].lastIndexOf }, {
        lastIndexOf
      });
    }
  });

  // node_modules/core-js/modules/es.array.map.js
  var require_es_array_map = __commonJS({
    "node_modules/core-js/modules/es.array.map.js"() {
      "use strict";
      var $2 = require_export();
      var $map = require_array_iteration().map;
      var arrayMethodHasSpeciesSupport = require_array_method_has_species_support();
      var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("map");
      $2({ target: "Array", proto: true, forced: !HAS_SPECIES_SUPPORT }, {
        map: function map(callbackfn) {
          return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
        }
      });
    }
  });

  // node_modules/core-js/internals/array-reduce.js
  var require_array_reduce = __commonJS({
    "node_modules/core-js/internals/array-reduce.js"(exports, module) {
      var global2 = require_global();
      var aCallable = require_a_callable();
      var toObject = require_to_object();
      var IndexedObject = require_indexed_object();
      var lengthOfArrayLike = require_length_of_array_like();
      var TypeError2 = global2.TypeError;
      var createMethod = function(IS_RIGHT) {
        return function(that, callbackfn, argumentsLength, memo) {
          aCallable(callbackfn);
          var O = toObject(that);
          var self2 = IndexedObject(O);
          var length = lengthOfArrayLike(O);
          var index = IS_RIGHT ? length - 1 : 0;
          var i = IS_RIGHT ? -1 : 1;
          if (argumentsLength < 2)
            while (true) {
              if (index in self2) {
                memo = self2[index];
                index += i;
                break;
              }
              index += i;
              if (IS_RIGHT ? index < 0 : length <= index) {
                throw TypeError2("Reduce of empty array with no initial value");
              }
            }
          for (; IS_RIGHT ? index >= 0 : length > index; index += i)
            if (index in self2) {
              memo = callbackfn(memo, self2[index], index, O);
            }
          return memo;
        };
      };
      module.exports = {
        // `Array.prototype.reduce` method
        // https://tc39.es/ecma262/#sec-array.prototype.reduce
        left: createMethod(false),
        // `Array.prototype.reduceRight` method
        // https://tc39.es/ecma262/#sec-array.prototype.reduceright
        right: createMethod(true)
      };
    }
  });

  // node_modules/core-js/internals/engine-is-node.js
  var require_engine_is_node = __commonJS({
    "node_modules/core-js/internals/engine-is-node.js"(exports, module) {
      var classof = require_classof_raw();
      var global2 = require_global();
      module.exports = classof(global2.process) == "process";
    }
  });

  // node_modules/core-js/modules/es.array.reduce.js
  var require_es_array_reduce = __commonJS({
    "node_modules/core-js/modules/es.array.reduce.js"() {
      "use strict";
      var $2 = require_export();
      var $reduce = require_array_reduce().left;
      var arrayMethodIsStrict = require_array_method_is_strict();
      var CHROME_VERSION = require_engine_v8_version();
      var IS_NODE = require_engine_is_node();
      var STRICT_METHOD = arrayMethodIsStrict("reduce");
      var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;
      $2({ target: "Array", proto: true, forced: !STRICT_METHOD || CHROME_BUG }, {
        reduce: function reduce3(callbackfn) {
          var length = arguments.length;
          return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : void 0);
        }
      });
    }
  });

  // node_modules/core-js/modules/es.array.reduce-right.js
  var require_es_array_reduce_right = __commonJS({
    "node_modules/core-js/modules/es.array.reduce-right.js"() {
      "use strict";
      var $2 = require_export();
      var $reduceRight = require_array_reduce().right;
      var arrayMethodIsStrict = require_array_method_is_strict();
      var CHROME_VERSION = require_engine_v8_version();
      var IS_NODE = require_engine_is_node();
      var STRICT_METHOD = arrayMethodIsStrict("reduceRight");
      var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;
      $2({ target: "Array", proto: true, forced: !STRICT_METHOD || CHROME_BUG }, {
        reduceRight: function reduceRight(callbackfn) {
          return $reduceRight(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
        }
      });
    }
  });

  // node_modules/core-js/modules/es.array.reverse.js
  var require_es_array_reverse = __commonJS({
    "node_modules/core-js/modules/es.array.reverse.js"() {
      "use strict";
      var $2 = require_export();
      var uncurryThis = require_function_uncurry_this();
      var isArray = require_is_array();
      var un$Reverse = uncurryThis([].reverse);
      var test2 = [1, 2];
      $2({ target: "Array", proto: true, forced: String(test2) === String(test2.reverse()) }, {
        reverse: function reverse() {
          if (isArray(this))
            this.length = this.length;
          return un$Reverse(this);
        }
      });
    }
  });

  // node_modules/core-js/modules/es.array.slice.js
  var require_es_array_slice = __commonJS({
    "node_modules/core-js/modules/es.array.slice.js"() {
      "use strict";
      var $2 = require_export();
      var global2 = require_global();
      var isArray = require_is_array();
      var isConstructor = require_is_constructor();
      var isObject2 = require_is_object();
      var toAbsoluteIndex = require_to_absolute_index();
      var lengthOfArrayLike = require_length_of_array_like();
      var toIndexedObject = require_to_indexed_object();
      var createProperty = require_create_property();
      var wellKnownSymbol = require_well_known_symbol();
      var arrayMethodHasSpeciesSupport = require_array_method_has_species_support();
      var un$Slice = require_array_slice();
      var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("slice");
      var SPECIES = wellKnownSymbol("species");
      var Array2 = global2.Array;
      var max = Math.max;
      $2({ target: "Array", proto: true, forced: !HAS_SPECIES_SUPPORT }, {
        slice: function slice(start, end) {
          var O = toIndexedObject(this);
          var length = lengthOfArrayLike(O);
          var k = toAbsoluteIndex(start, length);
          var fin = toAbsoluteIndex(end === void 0 ? length : end, length);
          var Constructor, result, n;
          if (isArray(O)) {
            Constructor = O.constructor;
            if (isConstructor(Constructor) && (Constructor === Array2 || isArray(Constructor.prototype))) {
              Constructor = void 0;
            } else if (isObject2(Constructor)) {
              Constructor = Constructor[SPECIES];
              if (Constructor === null)
                Constructor = void 0;
            }
            if (Constructor === Array2 || Constructor === void 0) {
              return un$Slice(O, k, fin);
            }
          }
          result = new (Constructor === void 0 ? Array2 : Constructor)(max(fin - k, 0));
          for (n = 0; k < fin; k++, n++)
            if (k in O)
              createProperty(result, n, O[k]);
          result.length = n;
          return result;
        }
      });
    }
  });

  // node_modules/core-js/modules/es.array.some.js
  var require_es_array_some = __commonJS({
    "node_modules/core-js/modules/es.array.some.js"() {
      "use strict";
      var $2 = require_export();
      var $some = require_array_iteration().some;
      var arrayMethodIsStrict = require_array_method_is_strict();
      var STRICT_METHOD = arrayMethodIsStrict("some");
      $2({ target: "Array", proto: true, forced: !STRICT_METHOD }, {
        some: function some(callbackfn) {
          return $some(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
        }
      });
    }
  });

  // node_modules/core-js/internals/array-sort.js
  var require_array_sort = __commonJS({
    "node_modules/core-js/internals/array-sort.js"(exports, module) {
      var arraySlice = require_array_slice();
      var floor = Math.floor;
      var mergeSort = function(array, comparefn) {
        var length = array.length;
        var middle = floor(length / 2);
        return length < 8 ? insertionSort(array, comparefn) : merge5(
          array,
          mergeSort(arraySlice(array, 0, middle), comparefn),
          mergeSort(arraySlice(array, middle), comparefn),
          comparefn
        );
      };
      var insertionSort = function(array, comparefn) {
        var length = array.length;
        var i = 1;
        var element, j;
        while (i < length) {
          j = i;
          element = array[i];
          while (j && comparefn(array[j - 1], element) > 0) {
            array[j] = array[--j];
          }
          if (j !== i++)
            array[j] = element;
        }
        return array;
      };
      var merge5 = function(array, left, right, comparefn) {
        var llength = left.length;
        var rlength = right.length;
        var lindex = 0;
        var rindex = 0;
        while (lindex < llength || rindex < rlength) {
          array[lindex + rindex] = lindex < llength && rindex < rlength ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++] : lindex < llength ? left[lindex++] : right[rindex++];
        }
        return array;
      };
      module.exports = mergeSort;
    }
  });

  // node_modules/core-js/internals/engine-ff-version.js
  var require_engine_ff_version = __commonJS({
    "node_modules/core-js/internals/engine-ff-version.js"(exports, module) {
      var userAgent = require_engine_user_agent();
      var firefox = userAgent.match(/firefox\/(\d+)/i);
      module.exports = !!firefox && +firefox[1];
    }
  });

  // node_modules/core-js/internals/engine-is-ie-or-edge.js
  var require_engine_is_ie_or_edge = __commonJS({
    "node_modules/core-js/internals/engine-is-ie-or-edge.js"(exports, module) {
      var UA = require_engine_user_agent();
      module.exports = /MSIE|Trident/.test(UA);
    }
  });

  // node_modules/core-js/internals/engine-webkit-version.js
  var require_engine_webkit_version = __commonJS({
    "node_modules/core-js/internals/engine-webkit-version.js"(exports, module) {
      var userAgent = require_engine_user_agent();
      var webkit = userAgent.match(/AppleWebKit\/(\d+)\./);
      module.exports = !!webkit && +webkit[1];
    }
  });

  // node_modules/core-js/modules/es.array.sort.js
  var require_es_array_sort = __commonJS({
    "node_modules/core-js/modules/es.array.sort.js"() {
      "use strict";
      var $2 = require_export();
      var uncurryThis = require_function_uncurry_this();
      var aCallable = require_a_callable();
      var toObject = require_to_object();
      var lengthOfArrayLike = require_length_of_array_like();
      var toString4 = require_to_string();
      var fails = require_fails();
      var internalSort = require_array_sort();
      var arrayMethodIsStrict = require_array_method_is_strict();
      var FF = require_engine_ff_version();
      var IE_OR_EDGE = require_engine_is_ie_or_edge();
      var V8 = require_engine_v8_version();
      var WEBKIT = require_engine_webkit_version();
      var test2 = [];
      var un$Sort = uncurryThis(test2.sort);
      var push = uncurryThis(test2.push);
      var FAILS_ON_UNDEFINED = fails(function() {
        test2.sort(void 0);
      });
      var FAILS_ON_NULL = fails(function() {
        test2.sort(null);
      });
      var STRICT_METHOD = arrayMethodIsStrict("sort");
      var STABLE_SORT = !fails(function() {
        if (V8)
          return V8 < 70;
        if (FF && FF > 3)
          return;
        if (IE_OR_EDGE)
          return true;
        if (WEBKIT)
          return WEBKIT < 603;
        var result = "";
        var code, chr, value, index;
        for (code = 65; code < 76; code++) {
          chr = String.fromCharCode(code);
          switch (code) {
            case 66:
            case 69:
            case 70:
            case 72:
              value = 3;
              break;
            case 68:
            case 71:
              value = 4;
              break;
            default:
              value = 2;
          }
          for (index = 0; index < 47; index++) {
            test2.push({ k: chr + index, v: value });
          }
        }
        test2.sort(function(a, b) {
          return b.v - a.v;
        });
        for (index = 0; index < test2.length; index++) {
          chr = test2[index].k.charAt(0);
          if (result.charAt(result.length - 1) !== chr)
            result += chr;
        }
        return result !== "DGBEFHACIJK";
      });
      var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT;
      var getSortCompare = function(comparefn) {
        return function(x, y) {
          if (y === void 0)
            return -1;
          if (x === void 0)
            return 1;
          if (comparefn !== void 0)
            return +comparefn(x, y) || 0;
          return toString4(x) > toString4(y) ? 1 : -1;
        };
      };
      $2({ target: "Array", proto: true, forced: FORCED }, {
        sort: function sort(comparefn) {
          if (comparefn !== void 0)
            aCallable(comparefn);
          var array = toObject(this);
          if (STABLE_SORT)
            return comparefn === void 0 ? un$Sort(array) : un$Sort(array, comparefn);
          var items = [];
          var arrayLength = lengthOfArrayLike(array);
          var itemsLength, index;
          for (index = 0; index < arrayLength; index++) {
            if (index in array)
              push(items, array[index]);
          }
          internalSort(items, getSortCompare(comparefn));
          itemsLength = items.length;
          index = 0;
          while (index < itemsLength)
            array[index] = items[index++];
          while (index < arrayLength)
            delete array[index++];
          return array;
        }
      });
    }
  });

  // node_modules/core-js/internals/set-species.js
  var require_set_species = __commonJS({
    "node_modules/core-js/internals/set-species.js"(exports, module) {
      "use strict";
      var getBuiltIn = require_get_built_in();
      var definePropertyModule = require_object_define_property();
      var wellKnownSymbol = require_well_known_symbol();
      var DESCRIPTORS = require_descriptors();
      var SPECIES = wellKnownSymbol("species");
      module.exports = function(CONSTRUCTOR_NAME) {
        var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
        var defineProperty = definePropertyModule.f;
        if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
          defineProperty(Constructor, SPECIES, {
            configurable: true,
            get: function() {
              return this;
            }
          });
        }
      };
    }
  });

  // node_modules/core-js/modules/es.array.species.js
  var require_es_array_species = __commonJS({
    "node_modules/core-js/modules/es.array.species.js"() {
      var setSpecies = require_set_species();
      setSpecies("Array");
    }
  });

  // node_modules/core-js/modules/es.array.splice.js
  var require_es_array_splice = __commonJS({
    "node_modules/core-js/modules/es.array.splice.js"() {
      "use strict";
      var $2 = require_export();
      var global2 = require_global();
      var toAbsoluteIndex = require_to_absolute_index();
      var toIntegerOrInfinity = require_to_integer_or_infinity();
      var lengthOfArrayLike = require_length_of_array_like();
      var toObject = require_to_object();
      var arraySpeciesCreate = require_array_species_create();
      var createProperty = require_create_property();
      var arrayMethodHasSpeciesSupport = require_array_method_has_species_support();
      var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("splice");
      var TypeError2 = global2.TypeError;
      var max = Math.max;
      var min = Math.min;
      var MAX_SAFE_INTEGER = 9007199254740991;
      var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = "Maximum allowed length exceeded";
      $2({ target: "Array", proto: true, forced: !HAS_SPECIES_SUPPORT }, {
        splice: function splice(start, deleteCount) {
          var O = toObject(this);
          var len = lengthOfArrayLike(O);
          var actualStart = toAbsoluteIndex(start, len);
          var argumentsLength = arguments.length;
          var insertCount, actualDeleteCount, A, k, from4, to;
          if (argumentsLength === 0) {
            insertCount = actualDeleteCount = 0;
          } else if (argumentsLength === 1) {
            insertCount = 0;
            actualDeleteCount = len - actualStart;
          } else {
            insertCount = argumentsLength - 2;
            actualDeleteCount = min(max(toIntegerOrInfinity(deleteCount), 0), len - actualStart);
          }
          if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
            throw TypeError2(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
          }
          A = arraySpeciesCreate(O, actualDeleteCount);
          for (k = 0; k < actualDeleteCount; k++) {
            from4 = actualStart + k;
            if (from4 in O)
              createProperty(A, k, O[from4]);
          }
          A.length = actualDeleteCount;
          if (insertCount < actualDeleteCount) {
            for (k = actualStart; k < len - actualDeleteCount; k++) {
              from4 = k + actualDeleteCount;
              to = k + insertCount;
              if (from4 in O)
                O[to] = O[from4];
              else
                delete O[to];
            }
            for (k = len; k > len - actualDeleteCount + insertCount; k--)
              delete O[k - 1];
          } else if (insertCount > actualDeleteCount) {
            for (k = len - actualDeleteCount; k > actualStart; k--) {
              from4 = k + actualDeleteCount - 1;
              to = k + insertCount - 1;
              if (from4 in O)
                O[to] = O[from4];
              else
                delete O[to];
            }
          }
          for (k = 0; k < insertCount; k++) {
            O[k + actualStart] = arguments[k + 2];
          }
          O.length = len - actualDeleteCount + insertCount;
          return A;
        }
      });
    }
  });

  // node_modules/core-js/modules/es.array.unscopables.flat.js
  var require_es_array_unscopables_flat = __commonJS({
    "node_modules/core-js/modules/es.array.unscopables.flat.js"() {
      var addToUnscopables = require_add_to_unscopables();
      addToUnscopables("flat");
    }
  });

  // node_modules/core-js/modules/es.array.unscopables.flat-map.js
  var require_es_array_unscopables_flat_map = __commonJS({
    "node_modules/core-js/modules/es.array.unscopables.flat-map.js"() {
      var addToUnscopables = require_add_to_unscopables();
      addToUnscopables("flatMap");
    }
  });

  // node_modules/core-js/internals/string-multibyte.js
  var require_string_multibyte = __commonJS({
    "node_modules/core-js/internals/string-multibyte.js"(exports, module) {
      var uncurryThis = require_function_uncurry_this();
      var toIntegerOrInfinity = require_to_integer_or_infinity();
      var toString4 = require_to_string();
      var requireObjectCoercible = require_require_object_coercible();
      var charAt = uncurryThis("".charAt);
      var charCodeAt = uncurryThis("".charCodeAt);
      var stringSlice = uncurryThis("".slice);
      var createMethod = function(CONVERT_TO_STRING) {
        return function($this, pos) {
          var S = toString4(requireObjectCoercible($this));
          var position = toIntegerOrInfinity(pos);
          var size2 = S.length;
          var first, second;
          if (position < 0 || position >= size2)
            return CONVERT_TO_STRING ? "" : void 0;
          first = charCodeAt(S, position);
          return first < 55296 || first > 56319 || position + 1 === size2 || (second = charCodeAt(S, position + 1)) < 56320 || second > 57343 ? CONVERT_TO_STRING ? charAt(S, position) : first : CONVERT_TO_STRING ? stringSlice(S, position, position + 2) : (first - 55296 << 10) + (second - 56320) + 65536;
        };
      };
      module.exports = {
        // `String.prototype.codePointAt` method
        // https://tc39.es/ecma262/#sec-string.prototype.codepointat
        codeAt: createMethod(false),
        // `String.prototype.at` method
        // https://github.com/mathiasbynens/String.prototype.at
        charAt: createMethod(true)
      };
    }
  });

  // node_modules/core-js/modules/es.string.iterator.js
  var require_es_string_iterator = __commonJS({
    "node_modules/core-js/modules/es.string.iterator.js"() {
      "use strict";
      var charAt = require_string_multibyte().charAt;
      var toString4 = require_to_string();
      var InternalStateModule = require_internal_state();
      var defineIterator = require_define_iterator();
      var STRING_ITERATOR = "String Iterator";
      var setInternalState = InternalStateModule.set;
      var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);
      defineIterator(String, "String", function(iterated) {
        setInternalState(this, {
          type: STRING_ITERATOR,
          string: toString4(iterated),
          index: 0
        });
      }, function next() {
        var state = getInternalState(this);
        var string = state.string;
        var index = state.index;
        var point;
        if (index >= string.length)
          return { value: void 0, done: true };
        point = charAt(string, index);
        state.index += point.length;
        return { value: point, done: false };
      });
    }
  });

  // node_modules/core-js/es/array/index.js
  var require_array = __commonJS({
    "node_modules/core-js/es/array/index.js"(exports, module) {
      require_es_array_from();
      require_es_array_is_array();
      require_es_array_of();
      require_es_array_at();
      require_es_array_concat();
      require_es_array_copy_within();
      require_es_array_every();
      require_es_array_fill();
      require_es_array_filter();
      require_es_array_find();
      require_es_array_find_index();
      require_es_array_flat();
      require_es_array_flat_map();
      require_es_array_for_each();
      require_es_array_includes();
      require_es_array_index_of();
      require_es_array_iterator();
      require_es_array_join();
      require_es_array_last_index_of();
      require_es_array_map();
      require_es_array_reduce();
      require_es_array_reduce_right();
      require_es_array_reverse();
      require_es_array_slice();
      require_es_array_some();
      require_es_array_sort();
      require_es_array_species();
      require_es_array_splice();
      require_es_array_unscopables_flat();
      require_es_array_unscopables_flat_map();
      require_es_object_to_string();
      require_es_string_iterator();
      var path = require_path();
      module.exports = path.Array;
    }
  });

  // node_modules/core-js/stable/array/index.js
  var require_array2 = __commonJS({
    "node_modules/core-js/stable/array/index.js"(exports, module) {
      var parent = require_array();
      module.exports = parent;
    }
  });

  // node_modules/core-js/internals/freezing.js
  var require_freezing = __commonJS({
    "node_modules/core-js/internals/freezing.js"(exports, module) {
      var fails = require_fails();
      module.exports = !fails(function() {
        return Object.isExtensible(Object.preventExtensions({}));
      });
    }
  });

  // node_modules/core-js/internals/internal-metadata.js
  var require_internal_metadata = __commonJS({
    "node_modules/core-js/internals/internal-metadata.js"(exports, module) {
      var $2 = require_export();
      var uncurryThis = require_function_uncurry_this();
      var hiddenKeys = require_hidden_keys();
      var isObject2 = require_is_object();
      var hasOwn3 = require_has_own_property();
      var defineProperty = require_object_define_property().f;
      var getOwnPropertyNamesModule = require_object_get_own_property_names();
      var getOwnPropertyNamesExternalModule = require_object_get_own_property_names_external();
      var uid = require_uid();
      var FREEZING = require_freezing();
      var REQUIRED = false;
      var METADATA = uid("meta");
      var id = 0;
      var isExtensible = Object.isExtensible || function() {
        return true;
      };
      var setMetadata = function(it) {
        defineProperty(it, METADATA, { value: {
          objectID: "O" + id++,
          // object ID
          weakData: {}
          // weak collections IDs
        } });
      };
      var fastKey = function(it, create5) {
        if (!isObject2(it))
          return typeof it == "symbol" ? it : (typeof it == "string" ? "S" : "P") + it;
        if (!hasOwn3(it, METADATA)) {
          if (!isExtensible(it))
            return "F";
          if (!create5)
            return "E";
          setMetadata(it);
        }
        return it[METADATA].objectID;
      };
      var getWeakData = function(it, create5) {
        if (!hasOwn3(it, METADATA)) {
          if (!isExtensible(it))
            return true;
          if (!create5)
            return false;
          setMetadata(it);
        }
        return it[METADATA].weakData;
      };
      var onFreeze = function(it) {
        if (FREEZING && REQUIRED && isExtensible(it) && !hasOwn3(it, METADATA))
          setMetadata(it);
        return it;
      };
      var enable = function() {
        meta.enable = function() {
        };
        REQUIRED = true;
        var getOwnPropertyNames = getOwnPropertyNamesModule.f;
        var splice = uncurryThis([].splice);
        var test2 = {};
        test2[METADATA] = 1;
        if (getOwnPropertyNames(test2).length) {
          getOwnPropertyNamesModule.f = function(it) {
            var result = getOwnPropertyNames(it);
            for (var i = 0, length = result.length; i < length; i++) {
              if (result[i] === METADATA) {
                splice(result, i, 1);
                break;
              }
            }
            return result;
          };
          $2({ target: "Object", stat: true, forced: true }, {
            getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
          });
        }
      };
      var meta = module.exports = {
        enable,
        fastKey,
        getWeakData,
        onFreeze
      };
      hiddenKeys[METADATA] = true;
    }
  });

  // node_modules/core-js/internals/iterate.js
  var require_iterate = __commonJS({
    "node_modules/core-js/internals/iterate.js"(exports, module) {
      var global2 = require_global();
      var bind2 = require_function_bind_context();
      var call = require_function_call();
      var anObject = require_an_object();
      var tryToString = require_try_to_string();
      var isArrayIteratorMethod = require_is_array_iterator_method();
      var lengthOfArrayLike = require_length_of_array_like();
      var isPrototypeOf = require_object_is_prototype_of();
      var getIterator = require_get_iterator();
      var getIteratorMethod = require_get_iterator_method();
      var iteratorClose = require_iterator_close();
      var TypeError2 = global2.TypeError;
      var Result = function(stopped, result) {
        this.stopped = stopped;
        this.result = result;
      };
      var ResultPrototype = Result.prototype;
      module.exports = function(iterable, unboundFunction, options) {
        var that = options && options.that;
        var AS_ENTRIES = !!(options && options.AS_ENTRIES);
        var IS_ITERATOR = !!(options && options.IS_ITERATOR);
        var INTERRUPTED = !!(options && options.INTERRUPTED);
        var fn = bind2(unboundFunction, that);
        var iterator, iterFn, index, length, result, next, step;
        var stop = function(condition) {
          if (iterator)
            iteratorClose(iterator, "normal", condition);
          return new Result(true, condition);
        };
        var callFn = function(value) {
          if (AS_ENTRIES) {
            anObject(value);
            return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
          }
          return INTERRUPTED ? fn(value, stop) : fn(value);
        };
        if (IS_ITERATOR) {
          iterator = iterable;
        } else {
          iterFn = getIteratorMethod(iterable);
          if (!iterFn)
            throw TypeError2(tryToString(iterable) + " is not iterable");
          if (isArrayIteratorMethod(iterFn)) {
            for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
              result = callFn(iterable[index]);
              if (result && isPrototypeOf(ResultPrototype, result))
                return result;
            }
            return new Result(false);
          }
          iterator = getIterator(iterable, iterFn);
        }
        next = iterator.next;
        while (!(step = call(next, iterator)).done) {
          try {
            result = callFn(step.value);
          } catch (error) {
            iteratorClose(iterator, "throw", error);
          }
          if (typeof result == "object" && result && isPrototypeOf(ResultPrototype, result))
            return result;
        }
        return new Result(false);
      };
    }
  });

  // node_modules/core-js/internals/an-instance.js
  var require_an_instance = __commonJS({
    "node_modules/core-js/internals/an-instance.js"(exports, module) {
      var global2 = require_global();
      var isPrototypeOf = require_object_is_prototype_of();
      var TypeError2 = global2.TypeError;
      module.exports = function(it, Prototype) {
        if (isPrototypeOf(Prototype, it))
          return it;
        throw TypeError2("Incorrect invocation");
      };
    }
  });

  // node_modules/core-js/internals/inherit-if-required.js
  var require_inherit_if_required = __commonJS({
    "node_modules/core-js/internals/inherit-if-required.js"(exports, module) {
      var isCallable = require_is_callable();
      var isObject2 = require_is_object();
      var setPrototypeOf2 = require_object_set_prototype_of();
      module.exports = function($this, dummy, Wrapper) {
        var NewTarget, NewTargetPrototype;
        if (
          // it can work only with native `setPrototypeOf`
          setPrototypeOf2 && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
          isCallable(NewTarget = dummy.constructor) && NewTarget !== Wrapper && isObject2(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype
        )
          setPrototypeOf2($this, NewTargetPrototype);
        return $this;
      };
    }
  });

  // node_modules/core-js/internals/collection.js
  var require_collection = __commonJS({
    "node_modules/core-js/internals/collection.js"(exports, module) {
      "use strict";
      var $2 = require_export();
      var global2 = require_global();
      var uncurryThis = require_function_uncurry_this();
      var isForced = require_is_forced();
      var redefine = require_redefine();
      var InternalMetadataModule = require_internal_metadata();
      var iterate = require_iterate();
      var anInstance = require_an_instance();
      var isCallable = require_is_callable();
      var isObject2 = require_is_object();
      var fails = require_fails();
      var checkCorrectnessOfIteration = require_check_correctness_of_iteration();
      var setToStringTag = require_set_to_string_tag();
      var inheritIfRequired = require_inherit_if_required();
      module.exports = function(CONSTRUCTOR_NAME, wrapper, common) {
        var IS_MAP = CONSTRUCTOR_NAME.indexOf("Map") !== -1;
        var IS_WEAK = CONSTRUCTOR_NAME.indexOf("Weak") !== -1;
        var ADDER = IS_MAP ? "set" : "add";
        var NativeConstructor = global2[CONSTRUCTOR_NAME];
        var NativePrototype = NativeConstructor && NativeConstructor.prototype;
        var Constructor = NativeConstructor;
        var exported = {};
        var fixMethod = function(KEY) {
          var uncurriedNativeMethod = uncurryThis(NativePrototype[KEY]);
          redefine(
            NativePrototype,
            KEY,
            KEY == "add" ? function add(value) {
              uncurriedNativeMethod(this, value === 0 ? 0 : value);
              return this;
            } : KEY == "delete" ? function(key) {
              return IS_WEAK && !isObject2(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
            } : KEY == "get" ? function get8(key) {
              return IS_WEAK && !isObject2(key) ? void 0 : uncurriedNativeMethod(this, key === 0 ? 0 : key);
            } : KEY == "has" ? function has(key) {
              return IS_WEAK && !isObject2(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
            } : function set3(key, value) {
              uncurriedNativeMethod(this, key === 0 ? 0 : key, value);
              return this;
            }
          );
        };
        var REPLACE = isForced(
          CONSTRUCTOR_NAME,
          !isCallable(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails(function() {
            new NativeConstructor().entries().next();
          }))
        );
        if (REPLACE) {
          Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
          InternalMetadataModule.enable();
        } else if (isForced(CONSTRUCTOR_NAME, true)) {
          var instance = new Constructor();
          var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
          var THROWS_ON_PRIMITIVES = fails(function() {
            instance.has(1);
          });
          var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function(iterable) {
            new NativeConstructor(iterable);
          });
          var BUGGY_ZERO = !IS_WEAK && fails(function() {
            var $instance = new NativeConstructor();
            var index = 5;
            while (index--)
              $instance[ADDER](index, index);
            return !$instance.has(-0);
          });
          if (!ACCEPT_ITERABLES) {
            Constructor = wrapper(function(dummy, iterable) {
              anInstance(dummy, NativePrototype);
              var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
              if (iterable != void 0)
                iterate(iterable, that[ADDER], { that, AS_ENTRIES: IS_MAP });
              return that;
            });
            Constructor.prototype = NativePrototype;
            NativePrototype.constructor = Constructor;
          }
          if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
            fixMethod("delete");
            fixMethod("has");
            IS_MAP && fixMethod("get");
          }
          if (BUGGY_ZERO || HASNT_CHAINING)
            fixMethod(ADDER);
          if (IS_WEAK && NativePrototype.clear)
            delete NativePrototype.clear;
        }
        exported[CONSTRUCTOR_NAME] = Constructor;
        $2({ global: true, forced: Constructor != NativeConstructor }, exported);
        setToStringTag(Constructor, CONSTRUCTOR_NAME);
        if (!IS_WEAK)
          common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);
        return Constructor;
      };
    }
  });

  // node_modules/core-js/internals/redefine-all.js
  var require_redefine_all = __commonJS({
    "node_modules/core-js/internals/redefine-all.js"(exports, module) {
      var redefine = require_redefine();
      module.exports = function(target, src, options) {
        for (var key in src)
          redefine(target, key, src[key], options);
        return target;
      };
    }
  });

  // node_modules/core-js/internals/collection-strong.js
  var require_collection_strong = __commonJS({
    "node_modules/core-js/internals/collection-strong.js"(exports, module) {
      "use strict";
      var defineProperty = require_object_define_property().f;
      var create5 = require_object_create();
      var redefineAll = require_redefine_all();
      var bind2 = require_function_bind_context();
      var anInstance = require_an_instance();
      var iterate = require_iterate();
      var defineIterator = require_define_iterator();
      var setSpecies = require_set_species();
      var DESCRIPTORS = require_descriptors();
      var fastKey = require_internal_metadata().fastKey;
      var InternalStateModule = require_internal_state();
      var setInternalState = InternalStateModule.set;
      var internalStateGetterFor = InternalStateModule.getterFor;
      module.exports = {
        getConstructor: function(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
          var Constructor = wrapper(function(that, iterable) {
            anInstance(that, Prototype);
            setInternalState(that, {
              type: CONSTRUCTOR_NAME,
              index: create5(null),
              first: void 0,
              last: void 0,
              size: 0
            });
            if (!DESCRIPTORS)
              that.size = 0;
            if (iterable != void 0)
              iterate(iterable, that[ADDER], { that, AS_ENTRIES: IS_MAP });
          });
          var Prototype = Constructor.prototype;
          var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);
          var define2 = function(that, key, value) {
            var state = getInternalState(that);
            var entry = getEntry(that, key);
            var previous, index;
            if (entry) {
              entry.value = value;
            } else {
              state.last = entry = {
                index: index = fastKey(key, true),
                key,
                value,
                previous: previous = state.last,
                next: void 0,
                removed: false
              };
              if (!state.first)
                state.first = entry;
              if (previous)
                previous.next = entry;
              if (DESCRIPTORS)
                state.size++;
              else
                that.size++;
              if (index !== "F")
                state.index[index] = entry;
            }
            return that;
          };
          var getEntry = function(that, key) {
            var state = getInternalState(that);
            var index = fastKey(key);
            var entry;
            if (index !== "F")
              return state.index[index];
            for (entry = state.first; entry; entry = entry.next) {
              if (entry.key == key)
                return entry;
            }
          };
          redefineAll(Prototype, {
            // `{ Map, Set }.prototype.clear()` methods
            // https://tc39.es/ecma262/#sec-map.prototype.clear
            // https://tc39.es/ecma262/#sec-set.prototype.clear
            clear: function clear() {
              var that = this;
              var state = getInternalState(that);
              var data = state.index;
              var entry = state.first;
              while (entry) {
                entry.removed = true;
                if (entry.previous)
                  entry.previous = entry.previous.next = void 0;
                delete data[entry.index];
                entry = entry.next;
              }
              state.first = state.last = void 0;
              if (DESCRIPTORS)
                state.size = 0;
              else
                that.size = 0;
            },
            // `{ Map, Set }.prototype.delete(key)` methods
            // https://tc39.es/ecma262/#sec-map.prototype.delete
            // https://tc39.es/ecma262/#sec-set.prototype.delete
            "delete": function(key) {
              var that = this;
              var state = getInternalState(that);
              var entry = getEntry(that, key);
              if (entry) {
                var next = entry.next;
                var prev = entry.previous;
                delete state.index[entry.index];
                entry.removed = true;
                if (prev)
                  prev.next = next;
                if (next)
                  next.previous = prev;
                if (state.first == entry)
                  state.first = next;
                if (state.last == entry)
                  state.last = prev;
                if (DESCRIPTORS)
                  state.size--;
                else
                  that.size--;
              }
              return !!entry;
            },
            // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
            // https://tc39.es/ecma262/#sec-map.prototype.foreach
            // https://tc39.es/ecma262/#sec-set.prototype.foreach
            forEach: function forEach4(callbackfn) {
              var state = getInternalState(this);
              var boundFunction = bind2(callbackfn, arguments.length > 1 ? arguments[1] : void 0);
              var entry;
              while (entry = entry ? entry.next : state.first) {
                boundFunction(entry.value, entry.key, this);
                while (entry && entry.removed)
                  entry = entry.previous;
              }
            },
            // `{ Map, Set}.prototype.has(key)` methods
            // https://tc39.es/ecma262/#sec-map.prototype.has
            // https://tc39.es/ecma262/#sec-set.prototype.has
            has: function has(key) {
              return !!getEntry(this, key);
            }
          });
          redefineAll(Prototype, IS_MAP ? {
            // `Map.prototype.get(key)` method
            // https://tc39.es/ecma262/#sec-map.prototype.get
            get: function get8(key) {
              var entry = getEntry(this, key);
              return entry && entry.value;
            },
            // `Map.prototype.set(key, value)` method
            // https://tc39.es/ecma262/#sec-map.prototype.set
            set: function set3(key, value) {
              return define2(this, key === 0 ? 0 : key, value);
            }
          } : {
            // `Set.prototype.add(value)` method
            // https://tc39.es/ecma262/#sec-set.prototype.add
            add: function add(value) {
              return define2(this, value = value === 0 ? 0 : value, value);
            }
          });
          if (DESCRIPTORS)
            defineProperty(Prototype, "size", {
              get: function() {
                return getInternalState(this).size;
              }
            });
          return Constructor;
        },
        setStrong: function(Constructor, CONSTRUCTOR_NAME, IS_MAP) {
          var ITERATOR_NAME = CONSTRUCTOR_NAME + " Iterator";
          var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
          var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
          defineIterator(Constructor, CONSTRUCTOR_NAME, function(iterated, kind) {
            setInternalState(this, {
              type: ITERATOR_NAME,
              target: iterated,
              state: getInternalCollectionState(iterated),
              kind,
              last: void 0
            });
          }, function() {
            var state = getInternalIteratorState(this);
            var kind = state.kind;
            var entry = state.last;
            while (entry && entry.removed)
              entry = entry.previous;
            if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
              state.target = void 0;
              return { value: void 0, done: true };
            }
            if (kind == "keys")
              return { value: entry.key, done: false };
            if (kind == "values")
              return { value: entry.value, done: false };
            return { value: [entry.key, entry.value], done: false };
          }, IS_MAP ? "entries" : "values", !IS_MAP, true);
          setSpecies(CONSTRUCTOR_NAME);
        }
      };
    }
  });

  // node_modules/core-js/modules/es.map.js
  var require_es_map = __commonJS({
    "node_modules/core-js/modules/es.map.js"() {
      "use strict";
      var collection = require_collection();
      var collectionStrong = require_collection_strong();
      collection("Map", function(init2) {
        return function Map2() {
          return init2(this, arguments.length ? arguments[0] : void 0);
        };
      }, collectionStrong);
    }
  });

  // node_modules/core-js/internals/native-promise-constructor.js
  var require_native_promise_constructor = __commonJS({
    "node_modules/core-js/internals/native-promise-constructor.js"(exports, module) {
      var global2 = require_global();
      module.exports = global2.Promise;
    }
  });

  // node_modules/core-js/internals/a-constructor.js
  var require_a_constructor = __commonJS({
    "node_modules/core-js/internals/a-constructor.js"(exports, module) {
      var global2 = require_global();
      var isConstructor = require_is_constructor();
      var tryToString = require_try_to_string();
      var TypeError2 = global2.TypeError;
      module.exports = function(argument) {
        if (isConstructor(argument))
          return argument;
        throw TypeError2(tryToString(argument) + " is not a constructor");
      };
    }
  });

  // node_modules/core-js/internals/species-constructor.js
  var require_species_constructor = __commonJS({
    "node_modules/core-js/internals/species-constructor.js"(exports, module) {
      var anObject = require_an_object();
      var aConstructor = require_a_constructor();
      var wellKnownSymbol = require_well_known_symbol();
      var SPECIES = wellKnownSymbol("species");
      module.exports = function(O, defaultConstructor) {
        var C = anObject(O).constructor;
        var S;
        return C === void 0 || (S = anObject(C)[SPECIES]) == void 0 ? defaultConstructor : aConstructor(S);
      };
    }
  });

  // node_modules/core-js/internals/engine-is-ios.js
  var require_engine_is_ios = __commonJS({
    "node_modules/core-js/internals/engine-is-ios.js"(exports, module) {
      var userAgent = require_engine_user_agent();
      module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);
    }
  });

  // node_modules/core-js/internals/task.js
  var require_task = __commonJS({
    "node_modules/core-js/internals/task.js"(exports, module) {
      var global2 = require_global();
      var apply = require_function_apply();
      var bind2 = require_function_bind_context();
      var isCallable = require_is_callable();
      var hasOwn3 = require_has_own_property();
      var fails = require_fails();
      var html = require_html();
      var arraySlice = require_array_slice();
      var createElement = require_document_create_element();
      var IS_IOS = require_engine_is_ios();
      var IS_NODE = require_engine_is_node();
      var set3 = global2.setImmediate;
      var clear = global2.clearImmediate;
      var process2 = global2.process;
      var Dispatch = global2.Dispatch;
      var Function2 = global2.Function;
      var MessageChannel = global2.MessageChannel;
      var String2 = global2.String;
      var counter = 0;
      var queue = {};
      var ONREADYSTATECHANGE = "onreadystatechange";
      var location;
      var defer;
      var channel;
      var port;
      try {
        location = global2.location;
      } catch (error) {
      }
      var run = function(id) {
        if (hasOwn3(queue, id)) {
          var fn = queue[id];
          delete queue[id];
          fn();
        }
      };
      var runner = function(id) {
        return function() {
          run(id);
        };
      };
      var listener = function(event) {
        run(event.data);
      };
      var post = function(id) {
        global2.postMessage(String2(id), location.protocol + "//" + location.host);
      };
      if (!set3 || !clear) {
        set3 = function setImmediate2(fn) {
          var args = arraySlice(arguments, 1);
          queue[++counter] = function() {
            apply(isCallable(fn) ? fn : Function2(fn), void 0, args);
          };
          defer(counter);
          return counter;
        };
        clear = function clearImmediate(id) {
          delete queue[id];
        };
        if (IS_NODE) {
          defer = function(id) {
            process2.nextTick(runner(id));
          };
        } else if (Dispatch && Dispatch.now) {
          defer = function(id) {
            Dispatch.now(runner(id));
          };
        } else if (MessageChannel && !IS_IOS) {
          channel = new MessageChannel();
          port = channel.port2;
          channel.port1.onmessage = listener;
          defer = bind2(port.postMessage, port);
        } else if (global2.addEventListener && isCallable(global2.postMessage) && !global2.importScripts && location && location.protocol !== "file:" && !fails(post)) {
          defer = post;
          global2.addEventListener("message", listener, false);
        } else if (ONREADYSTATECHANGE in createElement("script")) {
          defer = function(id) {
            html.appendChild(createElement("script"))[ONREADYSTATECHANGE] = function() {
              html.removeChild(this);
              run(id);
            };
          };
        } else {
          defer = function(id) {
            setTimeout(runner(id), 0);
          };
        }
      }
      module.exports = {
        set: set3,
        clear
      };
    }
  });

  // node_modules/core-js/internals/engine-is-ios-pebble.js
  var require_engine_is_ios_pebble = __commonJS({
    "node_modules/core-js/internals/engine-is-ios-pebble.js"(exports, module) {
      var userAgent = require_engine_user_agent();
      var global2 = require_global();
      module.exports = /ipad|iphone|ipod/i.test(userAgent) && global2.Pebble !== void 0;
    }
  });

  // node_modules/core-js/internals/engine-is-webos-webkit.js
  var require_engine_is_webos_webkit = __commonJS({
    "node_modules/core-js/internals/engine-is-webos-webkit.js"(exports, module) {
      var userAgent = require_engine_user_agent();
      module.exports = /web0s(?!.*chrome)/i.test(userAgent);
    }
  });

  // node_modules/core-js/internals/microtask.js
  var require_microtask = __commonJS({
    "node_modules/core-js/internals/microtask.js"(exports, module) {
      var global2 = require_global();
      var bind2 = require_function_bind_context();
      var getOwnPropertyDescriptor = require_object_get_own_property_descriptor().f;
      var macrotask = require_task().set;
      var IS_IOS = require_engine_is_ios();
      var IS_IOS_PEBBLE = require_engine_is_ios_pebble();
      var IS_WEBOS_WEBKIT = require_engine_is_webos_webkit();
      var IS_NODE = require_engine_is_node();
      var MutationObserver = global2.MutationObserver || global2.WebKitMutationObserver;
      var document2 = global2.document;
      var process2 = global2.process;
      var Promise3 = global2.Promise;
      var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global2, "queueMicrotask");
      var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;
      var flush;
      var head;
      var last;
      var notify;
      var toggle;
      var node;
      var promise;
      var then;
      if (!queueMicrotask) {
        flush = function() {
          var parent, fn;
          if (IS_NODE && (parent = process2.domain))
            parent.exit();
          while (head) {
            fn = head.fn;
            head = head.next;
            try {
              fn();
            } catch (error) {
              if (head)
                notify();
              else
                last = void 0;
              throw error;
            }
          }
          last = void 0;
          if (parent)
            parent.enter();
        };
        if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document2) {
          toggle = true;
          node = document2.createTextNode("");
          new MutationObserver(flush).observe(node, { characterData: true });
          notify = function() {
            node.data = toggle = !toggle;
          };
        } else if (!IS_IOS_PEBBLE && Promise3 && Promise3.resolve) {
          promise = Promise3.resolve(void 0);
          promise.constructor = Promise3;
          then = bind2(promise.then, promise);
          notify = function() {
            then(flush);
          };
        } else if (IS_NODE) {
          notify = function() {
            process2.nextTick(flush);
          };
        } else {
          macrotask = bind2(macrotask, global2);
          notify = function() {
            macrotask(flush);
          };
        }
      }
      module.exports = queueMicrotask || function(fn) {
        var task = { fn, next: void 0 };
        if (last)
          last.next = task;
        if (!head) {
          head = task;
          notify();
        }
        last = task;
      };
    }
  });

  // node_modules/core-js/internals/new-promise-capability.js
  var require_new_promise_capability = __commonJS({
    "node_modules/core-js/internals/new-promise-capability.js"(exports, module) {
      "use strict";
      var aCallable = require_a_callable();
      var PromiseCapability = function(C) {
        var resolve2, reject2;
        this.promise = new C(function($$resolve, $$reject) {
          if (resolve2 !== void 0 || reject2 !== void 0)
            throw TypeError("Bad Promise constructor");
          resolve2 = $$resolve;
          reject2 = $$reject;
        });
        this.resolve = aCallable(resolve2);
        this.reject = aCallable(reject2);
      };
      module.exports.f = function(C) {
        return new PromiseCapability(C);
      };
    }
  });

  // node_modules/core-js/internals/promise-resolve.js
  var require_promise_resolve = __commonJS({
    "node_modules/core-js/internals/promise-resolve.js"(exports, module) {
      var anObject = require_an_object();
      var isObject2 = require_is_object();
      var newPromiseCapability = require_new_promise_capability();
      module.exports = function(C, x) {
        anObject(C);
        if (isObject2(x) && x.constructor === C)
          return x;
        var promiseCapability = newPromiseCapability.f(C);
        var resolve2 = promiseCapability.resolve;
        resolve2(x);
        return promiseCapability.promise;
      };
    }
  });

  // node_modules/core-js/internals/host-report-errors.js
  var require_host_report_errors = __commonJS({
    "node_modules/core-js/internals/host-report-errors.js"(exports, module) {
      var global2 = require_global();
      module.exports = function(a, b) {
        var console2 = global2.console;
        if (console2 && console2.error) {
          arguments.length == 1 ? console2.error(a) : console2.error(a, b);
        }
      };
    }
  });

  // node_modules/core-js/internals/perform.js
  var require_perform = __commonJS({
    "node_modules/core-js/internals/perform.js"(exports, module) {
      module.exports = function(exec) {
        try {
          return { error: false, value: exec() };
        } catch (error) {
          return { error: true, value: error };
        }
      };
    }
  });

  // node_modules/core-js/internals/engine-is-browser.js
  var require_engine_is_browser = __commonJS({
    "node_modules/core-js/internals/engine-is-browser.js"(exports, module) {
      module.exports = typeof window == "object";
    }
  });

  // node_modules/core-js/modules/es.promise.js
  var require_es_promise = __commonJS({
    "node_modules/core-js/modules/es.promise.js"() {
      "use strict";
      var $2 = require_export();
      var IS_PURE = require_is_pure();
      var global2 = require_global();
      var getBuiltIn = require_get_built_in();
      var call = require_function_call();
      var NativePromise = require_native_promise_constructor();
      var redefine = require_redefine();
      var redefineAll = require_redefine_all();
      var setPrototypeOf2 = require_object_set_prototype_of();
      var setToStringTag = require_set_to_string_tag();
      var setSpecies = require_set_species();
      var aCallable = require_a_callable();
      var isCallable = require_is_callable();
      var isObject2 = require_is_object();
      var anInstance = require_an_instance();
      var inspectSource = require_inspect_source();
      var iterate = require_iterate();
      var checkCorrectnessOfIteration = require_check_correctness_of_iteration();
      var speciesConstructor = require_species_constructor();
      var task = require_task().set;
      var microtask = require_microtask();
      var promiseResolve = require_promise_resolve();
      var hostReportErrors = require_host_report_errors();
      var newPromiseCapabilityModule = require_new_promise_capability();
      var perform = require_perform();
      var InternalStateModule = require_internal_state();
      var isForced = require_is_forced();
      var wellKnownSymbol = require_well_known_symbol();
      var IS_BROWSER = require_engine_is_browser();
      var IS_NODE = require_engine_is_node();
      var V8_VERSION = require_engine_v8_version();
      var SPECIES = wellKnownSymbol("species");
      var PROMISE = "Promise";
      var getInternalState = InternalStateModule.get;
      var setInternalState = InternalStateModule.set;
      var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
      var NativePromisePrototype = NativePromise && NativePromise.prototype;
      var PromiseConstructor = NativePromise;
      var PromisePrototype = NativePromisePrototype;
      var TypeError2 = global2.TypeError;
      var document2 = global2.document;
      var process2 = global2.process;
      var newPromiseCapability = newPromiseCapabilityModule.f;
      var newGenericPromiseCapability = newPromiseCapability;
      var DISPATCH_EVENT = !!(document2 && document2.createEvent && global2.dispatchEvent);
      var NATIVE_REJECTION_EVENT = isCallable(global2.PromiseRejectionEvent);
      var UNHANDLED_REJECTION = "unhandledrejection";
      var REJECTION_HANDLED = "rejectionhandled";
      var PENDING = 0;
      var FULFILLED = 1;
      var REJECTED = 2;
      var HANDLED = 1;
      var UNHANDLED = 2;
      var SUBCLASSING = false;
      var Internal;
      var OwnPromiseCapability;
      var PromiseWrapper;
      var nativeThen;
      var FORCED = isForced(PROMISE, function() {
        var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(PromiseConstructor);
        var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(PromiseConstructor);
        if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66)
          return true;
        if (IS_PURE && !PromisePrototype["finally"])
          return true;
        if (V8_VERSION >= 51 && /native code/.test(PROMISE_CONSTRUCTOR_SOURCE))
          return false;
        var promise = new PromiseConstructor(function(resolve2) {
          resolve2(1);
        });
        var FakePromise = function(exec) {
          exec(function() {
          }, function() {
          });
        };
        var constructor = promise.constructor = {};
        constructor[SPECIES] = FakePromise;
        SUBCLASSING = promise.then(function() {
        }) instanceof FakePromise;
        if (!SUBCLASSING)
          return true;
        return !GLOBAL_CORE_JS_PROMISE && IS_BROWSER && !NATIVE_REJECTION_EVENT;
      });
      var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function(iterable) {
        PromiseConstructor.all(iterable)["catch"](function() {
        });
      });
      var isThenable = function(it) {
        var then;
        return isObject2(it) && isCallable(then = it.then) ? then : false;
      };
      var notify = function(state, isReject) {
        if (state.notified)
          return;
        state.notified = true;
        var chain = state.reactions;
        microtask(function() {
          var value = state.value;
          var ok = state.state == FULFILLED;
          var index = 0;
          while (chain.length > index) {
            var reaction = chain[index++];
            var handler = ok ? reaction.ok : reaction.fail;
            var resolve2 = reaction.resolve;
            var reject2 = reaction.reject;
            var domain = reaction.domain;
            var result, then, exited;
            try {
              if (handler) {
                if (!ok) {
                  if (state.rejection === UNHANDLED)
                    onHandleUnhandled(state);
                  state.rejection = HANDLED;
                }
                if (handler === true)
                  result = value;
                else {
                  if (domain)
                    domain.enter();
                  result = handler(value);
                  if (domain) {
                    domain.exit();
                    exited = true;
                  }
                }
                if (result === reaction.promise) {
                  reject2(TypeError2("Promise-chain cycle"));
                } else if (then = isThenable(result)) {
                  call(then, result, resolve2, reject2);
                } else
                  resolve2(result);
              } else
                reject2(value);
            } catch (error) {
              if (domain && !exited)
                domain.exit();
              reject2(error);
            }
          }
          state.reactions = [];
          state.notified = false;
          if (isReject && !state.rejection)
            onUnhandled(state);
        });
      };
      var dispatchEvent = function(name, promise, reason) {
        var event, handler;
        if (DISPATCH_EVENT) {
          event = document2.createEvent("Event");
          event.promise = promise;
          event.reason = reason;
          event.initEvent(name, false, true);
          global2.dispatchEvent(event);
        } else
          event = { promise, reason };
        if (!NATIVE_REJECTION_EVENT && (handler = global2["on" + name]))
          handler(event);
        else if (name === UNHANDLED_REJECTION)
          hostReportErrors("Unhandled promise rejection", reason);
      };
      var onUnhandled = function(state) {
        call(task, global2, function() {
          var promise = state.facade;
          var value = state.value;
          var IS_UNHANDLED = isUnhandled(state);
          var result;
          if (IS_UNHANDLED) {
            result = perform(function() {
              if (IS_NODE) {
                process2.emit("unhandledRejection", value, promise);
              } else
                dispatchEvent(UNHANDLED_REJECTION, promise, value);
            });
            state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
            if (result.error)
              throw result.value;
          }
        });
      };
      var isUnhandled = function(state) {
        return state.rejection !== HANDLED && !state.parent;
      };
      var onHandleUnhandled = function(state) {
        call(task, global2, function() {
          var promise = state.facade;
          if (IS_NODE) {
            process2.emit("rejectionHandled", promise);
          } else
            dispatchEvent(REJECTION_HANDLED, promise, state.value);
        });
      };
      var bind2 = function(fn, state, unwrap) {
        return function(value) {
          fn(state, value, unwrap);
        };
      };
      var internalReject = function(state, value, unwrap) {
        if (state.done)
          return;
        state.done = true;
        if (unwrap)
          state = unwrap;
        state.value = value;
        state.state = REJECTED;
        notify(state, true);
      };
      var internalResolve = function(state, value, unwrap) {
        if (state.done)
          return;
        state.done = true;
        if (unwrap)
          state = unwrap;
        try {
          if (state.facade === value)
            throw TypeError2("Promise can't be resolved itself");
          var then = isThenable(value);
          if (then) {
            microtask(function() {
              var wrapper = { done: false };
              try {
                call(
                  then,
                  value,
                  bind2(internalResolve, wrapper, state),
                  bind2(internalReject, wrapper, state)
                );
              } catch (error) {
                internalReject(wrapper, error, state);
              }
            });
          } else {
            state.value = value;
            state.state = FULFILLED;
            notify(state, false);
          }
        } catch (error) {
          internalReject({ done: false }, error, state);
        }
      };
      if (FORCED) {
        PromiseConstructor = function Promise3(executor) {
          anInstance(this, PromisePrototype);
          aCallable(executor);
          call(Internal, this);
          var state = getInternalState(this);
          try {
            executor(bind2(internalResolve, state), bind2(internalReject, state));
          } catch (error) {
            internalReject(state, error);
          }
        };
        PromisePrototype = PromiseConstructor.prototype;
        Internal = function Promise3(executor) {
          setInternalState(this, {
            type: PROMISE,
            done: false,
            notified: false,
            parent: false,
            reactions: [],
            rejection: false,
            state: PENDING,
            value: void 0
          });
        };
        Internal.prototype = redefineAll(PromisePrototype, {
          // `Promise.prototype.then` method
          // https://tc39.es/ecma262/#sec-promise.prototype.then
          then: function then(onFulfilled, onRejected) {
            var state = getInternalPromiseState(this);
            var reactions = state.reactions;
            var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
            reaction.ok = isCallable(onFulfilled) ? onFulfilled : true;
            reaction.fail = isCallable(onRejected) && onRejected;
            reaction.domain = IS_NODE ? process2.domain : void 0;
            state.parent = true;
            reactions[reactions.length] = reaction;
            if (state.state != PENDING)
              notify(state, false);
            return reaction.promise;
          },
          // `Promise.prototype.catch` method
          // https://tc39.es/ecma262/#sec-promise.prototype.catch
          "catch": function(onRejected) {
            return this.then(void 0, onRejected);
          }
        });
        OwnPromiseCapability = function() {
          var promise = new Internal();
          var state = getInternalState(promise);
          this.promise = promise;
          this.resolve = bind2(internalResolve, state);
          this.reject = bind2(internalReject, state);
        };
        newPromiseCapabilityModule.f = newPromiseCapability = function(C) {
          return C === PromiseConstructor || C === PromiseWrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
        };
        if (!IS_PURE && isCallable(NativePromise) && NativePromisePrototype !== Object.prototype) {
          nativeThen = NativePromisePrototype.then;
          if (!SUBCLASSING) {
            redefine(NativePromisePrototype, "then", function then(onFulfilled, onRejected) {
              var that = this;
              return new PromiseConstructor(function(resolve2, reject2) {
                call(nativeThen, that, resolve2, reject2);
              }).then(onFulfilled, onRejected);
            }, { unsafe: true });
            redefine(NativePromisePrototype, "catch", PromisePrototype["catch"], { unsafe: true });
          }
          try {
            delete NativePromisePrototype.constructor;
          } catch (error) {
          }
          if (setPrototypeOf2) {
            setPrototypeOf2(NativePromisePrototype, PromisePrototype);
          }
        }
      }
      $2({ global: true, wrap: true, forced: FORCED }, {
        Promise: PromiseConstructor
      });
      setToStringTag(PromiseConstructor, PROMISE, false, true);
      setSpecies(PROMISE);
      PromiseWrapper = getBuiltIn(PROMISE);
      $2({ target: PROMISE, stat: true, forced: FORCED }, {
        // `Promise.reject` method
        // https://tc39.es/ecma262/#sec-promise.reject
        reject: function reject2(r) {
          var capability = newPromiseCapability(this);
          call(capability.reject, void 0, r);
          return capability.promise;
        }
      });
      $2({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
        // `Promise.resolve` method
        // https://tc39.es/ecma262/#sec-promise.resolve
        resolve: function resolve2(x) {
          return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
        }
      });
      $2({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
        // `Promise.all` method
        // https://tc39.es/ecma262/#sec-promise.all
        all: function all(iterable) {
          var C = this;
          var capability = newPromiseCapability(C);
          var resolve2 = capability.resolve;
          var reject2 = capability.reject;
          var result = perform(function() {
            var $promiseResolve = aCallable(C.resolve);
            var values2 = [];
            var counter = 0;
            var remaining = 1;
            iterate(iterable, function(promise) {
              var index = counter++;
              var alreadyCalled = false;
              remaining++;
              call($promiseResolve, C, promise).then(function(value) {
                if (alreadyCalled)
                  return;
                alreadyCalled = true;
                values2[index] = value;
                --remaining || resolve2(values2);
              }, reject2);
            });
            --remaining || resolve2(values2);
          });
          if (result.error)
            reject2(result.value);
          return capability.promise;
        },
        // `Promise.race` method
        // https://tc39.es/ecma262/#sec-promise.race
        race: function race(iterable) {
          var C = this;
          var capability = newPromiseCapability(C);
          var reject2 = capability.reject;
          var result = perform(function() {
            var $promiseResolve = aCallable(C.resolve);
            iterate(iterable, function(promise) {
              call($promiseResolve, C, promise).then(capability.resolve, reject2);
            });
          });
          if (result.error)
            reject2(result.value);
          return capability.promise;
        }
      });
    }
  });

  // node_modules/core-js/internals/async-iterator-prototype.js
  var require_async_iterator_prototype = __commonJS({
    "node_modules/core-js/internals/async-iterator-prototype.js"(exports, module) {
      var global2 = require_global();
      var shared = require_shared_store();
      var isCallable = require_is_callable();
      var create5 = require_object_create();
      var getPrototypeOf = require_object_get_prototype_of();
      var redefine = require_redefine();
      var wellKnownSymbol = require_well_known_symbol();
      var IS_PURE = require_is_pure();
      var USE_FUNCTION_CONSTRUCTOR = "USE_FUNCTION_CONSTRUCTOR";
      var ASYNC_ITERATOR = wellKnownSymbol("asyncIterator");
      var AsyncIterator = global2.AsyncIterator;
      var PassedAsyncIteratorPrototype = shared.AsyncIteratorPrototype;
      var AsyncIteratorPrototype;
      var prototype2;
      if (PassedAsyncIteratorPrototype) {
        AsyncIteratorPrototype = PassedAsyncIteratorPrototype;
      } else if (isCallable(AsyncIterator)) {
        AsyncIteratorPrototype = AsyncIterator.prototype;
      } else if (shared[USE_FUNCTION_CONSTRUCTOR] || global2[USE_FUNCTION_CONSTRUCTOR]) {
        try {
          prototype2 = getPrototypeOf(getPrototypeOf(getPrototypeOf(Function("return async function*(){}()")())));
          if (getPrototypeOf(prototype2) === Object.prototype)
            AsyncIteratorPrototype = prototype2;
        } catch (error) {
        }
      }
      if (!AsyncIteratorPrototype)
        AsyncIteratorPrototype = {};
      else if (IS_PURE)
        AsyncIteratorPrototype = create5(AsyncIteratorPrototype);
      if (!isCallable(AsyncIteratorPrototype[ASYNC_ITERATOR])) {
        redefine(AsyncIteratorPrototype, ASYNC_ITERATOR, function() {
          return this;
        });
      }
      module.exports = AsyncIteratorPrototype;
    }
  });

  // node_modules/core-js/internals/async-from-sync-iterator.js
  var require_async_from_sync_iterator = __commonJS({
    "node_modules/core-js/internals/async-from-sync-iterator.js"(exports, module) {
      "use strict";
      var apply = require_function_apply();
      var anObject = require_an_object();
      var create5 = require_object_create();
      var getMethod = require_get_method();
      var redefineAll = require_redefine_all();
      var InternalStateModule = require_internal_state();
      var getBuiltIn = require_get_built_in();
      var AsyncIteratorPrototype = require_async_iterator_prototype();
      var Promise3 = getBuiltIn("Promise");
      var setInternalState = InternalStateModule.set;
      var getInternalState = InternalStateModule.get;
      var asyncFromSyncIteratorContinuation = function(result, resolve2, reject2) {
        var done = result.done;
        Promise3.resolve(result.value).then(function(value) {
          resolve2({ done, value });
        }, reject2);
      };
      var AsyncFromSyncIterator = function AsyncIterator(iterator) {
        setInternalState(this, {
          iterator: anObject(iterator),
          next: iterator.next
        });
      };
      AsyncFromSyncIterator.prototype = redefineAll(create5(AsyncIteratorPrototype), {
        next: function next(arg) {
          var state = getInternalState(this);
          var hasArg = !!arguments.length;
          return new Promise3(function(resolve2, reject2) {
            var result = anObject(apply(state.next, state.iterator, hasArg ? [arg] : []));
            asyncFromSyncIteratorContinuation(result, resolve2, reject2);
          });
        },
        "return": function(arg) {
          var iterator = getInternalState(this).iterator;
          var hasArg = !!arguments.length;
          return new Promise3(function(resolve2, reject2) {
            var $return = getMethod(iterator, "return");
            if ($return === void 0)
              return resolve2({ done: true, value: arg });
            var result = anObject(apply($return, iterator, hasArg ? [arg] : []));
            asyncFromSyncIteratorContinuation(result, resolve2, reject2);
          });
        },
        "throw": function(arg) {
          var iterator = getInternalState(this).iterator;
          var hasArg = !!arguments.length;
          return new Promise3(function(resolve2, reject2) {
            var $throw = getMethod(iterator, "throw");
            if ($throw === void 0)
              return reject2(arg);
            var result = anObject(apply($throw, iterator, hasArg ? [arg] : []));
            asyncFromSyncIteratorContinuation(result, resolve2, reject2);
          });
        }
      });
      module.exports = AsyncFromSyncIterator;
    }
  });

  // node_modules/core-js/internals/get-async-iterator.js
  var require_get_async_iterator = __commonJS({
    "node_modules/core-js/internals/get-async-iterator.js"(exports, module) {
      var call = require_function_call();
      var AsyncFromSyncIterator = require_async_from_sync_iterator();
      var anObject = require_an_object();
      var getIterator = require_get_iterator();
      var getMethod = require_get_method();
      var wellKnownSymbol = require_well_known_symbol();
      var ASYNC_ITERATOR = wellKnownSymbol("asyncIterator");
      module.exports = function(it, usingIterator) {
        var method = arguments.length < 2 ? getMethod(it, ASYNC_ITERATOR) : usingIterator;
        return method ? anObject(call(method, it)) : new AsyncFromSyncIterator(getIterator(it));
      };
    }
  });

  // node_modules/core-js/internals/entry-virtual.js
  var require_entry_virtual = __commonJS({
    "node_modules/core-js/internals/entry-virtual.js"(exports, module) {
      var global2 = require_global();
      module.exports = function(CONSTRUCTOR) {
        return global2[CONSTRUCTOR].prototype;
      };
    }
  });

  // node_modules/core-js/internals/async-iterator-iteration.js
  var require_async_iterator_iteration = __commonJS({
    "node_modules/core-js/internals/async-iterator-iteration.js"(exports, module) {
      "use strict";
      var global2 = require_global();
      var call = require_function_call();
      var aCallable = require_a_callable();
      var anObject = require_an_object();
      var getBuiltIn = require_get_built_in();
      var getMethod = require_get_method();
      var MAX_SAFE_INTEGER = 9007199254740991;
      var TypeError2 = global2.TypeError;
      var createMethod = function(TYPE) {
        var IS_TO_ARRAY = TYPE == 0;
        var IS_FOR_EACH = TYPE == 1;
        var IS_EVERY = TYPE == 2;
        var IS_SOME = TYPE == 3;
        return function(iterator, fn, target) {
          anObject(iterator);
          var Promise3 = getBuiltIn("Promise");
          var next = aCallable(iterator.next);
          var index = 0;
          var MAPPING = fn !== void 0;
          if (MAPPING || !IS_TO_ARRAY)
            aCallable(fn);
          return new Promise3(function(resolve2, reject2) {
            var closeIteration = function(method, argument) {
              try {
                var returnMethod = getMethod(iterator, "return");
                if (returnMethod) {
                  return Promise3.resolve(call(returnMethod, iterator)).then(function() {
                    method(argument);
                  }, function(error) {
                    reject2(error);
                  });
                }
              } catch (error2) {
                return reject2(error2);
              }
              method(argument);
            };
            var onError2 = function(error) {
              closeIteration(reject2, error);
            };
            var loop = function() {
              try {
                if (IS_TO_ARRAY && index > MAX_SAFE_INTEGER && MAPPING) {
                  throw TypeError2("The allowed number of iterations has been exceeded");
                }
                Promise3.resolve(anObject(call(next, iterator))).then(function(step) {
                  try {
                    if (anObject(step).done) {
                      if (IS_TO_ARRAY) {
                        target.length = index;
                        resolve2(target);
                      } else
                        resolve2(IS_SOME ? false : IS_EVERY || void 0);
                    } else {
                      var value = step.value;
                      if (MAPPING) {
                        Promise3.resolve(IS_TO_ARRAY ? fn(value, index) : fn(value)).then(function(result) {
                          if (IS_FOR_EACH) {
                            loop();
                          } else if (IS_EVERY) {
                            result ? loop() : closeIteration(resolve2, false);
                          } else if (IS_TO_ARRAY) {
                            target[index++] = result;
                            loop();
                          } else {
                            result ? closeIteration(resolve2, IS_SOME || value) : loop();
                          }
                        }, onError2);
                      } else {
                        target[index++] = value;
                        loop();
                      }
                    }
                  } catch (error) {
                    onError2(error);
                  }
                }, onError2);
              } catch (error2) {
                onError2(error2);
              }
            };
            loop();
          });
        };
      };
      module.exports = {
        toArray: createMethod(0),
        forEach: createMethod(1),
        every: createMethod(2),
        some: createMethod(3),
        find: createMethod(4)
      };
    }
  });

  // node_modules/core-js/internals/array-from-async.js
  var require_array_from_async = __commonJS({
    "node_modules/core-js/internals/array-from-async.js"(exports, module) {
      "use strict";
      var bind2 = require_function_bind_context();
      var toObject = require_to_object();
      var isConstructor = require_is_constructor();
      var getAsyncIterator = require_get_async_iterator();
      var getIterator = require_get_iterator();
      var getIteratorMethod = require_get_iterator_method();
      var getMethod = require_get_method();
      var getVirtual = require_entry_virtual();
      var getBuiltIn = require_get_built_in();
      var wellKnownSymbol = require_well_known_symbol();
      var AsyncFromSyncIterator = require_async_from_sync_iterator();
      var toArray = require_async_iterator_iteration().toArray;
      var ASYNC_ITERATOR = wellKnownSymbol("asyncIterator");
      var arrayIterator = getVirtual("Array").values;
      module.exports = function fromAsync(asyncItems) {
        var C = this;
        var argumentsLength = arguments.length;
        var mapfn = argumentsLength > 1 ? arguments[1] : void 0;
        var thisArg = argumentsLength > 2 ? arguments[2] : void 0;
        return new (getBuiltIn("Promise"))(function(resolve2) {
          var O = toObject(asyncItems);
          if (mapfn !== void 0)
            mapfn = bind2(mapfn, thisArg);
          var usingAsyncIterator = getMethod(O, ASYNC_ITERATOR);
          var usingSyncIterator = usingAsyncIterator ? void 0 : getIteratorMethod(O) || arrayIterator;
          var A = isConstructor(C) ? new C() : [];
          var iterator = usingAsyncIterator ? getAsyncIterator(O, usingAsyncIterator) : new AsyncFromSyncIterator(getIterator(O, usingSyncIterator));
          resolve2(toArray(iterator, mapfn, A));
        });
      };
    }
  });

  // node_modules/core-js/modules/esnext.array.from-async.js
  var require_esnext_array_from_async = __commonJS({
    "node_modules/core-js/modules/esnext.array.from-async.js"() {
      var $2 = require_export();
      var fromAsync = require_array_from_async();
      $2({ target: "Array", stat: true }, {
        fromAsync
      });
    }
  });

  // node_modules/core-js/modules/esnext.array.at.js
  var require_esnext_array_at = __commonJS({
    "node_modules/core-js/modules/esnext.array.at.js"() {
      require_es_array_at();
    }
  });

  // node_modules/core-js/modules/esnext.array.filter-out.js
  var require_esnext_array_filter_out = __commonJS({
    "node_modules/core-js/modules/esnext.array.filter-out.js"() {
      "use strict";
      var $2 = require_export();
      var $filterReject = require_array_iteration().filterReject;
      var addToUnscopables = require_add_to_unscopables();
      $2({ target: "Array", proto: true }, {
        filterOut: function filterOut(callbackfn) {
          return $filterReject(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
        }
      });
      addToUnscopables("filterOut");
    }
  });

  // node_modules/core-js/modules/esnext.array.filter-reject.js
  var require_esnext_array_filter_reject = __commonJS({
    "node_modules/core-js/modules/esnext.array.filter-reject.js"() {
      "use strict";
      var $2 = require_export();
      var $filterReject = require_array_iteration().filterReject;
      var addToUnscopables = require_add_to_unscopables();
      $2({ target: "Array", proto: true }, {
        filterReject: function filterReject(callbackfn) {
          return $filterReject(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
        }
      });
      addToUnscopables("filterReject");
    }
  });

  // node_modules/core-js/internals/array-iteration-from-last.js
  var require_array_iteration_from_last = __commonJS({
    "node_modules/core-js/internals/array-iteration-from-last.js"(exports, module) {
      var bind2 = require_function_bind_context();
      var IndexedObject = require_indexed_object();
      var toObject = require_to_object();
      var lengthOfArrayLike = require_length_of_array_like();
      var createMethod = function(TYPE) {
        var IS_FIND_LAST_INDEX = TYPE == 1;
        return function($this, callbackfn, that) {
          var O = toObject($this);
          var self2 = IndexedObject(O);
          var boundFunction = bind2(callbackfn, that);
          var index = lengthOfArrayLike(self2);
          var value, result;
          while (index-- > 0) {
            value = self2[index];
            result = boundFunction(value, index, O);
            if (result)
              switch (TYPE) {
                case 0:
                  return value;
                case 1:
                  return index;
              }
          }
          return IS_FIND_LAST_INDEX ? -1 : void 0;
        };
      };
      module.exports = {
        // `Array.prototype.findLast` method
        // https://github.com/tc39/proposal-array-find-from-last
        findLast: createMethod(0),
        // `Array.prototype.findLastIndex` method
        // https://github.com/tc39/proposal-array-find-from-last
        findLastIndex: createMethod(1)
      };
    }
  });

  // node_modules/core-js/modules/esnext.array.find-last.js
  var require_esnext_array_find_last = __commonJS({
    "node_modules/core-js/modules/esnext.array.find-last.js"() {
      "use strict";
      var $2 = require_export();
      var $findLast = require_array_iteration_from_last().findLast;
      var addToUnscopables = require_add_to_unscopables();
      $2({ target: "Array", proto: true }, {
        findLast: function findLast2(callbackfn) {
          return $findLast(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
        }
      });
      addToUnscopables("findLast");
    }
  });

  // node_modules/core-js/modules/esnext.array.find-last-index.js
  var require_esnext_array_find_last_index = __commonJS({
    "node_modules/core-js/modules/esnext.array.find-last-index.js"() {
      "use strict";
      var $2 = require_export();
      var $findLastIndex = require_array_iteration_from_last().findLastIndex;
      var addToUnscopables = require_add_to_unscopables();
      $2({ target: "Array", proto: true }, {
        findLastIndex: function findLastIndex(callbackfn) {
          return $findLastIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
        }
      });
      addToUnscopables("findLastIndex");
    }
  });

  // node_modules/core-js/internals/array-from-constructor-and-list.js
  var require_array_from_constructor_and_list = __commonJS({
    "node_modules/core-js/internals/array-from-constructor-and-list.js"(exports, module) {
      module.exports = function(Constructor, list) {
        var index = 0;
        var length = list.length;
        var result = new Constructor(length);
        while (length > index)
          result[index] = list[index++];
        return result;
      };
    }
  });

  // node_modules/core-js/internals/array-group-by.js
  var require_array_group_by = __commonJS({
    "node_modules/core-js/internals/array-group-by.js"(exports, module) {
      var global2 = require_global();
      var bind2 = require_function_bind_context();
      var uncurryThis = require_function_uncurry_this();
      var IndexedObject = require_indexed_object();
      var toObject = require_to_object();
      var toPropertyKey = require_to_property_key();
      var lengthOfArrayLike = require_length_of_array_like();
      var objectCreate = require_object_create();
      var arrayFromConstructorAndList = require_array_from_constructor_and_list();
      var Array2 = global2.Array;
      var push = uncurryThis([].push);
      module.exports = function($this, callbackfn, that, specificConstructor) {
        var O = toObject($this);
        var self2 = IndexedObject(O);
        var boundFunction = bind2(callbackfn, that);
        var target = objectCreate(null);
        var length = lengthOfArrayLike(self2);
        var index = 0;
        var Constructor, key, value;
        for (; length > index; index++) {
          value = self2[index];
          key = toPropertyKey(boundFunction(value, index, O));
          if (key in target)
            push(target[key], value);
          else
            target[key] = [value];
        }
        if (specificConstructor) {
          Constructor = specificConstructor(O);
          if (Constructor !== Array2) {
            for (key in target)
              target[key] = arrayFromConstructorAndList(Constructor, target[key]);
          }
        }
        return target;
      };
    }
  });

  // node_modules/core-js/modules/esnext.array.group-by.js
  var require_esnext_array_group_by = __commonJS({
    "node_modules/core-js/modules/esnext.array.group-by.js"() {
      "use strict";
      var $2 = require_export();
      var $groupBy = require_array_group_by();
      var arraySpeciesConstructor = require_array_species_constructor();
      var addToUnscopables = require_add_to_unscopables();
      $2({ target: "Array", proto: true }, {
        groupBy: function groupBy(callbackfn) {
          var thisArg = arguments.length > 1 ? arguments[1] : void 0;
          return $groupBy(this, callbackfn, thisArg, arraySpeciesConstructor);
        }
      });
      addToUnscopables("groupBy");
    }
  });

  // node_modules/core-js/modules/esnext.array.is-template-object.js
  var require_esnext_array_is_template_object = __commonJS({
    "node_modules/core-js/modules/esnext.array.is-template-object.js"() {
      var $2 = require_export();
      var isArray = require_is_array();
      var isFrozen = Object.isFrozen;
      var isFrozenStringArray = function(array, allowUndefined) {
        if (!isFrozen || !isArray(array) || !isFrozen(array))
          return false;
        var index = 0;
        var length = array.length;
        var element;
        while (index < length) {
          element = array[index++];
          if (!(typeof element == "string" || allowUndefined && typeof element == "undefined")) {
            return false;
          }
        }
        return length !== 0;
      };
      $2({ target: "Array", stat: true }, {
        isTemplateObject: function isTemplateObject(value) {
          if (!isFrozenStringArray(value, true))
            return false;
          var raw = value.raw;
          if (raw.length !== value.length || !isFrozenStringArray(raw, false))
            return false;
          return true;
        }
      });
    }
  });

  // node_modules/core-js/modules/esnext.array.last-item.js
  var require_esnext_array_last_item = __commonJS({
    "node_modules/core-js/modules/esnext.array.last-item.js"() {
      "use strict";
      var DESCRIPTORS = require_descriptors();
      var addToUnscopables = require_add_to_unscopables();
      var toObject = require_to_object();
      var lengthOfArrayLike = require_length_of_array_like();
      var defineProperty = require_object_define_property().f;
      if (DESCRIPTORS && !("lastItem" in [])) {
        defineProperty(Array.prototype, "lastItem", {
          configurable: true,
          get: function lastItem() {
            var O = toObject(this);
            var len = lengthOfArrayLike(O);
            return len == 0 ? void 0 : O[len - 1];
          },
          set: function lastItem(value) {
            var O = toObject(this);
            var len = lengthOfArrayLike(O);
            return O[len == 0 ? 0 : len - 1] = value;
          }
        });
        addToUnscopables("lastItem");
      }
    }
  });

  // node_modules/core-js/modules/esnext.array.last-index.js
  var require_esnext_array_last_index = __commonJS({
    "node_modules/core-js/modules/esnext.array.last-index.js"() {
      "use strict";
      var DESCRIPTORS = require_descriptors();
      var addToUnscopables = require_add_to_unscopables();
      var toObject = require_to_object();
      var lengthOfArrayLike = require_length_of_array_like();
      var defineProperty = require_object_define_property().f;
      if (DESCRIPTORS && !("lastIndex" in [])) {
        defineProperty(Array.prototype, "lastIndex", {
          configurable: true,
          get: function lastIndex() {
            var O = toObject(this);
            var len = lengthOfArrayLike(O);
            return len == 0 ? 0 : len - 1;
          }
        });
        addToUnscopables("lastIndex");
      }
    }
  });

  // node_modules/core-js/internals/array-unique-by.js
  var require_array_unique_by = __commonJS({
    "node_modules/core-js/internals/array-unique-by.js"(exports, module) {
      "use strict";
      var getBuiltIn = require_get_built_in();
      var uncurryThis = require_function_uncurry_this();
      var aCallable = require_a_callable();
      var lengthOfArrayLike = require_length_of_array_like();
      var toObject = require_to_object();
      var arraySpeciesCreate = require_array_species_create();
      var Map2 = getBuiltIn("Map");
      var MapPrototype = Map2.prototype;
      var mapForEach = uncurryThis(MapPrototype.forEach);
      var mapHas = uncurryThis(MapPrototype.has);
      var mapSet = uncurryThis(MapPrototype.set);
      var push = uncurryThis([].push);
      module.exports = function uniqueBy(resolver) {
        var that = toObject(this);
        var length = lengthOfArrayLike(that);
        var result = arraySpeciesCreate(that, 0);
        var map = new Map2();
        var resolverFunction = resolver != null ? aCallable(resolver) : function(value) {
          return value;
        };
        var index, item, key;
        for (index = 0; index < length; index++) {
          item = that[index];
          key = resolverFunction(item);
          if (!mapHas(map, key))
            mapSet(map, key, item);
        }
        mapForEach(map, function(value) {
          push(result, value);
        });
        return result;
      };
    }
  });

  // node_modules/core-js/modules/esnext.array.unique-by.js
  var require_esnext_array_unique_by = __commonJS({
    "node_modules/core-js/modules/esnext.array.unique-by.js"() {
      "use strict";
      var $2 = require_export();
      var addToUnscopables = require_add_to_unscopables();
      var uniqueBy = require_array_unique_by();
      $2({ target: "Array", proto: true }, {
        uniqueBy
      });
      addToUnscopables("uniqueBy");
    }
  });

  // node_modules/core-js/features/array/index.js
  var require_array3 = __commonJS({
    "node_modules/core-js/features/array/index.js"(exports, module) {
      var parent = require_array2();
      require_es_map();
      require_es_promise();
      require_esnext_array_from_async();
      require_esnext_array_at();
      require_esnext_array_filter_out();
      require_esnext_array_filter_reject();
      require_esnext_array_find_last();
      require_esnext_array_find_last_index();
      require_esnext_array_group_by();
      require_esnext_array_is_template_object();
      require_esnext_array_last_item();
      require_esnext_array_last_index();
      require_esnext_array_unique_by();
      module.exports = parent;
    }
  });

  // node_modules/core-js/internals/string-repeat.js
  var require_string_repeat = __commonJS({
    "node_modules/core-js/internals/string-repeat.js"(exports, module) {
      "use strict";
      var global2 = require_global();
      var toIntegerOrInfinity = require_to_integer_or_infinity();
      var toString4 = require_to_string();
      var requireObjectCoercible = require_require_object_coercible();
      var RangeError = global2.RangeError;
      module.exports = function repeat(count) {
        var str = toString4(requireObjectCoercible(this));
        var result = "";
        var n = toIntegerOrInfinity(count);
        if (n < 0 || n == Infinity)
          throw RangeError("Wrong number of repetitions");
        for (; n > 0; (n >>>= 1) && (str += str))
          if (n & 1)
            result += str;
        return result;
      };
    }
  });

  // node_modules/core-js/modules/es.string.repeat.js
  var require_es_string_repeat = __commonJS({
    "node_modules/core-js/modules/es.string.repeat.js"() {
      var $2 = require_export();
      var repeat = require_string_repeat();
      $2({ target: "String", proto: true }, {
        repeat
      });
    }
  });

  // node_modules/core-js/es/string/repeat.js
  var require_repeat = __commonJS({
    "node_modules/core-js/es/string/repeat.js"(exports, module) {
      require_es_string_repeat();
      var entryUnbind = require_entry_unbind();
      module.exports = entryUnbind("String", "repeat");
    }
  });

  // node_modules/core-js/stable/string/repeat.js
  var require_repeat2 = __commonJS({
    "node_modules/core-js/stable/string/repeat.js"(exports, module) {
      var parent = require_repeat();
      module.exports = parent;
    }
  });

  // node_modules/core-js/features/string/repeat.js
  var require_repeat3 = __commonJS({
    "node_modules/core-js/features/string/repeat.js"(exports, module) {
      var parent = require_repeat2();
      module.exports = parent;
    }
  });

  // node_modules/core-js/internals/object-to-array.js
  var require_object_to_array = __commonJS({
    "node_modules/core-js/internals/object-to-array.js"(exports, module) {
      var DESCRIPTORS = require_descriptors();
      var uncurryThis = require_function_uncurry_this();
      var objectKeys = require_object_keys();
      var toIndexedObject = require_to_indexed_object();
      var $propertyIsEnumerable = require_object_property_is_enumerable().f;
      var propertyIsEnumerable = uncurryThis($propertyIsEnumerable);
      var push = uncurryThis([].push);
      var createMethod = function(TO_ENTRIES) {
        return function(it) {
          var O = toIndexedObject(it);
          var keys = objectKeys(O);
          var length = keys.length;
          var i = 0;
          var result = [];
          var key;
          while (length > i) {
            key = keys[i++];
            if (!DESCRIPTORS || propertyIsEnumerable(O, key)) {
              push(result, TO_ENTRIES ? [key, O[key]] : O[key]);
            }
          }
          return result;
        };
      };
      module.exports = {
        // `Object.entries` method
        // https://tc39.es/ecma262/#sec-object.entries
        entries: createMethod(true),
        // `Object.values` method
        // https://tc39.es/ecma262/#sec-object.values
        values: createMethod(false)
      };
    }
  });

  // node_modules/core-js/modules/es.object.entries.js
  var require_es_object_entries = __commonJS({
    "node_modules/core-js/modules/es.object.entries.js"() {
      var $2 = require_export();
      var $entries = require_object_to_array().entries;
      $2({ target: "Object", stat: true }, {
        entries: function entries(O) {
          return $entries(O);
        }
      });
    }
  });

  // node_modules/core-js/es/object/entries.js
  var require_entries = __commonJS({
    "node_modules/core-js/es/object/entries.js"(exports, module) {
      require_es_object_entries();
      var path = require_path();
      module.exports = path.Object.entries;
    }
  });

  // node_modules/core-js/stable/object/entries.js
  var require_entries2 = __commonJS({
    "node_modules/core-js/stable/object/entries.js"(exports, module) {
      var parent = require_entries();
      module.exports = parent;
    }
  });

  // node_modules/core-js/features/object/entries.js
  var require_entries3 = __commonJS({
    "node_modules/core-js/features/object/entries.js"(exports, module) {
      var parent = require_entries2();
      module.exports = parent;
    }
  });

  // node_modules/core-js/modules/web.dom-collections.for-each.js
  var require_web_dom_collections_for_each = __commonJS({
    "node_modules/core-js/modules/web.dom-collections.for-each.js"() {
      var global2 = require_global();
      var DOMIterables = require_dom_iterables();
      var DOMTokenListPrototype = require_dom_token_list_prototype();
      var forEach4 = require_array_for_each();
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      var handlePrototype = function(CollectionPrototype) {
        if (CollectionPrototype && CollectionPrototype.forEach !== forEach4)
          try {
            createNonEnumerableProperty(CollectionPrototype, "forEach", forEach4);
          } catch (error) {
            CollectionPrototype.forEach = forEach4;
          }
      };
      for (COLLECTION_NAME in DOMIterables) {
        if (DOMIterables[COLLECTION_NAME]) {
          handlePrototype(global2[COLLECTION_NAME] && global2[COLLECTION_NAME].prototype);
        }
      }
      var COLLECTION_NAME;
      handlePrototype(DOMTokenListPrototype);
    }
  });

  // node_modules/core-js/stable/dom-collections/for-each.js
  var require_for_each = __commonJS({
    "node_modules/core-js/stable/dom-collections/for-each.js"(exports, module) {
      require_web_dom_collections_for_each();
      var parent = require_array_for_each();
      module.exports = parent;
    }
  });

  // node_modules/core-js/features/dom-collections/for-each.js
  var require_for_each2 = __commonJS({
    "node_modules/core-js/features/dom-collections/for-each.js"(exports, module) {
      var parent = require_for_each();
      module.exports = parent;
    }
  });

  // node_modules/core-js/internals/this-number-value.js
  var require_this_number_value = __commonJS({
    "node_modules/core-js/internals/this-number-value.js"(exports, module) {
      var uncurryThis = require_function_uncurry_this();
      module.exports = uncurryThis(1 .valueOf);
    }
  });

  // node_modules/core-js/internals/whitespaces.js
  var require_whitespaces = __commonJS({
    "node_modules/core-js/internals/whitespaces.js"(exports, module) {
      module.exports = "	\n\v\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
    }
  });

  // node_modules/core-js/internals/string-trim.js
  var require_string_trim = __commonJS({
    "node_modules/core-js/internals/string-trim.js"(exports, module) {
      var uncurryThis = require_function_uncurry_this();
      var requireObjectCoercible = require_require_object_coercible();
      var toString4 = require_to_string();
      var whitespaces = require_whitespaces();
      var replace = uncurryThis("".replace);
      var whitespace = "[" + whitespaces + "]";
      var ltrim = RegExp("^" + whitespace + whitespace + "*");
      var rtrim = RegExp(whitespace + whitespace + "*$");
      var createMethod = function(TYPE) {
        return function($this) {
          var string = toString4(requireObjectCoercible($this));
          if (TYPE & 1)
            string = replace(string, ltrim, "");
          if (TYPE & 2)
            string = replace(string, rtrim, "");
          return string;
        };
      };
      module.exports = {
        // `String.prototype.{ trimLeft, trimStart }` methods
        // https://tc39.es/ecma262/#sec-string.prototype.trimstart
        start: createMethod(1),
        // `String.prototype.{ trimRight, trimEnd }` methods
        // https://tc39.es/ecma262/#sec-string.prototype.trimend
        end: createMethod(2),
        // `String.prototype.trim` method
        // https://tc39.es/ecma262/#sec-string.prototype.trim
        trim: createMethod(3)
      };
    }
  });

  // node_modules/core-js/modules/es.number.constructor.js
  var require_es_number_constructor = __commonJS({
    "node_modules/core-js/modules/es.number.constructor.js"() {
      "use strict";
      var DESCRIPTORS = require_descriptors();
      var global2 = require_global();
      var uncurryThis = require_function_uncurry_this();
      var isForced = require_is_forced();
      var redefine = require_redefine();
      var hasOwn3 = require_has_own_property();
      var inheritIfRequired = require_inherit_if_required();
      var isPrototypeOf = require_object_is_prototype_of();
      var isSymbol = require_is_symbol();
      var toPrimitive = require_to_primitive();
      var fails = require_fails();
      var getOwnPropertyNames = require_object_get_own_property_names().f;
      var getOwnPropertyDescriptor = require_object_get_own_property_descriptor().f;
      var defineProperty = require_object_define_property().f;
      var thisNumberValue = require_this_number_value();
      var trim2 = require_string_trim().trim;
      var NUMBER = "Number";
      var NativeNumber = global2[NUMBER];
      var NumberPrototype = NativeNumber.prototype;
      var TypeError2 = global2.TypeError;
      var arraySlice = uncurryThis("".slice);
      var charCodeAt = uncurryThis("".charCodeAt);
      var toNumeric = function(value) {
        var primValue = toPrimitive(value, "number");
        return typeof primValue == "bigint" ? primValue : toNumber(primValue);
      };
      var toNumber = function(argument) {
        var it = toPrimitive(argument, "number");
        var first, third, radix, maxCode, digits, length, index, code;
        if (isSymbol(it))
          throw TypeError2("Cannot convert a Symbol value to a number");
        if (typeof it == "string" && it.length > 2) {
          it = trim2(it);
          first = charCodeAt(it, 0);
          if (first === 43 || first === 45) {
            third = charCodeAt(it, 2);
            if (third === 88 || third === 120)
              return NaN;
          } else if (first === 48) {
            switch (charCodeAt(it, 1)) {
              case 66:
              case 98:
                radix = 2;
                maxCode = 49;
                break;
              case 79:
              case 111:
                radix = 8;
                maxCode = 55;
                break;
              default:
                return +it;
            }
            digits = arraySlice(it, 2);
            length = digits.length;
            for (index = 0; index < length; index++) {
              code = charCodeAt(digits, index);
              if (code < 48 || code > maxCode)
                return NaN;
            }
            return parseInt(digits, radix);
          }
        }
        return +it;
      };
      if (isForced(NUMBER, !NativeNumber(" 0o1") || !NativeNumber("0b1") || NativeNumber("+0x1"))) {
        NumberWrapper = function Number2(value) {
          var n = arguments.length < 1 ? 0 : NativeNumber(toNumeric(value));
          var dummy = this;
          return isPrototypeOf(NumberPrototype, dummy) && fails(function() {
            thisNumberValue(dummy);
          }) ? inheritIfRequired(Object(n), dummy, NumberWrapper) : n;
        };
        for (keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
          // ES3:
          "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(",")
        ), j = 0; keys.length > j; j++) {
          if (hasOwn3(NativeNumber, key = keys[j]) && !hasOwn3(NumberWrapper, key)) {
            defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
          }
        }
        NumberWrapper.prototype = NumberPrototype;
        NumberPrototype.constructor = NumberWrapper;
        redefine(global2, NUMBER, NumberWrapper);
      }
      var NumberWrapper;
      var keys;
      var j;
      var key;
    }
  });

  // node_modules/core-js/modules/es.number.epsilon.js
  var require_es_number_epsilon = __commonJS({
    "node_modules/core-js/modules/es.number.epsilon.js"() {
      var $2 = require_export();
      $2({ target: "Number", stat: true }, {
        EPSILON: Math.pow(2, -52)
      });
    }
  });

  // node_modules/core-js/internals/number-is-finite.js
  var require_number_is_finite = __commonJS({
    "node_modules/core-js/internals/number-is-finite.js"(exports, module) {
      var global2 = require_global();
      var globalIsFinite = global2.isFinite;
      module.exports = Number.isFinite || function isFinite2(it) {
        return typeof it == "number" && globalIsFinite(it);
      };
    }
  });

  // node_modules/core-js/modules/es.number.is-finite.js
  var require_es_number_is_finite = __commonJS({
    "node_modules/core-js/modules/es.number.is-finite.js"() {
      var $2 = require_export();
      var numberIsFinite = require_number_is_finite();
      $2({ target: "Number", stat: true }, { isFinite: numberIsFinite });
    }
  });

  // node_modules/core-js/internals/is-integral-number.js
  var require_is_integral_number = __commonJS({
    "node_modules/core-js/internals/is-integral-number.js"(exports, module) {
      var isObject2 = require_is_object();
      var floor = Math.floor;
      module.exports = Number.isInteger || function isInteger2(it) {
        return !isObject2(it) && isFinite(it) && floor(it) === it;
      };
    }
  });

  // node_modules/core-js/modules/es.number.is-integer.js
  var require_es_number_is_integer = __commonJS({
    "node_modules/core-js/modules/es.number.is-integer.js"() {
      var $2 = require_export();
      var isIntegralNumber = require_is_integral_number();
      $2({ target: "Number", stat: true }, {
        isInteger: isIntegralNumber
      });
    }
  });

  // node_modules/core-js/modules/es.number.is-nan.js
  var require_es_number_is_nan = __commonJS({
    "node_modules/core-js/modules/es.number.is-nan.js"() {
      var $2 = require_export();
      $2({ target: "Number", stat: true }, {
        isNaN: function isNaN2(number) {
          return number != number;
        }
      });
    }
  });

  // node_modules/core-js/modules/es.number.is-safe-integer.js
  var require_es_number_is_safe_integer = __commonJS({
    "node_modules/core-js/modules/es.number.is-safe-integer.js"() {
      var $2 = require_export();
      var isIntegralNumber = require_is_integral_number();
      var abs = Math.abs;
      $2({ target: "Number", stat: true }, {
        isSafeInteger: function isSafeInteger(number) {
          return isIntegralNumber(number) && abs(number) <= 9007199254740991;
        }
      });
    }
  });

  // node_modules/core-js/modules/es.number.max-safe-integer.js
  var require_es_number_max_safe_integer = __commonJS({
    "node_modules/core-js/modules/es.number.max-safe-integer.js"() {
      var $2 = require_export();
      $2({ target: "Number", stat: true }, {
        MAX_SAFE_INTEGER: 9007199254740991
      });
    }
  });

  // node_modules/core-js/modules/es.number.min-safe-integer.js
  var require_es_number_min_safe_integer = __commonJS({
    "node_modules/core-js/modules/es.number.min-safe-integer.js"() {
      var $2 = require_export();
      $2({ target: "Number", stat: true }, {
        MIN_SAFE_INTEGER: -9007199254740991
      });
    }
  });

  // node_modules/core-js/internals/number-parse-float.js
  var require_number_parse_float = __commonJS({
    "node_modules/core-js/internals/number-parse-float.js"(exports, module) {
      var global2 = require_global();
      var fails = require_fails();
      var uncurryThis = require_function_uncurry_this();
      var toString4 = require_to_string();
      var trim2 = require_string_trim().trim;
      var whitespaces = require_whitespaces();
      var charAt = uncurryThis("".charAt);
      var n$ParseFloat = global2.parseFloat;
      var Symbol2 = global2.Symbol;
      var ITERATOR = Symbol2 && Symbol2.iterator;
      var FORCED = 1 / n$ParseFloat(whitespaces + "-0") !== -Infinity || ITERATOR && !fails(function() {
        n$ParseFloat(Object(ITERATOR));
      });
      module.exports = FORCED ? function parseFloat2(string) {
        var trimmedString = trim2(toString4(string));
        var result = n$ParseFloat(trimmedString);
        return result === 0 && charAt(trimmedString, 0) == "-" ? -0 : result;
      } : n$ParseFloat;
    }
  });

  // node_modules/core-js/modules/es.number.parse-float.js
  var require_es_number_parse_float = __commonJS({
    "node_modules/core-js/modules/es.number.parse-float.js"() {
      var $2 = require_export();
      var parseFloat2 = require_number_parse_float();
      $2({ target: "Number", stat: true, forced: Number.parseFloat != parseFloat2 }, {
        parseFloat: parseFloat2
      });
    }
  });

  // node_modules/core-js/internals/number-parse-int.js
  var require_number_parse_int = __commonJS({
    "node_modules/core-js/internals/number-parse-int.js"(exports, module) {
      var global2 = require_global();
      var fails = require_fails();
      var uncurryThis = require_function_uncurry_this();
      var toString4 = require_to_string();
      var trim2 = require_string_trim().trim;
      var whitespaces = require_whitespaces();
      var $parseInt = global2.parseInt;
      var Symbol2 = global2.Symbol;
      var ITERATOR = Symbol2 && Symbol2.iterator;
      var hex = /^[+-]?0x/i;
      var exec = uncurryThis(hex.exec);
      var FORCED = $parseInt(whitespaces + "08") !== 8 || $parseInt(whitespaces + "0x16") !== 22 || ITERATOR && !fails(function() {
        $parseInt(Object(ITERATOR));
      });
      module.exports = FORCED ? function parseInt2(string, radix) {
        var S = trim2(toString4(string));
        return $parseInt(S, radix >>> 0 || (exec(hex, S) ? 16 : 10));
      } : $parseInt;
    }
  });

  // node_modules/core-js/modules/es.number.parse-int.js
  var require_es_number_parse_int = __commonJS({
    "node_modules/core-js/modules/es.number.parse-int.js"() {
      var $2 = require_export();
      var parseInt2 = require_number_parse_int();
      $2({ target: "Number", stat: true, forced: Number.parseInt != parseInt2 }, {
        parseInt: parseInt2
      });
    }
  });

  // node_modules/core-js/modules/es.number.to-fixed.js
  var require_es_number_to_fixed = __commonJS({
    "node_modules/core-js/modules/es.number.to-fixed.js"() {
      "use strict";
      var $2 = require_export();
      var global2 = require_global();
      var uncurryThis = require_function_uncurry_this();
      var toIntegerOrInfinity = require_to_integer_or_infinity();
      var thisNumberValue = require_this_number_value();
      var $repeat = require_string_repeat();
      var fails = require_fails();
      var RangeError = global2.RangeError;
      var String2 = global2.String;
      var floor = Math.floor;
      var repeat = uncurryThis($repeat);
      var stringSlice = uncurryThis("".slice);
      var un$ToFixed = uncurryThis(1 .toFixed);
      var pow = function(x, n, acc) {
        return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
      };
      var log = function(x) {
        var n = 0;
        var x2 = x;
        while (x2 >= 4096) {
          n += 12;
          x2 /= 4096;
        }
        while (x2 >= 2) {
          n += 1;
          x2 /= 2;
        }
        return n;
      };
      var multiply = function(data, n, c) {
        var index = -1;
        var c2 = c;
        while (++index < 6) {
          c2 += n * data[index];
          data[index] = c2 % 1e7;
          c2 = floor(c2 / 1e7);
        }
      };
      var divide = function(data, n) {
        var index = 6;
        var c = 0;
        while (--index >= 0) {
          c += data[index];
          data[index] = floor(c / n);
          c = c % n * 1e7;
        }
      };
      var dataToString = function(data) {
        var index = 6;
        var s = "";
        while (--index >= 0) {
          if (s !== "" || index === 0 || data[index] !== 0) {
            var t = String2(data[index]);
            s = s === "" ? t : s + repeat("0", 7 - t.length) + t;
          }
        }
        return s;
      };
      var FORCED = fails(function() {
        return un$ToFixed(8e-5, 3) !== "0.000" || un$ToFixed(0.9, 0) !== "1" || un$ToFixed(1.255, 2) !== "1.25" || un$ToFixed(1000000000000000100, 0) !== "1000000000000000128";
      }) || !fails(function() {
        un$ToFixed({});
      });
      $2({ target: "Number", proto: true, forced: FORCED }, {
        toFixed: function toFixed(fractionDigits) {
          var number = thisNumberValue(this);
          var fractDigits = toIntegerOrInfinity(fractionDigits);
          var data = [0, 0, 0, 0, 0, 0];
          var sign = "";
          var result = "0";
          var e, z, j, k;
          if (fractDigits < 0 || fractDigits > 20)
            throw RangeError("Incorrect fraction digits");
          if (number != number)
            return "NaN";
          if (number <= -1e21 || number >= 1e21)
            return String2(number);
          if (number < 0) {
            sign = "-";
            number = -number;
          }
          if (number > 1e-21) {
            e = log(number * pow(2, 69, 1)) - 69;
            z = e < 0 ? number * pow(2, -e, 1) : number / pow(2, e, 1);
            z *= 4503599627370496;
            e = 52 - e;
            if (e > 0) {
              multiply(data, 0, z);
              j = fractDigits;
              while (j >= 7) {
                multiply(data, 1e7, 0);
                j -= 7;
              }
              multiply(data, pow(10, j, 1), 0);
              j = e - 1;
              while (j >= 23) {
                divide(data, 1 << 23);
                j -= 23;
              }
              divide(data, 1 << j);
              multiply(data, 1, 1);
              divide(data, 2);
              result = dataToString(data);
            } else {
              multiply(data, 0, z);
              multiply(data, 1 << -e, 0);
              result = dataToString(data) + repeat("0", fractDigits);
            }
          }
          if (fractDigits > 0) {
            k = result.length;
            result = sign + (k <= fractDigits ? "0." + repeat("0", fractDigits - k) + result : stringSlice(result, 0, k - fractDigits) + "." + stringSlice(result, k - fractDigits));
          } else {
            result = sign + result;
          }
          return result;
        }
      });
    }
  });

  // node_modules/core-js/modules/es.number.to-precision.js
  var require_es_number_to_precision = __commonJS({
    "node_modules/core-js/modules/es.number.to-precision.js"() {
      "use strict";
      var $2 = require_export();
      var uncurryThis = require_function_uncurry_this();
      var fails = require_fails();
      var thisNumberValue = require_this_number_value();
      var un$ToPrecision = uncurryThis(1 .toPrecision);
      var FORCED = fails(function() {
        return un$ToPrecision(1, void 0) !== "1";
      }) || !fails(function() {
        un$ToPrecision({});
      });
      $2({ target: "Number", proto: true, forced: FORCED }, {
        toPrecision: function toPrecision(precision) {
          return precision === void 0 ? un$ToPrecision(thisNumberValue(this)) : un$ToPrecision(thisNumberValue(this), precision);
        }
      });
    }
  });

  // node_modules/core-js/es/number/index.js
  var require_number = __commonJS({
    "node_modules/core-js/es/number/index.js"(exports, module) {
      require_es_number_constructor();
      require_es_number_epsilon();
      require_es_number_is_finite();
      require_es_number_is_integer();
      require_es_number_is_nan();
      require_es_number_is_safe_integer();
      require_es_number_max_safe_integer();
      require_es_number_min_safe_integer();
      require_es_number_parse_float();
      require_es_number_parse_int();
      require_es_number_to_fixed();
      require_es_number_to_precision();
      var path = require_path();
      module.exports = path.Number;
    }
  });

  // node_modules/core-js/stable/number/index.js
  var require_number2 = __commonJS({
    "node_modules/core-js/stable/number/index.js"(exports, module) {
      var parent = require_number();
      module.exports = parent;
    }
  });

  // node_modules/core-js/modules/esnext.number.from-string.js
  var require_esnext_number_from_string = __commonJS({
    "node_modules/core-js/modules/esnext.number.from-string.js"() {
      "use strict";
      var $2 = require_export();
      var global2 = require_global();
      var uncurryThis = require_function_uncurry_this();
      var toIntegerOrInfinity = require_to_integer_or_infinity();
      var parseInt2 = require_number_parse_int();
      var INVALID_NUMBER_REPRESENTATION = "Invalid number representation";
      var INVALID_RADIX = "Invalid radix";
      var RangeError = global2.RangeError;
      var SyntaxError2 = global2.SyntaxError;
      var TypeError2 = global2.TypeError;
      var valid = /^[\da-z]+$/;
      var charAt = uncurryThis("".charAt);
      var exec = uncurryThis(valid.exec);
      var numberToString = uncurryThis(1 .toString);
      var stringSlice = uncurryThis("".slice);
      $2({ target: "Number", stat: true }, {
        fromString: function fromString(string, radix) {
          var sign = 1;
          var R, mathNum;
          if (typeof string != "string")
            throw TypeError2(INVALID_NUMBER_REPRESENTATION);
          if (!string.length)
            throw SyntaxError2(INVALID_NUMBER_REPRESENTATION);
          if (charAt(string, 0) == "-") {
            sign = -1;
            string = stringSlice(string, 1);
            if (!string.length)
              throw SyntaxError2(INVALID_NUMBER_REPRESENTATION);
          }
          R = radix === void 0 ? 10 : toIntegerOrInfinity(radix);
          if (R < 2 || R > 36)
            throw RangeError(INVALID_RADIX);
          if (!exec(valid, string) || numberToString(mathNum = parseInt2(string, R), R) !== string) {
            throw SyntaxError2(INVALID_NUMBER_REPRESENTATION);
          }
          return sign * mathNum;
        }
      });
    }
  });

  // node_modules/core-js/internals/numeric-range-iterator.js
  var require_numeric_range_iterator = __commonJS({
    "node_modules/core-js/internals/numeric-range-iterator.js"(exports, module) {
      "use strict";
      var global2 = require_global();
      var InternalStateModule = require_internal_state();
      var createIteratorConstructor = require_create_iterator_constructor();
      var isObject2 = require_is_object();
      var defineProperties = require_object_define_properties();
      var DESCRIPTORS = require_descriptors();
      var INCORRECT_RANGE = "Incorrect Number.range arguments";
      var NUMERIC_RANGE_ITERATOR = "NumericRangeIterator";
      var setInternalState = InternalStateModule.set;
      var getInternalState = InternalStateModule.getterFor(NUMERIC_RANGE_ITERATOR);
      var RangeError = global2.RangeError;
      var TypeError2 = global2.TypeError;
      var $RangeIterator = createIteratorConstructor(function NumericRangeIterator(start, end, option, type, zero, one) {
        if (typeof start != type || end !== Infinity && end !== -Infinity && typeof end != type) {
          throw new TypeError2(INCORRECT_RANGE);
        }
        if (start === Infinity || start === -Infinity) {
          throw new RangeError(INCORRECT_RANGE);
        }
        var ifIncrease = end > start;
        var inclusiveEnd = false;
        var step;
        if (option === void 0) {
          step = void 0;
        } else if (isObject2(option)) {
          step = option.step;
          inclusiveEnd = !!option.inclusive;
        } else if (typeof option == type) {
          step = option;
        } else {
          throw new TypeError2(INCORRECT_RANGE);
        }
        if (step == null) {
          step = ifIncrease ? one : -one;
        }
        if (typeof step != type) {
          throw new TypeError2(INCORRECT_RANGE);
        }
        if (step === Infinity || step === -Infinity || step === zero && start !== end) {
          throw new RangeError(INCORRECT_RANGE);
        }
        var hitsEnd = start != start || end != end || step != step || end > start !== step > zero;
        setInternalState(this, {
          type: NUMERIC_RANGE_ITERATOR,
          start,
          end,
          step,
          inclusiveEnd,
          hitsEnd,
          currentCount: zero,
          zero
        });
        if (!DESCRIPTORS) {
          this.start = start;
          this.end = end;
          this.step = step;
          this.inclusive = inclusiveEnd;
        }
      }, NUMERIC_RANGE_ITERATOR, function next() {
        var state = getInternalState(this);
        if (state.hitsEnd)
          return { value: void 0, done: true };
        var start = state.start;
        var end = state.end;
        var step = state.step;
        var currentYieldingValue = start + step * state.currentCount++;
        if (currentYieldingValue === end)
          state.hitsEnd = true;
        var inclusiveEnd = state.inclusiveEnd;
        var endCondition;
        if (end > start) {
          endCondition = inclusiveEnd ? currentYieldingValue > end : currentYieldingValue >= end;
        } else {
          endCondition = inclusiveEnd ? end > currentYieldingValue : end >= currentYieldingValue;
        }
        if (endCondition) {
          return { value: void 0, done: state.hitsEnd = true };
        }
        return { value: currentYieldingValue, done: false };
      });
      var getter = function(fn) {
        return { get: fn, set: function() {
        }, configurable: true, enumerable: false };
      };
      if (DESCRIPTORS) {
        defineProperties($RangeIterator.prototype, {
          start: getter(function() {
            return getInternalState(this).start;
          }),
          end: getter(function() {
            return getInternalState(this).end;
          }),
          inclusive: getter(function() {
            return getInternalState(this).inclusiveEnd;
          }),
          step: getter(function() {
            return getInternalState(this).step;
          })
        });
      }
      module.exports = $RangeIterator;
    }
  });

  // node_modules/core-js/modules/esnext.number.range.js
  var require_esnext_number_range = __commonJS({
    "node_modules/core-js/modules/esnext.number.range.js"() {
      "use strict";
      var $2 = require_export();
      var NumericRangeIterator = require_numeric_range_iterator();
      $2({ target: "Number", stat: true }, {
        range: function range(start, end, option) {
          return new NumericRangeIterator(start, end, option, "number", 0, 1);
        }
      });
    }
  });

  // node_modules/core-js/features/number/index.js
  var require_number3 = __commonJS({
    "node_modules/core-js/features/number/index.js"(exports, module) {
      var parent = require_number2();
      module.exports = parent;
      require_es_object_to_string();
      require_esnext_number_from_string();
      require_esnext_number_range();
    }
  });

  // node_modules/graphql/language/visitor.js
  var require_visitor = __commonJS({
    "node_modules/graphql/language/visitor.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.visit = visit3;
      exports.visitInParallel = visitInParallel;
      exports.visitWithTypeInfo = visitWithTypeInfo;
      exports.getVisitFn = getVisitFn;
      var QueryDocumentKeys2 = exports.QueryDocumentKeys = {
        Name: [],
        Document: ["definitions"],
        OperationDefinition: ["name", "variableDefinitions", "directives", "selectionSet"],
        VariableDefinition: ["variable", "type", "defaultValue"],
        Variable: ["name"],
        SelectionSet: ["selections"],
        Field: ["alias", "name", "arguments", "directives", "selectionSet"],
        Argument: ["name", "value"],
        FragmentSpread: ["name", "directives"],
        InlineFragment: ["typeCondition", "directives", "selectionSet"],
        FragmentDefinition: [
          "name",
          // Note: fragment variable definitions are experimental and may be changed
          // or removed in the future.
          "variableDefinitions",
          "typeCondition",
          "directives",
          "selectionSet"
        ],
        IntValue: [],
        FloatValue: [],
        StringValue: [],
        BooleanValue: [],
        NullValue: [],
        EnumValue: [],
        ListValue: ["values"],
        ObjectValue: ["fields"],
        ObjectField: ["name", "value"],
        Directive: ["name", "arguments"],
        NamedType: ["name"],
        ListType: ["type"],
        NonNullType: ["type"],
        SchemaDefinition: ["directives", "operationTypes"],
        OperationTypeDefinition: ["type"],
        ScalarTypeDefinition: ["description", "name", "directives"],
        ObjectTypeDefinition: ["description", "name", "interfaces", "directives", "fields"],
        FieldDefinition: ["description", "name", "arguments", "type", "directives"],
        InputValueDefinition: ["description", "name", "type", "defaultValue", "directives"],
        InterfaceTypeDefinition: ["description", "name", "directives", "fields"],
        UnionTypeDefinition: ["description", "name", "directives", "types"],
        EnumTypeDefinition: ["description", "name", "directives", "values"],
        EnumValueDefinition: ["description", "name", "directives"],
        InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
        ScalarTypeExtension: ["name", "directives"],
        ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
        InterfaceTypeExtension: ["name", "directives", "fields"],
        UnionTypeExtension: ["name", "directives", "types"],
        EnumTypeExtension: ["name", "directives", "values"],
        InputObjectTypeExtension: ["name", "directives", "fields"],
        DirectiveDefinition: ["description", "name", "arguments", "locations"]
      };
      var BREAK = exports.BREAK = {};
      function visit3(root, visitor) {
        var visitorKeys = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : QueryDocumentKeys2;
        var stack = void 0;
        var inArray = Array.isArray(root);
        var keys = [root];
        var index = -1;
        var edits = [];
        var node = void 0;
        var key = void 0;
        var parent = void 0;
        var path = [];
        var ancestors = [];
        var newRoot = root;
        do {
          index++;
          var isLeaving = index === keys.length;
          var isEdited = isLeaving && edits.length !== 0;
          if (isLeaving) {
            key = ancestors.length === 0 ? void 0 : path[path.length - 1];
            node = parent;
            parent = ancestors.pop();
            if (isEdited) {
              if (inArray) {
                node = node.slice();
              } else {
                var clone = {};
                for (var k in node) {
                  if (node.hasOwnProperty(k)) {
                    clone[k] = node[k];
                  }
                }
                node = clone;
              }
              var editOffset = 0;
              for (var ii = 0; ii < edits.length; ii++) {
                var editKey = edits[ii][0];
                var editValue = edits[ii][1];
                if (inArray) {
                  editKey -= editOffset;
                }
                if (inArray && editValue === null) {
                  node.splice(editKey, 1);
                  editOffset++;
                } else {
                  node[editKey] = editValue;
                }
              }
            }
            index = stack.index;
            keys = stack.keys;
            edits = stack.edits;
            inArray = stack.inArray;
            stack = stack.prev;
          } else {
            key = parent ? inArray ? index : keys[index] : void 0;
            node = parent ? parent[key] : newRoot;
            if (node === null || node === void 0) {
              continue;
            }
            if (parent) {
              path.push(key);
            }
          }
          var result = void 0;
          if (!Array.isArray(node)) {
            if (!isNode(node)) {
              throw new Error("Invalid AST Node: " + JSON.stringify(node));
            }
            var visitFn = getVisitFn(visitor, node.kind, isLeaving);
            if (visitFn) {
              result = visitFn.call(visitor, node, key, parent, path, ancestors);
              if (result === BREAK) {
                break;
              }
              if (result === false) {
                if (!isLeaving) {
                  path.pop();
                  continue;
                }
              } else if (result !== void 0) {
                edits.push([key, result]);
                if (!isLeaving) {
                  if (isNode(result)) {
                    node = result;
                  } else {
                    path.pop();
                    continue;
                  }
                }
              }
            }
          }
          if (result === void 0 && isEdited) {
            edits.push([key, node]);
          }
          if (isLeaving) {
            path.pop();
          } else {
            stack = { inArray, index, keys, edits, prev: stack };
            inArray = Array.isArray(node);
            keys = inArray ? node : visitorKeys[node.kind] || [];
            index = -1;
            edits = [];
            if (parent) {
              ancestors.push(parent);
            }
            parent = node;
          }
        } while (stack !== void 0);
        if (edits.length !== 0) {
          newRoot = edits[edits.length - 1][1];
        }
        return newRoot;
      }
      function isNode(maybeNode) {
        return Boolean(maybeNode && typeof maybeNode.kind === "string");
      }
      function visitInParallel(visitors) {
        var skipping = new Array(visitors.length);
        return {
          enter: function enter(node) {
            for (var i = 0; i < visitors.length; i++) {
              if (!skipping[i]) {
                var fn = getVisitFn(
                  visitors[i],
                  node.kind,
                  /* isLeaving */
                  false
                );
                if (fn) {
                  var result = fn.apply(visitors[i], arguments);
                  if (result === false) {
                    skipping[i] = node;
                  } else if (result === BREAK) {
                    skipping[i] = BREAK;
                  } else if (result !== void 0) {
                    return result;
                  }
                }
              }
            }
          },
          leave: function leave(node) {
            for (var i = 0; i < visitors.length; i++) {
              if (!skipping[i]) {
                var fn = getVisitFn(
                  visitors[i],
                  node.kind,
                  /* isLeaving */
                  true
                );
                if (fn) {
                  var result = fn.apply(visitors[i], arguments);
                  if (result === BREAK) {
                    skipping[i] = BREAK;
                  } else if (result !== void 0 && result !== false) {
                    return result;
                  }
                }
              } else if (skipping[i] === node) {
                skipping[i] = null;
              }
            }
          }
        };
      }
      function visitWithTypeInfo(typeInfo, visitor) {
        return {
          enter: function enter(node) {
            typeInfo.enter(node);
            var fn = getVisitFn(
              visitor,
              node.kind,
              /* isLeaving */
              false
            );
            if (fn) {
              var result = fn.apply(visitor, arguments);
              if (result !== void 0) {
                typeInfo.leave(node);
                if (isNode(result)) {
                  typeInfo.enter(result);
                }
              }
              return result;
            }
          },
          leave: function leave(node) {
            var fn = getVisitFn(
              visitor,
              node.kind,
              /* isLeaving */
              true
            );
            var result = void 0;
            if (fn) {
              result = fn.apply(visitor, arguments);
            }
            typeInfo.leave(node);
            return result;
          }
        };
      }
      function getVisitFn(visitor, kind, isLeaving) {
        var kindVisitor = visitor[kind];
        if (kindVisitor) {
          if (!isLeaving && typeof kindVisitor === "function") {
            return kindVisitor;
          }
          var kindSpecificVisitor = isLeaving ? kindVisitor.leave : kindVisitor.enter;
          if (typeof kindSpecificVisitor === "function") {
            return kindSpecificVisitor;
          }
        } else {
          var specificVisitor = isLeaving ? visitor.leave : visitor.enter;
          if (specificVisitor) {
            if (typeof specificVisitor === "function") {
              return specificVisitor;
            }
            var specificKindVisitor = specificVisitor[kind];
            if (typeof specificKindVisitor === "function") {
              return specificKindVisitor;
            }
          }
        }
      }
    }
  });

  // node_modules/graphql/language/printer.js
  var require_printer = __commonJS({
    "node_modules/graphql/language/printer.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.print = print7;
      var _visitor = require_visitor();
      function print7(ast) {
        return (0, _visitor.visit)(ast, { leave: printDocASTReducer });
      }
      var printDocASTReducer = {
        Name: function Name(node) {
          return node.value;
        },
        Variable: function Variable(node) {
          return "$" + node.name;
        },
        // Document
        Document: function Document(node) {
          return join(node.definitions, "\n\n") + "\n";
        },
        OperationDefinition: function OperationDefinition(node) {
          var op = node.operation;
          var name = node.name;
          var varDefs = wrap2("(", join(node.variableDefinitions, ", "), ")");
          var directives = join(node.directives, " ");
          var selectionSet = node.selectionSet;
          return !name && !directives && !varDefs && op === "query" ? selectionSet : join([op, join([name, varDefs]), directives, selectionSet], " ");
        },
        VariableDefinition: function VariableDefinition(_ref) {
          var variable = _ref.variable, type = _ref.type, defaultValue = _ref.defaultValue;
          return variable + ": " + type + wrap2(" = ", defaultValue);
        },
        SelectionSet: function SelectionSet(_ref2) {
          var selections = _ref2.selections;
          return block(selections);
        },
        Field: function Field(_ref3) {
          var alias = _ref3.alias, name = _ref3.name, args = _ref3.arguments, directives = _ref3.directives, selectionSet = _ref3.selectionSet;
          return join([wrap2("", alias, ": ") + name + wrap2("(", join(args, ", "), ")"), join(directives, " "), selectionSet], " ");
        },
        Argument: function Argument(_ref4) {
          var name = _ref4.name, value = _ref4.value;
          return name + ": " + value;
        },
        // Fragments
        FragmentSpread: function FragmentSpread(_ref5) {
          var name = _ref5.name, directives = _ref5.directives;
          return "..." + name + wrap2(" ", join(directives, " "));
        },
        InlineFragment: function InlineFragment(_ref6) {
          var typeCondition = _ref6.typeCondition, directives = _ref6.directives, selectionSet = _ref6.selectionSet;
          return join(["...", wrap2("on ", typeCondition), join(directives, " "), selectionSet], " ");
        },
        FragmentDefinition: function FragmentDefinition(_ref7) {
          var name = _ref7.name, typeCondition = _ref7.typeCondition, variableDefinitions = _ref7.variableDefinitions, directives = _ref7.directives, selectionSet = _ref7.selectionSet;
          return (
            // Note: fragment variable definitions are experimental and may be changed
            // or removed in the future.
            "fragment " + name + wrap2("(", join(variableDefinitions, ", "), ")") + " " + ("on " + typeCondition + " " + wrap2("", join(directives, " "), " ")) + selectionSet
          );
        },
        // Value
        IntValue: function IntValue(_ref8) {
          var value = _ref8.value;
          return value;
        },
        FloatValue: function FloatValue(_ref9) {
          var value = _ref9.value;
          return value;
        },
        StringValue: function StringValue(_ref10, key) {
          var value = _ref10.value, isBlockString = _ref10.block;
          return isBlockString ? printBlockString(value, key === "description") : JSON.stringify(value);
        },
        BooleanValue: function BooleanValue(_ref11) {
          var value = _ref11.value;
          return value ? "true" : "false";
        },
        NullValue: function NullValue() {
          return "null";
        },
        EnumValue: function EnumValue(_ref12) {
          var value = _ref12.value;
          return value;
        },
        ListValue: function ListValue(_ref13) {
          var values2 = _ref13.values;
          return "[" + join(values2, ", ") + "]";
        },
        ObjectValue: function ObjectValue(_ref14) {
          var fields = _ref14.fields;
          return "{" + join(fields, ", ") + "}";
        },
        ObjectField: function ObjectField(_ref15) {
          var name = _ref15.name, value = _ref15.value;
          return name + ": " + value;
        },
        // Directive
        Directive: function Directive(_ref16) {
          var name = _ref16.name, args = _ref16.arguments;
          return "@" + name + wrap2("(", join(args, ", "), ")");
        },
        // Type
        NamedType: function NamedType(_ref17) {
          var name = _ref17.name;
          return name;
        },
        ListType: function ListType(_ref18) {
          var type = _ref18.type;
          return "[" + type + "]";
        },
        NonNullType: function NonNullType(_ref19) {
          var type = _ref19.type;
          return type + "!";
        },
        // Type System Definitions
        SchemaDefinition: function SchemaDefinition(_ref20) {
          var directives = _ref20.directives, operationTypes = _ref20.operationTypes;
          return join(["schema", join(directives, " "), block(operationTypes)], " ");
        },
        OperationTypeDefinition: function OperationTypeDefinition(_ref21) {
          var operation = _ref21.operation, type = _ref21.type;
          return operation + ": " + type;
        },
        ScalarTypeDefinition: addDescription(function(_ref22) {
          var name = _ref22.name, directives = _ref22.directives;
          return join(["scalar", name, join(directives, " ")], " ");
        }),
        ObjectTypeDefinition: addDescription(function(_ref23) {
          var name = _ref23.name, interfaces = _ref23.interfaces, directives = _ref23.directives, fields = _ref23.fields;
          return join(["type", name, wrap2("implements ", join(interfaces, " & ")), join(directives, " "), block(fields)], " ");
        }),
        FieldDefinition: addDescription(function(_ref24) {
          var name = _ref24.name, args = _ref24.arguments, type = _ref24.type, directives = _ref24.directives;
          return name + wrap2("(", join(args, ", "), ")") + ": " + type + wrap2(" ", join(directives, " "));
        }),
        InputValueDefinition: addDescription(function(_ref25) {
          var name = _ref25.name, type = _ref25.type, defaultValue = _ref25.defaultValue, directives = _ref25.directives;
          return join([name + ": " + type, wrap2("= ", defaultValue), join(directives, " ")], " ");
        }),
        InterfaceTypeDefinition: addDescription(function(_ref26) {
          var name = _ref26.name, directives = _ref26.directives, fields = _ref26.fields;
          return join(["interface", name, join(directives, " "), block(fields)], " ");
        }),
        UnionTypeDefinition: addDescription(function(_ref27) {
          var name = _ref27.name, directives = _ref27.directives, types = _ref27.types;
          return join(["union", name, join(directives, " "), types && types.length !== 0 ? "= " + join(types, " | ") : ""], " ");
        }),
        EnumTypeDefinition: addDescription(function(_ref28) {
          var name = _ref28.name, directives = _ref28.directives, values2 = _ref28.values;
          return join(["enum", name, join(directives, " "), block(values2)], " ");
        }),
        EnumValueDefinition: addDescription(function(_ref29) {
          var name = _ref29.name, directives = _ref29.directives;
          return join([name, join(directives, " ")], " ");
        }),
        InputObjectTypeDefinition: addDescription(function(_ref30) {
          var name = _ref30.name, directives = _ref30.directives, fields = _ref30.fields;
          return join(["input", name, join(directives, " "), block(fields)], " ");
        }),
        ScalarTypeExtension: function ScalarTypeExtension(_ref31) {
          var name = _ref31.name, directives = _ref31.directives;
          return join(["extend scalar", name, join(directives, " ")], " ");
        },
        ObjectTypeExtension: function ObjectTypeExtension(_ref32) {
          var name = _ref32.name, interfaces = _ref32.interfaces, directives = _ref32.directives, fields = _ref32.fields;
          return join(["extend type", name, wrap2("implements ", join(interfaces, " & ")), join(directives, " "), block(fields)], " ");
        },
        InterfaceTypeExtension: function InterfaceTypeExtension(_ref33) {
          var name = _ref33.name, directives = _ref33.directives, fields = _ref33.fields;
          return join(["extend interface", name, join(directives, " "), block(fields)], " ");
        },
        UnionTypeExtension: function UnionTypeExtension(_ref34) {
          var name = _ref34.name, directives = _ref34.directives, types = _ref34.types;
          return join(["extend union", name, join(directives, " "), types && types.length !== 0 ? "= " + join(types, " | ") : ""], " ");
        },
        EnumTypeExtension: function EnumTypeExtension(_ref35) {
          var name = _ref35.name, directives = _ref35.directives, values2 = _ref35.values;
          return join(["extend enum", name, join(directives, " "), block(values2)], " ");
        },
        InputObjectTypeExtension: function InputObjectTypeExtension(_ref36) {
          var name = _ref36.name, directives = _ref36.directives, fields = _ref36.fields;
          return join(["extend input", name, join(directives, " "), block(fields)], " ");
        },
        DirectiveDefinition: addDescription(function(_ref37) {
          var name = _ref37.name, args = _ref37.arguments, locations = _ref37.locations;
          return "directive @" + name + wrap2("(", join(args, ", "), ")") + " on " + join(locations, " | ");
        })
      };
      function addDescription(cb) {
        return function(node) {
          return join([node.description, cb(node)], "\n");
        };
      }
      function join(maybeArray, separator) {
        return maybeArray ? maybeArray.filter(function(x) {
          return x;
        }).join(separator || "") : "";
      }
      function block(array) {
        return array && array.length !== 0 ? "{\n" + indent(join(array, "\n")) + "\n}" : "";
      }
      function wrap2(start, maybeString, end) {
        return maybeString ? start + maybeString + (end || "") : "";
      }
      function indent(maybeString) {
        return maybeString && "  " + maybeString.replace(/\n/g, "\n  ");
      }
      function printBlockString(value, isDescription) {
        var escaped = value.replace(/"""/g, '\\"""');
        return (value[0] === " " || value[0] === "	") && value.indexOf("\n") === -1 ? '"""' + escaped.replace(/"$/, '"\n') + '"""' : '"""\n' + (isDescription ? escaped : indent(escaped)) + '\n"""';
      }
    }
  });

  // node_modules/fast-json-stable-stringify/index.js
  var require_fast_json_stable_stringify = __commonJS({
    "node_modules/fast-json-stable-stringify/index.js"(exports, module) {
      "use strict";
      module.exports = function(data, opts) {
        if (!opts)
          opts = {};
        if (typeof opts === "function")
          opts = { cmp: opts };
        var cycles = typeof opts.cycles === "boolean" ? opts.cycles : false;
        var cmp = opts.cmp && function(f) {
          return function(node) {
            return function(a, b) {
              var aobj = { key: a, value: node[a] };
              var bobj = { key: b, value: node[b] };
              return f(aobj, bobj);
            };
          };
        }(opts.cmp);
        var seen = [];
        return function stringify5(node) {
          if (node && node.toJSON && typeof node.toJSON === "function") {
            node = node.toJSON();
          }
          if (node === void 0)
            return;
          if (typeof node == "number")
            return isFinite(node) ? "" + node : "null";
          if (typeof node !== "object")
            return JSON.stringify(node);
          var i, out;
          if (Array.isArray(node)) {
            out = "[";
            for (i = 0; i < node.length; i++) {
              if (i)
                out += ",";
              out += stringify5(node[i]) || "null";
            }
            return out + "]";
          }
          if (node === null)
            return "null";
          if (seen.indexOf(node) !== -1) {
            if (cycles)
              return JSON.stringify("__cycle__");
            throw new TypeError("Converting circular structure to JSON");
          }
          var seenIndex = seen.push(node) - 1;
          var keys = Object.keys(node).sort(cmp && cmp(node));
          out = "";
          for (i = 0; i < keys.length; i++) {
            var key = keys[i];
            var value = stringify5(node[key]);
            if (!value)
              continue;
            if (out)
              out += ",";
            out += JSON.stringify(key) + ":" + value;
          }
          seen.splice(seenIndex, 1);
          return "{" + out + "}";
        }(data);
      };
    }
  });

  // node_modules/apollo-utilities/lib/storeUtils.js
  function isStringValue(value) {
    return value.kind === "StringValue";
  }
  function isBooleanValue(value) {
    return value.kind === "BooleanValue";
  }
  function isIntValue(value) {
    return value.kind === "IntValue";
  }
  function isFloatValue(value) {
    return value.kind === "FloatValue";
  }
  function isVariable(value) {
    return value.kind === "Variable";
  }
  function isObjectValue(value) {
    return value.kind === "ObjectValue";
  }
  function isListValue(value) {
    return value.kind === "ListValue";
  }
  function isEnumValue(value) {
    return value.kind === "EnumValue";
  }
  function isNullValue(value) {
    return value.kind === "NullValue";
  }
  function valueToObjectRepresentation(argObj, name, value, variables) {
    if (isIntValue(value) || isFloatValue(value)) {
      argObj[name.value] = Number(value.value);
    } else if (isBooleanValue(value) || isStringValue(value)) {
      argObj[name.value] = value.value;
    } else if (isObjectValue(value)) {
      var nestedArgObj_1 = {};
      value.fields.map(function(obj) {
        return valueToObjectRepresentation(nestedArgObj_1, obj.name, obj.value, variables);
      });
      argObj[name.value] = nestedArgObj_1;
    } else if (isVariable(value)) {
      var variableValue = (variables || {})[value.name.value];
      argObj[name.value] = variableValue;
    } else if (isListValue(value)) {
      argObj[name.value] = value.values.map(function(listValue) {
        var nestedArgArrayObj = {};
        valueToObjectRepresentation(nestedArgArrayObj, name, listValue, variables);
        return nestedArgArrayObj[name.value];
      });
    } else if (isEnumValue(value)) {
      argObj[name.value] = value.value;
    } else if (isNullValue(value)) {
      argObj[name.value] = null;
    } else {
      throw new Error('The inline argument "' + name.value + '" of kind "' + value.kind + '" is not supported.\n                    Use variables instead of inline arguments to overcome this limitation.');
    }
  }
  var import_fast_json_stable_stringify;
  var init_storeUtils = __esm({
    "node_modules/apollo-utilities/lib/storeUtils.js"() {
      import_fast_json_stable_stringify = __toESM(require_fast_json_stable_stringify());
    }
  });

  // node_modules/apollo-utilities/lib/directives.js
  function flattenSelections(selection) {
    if (!selection.selectionSet || !(selection.selectionSet.selections.length > 0))
      return [selection];
    return [selection].concat(selection.selectionSet.selections.map(function(selectionNode) {
      return [selectionNode].concat(flattenSelections(selectionNode));
    }).reduce(function(selections, selected) {
      return selections.concat(selected);
    }, []));
  }
  function getDirectiveNames(doc) {
    var directiveNames = doc.definitions.filter(function(definition) {
      return definition.selectionSet && definition.selectionSet.selections;
    }).map(function(x) {
      return flattenSelections(x);
    }).reduce(function(selections, selected) {
      return selections.concat(selected);
    }, []).filter(function(selection) {
      return selection.directives && selection.directives.length > 0;
    }).map(function(selection) {
      return selection.directives;
    }).reduce(function(directives, directive) {
      return directives.concat(directive);
    }, []).map(function(directive) {
      return directive.name.value;
    });
    return directiveNames;
  }
  function hasDirectives(names, doc) {
    return getDirectiveNames(doc).some(function(name) {
      return names.indexOf(name) > -1;
    });
  }
  var init_directives = __esm({
    "node_modules/apollo-utilities/lib/directives.js"() {
    }
  });

  // node_modules/apollo-utilities/lib/fragments.js
  var init_fragments = __esm({
    "node_modules/apollo-utilities/lib/fragments.js"() {
    }
  });

  // node_modules/apollo-utilities/lib/util/assign.js
  function assign(target) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      sources[_i - 1] = arguments[_i];
    }
    sources.forEach(function(source) {
      if (typeof source === "undefined" || source === null) {
        return;
      }
      Object.keys(source).forEach(function(key) {
        target[key] = source[key];
      });
    });
    return target;
  }
  var init_assign = __esm({
    "node_modules/apollo-utilities/lib/util/assign.js"() {
    }
  });

  // node_modules/apollo-utilities/lib/getFromAST.js
  function getMutationDefinition(doc) {
    checkDocument(doc);
    var mutationDef = doc.definitions.filter(function(definition) {
      return definition.kind === "OperationDefinition" && definition.operation === "mutation";
    })[0];
    if (!mutationDef) {
      throw new Error("Must contain a mutation definition.");
    }
    return mutationDef;
  }
  function checkDocument(doc) {
    if (doc.kind !== "Document") {
      throw new Error('Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql');
    }
    var operations = doc.definitions.filter(function(d) {
      return d.kind !== "FragmentDefinition";
    }).map(function(definition) {
      if (definition.kind !== "OperationDefinition") {
        throw new Error('Schema type definitions not allowed in queries. Found: "' + definition.kind + '"');
      }
      return definition;
    });
    if (operations.length > 1) {
      throw new Error("Ambiguous GraphQL document: contains " + operations.length + " operations");
    }
  }
  function getOperationDefinition(doc) {
    checkDocument(doc);
    return doc.definitions.filter(function(definition) {
      return definition.kind === "OperationDefinition";
    })[0];
  }
  function getOperationDefinitionOrDie(document2) {
    var def = getOperationDefinition(document2);
    if (!def) {
      throw new Error("GraphQL document is missing an operation");
    }
    return def;
  }
  function getOperationName(doc) {
    return doc.definitions.filter(function(definition) {
      return definition.kind === "OperationDefinition" && definition.name;
    }).map(function(x) {
      return x.name.value;
    })[0] || null;
  }
  function getFragmentDefinitions(doc) {
    return doc.definitions.filter(function(definition) {
      return definition.kind === "FragmentDefinition";
    });
  }
  function getQueryDefinition(doc) {
    var queryDef = getOperationDefinition(doc);
    if (!queryDef || queryDef.operation !== "query") {
      throw new Error("Must contain a query definition.");
    }
    return queryDef;
  }
  function createFragmentMap(fragments) {
    if (fragments === void 0) {
      fragments = [];
    }
    var symTable = {};
    fragments.forEach(function(fragment) {
      symTable[fragment.name.value] = fragment;
    });
    return symTable;
  }
  function getDefaultValues(definition) {
    if (definition && definition.variableDefinitions && definition.variableDefinitions.length) {
      var defaultValues = definition.variableDefinitions.filter(function(_a4) {
        var defaultValue = _a4.defaultValue;
        return defaultValue;
      }).map(function(_a4) {
        var variable = _a4.variable, defaultValue = _a4.defaultValue;
        var defaultValueObj = {};
        valueToObjectRepresentation(defaultValueObj, variable.name, defaultValue);
        return defaultValueObj;
      });
      return assign.apply(void 0, [{}].concat(defaultValues));
    }
    return {};
  }
  var init_getFromAST = __esm({
    "node_modules/apollo-utilities/lib/getFromAST.js"() {
      init_assign();
      init_storeUtils();
    }
  });

  // node_modules/apollo-utilities/lib/util/cloneDeep.js
  function cloneDeep(value) {
    if (Array.isArray(value)) {
      return value.map(function(item) {
        return cloneDeep(item);
      });
    }
    if (value !== null && typeof value === "object") {
      var nextValue = {};
      for (var key in value) {
        if (value.hasOwnProperty(key)) {
          nextValue[key] = cloneDeep(value[key]);
        }
      }
      return nextValue;
    }
    return value;
  }
  var init_cloneDeep = __esm({
    "node_modules/apollo-utilities/lib/util/cloneDeep.js"() {
    }
  });

  // node_modules/apollo-utilities/lib/transform.js
  function isNotEmpty(op, fragments) {
    return op.selectionSet.selections.filter(function(selectionSet) {
      return !(selectionSet && // look into fragments to verify they should stay
      selectionSet.kind === "FragmentSpread" && // see if the fragment in the map is valid (recursively)
      !isNotEmpty(fragments[selectionSet.name.value], fragments));
    }).length > 0;
  }
  function getDirectiveMatcher(directives) {
    return function directiveMatcher(directive) {
      return directives.some(function(dir) {
        if (dir.name && dir.name === directive.name.value)
          return true;
        if (dir.test && dir.test(directive))
          return true;
        return false;
      });
    };
  }
  function removeDirectivesFromSelectionSet(directives, selectionSet) {
    if (!selectionSet.selections)
      return selectionSet;
    var agressiveRemove = directives.some(function(dir) {
      return dir.remove;
    });
    selectionSet.selections = selectionSet.selections.map(function(selection) {
      if (selection.kind !== "Field" || !selection || !selection.directives)
        return selection;
      var directiveMatcher = getDirectiveMatcher(directives);
      var remove;
      selection.directives = selection.directives.filter(function(directive) {
        var shouldKeep = !directiveMatcher(directive);
        if (!remove && !shouldKeep && agressiveRemove)
          remove = true;
        return shouldKeep;
      });
      return remove ? null : selection;
    }).filter(function(x) {
      return !!x;
    });
    selectionSet.selections.forEach(function(selection) {
      if ((selection.kind === "Field" || selection.kind === "InlineFragment") && selection.selectionSet) {
        removeDirectivesFromSelectionSet(directives, selection.selectionSet);
      }
    });
    return selectionSet;
  }
  function removeDirectivesFromDocument(directives, doc) {
    var docClone = cloneDeep(doc);
    docClone.definitions.forEach(function(definition) {
      removeDirectivesFromSelectionSet(directives, definition.selectionSet);
    });
    var operation = getOperationDefinitionOrDie(docClone);
    var fragments = createFragmentMap(getFragmentDefinitions(docClone));
    return isNotEmpty(operation, fragments) ? docClone : null;
  }
  function removeConnectionDirectiveFromDocument(doc) {
    checkDocument(doc);
    return removeDirectivesFromDocument([connectionRemoveConfig], doc);
  }
  var connectionRemoveConfig;
  var init_transform = __esm({
    "node_modules/apollo-utilities/lib/transform.js"() {
      init_cloneDeep();
      init_getFromAST();
      connectionRemoveConfig = {
        test: function(directive) {
          var willRemove = directive.name.value === "connection";
          if (willRemove) {
            if (!directive.arguments || !directive.arguments.some(function(arg) {
              return arg.name.value === "key";
            })) {
              console.warn("Removing an @connection directive even though it does not have a key. You may want to use the key parameter to specify a store key.");
            }
          }
          return willRemove;
        }
      };
    }
  });

  // node_modules/apollo-utilities/lib/util/environment.js
  function getEnv() {
    if (typeof process !== "undefined" && "production") {
      return "production";
    }
    return "development";
  }
  function isEnv(env) {
    return getEnv() === env;
  }
  function isProduction() {
    return isEnv("production") === true;
  }
  function isDevelopment() {
    return isEnv("development") === true;
  }
  function isTest() {
    return isEnv("test") === true;
  }
  var init_environment = __esm({
    "node_modules/apollo-utilities/lib/util/environment.js"() {
    }
  });

  // node_modules/apollo-utilities/lib/util/errorHandling.js
  function tryFunctionOrLogError(f) {
    try {
      return f();
    } catch (e) {
      if (console.error) {
        console.error(e);
      }
    }
  }
  function graphQLResultHasError(result) {
    return result.errors && result.errors.length;
  }
  var init_errorHandling = __esm({
    "node_modules/apollo-utilities/lib/util/errorHandling.js"() {
    }
  });

  // node_modules/apollo-utilities/lib/util/isEqual.js
  function isEqual(a, b) {
    if (a === b) {
      return true;
    }
    if (a instanceof Date && b instanceof Date) {
      return a.getTime() === b.getTime();
    }
    if (a != null && typeof a === "object" && b != null && typeof b === "object") {
      for (var key in a) {
        if (Object.prototype.hasOwnProperty.call(a, key)) {
          if (!Object.prototype.hasOwnProperty.call(b, key)) {
            return false;
          }
          if (!isEqual(a[key], b[key])) {
            return false;
          }
        }
      }
      for (var key in b) {
        if (!Object.prototype.hasOwnProperty.call(a, key)) {
          return false;
        }
      }
      return true;
    }
    return false;
  }
  var init_isEqual = __esm({
    "node_modules/apollo-utilities/lib/util/isEqual.js"() {
    }
  });

  // node_modules/apollo-utilities/lib/util/maybeDeepFreeze.js
  function deepFreeze(o) {
    Object.freeze(o);
    Object.getOwnPropertyNames(o).forEach(function(prop) {
      if (o[prop] !== null && (typeof o[prop] === "object" || typeof o[prop] === "function") && !Object.isFrozen(o[prop])) {
        deepFreeze(o[prop]);
      }
    });
    return o;
  }
  function maybeDeepFreeze(obj) {
    if (isDevelopment() || isTest()) {
      var symbolIsPolyfilled = typeof Symbol === "function" && typeof Symbol("") === "string";
      if (!symbolIsPolyfilled) {
        return deepFreeze(obj);
      }
    }
    return obj;
  }
  var init_maybeDeepFreeze = __esm({
    "node_modules/apollo-utilities/lib/util/maybeDeepFreeze.js"() {
      init_environment();
    }
  });

  // node_modules/apollo-utilities/lib/util/warnOnce.js
  var init_warnOnce = __esm({
    "node_modules/apollo-utilities/lib/util/warnOnce.js"() {
    }
  });

  // node_modules/apollo-utilities/lib/util/stripSymbols.js
  var init_stripSymbols = __esm({
    "node_modules/apollo-utilities/lib/util/stripSymbols.js"() {
    }
  });

  // node_modules/apollo-utilities/lib/index.js
  var init_lib = __esm({
    "node_modules/apollo-utilities/lib/index.js"() {
      init_directives();
      init_fragments();
      init_getFromAST();
      init_transform();
      init_storeUtils();
      init_assign();
      init_cloneDeep();
      init_environment();
      init_errorHandling();
      init_isEqual();
      init_maybeDeepFreeze();
      init_warnOnce();
      init_stripSymbols();
    }
  });

  // node_modules/apollo-client/core/networkStatus.js
  function isNetworkRequestInFlight(networkStatus) {
    return networkStatus < 7;
  }
  var NetworkStatus;
  var init_networkStatus = __esm({
    "node_modules/apollo-client/core/networkStatus.js"() {
      (function(NetworkStatus2) {
        NetworkStatus2[NetworkStatus2["loading"] = 1] = "loading";
        NetworkStatus2[NetworkStatus2["setVariables"] = 2] = "setVariables";
        NetworkStatus2[NetworkStatus2["fetchMore"] = 3] = "fetchMore";
        NetworkStatus2[NetworkStatus2["refetch"] = 4] = "refetch";
        NetworkStatus2[NetworkStatus2["poll"] = 6] = "poll";
        NetworkStatus2[NetworkStatus2["ready"] = 7] = "ready";
        NetworkStatus2[NetworkStatus2["error"] = 8] = "error";
      })(NetworkStatus || (NetworkStatus = {}));
    }
  });

  // node_modules/zen-observable/lib/Observable.js
  var require_Observable = __commonJS({
    "node_modules/zen-observable/lib/Observable.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _createClass = function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      var hasSymbols = function() {
        return typeof Symbol === "function";
      };
      var hasSymbol = function(name) {
        return hasSymbols() && Boolean(Symbol[name]);
      };
      var getSymbol = function(name) {
        return hasSymbol(name) ? Symbol[name] : "@@" + name;
      };
      if (hasSymbols() && !hasSymbol("observable")) {
        Symbol.observable = Symbol("observable");
      }
      function getMethod(obj, key) {
        var value = obj[key];
        if (value == null)
          return void 0;
        if (typeof value !== "function")
          throw new TypeError(value + " is not a function");
        return value;
      }
      function getSpecies(obj) {
        var ctor = obj.constructor;
        if (ctor !== void 0) {
          ctor = ctor[getSymbol("species")];
          if (ctor === null) {
            ctor = void 0;
          }
        }
        return ctor !== void 0 ? ctor : Observable5;
      }
      function isObservable(x) {
        return x instanceof Observable5;
      }
      function hostReportError(e) {
        if (hostReportError.log) {
          hostReportError.log(e);
        } else {
          setTimeout(function() {
            throw e;
          });
        }
      }
      function enqueue(fn) {
        Promise.resolve().then(function() {
          try {
            fn();
          } catch (e) {
            hostReportError(e);
          }
        });
      }
      function cleanupSubscription(subscription) {
        var cleanup = subscription._cleanup;
        if (cleanup === void 0)
          return;
        subscription._cleanup = void 0;
        if (!cleanup) {
          return;
        }
        try {
          if (typeof cleanup === "function") {
            cleanup();
          } else {
            var unsubscribe = getMethod(cleanup, "unsubscribe");
            if (unsubscribe) {
              unsubscribe.call(cleanup);
            }
          }
        } catch (e) {
          hostReportError(e);
        }
      }
      function closeSubscription(subscription) {
        subscription._observer = void 0;
        subscription._queue = void 0;
        subscription._state = "closed";
      }
      function flushSubscription(subscription) {
        var queue = subscription._queue;
        if (!queue) {
          return;
        }
        subscription._queue = void 0;
        subscription._state = "ready";
        for (var i = 0; i < queue.length; ++i) {
          notifySubscription(subscription, queue[i].type, queue[i].value);
          if (subscription._state === "closed")
            break;
        }
      }
      function notifySubscription(subscription, type, value) {
        subscription._state = "running";
        var observer = subscription._observer;
        try {
          var m = getMethod(observer, type);
          switch (type) {
            case "next":
              if (m)
                m.call(observer, value);
              break;
            case "error":
              closeSubscription(subscription);
              if (m)
                m.call(observer, value);
              else
                throw value;
              break;
            case "complete":
              closeSubscription(subscription);
              if (m)
                m.call(observer);
              break;
          }
        } catch (e) {
          hostReportError(e);
        }
        if (subscription._state === "closed")
          cleanupSubscription(subscription);
        else if (subscription._state === "running")
          subscription._state = "ready";
      }
      function onNotify(subscription, type, value) {
        if (subscription._state === "closed")
          return;
        if (subscription._state === "buffering") {
          subscription._queue.push({ type, value });
          return;
        }
        if (subscription._state !== "ready") {
          subscription._state = "buffering";
          subscription._queue = [{ type, value }];
          enqueue(function() {
            return flushSubscription(subscription);
          });
          return;
        }
        notifySubscription(subscription, type, value);
      }
      var Subscription = function() {
        function Subscription2(observer, subscriber) {
          _classCallCheck(this, Subscription2);
          this._cleanup = void 0;
          this._observer = observer;
          this._queue = void 0;
          this._state = "initializing";
          var subscriptionObserver = new SubscriptionObserver(this);
          try {
            this._cleanup = subscriber.call(void 0, subscriptionObserver);
          } catch (e) {
            subscriptionObserver.error(e);
          }
          if (this._state === "initializing")
            this._state = "ready";
        }
        _createClass(Subscription2, [{
          key: "unsubscribe",
          value: function unsubscribe() {
            if (this._state !== "closed") {
              closeSubscription(this);
              cleanupSubscription(this);
            }
          }
        }, {
          key: "closed",
          get: function() {
            return this._state === "closed";
          }
        }]);
        return Subscription2;
      }();
      var SubscriptionObserver = function() {
        function SubscriptionObserver2(subscription) {
          _classCallCheck(this, SubscriptionObserver2);
          this._subscription = subscription;
        }
        _createClass(SubscriptionObserver2, [{
          key: "next",
          value: function next(value) {
            onNotify(this._subscription, "next", value);
          }
        }, {
          key: "error",
          value: function error(value) {
            onNotify(this._subscription, "error", value);
          }
        }, {
          key: "complete",
          value: function complete() {
            onNotify(this._subscription, "complete");
          }
        }, {
          key: "closed",
          get: function() {
            return this._subscription._state === "closed";
          }
        }]);
        return SubscriptionObserver2;
      }();
      var Observable5 = exports.Observable = function() {
        function Observable6(subscriber) {
          _classCallCheck(this, Observable6);
          if (!(this instanceof Observable6))
            throw new TypeError("Observable cannot be called as a function");
          if (typeof subscriber !== "function")
            throw new TypeError("Observable initializer must be a function");
          this._subscriber = subscriber;
        }
        _createClass(Observable6, [{
          key: "subscribe",
          value: function subscribe(observer) {
            if (typeof observer !== "object" || observer === null) {
              observer = {
                next: observer,
                error: arguments[1],
                complete: arguments[2]
              };
            }
            return new Subscription(observer, this._subscriber);
          }
        }, {
          key: "forEach",
          value: function forEach4(fn) {
            var _this = this;
            return new Promise(function(resolve2, reject2) {
              if (typeof fn !== "function") {
                reject2(new TypeError(fn + " is not a function"));
                return;
              }
              function done() {
                subscription.unsubscribe();
                resolve2();
              }
              var subscription = _this.subscribe({
                next: function(value) {
                  try {
                    fn(value, done);
                  } catch (e) {
                    reject2(e);
                    subscription.unsubscribe();
                  }
                },
                error: reject2,
                complete: resolve2
              });
            });
          }
        }, {
          key: "map",
          value: function map(fn) {
            var _this2 = this;
            if (typeof fn !== "function")
              throw new TypeError(fn + " is not a function");
            var C = getSpecies(this);
            return new C(function(observer) {
              return _this2.subscribe({
                next: function(value) {
                  try {
                    value = fn(value);
                  } catch (e) {
                    return observer.error(e);
                  }
                  observer.next(value);
                },
                error: function(e) {
                  observer.error(e);
                },
                complete: function() {
                  observer.complete();
                }
              });
            });
          }
        }, {
          key: "filter",
          value: function filter(fn) {
            var _this3 = this;
            if (typeof fn !== "function")
              throw new TypeError(fn + " is not a function");
            var C = getSpecies(this);
            return new C(function(observer) {
              return _this3.subscribe({
                next: function(value) {
                  try {
                    if (!fn(value))
                      return;
                  } catch (e) {
                    return observer.error(e);
                  }
                  observer.next(value);
                },
                error: function(e) {
                  observer.error(e);
                },
                complete: function() {
                  observer.complete();
                }
              });
            });
          }
        }, {
          key: "reduce",
          value: function reduce3(fn) {
            var _this4 = this;
            if (typeof fn !== "function")
              throw new TypeError(fn + " is not a function");
            var C = getSpecies(this);
            var hasSeed = arguments.length > 1;
            var hasValue = false;
            var seed = arguments[1];
            var acc = seed;
            return new C(function(observer) {
              return _this4.subscribe({
                next: function(value) {
                  var first = !hasValue;
                  hasValue = true;
                  if (!first || hasSeed) {
                    try {
                      acc = fn(acc, value);
                    } catch (e) {
                      return observer.error(e);
                    }
                  } else {
                    acc = value;
                  }
                },
                error: function(e) {
                  observer.error(e);
                },
                complete: function() {
                  if (!hasValue && !hasSeed)
                    return observer.error(new TypeError("Cannot reduce an empty sequence"));
                  observer.next(acc);
                  observer.complete();
                }
              });
            });
          }
        }, {
          key: "concat",
          value: function concat5() {
            var _this5 = this;
            for (var _len = arguments.length, sources = Array(_len), _key = 0; _key < _len; _key++) {
              sources[_key] = arguments[_key];
            }
            var C = getSpecies(this);
            return new C(function(observer) {
              var subscription = void 0;
              function startNext(next) {
                subscription = next.subscribe({
                  next: function(v) {
                    observer.next(v);
                  },
                  error: function(e) {
                    observer.error(e);
                  },
                  complete: function() {
                    if (sources.length === 0) {
                      subscription = void 0;
                      observer.complete();
                    } else {
                      startNext(C.from(sources.shift()));
                    }
                  }
                });
              }
              startNext(_this5);
              return function() {
                if (subscription) {
                  subscription = void 0;
                  subscription.unsubscribe();
                }
              };
            });
          }
        }, {
          key: "flatMap",
          value: function flatMap2(fn) {
            var _this6 = this;
            if (typeof fn !== "function")
              throw new TypeError(fn + " is not a function");
            var C = getSpecies(this);
            return new C(function(observer) {
              var subscriptions = [];
              var outer = _this6.subscribe({
                next: function(value) {
                  if (fn) {
                    try {
                      value = fn(value);
                    } catch (e) {
                      return observer.error(e);
                    }
                  }
                  var inner = C.from(value).subscribe({
                    next: function(value2) {
                      observer.next(value2);
                    },
                    error: function(e) {
                      observer.error(e);
                    },
                    complete: function() {
                      var i = subscriptions.indexOf(inner);
                      if (i >= 0)
                        subscriptions.splice(i, 1);
                      completeIfDone();
                    }
                  });
                  subscriptions.push(inner);
                },
                error: function(e) {
                  observer.error(e);
                },
                complete: function() {
                  completeIfDone();
                }
              });
              function completeIfDone() {
                if (outer.closed && subscriptions.length === 0)
                  observer.complete();
              }
              return function() {
                subscriptions.forEach(function(s) {
                  return s.unsubscribe();
                });
                outer.unsubscribe();
              };
            });
          }
        }, {
          key: getSymbol("observable"),
          value: function() {
            return this;
          }
        }], [{
          key: "from",
          value: function from4(x) {
            var C = typeof this === "function" ? this : Observable6;
            if (x == null)
              throw new TypeError(x + " is not an object");
            var method = getMethod(x, getSymbol("observable"));
            if (method) {
              var observable = method.call(x);
              if (Object(observable) !== observable)
                throw new TypeError(observable + " is not an object");
              if (isObservable(observable) && observable.constructor === C)
                return observable;
              return new C(function(observer) {
                return observable.subscribe(observer);
              });
            }
            if (hasSymbol("iterator")) {
              method = getMethod(x, getSymbol("iterator"));
              if (method) {
                return new C(function(observer) {
                  enqueue(function() {
                    if (observer.closed)
                      return;
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = void 0;
                    try {
                      for (var _iterator = method.call(x)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var item = _step.value;
                        observer.next(item);
                        if (observer.closed)
                          return;
                      }
                    } catch (err) {
                      _didIteratorError = true;
                      _iteratorError = err;
                    } finally {
                      try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                          _iterator.return();
                        }
                      } finally {
                        if (_didIteratorError) {
                          throw _iteratorError;
                        }
                      }
                    }
                    observer.complete();
                  });
                });
              }
            }
            if (Array.isArray(x)) {
              return new C(function(observer) {
                enqueue(function() {
                  if (observer.closed)
                    return;
                  for (var i = 0; i < x.length; ++i) {
                    observer.next(x[i]);
                    if (observer.closed)
                      return;
                  }
                  observer.complete();
                });
              });
            }
            throw new TypeError(x + " is not observable");
          }
        }, {
          key: "of",
          value: function of() {
            for (var _len2 = arguments.length, items = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              items[_key2] = arguments[_key2];
            }
            var C = typeof this === "function" ? this : Observable6;
            return new C(function(observer) {
              enqueue(function() {
                if (observer.closed)
                  return;
                for (var i = 0; i < items.length; ++i) {
                  observer.next(items[i]);
                  if (observer.closed)
                    return;
                }
                observer.complete();
              });
            });
          }
        }, {
          key: getSymbol("species"),
          get: function() {
            return this;
          }
        }]);
        return Observable6;
      }();
      if (hasSymbols()) {
        Object.defineProperty(Observable5, Symbol("extensions"), {
          value: {
            symbol: getSymbol("observable"),
            hostReportError
          },
          configurabe: true
        });
      }
    }
  });

  // node_modules/zen-observable/index.js
  var require_zen_observable = __commonJS({
    "node_modules/zen-observable/index.js"(exports, module) {
      module.exports = require_Observable().Observable;
    }
  });

  // node_modules/zen-observable-ts/lib/zenObservable.js
  var import_zen_observable, Observable;
  var init_zenObservable = __esm({
    "node_modules/zen-observable-ts/lib/zenObservable.js"() {
      import_zen_observable = __toESM(require_zen_observable());
      Observable = import_zen_observable.default;
    }
  });

  // node_modules/zen-observable-ts/lib/index.js
  var lib_default;
  var init_lib2 = __esm({
    "node_modules/zen-observable-ts/lib/index.js"() {
      init_zenObservable();
      init_zenObservable();
      lib_default = Observable;
    }
  });

  // node_modules/apollo-link/lib/linkUtils.js
  function validateOperation(operation) {
    var OPERATION_FIELDS = [
      "query",
      "operationName",
      "variables",
      "extensions",
      "context"
    ];
    for (var _i = 0, _a4 = Object.keys(operation); _i < _a4.length; _i++) {
      var key = _a4[_i];
      if (OPERATION_FIELDS.indexOf(key) < 0) {
        throw new Error("illegal argument: " + key);
      }
    }
    return operation;
  }
  function isTerminating(link) {
    return link.request.length <= 1;
  }
  function fromError(errorValue) {
    return new lib_default(function(observer) {
      observer.error(errorValue);
    });
  }
  function transformOperation(operation) {
    var transformedOperation = {
      variables: operation.variables || {},
      extensions: operation.extensions || {},
      operationName: operation.operationName,
      query: operation.query
    };
    if (!transformedOperation.operationName) {
      transformedOperation.operationName = typeof transformedOperation.query !== "string" ? getOperationName(transformedOperation.query) : "";
    }
    return transformedOperation;
  }
  function createOperation(starting, operation) {
    var context = __assign({}, starting);
    var setContext = function(next) {
      if (typeof next === "function") {
        context = __assign({}, context, next(context));
      } else {
        context = __assign({}, context, next);
      }
    };
    var getContext = function() {
      return __assign({}, context);
    };
    Object.defineProperty(operation, "setContext", {
      enumerable: false,
      value: setContext
    });
    Object.defineProperty(operation, "getContext", {
      enumerable: false,
      value: getContext
    });
    Object.defineProperty(operation, "toKey", {
      enumerable: false,
      value: function() {
        return getKey(operation);
      }
    });
    return operation;
  }
  function getKey(operation) {
    return (0, import_printer.print)(operation.query) + "|" + JSON.stringify(operation.variables) + "|" + operation.operationName;
  }
  var import_printer, __extends, __assign, LinkError;
  var init_linkUtils = __esm({
    "node_modules/apollo-link/lib/linkUtils.js"() {
      init_lib();
      init_lib2();
      import_printer = __toESM(require_printer());
      __extends = function() {
        var extendStatics4 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b)
            if (b.hasOwnProperty(p))
              d[p] = b[p];
        };
        return function(d, b) {
          extendStatics4(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      LinkError = /** @class */
      function(_super) {
        __extends(LinkError4, _super);
        function LinkError4(message, link) {
          var _this = _super.call(this, message) || this;
          _this.link = link;
          return _this;
        }
        return LinkError4;
      }(Error);
    }
  });

  // node_modules/apollo-link/lib/link.js
  function execute(link, operation) {
    return link.request(createOperation(operation.context, transformOperation(validateOperation(operation)))) || lib_default.of();
  }
  var passthrough, toLink, empty, from, split, concat, ApolloLink;
  var init_link = __esm({
    "node_modules/apollo-link/lib/link.js"() {
      init_lib2();
      init_linkUtils();
      passthrough = function(op, forward) {
        return forward ? forward(op) : lib_default.of();
      };
      toLink = function(handler) {
        return typeof handler === "function" ? new ApolloLink(handler) : handler;
      };
      empty = function() {
        return new ApolloLink(function(op, forward) {
          return lib_default.of();
        });
      };
      from = function(links) {
        if (links.length === 0)
          return empty();
        return links.map(toLink).reduce(function(x, y) {
          return x.concat(y);
        });
      };
      split = function(test2, left, right) {
        if (right === void 0) {
          right = new ApolloLink(passthrough);
        }
        var leftLink = toLink(left);
        var rightLink = toLink(right);
        if (isTerminating(leftLink) && isTerminating(rightLink)) {
          return new ApolloLink(function(operation) {
            return test2(operation) ? leftLink.request(operation) || lib_default.of() : rightLink.request(operation) || lib_default.of();
          });
        } else {
          return new ApolloLink(function(operation, forward) {
            return test2(operation) ? leftLink.request(operation, forward) || lib_default.of() : rightLink.request(operation, forward) || lib_default.of();
          });
        }
      };
      concat = function(first, second) {
        var firstLink = toLink(first);
        if (isTerminating(firstLink)) {
          console.warn(new LinkError("You are calling concat on a terminating link, which will have no effect", firstLink));
          return firstLink;
        }
        var nextLink = toLink(second);
        if (isTerminating(nextLink)) {
          return new ApolloLink(function(operation) {
            return firstLink.request(operation, function(op) {
              return nextLink.request(op) || lib_default.of();
            }) || lib_default.of();
          });
        } else {
          return new ApolloLink(function(operation, forward) {
            return firstLink.request(operation, function(op) {
              return nextLink.request(op, forward) || lib_default.of();
            }) || lib_default.of();
          });
        }
      };
      ApolloLink = /** @class */
      function() {
        function ApolloLink4(request) {
          if (request)
            this.request = request;
        }
        ApolloLink4.prototype.split = function(test2, left, right) {
          if (right === void 0) {
            right = new ApolloLink4(passthrough);
          }
          return this.concat(split(test2, left, right));
        };
        ApolloLink4.prototype.concat = function(next) {
          return concat(this, next);
        };
        ApolloLink4.prototype.request = function(operation, forward) {
          throw new Error("request is not implemented");
        };
        ApolloLink4.empty = empty;
        ApolloLink4.from = from;
        ApolloLink4.split = split;
        ApolloLink4.execute = execute;
        return ApolloLink4;
      }();
    }
  });

  // node_modules/apollo-link/lib/index.js
  var init_lib3 = __esm({
    "node_modules/apollo-link/lib/index.js"() {
      init_link();
      init_linkUtils();
      init_lib2();
    }
  });

  // node_modules/apollo-client/util/Observable.js
  var import_symbol_observable, __extends2, Observable2;
  var init_Observable = __esm({
    "node_modules/apollo-client/util/Observable.js"() {
      init_lib3();
      import_symbol_observable = __toESM(require_lib());
      __extends2 = function() {
        var extendStatics4 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b)
            if (b.hasOwnProperty(p))
              d[p] = b[p];
        };
        return function(d, b) {
          extendStatics4(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      Observable2 = /** @class */
      function(_super) {
        __extends2(Observable5, _super);
        function Observable5() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        Observable5.prototype[import_symbol_observable.default] = function() {
          return this;
        };
        Observable5.prototype["@@observable"] = function() {
          return this;
        };
        return Observable5;
      }(lib_default);
    }
  });

  // node_modules/apollo-client/errors/ApolloError.js
  function isApolloError(err) {
    return err.hasOwnProperty("graphQLErrors");
  }
  var __extends3, generateErrorMessage, ApolloError;
  var init_ApolloError = __esm({
    "node_modules/apollo-client/errors/ApolloError.js"() {
      __extends3 = function() {
        var extendStatics4 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b)
            if (b.hasOwnProperty(p))
              d[p] = b[p];
        };
        return function(d, b) {
          extendStatics4(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      generateErrorMessage = function(err) {
        var message = "";
        if (Array.isArray(err.graphQLErrors) && err.graphQLErrors.length !== 0) {
          err.graphQLErrors.forEach(function(graphQLError) {
            var errorMessage = graphQLError ? graphQLError.message : "Error message not found.";
            message += "GraphQL error: " + errorMessage + "\n";
          });
        }
        if (err.networkError) {
          message += "Network error: " + err.networkError.message + "\n";
        }
        message = message.replace(/\n$/, "");
        return message;
      };
      ApolloError = /** @class */
      function(_super) {
        __extends3(ApolloError2, _super);
        function ApolloError2(_a4) {
          var graphQLErrors = _a4.graphQLErrors, networkError = _a4.networkError, errorMessage = _a4.errorMessage, extraInfo = _a4.extraInfo;
          var _this = _super.call(this, errorMessage) || this;
          _this.graphQLErrors = graphQLErrors || [];
          _this.networkError = networkError || null;
          if (!errorMessage) {
            _this.message = generateErrorMessage(_this);
          } else {
            _this.message = errorMessage;
          }
          _this.extraInfo = extraInfo;
          _this.__proto__ = ApolloError2.prototype;
          return _this;
        }
        return ApolloError2;
      }(Error);
    }
  });

  // node_modules/apollo-client/core/types.js
  var FetchType;
  var init_types = __esm({
    "node_modules/apollo-client/core/types.js"() {
      (function(FetchType2) {
        FetchType2[FetchType2["normal"] = 1] = "normal";
        FetchType2[FetchType2["refetch"] = 2] = "refetch";
        FetchType2[FetchType2["poll"] = 3] = "poll";
      })(FetchType || (FetchType = {}));
    }
  });

  // node_modules/apollo-client/core/ObservableQuery.js
  var __extends4, __assign2, hasError, ObservableQuery;
  var init_ObservableQuery = __esm({
    "node_modules/apollo-client/core/ObservableQuery.js"() {
      init_lib();
      init_networkStatus();
      init_Observable();
      init_ApolloError();
      init_types();
      __extends4 = function() {
        var extendStatics4 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b)
            if (b.hasOwnProperty(p))
              d[p] = b[p];
        };
        return function(d, b) {
          extendStatics4(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      __assign2 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      hasError = function(storeValue, policy) {
        if (policy === void 0) {
          policy = "none";
        }
        return storeValue && (storeValue.graphQLErrors && storeValue.graphQLErrors.length > 0 && policy === "none" || storeValue.networkError);
      };
      ObservableQuery = /** @class */
      function(_super) {
        __extends4(ObservableQuery2, _super);
        function ObservableQuery2(_a4) {
          var scheduler = _a4.scheduler, options = _a4.options, _b = _a4.shouldSubscribe, shouldSubscribe = _b === void 0 ? true : _b;
          var _this = _super.call(this, function(observer) {
            return _this.onSubscribe(observer);
          }) || this;
          _this.isCurrentlyPolling = false;
          _this.isTornDown = false;
          _this.options = options;
          _this.variables = options.variables || {};
          _this.queryId = scheduler.queryManager.generateQueryId();
          _this.shouldSubscribe = shouldSubscribe;
          _this.scheduler = scheduler;
          _this.queryManager = scheduler.queryManager;
          _this.observers = [];
          _this.subscriptionHandles = [];
          return _this;
        }
        ObservableQuery2.prototype.result = function() {
          var that = this;
          return new Promise(function(resolve2, reject2) {
            var subscription;
            var observer = {
              next: function(result) {
                resolve2(result);
                if (!that.observers.some(function(obs) {
                  return obs !== observer;
                })) {
                  that.queryManager.removeQuery(that.queryId);
                }
                setTimeout(function() {
                  subscription.unsubscribe();
                }, 0);
              },
              error: function(error) {
                reject2(error);
              }
            };
            subscription = that.subscribe(observer);
          });
        };
        ObservableQuery2.prototype.currentResult = function() {
          if (this.isTornDown) {
            return {
              data: this.lastError ? {} : this.lastResult ? this.lastResult.data : {},
              error: this.lastError,
              loading: false,
              networkStatus: NetworkStatus.error
            };
          }
          var queryStoreValue = this.queryManager.queryStore.get(this.queryId);
          if (hasError(queryStoreValue, this.options.errorPolicy)) {
            return {
              data: {},
              loading: false,
              networkStatus: queryStoreValue.networkStatus,
              error: new ApolloError({
                graphQLErrors: queryStoreValue.graphQLErrors,
                networkError: queryStoreValue.networkError
              })
            };
          }
          var _a4 = this.queryManager.getCurrentQueryResult(this), data = _a4.data, partial = _a4.partial;
          var queryLoading = !queryStoreValue || queryStoreValue.networkStatus === NetworkStatus.loading;
          var loading = this.options.fetchPolicy === "network-only" && queryLoading || partial && this.options.fetchPolicy !== "cache-only";
          var networkStatus;
          if (queryStoreValue) {
            networkStatus = queryStoreValue.networkStatus;
          } else {
            networkStatus = loading ? NetworkStatus.loading : NetworkStatus.ready;
          }
          var result = {
            data,
            loading: isNetworkRequestInFlight(networkStatus),
            networkStatus
          };
          if (queryStoreValue && queryStoreValue.graphQLErrors && this.options.errorPolicy === "all") {
            result.errors = queryStoreValue.graphQLErrors;
          }
          if (!partial) {
            var stale = false;
            this.lastResult = __assign2({}, result, { stale });
          }
          return __assign2({}, result, { partial });
        };
        ObservableQuery2.prototype.getLastResult = function() {
          return this.lastResult;
        };
        ObservableQuery2.prototype.getLastError = function() {
          return this.lastError;
        };
        ObservableQuery2.prototype.resetLastResults = function() {
          delete this.lastResult;
          delete this.lastError;
          this.isTornDown = false;
        };
        ObservableQuery2.prototype.refetch = function(variables) {
          var fetchPolicy = this.options.fetchPolicy;
          if (fetchPolicy === "cache-only") {
            return Promise.reject(new Error("cache-only fetchPolicy option should not be used together with query refetch."));
          }
          if (!isEqual(this.variables, variables)) {
            this.variables = Object.assign({}, this.variables, variables);
          }
          if (!isEqual(this.options.variables, this.variables)) {
            this.options.variables = Object.assign({}, this.options.variables, this.variables);
          }
          var isNetworkFetchPolicy = fetchPolicy === "network-only" || fetchPolicy === "no-cache";
          var combinedOptions = __assign2({}, this.options, { fetchPolicy: isNetworkFetchPolicy ? fetchPolicy : "network-only" });
          return this.queryManager.fetchQuery(this.queryId, combinedOptions, FetchType.refetch).then(function(result) {
            return maybeDeepFreeze(result);
          });
        };
        ObservableQuery2.prototype.fetchMore = function(fetchMoreOptions) {
          var _this = this;
          if (!fetchMoreOptions.updateQuery) {
            throw new Error("updateQuery option is required. This function defines how to update the query data with the new results.");
          }
          var combinedOptions;
          return Promise.resolve().then(function() {
            var qid = _this.queryManager.generateQueryId();
            if (fetchMoreOptions.query) {
              combinedOptions = fetchMoreOptions;
            } else {
              combinedOptions = __assign2({}, _this.options, fetchMoreOptions, { variables: Object.assign({}, _this.variables, fetchMoreOptions.variables) });
            }
            combinedOptions.fetchPolicy = "network-only";
            return _this.queryManager.fetchQuery(qid, combinedOptions, FetchType.normal, _this.queryId);
          }).then(function(fetchMoreResult) {
            _this.updateQuery(function(previousResult) {
              return fetchMoreOptions.updateQuery(previousResult, {
                fetchMoreResult: fetchMoreResult.data,
                variables: combinedOptions.variables
              });
            });
            return fetchMoreResult;
          });
        };
        ObservableQuery2.prototype.subscribeToMore = function(options) {
          var _this = this;
          var subscription = this.queryManager.startGraphQLSubscription({
            query: options.document,
            variables: options.variables
          }).subscribe({
            next: function(data) {
              if (options.updateQuery) {
                _this.updateQuery(function(previous, _a4) {
                  var variables = _a4.variables;
                  return options.updateQuery(previous, {
                    subscriptionData: data,
                    variables
                  });
                });
              }
            },
            error: function(err) {
              if (options.onError) {
                options.onError(err);
                return;
              }
              console.error("Unhandled GraphQL subscription error", err);
            }
          });
          this.subscriptionHandles.push(subscription);
          return function() {
            var i = _this.subscriptionHandles.indexOf(subscription);
            if (i >= 0) {
              _this.subscriptionHandles.splice(i, 1);
              subscription.unsubscribe();
            }
          };
        };
        ObservableQuery2.prototype.setOptions = function(opts) {
          var oldOptions = this.options;
          this.options = Object.assign({}, this.options, opts);
          if (opts.pollInterval) {
            this.startPolling(opts.pollInterval);
          } else if (opts.pollInterval === 0) {
            this.stopPolling();
          }
          var tryFetch = oldOptions.fetchPolicy !== "network-only" && opts.fetchPolicy === "network-only" || oldOptions.fetchPolicy === "cache-only" && opts.fetchPolicy !== "cache-only" || oldOptions.fetchPolicy === "standby" && opts.fetchPolicy !== "standby" || false;
          return this.setVariables(this.options.variables, tryFetch, opts.fetchResults);
        };
        ObservableQuery2.prototype.setVariables = function(variables, tryFetch, fetchResults) {
          if (tryFetch === void 0) {
            tryFetch = false;
          }
          if (fetchResults === void 0) {
            fetchResults = true;
          }
          this.isTornDown = false;
          var newVariables = variables ? variables : this.variables;
          if (isEqual(newVariables, this.variables) && !tryFetch) {
            if (this.observers.length === 0 || !fetchResults) {
              return new Promise(function(resolve2) {
                return resolve2();
              });
            }
            return this.result();
          } else {
            this.variables = newVariables;
            this.options.variables = newVariables;
            if (this.observers.length === 0) {
              return new Promise(function(resolve2) {
                return resolve2();
              });
            }
            return this.queryManager.fetchQuery(this.queryId, __assign2({}, this.options, { variables: this.variables })).then(function(result) {
              return maybeDeepFreeze(result);
            });
          }
        };
        ObservableQuery2.prototype.updateQuery = function(mapFn) {
          var _a4 = this.queryManager.getQueryWithPreviousResult(this.queryId), previousResult = _a4.previousResult, variables = _a4.variables, document2 = _a4.document;
          var newResult = tryFunctionOrLogError(function() {
            return mapFn(previousResult, { variables });
          });
          if (newResult) {
            this.queryManager.dataStore.markUpdateQueryResult(document2, variables, newResult);
            this.queryManager.broadcastQueries();
          }
        };
        ObservableQuery2.prototype.stopPolling = function() {
          if (this.isCurrentlyPolling) {
            this.scheduler.stopPollingQuery(this.queryId);
            this.options.pollInterval = void 0;
            this.isCurrentlyPolling = false;
          }
        };
        ObservableQuery2.prototype.startPolling = function(pollInterval) {
          if (this.options.fetchPolicy === "cache-first" || this.options.fetchPolicy === "cache-only") {
            throw new Error("Queries that specify the cache-first and cache-only fetchPolicies cannot also be polling queries.");
          }
          if (this.isCurrentlyPolling) {
            this.scheduler.stopPollingQuery(this.queryId);
            this.isCurrentlyPolling = false;
          }
          this.options.pollInterval = pollInterval;
          this.isCurrentlyPolling = true;
          this.scheduler.startPollingQuery(this.options, this.queryId);
        };
        ObservableQuery2.prototype.onSubscribe = function(observer) {
          var _this = this;
          if (observer._subscription && observer._subscription._observer && !observer._subscription._observer.error) {
            observer._subscription._observer.error = function(error) {
              console.error("Unhandled error", error.message, error.stack);
            };
          }
          this.observers.push(observer);
          if (observer.next && this.lastResult)
            observer.next(this.lastResult);
          if (observer.error && this.lastError)
            observer.error(this.lastError);
          if (this.observers.length === 1)
            this.setUpQuery();
          return function() {
            _this.observers = _this.observers.filter(function(obs) {
              return obs !== observer;
            });
            if (_this.observers.length === 0) {
              _this.tearDownQuery();
            }
          };
        };
        ObservableQuery2.prototype.setUpQuery = function() {
          var _this = this;
          if (this.shouldSubscribe) {
            this.queryManager.addObservableQuery(this.queryId, this);
          }
          if (!!this.options.pollInterval) {
            if (this.options.fetchPolicy === "cache-first" || this.options.fetchPolicy === "cache-only") {
              throw new Error("Queries that specify the cache-first and cache-only fetchPolicies cannot also be polling queries.");
            }
            this.isCurrentlyPolling = true;
            this.scheduler.startPollingQuery(this.options, this.queryId);
          }
          var observer = {
            next: function(result) {
              _this.lastResult = result;
              _this.observers.forEach(function(obs) {
                return obs.next && obs.next(result);
              });
            },
            error: function(error) {
              _this.lastError = error;
              _this.observers.forEach(function(obs) {
                return obs.error && obs.error(error);
              });
            }
          };
          this.queryManager.startQuery(this.queryId, this.options, this.queryManager.queryListenerForObserver(this.queryId, this.options, observer));
        };
        ObservableQuery2.prototype.tearDownQuery = function() {
          this.isTornDown = true;
          if (this.isCurrentlyPolling) {
            this.scheduler.stopPollingQuery(this.queryId);
            this.isCurrentlyPolling = false;
          }
          this.subscriptionHandles.forEach(function(sub) {
            return sub.unsubscribe();
          });
          this.subscriptionHandles = [];
          this.queryManager.removeObservableQuery(this.queryId);
          this.queryManager.stopQuery(this.queryId);
          this.observers = [];
        };
        return ObservableQuery2;
      }(Observable2);
    }
  });

  // node_modules/apollo-link-dedup/lib/dedupLink.js
  var __extends5, DedupLink;
  var init_dedupLink = __esm({
    "node_modules/apollo-link-dedup/lib/dedupLink.js"() {
      init_lib3();
      __extends5 = function() {
        var extendStatics4 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b)
            if (b.hasOwnProperty(p))
              d[p] = b[p];
        };
        return function(d, b) {
          extendStatics4(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      DedupLink = /** @class */
      function(_super) {
        __extends5(DedupLink2, _super);
        function DedupLink2() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.inFlightRequestObservables = /* @__PURE__ */ new Map();
          _this.subscribers = /* @__PURE__ */ new Map();
          return _this;
        }
        DedupLink2.prototype.request = function(operation, forward) {
          var _this = this;
          if (operation.getContext().forceFetch) {
            return forward(operation);
          }
          var key = operation.toKey();
          var cleanup = function(key2) {
            _this.inFlightRequestObservables.delete(key2);
            var prev = _this.subscribers.get(key2);
            return prev;
          };
          if (!this.inFlightRequestObservables.get(key)) {
            var singleObserver_1 = forward(operation);
            var subscription_1;
            var sharedObserver = new lib_default(function(observer) {
              var prev = _this.subscribers.get(key);
              if (!prev)
                prev = { next: [], error: [], complete: [] };
              _this.subscribers.set(key, {
                next: prev.next.concat([observer.next.bind(observer)]),
                error: prev.error.concat([observer.error.bind(observer)]),
                complete: prev.complete.concat([observer.complete.bind(observer)])
              });
              if (!subscription_1) {
                subscription_1 = singleObserver_1.subscribe({
                  next: function(result) {
                    var prev2 = cleanup(key);
                    _this.subscribers.delete(key);
                    if (prev2) {
                      prev2.next.forEach(function(next) {
                        return next(result);
                      });
                      prev2.complete.forEach(function(complete) {
                        return complete();
                      });
                    }
                  },
                  error: function(error) {
                    var prev2 = cleanup(key);
                    _this.subscribers.delete(key);
                    if (prev2)
                      prev2.error.forEach(function(err) {
                        return err(error);
                      });
                  }
                });
              }
              return function() {
                if (subscription_1)
                  subscription_1.unsubscribe();
                _this.inFlightRequestObservables.delete(key);
              };
            });
            this.inFlightRequestObservables.set(key, sharedObserver);
          }
          return this.inFlightRequestObservables.get(key);
        };
        return DedupLink2;
      }(ApolloLink);
    }
  });

  // node_modules/apollo-link-dedup/lib/index.js
  var init_lib4 = __esm({
    "node_modules/apollo-link-dedup/lib/index.js"() {
      init_dedupLink();
    }
  });

  // node_modules/apollo-client/scheduler/scheduler.js
  var __assign3, QueryScheduler;
  var init_scheduler = __esm({
    "node_modules/apollo-client/scheduler/scheduler.js"() {
      init_types();
      init_ObservableQuery();
      init_networkStatus();
      __assign3 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      QueryScheduler = /** @class */
      function() {
        function QueryScheduler2(_a4) {
          var queryManager = _a4.queryManager, ssrMode = _a4.ssrMode;
          this.inFlightQueries = {};
          this.registeredQueries = {};
          this.intervalQueries = {};
          this.pollingTimers = {};
          this.ssrMode = false;
          this.queryManager = queryManager;
          this.ssrMode = ssrMode || false;
        }
        QueryScheduler2.prototype.checkInFlight = function(queryId) {
          var query = this.queryManager.queryStore.get(queryId);
          return query && query.networkStatus !== NetworkStatus.ready && query.networkStatus !== NetworkStatus.error;
        };
        QueryScheduler2.prototype.fetchQuery = function(queryId, options, fetchType) {
          var _this = this;
          return new Promise(function(resolve2, reject2) {
            _this.queryManager.fetchQuery(queryId, options, fetchType).then(function(result) {
              resolve2(result);
            }).catch(function(error) {
              reject2(error);
            });
          });
        };
        QueryScheduler2.prototype.startPollingQuery = function(options, queryId, listener) {
          if (!options.pollInterval) {
            throw new Error("Attempted to start a polling query without a polling interval.");
          }
          if (this.ssrMode)
            return queryId;
          this.registeredQueries[queryId] = options;
          if (listener) {
            this.queryManager.addQueryListener(queryId, listener);
          }
          this.addQueryOnInterval(queryId, options);
          return queryId;
        };
        QueryScheduler2.prototype.stopPollingQuery = function(queryId) {
          delete this.registeredQueries[queryId];
        };
        QueryScheduler2.prototype.fetchQueriesOnInterval = function(interval) {
          var _this = this;
          this.intervalQueries[interval] = this.intervalQueries[interval].filter(function(queryId) {
            if (!(_this.registeredQueries.hasOwnProperty(queryId) && _this.registeredQueries[queryId].pollInterval === interval)) {
              return false;
            }
            if (_this.checkInFlight(queryId)) {
              return true;
            }
            var queryOptions = _this.registeredQueries[queryId];
            var pollingOptions = __assign3({}, queryOptions);
            pollingOptions.fetchPolicy = "network-only";
            _this.fetchQuery(queryId, pollingOptions, FetchType.poll).catch(function() {
            });
            return true;
          });
          if (this.intervalQueries[interval].length === 0) {
            clearInterval(this.pollingTimers[interval]);
            delete this.intervalQueries[interval];
          }
        };
        QueryScheduler2.prototype.addQueryOnInterval = function(queryId, queryOptions) {
          var _this = this;
          var interval = queryOptions.pollInterval;
          if (!interval) {
            throw new Error("A poll interval is required to start polling query with id '" + queryId + "'.");
          }
          if (this.intervalQueries.hasOwnProperty(interval.toString()) && this.intervalQueries[interval].length > 0) {
            this.intervalQueries[interval].push(queryId);
          } else {
            this.intervalQueries[interval] = [queryId];
            this.pollingTimers[interval] = setInterval(function() {
              _this.fetchQueriesOnInterval(interval);
            }, interval);
          }
        };
        QueryScheduler2.prototype.registerPollingQuery = function(queryOptions) {
          if (!queryOptions.pollInterval) {
            throw new Error("Attempted to register a non-polling query with the scheduler.");
          }
          return new ObservableQuery({
            scheduler: this,
            options: queryOptions
          });
        };
        return QueryScheduler2;
      }();
    }
  });

  // node_modules/apollo-client/data/mutations.js
  var MutationStore;
  var init_mutations = __esm({
    "node_modules/apollo-client/data/mutations.js"() {
      MutationStore = /** @class */
      function() {
        function MutationStore2() {
          this.store = {};
        }
        MutationStore2.prototype.getStore = function() {
          return this.store;
        };
        MutationStore2.prototype.get = function(mutationId) {
          return this.store[mutationId];
        };
        MutationStore2.prototype.initMutation = function(mutationId, mutationString, variables) {
          this.store[mutationId] = {
            mutationString,
            variables: variables || {},
            loading: true,
            error: null
          };
        };
        MutationStore2.prototype.markMutationError = function(mutationId, error) {
          var mutation = this.store[mutationId];
          if (!mutation) {
            return;
          }
          mutation.loading = false;
          mutation.error = error;
        };
        MutationStore2.prototype.markMutationResult = function(mutationId) {
          var mutation = this.store[mutationId];
          if (!mutation) {
            return;
          }
          mutation.loading = false;
          mutation.error = null;
        };
        MutationStore2.prototype.reset = function() {
          this.store = {};
        };
        return MutationStore2;
      }();
    }
  });

  // node_modules/apollo-client/data/queries.js
  var import_printer2, __assign4, QueryStore;
  var init_queries = __esm({
    "node_modules/apollo-client/data/queries.js"() {
      import_printer2 = __toESM(require_printer());
      init_lib();
      init_networkStatus();
      __assign4 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      QueryStore = /** @class */
      function() {
        function QueryStore2() {
          this.store = {};
        }
        QueryStore2.prototype.getStore = function() {
          return this.store;
        };
        QueryStore2.prototype.get = function(queryId) {
          return this.store[queryId];
        };
        QueryStore2.prototype.initQuery = function(query) {
          var previousQuery = this.store[query.queryId];
          if (previousQuery && previousQuery.document !== query.document && (0, import_printer2.print)(previousQuery.document) !== (0, import_printer2.print)(query.document)) {
            throw new Error("Internal Error: may not update existing query string in store");
          }
          var isSetVariables = false;
          var previousVariables = null;
          if (query.storePreviousVariables && previousQuery && previousQuery.networkStatus !== NetworkStatus.loading) {
            if (!isEqual(previousQuery.variables, query.variables)) {
              isSetVariables = true;
              previousVariables = previousQuery.variables;
            }
          }
          var networkStatus;
          if (isSetVariables) {
            networkStatus = NetworkStatus.setVariables;
          } else if (query.isPoll) {
            networkStatus = NetworkStatus.poll;
          } else if (query.isRefetch) {
            networkStatus = NetworkStatus.refetch;
          } else {
            networkStatus = NetworkStatus.loading;
          }
          var graphQLErrors = [];
          if (previousQuery && previousQuery.graphQLErrors) {
            graphQLErrors = previousQuery.graphQLErrors;
          }
          this.store[query.queryId] = {
            document: query.document,
            variables: query.variables,
            previousVariables,
            networkError: null,
            graphQLErrors,
            networkStatus,
            metadata: query.metadata
          };
          if (typeof query.fetchMoreForQueryId === "string" && this.store[query.fetchMoreForQueryId]) {
            this.store[query.fetchMoreForQueryId].networkStatus = NetworkStatus.fetchMore;
          }
        };
        QueryStore2.prototype.markQueryResult = function(queryId, result, fetchMoreForQueryId) {
          if (!this.store[queryId])
            return;
          this.store[queryId].networkError = null;
          this.store[queryId].graphQLErrors = result.errors && result.errors.length ? result.errors : [];
          this.store[queryId].previousVariables = null;
          this.store[queryId].networkStatus = NetworkStatus.ready;
          if (typeof fetchMoreForQueryId === "string" && this.store[fetchMoreForQueryId]) {
            this.store[fetchMoreForQueryId].networkStatus = NetworkStatus.ready;
          }
        };
        QueryStore2.prototype.markQueryError = function(queryId, error, fetchMoreForQueryId) {
          if (!this.store[queryId])
            return;
          this.store[queryId].networkError = error;
          this.store[queryId].networkStatus = NetworkStatus.error;
          if (typeof fetchMoreForQueryId === "string") {
            this.markQueryResultClient(fetchMoreForQueryId, true);
          }
        };
        QueryStore2.prototype.markQueryResultClient = function(queryId, complete) {
          if (!this.store[queryId])
            return;
          this.store[queryId].networkError = null;
          this.store[queryId].previousVariables = null;
          this.store[queryId].networkStatus = complete ? NetworkStatus.ready : NetworkStatus.loading;
        };
        QueryStore2.prototype.stopQuery = function(queryId) {
          delete this.store[queryId];
        };
        QueryStore2.prototype.reset = function(observableQueryIds) {
          var _this = this;
          this.store = Object.keys(this.store).filter(function(queryId) {
            return observableQueryIds.indexOf(queryId) > -1;
          }).reduce(function(res, key) {
            res[key] = __assign4({}, _this.store[key], { networkStatus: NetworkStatus.loading });
            return res;
          }, {});
        };
        return QueryStore2;
      }();
    }
  });

  // node_modules/apollo-client/core/QueryManager.js
  var import_printer3, __assign5, defaultQueryInfo, QueryManager;
  var init_QueryManager = __esm({
    "node_modules/apollo-client/core/QueryManager.js"() {
      init_lib3();
      import_printer3 = __toESM(require_printer());
      init_lib4();
      init_lib();
      init_scheduler();
      init_ApolloError();
      init_Observable();
      init_mutations();
      init_queries();
      init_ObservableQuery();
      init_networkStatus();
      init_types();
      init_lib();
      __assign5 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      defaultQueryInfo = {
        listeners: [],
        invalidated: false,
        document: null,
        newData: null,
        lastRequestId: null,
        observableQuery: null,
        subscriptions: []
      };
      QueryManager = /** @class */
      function() {
        function QueryManager2(_a4) {
          var link = _a4.link, _b = _a4.queryDeduplication, queryDeduplication = _b === void 0 ? false : _b, store = _a4.store, _c = _a4.onBroadcast, onBroadcast = _c === void 0 ? function() {
            return void 0;
          } : _c, _d = _a4.ssrMode, ssrMode = _d === void 0 ? false : _d;
          this.mutationStore = new MutationStore();
          this.queryStore = new QueryStore();
          this.idCounter = 1;
          this.queries = /* @__PURE__ */ new Map();
          this.fetchQueryPromises = /* @__PURE__ */ new Map();
          this.queryIdsByName = {};
          this.link = link;
          this.deduplicator = ApolloLink.from([new DedupLink(), link]);
          this.queryDeduplication = queryDeduplication;
          this.dataStore = store;
          this.onBroadcast = onBroadcast;
          this.scheduler = new QueryScheduler({ queryManager: this, ssrMode });
        }
        QueryManager2.prototype.mutate = function(_a4) {
          var _this = this;
          var mutation = _a4.mutation, variables = _a4.variables, optimisticResponse = _a4.optimisticResponse, updateQueriesByName = _a4.updateQueries, _b = _a4.refetchQueries, refetchQueries = _b === void 0 ? [] : _b, updateWithProxyFn = _a4.update, _c = _a4.errorPolicy, errorPolicy = _c === void 0 ? "none" : _c, fetchPolicy = _a4.fetchPolicy, _d = _a4.context, context = _d === void 0 ? {} : _d;
          if (!mutation) {
            throw new Error("mutation option is required. You must specify your GraphQL document in the mutation option.");
          }
          if (fetchPolicy && fetchPolicy !== "no-cache") {
            throw new Error("fetchPolicy for mutations currently only supports the 'no-cache' policy");
          }
          var mutationId = this.generateQueryId();
          var cache = this.dataStore.getCache();
          mutation = cache.transformDocument(mutation), variables = assign({}, getDefaultValues(getMutationDefinition(mutation)), variables);
          var mutationString = (0, import_printer3.print)(mutation);
          this.setQuery(mutationId, function() {
            return { document: mutation };
          });
          var generateUpdateQueriesInfo = function() {
            var ret = {};
            if (updateQueriesByName) {
              Object.keys(updateQueriesByName).forEach(function(queryName) {
                return (_this.queryIdsByName[queryName] || []).forEach(function(queryId) {
                  ret[queryId] = {
                    updater: updateQueriesByName[queryName],
                    query: _this.queryStore.get(queryId)
                  };
                });
              });
            }
            return ret;
          };
          this.mutationStore.initMutation(mutationId, mutationString, variables);
          this.dataStore.markMutationInit({
            mutationId,
            document: mutation,
            variables: variables || {},
            updateQueries: generateUpdateQueriesInfo(),
            update: updateWithProxyFn,
            optimisticResponse
          });
          this.broadcastQueries();
          return new Promise(function(resolve2, reject2) {
            var storeResult;
            var error;
            var operation = _this.buildOperationForLink(mutation, variables, __assign5({}, context, { optimisticResponse }));
            execute(_this.link, operation).subscribe({
              next: function(result) {
                if (graphQLResultHasError(result) && errorPolicy === "none") {
                  error = new ApolloError({
                    graphQLErrors: result.errors
                  });
                  return;
                }
                _this.mutationStore.markMutationResult(mutationId);
                if (fetchPolicy !== "no-cache") {
                  _this.dataStore.markMutationResult({
                    mutationId,
                    result,
                    document: mutation,
                    variables: variables || {},
                    updateQueries: generateUpdateQueriesInfo(),
                    update: updateWithProxyFn
                  });
                }
                storeResult = result;
              },
              error: function(err) {
                _this.mutationStore.markMutationError(mutationId, err);
                _this.dataStore.markMutationComplete({
                  mutationId,
                  optimisticResponse
                });
                _this.broadcastQueries();
                _this.setQuery(mutationId, function() {
                  return { document: void 0 };
                });
                reject2(new ApolloError({
                  networkError: err
                }));
              },
              complete: function() {
                if (error) {
                  _this.mutationStore.markMutationError(mutationId, error);
                }
                _this.dataStore.markMutationComplete({
                  mutationId,
                  optimisticResponse
                });
                _this.broadcastQueries();
                if (error) {
                  reject2(error);
                  return;
                }
                if (typeof refetchQueries === "function") {
                  refetchQueries = refetchQueries(storeResult);
                }
                if (refetchQueries) {
                  refetchQueries.forEach(function(refetchQuery) {
                    if (typeof refetchQuery === "string") {
                      _this.refetchQueryByName(refetchQuery);
                      return;
                    }
                    _this.query({
                      query: refetchQuery.query,
                      variables: refetchQuery.variables,
                      fetchPolicy: "network-only"
                    });
                  });
                }
                _this.setQuery(mutationId, function() {
                  return { document: void 0 };
                });
                if (errorPolicy === "ignore" && storeResult && graphQLResultHasError(storeResult)) {
                  delete storeResult.errors;
                }
                resolve2(storeResult);
              }
            });
          });
        };
        QueryManager2.prototype.fetchQuery = function(queryId, options, fetchType, fetchMoreForQueryId) {
          var _this = this;
          var _a4 = options.variables, variables = _a4 === void 0 ? {} : _a4, _b = options.metadata, metadata = _b === void 0 ? null : _b, _c = options.fetchPolicy, fetchPolicy = _c === void 0 ? "cache-first" : _c;
          var cache = this.dataStore.getCache();
          var query = cache.transformDocument(options.query);
          var storeResult;
          var needToFetch = fetchPolicy === "network-only" || fetchPolicy === "no-cache";
          if (fetchType !== FetchType.refetch && fetchPolicy !== "network-only" && fetchPolicy !== "no-cache") {
            var _d = this.dataStore.getCache().diff({
              query,
              variables,
              returnPartialData: true,
              optimistic: false
            }), complete = _d.complete, result = _d.result;
            needToFetch = !complete || fetchPolicy === "cache-and-network";
            storeResult = result;
          }
          var shouldFetch = needToFetch && fetchPolicy !== "cache-only" && fetchPolicy !== "standby";
          if (hasDirectives(["live"], query))
            shouldFetch = true;
          var requestId = this.generateRequestId();
          var cancel = this.updateQueryWatch(queryId, query, options);
          this.setQuery(queryId, function() {
            return {
              document: query,
              lastRequestId: requestId,
              invalidated: true,
              cancel
            };
          });
          this.invalidate(true, fetchMoreForQueryId);
          this.queryStore.initQuery({
            queryId,
            document: query,
            storePreviousVariables: shouldFetch,
            variables,
            isPoll: fetchType === FetchType.poll,
            isRefetch: fetchType === FetchType.refetch,
            metadata,
            fetchMoreForQueryId
          });
          this.broadcastQueries();
          var shouldDispatchClientResult = !shouldFetch || fetchPolicy === "cache-and-network";
          if (shouldDispatchClientResult) {
            this.queryStore.markQueryResultClient(queryId, !shouldFetch);
            this.invalidate(true, queryId, fetchMoreForQueryId);
            this.broadcastQueries();
          }
          if (shouldFetch) {
            var networkResult = this.fetchRequest({
              requestId,
              queryId,
              document: query,
              options,
              fetchMoreForQueryId
            }).catch(function(error) {
              if (isApolloError(error)) {
                throw error;
              } else {
                var lastRequestId = _this.getQuery(queryId).lastRequestId;
                if (requestId >= (lastRequestId || 1)) {
                  _this.queryStore.markQueryError(queryId, error, fetchMoreForQueryId);
                  _this.invalidate(true, queryId, fetchMoreForQueryId);
                  _this.broadcastQueries();
                }
                _this.removeFetchQueryPromise(requestId);
                throw new ApolloError({ networkError: error });
              }
            });
            if (fetchPolicy !== "cache-and-network") {
              return networkResult;
            } else {
              networkResult.catch(function() {
              });
            }
          }
          return Promise.resolve({ data: storeResult });
        };
        QueryManager2.prototype.queryListenerForObserver = function(queryId, options, observer) {
          var _this = this;
          var previouslyHadError = false;
          return function(queryStoreValue, newData) {
            _this.invalidate(false, queryId);
            if (!queryStoreValue)
              return;
            var observableQuery = _this.getQuery(queryId).observableQuery;
            var fetchPolicy = observableQuery ? observableQuery.options.fetchPolicy : options.fetchPolicy;
            if (fetchPolicy === "standby")
              return;
            var errorPolicy = observableQuery ? observableQuery.options.errorPolicy : options.errorPolicy;
            var lastResult = observableQuery ? observableQuery.getLastResult() : null;
            var lastError = observableQuery ? observableQuery.getLastError() : null;
            var shouldNotifyIfLoading = !newData && queryStoreValue.previousVariables != null || fetchPolicy === "cache-only" || fetchPolicy === "cache-and-network";
            var networkStatusChanged = Boolean(lastResult && queryStoreValue.networkStatus !== lastResult.networkStatus);
            var errorStatusChanged = errorPolicy && (lastError && lastError.graphQLErrors) !== queryStoreValue.graphQLErrors && errorPolicy !== "none";
            if (!isNetworkRequestInFlight(queryStoreValue.networkStatus) || networkStatusChanged && options.notifyOnNetworkStatusChange || shouldNotifyIfLoading) {
              if ((!errorPolicy || errorPolicy === "none") && queryStoreValue.graphQLErrors && queryStoreValue.graphQLErrors.length > 0 || queryStoreValue.networkError) {
                var apolloError_1 = new ApolloError({
                  graphQLErrors: queryStoreValue.graphQLErrors,
                  networkError: queryStoreValue.networkError
                });
                previouslyHadError = true;
                if (observer.error) {
                  try {
                    observer.error(apolloError_1);
                  } catch (e) {
                    setTimeout(function() {
                      throw e;
                    }, 0);
                  }
                } else {
                  setTimeout(function() {
                    throw apolloError_1;
                  }, 0);
                  if (!isProduction()) {
                    console.info("An unhandled error was thrown because no error handler is registered for the query " + (0, import_printer3.print)(queryStoreValue.document));
                  }
                }
                return;
              }
              try {
                var data = void 0;
                var isMissing = void 0;
                if (newData) {
                  _this.setQuery(queryId, function() {
                    return { newData: null };
                  });
                  data = newData.result;
                  isMissing = !newData.complete ? !newData.complete : false;
                } else {
                  if (lastResult && lastResult.data && !errorStatusChanged) {
                    data = lastResult.data;
                    isMissing = false;
                  } else {
                    var document_1 = _this.getQuery(queryId).document;
                    var readResult = _this.dataStore.getCache().diff({
                      query: document_1,
                      variables: queryStoreValue.previousVariables || queryStoreValue.variables,
                      optimistic: true
                    });
                    data = readResult.result;
                    isMissing = !readResult.complete;
                  }
                }
                var resultFromStore = void 0;
                if (isMissing && fetchPolicy !== "cache-only") {
                  resultFromStore = {
                    data: lastResult && lastResult.data,
                    loading: isNetworkRequestInFlight(queryStoreValue.networkStatus),
                    networkStatus: queryStoreValue.networkStatus,
                    stale: true
                  };
                } else {
                  resultFromStore = {
                    data,
                    loading: isNetworkRequestInFlight(queryStoreValue.networkStatus),
                    networkStatus: queryStoreValue.networkStatus,
                    stale: false
                  };
                }
                if (errorPolicy === "all" && queryStoreValue.graphQLErrors && queryStoreValue.graphQLErrors.length > 0) {
                  resultFromStore.errors = queryStoreValue.graphQLErrors;
                }
                if (observer.next) {
                  var isDifferentResult = !(lastResult && resultFromStore && lastResult.networkStatus === resultFromStore.networkStatus && lastResult.stale === resultFromStore.stale && // We can do a strict equality check here because we include a `previousResult`
                  // with `readQueryFromStore`. So if the results are the same they will be
                  // referentially equal.
                  lastResult.data === resultFromStore.data);
                  if (isDifferentResult || previouslyHadError) {
                    try {
                      observer.next(maybeDeepFreeze(resultFromStore));
                    } catch (e) {
                      setTimeout(function() {
                        throw e;
                      }, 0);
                    }
                  }
                }
                previouslyHadError = false;
              } catch (error) {
                previouslyHadError = true;
                if (observer.error)
                  observer.error(new ApolloError({ networkError: error }));
                return;
              }
            }
          };
        };
        QueryManager2.prototype.watchQuery = function(options, shouldSubscribe) {
          if (shouldSubscribe === void 0) {
            shouldSubscribe = true;
          }
          if (options.fetchPolicy === "standby") {
            throw new Error('client.watchQuery cannot be called with fetchPolicy set to "standby"');
          }
          var queryDefinition = getQueryDefinition(options.query);
          if (queryDefinition.variableDefinitions && queryDefinition.variableDefinitions.length) {
            var defaultValues = getDefaultValues(queryDefinition);
            options.variables = assign({}, defaultValues, options.variables);
          }
          if (typeof options.notifyOnNetworkStatusChange === "undefined") {
            options.notifyOnNetworkStatusChange = false;
          }
          var transformedOptions = __assign5({}, options);
          return new ObservableQuery({
            scheduler: this.scheduler,
            options: transformedOptions,
            shouldSubscribe
          });
        };
        QueryManager2.prototype.query = function(options) {
          var _this = this;
          if (!options.query) {
            throw new Error("query option is required. You must specify your GraphQL document in the query option.");
          }
          if (options.query.kind !== "Document") {
            throw new Error('You must wrap the query string in a "gql" tag.');
          }
          if (options.returnPartialData) {
            throw new Error("returnPartialData option only supported on watchQuery.");
          }
          if (options.pollInterval) {
            throw new Error("pollInterval option only supported on watchQuery.");
          }
          var requestId = this.idCounter;
          return new Promise(function(resolve2, reject2) {
            _this.addFetchQueryPromise(requestId, resolve2, reject2);
            return _this.watchQuery(options, false).result().then(function(result) {
              _this.removeFetchQueryPromise(requestId);
              resolve2(result);
            }).catch(function(error) {
              _this.removeFetchQueryPromise(requestId);
              reject2(error);
            });
          });
        };
        QueryManager2.prototype.generateQueryId = function() {
          var queryId = this.idCounter.toString();
          this.idCounter++;
          return queryId;
        };
        QueryManager2.prototype.stopQueryInStore = function(queryId) {
          this.queryStore.stopQuery(queryId);
          this.invalidate(true, queryId);
          this.broadcastQueries();
        };
        QueryManager2.prototype.addQueryListener = function(queryId, listener) {
          this.setQuery(queryId, function(_a4) {
            var _b = _a4.listeners, listeners = _b === void 0 ? [] : _b;
            return {
              listeners: listeners.concat([listener]),
              invalidate: false
            };
          });
        };
        QueryManager2.prototype.updateQueryWatch = function(queryId, document2, options) {
          var _this = this;
          var cancel = this.getQuery(queryId).cancel;
          if (cancel)
            cancel();
          var previousResult = function() {
            var previousResult2 = null;
            var observableQuery = _this.getQuery(queryId).observableQuery;
            if (observableQuery) {
              var lastResult = observableQuery.getLastResult();
              if (lastResult) {
                previousResult2 = lastResult.data;
              }
            }
            return previousResult2;
          };
          return this.dataStore.getCache().watch({
            query: document2,
            variables: options.variables,
            optimistic: true,
            previousResult,
            callback: function(newData) {
              _this.setQuery(queryId, function() {
                return { invalidated: true, newData };
              });
            }
          });
        };
        QueryManager2.prototype.addFetchQueryPromise = function(requestId, resolve2, reject2) {
          this.fetchQueryPromises.set(requestId.toString(), {
            resolve: resolve2,
            reject: reject2
          });
        };
        QueryManager2.prototype.removeFetchQueryPromise = function(requestId) {
          this.fetchQueryPromises.delete(requestId.toString());
        };
        QueryManager2.prototype.addObservableQuery = function(queryId, observableQuery) {
          this.setQuery(queryId, function() {
            return { observableQuery };
          });
          var queryDef = getQueryDefinition(observableQuery.options.query);
          if (queryDef.name && queryDef.name.value) {
            var queryName = queryDef.name.value;
            this.queryIdsByName[queryName] = this.queryIdsByName[queryName] || [];
            this.queryIdsByName[queryName].push(observableQuery.queryId);
          }
        };
        QueryManager2.prototype.removeObservableQuery = function(queryId) {
          var _a4 = this.getQuery(queryId), observableQuery = _a4.observableQuery, cancel = _a4.cancel;
          if (cancel)
            cancel();
          if (!observableQuery)
            return;
          var definition = getQueryDefinition(observableQuery.options.query);
          var queryName = definition.name ? definition.name.value : null;
          this.setQuery(queryId, function() {
            return { observableQuery: null };
          });
          if (queryName) {
            this.queryIdsByName[queryName] = this.queryIdsByName[queryName].filter(function(val) {
              return !(observableQuery.queryId === val);
            });
          }
        };
        QueryManager2.prototype.clearStore = function() {
          this.fetchQueryPromises.forEach(function(_a4) {
            var reject2 = _a4.reject;
            reject2(new Error("Store reset while query was in flight(not completed in link chain)"));
          });
          var resetIds = [];
          this.queries.forEach(function(_a4, queryId) {
            var observableQuery = _a4.observableQuery;
            if (observableQuery)
              resetIds.push(queryId);
          });
          this.queryStore.reset(resetIds);
          this.mutationStore.reset();
          var reset = this.dataStore.reset();
          return reset;
        };
        QueryManager2.prototype.resetStore = function() {
          var _this = this;
          return this.clearStore().then(function() {
            return _this.reFetchObservableQueries();
          });
        };
        QueryManager2.prototype.getObservableQueryPromises = function(includeStandby) {
          var _this = this;
          var observableQueryPromises = [];
          this.queries.forEach(function(_a4, queryId) {
            var observableQuery = _a4.observableQuery;
            if (!observableQuery)
              return;
            var fetchPolicy = observableQuery.options.fetchPolicy;
            observableQuery.resetLastResults();
            if (fetchPolicy !== "cache-only" && (includeStandby || fetchPolicy !== "standby")) {
              observableQueryPromises.push(observableQuery.refetch());
            }
            _this.setQuery(queryId, function() {
              return { newData: null };
            });
            _this.invalidate(true, queryId);
          });
          return observableQueryPromises;
        };
        QueryManager2.prototype.reFetchObservableQueries = function(includeStandby) {
          var observableQueryPromises = this.getObservableQueryPromises(includeStandby);
          this.broadcastQueries();
          return Promise.all(observableQueryPromises);
        };
        QueryManager2.prototype.startQuery = function(queryId, options, listener) {
          this.addQueryListener(queryId, listener);
          this.fetchQuery(queryId, options).catch(function() {
            return void 0;
          });
          return queryId;
        };
        QueryManager2.prototype.startGraphQLSubscription = function(options) {
          var _this = this;
          var query = options.query;
          var cache = this.dataStore.getCache();
          var transformedDoc = cache.transformDocument(query);
          var variables = assign({}, getDefaultValues(getOperationDefinition(query)), options.variables);
          var sub;
          var observers = [];
          return new Observable2(function(observer) {
            observers.push(observer);
            if (observers.length === 1) {
              var handler = {
                next: function(result) {
                  _this.dataStore.markSubscriptionResult(result, transformedDoc, variables);
                  _this.broadcastQueries();
                  observers.forEach(function(obs) {
                    if (obs.next)
                      obs.next(result);
                  });
                },
                error: function(error) {
                  observers.forEach(function(obs) {
                    if (obs.error)
                      obs.error(error);
                  });
                }
              };
              var operation = _this.buildOperationForLink(transformedDoc, variables);
              sub = execute(_this.link, operation).subscribe(handler);
            }
            return function() {
              observers = observers.filter(function(obs) {
                return obs !== observer;
              });
              if (observers.length === 0 && sub) {
                sub.unsubscribe();
              }
            };
          });
        };
        QueryManager2.prototype.stopQuery = function(queryId) {
          this.stopQueryInStore(queryId);
          this.removeQuery(queryId);
        };
        QueryManager2.prototype.removeQuery = function(queryId) {
          var subscriptions = this.getQuery(queryId).subscriptions;
          subscriptions.forEach(function(x) {
            return x.unsubscribe();
          });
          this.queries.delete(queryId);
        };
        QueryManager2.prototype.getCurrentQueryResult = function(observableQuery, optimistic) {
          if (optimistic === void 0) {
            optimistic = true;
          }
          var _a4 = observableQuery.options, variables = _a4.variables, query = _a4.query;
          var lastResult = observableQuery.getLastResult();
          var newData = this.getQuery(observableQuery.queryId).newData;
          if (newData) {
            return maybeDeepFreeze({ data: newData.result, partial: false });
          } else {
            try {
              var data = this.dataStore.getCache().read({
                query,
                variables,
                previousResult: lastResult ? lastResult.data : void 0,
                optimistic
              });
              return maybeDeepFreeze({ data, partial: false });
            } catch (e) {
              return maybeDeepFreeze({ data: {}, partial: true });
            }
          }
        };
        QueryManager2.prototype.getQueryWithPreviousResult = function(queryIdOrObservable) {
          var observableQuery;
          if (typeof queryIdOrObservable === "string") {
            var foundObserveableQuery = this.getQuery(queryIdOrObservable).observableQuery;
            if (!foundObserveableQuery) {
              throw new Error("ObservableQuery with this id doesn't exist: " + queryIdOrObservable);
            }
            observableQuery = foundObserveableQuery;
          } else {
            observableQuery = queryIdOrObservable;
          }
          var _a4 = observableQuery.options, variables = _a4.variables, query = _a4.query;
          var data = this.getCurrentQueryResult(observableQuery, false).data;
          return {
            previousResult: data,
            variables,
            document: query
          };
        };
        QueryManager2.prototype.broadcastQueries = function() {
          var _this = this;
          this.onBroadcast();
          this.queries.forEach(function(info, id) {
            if (!info.invalidated || !info.listeners)
              return;
            info.listeners.filter(function(x) {
              return !!x;
            }).forEach(function(listener) {
              listener(_this.queryStore.get(id), info.newData);
            });
          });
        };
        QueryManager2.prototype.fetchRequest = function(_a4) {
          var _this = this;
          var requestId = _a4.requestId, queryId = _a4.queryId, document2 = _a4.document, options = _a4.options, fetchMoreForQueryId = _a4.fetchMoreForQueryId;
          var variables = options.variables, context = options.context, _b = options.errorPolicy, errorPolicy = _b === void 0 ? "none" : _b, fetchPolicy = options.fetchPolicy;
          var operation = this.buildOperationForLink(document2, variables, __assign5({}, context, {
            // TODO: Should this be included for all entry points via
            // buildOperationForLink?
            forceFetch: !this.queryDeduplication
          }));
          var resultFromStore;
          var errorsFromStore;
          return new Promise(function(resolve2, reject2) {
            _this.addFetchQueryPromise(requestId, resolve2, reject2);
            var subscription = execute(_this.deduplicator, operation).subscribe({
              next: function(result) {
                var lastRequestId = _this.getQuery(queryId).lastRequestId;
                if (requestId >= (lastRequestId || 1)) {
                  if (fetchPolicy !== "no-cache") {
                    try {
                      _this.dataStore.markQueryResult(result, document2, variables, fetchMoreForQueryId, errorPolicy === "ignore" || errorPolicy === "all");
                    } catch (e) {
                      reject2(e);
                      return;
                    }
                  } else {
                    _this.setQuery(queryId, function() {
                      return {
                        newData: { result: result.data, complete: true }
                      };
                    });
                  }
                  _this.queryStore.markQueryResult(queryId, result, fetchMoreForQueryId);
                  _this.invalidate(true, queryId, fetchMoreForQueryId);
                  _this.broadcastQueries();
                }
                if (result.errors && errorPolicy === "none") {
                  reject2(new ApolloError({
                    graphQLErrors: result.errors
                  }));
                  return;
                } else if (errorPolicy === "all") {
                  errorsFromStore = result.errors;
                }
                if (fetchMoreForQueryId || fetchPolicy === "no-cache") {
                  resultFromStore = result.data;
                } else {
                  try {
                    resultFromStore = _this.dataStore.getCache().read({
                      variables,
                      query: document2,
                      optimistic: false
                    });
                  } catch (e) {
                  }
                }
              },
              error: function(error) {
                _this.removeFetchQueryPromise(requestId);
                _this.setQuery(queryId, function(_a5) {
                  var subscriptions = _a5.subscriptions;
                  return {
                    subscriptions: subscriptions.filter(function(x) {
                      return x !== subscription;
                    })
                  };
                });
                reject2(error);
              },
              complete: function() {
                _this.removeFetchQueryPromise(requestId);
                _this.setQuery(queryId, function(_a5) {
                  var subscriptions = _a5.subscriptions;
                  return {
                    subscriptions: subscriptions.filter(function(x) {
                      return x !== subscription;
                    })
                  };
                });
                resolve2({
                  data: resultFromStore,
                  errors: errorsFromStore,
                  loading: false,
                  networkStatus: NetworkStatus.ready,
                  stale: false
                });
              }
            });
            _this.setQuery(queryId, function(_a5) {
              var subscriptions = _a5.subscriptions;
              return {
                subscriptions: subscriptions.concat([subscription])
              };
            });
          });
        };
        QueryManager2.prototype.refetchQueryByName = function(queryName) {
          var _this = this;
          var refetchedQueries = this.queryIdsByName[queryName];
          if (refetchedQueries === void 0)
            return;
          return Promise.all(refetchedQueries.map(function(id) {
            return _this.getQuery(id).observableQuery;
          }).filter(function(x) {
            return !!x;
          }).map(function(x) {
            return x.refetch();
          }));
        };
        QueryManager2.prototype.generateRequestId = function() {
          var requestId = this.idCounter;
          this.idCounter++;
          return requestId;
        };
        QueryManager2.prototype.getQuery = function(queryId) {
          return this.queries.get(queryId) || __assign5({}, defaultQueryInfo);
        };
        QueryManager2.prototype.setQuery = function(queryId, updater) {
          var prev = this.getQuery(queryId);
          var newInfo = __assign5({}, prev, updater(prev));
          this.queries.set(queryId, newInfo);
        };
        QueryManager2.prototype.invalidate = function(invalidated, queryId, fetchMoreForQueryId) {
          if (queryId)
            this.setQuery(queryId, function() {
              return { invalidated };
            });
          if (fetchMoreForQueryId) {
            this.setQuery(fetchMoreForQueryId, function() {
              return { invalidated };
            });
          }
        };
        QueryManager2.prototype.buildOperationForLink = function(document2, variables, extraContext) {
          var cache = this.dataStore.getCache();
          return {
            query: cache.transformForLink ? cache.transformForLink(document2) : document2,
            variables,
            operationName: getOperationName(document2) || void 0,
            context: __assign5({}, extraContext, {
              cache,
              // getting an entry's cache key is useful for cacheResolvers & state-link
              getCacheKey: function(obj) {
                if (cache.config) {
                  return cache.config.dataIdFromObject(obj);
                } else {
                  throw new Error("To use context.getCacheKey, you need to use a cache that has a configurable dataIdFromObject, like apollo-cache-inmemory.");
                }
              }
            })
          };
        };
        return QueryManager2;
      }();
    }
  });

  // node_modules/apollo-client/data/store.js
  var DataStore;
  var init_store = __esm({
    "node_modules/apollo-client/data/store.js"() {
      init_lib();
      DataStore = /** @class */
      function() {
        function DataStore2(initialCache) {
          this.cache = initialCache;
        }
        DataStore2.prototype.getCache = function() {
          return this.cache;
        };
        DataStore2.prototype.markQueryResult = function(result, document2, variables, fetchMoreForQueryId, ignoreErrors) {
          if (ignoreErrors === void 0) {
            ignoreErrors = false;
          }
          var writeWithErrors = !graphQLResultHasError(result);
          if (ignoreErrors && graphQLResultHasError(result) && result.data) {
            writeWithErrors = true;
          }
          if (!fetchMoreForQueryId && writeWithErrors) {
            this.cache.write({
              result: result.data,
              dataId: "ROOT_QUERY",
              query: document2,
              variables
            });
          }
        };
        DataStore2.prototype.markSubscriptionResult = function(result, document2, variables) {
          if (!graphQLResultHasError(result)) {
            this.cache.write({
              result: result.data,
              dataId: "ROOT_SUBSCRIPTION",
              query: document2,
              variables
            });
          }
        };
        DataStore2.prototype.markMutationInit = function(mutation) {
          var _this = this;
          if (mutation.optimisticResponse) {
            var optimistic_1;
            if (typeof mutation.optimisticResponse === "function") {
              optimistic_1 = mutation.optimisticResponse(mutation.variables);
            } else {
              optimistic_1 = mutation.optimisticResponse;
            }
            var changeFn_1 = function() {
              _this.markMutationResult({
                mutationId: mutation.mutationId,
                result: { data: optimistic_1 },
                document: mutation.document,
                variables: mutation.variables,
                updateQueries: mutation.updateQueries,
                update: mutation.update
              });
            };
            this.cache.recordOptimisticTransaction(function(c) {
              var orig = _this.cache;
              _this.cache = c;
              try {
                changeFn_1();
              } finally {
                _this.cache = orig;
              }
            }, mutation.mutationId);
          }
        };
        DataStore2.prototype.markMutationResult = function(mutation) {
          var _this = this;
          if (!graphQLResultHasError(mutation.result)) {
            var cacheWrites_1 = [];
            cacheWrites_1.push({
              result: mutation.result.data,
              dataId: "ROOT_MUTATION",
              query: mutation.document,
              variables: mutation.variables
            });
            if (mutation.updateQueries) {
              Object.keys(mutation.updateQueries).filter(function(id) {
                return mutation.updateQueries[id];
              }).forEach(function(queryId) {
                var _a4 = mutation.updateQueries[queryId], query = _a4.query, updater = _a4.updater;
                var _b = _this.cache.diff({
                  query: query.document,
                  variables: query.variables,
                  returnPartialData: true,
                  optimistic: false
                }), currentQueryResult = _b.result, complete = _b.complete;
                if (!complete) {
                  return;
                }
                var nextQueryResult = tryFunctionOrLogError(function() {
                  return updater(currentQueryResult, {
                    mutationResult: mutation.result,
                    queryName: getOperationName(query.document) || void 0,
                    queryVariables: query.variables
                  });
                });
                if (nextQueryResult) {
                  cacheWrites_1.push({
                    result: nextQueryResult,
                    dataId: "ROOT_QUERY",
                    query: query.document,
                    variables: query.variables
                  });
                }
              });
            }
            this.cache.performTransaction(function(c) {
              cacheWrites_1.forEach(function(write) {
                return c.write(write);
              });
            });
            var update_1 = mutation.update;
            if (update_1) {
              this.cache.performTransaction(function(c) {
                tryFunctionOrLogError(function() {
                  return update_1(c, mutation.result);
                });
              });
            }
          }
        };
        DataStore2.prototype.markMutationComplete = function(_a4) {
          var mutationId = _a4.mutationId, optimisticResponse = _a4.optimisticResponse;
          if (!optimisticResponse)
            return;
          this.cache.removeOptimistic(mutationId);
        };
        DataStore2.prototype.markUpdateQueryResult = function(document2, variables, newResult) {
          this.cache.write({
            result: newResult,
            dataId: "ROOT_QUERY",
            variables,
            query: document2
          });
        };
        DataStore2.prototype.reset = function() {
          return this.cache.reset();
        };
        return DataStore2;
      }();
    }
  });

  // node_modules/apollo-client/version.js
  var require_version = __commonJS({
    "node_modules/apollo-client/version.js"(exports) {
      exports.version = "2.3.4";
    }
  });

  // node_modules/apollo-client/ApolloClient.js
  var import_version, __assign6, hasSuggestedDevtools, supportedDirectives, ApolloClient, ApolloClient_default;
  var init_ApolloClient = __esm({
    "node_modules/apollo-client/ApolloClient.js"() {
      init_lib3();
      init_lib();
      init_QueryManager();
      init_store();
      import_version = __toESM(require_version());
      __assign6 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      hasSuggestedDevtools = false;
      supportedDirectives = new ApolloLink(function(operation, forward) {
        operation.query = removeConnectionDirectiveFromDocument(operation.query);
        return forward(operation);
      });
      ApolloClient = /** @class */
      function() {
        function ApolloClient2(options) {
          var _this = this;
          this.defaultOptions = {};
          this.resetStoreCallbacks = [];
          var link = options.link, cache = options.cache, _a4 = options.ssrMode, ssrMode = _a4 === void 0 ? false : _a4, _b = options.ssrForceFetchDelay, ssrForceFetchDelay = _b === void 0 ? 0 : _b, connectToDevTools = options.connectToDevTools, _c = options.queryDeduplication, queryDeduplication = _c === void 0 ? true : _c, defaultOptions2 = options.defaultOptions;
          if (!link || !cache) {
            throw new Error("\n        In order to initialize Apollo Client, you must specify link & cache properties on the config object.\n        This is part of the required upgrade when migrating from Apollo Client 1.0 to Apollo Client 2.0.\n        For more information, please visit:\n          https://www.apollographql.com/docs/react/basics/setup.html\n        to help you get started.\n      ");
          }
          this.link = supportedDirectives.concat(link);
          this.cache = cache;
          this.store = new DataStore(cache);
          this.disableNetworkFetches = ssrMode || ssrForceFetchDelay > 0;
          this.queryDeduplication = queryDeduplication;
          this.ssrMode = ssrMode;
          this.defaultOptions = defaultOptions2 || {};
          if (ssrForceFetchDelay) {
            setTimeout(function() {
              return _this.disableNetworkFetches = false;
            }, ssrForceFetchDelay);
          }
          this.watchQuery = this.watchQuery.bind(this);
          this.query = this.query.bind(this);
          this.mutate = this.mutate.bind(this);
          this.resetStore = this.resetStore.bind(this);
          this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this);
          var defaultConnectToDevTools = !isProduction() && typeof window !== "undefined" && !window.__APOLLO_CLIENT__;
          if (typeof connectToDevTools === "undefined" ? defaultConnectToDevTools : connectToDevTools && typeof window !== "undefined") {
            window.__APOLLO_CLIENT__ = this;
          }
          if (!hasSuggestedDevtools && !isProduction()) {
            hasSuggestedDevtools = true;
            if (typeof window !== "undefined" && window.document && window.top === window.self) {
              if (typeof window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__ === "undefined") {
                if (window.navigator && window.navigator.userAgent.indexOf("Chrome") > -1) {
                  console.debug("Download the Apollo DevTools for a better development experience: https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm");
                }
              }
            }
          }
          this.version = import_version.version;
        }
        ApolloClient2.prototype.watchQuery = function(options) {
          this.initQueryManager();
          if (this.defaultOptions.watchQuery) {
            options = __assign6({}, this.defaultOptions.watchQuery, options);
          }
          if (this.disableNetworkFetches && (options.fetchPolicy === "network-only" || options.fetchPolicy === "cache-and-network")) {
            options = __assign6({}, options, { fetchPolicy: "cache-first" });
          }
          return this.queryManager.watchQuery(options);
        };
        ApolloClient2.prototype.query = function(options) {
          this.initQueryManager();
          if (this.defaultOptions.query) {
            options = __assign6({}, this.defaultOptions.query, options);
          }
          if (options.fetchPolicy === "cache-and-network") {
            throw new Error("cache-and-network fetchPolicy can only be used with watchQuery");
          }
          if (this.disableNetworkFetches && options.fetchPolicy === "network-only") {
            options = __assign6({}, options, { fetchPolicy: "cache-first" });
          }
          return this.queryManager.query(options);
        };
        ApolloClient2.prototype.mutate = function(options) {
          this.initQueryManager();
          if (this.defaultOptions.mutate) {
            options = __assign6({}, this.defaultOptions.mutate, options);
          }
          return this.queryManager.mutate(options);
        };
        ApolloClient2.prototype.subscribe = function(options) {
          this.initQueryManager();
          return this.queryManager.startGraphQLSubscription(options);
        };
        ApolloClient2.prototype.readQuery = function(options) {
          return this.initProxy().readQuery(options);
        };
        ApolloClient2.prototype.readFragment = function(options) {
          return this.initProxy().readFragment(options);
        };
        ApolloClient2.prototype.writeQuery = function(options) {
          var result = this.initProxy().writeQuery(options);
          this.queryManager.broadcastQueries();
          return result;
        };
        ApolloClient2.prototype.writeFragment = function(options) {
          var result = this.initProxy().writeFragment(options);
          this.queryManager.broadcastQueries();
          return result;
        };
        ApolloClient2.prototype.writeData = function(options) {
          var result = this.initProxy().writeData(options);
          this.queryManager.broadcastQueries();
          return result;
        };
        ApolloClient2.prototype.__actionHookForDevTools = function(cb) {
          this.devToolsHookCb = cb;
        };
        ApolloClient2.prototype.__requestRaw = function(payload) {
          return execute(this.link, payload);
        };
        ApolloClient2.prototype.initQueryManager = function() {
          var _this = this;
          if (this.queryManager)
            return;
          this.queryManager = new QueryManager({
            link: this.link,
            store: this.store,
            queryDeduplication: this.queryDeduplication,
            ssrMode: this.ssrMode,
            onBroadcast: function() {
              if (_this.devToolsHookCb) {
                _this.devToolsHookCb({
                  action: {},
                  state: {
                    queries: _this.queryManager.queryStore.getStore(),
                    mutations: _this.queryManager.mutationStore.getStore()
                  },
                  dataWithOptimisticResults: _this.cache.extract(true)
                });
              }
            }
          });
        };
        ApolloClient2.prototype.resetStore = function() {
          var _this = this;
          return Promise.resolve().then(function() {
            return _this.queryManager ? _this.queryManager.clearStore() : Promise.resolve(null);
          }).then(function() {
            return Promise.all(_this.resetStoreCallbacks.map(function(fn) {
              return fn();
            }));
          }).then(function() {
            return _this.queryManager && _this.queryManager.reFetchObservableQueries ? _this.queryManager.reFetchObservableQueries() : Promise.resolve(null);
          });
        };
        ApolloClient2.prototype.onResetStore = function(cb) {
          var _this = this;
          this.resetStoreCallbacks.push(cb);
          return function() {
            _this.resetStoreCallbacks = _this.resetStoreCallbacks.filter(function(c) {
              return c !== cb;
            });
          };
        };
        ApolloClient2.prototype.reFetchObservableQueries = function(includeStandby) {
          return this.queryManager ? this.queryManager.reFetchObservableQueries(includeStandby) : Promise.resolve(null);
        };
        ApolloClient2.prototype.extract = function(optimistic) {
          return this.initProxy().extract(optimistic);
        };
        ApolloClient2.prototype.restore = function(serializedState) {
          return this.initProxy().restore(serializedState);
        };
        ApolloClient2.prototype.initProxy = function() {
          if (!this.proxy) {
            this.initQueryManager();
            this.proxy = this.cache;
          }
          return this.proxy;
        };
        return ApolloClient2;
      }();
      ApolloClient_default = ApolloClient;
    }
  });

  // node_modules/apollo-client/index.js
  var import_printer4, apollo_client_default;
  var init_apollo_client = __esm({
    "node_modules/apollo-client/index.js"() {
      import_printer4 = __toESM(require_printer());
      init_types();
      init_ApolloClient();
      apollo_client_default = ApolloClient_default;
    }
  });

  // node_modules/apollo-link-batch-http/node_modules/apollo-link-http-common/lib/index.js
  var import_printer5, __assign7, defaultHttpOptions, defaultHeaders, defaultOptions, fallbackHttpConfig, throwServerError, parseAndCheckHttpResponse, checkFetcher, createSignalIfSupported, selectHttpOptionsAndBody, serializeFetchParameter, selectURI;
  var init_lib5 = __esm({
    "node_modules/apollo-link-batch-http/node_modules/apollo-link-http-common/lib/index.js"() {
      import_printer5 = __toESM(require_printer());
      __assign7 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      defaultHttpOptions = {
        includeQuery: true,
        includeExtensions: false
      };
      defaultHeaders = {
        // headers are case insensitive (https://stackoverflow.com/a/5259004)
        accept: "*/*",
        "content-type": "application/json"
      };
      defaultOptions = {
        method: "POST"
      };
      fallbackHttpConfig = {
        http: defaultHttpOptions,
        headers: defaultHeaders,
        options: defaultOptions
      };
      throwServerError = function(response, result, message) {
        var error = new Error(message);
        error.response = response;
        error.statusCode = response.status;
        error.result = result;
        throw error;
      };
      parseAndCheckHttpResponse = function(operations) {
        return function(response) {
          return response.text().then(function(bodyText) {
            try {
              return JSON.parse(bodyText);
            } catch (err) {
              var parseError = err;
              parseError.response = response;
              parseError.statusCode = response.status;
              parseError.bodyText = bodyText;
              return Promise.reject(parseError);
            }
          }).then(function(result) {
            if (response.status >= 300) {
              throwServerError(response, result, "Response not successful: Received status code " + response.status);
            }
            if (!Array.isArray(result) && !result.hasOwnProperty("data") && !result.hasOwnProperty("errors")) {
              throwServerError(response, result, "Server response was missing for query '" + (Array.isArray(operations) ? operations.map(function(op) {
                return op.operationName;
              }) : operations.operationName) + "'.");
            }
            return result;
          });
        };
      };
      checkFetcher = function(fetcher) {
        if (!fetcher && typeof fetch === "undefined") {
          var library = "unfetch";
          if (typeof window === "undefined")
            library = "node-fetch";
          throw new Error("\nfetch is not found globally and no fetcher passed, to fix pass a fetch for\nyour environment like https://www.npmjs.com/package/" + library + ".\n\nFor example:\nimport fetch from '" + library + "';\nimport { createHttpLink } from 'apollo-link-http';\n\nconst link = createHttpLink({ uri: '/graphql', fetch: fetch });");
        }
      };
      createSignalIfSupported = function() {
        if (typeof AbortController === "undefined")
          return { controller: false, signal: false };
        var controller = new AbortController();
        var signal = controller.signal;
        return { controller, signal };
      };
      selectHttpOptionsAndBody = function(operation, fallbackConfig) {
        var configs = [];
        for (var _i = 2; _i < arguments.length; _i++) {
          configs[_i - 2] = arguments[_i];
        }
        var options = __assign7({}, fallbackConfig.options, { headers: fallbackConfig.headers, credentials: fallbackConfig.credentials });
        var http = fallbackConfig.http;
        configs.forEach(function(config) {
          options = __assign7({}, options, config.options, { headers: __assign7({}, options.headers, config.headers) });
          if (config.credentials)
            options.credentials = config.credentials;
          http = __assign7({}, http, config.http);
        });
        var operationName = operation.operationName, extensions = operation.extensions, variables = operation.variables, query = operation.query;
        var body = { operationName, variables };
        if (http.includeExtensions)
          body.extensions = extensions;
        if (http.includeQuery)
          body.query = (0, import_printer5.print)(query);
        return {
          options,
          body
        };
      };
      serializeFetchParameter = function(p, label) {
        var serialized;
        try {
          serialized = JSON.stringify(p);
        } catch (e) {
          var parseError = new Error("Network request failed. " + label + " is not serializable: " + e.message);
          parseError.parseError = e;
          throw parseError;
        }
        return serialized;
      };
      selectURI = function(operation, fallbackURI) {
        var context = operation.getContext();
        var contextURI = context.uri;
        if (contextURI) {
          return contextURI;
        } else if (typeof fallbackURI === "function") {
          return fallbackURI(operation);
        } else {
          return fallbackURI || "/graphql";
        }
      };
    }
  });

  // node_modules/apollo-link-batch/lib/batching.js
  var __assign8, OperationBatcher;
  var init_batching = __esm({
    "node_modules/apollo-link-batch/lib/batching.js"() {
      init_lib3();
      __assign8 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      OperationBatcher = /** @class */
      function() {
        function OperationBatcher2(_a4) {
          var batchInterval = _a4.batchInterval, _b = _a4.batchMax, batchMax = _b === void 0 ? 0 : _b, batchHandler = _a4.batchHandler, _c = _a4.batchKey, batchKey = _c === void 0 ? function() {
            return "";
          } : _c;
          this.queuedRequests = /* @__PURE__ */ new Map();
          this.batchInterval = batchInterval;
          this.batchMax = batchMax;
          this.batchHandler = batchHandler;
          this.batchKey = batchKey;
        }
        OperationBatcher2.prototype.enqueueRequest = function(request) {
          var _this = this;
          var requestCopy = __assign8({}, request);
          var queued = false;
          var key = this.batchKey(request.operation);
          if (!requestCopy.observable) {
            requestCopy.observable = new lib_default(function(observer) {
              if (!_this.queuedRequests.has(key)) {
                _this.queuedRequests.set(key, []);
              }
              if (!queued) {
                _this.queuedRequests.get(key).push(requestCopy);
                queued = true;
              }
              requestCopy.next = requestCopy.next || [];
              if (observer.next)
                requestCopy.next.push(observer.next.bind(observer));
              requestCopy.error = requestCopy.error || [];
              if (observer.error)
                requestCopy.error.push(observer.error.bind(observer));
              requestCopy.complete = requestCopy.complete || [];
              if (observer.complete)
                requestCopy.complete.push(observer.complete.bind(observer));
              if (_this.queuedRequests.get(key).length === 1) {
                _this.scheduleQueueConsumption(key);
              }
              if (_this.queuedRequests.get(key).length === _this.batchMax) {
                _this.consumeQueue(key);
              }
            });
          }
          return requestCopy.observable;
        };
        OperationBatcher2.prototype.consumeQueue = function(key) {
          if (key === void 0) {
            key = "";
          }
          var queuedRequests = this.queuedRequests.get(key);
          if (!queuedRequests) {
            return;
          }
          this.queuedRequests.delete(key);
          var requests = queuedRequests.map(function(queuedRequest) {
            return queuedRequest.operation;
          });
          var forwards = queuedRequests.map(function(queuedRequest) {
            return queuedRequest.forward;
          });
          var observables = [];
          var nexts = [];
          var errors = [];
          var completes = [];
          queuedRequests.forEach(function(batchableRequest, index) {
            observables.push(batchableRequest.observable);
            nexts.push(batchableRequest.next);
            errors.push(batchableRequest.error);
            completes.push(batchableRequest.complete);
          });
          var batchedObservable = this.batchHandler(requests, forwards) || lib_default.of();
          var onError2 = function(error) {
            errors.forEach(function(rejecters) {
              if (rejecters) {
                rejecters.forEach(function(e) {
                  return e(error);
                });
              }
            });
          };
          batchedObservable.subscribe({
            next: function(results) {
              if (!Array.isArray(results)) {
                results = [results];
              }
              if (nexts.length !== results.length) {
                var error = new Error("server returned results with length " + results.length + ", expected length of " + nexts.length);
                error.result = results;
                return onError2(error);
              }
              results.forEach(function(result, index) {
                requests[index].setContext({ response: result });
                if (nexts[index]) {
                  nexts[index].forEach(function(next) {
                    return next(result);
                  });
                }
              });
            },
            error: onError2,
            complete: function() {
              completes.forEach(function(complete) {
                if (complete) {
                  complete.forEach(function(c) {
                    return c();
                  });
                }
              });
            }
          });
          return observables;
        };
        OperationBatcher2.prototype.scheduleQueueConsumption = function(key) {
          var _this = this;
          if (key === void 0) {
            key = "";
          }
          setTimeout(function() {
            if (_this.queuedRequests.get(key) && _this.queuedRequests.get(key).length) {
              _this.consumeQueue(key);
            }
          }, this.batchInterval);
        };
        return OperationBatcher2;
      }();
    }
  });

  // node_modules/apollo-link-batch/lib/batchLink.js
  var __extends6, BatchLink;
  var init_batchLink = __esm({
    "node_modules/apollo-link-batch/lib/batchLink.js"() {
      init_lib3();
      init_batching();
      init_batching();
      __extends6 = function() {
        var extendStatics4 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b)
            if (b.hasOwnProperty(p))
              d[p] = b[p];
        };
        return function(d, b) {
          extendStatics4(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      BatchLink = /** @class */
      function(_super) {
        __extends6(BatchLink2, _super);
        function BatchLink2(fetchParams) {
          if (fetchParams === void 0) {
            fetchParams = {};
          }
          var _this = _super.call(this) || this;
          var _a4 = fetchParams.batchInterval, batchInterval = _a4 === void 0 ? 10 : _a4, _b = fetchParams.batchMax, batchMax = _b === void 0 ? 0 : _b, _c = fetchParams.batchHandler, batchHandler = _c === void 0 ? function() {
            return null;
          } : _c, _d = fetchParams.batchKey, batchKey = _d === void 0 ? function() {
            return "";
          } : _d;
          _this.batcher = new OperationBatcher({
            batchInterval,
            batchMax,
            batchHandler,
            batchKey
          });
          if (fetchParams.batchHandler.length <= 1) {
            _this.request = function(operation) {
              return _this.batcher.enqueueRequest({ operation });
            };
          }
          return _this;
        }
        BatchLink2.prototype.request = function(operation, forward) {
          return this.batcher.enqueueRequest({
            operation,
            forward
          });
        };
        return BatchLink2;
      }(ApolloLink);
    }
  });

  // node_modules/apollo-link-batch/lib/index.js
  var init_lib6 = __esm({
    "node_modules/apollo-link-batch/lib/index.js"() {
      init_batchLink();
    }
  });

  // node_modules/apollo-link-batch-http/lib/batchHttpLink.js
  var __extends7, __rest, BatchHttpLink;
  var init_batchHttpLink = __esm({
    "node_modules/apollo-link-batch-http/lib/batchHttpLink.js"() {
      init_lib3();
      init_lib5();
      init_lib6();
      __extends7 = function() {
        var extendStatics4 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b)
            if (b.hasOwnProperty(p))
              d[p] = b[p];
        };
        return function(d, b) {
          extendStatics4(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      __rest = function(s, e) {
        var t = {};
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function") {
          for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)
            if (e.indexOf(p[i]) < 0)
              t[p[i]] = s[p[i]];
        }
        return t;
      };
      BatchHttpLink = /** @class */
      function(_super) {
        __extends7(BatchHttpLink2, _super);
        function BatchHttpLink2(fetchParams) {
          if (fetchParams === void 0) {
            fetchParams = {};
          }
          var _this = _super.call(this) || this;
          var _a4 = fetchParams.uri, uri = _a4 === void 0 ? "/graphql" : _a4, fetcher = fetchParams.fetch, includeExtensions = fetchParams.includeExtensions, batchInterval = fetchParams.batchInterval, batchMax = fetchParams.batchMax, batchKey = fetchParams.batchKey, requestOptions = __rest(fetchParams, ["uri", "fetch", "includeExtensions", "batchInterval", "batchMax", "batchKey"]);
          checkFetcher(fetcher);
          if (!fetcher) {
            fetcher = fetch;
          }
          var linkConfig = {
            http: { includeExtensions },
            options: requestOptions.fetchOptions,
            credentials: requestOptions.credentials,
            headers: requestOptions.headers
          };
          _this.batchInterval = batchInterval || 10;
          _this.batchMax = batchMax || 10;
          var batchHandler = function(operations) {
            var chosenURI = selectURI(operations[0], uri);
            var context = operations[0].getContext();
            var contextConfig = {
              http: context.http,
              options: context.fetchOptions,
              credentials: context.credentials,
              headers: context.headers
            };
            var optsAndBody = operations.map(function(operation) {
              return selectHttpOptionsAndBody(operation, fallbackHttpConfig, linkConfig, contextConfig);
            });
            var body = optsAndBody.map(function(_a6) {
              var body2 = _a6.body;
              return body2;
            });
            var options = optsAndBody[0].options;
            if (options.method === "GET") {
              return fromError(new Error("apollo-link-batch-http does not support GET requests"));
            }
            try {
              options.body = serializeFetchParameter(body, "Payload");
            } catch (parseError) {
              return fromError(parseError);
            }
            var controller;
            if (!options.signal) {
              var _a5 = createSignalIfSupported(), _controller = _a5.controller, signal = _a5.signal;
              controller = _controller;
              if (controller)
                options.signal = signal;
            }
            return new lib_default(function(observer) {
              fetcher(chosenURI, options).then(parseAndCheckHttpResponse(operations)).then(function(result) {
                observer.next(result);
                observer.complete();
                return result;
              }).catch(function(err) {
                if (err.name === "AbortError")
                  return;
                if (err.result && err.result.errors && err.result.data) {
                  observer.next(err.result);
                }
                observer.error(err);
              });
              return function() {
                if (controller)
                  controller.abort();
              };
            });
          };
          batchKey = batchKey || function(operation) {
            var context = operation.getContext();
            var contextConfig = {
              http: context.http,
              options: context.fetchOptions,
              credentials: context.credentials,
              headers: context.headers
            };
            return selectURI(operation, uri) + JSON.stringify(contextConfig);
          };
          _this.batcher = new BatchLink({
            batchInterval: _this.batchInterval,
            batchMax: _this.batchMax,
            batchKey,
            batchHandler
          });
          return _this;
        }
        BatchHttpLink2.prototype.request = function(operation) {
          return this.batcher.request(operation);
        };
        return BatchHttpLink2;
      }(ApolloLink);
    }
  });

  // node_modules/apollo-link-batch-http/lib/index.js
  var init_lib7 = __esm({
    "node_modules/apollo-link-batch-http/lib/index.js"() {
      init_batchHttpLink();
    }
  });

  // node_modules/apollo-cache-inmemory/lib/fixPolyfills.js
  var testMap, set_1, testSet, add_1, frozen, wrap2;
  var init_fixPolyfills = __esm({
    "node_modules/apollo-cache-inmemory/lib/fixPolyfills.js"() {
      testMap = /* @__PURE__ */ new Map();
      if (testMap.set(1, 2) !== testMap) {
        set_1 = testMap.set;
        Map.prototype.set = function() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          set_1.apply(this, args);
          return this;
        };
      }
      testSet = /* @__PURE__ */ new Set();
      if (testSet.add(3) !== testSet) {
        add_1 = testSet.add;
        Set.prototype.add = function() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          add_1.apply(this, args);
          return this;
        };
      }
      frozen = {};
      if (typeof Object.freeze === "function") {
        Object.freeze(frozen);
      }
      try {
        testMap.set(frozen, frozen).delete(frozen);
      } catch (_a4) {
        wrap2 = function(method) {
          return method && function(obj) {
            try {
              testMap.set(obj, obj).delete(obj);
            } finally {
              return method.call(Object, obj);
            }
          };
        };
        Object.freeze = wrap2(Object.freeze);
        Object.seal = wrap2(Object.seal);
        Object.preventExtensions = wrap2(Object.preventExtensions);
      }
    }
  });

  // node_modules/apollo-cache-inmemory/node_modules/apollo-utilities/lib/storeUtils.js
  function isStringValue2(value) {
    return value.kind === "StringValue";
  }
  function isBooleanValue2(value) {
    return value.kind === "BooleanValue";
  }
  function isIntValue2(value) {
    return value.kind === "IntValue";
  }
  function isFloatValue2(value) {
    return value.kind === "FloatValue";
  }
  function isVariable2(value) {
    return value.kind === "Variable";
  }
  function isObjectValue2(value) {
    return value.kind === "ObjectValue";
  }
  function isListValue2(value) {
    return value.kind === "ListValue";
  }
  function isEnumValue2(value) {
    return value.kind === "EnumValue";
  }
  function isNullValue2(value) {
    return value.kind === "NullValue";
  }
  function valueToObjectRepresentation2(argObj, name, value, variables) {
    if (isIntValue2(value) || isFloatValue2(value)) {
      argObj[name.value] = Number(value.value);
    } else if (isBooleanValue2(value) || isStringValue2(value)) {
      argObj[name.value] = value.value;
    } else if (isObjectValue2(value)) {
      var nestedArgObj_1 = {};
      value.fields.map(function(obj) {
        return valueToObjectRepresentation2(nestedArgObj_1, obj.name, obj.value, variables);
      });
      argObj[name.value] = nestedArgObj_1;
    } else if (isVariable2(value)) {
      var variableValue = (variables || {})[value.name.value];
      argObj[name.value] = variableValue;
    } else if (isListValue2(value)) {
      argObj[name.value] = value.values.map(function(listValue) {
        var nestedArgArrayObj = {};
        valueToObjectRepresentation2(nestedArgArrayObj, name, listValue, variables);
        return nestedArgArrayObj[name.value];
      });
    } else if (isEnumValue2(value)) {
      argObj[name.value] = value.value;
    } else if (isNullValue2(value)) {
      argObj[name.value] = null;
    } else {
      throw new Error('The inline argument "' + name.value + '" of kind "' + value.kind + '"is not supported. Use variables instead of inline arguments to overcome this limitation.');
    }
  }
  function storeKeyNameFromField(field, variables) {
    var directivesObj = null;
    if (field.directives) {
      directivesObj = {};
      field.directives.forEach(function(directive) {
        directivesObj[directive.name.value] = {};
        if (directive.arguments) {
          directive.arguments.forEach(function(_a4) {
            var name = _a4.name, value = _a4.value;
            return valueToObjectRepresentation2(directivesObj[directive.name.value], name, value, variables);
          });
        }
      });
    }
    var argObj = null;
    if (field.arguments && field.arguments.length) {
      argObj = {};
      field.arguments.forEach(function(_a4) {
        var name = _a4.name, value = _a4.value;
        return valueToObjectRepresentation2(argObj, name, value, variables);
      });
    }
    return getStoreKeyName(field.name.value, argObj, directivesObj);
  }
  function getStoreKeyName(fieldName, args, directives) {
    if (directives && directives["connection"] && directives["connection"]["key"]) {
      if (directives["connection"]["filter"] && directives["connection"]["filter"].length > 0) {
        var filterKeys = directives["connection"]["filter"] ? directives["connection"]["filter"] : [];
        filterKeys.sort();
        var queryArgs_1 = args;
        var filteredArgs_1 = {};
        filterKeys.forEach(function(key) {
          filteredArgs_1[key] = queryArgs_1[key];
        });
        return directives["connection"]["key"] + "(" + JSON.stringify(filteredArgs_1) + ")";
      } else {
        return directives["connection"]["key"];
      }
    }
    var completeFieldName = fieldName;
    if (args) {
      var stringifiedArgs = (0, import_fast_json_stable_stringify2.default)(args);
      completeFieldName += "(" + stringifiedArgs + ")";
    }
    if (directives) {
      Object.keys(directives).forEach(function(key) {
        if (KNOWN_DIRECTIVES.indexOf(key) !== -1)
          return;
        if (directives[key] && Object.keys(directives[key]).length) {
          completeFieldName += "@" + key + "(" + JSON.stringify(directives[key]) + ")";
        } else {
          completeFieldName += "@" + key;
        }
      });
    }
    return completeFieldName;
  }
  function argumentsObjectFromField(field, variables) {
    if (field.arguments && field.arguments.length) {
      var argObj_1 = {};
      field.arguments.forEach(function(_a4) {
        var name = _a4.name, value = _a4.value;
        return valueToObjectRepresentation2(argObj_1, name, value, variables);
      });
      return argObj_1;
    }
    return null;
  }
  function resultKeyNameFromField(field) {
    return field.alias ? field.alias.value : field.name.value;
  }
  function isField(selection) {
    return selection.kind === "Field";
  }
  function isInlineFragment(selection) {
    return selection.kind === "InlineFragment";
  }
  function isIdValue(idObject) {
    return idObject && idObject.type === "id" && typeof idObject.generated === "boolean";
  }
  function toIdValue(idConfig, generated) {
    if (generated === void 0) {
      generated = false;
    }
    return __assign9({ type: "id", generated }, typeof idConfig === "string" ? { id: idConfig, typename: void 0 } : idConfig);
  }
  function isJsonValue(jsonObject) {
    return jsonObject != null && typeof jsonObject === "object" && jsonObject.type === "json";
  }
  var import_fast_json_stable_stringify2, __assign9, KNOWN_DIRECTIVES;
  var init_storeUtils2 = __esm({
    "node_modules/apollo-cache-inmemory/node_modules/apollo-utilities/lib/storeUtils.js"() {
      import_fast_json_stable_stringify2 = __toESM(require_fast_json_stable_stringify());
      __assign9 = function() {
        __assign9 = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
          }
          return t;
        };
        return __assign9.apply(this, arguments);
      };
      KNOWN_DIRECTIVES = [
        "connection",
        "include",
        "skip",
        "client",
        "rest",
        "export"
      ];
    }
  });

  // node_modules/apollo-cache-inmemory/node_modules/apollo-utilities/lib/directives.js
  function getDirectiveInfoFromField(field, variables) {
    if (field.directives && field.directives.length) {
      var directiveObj_1 = {};
      field.directives.forEach(function(directive) {
        directiveObj_1[directive.name.value] = argumentsObjectFromField(directive, variables);
      });
      return directiveObj_1;
    }
    return null;
  }
  function shouldInclude(selection, variables) {
    if (variables === void 0) {
      variables = {};
    }
    if (!selection.directives) {
      return true;
    }
    var res = true;
    selection.directives.forEach(function(directive) {
      if (directive.name.value !== "skip" && directive.name.value !== "include") {
        return;
      }
      var directiveArguments = directive.arguments || [];
      var directiveName = directive.name.value;
      if (directiveArguments.length !== 1) {
        throw new Error("Incorrect number of arguments for the @" + directiveName + " directive.");
      }
      var ifArgument = directiveArguments[0];
      if (!ifArgument.name || ifArgument.name.value !== "if") {
        throw new Error("Invalid argument for the @" + directiveName + " directive.");
      }
      var ifValue = directiveArguments[0].value;
      var evaledValue = false;
      if (!ifValue || ifValue.kind !== "BooleanValue") {
        if (ifValue.kind !== "Variable") {
          throw new Error("Argument for the @" + directiveName + " directive must be a variable or a boolean value.");
        } else {
          evaledValue = variables[ifValue.name.value];
          if (evaledValue === void 0) {
            throw new Error("Invalid variable referenced in @" + directiveName + " directive.");
          }
        }
      } else {
        evaledValue = ifValue.value;
      }
      if (directiveName === "skip") {
        evaledValue = !evaledValue;
      }
      if (!evaledValue) {
        res = false;
      }
    });
    return res;
  }
  var init_directives2 = __esm({
    "node_modules/apollo-cache-inmemory/node_modules/apollo-utilities/lib/directives.js"() {
      init_storeUtils2();
    }
  });

  // node_modules/apollo-cache-inmemory/node_modules/apollo-utilities/lib/fragments.js
  function getFragmentQueryDocument(document2, fragmentName) {
    var actualFragmentName = fragmentName;
    var fragments = [];
    document2.definitions.forEach(function(definition) {
      if (definition.kind === "OperationDefinition") {
        throw new Error("Found a " + definition.operation + " operation" + (definition.name ? " named '" + definition.name.value + "'" : "") + ". No operations are allowed when using a fragment as a query. Only fragments are allowed.");
      }
      if (definition.kind === "FragmentDefinition") {
        fragments.push(definition);
      }
    });
    if (typeof actualFragmentName === "undefined") {
      if (fragments.length !== 1) {
        throw new Error("Found " + fragments.length + " fragments. `fragmentName` must be provided when there is not exactly 1 fragment.");
      }
      actualFragmentName = fragments[0].name.value;
    }
    var query = __assign10({}, document2, { definitions: [
      {
        kind: "OperationDefinition",
        operation: "query",
        selectionSet: {
          kind: "SelectionSet",
          selections: [
            {
              kind: "FragmentSpread",
              name: {
                kind: "Name",
                value: actualFragmentName
              }
            }
          ]
        }
      }
    ].concat(document2.definitions) });
    return query;
  }
  var __assign10;
  var init_fragments2 = __esm({
    "node_modules/apollo-cache-inmemory/node_modules/apollo-utilities/lib/fragments.js"() {
      __assign10 = function() {
        __assign10 = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
          }
          return t;
        };
        return __assign10.apply(this, arguments);
      };
    }
  });

  // node_modules/apollo-cache-inmemory/node_modules/apollo-utilities/lib/util/assign.js
  function assign2(target) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      sources[_i - 1] = arguments[_i];
    }
    sources.forEach(function(source) {
      if (typeof source === "undefined" || source === null) {
        return;
      }
      Object.keys(source).forEach(function(key) {
        target[key] = source[key];
      });
    });
    return target;
  }
  var init_assign2 = __esm({
    "node_modules/apollo-cache-inmemory/node_modules/apollo-utilities/lib/util/assign.js"() {
    }
  });

  // node_modules/apollo-cache-inmemory/node_modules/apollo-utilities/lib/getFromAST.js
  function checkDocument2(doc) {
    if (doc.kind !== "Document") {
      throw new Error('Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql');
    }
    var operations = doc.definitions.filter(function(d) {
      return d.kind !== "FragmentDefinition";
    }).map(function(definition) {
      if (definition.kind !== "OperationDefinition") {
        throw new Error('Schema type definitions not allowed in queries. Found: "' + definition.kind + '"');
      }
      return definition;
    });
    if (operations.length > 1) {
      throw new Error("Ambiguous GraphQL document: contains " + operations.length + " operations");
    }
  }
  function getOperationDefinition2(doc) {
    checkDocument2(doc);
    return doc.definitions.filter(function(definition) {
      return definition.kind === "OperationDefinition";
    })[0];
  }
  function getFragmentDefinitions2(doc) {
    return doc.definitions.filter(function(definition) {
      return definition.kind === "FragmentDefinition";
    });
  }
  function getQueryDefinition2(doc) {
    var queryDef = getOperationDefinition2(doc);
    if (!queryDef || queryDef.operation !== "query") {
      throw new Error("Must contain a query definition.");
    }
    return queryDef;
  }
  function getMainDefinition(queryDoc) {
    checkDocument2(queryDoc);
    var fragmentDefinition;
    for (var _i = 0, _a4 = queryDoc.definitions; _i < _a4.length; _i++) {
      var definition = _a4[_i];
      if (definition.kind === "OperationDefinition") {
        var operation = definition.operation;
        if (operation === "query" || operation === "mutation" || operation === "subscription") {
          return definition;
        }
      }
      if (definition.kind === "FragmentDefinition" && !fragmentDefinition) {
        fragmentDefinition = definition;
      }
    }
    if (fragmentDefinition) {
      return fragmentDefinition;
    }
    throw new Error("Expected a parsed GraphQL query with a query, mutation, subscription, or a fragment.");
  }
  function createFragmentMap2(fragments) {
    if (fragments === void 0) {
      fragments = [];
    }
    var symTable = {};
    fragments.forEach(function(fragment) {
      symTable[fragment.name.value] = fragment;
    });
    return symTable;
  }
  function getDefaultValues2(definition) {
    if (definition && definition.variableDefinitions && definition.variableDefinitions.length) {
      var defaultValues = definition.variableDefinitions.filter(function(_a4) {
        var defaultValue = _a4.defaultValue;
        return defaultValue;
      }).map(function(_a4) {
        var variable = _a4.variable, defaultValue = _a4.defaultValue;
        var defaultValueObj = {};
        valueToObjectRepresentation2(defaultValueObj, variable.name, defaultValue);
        return defaultValueObj;
      });
      return assign2.apply(void 0, [{}].concat(defaultValues));
    }
    return {};
  }
  var init_getFromAST2 = __esm({
    "node_modules/apollo-cache-inmemory/node_modules/apollo-utilities/lib/getFromAST.js"() {
      init_assign2();
      init_storeUtils2();
    }
  });

  // node_modules/apollo-cache-inmemory/node_modules/apollo-utilities/lib/util/cloneDeep.js
  function cloneDeep2(value) {
    return cloneDeepHelper(value, /* @__PURE__ */ new Map());
  }
  function cloneDeepHelper(val, seen) {
    switch (toString.call(val)) {
      case "[object Array]": {
        if (seen.has(val))
          return seen.get(val);
        var copy_1 = val.slice(0);
        seen.set(val, copy_1);
        copy_1.forEach(function(child, i) {
          copy_1[i] = cloneDeepHelper(child, seen);
        });
        return copy_1;
      }
      case "[object Object]": {
        if (seen.has(val))
          return seen.get(val);
        var copy_2 = Object.create(Object.getPrototypeOf(val));
        seen.set(val, copy_2);
        Object.keys(val).forEach(function(key) {
          copy_2[key] = cloneDeepHelper(val[key], seen);
        });
        return copy_2;
      }
      default:
        return val;
    }
  }
  var toString;
  var init_cloneDeep2 = __esm({
    "node_modules/apollo-cache-inmemory/node_modules/apollo-utilities/lib/util/cloneDeep.js"() {
      toString = Object.prototype.toString;
    }
  });

  // node_modules/apollo-cache-inmemory/node_modules/apollo-utilities/lib/transform.js
  function addTypenameToSelectionSet(selectionSet, isRoot) {
    if (isRoot === void 0) {
      isRoot = false;
    }
    if (selectionSet.selections) {
      if (!isRoot) {
        var alreadyHasThisField = selectionSet.selections.some(function(selection) {
          return selection.kind === "Field" && selection.name.value === "__typename";
        });
        if (!alreadyHasThisField) {
          selectionSet.selections.push(TYPENAME_FIELD);
        }
      }
      selectionSet.selections.forEach(function(selection) {
        if (selection.kind === "Field") {
          if (selection.name.value.lastIndexOf("__", 0) !== 0 && selection.selectionSet) {
            addTypenameToSelectionSet(selection.selectionSet);
          }
        } else if (selection.kind === "InlineFragment") {
          if (selection.selectionSet) {
            addTypenameToSelectionSet(selection.selectionSet);
          }
        }
      });
    }
  }
  function addTypenameToDocument(doc) {
    checkDocument2(doc);
    var docClone = cloneDeep2(doc);
    docClone.definitions.forEach(function(definition) {
      var isRoot = definition.kind === "OperationDefinition";
      addTypenameToSelectionSet(definition.selectionSet, isRoot);
    });
    return docClone;
  }
  var TYPENAME_FIELD;
  var init_transform2 = __esm({
    "node_modules/apollo-cache-inmemory/node_modules/apollo-utilities/lib/transform.js"() {
      init_cloneDeep2();
      init_getFromAST2();
      TYPENAME_FIELD = {
        kind: "Field",
        name: {
          kind: "Name",
          value: "__typename"
        }
      };
    }
  });

  // node_modules/apollo-cache-inmemory/node_modules/apollo-utilities/lib/util/environment.js
  function getEnv2() {
    if (typeof process !== "undefined" && "production") {
      return "production";
    }
    return "development";
  }
  function isEnv2(env) {
    return getEnv2() === env;
  }
  function isProduction2() {
    return isEnv2("production") === true;
  }
  function isTest2() {
    return isEnv2("test") === true;
  }
  var init_environment2 = __esm({
    "node_modules/apollo-cache-inmemory/node_modules/apollo-utilities/lib/util/environment.js"() {
    }
  });

  // node_modules/apollo-cache-inmemory/node_modules/apollo-utilities/lib/util/errorHandling.js
  var init_errorHandling2 = __esm({
    "node_modules/apollo-cache-inmemory/node_modules/apollo-utilities/lib/util/errorHandling.js"() {
    }
  });

  // node_modules/apollo-cache-inmemory/node_modules/apollo-utilities/lib/util/isEqual.js
  function isEqual2(a, b) {
    if (a === b) {
      return true;
    }
    if (a instanceof Date && b instanceof Date) {
      return a.getTime() === b.getTime();
    }
    if (a != null && typeof a === "object" && b != null && typeof b === "object") {
      for (var key in a) {
        if (Object.prototype.hasOwnProperty.call(a, key)) {
          if (!Object.prototype.hasOwnProperty.call(b, key)) {
            return false;
          }
          if (!isEqual2(a[key], b[key])) {
            return false;
          }
        }
      }
      for (var key in b) {
        if (Object.prototype.hasOwnProperty.call(b, key) && !Object.prototype.hasOwnProperty.call(a, key)) {
          return false;
        }
      }
      return true;
    }
    return false;
  }
  var init_isEqual2 = __esm({
    "node_modules/apollo-cache-inmemory/node_modules/apollo-utilities/lib/util/isEqual.js"() {
    }
  });

  // node_modules/apollo-cache-inmemory/node_modules/apollo-utilities/lib/util/maybeDeepFreeze.js
  var init_maybeDeepFreeze2 = __esm({
    "node_modules/apollo-cache-inmemory/node_modules/apollo-utilities/lib/util/maybeDeepFreeze.js"() {
    }
  });

  // node_modules/apollo-cache-inmemory/node_modules/apollo-utilities/lib/util/warnOnce.js
  function warnOnceInDevelopment(msg, type) {
    if (type === void 0) {
      type = "warn";
    }
    if (isProduction2()) {
      return;
    }
    if (!haveWarned[msg]) {
      if (!isTest2()) {
        haveWarned[msg] = true;
      }
      switch (type) {
        case "error":
          console.error(msg);
          break;
        default:
          console.warn(msg);
      }
    }
  }
  var haveWarned;
  var init_warnOnce2 = __esm({
    "node_modules/apollo-cache-inmemory/node_modules/apollo-utilities/lib/util/warnOnce.js"() {
      init_environment2();
      haveWarned = /* @__PURE__ */ Object.create({});
    }
  });

  // node_modules/apollo-cache-inmemory/node_modules/apollo-utilities/lib/util/stripSymbols.js
  var init_stripSymbols2 = __esm({
    "node_modules/apollo-cache-inmemory/node_modules/apollo-utilities/lib/util/stripSymbols.js"() {
    }
  });

  // node_modules/apollo-cache-inmemory/node_modules/apollo-utilities/lib/index.js
  var init_lib8 = __esm({
    "node_modules/apollo-cache-inmemory/node_modules/apollo-utilities/lib/index.js"() {
      init_directives2();
      init_fragments2();
      init_getFromAST2();
      init_transform2();
      init_storeUtils2();
      init_assign2();
      init_cloneDeep2();
      init_environment2();
      init_errorHandling2();
      init_isEqual2();
      init_maybeDeepFreeze2();
      init_warnOnce2();
      init_stripSymbols2();
    }
  });

  // node_modules/apollo-cache-inmemory/node_modules/apollo-cache/lib/utils.js
  function queryFromPojo(obj) {
    var op = {
      kind: "OperationDefinition",
      operation: "query",
      name: {
        kind: "Name",
        value: "GeneratedClientQuery"
      },
      selectionSet: selectionSetFromObj(obj)
    };
    var out = {
      kind: "Document",
      definitions: [op]
    };
    return out;
  }
  function fragmentFromPojo(obj, typename) {
    var frag = {
      kind: "FragmentDefinition",
      typeCondition: {
        kind: "NamedType",
        name: {
          kind: "Name",
          value: typename || "__FakeType"
        }
      },
      name: {
        kind: "Name",
        value: "GeneratedClientQuery"
      },
      selectionSet: selectionSetFromObj(obj)
    };
    var out = {
      kind: "Document",
      definitions: [frag]
    };
    return out;
  }
  function selectionSetFromObj(obj) {
    if (typeof obj === "number" || typeof obj === "boolean" || typeof obj === "string" || typeof obj === "undefined" || obj === null) {
      return null;
    }
    if (Array.isArray(obj)) {
      return selectionSetFromObj(obj[0]);
    }
    var selections = [];
    Object.keys(obj).forEach(function(key) {
      var field = {
        kind: "Field",
        name: {
          kind: "Name",
          value: key
        }
      };
      var nestedSelSet = selectionSetFromObj(obj[key]);
      if (nestedSelSet) {
        field.selectionSet = nestedSelSet;
      }
      selections.push(field);
    });
    var selectionSet = {
      kind: "SelectionSet",
      selections
    };
    return selectionSet;
  }
  var justTypenameQuery;
  var init_utils = __esm({
    "node_modules/apollo-cache-inmemory/node_modules/apollo-cache/lib/utils.js"() {
      justTypenameQuery = {
        kind: "Document",
        definitions: [
          {
            kind: "OperationDefinition",
            operation: "query",
            name: null,
            variableDefinitions: null,
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  alias: null,
                  name: {
                    kind: "Name",
                    value: "__typename"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: null
                }
              ]
            }
          }
        ]
      };
    }
  });

  // node_modules/apollo-cache-inmemory/node_modules/apollo-cache/lib/cache.js
  var ApolloCache;
  var init_cache = __esm({
    "node_modules/apollo-cache-inmemory/node_modules/apollo-cache/lib/cache.js"() {
      init_lib8();
      init_utils();
      ApolloCache = function() {
        function ApolloCache2() {
        }
        ApolloCache2.prototype.transformDocument = function(document2) {
          return document2;
        };
        ApolloCache2.prototype.transformForLink = function(document2) {
          return document2;
        };
        ApolloCache2.prototype.readQuery = function(options, optimistic) {
          if (optimistic === void 0) {
            optimistic = false;
          }
          return this.read({
            query: options.query,
            variables: options.variables,
            optimistic
          });
        };
        ApolloCache2.prototype.readFragment = function(options, optimistic) {
          if (optimistic === void 0) {
            optimistic = false;
          }
          return this.read({
            query: getFragmentQueryDocument(options.fragment, options.fragmentName),
            variables: options.variables,
            rootId: options.id,
            optimistic
          });
        };
        ApolloCache2.prototype.writeQuery = function(options) {
          this.write({
            dataId: "ROOT_QUERY",
            result: options.data,
            query: options.query,
            variables: options.variables
          });
        };
        ApolloCache2.prototype.writeFragment = function(options) {
          this.write({
            dataId: options.id,
            result: options.data,
            variables: options.variables,
            query: getFragmentQueryDocument(options.fragment, options.fragmentName)
          });
        };
        ApolloCache2.prototype.writeData = function(_a4) {
          var id = _a4.id, data = _a4.data;
          if (typeof id !== "undefined") {
            var typenameResult = null;
            try {
              typenameResult = this.read({
                rootId: id,
                optimistic: false,
                query: justTypenameQuery
              });
            } catch (e) {
            }
            var __typename = typenameResult && typenameResult.__typename || "__ClientData";
            var dataToWrite = Object.assign({ __typename }, data);
            this.writeFragment({
              id,
              fragment: fragmentFromPojo(dataToWrite, __typename),
              data: dataToWrite
            });
          } else {
            this.writeQuery({ query: queryFromPojo(data), data });
          }
        };
        return ApolloCache2;
      }();
    }
  });

  // node_modules/apollo-cache-inmemory/node_modules/apollo-cache/lib/types/Cache.js
  var Cache;
  var init_Cache = __esm({
    "node_modules/apollo-cache-inmemory/node_modules/apollo-cache/lib/types/Cache.js"() {
      (function(Cache2) {
      })(Cache || (Cache = {}));
    }
  });

  // node_modules/apollo-cache-inmemory/node_modules/apollo-cache/lib/types/index.js
  var init_types2 = __esm({
    "node_modules/apollo-cache-inmemory/node_modules/apollo-cache/lib/types/index.js"() {
      init_Cache();
    }
  });

  // node_modules/apollo-cache-inmemory/node_modules/apollo-cache/lib/index.js
  var init_lib9 = __esm({
    "node_modules/apollo-cache-inmemory/node_modules/apollo-cache/lib/index.js"() {
      init_cache();
      init_types2();
    }
  });

  // node_modules/apollo-cache-inmemory/lib/fragmentMatcher.js
  var haveWarned2, HeuristicFragmentMatcher, IntrospectionFragmentMatcher;
  var init_fragmentMatcher = __esm({
    "node_modules/apollo-cache-inmemory/lib/fragmentMatcher.js"() {
      init_lib8();
      haveWarned2 = false;
      HeuristicFragmentMatcher = function() {
        function HeuristicFragmentMatcher2() {
        }
        HeuristicFragmentMatcher2.prototype.ensureReady = function() {
          return Promise.resolve();
        };
        HeuristicFragmentMatcher2.prototype.canBypassInit = function() {
          return true;
        };
        HeuristicFragmentMatcher2.prototype.match = function(idValue, typeCondition, context) {
          var obj = context.store.get(idValue.id);
          if (!obj && idValue.id === "ROOT_QUERY") {
            return true;
          }
          if (!obj) {
            return false;
          }
          if (!obj.__typename) {
            if (!haveWarned2) {
              console.warn("You're using fragments in your queries, but either don't have the addTypename:\n  true option set in Apollo Client, or you are trying to write a fragment to the store without the __typename.\n   Please turn on the addTypename option and include __typename when writing fragments so that Apollo Client\n   can accurately match fragments.");
              console.warn("Could not find __typename on Fragment ", typeCondition, obj);
              console.warn("DEPRECATION WARNING: using fragments without __typename is unsupported behavior and will be removed in future versions of Apollo client. You should fix this and set addTypename to true now.");
              if (!isTest2()) {
                haveWarned2 = true;
              }
            }
            return "heuristic";
          }
          if (obj.__typename === typeCondition) {
            return true;
          }
          warnOnceInDevelopment("You are using the simple (heuristic) fragment matcher, but your queries contain union or interface types. Apollo Client will not be able to accurately map fragments. To make this error go away, use the `IntrospectionFragmentMatcher` as described in the docs: https://www.apollographql.com/docs/react/recipes/fragment-matching.html", "error");
          return "heuristic";
        };
        return HeuristicFragmentMatcher2;
      }();
      IntrospectionFragmentMatcher = function() {
        function IntrospectionFragmentMatcher2(options) {
          if (options && options.introspectionQueryResultData) {
            this.possibleTypesMap = this.parseIntrospectionResult(options.introspectionQueryResultData);
            this.isReady = true;
          } else {
            this.isReady = false;
          }
          this.match = this.match.bind(this);
        }
        IntrospectionFragmentMatcher2.prototype.match = function(idValue, typeCondition, context) {
          if (!this.isReady) {
            throw new Error("FragmentMatcher.match() was called before FragmentMatcher.init()");
          }
          var obj = context.store.get(idValue.id);
          if (!obj) {
            return false;
          }
          if (!obj.__typename) {
            throw new Error("Cannot match fragment because __typename property is missing: " + JSON.stringify(obj));
          }
          if (obj.__typename === typeCondition) {
            return true;
          }
          var implementingTypes = this.possibleTypesMap[typeCondition];
          if (implementingTypes && implementingTypes.indexOf(obj.__typename) > -1) {
            return true;
          }
          return false;
        };
        IntrospectionFragmentMatcher2.prototype.parseIntrospectionResult = function(introspectionResultData) {
          var typeMap = {};
          introspectionResultData.__schema.types.forEach(function(type) {
            if (type.kind === "UNION" || type.kind === "INTERFACE") {
              typeMap[type.name] = type.possibleTypes.map(function(implementingType) {
                return implementingType.name;
              });
            }
          });
          return typeMap;
        };
        return IntrospectionFragmentMatcher2;
      }();
    }
  });

  // node_modules/optimism/lib/cache.js
  var require_cache = __commonJS({
    "node_modules/optimism/lib/cache.js"(exports) {
      "use strict";
      function Cache2(options) {
        this.map = /* @__PURE__ */ new Map();
        this.newest = null;
        this.oldest = null;
        this.max = options && options.max;
        this.dispose = options && options.dispose;
      }
      exports.Cache = Cache2;
      var Cp = Cache2.prototype;
      Cp.has = function(key) {
        return this.map.has(key);
      };
      Cp.get = function(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      };
      function getEntry(cache, key) {
        var entry = cache.map.get(key);
        if (entry && entry !== cache.newest) {
          var older = entry.older;
          var newer = entry.newer;
          if (newer) {
            newer.older = older;
          }
          if (older) {
            older.newer = newer;
          }
          entry.older = cache.newest;
          entry.older.newer = entry;
          entry.newer = null;
          cache.newest = entry;
          if (entry === cache.oldest) {
            cache.oldest = newer;
          }
        }
        return entry;
      }
      Cp.set = function(key, value) {
        var entry = getEntry(this, key);
        if (entry) {
          return entry.value = value;
        }
        entry = {
          key,
          value,
          newer: null,
          older: this.newest
        };
        if (this.newest) {
          this.newest.newer = entry;
        }
        this.newest = entry;
        this.oldest = this.oldest || entry;
        this.map.set(key, entry);
        if (typeof this.max === "number") {
          while (this.oldest && this.map.size > this.max) {
            this.delete(this.oldest.key);
          }
        }
        return entry.value;
      };
      Cp.delete = function(key) {
        var entry = this.map.get(key);
        if (entry) {
          if (entry === this.newest) {
            this.newest = entry.older;
          }
          if (entry === this.oldest) {
            this.oldest = entry.newer;
          }
          if (entry.newer) {
            entry.newer.older = entry.older;
          }
          if (entry.older) {
            entry.older.newer = entry.newer;
          }
          this.map.delete(key);
          if (typeof this.dispose === "function") {
            this.dispose(key, entry.value);
          }
          return true;
        }
        return false;
      };
    }
  });

  // node_modules/immutable-tuple/dist/tuple.js
  var require_tuple = __commonJS({
    "node_modules/immutable-tuple/dist/tuple.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var UniversalWeakMap = function UniversalWeakMap2() {
        this._weakMap = null;
        this._strongMap = null;
        this.data = null;
      };
      UniversalWeakMap.prototype.get = function get8(key) {
        var map = this._getMap(key, false);
        if (map) {
          return map.get(key);
        }
      };
      UniversalWeakMap.prototype.set = function set3(key, value) {
        this._getMap(key, true).set(key, value);
        return value;
      };
      UniversalWeakMap.prototype._getMap = function _getMap(key, canCreate) {
        if (!canCreate) {
          return isObjRef(key) ? this._weakMap : this._strongMap;
        }
        if (isObjRef(key)) {
          return this._weakMap || (this._weakMap = /* @__PURE__ */ new WeakMap());
        }
        return this._strongMap || (this._strongMap = /* @__PURE__ */ new Map());
      };
      function isObjRef(value) {
        switch (typeof value) {
          case "object":
            if (value === null) {
              return false;
            }
          case "function":
            return true;
          default:
            return false;
        }
      }
      var useSymbol = typeof Symbol === "function";
      var brand = useSymbol ? Symbol.for("immutable-tuple") : "@@__IMMUTABLE_TUPLE__@@";
      var globalKey = useSymbol ? Symbol.for("immutable-tuple-root") : "@@__IMMUTABLE_TUPLE_ROOT__@@";
      function def(obj, name, value, enumerable) {
        Object.defineProperty(obj, name, {
          value,
          enumerable: !!enumerable,
          writable: false,
          configurable: false
        });
        return value;
      }
      var freeze = Object.freeze || function(obj) {
        return obj;
      };
      function forEachArrayMethod(fn) {
        function call(name, mustConvertThisToArray) {
          var desc = Object.getOwnPropertyDescriptor(Array.prototype, name);
          fn(name, desc, !!mustConvertThisToArray);
        }
        call("every");
        call("filter");
        call("find");
        call("findIndex");
        call("forEach");
        call("includes");
        call("indexOf");
        call("join");
        call("lastIndexOf");
        call("map");
        call("reduce");
        call("reduceRight");
        call("slice");
        call("some");
        call("toLocaleString");
        call("toString");
        call("reverse", true);
        call("sort", true);
        call(useSymbol && Symbol.iterator || "@@iterator");
      }
      var root = Array[globalKey] || def(Array, globalKey, new UniversalWeakMap(), false);
      function lookup() {
        var arguments$1 = arguments;
        var node = root;
        var argc = arguments.length;
        for (var i = 0; i < argc; ++i) {
          var item = arguments$1[i];
          node = node.get(item) || node.set(item, new UniversalWeakMap());
        }
        return node.data || (node.data = /* @__PURE__ */ Object.create(null));
      }
      function tuple() {
        var arguments$1 = arguments;
        var node = lookup.apply(null, arguments);
        if (node.tuple) {
          return node.tuple;
        }
        var t = Object.create(tuple.prototype);
        var argc = arguments.length;
        for (var i = 0; i < argc; ++i) {
          t[i] = arguments$1[i];
        }
        def(t, "length", argc, false);
        return freeze(node.tuple = t);
      }
      def(tuple.prototype, brand, true, false);
      function isTuple(that) {
        return !!(that && that[brand] === true);
      }
      tuple.isTuple = isTuple;
      function toArray(tuple2) {
        var array = [];
        var i = tuple2.length;
        while (i--) {
          array[i] = tuple2[i];
        }
        return array;
      }
      forEachArrayMethod(function(name, desc, mustConvertThisToArray) {
        var method = desc && desc.value;
        if (typeof method === "function") {
          desc.value = function() {
            var args = [], len = arguments.length;
            while (len--)
              args[len] = arguments[len];
            var result = method.apply(
              mustConvertThisToArray ? toArray(this) : this,
              args
            );
            return Array.isArray(result) ? tuple.apply(void 0, result) : result;
          };
          Object.defineProperty(tuple.prototype, name, desc);
        }
      });
      var ref = Array.prototype;
      var concat5 = ref.concat;
      tuple.prototype.concat = function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        return tuple.apply(void 0, concat5.apply(toArray(this), args.map(
          function(item) {
            return isTuple(item) ? toArray(item) : item;
          }
        )));
      };
      exports.default = tuple;
      exports.tuple = tuple;
      exports.lookup = lookup;
    }
  });

  // node_modules/optimism/lib/local.js
  var require_local = __commonJS({
    "node_modules/optimism/lib/local.js"(exports, module) {
      "use strict";
      var fakeNullFiber = new function Fiber2() {
      }();
      var localKey = "_optimism_local";
      function getCurrentFiber() {
        return fakeNullFiber;
      }
      if (typeof module === "object") {
        try {
          Fiber = module["eriuqer".split("").reverse().join("")]("fibers");
          getCurrentFiber = function() {
            return Fiber.current || fakeNullFiber;
          };
        } catch (e) {
        }
      }
      var Fiber;
      exports.get = function() {
        var fiber = getCurrentFiber();
        return fiber[localKey] || (fiber[localKey] = /* @__PURE__ */ Object.create(null));
      };
    }
  });

  // node_modules/optimism/lib/entry.js
  var require_entry = __commonJS({
    "node_modules/optimism/lib/entry.js"(exports) {
      "use strict";
      var getLocal = require_local().get;
      var UNKNOWN_VALUE = /* @__PURE__ */ Object.create(null);
      var emptySetPool = [];
      var entryPool = [];
      exports.POOL_TARGET_SIZE = 100;
      function assert(condition, optionalMessage) {
        if (!condition) {
          throw new Error(optionalMessage || "assertion failure");
        }
      }
      function Entry(fn, key, args) {
        this.parents = /* @__PURE__ */ new Set();
        this.childValues = /* @__PURE__ */ new Map();
        this.dirtyChildren = null;
        reset(this, fn, key, args);
        ++Entry.count;
      }
      Entry.count = 0;
      function reset(entry, fn, key, args) {
        entry.fn = fn;
        entry.key = key;
        entry.args = args;
        entry.value = UNKNOWN_VALUE;
        entry.dirty = true;
        entry.subscribe = null;
        entry.unsubscribe = null;
        entry.recomputing = false;
        entry.reportOrphan = null;
      }
      Entry.acquire = function(fn, key, args) {
        var entry = entryPool.pop();
        if (entry) {
          reset(entry, fn, key, args);
          return entry;
        }
        return new Entry(fn, key, args);
      };
      function release(entry) {
        assert(entry.parents.size === 0);
        assert(entry.childValues.size === 0);
        assert(entry.dirtyChildren === null);
        if (entryPool.length < exports.POOL_TARGET_SIZE) {
          entryPool.push(entry);
        }
      }
      exports.Entry = Entry;
      var Ep = Entry.prototype;
      Ep.recompute = function recompute() {
        if (!rememberParent(this) && maybeReportOrphan(this)) {
          return;
        }
        return recomputeIfDirty(this);
      };
      function maybeReportOrphan(entry) {
        var report = entry.reportOrphan;
        return typeof report === "function" && entry.parents.size === 0 && report(entry) === true;
      }
      Ep.setDirty = function setDirty() {
        if (this.dirty)
          return;
        this.dirty = true;
        this.value = UNKNOWN_VALUE;
        reportDirty(this);
        unsubscribe(this);
      };
      Ep.dispose = function dispose() {
        var entry = this;
        forgetChildren(entry).forEach(maybeReportOrphan);
        unsubscribe(entry);
        entry.parents.forEach(function(parent) {
          parent.setDirty();
          forgetChild(parent, entry);
        });
        release(entry);
      };
      function setClean(entry) {
        entry.dirty = false;
        if (mightBeDirty(entry)) {
          return;
        }
        reportClean(entry);
      }
      function reportDirty(entry) {
        entry.parents.forEach(function(parent) {
          reportDirtyChild(parent, entry);
        });
      }
      function reportClean(entry) {
        entry.parents.forEach(function(parent) {
          reportCleanChild(parent, entry);
        });
      }
      function mightBeDirty(entry) {
        return entry.dirty || entry.dirtyChildren && entry.dirtyChildren.size;
      }
      function reportDirtyChild(entry, child) {
        assert(entry.childValues.has(child));
        assert(mightBeDirty(child));
        if (!entry.dirtyChildren) {
          entry.dirtyChildren = emptySetPool.pop() || /* @__PURE__ */ new Set();
        } else if (entry.dirtyChildren.has(child)) {
          return;
        }
        entry.dirtyChildren.add(child);
        reportDirty(entry);
      }
      function reportCleanChild(entry, child) {
        var cv = entry.childValues;
        assert(cv.has(child));
        assert(!mightBeDirty(child));
        var childValue = cv.get(child);
        if (childValue === UNKNOWN_VALUE) {
          cv.set(child, child.value);
        } else if (childValue !== child.value) {
          entry.setDirty();
        }
        removeDirtyChild(entry, child);
        if (mightBeDirty(entry)) {
          return;
        }
        reportClean(entry);
      }
      function removeDirtyChild(entry, child) {
        var dc = entry.dirtyChildren;
        if (dc) {
          dc.delete(child);
          if (dc.size === 0) {
            if (emptySetPool.length < exports.POOL_TARGET_SIZE) {
              emptySetPool.push(dc);
            }
            entry.dirtyChildren = null;
          }
        }
      }
      function rememberParent(entry) {
        var local = getLocal();
        var parent = local.currentParentEntry;
        if (parent) {
          entry.parents.add(parent);
          if (!parent.childValues.has(entry)) {
            parent.childValues.set(entry, UNKNOWN_VALUE);
          }
          if (mightBeDirty(entry)) {
            reportDirtyChild(parent, entry);
          } else {
            reportCleanChild(parent, entry);
          }
          return parent;
        }
      }
      function recomputeIfDirty(entry) {
        if (entry.dirty) {
          return reallyRecompute(entry);
        }
        if (mightBeDirty(entry)) {
          entry.dirtyChildren.forEach(function(child) {
            assert(entry.childValues.has(child));
            try {
              recomputeIfDirty(child);
            } catch (e) {
              entry.setDirty();
            }
          });
          if (entry.dirty) {
            return reallyRecompute(entry);
          }
        }
        assert(entry.value !== UNKNOWN_VALUE);
        return entry.value;
      }
      function reallyRecompute(entry) {
        assert(!entry.recomputing, "already recomputing");
        entry.recomputing = true;
        var originalChildren = forgetChildren(entry);
        var local = getLocal();
        var parent = local.currentParentEntry;
        local.currentParentEntry = entry;
        var threw = true;
        try {
          entry.value = entry.fn.apply(null, entry.args);
          threw = false;
        } finally {
          entry.recomputing = false;
          assert(local.currentParentEntry === entry);
          local.currentParentEntry = parent;
          if (threw || !subscribe(entry)) {
            entry.setDirty();
          } else {
            setClean(entry);
          }
        }
        originalChildren.forEach(maybeReportOrphan);
        return entry.value;
      }
      var reusableEmptyArray = [];
      function forgetChildren(entry) {
        var children = reusableEmptyArray;
        if (entry.childValues.size > 0) {
          children = [];
          entry.childValues.forEach(function(value, child) {
            forgetChild(entry, child);
            children.push(child);
          });
        }
        assert(entry.dirtyChildren === null);
        return children;
      }
      function forgetChild(entry, child) {
        child.parents.delete(entry);
        entry.childValues.delete(child);
        removeDirtyChild(entry, child);
      }
      function subscribe(entry) {
        if (typeof entry.subscribe === "function") {
          try {
            unsubscribe(entry);
            entry.unsubscribe = entry.subscribe.apply(null, entry.args);
          } catch (e) {
            entry.setDirty();
            return false;
          }
        }
        return true;
      }
      function unsubscribe(entry) {
        var unsub = entry.unsubscribe;
        if (typeof unsub === "function") {
          entry.unsubscribe = null;
          unsub();
        }
      }
    }
  });

  // node_modules/optimism/lib/index.js
  var require_lib3 = __commonJS({
    "node_modules/optimism/lib/index.js"(exports) {
      "use strict";
      var Cache2 = require_cache().Cache;
      var tuple = require_tuple().tuple;
      var Entry = require_entry().Entry;
      var getLocal = require_local().get;
      function defaultMakeCacheKey() {
        return tuple.apply(null, arguments);
      }
      exports.defaultMakeCacheKey = defaultMakeCacheKey;
      function normalizeOptions(options) {
        options = options || /* @__PURE__ */ Object.create(null);
        if (typeof options.makeCacheKey !== "function") {
          options.makeCacheKey = defaultMakeCacheKey;
        }
        if (typeof options.max !== "number") {
          options.max = Math.pow(2, 16);
        }
        return options;
      }
      function wrap2(fn, options) {
        options = normalizeOptions(options);
        var disposable = !!options.disposable;
        var cache = new Cache2({
          max: options.max,
          dispose: function(key, entry) {
            entry.dispose();
          }
        });
        function reportOrphan(entry) {
          if (disposable) {
            cache.delete(entry.key);
            return true;
          }
        }
        function optimistic() {
          if (disposable && !getLocal().currentParentEntry) {
            return;
          }
          var key = options.makeCacheKey.apply(null, arguments);
          if (!key) {
            return fn.apply(null, arguments);
          }
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          var entry = cache.get(key);
          if (entry) {
            entry.args = args;
          } else {
            cache.set(key, entry = Entry.acquire(fn, key, args));
            entry.subscribe = options.subscribe;
            if (disposable) {
              entry.reportOrphan = reportOrphan;
            }
          }
          var value = entry.recompute();
          if (!disposable) {
            return value;
          }
        }
        optimistic.dirty = function() {
          var key = options.makeCacheKey.apply(null, arguments);
          if (!key) {
            return;
          }
          if (!cache.has(key)) {
            return;
          }
          cache.get(key).setDirty();
        };
        return optimistic;
      }
      exports.wrap = wrap2;
    }
  });

  // node_modules/apollo-cache-inmemory/lib/optimism.js
  var wrap, CacheKeyNode;
  var init_optimism = __esm({
    "node_modules/apollo-cache-inmemory/lib/optimism.js"() {
      wrap = require_lib3().wrap;
      CacheKeyNode = function() {
        function CacheKeyNode2() {
          this.children = null;
          this.key = null;
        }
        CacheKeyNode2.prototype.lookup = function() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          return this.lookupArray(args);
        };
        CacheKeyNode2.prototype.lookupArray = function(array) {
          var node = this;
          array.forEach(function(value) {
            node = node.getOrCreate(value);
          });
          return node.key || (node.key = /* @__PURE__ */ Object.create(null));
        };
        CacheKeyNode2.prototype.getOrCreate = function(value) {
          var map = this.children || (this.children = /* @__PURE__ */ new Map());
          var node = map.get(value);
          if (!node) {
            map.set(value, node = new CacheKeyNode2());
          }
          return node;
        };
        return CacheKeyNode2;
      }();
    }
  });

  // node_modules/apollo-cache-inmemory/lib/depTrackingCache.js
  function defaultNormalizedCacheFactory(seed) {
    return new DepTrackingCache(seed);
  }
  var hasOwn, DepTrackingCache;
  var init_depTrackingCache = __esm({
    "node_modules/apollo-cache-inmemory/lib/depTrackingCache.js"() {
      init_optimism();
      hasOwn = Object.prototype.hasOwnProperty;
      DepTrackingCache = function() {
        function DepTrackingCache2(data) {
          if (data === void 0) {
            data = /* @__PURE__ */ Object.create(null);
          }
          var _this = this;
          this.data = data;
          this.depend = wrap(function(dataId) {
            return _this.data[dataId];
          }, {
            disposable: true,
            makeCacheKey: function(dataId) {
              return dataId;
            }
          });
        }
        DepTrackingCache2.prototype.toObject = function() {
          return this.data;
        };
        DepTrackingCache2.prototype.get = function(dataId) {
          this.depend(dataId);
          return this.data[dataId];
        };
        DepTrackingCache2.prototype.set = function(dataId, value) {
          var oldValue = this.data[dataId];
          if (value !== oldValue) {
            this.data[dataId] = value;
            this.depend.dirty(dataId);
          }
        };
        DepTrackingCache2.prototype.delete = function(dataId) {
          if (hasOwn.call(this.data, dataId)) {
            delete this.data[dataId];
            this.depend.dirty(dataId);
          }
        };
        DepTrackingCache2.prototype.clear = function() {
          this.replace(null);
        };
        DepTrackingCache2.prototype.replace = function(newData) {
          var _this = this;
          if (newData) {
            Object.keys(newData).forEach(function(dataId) {
              _this.set(dataId, newData[dataId]);
            });
            Object.keys(this.data).forEach(function(dataId) {
              if (!hasOwn.call(newData, dataId)) {
                _this.delete(dataId);
              }
            });
          } else {
            Object.keys(this.data).forEach(function(dataId) {
              _this.delete(dataId);
            });
          }
        };
        return DepTrackingCache2;
      }();
    }
  });

  // node_modules/apollo-cache-inmemory/lib/queryKeyMaker.js
  function safeSortedKeys(object) {
    var keys = Object.keys(object);
    var keyCount = keys.length;
    var knownKeys = typeof object.kind === "string" && queryKeyMap[object.kind];
    var target = 0;
    for (var source = target; source < keyCount; ++source) {
      var key = keys[source];
      var value = object[key];
      var isObjectOrArray = value !== null && typeof value === "object";
      if (!isObjectOrArray || !knownKeys || knownKeys[key] === true) {
        keys[target++] = key;
      }
    }
    keys.length = target;
    return keys.sort();
  }
  var import_visitor, __assign11, CIRCULAR, objToStr, QueryKeyMaker, PerQueryKeyMaker, queryKeyMap;
  var init_queryKeyMaker = __esm({
    "node_modules/apollo-cache-inmemory/lib/queryKeyMaker.js"() {
      import_visitor = __toESM(require_visitor());
      __assign11 = function() {
        __assign11 = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
          }
          return t;
        };
        return __assign11.apply(this, arguments);
      };
      CIRCULAR = /* @__PURE__ */ Object.create(null);
      objToStr = Object.prototype.toString;
      QueryKeyMaker = function() {
        function QueryKeyMaker2(cacheKeyRoot) {
          this.cacheKeyRoot = cacheKeyRoot;
          this.perQueryKeyMakers = /* @__PURE__ */ new Map();
        }
        QueryKeyMaker2.prototype.forQuery = function(document2) {
          if (!this.perQueryKeyMakers.has(document2)) {
            this.perQueryKeyMakers.set(document2, new PerQueryKeyMaker(this.cacheKeyRoot, document2));
          }
          return this.perQueryKeyMakers.get(document2);
        };
        return QueryKeyMaker2;
      }();
      PerQueryKeyMaker = function() {
        function PerQueryKeyMaker2(cacheKeyRoot, query) {
          this.cacheKeyRoot = cacheKeyRoot;
          this.query = query;
          this.cache = /* @__PURE__ */ new Map();
          this.lookupArray = this.cacheMethod(this.lookupArray);
          this.lookupObject = this.cacheMethod(this.lookupObject);
          this.lookupFragmentSpread = this.cacheMethod(this.lookupFragmentSpread);
        }
        PerQueryKeyMaker2.prototype.cacheMethod = function(method) {
          var _this = this;
          return function(value) {
            if (_this.cache.has(value)) {
              var cached = _this.cache.get(value);
              if (cached === CIRCULAR) {
                throw new Error("QueryKeyMaker cannot handle circular query structures");
              }
              return cached;
            }
            _this.cache.set(value, CIRCULAR);
            try {
              var result = method.call(_this, value);
              _this.cache.set(value, result);
              return result;
            } catch (e) {
              _this.cache.delete(value);
              throw e;
            }
          };
        };
        PerQueryKeyMaker2.prototype.lookupQuery = function(document2) {
          return this.lookupObject(document2);
        };
        PerQueryKeyMaker2.prototype.lookupSelectionSet = function(selectionSet) {
          return this.lookupObject(selectionSet);
        };
        PerQueryKeyMaker2.prototype.lookupFragmentSpread = function(fragmentSpread) {
          var name = fragmentSpread.name.value;
          var fragment = null;
          this.query.definitions.some(function(definition) {
            if (definition.kind === "FragmentDefinition" && definition.name.value === name) {
              fragment = definition;
              return true;
            }
            return false;
          });
          return this.lookupObject(__assign11({}, fragmentSpread, { fragment }));
        };
        PerQueryKeyMaker2.prototype.lookupAny = function(value) {
          if (Array.isArray(value)) {
            return this.lookupArray(value);
          }
          if (typeof value === "object" && value !== null) {
            if (value.kind === "FragmentSpread") {
              return this.lookupFragmentSpread(value);
            }
            return this.lookupObject(value);
          }
          return value;
        };
        PerQueryKeyMaker2.prototype.lookupArray = function(array) {
          var elements = array.map(this.lookupAny, this);
          return this.cacheKeyRoot.lookup(objToStr.call(array), this.cacheKeyRoot.lookupArray(elements));
        };
        PerQueryKeyMaker2.prototype.lookupObject = function(object) {
          var _this = this;
          var keys = safeSortedKeys(object);
          var values2 = keys.map(function(key) {
            return _this.lookupAny(object[key]);
          });
          return this.cacheKeyRoot.lookup(objToStr.call(object), this.cacheKeyRoot.lookupArray(keys), this.cacheKeyRoot.lookupArray(values2));
        };
        return PerQueryKeyMaker2;
      }();
      queryKeyMap = /* @__PURE__ */ Object.create(null);
      Object.keys(import_visitor.QueryDocumentKeys).forEach(function(parentKind) {
        var childKeys = queryKeyMap[parentKind] = /* @__PURE__ */ Object.create(null);
        import_visitor.QueryDocumentKeys[parentKind].forEach(function(childKey) {
          childKeys[childKey] = true;
        });
        if (parentKind === "FragmentSpread") {
          childKeys["fragment"] = true;
        }
      });
    }
  });

  // node_modules/apollo-cache-inmemory/lib/readFromStore.js
  function assertSelectionSetForIdValue(field, value) {
    if (!field.selectionSet && isIdValue(value)) {
      throw new Error("Missing selection set for object of type " + value.typename + " returned for query field " + field.name.value);
    }
  }
  function defaultFragmentMatcher() {
    return true;
  }
  function readStoreResolver(object, typename, fieldName, args, context, _a4) {
    var resultKey = _a4.resultKey, directives = _a4.directives;
    var storeKeyName = fieldName;
    if (args || directives) {
      storeKeyName = getStoreKeyName(storeKeyName, args, directives);
    }
    var fieldValue = void 0;
    if (object) {
      fieldValue = object[storeKeyName];
      if (typeof fieldValue === "undefined" && context.cacheRedirects && typeof typename === "string") {
        var type = context.cacheRedirects[typename];
        if (type) {
          var resolver = type[fieldName];
          if (resolver) {
            fieldValue = resolver(object, args, {
              getCacheKey: function(storeObj) {
                return toIdValue({
                  id: context.dataIdFromObject(storeObj),
                  typename: storeObj.__typename
                });
              }
            });
          }
        }
      }
    }
    if (typeof fieldValue === "undefined") {
      return {
        result: fieldValue,
        missing: [{
          object,
          fieldName: storeKeyName,
          tolerable: false
        }]
      };
    }
    if (isJsonValue(fieldValue)) {
      fieldValue = fieldValue.json;
    }
    return {
      result: fieldValue
    };
  }
  function merge3(target, sources) {
    var pastCopies = [];
    sources.forEach(function(source) {
      mergeHelper(target, source, pastCopies);
    });
    return target;
  }
  function mergeHelper(target, source, pastCopies) {
    if (source !== null && typeof source === "object") {
      if (Object.isExtensible && !Object.isExtensible(target)) {
        target = shallowCopyForMerge(target, pastCopies);
      }
      Object.keys(source).forEach(function(sourceKey) {
        var sourceValue = source[sourceKey];
        if (hasOwn2.call(target, sourceKey)) {
          var targetValue = target[sourceKey];
          if (sourceValue !== targetValue) {
            target[sourceKey] = mergeHelper(shallowCopyForMerge(targetValue, pastCopies), sourceValue, pastCopies);
          }
        } else {
          target[sourceKey] = sourceValue;
        }
      });
    }
    return target;
  }
  function shallowCopyForMerge(value, pastCopies) {
    if (value !== null && typeof value === "object" && pastCopies.indexOf(value) < 0) {
      if (Array.isArray(value)) {
        value = value.slice(0);
      } else {
        value = __assign12({}, value);
      }
      pastCopies.push(value);
    }
    return value;
  }
  var __assign12, StoreReader, hasOwn2;
  var init_readFromStore = __esm({
    "node_modules/apollo-cache-inmemory/lib/readFromStore.js"() {
      init_lib8();
      init_optimism();
      init_depTrackingCache();
      init_queryKeyMaker();
      __assign12 = function() {
        __assign12 = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
          }
          return t;
        };
        return __assign12.apply(this, arguments);
      };
      StoreReader = function() {
        function StoreReader2(cacheKeyRoot) {
          if (cacheKeyRoot === void 0) {
            cacheKeyRoot = new CacheKeyNode();
          }
          var _this = this;
          this.cacheKeyRoot = cacheKeyRoot;
          var reader = this;
          var executeStoreQuery = reader.executeStoreQuery, executeSelectionSet = reader.executeSelectionSet;
          reader.keyMaker = new QueryKeyMaker(cacheKeyRoot);
          this.executeStoreQuery = wrap(function(options) {
            return executeStoreQuery.call(_this, options);
          }, {
            makeCacheKey: function(_a4) {
              var query = _a4.query, rootValue = _a4.rootValue, contextValue = _a4.contextValue, variableValues = _a4.variableValues, fragmentMatcher = _a4.fragmentMatcher;
              if (contextValue.store instanceof DepTrackingCache) {
                return reader.cacheKeyRoot.lookup(reader.keyMaker.forQuery(query).lookupQuery(query), contextValue.store, fragmentMatcher, JSON.stringify(variableValues), rootValue.id);
              }
              return;
            }
          });
          this.executeSelectionSet = wrap(function(options) {
            return executeSelectionSet.call(_this, options);
          }, {
            makeCacheKey: function(_a4) {
              var selectionSet = _a4.selectionSet, rootValue = _a4.rootValue, execContext = _a4.execContext;
              if (execContext.contextValue.store instanceof DepTrackingCache) {
                return reader.cacheKeyRoot.lookup(reader.keyMaker.forQuery(execContext.query).lookupSelectionSet(selectionSet), execContext.contextValue.store, execContext.fragmentMatcher, JSON.stringify(execContext.variableValues), rootValue.id);
              }
              return;
            }
          });
        }
        StoreReader2.prototype.readQueryFromStore = function(options) {
          var optsPatch = { returnPartialData: false };
          return this.diffQueryAgainstStore(__assign12({}, options, optsPatch)).result;
        };
        StoreReader2.prototype.diffQueryAgainstStore = function(_a4) {
          var store = _a4.store, query = _a4.query, variables = _a4.variables, previousResult = _a4.previousResult, _b = _a4.returnPartialData, returnPartialData = _b === void 0 ? true : _b, _c = _a4.rootId, rootId = _c === void 0 ? "ROOT_QUERY" : _c, fragmentMatcherFunction = _a4.fragmentMatcherFunction, config = _a4.config;
          var queryDefinition = getQueryDefinition2(query);
          variables = assign2({}, getDefaultValues2(queryDefinition), variables);
          var context = {
            store,
            dataIdFromObject: config && config.dataIdFromObject || null,
            cacheRedirects: config && config.cacheRedirects || {}
          };
          var execResult = this.executeStoreQuery({
            query,
            rootValue: {
              type: "id",
              id: rootId,
              generated: true,
              typename: "Query"
            },
            contextValue: context,
            variableValues: variables,
            fragmentMatcher: fragmentMatcherFunction
          });
          var hasMissingFields = execResult.missing && execResult.missing.length > 0;
          if (hasMissingFields && !returnPartialData) {
            execResult.missing.forEach(function(info) {
              if (info.tolerable)
                return;
              throw new Error("Can't find field " + info.fieldName + " on object " + JSON.stringify(info.object, null, 2) + ".");
            });
          }
          if (previousResult) {
            if (isEqual2(previousResult, execResult.result)) {
              execResult.result = previousResult;
            }
          }
          return {
            result: execResult.result,
            complete: !hasMissingFields
          };
        };
        StoreReader2.prototype.executeStoreQuery = function(_a4) {
          var query = _a4.query, rootValue = _a4.rootValue, contextValue = _a4.contextValue, variableValues = _a4.variableValues, _b = _a4.fragmentMatcher, fragmentMatcher = _b === void 0 ? defaultFragmentMatcher : _b;
          var mainDefinition = getMainDefinition(query);
          var fragments = getFragmentDefinitions2(query);
          var fragmentMap = createFragmentMap2(fragments);
          var execContext = {
            query,
            fragmentMap,
            contextValue,
            variableValues,
            fragmentMatcher
          };
          return this.executeSelectionSet({
            selectionSet: mainDefinition.selectionSet,
            rootValue,
            execContext
          });
        };
        StoreReader2.prototype.executeSelectionSet = function(_a4) {
          var _this = this;
          var selectionSet = _a4.selectionSet, rootValue = _a4.rootValue, execContext = _a4.execContext;
          var fragmentMap = execContext.fragmentMap, contextValue = execContext.contextValue, variables = execContext.variableValues;
          var finalResult = {
            result: {}
          };
          var objectsToMerge = [];
          var object = contextValue.store.get(rootValue.id);
          var typename = object && object.__typename || rootValue.id === "ROOT_QUERY" && "Query" || void 0;
          function handleMissing(result) {
            var _a5;
            if (result.missing) {
              finalResult.missing = finalResult.missing || [];
              (_a5 = finalResult.missing).push.apply(_a5, result.missing);
            }
            return result.result;
          }
          selectionSet.selections.forEach(function(selection) {
            var _a5;
            if (!shouldInclude(selection, variables)) {
              return;
            }
            if (isField(selection)) {
              var fieldResult = handleMissing(_this.executeField(object, typename, selection, execContext));
              if (typeof fieldResult !== "undefined") {
                objectsToMerge.push((_a5 = {}, _a5[resultKeyNameFromField(selection)] = fieldResult, _a5));
              }
            } else {
              var fragment = void 0;
              if (isInlineFragment(selection)) {
                fragment = selection;
              } else {
                fragment = fragmentMap[selection.name.value];
                if (!fragment) {
                  throw new Error("No fragment named " + selection.name.value);
                }
              }
              var typeCondition = fragment.typeCondition.name.value;
              var match = execContext.fragmentMatcher(rootValue, typeCondition, contextValue);
              if (match) {
                var fragmentExecResult = _this.executeSelectionSet({
                  selectionSet: fragment.selectionSet,
                  rootValue,
                  execContext
                });
                if (match === "heuristic" && fragmentExecResult.missing) {
                  fragmentExecResult = __assign12({}, fragmentExecResult, { missing: fragmentExecResult.missing.map(function(info) {
                    return __assign12({}, info, { tolerable: true });
                  }) });
                }
                objectsToMerge.push(handleMissing(fragmentExecResult));
              }
            }
          });
          merge3(finalResult.result, objectsToMerge);
          return finalResult;
        };
        StoreReader2.prototype.executeField = function(object, typename, field, execContext) {
          var variables = execContext.variableValues, contextValue = execContext.contextValue;
          var fieldName = field.name.value;
          var args = argumentsObjectFromField(field, variables);
          var info = {
            resultKey: resultKeyNameFromField(field),
            directives: getDirectiveInfoFromField(field, variables)
          };
          var readStoreResult = readStoreResolver(object, typename, fieldName, args, contextValue, info);
          if (Array.isArray(readStoreResult.result)) {
            return this.combineExecResults(readStoreResult, this.executeSubSelectedArray(field, readStoreResult.result, execContext));
          }
          if (!field.selectionSet) {
            assertSelectionSetForIdValue(field, readStoreResult.result);
            return readStoreResult;
          }
          if (readStoreResult.result == null) {
            return readStoreResult;
          }
          return this.combineExecResults(readStoreResult, this.executeSelectionSet({
            selectionSet: field.selectionSet,
            rootValue: readStoreResult.result,
            execContext
          }));
        };
        StoreReader2.prototype.combineExecResults = function() {
          var execResults = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            execResults[_i] = arguments[_i];
          }
          var missing = null;
          execResults.forEach(function(execResult) {
            if (execResult.missing) {
              missing = missing || [];
              missing.push.apply(missing, execResult.missing);
            }
          });
          return {
            result: execResults.pop().result,
            missing
          };
        };
        StoreReader2.prototype.executeSubSelectedArray = function(field, result, execContext) {
          var _this = this;
          var missing = null;
          function handleMissing(childResult) {
            if (childResult.missing) {
              missing = missing || [];
              missing.push.apply(missing, childResult.missing);
            }
            return childResult.result;
          }
          result = result.map(function(item) {
            if (item === null) {
              return null;
            }
            if (Array.isArray(item)) {
              return handleMissing(_this.executeSubSelectedArray(field, item, execContext));
            }
            if (field.selectionSet) {
              return handleMissing(_this.executeSelectionSet({
                selectionSet: field.selectionSet,
                rootValue: item,
                execContext
              }));
            }
            assertSelectionSetForIdValue(field, item);
            return item;
          });
          return { result, missing };
        };
        return StoreReader2;
      }();
      hasOwn2 = Object.prototype.hasOwnProperty;
    }
  });

  // node_modules/apollo-cache-inmemory/lib/objectCache.js
  var ObjectCache;
  var init_objectCache = __esm({
    "node_modules/apollo-cache-inmemory/lib/objectCache.js"() {
      ObjectCache = function() {
        function ObjectCache2(data) {
          if (data === void 0) {
            data = /* @__PURE__ */ Object.create(null);
          }
          this.data = data;
        }
        ObjectCache2.prototype.toObject = function() {
          return this.data;
        };
        ObjectCache2.prototype.get = function(dataId) {
          return this.data[dataId];
        };
        ObjectCache2.prototype.set = function(dataId, value) {
          this.data[dataId] = value;
        };
        ObjectCache2.prototype.delete = function(dataId) {
          this.data[dataId] = void 0;
        };
        ObjectCache2.prototype.clear = function() {
          this.data = /* @__PURE__ */ Object.create(null);
        };
        ObjectCache2.prototype.replace = function(newData) {
          this.data = newData || /* @__PURE__ */ Object.create(null);
        };
        return ObjectCache2;
      }();
    }
  });

  // node_modules/apollo-cache-inmemory/lib/writeToStore.js
  function enhanceErrorWithDocument(error, document2) {
    var enhancedError = new WriteError("Error writing result to store for query:\n " + (0, import_printer6.print)(document2));
    enhancedError.message += "\n" + error.message;
    enhancedError.stack = error.stack;
    return enhancedError;
  }
  function isGeneratedId(id) {
    return id[0] === "$";
  }
  function mergeWithGenerated(generatedKey, realKey, cache) {
    if (generatedKey === realKey) {
      return false;
    }
    var generated = cache.get(generatedKey);
    var real = cache.get(realKey);
    var madeChanges = false;
    Object.keys(generated).forEach(function(key) {
      var value = generated[key];
      var realValue = real[key];
      if (isIdValue(value) && isGeneratedId(value.id) && isIdValue(realValue) && !isEqual2(value, realValue) && mergeWithGenerated(value.id, realValue.id, cache)) {
        madeChanges = true;
      }
    });
    cache.delete(generatedKey);
    var newRealValue = __assign13({}, generated, real);
    if (isEqual2(newRealValue, real)) {
      return madeChanges;
    }
    cache.set(realKey, newRealValue);
    return true;
  }
  function isDataProcessed(dataId, field, processedData) {
    if (!processedData) {
      return false;
    }
    if (processedData[dataId]) {
      if (processedData[dataId].indexOf(field) >= 0) {
        return true;
      } else {
        processedData[dataId].push(field);
      }
    } else {
      processedData[dataId] = [field];
    }
    return false;
  }
  var import_printer6, __extends8, __assign13, WriteError, StoreWriter;
  var init_writeToStore = __esm({
    "node_modules/apollo-cache-inmemory/lib/writeToStore.js"() {
      import_printer6 = __toESM(require_printer());
      init_lib8();
      init_objectCache();
      init_depTrackingCache();
      __extends8 = function() {
        var extendStatics4 = function(d, b) {
          extendStatics4 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
            d2.__proto__ = b2;
          } || function(d2, b2) {
            for (var p in b2)
              if (b2.hasOwnProperty(p))
                d2[p] = b2[p];
          };
          return extendStatics4(d, b);
        };
        return function(d, b) {
          extendStatics4(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      __assign13 = function() {
        __assign13 = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
          }
          return t;
        };
        return __assign13.apply(this, arguments);
      };
      WriteError = function(_super) {
        __extends8(WriteError2, _super);
        function WriteError2() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.type = "WriteError";
          return _this;
        }
        return WriteError2;
      }(Error);
      StoreWriter = function() {
        function StoreWriter2() {
        }
        StoreWriter2.prototype.writeQueryToStore = function(_a4) {
          var query = _a4.query, result = _a4.result, _b = _a4.store, store = _b === void 0 ? defaultNormalizedCacheFactory() : _b, variables = _a4.variables, dataIdFromObject = _a4.dataIdFromObject, fragmentMatcherFunction = _a4.fragmentMatcherFunction;
          return this.writeResultToStore({
            dataId: "ROOT_QUERY",
            result,
            document: query,
            store,
            variables,
            dataIdFromObject,
            fragmentMatcherFunction
          });
        };
        StoreWriter2.prototype.writeResultToStore = function(_a4) {
          var dataId = _a4.dataId, result = _a4.result, document2 = _a4.document, _b = _a4.store, store = _b === void 0 ? defaultNormalizedCacheFactory() : _b, variables = _a4.variables, dataIdFromObject = _a4.dataIdFromObject, fragmentMatcherFunction = _a4.fragmentMatcherFunction;
          var operationDefinition = getOperationDefinition2(document2);
          try {
            return this.writeSelectionSetToStore({
              result,
              dataId,
              selectionSet: operationDefinition.selectionSet,
              context: {
                store,
                processedData: {},
                variables: assign2({}, getDefaultValues2(operationDefinition), variables),
                dataIdFromObject,
                fragmentMap: createFragmentMap2(getFragmentDefinitions2(document2)),
                fragmentMatcherFunction
              }
            });
          } catch (e) {
            throw enhanceErrorWithDocument(e, document2);
          }
        };
        StoreWriter2.prototype.writeSelectionSetToStore = function(_a4) {
          var _this = this;
          var result = _a4.result, dataId = _a4.dataId, selectionSet = _a4.selectionSet, context = _a4.context;
          var variables = context.variables, store = context.store, fragmentMap = context.fragmentMap;
          selectionSet.selections.forEach(function(selection) {
            if (!shouldInclude(selection, variables)) {
              return;
            }
            if (isField(selection)) {
              var resultFieldKey = resultKeyNameFromField(selection);
              var value = result[resultFieldKey];
              if (typeof value !== "undefined") {
                _this.writeFieldToStore({
                  dataId,
                  value,
                  field: selection,
                  context
                });
              } else {
                var isDefered = selection.directives && selection.directives.length && selection.directives.some(function(directive) {
                  return directive.name && directive.name.value === "defer";
                });
                if (!isDefered && context.fragmentMatcherFunction) {
                  if (!isProduction2()) {
                    console.warn("Missing field " + resultFieldKey + " in " + JSON.stringify(result, null, 2).substring(0, 100));
                  }
                }
              }
            } else {
              var fragment = void 0;
              if (isInlineFragment(selection)) {
                fragment = selection;
              } else {
                fragment = (fragmentMap || {})[selection.name.value];
                if (!fragment) {
                  throw new Error("No fragment named " + selection.name.value + ".");
                }
              }
              var matches = true;
              if (context.fragmentMatcherFunction && fragment.typeCondition) {
                var idValue = toIdValue({ id: "self", typename: void 0 });
                var fakeContext = {
                  store: new ObjectCache({ self: result }),
                  cacheRedirects: {}
                };
                var match = context.fragmentMatcherFunction(idValue, fragment.typeCondition.name.value, fakeContext);
                if (!isProduction2() && match === "heuristic") {
                  console.error("WARNING: heuristic fragment matching going on!");
                }
                matches = !!match;
              }
              if (matches) {
                _this.writeSelectionSetToStore({
                  result,
                  selectionSet: fragment.selectionSet,
                  dataId,
                  context
                });
              }
            }
          });
          return store;
        };
        StoreWriter2.prototype.writeFieldToStore = function(_a4) {
          var field = _a4.field, value = _a4.value, dataId = _a4.dataId, context = _a4.context;
          var _b;
          var variables = context.variables, dataIdFromObject = context.dataIdFromObject, store = context.store;
          var storeValue;
          var storeObject;
          var storeFieldName = storeKeyNameFromField(field, variables);
          if (!field.selectionSet || value === null) {
            storeValue = value != null && typeof value === "object" ? { type: "json", json: value } : value;
          } else if (Array.isArray(value)) {
            var generatedId = dataId + "." + storeFieldName;
            storeValue = this.processArrayValue(value, generatedId, field.selectionSet, context);
          } else {
            var valueDataId = dataId + "." + storeFieldName;
            var generated = true;
            if (!isGeneratedId(valueDataId)) {
              valueDataId = "$" + valueDataId;
            }
            if (dataIdFromObject) {
              var semanticId = dataIdFromObject(value);
              if (semanticId && isGeneratedId(semanticId)) {
                throw new Error('IDs returned by dataIdFromObject cannot begin with the "$" character.');
              }
              if (semanticId || typeof semanticId === "number" && semanticId === 0) {
                valueDataId = semanticId;
                generated = false;
              }
            }
            if (!isDataProcessed(valueDataId, field, context.processedData)) {
              this.writeSelectionSetToStore({
                dataId: valueDataId,
                result: value,
                selectionSet: field.selectionSet,
                context
              });
            }
            var typename = value.__typename;
            storeValue = toIdValue({ id: valueDataId, typename }, generated);
            storeObject = store.get(dataId);
            var escapedId = storeObject && storeObject[storeFieldName];
            if (escapedId !== storeValue && isIdValue(escapedId)) {
              var hadTypename = escapedId.typename !== void 0;
              var hasTypename = typename !== void 0;
              var typenameChanged = hadTypename && hasTypename && escapedId.typename !== typename;
              if (generated && !escapedId.generated && !typenameChanged) {
                throw new Error("Store error: the application attempted to write an object with no provided id" + (" but the store already contains an id of " + escapedId.id + " for this object. The selectionSet") + " that was trying to be written is:\n" + (0, import_printer6.print)(field));
              }
              if (hadTypename && !hasTypename) {
                throw new Error("Store error: the application attempted to write an object with no provided typename" + (" but the store already contains an object with typename of " + escapedId.typename + " for the object of id " + escapedId.id + ". The selectionSet") + " that was trying to be written is:\n" + (0, import_printer6.print)(field));
              }
              if (escapedId.generated) {
                if (typenameChanged) {
                  if (!generated) {
                    store.delete(escapedId.id);
                  }
                } else {
                  mergeWithGenerated(escapedId.id, storeValue.id, store);
                }
              }
            }
          }
          storeObject = store.get(dataId);
          if (!storeObject || !isEqual2(storeValue, storeObject[storeFieldName])) {
            store.set(dataId, __assign13({}, storeObject, (_b = {}, _b[storeFieldName] = storeValue, _b)));
          }
        };
        StoreWriter2.prototype.processArrayValue = function(value, generatedId, selectionSet, context) {
          var _this = this;
          return value.map(function(item, index) {
            if (item === null) {
              return null;
            }
            var itemDataId = generatedId + "." + index;
            if (Array.isArray(item)) {
              return _this.processArrayValue(item, itemDataId, selectionSet, context);
            }
            var generated = true;
            if (context.dataIdFromObject) {
              var semanticId = context.dataIdFromObject(item);
              if (semanticId) {
                itemDataId = semanticId;
                generated = false;
              }
            }
            if (!isDataProcessed(itemDataId, selectionSet, context.processedData)) {
              _this.writeSelectionSetToStore({
                dataId: itemDataId,
                result: item,
                selectionSet,
                context
              });
            }
            return toIdValue({ id: itemDataId, typename: item.__typename }, generated);
          });
        };
        return StoreWriter2;
      }();
    }
  });

  // node_modules/apollo-cache-inmemory/lib/recordingCache.js
  function record(startingState, transaction) {
    var recordingCache = new RecordingCache(startingState);
    return recordingCache.record(transaction);
  }
  var __assign14, RecordingCache;
  var init_recordingCache = __esm({
    "node_modules/apollo-cache-inmemory/lib/recordingCache.js"() {
      __assign14 = function() {
        __assign14 = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
          }
          return t;
        };
        return __assign14.apply(this, arguments);
      };
      RecordingCache = function() {
        function RecordingCache2(data) {
          if (data === void 0) {
            data = {};
          }
          this.data = data;
          this.recordedData = {};
        }
        RecordingCache2.prototype.record = function(transaction) {
          transaction(this);
          var recordedData = this.recordedData;
          this.recordedData = {};
          return recordedData;
        };
        RecordingCache2.prototype.toObject = function() {
          return __assign14({}, this.data, this.recordedData);
        };
        RecordingCache2.prototype.get = function(dataId) {
          if (this.recordedData.hasOwnProperty(dataId)) {
            return this.recordedData[dataId];
          }
          return this.data[dataId];
        };
        RecordingCache2.prototype.set = function(dataId, value) {
          if (this.get(dataId) !== value) {
            this.recordedData[dataId] = value;
          }
        };
        RecordingCache2.prototype.delete = function(dataId) {
          this.recordedData[dataId] = void 0;
        };
        RecordingCache2.prototype.clear = function() {
          var _this = this;
          Object.keys(this.data).forEach(function(dataId) {
            return _this.delete(dataId);
          });
          this.recordedData = {};
        };
        RecordingCache2.prototype.replace = function(newData) {
          this.clear();
          this.recordedData = __assign14({}, newData);
        };
        return RecordingCache2;
      }();
    }
  });

  // node_modules/apollo-cache-inmemory/lib/inMemoryCache.js
  function defaultDataIdFromObject(result) {
    if (result.__typename) {
      if (result.id !== void 0) {
        return result.__typename + ":" + result.id;
      }
      if (result._id !== void 0) {
        return result.__typename + ":" + result._id;
      }
    }
    return null;
  }
  var __extends9, __assign15, defaultConfig, InMemoryCache;
  var init_inMemoryCache = __esm({
    "node_modules/apollo-cache-inmemory/lib/inMemoryCache.js"() {
      init_fixPolyfills();
      init_lib9();
      init_lib8();
      init_fragmentMatcher();
      init_readFromStore();
      init_writeToStore();
      init_depTrackingCache();
      init_optimism();
      init_recordingCache();
      __extends9 = function() {
        var extendStatics4 = function(d, b) {
          extendStatics4 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
            d2.__proto__ = b2;
          } || function(d2, b2) {
            for (var p in b2)
              if (b2.hasOwnProperty(p))
                d2[p] = b2[p];
          };
          return extendStatics4(d, b);
        };
        return function(d, b) {
          extendStatics4(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      __assign15 = function() {
        __assign15 = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
          }
          return t;
        };
        return __assign15.apply(this, arguments);
      };
      defaultConfig = {
        fragmentMatcher: new HeuristicFragmentMatcher(),
        dataIdFromObject: defaultDataIdFromObject,
        addTypename: true
      };
      InMemoryCache = function(_super) {
        __extends9(InMemoryCache2, _super);
        function InMemoryCache2(config) {
          if (config === void 0) {
            config = {};
          }
          var _this = _super.call(this) || this;
          _this.optimistic = [];
          _this.watches = /* @__PURE__ */ new Set();
          _this.typenameDocumentCache = /* @__PURE__ */ new Map();
          _this.cacheKeyRoot = new CacheKeyNode();
          _this.silenceBroadcast = false;
          _this.config = __assign15({}, defaultConfig, config);
          if (_this.config.customResolvers) {
            console.warn("customResolvers have been renamed to cacheRedirects. Please update your config as we will be deprecating customResolvers in the next major version.");
            _this.config.cacheRedirects = _this.config.customResolvers;
          }
          if (_this.config.cacheResolvers) {
            console.warn("cacheResolvers have been renamed to cacheRedirects. Please update your config as we will be deprecating cacheResolvers in the next major version.");
            _this.config.cacheRedirects = _this.config.cacheResolvers;
          }
          _this.addTypename = _this.config.addTypename;
          _this.data = defaultNormalizedCacheFactory();
          _this.storeReader = new StoreReader(_this.cacheKeyRoot);
          _this.storeWriter = new StoreWriter();
          var cache = _this;
          var maybeBroadcastWatch = cache.maybeBroadcastWatch;
          _this.maybeBroadcastWatch = wrap(function(c) {
            return maybeBroadcastWatch.call(_this, c);
          }, {
            makeCacheKey: function(c) {
              if (c.optimistic && cache.optimistic.length > 0) {
                return;
              }
              if (c.previousResult) {
                return;
              }
              if (cache.data instanceof DepTrackingCache) {
                return cache.cacheKeyRoot.lookup(c.query, JSON.stringify(c.variables));
              }
            }
          });
          return _this;
        }
        InMemoryCache2.prototype.restore = function(data) {
          if (data)
            this.data.replace(data);
          return this;
        };
        InMemoryCache2.prototype.extract = function(optimistic) {
          if (optimistic === void 0) {
            optimistic = false;
          }
          if (optimistic && this.optimistic.length > 0) {
            var patches = this.optimistic.map(function(opt) {
              return opt.data;
            });
            return Object.assign.apply(Object, [{}, this.data.toObject()].concat(patches));
          }
          return this.data.toObject();
        };
        InMemoryCache2.prototype.read = function(query) {
          if (query.rootId && this.data.get(query.rootId) === void 0) {
            return null;
          }
          var store = query.optimistic && this.optimistic.length ? defaultNormalizedCacheFactory(this.extract(true)) : this.data;
          return this.storeReader.readQueryFromStore({
            store,
            query: this.transformDocument(query.query),
            variables: query.variables,
            rootId: query.rootId,
            fragmentMatcherFunction: this.config.fragmentMatcher.match,
            previousResult: query.previousResult,
            config: this.config
          });
        };
        InMemoryCache2.prototype.write = function(write) {
          this.storeWriter.writeResultToStore({
            dataId: write.dataId,
            result: write.result,
            variables: write.variables,
            document: this.transformDocument(write.query),
            store: this.data,
            dataIdFromObject: this.config.dataIdFromObject,
            fragmentMatcherFunction: this.config.fragmentMatcher.match
          });
          this.broadcastWatches();
        };
        InMemoryCache2.prototype.diff = function(query) {
          var store = query.optimistic && this.optimistic.length ? defaultNormalizedCacheFactory(this.extract(true)) : this.data;
          return this.storeReader.diffQueryAgainstStore({
            store,
            query: this.transformDocument(query.query),
            variables: query.variables,
            returnPartialData: query.returnPartialData,
            previousResult: query.previousResult,
            fragmentMatcherFunction: this.config.fragmentMatcher.match,
            config: this.config
          });
        };
        InMemoryCache2.prototype.watch = function(watch) {
          var _this = this;
          this.watches.add(watch);
          return function() {
            _this.watches.delete(watch);
          };
        };
        InMemoryCache2.prototype.evict = function(query) {
          throw new Error("eviction is not implemented on InMemory Cache");
        };
        InMemoryCache2.prototype.reset = function() {
          this.data.clear();
          this.broadcastWatches();
          return Promise.resolve();
        };
        InMemoryCache2.prototype.removeOptimistic = function(id) {
          var _this = this;
          var toPerform = this.optimistic.filter(function(item) {
            return item.id !== id;
          });
          this.optimistic = [];
          toPerform.forEach(function(change) {
            _this.recordOptimisticTransaction(change.transaction, change.id);
          });
          this.broadcastWatches();
        };
        InMemoryCache2.prototype.performTransaction = function(transaction) {
          var alreadySilenced = this.silenceBroadcast;
          this.silenceBroadcast = true;
          transaction(this);
          if (!alreadySilenced) {
            this.silenceBroadcast = false;
          }
          this.broadcastWatches();
        };
        InMemoryCache2.prototype.recordOptimisticTransaction = function(transaction, id) {
          var _this = this;
          this.silenceBroadcast = true;
          var patch = record(this.extract(true), function(recordingCache) {
            var dataCache = _this.data;
            _this.data = recordingCache;
            _this.performTransaction(transaction);
            _this.data = dataCache;
          });
          this.optimistic.push({
            id,
            transaction,
            data: patch
          });
          this.silenceBroadcast = false;
          this.broadcastWatches();
        };
        InMemoryCache2.prototype.transformDocument = function(document2) {
          if (this.addTypename) {
            var result = this.typenameDocumentCache.get(document2);
            if (!result) {
              result = addTypenameToDocument(document2);
              this.typenameDocumentCache.set(document2, result);
              this.typenameDocumentCache.set(result, result);
            }
            return result;
          }
          return document2;
        };
        InMemoryCache2.prototype.readQuery = function(options, optimistic) {
          if (optimistic === void 0) {
            optimistic = false;
          }
          return this.read({
            query: options.query,
            variables: options.variables,
            optimistic
          });
        };
        InMemoryCache2.prototype.readFragment = function(options, optimistic) {
          if (optimistic === void 0) {
            optimistic = false;
          }
          return this.read({
            query: this.transformDocument(getFragmentQueryDocument(options.fragment, options.fragmentName)),
            variables: options.variables,
            rootId: options.id,
            optimistic
          });
        };
        InMemoryCache2.prototype.writeQuery = function(options) {
          this.write({
            dataId: "ROOT_QUERY",
            result: options.data,
            query: this.transformDocument(options.query),
            variables: options.variables
          });
        };
        InMemoryCache2.prototype.writeFragment = function(options) {
          this.write({
            dataId: options.id,
            result: options.data,
            query: this.transformDocument(getFragmentQueryDocument(options.fragment, options.fragmentName)),
            variables: options.variables
          });
        };
        InMemoryCache2.prototype.broadcastWatches = function() {
          var _this = this;
          if (!this.silenceBroadcast) {
            var optimistic_1 = this.optimistic.length > 0;
            this.watches.forEach(function(c) {
              _this.maybeBroadcastWatch(c);
              if (optimistic_1) {
                _this.maybeBroadcastWatch.dirty(c);
              }
            });
          }
        };
        InMemoryCache2.prototype.maybeBroadcastWatch = function(c) {
          c.callback(this.diff({
            query: c.query,
            variables: c.variables,
            previousResult: c.previousResult && c.previousResult(),
            optimistic: c.optimistic
          }));
        };
        return InMemoryCache2;
      }(ApolloCache);
    }
  });

  // node_modules/apollo-cache-inmemory/lib/index.js
  var init_lib10 = __esm({
    "node_modules/apollo-cache-inmemory/lib/index.js"() {
      init_inMemoryCache();
      init_readFromStore();
      init_writeToStore();
      init_fragmentMatcher();
      init_objectCache();
      init_recordingCache();
    }
  });

  // node_modules/apollo-link-error/node_modules/tslib/tslib.es6.js
  function __extends10(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }
  var extendStatics, __assign16;
  var init_tslib_es6 = __esm({
    "node_modules/apollo-link-error/node_modules/tslib/tslib.es6.js"() {
      extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      __assign16 = function() {
        __assign16 = Object.assign || function __assign20(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
          }
          return t;
        };
        return __assign16.apply(this, arguments);
      };
    }
  });

  // node_modules/apollo-link-error/node_modules/zen-observable-ts/lib/bundle.esm.js
  var import_zen_observable2, Observable3, bundle_esm_default;
  var init_bundle_esm = __esm({
    "node_modules/apollo-link-error/node_modules/zen-observable-ts/lib/bundle.esm.js"() {
      import_zen_observable2 = __toESM(require_zen_observable());
      Observable3 = import_zen_observable2.default;
      bundle_esm_default = Observable3;
    }
  });

  // node_modules/ts-invariant/node_modules/tslib/tslib.es6.js
  function __extends11(d, b) {
    extendStatics2(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }
  var extendStatics2;
  var init_tslib_es62 = __esm({
    "node_modules/ts-invariant/node_modules/tslib/tslib.es6.js"() {
      extendStatics2 = function(d, b) {
        extendStatics2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics2(d, b);
      };
    }
  });

  // node_modules/ts-invariant/lib/invariant.esm.js
  function invariant(condition, message) {
    if (!condition) {
      throw new InvariantError(message);
    }
  }
  function wrapConsoleMethod(method) {
    return function() {
      return console[method].apply(console, arguments);
    };
  }
  var genericMessage, _a, setPrototypeOf, InvariantError, processStub;
  var init_invariant_esm = __esm({
    "node_modules/ts-invariant/lib/invariant.esm.js"() {
      init_tslib_es62();
      genericMessage = "Invariant Violation";
      _a = Object.setPrototypeOf;
      setPrototypeOf = _a === void 0 ? function(obj, proto) {
        obj.__proto__ = proto;
        return obj;
      } : _a;
      InvariantError = /** @class */
      function(_super) {
        __extends11(InvariantError2, _super);
        function InvariantError2(message) {
          if (message === void 0) {
            message = genericMessage;
          }
          var _this = _super.call(this, typeof message === "number" ? genericMessage + ": " + message + " (see https://github.com/apollographql/invariant-packages)" : message) || this;
          _this.framesToPop = 1;
          _this.name = genericMessage;
          setPrototypeOf(_this, InvariantError2.prototype);
          return _this;
        }
        return InvariantError2;
      }(Error);
      (function(invariant2) {
        invariant2.warn = wrapConsoleMethod("warn");
        invariant2.error = wrapConsoleMethod("error");
      })(invariant || (invariant = {}));
      processStub = { env: {} };
      if (typeof process === "object") {
        processStub = process;
      } else
        try {
          Function("stub", "process = stub")(processStub);
        } catch (atLeastWeTried) {
        }
    }
  });

  // node_modules/apollo-link-error/node_modules/apollo-utilities/node_modules/tslib/tslib.es6.js
  var init_tslib_es63 = __esm({
    "node_modules/apollo-link-error/node_modules/apollo-utilities/node_modules/tslib/tslib.es6.js"() {
    }
  });

  // node_modules/apollo-link-error/node_modules/@wry/equality/lib/equality.esm.js
  var _a2, toString2, hasOwnProperty2;
  var init_equality_esm = __esm({
    "node_modules/apollo-link-error/node_modules/@wry/equality/lib/equality.esm.js"() {
      _a2 = Object.prototype;
      toString2 = _a2.toString;
      hasOwnProperty2 = _a2.hasOwnProperty;
    }
  });

  // node_modules/apollo-link-error/node_modules/apollo-utilities/lib/bundle.esm.js
  function getOperationName2(doc) {
    return doc.definitions.filter(function(definition) {
      return definition.kind === "OperationDefinition" && definition.name;
    }).map(function(x) {
      return x.name.value;
    })[0] || null;
  }
  var import_visitor2, import_fast_json_stable_stringify3, canUseWeakMap;
  var init_bundle_esm2 = __esm({
    "node_modules/apollo-link-error/node_modules/apollo-utilities/lib/bundle.esm.js"() {
      import_visitor2 = __toESM(require_visitor());
      init_invariant_esm();
      init_tslib_es63();
      import_fast_json_stable_stringify3 = __toESM(require_fast_json_stable_stringify());
      init_equality_esm();
      canUseWeakMap = typeof WeakMap === "function" && !(typeof navigator === "object" && navigator.product === "ReactNative");
    }
  });

  // node_modules/apollo-link-error/node_modules/apollo-link/lib/bundle.esm.js
  function validateOperation2(operation) {
    var OPERATION_FIELDS = [
      "query",
      "operationName",
      "variables",
      "extensions",
      "context"
    ];
    for (var _i = 0, _a4 = Object.keys(operation); _i < _a4.length; _i++) {
      var key = _a4[_i];
      if (OPERATION_FIELDS.indexOf(key) < 0) {
        throw true ? new InvariantError(2) : new InvariantError("illegal argument: " + key);
      }
    }
    return operation;
  }
  function isTerminating2(link) {
    return link.request.length <= 1;
  }
  function transformOperation2(operation) {
    var transformedOperation = {
      variables: operation.variables || {},
      extensions: operation.extensions || {},
      operationName: operation.operationName,
      query: operation.query
    };
    if (!transformedOperation.operationName) {
      transformedOperation.operationName = typeof transformedOperation.query !== "string" ? getOperationName2(transformedOperation.query) : "";
    }
    return transformedOperation;
  }
  function createOperation2(starting, operation) {
    var context = __assign16({}, starting);
    var setContext = function(next) {
      if (typeof next === "function") {
        context = __assign16({}, context, next(context));
      } else {
        context = __assign16({}, context, next);
      }
    };
    var getContext = function() {
      return __assign16({}, context);
    };
    Object.defineProperty(operation, "setContext", {
      enumerable: false,
      value: setContext
    });
    Object.defineProperty(operation, "getContext", {
      enumerable: false,
      value: getContext
    });
    Object.defineProperty(operation, "toKey", {
      enumerable: false,
      value: function() {
        return getKey2(operation);
      }
    });
    return operation;
  }
  function getKey2(operation) {
    var query = operation.query, variables = operation.variables, operationName = operation.operationName;
    return JSON.stringify([operationName, query, variables]);
  }
  function passthrough2(op, forward) {
    return forward ? forward(op) : bundle_esm_default.of();
  }
  function toLink2(handler) {
    return typeof handler === "function" ? new ApolloLink2(handler) : handler;
  }
  function empty2() {
    return new ApolloLink2(function() {
      return bundle_esm_default.of();
    });
  }
  function from2(links) {
    if (links.length === 0)
      return empty2();
    return links.map(toLink2).reduce(function(x, y) {
      return x.concat(y);
    });
  }
  function split2(test2, left, right) {
    var leftLink = toLink2(left);
    var rightLink = toLink2(right || new ApolloLink2(passthrough2));
    if (isTerminating2(leftLink) && isTerminating2(rightLink)) {
      return new ApolloLink2(function(operation) {
        return test2(operation) ? leftLink.request(operation) || bundle_esm_default.of() : rightLink.request(operation) || bundle_esm_default.of();
      });
    } else {
      return new ApolloLink2(function(operation, forward) {
        return test2(operation) ? leftLink.request(operation, forward) || bundle_esm_default.of() : rightLink.request(operation, forward) || bundle_esm_default.of();
      });
    }
  }
  function execute2(link, operation) {
    return link.request(createOperation2(operation.context, transformOperation2(validateOperation2(operation)))) || bundle_esm_default.of();
  }
  var LinkError2, concat2, ApolloLink2;
  var init_bundle_esm3 = __esm({
    "node_modules/apollo-link-error/node_modules/apollo-link/lib/bundle.esm.js"() {
      init_bundle_esm();
      init_bundle_esm();
      init_invariant_esm();
      init_tslib_es6();
      init_bundle_esm2();
      LinkError2 = function(_super) {
        __extends10(LinkError4, _super);
        function LinkError4(message, link) {
          var _this = _super.call(this, message) || this;
          _this.link = link;
          return _this;
        }
        return LinkError4;
      }(Error);
      concat2 = function(first, second) {
        var firstLink = toLink2(first);
        if (isTerminating2(firstLink)) {
          return firstLink;
        }
        var nextLink = toLink2(second);
        if (isTerminating2(nextLink)) {
          return new ApolloLink2(function(operation) {
            return firstLink.request(operation, function(op) {
              return nextLink.request(op) || bundle_esm_default.of();
            }) || bundle_esm_default.of();
          });
        } else {
          return new ApolloLink2(function(operation, forward) {
            return firstLink.request(operation, function(op) {
              return nextLink.request(op, forward) || bundle_esm_default.of();
            }) || bundle_esm_default.of();
          });
        }
      };
      ApolloLink2 = function() {
        function ApolloLink4(request) {
          if (request)
            this.request = request;
        }
        ApolloLink4.prototype.split = function(test2, left, right) {
          return this.concat(split2(test2, left, right || new ApolloLink4(passthrough2)));
        };
        ApolloLink4.prototype.concat = function(next) {
          return concat2(this, next);
        };
        ApolloLink4.prototype.request = function(operation, forward) {
          throw true ? new InvariantError(1) : new InvariantError("request is not implemented");
        };
        ApolloLink4.empty = empty2;
        ApolloLink4.from = from2;
        ApolloLink4.split = split2;
        ApolloLink4.execute = execute2;
        return ApolloLink4;
      }();
    }
  });

  // node_modules/apollo-link-error/lib/bundle.esm.js
  function onError(errorHandler) {
    return new ApolloLink2(function(operation, forward) {
      return new bundle_esm_default(function(observer) {
        var sub;
        var retriedSub;
        var retriedResult;
        try {
          sub = forward(operation).subscribe({
            next: function(result) {
              if (result.errors) {
                retriedResult = errorHandler({
                  graphQLErrors: result.errors,
                  response: result,
                  operation,
                  forward
                });
                if (retriedResult) {
                  retriedSub = retriedResult.subscribe({
                    next: observer.next.bind(observer),
                    error: observer.error.bind(observer),
                    complete: observer.complete.bind(observer)
                  });
                  return;
                }
              }
              observer.next(result);
            },
            error: function(networkError) {
              retriedResult = errorHandler({
                operation,
                networkError,
                graphQLErrors: networkError && networkError.result && networkError.result.errors,
                forward
              });
              if (retriedResult) {
                retriedSub = retriedResult.subscribe({
                  next: observer.next.bind(observer),
                  error: observer.error.bind(observer),
                  complete: observer.complete.bind(observer)
                });
                return;
              }
              observer.error(networkError);
            },
            complete: function() {
              if (!retriedResult) {
                observer.complete.bind(observer)();
              }
            }
          });
        } catch (e) {
          errorHandler({ networkError: e, operation, forward });
          observer.error(e);
        }
        return function() {
          if (sub)
            sub.unsubscribe();
          if (retriedSub)
            sub.unsubscribe();
        };
      });
    });
  }
  var ErrorLink;
  var init_bundle_esm4 = __esm({
    "node_modules/apollo-link-error/lib/bundle.esm.js"() {
      init_tslib_es6();
      init_bundle_esm3();
      ErrorLink = function(_super) {
        __extends10(ErrorLink2, _super);
        function ErrorLink2(errorHandler) {
          var _this = _super.call(this) || this;
          _this.link = onError(errorHandler);
          return _this;
        }
        ErrorLink2.prototype.request = function(operation, forward) {
          return this.link.request(operation, forward);
        };
        return ErrorLink2;
      }(ApolloLink2);
    }
  });

  // packages/utilities/apolloClient/customFetchers/fetchWithCsrf.ts
  function fetchWithCsrf(uri, options) {
    if (window.Webflow.env("design") || window.Webflow.env("preview")) {
      return fetch(uri, options);
    }
    const localCsrvCookie = getLocalCsrfCookie();
    const requestHeaders = options?.headers || {};
    return new Promise(
      (resolve2, reject2) => {
        if (hasFetchedCsrfCookie && localCsrvCookie) {
          requestHeaders["X-Wf-Csrf"] = localCsrvCookie;
          resolve2(
            fetch(uri, {
              ...options,
              headers: requestHeaders
            })
          );
        } else {
          fetch(WF_CSRF_URI, {
            method: "POST",
            credentials: "include",
            headers: { "X-Requested-With": "XMLHttpRequest" }
          }).then(() => {
            const newWfCsrfCookie = getLocalCsrfCookie();
            if (newWfCsrfCookie) {
              hasFetchedCsrfCookie = true;
              requestHeaders["X-Wf-Csrf"] = newWfCsrfCookie;
              resolve2(
                fetch(uri, {
                  ...options,
                  headers: requestHeaders
                })
              );
            } else {
              reject2(new Error("Did not receive CSRF token"));
            }
          }).catch((err) => reject2(err));
        }
      }
    );
  }
  function getLocalCsrfCookie() {
    const wfCsrfCookieArray = document.cookie.match(WF_CSRF_COOKIE_REGEX);
    return wfCsrfCookieArray ? wfCsrfCookieArray.pop() : null;
  }
  var WF_CSRF_COOKIE_REGEX, WF_CSRF_URI, hasFetchedCsrfCookie;
  var init_fetchWithCsrf = __esm({
    "packages/utilities/apolloClient/customFetchers/fetchWithCsrf.ts"() {
      "use strict";
      WF_CSRF_COOKIE_REGEX = "(^|;)\\s*wf-csrf\\s*=\\s*([^;]+)";
      WF_CSRF_URI = "/.wf_graphql/csrf";
      hasFetchedCsrfCookie = false;
    }
  });

  // node_modules/apollo-link-retry/node_modules/tslib/tslib.es6.js
  function __extends12(d, b) {
    extendStatics3(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }
  function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function(resolve2, reject2) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject2(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject2(e);
        }
      }
      function step(result) {
        result.done ? resolve2(result.value) : new P(function(resolve3) {
          resolve3(result.value);
        }).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }
  function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() {
      if (t[0] & 1)
        throw t[1];
      return t[1];
    }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
      return this;
    }), g;
    function verb(n) {
      return function(v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f)
        throw new TypeError("Generator is already executing.");
      while (_)
        try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
            return t;
          if (y = 0, t)
            op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2])
                _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5)
        throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  }
  var extendStatics3, __assign18;
  var init_tslib_es64 = __esm({
    "node_modules/apollo-link-retry/node_modules/tslib/tslib.es6.js"() {
      extendStatics3 = function(d, b) {
        extendStatics3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics3(d, b);
      };
      __assign18 = function() {
        __assign18 = Object.assign || function __assign20(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
          }
          return t;
        };
        return __assign18.apply(this, arguments);
      };
    }
  });

  // node_modules/apollo-link-retry/node_modules/zen-observable-ts/lib/bundle.esm.js
  var import_zen_observable3, Observable4, bundle_esm_default2;
  var init_bundle_esm5 = __esm({
    "node_modules/apollo-link-retry/node_modules/zen-observable-ts/lib/bundle.esm.js"() {
      import_zen_observable3 = __toESM(require_zen_observable());
      Observable4 = import_zen_observable3.default;
      bundle_esm_default2 = Observable4;
    }
  });

  // node_modules/apollo-link-retry/node_modules/apollo-utilities/node_modules/tslib/tslib.es6.js
  var init_tslib_es65 = __esm({
    "node_modules/apollo-link-retry/node_modules/apollo-utilities/node_modules/tslib/tslib.es6.js"() {
    }
  });

  // node_modules/apollo-link-retry/node_modules/@wry/equality/lib/equality.esm.js
  var _a3, toString3, hasOwnProperty3;
  var init_equality_esm2 = __esm({
    "node_modules/apollo-link-retry/node_modules/@wry/equality/lib/equality.esm.js"() {
      _a3 = Object.prototype;
      toString3 = _a3.toString;
      hasOwnProperty3 = _a3.hasOwnProperty;
    }
  });

  // node_modules/apollo-link-retry/node_modules/apollo-utilities/lib/bundle.esm.js
  function getOperationName3(doc) {
    return doc.definitions.filter(function(definition) {
      return definition.kind === "OperationDefinition" && definition.name;
    }).map(function(x) {
      return x.name.value;
    })[0] || null;
  }
  var import_visitor3, import_fast_json_stable_stringify4, canUseWeakMap2;
  var init_bundle_esm6 = __esm({
    "node_modules/apollo-link-retry/node_modules/apollo-utilities/lib/bundle.esm.js"() {
      import_visitor3 = __toESM(require_visitor());
      init_invariant_esm();
      init_tslib_es65();
      import_fast_json_stable_stringify4 = __toESM(require_fast_json_stable_stringify());
      init_equality_esm2();
      canUseWeakMap2 = typeof WeakMap === "function" && !(typeof navigator === "object" && navigator.product === "ReactNative");
    }
  });

  // node_modules/apollo-link-retry/node_modules/apollo-link/lib/bundle.esm.js
  function validateOperation3(operation) {
    var OPERATION_FIELDS = [
      "query",
      "operationName",
      "variables",
      "extensions",
      "context"
    ];
    for (var _i = 0, _a4 = Object.keys(operation); _i < _a4.length; _i++) {
      var key = _a4[_i];
      if (OPERATION_FIELDS.indexOf(key) < 0) {
        throw true ? new InvariantError(2) : new InvariantError("illegal argument: " + key);
      }
    }
    return operation;
  }
  function isTerminating3(link) {
    return link.request.length <= 1;
  }
  function transformOperation3(operation) {
    var transformedOperation = {
      variables: operation.variables || {},
      extensions: operation.extensions || {},
      operationName: operation.operationName,
      query: operation.query
    };
    if (!transformedOperation.operationName) {
      transformedOperation.operationName = typeof transformedOperation.query !== "string" ? getOperationName3(transformedOperation.query) : "";
    }
    return transformedOperation;
  }
  function createOperation3(starting, operation) {
    var context = __assign18({}, starting);
    var setContext = function(next) {
      if (typeof next === "function") {
        context = __assign18({}, context, next(context));
      } else {
        context = __assign18({}, context, next);
      }
    };
    var getContext = function() {
      return __assign18({}, context);
    };
    Object.defineProperty(operation, "setContext", {
      enumerable: false,
      value: setContext
    });
    Object.defineProperty(operation, "getContext", {
      enumerable: false,
      value: getContext
    });
    Object.defineProperty(operation, "toKey", {
      enumerable: false,
      value: function() {
        return getKey3(operation);
      }
    });
    return operation;
  }
  function getKey3(operation) {
    var query = operation.query, variables = operation.variables, operationName = operation.operationName;
    return JSON.stringify([operationName, query, variables]);
  }
  function passthrough3(op, forward) {
    return forward ? forward(op) : bundle_esm_default2.of();
  }
  function toLink3(handler) {
    return typeof handler === "function" ? new ApolloLink3(handler) : handler;
  }
  function empty3() {
    return new ApolloLink3(function() {
      return bundle_esm_default2.of();
    });
  }
  function from3(links) {
    if (links.length === 0)
      return empty3();
    return links.map(toLink3).reduce(function(x, y) {
      return x.concat(y);
    });
  }
  function split3(test2, left, right) {
    var leftLink = toLink3(left);
    var rightLink = toLink3(right || new ApolloLink3(passthrough3));
    if (isTerminating3(leftLink) && isTerminating3(rightLink)) {
      return new ApolloLink3(function(operation) {
        return test2(operation) ? leftLink.request(operation) || bundle_esm_default2.of() : rightLink.request(operation) || bundle_esm_default2.of();
      });
    } else {
      return new ApolloLink3(function(operation, forward) {
        return test2(operation) ? leftLink.request(operation, forward) || bundle_esm_default2.of() : rightLink.request(operation, forward) || bundle_esm_default2.of();
      });
    }
  }
  function execute3(link, operation) {
    return link.request(createOperation3(operation.context, transformOperation3(validateOperation3(operation)))) || bundle_esm_default2.of();
  }
  var LinkError3, concat3, ApolloLink3;
  var init_bundle_esm7 = __esm({
    "node_modules/apollo-link-retry/node_modules/apollo-link/lib/bundle.esm.js"() {
      init_bundle_esm5();
      init_bundle_esm5();
      init_invariant_esm();
      init_tslib_es64();
      init_bundle_esm6();
      LinkError3 = function(_super) {
        __extends12(LinkError4, _super);
        function LinkError4(message, link) {
          var _this = _super.call(this, message) || this;
          _this.link = link;
          return _this;
        }
        return LinkError4;
      }(Error);
      concat3 = function(first, second) {
        var firstLink = toLink3(first);
        if (isTerminating3(firstLink)) {
          return firstLink;
        }
        var nextLink = toLink3(second);
        if (isTerminating3(nextLink)) {
          return new ApolloLink3(function(operation) {
            return firstLink.request(operation, function(op) {
              return nextLink.request(op) || bundle_esm_default2.of();
            }) || bundle_esm_default2.of();
          });
        } else {
          return new ApolloLink3(function(operation, forward) {
            return firstLink.request(operation, function(op) {
              return nextLink.request(op, forward) || bundle_esm_default2.of();
            }) || bundle_esm_default2.of();
          });
        }
      };
      ApolloLink3 = function() {
        function ApolloLink4(request) {
          if (request)
            this.request = request;
        }
        ApolloLink4.prototype.split = function(test2, left, right) {
          return this.concat(split3(test2, left, right || new ApolloLink4(passthrough3)));
        };
        ApolloLink4.prototype.concat = function(next) {
          return concat3(this, next);
        };
        ApolloLink4.prototype.request = function(operation, forward) {
          throw true ? new InvariantError(1) : new InvariantError("request is not implemented");
        };
        ApolloLink4.empty = empty3;
        ApolloLink4.from = from3;
        ApolloLink4.split = split3;
        ApolloLink4.execute = execute3;
        return ApolloLink4;
      }();
    }
  });

  // node_modules/apollo-link-retry/lib/bundle.esm.js
  function buildDelayFunction(delayOptions) {
    var _a4 = delayOptions || {}, _b = _a4.initial, initial = _b === void 0 ? 300 : _b, _c = _a4.jitter, jitter = _c === void 0 ? true : _c, _d = _a4.max, max = _d === void 0 ? Infinity : _d;
    var baseDelay = jitter ? initial : initial / 2;
    return function delayFunction(count) {
      var delay = Math.min(max, baseDelay * Math.pow(2, count));
      if (jitter) {
        delay = Math.random() * delay;
      }
      return delay;
    };
  }
  function buildRetryFunction(retryOptions) {
    var _a4 = retryOptions || {}, retryIf = _a4.retryIf, _b = _a4.max, max = _b === void 0 ? 5 : _b;
    return function retryFunction(count, operation, error) {
      if (count >= max)
        return false;
      return retryIf ? retryIf(error, operation) : !!error;
    };
  }
  var RetryableOperation, RetryLink;
  var init_bundle_esm8 = __esm({
    "node_modules/apollo-link-retry/lib/bundle.esm.js"() {
      init_tslib_es64();
      init_bundle_esm7();
      RetryableOperation = function() {
        function RetryableOperation2(operation, nextLink, delayFor, retryIf) {
          var _this = this;
          this.operation = operation;
          this.nextLink = nextLink;
          this.delayFor = delayFor;
          this.retryIf = retryIf;
          this.retryCount = 0;
          this.values = [];
          this.complete = false;
          this.canceled = false;
          this.observers = [];
          this.currentSubscription = null;
          this.onNext = function(value) {
            _this.values.push(value);
            for (var _i = 0, _a4 = _this.observers; _i < _a4.length; _i++) {
              var observer = _a4[_i];
              if (!observer)
                continue;
              observer.next(value);
            }
          };
          this.onComplete = function() {
            _this.complete = true;
            for (var _i = 0, _a4 = _this.observers; _i < _a4.length; _i++) {
              var observer = _a4[_i];
              if (!observer)
                continue;
              observer.complete();
            }
          };
          this.onError = function(error) {
            return __awaiter(_this, void 0, void 0, function() {
              var shouldRetry, _i, _a4, observer;
              return __generator(this, function(_b) {
                switch (_b.label) {
                  case 0:
                    this.retryCount += 1;
                    return [4, this.retryIf(this.retryCount, this.operation, error)];
                  case 1:
                    shouldRetry = _b.sent();
                    if (shouldRetry) {
                      this.scheduleRetry(this.delayFor(this.retryCount, this.operation, error));
                      return [2];
                    }
                    this.error = error;
                    for (_i = 0, _a4 = this.observers; _i < _a4.length; _i++) {
                      observer = _a4[_i];
                      if (!observer)
                        continue;
                      observer.error(error);
                    }
                    return [2];
                }
              });
            });
          };
        }
        RetryableOperation2.prototype.subscribe = function(observer) {
          if (this.canceled) {
            throw new Error("Subscribing to a retryable link that was canceled is not supported");
          }
          this.observers.push(observer);
          for (var _i = 0, _a4 = this.values; _i < _a4.length; _i++) {
            var value = _a4[_i];
            observer.next(value);
          }
          if (this.complete) {
            observer.complete();
          } else if (this.error) {
            observer.error(this.error);
          }
        };
        RetryableOperation2.prototype.unsubscribe = function(observer) {
          var index = this.observers.indexOf(observer);
          if (index < 0) {
            throw new Error("RetryLink BUG! Attempting to unsubscribe unknown observer!");
          }
          this.observers[index] = null;
          if (this.observers.every(function(o) {
            return o === null;
          })) {
            this.cancel();
          }
        };
        RetryableOperation2.prototype.start = function() {
          if (this.currentSubscription)
            return;
          this.try();
        };
        RetryableOperation2.prototype.cancel = function() {
          if (this.currentSubscription) {
            this.currentSubscription.unsubscribe();
          }
          clearTimeout(this.timerId);
          this.timerId = null;
          this.currentSubscription = null;
          this.canceled = true;
        };
        RetryableOperation2.prototype.try = function() {
          this.currentSubscription = this.nextLink(this.operation).subscribe({
            next: this.onNext,
            error: this.onError,
            complete: this.onComplete
          });
        };
        RetryableOperation2.prototype.scheduleRetry = function(delay) {
          var _this = this;
          if (this.timerId) {
            throw new Error("RetryLink BUG! Encountered overlapping retries");
          }
          this.timerId = setTimeout(function() {
            _this.timerId = null;
            _this.try();
          }, delay);
        };
        return RetryableOperation2;
      }();
      RetryLink = function(_super) {
        __extends12(RetryLink2, _super);
        function RetryLink2(options) {
          var _this = _super.call(this) || this;
          var _a4 = options || {}, attempts = _a4.attempts, delay = _a4.delay;
          _this.delayFor = typeof delay === "function" ? delay : buildDelayFunction(delay);
          _this.retryIf = typeof attempts === "function" ? attempts : buildRetryFunction(attempts);
          return _this;
        }
        RetryLink2.prototype.request = function(operation, nextLink) {
          var retryable = new RetryableOperation(operation, nextLink, this.delayFor, this.retryIf);
          retryable.start();
          return new bundle_esm_default2(function(observer) {
            retryable.subscribe(observer);
            return function() {
              retryable.unsubscribe(observer);
            };
          });
        };
        return RetryLink2;
      }(ApolloLink3);
    }
  });

  // packages/utilities/apolloClient/helpers.ts
  var ERROR_METRIC_NAME, createRetryLink;
  var init_helpers = __esm({
    "packages/utilities/apolloClient/helpers.ts"() {
      "use strict";
      init_bundle_esm8();
      ERROR_METRIC_NAME = "webflow.renderer.apollo.request.error";
      createRetryLink = ({
        maxAttempts = 1,
        retryOnCorsErrors = true,
        retriedServerErrors = "all",
        metricsLogger
      }) => {
        return new RetryLink({
          attempts: (count, operation, error) => {
            const tags = [];
            let ret = false;
            if (count >= maxAttempts) {
              tags.push("max_attempts:true");
            } else {
              tags.push("max_attempts:false");
              if (error && (retriedServerErrors === "all" && error.statusCode >= 500 || retriedServerErrors === "bad-gateway" && error.statusCode === 502)) {
                tags.push("reason:server_error");
                tags.push(`status_code:${error.statusCode}`);
                ret = true;
              } else if (retryOnCorsErrors && error && error.result && error.result.code === "BadCrossOriginRequest") {
                tags.push("reason:cors_error");
                ret = true;
              }
            }
            tags.push(`attempt:${count}`, `retry:${ret}`);
            metricsLogger?.logDistributionMetric(ERROR_METRIC_NAME, 1, ...tags);
            return ret;
          },
          delay: (count) => {
            return count * 500 + Math.random() * 500;
          }
        });
      };
    }
  });

  // packages/utilities/apolloClient/createApolloClient.ts
  var createApolloClient, buildApolloClientUri;
  var init_createApolloClient = __esm({
    "packages/utilities/apolloClient/createApolloClient.ts"() {
      "use strict";
      init_apollo_client();
      init_lib7();
      init_lib10();
      init_lib3();
      init_bundle_esm4();
      init_fetchWithCsrf();
      init_helpers();
      createApolloClient = ({
        origin = "",
        path,
        publicationId,
        previewKey,
        ssrMode = false,
        credentials = "same-origin",
        headers = {},
        useCsrf = false,
        retryConfig,
        onError: onError2,
        disableBatching = false
      }) => {
        const uri = buildApolloClientUri({ origin, path, publicationId, previewKey });
        const requestHeaders = {
          Accept: "application/json"
        };
        Object.keys(headers).forEach((headerKey) => {
          requestHeaders[headerKey] = headers[headerKey];
        });
        const batchLinkArgs = {
          uri,
          headers: requestHeaders,
          credentials
        };
        if (disableBatching) {
          batchLinkArgs.batchMax = 1;
          batchLinkArgs.batchInterval = 0;
        }
        if (useCsrf) {
          batchLinkArgs.fetch = fetchWithCsrf;
        }
        const batchLink = new BatchHttpLink(batchLinkArgs);
        const links = [];
        if (retryConfig) {
          links.push(createRetryLink(retryConfig));
        }
        if (onError2) {
          links.push(onError(onError2));
        }
        const apolloClient2 = new apollo_client_default({
          link: ApolloLink.from([...links, batchLink]),
          cache: new InMemoryCache({
            dataIdFromObject: (object) => {
              switch (object.__typename) {
                case "sku_props":
                  return null;
                default: {
                  if (object.cmsLocaleId) {
                    return `${object.id}_${object.cmsLocaleId}`;
                  }
                  return object.id;
                }
              }
            }
          }),
          ssrMode
        });
        return apolloClient2;
      };
      buildApolloClientUri = ({
        origin = "",
        path,
        publicationId,
        previewKey
      }) => {
        const params = [];
        if (publicationId) {
          params.push(`pub=${publicationId}`);
        }
        if (previewKey) {
          params.push(`preview=${previewKey}`);
        }
        const cleanPath = `${origin}${path}`.replace(/([^:])\/\/+/g, "$1/");
        return `${cleanPath}${params.length ? `?${params.join("&")}` : ""}`;
      };
    }
  });

  // packages/utilities/apolloClient/index.ts
  var init_apolloClient = __esm({
    "packages/utilities/apolloClient/index.ts"() {
      "use strict";
      init_createApolloClient();
      init_helpers();
    }
  });

  // packages/shared/render/plugins/Commerce/modules/eventHandlerProxyWithApolloClient.ts
  var enumeratePrototypeProps, createEventProxy, EventHandlerProxyWithApolloClient;
  var init_eventHandlerProxyWithApolloClient = __esm({
    "packages/shared/render/plugins/Commerce/modules/eventHandlerProxyWithApolloClient.ts"() {
      "use strict";
      enumeratePrototypeProps = (obj, propNames = []) => {
        if (obj == null) {
          return propNames;
        }
        return propNames.concat(enumeratePrototypeProps(Object.getPrototypeOf(obj))).concat(Object.keys(obj));
      };
      createEventProxy = (event, currentTarget) => {
        const propertyDefinitions = enumeratePrototypeProps(event).filter((propName) => propName !== "currentTarget").reduce((proxies, propName) => {
          proxies[propName] = // @ts-expect-error Object.keys is "unsound", always infers `string` as output
          typeof event[propName] === "function" ? (
            // Proxy all the event methods so they will act on the original event:
            // @ts-expect-error Object.keys is "unsound", always infers `string` as output
            { value: (...args) => event[propName](...args) }
          ) : (
            // Proxy static props/getters because invoking them directly may result in "Illegal invokation" error.
            // @ts-expect-error Object.keys is "unsound", always infers `string` as output
            { get: () => event[propName] }
          );
          return proxies;
        }, {});
        const retargetedEvent = Object.create(event, {
          // set currentTarget to the matched node:
          currentTarget: { value: currentTarget },
          ...propertyDefinitions
        });
        return retargetedEvent;
      };
      EventHandlerProxyWithApolloClient = class {
        apolloClient;
        stripeStore;
        eventHandlers;
        constructor(apolloClient2, stripeStore2) {
          this.eventHandlers = {};
          this.apolloClient = apolloClient2;
          this.stripeStore = stripeStore2;
        }
        on = (eventName, eventMatcher, handler) => {
          const existingHandlers = this.eventHandlers[eventName] instanceof Array ? this.eventHandlers[eventName] : [];
          this.eventHandlers[eventName] = [
            ...existingHandlers,
            this.createHandlerProxy(eventName, eventMatcher, handler)
          ];
          return this;
        };
        createHandlerProxy = (eventName, eventMatcher, handler) => (event) => {
          const match = eventMatcher(event);
          const eventProxy = match instanceof Element ? createEventProxy(event, match) : event;
          if (match) {
            handler(eventProxy, this.apolloClient, this.stripeStore);
          }
        };
        attachHandlers = (target) => {
          Object.keys(this.eventHandlers).forEach((eventName) => {
            const handlerProxies = this.eventHandlers[eventName];
            handlerProxies.forEach(
              (handlerProxy2) => target.addEventListener(eventName, handlerProxy2, true)
            );
          });
          return this;
        };
        removeHandlers = (target) => {
          Object.keys(this.eventHandlers).forEach((eventName) => {
            const handlerProxies = this.eventHandlers[eventName];
            handlerProxies.forEach(
              (handlerProxy2) => target.removeEventListener(eventName, handlerProxy2, true)
            );
          });
          return this;
        };
      };
    }
  });

  // node_modules/graphql/jsutils/invariant.js
  var require_invariant = __commonJS({
    "node_modules/graphql/jsutils/invariant.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = invariant2;
      function invariant2(condition, message) {
        if (!condition) {
          throw new Error(message);
        }
      }
    }
  });

  // node_modules/graphql/language/source.js
  var require_source = __commonJS({
    "node_modules/graphql/language/source.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Source = void 0;
      var _invariant = require_invariant();
      var _invariant2 = _interopRequireDefault(_invariant);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      var Source = exports.Source = function Source2(body, name, locationOffset) {
        _classCallCheck(this, Source2);
        this.body = body;
        this.name = name || "GraphQL request";
        this.locationOffset = locationOffset || { line: 1, column: 1 };
        !(this.locationOffset.line > 0) ? (0, _invariant2.default)(0, "line in locationOffset is 1-indexed and must be positive") : void 0;
        !(this.locationOffset.column > 0) ? (0, _invariant2.default)(0, "column in locationOffset is 1-indexed and must be positive") : void 0;
      };
    }
  });

  // node_modules/graphql/language/location.js
  var require_location = __commonJS({
    "node_modules/graphql/language/location.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.getLocation = getLocation;
      function getLocation(source, position) {
        var lineRegexp = /\r\n|[\n\r]/g;
        var line = 1;
        var column = position + 1;
        var match = void 0;
        while ((match = lineRegexp.exec(source.body)) && match.index < position) {
          line += 1;
          column = position + 1 - (match.index + match[0].length);
        }
        return { line, column };
      }
    }
  });
}