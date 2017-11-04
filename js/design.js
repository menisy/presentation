webpackJsonp([3], [function(e, t, o) {
    e.exports = o(78)
}, , function(e, t, o) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    var n = o(3),
        r = i(n);
    o(4);
    var a = o(5),
        s = i(a),
        l = o(6),
        u = i(l),
        c = o(7),
        d = i(c);
    o(8);
    var f = o(9),
        p = i(f),
        h = o(13),
        g = i(h);
    o(14), window.$ = window.jQuery = r["default"], r["default"].extend(r["default"].easing, u["default"]), r["default"].durationFast = 200, r["default"].durationNormal = 400, r["default"].durationSlow = 600, r["default"].easeIn = "easeInExpo", r["default"].easeOut = "easeOutExpo", r["default"].easeInOut = "easeInOutExpo", (0, p["default"])({
        language: "ru",
        backgroundColor: "#c98454",
        browserSupport: {
            Chrome: 45,
            IE: 13,
            Safari: 9,
            "Mobile Safari": 8,
            Firefox: 43
        }
    }), (0, g["default"])(), (0, s["default"])(), d["default"].getTouchSupport() && (0, r["default"])("html").removeClass("has-hover").addClass("no-hover"), d["default"].isIOS() && (0, r["default"])("html").addClass("ios"), d["default"].is_iPad() && (0, r["default"])("html").addClass("ipad"), d["default"].isMac() && (0, r["default"])("html").addClass("mac"), (0, r["default"])(function() {
        r["default"].app.parse((0, r["default"])("body"))
    })
}, , function(e, t, o) {
    var i, n, r;
    /*! jquery.finger - v0.1.6 - 2016-10-05
     * https://github.com/ngryman/jquery.finger
     * Copyright (c) 2016 Nicolas Gryman; Licensed MIT */
    ! function(a) {
        n = [o(3)], i = a, r = "function" == typeof i ? i.apply(t, n) : i, !(void 0 !== r && (e.exports = r))
    }(function(e) {
        function t(o) {
            o.preventDefault(), e.event.remove(b, "click", t)
        }

        function o(e, t) {
            return (g ? t.originalEvent.touches[0] : t)["page" + e.toUpperCase()]
        }

        function i(o, i, n) {
            var s = e.Event(i, S);
            e.event.trigger(s, {
                originalEvent: o
            }, o.target), s.isDefaultPrevented() && (~i.indexOf("tap") && !g ? e.event.add(b, "click", t) : o.preventDefault()), n && (e.event.remove(b, v + "." + y, r), e.event.remove(b, w + "." + y, a))
        }

        function n(n) {
            if (!(n.which > 1)) {
                var c = n.timeStamp || +new Date;
                l != c && (l = c, k.x = S.x = o("x", n), k.y = S.y = o("y", n), k.time = c, k.target = n.target, S.orientation = null, S.end = !1, s = !1, u = setTimeout(function() {
                    i(n, "press", !0)
                }, A.pressDuration), e.event.add(b, v + "." + y, r), e.event.add(b, w + "." + y, a), A.preventDefault && (n.preventDefault(), e.event.add(b, "click", t)))
            }
        }

        function r(t) {
            if (S.x = o("x", t), S.y = o("y", t), S.dx = S.x - k.x, S.dy = S.y - k.y, S.adx = Math.abs(S.dx), S.ady = Math.abs(S.dy), s = S.adx > A.motionThreshold || S.ady > A.motionThreshold) {
                for (clearTimeout(u), S.orientation || (S.adx > S.ady ? (S.orientation = "horizontal", S.direction = S.dx > 0 ? 1 : -1) : (S.orientation = "vertical", S.direction = S.dy > 0 ? 1 : -1)); t.target && t.target !== k.target;) t.target = t.target.parentNode;
                return t.target !== k.target ? (t.target = k.target, void a.call(this, e.Event(w + "." + y, t))) : void i(t, "drag")
            }
        }

        function a(e) {
            var t, o = e.timeStamp || +new Date,
                n = o - k.time;
            if (clearTimeout(u), s) e.target = k.target, n < A.flickDuration && i(e, "flick"), S.end = !0, t = "drag";
            else if (e.target === k.target) {
                var r = c === e.target && o - d < A.doubleTapInterval;
                t = r ? "doubletap" : "tap", c = r ? null : k.target, d = o
            }
            t && i(e, t, !0)
        }
        var s, l, u, c, d, f = navigator.userAgent,
            p = /chrome/i.exec(f),
            h = /android/i.exec(f),
            g = "ontouchstart" in window && !(p && !h),
            m = g ? "touchstart" : "mousedown",
            w = g ? "touchend touchcancel" : "mouseup mouseleave",
            v = g ? "touchmove" : "mousemove",
            y = "finger",
            b = e("html")[0],
            k = {},
            S = {},
            A = e.Finger = {
                pressDuration: 300,
                doubleTapInterval: 300,
                flickDuration: 150,
                motionThreshold: 5
            };
        return e.event.add(b, m + "." + y, n), e.each("tap doubletap press drag flick".split(" "), function(t, o) {
            e.fn[o] = function(e) {
                return e ? this.on(o, e) : this.trigger(o)
            }
        }), A
    })
}, function(e, t) { /*! npm.im/object-fit-images */
    "use strict";

    function o(e) {
        for (var t, o = getComputedStyle(e).fontFamily, i = {}; null !== (t = l.exec(o));) i[t[1]] = t[2];
        return i
    }

    function i(e, t) {
        if (!e[s].parsingSrcset) {
            var i = o(e);
            if (i["object-fit"] = i["object-fit"] || "fill", !e[s].s) {
                if ("fill" === i["object-fit"]) return;
                if (!e[s].skipTest && c && !i["object-position"]) return
            }
            var r = e[s].ios7src || e.currentSrc || e.src;
            if (t) r = t;
            else if (e.srcset && !f && window.picturefill) {
                var a = window.picturefill._;
                e[s].parsingSrcset = !0, e[a.ns] && e[a.ns].evaled || a.fillImg(e, {
                    reselect: !0
                }), e[a.ns].curSrc || (e[a.ns].supported = !1, a.fillImg(e, {
                    reselect: !0
                })), delete e[s].parsingSrcset, r = e[a.ns].curSrc || r
            }
            if (e[s].s) e[s].s = r, t && (e[s].srcAttr = t);
            else {
                e[s] = {
                    s: r,
                    srcAttr: t || p.call(e, "src"),
                    srcsetAttr: e.srcset
                }, e.src = s;
                try {
                    e.srcset && (e.srcset = "", Object.defineProperty(e, "srcset", {
                        value: e[s].srcsetAttr
                    })), n(e)
                } catch (l) {
                    e[s].ios7src = r
                }
            }
            e.style.backgroundImage = 'url("' + r + '")', e.style.backgroundPosition = i["object-position"] || "center", e.style.backgroundRepeat = "no-repeat", /scale-down/.test(i["object-fit"]) ? (e[s].i || (e[s].i = new Image, e[s].i.src = r), function u() {
                return e[s].i.naturalWidth ? void(e[s].i.naturalWidth > e.width || e[s].i.naturalHeight > e.height ? e.style.backgroundSize = "contain" : e.style.backgroundSize = "auto") : void setTimeout(u, 100)
            }()) : e.style.backgroundSize = i["object-fit"].replace("none", "auto").replace("fill", "100% 100%")
        }
    }

    function n(e) {
        var t = {
            get: function() {
                return e[s].s
            },
            set: function(t) {
                return delete e[s].i, i(e, t), t
            }
        };
        Object.defineProperty(e, "src", t), Object.defineProperty(e, "currentSrc", {
            get: t.get
        })
    }

    function r() {
        d || (HTMLImageElement.prototype.getAttribute = function(e) {
            return !this[s] || "src" !== e && "srcset" !== e ? p.call(this, e) : this[s][e + "Attr"]
        }, HTMLImageElement.prototype.setAttribute = function(e, t) {
            !this[s] || "src" !== e && "srcset" !== e ? h.call(this, e, t) : this["src" === e ? "src" : e + "Attr"] = String(t)
        })
    }

    function a(e, t) {
        var o = !g && !e;
        if (t = t || {}, e = e || "img", d && !t.skipTest) return !1;
        "string" == typeof e ? e = document.querySelectorAll("img") : "length" in e || (e = [e]);
        for (var n = 0; n < e.length; n++) e[n][s] = e[n][s] || t, i(e[n]);
        o && (document.body.addEventListener("load", function(e) {
            "IMG" === e.target.tagName && a(e.target, {
                skipTest: t.skipTest
            })
        }, !0), g = !0, e = "img"), t.watchMQ && window.addEventListener("resize", a.bind(null, e, {
            skipTest: t.skipTest
        }))
    }
    var s = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
        l = /(object-fit|object-position)\s*:\s*([-\w\s%]+)/g,
        u = new Image,
        c = "object-fit" in u.style,
        d = "object-position" in u.style,
        f = "string" == typeof u.currentSrc,
        p = u.getAttribute,
        h = u.setAttribute,
        g = !1;
    a.supportsObjectFit = c, a.supportsObjectPosition = d, r(), e.exports = a
}, function(e, t) {
    "use strict";

    function o(e, t, o, i, n) {
        return 0 === t ? o : i * Math.pow(2, 10 * (t / n - 1)) + o
    }

    function i(e, t, o, i, n) {
        return t === n ? o + i : i * (-Math.pow(2, -10 * t / n) + 1) + o
    }

    function n(e, t, o, i, n) {
        return 0 === t ? o : t === n ? o + i : (t /= n / 2) < 1 ? i / 2 * Math.pow(2, 10 * (t - 1)) + o : i / 2 * (-Math.pow(2, -10 * --t) + 2) + o
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t["default"] = {
        easeInExpo: o,
        easeOutExpo: i,
        easeInOutExpo: n
    }
}, , function(e, t, o) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        r = o(3),
        a = i(r);
    a["default"].app = {
        options: {
            id: "id",
            namespace: "plugin"
        },
        instances: {},
        parse: function(e, t) {
            var o = [],
                i = null,
                n = null,
                r = 0,
                s = 0;
            for (a["default"].extend(this.options, t || {}), e.data(this.options.namespace) && (i = this.factory(e), i && o.push(i)), n = e.find("[data-" + this.options.namespace + "]"), s = n.length, r = 0; r < s; r++) i = this.factory(n.eq(r)), i && o.push(i);
            return o
        },
        cleanup: function(e) {
            e.find("[data-" + this.options.namespace + "]").each(function() {
                a["default"].app.destroy((0, a["default"])(this)), (0, a["default"])(this).triggerHandler("app-cleanup")
            })
        },
        destroy: function(e) {
            var t, o = null;
            e instanceof a["default"] && (o = e, e = e.attr("data-" + this.options.id)), t = this.instances[e], t && ("function" == typeof t.destroy && t.destroy(), t.element && (t.element.removeData("instance"), t.element.find("[data-" + this.options.id + "]").each(function() {
                a["default"].app.destroy((0, a["default"])(this))
            })), delete this.instances[e])
        },
        factory: function(e, t) {
            var o = o || {},
                i = o[this.options.namespace] || e.data(this.options.namespace) || "",
                r = o.id || e.data("id") || e.attr("id") || "app_" + +new Date + String(~~(9999 * Math.random())),
                s = window,
                l = !1;
            if (o.id = r, o[this.options.namespace] = i, e.data("instance")) return null;
            if ("function" == typeof i) s = i;
            else {
                if ("string" != typeof i || !i) return null;
                0 === i.indexOf("$.fn.") || 0 === i.indexOf("jQuery.fn.") ? (s = i.replace(/^[^\.]\.fn\./i, ""), l = !0) : a["default"].each(i.split("."), function(e, t) {
                    if (s = s[t], !s) return !1
                })
            }
            if ("function" == typeof s || l && e[s]) {
                if (o = a["default"].extend({}, e.data(), o || {}), l) {
                    if ("function" == typeof e[s]) {
                        var u = e[s](o),
                            c = e[s].namespace;
                        s = u === e && c && "string" == typeof c ? e.data(c) || u : u
                    }
                } else s = s(e, o);
                if ("object" === ("undefined" == typeof s ? "undefined" : n(s)) && s === e) e.data("instance", "plugin");
                else if ("object" === ("undefined" == typeof s ? "undefined" : n(s)) && s !== e) return e.attr("data-" + this.options.id, r), e.data("instance", s), this.instances[r] = s, s
            }
            return null
        },
        get: function(e) {
            if ("object" === ("undefined" == typeof e ? "undefined" : n(e))) {
                var t = e.data("instance");
                if (t) return t;
                e = e.attr("data-" + this.options.id) || e.attr("id")
            }
            if (e) {
                if (this.instances[e]) return this.instances[e];
                var o = (0, a["default"])("[data-" + this.options.id + '="' + e + '"]');
                if (o.length) return this.factory(o), this.instances[e] || null
            }
            return null
        }
    }, t["default"] = a["default"].app
}, function(e, t, o) {
    var i = o(10),
        n = o(12);
    e.exports = function(e) {
        var t = function() {
                var t = new i(window.navigator.userAgent).getResult(),
                    o = document.getElementById("outdated");
                e = e || {};
                var r = window.navigator.language || window.navigator.userLanguage,
                    a = e.browserSupport || {
                        Chrome: 37,
                        IE: 10,
                        Safari: 7,
                        "Mobile Safari": 7,
                        Firefox: 32
                    },
                    s = e.requiredCssProperty || !1,
                    l = e.backgroundColor || "#f25648",
                    u = e.textColor || "white",
                    c = e.language || r.slice(0, 2),
                    d = "web",
                    f = "Android" === t.os.name;
                f && (d = "googlePlay");
                var p;
                e.requireChromeOnAndroid && (p = f && "Chrome" !== t.browser.name), "iOS" === t.os.name && (d = "appStore");
                var h = !0,
                    g = function(e) {
                        o.style.opacity = e / 100, o.style.filter = "alpha(opacity=" + e + ")"
                    },
                    m = function(e) {
                        g(e), 1 === e && (o.style.display = "block"), 100 === e && (h = !0)
                    },
                    w = function() {
                        var e = t.browser.name,
                            o = t.browser.major,
                            i = !1;
                        return a[e] && o < a[e] && (i = !0), i
                    },
                    v = function(e) {
                        if (!e) return !0;
                        var t = document.createElement("div"),
                            o = "Khtml Ms O Moz Webkit".split(" "),
                            i = o.length;
                        if (t.style[e]) return !0;
                        for (e = e.replace(/^[a-z]/, function(e) {
                                return e.toUpperCase()
                            }); i--;)
                            if (t.style[o[i] + e]) return !0;
                        return !1
                    },
                    y = function(e) {
                        return function() {
                            m(e)
                        }
                    },
                    b = function() {
                        var e = document.getElementById("buttonCloseUpdateBrowser"),
                            t = document.getElementById("buttonUpdateBrowser");
                        o.style.backgroundColor = l, o.style.color = u, o.children[0].style.color = u, o.children[1].style.color = u, t && (t.style.color = u, t.style.borderColor && (t.style.borderColor = u), t.onmouseover = function() {
                            this.style.color = l, this.style.backgroundColor = u
                        }, t.onmouseout = function() {
                            this.style.color = u, this.style.backgroundColor = l
                        }), e.style.color = u, e.onmousedown = function() {
                            return o.style.display = "none", !1
                        }
                    },
                    k = function(e) {
                        var t = n[e] || n.en,
                            o = {
                                web: "<p>" + t.update.web + '<a id="buttonUpdateBrowser" href="' + t.url + '">' + t.callToAction + "</a></p>",
                                googlePlay: "<p>" + t.update.googlePlay + '<a id="buttonUpdateBrowser" href="https://play.google.com/store/apps/details?id=com.android.chrome">' + t.callToAction + "</a></p>",
                                appStore: "<p>" + t.update[d] + "</p>"
                            },
                            i = o[d];
                        return "<h6>" + t.outOfDate + "</h6>" + i + '<p class="last"><a href="#" id="buttonCloseUpdateBrowser" title="' + t.close + '">×</a></p>'
                    };
                if (w() || !v(s) || p) {
                    if (h && "1" !== o.style.opacity) {
                        h = !1;
                        for (var S = 1; S <= 100; S++) setTimeout(y(S), 8 * S)
                    }
                    var A = document.getElementById("outdated");
                    A.innerHTML = k(c), b()
                }
            },
            o = window.onload;
        "function" != typeof window.onload ? window.onload = t : window.onload = function() {
            o && o(), t()
        }
    }
}, function(e, t, o) {
    var i;
    ! function(n, r) {
        "use strict";
        var a = "0.7.12",
            s = "",
            l = "?",
            u = "function",
            c = "undefined",
            d = "object",
            f = "string",
            p = "major",
            h = "model",
            g = "name",
            m = "type",
            w = "vendor",
            v = "version",
            y = "architecture",
            b = "console",
            k = "mobile",
            S = "tablet",
            A = "smarttv",
            x = "wearable",
            P = "embedded",
            T = {
                extend: function(e, t) {
                    var o = {};
                    for (var i in e) t[i] && t[i].length % 2 === 0 ? o[i] = t[i].concat(e[i]) : o[i] = e[i];
                    return o
                },
                has: function(e, t) {
                    return "string" == typeof e && t.toLowerCase().indexOf(e.toLowerCase()) !== -1
                },
                lowerize: function(e) {
                    return e.toLowerCase()
                },
                major: function(e) {
                    return typeof e === f ? e.replace(/[^\d\.]/g, "").split(".")[0] : r
                },
                trim: function(e) {
                    return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                }
            },
            O = {
                rgx: function() {
                    for (var e, t, o, i, n, a, s, l = 0, f = arguments; l < f.length && !a;) {
                        var p = f[l],
                            h = f[l + 1];
                        if (typeof e === c) {
                            e = {};
                            for (i in h) h.hasOwnProperty(i) && (n = h[i], typeof n === d ? e[n[0]] = r : e[n] = r)
                        }
                        for (t = o = 0; t < p.length && !a;)
                            if (a = p[t++].exec(this.getUA()))
                                for (i = 0; i < h.length; i++) s = a[++o], n = h[i], typeof n === d && n.length > 0 ? 2 == n.length ? typeof n[1] == u ? e[n[0]] = n[1].call(this, s) : e[n[0]] = n[1] : 3 == n.length ? typeof n[1] !== u || n[1].exec && n[1].test ? e[n[0]] = s ? s.replace(n[1], n[2]) : r : e[n[0]] = s ? n[1].call(this, s, n[2]) : r : 4 == n.length && (e[n[0]] = s ? n[3].call(this, s.replace(n[1], n[2])) : r) : e[n] = s ? s : r;
                        l += 2
                    }
                    return e
                },
                str: function(e, t) {
                    for (var o in t)
                        if (typeof t[o] === d && t[o].length > 0) {
                            for (var i = 0; i < t[o].length; i++)
                                if (T.has(t[o][i], e)) return o === l ? r : o
                        } else if (T.has(t[o], e)) return o === l ? r : o;
                    return e
                }
            },
            z = {
                browser: {
                    oldsafari: {
                        version: {
                            "1.0": "/8",
                            1.2: "/1",
                            1.3: "/3",
                            "2.0": "/412",
                            "2.0.2": "/416",
                            "2.0.3": "/417",
                            "2.0.4": "/419",
                            "?": "/"
                        }
                    }
                },
                device: {
                    amazon: {
                        model: {
                            "Fire Phone": ["SD", "KF"]
                        }
                    },
                    sprint: {
                        model: {
                            "Evo Shift 4G": "7373KT"
                        },
                        vendor: {
                            HTC: "APA",
                            Sprint: "Sprint"
                        }
                    }
                },
                os: {
                    windows: {
                        version: {
                            ME: "4.90",
                            "NT 3.11": "NT3.51",
                            "NT 4.0": "NT4.0",
                            2000: "NT 5.0",
                            XP: ["NT 5.1", "NT 5.2"],
                            Vista: "NT 6.0",
                            7: "NT 6.1",
                            8: "NT 6.2",
                            8.1: "NT 6.3",
                            10: ["NT 6.4", "NT 10.0"],
                            RT: "ARM"
                        }
                    }
                }
            },
            C = {
                browser: [
                    [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i],
                    [g, v],
                    [/(opios)[\/\s]+([\w\.]+)/i],
                    [
                        [g, "Opera Mini"], v
                    ],
                    [/\s(opr)\/([\w\.]+)/i],
                    [
                        [g, "Opera"], v
                    ],
                    [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs)\/([\w\.-]+)/i],
                    [g, v],
                    [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
                    [
                        [g, "IE"], v
                    ],
                    [/(edge)\/((\d+)?[\w\.]+)/i],
                    [g, v],
                    [/(yabrowser)\/([\w\.]+)/i],
                    [
                        [g, "Yandex"], v
                    ],
                    [/(comodo_dragon)\/([\w\.]+)/i],
                    [
                        [g, /_/g, " "], v
                    ],
                    [/(micromessenger)\/([\w\.]+)/i],
                    [
                        [g, "WeChat"], v
                    ],
                    [/xiaomi\/miuibrowser\/([\w\.]+)/i],
                    [v, [g, "MIUI Browser"]],
                    [/\swv\).+(chrome)\/([\w\.]+)/i],
                    [
                        [g, /(.+)/, "$1 WebView"], v
                    ],
                    [/android.+samsungbrowser\/([\w\.]+)/i, /android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
                    [v, [g, "Android Browser"]],
                    [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i, /(qqbrowser)[\/\s]?([\w\.]+)/i],
                    [g, v],
                    [/(uc\s?browser)[\/\s]?([\w\.]+)/i, /ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i, /juc.+(ucweb)[\/\s]?([\w\.]+)/i],
                    [
                        [g, "UCBrowser"], v
                    ],
                    [/(dolfin)\/([\w\.]+)/i],
                    [
                        [g, "Dolphin"], v
                    ],
                    [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
                    [
                        [g, "Chrome"], v
                    ],
                    [/;fbav\/([\w\.]+);/i],
                    [v, [g, "Facebook"]],
                    [/fxios\/([\w\.-]+)/i],
                    [v, [g, "Firefox"]],
                    [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
                    [v, [g, "Mobile Safari"]],
                    [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
                    [v, g],
                    [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                    [g, [v, O.str, z.browser.oldsafari.version]],
                    [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i],
                    [g, v],
                    [/(navigator|netscape)\/([\w\.-]+)/i],
                    [
                        [g, "Netscape"], v
                    ],
                    [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]+)*/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i],
                    [g, v]
                ],
                cpu: [
                    [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                    [
                        [y, "amd64"]
                    ],
                    [/(ia32(?=;))/i],
                    [
                        [y, T.lowerize]
                    ],
                    [/((?:i[346]|x)86)[;\)]/i],
                    [
                        [y, "ia32"]
                    ],
                    [/windows\s(ce|mobile);\sppc;/i],
                    [
                        [y, "arm"]
                    ],
                    [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                    [
                        [y, /ower/, "", T.lowerize]
                    ],
                    [/(sun4\w)[;\)]/i],
                    [
                        [y, "sparc"]
                    ],
                    [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],
                    [
                        [y, T.lowerize]
                    ]
                ],
                device: [
                    [/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],
                    [h, w, [m, S]],
                    [/applecoremedia\/[\w\.]+ \((ipad)/],
                    [h, [w, "Apple"],
                        [m, S]
                    ],
                    [/(apple\s{0,1}tv)/i],
                    [
                        [h, "Apple TV"],
                        [w, "Apple"]
                    ],
                    [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i],
                    [w, h, [m, S]],
                    [/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],
                    [h, [w, "Amazon"],
                        [m, S]
                    ],
                    [/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],
                    [
                        [h, O.str, z.device.amazon.model],
                        [w, "Amazon"],
                        [m, k]
                    ],
                    [/\((ip[honed|\s\w*]+);.+(apple)/i],
                    [h, w, [m, k]],
                    [/\((ip[honed|\s\w*]+);/i],
                    [h, [w, "Apple"],
                        [m, k]
                    ],
                    [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i],
                    [w, h, [m, k]],
                    [/\(bb10;\s(\w+)/i],
                    [h, [w, "BlackBerry"],
                        [m, k]
                    ],
                    [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],
                    [h, [w, "Asus"],
                        [m, S]
                    ],
                    [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
                    [
                        [w, "Sony"],
                        [h, "Xperia Tablet"],
                        [m, S]
                    ],
                    [/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i],
                    [
                        [w, "Sony"],
                        [h, "Xperia Phone"],
                        [m, k]
                    ],
                    [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
                    [w, h, [m, b]],
                    [/android.+;\s(shield)\sbuild/i],
                    [h, [w, "Nvidia"],
                        [m, b]
                    ],
                    [/(playstation\s[34portablevi]+)/i],
                    [h, [w, "Sony"],
                        [m, b]
                    ],
                    [/(sprint\s(\w+))/i],
                    [
                        [w, O.str, z.device.sprint.vendor],
                        [h, O.str, z.device.sprint.model],
                        [m, k]
                    ],
                    [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],
                    [w, h, [m, S]],
                    [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w+)*/i, /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],
                    [w, [h, /_/g, " "],
                        [m, k]
                    ],
                    [/(nexus\s9)/i],
                    [h, [w, "HTC"],
                        [m, S]
                    ],
                    [/(nexus\s6p)/i],
                    [h, [w, "Huawei"],
                        [m, k]
                    ],
                    [/(microsoft);\s(lumia[\s\w]+)/i],
                    [w, h, [m, k]],
                    [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
                    [h, [w, "Microsoft"],
                        [m, b]
                    ],
                    [/(kin\.[onetw]{3})/i],
                    [
                        [h, /\./g, " "],
                        [w, "Microsoft"],
                        [m, k]
                    ],
                    [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w+)*/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i],
                    [h, [w, "Motorola"],
                        [m, k]
                    ],
                    [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                    [h, [w, "Motorola"],
                        [m, S]
                    ],
                    [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
                    [
                        [w, T.trim],
                        [h, T.trim],
                        [m, A]
                    ],
                    [/hbbtv.+maple;(\d+)/i],
                    [
                        [h, /^/, "SmartTV"],
                        [w, "Samsung"],
                        [m, A]
                    ],
                    [/\(dtv[\);].+(aquos)/i],
                    [h, [w, "Sharp"],
                        [m, A]
                    ],
                    [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
                    [
                        [w, "Samsung"], h, [m, S]
                    ],
                    [/smart-tv.+(samsung)/i],
                    [w, [m, A], h],
                    [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i],
                    [
                        [w, "Samsung"], h, [m, k]
                    ],
                    [/sie-(\w+)*/i],
                    [h, [w, "Siemens"],
                        [m, k]
                    ],
                    [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i],
                    [
                        [w, "Nokia"], h, [m, k]
                    ],
                    [/android\s3\.[\s\w;-]{10}(a\d{3})/i],
                    [h, [w, "Acer"],
                        [m, S]
                    ],
                    [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
                    [
                        [w, "LG"], h, [m, S]
                    ],
                    [/(lg) netcast\.tv/i],
                    [w, h, [m, A]],
                    [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w+)*/i],
                    [h, [w, "LG"],
                        [m, k]
                    ],
                    [/android.+(ideatab[a-z0-9\-\s]+)/i],
                    [h, [w, "Lenovo"],
                        [m, S]
                    ],
                    [/linux;.+((jolla));/i],
                    [w, h, [m, k]],
                    [/((pebble))app\/[\d\.]+\s/i],
                    [w, h, [m, x]],
                    [/android.+;\s(glass)\s\d/i],
                    [h, [w, "Google"],
                        [m, x]
                    ],
                    [/android.+(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w)?)\s+build/i],
                    [
                        [h, /_/g, " "],
                        [w, "Xiaomi"],
                        [m, k]
                    ],
                    [/android.+a000(1)\s+build/i],
                    [h, [w, "OnePlus"],
                        [m, k]
                    ],
                    [/\s(tablet)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
                    [
                        [m, T.lowerize], w, h
                    ]
                ],
                engine: [
                    [/windows.+\sedge\/([\w\.]+)/i],
                    [v, [g, "EdgeHTML"]],
                    [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
                    [g, v],
                    [/rv\:([\w\.]+).*(gecko)/i],
                    [v, g]
                ],
                os: [
                    [/microsoft\s(windows)\s(vista|xp)/i],
                    [g, v],
                    [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
                    [g, [v, O.str, z.os.windows.version]],
                    [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                    [
                        [g, "Windows"],
                        [v, O.str, z.os.windows.version]
                    ],
                    [/\((bb)(10);/i],
                    [
                        [g, "BlackBerry"], v
                    ],
                    [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i, /linux;.+(sailfish);/i],
                    [g, v],
                    [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],
                    [
                        [g, "Symbian"], v
                    ],
                    [/\((series40);/i],
                    [g],
                    [/mozilla.+\(mobile;.+gecko.+firefox/i],
                    [
                        [g, "Firefox OS"], v
                    ],
                    [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i],
                    [g, v],
                    [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                    [
                        [g, "Chromium OS"], v
                    ],
                    [/(sunos)\s?([\w\.]+\d)*/i],
                    [
                        [g, "Solaris"], v
                    ],
                    [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],
                    [g, v],
                    [/(haiku)\s(\w+)/i],
                    [g, v],
                    [/(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i],
                    [
                        [g, "iOS"],
                        [v, /_/g, "."]
                    ],
                    [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i],
                    [
                        [g, "Mac OS"],
                        [v, /_/g, "."]
                    ],
                    [/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]+)*/i],
                    [g, v]
                ]
            },
            j = function(e, t) {
                if (!(this instanceof j)) return new j(e, t).getResult();
                var o = e || (n && n.navigator && n.navigator.userAgent ? n.navigator.userAgent : s),
                    i = t ? T.extend(C, t) : C;
                return this.getBrowser = function() {
                    var e = O.rgx.apply(this, i.browser);
                    return e.major = T.major(e.version), e
                }, this.getCPU = function() {
                    return O.rgx.apply(this, i.cpu)
                }, this.getDevice = function() {
                    return O.rgx.apply(this, i.device)
                }, this.getEngine = function() {
                    return O.rgx.apply(this, i.engine)
                }, this.getOS = function() {
                    return O.rgx.apply(this, i.os)
                }, this.getResult = function() {
                    return {
                        ua: this.getUA(),
                        browser: this.getBrowser(),
                        engine: this.getEngine(),
                        os: this.getOS(),
                        device: this.getDevice(),
                        cpu: this.getCPU()
                    }
                }, this.getUA = function() {
                    return o
                }, this.setUA = function(e) {
                    return o = e, this
                }, this
            };
        j.VERSION = a, j.BROWSER = {
            NAME: g,
            MAJOR: p,
            VERSION: v
        }, j.CPU = {
            ARCHITECTURE: y
        }, j.DEVICE = {
            MODEL: h,
            VENDOR: w,
            TYPE: m,
            CONSOLE: b,
            MOBILE: k,
            SMARTTV: A,
            TABLET: S,
            WEARABLE: x,
            EMBEDDED: P
        }, j.ENGINE = {
            NAME: g,
            VERSION: v
        }, j.OS = {
            NAME: g,
            VERSION: v
        }, typeof t !== c ? (typeof e !== c && e.exports && (t = e.exports = j), t.UAParser = j) : "function" === u && o(11) ? (i = function() {
            return j
        }.call(t, o, t, e), !(i !== r && (e.exports = i))) : n.UAParser = j;
        var M = n.jQuery || n.Zepto;
        if (typeof M !== c) {
            var E = new j;
            M.ua = E.getResult(), M.ua.get = function() {
                return E.getUA()
            }, M.ua.set = function(e) {
                E.setUA(e);
                var t = E.getResult();
                for (var o in t) M.ua[o] = t[o]
            }
        }
    }("object" == typeof window ? window : this)
}, function(e, t) {
    (function(t) {
        e.exports = t
    }).call(t, {})
}, function(e, t) {
    e.exports = {
        br: {
            outOfDate: "O seu navegador est&aacute; desatualizado!",
            update: {
                web: "Atualize o seu navegador para ter uma melhor experi&ecirc;ncia e visualiza&ccedil;&atilde;o deste site. ",
                googlePlay: "Please install Chrome from Google Play",
                appStore: "Please update iOS from the Settings App"
            },
            url: "http://outdatedbrowser.com/br",
            callToAction: "Atualize o seu navegador agora",
            close: "Fechar"
        },
        cn: {
            outOfDate: "您的浏览器已过时",
            update: {
                web: "要正常浏览本网站请升级您的浏览器。",
                googlePlay: "Please install Chrome from Google Play",
                appStore: "Please update iOS from the Settings App"
            },
            url: "http://outdatedbrowser.com/cn",
            callToAction: "现在升级",
            close: "关闭"
        },
        cz: {
            outOfDate: "Váš prohlížeč je zastaralý!",
            update: {
                web: "Pro správné zobrazení těchto stránek aktualizujte svůj prohlížeč. ",
                googlePlay: "Please install Chrome from Google Play",
                appStore: "Please update iOS from the Settings App"
            },
            url: "http://outdatedbrowser.com/cz",
            callToAction: "Aktualizovat nyní svůj prohlížeč",
            close: "Zavřít"
        },
        da: {
            outOfDate: "Din browser er forældet!",
            update: {
                web: "Opdatér din browser for at få vist denne hjemmeside korrekt. ",
                googlePlay: "Installér venligst Chrome fra Google Play",
                appStore: "Opdatér venligst iOS"
            },
            url: "http://outdatedbrowser.com/da",
            callToAction: "Opdatér din browser nu",
            close: "Luk"
        },
        de: {
            outOfDate: "Ihr Browser ist veraltet!",
            update: {
                web: "Bitte aktualisieren Sie Ihren Browser, um diese Website korrekt darzustellen. ",
                googlePlay: "Please install Chrome from Google Play",
                appStore: "Please update iOS from the Settings App"
            },
            url: "http://outdatedbrowser.com/de",
            callToAction: "Den Browser jetzt aktualisieren ",
            close: "Schließen"
        },
        ee: {
            outOfDate: "Sinu veebilehitseja on vananenud!",
            update: {
                web: "Palun uuenda oma veebilehitsejat, et näha lehekülge korrektselt. ",
                googlePlay: "Please install Chrome from Google Play",
                appStore: "Please update iOS from the Settings App"
            },
            url: "http://outdatedbrowser.com/ee",
            callToAction: "Uuenda oma veebilehitsejat kohe",
            close: "Sulge"
        },
        en: {
            outOfDate: "Your browser is out-of-date!",
            update: {
                web: "Update your browser to view this website correctly. ",
                googlePlay: "Please install Chrome from Google Play",
                appStore: "Please update iOS from the Settings App"
            },
            url: "http://outdatedbrowser.com/",
            callToAction: "Update my browser now",
            close: "Close"
        },
        es: {
            outOfDate: "¡Tu navegador está anticuado!",
            update: {
                web: "Actualiza tu navegador para ver esta página correctamente. ",
                googlePlay: "Please install Chrome from Google Play",
                appStore: "Please update iOS from the Settings App"
            },
            url: "http://outdatedbrowser.com/es",
            callToAction: "Actualizar mi navegador ahora",
            close: "Cerrar"
        },
        fa: {
            rightToLeft: !0,
            outOfDate: "مرورگر شما منسوخ شده است!",
            update: {
                web: "جهت مشاهده صحیح این وبسایت، مرورگرتان را بروز رسانی نمایید. ",
                googlePlay: "Please install Chrome from Google Play",
                appStore: "Please update iOS from the Settings App"
            },
            url: "http://outdatedbrowser.com/",
            callToAction: "همین حالا مرورگرم را بروز کن",
            close: "Close"
        },
        fi: {
            outOfDate: "Selaimesi on vanhentunut!",
            update: {
                web: "Lataa ajantasainen selain n&auml;hd&auml;ksesi t&auml;m&auml;n sivun oikein. ",
                googlePlay: "Please install Chrome from Google Play",
                appStore: "Please update iOS from the Settings App"
            },
            url: "http://outdatedbrowser.com/",
            callToAction: "P&auml;ivit&auml; selaimeni nyt ",
            close: "Sulje"
        },
        fr: {
            outOfDate: "Votre navigateur est désuet!",
            update: {
                web: "Mettez à jour votre navigateur pour afficher correctement ce site Web. ",
                googlePlay: "Please install Chrome from Google Play",
                appStore: "Please update iOS from the Settings App"
            },
            url: "http://outdatedbrowser.com/fr",
            callToAction: "Mettre à jour maintenant ",
            close: "Fermer"
        },
        hu: {
            outOfDate: "A böngészője elavult!",
            update: {
                web: "Firssítse vagy cserélje le a böngészőjét. ",
                googlePlay: "Please install Chrome from Google Play",
                appStore: "Please update iOS from the Settings App"
            },
            url: "http://outdatedbrowser.com/hu",
            callToAction: "A böngészőm frissítése ",
            close: "Close"
        },
        id: {
            outOfDate: "Browser yang Anda gunakan sudah ketinggalan zaman!",
            update: {
                web: "Perbaharuilah browser Anda agar bisa menjelajahi website ini dengan nyaman. ",
                googlePlay: "Please install Chrome from Google Play",
                appStore: "Please update iOS from the Settings App"
            },
            url: "http://outdatedbrowser.com/",
            callToAction: "Perbaharui browser sekarang ",
            close: "Close"
        },
        it: {
            outOfDate: "Il tuo browser non &egrave; aggiornato!",
            update: {
                web: "Aggiornalo per vedere questo sito correttamente. ",
                googlePlay: "Please install Chrome from Google Play",
                appStore: "Please update iOS from the Settings App"
            },
            url: "http://outdatedbrowser.com/it",
            callToAction: "Aggiorna ora",
            close: "Chiudi"
        },
        lt: {
            outOfDate: "Jūsų naršyklės versija yra pasenusi!",
            update: {
                web: "Atnaujinkite savo naršyklę, kad galėtumėte peržiūrėti šią svetainę tinkamai. ",
                googlePlay: "Please install Chrome from Google Play",
                appStore: "Please update iOS from the Settings App"
            },
            url: "http://outdatedbrowser.com/",
            callToAction: "Atnaujinti naršyklę ",
            close: "Close"
        },
        nl: {
            outOfDate: "Je gebruikt een oude browser!",
            update: {
                web: "Update je browser om deze website correct te bekijken. ",
                googlePlay: "Please install Chrome from Google Play",
                appStore: "Please update iOS from the Settings App"
            },
            url: "http://outdatedbrowser.com/nl",
            callToAction: "Update mijn browser nu ",
            close: "Sluiten"
        },
        pl: {
            outOfDate: "Twoja przeglądarka jest przestarzała!",
            update: {
                web: "Zaktualizuj swoją przeglądarkę, aby poprawnie wyświetlić tę stronę. ",
                googlePlay: "Please install Chrome from Google Play",
                appStore: "Please update iOS from the Settings App"
            },
            url: "http://outdatedbrowser.com/pl",
            callToAction: "Zaktualizuj przeglądarkę już teraz",
            close: "Close"
        },
        pt: {
            outOfDate: "O seu browser est&aacute; desatualizado!",
            update: {
                web: "Atualize o seu browser para ter uma melhor experi&ecirc;ncia e visualiza&ccedil;&atilde;o deste site. ",
                googlePlay: "Please install Chrome from Google Play",
                appStore: "Please update iOS from the Settings App"
            },
            url: "http://outdatedbrowser.com/pt",
            callToAction: "Atualize o seu browser agora",
            close: "Fechar"
        },
        ro: {
            outOfDate: "Browserul este învechit!",
            update: {
                web: "Actualizați browserul pentru a vizualiza corect acest site. ",
                googlePlay: "Please install Chrome from Google Play",
                appStore: "Please update iOS from the Settings App"
            },
            url: "http://outdatedbrowser.com/",
            callToAction: "Actualizați browserul acum!",
            close: "Close"
        },
        ru: {
            outOfDate: "Ваш браузер устарел!",
            update: {
                web: "Обновите ваш браузер для правильного отображения этого сайта. ",
                googlePlay: "Please install Chrome from Google Play",
                appStore: "Please update iOS from the Settings App"
            },
            url: "http://outdatedbrowser.com/ru",
            callToAction: "Обновить мой браузер ",
            close: "Закрыть"
        },
        si: {
            outOfDate: "Vaš brskalnik je zastarel!",
            update: {
                web: "Za pravilen prikaz spletne strani posodobite vaš brskalnik. ",
                googlePlay: "Please install Chrome from Google Play",
                appStore: "Please update iOS from the Settings App"
            },
            url: "http://outdatedbrowser.com/si",
            callToAction: "Posodobi brskalnik ",
            close: "Zapri"
        },
        sv: {
            outOfDate: "Din webbläsare stödjs ej längre!",
            update: {
                web: "Uppdatera din webbläsare för att webbplatsen ska visas korrekt. ",
                googlePlay: "Please install Chrome from Google Play",
                appStore: "Please update iOS from the Settings App"
            },
            url: "http://outdatedbrowser.com/",
            callToAction: "Uppdatera min webbläsare nu",
            close: "Stäng"
        },
        ua: {
            outOfDate: "Ваш браузер застарів!",
            update: {
                web: "Оновіть ваш браузер для правильного відображення цього сайта. ",
                googlePlay: "Please install Chrome from Google Play",
                appStore: "Please update iOS from the Settings App"
            },
            url: "http://outdatedbrowser.com/ua",
            callToAction: "Оновити мій браузер ",
            close: "Закрити"
        }
    }
}, function(e, t, o) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    } /*! svg4everybody v2.0.0 | github.com/jonathantneal/svg4everybody */
    function n(e) {
        e.onreadystatechange = function() {
            if (4 === e.readyState) {
                var t = document.createElement("x");
                t.innerHTML = e.responseText;
                var o = t.getElementsByTagName("svg");
                o.length && (o[0].setAttribute("class", "out-of-screen"), document.body.insertBefore(o[0], document.body.firstChild))
            }
        }, e.onreadystatechange()
    }

    function r(e) {
        e = e || {};
        var t = (e.element || document).getElementsByTagName("use"),
            o = "polyfill" in e ? e.polyfill : /\bEdge\/12\b|\bTrident\/[567]\b|\bVersion\/7.0 Safari\b/.test(navigator.userAgent) || (navigator.userAgent.match(/AppleWebKit\/(\d+)/) || [])[1] < 537;
        e.validate;
        if (o)
            for (var i, r, a = 0, s = t.length; a < s; a++) {
                for (i = t[a], r = i ? i.parentNode : null; r && !/svg/i.test(r.nodeName);) r = r.parentNode;
                if (r && /svg/i.test(r.nodeName)) {
                    var u = i.getAttribute("xlink:href"),
                        c = u.split("#"),
                        d = c[0],
                        f = c[1];
                    if (i.setAttribute("xlink:href", "#" + f), d.length && !l[d]) {
                        var p = new XMLHttpRequest;
                        p.open("GET", d), p.send(), n(p), l[d] = !0
                    }
                }
            }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = o(3),
        s = i(a),
        l = {};
    s["default"].fn.svg4everybody = function() {
        return this.each(function() {
            r({
                element: this
            })
        })
    }, t["default"] = r
}, function(e, t, o) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function n(e) {
        return e.replace(g, function(e, t) {
            return t.toUpperCase()
        })
    }

    function r(e, t) {
        (0, f["default"])(t, function(t) {
            t.cssText.indexOf("vh") !== -1 && ! function() {
                var o = [];
                t.style ? ((0, f["default"])(p, function(e) {
                    if (t.style[e]) {
                        var i = t.style[e].match(h);
                        i && o.push({
                            name: n(e),
                            value: parseFloat(i[1])
                        })
                    }
                }), o.length && e.push({
                    rule: t,
                    properties: o
                })) : t.cssRules && r(e, t.cssRules)
            }()
        })
    }

    function a() {
        var e = [];
        return (0, f["default"])(document.styleSheets, function(t) {
            r(e, t.cssRules)
        }), e
    }

    function s(e, t) {
        (0, f["default"])(e, function(e) {
            (0, f["default"])(e.properties, function(o) {
                e.rule.style[o.name] = Math.round(t * o.value / 100) + "px"
            })
        })
    }

    function l(e, t) {
        var o = null,
            i = null,
            n = function() {
                o = null, clearInterval(i)
            };
        return function() {
            o || (o = setTimeout(n, t), i = setInterval(e, 60))
        }
    }
    var u = o(3),
        c = i(u),
        d = o(15),
        f = i(d),
        p = ["min-height", "height", "max-height"],
        h = /(\d+)vh/,
        g = /-([a-z])/g;
    (0, c["default"])(function() {
        /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream && ! function() {
            var e = function() {
                    var e = window.innerHeight;
                    e !== o && (o = e, s(t, e))
                },
                t = a(),
                o = window.innerHeight;
            s(t, o), (0, c["default"])(window).on("resize", l(e, 1e3)), setTimeout(e, 16), e()
        }()
    })
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t) {
    "use strict";

    function o() {
        return "plugin" + a++
    }

    function i(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o(),
            i = function() {
                for (var t = [], o = 0, i = arguments.length; o < i; o++) t[o] = arguments[o];
                return n(this, r, e, t)
            },
            r = i.namespace = t;
        return i
    }

    function n(e, t, o, i) {
        var n = e,
            a = null,
            s = [],
            l = i[0],
            u = {};
        return "object" === ("undefined" == typeof l ? "undefined" : r(l)) ? u = l : "instance" === l ? (a = function() {
            return this
        }, s = []) : "string" == typeof l && "function" == typeof o.prototype[l] && "_" != l[0] && (a = o.prototype[l], s = i.slice(1)), e.each(function() {
            var e, i, r = $(this),
                c = r.data(t);
            c || (i = $.extend({}, r.data(), u), c = new o(r, i), r.data(t, c)), a && (e = a.apply(c, s), void 0 !== e && (n = e), "destroy" === l && r.removeData(t))
        }), n
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    t.generateUid = o, t.createPlugin = i;
    var a = 1;
    t["default"] = i
}, , , , , , , , , , function(e, t, o) {
    (function(t) {
        for (var i = o(55), n = "undefined" == typeof window ? t : window, r = ["moz", "webkit"], a = "AnimationFrame", s = n["request" + a], l = n["cancel" + a] || n["cancelRequest" + a], u = 0; !s && u < r.length; u++) s = n[r[u] + "Request" + a], l = n[r[u] + "Cancel" + a] || n[r[u] + "CancelRequest" + a];
        if (!s || !l) {
            var c = 0,
                d = 0,
                f = [],
                p = 1e3 / 60;
            s = function(e) {
                if (0 === f.length) {
                    var t = i(),
                        o = Math.max(0, p - (t - c));
                    c = o + t, setTimeout(function() {
                        var e = f.slice(0);
                        f.length = 0;
                        for (var t = 0; t < e.length; t++)
                            if (!e[t].cancelled) try {
                                e[t].callback(c)
                            } catch (o) {
                                setTimeout(function() {
                                    throw o
                                }, 0)
                            }
                    }, Math.round(o))
                }
                return f.push({
                    handle: ++d,
                    callback: e,
                    cancelled: !1
                }), d
            }, l = function(e) {
                for (var t = 0; t < f.length; t++) f[t].handle === e && (f[t].cancelled = !0)
            }
        }
        e.exports = function(e) {
            return s.call(n, e)
        }, e.exports.cancel = function() {
            l.apply(n, arguments)
        }, e.exports.polyfill = function() {
            n.requestAnimationFrame = s, n.cancelAnimationFrame = l
        }
    }).call(t, function() {
        return this
    }())
}, function(e, t, o) {
    (function(t) {
        (function() {
            var o, i, n;
            "undefined" != typeof performance && null !== performance && performance.now ? e.exports = function() {
                return performance.now()
            } : "undefined" != typeof t && null !== t && t.hrtime ? (e.exports = function() {
                return (o() - n) / 1e6
            }, i = t.hrtime, o = function() {
                var e;
                return e = i(), 1e9 * e[0] + e[1]
            }, n = o()) : Date.now ? (e.exports = function() {
                return Date.now() - n
            }, n = Date.now()) : (e.exports = function() {
                return (new Date).getTime() - n
            }, n = (new Date).getTime())
        }).call(this)
    }).call(t, o(56))
}, function(e, t) {
    function o() {
        throw new Error("setTimeout has not been defined")
    }

    function i() {
        throw new Error("clearTimeout has not been defined")
    }

    function n(e) {
        if (c === setTimeout) return setTimeout(e, 0);
        if ((c === o || !c) && setTimeout) return c = setTimeout, setTimeout(e, 0);
        try {
            return c(e, 0)
        } catch (t) {
            try {
                return c.call(null, e, 0)
            } catch (t) {
                return c.call(this, e, 0)
            }
        }
    }

    function r(e) {
        if (d === clearTimeout) return clearTimeout(e);
        if ((d === i || !d) && clearTimeout) return d = clearTimeout, clearTimeout(e);
        try {
            return d(e)
        } catch (t) {
            try {
                return d.call(null, e)
            } catch (t) {
                return d.call(this, e)
            }
        }
    }

    function a() {
        g && p && (g = !1, p.length ? h = p.concat(h) : m = -1, h.length && s())
    }

    function s() {
        if (!g) {
            var e = n(a);
            g = !0;
            for (var t = h.length; t;) {
                for (p = h, h = []; ++m < t;) p && p[m].run();
                m = -1, t = h.length
            }
            p = null, g = !1, r(e)
        }
    }

    function l(e, t) {
        this.fun = e, this.array = t
    }

    function u() {}
    var c, d, f = e.exports = {};
    ! function() {
        try {
            c = "function" == typeof setTimeout ? setTimeout : o
        } catch (e) {
            c = o
        }
        try {
            d = "function" == typeof clearTimeout ? clearTimeout : i
        } catch (e) {
            d = i
        }
    }();
    var p, h = [],
        g = !1,
        m = -1;
    f.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var o = 1; o < arguments.length; o++) t[o - 1] = arguments[o];
        h.push(new l(e, t)), 1 !== h.length || g || n(s)
    }, l.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, f.title = "browser", f.browser = !0, f.env = {}, f.argv = [], f.version = "", f.versions = {}, f.on = u, f.addListener = u, f.once = u, f.off = u, f.removeListener = u, f.removeAllListeners = u, f.emit = u, f.binding = function(e) {
        throw new Error("process.binding is not supported")
    }, f.cwd = function() {
        return "/en/"
    }, f.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }, f.umask = function() {
        return 0
    }
}, , , , , , , , , , , , , , , function(e, t) {
    "use strict";

    function o(e) {
        return e + (e.indexOf("?") !== -1 ? "&" : "?") + "_=" + Math.random()
    }

    function i(e, t) {
        var i = document.createElement("img"),
            r = {
                image: i,
                width: 0,
                height: 0,
                complete: !1,
                retries_left: n
            };
        return i.onload = function() {
            r.width = i.width, r.height = i.height, r.complete = !0, t && t()
        }, i.onerror = function() {
            r.retries_left ? (r.retries_left--, console.debug && console.debug("Failed to load `" + e + "`, retrying..."), e && (i.src = o(e), i.complete && onload())) : (r.error = !0, console.debug && console.debug("Failed to load `" + e + "`"))
        }, e ? (i.src = e, i.complete && onload()) : (r.complete = !0, t && t()), r
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t["default"] = i;
    var n = 5
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t["default"] = function(e, t, o, i, n, r, a) {
        var s, l, u, c, d, f = 2,
            p = (n || "50% 50%").split(" ");
        if ("fit" === r && (f = 0), !i && o) {
            if (!e) return {
                width: 0,
                height: 0,
                left: 0,
                top: 0
            };
            s = o, l = e + f
        } else {
            if (!o || !i) return {
                width: 0,
                height: 0,
                left: 0,
                top: 0
            };
            s = o / i, l = e + f
        }
        return u = Math.ceil(l / s), "fit" === r ? u > t + f && (u = t + f, l = Math.ceil(u * s)) : u < t + f && (u = t + f, l = Math.ceil(u * s)), !a && (l && l > o || u && u > i) && (l = o, u = Math.ceil(l / s)), c = Math.round((e - l) * parseFloat(p[0] || "50%") / 100), d = Math.round((t - u) * parseFloat(p[1] || p[0] || "50%") / 100), {
            width: l,
            height: u,
            left: c,
            top: d
        }
    }
}, , , , , , function(e, t, o) {
    "use strict";
    o(2), o(79), $(function() {
        $(".js-controller").on("pageChange", function(e) {
            "/en/design.html" === e.url && window.scrollTo(0, 0)
        })
    })
}, function(e, t, o) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
            function e(e, t) {
                for (var o = 0; o < t.length; o++) {
                    var i = t[o];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, o, i) {
                return o && e(t.prototype, o), i && e(t, i), t
            }
        }(),
        a = o(54),
        s = i(a),
        l = o(44),
        u = o(7),
        c = i(u),
        d = o(71),
        f = (i(d), o(80)),
        p = i(f),
        h = o(81),
        g = i(h),
        m = o(82),
        w = i(m),
        v = {
            foregroundUrl: "",
            backgroundUrl: ""
        },
        y = 1,
        b = 5,
        k = 10,
        S = 4e3,
        A = function() {
            function e(t, o) {
                n(this, e);
        var i = this.$controller = $(".js-controller"),
                    r = this.$container = t,
                    a = this.$screen = r.closest(".js-screen"),
                    s = this.options = $.extend({}, v, o),
                    u = this.uid = (0, l.generateUid)(),
                    d = $(document);
          //console.log("design in");
                this.running = !1, this.input = [0, 0], c["default"].getTouchSupport() || (this.tickBinded = this.tick.bind(this), this.renderer = new w["default"](r, s), this.particles = new g["default"], this.particles.forces.push(this.applyFrictionForce.bind(this)), i.on("beforeScreenChange." + u, this.beforeScreenChange.bind(this)), i.on("screenChange." + u, this.afterScreenChange.bind(this)), a.on("mousemove." + u, this.handleMouseMove.bind(this)), a.on("touchmove." + u, this.handleTouchMove.bind(this)), d.on("unloadScripts." + u, this.destroy.bind(this)))
            }
            return r(e, [{
                key: "applyFrictionForce",
                value: function(e) {
                    var t = this.delta / 160,
                        o = Math.max(0, 1 - t);
                    e.velocity.mult(o, o, 1.5 * o, 1)
                }
            }, {
                key: "destroy",
                value: function() {
                    var e = this.$controller,
                        t = this.$screen,
                        o = $(document),
                        i = this.uid,
                        n = this.particles,
                        r = this.renderer;
                    n.destroy(), r.destroy(), e.off("." + i), t.off("." + i), o.off("." + i), this.running = !1, this.$container = this.$screen = this.$controller = this.particles = this.renderer = this.options = null
                }
            }, {
                key: "tick",
                value: function() {
                    if (this.running) {
                        (0, s["default"])(this.tickBinded);
                        var e = Date.now(),
                            t = e - this.time;
                        this.time = e, this.delta = t, this.update(t), this.render(t)
                    }
                }
            }, {
                key: "update",
                value: function(e) {
                    var t = this.input,
                        o = this.particles,
                        i = t[0] || t[1];
                    if (i)
                        for (var n = 0; n < y; n++) {
                            var r = (new p["default"]).rand().normalize().mult(b),
                                a = new p["default"](t[0], t[1]);
                            a.x += 15 * r.x, a.y += 15 * r.y, r.x *= .15, r.y *= .15, r.z = Math.abs(r.z) / b * k, o.add({
                                position: a,
                                velocity: r,
                                ttl: S * (Math.random() / 4 + .75)
                            })
                        }
                    o.update(e)
                }
            }, {
                key: "render",
                value: function(e) {
                    this.renderer.render(this.particles.particles)
                }
            }, {
                key: "beforeScreenChange",
                value: function(e) {
                    "watercolor" === e.name && this.resume()
                }
            }, {
                key: "afterScreenChange",
                value: function(e) {
                    "watercolor" !== e.name && this.pause()
                }
            }, {
                key: "pause",
                value: function() {
                    this.running = !1
                }
            }, {
                key: "resume",
                value: function() {
                    this.running || (this.running = !0, this.time = Date.now(), (0, s["default"])(this.tickBinded))
                }
            }, {
                key: "handleMouseMove",
                value: function(e) {
                    this.input = [e.clientX, e.clientY]
                }
            }, {
                key: "handleTouchMove",
                value: function(e) {
                    this.input = [e.originalEvent.touches[0].pageX, e.originalEvent.touches[0].pageY]
                }
            }]), e
        }();
    t["default"] = A, $.fn.watercolor = (0, l.createPlugin)(A)
}, function(e, t) {
    "use strict";

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
            function e(e, t) {
                for (var o = 0; o < t.length; o++) {
                    var i = t[o];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, o, i) {
                return o && e(t.prototype, o), i && e(t, i), t
            }
        }(),
        n = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                o(this, e), this.x = parseFloat(t) || 0, this.y = parseFloat(i) || 0, this.z = parseFloat(n) || 0, this.t = parseFloat(r) || 0
            }
            return i(e, [{
                key: "clone",
                value: function() {
                    return new e(this.x, this.y, this.z, this.t)
                }
            }, {
                key: "length",
                value: function() {
                    var e = this.x,
                        t = this.y,
                        o = this.z,
                        i = this.t;
                    return Math.sqrt(e * e + t * t + o * o + i * i)
                }
            }, {
                key: "normalize",
                value: function() {
                    var e = this.length();
                    return e ? (this.x = this.x / e, this.y = this.y / e, this.z = this.z / e, this.t = this.t / e) : this.x = this.y = this.z = this.y = 0, this
                }
            }, {
                key: "hasLength",
                value: function() {
                    return this.x || this.y || this.z || this.t
                }
            }, {
                key: "add",
                value: function(e) {
                    return "number" == typeof e ? (this.x += e, this.y += e, this.z += e, this.t += e) : (this.x += e.x, this.y += e.y, this.z += e.z, this.t += e.t), this
                }
            }, {
                key: "mult",
                value: function(e) {
                    return "number" == typeof e ? (this.x *= e, this.y *= e, this.z *= e, this.t *= e) : (this.x *= e.x, this.y *= e.y, this.z *= e.z, this.t *= e.t), this
                }
            }, {
                key: "rand",
                value: function() {
                    return this.x = Math.random() - .5, this.y = Math.random() - .5, this.z = Math.random() - .5, this.t = Math.random() - .5, this
                }
            }]), e
        }();
    t["default"] = n
}, function(e, t) {
    "use strict";

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
            function e(e, t) {
                for (var o = 0; o < t.length; o++) {
                    var i = t[o];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, o, i) {
                return o && e(t.prototype, o), i && e(t, i), t
            }
        }(),
        n = function() {
            function e() {
                o(this, e), this.particles = [], this.forces = []
            }
            return i(e, [{
                key: "destroy",
                value: function() {
                    this.particles = this.forces = null
                }
            }, {
                key: "add",
                value: function(e) {
                    var t = $.extend({
                        position: e.position ? e.position.clone() : new Vector,
                        velocity: e.velocity ? e.velocity.clone() : new Vector,
                        idle: !e.velocity || !e.velocity.hasLength(),
                        ttl: 0,
                        age: 0,
                        index: Math.round(16 * Math.random())
                    }, e);
                    this.particles.push(t)
                }
            }, {
                key: "update",
                value: function(e) {
                    for (var t = this.particles, o = this.forces, i = t.length - 1; i >= 0; i--) {
                        var n = t[i];
                        if (n.ttl && (n.age += e, n.age > n.ttl)) t.splice(i, 1);
                        else if (!n.idle) {
                            for (var r = 0, a = o.length; r < a; r++) o[r](n);
                            n.position.add(n.velocity), n.idle = !n.velocity.hasLength()
                        }
                    }
                }
            }]), e
        }();
    t["default"] = n
}, function(e, t, o) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
            function e(e, t) {
                for (var o = 0; o < t.length; o++) {
                    var i = t[o];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, o, i) {
                return o && e(t.prototype, o), i && e(t, i), t
            }
        }(),
        a = o(44),
        s = o(71),
        l = i(s),
        u = o(80),
        c = (i(u), o(72)),
        d = i(c),
        f = .1,
        p = {
            foregroundUrl: "",
            backgroundUrl: "",
            particleUrl: "../images/particles.png"
        },
        h = function() {
            function e(t, o) {
                n(this, e);
                var i = (this.$container = t, this.options = $.extend({}, p, o)),
                    r = this.uid = (0, a.generateUid)(),
                    s = $(window);
                this.width = window.innerWidth, this.height = window.innerHeight, this.backgroundImage = (0, l["default"])(i.backgroundUrl), this.foregroundImage = (0, l["default"])(i.foregroundUrl), this.particleImage = (0, l["default"])(i.particleUrl), this.createElement(), s.on("resize." + r, this.handleResize.bind(this))
            }
            return r(e, [{
                key: "destroy",
                value: function() {
                    this.$container = this.options = null
                }
            }, {
                key: "handleResize",
                value: function(e) {
                    var t = this.$canvas;
                    t.get(0).width = this.width = window.innerWidth, t.get(0).height = this.height = window.innerHeight
                }
            }, {
                key: "createElement",
                value: function() {
                    var e = $("<canvas>").prependTo(this.$container);
                    e.get(0).width = this.width, e.get(0).height = this.height, this.$canvas = e, this.ctx = e.get(0).getContext("2d")
                }
            }, {
                key: "render",
                value: function(e) {
                    var t = this.ctx;
                    t.clearRect(0, 0, this.width, this.height), t.globalCompositeOperation = "source-over";
                    for (var o = 0, i = e.length; o < i; o++) this.drawParticle(e[o]);
                    this.drawImage()
                }
            }, {
                key: "drawParticle",
                value: function(e) {
                    var t = this.particleImage,
                        o = this.ctx,
                        i = f * Math.max(this.width / 1600, this.height / 1200);
                    if (t.complete) {
                        var n = 1 - e.age / e.ttl,
                            r = e.index,
                            a = 224,
                            s = 192,
                            l = r % 4 * a,
                            u = Math.floor(r / 4) * s,
                            c = e.position.z * i,
                            d = a * c / 2,
                            p = s * c / 2,
                            h = e.position.x - d / 2,
                            g = e.position.y - p / 2;
                        o.globalAlpha = n, o.drawImage(t.image, l, u, a, s, h, g, d, p)
                    }
                }
            }, {
                key: "drawImage",
                value: function() {
                    var e = this.backgroundImage,
                        t = this.foregroundImage,
                        o = this.ctx,
                        i = (0, d["default"])(this.width, this.height, e.width, e.height, "50% 50%", "cover");
                    t.complete && (o.globalAlpha = 1, o.globalCompositeOperation = "source-in", o.drawImage(t.image, 0, 0, t.width, t.height, i.left, i.top, i.width, i.height)), e.complete && (o.globalAlpha = 1, o.globalCompositeOperation = "destination-over", o.drawImage(e.image, 0, 0, e.width, e.height, i.left, i.top, i.width, i.height))
                }
            }]), e
        }();
    t["default"] = h
}]);