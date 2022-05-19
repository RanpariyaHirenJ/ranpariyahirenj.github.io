!function(e){e.fn.poptrox_disableSelection=function(){return e(this).css("user-select","none").css("-khtml-user-select","none").css("-moz-user-select","none").css("-o-user-select","none").css("-webkit-user-select","none")},e.fn.poptrox=function(o){function t(){i=e(window).width(),s=e(window).height()+r.windowHeightPad;var o=Math.abs(x.width()-x.outerWidth()),t=Math.abs(x.height()-x.outerHeight()),p=(w.width(),w.height(),i-2*r.windowMargin-o),n=s-2*r.windowMargin-t;x.css("min-width",r.popupWidth).css("min-height",r.popupHeight),v.children().css("max-width",p).css("max-height",n)}if(0==this.length)return e(this);if(this.length>1){for(var p=0;p<this.length;p++)e(this[p]).poptrox(o);return e(this)}var i,s,r=e.extend({preload:!1,baseZIndex:1e3,fadeSpeed:300,overlayColor:"#000000",overlayOpacity:.6,overlayClass:"poptrox-overlay",windowMargin:50,windowHeightPad:0,selector:"a",caption:null,parent:"body",popupSpeed:300,popupWidth:200,popupHeight:100,popupIsFixed:!1,useBodyOverflow:!1,usePopupEasyClose:!0,usePopupForceClose:!1,usePopupLoader:!0,usePopupCloser:!0,usePopupCaption:!1,usePopupNav:!1,usePopupDefaultStyling:!0,popupBackgroundColor:"#FFFFFF",popupTextColor:"#000000",popupLoaderTextSize:"2em",popupCloserBackgroundColor:"#000000",popupCloserTextColor:"#FFFFFF",popupCloserTextSize:"20px",popupPadding:10,popupCaptionHeight:60,popupCaptionTextSize:null,popupBlankCaptionText:"(untitled)",popupCloserText:"&#215;",popupLoaderText:"&bull;&bull;&bull;&bull;",popupClass:"poptrox-popup",popupSelector:null,popupLoaderSelector:".loader",popupCloserSelector:".closer",popupCaptionSelector:".caption",popupNavPreviousSelector:".nav-previous",popupNavNextSelector:".nav-next",onPopupClose:null,onPopupOpen:null},o),n=e(this),a=e("body"),l=e('<div class="'+r.overlayClass+'"></div>'),u=e(window),d=[],h=0,g=!1,f=new Array;r.usePopupLoader||(r.popupLoaderSelector=null),r.usePopupCloser||(r.popupCloserSelector=null),r.usePopupCaption||(r.popupCaptionSelector=null),r.usePopupNav||(r.popupNavPreviousSelector=null,r.popupNavNextSelector=null);var x;x=e(r.popupSelector?r.popupSelector:'<div class="'+r.popupClass+'">'+(r.popupLoaderSelector?'<div class="loader">'+r.popupLoaderText+"</div>":"")+'<div class="pic"></div>'+(r.popupCaptionSelector?'<div class="caption"></div>':"")+(r.popupCloserSelector?'<span class="closer">'+r.popupCloserText+"</span>":"")+(r.popupNavPreviousSelector?'<div class="nav-previous"></div>':"")+(r.popupNavNextSelector?'<div class="nav-next"></div>':"")+"</div>");var v=x.find(".pic"),w=e(),b=x.find(r.popupLoaderSelector),m=x.find(r.popupCaptionSelector),C=x.find(r.popupCloserSelector),y=x.find(r.popupNavNextSelector),S=x.find(r.popupNavPreviousSelector),P=y.add(S);if(r.usePopupDefaultStyling&&(x.css("background",r.popupBackgroundColor).css("color",r.popupTextColor).css("padding",r.popupPadding+"px"),m.length>0&&(x.css("padding-bottom",r.popupCaptionHeight+"px"),m.css("position","absolute").css("left","0").css("bottom","0").css("width","100%").css("text-align","center").css("height",r.popupCaptionHeight+"px").css("line-height",r.popupCaptionHeight+"px"),r.popupCaptionTextSize&&m.css("font-size",popupCaptionTextSize)),C.length>0&&C.html(r.popupCloserText).css("font-size",r.popupCloserTextSize).css("background",r.popupCloserBackgroundColor).css("color",r.popupCloserTextColor).css("display","block").css("width","40px").css("height","40px").css("line-height","40px").css("text-align","center").css("position","absolute").css("text-decoration","none").css("outline","0").css("top","0").css("right","-40px"),b.length>0&&b.html("").css("position","relative").css("font-size",r.popupLoaderTextSize).on("startSpinning",function(o){var t=e("<div>"+r.popupLoaderText+"</div>");t.css("height",Math.floor(r.popupHeight/2)+"px").css("overflow","hidden").css("line-height",Math.floor(r.popupHeight/2)+"px").css("text-align","center").css("margin-top",Math.floor((x.height()-t.height()+(m.length>0?m.height():0))/2)).css("color",r.popupTextColor?r.popupTextColor:"").on("xfin",function(){t.fadeTo(300,.5,function(){t.trigger("xfout")})}).on("xfout",function(){t.fadeTo(300,.05,function(){t.trigger("xfin")})}).trigger("xfin"),b.append(t)}).on("stopSpinning",function(e){var o=b.find("div");o.remove()}),2==P.length)){P.css("font-size","75px").css("text-align","center").css("color","#fff").css("text-shadow","none").css("height","100%").css("position","absolute").css("top","0").css("opacity","0.35").css("cursor","pointer").css("box-shadow","inset 0px 0px 10px 0px rgba(0,0,0,0)").poptrox_disableSelection();var k,T;r.usePopupEasyClose?(k="100px",T="100px"):(k="75%",T="25%"),y.css("right","0").css("width",k).html('<div style="position: absolute; height: 100px; width: 125px; top: 50%; right: 0; margin-top: -50px;">&gt;</div>'),S.css("left","0").css("width",T).html('<div style="position: absolute; height: 100px; width: 125px; top: 50%; left: 0; margin-top: -50px;">&lt;</div>')}return u.on("resize orientationchange",function(){t()}),m.on("update",function(e,o){o&&0!=o.length||(o=r.popupBlankCaptionText),m.html(o)}),C.css("cursor","pointer").on("click",function(e){return e.preventDefault(),e.stopPropagation(),x.trigger("poptrox_close"),!0}),y.on("click",function(e){e.stopPropagation(),e.preventDefault(),x.trigger("poptrox_next")}),S.on("click",function(e){e.stopPropagation(),e.preventDefault(),x.trigger("poptrox_previous")}),l.css("position","fixed").css("left",0).css("top",0).css("z-index",r.baseZIndex).css("width","100%").css("height","100%").css("text-align","center").css("cursor","pointer").appendTo(r.parent).prepend('<div style="display:inline-block;height:100%;vertical-align:middle;"></div>').append('<div style="position:absolute;left:0;top:0;width:100%;height:100%;background:'+r.overlayColor+";opacity:"+r.overlayOpacity+";filter:alpha(opacity="+100*r.overlayOpacity+');"></div>').hide().on("touchmove",function(e){return!1}).on("click",function(e){e.preventDefault(),e.stopPropagation(),x.trigger("poptrox_close")}),x.css("display","inline-block").css("vertical-align","middle").css("position","relative").css("z-index",1).css("cursor","auto").appendTo(l).hide().on("poptrox_next",function(){var e=h+1;e>=d.length&&(e=0),x.trigger("poptrox_switch",[e])}).on("poptrox_previous",function(){var e=h-1;0>e&&(e=d.length-1),x.trigger("poptrox_switch",[e])}).on("poptrox_reset",function(){t(),x.data("width",r.popupWidth).data("height",r.popupHeight),b.hide().trigger("stopSpinning"),m.hide(),C.hide(),P.hide(),v.hide(),w.attr("src","").detach()}).on("poptrox_open",function(e,o){return g?!0:(g=!0,r.useBodyOverflow&&a.css("overflow","hidden"),r.onPopupOpen&&r.onPopupOpen(),x.addClass("loading"),void l.fadeTo(r.fadeSpeed,1,function(){x.trigger("poptrox_switch",[o,!0])}))}).on("poptrox_switch",function(o,p,i){var s;if(!i&&g)return!0;if(g=!0,x.addClass("loading").css("width",x.data("width")).css("height",x.data("height")),m.hide(),w.attr("src")&&w.attr("src",""),w.detach(),s=d[p],w=s.object,w.off("load"),v.css("text-indent","-9999px").show().append(w),"ajax"==s.type?e.get(s.src,function(e){w.html(e),w.trigger("load")}):w.attr("src",s.src),"image"!=s.type){var n,a;n=s.width,a=s.height,"%"==n.slice(-1)&&(n=parseInt(n.substring(0,n.length-1))/100*u.width()),"%"==a.slice(-1)&&(a=parseInt(a.substring(0,a.length-1))/100*u.height()),w.css("position","relative").css("outline","0").css("z-index",r.baseZIndex+100).width(n).height(a)}b.trigger("startSpinning").fadeIn(300),x.show(),r.popupIsFixed?(x.removeClass("loading").width(r.popupWidth).height(r.popupHeight),w.load(function(){w.off("load"),b.hide().trigger("stopSpinning"),m.trigger("update",[s.captionText]).fadeIn(r.fadeSpeed),C.fadeIn(r.fadeSpeed),v.css("text-indent",0).hide().fadeIn(r.fadeSpeed,function(){g=!1}),h=p,P.fadeIn(r.fadeSpeed)})):w.load(function(){t(),w.off("load"),b.hide().trigger("stopSpinning");var e=w.width(),o=w.height(),i=function(){m.trigger("update",[s.captionText]).fadeIn(r.fadeSpeed),C.fadeIn(r.fadeSpeed),v.css("text-indent",0).hide().fadeIn(r.fadeSpeed,function(){g=!1}),h=p,P.fadeIn(r.fadeSpeed),x.removeClass("loading").data("width",e).data("height",o).css("width","auto").css("height","auto")};e==x.data("width")&&o==x.data("height")?i():x.animate({width:e,height:o},r.popupSpeed,"swing",i)}),"image"!=s.type&&w.trigger("load")}).on("poptrox_close",function(){return g&&!r.usePopupForceClose?!0:(g=!0,x.hide().trigger("poptrox_reset"),r.onPopupClose&&r.onPopupClose(),void l.fadeOut(r.fadeSpeed,function(){r.useBodyOverflow&&a.css("overflow","auto"),g=!1}))}).trigger("poptrox_reset"),r.usePopupEasyClose?(m.on("click","a",function(e){e.stopPropagation()}),x.css("cursor","pointer").on("click",function(e){e.stopPropagation(),e.preventDefault(),x.trigger("poptrox_close")})):x.on("click",function(e){e.stopPropagation()}),u.keydown(function(e){if(x.is(":visible"))switch(e.keyCode){case 37:case 32:if(r.usePopupNav)return x.trigger("poptrox_previous"),!1;break;case 39:if(r.usePopupNav)return x.trigger("poptrox_next"),!1;break;case 27:return x.trigger("poptrox_close"),!1}}),n.find(r.selector).each(function(o){var t,p,i=e(this),s=i.find("img"),n=i.data("poptrox");if("ignore"!=n&&i.attr("href")){if(t={src:i.attr("href"),captionText:s.attr("title"),width:null,height:null,type:null,object:null,options:null},r.caption){if("function"==typeof r.caption)c=r.caption(i);else if("selector"in r.caption){var a;a=i.find(r.caption.selector),"attribute"in r.caption?c=a.attr(r.caption.attribute):(c=a.html(),r.caption.remove===!0&&a.remove())}}else c=s.attr("title");if(t.captionText=c,n){var l=n.split(",");0 in l&&(t.type=l[0]),1 in l&&(p=l[1].match(/([0-9%]+)x([0-9%]+)/),p&&3==p.length&&(t.width=p[1],t.height=p[2])),2 in l&&(t.options=l[2])}if(!t.type)switch(p=t.src.match(/\/\/([a-z0-9\.]+)\/.*/),(!p||p.length<2)&&(p=[!1]),p[1]){case"api.soundcloud.com":t.type="soundcloud";break;case"youtu.be":t.type="youtube";break;case"vimeo.com":t.type="vimeo";break;case"wistia.net":t.type="wistia";break;case"bcove.me":t.type="bcove";break;default:t.type="image"}switch(p=t.src.match(/\/\/[a-z0-9\.]+\/(.*)/),t.type){case"iframe":t.object=e('<iframe src="" frameborder="0"></iframe>'),t.object.on("click",function(e){e.stopPropagation()}).css("cursor","auto"),t.width&&t.height||(t.width="600",t.height="400");break;case"ajax":t.object=e('<div class="poptrox-ajax"></div>'),t.object.on("click",function(e){e.stopPropagation()}).css("cursor","auto").css("overflow","auto"),t.width&&t.height||(t.width="600",t.height="400");break;case"soundcloud":t.object=e('<iframe scrolling="no" frameborder="no" src=""></iframe>'),t.src="//w.soundcloud.com/player/?url="+escape(t.src)+(t.options?"&"+t.options:""),t.width="600",t.height="166";break;case"youtube":t.object=e('<iframe src="" frameborder="0" allowfullscreen="1"></iframe>'),t.src="//www.youtube.com/embed/"+p[1]+(t.options?"?"+t.options:""),t.width&&t.height||(t.width="800",t.height="480");break;case"vimeo":t.object=e('<iframe src="" frameborder="0" allowFullScreen="1"></iframe>'),t.src="//player.vimeo.com/video/"+p[1]+(t.options?"?"+t.options:""),t.width&&t.height||(t.width="800",t.height="480");break;case"wistia":t.object=e('<iframe src="" frameborder="0" allowFullScreen="1"></iframe>'),t.src="//fast.wistia.net/"+p[1]+(t.options?"?"+t.options:""),t.width&&t.height||(t.width="800",t.height="480");break;case"bcove":t.object=e('<iframe src="" frameborder="0" allowFullScreen="1" width="100%"></iframe>'),t.src="//bcove.me/"+p[1]+(t.options?"?"+t.options:""),t.width&&t.height||(t.width="640",t.height="360");break;default:if(t.object=e('<img src="" alt="" style="vertical-align:bottom" />'),r.preload){var p=document.createElement("img");p.src=t.src,f.push(p)}t.width=i.attr("width"),t.height=i.attr("height")}"file:"==window.location.protocol&&t.src.match(/^\/\//)&&(t.src="http:"+t.src),d.push(t),s.removeAttr("title"),i.removeAttr("href").css("cursor","pointer").css("outline",0).on("click",function(e){e.preventDefault(),e.stopPropagation(),x.trigger("poptrox_open",[o])})}}),n.prop("_poptrox",r),n}}(jQuery);



var skel=function(){"use strict";var t={breakpointIds:null,events:{},isInit:!1,obj:{attachments:{},breakpoints:{},head:null,states:{}},sd:"/",state:null,stateHandlers:{},stateId:"",vars:{},DOMReady:null,indexOf:null,isArray:null,iterate:null,matchesMedia:null,extend:function(e,n){t.iterate(n,function(i){t.isArray(n[i])?(t.isArray(e[i])||(e[i]=[]),t.extend(e[i],n[i])):"object"==typeof n[i]?("object"!=typeof e[i]&&(e[i]={}),t.extend(e[i],n[i])):e[i]=n[i]})},newStyle:function(t){var e=document.createElement("style");return e.type="text/css",e.innerHTML=t,e},_canUse:null,canUse:function(e){t._canUse||(t._canUse=document.createElement("div"));var n=t._canUse.style,i=e.charAt(0).toUpperCase()+e.slice(1);return e in n||"Moz"+i in n||"Webkit"+i in n||"O"+i in n||"ms"+i in n},on:function(e,n){var i=e.split(/[\s]+/);return t.iterate(i,function(e){var a=i[e];if(t.isInit){if("init"==a)return void n();if("change"==a)n();else{var r=a.charAt(0);if("+"==r||"!"==r){var o=a.substring(1);if(o in t.obj.breakpoints)if("+"==r&&t.obj.breakpoints[o].active)n();else if("!"==r&&!t.obj.breakpoints[o].active)return void n()}}}t.events[a]||(t.events[a]=[]),t.events[a].push(n)}),t},trigger:function(e){return t.events[e]&&0!=t.events[e].length?(t.iterate(t.events[e],function(n){t.events[e][n]()}),t):void 0},breakpoint:function(e){return t.obj.breakpoints[e]},breakpoints:function(e){function n(t,e){this.name=this.id=t,this.media=e,this.active=!1,this.wasActive=!1}return n.prototype.matches=function(){return t.matchesMedia(this.media)},n.prototype.sync=function(){this.wasActive=this.active,this.active=this.matches()},t.iterate(e,function(i){t.obj.breakpoints[i]=new n(i,e[i])}),window.setTimeout(function(){t.poll()},0),t},addStateHandler:function(e,n){t.stateHandlers[e]=n},callStateHandler:function(e){var n=t.stateHandlers[e]();t.iterate(n,function(e){t.state.attachments.push(n[e])})},changeState:function(e){t.iterate(t.obj.breakpoints,function(e){t.obj.breakpoints[e].sync()}),t.vars.lastStateId=t.stateId,t.stateId=e,t.breakpointIds=t.stateId===t.sd?[]:t.stateId.substring(1).split(t.sd),t.obj.states[t.stateId]?t.state=t.obj.states[t.stateId]:(t.obj.states[t.stateId]={attachments:[]},t.state=t.obj.states[t.stateId],t.iterate(t.stateHandlers,t.callStateHandler)),t.detachAll(t.state.attachments),t.attachAll(t.state.attachments),t.vars.stateId=t.stateId,t.vars.state=t.state,t.trigger("change"),t.iterate(t.obj.breakpoints,function(e){t.obj.breakpoints[e].active?t.obj.breakpoints[e].wasActive||t.trigger("+"+e):t.obj.breakpoints[e].wasActive&&t.trigger("-"+e)})},generateStateConfig:function(e,n){var i={};return t.extend(i,e),t.iterate(t.breakpointIds,function(e){t.extend(i,n[t.breakpointIds[e]])}),i},getStateId:function(){var e="";return t.iterate(t.obj.breakpoints,function(n){var i=t.obj.breakpoints[n];i.matches()&&(e+=t.sd+i.id)}),e},poll:function(){var e="";e=t.getStateId(),""===e&&(e=t.sd),e!==t.stateId&&t.changeState(e)},_attach:null,attach:function(e){var n=t.obj.head,i=e.element;return i.parentNode&&i.parentNode.tagName?!1:(t._attach||(t._attach=n.firstChild),n.insertBefore(i,t._attach.nextSibling),e.permanent&&(t._attach=i),!0)},attachAll:function(e){var n=[];t.iterate(e,function(t){n[e[t].priority]||(n[e[t].priority]=[]),n[e[t].priority].push(e[t])}),n.reverse(),t.iterate(n,function(e){t.iterate(n[e],function(i){t.attach(n[e][i])})})},detach:function(t){var e=t.element;return t.permanent||!e.parentNode||e.parentNode&&!e.parentNode.tagName?!1:(e.parentNode.removeChild(e),!0)},detachAll:function(e){var n={};t.iterate(e,function(t){n[e[t].id]=!0}),t.iterate(t.obj.attachments,function(e){e in n||t.detach(t.obj.attachments[e])})},attachment:function(e){return e in t.obj.attachments?t.obj.attachments[e]:null},newAttachment:function(e,n,i,a){return t.obj.attachments[e]={id:e,element:n,priority:i,permanent:a}},init:function(){t.initMethods(),t.initVars(),t.initEvents(),t.obj.head=document.getElementsByTagName("head")[0],t.isInit=!0,t.trigger("init")},initEvents:function(){t.on("resize",function(){t.poll()}),t.on("orientationChange",function(){t.poll()}),t.DOMReady(function(){t.trigger("ready")}),window.onload&&t.on("load",window.onload),window.onload=function(){t.trigger("load")},window.onresize&&t.on("resize",window.onresize),window.onresize=function(){t.trigger("resize")},window.onorientationchange&&t.on("orientationChange",window.onorientationchange),window.onorientationchange=function(){t.trigger("orientationChange")}},initMethods:function(){document.addEventListener?!function(e,n){t.DOMReady=n()}("domready",function(){function t(t){for(r=1;t=n.shift();)t()}var e,n=[],i=document,a="DOMContentLoaded",r=/^loaded|^c/.test(i.readyState);return i.addEventListener(a,e=function(){i.removeEventListener(a,e),t()}),function(t){r?t():n.push(t)}}):!function(e,n){t.DOMReady=n()}("domready",function(t){function e(t){for(h=1;t=i.shift();)t()}var n,i=[],a=!1,r=document,o=r.documentElement,s=o.doScroll,c="DOMContentLoaded",d="addEventListener",u="onreadystatechange",l="readyState",f=s?/^loaded|^c/:/^loaded|c/,h=f.test(r[l]);return r[d]&&r[d](c,n=function(){r.removeEventListener(c,n,a),e()},a),s&&r.attachEvent(u,n=function(){/^c/.test(r[l])&&(r.detachEvent(u,n),e())}),t=s?function(e){self!=top?h?e():i.push(e):function(){try{o.doScroll("left")}catch(n){return setTimeout(function(){t(e)},50)}e()}()}:function(t){h?t():i.push(t)}}),Array.prototype.indexOf?t.indexOf=function(t,e){return t.indexOf(e)}:t.indexOf=function(t,e){if("string"==typeof t)return t.indexOf(e);var n,i,a=e?e:0;if(!this)throw new TypeError;if(i=this.length,0===i||a>=i)return-1;for(0>a&&(a=i-Math.abs(a)),n=a;i>n;n++)if(this[n]===t)return n;return-1},Array.isArray?t.isArray=function(t){return Array.isArray(t)}:t.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)},Object.keys?t.iterate=function(t,e){if(!t)return[];var n,i=Object.keys(t);for(n=0;i[n]&&e(i[n],t[i[n]])!==!1;n++);}:t.iterate=function(t,e){if(!t)return[];var n;for(n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])===!1)break},window.matchMedia?t.matchesMedia=function(t){return""==t?!0:window.matchMedia(t).matches}:window.styleMedia||window.media?t.matchesMedia=function(t){if(""==t)return!0;var e=window.styleMedia||window.media;return e.matchMedium(t||"all")}:window.getComputedStyle?t.matchesMedia=function(t){if(""==t)return!0;var e=document.createElement("style"),n=document.getElementsByTagName("script")[0],i=null;e.type="text/css",e.id="matchmediajs-test",n.parentNode.insertBefore(e,n),i="getComputedStyle"in window&&window.getComputedStyle(e,null)||e.currentStyle;var a="@media "+t+"{ #matchmediajs-test { width: 1px; } }";return e.styleSheet?e.styleSheet.cssText=a:e.textContent=a,"1px"===i.width}:t.matchesMedia=function(t){if(""==t)return!0;var e,n,i,a,r={"min-width":null,"max-width":null},o=!1;for(i=t.split(/\s+and\s+/),e=0;e<i.length;e++)n=i[e],"("==n.charAt(0)&&(n=n.substring(1,n.length-1),a=n.split(/:\s+/),2==a.length&&(r[a[0].replace(/^\s+|\s+$/g,"")]=parseInt(a[1]),o=!0));if(!o)return!1;var s=document.documentElement.clientWidth,c=document.documentElement.clientHeight;return null!==r["min-width"]&&s<r["min-width"]||null!==r["max-width"]&&s>r["max-width"]||null!==r["min-height"]&&c<r["min-height"]||null!==r["max-height"]&&c>r["max-height"]?!1:!0},navigator.userAgent.match(/MSIE ([0-9]+)/)&&RegExp.$1<9&&(t.newStyle=function(t){var e=document.createElement("span");return e.innerHTML='&nbsp;<style type="text/css">'+t+"</style>",e})},initVars:function(){var e,n,i,a=navigator.userAgent;e="other",n=0,i=[["firefox",/Firefox\/([0-9\.]+)/],["bb",/BlackBerry.+Version\/([0-9\.]+)/],["bb",/BB[0-9]+.+Version\/([0-9\.]+)/],["opera",/OPR\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)/],["edge",/Edge\/([0-9\.]+)/],["safari",/Version\/([0-9\.]+).+Safari/],["chrome",/Chrome\/([0-9\.]+)/],["ie",/MSIE ([0-9]+)/],["ie",/Trident\/.+rv:([0-9]+)/]],t.iterate(i,function(t,i){return a.match(i[1])?(e=i[0],n=parseFloat(RegExp.$1),!1):void 0}),t.vars.browser=e,t.vars.browserVersion=n,e="other",n=0,i=[["ios",/([0-9_]+) like Mac OS X/,function(t){return t.replace("_",".").replace("_","")}],["ios",/CPU like Mac OS X/,function(t){return 0}],["wp",/Windows Phone ([0-9\.]+)/,null],["android",/Android ([0-9\.]+)/,null],["mac",/Macintosh.+Mac OS X ([0-9_]+)/,function(t){return t.replace("_",".").replace("_","")}],["windows",/Windows NT ([0-9\.]+)/,null],["bb",/BlackBerry.+Version\/([0-9\.]+)/,null],["bb",/BB[0-9]+.+Version\/([0-9\.]+)/,null]],t.iterate(i,function(t,i){return a.match(i[1])?(e=i[0],n=parseFloat(i[2]?i[2](RegExp.$1):RegExp.$1),!1):void 0}),t.vars.os=e,t.vars.osVersion=n,t.vars.IEVersion="ie"==t.vars.browser?t.vars.browserVersion:99,t.vars.touch="wp"==t.vars.os?navigator.msMaxTouchPoints>0:!!("ontouchstart"in window),t.vars.mobile="wp"==t.vars.os||"android"==t.vars.os||"ios"==t.vars.os||"bb"==t.vars.os}};return t.init(),t}();!function(t,e){"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?module.exports=e():t.skel=e()}(this,function(){return skel});



(function($) {

	/**
	 * Generate an indented list of links from a nav. Meant for use with panel().
	 * @return {jQuery} jQuery object.
	 */
	$.fn.navList = function() {

		var	$this = $(this);
			$a = $this.find('a'),
			b = [];

		$a.each(function() {

			var	$this = $(this),
				indent = Math.max(0, $this.parents('li').length - 1),
				href = $this.attr('href'),
				target = $this.attr('target');

			b.push(
				'<a ' +
					'class="link depth-' + indent + '"' +
					( (typeof target !== 'undefined' && target != '') ? ' target="' + target + '"' : '') +
					( (typeof href !== 'undefined' && href != '') ? ' href="' + href + '"' : '') +
				'>' +
					'<span class="indent-' + indent + '"></span>' +
					$this.text() +
				'</a>'
			);

		});

		return b.join('');

	};

	/**
	 * Panel-ify an element.
	 * @param {object} userConfig User config.
	 * @return {jQuery} jQuery object.
	 */
	$.fn.panel = function(userConfig) {

		// No elements?
			if (this.length == 0)
				return $this;

		// Multiple elements?
			if (this.length > 1) {

				for (var i=0; i < this.length; i++)
					$(this[i]).panel(userConfig);

				return $this;

			}

		// Vars.
			var	$this = $(this),
				$body = $('body'),
				$window = $(window),
				id = $this.attr('id'),
				config;

		// Config.
			config = $.extend({

				// Delay.
					delay: 0,

				// Hide panel on link click.
					hideOnClick: false,

				// Hide panel on escape keypress.
					hideOnEscape: false,

				// Hide panel on swipe.
					hideOnSwipe: false,

				// Reset scroll position on hide.
					resetScroll: false,

				// Reset forms on hide.
					resetForms: false,

				// Side of viewport the panel will appear.
					side: null,

				// Target element for "class".
					target: $this,

				// Class to toggle.
					visibleClass: 'visible'

			}, userConfig);

			// Expand "target" if it's not a jQuery object already.
				if (typeof config.target != 'jQuery')
					config.target = $(config.target);

		// Panel.

			// Methods.
				$this._hide = function(event) {

					// Already hidden? Bail.
						if (!config.target.hasClass(config.visibleClass))
							return;

					// If an event was provided, cancel it.
						if (event) {

							event.preventDefault();
							event.stopPropagation();

						}

					// Hide.
						config.target.removeClass(config.visibleClass);

					// Post-hide stuff.
						window.setTimeout(function() {

							// Reset scroll position.
								if (config.resetScroll)
									$this.scrollTop(0);

							// Reset forms.
								if (config.resetForms)
									$this.find('form').each(function() {
										this.reset();
									});

						}, config.delay);

				};

			// Vendor fixes.
				$this
					.css('-ms-overflow-style', '-ms-autohiding-scrollbar')
					.css('-webkit-overflow-scrolling', 'touch');

			// Hide on click.
				if (config.hideOnClick) {

					$this.find('a')
						.css('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');

					$this
						.on('click', 'a', function(event) {

							var $a = $(this),
								href = $a.attr('href'),
								target = $a.attr('target');

							if (!href || href == '#' || href == '' || href == '#' + id)
								return;

							// Cancel original event.
								event.preventDefault();
								event.stopPropagation();

							// Hide panel.
								$this._hide();

							// Redirect to href.
								window.setTimeout(function() {

									if (target == '_blank')
										window.open(href);
									else
										window.location.href = href;

								}, config.delay + 10);

						});

				}

			// Event: Touch stuff.
				$this.on('touchstart', function(event) {

					$this.touchPosX = event.originalEvent.touches[0].pageX;
					$this.touchPosY = event.originalEvent.touches[0].pageY;

				})

				$this.on('touchmove', function(event) {

					if ($this.touchPosX === null
					||	$this.touchPosY === null)
						return;

					var	diffX = $this.touchPosX - event.originalEvent.touches[0].pageX,
						diffY = $this.touchPosY - event.originalEvent.touches[0].pageY,
						th = $this.outerHeight(),
						ts = ($this.get(0).scrollHeight - $this.scrollTop());

					// Hide on swipe?
						if (config.hideOnSwipe) {

							var result = false,
								boundary = 20,
								delta = 50;

							switch (config.side) {

								case 'left':
									result = (diffY < boundary && diffY > (-1 * boundary)) && (diffX > delta);
									break;

								case 'right':
									result = (diffY < boundary && diffY > (-1 * boundary)) && (diffX < (-1 * delta));
									break;

								case 'top':
									result = (diffX < boundary && diffX > (-1 * boundary)) && (diffY > delta);
									break;

								case 'bottom':
									result = (diffX < boundary && diffX > (-1 * boundary)) && (diffY < (-1 * delta));
									break;

								default:
									break;

							}

							if (result) {

								$this.touchPosX = null;
								$this.touchPosY = null;
								$this._hide();

								return false;

							}

						}

					// Prevent vertical scrolling past the top or bottom.
						if (($this.scrollTop() < 0 && diffY < 0)
						|| (ts > (th - 2) && ts < (th + 2) && diffY > 0)) {

							event.preventDefault();
							event.stopPropagation();

						}

				});

			// Event: Prevent certain events inside the panel from bubbling.
				$this.on('click touchend touchstart touchmove', function(event) {
					event.stopPropagation();
				});

			// Event: Hide panel if a child anchor tag pointing to its ID is clicked.
				$this.on('click', 'a[href="#' + id + '"]', function(event) {

					event.preventDefault();
					event.stopPropagation();

					config.target.removeClass(config.visibleClass);

				});

		// Body.

			// Event: Hide panel on body click/tap.
				$body.on('click touchend', function(event) {
					$this._hide(event);
				});

			// Event: Toggle.
				$body.on('click', 'a[href="#' + id + '"]', function(event) {

					event.preventDefault();
					event.stopPropagation();

					config.target.toggleClass(config.visibleClass);

				});

		// Window.

			// Event: Hide on ESC.
				if (config.hideOnEscape)
					$window.on('keydown', function(event) {

						if (event.keyCode == 27)
							$this._hide(event);

					});

		return $this;

	};

	/**
	 * Apply "placeholder" attribute polyfill to one or more forms.
	 * @return {jQuery} jQuery object.
	 */
	$.fn.placeholder = function() {

		// Browser natively supports placeholders? Bail.
			if (typeof (document.createElement('input')).placeholder != 'undefined')
				return $(this);

		// No elements?
			if (this.length == 0)
				return $this;

		// Multiple elements?
			if (this.length > 1) {

				for (var i=0; i < this.length; i++)
					$(this[i]).placeholder();

				return $this;

			}

		// Vars.
			var $this = $(this);

		// Text, TextArea.
			$this.find('input[type=text],textarea')
				.each(function() {

					var i = $(this);

					if (i.val() == ''
					||  i.val() == i.attr('placeholder'))
						i
							.addClass('polyfill-placeholder')
							.val(i.attr('placeholder'));

				})
				.on('blur', function() {

					var i = $(this);

					if (i.attr('name').match(/-polyfill-field$/))
						return;

					if (i.val() == '')
						i
							.addClass('polyfill-placeholder')
							.val(i.attr('placeholder'));

				})
				.on('focus', function() {

					var i = $(this);

					if (i.attr('name').match(/-polyfill-field$/))
						return;

					if (i.val() == i.attr('placeholder'))
						i
							.removeClass('polyfill-placeholder')
							.val('');

				});

		// Password.
			$this.find('input[type=password]')
				.each(function() {

					var i = $(this);
					var x = $(
								$('<div>')
									.append(i.clone())
									.remove()
									.html()
									.replace(/type="password"/i, 'type="text"')
									.replace(/type=password/i, 'type=text')
					);

					if (i.attr('id') != '')
						x.attr('id', i.attr('id') + '-polyfill-field');

					if (i.attr('name') != '')
						x.attr('name', i.attr('name') + '-polyfill-field');

					x.addClass('polyfill-placeholder')
						.val(x.attr('placeholder')).insertAfter(i);

					if (i.val() == '')
						i.hide();
					else
						x.hide();

					i
						.on('blur', function(event) {

							event.preventDefault();

							var x = i.parent().find('input[name=' + i.attr('name') + '-polyfill-field]');

							if (i.val() == '') {

								i.hide();
								x.show();

							}

						});

					x
						.on('focus', function(event) {

							event.preventDefault();

							var i = x.parent().find('input[name=' + x.attr('name').replace('-polyfill-field', '') + ']');

							x.hide();

							i
								.show()
								.focus();

						})
						.on('keypress', function(event) {

							event.preventDefault();
							x.val('');

						});

				});

		// Events.
			$this
				.on('submit', function() {

					$this.find('input[type=text],input[type=password],textarea')
						.each(function(event) {

							var i = $(this);

							if (i.attr('name').match(/-polyfill-field$/))
								i.attr('name', '');

							if (i.val() == i.attr('placeholder')) {

								i.removeClass('polyfill-placeholder');
								i.val('');

							}

						});

				})
				.on('reset', function(event) {

					event.preventDefault();

					$this.find('select')
						.val($('option:first').val());

					$this.find('input,textarea')
						.each(function() {

							var i = $(this),
								x;

							i.removeClass('polyfill-placeholder');

							switch (this.type) {

								case 'submit':
								case 'reset':
									break;

								case 'password':
									i.val(i.attr('defaultValue'));

									x = i.parent().find('input[name=' + i.attr('name') + '-polyfill-field]');

									if (i.val() == '') {
										i.hide();
										x.show();
									}
									else {
										i.show();
										x.hide();
									}

									break;

								case 'checkbox':
								case 'radio':
									i.attr('checked', i.attr('defaultValue'));
									break;

								case 'text':
								case 'textarea':
									i.val(i.attr('defaultValue'));

									if (i.val() == '') {
										i.addClass('polyfill-placeholder');
										i.val(i.attr('placeholder'));
									}

									break;

								default:
									i.val(i.attr('defaultValue'));
									break;

							}
						});

				});

		return $this;

	};

	/**
	 * Moves elements to/from the first positions of their respective parents.
	 * @param {jQuery} $elements Elements (or selector) to move.
	 * @param {bool} condition If true, moves elements to the top. Otherwise, moves elements back to their original locations.
	 */
	$.prioritize = function($elements, condition) {

		var key = '__prioritize';

		// Expand $elements if it's not already a jQuery object.
			if (typeof $elements != 'jQuery')
				$elements = $($elements);

		// Step through elements.
			$elements.each(function() {

				var	$e = $(this), $p,
					$parent = $e.parent();

				// No parent? Bail.
					if ($parent.length == 0)
						return;

				// Not moved? Move it.
					if (!$e.data(key)) {

						// Condition is false? Bail.
							if (!condition)
								return;

						// Get placeholder (which will serve as our point of reference for when this element needs to move back).
							$p = $e.prev();

							// Couldn't find anything? Means this element's already at the top, so bail.
								if ($p.length == 0)
									return;

						// Move element to top of parent.
							$e.prependTo($parent);

						// Mark element as moved.
							$e.data(key, $p);

					}

				// Moved already?
					else {

						// Condition is true? Bail.
							if (condition)
								return;

						$p = $e.data(key);

						// Move element back to its original location (using our placeholder).
							$e.insertAfter($p);

						// Unmark element as moved.
							$e.removeData(key);

					}

			});

	};

})(jQuery);

function form_validate_jquery(container)
{
	var return_state = true;		
	$(container).find("input, select, textarea, file").each(function(){
		var title = $(this).attr("title");			
		switch($(this).attr("validation"))
		{				
			case "text":
				if($(this).val() == $(this).attr("placeholder") || $(this).val() == "")
				{
					$(this).css("border","1px solid red");
					$(this).val('');
					$(this).prev().addClass('active');
					$(this).attr("placeholder", ""+title+" cannot be blank!")
					
					return_state = false;													
				}
				else
				{
					$(this).css("border","1px solid green");
				}
			break;
			case "password":
				if($(this).val() == $(this).attr("placeholder") || $(this).val() == "")
				{
					$(this).css("border","1px solid red");
					$(this).val('');
					$(this).prev().addClass('active');
					$(this).attr("placeholder", ""+title+" cannot be blank!")
					
					return_state = false;													
				}
				else if($(this).val().length < 6)
				{
					$(this).css("border","1px solid red");
					$(this).val('');					
					$(this).attr("placeholder", ""+title+" should be min 6 char!")
					$(this).prev().addClass('active');
					return_state = false;		
				}
				else
				{
					$(this).css("border","1px solid green");
				}
			break;
			case "email":
				if($(this).val() == $(this).attr("placeholder") || $(this).val() == "")
				{
					$(this).css("border","1px solid red");
					$(this).val('');
					$(this).prev().addClass('active');
					$(this).attr("placeholder", ""+title+" cannot be blank!")							
					return_state = false;
				}
				else if($(this).val().indexOf('@') == -1 || $(this).val().indexOf('.') == -1)
				{
					$(this).css("border","1px solid red");
					$(this).val('');
					$(this).prev().addClass('active');
					$(this).attr("placeholder", ""+title+" is not valid email address!")							
					return_state = false;
				}
				else
				{
					$(this).css("border","1px solid green");
				}
			break;
			case "number":
				if($(this).val() == $(this).attr("placeholder") || $(this).val() == "")
				{
					$(this).css("border","1px solid red");
					$(this).val('');
					$(this).prev().addClass('active');
					$(this).attr("placeholder", ""+title+" cannot be blank!")							
					return_state = false;
				}
				else if($(this).val().length < 10)
				{
					$(this).css("border","1px solid red");
					$(this).val('');
					$(this).prev().addClass('active');
					$(this).attr("placeholder", "Enter Valid Mobile Number!")							
					return_state = false;
				}
				else
				{
					$(this).css("border","1px solid green");
				}				
			break;
			case "mobile":
				if($(this).val() == $(this).attr("placeholder") || $(this).val() == "")
				{
					$(this).css("border","1px solid red");
					$(this).val('');
					$(this).prev().addClass('active');
					$(this).attr("placeholder", ""+title+" cannot be blank !")							
					return_state = false;
				}
				else if($(this).val().length < 10)
				{
					$(this).css("border","1px solid red");
					$(this).val('');
					$(this).prev().addClass('active');
					$(this).attr("placeholder", ""+title+" must be 10 digits !")							
					return_state = false;
				}
				else
				{
					$(this).css("border","1px solid green");
				}				
			break;
			case "file":
				if($(this).val() == $(this).attr("placeholder") || $(this).val() == "")
				{
					$(this).prev().css("border","1px solid red");
					$(this).val('');
					$(this).prev().addClass('active');
					return_state = false;													
				}
				else
				{
					var extension = $(this).val().split('.').pop().toLowerCase();
					if($.inArray(extension, ['pdf','doc','docx','xls','xlsx','ppt','pptx','jpg','jpeg']) == -1) {
						$(this).prev().css("border","1px solid red");
						$(this).val('');
						$(this).prev().addClass('active');
						$(this).parents('.file-upload').find('span').html('Please upload valid file format');
						return_state = false;	
					}
					else {
						$(this).prev().css("border","1px solid green");
					}
				}
			break;
		}
	});
	return return_state;
}

$(window).load(function(){
	var parameter=window.location.href.slice(window.location.href.indexOf('?')+1).split('&');
	var decodedparameter=decodeURIComponent(parameter)
	var param=decodedparameter.split('=');
	if(param[0]=="enquiry"){ sessionStorage.removeItem('leadpage'); alert("Your Enquiry has been Submitted Successfully. Our team will contact you shortly."); } 
	else if(param[0]=="error"){ alert("The code is invalid."); }
});




(function($) {

	var settings = {

		// Parallax background effect?
			parallax: true,

		// Parallax factor (lower = more intense, higher = less intense).
			parallaxFactor: 20

	};

	skel.breakpoints({
		xlarge: '(max-width: 1800px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)'
	});

	$(function() {

		var $window = $(window),
			$body = $('body'),
			$header = $('#header'),
			$footer = $('#footer'),
			$main = $('#main');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// Touch?
			if (skel.vars.mobile) {

				// Turn on touch mode.
					$body.addClass('is-touch');

				// Height fix (mostly for iOS).
					window.setTimeout(function() {
						$window.scrollTop($window.scrollTop() + 1);
					}, 0);

			}

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Footer.
			skel.on('+medium', function() {
				$footer.insertAfter($main);
			});

			skel.on('-medium !medium', function() {
				$footer.appendTo($header);
			});

		// Header.

			// Parallax background.

				// Disable parallax on IE (smooth scrolling is jerky), and on mobile platforms (= better performance).
					if (skel.vars.browser == 'ie'
					||	skel.vars.mobile)
						settings.parallax = false;

				if (settings.parallax) {

					skel.on('change', function() {

						if (skel.breakpoint('medium').active) {

							$window.off('scroll.strata_parallax');
							$header.css('background-position', 'top left, center center');

						}
						else {

							$header.css('background-position', 'left 0px');

							$window.on('scroll.strata_parallax', function() {
								$header.css('background-position', 'left ' + (-1 * (parseInt($window.scrollTop()) / settings.parallaxFactor)) + 'px');
							});

						}

					});

					$window.on('load', function() {
						$window.triggerHandler('scroll');
					});

				}

		// Main Sections: Two.

			// Lightbox gallery.
				$window.on('load', function() {

					$('#two').poptrox({
						caption: function($a) { return $a.next('h3').text(); },
						overlayColor: '#2c2c2c',
						overlayOpacity: 0.85,
						popupCloserText: '',
						popupLoaderText: '',
						selector: '.work-item a.image',
						usePopupCaption: true,
						usePopupDefaultStyling: false,
						usePopupEasyClose: false,
						usePopupNav: true,
						windowMargin: (skel.breakpoint('small').active ? 0 : 50)
					});

				});

	});

})(jQuery);