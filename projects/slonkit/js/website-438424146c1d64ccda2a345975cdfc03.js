function FastClick(e) {
        "use strict";
        var t, n = this;
        if (this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.layer = e, !e || !e.nodeType) throw new TypeError("Layer must be a document node");
        this.onClick = function() {
            return FastClick.prototype.onClick.apply(n, arguments)
        }, this.onMouse = function() {
            return FastClick.prototype.onMouse.apply(n, arguments)
        }, this.onTouchStart = function() {
            return FastClick.prototype.onTouchStart.apply(n, arguments)
        }, this.onTouchEnd = function() {
            return FastClick.prototype.onTouchEnd.apply(n, arguments)
        }, this.onTouchCancel = function() {
            return FastClick.prototype.onTouchCancel.apply(n, arguments)
        }, typeof window.ontouchstart != "undefined" && (this.deviceIsAndroid && (e.addEventListener("mouseover", this.onMouse, !0), e.addEventListener("mousedown", this.onMouse, !0), e.addEventListener("mouseup", this.onMouse, !0)), e.addEventListener("click", this.onClick, !0), e.addEventListener("touchstart", this.onTouchStart, !1), e.addEventListener("touchend", this.onTouchEnd, !1), e.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (e.removeEventListener = function(t, n, r) {
            var i = Node.prototype.removeEventListener;
            "click" === t ? i.call(e, t, n.hijacked || n, r) : i.call(e, t, n, r)
        }, e.addEventListener = function(t, n, r) {
            var i = Node.prototype.addEventListener;
            "click" === t ? i.call(e, t, n.hijacked || (n.hijacked = function(e) {
                e.propagationStopped || n(e)
            }), r) : i.call(e, t, n, r)
        }), typeof e.onclick == "function" && (t = e.onclick, e.addEventListener("click", function(e) {
            t(e)
        }, !1), e.onclick = null))
    }(function(e, t) {
        function n(e) {
            var t = e.length,
                n = ut.type(e);
            return ut.isWindow(e) ? !1 : e.nodeType === 1 && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }

        function r(e) {
            var t = Ct[e] = {};
            return ut.each(e.match(ct) || [], function(e, n) {
                t[n] = !0
            }), t
        }

        function i(e, n, r, i) {
            if (ut.acceptData(e)) {
                var o, a, s = ut.expando,
                    u = "string" == typeof n,
                    l = e.nodeType,
                    c = l ? ut.cache : e,
                    f = l ? e[s] : e[s] && s;
                if (f && c[f] && (i || c[f].data) || !u || r !== t) return f || (l ? e[s] = f = Z.pop() || ut.guid++ : f = s), c[f] || (c[f] = {}, l || (c[f].toJSON = ut.noop)), ("object" == typeof n || "function" == typeof n) && (i ? c[f] = ut.extend(c[f], n) : c[f].data = ut.extend(c[f].data, n)), o = c[f], i || (o.data || (o.data = {}), o = o.data), r !== t && (o[ut.camelCase(n)] = r), u ? (a = o[n], null == a && (a = o[ut.camelCase(n)])) : a = o, a
            }
        }

        function o(e, t, n) {
            if (ut.acceptData(e)) {
                var r, i, o, a = e.nodeType,
                    u = a ? ut.cache : e,
                    l = a ? e[ut.expando] : ut.expando;
                if (u[l]) {
                    if (t && (o = n ? u[l] : u[l].data)) {
                        ut.isArray(t) ? t = t.concat(ut.map(t, ut.camelCase)) : t in o ? t = [t] : (t = ut.camelCase(t), t = t in o ? [t] : t.split(" "));
                        for (r = 0, i = t.length; i > r; r++) delete o[t[r]];
                        if (!(n ? s : ut.isEmptyObject)(o)) return
                    }(n || (delete u[l].data, s(u[l]))) && (a ? ut.cleanData([e], !0) : ut.support.deleteExpando || u != u.window ? delete u[l] : u[l] = null)
                }
            }
        }

        function a(e, n, r) {
            if (r === t && e.nodeType === 1) {
                var i = "data-" + n.replace(Et, "-$1").toLowerCase();
                if (r = e.getAttribute(i), "string" == typeof r) {
                    try {
                        r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : kt.test(r) ? ut.parseJSON(r) : r
                    } catch (o) {}
                    ut.data(e, n, r)
                } else r = t
            }
            return r
        }

        function s(e) {
            var t;
            for (t in e)
                if (("data" !== t || !ut.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
            return !0
        }

        function u() {
            return !0
        }

        function l() {
            return !1
        }

        function c(e, t) {
            do e = e[t]; while (e && e.nodeType !== 1);
            return e
        }

        function f(e, t, n) {
            if (t = t || 0, ut.isFunction(t)) return ut.grep(e, function(e, r) {
                var i = !!t.call(e, r, e);
                return i === n
            });
            if (t.nodeType) return ut.grep(e, function(e) {
                return e === t === n
            });
            if ("string" == typeof t) {
                var r = ut.grep(e, function(e) {
                    return e.nodeType === 1
                });
                if (Wt.test(t)) return ut.filter(t, r, !n);
                t = ut.filter(t, r)
            }
            return ut.grep(e, function(e) {
                return ut.inArray(e, t) >= 0 === n
            })
        }

        function p(e) {
            var t = Ut.split("|"),
                n = e.createDocumentFragment();
            if (n.createElement)
                for (; t.length;) n.createElement(t.pop());
            return n
        }

        function d(e, t) {
            return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
        }

        function h(e) {
            var t = e.getAttributeNode("type");
            return e.type = (t && t.specified) + "/" + e.type, e
        }

        function g(e) {
            var t = on.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function m(e, t) {
            for (var n, r = 0;
                (n = e[r]) != null; r++) ut._data(n, "globalEval", !t || ut._data(t[r], "globalEval"))
        }

        function v(e, t) {
            if (t.nodeType === 1 && ut.hasData(e)) {
                var n, r, i, o = ut._data(e),
                    a = ut._data(t, o),
                    s = o.events;
                if (s) {
                    delete a.handle, a.events = {};
                    for (n in s)
                        for (r = 0, i = s[n].length; i > r; r++) ut.event.add(t, n, s[n][r])
                }
                a.data && (a.data = ut.extend({}, a.data))
            }
        }

        function y(e, t) {
            var n, r, i;
            if (t.nodeType === 1) {
                if (n = t.nodeName.toLowerCase(), !ut.support.noCloneEvent && t[ut.expando]) {
                    i = ut._data(t);
                    for (r in i.events) ut.removeEvent(t, r, i.handle);
                    t.removeAttribute(ut.expando)
                }
                "script" === n && t.text !== e.text ? (h(t).text = e.text, g(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ut.support.html5Clone && e.innerHTML && !ut.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && tn.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
            }
        }

        function b(e, n) {
            var r, i, o = 0,
                a = typeof e.getElementsByTagName !== Y ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== Y ? e.querySelectorAll(n || "*") : t;
            if (!a)
                for (a = [], r = e.childNodes || e;
                    (i = r[o]) != null; o++) !n || ut.nodeName(i, n) ? a.push(i) : ut.merge(a, b(i, n));
            return n === t || n && ut.nodeName(e, n) ? ut.merge([e], a) : a
        }

        function x(e) {
            tn.test(e.type) && (e.defaultChecked = e.checked)
        }

        function w(e, t) {
            if (t in e) return t;
            for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = En.length; i--;)
                if (t = En[i] + n, t in e) return t;
            return r
        }

        function T(e, t) {
            return e = t || e, ut.css(e, "display") === "none" || !ut.contains(e.ownerDocument, e)
        }

        function C(e, t) {
            for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++) r = e[a], r.style && (o[a] = ut._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), r.style.display === "" && T(r) && (o[a] = ut._data(r, "olddisplay", N(r.nodeName)))) : o[a] || (i = T(r), (n && "none" !== n || !i) && ut._data(r, "olddisplay", i ? n : ut.css(r, "display"))));
            for (a = 0; s > a; a++) r = e[a], r.style && (t && r.style.display !== "none" && r.style.display !== "" || (r.style.display = t ? o[a] || "" : "none"));
            return e
        }

        function k(e, t, n) {
            var r = yn.exec(t);
            return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
        }

        function E(e, t, n, r, i) {
            for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += ut.css(e, n + kn[o], !0, i)), r ? ("content" === n && (a -= ut.css(e, "padding" + kn[o], !0, i)), "margin" !== n && (a -= ut.css(e, "border" + kn[o] + "Width", !0, i))) : (a += ut.css(e, "padding" + kn[o], !0, i), "padding" !== n && (a += ut.css(e, "border" + kn[o] + "Width", !0, i)));
            return a
        }

        function S(e, t, n) {
            var r = !0,
                i = "width" === t ? e.offsetWidth : e.offsetHeight,
                o = fn(e),
                a = ut.support.boxSizing && ut.css(e, "boxSizing", !1, o) === "border-box";
            if (0 >= i || null == i) {
                if (i = pn(e, t, o), (0 > i || null == i) && (i = e.style[t]), bn.test(i)) return i;
                r = a && (ut.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
            }
            return i + E(e, t, n || (a ? "border" : "content"), r, o) + "px"
        }

        function N(e) {
            var t = V,
                n = wn[e];
            return n || (n = A(e, t), "none" !== n && n || (cn = (cn || ut("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (cn[0].contentWindow || cn[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = A(e, t), cn.detach()), wn[e] = n), n
        }

        function A(e, t) {
            var n = ut(t.createElement(e)).appendTo(t.body),
                r = ut.css(n[0], "display");
            return n.remove(), r
        }

        function L(e, t, n, r) {
            var i;
            if (ut.isArray(t)) ut.each(t, function(t, i) {
                n || Nn.test(e) ? r(e, i) : L(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
            });
            else if (n || ut.type(t) !== "object") r(e, t);
            else
                for (i in t) L(e + "[" + i + "]", t[i], n, r)
        }

        function D(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var r, i = 0,
                    o = t.toLowerCase().match(ct) || [];
                if (ut.isFunction(n))
                    for (; r = o[i++];) r[0] === "+" ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
            }
        }

        function j(e, t, n, r) {
            function i(s) {
                var u;
                return o[s] = !0, ut.each(e[s] || [], function(e, s) {
                    var l = s(t, n, r);
                    return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
                }), u
            }
            var o = {},
                a = e === Xn;
            return i(t.dataTypes[0]) || !o["*"] && i("*")
        }

        function H(e, n) {
            var r, i, o = ut.ajaxSettings.flatOptions || {};
            for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
            return r && ut.extend(!0, e, r), e
        }

        function O(e, n, r) {
            var i, o, a, s, u = e.contents,
                l = e.dataTypes,
                c = e.responseFields;
            for (s in c) s in r && (n[c[s]] = r[s]);
            for (; l[0] === "*";) l.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
            if (o)
                for (s in u)
                    if (u[s] && u[s].test(o)) {
                        l.unshift(s);
                        break
                    }
            if (l[0] in r) a = l[0];
            else {
                for (s in r) {
                    if (!l[0] || e.converters[s + " " + l[0]]) {
                        a = s;
                        break
                    }
                    i || (i = s)
                }
                a = a || i
            }
            return a ? (a !== l[0] && l.unshift(a), r[a]) : void 0
        }

        function M(e, t) {
            var n, r, i, o, a = {},
                s = 0,
                u = e.dataTypes.slice(),
                l = u[0];
            if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), u[1])
                for (i in e.converters) a[i.toLowerCase()] = e.converters[i];
            for (; r = u[++s];)
                if ("*" !== r) {
                    if ("*" !== l && l !== r) {
                        if (i = a[l + " " + r] || a["* " + r], !i)
                            for (n in a)
                                if (o = n.split(" "), o[1] === r && (i = a[l + " " + o[0]] || a["* " + o[0]])) {
                                    i === !0 ? i = a[n] : a[n] !== !0 && (r = o[0], u.splice(s--, 0, r));
                                    break
                                }
                        if (i !== !0)
                            if (i && e["throws"]) t = i(t);
                            else try {
                                t = i(t)
                            } catch (c) {
                                return {
                                    state: "parsererror",
                                    error: i ? c : "No conversion from " + l + " to " + r
                                }
                            }
                    }
                    l = r
                }
            return {
                state: "success",
                data: t
            }
        }

        function F() {
            try {
                return new e.XMLHttpRequest
            } catch (t) {}
        }

        function $() {
            try {
                return new e.ActiveXObject("Microsoft.XMLHTTP")
            } catch (t) {}
        }

        function _() {
            return setTimeout(function() {
                Zn = t
            }), Zn = ut.now()
        }

        function q(e, t) {
            ut.each(t, function(t, n) {
                for (var r = (or[t] || []).concat(or["*"]), i = 0, o = r.length; o > i; i++)
                    if (r[i].call(e, t, n)) return
            })
        }

        function I(e, t, n) {
            var r, i, o = 0,
                a = ir.length,
                s = ut.Deferred().always(function() {
                    delete u.elem
                }),
                u = function() {
                    if (i) return !1;
                    for (var t = Zn || _(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; u > a; a++) l.tweens[a].run(o);
                    return s.notifyWith(e, [l, o, n]), 1 > o && u ? n : (s.resolveWith(e, [l]), !1)
                },
                l = s.promise({
                    elem: e,
                    props: ut.extend({}, t),
                    opts: ut.extend(!0, {
                        specialEasing: {}
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: Zn || _(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var r = ut.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                        return l.tweens.push(r), r
                    },
                    stop: function(t) {
                        var n = 0,
                            r = t ? l.tweens.length : 0;
                        if (i) return this;
                        for (i = !0; r > n; n++) l.tweens[n].run(1);
                        return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this
                    }
                }),
                c = l.props;
            for (P(c, l.opts.specialEasing); a > o; o++)
                if (r = ir[o].call(l, e, c, l.opts)) return r;
            return q(l, c), ut.isFunction(l.opts.start) && l.opts.start.call(e, l), ut.fx.timer(ut.extend(u, {
                elem: e,
                anim: l,
                queue: l.opts.queue
            })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
        }

        function P(e, t) {
            var n, r, i, o, a;
            for (i in e)
                if (r = ut.camelCase(i), o = t[r], n = e[i], ut.isArray(n) && (o = n[1], n = e[i] = n[0]), i !== r && (e[r] = n, delete e[i]), a = ut.cssHooks[r], a && "expand" in a) {
                    n = a.expand(n), delete e[r];
                    for (i in n) i in e || (e[i] = n[i], t[i] = o)
                } else t[r] = o
        }

        function R(e, t, n) {
            var r, i, o, a, s, u, l, c, f, p = this,
                d = e.style,
                h = {},
                g = [],
                m = e.nodeType && T(e);
            n.queue || (c = ut._queueHooks(e, "fx"), c.unqueued == null && (c.unqueued = 0, f = c.empty.fire, c.empty.fire = function() {
                c.unqueued || f()
            }), c.unqueued++, p.always(function() {
                p.always(function() {
                    c.unqueued--, ut.queue(e, "fx").length || c.empty.fire()
                })
            })), e.nodeType === 1 && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], ut.css(e, "display") === "inline" && ut.css(e, "float") === "none" && (ut.support.inlineBlockNeedsLayout && N(e.nodeName) !== "inline" ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", ut.support.shrinkWrapBlocks || p.always(function() {
                d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
            }));
            for (i in t)
                if (a = t[i], tr.exec(a)) {
                    if (delete t[i], u = u || "toggle" === a, a === (m ? "hide" : "show")) continue;
                    g.push(i)
                }
            if (o = g.length) {
                s = ut._data(e, "fxshow") || ut._data(e, "fxshow", {}), "hidden" in s && (m = s.hidden), u && (s.hidden = !m), m ? ut(e).show() : p.done(function() {
                    ut(e).hide()
                }), p.done(function() {
                    var t;
                    ut._removeData(e, "fxshow");
                    for (t in h) ut.style(e, t, h[t])
                });
                for (i = 0; o > i; i++) r = g[i], l = p.createTween(r, m ? s[r] : 0), h[r] = s[r] || ut.style(e, r), r in s || (s[r] = l.start, m && (l.end = l.start, l.start = "width" === r || "height" === r ? 1 : 0))
            }
        }

        function B(e, t, n, r, i) {
            return new B.prototype.init(e, t, n, r, i)
        }

        function W(e, t) {
            var n, r = {
                    height: e
                },
                i = 0;
            for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = kn[i], r["margin" + n] = r["padding" + n] = e;
            return t && (r.opacity = r.width = e), r
        }

        function X(e) {
            return ut.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1
        }
        var z, U, Y = typeof t,
            V = e.document,
            J = e.location,
            G = e.jQuery,
            Q = e.$,
            K = {},
            Z = [],
            et = "1.9.1",
            tt = Z.concat,
            nt = Z.push,
            rt = Z.slice,
            it = Z.indexOf,
            ot = K.toString,
            at = K.hasOwnProperty,
            st = et.trim,
            ut = function(e, t) {
                return new ut.fn.init(e, t, U)
            },
            lt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            ct = /\S+/g,
            ft = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            pt = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            dt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            ht = /^[\],:{}\s]*$/,
            gt = /(?:^|:|,)(?:\s*\[)+/g,
            mt = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
            vt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
            yt = /^-ms-/,
            bt = /-([\da-z])/gi,
            xt = function(e, t) {
                return t.toUpperCase()
            },
            wt = function(e) {
                (V.addEventListener || e.type === "load" || V.readyState === "complete") && (Tt(), ut.ready())
            },
            Tt = function() {
                V.addEventListener ? (V.removeEventListener("DOMContentLoaded", wt, !1), e.removeEventListener("load", wt, !1)) : (V.detachEvent("onreadystatechange", wt), e.detachEvent("onload", wt))
            };
        ut.fn = ut.prototype = {
            jquery: et,
            constructor: ut,
            init: function(e, n, r) {
                var i, o;
                if (!e) return this;
                if ("string" == typeof e) {
                    if (i = e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3 ? [null, e, null] : pt.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                    if (i[1]) {
                        if (n = n instanceof ut ? n[0] : n, ut.merge(this, ut.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : V, !0)), dt.test(i[1]) && ut.isPlainObject(n))
                            for (i in n) ut.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                        return this
                    }
                    if (o = V.getElementById(i[2]), o && o.parentNode) {
                        if (o.id !== i[2]) return r.find(e);
                        this.length = 1, this[0] = o
                    }
                    return this.context = V, this.selector = e, this
                }
                return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ut.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), ut.makeArray(e, this))
            },
            selector: "",
            length: 0,
            size: function() {
                return this.length
            },
            toArray: function() {
                return rt.call(this)
            },
            get: function(e) {
                return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
            },
            pushStack: function(e) {
                var t = ut.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function(e, t) {
                return ut.each(this, e, t)
            },
            ready: function(e) {
                return ut.ready.promise().done(e), this
            },
            slice: function() {
                return this.pushStack(rt.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (0 > e ? t : 0);
                return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
            },
            map: function(e) {
                return this.pushStack(ut.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: nt,
            sort: [].sort,
            splice: [].splice
        }, ut.fn.init.prototype = ut.fn, ut.extend = ut.fn.extend = function() {
            var e, n, r, i, o, a, s = arguments[0] || {},
                u = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, u = 2), "object" == typeof s || ut.isFunction(s) || (s = {}), l === u && (s = this, --u); l > u; u++)
                if ((o = arguments[u]) != null)
                    for (i in o) e = s[i], r = o[i], s !== r && (c && r && (ut.isPlainObject(r) || (n = ut.isArray(r))) ? (n ? (n = !1, a = e && ut.isArray(e) ? e : []) : a = e && ut.isPlainObject(e) ? e : {}, s[i] = ut.extend(c, a, r)) : r !== t && (s[i] = r));
            return s
        }, ut.extend({
            noConflict: function(t) {
                return e.$ === ut && (e.$ = Q), t && e.jQuery === ut && (e.jQuery = G), ut
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? ut.readyWait++ : ut.ready(!0)
            },
            ready: function(e) {
                if (e === !0 ? !--ut.readyWait : !ut.isReady) {
                    if (!V.body) return setTimeout(ut.ready);
                    ut.isReady = !0, e !== !0 && --ut.readyWait > 0 || (z.resolveWith(V, [ut]), ut.fn.trigger && ut(V).trigger("ready").off("ready"))
                }
            },
            isFunction: function(e) {
                return ut.type(e) === "function"
            },
            isArray: Array.isArray || function(e) {
                return ut.type(e) === "array"
            },
            isWindow: function(e) {
                return null != e && e == e.window
            },
            isNumeric: function(e) {
                return !isNaN(parseFloat(e)) && isFinite(e)
            },
            type: function(e) {
                return null == e ? String(e) : "object" == typeof e || "function" == typeof e ? K[ot.call(e)] || "object" : typeof e
            },
            isPlainObject: function(e) {
                if (!e || ut.type(e) !== "object" || e.nodeType || ut.isWindow(e)) return !1;
                try {
                    if (e.constructor && !at.call(e, "constructor") && !at.call(e.constructor.prototype, "isPrototypeOf")) return !1
                } catch (n) {
                    return !1
                }
                var r;
                for (r in e);
                return r === t || at.call(e, r)
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            error: function(e) {
                throw new Error(e)
            },
            parseHTML: function(e, t, n) {
                if (!e || "string" != typeof e) return null;
                "boolean" == typeof t && (n = t, t = !1), t = t || V;
                var r = dt.exec(e),
                    i = !n && [];
                return r ? [t.createElement(r[1])] : (r = ut.buildFragment([e], t, i), i && ut(i).remove(), ut.merge([], r.childNodes))
            },
            parseJSON: function(t) {
                return e.JSON && e.JSON.parse ? e.JSON.parse(t) : null === t ? t : "string" == typeof t && (t = ut.trim(t), t && ht.test(t.replace(mt, "@").replace(vt, "]").replace(gt, ""))) ? new Function("return " + t)() : (ut.error("Invalid JSON: " + t), void 0)
            },
            parseXML: function(n) {
                var r, i;
                if (!n || "string" != typeof n) return null;
                try {
                    e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
                } catch (o) {
                    r = t
                }
                return r && r.documentElement && !r.getElementsByTagName("parsererror").length || ut.error("Invalid XML: " + n), r
            },
            noop: function() {},
            globalEval: function(t) {
                t && ut.trim(t) && (e.execScript || function(t) {
                    e.eval.call(e, t)
                })(t)
            },
            camelCase: function(e) {
                return e.replace(yt, "ms-").replace(bt, xt)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t, r) {
                var i, o = 0,
                    a = e.length,
                    s = n(e);
                if (r) {
                    if (s)
                        for (; a > o && (i = t.apply(e[o], r), i !== !1); o++);
                    else
                        for (o in e)
                            if (i = t.apply(e[o], r), i === !1) break
                } else if (s)
                    for (; a > o && (i = t.call(e[o], o, e[o]), i !== !1); o++);
                else
                    for (o in e)
                        if (i = t.call(e[o], o, e[o]), i === !1) break; return e
            },
            trim: st && !st.call("﻿ ") ? function(e) {
                return null == e ? "" : st.call(e)
            } : function(e) {
                return null == e ? "" : (e + "").replace(ft, "")
            },
            makeArray: function(e, t) {
                var r = t || [];
                return null != e && (n(Object(e)) ? ut.merge(r, "string" == typeof e ? [e] : e) : nt.call(r, e)), r
            },
            inArray: function(e, t, n) {
                var r;
                if (t) {
                    if (it) return it.call(t, e, n);
                    for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                        if (n in t && t[n] === e) return n
                }
                return -1
            },
            merge: function(e, n) {
                var r = n.length,
                    i = e.length,
                    o = 0;
                if ("number" == typeof r)
                    for (; r > o; o++) e[i++] = n[o];
                else
                    for (; n[o] !== t;) e[i++] = n[o++];
                return e.length = i, e
            },
            grep: function(e, t, n) {
                var r, i = [],
                    o = 0,
                    a = e.length;
                for (n = !!n; a > o; o++) r = !!t(e[o], o), n !== r && i.push(e[o]);
                return i
            },
            map: function(e, t, r) {
                var i, o = 0,
                    a = e.length,
                    s = n(e),
                    u = [];
                if (s)
                    for (; a > o; o++) i = t(e[o], o, r), null != i && (u[u.length] = i);
                else
                    for (o in e) i = t(e[o], o, r), null != i && (u[u.length] = i);
                return tt.apply([], u)
            },
            guid: 1,
            proxy: function(e, n) {
                var r, i, o;
                return "string" == typeof n && (o = e[n], n = e, e = o), ut.isFunction(e) ? (r = rt.call(arguments, 2), i = function() {
                    return e.apply(n || this, r.concat(rt.call(arguments)))
                }, i.guid = e.guid = e.guid || ut.guid++, i) : t
            },
            access: function(e, n, r, i, o, a, s) {
                var u = 0,
                    l = e.length,
                    c = null == r;
                if (ut.type(r) === "object") {
                    o = !0;
                    for (u in r) ut.access(e, n, u, r[u], !0, a, s)
                } else if (i !== t && (o = !0, ut.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function(e, t, n) {
                        return c.call(ut(e), n)
                    })), n))
                    for (; l > u; u++) n(e[u], r, s ? i : i.call(e[u], u, n(e[u], r)));
                return o ? e : c ? n.call(e) : l ? n(e[0], r) : a
            },
            now: function() {
                return (new Date).getTime()
            }
        }), ut.ready.promise = function(t) {
            if (!z)
                if (z = ut.Deferred(), V.readyState === "complete") setTimeout(ut.ready);
                else if (V.addEventListener) V.addEventListener("DOMContentLoaded", wt, !1), e.addEventListener("load", wt, !1);
            else {
                V.attachEvent("onreadystatechange", wt), e.attachEvent("onload", wt);
                var n = !1;
                try {
                    n = e.frameElement == null && V.documentElement
                } catch (r) {}
                n && n.doScroll && function i() {
                    if (!ut.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (e) {
                            return setTimeout(i, 50)
                        }
                        Tt(), ut.ready()
                    }
                }()
            }
            return z.promise(t)
        }, ut.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
            K["[object " + t + "]"] = t.toLowerCase()
        }), U = ut(V);
        var Ct = {};
        ut.Callbacks = function(e) {
            e = "string" == typeof e ? Ct[e] || r(e) : ut.extend({}, e);
            var n, i, o, a, s, u, l = [],
                c = !e.once && [],
                f = function(t) {
                    for (i = e.memory && t, o = !0, s = u || 0, u = 0, a = l.length, n = !0; l && a > s; s++)
                        if (l[s].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                            i = !1;
                            break
                        }
                    n = !1, l && (c ? c.length && f(c.shift()) : i ? l = [] : p.disable())
                },
                p = {
                    add: function() {
                        if (l) {
                            var t = l.length;
                            (function r(t) {
                                ut.each(t, function(t, n) {
                                    var i = ut.type(n);
                                    "function" === i ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== i && r(n)
                                })
                            })(arguments), n ? a = l.length : i && (u = t, f(i))
                        }
                        return this
                    },
                    remove: function() {
                        return l && ut.each(arguments, function(e, t) {
                            for (var r;
                                (r = ut.inArray(t, l, r)) > -1;) l.splice(r, 1), n && (a >= r && a--, s >= r && s--)
                        }), this
                    },
                    has: function(e) {
                        return e ? ut.inArray(e, l) > -1 : !(!l || !l.length)
                    },
                    empty: function() {
                        return l = [], this
                    },
                    disable: function() {
                        return l = c = i = t, this
                    },
                    disabled: function() {
                        return !l
                    },
                    lock: function() {
                        return c = t, i || p.disable(), this
                    },
                    locked: function() {
                        return !c
                    },
                    fireWith: function(e, t) {
                        return t = t || [], t = [e, t.slice ? t.slice() : t], !l || o && !c || (n ? c.push(t) : f(t)), this
                    },
                    fire: function() {
                        return p.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!o
                    }
                };
            return p
        }, ut.extend({
            Deferred: function(e) {
                var t = [
                        ["resolve", "done", ut.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", ut.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", ut.Callbacks("memory")]
                    ],
                    n = "pending",
                    r = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return i.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var e = arguments;
                            return ut.Deferred(function(n) {
                                ut.each(t, function(t, o) {
                                    var a = o[0],
                                        s = ut.isFunction(e[t]) && e[t];
                                    i[o[1]](function() {
                                        var e = s && s.apply(this, arguments);
                                        e && ut.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? ut.extend(e, r) : r
                        }
                    },
                    i = {};
                return r.pipe = r.then, ut.each(t, function(e, o) {
                    var a = o[2],
                        s = o[3];
                    r[o[1]] = a.add, s && a.add(function() {
                        n = s
                    }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                        return i[o[0] + "With"](this === i ? r : this, arguments), this
                    }, i[o[0] + "With"] = a.fireWith
                }), r.promise(i), e && e.call(i, i), i
            },
            when: function(e) {
                var t, n, r, i = 0,
                    o = rt.call(arguments),
                    a = o.length,
                    s = 1 !== a || e && ut.isFunction(e.promise) ? a : 0,
                    u = 1 === s ? e : ut.Deferred(),
                    l = function(e, n, r) {
                        return function(i) {
                            n[e] = this, r[e] = arguments.length > 1 ? rt.call(arguments) : i, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
                        }
                    };
                if (a > 1)
                    for (t = new Array(a), n = new Array(a), r = new Array(a); a > i; i++) o[i] && ut.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --s;
                return s || u.resolveWith(r, o), u.promise()
            }
        }), ut.support = function() {
            var t, n, r, i, o, a, s, u, l, c, f = V.createElement("div");
            if (f.setAttribute("className", "t"), f.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = f.getElementsByTagName("*"), r = f.getElementsByTagName("a")[0], !n || !r || !n.length) return {};
            o = V.createElement("select"), s = o.appendChild(V.createElement("option")), i = f.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t = {
                getSetAttribute: f.className !== "t",
                leadingWhitespace: f.firstChild.nodeType === 3,
                tbody: !f.getElementsByTagName("tbody").length,
                htmlSerialize: !!f.getElementsByTagName("link").length,
                style: /top/.test(r.getAttribute("style")),
                hrefNormalized: r.getAttribute("href") === "/a",
                opacity: /^0.5/.test(r.style.opacity),
                cssFloat: !!r.style.cssFloat,
                checkOn: !!i.value,
                optSelected: s.selected,
                enctype: !!V.createElement("form").enctype,
                html5Clone: V.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
                boxModel: V.compatMode === "CSS1Compat",
                deleteExpando: !0,
                noCloneEvent: !0,
                inlineBlockNeedsLayout: !1,
                shrinkWrapBlocks: !1,
                reliableMarginRight: !0,
                boxSizingReliable: !0,
                pixelPosition: !1
            }, i.checked = !0, t.noCloneChecked = i.cloneNode(!0).checked, o.disabled = !0, t.optDisabled = !s.disabled;
            try {
                delete f.test
            } catch (p) {
                t.deleteExpando = !1
            }
            i = V.createElement("input"), i.setAttribute("value", ""), t.input = i.getAttribute("value") === "", i.value = "t", i.setAttribute("type", "radio"), t.radioValue = i.value === "t", i.setAttribute("checked", "t"), i.setAttribute("name", "t"), a = V.createDocumentFragment(), a.appendChild(i), t.appendChecked = i.checked, t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, f.attachEvent && (f.attachEvent("onclick", function() {
                t.noCloneEvent = !1
            }), f.cloneNode(!0).click());
            for (c in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) f.setAttribute(u = "on" + c, "t"), t[c + "Bubbles"] = u in e || f.attributes[u].expando === !1;
            return f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = f.style.backgroundClip === "content-box", ut(function() {
                var n, r, i, o = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                    a = V.getElementsByTagName("body")[0];
                a && (n = V.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(n).appendChild(f), f.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = f.getElementsByTagName("td"), i[0].style.cssText = "padding:0;margin:0;border:0;display:none", l = i[0].offsetHeight === 0, i[0].style.display = "", i[1].style.display = "none", t.reliableHiddenOffsets = l && i[0].offsetHeight === 0, f.innerHTML = "", f.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = f.offsetWidth === 4, t.doesNotIncludeMarginInBodyOffset = a.offsetTop !== 1, e.getComputedStyle && (t.pixelPosition = (e.getComputedStyle(f, null) || {}).top !== "1%", t.boxSizingReliable = (e.getComputedStyle(f, null) || {
                    width: "4px"
                }).width === "4px", r = f.appendChild(V.createElement("div")), r.style.cssText = f.style.cssText = o, r.style.marginRight = r.style.width = "0", f.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof f.style.zoom !== Y && (f.innerHTML = "", f.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = f.offsetWidth === 3, f.style.display = "block", f.innerHTML = "<div></div>", f.firstChild.style.width = "5px", t.shrinkWrapBlocks = f.offsetWidth !== 3, t.inlineBlockNeedsLayout && (a.style.zoom = 1)), a.removeChild(n), n = f = i = r = null)
            }), n = o = a = s = r = i = null, t
        }();
        var kt = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
            Et = /([A-Z])/g;
        ut.extend({
            cache: {},
            expando: "jQuery" + (et + Math.random()).replace(/\D/g, ""),
            noData: {
                embed: !0,
                object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
                applet: !0
            },
            hasData: function(e) {
                return e = e.nodeType ? ut.cache[e[ut.expando]] : e[ut.expando], !!e && !s(e)
            },
            data: function(e, t, n) {
                return i(e, t, n)
            },
            removeData: function(e, t) {
                return o(e, t)
            },
            _data: function(e, t, n) {
                return i(e, t, n, !0)
            },
            _removeData: function(e, t) {
                return o(e, t, !0)
            },
            acceptData: function(e) {
                if (e.nodeType && e.nodeType !== 1 && e.nodeType !== 9) return !1;
                var t = e.nodeName && ut.noData[e.nodeName.toLowerCase()];
                return !t || t !== !0 && e.getAttribute("classid") === t
            }
        }), ut.fn.extend({
            data: function(e, n) {
                var r, i, o = this[0],
                    s = 0,
                    u = null;
                if (e === t) {
                    if (this.length && (u = ut.data(o), o.nodeType === 1 && !ut._data(o, "parsedAttrs"))) {
                        for (r = o.attributes; s < r.length; s++) i = r[s].name, i.indexOf("data-") || (i = ut.camelCase(i.slice(5)), a(o, i, u[i]));
                        ut._data(o, "parsedAttrs", !0)
                    }
                    return u
                }
                return "object" == typeof e ? this.each(function() {
                    ut.data(this, e)
                }) : ut.access(this, function(n) {
                    return n === t ? o ? a(o, e, ut.data(o, e)) : null : (this.each(function() {
                        ut.data(this, e, n)
                    }), void 0)
                }, null, n, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each(function() {
                    ut.removeData(this, e)
                })
            }
        }), ut.extend({
            queue: function(e, t, n) {
                var r;
                return e ? (t = (t || "fx") + "queue", r = ut._data(e, t), n && (!r || ut.isArray(n) ? r = ut._data(e, t, ut.makeArray(n)) : r.push(n)), r || []) : void 0
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = ut.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    o = ut._queueHooks(e, t),
                    a = function() {
                        ut.dequeue(e, t)
                    };
                "inprogress" === i && (i = n.shift(), r--), o.cur = i, i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return ut._data(e, n) || ut._data(e, n, {
                    empty: ut.Callbacks("once memory").add(function() {
                        ut._removeData(e, t + "queue"), ut._removeData(e, n)
                    })
                })
            }
        }), ut.fn.extend({
            queue: function(e, n) {
                var r = 2;
                return "string" != typeof e && (n = e, e = "fx", r--), arguments.length < r ? ut.queue(this[0], e) : n === t ? this : this.each(function() {
                    var t = ut.queue(this, e, n);
                    ut._queueHooks(this, e), "fx" === e && t[0] !== "inprogress" && ut.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    ut.dequeue(this, e)
                })
            },
            delay: function(e, t) {
                return e = ut.fx ? ut.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                    var r = setTimeout(t, e);
                    n.stop = function() {
                        clearTimeout(r)
                    }
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, n) {
                var r, i = 1,
                    o = ut.Deferred(),
                    a = this,
                    s = this.length,
                    u = function() {
                        --i || o.resolveWith(a, [a])
                    };
                for ("string" != typeof e && (n = e, e = t), e = e || "fx"; s--;) r = ut._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(u));
                return u(), o.promise(n)
            }
        });
        var St, Nt, At = /[\t\r\n]/g,
            Lt = /\r/g,
            Dt = /^(?:input|select|textarea|button|object)$/i,
            jt = /^(?:a|area)$/i,
            Ht = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
            Ot = /^(?:checked|selected)$/i,
            Mt = ut.support.getSetAttribute,
            Ft = ut.support.input;
        ut.fn.extend({
            attr: function(e, t) {
                return ut.access(this, ut.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    ut.removeAttr(this, e)
                })
            },
            prop: function(e, t) {
                return ut.access(this, ut.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return e = ut.propFix[e] || e, this.each(function() {
                    try {
                        this[e] = t, delete this[e]
                    } catch (n) {}
                })
            },
            addClass: function(e) {
                var t, n, r, i, o, a = 0,
                    s = this.length,
                    u = "string" == typeof e && e;
                if (ut.isFunction(e)) return this.each(function(t) {
                    ut(this).addClass(e.call(this, t, this.className))
                });
                if (u)
                    for (t = (e || "").match(ct) || []; s > a; a++)
                        if (n = this[a], r = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(At, " ") : " ")) {
                            for (o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                            n.className = ut.trim(r)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, r, i, o, a = 0,
                    s = this.length,
                    u = arguments.length === 0 || "string" == typeof e && e;
                if (ut.isFunction(e)) return this.each(function(t) {
                    ut(this).removeClass(e.call(this, t, this.className))
                });
                if (u)
                    for (t = (e || "").match(ct) || []; s > a; a++)
                        if (n = this[a], r = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(At, " ") : "")) {
                            for (o = 0; i = t[o++];)
                                for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                            n.className = e ? ut.trim(r) : ""
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e,
                    r = "boolean" == typeof t;
                return ut.isFunction(e) ? this.each(function(n) {
                    ut(this).toggleClass(e.call(this, n, this.className, t), t)
                }) : this.each(function() {
                    if ("string" === n)
                        for (var i, o = 0, a = ut(this), s = t, u = e.match(ct) || []; i = u[o++];) s = r ? s : !a.hasClass(i), a[s ? "addClass" : "removeClass"](i);
                    else(n === Y || "boolean" === n) && (this.className && ut._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ut._data(this, "__className__") || "")
                })
            },
            hasClass: function(e) {
                for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                    if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(At, " ").indexOf(t) >= 0) return !0;
                return !1
            },
            val: function(e) {
                var n, r, i, o = this[0]; {
                    if (arguments.length) return i = ut.isFunction(e), this.each(function(n) {
                        var o, a = ut(this);
                        this.nodeType === 1 && (o = i ? e.call(this, n, a.val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : ut.isArray(o) && (o = ut.map(o, function(e) {
                            return null == e ? "" : e + ""
                        })), r = ut.valHooks[this.type] || ut.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o))
                    });
                    if (o) return r = ut.valHooks[o.type] || ut.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(Lt, "") : null == n ? "" : n)
                }
            }
        }), ut.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = e.attributes.value;
                        return !t || t.specified ? e.value : e.text
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, n, r = e.options, i = e.selectedIndex, o = e.type === "select-one" || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, u = 0 > i ? s : o ? i : 0; s > u; u++)
                            if (n = r[u], !(!n.selected && u !== i || (ut.support.optDisabled ? n.disabled : n.getAttribute("disabled") !== null) || n.parentNode.disabled && ut.nodeName(n.parentNode, "optgroup"))) {
                                if (t = ut(n).val(), o) return t;
                                a.push(t)
                            }
                        return a
                    },
                    set: function(e, t) {
                        var n = ut.makeArray(t);
                        return ut(e).find("option").each(function() {
                            this.selected = ut.inArray(ut(this).val(), n) >= 0
                        }), n.length || (e.selectedIndex = -1), n
                    }
                }
            },
            attr: function(e, n, r) {
                var i, o, a, s = e.nodeType;
                if (e && 3 !== s && 8 !== s && 2 !== s) return typeof e.getAttribute === Y ? ut.prop(e, n, r) : (o = 1 !== s || !ut.isXMLDoc(e), o && (n = n.toLowerCase(), i = ut.attrHooks[n] || (Ht.test(n) ? Nt : St)), r === t ? i && o && "get" in i && (a = i.get(e, n)) !== null ? a : (typeof e.getAttribute !== Y && (a = e.getAttribute(n)), null == a ? t : a) : null !== r ? i && o && "set" in i && (a = i.set(e, r, n)) !== t ? a : (e.setAttribute(n, r + ""), r) : (ut.removeAttr(e, n), void 0))
            },
            removeAttr: function(e, t) {
                var n, r, i = 0,
                    o = t && t.match(ct);
                if (o && e.nodeType === 1)
                    for (; n = o[i++];) r = ut.propFix[n] || n, Ht.test(n) ? !Mt && Ot.test(n) ? e[ut.camelCase("default-" + n)] = e[r] = !1 : e[r] = !1 : ut.attr(e, n, ""), e.removeAttribute(Mt ? n : r)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!ut.support.radioValue && "radio" === t && ut.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            propFix: {
                tabindex: "tabIndex",
                readonly: "readOnly",
                "for": "htmlFor",
                "class": "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder",
                contenteditable: "contentEditable"
            },
            prop: function(e, n, r) {
                var i, o, a, s = e.nodeType;
                if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !ut.isXMLDoc(e), a && (n = ut.propFix[n] || n, o = ut.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && (i = o.get(e, n)) !== null ? i : e[n]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var n = e.getAttributeNode("tabindex");
                        return n && n.specified ? parseInt(n.value, 10) : Dt.test(e.nodeName) || jt.test(e.nodeName) && e.href ? 0 : t
                    }
                }
            }
        }), Nt = {
            get: function(e, n) {
                var r = ut.prop(e, n),
                    i = "boolean" == typeof r && e.getAttribute(n),
                    o = "boolean" == typeof r ? Ft && Mt ? null != i : Ot.test(n) ? e[ut.camelCase("default-" + n)] : !!i : e.getAttributeNode(n);
                return o && o.value !== !1 ? n.toLowerCase() : t
            },
            set: function(e, t, n) {
                return t === !1 ? ut.removeAttr(e, n) : Ft && Mt || !Ot.test(n) ? e.setAttribute(!Mt && ut.propFix[n] || n, n) : e[ut.camelCase("default-" + n)] = e[n] = !0, n
            }
        }, Ft && Mt || (ut.attrHooks.value = {
            get: function(e, n) {
                var r = e.getAttributeNode(n);
                return ut.nodeName(e, "input") ? e.defaultValue : r && r.specified ? r.value : t
            },
            set: function(e, t, n) {
                return ut.nodeName(e, "input") ? (e.defaultValue = t, void 0) : St && St.set(e, t, n)
            }
        }), Mt || (St = ut.valHooks.button = {
            get: function(e, n) {
                var r = e.getAttributeNode(n);
                return r && ("id" === n || "name" === n || "coords" === n ? r.value !== "" : r.specified) ? r.value : t
            },
            set: function(e, n, r) {
                var i = e.getAttributeNode(r);
                return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
            }
        }, ut.attrHooks.contenteditable = {
            get: St.get,
            set: function(e, t, n) {
                St.set(e, "" === t ? !1 : t, n)
            }
        }, ut.each(["width", "height"], function(e, t) {
            ut.attrHooks[t] = ut.extend(ut.attrHooks[t], {
                set: function(e, n) {
                    return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
                }
            })
        })), ut.support.hrefNormalized || (ut.each(["href", "src", "width", "height"], function(e, n) {
            ut.attrHooks[n] = ut.extend(ut.attrHooks[n], {
                get: function(e) {
                    var r = e.getAttribute(n, 2);
                    return null == r ? t : r
                }
            })
        }), ut.each(["href", "src"], function(e, t) {
            ut.propHooks[t] = {
                get: function(e) {
                    return e.getAttribute(t, 4)
                }
            }
        })), ut.support.style || (ut.attrHooks.style = {
            get: function(e) {
                return e.style.cssText || t
            },
            set: function(e, t) {
                return e.style.cssText = t + ""
            }
        }), ut.support.optSelected || (ut.propHooks.selected = ut.extend(ut.propHooks.selected, {
            get: function(e) {
                var t = e.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
            }
        })), ut.support.enctype || (ut.propFix.enctype = "encoding"), ut.support.checkOn || ut.each(["radio", "checkbox"], function() {
            ut.valHooks[this] = {
                get: function(e) {
                    return e.getAttribute("value") === null ? "on" : e.value
                }
            }
        }), ut.each(["radio", "checkbox"], function() {
            ut.valHooks[this] = ut.extend(ut.valHooks[this], {
                set: function(e, t) {
                    return ut.isArray(t) ? e.checked = ut.inArray(ut(e).val(), t) >= 0 : void 0
                }
            })
        });
        var $t = /^(?:input|select|textarea)$/i,
            _t = /^key/,
            qt = /^(?:mouse|contextmenu)|click/,
            It = /^(?:focusinfocus|focusoutblur)$/,
            Pt = /^([^.]*)(?:\.(.+)|)$/;
        ut.event = {
                global: {},
                add: function(e, n, r, i, o) {
                    var a, s, u, l, c, f, p, d, h, g, m, v = ut._data(e);
                    if (v) {
                        for (r.handler && (l = r, r = l.handler, o = l.selector), r.guid || (r.guid = ut.guid++), (s = v.events) || (s = v.events = {}), (f = v.handle) || (f = v.handle = function(e) {
                                return typeof ut === Y || e && ut.event.triggered === e.type ? t : ut.event.dispatch.apply(f.elem, arguments)
                            }, f.elem = e), n = (n || "").match(ct) || [""], u = n.length; u--;) a = Pt.exec(n[u]) || [], h = m = a[1], g = (a[2] || "").split(".").sort(), c = ut.event.special[h] || {}, h = (o ? c.delegateType : c.bindType) || h, c = ut.event.special[h] || {}, p = ut.extend({
                            type: h,
                            origType: m,
                            data: i,
                            handler: r,
                            guid: r.guid,
                            selector: o,
                            needsContext: o && ut.expr.match.needsContext.test(o),
                            namespace: g.join(".")
                        }, l), (d = s[h]) || (d = s[h] = [], d.delegateCount = 0, c.setup && c.setup.call(e, i, g, f) !== !1 || (e.addEventListener ? e.addEventListener(h, f, !1) : e.attachEvent && e.attachEvent("on" + h, f))), c.add && (c.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), o ? d.splice(d.delegateCount++, 0, p) : d.push(p), ut.event.global[h] = !0;
                        e = null
                    }
                },
                remove: function(e, t, n, r, i) {
                    var o, a, s, u, l, c, f, p, d, h, g, m = ut.hasData(e) && ut._data(e);
                    if (m && (c = m.events)) {
                        for (t = (t || "").match(ct) || [""], l = t.length; l--;)
                            if (s = Pt.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                                for (f = ut.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, p = c[d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = p.length; o--;) a = p[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (p.splice(o, 1), a.selector && p.delegateCount--, f.remove && f.remove.call(e, a));
                                u && !p.length && (f.teardown && f.teardown.call(e, h, m.handle) !== !1 || ut.removeEvent(e, d, m.handle), delete c[d])
                            } else
                                for (d in c) ut.event.remove(e, d + t[l], n, r, !0);
                        ut.isEmptyObject(c) && (delete m.handle, ut._removeData(e, "events"))
                    }
                },
                trigger: function(n, r, i, o) {
                    var a, s, u, l, c, f, p, d = [i || V],
                        h = at.call(n, "type") ? n.type : n,
                        g = at.call(n, "namespace") ? n.namespace.split(".") : [];
                    if (u = f = i = i || V, i.nodeType !== 3 && i.nodeType !== 8 && !It.test(h + ut.event.triggered) && (h.indexOf(".") >= 0 && (g = h.split("."), h = g.shift(), g.sort()), s = h.indexOf(":") < 0 && "on" + h, n = n[ut.expando] ? n : new ut.Event(h, "object" == typeof n && n), n.isTrigger = !0, n.namespace = g.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : ut.makeArray(r, [n]), c = ut.event.special[h] || {}, o || !c.trigger || c.trigger.apply(i, r) !== !1)) {
                        if (!o && !c.noBubble && !ut.isWindow(i)) {
                            for (l = c.delegateType || h, It.test(l + h) || (u = u.parentNode); u; u = u.parentNode) d.push(u), f = u;
                            f === (i.ownerDocument || V) && d.push(f.defaultView || f.parentWindow || e)
                        }
                        for (p = 0;
                            (u = d[p++]) && !n.isPropagationStopped();) n.type = p > 1 ? l : c.bindType || h, a = (ut._data(u, "events") || {})[n.type] && ut._data(u, "handle"), a && a.apply(u, r), a = s && u[s], a && ut.acceptData(u) && a.apply && a.apply(u, r) === !1 && n.preventDefault();
                        if (n.type = h, !(o || n.isDefaultPrevented() || c._default && c._default.apply(i.ownerDocument, r) !== !1 || "click" === h && ut.nodeName(i, "a") || !ut.acceptData(i) || !s || !i[h] || ut.isWindow(i))) {
                            f = i[s], f && (i[s] = null), ut.event.triggered = h;
                            try {
                                i[h]()
                            } catch (m) {}
                            ut.event.triggered = t, f && (i[s] = f)
                        }
                        return n.result
                    }
                },
                dispatch: function(e) {
                    e = ut.event.fix(e);
                    var n, r, i, o, a, s = [],
                        u = rt.call(arguments),
                        l = (ut._data(this, "events") || {})[e.type] || [],
                        c = ut.event.special[e.type] || {};
                    if (u[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                        for (s = ut.event.handlers.call(this, e, l), n = 0;
                            (o = s[n++]) && !e.isPropagationStopped();)
                            for (e.currentTarget = o.elem, a = 0;
                                (i = o.handlers[a++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((ut.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, u), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                        return c.postDispatch && c.postDispatch.call(this, e), e.result
                    }
                },
                handlers: function(e, n) {
                    var r, i, o, a, s = [],
                        u = n.delegateCount,
                        l = e.target;
                    if (u && l.nodeType && (!e.button || e.type !== "click"))
                        for (; l != this; l = l.parentNode || this)
                            if (l.nodeType === 1 && (l.disabled !== !0 || e.type !== "click")) {
                                for (o = [], a = 0; u > a; a++) i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? ut(r, this).index(l) >= 0 : ut.find(r, this, null, [l]).length), o[r] && o.push(i);
                                o.length && s.push({
                                    elem: l,
                                    handlers: o
                                })
                            }
                    return u < n.length && s.push({
                        elem: this,
                        handlers: n.slice(u)
                    }), s
                },
                fix: function(e) {
                    if (e[ut.expando]) return e;
                    var t, n, r, i = e.type,
                        o = e,
                        a = this.fixHooks[i];
                    for (a || (this.fixHooks[i] = a = qt.test(i) ? this.mouseHooks : _t.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new ut.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
                    return e.target || (e.target = o.srcElement || V), e.target.nodeType === 3 && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
                },
                props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "),
                    filter: function(e, t) {
                        return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode), e
                    }
                },
                mouseHooks: {
                    props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function(e, n) {
                        var r, i, o, a = n.button,
                            s = n.fromElement;
                        return e.pageX == null && n.clientX != null && (i = e.target.ownerDocument || V, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement : s), e.which || a === t || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
                    }
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    click: {
                        trigger: function() {
                            return ut.nodeName(this, "input") && this.type === "checkbox" && this.click ? (this.click(), !1) : void 0
                        }
                    },
                    focus: {
                        trigger: function() {
                            if (this !== V.activeElement && this.focus) try {
                                return this.focus(), !1
                            } catch (e) {}
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function() {
                            return this === V.activeElement && this.blur ? (this.blur(), !1) : void 0
                        },
                        delegateType: "focusout"
                    },
                    beforeunload: {
                        postDispatch: function(e) {
                            e.result !== t && (e.originalEvent.returnValue = e.result)
                        }
                    }
                },
                simulate: function(e, t, n, r) {
                    var i = ut.extend(new ut.Event, n, {
                        type: e,
                        isSimulated: !0,
                        originalEvent: {}
                    });
                    r ? ut.event.trigger(i, null, t) : ut.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
                }
            }, ut.removeEvent = V.removeEventListener ? function(e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n, !1)
            } : function(e, t, n) {
                var r = "on" + t;
                e.detachEvent && (typeof e[r] === Y && (e[r] = null), e.detachEvent(r, n))
            }, ut.Event = function(e, t) {
                return this instanceof ut.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? u : l) : this.type = e, t && ut.extend(this, t), this.timeStamp = e && e.timeStamp || ut.now(), this[ut.expando] = !0, void 0) : new ut.Event(e, t)
            }, ut.Event.prototype = {
                isDefaultPrevented: l,
                isPropagationStopped: l,
                isImmediatePropagationStopped: l,
                preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = u, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
                },
                stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = u, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
                },
                stopImmediatePropagation: function() {
                    this.isImmediatePropagationStopped = u, this.stopPropagation()
                }
            }, ut.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            }, function(e, t) {
                ut.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function(e) {
                        var n, r = this,
                            i = e.relatedTarget,
                            o = e.handleObj;
                        return (!i || i !== r && !ut.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                    }
                }
            }), ut.support.submitBubbles || (ut.event.special.submit = {
                setup: function() {
                    return ut.nodeName(this, "form") ? !1 : (ut.event.add(this, "click._submit keypress._submit", function(e) {
                        var n = e.target,
                            r = ut.nodeName(n, "input") || ut.nodeName(n, "button") ? n.form : t;
                        r && !ut._data(r, "submitBubbles") && (ut.event.add(r, "submit._submit", function(e) {
                            e._submit_bubble = !0
                        }), ut._data(r, "submitBubbles", !0))
                    }), void 0)
                },
                postDispatch: function(e) {
                    e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ut.event.simulate("submit", this.parentNode, e, !0))
                },
                teardown: function() {
                    return ut.nodeName(this, "form") ? !1 : (ut.event.remove(this, "._submit"), void 0)
                }
            }), ut.support.changeBubbles || (ut.event.special.change = {
                setup: function() {
                    return $t.test(this.nodeName) ? ((this.type === "checkbox" || this.type === "radio") && (ut.event.add(this, "propertychange._change", function(e) {
                        e.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                    }), ut.event.add(this, "click._change", function(e) {
                        this._just_changed && !e.isTrigger && (this._just_changed = !1), ut.event.simulate("change", this, e, !0)
                    })), !1) : (ut.event.add(this, "beforeactivate._change", function(e) {
                        var t = e.target;
                        $t.test(t.nodeName) && !ut._data(t, "changeBubbles") && (ut.event.add(t, "change._change", function(e) {
                            !this.parentNode || e.isSimulated || e.isTrigger || ut.event.simulate("change", this.parentNode, e, !0)
                        }), ut._data(t, "changeBubbles", !0))
                    }), void 0)
                },
                handle: function(e) {
                    var t = e.target;
                    return this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox" ? e.handleObj.handler.apply(this, arguments) : void 0
                },
                teardown: function() {
                    return ut.event.remove(this, "._change"), !$t.test(this.nodeName)
                }
            }), ut.support.focusinBubbles || ut.each({
                focus: "focusin",
                blur: "focusout"
            }, function(e, t) {
                var n = 0,
                    r = function(e) {
                        ut.event.simulate(t, e.target, ut.event.fix(e), !0)
                    };
                ut.event.special[t] = {
                    setup: function() {
                        n++ === 0 && V.addEventListener(e, r, !0)
                    },
                    teardown: function() {
                        --n === 0 && V.removeEventListener(e, r, !0)
                    }
                }
            }), ut.fn.extend({
                on: function(e, n, r, i, o) {
                    var a, s;
                    if ("object" == typeof e) {
                        "string" != typeof n && (r = r || n, n = t);
                        for (a in e) this.on(a, n, r, e[a], o);
                        return this
                    }
                    if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = l;
                    else if (!i) return this;
                    return 1 === o && (s = i, i = function(e) {
                        return ut().off(e), s.apply(this, arguments)
                    }, i.guid = s.guid || (s.guid = ut.guid++)), this.each(function() {
                        ut.event.add(this, e, i, r, n)
                    })
                },
                one: function(e, t, n, r) {
                    return this.on(e, t, n, r, 1)
                },
                off: function(e, n, r) {
                    var i, o;
                    if (e && e.preventDefault && e.handleObj) return i = e.handleObj, ut(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                    if ("object" == typeof e) {
                        for (o in e) this.off(o, n, e[o]);
                        return this
                    }
                    return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = l), this.each(function() {
                        ut.event.remove(this, e, r, n)
                    })
                },
                bind: function(e, t, n) {
                    return this.on(e, null, t, n)
                },
                unbind: function(e, t) {
                    return this.off(e, null, t)
                },
                delegate: function(e, t, n, r) {
                    return this.on(t, e, n, r)
                },
                undelegate: function(e, t, n) {
                    return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
                },
                trigger: function(e, t) {
                    return this.each(function() {
                        ut.event.trigger(e, t, this)
                    })
                },
                triggerHandler: function(e, t) {
                    var n = this[0];
                    return n ? ut.event.trigger(e, t, n, !0) : void 0
                }
            }),


            function(e, t) {
                function n(e) {
                    return ht.test(e + "")
                }

                function r() {
                    var e, t = [];
                    return e = function(n, r) {
                        return t.push(n += " ") > k.cacheLength && delete e[t.shift()], e[n] = r
                    }
                }

                function i(e) {
                    return e[I] = !0, e
                }

                function o(e) {
                    var t = j.createElement("div");
                    try {
                        return e(t)
                    } catch (n) {
                        return !1
                    } finally {
                        t = null
                    }
                }

                function a(e, t, n, r) {
                    var i, o, a, s, u, l, c, d, h, g;
                    if ((t ? t.ownerDocument || t : P) !== j && D(t), t = t || j, n = n || [], !e || "string" != typeof e) return n;
                    if ((s = t.nodeType) !== 1 && 9 !== s) return [];
                    if (!O && !r) {
                        if (i = gt.exec(e))
                            if (a = i[1]) {
                                if (9 === s) {
                                    if (o = t.getElementById(a), !o || !o.parentNode) return n;
                                    if (o.id === a) return n.push(o), n
                                } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && _(t, o) && o.id === a) return n.push(o), n
                            } else {
                                if (i[2]) return Q.apply(n, K.call(t.getElementsByTagName(e), 0)), n;
                                if ((a = i[3]) && R.getByClassName && t.getElementsByClassName) return Q.apply(n, K.call(t.getElementsByClassName(a), 0)), n
                            }
                        if (R.qsa && !M.test(e)) {
                            if (c = !0, d = I, h = t, g = 9 === s && e, 1 === s && t.nodeName.toLowerCase() !== "object") {
                                for (l = f(e), (c = t.getAttribute("id")) ? d = c.replace(yt, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", u = l.length; u--;) l[u] = d + p(l[u]);
                                h = dt.test(e) && t.parentNode || t, g = l.join(",")
                            }
                            if (g) try {
                                return Q.apply(n, K.call(h.querySelectorAll(g), 0)), n
                            } catch (m) {} finally {
                                c || t.removeAttribute("id")
                            }
                        }
                    }
                    return x(e.replace(at, "$1"), t, n, r)
                }

                function s(e, t) {
                    var n = t && e,
                        r = n && (~t.sourceIndex || V) - (~e.sourceIndex || V);
                    if (r) return r;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === t) return -1;
                    return e ? 1 : -1
                }

                function u(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return "input" === n && t.type === e
                    }
                }

                function l(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }

                function c(e) {
                    return i(function(t) {
                        return t = +t, i(function(n, r) {
                            for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                        })
                    })
                }

                function f(e, t) {
                    var n, r, i, o, s, u, l, c = z[e + " "];
                    if (c) return t ? 0 : c.slice(0);
                    for (s = e, u = [], l = k.preFilter; s;) {
                        (!n || (r = st.exec(s))) && (r && (s = s.slice(r[0].length) || s), u.push(i = [])), n = !1, (r = lt.exec(s)) && (n = r.shift(), i.push({
                            value: n,
                            type: r[0].replace(at, " ")
                        }), s = s.slice(n.length));
                        for (o in k.filter) !(r = pt[o].exec(s)) || l[o] && !(r = l[o](r)) || (n = r.shift(), i.push({
                            value: n,
                            type: o,
                            matches: r
                        }), s = s.slice(n.length));
                        if (!n) break
                    }
                    return t ? s.length : s ? a.error(e) : z(e, u).slice(0)
                }

                function p(e) {
                    for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
                    return r
                }

                function d(e, t, n) {
                    var r = t.dir,
                        i = n && "parentNode" === r,
                        o = W++;
                    return t.first ? function(t, n, o) {
                        for (; t = t[r];)
                            if (t.nodeType === 1 || i) return e(t, n, o)
                    } : function(t, n, a) {
                        var s, u, l, c = B + " " + o;
                        if (a) {
                            for (; t = t[r];)
                                if ((t.nodeType === 1 || i) && e(t, n, a)) return !0
                        } else
                            for (; t = t[r];)
                                if (t.nodeType === 1 || i)
                                    if (l = t[I] || (t[I] = {}), (u = l[r]) && u[0] === c) {
                                        if ((s = u[1]) === !0 || s === C) return s === !0
                                    } else if (u = l[r] = [c], u[1] = e(t, n, a) || C, u[1] === !0) return !0
                    }
                }

                function h(e) {
                    return e.length > 1 ? function(t, n, r) {
                        for (var i = e.length; i--;)
                            if (!e[i](t, n, r)) return !1;
                        return !0
                    } : e[0]
                }

                function g(e, t, n, r, i) {
                    for (var o, a = [], s = 0, u = e.length, l = null != t; u > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s));
                    return a
                }

                function m(e, t, n, r, o, a) {
                    return r && !r[I] && (r = m(r)), o && !o[I] && (o = m(o, a)), i(function(i, a, s, u) {
                        var l, c, f, p = [],
                            d = [],
                            h = a.length,
                            m = i || b(t || "*", s.nodeType ? [s] : s, []),
                            v = !e || !i && t ? m : g(m, p, e, s, u),
                            y = n ? o || (i ? e : h || r) ? [] : a : v;
                        if (n && n(v, y, s, u), r)
                            for (l = g(y, d), r(l, [], s, u), c = l.length; c--;)(f = l[c]) && (y[d[c]] = !(v[d[c]] = f));
                        if (i) {
                            if (o || e) {
                                if (o) {
                                    for (l = [], c = y.length; c--;)(f = y[c]) && l.push(v[c] = f);
                                    o(null, y = [], l, u)
                                }
                                for (c = y.length; c--;)(f = y[c]) && (l = o ? Z.call(i, f) : p[c]) > -1 && (i[l] = !(a[l] = f))
                            }
                        } else y = g(y === a ? y.splice(h, y.length) : y), o ? o(null, a, y, u) : Q.apply(a, y)
                    })
                }

                function v(e) {
                    for (var t, n, r, i = e.length, o = k.relative[e[0].type], a = o || k.relative[" "], s = o ? 1 : 0, u = d(function(e) {
                            return e === t
                        }, a, !0), l = d(function(e) {
                            return Z.call(t, e) > -1
                        }, a, !0), c = [function(e, n, r) {
                            return !o && (r || n !== L) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r))
                        }]; i > s; s++)
                        if (n = k.relative[e[s].type]) c = [d(h(c), n)];
                        else {
                            if (n = k.filter[e[s].type].apply(null, e[s].matches), n[I]) {
                                for (r = ++s; i > r && !k.relative[e[r].type]; r++);
                                return m(s > 1 && h(c), s > 1 && p(e.slice(0, s - 1)).replace(at, "$1"), n, r > s && v(e.slice(s, r)), i > r && v(e = e.slice(r)), i > r && p(e))
                            }
                            c.push(n)
                        }
                    return h(c)
                }

                function y(e, t) {
                    var n = 0,
                        r = t.length > 0,
                        o = e.length > 0,
                        s = function(i, s, u, l, c) {
                            var f, p, d, h = [],
                                m = 0,
                                v = "0",
                                y = i && [],
                                b = null != c,
                                x = L,
                                w = i || o && k.find.TAG("*", c && s.parentNode || s),
                                T = B += null == x ? 1 : Math.random() || .1;
                            for (b && (L = s !== j && s, C = n);
                                (f = w[v]) != null; v++) {
                                if (o && f) {
                                    for (p = 0; d = e[p++];)
                                        if (d(f, s, u)) {
                                            l.push(f);
                                            break
                                        }
                                    b && (B = T, C = ++n)
                                }
                                r && ((f = !d && f) && m--, i && y.push(f))
                            }
                            if (m += v, r && v !== m) {
                                for (p = 0; d = t[p++];) d(y, h, s, u);
                                if (i) {
                                    if (m > 0)
                                        for (; v--;) y[v] || h[v] || (h[v] = G.call(l));
                                    h = g(h)
                                }
                                Q.apply(l, h), b && !i && h.length > 0 && m + t.length > 1 && a.uniqueSort(l)
                            }
                            return b && (B = T, L = x), y
                        };
                    return r ? i(s) : s
                }

                function b(e, t, n) {
                    for (var r = 0, i = t.length; i > r; r++) a(e, t[r], n);
                    return n
                }

                function x(e, t, n, r) {
                    var i, o, a, s, u, l = f(e);
                    if (!r && l.length === 1) {
                        if (o = l[0] = l[0].slice(0), o.length > 2 && (a = o[0]).type === "ID" && t.nodeType === 9 && !O && k.relative[o[1].type]) {
                            if (t = k.find.ID(a.matches[0].replace(xt, wt), t)[0], !t) return n;
                            e = e.slice(o.shift().value.length)
                        }
                        for (i = pt.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !k.relative[s = a.type]);)
                            if ((u = k.find[s]) && (r = u(a.matches[0].replace(xt, wt), dt.test(o[0].type) && t.parentNode || t))) {
                                if (o.splice(i, 1), e = r.length && p(o), !e) return Q.apply(n, K.call(r, 0)), n;
                                break
                            }
                    }
                    return N(e, l)(r, t, O, n, dt.test(e)), n
                }

                function w() {}
                var T, C, k, E, S, N, A, L, D, j, H, O, M, F, $, _, q, I = "sizzle" + -new Date,
                    P = e.document,
                    R = {},
                    B = 0,
                    W = 0,
                    X = r(),
                    z = r(),
                    U = r(),
                    Y = typeof t,
                    V = 1 << 31,
                    J = [],
                    G = J.pop,
                    Q = J.push,
                    K = J.slice,
                    Z = J.indexOf || function(e) {
                        for (var t = 0, n = this.length; n > t; t++)
                            if (this[t] === e) return t;
                        return -1
                    },
                    et = "[\\x20\\t\\r\\n\\f]",
                    tt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    nt = tt.replace("w", "w#"),
                    rt = "([*^$|!~]?=)",
                    it = "\\[" + et + "*(" + tt + ")" + et + "*(?:" + rt + et + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + nt + ")|)|)" + et + "*\\]",
                    ot = ":(" + tt + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + it.replace(3, 8) + ")*)|.*)\\)|)",
                    at = new RegExp("^" + et + "+|((?:^|[^\\\\])(?:\\\\.)*)" + et + "+$", "g"),
                    st = new RegExp("^" + et + "*," + et + "*"),
                    lt = new RegExp("^" + et + "*([\\x20\\t\\r\\n\\f>+~])" + et + "*"),
                    ct = new RegExp(ot),
                    ft = new RegExp("^" + nt + "$"),
                    pt = {
                        ID: new RegExp("^#(" + tt + ")"),
                        CLASS: new RegExp("^\\.(" + tt + ")"),
                        NAME: new RegExp("^\\[name=['\"]?(" + tt + ")['\"]?\\]"),
                        TAG: new RegExp("^(" + tt.replace("w", "w*") + ")"),
                        ATTR: new RegExp("^" + it),
                        PSEUDO: new RegExp("^" + ot),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + et + "*(even|odd|(([+-]|)(\\d*)n|)" + et + "*(?:([+-]|)" + et + "*(\\d+)|))" + et + "*\\)|)", "i"),
                        needsContext: new RegExp("^" + et + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + et + "*((?:-\\d)?\\d*)" + et + "*\\)|)(?=[^-]|$)", "i")
                    },
                    dt = /[\x20\t\r\n\f]*[+~]/,
                    ht = /^[^{]+\{\s*\[native code/,
                    gt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    mt = /^(?:input|select|textarea|button)$/i,
                    vt = /^h\d$/i,
                    yt = /'|\\/g,
                    bt = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                    xt = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
                    wt = function(e, t) {
                        var n = "0x" + t - 65536;
                        return n !== n ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n)
                    };
                try {
                    K.call(P.documentElement.childNodes, 0)[0].nodeType
                } catch (Tt) {
                    K = function(e) {
                        for (var t, n = []; t = this[e++];) n.push(t);
                        return n
                    }
                }
                S = a.isXML = function(e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return t ? t.nodeName !== "HTML" : !1
                }, D = a.setDocument = function(e) {
                    var r = e ? e.ownerDocument || e : P;
                    return r !== j && r.nodeType === 9 && r.documentElement ? (j = r, H = r.documentElement, O = S(r), R.tagNameNoComments = o(function(e) {
                        return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length
                    }), R.attributes = o(function(e) {
                        e.innerHTML = "<select></select>";
                        var t = typeof e.lastChild.getAttribute("multiple");
                        return "boolean" !== t && "string" !== t
                    }), R.getByClassName = o(function(e) {
                        return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", e.getElementsByClassName("e").length === 2) : !1
                    }), R.getByName = o(function(e) {
                        e.id = I + 0, e.innerHTML = "<a name='" + I + "'></a><div name='" + I + "'></div>", H.insertBefore(e, H.firstChild);
                        var t = r.getElementsByName && r.getElementsByName(I).length === 2 + r.getElementsByName(I + 0).length;
                        return R.getIdNotName = !r.getElementById(I), H.removeChild(e), t
                    }), k.attrHandle = o(function(e) {
                        return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== Y && e.firstChild.getAttribute("href") === "#"
                    }) ? {} : {
                        href: function(e) {
                            return e.getAttribute("href", 2)
                        },
                        type: function(e) {
                            return e.getAttribute("type")
                        }
                    }, R.getIdNotName ? (k.find.ID = function(e, t) {
                        if (typeof t.getElementById !== Y && !O) {
                            var n = t.getElementById(e);
                            return n && n.parentNode ? [n] : []
                        }
                    }, k.filter.ID = function(e) {
                        var t = e.replace(xt, wt);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    }) : (k.find.ID = function(e, n) {
                        if (typeof n.getElementById !== Y && !O) {
                            var r = n.getElementById(e);
                            return r ? r.id === e || typeof r.getAttributeNode !== Y && r.getAttributeNode("id").value === e ? [r] : t : []
                        }
                    }, k.filter.ID = function(e) {
                        var t = e.replace(xt, wt);
                        return function(e) {
                            var n = typeof e.getAttributeNode !== Y && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }), k.find.TAG = R.tagNameNoComments ? function(e, t) {
                        return typeof t.getElementsByTagName !== Y ? t.getElementsByTagName(e) : void 0
                    } : function(e, t) {
                        var n, r = [],
                            i = 0,
                            o = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = o[i++];) n.nodeType === 1 && r.push(n);
                            return r
                        }
                        return o
                    }, k.find.NAME = R.getByName && function(e, t) {
                        return typeof t.getElementsByName !== Y ? t.getElementsByName(name) : void 0
                    }, k.find.CLASS = R.getByClassName && function(e, t) {
                        return typeof t.getElementsByClassName === Y || O ? void 0 : t.getElementsByClassName(e)
                    }, F = [], M = [":focus"], (R.qsa = n(r.querySelectorAll)) && (o(function(e) {
                        e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || M.push("\\[" + et + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || M.push(":checked")
                    }), o(function(e) {
                        e.innerHTML = "<input type='hidden' i=''/>", e.querySelectorAll("[i^='']").length && M.push("[*^$]=" + et + "*(?:\"\"|'')"), e.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), M.push(",.*:")
                    })), (R.matchesSelector = n($ = H.matchesSelector || H.mozMatchesSelector || H.webkitMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && o(function(e) {
                        R.disconnectedMatch = $.call(e, "div"), $.call(e, "[s!='']:x"), F.push("!=", ot)
                    }), M = new RegExp(M.join("|")), F = new RegExp(F.join("|")), _ = n(H.contains) || H.compareDocumentPosition ? function(e, t) {
                        var n = e.nodeType === 9 ? e.documentElement : e,
                            r = t && t.parentNode;
                        return e === r || !(!r || r.nodeType !== 1 || !(n.contains ? n.contains(r) : e.compareDocumentPosition && e.compareDocumentPosition(r) & 16))
                    } : function(e, t) {
                        if (t)
                            for (; t = t.parentNode;)
                                if (t === e) return !0;
                        return !1
                    }, q = H.compareDocumentPosition ? function(e, t) {
                        var n;
                        return e === t ? (A = !0, 0) : (n = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? 1 & n || e.parentNode && e.parentNode.nodeType === 11 ? e === r || _(P, e) ? -1 : t === r || _(P, t) ? 1 : 0 : 4 & n ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
                    } : function(e, t) {
                        var n, i = 0,
                            o = e.parentNode,
                            a = t.parentNode,
                            u = [e],
                            l = [t];
                        if (e === t) return A = !0, 0;
                        if (!o || !a) return e === r ? -1 : t === r ? 1 : o ? -1 : a ? 1 : 0;
                        if (o === a) return s(e, t);
                        for (n = e; n = n.parentNode;) u.unshift(n);
                        for (n = t; n = n.parentNode;) l.unshift(n);
                        for (; u[i] === l[i];) i++;
                        return i ? s(u[i], l[i]) : u[i] === P ? -1 : l[i] === P ? 1 : 0
                    }, A = !1, [0, 0].sort(q), R.detectDuplicates = A, j) : j
                }, a.matches = function(e, t) {
                    return a(e, null, null, t)
                }, a.matchesSelector = function(e, t) {
                    if ((e.ownerDocument || e) !== j && D(e), t = t.replace(bt, "='$1']"), !(!R.matchesSelector || O || F && F.test(t) || M.test(t))) try {
                        var n = $.call(e, t);
                        if (n || R.disconnectedMatch || e.document && e.document.nodeType !== 11) return n
                    } catch (r) {}
                    return a(t, j, null, [e]).length > 0
                }, a.contains = function(e, t) {
                    return (e.ownerDocument || e) !== j && D(e), _(e, t)
                }, a.attr = function(e, t) {
                    var n;
                    return (e.ownerDocument || e) !== j && D(e), O || (t = t.toLowerCase()), (n = k.attrHandle[t]) ? n(e) : O || R.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t : n && n.specified ? n.value : null
                }, a.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, a.uniqueSort = function(e) {
                    var t, n = [],
                        r = 1,
                        i = 0;
                    if (A = !R.detectDuplicates, e.sort(q), A) {
                        for (; t = e[r]; r++) t === e[r - 1] && (i = n.push(r));
                        for (; i--;) e.splice(n[i], 1)
                    }
                    return e
                }, E = a.getText = function(e) {
                    var t, n = "",
                        r = 0,
                        i = e.nodeType;
                    if (i) {
                        if (1 === i || 9 === i || 11 === i) {
                            if (typeof e.textContent == "string") return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += E(e)
                        } else if (3 === i || 4 === i) return e.nodeValue
                    } else
                        for (; t = e[r]; r++) n += E(t);
                    return n
                }, k = a.selectors = {
                    cacheLength: 50,
                    createPseudo: i,
                    match: pt,
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(e) {
                            return e[1] = e[1].replace(xt, wt), e[3] = (e[4] || e[5] || "").replace(xt, wt), e[2] === "~=" && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(), e[1].slice(0, 3) === "nth" ? (e[3] || a.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd")), e[5] = +(e[7] + e[8] || e[3] === "odd")) : e[3] && a.error(e[0]), e
                        },
                        PSEUDO: function(e) {
                            var t, n = !e[5] && e[2];
                            return pt.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && ct.test(n) && (t = f(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            return "*" === e ? function() {
                                return !0
                            } : (e = e.replace(xt, wt).toLowerCase(), function(t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e
                            })
                        },
                        CLASS: function(e) {
                            var t = X[e + " "];
                            return t || (t = new RegExp("(^|" + et + ")" + e + "(" + et + "|$)")) && X(e, function(e) {
                                return t.test(e.className || typeof e.getAttribute !== Y && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(e, t, n) {
                            return function(r) {
                                var i = a.attr(r, e);
                                return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && i.indexOf(n) === 0 : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                            }
                        },
                        CHILD: function(e, t, n, r, i) {
                            var o = e.slice(0, 3) !== "nth",
                                a = e.slice(-4) !== "last",
                                s = "of-type" === t;
                            return 1 === r && 0 === i ? function(e) {
                                return !!e.parentNode
                            } : function(t, n, u) {
                                var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling",
                                    m = t.parentNode,
                                    v = s && t.nodeName.toLowerCase(),
                                    y = !u && !s;
                                if (m) {
                                    if (o) {
                                        for (; g;) {
                                            for (f = t; f = f[g];)
                                                if (s ? f.nodeName.toLowerCase() === v : f.nodeType === 1) return !1;
                                            h = g = "only" === e && !h && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (h = [a ? m.firstChild : m.lastChild], a && y) {
                                        for (c = m[I] || (m[I] = {}), l = c[e] || [], d = l[0] === B && l[1], p = l[0] === B && l[2], f = d && m.childNodes[d]; f = ++d && f && f[g] || (p = d = 0) || h.pop();)
                                            if (f.nodeType === 1 && ++p && f === t) {
                                                c[e] = [B, d, p];
                                                break
                                            }
                                    } else if (y && (l = (t[I] || (t[I] = {}))[e]) && l[0] === B) p = l[1];
                                    else
                                        for (;
                                            (f = ++d && f && f[g] || (p = d = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== v : f.nodeType !== 1) || !++p || (y && ((f[I] || (f[I] = {}))[e] = [B, p]), f !== t)););
                                    return p -= i, p === r || 0 === p % r && p / r >= 0
                                }
                            }
                        },
                        PSEUDO: function(e, t) {
                            var n, r = k.pseudos[e] || k.setFilters[e.toLowerCase()] || a.error("unsupported pseudo: " + e);
                            return r[I] ? r(t) : r.length > 1 ? (n = [e, e, "", t], k.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, n) {
                                for (var i, o = r(e, t), a = o.length; a--;) i = Z.call(e, o[a]), e[i] = !(n[i] = o[a])
                            }) : function(e) {
                                return r(e, 0, n)
                            }) : r
                        }
                    },
                    pseudos: {
                        not: i(function(e) {
                            var t = [],
                                n = [],
                                r = N(e.replace(at, "$1"));
                            return r[I] ? i(function(e, t, n, i) {
                                for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                            }) : function(e, i, o) {
                                return t[0] = e, r(t, null, o, n), !n.pop()
                            }
                        }),
                        has: i(function(e) {
                            return function(t) {
                                return a(e, t).length > 0
                            }
                        }),
                        contains: i(function(e) {
                            return function(t) {
                                return (t.textContent || t.innerText || E(t)).indexOf(e) > -1
                            }
                        }),
                        lang: i(function(e) {
                            return ft.test(e || "") || a.error("unsupported lang: " + e), e = e.replace(xt, wt).toLowerCase(),
                                function(t) {
                                    var n;
                                    do
                                        if (n = O ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return n = n.toLowerCase(), n === e || n.indexOf(e + "-") === 0;
                                    while ((t = t.parentNode) && t.nodeType === 1);
                                    return !1
                                }
                        }),
                        target: function(t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        },
                        root: function(e) {
                            return e === H
                        },
                        focus: function(e) {
                            return e === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: function(e) {
                            return e.disabled === !1
                        },
                        disabled: function(e) {
                            return e.disabled === !0
                        },
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeName > "@" || e.nodeType === 3 || e.nodeType === 4) return !1;
                            return !0
                        },
                        parent: function(e) {
                            return !k.pseudos.empty(e)
                        },
                        header: function(e) {
                            return vt.test(e.nodeName)
                        },
                        input: function(e) {
                            return mt.test(e.nodeName)
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && e.type === "button" || "button" === t
                        },
                        text: function(e) {
                            var t;
                            return e.nodeName.toLowerCase() === "input" && e.type === "text" && ((t = e.getAttribute("type")) == null || t.toLowerCase() === e.type)
                        },
                        first: c(function() {
                            return [0]
                        }),
                        last: c(function(e, t) {
                            return [t - 1]
                        }),
                        eq: c(function(e, t, n) {
                            return [0 > n ? n + t : n]
                        }),
                        even: c(function(e, t) {
                            for (var n = 0; t > n; n += 2) e.push(n);
                            return e
                        }),
                        odd: c(function(e, t) {
                            for (var n = 1; t > n; n += 2) e.push(n);
                            return e
                        }),
                        lt: c(function(e, t, n) {
                            for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                            return e
                        }),
                        gt: c(function(e, t, n) {
                            for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                            return e
                        })
                    }
                };
                for (T in {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) k.pseudos[T] = u(T);
                for (T in {
                        submit: !0,
                        reset: !0
                    }) k.pseudos[T] = l(T);
                N = a.compile = function(e, t) {
                    var n, r = [],
                        i = [],
                        o = U[e + " "];
                    if (!o) {
                        for (t || (t = f(e)), n = t.length; n--;) o = v(t[n]), o[I] ? r.push(o) : i.push(o);
                        o = U(e, y(i, r))
                    }
                    return o
                }, k.pseudos.nth = k.pseudos.eq, k.filters = w.prototype = k.pseudos, k.setFilters = new w, D(), a.attr = ut.attr, ut.find = a, ut.expr = a.selectors, ut.expr[":"] = ut.expr.pseudos, ut.unique = a.uniqueSort, ut.text = a.getText, ut.isXMLDoc = a.isXML, ut.contains = a.contains
            }(e);
        var Rt = /Until$/,
            Bt = /^(?:parents|prev(?:Until|All))/,
            Wt = /^.[^:#\[\.,]*$/,
            Xt = ut.expr.match.needsContext,
            zt = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        ut.fn.extend({
            find: function(e) {
                var t, n, r, i = this.length;
                if ("string" != typeof e) return r = this, this.pushStack(ut(e).filter(function() {
                    for (t = 0; i > t; t++)
                        if (ut.contains(r[t], this)) return !0
                }));
                for (n = [], t = 0; i > t; t++) ut.find(e, this[t], n);
                return n = this.pushStack(i > 1 ? ut.unique(n) : n), n.selector = (this.selector ? this.selector + " " : "") + e, n
            },
            has: function(e) {
                var t, n = ut(e, this),
                    r = n.length;
                return this.filter(function() {
                    for (t = 0; r > t; t++)
                        if (ut.contains(this, n[t])) return !0
                })
            },
            not: function(e) {
                return this.pushStack(f(this, e, !1))
            },
            filter: function(e) {
                return this.pushStack(f(this, e, !0))
            },
            is: function(e) {
                return !!e && ("string" == typeof e ? Xt.test(e) ? ut(e, this.context).index(this[0]) >= 0 : ut.filter(e, this).length > 0 : this.filter(e).length > 0)
            },
            closest: function(e, t) {
                for (var n, r = 0, i = this.length, o = [], a = Xt.test(e) || "string" != typeof e ? ut(e, t || this.context) : 0; i > r; r++)
                    for (n = this[r]; n && n.ownerDocument && n !== t && n.nodeType !== 11;) {
                        if (a ? a.index(n) > -1 : ut.find.matchesSelector(n, e)) {
                            o.push(n);
                            break
                        }
                        n = n.parentNode
                    }
                return this.pushStack(o.length > 1 ? ut.unique(o) : o)
            },
            index: function(e) {
                return e ? "string" == typeof e ? ut.inArray(this[0], ut(e)) : ut.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                var n = "string" == typeof e ? ut(e, t) : ut.makeArray(e && e.nodeType ? [e] : e),
                    r = ut.merge(this.get(), n);
                return this.pushStack(ut.unique(r))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), ut.fn.andSelf = ut.fn.addBack, ut.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && t.nodeType !== 11 ? t : null
            },
            parents: function(e) {
                return ut.dir(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return ut.dir(e, "parentNode", n)
            },
            next: function(e) {
                return c(e, "nextSibling")
            },
            prev: function(e) {
                return c(e, "previousSibling")
            },
            nextAll: function(e) {
                return ut.dir(e, "nextSibling")
            },
            prevAll: function(e) {
                return ut.dir(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return ut.dir(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return ut.dir(e, "previousSibling", n)
            },
            siblings: function(e) {
                return ut.sibling((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return ut.sibling(e.firstChild)
            },
            contents: function(e) {
                return ut.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ut.merge([], e.childNodes)
            }
        }, function(e, t) {
            ut.fn[e] = function(n, r) {
                var i = ut.map(this, t, n);
                return Rt.test(e) || (r = n), r && "string" == typeof r && (i = ut.filter(r, i)), i = this.length > 1 && !zt[e] ? ut.unique(i) : i, this.length > 1 && Bt.test(e) && (i = i.reverse()), this.pushStack(i)
            }
        }), ut.extend({
            filter: function(e, t, n) {
                return n && (e = ":not(" + e + ")"), t.length === 1 ? ut.find.matchesSelector(t[0], e) ? [t[0]] : [] : ut.find.matches(e, t)
            },
            dir: function(e, n, r) {
                for (var i = [], o = e[n]; o && o.nodeType !== 9 && (r === t || o.nodeType !== 1 || !ut(o).is(r));) o.nodeType === 1 && i.push(o), o = o[n];
                return i
            },
            sibling: function(e, t) {
                for (var n = []; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e);
                return n
            }
        });
        var Ut = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            Yt = / jQuery\d+="(?:null|\d+)"/g,
            Vt = new RegExp("<(?:" + Ut + ")[\\s/>]", "i"),
            Jt = /^\s+/,
            Gt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Qt = /<([\w:]+)/,
            Kt = /<tbody/i,
            Zt = /<|&#?\w+;/,
            en = /<(?:script|style|link)/i,
            tn = /^(?:checkbox|radio)$/i,
            nn = /checked\s*(?:[^=]|=\s*.checked.)/i,
            rn = /^$|\/(?:java|ecma)script/i,
            on = /^true\/(.*)/,
            an = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            sn = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: ut.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            },
            un = p(V),
            ln = un.appendChild(V.createElement("div"));
        sn.optgroup = sn.option, sn.tbody = sn.tfoot = sn.colgroup = sn.caption = sn.thead, sn.th = sn.td, ut.fn.extend({
            text: function(e) {
                return ut.access(this, function(e) {
                    return e === t ? ut.text(this) : this.empty().append((this[0] && this[0].ownerDocument || V).createTextNode(e))
                }, null, e, arguments.length)
            },
            wrapAll: function(e) {
                if (ut.isFunction(e)) return this.each(function(t) {
                    ut(this).wrapAll(e.call(this, t))
                });
                if (this[0]) {
                    var t = ut(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                        for (var e = this; e.firstChild && e.firstChild.nodeType === 1;) e = e.firstChild;
                        return e
                    }).append(this)
                }
                return this
            },
            wrapInner: function(e) {
                return ut.isFunction(e) ? this.each(function(t) {
                    ut(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = ut(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = ut.isFunction(e);
                return this.each(function(n) {
                    ut(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    ut.nodeName(this, "body") || ut(this).replaceWith(this.childNodes)
                }).end()
            },
            append: function() {
                return this.domManip(arguments, !0, function(e) {
                    (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && this.appendChild(e)
                })
            },
            prepend: function() {
                return this.domManip(arguments, !0, function(e) {
                    (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && this.insertBefore(e, this.firstChild)
                })
            },
            before: function() {
                return this.domManip(arguments, !1, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return this.domManip(arguments, !1, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            remove: function(e, t) {
                for (var n, r = 0;
                    (n = this[r]) != null; r++)(!e || ut.filter(e, [n]).length > 0) && (t || n.nodeType !== 1 || ut.cleanData(b(n)), n.parentNode && (t && ut.contains(n.ownerDocument, n) && m(b(n, "script")), n.parentNode.removeChild(n)));
                return this
            },
            empty: function() {
                for (var e, t = 0;
                    (e = this[t]) != null; t++) {
                    for (e.nodeType === 1 && ut.cleanData(b(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                    e.options && ut.nodeName(e, "select") && (e.options.length = 0)
                }
                return this
            },
            clone: function(e, t) {
                return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                    return ut.clone(this, e, t)
                })
            },
            html: function(e) {
                return ut.access(this, function(e) {
                    var n = this[0] || {},
                        r = 0,
                        i = this.length;
                    if (e === t) return n.nodeType === 1 ? n.innerHTML.replace(Yt, "") : t;
                    if (!("string" != typeof e || en.test(e) || !ut.support.htmlSerialize && Vt.test(e) || !ut.support.leadingWhitespace && Jt.test(e) || sn[(Qt.exec(e) || ["", ""])[1].toLowerCase()])) {
                        e = e.replace(Gt, "<$1></$2>");
                        try {
                            for (; i > r; r++) n = this[r] || {}, n.nodeType === 1 && (ut.cleanData(b(n, !1)), n.innerHTML = e);
                            n = 0
                        } catch (o) {}
                    }
                    n && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function(e) {
                var t = ut.isFunction(e);
                return t || "string" == typeof e || (e = ut(e).not(this).detach()), this.domManip([e], !0, function(e) {
                    var t = this.nextSibling,
                        n = this.parentNode;
                    n && (ut(this).remove(), n.insertBefore(e, t))
                })
            },
            detach: function(e) {
                return this.remove(e, !0)
            },
            domManip: function(e, n, r) {
                e = tt.apply([], e);
                var i, o, a, s, u, l, c = 0,
                    f = this.length,
                    p = this,
                    m = f - 1,
                    v = e[0],
                    y = ut.isFunction(v);
                if (y || !(1 >= f || "string" != typeof v || ut.support.checkClone) && nn.test(v)) return this.each(function(i) {
                    var o = p.eq(i);
                    y && (e[0] = v.call(this, i, n ? o.html() : t)), o.domManip(e, n, r)
                });
                if (f && (l = ut.buildFragment(e, this[0].ownerDocument, !1, this), i = l.firstChild, l.childNodes.length === 1 && (l = i), i)) {
                    for (n = n && ut.nodeName(i, "tr"), s = ut.map(b(l, "script"), h), a = s.length; f > c; c++) o = l, c !== m && (o = ut.clone(o, !0, !0), a && ut.merge(s, b(o, "script"))), r.call(n && ut.nodeName(this[c], "table") ? d(this[c], "tbody") : this[c], o, c);
                    if (a)
                        for (u = s[s.length - 1].ownerDocument, ut.map(s, g), c = 0; a > c; c++) o = s[c], rn.test(o.type || "") && !ut._data(o, "globalEval") && ut.contains(u, o) && (o.src ? ut.ajax({
                            url: o.src,
                            type: "GET",
                            dataType: "script",
                            async: !1,
                            global: !1,
                            "throws": !0
                        }) : ut.globalEval((o.text || o.textContent || o.innerHTML || "").replace(an, "")));
                    l = i = null
                }
                return this
            }
        }), ut.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            ut.fn[e] = function(e) {
                for (var n, r = 0, i = [], o = ut(e), a = o.length - 1; a >= r; r++) n = r === a ? this : this.clone(!0), ut(o[r])[t](n), nt.apply(i, n.get());
                return this.pushStack(i)
            }
        }), ut.extend({
            clone: function(e, t, n) {
                var r, i, o, a, s, u = ut.contains(e.ownerDocument, e);
                if (ut.support.html5Clone || ut.isXMLDoc(e) || !Vt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (ln.innerHTML = e.outerHTML, ln.removeChild(o = ln.firstChild)), !(ut.support.noCloneEvent && ut.support.noCloneChecked || e.nodeType !== 1 && e.nodeType !== 11 || ut.isXMLDoc(e)))
                    for (r = b(o), s = b(e), a = 0;
                        (i = s[a]) != null; ++a) r[a] && y(i, r[a]);
                if (t)
                    if (n)
                        for (s = s || b(e), r = r || b(o), a = 0;
                            (i = s[a]) != null; a++) v(i, r[a]);
                    else v(e, o);
                return r = b(o, "script"), r.length > 0 && m(r, !u && b(e, "script")), r = s = i = null, o
            },
            buildFragment: function(e, t, n, r) {
                for (var i, o, a, s, u, l, c, f = e.length, d = p(t), h = [], g = 0; f > g; g++)
                    if (o = e[g], o || 0 === o)
                        if (ut.type(o) === "object") ut.merge(h, o.nodeType ? [o] : o);
                        else if (Zt.test(o)) {
                    for (s = s || d.appendChild(t.createElement("div")), u = (Qt.exec(o) || ["", ""])[1].toLowerCase(), c = sn[u] || sn._default, s.innerHTML = c[1] + o.replace(Gt, "<$1></$2>") + c[2], i = c[0]; i--;) s = s.lastChild;
                    if (!ut.support.leadingWhitespace && Jt.test(o) && h.push(t.createTextNode(Jt.exec(o)[0])), !ut.support.tbody)
                        for (o = "table" !== u || Kt.test(o) ? c[1] !== "<table>" || Kt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length; i--;) ut.nodeName(l = o.childNodes[i], "tbody") && !l.childNodes.length && o.removeChild(l);
                    for (ut.merge(h, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                    s = d.lastChild
                } else h.push(t.createTextNode(o));
                for (s && d.removeChild(s), ut.support.appendChecked || ut.grep(b(h, "input"), x), g = 0; o = h[g++];)
                    if ((!r || ut.inArray(o, r) === -1) && (a = ut.contains(o.ownerDocument, o), s = b(d.appendChild(o), "script"), a && m(s), n))
                        for (i = 0; o = s[i++];) rn.test(o.type || "") && n.push(o);
                return s = null, d
            },
            cleanData: function(e, t) {
                for (var n, r, i, o, a = 0, s = ut.expando, u = ut.cache, l = ut.support.deleteExpando, c = ut.event.special;
                    (n = e[a]) != null; a++)
                    if ((t || ut.acceptData(n)) && (i = n[s], o = i && u[i])) {
                        if (o.events)
                            for (r in o.events) c[r] ? ut.event.remove(n, r) : ut.removeEvent(n, r, o.handle);
                        u[i] && (delete u[i], l ? delete n[s] : typeof n.removeAttribute !== Y ? n.removeAttribute(s) : n[s] = null, Z.push(i))
                    }
            }
        });
        var cn, fn, pn, dn = /alpha\([^)]*\)/i,
            hn = /opacity\s*=\s*([^)]*)/,
            gn = /^(top|right|bottom|left)$/,
            mn = /^(none|table(?!-c[ea]).+)/,
            vn = /^margin/,
            yn = new RegExp("^(" + lt + ")(.*)$", "i"),
            bn = new RegExp("^(" + lt + ")(?!px)[a-z%]+$", "i"),
            xn = new RegExp("^([+-])=(" + lt + ")", "i"),
            wn = {
                BODY: "block"
            },
            Tn = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Cn = {
                letterSpacing: 0,
                fontWeight: 400
            },
            kn = ["Top", "Right", "Bottom", "Left"],
            En = ["Webkit", "O", "Moz", "ms"];
        ut.fn.extend({
            css: function(e, n) {
                return ut.access(this, function(e, n, r) {
                    var i, o, a = {},
                        s = 0;
                    if (ut.isArray(n)) {
                        for (o = fn(e), i = n.length; i > s; s++) a[n[s]] = ut.css(e, n[s], !1, o);
                        return a
                    }
                    return r !== t ? ut.style(e, n, r) : ut.css(e, n)
                }, e, n, arguments.length > 1)
            },
            show: function() {
                return C(this, !0)
            },
            hide: function() {
                return C(this)
            },
            toggle: function(e) {
                var t = "boolean" == typeof e;
                return this.each(function() {
                    (t ? e : T(this)) ? ut(this).show(): ut(this).hide()
                })
            }
        }), ut.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = pn(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": ut.support.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(e, n, r, i) {
                if (e && e.nodeType !== 3 && e.nodeType !== 8 && e.style) {
                    var o, a, s, u = ut.camelCase(n),
                        l = e.style;
                    if (n = ut.cssProps[u] || (ut.cssProps[u] = w(l, u)), s = ut.cssHooks[n] || ut.cssHooks[u], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : l[n];
                    if (a = typeof r, "string" === a && (o = xn.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(ut.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || ut.cssNumber[u] || (r += "px"), ut.support.clearCloneStyle || "" !== r || n.indexOf("background") !== 0 || (l[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try {
                        l[n] = r
                    } catch (c) {}
                }
            },
            css: function(e, n, r, i) {
                var o, a, s, u = ut.camelCase(n);
                return n = ut.cssProps[u] || (ut.cssProps[u] = w(e.style, u)), s = ut.cssHooks[n] || ut.cssHooks[u], s && "get" in s && (a = s.get(e, !0, r)), a === t && (a = pn(e, n, i)), "normal" === a && n in Cn && (a = Cn[n]), "" === r || r ? (o = parseFloat(a), r === !0 || ut.isNumeric(o) ? o || 0 : a) : a
            },
            swap: function(e, t, n, r) {
                var i, o, a = {};
                for (o in t) a[o] = e.style[o], e.style[o] = t[o];
                i = n.apply(e, r || []);
                for (o in t) e.style[o] = a[o];
                return i
            }
        }), e.getComputedStyle ? (fn = function(t) {
            return e.getComputedStyle(t, null)
        }, pn = function(e, n, r) {
            var i, o, a, s = r || fn(e),
                u = s ? s.getPropertyValue(n) || s[n] : t,
                l = e.style;
            return s && ("" !== u || ut.contains(e.ownerDocument, e) || (u = ut.style(e, n)), bn.test(u) && vn.test(n) && (i = l.width, o = l.minWidth, a = l.maxWidth, l.minWidth = l.maxWidth = l.width = u, u = s.width, l.width = i, l.minWidth = o, l.maxWidth = a)), u
        }) : V.documentElement.currentStyle && (fn = function(e) {
            return e.currentStyle
        }, pn = function(e, n, r) {
            var i, o, a, s = r || fn(e),
                u = s ? s[n] : t,
                l = e.style;
            return null == u && l && l[n] && (u = l[n]), bn.test(u) && !gn.test(n) && (i = l.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), l.left = "fontSize" === n ? "1em" : u, u = l.pixelLeft + "px", l.left = i, a && (o.left = a)), "" === u ? "auto" : u
        }), ut.each(["height", "width"], function(e, t) {
            ut.cssHooks[t] = {
                get: function(e, n, r) {
                    return n ? e.offsetWidth === 0 && mn.test(ut.css(e, "display")) ? ut.swap(e, Tn, function() {
                        return S(e, t, r)
                    }) : S(e, t, r) : void 0
                },
                set: function(e, n, r) {
                    var i = r && fn(e);
                    return k(e, n, r ? E(e, t, r, ut.support.boxSizing && ut.css(e, "boxSizing", !1, i) === "border-box", i) : 0)
                }
            }
        }), ut.support.opacity || (ut.cssHooks.opacity = {
            get: function(e, t) {
                return hn.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
            },
            set: function(e, t) {
                var n = e.style,
                    r = e.currentStyle,
                    i = ut.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                    o = r && r.filter || n.filter || "";
                n.zoom = 1, (t >= 1 || "" === t) && ut.trim(o.replace(dn, "")) === "" && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = dn.test(o) ? o.replace(dn, i) : o + " " + i)
            }
        }), ut(function() {
            ut.support.reliableMarginRight || (ut.cssHooks.marginRight = {
                get: function(e, t) {
                    return t ? ut.swap(e, {
                        display: "inline-block"
                    }, pn, [e, "marginRight"]) : void 0
                }
            }), !ut.support.pixelPosition && ut.fn.position && ut.each(["top", "left"], function(e, t) {
                ut.cssHooks[t] = {
                    get: function(e, n) {
                        return n ? (n = pn(e, t), bn.test(n) ? ut(e).position()[t] + "px" : n) : void 0
                    }
                }
            })
        }), ut.expr && ut.expr.filters && (ut.expr.filters.hidden = function(e) {
            return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ut.support.reliableHiddenOffsets && (e.style && e.style.display || ut.css(e, "display")) === "none"
        }, ut.expr.filters.visible = function(e) {
            return !ut.expr.filters.hidden(e)
        }), ut.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            ut.cssHooks[e + t] = {
                expand: function(n) {
                    for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + kn[r] + t] = o[r] || o[r - 2] || o[0];
                    return i
                }
            }, vn.test(e) || (ut.cssHooks[e + t].set = k)
        });
        var Sn = /%20/g,
            Nn = /\[\]$/,
            An = /\r?\n/g,
            Ln = /^(?:submit|button|image|reset|file)$/i,
            Dn = /^(?:input|select|textarea|keygen)/i;
        ut.fn.extend({
            serialize: function() {
                return ut.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = ut.prop(this, "elements");
                    return e ? ut.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !ut(this).is(":disabled") && Dn.test(this.nodeName) && !Ln.test(e) && (this.checked || !tn.test(e))
                }).map(function(e, t) {
                    var n = ut(this).val();
                    return null == n ? null : ut.isArray(n) ? ut.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(An, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(An, "\r\n")
                    }
                }).get()
            }
        }), ut.param = function(e, n) {
            var r, i = [],
                o = function(e, t) {
                    t = ut.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            if (n === t && (n = ut.ajaxSettings && ut.ajaxSettings.traditional), ut.isArray(e) || e.jquery && !ut.isPlainObject(e)) ut.each(e, function() {
                o(this.name, this.value)
            });
            else
                for (r in e) L(r, e[r], n, o);
            return i.join("&").replace(Sn, "+")
        }, ut.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
            ut.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), ut.fn.hover = function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        };
        var jn, Hn, On = ut.now(),
            Mn = /\?/,
            Fn = /#.*$/,
            $n = /([?&])_=[^&]*/,
            _n = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            qn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            In = /^(?:GET|HEAD)$/,
            Pn = /^\/\//,
            Rn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
            Bn = ut.fn.load,
            Wn = {},
            Xn = {},
            zn = "*/".concat("*");
        try {
            Hn = J.href
        } catch (Un) {
            Hn = V.createElement("a"), Hn.href = "", Hn = Hn.href
        }
        jn = Rn.exec(Hn.toLowerCase()) || [], ut.fn.load = function(e, n, r) {
            if ("string" != typeof e && Bn) return Bn.apply(this, arguments);
            var i, o, a, s = this,
                u = e.indexOf(" ");
            return u >= 0 && (i = e.slice(u, e.length), e = e.slice(0, u)), ut.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && ut.ajax({
                url: e,
                type: a,
                dataType: "html",
                data: n
            }).done(function(e) {
                o = arguments, s.html(i ? ut("<div>").append(ut.parseHTML(e)).find(i) : e)
            }).complete(r && function(e, t) {
                s.each(r, o || [e.responseText, t, e])
            }), this
        }, ut.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            ut.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), ut.each(["get", "post"], function(e, n) {
            ut[n] = function(e, r, i, o) {
                return ut.isFunction(r) && (o = o || i, i = r, r = t), ut.ajax({
                    url: e,
                    type: n,
                    dataType: o,
                    data: r,
                    success: i
                })
            }
        }), ut.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Hn,
                type: "GET",
                isLocal: qn.test(jn[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": zn,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText"
                },
                converters: {
                    "* text": e.String,
                    "text html": !0,
                    "text json": ut.parseJSON,
                    "text xml": ut.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? H(H(e, ut.ajaxSettings), t) : H(ut.ajaxSettings, e)
            },
            ajaxPrefilter: D(Wn),
            ajaxTransport: D(Xn),
            ajax: function(e, n) {
                function r(e, n, r, i) {
                    var o, f, y, b, w, C = n;
                    2 !== x && (x = 2, u && clearTimeout(u), c = t, s = i || "", T.readyState = e > 0 ? 4 : 0, r && (b = O(p, T, r)), e >= 200 && 300 > e || 304 === e ? (p.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (ut.lastModified[a] = w), w = T.getResponseHeader("etag"), w && (ut.etag[a] = w)), 204 === e ? (o = !0, C = "nocontent") : 304 === e ? (o = !0, C = "notmodified") : (o = M(p, b), C = o.state, f = o.data, y = o.error, o = !y)) : (y = C, (e || !C) && (C = "error", 0 > e && (e = 0))), T.status = e, T.statusText = (n || C) + "", o ? g.resolveWith(d, [f, C, T]) : g.rejectWith(d, [T, C, y]), T.statusCode(v), v = t, l && h.trigger(o ? "ajaxSuccess" : "ajaxError", [T, p, o ? f : y]), m.fireWith(d, [T, C]), l && (h.trigger("ajaxComplete", [T, p]), --ut.active || ut.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (n = e, e = t), n = n || {};
                var i, o, a, s, u, l, c, f, p = ut.ajaxSetup({}, n),
                    d = p.context || p,
                    h = p.context && (d.nodeType || d.jquery) ? ut(d) : ut.event,
                    g = ut.Deferred(),
                    m = ut.Callbacks("once memory"),
                    v = p.statusCode || {},
                    y = {},
                    b = {},
                    x = 0,
                    w = "canceled",
                    T = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (2 === x) {
                                if (!f)
                                    for (f = {}; t = _n.exec(s);) f[t[1].toLowerCase()] = t[2];
                                t = f[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return 2 === x ? s : null
                        },
                        setRequestHeader: function(e, t) {
                            var n = e.toLowerCase();
                            return x || (e = b[n] = b[n] || e, y[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return x || (p.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (2 > x)
                                    for (t in e) v[t] = [v[t], e[t]];
                                else T.always(e[T.status]);
                            return this
                        },
                        abort: function(e) {
                            var t = e || w;
                            return c && c.abort(t), r(0, t), this
                        }
                    };
                if (g.promise(T).complete = m.add, T.success = T.done, T.error = T.fail, p.url = ((e || p.url || Hn) + "").replace(Fn, "").replace(Pn, jn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = ut.trim(p.dataType || "*").toLowerCase().match(ct) || [""], p.crossDomain == null && (i = Rn.exec(p.url.toLowerCase()), p.crossDomain = !(!i || i[1] === jn[1] && i[2] === jn[2] && (i[3] || (i[1] === "http:" ? 80 : 443)) == (jn[3] || (jn[1] === "http:" ? 80 : 443)))), p.data && p.processData && typeof p.data != "string" && (p.data = ut.param(p.data, p.traditional)), j(Wn, p, n, T), 2 === x) return T;
                l = p.global, l && ut.active++ === 0 && ut.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !In.test(p.type), a = p.url, p.hasContent || (p.data && (a = p.url += (Mn.test(a) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = $n.test(a) ? a.replace($n, "$1_=" + On++) : a + (Mn.test(a) ? "&" : "?") + "_=" + On++)), p.ifModified && (ut.lastModified[a] && T.setRequestHeader("If-Modified-Since", ut.lastModified[a]), ut.etag[a] && T.setRequestHeader("If-None-Match", ut.etag[a])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", p.contentType), T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + (p.dataTypes[0] !== "*" ? ", " + zn + "; q=0.01" : "") : p.accepts["*"]);
                for (o in p.headers) T.setRequestHeader(o, p.headers[o]);
                if (p.beforeSend && (p.beforeSend.call(d, T, p) === !1 || 2 === x)) return T.abort();
                w = "abort";
                for (o in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) T[o](p[o]);
                if (c = j(Xn, p, n, T)) {
                    T.readyState = 1, l && h.trigger("ajaxSend", [T, p]), p.async && p.timeout > 0 && (u = setTimeout(function() {
                        T.abort("timeout")
                    }, p.timeout));
                    try {
                        x = 1, c.send(y, r)
                    } catch (C) {
                        if (!(2 > x)) throw C;
                        r(-1, C)
                    }
                } else r(-1, "No Transport");
                return T
            },
            getScript: function(e, n) {
                return ut.get(e, t, n, "script")
            },
            getJSON: function(e, t, n) {
                return ut.get(e, t, n, "json")
            }
        }), ut.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(e) {
                    return ut.globalEval(e), e
                }
            }
        }), ut.ajaxPrefilter("script", function(e) {
            e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
        }), ut.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var n, r = V.head || ut("head")[0] || V.documentElement;
                return {
                    send: function(t, i) {
                        n = V.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
                            (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                        }, r.insertBefore(n, r.firstChild)
                    },
                    abort: function() {
                        n && n.onload(t, !0)
                    }
                }
            }
        });
        var Yn = [],
            Vn = /(=)\?(?=&|$)|\?\?/;
        ut.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Yn.pop() || ut.expando + "_" + On++;
                return this[e] = !0, e
            }
        }), ut.ajaxPrefilter("json jsonp", function(n, r, i) {
            var o, a, s, u = n.jsonp !== !1 && (Vn.test(n.url) ? "url" : typeof n.data == "string" && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Vn.test(n.data) && "data");
            return u || n.dataTypes[0] === "jsonp" ? (o = n.jsonpCallback = ut.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, u ? n[u] = n[u].replace(Vn, "$1" + o) : n.jsonp !== !1 && (n.url += (Mn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
                return s || ut.error(o + " was not called"), s[0]
            }, n.dataTypes[0] = "json", a = e[o], e[o] = function() {
                s = arguments
            }, i.always(function() {
                e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Yn.push(o)), s && ut.isFunction(a) && a(s[0]), s = a = t
            }), "script") : void 0
        });
        var Jn, Gn, Qn = 0,
            Kn = e.ActiveXObject && function() {
                var e;
                for (e in Jn) Jn[e](t, !0)
            };
        ut.ajaxSettings.xhr = e.ActiveXObject ? function() {
            return !this.isLocal && F() || $()
        } : F, Gn = ut.ajaxSettings.xhr(), ut.support.cors = !!Gn && "withCredentials" in Gn, Gn = ut.support.ajax = !!Gn, Gn && ut.ajaxTransport(function(n) {
            if (!n.crossDomain || ut.support.cors) {
                var r;
                return {
                    send: function(i, o) {
                        var a, s, u = n.xhr();
                        if (n.username ? u.open(n.type, n.url, n.async, n.username, n.password) : u.open(n.type, n.url, n.async), n.xhrFields)
                            for (s in n.xhrFields) u[s] = n.xhrFields[s];
                        n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (s in i) u.setRequestHeader(s, i[s])
                        } catch (l) {}
                        u.send(n.hasContent && n.data || null), r = function(e, i) {
                            var s, l, c, f;
                            try {
                                if (r && (i || u.readyState === 4))
                                    if (r = t, a && (u.onreadystatechange = ut.noop, Kn && delete Jn[a]), i) u.readyState !== 4 && u.abort();
                                    else {
                                        f = {}, s = u.status, l = u.getAllResponseHeaders(), typeof u.responseText == "string" && (f.text = u.responseText);
                                        try {
                                            c = u.statusText
                                        } catch (p) {
                                            c = ""
                                        }
                                        s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = f.text ? 200 : 404
                                    }
                            } catch (d) {
                                i || o(-1, d)
                            }
                            f && o(s, c, f, l)
                        }, n.async ? u.readyState === 4 ? setTimeout(r) : (a = ++Qn, Kn && (Jn || (Jn = {}, ut(e).unload(Kn)), Jn[a] = r), u.onreadystatechange = r) : r()
                    },
                    abort: function() {
                        r && r(t, !0)
                    }
                }
            }
        });
        var Zn, er, tr = /^(?:toggle|show|hide)$/,
            nr = new RegExp("^(?:([+-])=|)(" + lt + ")([a-z%]*)$", "i"),
            rr = /queueHooks$/,
            ir = [R],
            or = {
                "*": [function(e, t) {
                    var n, r, i = this.createTween(e, t),
                        o = nr.exec(t),
                        a = i.cur(),
                        s = +a || 0,
                        u = 1,
                        l = 20;
                    if (o) {
                        if (n = +o[2], r = o[3] || (ut.cssNumber[e] ? "" : "px"), "px" !== r && s) {
                            s = ut.css(i.elem, e, !0) || n || 1;
                            do u = u || ".5", s /= u, ut.style(i.elem, e, s + r); while (u !== (u = i.cur() / a) && 1 !== u && --l)
                        }
                        i.unit = r, i.start = s, i.end = o[1] ? s + (o[1] + 1) * n : n
                    }
                    return i
                }]
            };
        ut.Animation = ut.extend(I, {
            tweener: function(e, t) {
                ut.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, r = 0, i = e.length; i > r; r++) n = e[r], or[n] = or[n] || [], or[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? ir.unshift(e) : ir.push(e)
            }
        }), ut.Tween = B, B.prototype = {
            constructor: B,
            init: function(e, t, n, r, i, o) {
                this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ut.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = B.propHooks[this.prop];
                return e && e.get ? e.get(this) : B.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = B.propHooks[this.prop];
                return this.pos = t = this.options.duration ? ut.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : B.propHooks._default.set(this), this
            }
        }, B.prototype.init.prototype = B.prototype, B.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return e.elem[e.prop] == null || e.elem.style && e.elem.style[e.prop] != null ? (t = ut.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
                },
                set: function(e) {
                    ut.fx.step[e.prop] ? ut.fx.step[e.prop](e) : e.elem.style && (e.elem.style[ut.cssProps[e.prop]] != null || ut.cssHooks[e.prop]) ? ut.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                }
            }
        }, B.propHooks.scrollTop = B.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, ut.each(["toggle", "show", "hide"], function(e, t) {
            var n = ut.fn[t];
            ut.fn[t] = function(e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(W(t, !0), e, r, i)
            }
        }), ut.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(T).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var i = ut.isEmptyObject(e),
                    o = ut.speed(t, n, r),
                    a = function() {
                        var t = I(this, ut.extend({}, e), o);
                        a.finish = function() {
                            t.stop(!0)
                        }, (i || ut._data(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(e, n, r) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop, t(r)
                };
                return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        n = null != e && e + "queueHooks",
                        o = ut.timers,
                        a = ut._data(this);
                    if (n) a[n] && a[n].stop && i(a[n]);
                    else
                        for (n in a) a[n] && a[n].stop && rr.test(n) && i(a[n]);
                    for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
                    (t || !r) && ut.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = ut._data(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        o = ut.timers,
                        a = r ? r.length : 0;
                    for (n.finish = !0, ut.queue(this, e, []), i && i.cur && i.cur.finish && i.cur.finish.call(this), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), ut.each({
            slideDown: W("show"),
            slideUp: W("hide"),
            slideToggle: W("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            ut.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), ut.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? ut.extend({}, e) : {
                complete: n || !n && t || ut.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !ut.isFunction(t) && t
            };
            return r.duration = ut.fx.off ? 0 : typeof r.duration == "number" ? r.duration : r.duration in ut.fx.speeds ? ut.fx.speeds[r.duration] : ut.fx.speeds._default, (r.queue == null || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                ut.isFunction(r.old) && r.old.call(this), r.queue && ut.dequeue(this, r.queue)
            }, r
        }, ut.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }
        }, ut.timers = [], ut.fx = B.prototype.init, ut.fx.tick = function() {
            var e, n = ut.timers,
                r = 0;
            for (Zn = ut.now(); r < n.length; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1);
            n.length || ut.fx.stop(), Zn = t
        }, ut.fx.timer = function(e) {
            e() && ut.timers.push(e) && ut.fx.start()
        }, ut.fx.interval = 13, ut.fx.start = function() {
            er || (er = setInterval(ut.fx.tick, ut.fx.interval))
        }, ut.fx.stop = function() {
            clearInterval(er), er = null
        }, ut.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, ut.fx.step = {}, ut.expr && ut.expr.filters && (ut.expr.filters.animated = function(e) {
            return ut.grep(ut.timers, function(t) {
                return e === t.elem
            }).length
        }), ut.fn.offset = function(e) {
            if (arguments.length) return e === t ? this : this.each(function(t) {
                ut.offset.setOffset(this, e, t)
            });
            var n, r, i = {
                    top: 0,
                    left: 0
                },
                o = this[0],
                a = o && o.ownerDocument;
            if (a) return n = a.documentElement, ut.contains(n, o) ? (typeof o.getBoundingClientRect !== Y && (i = o.getBoundingClientRect()), r = X(a), {
                top: i.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
                left: i.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
            }) : i
        }, ut.offset = {
            setOffset: function(e, t, n) {
                var r = ut.css(e, "position");
                "static" === r && (e.style.position = "relative");
                var i, o, a = ut(e),
                    s = a.offset(),
                    u = ut.css(e, "top"),
                    l = ut.css(e, "left"),
                    c = ("absolute" === r || "fixed" === r) && ut.inArray("auto", [u, l]) > -1,
                    f = {},
                    p = {};
                c ? (p = a.position(), i = p.top, o = p.left) : (i = parseFloat(u) || 0, o = parseFloat(l) || 0), ut.isFunction(t) && (t = t.call(e, n, s)), t.top != null && (f.top = t.top - s.top + i), t.left != null && (f.left = t.left - s.left + o), "using" in t ? t.using.call(e, f) : a.css(f)
            }
        }, ut.fn.extend({
            position: function() {
                if (this[0]) {
                    var e, t, n = {
                            top: 0,
                            left: 0
                        },
                        r = this[0];
                    return ut.css(r, "position") === "fixed" ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ut.nodeName(e[0], "html") || (n = e.offset()), n.top += ut.css(e[0], "borderTopWidth", !0), n.left += ut.css(e[0], "borderLeftWidth", !0)), {
                        top: t.top - n.top - ut.css(r, "marginTop", !0),
                        left: t.left - n.left - ut.css(r, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent || V.documentElement; e && !ut.nodeName(e, "html") && ut.css(e, "position") === "static";) e = e.offsetParent;
                    return e || V.documentElement
                })
            }
        }), ut.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, n) {
            var r = /Y/.test(n);
            ut.fn[e] = function(i) {
                return ut.access(this, function(e, i, o) {
                    var a = X(e);
                    return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? ut(a).scrollLeft() : o, r ? o : ut(a).scrollTop()) : e[i] = o, void 0)
                }, e, i, arguments.length, null)
            }
        }), ut.each({
            Height: "height",
            Width: "width"
        }, function(e, n) {
            ut.each({
                padding: "inner" + e,
                content: n,
                "": "outer" + e
            }, function(r, i) {
                ut.fn[i] = function(i, o) {
                    var a = arguments.length && (r || "boolean" != typeof i),
                        s = r || (i === !0 || o === !0 ? "margin" : "border");
                    return ut.access(this, function(n, r, i) {
                        var o;
                        return ut.isWindow(n) ? n.document.documentElement["client" + e] : n.nodeType === 9 ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? ut.css(n, r, s) : ut.style(n, r, i, s)
                    }, n, a ? i : t, a, null)
                }
            })
        }), e.jQuery = e.$ = ut, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
            return ut
        })
    })(window),


    function(e) {
        function t(t) {
            return !t || t.allowPageScroll !== void 0 || t.swipe === void 0 && t.swipeStatus === void 0 || (t.allowPageScroll = l), t || (t = {}), t = e.extend({}, e.fn.swipe.defaults, t), this.each(function() {
                var r = e(this),
                    i = r.data(T);
                i || (i = new n(this, t), r.data(T, i))
            })
        }

        function n(t, n) {
            function C(t) {
                if (!(X() || e(t.target).closest(n.excludedElements, bt).length > 0)) {
                    var r, i = t.originalEvent,
                        o = w ? i.touches[0] : i;
                    return xt = v, w ? wt = i.touches.length : t.preventDefault(), pt = 0, dt = null, yt = null, ht = 0, gt = 0, mt = 0, vt = 1, pinchDistance = 0, Tt = J(), B(), !w || wt === n.fingers || n.fingers === m || _() ? (U(0, o), Ct = rt(), 2 == wt && (U(1, i.touches[1]), gt = mt = Q(Tt[0].start, Tt[1].start)), (n.swipeStatus || n.pinchStatus) && (r = D(i, xt))) : r = !1, r === !1 ? (xt = x, D(i, xt), r) : (z(!0), void 0)
                }
            }

            function k(e) {
                var t = e.originalEvent;
                if (xt !== b && xt !== x && !W()) {
                    var r, i = w ? t.touches[0] : t,
                        o = Y(i);
                    if (kt = rt(), w && (wt = t.touches.length), xt = y, 2 == wt && (0 == gt ? (U(1, t.touches[1]), gt = mt = Q(Tt[0].start, Tt[1].start)) : (Y(t.touches[1]), mt = Q(Tt[0].end, Tt[1].end), yt = Z(Tt[0].end, Tt[1].end)), vt = K(gt, mt), pinchDistance = Math.abs(gt - mt)), wt === n.fingers || n.fingers === m || !w || _()) {
                        if (dt = nt(o.start, o.end), F(e, dt), pt = et(o.start, o.end), ht = G(), (n.swipeStatus || n.pinchStatus) && (r = D(t, xt)), !n.triggerOnTouchEnd || n.triggerOnTouchLeave) {
                            var a = !0;
                            if (n.triggerOnTouchLeave) {
                                var s = it(this);
                                a = ot(o.end, s)
                            }!n.triggerOnTouchEnd && a ? xt = L(y) : n.triggerOnTouchLeave && !a && (xt = L(b)), (xt == x || xt == b) && D(t, xt)
                        }
                    } else xt = x, D(t, xt);
                    r === !1 && (xt = x, D(t, xt))
                }
            }

            function E(e) {
                var t = e.originalEvent;
                if (w && t.touches.length > 0) return R(), !0;
                if (W() && (wt = St), kt = rt(), n.triggerOnTouchEnd || n.triggerOnTouchEnd == 0 && xt === y) {
                    xt = b;
                    var r = wt === n.fingers || n.fingers === m || !w,
                        i = Tt[0].end.x !== 0,
                        o = r && i && ($() || q());
                    o ? D(t, xt) : (xt = x, D(t, xt))
                } else xt === y && (xt = x, D(t, xt));
                z(!1)
            }

            function S() {
                wt = 0, kt = 0, Ct = 0, gt = 0, mt = 0, vt = 1, B(), z(!1)
            }

            function N(e) {
                var t = e.originalEvent;
                n.triggerOnTouchLeave && (xt = L(b), D(t, xt))
            }

            function A() {
                bt.unbind(st, C), bt.unbind(ft, S), bt.unbind(ut, k), bt.unbind(lt, E), ct && bt.unbind(ct, N), z(!1)
            }

            function L(e) {
                var t = e,
                    r = M(),
                    i = H();
                return r ? !i || e != y || n.triggerOnTouchEnd && !n.triggerOnTouchLeave ? !i && e == b && n.triggerOnTouchLeave && (t = x) : t = b : t = x, t
            }

            function D(e, t) {
                var n = void 0;
                return I() && (n = j(e, t, f)), _() && n !== !1 && (n = j(e, t, p)), P() && n !== !1 && (n = j(e, t, d)), t === x && S(e), t === b && (w ? e.touches.length == 0 && S(e) : S(e)), n
            }

            function j(e, t, l) {
                var c = void 0;
                if (l == f) {
                    if (n.swipeStatus && (c = n.swipeStatus.call(bt, e, t, dt || null, pt || 0, ht || 0, wt), c === !1)) return !1;
                    if (t == b && q()) {
                        if (n.swipe && (c = n.swipe.call(bt, e, dt, pt, ht, wt), c === !1)) return !1;
                        switch (dt) {
                            case r:
                                n.swipeLeft && (c = n.swipeLeft.call(bt, e, dt, pt, ht, wt));
                                break;
                            case i:
                                n.swipeRight && (c = n.swipeRight.call(bt, e, dt, pt, ht, wt));
                                break;
                            case o:
                                n.swipeUp && (c = n.swipeUp.call(bt, e, dt, pt, ht, wt));
                                break;
                            case a:
                                n.swipeDown && (c = n.swipeDown.call(bt, e, dt, pt, ht, wt))
                        }
                    }
                }
                if (l == p) {
                    if (n.pinchStatus && (c = n.pinchStatus.call(bt, e, t, yt || null, pinchDistance || 0, ht || 0, wt, vt), c === !1)) return !1;
                    if (t == b && $()) switch (yt) {
                        case s:
                            n.pinchIn && (c = n.pinchIn.call(bt, e, yt || null, pinchDistance || 0, ht || 0, wt, vt));
                            break;
                        case u:
                            n.pinchOut && (c = n.pinchOut.call(bt, e, yt || null, pinchDistance || 0, ht || 0, wt, vt))
                    }
                }
                return l == d && t === x && (!n.click || 1 !== wt && w || !isNaN(pt) && 0 !== pt || (c = n.click.call(bt, e, e.target))), c
            }

            function H() {
                return n.threshold !== null ? pt >= n.threshold : !0
            }

            function O() {
                return n.pinchThreshold !== null ? pinchDistance >= n.pinchThreshold : !0
            }

            function M() {
                var e;
                return e = n.maxTimeThreshold ? ht >= n.maxTimeThreshold ? !1 : !0 : !0
            }

            function F(e, t) {
                if (n.allowPageScroll === l || _()) e.preventDefault();
                else {
                    var s = n.allowPageScroll === c;
                    switch (t) {
                        case r:
                            (n.swipeLeft && s || !s && n.allowPageScroll != h) && e.preventDefault();
                            break;
                        case i:
                            (n.swipeRight && s || !s && n.allowPageScroll != h) && e.preventDefault();
                            break;
                        case o:
                            (n.swipeUp && s || !s && n.allowPageScroll != g) && e.preventDefault();
                            break;
                        case a:
                            (n.swipeDown && s || !s && n.allowPageScroll != g) && e.preventDefault()
                    }
                }
            }

            function $() {
                return O()
            }

            function _() {
                return !!(n.pinchStatus || n.pinchIn || n.pinchOut)
            }

            function q() {
                var e = M(),
                    t = H(),
                    n = t && e;
                return n
            }

            function I() {
                return !!(n.swipe || n.swipeStatus || n.swipeLeft || n.swipeRight || n.swipeUp || n.swipeDown)
            }

            function P() {
                return !!n.click
            }

            function R() {
                Et = rt(), St = event.touches.length + 1
            }

            function B() {
                Et = 0, St = 0
            }

            function W() {
                var e = !1;
                if (Et) {
                    var t = rt() - Et;
                    t <= n.fingerReleaseThreshold && (e = !0)
                }
                return e
            }

            function X() {
                return !(bt.data(T + "_intouch") !== !0)
            }

            function z(e) {
                e === !0 ? (bt.bind(ut, k), bt.bind(lt, E), ct && bt.bind(ct, N)) : (bt.unbind(ut, k, !1), bt.unbind(lt, E, !1), ct && bt.unbind(ct, N, !1)), bt.data(T + "_intouch", e === !0)
            }

            function U(e, t) {
                var n = t.identifier !== void 0 ? t.identifier : 0;
                return Tt[e].identifier = n, Tt[e].start.x = Tt[e].end.x = t.pageX, Tt[e].start.y = Tt[e].end.y = t.pageY, Tt[e]
            }

            function Y(e) {
                var t = e.identifier !== void 0 ? e.identifier : 0,
                    n = V(t);
                return n.end.x = e.pageX, n.end.y = e.pageY, n
            }

            function V(e) {
                for (var t = 0; t < Tt.length; t++)
                    if (Tt[t].identifier == e) return Tt[t]
            }

            function J() {
                for (var e = [], t = 0; 5 >= t; t++) e.push({
                    start: {
                        x: 0,
                        y: 0
                    },
                    end: {
                        x: 0,
                        y: 0
                    },
                    identifier: 0
                });
                return e
            }

            function G() {
                return kt - Ct
            }

            function Q(e, t) {
                var n = Math.abs(e.x - t.x),
                    r = Math.abs(e.y - t.y);
                return Math.round(Math.sqrt(n * n + r * r))
            }

            function K(e, t) {
                var n = 1 * (t / e);
                return n.toFixed(2)
            }

            function Z() {
                return 1 > vt ? u : s
            }

            function et(e, t) {
                return Math.round(Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)))
            }

            function tt(e, t) {
                var n = e.x - t.x,
                    r = t.y - e.y,
                    i = Math.atan2(r, n),
                    o = Math.round(180 * i / Math.PI);
                return 0 > o && (o = 360 - Math.abs(o)), o
            }

            function nt(e, t) {
                var n = tt(e, t);
                return 45 >= n && n >= 0 ? r : 360 >= n && n >= 315 ? r : n >= 135 && 225 >= n ? i : n > 45 && 135 > n ? a : o
            }

            function rt() {
                var e = new Date;
                return e.getTime()
            }

            function it(t) {
                t = e(t);
                var n = t.offset(),
                    r = {
                        left: n.left,
                        right: n.left + t.outerWidth(),
                        top: n.top,
                        bottom: n.top + t.outerHeight()
                    };
                return r
            }

            function ot(e, t) {
                return e.x > t.left && e.x < t.right && e.y > t.top && e.y < t.bottom
            }
            var at = w || !n.fallbackToMouseEvents,
                st = at ? "touchstart" : "mousedown",
                ut = at ? "touchmove" : "mousemove",
                lt = at ? "touchend" : "mouseup",
                ct = at ? null : "mouseleave",
                ft = "touchcancel",
                pt = 0,
                dt = null,
                ht = 0,
                gt = 0,
                mt = 0,
                vt = 1,
                yt = 0,
                bt = e(t),
                xt = "start",
                wt = 0,
                Tt = null,
                Ct = 0,
                kt = 0,
                Et = 0,
                St = 0;
            try {
                bt.bind(st, C), bt.bind(ft, S)
            } catch (Nt) {
                e.error("events not supported " + st + "," + ft + " on jQuery.swipe")
            }
            this.enable = function() {
                return bt.bind(st, C), bt.bind(ft, S), bt
            }, this.disable = function() {
                return A(), bt
            }, this.destroy = function() {
                return A(), bt.data(T, null), bt
            }
        }
        var r = "left",
            i = "right",
            o = "up",
            a = "down",
            s = "in",
            u = "out",
            l = "none",
            c = "auto",
            f = "swipe",
            p = "pinch",
            d = "click",
            h = "horizontal",
            g = "vertical",
            m = "all",
            v = "start",
            y = "move",
            b = "end",
            x = "cancel",
            w = "ontouchstart" in window,
            T = "TouchSwipe",
            C = {
                fingers: 1,
                threshold: 75,
                pinchThreshold: 20,
                maxTimeThreshold: null,
                fingerReleaseThreshold: 250,
                swipe: null,
                swipeLeft: null,
                swipeRight: null,
                swipeUp: null,
                swipeDown: null,
                swipeStatus: null,
                pinchIn: null,
                pinchOut: null,
                pinchStatus: null,
                click: null,
                triggerOnTouchEnd: !0,
                triggerOnTouchLeave: !1,
                allowPageScroll: "auto",
                fallbackToMouseEvents: !0,
                excludedElements: "button, input, select, textarea, a, .noSwipe"
            };
        e.fn.swipe = function(n) {
            var r = e(this),
                i = r.data(T);
            if (i && "string" == typeof n) {
                if (i[n]) return i[n].apply(this, Array.prototype.slice.call(arguments, 1));
                e.error("Method " + n + " does not exist on jQuery.swipe")
            } else if (!(i || "object" != typeof n && n)) return t.apply(this, arguments);
            return r
        }, e.fn.swipe.defaults = C, e.fn.swipe.phases = {
            PHASE_START: v,
            PHASE_MOVE: y,
            PHASE_END: b,
            PHASE_CANCEL: x
        }, e.fn.swipe.directions = {
            LEFT: r,
            RIGHT: i,
            UP: o,
            DOWN: a,
            IN: s,
            OUT: u
        }, e.fn.swipe.pageScroll = {
            NONE: l,
            HORIZONTAL: h,
            VERTICAL: g,
            AUTO: c
        }, e.fn.swipe.fingers = {
            ONE: 1,
            TWO: 2,
            THREE: 3,
            ALL: m
        }
    }(jQuery), FastClick.prototype.deviceIsAndroid = navigator.userAgent.indexOf("Android") > 0, FastClick.prototype.deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent), FastClick.prototype.deviceIsIOS4 = FastClick.prototype.deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent), FastClick.prototype.deviceIsIOSWithBadTarget = FastClick.prototype.deviceIsIOS && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent), FastClick.prototype.needsClick = function(e) {
        "use strict";
        switch (e.nodeName.toLowerCase()) {
            case "button":
            case "input":
                return this.deviceIsIOS && e.type === "file" ? !0 : e.disabled;
            case "label":
            case "video":
                return !0;
            default:
                return /\bneedsclick\b/.test(e.className)
        }
    }, FastClick.prototype.needsFocus = function(e) {
        "use strict";
        switch (e.nodeName.toLowerCase()) {
            case "textarea":
            case "select":
                return !0;
            case "input":
                switch (e.type) {
                    case "button":
                    case "checkbox":
                    case "file":
                    case "image":
                    case "radio":
                    case "submit":
                        return !1
                }
                return !e.disabled && !e.readOnly;
            default:
                return /\bneedsfocus\b/.test(e.className)
        }
    }, FastClick.prototype.sendClick = function(e, t) {
        "use strict";
        var n, r;
        document.activeElement && document.activeElement !== e && document.activeElement.blur(), r = t.changedTouches[0], n = document.createEvent("MouseEvents"), n.initMouseEvent("click", !0, !0, window, 1, r.screenX, r.screenY, r.clientX, r.clientY, !1, !1, !1, !1, 0, null), n.forwardedTouchEvent = !0, e.dispatchEvent(n)
    }, FastClick.prototype.focus = function(e) {
        "use strict";
        var t;
        this.deviceIsIOS && e.setSelectionRange ? (t = e.value.length, e.setSelectionRange(t, t)) : e.focus()
    }, FastClick.prototype.updateScrollParent = function(e) {
        "use strict";
        var t, n;
        if (t = e.fastClickScrollParent, !t || !t.contains(e)) {
            n = e;
            do {
                if (n.scrollHeight > n.offsetHeight) {
                    t = n, e.fastClickScrollParent = n;
                    break
                }
                n = n.parentElement
            } while (n)
        }
        t && (t.fastClickLastScrollTop = t.scrollTop)
    }, FastClick.prototype.getTargetElementFromEventTarget = function(e) {
        "use strict";
        return e.nodeType === Node.TEXT_NODE ? e.parentNode : e
    }, FastClick.prototype.onTouchStart = function(e) {
        "use strict";
        var t, n, r;
        if (t = this.getTargetElementFromEventTarget(e.target), n = e.targetTouches[0], this.deviceIsIOS) {
            if (r = window.getSelection(), r.rangeCount && !r.isCollapsed) return !0;
            if (!this.deviceIsIOS4) {
                if (n.identifier === this.lastTouchIdentifier) return e.preventDefault(), !1;
                this.lastTouchIdentifier = n.identifier, this.updateScrollParent(t)
            }
        }
        return this.trackingClick = !0, this.trackingClickStart = e.timeStamp, this.targetElement = t, this.touchStartX = n.pageX, this.touchStartY = n.pageY, e.timeStamp - this.lastClickTime < 200 && e.preventDefault(), !0
    }, FastClick.prototype.touchHasMoved = function(e) {
        "use strict";
        var t = e.changedTouches[0];
        return Math.abs(t.pageX - this.touchStartX) > 10 || Math.abs(t.pageY - this.touchStartY) > 10 ? !0 : !1
    }, FastClick.prototype.findControl = function(e) {
        "use strict";
        return e.control !== void 0 ? e.control : e.htmlFor ? document.getElementById(e.htmlFor) : e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
    }, FastClick.prototype.onTouchEnd = function(e) {
        "use strict";
        var t, n, r, i, o, a = this.targetElement;
        if (this.touchHasMoved(e) && (this.trackingClick = !1, this.targetElement = null), !this.trackingClick) return !0;
        if (e.timeStamp - this.lastClickTime < 200) return this.cancelNextClick = !0, !0;
        if (this.lastClickTime = e.timeStamp, n = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, this.deviceIsIOSWithBadTarget && (o = e.changedTouches[0], a = document.elementFromPoint(o.pageX - window.pageXOffset, o.pageY - window.pageYOffset)), r = a.tagName.toLowerCase(), "label" === r) {
            if (t = this.findControl(a)) {
                if (this.focus(a), this.deviceIsAndroid) return !1;
                a = t
            }
        } else if (this.needsFocus(a)) return e.timeStamp - n > 100 || this.deviceIsIOS && window.top !== window && "input" === r ? (this.targetElement = null, !1) : (this.focus(a), this.deviceIsIOS4 && "select" === r || (this.targetElement = null, e.preventDefault()), !1);
        if (this.deviceIsIOS && !this.deviceIsIOS4 && (i = a.fastClickScrollParent, i && i.fastClickLastScrollTop !== i.scrollTop)) return !0;
        if (!this.needsClick(a)) {
            e.preventDefault();
            var s = this;
            setTimeout(function() {
                s.sendClick(a, e)
            }, 0)
        }
        return !1
    }, FastClick.prototype.onTouchCancel = function() {
        "use strict";
        this.trackingClick = !1, this.targetElement = null
    }, FastClick.prototype.onMouse = function(e) {
        "use strict";
        return this.targetElement ? e.forwardedTouchEvent ? !0 : e.cancelable ? !this.needsClick(this.targetElement) || this.cancelNextClick ? (e.stopImmediatePropagation ? e.stopImmediatePropagation() : e.propagationStopped = !0, e.stopPropagation(), e.preventDefault(), !1) : !0 : !0 : !0
    }, FastClick.prototype.onClick = function(e) {
        "use strict";
        var t;
        return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : e.target.type === "submit" && e.detail === 0 ? !0 : (t = this.onMouse(e), t || (this.targetElement = null), t)
    }, FastClick.prototype.destroy = function() {
        "use strict";
        var e = this.layer;
        this.deviceIsAndroid && (e.removeEventListener("mouseover", this.onMouse, !0), e.removeEventListener("mousedown", this.onMouse, !0), e.removeEventListener("mouseup", this.onMouse, !0)), e.removeEventListener("click", this.onClick, !0), e.removeEventListener("touchstart", this.onTouchStart, !1), e.removeEventListener("touchend", this.onTouchEnd, !1), e.removeEventListener("touchcancel", this.onTouchCancel, !1)
    }, FastClick.attach = function(e) {
        "use strict";
        return new FastClick(e)
    }, "undefined" != typeof define && define.amd && define(function() {
        "use strict";
        return FastClick
    }), "undefined" != typeof module && module.exports && (module.exports = FastClick.attach, module.exports.FastClick = FastClick),
    function() {
        var e = [].slice;
        window.HAML = function() {
            function t() {}
            return t.escape = function(e) {
                return ("" + e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/\//g, "&#47;")
            }, t.cleanValue = function(e) {
                switch (e) {
                    case null:
                    case void 0:
                        return "";
                    case !0:
                    case !1:
                        return "" + e;
                    default:
                        return e
                }
            }, t.extend = function() {
                var t, n, r, i, o, a, s;
                for (n = arguments[0], i = 2 <= arguments.length ? e.call(arguments, 1) : [], a = 0, s = i.length; s > a; a++) {
                    r = i[a];
                    for (t in r) o = r[t], n[t] = o
                }
                return n
            }, t.globals = function() {
                return {}
            }, t.context = function(e) {
                return this.extend({}, t.globals(), e)
            }, t.preserve = function(e) {
                return e.replace(/\n/g, "&#x000A;")
            }, t.findAndPreserve = function(e) {
                var t;
                return t = "textarea,pre".split(",").join("|"), e = e.replace(RegExp("<(" + t + ")>([^]*?)<\\/\\1>", "g"), function(e, t, n) {
                    return "<" + t + ">" + window.HAML.preserve(n) + "</" + t + ">"
                })
            }, t.surround = function(e, t, n) {
                var r;
                return e + ((r = n.call(this)) != null ? r.replace(/^\s+|\s+$/g, "") : void 0) + t
            }, t.succeed = function(e, t) {
                var n;
                return ((n = t.call(this)) != null ? n.replace(/\s+$/g, "") : void 0) + e
            }, t.precede = function(e, t) {
                var n;
                return e + ((n = t.call(this)) != null ? n.replace(/^\s+/g, "") : void 0)
            }, t.reference = function(e, t) {
                var n, r, i, o;
                return r = t ? t + "_" : "", r += typeof e.hamlObjectRef == "function" ? e.hamlObjectRef() : (((o = e.constructor) != null ? o.name : void 0) || "object").replace(/\W+/g, "_").replace(/([a-z\d])([A-Z])/g, "$1_$2").toLowerCase(), n = typeof e.to_key == "function" ? e.to_key() : typeof e.id == "function" ? e.id() : e.id ? e.id : e, i = "class='" + r + "'", n ? i += " id='" + r + "_" + n + "'" : void 0
            }, t
        }()
    }.call(this),
    function() {
        var e;
        (e = window.JST) == null && (window.JST = {}), window.JST["search/google_item"] = function(e) {
            return function() {
                var e, t, n;
                return t = window.HAML.escape, e = window.HAML.cleanValue, n = [], n.push("<li>\n  <a href='/places/" + t(e(this.name)) + "/' data-id='" + t(e(this.id)) + "'>\n    <span class='name'>" + e(this.name) + "</span>"), this.region && n.push("    <span class='suburb'>" + e(this.region) + "</span>"), this.state && n.push("    <span class='state'>" + e(this.state) + "</span>"), n.push("  </a>\n</li>"), n.join("\n").replace(/\s(\w+)='true'/gm, " $1").replace(/\s(\w+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
            }.call(window.HAML.context(e))
        }
    }.call(this),
    function() {
        var e;
        (e = window.JST) == null && (window.JST = {}), window.JST["search/item"] = function(e) {
            return function() {
                var e, t, n;
                return t = window.HAML.escape, e = window.HAML.cleanValue, n = [], n.push("<li>\n  <a class='" + t(e(this.type)) + "' href='" + t(e(this.url)) + "' data-id='" + t(e(this.id)) + "'>\n    <span class='name'>" + e(this.name) + "</span>"), this.region && n.push("    <span class='suburb'>" + e(this.region) + "</span>"), this.state && n.push("    <span class='state'>" + e(this.state) + "</span>"), n.push("  </a>\n</li>"), n.join("\n").replace(/\s(\w+)='true'/gm, " $1").replace(/\s(\w+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
            }.call(window.HAML.context(e))
        }
    }.call(this), Array.prototype.indexOf || (Array.prototype.indexOf = function(e) {
        for (var t = 0; t < this.length; t++)
            if (this[t] == e) return t;
        return -1
    }),
    
    function() {
        var e, t, n, r;
        e = $(document.body), t = $(window), r = window.innerWidth > 0 ? window.innerWidth : screen.width, n = function(e, t) {
            return window.open(e, t, "width=1000,height=600")
        }, $(function() {
            var i, o, a, s, u, l, c;
            return FastClick.attach(document.body), 480 > r && (a = $("meta[name=viewport]"), s = function() {
                return 480 > r ? a.attr("content", "width=480, minimum-scale=.25, maximum-scale=.6, initial-scale=1, user-scalable=no") : a.attr("content", "width=device-width, initial-scale=1, user-scalable=no")
            }, t.on("orientationchange", s), s()), $("#features").on("mouseenter click", ".feature", function(e) {
                var t;
                return t = $(e.target).closest(".feature"), $("#features .active").removeClass("active"), t.addClass("active")
            }), $("ul.indicators").on("mouseenter click", "li", function(e) {
                var t;
                return t = $(e.target).closest("li"), $("ul.indicators li.active").removeClass("active"), t.addClass("active")
            }), e.addClass("move-wave"), $("a.scroll").click(function() {
                var e, t;
                return $("#hero").length === 0 ? !0 : (e = this.href.substring(this.href.indexOf("#")), t = $(e).offset().top - 100, "#top" === e && (t = 0), $("html, body").animate({
                    scrollTop: t
                }, 500), !1)
            }), o = $(".feature"), i = $(".dots a"), i.click(function() {
                var e, t;
                return e = $(this), t = i.index(e), l(t), !1
            }), $(".indicators").on("mouseover", function() {
                return clearTimeout(window.indicatorsRotator)
            }), $(".indicators").on("mouseout", function() {
                return u()
            }), u = function() {
                return window.indicatorsRotator = setTimeout(function() {
                    var e;
                    return e = $(".indicators li").index($(".indicators li.active")), e + 1 === $(".indicators li").length && (e = -1), e += 1, $(".indicators li").removeClass("active"), $($(".indicators li")[e]).addClass("active"), u()
                }, 4e3)
            }, u(), $(".prev").click(function() {
                return c(-1), !1
            }), $(".next").click(function() {
                return c(1), !1
            }), c = function(e) {
                var t, n;
                return t = $(".dots .active"), n = i.index(t), n = 1 === e ? 5 === n ? 0 : n + e : 0 === n ? 5 : n + e, l(n)
            }, l = function(e) {
                return $(".feature.active").removeClass("active"), $(".dots .active").removeClass("active"), $(o.get(e)).addClass("active"), $(i.get(e)).addClass("active")
            }, $("#features").swipe({
                swipeLeft: function() {
                    return c(1)
                },
                swipeRight: function() {
                    return c(-1)
                }
            }), $(".social").click(function() {
                return n(this.href, "gnarly"), !1
            })
        })
    }.call(this);
