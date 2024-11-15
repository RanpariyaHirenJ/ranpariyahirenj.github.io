function overlayBox(e) {
    target = $("#" + e), target.fadeIn(), $(".close_btn, .close_box").click(function() {
        target.fadeOut()
    })
}

function onlyNos(e, t) {
    try {
        if (window.event) var n = window.event.keyCode;
        else {
            if (!e) return !0;
            n = e.which
        }
        return !(n > 31 && (n < 48 || n > 57)) || 45 == n || 32 == n
    } catch (e) {
        alert(e.Description)
    }
}

function form_validate_jquery(e) {
    var t = !0;
    return $(e).find("input, select, textarea, file").each(function() {
        var e = $(this).attr("title");
        switch ($(this).attr("validation")) {
            case "text":
                $(this).val() == $(this).attr("placeholder") || "" == $(this).val() ? ($(this).css("border", "1px solid red"), $(this).val(""), $(this).prev().addClass("active"), $(this).attr("placeholder", e + " cannot be blank!"), t = !1) : $(this).css("border", "1px solid green");
                break;
            case "password":
                $(this).val() == $(this).attr("placeholder") || "" == $(this).val() ? ($(this).css("border", "1px solid red"), $(this).val(""), $(this).prev().addClass("active"), $(this).attr("placeholder", e + " cannot be blank!"), t = !1) : $(this).val().length < 6 ? ($(this).css("border", "1px solid red"), $(this).val(""), $(this).attr("placeholder", e + " should be min 6 char!"), $(this).prev().addClass("active"), t = !1) : $(this).css("border", "1px solid green");
                break;
            case "email":
                $(this).val() == $(this).attr("placeholder") || "" == $(this).val() ? ($(this).css("border", "1px solid red"), $(this).val(""), $(this).prev().addClass("active"), $(this).attr("placeholder", e + " cannot be blank!"), t = !1) : -1 == $(this).val().indexOf("@") || -1 == $(this).val().indexOf(".") ? ($(this).css("border", "1px solid red"), $(this).val(""), $(this).prev().addClass("active"), $(this).attr("placeholder", e + " is not valid email address!"), t = !1) : $(this).css("border", "1px solid green");
                break;
            case "number":
                $(this).val() == $(this).attr("placeholder") || "" == $(this).val() ? ($(this).css("border", "1px solid red"), $(this).val(""), $(this).prev().addClass("active"), $(this).attr("placeholder", e + " cannot be blank!"), t = !1) : $(this).val().length < 10 ? ($(this).css("border", "1px solid red"), $(this).val(""), $(this).prev().addClass("active"), $(this).attr("placeholder", "Enter Valid Mobile Number!"), t = !1) : $(this).css("border", "1px solid green");
                break;
            case "mobile":
                $(this).val() == $(this).attr("placeholder") || "" == $(this).val() ? ($(this).css("border", "1px solid red"), $(this).val(""), $(this).prev().addClass("active"), $(this).attr("placeholder", e + " cannot be blank !"), t = !1) : $(this).val().length < 10 ? ($(this).css("border", "1px solid red"), $(this).val(""), $(this).prev().addClass("active"), $(this).attr("placeholder", e + " must be 10 digits !"), t = !1) : $(this).css("border", "1px solid green");
                break;
            case "file":
                if ($(this).val() == $(this).attr("placeholder") || "" == $(this).val()) $(this).prev().css("border", "1px solid red"), $(this).val(""), $(this).prev().addClass("active"), t = !1;
                else {
                    var n = $(this).val().split(".").pop().toLowerCase(); - 1 == $.inArray(n, ["pdf", "doc", "docx", "xls", "xlsx", "ppt", "pptx", "jpg", "jpeg"]) ? ($(this).prev().css("border", "1px solid red"), $(this).val(""), $(this).prev().addClass("active"), $(this).parents(".file-upload").find("span").html("Please upload valid file format"), t = !1) : $(this).prev().css("border", "1px solid green")
                }
        }
    }), t
}

function fixedFooter() {
    $("body").css("min-height", $(window).height())
}

function tabnextclick(e) {
    var t = $(".tabResult");
    tab = $(".tabResult").prev(".tabNav").find("a");
    for (var n = 0; n < tab.length; n++) tab.eq(n).attr("rel") === e && tab.eq(n).parents("li").removeClass("disabled");
    "none" === t.children("div#" + e).css("display") && (t.children("div").slideUp(), $(".tabNav li a").removeClass("active"), $(".tabNav ").find("a[rel=" + e + "]").parents("li").children("a").addClass("active"), t.children("div#" + e).slideDown());
    var i = $(".tabNav").offset().top;
    $("body,html").animate({
        scrollTop: i
    }, 800)
}

