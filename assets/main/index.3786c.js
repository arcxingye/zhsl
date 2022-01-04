window.__require = function e(t, a, i) {
    function o(s, c) {
        if (!a[s]) {
            if (!t[s]) {
                var r = s.split("/");
                if (r = r[r.length - 1], !t[r]) {
                    var h = "function" == typeof __require && __require;
                    if (!c && h) return h(r, !0);
                    if (n) return n(r, !0);
                    throw new Error("Cannot find module '" + s + "'")
                }
                s = r
            }
            var l = a[s] = {
                exports: {}
            };
            t[s][0].call(l.exports, function(e) {
                return o(t[s][1][e] || e)
            }, l, l.exports, e, t, a, i)
        }
        return a[s].exports
    }
    for (var n = "function" == typeof __require && __require, s = 0; s < i.length; s++) o(i[s]);
    return o
}({
    AniTools: [
        function(e, t) {
            "use strict";
            cc._RF.push(t, "c1ddcRY/mRHiYxChOjYdF2+", "AniTools");
            var a = {
                doLabStrAni: function(e, t, a) {
                    e.node.stopAllActions(), e.string = "";
                    var i = t.split(""),
                        o = 0,
                        n = a / i.length;
                    e.node.runAction(cc.sequence(cc.callFunc(function() {
                        e.string = e.string + i[o], o++
                    }), cc.delayTime(n)).repeat(i.length))
                },
                gunNumLabAni: function(e, t, a, i, o) {
                    if (void 0 === a && (a = 30), o = o || parseInt(e.string), t != o) {
                        e.node.stopAllActions();
                        var n = 0,
                            s = Math.abs(t - o),
                            c = o > t ? -1 : 1;
                        Math.abs(t - o) > a && (s = a, c *= Math.abs(t - o) / a), e.node.runAction(cc.sequence(cc.callFunc(function() {
                            n >= s - 1 ? e.string = i ? ToolsJs.getStrForNum2(t) : t : (o += Math.floor(c), e.string = i ? ToolsJs.getStrForNum2(o) : Math.floor(o)), n++
                        }), cc.delayTime(.02)).repeat(s))
                    }
                },
                openUIAni: function(e, t, a, i) {
                    void 0 === a && (a = .3), e.opacity = 0, t.scale = 0, e.runAction(cc.fadeTo(a, 100)), t.runAction(cc.sequence(cc.scaleTo(a, 1).easing(cc.easeBackOut()), cc.callFunc(i)))
                },
                closeUIAni: function(e, t, a, i) {
                    void 0 === a && (a = .2), e.runAction(cc.fadeOut(a)), t.runAction(cc.sequence(cc.scaleTo(a, 0).easing(cc.easeBackIn()), cc.callFunc(i), cc.removeSelf(!0)))
                },
                sortFadeInArr: function(e, t, a) {
                    void 0 === t && (t = .3), void 0 === a && (a = .02);
                    for (var i = 0; i < e.length; i++) {
                        var o = e[i];
                        o.opacity = 0, o.runAction(cc.sequence(cc.delayTime(a * i), cc.fadeIn(t)))
                    }
                },
                jumpByDegressAni: function(e, t, a, i, o, n) {
                    void 0 === a && (a = 0), void 0 === n && (n = 0);
                    var s = cc.misc.degreesToRadians(t),
                        c = cc.v2(Math.cos(s) * i, Math.sin(s) * i),
                        r = i / o;
                    e.runAction(cc.sequence(cc.delayTime(n), cc.jumpBy(r, cc.v2(1.5 * c.x, a), i, 1), cc.removeSelf(!0)))
                },
                moveDegressAni: function(e, t, a, i, o, n) {
                    t = t || this.returnRanNum(-180, 180);
                    var s = cc.misc.degreesToRadians(t),
                        c = cc.v2(Math.cos(s) * a, Math.sin(s) * a),
                        r = a / i,
                        h = o ? 0 : e.scale,
                        l = n ? 0 : e.opacity;
                    e.runAction(cc.sequence(cc.spawn(cc.scaleTo(r + .1, h), cc.moveBy(r, c).easing(cc.easeQuadraticActionOut()), cc.fadeTo(r + .1, l)), cc.fadeOut(.1), cc.removeSelf(!0)))
                },
                moveByOutInit: function(e, t, a, i) {
                    void 0 === t && (t = .5), void 0 === a && (a = 0), void 0 === i && (i = 0), e.x += a, e.y += i, e.runAction(cc.moveBy(t, cc.v2(-a, -i)).easing(cc.easeBackOut()))
                },
                sprRedAni: function(e, t, a, i) {
                    var o = 0;
                    e.runAction(cc.sequence(cc.delayTime(t), cc.callFunc(function(e) {
                        e.color = cc.Color.RED
                    }), cc.delayTime(t), cc.callFunc(function(e) {
                        e.color = cc.Color.WHITE, ++o >= a && null != i && i()
                    })).repeat(a))
                },
                shakeAni: function(e, t, a, i, o) {
                    void 0 === a && (a = 10), void 0 === i && (i = .1), void 0 === o && (o = 2);
                    var n = cc.sequence(cc.rotateBy(i, a), cc.rotateBy(i, -a), cc.rotateBy(i, -a), cc.rotateBy(i, a), cc.rotateBy(i, a), cc.rotateBy(i, -a), cc.delayTime(o));
                    t ? e.runAction(n.repeatForever()) : e.runAction(n)
                },
                playAni: function(e, t) {
                    e.getComponent(cc.Animation).play(t)
                },
                stopAni: function(e, t) {
                    e.getComponent(cc.Animation).stop(t)
                },
                addNodeAni: function(e, t, a, i, o, n, s) {
                    var c = e.getComponent(cc.Animation);
                    null == c && (c = e.addComponent(cc.Animation));
                    var r = [];
                    if (ToolsJs.SpriteFrameDic[t + i]) {
                        for (var h = i; h <= o; h++) {
                            var l = ToolsJs.SpriteFrameDic[t + h];
                            r.push(l)
                        }
                        this.addClipForAnimaton(c, r, a, s, n)
                    } else
                        for (var m = this, d = 0, u = o - i + 1, g = function(e) {
                            cc.loader.loadRes(t + e, cc.SpriteFrame, function(t, i) {
                                i && (d++, i.index = e, r.push(i)), d >= u && (ToolsJs.sortArrForObject(r, "index"), m.addClipForAnimaton(c, r, a, s, n))
                            })
                        }, p = i; p <= o; p++) g(p)
                },
                addClipForAnimaton: function(e, t, a, i, o) {
                    var n = cc.AnimationClip.createWithSpriteFrames(t, t.length);
                    n.name = a, n.speed = i, n.wrapMode = o ? cc.WrapMode.Loop : cc.WrapMode.Normal, e.addClip(n)
                },
                returnRanNum: function(e, t) {
                    return e + Math.floor(Math.random() * (t - e + 1))
                }
            };
            window.AniTools = a, cc._RF.pop()
        }, {}
    ],
    EventData: [
        function(e, t) {
            "use strict";
            cc._RF.push(t, "00f19xAv/JGmKf/MZ/AWHni", "EventData"), window.EventData = {
                UPDATE_GLOD: "updateGlod"
            }, cc._RF.pop()
        }, {}
    ],
    EventManager: [
        function(e, t) {
            "use strict";
            cc._RF.push(t, "94634X4eDVNUoEnqKm3D5/S", "EventManager");
            var a = {
                addListener: function(e, t, a) {
                    cc.systemEvent.on(e, t, a)
                },
                removeListener: function(e, t, a) {
                    cc.systemEvent.off(e, t, a)
                },
                dispachEvent: function(e, t, a, i, o, n) {
                    cc.systemEvent.emit(e, t, a, i, o, n)
                },
                removeListenerForTarget: function(e) {
                    cc.systemEvent.targetOff(e)
                }
            };
            window.EventManager = a, cc._RF.pop()
        }, {}
    ],
    GameConfig: [
        function(e, t) {
            "use strict";
            cc._RF.push(t, "f0663sWtfNKCKOL+Hvnt0cI", "GameConfig");
            var a = {
                GameClubButton: null,
                GameScene: null,
                launchScene: null,
                Bros: null,
                caS: null,
                MAIN_MENU_NUM: "Classic",
                gameScore: 0,
                standScore: 6,
                GAME_OVER_BOOL: !0,
                publicGameBool: !1,
                ranLinkData: null,
                recGameData: null,
                InfoData: null,
                endShow0: null,
                endShow1: null,
                endShow2: null,
                endShow3: null,
                infoGameName: null,
                showText: null,
                startText: null,
                moreGameText: null,
                playAgainText: null,
                playNum: 0,
                curType: 2,
                noTouchBool: !0,
                enterGameNum: 0,
                enterGameFlags: !1,
                returnRanNum: function(e, t) {
                    return e + Math.floor(Math.random() * (t - e + 1))
                },
                getAngle: function(e, t, a, i) {
                    var o = Math.abs(e - a),
                        n = Math.abs(t - i),
                        s = n / Math.sqrt(Math.pow(o, 2) + Math.pow(n, 2)),
                        c = Math.acos(s),
                        r = 180 / (Math.PI / c);
                    return t > i && (r = 180 - r), e > a && (r *= -1), r
                },
                setLocalStorage: function(e, t) {
                    cc.sys.localStorage.setItem(e, t)
                },
                getLocalStorage: function(e) {
                    return cc.sys.localStorage.getItem(e)
                }
            };
            t.exports = a, cc._RF.pop()
        }, {}
    ],
    GameUiTools: [
        function(e, t) {
            "use strict";
            cc._RF.push(t, "b21e8tF461OFalpptyeuAE2", "GameUiTools"), e("GameConfig");
            var a = {
                newSprite: function(e, t) {
                    var a = new cc.Node;
                    return t ? (e = e.split(".")[0], a.addComponent(cc.Sprite).spriteFrame = GameTools.love2048FrameCache.getSpriteFrame(e)) : a.addComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame("res/raw-assets/resources/" + e), a
                },
                setNodeSpriteFrame: function(e, t) {
                    e.getComponent(cc.Sprite).spriteFrame = GameTools.love2048FrameCache.getSpriteFrame(t)
                },
                setButtonClickEvents: function(e, t, a, i, o) {
                    var n = new Array;
                    null == t.length ? n[0] = t : n = t;
                    for (var s = 0; s < n.length; s++) {
                        var c = new cc.Component.EventHandler;
                        c.target = e.node, c.component = e.node.name, c.handler = a, null == t.length ? c.customEventData = i : c.customEventData = s;
                        var r = n[s].addComponent(cc.Button);
                        r.clickEvents.push(c), (null == o || o) && (r.transition = cc.Button.Transition.SCALE, r.duration = .1, r.zoomScale = 1.2)
                    }
                },
                scheduleOnce: function(e, t, a) {
                    e.runAction(cc.sequence(cc.delayTime(a), cc.callFunc(t, e)))
                },
                loadingScene: function(e, t) {
                    t ? cc.loader.loadRes("panel/LoadingLayer", function(t, a) {
                        var i = cc.instantiate(a);
                        cc.director.getScene().children[0].addChild(i), cc.director.preloadScene(e, function() {
                            cc.director.loadScene(e)
                        })
                    }) : cc.director.preloadScene(e, function() {
                        cc.director.loadScene(e)
                    })
                },
                loadingLayer: function(e) {
                    cc.loader.loadRes(e, function(e, t) {
                        if (!e) {
                            var a = cc.instantiate(t);
                            cc.director.getScene().children[0].addChild(a, 100)
                        }
                    })
                }
            };
            t.exports = a, cc._RF.pop()
        }, {
            GameConfig: "GameConfig"
        }
    ],
    HttpManagerJs: [
        function(e, t) {
            "use strict";
            var a;
            cc._RF.push(t, "197e1hfNnxIcJx73V3VhUxY", "HttpManagerJs");
            var i = e("GameConfig"),
                o = ((a = {
                    URL: "http://g.vsane.com/Service/Share/index",
                    cacheList: null,
                    isBusy: null,
                    req: null,
                    perform: null,
                    retGameId: 0
                }).cacheList = [], a.ctor = function() {}, a.checkHave = function() {
                    this.isBusy || this.sendOne()
                }, a.httpInitUrl = function(e) {
                    var t = window.location.href,
                        a = t.substring(0, t.lastIndexOf("//") + 2) + window.location.host + "/Service/Share/index";
                    this.URL = a, console.log("data", this.URL), this.retGameId = e
                }, a.send = function(e, t, a, i) {
                    this.cacheList.push({
                        type: e,
                        data: t,
                        func: a,
                        target: i
                    }), this.isBusy || this.sendOne()
                }, a.sendOne = function() {
                    if (0 != this.cacheList.length) {
                        this.isBusy = !0, this.perform = this.cacheList.shift(), this.req = cc.loader.getXMLHttpRequest(), this.req.onreadystatechange = this.onDataHandler.bind(this), this.req.onerror = this.onErrorHandler.bind(this), this.req.ontimeout = this.onTimeoutHandler.bind(this), this.req.timeout = 2e3, cc.log("pos", this.URL), this.req.open("POST", this.URL), this.req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
                        var e = this.returnLanguage();
                        console.log("gameIdid", this.retGameId);
                        var t = this.retGameId,
                            a = {
                                type: this.perform.type,
                                gid: t,
                                mid: null,
                                data: this.perform.data,
                                languageType: e
                            },
                            i = "send=" + JSON.stringify(a);
                        this.req.send(i)
                    }
                }, a.onDataHandler = function() {
                    if (404 != this.req.status) {
                        if (4 == this.req.readyState && this.req.status >= 200 && this.req.status <= 207 && this.req.responseText) {
                            var e = JSON.parse(this.req.responseText);
                            this.isBusy = !1, this.perform.target ? this.perform.func.call(this.perform.target, e.error, e.data, e.commendGame, e.gameInfo) : this.perform.func(e)
                        }
                    } else {
                        var t = i.launchScene,
                            a = i.Bros;
                        i.caS, cc.director.loadScene(t, null, function() {
                            if (a) {
                                var e = document.getElementById("GameDiv");
                                e && (e.style.backgroundImage = "")
                            }
                            cc.loader.onProgress = null, console.log("Success to load scene: " + t)
                        })
                    }
                }, a.returnLanguage = function() {
                    return ("" + window.navigator.language).toLocaleLowerCase()
                }, a.onErrorHandler = function() {
                    cc.log("网络错误"), this.isBusy = !1, this.perform.target ? this.perform.func.call(this.perform.target, -1) : this.perform.func(-1)
                }, a.onTimeoutHandler = function() {
                    cc.log("请求超时"), this.isBusy = !1, this.perform.target ? this.perform.func.call(this.perform.target, -1) : this.perform.func(-1)
                }, a.clearAll = function() {
                    for (var e = this.cacheList.length, t = 0; t < e; t++) {
                        var a = this.cacheList[t];
                        a && (a.target ? a.func.call(a.target, -1) : a.func(-1))
                    }
                    this.cacheList.length = 0
                }, a);
            t.exports = o, cc._RF.pop()
        }, {
            GameConfig: "GameConfig"
        }
    ],
    LanguageSetJs: [
        function(e, t) {
            "use strict";
            cc._RF.push(t, "4754e8KuPZJCqklCNyKpG29", "LanguageSetJs"), t.exports = {
                language_1: {
                    game_name: "「召唤神龙」",
                    game_name1: "召唤神龙",
                    game_info: "点击屏幕串珠子，两个相同级别的珠子会合成更高级的珠子。",
                    txtStart: "开始",
                    txtMore: "更多游戏",
                    txtAgain: "再玩一次",
                    txtShare1: "在游戏中 ",
                    txtShare2: "得分了，好啊!你和我一起来比赛!",
                    bgRgb: "#3698C5",
                    gameT1: "关注我们",
                    gameT2: "纸牌接龙",
                    gameT3: "锦上添花",
                    gameUrl1: "http://g.regogame.com/game/9/",
                    gameUrl2: "http://g.regogame.com/game/3/",
                    gameT11: "关注微信",
                    gameT12: "关注Kakao",
                    gameT13: "关注Line",
                    gameEndL: "游 戏 结 束",
                    gameEndL1: "稍 候 查 看 分 数"
                },
                language_2: {
                    game_name: "「Dragon Merge」",
                    game_name1: "Dragon Merge",
                    game_info: "Tap the screen to string beads, and two beads of the same level will synthesize more advanced beads.",
                    txtStart: "Start",
                    txtMore: "More Game",
                    txtAgain: "Play Again",
                    txtShare1: "In Game ",
                    txtShare2: " Let's play together!",
                    bgRgb: "#3698C5",
                    gameT1: "Follow Us",
                    gameT2: "Thousand Flower",
                    gameT3: "Eliminate Star",
                    gameUrl1: "http://g.fromgame.com/game/53",
                    gameUrl2: "http://g.fromgame.com/game/13",
                    gameT11: "Focus WeChat",
                    gameT12: "Focus Kakao",
                    gameT13: "Focus Line",
                    gameEndL: "Game OVer",
                    gameEndL1: "View the score later"
                }
            }, cc._RF.pop()
        }, {}
    ],
    LoadSceneJs: [
        function(e, t) {
            "use strict";
            cc._RF.push(t, "3ef908fwfNIwJsOjET8tCh2", "LoadSceneJs");
            var a = {
                goToCover: function(e, t, a, i, o) {
                    var n = e;
                    n = null == n || null == n || e, console.log("LoadBoolBeforeLoadS", n), this.needShow = !1, n && n ? (this.needShow = !0, showMyAds()) : this.needShow = !1, this.needShow ? (null == preloader && this.startGoToGame(a, i, o), resCompleteFlag = !0, adCompleteFlag && resCompleteFlag && this.startGoToGame(a, i, o)) : this.startGoToGame(a, i, o)
                },
                startGoToGame: function() {
                    console.log("goToScene"), noAdGoToScene()
                }
            };
            t.exports = a, cc._RF.pop()
        }, {}
    ],
    MainGameJS: [
        function(e, t) {
            "use strict";
            cc._RF.push(t, "0e7a8SkMLxEY7nCB1Bqi8WZ", "MainGameJS");
            var a = e("GameConfig"),
                i = e("GameUiTools"),
                o = e("MainManage"),
                n = (e("mTool_WHQ"), e("../commonJs/GameConfig").gameScore, e("../commonJs/GameUiTools")),
                s = (n.scheduleOnce, n.setNodeSpriteFrame, e("../commonJs/mTool_WHQ"));
            e("../MainManage").endHttpShowInfo, cc.Class({
                extends: cc.Component,
                properties: {
                    startBgNode: cc.Node,
                    sceneScore: cc.Label,
                    gameOverT1: cc.Label,
                    gameOverT2: cc.Label,
                    nameLabel: cc.Label,
                    blackLayerPre: cc.Node,
                    enemyNode: cc.Node,
                    playerNode: cc.Node,
                    leafNode: cc.Node,
                    carmeraNode: cc.Node,
                    liziNode: cc.Node,
                    stoneNode: cc.Node,
                    gameOverPre: cc.Prefab,
                    leafPre: cc.Prefab,
                    enemyPreArr: [cc.Prefab],
                    newFishPreArr: [cc.Prefab],
                    BGPre: cc.Prefab,
                    bianjiePre: cc.Prefab,
                    BubblePre: cc.Prefab,
                    PanlongPre: cc.Prefab,
                    bowenPre: cc.Prefab,
                    bloodPre: cc.Prefab,
                    replayButtonPre: cc.Prefab,
                    mainBtnPre: cc.Prefab,
                    ripplePre: cc.Prefab,
                    liziPre: cc.Prefab,
                    starPre: cc.Prefab,
                    lightPre: cc.Prefab,
                    eatMusic: {
                        default: null,
                        type: cc.AudioClip
                    },
                    HurtMusic: {
                        default: null,
                        type: cc.AudioClip
                    },
                    failMusic: {
                        default: null,
                        type: cc.AudioClip
                    }
                },
                judgeCurPlatform: function() {
                    console.log(navigator.userAgent);
                    var e, t, a, i, o, n, s, c = (e = navigator.userAgent, t = /(?:Windows Phone)/.test(e), a = /(?:SymbianOS)/.test(e) || t, i = /(?:Android)/.test(e), o = /(?:Firefox)/.test(e), /(?:Chrome|CriOS)/.test(e), {
                        isTablet: n = /(?:iPad|PlayBook)/.test(e) || i && !/(?:Mobile)/.test(e) || o && /(?:Tablet)/.test(e),
                        isPhone: s = /(?:iPhone)/.test(e) && !n,
                        isAndroid: i,
                        isPc: !s && !i && !a
                    });
                    c.isAndroid || c.isPhone ? this.platFromNum = 1 : c.isTablet ? this.platFromNum = 2 : c.isPc && (this.platFromNum = 3)
                },
                adapterScreen: function() {
                    var e = cc.find("Canvas").getComponent(cc.Canvas);
                    2 == this.platFromNum || 3 == this.platFromNum ? (e.fitWidth = !0, e.fitHeight = !0) : (e.fitWidth = !0, e.fitHeight = !1)
                },
                onLoad: function() {
                    a.publicGameBool ? o.init() : finishLoad(), this.platFromNum = 1, this.judgeCurPlatform(), this.adapterScreen(), this.gameOveEndBool = !1, this.gameOverNum = 0, this.gameWidth = cc.winSize.width, this.gameHeight = cc.winSize.height, a.curType = this.returnCurrentLanType(), a.playNum >= 1 && (this.startBgNode.active = !1), a.playNum++, cc.log(a.playNum), this.addTouchEvents(), i.loadingLayer("panel/LinkIconSpr"), cc.director.getCollisionManager().enabled = !0, cc.director.getCollisionManager().enabledDebugDraw = !0, this.touchBeginFlags = !0, this.Hscale = 1280 / this.gameHeight, this.Wscale = 720 / this.gameWidth, this.SizeScale = 0, this.Hscale >= this.Wscale ? this.SizeScale = this.Wscale : this.SizeScale = this.Hscale, a.publicGameBool || this.play(), this.canCreateDisX = 0, this.canCreateDisY = 0, this.OffPos = null, this.speedNum = 400 / this.carmeraNode.getChildByName("MoveCamera").getComponent(cc.Camera).zoomRatio, this.speed = this.speedNum, this.BGNum = 9, this.kedouArr = [], this.qingwaArr = [], this.haiguiArr = [], this.xiaojinyuArr = [], this.jinliArr = [], this.dianmanArr = [], this.shayuArr = [], this.jingyuArr = [], this.jiaoArr = [], this.longArr = [], this.tempArr = [], this.BGArr = [], this.fishScaleX = [], this.fishScaleY = [], this.myFish = null, this.lightFlags = !1, this.boolFlags = !1, this.gameOverFlags = !1, this.canMoveFlags = !0, this.firstFlags = !0, this.BGNode = cc.find("Canvas/bgLayer"), this.scale = .4 * this.SizeScale;
                    for (var e = 0; e < this.playerNode.children.length - 1; e++) this.changeSize(this.playerNode.children[e]);
                    this.playerNode.typeID = 8, this.createMap(), this.maxCameraMovePosX = Math.abs(this.BGArr[0][this.BGNum - 1].x) - this.gameWidth, this.maxCameraMovePosY = Math.abs(this.BGArr[0][this.BGNum - 1].y) - this.gameHeight / 2;
                    for (var t = 0; t < this.leafNode.children.length; t++) {
                        var n = this.leafNode.children[t].position,
                            s = 200 * this.SizeScale * this.carmeraNode.getChildByName("MoveCamera").getComponent(cc.Camera).zoomRatio;
                        (n.x > this.maxCameraMovePosX - s || n.x < -this.maxCameraMovePosX + s || n.y > this.maxCameraMovePosY - s || n.y < -this.maxCameraMovePosY + s) && (this.leafNode.children[t].opacity = 180)
                    }
                    this.myFish = this.playerNode.getChildByName("kedou"), this.CreateEnemy(60), this.waterCount = 0, this.randnum = 10, this.angle = 0, this.rotSpeed = 1500, this.addSpeed = 65, this.maxTypeID = 1, this.canTouchReplay = !1;
                    for (var c = 0; c < 9; c++) {
                        var r = this.playerNode.children[c].scaleX;
                        this.fishScaleX.push(r)
                    }
                    for (var h = 0; h < 9; h++) {
                        var l = this.playerNode.children[h].scaleY;
                        this.fishScaleY.push(l)
                    }
                    this.jingyuNum = 0, this.jiaoNum = 0, this.Wu = cc.find("Canvas/Wu"), this.light1 = cc.find("Canvas/light1"), this.light2 = cc.find("Canvas/light2"), this.Wu.width = this.gameWidth, this.Wu.height = this.gameHeight, this.stoneNode.zIndex = 50, this.Wu.setPosition(cc.v2(0, 0)), this.Wu.zIndex = 1e3, this.light1.zIndex = 1200, this.light2.zIndex = 1300, this.LightNumCount = 0, this.lightjudeTime = 0, this.playerNode.zIndex = 9999, this.leafNode.zIndex = 1e4
                },
                start: function() {},
                play: function() {
                    console.log(1);
                    var e = this;
                    adBreak({
                        type: "next",
                        name: "restart-game",
                        beforeBreak: function() {
                            e.enableButtons()
                        },
                        afterBreak: function() {
                            e.enableButtons()
                        }
                    })
                },
                enableButtons: function() {},
                returnCurrentLanType: function() {
                    var e = 1;
                    switch (cc.sys.language) {
                        case cc.sys.LANGUAGE_CHINESE:
                            "zh-TW" == window.navigator.language || "zh-tw" == window.navigator.language || "zh-HK" == window.navigator.language || "zh-hk" == window.navigator.language ? (cc.log("繁体"), e = 2) : (cc.log("简体"), e = 1);
                            break;
                        case cc.sys.LANGUAGE_KOREAN:
                            e = 4;
                            break;
                        default:
                            e = 3
                    }
                    return e
                },
                changeSize: function(e) {
                    e.scaleX = (e.scaleX - .1) * this.SizeScale, e.scaleY = (e.scaleY - .1) * this.SizeScale
                },
                CreateBG: function() {
                    for (var e = this.BGNum, t = 0; t < e; t++) {
                        for (var a = [], i = 0; i < e; i++) {
                            var o = cc.instantiate(this.BGPre);
                            this.BGNode.addChild(o), o.width = this.gameHeight, o.height = this.gameHeight;
                            var n = o.width,
                                c = o.height;
                            this.canCreateDisX = n * e / 2 - n, this.canCreateDisY = c * e / 2 - c;
                            var r = cc.v2(-n * Math.floor(e / 2), c * Math.floor(e / 2)),
                                h = cc.v2(r.x + n * t, r.y - c * i);
                            if (o.setPosition(h), a.push(o), t > 0 && t < e - 1 && i > 0 && i < e - 1) {
                                var l = s.getRandomNum(0, 1, !0);
                                this.CreateLeaf(l, o)
                            }
                        }
                        this.BGArr.push(a)
                    }
                },
                getCreatePos: function(e, t) {
                    void 0 === t && (t = 0);
                    var a = e.width,
                        i = e.height,
                        o = s.getRandomNum(-a / 4, a / 4, !1),
                        n = s.getRandomNum(-i / 4, i / 4, !1),
                        c = cc.v2(o + e.x, n + e.y),
                        r = this.leafNode.convertToNodeSpaceAR(this.BGNode.convertToWorldSpaceAR(c));
                    if (++t > 100) return null;
                    for (var h = 0; h < this.leafNode.children.length; h++)
                        if (s.pDistance(r, this.leafNode.children[h].position) < 400) return this.getCreatePos(e, t);
                    return r
                },
                CreateLeaf: function(e, t) {
                    for (var a = 0; a < e; a++) {
                        var i = cc.instantiate(this.leafPre),
                            o = s.getRandomNum(1, 2, !0),
                            n = s.getRandomNum(1, 2, !1) * this.SizeScale;
                        i.scaleX = n, i.scaleY = n, i.angle = s.getRandomNum(-30, 30, !1), ToolsJs.setTexture(i, "leaf" + o), this.leafNode.addChild(i);
                        var c = this.getCreatePos(t);
                        c ? i.setPosition(c) : i.destroy()
                    }
                },
                CreateBianJie: function() {
                    for (var e = 1; e < this.BGNum - 1; e++)
                        if (e == Math.floor(this.BGNum / 2)) {
                            var t = cc.instantiate(this.bianjiePre);
                            ToolsJs.setTexture(t, "bian"), this.BGNode.addChild(t, 100);
                            var a = this.BGArr[0][e].position;
                            t.width = 1.8 * this.gameHeight, t.height = 1.8 * this.gameHeight, t.angle = 90, t.setPosition(cc.v2(a.x - this.gameHeight / 4, a.y)), ToolsJs.setNodeParent(t, this.node), t.zIndex = 100
                        }
                    for (var i = 1; i < this.BGNum - 1; i++)
                        if (i == Math.floor(this.BGNum / 2)) {
                            var o = cc.instantiate(this.bianjiePre);
                            ToolsJs.setTexture(o, "bian"), this.BGNode.addChild(o, 100);
                            var n = this.BGArr[this.BGNum - 1][i].position;
                            o.width = 1.8 * this.gameHeight, o.height = 1.8 * this.gameHeight, o.angle = -90, o.setPosition(cc.v2(n.x + this.gameHeight / 4, n.y)), ToolsJs.setNodeParent(o, this.node), o.zIndex = 100
                        }
                    for (var s = 1; s < this.BGNum - 1; s++)
                        if (s == Math.floor(this.BGNum / 2)) {
                            var c = cc.instantiate(this.bianjiePre);
                            ToolsJs.setTexture(c, "bian"), this.BGNode.addChild(c, 100);
                            var r = this.BGArr[s][0].position;
                            c.width = 1.8 * this.gameHeight, c.height = 1.8 * this.gameHeight, c.angle = 0, c.setPosition(cc.v2(r.x, r.y + this.gameHeight / 4)), ToolsJs.setNodeParent(c, this.node), c.zIndex = 100
                        }
                    for (var h = 1; h < this.BGNum - 1; h++)
                        if (h == Math.floor(this.BGNum / 2)) {
                            var l = cc.instantiate(this.bianjiePre);
                            ToolsJs.setTexture(l, "bian"), this.BGNode.addChild(l, 100);
                            var m = this.BGArr[h][this.BGNum - 1].position;
                            l.width = 1.8 * this.gameHeight, l.height = 1.8 * this.gameHeight, l.angle = 180, l.setPosition(cc.v2(m.x, m.y - this.gameHeight / 4)), ToolsJs.setNodeParent(l, this.node), l.zIndex = 100
                        }
                    for (var d = 0; d < 4; d++) {
                        var u = cc.instantiate(this.bianjiePre);
                        if (this.BGNode.addChild(u, 300 + d), u.width = 6 * this.gameHeight, u.height = 6 * this.gameHeight, 0 == d) {
                            var g = this.BGArr[0][0].position;
                            u.angle = 0, u.setPosition(cc.v2(g.x + this.gameHeight / 3, g.y - this.gameHeight / 3))
                        }
                        if (1 == d) {
                            var p = this.BGArr[0][this.BGNum - 1].position;
                            u.angle = 90, u.setPosition(cc.v2(p.x + this.gameHeight / 3, p.y + this.gameHeight / 3))
                        }
                        if (2 == d) {
                            var f = this.BGArr[this.BGNum - 1][0].position;
                            u.angle = -90, u.setPosition(cc.v2(f.x - this.gameHeight / 3, f.y - this.gameHeight / 3))
                        }
                        if (3 == d) {
                            var y = this.BGArr[this.BGNum - 1][this.BGNum - 1].position;
                            u.angle = 180, u.setPosition(cc.v2(y.x - this.gameHeight / 3, y.y + this.gameHeight / 3))
                        }
                        ToolsJs.setNodeParent(u, this.node), u.zIndex = 100
                    }
                },
                createMap: function() {
                    this.CreateBG(), this.CreateBianJie();
                    var e = cc.instantiate(this.enemyPreArr[0]);
                    this.enemyNode.addChild(e), this.changeSize(e), e.typeID = 1, e.speed = 100;
                    var t = this.enemyNode.convertToNodeSpaceAR(this.node.convertToWorldSpaceAR(this.playerNode.position)),
                        a = s.getRandomNum(this.gameWidth / 3, 3 * this.gameWidth / 4, !1),
                        i = 360 * Math.random(),
                        o = s.getCircumferencePos(t, a, i);
                    e.setPosition(o), this.enemyAction(e)
                },
                CameraMove: function(e) {
                    if (!this.gameOverFlags) {
                        var t = this.playerNode,
                            a = 0,
                            i = 0;
                        if (t.x <= -this.maxCameraMovePosX || t.x >= this.maxCameraMovePosX || t.y <= -this.maxCameraMovePosY || t.y >= this.maxCameraMovePosY) {
                            var o = t.x + this.OffPos.x * this.speed * e,
                                n = t.y + this.OffPos.y * this.speed * e;
                            o < -this.maxCameraMovePosX && n > -this.maxCameraMovePosY && n < this.maxCameraMovePosY ? (i = this.speedNum, a = 0, t.x = -this.maxCameraMovePosX) : o >= this.maxCameraMovePosX && n >= -this.maxCameraMovePosY && n <= this.maxCameraMovePosY ? (i = this.speedNum, a = 0, t.x = this.maxCameraMovePosX) : n >= this.maxCameraMovePosY && o >= -this.maxCameraMovePosX && o <= this.maxCameraMovePosX ? (a = this.speedNum, i = 0, t.y = this.maxCameraMovePosY) : n <= -this.maxCameraMovePosY && o >= -this.maxCameraMovePosX && o <= this.maxCameraMovePosX ? (a = this.speedNum, i = 0, t.y = -this.maxCameraMovePosY) : o <= -this.maxCameraMovePosX && n <= -this.maxCameraMovePosY ? (a = 0, i = 0, t.x = -this.maxCameraMovePosX, t.y = -this.maxCameraMovePosY) : o <= -this.maxCameraMovePosX && n >= this.maxCameraMovePosY ? (a = 0, i = 0, t.x = -this.maxCameraMovePosX, t.y = this.maxCameraMovePosY) : o >= this.maxCameraMovePosX && n <= -this.maxCameraMovePosY ? (a = 0, i = 0, t.x = this.maxCameraMovePosX, t.y = -this.maxCameraMovePosY) : o >= this.maxCameraMovePosX && n >= this.maxCameraMovePosY ? (a = 0, i = 0, t.x = this.maxCameraMovePosX, t.y = this.maxCameraMovePosY) : (a = this.speedNum, i = this.speedNum)
                        } else a = this.speedNum, i = this.speedNum;
                        var s = cc.misc.degreesToRadians(this.angle);
                        t.x += Math.floor(-Math.sin(s) * a * e), t.y += Math.floor(Math.cos(s) * i * e), t.x >= -this.maxCameraMovePosX + this.gameWidth / 4 && t.x <= this.maxCameraMovePosX - this.gameWidth / 4 && t.y >= -this.maxCameraMovePosY + this.gameHeight / 4 && t.y <= this.maxCameraMovePosY - this.gameHeight / 4 ? this.carmeraNode.setPosition(t.position) : t.x > -this.maxCameraMovePosX + this.gameWidth / 4 && t.x < this.maxCameraMovePosX - this.gameWidth / 4 && t.y < -this.maxCameraMovePosY + this.gameHeight / 4 ? this.carmeraNode.setPosition(cc.v2(t.x, -this.maxCameraMovePosY + this.gameHeight / 4)) : t.x > -this.maxCameraMovePosX + this.gameWidth / 4 && t.x < this.maxCameraMovePosX - this.gameWidth / 4 && t.y > this.maxCameraMovePosY - this.gameHeight / 4 ? this.carmeraNode.setPosition(cc.v2(t.x, this.maxCameraMovePosY - this.gameHeight / 4)) : t.y > -this.maxCameraMovePosY + this.gameHeight / 4 && t.y < this.maxCameraMovePosY - this.gameHeight / 4 && t.x > this.maxCameraMovePosX - this.gameWidth / 4 ? this.carmeraNode.setPosition(cc.v2(this.maxCameraMovePosX - this.gameWidth / 4, t.y)) : t.y > -this.maxCameraMovePosY + this.gameHeight / 4 && t.y < this.maxCameraMovePosY - this.gameHeight / 4 && t.x < -this.maxCameraMovePosX + this.gameWidth / 4 ? this.carmeraNode.setPosition(cc.v2(-this.maxCameraMovePosX + this.gameWidth / 4, t.y)) : t.y >= this.maxCameraMovePosY - this.gameHeight / 4 && t.x < -this.maxCameraMovePosY + this.gameWidth / 4 ? this.carmeraNode.setPosition(cc.v2(-this.maxCameraMovePosX + this.gameWidth / 4, this.maxCameraMovePosY - this.gameHeight / 4)) : t.y > this.maxCameraMovePosY - this.gameHeight / 4 && t.x > this.maxCameraMovePosY - this.gameWidth / 4 ? this.carmeraNode.setPosition(cc.v2(this.maxCameraMovePosX - this.gameWidth / 4, this.maxCameraMovePosY - this.gameHeight / 4)) : t.y < -this.maxCameraMovePosY + this.gameHeight / 4 && t.x > this.maxCameraMovePosY - this.gameWidth / 4 ? this.carmeraNode.setPosition(cc.v2(this.maxCameraMovePosX - this.gameWidth / 4, -this.maxCameraMovePosY + this.gameHeight / 4)) : t.y < -this.maxCameraMovePosY + this.gameHeight / 4 && t.x < -this.maxCameraMovePosY + this.gameWidth / 4 && this.carmeraNode.setPosition(cc.v2(-this.maxCameraMovePosX + this.gameWidth / 4, -this.maxCameraMovePosY + this.gameHeight / 4)), this.BubbleAction()
                    }
                },
                CameraChangeZoomRatio: function(e, t) {
                    if (e != t) {
                        var a = this.carmeraNode.getChildByName("MoveCamera");
                        a.stopAllActions(), a.getComponent(cc.Camera).zoomRatio;
                        var i = !0;
                        t - e > 0 && (i = !1);
                        var o = Math.abs(t - e),
                            n = Math.floor(o / .01);
                        a.runAction(cc.sequence(cc.callFunc(function() {
                            a.getComponent(cc.Camera).zoomRatio != t && (i ? a.getComponent(cc.Camera).zoomRatio -= .01 : a.getComponent(cc.Camera).zoomRatio += .01)
                        }, this), cc.delayTime(.005)).repeat(n))
                    }
                },
                getEnemyPos: function(e, t) {
                    if (void 0 === t && (t = 0), !this.gameOverFlags) {
                        var a = this.carmeraNode.getChildByName("MoveCamera").getComponent(cc.Camera).zoomRatio,
                            i = this.enemyNode.convertToNodeSpaceAR(this.BGNode.convertToWorldSpaceAR(this.BGArr[0][this.BGNum - 1].position)),
                            o = Math.abs(i.x) - e.width - 400,
                            n = Math.abs(i.y) - e.height - 400,
                            c = s.getRandomNum(-o, o, !1),
                            r = s.getRandomNum(-n, n, !1),
                            h = cc.v2();
                        if (this.firstFlags || (h = cc.v2(c, r)), ++t > 100) {
                            var l = this.playerNode.position,
                                m = this.enemyNode.convertToNodeSpaceAR(this.node.convertToWorldSpaceAR(this.playerNode.position)),
                                d = 0,
                                u = 0;
                            return l.x >= 0 && l.y >= 0 ? (d = -this.gameWidth / a, u = -this.gameHeight / a) : l.x < 0 && l.y >= 0 ? (d = this.gameWidth / a, u = -this.gameHeight / a) : l.x >= 0 && l.y < 0 ? (d = -this.gameWidth / a, u = this.gameHeight / a) : (d = this.gameWidth / a, u = this.gameHeight / a), cc.v2(m.x + d, m.y + u)
                        }
                        if (this.firstFlags) {
                            var g = s.getRandomNum(2 * -this.gameHeight, 2 * this.gameHeight, !1),
                                p = s.getRandomNum(2 * -this.gameHeight, 2 * this.gameHeight, !1);
                            if (h = cc.v2(g, p), s.pDistance(h, cc.v2(0, 0)) < 200) return this.getEnemyPos(e, t)
                        }
                        var f = this.enemyNode.convertToNodeSpaceAR(this.node.convertToWorldSpaceAR(this.playerNode.position));
                        if (s.pDistance(h, f) < (this.gameHeight + e.width) / a) return this.getEnemyPos(e, t);
                        for (var y = 0; y < this.enemyNode.children.length; y++)
                            if (s.pDistance(h, this.enemyNode.children[y].position) < 500) return this.getEnemyPos(e, t);
                        return h
                    }
                },
                getEnemyID: function(e) {
                    var t = s.getRandomNum(0, 100, !1),
                        a = 0;
                    return 1 == e ? a = t < 50 ? 0 : t > 50 && t < 75 ? 1 : 2 : 2 == e ? a = t < 20 ? 0 : t > 25 && t < 50 ? 1 : t > 50 && t < 70 ? 2 : 3 : 3 == e ? a = t < 20 ? 0 : t < 35 ? 1 : t < 40 ? 2 : t < 70 ? 3 : 4 : 4 == e ? a = t < 20 ? 1 : t < 35 ? 2 : t < 40 ? 3 : t > 40 && t < 70 ? 4 : 5 : 5 == e ? t <= 15 ? a = 2 : t <= 30 ? a = 3 : t <= 35 ? a = 4 : t <= 60 ? a = 5 : t <= 90 ? a = 6 : this.jingyuNum < 1 && (a = 7, this.jingyuNum++) : 6 == e ? t <= 15 ? a = 3 : t <= 30 ? a = 4 : t <= 35 ? a = 5 : t <= 65 ? a = 6 : t <= 90 ? this.jingyuNum < 3 ? (a = 7, this.jingyuNum++) : a = 6 : this.jiaoNum < 2 ? (a = 8, this.jiaoNum++) : a = this.jingyuNum < 3 ? 7 : 6 : 7 == e ? t <= 20 ? a = 3 : t <= 25 ? a = 4 : t <= 30 ? a = 5 : t <= 35 ? a = 6 : this.jingyuNum < 5 ? (a = 7, this.jingyuNum++) : this.jiaoNum < 5 ? (a = 8, this.jiaoNum++) : a = s.getRandomNum(3, 4, !0) : 8 == e ? t < 40 ? a = 3 : t < 45 ? a = 4 : t <= 50 ? a = 5 : t <= 55 ? a = 6 : random <= 60 ? this.jingyuNum < 3 && (a = 7, this.jingyuNum++) : this.jiaoNum < 3 ? (a = 8, this.jiaoNum++) : a = s.getRandomNum(4, 5, !0) : a = s.getRandomNum(3, 5, !0), e >= 4 && a == e - 1 ? this.getEnemyID(e) : a
                },
                CreateEnemy: function(e) {
                    for (var t = 0; t < e; t++) {
                        var a;
                        a = t <= .8 * e ? 0 : t > .8 * e && t <= .9 * e ? 1 : 2;
                        var i = cc.instantiate(this.enemyPreArr[a]);
                        this.changeSize(i), i.typeID = a + 1;
                        var o = this.carmeraNode.getChildByName("MoveCamera").getComponent(cc.Camera).zoomRatio;
                        i.speed = (200 - 15 * i.typeID) / o;
                        var n = this.getEnemyPos(i);
                        n ? (this.enemyNode.addChild(i, 1), i.setPosition(n), i.getComponent("enemyJS").active = !0, this.enemyAction(i)) : i.destroy()
                    }
                    this.firstFlags = !1
                },
                updateCreate: function() {
                    this.gameOverFlags || this.CreateSingleEnemy(1, this.playerNode.typeID)
                },
                CreateSingleEnemy: function(e, t) {
                    if (!this.gameOverFlags) {
                        var a = this.enemyNode.children.length,
                            i = this.playerNode.typeID;
                        if (i <= 3) {
                            if (a > 60) return
                        } else if (i >= 4 && i <= 5) {
                            if (a > 50) return
                        } else if (i > 5 && i <= 7) {
                            if (a > 40) return
                        } else if (i > 7 && a > 20) return;
                        for (var o = 0; o < e; o++) {
                            var n = this.getEnemyID(t),
                                s = cc.instantiate(this.enemyPreArr[n]);
                            this.changeSize(s), s.typeID = n + 1;
                            var c = this.carmeraNode.getChildByName("MoveCamera").getComponent(cc.Camera).zoomRatio;
                            s.speed = (200 - 10 * s.typeID) / c;
                            var r = this.getEnemyPos(s);
                            r ? (this.enemyNode.addChild(s, 1), s.setPosition(r), s.getComponent("enemyJS").active = !0, this.enemyAction(s)) : s.destroy()
                        }
                    }
                },
                judgeEnemyPos: function(e) {
                    var t = this.enemyNode.convertToNodeSpaceAR(this.BGNode.convertToWorldSpaceAR(this.BGArr[0][0].position)),
                        a = Math.abs(t.x),
                        i = Math.abs(t.y);
                    e.x > a - this.gameHeight || e.y > i - this.gameHeight || e.x < -a + this.gameHeight || e.y < -i + this.gameHeight ? this.EnemyReturnAction(e) : this.enemyAction(e)
                },
                enemyAction: function(e) {
                    e.stopAllActions();
                    var t = s.getRandomNum(500, 1e3, !0),
                        a = e.position,
                        i = s.getRandomNum(-t, t, !0),
                        o = s.getRandomNum(-t, t, !0),
                        n = cc.v2(a.x + i, a.y + o),
                        c = this.enemyNode.convertToNodeSpaceAR(this.node.convertToWorldSpaceAR(n)),
                        r = Math.atan2(c.y - a.y, c.x - a.x),
                        h = cc.misc.radiansToDegrees(r) - 90,
                        l = e.speed,
                        m = s.pDistance(a, c) / l;
                    e.runAction(cc.sequence(cc.spawn(cc.moveTo(m, c), cc.rotateTo(.3, h)), cc.callFunc(function() {
                        this.judgeEnemyPos(e)
                    }, this)))
                },
                EnemyReturnAction: function(e) {
                    e.stopAllActions();
                    var t = e.speed,
                        a = s.getRandomNum(1e3, 1300, !1),
                        i = a / t,
                        o = Math.atan2(-e.y, -e.x),
                        n = cc.misc.radiansToDegrees(o) - 90;
                    e.runAction(cc.sequence(cc.spawn(cc.moveBy(i, a * Math.cos(o), a * Math.sin(o)), cc.rotateTo(.3, n)), cc.callFunc(function() {
                        this.judgeEnemyPos(e)
                    }, this)))
                },
                ChasePlayer: function(e) {
                    e.stopAllActions();
                    var t = e.position,
                        a = this.playerNode.position,
                        i = Math.atan2(a.y - t.y, a.x - t.x),
                        o = e.speed,
                        n = this.carmeraNode.getChildByName("MoveCamera").getComponent(cc.Camera).zoomRatio,
                        c = s.getRandomNum(100 / n, 200 / n, !1),
                        r = c / o,
                        h = cc.misc.radiansToDegrees(i) - 90;
                    e.runAction(cc.sequence(cc.spawn(cc.moveBy(r, c * Math.cos(i), c * Math.sin(i)), cc.rotateTo(2 * r / 3, h)), cc.callFunc(function() {
                        this.ChasePlayer(e)
                    }, this)))
                },
                EscapePlayer: function(e) {
                    e.stopAllActions();
                    var t = e.position,
                        a = this.playerNode.position,
                        i = Math.atan2(t.y - a.y, t.x - a.x),
                        o = e.speed,
                        n = s.getRandomNum(100, 200, !1),
                        c = n / o,
                        r = cc.misc.radiansToDegrees(i) - 90;
                    e.runAction(cc.sequence(cc.spawn(cc.moveBy(c, n * Math.cos(i), n * Math.sin(i)), cc.rotateTo(.3, r)), cc.callFunc(function() {
                        this.enemyAction(e)
                    }, this)))
                },
                judgeIsChange: function(e) {
                    var t = this;
                    if (this.tempArr.length >= 2)
                        if (this.playerNode.typeID <= e) {
                            this.playerNode.typeID++, this.playerNode.typeID > this.maxTypeID && (this.maxTypeID = this.playerNode.typeID);
                            for (var a = this.playerNode.getChildByName("son").convertToNodeSpaceAR(this.playerNode.convertToWorldSpaceAR(this.myFish.position)), i = function(e) {
                                var i = t.tempArr[e].position,
                                    o = s.pDistance(a, i) / 2e3;
                                t.tempArr[e].runAction(cc.sequence(cc.spawn(cc.moveTo(o, a).easing(cc.easeQuadraticActionOut()), cc.scaleTo(o, 0, 0), cc.callFunc(function() {
                                    if (e == this.tempArr.length - 1) {
                                        for (var t = 0; t < this.tempArr.length; t++) this.tempArr[t].destroy();
                                        this.tempArr.splice(0, this.tempArr.length), this.createLizi(this.myFish, !0), this.ChangeBig()
                                    }
                                }, t)), cc.callFunc(function() {}, t)))
                            }, o = 0; o < this.tempArr.length; o++) i(o)
                        } else this.playerNode.typeID > e && this.tempArr.length >= 3 && this.EatSmallAction2()
                },
                judgePushArr: function(e, t) {
                    1 == e ? (this.kedouArr.push(t), this.tempArr = this.kedouArr, this.judgeIsChange(e)) : 2 == e ? (this.qingwaArr.push(t), this.tempArr = this.qingwaArr, this.judgeIsChange(e)) : 3 == e ? (this.haiguiArr.push(t), this.tempArr = this.haiguiArr, this.judgeIsChange(e)) : 4 == e ? (this.xiaojinyuArr.push(t), this.tempArr = this.xiaojinyuArr, this.judgeIsChange(e)) : 5 == e ? (this.jinliArr.push(t), this.tempArr = this.jinliArr, this.judgeIsChange(e)) : 6 == e ? (this.dianmanArr.push(t), this.tempArr = this.dianmanArr, this.judgeIsChange(e)) : 7 == e ? (this.shayuArr.push(t), this.tempArr = this.shayuArr, this.judgeIsChange(e)) : 8 == e ? (this.jingyuArr.push(t), this.tempArr = this.jingyuArr, this.judgeIsChange(e)) : 9 == e ? (this.jiaoArr.push(t), this.tempArr = this.jiaoArr, this.judgeIsChange(e)) : 10 == e && (this.longArr.push(t), this.tempArr = this.longArr, this.judgeIsChange(e))
                },
                ChangeBig: function() {
                    if (!this.gameOverFlags) {
                        var e = this.carmeraNode.getChildByName("MoveCamera").getComponent(cc.Camera).zoomRatio;
                        this.speedNum += this.addSpeed / e;
                        var t = this.playerNode.typeID;
                        this.removeSmallFish222(), 2 == t ? (this.playerNode.getChildByName("kedou").active = !1, this.playerNode.getChildByName("qingwa").scaleX = 0, this.playerNode.getChildByName("qingwa").scaleY = 0, this.playerNode.getChildByName("qingwa").active = !0, this.myFish = this.playerNode.getChildByName("qingwa")) : 3 == t ? (this.playerNode.getChildByName("qingwa").active = !1, this.playerNode.getChildByName("haigui").scaleX = 0, this.playerNode.getChildByName("haigui").scaleY = 0, this.playerNode.getChildByName("haigui").active = !0, this.CameraChangeZoomRatio(e, .75), this.myFish = this.playerNode.getChildByName("haigui")) : 4 == t ? (this.playerNode.getChildByName("haigui").active = !1, this.playerNode.getChildByName("xiaojinyu").scaleX = 0, this.playerNode.getChildByName("xiaojinyu").scaleY = 0, this.playerNode.getChildByName("xiaojinyu").active = !0, this.myFish = this.playerNode.getChildByName("xiaojinyu"), this.CameraChangeZoomRatio(e, .65)) : 5 == t ? (this.playerNode.getChildByName("xiaojinyu").active = !1, this.playerNode.getChildByName("jinli").scaleX = 0, this.playerNode.getChildByName("jinli").scaleY = 0, this.playerNode.getChildByName("jinli").active = !0, this.CameraChangeZoomRatio(e, .55), this.myFish = this.playerNode.getChildByName("jinli")) : 6 == t ? (this.playerNode.getChildByName("jinli").active = !1, this.playerNode.getChildByName("dianman").scaleX = 0, this.playerNode.getChildByName("dianman").scaleY = 0, this.playerNode.getChildByName("dianman").active = !0, this.myFish = this.playerNode.getChildByName("dianman"), this.CameraChangeZoomRatio(e, .45)) : 7 == t ? (this.playerNode.getChildByName("dianman").active = !1, this.playerNode.getChildByName("shayu").scaleX = 0, this.playerNode.getChildByName("shayu").scaleY = 0, this.playerNode.getChildByName("shayu").active = !0, this.CameraChangeZoomRatio(e, .4), this.myFish = this.playerNode.getChildByName("shayu")) : 8 == t ? (this.playerNode.getChildByName("shayu").active = !1, this.playerNode.getChildByName("jingyu").scaleX = 0, this.playerNode.getChildByName("jingyu").scaleY = 0, this.playerNode.getChildByName("jingyu").active = !0, this.CameraChangeZoomRatio(e, .3), this.myFish = this.playerNode.getChildByName("jingyu")) : 9 == t ? (this.playerNode.getChildByName("jingyu").active = !1, this.playerNode.getChildByName("jiao").scaleX = 0, this.playerNode.getChildByName("jiao").scaleY = 0, this.playerNode.getChildByName("jiao").active = !0, this.CameraChangeZoomRatio(e, .25), this.myFish = this.playerNode.getChildByName("jiao")) : 10 == t && (this.playerNode.getChildByName("jiao").active = !1, this.SummonDragonAction()), t < 10 && this.myFish.runAction(cc.sequence(cc.scaleTo(.1, this.fishScaleX[t - 1], this.fishScaleY[t - 1]).easing(cc.easeBackOut()), cc.callFunc(function() {}, this)))
                    }
                },
                EatSmallAction2: function() {
                    var e = this;
                    if (this.tempArr.length >= 3) {
                        var t = function() {
                            var t = e.tempArr[0].typeID;
                            if (9 == t) return {
                                v: void 0
                            };
                            var a = cc.instantiate(e.newFishPreArr[t]);
                            a.typeID = t + 1, e.changeSize(a);
                            var i = a.scaleX,
                                o = a.scaleY,
                                n = e.playerNode.getChildByName("son"),
                                c = e.getSmallFishPos(a, e.myFish);
                            a.scaleX = 0, a.scaleY = 0, n.addChild(a, 100), a.setPosition(c);
                            for (var r = function(n) {
                                var r = s.pDistance(c, e.tempArr[n].position) / 2e3;
                                e.tempArr[n].runAction(cc.sequence(cc.spawn(cc.moveTo(r, c).easing(cc.easeQuadraticActionOut()), cc.callFunc(function() {
                                    if (n == this.tempArr.length - 1) {
                                        for (var e = 0; e < this.tempArr.length; e++) this.tempArr[e].destroy();
                                        this.tempArr.splice(0, this.tempArr.length), this.createLizi(a, !1), a.runAction(cc.sequence(cc.scaleTo(.1, i, o).easing(cc.easeQuarticActionOut()), cc.callFunc(function() {
                                            a.zIndex = 50 * (10 - t - 1), this.judgePushArr(a.typeID, a)
                                        }, this)))
                                    }
                                }, e)), cc.callFunc(function() {}, e)))
                            }, h = 0; h < e.tempArr.length; h++) r(h)
                        }();
                        if ("object" == typeof t) return t.v
                    }
                },
                getSmallFishPos: function(e, t, a) {
                    void 0 === a && (a = 0), a++;
                    var i, o = cc.v2(),
                        n = this.playerNode.getChildByName("son"),
                        c = n.convertToNodeSpaceAR(n.parent.convertToWorldSpaceAR(t.position));
                    i = Math.random() > .5 ? s.getRandomNum(-t.width / 2 * t.scaleX - e.width / 2 * e.scaleX, -t.width / 2 * t.scaleX - e.width / 4 * e.scaleX, !1) : s.getRandomNum(t.width / 2 * t.scaleX + e.width / 4 * e.scaleX, t.width / 2 * t.scaleX + e.width / 2 * e.scaleX, !1);
                    var r = s.getRandomNum(-t.height * t.scaleY, -e.height / 3 * e.scaleY, !1),
                        h = this.carmeraNode.getChildByName("MoveCamera").getComponent(cc.Camera).zoomRatio;
                    if (o = cc.v2(c.x + i * h, c.y + r * h), a > 100) {
                        var l = s.getRandomNum(.8, 1.3, !1),
                            m = i * l,
                            d = r * l;
                        return cc.v2(cc.v2(c.x + m * h, c.y + d * h))
                    }
                    for (var u = 0; u < n.children.length; u++)
                        if (s.pDistance(o, n.children[u].position) < e.width / 2 * e.scaleX) return this.getSmallFishPos(e, t, a);
                    return o
                },
                EatSmallAction: function(e, t) {
                    if (!this.gameOverFlags) {
                        var a = e.typeID;
                        8 == e.type && this.jingyuNum--, 9 == e.type && this.jiaoNum--;
                        var i = this.getSmallFishPos(e, t);
                        e.destroy(), cc.audioEngine.play(this.eatMusic, !1, 1);
                        var o = cc.instantiate(this.newFishPreArr[a - 1]);
                        o.typeID = a, this.changeSize(o);
                        var n = o.scaleX,
                            s = o.scaleY;
                        this.playerNode.getChildByName("son").addChild(o, 100), o.setPosition(i), o.scaleX = 0, o.scaleY = 0, o.runAction(cc.sequence(cc.spawn(cc.scaleTo(.1, n, s).easing(cc.easeQuadraticActionOut()), cc.callFunc(function() {
                            o.zIndex = 50 * (10 - a), this.judgePushArr(a, o)
                        }, this)), cc.callFunc(function() {}, this))), this.CreateSingleEnemy(1, this.playerNode.typeID)
                    }
                },
                JudgeSmallFish: function() {
                    this.myFish.active = !1, this.playerNode.getChildByName("son").children.length > 0 ? (cc.audioEngine.play(this.HurtMusic, !1, 1), this.chooseBiggerFish()) : this.DieAction()
                },
                chooseBiggerFish: function() {
                    if (!this.gameOverFlags) {
                        var e = cc.instantiate(this.bloodPre);
                        this.liziNode.addChild(e, 1e3);
                        var t = this.playerNode.typeID;
                        2 == t || 3 == t ? ToolsJs.setTexture(e, "blood2") : ToolsJs.setTexture(e, "blood" + t);
                        var a = 100 + 25 * t;
                        e.width = a, e.height = a;
                        var i = this.liziNode.convertToNodeSpaceAR(this.node.convertToWorldSpaceAR(this.playerNode.position));
                        e.scaleX = 0, e.scaleY = 0, e.setPosition(i), e.runAction(cc.sequence(cc.scaleTo(.5, 1.3, 1.3).easing(cc.easeSineOut()), cc.fadeOut(.3), cc.callFunc(function() {}, this), cc.removeSelf()));
                        for (var o = this.playerNode.getChildByName("son"), n = this.myFish.angle, c = this.carmeraNode.getChildByName("MoveCamera").getComponent(cc.Camera).zoomRatio, r = o.children[0].typeID, h = this.playerNode.typeID, l = 0, m = 0; m < o.children.length; m++) o.children[m].typeID > r && (r = o.children[m].typeID, l = m);
                        var d = this.node.convertToNodeSpaceAR(o.convertToWorldSpaceAR(o.children[l].position));
                        d.x < -this.maxCameraMovePosX ? d.x = -this.maxCameraMovePosX : d.x > this.maxCameraMovePosX && (d.x = this.maxCameraMovePosX), d.y > this.maxCameraMovePosY ? d.y = this.maxCameraMovePosY : d.y < -this.maxCameraMovePosY && (d.y = this.maxCameraMovePosY);
                        var u = this.playerNode.position,
                            g = s.pDistance(d, u) / 1e3;
                        this.playerNode.stopAllActions(), this.playerNode.runAction(cc.sequence(cc.spawn(cc.moveTo(g, d), cc.callFunc(function() {
                            var e = this;
                            1 == r ? (ToolsJs.removeNodeForArr(this.kedouArr, o.children[l]), this.tempArr = this.kedouArr, this.myFish = this.playerNode.getChildByName("kedou"), Math.abs(c - 1) > .05 && this.CameraChangeZoomRatio(c, 1)) : 2 == r ? (ToolsJs.removeNodeForArr(this.qingwaArr, o.children[l]), this.tempArr = this.qingwaArr, this.myFish = this.playerNode.getChildByName("qingwa"), Math.abs(c - 1) > .05 && this.CameraChangeZoomRatio(c, 1)) : 3 == r ? (ToolsJs.removeNodeForArr(this.haiguiArr, o.children[l]), this.tempArr = this.haiguiArr, this.myFish = this.playerNode.getChildByName("haigui"), Math.abs(c - .75) > .05 && this.CameraChangeZoomRatio(c, .75)) : 4 == r ? (ToolsJs.removeNodeForArr(this.xiaojinyuArr, o.children[l]), this.tempArr = this.xiaojinyuArr, this.myFish = this.playerNode.getChildByName("xiaojinyu"), Math.abs(c - .65) > .05 && this.CameraChangeZoomRatio(c, .65)) : 5 == r ? (ToolsJs.removeNodeForArr(this.jinliArr, o.children[l]), this.tempArr = this.jinliArr, this.myFish = this.playerNode.getChildByName("jinli"), Math.abs(c - .55) > .05 && this.CameraChangeZoomRatio(c, .55)) : 6 == r ? (ToolsJs.removeNodeForArr(this.dianmanArr, o.children[l]), this.tempArr = this.dianmanArr, this.myFish = this.playerNode.getChildByName("dianman"), Math.abs(c - .45) > .05 && this.CameraChangeZoomRatio(c, .45)) : 7 == r ? (ToolsJs.removeNodeForArr(this.shayuArr, o.children[l]), this.tempArr = this.shayuArr, this.myFish = this.playerNode.getChildByName("shayu"), Math.abs(c - .4) > .05 && this.CameraChangeZoomRatio(c, .4)) : 8 == r && (ToolsJs.removeNodeForArr(this.jingyuArr, o.children[l]), this.tempArr = this.shayuArr, this.myFish = this.playerNode.getChildByName("jingyu"), Math.abs(c - .3) > .05 && this.CameraChangeZoomRatio(c, .3)), this.playerNode.typeID = r, o.removeChild(o.children[l]), this.myFish.active = !0, this.myFish.scaleX = this.fishScaleX[r - 1], this.myFish.scaleY = this.fishScaleY[r - 1], this.speedNum += (this.playerNode.typeID - h) * this.addSpeed / 2 / c, this.myFish.angle = n, this.scheduleOnce(function() {
                                e.gameOverFlags
                            }, .1)
                        }, this)), cc.callFunc(function() {}, this)))
                    }
                },
                createSmallFish: function(e) {
                    var t;
                    t = e < 8 ? s.getRandomNum(0, e - 1, !0) : s.getRandomNum(1, 7, !0);
                    var a = cc.instantiate(this.enemyPreArr[t]);
                    this.changeSize(a), a.typeID = t + 1;
                    var i = this.carmeraNode.getChildByName("MoveCamera").getComponent(cc.Camera).zoomRatio;
                    a.speed = 100 / i;
                    var o = this.getEnemyPos(a);
                    o ? (this.enemyNode.addChild(a, 1), a.setPosition(o), a.getComponent("enemyJS").active = !0, this.enemyAction(a)) : a.destroy()
                },
                removeSomeBigFish222: function() {
                    var e = this;
                    if (!(this.gameOverFlags || this.playerNode.typeID <= 2)) {
                        for (var t = this.enemyNode.convertToNodeSpaceAR(this.node.convertToWorldSpaceAR(this.playerNode.position)), a = this.carmeraNode.getChildByName("MoveCamera").getComponent(cc.Camera).zoomRatio, i = [], o = 0; o < this.enemyNode.children.length; o++) this.enemyNode.children[o].typeID >= this.playerNode.typeID + 3 && i.push(this.enemyNode.children[o]);
                        for (var n = function(o) {
                            var n = i[o];
                            n.runAction(cc.sequence(cc.delayTime(.05 * o), cc.callFunc(function(e) {
                                if (s.pDistance(t, e.position) > (this.gameHeight + n.height / 2) / a && Math.random() < .7) {
                                    if (this.gameOverFlags) return;
                                    this.enemyNode.removeChild(n), this.createSmallFish(this.playerNode.typeID)
                                }
                            }, e)))
                        }, c = 0; c < i.length; c++) n(c)
                    }
                },
                removeSomeBigFish: function() {
                    if (!this.gameOverFlags) {
                        for (var e = this.enemyNode.convertToNodeSpaceAR(this.node.convertToWorldSpaceAR(this.playerNode.position)), t = this.carmeraNode.getChildByName("MoveCamera").getComponent(cc.Camera).zoomRatio, a = [], i = 0; i < this.enemyNode.children.length; i++) this.enemyNode.children[i].typeID >= this.playerNode.typeID + 3 && a.push(this.enemyNode.children[i]);
                        for (var o = 0; o < a.length; o++)
                            if (s.pDistance(e, a[o].position) > (this.gameHeight / 2 + a[o].height / 2) / t) return 8 == a[o].typeID && this.jingyuNum--, 9 == a[o].typeID && this.jiaoNum--, void this.enemyNode.removeChild(a[o])
                    }
                },
                removeSmallFish222: function() {
                    var e = this;
                    if (!this.gameOverFlags) {
                        var t = this.enemyNode.convertToNodeSpaceAR(this.node.convertToWorldSpaceAR(this.playerNode.position)),
                            a = this.carmeraNode.getChildByName("MoveCamera").getComponent(cc.Camera).zoomRatio,
                            i = [];
                        if (!(this.playerNode.typeID >= 5)) {
                            for (var o = 0; o < this.enemyNode.children.length; o++) this.enemyNode.children[o].typeID <= this.playerNode.typeID - 3 && i.push(this.enemyNode.children[o]);
                            if (i.length > 0)
                                for (var n = function(o) {
                                    var n = i[o];
                                    n.runAction(cc.sequence(cc.delayTime(.05 * o), cc.callFunc(function(e) {
                                        if (s.pDistance(t, e.position) > (this.gameHeight + n.height / 2) / a && Math.random() < .5) {
                                            if (this.gameOverFlags) return;
                                            this.enemyNode.removeChild(n), this.CreateSingleEnemy(1, this.playerNode.typeID)
                                        }
                                    }, e)))
                                }, c = 0; c < i.length; c++) n(c)
                        }
                    }
                },
                removeSmallFish: function() {
                    if (!this.gameOverFlags) {
                        for (var e = this.enemyNode.convertToNodeSpaceAR(this.node.convertToWorldSpaceAR(this.playerNode.position)), t = this.carmeraNode.getChildByName("MoveCamera").getComponent(cc.Camera).zoomRatio, a = [], i = 0; i < this.enemyNode.children.length; i++) {
                            var o = this.enemyNode.children[i].typeID;
                            this.playerNode.typeID >= 4 && o == this.playerNode.typeID && a.push(this.enemyNode.children[i])
                        }
                        if (a.length > 0)
                            for (var n = 0; n < a.length; n++)
                                if (s.pDistance(e, a[n].position) > (this.gameHeight / 2 + a[n].height / 2) / t) return Math.random(), this.enemyNode.removeChild(a[n]), void this.CreateSingleEnemy(1, this.playerNode.typeID)
                    }
                },
                createLizi: function(e, t) {
                    var a = cc.v2(),
                        i = 0,
                        o = 0;
                    t ? (o = this.myFish.height / 2 * this.myFish.scaleY, a = this.myFish.position, i = this.playerNode.typeID) : (o = e.height / 2 * e.scaleY, a = this.playerNode.convertToNodeSpaceAR(e.parent.convertToWorldSpaceAR(e.position)), i = e.typeID);
                    for (var n = this.carmeraNode.getChildByName("MoveCamera").getComponent(cc.Camera).zoomRatio, c = s.getRandomNum(15, 25, !0), r = s.getRandomNum(0, .05, !1), h = 0; h < c; h++) {
                        var l;
                        l = o < 100 ? s.getRandomNum(1, 150, !1) : s.getRandomNum(1, 1.3 * o, !1);
                        var m = cc.instantiate(this.liziPre);
                        this.playerNode.addChild(m, 100);
                        var d = s.getRandomNum(150, 250, !1);
                        m.scaleX = 0, m.scaleY = 0, m.opacity = d, ToolsJs.setTexture(m, "fishlizi" + i), m.setPosition(a);
                        var u = s.getRandomNum(.4 / n, 1.3 / n),
                            g = 360 * Math.random(),
                            p = s.getCircumferencePos(a, l, g),
                            f = s.pDistance(a, p) / s.getRandomNum(300, 500, !0);
                        s.getRandomNum(30, 180, !0), m.runAction(cc.sequence(cc.delayTime(r), cc.spawn(cc.moveTo(f, p).easing(cc.easeQuarticActionOut()), cc.scaleTo(f, u, u)), cc.fadeOut(.5), cc.callFunc(function() {}, this), cc.removeSelf()))
                    }
                    for (var y = s.getRandomNum(10, 20, !0), v = 0; v < y; v++) {
                        var N;
                        N = o < 100 ? s.getRandomNum(1, 200, !1) : s.getRandomNum(1, 1.5 * o, !1);
                        var S = cc.instantiate(this.starPre),
                            C = s.getRandomNum(1, 2, !0);
                        ToolsJs.setTexture(S, "star" + C), this.playerNode.addChild(S, 100);
                        var T = s.getRandomNum(150, 250, !1);
                        S.opacity = T, S.scaleX = 0, S.scaleY = 0, S.setPosition(a);
                        var A = s.getRandomNum(.8 / n, 1.5 / n),
                            x = 360 * Math.random(),
                            M = s.getCircumferencePos(a, N, x),
                            P = s.pDistance(a, M) / s.getRandomNum(300, 500, !0),
                            F = s.getRandomNum(180, 360, !0);
                        S.runAction(cc.sequence(cc.delayTime(r), cc.spawn(cc.moveTo(P, M).easing(cc.easeQuarticActionOut()), cc.scaleTo(P, A, A)), cc.spawn(cc.rotateBy(.5, F), cc.fadeOut(.5)), cc.callFunc(function() {}, this), cc.removeSelf()))
                    }
                },
                createMouseRipple: function(e) {
                    var t = cc.instantiate(this.ripplePre);
                    this.liziNode.addChild(t, 100), t.setPosition(e), t.scaleX = .5, t.scaleY = .375, t.opacity = 200;
                    var a = s.getRandomNum(.5, 2);
                    t.runAction(cc.sequence(cc.spawn(cc.scaleTo(.2, a, 3 * a / 4), cc.fadeOut(.4)), cc.removeSelf()))
                },
                EatingEffectAction: function(e) {
                    var t = cc.instantiate(this.bloodPre);
                    this.liziNode.addChild(t);
                    var a = e.typeID;
                    2 == a || 3 == a ? ToolsJs.setTexture(t, "blood2") : ToolsJs.setTexture(t, "blood" + a);
                    var i;
                    i = e.scaleX * e.width >= e.scaleY * e.height ? e.scaleX * e.width : e.scaleY * e.height, t.width = i, t.height = i;
                    var o = e.position,
                        n = this.liziNode.convertToNodeSpaceAR(this.enemyNode.convertToWorldSpaceAR(o));
                    t.scaleX = 0, t.scaleY = 0, t.setPosition(n), t.runAction(cc.sequence(cc.scaleTo(.5, 1.3, 1.3).easing(cc.easeSineOut()), cc.fadeOut(.3), cc.removeSelf()))
                },
                EatingEffectAction2: function(e) {
                    var t = cc.instantiate(this.bloodPre);
                    this.liziNode.addChild(t);
                    var a = e.typeID;
                    2 == a || 3 == a ? ToolsJs.setTexture(t, "blood2") : ToolsJs.setTexture(t, "blood" + a);
                    var i;
                    i = e.scaleX * e.width >= e.scaleY * e.height ? e.scaleX * e.width : e.scaleY * e.height, t.width = i, t.height = i;
                    var o = e.position,
                        n = this.playerNode.convertToNodeSpaceAR(this.playerNode.getChildByName("son").convertToWorldSpaceAR(o)),
                        s = this.liziNode.convertToNodeSpaceAR(this.playerNode.convertToWorldSpaceAR(n));
                    t.scaleX = 0, t.scaleY = 0, t.setPosition(s), t.runAction(cc.sequence(cc.scaleTo(.5, 1.3, 1.3).easing(cc.easeSineOut()), cc.fadeOut(.3), cc.removeSelf()))
                },
                StoneFadeInAction: function() {
                    var e = this.carmeraNode.getChildByName("MoveCamera").getComponent(cc.Camera).zoomRatio,
                        t = this.playerNode.position,
                        a = cc.find("Canvas/RotLiziNode");
                    a.setPosition(this.playerNode.position);
                    for (var i = s.getRandomNum(50, 100, !1), o = Math.floor(i / 2), n = 0; n < i; n++) {
                        var c = null;
                        if (n < o) {
                            c = cc.instantiate(this.starPre);
                            var r = s.getRandomNum(1, 2, !0);
                            ToolsJs.setTexture(c, "star" + r)
                        } else c = cc.instantiate(this.liziPre), ToolsJs.setTexture(c, "fishlizi10");
                        a.addChild(c, 200), c.scaleX = 0, c.scaleY = 0;
                        var h = s.getRandomNum(50 / e, this.gameWidth / 2 / e, !1),
                            l = 360 * Math.random(),
                            m = s.getCircumferencePos(t, h, l),
                            d = a.convertToNodeSpaceAR(this.node.convertToWorldSpaceAR(m)),
                            u = s.getRandomNum(1 / e, 2 / e, !1),
                            g = (s.getRandomNum(50, 100, !1), s.getRandomNum(180, 360, !1)),
                            p = s.getRandomNum(.3, .6, !1),
                            f = a.convertToNodeSpaceAR(this.node.convertToWorldSpaceAR(t));
                        c.setPosition(f);
                        var y = cc.v2((f.x + d.x) / 2, (f.y + d.y) / 3 * 2),
                            v = s.getRandomNum(.05, .2, !1),
                            N = s.getRandomNum(.4, .8, !1),
                            S = [f, y, d];
                        c.runAction(cc.sequence(cc.delayTime(v), cc.spawn(cc.bezierTo(N, S).easing(cc.easeQuadraticActionOut()), cc.scaleTo(N, u, u).easing(cc.easeBounceOut())), cc.spawn(cc.rotateBy(p, g), cc.fadeOut(p)), cc.callFunc(function() {}, this), cc.removeSelf()))
                    }
                    this.myFish.opacity = 0, this.stoneNode.scaleX = 0, this.stoneNode.scaleY = 0, this.stoneNode.active = !0, this.stoneNode.zIndex = 50;
                    var C = this.stoneNode.getChildByName("stone1"),
                        T = this.stoneNode.getChildByName("stone2"),
                        A = this.stoneNode.getChildByName("stone3");
                    this.stoneNode.runAction(cc.sequence(cc.delayTime(.15), cc.spawn(cc.scaleTo(.5, .8 * this.SizeScale, .8 * this.SizeScale).easing(cc.easeCircleActionInOut()), cc.callFunc(function() {
                        this.carmeraNode.runAction(cc.sequence(cc.moveBy(.05, 5, 5), cc.moveBy(.05, -5, -5)).repeat(10))
                    }, this)), cc.delayTime(.1), cc.callFunc(function() {
                        var e = this,
                            t = cc.instantiate(this.blackLayerPre);
                        this.node.addChild(t, 10), t.active = !0, t.opacity = 200, t.setPosition(cc.v2(0, 0)), this.scheduleOnce(function() {
                            e.LightAction(0, .3), e.Wu.getComponent(cc.Animation).play("wu"), e.stoneNode.getChildByName("light0").active = !0
                        }, .3), C.runAction(cc.sequence(cc.rotateBy(1.5, 360).easing(cc.easeQuadraticActionOut()), cc.delayTime(.2), cc.callFunc(function() {
                            C.getChildByName("light1").active = !0, C.getChildByName("light2").active = !0
                        }, this))), T.runAction(cc.sequence(cc.delayTime(1.7), cc.rotateBy(1, -360).easing(cc.easeQuadraticActionOut()), cc.delayTime(.2), cc.callFunc(function() {
                            T.getChildByName("light3").active = !0
                        }, this))), A.runAction(cc.sequence(cc.delayTime(2.9), cc.callFunc(function() {
                            var e = this;
                            A.getChildByName("light4").active = !0, this.scheduleOnce(function() {
                                e.CreatePanLong()
                            }, .2)
                        }, this)))
                    }, this)))
                },
                SummonDragonAction: function() {
                    var e = this;
                    this.gameOverFlags = !0, this.speed = 0, this.speedNum = 0, this.enemyNode.removeAllChildren(), this.enemyNode.destroy();
                    for (var t = this.playerNode.getChildByName("son"), a = t.convertToNodeSpaceAR(this.playerNode.convertToWorldSpaceAR(this.myFish.position)), i = 0; i < t.children.length; i++) {
                        var o = s.getRandomNum(50, 100, !1),
                            n = Math.atan2(a.y - t.children[i].y, a.x - t.children[i].x),
                            c = cc.misc.radiansToDegrees(n) + 90;
                        t.children[i].runAction(cc.sequence(cc.spawn(cc.jumpTo(.5, a, o, 1).easing(cc.easeQuadraticActionOut()), cc.scaleTo(.5, 0, 0), cc.rotateTo(0, 1, c)), cc.callFunc(function() {}, this), cc.removeSelf()))
                    }
                    this.scheduleOnce(function() {
                        e.StoneFadeInAction()
                    }, 1)
                },
                CreatePanLong: function() {
                    var e = this;
                    this.setHisSocre(this.maxTypeID);
                    var t = cc.instantiate(this.PanlongPre);
                    this.node.addChild(t, 100), t.opacity = 0, t.scaleX = .9 * this.SizeScale, t.scaleY = .9 * this.SizeScale;
                    var n = this.stoneNode.position,
                        c = cc.v2(-50 * this.SizeScale, n.y - 400 * this.SizeScale),
                        r = cc.v2(-50 * this.SizeScale, c.y - this.gameHeight / 4);
                    t.setPosition(r);
                    var h = this,
                        l = cc.instantiate(this.lightPre);
                    this.node.addChild(l, 30), l.scaleX = 0, l.scaleY = 0, l.setPosition(this.stoneNode.position), t.runAction(cc.sequence(cc.spawn(cc.moveTo(.5, c), cc.fadeIn(.3), cc.callFunc(function() {
                        this.LightAction(0, .5);
                        var e = t.getChildByName("panlong").getComponent(dragonBones.ArmatureDisplay);
                        e.timeScale = 1.5, e.playAnimation("newAnimation", 1)
                    }, this)), cc.delayTime(.3), cc.callFunc(function() {
                        l.runAction(cc.sequence(cc.scaleTo(.3, 1, 1), cc.callFunc(function() {}, this)))
                    }, this), cc.delayTime(.6), cc.callFunc(function() {
                        var e = this,
                            t = cc.instantiate(this.mainBtnPre);
                        t.scaleX = .7 * this.SizeScale, t.scaleY = .7 * this.SizeScale, this.node.addChild(t, 5e3), t.opacity = 0, t.setPosition(cc.v2(-this.gameWidth / 2 + this.gameWidth / 8, this.gameHeight / 2 - this.gameWidth / 8)), t.runAction(cc.fadeIn(.3)), t.on(cc.Node.EventType.TOUCH_START, function() {}), t.on(cc.Node.EventType.TOUCH_END, function() {
                            console.log("MoreGame"), window.location.href = o.moreGameUrl
                        });
                        var n = cc.instantiate(this.replayButtonPre);
                        this.node.addChild(n, 5e3), n.scaleX = 0, n.scaleY = 0, n.setPosition(cc.v2(0, -this.stoneNode.y - 200 * this.Hscale)), n.runAction(cc.scaleTo(.5, .6 * this.SizeScale, .6 * this.SizeScale).easing(cc.easeBackOut()), cc.callFunc(function() {}, this));
                        var s = cc.find("Canvas/nameLabel");
                        s.zIndex = 6001, s.zIndex = 6e3, s.setPosition(cc.v2(this.stoneNode.x + 150 * this.Wscale, this.stoneNode.y - 200 * this.Hscale)), this.nameLabel.string = renderConfig.getStrForType("name_10");
                        var c = cc.find("Canvas/winLabel");
                        c.zIndex = 6e3;
                        var r = cc.v2(n.x, n.y + n.height / 2 * .7 * this.Hscale + 50 * this.Hscale);
                        c.setPosition(cc.v2(r.x, r.y - 50 * this.SizeScale)), c.runAction(cc.sequence(cc.spawn(cc.fadeIn(.3), cc.moveTo(.3, r)), cc.callFunc(function() {}, this))), this.scheduleOnce(function() {
                            h.canTouchReplay = !0, n.runAction(cc.sequence(cc.delayTime(2), cc.scaleTo(.3, .7 * e.SizeScale).easing(cc.easeSineInOut()), cc.scaleTo(.3, .6 * e.SizeScale).easing(cc.easeSineInOut()), cc.rotateTo(.1, 15).easing(cc.easeSineInOut()), cc.rotateTo(.2, -15).easing(cc.easeSineInOut()), cc.rotateTo(.1, 15).easing(cc.easeSineInOut()), cc.rotateTo(.2, -15).easing(cc.easeSineInOut()), cc.rotateTo(.1, 0).easing(cc.easeSineInOut()))).repeatForever(), n.on(cc.Node.EventType.TOUCH_START, function() {}), n.on(cc.Node.EventType.TOUCH_END, function() {
                                h.canTouchReplay && (cc.eventManager.removeAllListeners(), a.GAME_OVER_BOOL = !0, a.gameScore = 0, a.publicGameBool || adBreak({
                                    type: "next",
                                    name: "restart-game"
                                }), console.log("loadScene"), i.loadingScene("MainGameScene"))
                            })
                        }, .8)
                    }, this))), this.scheduleOnce(function() {
                        e.stoneNode.runAction(cc.sequence(cc.spawn(cc.scaleBy(.5, .8 * e.SizeScale, .8 * e.SizeScale), cc.moveTo(.5, 0, e.gameHeight / 6).easing(cc.easeBackOut()), cc.callFunc(function() {
                            l.runAction(cc.sequence(cc.moveTo(.5, 0, this.gameHeight / 6).easing(cc.easeBackOut()), cc.callFunc(function() {}, this)))
                        }, e)), cc.callFunc(function() {}, e))), e.scheduleOnce(function() {
                            l.runAction(cc.sequence(cc.rotateBy(10, 360), cc.callFunc(function() {}, e)).repeatForever())
                        }, .5), t.runAction(cc.sequence(cc.spawn(cc.scaleTo(.5, .9 * e.SizeScale, .9 * e.SizeScale), cc.moveTo(.5, -50 * e.SizeScale, e.gameHeight / 6 - 370 * e.SizeScale).easing(cc.easeBackOut())), cc.callFunc(function() {}, e)))
                    }, 1.3), this.scheduleOnce(function() {
                        var t = e.stoneNode.getChildByName("stone1"),
                            a = e.stoneNode.getChildByName("stone2"),
                            i = e.stoneNode.getChildByName("stone3");
                        t.runAction(cc.sequence(cc.rotateBy(2, 10), cc.callFunc(function() {}, e)).repeatForever()), a.runAction(cc.sequence(cc.rotateBy(1, -10), cc.callFunc(function() {}, e)).repeatForever()), i.runAction(cc.sequence(cc.rotateBy(.5, 10), cc.callFunc(function() {}, e)).repeatForever())
                    }, 1.8), this.scheduleOnce(function() {
                        var a = s.getRandomNum(0, 30, !1);
                        t.runAction(cc.sequence(cc.spawn(cc.sequence(cc.moveBy(1, 0, -a), cc.moveBy(1, 0, a)), cc.callFunc(function() {
                            var e = t.getChildByName("panlong").getComponent(dragonBones.ArmatureDisplay);
                            e.timeScale = .2, e.playAnimation("newAnimation_复制1", 0)
                        }, e)), cc.callFunc(function() {}, e)).repeatForever())
                    }, 1)
                },
                LightAction: function(e, t) {
                    this.lightFlags = !1, this.light1.scaleX = .9, this.light1.scaleY = .9, this.light2.scaleX = .9, this.light2.scaleY = .9, this.light1.opacity = 255, this.light2.opacity = 255, this.light1.runAction(cc.sequence(cc.delayTime(e), cc.fadeIn(.1), cc.fadeOut(.3), cc.callFunc(function() {
                        this.lightFlags = !0
                    }, this))), this.light2.runAction(cc.sequence(cc.delayTime(t), cc.fadeIn(.1), cc.fadeOut(.3), cc.callFunc(function() {
                        this.lightFlags = !0
                    }, this))), this.lightjudeTime = s.getRandomNum(3, 6, !1)
                },
                BubbleAction: function() {
                    if (!this.gameOverFlags) {
                        var e = cc.instantiate(this.BubblePre);
                        s.getRandomNum(1, 3, !0), this.liziNode.addChild(e);
                        var t = this.liziNode.convertToNodeSpaceAR(this.playerNode.convertToWorldSpaceAR(this.myFish.position));
                        e.setPosition(t), e.scaleX = 0, e.scaleY = 0;
                        var a = this.playerNode.angle + 90,
                            i = cc.misc.degreesToRadians(a),
                            o = s.getRandomNum(.5, 1, !1),
                            n = s.getRandomNum(50, 100, !1),
                            c = s.getRandomNum(.2, .5, !1),
                            r = s.getRandomNum(-50, 50, !1);
                        e.angle = 360 * Math.random(), e.runAction(cc.sequence(cc.spawn(cc.moveBy(c, -n * Math.cos(i) + r, -n * Math.sin(i) + r), cc.scaleTo(c, o, o)), cc.fadeOut(.2), cc.removeSelf()))
                    }
                },
                WaterAction: function() {
                    if (!this.gameOverFlags)
                        for (var e = s.getRandomNum(2, 3, !0), t = s.getRandomNum(.2, .5, !1), a = s.getRandomNum(-.3, .3), i = this.carmeraNode.position, o = s.getRandomNum(-this.gameWidth, this.gameWidth, !1), n = s.getRandomNum(-this.gameHeight, this.gameHeight, !1), c = cc.v2(i.x + o, i.y + n), r = this.liziNode.convertToNodeSpaceAR(this.node.convertToWorldSpaceAR(c)), h = 0; h < e; h++) {
                            var l = cc.instantiate(this.bowenPre);
                            this.liziNode.addChild(l, 1), l.setPosition(r);
                            var m = l.scaleX,
                                d = l.scaleY;
                            l.scaleX = 0, l.scaleY = 0, l.runAction(cc.sequence(cc.delayTime(t * h), cc.scaleTo(1, m + a, d + a), cc.fadeOut(.3), cc.removeSelf()))
                        }
                },
                DieAction: function() {
                    this.speed = 0, this.gameOverFlags = !0, cc.audioEngine.play(this.failMusic, !1, 1), this.playerNode.opacity = 0;
                    var e = cc.instantiate(this.bloodPre);
                    this.liziNode.addChild(e, 1e3);
                    var t = this.playerNode.typeID;
                    2 == t || 3 == t ? ToolsJs.setTexture(e, "blood2") : ToolsJs.setTexture(e, "blood" + t);
                    var a = 100 + 25 * t;
                    e.width = a, e.height = a;
                    var i = this.liziNode.convertToNodeSpaceAR(this.node.convertToWorldSpaceAR(this.playerNode.position));
                    e.scaleX = 0, e.scaleY = 0, e.setPosition(i), e.runAction(cc.sequence(cc.scaleTo(.5, 1.3, 1.3).easing(cc.easeSineOut()), cc.fadeOut(.3), cc.callFunc(function() {
                        this.playerNode.destroy(), this.gameEnd()
                    }, this), cc.removeSelf()))
                },
                updateFishRotate: function(e, t, a) {
                    var i = e.angle % 360;
                    i = e.angle < 0 ? 360 - Math.abs(i) : i;
                    var o = t < 0 ? 360 - Math.abs(t) : t;
                    Math.abs(i - o) > a && Math.abs(i - o) < 360 - a ? Math.abs(i - o) > 180 ? i - o > 180 ? e.angle += a : e.angle -= a : i >= o ? e.angle -= a : e.angle += a : e.angle = t
                },
                setHisSocre: function(e) {
                    cc.sys.localStorage.setItem("ZhaoHuanShenLong_12WS", e)
                },
                addTouchEvents: function() {
                    var e = this;
                    this.node.on(cc.Node.EventType.TOUCH_START, function(t) {
                        if (a.GAME_OVER_BOOL && a.noTouchBool && e.touchBeginFlags) {
                            e.touchBeginFlags = !1;
                            var i = t.getLocation();
                            return e.node.convertToNodeSpaceAR(i), !0
                        }
                    }, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, this.on_touch_move, this), this.node.on(cc.Node.EventType.TOUCH_END, this.on_touch_end, this)
                },
                on_touch_move: function(e) {
                    if (!this.gameOverFlags && this.canMoveFlags) {
                        this.speed = this.speedNum;
                        var t = e.getLocation(),
                            a = this.node.convertToNodeSpaceAR(t),
                            i = this.carmeraNode.position,
                            o = cc.v2(a.x + i.x, a.y + i.y),
                            n = this.liziNode.convertToNodeSpaceAR(this.node.convertToWorldSpaceAR(o));
                        this.createMouseRipple(n)
                    }
                },
                on_touch_end: function(e) {
                    if (!this.gameOverFlags) {
                        this.touchBeginFlags = !0;
                        var t = e.getLocation();
                        this.node.convertToNodeSpaceAR(t)
                    }
                },
                update: function(e) {
                    if (this.updateCreate(), this.removeSmallFish(), this.removeSomeBigFish(), this.playerNode.typeID, this.waterCount++, this.waterCount > this.randnum && (this.WaterAction(), this.waterCount = 0, this.randnum = s.getRandomNum(20, 40, !0)), this.OffPos) {
                        if (this.gameOverFlags) return;
                        var t = cc.v2(0, 1).signAngle(this.OffPos),
                            a = cc.misc.radiansToDegrees(t);
                        this.angle = a, this.updateFishRotate(this.myFish, this.angle, this.rotSpeed * e);
                        var i = this.playerNode.getChildByName("son");
                        if (i.children.length >= 1)
                            for (var o = 0; o < i.children.length; o++) this.updateFishRotate(i.children[o], this.angle, this.rotSpeed * e);
                        this.CameraMove(e)
                    }
                    if (this.lightFlags && (this.LightNumCount += e, this.LightNumCount >= this.lightjudeTime)) {
                        this.lightjudeTime = 0;
                        var n = s.getRandomNum(.5, 1.5, !1),
                            c = s.getRandomNum(.5, 1.5, !1);
                        this.LightAction(n, c)
                    }
                    this.gameOverGoToOVer(), this.gameEndFlags
                },
                gameEnd: function() {
                    a.GAME_OVER_BOOL = !1, o.gameOverShowText(a.gameScore, 1), this.node.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(this.gameEnd1.bind(this))))
                },
                gameEnd1: function() {
                    var e = cc.instantiate(this.blackLayerPre);
                    this.node.addChild(e, 2600), e.width = this.gameWidth, e.height = this.gameHeight, e.x = 0, e.y = 0, e.opacity = 0, e.active = !0, e.runAction(cc.fadeTo(.3, 140)), this.gameOveEndBool = !0, 1 == a.curType ? (this.gameOverT1.string = "游 戏 结 束", this.gameOverT2.string = "点 击 查 看 分 数") : 2 == a.curType ? (this.gameOverT1.string = "遊 戲 結 束", this.gameOverT2.string = "點 擊 查 看 分 數") : 3 == a.curType ? (this.gameOverT1.string = "Game Over", this.gameOverT2.string = "Click to view the score") : 4 == a.curType && (this.gameOverT1.string = "게임 종료", this.gameOverT2.string = "클릭 하여 점수 보기"), this.gameOverT1.node.zIndex = 2999, this.gameOverT2.node.zIndex = 2999, this.gameOverT1.node.opacity = 0, this.gameOverT1.node.x = 0, this.gameOverT1.node.y = 0, this.gameOverT1.node.runAction(cc.sequence(cc.delayTime(.2), cc.spawn(cc.fadeIn(.5), cc.moveBy(.5, 0, -50)), cc.callFunc(function() {}, this), cc.callFunc(function() {
                        e.canTouch = !0
                    }, this))), this.gameOverT2.node.opacity = 0, this.gameOverT2.node.x = 0, this.gameOverT2.node.y = 100, this.gameOverT2.node.runAction(cc.sequence(cc.delayTime(.2), cc.spawn(cc.fadeIn(.5), cc.moveBy(.5, 0, -50)), cc.callFunc(function(e) {
                        e.runAction(cc.sequence(cc.delayTime(2), cc.scaleTo(.3, 1.2).easing(cc.easeSineInOut()), cc.scaleTo(.3, 1).easing(cc.easeSineInOut()))).repeatForever()
                    }, this)))
                },
                initEndLayer: function() {
                    var e = cc.instantiate(this.gameOverPre);
                    this.node.addChild(e, 3e3)
                },
                gameOverGoToOVer: function() {
                    this.gameOveEndBool && (this.gameOverNum++, this.gameOverNum >= 900 && (this.gameOverNum = 0, this.gameOveEndBool = !1))
                }
            }), cc._RF.pop()
        }, {
            "../MainManage": "MainManage",
            "../commonJs/GameConfig": "GameConfig",
            "../commonJs/GameUiTools": "GameUiTools",
            "../commonJs/mTool_WHQ": "mTool_WHQ",
            GameConfig: "GameConfig",
            GameUiTools: "GameUiTools",
            MainManage: "MainManage",
            mTool_WHQ: "mTool_WHQ"
        }
    ],
    MainManage: [
        function(e, t) {
            "use strict";
            cc._RF.push(t, "946adGkxvdBmZXnlD952XtK", "MainManage");
            var a = e("HttpManagerJs"),
                i = e("LanguageSetJs"),
                o = e("GameConfig"),
                n = e("LoadSceneJs"),
                s = e("GameUiTools"),
                c = {
                    gameHttpId: 0,
                    subScoreHttp: null,
                    gameNameText: null,
                    gameInfoText: null,
                    txtStartText: null,
                    txtMoreText: null,
                    txtAgainText: null,
                    gameEndLText: null,
                    gameEndL1Text: null,
                    bgLayRgb: null,
                    gameEndName1: null,
                    gameEndName2: null,
                    gameEndUrl1: null,
                    gameEndUrl2: null,
                    langugeType: 1,
                    ranLinkData: null,
                    adShowBefore: !1,
                    adShowAfter: !0,
                    endLayCol: null,
                    moreBtnBgCol: null,
                    moreBtnTextCol: null,
                    recGameData: null,
                    recGameUrl: null,
                    recGameDelPau: null,
                    recGameDelPer: null,
                    recGameimg1: null,
                    recGameimg2: null,
                    recGamePos: null,
                    InfoData: null,
                    endShow0: null,
                    endShow1: null,
                    endShow2: null,
                    endShow3: null,
                    infoGameName: null,
                    showText: null,
                    startText: null,
                    moreGameText: null,
                    playAgainText: null,
                    endHttpShowInfo: null,
                    moreGameUrl: null,
                    init: function(e, t, i) {
                        if (!o.publicGameBool) {
                            if (o.playNum >= 1) return;
                            o.playNum++
                        }
                        o.launchScene = e, o.Bros = t, o.caS = i, this.curType = 1, this.getHttpGameId(), this.gamePV_load(), console.log("thisg", this.gameHttpId), a.httpInitUrl(this.gameHttpId);
                        var s = this.initLanguage();
                        this.gameNameText = s.game_name, this.gameInfoText = s.game_info, this.txtStartText = s.txtStart, this.txtMoreText = s.txtMore, this.txtAgainText = s.txtAgain, this.gameEndLText = s.gameEndL, this.gameEndL1Text = s.gameEndL1, this.bgLayRgb = s.bgRgb, this.gameEndName1 = s.gameT2, this.gameEndName2 = s.gameT3, this.gameEndUrl1 = s.gameUrl1, this.gameEndUrl2 = s.gameUrl2, this.langugeType = this.curType, o.publicGameBool || n.goToCover(this.adShowBefore, this.adShowAfter, e, t, i)
                    },
                    getHttpGameId1: function() {
                        var e = window.location.href,
                            t = e.substring(0, e.lastIndexOf("//") + 2),
                            a = window.location.host,
                            i = t + a + "/Service/Share/index";
                        this.gameAllHttp = i, cc.log("gameAll", this.gameAllHttp), this.subScoreHttp = t + a + "/Service/Score/index", this.gamePvHttp = t + a + "/Service/GamePv/index";
                        var o = document.URL,
                            n = 0,
                            s = o.substring(o.lastIndexOf("/game/") + 1, o.length).split("/");
                        s.length >= 2 && (n = s[1]), this.gameHttpId = n, cc.log("gameId", n), e.substring(e.lastIndexOf("//") + 4, e.lastIndexOf("com") + 3), this.moreGameUrl = this.httpHead + this.endHttp
                    },
                    getHttpGameId: function() {
                        var e = window.location.href,
                            t = e.substring(0, e.lastIndexOf("//") + 2),
                            a = window.location.host,
                            i = t + a + "/Service/Share/index";
                        this.gameAllHttp = i, this.subScoreHttp = t + a + "/Service/Score/index", this.gamePvHttp = t + a + "/Service/GamePv/index";
                        var o = document.URL,
                            n = o.lastIndexOf("/"),
                            s = o.substring(0, n),
                            c = (n = s.lastIndexOf("/"), s.substring(n + 1, s.length));
                        this.gameHttpId = c, console.log("gameIdNew", c);
                        var r = e.substring(e.lastIndexOf("//") + 4, e.lastIndexOf("com") + 3); - 1 == e.search("/game/") ? this.moreGameUrl = t + a : this.moreGameUrl = t + r, console.log("moreGame", this.moreGameUrl)
                    },
                    gameOverShowText: function(e, t) {
                        this.ajaxLoad(this.subScoreHttp, "gameScore=" + e + "&gameId=" + this.gameHttpId + "&gameType=" + t, this.scoreResult)
                    },
                    gamePV_load: function() {
                        this.ajaxLoad(this.gamePvHttp, "gameId=" + this.gameHttpId, this.ajaxOnLogoResult)
                    },
                    ajaxOnLogoResult: function() {},
                    ajaxLoad: function(e, t, a) {
                        var i = cc.loader.getXMLHttpRequest();
                        i.onreadystatechange = a, i.open("POST", e), i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
                    },
                    scoreResult: function(e) {
                        if (null != e.currentTarget.response && "" != e.currentTarget.response) {
                            var t = JSON.parse(e.currentTarget.response);
                            cc.log("endshow", t.content), c.endHttpShowInfo = t.content
                        }
                    },
                    initLanguage: function() {
                        var e = null;
                        return cc.sys.language == cc.sys.LANGUAGE_CHINESE ? (this.curType = 1, e = i.language_1) : (cc.log("英文"), this.curType = 2, e = i.language_2), e
                    },
                    getLinkGameReturn: function(e, t, a, i) {
                        if (console.log("err0", e), console.log("err1", t), console.log("err2", a), console.log("err3", i), 0 == e) {
                            this.ranLinkData = t, this.adShowBefore = this.ranLinkData.gameSet.adShowBefore, this.adShowAfter = this.ranLinkData.gameSet.adShowAfter, this.endLayCol = this.ranLinkData.gameSet.endLayerColor, this.moreBtnBgCol = this.ranLinkData.gameSet.moreBtnBgCol, this.moreBtnTextCol = this.ranLinkData.gameSet.moreBtnTextCol, this.moreGameUrl = this.ranLinkData.gameSet.moreBtnUrl, this.recGameData = a, this.ranRecGameData(), this.InfoData = i, this.endShow0 = this.InfoData.endShow0, this.endShow1 = this.InfoData.endShow1, this.endShow2 = this.InfoData.endShow2, this.endShow3 = this.InfoData.endShow3, this.infoGameName = this.InfoData.gameName, this.showText = this.InfoData.showText, this.startText = this.InfoData.startText, this.moreGameText = this.InfoData.moreGame, this.playAgainText = this.InfoData.rePlay, this.gameInfoText = this.InfoData.showText, this.txtStartText = this.InfoData.startText, this.txtMoreText = this.InfoData.moreGame, this.txtAgainText = this.InfoData.rePlay, console.log("LoadMainGameScnee");
                            var s = o.launchScene,
                                c = o.Bros,
                                r = o.caS;
                            n.goToCover(this.adShowBefore, this.adShowAfter, s, c, r)
                        }
                    },
                    ranRecGameData: function() {
                        if (null != this.recGameData && "" != this.recGameData) {
                            this.returnBool = !1;
                            var e = this.recGameData.length,
                                t = o.returnRanNum(1, e) - 1;
                            cc.log("ranNNN", t), this.recGameUrl = this.recGameData[t].data_link, this.recGameDelPer = this.recGameData[t].delay_per, this.recGameDelPau = this.recGameData[t].delay_pau, this.recGameimg1 = this.recGameData[t].img_1, this.recGameimg2 = this.recGameData[t].img_2, this.recGamePos = this.recGameData[t].poistion
                        }
                    },
                    ranLinkUrl: function() {
                        if (null != this.ranLinkData && this.ranLinkData.gameList && null != this.ranLinkData.gameList) {
                            var e = this.ranLinkData.gameList.length,
                                t = o.returnRanNum(1, e) - 1;
                            return cc.log("templ", t, this.ranLinkData.gameList), cc.log("url", this.ranLinkData.gameList[0].gameName, this.ranLinkData.gameList[0].gameUrl), t
                        }
                        return null
                    },
                    gotoEndLayer: function() {
                        this.showGameEndLayer()
                    },
                    showGameEndLayer: function() {
                        console.log("Gottttttgameend"), s.loadingLayer("panel/GameOverLayer")
                    }
                };
            t.exports = c, cc._RF.pop()
        }, {
            GameConfig: "GameConfig",
            GameUiTools: "GameUiTools",
            HttpManagerJs: "HttpManagerJs",
            LanguageSetJs: "LanguageSetJs",
            LoadSceneJs: "LoadSceneJs"
        }
    ],
    OtherConfig: [
        function(e, t) {
            "use strict";
            cc._RF.push(t, "608a3yCxFxLC6+PTyEzdmgt", "OtherConfig");
            var a = {
                Continue: {
                    CN: "点击继续",
                    CHT: "點擊繼續",
                    EN: "Click Continue",
                    KOR: "클릭 하여 계속"
                },
                name_1: {
                    CN: "蝌蚪",
                    CHT: "蝌蚪",
                    EN: "Tadpole",
                    KOR: "올챙이"
                },
                name_2: {
                    CN: "青蛙",
                    CHT: "青蛙",
                    EN: "Frog",
                    KOR: "개구리"
                },
                name_3: {
                    CN: "乌龟",
                    CHT: "烏龜",
                    EN: "Tortoise",
                    KOR: "거북이"
                },
                name_4: {
                    CN: "小金鱼 ",
                    CHT: "小金魚",
                    EN: "Goldfish",
                    KOR: "작은 금붕어"
                },
                name_5: {
                    CN: "锦鲤鱼",
                    CHT: "錦鯉魚",
                    EN: "Koi Fish",
                    KOR: "잉어"
                },
                name_6: {
                    CN: "电鳗",
                    CHT: "電鰻",
                    EN: "Eel",
                    KOR: "전기뱀장어"
                },
                name_7: {
                    CN: "鲨鱼",
                    CHT: "鯊魚",
                    EN: "Shark",
                    KOR: "상어."
                },
                name_8: {
                    CN: "大鲸鱼",
                    CHT: "大鯨魚",
                    EN: "Whale",
                    KOR: "큰 고래"
                },
                name_9: {
                    CN: "蛟",
                    CHT: "蛟",
                    EN: "Snake",
                    KOR: "활용단어참조"
                },
                name_10: {
                    CN: "神龙",
                    CHT: "神龍",
                    EN: "Dragon",
                    KOR: "신룡"
                },
                getStrForType: function(e) {
                    var t;
                    return t = "zh-CN" == window.navigator.language || "zh-cn" == window.navigator.language ? "CN" : "zh-TW" == window.navigator.language || "zh-HK" == window.navigator.language || "ja-JP" == window.navigator.language ? "CHT" : cc.sys.language == cc.sys.LANGUAGE_ENGLISH ? "EN" : cc.sys.language == cc.sys.LANGUAGE_KOREAN ? "KOR" : "EN", null != this[e] ? this[e][t] : (cc.log("没有翻译:" + e), e)
                }
            };
            window.renderConfig = a, window.zIndexAll = {
                flower: 1
            }, cc._RF.pop()
        }, {}
    ],
    PoolManager: [
        function(e, t) {
            "use strict";
            cc._RF.push(t, "6ed4diP7FRFIJc3wpj5cOOM", "PoolManager");
            var a = {
                PoolDic: {
                    bulletPool: null
                },
                addPoolObj: function(e, t) {
                    null == this.PoolDic[e] && (this.PoolDic[e] = new cc.NodePool(e)), this.PoolDic[e].put(t)
                },
                getPoolObj: function(e) {
                    return null == this.PoolDic[e] ? null : this.PoolDic[e].size() > 1 ? this.PoolDic[e].get() : null
                },
                clearPool: function(e) {
                    if (null != this.PoolDic[e]) return this.PoolDic[e].clear();
                    cc.error("没有添加对象池：", e)
                }
            };
            window.PoolManager = a, cc._RF.pop()
        }, {}
    ],
    ToolsJs: [
        function(e, t) {
            "use strict";
            cc._RF.push(t, "5eeb3uOnbFGtKGg8ygEwPGB", "ToolsJs");
            var a = {
                SpriteFrameDic: {},
                PrefabDic: {},
                AudioClipDic: {},
                storageName: "LILILII",
                setStorage: function(e, t, a) {
                    a && (t = JSON.stringify(t)), e = this.storageName + e, cc.sys.localStorage.setItem(e, t)
                },
                getStorage: function(e, t) {
                    e = this.storageName + e;
                    var a = cc.sys.localStorage.getItem(e);
                    return isNaN(a) || (a = parseInt(a)), "NaN" == a.toString() && (a = null), t && null != a && (a = JSON.parse(a)), a
                },
                logJsonObject: function(e) {
                    console.log(JSON.stringify(e))
                },
                addNoArr: function(e, t) {
                    return e.indexOf(t) < 0 && (e.push(t), !0)
                },
                removeNodeForArr: function(e, t) {
                    return e.splice(e.indexOf(t), 1)
                },
                addArrForIndex: function(e, t, a) {
                    return e.splice(t, 0, a)
                },
                newSprite: function(e, t) {
                    var a = new cc.Node;
                    return null != this.SpriteFrameDic[e] ? (a.addComponent(cc.Sprite).spriteFrame = this.SpriteFrameDic[e], null != t && t(a)) : (a.addComponent(cc.Sprite), loadTools.loadNodeSprite(a, e, t)), a
                },
                setTexture: function(e, t) {
                    this.SpriteFrameDic[t] ? e.getComponent(cc.Sprite).spriteFrame = this.SpriteFrameDic[t] : loadTools.loadNodeSprite(e, t)
                },
                setBtnClickSpr: function(e, t, a, i) {
                    this.SpriteFrameDic[t] ? (e.getComponent(cc.Button).normalSprite = this.SpriteFrameDic[t], e.getComponent(cc.Button).hoverSprite = this.SpriteFrameDic[t], e.getComponent(cc.Sprite).pressedSprite = this.SpriteFrameDic[a], null != i && i()) : (loadTools.getResSpr(t, function(t) {
                        e.getComponent(cc.Button).normalSprite = t, e.getComponent(cc.Button).hoverSprite = t
                    }), loadTools.getResSpr(a, function(t) {
                        e.getComponent(cc.Button).pressedSprite = t, null != i && i()
                    }))
                },
                setSpriteState: function(e, t) {
                    var a = 0 == t ? "2d_sprite" : "gray_sprite";
                    cc.loader.loadRes("materials/" + a, cc.Material, function(t, a) {
                        t ? cc.error(t) : e.getComponent(cc.Sprite).setMaterial(0, a)
                    })
                },
                clonePrefab: function(e, t, a, i, o) {
                    void 0 === o && (o = 0);
                    var n = this.PrefabDic[e],
                        s = null;
                    return null != n ? (s = cc.instantiate(n), t && t.addChild(s, o), a && (s.position = a), null != i && i(s)) : loadTools.loadPrefab(e, t, a, i, o), s
                },
                newLabel: function(e, t, a, i, o, n) {
                    void 0 === a && (a = 20), void 0 === i && (i = .5), void 0 === o && (o = .5), void 0 === n && (n = 0);
                    var s = new cc.Node;
                    s.anchorX = i, s.anchorY = o;
                    var c = s.addComponent(cc.Label);
                    return c.string = e, c.fontSize = a, t.addChild(s, n), s
                },
                delayTimeCall: function(e, t, a, i) {
                    e.runAction(cc.sequence(cc.delayTime(a), cc.callFunc(t, i)))
                },
                getDistance: function(e, t) {
                    return e.sub(t).mag()
                },
                getDiscForNode: function(e, t) {
                    var a = this.getToWorldPosAR(e),
                        i = this.getToWorldPosAR(t);
                    return this.getDistance(a, i)
                },
                getVectorForPos: function(e, t) {
                    return t.sub(e)
                },
                getStrForNum: function(e, t, a) {
                    void 0 === t && (t = 1), void 0 === a && (a = 2);
                    var i = "";
                    return e >= 1e3 * Math.pow(10, a - 1) ? (e /= 1e3, i = "k", (e = Math.floor(e * Math.pow(10, t)) / Math.pow(10, t)) >= 1e3 && (e /= 1e3, i = "M", e = Math.floor(e * Math.pow(10, t)) / Math.pow(10, t)), e >= 1e3 && (e /= 1e3, i = "G", e = Math.floor(e * Math.pow(10, t)) / Math.pow(10, t)), e + i) : (e = Math.ceil(e)) + i
                },
                getStrForNum2: function(e) {
                    var t = "";
                    if ((e = (e || 0).toString()) <= 3) return e;
                    for (; e.length > 3;) t = "," + e.slice(-3) + t, e = e.slice(0, e.length - 3);
                    return e && (t = e + t), t
                },
                insertStrForIndex: function(e, t, a) {
                    return e.slice(0, t) + a + e.slice(t)
                },
                prefixInteger: function(e, t) {
                    return void 0 === t && (t = 2), (Array(t).join("0") + e).slice(-t)
                },
                getNodePosForWroldPos: function(e, t) {
                    return e.convertToNodeSpaceAR(t)
                },
                getToNodePos: function(e, t) {
                    var a = e.parent.convertToWorldSpaceAR(e.position);
                    return t.convertToNodeSpaceAR(a)
                },
                getToWorldPosAR: function(e) {
                    return e.parent.convertToWorldSpaceAR(e.position)
                },
                getToWorldPos: function(e) {
                    return e.parent.convertToWorldSpace(e.position)
                },
                isBoxContainPos: function(e, t) {
                    return e.getBoundingBox().contains(t)
                },
                isBoxContainWorldPos: function(e, t) {
                    return e.getBoundingBoxToWorld().contains(t)
                },
                isRectInterRect: function(e, t) {
                    return e.getBoundingBoxToWorld().intersects(t.getBoundingBoxToWorld())
                },
                returnRandom: function(e, t) {
                    return e + Math.floor(Math.random() * (t - e + 1))
                },
                setAngleForParent: function() {},
                setNodeParent: function(e, t, a) {
                    void 0 === a && (a = !0);
                    var i = this.getToNodePos(e, t);
                    e.parent = t, e.position = i, a && e.parent && (e.angle += e.parent.angle)
                },
                refractionY: function(e) {
                    return Math.atan2(Math.sin(e), -Math.cos(e))
                },
                refractionX: function(e) {
                    return Math.atan2(-Math.sin(e), Math.cos(e))
                },
                aginSortArr: function(e) {
                    for (var t = 0; t < e.length; t++) {
                        var i = a.returnRandom(0, e.length - 1);
                        if (i != t) {
                            var o = e[t];
                            e[t] = e[i], e[i] = o
                        }
                    }
                },
                returnCurrentLanType: function() {
                    return cc.sys.language == cc.sys.LANGUAGE_CHINESE ? -1 != cc.sys.languageCode.toLowerCase().indexOf("zh-cn") || -1 != cc.sys.languageCode.toLowerCase().indexOf("zh_cn") ? 1 : 2 : cc.sys.language == cc.sys.LANGUAGE_KOREAN ? 4 : 3
                },
                getBeatItScore: function(e, t, a) {
                    if (e > a) return 100;
                    if (e <= t) {
                        if (0 == e) return 0;
                        var i = e / t * 80 + this.returnRandom(-3, 3);
                        return Math.max(Math.floor(i), 5)
                    }
                    var o = 80 + (e - t) / (a - t) * 20 + this.returnRandom(-3, 3);
                    return Math.min(Math.floor(o), 99)
                },
                sortArrForObject: function(e, t, a) {
                    void 0 === a && (a = !1), a ? e.sort(function(e, a) {
                        return a[t] - e[t]
                    }) : e.sort(function(e, a) {
                        return e[t] - a[t]
                    })
                },
                getDiffNumRandom: function(e, t, a) {
                    for (var i = [], o = e; o <= t; o++) i.push(o);
                    for (var n = i.length - a, s = 0; s < n; s++) {
                        var c = this.returnRandom(0, i.length - 1);
                        i.splice(c, 1)
                    }
                    return i
                },
                writeJson: function(e, t) {
                    if (cc.sys.isBrowser) {
                        console.log("浏览器");
                        var a = new Blob([e], {
                                type: "application/json"
                            }),
                            i = document.createElement("a");
                        i.download = t, i.innerHTML = "Download File", null != window.webkitURL ? i.href = window.webkitURL.createObjectURL(a) : (i.href = window.URL.createObjectURL(a), i.onclick = destroyClickedElement, i.style.display = "none", document.body.appendChild(i)), i.click()
                    }
                }
            };
            window.ToolsJs = a, cc._RF.pop()
        }, {}
    ],
    UIManager: [
        function(e, t) {
            "use strict";
            cc._RF.push(t, "866bf0oenZKtoq5L6EbRayh", "UIManager");
            var a = {
                UIDic: {},
                OpenUI: function(e, t, a) {
                    var o;
                    "string" == typeof e || (e = e.name), i && i[e] && (o = i[e]), null != o ? null == this.UIDic[e] ? (1 == a && this.removeAllUI(), this.CreateUI(o, t)) : cc.error("已经打开过UI:" + e) : cc.error("未找到该UI的配置信息:" + e)
                },
                CloseUI: function(e, t) {
                    var a;
                    "string" == typeof e || (e = e.name), null != (a = this.UIDic[e]) ? (a.getComponent(a.config.com) && null != a.getComponent(a.config.com).closeUI ? a.getComponent(a.config.com).closeUI(t) : a.destroy(), this.UIDic[e] = null) : cc.error("已经关闭过UI:" + e)
                },
                GetUI: function(e) {
                    var t = this.UIDic[e];
                    return null != t ? t : (cc.log("没有打开UI:" + e), null)
                },
                GetUIForJs: function(e) {
                    var t = this.UIDic[e];
                    return null != t ? t.getComponent(t.config.com) : (cc.error("没有打开UI:" + e), null)
                },
                CreateUI: function(e, t) {
                    var a = this;
                    if (null == this.UIDic[e.name]) {
                        var i = cc.director.getScene().getChildByName("Canvas");
                        ToolsJs.clonePrefab(e.resUrl, i, null, function(i) {
                            i.config = e;
                            var o = i.getComponent(e.com);
                            null != o && null != o.openUI && o.openUI(t), a.UIDic[e.name] = i
                        }, e.zIndex)
                    }
                },
                removeAllUI: function() {
                    for (var e in this.UIDic) this.CloseUI(e)
                },
                openTipUI: function(e, t, a, i, o, n, s, c, r) {
                    void 0 === t && (t = 2), void 0 === a && (a = 0), void 0 === n && (n = !1), void 0 === s && (s = 1);
                    var h = {
                        tipStr: e,
                        glodNum: a,
                        tipType: t,
                        yesCall: i,
                        noCall: o,
                        isDouble: n,
                        glodType: s,
                        yesStr: c || 2 == t ? renderConfig.getStrForType("yesStr") : renderConfig.getStrForType("sureStr"),
                        noStr: r || renderConfig.getStrForType("noStr")
                    };
                    this.OpenUI("tipUIPanel", h)
                }
            };
            window.UIManager = a;
            var i = {
                nextPanel: {
                    name: "nextPanel",
                    resUrl: "nextPanel",
                    com: "nextPanel",
                    zIndex: 99
                }
            };
            window.UIConfig = i, cc._RF.pop()
        }, {}
    ],
    audioTools: [
        function(e, t) {
            "use strict";
            cc._RF.push(t, "f0150VbHHtN2qKswCMoDllB", "audioTools");
            var a = {
                bgAudio: null,
                isPlayAudio: !0,
                isPlayBG: !0,
                playBG: function(e, t) {
                    void 0 === t && (t = .3), this.isPlayBG && this.isPlayAudio && (this.stopBG(), null != ToolsJs.AudioClipDic[e] ? this.bgAudio = cc.audioEngine.play(ToolsJs.AudioClipDic[e], !0, t) : this.bgAudio = cc.audioEngine.play(cc.url.raw("resources/music/" + e + ".mp3"), !0, t))
                },
                stopBG: function() {
                    this.stopAudio(this.bgAudio)
                },
                playAudio: function(e, t, a) {
                    if (void 0 === t && (t = .5), void 0 === a && (a = !1), this.isPlayAudio) return null != ToolsJs.AudioClipDic[e] ? cc.audioEngine.play(ToolsJs.AudioClipDic[e], a, t) : cc.audioEngine.play(cc.url.raw("resources/music/" + e + ".mp3"), a, t)
                },
                stopAudio: function(e) {
                    null != e && (cc.audioEngine.stop(e), e = null)
                },
                newAduioSource: function(e) {
                    var t;
                    if (null != ToolsJs.AudioClipDic[e]) t = ToolsJs.AudioClipDic[e];
                    else {
                        if (null == e) return console.log("clip不能为空！"), null;
                        t = e
                    }
                    var a = new cc.Node;
                    return a.addComponent(cc.AudioSource).clip = t, a.getComponent(cc.AudioSource)
                }
            };
            window.audioTools = a, cc._RF.pop()
        }, {}
    ],
    endBlackJS: [
        function(e, t) {
            "use strict";
            cc._RF.push(t, "10c1aPfzmNB9qwshKRmLq1A", "endBlackJS");
            var a = e("GameConfig");
            cc.Class({
                extends: cc.Component,
                properties: {},
                onLoad: function() {
                    this.mainSelf = cc.find("Canvas").getComponent("MainGameJS")
                },
                clickEnterOverLayer: function() {
                    if (this.node.canTouch && (this.node.canTouch = !1, a.publicGameBool || adBreak({
                        type: "next",
                        name: "restart-game"
                    }), this.mainSelf.initEndLayer(), this.mainSelf.gameOverT1.node.destroy(), this.mainSelf.gameOverT2.node.destroy(), this.mainSelf.enemyNode.children.length > 0))
                        for (var e = 0; e < this.mainSelf.enemyNode.children.length; e++) this.mainSelf.enemyNode.children[e].typeID >= this.mainSelf.maxTypeID && this.mainSelf.enemyNode.children[e].destroy()
                },
                start: function() {},
                update: function() {}
            }), cc._RF.pop()
        }, {
            GameConfig: "GameConfig"
        }
    ],
    enemyJS: [
        function(e, t) {
            "use strict";
            cc._RF.push(t, "9bf97/TUWJAtJTYemvyINjL", "enemyJS"), cc.Class({
                extends: cc.Component,
                properties: {},
                onLoad: function() {
                    this.mainSelf = cc.find("Canvas").getComponent("MainGameJS")
                },
                start: function() {},
                onCollisionEnter: function(e, t) {
                    if (!this.mainSelf.gameOverFlags && (this.mainSelf.collision = t.node, 666 == t.tag)) {
                        if (1 == e.tag) {
                            var a = e.node.typeID;
                            t.node.typeID > a && (this.mainSelf.createSmallFish(this.mainSelf.playerNode.typeID), this.mainSelf.EatingEffectAction(e.node), e.node.destroy())
                        }
                        if (777 == e.tag && t.node.typeID > e.node.typeID) {
                            cc.audioEngine.play(this.mainSelf.HurtMusic, !1, 1), this.mainSelf.EatingEffectAction2(e.node);
                            var i = e.node.typeID;
                            1 == i ? ToolsJs.removeNodeForArr(this.mainSelf.kedouArr, e.node) : 2 == i ? ToolsJs.removeNodeForArr(this.mainSelf.qingwaArr, e.node) : 3 == i ? ToolsJs.removeNodeForArr(this.mainSelf.haiguiArr, e.node) : 4 == i ? ToolsJs.removeNodeForArr(this.mainSelf.xiaojinyuArr, e.node) : 5 == i ? ToolsJs.removeNodeForArr(this.mainSelf.jinliArr, e.node) : 6 == i ? ToolsJs.removeNodeForArr(this.mainSelf.dianmanArr, e.node) : 7 == i ? ToolsJs.removeNodeForArr(this.mainSelf.shayuArr, e.node) : 8 == i && ToolsJs.removeNodeForArr(this.mainSelf.jingyuArr, e.node), e.node.destroy()
                        }
                    }
                },
                update: function() {}
            }), cc._RF.pop()
        }, {}
    ],
    gameOverJs: [
        function(e, t) {
            "use strict";
            cc._RF.push(t, "3621brbM61BsYFG7fM/74TL", "gameOverJs");
            var a = e("GameUiTools"),
                i = e("GameConfig"),
                o = e("MainManage");
            cc.Class({
                extends: cc.Component,
                properties: {
                    bgLayer: cc.Node,
                    overScoreT: cc.Label,
                    overInfoT: cc.Label,
                    moreBtn: cc.Button,
                    leftBtn: cc.Button,
                    maxScoreText: cc.Label,
                    nametext: cc.Label,
                    nowFishNode: cc.Node,
                    maxFishNode: cc.Node,
                    mainNode: cc.Node,
                    replayBtn: cc.Node
                },
                onLoad: function() {
                    this.mainSelf = cc.find("Canvas").getComponent("MainGameJS"), this.canTouchReplay = !1, this.standardScore = i.standScore, this.game_max_score = 2 * this.standardScore, this.endPercent = ToolsJs.getBeatItScore(this.mainSelf.maxTypeID, i.standScore, 2 * i.standScore), this.rigthBtnGameName = null, this.rightBtnGameUrl = null, this.UIPosChange(), this.addClickBtns();
                    var e;
                    this.returnCurrentLanType();
                    this.maxScoreText.string = n, this.maxScoreText._forceUpdateRenderData(), e = this.maxScoreText.node.width;
                    var t = this.maxScoreText.node.children[0],
                        a = e + t.width * t.scale * this.maxScoreText.node.scale + 8;
                    this.maxScoreText.node.x = a / 2 - e, this.node.opacity = 0, this.node.runAction(cc.sequence(cc.fadeIn(.3), cc.callFunc(function() {
                        this.canTouchReplay = !0, this.replayBtn.runAction(cc.sequence(cc.delayTime(2), cc.scaleTo(.3, .8).easing(cc.easeSineInOut()), cc.scaleTo(.3, .7).easing(cc.easeSineInOut()), cc.rotateTo(.1, 15).easing(cc.easeSineInOut()), cc.rotateTo(.2, -15).easing(cc.easeSineInOut()), cc.rotateTo(.1, 15).easing(cc.easeSineInOut()), cc.rotateTo(.2, -15).easing(cc.easeSineInOut()), cc.rotateTo(.1, 0).easing(cc.easeSineInOut()))).repeatForever()
                    }, this))), this.moreBtn.node.y = cc.winSize.height / 2 - 80;
                    var o = this.mainSelf.maxTypeID,
                        n = this.getHighScore();
                    n ? n < this.mainSelf.maxTypeID && (this.setHisSocre(this.mainSelf.maxTypeID), n = this.mainSelf.maxTypeID) : (this.setHisSocre(this.mainSelf.maxTypeID), n = o), this.typeID = n, this.endPageDisplay(), this.nametext.string = renderConfig.getStrForType("name_" + this.mainSelf.maxTypeID)
                },
                endPageDisplay: function() {
                    var e = this.mainSelf.maxTypeID;
                    this.nowFishNode.getChildByName("fish1").active = !1, this.nowFishNode.getChildByName("fish" + e).active = !0, this.maxFishNode.scaleX = .8, this.maxFishNode.scaleY = .8
                },
                returnCurrentLanType: function() {
                    var e = 1;
                    switch (cc.sys.language) {
                        case cc.sys.LANGUAGE_CHINESE:
                            "zh-TW" == window.navigator.language || "zh-tw" == window.navigator.language || "zh-HK" == window.navigator.language || "zh-hk" == window.navigator.language ? (cc.log("繁体"), e = 2) : (cc.log("简体"), e = 1);
                            break;
                        case cc.sys.LANGUAGE_KOREAN:
                            e = 4;
                            break;
                        default:
                            e = 3
                    }
                    return e
                },
                setHisSocre: function(e) {
                    cc.sys.localStorage.setItem("ZhaoHuanShenLong_12WS", e)
                },
                getHighScore: function() {
                    return cc.sys.localStorage.getItem("ZhaoHuanShenLong_12WS")
                },
                UIPosChange: function() {
                    this.overScoreT.string = i.gameScore, console.log("lang", o.langugeType);
                    var e = null,
                        t = null;
                    1 == i.curType ? (e = this.getContentByScore(i.gameScore, o.gameNameText), t = this.getContentByScore1(i.gameScore, o.gameNameText)) : 2 == i.curType ? (e = this.getContentByScore2_1(i.gameScore, o.gameNameText), t = this.getContentByScore2(i.gameScore, o.gameNameText)) : 3 == i.curType ? (e = this.getContentByScore3_1(i.gameScore, o.gameNameText), t = this.getContentByScore3(i.gameScore, o.gameNameText)) : 4 == i.curType && (e = this.getContentByScore4_1(i.gameScore, o.gameNameText), t = this.getContentByScore4(i.gameScore, o.gameNameText)), console.log("nihao", o.endHttpShowInfo), this.overInfoT.string = t, document.title = e
                },
                addClickBtns: function() {
                    var e = this;
                    e.moreBtn.node.on(cc.Node.EventType.TOUCH_START, function() {}), e.moreBtn.node.on(cc.Node.EventType.TOUCH_END, function() {
                        console.log("MoreGame"), window.location.href = o.moreGameUrl
                    }), e.leftBtn.node.on(cc.Node.EventType.TOUCH_START, function() {}), e.leftBtn.node.on(cc.Node.EventType.TOUCH_END, function() {
                        e.canTouchReplay && (cc.eventManager.removeAllListeners(), i.GAME_OVER_BOOL = !0, i.gameScore = 0, i.publicGameBool || adBreak({
                            type: "next",
                            name: "restart-game"
                        }), console.log("loadScene"), a.loadingScene("MainGameScene"))
                    })
                },
                getPercent: function(e) {
                    return e <= 0 ? 0 : e <= 30 ? 1 + Math.floor(3 * Math.random()) : e <= 40 ? 5 + Math.floor(10 * Math.random()) : e <= 50 ? 10 + Math.floor(10 * Math.random()) : e <= 60 ? 20 + Math.floor(15 * Math.random()) : e <= 70 ? 30 + Math.floor(15 * Math.random()) : e <= 80 ? 40 + Math.floor(20 * Math.random()) : e <= 100 ? 50 + Math.floor(30 * Math.random()) : e <= 120 ? 60 + Math.floor(30 * Math.random()) : e <= 160 ? 70 + Math.floor(25 * Math.random()) : e <= 190 ? 80 + Math.floor(19 * Math.random()) : e <= 250 ? 91 + Math.floor(9 * Math.random()) : 100
                },
                getContentByScore: function(e, t) {
                    var a = "我真是太厉害，在" + t + "中竟然得了0分，全球只有1个人得0分！",
                        i = parseInt(.3 * this.standardScore),
                        o = parseInt(.5 * this.standardScore),
                        n = parseInt(.7 * this.standardScore),
                        s = parseInt(.9 * this.standardScore),
                        c = this.endPercent;
                    return e > 0 && e <= i ? a = "我在" + t + "中击败了全球" + c + "%的玩家，真是太棒了，再练练就能达到游刃有余的境界！" : e > i && e <= this.standardScore ? a = "我在" + t + "中得击败了全球" + c + "%的玩家，真是太棒了，再练练就能达到游刃有余的境界！" : e > this.standardScore && e <= o ? a = "我在" + t + "中击败了全球" + c + "%的玩家，进入了信手拈来的境界！" : e > o && e <= n ? a = "我在" + t + "中击败了全球" + c + "%的玩家，进入了运用自如的境界！" : e > n && e <= s ? a = "我在" + t + "中击败了全球" + c + "%的玩家，达到了行云流水的境界！" : e > s && e < this.game_max_score ? a = "我在" + t + "中击败了全球" + c + "%的玩家，独孤求败！" : e >= this.game_max_score && (a = "我在" + t + "中击败了全球" + c + "%的玩家，超越了独孤求败，心有灵犀！"), a
                },
                getContentByScore2_1: function(e, t) {
                    var a = "我真是太厲害，在" + t + "中竟然得了0分，全球只有1個人得0分！",
                        i = parseInt(.3 * this.standardScore),
                        o = parseInt(.5 * this.standardScore),
                        n = parseInt(.7 * this.standardScore),
                        s = parseInt(.9 * this.standardScore),
                        c = this.endPercent;
                    return e > 0 && e <= i ? a = "我在" + t + "中擊敗了全球" + c + "%的玩家，真是太棒了，再練練就能達到遊刃有餘的境界！" : e > i && e <= this.standardScore ? a = "我在" + t + "中擊敗了全球" + c + "%的玩家，真是太棒了，再练练就能达到游刃有余的境界！" : e > this.standardScore && e <= o ? a = "我在" + t + "中擊敗了全球" + c + "%的玩家，進入了信手拈來的境界！" : e > o && e <= n ? a = "我在" + t + "中擊敗了全球" + c + "%的玩家，進入了運用自如的境界！" : e > n && e <= s ? a = "我在" + t + "中擊敗了全球" + c + "%的玩家，達到了行雲流水的境界！" : e > s && e < this.game_max_score ? a = "我在" + t + "中擊敗了全球" + c + "%的玩家，獨孤求敗！" : e >= this.game_max_score && (a = "我在" + t + "中擊敗了全球" + c + "%的玩家，超越了獨孤求敗，心有靈犀！"), a
                },
                getContentByScore3_1: function(e, t) {
                    var a = "I'm awesome，in" + t + "get 0 score，only one person in the world has a 0！",
                        i = parseInt(.3 * this.standardScore),
                        o = parseInt(.5 * this.standardScore),
                        n = parseInt(.7 * this.standardScore),
                        s = parseInt(.9 * this.standardScore),
                        c = this.endPercent;
                    return e >= this.game_max_score ? a = "I got " + e + " points in the game, defeating all players worldwide, waiting for you to fight!" : e > 0 && e <= i ? a = "I got " + e + " points in the game, really great！" : e > i && e <= this.standardScore ? a = "I got " + e + " points in the game, really great！" : e > this.standardScore && e <= o ? a = "I got " + e + " points in the game , beating out " + c + "% of global players！" : e > o && e <= n ? a = "I got " + e + " points in the game , beating out " + c + "% of global players！" : e > n && e <= s ? a = "I got " + e + " points in the game , beating out 99% of global players！" : e > s && e < this.game_max_score && (a = "I got " + e + " points in the game, it said to be the world's only 10 people to reach this level! Have you?"), a
                },
                getContentByScore4_1: function(e) {
                    var t = "난 정말 대단 해, 게임 에서 무려 0 점 을 받 았 습 니 다. 전 세계 에서 1 명 만 0 점 을 받 았 습 니 다!",
                        a = parseInt(.3 * this.standardScore),
                        i = parseInt(.5 * this.standardScore),
                        o = parseInt(.7 * this.standardScore),
                        n = parseInt(.9 * this.standardScore),
                        s = this.endPercent;
                    return e > 0 && e <= a ? t = "저 는 게임 에서 " + e + " 점 을 획득 하여 전 세계 " + s + "% 유 저 를 격파 하 였 습 니 다!" : e > a && e <= this.standardScore ? t = "저 는 게임 에서 " + e + " 점 을 획득 하여 전 세계 " + s + "% 유 저 를 격파 하 였 습 니 다!" : e > this.standardScore && e <= i ? t = "저 는 게임 에서 " + e + " 점 을 획득 하여 전 세계 " + s + "% 유 저 를 격파 하 였 습 니 다!" : e > i && e <= o ? t = "저 는 게임 에서 " + e + " 점 을 획득 하여 전 세계 " + s + "% 유 저 를 격파 하 였 습 니 다!" : e > o && e <= n ? t = "저 는 게임 에서 " + e + " 점 을 획득 하여 전 세계 " + s + "% 유 저 를 격파 하 였 습 니 다!" : e > n && e < this.game_max_score ? t = "저 는 게임 에서 " + e + " 점 을 획득 하여 전 세계 " + s + "% 유 저 를 격파 하 였 습 니 다!" : e >= this.game_max_score && (t = "저 는 게임 에서 " + e + " 점 을 획득 하여 전 세계 " + s + "% 유 저 를 격파 하 였 습 니 다!"), t
                },
                getContentByScore1: function() {
                    return "击败了全球" + this.endPercent + "%的玩家！"
                },
                getContentByScore2: function() {
                    return "擊敗了全球" + this.endPercent + "%的玩家！"
                },
                getContentByScore3: function() {
                    return "Beat " + this.endPercent + "% of the world's players!"
                },
                getContentByScore4: function() {
                    return "전 세계" + this.endPercent + "%유 저 를 처치 하 였 습 니 다!"
                },
                start: function() {},
                update: function() {}
            }), cc._RF.pop()
        }, {
            GameConfig: "GameConfig",
            GameUiTools: "GameUiTools",
            MainManage: "MainManage"
        }
    ],
    jianceJS: [
        function(e, t) {
            "use strict";
            cc._RF.push(t, "671d7/ykbxBLKzxFW4yZU5f", "jianceJS"), cc.Class({
                extends: cc.Component,
                properties: {},
                onLoad: function() {
                    this.mainSelf = cc.find("Canvas").getComponent("MainGameJS")
                },
                start: function() {},
                onCollisionEnter: function(e, t) {
                    if (!this.mainSelf.gameOverFlags && 2 == e.tag) {
                        var a = this.mainSelf.playerNode.typeID;
                        t.node.parent.typeID > a && this.mainSelf.ChasePlayer(t.node.parent), t.node.parent.typeID == a && this.mainSelf.EscapePlayer(t.node.parent)
                    }
                },
                onCollisionExit: function(e, t) {
                    if (2 == e.tag) {
                        var a = this.mainSelf.playerNode.typeID;
                        t.node.parent.typeID != a && (t.node.parent.stopAllActions(), this.mainSelf.enemyAction(t.node.parent))
                    }
                },
                update: function() {}
            }), cc._RF.pop()
        }, {}
    ],
    leafJS: [
        function(e, t) {
            "use strict";
            cc._RF.push(t, "f0114pL/kNBoLIFzlmVI/1D", "leafJS"), e("../commonJs/mTool_WHQ").getRandomNum;
            var a = e("../commonJs/mTool_WHQ");
            cc.Class({
                extends: cc.Component,
                properties: {},
                onLoad: function() {
                    this.mainSelf = cc.find("Canvas").getComponent("MainGameJS"), this.delay = a.getRandomNum(.5, 5, !1), this.startScaleX = this.node.scaleX, this.startScaleY = this.node.scaleY, this.random = a.getRandomNum(1, 10), this.random <= 3 && this.Action()
                },
                start: function() {},
                Action: function() {
                    this.node.runAction(cc.sequence(cc.scaleBy(.2, 1.1, 1.1), cc.scaleTo(.2, this.startScaleX, this.startScaleY), cc.scaleBy(.2, 1.1, 1.1), cc.scaleTo(.2, this.startScaleX, this.startScaleY), cc.callFunc(function() {
                        var e = this;
                        this.scheduleOnce(function() {
                            e.random = a.getRandomNum(1, 10), e.random <= 3 && e.Action(), e.delay = a.getRandomNum(2, 5, !1)
                        }, this.delay)
                    }, this)))
                },
                update: function() {}
            }), cc._RF.pop()
        }, {
            "../commonJs/mTool_WHQ": "mTool_WHQ"
        }
    ],
    linkHttpIconJs: [
        function(e, t) {
            "use strict";
            cc._RF.push(t, "95474fr0oNDP7SAidILF03q", "linkHttpIconJs");
            var a = e("MainManage");
            e("GameConfig"), cc.Class({
                extends: cc.Component,
                properties: {
                    iconSpr: cc.Node,
                    iconSpr1: cc.Node
                },
                onLoad: function() {
                    if (this._imageArr = [], this.stopUpdateBool = !0, this.gameWidth = cc.winSize.width, this.gameHeight = cc.winSize.height, null != a.recGameData && "" != a.recGameData && null != a.recGameimg1 && "" != a.recGameimg1) {
                        var e = 50 - this.gameWidth / 2,
                            t = this.gameHeight - 50 - this.gameHeight / 2;
                        null != a.recGamePos && "" != a.recGamePos && (1 == a.recGamePos ? (e = 50 - this.gameWidth / 2, t = this.gameHeight - 50 - this.gameHeight / 2) : 2 == a.recGamePos ? (e = this.gameWidth - 50 - this.gameWidth / 2, t = this.gameHeight - 50 - this.gameHeight / 2) : 3 == a.recGamePos ? (e = this.gameWidth - 50 - this.gameWidth / 2, t = 50 - this.gameHeight / 2) : 4 == a.recGamePos && (e = 50 - this.gameWidth / 2, t = 50 - this.gameHeight / 2));
                        var i = a.recGameimg1,
                            o = a.recGameimg2,
                            n = this.iconSpr,
                            s = this.iconSpr1,
                            c = this;
                        cc.loader.load(i, function(a, i) {
                            n.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(i), c.iconSpr.opacity = 0, c.iconSpr.x = e, c.iconSpr.y = t, c._imageArr.push(c.iconSpr)
                        }), cc.loader.load(o, function(a, i) {
                            s.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(i), c.iconSpr1.opacity = 0, c.iconSpr1.x = e, c.iconSpr1.y = t, c._imageArr.push(c.iconSpr1)
                        })
                    }
                    this.addTouchEvents()
                },
                showLinkPic: function() {
                    var e, t;
                    e = null != a.recGameDelPau ? a.recGameDelPau : 6, cc.log("dMainManager.recGameDelPer", a.recGameDelPer), t = null != a.recGameDelPer ? a.recGameDelPer : .7, this._imageArr[0].opacity = 255, this._imageArr[0].runAction(cc.repeatForever(cc.sequence(cc.delayTime(e), cc.rotateBy(t, 0, 180), cc.callFunc(function() {
                        this._imageArr[0].setRotation(0), this._imageArr[0].opacity = 0, this._imageArr[1].opacity = 255
                    }, this), cc.delayTime(e), cc.callFunc(function() {
                        this.flowerAction(this._imageArr[1], t)
                    }, this), cc.delayTime(t), cc.callFunc(function() {
                        this._imageArr[1].opacity = 0, this._imageArr[0].opacity = 255
                    }, this))))
                },
                flowerAction: function(e, t) {
                    e.runAction(cc.sequence(cc.rotateBy(t, 0, 180), cc.callFunc(function() {
                        e.setRotation(0)
                    })))
                },
                start: function() {},
                addTouchEvents: function() {
                    cc.EventListener.TOUCH_ONE_BY_ONE
                },
                update: function() {
                    this.stopUpdateBool && this._imageArr.length >= 2 && (this.stopUpdateBool = !1, this.showLinkPic())
                }
            }), cc._RF.pop()
        }, {
            GameConfig: "GameConfig",
            MainManage: "MainManage"
        }
    ],
    loadTools: [
        function(e, t) {
            "use strict";
            cc._RF.push(t, "9ea23JPr69LB6K5CalAIXPw", "loadTools");
            var a = {
                loadNodeSprite: function(e, t, a) {
                    e.getComponent(cc.Sprite) ? cc.loader.loadRes(t, cc.SpriteFrame, function(t, i) {
                        t ? cc.error(t) : (e.getComponent(cc.Sprite).spriteFrame = i, null != a && a(e))
                    }) : cc.error("node上没有Sprite组件：", e)
                },
                getResSpr: function(e, t) {
                    cc.loader.loadRes(e, cc.SpriteFrame, function(e, a) {
                        e ? cc.error(e) : null != t && t(a)
                    })
                },
                loadPrefab: function(e, t, a, i, o) {
                    void 0 === o && (o = 0), cc.loader.loadRes(e, cc.Prefab, function(e, n) {
                        if (e) cc.error(e);
                        else {
                            var s = cc.instantiate(n);
                            t ? t.addChild(s, o) : cc.director.getScene().children[0].addChild(s, 100), a && (s.position = a), i && i(s)
                        }
                    })
                },
                loadScene: function(e, t) {
                    cc.director.preloadScene(e, function() {
                        cc.director.loadScene(e, t)
                    })
                },
                loadJson: function() {}
            };
            window.loadTools = a, cc._RF.pop()
        }, {}
    ],
    mTool_WHQ: [
        function(e, t) {
            "use strict";
            cc._RF.push(t, "fe57af2WNxE+67eFxNClrcq", "mTool_WHQ");
            var a = {
                getRandomNum: function(e, t, a) {
                    return a ? Math.floor(Math.random() * (t - e + 1) + e) : Math.random() * (t - e) + e
                },
                cbPosToWorldPos: function(e, t, a, i, o, n) {
                    var s = a + (e.x - t / 2 + .5) * o,
                        c = i + (e.y + .5) * n;
                    return cc.v2(s, c)
                },
                worldPosToCbPos: function(e, t, a, i, o, n) {
                    var s = (e.x - a) / o - .5 + t / 2,
                        c = (e.y - i) / n - .5;
                    return s % 1 == 0 && c % 1 == 0 || (s = Math.round(s), c = Math.round(c)), cc.v2(s, c)
                },
                judgeInArr: function(e, t) {
                    for (var a = 0; a < t.length; a++)
                        if (t[a] === e) return !0;
                    return !1
                },
                getAngleByPos: function(e, t) {
                    var a = t.x - e.x,
                        i = t.y - e.y;
                    return 360 * Math.atan(i / a) / (2 * Math.PI)
                },
                judgeIntersect: function(e, t, a, i, o, n, s, c) {
                    return Math.min(e, a) <= Math.max(o, s) && Math.min(n, c) <= Math.max(t, i) && Math.min(o, s) <= Math.max(e, a) && Math.min(t, i) <= Math.max(n, c) && ((o - e) * (i - t) - (a - e) * (n - t)) * ((s - e) * (i - t) - (a - e) * (c - t)) <= 1e-8 && ((e - o) * (c - n) - (s - o) * (t - n)) * ((a - o) * (c - n) - (s - o) * (i - n)) <= 1e-8
                },
                getNormalizeVector: function(e, t) {
                    return t.sub(e).normalize()
                },
                judgeItemOverlapping: function(e, t, a, i, o, n, s, c) {
                    return !(e + a < o || o + s < e || t + i < n || n + c < t)
                },
                getCircumferencePos: function(e, t, a) {
                    var i = cc.v2(0, 0);
                    return i.x = e.x + Math.sin(2 * Math.PI / 360 * a) * t, i.y = e.y + Math.cos(2 * Math.PI / 360 * a) * t, i
                },
                upsetArr: function(e) {
                    return e.sort(function() {
                        return Math.random() > .5 ? -1 : 1
                    })
                },
                getAudio: function(e, t) {
                    return cc.sys.os === cc.sys.OS_IOS ? e : t
                },
                setLocalData: function(e, t) {
                    cc.sys.localStorage.setItem(e, t)
                },
                getLocalData: function(e) {
                    return cc.sys.localStorage.getItem(e)
                },
                getNodePos: function(e, t, a) {
                    return a ? e.convertToNodeSpaceAR(t.convertToWorldSpaceAR(a)) : e.convertToNodeSpaceAR(t.convertToWorldSpaceAR())
                },
                judgeArrSame: function(e, t) {
                    for (var a = 0; a < e.length; a++)
                        for (var i = 0; i < t.length; i++)
                            if (e[a] !== t[i]) return !1;
                    return !0
                },
                pDistance: function(e, t) {
                    return e.sub(t).mag()
                },
                getAngleByVector: function(e) {
                    return e.y < 0 ? 360 - cc.v2(1, 0).angle(e) / Math.PI * 180 : cc.v2(1, 0).angle(e) / Math.PI * 180
                },
                getBoundingBoxToNode: function(e, t) {
                    var a = t.convertToNodeSpaceAR(e.convertToWorldSpaceAR(cc.v2(-e.anchorX * e.width * (e.scaleX / Math.abs(e.scaleX)), -e.anchorY * e.height * (e.scaleY / Math.abs(e.scaleY)))));
                    return cc.rect(a.x, a.y, e.width * Math.abs(e.scaleX), e.height * Math.abs(e.scaleY))
                },
                degreesToVectors: function(e) {
                    var t = cc.misc.degreesToRadians(e);
                    return cc.v2(1, 0).rotate(-t)
                },
                vectorsToDegrees: function(e) {
                    if (Math.abs(e.x) + Math.abs(e.y) !== 0) {
                        var t = cc.v2(1, 0),
                            a = e.signAngle(t);
                        return cc.misc.radiansToDegrees(a)
                    }
                    return 0
                }
            };
            t.exports = a, cc._RF.pop()
        }, {}
    ],
    player2JS: [
        function(e, t) {
            "use strict";
            cc._RF.push(t, "f41fcJj045KGo2ubgiEeGaA", "player2JS"), cc.Class({
                extends: cc.Component,
                properties: {},
                onLoad: function() {
                    this.mainSelf = cc.find("Canvas").getComponent("MainGameJS")
                },
                start: function() {},
                onCollisionEnter: function(e, t) {
                    if (!this.mainSelf.gameOverFlags && 1 == e.tag) {
                        if (e.flags) return;
                        var a = e.node.typeID;
                        t.node.typeID >= a && (e.tag = 9999, this.mainSelf.EatSmallAction(e.node, this.mainSelf.myFish))
                    }
                },
                update: function() {}
            }), cc._RF.pop()
        }, {}
    ],
    playerJS: [
        function(e, t) {
            "use strict";
            cc._RF.push(t, "ba7b9DpttpMLq9QsKGwuABo", "playerJS"), cc.Class({
                extends: cc.Component,
                properties: {},
                onLoad: function() {
                    this.mainSelf = cc.find("Canvas").getComponent("MainGameJS")
                },
                start: function() {},
                onCollisionEnter: function(e, t) {
                    if (!this.mainSelf.gameOverFlags) {
                        if (this.mainSelf.collision = t.node, (t.tag = 666) && 1 == e.tag) {
                            var a = e.node.typeID;
                            this.mainSelf.playerNode.typeID >= a && (e.tag = 999, this.mainSelf.EatSmallAction(e.node, t.node), this.mainSelf.EatingEffectAction(e.node))
                        }
                        if ((t.tag = 2) && 666 == e.tag) {
                            var i = e.node.typeID;
                            this.mainSelf.playerNode.typeID < i && this.mainSelf.JudgeSmallFish()
                        }
                    }
                },
                update: function() {}
            }), cc._RF.pop()
        }, {}
    ],
    resArr: [
        function(e, t) {
            "use strict";
            cc._RF.push(t, "d1951bUsVBEo7LtLLUajDCO", "resArr"), cc.Class({
                extends: cc.Component,
                properties: {
                    SpriteFrameArr: [cc.SpriteFrame],
                    PrefabArr: [cc.Prefab],
                    audiosArr: {
                        type: cc.AudioClip,
                        default: []
                    }
                },
                onLoad: function() {
                    this.addPrefabs(), this.addSpriteFrame(), this.addAudio()
                },
                addAudio: function() {
                    this.audioClipDic = {};
                    for (var e = 0; e < this.audiosArr.length; e++)
                        if (this.audiosArr[e]) {
                            var t = this.audiosArr[e];
                            this.audioClipDic[t.name] = t
                        }
                    ToolsJs.AudioClipDic = this.audioClipDic
                },
                addSpriteFrame: function() {
                    this.spriteArr = {};
                    for (var e = 0; e < this.SpriteFrameArr.length; e++)
                        if (this.SpriteFrameArr[e]) {
                            var t = this.SpriteFrameArr[e];
                            this.spriteArr[t.name] = t
                        }
                    ToolsJs.SpriteFrameDic = this.spriteArr
                },
                addPrefabs: function() {
                    this.prefabsArr = {};
                    for (var e = 0; e < this.PrefabArr.length; e++)
                        if (this.PrefabArr[e]) {
                            var t = this.PrefabArr[e];
                            this.prefabsArr[t.name] = t
                        }
                    ToolsJs.PrefabDic = this.prefabsArr
                }
            }), cc._RF.pop()
        }, {}
    ],
    rockerJS: [
        function(e, t) {
            "use strict";
            cc._RF.push(t, "132743iYdROWry4PeEjE8Fb", "rockerJS"), cc.Class({
                extends: cc.Component,
                properties: {
                    buttonNode: cc.Node
                },
                onLoad: function() {
                    this.node.opacity = 0, this.mainSelf = cc.find("Canvas").getComponent("MainGameJS"), this.max_r = this.node.width / 2;
                    var e = cc.v2(0, 0);
                    this.dir = cc.v2(0, 0), this.buttonNode.setPosition(e), this.mainSelf.node.on(cc.Node.EventType.TOUCH_END, function() {
                        this.buttonNode.setPosition(cc.v2(0, 0))
                    }, this), this.mainSelf.node.on(cc.Node.EventType.TOUCH_CANCEL, function() {
                        this.buttonNode.setPosition(cc.v2(0, 0))
                    }, this), this.mainSelf.node.on(cc.Node.EventType.TOUCH_MOVE, function(e) {
                        var t = e.getLocation(),
                            a = this.node.convertToNodeSpaceAR(t),
                            i = a.mag();
                        this.dir.x = a.x / i, this.dir.y = a.y / i, i > this.max_r && (a.x = a.x / i * this.max_r, a.y = a.y / i * this.max_r), this.dir.mag() > .5 && i > 0 && (this.mainSelf.OffPos = this.dir), this.buttonNode.setPosition(a)
                    }, this), this.mainSelf.node.on(cc.Node.EventType.TOUCH_START, function(e) {
                        var t = e.getLocation(),
                            a = this.mainSelf.node.convertToNodeSpaceAR(t);
                        this.node.setPosition(a)
                    }, this)
                },
                start: function() {},
                update: function() {}
            }), cc._RF.pop()
        }, {}
    ],
    startGameJs: [
        function(e, t) {
            "use strict";
            cc._RF.push(t, "280c3rsZJJKnZ9RqbALVwtK", "startGameJs"), e("GameUiTools"), e("HttpManagerJs");
            var a = e("MainManage"),
                i = (e("LoadSceneJs"), e("GameConfig"));
            cc.Class({
                extends: cc.Component,
                properties: {
                    showInfoT: cc.Label,
                    startT: cc.Label
                },
                onLoad: function() {
                    i.publicGameBool && a.init(), this.showInfoT.string = a.gameInfoText, this.startT.string = a.txtStartText, this.node.zIndex = 100, this.node.on("touchend", function() {
                        this.node.x = -2e3
                    }, this)
                },
                update: function() {}
            }), cc._RF.pop()
        }, {
            GameConfig: "GameConfig",
            GameUiTools: "GameUiTools",
            HttpManagerJs: "HttpManagerJs",
            LoadSceneJs: "LoadSceneJs",
            MainManage: "MainManage"
        }
    ],
    use_reversed_rotateTo: [
        function(e, t) {
            "use strict";
            cc._RF.push(t, "16142aty4ZFBpA8RBwxcagf", "use_reversed_rotateTo"), cc.RotateTo._reverse = !0, cc._RF.pop()
        }, {}
    ]
}, {}, ["HttpManagerJs", "LanguageSetJs", "LoadSceneJs", "MainGameJS", "resArr", "MainManage", "AniTools", "ToolsJs", "audioTools", "loadTools", "GameConfig", "GameUiTools", "mTool_WHQ", "gameOverJs", "linkHttpIconJs", "EventManager", "PoolManager", "UIManager", "EventData", "OtherConfig", "endBlackJS", "enemyJS", "jianceJS", "leafJS", "player2JS", "playerJS", "rockerJS", "startGameJs", "use_reversed_rotateTo"]);