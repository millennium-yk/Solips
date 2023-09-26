// ==UserScript==
// @name         Agar Video Skin Script
// @namespace    Agar Video Skin Script
// @version      1.1
// @description  Use your videos as your skin in agar.io, mod made by Jimboy3100
// @author       Jimboy3100
// @license      PSL
// @match        https://agar.io/*
// @grant        none
// @run-at       document-start
// ==/UserScript==
//Download a small video e.g http://techslides.com/demos/sample-videos/small.mp4
setTimeout(function() {
    function inject(type, code) {
        switch (type) {
            case 'javascript':
                var inject = document.createElement('script');
                inject.type = 'text/javascript';
                inject.appendChild(document.createTextNode(code));
                break;
            case 'stylesheet':
                var inject = document.createElement('style');
                inject.type = 'text/css';
                inject.appendChild(document.createTextNode(code));
                break;
        }
        (document.head || document.documentElement).appendChild(inject);
    }
    inject('stylesheet', '@-webkit-keyframes bounce-in-left{60%,75%,90%,from,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(-3000px,0,0);transform:translate3d(-3000px,0,0)}60%{opacity:1;-webkit-transform:translate3d(25px,0,0);transform:translate3d(25px,0,0)}75%{-webkit-transform:translate3d(-10px,0,0);transform:translate3d(-10px,0,0)}90%{-webkit-transform:translate3d(5px,0,0);transform:translate3d(5px,0,0)}to{-webkit-transform:none;transform:none}}@-moz-keyframes bounce-in-left{60%,75%,90%,from,to{-moz-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-moz-transform:translate3d(-3000px,0,0);transform:translate3d(-3000px,0,0)}60%{opacity:1;-moz-transform:translate3d(25px,0,0);transform:translate3d(25px,0,0)}75%{-moz-transform:translate3d(-10px,0,0);transform:translate3d(-10px,0,0)}90%{-moz-transform:translate3d(5px,0,0);transform:translate3d(5px,0,0)}to{-moz-transform:none;transform:none}}@keyframes bounce-in-left{60%,75%,90%,from,to{-moz-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-moz-transform:translate3d(-3000px,0,0);transform:translate3d(-3000px,0,0)}60%{opacity:1;-moz-transform:translate3d(25px,0,0);transform:translate3d(25px,0,0)}75%{-moz-transform:translate3d(-10px,0,0);transform:translate3d(-10px,0,0)}90%{-moz-transform:translate3d(5px,0,0);transform:translate3d(5px,0,0)}to{-moz-transform:none;transform:none}}@-webkit-keyframes bounce-in-right{60%,75%,90%,from,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}from{opacity:0;-webkit-transform:translate3d(3000px,0,0);transform:translate3d(3000px,0,0)}60%{opacity:1;-webkit-transform:translate3d(-25px,0,0);transform:translate3d(-25px,0,0)}75%{-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)}90%{-webkit-transform:translate3d(-5px,0,0);transform:translate3d(-5px,0,0)}to{-webkit-transform:none;transform:none}}@-moz-keyframes bounce-in-right{60%,75%,90%,from,to{-moz-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}from{opacity:0;-moz-transform:translate3d(3000px,0,0);transform:translate3d(3000px,0,0)}60%{opacity:1;-moz-transform:translate3d(-25px,0,0);transform:translate3d(-25px,0,0)}75%{-moz-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)}90%{-moz-transform:translate3d(-5px,0,0);transform:translate3d(-5px,0,0)}to{-moz-transform:none;transform:none}}@keyframes bounce-in-right{60%,75%,90%,from,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}from{opacity:0;-webkit-transform:translate3d(3000px,0,0);transform:translate3d(3000px,0,0)}60%{opacity:1;-webkit-transform:translate3d(-25px,0,0);transform:translate3d(-25px,0,0)}75%{-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)}90%{-webkit-transform:translate3d(-5px,0,0);transform:translate3d(-5px,0,0)}to{-webkit-transform:none;transform:none}}#tcm-videoskin :focus{outline:0}#tcm-videoskin{position:relative;display:block;width:100%;margin:0 0 15px;overflow:hidden;background:#EEE;border:1px solid #DDD;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px}#tcm-videoskin>#tcm-videoskin-options>button,#tcm-videoskin>button{position:relative;display:block;padding:8px;float:left;cursor:pointer;color:#FFF;font-size:13px;text-transform:capitalize;border:none;border-radius:2px;-webkit-border-radius:2px;-moz-border-radius:2px;transition:background .2s ease-in-out;-webkit-transition:background .2s ease-in-out;-moz-transition:background .2s ease-in-out}#tcm-videoskin>button#tcm-video-load{width:96%;margin:2%;background:#43A047;border-bottom:3px solid #388E3C}#tcm-videoskin>button#tcm-video-load:hover{background:#66BB6A}#tcm-videoskin>#tcm-video-input{display:none}#tcm-videoskin>#tcm-videoskin-options{position:relative;display:none;width:100%;overflow:hidden}#tcm-videoskin>#tcm-videoskin-options>button#tcm-video-unload{width:57%;margin:0 1% 2% 2%;background:#E53935;border-bottom:3px solid #D32F2F;animation:1s both bounce-in-left;-webkit-animation:1s both bounce-in-left;-moz-animation:1s both bounce-in-left}#tcm-videoskin>#tcm-videoskin-options>button#tcm-video-mute{width:37%;margin:0 2% 2% 1%;background:#E53935;border-bottom:3px solid #D32F2F;animation:1s both bounce-in-right;-webkit-animation:1s both bounce-in-right;-moz-animation:1s both bounce-in-right}#tcm-videoskin>#tcm-videoskin-options>button#tcm-video-mute:hover,#tcm-videoskin>#tcm-videoskin-options>button#tcm-video-unload:hover{background:#EF5350}#tcm-videoskin>#tcm-videoskin-credits{position:relative;display:block;width:100%;margin:0 0 2%;overflow:hidden;font-size:13px;color:#666;text-align:center;cursor:default}#tcm-videoskin>#tcm-videoskin-credits>a{color:#43A047;cursor:pointer;text-decoration:none}#tcm-videoskin>#tcm-videoskin-credits>a:hover{text-decoration:underline}');

    inject('javascript', ! function e(t) {
        if ("undefined" != typeof t.MC && "undefined" != typeof t.core && document.getElementById("mainui-ads")) {
            var a = document.getElementById("nick").value;
            console.log("a=" + a);
            var o = {
                l: {
                    nickname: a,
                    placeholder: "http://i.imgur.com/rIko2gr.jpg",
                    color: "0xFFFFFF",
                    canvas: !1,
                    context: !1,
                    video: !1,
                    muted: !1,
                    prototypes: {
                        canvas: CanvasRenderingContext2D.prototype,
                        mc: Object.getPrototypeOf(t.MC),
                        old: {}
                    }
                },
                f: {
                    prototype_override: function(e, t, n, i) {
                        e in o.l.prototypes.old || (o.l.prototypes.old[e] = {}),
                            t in o.l.prototypes.old[e] || (o.l.prototypes.old[e][t] = o.l.prototypes[e][t]),
                            o.l.prototypes[e][t] = function() {
                                "before" == n && i(this, arguments),
                                    o.l.prototypes.old[e][t].apply(this, arguments),
                                    "after" == n && i(this, arguments)
                            }
                    },
                    load_video: function(e) {
                        var n = t.URL || t.webkitURL,
                            i = this.files[0];
                        o.l.video ? o.l.video.src = n.createObjectURL(i) : (o.l.canvas = document.createElement("canvas"),
                            o.l.canvas.width = o.l.canvas.height = 512,
                            o.l.context = o.l.canvas.getContext("2d"),
                            o.l.video = document.createElement("video"),
                            o.l.video.src = n.createObjectURL(i),
                            o.l.video.muted = o.l.muted,
                            o.l.video.loop = !0,
                            o.u.toggle_options(!0), o.u.populate_nickname(),
                            t.core.registerSkin(o.l.nickname, "%tcmvideo", o.l.placeholder, 3, o.l.color),
                            o.f.prototype_override("canvas", "drawImage", "before", function(e, t) {
                                "src" in t[0] && t[0].src == o.l.placeholder &&
                                    (o.l.context.drawImage(o.l.video, 0, 0, o.l.video.videoWidth,
                                            o.l.video.videoHeight,
                                            -((o.l.canvas.width * (o.l.video.videoWidth / o.l.video.videoHeight) - o.l.canvas.width) / 2), 0,
                                            o.l.canvas.width * (o.l.video.videoWidth / o.l.video.videoHeight), o.l.canvas.height),
                                        t[0] = o.l.canvas)
                            }), o.f.prototype_override("mc", "onPlayerSpawn", "before", function(e, t) {
                                o.l.video.play()
                            }), o.f.prototype_override("mc", "onPlayerDeath", "before", function(e, t) {
                                o.l.video.pause()
                            }))
                    },
                    unload_video: function() {
                        o.l.video.src = "",
                            o.l.video = !1,
                            o.u.toggle_options(!1),
                            o.u.unpopulate_nickname(),
                            o.f.prototype_override("canvas", "drawImage", "before", function(e, t) {}),
                            o.f.prototype_override("mc", "onPlayerSpawn", "before", function(e, t) {}),
                            o.f.prototype_override("mc", "onPlayerDeath", "before", function(e, t) {})
                    }
                },
                u: {
                    populate_nickname: function() {
                        document.getElementById("nick").value = o.l.nickname, document.getElementById("nick").disabled = !0
                    },
                    unpopulate_nickname: function() {
                        document.getElementById("nick").value = "", document.getElementById("nick").disabled = !1
                    },
                    toggle_options: function(e) {
                        document.getElementById("tcm-videoskin-options").style.display = e ? "block" : "none",
                            document.getElementById("tcm-videoskin-credits").style.display = e ? "none" : "block"
                    },
                    html: function() {
                        var e = '<div id="tcm-videoskin">';
                        return e += '<button id="tcm-video-load">select video skin</button>',
                            e += '<input type="file" accept="video/*" id="tcm-video-input" />',
                            e += '<div id="tcm-videoskin-options">',
                            e += '<button id="tcm-video-unload">unselect video skin</button>',
                            e += '<button id="tcm-video-mute">mute audio</button>',
                            e += "</div>",
                            e += '<span id="tcm-videoskin-credits">Script made by <a href="http://www.legendmod.ml" target="_blank">Jimboy3100</a>.</span>',
                            e += "</div>"
                    }
                }
            };
            document.getElementById("mainui-ads").insertAdjacentHTML("beforeBegin", o.u.html()),
                document.getElementById("tcm-video-load").addEventListener("click", function() {
                    document.getElementById("tcm-video-input").click()
                }, !1), document.getElementById("tcm-video-input").addEventListener("change", o.f.load_video, !1),
                document.getElementById("tcm-video-unload").addEventListener("click", o.f.unload_video, !1),
                document.getElementById("tcm-video-mute").addEventListener("click", function() {
                    o.l.muted = o.l.muted ? !1 : !0, o.l.video.muted = o.l.muted, this.innerHTML = o.l.muted ? "unmute audio" : "mute audio"
                }, !1)
        } else t.setTimeout(function() {
            e(t)
        }, 100)
    }(window));
}, 3600);
