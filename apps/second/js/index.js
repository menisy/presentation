window.BASE_64 = true;
this.createjs = this.createjs || {},
    function() {
        "use strict";
        var a = function(a, b, c) {
                this.initialize(a, b, c)
            },
            b = a.prototype;
        b.type = null, b.target = null, b.currentTarget = null, b.eventPhase = 0, b.bubbles = !1, b.cancelable = !1, b.timeStamp = 0, b.defaultPrevented = !1, b.propagationStopped = !1, b.immediatePropagationStopped = !1, b.removed = !1, b.initialize = function(a, b, c) {
            this.type = a, this.bubbles = b, this.cancelable = c, this.timeStamp = (new Date).getTime()
        }, b.preventDefault = function() {
            this.defaultPrevented = !0
        }, b.stopPropagation = function() {
            this.propagationStopped = !0
        }, b.stopImmediatePropagation = function() {
            this.immediatePropagationStopped = this.propagationStopped = !0
        }, b.remove = function() {
            this.removed = !0
        }, b.clone = function() {
            return new a(this.type, this.bubbles, this.cancelable)
        }, b.toString = function() {
            return "[Event (type=" + this.type + ")]"
        }, createjs.Event = a
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var a = function() {},
            b = a.prototype;
        a.initialize = function(a) {
            a.addEventListener = b.addEventListener, a.on = b.on, a.removeEventListener = a.off = b.removeEventListener, a.removeAllEventListeners = b.removeAllEventListeners, a.hasEventListener = b.hasEventListener, a.dispatchEvent = b.dispatchEvent, a._dispatchEvent = b._dispatchEvent, a.willTrigger = b.willTrigger
        }, b._listeners = null, b._captureListeners = null, b.initialize = function() {}, b.addEventListener = function(a, b, c) {
            var d;
            d = c ? this._captureListeners = this._captureListeners || {} : this._listeners = this._listeners || {};
            var e = d[a];
            return e && this.removeEventListener(a, b, c), e = d[a], e ? e.push(b) : d[a] = [b], b
        }, b.on = function(a, b, c, d, e, f) {
            return b.handleEvent && (c = c || b, b = b.handleEvent), c = c || this, this.addEventListener(a, function(a) {
                b.call(c, a, e), d && a.remove()
            }, f)
        }, b.removeEventListener = function(a, b, c) {
            var d = c ? this._captureListeners : this._listeners;
            if (d) {
                var e = d[a];
                if (e)
                    for (var f = 0, g = e.length; g > f; f++)
                        if (e[f] == b) {
                            1 == g ? delete d[a] : e.splice(f, 1);
                            break
                        }
            }
        }, b.off = b.removeEventListener, b.removeAllEventListeners = function(a) {
            a ? (this._listeners && delete this._listeners[a], this._captureListeners && delete this._captureListeners[a]) : this._listeners = this._captureListeners = null
        }, b.dispatchEvent = function(a, b) {
            if ("string" == typeof a) {
                var c = this._listeners;
                if (!c || !c[a]) return !1;
                a = new createjs.Event(a)
            }
            if (a.target = b || this, a.bubbles && this.parent) {
                for (var d = this, e = [d]; d.parent;) e.push(d = d.parent);
                var f, g = e.length;
                for (f = g - 1; f >= 0 && !a.propagationStopped; f--) e[f]._dispatchEvent(a, 1 + (0 == f));
                for (f = 1; g > f && !a.propagationStopped; f++) e[f]._dispatchEvent(a, 3)
            } else this._dispatchEvent(a, 2);
            return a.defaultPrevented
        }, b.hasEventListener = function(a) {
            var b = this._listeners,
                c = this._captureListeners;
            return !!(b && b[a] || c && c[a])
        }, b.willTrigger = function(a) {
            for (var b = this; b;) {
                if (b.hasEventListener(a)) return !0;
                b = b.parent
            }
            return !1
        }, b.toString = function() {
            return "[EventDispatcher]"
        }, b._dispatchEvent = function(a, b) {
            var c, d = 1 == b ? this._captureListeners : this._listeners;
            if (a && d) {
                var e = d[a.type];
                if (!e || !(c = e.length)) return;
                a.currentTarget = this, a.eventPhase = b, a.removed = !1, e = e.slice();
                for (var f = 0; c > f && !a.immediatePropagationStopped; f++) {
                    var g = e[f];
                    g.handleEvent ? g.handleEvent(a) : g(a), a.removed && (this.off(a.type, g, 1 == b), a.removed = !1)
                }
            }
        }, createjs.EventDispatcher = a
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        createjs.indexOf = function(a, b) {
            for (var c = 0, d = a.length; d > c; c++)
                if (b === a[c]) return c;
            return -1
        }
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var a = function() {
            throw "UID cannot be instantiated"
        };
        a._nextID = 0, a.get = function() {
            return a._nextID++
        }, createjs.UID = a
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var a = function() {
            throw "Ticker cannot be instantiated."
        };
        a.RAF_SYNCHED = "synched", a.RAF = "raf", a.TIMEOUT = "timeout", a.useRAF = !1, a.timingMode = null, a.maxDelta = 0, a.removeEventListener = null, a.removeAllEventListeners = null, a.dispatchEvent = null, a.hasEventListener = null, a._listeners = null, createjs.EventDispatcher.initialize(a), a._addEventListener = a.addEventListener, a.addEventListener = function() {
            return !a._inited && a.init(), a._addEventListener.apply(a, arguments)
        }, a._paused = !1, a._inited = !1, a._startTime = 0, a._pausedTime = 0, a._ticks = 0, a._pausedTicks = 0, a._interval = 50, a._lastTime = 0, a._times = null, a._tickTimes = null, a._timerId = null, a._raf = !0, a.init = function() {
            a._inited || (a._inited = !0, a._times = [], a._tickTimes = [], a._startTime = a._getTime(), a._times.push(a._lastTime = 0), a.setInterval(a._interval))
        }, a.reset = function() {
            if (a._raf) {
                var b = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame;
                b && b(a._timerId)
            } else clearTimeout(a._timerId);
            a.removeAllEventListeners("tick")
        }, a.setInterval = function(b) {
            a._interval = b, a._inited && a._setupTick()
        }, a.getInterval = function() {
            return a._interval
        }, a.setFPS = function(b) {
            a.setInterval(1e3 / b)
        }, a.getFPS = function() {
            return 1e3 / a._interval
        }, a.getMeasuredTickTime = function(b) {
            var c = 0,
                d = a._tickTimes;
            if (d.length < 1) return -1;
            b = Math.min(d.length, b || 0 | a.getFPS());
            for (var e = 0; b > e; e++) c += d[e];
            return c / b
        }, a.getMeasuredFPS = function(b) {
            var c = a._times;
            return c.length < 2 ? -1 : (b = Math.min(c.length - 1, b || 0 | a.getFPS()), 1e3 / ((c[0] - c[b]) / b))
        }, a.setPaused = function(b) {
            a._paused = b
        }, a.getPaused = function() {
            return a._paused
        }, a.getTime = function(b) {
            return a._getTime() - a._startTime - (b ? a._pausedTime : 0)
        }, a.getEventTime = function(b) {
            return (a._lastTime || a._startTime) - (b ? a._pausedTime : 0)
        }, a.getTicks = function(b) {
            return a._ticks - (b ? a._pausedTicks : 0)
        }, a._handleSynch = function() {
            var b = a._getTime() - a._startTime;
            a._timerId = null, a._setupTick(), b - a._lastTime >= .97 * (a._interval - 1) && a._tick()
        }, a._handleRAF = function() {
            a._timerId = null, a._setupTick(), a._tick()
        }, a._handleTimeout = function() {
            a._timerId = null, a._setupTick(), a._tick()
        }, a._setupTick = function() {
            if (null == a._timerId) {
                var b = a.timingMode || a.useRAF && a.RAF_SYNCHED;
                if (b == a.RAF_SYNCHED || b == a.RAF) {
                    var c = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
                    if (c) return a._timerId = c(b == a.RAF ? a._handleRAF : a._handleSynch), a._raf = !0, void 0
                }
                a._raf = !1, a._timerId = setTimeout(a._handleTimeout, a._interval)
            }
        }, a._tick = function() {
            var b = a._getTime() - a._startTime,
                c = b - a._lastTime,
                d = a._paused;
            if (a._ticks++, d && (a._pausedTicks++, a._pausedTime += c), a._lastTime = b, a.hasEventListener("tick")) {
                var e = new createjs.Event("tick"),
                    f = a.maxDelta;
                e.delta = f && c > f ? f : c, e.paused = d, e.time = b, e.runTime = b - a._pausedTime, a.dispatchEvent(e)
            }
            for (a._tickTimes.unshift(a._getTime() - b); a._tickTimes.length > 100;) a._tickTimes.pop();
            for (a._times.unshift(b); a._times.length > 100;) a._times.pop()
        };
        var b = window.performance && (performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow);
        a._getTime = function() {
            return b && b.call(performance) || (new Date).getTime()
        }, createjs.Ticker = a
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var a = function(a, b, c, d, e, f, g, h, i, j) {
                this.initialize(a, b, c, d, e, f, g, h, i, j)
            },
            b = a.prototype = new createjs.Event;
        b.stageX = 0, b.stageY = 0, b.rawX = 0, b.rawY = 0, b.nativeEvent = null, b.pointerID = 0, b.primary = !1, b.addEventListener = null, b.removeEventListener = null, b.removeAllEventListeners = null, b.dispatchEvent = null, b.hasEventListener = null, b._listeners = null, createjs.EventDispatcher.initialize(b), b._get_localX = function() {
            return this.currentTarget.globalToLocal(this.rawX, this.rawY).x
        }, b._get_localY = function() {
            return this.currentTarget.globalToLocal(this.rawX, this.rawY).y
        };
        try {
            Object.defineProperties(b, {
                localX: {
                    get: b._get_localX
                },
                localY: {
                    get: b._get_localY
                }
            })
        } catch (c) {}
        b.Event_initialize = b.initialize, b.initialize = function(a, b, c, d, e, f, g, h, i, j) {
            this.Event_initialize(a, b, c), this.stageX = d, this.stageY = e, this.nativeEvent = f, this.pointerID = g, this.primary = h, this.rawX = null == i ? d : i, this.rawY = null == j ? e : j
        }, b.clone = function() {
            return new a(this.type, this.bubbles, this.cancelable, this.stageX, this.stageY, this.target, this.nativeEvent, this.pointerID, this.primary, this.rawX, this.rawY)
        }, b.toString = function() {
            return "[MouseEvent (type=" + this.type + " stageX=" + this.stageX + " stageY=" + this.stageY + ")]"
        }, createjs.MouseEvent = a
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var a = function(a, b, c, d, e, f) {
                this.initialize(a, b, c, d, e, f)
            },
            b = a.prototype;
        a.identity = null, a.DEG_TO_RAD = Math.PI / 180, b.a = 1, b.b = 0, b.c = 0, b.d = 1, b.tx = 0, b.ty = 0, b.alpha = 1, b.shadow = null, b.compositeOperation = null, b.initialize = function(a, b, c, d, e, f) {
            return this.a = null == a ? 1 : a, this.b = b || 0, this.c = c || 0, this.d = null == d ? 1 : d, this.tx = e || 0, this.ty = f || 0, this
        }, b.prepend = function(a, b, c, d, e, f) {
            var g = this.tx;
            if (1 != a || 0 != b || 0 != c || 1 != d) {
                var h = this.a,
                    i = this.c;
                this.a = h * a + this.b * c, this.b = h * b + this.b * d, this.c = i * a + this.d * c, this.d = i * b + this.d * d
            }
            return this.tx = g * a + this.ty * c + e, this.ty = g * b + this.ty * d + f, this
        }, b.append = function(a, b, c, d, e, f) {
            var g = this.a,
                h = this.b,
                i = this.c,
                j = this.d;
            return this.a = a * g + b * i, this.b = a * h + b * j, this.c = c * g + d * i, this.d = c * h + d * j, this.tx = e * g + f * i + this.tx, this.ty = e * h + f * j + this.ty, this
        }, b.prependMatrix = function(a) {
            return this.prepend(a.a, a.b, a.c, a.d, a.tx, a.ty), this.prependProperties(a.alpha, a.shadow, a.compositeOperation), this
        }, b.appendMatrix = function(a) {
            return this.append(a.a, a.b, a.c, a.d, a.tx, a.ty), this.appendProperties(a.alpha, a.shadow, a.compositeOperation), this
        }, b.prependTransform = function(b, c, d, e, f, g, h, i, j) {
            if (f % 360) var k = f * a.DEG_TO_RAD,
                l = Math.cos(k),
                m = Math.sin(k);
            else l = 1, m = 0;
            return (i || j) && (this.tx -= i, this.ty -= j), g || h ? (g *= a.DEG_TO_RAD, h *= a.DEG_TO_RAD, this.prepend(l * d, m * d, -m * e, l * e, 0, 0), this.prepend(Math.cos(h), Math.sin(h), -Math.sin(g), Math.cos(g), b, c)) : this.prepend(l * d, m * d, -m * e, l * e, b, c), this
        }, b.appendTransform = function(b, c, d, e, f, g, h, i, j) {
            if (f % 360) var k = f * a.DEG_TO_RAD,
                l = Math.cos(k),
                m = Math.sin(k);
            else l = 1, m = 0;
            return g || h ? (g *= a.DEG_TO_RAD, h *= a.DEG_TO_RAD, this.append(Math.cos(h), Math.sin(h), -Math.sin(g), Math.cos(g), b, c), this.append(l * d, m * d, -m * e, l * e, 0, 0)) : this.append(l * d, m * d, -m * e, l * e, b, c), (i || j) && (this.tx -= i * this.a + j * this.c, this.ty -= i * this.b + j * this.d), this
        }, b.rotate = function(a) {
            var b = Math.cos(a),
                c = Math.sin(a),
                d = this.a,
                e = this.c,
                f = this.tx;
            return this.a = d * b - this.b * c, this.b = d * c + this.b * b, this.c = e * b - this.d * c, this.d = e * c + this.d * b, this.tx = f * b - this.ty * c, this.ty = f * c + this.ty * b, this
        }, b.skew = function(b, c) {
            return b *= a.DEG_TO_RAD, c *= a.DEG_TO_RAD, this.append(Math.cos(c), Math.sin(c), -Math.sin(b), Math.cos(b), 0, 0), this
        }, b.scale = function(a, b) {
            return this.a *= a, this.d *= b, this.c *= a, this.b *= b, this.tx *= a, this.ty *= b, this
        }, b.translate = function(a, b) {
            return this.tx += a, this.ty += b, this
        }, b.identity = function() {
            return this.alpha = this.a = this.d = 1, this.b = this.c = this.tx = this.ty = 0, this.shadow = this.compositeOperation = null, this
        }, b.invert = function() {
            var a = this.a,
                b = this.b,
                c = this.c,
                d = this.d,
                e = this.tx,
                f = a * d - b * c;
            return this.a = d / f, this.b = -b / f, this.c = -c / f, this.d = a / f, this.tx = (c * this.ty - d * e) / f, this.ty = -(a * this.ty - b * e) / f, this
        }, b.isIdentity = function() {
            return 0 == this.tx && 0 == this.ty && 1 == this.a && 0 == this.b && 0 == this.c && 1 == this.d
        }, b.transformPoint = function(a, b, c) {
            return c = c || {}, c.x = a * this.a + b * this.c + this.tx, c.y = a * this.b + b * this.d + this.ty, c
        }, b.decompose = function(b) {
            null == b && (b = {}), b.x = this.tx, b.y = this.ty, b.scaleX = Math.sqrt(this.a * this.a + this.b * this.b), b.scaleY = Math.sqrt(this.c * this.c + this.d * this.d);
            var c = Math.atan2(-this.c, this.d),
                d = Math.atan2(this.b, this.a);
            return c == d ? (b.rotation = d / a.DEG_TO_RAD, this.a < 0 && this.d >= 0 && (b.rotation += b.rotation <= 0 ? 180 : -180), b.skewX = b.skewY = 0) : (b.skewX = c / a.DEG_TO_RAD, b.skewY = d / a.DEG_TO_RAD), b
        }, b.reinitialize = function(a, b, c, d, e, f, g, h, i) {
            return this.initialize(a, b, c, d, e, f), this.alpha = null == g ? 1 : g, this.shadow = h, this.compositeOperation = i, this
        }, b.copy = function(a) {
            return this.reinitialize(a.a, a.b, a.c, a.d, a.tx, a.ty, a.alpha, a.shadow, a.compositeOperation)
        }, b.appendProperties = function(a, b, c) {
            return this.alpha *= a, this.shadow = b || this.shadow, this.compositeOperation = c || this.compositeOperation, this
        }, b.prependProperties = function(a, b, c) {
            return this.alpha *= a, this.shadow = this.shadow || b, this.compositeOperation = this.compositeOperation || c, this
        }, b.clone = function() {
            return (new a).copy(this)
        }, b.toString = function() {
            return "[Matrix2D (a=" + this.a + " b=" + this.b + " c=" + this.c + " d=" + this.d + " tx=" + this.tx + " ty=" + this.ty + ")]"
        }, a.identity = new a, createjs.Matrix2D = a
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var a = function(a, b) {
                this.initialize(a, b)
            },
            b = a.prototype;
        b.x = 0, b.y = 0, b.initialize = function(a, b) {
            return this.x = null == a ? 0 : a, this.y = null == b ? 0 : b, this
        }, b.copy = function(a) {
            return this.initialize(a.x, a.y)
        }, b.clone = function() {
            return new a(this.x, this.y)
        }, b.toString = function() {
            return "[Point (x=" + this.x + " y=" + this.y + ")]"
        }, createjs.Point = a
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var a = function(a, b, c, d) {
                this.initialize(a, b, c, d)
            },
            b = a.prototype;
        b.x = 0, b.y = 0, b.width = 0, b.height = 0, b.initialize = function(a, b, c, d) {
            return this.x = a || 0, this.y = b || 0, this.width = c || 0, this.height = d || 0, this
        }, b.copy = function(a) {
            return this.initialize(a.x, a.y, a.width, a.height)
        }, b.clone = function() {
            return new a(this.x, this.y, this.width, this.height)
        }, b.toString = function() {
            return "[Rectangle (x=" + this.x + " y=" + this.y + " width=" + this.width + " height=" + this.height + ")]"
        }, createjs.Rectangle = a
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var a = function(a, b, c, d, e, f, g) {
                this.initialize(a, b, c, d, e, f, g)
            },
            b = a.prototype;
        b.target = null, b.overLabel = null, b.outLabel = null, b.downLabel = null, b.play = !1, b._isPressed = !1, b._isOver = !1, b.initialize = function(a, b, c, d, e, f, g) {
            a.addEventListener && (this.target = a, a.cursor = "pointer", this.overLabel = null == c ? "over" : c, this.outLabel = null == b ? "out" : b, this.downLabel = null == d ? "down" : d, this.play = e, this.setEnabled(!0), this.handleEvent({}), f && (g && (f.actionsEnabled = !1, f.gotoAndStop && f.gotoAndStop(g)), a.hitArea = f))
        }, b.setEnabled = function(a) {
            var b = this.target;
            a ? (b.addEventListener("rollover", this), b.addEventListener("rollout", this), b.addEventListener("mousedown", this), b.addEventListener("pressup", this)) : (b.removeEventListener("rollover", this), b.removeEventListener("rollout", this), b.removeEventListener("mousedown", this), b.removeEventListener("pressup", this))
        }, b.toString = function() {
            return "[ButtonHelper]"
        }, b.handleEvent = function(a) {
            var b, c = this.target,
                d = a.type;
            "mousedown" == d ? (this._isPressed = !0, b = this.downLabel) : "pressup" == d ? (this._isPressed = !1, b = this._isOver ? this.overLabel : this.outLabel) : "rollover" == d ? (this._isOver = !0, b = this._isPressed ? this.downLabel : this.overLabel) : (this._isOver = !1, b = this._isPressed ? this.overLabel : this.outLabel), this.play ? c.gotoAndPlay && c.gotoAndPlay(b) : c.gotoAndStop && c.gotoAndStop(b)
        }, createjs.ButtonHelper = a
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var a = function(a, b, c, d) {
                this.initialize(a, b, c, d)
            },
            b = a.prototype;
        a.identity = null, b.color = null, b.offsetX = 0, b.offsetY = 0, b.blur = 0, b.initialize = function(a, b, c, d) {
            this.color = a, this.offsetX = b, this.offsetY = c, this.blur = d
        }, b.toString = function() {
            return "[Shadow]"
        }, b.clone = function() {
            return new a(this.color, this.offsetX, this.offsetY, this.blur)
        }, a.identity = new a("transparent", 0, 0, 0), createjs.Shadow = a
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var a = function(a) {
                this.initialize(a)
            },
            b = a.prototype = new createjs.EventDispatcher;
        b.complete = !0, b.framerate = 0, b._animations = null, b._frames = null, b._images = null, b._data = null, b._loadCount = 0, b._frameHeight = 0, b._frameWidth = 0, b._numFrames = 0, b._regX = 0, b._regY = 0, b.initialize = function(a) {
            var b, c, d, e;
            if (null != a) {
                if (this.framerate = a.framerate || 0, a.images && (c = a.images.length) > 0)
                    for (e = this._images = [], b = 0; c > b; b++) {
                        var f = a.images[b];
                        if ("string" == typeof f) {
                            var g = f;
                            f = document.createElement("img"), f.src = g
                        }
                        e.push(f), f.getContext || f.complete || (this._loadCount++, this.complete = !1, function(a) {
                            f.onload = function() {
                                a._handleImageLoad()
                            }
                        }(this))
                    }
                if (null == a.frames);
                else if (a.frames instanceof Array)
                    for (this._frames = [], e = a.frames, b = 0, c = e.length; c > b; b++) {
                        var h = e[b];
                        this._frames.push({
                            image: this._images[h[4] ? h[4] : 0],
                            rect: new createjs.Rectangle(h[0], h[1], h[2], h[3]),
                            regX: h[5] || 0,
                            regY: h[6] || 0
                        })
                    } else d = a.frames, this._frameWidth = d.width, this._frameHeight = d.height, this._regX = d.regX || 0, this._regY = d.regY || 0, this._numFrames = d.count, 0 == this._loadCount && this._calculateFrames();
                if (this._animations = [], null != (d = a.animations)) {
                    this._data = {};
                    var i;
                    for (i in d) {
                        var j = {
                                name: i
                            },
                            k = d[i];
                        if ("number" == typeof k) e = j.frames = [k];
                        else if (k instanceof Array)
                            if (1 == k.length) j.frames = [k[0]];
                            else
                                for (j.speed = k[3], j.next = k[2], e = j.frames = [], b = k[0]; b <= k[1]; b++) e.push(b);
                        else {
                            j.speed = k.speed, j.next = k.next;
                            var l = k.frames;
                            e = j.frames = "number" == typeof l ? [l] : l.slice(0)
                        }(j.next === !0 || void 0 === j.next) && (j.next = i), (j.next === !1 || e.length < 2 && j.next == i) && (j.next = null), j.speed || (j.speed = 1), this._animations.push(i), this._data[i] = j
                    }
                }
            }
        }, b.getNumFrames = function(a) {
            if (null == a) return this._frames ? this._frames.length : this._numFrames;
            var b = this._data[a];
            return null == b ? 0 : b.frames.length
        }, b.getAnimations = function() {
            return this._animations.slice(0)
        }, b.getAnimation = function(a) {
            return this._data[a]
        }, b.getFrame = function(a) {
            var b;
            return this._frames && (b = this._frames[a]) ? b : null
        }, b.getFrameBounds = function(a, b) {
            var c = this.getFrame(a);
            return c ? (b || new createjs.Rectangle).initialize(-c.regX, -c.regY, c.rect.width, c.rect.height) : null
        }, b.toString = function() {
            return "[SpriteSheet]"
        }, b.clone = function() {
            var b = new a;
            return b.complete = this.complete, b._animations = this._animations, b._frames = this._frames, b._images = this._images, b._data = this._data, b._frameHeight = this._frameHeight, b._frameWidth = this._frameWidth, b._numFrames = this._numFrames, b._loadCount = this._loadCount, b
        }, b._handleImageLoad = function() {
            0 == --this._loadCount && (this._calculateFrames(), this.complete = !0, this.dispatchEvent("complete"))
        }, b._calculateFrames = function() {
            if (!this._frames && 0 != this._frameWidth) {
                this._frames = [];
                for (var a = 0, b = this._frameWidth, c = this._frameHeight, d = 0, e = this._images; d < e.length; d++) {
                    for (var f = e[d], g = 0 | f.width / b, h = 0 | f.height / c, i = this._numFrames > 0 ? Math.min(this._numFrames - a, g * h) : g * h, j = 0; i > j; j++) this._frames.push({
                        image: f,
                        rect: new createjs.Rectangle(j % g * b, (0 | j / g) * c, b, c),
                        regX: this._regX,
                        regY: this._regY
                    });
                    a += i
                }
                this._numFrames = a
            }
        }, createjs.SpriteSheet = a
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a(a, b, c) {
            this.f = a, this.params = b, this.path = null == c ? !0 : c
        }
        a.prototype.exec = function(a) {
            this.f.apply(a, this.params)
        };
        var b = function() {
                this.initialize()
            },
            c = b.prototype;
        b.getRGB = function(a, b, c, d) {
            return null != a && null == c && (d = b, c = 255 & a, b = 255 & a >> 8, a = 255 & a >> 16), null == d ? "rgb(" + a + "," + b + "," + c + ")" : "rgba(" + a + "," + b + "," + c + "," + d + ")"
        }, b.getHSL = function(a, b, c, d) {
            return null == d ? "hsl(" + a % 360 + "," + b + "%," + c + "%)" : "hsla(" + a % 360 + "," + b + "%," + c + "%," + d + ")"
        }, b.Command = a, b.BASE_64 = {
            A: 0,
            B: 1,
            C: 2,
            D: 3,
            E: 4,
            F: 5,
            G: 6,
            H: 7,
            I: 8,
            J: 9,
            K: 10,
            L: 11,
            M: 12,
            N: 13,
            O: 14,
            P: 15,
            Q: 16,
            R: 17,
            S: 18,
            T: 19,
            U: 20,
            V: 21,
            W: 22,
            X: 23,
            Y: 24,
            Z: 25,
            a: 26,
            b: 27,
            c: 28,
            d: 29,
            e: 30,
            f: 31,
            g: 32,
            h: 33,
            i: 34,
            j: 35,
            k: 36,
            l: 37,
            m: 38,
            n: 39,
            o: 40,
            p: 41,
            q: 42,
            r: 43,
            s: 44,
            t: 45,
            u: 46,
            v: 47,
            w: 48,
            x: 49,
            y: 50,
            z: 51,
            0: 52,
            1: 53,
            2: 54,
            3: 55,
            4: 56,
            5: 57,
            6: 58,
            7: 59,
            8: 60,
            9: 61,
            "+": 62,
            "/": 63
        }, b.STROKE_CAPS_MAP = ["butt", "round", "square"], b.STROKE_JOINTS_MAP = ["miter", "round", "bevel"];
        var d = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
        if (d.getContext) {
            var e = b._ctx = d.getContext("2d");
            b.beginCmd = new a(e.beginPath, [], !1), b.fillCmd = new a(e.fill, [], !1), b.strokeCmd = new a(e.stroke, [], !1), d.width = d.height = 1
        }
        c._strokeInstructions = null, c._strokeStyleInstructions = null, c._strokeIgnoreScale = !1, c._fillInstructions = null, c._fillMatrix = null, c._instructions = null, c._oldInstructions = null, c._activeInstructions = null, c._active = !1, c._dirty = !1, c.initialize = function() {
            this.clear(), this._ctx = b._ctx
        }, c.isEmpty = function() {
            return !(this._instructions.length || this._oldInstructions.length || this._activeInstructions.length)
        }, c.draw = function(a) {
            this._dirty && this._updateInstructions();
            for (var b = this._instructions, c = 0, d = b.length; d > c; c++) b[c].exec(a)
        }, c.drawAsPath = function(a) {
            this._dirty && this._updateInstructions();
            for (var b, c = this._instructions, d = 0, e = c.length; e > d; d++)((b = c[d]).path || 0 == d) && b.exec(a)
        }, c.moveTo = function(b, c) {
            return this._activeInstructions.push(new a(this._ctx.moveTo, [b, c])), this
        }, c.lineTo = function(b, c) {
            return this._dirty = this._active = !0, this._activeInstructions.push(new a(this._ctx.lineTo, [b, c])), this
        }, c.arcTo = function(b, c, d, e, f) {
            return this._dirty = this._active = !0, this._activeInstructions.push(new a(this._ctx.arcTo, [b, c, d, e, f])), this
        }, c.arc = function(b, c, d, e, f, g) {
            return this._dirty = this._active = !0, null == g && (g = !1), this._activeInstructions.push(new a(this._ctx.arc, [b, c, d, e, f, g])), this
        }, c.quadraticCurveTo = function(b, c, d, e) {
            return this._dirty = this._active = !0, this._activeInstructions.push(new a(this._ctx.quadraticCurveTo, [b, c, d, e])), this
        }, c.bezierCurveTo = function(b, c, d, e, f, g) {
            return this._dirty = this._active = !0, this._activeInstructions.push(new a(this._ctx.bezierCurveTo, [b, c, d, e, f, g])), this
        }, c.rect = function(b, c, d, e) {
            return this._dirty = this._active = !0, this._activeInstructions.push(new a(this._ctx.rect, [b, c, d, e])), this
        }, c.closePath = function() {
            return this._active && (this._dirty = !0, this._activeInstructions.push(new a(this._ctx.closePath, []))), this
        }, c.clear = function() {
            return this._instructions = [], this._oldInstructions = [], this._activeInstructions = [], this._strokeStyleInstructions = this._strokeInstructions = this._fillInstructions = this._fillMatrix = null, this._active = this._dirty = this._strokeIgnoreScale = !1, this
        }, c.beginFill = function(b) {
            return this._active && this._newPath(), this._fillInstructions = b ? [new a(this._setProp, ["fillStyle", b], !1)] : null, this._fillMatrix = null, this
        }, c.beginLinearGradientFill = function(b, c, d, e, f, g) {
            this._active && this._newPath();
            for (var h = this._ctx.createLinearGradient(d, e, f, g), i = 0, j = b.length; j > i; i++) h.addColorStop(c[i], b[i]);
            return this._fillInstructions = [new a(this._setProp, ["fillStyle", h], !1)], this._fillMatrix = null, this
        }, c.beginRadialGradientFill = function(b, c, d, e, f, g, h, i) {
            this._active && this._newPath();
            for (var j = this._ctx.createRadialGradient(d, e, f, g, h, i), k = 0, l = b.length; l > k; k++) j.addColorStop(c[k], b[k]);
            return this._fillInstructions = [new a(this._setProp, ["fillStyle", j], !1)], this._fillMatrix = null, this
        }, c.beginBitmapFill = function(b, c, d) {
            this._active && this._newPath(), c = c || "";
            var e = this._ctx.createPattern(b, c);
            return this._fillInstructions = [new a(this._setProp, ["fillStyle", e], !1)], this._fillMatrix = d ? [d.a, d.b, d.c, d.d, d.tx, d.ty] : null, this
        }, c.endFill = function() {
            return this.beginFill()
        }, c.setStrokeStyle = function(c, d, e, f, g) {
            return this._active && this._newPath(), this._strokeStyleInstructions = [new a(this._setProp, ["lineWidth", null == c ? "1" : c], !1), new a(this._setProp, ["lineCap", null == d ? "butt" : isNaN(d) ? d : b.STROKE_CAPS_MAP[d]], !1), new a(this._setProp, ["lineJoin", null == e ? "miter" : isNaN(e) ? e : b.STROKE_JOINTS_MAP[e]], !1), new a(this._setProp, ["miterLimit", null == f ? "10" : f], !1)], this._strokeIgnoreScale = g, this
        }, c.beginStroke = function(b) {
            return this._active && this._newPath(), this._strokeInstructions = b ? [new a(this._setProp, ["strokeStyle", b], !1)] : null, this
        }, c.beginLinearGradientStroke = function(b, c, d, e, f, g) {
            this._active && this._newPath();
            for (var h = this._ctx.createLinearGradient(d, e, f, g), i = 0, j = b.length; j > i; i++) h.addColorStop(c[i], b[i]);
            return this._strokeInstructions = [new a(this._setProp, ["strokeStyle", h], !1)], this
        }, c.beginRadialGradientStroke = function(b, c, d, e, f, g, h, i) {
            this._active && this._newPath();
            for (var j = this._ctx.createRadialGradient(d, e, f, g, h, i), k = 0, l = b.length; l > k; k++) j.addColorStop(c[k], b[k]);
            return this._strokeInstructions = [new a(this._setProp, ["strokeStyle", j], !1)], this
        }, c.beginBitmapStroke = function(b, c) {
            this._active && this._newPath(), c = c || "";
            var d = this._ctx.createPattern(b, c);
            return this._strokeInstructions = [new a(this._setProp, ["strokeStyle", d], !1)], this
        }, c.endStroke = function() {
            return this.beginStroke(), this
        }, c.curveTo = c.quadraticCurveTo, c.drawRect = c.rect, c.drawRoundRect = function(a, b, c, d, e) {
            return this.drawRoundRectComplex(a, b, c, d, e, e, e, e), this
        }, c.drawRoundRectComplex = function(b, c, d, e, f, g, h, i) {
            var j = (e > d ? d : e) / 2,
                k = 0,
                l = 0,
                m = 0,
                n = 0;
            0 > f && (f *= k = -1), f > j && (f = j), 0 > g && (g *= l = -1), g > j && (g = j), 0 > h && (h *= m = -1), h > j && (h = j), 0 > i && (i *= n = -1), i > j && (i = j), this._dirty = this._active = !0;
            var o = this._ctx.arcTo,
                p = this._ctx.lineTo;
            return this._activeInstructions.push(new a(this._ctx.moveTo, [b + d - g, c]), new a(o, [b + d + g * l, c - g * l, b + d, c + g, g]), new a(p, [b + d, c + e - h]), new a(o, [b + d + h * m, c + e + h * m, b + d - h, c + e, h]), new a(p, [b + i, c + e]), new a(o, [b - i * n, c + e + i * n, b, c + e - i, i]), new a(p, [b, c + f]), new a(o, [b - f * k, c - f * k, b + f, c, f]), new a(this._ctx.closePath)), this
        }, c.drawCircle = function(a, b, c) {
            return this.arc(a, b, c, 0, 2 * Math.PI), this
        }, c.drawEllipse = function(b, c, d, e) {
            this._dirty = this._active = !0;
            var f = .5522848,
                g = d / 2 * f,
                h = e / 2 * f,
                i = b + d,
                j = c + e,
                k = b + d / 2,
                l = c + e / 2;
            return this._activeInstructions.push(new a(this._ctx.moveTo, [b, l]), new a(this._ctx.bezierCurveTo, [b, l - h, k - g, c, k, c]), new a(this._ctx.bezierCurveTo, [k + g, c, i, l - h, i, l]), new a(this._ctx.bezierCurveTo, [i, l + h, k + g, j, k, j]), new a(this._ctx.bezierCurveTo, [k - g, j, b, l + h, b, l])), this
        }, c.inject = function(b, c) {
            return this._dirty = this._active = !0, this._activeInstructions.push(new a(b, [c])), this
        }, c.drawPolyStar = function(b, c, d, e, f, g) {
            this._dirty = this._active = !0, null == f && (f = 0), f = 1 - f, null == g ? g = 0 : g /= 180 / Math.PI;
            var h = Math.PI / e;
            this._activeInstructions.push(new a(this._ctx.moveTo, [b + Math.cos(g) * d, c + Math.sin(g) * d]));
            for (var i = 0; e > i; i++) g += h, 1 != f && this._activeInstructions.push(new a(this._ctx.lineTo, [b + Math.cos(g) * d * f, c + Math.sin(g) * d * f])), g += h, this._activeInstructions.push(new a(this._ctx.lineTo, [b + Math.cos(g) * d, c + Math.sin(g) * d]));
            return this
        }, c.decodePath = function(a) {
            for (var c = [this.moveTo, this.lineTo, this.quadraticCurveTo, this.bezierCurveTo, this.closePath], d = [2, 2, 4, 6, 0], e = 0, f = a.length, g = [], h = 0, i = 0, j = b.BASE_64; f > e;) {
                var k = a.charAt(e),
                    l = j[k],
                    m = l >> 3,
                    n = c[m];
                if (!n || 3 & l) throw "bad path data (@" + e + "): " + k;
                var o = d[m];
                m || (h = i = 0), g.length = 0, e++;
                for (var p = (1 & l >> 2) + 2, q = 0; o > q; q++) {
                    var r = j[a.charAt(e)],
                        s = r >> 5 ? -1 : 1;
                    r = (31 & r) << 6 | j[a.charAt(e + 1)], 3 == p && (r = r << 6 | j[a.charAt(e + 2)]), r = s * r / 10, q % 2 ? h = r += h : i = r += i, g[q] = r, e += p
                }
                n.apply(this, g)
            }
            return this
        }, c.clone = function() {
            var a = new b;
            return a._instructions = this._instructions.slice(), a._activeInstructions = this._activeInstructions.slice(), a._oldInstructions = this._oldInstructions.slice(), this._fillInstructions && (a._fillInstructions = this._fillInstructions.slice()), this._strokeInstructions && (a._strokeInstructions = this._strokeInstructions.slice()), this._strokeStyleInstructions && (a._strokeStyleInstructions = this._strokeStyleInstructions.slice()), a._active = this._active, a._dirty = this._dirty, a._fillMatrix = this._fillMatrix, a._strokeIgnoreScale = this._strokeIgnoreScale, a
        }, c.toString = function() {
            return "[Graphics]"
        }, c.mt = c.moveTo, c.lt = c.lineTo, c.at = c.arcTo, c.bt = c.bezierCurveTo, c.qt = c.quadraticCurveTo, c.a = c.arc, c.r = c.rect, c.cp = c.closePath, c.c = c.clear, c.f = c.beginFill, c.lf = c.beginLinearGradientFill, c.rf = c.beginRadialGradientFill, c.bf = c.beginBitmapFill, c.ef = c.endFill, c.ss = c.setStrokeStyle, c.s = c.beginStroke, c.ls = c.beginLinearGradientStroke, c.rs = c.beginRadialGradientStroke, c.bs = c.beginBitmapStroke, c.es = c.endStroke, c.dr = c.drawRect, c.rr = c.drawRoundRect, c.rc = c.drawRoundRectComplex, c.dc = c.drawCircle, c.de = c.drawEllipse, c.dp = c.drawPolyStar, c.p = c.decodePath, c._updateInstructions = function() {
            this._instructions = this._oldInstructions.slice(), this._instructions.push(b.beginCmd), this._appendInstructions(this._fillInstructions), this._appendInstructions(this._strokeInstructions), this._appendInstructions(this._strokeInstructions && this._strokeStyleInstructions), this._appendInstructions(this._activeInstructions), this._fillInstructions && this._appendDraw(b.fillCmd, this._fillMatrix), this._strokeInstructions && this._appendDraw(b.strokeCmd, this._strokeIgnoreScale && [1, 0, 0, 1, 0, 0])
        }, c._appendInstructions = function(a) {
            a && this._instructions.push.apply(this._instructions, a)
        }, c._appendDraw = function(b, c) {
            c ? this._instructions.push(new a(this._ctx.save, [], !1), new a(this._ctx.transform, c, !1), b, new a(this._ctx.restore, [], !1)) : this._instructions.push(b)
        }, c._newPath = function() {
            this._dirty && this._updateInstructions(), this._oldInstructions = this._instructions, this._activeInstructions = [], this._active = this._dirty = !1
        }, c._setProp = function(a, b) {
            this[a] = b
        }, createjs.Graphics = b
    }(), this.createjs = this.createjs || {},
    function() {
        var a = function() {
                this.initialize()
            },
            b = a.prototype = new createjs.EventDispatcher;
        a._MOUSE_EVENTS = ["click", "dblclick", "mousedown", "mouseout", "mouseover", "pressmove", "pressup", "rollout", "rollover"], a.suppressCrossDomainErrors = !1;
        var c = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
        c.getContext && (a._hitTestCanvas = c, a._hitTestContext = c.getContext("2d"), c.width = c.height = 1), a._nextCacheID = 1, b.alpha = 1, b.cacheCanvas = null, b.id = -1, b.mouseEnabled = !0, b.tickEnabled = !0, b.name = null, b.parent = null, b.regX = 0, b.regY = 0, b.rotation = 0, b.scaleX = 1, b.scaleY = 1, b.skewX = 0, b.skewY = 0, b.shadow = null, b.visible = !0, b.x = 0, b.y = 0, b.compositeOperation = null, b.snapToPixel = !1, b.filters = null, b.cacheID = 0, b.mask = null, b.hitArea = null, b.cursor = null, b._cacheOffsetX = 0, b._cacheOffsetY = 0, b._cacheScale = 1, b._cacheDataURLID = 0, b._cacheDataURL = null, b._matrix = null, b._rectangle = null, b._bounds = null, b.initialize = function() {
            this.id = createjs.UID.get(), this._matrix = new createjs.Matrix2D, this._rectangle = new createjs.Rectangle
        }, b.isVisible = function() {
            return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY)
        }, b.draw = function(a, b) {
            var c = this.cacheCanvas;
            if (b || !c) return !1;
            var d, e = this._cacheScale,
                f = this._cacheOffsetX,
                g = this._cacheOffsetY;
            return (d = this._applyFilterBounds(f, g, 0, 0)) && (f = d.x, g = d.y), a.drawImage(c, f, g, c.width / e, c.height / e), !0
        }, b.updateContext = function(a) {
            var b, c = this.mask,
                d = this;
            c && c.graphics && !c.graphics.isEmpty() && (b = c.getMatrix(c._matrix), a.transform(b.a, b.b, b.c, b.d, b.tx, b.ty), c.graphics.drawAsPath(a), a.clip(), b.invert(), a.transform(b.a, b.b, b.c, b.d, b.tx, b.ty)), b = d._matrix.identity().appendTransform(d.x, d.y, d.scaleX, d.scaleY, d.rotation, d.skewX, d.skewY, d.regX, d.regY), createjs.Stage._snapToPixelEnabled && d.snapToPixel ? a.transform(b.a, b.b, b.c, b.d, 0 | b.tx + .5, 0 | b.ty + .5) : a.transform(b.a, b.b, b.c, b.d, b.tx, b.ty), a.globalAlpha *= d.alpha, d.compositeOperation && (a.globalCompositeOperation = d.compositeOperation), d.shadow && this._applyShadow(a, d.shadow)
        }, b.cache = function(a, b, c, d, e) {
            e = e || 1, this.cacheCanvas || (this.cacheCanvas = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas")), this._cacheWidth = c, this._cacheHeight = d, this._cacheOffsetX = a, this._cacheOffsetY = b, this._cacheScale = e, this.updateCache()
        }, b.updateCache = function(b) {
            var c, d = this.cacheCanvas,
                e = this._cacheScale,
                f = this._cacheOffsetX * e,
                g = this._cacheOffsetY * e,
                h = this._cacheWidth,
                i = this._cacheHeight;
            if (!d) throw "cache() must be called before updateCache()";
            var j = d.getContext("2d");
            (c = this._applyFilterBounds(f, g, h, i)) && (f = c.x, g = c.y, h = c.width, i = c.height), h = Math.ceil(h * e), i = Math.ceil(i * e), h != d.width || i != d.height ? (d.width = h, d.height = i) : b || j.clearRect(0, 0, h + 1, i + 1), j.save(), j.globalCompositeOperation = b, j.setTransform(e, 0, 0, e, -f, -g), this.draw(j, !0), this._applyFilters(), j.restore(), this.cacheID = a._nextCacheID++
        }, b.uncache = function() {
            this._cacheDataURL = this.cacheCanvas = null, this.cacheID = this._cacheOffsetX = this._cacheOffsetY = 0, this._cacheScale = 1
        }, b.getCacheDataURL = function() {
            return this.cacheCanvas ? (this.cacheID != this._cacheDataURLID && (this._cacheDataURL = this.cacheCanvas.toDataURL()), this._cacheDataURL) : null
        }, b.getStage = function() {
            for (var a = this; a.parent;) a = a.parent;
            return a instanceof createjs.Stage ? a : null
        }, b.localToGlobal = function(a, b) {
            var c = this.getConcatenatedMatrix(this._matrix);
            return null == c ? null : (c.append(1, 0, 0, 1, a, b), new createjs.Point(c.tx, c.ty))
        }, b.globalToLocal = function(a, b) {
            var c = this.getConcatenatedMatrix(this._matrix);
            return null == c ? null : (c.invert(), c.append(1, 0, 0, 1, a, b), new createjs.Point(c.tx, c.ty))
        }, b.localToLocal = function(a, b, c) {
            var d = this.localToGlobal(a, b);
            return c.globalToLocal(d.x, d.y)
        }, b.setTransform = function(a, b, c, d, e, f, g, h, i) {
            return this.x = a || 0, this.y = b || 0, this.scaleX = null == c ? 1 : c, this.scaleY = null == d ? 1 : d, this.rotation = e || 0, this.skewX = f || 0, this.skewY = g || 0, this.regX = h || 0, this.regY = i || 0, this
        }, b.getMatrix = function(a) {
            var b = this;
            return (a ? a.identity() : new createjs.Matrix2D).appendTransform(b.x, b.y, b.scaleX, b.scaleY, b.rotation, b.skewX, b.skewY, b.regX, b.regY).appendProperties(b.alpha, b.shadow, b.compositeOperation)
        }, b.getConcatenatedMatrix = function(a) {
            a ? a.identity() : a = new createjs.Matrix2D;
            for (var b = this; null != b;) a.prependTransform(b.x, b.y, b.scaleX, b.scaleY, b.rotation, b.skewX, b.skewY, b.regX, b.regY).prependProperties(b.alpha, b.shadow, b.compositeOperation), b = b.parent;
            return a
        }, b.hitTest = function(b, c) {
            var d = a._hitTestContext;
            d.setTransform(1, 0, 0, 1, -b, -c), this.draw(d);
            var e = this._testHit(d);
            return d.setTransform(1, 0, 0, 1, 0, 0), d.clearRect(0, 0, 2, 2), e
        }, b.set = function(a) {
            for (var b in a) this[b] = a[b];
            return this
        }, b.getBounds = function() {
            if (this._bounds) return this._rectangle.copy(this._bounds);
            var a = this.cacheCanvas;
            if (a) {
                var b = this._cacheScale;
                return this._rectangle.initialize(this._cacheOffsetX, this._cacheOffsetY, a.width / b, a.height / b)
            }
            return null
        }, b.getTransformedBounds = function() {
            return this._getBounds()
        }, b.setBounds = function(a, b, c, d) {
            null == a && (this._bounds = a), this._bounds = (this._bounds || new createjs.Rectangle).initialize(a, b, c, d)
        }, b.clone = function() {
            var b = new a;
            return this.cloneProps(b), b
        }, b.toString = function() {
            return "[DisplayObject (name=" + this.name + ")]"
        }, b.cloneProps = function(a) {
            a.alpha = this.alpha, a.name = this.name, a.regX = this.regX, a.regY = this.regY, a.rotation = this.rotation, a.scaleX = this.scaleX, a.scaleY = this.scaleY, a.shadow = this.shadow, a.skewX = this.skewX, a.skewY = this.skewY, a.visible = this.visible, a.x = this.x, a.y = this.y, a._bounds = this._bounds, a.mouseEnabled = this.mouseEnabled, a.compositeOperation = this.compositeOperation
        }, b._applyShadow = function(a, b) {
            b = b || Shadow.identity, a.shadowColor = b.color, a.shadowOffsetX = b.offsetX, a.shadowOffsetY = b.offsetY, a.shadowBlur = b.blur
        }, b._tick = function(a) {
            var b = this._listeners;
            if (b && b.tick) {
                var c = new createjs.Event("tick");
                c.params = a, this._dispatchEvent(c, this, 2)
            }
        }, b._testHit = function(b) {
            try {
                var c = b.getImageData(0, 0, 1, 1).data[3] > 1
            } catch (d) {
                if (!a.suppressCrossDomainErrors) throw "An error has occurred. This is most likely due to security restrictions on reading canvas pixel data with local or cross-domain images."
            }
            return c
        }, b._applyFilters = function() {
            if (this.filters && 0 != this.filters.length && this.cacheCanvas)
                for (var a = this.filters.length, b = this.cacheCanvas.getContext("2d"), c = this.cacheCanvas.width, d = this.cacheCanvas.height, e = 0; a > e; e++) this.filters[e].applyFilter(b, 0, 0, c, d)
        }, b._applyFilterBounds = function(a, b, c, d) {
            var e, f, g = this.filters;
            if (!g || !(f = g.length)) return null;
            for (var h = 0; f > h; h++) {
                var i = this.filters[h],
                    j = i.getBounds && i.getBounds();
                j && (e || (e = this._rectangle.initialize(a, b, c, d)), e.x += j.x, e.y += j.y, e.width += j.width, e.height += j.height)
            }
            return e
        }, b._getBounds = function(a, b) {
            return this._transformBounds(this.getBounds(), a, b)
        }, b._transformBounds = function(a, b, c) {
            if (!a) return a;
            var d = a.x,
                e = a.y,
                f = a.width,
                g = a.height,
                h = c ? this._matrix.identity() : this.getMatrix(this._matrix);
            (d || e) && h.appendTransform(0, 0, 1, 1, 0, 0, 0, -d, -e), b && h.prependMatrix(b);
            var i = f * h.a,
                j = f * h.b,
                k = g * h.c,
                l = g * h.d,
                m = h.tx,
                n = h.ty,
                o = m,
                p = m,
                q = n,
                r = n;
            return (d = i + m) < o ? o = d : d > p && (p = d), (d = i + k + m) < o ? o = d : d > p && (p = d), (d = k + m) < o ? o = d : d > p && (p = d), (e = j + n) < q ? q = e : e > r && (r = e), (e = j + l + n) < q ? q = e : e > r && (r = e), (e = l + n) < q ? q = e : e > r && (r = e), a.initialize(o, q, p - o, r - q)
        }, b._hasMouseEventListener = function() {
            for (var b = a._MOUSE_EVENTS, c = 0, d = b.length; d > c; c++)
                if (this.hasEventListener(b[c])) return !0;
            return !!this.cursor
        }, createjs.DisplayObject = a
    }(), this.createjs = this.createjs || {},
    function() {
        var a = function() {
                this.initialize()
            },
            b = a.prototype = new createjs.DisplayObject;
        b.children = null, b.mouseChildren = !0, b.tickChildren = !0, b.DisplayObject_initialize = b.initialize, b.initialize = function() {
            this.DisplayObject_initialize(), this.children = []
        }, b.isVisible = function() {
            var a = this.cacheCanvas || this.children.length;
            return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && a)
        }, b.DisplayObject_draw = b.draw, b.draw = function(a, b) {
            if (this.DisplayObject_draw(a, b)) return !0;
            for (var c = this.children.slice(0), d = 0, e = c.length; e > d; d++) {
                var f = c[d];
                f.isVisible() && (a.save(), f.updateContext(a), f.draw(a), a.restore())
            }
            return !0
        }, b.addChild = function(a) {
            if (null == a) return a;
            var b = arguments.length;
            if (b > 1) {
                for (var c = 0; b > c; c++) this.addChild(arguments[c]);
                return arguments[b - 1]
            }
            return a.parent && a.parent.removeChild(a), a.parent = this, this.children.push(a), a
        }, b.addChildAt = function(a, b) {
            var c = arguments.length,
                d = arguments[c - 1];
            if (0 > d || d > this.children.length) return arguments[c - 2];
            if (c > 2) {
                for (var e = 0; c - 1 > e; e++) this.addChildAt(arguments[e], d + e);
                return arguments[c - 2]
            }
            return a.parent && a.parent.removeChild(a), a.parent = this, this.children.splice(b, 0, a), a
        }, b.removeChild = function(a) {
            var b = arguments.length;
            if (b > 1) {
                for (var c = !0, d = 0; b > d; d++) c = c && this.removeChild(arguments[d]);
                return c
            }
            return this.removeChildAt(createjs.indexOf(this.children, a))
        }, b.removeChildAt = function(a) {
            var b = arguments.length;
            if (b > 1) {
                for (var c = [], d = 0; b > d; d++) c[d] = arguments[d];
                c.sort(function(a, b) {
                    return b - a
                });
                for (var e = !0, d = 0; b > d; d++) e = e && this.removeChildAt(c[d]);
                return e
            }
            if (0 > a || a > this.children.length - 1) return !1;
            var f = this.children[a];
            return f && (f.parent = null), this.children.splice(a, 1), !0
        }, b.removeAllChildren = function() {
            for (var a = this.children; a.length;) a.pop().parent = null
        }, b.getChildAt = function(a) {
            return this.children[a]
        }, b.getChildByName = function(a) {
            for (var b = this.children, c = 0, d = b.length; d > c; c++)
                if (b[c].name == a) return b[c];
            return null
        }, b.sortChildren = function(a) {
            this.children.sort(a)
        }, b.getChildIndex = function(a) {
            return createjs.indexOf(this.children, a)
        }, b.getNumChildren = function() {
            return this.children.length
        }, b.swapChildrenAt = function(a, b) {
            var c = this.children,
                d = c[a],
                e = c[b];
            d && e && (c[a] = e, c[b] = d)
        }, b.swapChildren = function(a, b) {
            for (var c, d, e = this.children, f = 0, g = e.length; g > f && (e[f] == a && (c = f), e[f] == b && (d = f), null == c || null == d); f++);
            f != g && (e[c] = b, e[d] = a)
        }, b.setChildIndex = function(a, b) {
            var c = this.children,
                d = c.length;
            if (!(a.parent != this || 0 > b || b >= d)) {
                for (var e = 0; d > e && c[e] != a; e++);
                e != d && e != b && (c.splice(e, 1), c.splice(b, 0, a))
            }
        }, b.contains = function(a) {
            for (; a;) {
                if (a == this) return !0;
                a = a.parent
            }
            return !1
        }, b.hitTest = function(a, b) {
            return null != this.getObjectUnderPoint(a, b)
        }, b.getObjectsUnderPoint = function(a, b) {
            var c = [],
                d = this.localToGlobal(a, b);
            return this._getObjectsUnderPoint(d.x, d.y, c), c
        }, b.getObjectUnderPoint = function(a, b) {
            var c = this.localToGlobal(a, b);
            return this._getObjectsUnderPoint(c.x, c.y)
        }, b.DisplayObject_getBounds = b.getBounds, b.getBounds = function() {
            return this._getBounds(null, !0)
        }, b.getTransformedBounds = function() {
            return this._getBounds()
        }, b.clone = function(b) {
            var c = new a;
            if (this.cloneProps(c), b)
                for (var d = c.children = [], e = 0, f = this.children.length; f > e; e++) {
                    var g = this.children[e].clone(b);
                    g.parent = c, d.push(g)
                }
            return c
        }, b.toString = function() {
            return "[Container (name=" + this.name + ")]"
        }, b.DisplayObject__tick = b._tick, b._tick = function(a) {
            if (this.tickChildren)
                for (var b = this.children.length - 1; b >= 0; b--) {
                    var c = this.children[b];
                    c.tickEnabled && c._tick && c._tick(a)
                }
            this.DisplayObject__tick(a)
        }, b._getObjectsUnderPoint = function(b, c, d, e, f) {
            var g = createjs.DisplayObject._hitTestContext,
                h = this._matrix;
            f = f || e && this._hasMouseEventListener();
            for (var i = this.children, j = i.length, k = j - 1; k >= 0; k--) {
                var l = i[k],
                    m = l.hitArea;
                if (l.visible && (m || l.isVisible()) && (!e || l.mouseEnabled))
                    if (!m && l instanceof a) {
                        var n = l._getObjectsUnderPoint(b, c, d, e, f);
                        if (!d && n) return e && !this.mouseChildren ? this : n
                    } else {
                        if (!f && !l._hasMouseEventListener()) continue;
                        if (l.getConcatenatedMatrix(h), m && (h.appendTransform(m.x, m.y, m.scaleX, m.scaleY, m.rotation, m.skewX, m.skewY, m.regX, m.regY), h.alpha = m.alpha), g.globalAlpha = h.alpha, g.setTransform(h.a, h.b, h.c, h.d, h.tx - b, h.ty - c), (m || l).draw(g), !this._testHit(g)) continue;
                        if (g.setTransform(1, 0, 0, 1, 0, 0), g.clearRect(0, 0, 2, 2), !d) return e && !this.mouseChildren ? this : l;
                        d.push(l)
                    }
            }
            return null
        }, b._getBounds = function(a, b) {
            var c = this.DisplayObject_getBounds();
            if (c) return this._transformBounds(c, a, b);
            var d, e, f, g, h = b ? this._matrix.identity() : this.getMatrix(this._matrix);
            a && h.prependMatrix(a);
            for (var i = this.children.length, j = 0; i > j; j++) {
                var k = this.children[j];
                if (k.visible && (c = k._getBounds(h))) {
                    var l = c.x,
                        m = c.y,
                        n = l + c.width,
                        o = m + c.height;
                    (d > l || null == d) && (d = l), (n > e || null == e) && (e = n), (f > m || null == f) && (f = m), (o > g || null == g) && (g = o)
                }
            }
            return null == e ? null : this._rectangle.initialize(d, f, e - d, g - f)
        }, createjs.Container = a
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var a = function(a) {
                this.initialize(a)
            },
            b = a.prototype = new createjs.Container;
        a._snapToPixelEnabled = !1, b.autoClear = !0, b.canvas = null, b.mouseX = 0, b.mouseY = 0, b.snapToPixelEnabled = !1, b.mouseInBounds = !1, b.tickOnUpdate = !0, b.mouseMoveOutside = !1, b.nextStage = null, b._pointerData = null, b._pointerCount = 0, b._primaryPointerID = null, b._mouseOverIntervalID = null, b.Container_initialize = b.initialize, b.initialize = function(a) {
            this.Container_initialize(), this.canvas = "string" == typeof a ? document.getElementById(a) : a, this._pointerData = {}, this.enableDOMEvents(!0)
        }, b.update = function() {
            if (this.canvas) {
                this.tickOnUpdate && (this.dispatchEvent("tickstart"), this.tickEnabled && this._tick(arguments.length ? arguments : null), this.dispatchEvent("tickend")), this.dispatchEvent("drawstart"), a._snapToPixelEnabled = this.snapToPixelEnabled, this.autoClear && this.clear();
                var b = this.canvas.getContext("2d");
                b.save(), this.updateContext(b), this.draw(b, !1), b.restore(), this.dispatchEvent("drawend")
            }
        }, b.handleEvent = function(a) {
            "tick" == a.type && this.update(a)
        }, b.clear = function() {
            if (this.canvas) {
                var a = this.canvas.getContext("2d");
                a.setTransform(1, 0, 0, 1, 0, 0), a.clearRect(0, 0, this.canvas.width + 1, this.canvas.height + 1)
            }
        }, b.toDataURL = function(a, b) {
            b || (b = "image/png");
            var c, d = this.canvas.getContext("2d"),
                e = this.canvas.width,
                f = this.canvas.height;
            if (a) {
                c = d.getImageData(0, 0, e, f);
                var g = d.globalCompositeOperation;
                d.globalCompositeOperation = "destination-over", d.fillStyle = a, d.fillRect(0, 0, e, f)
            }
            var h = this.canvas.toDataURL(b);
            return a && (d.clearRect(0, 0, e + 1, f + 1), d.putImageData(c, 0, 0), d.globalCompositeOperation = g), h
        }, b.enableMouseOver = function(a) {
            if (this._mouseOverIntervalID && (clearInterval(this._mouseOverIntervalID), this._mouseOverIntervalID = null, 0 == a && this._testMouseOver(!0)), null == a) a = 20;
            else if (0 >= a) return;
            var b = this;
            this._mouseOverIntervalID = setInterval(function() {
                b._testMouseOver()
            }, 1e3 / Math.min(50, a))
        }, b.enableDOMEvents = function(a) {
            null == a && (a = !0);
            var b, c, d = this._eventListeners;
            if (!a && d) {
                for (b in d) c = d[b], c.t.removeEventListener(b, c.f, !1);
                this._eventListeners = null
            } else if (a && !d && this.canvas) {
                var e = window.addEventListener ? window : document,
                    f = this;
                d = this._eventListeners = {}, d.mouseup = {
                    t: e,
                    f: function(a) {
                        f._handleMouseUp(a)
                    }
                }, d.mousemove = {
                    t: e,
                    f: function(a) {
                        f._handleMouseMove(a)
                    }
                }, d.dblclick = {
                    t: this.canvas,
                    f: function(a) {
                        f._handleDoubleClick(a)
                    }
                }, d.mousedown = {
                    t: this.canvas,
                    f: function(a) {
                        f._handleMouseDown(a)
                    }
                };
                for (b in d) c = d[b], c.t.addEventListener(b, c.f, !1)
            }
        }, b.clone = function() {
            var b = new a(null);
            return this.cloneProps(b), b
        }, b.toString = function() {
            return "[Stage (name=" + this.name + ")]"
        }, b._getElementRect = function(a) {
            var b;
            try {
                b = a.getBoundingClientRect()
            } catch (c) {
                b = {
                    top: a.offsetTop,
                    left: a.offsetLeft,
                    width: a.offsetWidth,
                    height: a.offsetHeight
                }
            }
            var d = (window.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || document.body.clientLeft || 0),
                e = (window.pageYOffset || document.scrollTop || 0) - (document.clientTop || document.body.clientTop || 0),
                f = window.getComputedStyle ? getComputedStyle(a) : a.currentStyle,
                g = parseInt(f.paddingLeft) + parseInt(f.borderLeftWidth),
                h = parseInt(f.paddingTop) + parseInt(f.borderTopWidth),
                i = parseInt(f.paddingRight) + parseInt(f.borderRightWidth),
                j = parseInt(f.paddingBottom) + parseInt(f.borderBottomWidth);
            return {
                left: b.left + d + g,
                right: b.right + d - i,
                top: b.top + e + h,
                bottom: b.bottom + e - j
            }
        }, b._getPointerData = function(a) {
            var b = this._pointerData[a];
            return b || (b = this._pointerData[a] = {
                x: 0,
                y: 0
            }, null == this._primaryPointerID && (this._primaryPointerID = a), (null == this._primaryPointerID || -1 == this._primaryPointerID) && (this._primaryPointerID = a)), b
        }, b._handleMouseMove = function(a) {
            a || (a = window.event), this._handlePointerMove(-1, a, a.pageX, a.pageY)
        }, b._handlePointerMove = function(a, b, c, d) {
            if (this.canvas) {
                var e = this._getPointerData(a),
                    f = e.inBounds;
                if (this._updatePointerPosition(a, b, c, d), f || e.inBounds || this.mouseMoveOutside) {
                    -1 == a && e.inBounds == !f && this._dispatchMouseEvent(this, f ? "mouseleave" : "mouseenter", !1, a, e, b), this._dispatchMouseEvent(this, "stagemousemove", !1, a, e, b), this._dispatchMouseEvent(e.target, "pressmove", !0, a, e, b);
                    var g = e.event;
                    g && g.hasEventListener("mousemove") && g.dispatchEvent(new createjs.MouseEvent("mousemove", !1, !1, e.x, e.y, b, a, a == this._primaryPointerID, e.rawX, e.rawY), e.target), this.nextStage && this.nextStage._handlePointerMove(a, b, c, d)
                }
            }
        }, b._updatePointerPosition = function(a, b, c, d) {
            var e = this._getElementRect(this.canvas);
            c -= e.left, d -= e.top;
            var f = this.canvas.width,
                g = this.canvas.height;
            c /= (e.right - e.left) / f, d /= (e.bottom - e.top) / g;
            var h = this._getPointerData(a);
            (h.inBounds = c >= 0 && d >= 0 && f - 1 >= c && g - 1 >= d) ? (h.x = c, h.y = d) : this.mouseMoveOutside && (h.x = 0 > c ? 0 : c > f - 1 ? f - 1 : c, h.y = 0 > d ? 0 : d > g - 1 ? g - 1 : d), h.posEvtObj = b, h.rawX = c, h.rawY = d, a == this._primaryPointerID && (this.mouseX = h.x, this.mouseY = h.y, this.mouseInBounds = h.inBounds)
        }, b._handleMouseUp = function(a) {
            this._handlePointerUp(-1, a, !1)
        }, b._handlePointerUp = function(a, b, c) {
            var d = this._getPointerData(a);
            this._dispatchMouseEvent(this, "stagemouseup", !1, a, d, b);
            var e = d.target;
            e && (this._getObjectsUnderPoint(d.x, d.y, null, !0) == e && this._dispatchMouseEvent(e, "click", !0, a, d, b), this._dispatchMouseEvent(e, "pressup", !0, a, d, b));
            var f = d.event;
            f && f.hasEventListener("mouseup") && f.dispatchEvent(new createjs.MouseEvent("mouseup", !1, !1, d.x, d.y, b, a, a == this._primaryPointerID, d.rawX, d.rawY), e), c ? (a == this._primaryPointerID && (this._primaryPointerID = null), delete this._pointerData[a]) : d.event = d.target = null, this.nextStage && this.nextStage._handlePointerUp(a, b, c)
        }, b._handleMouseDown = function(a) {
            this._handlePointerDown(-1, a, a.pageX, a.pageY)
        }, b._handlePointerDown = function(a, b, c, d) {
            null != d && this._updatePointerPosition(a, b, c, d);
            var e = this._getPointerData(a);
            this._dispatchMouseEvent(this, "stagemousedown", !1, a, e, b), e.target = this._getObjectsUnderPoint(e.x, e.y, null, !0), e.event = this._dispatchMouseEvent(e.target, "mousedown", !0, a, e, b), this.nextStage && this.nextStage._handlePointerDown(a, b, c, d)
        }, b._testMouseOver = function(a) {
            if (-1 == this._primaryPointerID && (a || this.mouseX != this._mouseOverX || this.mouseY != this._mouseOverY || !this.mouseInBounds)) {
                var b, c, d, e, f = this._getPointerData(-1),
                    g = f.posEvtObj,
                    h = -1,
                    i = "";
                (a || this.mouseInBounds && g && g.target == this.canvas) && (b = this._getObjectsUnderPoint(this.mouseX, this.mouseY, null, !0), this._mouseOverX = this.mouseX, this._mouseOverY = this.mouseY);
                var j = this._mouseOverTarget || [],
                    k = j[j.length - 1],
                    l = this._mouseOverTarget = [];
                for (c = b; c;) l.unshift(c), null != c.cursor && (i = c.cursor), c = c.parent;
                for (this.canvas.style.cursor = i, d = 0, e = l.length; e > d && l[d] == j[d]; d++) h = d;
                for (k != b && this._dispatchMouseEvent(k, "mouseout", !0, -1, f, g), d = j.length - 1; d > h; d--) this._dispatchMouseEvent(j[d], "rollout", !1, -1, f, g);
                for (d = l.length - 1; d > h; d--) this._dispatchMouseEvent(l[d], "rollover", !1, -1, f, g);
                k != b && this._dispatchMouseEvent(b, "mouseover", !0, -1, f, g)
            }
        }, b._handleDoubleClick = function(a) {
            var b = this._getPointerData(-1),
                c = this._getObjectsUnderPoint(b.x, b.y, null, !0);
            this._dispatchMouseEvent(c, "dblclick", !0, -1, b, a), this.nextStage && this.nextStage._handleDoubleClick(a)
        }, b._dispatchMouseEvent = function(a, b, c, d, e, f) {
            if (a && (c || a.hasEventListener(b))) {
                var g = new createjs.MouseEvent(b, c, !1, e.x, e.y, f, d, d == this._primaryPointerID, e.rawX, e.rawY);
                return a.dispatchEvent(g), g
            }
        }, createjs.Stage = a
    }(), this.createjs = this.createjs || {},
    function() {
        var a = function(a) {
                this.initialize(a)
            },
            b = a.prototype = new createjs.DisplayObject;
        b.image = null, b.snapToPixel = !0, b.sourceRect = null, b.DisplayObject_initialize = b.initialize, b.initialize = function(a) {
            this.DisplayObject_initialize(), "string" == typeof a ? (this.image = document.createElement("img"), this.image.src = a) : this.image = a
        }, b.isVisible = function() {
            var a = this.cacheCanvas || this.image && (this.image.complete || this.image.getContext || this.image.readyState >= 2);
            return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && a)
        }, b.DisplayObject_draw = b.draw, b.draw = function(a, b) {
            if (this.DisplayObject_draw(a, b)) return !0;
            var c = this.sourceRect;
            return c ? a.drawImage(this.image, c.x, c.y, c.width, c.height, 0, 0, c.width, c.height) : a.drawImage(this.image, 0, 0), !0
        }, b.DisplayObject_getBounds = b.getBounds, b.getBounds = function() {
            var a = this.DisplayObject_getBounds();
            if (a) return a;
            var b = this.sourceRect || this.image,
                c = this.image && (this.image.complete || this.image.getContext || this.image.readyState >= 2);
            return c ? this._rectangle.initialize(0, 0, b.width, b.height) : null
        }, b.clone = function() {
            var b = new a(this.image);
            return this.sourceRect && (b.sourceRect = this.sourceRect.clone()), this.cloneProps(b), b
        }, b.toString = function() {
            return "[Bitmap (name=" + this.name + ")]"
        }, createjs.Bitmap = a
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var a = function(a, b) {
                this.initialize(a, b)
            },
            b = a.prototype = new createjs.DisplayObject;
        b.currentFrame = 0, b.currentAnimation = null, b.paused = !0, b.spriteSheet = null, b.snapToPixel = !0, b.offset = 0, b.currentAnimationFrame = 0, b.framerate = 0, b._advanceCount = 0, b._animation = null, b._currentFrame = null, b.DisplayObject_initialize = b.initialize, b.initialize = function(a, b) {
            this.DisplayObject_initialize(), this.spriteSheet = a, b && this.gotoAndPlay(b)
        }, b.isVisible = function() {
            var a = this.cacheCanvas || this.spriteSheet.complete;
            return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && a)
        }, b.DisplayObject_draw = b.draw, b.draw = function(a, b) {
            if (this.DisplayObject_draw(a, b)) return !0;
            this._normalizeFrame();
            var c = this.spriteSheet.getFrame(0 | this._currentFrame);
            if (!c) return !1;
            var d = c.rect;
            return a.drawImage(c.image, d.x, d.y, d.width, d.height, -c.regX, -c.regY, d.width, d.height), !0
        }, b.play = function() {
            this.paused = !1
        }, b.stop = function() {
            this.paused = !0
        }, b.gotoAndPlay = function(a) {
            this.paused = !1, this._goto(a)
        }, b.gotoAndStop = function(a) {
            this.paused = !0, this._goto(a)
        }, b.advance = function(a) {
            var b = this._animation && this._animation.speed || 1,
                c = this.framerate || this.spriteSheet.framerate,
                d = c && null != a ? a / (1e3 / c) : 1;
            this._animation ? this.currentAnimationFrame += d * b : this._currentFrame += d * b, this._normalizeFrame()
        }, b.DisplayObject_getBounds = b.getBounds, b.getBounds = function() {
            return this.DisplayObject_getBounds() || this.spriteSheet.getFrameBounds(this.currentFrame, this._rectangle)
        }, b.clone = function() {
            var b = new a(this.spriteSheet);
            return this.cloneProps(b), b
        }, b.toString = function() {
            return "[Sprite (name=" + this.name + ")]"
        }, b.DisplayObject__tick = b._tick, b._tick = function(a) {
            this.paused || this.advance(a && a[0] && a[0].delta), this.DisplayObject__tick(a)
        }, b._normalizeFrame = function() {
            var a, b = this._animation,
                c = this.paused,
                d = this._currentFrame,
                e = this.currentAnimationFrame;
            if (b)
                if (a = b.frames.length, (0 | e) >= a) {
                    var f = b.next;
                    if (this._dispatchAnimationEnd(b, d, c, f, a - 1));
                    else {
                        if (f) return this._goto(f, e - a);
                        this.paused = !0, e = this.currentAnimationFrame = b.frames.length - 1, this._currentFrame = b.frames[e]
                    }
                } else this._currentFrame = b.frames[0 | e];
            else if (a = this.spriteSheet.getNumFrames(), d >= a && !this._dispatchAnimationEnd(b, d, c, a - 1) && (this._currentFrame -= a) >= a) return this._normalizeFrame();
            this.currentFrame = 0 | this._currentFrame
        }, b._dispatchAnimationEnd = function(a, b, c, d, e) {
            var f = a ? a.name : null;
            if (this.hasEventListener("animationend")) {
                var g = new createjs.Event("animationend");
                g.name = f, g.next = d, this.dispatchEvent(g)
            }
            var h = this._animation != a || this._currentFrame != b;
            return h || c || !this.paused || (this.currentAnimationFrame = e, h = !0), h
        }, b.DisplayObject_cloneProps = b.cloneProps, b.cloneProps = function(a) {
            this.DisplayObject_cloneProps(a), a.currentFrame = this.currentFrame, a._currentFrame = this._currentFrame, a.currentAnimation = this.currentAnimation, a.paused = this.paused, a._animation = this._animation, a.currentAnimationFrame = this.currentAnimationFrame, a.framerate = this.framerate
        }, b._goto = function(a, b) {
            if (isNaN(a)) {
                var c = this.spriteSheet.getAnimation(a);
                c && (this.currentAnimationFrame = b || 0, this._animation = c, this.currentAnimation = a, this._normalizeFrame())
            } else this.currentAnimationFrame = 0, this.currentAnimation = this._animation = null, this._currentFrame = a, this._normalizeFrame()
        }, createjs.Sprite = a
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var a = "BitmapAnimation is deprecated in favour of Sprite. See VERSIONS file for info on changes.";
        if (!createjs.Sprite) throw a;
        (createjs.BitmapAnimation = function(b) {
            console.log(a), this.initialize(b)
        }).prototype = new createjs.Sprite
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var a = function(a) {
                this.initialize(a)
            },
            b = a.prototype = new createjs.DisplayObject;
        b.graphics = null, b.DisplayObject_initialize = b.initialize, b.initialize = function(a) {
            this.DisplayObject_initialize(), this.graphics = a ? a : new createjs.Graphics
        }, b.isVisible = function() {
            var a = this.cacheCanvas || this.graphics && !this.graphics.isEmpty();
            return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && a)
        }, b.DisplayObject_draw = b.draw, b.draw = function(a, b) {
            return this.DisplayObject_draw(a, b) ? !0 : (this.graphics.draw(a), !0)
        }, b.clone = function(b) {
            var c = new a(b && this.graphics ? this.graphics.clone() : this.graphics);
            return this.cloneProps(c), c
        }, b.toString = function() {
            return "[Shape (name=" + this.name + ")]"
        }, createjs.Shape = a
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var a = function(a, b, c) {
                this.initialize(a, b, c)
            },
            b = a.prototype = new createjs.DisplayObject,
            c = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
        c.getContext && (a._workingContext = c.getContext("2d"), c.width = c.height = 1), a.H_OFFSETS = {
            start: 0,
            left: 0,
            center: -.5,
            end: -1,
            right: -1
        }, a.V_OFFSETS = {
            top: 0,
            hanging: -.01,
            middle: -.4,
            alphabetic: -.8,
            ideographic: -.85,
            bottom: -1
        }, b.text = "", b.font = null, b.color = null, b.textAlign = "left", b.textBaseline = "top", b.maxWidth = null, b.outline = 0, b.lineHeight = 0, b.lineWidth = null, b.DisplayObject_initialize = b.initialize, b.initialize = function(a, b, c) {
            this.DisplayObject_initialize(), this.text = a, this.font = b, this.color = c
        }, b.isVisible = function() {
            var a = this.cacheCanvas || null != this.text && "" !== this.text;
            return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && a)
        }, b.DisplayObject_draw = b.draw, b.draw = function(a, b) {
            if (this.DisplayObject_draw(a, b)) return !0;
            var c = this.color || "#000";
            return this.outline ? (a.strokeStyle = c, a.lineWidth = 1 * this.outline) : a.fillStyle = c, this._drawText(this._prepContext(a)), !0
        }, b.getMeasuredWidth = function() {
            return this._prepContext(a._workingContext).measureText(this.text).width
        }, b.getMeasuredLineHeight = function() {
            return 1.2 * this._prepContext(a._workingContext).measureText("M").width
        }, b.getMeasuredHeight = function() {
            return this._drawText(null, {}).height
        }, b.DisplayObject_getBounds = b.getBounds, b.getBounds = function() {
            var b = this.DisplayObject_getBounds();
            if (b) return b;
            if (null == this.text || "" == this.text) return null;
            var c = this._drawText(null, {}),
                d = this.maxWidth && this.maxWidth < c.width ? this.maxWidth : c.width,
                e = d * a.H_OFFSETS[this.textAlign || "left"],
                f = this.lineHeight || this.getMeasuredLineHeight(),
                g = f * a.V_OFFSETS[this.textBaseline || "top"];
            return this._rectangle.initialize(e, g, d, c.height)
        }, b.clone = function() {
            var b = new a(this.text, this.font, this.color);
            return this.cloneProps(b), b
        }, b.toString = function() {
            return "[Text (text=" + (this.text.length > 20 ? this.text.substr(0, 17) + "..." : this.text) + ")]"
        }, b.DisplayObject_cloneProps = b.cloneProps, b.cloneProps = function(a) {
            this.DisplayObject_cloneProps(a), a.textAlign = this.textAlign, a.textBaseline = this.textBaseline, a.maxWidth = this.maxWidth, a.outline = this.outline, a.lineHeight = this.lineHeight, a.lineWidth = this.lineWidth
        }, b._prepContext = function(a) {
            return a.font = this.font, a.textAlign = this.textAlign || "left", a.textBaseline = this.textBaseline || "top", a
        }, b._drawText = function(b, c) {
            var d = !!b;
            d || (b = this._prepContext(a._workingContext));
            for (var e = this.lineHeight || this.getMeasuredLineHeight(), f = 0, g = 0, h = String(this.text).split(/(?:\r\n|\r|\n)/), i = 0, j = h.length; j > i; i++) {
                var k = h[i],
                    l = null;
                if (null != this.lineWidth && (l = b.measureText(k).width) > this.lineWidth) {
                    var m = k.split(/(\s)/);
                    k = m[0], l = b.measureText(k).width;
                    for (var n = 1, o = m.length; o > n; n += 2) {
                        var p = b.measureText(m[n] + m[n + 1]).width;
                        l + p > this.lineWidth ? (d && this._drawTextLine(b, k, g * e), l > f && (f = l), k = m[n + 1], l = b.measureText(k).width, g++) : (k += m[n] + m[n + 1], l += p)
                    }
                }
                d && this._drawTextLine(b, k, g * e), c && null == l && (l = b.measureText(k).width), l > f && (f = l), g++
            }
            return c && (c.count = g, c.width = f, c.height = g * e), c
        }, b._drawTextLine = function(a, b, c) {
            this.outline ? a.strokeText(b, 0, c, this.maxWidth || 65535) : a.fillText(b, 0, c, this.maxWidth || 65535)
        }, createjs.Text = a
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a(a, b) {
            this.initialize(a, b)
        }
        var b = a.prototype = new createjs.DisplayObject;
        b.text = "", b.spriteSheet = null, b.lineHeight = 0, b.letterSpacing = 0, b.spaceWidth = 0, b.DisplayObject_initialize = b.initialize, b.initialize = function(a, b) {
            this.DisplayObject_initialize(), this.text = a, this.spriteSheet = b
        }, b.DisplayObject_draw = b.draw, b.draw = function(a, b) {
            return this.DisplayObject_draw(a, b) ? !0 : (this._drawText(a), void 0)
        }, b.isVisible = function() {
            var a = this.cacheCanvas || this.spriteSheet && this.spriteSheet.complete && this.text;
            return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && a)
        }, b.getBounds = function() {
            var a = this._rectangle;
            return this._drawText(null, a), a.width ? a : null
        }, b._getFrame = function(a, b) {
            var c, d = b.getAnimation(a);
            return d || (a != (c = a.toUpperCase()) || a != (c = a.toLowerCase()) || (c = null), c && (d = b.getAnimation(c))), d && b.getFrame(d.frames[0])
        }, b._getLineHeight = function(a) {
            var b = this._getFrame("1", a) || this._getFrame("T", a) || this._getFrame("L", a) || a.getFrame(0);
            return b ? b.rect.height : 1
        }, b._getSpaceWidth = function(a) {
            var b = this._getFrame("1", a) || this._getFrame("l", a) || this._getFrame("e", a) || this._getFrame("a", a) || a.getFrame(0);
            return b ? b.rect.width : 1
        }, b._drawText = function(a, b) {
            var c, d, e, f = 0,
                g = 0,
                h = this.spaceWidth,
                i = this.lineHeight,
                j = this.spriteSheet,
                k = !!this._getFrame(" ", j);
            k || 0 != h || (h = this._getSpaceWidth(j)), 0 == i && (i = this._getLineHeight(j));
            for (var l = 0, m = 0, n = this.text.length; n > m; m++) {
                var o = this.text.charAt(m);
                if (k || " " != o)
                    if ("\n" != o && "\r" != o) {
                        var p = this._getFrame(o, j);
                        if (p) {
                            var q = p.rect;
                            e = p.regX, c = q.width, a && a.drawImage(p.image, q.x, q.y, c, d = q.height, f - e, g - p.regY, c, d), f += c + this.letterSpacing
                        }
                    } else "\r" == o && "\n" == this.text.charAt(m + 1) && m++, f - e > l && (l = f - e), f = 0, g += i;
                else f += h
            }
            f - e > l && (l = f - e), b && (b.width = l - this.letterSpacing, b.height = g + i)
        }, createjs.BitmapText = a
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var a = function() {
                throw "SpriteSheetUtils cannot be instantiated"
            },
            b = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
        b.getContext && (a._workingCanvas = b, a._workingContext = b.getContext("2d"), b.width = b.height = 1), a.addFlippedFrames = function(b, c, d, e) {
            if (c || d || e) {
                var f = 0;
                c && a._flip(b, ++f, !0, !1), d && a._flip(b, ++f, !1, !0), e && a._flip(b, ++f, !0, !0)
            }
        }, a.extractFrame = function(b, c) {
            isNaN(c) && (c = b.getAnimation(c).frames[0]);
            var d = b.getFrame(c);
            if (!d) return null;
            var e = d.rect,
                f = a._workingCanvas;
            f.width = e.width, f.height = e.height, a._workingContext.drawImage(d.image, e.x, e.y, e.width, e.height, 0, 0, e.width, e.height);
            var g = document.createElement("img");
            return g.src = f.toDataURL("image/png"), g
        }, a.mergeAlpha = function(a, b, c) {
            c || (c = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas")), c.width = Math.max(b.width, a.width), c.height = Math.max(b.height, a.height);
            var d = c.getContext("2d");
            return d.save(), d.drawImage(a, 0, 0), d.globalCompositeOperation = "destination-in", d.drawImage(b, 0, 0), d.restore(), c
        }, a._flip = function(b, c, d, e) {
            for (var f = b._images, g = a._workingCanvas, h = a._workingContext, i = f.length / c, j = 0; i > j; j++) {
                var k = f[j];
                k.__tmp = j, h.setTransform(1, 0, 0, 1, 0, 0), h.clearRect(0, 0, g.width + 1, g.height + 1), g.width = k.width, g.height = k.height, h.setTransform(d ? -1 : 1, 0, 0, e ? -1 : 1, d ? k.width : 0, e ? k.height : 0), h.drawImage(k, 0, 0);
                var l = document.createElement("img");
                l.src = g.toDataURL("image/png"), l.width = k.width, l.height = k.height, f.push(l)
            }
            var m = b._frames,
                n = m.length / c;
            for (j = 0; n > j; j++) {
                k = m[j];
                var o = k.rect.clone();
                l = f[k.image.__tmp + i * c];
                var p = {
                    image: l,
                    rect: o,
                    regX: k.regX,
                    regY: k.regY
                };
                d && (o.x = l.width - o.x - o.width, p.regX = o.width - k.regX), e && (o.y = l.height - o.y - o.height, p.regY = o.height - k.regY), m.push(p)
            }
            var q = "_" + (d ? "h" : "") + (e ? "v" : ""),
                r = b._animations,
                s = b._data,
                t = r.length / c;
            for (j = 0; t > j; j++) {
                var u = r[j];
                k = s[u];
                var v = {
                    name: u + q,
                    speed: k.speed,
                    next: k.next,
                    frames: []
                };
                k.next && (v.next += q), m = k.frames;
                for (var w = 0, x = m.length; x > w; w++) v.frames.push(m[w] + n * c);
                s[v.name] = v, r.push(v.name)
            }
        }, createjs.SpriteSheetUtils = a
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var a = function() {
                this.initialize()
            },
            b = a.prototype = new createjs.EventDispatcher;
        a.ERR_DIMENSIONS = "frame dimensions exceed max spritesheet dimensions", a.ERR_RUNNING = "a build is already running", b.maxWidth = 2048, b.maxHeight = 2048, b.spriteSheet = null, b.scale = 1, b.padding = 1, b.timeSlice = .3, b.progress = -1, b._frames = null, b._animations = null, b._data = null, b._nextFrameIndex = 0, b._index = 0, b._timerID = null, b._scale = 1, b.initialize = function() {
            this._frames = [], this._animations = {}
        }, b.addFrame = function(b, c, d, e, f, g) {
            if (this._data) throw a.ERR_RUNNING;
            var h = c || b.bounds || b.nominalBounds;
            return !h && b.getBounds && (h = b.getBounds()), h ? (d = d || 1, this._frames.push({
                source: b,
                sourceRect: h,
                scale: d,
                funct: e,
                params: f,
                scope: g,
                index: this._frames.length,
                height: h.height * d
            }) - 1) : null
        }, b.addAnimation = function(b, c, d, e) {
            if (this._data) throw a.ERR_RUNNING;
            this._animations[b] = {
                frames: c,
                next: d,
                frequency: e
            }
        }, b.addMovieClip = function(b, c, d) {
            if (this._data) throw a.ERR_RUNNING;
            var e = b.frameBounds,
                f = c || b.bounds || b.nominalBounds;
            if (!f && b.getBounds && (f = b.getBounds()), !f && !e) return null;
            for (var g = this._frames.length, h = b.timeline.duration, i = 0; h > i; i++) {
                var j = e && e[i] ? e[i] : f;
                this.addFrame(b, j, d, function(a) {
                    var b = this.actionsEnabled;
                    this.actionsEnabled = !1, this.gotoAndStop(a), this.actionsEnabled = b
                }, [i], b)
            }
            var k = b.timeline._labels,
                l = [];
            for (var m in k) l.push({
                index: k[m],
                label: m
            });
            if (l.length) {
                l.sort(function(a, b) {
                    return a.index - b.index
                });
                for (var i = 0, n = l.length; n > i; i++) {
                    for (var o = l[i].label, p = g + l[i].index, q = g + (i == n - 1 ? h : l[i + 1].index), r = [], s = p; q > s; s++) r.push(s);
                    this.addAnimation(o, r, !0)
                }
            }
        }, b.build = function() {
            if (this._data) throw a.ERR_RUNNING;
            for (this._startBuild(); this._drawNext(););
            return this._endBuild(), this.spriteSheet
        }, b.buildAsync = function(b) {
            if (this._data) throw a.ERR_RUNNING;
            this.timeSlice = b, this._startBuild();
            var c = this;
            this._timerID = setTimeout(function() {
                c._run()
            }, 50 - 50 * Math.max(.01, Math.min(.99, this.timeSlice || .3)))
        }, b.stopAsync = function() {
            clearTimeout(this._timerID), this._data = null
        }, b.clone = function() {
            throw "SpriteSheetBuilder cannot be cloned."
        }, b.toString = function() {
            return "[SpriteSheetBuilder]"
        }, b._startBuild = function() {
            var b = this.padding || 0;
            this.progress = 0, this.spriteSheet = null, this._index = 0, this._scale = this.scale;
            var c = [];
            this._data = {
                images: [],
                frames: c,
                animations: this._animations
            };
            var d = this._frames.slice();
            if (d.sort(function(a, b) {
                    return a.height <= b.height ? -1 : 1
                }), d[d.length - 1].height + 2 * b > this.maxHeight) throw a.ERR_DIMENSIONS;
            for (var e = 0, f = 0, g = 0; d.length;) {
                var h = this._fillRow(d, e, g, c, b);
                if (h.w > f && (f = h.w), e += h.h, !h.h || !d.length) {
                    var i = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
                    i.width = this._getSize(f, this.maxWidth), i.height = this._getSize(e, this.maxHeight), this._data.images[g] = i, h.h || (f = e = 0, g++)
                }
            }
        }, b._getSize = function(a, b) {
            for (var c = 4; Math.pow(2, ++c) < a;);
            return Math.min(b, Math.pow(2, c))
        }, b._fillRow = function(b, c, d, e, f) {
            var g = this.maxWidth,
                h = this.maxHeight;
            c += f;
            for (var i = h - c, j = f, k = 0, l = b.length - 1; l >= 0; l--) {
                var m = b[l],
                    n = this._scale * m.scale,
                    o = m.sourceRect,
                    p = m.source,
                    q = Math.floor(n * o.x - f),
                    r = Math.floor(n * o.y - f),
                    s = Math.ceil(n * o.height + 2 * f),
                    t = Math.ceil(n * o.width + 2 * f);
                if (t > g) throw a.ERR_DIMENSIONS;
                s > i || j + t > g || (m.img = d, m.rect = new createjs.Rectangle(j, c, t, s), k = k || s, b.splice(l, 1), e[m.index] = [j, c, t, s, d, Math.round(-q + n * p.regX - f), Math.round(-r + n * p.regY - f)], j += t)
            }
            return {
                w: j,
                h: k
            }
        }, b._endBuild = function() {
            this.spriteSheet = new createjs.SpriteSheet(this._data), this._data = null, this.progress = 1, this.dispatchEvent("complete")
        }, b._run = function() {
            for (var a = 50 * Math.max(.01, Math.min(.99, this.timeSlice || .3)), b = (new Date).getTime() + a, c = !1; b > (new Date).getTime();)
                if (!this._drawNext()) {
                    c = !0;
                    break
                }
            if (c) this._endBuild();
            else {
                var d = this;
                this._timerID = setTimeout(function() {
                    d._run()
                }, 50 - a)
            }
            var e = this.progress = this._index / this._frames.length;
            if (this.hasEventListener("progress")) {
                var f = new createjs.Event("progress");
                f.progress = e, this.dispatchEvent(f)
            }
        }, b._drawNext = function() {
            var a = this._frames[this._index],
                b = a.scale * this._scale,
                c = a.rect,
                d = a.sourceRect,
                e = this._data.images[a.img],
                f = e.getContext("2d");
            return a.funct && a.funct.apply(a.scope, a.params), f.save(), f.beginPath(), f.rect(c.x, c.y, c.width, c.height), f.clip(), f.translate(Math.ceil(c.x - d.x * b), Math.ceil(c.y - d.y * b)), f.scale(b, b), a.source.draw(f), f.restore(), ++this._index < this._frames.length
        }, createjs.SpriteSheetBuilder = a
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var a = function(a) {
                this.initialize(a)
            },
            b = a.prototype = new createjs.DisplayObject;
        b.htmlElement = null, b._oldMtx = null, b._visible = !1, b.DisplayObject_initialize = b.initialize, b.initialize = function(a) {
            "string" == typeof a && (a = document.getElementById(a)), this.DisplayObject_initialize(), this.mouseEnabled = !1, this.htmlElement = a;
            var b = a.style;
            b.position = "absolute", b.transformOrigin = b.WebkitTransformOrigin = b.msTransformOrigin = b.MozTransformOrigin = b.OTransformOrigin = "0% 0%"
        }, b.isVisible = function() {
            return null != this.htmlElement
        }, b.draw = function() {
            return this.visible && (this._visible = !0), !0
        }, b.cache = function() {}, b.uncache = function() {}, b.updateCache = function() {}, b.hitTest = function() {}, b.localToGlobal = function() {}, b.globalToLocal = function() {}, b.localToLocal = function() {}, b.clone = function() {
            throw "DOMElement cannot be cloned."
        }, b.toString = function() {
            return "[DOMElement (name=" + this.name + ")]"
        }, b.DisplayObject__tick = b._tick, b._tick = function(a) {
            var b = this.getStage();
            this._visible = !1, b && b.on("drawend", this._handleDrawEnd, this, !0), this.DisplayObject__tick(a)
        }, b._handleDrawEnd = function() {
            var a = this.htmlElement;
            if (a) {
                var b = a.style,
                    c = this._visible ? "visible" : "hidden";
                if (c != b.visibility && (b.visibility = c), this._visible) {
                    var d = this.getConcatenatedMatrix(this._matrix),
                        e = this._oldMtx,
                        f = 1e4;
                    if (e && e.alpha == d.alpha || (b.opacity = "" + (0 | d.alpha * f) / f, e && (e.alpha = d.alpha)), !e || e.tx != d.tx || e.ty != d.ty || e.a != d.a || e.b != d.b || e.c != d.c || e.d != d.d) {
                        var g = "matrix(" + (0 | d.a * f) / f + "," + (0 | d.b * f) / f + "," + (0 | d.c * f) / f + "," + (0 | d.d * f) / f + "," + (0 | d.tx + .5);
                        b.transform = b.WebkitTransform = b.OTransform = b.msTransform = g + "," + (0 | d.ty + .5) + ")", b.MozTransform = g + "px," + (0 | d.ty + .5) + "px)", this._oldMtx = e ? e.copy(d) : d.clone()
                    }
                }
            }
        }, createjs.DOMElement = a
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var a = function() {
                this.initialize()
            },
            b = a.prototype;
        b.initialize = function() {}, b.getBounds = function() {
            return null
        }, b.applyFilter = function() {}, b.toString = function() {
            return "[Filter]"
        }, b.clone = function() {
            return new a
        }, createjs.Filter = a
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var a = function(a, b, c) {
                this.initialize(a, b, c)
            },
            b = a.prototype = new createjs.Filter;
        b.initialize = function(a, b, c) {
            (isNaN(a) || 0 > a) && (a = 0), this.blurX = 0 | a, (isNaN(b) || 0 > b) && (b = 0), this.blurY = 0 | b, (isNaN(c) || 1 > c) && (c = 1), this.quality = 0 | c
        }, b.blurX = 0, b.blurY = 0, b.quality = 1, b.mul_table = [1, 171, 205, 293, 57, 373, 79, 137, 241, 27, 391, 357, 41, 19, 283, 265, 497, 469, 443, 421, 25, 191, 365, 349, 335, 161, 155, 149, 9, 278, 269, 261, 505, 245, 475, 231, 449, 437, 213, 415, 405, 395, 193, 377, 369, 361, 353, 345, 169, 331, 325, 319, 313, 307, 301, 37, 145, 285, 281, 69, 271, 267, 263, 259, 509, 501, 493, 243, 479, 118, 465, 459, 113, 446, 55, 435, 429, 423, 209, 413, 51, 403, 199, 393, 97, 3, 379, 375, 371, 367, 363, 359, 355, 351, 347, 43, 85, 337, 333, 165, 327, 323, 5, 317, 157, 311, 77, 305, 303, 75, 297, 294, 73, 289, 287, 71, 141, 279, 277, 275, 68, 135, 67, 133, 33, 262, 260, 129, 511, 507, 503, 499, 495, 491, 61, 121, 481, 477, 237, 235, 467, 232, 115, 457, 227, 451, 7, 445, 221, 439, 218, 433, 215, 427, 425, 211, 419, 417, 207, 411, 409, 203, 202, 401, 399, 396, 197, 49, 389, 387, 385, 383, 95, 189, 47, 187, 93, 185, 23, 183, 91, 181, 45, 179, 89, 177, 11, 175, 87, 173, 345, 343, 341, 339, 337, 21, 167, 83, 331, 329, 327, 163, 81, 323, 321, 319, 159, 79, 315, 313, 39, 155, 309, 307, 153, 305, 303, 151, 75, 299, 149, 37, 295, 147, 73, 291, 145, 289, 287, 143, 285, 71, 141, 281, 35, 279, 139, 69, 275, 137, 273, 17, 271, 135, 269, 267, 133, 265, 33, 263, 131, 261, 130, 259, 129, 257, 1], b.shg_table = [0, 9, 10, 11, 9, 12, 10, 11, 12, 9, 13, 13, 10, 9, 13, 13, 14, 14, 14, 14, 10, 13, 14, 14, 14, 13, 13, 13, 9, 14, 14, 14, 15, 14, 15, 14, 15, 15, 14, 15, 15, 15, 14, 15, 15, 15, 15, 15, 14, 15, 15, 15, 15, 15, 15, 12, 14, 15, 15, 13, 15, 15, 15, 15, 16, 16, 16, 15, 16, 14, 16, 16, 14, 16, 13, 16, 16, 16, 15, 16, 13, 16, 15, 16, 14, 9, 16, 16, 16, 16, 16, 16, 16, 16, 16, 13, 14, 16, 16, 15, 16, 16, 10, 16, 15, 16, 14, 16, 16, 14, 16, 16, 14, 16, 16, 14, 15, 16, 16, 16, 14, 15, 14, 15, 13, 16, 16, 15, 17, 17, 17, 17, 17, 17, 14, 15, 17, 17, 16, 16, 17, 16, 15, 17, 16, 17, 11, 17, 16, 17, 16, 17, 16, 17, 17, 16, 17, 17, 16, 17, 17, 16, 16, 17, 17, 17, 16, 14, 17, 17, 17, 17, 15, 16, 14, 16, 15, 16, 13, 16, 15, 16, 14, 16, 15, 16, 12, 16, 15, 16, 17, 17, 17, 17, 17, 13, 16, 15, 17, 17, 17, 16, 15, 17, 17, 17, 16, 15, 17, 17, 14, 16, 17, 17, 16, 17, 17, 16, 15, 17, 16, 14, 17, 16, 15, 17, 16, 17, 17, 16, 17, 15, 16, 17, 14, 17, 16, 15, 17, 16, 17, 13, 17, 16, 17, 17, 16, 17, 14, 17, 16, 17, 16, 17, 16, 17, 9], b.getBounds = function() {
            var a = .5 * Math.pow(this.quality, .6);
            return new createjs.Rectangle(-this.blurX * a, -this.blurY * a, 2 * this.blurX * a, 2 * this.blurY * a)
        }, b.applyFilter = function(a, b, c, d, e, f, g, h) {
            f = f || a, null == g && (g = b), null == h && (h = c);
            try {
                var i = a.getImageData(b, c, d, e)
            } catch (j) {
                return !1
            }
            var k = this.blurX / 2;
            if (isNaN(k) || 0 > k) return !1;
            k |= 0;
            var l = this.blurY / 2;
            if (isNaN(l) || 0 > l) return !1;
            if (l |= 0, 0 == k && 0 == l) return !1;
            var m = this.quality;
            (isNaN(m) || 1 > m) && (m = 1), m |= 0, m > 3 && (m = 3), 1 > m && (m = 1);
            var b, c, n, o, p, q, r, s, t, u, v, w, x, y, z, A = i.data,
                B = k + k + 1,
                C = l + l + 1,
                D = d - 1,
                E = e - 1,
                F = k + 1,
                G = l + 1,
                H = {
                    r: 0,
                    b: 0,
                    g: 0,
                    a: 0,
                    next: null
                },
                I = H;
            for (n = 1; B > n; n++) I = I.next = {
                r: 0,
                b: 0,
                g: 0,
                a: 0,
                next: null
            };
            I.next = H;
            var J = {
                    r: 0,
                    b: 0,
                    g: 0,
                    a: 0,
                    next: null
                },
                K = J;
            for (n = 1; C > n; n++) K = K.next = {
                r: 0,
                b: 0,
                g: 0,
                a: 0,
                next: null
            };
            K.next = J;
            for (var L = null; m-- > 0;) {
                r = q = 0;
                var M = this.mul_table[k],
                    N = this.shg_table[k];
                for (c = e; --c > -1;) {
                    for (s = F * (w = A[q]), t = F * (x = A[q + 1]), u = F * (y = A[q + 2]), v = F * (z = A[q + 3]), I = H, n = F; --n > -1;) I.r = w, I.g = x, I.b = y, I.a = z, I = I.next;
                    for (n = 1; F > n; n++) o = q + ((n > D ? D : n) << 2), s += I.r = A[o], t += I.g = A[o + 1], u += I.b = A[o + 2], v += I.a = A[o + 3], I = I.next;
                    for (L = H, b = 0; d > b; b++) A[q++] = s * M >>> N, A[q++] = t * M >>> N, A[q++] = u * M >>> N, A[q++] = v * M >>> N, o = r + ((o = b + k + 1) < D ? o : D) << 2, s -= L.r - (L.r = A[o]), t -= L.g - (L.g = A[o + 1]), u -= L.b - (L.b = A[o + 2]), v -= L.a - (L.a = A[o + 3]), L = L.next;
                    r += d
                }
                for (M = this.mul_table[l], N = this.shg_table[l], b = 0; d > b; b++) {
                    for (q = b << 2, s = G * (w = A[q]), t = G * (x = A[q + 1]), u = G * (y = A[q + 2]), v = G * (z = A[q + 3]), K = J, n = 0; G > n; n++) K.r = w, K.g = x, K.b = y, K.a = z, K = K.next;
                    for (p = d, n = 1; l >= n; n++) q = p + b << 2, s += K.r = A[q], t += K.g = A[q + 1], u += K.b = A[q + 2], v += K.a = A[q + 3], K = K.next, E > n && (p += d);
                    if (q = b, L = J, m > 0)
                        for (c = 0; e > c; c++) o = q << 2, A[o + 3] = z = v * M >>> N, z > 0 ? (A[o] = s * M >>> N, A[o + 1] = t * M >>> N, A[o + 2] = u * M >>> N) : A[o] = A[o + 1] = A[o + 2] = 0, o = b + ((o = c + G) < E ? o : E) * d << 2, s -= L.r - (L.r = A[o]), t -= L.g - (L.g = A[o + 1]), u -= L.b - (L.b = A[o + 2]), v -= L.a - (L.a = A[o + 3]), L = L.next, q += d;
                    else
                        for (c = 0; e > c; c++) o = q << 2, A[o + 3] = z = v * M >>> N, z > 0 ? (z = 255 / z, A[o] = (s * M >>> N) * z, A[o + 1] = (t * M >>> N) * z, A[o + 2] = (u * M >>> N) * z) : A[o] = A[o + 1] = A[o + 2] = 0, o = b + ((o = c + G) < E ? o : E) * d << 2, s -= L.r - (L.r = A[o]), t -= L.g - (L.g = A[o + 1]), u -= L.b - (L.b = A[o + 2]), v -= L.a - (L.a = A[o + 3]), L = L.next, q += d
                }
            }
            return f.putImageData(i, g, h), !0
        }, b.clone = function() {
            return new a(this.blurX, this.blurY, this.quality)
        }, b.toString = function() {
            return "[BlurFilter]"
        }, createjs.BlurFilter = a
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var a = function(a) {
                this.initialize(a)
            },
            b = a.prototype = new createjs.Filter;
        b.initialize = function(a) {
            this.alphaMap = a
        }, b.alphaMap = null, b._alphaMap = null, b._mapData = null, b.applyFilter = function(a, b, c, d, e, f, g, h) {
            if (!this.alphaMap) return !0;
            if (!this._prepAlphaMap()) return !1;
            f = f || a, null == g && (g = b), null == h && (h = c);
            try {
                var i = a.getImageData(b, c, d, e)
            } catch (j) {
                return !1
            }
            for (var k = i.data, l = this._mapData, m = k.length, n = 0; m > n; n += 4) k[n + 3] = l[n] || 0;
            return f.putImageData(i, g, h), !0
        }, b.clone = function() {
            return new a(this.alphaMap)
        }, b.toString = function() {
            return "[AlphaMapFilter]"
        }, b._prepAlphaMap = function() {
            if (!this.alphaMap) return !1;
            if (this.alphaMap == this._alphaMap && this._mapData) return !0;
            this._mapData = null;
            var a, b = this._alphaMap = this.alphaMap,
                c = b;
            b instanceof HTMLCanvasElement ? a = c.getContext("2d") : (c = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas"), c.width = b.width, c.height = b.height, a = c.getContext("2d"), a.drawImage(b, 0, 0));
            try {
                var d = a.getImageData(0, 0, b.width, b.height)
            } catch (e) {
                return !1
            }
            return this._mapData = d.data, !0
        }, createjs.AlphaMapFilter = a
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var a = function(a) {
                this.initialize(a)
            },
            b = a.prototype = new createjs.Filter;
        b.initialize = function(a) {
            this.mask = a
        }, b.mask = null, b.applyFilter = function(a, b, c, d, e, f, g, h) {
            return this.mask ? (f = f || a, null == g && (g = b), null == h && (h = c), f.save(), f.globalCompositeOperation = "destination-in", f.drawImage(this.mask, g, h), f.restore(), !0) : !0
        }, b.clone = function() {
            return new a(this.mask)
        }, b.toString = function() {
            return "[AlphaMaskFilter]"
        }, createjs.AlphaMaskFilter = a
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var a = function(a, b, c, d, e, f, g, h) {
                this.initialize(a, b, c, d, e, f, g, h)
            },
            b = a.prototype = new createjs.Filter;
        b.redMultiplier = 1, b.greenMultiplier = 1, b.blueMultiplier = 1, b.alphaMultiplier = 1, b.redOffset = 0, b.greenOffset = 0, b.blueOffset = 0, b.alphaOffset = 0, b.initialize = function(a, b, c, d, e, f, g, h) {
            this.redMultiplier = null != a ? a : 1, this.greenMultiplier = null != b ? b : 1, this.blueMultiplier = null != c ? c : 1, this.alphaMultiplier = null != d ? d : 1, this.redOffset = e || 0, this.greenOffset = f || 0, this.blueOffset = g || 0, this.alphaOffset = h || 0
        }, b.applyFilter = function(a, b, c, d, e, f, g, h) {
            f = f || a, null == g && (g = b), null == h && (h = c);
            try {
                var i = a.getImageData(b, c, d, e)
            } catch (j) {
                return !1
            }
            for (var k = i.data, l = k.length, m = 0; l > m; m += 4) k[m] = k[m] * this.redMultiplier + this.redOffset, k[m + 1] = k[m + 1] * this.greenMultiplier + this.greenOffset, k[m + 2] = k[m + 2] * this.blueMultiplier + this.blueOffset, k[m + 3] = k[m + 3] * this.alphaMultiplier + this.alphaOffset;
            return f.putImageData(i, g, h), !0
        }, b.toString = function() {
            return "[ColorFilter]"
        }, b.clone = function() {
            return new a(this.redMultiplier, this.greenMultiplier, this.blueMultiplier, this.alphaMultiplier, this.redOffset, this.greenOffset, this.blueOffset, this.alphaOffset)
        }, createjs.ColorFilter = a
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var a = function(a, b, c, d) {
                this.initialize(a, b, c, d)
            },
            b = a.prototype;
        a.DELTA_INDEX = [0, .01, .02, .04, .05, .06, .07, .08, .1, .11, .12, .14, .15, .16, .17, .18, .2, .21, .22, .24, .25, .27, .28, .3, .32, .34, .36, .38, .4, .42, .44, .46, .48, .5, .53, .56, .59, .62, .65, .68, .71, .74, .77, .8, .83, .86, .89, .92, .95, .98, 1, 1.06, 1.12, 1.18, 1.24, 1.3, 1.36, 1.42, 1.48, 1.54, 1.6, 1.66, 1.72, 1.78, 1.84, 1.9, 1.96, 2, 2.12, 2.25, 2.37, 2.5, 2.62, 2.75, 2.87, 3, 3.2, 3.4, 3.6, 3.8, 4, 4.3, 4.7, 4.9, 5, 5.5, 6, 6.5, 6.8, 7, 7.3, 7.5, 7.8, 8, 8.4, 8.7, 9, 9.4, 9.6, 9.8, 10], a.IDENTITY_MATRIX = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], a.LENGTH = a.IDENTITY_MATRIX.length, b.initialize = function(a, b, c, d) {
            return this.reset(), this.adjustColor(a, b, c, d), this
        }, b.reset = function() {
            return this.copyMatrix(a.IDENTITY_MATRIX)
        }, b.adjustColor = function(a, b, c, d) {
            return this.adjustHue(d), this.adjustContrast(b), this.adjustBrightness(a), this.adjustSaturation(c)
        }, b.adjustBrightness = function(a) {
            return 0 == a || isNaN(a) ? this : (a = this._cleanValue(a, 255), this._multiplyMatrix([1, 0, 0, 0, a, 0, 1, 0, 0, a, 0, 0, 1, 0, a, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this)
        }, b.adjustContrast = function(b) {
            if (0 == b || isNaN(b)) return this;
            b = this._cleanValue(b, 100);
            var c;
            return 0 > b ? c = 127 + 127 * (b / 100) : (c = b % 1, c = 0 == c ? a.DELTA_INDEX[b] : a.DELTA_INDEX[b << 0] * (1 - c) + a.DELTA_INDEX[(b << 0) + 1] * c, c = 127 * c + 127), this._multiplyMatrix([c / 127, 0, 0, 0, .5 * (127 - c), 0, c / 127, 0, 0, .5 * (127 - c), 0, 0, c / 127, 0, .5 * (127 - c), 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this
        }, b.adjustSaturation = function(a) {
            if (0 == a || isNaN(a)) return this;
            a = this._cleanValue(a, 100);
            var b = 1 + (a > 0 ? 3 * a / 100 : a / 100),
                c = .3086,
                d = .6094,
                e = .082;
            return this._multiplyMatrix([c * (1 - b) + b, d * (1 - b), e * (1 - b), 0, 0, c * (1 - b), d * (1 - b) + b, e * (1 - b), 0, 0, c * (1 - b), d * (1 - b), e * (1 - b) + b, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this
        }, b.adjustHue = function(a) {
            if (0 == a || isNaN(a)) return this;
            a = this._cleanValue(a, 180) / 180 * Math.PI;
            var b = Math.cos(a),
                c = Math.sin(a),
                d = .213,
                e = .715,
                f = .072;
            return this._multiplyMatrix([d + b * (1 - d) + c * -d, e + b * -e + c * -e, f + b * -f + c * (1 - f), 0, 0, d + b * -d + .143 * c, e + b * (1 - e) + .14 * c, f + b * -f + c * -.283, 0, 0, d + b * -d + c * -(1 - d), e + b * -e + c * e, f + b * (1 - f) + c * f, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this
        }, b.concat = function(b) {
            return b = this._fixMatrix(b), b.length != a.LENGTH ? this : (this._multiplyMatrix(b), this)
        }, b.clone = function() {
            return (new a).copyMatrix(this)
        }, b.toArray = function() {
            for (var b = [], c = 0, d = a.LENGTH; d > c; c++) b[c] = this[c];
            return b
        }, b.copyMatrix = function(b) {
            for (var c = a.LENGTH, d = 0; c > d; d++) this[d] = b[d];
            return this
        }, b.toString = function() {
            return "[ColorMatrix]"
        }, b._multiplyMatrix = function(a) {
            for (var b = [], c = 0; 5 > c; c++) {
                for (var d = 0; 5 > d; d++) b[d] = this[d + 5 * c];
                for (var d = 0; 5 > d; d++) {
                    for (var e = 0, f = 0; 5 > f; f++) e += a[d + 5 * f] * b[f];
                    this[d + 5 * c] = e
                }
            }
        }, b._cleanValue = function(a, b) {
            return Math.min(b, Math.max(-b, a))
        }, b._fixMatrix = function(b) {
            return b instanceof a && (b = b.toArray()), b.length < a.LENGTH ? b = b.slice(0, b.length).concat(a.IDENTITY_MATRIX.slice(b.length, a.LENGTH)) : b.length > a.LENGTH && (b = b.slice(0, a.LENGTH)), b
        }, createjs.ColorMatrix = a
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var a = function(a) {
                this.initialize(a)
            },
            b = a.prototype = new createjs.Filter;
        b.matrix = null, b.initialize = function(a) {
            this.matrix = a
        }, b.applyFilter = function(a, b, c, d, e, f, g, h) {
            f = f || a, null == g && (g = b), null == h && (h = c);
            try {
                var i = a.getImageData(b, c, d, e)
            } catch (j) {
                return !1
            }
            for (var k, l, m, n, o = i.data, p = o.length, q = this.matrix, r = q[0], s = q[1], t = q[2], u = q[3], v = q[4], w = q[5], x = q[6], y = q[7], z = q[8], A = q[9], B = q[10], C = q[11], D = q[12], E = q[13], F = q[14], G = q[15], H = q[16], I = q[17], J = q[18], K = q[19], L = 0; p > L; L += 4) k = o[L], l = o[L + 1], m = o[L + 2], n = o[L + 3], o[L] = k * r + l * s + m * t + n * u + v, o[L + 1] = k * w + l * x + m * y + n * z + A, o[L + 2] = k * B + l * C + m * D + n * E + F, o[L + 3] = k * G + l * H + m * I + n * J + K;
            return f.putImageData(i, g, h), !0
        }, b.toString = function() {
            return "[ColorMatrixFilter]"
        }, b.clone = function() {
            return new a(this.matrix)
        }, createjs.ColorMatrixFilter = a
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var a = function() {
            throw "Touch cannot be instantiated"
        };
        a.isSupported = function() {
            return "ontouchstart" in window || window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 0 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 0
        }, a.enable = function(b, c, d) {
            return b && b.canvas && a.isSupported() ? (b.__touch = {
                pointers: {},
                multitouch: !c,
                preventDefault: !d,
                count: 0
            }, "ontouchstart" in window ? a._IOS_enable(b) : (window.navigator.msPointerEnabled || window.navigator.pointerEnabled) && a._IE_enable(b), !0) : !1
        }, a.disable = function(b) {
            b && ("ontouchstart" in window ? a._IOS_disable(b) : (window.navigator.msPointerEnabled || window.navigator.pointerEnabled) && a._IE_disable(b))
        }, a._IOS_enable = function(b) {
            var c = b.canvas,
                d = b.__touch.f = function(c) {
                    a._IOS_handleEvent(b, c)
                };
            c.addEventListener("touchstart", d, !1), c.addEventListener("touchmove", d, !1), c.addEventListener("touchend", d, !1), c.addEventListener("touchcancel", d, !1)
        }, a._IOS_disable = function(a) {
            var b = a.canvas;
            if (b) {
                var c = a.__touch.f;
                b.removeEventListener("touchstart", c, !1), b.removeEventListener("touchmove", c, !1), b.removeEventListener("touchend", c, !1), b.removeEventListener("touchcancel", c, !1)
            }
        }, a._IOS_handleEvent = function(a, b) {
            if (a) {
                a.__touch.preventDefault && b.preventDefault && b.preventDefault();
                for (var c = b.changedTouches, d = b.type, e = 0, f = c.length; f > e; e++) {
                    var g = c[e],
                        h = g.identifier;
                    g.target == a.canvas && ("touchstart" == d ? this._handleStart(a, h, b, g.pageX, g.pageY) : "touchmove" == d ? this._handleMove(a, h, b, g.pageX, g.pageY) : ("touchend" == d || "touchcancel" == d) && this._handleEnd(a, h, b))
                }
            }
        }, a._IE_enable = function(b) {
            var c = b.canvas,
                d = b.__touch.f = function(c) {
                    a._IE_handleEvent(b, c)
                };
            void 0 === window.navigator.pointerEnabled ? (c.addEventListener("MSPointerDown", d, !1), window.addEventListener("MSPointerMove", d, !1), window.addEventListener("MSPointerUp", d, !1), window.addEventListener("MSPointerCancel", d, !1), b.__touch.preventDefault && (c.style.msTouchAction = "none")) : (c.addEventListener("pointerdown", d, !1), window.addEventListener("pointermove", d, !1), window.addEventListener("pointerup", d, !1), window.addEventListener("pointercancel", d, !1), b.__touch.preventDefault && (c.style.touchAction = "none")), b.__touch.activeIDs = {}
        }, a._IE_disable = function(a) {
            var b = a.__touch.f;
            void 0 === window.navigator.pointerEnabled ? (window.removeEventListener("MSPointerMove", b, !1), window.removeEventListener("MSPointerUp", b, !1), window.removeEventListener("MSPointerCancel", b, !1), a.canvas && a.canvas.removeEventListener("MSPointerDown", b, !1)) : (window.removeEventListener("pointermove", b, !1), window.removeEventListener("pointerup", b, !1), window.removeEventListener("pointercancel", b, !1), a.canvas && a.canvas.removeEventListener("pointerdown", b, !1))
        }, a._IE_handleEvent = function(a, b) {
            if (a) {
                a.__touch.preventDefault && b.preventDefault && b.preventDefault();
                var c = b.type,
                    d = b.pointerId,
                    e = a.__touch.activeIDs;
                if ("MSPointerDown" == c || "pointerdown" == c) {
                    if (b.srcElement != a.canvas) return;
                    e[d] = !0, this._handleStart(a, d, b, b.pageX, b.pageY)
                } else e[d] && ("MSPointerMove" == c || "pointermove" == c ? this._handleMove(a, d, b, b.pageX, b.pageY) : ("MSPointerUp" == c || "MSPointerCancel" == c || "pointerup" == c || "pointercancel" == c) && (delete e[d], this._handleEnd(a, d, b)))
            }
        }, a._handleStart = function(a, b, c, d, e) {
            var f = a.__touch;
            if (f.multitouch || !f.count) {
                var g = f.pointers;
                g[b] || (g[b] = !0, f.count++, a._handlePointerDown(b, c, d, e))
            }
        }, a._handleMove = function(a, b, c, d, e) {
            a.__touch.pointers[b] && a._handlePointerMove(b, c, d, e)
        }, a._handleEnd = function(a, b, c) {
            var d = a.__touch,
                e = d.pointers;
            e[b] && (d.count--, a._handlePointerUp(b, c, !0), delete e[b])
        }, createjs.Touch = a
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var a = createjs.EaselJS = createjs.EaselJS || {};
        a.version = "0.7.1", a.buildDate = "Thu, 12 Dec 2013 23:33:39 GMT"
    }();
this.createjs = this.createjs || {},
    function() {
        var a = createjs.SoundJS = createjs.SoundJS || {};
        a.version = "0.5.2", a.buildDate = "Thu, 12 Dec 2013 23:33:37 GMT"
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var a = function() {},
            b = a.prototype;
        a.initialize = function(a) {
            a.addEventListener = b.addEventListener, a.on = b.on, a.removeEventListener = a.off = b.removeEventListener, a.removeAllEventListeners = b.removeAllEventListeners, a.hasEventListener = b.hasEventListener, a.dispatchEvent = b.dispatchEvent, a._dispatchEvent = b._dispatchEvent, a.willTrigger = b.willTrigger
        }, b._listeners = null, b._captureListeners = null, b.initialize = function() {}, b.addEventListener = function(a, b, c) {
            var d;
            d = c ? this._captureListeners = this._captureListeners || {} : this._listeners = this._listeners || {};
            var e = d[a];
            return e && this.removeEventListener(a, b, c), e = d[a], e ? e.push(b) : d[a] = [b], b
        }, b.on = function(a, b, c, d, e, f) {
            return b.handleEvent && (c = c || b, b = b.handleEvent), c = c || this, this.addEventListener(a, function(a) {
                b.call(c, a, e), d && a.remove()
            }, f)
        }, b.removeEventListener = function(a, b, c) {
            var d = c ? this._captureListeners : this._listeners;
            if (d) {
                var e = d[a];
                if (e)
                    for (var f = 0, g = e.length; g > f; f++)
                        if (e[f] == b) {
                            1 == g ? delete d[a] : e.splice(f, 1);
                            break
                        }
            }
        }, b.off = b.removeEventListener, b.removeAllEventListeners = function(a) {
            a ? (this._listeners && delete this._listeners[a], this._captureListeners && delete this._captureListeners[a]) : this._listeners = this._captureListeners = null
        }, b.dispatchEvent = function(a, b) {
            if ("string" == typeof a) {
                var c = this._listeners;
                if (!c || !c[a]) return !1;
                a = new createjs.Event(a)
            }
            if (a.target = b || this, a.bubbles && this.parent) {
                for (var d = this, e = [d]; d.parent;) e.push(d = d.parent);
                var f, g = e.length;
                for (f = g - 1; f >= 0 && !a.propagationStopped; f--) e[f]._dispatchEvent(a, 1 + (0 == f));
                for (f = 1; g > f && !a.propagationStopped; f++) e[f]._dispatchEvent(a, 3)
            } else this._dispatchEvent(a, 2);
            return a.defaultPrevented
        }, b.hasEventListener = function(a) {
            var b = this._listeners,
                c = this._captureListeners;
            return !!(b && b[a] || c && c[a])
        }, b.willTrigger = function(a) {
            for (var b = this; b;) {
                if (b.hasEventListener(a)) return !0;
                b = b.parent
            }
            return !1
        }, b.toString = function() {
            return "[EventDispatcher]"
        }, b._dispatchEvent = function(a, b) {
            var c, d = 1 == b ? this._captureListeners : this._listeners;
            if (a && d) {
                var e = d[a.type];
                if (!e || !(c = e.length)) return;
                a.currentTarget = this, a.eventPhase = b, a.removed = !1, e = e.slice();
                for (var f = 0; c > f && !a.immediatePropagationStopped; f++) {
                    var g = e[f];
                    g.handleEvent ? g.handleEvent(a) : g(a), a.removed && (this.off(a.type, g, 1 == b), a.removed = !1)
                }
            }
        }, createjs.EventDispatcher = a
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var a = function(a, b, c) {
                this.initialize(a, b, c)
            },
            b = a.prototype;
        b.type = null, b.target = null, b.currentTarget = null, b.eventPhase = 0, b.bubbles = !1, b.cancelable = !1, b.timeStamp = 0, b.defaultPrevented = !1, b.propagationStopped = !1, b.immediatePropagationStopped = !1, b.removed = !1, b.initialize = function(a, b, c) {
            this.type = a, this.bubbles = b, this.cancelable = c, this.timeStamp = (new Date).getTime()
        }, b.preventDefault = function() {
            this.defaultPrevented = !0
        }, b.stopPropagation = function() {
            this.propagationStopped = !0
        }, b.stopImmediatePropagation = function() {
            this.immediatePropagationStopped = this.propagationStopped = !0
        }, b.remove = function() {
            this.removed = !0
        }, b.clone = function() {
            return new a(this.type, this.bubbles, this.cancelable)
        }, b.toString = function() {
            return "[Event (type=" + this.type + ")]"
        }, createjs.Event = a
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        createjs.indexOf = function(a, b) {
            for (var c = 0, d = a.length; d > c; c++)
                if (b === a[c]) return c;
            return -1
        }
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        createjs.proxy = function(a, b) {
            var c = Array.prototype.slice.call(arguments, 2);
            return function() {
                return a.apply(b, Array.prototype.slice.call(arguments, 0).concat(c))
            }
        }
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a() {
            throw "Sound cannot be instantiated"
        }

        function b(a, b) {
            this.init(a, b)
        }

        function c() {
            this.isDefault = !0, this.addEventListener = this.removeEventListener = this.removeAllEventListeners = this.dispatchEvent = this.hasEventListener = this._listeners = this._interrupt = this._playFailed = this.pause = this.resume = this.play = this._beginPlaying = this._cleanUp = this.stop = this.setMasterVolume = this.setVolume = this.mute = this.setMute = this.getMute = this.setPan = this.getPosition = this.setPosition = this.playFailed = function() {
                return !1
            }, this.getVolume = this.getPan = this.getDuration = function() {
                return 0
            }, this.playState = a.PLAY_FAILED, this.toString = function() {
                return "[Sound Default Sound Instance]"
            }
        }

        function d() {}
        var e = a;
        e.DELIMITER = "|", e.INTERRUPT_ANY = "any", e.INTERRUPT_EARLY = "early", e.INTERRUPT_LATE = "late", e.INTERRUPT_NONE = "none", e.PLAY_INITED = "playInited", e.PLAY_SUCCEEDED = "playSucceeded", e.PLAY_INTERRUPTED = "playInterrupted", e.PLAY_FINISHED = "playFinished", e.PLAY_FAILED = "playFailed", e.SUPPORTED_EXTENSIONS = ["mp3", "ogg", "mpeg", "wav", "m4a", "mp4", "aiff", "wma", "mid"], e.EXTENSION_MAP = {
            m4a: "mp4"
        }, e.FILE_PATTERN = /^(?:(\w+:)\/{2}(\w+(?:\.\w+)*\/?))?([/.]*?(?:[^?]+)?\/)?((?:[^/?]+)\.(\w+))(?:\?(\S+)?)?$/, e.defaultInterruptBehavior = e.INTERRUPT_NONE, e.alternateExtensions = [], e._lastID = 0, e.activePlugin = null, e._pluginsRegistered = !1, e._masterVolume = 1, e._masterMute = !1, e._instances = [], e._idHash = {}, e._preloadHash = {}, e._defaultSoundInstance = null, e.addEventListener = null, e.removeEventListener = null, e.removeAllEventListeners = null, e.dispatchEvent = null, e.hasEventListener = null, e._listeners = null, createjs.EventDispatcher.initialize(e), e._sendFileLoadEvent = function(a) {
            if (e._preloadHash[a])
                for (var b = 0, c = e._preloadHash[a].length; c > b; b++) {
                    var d = e._preloadHash[a][b];
                    if (e._preloadHash[a][b] = !0, e.hasEventListener("fileload")) {
                        var f = new createjs.Event("fileload");
                        f.src = d.src, f.id = d.id, f.data = d.data, e.dispatchEvent(f)
                    }
                }
        }, e.getPreloadHandlers = function() {
            return {
                callback: createjs.proxy(e.initLoad, e),
                types: ["sound"],
                extensions: e.SUPPORTED_EXTENSIONS
            }
        }, e.registerPlugin = function(a) {
            try {
                console.log("createjs.Sound.registerPlugin has been deprecated. Please use registerPlugins.")
            } catch (b) {}
            return e._registerPlugin(a)
        }, e._registerPlugin = function(a) {
            return e._pluginsRegistered = !0, null == a ? !1 : a.isSupported() ? (e.activePlugin = new a, !0) : !1
        }, e.registerPlugins = function(a) {
            for (var b = 0, c = a.length; c > b; b++) {
                var d = a[b];
                if (e._registerPlugin(d)) return !0
            }
            return !1
        }, e.initializeDefaultPlugins = function() {
            return null != e.activePlugin ? !0 : e._pluginsRegistered ? !1 : e.registerPlugins([createjs.WebAudioPlugin, createjs.HTMLAudioPlugin]) ? !0 : !1
        }, e.isReady = function() {
            return null != e.activePlugin
        }, e.getCapabilities = function() {
            return null == e.activePlugin ? null : e.activePlugin._capabilities
        }, e.getCapability = function(a) {
            return null == e.activePlugin ? null : e.activePlugin._capabilities[a]
        }, e.initLoad = function(a, b, c, d, f) {
            a = a.replace(f, "");
            var g = e.registerSound(a, c, d, !1, f);
            return null == g ? !1 : g
        }, e.registerSound = function(a, c, d, f, g) {
            if (!e.initializeDefaultPlugins()) return !1;
            if (a instanceof Object && (g = c, c = a.id, d = a.data, a = a.src), e.alternateExtensions.length) var h = e._parsePath2(a, "sound", c, d);
            else var h = e._parsePath(a, "sound", c, d);
            if (null == h) return !1;
            null != g && (a = g + a, h.src = g + h.src), null != c && (e._idHash[c] = h.src);
            var i = null;
            null != d && (isNaN(d.channels) ? isNaN(d) || (i = parseInt(d)) : i = parseInt(d.channels));
            var j = e.activePlugin.register(h.src, i);
            if (null != j && (null != j.numChannels && (i = j.numChannels), b.create(h.src, i), null != d && isNaN(d) ? d.channels = h.data.channels = i || b.maxPerChannel() : d = h.data = i || b.maxPerChannel(), null != j.tag ? h.tag = j.tag : j.src && (h.src = j.src), null != j.completeHandler && (h.completeHandler = j.completeHandler), j.type && (h.type = j.type)), 0 != f)
                if (e._preloadHash[h.src] || (e._preloadHash[h.src] = []), e._preloadHash[h.src].push({
                        src: a,
                        id: c,
                        data: d
                    }), 1 == e._preloadHash[h.src].length) e.activePlugin.preload(h.src, j);
                else if (1 == e._preloadHash[h.src][0]) return !0;
            return h
        }, e.registerManifest = function(a, b) {
            for (var c = [], d = 0, e = a.length; e > d; d++) c[d] = createjs.Sound.registerSound(a[d].src, a[d].id, a[d].data, a[d].preload, b);
            return c
        }, e.removeSound = function(a, c) {
            if (null == e.activePlugin) return !1;
            if (a instanceof Object && (a = a.src), a = e._getSrcById(a), e.alternateExtensions.length) var d = e._parsePath2(a);
            else var d = e._parsePath(a);
            if (null == d) return !1;
            null != c && (d.src = c + d.src), a = d.src;
            for (var f in e._idHash) e._idHash[f] == a && delete e._idHash[f];
            return b.removeSrc(a), delete e._preloadHash[a], e.activePlugin.removeSound(a), !0
        }, e.removeManifest = function(a, b) {
            for (var c = [], d = 0, e = a.length; e > d; d++) c[d] = createjs.Sound.removeSound(a[d].src, b);
            return c
        }, e.removeAllSounds = function() {
            e._idHash = {}, e._preloadHash = {}, b.removeAll(), e.activePlugin.removeAllSounds()
        }, e.loadComplete = function(a) {
            if (e.alternateExtensions.length) var b = e._parsePath2(a, "sound");
            else var b = e._parsePath(a, "sound");
            return a = b ? e._getSrcById(b.src) : e._getSrcById(a), 1 == e._preloadHash[a][0]
        }, e._parsePath = function(a, b, c, d) {
            "string" != typeof a && (a = a.toString());
            var f = a.split(e.DELIMITER);
            if (f.length > 1) try {
                console.log('createjs.Sound.DELIMITER "|" loading approach has been deprecated. Please use the new alternateExtensions property.')
            } catch (g) {}
            for (var h = {
                    type: b || "sound",
                    id: c,
                    data: d
                }, i = e.getCapabilities(), j = 0, k = f.length; k > j; j++) {
                var l = f[j],
                    m = l.match(e.FILE_PATTERN);
                if (null == m) return !1;
                var n = m[4],
                    o = m[5];
                if (i[o] && createjs.indexOf(e.SUPPORTED_EXTENSIONS, o) > -1) return h.name = n, h.src = l, h.extension = o, h
            }
            return null
        }, e._parsePath2 = function(a, b, c, d) {
            "string" != typeof a && (a = a.toString());
            var f = a.match(e.FILE_PATTERN);
            if (null == f) return !1;
            for (var g = f[4], h = f[5], i = e.getCapabilities(), j = 0; !i[h];)
                if (h = e.alternateExtensions[j++], j > e.alternateExtensions.length) return null;
            a = a.replace("." + f[5], "." + h);
            var k = {
                type: b || "sound",
                id: c,
                data: d
            };
            return k.name = g, k.src = a, k.extension = h, k
        }, e.play = function(a, b, c, d, f, g, h) {
            var i = e.createInstance(a),
                j = e._playInstance(i, b, c, d, f, g, h);
            return j || i.playFailed(), i
        }, e.createInstance = function(c) {
            if (!e.initializeDefaultPlugins()) return e._defaultSoundInstance;
            if (c = e._getSrcById(c), e.alternateExtensions.length) var d = e._parsePath2(c, "sound");
            else var d = e._parsePath(c, "sound");
            var f = null;
            return null != d && null != d.src ? (b.create(d.src), f = e.activePlugin.create(d.src)) : f = a._defaultSoundInstance, f.uniqueId = e._lastID++, f
        }, e.setVolume = function(a) {
            if (null == Number(a)) return !1;
            if (a = Math.max(0, Math.min(1, a)), e._masterVolume = a, !this.activePlugin || !this.activePlugin.setVolume || !this.activePlugin.setVolume(a))
                for (var b = this._instances, c = 0, d = b.length; d > c; c++) b[c].setMasterVolume(a)
        }, e.getVolume = function() {
            return e._masterVolume
        }, e.setMute = function(a) {
            if (null == a || void 0 == a) return !1;
            if (this._masterMute = a, !this.activePlugin || !this.activePlugin.setMute || !this.activePlugin.setMute(a))
                for (var b = this._instances, c = 0, d = b.length; d > c; c++) b[c].setMasterMute(a);
            return !0
        }, e.getMute = function() {
            return this._masterMute
        }, e.stop = function() {
            for (var a = this._instances, b = a.length; b--;) a[b].stop()
        }, e._playInstance = function(a, b, c, d, f, g, h) {
            if (b instanceof Object && (c = b.delay, d = b.offset, f = b.loop, g = b.volume, h = b.pan, b = b.interrupt), b = b || e.defaultInterruptBehavior, null == c && (c = 0), null == d && (d = a.getPosition()), null == f && (f = 0), null == g && (g = a.volume), null == h && (h = a.pan), 0 == c) {
                var i = e._beginPlaying(a, b, d, f, g, h);
                if (!i) return !1
            } else {
                var j = setTimeout(function() {
                    e._beginPlaying(a, b, d, f, g, h)
                }, c);
                a._delayTimeoutId = j
            }
            return this._instances.push(a), !0
        }, e._beginPlaying = function(a, c, d, e, f, g) {
            if (!b.add(a, c)) return !1;
            var h = a._beginPlaying(d, e, f, g);
            if (!h) {
                var i = createjs.indexOf(this._instances, a);
                return i > -1 && this._instances.splice(i, 1), !1
            }
            return !0
        }, e._getSrcById = function(a) {
            return null == e._idHash || null == e._idHash[a] ? a : e._idHash[a]
        }, e._playFinished = function(a) {
            b.remove(a);
            var c = createjs.indexOf(this._instances, a);
            c > -1 && this._instances.splice(c, 1)
        }, createjs.Sound = a, b.channels = {}, b.create = function(a, c) {
            var d = b.get(a);
            return null == d ? (b.channels[a] = new b(a, c), !0) : !1
        }, b.removeSrc = function(a) {
            var c = b.get(a);
            return null == c ? !1 : (c.removeAll(), delete b.channels[a], !0)
        }, b.removeAll = function() {
            for (var a in b.channels) b.channels[a].removeAll();
            b.channels = {}
        }, b.add = function(a, c) {
            var d = b.get(a.src);
            return null == d ? !1 : d.add(a, c)
        }, b.remove = function(a) {
            var c = b.get(a.src);
            return null == c ? !1 : (c.remove(a), !0)
        }, b.maxPerChannel = function() {
            return f.maxDefault
        }, b.get = function(a) {
            return b.channels[a]
        };
        var f = b.prototype;
        f.src = null, f.max = null, f.maxDefault = 100, f.length = 0, f.init = function(a, b) {
            this.src = a, this.max = b || this.maxDefault, -1 == this.max && (this.max = this.maxDefault), this._instances = []
        }, f.get = function(a) {
            return this._instances[a]
        }, f.add = function(a, b) {
            return this.getSlot(b, a) ? (this._instances.push(a), this.length++, !0) : !1
        }, f.remove = function(a) {
            var b = createjs.indexOf(this._instances, a);
            return -1 == b ? !1 : (this._instances.splice(b, 1), this.length--, !0)
        }, f.removeAll = function() {
            for (var a = this.length - 1; a >= 0; a--) this._instances[a].stop()
        }, f.getSlot = function(b) {
            for (var c, d, e = 0, f = this.max; f > e; e++) {
                if (c = this.get(e), null == c) return !0;
                (b != a.INTERRUPT_NONE || c.playState == a.PLAY_FINISHED) && (0 != e ? c.playState == a.PLAY_FINISHED || c.playState == a.PLAY_INTERRUPTED || c.playState == a.PLAY_FAILED ? d = c : (b == a.INTERRUPT_EARLY && c.getPosition() < d.getPosition() || b == a.INTERRUPT_LATE && c.getPosition() > d.getPosition()) && (d = c) : d = c)
            }
            return null != d ? (d._interrupt(), this.remove(d), !0) : !1
        }, f.toString = function() {
            return "[Sound SoundChannel]"
        }, a._defaultSoundInstance = new c, d.init = function() {
            var a = window.navigator.userAgent;
            d.isFirefox = a.indexOf("Firefox") > -1, d.isOpera = null != window.opera, d.isChrome = a.indexOf("Chrome") > -1, d.isIOS = a.indexOf("iPod") > -1 || a.indexOf("iPhone") > -1 || a.indexOf("iPad") > -1, d.isAndroid = a.indexOf("Android") > -1, d.isBlackberry = a.indexOf("Blackberry") > -1
        }, d.init(), createjs.Sound.BrowserDetect = d
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a() {
            this._init()
        }
        var b = a;
        b._capabilities = null, b.isSupported = function() {
            var a = createjs.Sound.BrowserDetect.isIOS || createjs.Sound.BrowserDetect.isAndroid || createjs.Sound.BrowserDetect.isBlackberry;
            return "file:" != location.protocol || a || this._isFileXHRSupported() ? (b._generateCapabilities(), null == b.context ? !1 : !0) : !1
        }, b._isFileXHRSupported = function() {
            var a = !0,
                b = new XMLHttpRequest;
            try {
                b.open("GET", "fail.fail", !1)
            } catch (c) {
                return a = !1
            }
            b.onerror = function() {
                a = !1
            }, b.onload = function() {
                a = 404 == this.status || 200 == this.status || 0 == this.status && "" != this.response
            };
            try {
                b.send()
            } catch (c) {
                a = !1
            }
            return a
        }, b._generateCapabilities = function() {
            if (null == b._capabilities) {
                var a = document.createElement("audio");
                if (null == a.canPlayType) return null;
                if (window.webkitAudioContext) b.context = new webkitAudioContext;
                else {
                    if (!window.AudioContext) return null;
                    b.context = new AudioContext
                }
                b._compatibilitySetUp(), b.playEmptySound(), b._capabilities = {
                    panning: !0,
                    volume: !0,
                    tracks: -1
                };
                for (var c = createjs.Sound.SUPPORTED_EXTENSIONS, d = createjs.Sound.EXTENSION_MAP, e = 0, f = c.length; f > e; e++) {
                    var g = c[e],
                        h = d[g] || g;
                    b._capabilities[g] = "no" != a.canPlayType("audio/" + g) && "" != a.canPlayType("audio/" + g) || "no" != a.canPlayType("audio/" + h) && "" != a.canPlayType("audio/" + h)
                }
                b.context.destination.numberOfChannels < 2 && (b._capabilities.panning = !1), b.dynamicsCompressorNode = b.context.createDynamicsCompressor(), b.dynamicsCompressorNode.connect(b.context.destination), b.gainNode = b.context.createGain(), b.gainNode.connect(b.dynamicsCompressorNode)
            }
        }, b._compatibilitySetUp = function() {
            if (!b.context.createGain) {
                b.context.createGain = b.context.createGainNode;
                var a = b.context.createBufferSource();
                a.__proto__.start = a.__proto__.noteGrainOn, a.__proto__.stop = a.__proto__.noteOff, this._panningModel = 0
            }
        }, b.playEmptySound = function() {
            var a = this.context.createBuffer(1, 1, 22050),
                b = this.context.createBufferSource();
            b.buffer = a, b.connect(this.context.destination), b.start(0, 0, 0)
        };
        var c = a.prototype;
        c._capabilities = null, c._volume = 1, c.context = null, c._panningModel = "equalpower", c.dynamicsCompressorNode = null, c.gainNode = null, c._arrayBuffers = null, c._init = function() {
            this._capabilities = b._capabilities, this._arrayBuffers = {}, this.context = b.context, this.gainNode = b.gainNode, this.dynamicsCompressorNode = b.dynamicsCompressorNode
        }, c.register = function(a) {
            this._arrayBuffers[a] = !0;
            var b = new createjs.WebAudioPlugin.Loader(a, this);
            return {
                tag: b
            }
        }, c.isPreloadStarted = function(a) {
            return null != this._arrayBuffers[a]
        }, c.isPreloadComplete = function(a) {
            return !(null == this._arrayBuffers[a] || 1 == this._arrayBuffers[a])
        }, c.removeSound = function(a) {
            delete this._arrayBuffers[a]
        }, c.removeAllSounds = function() {
            this._arrayBuffers = {}
        }, c.addPreloadResults = function(a, b) {
            this._arrayBuffers[a] = b
        }, c._handlePreloadComplete = function() {
            createjs.Sound._sendFileLoadEvent(this.src)
        }, c.preload = function(a) {
            this._arrayBuffers[a] = !0;
            var b = new createjs.WebAudioPlugin.Loader(a, this);
            b.onload = this._handlePreloadComplete, b.load()
        }, c.create = function(a) {
            return this.isPreloadStarted(a) || this.preload(a), new createjs.WebAudioPlugin.SoundInstance(a, this)
        }, c.setVolume = function(a) {
            return this._volume = a, this._updateVolume(), !0
        }, c._updateVolume = function() {
            var a = createjs.Sound._masterMute ? 0 : this._volume;
            a != this.gainNode.gain.value && (this.gainNode.gain.value = a)
        }, c.getVolume = function() {
            return this._volume
        }, c.setMute = function() {
            return this._updateVolume(), !0
        }, c.toString = function() {
            return "[WebAudioPlugin]"
        }, createjs.WebAudioPlugin = a
    }(),
    function() {
        "use strict";

        function a(a, b) {
            this._init(a, b)
        }
        var b = a.prototype = new createjs.EventDispatcher;
        b.src = null, b.uniqueId = -1, b.playState = null, b._owner = null, b._offset = 0, b._delay = 0, b._volume = 1;
        try {
            Object.defineProperty(b, "volume", {
                get: function() {
                    return this._volume
                },
                set: function(a) {
                    return null == Number(a) ? !1 : (a = Math.max(0, Math.min(1, a)), this._volume = a, this._updateVolume(), void 0)
                }
            })
        } catch (c) {}
        b._pan = 0;
        try {
            Object.defineProperty(b, "pan", {
                get: function() {
                    return this._pan
                },
                set: function(a) {
                    return this._owner._capabilities.panning && null != Number(a) ? (a = Math.max(-1, Math.min(1, a)), this._pan = a, this.panNode.setPosition(a, 0, -.5), void 0) : !1
                }
            })
        } catch (c) {}
        b._duration = 0, b._remainingLoops = 0, b._delayTimeoutId = null, b._soundCompleteTimeout = null, b.gainNode = null, b.panNode = null, b.sourceNode = null, b._sourceNodeNext = null, b._muted = !1, b._paused = !1, b._startTime = 0, b._endedHandler = null, b._sendEvent = function(a) {
            var b = new createjs.Event(a);
            this.dispatchEvent(b)
        }, b._init = function(a, b) {
            this._owner = b, this.src = a, this.gainNode = this._owner.context.createGain(), this.panNode = this._owner.context.createPanner(), this.panNode.panningModel = this._owner._panningModel, this.panNode.connect(this.gainNode), this._owner.isPreloadComplete(this.src) && (this._duration = 1e3 * this._owner._arrayBuffers[this.src].duration), this._endedHandler = createjs.proxy(this._handleSoundComplete, this)
        }, b._cleanUp = function() {
            this.sourceNode && this.playState == createjs.Sound.PLAY_SUCCEEDED && (this.sourceNode = this._cleanUpAudioNode(this.sourceNode), this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext)), 0 != this.gainNode.numberOfOutputs && this.gainNode.disconnect(0), clearTimeout(this._delayTimeoutId), clearTimeout(this._soundCompleteTimeout), this._startTime = 0, null != window.createjs && createjs.Sound._playFinished(this)
        }, b._cleanUpAudioNode = function(a) {
            return a && (a.stop(0), a.disconnect(this.panNode), a = null), a
        }, b._interrupt = function() {
            this._cleanUp(), this.playState = createjs.Sound.PLAY_INTERRUPTED, this._paused = !1, this._sendEvent("interrupted")
        }, b._handleSoundReady = function() {
            if (null != window.createjs) {
                if (1e3 * this._offset > this.getDuration()) return this.playFailed(), void 0;
                this._offset < 0 && (this._offset = 0), this.playState = createjs.Sound.PLAY_SUCCEEDED, this._paused = !1, this.gainNode.connect(this._owner.gainNode);
                var a = this._owner._arrayBuffers[this.src].duration;
                this.sourceNode = this._createAndPlayAudioNode(this._owner.context.currentTime - a, this._offset), this._duration = 1e3 * a, this._startTime = this.sourceNode.startTime - this._offset, this._soundCompleteTimeout = setTimeout(this._endedHandler, 1e3 * (a - this._offset)), 0 != this._remainingLoops && (this._sourceNodeNext = this._createAndPlayAudioNode(this._startTime, 0))
            }
        }, b._createAndPlayAudioNode = function(a, b) {
            var c = this._owner.context.createBufferSource();
            return c.buffer = this._owner._arrayBuffers[this.src], c.connect(this.panNode), this._owner.context.currentTime, c.startTime = a + c.buffer.duration, c.start(c.startTime, b, c.buffer.duration - b), c
        }, b.play = function(a, b, c, d, e, f) {
            this._cleanUp(), createjs.Sound._playInstance(this, a, b, c, d, e, f)
        }, b._beginPlaying = function(a, b, c, d) {
            return null != window.createjs && this.src ? (this._offset = a / 1e3, this._remainingLoops = b, this.volume = c, this.pan = d, this._owner.isPreloadComplete(this.src) ? (this._handleSoundReady(null), this._sendEvent("succeeded"), 1) : (this.playFailed(), void 0)) : void 0
        }, b.pause = function() {
            return this._paused || this.playState != createjs.Sound.PLAY_SUCCEEDED ? !1 : (this._paused = !0, this._offset = this._owner.context.currentTime - this._startTime, this._cleanUpAudioNode(this.sourceNode), this._cleanUpAudioNode(this._sourceNodeNext), 0 != this.gainNode.numberOfOutputs && this.gainNode.disconnect(), clearTimeout(this._delayTimeoutId), clearTimeout(this._soundCompleteTimeout), !0)
        }, b.resume = function() {
            return this._paused ? (this._handleSoundReady(null), !0) : !1
        }, b.stop = function() {
            return this._cleanUp(), this.playState = createjs.Sound.PLAY_FINISHED, this._offset = 0, !0
        }, b.setVolume = function(a) {
            return this.volume = a, !0
        }, b._updateVolume = function() {
            var a = this._muted ? 0 : this._volume;
            return a != this.gainNode.gain.value ? (this.gainNode.gain.value = a, !0) : !1
        }, b.getVolume = function() {
            return this.volume
        }, b.setMute = function(a) {
            return null == a || void 0 == a ? !1 : (this._muted = a, this._updateVolume(), !0)
        }, b.getMute = function() {
            return this._muted
        }, b.setPan = function(a) {
            return this.pan = a, this.pan != a ? !1 : void 0
        }, b.getPan = function() {
            return this.pan
        }, b.getPosition = function() {
            if (this._paused || null == this.sourceNode) var a = this._offset;
            else var a = this._owner.context.currentTime - this._startTime;
            return 1e3 * a
        }, b.setPosition = function(a) {
            return this._offset = a / 1e3, this.sourceNode && this.playState == createjs.Sound.PLAY_SUCCEEDED && (this._cleanUpAudioNode(this.sourceNode), this._cleanUpAudioNode(this._sourceNodeNext), clearTimeout(this._soundCompleteTimeout)), this._paused || this.playState != createjs.Sound.PLAY_SUCCEEDED || this._handleSoundReady(null), !0
        }, b.getDuration = function() {
            return this._duration
        }, b._handleSoundComplete = function() {
            return this._offset = 0, 0 != this._remainingLoops ? (this._remainingLoops--, this._sourceNodeNext ? (this._cleanUpAudioNode(this.sourceNode), this.sourceNode = this._sourceNodeNext, this._startTime = this.sourceNode.startTime, this._sourceNodeNext = this._createAndPlayAudioNode(this._startTime, 0), this._soundCompleteTimeout = setTimeout(this._endedHandler, this._duration)) : this._handleSoundReady(null), this._sendEvent("loop"), void 0) : (null != window.createjs && (this._cleanUp(), this.playState = createjs.Sound.PLAY_FINISHED, this._sendEvent("complete")), void 0)
        }, b.playFailed = function() {
            null != window.createjs && (this._cleanUp(), this.playState = createjs.Sound.PLAY_FAILED, this._sendEvent("failed"))
        }, b.toString = function() {
            return "[WebAudioPlugin SoundInstance]"
        }, createjs.WebAudioPlugin.SoundInstance = a
    }(),
    function() {
        "use strict";

        function a(a, b) {
            this._init(a, b)
        }
        var b = a.prototype;
        b.request = null, b.owner = null, b.progress = -1, b.src = null, b.originalSrc = null, b.result = null, b.onload = null, b.onprogress = null, b.onError = null, b._init = function(a, b) {
            this.src = a, this.originalSrc = a, this.owner = b
        }, b.load = function(a) {
            null != a && (this.src = a), this.request = new XMLHttpRequest, this.request.open("GET", this.src, !0), this.request.responseType = "arraybuffer", this.request.onload = createjs.proxy(this.handleLoad, this), this.request.onError = createjs.proxy(this.handleError, this), this.request.onprogress = createjs.proxy(this.handleProgress, this), this.request.send()
        }, b.handleProgress = function(a, b) {
            this.progress = a / b, null != this.onprogress && this.onprogress({
                loaded: a,
                total: b,
                progress: this.progress
            })
        }, b.handleLoad = function() {
            this.owner.context.decodeAudioData(this.request.response, createjs.proxy(this.handleAudioDecoded, this), createjs.proxy(this.handleError, this))
        }, b.handleAudioDecoded = function(a) {
            this.progress = 1, this.result = a, this.src = this.originalSrc, this.owner.addPreloadResults(this.src, this.result), this.onload && this.onload()
        }, b.handleError = function(a) {
            this.owner.removeSound(this.src), this.onerror && this.onerror(a)
        }, b.toString = function() {
            return "[WebAudioPlugin Loader]"
        }, createjs.WebAudioPlugin.Loader = a
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a() {
            this._init()
        }
        var b = a;
        b.MAX_INSTANCES = 30, b._AUDIO_READY = "canplaythrough", b._AUDIO_ENDED = "ended", b._AUDIO_SEEKED = "seeked", b._AUDIO_STALLED = "stalled", b._capabilities = null, b.enableIOS = !1, b.isSupported = function() {
            if (createjs.Sound.BrowserDetect.isIOS && !b.enableIOS) return !1;
            b._generateCapabilities();
            var a = b.tag;
            return null == a || null == b._capabilities ? !1 : !0
        }, b._generateCapabilities = function() {
            if (null == b._capabilities) {
                var a = b.tag = document.createElement("audio");
                if (null == a.canPlayType) return null;
                b._capabilities = {
                    panning: !0,
                    volume: !0,
                    tracks: -1
                };
                for (var c = createjs.Sound.SUPPORTED_EXTENSIONS, d = createjs.Sound.EXTENSION_MAP, e = 0, f = c.length; f > e; e++) {
                    var g = c[e],
                        h = d[g] || g;
                    b._capabilities[g] = "no" != a.canPlayType("audio/" + g) && "" != a.canPlayType("audio/" + g) || "no" != a.canPlayType("audio/" + h) && "" != a.canPlayType("audio/" + h)
                }
            }
        };
        var c = a.prototype;
        c._capabilities = null, c._audioSources = null, c.defaultNumChannels = 2, c.loadedHandler = null, c._init = function() {
            this._capabilities = b._capabilities, this._audioSources = {}
        }, c.register = function(a, b) {
            this._audioSources[a] = !0;
            for (var c = createjs.HTMLAudioPlugin.TagPool.get(a), d = null, e = b || this.defaultNumChannels, f = 0; e > f; f++) d = this._createTag(a), c.add(d);
            if (d.id = a, this.loadedHandler = createjs.proxy(this._handleTagLoad, this), d.addEventListener && d.addEventListener("canplaythrough", this.loadedHandler), null == d.onreadystatechange) d.onreadystatechange = this.loadedHandler;
            else {
                var g = d.onreadystatechange;
                d.onreadystatechange = function() {
                    g(), this.loadedHandler()
                }
            }
            return {
                tag: d,
                numChannels: e
            }
        }, c._handleTagLoad = function(a) {
            a.target.removeEventListener && a.target.removeEventListener("canplaythrough", this.loadedHandler), a.target.onreadystatechange = null, a.target.src != a.target.id && createjs.HTMLAudioPlugin.TagPool.checkSrc(a.target.id)
        }, c._createTag = function(a) {
            var b = document.createElement("audio");
            return b.autoplay = !1, b.preload = "none", b.src = a, b
        }, c.removeSound = function(a) {
            delete this._audioSources[a], createjs.HTMLAudioPlugin.TagPool.remove(a)
        }, c.removeAllSounds = function() {
            this._audioSources = {}, createjs.HTMLAudioPlugin.TagPool.removeAll()
        }, c.create = function(a) {
            if (!this.isPreloadStarted(a)) {
                var b = createjs.HTMLAudioPlugin.TagPool.get(a),
                    c = this._createTag(a);
                c.id = a, b.add(c), this.preload(a, {
                    tag: c
                })
            }
            return new createjs.HTMLAudioPlugin.SoundInstance(a, this)
        }, c.isPreloadStarted = function(a) {
            return null != this._audioSources[a]
        }, c.preload = function(a, b) {
            this._audioSources[a] = !0, new createjs.HTMLAudioPlugin.Loader(a, b.tag)
        }, c.toString = function() {
            return "[HTMLAudioPlugin]"
        }, createjs.HTMLAudioPlugin = a
    }(),
    function() {
        "use strict";

        function a(a, b) {
            this._init(a, b)
        }
        var b = a.prototype = new createjs.EventDispatcher;
        b.src = null, b.uniqueId = -1, b.playState = null, b._owner = null, b.loaded = !1, b._offset = 0, b._delay = 0, b._volume = 1;
        try {
            Object.defineProperty(b, "volume", {
                get: function() {
                    return this._volume
                },
                set: function(a) {
                    null != Number(a) && (a = Math.max(0, Math.min(1, a)), this._volume = a, this._updateVolume())
                }
            })
        } catch (c) {}
        b.pan = 0, b._duration = 0, b._remainingLoops = 0, b._delayTimeoutId = null, b.tag = null, b._muted = !1, b._paused = !1, b._endedHandler = null, b._readyHandler = null, b._stalledHandler = null, b.loopHandler = null, b._init = function(a, b) {
            this.src = a, this._owner = b, this._endedHandler = createjs.proxy(this._handleSoundComplete, this), this._readyHandler = createjs.proxy(this._handleSoundReady, this), this._stalledHandler = createjs.proxy(this._handleSoundStalled, this), this.loopHandler = createjs.proxy(this.handleSoundLoop, this)
        }, b._sendEvent = function(a) {
            var b = new createjs.Event(a);
            this.dispatchEvent(b)
        }, b._cleanUp = function() {
            var a = this.tag;
            if (null != a) {
                a.pause(), a.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, !1), a.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_READY, this._readyHandler, !1), a.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this.loopHandler, !1);
                try {
                    a.currentTime = 0
                } catch (b) {}
                createjs.HTMLAudioPlugin.TagPool.setInstance(this.src, a), this.tag = null
            }
            clearTimeout(this._delayTimeoutId), null != window.createjs && createjs.Sound._playFinished(this)
        }, b._interrupt = function() {
            null != this.tag && (this.playState = createjs.Sound.PLAY_INTERRUPTED, this._cleanUp(), this._paused = !1, this._sendEvent("interrupted"))
        }, b.play = function(a, b, c, d, e, f) {
            this._cleanUp(), createjs.Sound._playInstance(this, a, b, c, d, e, f)
        }, b._beginPlaying = function(a, b, c, d) {
            if (null == window.createjs) return -1;
            var e = this.tag = createjs.HTMLAudioPlugin.TagPool.getInstance(this.src);
            return null == e ? (this.playFailed(), -1) : (e.addEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, !1), this._offset = a, this.volume = c, this.pan = d, this._updateVolume(), this._remainingLoops = b, 4 !== e.readyState ? (e.addEventListener(createjs.HTMLAudioPlugin._AUDIO_READY, this._readyHandler, !1), e.addEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED, this._stalledHandler, !1), e.preload = "auto", e.load()) : this._handleSoundReady(null), this._sendEvent("succeeded"), 1)
        }, b._handleSoundStalled = function() {
            this._cleanUp(), this._sendEvent("failed")
        }, b._handleSoundReady = function() {
            if (null != window.createjs) {
                if (this._duration = 1e3 * this.tag.duration, this.playState = createjs.Sound.PLAY_SUCCEEDED, this._paused = !1, this.tag.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_READY, this._readyHandler, !1), this._offset >= this.getDuration()) return this.playFailed(), void 0;
                this._offset > 0 && (this.tag.currentTime = .001 * this._offset), -1 == this._remainingLoops && (this.tag.loop = !0), 0 != this._remainingLoops && (this.tag.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this.loopHandler, !1), this.tag.loop = !0), this.tag.play()
            }
        }, b.pause = function() {
            return this._paused || this.playState != createjs.Sound.PLAY_SUCCEEDED || null == this.tag ? !1 : (this._paused = !0, this.tag.pause(), clearTimeout(this._delayTimeoutId), !0)
        }, b.resume = function() {
            return this._paused && null != this.tag ? (this._paused = !1, this.tag.play(), !0) : !1
        }, b.stop = function() {
            return this._offset = 0, this.pause(), this.playState = createjs.Sound.PLAY_FINISHED, this._cleanUp(), !0
        }, b.setMasterVolume = function() {
            return this._updateVolume(), !0
        }, b.setVolume = function(a) {
            return this.volume = a, !0
        }, b._updateVolume = function() {
            if (null != this.tag) {
                var a = this._muted || createjs.Sound._masterMute ? 0 : this._volume * createjs.Sound._masterVolume;
                return a != this.tag.volume && (this.tag.volume = a), !0
            }
            return !1
        }, b.getVolume = function() {
            return this.volume
        }, b.setMasterMute = function() {
            return this._updateVolume(), !0
        }, b.setMute = function(a) {
            return null == a || void 0 == a ? !1 : (this._muted = a, this._updateVolume(), !0)
        }, b.getMute = function() {
            return this._muted
        }, b.setPan = function() {
            return !1
        }, b.getPan = function() {
            return 0
        }, b.getPosition = function() {
            return null == this.tag ? this._offset : 1e3 * this.tag.currentTime
        }, b.setPosition = function(a) {
            if (null == this.tag) this._offset = a;
            else {
                this.tag.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this.loopHandler, !1);
                try {
                    this.tag.currentTime = .001 * a
                } catch (b) {
                    return !1
                }
                this.tag.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this.loopHandler, !1)
            }
            return !0
        }, b.getDuration = function() {
            return this._duration
        }, b._handleSoundComplete = function() {
            this._offset = 0, null != window.createjs && (this.playState = createjs.Sound.PLAY_FINISHED, this._cleanUp(), this._sendEvent("complete"))
        }, b.handleSoundLoop = function() {
            this._offset = 0, this._remainingLoops--, 0 == this._remainingLoops && (this.tag.loop = !1, this.tag.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this.loopHandler, !1)), this._sendEvent("loop")
        }, b.playFailed = function() {
            null != window.createjs && (this.playState = createjs.Sound.PLAY_FAILED, this._cleanUp(), this._sendEvent("failed"))
        }, b.toString = function() {
            return "[HTMLAudioPlugin SoundInstance]"
        }, createjs.HTMLAudioPlugin.SoundInstance = a
    }(),
    function() {
        "use strict";

        function a(a, b) {
            this._init(a, b)
        }
        var b = a.prototype;
        b.src = null, b.tag = null, b.preloadTimer = null, b.loadedHandler = null, b._init = function(a, b) {
            if (this.src = a, this.tag = b, this.preloadTimer = setInterval(createjs.proxy(this.preloadTick, this), 200), this.loadedHandler = createjs.proxy(this.sendLoadedEvent, this), this.tag.addEventListener && this.tag.addEventListener("canplaythrough", this.loadedHandler), null == this.tag.onreadystatechange) this.tag.onreadystatechange = createjs.proxy(this.sendLoadedEvent, this);
            else {
                var c = this.tag.onreadystatechange;
                this.tag.onreadystatechange = function() {
                    c(), this.tag.onreadystatechange = createjs.proxy(this.sendLoadedEvent, this)
                }
            }
            this.tag.preload = "auto", this.tag.load()
        }, b.preloadTick = function() {
            var a = this.tag.buffered,
                b = this.tag.duration;
            a.length > 0 && a.end(0) >= b - 1 && this.handleTagLoaded()
        }, b.handleTagLoaded = function() {
            clearInterval(this.preloadTimer)
        }, b.sendLoadedEvent = function() {
            this.tag.removeEventListener && this.tag.removeEventListener("canplaythrough", this.loadedHandler), this.tag.onreadystatechange = null, createjs.Sound._sendFileLoadEvent(this.src)
        }, b.toString = function() {
            return "[HTMLAudioPlugin Loader]"
        }, createjs.HTMLAudioPlugin.Loader = a
    }(),
    function() {
        "use strict";

        function a(a) {
            this._init(a)
        }
        var b = a;
        b.tags = {}, b.get = function(c) {
            var d = b.tags[c];
            return null == d && (d = b.tags[c] = new a(c)), d
        }, b.remove = function(a) {
            var c = b.tags[a];
            return null == c ? !1 : (c.removeAll(), delete b.tags[a], !0)
        }, b.removeAll = function() {
            for (var a in b.tags) b.tags[a].removeAll();
            b.tags = {}
        }, b.getInstance = function(a) {
            var c = b.tags[a];
            return null == c ? null : c.get()
        }, b.setInstance = function(a, c) {
            var d = b.tags[a];
            return null == d ? null : d.set(c)
        }, b.checkSrc = function(a) {
            var c = b.tags[a];
            return null == c ? null : (c.checkSrcChange(), void 0)
        };
        var c = a.prototype;
        c.src = null, c.length = 0, c.available = 0, c.tags = null, c._init = function(a) {
            this.src = a, this.tags = []
        }, c.add = function(a) {
            this.tags.push(a), this.length++, this.available++
        }, c.removeAll = function() {
            for (; this.length--;) delete this.tags[this.length];
            this.src = null, this.tags.length = 0
        }, c.get = function() {
            if (0 == this.tags.length) return null;
            this.available = this.tags.length;
            var a = this.tags.pop();
            return null == a.parentNode && document.body.appendChild(a), a
        }, c.set = function(a) {
            var b = createjs.indexOf(this.tags, a); - 1 == b && this.tags.push(a), this.available = this.tags.length
        }, c.checkSrcChange = function() {
            for (var a = this.tags.length - 1, b = this.tags[a].src; a--;) this.tags[a].src = b
        }, c.toString = function() {
            return "[HTMLAudioPlugin TagPool]"
        }, createjs.HTMLAudioPlugin.TagPool = a
    }();
