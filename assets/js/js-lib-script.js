/* MIT https://github.com/fabiospampinato/cash */
(function(){"use strict";var C=document,D=window,st=C.documentElement,L=C.createElement.bind(C),ft=L("div"),q=L("table"),Mt=L("tbody"),ot=L("tr"),H=Array.isArray,S=Array.prototype,Dt=S.concat,U=S.filter,at=S.indexOf,ct=S.map,Bt=S.push,ht=S.slice,z=S.some,_t=S.splice,Pt=/^#(?:[\w-]|\\.|[^\x00-\xa0])*$/,Ht=/^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/,$t=/<.+>/,jt=/^\w+$/;function J(t,n){var r=It(n);return!t||!r&&!A(n)&&!c(n)?[]:!r&&Ht.test(t)?n.getElementsByClassName(t.slice(1).replace(/\\/g,"")):!r&&jt.test(t)?n.getElementsByTagName(t):n.querySelectorAll(t)}var dt=function(){function t(n,r){if(n){if(Y(n))return n;var i=n;if(g(n)){var e=r||C;if(i=Pt.test(n)&&A(e)?e.getElementById(n.slice(1).replace(/\\/g,"")):$t.test(n)?yt(n):Y(e)?e.find(n):g(e)?o(e).find(n):J(n,e),!i)return}else if(O(n))return this.ready(n);(i.nodeType||i===D)&&(i=[i]),this.length=i.length;for(var s=0,f=this.length;s<f;s++)this[s]=i[s]}}return t.prototype.init=function(n,r){return new t(n,r)},t}(),u=dt.prototype,o=u.init;o.fn=o.prototype=u,u.length=0,u.splice=_t,typeof Symbol=="function"&&(u[Symbol.iterator]=S[Symbol.iterator]);function Y(t){return t instanceof dt}function B(t){return!!t&&t===t.window}function A(t){return!!t&&t.nodeType===9}function It(t){return!!t&&t.nodeType===11}function c(t){return!!t&&t.nodeType===1}function Ft(t){return!!t&&t.nodeType===3}function Wt(t){return typeof t=="boolean"}function O(t){return typeof t=="function"}function g(t){return typeof t=="string"}function v(t){return t===void 0}function P(t){return t===null}function lt(t){return!isNaN(parseFloat(t))&&isFinite(t)}function G(t){if(typeof t!="object"||t===null)return!1;var n=Object.getPrototypeOf(t);return n===null||n===Object.prototype}o.isWindow=B,o.isFunction=O,o.isArray=H,o.isNumeric=lt,o.isPlainObject=G;function d(t,n,r){if(r){for(var i=t.length;i--;)if(n.call(t[i],i,t[i])===!1)return t}else if(G(t))for(var e=Object.keys(t),i=0,s=e.length;i<s;i++){var f=e[i];if(n.call(t[f],f,t[f])===!1)return t}else for(var i=0,s=t.length;i<s;i++)if(n.call(t[i],i,t[i])===!1)return t;return t}o.each=d,u.each=function(t){return d(this,t)},u.empty=function(){return this.each(function(t,n){for(;n.firstChild;)n.removeChild(n.firstChild)})};function $(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var r=Wt(t[0])?t.shift():!1,i=t.shift(),e=t.length;if(!i)return{};if(!e)return $(r,o,i);for(var s=0;s<e;s++){var f=t[s];for(var a in f)r&&(H(f[a])||G(f[a]))?((!i[a]||i[a].constructor!==f[a].constructor)&&(i[a]=new f[a].constructor),$(r,i[a],f[a])):i[a]=f[a]}return i}o.extend=$,u.extend=function(t){return $(u,t)};var qt=/\S+/g;function j(t){return g(t)?t.match(qt)||[]:[]}u.toggleClass=function(t,n){var r=j(t),i=!v(n);return this.each(function(e,s){c(s)&&d(r,function(f,a){i?n?s.classList.add(a):s.classList.remove(a):s.classList.toggle(a)})})},u.addClass=function(t){return this.toggleClass(t,!0)},u.removeAttr=function(t){var n=j(t);return this.each(function(r,i){c(i)&&d(n,function(e,s){i.removeAttribute(s)})})};function Ut(t,n){if(t){if(g(t)){if(arguments.length<2){if(!this[0]||!c(this[0]))return;var r=this[0].getAttribute(t);return P(r)?void 0:r}return v(n)?this:P(n)?this.removeAttr(t):this.each(function(e,s){c(s)&&s.setAttribute(t,n)})}for(var i in t)this.attr(i,t[i]);return this}}u.attr=Ut,u.removeClass=function(t){return arguments.length?this.toggleClass(t,!1):this.attr("class","")},u.hasClass=function(t){return!!t&&z.call(this,function(n){return c(n)&&n.classList.contains(t)})},u.get=function(t){return v(t)?ht.call(this):(t=Number(t),this[t<0?t+this.length:t])},u.eq=function(t){return o(this.get(t))},u.first=function(){return this.eq(0)},u.last=function(){return this.eq(-1)};function zt(t){return v(t)?this.get().map(function(n){return c(n)||Ft(n)?n.textContent:""}).join(""):this.each(function(n,r){c(r)&&(r.textContent=t)})}u.text=zt;function T(t,n,r){if(c(t)){var i=D.getComputedStyle(t,null);return r?i.getPropertyValue(n)||void 0:i[n]||t.style[n]}}function E(t,n){return parseInt(T(t,n),10)||0}function gt(t,n){return E(t,"border".concat(n?"Left":"Top","Width"))+E(t,"padding".concat(n?"Left":"Top"))+E(t,"padding".concat(n?"Right":"Bottom"))+E(t,"border".concat(n?"Right":"Bottom","Width"))}var X={};function Jt(t){if(X[t])return X[t];var n=L(t);C.body.insertBefore(n,null);var r=T(n,"display");return C.body.removeChild(n),X[t]=r!=="none"?r:"block"}function vt(t){return T(t,"display")==="none"}function pt(t,n){var r=t&&(t.matches||t.webkitMatchesSelector||t.msMatchesSelector);return!!r&&!!n&&r.call(t,n)}function I(t){return g(t)?function(n,r){return pt(r,t)}:O(t)?t:Y(t)?function(n,r){return t.is(r)}:t?function(n,r){return r===t}:function(){return!1}}u.filter=function(t){var n=I(t);return o(U.call(this,function(r,i){return n.call(r,i,r)}))};function x(t,n){return n?t.filter(n):t}u.detach=function(t){return x(this,t).each(function(n,r){r.parentNode&&r.parentNode.removeChild(r)}),this};var Yt=/^\s*<(\w+)[^>]*>/,Gt=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,mt={"*":ft,tr:Mt,td:ot,th:ot,thead:q,tbody:q,tfoot:q};function yt(t){if(!g(t))return[];if(Gt.test(t))return[L(RegExp.$1)];var n=Yt.test(t)&&RegExp.$1,r=mt[n]||mt["*"];return r.innerHTML=t,o(r.childNodes).detach().get()}o.parseHTML=yt,u.has=function(t){var n=g(t)?function(r,i){return J(t,i).length}:function(r,i){return i.contains(t)};return this.filter(n)},u.not=function(t){var n=I(t);return this.filter(function(r,i){return(!g(t)||c(i))&&!n.call(i,r,i)})};function R(t,n,r,i){for(var e=[],s=O(n),f=i&&I(i),a=0,y=t.length;a<y;a++)if(s){var h=n(t[a]);h.length&&Bt.apply(e,h)}else for(var p=t[a][n];p!=null&&!(i&&f(-1,p));)e.push(p),p=r?p[n]:null;return e}function bt(t){return t.multiple&&t.options?R(U.call(t.options,function(n){return n.selected&&!n.disabled&&!n.parentNode.disabled}),"value"):t.value||""}function Xt(t){return arguments.length?this.each(function(n,r){var i=r.multiple&&r.options;if(i||Ot.test(r.type)){var e=H(t)?ct.call(t,String):P(t)?[]:[String(t)];i?d(r.options,function(s,f){f.selected=e.indexOf(f.value)>=0},!0):r.checked=e.indexOf(r.value)>=0}else r.value=v(t)||P(t)?"":t}):this[0]&&bt(this[0])}u.val=Xt,u.is=function(t){var n=I(t);return z.call(this,function(r,i){return n.call(r,i,r)})},o.guid=1;function w(t){return t.length>1?U.call(t,function(n,r,i){return at.call(i,n)===r}):t}o.unique=w,u.add=function(t,n){return o(w(this.get().concat(o(t,n).get())))},u.children=function(t){return x(o(w(R(this,function(n){return n.children}))),t)},u.parent=function(t){return x(o(w(R(this,"parentNode"))),t)},u.index=function(t){var n=t?o(t)[0]:this[0],r=t?this:o(n).parent().children();return at.call(r,n)},u.closest=function(t){var n=this.filter(t);if(n.length)return n;var r=this.parent();return r.length?r.closest(t):n},u.siblings=function(t){return x(o(w(R(this,function(n){return o(n).parent().children().not(n)}))),t)},u.find=function(t){return o(w(R(this,function(n){return J(t,n)})))};var Kt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Qt=/^$|^module$|\/(java|ecma)script/i,Vt=["type","src","nonce","noModule"];function Zt(t,n){var r=o(t);r.filter("script").add(r.find("script")).each(function(i,e){if(Qt.test(e.type)&&st.contains(e)){var s=L("script");s.text=e.textContent.replace(Kt,""),d(Vt,function(f,a){e[a]&&(s[a]=e[a])}),n.head.insertBefore(s,null),n.head.removeChild(s)}})}function kt(t,n,r,i,e){i?t.insertBefore(n,r?t.firstChild:null):t.nodeName==="HTML"?t.parentNode.replaceChild(n,t):t.parentNode.insertBefore(n,r?t:t.nextSibling),e&&Zt(n,t.ownerDocument)}function N(t,n,r,i,e,s,f,a){return d(t,function(y,h){d(o(h),function(p,M){d(o(n),function(b,W){var rt=r?M:W,it=r?W:M,m=r?p:b;kt(rt,m?it.cloneNode(!0):it,i,e,!m)},a)},f)},s),n}u.after=function(){return N(arguments,this,!1,!1,!1,!0,!0)},u.append=function(){return N(arguments,this,!1,!1,!0)};function tn(t){if(!arguments.length)return this[0]&&this[0].innerHTML;if(v(t))return this;var n=/<script[\s>]/.test(t);return this.each(function(r,i){c(i)&&(n?o(i).empty().append(t):i.innerHTML=t)})}u.html=tn,u.appendTo=function(t){return N(arguments,this,!0,!1,!0)},u.wrapInner=function(t){return this.each(function(n,r){var i=o(r),e=i.contents();e.length?e.wrapAll(t):i.append(t)})},u.before=function(){return N(arguments,this,!1,!0)},u.wrapAll=function(t){for(var n=o(t),r=n[0];r.children.length;)r=r.firstElementChild;return this.first().before(n),this.appendTo(r)},u.wrap=function(t){return this.each(function(n,r){var i=o(t)[0];o(r).wrapAll(n?i.cloneNode(!0):i)})},u.insertAfter=function(t){return N(arguments,this,!0,!1,!1,!1,!1,!0)},u.insertBefore=function(t){return N(arguments,this,!0,!0)},u.prepend=function(){return N(arguments,this,!1,!0,!0,!0,!0)},u.prependTo=function(t){return N(arguments,this,!0,!0,!0,!1,!1,!0)},u.contents=function(){return o(w(R(this,function(t){return t.tagName==="IFRAME"?[t.contentDocument]:t.tagName==="TEMPLATE"?t.content.childNodes:t.childNodes})))},u.next=function(t,n,r){return x(o(w(R(this,"nextElementSibling",n,r))),t)},u.nextAll=function(t){return this.next(t,!0)},u.nextUntil=function(t,n){return this.next(n,!0,t)},u.parents=function(t,n){return x(o(w(R(this,"parentElement",!0,n))),t)},u.parentsUntil=function(t,n){return this.parents(n,t)},u.prev=function(t,n,r){return x(o(w(R(this,"previousElementSibling",n,r))),t)},u.prevAll=function(t){return this.prev(t,!0)},u.prevUntil=function(t,n){return this.prev(n,!0,t)},u.map=function(t){return o(Dt.apply([],ct.call(this,function(n,r){return t.call(n,r,n)})))},u.clone=function(){return this.map(function(t,n){return n.cloneNode(!0)})},u.offsetParent=function(){return this.map(function(t,n){for(var r=n.offsetParent;r&&T(r,"position")==="static";)r=r.offsetParent;return r||st})},u.slice=function(t,n){return o(ht.call(this,t,n))};var nn=/-([a-z])/g;function K(t){return t.replace(nn,function(n,r){return r.toUpperCase()})}u.ready=function(t){var n=function(){return setTimeout(t,0,o)};return C.readyState!=="loading"?n():C.addEventListener("DOMContentLoaded",n),this},u.unwrap=function(){return this.parent().each(function(t,n){if(n.tagName!=="BODY"){var r=o(n);r.replaceWith(r.children())}}),this},u.offset=function(){var t=this[0];if(t){var n=t.getBoundingClientRect();return{top:n.top+D.pageYOffset,left:n.left+D.pageXOffset}}},u.position=function(){var t=this[0];if(t){var n=T(t,"position")==="fixed",r=n?t.getBoundingClientRect():this.offset();if(!n){for(var i=t.ownerDocument,e=t.offsetParent||i.documentElement;(e===i.body||e===i.documentElement)&&T(e,"position")==="static";)e=e.parentNode;if(e!==t&&c(e)){var s=o(e).offset();r.top-=s.top+E(e,"borderTopWidth"),r.left-=s.left+E(e,"borderLeftWidth")}}return{top:r.top-E(t,"marginTop"),left:r.left-E(t,"marginLeft")}}};var Et={class:"className",contenteditable:"contentEditable",for:"htmlFor",readonly:"readOnly",maxlength:"maxLength",tabindex:"tabIndex",colspan:"colSpan",rowspan:"rowSpan",usemap:"useMap"};u.prop=function(t,n){if(t){if(g(t))return t=Et[t]||t,arguments.length<2?this[0]&&this[0][t]:this.each(function(i,e){e[t]=n});for(var r in t)this.prop(r,t[r]);return this}},u.removeProp=function(t){return this.each(function(n,r){delete r[Et[t]||t]})};var rn=/^--/;function Q(t){return rn.test(t)}var V={},en=ft.style,un=["webkit","moz","ms"];function sn(t,n){if(n===void 0&&(n=Q(t)),n)return t;if(!V[t]){var r=K(t),i="".concat(r[0].toUpperCase()).concat(r.slice(1)),e="".concat(r," ").concat(un.join("".concat(i," "))).concat(i).split(" ");d(e,function(s,f){if(f in en)return V[t]=f,!1})}return V[t]}var fn={animationIterationCount:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0};function wt(t,n,r){return r===void 0&&(r=Q(t)),!r&&!fn[t]&&lt(n)?"".concat(n,"px"):n}function on(t,n){if(g(t)){var r=Q(t);return t=sn(t,r),arguments.length<2?this[0]&&T(this[0],t,r):t?(n=wt(t,n,r),this.each(function(e,s){c(s)&&(r?s.style.setProperty(t,n):s.style[t]=n)})):this}for(var i in t)this.css(i,t[i]);return this}u.css=on;function Ct(t,n){try{return t(n)}catch{return n}}var an=/^\s+|\s+$/;function St(t,n){var r=t.dataset[n]||t.dataset[K(n)];return an.test(r)?r:Ct(JSON.parse,r)}function cn(t,n,r){r=Ct(JSON.stringify,r),t.dataset[K(n)]=r}function hn(t,n){if(!t){if(!this[0])return;var r={};for(var i in this[0].dataset)r[i]=St(this[0],i);return r}if(g(t))return arguments.length<2?this[0]&&St(this[0],t):v(n)?this:this.each(function(e,s){cn(s,t,n)});for(var i in t)this.data(i,t[i]);return this}u.data=hn;function Tt(t,n){var r=t.documentElement;return Math.max(t.body["scroll".concat(n)],r["scroll".concat(n)],t.body["offset".concat(n)],r["offset".concat(n)],r["client".concat(n)])}d([!0,!1],function(t,n){d(["Width","Height"],function(r,i){var e="".concat(n?"outer":"inner").concat(i);u[e]=function(s){if(this[0])return B(this[0])?n?this[0]["inner".concat(i)]:this[0].document.documentElement["client".concat(i)]:A(this[0])?Tt(this[0],i):this[0]["".concat(n?"offset":"client").concat(i)]+(s&&n?E(this[0],"margin".concat(r?"Top":"Left"))+E(this[0],"margin".concat(r?"Bottom":"Right")):0)}})}),d(["Width","Height"],function(t,n){var r=n.toLowerCase();u[r]=function(i){if(!this[0])return v(i)?void 0:this;if(!arguments.length)return B(this[0])?this[0].document.documentElement["client".concat(n)]:A(this[0])?Tt(this[0],n):this[0].getBoundingClientRect()[r]-gt(this[0],!t);var e=parseInt(i,10);return this.each(function(s,f){if(c(f)){var a=T(f,"boxSizing");f.style[r]=wt(r,e+(a==="border-box"?gt(f,!t):0))}})}});var Rt="___cd";u.toggle=function(t){return this.each(function(n,r){if(c(r)){var i=vt(r),e=v(t)?i:t;e?(r.style.display=r[Rt]||"",vt(r)&&(r.style.display=Jt(r.tagName))):i||(r[Rt]=T(r,"display"),r.style.display="none")}})},u.hide=function(){return this.toggle(!1)},u.show=function(){return this.toggle(!0)};var xt="___ce",Z=".",k={focus:"focusin",blur:"focusout"},Nt={mouseenter:"mouseover",mouseleave:"mouseout"},dn=/^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;function tt(t){return Nt[t]||k[t]||t}function nt(t){var n=t.split(Z);return[n[0],n.slice(1).sort()]}u.trigger=function(t,n){if(g(t)){var r=nt(t),i=r[0],e=r[1],s=tt(i);if(!s)return this;var f=dn.test(s)?"MouseEvents":"HTMLEvents";t=C.createEvent(f),t.initEvent(s,!0,!0),t.namespace=e.join(Z),t.___ot=i}t.___td=n;var a=t.___ot in k;return this.each(function(y,h){a&&O(h[t.___ot])&&(h["___i".concat(t.type)]=!0,h[t.___ot](),h["___i".concat(t.type)]=!1),h.dispatchEvent(t)})};function Lt(t){return t[xt]=t[xt]||{}}function ln(t,n,r,i,e){var s=Lt(t);s[n]=s[n]||[],s[n].push([r,i,e]),t.addEventListener(n,e)}function At(t,n){return!n||!z.call(n,function(r){return t.indexOf(r)<0})}function F(t,n,r,i,e){var s=Lt(t);if(n)s[n]&&(s[n]=s[n].filter(function(f){var a=f[0],y=f[1],h=f[2];if(e&&h.guid!==e.guid||!At(a,r)||i&&i!==y)return!0;t.removeEventListener(n,h)}));else for(n in s)F(t,n,r,i,e)}u.off=function(t,n,r){var i=this;if(v(t))this.each(function(s,f){!c(f)&&!A(f)&&!B(f)||F(f)});else if(g(t))O(n)&&(r=n,n=""),d(j(t),function(s,f){var a=nt(f),y=a[0],h=a[1],p=tt(y);i.each(function(M,b){!c(b)&&!A(b)&&!B(b)||F(b,p,h,n,r)})});else for(var e in t)this.off(e,t[e]);return this},u.remove=function(t){return x(this,t).detach().off(),this},u.replaceWith=function(t){return this.before(t).remove()},u.replaceAll=function(t){return o(t).replaceWith(this),this};function gn(t,n,r,i,e){var s=this;if(!g(t)){for(var f in t)this.on(f,n,r,t[f],e);return this}return g(n)||(v(n)||P(n)?n="":v(r)?(r=n,n=""):(i=r,r=n,n="")),O(i)||(i=r,r=void 0),i?(d(j(t),function(a,y){var h=nt(y),p=h[0],M=h[1],b=tt(p),W=p in Nt,rt=p in k;b&&s.each(function(it,m){if(!(!c(m)&&!A(m)&&!B(m))){var et=function(l){if(l.target["___i".concat(l.type)])return l.stopImmediatePropagation();if(!(l.namespace&&!At(M,l.namespace.split(Z)))&&!(!n&&(rt&&(l.target!==m||l.___ot===b)||W&&l.relatedTarget&&m.contains(l.relatedTarget)))){var ut=m;if(n){for(var _=l.target;!pt(_,n);)if(_===m||(_=_.parentNode,!_))return;ut=_}Object.defineProperty(l,"currentTarget",{configurable:!0,get:function(){return ut}}),Object.defineProperty(l,"delegateTarget",{configurable:!0,get:function(){return m}}),Object.defineProperty(l,"data",{configurable:!0,get:function(){return r}});var bn=i.call(ut,l,l.___td);e&&F(m,b,M,n,et),bn===!1&&(l.preventDefault(),l.stopPropagation())}};et.guid=i.guid=i.guid||o.guid++,ln(m,b,M,n,et)}})}),this):this}u.on=gn;function vn(t,n,r,i){return this.on(t,n,r,i,!0)}u.one=vn;var pn=/\r?\n/g;function mn(t,n){return"&".concat(encodeURIComponent(t),"=").concat(encodeURIComponent(n.replace(pn,`\r
`)))}var yn=/file|reset|submit|button|image/i,Ot=/radio|checkbox/i;u.serialize=function(){var t="";return this.each(function(n,r){d(r.elements||[r],function(i,e){if(!(e.disabled||!e.name||e.tagName==="FIELDSET"||yn.test(e.type)||Ot.test(e.type)&&!e.checked)){var s=bt(e);if(!v(s)){var f=H(s)?s:[s];d(f,function(a,y){t+=mn(e.name,y)})}}})}),t.slice(1)},typeof exports<"u"?module.exports=o:D.cash=D.$=o})();
/* Pretty Print Library Starts Here */
!function(){/*

 Copyright (C) 2013 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.

 Copyright (C) 2006 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
(function(){function aa(g){function r(){try{L.doScroll("left")}catch(ba){k.setTimeout(r,50);return}x("poll")}function x(r){if("readystatechange"!=r.type||"complete"==z.readyState)("load"==r.type?k:z)[B](n+r.type,x,!1),!l&&(l=!0)&&g.call(k,r.type||r)}var X=z.addEventListener,l=!1,E=!0,v=X?"addEventListener":"attachEvent",B=X?"removeEventListener":"detachEvent",n=X?"":"on";if("complete"==z.readyState)g.call(k,"lazy");else{if(z.createEventObject&&L.doScroll){try{E=!k.frameElement}catch(ba){}E&&r()}z[v](n+
"DOMContentLoaded",x,!1);z[v](n+"readystatechange",x,!1);k[v](n+"load",x,!1)}}function T(){U&&aa(function(){var g=M.length;ca(g?function(){for(var r=0;r<g;++r)(function(g){k.setTimeout(function(){k.exports[M[g]].apply(k,arguments)},0)})(r)}:void 0)})}for(var k=window,z=document,L=z.documentElement,N=z.head||z.getElementsByTagName("head")[0]||L,B="",F=z.getElementsByTagName("script"),l=F.length;0<=--l;){var O=F[l],Y=O.src.match(/^[^?#]*\/run_prettify\.js(\?[^#]*)?(?:#.*)?$/);if(Y){B=Y[1]||"";O.parentNode.removeChild(O);
break}}var U=!0,H=[],P=[],M=[];B.replace(/[?&]([^&=]+)=([^&]+)/g,function(g,r,x){x=decodeURIComponent(x);r=decodeURIComponent(r);"autorun"==r?U=!/^[0fn]/i.test(x):"lang"==r?H.push(x):"skin"==r?P.push(x):"callback"==r&&M.push(x)});l=0;for(B=H.length;l<B;++l)(function(){var g=z.createElement("script");g.onload=g.onerror=g.onreadystatechange=function(){!g||g.readyState&&!/loaded|complete/.test(g.readyState)||(g.onerror=g.onload=g.onreadystatechange=null,--S,S||k.setTimeout(T,0),g.parentNode&&g.parentNode.removeChild(g),
g=null)};g.type="text/javascript";g.src="https://cdn.rawgit.com/google/code-prettify/master/loader/lang-"+encodeURIComponent(H[l])+".js";N.insertBefore(g,N.firstChild)})(H[l]);for(var S=H.length,F=[],l=0,B=P.length;l<B;++l)F.push("https://cdn.rawgit.com/google/code-prettify/master/loader/skins/"+encodeURIComponent(P[l])+".css");F.push("https://cdn.rawgit.com/google/code-prettify/master/loader/prettify.css");(function(g){function r(l){if(l!==x){var k=z.createElement("link");k.rel="stylesheet";k.type=
"text/css";l+1<x&&(k.error=k.onerror=function(){r(l+1)});k.href=g[l];N.appendChild(k)}}var x=g.length;r(0)})(F);var ca=function(){"undefined"!==typeof window&&(window.PR_SHOULD_USE_CONTINUATION=!0);var g;(function(){function r(a){function d(e){var a=e.charCodeAt(0);if(92!==a)return a;var c=e.charAt(1);return(a=k[c])?a:"0"<=c&&"7">=c?parseInt(e.substring(1),8):"u"===c||"x"===c?parseInt(e.substring(2),16):e.charCodeAt(1)}function f(e){if(32>e)return(16>e?"\\x0":"\\x")+e.toString(16);e=String.fromCharCode(e);
return"\\"===e||"-"===e||"]"===e||"^"===e?"\\"+e:e}function c(e){var c=e.substring(1,e.length-1).match(RegExp("\\\\u[0-9A-Fa-f]{4}|\\\\x[0-9A-Fa-f]{2}|\\\\[0-3][0-7]{0,2}|\\\\[0-7]{1,2}|\\\\[\\s\\S]|-|[^-\\\\]","g"));e=[];var a="^"===c[0],b=["["];a&&b.push("^");for(var a=a?1:0,h=c.length;a<h;++a){var m=c[a];if(/\\[bdsw]/i.test(m))b.push(m);else{var m=d(m),p;a+2<h&&"-"===c[a+1]?(p=d(c[a+2]),a+=2):p=m;e.push([m,p]);65>p||122<m||(65>p||90<m||e.push([Math.max(65,m)|32,Math.min(p,90)|32]),97>p||122<m||
e.push([Math.max(97,m)&-33,Math.min(p,122)&-33]))}}e.sort(function(e,a){return e[0]-a[0]||a[1]-e[1]});c=[];h=[];for(a=0;a<e.length;++a)m=e[a],m[0]<=h[1]+1?h[1]=Math.max(h[1],m[1]):c.push(h=m);for(a=0;a<c.length;++a)m=c[a],b.push(f(m[0])),m[1]>m[0]&&(m[1]+1>m[0]&&b.push("-"),b.push(f(m[1])));b.push("]");return b.join("")}function g(e){for(var a=e.source.match(RegExp("(?:\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]|\\\\u[A-Fa-f0-9]{4}|\\\\x[A-Fa-f0-9]{2}|\\\\[0-9]+|\\\\[^ux0-9]|\\(\\?[:!=]|[\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^]+)",
"g")),b=a.length,d=[],h=0,m=0;h<b;++h){var p=a[h];"("===p?++m:"\\"===p.charAt(0)&&(p=+p.substring(1))&&(p<=m?d[p]=-1:a[h]=f(p))}for(h=1;h<d.length;++h)-1===d[h]&&(d[h]=++r);for(m=h=0;h<b;++h)p=a[h],"("===p?(++m,d[m]||(a[h]="(?:")):"\\"===p.charAt(0)&&(p=+p.substring(1))&&p<=m&&(a[h]="\\"+d[p]);for(h=0;h<b;++h)"^"===a[h]&&"^"!==a[h+1]&&(a[h]="");if(e.ignoreCase&&A)for(h=0;h<b;++h)p=a[h],e=p.charAt(0),2<=p.length&&"["===e?a[h]=c(p):"\\"!==e&&(a[h]=p.replace(/[a-zA-Z]/g,function(a){a=a.charCodeAt(0);
return"["+String.fromCharCode(a&-33,a|32)+"]"}));return a.join("")}for(var r=0,A=!1,q=!1,I=0,b=a.length;I<b;++I){var t=a[I];if(t.ignoreCase)q=!0;else if(/[a-z]/i.test(t.source.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi,""))){A=!0;q=!1;break}}for(var k={b:8,t:9,n:10,v:11,f:12,r:13},u=[],I=0,b=a.length;I<b;++I){t=a[I];if(t.global||t.multiline)throw Error(""+t);u.push("(?:"+g(t)+")")}return new RegExp(u.join("|"),q?"gi":"g")}function l(a,d){function f(a){var b=a.nodeType;if(1==b){if(!c.test(a.className)){for(b=
a.firstChild;b;b=b.nextSibling)f(b);b=a.nodeName.toLowerCase();if("br"===b||"li"===b)g[q]="\n",A[q<<1]=r++,A[q++<<1|1]=a}}else if(3==b||4==b)b=a.nodeValue,b.length&&(b=d?b.replace(/\r\n?/g,"\n"):b.replace(/[ \t\r\n]+/g," "),g[q]=b,A[q<<1]=r,r+=b.length,A[q++<<1|1]=a)}var c=/(?:^|\s)nocode(?:\s|$)/,g=[],r=0,A=[],q=0;f(a);return{a:g.join("").replace(/\n$/,""),c:A}}function k(a,d,f,c,g){f&&(a={h:a,l:1,j:null,m:null,a:f,c:null,i:d,g:null},c(a),g.push.apply(g,a.g))}function z(a){for(var d=void 0,f=a.firstChild;f;f=
f.nextSibling)var c=f.nodeType,d=1===c?d?a:f:3===c?S.test(f.nodeValue)?a:d:d;return d===a?void 0:d}function E(a,d){function f(a){for(var q=a.i,r=a.h,b=[q,"pln"],t=0,A=a.a.match(g)||[],u={},e=0,l=A.length;e<l;++e){var D=A[e],w=u[D],h=void 0,m;if("string"===typeof w)m=!1;else{var p=c[D.charAt(0)];if(p)h=D.match(p[1]),w=p[0];else{for(m=0;m<n;++m)if(p=d[m],h=D.match(p[1])){w=p[0];break}h||(w="pln")}!(m=5<=w.length&&"lang-"===w.substring(0,5))||h&&"string"===typeof h[1]||(m=!1,w="src");m||(u[D]=w)}p=t;
t+=D.length;if(m){m=h[1];var C=D.indexOf(m),G=C+m.length;h[2]&&(G=D.length-h[2].length,C=G-m.length);w=w.substring(5);k(r,q+p,D.substring(0,C),f,b);k(r,q+p+C,m,F(w,m),b);k(r,q+p+G,D.substring(G),f,b)}else b.push(q+p,w)}a.g=b}var c={},g;(function(){for(var f=a.concat(d),q=[],k={},b=0,t=f.length;b<t;++b){var n=f[b],u=n[3];if(u)for(var e=u.length;0<=--e;)c[u.charAt(e)]=n;n=n[1];u=""+n;k.hasOwnProperty(u)||(q.push(n),k[u]=null)}q.push(/[\0-\uffff]/);g=r(q)})();var n=d.length;return f}function v(a){var d=
[],f=[];a.tripleQuotedStrings?d.push(["str",/^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/,null,"'\""]):a.multiLineStrings?d.push(["str",/^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/,null,"'\"`"]):d.push(["str",/^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/,null,"\"'"]);a.verbatimStrings&&
f.push(["str",/^@\"(?:[^\"]|\"\")*(?:\"|$)/,null]);var c=a.hashComments;c&&(a.cStyleComments?(1<c?d.push(["com",/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,null,"#"]):d.push(["com",/^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\r\n]*)/,null,"#"]),f.push(["str",/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/,null])):d.push(["com",/^#[^\r\n]*/,null,"#"]));a.cStyleComments&&(f.push(["com",/^\/\/[^\r\n]*/,null]),f.push(["com",/^\/\*[\s\S]*?(?:\*\/|$)/,
null]));if(c=a.regexLiterals){var g=(c=1<c?"":"\n\r")?".":"[\\S\\s]";f.push(["lang-regex",RegExp("^(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*("+("/(?=[^/*"+c+"])(?:[^/\\x5B\\x5C"+c+"]|\\x5C"+g+"|\\x5B(?:[^\\x5C\\x5D"+c+"]|\\x5C"+g+")*(?:\\x5D|$))+/")+")")])}(c=a.types)&&f.push(["typ",c]);c=(""+a.keywords).replace(/^ | $/g,"");c.length&&f.push(["kwd",
new RegExp("^(?:"+c.replace(/[\s,]+/g,"|")+")\\b"),null]);d.push(["pln",/^\s+/,null," \r\n\t\u00a0"]);c="^.[^\\s\\w.$@'\"`/\\\\]*";a.regexLiterals&&(c+="(?!s*/)");f.push(["lit",/^@[a-z_$][a-z_$@0-9]*/i,null],["typ",/^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/,null],["pln",/^[a-z_$][a-z_$@0-9]*/i,null],["lit",/^(?:0x[a-f0-9]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+\-]?\d+)?)[a-z]*/i,null,"0123456789"],["pln",/^\\[\s\S]?/,null],["pun",new RegExp(c),null]);return E(d,f)}function B(a,d,f){function c(a){var b=
a.nodeType;if(1==b&&!r.test(a.className))if("br"===a.nodeName.toLowerCase())g(a),a.parentNode&&a.parentNode.removeChild(a);else for(a=a.firstChild;a;a=a.nextSibling)c(a);else if((3==b||4==b)&&f){var e=a.nodeValue,d=e.match(n);d&&(b=e.substring(0,d.index),a.nodeValue=b,(e=e.substring(d.index+d[0].length))&&a.parentNode.insertBefore(q.createTextNode(e),a.nextSibling),g(a),b||a.parentNode.removeChild(a))}}function g(a){function c(a,b){var e=b?a.cloneNode(!1):a,p=a.parentNode;if(p){var p=c(p,1),d=a.nextSibling;
p.appendChild(e);for(var f=d;f;f=d)d=f.nextSibling,p.appendChild(f)}return e}for(;!a.nextSibling;)if(a=a.parentNode,!a)return;a=c(a.nextSibling,0);for(var e;(e=a.parentNode)&&1===e.nodeType;)a=e;b.push(a)}for(var r=/(?:^|\s)nocode(?:\s|$)/,n=/\r\n?|\n/,q=a.ownerDocument,k=q.createElement("li");a.firstChild;)k.appendChild(a.firstChild);for(var b=[k],t=0;t<b.length;++t)c(b[t]);d===(d|0)&&b[0].setAttribute("value",d);var l=q.createElement("ol");l.className="linenums";d=Math.max(0,d-1|0)||0;for(var t=
0,u=b.length;t<u;++t)k=b[t],k.className="L"+(t+d)%10,k.firstChild||k.appendChild(q.createTextNode("\u00a0")),l.appendChild(k);a.appendChild(l)}function n(a,d){for(var f=d.length;0<=--f;){var c=d[f];V.hasOwnProperty(c)?Q.console&&console.warn("cannot override language handler %s",c):V[c]=a}}function F(a,d){a&&V.hasOwnProperty(a)||(a=/^\s*</.test(d)?"default-markup":"default-code");return V[a]}function H(a){var d=a.j;try{var f=l(a.h,a.l),c=f.a;a.a=c;a.c=f.c;a.i=0;F(d,c)(a);var g=/\bMSIE\s(\d+)/.exec(navigator.userAgent),
g=g&&8>=+g[1],d=/\n/g,r=a.a,k=r.length,f=0,q=a.c,n=q.length,c=0,b=a.g,t=b.length,v=0;b[t]=k;var u,e;for(e=u=0;e<t;)b[e]!==b[e+2]?(b[u++]=b[e++],b[u++]=b[e++]):e+=2;t=u;for(e=u=0;e<t;){for(var x=b[e],z=b[e+1],w=e+2;w+2<=t&&b[w+1]===z;)w+=2;b[u++]=x;b[u++]=z;e=w}b.length=u;var h=a.h;a="";h&&(a=h.style.display,h.style.display="none");try{for(;c<n;){var m=q[c+2]||k,p=b[v+2]||k,w=Math.min(m,p),C=q[c+1],G;if(1!==C.nodeType&&(G=r.substring(f,w))){g&&(G=G.replace(d,"\r"));C.nodeValue=G;var Z=C.ownerDocument,
W=Z.createElement("span");W.className=b[v+1];var B=C.parentNode;B.replaceChild(W,C);W.appendChild(C);f<m&&(q[c+1]=C=Z.createTextNode(r.substring(w,m)),B.insertBefore(C,W.nextSibling))}f=w;f>=m&&(c+=2);f>=p&&(v+=2)}}finally{h&&(h.style.display=a)}}catch(y){Q.console&&console.log(y&&y.stack||y)}}var Q="undefined"!==typeof window?window:{},J=["break,continue,do,else,for,if,return,while"],K=[[J,"auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,restrict,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],
"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],R=[K,"alignas,alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,noexcept,noreturn,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],L=[K,"abstract,assert,boolean,byte,extends,finally,final,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"],
M=[K,"abstract,add,alias,as,ascending,async,await,base,bool,by,byte,checked,decimal,delegate,descending,dynamic,event,finally,fixed,foreach,from,get,global,group,implicit,in,interface,internal,into,is,join,let,lock,null,object,out,override,orderby,params,partial,readonly,ref,remove,sbyte,sealed,select,set,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,value,var,virtual,where,yield"],K=[K,"abstract,async,await,constructor,debugger,enum,eval,export,from,function,get,import,implements,instanceof,interface,let,null,of,set,undefined,var,with,yield,Infinity,NaN"],
N=[J,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],O=[J,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],J=[J,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],P=/^(DIR|FILE|array|vector|(de|priority_)?queue|(forward_)?list|stack|(const_)?(reverse_)?iterator|(unordered_)?(multi)?(set|map)|bitset|u?(int|float)\d*)\b/,
S=/\S/,T=v({keywords:[R,M,L,K,"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",N,O,J],hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0}),V={};n(T,["default-code"]);n(E([],[["pln",/^[^<?]+/],["dec",/^<!\w[^>]*(?:>|$)/],["com",/^<\!--[\s\S]*?(?:-\->|$)/],["lang-",/^<\?([\s\S]+?)(?:\?>|$)/],["lang-",/^<%([\s\S]+?)(?:%>|$)/],["pun",/^(?:<[%?]|[%?]>)/],["lang-",
/^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),"default-markup htm html mxml xhtml xml xsl".split(" "));n(E([["pln",/^[\s]+/,null," \t\r\n"],["atv",/^(?:\"[^\"]*\"?|\'[^\']*\'?)/,null,"\"'"]],[["tag",/^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i],["atn",/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/],
["pun",/^[=<>\/]+/],["lang-js",/^on\w+\s*=\s*\"([^\"]+)\"/i],["lang-js",/^on\w+\s*=\s*\'([^\']+)\'/i],["lang-js",/^on\w+\s*=\s*([^\"\'>\s]+)/i],["lang-css",/^style\s*=\s*\"([^\"]+)\"/i],["lang-css",/^style\s*=\s*\'([^\']+)\'/i],["lang-css",/^style\s*=\s*([^\"\'>\s]+)/i]]),["in.tag"]);n(E([],[["atv",/^[\s\S]+/]]),["uq.val"]);n(v({keywords:R,hashComments:!0,cStyleComments:!0,types:P}),"c cc cpp cxx cyc m".split(" "));n(v({keywords:"null,true,false"}),["json"]);n(v({keywords:M,hashComments:!0,cStyleComments:!0,
verbatimStrings:!0,types:P}),["cs"]);n(v({keywords:L,cStyleComments:!0}),["java"]);n(v({keywords:J,hashComments:!0,multiLineStrings:!0}),["bash","bsh","csh","sh"]);n(v({keywords:N,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),["cv","py","python"]);n(v({keywords:"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",hashComments:!0,multiLineStrings:!0,regexLiterals:2}),
["perl","pl","pm"]);n(v({keywords:O,hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb","ruby"]);n(v({keywords:K,cStyleComments:!0,regexLiterals:!0}),["javascript","js","ts","typescript"]);n(v({keywords:"all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes",hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]);n(E([],[["str",/^[\s\S]+/]]),
["regex"]);var U=Q.PR={createSimpleLexer:E,registerLangHandler:n,sourceDecorator:v,PR_ATTRIB_NAME:"atn",PR_ATTRIB_VALUE:"atv",PR_COMMENT:"com",PR_DECLARATION:"dec",PR_KEYWORD:"kwd",PR_LITERAL:"lit",PR_NOCODE:"nocode",PR_PLAIN:"pln",PR_PUNCTUATION:"pun",PR_SOURCE:"src",PR_STRING:"str",PR_TAG:"tag",PR_TYPE:"typ",prettyPrintOne:function(a,d,f){f=f||!1;d=d||null;var c=document.createElement("div");c.innerHTML="<pre>"+a+"</pre>";c=c.firstChild;f&&B(c,f,!0);H({j:d,m:f,h:c,l:1,a:null,i:null,c:null,g:null});
return c.innerHTML},prettyPrint:g=function(a,d){function f(){for(var c=Q.PR_SHOULD_USE_CONTINUATION?b.now()+250:Infinity;t<r.length&&b.now()<c;t++){for(var d=r[t],k=h,n=d;n=n.previousSibling;){var q=n.nodeType,l=(7===q||8===q)&&n.nodeValue;if(l?!/^\??prettify\b/.test(l):3!==q||/\S/.test(n.nodeValue))break;if(l){k={};l.replace(/\b(\w+)=([\w:.%+-]+)/g,function(a,b,c){k[b]=c});break}}n=d.className;if((k!==h||u.test(n))&&!e.test(n)){q=!1;for(l=d.parentNode;l;l=l.parentNode)if(w.test(l.tagName)&&l.className&&
u.test(l.className)){q=!0;break}if(!q){d.className+=" prettyprinted";q=k.lang;if(!q){var q=n.match(v),A;!q&&(A=z(d))&&D.test(A.tagName)&&(q=A.className.match(v));q&&(q=q[1])}if(x.test(d.tagName))l=1;else var l=d.currentStyle,y=g.defaultView,l=(l=l?l.whiteSpace:y&&y.getComputedStyle?y.getComputedStyle(d,null).getPropertyValue("white-space"):0)&&"pre"===l.substring(0,3);y=k.linenums;(y="true"===y||+y)||(y=(y=n.match(/\blinenums\b(?::(\d+))?/))?y[1]&&y[1].length?+y[1]:!0:!1);y&&B(d,y,l);H({j:q,h:d,m:y,
l:l,a:null,i:null,c:null,g:null})}}}t<r.length?Q.setTimeout(f,250):"function"===typeof a&&a()}for(var c=d||document.body,g=c.ownerDocument||document,c=[c.getElementsByTagName("pre"),c.getElementsByTagName("code"),c.getElementsByTagName("xmp")],r=[],k=0;k<c.length;++k)for(var n=0,l=c[k].length;n<l;++n)r.push(c[k][n]);var c=null,b=Date;b.now||(b={now:function(){return+new Date}});var t=0,v=/\blang(?:uage)?-([\w.]+)(?!\S)/,u=/\bprettyprint\b/,e=/\bprettyprinted\b/,x=/pre|xmp/i,D=/^code$/i,w=/^(?:pre|code|xmp)$/i,
h={};f()}},R=Q.define;"function"===typeof R&&R.amd&&R("google-code-prettify",[],function(){return U})})();return g}();S||k.setTimeout(T,0)})();}();

/**
 * Minified by jsDelivr using Terser v5.3.5.
 * Original file: /npm/codejar@3.5.0/codejar.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
const globalWindow=window;function CodeJar(t,e,n={}){const o=Object.assign({tab:"\t",indentOn:/{$/,spellcheck:!1,catchTab:!0,preserveIdent:!0,addClosing:!0,history:!0,window:globalWindow},n),r=o.window,s=r.document;let i,d,l=[],a=[],c=-1,f=!1;t.setAttribute("contenteditable","plaintext-only"),t.setAttribute("spellcheck",o.spellcheck?"true":"false"),t.style.outline="none",t.style.overflowWrap="break-word",t.style.overflowY="auto",t.style.whiteSpace="pre-wrap";let u=!1;e(t),"plaintext-only"!==t.contentEditable&&(u=!0),u&&t.setAttribute("contenteditable","true");const p=S((()=>{const n=b();e(t,n),T(n)}),30);let g=!1;const h=t=>!O(t)&&!x(t)&&"Meta"!==t.key&&"Control"!==t.key&&"Alt"!==t.key&&!t.key.startsWith("Arrow"),y=S((t=>{h(t)&&(m(),g=!1)}),300),N=(e,n)=>{l.push([e,n]),t.addEventListener(e,n)};function b(){const e=K(),n={start:0,end:0,dir:void 0};let{anchorNode:o,anchorOffset:r,focusNode:i,focusOffset:d}=e;if(!o||!i)throw"error1";if(o.nodeType===Node.ELEMENT_NODE){const t=s.createTextNode("");o.insertBefore(t,o.childNodes[r]),o=t,r=0}if(i.nodeType===Node.ELEMENT_NODE){const t=s.createTextNode("");i.insertBefore(t,i.childNodes[d]),i=t,d=0}return v(t,(t=>{if(t===o&&t===i)return n.start+=r,n.end+=d,n.dir=r<=d?"->":"<-","stop";if(t===o){if(n.start+=r,n.dir)return"stop";n.dir="->"}else if(t===i){if(n.end+=d,n.dir)return"stop";n.dir="<-"}t.nodeType===Node.TEXT_NODE&&("->"!=n.dir&&(n.start+=t.nodeValue.length),"<-"!=n.dir&&(n.end+=t.nodeValue.length))})),t.normalize(),n}function T(e){const n=K();let o,r,s=0,i=0;if(e.dir||(e.dir="->"),e.start<0&&(e.start=0),e.end<0&&(e.end=0),"<-"==e.dir){const{start:t,end:n}=e;e.start=n,e.end=t}let d=0;v(t,(t=>{if(t.nodeType!==Node.TEXT_NODE)return;const n=(t.nodeValue||"").length;if(d+n>e.start&&(o||(o=t,s=e.start-d),d+n>e.end))return r=t,i=e.end-d,"stop";d+=n})),o||(o=t,s=t.childNodes.length),r||(r=t,i=t.childNodes.length),"<-"==e.dir&&([o,s,r,i]=[r,i,o,s]),n.setBaseAndExtent(o,s,r,i)}function E(){const e=K().getRangeAt(0),n=s.createRange();return n.selectNodeContents(t),n.setEnd(e.startContainer,e.startOffset),n.toString()}function k(){const e=K().getRangeAt(0),n=s.createRange();return n.selectNodeContents(t),n.setStart(e.endContainer,e.endOffset),n.toString()}function C(t){if(u&&"Enter"===t.key)if(L(t),t.stopPropagation(),""==k()){M("\n ");const t=b();t.start=--t.end,T(t)}else M("\n")}function m(){if(!f)return;const e=t.innerHTML,n=b(),o=a[c];if(o&&o.html===e&&o.pos.start===n.start&&o.pos.end===n.end)return;c++,a[c]={html:e,pos:n},a.splice(c+1);c>300&&(c=300,a.splice(0,1))}function v(t,e){const n=[];t.firstChild&&n.push(t.firstChild);let o=n.pop();for(;o&&"stop"!==e(o);)o.nextSibling&&n.push(o.nextSibling),o.firstChild&&n.push(o.firstChild),o=n.pop()}function w(t){return t.metaKey||t.ctrlKey}function O(t){return w(t)&&!t.shiftKey&&"KeyZ"===t.code}function x(t){return w(t)&&t.shiftKey&&"KeyZ"===t.code}function M(t){t=t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"),s.execCommand("insertHTML",!1,t)}function S(t,e){let n=0;return(...o)=>{clearTimeout(n),n=r.setTimeout((()=>t(...o)),e)}}function A(t){let e=t.length-1;for(;e>=0&&"\n"!==t[e];)e--;e++;let n=e;for(;n<t.length&&/[ \t]/.test(t[n]);)n++;return[t.substring(e,n)||"",e,n]}function D(){return t.textContent||""}function L(t){t.preventDefault()}function K(){var e;return(null===(e=t.parentNode)||void 0===e?void 0:e.nodeType)==Node.DOCUMENT_FRAGMENT_NODE?t.parentNode.getSelection():r.getSelection()}return N("keydown",(e=>{e.defaultPrevented||(d=D(),o.preserveIdent?function(t){if("Enter"===t.key){const e=E(),n=k();let[r]=A(e),s=r;if(o.indentOn.test(e)&&(s+=o.tab),s.length>0?(L(t),t.stopPropagation(),M("\n"+s)):C(t),s!==r&&"}"===n[0]){const t=b();M("\n"+r),T(t)}}}(e):C(e),o.catchTab&&function(t){if("Tab"===t.key)if(L(t),t.shiftKey){const t=E();let[e,n]=A(t);if(e.length>0){const t=b(),r=Math.min(o.tab.length,e.length);T({start:n,end:n+r}),s.execCommand("delete"),t.start-=r,t.end-=r,T(t)}}else M(o.tab)}(e),o.addClosing&&function(t){const e="([{'\"",n=")]}'\"",o=k(),r=E(),s="\\"===r.substr(r.length-1),i=o.substr(0,1);if(n.includes(t.key)&&!s&&i===t.key){const e=b();L(t),e.start=++e.end,T(e)}else if(e.includes(t.key)&&!s&&("\"'".includes(t.key)||[""," ","\n"].includes(i))){L(t);const o=b(),r=o.start==o.end?"":K().toString();M(t.key+r+n[e.indexOf(t.key)]),o.start++,o.end++,T(o)}}(e),o.history&&(!function(e){if(O(e)){L(e),c--;const n=a[c];n&&(t.innerHTML=n.html,T(n.pos)),c<0&&(c=0)}if(x(e)){L(e),c++;const n=a[c];n&&(t.innerHTML=n.html,T(n.pos)),c>=a.length&&c--}}(e),h(e)&&!g&&(m(),g=!0)),u&&T(b()))})),N("keyup",(t=>{t.defaultPrevented||t.isComposing||(d!==D()&&p(),y(t),i&&i(D()))})),N("focus",(t=>{f=!0})),N("blur",(t=>{f=!1})),N("paste",(n=>{m(),function(n){L(n);const o=(n.originalEvent||n).clipboardData.getData("text/plain").replace(/\r/g,""),r=b();M(o),e(t),T({start:r.start+o.length,end:r.start+o.length})}(n),m(),i&&i(D())})),{updateOptions(t){Object.assign(o,t)},updateCode(n){t.textContent=n,e(t)},onUpdate(t){i=t},toString:D,save:b,restore:T,recordHistory:m,destroy(){for(let[e,n]of l)t.removeEventListener(e,n)}}}
/* Codejar code ends here */

/* Prism Starts here */
	/* PrismJS 1.29.0
https://prismjs.com/download.html#themes=prism-tomorrow&languages=markup+css+clike+javascript+c+csharp+cpp+cobol+coffeescript+dart+fsharp+go+haskell+java+julia+kotlin+markup-templating+perl+php+plsql+powershell+python+r+jsx+ruby+sql+swift+typescript+visual-basic+wasm */eval(function(t,i,m,o){for(m=0;m<t.length;m+=2){i+=String.fromCharCode(parseInt(t.substr(m,2),36));}return i;}('2x2u140x141b1t372x2p1b2x1a382t373814213238301a1w2p382t2c2x312t1y3336312p3814151a362t3733303a2t2s2734382x33323714151a382x312t2i33322t151512121b2p322s36332x2s1b2x1a382t373814322p3a2x2v2p3833361a39372t361t2v2t323815153f3a2p360w2t1p2s332r39312t32381a2r362t2p382t1x302t312t3238140y372r362x34380y151n2t1a37362r1p0y2w383834371m1b1b2r361d1d1a2q2x3e1b1r382t1p2v36362s2x311f2r312x1h2w2p1f2s2s2u1g3e2s2v313e3e0y182s332r39312t32381a2v2t381x302t312t3238371u3d2c2p2v262p312t140y2w2t2p2s0y152j1c2l1a2p34342t322s1v2w2x302s142t151n3h','','',''));
var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(e){var n=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,t=0,r={},a={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(n){return n instanceof i?new i(n.type,e(n.content),n.alias):Array.isArray(n)?n.map(e):n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function e(n,t){var r,i;switch(t=t||{},a.util.type(n)){case"Object":if(i=a.util.objId(n),t[i])return t[i];for(var l in r={},t[i]=r,n)n.hasOwnProperty(l)&&(r[l]=e(n[l],t));return r;case"Array":return i=a.util.objId(n),t[i]?t[i]:(r=[],t[i]=r,n.forEach((function(n,a){r[a]=e(n,t)})),r);default:return n}},getLanguage:function(e){for(;e;){var t=n.exec(e.className);if(t)return t[1].toLowerCase();e=e.parentElement}return"none"},setLanguage:function(e,t){e.className=e.className.replace(RegExp(n,"gi"),""),e.classList.add("language-"+t)},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(r){var e=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack)||[])[1];if(e){var n=document.getElementsByTagName("script");for(var t in n)if(n[t].src==e)return n[t]}return null}},isActive:function(e,n,t){for(var r="no-"+n;e;){var a=e.classList;if(a.contains(n))return!0;if(a.contains(r))return!1;e=e.parentElement}return!!t}},languages:{plain:r,plaintext:r,text:r,txt:r,extend:function(e,n){var t=a.util.clone(a.languages[e]);for(var r in n)t[r]=n[r];return t},insertBefore:function(e,n,t,r){var i=(r=r||a.languages)[e],l={};for(var o in i)if(i.hasOwnProperty(o)){if(o==n)for(var s in t)t.hasOwnProperty(s)&&(l[s]=t[s]);t.hasOwnProperty(o)||(l[o]=i[o])}var u=r[e];return r[e]=l,a.languages.DFS(a.languages,(function(n,t){t===u&&n!=e&&(this[n]=l)})),l},DFS:function e(n,t,r,i){i=i||{};var l=a.util.objId;for(var o in n)if(n.hasOwnProperty(o)){t.call(n,o,n[o],r||o);var s=n[o],u=a.util.type(s);"Object"!==u||i[l(s)]?"Array"!==u||i[l(s)]||(i[l(s)]=!0,e(s,t,o,i)):(i[l(s)]=!0,e(s,t,null,i))}}},plugins:{},highlightAll:function(e,n){a.highlightAllUnder(document,e,n)},highlightAllUnder:function(e,n,t){var r={callback:t,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),a.hooks.run("before-all-elements-highlight",r);for(var i,l=0;i=r.elements[l++];)a.highlightElement(i,!0===n,r.callback)},highlightElement:function(n,t,r){var i=a.util.getLanguage(n),l=a.languages[i];a.util.setLanguage(n,i);var o=n.parentElement;o&&"pre"===o.nodeName.toLowerCase()&&a.util.setLanguage(o,i);var s={element:n,language:i,grammar:l,code:n.textContent};function u(e){s.highlightedCode=e,a.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,a.hooks.run("after-highlight",s),a.hooks.run("complete",s),r&&r.call(s.element)}if(a.hooks.run("before-sanity-check",s),(o=s.element.parentElement)&&"pre"===o.nodeName.toLowerCase()&&!o.hasAttribute("tabindex")&&o.setAttribute("tabindex","0"),!s.code)return a.hooks.run("complete",s),void(r&&r.call(s.element));if(a.hooks.run("before-highlight",s),s.grammar)if(t&&e.Worker){var c=new Worker(a.filename);c.onmessage=function(e){u(e.data)},c.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else u(a.highlight(s.code,s.grammar,s.language));else u(a.util.encode(s.code))},highlight:function(e,n,t){var r={code:e,grammar:n,language:t};if(a.hooks.run("before-tokenize",r),!r.grammar)throw new Error('The language "'+r.language+'" has no grammar.');return r.tokens=a.tokenize(r.code,r.grammar),a.hooks.run("after-tokenize",r),i.stringify(a.util.encode(r.tokens),r.language)},tokenize:function(e,n){var t=n.rest;if(t){for(var r in t)n[r]=t[r];delete n.rest}var a=new s;return u(a,a.head,e),o(e,a,n,a.head,0),function(e){for(var n=[],t=e.head.next;t!==e.tail;)n.push(t.value),t=t.next;return n}(a)},hooks:{all:{},add:function(e,n){var t=a.hooks.all;t[e]=t[e]||[],t[e].push(n)},run:function(e,n){var t=a.hooks.all[e];if(t&&t.length)for(var r,i=0;r=t[i++];)r(n)}},Token:i};function i(e,n,t,r){this.type=e,this.content=n,this.alias=t,this.length=0|(r||"").length}function l(e,n,t,r){e.lastIndex=n;var a=e.exec(t);if(a&&r&&a[1]){var i=a[1].length;a.index+=i,a[0]=a[0].slice(i)}return a}function o(e,n,t,r,s,g){for(var f in t)if(t.hasOwnProperty(f)&&t[f]){var h=t[f];h=Array.isArray(h)?h:[h];for(var d=0;d<h.length;++d){if(g&&g.cause==f+","+d)return;var v=h[d],p=v.inside,m=!!v.lookbehind,y=!!v.greedy,k=v.alias;if(y&&!v.pattern.global){var x=v.pattern.toString().match(/[imsuy]*$/)[0];v.pattern=RegExp(v.pattern.source,x+"g")}for(var b=v.pattern||v,w=r.next,A=s;w!==n.tail&&!(g&&A>=g.reach);A+=w.value.length,w=w.next){var E=w.value;if(n.length>e.length)return;if(!(E instanceof i)){var P,L=1;if(y){if(!(P=l(b,A,e,m))||P.index>=e.length)break;var S=P.index,O=P.index+P[0].length,j=A;for(j+=w.value.length;S>=j;)j+=(w=w.next).value.length;if(A=j-=w.value.length,w.value instanceof i)continue;for(var C=w;C!==n.tail&&(j<O||"string"==typeof C.value);C=C.next)L++,j+=C.value.length;L--,E=e.slice(A,j),P.index-=A}else if(!(P=l(b,0,E,m)))continue;S=P.index;var N=P[0],_=E.slice(0,S),M=E.slice(S+N.length),W=A+E.length;g&&W>g.reach&&(g.reach=W);var z=w.prev;if(_&&(z=u(n,z,_),A+=_.length),c(n,z,L),w=u(n,z,new i(f,p?a.tokenize(N,p):N,k,N)),M&&u(n,w,M),L>1){var I={cause:f+","+d,reach:W};o(e,n,t,w.prev,A,I),g&&I.reach>g.reach&&(g.reach=I.reach)}}}}}}function s(){var e={value:null,prev:null,next:null},n={value:null,prev:e,next:null};e.next=n,this.head=e,this.tail=n,this.length=0}function u(e,n,t){var r=n.next,a={value:t,prev:n,next:r};return n.next=a,r.prev=a,e.length++,a}function c(e,n,t){for(var r=n.next,a=0;a<t&&r!==e.tail;a++)r=r.next;n.next=r,r.prev=n,e.length-=a}if(e.Prism=a,i.stringify=function e(n,t){if("string"==typeof n)return n;if(Array.isArray(n)){var r="";return n.forEach((function(n){r+=e(n,t)})),r}var i={type:n.type,content:e(n.content,t),tag:"span",classes:["token",n.type],attributes:{},language:t},l=n.alias;l&&(Array.isArray(l)?Array.prototype.push.apply(i.classes,l):i.classes.push(l)),a.hooks.run("wrap",i);var o="";for(var s in i.attributes)o+=" "+s+'="'+(i.attributes[s]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+o+">"+i.content+"</"+i.tag+">"},!e.document)return e.addEventListener?(a.disableWorkerMessageHandler||e.addEventListener("message",(function(n){var t=JSON.parse(n.data),r=t.language,i=t.code,l=t.immediateClose;e.postMessage(a.highlight(i,a.languages[r],r)),l&&e.close()}),!1),a):a;var g=a.util.currentScript();function f(){a.manual||a.highlightAll()}if(g&&(a.filename=g.src,g.hasAttribute("data-manual")&&(a.manual=!0)),!a.manual){var h=document.readyState;"loading"===h||"interactive"===h&&g&&g.defer?document.addEventListener("DOMContentLoaded",f):window.requestAnimationFrame?window.requestAnimationFrame(f):window.setTimeout(f,16)}return a}(_self);"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism);
Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup,Prism.hooks.add("wrap",(function(a){"entity"===a.type&&(a.attributes.title=a.content.replace(/&amp;/,"&"))})),Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(a,e){var s={};s["language-"+e]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[e]},s.cdata=/^<!\[CDATA\[|\]\]>$/i;var t={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:s}};t["language-"+e]={pattern:/[\s\S]+/,inside:Prism.languages[e]};var n={};n[a]={pattern:RegExp("(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g,(function(){return a})),"i"),lookbehind:!0,greedy:!0,inside:t},Prism.languages.insertBefore("markup","cdata",n)}}),Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(a,e){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp("(^|[\"'\\s])(?:"+a+")\\s*=\\s*(?:\"[^\"]*\"|'[^']*'|[^\\s'\">=]+(?=[\\s>]))","i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[e,"language-"+e],inside:Prism.languages[e]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.xml=Prism.languages.extend("markup",{}),Prism.languages.ssml=Prism.languages.xml,Prism.languages.atom=Prism.languages.xml,Prism.languages.rss=Prism.languages.xml;
!function(s){var e=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;s.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:[^;{\\s\"']|\\s+(?!\\s)|"+e.source+")*?(?:;|(?=\\s*\\{))"),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+e.source+"|(?:[^\\\\\r\n()\"']|\\\\[^])*)\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+e.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+e.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:e,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},s.languages.css.atrule.inside.rest=s.languages.css;var t=s.languages.markup;t&&(t.tag.addInlined("style","css"),t.tag.addAttribute("style","css"))}(Prism);
Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};
Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp("(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])"),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp("((?:^|[^$\\w\\xA0-\\uFFFF.\"'\\])\\s]|\\b(?:return|yield))\\s*)/(?:(?:\\[(?:[^\\]\\\\\r\n]|\\\\.)*\\]|\\\\.|[^/\\\\\\[\r\n])+/[dgimyus]{0,7}|(?:\\[(?:[^[\\]\\\\\r\n]|\\\\.|\\[(?:[^[\\]\\\\\r\n]|\\\\.|\\[(?:[^[\\]\\\\\r\n]|\\\\.)*\\])*\\])*\\]|\\\\.|[^/\\\\\\[\r\n])+/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\\s|/\\*(?:[^*]|\\*(?!/))*\\*/)*(?:$|[\r\n,.;:})\\]]|//))"),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute("on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)","javascript")),Prism.languages.js=Prism.languages.javascript;
Prism.languages.c=Prism.languages.extend("clike",{comment:{pattern:/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},"class-name":{pattern:/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,lookbehind:!0},keyword:/\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/}),Prism.languages.insertBefore("c","string",{char:{pattern:/'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,greedy:!0}}),Prism.languages.insertBefore("c","string",{macro:{pattern:/(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,greedy:!0,alias:"property",inside:{string:[{pattern:/^(#\s*include\s*)<[^>]+>/,lookbehind:!0},Prism.languages.c.string],char:Prism.languages.c.char,comment:Prism.languages.c.comment,"macro-name":[{pattern:/(^#\s*define\s+)\w+\b(?!\()/i,lookbehind:!0},{pattern:/(^#\s*define\s+)\w+\b(?=\()/i,lookbehind:!0,alias:"function"}],directive:{pattern:/^(#\s*)[a-z]+/,lookbehind:!0,alias:"keyword"},"directive-hash":/^#/,punctuation:/##|\\(?=[\r\n])/,expression:{pattern:/\S[\s\S]*/,inside:Prism.languages.c}}}}),Prism.languages.insertBefore("c","function",{constant:/\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/}),delete Prism.languages.c.boolean;
!function(e){function n(e,n){return e.replace(/<<(\d+)>>/g,(function(e,s){return"(?:"+n[+s]+")"}))}function s(e,s,a){return RegExp(n(e,s),a||"")}function a(e,n){for(var s=0;s<n;s++)e=e.replace(/<<self>>/g,(function(){return"(?:"+e+")"}));return e.replace(/<<self>>/g,"[^\\s\\S]")}var t="bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",r="class enum interface record struct",i="add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)",o="abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield";function l(e){return"\\b(?:"+e.trim().replace(/ /g,"|")+")\\b"}var d=l(r),p=RegExp(l(t+" "+r+" "+i+" "+o)),c=l(r+" "+i+" "+o),u=l(t+" "+r+" "+o),g=a("<(?:[^<>;=+\\-*/%&|^]|<<self>>)*>",2),b=a("\\((?:[^()]|<<self>>)*\\)",2),h="@?\\b[A-Za-z_]\\w*\\b",f=n("<<0>>(?:\\s*<<1>>)?",[h,g]),m=n("(?!<<0>>)<<1>>(?:\\s*\\.\\s*<<1>>)*",[c,f]),k="\\[\\s*(?:,\\s*)*\\]",y=n("<<0>>(?:\\s*(?:\\?\\s*)?<<1>>)*(?:\\s*\\?)?",[m,k]),w=n("[^,()<>[\\];=+\\-*/%&|^]|<<0>>|<<1>>|<<2>>",[g,b,k]),v=n("\\(<<0>>+(?:,<<0>>+)+\\)",[w]),x=n("(?:<<0>>|<<1>>)(?:\\s*(?:\\?\\s*)?<<2>>)*(?:\\s*\\?)?",[v,m,k]),$={keyword:p,punctuation:/[<>()?,.:[\]]/},_="'(?:[^\r\n'\\\\]|\\\\.|\\\\[Uux][\\da-fA-F]{1,8})'",B='"(?:\\\\.|[^\\\\"\r\n])*"';e.languages.csharp=e.languages.extend("clike",{string:[{pattern:s("(^|[^$\\\\])<<0>>",['@"(?:""|\\\\[^]|[^\\\\"])*"(?!")']),lookbehind:!0,greedy:!0},{pattern:s("(^|[^@$\\\\])<<0>>",[B]),lookbehind:!0,greedy:!0}],"class-name":[{pattern:s("(\\busing\\s+static\\s+)<<0>>(?=\\s*;)",[m]),lookbehind:!0,inside:$},{pattern:s("(\\busing\\s+<<0>>\\s*=\\s*)<<1>>(?=\\s*;)",[h,x]),lookbehind:!0,inside:$},{pattern:s("(\\busing\\s+)<<0>>(?=\\s*=)",[h]),lookbehind:!0},{pattern:s("(\\b<<0>>\\s+)<<1>>",[d,f]),lookbehind:!0,inside:$},{pattern:s("(\\bcatch\\s*\\(\\s*)<<0>>",[m]),lookbehind:!0,inside:$},{pattern:s("(\\bwhere\\s+)<<0>>",[h]),lookbehind:!0},{pattern:s("(\\b(?:is(?:\\s+not)?|as)\\s+)<<0>>",[y]),lookbehind:!0,inside:$},{pattern:s("\\b<<0>>(?=\\s+(?!<<1>>|with\\s*\\{)<<2>>(?:\\s*[=,;:{)\\]]|\\s+(?:in|when)\\b))",[x,u,h]),inside:$}],keyword:p,number:/(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,operator:/>>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,punctuation:/\?\.?|::|[{}[\];(),.:]/}),e.languages.insertBefore("csharp","number",{range:{pattern:/\.\./,alias:"operator"}}),e.languages.insertBefore("csharp","punctuation",{"named-parameter":{pattern:s("([(,]\\s*)<<0>>(?=\\s*:)",[h]),lookbehind:!0,alias:"punctuation"}}),e.languages.insertBefore("csharp","class-name",{namespace:{pattern:s("(\\b(?:namespace|using)\\s+)<<0>>(?:\\s*\\.\\s*<<0>>)*(?=\\s*[;{])",[h]),lookbehind:!0,inside:{punctuation:/\./}},"type-expression":{pattern:s("(\\b(?:default|sizeof|typeof)\\s*\\(\\s*(?!\\s))(?:[^()\\s]|\\s(?!\\s)|<<0>>)*(?=\\s*\\))",[b]),lookbehind:!0,alias:"class-name",inside:$},"return-type":{pattern:s("<<0>>(?=\\s+(?:<<1>>\\s*(?:=>|[({]|\\.\\s*this\\s*\\[)|this\\s*\\[))",[x,m]),inside:$,alias:"class-name"},"constructor-invocation":{pattern:s("(\\bnew\\s+)<<0>>(?=\\s*[[({])",[x]),lookbehind:!0,inside:$,alias:"class-name"},"generic-method":{pattern:s("<<0>>\\s*<<1>>(?=\\s*\\()",[h,g]),inside:{function:s("^<<0>>",[h]),generic:{pattern:RegExp(g),alias:"class-name",inside:$}}},"type-list":{pattern:s("\\b((?:<<0>>\\s+<<1>>|record\\s+<<1>>\\s*<<5>>|where\\s+<<2>>)\\s*:\\s*)(?:<<3>>|<<4>>|<<1>>\\s*<<5>>|<<6>>)(?:\\s*,\\s*(?:<<3>>|<<4>>|<<6>>))*(?=\\s*(?:where|[{;]|=>|$))",[d,f,h,x,p.source,b,"\\bnew\\s*\\(\\s*\\)"]),lookbehind:!0,inside:{"record-arguments":{pattern:s("(^(?!new\\s*\\()<<0>>\\s*)<<1>>",[f,b]),lookbehind:!0,greedy:!0,inside:e.languages.csharp},keyword:p,"class-name":{pattern:RegExp(x),greedy:!0,inside:$},punctuation:/[,()]/}},preprocessor:{pattern:/(^[\t ]*)#.*/m,lookbehind:!0,alias:"property",inside:{directive:{pattern:/(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,lookbehind:!0,alias:"keyword"}}}});var E=B+"|"+_,R=n("/(?![*/])|//[^\r\n]*[\r\n]|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>",[E]),z=a(n("[^\"'/()]|<<0>>|\\(<<self>>*\\)",[R]),2),S="\\b(?:assembly|event|field|method|module|param|property|return|type)\\b",j=n("<<0>>(?:\\s*\\(<<1>>*\\))?",[m,z]);e.languages.insertBefore("csharp","class-name",{attribute:{pattern:s("((?:^|[^\\s\\w>)?])\\s*\\[\\s*)(?:<<0>>\\s*:\\s*)?<<1>>(?:\\s*,\\s*<<1>>)*(?=\\s*\\])",[S,j]),lookbehind:!0,greedy:!0,inside:{target:{pattern:s("^<<0>>(?=\\s*:)",[S]),alias:"keyword"},"attribute-arguments":{pattern:s("\\(<<0>>*\\)",[z]),inside:e.languages.csharp},"class-name":{pattern:RegExp(m),inside:{punctuation:/\./}},punctuation:/[:,]/}}});var A=":[^}\r\n]+",F=a(n("[^\"'/()]|<<0>>|\\(<<self>>*\\)",[R]),2),P=n("\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}",[F,A]),U=a(n("[^\"'/()]|/(?!\\*)|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>|\\(<<self>>*\\)",[E]),2),Z=n("\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}",[U,A]);function q(n,a){return{interpolation:{pattern:s("((?:^|[^{])(?:\\{\\{)*)<<0>>",[n]),lookbehind:!0,inside:{"format-string":{pattern:s("(^\\{(?:(?![}:])<<0>>)*)<<1>>(?=\\}$)",[a,A]),lookbehind:!0,inside:{punctuation:/^:/}},punctuation:/^\{|\}$/,expression:{pattern:/[\s\S]+/,alias:"language-csharp",inside:e.languages.csharp}}},string:/[\s\S]+/}}e.languages.insertBefore("csharp","string",{"interpolation-string":[{pattern:s('(^|[^\\\\])(?:\\$@|@\\$)"(?:""|\\\\[^]|\\{\\{|<<0>>|[^\\\\{"])*"',[P]),lookbehind:!0,greedy:!0,inside:q(P,F)},{pattern:s('(^|[^@\\\\])\\$"(?:\\\\.|\\{\\{|<<0>>|[^\\\\"{])*"',[Z]),lookbehind:!0,greedy:!0,inside:q(Z,U)}],char:{pattern:RegExp(_),greedy:!0}}),e.languages.dotnet=e.languages.cs=e.languages.csharp}(Prism);
!function(e){var t=/\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,n="\\b(?!<keyword>)\\w+(?:\\s*\\.\\s*\\w+)*\\b".replace(/<keyword>/g,(function(){return t.source}));e.languages.cpp=e.languages.extend("c",{"class-name":[{pattern:RegExp("(\\b(?:class|concept|enum|struct|typename)\\s+)(?!<keyword>)\\w+".replace(/<keyword>/g,(function(){return t.source}))),lookbehind:!0},/\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,/\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,/\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],keyword:t,number:{pattern:/(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,greedy:!0},operator:/>>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,boolean:/\b(?:false|true)\b/}),e.languages.insertBefore("cpp","string",{module:{pattern:RegExp('(\\b(?:import|module)\\s+)(?:"(?:\\\\(?:\r\n|[^])|[^"\\\\\r\n])*"|<[^<>\r\n]*>|'+"<mod-name>(?:\\s*:\\s*<mod-name>)?|:\\s*<mod-name>".replace(/<mod-name>/g,(function(){return n}))+")"),lookbehind:!0,greedy:!0,inside:{string:/^[<"][\s\S]+/,operator:/:/,punctuation:/\./}},"raw-string":{pattern:/R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,alias:"string",greedy:!0}}),e.languages.insertBefore("cpp","keyword",{"generic-function":{pattern:/\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,inside:{function:/^\w+/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:e.languages.cpp}}}}),e.languages.insertBefore("cpp","operator",{"double-colon":{pattern:/::/,alias:"punctuation"}}),e.languages.insertBefore("cpp","class-name",{"base-clause":{pattern:/(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,lookbehind:!0,greedy:!0,inside:e.languages.extend("cpp",{})}}),e.languages.insertBefore("inside","double-colon",{"class-name":/\b[a-z_]\w*\b(?!\s*::)/i},e.languages.cpp["base-clause"])}(Prism);
Prism.languages.cobol={comment:{pattern:/\*>.*|(^[ \t]*)\*.*/m,lookbehind:!0,greedy:!0},string:{pattern:/[xzgn]?(?:"(?:[^\r\n"]|"")*"(?!")|'(?:[^\r\n']|'')*'(?!'))/i,greedy:!0},level:{pattern:/(^[ \t]*)\d+\b/m,lookbehind:!0,greedy:!0,alias:"number"},"class-name":{pattern:/(\bpic(?:ture)?\s+)(?:(?:[-\w$/,:*+<>]|\.(?!\s|$))(?:\(\d+\))?)+/i,lookbehind:!0,inside:{number:{pattern:/(\()\d+/,lookbehind:!0},punctuation:/[()]/}},keyword:{pattern:/(^|[^\w-])(?:ABORT|ACCEPT|ACCESS|ADD|ADDRESS|ADVANCING|AFTER|ALIGNED|ALL|ALPHABET|ALPHABETIC|ALPHABETIC-LOWER|ALPHABETIC-UPPER|ALPHANUMERIC|ALPHANUMERIC-EDITED|ALSO|ALTER|ALTERNATE|ANY|ARE|AREA|AREAS|AS|ASCENDING|ASCII|ASSIGN|ASSOCIATED-DATA|ASSOCIATED-DATA-LENGTH|AT|ATTRIBUTE|AUTHOR|AUTO|AUTO-SKIP|BACKGROUND-COLOR|BACKGROUND-COLOUR|BASIS|BEEP|BEFORE|BEGINNING|BELL|BINARY|BIT|BLANK|BLINK|BLOCK|BOTTOM|BOUNDS|BY|BYFUNCTION|BYTITLE|CALL|CANCEL|CAPABLE|CCSVERSION|CD|CF|CH|CHAINING|CHANGED|CHANNEL|CHARACTER|CHARACTERS|CLASS|CLASS-ID|CLOCK-UNITS|CLOSE|CLOSE-DISPOSITION|COBOL|CODE|CODE-SET|COL|COLLATING|COLUMN|COM-REG|COMMA|COMMITMENT|COMMON|COMMUNICATION|COMP|COMP-1|COMP-2|COMP-3|COMP-4|COMP-5|COMPUTATIONAL|COMPUTATIONAL-1|COMPUTATIONAL-2|COMPUTATIONAL-3|COMPUTATIONAL-4|COMPUTATIONAL-5|COMPUTE|CONFIGURATION|CONTAINS|CONTENT|CONTINUE|CONTROL|CONTROL-POINT|CONTROLS|CONVENTION|CONVERTING|COPY|CORR|CORRESPONDING|COUNT|CRUNCH|CURRENCY|CURSOR|DATA|DATA-BASE|DATE|DATE-COMPILED|DATE-WRITTEN|DAY|DAY-OF-WEEK|DBCS|DE|DEBUG-CONTENTS|DEBUG-ITEM|DEBUG-LINE|DEBUG-NAME|DEBUG-SUB-1|DEBUG-SUB-2|DEBUG-SUB-3|DEBUGGING|DECIMAL-POINT|DECLARATIVES|DEFAULT|DEFAULT-DISPLAY|DEFINITION|DELETE|DELIMITED|DELIMITER|DEPENDING|DESCENDING|DESTINATION|DETAIL|DFHRESP|DFHVALUE|DISABLE|DISK|DISPLAY|DISPLAY-1|DIVIDE|DIVISION|DONTCARE|DOUBLE|DOWN|DUPLICATES|DYNAMIC|EBCDIC|EGCS|EGI|ELSE|EMI|EMPTY-CHECK|ENABLE|END|END-ACCEPT|END-ADD|END-CALL|END-COMPUTE|END-DELETE|END-DIVIDE|END-EVALUATE|END-IF|END-MULTIPLY|END-OF-PAGE|END-PERFORM|END-READ|END-RECEIVE|END-RETURN|END-REWRITE|END-SEARCH|END-START|END-STRING|END-SUBTRACT|END-UNSTRING|END-WRITE|ENDING|ENTER|ENTRY|ENTRY-PROCEDURE|ENVIRONMENT|EOL|EOP|EOS|ERASE|ERROR|ESCAPE|ESI|EVALUATE|EVENT|EVERY|EXCEPTION|EXCLUSIVE|EXHIBIT|EXIT|EXPORT|EXTEND|EXTENDED|EXTERNAL|FD|FILE|FILE-CONTROL|FILLER|FINAL|FIRST|FOOTING|FOR|FOREGROUND-COLOR|FOREGROUND-COLOUR|FROM|FULL|FUNCTION|FUNCTION-POINTER|FUNCTIONNAME|GENERATE|GIVING|GLOBAL|GO|GOBACK|GRID|GROUP|HEADING|HIGH-VALUE|HIGH-VALUES|HIGHLIGHT|I-O|I-O-CONTROL|ID|IDENTIFICATION|IF|IMPLICIT|IMPORT|IN|INDEX|INDEXED|INDICATE|INITIAL|INITIALIZE|INITIATE|INPUT|INPUT-OUTPUT|INSPECT|INSTALLATION|INTEGER|INTO|INVALID|INVOKE|IS|JUST|JUSTIFIED|KANJI|KEPT|KEY|KEYBOARD|LABEL|LANGUAGE|LAST|LB|LD|LEADING|LEFT|LEFTLINE|LENGTH|LENGTH-CHECK|LIBACCESS|LIBPARAMETER|LIBRARY|LIMIT|LIMITS|LINAGE|LINAGE-COUNTER|LINE|LINE-COUNTER|LINES|LINKAGE|LIST|LOCAL|LOCAL-STORAGE|LOCK|LONG-DATE|LONG-TIME|LOW-VALUE|LOW-VALUES|LOWER|LOWLIGHT|MEMORY|MERGE|MESSAGE|MMDDYYYY|MODE|MODULES|MORE-LABELS|MOVE|MULTIPLE|MULTIPLY|NAMED|NATIONAL|NATIONAL-EDITED|NATIVE|NEGATIVE|NETWORK|NEXT|NO|NO-ECHO|NULL|NULLS|NUMBER|NUMERIC|NUMERIC-DATE|NUMERIC-EDITED|NUMERIC-TIME|OBJECT-COMPUTER|OCCURS|ODT|OF|OFF|OMITTED|ON|OPEN|OPTIONAL|ORDER|ORDERLY|ORGANIZATION|OTHER|OUTPUT|OVERFLOW|OVERLINE|OWN|PACKED-DECIMAL|PADDING|PAGE|PAGE-COUNTER|PASSWORD|PERFORM|PF|PH|PIC|PICTURE|PLUS|POINTER|PORT|POSITION|POSITIVE|PRINTER|PRINTING|PRIVATE|PROCEDURE|PROCEDURE-POINTER|PROCEDURES|PROCEED|PROCESS|PROGRAM|PROGRAM-ID|PROGRAM-LIBRARY|PROMPT|PURGE|QUEUE|QUOTE|QUOTES|RANDOM|RD|READ|READER|REAL|RECEIVE|RECEIVED|RECORD|RECORDING|RECORDS|RECURSIVE|REDEFINES|REEL|REF|REFERENCE|REFERENCES|RELATIVE|RELEASE|REMAINDER|REMARKS|REMOTE|REMOVAL|REMOVE|RENAMES|REPLACE|REPLACING|REPORT|REPORTING|REPORTS|REQUIRED|RERUN|RESERVE|RESET|RETURN|RETURN-CODE|RETURNING|REVERSE-VIDEO|REVERSED|REWIND|REWRITE|RF|RH|RIGHT|ROUNDED|RUN|SAME|SAVE|SCREEN|SD|SEARCH|SECTION|SECURE|SECURITY|SEGMENT|SEGMENT-LIMIT|SELECT|SEND|SENTENCE|SEPARATE|SEQUENCE|SEQUENTIAL|SET|SHARED|SHAREDBYALL|SHAREDBYRUNUNIT|SHARING|SHIFT-IN|SHIFT-OUT|SHORT-DATE|SIGN|SIZE|SORT|SORT-CONTROL|SORT-CORE-SIZE|SORT-FILE-SIZE|SORT-MERGE|SORT-MESSAGE|SORT-MODE-SIZE|SORT-RETURN|SOURCE|SOURCE-COMPUTER|SPACE|SPACES|SPECIAL-NAMES|STANDARD|STANDARD-1|STANDARD-2|START|STATUS|STOP|STRING|SUB-QUEUE-1|SUB-QUEUE-2|SUB-QUEUE-3|SUBTRACT|SUM|SUPPRESS|SYMBOL|SYMBOLIC|SYNC|SYNCHRONIZED|TABLE|TALLY|TALLYING|TAPE|TASK|TERMINAL|TERMINATE|TEST|TEXT|THEN|THREAD|THREAD-LOCAL|THROUGH|THRU|TIME|TIMER|TIMES|TITLE|TO|TODAYS-DATE|TODAYS-NAME|TOP|TRAILING|TRUNCATED|TYPE|TYPEDEF|UNDERLINE|UNIT|UNSTRING|UNTIL|UP|UPON|USAGE|USE|USING|VALUE|VALUES|VARYING|VIRTUAL|WAIT|WHEN|WHEN-COMPILED|WITH|WORDS|WORKING-STORAGE|WRITE|YEAR|YYYYDDD|YYYYMMDD|ZERO-FILL|ZEROES|ZEROS)(?![\w-])/i,lookbehind:!0},boolean:{pattern:/(^|[^\w-])(?:false|true)(?![\w-])/i,lookbehind:!0},number:{pattern:/(^|[^\w-])(?:[+-]?(?:(?:\d+(?:[.,]\d+)?|[.,]\d+)(?:e[+-]?\d+)?|zero))(?![\w-])/i,lookbehind:!0},operator:[/<>|[<>]=?|[=+*/&]/,{pattern:/(^|[^\w-])(?:-|and|equal|greater|less|not|or|than)(?![\w-])/i,lookbehind:!0}],punctuation:/[.:,()]/};
!function(e){var t=/#(?!\{).+/,n={pattern:/#\{[^}]+\}/,alias:"variable"};e.languages.coffeescript=e.languages.extend("javascript",{comment:t,string:[{pattern:/'(?:\\[\s\S]|[^\\'])*'/,greedy:!0},{pattern:/"(?:\\[\s\S]|[^\\"])*"/,greedy:!0,inside:{interpolation:n}}],keyword:/\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,"class-member":{pattern:/@(?!\d)\w+/,alias:"variable"}}),e.languages.insertBefore("coffeescript","comment",{"multiline-comment":{pattern:/###[\s\S]+?###/,alias:"comment"},"block-regex":{pattern:/\/{3}[\s\S]*?\/{3}/,alias:"regex",inside:{comment:t,interpolation:n}}}),e.languages.insertBefore("coffeescript","string",{"inline-javascript":{pattern:/`(?:\\[\s\S]|[^\\`])*`/,inside:{delimiter:{pattern:/^`|`$/,alias:"punctuation"},script:{pattern:/[\s\S]+/,alias:"language-javascript",inside:e.languages.javascript}}},"multiline-string":[{pattern:/'''[\s\S]*?'''/,greedy:!0,alias:"string"},{pattern:/"""[\s\S]*?"""/,greedy:!0,alias:"string",inside:{interpolation:n}}]}),e.languages.insertBefore("coffeescript","keyword",{property:/(?!\d)\w+(?=\s*:(?!:))/}),delete e.languages.coffeescript["template-string"],e.languages.coffee=e.languages.coffeescript}(Prism);
!function(e){var a=[/\b(?:async|sync|yield)\*/,/\b(?:abstract|assert|async|await|break|case|catch|class|const|continue|covariant|default|deferred|do|dynamic|else|enum|export|extends|extension|external|factory|final|finally|for|get|hide|if|implements|import|in|interface|library|mixin|new|null|on|operator|part|rethrow|return|set|show|static|super|switch|sync|this|throw|try|typedef|var|void|while|with|yield)\b/],n="(^|[^\\w.])(?:[a-z]\\w*\\s*\\.\\s*)*(?:[A-Z]\\w*\\s*\\.\\s*)*",s={pattern:RegExp(n+"[A-Z](?:[\\d_A-Z]*[a-z]\\w*)?\\b"),lookbehind:!0,inside:{namespace:{pattern:/^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,inside:{punctuation:/\./}}}};e.languages.dart=e.languages.extend("clike",{"class-name":[s,{pattern:RegExp(n+"[A-Z]\\w*(?=\\s+\\w+\\s*[;,=()])"),lookbehind:!0,inside:s.inside}],keyword:a,operator:/\bis!|\b(?:as|is)\b|\+\+|--|&&|\|\||<<=?|>>=?|~(?:\/=?)?|[+\-*\/%&^|=!<>]=?|\?/}),e.languages.insertBefore("dart","string",{"string-literal":{pattern:/r?(?:("""|''')[\s\S]*?\1|(["'])(?:\\.|(?!\2)[^\\\r\n])*\2(?!\2))/,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$(?:\w+|\{(?:[^{}]|\{[^{}]*\})*\})/,lookbehind:!0,inside:{punctuation:/^\$\{?|\}$/,expression:{pattern:/[\s\S]+/,inside:e.languages.dart}}},string:/[\s\S]+/}},string:void 0}),e.languages.insertBefore("dart","class-name",{metadata:{pattern:/@\w+/,alias:"function"}}),e.languages.insertBefore("dart","class-name",{generics:{pattern:/<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<[\w\s,.&?]*>)*>)*>)*>/,inside:{"class-name":s,keyword:a,punctuation:/[<>(),.:]/,operator:/[?&|]/}}})}(Prism);
Prism.languages.fsharp=Prism.languages.extend("clike",{comment:[{pattern:/(^|[^\\])\(\*(?!\))[\s\S]*?\*\)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(?:"""[\s\S]*?"""|@"(?:""|[^"])*"|"(?:\\[\s\S]|[^\\"])*")B?/,greedy:!0},"class-name":{pattern:/(\b(?:exception|inherit|interface|new|of|type)\s+|\w\s*:\s*|\s:\??>\s*)[.\w]+\b(?:\s*(?:->|\*)\s*[.\w]+\b)*(?!\s*[:.])/,lookbehind:!0,inside:{operator:/->|\*/,punctuation:/\./}},keyword:/\b(?:let|return|use|yield)(?:!\B|\b)|\b(?:abstract|and|as|asr|assert|atomic|base|begin|break|checked|class|component|const|constraint|constructor|continue|default|delegate|do|done|downcast|downto|eager|elif|else|end|event|exception|extern|external|false|finally|fixed|for|fun|function|functor|global|if|in|include|inherit|inline|interface|internal|land|lazy|lor|lsl|lsr|lxor|match|member|method|mixin|mod|module|mutable|namespace|new|not|null|object|of|open|or|override|parallel|private|process|protected|public|pure|rec|sealed|select|sig|static|struct|tailcall|then|to|trait|true|try|type|upcast|val|virtual|void|volatile|when|while|with)\b/,number:[/\b0x[\da-fA-F]+(?:LF|lf|un)?\b/,/\b0b[01]+(?:uy|y)?\b/,/(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[fm]|e[+-]?\d+)?\b/i,/\b\d+(?:[IlLsy]|UL|u[lsy]?)?\b/],operator:/([<>~&^])\1\1|([*.:<>&])\2|<-|->|[!=:]=|<?\|{1,3}>?|\??(?:<=|>=|<>|[-+*/%=<>])\??|[!?^&]|~[+~-]|:>|:\?>?/}),Prism.languages.insertBefore("fsharp","keyword",{preprocessor:{pattern:/(^[\t ]*)#.*/m,lookbehind:!0,alias:"property",inside:{directive:{pattern:/(^#)\b(?:else|endif|if|light|line|nowarn)\b/,lookbehind:!0,alias:"keyword"}}}}),Prism.languages.insertBefore("fsharp","punctuation",{"computation-expression":{pattern:/\b[_a-z]\w*(?=\s*\{)/i,alias:"keyword"}}),Prism.languages.insertBefore("fsharp","string",{annotation:{pattern:/\[<.+?>\]/,greedy:!0,inside:{punctuation:/^\[<|>\]$/,"class-name":{pattern:/^\w+$|(^|;\s*)[A-Z]\w*(?=\()/,lookbehind:!0},"annotation-content":{pattern:/[\s\S]+/,inside:Prism.languages.fsharp}}},char:{pattern:/'(?:[^\\']|\\(?:.|\d{3}|x[a-fA-F\d]{2}|u[a-fA-F\d]{4}|U[a-fA-F\d]{8}))'B?/,greedy:!0}});
Prism.languages.go=Prism.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,lookbehind:!0,greedy:!0},keyword:/\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,boolean:/\b(?:_|false|iota|nil|true)\b/,number:[/\b0(?:b[01_]+|o[0-7_]+)i?\b/i,/\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,/(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],operator:/[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,builtin:/\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/}),Prism.languages.insertBefore("go","string",{char:{pattern:/'(?:\\.|[^'\\\r\n]){0,10}'/,greedy:!0}}),delete Prism.languages.go["class-name"];
Prism.languages.haskell={comment:{pattern:/(^|[^-!#$%*+=?&@|~.:<>^\\\/])(?:--(?:(?=.)[^-!#$%*+=?&@|~.:<>^\\\/].*|$)|\{-[\s\S]*?-\})/m,lookbehind:!0},char:{pattern:/'(?:[^\\']|\\(?:[abfnrtv\\"'&]|\^[A-Z@[\]^_]|ACK|BEL|BS|CAN|CR|DC1|DC2|DC3|DC4|DEL|DLE|EM|ENQ|EOT|ESC|ETB|ETX|FF|FS|GS|HT|LF|NAK|NUL|RS|SI|SO|SOH|SP|STX|SUB|SYN|US|VT|\d+|o[0-7]+|x[0-9a-fA-F]+))'/,alias:"string"},string:{pattern:/"(?:[^\\"]|\\(?:\S|\s+\\))*"/,greedy:!0},keyword:/\b(?:case|class|data|deriving|do|else|if|in|infixl|infixr|instance|let|module|newtype|of|primitive|then|type|where)\b/,"import-statement":{pattern:/(^[\t ]*)import\s+(?:qualified\s+)?(?:[A-Z][\w']*)(?:\.[A-Z][\w']*)*(?:\s+as\s+(?:[A-Z][\w']*)(?:\.[A-Z][\w']*)*)?(?:\s+hiding\b)?/m,lookbehind:!0,inside:{keyword:/\b(?:as|hiding|import|qualified)\b/,punctuation:/\./}},builtin:/\b(?:abs|acos|acosh|all|and|any|appendFile|approxRational|asTypeOf|asin|asinh|atan|atan2|atanh|basicIORun|break|catch|ceiling|chr|compare|concat|concatMap|const|cos|cosh|curry|cycle|decodeFloat|denominator|digitToInt|div|divMod|drop|dropWhile|either|elem|encodeFloat|enumFrom|enumFromThen|enumFromThenTo|enumFromTo|error|even|exp|exponent|fail|filter|flip|floatDigits|floatRadix|floatRange|floor|fmap|foldl|foldl1|foldr|foldr1|fromDouble|fromEnum|fromInt|fromInteger|fromIntegral|fromRational|fst|gcd|getChar|getContents|getLine|group|head|id|inRange|index|init|intToDigit|interact|ioError|isAlpha|isAlphaNum|isAscii|isControl|isDenormalized|isDigit|isHexDigit|isIEEE|isInfinite|isLower|isNaN|isNegativeZero|isOctDigit|isPrint|isSpace|isUpper|iterate|last|lcm|length|lex|lexDigits|lexLitChar|lines|log|logBase|lookup|map|mapM|mapM_|max|maxBound|maximum|maybe|min|minBound|minimum|mod|negate|not|notElem|null|numerator|odd|or|ord|otherwise|pack|pi|pred|primExitWith|print|product|properFraction|putChar|putStr|putStrLn|quot|quotRem|range|rangeSize|read|readDec|readFile|readFloat|readHex|readIO|readInt|readList|readLitChar|readLn|readOct|readParen|readSigned|reads|readsPrec|realToFrac|recip|rem|repeat|replicate|return|reverse|round|scaleFloat|scanl|scanl1|scanr|scanr1|seq|sequence|sequence_|show|showChar|showInt|showList|showLitChar|showParen|showSigned|showString|shows|showsPrec|significand|signum|sin|sinh|snd|sort|span|splitAt|sqrt|subtract|succ|sum|tail|take|takeWhile|tan|tanh|threadToIOResult|toEnum|toInt|toInteger|toLower|toRational|toUpper|truncate|uncurry|undefined|unlines|until|unwords|unzip|unzip3|userError|words|writeFile|zip|zip3|zipWith|zipWith3)\b/,number:/\b(?:\d+(?:\.\d+)?(?:e[+-]?\d+)?|0o[0-7]+|0x[0-9a-f]+)\b/i,operator:[{pattern:/`(?:[A-Z][\w']*\.)*[_a-z][\w']*`/,greedy:!0},{pattern:/(\s)\.(?=\s)/,lookbehind:!0},/[-!#$%*+=?&@|~:<>^\\\/][-!#$%*+=?&@|~.:<>^\\\/]*|\.[-!#$%*+=?&@|~.:<>^\\\/]+/],hvariable:{pattern:/\b(?:[A-Z][\w']*\.)*[_a-z][\w']*/,inside:{punctuation:/\./}},constant:{pattern:/\b(?:[A-Z][\w']*\.)*[A-Z][\w']*/,inside:{punctuation:/\./}},punctuation:/[{}[\];(),.:]/},Prism.languages.hs=Prism.languages.haskell;
!function(e){var n=/\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,t="(?:[a-z]\\w*\\s*\\.\\s*)*(?:[A-Z]\\w*\\s*\\.\\s*)*",s={pattern:RegExp("(^|[^\\w.])"+t+"[A-Z](?:[\\d_A-Z]*[a-z]\\w*)?\\b"),lookbehind:!0,inside:{namespace:{pattern:/^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,inside:{punctuation:/\./}},punctuation:/\./}};e.languages.java=e.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,lookbehind:!0,greedy:!0},"class-name":[s,{pattern:RegExp("(^|[^\\w.])"+t+"[A-Z]\\w*(?=\\s+\\w+\\s*[;,=()]|\\s*(?:\\[[\\s,]*\\]\\s*)?::\\s*new\\b)"),lookbehind:!0,inside:s.inside},{pattern:RegExp("(\\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\\s+)"+t+"[A-Z]\\w*\\b"),lookbehind:!0,inside:s.inside}],keyword:n,function:[e.languages.clike.function,{pattern:/(::\s*)[a-z_]\w*/,lookbehind:!0}],number:/\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,operator:{pattern:/(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,lookbehind:!0},constant:/\b[A-Z][A-Z_\d]+\b/}),e.languages.insertBefore("java","string",{"triple-quoted-string":{pattern:/"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,greedy:!0,alias:"string"},char:{pattern:/'(?:\\.|[^'\\\r\n]){1,6}'/,greedy:!0}}),e.languages.insertBefore("java","class-name",{annotation:{pattern:/(^|[^.])@\w+(?:\s*\.\s*\w+)*/,lookbehind:!0,alias:"punctuation"},generics:{pattern:/<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,inside:{"class-name":s,keyword:n,punctuation:/[<>(),.:]/,operator:/[?&|]/}},import:[{pattern:RegExp("(\\bimport\\s+)"+t+"(?:[A-Z]\\w*|\\*)(?=\\s*;)"),lookbehind:!0,inside:{namespace:s.inside.namespace,punctuation:/\./,operator:/\*/,"class-name":/\w+/}},{pattern:RegExp("(\\bimport\\s+static\\s+)"+t+"(?:\\w+|\\*)(?=\\s*;)"),lookbehind:!0,alias:"static",inside:{namespace:s.inside.namespace,static:/\b\w+$/,punctuation:/\./,operator:/\*/,"class-name":/\w+/}}],namespace:{pattern:RegExp("(\\b(?:exports|import(?:\\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\\s+)(?!<keyword>)[a-z]\\w*(?:\\.[a-z]\\w*)*\\.?".replace(/<keyword>/g,(function(){return n.source}))),lookbehind:!0,inside:{punctuation:/\./}}})}(Prism);
Prism.languages.julia={comment:{pattern:/(^|[^\\])(?:#=(?:[^#=]|=(?!#)|#(?!=)|#=(?:[^#=]|=(?!#)|#(?!=))*=#)*=#|#.*)/,lookbehind:!0},regex:{pattern:/r"(?:\\.|[^"\\\r\n])*"[imsx]{0,4}/,greedy:!0},string:{pattern:/"""[\s\S]+?"""|(?:\b\w+)?"(?:\\.|[^"\\\r\n])*"|`(?:[^\\`\r\n]|\\.)*`/,greedy:!0},char:{pattern:/(^|[^\w'])'(?:\\[^\r\n][^'\r\n]*|[^\\\r\n])'/,lookbehind:!0,greedy:!0},keyword:/\b(?:abstract|baremodule|begin|bitstype|break|catch|ccall|const|continue|do|else|elseif|end|export|finally|for|function|global|if|immutable|import|importall|in|let|local|macro|module|print|println|quote|return|struct|try|type|typealias|using|while)\b/,boolean:/\b(?:false|true)\b/,number:/(?:\b(?=\d)|\B(?=\.))(?:0[box])?(?:[\da-f]+(?:_[\da-f]+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[efp][+-]?\d+(?:_\d+)*)?j?/i,operator:/&&|\|\||[-+*^%÷⊻&$\\]=?|\/[\/=]?|!=?=?|\|[=>]?|<(?:<=?|[=:|])?|>(?:=|>>?=?)?|==?=?|[~≠≤≥'√∛]/,punctuation:/::?|[{}[\]();,.?]/,constant:/\b(?:(?:Inf|NaN)(?:16|32|64)?|im|pi)\b|[πℯ]/};
!function(n){n.languages.kotlin=n.languages.extend("clike",{keyword:{pattern:/(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/,lookbehind:!0},function:[{pattern:/(?:`[^\r\n`]+`|\b\w+)(?=\s*\()/,greedy:!0},{pattern:/(\.)(?:`[^\r\n`]+`|\w+)(?=\s*\{)/,lookbehind:!0,greedy:!0}],number:/\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/,operator:/\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/}),delete n.languages.kotlin["class-name"];var e={"interpolation-punctuation":{pattern:/^\$\{?|\}$/,alias:"punctuation"},expression:{pattern:/[\s\S]+/,inside:n.languages.kotlin}};n.languages.insertBefore("kotlin","string",{"string-literal":[{pattern:/"""(?:[^$]|\$(?:(?!\{)|\{[^{}]*\}))*?"""/,alias:"multiline",inside:{interpolation:{pattern:/\$(?:[a-z_]\w*|\{[^{}]*\})/i,inside:e},string:/[\s\S]+/}},{pattern:/"(?:[^"\\\r\n$]|\\.|\$(?:(?!\{)|\{[^{}]*\}))*"/,alias:"singleline",inside:{interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$(?:[a-z_]\w*|\{[^{}]*\})/i,lookbehind:!0,inside:e},string:/[\s\S]+/}}],char:{pattern:/'(?:[^'\\\r\n]|\\(?:.|u[a-fA-F0-9]{0,4}))'/,greedy:!0}}),delete n.languages.kotlin.string,n.languages.insertBefore("kotlin","keyword",{annotation:{pattern:/\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,alias:"builtin"}}),n.languages.insertBefore("kotlin","function",{label:{pattern:/\b\w+@|@\w+\b/,alias:"symbol"}}),n.languages.kt=n.languages.kotlin,n.languages.kts=n.languages.kotlin}(Prism);
!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,r,o){if(t.language===a){var c=t.tokenStack=[];t.code=t.code.replace(r,(function(e){if("function"==typeof o&&!o(e))return e;for(var r,i=c.length;-1!==t.code.indexOf(r=n(a,i));)++i;return c[i]=e,r})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var r=0,o=Object.keys(t.tokenStack);!function c(i){for(var u=0;u<i.length&&!(r>=o.length);u++){var g=i[u];if("string"==typeof g||g.content&&"string"==typeof g.content){var l=o[r],s=t.tokenStack[l],f="string"==typeof g?g:g.content,p=n(a,l),k=f.indexOf(p);if(k>-1){++r;var m=f.substring(0,k),d=new e.Token(a,e.tokenize(s,t.grammar),"language-"+a,s),h=f.substring(k+p.length),v=[];m&&v.push.apply(v,c([m])),v.push(d),h&&v.push.apply(v,c([h])),"string"==typeof g?i.splice.apply(i,[u,1].concat(v)):g.content=v}}else g.content&&c(g.content)}return i}(t.tokens)}}}})}(Prism);
!function(e){var n="(?:\\((?:[^()\\\\]|\\\\[^])*\\)|\\{(?:[^{}\\\\]|\\\\[^])*\\}|\\[(?:[^[\\]\\\\]|\\\\[^])*\\]|<(?:[^<>\\\\]|\\\\[^])*>)";e.languages.perl={comment:[{pattern:/(^\s*)=\w[\s\S]*?=cut.*/m,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\$])#.*/,lookbehind:!0,greedy:!0}],string:[{pattern:RegExp("\\b(?:q|qq|qw|qx)(?![a-zA-Z0-9])\\s*(?:"+["([^a-zA-Z0-9\\s{(\\[<])(?:(?!\\1)[^\\\\]|\\\\[^])*\\1","([a-zA-Z0-9])(?:(?!\\2)[^\\\\]|\\\\[^])*\\2",n].join("|")+")"),greedy:!0},{pattern:/("|`)(?:(?!\1)[^\\]|\\[\s\S])*\1/,greedy:!0},{pattern:/'(?:[^'\\\r\n]|\\.)*'/,greedy:!0}],regex:[{pattern:RegExp("\\b(?:m|qr)(?![a-zA-Z0-9])\\s*(?:"+["([^a-zA-Z0-9\\s{(\\[<])(?:(?!\\1)[^\\\\]|\\\\[^])*\\1","([a-zA-Z0-9])(?:(?!\\2)[^\\\\]|\\\\[^])*\\2",n].join("|")+")[msixpodualngc]*"),greedy:!0},{pattern:RegExp("(^|[^-])\\b(?:s|tr|y)(?![a-zA-Z0-9])\\s*(?:"+["([^a-zA-Z0-9\\s{(\\[<])(?:(?!\\2)[^\\\\]|\\\\[^])*\\2(?:(?!\\2)[^\\\\]|\\\\[^])*\\2","([a-zA-Z0-9])(?:(?!\\3)[^\\\\]|\\\\[^])*\\3(?:(?!\\3)[^\\\\]|\\\\[^])*\\3",n+"\\s*"+n].join("|")+")[msixpodualngcer]*"),lookbehind:!0,greedy:!0},{pattern:/\/(?:[^\/\\\r\n]|\\.)*\/[msixpodualngc]*(?=\s*(?:$|[\r\n,.;})&|\-+*~<>!?^]|(?:and|cmp|eq|ge|gt|le|lt|ne|not|or|x|xor)\b))/,greedy:!0}],variable:[/[&*$@%]\{\^[A-Z]+\}/,/[&*$@%]\^[A-Z_]/,/[&*$@%]#?(?=\{)/,/[&*$@%]#?(?:(?:::)*'?(?!\d)[\w$]+(?![\w$]))+(?:::)*/,/[&*$@%]\d+/,/(?!%=)[$@%][!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~]/],filehandle:{pattern:/<(?![<=])\S*?>|\b_\b/,alias:"symbol"},"v-string":{pattern:/v\d+(?:\.\d+)*|\d+(?:\.\d+){2,}/,alias:"string"},function:{pattern:/(\bsub[ \t]+)\w+/,lookbehind:!0},keyword:/\b(?:any|break|continue|default|delete|die|do|else|elsif|eval|for|foreach|given|goto|if|last|local|my|next|our|package|print|redo|require|return|say|state|sub|switch|undef|unless|until|use|when|while)\b/,number:/\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)\b/,operator:/-[rwxoRWXOezsfdlpSbctugkTBMAC]\b|\+[+=]?|-[-=>]?|\*\*?=?|\/\/?=?|=[=~>]?|~[~=]?|\|\|?=?|&&?=?|<(?:=>?|<=?)?|>>?=?|![~=]?|[%^]=?|\.(?:=|\.\.?)?|[\\?]|\bx(?:=|\b)|\b(?:and|cmp|eq|ge|gt|le|lt|ne|not|or|xor)\b/,punctuation:/[{}[\];(),:]/}}(Prism);
!function(e){var a=/\/\*[\s\S]*?\*\/|\/\/.*|#(?!\[).*/,t=[{pattern:/\b(?:false|true)\b/i,alias:"boolean"},{pattern:/(::\s*)\b[a-z_]\w*\b(?!\s*\()/i,greedy:!0,lookbehind:!0},{pattern:/(\b(?:case|const)\s+)\b[a-z_]\w*(?=\s*[;=])/i,greedy:!0,lookbehind:!0},/\b(?:null)\b/i,/\b[A-Z_][A-Z0-9_]*\b(?!\s*\()/],i=/\b0b[01]+(?:_[01]+)*\b|\b0o[0-7]+(?:_[0-7]+)*\b|\b0x[\da-f]+(?:_[\da-f]+)*\b|(?:\b\d+(?:_\d+)*\.?(?:\d+(?:_\d+)*)?|\B\.\d+)(?:e[+-]?\d+)?/i,n=/<?=>|\?\?=?|\.{3}|\??->|[!=]=?=?|::|\*\*=?|--|\+\+|&&|\|\||<<|>>|[?~]|[/^|%*&<>.+-]=?/,s=/[{}\[\](),:;]/;e.languages.php={delimiter:{pattern:/\?>$|^<\?(?:php(?=\s)|=)?/i,alias:"important"},comment:a,variable:/\$+(?:\w+\b|(?=\{))/,package:{pattern:/(namespace\s+|use\s+(?:function\s+)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,lookbehind:!0,inside:{punctuation:/\\/}},"class-name-definition":{pattern:/(\b(?:class|enum|interface|trait)\s+)\b[a-z_]\w*(?!\\)\b/i,lookbehind:!0,alias:"class-name"},"function-definition":{pattern:/(\bfunction\s+)[a-z_]\w*(?=\s*\()/i,lookbehind:!0,alias:"function"},keyword:[{pattern:/(\(\s*)\b(?:array|bool|boolean|float|int|integer|object|string)\b(?=\s*\))/i,alias:"type-casting",greedy:!0,lookbehind:!0},{pattern:/([(,?]\s*)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|object|self|static|string)\b(?=\s*\$)/i,alias:"type-hint",greedy:!0,lookbehind:!0},{pattern:/(\)\s*:\s*(?:\?\s*)?)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|never|object|self|static|string|void)\b/i,alias:"return-type",greedy:!0,lookbehind:!0},{pattern:/\b(?:array(?!\s*\()|bool|float|int|iterable|mixed|object|string|void)\b/i,alias:"type-declaration",greedy:!0},{pattern:/(\|\s*)(?:false|null)\b|\b(?:false|null)(?=\s*\|)/i,alias:"type-declaration",greedy:!0,lookbehind:!0},{pattern:/\b(?:parent|self|static)(?=\s*::)/i,alias:"static-context",greedy:!0},{pattern:/(\byield\s+)from\b/i,lookbehind:!0},/\bclass\b/i,{pattern:/((?:^|[^\s>:]|(?:^|[^-])>|(?:^|[^:]):)\s*)\b(?:abstract|and|array|as|break|callable|case|catch|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|enum|eval|exit|extends|final|finally|fn|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|match|namespace|never|new|or|parent|print|private|protected|public|readonly|require|require_once|return|self|static|switch|throw|trait|try|unset|use|var|while|xor|yield|__halt_compiler)\b/i,lookbehind:!0}],"argument-name":{pattern:/([(,]\s*)\b[a-z_]\w*(?=\s*:(?!:))/i,lookbehind:!0},"class-name":[{pattern:/(\b(?:extends|implements|instanceof|new(?!\s+self|\s+static))\s+|\bcatch\s*\()\b[a-z_]\w*(?!\\)\b/i,greedy:!0,lookbehind:!0},{pattern:/(\|\s*)\b[a-z_]\w*(?!\\)\b/i,greedy:!0,lookbehind:!0},{pattern:/\b[a-z_]\w*(?!\\)\b(?=\s*\|)/i,greedy:!0},{pattern:/(\|\s*)(?:\\?\b[a-z_]\w*)+\b/i,alias:"class-name-fully-qualified",greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}},{pattern:/(?:\\?\b[a-z_]\w*)+\b(?=\s*\|)/i,alias:"class-name-fully-qualified",greedy:!0,inside:{punctuation:/\\/}},{pattern:/(\b(?:extends|implements|instanceof|new(?!\s+self\b|\s+static\b))\s+|\bcatch\s*\()(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,alias:"class-name-fully-qualified",greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}},{pattern:/\b[a-z_]\w*(?=\s*\$)/i,alias:"type-declaration",greedy:!0},{pattern:/(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,alias:["class-name-fully-qualified","type-declaration"],greedy:!0,inside:{punctuation:/\\/}},{pattern:/\b[a-z_]\w*(?=\s*::)/i,alias:"static-context",greedy:!0},{pattern:/(?:\\?\b[a-z_]\w*)+(?=\s*::)/i,alias:["class-name-fully-qualified","static-context"],greedy:!0,inside:{punctuation:/\\/}},{pattern:/([(,?]\s*)[a-z_]\w*(?=\s*\$)/i,alias:"type-hint",greedy:!0,lookbehind:!0},{pattern:/([(,?]\s*)(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,alias:["class-name-fully-qualified","type-hint"],greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}},{pattern:/(\)\s*:\s*(?:\?\s*)?)\b[a-z_]\w*(?!\\)\b/i,alias:"return-type",greedy:!0,lookbehind:!0},{pattern:/(\)\s*:\s*(?:\?\s*)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,alias:["class-name-fully-qualified","return-type"],greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}}],constant:t,function:{pattern:/(^|[^\\\w])\\?[a-z_](?:[\w\\]*\w)?(?=\s*\()/i,lookbehind:!0,inside:{punctuation:/\\/}},property:{pattern:/(->\s*)\w+/,lookbehind:!0},number:i,operator:n,punctuation:s};var l={pattern:/\{\$(?:\{(?:\{[^{}]+\}|[^{}]+)\}|[^{}])+\}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)?)/,lookbehind:!0,inside:e.languages.php},r=[{pattern:/<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/,alias:"nowdoc-string",greedy:!0,inside:{delimiter:{pattern:/^<<<'[^']+'|[a-z_]\w*;$/i,alias:"symbol",inside:{punctuation:/^<<<'?|[';]$/}}}},{pattern:/<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i,alias:"heredoc-string",greedy:!0,inside:{delimiter:{pattern:/^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,alias:"symbol",inside:{punctuation:/^<<<"?|[";]$/}},interpolation:l}},{pattern:/`(?:\\[\s\S]|[^\\`])*`/,alias:"backtick-quoted-string",greedy:!0},{pattern:/'(?:\\[\s\S]|[^\\'])*'/,alias:"single-quoted-string",greedy:!0},{pattern:/"(?:\\[\s\S]|[^\\"])*"/,alias:"double-quoted-string",greedy:!0,inside:{interpolation:l}}];e.languages.insertBefore("php","variable",{string:r,attribute:{pattern:/#\[(?:[^"'\/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')+\](?=\s*[a-z$#])/im,greedy:!0,inside:{"attribute-content":{pattern:/^(#\[)[\s\S]+(?=\]$)/,lookbehind:!0,inside:{comment:a,string:r,"attribute-class-name":[{pattern:/([^:]|^)\b[a-z_]\w*(?!\\)\b/i,alias:"class-name",greedy:!0,lookbehind:!0},{pattern:/([^:]|^)(?:\\?\b[a-z_]\w*)+/i,alias:["class-name","class-name-fully-qualified"],greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}}],constant:t,number:i,operator:n,punctuation:s}},delimiter:{pattern:/^#\[|\]$/,alias:"punctuation"}}}}),e.hooks.add("before-tokenize",(function(a){/<\?/.test(a.code)&&e.languages["markup-templating"].buildPlaceholders(a,"php",/<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|#\[|\/\*(?:[^*]|\*(?!\/))*(?:\*\/|$))*?(?:\?>|$)/g)})),e.hooks.add("after-tokenize",(function(a){e.languages["markup-templating"].tokenizePlaceholders(a,"php")}))}(Prism);

Prism.languages.sql={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,lookbehind:!0},variable:[{pattern:/@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,greedy:!0},/@[\w.$]+/],string:{pattern:/(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,greedy:!0,lookbehind:!0},identifier:{pattern:/(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,greedy:!0,lookbehind:!0,inside:{punctuation:/^`|`$/}},function:/\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,keyword:/\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,boolean:/\b(?:FALSE|NULL|TRUE)\b/i,number:/\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,operator:/[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,punctuation:/[;[\]()`,.]/};

Prism.languages.plsql=Prism.languages.extend("sql",{comment:{pattern:/\/\*[\s\S]*?\*\/|--.*/,greedy:!0},keyword:/\b(?:A|ACCESSIBLE|ADD|AGENT|AGGREGATE|ALL|ALTER|AND|ANY|ARRAY|AS|ASC|AT|ATTRIBUTE|AUTHID|AVG|BEGIN|BETWEEN|BFILE_BASE|BINARY|BLOB_BASE|BLOCK|BODY|BOTH|BOUND|BULK|BY|BYTE|C|CALL|CALLING|CASCADE|CASE|CHAR|CHARACTER|CHARSET|CHARSETFORM|CHARSETID|CHAR_BASE|CHECK|CLOB_BASE|CLONE|CLOSE|CLUSTER|CLUSTERS|COLAUTH|COLLECT|COLUMNS|COMMENT|COMMIT|COMMITTED|COMPILED|COMPRESS|CONNECT|CONSTANT|CONSTRUCTOR|CONTEXT|CONTINUE|CONVERT|COUNT|CRASH|CREATE|CREDENTIAL|CURRENT|CURSOR|CUSTOMDATUM|DANGLING|DATA|DATE|DATE_BASE|DAY|DECLARE|DEFAULT|DEFINE|DELETE|DESC|DETERMINISTIC|DIRECTORY|DISTINCT|DOUBLE|DROP|DURATION|ELEMENT|ELSE|ELSIF|EMPTY|END|ESCAPE|EXCEPT|EXCEPTION|EXCEPTIONS|EXCLUSIVE|EXECUTE|EXISTS|EXIT|EXTERNAL|FETCH|FINAL|FIRST|FIXED|FLOAT|FOR|FORALL|FORCE|FROM|FUNCTION|GENERAL|GOTO|GRANT|GROUP|HASH|HAVING|HEAP|HIDDEN|HOUR|IDENTIFIED|IF|IMMEDIATE|IMMUTABLE|IN|INCLUDING|INDEX|INDEXES|INDICATOR|INDICES|INFINITE|INSERT|INSTANTIABLE|INT|INTERFACE|INTERSECT|INTERVAL|INTO|INVALIDATE|IS|ISOLATION|JAVA|LANGUAGE|LARGE|LEADING|LENGTH|LEVEL|LIBRARY|LIKE|LIKE2|LIKE4|LIKEC|LIMIT|LIMITED|LOCAL|LOCK|LONG|LOOP|MAP|MAX|MAXLEN|MEMBER|MERGE|MIN|MINUS|MINUTE|MOD|MODE|MODIFY|MONTH|MULTISET|MUTABLE|NAME|NAN|NATIONAL|NATIVE|NCHAR|NEW|NOCOMPRESS|NOCOPY|NOT|NOWAIT|NULL|NUMBER_BASE|OBJECT|OCICOLL|OCIDATE|OCIDATETIME|OCIDURATION|OCIINTERVAL|OCILOBLOCATOR|OCINUMBER|OCIRAW|OCIREF|OCIREFCURSOR|OCIROWID|OCISTRING|OCITYPE|OF|OLD|ON|ONLY|OPAQUE|OPEN|OPERATOR|OPTION|OR|ORACLE|ORADATA|ORDER|ORGANIZATION|ORLANY|ORLVARY|OTHERS|OUT|OVERLAPS|OVERRIDING|PACKAGE|PARALLEL_ENABLE|PARAMETER|PARAMETERS|PARENT|PARTITION|PASCAL|PERSISTABLE|PIPE|PIPELINED|PLUGGABLE|POLYMORPHIC|PRAGMA|PRECISION|PRIOR|PRIVATE|PROCEDURE|PUBLIC|RAISE|RANGE|RAW|READ|RECORD|REF|REFERENCE|RELIES_ON|REM|REMAINDER|RENAME|RESOURCE|RESULT|RESULT_CACHE|RETURN|RETURNING|REVERSE|REVOKE|ROLLBACK|ROW|SAMPLE|SAVE|SAVEPOINT|SB1|SB2|SB4|SECOND|SEGMENT|SELECT|SELF|SEPARATE|SEQUENCE|SERIALIZABLE|SET|SHARE|SHORT|SIZE|SIZE_T|SOME|SPARSE|SQL|SQLCODE|SQLDATA|SQLNAME|SQLSTATE|STANDARD|START|STATIC|STDDEV|STORED|STRING|STRUCT|STYLE|SUBMULTISET|SUBPARTITION|SUBSTITUTABLE|SUBTYPE|SUM|SYNONYM|TABAUTH|TABLE|TDO|THE|THEN|TIME|TIMESTAMP|TIMEZONE_ABBR|TIMEZONE_HOUR|TIMEZONE_MINUTE|TIMEZONE_REGION|TO|TRAILING|TRANSACTION|TRANSACTIONAL|TRUSTED|TYPE|UB1|UB2|UB4|UNDER|UNION|UNIQUE|UNPLUG|UNSIGNED|UNTRUSTED|UPDATE|USE|USING|VALIST|VALUE|VALUES|VARIABLE|VARIANCE|VARRAY|VARYING|VIEW|VIEWS|VOID|WHEN|WHERE|WHILE|WITH|WORK|WRAPPED|WRITE|YEAR|ZONE)\b/i,operator:/:=?|=>|[<>^~!]=|\.\.|\|\||\*\*|[-+*/%<>=@]/}),Prism.languages.insertBefore("plsql","operator",{label:{pattern:/<<\s*\w+\s*>>/,alias:"symbol"}});
!function(e){var i=e.languages.powershell={comment:[{pattern:/(^|[^`])<#[\s\S]*?#>/,lookbehind:!0},{pattern:/(^|[^`])#.*/,lookbehind:!0}],string:[{pattern:/"(?:`[\s\S]|[^`"])*"/,greedy:!0,inside:null},{pattern:/'(?:[^']|'')*'/,greedy:!0}],namespace:/\[[a-z](?:\[(?:\[[^\]]*\]|[^\[\]])*\]|[^\[\]])*\]/i,boolean:/\$(?:false|true)\b/i,variable:/\$\w+\b/,function:[/\b(?:Add|Approve|Assert|Backup|Block|Checkpoint|Clear|Close|Compare|Complete|Compress|Confirm|Connect|Convert|ConvertFrom|ConvertTo|Copy|Debug|Deny|Disable|Disconnect|Dismount|Edit|Enable|Enter|Exit|Expand|Export|Find|ForEach|Format|Get|Grant|Group|Hide|Import|Initialize|Install|Invoke|Join|Limit|Lock|Measure|Merge|Move|New|Open|Optimize|Out|Ping|Pop|Protect|Publish|Push|Read|Receive|Redo|Register|Remove|Rename|Repair|Request|Reset|Resize|Resolve|Restart|Restore|Resume|Revoke|Save|Search|Select|Send|Set|Show|Skip|Sort|Split|Start|Step|Stop|Submit|Suspend|Switch|Sync|Tee|Test|Trace|Unblock|Undo|Uninstall|Unlock|Unprotect|Unpublish|Unregister|Update|Use|Wait|Watch|Where|Write)-[a-z]+\b/i,/\b(?:ac|cat|chdir|clc|cli|clp|clv|compare|copy|cp|cpi|cpp|cvpa|dbp|del|diff|dir|ebp|echo|epal|epcsv|epsn|erase|fc|fl|ft|fw|gal|gbp|gc|gci|gcs|gdr|gi|gl|gm|gp|gps|group|gsv|gu|gv|gwmi|iex|ii|ipal|ipcsv|ipsn|irm|iwmi|iwr|kill|lp|ls|measure|mi|mount|move|mp|mv|nal|ndr|ni|nv|ogv|popd|ps|pushd|pwd|rbp|rd|rdr|ren|ri|rm|rmdir|rni|rnp|rp|rv|rvpa|rwmi|sal|saps|sasv|sbp|sc|select|set|shcm|si|sl|sleep|sls|sort|sp|spps|spsv|start|sv|swmi|tee|trcm|type|write)\b/i],keyword:/\b(?:Begin|Break|Catch|Class|Continue|Data|Define|Do|DynamicParam|Else|ElseIf|End|Exit|Filter|Finally|For|ForEach|From|Function|If|InlineScript|Parallel|Param|Process|Return|Sequence|Switch|Throw|Trap|Try|Until|Using|Var|While|Workflow)\b/i,operator:{pattern:/(^|\W)(?:!|-(?:b?(?:and|x?or)|as|(?:Not)?(?:Contains|In|Like|Match)|eq|ge|gt|is(?:Not)?|Join|le|lt|ne|not|Replace|sh[lr])\b|-[-=]?|\+[+=]?|[*\/%]=?)/i,lookbehind:!0},punctuation:/[|{}[\];(),.]/};i.string[0].inside={function:{pattern:/(^|[^`])\$\((?:\$\([^\r\n()]*\)|(?!\$\()[^\r\n)])*\)/,lookbehind:!0,inside:i},boolean:i.boolean,variable:i.variable}}(Prism);
Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python,Prism.languages.py=Prism.languages.python;
Prism.languages.r={comment:/#.*/,string:{pattern:/(['"])(?:\\.|(?!\1)[^\\\r\n])*\1/,greedy:!0},"percent-operator":{pattern:/%[^%\s]*%/,alias:"operator"},boolean:/\b(?:FALSE|TRUE)\b/,ellipsis:/\.\.(?:\.|\d+)/,number:[/\b(?:Inf|NaN)\b/,/(?:\b0x[\dA-Fa-f]+(?:\.\d*)?|\b\d+(?:\.\d*)?|\B\.\d+)(?:[EePp][+-]?\d+)?[iL]?/],keyword:/\b(?:NA|NA_character_|NA_complex_|NA_integer_|NA_real_|NULL|break|else|for|function|if|in|next|repeat|while)\b/,operator:/->?>?|<(?:=|<?-)?|[>=!]=?|::?|&&?|\|\|?|[+*\/^$@~]/,punctuation:/[(){}\[\],;]/};
!function(t){var n=t.util.clone(t.languages.javascript),e="(?:\\{<S>*\\.{3}(?:[^{}]|<BRACES>)*\\})";function a(t,n){return t=t.replace(/<S>/g,(function(){return"(?:\\s|//.*(?!.)|/\\*(?:[^*]|\\*(?!/))\\*/)"})).replace(/<BRACES>/g,(function(){return"(?:\\{(?:\\{(?:\\{[^{}]*\\}|[^{}])*\\}|[^{}])*\\})"})).replace(/<SPREAD>/g,(function(){return e})),RegExp(t,n)}e=a(e).source,t.languages.jsx=t.languages.extend("markup",n),t.languages.jsx.tag.pattern=a("</?(?:[\\w.:-]+(?:<S>+(?:[\\w.:$-]+(?:=(?:\"(?:\\\\[^]|[^\\\\\"])*\"|'(?:\\\\[^]|[^\\\\'])*'|[^\\s{'\"/>=]+|<BRACES>))?|<SPREAD>))*<S>*/?)?>"),t.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,t.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,t.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,t.languages.jsx.tag.inside.comment=n.comment,t.languages.insertBefore("inside","attr-name",{spread:{pattern:a("<SPREAD>"),inside:t.languages.jsx}},t.languages.jsx.tag),t.languages.insertBefore("inside","special-attr",{script:{pattern:a("=<BRACES>"),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:t.languages.jsx}}},t.languages.jsx.tag);var s=function(t){return t?"string"==typeof t?t:"string"==typeof t.content?t.content:t.content.map(s).join(""):""},g=function(n){for(var e=[],a=0;a<n.length;a++){var o=n[a],i=!1;if("string"!=typeof o&&("tag"===o.type&&o.content[0]&&"tag"===o.content[0].type?"</"===o.content[0].content[0].content?e.length>0&&e[e.length-1].tagName===s(o.content[0].content[1])&&e.pop():"/>"===o.content[o.content.length-1].content||e.push({tagName:s(o.content[0].content[1]),openedBraces:0}):e.length>0&&"punctuation"===o.type&&"{"===o.content?e[e.length-1].openedBraces++:e.length>0&&e[e.length-1].openedBraces>0&&"punctuation"===o.type&&"}"===o.content?e[e.length-1].openedBraces--:i=!0),(i||"string"==typeof o)&&e.length>0&&0===e[e.length-1].openedBraces){var r=s(o);a<n.length-1&&("string"==typeof n[a+1]||"plain-text"===n[a+1].type)&&(r+=s(n[a+1]),n.splice(a+1,1)),a>0&&("string"==typeof n[a-1]||"plain-text"===n[a-1].type)&&(r=s(n[a-1])+r,n.splice(a-1,1),a--),n[a]=new t.Token("plain-text",r,null,r)}o.content&&"string"!=typeof o.content&&g(o.content)}};t.hooks.add("after-tokenize",(function(t){"jsx"!==t.language&&"tsx"!==t.language||g(t.tokens)}))}(Prism);
!function(e){e.languages.ruby=e.languages.extend("clike",{comment:{pattern:/#.*|^=begin\s[\s\S]*?^=end/m,greedy:!0},"class-name":{pattern:/(\b(?:class|module)\s+|\bcatch\s+\()[\w.\\]+|\b[A-Z_]\w*(?=\s*\.\s*new\b)/,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:BEGIN|END|alias|and|begin|break|case|class|def|define_method|defined|do|each|else|elsif|end|ensure|extend|for|if|in|include|module|new|next|nil|not|or|prepend|private|protected|public|raise|redo|require|rescue|retry|return|self|super|then|throw|undef|unless|until|when|while|yield)\b/,operator:/\.{2,3}|&\.|===|<?=>|[!=]?~|(?:&&|\|\||<<|>>|\*\*|[+\-*/%<>!^&|=])=?|[?:]/,punctuation:/[(){}[\].,;]/}),e.languages.insertBefore("ruby","operator",{"double-colon":{pattern:/::/,alias:"punctuation"}});var n={pattern:/((?:^|[^\\])(?:\\{2})*)#\{(?:[^{}]|\{[^{}]*\})*\}/,lookbehind:!0,inside:{content:{pattern:/^(#\{)[\s\S]+(?=\}$)/,lookbehind:!0,inside:e.languages.ruby},delimiter:{pattern:/^#\{|\}$/,alias:"punctuation"}}};delete e.languages.ruby.function;var t="(?:"+["([^a-zA-Z0-9\\s{(\\[<=])(?:(?!\\1)[^\\\\]|\\\\[^])*\\1","\\((?:[^()\\\\]|\\\\[^]|\\((?:[^()\\\\]|\\\\[^])*\\))*\\)","\\{(?:[^{}\\\\]|\\\\[^]|\\{(?:[^{}\\\\]|\\\\[^])*\\})*\\}","\\[(?:[^\\[\\]\\\\]|\\\\[^]|\\[(?:[^\\[\\]\\\\]|\\\\[^])*\\])*\\]","<(?:[^<>\\\\]|\\\\[^]|<(?:[^<>\\\\]|\\\\[^])*>)*>"].join("|")+")",i='(?:"(?:\\\\.|[^"\\\\\r\n])*"|(?:\\b[a-zA-Z_]\\w*|[^\\s\0-\\x7F]+)[?!]?|\\$.)';e.languages.insertBefore("ruby","keyword",{"regex-literal":[{pattern:RegExp("%r"+t+"[egimnosux]{0,6}"),greedy:!0,inside:{interpolation:n,regex:/[\s\S]+/}},{pattern:/(^|[^/])\/(?!\/)(?:\[[^\r\n\]]+\]|\\.|[^[/\\\r\n])+\/[egimnosux]{0,6}(?=\s*(?:$|[\r\n,.;})#]))/,lookbehind:!0,greedy:!0,inside:{interpolation:n,regex:/[\s\S]+/}}],variable:/[@$]+[a-zA-Z_]\w*(?:[?!]|\b)/,symbol:[{pattern:RegExp("(^|[^:]):"+i),lookbehind:!0,greedy:!0},{pattern:RegExp("([\r\n{(,][ \t]*)"+i+"(?=:(?!:))"),lookbehind:!0,greedy:!0}],"method-definition":{pattern:/(\bdef\s+)\w+(?:\s*\.\s*\w+)?/,lookbehind:!0,inside:{function:/\b\w+$/,keyword:/^self\b/,"class-name":/^\w+/,punctuation:/\./}}}),e.languages.insertBefore("ruby","string",{"string-literal":[{pattern:RegExp("%[qQiIwWs]?"+t),greedy:!0,inside:{interpolation:n,string:/[\s\S]+/}},{pattern:/("|')(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|(?!\1)[^\\#\r\n])*\1/,greedy:!0,inside:{interpolation:n,string:/[\s\S]+/}},{pattern:/<<[-~]?([a-z_]\w*)[\r\n](?:.*[\r\n])*?[\t ]*\1/i,alias:"heredoc-string",greedy:!0,inside:{delimiter:{pattern:/^<<[-~]?[a-z_]\w*|\b[a-z_]\w*$/i,inside:{symbol:/\b\w+/,punctuation:/^<<[-~]?/}},interpolation:n,string:/[\s\S]+/}},{pattern:/<<[-~]?'([a-z_]\w*)'[\r\n](?:.*[\r\n])*?[\t ]*\1/i,alias:"heredoc-string",greedy:!0,inside:{delimiter:{pattern:/^<<[-~]?'[a-z_]\w*'|\b[a-z_]\w*$/i,inside:{symbol:/\b\w+/,punctuation:/^<<[-~]?'|'$/}},string:/[\s\S]+/}}],"command-literal":[{pattern:RegExp("%x"+t),greedy:!0,inside:{interpolation:n,command:{pattern:/[\s\S]+/,alias:"string"}}},{pattern:/`(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|[^\\`#\r\n])*`/,greedy:!0,inside:{interpolation:n,command:{pattern:/[\s\S]+/,alias:"string"}}}]}),delete e.languages.ruby.string,e.languages.insertBefore("ruby","number",{builtin:/\b(?:Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Fixnum|Float|Hash|IO|Integer|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|Stat|String|Struct|Symbol|TMS|Thread|ThreadGroup|Time|TrueClass)\b/,constant:/\b[A-Z][A-Z0-9_]*(?:[?!]|\b)/}),e.languages.rb=e.languages.ruby}(Prism);
Prism.languages.swift={comment:{pattern:/(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/,lookbehind:!0,greedy:!0},"string-literal":[{pattern:RegExp('(^|[^"#])(?:"(?:\\\\(?:\\((?:[^()]|\\([^()]*\\))*\\)|\r\n|[^(])|[^\\\\\r\n"])*"|"""(?:\\\\(?:\\((?:[^()]|\\([^()]*\\))*\\)|[^(])|[^\\\\"]|"(?!""))*""")(?!["#])'),lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:/(\\\()(?:[^()]|\([^()]*\))*(?=\))/,lookbehind:!0,inside:null},"interpolation-punctuation":{pattern:/^\)|\\\($/,alias:"punctuation"},punctuation:/\\(?=[\r\n])/,string:/[\s\S]+/}},{pattern:RegExp('(^|[^"#])(#+)(?:"(?:\\\\(?:#+\\((?:[^()]|\\([^()]*\\))*\\)|\r\n|[^#])|[^\\\\\r\n])*?"|"""(?:\\\\(?:#+\\((?:[^()]|\\([^()]*\\))*\\)|[^#])|[^\\\\])*?""")\\2'),lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:/(\\#+\()(?:[^()]|\([^()]*\))*(?=\))/,lookbehind:!0,inside:null},"interpolation-punctuation":{pattern:/^\)|\\#+\($/,alias:"punctuation"},string:/[\s\S]+/}}],directive:{pattern:RegExp("#(?:(?:elseif|if)\\b(?:[ \t]*(?:![ \t]*)?(?:\\b\\w+\\b(?:[ \t]*\\((?:[^()]|\\([^()]*\\))*\\))?|\\((?:[^()]|\\([^()]*\\))*\\))(?:[ \t]*(?:&&|\\|\\|))?)+|(?:else|endif)\\b)"),alias:"property",inside:{"directive-name":/^#\w+/,boolean:/\b(?:false|true)\b/,number:/\b\d+(?:\.\d+)*\b/,operator:/!|&&|\|\||[<>]=?/,punctuation:/[(),]/}},literal:{pattern:/#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/,alias:"constant"},"other-directive":{pattern:/#\w+\b/,alias:"property"},attribute:{pattern:/@\w+/,alias:"atrule"},"function-definition":{pattern:/(\bfunc\s+)\w+/,lookbehind:!0,alias:"function"},label:{pattern:/\b(break|continue)\s+\w+|\b[a-zA-Z_]\w*(?=\s*:\s*(?:for|repeat|while)\b)/,lookbehind:!0,alias:"important"},keyword:/\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|isolated|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/,boolean:/\b(?:false|true)\b/,nil:{pattern:/\bnil\b/,alias:"constant"},"short-argument":/\$\d+\b/,omit:{pattern:/\b_\b/,alias:"keyword"},number:/\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,"class-name":/\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/,function:/\b[a-z_]\w*(?=\s*\()/i,constant:/\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,operator:/[-+*/%=!<>&|^~?]+|\.[.\-+*/%=!<>&|^~?]+/,punctuation:/[{}[\]();,.:\\]/},Prism.languages.swift["string-literal"].forEach((function(e){e.inside.interpolation.inside=Prism.languages.swift}));
!function(e){e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete e.languages.typescript.parameter,delete e.languages.typescript["literal-property"];var s=e.languages.extend("typescript",{});delete s["class-name"],e.languages.typescript["class-name"].inside=s,e.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:s}}}}),e.languages.ts=e.languages.typescript}(Prism);
Prism.languages["visual-basic"]={comment:{pattern:/(?:['‘’]|REM\b)(?:[^\r\n_]|_(?:\r\n?|\n)?)*/i,inside:{keyword:/^REM/i}},directive:{pattern:/#(?:Const|Else|ElseIf|End|ExternalChecksum|ExternalSource|If|Region)(?:\b_[ \t]*(?:\r\n?|\n)|.)+/i,alias:"property",greedy:!0},string:{pattern:/\$?["“”](?:["“”]{2}|[^"“”])*["“”]C?/i,greedy:!0},date:{pattern:/#[ \t]*(?:\d+([/-])\d+\1\d+(?:[ \t]+(?:\d+[ \t]*(?:AM|PM)|\d+:\d+(?::\d+)?(?:[ \t]*(?:AM|PM))?))?|\d+[ \t]*(?:AM|PM)|\d+:\d+(?::\d+)?(?:[ \t]*(?:AM|PM))?)[ \t]*#/i,alias:"number"},number:/(?:(?:\b\d+(?:\.\d+)?|\.\d+)(?:E[+-]?\d+)?|&[HO][\dA-F]+)(?:[FRD]|U?[ILS])?/i,boolean:/\b(?:False|Nothing|True)\b/i,keyword:/\b(?:AddHandler|AddressOf|Alias|And(?:Also)?|As|Boolean|ByRef|Byte|ByVal|Call|Case|Catch|C(?:Bool|Byte|Char|Date|Dbl|Dec|Int|Lng|Obj|SByte|Short|Sng|Str|Type|UInt|ULng|UShort)|Char|Class|Const|Continue|Currency|Date|Decimal|Declare|Default|Delegate|Dim|DirectCast|Do|Double|Each|Else(?:If)?|End(?:If)?|Enum|Erase|Error|Event|Exit|Finally|For|Friend|Function|Get(?:Type|XMLNamespace)?|Global|GoSub|GoTo|Handles|If|Implements|Imports|In|Inherits|Integer|Interface|Is|IsNot|Let|Lib|Like|Long|Loop|Me|Mod|Module|Must(?:Inherit|Override)|My(?:Base|Class)|Namespace|Narrowing|New|Next|Not(?:Inheritable|Overridable)?|Object|Of|On|Operator|Option(?:al)?|Or(?:Else)?|Out|Overloads|Overridable|Overrides|ParamArray|Partial|Private|Property|Protected|Public|RaiseEvent|ReadOnly|ReDim|RemoveHandler|Resume|Return|SByte|Select|Set|Shadows|Shared|short|Single|Static|Step|Stop|String|Structure|Sub|SyncLock|Then|Throw|To|Try|TryCast|Type|TypeOf|U(?:Integer|Long|Short)|Until|Using|Variant|Wend|When|While|Widening|With(?:Events)?|WriteOnly|Xor)\b/i,operator:/[+\-*/\\^<=>&#@$%!]|\b_(?=[ \t]*[\r\n])/,punctuation:/[{}().,:?]/},Prism.languages.vb=Prism.languages["visual-basic"],Prism.languages.vba=Prism.languages["visual-basic"];
Prism.languages.wasm={comment:[/\(;[\s\S]*?;\)/,{pattern:/;;.*/,greedy:!0}],string:{pattern:/"(?:\\[\s\S]|[^"\\])*"/,greedy:!0},keyword:[{pattern:/\b(?:align|offset)=/,inside:{operator:/=/}},{pattern:/\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|neg?|nearest|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|sqrt|store(?:8|16|32)?|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,inside:{punctuation:/\./}},/\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/],variable:/\$[\w!#$%&'*+\-./:<=>?@\\^`|~]+/,number:/[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,punctuation:/[()]/};
/* Prism Ends here */


/* custom.js starts here */
var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
function getDocHeight(doc) {
        doc = doc || document;
        var body = doc.body, html = doc.documentElement;
        var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
        return height;
}
function resizeFrame( iframe ){
        const doc = iframe.contentDocument? iframe.contentDocument: iframe.contentWindow.document;
        const height = getDocHeight( doc ) + 50;
        if( height > 450 ){
            iframe.style.height =  "450px";
        }else{
            iframe.style.height =  height + 'px';
        }
}

function showAnswer( id ){
   $('#A' + id).toggle();
   $('#Q' + id + " .true").removeAttr("href");
   $('#Q' + id + " .true").addClass("selected");
   $('#Q' + id + " .true").find("span").addClass("correct");
}
var Timer = false;
var timeout = 0;
function startTimer(duration) {
    var timer = duration, minutes, seconds, milsec=0;
    var interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
	milsec++;
	if( milsec > 10 ){
	   milsec = 0;
	}
	milsec = ("0" + milsec).slice(-2);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
	$('#counter').html(minutes + ":" + seconds + ":" + milsec);

        // If timer is complete, trigger alert
        elapsedTime = 1000*(duration - timer);
        if(timer <= 0 ){
            finishTest();
	    clearInterval(interval);
            return;
        }else if(timeout) {
	    clearInterval(interval);
            return;
        }
	timer = timer - 1/10;
    }, 100);
}

function finishTest(){
    $("#quiz_navigation").addClass( "hide" );
    $("#quiz_navigation").removeClass( "show" );
    $("#bottom_navigation").removeClass( "hide" );
    $("#bottom_navigation").addClass( "show" );

    $("#stage").html("");
    $("#stage").append("<a href='javascript:checkTestResult();' title='Check Result'><img src='/images/time_over.png' alt='Test is Over'/></a>");
    $("#stage").append("<center><a href='javascript:checkTestResult();' title='Check Result'><h2>Test is Over, Click Here to Check the Result</h2></a></center>");
    timeout = 1;
    $(".middle-col").attr('style',  'height:auto!important');
    return;
}
function checkTestResult(){
   var formData = new FormData();
   formData.append('testID', testID);
   formData.append('testURL', testURL);
   questionMap.forEach(function(item){
       formData.append("questionMap[]", JSON.stringify(item))

   });
   formData.append('totalQ', totalQ);
   formData.append('elapsedTime', elapsedTime);
   console.log( formData );
   fetch("https://dev.tutorialspoint.com/checkTestResult.php", {
      method: "POST",
      body: formData
    })
   .then(response => {
       formData = null;
       return response.text();
   })
   .then(data => {
        $( "#stage" ).html( data );
    })
   .catch((error) => {
       alert(error);
       return false;
    });
}
var selected = 1;
function nextQuestion( prefix ){
  if( isMobile ){
  }
  if( timeout > 0 ){
      alert('Given time for online test is over');
      return;
  }
  $(".Q a").each(function( index ){
     if( $(this).hasClass("selected")){
         selected = 1;
     }
  });
  if( !selected ){
      alert("Please select an asnwer before proceeding");
      return;
  }
  if( Timer === false ){
     startTimer(givenTime/1000);
     Timer = true;
  }
  if( currentQ == totalQ ){
      alert('You are already at last question');
      return;
  }else{
      currentQ++;
      if( currentQ == totalQ ){
          $("#btn_next").addClass( "button--neutral" );
          $("#btn_next svg").attr( "fill", "black" );
      }
      if( currentQ > 1 ){
         $("#btn_finish").removeClass( "button--neutral" );
         $("#btn_previous svg").attr( "fill", "white" );
         $("#btn_previous").removeClass( "button--neutral" );
      }	       
  }
  /* Get the next question ID */
  questionID = questionMap[currentQ].id;
  fetch(prefix + "/" + questionID + ".htm?QN=" + currentQ).then(data => {
      return data.text()
    }).then( data => {
      $("#stage").html( data );
      selected = 0;
      $(".start_button").addClass( "hide" );
      $("#quiz_navigation").removeClass( "hide" );
      $("#bottom_navigation").removeClass( "show" );
      $("#bottom_navigation").addClass( "hide" );
      /* Check if its already clicked one */
      if( questionMap[currentQ].selected < 10){
         $(".Q a").each(function( index ){
             if( questionMap[currentQ].selected === index ){
                 $(this).addClass("selected");
                 selected = 1;
             }
         });
      }
      if( $('.middle-col').height() < $('.sidebar').height() && (window.innerWidth > 991)){
           $('.middle-col').css("height", $('.sidebar').height() + 50 );
      }
      if( $('.middle-col').height() < $('#rightbar').height() && (window.innerWidth > 991)){
           $('.middle-col').css("height", "1113");
      }
      $(".Q a").on('click', function(){
         /* Get the index of clicked option */
         var index = $( ".Q a" ).index( this );
         questionMap[currentQ].selected = index;

         /* Unselect all the options */
         $(".Q a").each(function( index ){
             if( $(this).hasClass("true")){
                 /* Note down index of correct answer */
                 questionMap[currentQ].correct = index;
             }
             $(this).removeClass("selected");
         });
         $(this).addClass("selected");
         selected = 1;
     });
     if (timeout) {
         $("#stage").html("");
         $("#stage").append("<a href='javascript:checkTestResult();' title='Check Result'><img src='/images/time_over.png' alt='Time is Over'/></a>");
         $("#stage").append("<center><a href='javascript:checkTestResult();' title='Check Result'><h2>Time is Over, Check Result</h2></a></center>");
     }
  });
}
function previousQuestion( prefix ){
  if( timeout > 0 ){
      alert('Given time for online test is over');
      return;
  }
  /* Get the previous question ID */
  currentQ--;
  if( currentQ == 1 ){
      $("#btn_next").removeClass( "button--neutral" );
      $("#btn_previous svg").attr( "fill", "black" );
      $("#btn_previous").addClass( "button--neutral" );
  }
  if( currentQ < totalQ ){
      $("#btn_next svg").attr( "fill", "white" );
  }
  if( currentQ < 1 ){
     currentQ++;
     alert( "You are already at first question!");
     return;
  }
  questionID = questionMap[currentQ].id;
  fetch(prefix + "/" + questionID + ".htm?QN=" + currentQ).then(data => {
      return data.text()
   }).then( data => {
      console.log( data );
      /* Check if its already clicked one */
      $("#stage").html( data );
      if( questionMap[currentQ].selected < 10  ){
         $(".Q a").each(function( index ){
             if( questionMap[currentQ].selected === index ){
                 $(this).addClass("selected");
             }
         });
      }
      $(".Q a").on('click', function(){
         /* Get the index of clicked option */
         var index = $( ".Q a" ).index( this );
         questionMap[currentQ].selected = index;

         /* Unselect all the options */
         $(".Q a").each(function( index ){
             if( $(this).hasClass("true")){
                 /* Note down index of correct answer */
                 questionMap[currentQ].correct = index;
             }
             $(this).removeClass("selected");
         });
         $(this).addClass("selected");
     });
     if (timeout) {
         $("#stage").html("");
         $("#stage").append("<a href='javascript:checkTestResult();' title='Check Result'><img src='/images/time_over.png' alt='Time is Over'/></a>");
         $("#stage").append("<center><a href='javascript:checkTestResult();' title='Check Result'><h2>Time is Over, Check Result</h2></a></center>");
     }
  })
 .catch((error) => {
     console.log( error );
     alert(error);
     return false;
  });
	
}
function trim(s, mask) {
    while (~mask.indexOf(s[0])) {
        s = s.slice(1);
    }
    while (~mask.indexOf(s[s.length - 1])) {
        s = s.slice(0, -1);
    }
    return s;
}
const mobileSearchButton = document.querySelector(".mobile-search-button")
const navToggle = document.querySelector(".nav-toggle")
const nav = document.querySelector(".nav")
const accentNav = document.querySelector(".accent-nav__content")
const accentNavToggle = document.querySelector(".accent-nav__toggle")
const dropdownToggles = document.querySelectorAll(".dropdown__toggle")
const dropdown = document.querySelector(".dropdown")
const mobileAlertCloseButton = document.querySelector(".mobile-alert__button-close")
dropdownToggles.forEach((el) =>
    el.addEventListener("click", (e) => {
        e.target.setAttribute(
            "aria-expanded",
            !e.target.nextElementSibling.hasAttribute("data-visible")
        )
        e.target.nextElementSibling.toggleAttribute("data-visible")
    })
)
//library nav & aside & table of content & quiz & header
const libraryAsideToggle = document.querySelector(".tutorial-toc-toggle")
const libraryAside = document.querySelector(".tutorial-toc")
const tableOfContentToggle = document.querySelector("#page-menu")
const tableOfContent = document.querySelector(".table-of-content-wrapper")
const accordionToggles = document.querySelectorAll(".toggle__toggle")
const asideAccordionToggles = document.querySelectorAll(".toc__toggle")

window.onscroll = () => libraryStickyHeader()

const libraryHeader = document.querySelector(".library-header")

let sticky

if (libraryHeader) {
    sticky = libraryHeader.offsetTop
}

function libraryStickyHeader() {
    if (window.scrollY >= sticky) {
        if (libraryHeader) {
            libraryHeader.classList.add("sticky")
        }
        if (libraryAside) {
            libraryAside.classList.add("sticky")
        }
    } else {
        if (libraryHeader) {
            libraryHeader.classList.remove("sticky")
        }
        if (libraryAside) {
            libraryAside.classList.remove("sticky")
        }
    }
}
if (accordionToggles) {
    accordionToggles.forEach((el) => {
        el.addEventListener("click", () => {
            el.setAttribute(
                "aria-expanded",
                !el.nextElementSibling.hasAttribute("data-visible")
            )
            el.nextElementSibling.toggleAttribute("data-visible")
        })
    })
}
if (asideAccordionToggles) {
    asideAccordionToggles.forEach((el) => {
        el.addEventListener("click", () => {
            el.setAttribute(
                "aria-expanded",
                !el.nextElementSibling.hasAttribute("data-visible")
            )
            el.nextElementSibling.toggleAttribute("data-visible")
        })
    })
}
/*
if (answerToggles) {
    answerToggles.forEach((toggle) =>
        toggle.addEventListener("click", (e) => {
            const answer = document.querySelector(
                `#${e.target.getAttribute("aria-controls")}`
            )
            e.target.setAttribute(
                "aria-expanded",
                !answer.hasAttribute("data-visible")
            )
            if (e.target.getAttribute("aria-expanded") === "true") {
                e.target.firstElementChild.innerText = "Hide"
            } else {
                e.target.firstElementChild.innerText = "Show"
            }
            answer.toggleAttribute("data-visible")
        })
    )
}
*/

if (libraryAsideToggle) {
    libraryAsideToggle.addEventListener("click", () => {
        libraryAsideToggle.setAttribute(
            "aria-expanded",
            !libraryAside.hasAttribute("data-visible")
        )
        libraryAside.toggleAttribute("data-visible")
    })
}

if (tableOfContentToggle) {
    tableOfContentToggle.addEventListener("click", () => {
        tableOfContentToggle.setAttribute(
            "aria-expanded",
            !tableOfContent.hasAttribute("data-visible")
        )
        tableOfContent.toggleAttribute("data-visible")
    })
}

let activateNavScroll = 0
let activateScrollButtons = 0
let fromScrollPos = -1
let fromScrollPosButtons = -1
let currentScrollpos = -1
let currentScrollposButtons = -1

$("#library-nav").on('onmousedown', function(event) {
    event.preventDefault()
    fromScrollPos = event.clientX
    activateNavScroll = 1
});
$("#tutorial-menu-slider").on('onmousedown', function(event) {
    event.preventDefault()
    fromScrollPosButtons = event.clientX
    activateScrollButtons = 1
});
$("#library-nav").on('onmousemove', function(event) {
    currentScrollpos = event.clientX
    if (currentScrollpos == fromScrollPos) return false
    event.preventDefault()
    if (event.buttons == 0) return false
    var scrollspeed
    if (activateNavScroll == 1) {
        goto_tut = 0
        scrollspeed = currentScrollpos - fromScrollPos
        scrollspeed = Math.abs(scrollspeed)
        if (currentScrollpos < fromScrollPos) {
            document.getElementById("scroll_left_btn").style.display = "block"
            document.getElementById("library-nav").scrollLeft += scrollspeed
        } else {
            document.getElementById("library-nav").scrollLeft -= scrollspeed
        }
        scrollButtonVisible()
        fromScrollPos = currentScrollpos
    }
});
$("#tutorial-menu-slider").on('onmousemove', function(event) {
    currentScrollposButtons = event.clientX
    if (currentScrollposButtons == fromScrollPosButtons) return false
    event.preventDefault()
    if (event.buttons == 0) return false
    var scrollspeed
    if (activateScrollButtons == 1) {
        goto_tut = 0
        scrollspeed = currentScrollposButtons - fromScrollPosButtons
        scrollspeed = Math.abs(scrollspeed)
        if (currentScrollposButtons < fromScrollPosButtons) {
            document.getElementById("tutorial-menu-slider").scrollLeft +=
                scrollspeed
        } else {
            document.getElementById("tutorial-menu-slider").scrollLeft -=
                scrollspeed
        }
        scrollButtonVisible()
        fromScrollPosButtons = currentScrollposButtons
    }
});
$("#library-nav").on('onmouseup', function(event) {
    event.preventDefault()
    activateNavScroll = 0
    fromScrollPos = -1
    currentScrollpos = -1
});
$("#tutorial-menu-slider").on('onmouseup', function(event) {
    event.preventDefault()
    activateScrollButtons = 0
    fromScrollPosButtons = -1
    currentScrollposButtons = -1
});

let scrollspeed = 1
let scrollinterval
function initScroll(n) {
    scrollinterval = window.setInterval(function () {
        scrollspeed = scrollspeed * 1.1
        if (scrollspeed > 10) {
            scrollspeed = 10
        }
        if (n == 1) {
            document.getElementById("library-nav").scrollLeft += scrollspeed
        } else {
            document.getElementById("library-nav").scrollLeft -= scrollspeed
        }
        scrollButtonVisible()
    }, 10)
}

var p_s_l = 0
var x_s_l = 0
function scrollButtonVisible() {
    /*
    var c_s_l = document.getElementById("library-nav").scrollLeft
    if (c_s_l < 1) {
        document.getElementById("scroll_left_btn").style.display = "none"
    } else {
        document.getElementById("scroll_left_btn").style.display = "block"
    }
    if (c_s_l > 1 && c_s_l == p_s_l) {
        x_s_l++
    } else {
        x_s_l = 0
    }
    if (x_s_l > 3) {
        document.getElementById("scroll_right_btn").style.display = "none"
    } else {
        document.getElementById("scroll_right_btn").style.display = "block"
    }
    p_s_l = document.getElementById("library-nav").scrollLeft
    */
}

function stopScrolling() {
    scrollspeed = 1
    window.clearInterval(scrollinterval)
}

onClickOutside(libraryAside, () => {
    libraryAside.removeAttribute("data-visible")
    libraryAsideToggle.setAttribute("aria-expanded", false)
})
document.addEventListener("click", (event) => {
    const dropdownClosed = event.composedPath().includes(dropdown)
    if (!dropdownClosed) {
        if (dropdown) {
            dropdown.firstElementChild.nextElementSibling.removeAttribute("data-visible")
            dropdown.firstElementChild.setAttribute("aria-expanded", false)
        }
    }
})

function onClickOutside(el, cb) {
    document.addEventListener("click", (event) => {
        if (
            !el.contains(event.target) &&
            ![...event.target.classList].includes("tutorial-toc-toggle") &&
            ![...event.target.classList].includes("accent-nav__toggle") &&
            ![...event.target.classList].includes("nav-toggle")
        )
            cb()
    })
}
if (accentNavToggle) {
    accentNavToggle.addEventListener("click", () => {
		navToggle.setAttribute("aria-expanded", false)
		nav.removeAttribute("data-visible")
        accentNavToggle.setAttribute(
            "aria-expanded",
            !accentNav.hasAttribute("data-visible")
        )
        accentNav.toggleAttribute("data-visible")	
    })
}

onClickOutside(accentNav, () => {
    accentNav.removeAttribute("data-visible")
    accentNavToggle.setAttribute("aria-expanded", false)
})

onClickOutside(nav, () => {
    nav.removeAttribute("data-visible")
    navToggle.setAttribute("aria-expanded", false)
})

if (navToggle) {
    navToggle.addEventListener("click", () => {
		accentNavToggle.setAttribute(
            "aria-expanded",
            false
        )
		accentNav.removeAttribute("data-visible")
        navToggle.setAttribute(
            "aria-expanded",
            !nav.hasAttribute("data-visible")
        )
        mobileSearchButton.setAttribute("aria-expanded", false)
        const searchInput = mobileSearchButton.previousElementSibling
        searchInput.removeAttribute("data-visible")
        nav.toggleAttribute("data-visible")
		accentNav.setAttribute("aria-expanded", false)
    })
}

if (mobileSearchButton) {
    mobileSearchButton.addEventListener("click", (e) => {
        const searchInput = e.target.previousElementSibling
        e.target.setAttribute(
            "aria-expanded",
            !searchInput.hasAttribute("data-visible")
        )
        searchInput.toggleAttribute("data-visible")
    })
}
if (mobileAlertCloseButton) {
    mobileAlertCloseButton.addEventListener("click", (e) => {
        document.querySelector(".mobile-alert").style.display = "none"
        if (libraryHeader) {
            sticky = libraryHeader.offsetTop
        }
    })
}
$(function (){

    $("#print-page").on("click", function(e){
         window.print();
    });
    /*
    $(".toggle").on('click', function() {
       $(this).find(".toggle-content").toggle();
    });
    */
    $("#page-menu").on('click', function() {
       $("#page-toc").toggle();
    });
    // Banner Trigger if Not Closed
    if (!localStorage.bannerClosed) {
       $('#privacy-banner').css("display", "inherit");
    } else {
       $('#privacy-banner').css("display", "none");
    }
    $('#banner-accept').on("click", function() {
       $('#privacy-banner').css("display", "none");
       localStorage.bannerClosed = 'true';
    });
    if (navigator.userAgent.match(/Opera|OPR\//)) {
       $('#privacy-banner').css("display", "inherit");
    }
    var self = location.href;
    filename = self.substring(self.lastIndexOf('.com')+5);
    filename = filename.replace(/([/]$)/g, '');
    if( filename.lastIndexOf('.htm') == -1 ){
       filename = filename + "/index.htm";
    }
    var linktext = document.querySelectorAll('.tutorial-toc .toc li a[href*= "' + filename + '"]')[0];
    if( linktext == undefined ){
        filenames = document.getElementsByClassName('parent-file')[0];
        if( filenames != undefined ){
           filename = filenames.innerHTML;
        }
    }
    if( filename.lastIndexOf('whoiswho') == -1 ){
       var chapters = document.querySelectorAll('ul.toc.chapters>li a[href*= "' + filename + '"]');
       if( chapters.length > 0 ){
           //chapters[0].parentElement.classList.add("active");
           chapters[0].classList.add("active");
       }
       var submenu = document.querySelectorAll('ul.toc.submenu>li a[href*= "' + filename + '"]');
       if( submenu.length > 0 ){
           //chapters[0].parentElement.classList.add("active");
           chapters[0].classList.add("active");
       }
       /* Match the height */
       var tc = document.getElementsByClassName('tutorial-content')[0];
       var tt = document.getElementsByClassName('tutorial-toc')[0];
       if((tc && tt && tc.offsetHeight < tt.offsetHeight) && (window.innerWidth > 840)){
           tc.style.minHeight =  tt.offsetHeight + 20 + "px";
       }
   }
   $(document).on("click",function(){
       if( $("#tocCollapse").css("display") === "block" && window.innerWidth <= 768 ){
          $("#tocCollapse").css("display", "none");
       }
   });
   $("#btn-tutorial-toc").on('click', function(e){
	 e.preventDefault();
         e.stopPropagation();
         $("#navbarCollapse").hide();
         $("#categories-menu").hide();
         //  $("#tocCollapse").css("display", "block");
         $("#tocCollapse").toggle();
   });
   $("#btn-menu-collapse").on('click', function(){
         $("#tocCollapse").hide();
         $("#categories-menu").hide();
         $("#navbarCollapse").toggle();
   });
   $("#categoryMenu").on('click', function(){
         $("#categories-menu").toggle();
   });
   window.addEventListener("click", function(e){
         if(!e.target.closest("#categoryMenu")){
             $("#categories-menu").css("display", "none");
         }
   });
   $(".Q a").on('click', function(){
         if( $(this).hasClass("true")){
             $(this).find("span").addClass("correct");
         }else{
             $(this).find("span").addClass("wrong");
         }
         $(this).removeAttr("href");
         $(this).addClass("selected");
    });
    $("button span").on('click', function() {
         if( $(this).text() == "Show Answer"){
             $(this).text('Hide Answer');
         }else if( $(this).text() == "Hide Answer"){
             $(this).text('Show Answer');
         }else if( $(this).text() == "Show Editor"){
             $(this).text('Hide Editor');
         }else if( $(this).text() == "Hide Editor"){
             $(this).text('Show Editor');
         }
    });
    if(navigator.userAgent.indexOf("MSIE") > 0 || navigator.userAgent.indexOf("Firefox") > 0 ){
       $('.btn-test').on('click', function(){
          if( $(this).find('a').attr('href') ) {
              var href = $(this).find('a').attr('href');
              var func = href.replace("javascript:",'');
              setTimeout(func, 0);
          }
       });
   }

   /* Inline Editor related changes starts here */
   var editors = [];
   var objs = document.querySelectorAll('.demo-code');
   var justs = document.querySelectorAll('.just-code');

   /* Function to check if an element is in view port or not */
   $.fn.isInViewport = function( margin ) {
      var elementTop = $(this).offset().top + margin;
      var elementBottom = elementTop + $(this).outerHeight();

      var viewportTop =  window.pageYOffset || document.documentElement.scrollTop;
      var viewportBottom = viewportTop + $(window).height();

      return elementBottom > viewportTop && elementTop < viewportBottom;
   };

   const highlight = (editor) => {
      editor.textContent = editor.textContent
      Prism.highlightElement(editor);
   }
   for (var i = 0; i < objs.length; i++) {
      if( document.getElementById('txtQuestionDesp') ){
         /* This is to prevent editor processing while editing question */
         return;
      }
      if( document.getElementById('summernote') ){
         /* This is to prevent editor processing while editing question */
         return;
      }
      var code = objs[i].innerHTML;
      var element = document.createElement("div");
      element.className = "execute";
      objs[i].innerHTML = "";
	   /* objs[i].append(element); */
      objs[i].dataset.index =  i;
      objs[i].id =  i;

      var codeMirror = document.createElement("div");
      codeMirror.className = "code-mirror";
      codeMirror.innerHTML = code;
      objs[i].append(codeMirror);
      let options = {
         tab: ' '.repeat(4)
      }
      editors[i] = CodeJar(codeMirror, highlight, options);
      element = document.createElement("div");
      element.className = "output-wrapper";
      element.innerHTML = '<div class="console-close"></div><div class="code-output"></div>';
      objs[i].append(element);

      var parent = objs[i].parentNode;
      var wrapper = document.createElement('div');
      wrapper.className = "code-wrapper";

      var codeHeader = document.createElement("div");
      codeHeader.className = "code-header";

      var logoSide = document.createElement("div");
      logoSide.className = "logo-side";
      logoSide.innerHTML = '<svg fill="white" xmlns="https://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M376.5 1.8l-7.3 22.8-144 448-7.3 22.8 45.7 14.7 7.3-22.8 144-448 7.3-22.8L376.5 1.8zm61.6 135.3l17.5 16.4L564.9 256 455.6 358.5l-17.5 16.4 32.8 35 17.5-16.4 128-120L635.1 256l-18.7-17.5-128-120-17.5-16.4-32.8 35zm-269-35l-17.5 16.4-128 120L4.9 256l18.7 17.5 128 120 17.5 16.4 32.8-35-17.5-16.4L75.1 256 184.4 153.5l17.5-16.4-32.8-35z"/></svg>';
      codeHeader.append(logoSide);

      var buttonSide = document.createElement("div");
      buttonSide.className = "button-side";

      var execButton = document.createElement("div");
      execButton.className = "execute";
      buttonSide.append(execButton);

      var openButton = document.createElement("div");
      openButton.className = "open-compiler";
      openButton.innerHTML = "Open Compiler";
      buttonSide.append(openButton);

      codeHeader.append(buttonSide);

      wrapper.append(codeHeader);
      // set the wrapper as child (instead of the element)
      parent.replaceChild(wrapper, objs[i]);
      // set element as child of wrapper
      wrapper.appendChild(objs[i]);

   }
   for (var i = 0; i < justs.length; i++) {
      if( document.getElementById('txtQuestionDesp') ){
         /* This is to prevent editor processing while editing question */
         return;
      }
      if( document.getElementById('summernote') ){
         /* This is to prevent editor processing while editing question */
         return;
      }
      var code = justs[i].innerHTML;
      justs[i].innerHTML = "";

      var codeMirror = document.createElement("div");
      codeMirror.className = "code-mirror";
      codeMirror.innerHTML = code;
      justs[i].append(codeMirror);

      CodeJar(codeMirror, highlight);
   }
   $(".execute" ).on('click', function() {
      var index = $(this).parent().parent().parent().find(".demo-code").data("index");
      var lang = $(this).parent().parent().parent().find(".demo-code").data("lang");
      var preview = $(this).parent().parent().parent().find(".demo-code").data("preview");
      var editor = editors[index];
      var code = editor.toString();
      if( !isMobile ){
         this.nextElementSibling.focus();
      }
      if( lang == "sql" ){
         var example = $(this).parent().parent().parent().find(".demo-code").data("example");
         window.open("https://www.tutorialspoint.com/online_sql_editor.htm?preset=" + example, "_blank");
         return;
      }
      if( lang == "mysql" ){
         var example = $(this).parent().parent().parent().find(".demo-code").data("example");
         window.open("https://www.tutorialspoint.com/online_mysql_editor.htm?preset=" + example, "_blank");
         return;
      }
      var url = "https://tpcg1.tutorialspoint.com/demo.php";
      if( lang == "c" || lang == "cpp" || lang == "c99" || lang == "cpp0x" || lang == "cpp11" || lang == "objc" || lang == "swift" || lang == "ada" || lang == "algol" || lang == "asm" || lang == "awk" || lang == "bash" || lang == "befunge" || lang == "brainfuck" || lang == "fbc" || lang == "csharp" || lang == "fsharp" || lang == "vb.net" || lang == "ilasm" || lang == "elixir" || lang == "basic" || lang == "cobol" || lang == "cbasic" || lang == "yasm" || lang == "fortran" || lang == "erlang" || lang == "factor"){
          url = "https://tpcg2.tutorialspoint.com/demo.php";
      }else if( lang === "javascript" || lang === "java" || lang === "rexx" || lang === "clojure" || lang === "fantom" || lang === "golang" || lang === "groovy" || lang === "haxe" || lang === "haskell" || lang === "dart" || lang === "d" || lang === "julia" || lang === "scala"){
          url = "https://tpcg4.tutorialspoint.com/demo.php";
      }else if( lang === "kotlin" || lang === "perl" || lang === "ruby" || lang === "rubyterm" || lang  === "matplotlib" || lang === "numpyterm"  || lang === "scipyterm" || lang === "python3"  || lang === "python" || lang  === "rscript" || lang === "octave" || lang === "octaveterm" || lang === "rterm" || lang === "nodejsterm" || lang === "unixterm" || lang === "python3term" || lang == "pashterm" ||  lang == "lua" ||  lang == "luaterm" || lang == "forth" || lang === "jython" || lang === "java8" || lang === "ksh" || lang === "tcl" || lang === "lisp" || lang === "icon" || lang === "intercal" || lang === "sqlite"){
           url = "https://tpcg3.tutorialspoint.com/demo.php";
      }
      if( lang === "typescript"){
         url = "https://tools.tutorialspoint.com/webview.php";
      }
      var wrapper = $(this).parent().parent().parent().find(".output-wrapper").show();
      if( !$(this).parent().parent().parent().next().next().isInViewport(100)) {
         // If this is not in view then only.
          window.scrollTo({top:$(this).parent().parent().parent().offset().top - 110, behavior:'smooth'});
      }
      wrapper.find(".console-close").show();
      wrapper.find(".code-output").html('<div class="loader"></div>');
      if( lang === "javascript" || lang === "html" || lang === "css" || lang === "html5"){
          var iframe = document.createElement('iframe');
	  iframe.addEventListener( "load", function() {
	      setTimeout( function(){
     	          resizeFrame(iframe);
		  $(".loader").hide();
	      }, 100);
          });
          iframe.style = "height:0px;margin:0px;padding:25px 25px 25px 0px;width:100%;border:none;overflow:hidden;";
          wrapper.find(".code-output").append(iframe);
	  iframe.contentWindow.document.open();
          iframe.contentWindow.document.write(code);
          iframe.contentWindow.document.close();
          return true;
      }
      var formData = new FormData();
      formData.append('lang', lang);
      formData.append('code', code);
      fetch(url, {
           method: 'POST',
           body: formData
      })
      .then(response => {
          console.log (response);
	  return response.text();
       })
      .then(data => {
          wrapper.find(".code-output").html(data);
      })
      .catch((error) => {
          console.log( error );
          alert(error);
          return false;
      });
   });
   $(".open-compiler" ).on('click', function() {
      var lang = $(this).parent().parent().parent().find(".demo-code").data("lang");
      var url = "codingground.htm";
      if( lang == "c" ){
         url = "compile_c_online.php";
      }else if ( lang == "cpp" ){
         url = "compile_cpp_online.php";
      }else if ( lang == "java" ){
         url = "online_java_compiler.php";
      }else if ( lang == "csharp" ){
         url = "online_csharp_compiler.php";
      }else if ( lang == "swift" ){
         url = "compile_swift_online";
      }else if ( lang == "sql" ){
         url = "online_sql_editor.htm";
      }else if ( lang == "python" ){
         url = "online_python_compiler.php";
      }else if ( lang == "python3" ){
         url = "online_python_compiler.php";
      }else if ( lang == "php" ){
         url = "execute_php_online.php";
      }else if ( lang == "scala" ){
         url = "compile_scala_online.php";
      }else if ( lang == "html" ){
         url = "online_html_editor.php";
      }else if ( lang == "css" ){
         url = "online_css_editor.php";
      }else if ( lang == "javascript" ){
         url = "online_javascript_editor.php";
      }else if ( lang == "lua" ){
         url = "execute_lua_online.php";
      }else if ( lang == "nodejs" ){
         url = "execute_nodejs_online.php";
      }else if ( lang == "ruby" ){
         url = "execute_ruby_online.php";
      }else if ( lang == "golang" ){
         url = "online_golang_compiler.php";
      }
      window.open("https://www.tutorialspoint.com/" + url, "_blank");
   });
   $(".console-close" ).on('click', function() {
      if( !$(this).parent().parent().parent().prev().prev().isInViewport(0)) {
         // If this is not in view then only.
          window.scrollTo({top:$(this).parent().parent().parent().prev().prev().offset().top - 50, behavior:'smooth'});
      }
      $(this).hide();
      $(this).parent().hide();
   });
   /* Demo editor related changes ends here */
   // search js
   if( typeof isQA === 'undefined'){
        $('#search-strings').attr('placeholder','Search tutorials, courses and ebooks...');
        $('#mobile-search-strings').attr('placeholder','Search tutorials, courses and ebooks...');
       // $('.nav__item--button a').attr('href','https://www.tutorialspoint.com/market/login.jsp');
   } else {       
        $('#search-strings').attr('placeholder','Search articles...');
        $('#mobile-search-strings').attr('placeholder','Search articles...');
        $('.nav__item--button a').attr('href','https://www.tutorialspoint.com/articles/signin.php');        
        if(getCookie('user_id') != '' && getCookie('user_id') != null){
            changeLoginButton();
        }
   }
   document.getElementById('search-strings').addEventListener('keyup', function () {
       var keyword = document.getElementById('search-strings').value;
       searchKeyword( keyword );
   });
   document.getElementById('mobile-search-strings').addEventListener('keyup', function (){
       var keyword = document.getElementById('mobile-search-strings').value;
       searchKeyword( keyword );
   });
   function searchKeyword( keyword ){
      if (keyword != "" && keyword.length > 2) {
         var formData = new FormData();
         formData.append('keyword', keyword);
         if( typeof isQA === 'undefined'){
             var url = "https://search.tutorialspoint.com/get_tp_search_data.php";
         }else{
             var url = "https://search.tutorialspoint.com/get_qa_search_data.php";
         }
         fetch(url, {
            method: "POST",
            body: formData
          })
         .then(response => {
	     formData = null;
             return response.json();
          })
          .then(data => {
             if (data.length > 0) {
               var str = '<div class="search-overlay"><ul>';
               data.forEach((item) => {
                  str = str + '<a href="'+item.url+'" target="_blank"><li class="clsHeadQuestion">'+' '+item.name+'</li></a>';
               });
               str = str + '</ul><br/></div><div class="clear"></div>';
               document.getElementById('search-results').style.display = 'block';
               document.getElementById('search-results').innerHTML = str;
            } else {
               document.getElementById('search-results').style.display = 'none';
               document.getElementById('search-results').innerHTML = "";
            }
          })
          .catch((error) => {
             console.log( error );
             alert(error);
             return false;
          });
      }else{
         document.getElementById('search-results').style.display = 'none';
         document.getElementById('search-results').innerHTML = "";
      }
   }
   document.getElementById('btnSearch').addEventListener('click', function () {
      var keyword = document.getElementById('search-strings').value;
      window.location.href = "https://www.tutorialspoint.com/search/"+keyword;
   });
   document.getElementById('search-strings').addEventListener("keypress", function(event) {
     if (event.key === "Enter") {
       event.preventDefault();
       var keyword = document.getElementById('search-strings').value;
       if( typeof isQA === 'undefined'){
           var url = "https://www.tutorialspoint.com/search/"+keyword;
         }else{
           var url = "https://www.tutorialspoint.com/articles/search.php?keyword="+keyword;
       }
       window.location.href = url; 
     }
   });
   document.addEventListener('mouseup', function (e) {
      var container = document.getElementById('search-results');
      if(container.innerHTML.trim().length > 0){
        container.style.display = 'none';
      }
    //   if (!container.is(e.target) && container.has(e.target).length === 0){
    //      container.style.display = 'none';
    //   }

   });
   // tabs js/* tabs js */
   $(".tab-title" ).on('click', function(e) {
      var target = e.target.closest(".tab-title");
      if( target.dataset && target.dataset.title ){
         var dataContent = target.dataset.title;
      }
      var divmain = target.parentElement.closest('div').parentElement.closest('div');
      var divsToHide = divmain.getElementsByClassName("tab-content");
      for(var i = 0; i < divsToHide.length; i++){
         divsToHide[i].classList.remove("active");
      }
      var titlesToHide = divmain.getElementsByClassName("tab-title");
      for(var i = 0; i < titlesToHide.length; i++){
         titlesToHide[i].classList.remove("active");
      }
      var dataelement = divmain.querySelector('.tab-content[data-content="' + dataContent + '"]');
      dataelement.classList.add("active");
      target.classList.add("active");
   });
   $('ul li:has(a.videolink)').addClass('grey_bg');
   $(".toggle").on('click', function(e) {
        /* Put a condition to handle new implementation */
       if(! $(this).find("label").hasClass("toggle__toggle") ){
           $(this).find(".toggle-content").toggle();
       }
   });
   const themeToggle = document.querySelector(".theme-toggle")
   const pageMenu = document.querySelector("#page-menu")
   if (localStorage.getItem("theme") === "dark") {
       themeToggle.setAttribute("aria-expanded", true)
       document.documentElement.classList.add("dark")
       if( pageMenu && pageMenu.firstElementChild ){
          pageMenu.firstElementChild.src = "/images/tableOfContentsWhite.svg"
       }
   }

   if (themeToggle) {
       themeToggle.addEventListener("click", () => {
           if (themeToggle.getAttribute("aria-expanded") === "true") {
               themeToggle.setAttribute("aria-expanded", false)
               localStorage.setItem("theme", "")
               document.documentElement.classList.remove("dark")
               if( pageMenu && pageMenu.firstElementChild ){
                  pageMenu.firstElementChild.src = "/images/tableOfContents.svg"
               }
           } else {
               localStorage.setItem("theme", "dark")
               document.documentElement.classList.add("dark")
               themeToggle.setAttribute("aria-expanded", true)
               if( pageMenu && pageMenu.firstElementChild ){
                  pageMenu.firstElementChild.src = "/images/tableOfContentsWhite.svg"
               }
           }
       });
   }
   
});
/* custom.js ends here */

// scroll to top events
const scrollToTopButton = document.querySelector(".scroll-to-top-button")
const heroSection = document.querySelector(".footer__main")
if (scrollToTopButton)
    scrollToTopButton.addEventListener("click", () =>
        window.scrollTo({ top: 0, behaviour: "smooth" })
    )
	
function toggleDesktopPricingCardVisibility(target) {
    if(heroSection) {        
        const heroObserver = new IntersectionObserver(entries => {
            if (!entries[0].isIntersecting) {
                target.classList.remove('show')
            } else {
                target.classList.add('show')
            }
        })
        heroObserver.observe(heroSection)
    }
}
if (scrollToTopButton) window.addEventListener("scroll", () => toggleDesktopPricingCardVisibility(scrollToTopButton))

// home category drodown js
const categoryButtons = document.querySelectorAll(".category-button")

categoryButtons.forEach((button) =>
    button.addEventListener("click", (e) => {
        categoryButtons.forEach((b) => b.setAttribute("aria-selected", false))
        e.target.setAttribute("aria-selected", true)
        // if (window.innerWidth < 1120) {
        //     categoryContent?.scrollIntoView({ behaviour: "smooth" })
        // }
    })
)

const categories = document.querySelectorAll(".category-button")
const categoriesBackButtons = document.querySelectorAll(
    ".categories-menu-section__back-button"
)

categoriesBackButtons.forEach((b) =>
    b.addEventListener("click", (e) => {
        categoryButtons.forEach((b) => b.setAttribute("aria-selected", false))
    })
)

for (let i = 1; i <= categories.length; i++) {
   /*  if (window.innerWidth > 1120) {
        const rule1 = `.categories-menu:has(.category-button:nth-of-type(${i}):hover) .categories-menu-section:nth-of-type(${i})`
        const rule2 = `.categories-menu:has(.category-button:nth-of-type(${i})[aria-selected=true]):not(:has(.category-button:hover)) .categories-menu-section:nth-of-type(${i}) { display: flex; }`
        let style = document.createElement("style")
        style.innerText = `${rule1}, ${rule2};`
        document.head.appendChild(style)
    } else { */
        const rule2 = `.categories-menu:has(.category-button:nth-of-type(${i})[aria-selected=true]) .categories-menu-section:nth-of-type(${i}) { display: flex; }`
        let style = document.createElement("style")
        style.innerText = `${rule2};`
        document.head.appendChild(style)
   // }
}

// google one tap login
function initializeGoogleOneTap()
   {   
       google.accounts.id.initialize({
           client_id: '934794922040-uhm0visbsvgk33aipstahdspovr172ic.apps.googleusercontent.com',
           callback: googleLoginEndpoint
       });
       google.accounts.id.prompt();
   }
function googleLoginEndpoint(googleUser)
   {   
       var courses = [];
       if (localStorage.cartData && localStorage.cartData != '') {
           courses = JSON.parse(localStorage.getItem('cartData'));
       }
       var currency = JSON.parse(localStorage.getItem('localization'));
       if (currency) {
           currency = currency.currency;
       }
      var url = window.location.href;
      var page = url.split(document.domain)[1].slice(1).split(".");
      var keyword = page[0];

      fetch('https://www.tutorialspoint.com/market/googleonetap.jsp', {
	      method: 'POST',
	      headers: {
	        'Content-Type': 'application/json',
	        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
	      },
	      body: JSON.stringify({"idToken": googleUser.credential, "currency": currency, "courses": courses, "keyword": keyword,}),
	  })
      .then(data => {
      	if(data.status == 200){
      		data.json().then(response => { 
          		createCookie("user_id", response.data.user_id, 7);
          		localStorage.removeItem("cartData");
          		changeLoginButton();
      		});
      	}
      })
      .catch((error) => {
          console.log( error );
          return false;
      });
   }

if(getCookie('user_id') != '' && getCookie('user_id') != null){
    changeLoginButton();
}

function changeLoginButton(){
	var login_btn = document.querySelector(".nav__signup-link");
    login_btn.getAttribute("href");
    if( typeof isQA === 'undefined'){
        login_btn.setAttribute("href","https://www.tutorialspoint.com/market/student/dashboard.jsp");
        login_btn.textContent = "Account";
    } else {
        login_btn.setAttribute("href","https://www.tutorialspoint.com/articles/dashboard.php");    
        login_btn.textContent = "Account";
    }
        
    var mlogin_btn = document.querySelector(".accent-nav__login-button");
    mlogin_btn.getAttribute("href");
    if( typeof isQA === 'undefined'){
        mlogin_btn.setAttribute("href","https://www.tutorialspoint.com/market/student/dashboard.jsp");
        mlogin_btn.textContent = "Account";
    } else {
        mlogin_btn.setAttribute("href","https://www.tutorialspoint.com/articles/dashboard.php");
    }    
}
function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
    console.log(document.cookie);
}
function getCookie(name) {
    var cookieArr = document.cookie.split(";");
    for (var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");
        if (name == cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
}
