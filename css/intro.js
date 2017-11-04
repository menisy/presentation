webpackJsonp([5], [function(e, t, n) {
    e.exports = n(84)
}, , function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    var a = n(3),
        r = i(a);
    n(4);
    var o = n(5),
        s = i(o),
        l = n(6),
        u = i(l),
        c = n(7),
        d = i(c);
    n(8);
    var f = n(9),
        h = i(f),
        p = n(13),
        m = i(p);
    n(14), window.$ = window.jQuery = r["default"], r["default"].extend(r["default"].easing, u["default"]), r["default"].durationFast = 200, r["default"].durationNormal = 400, r["default"].durationSlow = 600, r["default"].easeIn = "easeInExpo", r["default"].easeOut = "easeOutExpo", r["default"].easeInOut = "easeInOutExpo", (0, h["default"])({
        language: "ru",
        backgroundColor: "#c98454",
        browserSupport: {
            Chrome: 45,
            IE: 13,
            Safari: 9,
            "Mobile Safari": 8,
            Firefox: 43
        }
    }), (0, m["default"])(), (0, s["default"])(), d["default"].getTouchSupport() && (0, r["default"])("html").removeClass("has-hover").addClass("no-hover"), d["default"].isIOS() && (0, r["default"])("html").addClass("ios"), d["default"].is_iPad() && (0, r["default"])("html").addClass("ipad"), d["default"].isMac() && (0, r["default"])("html").addClass("mac"), (0, r["default"])(function() {
        r["default"].app.parse((0, r["default"])("body"))
    })
}, , function(e, t, n) {
    var i, a, r;
    /*! jquery.finger - v0.1.6 - 2016-10-05
     * https://github.com/ngryman/jquery.finger
     * Copyright (c) 2016 Nicolas Gryman; Licensed MIT */
    ! function(o) {
        a = [n(3)], i = o, r = "function" == typeof i ? i.apply(t, a) : i, !(void 0 !== r && (e.exports = r))
    }(function(e) {
        function t(n) {
            n.preventDefault(), e.event.remove(b, "click", t)
        }

        function n(e, t) {
            return (m ? t.originalEvent.touches[0] : t)["page" + e.toUpperCase()]
        }

        function i(n, i, a) {
            var s = e.Event(i, x);
            e.event.trigger(s, {
                originalEvent: n
            }, n.target), s.isDefaultPrevented() && (~i.indexOf("tap") && !m ? e.event.add(b, "click", t) : n.preventDefault()), a && (e.event.remove(b, y + "." + w, r), e.event.remove(b, v + "." + w, o))
        }

        function a(a) {
            if (!(a.which > 1)) {
                var c = a.timeStamp || +new Date;
                l != c && (l = c, k.x = x.x = n("x", a), k.y = x.y = n("y", a), k.time = c, k.target = a.target, x.orientation = null, x.end = !1, s = !1, u = setTimeout(function() {
                    i(a, "press", !0)
                }, S.pressDuration), e.event.add(b, y + "." + w, r), e.event.add(b, v + "." + w, o), S.preventDefault && (a.preventDefault(), e.event.add(b, "click", t)))
            }
        }

        function r(t) {
            if (x.x = n("x", t), x.y = n("y", t), x.dx = x.x - k.x, x.dy = x.y - k.y, x.adx = Math.abs(x.dx), x.ady = Math.abs(x.dy), s = x.adx > S.motionThreshold || x.ady > S.motionThreshold) {
                for (clearTimeout(u), x.orientation || (x.adx > x.ady ? (x.orientation = "horizontal", x.direction = x.dx > 0 ? 1 : -1) : (x.orientation = "vertical", x.direction = x.dy > 0 ? 1 : -1)); t.target && t.target !== k.target;) t.target = t.target.parentNode;
                return t.target !== k.target ? (t.target = k.target, void o.call(this, e.Event(v + "." + w, t))) : void i(t, "drag")
            }
        }

        function o(e) {
            var t, n = e.timeStamp || +new Date,
                a = n - k.time;
            if (clearTimeout(u), s) e.target = k.target, a < S.flickDuration && i(e, "flick"), x.end = !0, t = "drag";
            else if (e.target === k.target) {
                var r = c === e.target && n - d < S.doubleTapInterval;
                t = r ? "doubletap" : "tap", c = r ? null : k.target, d = n
            }
            t && i(e, t, !0)
        }
        var s, l, u, c, d, f = navigator.userAgent,
            h = /chrome/i.exec(f),
            p = /android/i.exec(f),
            m = "ontouchstart" in window && !(h && !p),
            g = m ? "touchstart" : "mousedown",
            v = m ? "touchend touchcancel" : "mouseup mouseleave",
            y = m ? "touchmove" : "mousemove",
            w = "finger",
            b = e("html")[0],
            k = {},
            x = {},
            S = e.Finger = {
                pressDuration: 300,
                doubleTapInterval: 300,
                flickDuration: 150,
                motionThreshold: 5
            };
        return e.event.add(b, g + "." + w, a), e.each("tap doubletap press drag flick".split(" "), function(t, n) {
            e.fn[n] = function(e) {
                return e ? this.on(n, e) : this.trigger(n)
            }
        }), S
    })
}, function(e, t) { /*! npm.im/object-fit-images */
    "use strict";

    function n(e) {
        for (var t, n = getComputedStyle(e).fontFamily, i = {}; null !== (t = l.exec(n));) i[t[1]] = t[2];
        return i
    }

    function i(e, t) {
        if (!e[s].parsingSrcset) {
            var i = n(e);
            if (i["object-fit"] = i["object-fit"] || "fill", !e[s].s) {
                if ("fill" === i["object-fit"]) return;
                if (!e[s].skipTest && c && !i["object-position"]) return
            }
            var r = e[s].ios7src || e.currentSrc || e.src;
            if (t) r = t;
            else if (e.srcset && !f && window.picturefill) {
                var o = window.picturefill._;
                e[s].parsingSrcset = !0, e[o.ns] && e[o.ns].evaled || o.fillImg(e, {
                    reselect: !0
                }), e[o.ns].curSrc || (e[o.ns].supported = !1, o.fillImg(e, {
                    reselect: !0
                })), delete e[s].parsingSrcset, r = e[o.ns].curSrc || r
            }
            if (e[s].s) e[s].s = r, t && (e[s].srcAttr = t);
            else {
                e[s] = {
                    s: r,
                    srcAttr: t || h.call(e, "src"),
                    srcsetAttr: e.srcset
                }, e.src = s;
                try {
                    e.srcset && (e.srcset = "", Object.defineProperty(e, "srcset", {
                        value: e[s].srcsetAttr
                    })), a(e)
                } catch (l) {
                    e[s].ios7src = r
                }
            }
            e.style.backgroundImage = 'url("' + r + '")', e.style.backgroundPosition = i["object-position"] || "center", e.style.backgroundRepeat = "no-repeat", /scale-down/.test(i["object-fit"]) ? (e[s].i || (e[s].i = new Image, e[s].i.src = r), function u() {
                return e[s].i.naturalWidth ? void(e[s].i.naturalWidth > e.width || e[s].i.naturalHeight > e.height ? e.style.backgroundSize = "contain" : e.style.backgroundSize = "auto") : void setTimeout(u, 100)
            }()) : e.style.backgroundSize = i["object-fit"].replace("none", "auto").replace("fill", "100% 100%")
        }
    }

    function a(e) {
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
            return !this[s] || "src" !== e && "srcset" !== e ? h.call(this, e) : this[s][e + "Attr"]
        }, HTMLImageElement.prototype.setAttribute = function(e, t) {
            !this[s] || "src" !== e && "srcset" !== e ? p.call(this, e, t) : this["src" === e ? "src" : e + "Attr"] = String(t)
        })
    }

    function o(e, t) {
        var n = !m && !e;
        if (t = t || {}, e = e || "img", d && !t.skipTest) return !1;
        "string" == typeof e ? e = document.querySelectorAll("img") : "length" in e || (e = [e]);
        for (var a = 0; a < e.length; a++) e[a][s] = e[a][s] || t, i(e[a]);
        n && (document.body.addEventListener("load", function(e) {
            "IMG" === e.target.tagName && o(e.target, {
                skipTest: t.skipTest
            })
        }, !0), m = !0, e = "img"), t.watchMQ && window.addEventListener("resize", o.bind(null, e, {
            skipTest: t.skipTest
        }))
    }
    var s = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
        l = /(object-fit|object-position)\s*:\s*([-\w\s%]+)/g,
        u = new Image,
        c = "object-fit" in u.style,
        d = "object-position" in u.style,
        f = "string" == typeof u.currentSrc,
        h = u.getAttribute,
        p = u.setAttribute,
        m = !1;
    o.supportsObjectFit = c, o.supportsObjectPosition = d, r(), e.exports = o
}, function(e, t) {
    "use strict";

    function n(e, t, n, i, a) {
        return 0 === t ? n : i * Math.pow(2, 10 * (t / a - 1)) + n
    }

    function i(e, t, n, i, a) {
        return t === a ? n + i : i * (-Math.pow(2, -10 * t / a) + 1) + n
    }

    function a(e, t, n, i, a) {
        return 0 === t ? n : t === a ? n + i : (t /= a / 2) < 1 ? i / 2 * Math.pow(2, 10 * (t - 1)) + n : i / 2 * (-Math.pow(2, -10 * --t) + 2) + n
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t["default"] = {
        easeInExpo: n,
        easeOutExpo: i,
        easeInOutExpo: a
    }
}, , function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        r = n(3),
        o = i(r);
    o["default"].app = {
        options: {
            id: "id",
            namespace: "plugin"
        },
        instances: {},
        parse: function(e, t) {
            var n = [],
                i = null,
                a = null,
                r = 0,
                s = 0;
            for (o["default"].extend(this.options, t || {}), e.data(this.options.namespace) && (i = this.factory(e), i && n.push(i)), a = e.find("[data-" + this.options.namespace + "]"), s = a.length, r = 0; r < s; r++) i = this.factory(a.eq(r)), i && n.push(i);
            return n
        },
        cleanup: function(e) {
            e.find("[data-" + this.options.namespace + "]").each(function() {
                o["default"].app.destroy((0, o["default"])(this)), (0, o["default"])(this).triggerHandler("app-cleanup")
            })
        },
        destroy: function(e) {
            var t, n = null;
            e instanceof o["default"] && (n = e, e = e.attr("data-" + this.options.id)), t = this.instances[e], t && ("function" == typeof t.destroy && t.destroy(), t.element && (t.element.removeData("instance"), t.element.find("[data-" + this.options.id + "]").each(function() {
                o["default"].app.destroy((0, o["default"])(this))
            })), delete this.instances[e])
        },
        factory: function(e, t) {
            var n = n || {},
                i = n[this.options.namespace] || e.data(this.options.namespace) || "",
                r = n.id || e.data("id") || e.attr("id") || "app_" + +new Date + String(~~(9999 * Math.random())),
                s = window,
                l = !1;
            if (n.id = r, n[this.options.namespace] = i, e.data("instance")) return null;
            if ("function" == typeof i) s = i;
            else {
                if ("string" != typeof i || !i) return null;
                0 === i.indexOf("$.fn.") || 0 === i.indexOf("jQuery.fn.") ? (s = i.replace(/^[^\.]\.fn\./i, ""), l = !0) : o["default"].each(i.split("."), function(e, t) {
                    if (s = s[t], !s) return !1
                })
            }
            if ("function" == typeof s || l && e[s]) {
                if (n = o["default"].extend({}, e.data(), n || {}), l) {
                    if ("function" == typeof e[s]) {
                        var u = e[s](n),
                            c = e[s].namespace;
                        s = u === e && c && "string" == typeof c ? e.data(c) || u : u
                    }
                } else s = s(e, n);
                if ("object" === ("undefined" == typeof s ? "undefined" : a(s)) && s === e) e.data("instance", "plugin");
                else if ("object" === ("undefined" == typeof s ? "undefined" : a(s)) && s !== e) return e.attr("data-" + this.options.id, r), e.data("instance", s), this.instances[r] = s, s
            }
            return null
        },
        get: function(e) {
            if ("object" === ("undefined" == typeof e ? "undefined" : a(e))) {
                var t = e.data("instance");
                if (t) return t;
                e = e.attr("data-" + this.options.id) || e.attr("id")
            }
            if (e) {
                if (this.instances[e]) return this.instances[e];
                var n = (0, o["default"])("[data-" + this.options.id + '="' + e + '"]');
                if (n.length) return this.factory(n), this.instances[e] || null
            }
            return null
        }
    }, t["default"] = o["default"].app
}, function(e, t, n) {
    var i = n(10),
        a = n(12);
    e.exports = function(e) {
        var t = function() {
                var t = new i(window.navigator.userAgent).getResult(),
                    n = document.getElementById("outdated");
                e = e || {};
                var r = window.navigator.language || window.navigator.userLanguage,
                    o = e.browserSupport || {
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
                var h;
                e.requireChromeOnAndroid && (h = f && "Chrome" !== t.browser.name), "iOS" === t.os.name && (d = "appStore");
                var p = !0,
                    m = function(e) {
                        n.style.opacity = e / 100, n.style.filter = "alpha(opacity=" + e + ")"
                    },
                    g = function(e) {
                        m(e), 1 === e && (n.style.display = "block"), 100 === e && (p = !0)
                    },
                    v = function() {
                        var e = t.browser.name,
                            n = t.browser.major,
                            i = !1;
                        return o[e] && n < o[e] && (i = !0), i
                    },
                    y = function(e) {
                        if (!e) return !0;
                        var t = document.createElement("div"),
                            n = "Khtml Ms O Moz Webkit".split(" "),
                            i = n.length;
                        if (t.style[e]) return !0;
                        for (e = e.replace(/^[a-z]/, function(e) {
                                return e.toUpperCase()
                            }); i--;)
                            if (t.style[n[i] + e]) return !0;
                        return !1
                    },
                    w = function(e) {
                        return function() {
                            g(e)
                        }
                    },
                    b = function() {
                        var e = document.getElementById("buttonCloseUpdateBrowser"),
                            t = document.getElementById("buttonUpdateBrowser");
                        n.style.backgroundColor = l, n.style.color = u, n.children[0].style.color = u, n.children[1].style.color = u, t && (t.style.color = u, t.style.borderColor && (t.style.borderColor = u), t.onmouseover = function() {
                            this.style.color = l, this.style.backgroundColor = u
                        }, t.onmouseout = function() {
                            this.style.color = u, this.style.backgroundColor = l
                        }), e.style.color = u, e.onmousedown = function() {
                            return n.style.display = "none", !1
                        }
                    },
                    k = function(e) {
                        var t = a[e] || a.en,
                            n = {
                                web: "<p>" + t.update.web + '<a id="buttonUpdateBrowser" href="' + t.url + '">' + t.callToAction + "</a></p>",
                                googlePlay: "<p>" + t.update.googlePlay + '<a id="buttonUpdateBrowser" href="https://play.google.com/store/apps/details?id=com.android.chrome">' + t.callToAction + "</a></p>",
                                appStore: "<p>" + t.update[d] + "</p>"
                            },
                            i = n[d];
                        return "<h6>" + t.outOfDate + "</h6>" + i + '<p class="last"><a href="#" id="buttonCloseUpdateBrowser" title="' + t.close + '">×</a></p>'
                    };
                if (v() || !y(s) || h) {
                    if (p && "1" !== n.style.opacity) {
                        p = !1;
                        for (var x = 1; x <= 100; x++) setTimeout(w(x), 8 * x)
                    }
                    var S = document.getElementById("outdated");
                    S.innerHTML = k(c), b()
                }
            },
            n = window.onload;
        "function" != typeof window.onload ? window.onload = t : window.onload = function() {
            n && n(), t()
        }
    }
}, function(e, t, n) {
    var i;
    ! function(a, r) {
        "use strict";
        var o = "0.7.12",
            s = "",
            l = "?",
            u = "function",
            c = "undefined",
            d = "object",
            f = "string",
            h = "major",
            p = "model",
            m = "name",
            g = "type",
            v = "vendor",
            y = "version",
            w = "architecture",
            b = "console",
            k = "mobile",
            x = "tablet",
            S = "smarttv",
            C = "wearable",
            _ = "embedded",
            j = {
                extend: function(e, t) {
                    var n = {};
                    for (var i in e) t[i] && t[i].length % 2 === 0 ? n[i] = t[i].concat(e[i]) : n[i] = e[i];
                    return n
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
            T = {
                rgx: function() {
                    for (var e, t, n, i, a, o, s, l = 0, f = arguments; l < f.length && !o;) {
                        var h = f[l],
                            p = f[l + 1];
                        if (typeof e === c) {
                            e = {};
                            for (i in p) p.hasOwnProperty(i) && (a = p[i], typeof a === d ? e[a[0]] = r : e[a] = r)
                        }
                        for (t = n = 0; t < h.length && !o;)
                            if (o = h[t++].exec(this.getUA()))
                                for (i = 0; i < p.length; i++) s = o[++n], a = p[i], typeof a === d && a.length > 0 ? 2 == a.length ? typeof a[1] == u ? e[a[0]] = a[1].call(this, s) : e[a[0]] = a[1] : 3 == a.length ? typeof a[1] !== u || a[1].exec && a[1].test ? e[a[0]] = s ? s.replace(a[1], a[2]) : r : e[a[0]] = s ? a[1].call(this, s, a[2]) : r : 4 == a.length && (e[a[0]] = s ? a[3].call(this, s.replace(a[1], a[2])) : r) : e[a] = s ? s : r;
                        l += 2
                    }
                    return e
                },
                str: function(e, t) {
                    for (var n in t)
                        if (typeof t[n] === d && t[n].length > 0) {
                            for (var i = 0; i < t[n].length; i++)
                                if (j.has(t[n][i], e)) return n === l ? r : n
                        } else if (j.has(t[n], e)) return n === l ? r : n;
                    return e
                }
            },
            O = {
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
            P = {
                browser: [
                    [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i],
                    [m, y],
                    [/(opios)[\/\s]+([\w\.]+)/i],
                    [
                        [m, "Opera Mini"], y
                    ],
                    [/\s(opr)\/([\w\.]+)/i],
                    [
                        [m, "Opera"], y
                    ],
                    [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs)\/([\w\.-]+)/i],
                    [m, y],
                    [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
                    [
                        [m, "IE"], y
                    ],
                    [/(edge)\/((\d+)?[\w\.]+)/i],
                    [m, y],
                    [/(yabrowser)\/([\w\.]+)/i],
                    [
                        [m, "Yandex"], y
                    ],
                    [/(comodo_dragon)\/([\w\.]+)/i],
                    [
                        [m, /_/g, " "], y
                    ],
                    [/(micromessenger)\/([\w\.]+)/i],
                    [
                        [m, "WeChat"], y
                    ],
                    [/xiaomi\/miuibrowser\/([\w\.]+)/i],
                    [y, [m, "MIUI Browser"]],
                    [/\swv\).+(chrome)\/([\w\.]+)/i],
                    [
                        [m, /(.+)/, "$1 WebView"], y
                    ],
                    [/android.+samsungbrowser\/([\w\.]+)/i, /android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
                    [y, [m, "Android Browser"]],
                    [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i, /(qqbrowser)[\/\s]?([\w\.]+)/i],
                    [m, y],
                    [/(uc\s?browser)[\/\s]?([\w\.]+)/i, /ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i, /juc.+(ucweb)[\/\s]?([\w\.]+)/i],
                    [
                        [m, "UCBrowser"], y
                    ],
                    [/(dolfin)\/([\w\.]+)/i],
                    [
                        [m, "Dolphin"], y
                    ],
                    [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
                    [
                        [m, "Chrome"], y
                    ],
                    [/;fbav\/([\w\.]+);/i],
                    [y, [m, "Facebook"]],
                    [/fxios\/([\w\.-]+)/i],
                    [y, [m, "Firefox"]],
                    [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
                    [y, [m, "Mobile Safari"]],
                    [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
                    [y, m],
                    [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                    [m, [y, T.str, O.browser.oldsafari.version]],
                    [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i],
                    [m, y],
                    [/(navigator|netscape)\/([\w\.-]+)/i],
                    [
                        [m, "Netscape"], y
                    ],
                    [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]+)*/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i],
                    [m, y]
                ],
                cpu: [
                    [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                    [
                        [w, "amd64"]
                    ],
                    [/(ia32(?=;))/i],
                    [
                        [w, j.lowerize]
                    ],
                    [/((?:i[346]|x)86)[;\)]/i],
                    [
                        [w, "ia32"]
                    ],
                    [/windows\s(ce|mobile);\sppc;/i],
                    [
                        [w, "arm"]
                    ],
                    [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                    [
                        [w, /ower/, "", j.lowerize]
                    ],
                    [/(sun4\w)[;\)]/i],
                    [
                        [w, "sparc"]
                    ],
                    [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],
                    [
                        [w, j.lowerize]
                    ]
                ],
                device: [
                    [/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],
                    [p, v, [g, x]],
                    [/applecoremedia\/[\w\.]+ \((ipad)/],
                    [p, [v, "Apple"],
                        [g, x]
                    ],
                    [/(apple\s{0,1}tv)/i],
                    [
                        [p, "Apple TV"],
                        [v, "Apple"]
                    ],
                    [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i],
                    [v, p, [g, x]],
                    [/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],
                    [p, [v, "Amazon"],
                        [g, x]
                    ],
                    [/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],
                    [
                        [p, T.str, O.device.amazon.model],
                        [v, "Amazon"],
                        [g, k]
                    ],
                    [/\((ip[honed|\s\w*]+);.+(apple)/i],
                    [p, v, [g, k]],
                    [/\((ip[honed|\s\w*]+);/i],
                    [p, [v, "Apple"],
                        [g, k]
                    ],
                    [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i],
                    [v, p, [g, k]],
                    [/\(bb10;\s(\w+)/i],
                    [p, [v, "BlackBerry"],
                        [g, k]
                    ],
                    [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],
                    [p, [v, "Asus"],
                        [g, x]
                    ],
                    [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
                    [
                        [v, "Sony"],
                        [p, "Xperia Tablet"],
                        [g, x]
                    ],
                    [/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i],
                    [
                        [v, "Sony"],
                        [p, "Xperia Phone"],
                        [g, k]
                    ],
                    [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
                    [v, p, [g, b]],
                    [/android.+;\s(shield)\sbuild/i],
                    [p, [v, "Nvidia"],
                        [g, b]
                    ],
                    [/(playstation\s[34portablevi]+)/i],
                    [p, [v, "Sony"],
                        [g, b]
                    ],
                    [/(sprint\s(\w+))/i],
                    [
                        [v, T.str, O.device.sprint.vendor],
                        [p, T.str, O.device.sprint.model],
                        [g, k]
                    ],
                    [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],
                    [v, p, [g, x]],
                    [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w+)*/i, /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],
                    [v, [p, /_/g, " "],
                        [g, k]
                    ],
                    [/(nexus\s9)/i],
                    [p, [v, "HTC"],
                        [g, x]
                    ],
                    [/(nexus\s6p)/i],
                    [p, [v, "Huawei"],
                        [g, k]
                    ],
                    [/(microsoft);\s(lumia[\s\w]+)/i],
                    [v, p, [g, k]],
                    [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
                    [p, [v, "Microsoft"],
                        [g, b]
                    ],
                    [/(kin\.[onetw]{3})/i],
                    [
                        [p, /\./g, " "],
                        [v, "Microsoft"],
                        [g, k]
                    ],
                    [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w+)*/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i],
                    [p, [v, "Motorola"],
                        [g, k]
                    ],
                    [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                    [p, [v, "Motorola"],
                        [g, x]
                    ],
                    [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
                    [
                        [v, j.trim],
                        [p, j.trim],
                        [g, S]
                    ],
                    [/hbbtv.+maple;(\d+)/i],
                    [
                        [p, /^/, "SmartTV"],
                        [v, "Samsung"],
                        [g, S]
                    ],
                    [/\(dtv[\);].+(aquos)/i],
                    [p, [v, "Sharp"],
                        [g, S]
                    ],
                    [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
                    [
                        [v, "Samsung"], p, [g, x]
                    ],
                    [/smart-tv.+(samsung)/i],
                    [v, [g, S], p],
                    [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i],
                    [
                        [v, "Samsung"], p, [g, k]
                    ],
                    [/sie-(\w+)*/i],
                    [p, [v, "Siemens"],
                        [g, k]
                    ],
                    [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i],
                    [
                        [v, "Nokia"], p, [g, k]
                    ],
                    [/android\s3\.[\s\w;-]{10}(a\d{3})/i],
                    [p, [v, "Acer"],
                        [g, x]
                    ],
                    [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
                    [
                        [v, "LG"], p, [g, x]
                    ],
                    [/(lg) netcast\.tv/i],
                    [v, p, [g, S]],
                    [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w+)*/i],
                    [p, [v, "LG"],
                        [g, k]
                    ],
                    [/android.+(ideatab[a-z0-9\-\s]+)/i],
                    [p, [v, "Lenovo"],
                        [g, x]
                    ],
                    [/linux;.+((jolla));/i],
                    [v, p, [g, k]],
                    [/((pebble))app\/[\d\.]+\s/i],
                    [v, p, [g, C]],
                    [/android.+;\s(glass)\s\d/i],
                    [p, [v, "Google"],
                        [g, C]
                    ],
                    [/android.+(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w)?)\s+build/i],
                    [
                        [p, /_/g, " "],
                        [v, "Xiaomi"],
                        [g, k]
                    ],
                    [/android.+a000(1)\s+build/i],
                    [p, [v, "OnePlus"],
                        [g, k]
                    ],
                    [/\s(tablet)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
                    [
                        [g, j.lowerize], v, p
                    ]
                ],
                engine: [
                    [/windows.+\sedge\/([\w\.]+)/i],
                    [y, [m, "EdgeHTML"]],
                    [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
                    [m, y],
                    [/rv\:([\w\.]+).*(gecko)/i],
                    [y, m]
                ],
                os: [
                    [/microsoft\s(windows)\s(vista|xp)/i],
                    [m, y],
                    [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
                    [m, [y, T.str, O.os.windows.version]],
                    [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                    [
                        [m, "Windows"],
                        [y, T.str, O.os.windows.version]
                    ],
                    [/\((bb)(10);/i],
                    [
                        [m, "BlackBerry"], y
                    ],
                    [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i, /linux;.+(sailfish);/i],
                    [m, y],
                    [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],
                    [
                        [m, "Symbian"], y
                    ],
                    [/\((series40);/i],
                    [m],
                    [/mozilla.+\(mobile;.+gecko.+firefox/i],
                    [
                        [m, "Firefox OS"], y
                    ],
                    [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i],
                    [m, y],
                    [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                    [
                        [m, "Chromium OS"], y
                    ],
                    [/(sunos)\s?([\w\.]+\d)*/i],
                    [
                        [m, "Solaris"], y
                    ],
                    [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],
                    [m, y],
                    [/(haiku)\s(\w+)/i],
                    [m, y],
                    [/(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i],
                    [
                        [m, "iOS"],
                        [y, /_/g, "."]
                    ],
                    [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i],
                    [
                        [m, "Mac OS"],
                        [y, /_/g, "."]
                    ],
                    [/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]+)*/i],
                    [m, y]
                ]
            },
            A = function(e, t) {
                if (!(this instanceof A)) return new A(e, t).getResult();
                var n = e || (a && a.navigator && a.navigator.userAgent ? a.navigator.userAgent : s),
                    i = t ? j.extend(P, t) : P;
                return this.getBrowser = function() {
                    var e = T.rgx.apply(this, i.browser);
                    return e.major = j.major(e.version), e
                }, this.getCPU = function() {
                    return T.rgx.apply(this, i.cpu)
                }, this.getDevice = function() {
                    return T.rgx.apply(this, i.device)
                }, this.getEngine = function() {
                    return T.rgx.apply(this, i.engine)
                }, this.getOS = function() {
                    return T.rgx.apply(this, i.os)
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
                    return n
                }, this.setUA = function(e) {
                    return n = e, this
                }, this
            };
        A.VERSION = o, A.BROWSER = {
            NAME: m,
            MAJOR: h,
            VERSION: y
        }, A.CPU = {
            ARCHITECTURE: w
        }, A.DEVICE = {
            MODEL: p,
            VENDOR: v,
            TYPE: g,
            CONSOLE: b,
            MOBILE: k,
            SMARTTV: S,
            TABLET: x,
            WEARABLE: C,
            EMBEDDED: _
        }, A.ENGINE = {
            NAME: m,
            VERSION: y
        }, A.OS = {
            NAME: m,
            VERSION: y
        }, typeof t !== c ? (typeof e !== c && e.exports && (t = e.exports = A), t.UAParser = A) : "function" === u && n(11) ? (i = function() {
            return A
        }.call(t, n, t, e), !(i !== r && (e.exports = i))) : a.UAParser = A;
        var M = a.jQuery || a.Zepto;
        if (typeof M !== c) {
            var $ = new A;
            M.ua = $.getResult(), M.ua.get = function() {
                return $.getUA()
            }, M.ua.set = function(e) {
                $.setUA(e);
                var t = $.getResult();
                for (var n in t) M.ua[n] = t[n]
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
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    } /*! svg4everybody v2.0.0 | github.com/jonathantneal/svg4everybody */
    function a(e) {
        e.onreadystatechange = function() {
            if (4 === e.readyState) {
                var t = document.createElement("x");
                t.innerHTML = e.responseText;
                var n = t.getElementsByTagName("svg");
                n.length && (n[0].setAttribute("class", "out-of-screen"), document.body.insertBefore(n[0], document.body.firstChild))
            }
        }, e.onreadystatechange()
    }

    function r(e) {
        e = e || {};
        var t = (e.element || document).getElementsByTagName("use"),
            n = "polyfill" in e ? e.polyfill : /\bEdge\/12\b|\bTrident\/[567]\b|\bVersion\/7.0 Safari\b/.test(navigator.userAgent) || (navigator.userAgent.match(/AppleWebKit\/(\d+)/) || [])[1] < 537;
        e.validate;
        if (n)
            for (var i, r, o = 0, s = t.length; o < s; o++) {
                for (i = t[o], r = i ? i.parentNode : null; r && !/svg/i.test(r.nodeName);) r = r.parentNode;
                if (r && /svg/i.test(r.nodeName)) {
                    var u = i.getAttribute("xlink:href"),
                        c = u.split("#"),
                        d = c[0],
                        f = c[1];
                    if (i.setAttribute("xlink:href", "#" + f), d.length && !l[d]) {
                        var h = new XMLHttpRequest;
                        h.open("GET", d), h.send(), a(h), l[d] = !0
                    }
                }
            }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(3),
        s = i(o),
        l = {};
    s["default"].fn.svg4everybody = function() {
        return this.each(function() {
            r({
                element: this
            })
        })
    }, t["default"] = r
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function a(e) {
        return e.replace(m, function(e, t) {
            return t.toUpperCase()
        })
    }

    function r(e, t) {
        (0, f["default"])(t, function(t) {
            t.cssText.indexOf("vh") !== -1 && ! function() {
                var n = [];
                t.style ? ((0, f["default"])(h, function(e) {
                    if (t.style[e]) {
                        var i = t.style[e].match(p);
                        i && n.push({
                            name: a(e),
                            value: parseFloat(i[1])
                        })
                    }
                }), n.length && e.push({
                    rule: t,
                    properties: n
                })) : t.cssRules && r(e, t.cssRules)
            }()
        })
    }

    function o() {
        var e = [];
        return (0, f["default"])(document.styleSheets, function(t) {
            r(e, t.cssRules)
        }), e
    }

    function s(e, t) {
        (0, f["default"])(e, function(e) {
            (0, f["default"])(e.properties, function(n) {
                e.rule.style[n.name] = Math.round(t * n.value / 100) + "px"
            })
        })
    }

    function l(e, t) {
        var n = null,
            i = null,
            a = function() {
                n = null, clearInterval(i)
            };
        return function() {
            n || (n = setTimeout(a, t), i = setInterval(e, 60))
        }
    }
    var u = n(3),
        c = i(u),
        d = n(15),
        f = i(d),
        h = ["min-height", "height", "max-height"],
        p = /(\d+)vh/,
        m = /-([a-z])/g;
    (0, c["default"])(function() {
        /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream && ! function() {
            var e = function() {
                    var e = window.innerHeight;
                    e !== n && (n = e, s(t, e))
                },
                t = o(),
                n = window.innerHeight;
            s(t, n), (0, c["default"])(window).on("resize", l(e, 1e3)), setTimeout(e, 16), e()
        }()
    })
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        o = n(3),
        s = i(o),
        l = n(44);
    n(45), n(46);
    var u = n(47),
        c = i(u),
        d = function() {
            function e(t, n) {
                a(this, e);
                var i = (this.options = s["default"].extend({}, n), (0, s["default"])(".js-controller")),
                    r = this.$container = (0, s["default"])(t),
                    o = this.$toggler = (0, s["default"])(".js-menu"),
                    u = this.$logo = (0, s["default"])(".js-logo"),
                    c = (this.$hide = (0, s["default"])(".js-back"), this.uid = (0, l.generateUid)());
                this.theme = {}, this.visible = !1, o.on("tap." + c, this.toggle.bind(this)), r.on("mousewheel." + c, function(e) {
                    return e.stopPropagation()
                }), r.on("tap." + c, "nav a[href]", this.hide.bind(this)), u.on("tap." + c, this.hide.bind(this)), i.on("pageChange." + c, this.handlePageChange.bind(this));
                var d = this;
                (0, s["default"])(document).keyup(function(e) {
                    27 == e.keyCode && d.visible && d.toggle()
                })
            }
            return r(e, [{
                key: "toggle",
                value: function() {
                    this.visible ? this.hide() : this.show()
                }
            }, {
                key: "show",
                value: function() {
                    this.visible = !0, c["default"].allowPageChange = !1, c["default"].allowSlideChange = !1, this.setRedTheme(), this.transitionMenuIn(), this.showBackground(), this.showCloseIcon();
                    var e = this.$hide.add((0, s["default"])(".js-apartment-navigation"));
                    e.addClass("fade disable-interactions")
                }
            }, {
                key: "hide",
                value: function() {
                    this.visible = !1, c["default"].allowPageChange = !0, c["default"].allowSlideChange = !0, this.unsetRedTheme(), this.transitionMenuOut(), this.showBurgerIcon();
                    var e = this.$hide.add((0, s["default"])(".js-apartment-navigation"));
                    e.removeClass("fade disable-interactions")
                }
            }, {
                key: "showBackground",
                value: function() {
                    var e = this.$container.find("img[data-src]");
                    e.lazyload()
                }
            }, {
                key: "showCloseIcon",
                value: function() {
                    var e = this.$toggler;
                    e.find(".icon-close").removeClass("hidden"), e.find(".icon-burger").addClass("hidden")
                }
            }, {
                key: "showBurgerIcon",
                value: function() {
                    var e = this.$toggler;
                    e.find(".icon-burger").removeClass("hidden"), e.find(".icon-close").addClass("hidden")
                }
            }, {
                key: "handlePageChange",
                value: function(e) {
                    var t = this.$container,
                        n = t.find("a[href]");
                    n.removeClass("active").each(function(t, n) {
                        var i = (0, s["default"])(n);
                        i.attr("href") === e.url ? i.addClass("active") : "/en/apartments.html" === i.attr("href") && "apartments" === e.url.split("/en/")[1] && i.addClass("active")
                    })
                }
            }, {
                key: "transitionMenuIn",
                value: function() {
                    var e = this.$container;
                    e.addClass("fade appear animate-slow").removeClass("hidden"), setTimeout(function() {
                        e.addClass("in").transitionend().done(function() {
                            e.removeClass("appear fade in animate-slow")
                        })
                    })
                }
            }, {
                key: "transitionMenuOut",
                value: function() {
                    var e = this.$container;
                    e.addClass("fade in"), setTimeout(function() {
                        e.removeClass("in").transitionend().done(function() {
                            e.addClass("hidden").removeClass("fade").removeClass("appear")
                        })
                    })
                }
            }, {
                key: "setRedTheme",
                value: function() {
                    var e = (0, s["default"])(".js-left-theme"),
                        t = (0, s["default"])(".js-right-theme"),
                        n = this.theme = {
                            left: this.getThemeClassName(e),
                            right: this.getThemeClassName(e)
                        };
                    this.setThemeClassName(e, n.left, "ui-red"), this.setThemeClassName(t, n.right, "ui-red")
                }
            }, {
                key: "unsetRedTheme",
                value: function() {
                    var e = (0, s["default"])(".js-left-theme"),
                        t = (0, s["default"])(".js-right-theme"),
                        n = this.theme;
                    this.setThemeClassName(e, "ui-red", n.left), this.setThemeClassName(t, "ui-red", n.right)
                }
            }, {
                key: "getThemeClassName",
                value: function(e) {
                    for (var t = ["ui-light", "ui-dark", "ui-red", "ui-black"], n = 0, i = t.length; n < i; n++)
                        if (e.hasClass(t[n])) return t[n];
                    return ""
                }
            }, {
                key: "setThemeClassName",
                value: function(e, t, n) {
                    e.addClass("ui-animation"), setTimeout(function() {
                        e.removeClass(t).addClass(n)
                    }, 16), setTimeout(function() {
                        e.removeClass("ui-animation")
                    }, 1e3)
                }
            }]), e
        }();
    t["default"] = d, s["default"].fn.menu = (0, l.createPlugin)(d)
}, function(e, t) {
    "use strict";

    function n() {
        return "plugin" + o++
    }

    function i(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n(),
            i = function() {
                for (var t = [], n = 0, i = arguments.length; n < i; n++) t[n] = arguments[n];
                return a(this, r, e, t)
            },
            r = i.namespace = t;
        return i
    }

    function a(e, t, n, i) {
        var a = e,
            o = null,
            s = [],
            l = i[0],
            u = {};
        return "object" === ("undefined" == typeof l ? "undefined" : r(l)) ? u = l : "instance" === l ? (o = function() {
            return this
        }, s = []) : "string" == typeof l && "function" == typeof n.prototype[l] && "_" != l[0] && (o = n.prototype[l], s = i.slice(1)), e.each(function() {
            var e, i, r = $(this),
                c = r.data(t);
            c || (i = $.extend({}, r.data(), u), c = new n(r, i), r.data(t, c)), o && (e = o.apply(c, s), void 0 !== e && (a = e), "destroy" === l && r.removeData(t))
        }), a
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    t.generateUid = n, t.createPlugin = i;
    var o = 1;
    t["default"] = i
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function a(e) {
        if (e) {
            var t = parseFloat(e);
            if (t) {
                if ("ms" === e.substr(-2)) return t;
                if ("s" === e.substr(-1)) return 1e3 * t
            }
        }
        return 0
    }
    var r = n(3),
        o = i(r),
        s = "WebkitTransition" in document.body.style ? "webkitTransitionEnd" : "transitionend",
        l = "WebkitAnimation" in document.body.style ? "webkitAnimationEnd" : "animationend",
        u = "WebkitAnimation" in document.body.style ? "webkitAnimationStart" : "animationstart",
        c = 0;
    o["default"].fn.transitionduration = function(e) {
        return a((0, o["default"])(this).css("transition-duration")) || a((0, o["default"])(this).css("animation-duration")) || e || 0
    }, o["default"].fn.transitionend = function() {
        return o["default"].when.apply(o["default"], o["default"].map(this, function(e) {
            var t = (0, o["default"])(e),
                n = ++c,
                i = s + ".ns" + n + " " + l + ".ns" + n,
                a = o["default"].Deferred(),
                r = t.transitionduration(),
                u = setTimeout(function() {
                    a.resolve()
                }, r + 16);
            return t.on(i, function(e) {
                t.is(e.target) && (clearTimeout(u), t.off(i), a.resolve())
            }), a.promise()
        }))
    }, o["default"].fn.animationend = function() {
        return o["default"].when.apply(o["default"], o["default"].map(this, function(e) {
            var t = (0, o["default"])(e),
                n = ++c,
                i = u + ".ns" + n,
                a = l + ".ns" + n,
                r = o["default"].Deferred(),
                s = 0;
            return t.on(i, function(e) {
                var t = (0, o["default"])(e.target);
                "infinite" !== t.css("animationIterationCount") && s++
            }), t.on(a, function(e) {
                s--, s <= 0 && (t.off(i).off(a), r.resolve())
            }), r.promise()
        }))
    }, o["default"].fn.animationend = function() {
        return o["default"].when.apply(o["default"], o["default"].map(this, function(e) {
            var t = (0, o["default"])(e),
                n = ++c,
                i = u + ".ns" + n,
                a = l + ".ns" + n,
                r = o["default"].Deferred(),
                s = 0;
            return t.on(i, function(e) {
                var t = (0, o["default"])(e.target);
                "infinite" !== t.css("animationIterationCount") && s++
            }), t.on(a, function(e) {
                s--, s <= 0 && (t.off(i).off(a), r.resolve())
            }), r.promise()
        }))
    }
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function a() {
        return this.each(function(e, t) {
            var n = $(t);
            n.attr("src", n.data("src")).removeAttr("data-src"), (0, o["default"])(t), n.is(":visible") && (n.addClass("fade"), n.get(0).complete ? setTimeout(function() {
                n.addClass("in").transitionend().done(function() {
                    n.removeClass("fade in")
                })
            }, 16) : n.on("load", function() {
                n.addClass("in").transitionend().done(function() {
                    n.removeClass("fade in")
                })
            }))
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t["default"] = a;
    var r = n(5),
        o = i(r);
    $.fn.lazyload = a
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t["default"] = {
        animating: !1,
        allowSlideChange: !0,
        allowPageChange: !0
    }
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        o = n(3),
        s = i(o),
        l = n(44);
    n(45), n(46);
    var u = n(47),
        c = i(u),
        d = n(49),
        f = i(d),
        h = function() {
            function e(t, n) {
                a(this, e);
                var i = (this.options = s["default"].extend({}, n), this.$container = (0, s["default"])(t)),
                    r = this.$toggler = (0, s["default"])(".js-contacts-link"),
                    o = (this.$hide = (0, s["default"])(".js-back"), this.$form = i.find(".js-contacts-form")),
                    u = (this.$errors = i.find(".js-contacts-errors"), this.$confirmation = i.find(".js-contacts-confirmation"), this.uid = (0, l.generateUid)());
                this.theme = {}, this.visible = !1, r.on("tap." + u, this.toggle.bind(this)), i.on("mousewheel." + u, function(e) {
                    return e.stopPropagation()
                }), o.on("submit." + u, this.handleFormSubmit.bind(this))
            }
            return r(e, [{
                key: "toggle",
                value: function() {
                    this.visible ? this.hide() : this.show()
                }
            }, {
                key: "show",
                value: function() {
                    this.visible = !0, c["default"].allowPageChange = !1, c["default"].allowSlideChange = !1, this.transitionFormIn(), this.transitionMenuIn(), this.showBackground();
                    var e = this.$hide.add((0, s["default"])(".js-apartment-navigation"));
                    e.addClass("fade disable-interactions")
                }
            }, {
                key: "hide",
                value: function() {
                    this.visible = !1, c["default"].allowPageChange = !0, c["default"].allowSlideChange = !0, this.transitionMenuOut();
                    var e = this.$hide.add((0, s["default"])(".js-apartment-navigation"));
                    e.removeClass("fade disable-interactions")
                }
            }, {
                key: "showBackground",
                value: function() {
                    var e = this.$container.find("img[data-src]");
                    e.lazyload()
                }
            }, {
                key: "handleFormSubmit",
                value: function(e) {
                    e.preventDefault();
                    var t = this.$form,
                        n = t.serializeArray();
                    this.disableForm(), s["default"].ajax(f["default"].contacts, {
                        method: f["default"].contactsMethod,
                        dataType: "json",
                        data: n
                    }).always(this.enableForm.bind(this)).fail(this.handleSubmitError.bind(this)).done(this.handleSubmitResponse.bind(this))
                }
            }, {
                key: "handleSubmitError",
                value: function() {
                    this.handleSubmitResponse({
                        status: 0,
                        errors: {
                            general: "error"
                        }
                    })
                }
            }, {
                key: "handleSubmitResponse",
                value: function(e) {
                    if (e.status) this.showConfirmationMessage();
                    else {
                        var t = s["default"].map(e.errors, function(e) {
                                return [e]
                            }),
                            n = Object.keys(e.errors);
                        this.showErrorMessages(t), this.markErrorInputs(n)
                    }
                }
            }, {
                key: "resetForm",
                value: function() {
                    var e = this.$form;
                    e.get(0).reset(), this.markErrorInputs([]), this.showErrorMessages([])
                }
            }, {
                key: "disableForm",
                value: function() {
                    var e = this.$form;
                    e.find("input").prop("readonly", !0), e.find("button").prop("disabled", !0)
                }
            }, {
                key: "enableForm",
                value: function() {
                    var e = this.$form;
                    e.find("input").prop("readonly", !1), e.find("button").prop("disabled", !1)
                }
            }, {
                key: "markErrorInputs",
                value: function(e) {
                    var t = this.$form.find("input");
                    t.each(function(t, n) {
                        var i = (0, s["default"])(n),
                            a = i.attr("name");
                        i.parent().toggleClass("error", e.indexOf(a) !== -1)
                    })
                }
            }, {
                key: "showErrorMessages",
                value: function(e) {
                    var t = s["default"].map(e, function(e) {
                            return LOCALES[e] || ""
                        }),
                        n = this.$errors;
                    t.length ? (n.html("<p>" + t.join("<br />") + "</p>"), n.hasClass("hidden") && (n.addClass("appear").removeClass("hidden"), setTimeout(function() {
                        n.addClass("in").transitionend().done(function() {
                            n.removeClass("appear in")
                        })
                    }, 16))) : n.addClass("hidden")
                }
            }, {
                key: "showConfirmationMessage",
                value: function() {
                    var e = this.$form,
                        t = this.$confirmation;
                    t.addClass("appear").removeClass("hidden"), e.addClass("disappear"), setTimeout(function() {
                        e.addClass("in").transitionend().done(function() {
                            e.removeClass("disappear in").addClass("hidden")
                        }), t.addClass("in").transitionend().done(function() {
                            t.removeClass("appear in")
                        })
                    }, 16)
                }
            }, {
                key: "hideConfirmationMessage",
                value: function() {
                    var e = this.$form,
                        t = this.$confirmation;
                    e.removeClass("hidden"), t.addClass("hidden")
                }
            }, {
                key: "transitionFormIn",
                value: function() {
                    var e = this.$form;
                    this.$confirmation;
                    e.addClass("appear"), setTimeout(function() {
                        e.addClass("in").transitionend().done(function() {
                            e.removeClass("appear in")
                        })
                    }, 16)
                }
            }, {
                key: "transitionMenuIn",
                value: function() {
                    var e = this.$container;
                    e.addClass("fade appear animate-slow").removeClass("hidden"), setTimeout(function() {
                        e.addClass("in").transitionend().done(function() {
                            e.removeClass("appear fade in animate-slow")
                        })
                    })
                }
            }, {
                key: "transitionMenuOut",
                value: function() {
                    var e = this,
                        t = this.$container;
                    t.addClass("fade in"), setTimeout(function() {
                        t.removeClass("in").transitionend().done(function() {
                            t.addClass("hidden").removeClass("fade").removeClass("appear"), e.resetForm(), e.hideConfirmationMessage()
                        })
                    })
                }
            }]), e
        }();
    t["default"] = h, s["default"].fn.contacts = (0, l.createPlugin)(h)
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t["default"] = {
        floors: "",
        locations: "",
        contacts: "",
        contactsMethod: "POST"
    }
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        o = n(51),
        s = i(o),
        l = n(44),
        u = function() {
            function e(t) {
                a(this, e);
                var n = (this.$logo = t, $(".js-controller"));
                this.$contacts = $(".js-contacts");
                n.on("pageChange", this.handlePageChange.bind(this)), "/en/location.html" === window.location.pathname && s["default"].matches("sm-down") && (this.$logo.addClass("hidden"), this.$contacts.addClass("hidden"))
            }
            return r(e, [{
                key: "handlePageChange",
                value: function(e) {
                    this.$logo.toggleClass("disabled", "/en/" === e.url), "/en/location.html" === e.url && s["default"].matches("sm-down") ? (this.$logo.addClass("hidden"), this.$contacts.addClass("hidden")) : "/en/location.html" === e.prevUrl && s["default"].matches("sm-down") && (this.$logo.removeClass("hidden"), this.$contacts.removeClass("hidden"))
                }
            }]), e
        }();
    t["default"] = u, $.fn.logo = (0, l.createPlugin)(u)
}, function(e, t) {
    "use strict";

    function n(e) {
        var t = g[e];
        if (!t) {
            if (!m[e]) return null;
            t = g[e] = matchMedia(m[e])
        }
        return t
    }

    function i(e, t) {
        if (e in m) {
            var i = n(e);
            i.addListener(t)
        }
    }

    function a(e, t) {
        i(e, function(e) {
            e.matches && t.call(this, e)
        });
        var a = n(e);
        a && a.matches && t.call(a, a)
    }

    function r(e, t) {
        i(e, function(e) {
            e.matches || t.call(this, e)
        });
        var a = n(e);
        a && !a.matches && t.call(a, a)
    }

    function o(e) {
        return e in m ? n(e).matches : matchMedia(e).matches
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = 1600,
        l = 980,
        u = 1599,
        c = 668,
        d = 979,
        f = 668,
        h = 1280,
        p = h - 1,
        m = {
            xs: "(max-width: " + f + "px) and (orientation: portrait)",
            sm: "(orientation: landscape) and (max-width: " + d + "px) and (max-height: 415px)",
            "sm-down": "(orientation: landscape) and (max-width: " + d + "px) and (max-height: 415px), (max-width: " + f + "px)",
            "md-up": "(min-width: " + c + "px) and (min-height: 416px)",
            "md-down": "(max-width: " + d + "px)",
            "lg-down": "(max-width: " + u + "px)",
            "lgl-down": "(max-width: " + p + "px)",
            "lgl-up": "(min-width: " + h + "px)",
            "lg-lgl": "(min-width: " + l + "px) and (max-width: " + p + "px)",
            "lgl-xl": "(min-width: " + l + "px) and (max-width: " + (s - 1) + "px)",
            xl: "(min-width: " + s + "px)",
            xxl: "(min-width: 1921px) and (max-width: 2560px)",
            portrait: "(orientation: portrait)",
            retina: "only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)"
        },
        g = {};
    t["default"] = {
        on: i,
        enter: a,
        leave: r,
        matches: o
    }
}, , , function(e, t, n) {
    (function(t) {
        for (var i = n(55), a = "undefined" == typeof window ? t : window, r = ["moz", "webkit"], o = "AnimationFrame", s = a["request" + o], l = a["cancel" + o] || a["cancelRequest" + o], u = 0; !s && u < r.length; u++) s = a[r[u] + "Request" + o], l = a[r[u] + "Cancel" + o] || a[r[u] + "CancelRequest" + o];
        if (!s || !l) {
            var c = 0,
                d = 0,
                f = [],
                h = 1e3 / 60;
            s = function(e) {
                if (0 === f.length) {
                    var t = i(),
                        n = Math.max(0, h - (t - c));
                    c = n + t, setTimeout(function() {
                        var e = f.slice(0);
                        f.length = 0;
                        for (var t = 0; t < e.length; t++)
                            if (!e[t].cancelled) try {
                                e[t].callback(c)
                            } catch (n) {
                                setTimeout(function() {
                                    throw n
                                }, 0)
                            }
                    }, Math.round(n))
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
            return s.call(a, e)
        }, e.exports.cancel = function() {
            l.apply(a, arguments)
        }, e.exports.polyfill = function() {
            a.requestAnimationFrame = s, a.cancelAnimationFrame = l
        }
    }).call(t, function() {
        return this
    }())
}, function(e, t, n) {
    (function(t) {
        (function() {
            var n, i, a;
            "undefined" != typeof performance && null !== performance && performance.now ? e.exports = function() {
                return performance.now()
            } : "undefined" != typeof t && null !== t && t.hrtime ? (e.exports = function() {
                return (n() - a) / 1e6
            }, i = t.hrtime, n = function() {
                var e;
                return e = i(), 1e9 * e[0] + e[1]
            }, a = n()) : Date.now ? (e.exports = function() {
                return Date.now() - a
            }, a = Date.now()) : (e.exports = function() {
                return (new Date).getTime() - a
            }, a = (new Date).getTime())
        }).call(this)
    }).call(t, n(56))
}, function(e, t) {
    function n() {
        throw new Error("setTimeout has not been defined")
    }

    function i() {
        throw new Error("clearTimeout has not been defined")
    }

    function a(e) {
        if (c === setTimeout) return setTimeout(e, 0);
        if ((c === n || !c) && setTimeout) return c = setTimeout, setTimeout(e, 0);
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

    function o() {
        m && h && (m = !1, h.length ? p = h.concat(p) : g = -1, p.length && s())
    }

    function s() {
        if (!m) {
            var e = a(o);
            m = !0;
            for (var t = p.length; t;) {
                for (h = p, p = []; ++g < t;) h && h[g].run();
                g = -1, t = p.length
            }
            h = null, m = !1, r(e)
        }
    }

    function l(e, t) {
        this.fun = e, this.array = t
    }

    function u() {}
    var c, d, f = e.exports = {};
    ! function() {
        try {
            c = "function" == typeof setTimeout ? setTimeout : n
        } catch (e) {
            c = n
        }
        try {
            d = "function" == typeof clearTimeout ? clearTimeout : i
        } catch (e) {
            d = i
        }
    }();
    var h, p = [],
        m = !1,
        g = -1;
    f.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        p.push(new l(e, t)), 1 !== p.length || m || a(s)
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
}, , function(e, t, n) {
    var i, a, r;
    /*!
     * jQuery Mousewheel 3.1.13
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license
     * http://jquery.org/license
     */
    ! function(o) {
        a = [n(3)], i = o, r = "function" == typeof i ? i.apply(t, a) : i, !(void 0 !== r && (e.exports = r))
    }(function(e) {
        function t(t) {
            var o = t || window.event,
                s = l.call(arguments, 1),
                u = 0,
                d = 0,
                f = 0,
                h = 0,
                p = 0,
                m = 0;
            if (t = e.event.fix(o), t.type = "mousewheel", "detail" in o && (f = o.detail * -1), "wheelDelta" in o && (f = o.wheelDelta), "wheelDeltaY" in o && (f = o.wheelDeltaY), "wheelDeltaX" in o && (d = o.wheelDeltaX * -1), "axis" in o && o.axis === o.HORIZONTAL_AXIS && (d = f * -1, f = 0), u = 0 === f ? d : f, "deltaY" in o && (f = o.deltaY * -1, u = f), "deltaX" in o && (d = o.deltaX, 0 === f && (u = d * -1)), 0 !== f || 0 !== d) {
                if (1 === o.deltaMode) {
                    var g = e.data(this, "mousewheel-line-height");
                    u *= g, f *= g, d *= g
                } else if (2 === o.deltaMode) {
                    var v = e.data(this, "mousewheel-page-height");
                    u *= v, f *= v, d *= v
                }
                if (h = Math.max(Math.abs(f), Math.abs(d)), (!r || h < r) && (r = h, i(o, h) && (r /= 40)), i(o, h) && (u /= 40, d /= 40, f /= 40), u = Math[u >= 1 ? "floor" : "ceil"](u / r), d = Math[d >= 1 ? "floor" : "ceil"](d / r), f = Math[f >= 1 ? "floor" : "ceil"](f / r), c.settings.normalizeOffset && this.getBoundingClientRect) {
                    var y = this.getBoundingClientRect();
                    p = t.clientX - y.left, m = t.clientY - y.top
                }
                return t.deltaX = d, t.deltaY = f, t.deltaFactor = r, t.offsetX = p, t.offsetY = m, t.deltaMode = 0, s.unshift(t, u, d, f), a && clearTimeout(a), a = setTimeout(n, 200), (e.event.dispatch || e.event.handle).apply(this, s)
            }
        }

        function n() {
            r = null
        }

        function i(e, t) {
            return c.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 === 0
        }
        var a, r, o = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
            s = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
            l = Array.prototype.slice;
        if (e.event.fixHooks)
            for (var u = o.length; u;) e.event.fixHooks[o[--u]] = e.event.mouseHooks;
        var c = e.event.special.mousewheel = {
            version: "3.1.12",
            setup: function() {
                if (this.addEventListener)
                    for (var n = s.length; n;) this.addEventListener(s[--n], t, !1);
                else this.onmousewheel = t;
                e.data(this, "mousewheel-line-height", c.getLineHeight(this)), e.data(this, "mousewheel-page-height", c.getPageHeight(this))
            },
            teardown: function() {
                if (this.removeEventListener)
                    for (var n = s.length; n;) this.removeEventListener(s[--n], t, !1);
                else this.onmousewheel = null;
                e.removeData(this, "mousewheel-line-height"), e.removeData(this, "mousewheel-page-height")
            },
            getLineHeight: function(t) {
                var n = e(t),
                    i = n["offsetParent" in e.fn ? "offsetParent" : "parent"]();
                return i.length || (i = e("body")), parseInt(i.css("fontSize"), 10) || parseInt(n.css("fontSize"), 10) || 16
            },
            getPageHeight: function(t) {
                return e(t).height()
            },
            settings: {
                adjustOldDeltas: !0,
                normalizeOffset: !0
            }
        };
        e.fn.extend({
            mousewheel: function(e) {
                return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
            },
            unmousewheel: function(e) {
                return this.unbind("mousewheel", e)
            }
        })
    })
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        o = n(54),
        s = i(o),
        l = n(15),
        u = i(l),
        c = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                a(this, e), this._value = t, this._target = t, this._force = n.force || .08, this._forced = !1, this._threshold = n.threshold || this._force, this._running = !1, this._usetimer = n.usetimer !== !1, this.onupdate = n.onupdate ? [n.onupdate] : [], this._updateBinded = this.update.bind(this)
            }
            return r(e, [{
                key: "val",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    return null != e && (this._target = e, this._running || (this._usetimer && (0, s["default"])(this._updateBinded), this._running = !0)), this._value
                }
            }, {
                key: "force",
                value: function(e) {
                    return this._target = this._value = e, this._forced = !0, this
                }
            }, {
                key: "target",
                value: function() {
                    return this._target
                }
            }, {
                key: "changed",
                value: function() {
                    return this._changed
                }
            }, {
                key: "update",
                value: function() {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        n = this._value,
                        i = this._forced;
                    return this.updateValue(t), this._changed = this._changed || i, this._forced = !1, this._running && (this.onupdate && (0, u["default"])(this.onupdate, function(t) {
                        t(e._value, n)
                    }), this._usetimer && (0, s["default"])(this._updateBinded)), this
                }
            }, {
                key: "updateValue",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = this._target,
                        n = this._value,
                        i = t - n,
                        a = !1;
                    if (i) {
                        var r = this._force,
                            o = this._threshold,
                            s = r * (e ? Math.min(60, e) / 16 : 1);
                        s > 1 && (s = 1), n += i * s, Math.abs(t - n) < o && (n = t), a = this._value !== n, this._value = n
                    }
                    this._running = a, this._changed = a
                }
            }, {
                key: "valueOf",
                value: function() {
                    return this.value
                }
            }]), e
        }();
    t["default"] = c
}, , , , function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function a(e, t) {
        for (var n = $.Deferred(), i = 0, a = d.length; i < a; i++)
            if (d[i][e] === t) return n.resolve(d[i]).promise();
        return (0, c["default"])().done(function(i) {
            for (var a = 0, r = i.length; a < r; a++)
                for (var o = i[a], s = 0, l = o.length; s < l; s++)
                    if (o[s][e] === t) {
                        var u = {
                            id: o[s].id,
                            url: o[s].url,
                            group: o[s].type,
                            floor: o[0].id
                        };
                        return d.push(u), void n.resolve(u)
                    }
            n.reject()
        }), n.promise()
    }

    function r(e) {
        return a("id", e).then(function(e) {
            return e ? $.Deferred().resolve(e.url) : $.Deferred().reject()
        })
    }

    function o(e) {
        return a("url", e).then(function(e) {
            return e ? $.Deferred().resolve(e.id) : $.Deferred().reject()
        })
    }

    function s(e) {
        return a("id", e)
    }

    function l(e) {
        return a("url", e)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.routes = void 0, t.getUrlById = r, t.getIdByUrl = o, t.getRouteById = s, t.getRouteByUrl = l;
    var u = n(64),
        c = i(u),
        d = t.routes = [{
            id: "main",
            url: "/en/",
            group: "main"
        }, {
            id: "history",
            url: "/en/history.html",
            group: "main"
        }, {
            id: "location",
            url: "/en/location.html",
            group: "main"
        }, {
            id: "apartments",
            url: "/en/apartments.html",
            group: "main"
        }, {
            id: "design",
            url: "/en/design.html",
            group: "main"
        }]
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t["default"] = function() {
        return o || (o = $.getJSON(r["default"].floors).then(function(e) {
            return $.Deferred().resolve(e.floors)
        }, function(e) {
            return $.Deferred().reject()
        })), o
    };
    var a = n(49),
        r = i(a),
        o = null
}, , , function(e, t, n) {
    function i(e, t, n) {
        function i() {
            w && clearTimeout(w), m && clearTimeout(m), k = 0, p = m = y = w = b = void 0
        }

        function u(t, n) {
            n && clearTimeout(n), m = w = b = void 0, t && (k = r(), g = e.apply(y, p), w || m || (p = y = void 0))
        }

        function c() {
            var e = t - (r() - v);
            e <= 0 || e > t ? u(b, m) : w = setTimeout(c, e)
        }

        function d() {
            return (w && b || m && C) && (g = e.apply(y, p)), i(), g
        }

        function f() {
            u(C, w)
        }

        function h() {
            if (p = arguments, v = r(), y = this, b = C && (w || !x), S === !1) var n = x && !w;
            else {
                k || m || x || (k = v);
                var i = S - (v - k),
                    a = (i <= 0 || i > S) && (x || m);
                a ? (m && (m = clearTimeout(m)), k = v, g = e.apply(y, p)) : m || (m = setTimeout(f, i))
            }
            return a && w ? w = clearTimeout(w) : w || t === S || (w = setTimeout(c, t)), n && (a = !0, g = e.apply(y, p)), !a || w || m || (p = y = void 0), g
        }
        var p, m, g, v, y, w, b, k = 0,
            x = !1,
            S = !1,
            C = !0;
        if ("function" != typeof e) throw new TypeError(s);
        return t = o(t) || 0, a(n) && (x = !!n.leading, S = "maxWait" in n && l(o(n.maxWait) || 0, t), C = "trailing" in n ? !!n.trailing : C), h.cancel = i, h.flush = d, h
    }
    var a = n(35),
        r = n(68),
        o = n(69),
        s = "Expected a function",
        l = Math.max;
    e.exports = i
}, function(e, t) {
    var n = Date.now;
    e.exports = n
}, function(e, t, n) {
    function i(e) {
        if (r(e)) {
            var t = a(e.valueOf) ? e.valueOf() : e;
            e = r(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(s, "");
        var n = u.test(e);
        return n || c.test(e) ? d(e.slice(2), n ? 2 : 8) : l.test(e) ? o : +e
    }
    var a = n(34),
        r = n(35),
        o = NaN,
        s = /^\s+|\s+$/g,
        l = /^[-+]0x[0-9a-f]+$/i,
        u = /^0b[01]+$/i,
        c = /^0o[0-7]+$/i,
        d = parseInt;
    e.exports = i
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        o = n(71),
        s = i(o),
        l = n(72),
        u = i(l),
        c = {
            position: [.5, .5],
            image: null,
            mask: null,
            autoload: !1,
            mode: "fit"
        },
        d = function() {
            function e(t) {
                a(this, e), this.data = $.extend({}, c, t), this.ready = !1, this.width = 0, this.height = 0, this.composite = null, this.scale = 1, this.globalScale = 1, this.offset = [0, 0], this.rendered = {}, this.active = !1, this.loaded = !1, this.data.autoload && this.load()
            }
            return r(e, [{
                key: "activate",
                value: function() {
                    this.active = !0
                }
            }, {
                key: "deactivate",
                value: function() {
                    this.active = !1
                }
            }, {
                key: "getData",
                value: function() {
                    return this.data
                }
            }, {
                key: "setGlobalScale",
                value: function(e) {
                    return this.globalScale = e, this
                }
            }, {
                key: "setScale",
                value: function(e) {
                    return this.scale = e, this
                }
            }, {
                key: "setOffset",
                value: function(e, t) {
                    return this.offset[0] = e, this.offset[1] = t, this
                }
            }, {
                key: "load",
                value: function() {
                    var e = this.data;
                    this.image = (0, s["default"])(e.image, this.handleImageLoaded.bind(this)), this.loaded = !0, e.mask && (this.mask = (0, s["default"])(e.mask, this.handleImageLoaded.bind(this)), this.target = document.createElement("canvas"), this.ctx = this.target.getContext("2d"))
                }
            }, {
                key: "isReady",
                value: function() {
        //console.log('i am ready');
                    return this.ready
                }
            }, {
                key: "handleImageLoaded",
                value: function() {
                    var e = this.image,
                        t = this.mask,
                        n = this.target;
                    e && e.complete && (!t || t.complete) && (this.width = e.width, this.height = e.height, n && (n.width = e.width, n.height = e.height), this.mask ? this.renderMaskedImage() : this.ready = !0)
                }
            }, {
                key: "renderMaskedImage",
                value: function() {
                    var e = this.image,
                        t = this.mask,
                        n = this.ctx;
                    e && t && e.complete && t.complete && (this.ready = !0, n.clearRect(0, 0, e.width, e.height), n.globalAlpha = 1, n.globalCompositeOperation = "source-over", n.drawImage(t.image, 0, 0, t.width, t.height, 0, 0, e.width, e.height), n.globalCompositeOperation = "source-in", n.drawImage(e.image, 0, 0, e.width, e.height, 0, 0, e.width, e.height), this.cleanup())
                }
            }, {
                key: "cleanup",
                value: function() {
                    this.image = this.mask = null
                }
            }, {
                key: "render",
                value: function(e, t, n) {
                    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                        a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                        r = this.image,
                        o = this.data,
                        s = this.width,
                        l = this.height,
                        c = this.globalScale;
                    if (s && l && this.ready) {
                        var d = (0, u["default"])(t, n, o.size[0], o.size[1], "50% 50%", this.data.mode),
                            f = d.width / o.size[0],
                            h = this.composite,
                            p = s * f * this.scale,
                            m = l * f * this.scale,
                            g = (d.width - p) * (o.position[0] + this.offset[0]) + i,
                            v = (d.height - m) * (o.position[1] + this.offset[1]) + a;
                        g += d.left, v += d.top, p *= c, m *= c, g = (g - t / 2) * c + t / 2, v = (v - n / 2) * c + n / 2, this.rendered = {
                            x: g,
                            y: v,
                            w: p,
                            h: m
                        }, h && (e.globalCompositeOperation = h), e.drawImage(this.target || r.image, 0, 0, s, l, g, v, p, m)
                    }
                }
            }]), e
        }();
    t["default"] = d
}, function(e, t) {
    "use strict";

    function n(e) {
        return e + (e.indexOf("?") !== -1 ? "&" : "?") + "_=" + Math.random()
    }

    function i(e, t) {
        var i = document.createElement("img"),
            r = {
                image: i,
                width: 0,
                height: 0,
                complete: !1,
                retries_left: a
            };
        return i.onload = function() {
            r.width = i.width, r.height = i.height, r.complete = !0, t && t()
        }, i.onerror = function() {
            r.retries_left ? (r.retries_left--, console.debug && console.debug("Failed to load `" + e + "`, retrying..."), e && (i.src = n(e), i.complete && onload())) : (r.error = !0, console.debug && console.debug("Failed to load `" + e + "`"))
        }, e ? (i.src = e, i.complete && onload()) : (r.complete = !0, t && t()), r
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t["default"] = i;
    var a = 5
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t["default"] = function(e, t, n, i, a, r, o) {
        var s, l, u, c, d, f = 2,
            h = (a || "50% 50%").split(" ");
        if ("fit" === r && (f = 0), !i && n) {
            if (!e) return {
                width: 0,
                height: 0,
                left: 0,
                top: 0
            };
            s = n, l = e + f
        } else {
            if (!n || !i) return {
                width: 0,
                height: 0,
                left: 0,
                top: 0
            };
            s = n / i, l = e + f
        }
        return u = Math.ceil(l / s), "fit" === r ? u > t + f && (u = t + f, l = Math.ceil(u * s)) : u < t + f && (u = t + f, l = Math.ceil(u * s)), !o && (l && l > n || u && u > i) && (l = n, u = Math.ceil(l / s)), c = Math.round((e - l) * parseFloat(h[0] || "50%") / 100), d = Math.round((t - u) * parseFloat(h[1] || h[0] || "50%") / 100), {
            width: l,
            height: u,
            left: c,
            top: d
        }
    }
}, , , , , , , , , , , , function(e, t, n) {
    "use strict";
    n(2), n(43), n(48), n(50), n(85), n(93), n(169)
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        o = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        s = n(3),
        l = i(s),
        u = n(44);
    n(86), n(58), n(87), n(45);
    var c = n(7),
        d = i(c),
        f = n(51),
        h = i(f),
        p = n(67),
        m = i(p),
        g = n(47),
        v = i(g),
        y = n(88),
        w = i(y),
        b = n(89),
        k = i(b),
        x = n(90),
        S = i(x),
        C = n(92),
        _ = i(C),
        j = function() {
            function e(t, n) {
                a(this, e);
        
                var i = this.options = l["default"].extend({
                        allowNavigation: !0,
                        animationInBottom: "screen-transition-moveFromBottom",
                        animationInTop: "screen-transition-moveFromTop",
                        animationOutBottom: "screen-transition-moveToBottom",
                        animationOutTop: "screen-transition-moveToTop"
                    }, n),
                    r = this.$container = (0, l["default"])(t),
                    o = this.$screens = r.find(".js-screen"),
                    s = this.$next = r.find(".js-next"),
                    c = this.uid = (0, u.generateUid)(),
                    f = (0, l["default"])(document);
            //console.log(this.$screens);
            this.index = 1
            this.next();
                if (this.index = o.index(o.filter(".screen-active")), this.count = o.length, this.frozen = !1, f.on("tap." + c, this.handleLinkNavigation.bind(this)), s.on("tap." + c, this.next.bind(this)), f.on("pageReady." + c, this.handlePageReady.bind(this)), this.plugins = [new w["default"](this), new k["default"](this), new S["default"](this), new _["default"](this)], i.allowNavigation && (d["default"].getTouchSupport() && h["default"].matches("md-up") && r.on("swipe." + c, ".js-screen", this.handleFlick.bind(this)), f.on("mousewheel." + c, (0, m["default"])(this.handleMouseWheel.bind(this), 0, {
                        leading: !0,
                        trailing: !1
                    })), f.on("keydown." + c, null, "down pagedown", this.handleKeyPressNext.bind(this)), f.on("keydown." + c, null, "up pageup", this.handleKeyPressPrevious.bind(this))), h["default"].matches("md-up"))(0, l["default"])("html, body").on("touchmove." + c, function(e) {
                    return e.preventDefault()
                }), r.on("touchmove." + c, this.handleTouchScroll.bind(this)), d["default"].getTouchSupport() && (0, l["default"])("video").removeAttr("loop").removeAttr("autoplay");
                else
                    for (var p = 1; p < this.count; p++) this.beforeTransitionScreenIn(p)
            }
      
            return o(e, [{
                key: "handlePageReady",
                value: function() {
                    var e = this.$container,
                        t = this.$screens = e.find(".js-screen");
                    if (this.count = t.length, h["default"].matches("sm-down"))
                        for (var n = 1; n < this.count; n++) this.beforeTransitionScreenIn(n)
            
            
                }
            }, {
                key: "freeze",
                value: function() {
                    this.frozen = !0
          
                }
            }, {
                key: "unfreeze",
                value: function() {
                    this.frozen = !1
          
                }
            }, {
                key: "destroy",
                value: function() {
                    for (var e = this.$screens, t = this.$next, n = (0, l["default"])(document), i = this.uid, a = this.plugins, r = 0, o = a.length; r < o; r++) a[r].destory();
                    e.off("." + i), t.off("." + i), n.off("." + i), (0, l["default"])("html, body").off("." + i), this.$container = this.$screens = this.$next = this.options = this.plugins = null
                }
            }, {
                key: "on",
                value: function(e, t) {
                    var n = e;
                    "change" === e && (n = "switchChange"), this.$container.on(n, t)
          
                }
            }, {
                key: "next",
                value: function() {
                    var e = this.count,
                        t = this.index + 1;
                    if (t < e) return this.open(t)
          
                }
            }, {
                key: "previous",
                value: function() {
                    var e = (this.count, this.index - 1);
                    if (e >= 0) return this.open(e)
                }
            }, {
                key: "open",
                value: function(e) {
        
                    var t = this,
                        n = this.index;
                    if (e !== n && !this.frozen) {
                        if (!v["default"].animating && v["default"].allowSlideChange) {
                            if (!this.triggerEvent("validateScreenChange", e, n)) return l["default"].Deferred().resolve().promise();
                            v["default"].animating = !0;
                            var i = n < e ? "Bottom" : "Top";
                            this.index = e, setTimeout(function() {
                                t.updateUI(e, n)
                            }, "Bottom" === i ? 650 : 150), this.triggerEvent("beforeScreenChange", e, n), setTimeout(function() {
                                t.triggerEvent("screenChange", e, n)
                            }, 650);
                            var a = void 0;
                            return a = this.animationPromise = l["default"].when(this.transitionScreenOut(n, i), this.transitionScreenIn(e, i)), a.then(function() {
                                v["default"].animating = !1, t.animationPromise = null
                            }), a
                        }
                        return l["default"].Deferred().reject().promise()
                    }
                    if (!h["default"].matches("sm-down")) {
                        var o = this.animationPromise;
                        return o ? o : l["default"].Deferred().resolve().promise()
                    }
                    var s = function() {
                        var e = l["default"].Deferred(),
                            t = (0, l["default"])("body");
                        return 0 !== t.scrollTop() ? (0, l["default"])("body").animate({
                            scrollTop: 0
                        }, "slow", function() {
                            e.resolve()
                        }) : e.resolve(), {
                            v: e.promise()
                        }
                    }();
                    if ("object" === ("undefined" == typeof s ? "undefined" : r(s))) return s.v
                }
            }, {
                key: "handleLinkNavigation",
                value: function(e) {
                    var t = (0, l["default"])(e.target).closest("a[href]"),
                        n = document.location.pathname;
                    if (t.length && this.$container && this.$container.length) {
                        var i = t.attr("href").match(/^(https?:\/\/[^\/\?#]+)?([^\#]*)(#(.*))?/),
                            a = i && i[2] || "/",
                            r = i && i[4] || "top";
                        if (a === n) {
                            var o = this.getIndexByScreenName(r);
                            o !== -1 && (this.open(o), e.preventDefault())
                        }
                    }
                }
            }, {
                key: "handleHashNavigation",
                value: function() {
                    var e = document.location.hash.replace("#", "");
                    if (e) {
                        var t = this.getIndexByScreenName(e);
                        t !== -1 && this.open(t)
                    }
                }
            }, {
                key: "handleFlick",
                value: function(e) {
        
                    var t = this.$screens.eq(this.index).data("allowNavigation") !== !1;
                    t && "vertical" === e.orientation && (1 === e.direction ? this.isNavigationAllowed(this.index - 1) && this.previous() : this.isNavigationAllowed(this.index + 1) && this.next())
                }
            }, {
                key: "getScrollableElement",
                value: function() {
                    var e = (this.$container, this.$screens.eq(this.index));
                    return e.closest(".scrollable")
                }
            }, {
                key: "getScrollableHeight",
                value: function() {
                    var e = this.getScrollableElement();
                    return e.length ? e.get(0).scrollHeight - e.get(0).offsetHeight : 0
                }
            }, {
                key: "handleMouseWheel",
                value: function(e) {
        
           
                  
                        
                         this.next() 
                    
                }
            }, {
                key: "isNavigationAllowed",
                value: function(e) {
                     return 1
                    
                }
            }, {
                key: "handleTouchScroll",
                value: function(e) {
                    this.getScrollableHeight() && e.stopPropagation()
                }
            }, {
                key: "handleKeyPressNext",
                value: function(e) {
                    this.isValidKeyPressTarget(e) && this.next()
                }
            }, {
                key: "handleKeyPressPrevious",
                value: function(e) {
                    this.isValidKeyPressTarget(e) && this.previous()
                }
            }, {
                key: "isValidKeyPressTarget",
                value: function(e) {
                    return !(0, l["default"])(e.target).is("select, input, textarea, button")
                }
            }, {
                key: "getScreenName",
                value: function(e) {
                    var t = this.$screens.eq(e);
                    return t.attr("name") || t.attr("id")
                }
            }, {
                key: "getIndexByScreenName",
                value: function(e) {
                    for (var t = 0, n = this.$screens.length; t < n; t++)
                        if (this.getScreenName(t) === e) return t;
                    return -1
                }
            }, {
                key: "updateUI",
                value: function(e, t) {
                    this.$container && this.updateNavNext(e)
                }
            }, {
                key: "triggerEvent",
                value: function(e, t, n) {
                    if (this.$container) {
                        var i = this.getScreenName(t) || null,
                            a = this.getScreenName(n) || null,
                            r = new jQuery.Event(e, {
                                value: t,
                                prevValue: n,
                                name: i,
                                prevName: a
                            });
                        if (this.$container.triggerHandler(r), r.isDefaultPrevented()) return !1
                    }
                    return !0
                }
            }, {
                key: "updateNavNext",
                value: function(e) {
                    var t = this.$next;
                    e >= this.count - 1 ? t.addClass("hidden") : t.removeClass("hidden")
                }
            }, {
                key: "updateName",
                value: function(e) {
                    var t = this.getScreenName(e);
                    "top" === t && (t = ""), (t || document.location.hash) && history.replaceState({}, "", "#" + (t || ""))
                }
            }, {
                key: "prepareScreenForTransition",
                value: function(e) {
                    var t = this.$container,
                        n = this.$screens.eq(e);
                    t.addClass("screen-transitioning"), n.removeClass("hidden")
                }
            }, {
                key: "transitionScreenOut",
                value: function(e) {
                    var t = this,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "Bottom",
                        i = this.$container,
                        a = this.$screens.eq(e),
                        r = "Top" === n ? "Bottom" : "Top",
                        o = this.options["animationOut" + r],
                        s = "disable-transitions";
                    return this.plugins.forEach(function(t) {
                        t.beforeTransitionScreenOut && t.beforeTransitionScreenOut(e)
                    }), this.prepareScreenForTransition(e), a.removeClass("screen-on-top").addClass(o + " " + s).animationend().then(function() {
                        t.afterTransitionScreenOut(e), a.removeClass("screen-active " + o + " " + s).addClass("hidden"), i.removeClass("screen-transitioning")
                    })
                }
            }, {
                key: "transitionScreenIn",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "Bottom",
                        n = this.$screens.eq(e),
                        i = this.options["animationIn" + t];
                    return n.addClass("screen-on-top"), this.prepareScreenForTransition(e), n.addClass(i), this.beforeTransitionScreenIn(e), n.animationend().then(function() {
                        n.addClass("screen-active").removeClass("screen-on-top").removeClass(i)
                    })
                }
            }, {
                key: "afterTransitionScreenOut",
                value: function(e) {
                    this.plugins.forEach(function(t) {
                        t.afterTransitionScreenOut && t.afterTransitionScreenOut(e)
                    })
                }
            }, {
                key: "beforeTransitionScreenIn",
                value: function(e) {
                    this.plugins.forEach(function(t) {
                        t.beforeTransitionScreenIn && t.beforeTransitionScreenIn(e)
                    })
                }
            }]), e
        }();
    t["default"] = j, l["default"].fn.screenController = (0, u.createPlugin)(j)
}, function(e, t) {
    ! function(e) {
        function t(t) {
            if ("string" == typeof t.data && (t.data = {
                    keys: t.data
                }), t.data && t.data.keys && "string" == typeof t.data.keys) {
                var n = t.handler,
                    i = t.data.keys.toLowerCase().split(" ");
                t.handler = function(t) {
                    if (this === t.target || !(e.hotkeys.options.filterInputAcceptingElements && e.hotkeys.textInputTypes.test(t.target.nodeName) || e.hotkeys.options.filterContentEditable && e(t.target).attr("contenteditable") || e.hotkeys.options.filterTextInputs && e.inArray(t.target.type, e.hotkeys.textAcceptingInputTypes) > -1)) {
                        var a = "keypress" !== t.type && e.hotkeys.specialKeys[t.which],
                            r = String.fromCharCode(t.which).toLowerCase(),
                            o = "",
                            s = {};
                        e.each(["alt", "ctrl", "shift"], function(e, n) {
                            t[n + "Key"] && a !== n && (o += n + "+")
                        }), t.metaKey && !t.ctrlKey && "meta" !== a && (o += "meta+"), t.metaKey && "meta" !== a && o.indexOf("alt+ctrl+shift+") > -1 && (o = o.replace("alt+ctrl+shift+", "hyper+")), a ? s[o + a] = !0 : (s[o + r] = !0, s[o + e.hotkeys.shiftNums[r]] = !0, "shift+" === o && (s[e.hotkeys.shiftNums[r]] = !0));
                        for (var l = 0, u = i.length; l < u; l++)
                            if (s[i[l]]) return n.apply(this, arguments)
                    }
                }
            }
        }
        e.hotkeys = {
            version: "0.2.0",
            specialKeys: {
                8: "backspace",
                9: "tab",
                10: "return",
                13: "return",
                16: "shift",
                17: "ctrl",
                18: "alt",
                19: "pause",
                20: "capslock",
                27: "esc",
                32: "space",
                33: "pageup",
                34: "pagedown",
                35: "end",
                36: "home",
                37: "left",
                38: "up",
                39: "right",
                40: "down",
                45: "insert",
                46: "del",
                59: ";",
                61: "=",
                96: "0",
                97: "1",
                98: "2",
                99: "3",
                100: "4",
                101: "5",
                102: "6",
                103: "7",
                104: "8",
                105: "9",
                106: "*",
                107: "+",
                109: "-",
                110: ".",
                111: "/",
                112: "f1",
                113: "f2",
                114: "f3",
                115: "f4",
                116: "f5",
                117: "f6",
                118: "f7",
                119: "f8",
                120: "f9",
                121: "f10",
                122: "f11",
                123: "f12",
                144: "numlock",
                145: "scroll",
                173: "-",
                186: ";",
                187: "=",
                188: ",",
                189: "-",
                190: ".",
                191: "/",
                192: "`",
                219: "[",
                220: "\\",
                221: "]",
                222: "'"
            },
            shiftNums: {
                "`": "~",
                1: "!",
                2: "@",
                3: "#",
                4: "$",
                5: "%",
                6: "^",
                7: "&",
                8: "*",
                9: "(",
                0: ")",
                "-": "_",
                "=": "+",
                ";": ": ",
                "'": '"',
                ",": "<",
                ".": ">",
                "/": "?",
                "\\": "|"
            },
            textAcceptingInputTypes: ["text", "password", "number", "email", "url", "range", "date", "month", "week", "time", "datetime", "datetime-local", "search", "color", "tel"],
            textInputTypes: /textarea|input|select/i,
            options: {
                filterInputAcceptingElements: !0,
                filterTextInputs: !0,
                filterContentEditable: !0
            }
        }, e.each(["keydown", "keyup", "keypress"], function() {
            e.event.special[this] = {
                add: t
            }
        })
    }(jQuery || this.jQuery || window.jQuery)
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        o = n(3),
        s = i(o),
        l = 0,
        u = {
            selector: null,
            threshold: 100,
            velocity: .65,
            recordDuration: 200
        },
        c = function() {
            function e(t, n) {
                a(this, e);
                var i = (0, s["default"])(document),
                    r = (0, s["default"])(t),
                    o = ++l,
                    c = s["default"].extend({}, u, n);
                this.$element = r, this.guid = o, this.options = c, this.cancel = !1, this.startXY = [0, 0], this.currXY = [0, 0], this.historyXY = [], this.historyTimer = null, i.on("scroll.inst_" + o, this.handleScroll.bind(this)), r.parents(".screen-scrollable").on("scroll.inst_" + o, this.handleScroll.bind(this)), r.on("touchstart.inst_" + o, c.selector, this.handleTouchStart.bind(this)).on("touchend.inst_" + o, this.handleTouchEnd.bind(this)).on("touchcancel.inst_" + o, this.handleTouchCancel.bind(this)).on("touchmove.inst_" + o, this.handleTouchMove.bind(this))
            }
            return r(e, [{
                key: "destroy",
                value: function() {
                    var e = this.$element,
                        t = this.guid;
                    e.off(".inst_" + t)
                }
            }, {
                key: "handleScroll",
                value: function() {
                    this.cancel = !0, this.handleTouchCancel()
                }
            }, {
                key: "handleTouchStart",
                value: function(e) {
                    this.startXY = this.getPointerCoordinates(e), this.currXY = [].concat(this.startXY), this.historyXY = [], this.cancel = !1, this.target = e.target, this.historyTimer = setInterval(this.onTick.bind(this), 16)
                }
            }, {
                key: "handleTouchMove",
                value: function(e) {
                    this.currXY = this.getPointerCoordinates(e)
                }
            }, {
                key: "handleTouchCancel",
                value: function(e) {
                    clearInterval(this.historyTimer)
                }
            }, {
                key: "handleTouchEnd",
                value: function(e) {
                    if (this.handleTouchCancel(e), !this.cancel) {
                        var t = this.getVelocity(),
                            n = this.getOrientation(),
                            i = this.getDirection(),
                            a = this.getPrimaryDistance();
                        if (Math.abs(t) > this.options.velocity && Math.abs(a) > this.options.threshold) {
                            var r = new s["default"].Event("swipe", {
                                    direction: i,
                                    orientation: n,
                                    velocity: t
                                }),
                                o = (0, s["default"])(this.target);
                            o.trigger(r)
                        }
                    }
                }
            }, {
                key: "onTick",
                value: function() {
                    var e = this.historyXY,
                        t = Math.ceil(this.options.recordDuration / 16);
                    e.push(this.currXY), e.length > t && e.splice(0, e.length - t)
                }
            }, {
                key: "getOrientation",
                value: function() {
                    var e = this.getDistance();
                    return Math.abs(e[0]) > Math.abs(e[1]) ? "horizontal" : "vertical"
                }
            }, {
                key: "getDirection",
                value: function() {
                    var e = this.getPrimaryDistance();
                    return e > 0 ? 1 : -1
                }
            }, {
                key: "getVelocity",
                value: function() {
                    var e = this.historyXY,
                        t = this.getPrimaryDistance();
                    return e.length ? t / e.length / 16 : 0
                }
            }, {
                key: "getDistance",
                value: function() {
                    for (var e = this.historyXY, t = [0, 0], n = 1, i = e.length; n < i; n++) t[0] += e[n][0] - e[n - 1][0], t[1] += e[n][1] - e[n - 1][1];
                    return t
                }
            }, {
                key: "getPrimaryDistance",
                value: function() {
                    var e = this.getDistance();
                    return Math.abs(e[0]) > Math.abs(e[1]) ? e[0] : e[1]
                }
            }, {
                key: "getPointerCoordinates",
                value: function(e) {
                    return "clientX" in e ? [e.clientX, e.clientY] : e.originalEvent.touches ? [e.originalEvent.touches[0].clientX, e.originalEvent.touches[0].clientY] : void 0
                }
            }]), e
        }();
    jQuery.event.special.swipe = {
        add: function(e) {
            var t = (0, s["default"])(this),
                n = new c(t, e);
            t.data("swipe_" + e.guid, n)
        },
        remove: function(e) {
            var t = (0, s["default"])(this).data("swipe_" + e.guid);
            t && ((0, s["default"])(this).data("swipe_" + e.guid, null), t.destroy())
        }
    }, s["default"].fn.swipe = function(e) {
        return this.on("swipe", e)
    }
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        o = n(3),
        s = i(o),
        l = n(44),
        u = function() {
            function e(t) {
                a(this, e), this.controller = t;
                var n = this.$container = t.$container,
                    i = this.uid = (0, l.generateUid)();
                n.on("beforeScreenChange." + i, this.updateThemeClassNames.bind(this))
            }
            return r(e, [{
                key: "destroy",
                value: function() {
                    var e = this.$container,
                        t = this.uid;
                    e.off("." + t), this.$container = this.controller = null
                }
            }, {
                key: "updateThemeClassNames",
                value: function(e) {
                    var t = this.getScreenClassNames(e.prevValue),
                        n = this.getScreenClassNames(e.value),
                        i = (0, s["default"])(".js-left-theme"),
                        a = (0, s["default"])(".js-right-theme");
                    i.addClass("ui-animation"), a.addClass("ui-animation"), setTimeout(function() {
                        i.removeClass(t.left).addClass(n.left), a.removeClass(t.right).addClass(n.right)
                    }, 16), setTimeout(function() {
                        i.removeClass("ui-animation"), a.removeClass("ui-animation")
                    }, 1e3)
                }
            }, {
                key: "getScreenClassNames",
                value: function(e) {
                    var t = this.controller.$screens.eq(e);
                    return {
                        left: "ui-" + (t.data("leftTheme") || t.data("theme")),
                        right: "ui-" + (t.data("rightTheme") || t.data("theme"))
                    }
                }
            }]), e
        }();
    t["default"] = u
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        o = n(3),
        s = (i(o), n(44));
    n(45), n(46);
    var l = n(5),
        u = i(l),
        c = function() {
            function e(t) {
                var n = this;
                a(this, e), this.controller = t;
                this.$container = t.$container, this.uid = (0, s.generateUid)();
                this.loadImages(t.index), setTimeout(function() {
                    n.loadImages(t.index + 1)
                }, 2e3)
            }
            return r(e, [{
                key: "destroy",
                value: function() {
                    var e = this.$container,
                        t = this.uid;
                    e.off("." + t), this.$container = this.controller = null
                }
            }, {
                key: "loadImages",
                value: function(e) {
                    var t = this.controller.$screens.eq(e),
                        n = t.find("[data-src]"),
                        i = t.find("img").not(n);
                    n.lazyload(), i.get().forEach(u["default"])
                }
            }, {
                key: "beforeTransitionScreenIn",
                value: function(e) {
                    this.loadImages(e), this.loadImages(e + 1)
                }
            }]), e
        }();
    t["default"] = c
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        o = n(3),
        s = i(o);
    n(44);
    n(91);
    var l = function() {
        function e(t) {
            a(this, e), this.controller = t
        }
        return r(e, [{
            key: "destroy",
            value: function() {
                this.controller = null
            }
        }, {
            key: "beforeTransitionScreenOut",
            value: function(e) {
                this.splitScreenContent(e)
            }
        }, {
            key: "beforeTransitionScreenIn",
            value: function(e) {
                this.splitScreenContent(e), this.updateScrollable(e)
            }
        }, {
            key: "splitScreenContent",
            value: function(e) {
                var t = this.controller.$screens.eq(e),
                    n = t.find(".screen-transition-animation-content p");
                n.each(function(e, t) {
                    var n = (0, s["default"])(t),
                        i = n.data("split"),
                        a = n.data("splitlines");
                    i || a === !1 || n.data("split", !0).splitLines({
                        tag: "<span><span>",
                        width: n.width(),
                        keepHtml: !0
                    })
                })
            }
        }, {
            key: "updateScrollable",
            value: function() {
                var e = this.controller.getScrollableElement();
                e.length && e.scrollable("update")
            }
        }]), e
    }();
    t["default"] = l
}, function(e, t) {
    "use strict";
    /**
     * Splits new lines of text into separate divs
     *
     * ### Options:
     * - `width` string The width of the box. By default, it tries to use the
     *   element's width. If you don't define a width, there's no way to split it
     *   by lines!
     *  - `tag` string The tag to wrap the lines in
     *  - `keepHtml` boolean Whether or not to try and preserve the html within
     *   the element. Default is true
     *
     *  @param options object The options object
     *  @author Jeremy Harris
     *  @license MIT License (http://www.opensource.org/licenses/mit-license.php)
     *  @copyright Copyright (c) 2012 Jeremy Harris
     */
    ! function(e) {
        function t(e) {
            return e.clone().css({
                position: "absolute"
            })
        }

        function n(t) {
            for (var a, r = [], o = 0; o < t.length; o++) {
                if (3 == t[o].nodeType) a = i(t[o].textContent || t[o].toString());
                else {
                    var s = e(t[o]).clone();
                    a = n(s.contents());
                    for (var l in a) s.empty(), a[l] = s.html(a[l]).wrap("<p></p>").parent().html()
                }
                for (var u in a) r.push(a[u])
            }
            return r
        }

        function i(e) {
            return e.split(/\s+/)
        }

        function a(t, n) {
            return t = "<div>" + t, e(t).find('*:not(:has("*"))').html(n).parentsUntil().slice(-1).html()
        }
        e.fn.splitLines = function(r) {
            var o = {
                width: "auto",
                tag: "<div>",
                wrap: "",
                keepHtml: !0
            };
            r && e.extend(o, r);
            var s = t(this),
                l = this.contents(),
                u = this.text();
            this.append(s), s.text("42");
            var c = s.height() + 2;
            s.empty();
            var d = t(s);
            "auto" !== o.width && d.width(o.width), this.append(d);
            for (var f, h = o.keepHtml ? n(l) : i(u), p = 0; p < h.length; p++) {
                var m = d.html();
                d.html(m + h[p] + " "), d.html() != f ? d.height() > c && (f = d.html(), d.html(m), s.append(a(o.tag, d.html())), d.html(""), p--) : (f = "", s.append(a(o.tag, d.html())), d.html(""))
            }
            s.append(a(o.tag, d.html())), this.html(s.html())
        }
    }(jQuery)
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        o = n(3),
        s = (i(o), function() {
            function e() {
                a(this, e)
            }
            return r(e, [{
                key: "beforeTransitionScreenIn",
                value: function(e) {}
            }]), e
        }());
    t["default"] = s
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        o = n(3),
        s = i(o),
        l = n(44);
    n(45);
    var u = n(7),
        c = (i(u), n(51)),
        d = (i(c), n(67)),
        f = (i(d), n(94)),
        h = i(f),
        p = n(95),
        m = i(p),
        g = n(168),
        v = i(g),
        y = n(47),
        w = i(y),
        b = function() {
            function e(t, n) {
                a(this, e);
                var i = (this.options = s["default"].extend({}, n), this.$container = (0, s["default"])(t));
                this.$intro = i.find(".js-intro-screen"), this.$carousel = i.find(".js-intro-carousel"), this.uid = (0, l.generateUid)(), (0, s["default"])(document);
                this.frozen = !1, this.url = document.location.pathname, i.screenController(), this.plugins = [new h["default"](this), new m["default"](this), new v["default"](this)]
            }
            return r(e, [{
                key: "freeze",
                value: function() {
                    this.frozen || (this.frozen = !0, this.plugins.forEach(function(e) {
                        return e.freeze && e.freeze()
                    }))
                }
            }, {
                key: "unfreeze",
                value: function() {
                    this.frozen && (this.frozen = !1, this.plugins.forEach(function(e) {
                        return e.unfreeze && e.unfreeze()
                    }))
                }
            }, {
                key: "destroy",
                value: function() {
                    var e = (this.$screens, this.$intro, this.uid, this.plugins);
                    e.forEach(function(e) {
                        return e.destory && e.destory()
                    }), this.$container = this.$intro = this.plugins = this.options = null
                }
            }, {
                key: "open",
                value: function(e) {
                    var t = this,
                        n = s["default"].Deferred();
                    return this.canOpenUrl(e) && this.url !== e && !w["default"].animating && w["default"].allowPageChange ? ! function() {
                        var i = t.$container,
                            a = t.url,
                            r = t.plugins;
                        t.url = e, r.forEach(function(t) {
                            return t.beforeOpen && t.beforeOpen(e, a)
                        }), i.screenController("open", 0).done(function() {
                            r.forEach(function(t) {
                                return t.open && t.open(e, a)
                            });
                            var i = new jQuery.Event("pageChange", {
                                url: e,
                                prevUrl: a
                            });
                            t.$container.triggerHandler(i), n.resolve()
                        })
                    }() : n.resolve(), n.promise()
                }
            }, {
                key: "canOpenUrl",
                value: function(e) {
                    return !String(e).match(/(tel|mailto):/)
                }
            }]), e
        }();
    t["default"] = b, s["default"].fn.pageController = (0, l.createPlugin)(b)
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        o = n(3),
        s = i(o),
        l = n(44);
    n(86);
    var u = function() {
        function e(t) {
            a(this, e), this.controller = t;
            var n = (this.$container = t.$container, this.uid = (0, l.generateUid)()),
                i = (0, s["default"])(document);
            i.on("tap." + n + " click." + n + " dblclick." + n, "a[href]", this.handleLinkNavigation.bind(this)), i.on("keydown." + n, null, "right", this.next.bind(this)), i.on("keydown." + n, null, "left", this.previous.bind(this))
        }
        return r(e, [{
            key: "destroy",
            value: function() {
                var e = this.$container,
                    t = (0, s["default"])(document),
                    n = this.uid;
                e.off("." + n), t.off("." + n), this.$container = this.controller = null
            }
        }, {
            key: "next",
            value: function() {
                var e = (0, s["default"])(".js-navigation a.active[href]").next("a");
                e.length && this.controller.open(e.attr("href"))
            }
        }, {
            key: "previous",
            value: function() {
                var e = (0, s["default"])(".js-navigation a.active[href]").prev("a");
                e.length && this.controller.open(e.attr("href"))
            }
        }, {
            key: "handleLinkNavigation",
            value: function(e) {
                var t = (0, s["default"])(e.target).closest("a[href]");
                if ("_blank" !== t.attr("target") && t.length && this.$container && this.$container.length) {
                    var n = t.attr("href").match(/^(https?:\/\/[^\/\?#]+)?([^\#]*)(#(.*))?/),
                        i = n && n[2] || "/";
                    n && n[4] || "top";
                    i.match(/\.pdf$/) || i.match(/^(tel|mailto):/) || (e.preventDefault(), i !== this.url && this.controller.open(i))
                }
            }
        }, {
            key: "open",
            value: function(e) {
                var t = (0, s["default"])(".js-navigation a[href]"),
                    n = t.filter('[href="' + e + '"]');
                n.length && !n.hasClass("active") && (t.removeClass("active"), n.addClass("active"))
            }
        }]), e
    }();
    t["default"] = u
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        o = n(3),
        s = i(o),
        l = n(44),
        u = n(96),
        c = i(u);
    jQuery.fn.ready = function() {
        function e(e) {
            n.push(e), t(e)
        }
        var t = jQuery.fn.ready,
            n = e.queue = [];
        return e
    }();
    var d = function() {
        function e(t) {
            a(this, e), this.controller = t;
            this.$container = t.$container, this.$intro = (0, s["default"])(".js-intro-screen"), this.uid = (0, l.generateUid)();
            this.cache = {}, this.queue = null, this.loadedScripts = s["default"].map((0, s["default"])("script"), function(e) {
                return (0, s["default"])(e).attr("src")
            })
        }
        return r(e, [{
            key: "beforeOpen",
            value: function(e) {
                var t = this,
                    n = this.cache;
                n[e] || (n[e] = s["default"].ajax({
                    url: e,
                    dataType: "text"
                }).then(function(n) {
                    return s["default"].Deferred().resolve(t.parseHTML(e, n))
                })), setTimeout(function() {
                    n[e].done(function() {
                        var n = t.controller.plugins;
                        n.forEach(function(t) {
                            return t.pageLoad && t.pageLoad(e)
                        })
                    })
                }, 16)
            }
        }, {
            key: "open",
            value: function(e) {
                if (this.controller.frozen) this.queue = e;
                else {
                    var t = this.cache;
                    t[e].done(this.setPageContent.bind(this))
                }
            }
        }, {
            key: "unfreeze",
            value: function() {
                var e = this.queue;
                e && (this.queue = null, this.open(e))
            }
        }, {
            key: "parseHTML",
            value: function(e, t) {
                var n = t.match(/<title[^>]*>([\s\S]*?)<\/title>/),
                    i = t.match(/<!--\s*ajax:begin\s*-->([\s\S]*)<!--\s*ajax:end\s*-->/),
                    a = [],
                    r = [],
                    o = this.loadedScripts;
                return n = n ? n[1] : document.title, i = i ? i[1] : "", t.replace(/<link[^>]+?rel="stylesheet"[^>]+?href="([^"]+)"/g, function(e, t) {
                    r.push(t)
                }), t.replace(/<script[^>]+src="([^"]+)".*?<\/script>/g, function(e, t) {
                    o.indexOf(t) === -1 && (a.push({
                        src: t
                    }), o.push(t))
                }), t.replace(/<script>([\s\S]*?)<\/script>/g, function(e, t) {
                    o.indexOf(t) === -1 && (a.push({
                        content: t
                    }), o.push(t))
                }), i = i.replace(/<script[^>]+src="([^"]+)".*?<\/script>/g, ""), {
                    url: e,
                    title: n,
                    html: i,
                    scripts: a,
                    stylesheets: r
                }
            }
        }, {
            key: "setPageContent",
            value: function(e) {
                var t = this,
                    n = this.$intro,
                    i = n.nextAll(),
                    a = (0, s["default"])(document);
                a.trigger("unloadScripts"), i.remove(), history.pushState({
                    url: e.url
                }, e.title, e.url), this.setStylesheets(e.stylesheets).always(function() {
                    n.get(0).insertAdjacentHTML("afterend", e.html), t.setTitle(e.title), t.setScripts(e.scripts);
                    var i = t.controller.plugins;
                    i.forEach(function(t) {
                        return t.pageReady && t.pageReady(e.url)
                    }), a.trigger("pageReady")
                })
            }
        }, {
            key: "setTitle",
            value: function(e) {
                document.title = e
            }
        }, {
            key: "setScripts",
            value: function(e) {
                var t = this.$intro,
                    n = t.nextAll(),
                    i = (0, s["default"])("body"),
                    a = this.loadedScripts;
                jQuery.fn.ready.queue.forEach(function(e) {
                    return e()
                }), e.forEach(function(e) {
                    a[e.src || e.content] || (e.src ? i.append('<script src="' + e.src + '"></script>') : i.append("<script>" + e.content + "</script>"), a[e.src || e.content] = !0)
                }), n.each(function(e, t) {
                    s["default"].app.parse((0, s["default"])(t))
                })
            }
        }, {
            key: "setStylesheets",
            value: function(e) {
                var t = [].concat(e),
                    n = (0, s["default"])(),
                    i = (0, s["default"])('link[rel="stylesheet"]'),
                    a = (0, s["default"])("head");
                return i.each(function(e, i) {
                    var a = (0, s["default"])(i),
                        r = a.attr("href"),
                        o = t.indexOf(r);
                    o === -1 ? n = n.add(a) : t.splice(o, 1)
                }), s["default"].when((0, c["default"])(t, function(e) {
                    var t = s["default"].Deferred(),
                        n = (0, s["default"])('<link rel="stylesheet" href="' + e + '" />');
                    return n.on("load", t.resolve.bind(t)), n.on("error", t.reject.bind(t)), a.append(n), t.promise()
                })).then(function() {
                    n.remove()
                })
            }
        }]), e
    }();
    t["default"] = d
}, function(e, t, n) {
    function i(e, t) {
        var n = s(e) ? a : o;
        return n(e, r(t, 3))
    }
    var a = n(97),
        r = n(98),
        o = n(167),
        s = n(38);
    e.exports = i
}, function(e, t) {
    function n(e, t) {
        for (var n = -1, i = e.length, a = Array(i); ++n < i;) a[n] = t(e[n], n, e);
        return a
    }
    e.exports = n
}, function(e, t, n) {
    function i(e) {
        var t = typeof e;
        return "function" == t ? e : null == e ? o : "object" == t ? s(e) ? r(e[0], e[1]) : a(e) : l(e)
    }
    var a = n(99),
        r = n(151),
        o = n(19),
        s = n(38),
        l = n(165);
    e.exports = i
}, function(e, t, n) {
    function i(e) {
        var t = r(e);
        if (1 == t.length && t[0][2]) {
            var n = t[0][0],
                i = t[0][1];
            return function(e) {
                return null != e && (e[n] === i && (void 0 !== i || n in Object(e)))
            }
        }
        return function(n) {
            return n === e || a(n, e, t)
        }
    }
    var a = n(100),
        r = n(147);
    e.exports = i
}, function(e, t, n) {
    function i(e, t, n, i) {
        var l = n.length,
            u = l,
            c = !i;
        if (null == e) return !u;
        for (e = Object(e); l--;) {
            var d = n[l];
            if (c && d[2] ? d[1] !== e[d[0]] : !(d[0] in e)) return !1
        }
        for (; ++l < u;) {
            d = n[l];
            var f = d[0],
                h = e[f],
                p = d[1];
            if (c && d[2]) {
                if (void 0 === h && !(f in e)) return !1
            } else {
                var m = new a,
                    g = i ? i(h, p, f, e, t, m) : void 0;
                if (!(void 0 === g ? r(p, h, i, o | s, m) : g)) return !1
            }
        }
        return !0
    }
    var a = n(101),
        r = n(133),
        o = 1,
        s = 2;
    e.exports = i
}, function(e, t, n) {
    function i(e) {
        var t = -1,
            n = e ? e.length : 0;
        for (this.clear(); ++t < n;) {
            var i = e[t];
            this.set(i[0], i[1])
        }
    }
    var a = n(102),
        r = n(103),
        o = n(107),
        s = n(109),
        l = n(111);
    i.prototype.clear = a, i.prototype["delete"] = r, i.prototype.get = o, i.prototype.has = s, i.prototype.set = l, e.exports = i
}, function(e, t) {
    function n() {
        this.__data__ = {
            array: [],
            map: null
        }
    }
    e.exports = n
}, function(e, t, n) {
    function i(e) {
        var t = this.__data__,
            n = t.array;
        return n ? a(n, e) : t.map["delete"](e)
    }
    var a = n(104);
    e.exports = i
}, function(e, t, n) {
    function i(e, t) {
        var n = a(e, t);
        if (n < 0) return !1;
        var i = e.length - 1;
        return n == i ? e.pop() : o.call(e, n, 1), !0
    }
    var a = n(105),
        r = Array.prototype,
        o = r.splice;
    e.exports = i
}, function(e, t, n) {
    function i(e, t) {
        for (var n = e.length; n--;)
            if (a(e[n][0], t)) return n;
        return -1
    }
    var a = n(106);
    e.exports = i
}, function(e, t) {
    function n(e, t) {
        return e === t || e !== e && t !== t
    }
    e.exports = n
}, function(e, t, n) {
    function i(e) {
        var t = this.__data__,
            n = t.array;
        return n ? a(n, e) : t.map.get(e)
    }
    var a = n(108);
    e.exports = i
}, function(e, t, n) {
    function i(e, t) {
        var n = a(e, t);
        return n < 0 ? void 0 : e[n][1]
    }
    var a = n(105);
    e.exports = i
}, function(e, t, n) {
    function i(e) {
        var t = this.__data__,
            n = t.array;
        return n ? a(n, e) : t.map.has(e)
    }
    var a = n(110);
    e.exports = i
}, function(e, t, n) {
    function i(e, t) {
        return a(e, t) > -1
    }
    var a = n(105);
    e.exports = i
}, function(e, t, n) {
    function i(e, t) {
        var n = this.__data__,
            i = n.array;
        i && (i.length < o - 1 ? r(i, e, t) : (n.array = null, n.map = new a(i)));
        var s = n.map;
        return s && s.set(e, t), this
    }
    var a = n(112),
        r = n(131),
        o = 200;
    e.exports = i
}, function(e, t, n) {
    function i(e) {
        var t = -1,
            n = e ? e.length : 0;
        for (this.clear(); ++t < n;) {
            var i = e[t];
            this.set(i[0], i[1])
        }
    }
    var a = n(113),
        r = n(123),
        o = n(127),
        s = n(129),
        l = n(130);
    i.prototype.clear = a, i.prototype["delete"] = r, i.prototype.get = o, i.prototype.has = s, i.prototype.set = l, e.exports = i
}, function(e, t, n) {
    function i() {
        this.__data__ = {
            hash: new a,
            map: r ? new r : [],
            string: new a
        }
    }
    var a = n(114),
        r = n(119);
    e.exports = i
}, function(e, t, n) {
    function i() {}
    var a = n(115),
        r = Object.prototype;
    i.prototype = a ? a(null) : r, e.exports = i
}, function(e, t, n) {
    var i = n(116),
        a = i(Object, "create");
    e.exports = a
}, function(e, t, n) {
    function i(e, t) {
        var n = e[t];
        return a(n) ? n : void 0
    }
    var a = n(117);
    e.exports = i
}, function(e, t, n) {
    function i(e) {
        return null != e && (a(e) ? f.test(c.call(e)) : o(e) && (r(e) ? f : l).test(e))
    }
    var a = n(34),
        r = n(118),
        o = n(37),
        s = /[\\^$.*+?()[\]{}|]/g,
        l = /^\[object .+?Constructor\]$/,
        u = Object.prototype,
        c = Function.prototype.toString,
        d = u.hasOwnProperty,
        f = RegExp("^" + c.call(d).replace(s, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    e.exports = i
}, function(e, t) {
    function n(e) {
        var t = !1;
        if (null != e && "function" != typeof e.toString) try {
            t = !!(e + "")
        } catch (n) {}
        return t
    }
    e.exports = n
}, function(e, t, n) {
    var i = n(116),
        a = n(120),
        r = i(a, "Map");
    e.exports = r
}, function(e, t, n) {
    (function(e, i) {
        var a = n(122),
            r = {
                "function": !0,
                object: !0
            },
            o = r[typeof t] && t && !t.nodeType ? t : void 0,
            s = r[typeof e] && e && !e.nodeType ? e : void 0,
            l = a(o && s && "object" == typeof i && i),
            u = a(r[typeof self] && self),
            c = a(r[typeof window] && window),
            d = a(r[typeof this] && this),
            f = l || c !== (d && d.window) && c || u || d || Function("return this")();
        e.exports = f
    }).call(t, n(121)(e), function() {
        return this
    }())
}, function(e, t) {
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children = [], e.webpackPolyfill = 1), e
    }
}, function(e, t) {
    function n(e) {
        return e && e.Object === Object ? e : null
    }
    e.exports = n
}, function(e, t, n) {
    function i(e) {
        var t = this.__data__;
        return s(e) ? o("string" == typeof e ? t.string : t.hash, e) : a ? t.map["delete"](e) : r(t.map, e)
    }
    var a = n(119),
        r = n(104),
        o = n(124),
        s = n(126);
    e.exports = i
}, function(e, t, n) {
    function i(e, t) {
        return a(e, t) && delete e[t]
    }
    var a = n(125);
    e.exports = i
}, function(e, t, n) {
    function i(e, t) {
        return a ? void 0 !== e[t] : o.call(e, t)
    }
    var a = n(115),
        r = Object.prototype,
        o = r.hasOwnProperty;
    e.exports = i
}, function(e, t) {
    function n(e) {
        var t = typeof e;
        return "number" == t || "boolean" == t || "string" == t && "__proto__" != e || null == e
    }
    e.exports = n
}, function(e, t, n) {
    function i(e) {
        var t = this.__data__;
        return s(e) ? o("string" == typeof e ? t.string : t.hash, e) : a ? t.map.get(e) : r(t.map, e)
    }
    var a = n(119),
        r = n(108),
        o = n(128),
        s = n(126);
    e.exports = i
}, function(e, t, n) {
    function i(e, t) {
        if (a) {
            var n = e[t];
            return n === r ? void 0 : n
        }
        return s.call(e, t) ? e[t] : void 0
    }
    var a = n(115),
        r = "__lodash_hash_undefined__",
        o = Object.prototype,
        s = o.hasOwnProperty;
    e.exports = i
}, function(e, t, n) {
    function i(e) {
        var t = this.__data__;
        return s(e) ? o("string" == typeof e ? t.string : t.hash, e) : a ? t.map.has(e) : r(t.map, e)
    }
    var a = n(119),
        r = n(110),
        o = n(125),
        s = n(126);
    e.exports = i
}, function(e, t, n) {
    function i(e, t) {
        var n = this.__data__;
        return s(e) ? o("string" == typeof e ? n.string : n.hash, e, t) : a ? n.map.set(e, t) : r(n.map, e, t), this
    }
    var a = n(119),
        r = n(131),
        o = n(132),
        s = n(126);
    e.exports = i
}, function(e, t, n) {
    function i(e, t, n) {
        var i = a(e, t);
        i < 0 ? e.push([t, n]) : e[i][1] = n
    }
    var a = n(105);
    e.exports = i
}, function(e, t, n) {
    function i(e, t, n) {
        e[t] = a && void 0 === n ? r : n
    }
    var a = n(115),
        r = "__lodash_hash_undefined__";
    e.exports = i
}, function(e, t, n) {
    function i(e, t, n, s, l) {
        return e === t || (null == e || null == t || !r(e) && !o(t) ? e !== e && t !== t : a(e, t, i, n, s, l))
    }
    var a = n(134),
        r = n(35),
        o = n(37);
    e.exports = i
}, function(e, t, n) {
    function i(e, t, n, i, g, y) {
        var w = u(e),
            b = u(t),
            k = p,
            x = p;
        w || (k = l(e), k = k == h ? m : k), b || (x = l(t), x = x == h ? m : x);
        var S = k == m && !c(e),
            C = x == m && !c(t),
            _ = k == x;
        if (_ && !S) return y || (y = new a), w || d(e) ? r(e, t, n, i, g, y) : o(e, t, k, n, i, g, y);
        if (!(g & f)) {
            var j = S && v.call(e, "__wrapped__"),
                T = C && v.call(t, "__wrapped__");
            if (j || T) return y || (y = new a), n(j ? e.value() : e, T ? t.value() : t, i, g, y)
        }
        return !!_ && (y || (y = new a), s(e, t, n, i, g, y))
    }
    var a = n(101),
        r = n(135),
        o = n(137),
        s = n(142),
        l = n(143),
        u = n(38),
        c = n(118),
        d = n(146),
        f = 2,
        h = "[object Arguments]",
        p = "[object Array]",
        m = "[object Object]",
        g = Object.prototype,
        v = g.hasOwnProperty;
    e.exports = i
}, function(e, t, n) {
    function i(e, t, n, i, s, l) {
        var u = -1,
            c = s & o,
            d = s & r,
            f = e.length,
            h = t.length;
        if (f != h && !(c && h > f)) return !1;
        var p = l.get(e);
        if (p) return p == t;
        var m = !0;
        for (l.set(e, t); ++u < f;) {
            var g = e[u],
                v = t[u];
            if (i) var y = c ? i(v, g, u, t, e, l) : i(g, v, u, e, t, l);
            if (void 0 !== y) {
                if (y) continue;
                m = !1;
                break
            }
            if (d) {
                if (!a(t, function(e) {
                        return g === e || n(g, e, i, s, l)
                    })) {
                    m = !1;
                    break
                }
            } else if (g !== v && !n(g, v, i, s, l)) {
                m = !1;
                break
            }
        }
        return l["delete"](e), m
    }
    var a = n(136),
        r = 1,
        o = 2;
    e.exports = i
}, function(e, t) {
    function n(e, t) {
        for (var n = -1, i = e.length; ++n < i;)
            if (t(e[n], n, e)) return !0;
        return !1
    }
    e.exports = n
}, function(e, t, n) {
    function i(e, t, n, i, a, k, S) {
        switch (n) {
            case b:
                return !(e.byteLength != t.byteLength || !i(new r(e), new r(t)));
            case d:
            case f:
                return +e == +t;
            case h:
                return e.name == t.name && e.message == t.message;
            case m:
                return e != +e ? t != +t : e == +t;
            case g:
            case y:
                return e == t + "";
            case p:
                var C = s;
            case v:
                var _ = k & c;
                if (C || (C = l), e.size != t.size && !_) return !1;
                var j = S.get(e);
                return j ? j == t : o(C(e), C(t), i, a, k | u, S.set(e, t));
            case w:
                if (x) return x.call(e) == x.call(t)
        }
        return !1
    }
    var a = n(138),
        r = n(139),
        o = n(135),
        s = n(140),
        l = n(141),
        u = 1,
        c = 2,
        d = "[object Boolean]",
        f = "[object Date]",
        h = "[object Error]",
        p = "[object Map]",
        m = "[object Number]",
        g = "[object RegExp]",
        v = "[object Set]",
        y = "[object String]",
        w = "[object Symbol]",
        b = "[object ArrayBuffer]",
        k = a ? a.prototype : void 0,
        x = k ? k.valueOf : void 0;
    e.exports = i
}, function(e, t, n) {
    var i = n(120),
        a = i.Symbol;
    e.exports = a
}, function(e, t, n) {
    var i = n(120),
        a = i.Uint8Array;
    e.exports = a
}, function(e, t) {
    function n(e) {
        var t = -1,
            n = Array(e.size);
        return e.forEach(function(e, i) {
            n[++t] = [i, e]
        }), n
    }
    e.exports = n
}, function(e, t) {
    function n(e) {
        var t = -1,
            n = Array(e.size);
        return e.forEach(function(e) {
            n[++t] = e
        }), n
    }
    e.exports = n
}, function(e, t, n) {
    function i(e, t, n, i, s, l) {
        var u = s & o,
            c = r(e),
            d = c.length,
            f = r(t),
            h = f.length;
        if (d != h && !u) return !1;
        for (var p = d; p--;) {
            var m = c[p];
            if (!(u ? m in t : a(t, m))) return !1
        }
        var g = l.get(e);
        if (g) return g == t;
        var v = !0;
        l.set(e, t);
        for (var y = u; ++p < d;) {
            m = c[p];
            var w = e[m],
                b = t[m];
            if (i) var k = u ? i(b, w, m, t, e, l) : i(w, b, m, e, t, l);
            if (!(void 0 === k ? w === b || n(w, b, i, s, l) : k)) {
                v = !1;
                break
            }
            y || (y = "constructor" == m)
        }
        if (v && !y) {
            var x = e.constructor,
                S = t.constructor;
            x != S && "constructor" in e && "constructor" in t && !("function" == typeof x && x instanceof x && "function" == typeof S && S instanceof S) && (v = !1)
        }
        return l["delete"](e), v
    }
    var a = n(25),
        r = n(24),
        o = 2;
    e.exports = i
}, function(e, t, n) {
    function i(e) {
        return h.call(e)
    }
    var a = n(119),
        r = n(144),
        o = n(145),
        s = "[object Map]",
        l = "[object Object]",
        u = "[object Set]",
        c = "[object WeakMap]",
        d = Object.prototype,
        f = Function.prototype.toString,
        h = d.toString,
        p = a ? f.call(a) : "",
        m = r ? f.call(r) : "",
        g = o ? f.call(o) : "";
    (a && i(new a) != s || r && i(new r) != u || o && i(new o) != c) && (i = function(e) {
        var t = h.call(e),
            n = t == l ? e.constructor : null,
            i = "function" == typeof n ? f.call(n) : "";
        if (i) switch (i) {
            case p:
                return s;
            case m:
                return u;
            case g:
                return c
        }
        return t
    }), e.exports = i
}, function(e, t, n) {
    var i = n(116),
        a = n(120),
        r = i(a, "Set");
    e.exports = r
}, function(e, t, n) {
    var i = n(116),
        a = n(120),
        r = i(a, "WeakMap");
    e.exports = r
}, function(e, t, n) {
    function i(e) {
        return r(e) && a(e.length) && !!P[M.call(e)]
    }
    var a = n(36),
        r = n(37),
        o = "[object Arguments]",
        s = "[object Array]",
        l = "[object Boolean]",
        u = "[object Date]",
        c = "[object Error]",
        d = "[object Function]",
        f = "[object Map]",
        h = "[object Number]",
        p = "[object Object]",
        m = "[object RegExp]",
        g = "[object Set]",
        v = "[object String]",
        y = "[object WeakMap]",
        w = "[object ArrayBuffer]",
        b = "[object Float32Array]",
        k = "[object Float64Array]",
        x = "[object Int8Array]",
        S = "[object Int16Array]",
        C = "[object Int32Array]",
        _ = "[object Uint8Array]",
        j = "[object Uint8ClampedArray]",
        T = "[object Uint16Array]",
        O = "[object Uint32Array]",
        P = {};
    P[b] = P[k] = P[x] = P[S] = P[C] = P[_] = P[j] = P[T] = P[O] = !0, P[o] = P[s] = P[w] = P[l] = P[u] = P[c] = P[d] = P[f] = P[h] = P[p] = P[m] = P[g] = P[v] = P[y] = !1;
    var A = Object.prototype,
        M = A.toString;
    e.exports = i
}, function(e, t, n) {
    function i(e) {
        for (var t = r(e), n = t.length; n--;) t[n][2] = a(t[n][1]);
        return t
    }
    var a = n(148),
        r = n(149);
    e.exports = i
}, function(e, t, n) {
    function i(e) {
        return e === e && !a(e)
    }
    var a = n(35);
    e.exports = i
}, function(e, t, n) {
    function i(e) {
        return a(e, r(e))
    }
    var a = n(150),
        r = n(24);
    e.exports = i
}, function(e, t, n) {
    function i(e, t) {
        return a(t, function(t) {
            return [t, e[t]]
        })
    }
    var a = n(97);
    e.exports = i
}, function(e, t, n) {
    function i(e, t) {
        return function(n) {
            var i = r(n, e);
            return void 0 === i && i === t ? o(n, e) : a(t, i, void 0, s | l)
        }
    }
    var a = n(133),
        r = n(152),
        o = n(159),
        s = 1,
        l = 2;
    e.exports = i
}, function(e, t, n) {
    function i(e, t, n) {
        var i = null == e ? void 0 : a(e, t);
        return void 0 === i ? n : i
    }
    var a = n(153);
    e.exports = i
}, function(e, t, n) {
    function i(e, t) {
        t = r(t, e) ? [t + ""] : a(t);
        for (var n = 0, i = t.length; null != e && n < i;) e = e[t[n++]];
        return n && n == i ? e : void 0
    }
    var a = n(154),
        r = n(158);
    e.exports = i
}, function(e, t, n) {
    function i(e) {
        return a(e) ? e : r(e)
    }
    var a = n(38),
        r = n(155);
    e.exports = i
}, function(e, t, n) {
    function i(e) {
        var t = [];
        return a(e).replace(r, function(e, n, i, a) {
            t.push(i ? a.replace(o, "$1") : n || e)
        }), t
    }
    var a = n(156),
        r = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]/g,
        o = /\\(\\)?/g;
    e.exports = i
}, function(e, t, n) {
    function i(e) {
        if ("string" == typeof e) return e;
        if (null == e) return "";
        if (r(e)) return l ? l.call(e) : "";
        var t = e + "";
        return "0" == t && 1 / e == -o ? "-0" : t
    }
    var a = n(138),
        r = n(157),
        o = 1 / 0,
        s = a ? a.prototype : void 0,
        l = s ? s.toString : void 0;
    e.exports = i
}, function(e, t, n) {
    function i(e) {
        return "symbol" == typeof e || a(e) && s.call(e) == r
    }
    var a = n(37),
        r = "[object Symbol]",
        o = Object.prototype,
        s = o.toString;
    e.exports = i
}, function(e, t, n) {
    function i(e, t) {
        return "number" == typeof e || !a(e) && (o.test(e) || !r.test(e) || null != t && e in Object(t))
    }
    var a = n(38),
        r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        o = /^\w*$/;
    e.exports = i
}, function(e, t, n) {
    function i(e, t) {
        return r(e, t, a)
    }
    var a = n(160),
        r = n(161);
    e.exports = i
}, function(e, t) {
    function n(e, t) {
        return t in Object(e)
    }
    e.exports = n
}, function(e, t, n) {
    function i(e, t, n) {
        if (null == e) return !1;
        var i = n(e, t);
        i || l(t) || (t = a(t), e = f(e, t), null != e && (t = d(t), i = n(e, t)));
        var h = e ? e.length : void 0;
        return i || !!h && u(h) && s(t, h) && (o(e) || c(e) || r(e))
    }
    var a = n(154),
        r = n(29),
        o = n(38),
        s = n(40),
        l = n(158),
        u = n(36),
        c = n(39),
        d = n(162),
        f = n(163);
    e.exports = i
}, function(e, t) {
    function n(e) {
        var t = e ? e.length : 0;
        return t ? e[t - 1] : void 0
    }
    e.exports = n
}, function(e, t, n) {
    function i(e, t) {
        return 1 == t.length ? e : r(e, a(t, 0, -1))
    }
    var a = n(164),
        r = n(152);
    e.exports = i
}, function(e, t) {
    function n(e, t, n) {
        var i = -1,
            a = e.length;
        t < 0 && (t = -t > a ? 0 : a + t), n = n > a ? a : n, n < 0 && (n += a), a = t > n ? 0 : n - t >>> 0, t >>>= 0;
        for (var r = Array(a); ++i < a;) r[i] = e[i + t];
        return r
    }
    e.exports = n
}, function(e, t, n) {
    function i(e) {
        return o(e) ? a(e) : r(e)
    }
    var a = n(33),
        r = n(166),
        o = n(158);
    e.exports = i
}, function(e, t, n) {
    function i(e) {
        return function(t) {
            return a(t, e)
        }
    }
    var a = n(153);
    e.exports = i
}, function(e, t, n) {
    function i(e, t) {
        var n = -1,
            i = r(e) ? Array(e.length) : [];
        return a(e, function(e, a, r) {
            i[++n] = t(e, a, r)
        }), i
    }
    var a = n(20),
        r = n(31);
    e.exports = i
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        o = n(3),
        s = i(o),
        l = (n(44), n(63));
    n(86);
    var u = function() {
        function e(t) {
            a(this, e), this.controller = t, this.fadeIn = !1;
            this.$container = t.$container, (0, s["default"])(document)
        }
        return r(e, [{
            key: "beforeOpen",
            value: function(e, t) {
                var n = this,
                    i = this.$container;
                this.fadeIn = !1, s["default"].when((0, l.getRouteByUrl)(t), (0, l.getRouteByUrl)(e)).done(function(e, t) {
                    "apartment" === t.group && ("apartment" !== e.group && "floor" !== e.group || i.screenController("freeze"), "apartment" === e.group && (i.pageController("freeze"), n.fadeIn = !1, n.contentFadeOutTransition()))
                })
            }
        }, {
            key: "contentFadeOutTransition",
            value: function() {
                var e = this.$container,
                    t = e.find(".screen-active .container-text");
                this.fadeIn = !0, t.addClass("fade animate-fast in"), setTimeout(function() {
                    t.removeClass("in").transitionend().done(function() {
                        e.pageController("unfreeze")
                    })
                }, 16)
            }
        }, {
            key: "contentFadeInTransition",
            value: function() {
                var e = this.$container,
                    t = e.find(".screen-active"),
                    n = t.find(".container-text");
                this.fadeIn = !1, n.addClass("hidden fade"), setTimeout(function() {
                    n.removeClass("hidden"), setTimeout(function() {
                        n.addClass("in").transitionend().done(function() {
                            n.removeClass("fade in")
                        }), t.is(".scrollable") && t.scrollable("update")
                    }, 16)
                }, 16)
            }
        }, {
            key: "pageLoad",
            value: function(e) {
                var t = this.$container;
                t.screenController("unfreeze")
            }
        }, {
            key: "pageReady",
            value: function(e) {
      //console.log("page ready");
                var t = this.$container;
                this.fadeIn && this.contentFadeInTransition(), (0, l.getRouteByUrl)(e).done(function(e) {
                    if ("apartment" === e.group) {
                        var n = (0, s["default"])(".js-screen.screen-active");
                        n.length > 1 && n.slice(1).removeClass("screen-active"), setTimeout(function() {
                            t.screenController("open", 1)
                        }, 16)
                    }
                })
            }
        }]), e
    }();
    t["default"] = u
}, function(e, t, n) {
    "use strict";
    n(170), n(171)
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    var a = n(3),
        r = i(a);
    n(45), n(91);
    var o = n(63);
    (0, r["default"])(function() {
        function e(e) {
            var t = e.find("article p");
            t.each(function(t, n) {
                var i = (0, r["default"])(n),
                    a = i.data("split"),
                    o = i.data("splitlines");
                a || o === !1 || i.data("split", !0).splitLines({
                    tag: "<span><span>",
                    width: e.width(),
                    keepHtml: !0
                })
            })
        }

        function t(t, n) {
            if ("main" === t.group) {
                var r = t.id,
                    o = n.id;
                "main" === n.group || "apartment" !== n.group && "floor" !== n.group || (o = "apartments");
                var s = a.filter('[data-name="' + r + '"]'),
                    l = s.find(".screen-content"),
                    u = a.filter('[data-name="' + o + '"]'),
                    c = u.find(".screen-content");
                s.addClass("sub-screen-on-top"), u.removeClass("sub-screen-on-top"), c.triggerHandler("webkitTransitionEnd"), c.triggerHandler("transitionend"), c.addClass("screen-content-disappear"), l.triggerHandler("webkitTransitionEnd"), l.triggerHandler("transitionend"), l.addClass("screen-content-appear"), e(c), e(l), setTimeout(function() {
                    c.addClass("in"), l.addClass("in").transitionend().done(function() {
                        u.removeClass("sub-screen-active"), c.removeClass("screen-content-disappear").removeClass("in"), s.addClass("sub-screen-active").removeClass("sub-screen-on-top"), l.removeClass("screen-content-appear").removeClass("in")
                    })
                }, 60), i.parallax("open", r)
            }
        }
        var n = (0, r["default"])(".js-controller"),
            i = (0, r["default"])(".js-intro-parallax"),
            a = (0, r["default"])(".js-sub-screen");
        n.on("pageChange", function(e) {
            r["default"].when((0, o.getRouteByUrl)(e.url), (0, o.getRouteByUrl)(e.prevUrl)).done(t)
        })
    })
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    var a = n(3),
        r = i(a),
        o = n(172),
        s = (i(o), n(174)),
        l = i(s),
        u = n(63);
    (0, r["default"])(function() {
        var e = ((0, r["default"])(".js-controller"), (0, r["default"])(".js-intro-parallax"));
        (0, r["default"])(".js-sub-screen");
        e.parallax({
            images: l["default"]
        }), (0, u.getIdByUrl)(document.location.pathname).done(function(t) {
            setTimeout(function() {
                e.parallax("open", t)
            }, 16)
        })
    })
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        o = n(3),
        s = i(o),
        l = n(54),
        u = i(l),
        c = n(44),
        d = n(51),
        f = i(d),
        h = n(7),
        p = i(h),
        m = n(70),
        g = i(m),
        v = n(59),
        y = i(v),
        w = n(173),
        b = i(w),
        k = {
            images: []
        },
        x = function() {
            function e(t, n) {
                a(this, e);
                var i = this.options = s["default"].extend({}, k, n),
                    r = (this.$container = t, this.uid = (0, c.generateUid)());
                this.images = this.processImages(i.images);
                this.physWidth = 0, this.physHeight = 0, this.width = 0, this.height = 0, this.index = -1, this.prevIndex = -1, this.lastTime = 0, this.loading = !0, this.resized = !1, this.pixelRatio = window.devicePixelRatio || 1, this.mask = new g["default"]({
                    image: "images/watercolor-effect-2.png",
                    size: [1867, 1050],
                    position: [.6, .5],
                    autoload: !0
                }), this.mouse = [new y["default"](.5, {
                    force: .05,
                    threshold: .01
                }), new y["default"](.5, {
                    force: .05,
                    threshold: .01
                })], this.transitionState = new b["default"](0, {
                    easing: s["default"].easing.easeOutExpo,
                    duration: 8e3
                }), p["default"].getTouchSupport() || (0, s["default"])(document).on("mousemove." + r, this.handleMouseMove.bind(this)), (0, s["default"])(window).on("resize." + r, this.handleResize.bind(this)), this.createTarget(), (0, u["default"])(this.update.bind(this))
            }
            return r(e, [{
                key: "updateSize",
                value: function() {
                    var e = f["default"].matches("sm-down"),
                        t = window.innerWidth,
                        n = e ? 640 : window.innerHeight;
                    this.physWidth = t, this.physHeight = n, this.width = t * this.pixelRatio, this.height = n * this.pixelRatio
                }
            }, {
                key: "processImages",
                value: function(e) {
                    return s["default"].map(e, function(e) {
                        return [s["default"].map(e.images, function(e) {
                            return new g["default"](e)
                        })]
                    })
                }
            }, {
                key: "createLayer",
                value: function(e) {
                    var t = this.images,
                        n = this.options.images,
                        i = n.length;
                    return n.push(s["default"].extend({
                        id: "",
                        images: []
                    }, e)), t[i] = [], i
                }
            }, {
                key: "getImage",
                value: function(e, t) {
                    var n = this.getIndex(e),
                        i = this.images;
                    if (i[n]) return i[n][t]
                }
            }, {
                key: "setImage",
                value: function(e, t, n) {
                    var i = this.getIndex(e),
                        a = this.images;
                    a[i] || (i = this.createLayer()), a[i][t] = n
                }
            }, {
                key: "replaceImage",
                value: function(e, t, n) {
                    var i = this.getIndex(e),
                        a = this.getImage(i, t);
                    this.setImage(i, t, n), a && a.active && n.activate && n.activate(), a && a.loaded && n.load && n.load()
                }
            }, {
                key: "createTarget",
                value: function() {
                    var e = document.createElement("canvas"),
                        t = this.$container;
                    this.updateSize(), e.setAttribute("width", this.width), e.setAttribute("height", this.height), e.style.width = this.physWidth + "px", e.style.height = this.physHeight + "px", t.append(e), this.target = e, this.ctx = e.getContext("2d")
                }
            }, {
                key: "handleMouseMove",
                value: function(e) {
                    this.mouse[0].val(e.clientX / this.physWidth), this.mouse[1].val(e.clientY / this.physHeight)
                }
            }, {
                key: "handleResize",
                value: function() {
                    this.resized = !0, this.updateSize();
                    var e = this.target;
                    e.setAttribute("width", this.width), e.setAttribute("height", this.height), e.style.width = this.physWidth + "px", e.style.height = this.physHeight + "px"
                }
            }, {
                key: "getIndex",
                value: function(e) {
                    if ("number" == typeof e) return e;
                    for (var t = this.options.images, n = 0, i = t.length; n < i; n++)
                        if (t[n].id === e) return n;
                    return -1
                }
            }, {
                key: "open",
                value: function(e) {
                    var t = this.getIndex(e);
                    if (t !== -1 && this.index !== t) {
                        var n = this.transitionState;
                        this.loadImages(t), n.force(0).val(1).start(), this.prevIndex = this.index, this.index = t, this.prevIndex !== -1 && this.deactivate(this.prevIndex), t !== -1 && this.activate(t)
                    }
                }
            }, {
                key: "activate",
                value: function(e) {
                    for (var t = this.images[e], n = 0, i = t.length; n < i; n++) t[n].activate && t[n].activate()
                }
            }, {
                key: "deactivate",
                value: function(e) {
                    for (var t = this.images[e], n = 0, i = t.length; n < i; n++) t[n].deactivate && t[n].deactivate()
                }
            }, {
                key: "update",
                value: function(e) {
                    (0, u["default"])(this.update.bind(this));
                    var t = e - this.lastTime;
                    this.lastTime = e;
                    var n = !0;
                    if (this.loading && (n = !1, this.getImageState(this.index) && (this.loading = !1, n = !0)), n) {
                        var i = this.mouse,
                            a = i[0].changed() || i[1].changed(),
                            r = this.transitionState.update(t).changed(),
                            o = this.resized,
                            s = !1;
                        this.updateImages(this.index, t) && (s = !0), (s || a || r || o) && this.render(t)
                    }
                }
            }, {
                key: "render",
                value: function(e) {
                    var t = this.ctx,
                        n = this.width,
                        i = this.height,
                        a = this.transitionState,
                        r = a.update(e).val();
                    if (t.clearRect(0, 0, n, i), t.globalAlpha = 1, t.globalCompositeOperation = "source-over", this.renderImages(this.index), 0 !== r && 1 !== r) {
                        var o = 3 * Math.max(.001, (r - .25) / .75),
                            s = Math.max(0, 1 - 2 * r);
                        t.globalCompositeOperation = "destination-in", this.mask.setScale(o).render(t, n, i), t.globalAlpha = s, t.globalCompositeOperation = "source-over", this.renderImages(this.prevIndex), t.globalAlpha = 1
                    }
                }
            }, {
                key: "updateImages",
                value: function(e, t) {
                    if (!(e === -1 || e >= this.images.length)) {
                        for (var n = this.images[e], i = !1, a = 0, r = n.length; a < r; a++) {
                            var o = n[a];
                            o && o.update && o.update(t) && (i = !0)
                        }
                        return i
                    }
                }
            }, {
                key: "renderImages",
                value: function(e) {
                    if (!(e === -1 || e >= this.images.length))
                        for (var t = this.images[e], n = this.ctx, i = this.width, a = this.height, r = this.mouse, o = this.getGlobalOffset(e), s = this.getGlobalScale(e), l = 0, u = t.length; l < u; l++) {
                            var c = t[l].getData(),
                                d = r[0].val() * c.effect[0],
                                f = r[1].val() * c.effect[1];
                            t[l].setOffset(d, f).setGlobalScale(s).render(n, i, a, o[0], o[1])
                        }
                }
            }, {
                key: "loadImages",
                value: function(e) {
                    if (!(e === -1 || e >= this.images.length))
                        for (var t = this.images[e], n = 0, i = t.length; n < i; n++) t[n].isReady() || (this.loading = !0, t[n].load())
                }
            }, {
                key: "getImageState",
                value: function(e) {
                    if (e === -1 || e >= this.images.length) return !0;
                    for (var t = this.images[e], n = 0, i = t.length; n < i; n++)
                        if (!t[n].isReady()) return !1;
                    return !0
                }
            }, {
                key: "getGlobalScale",
                value: function(e) {
                    return f["default"].matches("xxl") && this.pixelRatio > 1 ? this.pixelRatio : !f["default"].matches("sm-down") || e === -1 || e >= this.images.length ? 1 : this.options.images[e].mobileScale || 1;
                }
            }, {
                key: "getGlobalOffset",
                value: function(e) {
                    return !f["default"].matches("sm-down") || e === -1 || e >= this.images.length ? [0, 0] : this.options.images[e].mobileOffset || [0, 0]
                }
            }]), e
        }();
    s["default"].fn.parallax = (0, c.createPlugin)(x)
}, function(e, t) {
    "use strict";

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        a = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                n(this, e), this._value = t, this._from = t, this._to = t, this._duration = i.duration || 1e3, this._easing = i.easing || $.easing.easeInOutExpo, this._time = 0, this._delay = 0, this._running = !1
            }
            return i(e, [{
                key: "val",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    return null != e ? (this._to !== e && (this._to = e), this) : this._value
                }
            }, {
                key: "force",
                value: function(e) {
                    return this._to = this._from = this._value = e, this
                }
            }, {
                key: "changed",
                value: function() {
                    return this._changed
                }
            }, {
                key: "running",
                value: function() {
                    return this._running
                }
            }, {
                key: "start",
                value: function() {
                    return this._from = this._value, this._time = 0, this._running = !0, this
                }
            }, {
                key: "delay",
                value: function(e) {
                    return this._delay = e, this
                }
            }, {
                key: "update",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    if (!this._running) return this._changed = !1, this;
                    var t = this._from,
                        n = this._to,
                        i = this._delay,
                        a = this._duration,
                        r = Math.min(this._time + e, a + i),
                        o = this._easing,
                        s = o(0, r - i, t, n - t, a),
                        l = this._value !== s;
                    return r === a + i && (this._running = !1), this._time = r, this._value = s, this._changed = l, this
                }
            }]), e
        }();
    t["default"] = a
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = n(51),
        r = i(a),
        o = r["default"].matches("sm-down");
    t["default"] = [{
        id: "main",
        mobileOffset: [0, 200],
        mobileScale: 1.2,
        images: [{
            image: "images/5-image.jpg",
            mask: "images/5-mask.png",
            position: o ? [.22, .385] : [.33, .385],
            effect: [-.005, -.005],
            size: [2565, 1441]
        }, {
            image: "images/4-image.jpg",
            mask: "images/4-mask.png",
            position: o ? [.87, .37] : [.984, .37],
            effect: [-.005, -.005],
            size: [2565, 1441]
        }, {
            image: "images/3-image.jpg",
            mask: "images/3-mask.png",
            position: o ? [.49, .34] : [.655, .34],
            effect: [0, 0],
            size: [2565, 1441]
        }, {
            image: "images/media/slideshow/homepage/2-image.jpg",
            mask: "images/2-mask.png",
            position: o ? [.29, .78] : [.4, .78],
            effect: [.01, .005],
            size: [2565, 1441]
        }, {
            image: "images/1-image.jpg",
            mask: "images/1-mask.png",
            position: o ? [.74, .859] : [.865, .859],
            effect: [.02, .01],
            size: [2565, 1441]
        }]
    }, {
        id: "history",
        mobileOffset: [0, 200],
        mobileScale: 1.5,
        images: [{
            image: "images/1-image.jpg",
            mask: "images/1-mask.png",
            position: o ? [.5, .32] : [.8, .32],
            effect: [.002, .002],
            size: [2695, 1516]
        }, {
            image: "images/2-image.jpg",
            mask: "images/2-mask.png",
            position: o ? [.82, .23] : [.92, .23],
            effect: [.003, .003],
            size: [2579, 1450]
        }, {
            image: "images/3-image.jpg",
            mask: "images/3-mask.png",
            position: o ? [.24, .62] : [.39, .62],
            effect: [.004, .004],
            size: [2655, 1493]
        }, {
            image: "images/4-image.jpg",
            mask: "images/4-mask.png",
            position: o ? [.73, .7] : [.85, .7],
            effect: [.02, .01],
            size: [2581, 1451]
        }]
    }, {
        id: "location",
        mobileOffset: [0, 0],
        mobileScale: 1,
        images: [{
            image: "images/1-image.jpg",
            mask: "images/1-mask.png",
            effect: [0, 0],
            size: [1889, 1378]
        }]
    }, {
        id: "apartments",
        mobileOffset: [0, 100],
        mobileScale: 1.5,
        images: [{
            image: "images/3-image.jpg",
            mask: "images/3-mask.png",
            position: [.195, .495],
            effect: [-.0025, -.0025],
            size: [2571, 1446]
        }, {
            image: "images/2-image.jpg",
            mask: "images/2-mask.png",
            position: [.835, .47],
            effect: [-.0025, -.0025],
            size: [2578, 1450]
        }, {
            image: "images/1-image.jpg",
            mask: "images/media/slideshow/apartments/1-mask.png",
            position: [.5, .34],
            effect: [0, 0],
            size: [2575, 1448]
        }]
    }, {
        id: "design",
        mobileOffset: [0, 200],
        mobileScale: 1.5,
        images: [{
            image: "images/1-image.jpg",
            mask: "images/1-mask.png",
            position: o ? [.5, .23] : [.91, .23],
            effect: [.02, .01],
            size: [2688, 1512]
        }]
    }]
}]);