this.createjs = this.createjs || {},
    function() {
        "use strict";
        var a = createjs.PreloadJS = createjs.PreloadJS || {};
        a.version = "0.4.1", a.buildDate = "Thu, 12 Dec 2013 23:33:38 GMT"
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var a = function(a, b, c) {
                this.initialize(a, b, c)
            },
            b = a.prototype;
        b.type = null, b.target = null, b.currentTarget = null, b.eventPhase = 0, b.bubbles = !1, b.cancelable = !1, b.timeStamp = 0, b.defaultPrevented = !1, b.propagationStopped = !1, b.immediatePropagationStopped = !1, b.removed = !1, b.initialize = function(a, b, c) {
            this.type = a, this.bubbles = b, this.cancelable = c, this.timeStamp = (new Date).getTime()
        }, b.preventDefault = function() {
            this.defaultPrevented = !0
        }, b.stopPropagation = function() {
            this.propagationStopped = !0
        }, b.stopImmediatePropagation = function() {
            this.immediatePropagationStopped = this.propagationStopped = !0
        }, b.remove = function() {
            this.removed = !0
        }, b.clone = function() {
            return new a(this.type, this.bubbles, this.cancelable)
        }, b.toString = function() {
            return "[Event (type=" + this.type + ")]"
        }, createjs.Event = a
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var a = function() {},
            b = a.prototype;
        a.initialize = function(a) {
            a.addEventListener = b.addEventListener, a.on = b.on, a.removeEventListener = a.off = b.removeEventListener, a.removeAllEventListeners = b.removeAllEventListeners, a.hasEventListener = b.hasEventListener, a.dispatchEvent = b.dispatchEvent, a._dispatchEvent = b._dispatchEvent, a.willTrigger = b.willTrigger
        }, b._listeners = null, b._captureListeners = null, b.initialize = function() {}, b.addEventListener = function(a, b, c) {
            var d;
            d = c ? this._captureListeners = this._captureListeners || {} : this._listeners = this._listeners || {};
            var e = d[a];
            return e && this.removeEventListener(a, b, c), e = d[a], e ? e.push(b) : d[a] = [b], b
        }, b.on = function(a, b, c, d, e, f) {
            return b.handleEvent && (c = c || b, b = b.handleEvent), c = c || this, this.addEventListener(a, function(a) {
                b.call(c, a, e), d && a.remove()
            }, f)
        }, b.removeEventListener = function(a, b, c) {
            var d = c ? this._captureListeners : this._listeners;
            if (d) {
                var e = d[a];
                if (e)
                    for (var f = 0, g = e.length; g > f; f++)
                        if (e[f] == b) {
                            1 == g ? delete d[a] : e.splice(f, 1);
                            break
                        }
            }
        }, b.off = b.removeEventListener, b.removeAllEventListeners = function(a) {
            a ? (this._listeners && delete this._listeners[a], this._captureListeners && delete this._captureListeners[a]) : this._listeners = this._captureListeners = null
        }, b.dispatchEvent = function(a, b) {
            if ("string" == typeof a) {
                var c = this._listeners;
                if (!c || !c[a]) return !1;
                a = new createjs.Event(a)
            }
            if (a.target = b || this, a.bubbles && this.parent) {
                for (var d = this, e = [d]; d.parent;) e.push(d = d.parent);
                var f, g = e.length;
                for (f = g - 1; f >= 0 && !a.propagationStopped; f--) e[f]._dispatchEvent(a, 1 + (0 == f));
                for (f = 1; g > f && !a.propagationStopped; f++) e[f]._dispatchEvent(a, 3)
            } else this._dispatchEvent(a, 2);
            return a.defaultPrevented
        }, b.hasEventListener = function(a) {
            var b = this._listeners,
                c = this._captureListeners;
            return !!(b && b[a] || c && c[a])
        }, b.willTrigger = function(a) {
            for (var b = this; b;) {
                if (b.hasEventListener(a)) return !0;
                b = b.parent
            }
            return !1
        }, b.toString = function() {
            return "[EventDispatcher]"
        }, b._dispatchEvent = function(a, b) {
            var c, d = 1 == b ? this._captureListeners : this._listeners;
            if (a && d) {
                var e = d[a.type];
                if (!e || !(c = e.length)) return;
                a.currentTarget = this, a.eventPhase = b, a.removed = !1, e = e.slice();
                for (var f = 0; c > f && !a.immediatePropagationStopped; f++) {
                    var g = e[f];
                    g.handleEvent ? g.handleEvent(a) : g(a), a.removed && (this.off(a.type, g, 1 == b), a.removed = !1)
                }
            }
        }, createjs.EventDispatcher = a
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        createjs.indexOf = function(a, b) {
            for (var c = 0, d = a.length; d > c; c++)
                if (b === a[c]) return c;
            return -1
        }
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        createjs.proxy = function(a, b) {
            var c = Array.prototype.slice.call(arguments, 2);
            return function() {
                return a.apply(b, Array.prototype.slice.call(arguments, 0).concat(c))
            }
        }
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var a = function() {
            this.init()
        };
        a.prototype = new createjs.EventDispatcher;
        var b = a.prototype,
            c = a;
        c.FILE_PATTERN = /^(?:(\w+:)\/{2}(\w+(?:\.\w+)*\/?)|(.{0,2}\/{1}))?([/.]*?(?:[^?]+)?\/)?((?:[^/?]+)\.(\w+))(?:\?(\S+)?)?$/, c.PATH_PATTERN = /^(?:(\w+:)\/{2})|(.{0,2}\/{1})?([/.]*?(?:[^?]+)?\/?)?$/, b.loaded = !1, b.canceled = !1, b.progress = 0, b._item = null, b.getItem = function() {
            return this._item
        }, b.init = function() {}, b.load = function() {}, b.close = function() {}, b._sendLoadStart = function() {
            this._isCanceled() || this.dispatchEvent("loadstart")
        }, b._sendProgress = function(a) {
            if (!this._isCanceled()) {
                var b = null;
                "number" == typeof a ? (this.progress = a, b = new createjs.Event("progress"), b.loaded = this.progress, b.total = 1) : (b = a, this.progress = a.loaded / a.total, (isNaN(this.progress) || 1 / 0 == this.progress) && (this.progress = 0)), b.progress = this.progress, this.hasEventListener("progress") && this.dispatchEvent(b)
            }
        }, b._sendComplete = function() {
            this._isCanceled() || this.dispatchEvent("complete")
        }, b._sendError = function(a) {
            !this._isCanceled() && this.hasEventListener("error") && (null == a && (a = new createjs.Event("error")), this.dispatchEvent(a))
        }, b._isCanceled = function() {
            return null == window.createjs || this.canceled ? !0 : !1
        }, b._parseURI = function(a) {
            return a ? a.match(c.FILE_PATTERN) : null
        }, b._parsePath = function(a) {
            return a ? a.match(c.PATH_PATTERN) : null
        }, b._formatQueryString = function(a, b) {
            if (null == a) throw new Error("You must specify data.");
            var c = [];
            for (var d in a) c.push(d + "=" + escape(a[d]));
            return b && (c = c.concat(b)), c.join("&")
        }, b.buildPath = function(a, b) {
            if (null == b) return a;
            var c = [],
                d = a.indexOf("?");
            if (-1 != d) {
                var e = a.slice(d + 1);
                c = c.concat(e.split("&"))
            }
            return -1 != d ? a.slice(0, d) + "?" + this._formatQueryString(b, c) : a + "?" + this._formatQueryString(b, c)
        }, b._isCrossDomain = function(a) {
            var b = document.createElement("a");
            b.href = a.src;
            var c = document.createElement("a");
            c.href = location.href;
            var d = "" != b.hostname && (b.port != c.port || b.protocol != c.protocol || b.hostname != c.hostname);
            return d
        }, b._isLocal = function(a) {
            var b = document.createElement("a");
            return b.href = a.src, "" == b.hostname && "file:" == b.protocol
        }, b.toString = function() {
            return "[PreloadJS AbstractLoader]"
        }, createjs.AbstractLoader = a
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var a = function(a, b, c) {
                this.init(a, b, c)
            },
            b = a.prototype = new createjs.AbstractLoader,
            c = a;
        c.loadTimeout = 8e3, c.LOAD_TIMEOUT = 0, c.BINARY = "binary", c.CSS = "css", c.IMAGE = "image", c.JAVASCRIPT = "javascript", c.JSON = "json", c.JSONP = "jsonp", c.MANIFEST = "manifest", c.SOUND = "sound", c.SVG = "svg", c.TEXT = "text", c.XML = "xml", c.POST = "POST", c.GET = "GET", b._basePath = null, b._crossOrigin = "", b.useXHR = !0, b.stopOnError = !1, b.maintainScriptOrder = !0, b.next = null, b._typeCallbacks = null, b._extensionCallbacks = null, b._loadStartWasDispatched = !1, b._maxConnections = 1, b._currentlyLoadingScript = null, b._currentLoads = null, b._loadQueue = null, b._loadQueueBackup = null, b._loadItemsById = null, b._loadItemsBySrc = null, b._loadedResults = null, b._loadedRawResults = null, b._numItems = 0, b._numItemsLoaded = 0, b._scriptOrder = null, b._loadedScripts = null, b.init = function(a, b, c) {
            this._numItems = this._numItemsLoaded = 0, this._paused = !1, this._loadStartWasDispatched = !1, this._currentLoads = [], this._loadQueue = [], this._loadQueueBackup = [], this._scriptOrder = [], this._loadedScripts = [], this._loadItemsById = {}, this._loadItemsBySrc = {}, this._loadedResults = {}, this._loadedRawResults = {}, this._typeCallbacks = {}, this._extensionCallbacks = {}, this._basePath = b, this.setUseXHR(a), this._crossOrigin = c === !0 ? "Anonymous" : c === !1 || null == c ? "" : c
        }, b.setUseXHR = function(a) {
            return this.useXHR = 0 != a && null != window.XMLHttpRequest, this.useXHR
        }, b.removeAll = function() {
            this.remove()
        }, b.remove = function(a) {
            var b = null;
            if (!a || a instanceof Array) {
                if (a) b = a;
                else if (arguments.length > 0) return
            } else b = [a];
            var c = !1;
            if (b) {
                for (; b.length;) {
                    var d = b.pop(),
                        e = this.getResult(d);
                    for (f = this._loadQueue.length - 1; f >= 0; f--)
                        if (g = this._loadQueue[f].getItem(), g.id == d || g.src == d) {
                            this._loadQueue.splice(f, 1)[0].cancel();
                            break
                        }
                    for (f = this._loadQueueBackup.length - 1; f >= 0; f--)
                        if (g = this._loadQueueBackup[f].getItem(), g.id == d || g.src == d) {
                            this._loadQueueBackup.splice(f, 1)[0].cancel();
                            break
                        }
                    if (e) delete this._loadItemsById[e.id], delete this._loadItemsBySrc[e.src], this._disposeItem(e);
                    else
                        for (var f = this._currentLoads.length - 1; f >= 0; f--) {
                            var g = this._currentLoads[f].getItem();
                            if (g.id == d || g.src == d) {
                                this._currentLoads.splice(f, 1)[0].cancel(), c = !0;
                                break
                            }
                        }
                }
                c && this._loadNext()
            } else {
                this.close();
                for (var h in this._loadItemsById) this._disposeItem(this._loadItemsById[h]);
                this.init(this.useXHR)
            }
        }, b.reset = function() {
            this.close();
            for (var a in this._loadItemsById) this._disposeItem(this._loadItemsById[a]);
            for (var b = [], c = 0, d = this._loadQueueBackup.length; d > c; c++) b.push(this._loadQueueBackup[c].getItem());
            this.loadManifest(b, !1)
        }, c.isBinary = function(a) {
            switch (a) {
                case createjs.LoadQueue.IMAGE:
                case createjs.LoadQueue.BINARY:
                    return !0;
                default:
                    return !1
            }
        }, c.isText = function(a) {
            switch (a) {
                case createjs.LoadQueue.TEXT:
                case createjs.LoadQueue.JSON:
                case createjs.LoadQueue.MANIFEST:
                case createjs.LoadQueue.XML:
                case createjs.LoadQueue.HTML:
                case createjs.LoadQueue.CSS:
                case createjs.LoadQueue.SVG:
                case createjs.LoadQueue.JAVASCRIPT:
                    return !0;
                default:
                    return !1
            }
        }, b.installPlugin = function(a) {
            if (null != a && null != a.getPreloadHandlers) {
                var b = a.getPreloadHandlers();
                if (b.scope = a, null != b.types)
                    for (var c = 0, d = b.types.length; d > c; c++) this._typeCallbacks[b.types[c]] = b;
                if (null != b.extensions)
                    for (c = 0, d = b.extensions.length; d > c; c++) this._extensionCallbacks[b.extensions[c]] = b
            }
        }, b.setMaxConnections = function(a) {
            this._maxConnections = a, !this._paused && this._loadQueue.length > 0 && this._loadNext()
        }, b.loadFile = function(a, b, c) {
            if (null == a) {
                var d = new createjs.Event("error");
                return d.text = "PRELOAD_NO_FILE", this._sendError(d), void 0
            }
            this._addItem(a, null, c), b !== !1 ? this.setPaused(!1) : this.setPaused(!0)
        }, b.loadManifest = function(a, b, d) {
            var e = null,
                f = null;
            if (a instanceof Array) {
                if (0 == a.length) {
                    var g = new createjs.Event("error");
                    return g.text = "PRELOAD_MANIFEST_EMPTY", this._sendError(g), void 0
                }
                e = a
            } else if ("string" == typeof a) e = [{
                src: a,
                type: c.MANIFEST
            }];
            else {
                if ("object" != typeof a) {
                    var g = new createjs.Event("error");
                    return g.text = "PRELOAD_MANIFEST_NULL", this._sendError(g), void 0
                }
                if (void 0 !== a.src) {
                    if (null == a.type) a.type = c.MANIFEST;
                    else if (a.type != c.MANIFEST) {
                        var g = new createjs.Event("error");
                        g.text = "PRELOAD_MANIFEST_ERROR", this._sendError(g)
                    }
                    e = [a]
                } else void 0 !== a.manifest && (e = a.manifest, f = a.path)
            }
            for (var h = 0, i = e.length; i > h; h++) this._addItem(e[h], f, d);
            b !== !1 ? this.setPaused(!1) : this.setPaused(!0)
        }, b.load = function() {
            this.setPaused(!1)
        }, b.getItem = function(a) {
            return this._loadItemsById[a] || this._loadItemsBySrc[a]
        }, b.getResult = function(a, b) {
            var c = this._loadItemsById[a] || this._loadItemsBySrc[a];
            if (null == c) return null;
            var d = c.id;
            return b && this._loadedRawResults[d] ? this._loadedRawResults[d] : this._loadedResults[d]
        }, b.setPaused = function(a) {
            this._paused = a, this._paused || this._loadNext()
        }, b.close = function() {
            for (; this._currentLoads.length;) this._currentLoads.pop().cancel();
            this._scriptOrder.length = 0, this._loadedScripts.length = 0, this.loadStartWasDispatched = !1
        }, b._addItem = function(a, b, c) {
            var d = this._createLoadItem(a, b, c);
            if (null != d) {
                var e = this._createLoader(d);
                null != e && (this._loadQueue.push(e), this._loadQueueBackup.push(e), this._numItems++, this._updateProgress(), this.maintainScriptOrder && d.type == createjs.LoadQueue.JAVASCRIPT && e instanceof createjs.XHRLoader && (this._scriptOrder.push(d), this._loadedScripts.push(null)))
            }
        }, b._createLoadItem = function(a, b, c) {
            var d = null;
            switch (typeof a) {
                case "string":
                    d = {
                        src: a
                    };
                    break;
                case "object":
                    d = window.HTMLAudioElement && a instanceof window.HTMLAudioElement ? {
                        tag: a,
                        src: d.tag.src,
                        type: createjs.LoadQueue.SOUND
                    } : a;
                    break;
                default:
                    return null
            }
            var e = this._parseURI(d.src);
            null != e && (d.ext = e[6]), null == d.type && (d.type = this._getTypeByExtension(d.ext));
            var f = "",
                g = c || this._basePath,
                h = d.src;
            if (e && null == e[1] && null == e[3])
                if (b) {
                    f = b;
                    var i = this._parsePath(b);
                    h = b + h, null != g && i && null == i[1] && null == i[2] && (f = g + f)
                } else null != g && (f = g);
            if (d.src = f + d.src, d.path = f, (d.type == createjs.LoadQueue.JSON || d.type == createjs.LoadQueue.MANIFEST) && (d._loadAsJSONP = null != d.callback), d.type == createjs.LoadQueue.JSONP && null == d.callback) throw new Error("callback is required for loading JSONP requests.");
            (void 0 === d.tag || null === d.tag) && (d.tag = this._createTag(d)), (void 0 === d.id || null === d.id || "" === d.id) && (d.id = h);
            var j = this._typeCallbacks[d.type] || this._extensionCallbacks[d.ext];
            if (j) {
                var k = j.callback.call(j.scope, d.src, d.type, d.id, d.data, f, this);
                if (k === !1) return null;
                k === !0 || (null != k.src && (d.src = k.src), null != k.id && (d.id = k.id), null != k.tag && (d.tag = k.tag), null != k.completeHandler && (d.completeHandler = k.completeHandler), k.type && (d.type = k.type), e = this._parseURI(d.src), null != e && null != e[6] && (d.ext = e[6].toLowerCase()))
            }
            return this._loadItemsById[d.id] = d, this._loadItemsBySrc[d.src] = d, d
        }, b._createLoader = function(a) {
            var b = this.useXHR;
            switch (a.type) {
                case createjs.LoadQueue.JSON:
                case createjs.LoadQueue.MANIFEST:
                    b = !a._loadAsJSONP;
                    break;
                case createjs.LoadQueue.XML:
                case createjs.LoadQueue.TEXT:
                    b = !0;
                    break;
                case createjs.LoadQueue.SOUND:
                case createjs.LoadQueue.JSONP:
                    b = !1;
                    break;
                case null:
                    return null
            }
            return b ? new createjs.XHRLoader(a, this._crossOrigin) : new createjs.TagLoader(a)
        }, b._loadNext = function() {
            if (!this._paused) {
                this._loadStartWasDispatched || (this._sendLoadStart(), this._loadStartWasDispatched = !0), this._numItems == this._numItemsLoaded ? (this.loaded = !0, this._sendComplete(), this.next && this.next.load && this.next.load()) : this.loaded = !1;
                for (var a = 0; a < this._loadQueue.length && !(this._currentLoads.length >= this._maxConnections); a++) {
                    var b = this._loadQueue[a];
                    if (this.maintainScriptOrder && b instanceof createjs.TagLoader && b.getItem().type == createjs.LoadQueue.JAVASCRIPT) {
                        if (this._currentlyLoadingScript) continue;
                        this._currentlyLoadingScript = !0
                    }
                    this._loadQueue.splice(a, 1), a--, this._loadItem(b)
                }
            }
        }, b._loadItem = function(a) {
            a.on("progress", this._handleProgress, this), a.on("complete", this._handleFileComplete, this), a.on("error", this._handleFileError, this), this._currentLoads.push(a), this._sendFileStart(a.getItem()), a.load()
        }, b._handleFileError = function(a) {
            var b = a.target;
            this._numItemsLoaded++, this._updateProgress();
            var c = new createjs.Event("error");
            c.text = "FILE_LOAD_ERROR", c.item = b.getItem(), this._sendError(c), this.stopOnError || (this._removeLoadItem(b), this._loadNext())
        }, b._handleFileComplete = function(a) {
            var b = a.target,
                c = b.getItem();
            if (this._loadedResults[c.id] = b.getResult(), b instanceof createjs.XHRLoader && (this._loadedRawResults[c.id] = b.getResult(!0)), this._removeLoadItem(b), this.maintainScriptOrder && c.type == createjs.LoadQueue.JAVASCRIPT) {
                if (!(b instanceof createjs.TagLoader)) return this._loadedScripts[createjs.indexOf(this._scriptOrder, c)] = c, this._checkScriptLoadOrder(b), void 0;
                this._currentlyLoadingScript = !1
            }
            if (delete c._loadAsJSONP, c.type == createjs.LoadQueue.MANIFEST) {
                var d = b.getResult();
                null != d && void 0 !== d.manifest && this.loadManifest(d, !0)
            }
            this._processFinishedLoad(c, b)
        }, b._processFinishedLoad = function(a, b) {
            this._numItemsLoaded++, this._updateProgress(), this._sendFileComplete(a, b), this._loadNext()
        }, b._checkScriptLoadOrder = function() {
            for (var a = this._loadedScripts.length, b = 0; a > b; b++) {
                var c = this._loadedScripts[b];
                if (null === c) break;
                if (c !== !0) {
                    var d = this._loadedResults[c.id];
                    (document.body || document.getElementsByTagName("body")[0]).appendChild(d), this._processFinishedLoad(c), this._loadedScripts[b] = !0
                }
            }
        }, b._removeLoadItem = function(a) {
            for (var b = this._currentLoads.length, c = 0; b > c; c++)
                if (this._currentLoads[c] == a) {
                    this._currentLoads.splice(c, 1);
                    break
                }
        }, b._handleProgress = function(a) {
            var b = a.target;
            this._sendFileProgress(b.getItem(), b.progress), this._updateProgress()
        }, b._updateProgress = function() {
            var a = this._numItemsLoaded / this._numItems,
                b = this._numItems - this._numItemsLoaded;
            if (b > 0) {
                for (var c = 0, d = 0, e = this._currentLoads.length; e > d; d++) c += this._currentLoads[d].progress;
                a += c / b * (b / this._numItems)
            }
            this._sendProgress(a)
        }, b._disposeItem = function(a) {
            delete this._loadedResults[a.id], delete this._loadedRawResults[a.id], delete this._loadItemsById[a.id], delete this._loadItemsBySrc[a.src]
        }, b._createTag = function(a) {
            var b = null;
            switch (a.type) {
                case createjs.LoadQueue.IMAGE:
                    return b = document.createElement("img"), "" == this._crossOrigin || this._isLocal(a) || (b.crossOrigin = this._crossOrigin), b;
                case createjs.LoadQueue.SOUND:
                    return b = document.createElement("audio"), b.autoplay = !1, b;
                case createjs.LoadQueue.JSON:
                case createjs.LoadQueue.JSONP:
                case createjs.LoadQueue.JAVASCRIPT:
                case createjs.LoadQueue.MANIFEST:
                    return b = document.createElement("script"), b.type = "text/javascript", b;
                case createjs.LoadQueue.CSS:
                    return b = this.useXHR ? document.createElement("style") : document.createElement("link"), b.rel = "stylesheet", b.type = "text/css", b;
                case createjs.LoadQueue.SVG:
                    return this.useXHR ? b = document.createElement("svg") : (b = document.createElement("object"), b.type = "image/svg+xml"), b
            }
            return null
        }, b._getTypeByExtension = function(a) {
            if (null == a) return createjs.LoadQueue.TEXT;
            switch (a.toLowerCase()) {
                case "jpeg":
                case "jpg":
                case "gif":
                case "png":
                case "webp":
                case "bmp":
                    return createjs.LoadQueue.IMAGE;
                case "ogg":
                case "mp3":
                case "wav":
                    return createjs.LoadQueue.SOUND;
                case "json":
                    return createjs.LoadQueue.JSON;
                case "xml":
                    return createjs.LoadQueue.XML;
                case "css":
                    return createjs.LoadQueue.CSS;
                case "js":
                    return createjs.LoadQueue.JAVASCRIPT;
                case "svg":
                    return createjs.LoadQueue.SVG;
                default:
                    return createjs.LoadQueue.TEXT
            }
        }, b._sendFileProgress = function(a, b) {
            if (this._isCanceled()) return this._cleanUp(), void 0;
            if (this.hasEventListener("fileprogress")) {
                var c = new createjs.Event("fileprogress");
                c.progress = b, c.loaded = b, c.total = 1, c.item = a, this.dispatchEvent(c)
            }
        }, b._sendFileComplete = function(a, b) {
            if (!this._isCanceled()) {
                var c = new createjs.Event("fileload");
                c.loader = b, c.item = a, c.result = this._loadedResults[a.id], c.rawResult = this._loadedRawResults[a.id], a.completeHandler && a.completeHandler(c), this.hasEventListener("fileload") && this.dispatchEvent(c)
            }
        }, b._sendFileStart = function(a) {
            var b = new createjs.Event("filestart");
            b.item = a, this.hasEventListener("filestart") && this.dispatchEvent(b)
        }, b.toString = function() {
            return "[PreloadJS LoadQueue]"
        }, createjs.LoadQueue = a;
        var d = function() {};
        d.init = function() {
            var a = navigator.userAgent;
            d.isFirefox = a.indexOf("Firefox") > -1, d.isOpera = null != window.opera, d.isChrome = a.indexOf("Chrome") > -1, d.isIOS = a.indexOf("iPod") > -1 || a.indexOf("iPhone") > -1 || a.indexOf("iPad") > -1
        }, d.init(), createjs.LoadQueue.BrowserDetect = d
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var a = function(a) {
                this.init(a)
            },
            b = a.prototype = new createjs.AbstractLoader;
        b._loadTimeout = null, b._tagCompleteProxy = null, b._isAudio = !1, b._tag = null, b._jsonResult = null, b.init = function(a) {
            this._item = a, this._tag = a.tag, this._isAudio = window.HTMLAudioElement && a.tag instanceof window.HTMLAudioElement, this._tagCompleteProxy = createjs.proxy(this._handleLoad, this)
        }, b.getResult = function() {
            return this._item.type == createjs.LoadQueue.JSONP || this._item.type == createjs.LoadQueue.MANIFEST ? this._jsonResult : this._tag
        }, b.cancel = function() {
            this.canceled = !0, this._clean()
        }, b.load = function() {
            var a = this._item,
                b = this._tag;
            clearTimeout(this._loadTimeout);
            var c = createjs.LoadQueue.LOAD_TIMEOUT;
            0 == c && (c = createjs.LoadQueue.loadTimeout), this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), c), this._isAudio && (b.src = null, b.preload = "auto"), b.onerror = createjs.proxy(this._handleError, this), this._isAudio ? (b.onstalled = createjs.proxy(this._handleStalled, this), b.addEventListener("canplaythrough", this._tagCompleteProxy, !1)) : (b.onload = createjs.proxy(this._handleLoad, this), b.onreadystatechange = createjs.proxy(this._handleReadyStateChange, this));
            var d = this.buildPath(a.src, a.values);
            switch (a.type) {
                case createjs.LoadQueue.CSS:
                    b.href = d;
                    break;
                case createjs.LoadQueue.SVG:
                    b.data = d;
                    break;
                default:
                    b.src = d
            }
            if (a.type == createjs.LoadQueue.JSONP || a.type == createjs.LoadQueue.JSON || a.type == createjs.LoadQueue.MANIFEST) {
                if (null == a.callback) throw new Error("callback is required for loading JSONP requests.");
                if (null != window[a.callback]) throw new Error('JSONP callback "' + a.callback + '" already exists on window. You need to specify a different callback. Or re-name the current one.');
                window[a.callback] = createjs.proxy(this._handleJSONPLoad, this)
            }(a.type == createjs.LoadQueue.SVG || a.type == createjs.LoadQueue.JSONP || a.type == createjs.LoadQueue.JSON || a.type == createjs.LoadQueue.MANIFEST || a.type == createjs.LoadQueue.JAVASCRIPT || a.type == createjs.LoadQueue.CSS) && (this._startTagVisibility = b.style.visibility, b.style.visibility = "hidden", (document.body || document.getElementsByTagName("body")[0]).appendChild(b)), null != b.load && b.load()
        }, b._handleJSONPLoad = function(a) {
            this._jsonResult = a
        }, b._handleTimeout = function() {
            this._clean();
            var a = new createjs.Event("error");
            a.text = "PRELOAD_TIMEOUT", this._sendError(a)
        }, b._handleStalled = function() {}, b._handleError = function() {
            this._clean();
            var a = new createjs.Event("error");
            this._sendError(a)
        }, b._handleReadyStateChange = function() {
            clearTimeout(this._loadTimeout);
            var a = this.getItem().tag;
            ("loaded" == a.readyState || "complete" == a.readyState) && this._handleLoad()
        }, b._handleLoad = function() {
            if (!this._isCanceled()) {
                var a = this.getItem(),
                    b = a.tag;
                if (!(this.loaded || this._isAudio && 4 !== b.readyState)) {
                    switch (this.loaded = !0, a.type) {
                        case createjs.LoadQueue.SVG:
                        case createjs.LoadQueue.JSON:
                        case createjs.LoadQueue.JSONP:
                        case createjs.LoadQueue.MANIFEST:
                        case createjs.LoadQueue.CSS:
                            b.style.visibility = this._startTagVisibility, (document.body || document.getElementsByTagName("body")[0]).removeChild(b)
                    }
                    this._clean(), this._sendComplete()
                }
            }
        }, b._clean = function() {
            clearTimeout(this._loadTimeout);
            var a = this.getItem(),
                b = a.tag;
            null != b && (b.onload = null, b.removeEventListener && b.removeEventListener("canplaythrough", this._tagCompleteProxy, !1), b.onstalled = null, b.onprogress = null, b.onerror = null, null != b.parentNode && a.type == createjs.LoadQueue.SVG && a.type == createjs.LoadQueue.JSON && a.type == createjs.LoadQueue.MANIFEST && a.type == createjs.LoadQueue.CSS && a.type == createjs.LoadQueue.JSONP && b.parentNode.removeChild(b));
            var a = this.getItem();
            (a.type == createjs.LoadQueue.JSONP || a.type == createjs.LoadQueue.MANIFEST) && (window[a.callback] = null)
        }, b.toString = function() {
            return "[PreloadJS TagLoader]"
        }, createjs.TagLoader = a
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var a = function(a, b) {
                this.init(a, b)
            },
            b = a.prototype = new createjs.AbstractLoader;
        b._request = null, b._loadTimeout = null, b._xhrLevel = 1, b._response = null, b._rawResponse = null, b._crossOrigin = "", b.init = function(a, b) {
            this._item = a, this._crossOrigin = b, !this._createXHR(a)
        }, b.getResult = function(a) {
            return a && this._rawResponse ? this._rawResponse : this._response
        }, b.cancel = function() {
            this.canceled = !0, this._clean(), this._request.abort()
        }, b.load = function() {
            if (null == this._request) return this._handleError(), void 0;
            if (this._request.onloadstart = createjs.proxy(this._handleLoadStart, this), this._request.onprogress = createjs.proxy(this._handleProgress, this), this._request.onabort = createjs.proxy(this._handleAbort, this), this._request.onerror = createjs.proxy(this._handleError, this), this._request.ontimeout = createjs.proxy(this._handleTimeout, this), 1 == this._xhrLevel) {
                var a = createjs.LoadQueue.LOAD_TIMEOUT;
                if (0 == a) a = createjs.LoadQueue.loadTimeout;
                else try {
                    console.warn("LoadQueue.LOAD_TIMEOUT has been deprecated in favor of LoadQueue.loadTimeout")
                } catch (b) {}
                this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), a)
            }
            this._request.onload = createjs.proxy(this._handleLoad, this), this._request.onreadystatechange = createjs.proxy(this._handleReadyStateChange, this);
            try {
                this._item.values && this._item.method != createjs.LoadQueue.GET ? this._item.method == createjs.LoadQueue.POST && this._request.send(this._formatQueryString(this._item.values)) : this._request.send()
            } catch (c) {
                var d = new createjs.Event("error");
                d.error = c, this._sendError(d)
            }
        }, b.getAllResponseHeaders = function() {
            return this._request.getAllResponseHeaders instanceof Function ? this._request.getAllResponseHeaders() : null
        }, b.getResponseHeader = function(a) {
            return this._request.getResponseHeader instanceof Function ? this._request.getResponseHeader(a) : null
        }, b._handleProgress = function(a) {
            if (a && !(a.loaded > 0 && 0 == a.total)) {
                var b = new createjs.Event("progress");
                b.loaded = a.loaded, b.total = a.total, this._sendProgress(b)
            }
        }, b._handleLoadStart = function() {
            clearTimeout(this._loadTimeout), this._sendLoadStart()
        }, b._handleAbort = function() {
            this._clean();
            var a = new createjs.Event("error");
            a.text = "XHR_ABORTED", this._sendError(a)
        }, b._handleError = function() {
            this._clean();
            var a = new createjs.Event("error");
            this._sendError(a)
        }, b._handleReadyStateChange = function() {
            4 == this._request.readyState && this._handleLoad()
        }, b._handleLoad = function() {
            if (!this.loaded) {
                if (this.loaded = !0, !this._checkError()) return this._handleError(), void 0;
                this._response = this._getResponse(), this._clean();
                var a = this._generateTag();
                a && this._sendComplete()
            }
        }, b._handleTimeout = function(a) {
            this._clean();
            var b = new createjs.Event("error");
            b.text = "PRELOAD_TIMEOUT", this._sendError(a)
        }, b._checkError = function() {
            var a = parseInt(this._request.status);
            switch (a) {
                case 404:
                case 0:
                    return !1
            }
            return !0
        }, b._getResponse = function() {
            if (null != this._response) return this._response;
            if (null != this._request.response) return this._request.response;
            try {
                if (null != this._request.responseText) return this._request.responseText
            } catch (a) {}
            try {
                if (null != this._request.responseXML) return this._request.responseXML
            } catch (a) {}
            return null
        }, b._createXHR = function(a) {
            var b = this._isCrossDomain(a),
                c = null;
            if (b && window.XDomainRequest) c = new XDomainRequest;
            else if (window.XMLHttpRequest) c = new XMLHttpRequest;
            else try {
                c = new ActiveXObject("Msxml2.XMLHTTP.6.0")
            } catch (d) {
                try {
                    c = new ActiveXObject("Msxml2.XMLHTTP.3.0")
                } catch (d) {
                    try {
                        c = new ActiveXObject("Msxml2.XMLHTTP")
                    } catch (d) {
                        return !1
                    }
                }
            }
            createjs.LoadQueue.isText(a.type) && c.overrideMimeType && c.overrideMimeType("text/plain; charset=utf-8"), this._xhrLevel = "string" == typeof c.responseType ? 2 : 1;
            var e = null;
            return e = a.method == createjs.LoadQueue.GET ? this.buildPath(a.src, a.values) : a.src, c.open(a.method || createjs.LoadQueue.GET, e, !0), b && c instanceof XMLHttpRequest && 1 == this._xhrLevel && c.setRequestHeader("Origin", location.origin), a.values && a.method == createjs.LoadQueue.POST && c.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), createjs.LoadQueue.isBinary(a.type) && (c.responseType = "arraybuffer"), this._request = c, !0
        }, b._clean = function() {
            clearTimeout(this._loadTimeout);
            var a = this._request;
            a.onloadstart = null, a.onprogress = null, a.onabort = null, a.onerror = null, a.onload = null, a.ontimeout = null, a.onloadend = null, a.onreadystatechange = null
        }, b._generateTag = function() {
            var a = this._item.type,
                b = this._item.tag;
            switch (a) {
                case createjs.LoadQueue.IMAGE:
                    return b.onload = createjs.proxy(this._handleTagReady, this), "" != this._crossOrigin && (b.crossOrigin = "Anonymous"), b.src = this.buildPath(this._item.src, this._item.values), this._rawResponse = this._response, this._response = b, !1;
                case createjs.LoadQueue.JAVASCRIPT:
                    return b = document.createElement("script"), b.text = this._response, this._rawResponse = this._response, this._response = b, !0;
                case createjs.LoadQueue.CSS:
                    var c = document.getElementsByTagName("head")[0];
                    if (c.appendChild(b), b.styleSheet) b.styleSheet.cssText = this._response;
                    else {
                        var d = document.createTextNode(this._response);
                        b.appendChild(d)
                    }
                    return this._rawResponse = this._response, this._response = b, !0;
                case createjs.LoadQueue.XML:
                    var e = this._parseXML(this._response, "text/xml");
                    return this._rawResponse = this._response, this._response = e, !0;
                case createjs.LoadQueue.SVG:
                    var e = this._parseXML(this._response, "image/svg+xml");
                    return this._rawResponse = this._response, null != e.documentElement ? (b.appendChild(e.documentElement), this._response = b) : this._response = e, !0;
                case createjs.LoadQueue.JSON:
                case createjs.LoadQueue.MANIFEST:
                    var f = {};
                    try {
                        f = JSON.parse(this._response)
                    } catch (g) {
                        f = g
                    }
                    return this._rawResponse = this._response, this._response = f, !0
            }
            return !0
        }, b._parseXML = function(a, b) {
            var c = null;
            try {
                if (window.DOMParser) {
                    var d = new DOMParser;
                    c = d.parseFromString(a, b)
                } else c = new ActiveXObject("Microsoft.XMLDOM"), c.async = !1, c.loadXML(a)
            } catch (e) {}
            return c
        }, b._handleTagReady = function() {
            this._sendComplete()
        }, b.toString = function() {
            return "[PreloadJS XHRLoader]"
        }, createjs.XHRLoader = a
    }(), "object" != typeof JSON && (JSON = {}),
    function() {
        "use strict";

        function f(a) {
            return 10 > a ? "0" + a : a
        }

        function quote(a) {
            return escapable.lastIndex = 0, escapable.test(a) ? '"' + a.replace(escapable, function(a) {
                var b = meta[a];
                return "string" == typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + a + '"'
        }

        function str(a, b) {
            var c, d, e, f, g, h = gap,
                i = b[a];
            switch (i && "object" == typeof i && "function" == typeof i.toJSON && (i = i.toJSON(a)), "function" == typeof rep && (i = rep.call(b, a, i)), typeof i) {
                case "string":
                    return quote(i);
                case "number":
                    return isFinite(i) ? String(i) : "null";
                case "boolean":
                case "null":
                    return String(i);
                case "object":
                    if (!i) return "null";
                    if (gap += indent, g = [], "[object Array]" === Object.prototype.toString.apply(i)) {
                        for (f = i.length, c = 0; f > c; c += 1) g[c] = str(c, i) || "null";
                        return e = 0 === g.length ? "[]" : gap ? "[\n" + gap + g.join(",\n" + gap) + "\n" + h + "]" : "[" + g.join(",") + "]", gap = h, e
                    }
                    if (rep && "object" == typeof rep)
                        for (f = rep.length, c = 0; f > c; c += 1) "string" == typeof rep[c] && (d = rep[c], e = str(d, i), e && g.push(quote(d) + (gap ? ": " : ":") + e));
                    else
                        for (d in i) Object.prototype.hasOwnProperty.call(i, d) && (e = str(d, i), e && g.push(quote(d) + (gap ? ": " : ":") + e));
                    return e = 0 === g.length ? "{}" : gap ? "{\n" + gap + g.join(",\n" + gap) + "\n" + h + "}" : "{" + g.join(",") + "}", gap = h, e
            }
        }
        "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
        }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
            return this.valueOf()
        });
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            gap, indent, meta = {
                "\b": "\\b",
                " ": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            rep;
        "function" != typeof JSON.stringify && (JSON.stringify = function(a, b, c) {
            var d;
            if (gap = "", indent = "", "number" == typeof c)
                for (d = 0; c > d; d += 1) indent += " ";
            else "string" == typeof c && (indent = c);
            if (rep = b, b && "function" != typeof b && ("object" != typeof b || "number" != typeof b.length)) throw new Error("JSON.stringify");
            return str("", {
                "": a
            })
        }), "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
            function walk(a, b) {
                var c, d, e = a[b];
                if (e && "object" == typeof e)
                    for (c in e) Object.prototype.hasOwnProperty.call(e, c) && (d = walk(e, c), void 0 !== d ? e[c] = d : delete e[c]);
                return reviver.call(a, b, e)
            }
            var j;
            if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(a) {
                    return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
                "": j
            }, "") : j;
            throw new SyntaxError("JSON.parse")
        })
    }();
