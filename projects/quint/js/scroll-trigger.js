/*!
 * ScrollTrigger 3.10.0
 * https://greensock.com
 *
 * @license Copyright 2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], t)
    : t(((e = e || self).window = e.window || {}));
})(this, function (e) {
  "use strict";
  function _defineProperties(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(e, n.key, n);
    }
  }
  function p() {
    return (
      ge ||
      ("undefined" != typeof window &&
        (ge = window.gsap) &&
        ge.registerPlugin &&
        ge)
    );
  }
  function x(e, t) {
    return ~Ie.indexOf(e) && Ie[Ie.indexOf(e) + 1][t];
  }
  function y(e) {
    return !!~t.indexOf(e);
  }
  function z(e, t, r, n) {
    return e.addEventListener(t, r, { passive: !n });
  }
  function A(e, t, r) {
    return e.removeEventListener(t, r);
  }
  function D() {
    return (Me && Me.isPressed) || Oe.cache++;
  }
  function E(t) {
    return function (e) {
      return (
        e || 0 === e
          ? (r && (be.history.scrollRestoration = "manual"),
            t(e),
            (t.v = e),
            (t.c = Oe.cache),
            Me && Me.isPressed && Ye("ss", e))
          : (Oe.cache === t.c && !Ye("ref")) || ((t.c = Oe.cache), (t.v = t())),
        t.v
      );
    };
  }
  function H(e) {
    return (
      ge.utils.toArray(e)[0] ||
      ("string" == typeof e && !1 !== ge.config().nullTargetWarn
        ? console.warn("Element not found:", e)
        : null)
    );
  }
  function I(t, e) {
    var r = e.s,
      n = e.sc,
      i = Oe.indexOf(t),
      o = n === Le.sc ? 1 : 2;
    return (
      ~i || (i = Oe.push(t) - 1),
      Oe[i + o] ||
        (Oe[i + o] =
          x(t, r) ||
          (y(t)
            ? n
            : function (e) {
                return arguments.length ? (t[r] = e) : t[r];
              }))
    );
  }
  function J(e, t, i) {
    function _c(e, t) {
      var r = u();
      t || n < r - s
        ? ((a = o), (o = e), (l = s), (s = r))
        : i
        ? (o += e)
        : (o = a + ((e - a) / (r - l)) * (s - l));
    }
    var o = e,
      a = e,
      s = u(),
      l = s,
      n = t || 50,
      c = Math.max(500, 3 * n);
    return {
      update: _c,
      reset: function reset() {
        (a = o = i ? 0 : o), (l = s = 0);
      },
      getVelocity: function getVelocity(e) {
        var t = l,
          r = a,
          n = u();
        return (
          (!e && 0 !== e) || e === o || _c(e),
          s === l || c < n - l
            ? 0
            : ((o + (i ? r : -r)) / ((i ? n : s) - t)) * 1e3
        );
      },
    };
  }
  function K(e, t) {
    return t && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e;
  }
  function L(e) {
    var t = Math.max.apply(Math, e),
      r = Math.min.apply(Math, e);
    return Math.abs(t) >= Math.abs(r) ? t : r;
  }
  function M(e) {
    return (
      (ge = e || p()) &&
        !he &&
        "undefined" != typeof document &&
        ((be = window),
        (ye = (me = document).documentElement),
        (Se = me.body),
        (t = [be, me, ye, Se]),
        ge.utils.clamp,
        (Te = "onpointerenter" in Se ? "pointer" : "mouse"),
        (_e = w.isTouch =
          be.matchMedia &&
          be.matchMedia("(hover: none), (pointer: coarse)").matches
            ? 1
            : "ontouchstart" in be ||
              0 < navigator.maxTouchPoints ||
              0 < navigator.msMaxTouchPoints
            ? 2
            : 0),
        setTimeout(function () {
          return (r = 0);
        }, 500),
        (he = 1)),
      he
    );
  }
  var ge,
    he,
    be,
    me,
    ye,
    Se,
    _e,
    Te,
    ke,
    t,
    Me,
    r = 1,
    Pe = [],
    Oe = [],
    Ie = [],
    u = Date.now,
    Ye = function _bridge(e, t) {
      return t;
    },
    n = "scrollLeft",
    i = "scrollTop",
    Re = {
      s: n,
      p: "left",
      p2: "Left",
      os: "right",
      os2: "Right",
      d: "width",
      d2: "Width",
      a: "x",
      sc: E(function (e) {
        return arguments.length
          ? be.scrollTo(e, Le.sc())
          : be.pageXOffset || me[n] || ye[n] || Se[n] || 0;
      }),
    },
    Le = {
      s: i,
      p: "top",
      p2: "Top",
      os: "bottom",
      os2: "Bottom",
      d: "height",
      d2: "Height",
      a: "y",
      op: Re,
      sc: E(function (e) {
        return arguments.length
          ? be.scrollTo(Re.sc(), e)
          : be.pageYOffset || me[i] || ye[i] || Se[i] || 0;
      }),
    };
  (Re.op = Le), (Oe.cache = 0);
  var w =
    ((Observer.prototype.init = function init(e) {
      he || M(ge) || console.warn("Please gsap.registerPlugin(Observer)"),
        ke ||
          ((ke = ge.core.globals().ScrollTrigger) &&
            ke.core &&
            (function _integrate() {
              var e = ke.core,
                r = e.bridge || {},
                t = e._scrollers,
                n = e._proxies;
              t.push.apply(t, Oe),
                n.push.apply(n, Ie),
                (Oe = t),
                (Ie = n),
                (Ye = function _bridge(e, t) {
                  return r[e](t);
                });
            })());
      var i = e.tolerance,
        a = e.dragMinimum,
        t = e.type,
        r = e.target,
        n = e.lineHeight,
        o = e.debounce,
        s = e.preventDefault,
        l = e.onStop,
        c = e.onStopDelay,
        u = e.ignore,
        f = e.wheelSpeed,
        d = e.event,
        p = e.onDragStart,
        g = e.onDragEnd,
        h = e.onDrag,
        b = e.onPress,
        v = e.onRelease,
        m = e.onRight,
        x = e.onLeft,
        w = e.onUp,
        S = e.onDown,
        _ = e.onChangeX,
        T = e.onChangeY,
        k = e.onChange,
        E = e.onToggleX,
        C = e.onToggleY,
        P = e.onHover,
        O = e.onHoverEnd,
        F = e.onMove,
        Y = e.ignoreCheck,
        R = e.isNormalizer,
        X = e.onGestureStart,
        B = e.onGestureEnd,
        j = e.onWheel,
        N = e.onEnable,
        V = e.onDisable,
        G = e.onClick;
      function te(e, t) {
        return (
          ((Q.event = e) && u && ~u.indexOf(e.target)) ||
          (t && le && "touch" !== e.pointerType) ||
          (Y && Y(e))
        );
      }
      function ve() {
        var e = (Q.deltaX = L(fe)),
          t = (Q.deltaY = L(de)),
          r = Math.abs(e) >= i,
          n = Math.abs(t) >= i;
        k && (r || n) && k(Q, e, t, fe, de),
          r &&
            (m && 0 < Q.deltaX && m(Q),
            x && Q.deltaX < 0 && x(Q),
            _ && _(Q),
            E && Q.deltaX < 0 != ee < 0 && E(Q),
            (ee = Q.deltaX),
            (fe[0] = fe[1] = fe[2] = 0)),
          n &&
            (S && 0 < Q.deltaY && S(Q),
            w && Q.deltaY < 0 && w(Q),
            T && T(Q),
            C && Q.deltaY < 0 != re < 0 && C(Q),
            (re = Q.deltaY),
            (de[0] = de[1] = de[2] = 0)),
          Z && (F(Q), (Z = !1)),
          U && (h(Q), (U = !1)),
          $ && (j(Q), ($ = !1)),
          (W = 0);
      }
      function we(e, t, r) {
        (fe[r] += e),
          (de[r] += t),
          Q._vx.update(e, 2 === r),
          Q._vy.update(t, 2 === r),
          o ? (W = W || requestAnimationFrame(ve)) : ve();
      }
      function xe(e) {
        if (!te(e, 1)) {
          var t = (e = K(e, s)).clientX,
            r = e.clientY,
            n = t - Q.x,
            i = r - Q.y,
            o = Q.isDragging;
          (Q.x = t),
            (Q.y = r),
            (o || Math.abs(Q.startX - t) >= a || Math.abs(Q.startY - r) >= a) &&
              (h && (U = !0),
              o || (Q.isDragging = !0),
              we(n, i, 2),
              o || (p && p(Q)));
        }
      }
      function ze(e) {
        if (!te(e, 1)) {
          A(R ? r : ue, se[1], xe);
          var t = Q.isDragging;
          t || (Q._vx.reset(), Q._vy.reset()),
            (Q.isDragging = Q.isGesturing = Q.isPressed = !1),
            l && !R && q.restart(!0),
            g && t && g(Q),
            v && v(Q, t);
        }
      }
      function Ae(e) {
        return (
          e.touches &&
          1 < e.touches.length &&
          (Q.isGesturing = !0) &&
          X(e, Q.isDragging)
        );
      }
      function Be() {
        return (Q.isGesturing = !1) || B(Q);
      }
      function Ce(e) {
        if (!te(e)) {
          var t = ne(),
            r = ie();
          we(t - oe, r - ae, 1), (oe = t), (ae = r), l && q.restart(!0);
        }
      }
      function De(e) {
        if (!te(e)) {
          (e = K(e, s)), j && ($ = !0);
          var t =
            (1 === e.deltaMode ? n : 2 === e.deltaMode ? be.innerHeight : 1) *
            f;
          we(e.deltaX * t, e.deltaY * t, 0), l && !R && q.restart(!0);
        }
      }
      function Ee(e) {
        if (!te(e)) {
          var t = e.clientX,
            r = e.clientY,
            n = t - Q.x,
            i = r - Q.y;
          (Q.x = t), (Q.y = r), F && (Z = !0), (n || i) && we(n, i, 2);
        }
      }
      function Fe(e) {
        (Q.event = e), P(Q);
      }
      function Ge(e) {
        (Q.event = e), O(Q);
      }
      function He(e) {
        return te(e) || (K(e, s) && G(Q));
      }
      (this.target = r = H(r) || ye),
        (this.vars = e),
        (u = u && ge.utils.toArray(u)),
        (i = i || 0),
        (a = a || 0),
        (f = f || 1),
        (t = t || "wheel,touch,scroll,pointer"),
        (o = !1 !== o),
        (n = n || parseFloat(be.getComputedStyle(Se).lineHeight) || 22);
      var W,
        q,
        U,
        Z,
        $,
        Q = this,
        ee = 0,
        re = 0,
        ne = I(r, Re),
        ie = I(r, Le),
        oe = ne(),
        ae = ie(),
        se = (
          "ontouchstart" in ye
            ? "touchstart,touchmove,touchcancel,touchend"
            : 0 <= t.indexOf("pointer") && !("onpointerdown" in ye)
            ? "mousedown,mousemove,mouseup,mouseup"
            : "pointerdown,pointermove,pointercancel,pointerup"
        ).split(","),
        le =
          ~t.indexOf("touch") &&
          !~t.indexOf("pointer") &&
          "pointerdown" === se[0],
        ce = y(r),
        ue = r.ownerDocument || me,
        fe = [0, 0, 0],
        de = [0, 0, 0],
        pe = (Q.onPress = function (e) {
          te(e, 1) ||
            (q.pause(),
            (Q.isPressed = !0),
            (e = K(e, s)),
            (ee = re = 0),
            (Q.startX = Q.x = e.clientX),
            (Q.startY = Q.y = e.clientY),
            Q._vx.reset(),
            Q._vy.reset(),
            z(R ? r : ue, se[1], xe, s),
            (Q.deltaX = Q.deltaY = 0),
            b && b(Q));
        });
      (q = Q._dc =
        ge
          .delayedCall(c || 0.25, function onStopFunc() {
            Q._vx.reset(), Q._vy.reset(), q.pause(), l && l(Q);
          })
          .pause()),
        (Q.deltaX = Q.deltaY = 0),
        (Q._vx = J(0, 50, !0)),
        (Q._vy = J(0, 50, !0)),
        (Q.scrollX = ne),
        (Q.scrollY = ie),
        (Q.isDragging = Q.isGesturing = Q.isPressed = !1),
        (Q.enable = function (e) {
          return (
            Q.isEnabled ||
              (z(ce ? ue : r, "scroll", D),
              0 <= t.indexOf("scroll") && z(ce ? ue : r, "scroll", Ce, s),
              0 <= t.indexOf("wheel") && z(r, "wheel", De, s),
              ((0 <= t.indexOf("touch") && _e) || 0 <= t.indexOf("pointer")) &&
                (z(r, se[0], pe, s),
                z(ue, se[2], ze),
                z(ue, se[3], ze),
                G && z(r, "click", He),
                X && z(ue, "gesturestart", Ae),
                B && z(ue, "gestureend", Be),
                P && z(r, Te + "enter", Fe),
                O && z(r, Te + "leave", Ge),
                F && z(r, Te + "move", Ee)),
              (Q.isEnabled = !0),
              e && e.type && pe(e),
              N && N(Q)),
            Q
          );
        }),
        (Q.disable = function () {
          Q.isEnabled &&
            (Pe.filter(function (e) {
              return e !== Q && y(e.target);
            }).length || A(ce ? ue : r, "scroll", D),
            A(ce ? ue : r, "scroll", Ce),
            A(r, "wheel", De),
            A(r, se[0], pe),
            A(ue, se[2], ze),
            A(ue, se[3], ze),
            A(r, "click", He),
            A(ue, "gesturestart", Ae),
            A(ue, "gestureend", Be),
            A(r, Te + "enter", Fe),
            A(r, Te + "leave", Ge),
            A(r, Te + "move", Ee),
            (Q.isEnabled = !1),
            V && V(Q));
        }),
        (Q.kill = function () {
          Q.disable();
          var e = Pe.indexOf(Q);
          0 <= e && Pe.splice(e, 1), Me === Q && (Me = 0);
        }),
        Pe.push(Q),
        R && (Me = Q),
        Q.enable(d);
    }),
    (function _createClass(e, t, r) {
      return (
        t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e
      );
    })(Observer, [
      {
        key: "velocityX",
        get: function get() {
          return this._vx.getVelocity();
        },
      },
      {
        key: "velocityY",
        get: function get() {
          return this._vy.getVelocity();
        },
      },
    ]),
    Observer);
  function Observer(e) {
    this.init(e);
  }
  (w.version = "3.10.0"),
    (w.create = function (e) {
      return new w(e);
    }),
    (w.register = M),
    (w.getAll = function () {
      return Pe.slice();
    }),
    (w.getById = function (t) {
      return Pe.filter(function (e) {
        return e.vars.id === t;
      })[0];
    }),
    p() && ge.registerPlugin(w);
  function sa() {
    return (Ze = 1);
  }
  function ta() {
    return (Ze = 0);
  }
  function ua(e) {
    return e;
  }
  function va(e) {
    return Math.round(1e5 * e) / 1e5 || 0;
  }
  function wa() {
    return "undefined" != typeof window;
  }
  function xa() {
    return Xe || (wa() && (Xe = window.gsap) && Xe.registerPlugin && Xe);
  }
  function ya(e) {
    return !!~a.indexOf(e);
  }
  function za(e) {
    return (
      x(e, "getBoundingClientRect") ||
      (ya(e)
        ? function () {
            return (Ct.width = je.innerWidth), (Ct.height = je.innerHeight), Ct;
          }
        : function () {
            return xt(e);
          })
    );
  }
  function Ca(e, t) {
    var r = t.s,
      n = t.d2,
      i = t.d,
      o = t.a;
    return (r = "scroll" + n) && (o = x(e, r))
      ? o() - za(e)()[i]
      : ya(e)
      ? (Ve[r] || Ke[r]) -
        (je["inner" + n] || Ve["client" + n] || Ke["client" + n])
      : e[r] - e["offset" + n];
  }
  function Da(e, t) {
    for (var r = 0; r < g.length; r += 3)
      (t && !~t.indexOf(g[r + 1])) || e(g[r], g[r + 1], g[r + 2]);
  }
  function Ea(e) {
    return "string" == typeof e;
  }
  function Fa(e) {
    return "function" == typeof e;
  }
  function Ga(e) {
    return "number" == typeof e;
  }
  function Ha(e) {
    return "object" == typeof e;
  }
  function Ia(e) {
    return Fa(e) && e();
  }
  function Ja(r, n) {
    return function () {
      var e = Ia(r),
        t = Ia(n);
      return function () {
        Ia(e), Ia(t);
      };
    };
  }
  function Ka(e, t, r) {
    return e && e.progress(t ? 0 : 1) && r && e.pause();
  }
  function La(e, t) {
    if (e.enabled) {
      var r = t(e);
      r && r.totalTime && (e.callbackAnimation = r);
    }
  }
  function ab(e) {
    return je.getComputedStyle(e);
  }
  function cb(e, t) {
    for (var r in t) r in e || (e[r] = t[r]);
    return e;
  }
  function eb(e, t) {
    var r = t.d2;
    return e["offset" + r] || e["client" + r] || 0;
  }
  function fb(e) {
    var t,
      r = [],
      n = e.labels,
      i = e.duration();
    for (t in n) r.push(n[t] / i);
    return r;
  }
  function hb(i) {
    var o = Xe.utils.snap(i),
      a =
        Array.isArray(i) &&
        i.slice(0).sort(function (e, t) {
          return e - t;
        });
    return a
      ? function (e, t, r) {
          var n;
          if ((void 0 === r && (r = 0.001), !t)) return o(e);
          if (0 < t) {
            for (e -= r, n = 0; n < a.length; n++) if (a[n] >= e) return a[n];
            return a[n - 1];
          }
          for (n = a.length, e += r; n--; ) if (a[n] <= e) return a[n];
          return a[0];
        }
      : function (e, t, r) {
          void 0 === r && (r = 0.001);
          var n = o(e);
          return !t || Math.abs(n - e) < r || n - e < 0 == t < 0
            ? n
            : o(t < 0 ? e - i : e + i);
        };
  }
  function jb(t, r, e, n) {
    return e.split(",").forEach(function (e) {
      return t(r, e, n);
    });
  }
  function kb(e, t, r, n) {
    return e.addEventListener(t, r, { passive: !n });
  }
  function lb(e, t, r) {
    return e.removeEventListener(t, r);
  }
  function mb(e, t, r) {
    return r && r.wheelHandler && e(t, "wheel", r);
  }
  function qb(e, t) {
    if (Ea(e)) {
      var r = e.indexOf("="),
        n = ~r ? (e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
      ~r && (e.indexOf("%") > r && (n *= t / 100), (e = e.substr(0, r - 1))),
        (e =
          n +
          (e in F
            ? F[e] * t
            : ~e.indexOf("%")
            ? (parseFloat(e) * t) / 100
            : parseFloat(e) || 0));
    }
    return e;
  }
  function rb(e, t, r, n, i, o, a, s) {
    var l = i.startColor,
      c = i.endColor,
      u = i.fontSize,
      f = i.indent,
      d = i.fontWeight,
      p = Ne.createElement("div"),
      g = ya(r) || "fixed" === x(r, "pinType"),
      h = -1 !== e.indexOf("scroller"),
      b = g ? Ke : r,
      v = -1 !== e.indexOf("start"),
      m = v ? l : c,
      y =
        "border-color:" +
        m +
        ";font-size:" +
        u +
        ";color:" +
        m +
        ";font-weight:" +
        d +
        ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return (
      (y += "position:" + ((h || s) && g ? "fixed;" : "absolute;")),
      (!h && !s && g) ||
        (y += (n === Le ? C : P) + ":" + (o + parseFloat(f)) + "px;"),
      a &&
        (y +=
          "box-sizing:border-box;text-align:left;width:" +
          a.offsetWidth +
          "px;"),
      (p._isStart = v),
      p.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
      (p.style.cssText = y),
      (p.innerText = t || 0 === t ? e + "-" + t : e),
      b.children[0] ? b.insertBefore(p, b.children[0]) : b.appendChild(p),
      (p._offset = p["offset" + n.op.d2]),
      Y(p, 0, n, v),
      p
    );
  }
  function wb() {
    return 34 < at() - st && Z();
  }
  function xb() {
    (b && b.isPressed) ||
      (Oe.cache++,
      (_ = _ || requestAnimationFrame(Z)),
      st || j("scrollStart"),
      (st = at()));
  }
  function yb() {
    Oe.cache++,
      Ue ||
        h ||
        Ne.fullscreenElement ||
        (v &&
          S === je.innerWidth &&
          !(Math.abs(je.innerHeight - m) > 0.25 * je.innerHeight)) ||
        s.restart(!0);
  }
  function Eb(e) {
    var t,
      r = Xe.ticker.frame,
      n = [],
      i = 0;
    if (T !== r || ot) {
      for (G(); i < B.length; i += 4)
        (t = je.matchMedia(B[i]).matches) !== B[i + 3] &&
          ((B[i + 3] = t)
            ? n.push(i)
            : G(1, B[i]) || (Fa(B[i + 2]) && B[i + 2]()));
      for (V(), i = 0; i < n.length; i++)
        (t = n[i]), (rt = B[t]), (B[t + 2] = B[t + 1](e));
      (rt = 0), o && q(0, 1), (T = r), j("matchMedia");
    }
  }
  function Fb() {
    return lb(ne, "scrollEnd", Fb) || q(!0);
  }
  function Kb() {
    return (
      Oe.cache++ &&
      Oe.forEach(function (e) {
        return "function" == typeof e && (e.rec = 0);
      })
    );
  }
  function Vb(e, t, r, n) {
    if (e.parentNode !== t) {
      for (var i, o = $.length, a = t.style, s = e.style; o--; )
        a[(i = $[o])] = r[i];
      (a.position = "absolute" === r.position ? "absolute" : "relative"),
        "inline" === r.display && (a.display = "inline-block"),
        (s[P] = s[C] = a.flexBasis = "auto"),
        (a.overflow = "visible"),
        (a.boxSizing = "border-box"),
        (a[ut] = eb(e, Re) + yt),
        (a[ft] = eb(e, Le) + yt),
        (a[bt] = s[vt] = s.top = s.left = "0"),
        Et(n),
        (s[ut] = s.maxWidth = r[ut]),
        (s[ft] = s.maxHeight = r[ft]),
        (s[bt] = r[bt]),
        e.parentNode.insertBefore(t, e),
        t.appendChild(e);
    }
  }
  function Yb(e) {
    for (var t = Q.length, r = e.style, n = [], i = 0; i < t; i++)
      n.push(Q[i], r[Q[i]]);
    return (n.t = e), n;
  }
  function _b(e, t, r, n, i, o, a, s, l, c, u, f, d) {
    Fa(e) && (e = e(s)),
      Ea(e) &&
        "max" === e.substr(0, 3) &&
        (e = f + ("=" === e.charAt(4) ? qb("0" + e.substr(3), r) : 0));
    var p,
      g,
      h,
      b = d ? d.time() : 0;
    if ((d && d.seek(0), Ga(e))) a && Y(a, r, n, !0);
    else {
      Fa(t) && (t = t(s));
      var v,
        m,
        y,
        x,
        w = e.split(" ");
      (h = H(t) || Ke),
        ((v = xt(h) || {}) && (v.left || v.top)) ||
          "none" !== ab(h).display ||
          ((x = h.style.display),
          (h.style.display = "block"),
          (v = xt(h)),
          x ? (h.style.display = x) : h.style.removeProperty("display")),
        (m = qb(w[0], v[n.d])),
        (y = qb(w[1] || "0", r)),
        (e = v[n.p] - l[n.p] - c + m + i - y),
        a && Y(a, y, n, r - y < 20 || (a._isStart && 20 < y)),
        (r -= r - y);
    }
    if (o) {
      var S = e + r,
        _ = o._isStart;
      (p = "scroll" + n.d2),
        Y(
          o,
          S,
          n,
          (_ && 20 < S) ||
            (!_ && (u ? Math.max(Ke[p], Ve[p]) : o.parentNode[p]) <= S + 1)
        ),
        u &&
          ((l = xt(a)),
          u && (o.style[n.op.p] = l[n.op.p] - n.op.m - o._offset + yt));
    }
    return (
      d &&
        h &&
        ((p = xt(h)),
        d.seek(f),
        (g = xt(h)),
        (d._caScrollDist = p[n.p] - g[n.p]),
        (e = (e / d._caScrollDist) * f)),
      d && d.seek(b),
      d ? e : Math.round(e)
    );
  }
  function bc(e, t, r, n) {
    if (e.parentNode !== t) {
      var i,
        o,
        a = e.style;
      if (t === Ke) {
        for (i in ((e._stOrig = a.cssText), (o = ab(e))))
          +i ||
            re.test(i) ||
            !o[i] ||
            "string" != typeof a[i] ||
            "0" === i ||
            (a[i] = o[i]);
        (a.top = r), (a.left = n);
      } else a.cssText = e._stOrig;
      (Xe.core.getCache(e).uncache = 1), t.appendChild(e);
    }
  }
  function cc(l, e) {
    function mj(e, t, r, n, i) {
      var o = mj.tween,
        a = t.onComplete,
        s = {};
      return (
        (r = r || f()),
        (i = (n && i) || 0),
        (n = n || e - r),
        o && o.kill(),
        (c = Math.round(r)),
        (t[d] = e),
        ((t.modifiers = s)[d] = function (e) {
          return (
            (e = va(f())) !== c &&
            e !== u &&
            2 < Math.abs(e - c) &&
            2 < Math.abs(e - u)
              ? (o.kill(), (mj.tween = 0))
              : (e = r + n * o.ratio + i * o.ratio * o.ratio),
            (u = c),
            (c = va(e))
          );
        }),
        (t.onComplete = function () {
          (mj.tween = 0), a && a.call(o);
        }),
        (o = mj.tween = Xe.to(l, t))
      );
    }
    var c,
      u,
      f = I(l, e),
      d = "_scroll" + e.p2;
    return (
      ((l[d] = f).wheelHandler = function () {
        return mj.tween && mj.tween.kill() && (mj.tween = 0);
      }),
      kb(l, "wheel", f.wheelHandler),
      mj
    );
  }
  var Xe,
    o,
    je,
    Ne,
    Ve,
    Ke,
    a,
    s,
    We,
    qe,
    Je,
    l,
    Ue,
    Ze,
    c,
    $e,
    f,
    d,
    g,
    Qe,
    et,
    h,
    b,
    v,
    m,
    S,
    tt,
    _,
    rt,
    T,
    nt,
    it,
    ot = 1,
    at = Date.now,
    k = at(),
    st = 0,
    lt = 0,
    ct = Math.abs,
    C = "right",
    P = "bottom",
    ut = "width",
    ft = "height",
    dt = "Right",
    pt = "Left",
    gt = "Top",
    ht = "Bottom",
    bt = "padding",
    vt = "margin",
    mt = "Width",
    O = "Height",
    yt = "px",
    xt = function _getBounds(e, t) {
      var r =
          t &&
          "matrix(1, 0, 0, 1, 0, 0)" !== ab(e)[c] &&
          Xe.to(e, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
          }).progress(1),
        n = e.getBoundingClientRect();
      return r && r.progress(0).kill(), n;
    },
    wt = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal",
    },
    St = { toggleActions: "play", anticipatePin: 0 },
    F = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    Y = function _positionMarker(e, t, r, n) {
      var i = { display: "block" },
        o = r[n ? "os2" : "p2"],
        a = r[n ? "p2" : "os2"];
      (e._isFlipped = n),
        (i[r.a + "Percent"] = n ? -100 : 0),
        (i[r.a] = n ? "1px" : 0),
        (i["border" + o + mt] = 1),
        (i["border" + a + mt] = 0),
        (i[r.p] = t + "px"),
        Xe.set(e, i);
    },
    _t = [],
    Tt = {},
    R = {},
    X = [],
    B = [],
    j = function _dispatch(e) {
      return (
        (R[e] &&
          R[e].map(function (e) {
            return e();
          })) ||
        X
      );
    },
    N = [],
    V = function _revertRecorded(e) {
      for (var t = 0; t < N.length; t += 5)
        (e && N[t + 4] !== e) ||
          ((N[t].style.cssText = N[t + 1]),
          N[t].getBBox && N[t].setAttribute("transform", N[t + 2] || ""),
          (N[t + 3].uncache = 1));
    },
    G = function _revertAll(e, t) {
      var r;
      for ($e = 0; $e < _t.length; $e++)
        (r = _t[$e]), (t && r.media !== t) || (e ? r.kill(1) : r.revert());
      t && V(t), t || j("revert");
    },
    W = 0,
    q = function _refreshAll(e, t) {
      if (!st || e) {
        nt = !0;
        var r = j("refreshInit");
        Qe && ne.sort(),
          t || G(),
          _t.slice(0).forEach(function (e) {
            return e.refresh();
          }),
          _t.forEach(function (e) {
            return (
              "max" === e.vars.end &&
              e.setPositions(e.start, Ca(e.scroller, e._dir))
            );
          }),
          r.forEach(function (e) {
            return e && e.render && e.render(-1);
          }),
          Kb(),
          s.pause(),
          W++,
          (nt = !1),
          j("refresh");
      } else kb(ne, "scrollEnd", Fb);
    },
    U = 0,
    kt = 1,
    Z = function _updateAll() {
      if (!nt) {
        it && it.update(0), (ne.isUpdating = !0);
        var e = _t.length,
          t = at(),
          r = 50 <= t - k,
          n = e && _t[0].scroll();
        if (
          ((kt = n < U ? -1 : 1),
          (U = n),
          r &&
            (st && !Ze && 200 < t - st && ((st = 0), j("scrollEnd")),
            (Je = k),
            (k = t)),
          kt < 0)
        ) {
          for ($e = e; 0 < $e--; ) _t[$e] && _t[$e].update(0, r);
          kt = 1;
        } else for ($e = 0; $e < e; $e++) _t[$e] && _t[$e].update(0, r);
        ne.isUpdating = !1;
      }
      _ = 0;
    },
    $ = [
      "left",
      "top",
      P,
      C,
      vt + ht,
      vt + dt,
      vt + gt,
      vt + pt,
      "display",
      "flexShrink",
      "float",
      "zIndex",
      "gridColumnStart",
      "gridColumnEnd",
      "gridRowStart",
      "gridRowEnd",
      "gridArea",
      "justifySelf",
      "alignSelf",
      "placeSelf",
      "order",
    ],
    Q = $.concat([
      ut,
      ft,
      "boxSizing",
      "max" + mt,
      "max" + O,
      "position",
      vt,
      bt,
      bt + gt,
      bt + dt,
      bt + ht,
      bt + pt,
    ]),
    ee = /([A-Z])/g,
    Et = function _setState(e) {
      if (e) {
        var t,
          r,
          n = e.t.style,
          i = e.length,
          o = 0;
        for ((e.t._gsap || Xe.core.getCache(e.t)).uncache = 1; o < i; o += 2)
          (r = e[o + 1]),
            (t = e[o]),
            r
              ? (n[t] = r)
              : n[t] && n.removeProperty(t.replace(ee, "-$1").toLowerCase());
      }
    },
    Ct = { left: 0, top: 0 },
    re = /(webkit|moz|length|cssText|inset)/i,
    ne =
      ((ScrollTrigger.prototype.init = function init(_, T) {
        if (
          ((this.progress = this.start = 0), this.vars && this.kill(!0, !0), lt)
        ) {
          var v,
            n,
            f,
            k,
            E,
            C,
            M,
            P,
            A,
            O,
            z,
            e,
            D,
            F,
            Y,
            R,
            L,
            t,
            X,
            m,
            B,
            j,
            y,
            N,
            w,
            S,
            r,
            V,
            G,
            K,
            i,
            d,
            W,
            q,
            J,
            U,
            Z,
            o,
            $ = (_ = cb(Ea(_) || Ga(_) || _.nodeType ? { trigger: _ } : _, St))
              .onUpdate,
            Q = _.toggleClass,
            a = _.id,
            ee = _.onToggle,
            te = _.onRefresh,
            re = _.scrub,
            ne = _.trigger,
            ie = _.pin,
            oe = _.pinSpacing,
            ae = _.invalidateOnRefresh,
            se = _.anticipatePin,
            s = _.onScrubComplete,
            p = _.onSnapComplete,
            le = _.once,
            ce = _.snap,
            ue = _.pinReparent,
            l = _.pinSpacer,
            fe = _.containerAnimation,
            de = _.fastScrollEnd,
            pe = _.preventOverlaps,
            ge =
              _.horizontal || (_.containerAnimation && !1 !== _.horizontal)
                ? Re
                : Le,
            he = !re && 0 !== re,
            be = H(_.scroller || je),
            c = Xe.core.getCache(be),
            ve = ya(be),
            me =
              "fixed" ===
              ("pinType" in _
                ? _.pinType
                : x(be, "pinType") || (ve && "fixed")),
            ye = [_.onEnter, _.onLeave, _.onEnterBack, _.onLeaveBack],
            xe = he && _.toggleActions.split(" "),
            u = "markers" in _ ? _.markers : St.markers,
            we = ve ? 0 : parseFloat(ab(be)["border" + ge.p2 + mt]) || 0,
            Se = this,
            _e =
              _.onRefreshInit &&
              function () {
                return _.onRefreshInit(Se);
              },
            Te = (function _getSizeFunc(e, t, r) {
              var n = r.d,
                i = r.d2,
                o = r.a;
              return (o = x(e, "getBoundingClientRect"))
                ? function () {
                    return o()[n];
                  }
                : function () {
                    return (t ? je["inner" + i] : e["client" + i]) || 0;
                  };
            })(be, ve, ge),
            ke = (function _getOffsetsFunc(e, t) {
              return !t || ~Ie.indexOf(e)
                ? za(e)
                : function () {
                    return Ct;
                  };
            })(be, ve),
            g = 0,
            Ee = I(be, ge);
          if (
            ((Se.media = rt),
            (Se._dir = ge),
            (se *= 45),
            (Se.scroller = be),
            (Se.scroll = fe ? fe.time.bind(fe) : Ee),
            (k = Ee()),
            (Se.vars = _),
            (T = T || _.animation),
            "refreshPriority" in _ &&
              ((Qe = 1), -9999 === _.refreshPriority && (it = Se)),
            (c.tweenScroll = c.tweenScroll || {
              top: cc(be, Le),
              left: cc(be, Re),
            }),
            (Se.tweenTo = v = c.tweenScroll[ge.p]),
            (Se.scrubDuration = function (e) {
              (i = Ga(e) && e)
                ? K
                  ? K.duration(e)
                  : (K = Xe.to(T, {
                      ease: "expo",
                      totalProgress: "+=0.001",
                      duration: i,
                      paused: !0,
                      onComplete: function onComplete() {
                        return s && s(Se);
                      },
                    }))
                : (K && K.progress(1).kill(), (K = 0));
            }),
            T &&
              ((T.vars.lazy = !1),
              T._initted ||
                (!1 !== T.vars.immediateRender &&
                  !1 !== _.immediateRender &&
                  T.render(0, !0, !0)),
              (Se.animation = T.pause()),
              (T.scrollTrigger = Se).scrubDuration(re),
              (V = 0),
              (a = a || T.vars.id)),
            _t.push(Se),
            ce &&
              ((Ha(ce) && !ce.push) || (ce = { snapTo: ce }),
              "scrollBehavior" in Ke.style &&
                Xe.set(ve ? [Ke, Ve] : be, { scrollBehavior: "auto" }),
              (f = Fa(ce.snapTo)
                ? ce.snapTo
                : "labels" === ce.snapTo
                ? (function _getClosestLabel(t) {
                    return function (e) {
                      return Xe.utils.snap(fb(t), e);
                    };
                  })(T)
                : "labelsDirectional" === ce.snapTo
                ? (function _getLabelAtDirection(r) {
                    return function (e, t) {
                      return hb(fb(r))(e, t.direction);
                    };
                  })(T)
                : !1 !== ce.directional
                ? function (e, t) {
                    return hb(ce.snapTo)(e, Ue ? 0 : t.direction);
                  }
                : Xe.utils.snap(ce.snapTo)),
              (d = ce.duration || { min: 0.1, max: 2 }),
              (d = Ha(d) ? qe(d.min, d.max) : qe(d, d)),
              (W = Xe.delayedCall(ce.delay || i / 2 || 0.1, function () {
                if (Math.abs(Se.getVelocity()) < 10 && !Ze && g !== Ee()) {
                  var e = T && !he ? T.totalProgress() : Se.progress,
                    t = ((e - G) / (at() - Je)) * 1e3 || 0,
                    r = Xe.utils.clamp(
                      -Se.progress,
                      1 - Se.progress,
                      (ct(t / 2) * t) / 0.185
                    ),
                    n = Se.progress + (!1 === ce.inertia ? 0 : r),
                    i = qe(0, 1, f(n, Se)),
                    o = Ee(),
                    a = Math.round(C + i * D),
                    s = ce.onStart,
                    l = ce.onInterrupt,
                    c = ce.onComplete,
                    u = v.tween;
                  if (o <= M && C <= o && a !== o) {
                    if (u && !u._initted && u.data <= ct(a - o)) return;
                    !1 === ce.inertia && (r = i - Se.progress),
                      v(
                        a,
                        {
                          duration: d(
                            ct(
                              (0.185 * Math.max(ct(n - e), ct(i - e))) /
                                t /
                                0.05 || 0
                            )
                          ),
                          ease: ce.ease || "power3",
                          data: ct(a - o),
                          onInterrupt: function onInterrupt() {
                            return W.restart(!0) && l && l(Se);
                          },
                          onComplete: function onComplete() {
                            Se.update(),
                              (g = Ee()),
                              (V = G =
                                T && !he ? T.totalProgress() : Se.progress),
                              p && p(Se),
                              c && c(Se);
                          },
                        },
                        o,
                        r * D,
                        a - o - r * D
                      ),
                      s && s(Se, v.tween);
                  }
                } else Se.isActive && W.restart(!0);
              }).pause())),
            a && (Tt[a] = Se),
            (o =
              (o =
                (ne = Se.trigger = H(ne || ie)) &&
                ne._gsap &&
                ne._gsap.stRevert) && o(Se)),
            (ie = !0 === ie ? ne : H(ie)),
            Ea(Q) && (Q = { targets: ne, className: Q }),
            ie &&
              (!1 === oe ||
                oe === vt ||
                (oe = !(!oe && "flex" === ab(ie.parentNode).display) && bt),
              (Se.pin = ie),
              !1 !== _.force3D && Xe.set(ie, { force3D: !0 }),
              (n = Xe.core.getCache(ie)).spacer
                ? (F = n.pinState)
                : (l &&
                    ((l = H(l)) &&
                      !l.nodeType &&
                      (l = l.current || l.nativeElement),
                    (n.spacerIsNative = !!l),
                    l && (n.spacerState = Yb(l))),
                  (n.spacer = L = l || Ne.createElement("div")),
                  L.classList.add("pin-spacer"),
                  a && L.classList.add("pin-spacer-" + a),
                  (n.pinState = F = Yb(ie))),
              (Se.spacer = L = n.spacer),
              (r = ab(ie)),
              (y = r[oe + ge.os2]),
              (X = Xe.getProperty(ie)),
              (m = Xe.quickSetter(ie, ge.a, yt)),
              Vb(ie, L, r),
              (R = Yb(ie))),
            u)
          ) {
            (e = Ha(u) ? cb(u, wt) : wt),
              (O = rb("scroller-start", a, be, ge, e, 0)),
              (z = rb("scroller-end", a, be, ge, e, 0, O)),
              (t = O["offset" + ge.op.d2]);
            var h = H(x(be, "content") || be);
            (P = this.markerStart = rb("start", a, h, ge, e, t, 0, fe)),
              (A = this.markerEnd = rb("end", a, h, ge, e, t, 0, fe)),
              fe && (Z = Xe.quickSetter([P, A], ge.a, yt)),
              me ||
                (Ie.length && !0 === x(be, "fixedMarkers")) ||
                ((function _makePositionable(e) {
                  var t = ab(e).position;
                  e.style.position =
                    "absolute" === t || "fixed" === t ? t : "relative";
                })(ve ? Ke : be),
                Xe.set([O, z], { force3D: !0 }),
                (w = Xe.quickSetter(O, ge.a, yt)),
                (S = Xe.quickSetter(z, ge.a, yt)));
          }
          if (fe) {
            var b = fe.vars.onUpdate,
              Ce = fe.vars.onUpdateParams;
            fe.eventCallback("onUpdate", function () {
              Se.update(0, 0, 1), b && b.apply(Ce || []);
            });
          }
          (Se.previous = function () {
            return _t[_t.indexOf(Se) - 1];
          }),
            (Se.next = function () {
              return _t[_t.indexOf(Se) + 1];
            }),
            (Se.revert = function (e) {
              var t = !1 !== e || !Se.enabled,
                r = Ue;
              t !== Se.isReverted &&
                (t &&
                  (!Se.scroll.rec && Ue && nt && (Se.scroll.rec = Ee()),
                  (J = Math.max(Ee(), Se.scroll.rec || 0)),
                  (q = Se.progress),
                  (U = T && T.progress())),
                P &&
                  [P, A, O, z].forEach(function (e) {
                    return (e.style.display = t ? "none" : "block");
                  }),
                t && (Ue = 1),
                Se.update(t),
                (Ue = r),
                ie &&
                  (t
                    ? (function _swapPinOut(e, t, r) {
                        Et(r);
                        var n = e._gsap;
                        if (n.spacerIsNative) Et(n.spacerState);
                        else if (e.parentNode === t) {
                          var i = t.parentNode;
                          i && (i.insertBefore(e, t), i.removeChild(t));
                        }
                      })(ie, L, F)
                    : (ue && Se.isActive) || Vb(ie, L, ab(ie), N)),
                (Se.isReverted = t));
            }),
            (Se.refresh = function (e, t) {
              if ((!Ue && Se.enabled) || t)
                if (ie && e && st) kb(ScrollTrigger, "scrollEnd", Fb);
                else {
                  !nt && _e && _e(Se),
                    (Ue = 1),
                    K && K.pause(),
                    ae && T && T.time(-0.01, !0).invalidate(),
                    Se.isReverted || Se.revert();
                  for (
                    var r,
                      n,
                      i,
                      o,
                      a,
                      s,
                      l,
                      c,
                      u,
                      f,
                      d = Te(),
                      p = ke(),
                      g = fe ? fe.duration() : Ca(be, ge),
                      h = 0,
                      b = 0,
                      v = _.end,
                      m = _.endTrigger || ne,
                      y =
                        _.start ||
                        (0 !== _.start && ne ? (ie ? "0 0" : "0 100%") : 0),
                      x = (Se.pinnedContainer =
                        _.pinnedContainer && H(_.pinnedContainer)),
                      w = (ne && Math.max(0, _t.indexOf(Se))) || 0,
                      S = w;
                    S--;

                  )
                    (s = _t[S]).end || s.refresh(0, 1) || (Ue = 1),
                      !(l = s.pin) ||
                        (l !== ne && l !== ie) ||
                        s.isReverted ||
                        ((f = f || []).unshift(s), s.revert()),
                      s !== _t[S] && (w--, S--);
                  for (
                    Fa(y) && (y = y(Se)),
                      C =
                        _b(y, ne, d, ge, Ee(), P, O, Se, p, we, me, g, fe) ||
                        (ie ? -0.001 : 0),
                      Fa(v) && (v = v(Se)),
                      Ea(v) &&
                        !v.indexOf("+=") &&
                        (~v.indexOf(" ")
                          ? (v = (Ea(y) ? y.split(" ")[0] : "") + v)
                          : ((h = qb(v.substr(2), d)),
                            (v = Ea(y) ? y : C + h),
                            (m = ne))),
                      M =
                        Math.max(
                          C,
                          _b(
                            v || (m ? "100% 0" : g),
                            m,
                            d,
                            ge,
                            Ee() + h,
                            A,
                            z,
                            Se,
                            p,
                            we,
                            me,
                            g,
                            fe
                          )
                        ) || -0.001,
                      D = M - C || ((C -= 0.01) && 0.001),
                      h = 0,
                      S = w;
                    S--;

                  )
                    (l = (s = _t[S]).pin) &&
                      s.start - s._pinPush < C &&
                      !fe &&
                      0 < s.end &&
                      ((r = s.end - s.start),
                      (l !== ne && l !== x) ||
                        Ga(y) ||
                        (h += r * (1 - s.progress)),
                      l === ie && (b += r));
                  if (
                    ((C += h),
                    (M += h),
                    (Se._pinPush = b),
                    P &&
                      h &&
                      (((r = {})[ge.a] = "+=" + h),
                      x && (r[ge.p] = "-=" + Ee()),
                      Xe.set([P, A], r)),
                    ie)
                  )
                    (r = ab(ie)),
                      (o = ge === Le),
                      (i = Ee()),
                      (B = parseFloat(X(ge.a)) + b),
                      !g &&
                        1 < M &&
                        ((ve ? Ke : be).style["overflow-" + ge.a] = "scroll"),
                      Vb(ie, L, r),
                      (R = Yb(ie)),
                      (n = xt(ie, !0)),
                      (c = me && I(be, o ? Re : Le)()),
                      oe &&
                        (((N = [oe + ge.os2, D + b + yt]).t = L),
                        (S = oe === bt ? eb(ie, ge) + D + b : 0) &&
                          N.push(ge.d, S + yt),
                        Et(N),
                        me && Ee(J)),
                      me &&
                        (((a = {
                          top: n.top + (o ? i - C : c) + yt,
                          left: n.left + (o ? c : i - C) + yt,
                          boxSizing: "border-box",
                          position: "fixed",
                        })[ut] = a.maxWidth =
                          Math.ceil(n.width) + yt),
                        (a[ft] = a.maxHeight = Math.ceil(n.height) + yt),
                        (a[vt] =
                          a[vt + gt] =
                          a[vt + dt] =
                          a[vt + ht] =
                          a[vt + pt] =
                            "0"),
                        (a[bt] = r[bt]),
                        (a[bt + gt] = r[bt + gt]),
                        (a[bt + dt] = r[bt + dt]),
                        (a[bt + ht] = r[bt + ht]),
                        (a[bt + pt] = r[bt + pt]),
                        (Y = (function _copyState(e, t, r) {
                          for (
                            var n, i = [], o = e.length, a = r ? 8 : 0;
                            a < o;
                            a += 2
                          )
                            (n = e[a]), i.push(n, n in t ? t[n] : e[a + 1]);
                          return (i.t = e.t), i;
                        })(F, a, ue))),
                      T
                        ? ((u = T._initted),
                          et(1),
                          T.render(T.duration(), !0, !0),
                          (j = X(ge.a) - B + D + b),
                          D !== j && Y.splice(Y.length - 2, 2),
                          T.render(0, !0, !0),
                          u || T.invalidate(),
                          et(0))
                        : (j = D);
                  else if (ne && Ee() && !fe)
                    for (n = ne.parentNode; n && n !== Ke; )
                      n._pinOffset &&
                        ((C -= n._pinOffset), (M -= n._pinOffset)),
                        (n = n.parentNode);
                  f &&
                    f.forEach(function (e) {
                      return e.revert(!1);
                    }),
                    (Se.start = C),
                    (Se.end = M),
                    (k = E = Ee()),
                    fe || (k < J && Ee(J), (Se.scroll.rec = 0)),
                    Se.revert(!1),
                    W && Se.isActive && Ee(C + D * q),
                    (Ue = 0),
                    T &&
                      he &&
                      (T._initted || U) &&
                      T.progress() !== U &&
                      T.progress(U, !0).render(T.time(), !0, !0),
                    (q === Se.progress && !fe) ||
                      (T && !he && T.totalProgress(q, !0),
                      (Se.progress = q),
                      Se.update(0, 0, 1)),
                    ie && oe && (L._pinOffset = Math.round(Se.progress * j)),
                    te && te(Se);
                }
            }),
            (Se.getVelocity = function () {
              return ((Ee() - E) / (at() - Je)) * 1e3 || 0;
            }),
            (Se.endAnimation = function () {
              Ka(Se.callbackAnimation),
                T &&
                  (K
                    ? K.progress(1)
                    : T.paused()
                    ? he || Ka(T, Se.direction < 0, 1)
                    : Ka(T, T.reversed()));
            }),
            (Se.labelToScroll = function (e) {
              return (
                (T &&
                  T.labels &&
                  (C || Se.refresh() || C) +
                    (T.labels[e] / T.duration()) * D) ||
                0
              );
            }),
            (Se.getTrailing = function (t) {
              var e = _t.indexOf(Se),
                r =
                  0 < Se.direction ? _t.slice(0, e).reverse() : _t.slice(e + 1);
              return (
                Ea(t)
                  ? r.filter(function (e) {
                      return e.vars.preventOverlaps === t;
                    })
                  : r
              ).filter(function (e) {
                return 0 < Se.direction ? e.end <= C : e.start >= M;
              });
            }),
            (Se.update = function (e, t, r) {
              if (!fe || r || e) {
                var n,
                  i,
                  o,
                  a,
                  s,
                  l,
                  c,
                  u = Se.scroll(),
                  f = e ? 0 : (u - C) / D,
                  d = f < 0 ? 0 : 1 < f ? 1 : f || 0,
                  p = Se.progress;
                if (
                  (t &&
                    ((E = k),
                    (k = fe ? Ee() : u),
                    ce && ((G = V), (V = T && !he ? T.totalProgress() : d))),
                  se &&
                    !d &&
                    ie &&
                    !Ue &&
                    !ot &&
                    st &&
                    C < u + ((u - E) / (at() - Je)) * se &&
                    (d = 1e-4),
                  d !== p && Se.enabled)
                ) {
                  if (
                    ((a =
                      (s =
                        (n = Se.isActive = !!d && d < 1) != (!!p && p < 1)) ||
                      !!d != !!p),
                    (Se.direction = p < d ? 1 : -1),
                    (Se.progress = d),
                    a &&
                      !Ue &&
                      ((i = d && !p ? 0 : 1 === d ? 1 : 1 === p ? 2 : 3),
                      he &&
                        ((o =
                          (!s && "none" !== xe[i + 1] && xe[i + 1]) || xe[i]),
                        (c =
                          T && ("complete" === o || "reset" === o || o in T)))),
                    pe &&
                      (s || c) &&
                      (c || re || !T) &&
                      (Fa(pe)
                        ? pe(Se)
                        : Se.getTrailing(pe).forEach(function (e) {
                            return e.endAnimation();
                          })),
                    he ||
                      (!K || Ue || ot
                        ? T && T.totalProgress(d, !!Ue)
                        : ((fe || (it && it !== Se)) &&
                            K.render(K._dp._time - K._start),
                          K.resetTo
                            ? K.resetTo("totalProgress", d, T._tTime / T._tDur)
                            : ((K.vars.totalProgress = d),
                              K.invalidate().restart()))),
                    ie)
                  )
                    if ((e && oe && (L.style[oe + ge.os2] = y), me)) {
                      if (a) {
                        if (
                          ((l =
                            !e && p < d && u < M + 1 && u + 1 >= Ca(be, ge)),
                          ue)
                        )
                          if (e || (!n && !l)) bc(ie, L);
                          else {
                            var g = xt(ie, !0),
                              h = u - C;
                            bc(
                              ie,
                              Ke,
                              g.top + (ge === Le ? h : 0) + yt,
                              g.left + (ge === Le ? 0 : h) + yt
                            );
                          }
                        Et(n || l ? Y : R),
                          (j !== D && d < 1 && n) ||
                            m(B + (1 !== d || l ? 0 : j));
                      }
                    } else m(va(B + j * d));
                  !ce || v.tween || Ue || ot || W.restart(!0),
                    Q &&
                      (s || (le && d && (d < 1 || !tt))) &&
                      We(Q.targets).forEach(function (e) {
                        return e.classList[n || le ? "add" : "remove"](
                          Q.className
                        );
                      }),
                    !$ || he || e || $(Se),
                    a && !Ue
                      ? (he &&
                          (c &&
                            ("complete" === o
                              ? T.pause().totalProgress(1)
                              : "reset" === o
                              ? T.restart(!0).pause()
                              : "restart" === o
                              ? T.restart(!0)
                              : T[o]()),
                          $ && $(Se)),
                        (!s && tt) ||
                          (ee && s && La(Se, ee),
                          ye[i] && La(Se, ye[i]),
                          le && (1 === d ? Se.kill(!1, 1) : (ye[i] = 0)),
                          s || (ye[(i = 1 === d ? 1 : 3)] && La(Se, ye[i]))),
                        de &&
                          !n &&
                          Math.abs(Se.getVelocity()) > (Ga(de) ? de : 2500) &&
                          (Ka(Se.callbackAnimation),
                          K ? K.progress(1) : Ka(T, !d, 1)))
                      : he && $ && !Ue && $(Se);
                }
                if (S) {
                  var b = fe
                    ? (u / fe.duration()) * (fe._caScrollDist || 0)
                    : u;
                  w(b + (O._isFlipped ? 1 : 0)), S(b);
                }
                Z && Z((-u / fe.duration()) * (fe._caScrollDist || 0));
              }
            }),
            (Se.enable = function (e, t) {
              Se.enabled ||
                ((Se.enabled = !0),
                kb(be, "resize", yb),
                kb(ve ? Ne : be, "scroll", xb),
                _e && kb(ScrollTrigger, "refreshInit", _e),
                !1 !== e && ((Se.progress = q = 0), (k = E = g = Ee())),
                !1 !== t && Se.refresh());
            }),
            (Se.getTween = function (e) {
              return e && v ? v.tween : K;
            }),
            (Se.setPositions = function (e, t) {
              ie && ((B += e - C), (j += t - e - D)),
                (Se.start = C = e),
                (Se.end = M = t),
                (D = t - e),
                Se.update();
            }),
            (Se.disable = function (e, t) {
              if (
                Se.enabled &&
                (!1 !== e && Se.revert(),
                (Se.enabled = Se.isActive = !1),
                t || (K && K.pause()),
                (J = 0),
                n && (n.uncache = 1),
                _e && lb(ScrollTrigger, "refreshInit", _e),
                W && (W.pause(), v.tween && v.tween.kill() && (v.tween = 0)),
                !ve)
              ) {
                for (var r = _t.length; r--; )
                  if (_t[r].scroller === be && _t[r] !== Se) return;
                lb(be, "resize", yb), lb(be, "scroll", xb);
              }
            }),
            (Se.kill = function (e, t) {
              Se.disable(e, t), K && !t && K.kill(), a && delete Tt[a];
              var r = _t.indexOf(Se);
              0 <= r && _t.splice(r, 1),
                r === $e && 0 < kt && $e--,
                (r = 0),
                _t.forEach(function (e) {
                  return e.scroller === Se.scroller && (r = 1);
                }),
                r || (Se.scroll.rec = 0),
                T &&
                  ((T.scrollTrigger = null), e && T.render(-1), t || T.kill()),
                P &&
                  [P, A, O, z].forEach(function (e) {
                    return e.parentNode && e.parentNode.removeChild(e);
                  }),
                ie &&
                  (n && (n.uncache = 1),
                  (r = 0),
                  _t.forEach(function (e) {
                    return e.pin === ie && r++;
                  }),
                  r || (n.spacer = 0)),
                _.onKill && _.onKill(Se);
            }),
            Se.enable(!1, !1),
            o && o(Se),
            T && T.add && !D
              ? Xe.delayedCall(0.01, function () {
                  return C || M || Se.refresh();
                }) &&
                (D = 0.01) &&
                (C = M = 0)
              : Se.refresh();
        } else this.update = this.refresh = this.kill = ua;
      }),
      (ScrollTrigger.register = function register(e) {
        return (
          o ||
            ((Xe = e || xa()),
            wa() && window.document && ScrollTrigger.enable(),
            (o = lt)),
          o
        );
      }),
      (ScrollTrigger.defaults = function defaults(e) {
        if (e) for (var t in e) St[t] = e[t];
        return St;
      }),
      (ScrollTrigger.disable = function disable(t, r) {
        (lt = 0),
          _t.forEach(function (e) {
            return e[r ? "kill" : "disable"](t);
          }),
          lb(je, "wheel", xb),
          lb(Ne, "scroll", xb),
          clearInterval(l),
          lb(Ne, "touchcancel", ua),
          lb(Ke, "touchstart", ua),
          jb(lb, Ne, "pointerdown,touchstart,mousedown", sa),
          jb(lb, Ne, "pointerup,touchend,mouseup", ta),
          s.kill(),
          Da(lb);
        for (var e = 0; e < Oe.length; e += 3)
          mb(lb, Oe[e], Oe[e + 1]), mb(lb, Oe[e], Oe[e + 2]);
      }),
      (ScrollTrigger.enable = function enable() {
        if (
          ((je = window),
          (Ne = document),
          (Ve = Ne.documentElement),
          (Ke = Ne.body),
          Xe &&
            ((We = Xe.utils.toArray),
            (qe = Xe.utils.clamp),
            (et = Xe.core.suppressOverwrites || ua),
            Xe.core.globals("ScrollTrigger", ScrollTrigger),
            Ke))
        ) {
          (lt = 1),
            (ScrollTrigger.isTouch =
              je.matchMedia &&
              je.matchMedia("(hover: none), (pointer: coarse)").matches
                ? 1
                : "ontouchstart" in je ||
                  0 < navigator.maxTouchPoints ||
                  0 < navigator.msMaxTouchPoints
                ? 2
                : 0),
            (a = [je, Ne, Ve, Ke]),
            (m = je.innerHeight),
            (S = je.innerWidth),
            w.register(Xe),
            kb(Ne, "scroll", xb);
          var e,
            t,
            r = Ke.style,
            n = r.borderTopStyle;
          for (
            r.borderTopStyle = "solid",
              e = xt(Ke),
              Le.m = Math.round(e.top + Le.sc()) || 0,
              Re.m = Math.round(e.left + Re.sc()) || 0,
              n ? (r.borderTopStyle = n) : r.removeProperty("border-top-style"),
              l = setInterval(wb, 250),
              Xe.delayedCall(0.5, function () {
                return (ot = 0);
              }),
              kb(Ne, "touchcancel", ua),
              kb(Ke, "touchstart", ua),
              jb(kb, Ne, "pointerdown,touchstart,mousedown", sa),
              jb(kb, Ne, "pointerup,touchend,mouseup", ta),
              c = Xe.utils.checkPrefix("transform"),
              Q.push(c),
              o = at(),
              s = Xe.delayedCall(0.2, q).pause(),
              g = [
                Ne,
                "visibilitychange",
                function () {
                  var e = je.innerWidth,
                    t = je.innerHeight;
                  Ne.hidden ? ((f = e), (d = t)) : (f === e && d === t) || yb();
                },
                Ne,
                "DOMContentLoaded",
                q,
                je,
                "load",
                q,
                je,
                "resize",
                yb,
              ],
              Da(kb),
              _t.forEach(function (e) {
                return e.enable(0, 1);
              }),
              t = 0;
            t < Oe.length;
            t += 3
          )
            mb(lb, Oe[t], Oe[t + 1]), mb(lb, Oe[t], Oe[t + 2]);
        }
      }),
      (ScrollTrigger.config = function config(e) {
        "limitCallbacks" in e && (tt = !!e.limitCallbacks);
        var t = e.syncInterval;
        (t && clearInterval(l)) || ((l = t) && setInterval(wb, t)),
          "ignoreMobileResize" in e &&
            (v = 1 === ScrollTrigger.isTouch && e.ignoreMobileResize),
          "autoRefreshEvents" in e &&
            (Da(lb) || Da(kb, e.autoRefreshEvents || "none"),
            (h = -1 === (e.autoRefreshEvents + "").indexOf("resize")));
      }),
      (ScrollTrigger.scrollerProxy = function scrollerProxy(e, t) {
        var r = H(e),
          n = Oe.indexOf(r),
          i = ya(r);
        ~n && Oe.splice(n, i ? 6 : 2),
          t && (i ? Ie.unshift(je, t, Ke, t, Ve, t) : Ie.unshift(r, t));
      }),
      (ScrollTrigger.matchMedia = function matchMedia(e) {
        var t, r, n, i, o;
        for (r in e)
          (n = B.indexOf(r)),
            (i = e[r]),
            "all" === (rt = r)
              ? i()
              : (t = je.matchMedia(r)) &&
                (t.matches && (o = i()),
                ~n
                  ? ((B[n + 1] = Ja(B[n + 1], i)), (B[n + 2] = Ja(B[n + 2], o)))
                  : ((n = B.length),
                    B.push(r, i, o),
                    t.addListener
                      ? t.addListener(Eb)
                      : t.addEventListener("change", Eb)),
                (B[n + 3] = t.matches)),
            (rt = 0);
        return B;
      }),
      (ScrollTrigger.clearMatchMedia = function clearMatchMedia(e) {
        e || (B.length = 0), 0 <= (e = B.indexOf(e)) && B.splice(e, 4);
      }),
      (ScrollTrigger.isInViewport = function isInViewport(e, t, r) {
        var n = (Ea(e) ? H(e) : e).getBoundingClientRect(),
          i = n[r ? ut : ft] * t || 0;
        return r
          ? 0 < n.right - i && n.left + i < je.innerWidth
          : 0 < n.bottom - i && n.top + i < je.innerHeight;
      }),
      (ScrollTrigger.positionInViewport = function positionInViewport(e, t, r) {
        Ea(e) && (e = H(e));
        var n = e.getBoundingClientRect(),
          i = n[r ? ut : ft],
          o =
            null == t
              ? i / 2
              : t in F
              ? F[t] * i
              : ~t.indexOf("%")
              ? (parseFloat(t) * i) / 100
              : parseFloat(t) || 0;
        return r ? (n.left + o) / je.innerWidth : (n.top + o) / je.innerHeight;
      }),
      ScrollTrigger);
  function ScrollTrigger(e, t) {
    o ||
      ScrollTrigger.register(Xe) ||
      console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
      this.init(e, t);
  }
  (ne.version = "3.10.0"),
    (ne.saveStyles = function (e) {
      return e
        ? We(e).forEach(function (e) {
            if (e && e.style) {
              var t = N.indexOf(e);
              0 <= t && N.splice(t, 5),
                N.push(
                  e,
                  e.style.cssText,
                  e.getBBox && e.getAttribute("transform"),
                  Xe.core.getCache(e),
                  rt
                );
            }
          })
        : N;
    }),
    (ne.revert = function (e, t) {
      return G(!e, t);
    }),
    (ne.create = function (e, t) {
      return new ne(e, t);
    }),
    (ne.refresh = function (e) {
      return e ? yb() : (o || ne.register()) && q(!0);
    }),
    (ne.update = Z),
    (ne.clearScrollMemory = Kb),
    (ne.maxScroll = function (e, t) {
      return Ca(e, t ? Re : Le);
    }),
    (ne.getScrollFunc = function (e, t) {
      return I(H(e), t ? Re : Le);
    }),
    (ne.getById = function (e) {
      return Tt[e];
    }),
    (ne.getAll = function () {
      return _t.filter(function (e) {
        return "ScrollSmoother" !== e.vars.id;
      });
    }),
    (ne.isScrolling = function () {
      return !!st;
    }),
    (ne.snapDirectional = hb),
    (ne.addEventListener = function (e, t) {
      var r = R[e] || (R[e] = []);
      ~r.indexOf(t) || r.push(t);
    }),
    (ne.removeEventListener = function (e, t) {
      var r = R[e],
        n = r && r.indexOf(t);
      0 <= n && r.splice(n, 1);
    }),
    (ne.batch = function (e, t) {
      function Nn(e, t) {
        var r = [],
          n = [],
          i = Xe.delayedCall(o, function () {
            t(r, n), (r = []), (n = []);
          }).pause();
        return function (e) {
          r.length || i.restart(!0),
            r.push(e.trigger),
            n.push(e),
            a <= r.length && i.progress(1);
        };
      }
      var r,
        n = [],
        i = {},
        o = t.interval || 0.016,
        a = t.batchMax || 1e9;
      for (r in t)
        i[r] =
          "on" === r.substr(0, 2) && Fa(t[r]) && "onRefreshInit" !== r
            ? Nn(0, t[r])
            : t[r];
      return (
        Fa(a) &&
          ((a = a()),
          kb(ne, "refresh", function () {
            return (a = t.batchMax());
          })),
        We(e).forEach(function (e) {
          var t = {};
          for (r in i) t[r] = i[r];
          (t.trigger = e), n.push(ne.create(t));
        }),
        n
      );
    });
  function ec(e, t, r, n) {
    return (
      n < t ? e(n) : t < 0 && e(0),
      n < r ? (n - t) / (r - t) : r < 0 ? t / (t - r) : 1
    );
  }
  function fc(e) {
    !0 === e
      ? (Ke.style.removeProperty("touch-action"),
        Ve.style.removeProperty("touch-action"))
      : (Ke.style.touchAction = Ve.style.touchAction = e ? "pan-" + e : "none");
  }
  function gc(e) {
    function oo() {
      return (d = at());
    }
    function po() {
      return (n = !1);
    }
    function so() {
      (r = Ca(Ve, Le)), (m = qe(0, r)), f && (v = qe(0, Ca(Ve, Re))), (o = W);
    }
    function Ao() {
      so(),
        s.isActive() && s.vars.scrollY > r && s.resetTo("scrollY", Ca(Ve, Le));
    }
    Ha(e) || (e = {}),
      (e.preventDefault = e.isNormalizer = !0),
      e.type || (e.type = "wheel,touch"),
      (e.debounce = !!e.debounce),
      (e.id = e.id || "normalizer");
    var t,
      r,
      n,
      o,
      s,
      a,
      l,
      c,
      u,
      f = e.normalizeScrollX,
      i = e.momentum,
      d = 0,
      p = I(Ve, Le),
      g = I(Ve, Re),
      h = 1,
      b = Fa(i)
        ? i(t)
        : function () {
            return i || 2.8;
          },
      v = ua,
      m = ua,
      y = ne.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent);
    return (
      (e.ignoreCheck = function (e) {
        return (
          (y &&
            "touchmove" === e.type &&
            (function ignoreDrag() {
              if (n) return requestAnimationFrame(po), !0;
              n = !0;
            })()) ||
          1 < h ||
          t.isGesturing ||
          (e.touches && 1 < e.touches.length)
        );
      }),
      (e.onPress = function () {
        var e = h;
        (h = (je.visualViewport && je.visualViewport.scale) || 1),
          s.pause(),
          e !== h && fc(1 < h || (!f && "x")),
          (n = !1),
          (a = g()),
          (l = p()),
          so(),
          (o = W);
      }),
      (e.onRelease = e.onGestureStart =
        function (e, t) {
          var r = e.event,
            n = r.changedTouches ? r.changedTouches[0] : r;
          if (
            !t ||
            (Math.abs(e.x - e.startX) <= 3 && Math.abs(e.y - e.startY) <= 3)
          )
            Xe.delayedCall(0.05, function () {
              if (300 < at() - d && !r.defaultPrevented)
                if (r.target.click) r.target.click();
                else if (c.createEvent) {
                  var e = c.createEvent("MouseEvents");
                  e.initMouseEvent(
                    "click",
                    !0,
                    !0,
                    je,
                    1,
                    n.screenX,
                    n.screenY,
                    n.clientX,
                    n.clientY,
                    !1,
                    !1,
                    !1,
                    !1,
                    0,
                    null
                  ),
                    r.target.dispatchEvent(e);
                }
            }),
              u.restart(!0);
          else {
            var i,
              o,
              a = b();
            f &&
              ((o = (i = g()) + (0.05 * a * -e.velocityX) / 0.227 / h),
              (a *= ec(g, i, o, Ca(Ve, Re))),
              (s.vars.scrollX = v(o))),
              (o = (i = p()) + (0.05 * a * -e.velocityY) / 0.227 / h),
              (a *= ec(p, i, o, Ca(Ve, Le))),
              (s.vars.scrollY = m(o)),
              s.invalidate().duration(a).play(0.01);
          }
        }),
      (e.onWheel = function () {
        return s._ts && s.pause();
      }),
      (e.onChange = function (e, t, r, n, i) {
        W !== o && so(),
          t &&
            f &&
            g(v(n[2] === t ? a + (e.startX - e.x) / h : g() + t - n[1])),
          r && p(m(i[2] === r ? l + (e.startY - e.y) / h : p() + r - i[1])),
          Z();
      }),
      (e.onEnable = function (e) {
        fc(!f && "x"),
          kb(je, "resize", Ao),
          e.target.addEventListener("click", oo, { capture: !0 });
      }),
      (e.onDisable = function (e) {
        fc(!0), lb(je, "resize", Ao), lb(e.target, "click", oo);
      }),
      (t = new w(e)),
      (c = t.target.ownerDocument || Ne),
      (u = t._dc),
      (s = Xe.to(t, {
        ease: "power4",
        paused: !0,
        scrollX: f ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        onComplete: u.vars.onComplete,
      })),
      t
    );
  }
  (ne.sort = function (e) {
    return _t.sort(
      e ||
        function (e, t) {
          return (
            -1e6 * (e.vars.refreshPriority || 0) +
            e.start -
            (t.start + -1e6 * (t.vars.refreshPriority || 0))
          );
        }
    );
  }),
    (ne.observe = function (e) {
      return new w(e);
    }),
    (ne.normalizeScroll = function (e) {
      if (void 0 === e) return b;
      if (!0 === e && b) return b.enable();
      var t = e instanceof w;
      return (
        b && (!1 === e || (t && e !== b)) && b.kill(),
        e && !t && (e = gc(e)),
        (b = e && e.enable())
      );
    }),
    (ne.core = {
      _getVelocityProp: J,
      _scrollers: Oe,
      _proxies: Ie,
      bridge: {
        ss: function ss() {
          st || j("scrollStart"), (st = at());
        },
        ref: function ref() {
          return Ue;
        },
      },
    }),
    xa() && Xe.registerPlugin(ne),
    (e.ScrollTrigger = ne),
    (e.default = ne);
  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
  } else {
    delete e.default;
  }
});