function overlayBox(e) {
    target = $("#" + e), $("html,body").addClass("scroll_hidden"), target.fadeIn(), $(".close_btn,.close_box").click(function() {
        $("html,body").removeClass("scroll_hidden"), target.fadeOut()
    })
}! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    var n = [],
        i = n.slice,
        o = n.concat,
        s = n.push,
        r = n.indexOf,
        a = {},
        l = a.toString,
        c = a.hasOwnProperty,
        d = {},
        u = "1.11.1",
        p = function(e, t) {
            return new p.fn.init(e, t)
        },
        f = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        h = /^-ms-/,
        g = /-([\da-z])/gi,
        v = function(e, t) {
            return t.toUpperCase()
        };

    function m(e) {
        var t = e.length,
            n = p.type(e);
        return "function" !== n && !p.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
    }
    p.fn = p.prototype = {
        jquery: u,
        constructor: p,
        selector: "",
        length: 0,
        toArray: function() {
            return i.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : i.call(this)
        },
        pushStack: function(e) {
            var t = p.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return p.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(p.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(i.apply(this, arguments))
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
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: s,
        sort: n.sort,
        splice: n.splice
    }, p.extend = p.fn.extend = function() {
        var e, t, n, i, o, s, r = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof r && (c = r, r = arguments[a] || {}, a++), "object" == typeof r || p.isFunction(r) || (r = {}), a === l && (r = this, a--); l > a; a++)
            if (null != (o = arguments[a]))
                for (i in o) e = r[i], r !== (n = o[i]) && (c && n && (p.isPlainObject(n) || (t = p.isArray(n))) ? (t ? (t = !1, s = e && p.isArray(e) ? e : []) : s = e && p.isPlainObject(e) ? e : {}, r[i] = p.extend(c, s, n)) : void 0 !== n && (r[i] = n));
        return r
    }, p.extend({
        expando: "jQuery" + (u + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === p.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === p.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return !p.isArray(e) && e - parseFloat(e) >= 0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== p.type(e) || e.nodeType || p.isWindow(e)) return !1;
            try {
                if (e.constructor && !c.call(e, "constructor") && !c.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (e) {
                return !1
            }
            if (d.ownLast)
                for (t in e) return c.call(e, t);
            for (t in e);
            return void 0 === t || c.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? a[l.call(e)] || "object" : typeof e
        },
        globalEval: function(t) {
            t && p.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(h, "ms-").replace(g, v)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, n) {
            var i = 0,
                o = e.length,
                s = m(e);
            if (n) {
                if (s)
                    for (; o > i && !1 !== t.apply(e[i], n); i++);
                else
                    for (i in e)
                        if (!1 === t.apply(e[i], n)) break
            } else if (s)
                for (; o > i && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(f, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (m(Object(e)) ? p.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
        },
        inArray: function(e, t, n) {
            var i;
            if (t) {
                if (r) return r.call(t, e, n);
                for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, o = e.length; n > i;) e[o++] = t[i++];
            if (n != n)
                for (; void 0 !== t[i];) e[o++] = t[i++];
            return e.length = o, e
        },
        grep: function(e, t, n) {
            for (var i = [], o = 0, s = e.length, r = !n; s > o; o++) !t(e[o], o) !== r && i.push(e[o]);
            return i
        },
        map: function(e, t, n) {
            var i, s = 0,
                r = e.length,
                a = [];
            if (m(e))
                for (; r > s; s++) null != (i = t(e[s], s, n)) && a.push(i);
            else
                for (s in e) null != (i = t(e[s], s, n)) && a.push(i);
            return o.apply([], a)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, o, s;
            return "string" == typeof t && (s = e[t], t = e, e = s), p.isFunction(e) ? (n = i.call(arguments, 2), (o = function() {
                return e.apply(t || this, n.concat(i.call(arguments)))
            }).guid = e.guid = e.guid || p.guid++, o) : void 0
        },
        now: function() {
            return +new Date
        },
        support: d
    }), p.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        a["[object " + t + "]"] = t.toLowerCase()
    });
    var y = function(e) {
        var t, n, i, o, s, r, a, l, c, d, u, p, f, h, g, v, m, y, b, x = "sizzle" + -new Date,
            w = e.document,
            $ = 0,
            T = 0,
            k = se(),
            S = se(),
            C = se(),
            A = function(e, t) {
                return e === t && (u = !0), 0
            },
            E = "undefined",
            P = 1 << 31,
            L = {}.hasOwnProperty,
            N = [],
            D = N.pop,
            H = N.push,
            M = N.push,
            j = N.slice,
            O = N.indexOf || function(e) {
                for (var t = 0, n = this.length; n > t; t++)
                    if (this[t] === e) return t;
                return -1
            },
            z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            I = "[\\x20\\t\\r\\n\\f]",
            F = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            q = F.replace("w", "w#"),
            R = "\\[" + I + "*(" + F + ")(?:" + I + "*([*^$|!~]?=)" + I + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + q + "))|)" + I + "*\\]",
            _ = ":(" + F + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)",
            B = new RegExp("^" + I + "+|((?:^|[^\\\\])(?:\\\\.)*)" + I + "+$", "g"),
            W = new RegExp("^" + I + "*," + I + "*"),
            X = new RegExp("^" + I + "*([>+~]|" + I + ")" + I + "*"),
            Y = new RegExp("=" + I + "*([^\\]'\"]*?)" + I + "*\\]", "g"),
            U = new RegExp(_),
            V = new RegExp("^" + q + "$"),
            Q = {
                ID: new RegExp("^#(" + F + ")"),
                CLASS: new RegExp("^\\.(" + F + ")"),
                TAG: new RegExp("^(" + F.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + R),
                PSEUDO: new RegExp("^" + _),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + I + "*(even|odd|(([+-]|)(\\d*)n|)" + I + "*(?:([+-]|)" + I + "*(\\d+)|))" + I + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + z + ")$", "i"),
                needsContext: new RegExp("^" + I + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + I + "*((?:-\\d)?\\d*)" + I + "*\\)|)(?=[^-]|$)", "i")
            },
            Z = /^(?:input|select|textarea|button)$/i,
            G = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = /'|\\/g,
            ne = new RegExp("\\\\([\\da-f]{1,6}" + I + "?|(" + I + ")|.)", "ig"),
            ie = function(e, t, n) {
                var i = "0x" + t - 65536;
                return i != i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            };
        try {
            M.apply(N = j.call(w.childNodes), w.childNodes), N[w.childNodes.length].nodeType
        } catch (e) {
            M = {
                apply: N.length ? function(e, t) {
                    H.apply(e, j.call(t))
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }

        function oe(e, t, i, o) {
            var s, a, c, d, u, h, m, y, $, T;
            if ((t ? t.ownerDocument || t : w) !== f && p(t), i = i || [], !e || "string" != typeof e) return i;
            if (1 !== (d = (t = t || f).nodeType) && 9 !== d) return [];
            if (g && !o) {
                if (s = J.exec(e))
                    if (c = s[1]) {
                        if (9 === d) {
                            if (!(a = t.getElementById(c)) || !a.parentNode) return i;
                            if (a.id === c) return i.push(a), i
                        } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(c)) && b(t, a) && a.id === c) return i.push(a), i
                    } else {
                        if (s[2]) return M.apply(i, t.getElementsByTagName(e)), i;
                        if ((c = s[3]) && n.getElementsByClassName && t.getElementsByClassName) return M.apply(i, t.getElementsByClassName(c)), i
                    } if (n.qsa && (!v || !v.test(e))) {
                    if (y = m = x, $ = t, T = 9 === d && e, 1 === d && "object" !== t.nodeName.toLowerCase()) {
                        for (h = r(e), (m = t.getAttribute("id")) ? y = m.replace(te, "\\$&") : t.setAttribute("id", y), y = "[id='" + y + "'] ", u = h.length; u--;) h[u] = y + ge(h[u]);
                        $ = ee.test(e) && fe(t.parentNode) || t, T = h.join(",")
                    }
                    if (T) try {
                        return M.apply(i, $.querySelectorAll(T)), i
                    } catch (e) {} finally {
                        m || t.removeAttribute("id")
                    }
                }
            }
            return l(e.replace(B, "$1"), t, i, o)
        }

        function se() {
            var e = [];
            return function t(n, o) {
                return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = o
            }
        }

        function re(e) {
            return e[x] = !0, e
        }

        function ae(e) {
            var t = f.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function le(e, t) {
            for (var n = e.split("|"), o = e.length; o--;) i.attrHandle[n[o]] = t
        }

        function ce(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || P) - (~e.sourceIndex || P);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function de(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function ue(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function pe(e) {
            return re(function(t) {
                return t = +t, re(function(n, i) {
                    for (var o, s = e([], n.length, t), r = s.length; r--;) n[o = s[r]] && (n[o] = !(i[o] = n[o]))
                })
            })
        }

        function fe(e) {
            return e && typeof e.getElementsByTagName !== E && e
        }
        for (t in n = oe.support = {}, s = oe.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, p = oe.setDocument = function(e) {
                var t, o = e ? e.ownerDocument || e : w,
                    r = o.defaultView;
                return o !== f && 9 === o.nodeType && o.documentElement ? (f = o, h = o.documentElement, g = !s(o), r && r !== r.top && (r.addEventListener ? r.addEventListener("unload", function() {
                    p()
                }, !1) : r.attachEvent && r.attachEvent("onunload", function() {
                    p()
                })), n.attributes = ae(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), n.getElementsByTagName = ae(function(e) {
                    return e.appendChild(o.createComment("")), !e.getElementsByTagName("*").length
                }), n.getElementsByClassName = K.test(o.getElementsByClassName) && ae(function(e) {
                    return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
                }), n.getById = ae(function(e) {
                    return h.appendChild(e).id = x, !o.getElementsByName || !o.getElementsByName(x).length
                }), n.getById ? (i.find.ID = function(e, t) {
                    if (typeof t.getElementById !== E && g) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }, i.filter.ID = function(e) {
                    var t = e.replace(ne, ie);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete i.find.ID, i.filter.ID = function(e) {
                    var t = e.replace(ne, ie);
                    return function(e) {
                        var n = typeof e.getAttributeNode !== E && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), i.find.TAG = n.getElementsByTagName ? function(e, t) {
                    return typeof t.getElementsByTagName !== E ? t.getElementsByTagName(e) : void 0
                } : function(e, t) {
                    var n, i = [],
                        o = 0,
                        s = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = s[o++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return s
                }, i.find.CLASS = n.getElementsByClassName && function(e, t) {
                    return typeof t.getElementsByClassName !== E && g ? t.getElementsByClassName(e) : void 0
                }, m = [], v = [], (n.qsa = K.test(o.querySelectorAll)) && (ae(function(e) {
                    e.innerHTML = "<select msallowclip=''><option selected=''></option></select>", e.querySelectorAll("[msallowclip^='']").length && v.push("[*^$]=" + I + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + I + "*(?:value|" + z + ")"), e.querySelectorAll(":checked").length || v.push(":checked")
                }), ae(function(e) {
                    var t = o.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + I + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                })), (n.matchesSelector = K.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ae(function(e) {
                    n.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), m.push("!=", _)
                }), v = v.length && new RegExp(v.join("|")), m = m.length && new RegExp(m.join("|")), t = K.test(h.compareDocumentPosition), b = t || K.test(h.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, A = t ? function(e, t) {
                    if (e === t) return u = !0, 0;
                    var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e === o || e.ownerDocument === w && b(w, e) ? -1 : t === o || t.ownerDocument === w && b(w, t) ? 1 : d ? O.call(d, e) - O.call(d, t) : 0 : 4 & i ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return u = !0, 0;
                    var n, i = 0,
                        s = e.parentNode,
                        r = t.parentNode,
                        a = [e],
                        l = [t];
                    if (!s || !r) return e === o ? -1 : t === o ? 1 : s ? -1 : r ? 1 : d ? O.call(d, e) - O.call(d, t) : 0;
                    if (s === r) return ce(e, t);
                    for (n = e; n = n.parentNode;) a.unshift(n);
                    for (n = t; n = n.parentNode;) l.unshift(n);
                    for (; a[i] === l[i];) i++;
                    return i ? ce(a[i], l[i]) : a[i] === w ? -1 : l[i] === w ? 1 : 0
                }, o) : f
            }, oe.matches = function(e, t) {
                return oe(e, null, null, t)
            }, oe.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== f && p(e), t = t.replace(Y, "='$1']"), !(!n.matchesSelector || !g || m && m.test(t) || v && v.test(t))) try {
                    var i = y.call(e, t);
                    if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                } catch (e) {}
                return oe(t, f, null, [e]).length > 0
            }, oe.contains = function(e, t) {
                return (e.ownerDocument || e) !== f && p(e), b(e, t)
            }, oe.attr = function(e, t) {
                (e.ownerDocument || e) !== f && p(e);
                var o = i.attrHandle[t.toLowerCase()],
                    s = o && L.call(i.attrHandle, t.toLowerCase()) ? o(e, t, !g) : void 0;
                return void 0 !== s ? s : n.attributes || !g ? e.getAttribute(t) : (s = e.getAttributeNode(t)) && s.specified ? s.value : null
            }, oe.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, oe.uniqueSort = function(e) {
                var t, i = [],
                    o = 0,
                    s = 0;
                if (u = !n.detectDuplicates, d = !n.sortStable && e.slice(0), e.sort(A), u) {
                    for (; t = e[s++];) t === e[s] && (o = i.push(s));
                    for (; o--;) e.splice(i[o], 1)
                }
                return d = null, e
            }, o = oe.getText = function(e) {
                var t, n = "",
                    i = 0,
                    s = e.nodeType;
                if (s) {
                    if (1 === s || 9 === s || 11 === s) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                    } else if (3 === s || 4 === s) return e.nodeValue
                } else
                    for (; t = e[i++];) n += o(t);
                return n
            }, (i = oe.selectors = {
                cacheLength: 50,
                createPseudo: re,
                match: Q,
                attrHandle: {},
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
                        return e[1] = e[1].replace(ne, ie), e[3] = (e[3] || e[4] || e[5] || "").replace(ne, ie), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return Q.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && U.test(n) && (t = r(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(ne, ie).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = k[e + " "];
                        return t || (t = new RegExp("(^|" + I + ")" + e + "(" + I + "|$)")) && k(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== E && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, t, n) {
                        return function(i) {
                            var o = oe.attr(i, e);
                            return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && o.indexOf(n) > -1 : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? (" " + o + " ").indexOf(n) > -1 : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function(e, t, n, i, o) {
                        var s = "nth" !== e.slice(0, 3),
                            r = "last" !== e.slice(-4),
                            a = "of-type" === t;
                        return 1 === i && 0 === o ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, l) {
                            var c, d, u, p, f, h, g = s !== r ? "nextSibling" : "previousSibling",
                                v = t.parentNode,
                                m = a && t.nodeName.toLowerCase(),
                                y = !l && !a;
                            if (v) {
                                if (s) {
                                    for (; g;) {
                                        for (u = t; u = u[g];)
                                            if (a ? u.nodeName.toLowerCase() === m : 1 === u.nodeType) return !1;
                                        h = g = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [r ? v.firstChild : v.lastChild], r && y) {
                                    for (f = (c = (d = v[x] || (v[x] = {}))[e] || [])[0] === $ && c[1], p = c[0] === $ && c[2], u = f && v.childNodes[f]; u = ++f && u && u[g] || (p = f = 0) || h.pop();)
                                        if (1 === u.nodeType && ++p && u === t) {
                                            d[e] = [$, f, p];
                                            break
                                        }
                                } else if (y && (c = (t[x] || (t[x] = {}))[e]) && c[0] === $) p = c[1];
                                else
                                    for (;
                                        (u = ++f && u && u[g] || (p = f = 0) || h.pop()) && ((a ? u.nodeName.toLowerCase() !== m : 1 !== u.nodeType) || !++p || (y && ((u[x] || (u[x] = {}))[e] = [$, p]), u !== t)););
                                return (p -= o) === i || p % i == 0 && p / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var n, o = i.pseudos[e] || i.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                        return o[x] ? o(t) : o.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? re(function(e, n) {
                            for (var i, s = o(e, t), r = s.length; r--;) e[i = O.call(e, s[r])] = !(n[i] = s[r])
                        }) : function(e) {
                            return o(e, 0, n)
                        }) : o
                    }
                },
                pseudos: {
                    not: re(function(e) {
                        var t = [],
                            n = [],
                            i = a(e.replace(B, "$1"));
                        return i[x] ? re(function(e, t, n, o) {
                            for (var s, r = i(e, null, o, []), a = e.length; a--;)(s = r[a]) && (e[a] = !(t[a] = s))
                        }) : function(e, o, s) {
                            return t[0] = e, i(t, null, s, n), !n.pop()
                        }
                    }),
                    has: re(function(e) {
                        return function(t) {
                            return oe(e, t).length > 0
                        }
                    }),
                    contains: re(function(e) {
                        return function(t) {
                            return (t.textContent || t.innerText || o(t)).indexOf(e) > -1
                        }
                    }),
                    lang: re(function(e) {
                        return V.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(ne, ie).toLowerCase(),
                            function(t) {
                                var n;
                                do {
                                    if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === h
                    },
                    focus: function(e) {
                        return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return !1 === e.disabled
                    },
                    disabled: function(e) {
                        return !0 === e.disabled
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !i.pseudos.empty(e)
                    },
                    header: function(e) {
                        return G.test(e.nodeName)
                    },
                    input: function(e) {
                        return Z.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: pe(function() {
                        return [0]
                    }),
                    last: pe(function(e, t) {
                        return [t - 1]
                    }),
                    eq: pe(function(e, t, n) {
                        return [0 > n ? n + t : n]
                    }),
                    even: pe(function(e, t) {
                        for (var n = 0; t > n; n += 2) e.push(n);
                        return e
                    }),
                    odd: pe(function(e, t) {
                        for (var n = 1; t > n; n += 2) e.push(n);
                        return e
                    }),
                    lt: pe(function(e, t, n) {
                        for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                        return e
                    }),
                    gt: pe(function(e, t, n) {
                        for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }).pseudos.nth = i.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) i.pseudos[t] = de(t);
        for (t in {
                submit: !0,
                reset: !0
            }) i.pseudos[t] = ue(t);

        function he() {}

        function ge(e) {
            for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
            return i
        }

        function ve(e, t, n) {
            var i = t.dir,
                o = n && "parentNode" === i,
                s = T++;
            return t.first ? function(t, n, s) {
                for (; t = t[i];)
                    if (1 === t.nodeType || o) return e(t, n, s)
            } : function(t, n, r) {
                var a, l, c = [$, s];
                if (r) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || o) && e(t, n, r)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || o) {
                            if ((a = (l = t[x] || (t[x] = {}))[i]) && a[0] === $ && a[1] === s) return c[2] = a[2];
                            if (l[i] = c, c[2] = e(t, n, r)) return !0
                        }
            }
        }

        function me(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var o = e.length; o--;)
                    if (!e[o](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function ye(e, t, n, i, o) {
            for (var s, r = [], a = 0, l = e.length, c = null != t; l > a; a++)(s = e[a]) && (!n || n(s, i, o)) && (r.push(s), c && t.push(a));
            return r
        }

        function be(e, t, n, i, o, s) {
            return i && !i[x] && (i = be(i)), o && !o[x] && (o = be(o, s)), re(function(s, r, a, l) {
                var c, d, u, p = [],
                    f = [],
                    h = r.length,
                    g = s || function(e, t, n) {
                        for (var i = 0, o = t.length; o > i; i++) oe(e, t[i], n);
                        return n
                    }(t || "*", a.nodeType ? [a] : a, []),
                    v = !e || !s && t ? g : ye(g, p, e, a, l),
                    m = n ? o || (s ? e : h || i) ? [] : r : v;
                if (n && n(v, m, a, l), i)
                    for (c = ye(m, f), i(c, [], a, l), d = c.length; d--;)(u = c[d]) && (m[f[d]] = !(v[f[d]] = u));
                if (s) {
                    if (o || e) {
                        if (o) {
                            for (c = [], d = m.length; d--;)(u = m[d]) && c.push(v[d] = u);
                            o(null, m = [], c, l)
                        }
                        for (d = m.length; d--;)(u = m[d]) && (c = o ? O.call(s, u) : p[d]) > -1 && (s[c] = !(r[c] = u))
                    }
                } else m = ye(m === r ? m.splice(h, m.length) : m), o ? o(null, r, m, l) : M.apply(r, m)
            })
        }

        function xe(e) {
            for (var t, n, o, s = e.length, r = i.relative[e[0].type], a = r || i.relative[" "], l = r ? 1 : 0, d = ve(function(e) {
                    return e === t
                }, a, !0), u = ve(function(e) {
                    return O.call(t, e) > -1
                }, a, !0), p = [function(e, n, i) {
                    return !r && (i || n !== c) || ((t = n).nodeType ? d(e, n, i) : u(e, n, i))
                }]; s > l; l++)
                if (n = i.relative[e[l].type]) p = [ve(me(p), n)];
                else {
                    if ((n = i.filter[e[l].type].apply(null, e[l].matches))[x]) {
                        for (o = ++l; s > o && !i.relative[e[o].type]; o++);
                        return be(l > 1 && me(p), l > 1 && ge(e.slice(0, l - 1).concat({
                            value: " " === e[l - 2].type ? "*" : ""
                        })).replace(B, "$1"), n, o > l && xe(e.slice(l, o)), s > o && xe(e = e.slice(o)), s > o && ge(e))
                    }
                    p.push(n)
                } return me(p)
        }

        function we(e, t) {
            var n = t.length > 0,
                o = e.length > 0,
                s = function(s, r, a, l, d) {
                    var u, p, h, g = 0,
                        v = "0",
                        m = s && [],
                        y = [],
                        b = c,
                        x = s || o && i.find.TAG("*", d),
                        w = $ += null == b ? 1 : Math.random() || .1,
                        T = x.length;
                    for (d && (c = r !== f && r); v !== T && null != (u = x[v]); v++) {
                        if (o && u) {
                            for (p = 0; h = e[p++];)
                                if (h(u, r, a)) {
                                    l.push(u);
                                    break
                                } d && ($ = w)
                        }
                        n && ((u = !h && u) && g--, s && m.push(u))
                    }
                    if (g += v, n && v !== g) {
                        for (p = 0; h = t[p++];) h(m, y, r, a);
                        if (s) {
                            if (g > 0)
                                for (; v--;) m[v] || y[v] || (y[v] = D.call(l));
                            y = ye(y)
                        }
                        M.apply(l, y), d && !s && y.length > 0 && g + t.length > 1 && oe.uniqueSort(l)
                    }
                    return d && ($ = w, c = b), m
                };
            return n ? re(s) : s
        }
        return he.prototype = i.filters = i.pseudos, i.setFilters = new he, r = oe.tokenize = function(e, t) {
            var n, o, s, r, a, l, c, d = S[e + " "];
            if (d) return t ? 0 : d.slice(0);
            for (a = e, l = [], c = i.preFilter; a;) {
                for (r in (!n || (o = W.exec(a))) && (o && (a = a.slice(o[0].length) || a), l.push(s = [])), n = !1, (o = X.exec(a)) && (n = o.shift(), s.push({
                        value: n,
                        type: o[0].replace(B, " ")
                    }), a = a.slice(n.length)), i.filter) !(o = Q[r].exec(a)) || c[r] && !(o = c[r](o)) || (n = o.shift(), s.push({
                    value: n,
                    type: r,
                    matches: o
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? oe.error(e) : S(e, l).slice(0)
        }, a = oe.compile = function(e, t) {
            var n, i = [],
                o = [],
                s = C[e + " "];
            if (!s) {
                for (t || (t = r(e)), n = t.length; n--;)(s = xe(t[n]))[x] ? i.push(s) : o.push(s);
                (s = C(e, we(o, i))).selector = e
            }
            return s
        }, l = oe.select = function(e, t, o, s) {
            var l, c, d, u, p, f = "function" == typeof e && e,
                h = !s && r(e = f.selector || e);
            if (o = o || [], 1 === h.length) {
                if ((c = h[0] = h[0].slice(0)).length > 2 && "ID" === (d = c[0]).type && n.getById && 9 === t.nodeType && g && i.relative[c[1].type]) {
                    if (!(t = (i.find.ID(d.matches[0].replace(ne, ie), t) || [])[0])) return o;
                    f && (t = t.parentNode), e = e.slice(c.shift().value.length)
                }
                for (l = Q.needsContext.test(e) ? 0 : c.length; l-- && (d = c[l], !i.relative[u = d.type]);)
                    if ((p = i.find[u]) && (s = p(d.matches[0].replace(ne, ie), ee.test(c[0].type) && fe(t.parentNode) || t))) {
                        if (c.splice(l, 1), !(e = s.length && ge(c))) return M.apply(o, s), o;
                        break
                    }
            }
            return (f || a(e, h))(s, t, !g, o, ee.test(e) && fe(t.parentNode) || t), o
        }, n.sortStable = x.split("").sort(A).join("") === x, n.detectDuplicates = !!u, p(), n.sortDetached = ae(function(e) {
            return 1 & e.compareDocumentPosition(f.createElement("div"))
        }), ae(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || le("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), n.attributes && ae(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || le("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), ae(function(e) {
            return null == e.getAttribute("disabled")
        }) || le(z, function(e, t, n) {
            var i;
            return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), oe
    }(e);
    p.find = y, p.expr = y.selectors, p.expr[":"] = p.expr.pseudos, p.unique = y.uniqueSort, p.text = y.getText, p.isXMLDoc = y.isXML, p.contains = y.contains;
    var b = p.expr.match.needsContext,
        x = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        w = /^.[^:#\[\.,]*$/;

    function $(e, t, n) {
        if (p.isFunction(t)) return p.grep(e, function(e, i) {
            return !!t.call(e, i, e) !== n
        });
        if (t.nodeType) return p.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (w.test(t)) return p.filter(t, e, n);
            t = p.filter(t, e)
        }
        return p.grep(e, function(e) {
            return p.inArray(e, t) >= 0 !== n
        })
    }
    p.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? p.find.matchesSelector(i, e) ? [i] : [] : p.find.matches(e, p.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, p.fn.extend({
        find: function(e) {
            var t, n = [],
                i = this,
                o = i.length;
            if ("string" != typeof e) return this.pushStack(p(e).filter(function() {
                for (t = 0; o > t; t++)
                    if (p.contains(i[t], this)) return !0
            }));
            for (t = 0; o > t; t++) p.find(e, i[t], n);
            return (n = this.pushStack(o > 1 ? p.unique(n) : n)).selector = this.selector ? this.selector + " " + e : e, n
        },
        filter: function(e) {
            return this.pushStack($(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack($(this, e || [], !0))
        },
        is: function(e) {
            return !!$(this, "string" == typeof e && b.test(e) ? p(e) : e || [], !1).length
        }
    });
    var T, k = e.document,
        S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (p.fn.init = function(e, t) {
        var n, i;
        if (!e) return this;
        if ("string" == typeof e) {
            if (!(n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : S.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || T).find(e) : this.constructor(t).find(e);
            if (n[1]) {
                if (t = t instanceof p ? t[0] : t, p.merge(this, p.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : k, !0)), x.test(n[1]) && p.isPlainObject(t))
                    for (n in t) p.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this
            }
            if ((i = k.getElementById(n[2])) && i.parentNode) {
                if (i.id !== n[2]) return T.find(e);
                this.length = 1, this[0] = i
            }
            return this.context = k, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : p.isFunction(e) ? void 0 !== T.ready ? T.ready(e) : e(p) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), p.makeArray(e, this))
    }).prototype = p.fn, T = p(k);
    var C = /^(?:parents|prev(?:Until|All))/,
        A = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function E(e, t) {
        do {
            e = e[t]
        } while (e && 1 !== e.nodeType);
        return e
    }
    p.extend({
        dir: function(e, t, n) {
            for (var i = [], o = e[t]; o && 9 !== o.nodeType && (void 0 === n || 1 !== o.nodeType || !p(o).is(n));) 1 === o.nodeType && i.push(o), o = o[t];
            return i
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), p.fn.extend({
        has: function(e) {
            var t, n = p(e, this),
                i = n.length;
            return this.filter(function() {
                for (t = 0; i > t; t++)
                    if (p.contains(this, n[t])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, i = 0, o = this.length, s = [], r = b.test(e) || "string" != typeof e ? p(e, t || this.context) : 0; o > i; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (r ? r.index(n) > -1 : 1 === n.nodeType && p.find.matchesSelector(n, e))) {
                        s.push(n);
                        break
                    } return this.pushStack(s.length > 1 ? p.unique(s) : s)
        },
        index: function(e) {
            return e ? "string" == typeof e ? p.inArray(this[0], p(e)) : p.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(p.unique(p.merge(this.get(), p(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), p.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return p.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return p.dir(e, "parentNode", n)
        },
        next: function(e) {
            return E(e, "nextSibling")
        },
        prev: function(e) {
            return E(e, "previousSibling")
        },
        nextAll: function(e) {
            return p.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return p.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return p.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return p.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return p.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return p.sibling(e.firstChild)
        },
        contents: function(e) {
            return p.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : p.merge([], e.childNodes)
        }
    }, function(e, t) {
        p.fn[e] = function(n, i) {
            var o = p.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = p.filter(i, o)), this.length > 1 && (A[e] || (o = p.unique(o)), C.test(e) && (o = o.reverse())), this.pushStack(o)
        }
    });
    var P, L = /\S+/g,
        N = {};

    function D() {
        k.addEventListener ? (k.removeEventListener("DOMContentLoaded", H, !1), e.removeEventListener("load", H, !1)) : (k.detachEvent("onreadystatechange", H), e.detachEvent("onload", H))
    }

    function H() {
        (k.addEventListener || "load" === event.type || "complete" === k.readyState) && (D(), p.ready())
    }
    p.Callbacks = function(e) {
        e = "string" == typeof e ? N[e] || function(e) {
            var t = N[e] = {};
            return p.each(e.match(L) || [], function(e, n) {
                t[n] = !0
            }), t
        }(e) : p.extend({}, e);
        var t, n, i, o, s, r, a = [],
            l = !e.once && [],
            c = function(u) {
                for (n = e.memory && u, i = !0, s = r || 0, r = 0, o = a.length, t = !0; a && o > s; s++)
                    if (!1 === a[s].apply(u[0], u[1]) && e.stopOnFalse) {
                        n = !1;
                        break
                    } t = !1, a && (l ? l.length && c(l.shift()) : n ? a = [] : d.disable())
            },
            d = {
                add: function() {
                    if (a) {
                        var i = a.length;
                        ! function t(n) {
                            p.each(n, function(n, i) {
                                var o = p.type(i);
                                "function" === o ? e.unique && d.has(i) || a.push(i) : i && i.length && "string" !== o && t(i)
                            })
                        }(arguments), t ? o = a.length : n && (r = i, c(n))
                    }
                    return this
                },
                remove: function() {
                    return a && p.each(arguments, function(e, n) {
                        for (var i;
                            (i = p.inArray(n, a, i)) > -1;) a.splice(i, 1), t && (o >= i && o--, s >= i && s--)
                    }), this
                },
                has: function(e) {
                    return e ? p.inArray(e, a) > -1 : !(!a || !a.length)
                },
                empty: function() {
                    return a = [], o = 0, this
                },
                disable: function() {
                    return a = l = n = void 0, this
                },
                disabled: function() {
                    return !a
                },
                lock: function() {
                    return l = void 0, n || d.disable(), this
                },
                locked: function() {
                    return !l
                },
                fireWith: function(e, n) {
                    return !a || i && !l || (n = [e, (n = n || []).slice ? n.slice() : n], t ? l.push(n) : c(n)), this
                },
                fire: function() {
                    return d.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return d
    }, p.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", p.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", p.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", p.Callbacks("memory")]
                ],
                n = "pending",
                i = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return p.Deferred(function(n) {
                            p.each(t, function(t, s) {
                                var r = p.isFunction(e[t]) && e[t];
                                o[s[1]](function() {
                                    var e = r && r.apply(this, arguments);
                                    e && p.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s[0] + "With"](this === i ? n.promise() : this, r ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? p.extend(e, i) : i
                    }
                },
                o = {};
            return i.pipe = i.then, p.each(t, function(e, s) {
                var r = s[2],
                    a = s[3];
                i[s[1]] = r.add, a && r.add(function() {
                    n = a
                }, t[1 ^ e][2].disable, t[2][2].lock), o[s[0]] = function() {
                    return o[s[0] + "With"](this === o ? i : this, arguments), this
                }, o[s[0] + "With"] = r.fireWith
            }), i.promise(o), e && e.call(o, o), o
        },
        when: function(e) {
            var t, n, o, s = 0,
                r = i.call(arguments),
                a = r.length,
                l = 1 !== a || e && p.isFunction(e.promise) ? a : 0,
                c = 1 === l ? e : p.Deferred(),
                d = function(e, n, o) {
                    return function(s) {
                        n[e] = this, o[e] = arguments.length > 1 ? i.call(arguments) : s, o === t ? c.notifyWith(n, o) : --l || c.resolveWith(n, o)
                    }
                };
            if (a > 1)
                for (t = new Array(a), n = new Array(a), o = new Array(a); a > s; s++) r[s] && p.isFunction(r[s].promise) ? r[s].promise().done(d(s, o, r)).fail(c.reject).progress(d(s, n, t)) : --l;
            return l || c.resolveWith(o, r), c.promise()
        }
    }), p.fn.ready = function(e) {
        return p.ready.promise().done(e), this
    }, p.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? p.readyWait++ : p.ready(!0)
        },
        ready: function(e) {
            if (!0 === e ? !--p.readyWait : !p.isReady) {
                if (!k.body) return setTimeout(p.ready);
                p.isReady = !0, !0 !== e && --p.readyWait > 0 || (P.resolveWith(k, [p]), p.fn.triggerHandler && (p(k).triggerHandler("ready"), p(k).off("ready")))
            }
        }
    }), p.ready.promise = function(t) {
        if (!P)
            if (P = p.Deferred(), "complete" === k.readyState) setTimeout(p.ready);
            else if (k.addEventListener) k.addEventListener("DOMContentLoaded", H, !1), e.addEventListener("load", H, !1);
        else {
            k.attachEvent("onreadystatechange", H), e.attachEvent("onload", H);
            var n = !1;
            try {
                n = null == e.frameElement && k.documentElement
            } catch (e) {}
            n && n.doScroll && function e() {
                if (!p.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (t) {
                        return setTimeout(e, 50)
                    }
                    D(), p.ready()
                }
            }()
        }
        return P.promise(t)
    };
    var M, j = "undefined";
    for (M in p(d)) break;
    d.ownLast = "0" !== M, d.inlineBlockNeedsLayout = !1, p(function() {
            var e, t, n, i;
            (n = k.getElementsByTagName("body")[0]) && n.style && (t = k.createElement("div"), (i = k.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== j && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", d.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i))
        }),
        function() {
            var e = k.createElement("div");
            if (null == d.deleteExpando) {
                d.deleteExpando = !0;
                try {
                    delete e.test
                } catch (e) {
                    d.deleteExpando = !1
                }
            }
            e = null
        }(), p.acceptData = function(e) {
            var t = p.noData[(e.nodeName + " ").toLowerCase()],
                n = +e.nodeType || 1;
            return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t)
        };
    var O = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        z = /([A-Z])/g;

    function I(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var i = "data-" + t.replace(z, "-$1").toLowerCase();
            if ("string" == typeof(n = e.getAttribute(i))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : O.test(n) ? p.parseJSON(n) : n)
                } catch (e) {}
                p.data(e, t, n)
            } else n = void 0
        }
        return n
    }

    function F(e) {
        var t;
        for (t in e)
            if (("data" !== t || !p.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function q(e, t, i, o) {
        if (p.acceptData(e)) {
            var s, r, a = p.expando,
                l = e.nodeType,
                c = l ? p.cache : e,
                d = l ? e[a] : e[a] && a;
            if (d && c[d] && (o || c[d].data) || void 0 !== i || "string" != typeof t) return d || (d = l ? e[a] = n.pop() || p.guid++ : a), c[d] || (c[d] = l ? {} : {
                toJSON: p.noop
            }), ("object" == typeof t || "function" == typeof t) && (o ? c[d] = p.extend(c[d], t) : c[d].data = p.extend(c[d].data, t)), r = c[d], o || (r.data || (r.data = {}), r = r.data), void 0 !== i && (r[p.camelCase(t)] = i), "string" == typeof t ? null == (s = r[t]) && (s = r[p.camelCase(t)]) : s = r, s
        }
    }

    function R(e, t, n) {
        if (p.acceptData(e)) {
            var i, o, s = e.nodeType,
                r = s ? p.cache : e,
                a = s ? e[p.expando] : p.expando;
            if (r[a]) {
                if (t && (i = n ? r[a] : r[a].data)) {
                    p.isArray(t) ? t = t.concat(p.map(t, p.camelCase)) : t in i ? t = [t] : t = (t = p.camelCase(t)) in i ? [t] : t.split(" "), o = t.length;
                    for (; o--;) delete i[t[o]];
                    if (n ? !F(i) : !p.isEmptyObject(i)) return
                }(n || (delete r[a].data, F(r[a]))) && (s ? p.cleanData([e], !0) : d.deleteExpando || r != r.window ? delete r[a] : r[a] = null)
            }
        }
    }
    p.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return !!(e = e.nodeType ? p.cache[e[p.expando]] : e[p.expando]) && !F(e)
        },
        data: function(e, t, n) {
            return q(e, t, n)
        },
        removeData: function(e, t) {
            return R(e, t)
        },
        _data: function(e, t, n) {
            return q(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return R(e, t, !0)
        }
    }), p.fn.extend({
        data: function(e, t) {
            var n, i, o, s = this[0],
                r = s && s.attributes;
            if (void 0 === e) {
                if (this.length && (o = p.data(s), 1 === s.nodeType && !p._data(s, "parsedAttrs"))) {
                    for (n = r.length; n--;) r[n] && (0 === (i = r[n].name).indexOf("data-") && I(s, i = p.camelCase(i.slice(5)), o[i]));
                    p._data(s, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                p.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                p.data(this, e, t)
            }) : s ? I(s, e, p.data(s, e)) : void 0
        },
        removeData: function(e) {
            return this.each(function() {
                p.removeData(this, e)
            })
        }
    }), p.extend({
        queue: function(e, t, n) {
            var i;
            return e ? (t = (t || "fx") + "queue", i = p._data(e, t), n && (!i || p.isArray(n) ? i = p._data(e, t, p.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = p.queue(e, t),
                i = n.length,
                o = n.shift(),
                s = p._queueHooks(e, t);
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete s.stop, o.call(e, function() {
                p.dequeue(e, t)
            }, s)), !i && s && s.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return p._data(e, n) || p._data(e, n, {
                empty: p.Callbacks("once memory").add(function() {
                    p._removeData(e, t + "queue"), p._removeData(e, n)
                })
            })
        }
    }), p.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? p.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = p.queue(this, e, t);
                p._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && p.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                p.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1,
                o = p.Deferred(),
                s = this,
                r = this.length,
                a = function() {
                    --i || o.resolveWith(s, [s])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; r--;)(n = p._data(s[r], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
            return a(), o.promise(t)
        }
    });
    var _ = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        B = ["Top", "Right", "Bottom", "Left"],
        W = function(e, t) {
            return e = t || e, "none" === p.css(e, "display") || !p.contains(e.ownerDocument, e)
        },
        X = p.access = function(e, t, n, i, o, s, r) {
            var a = 0,
                l = e.length,
                c = null == n;
            if ("object" === p.type(n))
                for (a in o = !0, n) p.access(e, t, a, n[a], !0, s, r);
            else if (void 0 !== i && (o = !0, p.isFunction(i) || (r = !0), c && (r ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
                    return c.call(p(e), n)
                })), t))
                for (; l > a; a++) t(e[a], n, r ? i : i.call(e[a], a, t(e[a], n)));
            return o ? e : c ? t.call(e) : l ? t(e[0], n) : s
        },
        Y = /^(?:checkbox|radio)$/i;
    ! function() {
        var e = k.createElement("input"),
            t = k.createElement("div"),
            n = k.createDocumentFragment();
        if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d.leadingWhitespace = 3 === t.firstChild.nodeType, d.tbody = !t.getElementsByTagName("tbody").length, d.htmlSerialize = !!t.getElementsByTagName("link").length, d.html5Clone = "<:nav></:nav>" !== k.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), d.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", d.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", d.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, d.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
                d.noCloneEvent = !1
            }), t.cloneNode(!0).click()), null == d.deleteExpando) {
            d.deleteExpando = !0;
            try {
                delete t.test
            } catch (e) {
                d.deleteExpando = !1
            }
        }
    }(),
    function() {
        var t, n, i = k.createElement("div");
        for (t in {
                submit: !0,
                change: !0,
                focusin: !0
            }) n = "on" + t, (d[t + "Bubbles"] = n in e) || (i.setAttribute(n, "t"), d[t + "Bubbles"] = !1 === i.attributes[n].expando);
        i = null
    }();
    var U = /^(?:input|select|textarea)$/i,
        V = /^key/,
        Q = /^(?:mouse|pointer|contextmenu)|click/,
        Z = /^(?:focusinfocus|focusoutblur)$/,
        G = /^([^.]*)(?:\.(.+)|)$/;

    function K() {
        return !0
    }

    function J() {
        return !1
    }

    function ee() {
        try {
            return k.activeElement
        } catch (e) {}
    }

    function te(e) {
        var t = ne.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }
    p.event = {
        global: {},
        add: function(e, t, n, i, o) {
            var s, r, a, l, c, d, u, f, h, g, v, m = p._data(e);
            if (m) {
                for (n.handler && (n = (l = n).handler, o = l.selector), n.guid || (n.guid = p.guid++), (r = m.events) || (r = m.events = {}), (d = m.handle) || ((d = m.handle = function(e) {
                        return typeof p === j || e && p.event.triggered === e.type ? void 0 : p.event.dispatch.apply(d.elem, arguments)
                    }).elem = e), a = (t = (t || "").match(L) || [""]).length; a--;) h = v = (s = G.exec(t[a]) || [])[1], g = (s[2] || "").split(".").sort(), h && (c = p.event.special[h] || {}, h = (o ? c.delegateType : c.bindType) || h, c = p.event.special[h] || {}, u = p.extend({
                    type: h,
                    origType: v,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && p.expr.match.needsContext.test(o),
                    namespace: g.join(".")
                }, l), (f = r[h]) || ((f = r[h] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(e, i, g, d) || (e.addEventListener ? e.addEventListener(h, d, !1) : e.attachEvent && e.attachEvent("on" + h, d))), c.add && (c.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), o ? f.splice(f.delegateCount++, 0, u) : f.push(u), p.event.global[h] = !0);
                e = null
            }
        },
        remove: function(e, t, n, i, o) {
            var s, r, a, l, c, d, u, f, h, g, v, m = p.hasData(e) && p._data(e);
            if (m && (d = m.events)) {
                for (c = (t = (t || "").match(L) || [""]).length; c--;)
                    if (h = v = (a = G.exec(t[c]) || [])[1], g = (a[2] || "").split(".").sort(), h) {
                        for (u = p.event.special[h] || {}, f = d[h = (i ? u.delegateType : u.bindType) || h] || [], a = a[2] && new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = s = f.length; s--;) r = f[s], !o && v !== r.origType || n && n.guid !== r.guid || a && !a.test(r.namespace) || i && i !== r.selector && ("**" !== i || !r.selector) || (f.splice(s, 1), r.selector && f.delegateCount--, u.remove && u.remove.call(e, r));
                        l && !f.length && (u.teardown && !1 !== u.teardown.call(e, g, m.handle) || p.removeEvent(e, h, m.handle), delete d[h])
                    } else
                        for (h in d) p.event.remove(e, h + t[c], n, i, !0);
                p.isEmptyObject(d) && (delete m.handle, p._removeData(e, "events"))
            }
        },
        trigger: function(t, n, i, o) {
            var s, r, a, l, d, u, f, h = [i || k],
                g = c.call(t, "type") ? t.type : t,
                v = c.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = u = i = i || k, 3 !== i.nodeType && 8 !== i.nodeType && !Z.test(g + p.event.triggered) && (g.indexOf(".") >= 0 && (v = g.split("."), g = v.shift(), v.sort()), r = g.indexOf(":") < 0 && "on" + g, (t = t[p.expando] ? t : new p.Event(g, "object" == typeof t && t)).isTrigger = o ? 2 : 3, t.namespace = v.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : p.makeArray(n, [t]), d = p.event.special[g] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
                if (!o && !d.noBubble && !p.isWindow(i)) {
                    for (l = d.delegateType || g, Z.test(l + g) || (a = a.parentNode); a; a = a.parentNode) h.push(a), u = a;
                    u === (i.ownerDocument || k) && h.push(u.defaultView || u.parentWindow || e)
                }
                for (f = 0;
                    (a = h[f++]) && !t.isPropagationStopped();) t.type = f > 1 ? l : d.bindType || g, (s = (p._data(a, "events") || {})[t.type] && p._data(a, "handle")) && s.apply(a, n), (s = r && a[r]) && s.apply && p.acceptData(a) && (t.result = s.apply(a, n), !1 === t.result && t.preventDefault());
                if (t.type = g, !o && !t.isDefaultPrevented() && (!d._default || !1 === d._default.apply(h.pop(), n)) && p.acceptData(i) && r && i[g] && !p.isWindow(i)) {
                    (u = i[r]) && (i[r] = null), p.event.triggered = g;
                    try {
                        i[g]()
                    } catch (e) {}
                    p.event.triggered = void 0, u && (i[r] = u)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = p.event.fix(e);
            var t, n, o, s, r, a = [],
                l = i.call(arguments),
                c = (p._data(this, "events") || {})[e.type] || [],
                d = p.event.special[e.type] || {};
            if (l[0] = e, e.delegateTarget = this, !d.preDispatch || !1 !== d.preDispatch.call(this, e)) {
                for (a = p.event.handlers.call(this, e, c), t = 0;
                    (s = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = s.elem, r = 0;
                        (o = s.handlers[r++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, void 0 !== (n = ((p.event.special[o.origType] || {}).handle || o.handler).apply(s.elem, l)) && !1 === (e.result = n) && (e.preventDefault(), e.stopPropagation()));
                return d.postDispatch && d.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, i, o, s, r = [],
                a = t.delegateCount,
                l = e.target;
            if (a && l.nodeType && (!e.button || "click" !== e.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                        for (o = [], s = 0; a > s; s++) void 0 === o[n = (i = t[s]).selector + " "] && (o[n] = i.needsContext ? p(n, this).index(l) >= 0 : p.find(n, this, null, [l]).length), o[n] && o.push(i);
                        o.length && r.push({
                            elem: l,
                            handlers: o
                        })
                    } return a < t.length && r.push({
                elem: this,
                handlers: t.slice(a)
            }), r
        },
        fix: function(e) {
            if (e[p.expando]) return e;
            var t, n, i, o = e.type,
                s = e,
                r = this.fixHooks[o];
            for (r || (this.fixHooks[o] = r = Q.test(o) ? this.mouseHooks : V.test(o) ? this.keyHooks : {}), i = r.props ? this.props.concat(r.props) : this.props, e = new p.Event(s), t = i.length; t--;) e[n = i[t]] = s[n];
            return e.target || (e.target = s.srcElement || k), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, r.filter ? r.filter(e, s) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, i, o, s = t.button,
                    r = t.fromElement;
                return null == e.pageX && null != t.clientX && (o = (i = e.target.ownerDocument || k).documentElement, n = i.body, e.pageX = t.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)), !e.relatedTarget && r && (e.relatedTarget = r === e.target ? t.toElement : r), e.which || void 0 === s || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== ee() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === ee() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return p.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return p.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, i) {
            var o = p.extend(new p.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? p.event.trigger(o, null, t) : p.event.dispatch.call(t, o), o.isDefaultPrevented() && n.preventDefault()
        }
    }, p.removeEvent = k.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function(e, t, n) {
        var i = "on" + t;
        e.detachEvent && (typeof e[i] === j && (e[i] = null), e.detachEvent(i, n))
    }, p.Event = function(e, t) {
        return this instanceof p.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? K : J) : this.type = e, t && p.extend(this, t), this.timeStamp = e && e.timeStamp || p.now(), void(this[p.expando] = !0)) : new p.Event(e, t)
    }, p.Event.prototype = {
        isDefaultPrevented: J,
        isPropagationStopped: J,
        isImmediatePropagationStopped: J,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = K, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = K, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = K, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, p.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        p.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = e.relatedTarget,
                    o = e.handleObj;
                return (!i || i !== this && !p.contains(this, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), d.submitBubbles || (p.event.special.submit = {
        setup: function() {
            return !p.nodeName(this, "form") && void p.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target,
                    n = p.nodeName(t, "input") || p.nodeName(t, "button") ? t.form : void 0;
                n && !p._data(n, "submitBubbles") && (p.event.add(n, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }), p._data(n, "submitBubbles", !0))
            })
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && p.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return !p.nodeName(this, "form") && void p.event.remove(this, "._submit")
        }
    }), d.changeBubbles || (p.event.special.change = {
        setup: function() {
            return U.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (p.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), p.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), p.event.simulate("change", this, e, !0)
            })), !1) : void p.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                U.test(t.nodeName) && !p._data(t, "changeBubbles") && (p.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || p.event.simulate("change", this.parentNode, e, !0)
                }), p._data(t, "changeBubbles", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return p.event.remove(this, "._change"), !U.test(this.nodeName)
        }
    }), d.focusinBubbles || p.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            p.event.simulate(t, e.target, p.event.fix(e), !0)
        };
        p.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    o = p._data(i, t);
                o || i.addEventListener(e, n, !0), p._data(i, t, (o || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    o = p._data(i, t) - 1;
                o ? p._data(i, t, o) : (i.removeEventListener(e, n, !0), p._removeData(i, t))
            }
        }
    }), p.fn.extend({
        on: function(e, t, n, i, o) {
            var s, r;
            if ("object" == typeof e) {
                for (s in "string" != typeof t && (n = n || t, t = void 0), e) this.on(s, t, n, e[s], o);
                return this
            }
            if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), !1 === i) i = J;
            else if (!i) return this;
            return 1 === o && (r = i, (i = function(e) {
                return p().off(e), r.apply(this, arguments)
            }).guid = r.guid || (r.guid = p.guid++)), this.each(function() {
                p.event.add(this, e, i, n, t)
            })
        },
        one: function(e, t, n, i) {
            return this.on(e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, p(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, t, e[o]);
                return this
            }
            return (!1 === t || "function" == typeof t) && (n = t, t = void 0), !1 === n && (n = J), this.each(function() {
                p.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                p.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? p.event.trigger(e, t, n, !0) : void 0
        }
    });
    var ne = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        ie = / jQuery\d+="(?:null|\d+)"/g,
        oe = new RegExp("<(?:" + ne + ")[\\s/>]", "i"),
        se = /^\s+/,
        re = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        ae = /<([\w:]+)/,
        le = /<tbody/i,
        ce = /<|&#?\w+;/,
        de = /<(?:script|style|link)/i,
        ue = /checked\s*(?:[^=]|=\s*.checked.)/i,
        pe = /^$|\/(?:java|ecma)script/i,
        fe = /^true\/(.*)/,
        he = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        ge = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: d.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        ve = te(k).appendChild(k.createElement("div"));

    function me(e, t) {
        var n, i, o = 0,
            s = typeof e.getElementsByTagName !== j ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== j ? e.querySelectorAll(t || "*") : void 0;
        if (!s)
            for (s = [], n = e.childNodes || e; null != (i = n[o]); o++) !t || p.nodeName(i, t) ? s.push(i) : p.merge(s, me(i, t));
        return void 0 === t || t && p.nodeName(e, t) ? p.merge([e], s) : s
    }

    function ye(e) {
        Y.test(e.type) && (e.defaultChecked = e.checked)
    }

    function be(e, t) {
        return p.nodeName(e, "table") && p.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function xe(e) {
        return e.type = (null !== p.find.attr(e, "type")) + "/" + e.type, e
    }

    function we(e) {
        var t = fe.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function $e(e, t) {
        for (var n, i = 0; null != (n = e[i]); i++) p._data(n, "globalEval", !t || p._data(t[i], "globalEval"))
    }

    function Te(e, t) {
        if (1 === t.nodeType && p.hasData(e)) {
            var n, i, o, s = p._data(e),
                r = p._data(t, s),
                a = s.events;
            if (a)
                for (n in delete r.handle, r.events = {}, a)
                    for (i = 0, o = a[n].length; o > i; i++) p.event.add(t, n, a[n][i]);
            r.data && (r.data = p.extend({}, r.data))
        }
    }

    function ke(e, t) {
        var n, i, o;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !d.noCloneEvent && t[p.expando]) {
                for (i in (o = p._data(t)).events) p.removeEvent(t, i, o.handle);
                t.removeAttribute(p.expando)
            }
            "script" === n && t.text !== e.text ? (xe(t).text = e.text, we(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), d.html5Clone && e.innerHTML && !p.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Y.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }
    ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, p.extend({
        clone: function(e, t, n) {
            var i, o, s, r, a, l = p.contains(e.ownerDocument, e);
            if (d.html5Clone || p.isXMLDoc(e) || !oe.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (ve.innerHTML = e.outerHTML, ve.removeChild(s = ve.firstChild)), !(d.noCloneEvent && d.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || p.isXMLDoc(e)))
                for (i = me(s), a = me(e), r = 0; null != (o = a[r]); ++r) i[r] && ke(o, i[r]);
            if (t)
                if (n)
                    for (a = a || me(e), i = i || me(s), r = 0; null != (o = a[r]); r++) Te(o, i[r]);
                else Te(e, s);
            return (i = me(s, "script")).length > 0 && $e(i, !l && me(e, "script")), i = a = o = null, s
        },
        buildFragment: function(e, t, n, i) {
            for (var o, s, r, a, l, c, u, f = e.length, h = te(t), g = [], v = 0; f > v; v++)
                if ((s = e[v]) || 0 === s)
                    if ("object" === p.type(s)) p.merge(g, s.nodeType ? [s] : s);
                    else if (ce.test(s)) {
                for (a = a || h.appendChild(t.createElement("div")), l = (ae.exec(s) || ["", ""])[1].toLowerCase(), u = ge[l] || ge._default, a.innerHTML = u[1] + s.replace(re, "<$1></$2>") + u[2], o = u[0]; o--;) a = a.lastChild;
                if (!d.leadingWhitespace && se.test(s) && g.push(t.createTextNode(se.exec(s)[0])), !d.tbody)
                    for (o = (s = "table" !== l || le.test(s) ? "<table>" !== u[1] || le.test(s) ? 0 : a : a.firstChild) && s.childNodes.length; o--;) p.nodeName(c = s.childNodes[o], "tbody") && !c.childNodes.length && s.removeChild(c);
                for (p.merge(g, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
                a = h.lastChild
            } else g.push(t.createTextNode(s));
            for (a && h.removeChild(a), d.appendChecked || p.grep(me(g, "input"), ye), v = 0; s = g[v++];)
                if ((!i || -1 === p.inArray(s, i)) && (r = p.contains(s.ownerDocument, s), a = me(h.appendChild(s), "script"), r && $e(a), n))
                    for (o = 0; s = a[o++];) pe.test(s.type || "") && n.push(s);
            return a = null, h
        },
        cleanData: function(e, t) {
            for (var i, o, s, r, a = 0, l = p.expando, c = p.cache, u = d.deleteExpando, f = p.event.special; null != (i = e[a]); a++)
                if ((t || p.acceptData(i)) && (r = (s = i[l]) && c[s])) {
                    if (r.events)
                        for (o in r.events) f[o] ? p.event.remove(i, o) : p.removeEvent(i, o, r.handle);
                    c[s] && (delete c[s], u ? delete i[l] : typeof i.removeAttribute !== j ? i.removeAttribute(l) : i[l] = null, n.push(s))
                }
        }
    }), p.fn.extend({
        text: function(e) {
            return X(this, function(e) {
                return void 0 === e ? p.text(this) : this.empty().append((this[0] && this[0].ownerDocument || k).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || be(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = be(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, i = e ? p.filter(e, this) : this, o = 0; null != (n = i[o]); o++) t || 1 !== n.nodeType || p.cleanData(me(n)), n.parentNode && (t && p.contains(n.ownerDocument, n) && $e(me(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && p.cleanData(me(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && p.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return p.clone(this, e, t)
            })
        },
        html: function(e) {
            return X(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(ie, "") : void 0;
                if (!("string" != typeof e || de.test(e) || !d.htmlSerialize && oe.test(e) || !d.leadingWhitespace && se.test(e) || ge[(ae.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(re, "<$1></$2>");
                    try {
                        for (; i > n; n++) 1 === (t = this[n] || {}).nodeType && (p.cleanData(me(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode, p.cleanData(me(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = o.apply([], e);
            var n, i, s, r, a, l, c = 0,
                u = this.length,
                f = this,
                h = u - 1,
                g = e[0],
                v = p.isFunction(g);
            if (v || u > 1 && "string" == typeof g && !d.checkClone && ue.test(g)) return this.each(function(n) {
                var i = f.eq(n);
                v && (e[0] = g.call(this, n, i.html())), i.domManip(e, t)
            });
            if (u && (n = (l = p.buildFragment(e, this[0].ownerDocument, !1, this)).firstChild, 1 === l.childNodes.length && (l = n), n)) {
                for (s = (r = p.map(me(l, "script"), xe)).length; u > c; c++) i = l, c !== h && (i = p.clone(i, !0, !0), s && p.merge(r, me(i, "script"))), t.call(this[c], i, c);
                if (s)
                    for (a = r[r.length - 1].ownerDocument, p.map(r, we), c = 0; s > c; c++) i = r[c], pe.test(i.type || "") && !p._data(i, "globalEval") && p.contains(a, i) && (i.src ? p._evalUrl && p._evalUrl(i.src) : p.globalEval((i.text || i.textContent || i.innerHTML || "").replace(he, "")));
                l = n = null
            }
            return this
        }
    }), p.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        p.fn[e] = function(e) {
            for (var n, i = 0, o = [], r = p(e), a = r.length - 1; a >= i; i++) n = i === a ? this : this.clone(!0), p(r[i])[t](n), s.apply(o, n.get());
            return this.pushStack(o)
        }
    });
    var Se, Ce = {};

    function Ae(t, n) {
        var i, o = p(n.createElement(t)).appendTo(n.body),
            s = e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(o[0])) ? i.display : p.css(o[0], "display");
        return o.detach(), s
    }

    function Ee(e) {
        var t = k,
            n = Ce[e];
        return n || ("none" !== (n = Ae(e, t)) && n || ((t = ((Se = (Se || p("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow || Se[0].contentDocument).document).write(), t.close(), n = Ae(e, t), Se.detach()), Ce[e] = n), n
    }! function() {
        var e;
        d.shrinkWrapBlocks = function() {
            return null != e ? e : (e = !1, (n = k.getElementsByTagName("body")[0]) && n.style ? (t = k.createElement("div"), (i = k.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== j && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(k.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(i), e) : void 0);
            var t, n, i
        }
    }();
    var Pe, Le, Ne = /^margin/,
        De = new RegExp("^(" + _ + ")(?!px)[a-z%]+$", "i"),
        He = /^(top|right|bottom|left)$/;

    function Me(e, t) {
        return {
            get: function() {
                var n = e();
                if (null != n) return n ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }
    e.getComputedStyle ? (Pe = function(e) {
            return e.ownerDocument.defaultView.getComputedStyle(e, null)
        }, Le = function(e, t, n) {
            var i, o, s, r, a = e.style;
            return r = (n = n || Pe(e)) ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== r || p.contains(e.ownerDocument, e) || (r = p.style(e, t)), De.test(r) && Ne.test(t) && (i = a.width, o = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = n.width, a.width = i, a.minWidth = o, a.maxWidth = s)), void 0 === r ? r : r + ""
        }) : k.documentElement.currentStyle && (Pe = function(e) {
            return e.currentStyle
        }, Le = function(e, t, n) {
            var i, o, s, r, a = e.style;
            return null == (r = (n = n || Pe(e)) ? n[t] : void 0) && a && a[t] && (r = a[t]), De.test(r) && !He.test(t) && (i = a.left, (s = (o = e.runtimeStyle) && o.left) && (o.left = e.currentStyle.left), a.left = "fontSize" === t ? "1em" : r, r = a.pixelLeft + "px", a.left = i, s && (o.left = s)), void 0 === r ? r : r + "" || "auto"
        }),
        function() {
            var t, n, i, o, s, r, a;
            if ((t = k.createElement("div")).innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = (i = t.getElementsByTagName("a")[0]) && i.style) {
                function l() {
                    var t, n, i, l;
                    (n = k.getElementsByTagName("body")[0]) && n.style && (t = k.createElement("div"), (i = k.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = s = !1, a = !0, e.getComputedStyle && (o = "1%" !== (e.getComputedStyle(t, null) || {}).top, s = "4px" === (e.getComputedStyle(t, null) || {
                        width: "4px"
                    }).width, (l = t.appendChild(k.createElement("div"))).style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", l.style.marginRight = l.style.width = "0", t.style.width = "1px", a = !parseFloat((e.getComputedStyle(l, null) || {}).marginRight)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", (l = t.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none", (r = 0 === l[0].offsetHeight) && (l[0].style.display = "", l[1].style.display = "none", r = 0 === l[0].offsetHeight), n.removeChild(i))
                }
                n.cssText = "float:left;opacity:.5", d.opacity = "0.5" === n.opacity, d.cssFloat = !!n.cssFloat, t.style.backgroundClip = "content-box", t.cloneNode(!0).style.backgroundClip = "", d.clearCloneStyle = "content-box" === t.style.backgroundClip, d.boxSizing = "" === n.boxSizing || "" === n.MozBoxSizing || "" === n.WebkitBoxSizing, p.extend(d, {
                    reliableHiddenOffsets: function() {
                        return null == r && l(), r
                    },
                    boxSizingReliable: function() {
                        return null == s && l(), s
                    },
                    pixelPosition: function() {
                        return null == o && l(), o
                    },
                    reliableMarginRight: function() {
                        return null == a && l(), a
                    }
                })
            }
        }(), p.swap = function(e, t, n, i) {
            var o, s, r = {};
            for (s in t) r[s] = e.style[s], e.style[s] = t[s];
            for (s in o = n.apply(e, i || []), t) e.style[s] = r[s];
            return o
        };
    var je = /alpha\([^)]*\)/i,
        Oe = /opacity\s*=\s*([^)]*)/,
        ze = /^(none|table(?!-c[ea]).+)/,
        Ie = new RegExp("^(" + _ + ")(.*)$", "i"),
        Fe = new RegExp("^([+-])=(" + _ + ")", "i"),
        qe = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Re = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        _e = ["Webkit", "O", "Moz", "ms"];

    function Be(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, o = _e.length; o--;)
            if ((t = _e[o] + n) in e) return t;
        return i
    }

    function We(e, t) {
        for (var n, i, o, s = [], r = 0, a = e.length; a > r; r++)(i = e[r]).style && (s[r] = p._data(i, "olddisplay"), n = i.style.display, t ? (s[r] || "none" !== n || (i.style.display = ""), "" === i.style.display && W(i) && (s[r] = p._data(i, "olddisplay", Ee(i.nodeName)))) : (o = W(i), (n && "none" !== n || !o) && p._data(i, "olddisplay", o ? n : p.css(i, "display"))));
        for (r = 0; a > r; r++)(i = e[r]).style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? s[r] || "" : "none"));
        return e
    }

    function Xe(e, t, n) {
        var i = Ie.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }

    function Ye(e, t, n, i, o) {
        for (var s = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, r = 0; 4 > s; s += 2) "margin" === n && (r += p.css(e, n + B[s], !0, o)), i ? ("content" === n && (r -= p.css(e, "padding" + B[s], !0, o)), "margin" !== n && (r -= p.css(e, "border" + B[s] + "Width", !0, o))) : (r += p.css(e, "padding" + B[s], !0, o), "padding" !== n && (r += p.css(e, "border" + B[s] + "Width", !0, o)));
        return r
    }

    function Ue(e, t, n) {
        var i = !0,
            o = "width" === t ? e.offsetWidth : e.offsetHeight,
            s = Pe(e),
            r = d.boxSizing && "border-box" === p.css(e, "boxSizing", !1, s);
        if (0 >= o || null == o) {
            if ((0 > (o = Le(e, t, s)) || null == o) && (o = e.style[t]), De.test(o)) return o;
            i = r && (d.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
        }
        return o + Ye(e, t, n || (r ? "border" : "content"), i, s) + "px"
    }

    function Ve(e, t, n, i, o) {
        return new Ve.prototype.init(e, t, n, i, o)
    }
    p.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Le(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: d.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, s, r, a = p.camelCase(t),
                    l = e.style;
                if (t = p.cssProps[a] || (p.cssProps[a] = Be(l, a)), r = p.cssHooks[t] || p.cssHooks[a], void 0 === n) return r && "get" in r && void 0 !== (o = r.get(e, !1, i)) ? o : l[t];
                if ("string" === (s = typeof n) && (o = Fe.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(p.css(e, t)), s = "number"), null != n && n == n && ("number" !== s || p.cssNumber[a] || (n += "px"), d.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(r && "set" in r && void 0 === (n = r.set(e, n, i))))) try {
                    l[t] = n
                } catch (e) {}
            }
        },
        css: function(e, t, n, i) {
            var o, s, r, a = p.camelCase(t);
            return t = p.cssProps[a] || (p.cssProps[a] = Be(e.style, a)), (r = p.cssHooks[t] || p.cssHooks[a]) && "get" in r && (s = r.get(e, !0, n)), void 0 === s && (s = Le(e, t, i)), "normal" === s && t in Re && (s = Re[t]), "" === n || n ? (o = parseFloat(s), !0 === n || p.isNumeric(o) ? o || 0 : s) : s
        }
    }), p.each(["height", "width"], function(e, t) {
        p.cssHooks[t] = {
            get: function(e, n, i) {
                return n ? ze.test(p.css(e, "display")) && 0 === e.offsetWidth ? p.swap(e, qe, function() {
                    return Ue(e, t, i)
                }) : Ue(e, t, i) : void 0
            },
            set: function(e, n, i) {
                var o = i && Pe(e);
                return Xe(0, n, i ? Ye(e, t, i, d.boxSizing && "border-box" === p.css(e, "boxSizing", !1, o), o) : 0)
            }
        }
    }), d.opacity || (p.cssHooks.opacity = {
        get: function(e, t) {
            return Oe.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                i = e.currentStyle,
                o = p.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                s = i && i.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === p.trim(s.replace(je, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = je.test(s) ? s.replace(je, o) : s + " " + o)
        }
    }), p.cssHooks.marginRight = Me(d.reliableMarginRight, function(e, t) {
        return t ? p.swap(e, {
            display: "inline-block"
        }, Le, [e, "marginRight"]) : void 0
    }), p.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        p.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, o = {}, s = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[e + B[i] + t] = s[i] || s[i - 2] || s[0];
                return o
            }
        }, Ne.test(e) || (p.cssHooks[e + t].set = Xe)
    }), p.fn.extend({
        css: function(e, t) {
            return X(this, function(e, t, n) {
                var i, o, s = {},
                    r = 0;
                if (p.isArray(t)) {
                    for (i = Pe(e), o = t.length; o > r; r++) s[t[r]] = p.css(e, t[r], !1, i);
                    return s
                }
                return void 0 !== n ? p.style(e, t, n) : p.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return We(this, !0)
        },
        hide: function() {
            return We(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                W(this) ? p(this).show() : p(this).hide()
            })
        }
    }), p.Tween = Ve, Ve.prototype = {
        constructor: Ve,
        init: function(e, t, n, i, o, s) {
            this.elem = e, this.prop = n, this.easing = o || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = s || (p.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Ve.propHooks[this.prop];
            return e && e.get ? e.get(this) : Ve.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Ve.propHooks[this.prop];
            return this.pos = t = this.options.duration ? p.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ve.propHooks._default.set(this), this
        }
    }, Ve.prototype.init.prototype = Ve.prototype, Ve.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = p.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 : e.elem[e.prop]
            },
            set: function(e) {
                p.fx.step[e.prop] ? p.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[p.cssProps[e.prop]] || p.cssHooks[e.prop]) ? p.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, Ve.propHooks.scrollTop = Ve.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, p.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, p.fx = Ve.prototype.init, p.fx.step = {};
    var Qe, Ze, Ge = /^(?:toggle|show|hide)$/,
        Ke = new RegExp("^(?:([+-])=|)(" + _ + ")([a-z%]*)$", "i"),
        Je = /queueHooks$/,
        et = [function(e, t, n) {
            var i, o, s, r, a, l, c, u = this,
                f = {},
                h = e.style,
                g = e.nodeType && W(e),
                v = p._data(e, "fxshow");
            for (i in n.queue || (null == (a = p._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || l()
                }), a.unqueued++, u.always(function() {
                    u.always(function() {
                        a.unqueued--, p.queue(e, "fx").length || a.empty.fire()
                    })
                })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], c = p.css(e, "display"), "inline" === ("none" === c ? p._data(e, "olddisplay") || Ee(e.nodeName) : c) && "none" === p.css(e, "float") && (d.inlineBlockNeedsLayout && "inline" !== Ee(e.nodeName) ? h.zoom = 1 : h.display = "inline-block")), n.overflow && (h.overflow = "hidden", d.shrinkWrapBlocks() || u.always(function() {
                    h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                })), t)
                if (o = t[i], Ge.exec(o)) {
                    if (delete t[i], s = s || "toggle" === o, o === (g ? "hide" : "show")) {
                        if ("show" !== o || !v || void 0 === v[i]) continue;
                        g = !0
                    }
                    f[i] = v && v[i] || p.style(e, i)
                } else c = void 0;
            if (p.isEmptyObject(f)) "inline" === ("none" === c ? Ee(e.nodeName) : c) && (h.display = c);
            else
                for (i in v ? "hidden" in v && (g = v.hidden) : v = p._data(e, "fxshow", {}), s && (v.hidden = !g), g ? p(e).show() : u.done(function() {
                        p(e).hide()
                    }), u.done(function() {
                        var t;
                        for (t in p._removeData(e, "fxshow"), f) p.style(e, t, f[t])
                    }), f) r = ot(g ? v[i] : 0, i, u), i in v || (v[i] = r.start, g && (r.end = r.start, r.start = "width" === i || "height" === i ? 1 : 0))
        }],
        tt = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    i = n.cur(),
                    o = Ke.exec(t),
                    s = o && o[3] || (p.cssNumber[e] ? "" : "px"),
                    r = (p.cssNumber[e] || "px" !== s && +i) && Ke.exec(p.css(n.elem, e)),
                    a = 1,
                    l = 20;
                if (r && r[3] !== s) {
                    s = s || r[3], o = o || [], r = +i || 1;
                    do {
                        r /= a = a || ".5", p.style(n.elem, e, r + s)
                    } while (a !== (a = n.cur() / i) && 1 !== a && --l)
                }
                return o && (r = n.start = +r || +i || 0, n.unit = s, n.end = o[1] ? r + (o[1] + 1) * o[2] : +o[2]), n
            }]
        };

    function nt() {
        return setTimeout(function() {
            Qe = void 0
        }), Qe = p.now()
    }

    function it(e, t) {
        var n, i = {
                height: e
            },
            o = 0;
        for (t = t ? 1 : 0; 4 > o; o += 2 - t) i["margin" + (n = B[o])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function ot(e, t, n) {
        for (var i, o = (tt[t] || []).concat(tt["*"]), s = 0, r = o.length; r > s; s++)
            if (i = o[s].call(n, t, e)) return i
    }

    function st(e, t, n) {
        var i, o, s = 0,
            r = et.length,
            a = p.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (o) return !1;
                for (var t = Qe || nt(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), s = 0, r = c.tweens.length; r > s; s++) c.tweens[s].run(i);
                return a.notifyWith(e, [c, i, n]), 1 > i && r ? n : (a.resolveWith(e, [c]), !1)
            },
            c = a.promise({
                elem: e,
                props: p.extend({}, t),
                opts: p.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Qe || nt(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var i = p.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function(t) {
                    var n = 0,
                        i = t ? c.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; i > n; n++) c.tweens[n].run(1);
                    return t ? a.resolveWith(e, [c, t]) : a.rejectWith(e, [c, t]), this
                }
            }),
            d = c.props;
        for (function(e, t) {
                var n, i, o, s, r;
                for (n in e)
                    if (o = t[i = p.camelCase(n)], s = e[n], p.isArray(s) && (o = s[1], s = e[n] = s[0]), n !== i && (e[i] = s, delete e[n]), (r = p.cssHooks[i]) && "expand" in r)
                        for (n in s = r.expand(s), delete e[i], s) n in e || (e[n] = s[n], t[n] = o);
                    else t[i] = o
            }(d, c.opts.specialEasing); r > s; s++)
            if (i = et[s].call(c, e, d, c.opts)) return i;
        return p.map(d, ot, c), p.isFunction(c.opts.start) && c.opts.start.call(e, c), p.fx.timer(p.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }
    p.Animation = p.extend(st, {
            tweener: function(e, t) {
                p.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, i = 0, o = e.length; o > i; i++) n = e[i], tt[n] = tt[n] || [], tt[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? et.unshift(e) : et.push(e)
            }
        }), p.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? p.extend({}, e) : {
                complete: n || !n && t || p.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !p.isFunction(t) && t
            };
            return i.duration = p.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in p.fx.speeds ? p.fx.speeds[i.duration] : p.fx.speeds._default, (null == i.queue || !0 === i.queue) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                p.isFunction(i.old) && i.old.call(this), i.queue && p.dequeue(this, i.queue)
            }, i
        }, p.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(W).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(e, t, n, i) {
                var o = p.isEmptyObject(e),
                    s = p.speed(t, n, i),
                    r = function() {
                        var t = st(this, p.extend({}, e), s);
                        (o || p._data(this, "finish")) && t.stop(!0)
                    };
                return r.finish = r, o || !1 === s.queue ? this.each(r) : this.queue(s.queue, r)
            },
            stop: function(e, t, n) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        o = null != e && e + "queueHooks",
                        s = p.timers,
                        r = p._data(this);
                    if (o) r[o] && r[o].stop && i(r[o]);
                    else
                        for (o in r) r[o] && r[o].stop && Je.test(o) && i(r[o]);
                    for (o = s.length; o--;) s[o].elem !== this || null != e && s[o].queue !== e || (s[o].anim.stop(n), t = !1, s.splice(o, 1));
                    (t || !n) && p.dequeue(this, e)
                })
            },
            finish: function(e) {
                return !1 !== e && (e = e || "fx"), this.each(function() {
                    var t, n = p._data(this),
                        i = n[e + "queue"],
                        o = n[e + "queueHooks"],
                        s = p.timers,
                        r = i ? i.length : 0;
                    for (n.finish = !0, p.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                    for (t = 0; r > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), p.each(["toggle", "show", "hide"], function(e, t) {
            var n = p.fn[t];
            p.fn[t] = function(e, i, o) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(it(t, !0), e, i, o)
            }
        }), p.each({
            slideDown: it("show"),
            slideUp: it("hide"),
            slideToggle: it("toggle"),
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
            p.fn[e] = function(e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), p.timers = [], p.fx.tick = function() {
            var e, t = p.timers,
                n = 0;
            for (Qe = p.now(); n < t.length; n++)(e = t[n])() || t[n] !== e || t.splice(n--, 1);
            t.length || p.fx.stop(), Qe = void 0
        }, p.fx.timer = function(e) {
            p.timers.push(e), e() ? p.fx.start() : p.timers.pop()
        }, p.fx.interval = 13, p.fx.start = function() {
            Ze || (Ze = setInterval(p.fx.tick, p.fx.interval))
        }, p.fx.stop = function() {
            clearInterval(Ze), Ze = null
        }, p.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, p.fn.delay = function(e, t) {
            return e = p.fx && p.fx.speeds[e] || e, t = t || "fx", this.queue(t, function(t, n) {
                var i = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(i)
                }
            })
        },
        function() {
            var e, t, n, i, o;
            (t = k.createElement("div")).setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = t.getElementsByTagName("a")[0], o = (n = k.createElement("select")).appendChild(k.createElement("option")), e = t.getElementsByTagName("input")[0], i.style.cssText = "top:1px", d.getSetAttribute = "t" !== t.className, d.style = /top/.test(i.getAttribute("style")), d.hrefNormalized = "/a" === i.getAttribute("href"), d.checkOn = !!e.value, d.optSelected = o.selected, d.enctype = !!k.createElement("form").enctype, n.disabled = !0, d.optDisabled = !o.disabled, (e = k.createElement("input")).setAttribute("value", ""), d.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), d.radioValue = "t" === e.value
        }();
    var rt = /\r/g;
    p.fn.extend({
        val: function(e) {
            var t, n, i, o = this[0];
            return arguments.length ? (i = p.isFunction(e), this.each(function(n) {
                var o;
                1 === this.nodeType && (null == (o = i ? e.call(this, n, p(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : p.isArray(o) && (o = p.map(o, function(e) {
                    return null == e ? "" : e + ""
                })), (t = p.valHooks[this.type] || p.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
            })) : o ? (t = p.valHooks[o.type] || p.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof(n = o.value) ? n.replace(rt, "") : null == n ? "" : n : void 0
        }
    }), p.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = p.find.attr(e, "value");
                    return null != t ? t : p.trim(p.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, i = e.options, o = e.selectedIndex, s = "select-one" === e.type || 0 > o, r = s ? null : [], a = s ? o + 1 : i.length, l = 0 > o ? a : s ? o : 0; a > l; l++)
                        if (!(!(n = i[l]).selected && l !== o || (d.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && p.nodeName(n.parentNode, "optgroup"))) {
                            if (t = p(n).val(), s) return t;
                            r.push(t)
                        } return r
                },
                set: function(e, t) {
                    for (var n, i, o = e.options, s = p.makeArray(t), r = o.length; r--;)
                        if (i = o[r], p.inArray(p.valHooks.option.get(i), s) >= 0) try {
                            i.selected = n = !0
                        } catch (e) {
                            i.scrollHeight
                        } else i.selected = !1;
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), p.each(["radio", "checkbox"], function() {
        p.valHooks[this] = {
            set: function(e, t) {
                return p.isArray(t) ? e.checked = p.inArray(p(e).val(), t) >= 0 : void 0
            }
        }, d.checkOn || (p.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var at, lt, ct = p.expr.attrHandle,
        dt = /^(?:checked|selected)$/i,
        ut = d.getSetAttribute,
        pt = d.input;
    p.fn.extend({
        attr: function(e, t) {
            return X(this, p.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                p.removeAttr(this, e)
            })
        }
    }), p.extend({
        attr: function(e, t, n) {
            var i, o, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return typeof e.getAttribute === j ? p.prop(e, t, n) : (1 === s && p.isXMLDoc(e) || (t = t.toLowerCase(), i = p.attrHooks[t] || (p.expr.match.bool.test(t) ? lt : at)), void 0 === n ? i && "get" in i && null !== (o = i.get(e, t)) ? o : null == (o = p.find.attr(e, t)) ? void 0 : o : null !== n ? i && "set" in i && void 0 !== (o = i.set(e, n, t)) ? o : (e.setAttribute(t, n + ""), n) : void p.removeAttr(e, t))
        },
        removeAttr: function(e, t) {
            var n, i, o = 0,
                s = t && t.match(L);
            if (s && 1 === e.nodeType)
                for (; n = s[o++];) i = p.propFix[n] || n, p.expr.match.bool.test(n) ? pt && ut || !dt.test(n) ? e[i] = !1 : e[p.camelCase("default-" + n)] = e[i] = !1 : p.attr(e, n, ""), e.removeAttribute(ut ? n : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!d.radioValue && "radio" === t && p.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), lt = {
        set: function(e, t, n) {
            return !1 === t ? p.removeAttr(e, n) : pt && ut || !dt.test(n) ? e.setAttribute(!ut && p.propFix[n] || n, n) : e[p.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, p.each(p.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = ct[t] || p.find.attr;
        ct[t] = pt && ut || !dt.test(t) ? function(e, t, i) {
            var o, s;
            return i || (s = ct[t], ct[t] = o, o = null != n(e, t, i) ? t.toLowerCase() : null, ct[t] = s), o
        } : function(e, t, n) {
            return n ? void 0 : e[p.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), pt && ut || (p.attrHooks.value = {
        set: function(e, t, n) {
            return p.nodeName(e, "input") ? void(e.defaultValue = t) : at && at.set(e, t, n)
        }
    }), ut || (at = {
        set: function(e, t, n) {
            var i = e.getAttributeNode(n);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
        }
    }, ct.id = ct.name = ct.coords = function(e, t, n) {
        var i;
        return n ? void 0 : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
    }, p.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : void 0
        },
        set: at.set
    }, p.attrHooks.contenteditable = {
        set: function(e, t, n) {
            at.set(e, "" !== t && t, n)
        }
    }, p.each(["width", "height"], function(e, t) {
        p.attrHooks[t] = {
            set: function(e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
            }
        }
    })), d.style || (p.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var ft = /^(?:input|select|textarea|button|object)$/i,
        ht = /^(?:a|area)$/i;
    p.fn.extend({
        prop: function(e, t) {
            return X(this, p.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = p.propFix[e] || e, this.each(function() {
                try {
                    this[e] = void 0, delete this[e]
                } catch (e) {}
            })
        }
    }), p.extend({
        propFix: {
            for: "htmlFor",
            class: "className"
        },
        prop: function(e, t, n) {
            var i, o, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return (1 !== s || !p.isXMLDoc(e)) && (t = p.propFix[t] || t, o = p.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = p.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ft.test(e.nodeName) || ht.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), d.hrefNormalized || p.each(["href", "src"], function(e, t) {
        p.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), d.optSelected || (p.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), p.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        p.propFix[this.toLowerCase()] = this
    }), d.enctype || (p.propFix.enctype = "encoding");
    var gt = /[\t\r\n\f]/g;
    p.fn.extend({
        addClass: function(e) {
            var t, n, i, o, s, r, a = 0,
                l = this.length,
                c = "string" == typeof e && e;
            if (p.isFunction(e)) return this.each(function(t) {
                p(this).addClass(e.call(this, t, this.className))
            });
            if (c)
                for (t = (e || "").match(L) || []; l > a; a++)
                    if (i = 1 === (n = this[a]).nodeType && (n.className ? (" " + n.className + " ").replace(gt, " ") : " ")) {
                        for (s = 0; o = t[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        r = p.trim(i), n.className !== r && (n.className = r)
                    } return this
        },
        removeClass: function(e) {
            var t, n, i, o, s, r, a = 0,
                l = this.length,
                c = 0 === arguments.length || "string" == typeof e && e;
            if (p.isFunction(e)) return this.each(function(t) {
                p(this).removeClass(e.call(this, t, this.className))
            });
            if (c)
                for (t = (e || "").match(L) || []; l > a; a++)
                    if (i = 1 === (n = this[a]).nodeType && (n.className ? (" " + n.className + " ").replace(gt, " ") : "")) {
                        for (s = 0; o = t[s++];)
                            for (; i.indexOf(" " + o + " ") >= 0;) i = i.replace(" " + o + " ", " ");
                        r = e ? p.trim(i) : "", n.className !== r && (n.className = r)
                    } return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(p.isFunction(e) ? function(n) {
                p(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function() {
                if ("string" === n)
                    for (var t, i = 0, o = p(this), s = e.match(L) || []; t = s[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else(n === j || "boolean" === n) && (this.className && p._data(this, "__className__", this.className), this.className = this.className || !1 === e ? "" : p._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(gt, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    }), p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        p.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), p.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var vt = p.now(),
        mt = /\?/,
        yt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    p.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var n, i = null,
            o = p.trim(t + "");
        return o && !p.trim(o.replace(yt, function(e, t, o, s) {
            return n && t && (i = 0), 0 === i ? e : (n = o || t, i += !s - !o, "")
        })) ? Function("return " + o)() : p.error("Invalid JSON: " + t)
    }, p.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            e.DOMParser ? n = (new DOMParser).parseFromString(t, "text/xml") : ((n = new ActiveXObject("Microsoft.XMLDOM")).async = "false", n.loadXML(t))
        } catch (e) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || p.error("Invalid XML: " + t), n
    };
    var bt, xt, wt = /#.*$/,
        $t = /([?&])_=[^&]*/,
        Tt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        kt = /^(?:GET|HEAD)$/,
        St = /^\/\//,
        Ct = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        At = {},
        Et = {},
        Pt = "*/".concat("*");
    try {
        xt = location.href
    } catch (e) {
        (xt = k.createElement("a")).href = "", xt = xt.href
    }

    function Lt(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, o = 0,
                s = t.toLowerCase().match(L) || [];
            if (p.isFunction(n))
                for (; i = s[o++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function Nt(e, t, n, i) {
        var o = {},
            s = e === Et;

        function r(a) {
            var l;
            return o[a] = !0, p.each(e[a] || [], function(e, a) {
                var c = a(t, n, i);
                return "string" != typeof c || s || o[c] ? s ? !(l = c) : void 0 : (t.dataTypes.unshift(c), r(c), !1)
            }), l
        }
        return r(t.dataTypes[0]) || !o["*"] && r("*")
    }

    function Dt(e, t) {
        var n, i, o = p.ajaxSettings.flatOptions || {};
        for (i in t) void 0 !== t[i] && ((o[i] ? e : n || (n = {}))[i] = t[i]);
        return n && p.extend(!0, e, n), e
    }
    bt = Ct.exec(xt.toLowerCase()) || [], p.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: xt,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Pt,
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
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": p.parseJSON,
                "text xml": p.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Dt(Dt(e, p.ajaxSettings), t) : Dt(p.ajaxSettings, e)
        },
        ajaxPrefilter: Lt(At),
        ajaxTransport: Lt(Et),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var n, i, o, s, r, a, l, c, d = p.ajaxSetup({}, t),
                u = d.context || d,
                f = d.context && (u.nodeType || u.jquery) ? p(u) : p.event,
                h = p.Deferred(),
                g = p.Callbacks("once memory"),
                v = d.statusCode || {},
                m = {},
                y = {},
                b = 0,
                x = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === b) {
                            if (!c)
                                for (c = {}; t = Tt.exec(s);) c[t[1].toLowerCase()] = t[2];
                            t = c[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return b || (e = y[n] = y[n] || e, m[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return b || (d.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > b)
                                for (t in e) v[t] = [v[t], e[t]];
                            else w.always(e[w.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || x;
                        return l && l.abort(t), $(0, t), this
                    }
                };
            if (h.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, d.url = ((e || d.url || xt) + "").replace(wt, "").replace(St, bt[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = p.trim(d.dataType || "*").toLowerCase().match(L) || [""], null == d.crossDomain && (n = Ct.exec(d.url.toLowerCase()), d.crossDomain = !(!n || n[1] === bt[1] && n[2] === bt[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (bt[3] || ("http:" === bt[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = p.param(d.data, d.traditional)), Nt(At, d, t, w), 2 === b) return w;
            for (i in (a = d.global) && 0 == p.active++ && p.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !kt.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (mt.test(o) ? "&" : "?") + d.data, delete d.data), !1 === d.cache && (d.url = $t.test(o) ? o.replace($t, "$1_=" + vt++) : o + (mt.test(o) ? "&" : "?") + "_=" + vt++)), d.ifModified && (p.lastModified[o] && w.setRequestHeader("If-Modified-Since", p.lastModified[o]), p.etag[o] && w.setRequestHeader("If-None-Match", p.etag[o])), (d.data && d.hasContent && !1 !== d.contentType || t.contentType) && w.setRequestHeader("Content-Type", d.contentType), w.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Pt + "; q=0.01" : "") : d.accepts["*"]), d.headers) w.setRequestHeader(i, d.headers[i]);
            if (d.beforeSend && (!1 === d.beforeSend.call(u, w, d) || 2 === b)) return w.abort();
            for (i in x = "abort", {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[i](d[i]);
            if (l = Nt(Et, d, t, w)) {
                w.readyState = 1, a && f.trigger("ajaxSend", [w, d]), d.async && d.timeout > 0 && (r = setTimeout(function() {
                    w.abort("timeout")
                }, d.timeout));
                try {
                    b = 1, l.send(m, $)
                } catch (e) {
                    if (!(2 > b)) throw e;
                    $(-1, e)
                }
            } else $(-1, "No Transport");

            function $(e, t, n, i) {
                var c, m, y, x, $, T = t;
                2 !== b && (b = 2, r && clearTimeout(r), l = void 0, s = i || "", w.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, n && (x = function(e, t, n) {
                    for (var i, o, s, r, a = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === o && (o = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (o)
                        for (r in a)
                            if (a[r] && a[r].test(o)) {
                                l.unshift(r);
                                break
                            } if (l[0] in n) s = l[0];
                    else {
                        for (r in n) {
                            if (!l[0] || e.converters[r + " " + l[0]]) {
                                s = r;
                                break
                            }
                            i || (i = r)
                        }
                        s = s || i
                    }
                    return s ? (s !== l[0] && l.unshift(s), n[s]) : void 0
                }(d, w, n)), x = function(e, t, n, i) {
                    var o, s, r, a, l, c = {},
                        d = e.dataTypes.slice();
                    if (d[1])
                        for (r in e.converters) c[r.toLowerCase()] = e.converters[r];
                    for (s = d.shift(); s;)
                        if (e.responseFields[s] && (n[e.responseFields[s]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = s, s = d.shift())
                            if ("*" === s) s = l;
                            else if ("*" !== l && l !== s) {
                        if (!(r = c[l + " " + s] || c["* " + s]))
                            for (o in c)
                                if ((a = o.split(" "))[1] === s && (r = c[l + " " + a[0]] || c["* " + a[0]])) {
                                    !0 === r ? r = c[o] : !0 !== c[o] && (s = a[0], d.unshift(a[1]));
                                    break
                                } if (!0 !== r)
                            if (r && e.throws) t = r(t);
                            else try {
                                t = r(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: r ? e : "No conversion from " + l + " to " + s
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(d, x, w, c), c ? (d.ifModified && (($ = w.getResponseHeader("Last-Modified")) && (p.lastModified[o] = $), ($ = w.getResponseHeader("etag")) && (p.etag[o] = $)), 204 === e || "HEAD" === d.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = x.state, m = x.data, c = !(y = x.error))) : (y = T, (e || !T) && (T = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || T) + "", c ? h.resolveWith(u, [m, T, w]) : h.rejectWith(u, [w, T, y]), w.statusCode(v), v = void 0, a && f.trigger(c ? "ajaxSuccess" : "ajaxError", [w, d, c ? m : y]), g.fireWith(u, [w, T]), a && (f.trigger("ajaxComplete", [w, d]), --p.active || p.event.trigger("ajaxStop")))
            }
            return w
        },
        getJSON: function(e, t, n) {
            return p.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return p.get(e, void 0, t, "script")
        }
    }), p.each(["get", "post"], function(e, t) {
        p[t] = function(e, n, i, o) {
            return p.isFunction(n) && (o = o || i, i = n, n = void 0), p.ajax({
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: i
            })
        }
    }), p.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        p.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), p._evalUrl = function(e) {
        return p.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }, p.fn.extend({
        wrapAll: function(e) {
            if (p.isFunction(e)) return this.each(function(t) {
                p(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = p(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return this.each(p.isFunction(e) ? function(t) {
                p(this).wrapInner(e.call(this, t))
            } : function() {
                var t = p(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = p.isFunction(e);
            return this.each(function(n) {
                p(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                p.nodeName(this, "body") || p(this).replaceWith(this.childNodes)
            }).end()
        }
    }), p.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !d.reliableHiddenOffsets() && "none" === (e.style && e.style.display || p.css(e, "display"))
    }, p.expr.filters.visible = function(e) {
        return !p.expr.filters.hidden(e)
    };
    var Ht = /%20/g,
        Mt = /\[\]$/,
        jt = /\r?\n/g,
        Ot = /^(?:submit|button|image|reset|file)$/i,
        zt = /^(?:input|select|textarea|keygen)/i;

    function It(e, t, n, i) {
        var o;
        if (p.isArray(t)) p.each(t, function(t, o) {
            n || Mt.test(e) ? i(e, o) : It(e + "[" + ("object" == typeof o ? t : "") + "]", o, n, i)
        });
        else if (n || "object" !== p.type(t)) i(e, t);
        else
            for (o in t) It(e + "[" + o + "]", t[o], n, i)
    }
    p.param = function(e, t) {
        var n, i = [],
            o = function(e, t) {
                t = p.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = p.ajaxSettings && p.ajaxSettings.traditional), p.isArray(e) || e.jquery && !p.isPlainObject(e)) p.each(e, function() {
            o(this.name, this.value)
        });
        else
            for (n in e) It(n, e[n], t, o);
        return i.join("&").replace(Ht, "+")
    }, p.fn.extend({
        serialize: function() {
            return p.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = p.prop(this, "elements");
                return e ? p.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !p(this).is(":disabled") && zt.test(this.nodeName) && !Ot.test(e) && (this.checked || !Y.test(e))
            }).map(function(e, t) {
                var n = p(this).val();
                return null == n ? null : p.isArray(n) ? p.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(jt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(jt, "\r\n")
                }
            }).get()
        }
    }), p.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && _t() || function() {
            try {
                return new e.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {}
        }()
    } : _t;
    var Ft = 0,
        qt = {},
        Rt = p.ajaxSettings.xhr();

    function _t() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    }
    e.ActiveXObject && p(e).on("unload", function() {
        for (var e in qt) qt[e](void 0, !0)
    }), d.cors = !!Rt && "withCredentials" in Rt, (Rt = d.ajax = !!Rt) && p.ajaxTransport(function(e) {
        var t;
        if (!e.crossDomain || d.cors) return {
            send: function(n, i) {
                var o, s = e.xhr(),
                    r = ++Ft;
                if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (o in e.xhrFields) s[o] = e.xhrFields[o];
                for (o in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest"), n) void 0 !== n[o] && s.setRequestHeader(o, n[o] + "");
                s.send(e.hasContent && e.data || null), t = function(n, o) {
                    var a, l, c;
                    if (t && (o || 4 === s.readyState))
                        if (delete qt[r], t = void 0, s.onreadystatechange = p.noop, o) 4 !== s.readyState && s.abort();
                        else {
                            c = {}, a = s.status, "string" == typeof s.responseText && (c.text = s.responseText);
                            try {
                                l = s.statusText
                            } catch (e) {
                                l = ""
                            }
                            a || !e.isLocal || e.crossDomain ? 1223 === a && (a = 204) : a = c.text ? 200 : 404
                        } c && i(a, l, c, s.getAllResponseHeaders())
                }, e.async ? 4 === s.readyState ? setTimeout(t) : s.onreadystatechange = qt[r] = t : t()
            },
            abort: function() {
                t && t(void 0, !0)
            }
        }
    }), p.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return p.globalEval(e), e
            }
        }
    }), p.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), p.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n = k.head || p("head")[0] || k.documentElement;
            return {
                send: function(i, o) {
                    (t = k.createElement("script")).async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || o(200, "success"))
                    }, n.insertBefore(t, n.firstChild)
                },
                abort: function() {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var Bt = [],
        Wt = /(=)\?(?=&|$)|\?\?/;
    p.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Bt.pop() || p.expando + "_" + vt++;
            return this[e] = !0, e
        }
    }), p.ajaxPrefilter("json jsonp", function(t, n, i) {
        var o, s, r, a = !1 !== t.jsonp && (Wt.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Wt.test(t.data) && "data");
        return a || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = p.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Wt, "$1" + o) : !1 !== t.jsonp && (t.url += (mt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
            return r || p.error(o + " was not called"), r[0]
        }, t.dataTypes[0] = "json", s = e[o], e[o] = function() {
            r = arguments
        }, i.always(function() {
            e[o] = s, t[o] && (t.jsonpCallback = n.jsonpCallback, Bt.push(o)), r && p.isFunction(s) && s(r[0]), r = s = void 0
        }), "script") : void 0
    }), p.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || k;
        var i = x.exec(e),
            o = !n && [];
        return i ? [t.createElement(i[1])] : (i = p.buildFragment([e], t, o), o && o.length && p(o).remove(), p.merge([], i.childNodes))
    };
    var Xt = p.fn.load;
    p.fn.load = function(e, t, n) {
        if ("string" != typeof e && Xt) return Xt.apply(this, arguments);
        var i, o, s, r = this,
            a = e.indexOf(" ");
        return a >= 0 && (i = p.trim(e.slice(a, e.length)), e = e.slice(0, a)), p.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (s = "POST"), r.length > 0 && p.ajax({
            url: e,
            type: s,
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, r.html(i ? p("<div>").append(p.parseHTML(e)).find(i) : e)
        }).complete(n && function(e, t) {
            r.each(n, o || [e.responseText, t, e])
        }), this
    }, p.expr.filters.animated = function(e) {
        return p.grep(p.timers, function(t) {
            return e === t.elem
        }).length
    };
    var Yt = e.document.documentElement;

    function Ut(e) {
        return p.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }
    p.offset = {
        setOffset: function(e, t, n) {
            var i, o, s, r, a, l, c = p.css(e, "position"),
                d = p(e),
                u = {};
            "static" === c && (e.style.position = "relative"), a = d.offset(), s = p.css(e, "top"), l = p.css(e, "left"), ("absolute" === c || "fixed" === c) && p.inArray("auto", [s, l]) > -1 ? (r = (i = d.position()).top, o = i.left) : (r = parseFloat(s) || 0, o = parseFloat(l) || 0), p.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (u.top = t.top - a.top + r), null != t.left && (u.left = t.left - a.left + o), "using" in t ? t.using.call(e, u) : d.css(u)
        }
    }, p.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                p.offset.setOffset(this, e, t)
            });
            var t, n, i = {
                    top: 0,
                    left: 0
                },
                o = this[0],
                s = o && o.ownerDocument;
            return s ? (t = s.documentElement, p.contains(t, o) ? (typeof o.getBoundingClientRect !== j && (i = o.getBoundingClientRect()), n = Ut(s), {
                top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : i) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    i = this[0];
                return "fixed" === p.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), p.nodeName(e[0], "html") || (n = e.offset()), n.top += p.css(e[0], "borderTopWidth", !0), n.left += p.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - p.css(i, "marginTop", !0),
                    left: t.left - n.left - p.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || Yt; e && !p.nodeName(e, "html") && "static" === p.css(e, "position");) e = e.offsetParent;
                return e || Yt
            })
        }
    }), p.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = /Y/.test(t);
        p.fn[e] = function(i) {
            return X(this, function(e, i, o) {
                var s = Ut(e);
                return void 0 === o ? s ? t in s ? s[t] : s.document.documentElement[i] : e[i] : void(s ? s.scrollTo(n ? p(s).scrollLeft() : o, n ? o : p(s).scrollTop()) : e[i] = o)
            }, e, i, arguments.length, null)
        }
    }), p.each(["top", "left"], function(e, t) {
        p.cssHooks[t] = Me(d.pixelPosition, function(e, n) {
            return n ? (n = Le(e, t), De.test(n) ? p(e).position()[t] + "px" : n) : void 0
        })
    }), p.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        p.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            p.fn[i] = function(i, o) {
                var s = arguments.length && (n || "boolean" != typeof i),
                    r = n || (!0 === i || !0 === o ? "margin" : "border");
                return X(this, function(t, n, i) {
                    var o;
                    return p.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? p.css(t, n, r) : p.style(t, n, i, r)
                }, t, s ? i : void 0, s, null)
            }
        })
    }), p.fn.size = function() {
        return this.length
    }, p.fn.andSelf = p.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return p
    });
    var Vt = e.jQuery,
        Qt = e.$;
    return p.noConflict = function(t) {
        return e.$ === p && (e.$ = Qt), t && e.jQuery === p && (e.jQuery = Vt), p
    }, typeof t === j && (e.jQuery = e.$ = p), p
}),
function(e, t, n, i) {
    "use strict";

    function o(e, t) {
        var i, o, s, r = [],
            a = 0;
        e && e.isDefaultPrevented() || (e.preventDefault(), t = t || {}, e && e.data && (t = f(e.data.options, t)), i = t.$target || n(e.currentTarget).trigger("blur"), (s = n.fancybox.getInstance()) && s.$trigger && s.$trigger.is(i) || (t.selector ? r = n(t.selector) : (o = i.attr("data-fancybox") || "") ? r = (r = e.data ? e.data.items : []).length ? r.filter('[data-fancybox="' + o + '"]') : n('[data-fancybox="' + o + '"]') : r = [i], (a = n(r).index(i)) < 0 && (a = 0), (s = n.fancybox.open(r, t, a)).$trigger = i))
    }
    if (e.console = e.console || {
            info: function(e) {}
        }, n) {
        if (n.fn.fancybox) return void console.info("fancyBox already initialized");
        var s = {
                closeExisting: !1,
                loop: !1,
                gutter: 50,
                keyboard: !0,
                preventCaptionOverlap: !0,
                arrows: !0,
                infobar: !0,
                smallBtn: "auto",
                toolbar: "auto",
                buttons: ["zoom", "slideShow", "thumbs", "close"],
                idleTime: 3,
                protect: !1,
                modal: !1,
                image: {
                    preload: !1
                },
                ajax: {
                    settings: {
                        data: {
                            fancybox: !0
                        }
                    }
                },
                iframe: {
                    tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
                    preload: !0,
                    css: {},
                    attr: {
                        scrolling: "auto"
                    }
                },
                video: {
                    tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
                    format: "",
                    autoStart: !0
                },
                defaultType: "image",
                animationEffect: "zoom",
                animationDuration: 366,
                zoomOpacity: "auto",
                transitionEffect: "fade",
                transitionDuration: 366,
                slideClass: "",
                baseClass: "",
                baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',
                spinnerTpl: '<div class="fancybox-loading"></div>',
                errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
                btnTpl: {
                    download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
                    zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
                    close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
                    arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
                    arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
                    smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'
                },
                parentEl: "body",
                hideScrollbar: !0,
                autoFocus: !0,
                backFocus: !0,
                trapFocus: !0,
                fullScreen: {
                    autoStart: !1
                },
                touch: {
                    vertical: !0,
                    momentum: !0
                },
                hash: null,
                media: {},
                slideShow: {
                    autoStart: !1,
                    speed: 3e3
                },
                thumbs: {
                    autoStart: !1,
                    hideOnClose: !0,
                    parentEl: ".fancybox-container",
                    axis: "y"
                },
                wheel: "auto",
                onInit: n.noop,
                beforeLoad: n.noop,
                afterLoad: n.noop,
                beforeShow: n.noop,
                afterShow: n.noop,
                beforeClose: n.noop,
                afterClose: n.noop,
                onActivate: n.noop,
                onDeactivate: n.noop,
                clickContent: function(e, t) {
                    return "image" === e.type && "zoom"
                },
                clickSlide: "close",
                clickOutside: "close",
                dblclickContent: !1,
                dblclickSlide: !1,
                dblclickOutside: !1,
                mobile: {
                    preventCaptionOverlap: !1,
                    idleTime: !1,
                    clickContent: function(e, t) {
                        return "image" === e.type && "toggleControls"
                    },
                    clickSlide: function(e, t) {
                        return "image" === e.type ? "toggleControls" : "close"
                    },
                    dblclickContent: function(e, t) {
                        return "image" === e.type && "zoom"
                    },
                    dblclickSlide: function(e, t) {
                        return "image" === e.type && "zoom"
                    }
                },
                lang: "en",
                i18n: {
                    en: {
                        CLOSE: "Close",
                        NEXT: "Next",
                        PREV: "Previous",
                        ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                        PLAY_START: "Start slideshow",
                        PLAY_STOP: "Pause slideshow",
                        FULL_SCREEN: "Full screen",
                        THUMBS: "Thumbnails",
                        DOWNLOAD: "Download",
                        SHARE: "Share",
                        ZOOM: "Zoom"
                    },
                    de: {
                        CLOSE: "Schlie&szlig;en",
                        NEXT: "Weiter",
                        PREV: "Zur&uuml;ck",
                        ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
                        PLAY_START: "Diaschau starten",
                        PLAY_STOP: "Diaschau beenden",
                        FULL_SCREEN: "Vollbild",
                        THUMBS: "Vorschaubilder",
                        DOWNLOAD: "Herunterladen",
                        SHARE: "Teilen",
                        ZOOM: "Vergr&ouml;&szlig;ern"
                    }
                }
            },
            r = n(e),
            a = n(t),
            l = 0,
            c = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || function(t) {
                return e.setTimeout(t, 1e3 / 60)
            },
            d = e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.mozCancelAnimationFrame || e.oCancelAnimationFrame || function(t) {
                e.clearTimeout(t)
            },
            u = function() {
                var e, n = t.createElement("fakeelement"),
                    i = {
                        transition: "transitionend",
                        OTransition: "oTransitionEnd",
                        MozTransition: "transitionend",
                        WebkitTransition: "webkitTransitionEnd"
                    };
                for (e in i)
                    if (void 0 !== n.style[e]) return i[e];
                return "transitionend"
            }(),
            p = function(e) {
                return e && e.length && e[0].offsetHeight
            },
            f = function(e, t) {
                var i = n.extend(!0, {}, e, t);
                return n.each(t, function(e, t) {
                    n.isArray(t) && (i[e] = t)
                }), i
            },
            h = function(e) {
                var i, o;
                return !(!e || e.ownerDocument !== t) && (n(".fancybox-container").css("pointer-events", "none"), i = {
                    x: e.getBoundingClientRect().left + e.offsetWidth / 2,
                    y: e.getBoundingClientRect().top + e.offsetHeight / 2
                }, o = t.elementFromPoint(i.x, i.y) === e, n(".fancybox-container").css("pointer-events", ""), o)
            },
            g = function(e, t, i) {
                var o = this;
                o.opts = f({
                    index: i
                }, n.fancybox.defaults), n.isPlainObject(t) && (o.opts = f(o.opts, t)), n.fancybox.isMobile && (o.opts = f(o.opts, o.opts.mobile)), o.id = o.opts.id || ++l, o.currIndex = parseInt(o.opts.index, 10) || 0, o.prevIndex = null, o.prevPos = null, o.currPos = 0, o.firstRun = !0, o.group = [], o.slides = {}, o.addContent(e), o.group.length && o.init()
            };
        n.extend(g.prototype, {
                init: function() {
                    var i, o, s = this,
                        r = s.group[s.currIndex].opts;
                    r.closeExisting && n.fancybox.close(!0), n("body").addClass("fancybox-active"), !n.fancybox.getInstance() && !1 !== r.hideScrollbar && !n.fancybox.isMobile && t.body.scrollHeight > e.innerHeight && (n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' + (e.innerWidth - t.documentElement.clientWidth) + "px;}</style>"), n("body").addClass("compensate-for-scrollbar")), o = "", n.each(r.buttons, function(e, t) {
                        o += r.btnTpl[t] || ""
                    }), i = n(s.translate(s, r.baseTpl.replace("{{buttons}}", o).replace("{{arrows}}", r.btnTpl.arrowLeft + r.btnTpl.arrowRight))).attr("id", "fancybox-container-" + s.id).addClass(r.baseClass).data("FancyBox", s).appendTo(r.parentEl), s.$refs = {
                        container: i
                    }, ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function(e) {
                        s.$refs[e] = i.find(".fancybox-" + e)
                    }), s.trigger("onInit"), s.activate(), s.jumpTo(s.currIndex)
                },
                translate: function(e, t) {
                    var n = e.opts.i18n[e.opts.lang] || e.opts.i18n.en;
                    return t.replace(/\{\{(\w+)\}\}/g, function(e, t) {
                        return void 0 === n[t] ? e : n[t]
                    })
                },
                addContent: function(e) {
                    var t, i = this,
                        o = n.makeArray(e);
                    n.each(o, function(e, t) {
                        var o, s, r, a, l, c = {},
                            d = {};
                        n.isPlainObject(t) ? (c = t, d = t.opts || t) : "object" === n.type(t) && n(t).length ? (d = (o = n(t)).data() || {}, (d = n.extend(!0, {}, d, d.options)).$orig = o, c.src = i.opts.src || d.src || o.attr("href"), c.type || c.src || (c.type = "inline", c.src = t)) : c = {
                            type: "html",
                            src: t + ""
                        }, c.opts = n.extend(!0, {}, i.opts, d), n.isArray(d.buttons) && (c.opts.buttons = d.buttons), n.fancybox.isMobile && c.opts.mobile && (c.opts = f(c.opts, c.opts.mobile)), s = c.type || c.opts.type, a = c.src || "", !s && a && ((r = a.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (s = "video", c.opts.video.format || (c.opts.video.format = "video/" + ("ogv" === r[1] ? "ogg" : r[1]))) : a.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? s = "image" : a.match(/\.(pdf)((\?|#).*)?$/i) ? (s = "iframe", c = n.extend(!0, c, {
                            contentType: "pdf",
                            opts: {
                                iframe: {
                                    preload: !1
                                }
                            }
                        })) : "#" === a.charAt(0) && (s = "inline")), s ? c.type = s : i.trigger("objectNeedsType", c), c.contentType || (c.contentType = n.inArray(c.type, ["html", "inline", "ajax"]) > -1 ? "html" : c.type), c.index = i.group.length, "auto" == c.opts.smallBtn && (c.opts.smallBtn = n.inArray(c.type, ["html", "inline", "ajax"]) > -1), "auto" === c.opts.toolbar && (c.opts.toolbar = !c.opts.smallBtn), c.$thumb = c.opts.$thumb || null, c.opts.$trigger && c.index === i.opts.index && (c.$thumb = c.opts.$trigger.find("img:first"), c.$thumb.length && (c.opts.$orig = c.opts.$trigger)), c.$thumb && c.$thumb.length || !c.opts.$orig || (c.$thumb = c.opts.$orig.find("img:first")), c.$thumb && !c.$thumb.length && (c.$thumb = null), c.thumb = c.opts.thumb || (c.$thumb ? c.$thumb[0].src : null), "function" === n.type(c.opts.caption) && (c.opts.caption = c.opts.caption.apply(t, [i, c])), "function" === n.type(i.opts.caption) && (c.opts.caption = i.opts.caption.apply(t, [i, c])), c.opts.caption instanceof n || (c.opts.caption = void 0 === c.opts.caption ? "" : c.opts.caption + ""), "ajax" === c.type && ((l = a.split(/\s+/, 2)).length > 1 && (c.src = l.shift(), c.opts.filter = l.shift())), c.opts.modal && (c.opts = n.extend(!0, c.opts, {
                            trapFocus: !0,
                            infobar: 0,
                            toolbar: 0,
                            smallBtn: 0,
                            keyboard: 0,
                            slideShow: 0,
                            fullScreen: 0,
                            thumbs: 0,
                            touch: 0,
                            clickContent: !1,
                            clickSlide: !1,
                            clickOutside: !1,
                            dblclickContent: !1,
                            dblclickSlide: !1,
                            dblclickOutside: !1
                        })), i.group.push(c)
                    }), Object.keys(i.slides).length && (i.updateControls(), (t = i.Thumbs) && t.isActive && (t.create(), t.focus()))
                },
                addEvents: function() {
                    var t = this;
                    t.removeEvents(), t.$refs.container.on("click.fb-close", "[data-fancybox-close]", function(e) {
                        e.stopPropagation(), e.preventDefault(), t.close(e)
                    }).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function(e) {
                        e.stopPropagation(), e.preventDefault(), t.previous()
                    }).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function(e) {
                        e.stopPropagation(), e.preventDefault(), t.next()
                    }).on("click.fb", "[data-fancybox-zoom]", function(e) {
                        t[t.isScaledDown() ? "scaleToActual" : "scaleToFit"]()
                    }), r.on("orientationchange.fb resize.fb", function(e) {
                        e && e.originalEvent && "resize" === e.originalEvent.type ? (t.requestId && d(t.requestId), t.requestId = c(function() {
                            t.update(e)
                        })) : (t.current && "iframe" === t.current.type && t.$refs.stage.hide(), setTimeout(function() {
                            t.$refs.stage.show(), t.update(e)
                        }, n.fancybox.isMobile ? 600 : 250))
                    }), a.on("keydown.fb", function(e) {
                        var i = (n.fancybox ? n.fancybox.getInstance() : null).current,
                            o = e.keyCode || e.which;
                        if (9 != o) return !i.opts.keyboard || e.ctrlKey || e.altKey || e.shiftKey || n(e.target).is("input,textarea,video,audio,select") ? void 0 : 8 === o || 27 === o ? (e.preventDefault(), void t.close(e)) : 37 === o || 38 === o ? (e.preventDefault(), void t.previous()) : 39 === o || 40 === o ? (e.preventDefault(), void t.next()) : void t.trigger("afterKeydown", e, o);
                        i.opts.trapFocus && t.focus(e)
                    }), t.group[t.currIndex].opts.idleTime && (t.idleSecondsCounter = 0, a.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function(e) {
                        t.idleSecondsCounter = 0, t.isIdle && t.showControls(), t.isIdle = !1
                    }), t.idleInterval = e.setInterval(function() {
                        ++t.idleSecondsCounter >= t.group[t.currIndex].opts.idleTime && !t.isDragging && (t.isIdle = !0, t.idleSecondsCounter = 0, t.hideControls())
                    }, 1e3))
                },
                removeEvents: function() {
                    var t = this;
                    r.off("orientationchange.fb resize.fb"), a.off("keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), t.idleInterval && (e.clearInterval(t.idleInterval), t.idleInterval = null)
                },
                previous: function(e) {
                    return this.jumpTo(this.currPos - 1, e)
                },
                next: function(e) {
                    return this.jumpTo(this.currPos + 1, e)
                },
                jumpTo: function(e, t) {
                    var i, o, s, r, a, l, c, d, u, f = this,
                        h = f.group.length;
                    if (!(f.isDragging || f.isClosing || f.isAnimating && f.firstRun)) {
                        if (e = parseInt(e, 10), !(s = f.current ? f.current.opts.loop : f.opts.loop) && (e < 0 || e >= h)) return !1;
                        if (i = f.firstRun = !Object.keys(f.slides).length, a = f.current, f.prevIndex = f.currIndex, f.prevPos = f.currPos, r = f.createSlide(e), h > 1 && ((s || r.index < h - 1) && f.createSlide(e + 1), (s || r.index > 0) && f.createSlide(e - 1)), f.current = r, f.currIndex = r.index, f.currPos = r.pos, f.trigger("beforeShow", i), f.updateControls(), r.forcedDuration = void 0, n.isNumeric(t) ? r.forcedDuration = t : t = r.opts[i ? "animationDuration" : "transitionDuration"], t = parseInt(t, 10), o = f.isMoved(r), r.$slide.addClass("fancybox-slide--current"), i) return r.opts.animationEffect && t && f.$refs.container.css("transition-duration", t + "ms"), f.$refs.container.addClass("fancybox-is-open").trigger("focus"), f.loadSlide(r), void f.preload("image");
                        l = n.fancybox.getTranslate(a.$slide), c = n.fancybox.getTranslate(f.$refs.stage), n.each(f.slides, function(e, t) {
                            n.fancybox.stop(t.$slide, !0)
                        }), a.pos !== r.pos && (a.isComplete = !1), a.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"), o ? (u = l.left - (a.pos * l.width + a.pos * a.opts.gutter), n.each(f.slides, function(e, i) {
                            i.$slide.removeClass("fancybox-animated").removeClass(function(e, t) {
                                return (t.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
                            });
                            var o = i.pos * l.width + i.pos * i.opts.gutter;
                            n.fancybox.setTranslate(i.$slide, {
                                top: 0,
                                left: o - c.left + u
                            }), i.pos !== r.pos && i.$slide.addClass("fancybox-slide--" + (i.pos > r.pos ? "next" : "previous")), p(i.$slide), n.fancybox.animate(i.$slide, {
                                top: 0,
                                left: (i.pos - r.pos) * l.width + (i.pos - r.pos) * i.opts.gutter
                            }, t, function() {
                                i.$slide.css({
                                    transform: "",
                                    opacity: ""
                                }).removeClass("fancybox-slide--next fancybox-slide--previous"), i.pos === f.currPos && f.complete()
                            })
                        })) : t && r.opts.transitionEffect && (d = "fancybox-animated fancybox-fx-" + r.opts.transitionEffect, a.$slide.addClass("fancybox-slide--" + (a.pos > r.pos ? "next" : "previous")), n.fancybox.animate(a.$slide, d, t, function() {
                            a.$slide.removeClass(d).removeClass("fancybox-slide--next fancybox-slide--previous")
                        }, !1)), r.isLoaded ? f.revealContent(r) : f.loadSlide(r), f.preload("image")
                    }
                },
                createSlide: function(e) {
                    var t, i, o = this;
                    return i = (i = e % o.group.length) < 0 ? o.group.length + i : i, !o.slides[e] && o.group[i] && (t = n('<div class="fancybox-slide"></div>').appendTo(o.$refs.stage), o.slides[e] = n.extend(!0, {}, o.group[i], {
                        pos: e,
                        $slide: t,
                        isLoaded: !1
                    }), o.updateSlide(o.slides[e])), o.slides[e]
                },
                scaleToActual: function(e, t, i) {
                    var o, s, r, a, l, c = this,
                        d = c.current,
                        u = d.$content,
                        p = n.fancybox.getTranslate(d.$slide).width,
                        f = n.fancybox.getTranslate(d.$slide).height,
                        h = d.width,
                        g = d.height;
                    c.isAnimating || c.isMoved() || !u || "image" != d.type || !d.isLoaded || d.hasError || (c.isAnimating = !0, n.fancybox.stop(u), e = void 0 === e ? .5 * p : e, t = void 0 === t ? .5 * f : t, (o = n.fancybox.getTranslate(u)).top -= n.fancybox.getTranslate(d.$slide).top, o.left -= n.fancybox.getTranslate(d.$slide).left, a = h / o.width, l = g / o.height, s = .5 * p - .5 * h, r = .5 * f - .5 * g, h > p && ((s = o.left * a - (e * a - e)) > 0 && (s = 0), s < p - h && (s = p - h)), g > f && ((r = o.top * l - (t * l - t)) > 0 && (r = 0), r < f - g && (r = f - g)), c.updateCursor(h, g), n.fancybox.animate(u, {
                        top: r,
                        left: s,
                        scaleX: a,
                        scaleY: l
                    }, i || 366, function() {
                        c.isAnimating = !1
                    }), c.SlideShow && c.SlideShow.isActive && c.SlideShow.stop())
                },
                scaleToFit: function(e) {
                    var t, i = this,
                        o = i.current,
                        s = o.$content;
                    i.isAnimating || i.isMoved() || !s || "image" != o.type || !o.isLoaded || o.hasError || (i.isAnimating = !0, n.fancybox.stop(s), t = i.getFitPos(o), i.updateCursor(t.width, t.height), n.fancybox.animate(s, {
                        top: t.top,
                        left: t.left,
                        scaleX: t.width / s.width(),
                        scaleY: t.height / s.height()
                    }, e || 366, function() {
                        i.isAnimating = !1
                    }))
                },
                getFitPos: function(e) {
                    var t, i, o, s, r = e.$content,
                        a = e.$slide,
                        l = e.width || e.opts.width,
                        c = e.height || e.opts.height,
                        d = {};
                    return !!(e.isLoaded && r && r.length) && (t = n.fancybox.getTranslate(this.$refs.stage).width, i = n.fancybox.getTranslate(this.$refs.stage).height, t -= parseFloat(a.css("paddingLeft")) + parseFloat(a.css("paddingRight")) + parseFloat(r.css("marginLeft")) + parseFloat(r.css("marginRight")), i -= parseFloat(a.css("paddingTop")) + parseFloat(a.css("paddingBottom")) + parseFloat(r.css("marginTop")) + parseFloat(r.css("marginBottom")), l && c || (l = t, c = i), (l *= o = Math.min(1, t / l, i / c)) > t - .5 && (l = t), (c *= o) > i - .5 && (c = i), "image" === e.type ? (d.top = Math.floor(.5 * (i - c)) + parseFloat(a.css("paddingTop")), d.left = Math.floor(.5 * (t - l)) + parseFloat(a.css("paddingLeft"))) : "video" === e.contentType && (c > l / (s = e.opts.width && e.opts.height ? l / c : e.opts.ratio || 16 / 9) ? c = l / s : l > c * s && (l = c * s)), d.width = l, d.height = c, d)
                },
                update: function(e) {
                    var t = this;
                    n.each(t.slides, function(n, i) {
                        t.updateSlide(i, e)
                    })
                },
                updateSlide: function(e, t) {
                    var i = this,
                        o = e && e.$content,
                        s = e.width || e.opts.width,
                        r = e.height || e.opts.height,
                        a = e.$slide;
                    i.adjustCaption(e), o && (s || r || "video" === e.contentType) && !e.hasError && (n.fancybox.stop(o), n.fancybox.setTranslate(o, i.getFitPos(e)), e.pos === i.currPos && (i.isAnimating = !1, i.updateCursor())), i.adjustLayout(e), a.length && (a.trigger("refresh"), e.pos === i.currPos && i.$refs.toolbar.add(i.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar", a.get(0).scrollHeight > a.get(0).clientHeight)), i.trigger("onUpdate", e, t)
                },
                centerSlide: function(e) {
                    var t = this,
                        i = t.current,
                        o = i.$slide;
                    !t.isClosing && i && (o.siblings().css({
                        transform: "",
                        opacity: ""
                    }), o.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"), n.fancybox.animate(o, {
                        top: 0,
                        left: 0,
                        opacity: 1
                    }, void 0 === e ? 0 : e, function() {
                        o.css({
                            transform: "",
                            opacity: ""
                        }), i.isComplete || t.complete()
                    }, !1))
                },
                isMoved: function(e) {
                    var t, i, o = e || this.current;
                    return !!o && (i = n.fancybox.getTranslate(this.$refs.stage), t = n.fancybox.getTranslate(o.$slide), !o.$slide.hasClass("fancybox-animated") && (Math.abs(t.top - i.top) > .5 || Math.abs(t.left - i.left) > .5))
                },
                updateCursor: function(e, t) {
                    var i, o, s = this,
                        r = s.current,
                        a = s.$refs.container;
                    r && !s.isClosing && s.Guestures && (a.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"), o = !!(i = s.canPan(e, t)) || s.isZoomable(), a.toggleClass("fancybox-is-zoomable", o), n("[data-fancybox-zoom]").prop("disabled", !o), i ? a.addClass("fancybox-can-pan") : o && ("zoom" === r.opts.clickContent || n.isFunction(r.opts.clickContent) && "zoom" == r.opts.clickContent(r)) ? a.addClass("fancybox-can-zoomIn") : r.opts.touch && (r.opts.touch.vertical || s.group.length > 1) && "video" !== r.contentType && a.addClass("fancybox-can-swipe"))
                },
                isZoomable: function() {
                    var e, t = this,
                        n = t.current;
                    if (n && !t.isClosing && "image" === n.type && !n.hasError) {
                        if (!n.isLoaded) return !0;
                        if ((e = t.getFitPos(n)) && (n.width > e.width || n.height > e.height)) return !0
                    }
                    return !1
                },
                isScaledDown: function(e, t) {
                    var i = !1,
                        o = this.current,
                        s = o.$content;
                    return void 0 !== e && void 0 !== t ? i = e < o.width && t < o.height : s && (i = (i = n.fancybox.getTranslate(s)).width < o.width && i.height < o.height), i
                },
                canPan: function(e, t) {
                    var i = this.current,
                        o = null,
                        s = !1;
                    return "image" === i.type && (i.isComplete || e && t) && !i.hasError && (s = this.getFitPos(i), void 0 !== e && void 0 !== t ? o = {
                        width: e,
                        height: t
                    } : i.isComplete && (o = n.fancybox.getTranslate(i.$content)), o && s && (s = Math.abs(o.width - s.width) > 1.5 || Math.abs(o.height - s.height) > 1.5)), s
                },
                loadSlide: function(e) {
                    var t, i, o, s = this;
                    if (!e.isLoading && !e.isLoaded) {
                        if (e.isLoading = !0, !1 === s.trigger("beforeLoad", e)) return e.isLoading = !1, !1;
                        switch (t = e.type, (i = e.$slide).off("refresh").trigger("onReset").addClass(e.opts.slideClass), t) {
                            case "image":
                                s.setImage(e);
                                break;
                            case "iframe":
                                s.setIframe(e);
                                break;
                            case "html":
                                s.setContent(e, e.src || e.content);
                                break;
                            case "video":
                                s.setContent(e, e.opts.video.tpl.replace(/\{\{src\}\}/gi, e.src).replace("{{format}}", e.opts.videoFormat || e.opts.video.format || "").replace("{{poster}}", e.thumb || ""));
                                break;
                            case "inline":
                                n(e.src).length ? s.setContent(e, n(e.src)) : s.setError(e);
                                break;
                            case "ajax":
                                s.showLoading(e), o = n.ajax(n.extend({}, e.opts.ajax.settings, {
                                    url: e.src,
                                    success: function(t, n) {
                                        "success" === n && s.setContent(e, t)
                                    },
                                    error: function(t, n) {
                                        t && "abort" !== n && s.setError(e)
                                    }
                                })), i.one("onReset", function() {
                                    o.abort()
                                });
                                break;
                            default:
                                s.setError(e)
                        }
                        return !0
                    }
                },
                setImage: function(e) {
                    var i, o = this;
                    setTimeout(function() {
                        var t = e.$image;
                        o.isClosing || !e.isLoading || t && t.length && t[0].complete || e.hasError || o.showLoading(e)
                    }, 50), o.checkSrcset(e), e.$content = n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(e.$slide.addClass("fancybox-slide--image")), !1 !== e.opts.preload && e.opts.width && e.opts.height && e.thumb && (e.width = e.opts.width, e.height = e.opts.height, (i = t.createElement("img")).onerror = function() {
                        n(this).remove(), e.$ghost = null
                    }, i.onload = function() {
                        o.afterLoad(e)
                    }, e.$ghost = n(i).addClass("fancybox-image").appendTo(e.$content).attr("src", e.thumb)), o.setBigImage(e)
                },
                checkSrcset: function(t) {
                    var n, i, o, s, r = t.opts.srcset || t.opts.image.srcset;
                    if (r) {
                        o = e.devicePixelRatio || 1, s = e.innerWidth * o, (i = r.split(",").map(function(e) {
                            var t = {};
                            return e.trim().split(/\s+/).forEach(function(e, n) {
                                var i = parseInt(e.substring(0, e.length - 1), 10);
                                if (0 === n) return t.url = e;
                                i && (t.value = i, t.postfix = e[e.length - 1])
                            }), t
                        })).sort(function(e, t) {
                            return e.value - t.value
                        });
                        for (var a = 0; a < i.length; a++) {
                            var l = i[a];
                            if ("w" === l.postfix && l.value >= s || "x" === l.postfix && l.value >= o) {
                                n = l;
                                break
                            }
                        }!n && i.length && (n = i[i.length - 1]), n && (t.src = n.url, t.width && t.height && "w" == n.postfix && (t.height = t.width / t.height * n.value, t.width = n.value), t.opts.srcset = r)
                    }
                },
                setBigImage: function(e) {
                    var i = this,
                        o = t.createElement("img"),
                        s = n(o);
                    e.$image = s.one("error", function() {
                        i.setError(e)
                    }).one("load", function() {
                        var t;
                        e.$ghost || (i.resolveImageSlideSize(e, this.naturalWidth, this.naturalHeight), i.afterLoad(e)), i.isClosing || (e.opts.srcset && ((t = e.opts.sizes) && "auto" !== t || (t = (e.width / e.height > 1 && r.width() / r.height() > 1 ? "100" : Math.round(e.width / e.height * 100)) + "vw"), s.attr("sizes", t).attr("srcset", e.opts.srcset)), e.$ghost && setTimeout(function() {
                            e.$ghost && !i.isClosing && e.$ghost.hide()
                        }, Math.min(300, Math.max(1e3, e.height / 1600))), i.hideLoading(e))
                    }).addClass("fancybox-image").attr("src", e.src).appendTo(e.$content), (o.complete || "complete" == o.readyState) && s.naturalWidth && s.naturalHeight ? s.trigger("load") : o.error && s.trigger("error")
                },
                resolveImageSlideSize: function(e, t, n) {
                    var i = parseInt(e.opts.width, 10),
                        o = parseInt(e.opts.height, 10);
                    e.width = t, e.height = n, i > 0 && (e.width = i, e.height = Math.floor(i * n / t)), o > 0 && (e.width = Math.floor(o * t / n), e.height = o)
                },
                setIframe: function(e) {
                    var t, i = this,
                        o = e.opts.iframe,
                        s = e.$slide;
                    e.$content = n('<div class="fancybox-content' + (o.preload ? " fancybox-is-hidden" : "") + '"></div>').css(o.css).appendTo(s), s.addClass("fancybox-slide--" + e.contentType), e.$iframe = t = n(o.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(o.attr).appendTo(e.$content), o.preload ? (i.showLoading(e), t.on("load.fb error.fb", function(t) {
                        this.isReady = 1, e.$slide.trigger("refresh"), i.afterLoad(e)
                    }), s.on("refresh.fb", function() {
                        var n, i = e.$content,
                            r = o.css.width,
                            a = o.css.height;
                        if (1 === t[0].isReady) {
                            try {
                                n = t.contents().find("body")
                            } catch (e) {}
                            n && n.length && n.children().length && (s.css("overflow", "visible"), i.css({
                                width: "100%",
                                "max-width": "100%",
                                height: "9999px"
                            }), void 0 === r && (r = Math.ceil(Math.max(n[0].clientWidth, n.outerWidth(!0)))), i.css("width", r || "").css("max-width", ""), void 0 === a && (a = Math.ceil(Math.max(n[0].clientHeight, n.outerHeight(!0)))), i.css("height", a || ""), s.css("overflow", "auto")), i.removeClass("fancybox-is-hidden")
                        }
                    })) : i.afterLoad(e), t.attr("src", e.src), s.one("onReset", function() {
                        try {
                            n(this).find("iframe").hide().unbind().attr("src", "//about:blank")
                        } catch (e) {}
                        n(this).off("refresh.fb").empty(), e.isLoaded = !1, e.isRevealed = !1
                    })
                },
                setContent: function(e, t) {
                    var i = this;
                    i.isClosing || (i.hideLoading(e), e.$content && n.fancybox.stop(e.$content), e.$slide.empty(), function(e) {
                        return e && e.hasOwnProperty && e instanceof n
                    }(t) && t.parent().length ? ((t.hasClass("fancybox-content") || t.parent().hasClass("fancybox-content")) && t.parents(".fancybox-slide").trigger("onReset"), e.$placeholder = n("<div>").hide().insertAfter(t), t.css("display", "inline-block")) : e.hasError || ("string" === n.type(t) && (t = n("<div>").append(n.trim(t)).contents()), e.opts.filter && (t = n("<div>").html(t).find(e.opts.filter))), e.$slide.one("onReset", function() {
                        n(this).find("video,audio").trigger("pause"), e.$placeholder && (e.$placeholder.after(t.removeClass("fancybox-content").hide()).remove(), e.$placeholder = null), e.$smallBtn && (e.$smallBtn.remove(), e.$smallBtn = null), e.hasError || (n(this).empty(), e.isLoaded = !1, e.isRevealed = !1)
                    }), n(t).appendTo(e.$slide), n(t).is("video,audio") && (n(t).addClass("fancybox-video"), n(t).wrap("<div></div>"), e.contentType = "video", e.opts.width = e.opts.width || n(t).attr("width"), e.opts.height = e.opts.height || n(t).attr("height")), e.$content = e.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(), e.$content.siblings().hide(), e.$content.length || (e.$content = e.$slide.wrapInner("<div></div>").children().first()), e.$content.addClass("fancybox-content"), e.$slide.addClass("fancybox-slide--" + e.contentType), i.afterLoad(e))
                },
                setError: function(e) {
                    e.hasError = !0, e.$slide.trigger("onReset").removeClass("fancybox-slide--" + e.contentType).addClass("fancybox-slide--error"), e.contentType = "html", this.setContent(e, this.translate(e, e.opts.errorTpl)), e.pos === this.currPos && (this.isAnimating = !1)
                },
                showLoading: function(e) {
                    var t = this;
                    (e = e || t.current) && !e.$spinner && (e.$spinner = n(t.translate(t, t.opts.spinnerTpl)).appendTo(e.$slide).hide().fadeIn("fast"))
                },
                hideLoading: function(e) {
                    (e = e || this.current) && e.$spinner && (e.$spinner.stop().remove(), delete e.$spinner)
                },
                afterLoad: function(e) {
                    var t = this;
                    t.isClosing || (e.isLoading = !1, e.isLoaded = !0, t.trigger("afterLoad", e), t.hideLoading(e), !e.opts.smallBtn || e.$smallBtn && e.$smallBtn.length || (e.$smallBtn = n(t.translate(e, e.opts.btnTpl.smallBtn)).appendTo(e.$content)), e.opts.protect && e.$content && !e.hasError && (e.$content.on("contextmenu.fb", function(e) {
                        return 2 == e.button && e.preventDefault(), !0
                    }), "image" === e.type && n('<div class="fancybox-spaceball"></div>').appendTo(e.$content)), t.adjustCaption(e), t.adjustLayout(e), e.pos === t.currPos && t.updateCursor(), t.revealContent(e))
                },
                adjustCaption: function(e) {
                    var t, n = this,
                        i = e || n.current,
                        o = i.opts.caption,
                        s = i.opts.preventCaptionOverlap,
                        r = n.$refs.caption,
                        a = !1;
                    r.toggleClass("fancybox-caption--separate", s), s && o && o.length && (i.pos !== n.currPos ? ((t = r.clone().appendTo(r.parent())).children().eq(0).empty().html(o), a = t.outerHeight(!0), t.empty().remove()) : n.$caption && (a = n.$caption.outerHeight(!0)), i.$slide.css("padding-bottom", a || ""))
                },
                adjustLayout: function(e) {
                    var t, n, i, o, s = e || this.current;
                    s.isLoaded && !0 !== s.opts.disableLayoutFix && (s.$content.css("margin-bottom", ""), s.$content.outerHeight() > s.$slide.height() + .5 && (i = s.$slide[0].style["padding-bottom"], o = s.$slide.css("padding-bottom"), parseFloat(o) > 0 && (t = s.$slide[0].scrollHeight, s.$slide.css("padding-bottom", 0), Math.abs(t - s.$slide[0].scrollHeight) < 1 && (n = o), s.$slide.css("padding-bottom", i))), s.$content.css("margin-bottom", n))
                },
                revealContent: function(e) {
                    var t, i, o, s, r = this,
                        a = e.$slide,
                        l = !1,
                        c = !1,
                        d = r.isMoved(e),
                        u = e.isRevealed;
                    return e.isRevealed = !0, t = e.opts[r.firstRun ? "animationEffect" : "transitionEffect"], o = e.opts[r.firstRun ? "animationDuration" : "transitionDuration"], o = parseInt(void 0 === e.forcedDuration ? o : e.forcedDuration, 10), !d && e.pos === r.currPos && o || (t = !1), "zoom" === t && (e.pos === r.currPos && o && "image" === e.type && !e.hasError && (c = r.getThumbPos(e)) ? l = r.getFitPos(e) : t = "fade"), "zoom" === t ? (r.isAnimating = !0, l.scaleX = l.width / c.width, l.scaleY = l.height / c.height, "auto" == (s = e.opts.zoomOpacity) && (s = Math.abs(e.width / e.height - c.width / c.height) > .1), s && (c.opacity = .1, l.opacity = 1), n.fancybox.setTranslate(e.$content.removeClass("fancybox-is-hidden"), c), p(e.$content), void n.fancybox.animate(e.$content, l, o, function() {
                        r.isAnimating = !1, r.complete()
                    })) : (r.updateSlide(e), t ? (n.fancybox.stop(a), i = "fancybox-slide--" + (e.pos >= r.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + t, a.addClass(i).removeClass("fancybox-slide--current"), e.$content.removeClass("fancybox-is-hidden"), p(a), "image" !== e.type && e.$content.hide().show(0), void n.fancybox.animate(a, "fancybox-slide--current", o, function() {
                        a.removeClass(i).css({
                            transform: "",
                            opacity: ""
                        }), e.pos === r.currPos && r.complete()
                    }, !0)) : (e.$content.removeClass("fancybox-is-hidden"), u || !d || "image" !== e.type || e.hasError || e.$content.hide().fadeIn("fast"), void(e.pos === r.currPos && r.complete())))
                },
                getThumbPos: function(e) {
                    var t, i, o, s, r, a = !1,
                        l = e.$thumb;
                    return !(!l || !h(l[0])) && (t = n.fancybox.getTranslate(l), i = parseFloat(l.css("border-top-width") || 0), o = parseFloat(l.css("border-right-width") || 0), s = parseFloat(l.css("border-bottom-width") || 0), r = parseFloat(l.css("border-left-width") || 0), a = {
                        top: t.top + i,
                        left: t.left + r,
                        width: t.width - o - r,
                        height: t.height - i - s,
                        scaleX: 1,
                        scaleY: 1
                    }, t.width > 0 && t.height > 0 && a)
                },
                complete: function() {
                    var e, t = this,
                        i = t.current,
                        o = {};
                    !t.isMoved() && i.isLoaded && (i.isComplete || (i.isComplete = !0, i.$slide.siblings().trigger("onReset"), t.preload("inline"), p(i.$slide), i.$slide.addClass("fancybox-slide--complete"), n.each(t.slides, function(e, i) {
                        i.pos >= t.currPos - 1 && i.pos <= t.currPos + 1 ? o[i.pos] = i : i && (n.fancybox.stop(i.$slide), i.$slide.off().remove())
                    }), t.slides = o), t.isAnimating = !1, t.updateCursor(), t.trigger("afterShow"), i.opts.video.autoStart && i.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended", function() {
                        Document.exitFullscreen ? Document.exitFullscreen() : this.webkitExitFullscreen && this.webkitExitFullscreen(), t.next()
                    }), i.opts.autoFocus && "html" === i.contentType && ((e = i.$content.find("input[autofocus]:enabled:visible:first")).length ? e.trigger("focus") : t.focus(null, !0)), i.$slide.scrollTop(0).scrollLeft(0))
                },
                preload: function(e) {
                    var t, n, i = this;
                    i.group.length < 2 || (n = i.slides[i.currPos + 1], (t = i.slides[i.currPos - 1]) && t.type === e && i.loadSlide(t), n && n.type === e && i.loadSlide(n))
                },
                focus: function(e, i) {
                    var o, s, r = this,
                        a = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'].join(",");
                    r.isClosing || ((o = (o = !e && r.current && r.current.isComplete ? r.current.$slide.find("*:visible" + (i ? ":not(.fancybox-close-small)" : "")) : r.$refs.container.find("*:visible")).filter(a).filter(function() {
                        return "hidden" !== n(this).css("visibility") && !n(this).hasClass("disabled")
                    })).length ? (s = o.index(t.activeElement), e && e.shiftKey ? (s < 0 || 0 == s) && (e.preventDefault(), o.eq(o.length - 1).trigger("focus")) : (s < 0 || s == o.length - 1) && (e && e.preventDefault(), o.eq(0).trigger("focus"))) : r.$refs.container.trigger("focus"))
                },
                activate: function() {
                    var e = this;
                    n(".fancybox-container").each(function() {
                        var t = n(this).data("FancyBox");
                        t && t.id !== e.id && !t.isClosing && (t.trigger("onDeactivate"), t.removeEvents(), t.isVisible = !1)
                    }), e.isVisible = !0, (e.current || e.isIdle) && (e.update(), e.updateControls()), e.trigger("onActivate"), e.addEvents()
                },
                close: function(e, t) {
                    var i, o, s, r, a, l, d, u = this,
                        f = u.current,
                        h = function() {
                            u.cleanUp(e)
                        };
                    return !(u.isClosing || (u.isClosing = !0, !1 === u.trigger("beforeClose", e) ? (u.isClosing = !1, c(function() {
                        u.update()
                    }), 1) : (u.removeEvents(), s = f.$content, i = f.opts.animationEffect, o = n.isNumeric(t) ? t : i ? f.opts.animationDuration : 0, f.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), !0 !== e ? n.fancybox.stop(f.$slide) : i = !1, f.$slide.siblings().trigger("onReset").remove(), o && u.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration", o + "ms"), u.hideLoading(f), u.hideControls(!0), u.updateCursor(), "zoom" !== i || s && o && "image" === f.type && !u.isMoved() && !f.hasError && (d = u.getThumbPos(f)) || (i = "fade"), "zoom" === i ? (n.fancybox.stop(s), r = n.fancybox.getTranslate(s), l = {
                        top: r.top,
                        left: r.left,
                        scaleX: r.width / d.width,
                        scaleY: r.height / d.height,
                        width: d.width,
                        height: d.height
                    }, a = f.opts.zoomOpacity, "auto" == a && (a = Math.abs(f.width / f.height - d.width / d.height) > .1), a && (d.opacity = 0), n.fancybox.setTranslate(s, l), p(s), n.fancybox.animate(s, d, o, h), 0) : (i && o ? n.fancybox.animate(f.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"), "fancybox-animated fancybox-fx-" + i, o, h) : !0 === e ? setTimeout(h, o) : h(), 0))))
                },
                cleanUp: function(t) {
                    var i, o, s, r = this,
                        a = r.current.opts.$orig;
                    r.current.$slide.trigger("onReset"), r.$refs.container.empty().remove(), r.trigger("afterClose", t), r.current.opts.backFocus && (a && a.length && a.is(":visible") || (a = r.$trigger), a && a.length && (o = e.scrollX, s = e.scrollY, a.trigger("focus"), n("html, body").scrollTop(s).scrollLeft(o))), r.current = null, (i = n.fancybox.getInstance()) ? i.activate() : (n("body").removeClass("fancybox-active compensate-for-scrollbar"), n("#fancybox-style-noscroll").remove())
                },
                trigger: function(e, t) {
                    var i, o = Array.prototype.slice.call(arguments, 1),
                        s = this,
                        r = t && t.opts ? t : s.current;
                    if (r ? o.unshift(r) : r = s, o.unshift(s), n.isFunction(r.opts[e]) && (i = r.opts[e].apply(r, o)), !1 === i) return i;
                    "afterClose" !== e && s.$refs ? s.$refs.container.trigger(e + ".fb", o) : a.trigger(e + ".fb", o)
                },
                updateControls: function() {
                    var e = this,
                        i = e.current,
                        o = i.index,
                        s = e.$refs.container,
                        r = e.$refs.caption,
                        a = i.opts.caption;
                    i.$slide.trigger("refresh"), a && a.length ? (e.$caption = r, r.children().eq(0).html(a)) : e.$caption = null, e.hasHiddenControls || e.isIdle || e.showControls(), s.find("[data-fancybox-count]").html(e.group.length), s.find("[data-fancybox-index]").html(o + 1), s.find("[data-fancybox-prev]").prop("disabled", !i.opts.loop && o <= 0), s.find("[data-fancybox-next]").prop("disabled", !i.opts.loop && o >= e.group.length - 1), "image" === i.type ? s.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", i.opts.image.src || i.src).show() : i.opts.toolbar && s.find("[data-fancybox-download],[data-fancybox-zoom]").hide(), n(t.activeElement).is(":hidden,[disabled]") && e.$refs.container.trigger("focus")
                },
                hideControls: function(e) {
                    var t = ["infobar", "toolbar", "nav"];
                    !e && this.current.opts.preventCaptionOverlap || t.push("caption"), this.$refs.container.removeClass(t.map(function(e) {
                        return "fancybox-show-" + e
                    }).join(" ")), this.hasHiddenControls = !0
                },
                showControls: function() {
                    var e = this,
                        t = e.current ? e.current.opts : e.opts,
                        n = e.$refs.container;
                    e.hasHiddenControls = !1, e.idleSecondsCounter = 0, n.toggleClass("fancybox-show-toolbar", !(!t.toolbar || !t.buttons)).toggleClass("fancybox-show-infobar", !!(t.infobar && e.group.length > 1)).toggleClass("fancybox-show-caption", !!e.$caption).toggleClass("fancybox-show-nav", !!(t.arrows && e.group.length > 1)).toggleClass("fancybox-is-modal", !!t.modal)
                },
                toggleControls: function() {
                    this.hasHiddenControls ? this.showControls() : this.hideControls()
                }
            }), n.fancybox = {
                version: "3.5.7",
                defaults: s,
                getInstance: function(e) {
                    var t = n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
                        i = Array.prototype.slice.call(arguments, 1);
                    return t instanceof g && ("string" === n.type(e) ? t[e].apply(t, i) : "function" === n.type(e) && e.apply(t, i), t)
                },
                open: function(e, t, n) {
                    return new g(e, t, n)
                },
                close: function(e) {
                    var t = this.getInstance();
                    t && (t.close(), !0 === e && this.close(e))
                },
                destroy: function() {
                    this.close(!0), a.add("body").off("click.fb-start", "**")
                },
                isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                use3d: function() {
                    var n = t.createElement("div");
                    return e.getComputedStyle && e.getComputedStyle(n) && e.getComputedStyle(n).getPropertyValue("transform") && !(t.documentMode && t.documentMode < 11)
                }(),
                getTranslate: function(e) {
                    var t;
                    return !(!e || !e.length) && {
                        top: (t = e[0].getBoundingClientRect()).top || 0,
                        left: t.left || 0,
                        width: t.width,
                        height: t.height,
                        opacity: parseFloat(e.css("opacity"))
                    }
                },
                setTranslate: function(e, t) {
                    var n = "",
                        i = {};
                    if (e && t) return void 0 === t.left && void 0 === t.top || (n = (void 0 === t.left ? e.position().left : t.left) + "px, " + (void 0 === t.top ? e.position().top : t.top) + "px", n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")"), void 0 !== t.scaleX && void 0 !== t.scaleY ? n += " scale(" + t.scaleX + ", " + t.scaleY + ")" : void 0 !== t.scaleX && (n += " scaleX(" + t.scaleX + ")"), n.length && (i.transform = n), void 0 !== t.opacity && (i.opacity = t.opacity), void 0 !== t.width && (i.width = t.width), void 0 !== t.height && (i.height = t.height), e.css(i)
                },
                animate: function(e, t, i, o, s) {
                    var r, a = this;
                    n.isFunction(i) && (o = i, i = null), a.stop(e), r = a.getTranslate(e), e.on(u, function(l) {
                        (!l || !l.originalEvent || e.is(l.originalEvent.target) && "z-index" != l.originalEvent.propertyName) && (a.stop(e), n.isNumeric(i) && e.css("transition-duration", ""), n.isPlainObject(t) ? void 0 !== t.scaleX && void 0 !== t.scaleY && a.setTranslate(e, {
                            top: t.top,
                            left: t.left,
                            width: r.width * t.scaleX,
                            height: r.height * t.scaleY,
                            scaleX: 1,
                            scaleY: 1
                        }) : !0 !== s && e.removeClass(t), n.isFunction(o) && o(l))
                    }), n.isNumeric(i) && e.css("transition-duration", i + "ms"), n.isPlainObject(t) ? (void 0 !== t.scaleX && void 0 !== t.scaleY && (delete t.width, delete t.height, e.parent().hasClass("fancybox-slide--image") && e.parent().addClass("fancybox-is-scaling")), n.fancybox.setTranslate(e, t)) : e.addClass(t), e.data("timer", setTimeout(function() {
                        e.trigger(u)
                    }, i + 33))
                },
                stop: function(e, t) {
                    e && e.length && (clearTimeout(e.data("timer")), t && e.trigger(u), e.off(u).css("transition-duration", ""), e.parent().removeClass("fancybox-is-scaling"))
                }
            }, n.fn.fancybox = function(e) {
                var t;
                return (t = (e = e || {}).selector || !1) ? n("body").off("click.fb-start", t).on("click.fb-start", t, {
                    options: e
                }, o) : this.off("click.fb-start").on("click.fb-start", {
                    items: this,
                    options: e
                }, o), this
            }, a.on("click.fb-start", "[data-fancybox]", o), a.on("click.fb-start", "[data-fancybox-trigger]", function(e) {
                n('[data-fancybox="' + n(this).attr("data-fancybox-trigger") + '"]').eq(n(this).attr("data-fancybox-index") || 0).trigger("click.fb-start", {
                    $trigger: n(this)
                })
            }),
            function() {
                var e = null;
                a.on("mousedown mouseup focus blur", ".fancybox-button", function(t) {
                    switch (t.type) {
                        case "mousedown":
                            e = n(this);
                            break;
                        case "mouseup":
                            e = null;
                            break;
                        case "focusin":
                            n(".fancybox-button").removeClass("fancybox-focus"), n(this).is(e) || n(this).is("[disabled]") || n(this).addClass("fancybox-focus");
                            break;
                        case "focusout":
                            n(".fancybox-button").removeClass("fancybox-focus")
                    }
                })
            }()
    }
}(window, document, jQuery),
function(e) {
    "use strict";
    var t = {
            youtube: {
                matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
                params: {
                    autoplay: 1,
                    autohide: 1,
                    fs: 1,
                    rel: 0,
                    hd: 1,
                    wmode: "transparent",
                    enablejsapi: 1,
                    html5: 1
                },
                paramPlace: 8,
                type: "iframe",
                url: "https://www.youtube-nocookie.com/embed/$4",
                thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg"
            },
            vimeo: {
                matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
                params: {
                    autoplay: 1,
                    hd: 1,
                    show_title: 1,
                    show_byline: 1,
                    show_portrait: 0,
                    fullscreen: 1
                },
                paramPlace: 3,
                type: "iframe",
                url: "//player.vimeo.com/video/$2"
            },
            instagram: {
                matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
                type: "image",
                url: "//$1/p/$2/media/?size=l"
            },
            gmap_place: {
                matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
                type: "iframe",
                url: function(e) {
                    return "//maps.google." + e[2] + "/?ll=" + (e[9] ? e[9] + "&z=" + Math.floor(e[10]) + (e[12] ? e[12].replace(/^\//, "&") : "") : e[12] + "").replace(/\?/, "&") + "&output=" + (e[12] && e[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
                }
            },
            gmap_search: {
                matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
                type: "iframe",
                url: function(e) {
                    return "//maps.google." + e[2] + "/maps?q=" + e[5].replace("query=", "q=").replace("api=1", "") + "&output=embed"
                }
            }
        },
        n = function(t, n, i) {
            if (t) return i = i || "", "object" === e.type(i) && (i = e.param(i, !0)), e.each(n, function(e, n) {
                t = t.replace("$" + e, n || "")
            }), i.length && (t += (t.indexOf("?") > 0 ? "&" : "?") + i), t
        };
    e(document).on("objectNeedsType.fb", function(i, o, s) {
        var r, a, l, c, d, u, p, f = s.src || "",
            h = !1;
        r = e.extend(!0, {}, t, s.opts.media), e.each(r, function(t, i) {
            if (l = f.match(i.matcher)) {
                if (h = i.type, p = t, u = {}, i.paramPlace && l[i.paramPlace]) {
                    "?" == (d = l[i.paramPlace])[0] && (d = d.substring(1)), d = d.split("&");
                    for (var o = 0; o < d.length; ++o) {
                        var r = d[o].split("=", 2);
                        2 == r.length && (u[r[0]] = decodeURIComponent(r[1].replace(/\+/g, " ")))
                    }
                }
                return c = e.extend(!0, {}, i.params, s.opts[t], u), f = "function" === e.type(i.url) ? i.url.call(this, l, c, s) : n(i.url, l, c), a = "function" === e.type(i.thumb) ? i.thumb.call(this, l, c, s) : n(i.thumb, l), "youtube" === t ? f = f.replace(/&t=((\d+)m)?(\d+)s/, function(e, t, n, i) {
                    return "&start=" + ((n ? 60 * parseInt(n, 10) : 0) + parseInt(i, 10))
                }) : "vimeo" === t && (f = f.replace("&%23", "#")), !1
            }
        }), h ? (s.opts.thumb || s.opts.$thumb && s.opts.$thumb.length || (s.opts.thumb = a), "iframe" === h && (s.opts = e.extend(!0, s.opts, {
            iframe: {
                preload: !1,
                attr: {
                    scrolling: "no"
                }
            }
        })), e.extend(s, {
            type: h,
            src: f,
            origSrc: s.src,
            contentSource: p,
            contentType: "image" === h ? "image" : "gmap_place" == p || "gmap_search" == p ? "map" : "video"
        })) : f && (s.type = s.opts.defaultType)
    });
    var i = {
        youtube: {
            src: "https://www.youtube.com/iframe_api",
            class: "YT",
            loading: !1,
            loaded: !1
        },
        vimeo: {
            src: "https://player.vimeo.com/api/player.js",
            class: "Vimeo",
            loading: !1,
            loaded: !1
        },
        load: function(e) {
            var t, n = this;
            this[e].loaded ? setTimeout(function() {
                n.done(e)
            }) : this[e].loading || (this[e].loading = !0, (t = document.createElement("script")).type = "text/javascript", t.src = this[e].src, "youtube" === e ? window.onYouTubeIframeAPIReady = function() {
                n[e].loaded = !0, n.done(e)
            } : t.onload = function() {
                n[e].loaded = !0, n.done(e)
            }, document.body.appendChild(t))
        },
        done: function(t) {
            var n, i;
            "youtube" === t && delete window.onYouTubeIframeAPIReady, (n = e.fancybox.getInstance()) && (i = n.current.$content.find("iframe"), "youtube" === t && void 0 !== YT && YT ? new YT.Player(i.attr("id"), {
                events: {
                    onStateChange: function(e) {
                        0 == e.data && n.next()
                    }
                }
            }) : "vimeo" === t && void 0 !== Vimeo && Vimeo && new Vimeo.Player(i).on("ended", function() {
                n.next()
            }))
        }
    };
    e(document).on({
        "afterShow.fb": function(e, t, n) {
            t.group.length > 1 && ("youtube" === n.contentSource || "vimeo" === n.contentSource) && i.load(n.contentSource)
        }
    })
}(jQuery),
function(e, t, n) {
    "use strict";
    var i = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || function(t) {
            return e.setTimeout(t, 1e3 / 60)
        },
        o = e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.mozCancelAnimationFrame || e.oCancelAnimationFrame || function(t) {
            e.clearTimeout(t)
        },
        s = function(t) {
            var n = [];
            for (var i in t = (t = t.originalEvent || t || e.e).touches && t.touches.length ? t.touches : t.changedTouches && t.changedTouches.length ? t.changedTouches : [t]) t[i].pageX ? n.push({
                x: t[i].pageX,
                y: t[i].pageY
            }) : t[i].clientX && n.push({
                x: t[i].clientX,
                y: t[i].clientY
            });
            return n
        },
        r = function(e, t, n) {
            return t && e ? "x" === n ? e.x - t.x : "y" === n ? e.y - t.y : Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)) : 0
        },
        a = function(e) {
            if (e.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') || n.isFunction(e.get(0).onclick) || e.data("selectable")) return !0;
            for (var t = 0, i = e[0].attributes, o = i.length; t < o; t++)
                if ("data-fancybox-" === i[t].nodeName.substr(0, 14)) return !0;
            return !1
        },
        l = function(t) {
            var n = e.getComputedStyle(t)["overflow-y"],
                i = e.getComputedStyle(t)["overflow-x"],
                o = ("scroll" === n || "auto" === n) && t.scrollHeight > t.clientHeight,
                s = ("scroll" === i || "auto" === i) && t.scrollWidth > t.clientWidth;
            return o || s
        },
        c = function(e) {
            for (var t = !1; !(t = l(e.get(0))) && ((e = e.parent()).length && !e.hasClass("fancybox-stage") && !e.is("body")););
            return t
        },
        d = function(e) {
            var t = this;
            t.instance = e, t.$bg = e.$refs.bg, t.$stage = e.$refs.stage, t.$container = e.$refs.container, t.destroy(), t.$container.on("touchstart.fb.touch mousedown.fb.touch", n.proxy(t, "ontouchstart"))
        };
    d.prototype.destroy = function() {
        var e = this;
        e.$container.off(".fb.touch"), n(t).off(".fb.touch"), e.requestId && (o(e.requestId), e.requestId = null), e.tapped && (clearTimeout(e.tapped), e.tapped = null)
    }, d.prototype.ontouchstart = function(i) {
        var o = this,
            l = n(i.target),
            d = o.instance,
            u = d.current,
            p = u.$slide,
            f = u.$content,
            h = "touchstart" == i.type;
        if (h && o.$container.off("mousedown.fb.touch"), (!i.originalEvent || 2 != i.originalEvent.button) && p.length && l.length && !a(l) && !a(l.parent()) && (l.is("img") || !(i.originalEvent.clientX > l[0].clientWidth + l.offset().left))) {
            if (!u || d.isAnimating || u.$slide.hasClass("fancybox-animated")) return i.stopPropagation(), void i.preventDefault();
            o.realPoints = o.startPoints = s(i), o.startPoints.length && (u.touch && i.stopPropagation(), o.startEvent = i, o.canTap = !0, o.$target = l, o.$content = f, o.opts = u.opts.touch, o.isPanning = !1, o.isSwiping = !1, o.isZooming = !1, o.isScrolling = !1, o.canPan = d.canPan(), o.startTime = (new Date).getTime(), o.distanceX = o.distanceY = o.distance = 0, o.canvasWidth = Math.round(p[0].clientWidth), o.canvasHeight = Math.round(p[0].clientHeight), o.contentLastPos = null, o.contentStartPos = n.fancybox.getTranslate(o.$content) || {
                top: 0,
                left: 0
            }, o.sliderStartPos = n.fancybox.getTranslate(p), o.stagePos = n.fancybox.getTranslate(d.$refs.stage), o.sliderStartPos.top -= o.stagePos.top, o.sliderStartPos.left -= o.stagePos.left, o.contentStartPos.top -= o.stagePos.top, o.contentStartPos.left -= o.stagePos.left, n(t).off(".fb.touch").on(h ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", n.proxy(o, "ontouchend")).on(h ? "touchmove.fb.touch" : "mousemove.fb.touch", n.proxy(o, "ontouchmove")), n.fancybox.isMobile && t.addEventListener("scroll", o.onscroll, !0), ((o.opts || o.canPan) && (l.is(o.$stage) || o.$stage.find(l).length) || (l.is(".fancybox-image") && i.preventDefault(), n.fancybox.isMobile && l.parents(".fancybox-caption").length)) && (o.isScrollable = c(l) || c(l.parent()), n.fancybox.isMobile && o.isScrollable || i.preventDefault(), (1 === o.startPoints.length || u.hasError) && (o.canPan ? (n.fancybox.stop(o.$content), o.isPanning = !0) : o.isSwiping = !0, o.$container.addClass("fancybox-is-grabbing")), 2 === o.startPoints.length && "image" === u.type && (u.isLoaded || u.$ghost) && (o.canTap = !1, o.isSwiping = !1, o.isPanning = !1, o.isZooming = !0, n.fancybox.stop(o.$content), o.centerPointStartX = .5 * (o.startPoints[0].x + o.startPoints[1].x) - n(e).scrollLeft(), o.centerPointStartY = .5 * (o.startPoints[0].y + o.startPoints[1].y) - n(e).scrollTop(), o.percentageOfImageAtPinchPointX = (o.centerPointStartX - o.contentStartPos.left) / o.contentStartPos.width, o.percentageOfImageAtPinchPointY = (o.centerPointStartY - o.contentStartPos.top) / o.contentStartPos.height, o.startDistanceBetweenFingers = r(o.startPoints[0], o.startPoints[1]))))
        }
    }, d.prototype.onscroll = function(e) {
        this.isScrolling = !0, t.removeEventListener("scroll", this.onscroll, !0)
    }, d.prototype.ontouchmove = function(e) {
        var t = this;
        return void 0 !== e.originalEvent.buttons && 0 === e.originalEvent.buttons ? void t.ontouchend(e) : t.isScrolling ? void(t.canTap = !1) : (t.newPoints = s(e), void((t.opts || t.canPan) && t.newPoints.length && t.newPoints.length && (t.isSwiping && !0 === t.isSwiping || e.preventDefault(), t.distanceX = r(t.newPoints[0], t.startPoints[0], "x"), t.distanceY = r(t.newPoints[0], t.startPoints[0], "y"), t.distance = r(t.newPoints[0], t.startPoints[0]), t.distance > 0 && (t.isSwiping ? t.onSwipe(e) : t.isPanning ? t.onPan() : t.isZooming && t.onZoom()))))
    }, d.prototype.onSwipe = function(t) {
        var s, r = this,
            a = r.instance,
            l = r.isSwiping,
            c = r.sliderStartPos.left || 0;
        if (!0 !== l) "x" == l && (r.distanceX > 0 && (r.instance.group.length < 2 || 0 === r.instance.current.index && !r.instance.current.opts.loop) ? c += Math.pow(r.distanceX, .8) : r.distanceX < 0 && (r.instance.group.length < 2 || r.instance.current.index === r.instance.group.length - 1 && !r.instance.current.opts.loop) ? c -= Math.pow(-r.distanceX, .8) : c += r.distanceX), r.sliderLastPos = {
            top: "x" == l ? 0 : r.sliderStartPos.top + r.distanceY,
            left: c
        }, r.requestId && (o(r.requestId), r.requestId = null), r.requestId = i(function() {
            r.sliderLastPos && (n.each(r.instance.slides, function(e, t) {
                var i = t.pos - r.instance.currPos;
                n.fancybox.setTranslate(t.$slide, {
                    top: r.sliderLastPos.top,
                    left: r.sliderLastPos.left + i * r.canvasWidth + i * t.opts.gutter
                })
            }), r.$container.addClass("fancybox-is-sliding"))
        });
        else if (Math.abs(r.distance) > 10) {
            if (r.canTap = !1, a.group.length < 2 && r.opts.vertical ? r.isSwiping = "y" : a.isDragging || !1 === r.opts.vertical || "auto" === r.opts.vertical && n(e).width() > 800 ? r.isSwiping = "x" : (s = Math.abs(180 * Math.atan2(r.distanceY, r.distanceX) / Math.PI), r.isSwiping = s > 45 && s < 135 ? "y" : "x"), "y" === r.isSwiping && n.fancybox.isMobile && r.isScrollable) return void(r.isScrolling = !0);
            a.isDragging = r.isSwiping, r.startPoints = r.newPoints, n.each(a.slides, function(e, t) {
                var i, o;
                n.fancybox.stop(t.$slide), i = n.fancybox.getTranslate(t.$slide), o = n.fancybox.getTranslate(a.$refs.stage), t.$slide.css({
                    transform: "",
                    opacity: "",
                    "transition-duration": ""
                }).removeClass("fancybox-animated").removeClass(function(e, t) {
                    return (t.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
                }), t.pos === a.current.pos && (r.sliderStartPos.top = i.top - o.top, r.sliderStartPos.left = i.left - o.left), n.fancybox.setTranslate(t.$slide, {
                    top: i.top - o.top,
                    left: i.left - o.left
                })
            }), a.SlideShow && a.SlideShow.isActive && a.SlideShow.stop()
        }
    }, d.prototype.onPan = function() {
        var e = this;
        r(e.newPoints[0], e.realPoints[0]) < (n.fancybox.isMobile ? 10 : 5) ? e.startPoints = e.newPoints : (e.canTap = !1, e.contentLastPos = e.limitMovement(), e.requestId && o(e.requestId), e.requestId = i(function() {
            n.fancybox.setTranslate(e.$content, e.contentLastPos)
        }))
    }, d.prototype.limitMovement = function() {
        var e, t, n, i, o, s, r = this,
            a = r.canvasWidth,
            l = r.canvasHeight,
            c = r.distanceX,
            d = r.distanceY,
            u = r.contentStartPos,
            p = u.left,
            f = u.top,
            h = u.width,
            g = u.height;
        return o = h > a ? p + c : p, s = f + d, e = Math.max(0, .5 * a - .5 * h), t = Math.max(0, .5 * l - .5 * g), n = Math.min(a - h, .5 * a - .5 * h), i = Math.min(l - g, .5 * l - .5 * g), c > 0 && o > e && (o = e - 1 + Math.pow(-e + p + c, .8) || 0), c < 0 && o < n && (o = n + 1 - Math.pow(n - p - c, .8) || 0), d > 0 && s > t && (s = t - 1 + Math.pow(-t + f + d, .8) || 0), d < 0 && s < i && (s = i + 1 - Math.pow(i - f - d, .8) || 0), {
            top: s,
            left: o
        }
    }, d.prototype.limitPosition = function(e, t, n, i) {
        var o = this.canvasWidth,
            s = this.canvasHeight;
        return n > o ? e = (e = e > 0 ? 0 : e) < o - n ? o - n : e : e = Math.max(0, o / 2 - n / 2), i > s ? t = (t = t > 0 ? 0 : t) < s - i ? s - i : t : t = Math.max(0, s / 2 - i / 2), {
            top: t,
            left: e
        }
    }, d.prototype.onZoom = function() {
        var t = this,
            s = t.contentStartPos,
            a = s.width,
            l = s.height,
            c = s.left,
            d = s.top,
            u = r(t.newPoints[0], t.newPoints[1]) / t.startDistanceBetweenFingers,
            p = Math.floor(a * u),
            f = Math.floor(l * u),
            h = (a - p) * t.percentageOfImageAtPinchPointX,
            g = (l - f) * t.percentageOfImageAtPinchPointY,
            v = (t.newPoints[0].x + t.newPoints[1].x) / 2 - n(e).scrollLeft(),
            m = (t.newPoints[0].y + t.newPoints[1].y) / 2 - n(e).scrollTop(),
            y = v - t.centerPointStartX,
            b = {
                top: d + (g + (m - t.centerPointStartY)),
                left: c + (h + y),
                scaleX: u,
                scaleY: u
            };
        t.canTap = !1, t.newWidth = p, t.newHeight = f, t.contentLastPos = b, t.requestId && o(t.requestId), t.requestId = i(function() {
            n.fancybox.setTranslate(t.$content, t.contentLastPos)
        })
    }, d.prototype.ontouchend = function(e) {
        var i = this,
            r = i.isSwiping,
            a = i.isPanning,
            l = i.isZooming,
            c = i.isScrolling;
        if (i.endPoints = s(e), i.dMs = Math.max((new Date).getTime() - i.startTime, 1), i.$container.removeClass("fancybox-is-grabbing"), n(t).off(".fb.touch"), t.removeEventListener("scroll", i.onscroll, !0), i.requestId && (o(i.requestId), i.requestId = null), i.isSwiping = !1, i.isPanning = !1, i.isZooming = !1, i.isScrolling = !1, i.instance.isDragging = !1, i.canTap) return i.onTap(e);
        i.speed = 100, i.velocityX = i.distanceX / i.dMs * .5, i.velocityY = i.distanceY / i.dMs * .5, a ? i.endPanning() : l ? i.endZooming() : i.endSwiping(r, c)
    }, d.prototype.endSwiping = function(e, t) {
        var i = this,
            o = !1,
            s = i.instance.group.length,
            r = Math.abs(i.distanceX),
            a = "x" == e && s > 1 && (i.dMs > 130 && r > 10 || r > 50);
        i.sliderLastPos = null, "y" == e && !t && Math.abs(i.distanceY) > 50 ? (n.fancybox.animate(i.instance.current.$slide, {
            top: i.sliderStartPos.top + i.distanceY + 150 * i.velocityY,
            opacity: 0
        }, 200), o = i.instance.close(!0, 250)) : a && i.distanceX > 0 ? o = i.instance.previous(300) : a && i.distanceX < 0 && (o = i.instance.next(300)), !1 !== o || "x" != e && "y" != e || i.instance.centerSlide(200), i.$container.removeClass("fancybox-is-sliding")
    }, d.prototype.endPanning = function() {
        var e, t, i, o = this;
        o.contentLastPos && (!1 === o.opts.momentum || o.dMs > 350 ? (e = o.contentLastPos.left, t = o.contentLastPos.top) : (e = o.contentLastPos.left + 500 * o.velocityX, t = o.contentLastPos.top + 500 * o.velocityY), (i = o.limitPosition(e, t, o.contentStartPos.width, o.contentStartPos.height)).width = o.contentStartPos.width, i.height = o.contentStartPos.height, n.fancybox.animate(o.$content, i, 366))
    }, d.prototype.endZooming = function() {
        var e, t, i, o, s = this,
            r = s.instance.current,
            a = s.newWidth,
            l = s.newHeight;
        s.contentLastPos && (e = s.contentLastPos.left, o = {
            top: t = s.contentLastPos.top,
            left: e,
            width: a,
            height: l,
            scaleX: 1,
            scaleY: 1
        }, n.fancybox.setTranslate(s.$content, o), a < s.canvasWidth && l < s.canvasHeight ? s.instance.scaleToFit(150) : a > r.width || l > r.height ? s.instance.scaleToActual(s.centerPointStartX, s.centerPointStartY, 150) : (i = s.limitPosition(e, t, a, l), n.fancybox.animate(s.$content, i, 150)))
    }, d.prototype.onTap = function(t) {
        var i, o = this,
            r = n(t.target),
            a = o.instance,
            l = a.current,
            c = t && s(t) || o.startPoints,
            d = c[0] ? c[0].x - n(e).scrollLeft() - o.stagePos.left : 0,
            u = c[0] ? c[0].y - n(e).scrollTop() - o.stagePos.top : 0,
            p = function(e) {
                var i = l.opts[e];
                if (n.isFunction(i) && (i = i.apply(a, [l, t])), i) switch (i) {
                    case "close":
                        a.close(o.startEvent);
                        break;
                    case "toggleControls":
                        a.toggleControls();
                        break;
                    case "next":
                        a.next();
                        break;
                    case "nextOrClose":
                        a.group.length > 1 ? a.next() : a.close(o.startEvent);
                        break;
                    case "zoom":
                        "image" == l.type && (l.isLoaded || l.$ghost) && (a.canPan() ? a.scaleToFit() : a.isScaledDown() ? a.scaleToActual(d, u) : a.group.length < 2 && a.close(o.startEvent))
                }
            };
        if ((!t.originalEvent || 2 != t.originalEvent.button) && (r.is("img") || !(d > r[0].clientWidth + r.offset().left))) {
            if (r.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) i = "Outside";
            else if (r.is(".fancybox-slide")) i = "Slide";
            else {
                if (!a.current.$content || !a.current.$content.find(r).addBack().filter(r).length) return;
                i = "Content"
            }
            if (o.tapped) {
                if (clearTimeout(o.tapped), o.tapped = null, Math.abs(d - o.tapX) > 50 || Math.abs(u - o.tapY) > 50) return this;
                p("dblclick" + i)
            } else o.tapX = d, o.tapY = u, l.opts["dblclick" + i] && l.opts["dblclick" + i] !== l.opts["click" + i] ? o.tapped = setTimeout(function() {
                o.tapped = null, a.isAnimating || p("click" + i)
            }, 500) : p("click" + i);
            return this
        }
    }, n(t).on("onActivate.fb", function(e, t) {
        t && !t.Guestures && (t.Guestures = new d(t))
    }).on("beforeClose.fb", function(e, t) {
        t && t.Guestures && t.Guestures.destroy()
    })
}(window, document, jQuery),
function(e, t) {
    "use strict";
    t.extend(!0, t.fancybox.defaults, {
        btnTpl: {
            slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'
        },
        slideShow: {
            autoStart: !1,
            speed: 3e3,
            progress: !0
        }
    });
    var n = function(e) {
        this.instance = e, this.init()
    };
    t.extend(n.prototype, {
        timer: null,
        isActive: !1,
        $button: null,
        init: function() {
            var e = this,
                n = e.instance,
                i = n.group[n.currIndex].opts.slideShow;
            e.$button = n.$refs.toolbar.find("[data-fancybox-play]").on("click", function() {
                e.toggle()
            }), n.group.length < 2 || !i ? e.$button.hide() : i.progress && (e.$progress = t('<div class="fancybox-progress"></div>').appendTo(n.$refs.inner))
        },
        set: function(e) {
            var n = this,
                i = n.instance,
                o = i.current;
            o && (!0 === e || o.opts.loop || i.currIndex < i.group.length - 1) ? n.isActive && "video" !== o.contentType && (n.$progress && t.fancybox.animate(n.$progress.show(), {
                scaleX: 1
            }, o.opts.slideShow.speed), n.timer = setTimeout(function() {
                i.current.opts.loop || i.current.index != i.group.length - 1 ? i.next() : i.jumpTo(0)
            }, o.opts.slideShow.speed)) : (n.stop(), i.idleSecondsCounter = 0, i.showControls())
        },
        clear: function() {
            var e = this;
            clearTimeout(e.timer), e.timer = null, e.$progress && e.$progress.removeAttr("style").hide()
        },
        start: function() {
            var e = this,
                t = e.instance.current;
            t && (e.$button.attr("title", (t.opts.i18n[t.opts.lang] || t.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"), e.isActive = !0, t.isComplete && e.set(!0), e.instance.trigger("onSlideShowChange", !0))
        },
        stop: function() {
            var e = this,
                t = e.instance.current;
            e.clear(), e.$button.attr("title", (t.opts.i18n[t.opts.lang] || t.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"), e.isActive = !1, e.instance.trigger("onSlideShowChange", !1), e.$progress && e.$progress.removeAttr("style").hide()
        },
        toggle: function() {
            var e = this;
            e.isActive ? e.stop() : e.start()
        }
    }), t(e).on({
        "onInit.fb": function(e, t) {
            t && !t.SlideShow && (t.SlideShow = new n(t))
        },
        "beforeShow.fb": function(e, t, n, i) {
            var o = t && t.SlideShow;
            i ? o && n.opts.slideShow.autoStart && o.start() : o && o.isActive && o.clear()
        },
        "afterShow.fb": function(e, t, n) {
            var i = t && t.SlideShow;
            i && i.isActive && i.set()
        },
        "afterKeydown.fb": function(n, i, o, s, r) {
            var a = i && i.SlideShow;
            !a || !o.opts.slideShow || 80 !== r && 32 !== r || t(e.activeElement).is("button,a,input") || (s.preventDefault(), a.toggle())
        },
        "beforeClose.fb onDeactivate.fb": function(e, t) {
            var n = t && t.SlideShow;
            n && n.stop()
        }
    }), t(e).on("visibilitychange", function() {
        var n = t.fancybox.getInstance(),
            i = n && n.SlideShow;
        i && i.isActive && (e.hidden ? i.clear() : i.set())
    })
}(document, jQuery),
function(e, t) {
    "use strict";
    var n = function() {
        for (var t = [
                ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
            ], n = {}, i = 0; i < t.length; i++) {
            var o = t[i];
            if (o && o[1] in e) {
                for (var s = 0; s < o.length; s++) n[t[0][s]] = o[s];
                return n
            }
        }
        return !1
    }();
    if (n) {
        var i = {
            request: function(t) {
                (t = t || e.documentElement)[n.requestFullscreen](t.ALLOW_KEYBOARD_INPUT)
            },
            exit: function() {
                e[n.exitFullscreen]()
            },
            toggle: function(t) {
                t = t || e.documentElement, this.isFullscreen() ? this.exit() : this.request(t)
            },
            isFullscreen: function() {
                return Boolean(e[n.fullscreenElement])
            },
            enabled: function() {
                return Boolean(e[n.fullscreenEnabled])
            }
        };
        t.extend(!0, t.fancybox.defaults, {
            btnTpl: {
                fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'
            },
            fullScreen: {
                autoStart: !1
            }
        }), t(e).on(n.fullscreenchange, function() {
            var e = i.isFullscreen(),
                n = t.fancybox.getInstance();
            n && (n.current && "image" === n.current.type && n.isAnimating && (n.isAnimating = !1, n.update(!0, !0, 0), n.isComplete || n.complete()), n.trigger("onFullscreenChange", e), n.$refs.container.toggleClass("fancybox-is-fullscreen", e), n.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !e).toggleClass("fancybox-button--fsexit", e))
        })
    }
    t(e).on({
        "onInit.fb": function(e, t) {
            n ? t && t.group[t.currIndex].opts.fullScreen ? (t.$refs.container.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function(e) {
                e.stopPropagation(), e.preventDefault(), i.toggle()
            }), t.opts.fullScreen && !0 === t.opts.fullScreen.autoStart && i.request(), t.FullScreen = i) : t && t.$refs.toolbar.find("[data-fancybox-fullscreen]").hide() : t.$refs.toolbar.find("[data-fancybox-fullscreen]").remove()
        },
        "afterKeydown.fb": function(e, t, n, i, o) {
            t && t.FullScreen && 70 === o && (i.preventDefault(), t.FullScreen.toggle())
        },
        "beforeClose.fb": function(e, t) {
            t && t.FullScreen && t.$refs.container.hasClass("fancybox-is-fullscreen") && i.exit()
        }
    })
}(document, jQuery),
function(e, t) {
    "use strict";
    var n = "fancybox-thumbs";
    t.fancybox.defaults = t.extend(!0, {
        btnTpl: {
            thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'
        },
        thumbs: {
            autoStart: !1,
            hideOnClose: !0,
            parentEl: ".fancybox-container",
            axis: "y"
        }
    }, t.fancybox.defaults);
    var i = function(e) {
        this.init(e)
    };
    t.extend(i.prototype, {
        $button: null,
        $grid: null,
        $list: null,
        isVisible: !1,
        isActive: !1,
        init: function(e) {
            var t = this,
                n = e.group,
                i = 0;
            t.instance = e, t.opts = n[e.currIndex].opts.thumbs, e.Thumbs = t, t.$button = e.$refs.toolbar.find("[data-fancybox-thumbs]");
            for (var o = 0, s = n.length; o < s && (n[o].thumb && i++, !(i > 1)); o++);
            i > 1 && t.opts ? (t.$button.removeAttr("style").on("click", function() {
                t.toggle()
            }), t.isActive = !0) : t.$button.hide()
        },
        create: function() {
            var e, i = this,
                o = i.instance,
                s = i.opts.parentEl,
                r = [];
            i.$grid || (i.$grid = t('<div class="' + n + " " + n + "-" + i.opts.axis + '"></div>').appendTo(o.$refs.container.find(s).addBack().filter(s)), i.$grid.on("click", "a", function() {
                o.jumpTo(t(this).attr("data-index"))
            })), i.$list || (i.$list = t('<div class="' + n + '__list">').appendTo(i.$grid)), t.each(o.group, function(t, n) {
                (e = n.thumb) || "image" !== n.type || (e = n.src), r.push('<a href="javascript:;" tabindex="0" data-index="' + t + '"' + (e && e.length ? ' style="background-image:url(' + e + ')"' : 'class="fancybox-thumbs-missing"') + "></a>")
            }), i.$list[0].innerHTML = r.join(""), "x" === i.opts.axis && i.$list.width(parseInt(i.$grid.css("padding-right"), 10) + o.group.length * i.$list.children().eq(0).outerWidth(!0))
        },
        focus: function(e) {
            var t, n, i = this,
                o = i.$list,
                s = i.$grid;
            i.instance.current && (n = (t = o.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + i.instance.current.index + '"]').addClass("fancybox-thumbs-active")).position(), "y" === i.opts.axis && (n.top < 0 || n.top > o.height() - t.outerHeight()) ? o.stop().animate({
                scrollTop: o.scrollTop() + n.top
            }, e) : "x" === i.opts.axis && (n.left < s.scrollLeft() || n.left > s.scrollLeft() + (s.width() - t.outerWidth())) && o.parent().stop().animate({
                scrollLeft: n.left
            }, e))
        },
        update: function() {
            var e = this;
            e.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), e.isVisible ? (e.$grid || e.create(), e.instance.trigger("onThumbsShow"), e.focus(0)) : e.$grid && e.instance.trigger("onThumbsHide"), e.instance.update()
        },
        hide: function() {
            this.isVisible = !1, this.update()
        },
        show: function() {
            this.isVisible = !0, this.update()
        },
        toggle: function() {
            this.isVisible = !this.isVisible, this.update()
        }
    }), t(e).on({
        "onInit.fb": function(e, t) {
            var n;
            t && !t.Thumbs && ((n = new i(t)).isActive && !0 === n.opts.autoStart && n.show())
        },
        "beforeShow.fb": function(e, t, n, i) {
            var o = t && t.Thumbs;
            o && o.isVisible && o.focus(i ? 0 : 250)
        },
        "afterKeydown.fb": function(e, t, n, i, o) {
            var s = t && t.Thumbs;
            s && s.isActive && 71 === o && (i.preventDefault(), s.toggle())
        },
        "beforeClose.fb": function(e, t) {
            var n = t && t.Thumbs;
            n && n.isVisible && !1 !== n.opts.hideOnClose && n.$grid.hide()
        }
    })
}(document, jQuery),
function(e, t) {
    "use strict";
    t.extend(!0, t.fancybox.defaults, {
        btnTpl: {
            share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'
        },
        share: {
            url: function(e, t) {
                return !e.currentHash && "inline" !== t.type && "html" !== t.type && (t.origSrc || t.src) || window.location
            },
            tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'
        }
    }), t(e).on("click", "[data-fancybox-share]", function() {
        var e, n, i = t.fancybox.getInstance(),
            o = i.current || null;
        o && ("function" === t.type(o.opts.share.url) && (e = o.opts.share.url.apply(o, [i, o])), n = o.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === o.type ? encodeURIComponent(o.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(e)).replace(/\{\{url_raw\}\}/g, function(e) {
            var t = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#x2F;",
                "`": "&#x60;",
                "=": "&#x3D;"
            };
            return String(e).replace(/[&<>"'`=\/]/g, function(e) {
                return t[e]
            })
        }(e)).replace(/\{\{descr\}\}/g, i.$caption ? encodeURIComponent(i.$caption.text()) : ""), t.fancybox.open({
            src: i.translate(i, n),
            type: "html",
            opts: {
                touch: !1,
                animationEffect: !1,
                afterLoad: function(e, t) {
                    i.$refs.container.one("beforeClose.fb", function() {
                        e.close(null, 0)
                    }), t.$content.find(".fancybox-share__button").click(function() {
                        return window.open(this.href, "Share", "width=550, height=450"), !1
                    })
                },
                mobile: {
                    autoFocus: !1
                }
            }
        }))
    })
}(document, jQuery),
function(e, t, n) {
    "use strict";

    function i() {
        var t = e.location.hash.substr(1),
            n = t.split("-"),
            i = n.length > 1 && /^\+?\d+$/.test(n[n.length - 1]) && parseInt(n.pop(-1), 10) || 1;
        return {
            hash: t,
            index: i < 1 ? 1 : i,
            gallery: n.join("-")
        }
    }

    function o(e) {
        "" !== e.gallery && n("[data-fancybox='" + n.escapeSelector(e.gallery) + "']").eq(e.index - 1).focus().trigger("click.fb-start")
    }

    function s(e) {
        var t, n;
        return !!e && ("" !== (n = (t = e.current ? e.current.opts : e.opts).hash || (t.$orig ? t.$orig.data("fancybox") || t.$orig.data("fancybox-trigger") : "")) && n)
    }
    n.escapeSelector || (n.escapeSelector = function(e) {
        return (e + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, function(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        })
    }), n(function() {
        !1 !== n.fancybox.defaults.hash && (n(t).on({
            "onInit.fb": function(e, t) {
                var n, o;
                !1 !== t.group[t.currIndex].opts.hash && (n = i(), (o = s(t)) && n.gallery && o == n.gallery && (t.currIndex = n.index - 1))
            },
            "beforeShow.fb": function(n, i, o, r) {
                var a;
                o && !1 !== o.opts.hash && (a = s(i)) && (i.currentHash = a + (i.group.length > 1 ? "-" + (o.index + 1) : ""), e.location.hash !== "#" + i.currentHash && (r && !i.origHash && (i.origHash = e.location.hash), i.hashTimer && clearTimeout(i.hashTimer), i.hashTimer = setTimeout(function() {
                    "replaceState" in e.history ? (e.history[r ? "pushState" : "replaceState"]({}, t.title, e.location.pathname + e.location.search + "#" + i.currentHash), r && (i.hasCreatedHistory = !0)) : e.location.hash = i.currentHash, i.hashTimer = null
                }, 300)))
            },
            "beforeClose.fb": function(n, i, o) {
                o && !1 !== o.opts.hash && (clearTimeout(i.hashTimer), i.currentHash && i.hasCreatedHistory ? e.history.back() : i.currentHash && ("replaceState" in e.history ? e.history.replaceState({}, t.title, e.location.pathname + e.location.search + (i.origHash || "")) : e.location.hash = i.origHash), i.currentHash = null)
            }
        }), n(e).on("hashchange.fb", function() {
            var e = i(),
                t = null;
            n.each(n(".fancybox-container").get().reverse(), function(e, i) {
                var o = n(i).data("FancyBox");
                if (o && o.currentHash) return t = o, !1
            }), t ? t.currentHash === e.gallery + "-" + e.index || 1 === e.index && t.currentHash == e.gallery || (t.currentHash = null, t.close()) : "" !== e.gallery && o(e)
        }), setTimeout(function() {
            n.fancybox.getInstance() || o(i())
        }, 50))
    })
}(window, document, jQuery),
function(e, t) {
    "use strict";
    var n = (new Date).getTime();
    t(e).on({
        "onInit.fb": function(e, t, i) {
            t.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function(e) {
                var i = t.current,
                    o = (new Date).getTime();
                t.group.length < 2 || !1 === i.opts.wheel || "auto" === i.opts.wheel && "image" !== i.type || (e.preventDefault(), e.stopPropagation(), i.$slide.hasClass("fancybox-animated") || (e = e.originalEvent || e, o - n < 250 || (n = o, t[(-e.deltaY || -e.deltaX || e.wheelDelta || -e.detail) < 0 ? "next" : "previous"]())))
            })
        }
    })
}(document, jQuery),
function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
    "use strict";
    var t = window.Slick || {};
    (t = function() {
        var t = 0;
        return function(n, i) {
            var o, s = this;
            s.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: e(n),
                appendDots: e(n),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(t, n) {
                    return e('<button type="button" />').text(n + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, s.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: !1,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                swiping: !1,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, e.extend(s, s.initials), s.activeBreakpoint = null, s.animType = null, s.animProp = null, s.breakpoints = [], s.breakpointSettings = [], s.cssTransitions = !1, s.focussed = !1, s.interrupted = !1, s.hidden = "hidden", s.paused = !0, s.positionProp = null, s.respondTo = null, s.rowCount = 1, s.shouldClick = !0, s.$slider = e(n), s.$slidesCache = null, s.transformType = null, s.transitionType = null, s.visibilityChange = "visibilitychange", s.windowWidth = 0, s.windowTimer = null, o = e(n).data("slick") || {}, s.options = e.extend({}, s.defaults, i, o), s.currentSlide = s.options.initialSlide, s.originalSettings = s.options, void 0 !== document.mozHidden ? (s.hidden = "mozHidden", s.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (s.hidden = "webkitHidden", s.visibilityChange = "webkitvisibilitychange"), s.autoPlay = e.proxy(s.autoPlay, s), s.autoPlayClear = e.proxy(s.autoPlayClear, s), s.autoPlayIterator = e.proxy(s.autoPlayIterator, s), s.changeSlide = e.proxy(s.changeSlide, s), s.clickHandler = e.proxy(s.clickHandler, s), s.selectHandler = e.proxy(s.selectHandler, s), s.setPosition = e.proxy(s.setPosition, s), s.swipeHandler = e.proxy(s.swipeHandler, s), s.dragHandler = e.proxy(s.dragHandler, s), s.keyHandler = e.proxy(s.keyHandler, s), s.instanceUid = t++, s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, s.registerBreakpoints(), s.init(!0)
        }
    }()).prototype.activateADA = function() {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }, t.prototype.addSlide = t.prototype.slickAdd = function(t, n, i) {
        var o = this;
        if ("boolean" == typeof n) i = n, n = null;
        else if (n < 0 || n >= o.slideCount) return !1;
        o.unload(), "number" == typeof n ? 0 === n && 0 === o.$slides.length ? e(t).appendTo(o.$slideTrack) : i ? e(t).insertBefore(o.$slides.eq(n)) : e(t).insertAfter(o.$slides.eq(n)) : !0 === i ? e(t).prependTo(o.$slideTrack) : e(t).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function(t, n) {
            e(n).attr("data-slick-index", t)
        }), o.$slidesCache = o.$slides, o.reinit()
    }, t.prototype.animateHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.animate({
                height: t
            }, e.options.speed)
        }
    }, t.prototype.animateSlide = function(t, n) {
        var i = {},
            o = this;
        o.animateHeight(), !0 === o.options.rtl && !1 === o.options.vertical && (t = -t), !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({
            left: t
        }, o.options.speed, o.options.easing, n) : o.$slideTrack.animate({
            top: t
        }, o.options.speed, o.options.easing, n) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft), e({
            animStart: o.currentLeft
        }).animate({
            animStart: t
        }, {
            duration: o.options.speed,
            easing: o.options.easing,
            step: function(e) {
                e = Math.ceil(e), !1 === o.options.vertical ? (i[o.animType] = "translate(" + e + "px, 0px)", o.$slideTrack.css(i)) : (i[o.animType] = "translate(0px," + e + "px)", o.$slideTrack.css(i))
            },
            complete: function() {
                n && n.call()
            }
        })) : (o.applyTransition(), t = Math.ceil(t), !1 === o.options.vertical ? i[o.animType] = "translate3d(" + t + "px, 0px, 0px)" : i[o.animType] = "translate3d(0px," + t + "px, 0px)", o.$slideTrack.css(i), n && setTimeout(function() {
            o.disableTransition(), n.call()
        }, o.options.speed))
    }, t.prototype.getNavTarget = function() {
        var t = this.options.asNavFor;
        return t && null !== t && (t = e(t).not(this.$slider)), t
    }, t.prototype.asNavFor = function(t) {
        var n = this.getNavTarget();
        null !== n && "object" == typeof n && n.each(function() {
            var n = e(this).slick("getSlick");
            n.unslicked || n.slideHandler(t, !0)
        })
    }, t.prototype.applyTransition = function(e) {
        var t = this,
            n = {};
        !1 === t.options.fade ? n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
    }, t.prototype.autoPlay = function() {
        var e = this;
        e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
    }, t.prototype.autoPlayClear = function() {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer)
    }, t.prototype.autoPlayIterator = function() {
        var e = this,
            t = e.currentSlide + e.options.slidesToScroll;
        e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
    }, t.prototype.buildArrows = function() {
        var t = this;
        !0 === t.options.arrows && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, t.prototype.buildDots = function() {
        var t, n, i = this;
        if (!0 === i.options.dots) {
            for (i.$slider.addClass("slick-dotted"), n = e("<ul />").addClass(i.options.dotsClass), t = 0; t <= i.getDotCount(); t += 1) n.append(e("<li />").append(i.options.customPaging.call(this, i, t)));
            i.$dots = n.appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active")
        }
    }, t.prototype.buildOut = function() {
        var t = this;
        t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function(t, n) {
            e(n).attr("data-slick-index", t).data("originalStyling", e(n).attr("style") || "")
        }), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), !0 !== t.options.centerMode && !0 !== t.options.swipeToSlide || (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable")
    }, t.prototype.buildRows = function() {
        var e, t, n, i, o, s, r, a = this;
        if (i = document.createDocumentFragment(), s = a.$slider.children(), a.options.rows > 1) {
            for (r = a.options.slidesPerRow * a.options.rows, o = Math.ceil(s.length / r), e = 0; e < o; e++) {
                var l = document.createElement("div");
                for (t = 0; t < a.options.rows; t++) {
                    var c = document.createElement("div");
                    for (n = 0; n < a.options.slidesPerRow; n++) {
                        var d = e * r + (t * a.options.slidesPerRow + n);
                        s.get(d) && c.appendChild(s.get(d))
                    }
                    l.appendChild(c)
                }
                i.appendChild(l)
            }
            a.$slider.empty().append(i), a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, t.prototype.checkResponsive = function(t, n) {
        var i, o, s, r = this,
            a = !1,
            l = r.$slider.width(),
            c = window.innerWidth || e(window).width();
        if ("window" === r.respondTo ? s = c : "slider" === r.respondTo ? s = l : "min" === r.respondTo && (s = Math.min(c, l)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            for (i in o = null, r.breakpoints) r.breakpoints.hasOwnProperty(i) && (!1 === r.originalSettings.mobileFirst ? s < r.breakpoints[i] && (o = r.breakpoints[i]) : s > r.breakpoints[i] && (o = r.breakpoints[i]));
            null !== o ? null !== r.activeBreakpoint ? (o !== r.activeBreakpoint || n) && (r.activeBreakpoint = o, "unslick" === r.breakpointSettings[o] ? r.unslick(o) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[o]), !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t)), a = o) : (r.activeBreakpoint = o, "unslick" === r.breakpointSettings[o] ? r.unslick(o) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[o]), !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t)), a = o) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t), a = o), t || !1 === a || r.$slider.trigger("breakpoint", [r, a])
        }
    }, t.prototype.changeSlide = function(t, n) {
        var i, o, s = this,
            r = e(t.currentTarget);
        switch (r.is("a") && t.preventDefault(), r.is("li") || (r = r.closest("li")), i = s.slideCount % s.options.slidesToScroll != 0 ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll, t.data.message) {
            case "previous":
                o = 0 === i ? s.options.slidesToScroll : s.options.slidesToShow - i, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - o, !1, n);
                break;
            case "next":
                o = 0 === i ? s.options.slidesToScroll : i, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + o, !1, n);
                break;
            case "index":
                var a = 0 === t.data.index ? 0 : t.data.index || r.index() * s.options.slidesToScroll;
                s.slideHandler(s.checkNavigable(a), !1, n), r.children().trigger("focus");
                break;
            default:
                return
        }
    }, t.prototype.checkNavigable = function(e) {
        var t, n;
        if (n = 0, e > (t = this.getNavigableIndexes())[t.length - 1]) e = t[t.length - 1];
        else
            for (var i in t) {
                if (e < t[i]) {
                    e = n;
                    break
                }
                n = t[i]
            }
        return e
    }, t.prototype.cleanUpEvents = function() {
        var t = this;
        t.options.dots && null !== t.$dots && (e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)), !0 === t.options.accessibility && t.$dots.off("keydown.slick", t.keyHandler)), t.$slider.off("focus.slick blur.slick"), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler), t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition)
    }, t.prototype.cleanUpSlideEvents = function() {
        var t = this;
        t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1))
    }, t.prototype.cleanUpRows = function() {
        var e, t = this;
        t.options.rows > 1 && ((e = t.$slides.children().children()).removeAttr("style"), t.$slider.empty().append(e))
    }, t.prototype.clickHandler = function(e) {
        !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
    }, t.prototype.destroy = function(t) {
        var n = this;
        n.autoPlayClear(), n.touchObject = {}, n.cleanUpEvents(), e(".slick-cloned", n.$slider).detach(), n.$dots && n.$dots.remove(), n.$prevArrow && n.$prevArrow.length && (n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()), n.$nextArrow && n.$nextArrow.length && (n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()), n.$slides && (n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            e(this).attr("style", e(this).data("originalStyling"))
        }), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.detach(), n.$list.detach(), n.$slider.append(n.$slides)), n.cleanUpRows(), n.$slider.removeClass("slick-slider"), n.$slider.removeClass("slick-initialized"), n.$slider.removeClass("slick-dotted"), n.unslicked = !0, t || n.$slider.trigger("destroy", [n])
    }, t.prototype.disableTransition = function(e) {
        var t = this,
            n = {};
        n[t.transitionType] = "", !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
    }, t.prototype.fadeSlide = function(e, t) {
        var n = this;
        !1 === n.cssTransitions ? (n.$slides.eq(e).css({
            zIndex: n.options.zIndex
        }), n.$slides.eq(e).animate({
            opacity: 1
        }, n.options.speed, n.options.easing, t)) : (n.applyTransition(e), n.$slides.eq(e).css({
            opacity: 1,
            zIndex: n.options.zIndex
        }), t && setTimeout(function() {
            n.disableTransition(e), t.call()
        }, n.options.speed))
    }, t.prototype.fadeSlideOut = function(e) {
        var t = this;
        !1 === t.cssTransitions ? t.$slides.eq(e).animate({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }))
    }, t.prototype.filterSlides = t.prototype.slickFilter = function(e) {
        var t = this;
        null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
    }, t.prototype.focusHandler = function() {
        var t = this;
        t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(n) {
            n.stopImmediatePropagation();
            var i = e(this);
            setTimeout(function() {
                t.options.pauseOnFocus && (t.focussed = i.is(":focus"), t.autoPlay())
            }, 0)
        })
    }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
        return this.currentSlide
    }, t.prototype.getDotCount = function() {
        var e = this,
            t = 0,
            n = 0,
            i = 0;
        if (!0 === e.options.infinite)
            if (e.slideCount <= e.options.slidesToShow) ++i;
            else
                for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else if (!0 === e.options.centerMode) i = e.slideCount;
        else if (e.options.asNavFor)
            for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else i = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
        return i - 1
    }, t.prototype.getLeft = function(e) {
        var t, n, i, o, s = this,
            r = 0;
        return s.slideOffset = 0, n = s.$slides.first().outerHeight(!0), !0 === s.options.infinite ? (s.slideCount > s.options.slidesToShow && (s.slideOffset = s.slideWidth * s.options.slidesToShow * -1, o = -1, !0 === s.options.vertical && !0 === s.options.centerMode && (2 === s.options.slidesToShow ? o = -1.5 : 1 === s.options.slidesToShow && (o = -2)), r = n * s.options.slidesToShow * o), s.slideCount % s.options.slidesToScroll != 0 && e + s.options.slidesToScroll > s.slideCount && s.slideCount > s.options.slidesToShow && (e > s.slideCount ? (s.slideOffset = (s.options.slidesToShow - (e - s.slideCount)) * s.slideWidth * -1, r = (s.options.slidesToShow - (e - s.slideCount)) * n * -1) : (s.slideOffset = s.slideCount % s.options.slidesToScroll * s.slideWidth * -1, r = s.slideCount % s.options.slidesToScroll * n * -1))) : e + s.options.slidesToShow > s.slideCount && (s.slideOffset = (e + s.options.slidesToShow - s.slideCount) * s.slideWidth, r = (e + s.options.slidesToShow - s.slideCount) * n), s.slideCount <= s.options.slidesToShow && (s.slideOffset = 0, r = 0), !0 === s.options.centerMode && s.slideCount <= s.options.slidesToShow ? s.slideOffset = s.slideWidth * Math.floor(s.options.slidesToShow) / 2 - s.slideWidth * s.slideCount / 2 : !0 === s.options.centerMode && !0 === s.options.infinite ? s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2) - s.slideWidth : !0 === s.options.centerMode && (s.slideOffset = 0, s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2)), t = !1 === s.options.vertical ? e * s.slideWidth * -1 + s.slideOffset : e * n * -1 + r, !0 === s.options.variableWidth && (i = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(e) : s.$slideTrack.children(".slick-slide").eq(e + s.options.slidesToShow), t = !0 === s.options.rtl ? i[0] ? -1 * (s.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, !0 === s.options.centerMode && (i = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(e) : s.$slideTrack.children(".slick-slide").eq(e + s.options.slidesToShow + 1), t = !0 === s.options.rtl ? i[0] ? -1 * (s.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, t += (s.$list.width() - i.outerWidth()) / 2)), t
    }, t.prototype.getOption = t.prototype.slickGetOption = function(e) {
        return this.options[e]
    }, t.prototype.getNavigableIndexes = function() {
        var e, t = this,
            n = 0,
            i = 0,
            o = [];
        for (!1 === t.options.infinite ? e = t.slideCount : (n = -1 * t.options.slidesToScroll, i = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); n < e;) o.push(n), n = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        return o
    }, t.prototype.getSlick = function() {
        return this
    }, t.prototype.getSlideCount = function() {
        var t, n, i = this;
        return n = !0 === i.options.centerMode ? i.slideWidth * Math.floor(i.options.slidesToShow / 2) : 0, !0 === i.options.swipeToSlide ? (i.$slideTrack.find(".slick-slide").each(function(o, s) {
            if (s.offsetLeft - n + e(s).outerWidth() / 2 > -1 * i.swipeLeft) return t = s, !1
        }), Math.abs(e(t).attr("data-slick-index") - i.currentSlide) || 1) : i.options.slidesToScroll
    }, t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(e)
            }
        }, t)
    }, t.prototype.init = function(t) {
        var n = this;
        e(n.$slider).hasClass("slick-initialized") || (e(n.$slider).addClass("slick-initialized"), n.buildRows(), n.buildOut(), n.setProps(), n.startLoad(), n.loadSlider(), n.initializeEvents(), n.updateArrows(), n.updateDots(), n.checkResponsive(!0), n.focusHandler()), t && n.$slider.trigger("init", [n]), !0 === n.options.accessibility && n.initADA(), n.options.autoplay && (n.paused = !1, n.autoPlay())
    }, t.prototype.initADA = function() {
        var t = this,
            n = Math.ceil(t.slideCount / t.options.slidesToShow),
            i = t.getNavigableIndexes().filter(function(e) {
                return e >= 0 && e < t.slideCount
            });
        t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), null !== t.$dots && (t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(n) {
            var o = i.indexOf(n);
            e(this).attr({
                role: "tabpanel",
                id: "slick-slide" + t.instanceUid + n,
                tabindex: -1
            }), -1 !== o && e(this).attr({
                "aria-describedby": "slick-slide-control" + t.instanceUid + o
            })
        }), t.$dots.attr("role", "tablist").find("li").each(function(o) {
            var s = i[o];
            e(this).attr({
                role: "presentation"
            }), e(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + t.instanceUid + o,
                "aria-controls": "slick-slide" + t.instanceUid + s,
                "aria-label": o + 1 + " of " + n,
                "aria-selected": null,
                tabindex: "-1"
            })
        }).eq(t.currentSlide).find("button").attr({
            "aria-selected": "true",
            tabindex: "0"
        }).end());
        for (var o = t.currentSlide, s = o + t.options.slidesToShow; o < s; o++) t.$slides.eq(o).attr("tabindex", 0);
        t.activateADA()
    }, t.prototype.initArrowEvents = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)))
    }, t.prototype.initDotEvents = function() {
        var t = this;
        !0 === t.options.dots && (e("li", t.$dots).on("click.slick", {
            message: "index"
        }, t.changeSlide), !0 === t.options.accessibility && t.$dots.on("keydown.slick", t.keyHandler)), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1))
    }, t.prototype.initSlideEvents = function() {
        var t = this;
        t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)))
    }, t.prototype.initializeEvents = function() {
        var t = this;
        t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(t.setPosition)
    }, t.prototype.initUI = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
    }, t.prototype.keyHandler = function(e) {
        var t = this;
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
            data: {
                message: !0 === t.options.rtl ? "next" : "previous"
            }
        }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
            data: {
                message: !0 === t.options.rtl ? "previous" : "next"
            }
        }))
    }, t.prototype.lazyLoad = function() {
        function t(t) {
            e("img[data-lazy]", t).each(function() {
                var t = e(this),
                    n = e(this).attr("data-lazy"),
                    i = e(this).attr("data-srcset"),
                    o = e(this).attr("data-sizes") || s.$slider.attr("data-sizes"),
                    r = document.createElement("img");
                r.onload = function() {
                    t.animate({
                        opacity: 0
                    }, 100, function() {
                        i && (t.attr("srcset", i), o && t.attr("sizes", o)), t.attr("src", n).animate({
                            opacity: 1
                        }, 200, function() {
                            t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        }), s.$slider.trigger("lazyLoaded", [s, t, n])
                    })
                }, r.onerror = function() {
                    t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, t, n])
                }, r.src = n
            })
        }
        var n, i, o, s = this;
        if (!0 === s.options.centerMode ? !0 === s.options.infinite ? o = (i = s.currentSlide + (s.options.slidesToShow / 2 + 1)) + s.options.slidesToShow + 2 : (i = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1)), o = s.options.slidesToShow / 2 + 1 + 2 + s.currentSlide) : (i = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide, o = Math.ceil(i + s.options.slidesToShow), !0 === s.options.fade && (i > 0 && i--, o <= s.slideCount && o++)), n = s.$slider.find(".slick-slide").slice(i, o), "anticipated" === s.options.lazyLoad)
            for (var r = i - 1, a = o, l = s.$slider.find(".slick-slide"), c = 0; c < s.options.slidesToScroll; c++) r < 0 && (r = s.slideCount - 1), n = (n = n.add(l.eq(r))).add(l.eq(a)), r--, a++;
        t(n), s.slideCount <= s.options.slidesToShow ? t(s.$slider.find(".slick-slide")) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? t(s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow)) : 0 === s.currentSlide && t(s.$slider.find(".slick-cloned").slice(-1 * s.options.slidesToShow))
    }, t.prototype.loadSlider = function() {
        var e = this;
        e.setPosition(), e.$slideTrack.css({
            opacity: 1
        }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
    }, t.prototype.next = t.prototype.slickNext = function() {
        this.changeSlide({
            data: {
                message: "next"
            }
        })
    }, t.prototype.orientationChange = function() {
        this.checkResponsive(), this.setPosition()
    }, t.prototype.pause = t.prototype.slickPause = function() {
        this.autoPlayClear(), this.paused = !0
    }, t.prototype.play = t.prototype.slickPlay = function() {
        var e = this;
        e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
    }, t.prototype.postSlide = function(t) {
        var n = this;
        n.unslicked || (n.$slider.trigger("afterChange", [n, t]), n.animating = !1, n.slideCount > n.options.slidesToShow && n.setPosition(), n.swipeLeft = null, n.options.autoplay && n.autoPlay(), !0 === n.options.accessibility && (n.initADA(), n.options.focusOnChange && e(n.$slides.get(n.currentSlide)).attr("tabindex", 0).focus()))
    }, t.prototype.prev = t.prototype.slickPrev = function() {
        this.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, t.prototype.preventDefault = function(e) {
        e.preventDefault()
    }, t.prototype.progressiveLazyLoad = function(t) {
        t = t || 1;
        var n, i, o, s, r, a = this,
            l = e("img[data-lazy]", a.$slider);
        l.length ? (n = l.first(), i = n.attr("data-lazy"), o = n.attr("data-srcset"), s = n.attr("data-sizes") || a.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function() {
            o && (n.attr("srcset", o), s && n.attr("sizes", s)), n.attr("src", i).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === a.options.adaptiveHeight && a.setPosition(), a.$slider.trigger("lazyLoaded", [a, n, i]), a.progressiveLazyLoad()
        }, r.onerror = function() {
            t < 3 ? setTimeout(function() {
                a.progressiveLazyLoad(t + 1)
            }, 500) : (n.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, n, i]), a.progressiveLazyLoad())
        }, r.src = i) : a.$slider.trigger("allImagesLoaded", [a])
    }, t.prototype.refresh = function(t) {
        var n, i, o = this;
        i = o.slideCount - o.options.slidesToShow, !o.options.infinite && o.currentSlide > i && (o.currentSlide = i), o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), n = o.currentSlide, o.destroy(!0), e.extend(o, o.initials, {
            currentSlide: n
        }), o.init(), t || o.changeSlide({
            data: {
                message: "index",
                index: n
            }
        }, !1)
    }, t.prototype.registerBreakpoints = function() {
        var t, n, i, o = this,
            s = o.options.responsive || null;
        if ("array" === e.type(s) && s.length) {
            for (t in o.respondTo = o.options.respondTo || "window", s)
                if (i = o.breakpoints.length - 1, s.hasOwnProperty(t)) {
                    for (n = s[t].breakpoint; i >= 0;) o.breakpoints[i] && o.breakpoints[i] === n && o.breakpoints.splice(i, 1), i--;
                    o.breakpoints.push(n), o.breakpointSettings[n] = s[t].settings
                } o.breakpoints.sort(function(e, t) {
                return o.options.mobileFirst ? e - t : t - e
            })
        }
    }, t.prototype.reinit = function() {
        var t = this;
        t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t])
    }, t.prototype.resize = function() {
        var t = this;
        e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() {
            t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
        }, 50))
    }, t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, n) {
        var i = this;
        if (e = "boolean" == typeof e ? !0 === (t = e) ? 0 : i.slideCount - 1 : !0 === t ? --e : e, i.slideCount < 1 || e < 0 || e > i.slideCount - 1) return !1;
        i.unload(), !0 === n ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(e).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, i.reinit()
    }, t.prototype.setCSS = function(e) {
        var t, n, i = this,
            o = {};
        !0 === i.options.rtl && (e = -e), t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px", n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px", o[i.positionProp] = e, !1 === i.transformsEnabled ? i.$slideTrack.css(o) : (o = {}, !1 === i.cssTransitions ? (o[i.animType] = "translate(" + t + ", " + n + ")", i.$slideTrack.css(o)) : (o[i.animType] = "translate3d(" + t + ", " + n + ", 0px)", i.$slideTrack.css(o)))
    }, t.prototype.setDimensions = function() {
        var e = this;
        !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
            padding: "0px " + e.options.centerPadding
        }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
            padding: e.options.centerPadding + " 0px"
        })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
    }, t.prototype.setFade = function() {
        var t, n = this;
        n.$slides.each(function(i, o) {
            t = n.slideWidth * i * -1, !0 === n.options.rtl ? e(o).css({
                position: "relative",
                right: t,
                top: 0,
                zIndex: n.options.zIndex - 2,
                opacity: 0
            }) : e(o).css({
                position: "relative",
                left: t,
                top: 0,
                zIndex: n.options.zIndex - 2,
                opacity: 0
            })
        }), n.$slides.eq(n.currentSlide).css({
            zIndex: n.options.zIndex - 1,
            opacity: 1
        })
    }, t.prototype.setHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.css("height", t)
        }
    }, t.prototype.setOption = t.prototype.slickSetOption = function() {
        var t, n, i, o, s, r = this,
            a = !1;
        if ("object" === e.type(arguments[0]) ? (i = arguments[0], a = arguments[1], s = "multiple") : "string" === e.type(arguments[0]) && (i = arguments[0], o = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? s = "responsive" : void 0 !== arguments[1] && (s = "single")), "single" === s) r.options[i] = o;
        else if ("multiple" === s) e.each(i, function(e, t) {
            r.options[e] = t
        });
        else if ("responsive" === s)
            for (n in o)
                if ("array" !== e.type(r.options.responsive)) r.options.responsive = [o[n]];
                else {
                    for (t = r.options.responsive.length - 1; t >= 0;) r.options.responsive[t].breakpoint === o[n].breakpoint && r.options.responsive.splice(t, 1), t--;
                    r.options.responsive.push(o[n])
                } a && (r.unload(), r.reinit())
    }, t.prototype.setPosition = function() {
        var e = this;
        e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
    }, t.prototype.setProps = function() {
        var e = this,
            t = document.body.style;
        e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
    }, t.prototype.setSlideClasses = function(e) {
        var t, n, i, o, s = this;
        if (n = s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), s.$slides.eq(e).addClass("slick-current"), !0 === s.options.centerMode) {
            var r = s.options.slidesToShow % 2 == 0 ? 1 : 0;
            t = Math.floor(s.options.slidesToShow / 2), !0 === s.options.infinite && (e >= t && e <= s.slideCount - 1 - t ? s.$slides.slice(e - t + r, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (i = s.options.slidesToShow + e, n.slice(i - t + 1 + r, i + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? n.eq(n.length - 1 - s.options.slidesToShow).addClass("slick-center") : e === s.slideCount - 1 && n.eq(s.options.slidesToShow).addClass("slick-center")), s.$slides.eq(e).addClass("slick-center")
        } else e >= 0 && e <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(e, e + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= s.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (o = s.slideCount % s.options.slidesToShow, i = !0 === s.options.infinite ? s.options.slidesToShow + e : e, s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - e < s.options.slidesToShow ? n.slice(i - (s.options.slidesToShow - o), i + o).addClass("slick-active").attr("aria-hidden", "false") : n.slice(i, i + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== s.options.lazyLoad && "anticipated" !== s.options.lazyLoad || s.lazyLoad()
    }, t.prototype.setupInfinite = function() {
        var t, n, i, o = this;
        if (!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && (n = null, o.slideCount > o.options.slidesToShow)) {
            for (i = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, t = o.slideCount; t > o.slideCount - i; t -= 1) n = t - 1, e(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
            for (t = 0; t < i + o.slideCount; t += 1) n = t, e(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
            o.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                e(this).attr("id", "")
            })
        }
    }, t.prototype.interrupt = function(e) {
        e || this.autoPlay(), this.interrupted = e
    }, t.prototype.selectHandler = function(t) {
        var n = this,
            i = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
            o = parseInt(i.attr("data-slick-index"));
        o || (o = 0), n.slideCount <= n.options.slidesToShow ? n.slideHandler(o, !1, !0) : n.slideHandler(o)
    }, t.prototype.slideHandler = function(e, t, n) {
        var i, o, s, r, a, l = null,
            c = this;
        if (t = t || !1, !(!0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === e))
            if (!1 === t && c.asNavFor(e), i = e, l = c.getLeft(i), r = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? r : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (e < 0 || e > c.getDotCount() * c.options.slidesToScroll)) !1 === c.options.fade && (i = c.currentSlide, !0 !== n ? c.animateSlide(r, function() {
                c.postSlide(i)
            }) : c.postSlide(i));
            else if (!1 === c.options.infinite && !0 === c.options.centerMode && (e < 0 || e > c.slideCount - c.options.slidesToScroll)) !1 === c.options.fade && (i = c.currentSlide, !0 !== n ? c.animateSlide(r, function() {
            c.postSlide(i)
        }) : c.postSlide(i));
        else {
            if (c.options.autoplay && clearInterval(c.autoPlayTimer), o = i < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + i : i >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : i - c.slideCount : i, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, o]), s = c.currentSlide, c.currentSlide = o, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (a = (a = c.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide), c.updateDots(), c.updateArrows(), !0 === c.options.fade) return !0 !== n ? (c.fadeSlideOut(s), c.fadeSlide(o, function() {
                c.postSlide(o)
            })) : c.postSlide(o), void c.animateHeight();
            !0 !== n ? c.animateSlide(l, function() {
                c.postSlide(o)
            }) : c.postSlide(o)
        }
    }, t.prototype.startLoad = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
    }, t.prototype.swipeDirection = function() {
        var e, t, n, i, o = this;
        return e = o.touchObject.startX - o.touchObject.curX, t = o.touchObject.startY - o.touchObject.curY, n = Math.atan2(t, e), (i = Math.round(180 * n / Math.PI)) < 0 && (i = 360 - Math.abs(i)), i <= 45 && i >= 0 ? !1 === o.options.rtl ? "left" : "right" : i <= 360 && i >= 315 ? !1 === o.options.rtl ? "left" : "right" : i >= 135 && i <= 225 ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? i >= 35 && i <= 135 ? "down" : "up" : "vertical"
    }, t.prototype.swipeEnd = function(e) {
        var t, n, i = this;
        if (i.dragging = !1, i.swiping = !1, i.scrolling) return i.scrolling = !1, !1;
        if (i.interrupted = !1, i.shouldClick = !(i.touchObject.swipeLength > 10), void 0 === i.touchObject.curX) return !1;
        if (!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) {
            switch (n = i.swipeDirection()) {
                case "left":
                case "down":
                    t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), i.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), i.currentDirection = 1
            }
            "vertical" != n && (i.slideHandler(t), i.touchObject = {}, i.$slider.trigger("swipe", [i, n]))
        } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {})
    }, t.prototype.swipeHandler = function(e) {
        var t = this;
        if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
            case "start":
                t.swipeStart(e);
                break;
            case "move":
                t.swipeMove(e);
                break;
            case "end":
                t.swipeEnd(e)
        }
    }, t.prototype.swipeMove = function(e) {
        var t, n, i, o, s, r, a = this;
        return s = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!a.dragging || a.scrolling || s && 1 !== s.length) && (t = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== s ? s[0].pageX : e.clientX, a.touchObject.curY = void 0 !== s ? s[0].pageY : e.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && r > 4 ? (a.scrolling = !0, !1) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = r), n = a.swipeDirection(), void 0 !== e.originalEvent && a.touchObject.swipeLength > 4 && (a.swiping = !0, e.preventDefault()), o = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1), i = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, !1 === a.options.infinite && (0 === a.currentSlide && "right" === n || a.currentSlide >= a.getDotCount() && "left" === n) && (i = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = t + i * o : a.swipeLeft = t + i * (a.$list.height() / a.listWidth) * o, !0 === a.options.verticalSwiping && (a.swipeLeft = t + i * o), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))))
    }, t.prototype.swipeStart = function(e) {
        var t, n = this;
        if (n.interrupted = !0, 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow) return n.touchObject = {}, !1;
        void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, n.dragging = !0
    }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
        var e = this;
        null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
    }, t.prototype.unload = function() {
        var t = this;
        e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, t.prototype.unslick = function(e) {
        var t = this;
        t.$slider.trigger("unslick", [t, e]), t.destroy()
    }, t.prototype.updateArrows = function() {
        var e = this;
        Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, t.prototype.updateDots = function() {
        var e = this;
        null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
    }, t.prototype.visibility = function() {
        var e = this;
        e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1)
    }, e.fn.slick = function() {
        var e, n, i = this,
            o = arguments[0],
            s = Array.prototype.slice.call(arguments, 1),
            r = i.length;
        for (e = 0; e < r; e++)
            if ("object" == typeof o || void 0 === o ? i[e].slick = new t(i[e], o) : n = i[e].slick[o].apply(i[e].slick, s), void 0 !== n) return n;
        return i
    }
}),
function(e) {
    function t() {
        var t = this,
            n = e(this).data("mousestop");
        this.movement = !0, n.timeToStop && (this.timeToStopTimer = window.setTimeout(function() {
            t.movement = !1, window.clearTimeout(t.timer)
        }, n.timeToStop))
    }

    function n() {
        window.clearTimeout(this.timer), window.clearTimeout(this.timeToStopTimer)
    }

    function i() {
        var t = e(this),
            n = t.data("mousestop");
        this.movement && (window.clearTimeout(this.timer), this.timer = window.setTimeout(function() {
            t.trigger("mousestop")
        }, n.delay))
    }
    e.event.special.mousestop = {
        setup: function(o) {
            e(this).data("mousestop", function(t) {
                return e.isNumeric(t) ? t = {
                    delay: t
                } : "object" != typeof t && (t = {}), e.extend({}, e.fn.mousestop.defaults, t)
            }(o)).bind("mouseenter.mousestop", t).bind("mouseleave.mousestop", n).bind("mousemove.mousestop", i)
        },
        teardown: function() {
            e(this).removeData("mousestop").unbind(".mousestop")
        }
    }, e.fn.mousestop = function(e, t) {
        return "function" == typeof e && (t = e), arguments.length > 0 ? this.bind("mousestop", e, t) : this.trigger("mousestop")
    }, e.fn.mousestop.defaults = {
        delay: 300,
        timeToStop: null
    }
}(jQuery),
function(e, t) {
    "use strict";

    function n(n, i, s, a, l) {
        function c() {
            T = e.devicePixelRatio > 1, s = d(s), i.delay >= 0 && setTimeout(function() {
                u(!0)
            }, i.delay), (i.delay < 0 || i.combined) && (a.e = function(e, t) {
                var o, s = 0;
                return function(r, a) {
                    function l() {
                        s = +new Date, t.call(n, r)
                    }
                    var c = +new Date - s;
                    o && clearTimeout(o), c > e || !i.enableThrottle || a ? l() : o = setTimeout(l, e - c)
                }
            }(i.throttle, function(e) {
                "resize" === e.type && (w = $ = -1), u(e.all)
            }), a.a = function(e) {
                e = d(e), s.push.apply(s, e)
            }, a.g = function() {
                return s = o(s).filter(function() {
                    return !o(this).data(i.loadedName)
                })
            }, a.f = function(e) {
                for (var t = 0; t < e.length; t++) {
                    var n = s.filter(function() {
                        return this === e[t]
                    });
                    n.length && u(!1, n)
                }
            }, u(), o(i.appendScroll).on("scroll." + l + " resize." + l, a.e))
        }

        function d(e) {
            for (var s = i.defaultImage, r = i.placeholder, a = i.imageBase, l = i.srcsetAttribute, c = i.loaderAttribute, d = i._f || {}, u = 0, p = (e = o(e).filter(function() {
                    var e = o(this),
                        n = v(this);
                    return !e.data(i.handledName) && (e.attr(i.attribute) || e.attr(l) || e.attr(c) || d[n] !== t)
                }).data("plugin_" + i.name, n)).length; u < p; u++) {
                var f = o(e[u]),
                    h = v(e[u]),
                    g = f.attr(i.imageBaseAttribute) || a;
                h === A && g && f.attr(l) && f.attr(l, m(f.attr(l), g)), d[h] === t || f.attr(c) || f.attr(c, d[h]), h === A && s && !f.attr(E) ? f.attr(E, s) : h === A || !r || f.css(N) && "none" !== f.css(N) || f.css(N, "url('" + r + "')")
            }
            return e
        }

        function u(e, t) {
            if (s.length) {
                for (var r = t || s, a = !1, l = i.imageBase || "", c = i.srcsetAttribute, d = i.handledName, u = 0; u < r.length; u++)
                    if (e || t || f(r[u])) {
                        var h = o(r[u]),
                            g = v(r[u]),
                            m = h.attr(i.attribute),
                            y = h.attr(i.imageBaseAttribute) || l,
                            b = h.attr(i.loaderAttribute);
                        h.data(d) || i.visibleOnly && !h.is(":visible") || !((m || h.attr(c)) && (g === A && (y + m !== h.attr(E) || h.attr(c) !== h.attr(P)) || g !== A && y + m !== h.css(N)) || b) || (a = !0, h.data(d, !0), p(h, g, y, b))
                    } a && (s = o(s).filter(function() {
                    return !o(this).data(d)
                }))
            } else i.autoDestroy && n.destroy()
        }

        function p(e, t, n, s) {
            ++x;
            var r = function() {
                b("onError", e), y(), r = o.noop
            };
            b("beforeLoad", e);
            var a = i.attribute,
                l = i.srcsetAttribute,
                c = i.sizesAttribute,
                d = i.retinaAttribute,
                u = i.removeAttribute,
                p = i.loadedName,
                f = e.attr(d);
            if (s) {
                var h = function() {
                    u && e.removeAttr(i.loaderAttribute), e.data(p, !0), b(k, e), setTimeout(y, 1), h = o.noop
                };
                e.off(C).one(C, r).one(S, h), b(s, e, function(t) {
                    t ? (e.off(S), h()) : (e.off(C), r())
                }) || e.trigger(C)
            } else {
                var g = o(new Image);
                g.one(C, r).one(S, function() {
                    e.hide(), t === A ? e.attr(L, g.attr(L)).attr(P, g.attr(P)).attr(E, g.attr(E)) : e.css(N, "url('" + g.attr(E) + "')"), e[i.effect](i.effectTime), u && (e.removeAttr(a + " " + l + " " + d + " " + i.imageBaseAttribute), c !== L && e.removeAttr(c)), e.data(p, !0), b(k, e), g.remove(), y()
                });
                var v = (T && f ? f : e.attr(a)) || "";
                g.attr(L, e.attr(c)).attr(P, e.attr(l)).attr(E, v ? n + v : null), g.complete && g.trigger(S)
            }
        }

        function f(e) {
            var t = e.getBoundingClientRect(),
                n = i.scrollDirection,
                o = i.threshold,
                s = g() + o > t.top && -o < t.bottom,
                r = h() + o > t.left && -o < t.right;
            return "vertical" === n ? s : "horizontal" === n ? r : s && r
        }

        function h() {
            return w >= 0 ? w : w = o(e).width()
        }

        function g() {
            return $ >= 0 ? $ : $ = o(e).height()
        }

        function v(e) {
            return e.tagName.toLowerCase()
        }

        function m(e, t) {
            if (t) {
                var n = e.split(",");
                e = "";
                for (var i = 0, o = n.length; i < o; i++) e += t + n[i].trim() + (i !== o - 1 ? "," : "")
            }
            return e
        }

        function y() {
            --x, s.length || x || b("onFinishedAll")
        }

        function b(e, t, o) {
            return !!(e = i[e]) && (e.apply(n, [].slice.call(arguments, 1)), !0)
        }
        var x = 0,
            w = -1,
            $ = -1,
            T = !1,
            k = "afterLoad",
            S = "load",
            C = "error",
            A = "img",
            E = "src",
            P = "srcset",
            L = "sizes",
            N = "background-image";
        "event" === i.bind || r ? c() : o(e).on(S + "." + l, c)
    }

    function i(i, r) {
        var a = this,
            l = o.extend({}, a.config, r),
            c = {},
            d = l.name + "-" + ++s;
        return a.config = function(e, n) {
            return n === t ? l[e] : (l[e] = n, a)
        }, a.addItems = function(e) {
            return c.a && c.a("string" === o.type(e) ? o(e) : e), a
        }, a.getItems = function() {
            return c.g ? c.g() : {}
        }, a.update = function(e) {
            return c.e && c.e({}, !e), a
        }, a.force = function(e) {
            return c.f && c.f("string" === o.type(e) ? o(e) : e), a
        }, a.loadAll = function() {
            return c.e && c.e({
                all: !0
            }, !0), a
        }, a.destroy = function() {
            return o(l.appendScroll).off("." + d, c.e), o(e).off("." + d), c = {}, t
        }, n(a, l, i, c, d), l.chainable ? i : a
    }
    var o = e.jQuery || e.Zepto,
        s = 0,
        r = !1;
    o.fn.Lazy = o.fn.lazy = function(e) {
        return new i(this, e)
    }, o.Lazy = o.lazy = function(e, n, s) {
        if (o.isFunction(n) && (s = n, n = []), o.isFunction(s)) {
            e = o.isArray(e) ? e : [e], n = o.isArray(n) ? n : [n];
            for (var r = i.prototype.config, a = r._f || (r._f = {}), l = 0, c = e.length; l < c; l++)(r[e[l]] === t || o.isFunction(r[e[l]])) && (r[e[l]] = s);
            for (var d = 0, u = n.length; d < u; d++) a[n[d]] = e[0]
        }
    }, i.prototype.config = {
        name: "lazy",
        chainable: !0,
        autoDestroy: !0,
        bind: "load",
        threshold: 500,
        visibleOnly: !1,
        appendScroll: e,
        scrollDirection: "both",
        imageBase: null,
        defaultImage: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
        placeholder: null,
        delay: -1,
        combined: !1,
        attribute: "data-src",
        srcsetAttribute: "data-srcset",
        sizesAttribute: "data-sizes",
        retinaAttribute: "data-retina",
        loaderAttribute: "data-loader",
        imageBaseAttribute: "data-imagebase",
        removeAttribute: !0,
        handledName: "handled",
        loadedName: "loaded",
        effect: "show",
        effectTime: 0,
        enableThrottle: !0,
        throttle: 250,
        beforeLoad: t,
        afterLoad: t,
        onError: t,
        onFinishedAll: t
    }, o(e).on("load", function() {
        r = !0
    })
}(window), $(function() {
        $(".lazy").lazy(), $('[data-fancybox="image"]').fancybox({
            buttons: ["close"],
            baseClass: "onlyImage"
        })
    }), $(window).load(function() {
        if ($(window).width() > 1024) {
            var e = -1;
            $(".Our-Hotel-Locations-cntr .col-8").each(function(t) {
                $(this).outerHeight() > e && (e = $(this).outerHeight())
            }), $(".Our-Hotel-Locations-cntr .col-4").css("height", e)
        }
        setTimeout(function() {
            $(".bigSlider div img").css("display", "block")
        }, 1e3)
    }), $(document).ready(function() {
        $(".bigSlider").on("init", function(e, t, n) {
            $(window).width() < 1024 && setTimeout(function() {}, 4e3)
        }).slick({
            lazyLoad: "ondemand",
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: !0,
            fade: !0,
            dots: !1,
            asNavFor: ".thumbnailSlider",
            infinite: !1,
            speed: 1e3,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    fade: !1
                }
            }]
        }), $(".thumbnailSlider").slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            asNavFor: ".bigSlider",
            dots: !1,
            arrows: !1,
            focusOnSelect: !0,
            infinite: !1
        }), $(".smallImageSlider .slick-track img").on("mousestop", function() {
            var e = $(this),
                t = parseInt($(this).parent("div").attr("data-slick-index")),
                n = parseInt($(".slick-track > div").last().attr("data-slick-index"));
            localStorage.setItem("index", t);
            for (var i = 0; i < t; i++) $(".bigSlider div[data-slick-index='" + i + "']").attr({
                "aria-hidden": "true",
                tabindex: "-1",
                class: "slick-slide"
            }), $(".bigSlider div[data-slick-index='" + i + "']").css({
                transition: "opacity 1000ms ease 0s",
                opacity: "0",
                "z-index": "998"
            });
            for (var o = t; o <= n; o++) $(".bigSlider div[data-slick-index='" + o + "']").attr({
                "aria-hidden": "true",
                tabindex: "-1",
                class: "slick-slide"
            }), $(".bigSlider div[data-slick-index='" + o + "']").css({
                transition: "opacity 1000ms ease 0s",
                opacity: "0",
                "z-index": "998"
            });
            for ($(".bigSlider div[data-slick-index='" + t + "']").attr({
                    "aria-hidden": "false",
                    tabindex: "-1",
                    class: "slick-slide slick-current slick-active"
                }), $(".bigSlider div[data-slick-index='" + t + "']").css({
                    opacity: "1",
                    "z-index": "999"
                }), $(".smallImageSlider .slick-track").css("transform", "translate3d(-" + 101 * t + "px, 0px, 0px)"), i = 0; i < t; i++) $(".smallImageSlider .slick-track div[data-slick-index='" + i + "']").attr({
                "aria-hidden": "true"
            });
            $(".smallImageSlider .slick-track img").parent("div").removeClass("slick-current"), e.parent("div").addClass("slick-current"), $(".bigSlider div[data-slick-index='" + t + "'] > img").attr("src", e.parent("div").attr("href"))
        }), 
		$(window).width() > 1024 && (
			setInterval(function() {
				$(".fancybox-button, .fancybox-toolbar").on("click", function() {
					$("html,body").css("overflow", "visible")
				})
				}, 100), 
				$(".thumbnailSlider .slick-slide").on("click", function() {
					$("html,body").css("overflow", "hidden")
				})
			),
		 $(window).width() > 1024 && $(".reviews-slider").slick({
            infinite: !0,
            arrows: !0,
            dots: !1,
            slidesToShow: 4,
            slidesToScroll: 1,
            speed: 300,
            responsive: [{
                breakpoint: 1600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    arrows: !0,
                    dots: !1
                }
            }, {
                breakpoint: 1366,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: !0,
                    dots: !0
                }
            }]
        })
		
		$(window).width() > 1024 && $(".homeslider").slick({
            infinite: false,
            arrows: !0,
            dots: !1,
            slidesToShow: 4,
            slidesToScroll: 1,
            speed: 300,
            responsive: [{
                breakpoint: 1600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    arrows: !0,
                    dots: !1
                }
            }, {
                breakpoint: 1366,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: !0,
                    dots: !0
                }
            }]
        })
    }), jQuery(document).ready(function(e) {
        e(".rating-container i").mouseover(function() {
            e(".rating-container i").removeClass("active"), e(this).nextAll("i").addClass("active"), e(this).addClass("active");
            var t = e(this).nextAll("i").length + 1;
            console.log(t), e(this).prevAll("i").length, e(".rating-val").text(t)
        })
    }), $(document).on("click", ".com-btn.top-Ratings-cntr .secondary", function() {
        $(".star-rating").css("display", "block"), $(".rating-container i").removeClass("active"), $(".rating-val").text(0)
    }), $(document).on("click", ".star-rating .star-rating-delete, .top-Ratings-cntr .rating-container i", function() {
        $(".star-rating").css("display", "none")
    }), $(document).on("click", ".colonial-inn-motel-page .guest-reviews-cntr .See-more", function() {
        6 == $(".colonial-inn-motel-page .guest-reviews-cntr ul li.active").length ? ($(".colonial-inn-motel-page .guest-reviews-cntr .See-more").html("See less"), $(".colonial-inn-motel-page .guest-reviews-cntr ul li:nth-child(5), .colonial-inn-motel-page .guest-reviews-cntr ul li:nth-child(6)").removeClass("active")) : 4 == $(".colonial-inn-motel-page .guest-reviews-cntr ul li.active").length && "See less" == $(".colonial-inn-motel-page .guest-reviews-cntr .See-more").html() ? ($(".colonial-inn-motel-page .guest-reviews-cntr .See-more").html("See More"), $(".colonial-inn-motel-page .guest-reviews-cntr ul li:nth-child(3), .colonial-inn-motel-page .guest-reviews-cntr ul li:nth-child(4)").removeClass("active")) : ($(".colonial-inn-motel-page .guest-reviews-cntr ul li.active").next().next().addClass("active"), 6 == $(".colonial-inn-motel-page .guest-reviews-cntr ul li.active").length && $(".colonial-inn-motel-page .guest-reviews-cntr .See-more").html("See less"))
    }), $(window).width() < 1024 && $(document).on("click", ".amenities-section h2", function() {
        $(".amenities-section h2").toggleClass("active"), $(".amenities-section .col-5, .amenities-section .col-3, .amenities-section .col-4").toggle()
    }), $(document).on("click", ".home-cntr .col-6 .info-details", function() {
        $(".info-details").toggleClass("active")
    }), $(".star-rating").mouseleave(function() {
        $(this).hide()
    }), $(window).width() > 767 && $('[data-fancybox="images"]').fancybox({
        buttons: ["close"],
        caption: function(e, t) {
            return $(this).find("figcaption").html()
        },
        thumbs: {
            autoStart: !0,
            axis: "x"
        },
        onInit: function() {
            $(".withWhiteBoxSlider").css("right", "0%"), $(".ReserveNowBoxSlider").css("left", "0%"), $("img.lazy").lazy({
                bind: "event",
                delay: 0
            })
        },
        afterClose: function() {
            $(".withWhiteBoxSlider").css("right", "-100%"), $(".ReserveNowBoxSlider").css("left", "-100%"), window.location.hash = ""
        }
    }), $(window).load(function() {
        if ($.fancybox.defaults.hash = !1, $(window).width() > 1024) {
            var e = -1;
            $(".guest-reviews-cntr ul li").each(function(t) {
                $(this).outerHeight() > e && (e = $(this).outerHeight())
            }), $(".guest-reviews-cntr ul li").css("min-height", e + 90)
        }
    }), $(document).ready(function() {
        $("a").on("click", function(e) {
            if ("" !== this.hash) {
                e.preventDefault();
                var t = this.hash;
                $("html, body").animate({
                    scrollTop: $(t).offset().top
                }, 800, function() {
                    window.location.hash = t
                })
            }
        })
    }), $(window).resize(function() {
        fixedFooter()
    }), /*$(window).load(function() {
        setTimeout(function() {
            $(window).width() > 1024 ? ($(".landmarks-cntr").prepend('<div class="nearbtImg"> <img src="https://outerbankshotels.s3.amazonaws.com/images/landmark-banner.jpg"></div>'), $(".qandantr").prepend('<div class="nearbtImg"> <img src="https://outerbankshotels.s3.amazonaws.com/images/faq-banner.jpg"></div>')) : $(".nearbtImg").remove()
        }, 4e3), fixedFooter(), $(".loader").fadeOut(), $(".slider.single-item").css("display", "block")
    }),*/ $(window).load(function() {
			setTimeout(function() {
				if($(window).width()<1024){
					$(".nearbyBgadd, .landmarks-cntr, .qandantr").css("background", "none");
				}
			})
		}),
	$(function() {
        fixedFooter(), $(".input-type-select span").click(function() {
            $(this).parents(".input-type-select").find("select").trigger("click")
        }), $("body").append('<div class="scrollTop"><span></span></div>'), $(window).scroll(function() {
            $(this).scrollTop() > 100 ? $(".scrollTop").fadeIn() : $(".scrollTop").fadeOut()
        }), $(document).on("click", ".scrollTop span", function() {
            $("body,html").animate({
                scrollTop: 0
            }, 800)
        }), $(".accordion dl dt").click(function() {
            var e = $(this),
                t = e.next("dd");
            "none" == t.css("display") ? ($(".accordion dl").removeClass("active"), $(".accordion dl dd").slideUp(), t.slideDown(), e.parents("dl").addClass("active")) : ($(".accordion dl").removeClass("active"), $(".accordion dl dd").slideUp())
        }), $(".animate-label .input-group").click(function() {
            $(this).find("select").size() > 0 || ($(this).find("input").focus(), $(this).find("label").addClass("active")), $(this).find(".custom-select-options,.custom-selct-bg").size() > 0 && $(this).find(".custom-select-options,.custom-selct-bg").fadeIn()
        }), $(".animate-label .input-group input,.animate-label .input-group textarea").blur(function() {
            if (this.value.length > 0) return !1;
            $(this).prev("label").removeClass("active")
        }), $(".input-group").on("focus", "input, select, textarea", function() {
            $(this).prev("label").addClass("active")
        }), $(".input-group textarea, .input-group input,.input-group select").each(function() {
            this.value.length > 0 && $(this).prev("label").addClass("active")
        }), $(".input-group").click(function() {
            $(this).find("input").focus(), $(this).find("label").addClass("active")
        })
    }), $(document).on("click", ".apply_now", function() {
        var e = $.trim($(this).parent().parent().find(".grid-3").clone().children().remove().end().text());
        $("select[name='interested_in']").val(e)
    }), $(function() {
        $(".tabNav li").each(function() {
            var e = $(this).html(),
                t = $(this).find("a").attr("rel");
            $(this).parents(".tabNav").next(".tabResult").children("div#" + t).prepend('<div class="mobile-menu">' + e + "</div>")
        }), $(".tabNav li a").click(function() {
            var e = $(this).attr("rel"),
                t = $(this).parents(".tabNav"),
                n = $(this).parents(".tabNav").next(".tabResult");
            t.children().find("a").removeClass("active"), $(this).addClass("active"), "none" == n.children("div#" + e).css("display") ? (n.children("div").slideUp(), n.children("div#" + e).slideDown()) : n.children("div#" + e).slideUp()
        })
    }),
    function() {
        "use strict";
        for (var e = document.querySelectorAll(".menu-icon"), t = e.length - 1; t >= 0; t--) n(e[t]);

        function n(e) {
            e.addEventListener("click", function(e) {
                e.preventDefault(), !0 === this.classList.contains("active") ? this.classList.remove("active") : this.classList.add("active")
            })
        }
        $(".mobil-icon-toggle").click(function() {
            $(this).hasClass("active") ? ($(".menubar").addClass("open-navigation"), $(".menubar ul li.hasDropDown.active .submenu").css("display", "block")) : $(".menubar").removeClass("open-navigation")
        }), $(document).on("click", ".hasDropDown", function() {
            $(window).width() < 1024 && ($(".hasDropDown").removeClass("openHas"), "none" == $(this).find(".submenu").css("display") ? ($(".submenu").slideUp(), $(this).find(".submenu").slideDown(), $(this).addClass("openHas")) : ($(this).find(".submenu").slideUp(), $(this).removeClass("openHas")))
        })
    }(), $(window).load(function() {
        var e = window.location.href.slice(window.location.href.indexOf("?") + 1).split("&"),
            t = decodeURIComponent(e).split("=");
        "enquiry" == t[0] ? (sessionStorage.removeItem("leadpage"), alert("Your Enquiry has been Submitted Successfully. Our team will contact you shortly.")) : "career" == t[0] ? alert("Your application has been Submitted Successfully.") : "error" == t[0] && alert("The code is invalid.")
    }),$(window).load(function() {

$(".cc-compliance a").click(function(){
  $(".cookiepopup").fadeOut(500);
});

if(localStorage.getItem("cookies")==1){
    $(".cookiepopup").css('display','none');
}

// var rating_for =  $(".rating-container").parent().attr('data-rating-for');

// if(localStorage.getItem("cookies_colonial")==1 && rating_for == 1 ){
//     $(".bottom-Ratings-cntr .com-btn").remove();
// }else if(localStorage.getItem("cookies_seahorse")==1 && rating_for == 2){
//     $(".bottom-Ratings-cntr .com-btn").remove();
// }else if(localStorage.getItem("cookies_driftin")==1 && rating_for == 3){
//     $(".bottom-Ratings-cntr .com-btn").remove();
// }else if(localStorage.getItem("cookies_hatteras")==1 && rating_for == 4){
//     $(".bottom-Ratings-cntr .com-btn").remove();
// }

});