(function(t, e) {
    "use strict";
    var i = t.GreenSockGlobals = t.GreenSockGlobals || t;
    if (!i.TweenLite) {
        var s, n, r, a, o, l = function(t) {
                var e, s = t.split("."),
                    n = i;
                for (e = 0; s.length > e; e++) n[s[e]] = n = n[s[e]] || {};
                return n
            },
            h = l("com.greensock"),
            _ = 1e-10,
            u = function(t) {
                var e, i = [],
                    s = t.length;
                for (e = 0; e !== s; i.push(t[e++]));
                return i
            },
            f = function() {},
            m = function() {
                var t = Object.prototype.toString,
                    e = t.call([]);
                return function(i) {
                    return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                }
            }(),
            p = {},
            c = function(s, n, r, a) {
                this.sc = p[s] ? p[s].sc : [], p[s] = this, this.gsClass = null, this.func = r;
                var o = [];
                this.check = function(h) {
                    for (var _, u, f, m, d = n.length, v = d; --d > -1;)(_ = p[n[d]] || new c(n[d], [])).gsClass ? (o[d] = _.gsClass, v--) : h && _.sc.push(this);
                    if (0 === v && r)
                        for (u = ("com.greensock." + s).split("."), f = u.pop(), m = l(u.join("."))[f] = this.gsClass = r.apply(r, o), a && (i[f] = m, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + s.split(".").pop(), [], function() {
                                return m
                            }) : s === e && "undefined" != typeof module && module.exports && (module.exports = m)), d = 0; this.sc.length > d; d++) this.sc[d].check()
                }, this.check(!0)
            },
            d = t._gsDefine = function(t, e, i, s) {
                return new c(t, e, i, s)
            },
            v = h._class = function(t, e, i) {
                return e = e || function() {}, d(t, [], function() {
                    return e
                }, i), e
            };
        d.globals = i;
        var g = [0, 0, 1, 1],
            T = [],
            y = v("easing.Ease", function(t, e, i, s) {
                this._func = t, this._type = i || 0, this._power = s || 0, this._params = e ? g.concat(e) : g
            }, !0),
            w = y.map = {},
            P = y.register = function(t, e, i, s) {
                for (var n, r, a, o, l = e.split(","), _ = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --_ > -1;)
                    for (r = l[_], n = s ? v("easing." + r, null, !0) : h.easing[r] || {}, a = u.length; --a > -1;) o = u[a], w[r + "." + o] = w[o + r] = n[o] = t.getRatio ? t : t[o] || new t
            };
        for (r = y.prototype, r._calcEnd = !1, r.getRatio = function(t) {
                if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                var e = this._type,
                    i = this._power,
                    s = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                return 1 === i ? s *= s : 2 === i ? s *= s * s : 3 === i ? s *= s * s * s : 4 === i && (s *= s * s * s * s), 1 === e ? 1 - s : 2 === e ? s : .5 > t ? s / 2 : 1 - s / 2
            }, s = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], n = s.length; --n > -1;) r = s[n] + ",Power" + n, P(new y(null, null, 1, n), r, "easeOut", !0), P(new y(null, null, 2, n), r, "easeIn" + (0 === n ? ",easeNone" : "")), P(new y(null, null, 3, n), r, "easeInOut");
        w.linear = h.easing.Linear.easeIn, w.swing = h.easing.Quad.easeInOut;
        var b = v("events.EventDispatcher", function(t) {
            this._listeners = {}, this._eventTarget = t || this
        });
        r = b.prototype, r.addEventListener = function(t, e, i, s, n) {
            n = n || 0;
            var r, l, h = this._listeners[t],
                _ = 0;
            for (null == h && (this._listeners[t] = h = []), l = h.length; --l > -1;) r = h[l], r.c === e && r.s === i ? h.splice(l, 1) : 0 === _ && n > r.pr && (_ = l + 1);
            h.splice(_, 0, {
                c: e,
                s: i,
                up: s,
                pr: n
            }), this !== a || o || a.wake()
        }, r.removeEventListener = function(t, e) {
            var i, s = this._listeners[t];
            if (s)
                for (i = s.length; --i > -1;)
                    if (s[i].c === e) return s.splice(i, 1), void 0
        }, r.dispatchEvent = function(t) {
            var e, i, s, n = this._listeners[t];
            if (n)
                for (e = n.length, i = this._eventTarget; --e > -1;) s = n[e], s.up ? s.c.call(s.s || i, {
                    type: t,
                    target: i
                }) : s.c.call(s.s || i)
        };
        var k = t.requestAnimationFrame,
            A = t.cancelAnimationFrame,
            S = Date.now || function() {
                return (new Date).getTime()
            },
            x = S();
        for (s = ["ms", "moz", "webkit", "o"], n = s.length; --n > -1 && !k;) k = t[s[n] + "RequestAnimationFrame"], A = t[s[n] + "CancelAnimationFrame"] || t[s[n] + "CancelRequestAnimationFrame"];
        v("Ticker", function(t, e) {
            var i, s, n, r, l, h = this,
                u = S(),
                m = e !== !1 && k,
                p = 500,
                c = 33,
                d = function(t) {
                    var e, a, o = S() - x;
                    o > p && (u += o - c), x += o, h.time = (x - u) / 1e3, e = h.time - l, (!i || e > 0 || t === !0) && (h.frame++, l += e + (e >= r ? .004 : r - e), a = !0), t !== !0 && (n = s(d)), a && h.dispatchEvent("tick")
                };
            b.call(h), h.time = h.frame = 0, h.tick = function() {
                d(!0)
            }, h.lagSmoothing = function(t, e) {
                p = t || 1 / _, c = Math.min(e, p, 0)
            }, h.sleep = function() {
                null != n && (m && A ? A(n) : clearTimeout(n), s = f, n = null, h === a && (o = !1))
            }, h.wake = function() {
                null !== n ? h.sleep() : h.frame > 10 && (x = S() - p + 5), s = 0 === i ? f : m && k ? k : function(t) {
                    return setTimeout(t, 0 | 1e3 * (l - h.time) + 1)
                }, h === a && (o = !0), d(2)
            }, h.fps = function(t) {
                return arguments.length ? (i = t, r = 1 / (i || 60), l = this.time + r, h.wake(), void 0) : i
            }, h.useRAF = function(t) {
                return arguments.length ? (h.sleep(), m = t, h.fps(i), void 0) : m
            }, h.fps(t), setTimeout(function() {
                m && (!n || 5 > h.frame) && h.useRAF(!1)
            }, 1500)
        }), r = h.Ticker.prototype = new h.events.EventDispatcher, r.constructor = h.Ticker;
        var C = v("core.Animation", function(t, e) {
            if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, B) {
                o || a.wake();
                var i = this.vars.useFrames ? q : B;
                i.add(this, i._time), this.vars.paused && this.paused(!0)
            }
        });
        a = C.ticker = new h.Ticker, r = C.prototype, r._dirty = r._gc = r._initted = r._paused = !1, r._totalTime = r._time = 0, r._rawPrevTime = -1, r._next = r._last = r._onUpdate = r._timeline = r.timeline = null, r._paused = !1;
        var R = function() {
            o && S() - x > 2e3 && a.wake(), setTimeout(R, 2e3)
        };
        R(), r.play = function(t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
        }, r.pause = function(t, e) {
            return null != t && this.seek(t, e), this.paused(!0)
        }, r.resume = function(t, e) {
            return null != t && this.seek(t, e), this.paused(!1)
        }, r.seek = function(t, e) {
            return this.totalTime(Number(t), e !== !1)
        }, r.restart = function(t, e) {
            return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
        }, r.reverse = function(t, e) {
            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
        }, r.render = function() {}, r.invalidate = function() {
            return this
        }, r.isActive = function() {
            var t, e = this._timeline,
                i = this._startTime;
            return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t
        }, r._enabled = function(t, e) {
            return o || a.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
        }, r._kill = function() {
            return this._enabled(!1, !1)
        }, r.kill = function(t, e) {
            return this._kill(t, e), this
        }, r._uncache = function(t) {
            for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
            return this
        }, r._swapSelfInParams = function(t) {
            for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
            return i
        }, r.eventCallback = function(t, e, i, s) {
            if ("on" === (t || "").substr(0, 2)) {
                var n = this.vars;
                if (1 === arguments.length) return n[t];
                null == e ? delete n[t] : (n[t] = e, n[t + "Params"] = m(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, n[t + "Scope"] = s), "onUpdate" === t && (this._onUpdate = e)
            }
            return this
        }, r.delay = function(t) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
        }, r.duration = function(t) {
            return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
        }, r.totalDuration = function(t) {
            return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
        }, r.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
        }, r.totalTime = function(t, e, i) {
            if (o || a.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
                if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var s = this._totalDuration,
                        n = this._timeline;
                    if (t > s && !i && (t = s), this._startTime = (this._paused ? this._pauseTime : n._time) - (this._reversed ? s - t : t) / this._timeScale, n._dirty || this._uncache(!1), n._timeline)
                        for (; n._timeline;) n._timeline._time !== (n._startTime + n._totalTime) / n._timeScale && n.totalTime(n._totalTime, !0), n = n._timeline
                }
                this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (this.render(t, e, !1), O.length && M())
            }
            return this
        }, r.progress = r.totalProgress = function(t, e) {
            return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration()
        }, r.startTime = function(t) {
            return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
        }, r.timeScale = function(t) {
            if (!arguments.length) return this._timeScale;
            if (t = t || _, this._timeline && this._timeline.smoothChildTiming) {
                var e = this._pauseTime,
                    i = e || 0 === e ? e : this._timeline.totalTime();
                this._startTime = i - (i - this._startTime) * this._timeScale / t
            }
            return this._timeScale = t, this._uncache(!1)
        }, r.reversed = function(t) {
            return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
        }, r.paused = function(t) {
            if (!arguments.length) return this._paused;
            if (t != this._paused && this._timeline) {
                o || t || a.wake();
                var e = this._timeline,
                    i = e.rawTime(),
                    s = i - this._pauseTime;
                !t && e.smoothChildTiming && (this._startTime += s, this._uncache(!1)), this._pauseTime = t ? i : null, this._paused = t, this._active = this.isActive(), !t && 0 !== s && this._initted && this.duration() && this.render(e.smoothChildTiming ? this._totalTime : (i - this._startTime) / this._timeScale, !0, !0)
            }
            return this._gc && !t && this._enabled(!0, !1), this
        };
        var D = v("core.SimpleTimeline", function(t) {
            C.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        r = D.prototype = new C, r.constructor = D, r.kill()._gc = !1, r._first = r._last = null, r._sortChildren = !1, r.add = r.insert = function(t, e) {
            var i, s;
            if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren)
                for (s = t._startTime; i && i._startTime > s;) i = i._prev;
            return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._timeline && this._uncache(!0), this
        }, r._remove = function(t, e) {
            return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, this._timeline && this._uncache(!0)), this
        }, r.render = function(t, e, i) {
            var s, n = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = t; n;) s = n._next, (n._active || t >= n._startTime && !n._paused) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = s
        }, r.rawTime = function() {
            return o || a.wake(), this._totalTime
        };
        var I = v("TweenLite", function(e, i, s) {
                if (C.call(this, i, s), this.render = I.prototype.render, null == e) throw "Cannot tween a null target.";
                this.target = e = "string" != typeof e ? e : I.selector(e) || e;
                var n, r, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                    l = this.vars.overwrite;
                if (this._overwrite = l = null == l ? Q[I.defaultOverwrite] : "number" == typeof l ? l >> 0 : Q[l], (o || e instanceof Array || e.push && m(e)) && "number" != typeof e[0])
                    for (this._targets = a = u(e), this._propLookup = [], this._siblings = [], n = 0; a.length > n; n++) r = a[n], r ? "string" != typeof r ? r.length && r !== t && r[0] && (r[0] === t || r[0].nodeType && r[0].style && !r.nodeType) ? (a.splice(n--, 1), this._targets = a = a.concat(u(r))) : (this._siblings[n] = $(r, this, !1), 1 === l && this._siblings[n].length > 1 && K(r, this, null, 1, this._siblings[n])) : (r = a[n--] = I.selector(r), "string" == typeof r && a.splice(n + 1, 1)) : a.splice(n--, 1);
                else this._propLookup = {}, this._siblings = $(e, this, !1), 1 === l && this._siblings.length > 1 && K(e, this, null, 1, this._siblings);
                (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -_, this.render(-this._delay))
            }, !0),
            E = function(e) {
                return e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
            },
            z = function(t, e) {
                var i, s = {};
                for (i in t) G[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!U[i] || U[i] && U[i]._autoCSS) || (s[i] = t[i], delete t[i]);
                t.css = s
            };
        r = I.prototype = new C, r.constructor = I, r.kill()._gc = !1, r.ratio = 0, r._firstPT = r._targets = r._overwrittenProps = r._startAt = null, r._notifyPluginsOfEnabled = r._lazy = !1, I.version = "1.13.1", I.defaultEase = r._ease = new y(null, null, 1, 1), I.defaultOverwrite = "auto", I.ticker = a, I.autoSleep = !0, I.lagSmoothing = function(t, e) {
            a.lagSmoothing(t, e)
        }, I.selector = t.$ || t.jQuery || function(e) {
            var i = t.$ || t.jQuery;
            return i ? (I.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
        };
        var O = [],
            L = {},
            N = I._internals = {
                isArray: m,
                isSelector: E,
                lazyTweens: O
            },
            U = I._plugins = {},
            F = N.tweenLookup = {},
            j = 0,
            G = N.reservedProps = {
                ease: 1,
                delay: 1,
                overwrite: 1,
                onComplete: 1,
                onCompleteParams: 1,
                onCompleteScope: 1,
                useFrames: 1,
                runBackwards: 1,
                startAt: 1,
                onUpdate: 1,
                onUpdateParams: 1,
                onUpdateScope: 1,
                onStart: 1,
                onStartParams: 1,
                onStartScope: 1,
                onReverseComplete: 1,
                onReverseCompleteParams: 1,
                onReverseCompleteScope: 1,
                onRepeat: 1,
                onRepeatParams: 1,
                onRepeatScope: 1,
                easeParams: 1,
                yoyo: 1,
                immediateRender: 1,
                repeat: 1,
                repeatDelay: 1,
                data: 1,
                paused: 1,
                reversed: 1,
                autoCSS: 1,
                lazy: 1
            },
            Q = {
                none: 0,
                all: 1,
                auto: 2,
                concurrent: 3,
                allOnStart: 4,
                preexisting: 5,
                "true": 1,
                "false": 0
            },
            q = C._rootFramesTimeline = new D,
            B = C._rootTimeline = new D,
            M = N.lazyRender = function() {
                var t = O.length;
                for (L = {}; --t > -1;) s = O[t], s && s._lazy !== !1 && (s.render(s._lazy, !1, !0), s._lazy = !1);
                O.length = 0
            };
        B._startTime = a.time, q._startTime = a.frame, B._active = q._active = !0, setTimeout(M, 1), C._updateRoot = I.render = function() {
            var t, e, i;
            if (O.length && M(), B.render((a.time - B._startTime) * B._timeScale, !1, !1), q.render((a.frame - q._startTime) * q._timeScale, !1, !1), O.length && M(), !(a.frame % 120)) {
                for (i in F) {
                    for (e = F[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                    0 === e.length && delete F[i]
                }
                if (i = B._first, (!i || i._paused) && I.autoSleep && !q._first && 1 === a._listeners.tick.length) {
                    for (; i && i._paused;) i = i._next;
                    i || a.sleep()
                }
            }
        }, a.addEventListener("tick", C._updateRoot);
        var $ = function(t, e, i) {
                var s, n, r = t._gsTweenID;
                if (F[r || (t._gsTweenID = r = "t" + j++)] || (F[r] = {
                        target: t,
                        tweens: []
                    }), e && (s = F[r].tweens, s[n = s.length] = e, i))
                    for (; --n > -1;) s[n] === e && s.splice(n, 1);
                return F[r].tweens
            },
            K = function(t, e, i, s, n) {
                var r, a, o, l;
                if (1 === s || s >= 4) {
                    for (l = n.length, r = 0; l > r; r++)
                        if ((o = n[r]) !== e) o._gc || o._enabled(!1, !1) && (a = !0);
                        else if (5 === s) break;
                    return a
                }
                var h, u = e._startTime + _,
                    f = [],
                    m = 0,
                    p = 0 === e._duration;
                for (r = n.length; --r > -1;)(o = n[r]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (h = h || H(e, 0, p), 0 === H(o, h, p) && (f[m++] = o)) : u >= o._startTime && o._startTime + o.totalDuration() / o._timeScale > u && ((p || !o._initted) && 2e-10 >= u - o._startTime || (f[m++] = o)));
                for (r = m; --r > -1;) o = f[r], 2 === s && o._kill(i, t) && (a = !0), (2 !== s || !o._firstPT && o._initted) && o._enabled(!1, !1) && (a = !0);
                return a
            },
            H = function(t, e, i) {
                for (var s = t._timeline, n = s._timeScale, r = t._startTime; s._timeline;) {
                    if (r += s._startTime, n *= s._timeScale, s._paused) return -100;
                    s = s._timeline
                }
                return r /= n, r > e ? r - e : i && r === e || !t._initted && 2 * _ > r - e ? _ : (r += t.totalDuration() / t._timeScale / n) > e + _ ? 0 : r - e - _
            };
        r._init = function() {
            var t, e, i, s, n, r = this.vars,
                a = this._overwrittenProps,
                o = this._duration,
                l = !!r.immediateRender,
                h = r.ease;
            if (r.startAt) {
                this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), n = {};
                for (s in r.startAt) n[s] = r.startAt[s];
                if (n.overwrite = !1, n.immediateRender = !0, n.lazy = l && r.lazy !== !1, n.startAt = n.delay = null, this._startAt = I.to(this.target, 0, n), l)
                    if (this._time > 0) this._startAt = null;
                    else if (0 !== o) return
            } else if (r.runBackwards && 0 !== o)
                if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                else {
                    i = {};
                    for (s in r) G[s] && "autoCSS" !== s || (i[s] = r[s]);
                    if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && r.lazy !== !1, i.immediateRender = l, this._startAt = I.to(this.target, 0, i), l) {
                        if (0 === this._time) return
                    } else this._startAt._init(), this._startAt._enabled(!1)
                }
            if (this._ease = h = h ? h instanceof y ? h : "function" == typeof h ? new y(h, r.easeParams) : w[h] || I.defaultEase : I.defaultEase, r.easeParams instanceof Array && h.config && (this._ease = h.config.apply(h, r.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null) && (e = !0);
            else e = this._initProps(this.target, this._propLookup, this._siblings, a);
            if (e && I._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), r.runBackwards)
                for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
            this._onUpdate = r.onUpdate, this._initted = !0
        }, r._initProps = function(e, i, s, n) {
            var r, a, o, l, h, _;
            if (null == e) return !1;
            L[e._gsTweenID] && M(), this.vars.css || e.style && e !== t && e.nodeType && U.css && this.vars.autoCSS !== !1 && z(this.vars, e);
            for (r in this.vars) {
                if (_ = this.vars[r], G[r]) _ && (_ instanceof Array || _.push && m(_)) && -1 !== _.join("").indexOf("{self}") && (this.vars[r] = _ = this._swapSelfInParams(_, this));
                else if (U[r] && (l = new U[r])._onInitTween(e, this.vars[r], this)) {
                    for (this._firstPT = h = {
                            _next: this._firstPT,
                            t: l,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: !0,
                            n: r,
                            pg: !0,
                            pr: l._priority
                        }, a = l._overwriteProps.length; --a > -1;) i[l._overwriteProps[a]] = this._firstPT;
                    (l._priority || l._onInitAllProps) && (o = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0)
                } else this._firstPT = i[r] = h = {
                    _next: this._firstPT,
                    t: e,
                    p: r,
                    f: "function" == typeof e[r],
                    n: r,
                    pg: !1,
                    pr: 0
                }, h.s = h.f ? e[r.indexOf("set") || "function" != typeof e["get" + r.substr(3)] ? r : "get" + r.substr(3)]() : parseFloat(e[r]), h.c = "string" == typeof _ && "=" === _.charAt(1) ? parseInt(_.charAt(0) + "1", 10) * Number(_.substr(2)) : Number(_) - h.s || 0;
                h && h._next && (h._next._prev = h)
            }
            return n && this._kill(n, e) ? this._initProps(e, i, s, n) : this._overwrite > 1 && this._firstPT && s.length > 1 && K(e, this, i, this._overwrite, s) ? (this._kill(i, e), this._initProps(e, i, s, n)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (L[e._gsTweenID] = !0), o)
        }, r.render = function(t, e, i) {
            var s, n, r, a, o = this._time,
                l = this._duration,
                h = this._rawPrevTime;
            if (t >= l) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (s = !0, n = "onComplete"), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > h || h === _) && h !== t && (i = !0, h > _ && (n = "onReverseComplete")), this._rawPrevTime = a = !e || t || h === t ? t : _);
            else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === l && h > 0 && h !== _) && (n = "onReverseComplete", s = this._reversed), 0 > t ? (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (i = !0), this._rawPrevTime = a = !e || t || h === t ? t : _)) : this._initted || (i = !0);
            else if (this._totalTime = this._time = t, this._easeType) {
                var u = t / l,
                    f = this._easeType,
                    m = this._easePower;
                (1 === f || 3 === f && u >= .5) && (u = 1 - u), 3 === f && (u *= 2), 1 === m ? u *= u : 2 === m ? u *= u * u : 3 === m ? u *= u * u * u : 4 === m && (u *= u * u * u * u), this.ratio = 1 === f ? 1 - u : 2 === f ? u : .5 > t / l ? u / 2 : 1 - u / 2
            } else this.ratio = this._ease.getRatio(t / l);
            if (this._time !== o || i) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc) return;
                    if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = o, this._rawPrevTime = h, O.push(this), this._lazy = t, void 0;
                    this._time && !s ? this.ratio = this._ease.getRatio(this._time / l) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0), 0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : n || (n = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || T))), r = this._firstPT; r;) r.f ? r.t[r.p](r.c * this.ratio + r.s) : r.t[r.p] = r.c * this.ratio + r.s, r = r._next;
                this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._time !== o || s) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || T)), n && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[n] && this.vars[n].apply(this.vars[n + "Scope"] || this, this.vars[n + "Params"] || T), 0 === l && this._rawPrevTime === _ && a !== _ && (this._rawPrevTime = 0))
            }
        }, r._kill = function(t, e) {
            if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
            e = "string" != typeof e ? e || this._targets || this.target : I.selector(e) || e;
            var i, s, n, r, a, o, l, h;
            if ((m(e) || E(e)) && "number" != typeof e[0])
                for (i = e.length; --i > -1;) this._kill(t, e[i]) && (o = !0);
            else {
                if (this._targets) {
                    for (i = this._targets.length; --i > -1;)
                        if (e === this._targets[i]) {
                            a = this._propLookup[i] || {}, this._overwrittenProps = this._overwrittenProps || [], s = this._overwrittenProps[i] = t ? this._overwrittenProps[i] || {} : "all";
                            break
                        }
                } else {
                    if (e !== this.target) return !1;
                    a = this._propLookup, s = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                }
                if (a) {
                    l = t || a, h = t !== s && "all" !== s && t !== a && ("object" != typeof t || !t._tempKill);
                    for (n in l)(r = a[n]) && (r.pg && r.t._kill(l) && (o = !0), r.pg && 0 !== r.t._overwriteProps.length || (r._prev ? r._prev._next = r._next : r === this._firstPT && (this._firstPT = r._next), r._next && (r._next._prev = r._prev), r._next = r._prev = null), delete a[n]), h && (s[n] = 1);
                    !this._firstPT && this._initted && this._enabled(!1, !1)
                }
            }
            return o
        }, r.invalidate = function() {
            return this._notifyPluginsOfEnabled && I._onPluginEvent("_onDisable", this), this._firstPT = null, this._overwrittenProps = null, this._onUpdate = null, this._startAt = null, this._initted = this._active = this._notifyPluginsOfEnabled = this._lazy = !1, this._propLookup = this._targets ? {} : [], this
        }, r._enabled = function(t, e) {
            if (o || a.wake(), t && this._gc) {
                var i, s = this._targets;
                if (s)
                    for (i = s.length; --i > -1;) this._siblings[i] = $(s[i], this, !0);
                else this._siblings = $(this.target, this, !0)
            }
            return C.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? I._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
        }, I.to = function(t, e, i) {
            return new I(t, e, i)
        }, I.from = function(t, e, i) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new I(t, e, i)
        }, I.fromTo = function(t, e, i, s) {
            return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new I(t, e, s)
        }, I.delayedCall = function(t, e, i, s, n) {
            return new I(e, 0, {
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                onCompleteScope: s,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                onReverseCompleteScope: s,
                immediateRender: !1,
                useFrames: n,
                overwrite: 0
            })
        }, I.set = function(t, e) {
            return new I(t, 0, e)
        }, I.getTweensOf = function(t, e) {
            if (null == t) return [];
            t = "string" != typeof t ? t : I.selector(t) || t;
            var i, s, n, r;
            if ((m(t) || E(t)) && "number" != typeof t[0]) {
                for (i = t.length, s = []; --i > -1;) s = s.concat(I.getTweensOf(t[i], e));
                for (i = s.length; --i > -1;)
                    for (r = s[i], n = i; --n > -1;) r === s[n] && s.splice(i, 1)
            } else
                for (s = $(t).concat(), i = s.length; --i > -1;)(s[i]._gc || e && !s[i].isActive()) && s.splice(i, 1);
            return s
        }, I.killTweensOf = I.killDelayedCallsTo = function(t, e, i) {
            "object" == typeof e && (i = e, e = !1);
            for (var s = I.getTweensOf(t, e), n = s.length; --n > -1;) s[n]._kill(i, t)
        };
        var J = v("plugins.TweenPlugin", function(t, e) {
            this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = J.prototype
        }, !0);
        if (r = J.prototype, J.version = "1.10.1", J.API = 2, r._firstPT = null, r._addTween = function(t, e, i, s, n, r) {
                var a, o;
                return null != s && (a = "number" == typeof s || "=" !== s.charAt(1) ? Number(s) - i : parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2))) ? (this._firstPT = o = {
                    _next: this._firstPT,
                    t: t,
                    p: e,
                    s: i,
                    c: a,
                    f: "function" == typeof t[e],
                    n: n || e,
                    r: r
                }, o._next && (o._next._prev = o), o) : void 0
            }, r.setRatio = function(t) {
                for (var e, i = this._firstPT, s = 1e-6; i;) e = i.c * t + i.s, i.r ? e = Math.round(e) : s > e && e > -s && (e = 0), i.f ? i.t[i.p](e) : i.t[i.p] = e, i = i._next
            }, r._kill = function(t) {
                var e, i = this._overwriteProps,
                    s = this._firstPT;
                if (null != t[this._propName]) this._overwriteProps = [];
                else
                    for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                for (; s;) null != t[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? (s._prev._next = s._next, s._prev = null) : this._firstPT === s && (this._firstPT = s._next)), s = s._next;
                return !1
            }, r._roundProps = function(t, e) {
                for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
            }, I._onPluginEvent = function(t, e) {
                var i, s, n, r, a, o = e._firstPT;
                if ("_onInitAllProps" === t) {
                    for (; o;) {
                        for (a = o._next, s = n; s && s.pr > o.pr;) s = s._next;
                        (o._prev = s ? s._prev : r) ? o._prev._next = o: n = o, (o._next = s) ? s._prev = o : r = o, o = a
                    }
                    o = e._firstPT = n
                }
                for (; o;) o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next;
                return i
            }, J.activate = function(t) {
                for (var e = t.length; --e > -1;) t[e].API === J.API && (U[(new t[e])._propName] = t[e]);
                return !0
            }, d.plugin = function(t) {
                if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                var e, i = t.propName,
                    s = t.priority || 0,
                    n = t.overwriteProps,
                    r = {
                        init: "_onInitTween",
                        set: "setRatio",
                        kill: "_kill",
                        round: "_roundProps",
                        initAll: "_onInitAllProps"
                    },
                    a = v("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                        J.call(this, i, s), this._overwriteProps = n || []
                    }, t.global === !0),
                    o = a.prototype = new J(i);
                o.constructor = a, a.API = t.API;
                for (e in r) "function" == typeof t[e] && (o[r[e]] = t[e]);
                return a.version = t.version, J.activate([a]), a
            }, s = t._gsQueue) {
            for (n = 0; s.length > n; n++) s[n]();
            for (r in p) p[r].func || t.console.log("GSAP encountered missing dependency: com.greensock." + r)
        }
        o = !1
    }
})("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenLite");
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t) {
        var e, i, s, r = _gsScope.GreenSockGlobals || _gsScope,
            n = r.com.greensock,
            a = 2 * Math.PI,
            o = Math.PI / 2,
            h = n._class,
            l = function(e, i) {
                var s = h("easing." + e, function() {}, !0),
                    r = s.prototype = new t;
                return r.constructor = s, r.getRatio = i, s
            },
            _ = t.register || function() {},
            u = function(t, e, i, s) {
                var r = h("easing." + t, {
                    easeOut: new e,
                    easeIn: new i,
                    easeInOut: new s
                }, !0);
                return _(r, t), r
            },
            c = function(t, e, i) {
                this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
            },
            p = function(e, i) {
                var s = h("easing." + e, function(t) {
                        this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                    }, !0),
                    r = s.prototype = new t;
                return r.constructor = s, r.getRatio = i, r.config = function(t) {
                    return new s(t)
                }, s
            },
            f = u("Back", p("BackOut", function(t) {
                return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
            }), p("BackIn", function(t) {
                return t * t * ((this._p1 + 1) * t - this._p1)
            }), p("BackInOut", function(t) {
                return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
            })),
            m = h("easing.SlowMo", function(t, e, i) {
                e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
            }, !0),
            d = m.prototype = new t;
        return d.constructor = m, d.getRatio = function(t) {
            var e = t + (.5 - t) * this._p;
            return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
        }, m.ease = new m(.7, .7), d.config = m.config = function(t, e, i) {
            return new m(t, e, i)
        }, e = h("easing.SteppedEase", function(t) {
            t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
        }, !0), d = e.prototype = new t, d.constructor = e, d.getRatio = function(t) {
            return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
        }, d.config = e.config = function(t) {
            return new e(t)
        }, i = h("easing.RoughEase", function(e) {
            e = e || {};
            for (var i, s, r, n, a, o, h = e.taper || "none", l = [], _ = 0, u = 0 | (e.points || 20), p = u, f = e.randomize !== !1, m = e.clamp === !0, d = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --p > -1;) i = f ? Math.random() : 1 / u * p, s = d ? d.getRatio(i) : i, "none" === h ? r = g : "out" === h ? (n = 1 - i, r = n * n * g) : "in" === h ? r = i * i * g : .5 > i ? (n = 2 * i, r = .5 * n * n * g) : (n = 2 * (1 - i), r = .5 * n * n * g), f ? s += Math.random() * r - .5 * r : p % 2 ? s += .5 * r : s -= .5 * r, m && (s > 1 ? s = 1 : 0 > s && (s = 0)), l[_++] = {
                x: i,
                y: s
            };
            for (l.sort(function(t, e) {
                    return t.x - e.x
                }), o = new c(1, 1, null), p = u; --p > -1;) a = l[p], o = new c(a.x, a.y, o);
            this._prev = new c(0, 0, 0 !== o.t ? o : o.next)
        }, !0), d = i.prototype = new t, d.constructor = i, d.getRatio = function(t) {
            var e = this._prev;
            if (t > e.t) {
                for (; e.next && t >= e.t;) e = e.next;
                e = e.prev
            } else
                for (; e.prev && e.t >= t;) e = e.prev;
            return this._prev = e, e.v + (t - e.t) / e.gap * e.c
        }, d.config = function(t) {
            return new i(t)
        }, i.ease = new i, u("Bounce", l("BounceOut", function(t) {
            return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }), l("BounceIn", function(t) {
            return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
        }), l("BounceInOut", function(t) {
            var e = .5 > t;
            return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
        })), u("Circ", l("CircOut", function(t) {
            return Math.sqrt(1 - (t -= 1) * t)
        }), l("CircIn", function(t) {
            return -(Math.sqrt(1 - t * t) - 1)
        }), l("CircInOut", function(t) {
            return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        })), s = function(e, i, s) {
            var r = h("easing." + e, function(t, e) {
                    this._p1 = t || 1, this._p2 = e || s, this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0)
                }, !0),
                n = r.prototype = new t;
            return n.constructor = r, n.getRatio = i, n.config = function(t, e) {
                return new r(t, e)
            }, r
        }, u("Elastic", s("ElasticOut", function(t) {
            return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * a / this._p2) + 1
        }, .3), s("ElasticIn", function(t) {
            return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2))
        }, .3), s("ElasticInOut", function(t) {
            return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) + 1
        }, .45)), u("Expo", l("ExpoOut", function(t) {
            return 1 - Math.pow(2, -10 * t)
        }), l("ExpoIn", function(t) {
            return Math.pow(2, 10 * (t - 1)) - .001
        }), l("ExpoInOut", function(t) {
            return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        })), u("Sine", l("SineOut", function(t) {
            return Math.sin(t * o)
        }), l("SineIn", function(t) {
            return -Math.cos(t * o) + 1
        }), l("SineInOut", function(t) {
            return -.5 * (Math.cos(Math.PI * t) - 1)
        })), h("easing.EaseLookup", {
            find: function(e) {
                return t.map[e]
            }
        }, !0), _(r.SlowMo, "SlowMo", "ease,"), _(i, "RoughEase", "ease,"), _(e, "SteppedEase", "ease,"), f
    }, !0)
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()();
if (!Object.create) {
    Object.create = function create(prototype, properties) {
        var object;
        if (prototype === null) {
            object = {
                "__proto__": null
            }
        } else {
            if (typeof prototype != "object") {
                throw new TypeError("typeof prototype[" + (typeof prototype) + "] != 'object'")
            }
            var Type = function() {};
            Type.prototype = prototype;
            object = new Type();
            object.__proto__ = prototype
        }
        if (properties !== void 0) {
            Object.defineProperties(object, properties)
        }
        return object
    }
}
var sys = (function() {
    var exports = {};
    exports.inherits = function(ctor, superCtor) {
        var store = ctor.prototype;
        ctor.super_ = superCtor;
        ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
                value: ctor,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        for (var k in store) {
            ctor.prototype[k] = store[k]
        }
    };
    return exports
})();
var global = this;
var setPackage = function(pkg) {
    var elements = pkg.split('.');
    var scope = global;
    for (var i = 0; i < elements.length; i++) {
        if (!scope[elements[i]]) scope[elements[i]] = {};
        scope = scope[elements[i]]
    }
    return scope
};
var newClass = function(className, definition) {
    var scope = newPackage(pkg);
    scope = definition
};
setPackage('com.firsara.display');
com.firsara.display.Stage = (function() {
    var Parent = null;
    var Public = {
        config: {
            fps: 50,
            mouseover: true,
            mouseoverTreshold: 10,
            touch: true,
            canvas: 'canvas'
        },
        stage: null
    };
    var Stage = function() {
        var self = this;
        var Init = function() {
            self.stage = new createjs.Stage(self.config.canvas);
            if (self.config.touch) createjs.Touch.enable(self.stage);
            if (self.config.mouseover) self.stage.enableMouseOver(self.config.mouseoverTreshold);
            createjs.Ticker.setFPS(self.config.fps);
            createjs.Ticker.addEventListener('tick', update);
            window.addEventListener('resize', resize, false);
            resize()
        };
        var resize = function() {
            self.stage.canvas.width = window.innerWidth;
            self.stage.canvas.height = window.innerHeight
        };
        var update = function(e) {
            self.stage.update(e)
        };
        if (Parent) Parent.call(this);
        Init()
    };
    Stage.prototype = Public;
    if (Parent) sys.inherits(Stage, Parent);
    return Stage
})();
setPackage('com.firsara.display');
com.firsara.display.MoveClip = (function() {
    var Parent = createjs.Container;
    var STACK_MOVE = 4;
    var MoveClip = function() {
        var self = this;
        self.snap = null;
        self.free = false;
        self.level = false;
        self.lock = false;
        self.borders = {
            x: [],
            y: []
        };
        self.friction = {
            move: 1,
            release: 1
        };
        var _store = {
            oldPosition: {
                x: 0,
                y: 0
            },
            position: {
                x: 0,
                y: 0
            },
            move: [],
            tween: null
        };
        var Init = function() {
            self.addEventListener('mousedown', startDrag);
            self.addEventListener('pressmove', pressMove);
            self.addEventListener('pressup', fadeMove);
            self.addEventListener('tick', storeMove)
        };
        self.moveTo = function(x, y, ease) {
            if (!(typeof TweenLite === 'undefined')) {
                var options = {};
                var speed = 0.45 + .01 * self.friction.release;
                if (!isNaN(x)) options.x = x;
                if (!isNaN(y)) options.y = y;
                if (ease) options.ease = ease;
                else options.ease = Cubic.easeOut;
                options.onComplete = dispatchComplete;
                _store.tween = TweenLite.to(self, speed, options)
            }
        };
        self.holdBorders = function() {
            if (self.lock) return;
            if (!self.free) {
                if (self.x < self.borders.x[0]) self.x = self.borders.x[0];
                else if (self.x > self.borders.x[1]) self.x = self.borders.x[1];
                if (self.y < self.borders.y[0]) self.y = self.borders.y[0];
                else if (self.y > self.borders.y[1]) self.y = self.borders.y[1]
            }
        };
        self.getAcceleration = function() {
            var average = {
                x: 0,
                y: 0
            };
            if (_store.move && _store.move.length) {
                for (var i = 0, _len = _store.move.length; i < _len; i++) {
                    average.x += _store.move[i].x;
                    average.y += _store.move[i].y
                }
                average.x /= _store.move.length;
                average.y /= _store.move.length
            }
            var speed = 0 + Math.max(0, .1 * Math.abs((average.x + average.y) / 2));
            return speed
        };
        var dispatchUpdate = function() {
            self.dispatchEvent('update')
        };
        var dispatchComplete = function() {
            _store.move = [];
            self.dispatchEvent('complete')
        };
        var startDrag = function(e) {
            if (_store.tween) {
                _store.tween.kill();
                _store.tween = null
            }
            if (self.level && self.parent) self.parent.setChildIndex(self, self.parent.getNumChildren() - 1);
            _store.position.x = e.stageX;
            _store.position.y = e.stageY
        };
        var pressMove = function(e) {
            if (self.lock) return;
            var distance = {
                x: e.stageX - _store.position.x,
                y: e.stageY - _store.position.y
            };
            self.x += (distance.x * self.friction.move);
            self.y += (distance.y * self.friction.move);
            _store.position.x = e.stageX;
            _store.position.y = e.stageY
        };
        var storeMove = function() {
            if (self.lock) return;
            var distance = {
                x: self.x - _store.oldPosition.x,
                y: self.y - _store.oldPosition.y
            };
            if (!(distance.x == 0 && distance.y == 0)) {
                if (self.lock && _store.tween) {
                    _store.tween.kill();
                    _store.tween = null
                }
                self.holdBorders();
                dispatchUpdate()
            }
            if (_store.move.length > STACK_MOVE) _store.move.shift();
            _store.move.push(distance);
            _store.oldPosition.x = self.x;
            _store.oldPosition.y = self.y
        };
        var fadeMove = function() {
            if (!(typeof TweenLite === 'undefined')) {
                if (self.lock) return;
                if (_store.move.length == 0) {
                    dispatchComplete();
                    return
                }
                var speed = 0;
                var options = {};
                var average = {
                    x: 0,
                    y: 0
                };
                var newPosition = {
                    x: 0,
                    y: 0
                };
                for (var i = 0, _len = _store.move.length; i < _len; i++) {
                    average.x += _store.move[i].x;
                    average.y += _store.move[i].y
                }
                average.x = average.x / _store.move.length;
                average.y = average.y / _store.move.length;
                speed = 0.6 + .01 * Math.abs((average.x + average.y) / 2) * 2 * (self.friction.release + self.friction.release) / 4;
                newPosition.x = self.x + average.x * Math.max(10, Math.abs(average.x / 10)) * self.friction.release / 2;
                newPosition.y = self.y + average.y * Math.max(10, Math.abs(average.y / 10)) * self.friction.release / 2;
                if (self.snap && self.snap != 0) {
                    newPosition.x = (Math.round(newPosition.x / self.snap) * self.snap);
                    newPosition.y = (Math.round(newPosition.y / self.snap) * self.snap)
                }
                options.x = newPosition.x;
                options.y = newPosition.y;
                options.ease = Cubic.easeOut;
                options.onComplete = dispatchComplete;
                _store.tween = TweenLite.to(self, speed, options)
            } else {
                dispatchComplete()
            }
        };
        if (Parent) Parent.call(this);
        Init()
    };
    MoveClip.prototype = {};
    if (Parent) sys.inherits(MoveClip, Parent);
    return MoveClip
})();
setPackage('com.firsara.display');
com.firsara.display.Template = (function() {
    var Parent = createjs.Container;
    var Template = function(controller) {
        var self = this;
        self.controller = null;
        self.stage = null;
        var Init = function() {
            self.controller = controller;
            self.stage = self.controller.stage
        };
        if (Parent) Parent.call(this);
        Init()
    };
    Template.prototype = {};
    if (Parent) sys.inherits(Template, Parent);
    return Template
})();
setPackage('com.firsara.data');
com.firsara.data.Assets = (function() {
    var Parent = createjs.LoadQueue;
    var Public = {};
    var Assets = function() {
        var self = this;
        var _assets = {};
        var _preloadData = [];
        var _preloadImages = [];
        var _partiallyImages = 0.05;
        var _loadedFiles = 0;
        Assets.get = function(name) {
            if (window.BASE_64) {
                if (IMAGES['_' + name]) return IMAGES['_' + name]
            } else {
                if (_assets[name]) return _assets[name]
            }
        };
        var Init = function() {
            if (Parent) Parent.call(self);
            if (Assets.instance) throw new Error('assets can only be initialized once')
        };
        self.load = function(data) {
            _preloadData = data;
            self.addEventListener('fileload', progress);
            self.addEventListener('complete', complete);
            self.loadManifest(data)
        };
        self.get = function(name) {
            return Assets.get(name)
        };
        var dispatchReady = function() {
            self.dispatchEvent('ready')
        };
        var progress = function(event) {
            _loadedFiles++;
            _assets[event.item.id] = event.rawResult;
            if (event.item.type == createjs.LoadQueue.IMAGE) {
                _preloadImages.push({
                    name: event.item.id,
                    src: event.result.src
                })
            }
            var event = new createjs.Event('update');
            event.percent = (_loadedFiles / _preloadData.length) * (1 - _partiallyImages);
            self.dispatchEvent(event)
        };
        var complete = function() {
            var _loadedFiles = -1;
            var preloadAssetsLength = _preloadImages.length;
            var loadNextImage = function() {
                _loadedFiles++;
                var event = new createjs.Event('update');
                event.percent = (1 - _partiallyImages) + (_loadedFiles / preloadAssetsLength) * _partiallyImages;
                self.dispatchEvent(event);
                if (_preloadImages.length <= 0) {
                    dispatchReady()
                } else {
                    var element = _preloadImages.shift();
                    _assets[element.name] = new Image();
                    _assets[element.name].addEventListener('load', loadNextImage);
                    _assets[element.name].src = element.src
                }
            };
            loadNextImage()
        };
        Init()
    };
    Assets.prototype = Public;
    if (Parent) sys.inherits(Assets, Parent);
    return Assets
})();
var CONF = {};
var game = {
    speed: 1.25,
    maxSpeed: 60,
    baseAcceleration: 4.5,
    paddleAcceleration: 12,
    puckAcceleration: 2,
    slowingFriction: 0.990,
    animateShadow: true
};
setPackage('app.display');
app.display.TextOverlay = (function() {
    var Parent = createjs.Container;
    var Public = {};
    var ANIMATION_SPEED = 0.3;
    var TextOverlay = function(text, backgroundColor) {
        var self = this;
        self.spacing = 85;
        var _textFields = [];
        var _background = new createjs.Shape();
        var _textFieldHolder = new createjs.Container();
        var Init = function() {
            if (Parent) Parent.call(self);
            if (backgroundColor == null) backgroundColor = '#FFF';
            _background.alpha = 0.5;
            _background.graphics.beginFill(backgroundColor);
            _background.graphics.drawRect(0, 0, Main.stage.canvas.width, Main.stage.canvas.height);
            _background.graphics.endFill();
            _textFieldHolder.x = Main.stage.canvas.width / 2;
            _textFieldHolder.y = Main.stage.canvas.height / 2;
            _textFieldHolder.scaleX = 2.5;
            _textFieldHolder.scaleY = 2.5;
            if (typeof text === 'string') {
                text = [text]
            }
            for (var line = 0, _len = text.length; line < _len; line++) {
                var textFieldArray = [];
                for (var charIndex = 0, _charLen = text[line].length; charIndex < _charLen; charIndex++) {
                    var textFieldHolder = new createjs.Container();
                    var textField = new createjs.Text(text[line][charIndex], 'bold 50px Helvetica', '#FFF');
                    textFieldHolder.addChild(textField);
                    textField.x = 0 - textField.getMeasuredWidth() / 2;
                    textField.y = 0 - textField.getMeasuredHeight() / 2;
                    _textFieldHolder.addChild(textFieldHolder);
                    textFieldArray.push(textFieldHolder)
                }
                _textFields.push(textFieldArray)
            }
            self.addChild(_background);
            self.addChild(_textFieldHolder);
            TweenLite.to(_textFieldHolder, ANIMATION_SPEED, {
                scaleX: 1,
                scaleY: 1,
                ease: Quad.easeOut
            });
            TweenLite.to(self, ANIMATION_SPEED, {
                spacing: 40,
                onUpdate: renderText,
                onComplete: complete,
                ease: Quad.easeOut
            });
            renderText()
        };
        var renderText = function() {
            var lineCount = _textFields.length;
            var lineMiddle = lineCount / 2 - 0.5;
            for (var line = 0, _len = text.length; line < _len; line++) {
                var count = _textFields[line].length;
                var middle = count / 2 - 0.5;
                var yPos = (line - lineMiddle) * (self.spacing * 1.65);
                if (lineCount <= 1) yPos = 0;
                for (var charIndex = 0, _charLen = text[line].length; charIndex < _charLen; charIndex++) {
                    var textField = _textFields[line][charIndex];
                    var index = charIndex - middle;
                    textField.x = index * self.spacing;
                    textField.y = yPos
                }
            }
        };
        var complete = function() {
            self.dispatchEvent('complete')
        };
        Init()
    };
    TextOverlay.render = function(text, times, delay) {
        var doShowOverlay = function() {
            var overlay = new TextOverlay(text);
            overlay.addEventListener('complete', removeTextOverlay);
            Main.instance.stage.addChild(overlay);
            TweenLite.to(overlay, ANIMATION_SPEED, {
                alpha: 0,
                ease: Linear.easeNone
            })
        };
        if (delay == null) delay = 75;
        if (times == null) times = 1;
        for (var i = 0; i < times; i++) {
            setTimeout(doShowOverlay, i * delay)
        }
    };
    removeTextOverlay = function(event) {
        var overlay = event.currentTarget;
        if (overlay && overlay.parent) overlay.parent.removeChild(overlay)
    };
    doRemoveTextOverlay = function(overlay) {
        if (overlay && overlay.parent) overlay.parent.removeChild(overlay)
    };
    TextOverlay.prototype = Public;
    if (Parent) sys.inherits(TextOverlay, Parent);
    return TextOverlay
})();
setPackage('app.display');
app.display.Paddle = (function() {
    var Parent = com.firsara.display.MoveClip;
    var Paddle = function(id) {
        var self = this;
        var Init = function() {
            if (Parent) Parent.call(self);
            var bitmap = new createjs.Bitmap(com.firsara.data.Assets.get('paddle'));
            self.width = bitmap.getBounds().width;
            self.height = bitmap.getBounds().height;
            bitmap.x = 0 - self.width / 2;
            bitmap.y = 0 - self.height / 2;
            self.addChild(bitmap);
            self.cache(0 - self.width / 2, 0 - self.height / 2, self.width, self.height);
            self.cursor = 'pointer';
            self.addEventListener('mousedown', catchPaddle)
        };
        var catchPaddle = function() {
            var sound = createjs.Sound.play('assets.sounds.touch');
            sound.volume = 0.3
        };
        Init()
    };
    Paddle.prototype = {};
    sys.inherits(Paddle, Parent);
    return Paddle
})();
setPackage('app.display');
app.display.Puck = (function() {
    var Parent = createjs.Container;
    var EDGE_PADDING = -10;
    var Puck = function() {
        var self = this;
        self.checkBounds = true;
        self.momentumX = 0;
        self.momentumY = 0;
        self.momentumR = 0;
        self.puck = new createjs.Container();
        self.shadow = new createjs.Container();
        var _store = {
            position: {
                x: 0,
                y: 0
            },
            move: []
        };
        var Init = function() {
            if (Parent) Parent.call(self);
            var bitmap = new createjs.Bitmap(com.firsara.data.Assets.get('puck'));
            self.width = bitmap.getBounds().width;
            self.height = bitmap.getBounds().height;
            bitmap.x = 0 - self.width / 2;
            bitmap.y = 0 - self.height / 2;
            self.puck.addChild(bitmap);
            self.addChild(self.puck);
            self.puck.cache(0 - self.width / 2, 0 - self.height / 2, self.width, self.height);
            var bitmap = new createjs.Bitmap(com.firsara.data.Assets.get('puck_shadow'));
            bitmap.x = 0 - bitmap.getBounds().width / 2;
            bitmap.y = 0 - bitmap.getBounds().height;
            self.shadow.addChild(bitmap);
            if (game.animateShadow) {
                self.addChild(self.shadow);
                self.setChildIndex(self.shadow, 0);
                self.shadow.scaleY = 0
            }
        };
        self.hits = function(rect) {
            if ((self.x - self.width / 2) >= rect.x + rect.width || (self.x - self.width / 2) + self.width <= rect.x || (self.y - self.height / 2) >= rect.y + rect.height || (self.y - self.height / 2) + self.height <= rect.y) return false;
            return true
        };
        self.getAcceleration = function() {
            var average = {
                x: 0,
                y: 0
            };
            if (_store.move && _store.move.length) {
                for (var i = 0, _len = _store.move.length; i < _len; i++) {
                    average.x += _store.move[i].x;
                    average.y += _store.move[i].y
                }
                average.x /= _store.move.length;
                average.y /= _store.move.length
            }
            var speed = 0 + Math.max(0, .1 * Math.abs((average.x + average.y) / 2));
            return speed
        };
        self.reset = function() {
            self.checkBounds = true;
            self.momentumX = 0;
            self.momentumY = 0;
            self.momentumR = 0
        };
        self.update = function() {
            self.x += (self.momentumX * (50 / Main.instance.config.fps));
            self.y += (self.momentumY * (50 / Main.instance.config.fps));
            self.puck.rotation += (self.momentumR * (50 / Main.instance.config.fps));
            if (game.animateShadow) {
                var rotation = Math.atan2(self.momentumX - self.momentumX * 2, 0 - (self.momentumY - self.momentumY * 2));
                rotation = rotation * 180 / Math.PI;
                var currentSpeed = (Math.abs(self.momentumX) + Math.abs(self.momentumY));
                var scale = 0;
                if (currentSpeed > 2) {
                    scale = 0.5 + currentSpeed / (game.maxSpeed * 2)
                } else {
                    scale = currentSpeed / (game.maxSpeed * 2)
                }
                self.shadow.rotation = rotation;
                self.shadow.scaleY = scale
            }
            self.momentumX *= game.slowingFriction;
            self.momentumY *= game.slowingFriction;
            self.momentumR *= game.slowingFriction;
            if (_store.move.length > 5) _store.move.shift();
            var distance = {
                x: self.x - _store.position.x,
                y: self.y - _store.position.y
            };
            _store.move.push(distance);
            _store.position.x = self.x;
            _store.position.y = self.y;
            if (self.checkBounds) {
                if (self.x - self.width / 2 - EDGE_PADDING < 0) {
                    self.momentumX = -self.momentumX;
                    self.x = 0 + EDGE_PADDING + self.width / 2;
                    edge()
                }
                if (self.x + self.width / 2 + EDGE_PADDING > Main.stage.canvas.width) {
                    self.momentumX = -self.momentumX;
                    self.x = Main.stage.canvas.width - EDGE_PADDING - self.width / 2;
                    edge()
                }
                if (self.y - self.height / 2 - EDGE_PADDING < 0) {
                    self.momentumY = -self.momentumY;
                    self.y = 0 + EDGE_PADDING + self.height / 2;
                    edge()
                }
                if (self.y + self.height / 2 + EDGE_PADDING > Main.stage.canvas.height) {
                    self.momentumY = -self.momentumY;
                    self.y = Main.stage.canvas.height - EDGE_PADDING - self.height / 2;
                    edge()
                }
            }
        };
        var edge = function() {
            var hitPower = (((Math.abs(this.momentumX) + Math.abs(this.momentumY)) / 2) / (game.maxSpeed * game.speed));
            var sound = createjs.Sound.play('assets.sounds.edge' + Math.floor(Math.random() * 5));
            sound.volume = 1.5 + 0.75;
            sound.volume = sound.volume + (sound.volume * 1.75 * hitPower)
        };
        Init()
    };
    Puck.prototype = {};
    sys.inherits(Puck, Parent);
    return Puck
})();
setPackage('app.model');
app.model.Player = (function() {
    var Player = function(id) {
        this.id = id;
        this.paddle = new app.display.Paddle(id);
        this.hit = new createjs.Shape();
        var _score = [];
        this.getScores = function() {
            return _score
        };
        this.score = function() {
            _score.push(true)
        };
        this.fail = function() {
            _score.push(false)
        };
        this.getPoints = function() {
            var points = 0;
            for (var i = 0; i < _score.length; i++) {
                if (_score[i] == true) points++
            }
            return points
        };
        this.reset = function() {
            _score = [];
            for (var i = 0; i < Player.POINTS; i++) {
                _score[i] = null
            }
        };
        this.reset()
    };
    Player.POINTS = 7;
    Player.winThreshold = Math.ceil(Player.POINTS / 2);
    Player.prototype = {};
    return Player
})();
setPackage('app.views');
app.views.GameView = (function() {
    var Parent = com.firsara.display.Template;
    var Public = {};
    var HIT_TEXTS = ['BOOOM', 'HIT', 'OUCH', 'CLASH', 'BANG', 'KNOCK', 'DOH'];
    var GOAL_TEXTS = ['GOOOOAL', 'YOU MADE IT', 'YAAAAY', 'OUTSTANDING', 'GOOD JOB', 'SNAP'];
    var GameView = function(controller) {
        var self = this;
        self.players = [];
        self.puck = new app.display.Puck();
        var _renderElements = [];
        var _gameField = null;
        var Init = function() {
            if (Parent) Parent.call(self, controller);
            for (var i = 0; i < 2; i++) {
                var player = new app.model.Player(i);
                player.paddle.snap = 1;
                player.paddle.x = i == 0 ? 200 : self.stage.canvas.width - 200;
                player.paddle.y = self.stage.canvas.height / 2;
                self.players.push(player);
                self.addChild(player.hit);
                self.addChild(player.paddle)
            }
            self.puck.x = self.stage.canvas.width / 2;
            self.puck.y = self.stage.canvas.height / 2;
            self.addChild(self.puck);
            _recheckFrameCount = Math.round(5 * ((Main.instance.config.fps * 1.5) / 50));
            _renderElements = [self.puck, self.players[0].paddle, self.players[1].paddle];
            for (var i = 0; i < _renderElements.length; i++) {
                _renderElements[i].alpha = 0
            }
            self.players[0].paddle.lock = true;
            self.players[1].paddle.lock = true;
            _gameField = new app.views.GameViewField(self.players);
            self.addChild(_gameField);
            self.setChildIndex(_gameField, 0);
            window.addEventListener('resize', resize, false);
            resize()
        };
        self.render = function() {
            self.alpha = 1;
            for (var i = 0; i < _renderElements.length; i++) {
                var element = _renderElements[i];
                element.alpha = 0;
                element.scaleX = 0.8;
                element.scaleY = 0.8;
                TweenLite.to(element, 1.5, {
                    delay: 0.5 * i,
                    alpha: 1,
                    scaleX: 1,
                    scaleY: 1,
                    ease: Elastic.easeOut
                })
            }
            TweenLite.to(self, 1.5, {
                delay: 0.5 * i,
                onComplete: initMatch
            })
        };
        var resize = function() {
            for (var i = 0; i < 2; i++) {
                var player = self.players[i];
                player.hit.width = 10;
                player.hit.height = self.stage.canvas.height / 2.5;
                player.hit.graphics.beginFill('#fff', 1);
                player.hit.graphics.drawRect(0, 0, player.hit.width, player.hit.height);
                player.hit.graphics.endFill();
                player.hit.y = (self.stage.canvas.height - player.hit.height) / 2;
                player.hit.x = i == 0 ? 0 : self.stage.canvas.width - player.hit.width;
                player.paddle.borders.y = [0 + player.paddle.width / 2, self.stage.canvas.height - player.paddle.width / 2];
                if (i == 0) {
                    player.paddle.borders.x = [0 + player.paddle.width / 2, self.stage.canvas.width / 2 - player.paddle.width / 2]
                } else if (i == 1) {
                    player.paddle.borders.x = [self.stage.canvas.width / 2 + player.paddle.width / 2, self.stage.canvas.width - player.paddle.width / 2]
                }
                player.paddle.holdBorders()
            }
            _gameField.resize(self.stage.canvas.width, self.stage.canvas.height)
        };
        var _initOverlay = null;
        var initMatch = function() {
            _initOverlay = new app.display.TextOverlay('TAP TO START', '#000');
            _initOverlay.addEventListener('click', startMatch);
            self.addChild(_initOverlay)
        };
        var startMatch = function() {
            if (_initOverlay && _initOverlay.parent) _initOverlay.parent.removeChild(_initOverlay);
            var sound = createjs.Sound.play('assets.sounds.touch');
            sound.volume = 0.3;
            var sound = createjs.Sound.play('assets.sounds.fight' + Math.floor(Math.random() * 3));
            sound.volume = 2;
            app.display.TextOverlay.render('START', 3, 50);
            startChecking()
        };
        var startChecking = function() {
            stopChecking();
            self.stage.addEventListener('tick', update);
            self.players[0].paddle.lock = false;
            self.players[1].paddle.lock = false
        };
        var stopChecking = function() {
            self.stage.removeEventListener('tick', update);
            self.players[0].paddle.lock = true;
            self.players[1].paddle.lock = true
        };
        var unlockRound = function() {
            self.puck.reset();
            if (self.players[0].getPoints() >= app.model.Player.winThreshold) {
                win(0)
            } else if (self.players[1].getPoints() >= app.model.Player.winThreshold) {
                win(1)
            } else {
                var sound = createjs.Sound.play('assets.sounds.fight' + Math.floor(Math.random() * 3));
                sound.volume = 2;
                app.display.TextOverlay.render('FIGHT', 3, 75);
                startChecking()
            }
        };
        var _winOverlay = null;
        var win = function(playerId) {
            _winOverlay = new app.display.TextOverlay(['PLAYER ' + (playerId + 1) + ' WON', '', 'TAP TO RESTART'], '#000');
            _winOverlay.addEventListener('click', restartMatch);
            self.addChild(_winOverlay)
        };
        var restartMatch = function() {
            if (_winOverlay && _winOverlay.parent) _winOverlay.parent.removeChild(_winOverlay);
            self.players[0].reset();
            self.players[1].reset();
            _gameField.render();
            var sound = createjs.Sound.play('assets.sounds.fight' + Math.floor(Math.random() * 3));
            sound.volume = 2;
            app.display.TextOverlay.render('START', 3, 50);
            startChecking()
        };
        var _frameCount = 0;
        var _oldPlayerHit = null;
        var _recheckFrameCount = 0;
        var update = function() {
            _frameCount++;
            self.puck.update();
            var player1DidHit = false;
            var checkPlayer = 0;
            for (var i = 0; i < 2; i++) {
                if (player1DidHit) continue;
                checkPlayer++;
                var paddle = self.players[i].paddle;
                var diffFromPuckX = paddle.x - self.puck.x;
                var diffFromPuckY = paddle.y - self.puck.y;
                var distanceFromPuck = Math.sqrt(Math.pow(diffFromPuckX, 2) + Math.pow(diffFromPuckY, 2));
                if (distanceFromPuck <= ((paddle.width / 2 - 25) + (self.puck.width / 2))) {
                    if (_frameCount >= _recheckFrameCount || checkPlayer != _oldPlayerHit) {
                        _frameCount = 0;
                        player1DidHit = true;
                        _oldPlayerHit = checkPlayer;
                        var paddleCurrentAcceleration = paddle.getAcceleration();
                        var puckCurrentAcceleration = self.puck.getAcceleration();
                        var paddleSpeed = 0 + ((0.25 + paddleCurrentAcceleration) / 4 * game.paddleAcceleration);
                        var puckSpeed = 1 + ((0.25 + puckCurrentAcceleration) / 4 * game.puckAcceleration);
                        var angleFromPuck = Math.atan2(diffFromPuckY, diffFromPuckX);
                        self.puck.momentumX = -Math.cos(angleFromPuck) * paddleSpeed * puckSpeed * game.baseAcceleration;
                        self.puck.momentumY = -Math.sin(angleFromPuck) * paddleSpeed * puckSpeed * game.baseAcceleration;
                        self.puck.momentumR = -angleFromPuck * (1 + 0.1 * (paddleSpeed * puckSpeed * game.baseAcceleration));
                        if (self.puck.momentumX < 0 - game.maxSpeed) self.puck.momentumX = 0 - game.maxSpeed;
                        if (self.puck.momentumX > game.maxSpeed) self.puck.momentumX = game.maxSpeed;
                        if (self.puck.momentumY < 0 - game.maxSpeed) self.puck.momentumY = 0 - game.maxSpeed;
                        if (self.puck.momentumY > game.maxSpeed) self.puck.momentumY = game.maxSpeed;
                        self.puck.momentumX = self.puck.momentumX * game.speed;
                        self.puck.momentumY = self.puck.momentumY * game.speed;
                        var hitPower = (((Math.abs(self.puck.momentumX) + Math.abs(self.puck.momentumY)) / 2) / game.maxSpeed);
                        var sound = createjs.Sound.play('assets.sounds.hit' + Math.floor(Math.random() * 8));
                        sound.volume = 1.5 + 0.75;
                        sound.volume = sound.volume + (sound.volume * 1.75 * hitPower);
                        if (hitPower >= 0.3) {
                            app.display.TextOverlay.render(HIT_TEXTS[Math.floor(Math.random() * HIT_TEXTS.length)])
                        }
                    }
                }
            }
            player1DidHit = false;
            for (var i = 0; i < 2; i++) {
                if (player1DidHit) return;
                var hit = self.players[i].hit;
                if (self.puck.hits(hit)) {
                    player1DidHit = true;
                    score(i)
                }
            }
        };
        var score = function(scoreId) {
            self.players[scoreId].score();
            self.players[1 - scoreId].fail();
            TweenLite.to(_gameField, 1.5, {
                onComplete: _gameField.updatePoints
            });
            stopChecking();
            createjs.Sound.play('assets.sounds.hit' + Math.floor(Math.random() * 8));
            createjs.Sound.play('assets.sounds.edge' + Math.floor(Math.random() * 5));
            createjs.Sound.play('assets.sounds.goal');
            createjs.Sound.play('assets.sounds.sirene');
            app.display.TextOverlay.render(GOAL_TEXTS[Math.floor(Math.random() * GOAL_TEXTS.length)], 10, 75);
            var delay = 2;
            var speed = 0.5;
            if (self.puck.x < self.stage.canvas.width / 4) {
                TweenLite.to(self.puck, 0.2, {
                    x: 0 - self.puck.width / 4,
                    ease: Quint.easeOut
                })
            } else {
                TweenLite.to(self.puck, 0.2, {
                    x: self.stage.canvas.width + self.puck.width / 4,
                    ease: Quint.easeOut
                })
            }
            for (var i = 0; i < 2; i++) {
                var paddle = self.players[i].paddle;
                TweenLite.to(paddle, speed, {
                    delay: delay + 0.25 * i,
                    x: i == 0 ? 200 : self.stage.canvas.width - 200,
                    y: self.stage.canvas.height / 2,
                    ease: Quint.easeInOut
                })
            }
            if (game.animateShadow) {
                TweenLite.to(self.puck.shadow, speed, {
                    delay: delay + 0.25 * i,
                    scaleY: 0
                })
            }
            TweenLite.to(self.puck, speed, {
                delay: delay + 0.25 * i,
                x: scoreId == 0 ? 200 + paddle.width + 25 : self.stage.canvas.width - 200 - paddle.width - 25,
                y: self.stage.canvas.height / 2,
                ease: Quint.easeInOut
            });
            TweenLite.to(self.puck.puck, speed, {
                delay: delay + 0.25 * i,
                rotation: scoreId == 0 ? 90 : -90,
                ease: Quint.easeInOut
            });
            TweenLite.to(self, speed, {
                delay: delay + 0.25 * i + 2,
                onComplete: unlockRound
            })
        };
        Init()
    };
    GameView.prototype = Public;
    if (Parent) sys.inherits(GameView, Parent);
    return GameView
})();
setPackage('app.views');
app.views.GameViewField = (function() {
    var Parent = createjs.Container;
    var Public = {};
    var GameViewField = function(players) {
        var self = this;
        var _stageWidth = 0;
        var _stageHeight = 0;
        var _players = null;
        var _container = null;
        var _points = null;
        GameViewField.THICKNESS = 3;
        GameViewField.DOTS_SPACING = 35;
        GameViewField.DOTS_THICKNESS = 3;
        GameViewField.centerHeight = 200;
        GameViewField.outerPadding = 50;
        GameViewField.circlePadding = 0;
        GameViewField.innerPadding = 40;
        var Init = function() {
            if (Parent) Parent.call(self);
            _players = players;
            _points = new app.views.GameViewFieldPoints(players);
            _container = new createjs.Container();
            self.addChild(_container);
            self.addChild(_points)
        };
        self.render = function(stageWidth, stageHeight) {
            if (stageWidth != null) _stageWidth = stageWidth;
            if (stageHeight != null) _stageHeight = stageHeight;
            _container.uncache();
            while (_container.getNumChildren() > 0) _container.removeChildAt(0);
            var dots = new createjs.Container();
            var xCount = Math.floor(_stageWidth / GameViewField.DOTS_SPACING) - 1;
            var yCount = Math.floor(_stageHeight / GameViewField.DOTS_SPACING) - 1;
            var maxX = 0;
            var maxY = 0;
            for (var dotX = 0; dotX < xCount; dotX++) {
                for (var dotY = 0; dotY < yCount; dotY++) {
                    var miniDot = new createjs.Shape();
                    miniDot.alpha = 0.05;
                    miniDot.graphics.beginFill('#FFF');
                    miniDot.graphics.drawCircle(0, 0, GameViewField.DOTS_THICKNESS);
                    miniDot.graphics.endFill();
                    miniDot.x = dotX * GameViewField.DOTS_SPACING;
                    miniDot.y = dotY * GameViewField.DOTS_SPACING;
                    if (dotY % 2 == 0) miniDot.x += GameViewField.DOTS_SPACING / 2;
                    dots.addChild(miniDot);
                    maxX = Math.max(maxX, miniDot.x);
                    maxY = Math.max(maxY, miniDot.y);
                    var miniDot = new createjs.Shape();
                    miniDot.alpha = 0.08;
                    miniDot.graphics.setStrokeStyle(1, 'butt').beginStroke('#FFF');
                    miniDot.graphics.arc(0, 0, GameViewField.DOTS_THICKNESS, 0, Math.PI / 1.5);
                    miniDot.graphics.endFill();
                    miniDot.x = dotX * GameViewField.DOTS_SPACING;
                    miniDot.y = dotY * GameViewField.DOTS_SPACING;
                    if (dotY % 2 == 0) miniDot.x += GameViewField.DOTS_SPACING / 2;
                    dots.addChild(miniDot);
                    var miniDot = new createjs.Shape();
                    miniDot.alpha = 0.4;
                    miniDot.rotation = -180;
                    miniDot.graphics.setStrokeStyle(1, 'butt').beginStroke('#000');
                    miniDot.graphics.arc(0, 0, GameViewField.DOTS_THICKNESS, 0, Math.PI / 1.5);
                    miniDot.graphics.endFill();
                    miniDot.x = dotX * GameViewField.DOTS_SPACING;
                    miniDot.y = dotY * GameViewField.DOTS_SPACING;
                    if (dotY % 2 == 0) miniDot.x += GameViewField.DOTS_SPACING / 2;
                    dots.addChild(miniDot)
                }
            }
            dots.x = (_stageWidth - maxX) / 2;
            dots.y = (_stageHeight - maxY) / 2;
            _container.addChild(dots);
            var middleLine = new createjs.Shape();
            middleLine.x = Math.round((_stageWidth - GameViewField.THICKNESS) / 2);
            middleLine.y = GameViewField.outerPadding;
            middleLine.graphics.beginLinearGradientFill(['#2d2d2d', '#FFF'], [0, 1], 0, 0, GameViewField.THICKNESS, _stageHeight / 2 - GameViewField.centerHeight / 2 - GameViewField.outerPadding - GameViewField.circlePadding);
            middleLine.graphics.drawRect(0, 0, GameViewField.THICKNESS, _stageHeight / 2 - GameViewField.centerHeight / 2 - GameViewField.outerPadding - GameViewField.circlePadding);
            middleLine.graphics.endFill();
            _container.addChild(middleLine);
            var middleLine = new createjs.Shape();
            middleLine.x = Math.round((_stageWidth - GameViewField.THICKNESS) / 2);
            middleLine.y = _stageHeight / 2 + GameViewField.centerHeight / 2 + GameViewField.circlePadding;
            middleLine.graphics.beginLinearGradientFill(['#FFF', '#2d2d2d'], [0, 1], 0, 0, GameViewField.THICKNESS, _stageHeight / 2 - GameViewField.centerHeight / 2 - GameViewField.outerPadding - GameViewField.circlePadding);
            middleLine.graphics.drawRect(0, 0, GameViewField.THICKNESS, _stageHeight / 2 - GameViewField.centerHeight / 2 - GameViewField.outerPadding - GameViewField.circlePadding);
            middleLine.graphics.endFill();
            _container.addChild(middleLine);
            var middleCircle = new createjs.Shape();
            middleCircle.graphics.beginStroke('#FFF').setStrokeStyle(GameViewField.THICKNESS);
            middleCircle.graphics.drawCircle(0, 0, GameViewField.centerHeight / 2);
            middleCircle.x = _stageWidth / 2;
            middleCircle.y = _stageHeight / 2;
            _container.addChild(middleCircle);
            _points.render(_stageWidth, _stageHeight);
            _container.cache(0, 0, _stageWidth, _stageHeight)
        };
        self.resize = function(stageWidth, stageHeight) {
            _stageWidth = stageWidth;
            _stageHeight = stageHeight;
            self.render()
        };
        self.updatePoints = function() {
            _points.updatePoints()
        };
        Init()
    };
    GameViewField.prototype = Public;
    if (Parent) sys.inherits(GameViewField, Parent);
    return GameViewField
})();
setPackage('app.views');
app.views.GameViewFieldPoints = (function() {
    var Parent = createjs.Container;
    var Public = {};
    var GameViewFieldPoints = function(players) {
        var GameViewField = app.views.GameViewField;
        var self = this;
        var _stageWidth = 0;
        var _stageHeight = 0;
        var _players = null;
        var _oldPoints = [-1, -1];
        var _oldTexts = [];
        var _newTexts = [];
        var Init = function() {
            if (Parent) Parent.call(self);
            _players = players
        };
        self.render = function(stageWidth, stageHeight) {
            if (stageWidth != null) _stageWidth = stageWidth;
            if (stageHeight != null) _stageHeight = stageHeight;
            self.uncache();
            while (self.getNumChildren() > 0) self.removeChildAt(0);
            if (_players[0].getPoints() > 0 || _players[1].getPoints() > 0) {
                _oldPoints[0] = _players[0].getPoints();
                _oldPoints[1] = _players[1].getPoints();
                var middleLine = new createjs.Shape();
                middleLine.x = Math.round((_stageWidth - GameViewField.THICKNESS) / 2);
                middleLine.y = _stageHeight / 2 - GameViewField.centerHeight / 2 + GameViewField.innerPadding;
                middleLine.graphics.beginLinearGradientFill(['#2d2d2d', '#FFF'], [0, 1], 0, 0, GameViewField.THICKNESS, GameViewField.centerHeight / 2 - GameViewField.innerPadding);
                middleLine.graphics.drawRect(0, 0, GameViewField.THICKNESS, GameViewField.centerHeight / 2 - GameViewField.innerPadding);
                middleLine.graphics.endFill();
                self.addChild(middleLine);
                var middleLine = new createjs.Shape();
                middleLine.x = Math.round((_stageWidth - GameViewField.THICKNESS) / 2);
                middleLine.y = _stageHeight / 2;
                middleLine.graphics.beginLinearGradientFill(['#FFF', '#2d2d2d'], [0, 1], 0, 0, GameViewField.THICKNESS, GameViewField.centerHeight / 2 - GameViewField.innerPadding);
                middleLine.graphics.drawRect(0, 0, GameViewField.THICKNESS, GameViewField.centerHeight / 2 - GameViewField.innerPadding);
                middleLine.graphics.endFill();
                self.addChild(middleLine);
                for (var i = 0; i < 2; i++) {
                    var playerText = new createjs.Text(_players[i].getPoints(), 'bold 60px Helvetica', '#FFF');
                    var playerTextHolder = new createjs.Container();
                    playerTextHolder.addChild(playerText);
                    playerText.x = 0 - playerText.getMeasuredWidth() / 2;
                    playerText.y = 0 - playerText.getMeasuredHeight() / 2;
                    playerTextHolder.x = _stageWidth / 2 + (playerText.getMeasuredWidth() + 10) * (i == 0 ? -1 : 1);
                    playerTextHolder.y = _stageHeight / 2;
                    playerTextHolder.rotation = (i == 0 ? 90 : -90);
                    self.addChild(playerTextHolder);
                    _oldTexts[i] = playerTextHolder
                }
            }
            self.cache(0, 0, _stageWidth, _stageHeight)
        };
        self.resize = function(stageWidth, stageHeight) {
            _stageWidth = stageWidth;
            _stageHeight = stageHeight;
            self.render()
        };
        self.updatePoints = function() {
            self.uncache();
            for (var i = 0; i < 2; i++) {
                if (_players[i].getPoints() != _oldPoints[i]) {
                    var playerText = new createjs.Text(_players[i].getPoints(), 'bold 60px Helvetica', '#FFF');
                    var playerTextHolder = new createjs.Container();
                    playerTextHolder.addChild(playerText);
                    playerText.x = 0 - playerText.getMeasuredWidth() / 2;
                    playerText.y = 0 - playerText.getMeasuredHeight() / 2;
                    playerTextHolder.x = _stageWidth / 2 + (playerText.getMeasuredWidth() + 10) * (i == 0 ? -1 : 1);
                    playerTextHolder.y = _stageHeight / 2;
                    playerTextHolder.rotation = (i == 0 ? 90 : -90);
                    self.addChild(playerTextHolder);
                    playerTextHolder.scaleX = 3;
                    playerTextHolder.scaleY = 3;
                    playerTextHolder.alpha = 0;
                    TweenLite.to(playerTextHolder, 0.25, {
                        alpha: 1,
                        scaleX: 1,
                        scaleY: 1,
                        onComplete: self.render
                    });
                    if (_oldTexts[i]) {
                        TweenLite.to(_oldTexts[i], 0.25, {
                            alpha: 0,
                            scaleX: 0.5,
                            scaleY: 0.5
                        })
                    }
                }
            }
        };
        Init()
    };
    GameViewFieldPoints.prototype = Public;
    if (Parent) sys.inherits(GameViewFieldPoints, Parent);
    return GameViewFieldPoints
})();
setPackage('app.views');
app.views.Preloader = (function() {
    var Parent = createjs.Container;
    var Public = {};
    var Preloader = function(controller) {
        var self = this;
        self.percent = 0;
        var shape = [{
            x: 0,
            y: -57
        }, {
            x: -36,
            y: 36
        }, {
            x: 0,
            y: 72
        }, {
            x: 36,
            y: 36
        }, ];
        var _unfilled = null;
        var _filled = null;
        var Init = function() {
            if (Parent) Parent.call(self, controller);
            _unfilled = new createjs.Shape();
            _filled = new createjs.Shape();
            draw(_unfilled, '#333', 1);
            self.addChild(_unfilled);
            self.addChild(_filled)
        };
        self.set = function() {
            draw(_filled, '#FFF', self.percent)
        };
        var draw = function(element, color, percent) {
            element.graphics.clear();
            element.graphics.setStrokeStyle(12, 'butt').beginStroke(color);
            var fillShapeItems = Math.floor(shape.length * percent);
            var fillRestOfNextShape = shape.length * percent - fillShapeItems;
            element.graphics.moveTo(shape[0].x, shape[0].y);
            for (var times = 0; times < (percent == 1 ? 2 : 1); times++) {
                for (var i = 0; i < shape.length; i++) {
                    if (i <= fillShapeItems) {
                        var coords = shape[i];
                        var nextCoords = shape[i + 1];
                        if (!nextCoords) nextCoords = shape[0];
                        var x = nextCoords.x;
                        var y = nextCoords.y;
                        if (i == fillShapeItems) {
                            x = coords.x + fillRestOfNextShape * (nextCoords.x - coords.x);
                            y = coords.y + fillRestOfNextShape * (nextCoords.y - coords.y)
                        }
                        element.graphics.lineTo(x, y)
                    }
                }
            }
        };
        Init()
    };
    Preloader.prototype = Public;
    if (Parent) sys.inherits(Preloader, Parent);
    return Preloader
})();
var Main = (function() {
    var Parent = com.firsara.display.Stage;
    var Public = {
        config: {
            fps: 50,
            mouseover: false,
            mouseoverTreshold: 10,
            touch: true,
            canvas: 'canvas'
        }
    };
    var Main = function(id) {
        var self = this;
        self.view = null;
        self.assets = new com.firsara.data.Assets();
        var _preloader = null;
        var _rendered = false;
        var Init = function() {
            if (Parent) Parent.call(self);
            if (Main.instance) throw new Error('main can only be initialized once');
            Main.instance = self;
            Main.stage = self.stage;
            _preloader = new app.views.Preloader(self);
            self.stage.addChild(_preloader);
            var data = [{
                src: 'assets/images/paddle.png',
                id: 'paddle'
            }, {
                src: 'assets/images/puck.png',
                id: 'puck'
            }, {
                src: 'assets/images/puck_shadow.png',
                id: 'puck_shadow'
            }, {
                src: 'assets/sounds/touch.ogg',
                id: 'assets.sounds.touch',
                data: 2
            }, {
                src: 'assets/sounds/goal.ogg',
                id: 'assets.sounds.goal',
                data: 2
            }, {
                src: 'assets/sounds/sirene.ogg',
                id: 'assets.sounds.sirene',
                data: 2
            }, {
                src: 'assets/sounds/fight0.ogg',
                id: 'assets.sounds.fight0',
                data: 2
            }, {
                src: 'assets/sounds/fight1.ogg',
                id: 'assets.sounds.fight1',
                data: 2
            }, {
                src: 'assets/sounds/fight2.ogg',
                id: 'assets.sounds.fight2',
                data: 2
            }];
            for (var i = 0; i < 5; i++) {
                data.push({
                    src: 'assets/sounds/edge' + i + '.ogg',
                    id: 'assets.sounds.edge' + i,
                    data: 2
                })
            }
            for (var i = 0; i < 8; i++) {
                data.push({
                    src: 'assets/sounds/hit' + i + '.ogg',
                    id: 'assets.sounds.hit' + i,
                    data: 2
                })
            }
            if (window.BASE_64) {
                render()
            } else {
                createjs.Sound.alternateExtensions = ['mp3'];
                self.assets.installPlugin(createjs.Sound);
                self.assets.addEventListener('update', showProgress);
                self.assets.addEventListener('ready', render);
                self.assets.load(data)
            }
            window.addEventListener('resize', resize, false);
            resize()
        };
        var resize = function() {
            _preloader.x = self.stage.canvas.width / 2;
            _preloader.y = self.stage.canvas.height / 2
        };
        var showProgress = function(event) {
            _preloader.scaleX = 1.1 - (event.percent * 0.1);
            _preloader.scaleY = 1.1 - (event.percent * 0.1);
            _preloader.percent = event.percent;
            _preloader.set()
        };
        var render = function() {
            if (_rendered) return;
            _rendered = true;
            TweenLite.to(_preloader, 1, {
                percent: 1,
                scaleX: 0.925,
                scaleY: 0.925,
                ease: Linear.easeNone,
                onUpdate: _preloader.set,
                onComplete: setGame
            })
        };
        var setGame = function() {
            self.view = new app.views.GameView(self);
            self.view.alpha = 0;
            self.stage.addChild(self.view);
            TweenLite.to(_preloader, 1, {
                scaleX: 0.85,
                scaleY: 0.85,
                alpha: 0,
                ease: Linear.easeNone,
                onComplete: removePreloader
            });
            TweenLite.to(self.view, 1, {
                delay: 1,
                alpha: 1,
                onComplete: self.view.render
            })
        };
        var removePreloader = function() {
            if (_preloader && _preloader.parent) _preloader.parent.removeChild(_preloader)
        };
        Init()
    };
    Main.prototype = Public;
    sys.inherits(Main, Parent);
    return Main
})();
new Main();

