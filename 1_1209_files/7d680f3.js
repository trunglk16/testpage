(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{190:function(t,e,n){"use strict";(function(t,o){n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return l}));n(56),n(12),n(41);function r(){!function(t){t.fn.twentytwenty=function(e){e=t.extend({default_offset_pct:.5,orientation:"horizontal",before_label:"Before",after_label:"After",no_overlay:!1,move_slider_on_hover:!1,move_with_handle_only:!0,click_to_move:!1},e);return this.each((function(){var n=e.default_offset_pct,o=t(this),r=e.orientation,l="vertical"===r?"down":"left",c="vertical"===r?"up":"right";if(o.wrap("<div class='twentytwenty-wrapper twentytwenty-"+r+"'></div>"),!e.no_overlay){o.append("<div class='twentytwenty-overlay'></div>");var d=o.find(".twentytwenty-overlay");d.append("<div class='twentytwenty-before-label' data-content='"+e.before_label+"'></div>"),d.append("<div class='twentytwenty-after-label' data-content='"+e.after_label+"'></div>")}var f=o.find("img:first"),v=o.find("img:last");o.append("<div class='twentytwenty-handle'></div>");var h=o.find(".twentytwenty-handle");h.append("<span class='twentytwenty-"+l+"-arrow'></span>"),h.append("<span class='twentytwenty-"+c+"-arrow'></span>"),o.addClass("twentytwenty-container"),f.addClass("twentytwenty-before"),v.addClass("twentytwenty-after");var y=function(t){var e,n,l,c=(e=t,n=f.width(),l=f.height(),{w:n+"px",h:l+"px",cw:e*n+"px",ch:e*l+"px"});h.css("vertical"===r?"top":"left","vertical"===r?c.ch:c.cw),function(t){"vertical"===r?(f.css("clip","rect(0,"+t.w+","+t.ch+",0)"),v.css("clip","rect("+t.ch+","+t.w+","+t.h+",0)")):(f.css("clip","rect(0,"+t.cw+","+t.h+",0)"),v.css("clip","rect(0,"+t.w+","+t.h+","+t.cw+")")),o.css("height",t.h),o.css("width",t.w)}(c)},m=function(t,e){var n,o,l;return n="vertical"===r?(e-_)/z:(t-w)/C,o=0,l=1,Math.max(o,Math.min(l,n))};t(window).on("resize.twentytwenty",(function(t){y(n)}));var w=0,_=0,C=0,z=0,E=function(t){((t.distX>t.distY&&t.distX<-t.distY||t.distX<t.distY&&t.distX>-t.distY)&&"vertical"!==r||(t.distX<t.distY&&t.distX<-t.distY||t.distX>t.distY&&t.distX>-t.distY)&&"vertical"===r)&&t.preventDefault(),o.addClass("active"),w=o.offset().left,_=o.offset().top,C=f.width(),z=f.height()},A=function(t){o.hasClass("active")&&(n=m(t.pageX,t.pageY),y(n))},k=function(){o.removeClass("active")},S=e.move_with_handle_only?h:o;S.on("movestart",E),S.on("move",A),S.on("moveend",k),e.move_slider_on_hover&&(o.on("mouseenter",E),o.on("mousemove",A),o.on("mouseleave",k)),h.on("touchmove",(function(t){t.preventDefault()})),o.find("img").on("mousedown",(function(t){t.preventDefault()})),e.click_to_move&&o.on("click",(function(t){w=o.offset().left,_=o.offset().top,C=f.width(),z=f.height(),n=m(t.pageX,t.pageY),y(n)})),t(window).trigger("resize.twentytwenty")}))}}(t)}function l(){o(document).ready((function(){function t(t){var e=o(t).parent();e.twentytwenty({default_offset_pct:.5,before_label:e.find(".twenty-label.before").val(),after_label:e.find(".twenty-label.after").val()}),e.find(".twenty-label").css("display","none")}for(var e=document.querySelectorAll(".twenty-before-image"),n=Array.prototype.slice.call(e),i=0;i<n.length;++i)n[i].complete?t(n[i]):n[i].addEventListener("load",(function(){t(this)}))}))}}).call(this,n(25),n(25))},269:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(12),n(35),n(39),n(152),n(131),n(41),n(32),n(19),n(92),n(108),n(44),n(30),n(186),n(67),n(81),n(49);function o(t){var e=window.location.href,n=(new URL(e),-1!==e.indexOf("?")?e.slice(e.indexOf("?")+1):"");if(n.length>0){var o=function(t){var e=t.split("/")[0].split("?")[1].split("&"),n=null,data=[];return e.forEach((function(t){n=t.split("="),data.push({key:n[0],value:n[1]})})),data},r=function(t,e,r){var l=t.match(/#([^#]+)$/),c=t.match(/\?([^\?]+)$/)?"&":"?",d=new URL(t),data=d.search?o(d.search):null;if(data)if(data.filter((function(t){return t.key===e})).length>0)for(var i=0;i<data.length;i++)data[i].key===e&&(t=t.replaceAll(data[i].key+"="+data[i].value,data[i].key+"="+r));else t.includes(n)||(l&&(t=t.replace(l[0],"")),t+=c+n,l&&(t+=l[0]));else l&&(t=t.replace(l[0],"")),t+=c+n,l&&(t+=l[0]);return t},l=t;if(l.toString())for(var i=0;i<l.length;i++){var c=l[i],d=location.search,f=o(d)[0];try{for(var v=document.querySelectorAll("a.change-url-param"),h=0,y=v.length;h<y;h++)switch(v[h].tagName){case"A":v[h].href=r(v[h].href,c,f.value);break;case"FORM":v[h].action=r(v[h].action,c,f.value);break;case"IFRAME":v[h].src=r(v[h].src,c,f.value)}}catch(t){console.log(t)}}else document.querySelectorAll("a.change-url-param").forEach((function(t){if(t.href){var e=new URL(t);""===e.hash&&(""!==e.searchParams.toString()?t.href+="&"+n:t.href+="?"+n)}}))}}},270:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return o}));n(12),n(32),n(56),n(38),n(187),n(35),n(39),n(152),n(131);function o(e){var i,s,n,o,a,r;i=window,s=document,n="script",o="ga",i.GoogleAnalyticsObject=o,i[o]=i[o]||function(){(i[o].q=i[o].q||[]).push(arguments)},i[o].l=1*new Date,a=s.createElement(n),r=s.getElementsByTagName(n)[0],a.async=1,a.src="https://www.google-analytics.com/analytics.js",r.parentNode.insertBefore(a,r),e.forEach((function(t,e){var n="gaInfo"+e;ga("create",t,{name:n}),ga("".concat(n,".send"),"pageview")})),t((function(t){var n=t("#adplanFlag").val();t("#articleContentContainer, #questionContentContainer").find(".gaClickEvent").each((function(o,link){var r=t(link),l=r.attr("data-gaevent-label");"survey_submit"!==l&&r.click((function(){if(l){var o,c=null!==(o=t("#urlTag").val())&&void 0!==o?o:"";l+=c}else l=t("#gaEventLabel").val();var d=r.attr("href")?r.attr("href"):t("#fullBaseUrl").val(),f=r.attr("target")?r.attr("target"):"_self",v=r.attr("data-gaevent-category")?r.attr("data-gaevent-category"):"button",h=r.attr("data-gaevent-action")?r.attr("data-gaevent-action"):"click",y=r.attr("data-gaevent-value")?r.attr("data-gaevent-value"):"1",m=window._adp&&window._adp.decorate?window._adp.decorate(d):d,w=r.attr("gunosy")?r.attr("gunosy"):"",_=r.attr("ebis")?r.attr("ebis"):"";return e.length>0&&e.forEach((function(t,e){var n="gaInfo"+e;ga("create",t,{name:n}),ga(n+".send","event",v,h,l,y,null)})),t((function(){var t="true"===w&&"undefined"!=typeof GunosyTransit,e="true"===_&&"undefined"!=typeof ebis;t||e?setTimeout((function(){if(t&&(link=GunosyTransit.link(d)),e){var n=ebis.args[0],o=new URL(d);o.searchParams.append("argument",n),link=ebis.link(o.href)}window.open(link,f)}),500):"1"===n?setTimeout(window.open(m,f),500):setTimeout(window.open(d,f),500)})),!1}))}))}))}}).call(this,n(25))},305:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var o=n(4),r=n(195),l=n(228),c=n(315);function d(){return new r.a({mode:"history",routes:[{path:"/",component:c.a},{path:"/:clientUrl/:articleUrl",component:l.a},{path:"/:clientUrl/:articleUrl/:urlTag?",component:l.a}]})}o.a.use(r.a)},306:function(t,e,n){"use strict";function o(article){var t,e,n,o,r,l,c,d,f,v,h,y,m={};return m.id=null!==(t=article.id)&&void 0!==t?t:"",m.title=null!==(e=article.survey_title)&&void 0!==e?e:"",m.topImage=null!==(n=article.survey_top_image)&&void 0!==n?n:"",m.topImageText=article.survey_top_image_text?JSON.parse(article.survey_top_image_text):{},m.button=null!==(o=article.survey_button)&&void 0!==o?o:{},m.tplColor=article.survey_template?JSON.parse(article.survey_template):{},m.surveyContent=article.survey_content?JSON.parse(article.survey_content):[],m.content=null!==(r=article.content)&&void 0!==r?r:"",m.footer=null!==(l=article.survey_footer)&&void 0!==l?l:"",m.clientUrl=null!==(c=article.client_url)&&void 0!==c?c:"",m.articleUrl=null!==(d=article.articl_url)&&void 0!==d?d:"",m.specificParameters=null!==(f=article.specific_parameters)&&void 0!==f?f:'[""]',m.headTag=null!==(v=article.head_tag)&&void 0!==v?v:'[""]',m.bodyTag=null!==(h=article.body_tag)&&void 0!==h?h:'[""]',m.bodyTagTop=null!==(y=article.body_tag_top)&&void 0!==y?y:'[""]',m.title=article.survey_title&&article.survey_title.length>0?article.survey_title:"",m.footerBackgroundColor=article.article_footer_color,m}n.d(e,"a",(function(){return o}))},307:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return r}));var o=n(28);n(12),n(91),n(19),n(49),n(188),n(30),n(38);function r(){var a,e;a=window,e=function(a,b){if(b.getElementsByClassName){var t,e,n=b.documentElement,o=a.Date,g=a.HTMLPictureElement,r="addEventListener",i="getAttribute",l=a[r],c=a.setTimeout,d=a.requestAnimationFrame||c,f=a.requestIdleCallback,v=/^picture$/i,h=["load","error","lazyincluded","_lazyloaded"],p={},q=Array.prototype.forEach,y=function(a,b){return p[b]||(p[b]=new RegExp("(\\s|^)"+b+"(\\s|$)")),p[b].test(a[i]("class")||"")&&p[b]},s=function(a,b){y(a,b)||a.setAttribute("class",(a[i]("class")||"").trim()+" "+b)},m=function(a,b){var t;(t=y(a,b))&&a.setAttribute("class",(a[i]("class")||"").replace(t," "))},u=function u(a,b,t){var e=t?r:"removeEventListener";t&&u(a,b),h.forEach((function(t){a[e](t,b)}))},w=function(a,e,n,o,g){var r=b.createEvent("CustomEvent");return n||(n={}),n.instance=t,r.initCustomEvent(e,!o,!g,n),a.dispatchEvent(r),r},_=function(b,t){var n;!g&&(n=a.picturefill||e.pf)?(t&&t.src&&!b[i]("srcset")&&b.setAttribute("srcset",t.src),n({reevaluate:!0,elements:[b]})):t&&t.src&&(b.src=t.src)},C=function(a,b){return(getComputedStyle(a,null)||{})[b]},z=function(a,b,t){for(t=t||a.offsetWidth;t<e.minSize&&b&&!a._lazysizesWidth;)t=b.offsetWidth,b=b.parentNode;return t},E=function(){var a,t,e=[],n=[],o=e,g=function(){var b=o;for(o=e.length?n:e,a=!0,t=!1;b.length;)b.shift()();a=!1},r=function(e,n){a&&!n?e.apply(this,arguments):(o.push(e),t||(t=!0,(b.hidden?c:d)(g)))};return r._lsFlush=g,r}(),A=function(a,b){return b?function(){E(a)}:function(){var b=this,t=arguments;E((function(){a.apply(b,t)}))}},k=function(a){var b,t=0,n=e.throttleDelay,g=e.ricTimeout,r=function(){b=!1,t=o.now(),a()},i=f&&g>49?function(){f(r,{timeout:g}),g!==e.ricTimeout&&(g=e.ricTimeout)}:A((function(){c(r)}),!0);return function(a){var e;(a=!0===a)&&(g=33),b||(b=!0,0>(e=n-(o.now()-t))&&(e=0),a||9>e?i():c(i,e))}},S=function(a){var b,t,e=99,n=function(){b=null,a()},g=function g(){var a=o.now()-t;e>a?c(g,e-a):(f||n)(n)};return function(){t=o.now(),b||(b=c(g,e))}};!function(){var b,t={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(b in e=a.lazySizesConfig||a.lazysizesConfig||{},t)b in e||(e[b]=t[b]);a.lazySizesConfig=e,c((function(){e.init&&N()}))}();var T=function(){var g,d,f,h,p,z,T,N,I,M,O,L,B,P,R=/^img$/i,X=/^iframe$/i,F="onscroll"in a&&!/(gle|ing)bot/.test(navigator.userAgent),D=0,Y=0,G=0,W=-1,U=function t(a){G--,a&&a.target&&u(a.target,t),(!a||0>G||!a.target)&&(G=0)},H=function(a,t){var e,o=a,g="hidden"==C(b.body,"visibility")||"hidden"!=C(a.parentNode,"visibility")&&"hidden"!=C(a,"visibility");for(N-=t,O+=t,I-=t,M+=t;g&&(o=o.offsetParent)&&o!=b.body&&o!=n;)(g=(C(o,"opacity")||1)>0)&&"visible"!=C(o,"overflow")&&(e=o.getBoundingClientRect(),g=M>e.left&&I<e.right&&O>e.top-1&&N<e.bottom+1);return g},$=function(){var a,o,r,l,c,f,v,p,q,y=t.elements;if((h=e.loadMode)&&8>G&&(a=y.length)){o=0,W++,null==B&&("expand"in e||(e.expand=n.clientHeight>500&&n.clientWidth>500?500:370),L=e.expand,B=L*e.expFactor),B>Y&&1>G&&W>2&&h>2&&!b.hidden?(Y=B,W=0):Y=h>1&&W>1&&6>G?L:D;for(;a>o;o++)if(y[o]&&!y[o]._lazyRace)if(F)if((p=y[o][i]("data-expand"))&&(f=1*p)||(f=Y),q!==f&&(z=innerWidth+f*P,T=innerHeight+f,v=-1*f,q=f),r=y[o].getBoundingClientRect(),(O=r.bottom)>=v&&(N=r.top)<=T&&(M=r.right)>=v*P&&(I=r.left)<=z&&(O||M||I||N)&&(e.loadHidden||"hidden"!=C(y[o],"visibility"))&&(d&&3>G&&!p&&(3>h||4>W)||H(y[o],f))){if(et(y[o]),c=!0,G>9)break}else!c&&d&&!l&&4>G&&4>W&&h>2&&(g[0]||e.preloadAfterLoad)&&(g[0]||!p&&(O||M||I||N||"auto"!=y[o][i](e.sizesAttr)))&&(l=g[0]||y[o]);else et(y[o]);l&&!c&&et(l)}},J=k($),j=function(a){s(a.target,e.loadedClass),m(a.target,e.loadingClass),u(a.target,K),w(a.target,"lazyloaded")},V=A(j),K=function(a){V({target:a.target})},Q=function(a,b){try{a.contentWindow.location.replace(b)}catch(t){a.src=b}},Z=function(a){var b,t=a[i](e.srcsetAttr);(b=e.customMedia[a[i]("data-media")||a[i]("media")])&&a.setAttribute("media",b),t&&a.setAttribute("srcset",t)},tt=A((function(a,b,t,n,o){var g,r,l,d,h,p;(h=w(a,"lazybeforeunveil",b)).defaultPrevented||(n&&(t?s(a,e.autosizesClass):a.setAttribute("sizes",n)),r=a[i](e.srcsetAttr),g=a[i](e.srcAttr),o&&(d=(l=a.parentNode)&&v.test(l.nodeName||"")),p=b.firesLoad||"src"in a&&(r||g||d),h={target:a},p&&(u(a,U,!0),clearTimeout(f),f=c(U,2500),s(a,e.loadingClass),u(a,K,!0)),d&&q.call(l.getElementsByTagName("source"),Z),r?a.setAttribute("srcset",r):g&&!d&&(X.test(a.nodeName)?Q(a,g):a.src=g),o&&(r||d)&&_(a,{src:g})),a._lazyRace&&delete a._lazyRace,m(a,e.lazyClass),E((function(){(!p||a.complete&&a.naturalWidth>1)&&(p?U(h):G--,j(h))}),!0)})),et=function(a){var b,t=R.test(a.nodeName),n=t&&(a[i](e.sizesAttr)||a[i]("sizes")),o="auto"==n;(!o&&d||!t||!a[i]("src")&&!a.srcset||a.complete||y(a,e.errorClass)||!y(a,e.lazyClass))&&(b=w(a,"lazyunveilread").detail,o&&x.updateElem(a,!0,a.offsetWidth),a._lazyRace=!0,G++,tt(a,b,o,n,t))},nt=function t(){if(!d){if(o.now()-p<999)return void c(t,999);var a=S((function(){e.loadMode=3,J()}));d=!0,e.loadMode=3,J(),l("scroll",(function(){3==e.loadMode&&(e.loadMode=2),a()}),!0)}};return{_:function(){p=o.now(),t.elements=b.getElementsByClassName(e.lazyClass),g=b.getElementsByClassName(e.lazyClass+" "+e.preloadClass),P=e.hFac,l("scroll",J,!0),l("resize",J,!0),a.MutationObserver?new MutationObserver(J).observe(n,{childList:!0,subtree:!0,attributes:!0}):(n[r]("DOMNodeInserted",J,!0),n[r]("DOMAttrModified",J,!0),setInterval(J,999)),l("hashchange",J,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach((function(a){b[r](a,J,!0)})),/d$|^c/.test(b.readyState)?nt():(l("load",nt),b[r]("DOMContentLoaded",J),c(nt,2e4)),t.elements.length?($(),E._lsFlush()):J()},checkElems:J,unveil:et}}(),x=function(){var a,t=A((function(a,b,t,e){var n,o,g;if(a._lazysizesWidth=e,e+="px",a.setAttribute("sizes",e),v.test(b.nodeName||""))for(o=0,g=(n=b.getElementsByTagName("source")).length;g>o;o++)n[o].setAttribute("sizes",e);t.detail.dataAttr||_(a,t.detail)})),n=function(a,b,e){var n,o=a.parentNode;o&&(e=z(a,o,e),n=w(a,"lazybeforesizes",{width:e,dataAttr:!!b}),n.defaultPrevented||(e=n.detail.width)&&e!==a._lazysizesWidth&&t(a,o,n,e))},o=function(){var b,t=a.length;if(t)for(b=0;t>b;b++)n(a[b])},g=S(o);return{_:function(){a=b.getElementsByClassName(e.autosizesClass),l("resize",g)},checkElems:g,updateElem:n}}(),N=function t(){t.i||(t.i=!0,x._(),T._())};return t={cfg:e,autoSizer:x,loader:T,init:N,uP:_,aC:s,rC:m,hC:y,fire:w,gW:z,rAF:E}}}(a,a.document),a.lazySizes=e,"object"==Object(o.a)(t)&&t.exports&&(t.exports=e)}}).call(this,n(385)(t))},308:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var o=n(113),r=n(317),l=n(318);function c(){new o.a(".swiper-container.image-swipe",{loop:!0,pagination:{el:".swiper-pagination",clickable:!0},observer:!0,observeParents:!0,parallax:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),new o.a(".swiper-container.image-click",{loop:!0,allowTouchMove:!1,effect:"fade",pagination:{el:".swiper-pagination"},on:{tap:function(){this.slideNext()}}})}o.a.use([r.a,l.a])},309:function(t,e,n){"use strict";(function(t){function o(){var e=0;if(t("#pop-outer").length>0){t("#pop-inter").append('<button class="close">X</button>');var n=t("#pop-outer").attr("data-background-color");n&&t("#pop-outer").css("background-color",n+80);var o=t("#pop-inter").attr("data-width"),r=t("#pop-inter").attr("data-height"),l=t("#pop-inter").attr("data-effect");o&&t("#pop-inter").css("width",o+"px"),r&&t("#pop-inter").css("height",r+"px"),l&&("rotate"!==l?(t("#pop-outer").css("animation-name",l),t("#pop-outer").css("animation-duration",".5s")):(t("#pop-inter").css("animation-name",l),t("#pop-inter").css("animation-duration",".5s"))),t(".close").click((function(){e++,t("#pop-outer").css("display","none")})),history.pushState(window.location.href,document.title,location.href),window.addEventListener("popstate",(function(){e>=1?history.back():(t("#pop-outer").css("display","flex"),history.pushState(window.location.href,document.title,location.href))}))}}n.d(e,"a",(function(){return o}))}).call(this,n(25))},431:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"actions",(function(){return r})),n.d(e,"getters",(function(){return l})),n.d(e,"mutations",(function(){return c}));var o=function(){return{article:{},clientGaInfo:[],specParams:[],numbers:[1,2,3]}},r={getArticleById:function(t,e){t.commit("GET_ARTICLE_BY_ID",e)},setClientGaInfo:function(t,e){t.commit("SAVE_CLIENT_GA_INFOS",e)},setSpecParams:function(t,e){t.commit("SAVE_SPEC_PARAMS",e)}},l={getClientGaInfo:function(t){return t.clientGaInfo},getSpecParams:function(t){return t.specParams}},c={GET_ARTICLE_BY_ID:function(t,e){},SAVE_CLIENT_GA_INFOS:function(t,e){t.clientGaInfo=null!=e?e:[]},SAVE_SPEC_PARAMS:function(t,e){t.specParams=null!=e?e:[]}}},96:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r}));var o={CHOOSE_ONE_TYPE:4,SELECT_BOX:0,RADIO_BOX:1,CHECK_BOX:2,TEXTAREA:3},r={title:"Like!NEWS",image_link:"https://likecms.s3-ap-northeast-1.amazonaws.com/images%2F8db5c127-688e-46ba-963a-f33ac3c7b9485953916584797469629.png"}}},[[520,26,14,18,17,13,15,19,16,27,28,29,12,3,8,0,10,11,6,2,9,7,4,1]]]);