$(".cc-btn").click(function(){
	localStorage.setItem("cookies", "1");
});


//alert(localStorage.getItem("cookies"));
$(window).load(function() {
    rendered();
    function rendered(){

         $.post('inc/rating',{'action':'get'},function(data){

            console.log(data);
            var json = JSON.parse(data);

            $.each(json, function( index, value ) {
                $("#"+value.rating_for).attr("data-rating-value",value.rating);
                $("#"+value.rating_for).next().text(value.rating+' ('+value.stars+' Ratings)');
            });
        });
    }
   


    $(".rating-container .fa-star").one('click',function(){
        var cookie_id = "";
        var msg = "";
        var rating_for = $(this).parent().parent().attr('data-rating-for');

        if(rating_for==1){
            cookie_id = "cookies_colonial";
            msg = "Thank You For Rating Colonial Inn.";
        }else if(rating_for==2){
            cookie_id = "cookies_seahorse";
            msg = "Thank You For Rating Seahorse Inn.";
        }else if(rating_for==3){
            cookie_id = "cookies_driftin";
            msg = "Thank You For Rating Driftin Sands.";
        }else if(rating_for==4){
            cookie_id = "cookies_hatteras";
            msg = "Thank You For Rating Hatteras Island Inn.";
        }else if(rating_for==5){
            cookie_id = "cookies_blue_heron_motel";
            msg = "Thank You For Rating Blue Heron Motel.";
        }else{
            cookie_id = "cookies_blog"+rating_for;
            msg = "Thank You For Rating This Blog";
        }

        var stars = $(this).parent().next().text();
        
       
        $.post('inc/rating',{'action':'insert','rating_for':rating_for,'stars':stars,'cookie_id':cookie_id},function(data){
             localStorage.setItem(cookie_id, "1");
             alert(msg);
             rendered();
      
        });
    });
});

$(window).load(function() {
    var parameter = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    var decodedparameter = decodeURIComponent(parameter)
    var param = decodedparameter.split('=');
    if (param[0] == "contact") {
        sessionStorage.removeItem('leadpage');
        alert("Your Enquiry has been Submitted Successfully. Our team will contact you shortly.");
    } else if (param[0] == "ask") {
        alert("Thank you for ask a question. We will contact you shortly..");
    } else if (param[0] == "error") {
        alert("The code is invalid.");
    }
});