var IMAGES = {};
IMAGES._paddle = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAYAAAA/mZ5CAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozNTYyQ0M3QTBGNUQxMUU0QkY2Mzk4RDU3NkQ0NjFDQSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3NDFEQjNDMTMwNjYxMUU0OEJDMkRFNEI1RTI3NjQzMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3NDFEQjNDMDMwNjYxMUU0OEJDMkRFNEI1RTI3NjQzMCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU3NDEzZjM1LWE0NTAtNDI5Mi05NDUxLWVjMGM4MDgxMTBkNyIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjA3MTQ2MjU0LTc4ZDAtMTE3Ny05MTg0LTgx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";
IMAGES._puck = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ4AAACeCAYAAADDhbN7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozNTYyQ0M3QTBGNUQxMUU0QkY2Mzk4RDU3NkQ0NjFDQSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5MzAxNjA2QTMwNjgxMUU0OEJDMkRFNEI1RTI3NjQzMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5MzAxNjA2OTMwNjgxMUU0OEJDMkRFNEI1RTI3NjQzMCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmEyNTAwZjZjLTQ1ZjctNDliZS04Zjk1LTYwZTY5ZDlkMTkwMCIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjA3MTQ2MjU0LTc4ZDAtMTE3Ny05MTg0LTgx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";
IMAGES._puck_shadow = "data:image/png;base64,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0p8zAAA7pGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMjEgNzkuMTU1NzcyLCAyMDE0LzAxLzEzLTE5OjQ0OjAwICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgICAgICAgICB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgICAgICAgICB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyI+CiAgICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+QWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMTQtMDktMDhUMTI6MTM6MTArMDI6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAxNC0wOS0wOVQxOToxMTozNCswMjowMDwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXA6TWV0YWRhdGFEYXRlPjIwMTQtMDktMDlUMTk6MTE6MzQrMDI6MDA8L3htcDpNZXRhZGF0YURhdGU+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6NmExM2QwYmMtOTk0NS00OTFmLTk5N2YtMDYxZmEyN2M5ZTBmPC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD54bXAuZGlkOkZERjA3NkI3MkY2NDExRTQ4NkFBRDFGQzVFRjc0MjQ1PC94bXBNTTpEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06RGVyaXZlZEZyb20gcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICA8c3RSZWY6aW5zdGFuY2VJRD54bXAuaWlkOkZERjA3NkI0MkY2NDExRTQ4NkFBRDFGQzVFRjc0MjQ1PC9zdFJlZjppbnN0YW5jZUlEPgogICAgICAgICAgICA8c3RSZWY6ZG9jdW1lbnRJRD54bXAuZGlkOkZERjA3NkI1MkY2NDExRTQ4NkFBRDFGQzVFRjc0MjQ1PC9zdFJlZjpkb2N1bWVudElEPgogICAgICAgICA8L3htcE1NOkRlcml2ZWRGcm9tPgogICAgICAgICA8eG1wTU06T3JpZ2luYWxEb2N1bWVudElEPnhtcC5kaWQ6RkRGMDc2QjcyRjY0MTFFNDg2QUFEMUZDNUVGNzQyNDU8L3htcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkhpc3Rvcnk+CiAgICAgICAgICAgIDxyZGY6U2VxPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjQyZGYzNTg2LTM0ZGUtNGRhYi05MDdjLTQ3ODgyMjhhMTY3NDwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAxNC0wOS0wOFQxMjoyMTozOCswMjowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjZhMTNkMGJjLTk5NDUtNDkxZi05OTdmLTA2MWZhMjdjOWUwZjwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAxNC0wOS0wOVQxOToxMTozNCswMjowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpTZXE+CiAgICAgICAgIDwveG1wTU06SGlzdG9yeT4KICAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9wbmc8L2RjOmZvcm1hdD4KICAgICAgICAgPHBob3Rvc2hvcDpDb2xvck1vZGU+MzwvcGhvdG9zaG9wOkNvbG9yTW9kZT4KICAgICAgICAgPHBob3Rvc2hvcDpJQ0NQcm9maWxlPnNSR0IgSUVDNjE5NjYtMi4xPC9waG90b3Nob3A6SUNDUHJvZmlsZT4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+MTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MTI4PC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjE5MjwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8+OMmnoAAAACBjSFJNAAB6JQAAgIMA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";