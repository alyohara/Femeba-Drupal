/*! jQuery v3.6.3 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,y=n.hasOwnProperty,a=y.toString,l=a.call(Object),v={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},S=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||S).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.3",E=function(e,t){return new E.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}E.fn=E.prototype={jquery:f,constructor:E,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=E.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return E.each(this,e)},map:function(n){return this.pushStack(E.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(E.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(E.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},E.extend=E.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(E.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||E.isPlainObject(n)?n:{},i=!1,a[t]=E.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},E.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=y.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?E.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:v}),"function"==typeof Symbol&&(E.fn[Symbol.iterator]=t[Symbol.iterator]),E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,S,y,s,c,v,E="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,S)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&v(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!y||!y.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ve(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=E)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{if(d.cssSupportsSelector&&!CSS.supports("selector(:is("+c+"))"))throw new Error;return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===E&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[E]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ye(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ve(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,S=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.cssSupportsSelector=ce(function(){return CSS.supports("selector(*)")&&C.querySelectorAll(":is(:jqfake)")&&!CSS.supports("selector(:is(*,:jqfake))")}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=E,!C.getElementsByName||!C.getElementsByName(E).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&S){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&S){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&S)return t.getElementsByClassName(e)},s=[],y=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+E+"'></a><select id='"+E+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+E+"-]").length||y.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||y.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+E+"+*").length||y.push(".#.+[+~]"),e.querySelectorAll("\\\f"),y.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),d.cssSupportsSelector||y.push(":has"),y=y.length&&new RegExp(y.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),v=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType&&e.documentElement||e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&v(p,e)?-1:t==C||t.ownerDocument==p&&v(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&S&&!N[t+" "]&&(!s||!s.test(t))&&(!y||!y.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),v(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!S):void 0;return void 0!==r?r:d.attributes||!S?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace($," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,y){var v="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===y?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=v!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(v){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[E]||(a[E]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[E]||(a[E]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[E]||(a[E]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=y)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[E]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[E]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=S?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ye(function(){return[0]}),last:ye(function(e,t){return[t-1]}),eq:ye(function(e,t,n){return[n<0?n+t:n]}),even:ye(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ye(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ye(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ye(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[E]||(e[E]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,y,v,e){return y&&!y[E]&&(y=Ce(y)),v&&!v[E]&&(v=Ce(v,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?v||(e?d:l||y)?[]:t:f;if(g&&g(f,p,n,r),y){i=Te(p,u),y(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(v||d){if(v){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);v(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=v?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),v?v(null,t,p,r):H.apply(t,p)})}function Se(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[E]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Se(e.slice(s,n)),n<r&&Se(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,y,v,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Se(t[n]))[E]?i.push(a):o.push(a);(a=A(e,(y=o,m=0<(v=i).length,x=0<y.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!S);while(s=y[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=v[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+v.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&S&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ve(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!S,n,!t||ee.test(e)&&ve(t.parentNode)||t),n},d.sortStable=E.split("").sort(j).join("")===E,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);E.find=d,E.expr=d.selectors,E.expr[":"]=E.expr.pseudos,E.uniqueSort=E.unique=d.uniqueSort,E.text=d.getText,E.isXMLDoc=d.isXML,E.contains=d.contains,E.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&E(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=E.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?E.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?E.grep(e,function(e){return e===n!==r}):"string"!=typeof n?E.grep(e,function(e){return-1<i.call(n,e)!==r}):E.filter(n,e,r)}E.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?E.find.matchesSelector(r,e)?[r]:[]:E.find.matches(e,E.grep(t,function(e){return 1===e.nodeType}))},E.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(E(e).filter(function(){for(t=0;t<r;t++)if(E.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)E.find(e,i[t],n);return 1<r?E.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?E(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(E.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof E?t[0]:t,E.merge(this,E.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:S,!0)),N.test(r[1])&&E.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=S.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(E):E.makeArray(e,this)}).prototype=E.fn,D=E(S);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}E.fn.extend({has:function(e){var t=E(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(E.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&E(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&E.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?E.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(E(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(E.uniqueSort(E.merge(this.get(),E(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),E.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),E.merge([],e.childNodes))}},function(r,i){E.fn[r]=function(e,t){var n=E.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=E.filter(t,n)),1<this.length&&(H[r]||E.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}E.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},E.each(e.match(P)||[],function(e,t){n[t]=!0}),n):E.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){E.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return E.each(arguments,function(e,t){var n;while(-1<(n=E.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<E.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},E.extend({Deferred:function(e){var o=[["notify","progress",E.Callbacks("memory"),E.Callbacks("memory"),2],["resolve","done",E.Callbacks("once memory"),E.Callbacks("once memory"),0,"resolved"],["reject","fail",E.Callbacks("once memory"),E.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return E.Deferred(function(r){E.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){E.Deferred.exceptionHook&&E.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(E.Deferred.getStackHook&&(t.stackTrace=E.Deferred.getStackHook()),C.setTimeout(t))}}return E.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?E.extend(e,a):a}},s={};return E.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=E.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;E.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},E.readyException=function(e){C.setTimeout(function(){throw e})};var F=E.Deferred();function $(){S.removeEventListener("DOMContentLoaded",$),C.removeEventListener("load",$),E.ready()}E.fn.ready=function(e){return F.then(e)["catch"](function(e){E.readyException(e)}),this},E.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--E.readyWait:E.isReady)||(E.isReady=!0)!==e&&0<--E.readyWait||F.resolveWith(S,[E])}}),E.ready.then=F.then,"complete"===S.readyState||"loading"!==S.readyState&&!S.documentElement.doScroll?C.setTimeout(E.ready):(S.addEventListener("DOMContentLoaded",$),C.addEventListener("load",$));var B=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)B(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(E(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=E.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||E.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!E.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}E.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),E.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):B(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),E.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,E.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=E.queue(e,t),r=n.length,i=n.shift(),o=E._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){E.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:E.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),E.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?E.queue(this[0],t):void 0===n?this:this.each(function(){var e=E.queue(this,t,n);E._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&E.dequeue(this,t)})},dequeue:function(e){return this.each(function(){E.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=E.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=S.documentElement,ie=function(e){return E.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return E.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===E.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return E.css(e,t,"")},u=s(),l=n&&n[3]||(E.cssNumber[t]?"":"px"),c=e.nodeType&&(E.cssNumber[t]||"px"!==l&&+u)&&te.exec(E.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)E.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,E.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=E.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}E.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?E(this).show():E(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=S.createDocumentFragment().appendChild(S.createElement("div")),(fe=S.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),v.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",v.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",v.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?E.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,v.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))E.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+E.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;E.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<E.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return S.activeElement}catch(e){}}()==("focus"===t)}function Se(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Se(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return E().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=E.guid++)),e.each(function(){E.event.add(this,t,i,r,n)})}function Ee(e,i,o){o?(Y.set(e,i,!1),E.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(E.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:E.event.trigger(E.extend(r[0],E.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&E.event.add(e,i,we)}E.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&E.find.matchesSelector(re,i),n.guid||(n.guid=E.guid++),(u=y.events)||(u=y.events=Object.create(null)),(a=y.handle)||(a=y.handle=function(e){return"undefined"!=typeof E&&E.event.triggered!==e.type?E.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=E.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=E.event.special[d]||{},c=E.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&E.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),E.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.hasData(e)&&Y.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=E.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||E.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)E.event.remove(e,d+t[l],n,r,!0);E.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=E.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=E.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=E.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((E.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<E(i,this).index(l):E.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(E.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[E.expando]?e:new E.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ee(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ee(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},E.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},E.Event=function(e,t){if(!(this instanceof E.Event))return new E.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&E.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[E.expando]=!0},E.Event.prototype={constructor:E.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},E.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},E.event.addProp),E.each({focus:"focusin",blur:"focusout"},function(t,e){E.event.special[t]={setup:function(){return Ee(this,t,Ce),!1},trigger:function(){return Ee(this,t),!0},_default:function(e){return Y.get(e.target,t)},delegateType:e}}),E.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){E.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||E.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),E.fn.extend({on:function(e,t,n,r){return Se(this,e,t,n,r)},one:function(e,t,n,r){return Se(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,E(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){E.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&E(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)E.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=E.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!v.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=E.map(ye(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=E.clone(u,!0,!0),s&&E.merge(a,ye(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,E.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&E.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?E._evalUrl&&!u.noModule&&E._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?E.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||E.cleanData(ye(r)),r.parentNode&&(n&&ie(r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}E.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(v.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||E.isXMLDoc(e)))for(a=ye(c),r=0,i=(o=ye(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ye(e),a=a||ye(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ye(c,"script")).length&&ve(a,!f&&ye(e,"script")),c},cleanData:function(e){for(var t,n,r,i=E.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?E.event.remove(n,r):E.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),E.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return B(this,function(e){return void 0===e?E.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(E.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return E.clone(this,e,t)})},html:function(e){return B(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=E.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(E.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;E.inArray(this,n)<0&&(E.cleanData(ye(this)),t&&t.replaceChild(e,this))},n)}}),E.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){E.fn[e]=function(e){for(var t,n=[],r=E(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),E(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=/^--/,Me=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Ie=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},We=new RegExp(ne.join("|"),"i"),Fe="[\\x20\\t\\r\\n\\f]",$e=new RegExp("^"+Fe+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Fe+"+$","g");function Be(e,t,n){var r,i,o,a,s=Re.test(t),u=e.style;return(n=n||Me(e))&&(a=n.getPropertyValue(t)||n[t],s&&a&&(a=a.replace($e,"$1")||void 0),""!==a||ie(e)||(a=E.style(e,t)),!v.pixelBoxStyles()&&Pe.test(a)&&We.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=n.width,u.width=r,u.minWidth=i,u.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=S.createElement("div"),l=S.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",v.clearCloneStyle="content-box"===l.style.backgroundClip,E.extend(v,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=S.createElement("table"),t=S.createElement("tr"),n=S.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var ze=["Webkit","Moz","ms"],Ue=S.createElement("div").style,Xe={};function Ve(e){var t=E.cssProps[e]||Xe[e];return t||(e in Ue?e:Xe[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=ze.length;while(n--)if((e=ze[n]+t)in Ue)return e}(e)||e)}var Ge=/^(none|table(?!-c[ea]).+)/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=E.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=E.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=E.css(e,"border"+ne[a]+"Width",!0,i))):(u+=E.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=E.css(e,"border"+ne[a]+"Width",!0,i):s+=E.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Me(e),i=(!v.boxSizingReliable()||n)&&"border-box"===E.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!v.boxSizingReliable()&&i||!v.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===E.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===E.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}E.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Re.test(t),l=e.style;if(u||(t=Ve(s)),a=E.cssHooks[t]||E.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(E.cssNumber[s]?"":"px")),v.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Re.test(t)||(t=Ve(s)),(a=E.cssHooks[t]||E.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),E.each(["height","width"],function(e,u){E.cssHooks[u]={get:function(e,t,n){if(t)return!Ge.test(E.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):Ie(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Me(e),o=!v.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===E.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=E.css(e,u)),Je(0,t,s)}}}),E.cssHooks.marginLeft=_e(v.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-Ie(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),E.each({margin:"",padding:"",border:"Width"},function(i,o){E.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(E.cssHooks[i+o].set=Je)}),E.fn.extend({css:function(e,t){return B(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Me(e),i=t.length;a<i;a++)o[t[a]]=E.css(e,t[a],!1,r);return o}return void 0!==n?E.style(e,t,n):E.css(e,t)},e,t,1<arguments.length)}}),((E.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||E.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(E.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=E.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=E.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){E.fx.step[e.prop]?E.fx.step[e.prop](e):1!==e.elem.nodeType||!E.cssHooks[e.prop]&&null==e.elem.style[Ve(e.prop)]?e.elem[e.prop]=e.now:E.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},E.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},E.fx=et.prototype.init,E.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===S.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,E.fx.interval),E.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=E.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:E.extend({},e),opts:E.extend(!0,{specialEasing:{},easing:E.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=E.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=E.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(E._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return E.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),E.fx.timer(E.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}E.Animation=E.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=Y.get(e,"fxshow");for(r in n.queue||(null==(a=E._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,E.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||E.style(e,r)}if((u=!E.isEmptyObject(t))||!E.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=Y.get(e,"display")),"none"===(c=E.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=E.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===E.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(y?"hidden"in y&&(g=y.hidden):y=Y.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)E.style(e,r,d[r])})),u=ct(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),E.speed=function(e,t,n){var r=e&&"object"==typeof e?E.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return E.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in E.fx.speeds?r.duration=E.fx.speeds[r.duration]:r.duration=E.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&E.dequeue(this,r.queue)},r},E.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=E.isEmptyObject(t),o=E.speed(e,n,r),a=function(){var e=ft(this,E.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=E.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||E.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=E.timers,o=n?n.length:0;for(t.finish=!0,E.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),E.each(["toggle","show","hide"],function(e,r){var i=E.fn[r];E.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),E.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){E.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),E.timers=[],E.fx.tick=function(){var e,t=0,n=E.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||E.fx.stop(),tt=void 0},E.fx.timer=function(e){E.timers.push(e),E.fx.start()},E.fx.interval=13,E.fx.start=function(){nt||(nt=!0,st())},E.fx.stop=function(){nt=null},E.fx.speeds={slow:600,fast:200,_default:400},E.fn.delay=function(r,e){return r=E.fx&&E.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=S.createElement("input"),it=S.createElement("select").appendChild(S.createElement("option")),rt.type="checkbox",v.checkOn=""!==rt.value,v.optSelected=it.selected,(rt=S.createElement("input")).value="t",rt.type="radio",v.radioValue="t"===rt.value;var pt,dt=E.expr.attrHandle;E.fn.extend({attr:function(e,t){return B(this,E.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){E.removeAttr(this,e)})}}),E.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?E.prop(e,t,n):(1===o&&E.isXMLDoc(e)||(i=E.attrHooks[t.toLowerCase()]||(E.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void E.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=E.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!v.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?E.removeAttr(e,n):e.setAttribute(n,n),n}},E.each(E.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||E.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function yt(e){return(e.match(P)||[]).join(" ")}function vt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}E.fn.extend({prop:function(e,t){return B(this,E.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[E.propFix[e]||e]})}}),E.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&E.isXMLDoc(e)||(t=E.propFix[t]||t,i=E.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=E.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),v.optSelected||(E.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),E.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){E.propFix[this.toLowerCase()]=this}),E.fn.extend({addClass:function(t){var e,n,r,i,o,a;return m(t)?this.each(function(e){E(this).addClass(t.call(this,e,vt(this)))}):(e=mt(t)).length?this.each(function(){if(r=vt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<e.length;o++)i=e[o],n.indexOf(" "+i+" ")<0&&(n+=i+" ");a=yt(n),r!==a&&this.setAttribute("class",a)}}):this},removeClass:function(t){var e,n,r,i,o,a;return m(t)?this.each(function(e){E(this).removeClass(t.call(this,e,vt(this)))}):arguments.length?(e=mt(t)).length?this.each(function(){if(r=vt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<e.length;o++){i=e[o];while(-1<n.indexOf(" "+i+" "))n=n.replace(" "+i+" "," ")}a=yt(n),r!==a&&this.setAttribute("class",a)}}):this:this.attr("class","")},toggleClass:function(t,n){var e,r,i,o,a=typeof t,s="string"===a||Array.isArray(t);return m(t)?this.each(function(e){E(this).toggleClass(t.call(this,e,vt(this),n),n)}):"boolean"==typeof n&&s?n?this.addClass(t):this.removeClass(t):(e=mt(t),this.each(function(){if(s)for(o=E(this),i=0;i<e.length;i++)r=e[i],o.hasClass(r)?o.removeClass(r):o.addClass(r);else void 0!==t&&"boolean"!==a||((r=vt(this))&&Y.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===t?"":Y.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+yt(vt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;E.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,E(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=E.map(t,function(e){return null==e?"":e+""})),(r=E.valHooks[this.type]||E.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=E.valHooks[t.type]||E.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),E.extend({valHooks:{option:{get:function(e){var t=E.find.attr(e,"value");return null!=t?t:yt(E.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=E(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=E.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<E.inArray(E.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),E.each(["radio","checkbox"],function(){E.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<E.inArray(E(e).val(),t)}},v.checkOn||(E.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),v.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};E.extend(E.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||S],d=y.call(e,"type")?e.type:e,h=y.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||S,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+E.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[E.expando]?e:new E.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:E.makeArray(t,[e]),c=E.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||S)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),E.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),E.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=E.extend(new E.Event,n,{type:e,isSimulated:!0});E.event.trigger(r,null,t)}}),E.fn.extend({trigger:function(e,t){return this.each(function(){E.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return E.event.trigger(e,t,n,!0)}}),v.focusin||E.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){E.event.simulate(r,e.target,E.event.fix(e))};E.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},St=/\?/;E.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||E.error("Invalid XML: "+(n?E.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Et=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function jt(n,e,r,i){var t;if(Array.isArray(e))E.each(e,function(e,t){r||Et.test(n)?i(n,t):jt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)jt(n+"["+t+"]",e[t],r,i)}E.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!E.isPlainObject(e))E.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},E.fn.extend({serialize:function(){return E.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=E.prop(this,"elements");return e?E.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!E(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=E(this).val();return null==n?null:Array.isArray(n)?E.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var Dt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=S.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function $t(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,E.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Bt(e,t){var n,r,i=E.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&E.extend(!0,e,r),e}Wt.href=Tt.href,E.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":E.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Bt(Bt(e,E.ajaxSettings),t):Bt(E.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,y=E.ajaxSetup({},t),v=y.context||y,m=y.context&&(v.nodeType||v.jquery)?E(v):E.event,x=E.Deferred(),b=E.Callbacks("once memory"),w=y.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(y.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),y.url=((e||y.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),y.type=t.method||t.type||y.method||y.type,y.dataTypes=(y.dataType||"*").toLowerCase().match(P)||[""],null==y.crossDomain){r=S.createElement("a");try{r.href=y.url,r.href=r.href,y.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){y.crossDomain=!0}}if(y.data&&y.processData&&"string"!=typeof y.data&&(y.data=E.param(y.data,y.traditional)),$t(Rt,y,t,T),h)return T;for(i in(g=E.event&&y.global)&&0==E.active++&&E.event.trigger("ajaxStart"),y.type=y.type.toUpperCase(),y.hasContent=!Ot.test(y.type),f=y.url.replace(qt,""),y.hasContent?y.data&&y.processData&&0===(y.contentType||"").indexOf("application/x-www-form-urlencoded")&&(y.data=y.data.replace(Dt,"+")):(o=y.url.slice(f.length),y.data&&(y.processData||"string"==typeof y.data)&&(f+=(St.test(f)?"&":"?")+y.data,delete y.data),!1===y.cache&&(f=f.replace(Lt,"$1"),o=(St.test(f)?"&":"?")+"_="+Ct.guid+++o),y.url=f+o),y.ifModified&&(E.lastModified[f]&&T.setRequestHeader("If-Modified-Since",E.lastModified[f]),E.etag[f]&&T.setRequestHeader("If-None-Match",E.etag[f])),(y.data&&y.hasContent&&!1!==y.contentType||t.contentType)&&T.setRequestHeader("Content-Type",y.contentType),T.setRequestHeader("Accept",y.dataTypes[0]&&y.accepts[y.dataTypes[0]]?y.accepts[y.dataTypes[0]]+("*"!==y.dataTypes[0]?", "+It+"; q=0.01":""):y.accepts["*"]),y.headers)T.setRequestHeader(i,y.headers[i]);if(y.beforeSend&&(!1===y.beforeSend.call(v,T,y)||h))return T.abort();if(u="abort",b.add(y.complete),T.done(y.success),T.fail(y.error),c=$t(Mt,y,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,y]),h)return T;y.async&&0<y.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},y.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(y,T,n)),!i&&-1<E.inArray("script",y.dataTypes)&&E.inArray("json",y.dataTypes)<0&&(y.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(y,s,T,i),i?(y.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(E.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(E.etag[f]=u)),204===e||"HEAD"===y.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(v,[o,l,T]):x.rejectWith(v,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,y,i?o:a]),b.fireWith(v,[T,l]),g&&(m.trigger("ajaxComplete",[T,y]),--E.active||E.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return E.get(e,t,n,"json")},getScript:function(e,t){return E.get(e,void 0,t,"script")}}),E.each(["get","post"],function(e,i){E[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),E.ajax(E.extend({url:e,type:i,dataType:r,data:t,success:n},E.isPlainObject(e)&&e))}}),E.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),E._evalUrl=function(e,t,n){return E.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){E.globalEval(e,t,n)}})},E.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=E(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){E(this).wrapInner(n.call(this,e))}):this.each(function(){var e=E(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){E(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){E(this).replaceWith(this.childNodes)}),this}}),E.expr.pseudos.hidden=function(e){return!E.expr.pseudos.visible(e)},E.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},E.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=E.ajaxSettings.xhr();v.cors=!!zt&&"withCredentials"in zt,v.ajax=zt=!!zt,E.ajaxTransport(function(i){var o,a;if(v.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),E.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),E.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return E.globalEval(e),e}}}),E.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),E.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=E("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),S.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;E.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||E.expando+"_"+Ct.guid++;return this[e]=!0,e}}),E.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||E.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?E(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),v.createHTMLDocument=((Ut=S.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),E.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(v.createHTMLDocument?((r=(t=S.implementation.createHTMLDocument("")).createElement("base")).href=S.location.href,t.head.appendChild(r)):t=S),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&E(o).remove(),E.merge([],i.childNodes)));var r,i,o},E.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=yt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&E.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?E("<div>").append(E.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},E.expr.pseudos.animated=function(t){return E.grep(E.timers,function(e){return t===e.elem}).length},E.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=E.css(e,"position"),c=E(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=E.css(e,"top"),u=E.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,E.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},E.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){E.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===E.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===E.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=E(e).offset()).top+=E.css(e,"borderTopWidth",!0),i.left+=E.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-E.css(r,"marginTop",!0),left:t.left-i.left-E.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===E.css(e,"position"))e=e.offsetParent;return e||re})}}),E.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;E.fn[t]=function(e){return B(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),E.each(["top","left"],function(e,n){E.cssHooks[n]=_e(v.pixelPosition,function(e,t){if(t)return t=Be(e,n),Pe.test(t)?E(e).position()[n]+"px":t})}),E.each({Height:"height",Width:"width"},function(a,s){E.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){E.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return B(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?E.css(e,t,i):E.style(e,t,n,i)},s,n?e:void 0,n)}})}),E.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){E.fn[t]=function(e){return this.on(t,e)}}),E.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){E.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;E.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||E.guid++,i},E.holdReady=function(e){e?E.readyWait++:E.ready(!0)},E.isArray=Array.isArray,E.parseJSON=JSON.parse,E.nodeName=A,E.isFunction=m,E.isWindow=x,E.camelCase=X,E.type=w,E.now=Date.now,E.isNumeric=function(e){var t=E.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},E.trim=function(e){return null==e?"":(e+"").replace(Gt,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return E});var Yt=C.jQuery,Qt=C.$;return E.noConflict=function(e){return C.$===E&&(C.$=Qt),e&&C.jQuery===E&&(C.jQuery=Yt),E},"undefined"==typeof e&&(C.jQuery=C.$=E),E});
;
!function(n,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define("underscore",r):(n="undefined"!=typeof globalThis?globalThis:n||self,function(){var t=n._,e=n._=r();e.noConflict=function(){return n._=t,e}}())}(this,(function(){
//     Underscore.js 1.13.6
//     https://underscorejs.org
//     (c) 2009-2022 Jeremy Ashkenas, Julian Gonggrijp, and DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
var n="1.13.6",r="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global||Function("return this")()||{},t=Array.prototype,e=Object.prototype,u="undefined"!=typeof Symbol?Symbol.prototype:null,o=t.push,i=t.slice,a=e.toString,f=e.hasOwnProperty,c="undefined"!=typeof ArrayBuffer,l="undefined"!=typeof DataView,s=Array.isArray,p=Object.keys,v=Object.create,h=c&&ArrayBuffer.isView,y=isNaN,d=isFinite,g=!{toString:null}.propertyIsEnumerable("toString"),b=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],m=Math.pow(2,53)-1;function j(n,r){return r=null==r?n.length-1:+r,function(){for(var t=Math.max(arguments.length-r,0),e=Array(t),u=0;u<t;u++)e[u]=arguments[u+r];switch(r){case 0:return n.call(this,e);case 1:return n.call(this,arguments[0],e);case 2:return n.call(this,arguments[0],arguments[1],e)}var o=Array(r+1);for(u=0;u<r;u++)o[u]=arguments[u];return o[r]=e,n.apply(this,o)}}function _(n){var r=typeof n;return"function"===r||"object"===r&&!!n}function w(n){return void 0===n}function A(n){return!0===n||!1===n||"[object Boolean]"===a.call(n)}function x(n){var r="[object "+n+"]";return function(n){return a.call(n)===r}}var S=x("String"),O=x("Number"),M=x("Date"),E=x("RegExp"),B=x("Error"),N=x("Symbol"),I=x("ArrayBuffer"),T=x("Function"),k=r.document&&r.document.childNodes;"function"!=typeof/./&&"object"!=typeof Int8Array&&"function"!=typeof k&&(T=function(n){return"function"==typeof n||!1});var D=T,R=x("Object"),F=l&&R(new DataView(new ArrayBuffer(8))),V="undefined"!=typeof Map&&R(new Map),P=x("DataView");var q=F?function(n){return null!=n&&D(n.getInt8)&&I(n.buffer)}:P,U=s||x("Array");function W(n,r){return null!=n&&f.call(n,r)}var z=x("Arguments");!function(){z(arguments)||(z=function(n){return W(n,"callee")})}();var L=z;function $(n){return O(n)&&y(n)}function C(n){return function(){return n}}function K(n){return function(r){var t=n(r);return"number"==typeof t&&t>=0&&t<=m}}function J(n){return function(r){return null==r?void 0:r[n]}}var G=J("byteLength"),H=K(G),Q=/\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;var X=c?function(n){return h?h(n)&&!q(n):H(n)&&Q.test(a.call(n))}:C(!1),Y=J("length");function Z(n,r){r=function(n){for(var r={},t=n.length,e=0;e<t;++e)r[n[e]]=!0;return{contains:function(n){return!0===r[n]},push:function(t){return r[t]=!0,n.push(t)}}}(r);var t=b.length,u=n.constructor,o=D(u)&&u.prototype||e,i="constructor";for(W(n,i)&&!r.contains(i)&&r.push(i);t--;)(i=b[t])in n&&n[i]!==o[i]&&!r.contains(i)&&r.push(i)}function nn(n){if(!_(n))return[];if(p)return p(n);var r=[];for(var t in n)W(n,t)&&r.push(t);return g&&Z(n,r),r}function rn(n,r){var t=nn(r),e=t.length;if(null==n)return!e;for(var u=Object(n),o=0;o<e;o++){var i=t[o];if(r[i]!==u[i]||!(i in u))return!1}return!0}function tn(n){return n instanceof tn?n:this instanceof tn?void(this._wrapped=n):new tn(n)}function en(n){return new Uint8Array(n.buffer||n,n.byteOffset||0,G(n))}tn.VERSION=n,tn.prototype.value=function(){return this._wrapped},tn.prototype.valueOf=tn.prototype.toJSON=tn.prototype.value,tn.prototype.toString=function(){return String(this._wrapped)};var un="[object DataView]";function on(n,r,t,e){if(n===r)return 0!==n||1/n==1/r;if(null==n||null==r)return!1;if(n!=n)return r!=r;var o=typeof n;return("function"===o||"object"===o||"object"==typeof r)&&function n(r,t,e,o){r instanceof tn&&(r=r._wrapped);t instanceof tn&&(t=t._wrapped);var i=a.call(r);if(i!==a.call(t))return!1;if(F&&"[object Object]"==i&&q(r)){if(!q(t))return!1;i=un}switch(i){case"[object RegExp]":case"[object String]":return""+r==""+t;case"[object Number]":return+r!=+r?+t!=+t:0==+r?1/+r==1/t:+r==+t;case"[object Date]":case"[object Boolean]":return+r==+t;case"[object Symbol]":return u.valueOf.call(r)===u.valueOf.call(t);case"[object ArrayBuffer]":case un:return n(en(r),en(t),e,o)}var f="[object Array]"===i;if(!f&&X(r)){if(G(r)!==G(t))return!1;if(r.buffer===t.buffer&&r.byteOffset===t.byteOffset)return!0;f=!0}if(!f){if("object"!=typeof r||"object"!=typeof t)return!1;var c=r.constructor,l=t.constructor;if(c!==l&&!(D(c)&&c instanceof c&&D(l)&&l instanceof l)&&"constructor"in r&&"constructor"in t)return!1}o=o||[];var s=(e=e||[]).length;for(;s--;)if(e[s]===r)return o[s]===t;if(e.push(r),o.push(t),f){if((s=r.length)!==t.length)return!1;for(;s--;)if(!on(r[s],t[s],e,o))return!1}else{var p,v=nn(r);if(s=v.length,nn(t).length!==s)return!1;for(;s--;)if(p=v[s],!W(t,p)||!on(r[p],t[p],e,o))return!1}return e.pop(),o.pop(),!0}(n,r,t,e)}function an(n){if(!_(n))return[];var r=[];for(var t in n)r.push(t);return g&&Z(n,r),r}function fn(n){var r=Y(n);return function(t){if(null==t)return!1;var e=an(t);if(Y(e))return!1;for(var u=0;u<r;u++)if(!D(t[n[u]]))return!1;return n!==hn||!D(t[cn])}}var cn="forEach",ln="has",sn=["clear","delete"],pn=["get",ln,"set"],vn=sn.concat(cn,pn),hn=sn.concat(pn),yn=["add"].concat(sn,cn,ln),dn=V?fn(vn):x("Map"),gn=V?fn(hn):x("WeakMap"),bn=V?fn(yn):x("Set"),mn=x("WeakSet");function jn(n){for(var r=nn(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=n[r[u]];return e}function _n(n){for(var r={},t=nn(n),e=0,u=t.length;e<u;e++)r[n[t[e]]]=t[e];return r}function wn(n){var r=[];for(var t in n)D(n[t])&&r.push(t);return r.sort()}function An(n,r){return function(t){var e=arguments.length;if(r&&(t=Object(t)),e<2||null==t)return t;for(var u=1;u<e;u++)for(var o=arguments[u],i=n(o),a=i.length,f=0;f<a;f++){var c=i[f];r&&void 0!==t[c]||(t[c]=o[c])}return t}}var xn=An(an),Sn=An(nn),On=An(an,!0);function Mn(n){if(!_(n))return{};if(v)return v(n);var r=function(){};r.prototype=n;var t=new r;return r.prototype=null,t}function En(n){return U(n)?n:[n]}function Bn(n){return tn.toPath(n)}function Nn(n,r){for(var t=r.length,e=0;e<t;e++){if(null==n)return;n=n[r[e]]}return t?n:void 0}function In(n,r,t){var e=Nn(n,Bn(r));return w(e)?t:e}function Tn(n){return n}function kn(n){return n=Sn({},n),function(r){return rn(r,n)}}function Dn(n){return n=Bn(n),function(r){return Nn(r,n)}}function Rn(n,r,t){if(void 0===r)return n;switch(null==t?3:t){case 1:return function(t){return n.call(r,t)};case 3:return function(t,e,u){return n.call(r,t,e,u)};case 4:return function(t,e,u,o){return n.call(r,t,e,u,o)}}return function(){return n.apply(r,arguments)}}function Fn(n,r,t){return null==n?Tn:D(n)?Rn(n,r,t):_(n)&&!U(n)?kn(n):Dn(n)}function Vn(n,r){return Fn(n,r,1/0)}function Pn(n,r,t){return tn.iteratee!==Vn?tn.iteratee(n,r):Fn(n,r,t)}function qn(){}function Un(n,r){return null==r&&(r=n,n=0),n+Math.floor(Math.random()*(r-n+1))}tn.toPath=En,tn.iteratee=Vn;var Wn=Date.now||function(){return(new Date).getTime()};function zn(n){var r=function(r){return n[r]},t="(?:"+nn(n).join("|")+")",e=RegExp(t),u=RegExp(t,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,r):n}}var Ln={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},$n=zn(Ln),Cn=zn(_n(Ln)),Kn=tn.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g},Jn=/(.)^/,Gn={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},Hn=/\\|'|\r|\n|\u2028|\u2029/g;function Qn(n){return"\\"+Gn[n]}var Xn=/^\s*(\w|\$)+\s*$/;var Yn=0;function Zn(n,r,t,e,u){if(!(e instanceof r))return n.apply(t,u);var o=Mn(n.prototype),i=n.apply(o,u);return _(i)?i:o}var nr=j((function(n,r){var t=nr.placeholder,e=function(){for(var u=0,o=r.length,i=Array(o),a=0;a<o;a++)i[a]=r[a]===t?arguments[u++]:r[a];for(;u<arguments.length;)i.push(arguments[u++]);return Zn(n,e,this,this,i)};return e}));nr.placeholder=tn;var rr=j((function(n,r,t){if(!D(n))throw new TypeError("Bind must be called on a function");var e=j((function(u){return Zn(n,e,r,this,t.concat(u))}));return e})),tr=K(Y);function er(n,r,t,e){if(e=e||[],r||0===r){if(r<=0)return e.concat(n)}else r=1/0;for(var u=e.length,o=0,i=Y(n);o<i;o++){var a=n[o];if(tr(a)&&(U(a)||L(a)))if(r>1)er(a,r-1,t,e),u=e.length;else for(var f=0,c=a.length;f<c;)e[u++]=a[f++];else t||(e[u++]=a)}return e}var ur=j((function(n,r){var t=(r=er(r,!1,!1)).length;if(t<1)throw new Error("bindAll must be passed function names");for(;t--;){var e=r[t];n[e]=rr(n[e],n)}return n}));var or=j((function(n,r,t){return setTimeout((function(){return n.apply(null,t)}),r)})),ir=nr(or,tn,1);function ar(n){return function(){return!n.apply(this,arguments)}}function fr(n,r){var t;return function(){return--n>0&&(t=r.apply(this,arguments)),n<=1&&(r=null),t}}var cr=nr(fr,2);function lr(n,r,t){r=Pn(r,t);for(var e,u=nn(n),o=0,i=u.length;o<i;o++)if(r(n[e=u[o]],e,n))return e}function sr(n){return function(r,t,e){t=Pn(t,e);for(var u=Y(r),o=n>0?0:u-1;o>=0&&o<u;o+=n)if(t(r[o],o,r))return o;return-1}}var pr=sr(1),vr=sr(-1);function hr(n,r,t,e){for(var u=(t=Pn(t,e,1))(r),o=0,i=Y(n);o<i;){var a=Math.floor((o+i)/2);t(n[a])<u?o=a+1:i=a}return o}function yr(n,r,t){return function(e,u,o){var a=0,f=Y(e);if("number"==typeof o)n>0?a=o>=0?o:Math.max(o+f,a):f=o>=0?Math.min(o+1,f):o+f+1;else if(t&&o&&f)return e[o=t(e,u)]===u?o:-1;if(u!=u)return(o=r(i.call(e,a,f),$))>=0?o+a:-1;for(o=n>0?a:f-1;o>=0&&o<f;o+=n)if(e[o]===u)return o;return-1}}var dr=yr(1,pr,hr),gr=yr(-1,vr);function br(n,r,t){var e=(tr(n)?pr:lr)(n,r,t);if(void 0!==e&&-1!==e)return n[e]}function mr(n,r,t){var e,u;if(r=Rn(r,t),tr(n))for(e=0,u=n.length;e<u;e++)r(n[e],e,n);else{var o=nn(n);for(e=0,u=o.length;e<u;e++)r(n[o[e]],o[e],n)}return n}function jr(n,r,t){r=Pn(r,t);for(var e=!tr(n)&&nn(n),u=(e||n).length,o=Array(u),i=0;i<u;i++){var a=e?e[i]:i;o[i]=r(n[a],a,n)}return o}function _r(n){var r=function(r,t,e,u){var o=!tr(r)&&nn(r),i=(o||r).length,a=n>0?0:i-1;for(u||(e=r[o?o[a]:a],a+=n);a>=0&&a<i;a+=n){var f=o?o[a]:a;e=t(e,r[f],f,r)}return e};return function(n,t,e,u){var o=arguments.length>=3;return r(n,Rn(t,u,4),e,o)}}var wr=_r(1),Ar=_r(-1);function xr(n,r,t){var e=[];return r=Pn(r,t),mr(n,(function(n,t,u){r(n,t,u)&&e.push(n)})),e}function Sr(n,r,t){r=Pn(r,t);for(var e=!tr(n)&&nn(n),u=(e||n).length,o=0;o<u;o++){var i=e?e[o]:o;if(!r(n[i],i,n))return!1}return!0}function Or(n,r,t){r=Pn(r,t);for(var e=!tr(n)&&nn(n),u=(e||n).length,o=0;o<u;o++){var i=e?e[o]:o;if(r(n[i],i,n))return!0}return!1}function Mr(n,r,t,e){return tr(n)||(n=jn(n)),("number"!=typeof t||e)&&(t=0),dr(n,r,t)>=0}var Er=j((function(n,r,t){var e,u;return D(r)?u=r:(r=Bn(r),e=r.slice(0,-1),r=r[r.length-1]),jr(n,(function(n){var o=u;if(!o){if(e&&e.length&&(n=Nn(n,e)),null==n)return;o=n[r]}return null==o?o:o.apply(n,t)}))}));function Br(n,r){return jr(n,Dn(r))}function Nr(n,r,t){var e,u,o=-1/0,i=-1/0;if(null==r||"number"==typeof r&&"object"!=typeof n[0]&&null!=n)for(var a=0,f=(n=tr(n)?n:jn(n)).length;a<f;a++)null!=(e=n[a])&&e>o&&(o=e);else r=Pn(r,t),mr(n,(function(n,t,e){((u=r(n,t,e))>i||u===-1/0&&o===-1/0)&&(o=n,i=u)}));return o}var Ir=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;function Tr(n){return n?U(n)?i.call(n):S(n)?n.match(Ir):tr(n)?jr(n,Tn):jn(n):[]}function kr(n,r,t){if(null==r||t)return tr(n)||(n=jn(n)),n[Un(n.length-1)];var e=Tr(n),u=Y(e);r=Math.max(Math.min(r,u),0);for(var o=u-1,i=0;i<r;i++){var a=Un(i,o),f=e[i];e[i]=e[a],e[a]=f}return e.slice(0,r)}function Dr(n,r){return function(t,e,u){var o=r?[[],[]]:{};return e=Pn(e,u),mr(t,(function(r,u){var i=e(r,u,t);n(o,r,i)})),o}}var Rr=Dr((function(n,r,t){W(n,t)?n[t].push(r):n[t]=[r]})),Fr=Dr((function(n,r,t){n[t]=r})),Vr=Dr((function(n,r,t){W(n,t)?n[t]++:n[t]=1})),Pr=Dr((function(n,r,t){n[t?0:1].push(r)}),!0);function qr(n,r,t){return r in t}var Ur=j((function(n,r){var t={},e=r[0];if(null==n)return t;D(e)?(r.length>1&&(e=Rn(e,r[1])),r=an(n)):(e=qr,r=er(r,!1,!1),n=Object(n));for(var u=0,o=r.length;u<o;u++){var i=r[u],a=n[i];e(a,i,n)&&(t[i]=a)}return t})),Wr=j((function(n,r){var t,e=r[0];return D(e)?(e=ar(e),r.length>1&&(t=r[1])):(r=jr(er(r,!1,!1),String),e=function(n,t){return!Mr(r,t)}),Ur(n,e,t)}));function zr(n,r,t){return i.call(n,0,Math.max(0,n.length-(null==r||t?1:r)))}function Lr(n,r,t){return null==n||n.length<1?null==r||t?void 0:[]:null==r||t?n[0]:zr(n,n.length-r)}function $r(n,r,t){return i.call(n,null==r||t?1:r)}var Cr=j((function(n,r){return r=er(r,!0,!0),xr(n,(function(n){return!Mr(r,n)}))})),Kr=j((function(n,r){return Cr(n,r)}));function Jr(n,r,t,e){A(r)||(e=t,t=r,r=!1),null!=t&&(t=Pn(t,e));for(var u=[],o=[],i=0,a=Y(n);i<a;i++){var f=n[i],c=t?t(f,i,n):f;r&&!t?(i&&o===c||u.push(f),o=c):t?Mr(o,c)||(o.push(c),u.push(f)):Mr(u,f)||u.push(f)}return u}var Gr=j((function(n){return Jr(er(n,!0,!0))}));function Hr(n){for(var r=n&&Nr(n,Y).length||0,t=Array(r),e=0;e<r;e++)t[e]=Br(n,e);return t}var Qr=j(Hr);function Xr(n,r){return n._chain?tn(r).chain():r}function Yr(n){return mr(wn(n),(function(r){var t=tn[r]=n[r];tn.prototype[r]=function(){var n=[this._wrapped];return o.apply(n,arguments),Xr(this,t.apply(tn,n))}})),tn}mr(["pop","push","reverse","shift","sort","splice","unshift"],(function(n){var r=t[n];tn.prototype[n]=function(){var t=this._wrapped;return null!=t&&(r.apply(t,arguments),"shift"!==n&&"splice"!==n||0!==t.length||delete t[0]),Xr(this,t)}})),mr(["concat","join","slice"],(function(n){var r=t[n];tn.prototype[n]=function(){var n=this._wrapped;return null!=n&&(n=r.apply(n,arguments)),Xr(this,n)}}));var Zr=Yr({__proto__:null,VERSION:n,restArguments:j,isObject:_,isNull:function(n){return null===n},isUndefined:w,isBoolean:A,isElement:function(n){return!(!n||1!==n.nodeType)},isString:S,isNumber:O,isDate:M,isRegExp:E,isError:B,isSymbol:N,isArrayBuffer:I,isDataView:q,isArray:U,isFunction:D,isArguments:L,isFinite:function(n){return!N(n)&&d(n)&&!isNaN(parseFloat(n))},isNaN:$,isTypedArray:X,isEmpty:function(n){if(null==n)return!0;var r=Y(n);return"number"==typeof r&&(U(n)||S(n)||L(n))?0===r:0===Y(nn(n))},isMatch:rn,isEqual:function(n,r){return on(n,r)},isMap:dn,isWeakMap:gn,isSet:bn,isWeakSet:mn,keys:nn,allKeys:an,values:jn,pairs:function(n){for(var r=nn(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=[r[u],n[r[u]]];return e},invert:_n,functions:wn,methods:wn,extend:xn,extendOwn:Sn,assign:Sn,defaults:On,create:function(n,r){var t=Mn(n);return r&&Sn(t,r),t},clone:function(n){return _(n)?U(n)?n.slice():xn({},n):n},tap:function(n,r){return r(n),n},get:In,has:function(n,r){for(var t=(r=Bn(r)).length,e=0;e<t;e++){var u=r[e];if(!W(n,u))return!1;n=n[u]}return!!t},mapObject:function(n,r,t){r=Pn(r,t);for(var e=nn(n),u=e.length,o={},i=0;i<u;i++){var a=e[i];o[a]=r(n[a],a,n)}return o},identity:Tn,constant:C,noop:qn,toPath:En,property:Dn,propertyOf:function(n){return null==n?qn:function(r){return In(n,r)}},matcher:kn,matches:kn,times:function(n,r,t){var e=Array(Math.max(0,n));r=Rn(r,t,1);for(var u=0;u<n;u++)e[u]=r(u);return e},random:Un,now:Wn,escape:$n,unescape:Cn,templateSettings:Kn,template:function(n,r,t){!r&&t&&(r=t),r=On({},r,tn.templateSettings);var e=RegExp([(r.escape||Jn).source,(r.interpolate||Jn).source,(r.evaluate||Jn).source].join("|")+"|$","g"),u=0,o="__p+='";n.replace(e,(function(r,t,e,i,a){return o+=n.slice(u,a).replace(Hn,Qn),u=a+r.length,t?o+="'+\n((__t=("+t+"))==null?'':_.escape(__t))+\n'":e?o+="'+\n((__t=("+e+"))==null?'':__t)+\n'":i&&(o+="';\n"+i+"\n__p+='"),r})),o+="';\n";var i,a=r.variable;if(a){if(!Xn.test(a))throw new Error("variable is not a bare identifier: "+a)}else o="with(obj||{}){\n"+o+"}\n",a="obj";o="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+o+"return __p;\n";try{i=new Function(a,"_",o)}catch(n){throw n.source=o,n}var f=function(n){return i.call(this,n,tn)};return f.source="function("+a+"){\n"+o+"}",f},result:function(n,r,t){var e=(r=Bn(r)).length;if(!e)return D(t)?t.call(n):t;for(var u=0;u<e;u++){var o=null==n?void 0:n[r[u]];void 0===o&&(o=t,u=e),n=D(o)?o.call(n):o}return n},uniqueId:function(n){var r=++Yn+"";return n?n+r:r},chain:function(n){var r=tn(n);return r._chain=!0,r},iteratee:Vn,partial:nr,bind:rr,bindAll:ur,memoize:function(n,r){var t=function(e){var u=t.cache,o=""+(r?r.apply(this,arguments):e);return W(u,o)||(u[o]=n.apply(this,arguments)),u[o]};return t.cache={},t},delay:or,defer:ir,throttle:function(n,r,t){var e,u,o,i,a=0;t||(t={});var f=function(){a=!1===t.leading?0:Wn(),e=null,i=n.apply(u,o),e||(u=o=null)},c=function(){var c=Wn();a||!1!==t.leading||(a=c);var l=r-(c-a);return u=this,o=arguments,l<=0||l>r?(e&&(clearTimeout(e),e=null),a=c,i=n.apply(u,o),e||(u=o=null)):e||!1===t.trailing||(e=setTimeout(f,l)),i};return c.cancel=function(){clearTimeout(e),a=0,e=u=o=null},c},debounce:function(n,r,t){var e,u,o,i,a,f=function(){var c=Wn()-u;r>c?e=setTimeout(f,r-c):(e=null,t||(i=n.apply(a,o)),e||(o=a=null))},c=j((function(c){return a=this,o=c,u=Wn(),e||(e=setTimeout(f,r),t&&(i=n.apply(a,o))),i}));return c.cancel=function(){clearTimeout(e),e=o=a=null},c},wrap:function(n,r){return nr(r,n)},negate:ar,compose:function(){var n=arguments,r=n.length-1;return function(){for(var t=r,e=n[r].apply(this,arguments);t--;)e=n[t].call(this,e);return e}},after:function(n,r){return function(){if(--n<1)return r.apply(this,arguments)}},before:fr,once:cr,findKey:lr,findIndex:pr,findLastIndex:vr,sortedIndex:hr,indexOf:dr,lastIndexOf:gr,find:br,detect:br,findWhere:function(n,r){return br(n,kn(r))},each:mr,forEach:mr,map:jr,collect:jr,reduce:wr,foldl:wr,inject:wr,reduceRight:Ar,foldr:Ar,filter:xr,select:xr,reject:function(n,r,t){return xr(n,ar(Pn(r)),t)},every:Sr,all:Sr,some:Or,any:Or,contains:Mr,includes:Mr,include:Mr,invoke:Er,pluck:Br,where:function(n,r){return xr(n,kn(r))},max:Nr,min:function(n,r,t){var e,u,o=1/0,i=1/0;if(null==r||"number"==typeof r&&"object"!=typeof n[0]&&null!=n)for(var a=0,f=(n=tr(n)?n:jn(n)).length;a<f;a++)null!=(e=n[a])&&e<o&&(o=e);else r=Pn(r,t),mr(n,(function(n,t,e){((u=r(n,t,e))<i||u===1/0&&o===1/0)&&(o=n,i=u)}));return o},shuffle:function(n){return kr(n,1/0)},sample:kr,sortBy:function(n,r,t){var e=0;return r=Pn(r,t),Br(jr(n,(function(n,t,u){return{value:n,index:e++,criteria:r(n,t,u)}})).sort((function(n,r){var t=n.criteria,e=r.criteria;if(t!==e){if(t>e||void 0===t)return 1;if(t<e||void 0===e)return-1}return n.index-r.index})),"value")},groupBy:Rr,indexBy:Fr,countBy:Vr,partition:Pr,toArray:Tr,size:function(n){return null==n?0:tr(n)?n.length:nn(n).length},pick:Ur,omit:Wr,first:Lr,head:Lr,take:Lr,initial:zr,last:function(n,r,t){return null==n||n.length<1?null==r||t?void 0:[]:null==r||t?n[n.length-1]:$r(n,Math.max(0,n.length-r))},rest:$r,tail:$r,drop:$r,compact:function(n){return xr(n,Boolean)},flatten:function(n,r){return er(n,r,!1)},without:Kr,uniq:Jr,unique:Jr,union:Gr,intersection:function(n){for(var r=[],t=arguments.length,e=0,u=Y(n);e<u;e++){var o=n[e];if(!Mr(r,o)){var i;for(i=1;i<t&&Mr(arguments[i],o);i++);i===t&&r.push(o)}}return r},difference:Cr,unzip:Hr,transpose:Hr,zip:Qr,object:function(n,r){for(var t={},e=0,u=Y(n);e<u;e++)r?t[n[e]]=r[e]:t[n[e][0]]=n[e][1];return t},range:function(n,r,t){null==r&&(r=n||0,n=0),t||(t=r<n?-1:1);for(var e=Math.max(Math.ceil((r-n)/t),0),u=Array(e),o=0;o<e;o++,n+=t)u[o]=n;return u},chunk:function(n,r){if(null==r||r<1)return[];for(var t=[],e=0,u=n.length;e<u;)t.push(i.call(n,e,e+=r));return t},mixin:Yr,default:tn});return Zr._=Zr,Zr}));;
/*! @drupal/once - v1.0.1 - 2021-06-12 */
var once=function(){"use strict";var n=/[\11\12\14\15\40]+/,e="data-once",t=document;function r(n,t,r){return n[t+"Attribute"](e,r)}function o(e){if("string"!=typeof e)throw new TypeError("once ID must be a string");if(""===e||n.test(e))throw new RangeError("once ID must not be empty or contain spaces");return'[data-once~="'+e+'"]'}function u(n){if(!(n instanceof Element))throw new TypeError("The element must be an instance of Element");return!0}function i(n,e){void 0===e&&(e=t);var r=n;if(null===n)r=[];else{if(!n)throw new TypeError("Selector must not be empty");"string"!=typeof n||e!==t&&!u(e)?n instanceof Element&&(r=[n]):r=e.querySelectorAll(n)}return Array.prototype.slice.call(r)}function c(n,e,t){return e.filter((function(e){var r=u(e)&&e.matches(n);return r&&t&&t(e),r}))}function f(e,t){var o=t.add,u=t.remove,i=[];r(e,"has")&&r(e,"get").trim().split(n).forEach((function(n){i.indexOf(n)<0&&n!==u&&i.push(n)})),o&&i.push(o);var c=i.join(" ");r(e,""===c?"remove":"set",c)}function a(n,e,t){return c(":not("+o(n)+")",i(e,t),(function(e){return f(e,{add:n})}))}return a.remove=function(n,e,t){return c(o(n),i(e,t),(function(e){return f(e,{remove:n})}))},a.filter=function(n,e,t){return c(o(n),i(e,t))},a.find=function(n,e){return i(n?o(n):"[data-once]",e)},a}();

;
(function(r){var n=typeof self=="object"&&self.self===self&&self||typeof global=="object"&&global.global===global&&global;if(typeof define==="function"&&define.amd){define(["underscore","jquery","exports"],function(t,e,i){n.Backbone=r(n,i,t,e)})}else if(typeof exports!=="undefined"){var t=require("underscore"),e;try{e=require("jquery")}catch(t){}r(n,exports,t,e)}else{n.Backbone=r(n,{},n._,n.jQuery||n.Zepto||n.ender||n.$)}})(function(t,h,x,e){var i=t.Backbone;var a=Array.prototype.slice;h.VERSION="1.4.1";h.$=e;h.noConflict=function(){t.Backbone=i;return this};h.emulateHTTP=false;h.emulateJSON=false;var r=h.Events={};var o=/\s+/;var l;var u=function(t,e,i,r,n){var s=0,a;if(i&&typeof i==="object"){if(r!==void 0&&"context"in n&&n.context===void 0)n.context=r;for(a=x.keys(i);s<a.length;s++){e=u(t,e,a[s],i[a[s]],n)}}else if(i&&o.test(i)){for(a=i.split(o);s<a.length;s++){e=t(e,a[s],r,n)}}else{e=t(e,i,r,n)}return e};r.on=function(t,e,i){this._events=u(n,this._events||{},t,e,{context:i,ctx:this,listening:l});if(l){var r=this._listeners||(this._listeners={});r[l.id]=l;l.interop=false}return this};r.listenTo=function(t,e,i){if(!t)return this;var r=t._listenId||(t._listenId=x.uniqueId("l"));var n=this._listeningTo||(this._listeningTo={});var s=l=n[r];if(!s){this._listenId||(this._listenId=x.uniqueId("l"));s=l=n[r]=new p(this,t)}var a=c(t,e,i,this);l=void 0;if(a)throw a;if(s.interop)s.on(e,i);return this};var n=function(t,e,i,r){if(i){var n=t[e]||(t[e]=[]);var s=r.context,a=r.ctx,o=r.listening;if(o)o.count++;n.push({callback:i,context:s,ctx:s||a,listening:o})}return t};var c=function(t,e,i,r){try{t.on(e,i,r)}catch(t){return t}};r.off=function(t,e,i){if(!this._events)return this;this._events=u(s,this._events,t,e,{context:i,listeners:this._listeners});return this};r.stopListening=function(t,e,i){var r=this._listeningTo;if(!r)return this;var n=t?[t._listenId]:x.keys(r);for(var s=0;s<n.length;s++){var a=r[n[s]];if(!a)break;a.obj.off(e,i,this);if(a.interop)a.off(e,i)}if(x.isEmpty(r))this._listeningTo=void 0;return this};var s=function(t,e,i,r){if(!t)return;var n=r.context,s=r.listeners;var a=0,o;if(!e&&!n&&!i){for(o=x.keys(s);a<o.length;a++){s[o[a]].cleanup()}return}o=e?[e]:x.keys(t);for(;a<o.length;a++){e=o[a];var h=t[e];if(!h)break;var l=[];for(var u=0;u<h.length;u++){var c=h[u];if(i&&i!==c.callback&&i!==c.callback._callback||n&&n!==c.context){l.push(c)}else{var f=c.listening;if(f)f.off(e,i)}}if(l.length){t[e]=l}else{delete t[e]}}return t};r.once=function(t,e,i){var r=u(f,{},t,e,this.off.bind(this));if(typeof t==="string"&&i==null)e=void 0;return this.on(r,e,i)};r.listenToOnce=function(t,e,i){var r=u(f,{},e,i,this.stopListening.bind(this,t));return this.listenTo(t,r)};var f=function(t,e,i,r){if(i){var n=t[e]=x.once(function(){r(e,n);i.apply(this,arguments)});n._callback=i}return t};r.trigger=function(t){if(!this._events)return this;var e=Math.max(0,arguments.length-1);var i=Array(e);for(var r=0;r<e;r++)i[r]=arguments[r+1];u(d,this._events,t,void 0,i);return this};var d=function(t,e,i,r){if(t){var n=t[e];var s=t.all;if(n&&s)s=s.slice();if(n)v(n,r);if(s)v(s,[e].concat(r))}return t};var v=function(t,e){var i,r=-1,n=t.length,s=e[0],a=e[1],o=e[2];switch(e.length){case 0:while(++r<n)(i=t[r]).callback.call(i.ctx);return;case 1:while(++r<n)(i=t[r]).callback.call(i.ctx,s);return;case 2:while(++r<n)(i=t[r]).callback.call(i.ctx,s,a);return;case 3:while(++r<n)(i=t[r]).callback.call(i.ctx,s,a,o);return;default:while(++r<n)(i=t[r]).callback.apply(i.ctx,e);return}};var p=function(t,e){this.id=t._listenId;this.listener=t;this.obj=e;this.interop=true;this.count=0;this._events=void 0};p.prototype.on=r.on;p.prototype.off=function(t,e){var i;if(this.interop){this._events=u(s,this._events,t,e,{context:void 0,listeners:void 0});i=!this._events}else{this.count--;i=this.count===0}if(i)this.cleanup()};p.prototype.cleanup=function(){delete this.listener._listeningTo[this.obj._listenId];if(!this.interop)delete this.obj._listeners[this.id]};r.bind=r.on;r.unbind=r.off;x.extend(h,r);var g=h.Model=function(t,e){var i=t||{};e||(e={});this.preinitialize.apply(this,arguments);this.cid=x.uniqueId(this.cidPrefix);this.attributes={};if(e.collection)this.collection=e.collection;if(e.parse)i=this.parse(i,e)||{};var r=x.result(this,"defaults");i=x.defaults(x.extend({},r,i),r);this.set(i,e);this.changed={};this.initialize.apply(this,arguments)};x.extend(g.prototype,r,{changed:null,validationError:null,idAttribute:"id",cidPrefix:"c",preinitialize:function(){},initialize:function(){},toJSON:function(t){return x.clone(this.attributes)},sync:function(){return h.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return x.escape(this.get(t))},has:function(t){return this.get(t)!=null},matches:function(t){return!!x.iteratee(t,this)(this.attributes)},set:function(t,e,i){if(t==null)return this;var r;if(typeof t==="object"){r=t;i=e}else{(r={})[t]=e}i||(i={});if(!this._validate(r,i))return false;var n=i.unset;var s=i.silent;var a=[];var o=this._changing;this._changing=true;if(!o){this._previousAttributes=x.clone(this.attributes);this.changed={}}var h=this.attributes;var l=this.changed;var u=this._previousAttributes;for(var c in r){e=r[c];if(!x.isEqual(h[c],e))a.push(c);if(!x.isEqual(u[c],e)){l[c]=e}else{delete l[c]}n?delete h[c]:h[c]=e}if(this.idAttribute in r){var f=this.id;this.id=this.get(this.idAttribute);this.trigger("changeId",this,f,i)}if(!s){if(a.length)this._pending=i;for(var d=0;d<a.length;d++){this.trigger("change:"+a[d],this,h[a[d]],i)}}if(o)return this;if(!s){while(this._pending){i=this._pending;this._pending=false;this.trigger("change",this,i)}}this._pending=false;this._changing=false;return this},unset:function(t,e){return this.set(t,void 0,x.extend({},e,{unset:true}))},clear:function(t){var e={};for(var i in this.attributes)e[i]=void 0;return this.set(e,x.extend({},t,{unset:true}))},hasChanged:function(t){if(t==null)return!x.isEmpty(this.changed);return x.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?x.clone(this.changed):false;var e=this._changing?this._previousAttributes:this.attributes;var i={};var r;for(var n in t){var s=t[n];if(x.isEqual(e[n],s))continue;i[n]=s;r=true}return r?i:false},previous:function(t){if(t==null||!this._previousAttributes)return null;return this._previousAttributes[t]},previousAttributes:function(){return x.clone(this._previousAttributes)},fetch:function(i){i=x.extend({parse:true},i);var r=this;var n=i.success;i.success=function(t){var e=i.parse?r.parse(t,i):t;if(!r.set(e,i))return false;if(n)n.call(i.context,r,t,i);r.trigger("sync",r,t,i)};G(this,i);return this.sync("read",this,i)},save:function(t,e,i){var r;if(t==null||typeof t==="object"){r=t;i=e}else{(r={})[t]=e}i=x.extend({validate:true,parse:true},i);var n=i.wait;if(r&&!n){if(!this.set(r,i))return false}else if(!this._validate(r,i)){return false}var s=this;var a=i.success;var o=this.attributes;i.success=function(t){s.attributes=o;var e=i.parse?s.parse(t,i):t;if(n)e=x.extend({},r,e);if(e&&!s.set(e,i))return false;if(a)a.call(i.context,s,t,i);s.trigger("sync",s,t,i)};G(this,i);if(r&&n)this.attributes=x.extend({},o,r);var h=this.isNew()?"create":i.patch?"patch":"update";if(h==="patch"&&!i.attrs)i.attrs=r;var l=this.sync(h,this,i);this.attributes=o;return l},destroy:function(e){e=e?x.clone(e):{};var i=this;var r=e.success;var n=e.wait;var s=function(){i.stopListening();i.trigger("destroy",i,i.collection,e)};e.success=function(t){if(n)s();if(r)r.call(e.context,i,t,e);if(!i.isNew())i.trigger("sync",i,t,e)};var t=false;if(this.isNew()){x.defer(e.success)}else{G(this,e);t=this.sync("delete",this,e)}if(!n)s();return t},url:function(){var t=x.result(this,"urlRoot")||x.result(this.collection,"url")||V();if(this.isNew())return t;var e=this.get(this.idAttribute);return t.replace(/[^\/]$/,"$&/")+encodeURIComponent(e)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(t){return this._validate({},x.extend({},t,{validate:true}))},_validate:function(t,e){if(!e.validate||!this.validate)return true;t=x.extend({},this.attributes,t);var i=this.validationError=this.validate(t,e)||null;if(!i)return true;this.trigger("invalid",this,i,x.extend(e,{validationError:i}));return false}});var m=h.Collection=function(t,e){e||(e={});this.preinitialize.apply(this,arguments);if(e.model)this.model=e.model;if(e.comparator!==void 0)this.comparator=e.comparator;this._reset();this.initialize.apply(this,arguments);if(t)this.reset(t,x.extend({silent:true},e))};var w={add:true,remove:true,merge:true};var _={add:true,remove:false};var E=function(t,e,i){i=Math.min(Math.max(i,0),t.length);var r=Array(t.length-i);var n=e.length;var s;for(s=0;s<r.length;s++)r[s]=t[s+i];for(s=0;s<n;s++)t[s+i]=e[s];for(s=0;s<r.length;s++)t[s+n+i]=r[s]};x.extend(m.prototype,r,{model:g,preinitialize:function(){},initialize:function(){},toJSON:function(e){return this.map(function(t){return t.toJSON(e)})},sync:function(){return h.sync.apply(this,arguments)},add:function(t,e){return this.set(t,x.extend({merge:false},e,_))},remove:function(t,e){e=x.extend({},e);var i=!x.isArray(t);t=i?[t]:t.slice();var r=this._removeModels(t,e);if(!e.silent&&r.length){e.changes={added:[],merged:[],removed:r};this.trigger("update",this,e)}return i?r[0]:r},set:function(t,e){if(t==null)return;e=x.extend({},w,e);if(e.parse&&!this._isModel(t)){t=this.parse(t,e)||[]}var i=!x.isArray(t);t=i?[t]:t.slice();var r=e.at;if(r!=null)r=+r;if(r>this.length)r=this.length;if(r<0)r+=this.length+1;var n=[];var s=[];var a=[];var o=[];var h={};var l=e.add;var u=e.merge;var c=e.remove;var f=false;var d=this.comparator&&r==null&&e.sort!==false;var v=x.isString(this.comparator)?this.comparator:null;var p,g;for(g=0;g<t.length;g++){p=t[g];var m=this.get(p);if(m){if(u&&p!==m){var _=this._isModel(p)?p.attributes:p;if(e.parse)_=m.parse(_,e);m.set(_,e);a.push(m);if(d&&!f)f=m.hasChanged(v)}if(!h[m.cid]){h[m.cid]=true;n.push(m)}t[g]=m}else if(l){p=t[g]=this._prepareModel(p,e);if(p){s.push(p);this._addReference(p,e);h[p.cid]=true;n.push(p)}}}if(c){for(g=0;g<this.length;g++){p=this.models[g];if(!h[p.cid])o.push(p)}if(o.length)this._removeModels(o,e)}var y=false;var b=!d&&l&&c;if(n.length&&b){y=this.length!==n.length||x.some(this.models,function(t,e){return t!==n[e]});this.models.length=0;E(this.models,n,0);this.length=this.models.length}else if(s.length){if(d)f=true;E(this.models,s,r==null?this.length:r);this.length=this.models.length}if(f)this.sort({silent:true});if(!e.silent){for(g=0;g<s.length;g++){if(r!=null)e.index=r+g;p=s[g];p.trigger("add",p,this,e)}if(f||y)this.trigger("sort",this,e);if(s.length||o.length||a.length){e.changes={added:s,removed:o,merged:a};this.trigger("update",this,e)}}return i?t[0]:t},reset:function(t,e){e=e?x.clone(e):{};for(var i=0;i<this.models.length;i++){this._removeReference(this.models[i],e)}e.previousModels=this.models;this._reset();t=this.add(t,x.extend({silent:true},e));if(!e.silent)this.trigger("reset",this,e);return t},push:function(t,e){return this.add(t,x.extend({at:this.length},e))},pop:function(t){var e=this.at(this.length-1);return this.remove(e,t)},unshift:function(t,e){return this.add(t,x.extend({at:0},e))},shift:function(t){var e=this.at(0);return this.remove(e,t)},slice:function(){return a.apply(this.models,arguments)},get:function(t){if(t==null)return void 0;return this._byId[t]||this._byId[this.modelId(this._isModel(t)?t.attributes:t,t.idAttribute)]||t.cid&&this._byId[t.cid]},has:function(t){return this.get(t)!=null},at:function(t){if(t<0)t+=this.length;return this.models[t]},where:function(t,e){return this[e?"find":"filter"](t)},findWhere:function(t){return this.where(t,true)},sort:function(t){var e=this.comparator;if(!e)throw new Error("Cannot sort a set without a comparator");t||(t={});var i=e.length;if(x.isFunction(e))e=e.bind(this);if(i===1||x.isString(e)){this.models=this.sortBy(e)}else{this.models.sort(e)}if(!t.silent)this.trigger("sort",this,t);return this},pluck:function(t){return this.map(t+"")},fetch:function(i){i=x.extend({parse:true},i);var r=i.success;var n=this;i.success=function(t){var e=i.reset?"reset":"set";n[e](t,i);if(r)r.call(i.context,n,t,i);n.trigger("sync",n,t,i)};G(this,i);return this.sync("read",this,i)},create:function(t,e){e=e?x.clone(e):{};var r=e.wait;t=this._prepareModel(t,e);if(!t)return false;if(!r)this.add(t,e);var n=this;var s=e.success;e.success=function(t,e,i){if(r)n.add(t,i);if(s)s.call(i.context,t,e,i)};t.save(null,e);return t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models,{model:this.model,comparator:this.comparator})},modelId:function(t,e){return t[e||this.model.prototype.idAttribute||"id"]},values:function(){return new b(this,I)},keys:function(){return new b(this,k)},entries:function(){return new b(this,S)},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(t,e){if(this._isModel(t)){if(!t.collection)t.collection=this;return t}e=e?x.clone(e):{};e.collection=this;var i;if(this.model.prototype){i=new this.model(t,e)}else{i=this.model(t,e)}if(!i.validationError)return i;this.trigger("invalid",this,i.validationError,e);return false},_removeModels:function(t,e){var i=[];for(var r=0;r<t.length;r++){var n=this.get(t[r]);if(!n)continue;var s=this.indexOf(n);this.models.splice(s,1);this.length--;delete this._byId[n.cid];var a=this.modelId(n.attributes,n.idAttribute);if(a!=null)delete this._byId[a];if(!e.silent){e.index=s;n.trigger("remove",n,this,e)}i.push(n);this._removeReference(n,e)}return i},_isModel:function(t){return t instanceof g},_addReference:function(t,e){this._byId[t.cid]=t;var i=this.modelId(t.attributes,t.idAttribute);if(i!=null)this._byId[i]=t;t.on("all",this._onModelEvent,this)},_removeReference:function(t,e){delete this._byId[t.cid];var i=this.modelId(t.attributes,t.idAttribute);if(i!=null)delete this._byId[i];if(this===t.collection)delete t.collection;t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,r){if(e){if((t==="add"||t==="remove")&&i!==this)return;if(t==="destroy")this.remove(e,r);if(t==="changeId"){var n=this.modelId(e.previousAttributes(),e.idAttribute);var s=this.modelId(e.attributes,e.idAttribute);if(n!=null)delete this._byId[n];if(s!=null)this._byId[s]=e}}this.trigger.apply(this,arguments)}});var y=typeof Symbol==="function"&&Symbol.iterator;if(y){m.prototype[y]=m.prototype.values}var b=function(t,e){this._collection=t;this._kind=e;this._index=0};var I=1;var k=2;var S=3;if(y){b.prototype[y]=function(){return this}}b.prototype.next=function(){if(this._collection){if(this._index<this._collection.length){var t=this._collection.at(this._index);this._index++;var e;if(this._kind===I){e=t}else{var i=this._collection.modelId(t.attributes,t.idAttribute);if(this._kind===k){e=i}else{e=[i,t]}}return{value:e,done:false}}this._collection=void 0}return{value:void 0,done:true}};var A=h.View=function(t){this.cid=x.uniqueId("view");this.preinitialize.apply(this,arguments);x.extend(this,x.pick(t,P));this._ensureElement();this.initialize.apply(this,arguments)};var T=/^(\S+)\s*(.*)$/;var P=["model","collection","el","id","attributes","className","tagName","events"];x.extend(A.prototype,r,{tagName:"div",$:function(t){return this.$el.find(t)},preinitialize:function(){},initialize:function(){},render:function(){return this},remove:function(){this._removeElement();this.stopListening();return this},_removeElement:function(){this.$el.remove()},setElement:function(t){this.undelegateEvents();this._setElement(t);this.delegateEvents();return this},_setElement:function(t){this.$el=t instanceof h.$?t:h.$(t);this.el=this.$el[0]},delegateEvents:function(t){t||(t=x.result(this,"events"));if(!t)return this;this.undelegateEvents();for(var e in t){var i=t[e];if(!x.isFunction(i))i=this[i];if(!i)continue;var r=e.match(T);this.delegate(r[1],r[2],i.bind(this))}return this},delegate:function(t,e,i){this.$el.on(t+".delegateEvents"+this.cid,e,i);return this},undelegateEvents:function(){if(this.$el)this.$el.off(".delegateEvents"+this.cid);return this},undelegate:function(t,e,i){this.$el.off(t+".delegateEvents"+this.cid,e,i);return this},_createElement:function(t){return document.createElement(t)},_ensureElement:function(){if(!this.el){var t=x.extend({},x.result(this,"attributes"));if(this.id)t.id=x.result(this,"id");if(this.className)t["class"]=x.result(this,"className");this.setElement(this._createElement(x.result(this,"tagName")));this._setAttributes(t)}else{this.setElement(x.result(this,"el"))}},_setAttributes:function(t){this.$el.attr(t)}});var H=function(r,t,n,s){switch(t){case 1:return function(){return r[n](this[s])};case 2:return function(t){return r[n](this[s],t)};case 3:return function(t,e){return r[n](this[s],C(t,this),e)};case 4:return function(t,e,i){return r[n](this[s],C(t,this),e,i)};default:return function(){var t=a.call(arguments);t.unshift(this[s]);return r[n].apply(r,t)}}};var $=function(i,r,t,n){x.each(t,function(t,e){if(r[e])i.prototype[e]=H(r,t,e,n)})};var C=function(e,t){if(x.isFunction(e))return e;if(x.isObject(e)&&!t._isModel(e))return R(e);if(x.isString(e))return function(t){return t.get(e)};return e};var R=function(t){var e=x.matches(t);return function(t){return e(t.attributes)}};var M={forEach:3,each:3,map:3,collect:3,reduce:0,foldl:0,inject:0,reduceRight:0,foldr:0,find:3,detect:3,filter:3,select:3,reject:3,every:3,all:3,some:3,any:3,include:3,includes:3,contains:3,invoke:0,max:3,min:3,toArray:1,size:1,first:3,head:3,take:3,initial:3,rest:3,tail:3,drop:3,last:3,without:0,difference:0,indexOf:3,shuffle:1,lastIndexOf:3,isEmpty:1,chain:1,sample:3,partition:3,groupBy:3,countBy:3,sortBy:3,indexBy:3,findIndex:3,findLastIndex:3};var N={keys:1,values:1,pairs:1,invert:1,pick:0,omit:0,chain:1,isEmpty:1};x.each([[m,M,"models"],[g,N,"attributes"]],function(t){var i=t[0],e=t[1],r=t[2];i.mixin=function(t){var e=x.reduce(x.functions(t),function(t,e){t[e]=0;return t},{});$(i,t,e,r)};$(i,x,e,r)});h.sync=function(t,e,r){var i=j[t];x.defaults(r||(r={}),{emulateHTTP:h.emulateHTTP,emulateJSON:h.emulateJSON});var n={type:i,dataType:"json"};if(!r.url){n.url=x.result(e,"url")||V()}if(r.data==null&&e&&(t==="create"||t==="update"||t==="patch")){n.contentType="application/json";n.data=JSON.stringify(r.attrs||e.toJSON(r))}if(r.emulateJSON){n.contentType="application/x-www-form-urlencoded";n.data=n.data?{model:n.data}:{}}if(r.emulateHTTP&&(i==="PUT"||i==="DELETE"||i==="PATCH")){n.type="POST";if(r.emulateJSON)n.data._method=i;var s=r.beforeSend;r.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",i);if(s)return s.apply(this,arguments)}}if(n.type!=="GET"&&!r.emulateJSON){n.processData=false}var a=r.error;r.error=function(t,e,i){r.textStatus=e;r.errorThrown=i;if(a)a.call(r.context,t,e,i)};var o=r.xhr=h.ajax(x.extend(n,r));e.trigger("request",e,o,r);return o};var j={create:"POST",update:"PUT",patch:"PATCH",delete:"DELETE",read:"GET"};h.ajax=function(){return h.$.ajax.apply(h.$,arguments)};var O=h.Router=function(t){t||(t={});this.preinitialize.apply(this,arguments);if(t.routes)this.routes=t.routes;this._bindRoutes();this.initialize.apply(this,arguments)};var U=/\((.*?)\)/g;var z=/(\(\?)?:\w+/g;var q=/\*\w+/g;var F=/[\-{}\[\]+?.,\\\^$|#\s]/g;x.extend(O.prototype,r,{preinitialize:function(){},initialize:function(){},route:function(i,r,n){if(!x.isRegExp(i))i=this._routeToRegExp(i);if(x.isFunction(r)){n=r;r=""}if(!n)n=this[r];var s=this;h.history.route(i,function(t){var e=s._extractParameters(i,t);if(s.execute(n,e,r)!==false){s.trigger.apply(s,["route:"+r].concat(e));s.trigger("route",r,e);h.history.trigger("route",s,r,e)}});return this},execute:function(t,e,i){if(t)t.apply(this,e)},navigate:function(t,e){h.history.navigate(t,e);return this},_bindRoutes:function(){if(!this.routes)return;this.routes=x.result(this,"routes");var t,e=x.keys(this.routes);while((t=e.pop())!=null){this.route(t,this.routes[t])}},_routeToRegExp:function(t){t=t.replace(F,"\\$&").replace(U,"(?:$1)?").replace(z,function(t,e){return e?t:"([^/?]+)"}).replace(q,"([^?]*?)");return new RegExp("^"+t+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(t,e){var i=t.exec(e).slice(1);return x.map(i,function(t,e){if(e===i.length-1)return t||null;return t?decodeURIComponent(t):null})}});var B=h.History=function(){this.handlers=[];this.checkUrl=this.checkUrl.bind(this);if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var J=/^[#\/]|\s+$/g;var L=/^\/+|\/+$/g;var W=/#.*$/;B.started=false;x.extend(B.prototype,r,{interval:50,atRoot:function(){var t=this.location.pathname.replace(/[^\/]$/,"$&/");return t===this.root&&!this.getSearch()},matchRoot:function(){var t=this.decodeFragment(this.location.pathname);var e=t.slice(0,this.root.length-1)+"/";return e===this.root},decodeFragment:function(t){return decodeURI(t.replace(/%25/g,"%2525"))},getSearch:function(){var t=this.location.href.replace(/#.*/,"").match(/\?.+/);return t?t[0]:""},getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getPath:function(){var t=this.decodeFragment(this.location.pathname+this.getSearch()).slice(this.root.length-1);return t.charAt(0)==="/"?t.slice(1):t},getFragment:function(t){if(t==null){if(this._usePushState||!this._wantsHashChange){t=this.getPath()}else{t=this.getHash()}}return t.replace(J,"")},start:function(t){if(B.started)throw new Error("Backbone.history has already been started");B.started=true;this.options=x.extend({root:"/"},this.options,t);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._hasHashChange="onhashchange"in window&&(document.documentMode===void 0||document.documentMode>7);this._useHashChange=this._wantsHashChange&&this._hasHashChange;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.history&&this.history.pushState);this._usePushState=this._wantsPushState&&this._hasPushState;this.fragment=this.getFragment();this.root=("/"+this.root+"/").replace(L,"/");if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot()){var e=this.root.slice(0,-1)||"/";this.location.replace(e+"#"+this.getPath());return true}else if(this._hasPushState&&this.atRoot()){this.navigate(this.getHash(),{replace:true})}}if(!this._hasHashChange&&this._wantsHashChange&&!this._usePushState){this.iframe=document.createElement("iframe");this.iframe.src="javascript:0";this.iframe.style.display="none";this.iframe.tabIndex=-1;var i=document.body;var r=i.insertBefore(this.iframe,i.firstChild).contentWindow;r.document.open();r.document.close();r.location.hash="#"+this.fragment}var n=window.addEventListener||function(t,e){return attachEvent("on"+t,e)};if(this._usePushState){n("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){n("hashchange",this.checkUrl,false)}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}if(!this.options.silent)return this.loadUrl()},stop:function(){var t=window.removeEventListener||function(t,e){return detachEvent("on"+t,e)};if(this._usePushState){t("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){t("hashchange",this.checkUrl,false)}if(this.iframe){document.body.removeChild(this.iframe);this.iframe=null}if(this._checkUrlInterval)clearInterval(this._checkUrlInterval);B.started=false},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if(e===this.fragment&&this.iframe){e=this.getHash(this.iframe.contentWindow)}if(e===this.fragment)return false;if(this.iframe)this.navigate(e);this.loadUrl()},loadUrl:function(e){if(!this.matchRoot())return false;e=this.fragment=this.getFragment(e);return x.some(this.handlers,function(t){if(t.route.test(e)){t.callback(e);return true}})},navigate:function(t,e){if(!B.started)return false;if(!e||e===true)e={trigger:!!e};t=this.getFragment(t||"");var i=this.root;if(t===""||t.charAt(0)==="?"){i=i.slice(0,-1)||"/"}var r=i+t;t=t.replace(W,"");var n=this.decodeFragment(t);if(this.fragment===n)return;this.fragment=n;if(this._usePushState){this.history[e.replace?"replaceState":"pushState"]({},document.title,r)}else if(this._wantsHashChange){this._updateHash(this.location,t,e.replace);if(this.iframe&&t!==this.getHash(this.iframe.contentWindow)){var s=this.iframe.contentWindow;if(!e.replace){s.document.open();s.document.close()}this._updateHash(s.location,t,e.replace)}}else{return this.location.assign(r)}if(e.trigger)return this.loadUrl(t)},_updateHash:function(t,e,i){if(i){var r=t.href.replace(/(javascript:|#).*$/,"");t.replace(r+"#"+e)}else{t.hash="#"+e}}});h.history=new B;var D=function(t,e){var i=this;var r;if(t&&x.has(t,"constructor")){r=t.constructor}else{r=function(){return i.apply(this,arguments)}}x.extend(r,i,e);r.prototype=x.create(i.prototype,t);r.prototype.constructor=r;r.__super__=i.prototype;return r};g.extend=m.extend=O.extend=A.extend=B.extend=D;var V=function(){throw new Error('A "url" property or function must be specified')};var G=function(e,i){var r=i.error;i.error=function(t){if(r)r.call(i.context,e,t,i);e.trigger("error",e,t,i)}};return h});

window.drupalTranslations = {"strings":{"":{"Save":"Guardar","Status message":"Mensaje de estado","Error message":"Mensaje de error","Warning message":"Mensaje de advertencia","An AJAX HTTP error occurred.":"Hubo un error HTTP AJAX.","HTTP Result Code: !status":"C\u00f3digo de Resultado HTTP: !status","StatusText: !statusText":"StatusText: !statusText","ResponseText: !responseText":"ResponseText: !responseText","ReadyState: !readyState":"ReadyState: !readyState","CustomMessage: !customMessage":"CustomMessage: !customMessage","Please wait...":"Espere, por favor...","The callback URL is not local and not trusted: !url":"La URL de callback (llamada) no es local y no es confiable: !url","An error occurred during the execution of the Ajax response: !error":"Ocurri\u00f3 un error durante la ejecuci\u00f3n de la respuesta Ajax: !error","Changed":"Modificado","Home":"Inicio","Next":"Siguiente","closed":"cerrado","Cancel":"Cancelar","Edit":"Editar","Open":"Abierta","Add":"Agregar","Continue":"Continuar","Close":"Cerrar","Select all rows in this table":"Seleccionar todas las filas de esta tabla","Deselect all rows in this table":"Quitar la selecci\u00f3n a todas las filas de esta tabla","Extend":"Ampliar","Not published":"No publicado","Not promoted":"No publicado en p\u00e1gina principal","By @name on @date":"Por @name en @date","By @name":"Por @name","Not in menu":"No est\u00e1 en un men\u00fa","Alias: @alias":"Alias: @alias","No alias":"Sin alias","@label":"@label","New revision":"Nueva revisi\u00f3n","Drag to re-order":"Arrastre para reordenar","No revision":"Sin revisi\u00f3n","Requires a title":"Necesita un t\u00edtulo","Not restricted":"Sin restricci\u00f3n","(active tab)":"(solapa activa)","Restricted to certain pages":"Restringido a algunas p\u00e1ginas","The block cannot be placed in this region.":"El bloque no se puede colocar en esta regi\u00f3n.","Hide summary":"Ocultar resumen","Edit summary":"Editar resumen","Don\u0027t display post information":"No mostrar informaci\u00f3n del env\u00edo","Collapse":"Plegar","The selected file %filename cannot be uploaded. Only files with the following extensions are allowed: %extensions.":"El archivo seleccionado %filename no se puede subir al servidor. Solo se permiten archivos con las siguientes extensiones: %extensions.","Show row weights":"Mostrar pesos de la fila","Hide row weights":"Ocultar pesos de la fila","Choose a file":"Elija un archivo","Apply (all displays)":"Aplicar (todas las presentaciones)","Apply (this display)":"Aplicar (esta presentaci\u00f3n)","Revert to default":"Volver a los valores predeterminados","Needs to be updated":"Necesita ser actualizado","Does not need to be updated":"No necesita ser actualizado","Show all columns":"Mostrar todas las columnas","List additional actions":"Lista adicional de acciones","Flag other translations as outdated":"Marcar las otras traducciones como obsoletas","Do not flag other translations as outdated":"No marcar las otras traducciones como obsoletas","opened":"abierto","Horizontal orientation":"Orientaci\u00f3n horizontal","Vertical orientation":"Orientaci\u00f3n vertical","Tray orientation changed to @orientation.":"La orientaci\u00f3n de la bandeja se ha cambiado a @orientation.","You have unsaved changes.":"Hay cambios sin guardar.","@action @title configuration options":"@action @title opciones de configuraci\u00f3n","Press the esc key to exit.":"Presionar tecla esc para salir.","!tour_item of !total":"!tour_item de !total","End tour":"Final del recorrido","Changing the text format to %text_format will permanently remove content that is not allowed in that text format.\u003Cbr\u003E\u003Cbr\u003ESave your changes before switching the text format to avoid losing data.":"Cambiar el formato de texto a %text_format eliminar\u00e1 permanentemente el contenido que no est\u00e1 permitido en ese formato de texto.\u003Cbr\u003E\u003Cbr\u003EGuarde sus datos antes de cambiar el formato de texto para evitar perder datos.","Leave preview?":"\u00bfSalir de la vista previa?","Leave preview":"Salir de la vista previa","Tray \u0022@tray\u0022 @action.":"Bandeja \u0022@tray\u0022 @action","Tray @action.":"Bandeja @action.","Hide lower priority columns":"Ocultar columnas de menor prioridad","!modules modules are available in the modified list.":"!modules m\u00f3dulos est\u00e1n disponibles en la lista modificada.","Authored on @date":"Escrito el @date","Text alternative":"Texto alternativo","Decorative image":"Imagen decorativa","Add missing alternative text":"A\u00f1ade el texto alternativo que falta","Change image alternative text":"Modificar el texto alternativo de la imagen","@fieldName has changed to @fieldValue":"@fieldName ha cambiado a @fieldValue","Pause":"Pausa"}},"pluralFormula":{"1":0,"default":1}};;
/**
 * @file
 * Parse inline JSON and initialize the drupalSettings global object.
 */

(function () {
  // Use direct child elements to harden against XSS exploits when CSP is on.
  const settingsElement = document.querySelector(
    'head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]',
  );

  /**
   * Variable generated by Drupal with all the configuration created from PHP.
   *
   * @global
   *
   * @type {object}
   */
  window.drupalSettings = {};

  if (settingsElement !== null) {
    window.drupalSettings = JSON.parse(settingsElement.textContent);
  }
})();
;
/**
 * @file
 * Defines the Drupal JavaScript API.
 */

/**
 * A jQuery object, typically the return value from a `$(selector)` call.
 *
 * Holds an HTMLElement or a collection of HTMLElements.
 *
 * @typedef {object} jQuery
 *
 * @prop {number} length=0
 *   Number of elements contained in the jQuery object.
 */

/**
 * Variable generated by Drupal that holds all translated strings from PHP.
 *
 * Content of this variable is automatically created by Drupal when using the
 * Interface Translation module. It holds the translation of strings used on
 * the page.
 *
 * This variable is used to pass data from the backend to the frontend. Data
 * contained in `drupalSettings` is used during behavior initialization.
 *
 * @global
 *
 * @var {object} drupalTranslations
 */

/**
 * Global Drupal object.
 *
 * All Drupal JavaScript APIs are contained in this namespace.
 *
 * @global
 *
 * @namespace
 */
window.Drupal = { behaviors: {}, locale: {} };

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it in an anonymous closure.
(function (
  Drupal,
  drupalSettings,
  drupalTranslations,
  console,
  Proxy,
  Reflect,
) {
  /**
   * Helper to rethrow errors asynchronously.
   *
   * This way Errors bubbles up outside of the original callstack, making it
   * easier to debug errors in the browser.
   *
   * @param {Error|string} error
   *   The error to be thrown.
   */
  Drupal.throwError = function (error) {
    setTimeout(() => {
      throw error;
    }, 0);
  };

  /**
   * Custom error thrown after attach/detach if one or more behaviors failed.
   * Initializes the JavaScript behaviors for page loads and Ajax requests.
   *
   * @callback Drupal~behaviorAttach
   *
   * @param {HTMLDocument|HTMLElement} context
   *   An element to detach behaviors from.
   * @param {?object} settings
   *   An object containing settings for the current context. It is rarely used.
   *
   * @see Drupal.attachBehaviors
   */

  /**
   * Reverts and cleans up JavaScript behavior initialization.
   *
   * @callback Drupal~behaviorDetach
   *
   * @param {HTMLDocument|HTMLElement} context
   *   An element to attach behaviors to.
   * @param {object} settings
   *   An object containing settings for the current context.
   * @param {string} trigger
   *   One of `'unload'`, `'move'`, or `'serialize'`.
   *
   * @see Drupal.detachBehaviors
   */

  /**
   * @typedef {object} Drupal~behavior
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Function run on page load and after an Ajax call.
   * @prop {Drupal~behaviorDetach} [detach]
   *   Function run when content is serialized or removed from the page.
   */

  /**
   * Holds all initialization methods.
   *
   * @namespace Drupal.behaviors
   *
   * @type {Object.<string, Drupal~behavior>}
   */

  /**
   * Defines a behavior to be run during attach and detach phases.
   *
   * Attaches all registered behaviors to a page element.
   *
   * Behaviors are event-triggered actions that attach to page elements,
   * enhancing default non-JavaScript UIs. Behaviors are registered in the
   * {@link Drupal.behaviors} object using the method 'attach' and optionally
   * also 'detach'.
   *
   * {@link Drupal.attachBehaviors} is added below to the `jQuery.ready` event
   * and therefore runs on initial page load. Developers implementing Ajax in
   * their solutions should also call this function after new page content has
   * been loaded, feeding in an element to be processed, in order to attach all
   * behaviors to the new content.
   *
   * Behaviors should use `var elements =
   * once('behavior-name', selector, context);` to ensure the behavior is
   * attached only once to a given element. (Doing so enables the reprocessing
   * of given elements, which may be needed on occasion despite the ability to
   * limit behavior attachment to a particular element.)
   *
   * @example
   * Drupal.behaviors.behaviorName = {
   *   attach: function (context, settings) {
   *     // ...
   *   },
   *   detach: function (context, settings, trigger) {
   *     // ...
   *   }
   * };
   *
   * @param {HTMLDocument|HTMLElement} [context=document]
   *   An element to attach behaviors to.
   * @param {object} [settings=drupalSettings]
   *   An object containing settings for the current context. If none is given,
   *   the global {@link drupalSettings} object is used.
   *
   * @see Drupal~behaviorAttach
   * @see Drupal.detachBehaviors
   *
   * @throws {Drupal~DrupalBehaviorError}
   */
  Drupal.attachBehaviors = function (context, settings) {
    context = context || document;
    settings = settings || drupalSettings;
    const behaviors = Drupal.behaviors;
    // Execute all of them.
    Object.keys(behaviors || {}).forEach((i) => {
      if (typeof behaviors[i].attach === 'function') {
        // Don't stop the execution of behaviors in case of an error.
        try {
          behaviors[i].attach(context, settings);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  /**
   * Detaches registered behaviors from a page element.
   *
   * Developers implementing Ajax in their solutions should call this function
   * before page content is about to be removed, feeding in an element to be
   * processed, in order to allow special behaviors to detach from the content.
   *
   * Such implementations should use `once.filter()` and `once.remove()` to find
   * elements with their corresponding `Drupal.behaviors.behaviorName.attach`
   * implementation, i.e. `once.remove('behaviorName', selector, context)`,
   * to ensure the behavior is detached only from previously processed elements.
   *
   * @param {HTMLDocument|HTMLElement} [context=document]
   *   An element to detach behaviors from.
   * @param {object} [settings=drupalSettings]
   *   An object containing settings for the current context. If none given,
   *   the global {@link drupalSettings} object is used.
   * @param {string} [trigger='unload']
   *   A string containing what's causing the behaviors to be detached. The
   *   possible triggers are:
   *   - `'unload'`: The context element is being removed from the DOM.
   *   - `'move'`: The element is about to be moved within the DOM (for example,
   *     during a tabledrag row swap). After the move is completed,
   *     {@link Drupal.attachBehaviors} is called, so that the behavior can undo
   *     whatever it did in response to the move. Many behaviors won't need to
   *     do anything simply in response to the element being moved, but because
   *     IFRAME elements reload their "src" when being moved within the DOM,
   *     behaviors bound to IFRAME elements (like WYSIWYG editors) may need to
   *     take some action.
   *   - `'serialize'`: When an Ajax form is submitted, this is called with the
   *     form as the context. This provides every behavior within the form an
   *     opportunity to ensure that the field elements have correct content
   *     in them before the form is serialized. The canonical use-case is so
   *     that WYSIWYG editors can update the hidden textarea to which they are
   *     bound.
   *
   * @throws {Drupal~DrupalBehaviorError}
   *
   * @see Drupal~behaviorDetach
   * @see Drupal.attachBehaviors
   */
  Drupal.detachBehaviors = function (context, settings, trigger) {
    context = context || document;
    settings = settings || drupalSettings;
    trigger = trigger || 'unload';
    const behaviors = Drupal.behaviors;
    // Execute all of them.
    Object.keys(behaviors || {}).forEach((i) => {
      if (typeof behaviors[i].detach === 'function') {
        // Don't stop the execution of behaviors in case of an error.
        try {
          behaviors[i].detach(context, settings, trigger);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  /**
   * Encodes special characters in a plain-text string for display as HTML.
   *
   * @param {string} str
   *   The string to be encoded.
   *
   * @return {string}
   *   The encoded string.
   *
   * @ingroup sanitization
   */
  Drupal.checkPlain = function (str) {
    str = str
      .toString()
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
    return str;
  };

  /**
   * Replaces placeholders with sanitized values in a string.
   *
   * @param {string} str
   *   A string with placeholders.
   * @param {object} args
   *   An object of replacements pairs to make. Incidences of any key in this
   *   array are replaced with the corresponding value. Based on the first
   *   character of the key, the value is escaped and/or themed:
   *    - `'!variable'`: inserted as is.
   *    - `'@variable'`: escape plain text to HTML ({@link Drupal.checkPlain}).
   *    - `'%variable'`: escape text and theme as a placeholder for user-
   *      submitted content ({@link Drupal.checkPlain} +
   *      `{@link Drupal.theme}('placeholder')`).
   *
   * @return {string}
   *   The formatted string.
   *
   * @see Drupal.t
   */
  Drupal.formatString = function (str, args) {
    // Keep args intact.
    const processedArgs = {};
    // Transform arguments before inserting them.
    Object.keys(args || {}).forEach((key) => {
      switch (key.charAt(0)) {
        // Escaped only.
        case '@':
          processedArgs[key] = Drupal.checkPlain(args[key]);
          break;

        // Pass-through.
        case '!':
          processedArgs[key] = args[key];
          break;

        // Escaped and placeholder.
        default:
          processedArgs[key] = Drupal.theme('placeholder', args[key]);
          break;
      }
    });

    return Drupal.stringReplace(str, processedArgs, null);
  };

  /**
   * Replaces substring.
   *
   * The longest keys will be tried first. Once a substring has been replaced,
   * its new value will not be searched again.
   *
   * @param {string} str
   *   A string with placeholders.
   * @param {object} args
   *   Key-value pairs.
   * @param {Array|null} keys
   *   Array of keys from `args`. Internal use only.
   *
   * @return {string}
   *   The replaced string.
   */
  Drupal.stringReplace = function (str, args, keys) {
    if (str.length === 0) {
      return str;
    }

    // If the array of keys is not passed then collect the keys from the args.
    if (!Array.isArray(keys)) {
      keys = Object.keys(args || {});

      // Order the keys by the character length. The shortest one is the first.
      keys.sort((a, b) => a.length - b.length);
    }

    if (keys.length === 0) {
      return str;
    }

    // Take next longest one from the end.
    const key = keys.pop();
    const fragments = str.split(key);

    if (keys.length) {
      for (let i = 0; i < fragments.length; i++) {
        // Process each fragment with a copy of remaining keys.
        fragments[i] = Drupal.stringReplace(fragments[i], args, keys.slice(0));
      }
    }

    return fragments.join(args[key]);
  };

  /**
   * Translates strings to the page language, or a given language.
   *
   * See the documentation of the server-side t() function for further details.
   *
   * @param {string} str
   *   A string containing the English text to translate.
   * @param {Object.<string, string>} [args]
   *   An object of replacements pairs to make after translation. Incidences
   *   of any key in this array are replaced with the corresponding value.
   *   See {@link Drupal.formatString}.
   * @param {object} [options]
   *   Additional options for translation.
   * @param {string} [options.context='']
   *   The context the source string belongs to.
   *
   * @return {string}
   *   The formatted string.
   *   The translated string.
   */
  Drupal.t = function (str, args, options) {
    options = options || {};
    options.context = options.context || '';

    // Fetch the localized version of the string.
    if (
      typeof drupalTranslations !== 'undefined' &&
      drupalTranslations.strings &&
      drupalTranslations.strings[options.context] &&
      drupalTranslations.strings[options.context][str]
    ) {
      str = drupalTranslations.strings[options.context][str];
    }

    if (args) {
      str = Drupal.formatString(str, args);
    }
    return str;
  };

  /**
   * Returns the URL to a Drupal page.
   *
   * @param {string} path
   *   Drupal path to transform to URL.
   *
   * @return {string}
   *   The full URL.
   */
  Drupal.url = function (path) {
    return drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + path;
  };

  /**
   * Returns the passed in URL as an absolute URL.
   *
   * @param {string} url
   *   The URL string to be normalized to an absolute URL.
   *
   * @return {string}
   *   The normalized, absolute URL.
   *
   * @see https://github.com/angular/angular.js/blob/v1.4.4/src/ng/urlUtils.js
   * @see https://grack.com/blog/2009/11/17/absolutizing-url-in-javascript
   * @see https://github.com/jquery/jquery-ui/blob/1.11.4/ui/tabs.js#L53
   */
  Drupal.url.toAbsolute = function (url) {
    const urlParsingNode = document.createElement('a');

    // Decode the URL first; this is required by IE <= 6. Decoding non-UTF-8
    // strings may throw an exception.
    try {
      url = decodeURIComponent(url);
    } catch (e) {
      // Empty.
    }

    urlParsingNode.setAttribute('href', url);

    // IE <= 7 normalizes the URL when assigned to the anchor node similar to
    // the other browsers.
    return urlParsingNode.cloneNode(false).href;
  };

  /**
   * Returns true if the URL is within Drupal's base path.
   *
   * @param {string} url
   *   The URL string to be tested.
   *
   * @return {boolean}
   *   `true` if local.
   *
   * @see https://github.com/jquery/jquery-ui/blob/1.11.4/ui/tabs.js#L58
   */
  Drupal.url.isLocal = function (url) {
    // Always use browser-derived absolute URLs in the comparison, to avoid
    // attempts to break out of the base path using directory traversal.
    let absoluteUrl = Drupal.url.toAbsolute(url);
    let { protocol } = window.location;

    // Consider URLs that match this site's base URL but use HTTPS instead of HTTP
    // as local as well.
    if (protocol === 'http:' && absoluteUrl.indexOf('https:') === 0) {
      protocol = 'https:';
    }
    let baseUrl = `${protocol}//${
      window.location.host
    }${drupalSettings.path.baseUrl.slice(0, -1)}`;

    // Decoding non-UTF-8 strings may throw an exception.
    try {
      absoluteUrl = decodeURIComponent(absoluteUrl);
    } catch (e) {
      // Empty.
    }
    try {
      baseUrl = decodeURIComponent(baseUrl);
    } catch (e) {
      // Empty.
    }

    // The given URL matches the site's base URL, or has a path under the site's
    // base URL.
    return absoluteUrl === baseUrl || absoluteUrl.indexOf(`${baseUrl}/`) === 0;
  };

  /**
   * Formats a string containing a count of items.
   *
   * This function ensures that the string is pluralized correctly. Since
   * {@link Drupal.t} is called by this function, make sure not to pass
   * already-localized strings to it.
   *
   * See the documentation of the server-side
   * \Drupal\Core\StringTranslation\TranslationInterface::formatPlural()
   * function for more details.
   *
   * @param {number} count
   *   The item count to display.
   * @param {string} singular
   *   The string for the singular case. Please make sure it is clear this is
   *   singular, to ease translation (e.g. use "1 new comment" instead of "1
   *   new"). Do not use @count in the singular string.
   * @param {string} plural
   *   The string for the plural case. Please make sure it is clear this is
   *   plural, to ease translation. Use @count in place of the item count, as in
   *   "@count new comments".
   * @param {object} [args]
   *   An object of replacements pairs to make after translation. Incidences
   *   of any key in this array are replaced with the corresponding value.
   *   See {@link Drupal.formatString}.
   *   Note that you do not need to include @count in this array.
   *   This replacement is done automatically for the plural case.
   * @param {object} [options]
   *   The options to pass to the {@link Drupal.t} function.
   *
   * @return {string}
   *   A translated string.
   */
  Drupal.formatPlural = function (count, singular, plural, args, options) {
    args = args || {};
    args['@count'] = count;

    const pluralDelimiter = drupalSettings.pluralDelimiter;
    const translations = Drupal.t(
      singular + pluralDelimiter + plural,
      args,
      options,
    ).split(pluralDelimiter);
    let index = 0;

    // Determine the index of the plural form.
    if (
      typeof drupalTranslations !== 'undefined' &&
      drupalTranslations.pluralFormula
    ) {
      index =
        count in drupalTranslations.pluralFormula
          ? drupalTranslations.pluralFormula[count]
          : drupalTranslations.pluralFormula.default;
    } else if (args['@count'] !== 1) {
      index = 1;
    }

    return translations[index];
  };

  /**
   * Encodes a Drupal path for use in a URL.
   *
   * For aesthetic reasons slashes are not escaped.
   *
   * @param {string} item
   *   Unencoded path.
   *
   * @return {string}
   *   The encoded path.
   */
  Drupal.encodePath = function (item) {
    return window.encodeURIComponent(item).replace(/%2F/g, '/');
  };

  /**
   * Triggers deprecation error.
   *
   * Deprecation errors are only triggered if deprecation errors haven't
   * been suppressed.
   *
   * @param {Object} deprecation
   *   The deprecation options.
   * @param {string} deprecation.message
   *   The deprecation message.
   *
   * @see https://www.drupal.org/core/deprecation#javascript
   */
  Drupal.deprecationError = ({ message }) => {
    if (
      drupalSettings.suppressDeprecationErrors === false &&
      typeof console !== 'undefined' &&
      console.warn
    ) {
      console.warn(`[Deprecation] ${message}`);
    }
  };

  /**
   * Triggers deprecation error when object property is being used.
   *
   * @param {Object} deprecation
   *   The deprecation options.
   * @param {Object} deprecation.target
   *   The targeted object.
   * @param {string} deprecation.deprecatedProperty
   *   A key of the deprecated property.
   * @param {string} deprecation.message
   *   The deprecation message.
   * @returns {Object}
   *
   * @see https://www.drupal.org/core/deprecation#javascript
   */
  Drupal.deprecatedProperty = ({ target, deprecatedProperty, message }) => {
    // Proxy and Reflect are not supported by all browsers. Unsupported browsers
    // are ignored since this is a development feature.
    if (!Proxy || !Reflect) {
      return target;
    }

    return new Proxy(target, {
      get: (target, key, ...rest) => {
        if (key === deprecatedProperty) {
          Drupal.deprecationError({ message });
        }
        return Reflect.get(target, key, ...rest);
      },
    });
  };

  /**
   * Generates the themed representation of a Drupal object.
   *
   * All requests for themed output must go through this function. It examines
   * the request and routes it to the appropriate theme function. If the current
   * theme does not provide an override function, the generic theme function is
   * called.
   *
   * @example
   * <caption>To retrieve the HTML for text that should be emphasized and
   * displayed as a placeholder inside a sentence.</caption>
   * Drupal.theme('placeholder', text);
   *
   * @namespace
   *
   * @param {function} func
   *   The name of the theme function to call.
   * @param {...args}
   *   Additional arguments to pass along to the theme function.
   *
   * @return {string|object|HTMLElement|jQuery}
   *   Any data the theme function returns. This could be a plain HTML string,
   *   but also a complex object.
   */
  Drupal.theme = function (func, ...args) {
    if (func in Drupal.theme) {
      return Drupal.theme[func](...args);
    }
  };

  /**
   * Formats text for emphasized display in a placeholder inside a sentence.
   *
   * @param {string} str
   *   The text to format (plain-text).
   *
   * @return {string}
   *   The formatted text (html).
   */
  Drupal.theme.placeholder = function (str) {
    return `<em class="placeholder">${Drupal.checkPlain(str)}</em>`;
  };
})(
  Drupal,
  window.drupalSettings,
  window.drupalTranslations,
  window.console,
  window.Proxy,
  window.Reflect,
);
;
// Allow other JavaScript libraries to use $.
if (window.jQuery) {
  jQuery.noConflict();
}

// Class indicating that JS is enabled; used for styling purpose.
document.documentElement.className += ' js';

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it in an anonymous closure.
(function (Drupal, drupalSettings) {
  /**
   * Calls callback when document ready.
   *
   * @param {function} callback
   *   The function to be called on document ready.
   */
  const domReady = (callback) => {
    const listener = () => {
      callback();
      document.removeEventListener('DOMContentLoaded', listener);
    };
    if (document.readyState !== 'loading') {
      setTimeout(callback, 0);
    } else {
      document.addEventListener('DOMContentLoaded', listener);
    }
  };

  // Attach all behaviors.
  domReady(() => {
    Drupal.attachBehaviors(document, drupalSettings);
  });
})(Drupal, window.drupalSettings);
;
/**
 * @file
 * Attaches behaviors for the Contextual module.
 */

(function ($, Drupal, drupalSettings, _, Backbone, JSON, storage) {
  const options = $.extend(
    drupalSettings.contextual,
    // Merge strings on top of drupalSettings so that they are not mutable.
    {
      strings: {
        open: Drupal.t('Open'),
        close: Drupal.t('Close'),
      },
    },
  );

  // Clear the cached contextual links whenever the current user's set of
  // permissions changes.
  const cachedPermissionsHash = storage.getItem(
    'Drupal.contextual.permissionsHash',
  );
  const permissionsHash = drupalSettings.user.permissionsHash;
  if (cachedPermissionsHash !== permissionsHash) {
    if (typeof permissionsHash === 'string') {
      _.chain(storage)
        .keys()
        .each((key) => {
          if (key.substring(0, 18) === 'Drupal.contextual.') {
            storage.removeItem(key);
          }
        });
    }
    storage.setItem('Drupal.contextual.permissionsHash', permissionsHash);
  }

  /**
   * Determines if a contextual link is nested & overlapping, if so: adjusts it.
   *
   * This only deals with two levels of nesting; deeper levels are not touched.
   *
   * @param {jQuery} $contextual
   *   A contextual links placeholder DOM element, containing the actual
   *   contextual links as rendered by the server.
   */
  function adjustIfNestedAndOverlapping($contextual) {
    const $contextuals = $contextual
      // @todo confirm that .closest() is not sufficient
      .parents('.contextual-region')
      .eq(-1)
      .find('.contextual');

    // Early-return when there's no nesting.
    if ($contextuals.length <= 1) {
      return;
    }

    // If the two contextual links overlap, then we move the second one.
    const firstTop = $contextuals.eq(0).offset().top;
    const secondTop = $contextuals.eq(1).offset().top;
    if (firstTop === secondTop) {
      const $nestedContextual = $contextuals.eq(1);

      // Retrieve height of nested contextual link.
      let height = 0;
      const $trigger = $nestedContextual.find('.trigger');
      // Elements with the .visually-hidden class have no dimensions, so this
      // class must be temporarily removed to the calculate the height.
      $trigger.removeClass('visually-hidden');
      height = $nestedContextual.height();
      $trigger.addClass('visually-hidden');

      // Adjust nested contextual link's position.
      $nestedContextual.css({ top: $nestedContextual.position().top + height });
    }
  }

  /**
   * Initializes a contextual link: updates its DOM, sets up model and views.
   *
   * @param {jQuery} $contextual
   *   A contextual links placeholder DOM element, containing the actual
   *   contextual links as rendered by the server.
   * @param {string} html
   *   The server-side rendered HTML for this contextual link.
   */
  function initContextual($contextual, html) {
    const $region = $contextual.closest('.contextual-region');
    const contextual = Drupal.contextual;

    $contextual
      // Update the placeholder to contain its rendered contextual links.
      .html(html)
      // Use the placeholder as a wrapper with a specific class to provide
      // positioning and behavior attachment context.
      .addClass('contextual')
      // Ensure a trigger element exists before the actual contextual links.
      .prepend(Drupal.theme('contextualTrigger'));

    // Set the destination parameter on each of the contextual links.
    const destination = `destination=${Drupal.encodePath(
      Drupal.url(drupalSettings.path.currentPath + window.location.search),
    )}`;
    $contextual.find('.contextual-links a').each(function () {
      const url = this.getAttribute('href');
      const glue = url.indexOf('?') === -1 ? '?' : '&';
      this.setAttribute('href', url + glue + destination);
    });

    let title = '';
    const $regionHeading = $region.find('h2');
    if ($regionHeading.length) {
      title = $regionHeading[0].textContent.trim();
    }
    // Create a model and the appropriate views.
    const model = new contextual.StateModel({
      title,
    });
    const viewOptions = $.extend({ el: $contextual, model }, options);
    contextual.views.push({
      visual: new contextual.VisualView(viewOptions),
      aural: new contextual.AuralView(viewOptions),
      keyboard: new contextual.KeyboardView(viewOptions),
    });
    contextual.regionViews.push(
      new contextual.RegionView($.extend({ el: $region, model }, options)),
    );

    // Add the model to the collection. This must happen after the views have
    // been associated with it, otherwise collection change event handlers can't
    // trigger the model change event handler in its views.
    contextual.collection.add(model);

    // Let other JavaScript react to the adding of a new contextual link.
    $(document).trigger(
      'drupalContextualLinkAdded',
      Drupal.deprecatedProperty({
        target: {
          $el: $contextual,
          $region,
          model,
        },
        deprecatedProperty: 'model',
        message:
          'The model property is deprecated in drupal:9.4.0 and is removed from drupal:11.0.0. There is no replacement.',
      }),
    );

    // Fix visual collisions between contextual link triggers.
    adjustIfNestedAndOverlapping($contextual);
  }

  /**
   * Attaches outline behavior for regions associated with contextual links.
   *
   * Events
   *   Contextual triggers an event that can be used by other scripts.
   *   - drupalContextualLinkAdded: Triggered when a contextual link is added.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *  Attaches the outline behavior to the right context.
   */
  Drupal.behaviors.contextual = {
    attach(context) {
      const $context = $(context);

      // Find all contextual links placeholders, if any.
      let $placeholders = $(
        once('contextual-render', '[data-contextual-id]', context),
      );
      if ($placeholders.length === 0) {
        return;
      }

      // Collect the IDs for all contextual links placeholders.
      const ids = [];
      $placeholders.each(function () {
        ids.push({
          id: $(this).attr('data-contextual-id'),
          token: $(this).attr('data-contextual-token'),
        });
      });

      const uncachedIDs = [];
      const uncachedTokens = [];
      ids.forEach((contextualID) => {
        const html = storage.getItem(`Drupal.contextual.${contextualID.id}`);
        if (html && html.length) {
          // Initialize after the current execution cycle, to make the AJAX
          // request for retrieving the uncached contextual links as soon as
          // possible, but also to ensure that other Drupal behaviors have had
          // the chance to set up an event listener on the Backbone collection
          // Drupal.contextual.collection.
          window.setTimeout(() => {
            initContextual(
              $context
                .find(`[data-contextual-id="${contextualID.id}"]:empty`)
                .eq(0),
              html,
            );
          });
          return;
        }
        uncachedIDs.push(contextualID.id);
        uncachedTokens.push(contextualID.token);
      });

      // Perform an AJAX request to let the server render the contextual links
      // for each of the placeholders.
      if (uncachedIDs.length > 0) {
        $.ajax({
          url: Drupal.url('contextual/render'),
          type: 'POST',
          data: { 'ids[]': uncachedIDs, 'tokens[]': uncachedTokens },
          dataType: 'json',
          success(results) {
            _.each(results, (html, contextualID) => {
              // Store the metadata.
              storage.setItem(`Drupal.contextual.${contextualID}`, html);
              // If the rendered contextual links are empty, then the current
              // user does not have permission to access the associated links:
              // don't render anything.
              if (html.length > 0) {
                // Update the placeholders to contain its rendered contextual
                // links. Usually there will only be one placeholder, but it's
                // possible for multiple identical placeholders exist on the
                // page (probably because the same content appears more than
                // once).
                $placeholders = $context.find(
                  `[data-contextual-id="${contextualID}"]`,
                );

                // Initialize the contextual links.
                for (let i = 0; i < $placeholders.length; i++) {
                  initContextual($placeholders.eq(i), html);
                }
              }
            });
          },
        });
      }
    },
  };

  /**
   * Namespace for contextual related functionality.
   *
   * @namespace
   *
   * @private
   */
  Drupal.contextual = {
    /**
     * The {@link Drupal.contextual.View} instances associated with each list
     * element of contextual links.
     *
     * @type {Array}
     *
     * @deprecated in drupal:9.4.0 and is removed from drupal:11.0.0. There is no
     *  replacement.
     */
    views: [],

    /**
     * The {@link Drupal.contextual.RegionView} instances associated with each
     * contextual region element.
     *
     * @type {Array}
     *
     * @deprecated in drupal:9.4.0 and is removed from drupal:11.0.0. There is no
     *  replacement.
     */
    regionViews: [],
  };

  /**
   * A Backbone.Collection of {@link Drupal.contextual.StateModel} instances.
   *
   * @type {Backbone.Collection}
   *
   * @deprecated in drupal:9.4.0 and is removed from drupal:11.0.0. There is no
   *  replacement.
   */
  Drupal.contextual.collection = new Backbone.Collection([], {
    model: Drupal.contextual.StateModel,
  });

  /**
   * A trigger is an interactive element often bound to a click handler.
   *
   * @return {string}
   *   A string representing a DOM fragment.
   */
  Drupal.theme.contextualTrigger = function () {
    return '<button class="trigger visually-hidden focusable" type="button"></button>';
  };

  /**
   * Bind Ajax contextual links when added.
   *
   * @param {jQuery.Event} event
   *   The `drupalContextualLinkAdded` event.
   * @param {object} data
   *   An object containing the data relevant to the event.
   *
   * @listens event:drupalContextualLinkAdded
   */
  $(document).on('drupalContextualLinkAdded', (event, data) => {
    Drupal.ajax.bindAjaxLinks(data.$el[0]);
  });
})(
  jQuery,
  Drupal,
  drupalSettings,
  _,
  Backbone,
  window.JSON,
  window.sessionStorage,
);
;
/**
 * @file
 * A Backbone Model for the state of a contextual link's trigger, list & region.
 */

(function (Drupal, Backbone) {
  /**
   * Models the state of a contextual link's trigger, list & region.
   *
   * @constructor
   *
   * @augments Backbone.Model
   *
   * @deprecated in drupal:9.4.0 and is removed from drupal:11.0.0. There is no
   *  replacement.
   */
  Drupal.contextual.StateModel = Backbone.Model.extend(
    /** @lends Drupal.contextual.StateModel# */ {
      /**
       * @type {object}
       *
       * @prop {string} title
       * @prop {boolean} regionIsHovered
       * @prop {boolean} hasFocus
       * @prop {boolean} isOpen
       * @prop {boolean} isLocked
       */
      defaults: /** @lends Drupal.contextual.StateModel# */ {
        /**
         * The title of the entity to which these contextual links apply.
         *
         * @type {string}
         */
        title: '',

        /**
         * Represents if the contextual region is being hovered.
         *
         * @type {boolean}
         */
        regionIsHovered: false,

        /**
         * Represents if the contextual trigger or options have focus.
         *
         * @type {boolean}
         */
        hasFocus: false,

        /**
         * Represents if the contextual options for an entity are available to
         * be selected (i.e. whether the list of options is visible).
         *
         * @type {boolean}
         */
        isOpen: false,

        /**
         * When the model is locked, the trigger remains active.
         *
         * @type {boolean}
         */
        isLocked: false,
      },

      /**
       * Opens or closes the contextual link.
       *
       * If it is opened, then also give focus.
       *
       * @return {Drupal.contextual.StateModel}
       *   The current contextual state model.
       */
      toggleOpen() {
        const newIsOpen = !this.get('isOpen');
        this.set('isOpen', newIsOpen);
        if (newIsOpen) {
          this.focus();
        }
        return this;
      },

      /**
       * Closes this contextual link.
       *
       * Does not call blur() because we want to allow a contextual link to have
       * focus, yet be closed for example when hovering.
       *
       * @return {Drupal.contextual.StateModel}
       *   The current contextual state model.
       */
      close() {
        this.set('isOpen', false);
        return this;
      },

      /**
       * Gives focus to this contextual link.
       *
       * Also closes + removes focus from every other contextual link.
       *
       * @return {Drupal.contextual.StateModel}
       *   The current contextual state model.
       */
      focus() {
        this.set('hasFocus', true);
        const cid = this.cid;
        this.collection.each((model) => {
          if (model.cid !== cid) {
            model.close().blur();
          }
        });
        return this;
      },

      /**
       * Removes focus from this contextual link, unless it is open.
       *
       * @return {Drupal.contextual.StateModel}
       *   The current contextual state model.
       */
      blur() {
        if (!this.get('isOpen')) {
          this.set('hasFocus', false);
        }
        return this;
      },
    },
  );
})(Drupal, Backbone);
;
/**
 * @file
 * A Backbone View that provides the aural view of a contextual link.
 */

(function (Drupal, Backbone) {
  /**
   * @deprecated in drupal:9.4.0 and is removed from drupal:11.0.0. There is no
   *  replacement.
   */
  Drupal.contextual.AuralView = Backbone.View.extend(
    /** @lends Drupal.contextual.AuralView# */ {
      /**
       * Renders the aural view of a contextual link (i.e. screen reader support).
       *
       * @constructs
       *
       * @augments Backbone.View
       *
       * @param {object} options
       *   Options for the view.
       */
      initialize(options) {
        this.options = options;

        this.listenTo(this.model, 'change', this.render);

        // Initial render.
        this.render();
      },

      /**
       * {@inheritdoc}
       */
      render() {
        const isOpen = this.model.get('isOpen');

        // Set the hidden property of the links.
        this.$el.find('.contextual-links').prop('hidden', !isOpen);

        // Update the view of the trigger.
        const $trigger = this.$el.find('.trigger');
        $trigger
          .each((index, element) => {
            element.textContent = Drupal.t(
              '@action @title configuration options',
              {
                '@action': !isOpen
                  ? this.options.strings.open
                  : this.options.strings.close,
                '@title': this.model.get('title'),
              },
            );
          })
          .attr('aria-pressed', isOpen);
      },
    },
  );
})(Drupal, Backbone);
;
/**
 * @file
 * A Backbone View that provides keyboard interaction for a contextual link.
 */

(function (Drupal, Backbone) {
  /**
   * @deprecated in drupal:9.4.0 and is removed from drupal:11.0.0. There is no
   *  replacement.
   */
  Drupal.contextual.KeyboardView = Backbone.View.extend(
    /** @lends Drupal.contextual.KeyboardView# */ {
      /**
       * @type {object}
       */
      events: {
        'focus .trigger': 'focus',
        'focus .contextual-links a': 'focus',
        'blur .trigger': function () {
          this.model.blur();
        },
        'blur .contextual-links a': function () {
          // Set up a timeout to allow a user to tab between the trigger and the
          // contextual links without the menu dismissing.
          const that = this;
          this.timer = window.setTimeout(() => {
            that.model.close().blur();
          }, 150);
        },
      },

      /**
       * Provides keyboard interaction for a contextual link.
       *
       * @constructs
       *
       * @augments Backbone.View
       */
      initialize() {
        /**
         * The timer is used to create a delay before dismissing the contextual
         * links on blur. This is only necessary when keyboard users tab into
         * contextual links without edit mode (i.e. without TabbingManager).
         * That means that if we decide to disable tabbing of contextual links
         * without edit mode, all this timer logic can go away.
         *
         * @type {NaN|number}
         */
        this.timer = NaN;
      },

      /**
       * Sets focus on the model; Clears the timer that dismisses the links.
       */
      focus() {
        // Clear the timeout that might have been set by blurring a link.
        window.clearTimeout(this.timer);
        this.model.focus();
      },
    },
  );
})(Drupal, Backbone);
;
/**
 * @file
 * A Backbone View that renders the visual view of a contextual region element.
 */

(function (Drupal, Backbone) {
  /**
   * @deprecated in drupal:9.4.0 and is removed from drupal:11.0.0. There is no
   *  replacement.
   */
  Drupal.contextual.RegionView = Backbone.View.extend(
    /** @lends Drupal.contextual.RegionView# */ {
      /**
       * Events for the Backbone view.
       *
       * @return {object}
       *   A mapping of events to be used in the view.
       */
      events() {
        // Used for tracking the presence of touch events. When true, the
        // mousemove and mouseenter event handlers are effectively disabled.
        // This is used instead of preventDefault() on touchstart as some
        // touchstart events are not cancelable.
        let touchStart = false;
        return {
          touchstart() {
            // Set to true so the mouseenter and mouseleave events that follow
            // know to not execute any hover related logic.
            touchStart = true;
          },
          mouseenter() {
            if (!touchStart) {
              this.model.set('regionIsHovered', true);
            }
          },
          mouseleave() {
            if (!touchStart) {
              this.model.close().blur().set('regionIsHovered', false);
            }
          },
          mousemove() {
            // Because there are scenarios where there are both touchscreens
            // and pointer devices, the touchStart flag should be set back to
            // false after mouseenter and mouseleave complete. It will be set to
            // true if another touchstart event occurs.
            touchStart = false;
          },
        };
      },

      /**
       * Renders the visual view of a contextual region element.
       *
       * @constructs
       *
       * @augments Backbone.View
       */
      initialize() {
        this.listenTo(this.model, 'change:hasFocus', this.render);
      },

      /**
       * {@inheritdoc}
       *
       * @return {Drupal.contextual.RegionView}
       *   The current contextual region view.
       */
      render() {
        this.$el.toggleClass('focus', this.model.get('hasFocus'));

        return this;
      },
    },
  );
})(Drupal, Backbone);
;
/**
 * @file
 * A Backbone View that provides the visual view of a contextual link.
 */

(function (Drupal, Backbone) {
  /**
   * @deprecated in drupal:9.4.0 and is removed from drupal:11.0.0. There is no
   *  replacement.
   */
  Drupal.contextual.VisualView = Backbone.View.extend(
    /** @lends Drupal.contextual.VisualView# */ {
      /**
       * Events for the Backbone view.
       *
       * @return {object}
       *   A mapping of events to be used in the view.
       */
      events() {
        // Prevents delay and simulated mouse events.
        const touchEndToClick = function (event) {
          event.preventDefault();
          event.target.click();
        };

        // Used for tracking the presence of touch events. When true, the
        // mousemove and mouseenter event handlers are effectively disabled.
        // This is used instead of preventDefault() on touchstart as some
        // touchstart events are not cancelable.
        let touchStart = false;

        return {
          touchstart() {
            // Set to true so the mouseenter events that follows knows to not
            // execute any hover related logic.
            touchStart = true;
          },
          mouseenter() {
            // We only want mouse hover events on non-touch.
            if (!touchStart) {
              this.model.focus();
            }
          },
          mousemove() {
            // Because there are scenarios where there are both touchscreens
            // and pointer devices, the touchStart flag should be set back to
            // false after mouseenter and mouseleave complete. It will be set to
            // true if another touchstart event occurs.
            touchStart = false;
          },
          'click .trigger': function () {
            this.model.toggleOpen();
          },
          'touchend .trigger': touchEndToClick,
          'click .contextual-links a': function () {
            this.model.close().blur();
          },
          'touchend .contextual-links a': touchEndToClick,
        };
      },

      /**
       * Renders the visual view of a contextual link. Listens to mouse & touch.
       *
       * @constructs
       *
       * @augments Backbone.View
       */
      initialize() {
        this.listenTo(this.model, 'change', this.render);
      },

      /**
       * {@inheritdoc}
       *
       * @return {Drupal.contextual.VisualView}
       *   The current contextual visual view.
       */
      render() {
        const isOpen = this.model.get('isOpen');
        // The trigger should be visible when:
        //  - the mouse hovered over the region,
        //  - the trigger is locked,
        //  - and for as long as the contextual menu is open.
        const isVisible =
          this.model.get('isLocked') ||
          this.model.get('regionIsHovered') ||
          isOpen;

        this.$el
          // The open state determines if the links are visible.
          .toggleClass('open', isOpen)
          // Update the visibility of the trigger.
          .find('.trigger')
          .toggleClass('visually-hidden', !isVisible);

        // Nested contextual region handling: hide any nested contextual triggers.
        if ('isOpen' in this.model.changed) {
          this.$el
            .closest('.contextual-region')
            .find('.contextual .trigger:not(:first)')
            .toggle(!isOpen);
        }

        return this;
      },
    },
  );
})(Drupal, Backbone);
;
/*!
* tabbable 6.0.1
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):(e="undefined"!=typeof globalThis?globalThis:e||self,function(){var n=e.tabbable,o=e.tabbable={};t(o),o.noConflict=function(){return e.tabbable=n,o}}())}(this,(function(e){"use strict";var t=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],n=t.join(","),o="undefined"==typeof Element,r=o?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,a=!o&&Element.prototype.getRootNode?function(e){return e.getRootNode()}:function(e){return e.ownerDocument},i=function(e,t,o){var a=Array.prototype.slice.apply(e.querySelectorAll(n));return t&&r.call(e,n)&&a.unshift(e),a=a.filter(o)},l=function e(t,o,a){for(var i=[],l=Array.from(t);l.length;){var u=l.shift();if("SLOT"===u.tagName){var c=u.assignedElements(),d=e(c.length?c:u.children,!0,a);a.flatten?i.push.apply(i,d):i.push({scopeParent:u,candidates:d})}else{r.call(u,n)&&a.filter(u)&&(o||!t.includes(u))&&i.push(u);var f=u.shadowRoot||"function"==typeof a.getShadowRoot&&a.getShadowRoot(u),s=!a.shadowRootFilter||a.shadowRootFilter(u);if(f&&s){var p=e(!0===f?u.children:f.children,!0,a);a.flatten?i.push.apply(i,p):i.push({scopeParent:u,candidates:p})}else l.unshift.apply(l,u.children)}}return i},u=function(e,t){return e.tabIndex<0&&(t||/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||e.isContentEditable)&&isNaN(parseInt(e.getAttribute("tabindex"),10))?0:e.tabIndex},c=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},d=function(e){return"INPUT"===e.tagName},f=function(e){return function(e){return d(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,n=e.form||a(e),o=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=o(window.CSS.escape(e.name));else try{t=o(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var r=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form);return!r||r===e}(e)},s=function(e){var t=e.getBoundingClientRect(),n=t.width,o=t.height;return 0===n&&0===o},p=function(e,t){var n=t.displayCheck,o=t.getShadowRoot;if("hidden"===getComputedStyle(e).visibility)return!0;var i=r.call(e,"details>summary:first-of-type")?e.parentElement:e;if(r.call(i,"details:not([open]) *"))return!0;if(n&&"full"!==n&&"legacy-full"!==n){if("non-zero-area"===n)return s(e)}else{if("function"==typeof o){for(var l=e;e;){var u=e.parentElement,c=a(e);if(u&&!u.shadowRoot&&!0===o(u))return s(e);e=e.assignedSlot?e.assignedSlot:u||c===e.ownerDocument?u:c.host}e=l}if(function(e){for(var t,n=a(e).host,o=!!(null!==(t=n)&&void 0!==t&&t.ownerDocument.contains(n)||e.ownerDocument.contains(e));!o&&n;){var r;o=!(null===(r=n=a(n).host)||void 0===r||!r.ownerDocument.contains(n))}return o}(e))return!e.getClientRects().length;if("legacy-full"!==n)return!0}return!1},h=function(e,t){return!(t.disabled||function(e){return d(e)&&"hidden"===e.type}(t)||p(t,e)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var o=t.children.item(n);if("LEGEND"===o.tagName)return!!r.call(t,"fieldset[disabled] *")||!o.contains(e)}return!0}t=t.parentElement}return!1}(t))},m=function(e,t){return!(f(t)||u(t)<0||!h(e,t))},b=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},y=function e(t){var n=[],o=[];return t.forEach((function(t,r){var a=!!t.scopeParent,i=a?t.scopeParent:t,l=u(i,a),c=a?e(t.candidates):i;0===l?a?n.push.apply(n,c):n.push(i):o.push({documentOrder:r,tabIndex:l,item:t,isScope:a,content:c})})),o.sort(c).reduce((function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e}),[]).concat(n)},g=t.concat("iframe").join(",");e.focusable=function(e,t){return(t=t||{}).getShadowRoot?l([e],t.includeContainer,{filter:h.bind(null,t),flatten:!0,getShadowRoot:t.getShadowRoot}):i(e,t.includeContainer,h.bind(null,t))},e.isFocusable=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==r.call(e,g)&&h(t,e)},e.isTabbable=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==r.call(e,n)&&m(t,e)},e.tabbable=function(e,t){var n;return n=(t=t||{}).getShadowRoot?l([e],t.includeContainer,{filter:m.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:b}):i(e,t.includeContainer,m.bind(null,t)),y(n)},Object.defineProperty(e,"__esModule",{value:!0})}));

;
/**
 * @file
 * Progress bar.
 */

(function ($, Drupal) {
  /**
   * Theme function for the progress bar.
   *
   * @param {string} id
   *   The id for the progress bar.
   *
   * @return {string}
   *   The HTML for the progress bar.
   */
  Drupal.theme.progressBar = function (id) {
    return (
      `<div id="${id}" class="progress" aria-live="polite">` +
      '<div class="progress__label">&nbsp;</div>' +
      '<div class="progress__track"><div class="progress__bar"></div></div>' +
      '<div class="progress__percentage"></div>' +
      '<div class="progress__description">&nbsp;</div>' +
      '</div>'
    );
  };

  /**
   * A progressbar object. Initialized with the given id. Must be inserted into
   * the DOM afterwards through progressBar.element.
   *
   * Method is the function which will perform the HTTP request to get the
   * progress bar state. Either "GET" or "POST".
   *
   * @example
   * pb = new Drupal.ProgressBar('myProgressBar');
   * some_element.appendChild(pb.element);
   *
   * @constructor
   *
   * @param {string} id
   *   The id for the progressbar.
   * @param {function} updateCallback
   *   Callback to run on update.
   * @param {string} method
   *   HTTP method to use.
   * @param {function} errorCallback
   *   Callback to call on error.
   */
  Drupal.ProgressBar = function (id, updateCallback, method, errorCallback) {
    this.id = id;
    this.method = method || 'GET';
    this.updateCallback = updateCallback;
    this.errorCallback = errorCallback;

    // The WAI-ARIA setting aria-live="polite" will announce changes after
    // users
    // have completed their current activity and not interrupt the screen
    // reader.
    this.element = $(Drupal.theme('progressBar', id));
  };

  $.extend(
    Drupal.ProgressBar.prototype,
    /** @lends Drupal.ProgressBar# */ {
      /**
       * Set the percentage and status message for the progressbar.
       *
       * @param {number} percentage
       *   The progress percentage.
       * @param {string} message
       *   The message to show the user.
       * @param {string} label
       *   The text for the progressbar label.
       */
      setProgress(percentage, message, label) {
        if (percentage >= 0 && percentage <= 100) {
          $(this.element)
            .find('div.progress__bar')
            .css('width', `${percentage}%`);
          $(this.element)
            .find('div.progress__percentage')
            .html(`${percentage}%`);
        }
        $('div.progress__description', this.element).html(message);
        $('div.progress__label', this.element).html(label);
        if (this.updateCallback) {
          this.updateCallback(percentage, message, this);
        }
      },

      /**
       * Start monitoring progress via Ajax.
       *
       * @param {string} uri
       *   The URI to use for monitoring.
       * @param {number} delay
       *   The delay for calling the monitoring URI.
       */
      startMonitoring(uri, delay) {
        this.delay = delay;
        this.uri = uri;
        this.sendPing();
      },

      /**
       * Stop monitoring progress via Ajax.
       */
      stopMonitoring() {
        clearTimeout(this.timer);
        // This allows monitoring to be stopped from within the callback.
        this.uri = null;
      },

      /**
       * Request progress data from server.
       */
      sendPing() {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        if (this.uri) {
          const pb = this;
          // When doing a post request, you need non-null data. Otherwise a
          // HTTP 411 or HTTP 406 (with Apache mod_security) error may result.
          let uri = this.uri;
          if (uri.indexOf('?') === -1) {
            uri += '?';
          } else {
            uri += '&';
          }
          uri += '_format=json';
          $.ajax({
            type: this.method,
            url: uri,
            data: '',
            dataType: 'json',
            success(progress) {
              // Display errors.
              if (progress.status === 0) {
                pb.displayError(progress.data);
                return;
              }
              // Update display.
              pb.setProgress(
                progress.percentage,
                progress.message,
                progress.label,
              );
              // Schedule next timer.
              pb.timer = setTimeout(() => {
                pb.sendPing();
              }, pb.delay);
            },
            error(xmlhttp) {
              const e = new Drupal.AjaxError(xmlhttp, pb.uri);
              pb.displayError(`<pre>${e.message}</pre>`);
            },
          });
        }
      },

      /**
       * Display errors on the page.
       *
       * @param {string} string
       *   The error message to show the user.
       */
      displayError(string) {
        const error = $('<div class="messages messages--error"></div>').html(
          string,
        );
        $(this.element).before(error).hide();

        if (this.errorCallback) {
          this.errorCallback(this);
        }
      },
    },
  );
})(jQuery, Drupal);
;
loadjs=function(){var h=function(){},c={},u={},f={};function o(e,n){if(e){var r=f[e];if(u[e]=n,r)for(;r.length;)r[0](e,n),r.splice(0,1)}}function l(e,n){e.call&&(e={success:e}),n.length?(e.error||h)(n):(e.success||h)(e)}function d(r,t,s,i){var c,o,e=document,n=s.async,u=(s.numRetries||0)+1,f=s.before||h,l=r.replace(/[\?|#].*$/,""),a=r.replace(/^(css|img)!/,"");i=i||0,/(^css!|\.css$)/.test(l)?((o=e.createElement("link")).rel="stylesheet",o.href=a,(c="hideFocus"in o)&&o.relList&&(c=0,o.rel="preload",o.as="style")):/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(l)?(o=e.createElement("img")).src=a:((o=e.createElement("script")).src=r,o.async=void 0===n||n),!(o.onload=o.onerror=o.onbeforeload=function(e){var n=e.type[0];if(c)try{o.sheet.cssText.length||(n="e")}catch(e){18!=e.code&&(n="e")}if("e"==n){if((i+=1)<u)return d(r,t,s,i)}else if("preload"==o.rel&&"style"==o.as)return o.rel="stylesheet";t(r,n,e.defaultPrevented)})!==f(r,o)&&e.head.appendChild(o)}function r(e,n,r){var t,s;if(n&&n.trim&&(t=n),s=(t?r:n)||{},t){if(t in c)throw"LoadJS";c[t]=!0}function i(n,r){!function(e,t,n){var r,s,i=(e=e.push?e:[e]).length,c=i,o=[];for(r=function(e,n,r){if("e"==n&&o.push(e),"b"==n){if(!r)return;o.push(e)}--i||t(o)},s=0;s<c;s++)d(e[s],r,n)}(e,function(e){l(s,e),n&&l({success:n,error:r},e),o(t,e)},s)}if(s.returnPromise)return new Promise(i);i()}return r.ready=function(e,n){return function(e,r){e=e.push?e:[e];var n,t,s,i=[],c=e.length,o=c;for(n=function(e,n){n.length&&i.push(e),--o||r(i)};c--;)t=e[c],(s=u[t])?n(t,s):(f[t]=f[t]||[]).push(n)}(e,function(e){l(n,e)}),r},r.done=function(e){o(e,[])},r.reset=function(){c={},u={},f={}},r.isDefined=function(e){return e in c},r}();;
/**
 * @file
 * Provides Ajax page updating via jQuery $.ajax.
 *
 * Ajax is a method of making a request via JavaScript while viewing an HTML
 * page. The request returns an array of commands encoded in JSON, which is
 * then executed to make any changes that are necessary to the page.
 *
 * Drupal uses this file to enhance form elements with `#ajax['url']` and
 * `#ajax['wrapper']` properties. If set, this file will automatically be
 * included to provide Ajax capabilities.
 */

(function (
  $,
  window,
  Drupal,
  drupalSettings,
  loadjs,
  { isFocusable, tabbable },
) {
  /**
   * Attaches the Ajax behavior to each Ajax form element.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Initialize all {@link Drupal.Ajax} objects declared in
   *   `drupalSettings.ajax` or initialize {@link Drupal.Ajax} objects from
   *   DOM elements having the `use-ajax-submit` or `use-ajax` css class.
   * @prop {Drupal~behaviorDetach} detach
   *   During `unload` remove all {@link Drupal.Ajax} objects related to
   *   the removed content.
   */
  Drupal.behaviors.AJAX = {
    attach(context, settings) {
      function loadAjaxBehavior(base) {
        const elementSettings = settings.ajax[base];
        if (typeof elementSettings.selector === 'undefined') {
          elementSettings.selector = `#${base}`;
        }
        // Use jQuery selector instead of a native selector for
        // backwards compatibility.
        once('drupal-ajax', $(elementSettings.selector)).forEach((el) => {
          elementSettings.element = el;
          elementSettings.base = base;
          Drupal.ajax(elementSettings);
        });
      }

      // Load all Ajax behaviors specified in the settings.
      Object.keys(settings.ajax || {}).forEach(loadAjaxBehavior);

      Drupal.ajax.bindAjaxLinks(document.body);

      // This class means to submit the form to the action using Ajax.
      once('ajax', '.use-ajax-submit').forEach((el) => {
        const elementSettings = {};

        // Ajax submits specified in this manner automatically submit to the
        // normal form action.
        elementSettings.url = $(el.form).attr('action');
        // Form submit button clicks need to tell the form what was clicked so
        // it gets passed in the POST request.
        elementSettings.setClick = true;
        // Form buttons use the 'click' event rather than mousedown.
        elementSettings.event = 'click';
        // Clicked form buttons look better with the throbber than the progress
        // bar.
        elementSettings.progress = { type: 'throbber' };
        elementSettings.base = el.id;
        elementSettings.element = el;

        Drupal.ajax(elementSettings);
      });
    },

    detach(context, settings, trigger) {
      if (trigger === 'unload') {
        Drupal.ajax.expired().forEach((instance) => {
          // Set this to null and allow garbage collection to reclaim
          // the memory.
          Drupal.ajax.instances[instance.instanceIndex] = null;
        });
      }
    },
  };

  /**
   * Extends Error to provide handling for Errors in Ajax.
   *
   * @constructor
   *
   * @augments Error
   *
   * @param {XMLHttpRequest} xmlhttp
   *   XMLHttpRequest object used for the failed request.
   * @param {string} uri
   *   The URI where the error occurred.
   * @param {string} customMessage
   *   The custom message.
   */
  Drupal.AjaxError = function (xmlhttp, uri, customMessage) {
    let statusCode;
    let statusText;
    let responseText;
    if (xmlhttp.status) {
      statusCode = `\n${Drupal.t('An AJAX HTTP error occurred.')}\n${Drupal.t(
        'HTTP Result Code: !status',
        {
          '!status': xmlhttp.status,
        },
      )}`;
    } else {
      statusCode = `\n${Drupal.t(
        'An AJAX HTTP request terminated abnormally.',
      )}`;
    }
    statusCode += `\n${Drupal.t('Debugging information follows.')}`;
    const pathText = `\n${Drupal.t('Path: !uri', { '!uri': uri })}`;
    statusText = '';
    // In some cases, when statusCode === 0, xmlhttp.statusText may not be
    // defined. Unfortunately, testing for it with typeof, etc, doesn't seem to
    // catch that and the test causes an exception. So we need to catch the
    // exception here.
    try {
      statusText = `\n${Drupal.t('StatusText: !statusText', {
        '!statusText': xmlhttp.statusText.trim(),
      })}`;
    } catch (e) {
      // Empty.
    }

    responseText = '';
    // Again, we don't have a way to know for sure whether accessing
    // xmlhttp.responseText is going to throw an exception. So we'll catch it.
    try {
      responseText = `\n${Drupal.t('ResponseText: !responseText', {
        '!responseText': xmlhttp.responseText.trim(),
      })}`;
    } catch (e) {
      // Empty.
    }

    // Make the responseText more readable by stripping HTML tags and newlines.
    responseText = responseText.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi, '');
    responseText = responseText.replace(/[\n]+\s+/g, '\n');

    // We don't need readyState except for status == 0.
    const readyStateText =
      xmlhttp.status === 0
        ? `\n${Drupal.t('ReadyState: !readyState', {
            '!readyState': xmlhttp.readyState,
          })}`
        : '';

    customMessage = customMessage
      ? `\n${Drupal.t('CustomMessage: !customMessage', {
          '!customMessage': customMessage,
        })}`
      : '';

    /**
     * Formatted and translated error message.
     *
     * @type {string}
     */
    this.message =
      statusCode +
      pathText +
      statusText +
      customMessage +
      responseText +
      readyStateText;

    /**
     * Used by some browsers to display a more accurate stack trace.
     *
     * @type {string}
     */
    this.name = 'AjaxError';
  };

  Drupal.AjaxError.prototype = new Error();
  Drupal.AjaxError.prototype.constructor = Drupal.AjaxError;

  /**
   * Provides Ajax page updating via jQuery $.ajax.
   *
   * This function is designed to improve developer experience by wrapping the
   * initialization of {@link Drupal.Ajax} objects and storing all created
   * objects in the {@link Drupal.ajax.instances} array.
   *
   * @example
   * Drupal.behaviors.myCustomAJAXStuff = {
   *   attach: function (context, settings) {
   *
   *     var ajaxSettings = {
   *       url: 'my/url/path',
   *       // If the old version of Drupal.ajax() needs to be used those
   *       // properties can be added
   *       base: 'myBase',
   *       element: $(context).find('.someElement')
   *     };
   *
   *     var myAjaxObject = Drupal.ajax(ajaxSettings);
   *
   *     // Declare a new Ajax command specifically for this Ajax object.
   *     myAjaxObject.commands.insert = function (ajax, response, status) {
   *       $('#my-wrapper').append(response.data);
   *       alert('New content was appended to #my-wrapper');
   *     };
   *
   *     // This command will remove this Ajax object from the page.
   *     myAjaxObject.commands.destroyObject = function (ajax, response, status) {
   *       Drupal.ajax.instances[this.instanceIndex] = null;
   *     };
   *
   *     // Programmatically trigger the Ajax request.
   *     myAjaxObject.execute();
   *   }
   * };
   *
   * @param {object} settings
   *   The settings object passed to {@link Drupal.Ajax} constructor.
   * @param {string} [settings.base]
   *   Base is passed to {@link Drupal.Ajax} constructor as the 'base'
   *   parameter.
   * @param {HTMLElement} [settings.element]
   *   Element parameter of {@link Drupal.Ajax} constructor, element on which
   *   event listeners will be bound.
   *
   * @return {Drupal.Ajax}
   *   The created Ajax object.
   *
   * @see Drupal.AjaxCommands
   */
  Drupal.ajax = function (settings) {
    if (arguments.length !== 1) {
      throw new Error(
        'Drupal.ajax() function must be called with one configuration object only',
      );
    }
    // Map those config keys to variables for the old Drupal.ajax function.
    const base = settings.base || false;
    const element = settings.element || false;
    delete settings.base;
    delete settings.element;

    // By default do not display progress for ajax calls without an element.
    if (!settings.progress && !element) {
      settings.progress = false;
    }

    const ajax = new Drupal.Ajax(base, element, settings);
    ajax.instanceIndex = Drupal.ajax.instances.length;
    Drupal.ajax.instances.push(ajax);

    return ajax;
  };

  /**
   * Contains all created Ajax objects.
   *
   * @type {Array.<Drupal.Ajax|null>}
   */
  Drupal.ajax.instances = [];

  /**
   * List all objects where the associated element is not in the DOM
   *
   * This method ignores {@link Drupal.Ajax} objects not bound to DOM elements
   * when created with {@link Drupal.ajax}.
   *
   * @return {Array.<Drupal.Ajax>}
   *   The list of expired {@link Drupal.Ajax} objects.
   */
  Drupal.ajax.expired = function () {
    return Drupal.ajax.instances.filter(
      (instance) =>
        instance &&
        instance.element !== false &&
        !document.body.contains(instance.element),
    );
  };

  /**
   * Bind Ajax functionality to links that use the 'use-ajax' class.
   *
   * @param {HTMLElement} element
   *   Element to enable Ajax functionality for.
   */
  Drupal.ajax.bindAjaxLinks = (element) => {
    // Bind Ajax behaviors to all items showing the class.
    once('ajax', '.use-ajax', element).forEach((ajaxLink) => {
      const $linkElement = $(ajaxLink);

      const elementSettings = {
        // Clicked links look better with the throbber than the progress bar.
        progress: { type: 'throbber' },
        dialogType: $linkElement.data('dialog-type'),
        dialog: $linkElement.data('dialog-options'),
        dialogRenderer: $linkElement.data('dialog-renderer'),
        base: $linkElement.attr('id'),
        element: ajaxLink,
      };
      const href = $linkElement.attr('href');
      /**
       * For anchor tags, these will go to the target of the anchor rather than
       * the usual location.
       */
      if (href) {
        elementSettings.url = href;
        elementSettings.event = 'click';
      }
      Drupal.ajax(elementSettings);
    });
  };

  /**
   * Settings for an Ajax object.
   *
   * @typedef {object} Drupal.Ajax~elementSettings
   *
   * @prop {string} url
   *   Target of the Ajax request.
   * @prop {?string} [event]
   *   Event bound to settings.element which will trigger the Ajax request.
   * @prop {boolean} [keypress=true]
   *   Triggers a request on keypress events.
   * @prop {?string} selector
   *   jQuery selector targeting the element to bind events to or used with
   *   {@link Drupal.AjaxCommands}.
   * @prop {string} [effect='none']
   *   Name of the jQuery method to use for displaying new Ajax content.
   * @prop {string|number} [speed='none']
   *   Speed with which to apply the effect.
   * @prop {string} [method]
   *   Name of the jQuery method used to insert new content in the targeted
   *   element.
   * @prop {object} [progress]
   *   Settings for the display of a user-friendly loader.
   * @prop {string} [progress.type='throbber']
   *   Type of progress element, core provides `'bar'`, `'throbber'` and
   *   `'fullscreen'`.
   * @prop {string} [progress.message=Drupal.t('Please wait...')]
   *   Custom message to be used with the bar indicator.
   * @prop {object} [submit]
   *   Extra data to be sent with the Ajax request.
   * @prop {boolean} [submit.js=true]
   *   Allows the PHP side to know this comes from an Ajax request.
   * @prop {object} [dialog]
   *   Options for {@link Drupal.dialog}.
   * @prop {string} [dialogType]
   *   One of `'modal'` or `'dialog'`.
   * @prop {string} [prevent]
   *   List of events on which to stop default action and stop propagation.
   */

  /**
   * Ajax constructor.
   *
   * The Ajax request returns an array of commands encoded in JSON, which is
   * then executed to make any changes that are necessary to the page.
   *
   * Drupal uses this file to enhance form elements with `#ajax['url']` and
   * `#ajax['wrapper']` properties. If set, this file will automatically be
   * included to provide Ajax capabilities.
   *
   * @constructor
   *
   * @param {string} [base]
   *   Base parameter of {@link Drupal.Ajax} constructor
   * @param {HTMLElement} [element]
   *   Element parameter of {@link Drupal.Ajax} constructor, element on which
   *   event listeners will be bound.
   * @param {Drupal.Ajax~elementSettings} elementSettings
   *   Settings for this Ajax object.
   */
  Drupal.Ajax = function (base, element, elementSettings) {
    const defaults = {
      event: element ? 'mousedown' : null,
      keypress: true,
      selector: base ? `#${base}` : null,
      effect: 'none',
      speed: 'none',
      method: 'replaceWith',
      progress: {
        type: 'throbber',
        message: Drupal.t('Please wait...'),
      },
      submit: {
        js: true,
      },
    };

    $.extend(this, defaults, elementSettings);

    /**
     * @type {Drupal.AjaxCommands}
     */
    this.commands = new Drupal.AjaxCommands();

    /**
     * @type {boolean|number}
     */
    this.instanceIndex = false;

    // @todo Remove this after refactoring the PHP code to:
    //   - Call this 'selector'.
    //   - Include the '#' for ID-based selectors.
    //   - Support non-ID-based selectors.
    if (this.wrapper) {
      /**
       * @type {string}
       */
      this.wrapper = `#${this.wrapper}`;
    }

    /**
     * @type {HTMLElement}
     */
    this.element = element;

    /**
     * @type {Drupal.Ajax~elementSettings}
     */
    this.elementSettings = elementSettings;

    // If there isn't a form, jQuery.ajax() will be used instead, allowing us to
    // bind Ajax to links as well.
    if (this.element && this.element.form) {
      /**
       * @type {jQuery}
       */
      this.$form = $(this.element.form);
    }

    // If no Ajax callback URL was given, use the link href or form action.
    if (!this.url) {
      const $element = $(this.element);
      if ($element.is('a')) {
        this.url = $element.attr('href');
      } else if (this.element && element.form) {
        this.url = this.$form.attr('action');
      }
    }

    // Replacing 'nojs' with 'ajax' in the URL allows for an easy method to let
    // the server detect when it needs to degrade gracefully.
    // There are four scenarios to check for:
    // 1. /nojs/
    // 2. /nojs$ - The end of a URL string.
    // 3. /nojs? - Followed by a query (e.g. path/nojs?destination=foobar).
    // 4. /nojs# - Followed by a fragment (e.g.: path/nojs#my-fragment).
    const originalUrl = this.url;

    /**
     * Processed Ajax URL.
     *
     * @type {string}
     */
    this.url = this.url.replace(/\/nojs(\/|$|\?|#)/, '/ajax$1');
    // If the 'nojs' version of the URL is trusted, also trust the 'ajax'
    // version.
    if (drupalSettings.ajaxTrustedUrl[originalUrl]) {
      drupalSettings.ajaxTrustedUrl[this.url] = true;
    }

    // Set the options for the ajaxSubmit function.
    // The 'this' variable will not persist inside of the options object.
    const ajax = this;

    /**
     * Options for the jQuery.ajax function.
     *
     * @name Drupal.Ajax#options
     *
     * @type {object}
     *
     * @prop {string} url
     *   Ajax URL to be called.
     * @prop {object} data
     *   Ajax payload.
     * @prop {function} beforeSerialize
     *   Implement jQuery beforeSerialize function to call
     *   {@link Drupal.Ajax#beforeSerialize}.
     * @prop {function} beforeSubmit
     *   Implement jQuery beforeSubmit function to call
     *   {@link Drupal.Ajax#beforeSubmit}.
     * @prop {function} beforeSend
     *   Implement jQuery beforeSend function to call
     *   {@link Drupal.Ajax#beforeSend}.
     * @prop {function} success
     *   Implement jQuery success function to call
     *   {@link Drupal.Ajax#success}.
     * @prop {function} complete
     *   Implement jQuery success function to clean up ajax state and trigger an
     *   error if needed.
     * @prop {string} dataType='json'
     *   Type of the response expected.
     * @prop {string} type='POST'
     *   HTTP method to use for the Ajax request.
     */
    ajax.options = {
      url: ajax.url,
      data: ajax.submit,
      isInProgress() {
        return ajax.ajaxing;
      },
      beforeSerialize(elementSettings, options) {
        return ajax.beforeSerialize(elementSettings, options);
      },
      beforeSubmit(formValues, elementSettings, options) {
        ajax.ajaxing = true;
        return ajax.beforeSubmit(formValues, elementSettings, options);
      },
      beforeSend(xmlhttprequest, options) {
        ajax.ajaxing = true;
        return ajax.beforeSend(xmlhttprequest, options);
      },
      success(response, status, xmlhttprequest) {
        // Sanity check for browser support (object expected).
        // When using iFrame uploads, responses must be returned as a string.
        if (typeof response === 'string') {
          response = $.parseJSON(response);
        }

        // Prior to invoking the response's commands, verify that they can be
        // trusted by checking for a response header. See
        // \Drupal\Core\EventSubscriber\AjaxResponseSubscriber for details.
        // - Empty responses are harmless so can bypass verification. This
        //   avoids an alert message for server-generated no-op responses that
        //   skip Ajax rendering.
        // - Ajax objects with trusted URLs (e.g., ones defined server-side via
        //   #ajax) can bypass header verification. This is especially useful
        //   for Ajax with multipart forms. Because IFRAME transport is used,
        //   the response headers cannot be accessed for verification.
        if (response !== null && !drupalSettings.ajaxTrustedUrl[ajax.url]) {
          if (xmlhttprequest.getResponseHeader('X-Drupal-Ajax-Token') !== '1') {
            const customMessage = Drupal.t(
              'The response failed verification so will not be processed.',
            );
            return ajax.error(xmlhttprequest, ajax.url, customMessage);
          }
        }

        return (
          // Ensure that the return of the success callback is a Promise.
          // When the return is a Promise, using resolve will unwrap it, and
          // when the return is not a Promise we make sure it can be used as
          // one. This is useful for code that overrides the success method.
          Promise.resolve(ajax.success(response, status))
            // Ajaxing status is back to false when all the AJAX commands have
            // finished executing.
            .then(() => {
              ajax.ajaxing = false;
              // jQuery normally triggers the ajaxSuccess, ajaxComplete, and
              // ajaxStop events after the "success" function passed to $.ajax()
              // returns, but we prevented that via
              // $.event.special[EVENT_NAME].trigger in order to wait for the
              // commands to finish executing. Now that they have, re-trigger
              // those events.
              $(document).trigger('ajaxSuccess', [xmlhttprequest, this]);
              $(document).trigger('ajaxComplete', [xmlhttprequest, this]);
              if (--$.active === 0) {
                $(document).trigger('ajaxStop');
              }
            })
        );
      },
      error(xmlhttprequest, status, error) {
        ajax.ajaxing = false;
      },
      complete(xmlhttprequest, status) {
        if (status === 'error' || status === 'parsererror') {
          return ajax.error(xmlhttprequest, ajax.url);
        }
      },
      dataType: 'json',
      jsonp: false,
      type: 'POST',
    };

    if (elementSettings.dialog) {
      ajax.options.data.dialogOptions = elementSettings.dialog;
    }

    // Ensure that we have a valid URL by adding ? when no query parameter is
    // yet available, otherwise append using &.
    if (ajax.options.url.indexOf('?') === -1) {
      ajax.options.url += '?';
    } else {
      ajax.options.url += '&';
    }
    // If this element has a dialog type use if for the wrapper if not use 'ajax'.
    let wrapper = `drupal_${elementSettings.dialogType || 'ajax'}`;
    if (elementSettings.dialogRenderer) {
      wrapper += `.${elementSettings.dialogRenderer}`;
    }
    ajax.options.url += `${Drupal.ajax.WRAPPER_FORMAT}=${wrapper}`;

    // Bind the ajaxSubmit function to the element event.
    $(ajax.element).on(elementSettings.event, function (event) {
      if (
        !drupalSettings.ajaxTrustedUrl[ajax.url] &&
        !Drupal.url.isLocal(ajax.url)
      ) {
        throw new Error(
          Drupal.t('The callback URL is not local and not trusted: !url', {
            '!url': ajax.url,
          }),
        );
      }
      return ajax.eventResponse(this, event);
    });

    // If necessary, enable keyboard submission so that Ajax behaviors
    // can be triggered through keyboard input as well as e.g. a mousedown
    // action.
    if (elementSettings.keypress) {
      $(ajax.element).on('keypress', function (event) {
        return ajax.keypressResponse(this, event);
      });
    }

    // If necessary, prevent the browser default action of an additional event.
    // For example, prevent the browser default action of a click, even if the
    // Ajax behavior binds to mousedown.
    if (elementSettings.prevent) {
      $(ajax.element).on(elementSettings.prevent, false);
    }
  };

  /**
   * URL query attribute to indicate the wrapper used to render a request.
   *
   * The wrapper format determines how the HTML is wrapped, for example in a
   * modal dialog.
   *
   * @const {string}
   *
   * @default
   */
  Drupal.ajax.WRAPPER_FORMAT = '_wrapper_format';

  /**
   * Request parameter to indicate that a request is a Drupal Ajax request.
   *
   * @const {string}
   *
   * @default
   */
  Drupal.Ajax.AJAX_REQUEST_PARAMETER = '_drupal_ajax';

  /**
   * Execute the ajax request.
   *
   * Allows developers to execute an Ajax request manually without specifying
   * an event to respond to.
   *
   * @return {object}
   *   Returns the jQuery.Deferred object underlying the Ajax request. If
   *   pre-serialization fails, the Deferred will be returned in the rejected
   *   state.
   */
  Drupal.Ajax.prototype.execute = function () {
    // Do not perform another ajax command if one is already in progress.
    if (this.ajaxing) {
      return;
    }

    try {
      this.beforeSerialize(this.element, this.options);
      // Return the jqXHR so that external code can hook into the Deferred API.
      return $.ajax(this.options);
    } catch (e) {
      // Unset the ajax.ajaxing flag here because it won't be unset during
      // the complete response.
      this.ajaxing = false;
      window.alert(
        `An error occurred while attempting to process ${this.options.url}: ${e.message}`,
      );
      // For consistency, return a rejected Deferred (i.e., jqXHR's superclass)
      // so that calling code can take appropriate action.
      return $.Deferred().reject();
    }
  };

  /**
   * Handle a key press.
   *
   * The Ajax object will, if instructed, bind to a key press response. This
   * will test to see if the key press is valid to trigger this event and
   * if it is, trigger it for us and prevent other keypresses from triggering.
   * In this case we're handling RETURN and SPACEBAR keypresses (event codes 13
   * and 32. RETURN is often used to submit a form when in a textfield, and
   * SPACE is often used to activate an element without submitting.
   *
   * @param {HTMLElement} element
   *   Element the event was triggered on.
   * @param {jQuery.Event} event
   *   Triggered event.
   */
  Drupal.Ajax.prototype.keypressResponse = function (element, event) {
    // Create a synonym for this to reduce code confusion.
    const ajax = this;

    // Detect enter key and space bar and allow the standard response for them,
    // except for form elements of type 'text', 'tel', 'number' and 'textarea',
    // where the spacebar activation causes inappropriate activation if
    // #ajax['keypress'] is TRUE. On a text-type widget a space should always
    // be a space.
    if (
      event.which === 13 ||
      (event.which === 32 &&
        element.type !== 'text' &&
        element.type !== 'textarea' &&
        element.type !== 'tel' &&
        element.type !== 'number')
    ) {
      event.preventDefault();
      event.stopPropagation();
      $(element).trigger(ajax.elementSettings.event);
    }
  };

  /**
   * Handle an event that triggers an Ajax response.
   *
   * When an event that triggers an Ajax response happens, this method will
   * perform the actual Ajax call. It is bound to the event using
   * bind() in the constructor, and it uses the options specified on the
   * Ajax object.
   *
   * @param {HTMLElement} element
   *   Element the event was triggered on.
   * @param {jQuery.Event} event
   *   Triggered event.
   */
  Drupal.Ajax.prototype.eventResponse = function (element, event) {
    event.preventDefault();
    event.stopPropagation();

    // Create a synonym for this to reduce code confusion.
    const ajax = this;

    // Do not perform another Ajax command if one is already in progress.
    if (ajax.ajaxing) {
      return;
    }

    try {
      if (ajax.$form) {
        // If setClick is set, we must set this to ensure that the button's
        // value is passed.
        if (ajax.setClick) {
          // Mark the clicked button. 'form.clk' is a special variable for
          // ajaxSubmit that tells the system which element got clicked to
          // trigger the submit. Without it there would be no 'op' or
          // equivalent.
          element.form.clk = element;
        }

        ajax.$form.ajaxSubmit(ajax.options);
      } else {
        ajax.beforeSerialize(ajax.element, ajax.options);
        $.ajax(ajax.options);
      }
    } catch (e) {
      // Unset the ajax.ajaxing flag here because it won't be unset during
      // the complete response.
      ajax.ajaxing = false;
      window.alert(
        `An error occurred while attempting to process ${ajax.options.url}: ${e.message}`,
      );
    }
  };

  /**
   * Handler for the form serialization.
   *
   * Runs before the beforeSend() handler (see below), and unlike that one, runs
   * before field data is collected.
   *
   * @param {object} [element]
   *   Ajax object's `elementSettings`.
   * @param {object} options
   *   jQuery.ajax options.
   */
  Drupal.Ajax.prototype.beforeSerialize = function (element, options) {
    // Allow detaching behaviors to update field values before collecting them.
    // This is only needed when field values are added to the POST data, so only
    // when there is a form such that this.$form.ajaxSubmit() is used instead of
    // $.ajax(). When there is no form and $.ajax() is used, beforeSerialize()
    // isn't called, but don't rely on that: explicitly check this.$form.
    if (this.$form && document.body.contains(this.$form.get(0))) {
      const settings = this.settings || drupalSettings;
      Drupal.detachBehaviors(this.$form.get(0), settings, 'serialize');
    }

    // Inform Drupal that this is an AJAX request.
    options.data[Drupal.Ajax.AJAX_REQUEST_PARAMETER] = 1;

    // Allow Drupal to return new JavaScript and CSS files to load without
    // returning the ones already loaded.
    // @see \Drupal\Core\Theme\AjaxBasePageNegotiator
    // @see \Drupal\Core\Asset\LibraryDependencyResolverInterface::getMinimalRepresentativeSubset()
    // @see system_js_settings_alter()
    const pageState = drupalSettings.ajaxPageState;
    options.data['ajax_page_state[theme]'] = pageState.theme;
    options.data['ajax_page_state[theme_token]'] = pageState.theme_token;
    options.data['ajax_page_state[libraries]'] = pageState.libraries;
  };

  /**
   * Modify form values prior to form submission.
   *
   * @param {Array.<object>} formValues
   *   Processed form values.
   * @param {jQuery} element
   *   The form node as a jQuery object.
   * @param {object} options
   *   jQuery.ajax options.
   */
  Drupal.Ajax.prototype.beforeSubmit = function (formValues, element, options) {
    // This function is left empty to make it simple to override for modules
    // that wish to add functionality here.
  };

  /**
   * Prepare the Ajax request before it is sent.
   *
   * @param {XMLHttpRequest} xmlhttprequest
   *   Native Ajax object.
   * @param {object} options
   *   jQuery.ajax options.
   */
  Drupal.Ajax.prototype.beforeSend = function (xmlhttprequest, options) {
    // For forms without file inputs, the jQuery Form plugin serializes the
    // form values, and then calls jQuery's $.ajax() function, which invokes
    // this handler. In this circumstance, options.extraData is never used. For
    // forms with file inputs, the jQuery Form plugin uses the browser's normal
    // form submission mechanism, but captures the response in a hidden IFRAME.
    // In this circumstance, it calls this handler first, and then appends
    // hidden fields to the form to submit the values in options.extraData.
    // There is no simple way to know which submission mechanism will be used,
    // so we add to extraData regardless, and allow it to be ignored in the
    // former case.
    if (this.$form) {
      options.extraData = options.extraData || {};

      // Let the server know when the IFRAME submission mechanism is used. The
      // server can use this information to wrap the JSON response in a
      // TEXTAREA, as per http://jquery.malsup.com/form/#file-upload.
      options.extraData.ajax_iframe_upload = '1';

      // The triggering element is about to be disabled (see below), but if it
      // contains a value (e.g., a checkbox, textfield, select, etc.), ensure
      // that value is included in the submission. As per above, submissions
      // that use $.ajax() are already serialized prior to the element being
      // disabled, so this is only needed for IFRAME submissions.
      const v = $.fieldValue(this.element);
      if (v !== null) {
        options.extraData[this.element.name] = v;
      }
    }

    // Disable the element that received the change to prevent user interface
    // interaction while the Ajax request is in progress. ajax.ajaxing prevents
    // the element from triggering a new request, but does not prevent the user
    // from changing its value.
    $(this.element).prop('disabled', true);

    if (!this.progress || !this.progress.type) {
      return;
    }

    // Insert progress indicator.
    const progressIndicatorMethod = `setProgressIndicator${this.progress.type
      .slice(0, 1)
      .toUpperCase()}${this.progress.type.slice(1).toLowerCase()}`;
    if (
      progressIndicatorMethod in this &&
      typeof this[progressIndicatorMethod] === 'function'
    ) {
      this[progressIndicatorMethod].call(this);
    }
  };

  /**
   * An animated progress throbber and container element for AJAX operations.
   *
   * @param {string} [message]
   *   (optional) The message shown on the UI.
   * @return {string}
   *   The HTML markup for the throbber.
   */
  Drupal.theme.ajaxProgressThrobber = (message) => {
    // Build markup without adding extra white space since it affects rendering.
    const messageMarkup =
      typeof message === 'string'
        ? Drupal.theme('ajaxProgressMessage', message)
        : '';
    const throbber = '<div class="throbber">&nbsp;</div>';

    return `<div class="ajax-progress ajax-progress-throbber">${throbber}${messageMarkup}</div>`;
  };

  /**
   * An animated progress throbber and container element for AJAX operations.
   *
   * @return {string}
   *   The HTML markup for the throbber.
   */
  Drupal.theme.ajaxProgressIndicatorFullscreen = () =>
    '<div class="ajax-progress ajax-progress-fullscreen">&nbsp;</div>';

  /**
   * Formats text accompanying the AJAX progress throbber.
   *
   * @param {string} message
   *   The message shown on the UI.
   * @return {string}
   *   The HTML markup for the throbber.
   */
  Drupal.theme.ajaxProgressMessage = (message) =>
    `<div class="message">${message}</div>`;

  /**
   * Provide a wrapper for the AJAX progress bar element.
   *
   * @param {jQuery} $element
   *   Progress bar element.
   * @return {string}
   *   The HTML markup for the progress bar.
   */
  Drupal.theme.ajaxProgressBar = ($element) =>
    $('<div class="ajax-progress ajax-progress-bar"></div>').append($element);

  /**
   * Sets the progress bar progress indicator.
   */
  Drupal.Ajax.prototype.setProgressIndicatorBar = function () {
    const progressBar = new Drupal.ProgressBar(
      `ajax-progress-${this.element.id}`,
      $.noop,
      this.progress.method,
      $.noop,
    );
    if (this.progress.message) {
      progressBar.setProgress(-1, this.progress.message);
    }
    if (this.progress.url) {
      progressBar.startMonitoring(
        this.progress.url,
        this.progress.interval || 1500,
      );
    }
    this.progress.element = $(
      Drupal.theme('ajaxProgressBar', progressBar.element),
    );
    this.progress.object = progressBar;
    $(this.element).after(this.progress.element);
  };

  /**
   * Sets the throbber progress indicator.
   */
  Drupal.Ajax.prototype.setProgressIndicatorThrobber = function () {
    this.progress.element = $(
      Drupal.theme('ajaxProgressThrobber', this.progress.message),
    );
    $(this.element).after(this.progress.element);
  };

  /**
   * Sets the fullscreen progress indicator.
   */
  Drupal.Ajax.prototype.setProgressIndicatorFullscreen = function () {
    this.progress.element = $(Drupal.theme('ajaxProgressIndicatorFullscreen'));
    $('body').append(this.progress.element);
  };

  /**
   * Helper method to make sure commands are executed in sequence.
   *
   * @param {Array.<Drupal.AjaxCommands~commandDefinition>} response
   *   Drupal Ajax response.
   * @param {number} status
   *   XMLHttpRequest status.
   *
   * @return {Promise}
   *  The promise that will resolve once all commands have finished executing.
   */
  Drupal.Ajax.prototype.commandExecutionQueue = function (response, status) {
    const ajaxCommands = this.commands;
    return Object.keys(response || {}).reduce(
      // Add all commands to a single execution queue.
      (executionQueue, key) =>
        executionQueue.then(() => {
          const { command } = response[key];
          if (command && ajaxCommands[command]) {
            // When a command returns a promise, the remaining commands will not
            // execute until that promise has been fulfilled. This is typically
            // used to ensure JavaScript files added via the 'add_js' command
            // have loaded before subsequent commands execute.
            return ajaxCommands[command](this, response[key], status);
          }
        }),
      Promise.resolve(),
    );
  };

  /**
   * Handler for the form redirection completion.
   *
   * @param {Array.<Drupal.AjaxCommands~commandDefinition>} response
   *   Drupal Ajax response.
   * @param {number} status
   *   XMLHttpRequest status.
   *
   * @return {Promise}
   * The promise that will resolve once all commands have finished executing.
   */
  Drupal.Ajax.prototype.success = function (response, status) {
    // Remove the progress element.
    if (this.progress.element) {
      $(this.progress.element).remove();
    }
    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }
    $(this.element).prop('disabled', false);

    // Save element's ancestors tree so if the element is removed from the dom
    // we can try to refocus one of its parents. Using addBack reverse the
    // result array, meaning that index 0 is the highest parent in the hierarchy
    // in this situation it is usually a <form> element.
    const elementParents = $(this.element)
      .parents('[data-drupal-selector]')
      .addBack()
      .toArray();

    // Track if any command is altering the focus so we can avoid changing the
    // focus set by the Ajax command.
    const focusChanged = Object.keys(response || {}).some((key) => {
      const { command, method } = response[key];
      return (
        command === 'focusFirst' || (command === 'invoke' && method === 'focus')
      );
    });

    return (
      this.commandExecutionQueue(response, status)
        // If the focus hasn't been changed by the AJAX commands, try to refocus
        // the triggering element or one of its parents if that element does not
        // exist anymore.
        .then(() => {
          if (
            !focusChanged &&
            this.element &&
            !$(this.element).data('disable-refocus')
          ) {
            let target = false;

            for (let n = elementParents.length - 1; !target && n >= 0; n--) {
              target = document.querySelector(
                `[data-drupal-selector="${elementParents[n].getAttribute(
                  'data-drupal-selector',
                )}"]`,
              );
            }
            if (target) {
              $(target).trigger('focus');
            }
          }
          // Reattach behaviors, if they were detached in beforeSerialize(). The
          // attachBehaviors() called on the new content from processing the
          // response commands is not sufficient, because behaviors from the
          // entire form need to be reattached.
          if (this.$form && document.body.contains(this.$form.get(0))) {
            const settings = this.settings || drupalSettings;
            Drupal.attachBehaviors(this.$form.get(0), settings);
          }
          // Remove any response-specific settings so they don't get used on the
          // next call by mistake.
          this.settings = null;
        })
        .catch((error) =>
          // eslint-disable-next-line no-console
          console.error(
            Drupal.t(
              'An error occurred during the execution of the Ajax response: !error',
              {
                '!error': error,
              },
            ),
          ),
        )
    );
  };

  /**
   * Build an effect object to apply an effect when adding new HTML.
   *
   * @param {object} response
   *   Drupal Ajax response.
   * @param {string} [response.effect]
   *   Override the default value of {@link Drupal.Ajax#elementSettings}.
   * @param {string|number} [response.speed]
   *   Override the default value of {@link Drupal.Ajax#elementSettings}.
   *
   * @return {object}
   *   Returns an object with `showEffect`, `hideEffect` and `showSpeed`
   *   properties.
   */
  Drupal.Ajax.prototype.getEffect = function (response) {
    const type = response.effect || this.effect;
    const speed = response.speed || this.speed;

    const effect = {};
    if (type === 'none') {
      effect.showEffect = 'show';
      effect.hideEffect = 'hide';
      effect.showSpeed = '';
    } else if (type === 'fade') {
      effect.showEffect = 'fadeIn';
      effect.hideEffect = 'fadeOut';
      effect.showSpeed = speed;
    } else {
      effect.showEffect = `${type}Toggle`;
      effect.hideEffect = `${type}Toggle`;
      effect.showSpeed = speed;
    }

    return effect;
  };

  /**
   * Handler for the form redirection error.
   *
   * @param {object} xmlhttprequest
   *   Native XMLHttpRequest object.
   * @param {string} uri
   *   Ajax Request URI.
   * @param {string} [customMessage]
   *   Extra message to print with the Ajax error.
   */
  Drupal.Ajax.prototype.error = function (xmlhttprequest, uri, customMessage) {
    // Remove the progress element.
    if (this.progress.element) {
      $(this.progress.element).remove();
    }
    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }
    // Undo hide.
    $(this.wrapper).show();
    // Re-enable the element.
    $(this.element).prop('disabled', false);
    // Reattach behaviors, if they were detached in beforeSerialize(), and the
    // form is still part of the document.
    if (this.$form && document.body.contains(this.$form.get(0))) {
      const settings = this.settings || drupalSettings;
      Drupal.attachBehaviors(this.$form.get(0), settings);
    }
    throw new Drupal.AjaxError(xmlhttprequest, uri, customMessage);
  };

  /**
   * Provide a wrapper for new content via Ajax.
   *
   * Wrap the inserted markup when inserting multiple root elements with an
   * ajax effect.
   *
   * @param {jQuery} $newContent
   *   Response elements after parsing.
   * @param {Drupal.Ajax} ajax
   *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
   * @param {object} response
   *   The response from the Ajax request.
   *
   * @deprecated in drupal:8.6.0 and is removed from drupal:10.0.0.
   *   Use data with desired wrapper.
   *
   * @see https://www.drupal.org/node/2940704
   *
   * @todo Add deprecation warning after it is possible. For more information
   *   see: https://www.drupal.org/project/drupal/issues/2973400
   */
  Drupal.theme.ajaxWrapperNewContent = ($newContent, ajax, response) =>
    (response.effect || ajax.effect) !== 'none' &&
    $newContent.filter(
      (i) =>
        !(
          // We can not consider HTML comments or whitespace text as separate
          // roots, since they do not cause visual regression with effect.
          (
            $newContent[i].nodeName === '#comment' ||
            ($newContent[i].nodeName === '#text' &&
              /^(\s|\n|\r)*$/.test($newContent[i].textContent))
          )
        ),
    ).length > 1
      ? Drupal.theme('ajaxWrapperMultipleRootElements', $newContent)
      : $newContent;

  /**
   * Provide a wrapper for multiple root elements via Ajax.
   *
   * @param {jQuery} $elements
   *   Response elements after parsing.
   *
   * @deprecated in drupal:8.6.0 and is removed from drupal:10.0.0.
   *   Use data with desired wrapper.
   *
   * @see https://www.drupal.org/node/2940704
   *
   * @todo Add deprecation warning after it is possible. For more information
   *   see: https://www.drupal.org/project/drupal/issues/2973400
   */
  Drupal.theme.ajaxWrapperMultipleRootElements = ($elements) =>
    $('<div></div>').append($elements);

  /**
   * @typedef {object} Drupal.AjaxCommands~commandDefinition
   *
   * @prop {string} command
   * @prop {string} [method]
   * @prop {string} [selector]
   * @prop {string} [data]
   * @prop {object} [settings]
   * @prop {boolean} [asterisk]
   * @prop {string} [text]
   * @prop {string} [title]
   * @prop {string} [url]
   * @prop {object} [argument]
   * @prop {string} [name]
   * @prop {string} [value]
   * @prop {string} [old]
   * @prop {string} [new]
   * @prop {boolean} [merge]
   * @prop {Array} [args]
   *
   * @see Drupal.AjaxCommands
   */

  /**
   * Provide a series of commands that the client will perform.
   *
   * @constructor
   */
  Drupal.AjaxCommands = function () {};
  Drupal.AjaxCommands.prototype = {
    /**
     * Command to insert new content into the DOM.
     *
     * @param {Drupal.Ajax} ajax
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.data
     *   The data to use with the jQuery method.
     * @param {string} [response.method]
     *   The jQuery DOM manipulation method to be used.
     * @param {string} [response.selector]
     *   An optional jQuery selector string.
     * @param {object} [response.settings]
     *   An optional array of settings that will be used.
     */
    insert(ajax, response) {
      // Get information from the response. If it is not there, default to
      // our presets.
      const $wrapper = response.selector
        ? $(response.selector)
        : $(ajax.wrapper);
      const method = response.method || ajax.method;
      const effect = ajax.getEffect(response);

      // Apply any settings from the returned JSON if available.
      const settings = response.settings || ajax.settings || drupalSettings;

      // Parse response.data into an element collection.
      let $newContent = $($.parseHTML(response.data, document, true));
      // For backward compatibility, in some cases a wrapper will be added. This
      // behavior will be removed before Drupal 9.0.0. If different behavior is
      // needed, the theme functions can be overridden.
      // @see https://www.drupal.org/node/2940704
      $newContent = Drupal.theme(
        'ajaxWrapperNewContent',
        $newContent,
        ajax,
        response,
      );

      // If removing content from the wrapper, detach behaviors first.
      switch (method) {
        case 'html':
        case 'replaceWith':
        case 'replaceAll':
        case 'empty':
        case 'remove':
          Drupal.detachBehaviors($wrapper.get(0), settings);
          break;
        default:
          break;
      }

      // Add the new content to the page.
      $wrapper[method]($newContent);

      // Immediately hide the new content if we're using any effects.
      if (effect.showEffect !== 'show') {
        $newContent.hide();
      }

      // Determine which effect to use and what content will receive the
      // effect, then show the new content.
      const $ajaxNewContent = $newContent.find('.ajax-new-content');
      if ($ajaxNewContent.length) {
        $ajaxNewContent.hide();
        $newContent.show();
        $ajaxNewContent[effect.showEffect](effect.showSpeed);
      } else if (effect.showEffect !== 'show') {
        $newContent[effect.showEffect](effect.showSpeed);
      }

      // Attach all JavaScript behaviors to the new content, if it was
      // successfully added to the page, this if statement allows
      // `#ajax['wrapper']` to be optional.
      if ($newContent.parents('html').length) {
        // Attach behaviors to all element nodes.
        $newContent.each((index, element) => {
          if (element.nodeType === Node.ELEMENT_NODE) {
            Drupal.attachBehaviors(element, settings);
          }
        });
      }
    },

    /**
     * Command to remove a chunk from the page.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.selector
     *   A jQuery selector string.
     * @param {object} [response.settings]
     *   An optional array of settings that will be used.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    remove(ajax, response, status) {
      const settings = response.settings || ajax.settings || drupalSettings;
      $(response.selector)
        .each(function () {
          Drupal.detachBehaviors(this, settings);
        })
        .remove();
    },

    /**
     * Command to mark a chunk changed.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The JSON response object from the Ajax request.
     * @param {string} response.selector
     *   A jQuery selector string.
     * @param {boolean} [response.asterisk]
     *   An optional CSS selector. If specified, an asterisk will be
     *   appended to the HTML inside the provided selector.
     * @param {number} [status]
     *   The request status.
     */
    changed(ajax, response, status) {
      const $element = $(response.selector);
      if (!$element.hasClass('ajax-changed')) {
        $element.addClass('ajax-changed');
        if (response.asterisk) {
          $element
            .find(response.asterisk)
            .append(
              ` <abbr class="ajax-changed" title="${Drupal.t(
                'Changed',
              )}">*</abbr> `,
            );
        }
      }
    },

    /**
     * Command to provide an alert.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The JSON response from the Ajax request.
     * @param {string} response.text
     *   The text that will be displayed in an alert dialog.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    alert(ajax, response, status) {
      window.alert(response.text);
    },

    /**
     * Command to provide triggers audio UAs to read the supplied text.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The JSON response from the Ajax request.
     * @param {string} [response.text]
     *   The text that will be read.
     * @param {string} [response.priority]
     *   An optional priority that will be used for the announcement.
     */
    announce(ajax, response) {
      if (response.priority) {
        Drupal.announce(response.text, response.priority);
      } else {
        Drupal.announce(response.text);
      }
    },

    /**
     * Command to set the window.location, redirecting the browser.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.url
     *   The URL to redirect to.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    redirect(ajax, response, status) {
      window.location = response.url;
    },

    /**
     * Command to provide the jQuery css() function.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.selector
     *   A jQuery selector string.
     * @param {object} response.argument
     *   An array of key/value pairs to set in the CSS for the selector.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    css(ajax, response, status) {
      $(response.selector).css(response.argument);
    },

    /**
     * Command to set the settings used for other commands in this response.
     *
     * This method will also remove expired `drupalSettings.ajax` settings.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {boolean} response.merge
     *   Determines whether the additional settings should be merged to the
     *   global settings.
     * @param {object} response.settings
     *   Contains additional settings to add to the global settings.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    settings(ajax, response, status) {
      const ajaxSettings = drupalSettings.ajax;

      // Clean up drupalSettings.ajax.
      if (ajaxSettings) {
        Drupal.ajax.expired().forEach((instance) => {
          // If the Ajax object has been created through drupalSettings.ajax
          // it will have a selector. When there is no selector the object
          // has been initialized with a special class name picked up by the
          // Ajax behavior.

          if (instance.selector) {
            const selector = instance.selector.replace('#', '');
            if (selector in ajaxSettings) {
              delete ajaxSettings[selector];
            }
          }
        });
      }

      if (response.merge) {
        $.extend(true, drupalSettings, response.settings);
      } else {
        ajax.settings = response.settings;
      }
    },

    /**
     * Command to attach data using jQuery's data API.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.name
     *   The name or key (in the key value pair) of the data attached to this
     *   selector.
     * @param {string} response.selector
     *   A jQuery selector string.
     * @param {string|object} response.value
     *   The value of to be attached.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    data(ajax, response, status) {
      $(response.selector).data(response.name, response.value);
    },

    /**
     * Command to focus the first tabbable element within a container.
     *
     * If no tabbable elements are found and the container is focusable, then
     * focus will move to that container.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.selector
     *   A query selector string of the container to focus within.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    focusFirst(ajax, response, status) {
      let focusChanged = false;
      const container = document.querySelector(response.selector);
      if (container) {
        // Find all tabbable elements within the container.
        const tabbableElements = tabbable(container);

        // Move focus to the first tabbable item found.
        if (tabbableElements.length) {
          tabbableElements[0].focus();
          focusChanged = true;
        } else if (isFocusable(container)) {
          // If no tabbable elements are found, but the container is focusable,
          // move focus to the container.
          container.focus();
          focusChanged = true;
        }
      }

      // If no items were available to receive focus, return focus to the
      // triggering element.
      if (ajax.hasOwnProperty('element') && !focusChanged) {
        ajax.element.focus();
      }
    },

    /**
     * Command to apply a jQuery method.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {Array} response.args
     *   An array of arguments to the jQuery method, if any.
     * @param {string} response.method
     *   The jQuery method to invoke.
     * @param {string} response.selector
     *   A jQuery selector string.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    invoke(ajax, response, status) {
      const $element = $(response.selector);
      $element[response.method](...response.args);
    },

    /**
     * Command to restripe a table.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.selector
     *   A jQuery selector string.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    restripe(ajax, response, status) {
      // :even and :odd are reversed because jQuery counts from 0 and
      // we count from 1, so we're out of sync.
      // Match immediate children of the parent element to allow nesting.
      $(response.selector)
        .find('> tbody > tr:visible, > tr:visible')
        .removeClass('odd even')
        .filter(':even')
        .addClass('odd')
        .end()
        .filter(':odd')
        .addClass('even');
    },

    /**
     * Command to update a form's build ID.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.old
     *   The old form build ID.
     * @param {string} response.new
     *   The new form build ID.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    update_build_id(ajax, response, status) {
      document
        .querySelectorAll(
          `input[name="form_build_id"][value="${response.old}"]`,
        )
        .forEach((item) => {
          item.value = response.new;
        });
    },

    /**
     * Command to add css.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.data
     *   A string that contains the styles to be added.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    add_css(ajax, response, status) {
      $('head').prepend(response.data);
    },

    /**
     * Command to add a message to the message area.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.messageWrapperQuerySelector
     *   The zone where to add the message. If null, the default will be used.
     * @param {string} response.message
     *   The message text.
     * @param {string} response.messageOptions
     *   The options argument for Drupal.Message().add().
     * @param {boolean} response.clearPrevious
     *   If true, clear previous messages.
     */
    message(ajax, response) {
      const messages = new Drupal.Message(
        document.querySelector(response.messageWrapperQuerySelector),
      );
      if (response.clearPrevious) {
        messages.clear();
      }
      messages.add(response.message, response.messageOptions);
    },

    /**
     * Command to add JS.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {Array} response.data
     *   An array of objects of script attributes.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    add_js(ajax, response, status) {
      const parentEl = document.querySelector(response.selector || 'body');
      const settings = ajax.settings || drupalSettings;
      const allUniqueBundleIds = response.data.map((script) => {
        // loadjs requires a unique ID, and an AJAX instance's `instanceIndex`
        // is guaranteed to be unique.
        // @see Drupal.behaviors.AJAX.detach
        const uniqueBundleId = script.src + ajax.instanceIndex;
        loadjs(script.src, uniqueBundleId, {
          // The default loadjs behavior is to load script with async, in Drupal
          // we need to explicitly tell scripts to load async, this is set in
          // the before callback below if necessary.
          async: false,
          before(path, scriptEl) {
            // This allows all attributes to be added, like defer, async and
            // crossorigin.
            Object.keys(script).forEach((attributeKey) => {
              scriptEl.setAttribute(attributeKey, script[attributeKey]);
            });

            // By default, loadjs appends the script to the head. When scripts
            // are loaded via AJAX, their location has no impact on
            // functionality. But, since non-AJAX loaded scripts can choose
            // their parent element, we provide that option here for the sake of
            // consistency.
            parentEl.appendChild(scriptEl);
            // Return false to bypass loadjs' default DOM insertion mechanism.
            return false;
          },
        });
        return uniqueBundleId;
      });
      // Returns the promise so that the next AJAX command waits on the
      // completion of this one to execute, ensuring the JS is loaded before
      // executing.
      return new Promise((resolve, reject) => {
        loadjs.ready(allUniqueBundleIds, {
          success() {
            Drupal.attachBehaviors(parentEl, settings);
            // All JS files were loaded and new and old behaviors have
            // been attached. Resolve the promise and let the remaining
            // commands execute.
            resolve();
          },
          error(depsNotFound) {
            const message = Drupal.t(
              `The following files could not be loaded: @dependencies`,
              { '@dependencies': depsNotFound.join(', ') },
            );
            reject(message);
          },
        });
      });
    },
  };

  /**
   * Delay jQuery's global completion events until after commands have executed.
   *
   * jQuery triggers the ajaxSuccess, ajaxComplete, and ajaxStop events after
   * a successful response is returned and local success and complete events
   * are triggered. However, Drupal Ajax responses contain commands that run
   * asynchronously in a queue, so the following stops these events from getting
   * triggered until after the Promise that executes the command queue is
   * resolved.
   */
  const stopEvent = (xhr, settings) => {
    return (
      // Only interfere with Drupal's Ajax responses.
      xhr.getResponseHeader('X-Drupal-Ajax-Token') === '1' &&
      // The isInProgress() function might not be defined if the Ajax request
      // was initiated without Drupal.ajax() or new Drupal.Ajax().
      settings.isInProgress &&
      // Until this is false, the Ajax request isn't completely done (the
      // response's commands might still be running).
      settings.isInProgress()
    );
  };
  $.extend(true, $.event.special, {
    ajaxSuccess: {
      trigger(event, xhr, settings) {
        if (stopEvent(xhr, settings)) {
          return false;
        }
      },
    },
    ajaxComplete: {
      trigger(event, xhr, settings) {
        if (stopEvent(xhr, settings)) {
          // jQuery decrements its internal active ajax counter even when we
          // stop the ajaxComplete event, but we don't want that counter
          // decremented, because for our purposes this request is still active
          // while commands are executing. By incrementing it here, the net
          // effect is that it remains unchanged. By remaining above 0, the
          // ajaxStop event is also prevented.
          $.active++;
          return false;
        }
      },
    },
  });
})(jQuery, window, Drupal, drupalSettings, loadjs, window.tabbable);
;
/**
 * @file
 * Ajax theme overrides for Claro.
 */

((Drupal) => {
  /**
   * Theme override of the ajax progress indicator for full screen.
   *
   * @return {string}
   *   The HTML markup for the throbber.
   */
  Drupal.theme.ajaxProgressIndicatorFullscreen = () =>
    '<div class="ajax-progress ajax-progress--fullscreen"><div class="ajax-progress__throbber ajax-progress__throbber--fullscreen">&nbsp;</div></div>';

  /**
   * Theme override of the ajax progress indicator.
   *
   * @param {string} message
   *   The message shown on the UI.
   * @return {string}
   *   The HTML markup for the throbber.
   */
  Drupal.theme.ajaxProgressThrobber = (message) => {
    // Build markup without adding extra white space since it affects rendering.
    const messageMarkup =
      typeof message === 'string'
        ? Drupal.theme('ajaxProgressMessage', message)
        : '';
    const throbber = '<div class="ajax-progress__throbber">&nbsp;</div>';

    return `<div class="ajax-progress ajax-progress--throbber">${throbber}${messageMarkup}</div>`;
  };

  /**
   * Theme override of the ajax progress message.
   *
   * @param {string} message
   *   The message shown on the UI.
   * @return {string}
   *   The HTML markup for the throbber.
   */
  Drupal.theme.ajaxProgressMessage = (message) =>
    `<div class="ajax-progress__message">${message}</div>`;
})(Drupal);
;
/**
 * @file
 * Adapted from underscore.js with the addition Drupal namespace.
 */

/**
 * Limits the invocations of a function in a given time frame.
 *
 * The debounce function wrapper should be used sparingly. One clear use case
 * is limiting the invocation of a callback attached to the window resize event.
 *
 * Before using the debounce function wrapper, consider first whether the
 * callback could be attached to an event that fires less frequently or if the
 * function can be written in such a way that it is only invoked under specific
 * conditions.
 *
 * @param {function} func
 *   The function to be invoked.
 * @param {number} wait
 *   The time period within which the callback function should only be
 *   invoked once. For example if the wait period is 250ms, then the callback
 *   will only be called at most 4 times per second.
 * @param {boolean} immediate
 *   Whether we wait at the beginning or end to execute the function.
 *
 * @return {function}
 *   The debounced function.
 */
Drupal.debounce = function (func, wait, immediate) {
  let timeout;
  let result;
  return function (...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
      }
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
    }
    return result;
  };
};
;
/**
 * @file
 * Adds an HTML element and method to trigger audio UAs to read system messages.
 *
 * Use {@link Drupal.announce} to indicate to screen reader users that an
 * element on the page has changed state. For instance, if clicking a link
 * loads 10 more items into a list, one might announce the change like this.
 *
 * @example
 * $('#search-list')
 *   .on('itemInsert', function (event, data) {
 *     // Insert the new items.
 *     $(data.container.el).append(data.items.el);
 *     // Announce the change to the page contents.
 *     Drupal.announce(Drupal.t('@count items added to @container',
 *       {'@count': data.items.length, '@container': data.container.title}
 *     ));
 *   });
 */

(function (Drupal, debounce) {
  let liveElement;
  const announcements = [];

  /**
   * Builds a div element with the aria-live attribute and add it to the DOM.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches the behavior for drupalAnnounce.
   */
  Drupal.behaviors.drupalAnnounce = {
    attach(context) {
      // Create only one aria-live element.
      if (!liveElement) {
        liveElement = document.createElement('div');
        liveElement.id = 'drupal-live-announce';
        liveElement.className = 'visually-hidden';
        liveElement.setAttribute('aria-live', 'polite');
        liveElement.setAttribute('aria-busy', 'false');
        document.body.appendChild(liveElement);
      }
    },
  };

  /**
   * Concatenates announcements to a single string; appends to the live region.
   */
  function announce() {
    const text = [];
    let priority = 'polite';
    let announcement;

    // Create an array of announcement strings to be joined and appended to the
    // aria live region.
    const il = announcements.length;
    for (let i = 0; i < il; i++) {
      announcement = announcements.pop();
      text.unshift(announcement.text);
      // If any of the announcements has a priority of assertive then the group
      // of joined announcements will have this priority.
      if (announcement.priority === 'assertive') {
        priority = 'assertive';
      }
    }

    if (text.length) {
      // Clear the liveElement so that repeated strings will be read.
      liveElement.innerHTML = '';
      // Set the busy state to true until the node changes are complete.
      liveElement.setAttribute('aria-busy', 'true');
      // Set the priority to assertive, or default to polite.
      liveElement.setAttribute('aria-live', priority);
      // Print the text to the live region. Text should be run through
      // Drupal.t() before being passed to Drupal.announce().
      liveElement.innerHTML = text.join('\n');
      // The live text area is updated. Allow the AT to announce the text.
      liveElement.setAttribute('aria-busy', 'false');
    }
  }

  /**
   * Triggers audio UAs to read the supplied text.
   *
   * The aria-live region will only read the text that currently populates its
   * text node. Replacing text quickly in rapid calls to announce results in
   * only the text from the most recent call to {@link Drupal.announce} being
   * read. By wrapping the call to announce in a debounce function, we allow for
   * time for multiple calls to {@link Drupal.announce} to queue up their
   * messages. These messages are then joined and append to the aria-live region
   * as one text node.
   *
   * @param {string} text
   *   A string to be read by the UA.
   * @param {string} [priority='polite']
   *   A string to indicate the priority of the message. Can be either
   *   'polite' or 'assertive'.
   *
   * @return {function}
   *   The return of the call to debounce.
   *
   * @see http://www.w3.org/WAI/PF/aria-practices/#liveprops
   */
  Drupal.announce = function (text, priority) {
    // Save the text and priority into a closure variable. Multiple simultaneous
    // announcements will be concatenated and read in sequence.
    announcements.push({
      text,
      priority,
    });
    // Immediately invoke the function that debounce returns. 200 ms is right at
    // the cusp where humans notice a pause, so we will wait
    // at most this much time before the set of queued announcements is read.
    return debounce(announce, 200)();
  };
})(Drupal, Drupal.debounce);
;
/**
 * @file
 * Message API.
 */
((Drupal) => {
  /**
   * @typedef {class} Drupal.Message~messageDefinition
   */

  /**
   * Constructs a new instance of the Drupal.Message class.
   *
   * This provides a uniform interface for adding and removing messages to a
   * specific location on the page.
   *
   * @param {HTMLElement} messageWrapper
   *   The zone where to add messages. If no element is provided an attempt is
   *   made to determine a default location.
   *
   * @return {Drupal.Message~messageDefinition}
   *   Class to add and remove messages.
   */
  Drupal.Message = class {
    constructor(messageWrapper = null) {
      if (!messageWrapper) {
        this.messageWrapper = Drupal.Message.defaultWrapper();
      } else {
        this.messageWrapper = messageWrapper;
      }
    }

    /**
     * Attempt to determine the default location for
     * inserting JavaScript messages or create one if needed.
     *
     * @return {HTMLElement}
     *   The default destination for JavaScript messages.
     */
    static defaultWrapper() {
      let wrapper = document.querySelector('[data-drupal-messages]');
      if (!wrapper) {
        wrapper = document.querySelector('[data-drupal-messages-fallback]');
        wrapper.removeAttribute('data-drupal-messages-fallback');
        wrapper.setAttribute('data-drupal-messages', '');
        wrapper.classList.remove('hidden');
      }
      return wrapper.innerHTML === ''
        ? Drupal.Message.messageInternalWrapper(wrapper)
        : wrapper.firstElementChild;
    }

    /**
     * Provide an object containing the available message types.
     *
     * @return {Object}
     *   An object containing message type strings.
     */
    static getMessageTypeLabels() {
      return {
        status: Drupal.t('Status message'),
        error: Drupal.t('Error message'),
        warning: Drupal.t('Warning message'),
      };
    }

    /**
     * Sequentially adds a message to the message area.
     *
     * @name Drupal.Message~messageDefinition.add
     *
     * @param {string} message
     *   The message to display
     * @param {object} [options]
     *   The context of the message.
     * @param {string} [options.id]
     *   The message ID, it can be a simple value: `'filevalidationerror'`
     *   or several values separated by a space: `'mymodule formvalidation'`
     *   which can be used as an explicit selector for a message.
     * @param {string} [options.type=status]
     *   Message type, can be either 'status', 'error' or 'warning'.
     * @param {string} [options.announce]
     *   Screen-reader version of the message if necessary. To prevent a message
     *   being sent to Drupal.announce() this should be an empty string.
     * @param {string} [options.priority]
     *   Priority of the message for Drupal.announce().
     *
     * @return {string}
     *   ID of message.
     */
    add(message, options = {}) {
      if (!options.hasOwnProperty('type')) {
        options.type = 'status';
      }

      if (typeof message !== 'string') {
        throw new Error('Message must be a string.');
      }

      // Send message to screen reader.
      Drupal.Message.announce(message, options);
      /**
       * Use the provided index for the message or generate a pseudo-random key
       * to allow message deletion.
       */
      options.id = options.id
        ? String(options.id)
        : `${options.type}-${Math.random().toFixed(15).replace('0.', '')}`;

      // Throw an error if an unexpected message type is used.
      if (!Drupal.Message.getMessageTypeLabels().hasOwnProperty(options.type)) {
        const { type } = options;
        throw new Error(
          `The message type, ${type}, is not present in Drupal.Message.getMessageTypeLabels().`,
        );
      }

      this.messageWrapper.appendChild(
        Drupal.theme('message', { text: message }, options),
      );

      return options.id;
    }

    /**
     * Select a message based on id.
     *
     * @name Drupal.Message~messageDefinition.select
     *
     * @param {string} id
     *   The message id to delete from the area.
     *
     * @return {Element}
     *   Element found.
     */
    select(id) {
      return this.messageWrapper.querySelector(
        `[data-drupal-message-id^="${id}"]`,
      );
    }

    /**
     * Removes messages from the message area.
     *
     * @name Drupal.Message~messageDefinition.remove
     *
     * @param {string} id
     *   Index of the message to remove, as returned by
     *   {@link Drupal.Message~messageDefinition.add}.
     *
     * @return {number}
     *   Number of removed messages.
     */
    remove(id) {
      return this.messageWrapper.removeChild(this.select(id));
    }

    /**
     * Removes all messages from the message area.
     *
     * @name Drupal.Message~messageDefinition.clear
     */
    clear() {
      Array.prototype.forEach.call(
        this.messageWrapper.querySelectorAll('[data-drupal-message-id]'),
        (message) => {
          this.messageWrapper.removeChild(message);
        },
      );
    }

    /**
     * Helper to call Drupal.announce() with the right parameters.
     *
     * @param {string} message
     *   Displayed message.
     * @param {object} options
     *   Additional data.
     * @param {string} [options.announce]
     *   Screen-reader version of the message if necessary. To prevent a message
     *   being sent to Drupal.announce() this should be `''`.
     * @param {string} [options.priority]
     *   Priority of the message for Drupal.announce().
     * @param {string} [options.type]
     *   Message type, can be either 'status', 'error' or 'warning'.
     */
    static announce(message, options) {
      if (
        !options.priority &&
        (options.type === 'warning' || options.type === 'error')
      ) {
        options.priority = 'assertive';
      }
      /**
       * If screen reader message is not disabled announce screen reader
       * specific text or fallback to the displayed message.
       */
      if (options.announce !== '') {
        Drupal.announce(options.announce || message, options.priority);
      }
    }

    /**
     * Function for creating the internal message wrapper element.
     *
     * @param {HTMLElement} messageWrapper
     *   The message wrapper.
     *
     * @return {HTMLElement}
     *   The internal wrapper DOM element.
     */
    static messageInternalWrapper(messageWrapper) {
      const innerWrapper = document.createElement('div');
      innerWrapper.setAttribute('class', 'messages__wrapper');
      messageWrapper.insertAdjacentElement('afterbegin', innerWrapper);
      return innerWrapper;
    }
  };

  /**
   * Theme function for a message.
   *
   * @param {object} message
   *   The message object.
   * @param {string} message.text
   *   The message text.
   * @param {object} options
   *   The message context.
   * @param {string} options.type
   *   The message type.
   * @param {string} options.id
   *   ID of the message, for reference.
   *
   * @return {HTMLElement}
   *   A DOM Node.
   */
  Drupal.theme.message = ({ text }, { type, id }) => {
    const messagesTypes = Drupal.Message.getMessageTypeLabels();
    const messageWrapper = document.createElement('div');

    messageWrapper.setAttribute('class', `messages messages--${type}`);
    messageWrapper.setAttribute(
      'role',
      type === 'error' || type === 'warning' ? 'alert' : 'status',
    );
    messageWrapper.setAttribute('data-drupal-message-id', id);
    messageWrapper.setAttribute('data-drupal-message-type', type);

    messageWrapper.setAttribute('aria-label', messagesTypes[type]);

    messageWrapper.innerHTML = `${text}`;

    return messageWrapper;
  };
})(Drupal);
;
/**
 * @file
 * Message template overrides.
 */

((Drupal) => {
  /**
   * Overrides message theme function.
   *
   * @param {object} message
   *   The message object.
   * @param {string} message.text
   *   The message text.
   * @param {object} options
   *   The message context.
   * @param {string} options.type
   *   The message type.
   * @param {string} options.id
   *   ID of the message, for reference.
   *
   * @return {HTMLElement}
   *   A DOM Node.
   */
  Drupal.theme.message = ({ text }, { type, id }) => {
    const messagesTypes = Drupal.Message.getMessageTypeLabels();
    const messageWrapper = document.createElement('div');

    messageWrapper.setAttribute('class', `messages messages--${type}`);
    messageWrapper.setAttribute(
      'role',
      type === 'error' || type === 'warning' ? 'alert' : 'status',
    );
    messageWrapper.setAttribute('aria-labelledby', `${id}-title`);
    messageWrapper.setAttribute('data-drupal-message-id', id);
    messageWrapper.setAttribute('data-drupal-message-type', type);

    messageWrapper.innerHTML = `
    <div class="messages__header">
      <h2 id="${id}-title" class="messages__title">
        ${messagesTypes[type]}
      </h2>
    </div>
    <div class="messages__content">
      ${text}
    </div>
  `;

    return messageWrapper;
  };
})(Drupal);
;
/**
 * @file
 * Attaches behaviors for Drupal's active link marking.
 */

(function (Drupal, drupalSettings) {
  /**
   * Append is-active class.
   *
   * The link is only active if its path corresponds to the current path, the
   * language of the linked path is equal to the current language, and if the
   * query parameters of the link equal those of the current request, since the
   * same request with different query parameters may yield a different page
   * (e.g. pagers, exposed View filters).
   *
   * Does not discriminate based on element type, so allows you to set the
   * is-active class on any element: a, li…
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.activeLinks = {
    attach(context) {
      // Start by finding all potentially active links.
      const path = drupalSettings.path;
      const queryString = JSON.stringify(path.currentQuery);
      const querySelector = path.currentQuery
        ? `[data-drupal-link-query='${queryString}']`
        : ':not([data-drupal-link-query])';
      const originalSelectors = [
        `[data-drupal-link-system-path="${path.currentPath}"]`,
      ];
      let selectors;

      // If this is the front page, we have to check for the <front> path as
      // well.
      if (path.isFront) {
        originalSelectors.push('[data-drupal-link-system-path="<front>"]');
      }

      // Add language filtering.
      selectors = [].concat(
        // Links without any hreflang attributes (most of them).
        originalSelectors.map((selector) => `${selector}:not([hreflang])`),
        // Links with hreflang equals to the current language.
        originalSelectors.map(
          (selector) => `${selector}[hreflang="${path.currentLanguage}"]`,
        ),
      );

      // Add query string selector for pagers, exposed filters.
      selectors = selectors.map((current) => current + querySelector);

      // Query the DOM.
      const activeLinks = context.querySelectorAll(selectors.join(','));
      const il = activeLinks.length;
      for (let i = 0; i < il; i++) {
        activeLinks[i].classList.add('is-active');
      }
    },
    detach(context, settings, trigger) {
      if (trigger === 'unload') {
        const activeLinks = context.querySelectorAll(
          '[data-drupal-link-system-path].is-active',
        );
        const il = activeLinks.length;
        for (let i = 0; i < il; i++) {
          activeLinks[i].classList.remove('is-active');
        }
      }
    },
  };
})(Drupal, drupalSettings);
;
/**
 * @file
 * Form features.
 */

/**
 * Triggers when a value in the form changed.
 *
 * The event triggers when content is typed or pasted in a text field, before
 * the change event triggers.
 *
 * @event formUpdated
 */

/**
 * Triggers when a click on a page fragment link or hash change is detected.
 *
 * The event triggers when the fragment in the URL changes (a hash change) and
 * when a link containing a fragment identifier is clicked. In case the hash
 * changes due to a click this event will only be triggered once.
 *
 * @event formFragmentLinkClickOrHashChange
 */

(function ($, Drupal, debounce) {
  /**
   * Retrieves the summary for the first element.
   *
   * @return {string}
   *   The text of the summary.
   */
  $.fn.drupalGetSummary = function () {
    const callback = this.data('summaryCallback');
    return this[0] && callback ? callback(this[0]).trim() : '';
  };

  /**
   * Sets the summary for all matched elements.
   *
   * @param {function} callback
   *   Either a function that will be called each time the summary is
   *   retrieved or a string (which is returned each time).
   *
   * @return {jQuery}
   *   jQuery collection of the current element.
   *
   * @fires event:summaryUpdated
   *
   * @listens event:formUpdated
   */
  $.fn.drupalSetSummary = function (callback) {
    const self = this;

    // To facilitate things, the callback should always be a function. If it's
    // not, we wrap it into an anonymous function which just returns the value.
    if (typeof callback !== 'function') {
      const val = callback;
      callback = function () {
        return val;
      };
    }

    return (
      this.data('summaryCallback', callback)
        // To prevent duplicate events, the handlers are first removed and then
        // (re-)added.
        .off('formUpdated.summary')
        .on('formUpdated.summary', () => {
          self.trigger('summaryUpdated');
        })
        // The actual summaryUpdated handler doesn't fire when the callback is
        // changed, so we have to do this manually.
        .trigger('summaryUpdated')
    );
  };

  /**
   * Prevents consecutive form submissions of identical form values.
   *
   * Repetitive form submissions that would submit the identical form values
   * are prevented, unless the form values are different to the previously
   * submitted values.
   *
   * This is a simplified re-implementation of a user-agent behavior that
   * should be natively supported by major web browsers, but at this time, only
   * Firefox has a built-in protection.
   *
   * A form value-based approach ensures that the constraint is triggered for
   * consecutive, identical form submissions only. Compared to that, a form
   * button-based approach would (1) rely on [visible] buttons to exist where
   * technically not required and (2) require more complex state management if
   * there are multiple buttons in a form.
   *
   * This implementation is based on form-level submit events only and relies
   * on jQuery's serialize() method to determine submitted form values. As such,
   * the following limitations exist:
   *
   * - Event handlers on form buttons that preventDefault() do not receive a
   *   double-submit protection. That is deemed to be fine, since such button
   *   events typically trigger reversible client-side or server-side
   *   operations that are local to the context of a form only.
   * - Changed values in advanced form controls, such as file inputs, are not
   *   part of the form values being compared between consecutive form submits
   *   (due to limitations of jQuery.serialize()). That is deemed to be
   *   acceptable, because if the user forgot to attach a file, then the size of
   *   HTTP payload will most likely be small enough to be fully passed to the
   *   server endpoint within (milli)seconds. If a user mistakenly attached a
   *   wrong file and is technically versed enough to cancel the form submission
   *   (and HTTP payload) in order to attach a different file, then that
   *   edge-case is not supported here.
   *
   * Lastly, all forms submitted via HTTP GET are idempotent by definition of
   * HTTP standards, so excluded in this implementation.
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.formSingleSubmit = {
    attach() {
      function onFormSubmit(e) {
        const $form = $(e.currentTarget);
        const formValues = $form.serialize();
        const previousValues = $form.attr('data-drupal-form-submit-last');
        if (previousValues === formValues) {
          e.preventDefault();
        } else {
          $form.attr('data-drupal-form-submit-last', formValues);
        }
      }

      $(once('form-single-submit', 'body')).on(
        'submit.singleSubmit',
        'form:not([method~="GET"])',
        onFormSubmit,
      );
    },
  };

  /**
   * Sends a 'formUpdated' event each time a form element is modified.
   *
   * @param {HTMLElement} element
   *   The element to trigger a form updated event on.
   *
   * @fires event:formUpdated
   */
  function triggerFormUpdated(element) {
    $(element).trigger('formUpdated');
  }

  /**
   * Collects the IDs of all form fields in the given form.
   *
   * @param {HTMLFormElement} form
   *   The form element to search.
   *
   * @return {Array}
   *   Array of IDs for form fields.
   */
  function fieldsList(form) {
    // We use id to avoid name duplicates on radio fields and filter out
    // elements with a name but no id.
    return [].map.call(form.querySelectorAll('[name][id]'), (el) => el.id);
  }

  /**
   * Triggers the 'formUpdated' event on form elements when they are modified.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches formUpdated behaviors.
   * @prop {Drupal~behaviorDetach} detach
   *   Detaches formUpdated behaviors.
   *
   * @fires event:formUpdated
   */
  Drupal.behaviors.formUpdated = {
    attach(context) {
      const $context = $(context);
      const contextIsForm = $context.is('form');
      const $forms = $(
        once('form-updated', contextIsForm ? $context : $context.find('form')),
      );
      let formFields;

      if ($forms.length) {
        // Initialize form behaviors, use $.makeArray to be able to use native
        // forEach array method and have the callback parameters in the right
        // order.
        $.makeArray($forms).forEach((form) => {
          const events = 'change.formUpdated input.formUpdated ';
          const eventHandler = debounce((event) => {
            triggerFormUpdated(event.target);
          }, 300);
          formFields = fieldsList(form).join(',');

          form.setAttribute('data-drupal-form-fields', formFields);
          $(form).on(events, eventHandler);
        });
      }
      // On ajax requests context is the form element.
      if (contextIsForm) {
        formFields = fieldsList(context).join(',');
        // @todo replace with form.getAttribute() when #1979468 is in.
        const currentFields = $(context).attr('data-drupal-form-fields');
        // If there has been a change in the fields or their order, trigger
        // formUpdated.
        if (formFields !== currentFields) {
          triggerFormUpdated(context);
        }
      }
    },
    detach(context, settings, trigger) {
      const $context = $(context);
      const contextIsForm = $context.is('form');
      if (trigger === 'unload') {
        once
          .remove(
            'form-updated',
            contextIsForm ? $context : $context.find('form'),
          )
          .forEach((form) => {
            form.removeAttribute('data-drupal-form-fields');
            $(form).off('.formUpdated');
          });
      }
    },
  };

  /**
   * Prepopulate form fields with information from the visitor browser.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches the behavior for filling user info from browser.
   */
  Drupal.behaviors.fillUserInfoFromBrowser = {
    attach(context, settings) {
      const userInfo = ['name', 'mail', 'homepage'];
      const $forms = $(
        once('user-info-from-browser', '[data-user-info-from-browser]'),
      );
      if ($forms.length) {
        userInfo.forEach((info) => {
          const $element = $forms.find(`[name=${info}]`);
          const browserData = localStorage.getItem(`Drupal.visitor.${info}`);
          if (!$element.length) {
            return;
          }
          const emptyValue = $element[0].value === '';
          const defaultValue =
            $element.attr('data-drupal-default-value') === $element[0].value;
          if (browserData && (emptyValue || defaultValue)) {
            $element.each(function (index, item) {
              item.value = browserData;
            });
          }
        });
      }
      $forms.on('submit', () => {
        userInfo.forEach((info) => {
          const $element = $forms.find(`[name=${info}]`);
          if ($element.length) {
            localStorage.setItem(`Drupal.visitor.${info}`, $element[0].value);
          }
        });
      });
    },
  };

  /**
   * Sends a fragment interaction event on a hash change or fragment link click.
   *
   * @param {jQuery.Event} e
   *   The event triggered.
   *
   * @fires event:formFragmentLinkClickOrHashChange
   */
  const handleFragmentLinkClickOrHashChange = (e) => {
    let url;
    if (e.type === 'click') {
      url = e.currentTarget.location
        ? e.currentTarget.location
        : e.currentTarget;
    } else {
      url = window.location;
    }
    const hash = url.hash.substr(1);
    if (hash) {
      const $target = $(`#${hash}`);
      $('body').trigger('formFragmentLinkClickOrHashChange', [$target]);

      /**
       * Clicking a fragment link or a hash change should focus the target
       * element, but event timing issues in multiple browsers require a timeout.
       */
      setTimeout(() => $target.trigger('focus'), 300);
    }
  };

  const debouncedHandleFragmentLinkClickOrHashChange = debounce(
    handleFragmentLinkClickOrHashChange,
    300,
    true,
  );

  // Binds a listener to handle URL fragment changes.
  $(window).on(
    'hashchange.form-fragment',
    debouncedHandleFragmentLinkClickOrHashChange,
  );

  /**
   * Binds a listener to handle clicks on fragment links and absolute URL links
   * containing a fragment, this is needed next to the hash change listener
   * because clicking such links doesn't trigger a hash change when the fragment
   * is already in the URL.
   */
  $(document).on(
    'click.form-fragment',
    'a[href*="#"]',
    debouncedHandleFragmentLinkClickOrHashChange,
  );
})(jQuery, Drupal, Drupal.debounce);
;
/**
 * @file
 * Adds a summary of a details element's contents to its summary element.
 */
(($, Drupal) => {
  /**
   * The DetailsSummarizedContent object represents a single details element.
   *
   * @constructor Drupal.DetailsSummarizedContent
   *
   * @param {HTMLElement} node
   *   A details element, the summary of which may have supplemental text.
   *   The supplemental text summarizes the details element's contents.
   */
  function DetailsSummarizedContent(node) {
    this.$node = $(node);
    this.setupSummary();
  }

  $.extend(
    DetailsSummarizedContent,
    /** @lends Drupal.DetailsSummarizedContent */ {
      /**
       * Holds references to instantiated DetailsSummarizedContent objects.
       *
       * @type {Array.<Drupal.DetailsSummarizedContent>}
       */
      instances: [],
    },
  );

  $.extend(
    DetailsSummarizedContent.prototype,
    /** @lends Drupal.DetailsSummarizedContent# */ {
      /**
       * Initialize and setup summary events and markup.
       *
       * @fires event:summaryUpdated
       *
       * @listens event:summaryUpdated
       */
      setupSummary() {
        this.$detailsSummarizedContentWrapper = $(
          Drupal.theme('detailsSummarizedContentWrapper'),
        );
        this.$node
          .on('summaryUpdated', $.proxy(this.onSummaryUpdated, this))
          .trigger('summaryUpdated')
          .find('> summary')
          .append(this.$detailsSummarizedContentWrapper);
      },

      /**
       * Update summary.
       */
      onSummaryUpdated() {
        const text = this.$node.drupalGetSummary();
        this.$detailsSummarizedContentWrapper.html(
          Drupal.theme('detailsSummarizedContentText', text),
        );
      },
    },
  );

  /**
   * Adds a summary of a details element's contents to its summary element.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches behavior for the details element.
   */
  Drupal.behaviors.detailsSummary = {
    attach(context) {
      DetailsSummarizedContent.instances =
        DetailsSummarizedContent.instances.concat(
          once('details', 'details', context).map(
            (details) => new DetailsSummarizedContent(details),
          ),
        );
    },
  };

  Drupal.DetailsSummarizedContent = DetailsSummarizedContent;

  /**
   * The element containing a wrapper for summarized details content.
   *
   * @return {string}
   *   The markup for the element that will contain the summarized content.
   */
  Drupal.theme.detailsSummarizedContentWrapper = () =>
    `<span class="summary"></span>`;

  /**
   * Formats the summarized details content text.
   *
   * @param {string|null} [text]
   *   (optional) The summarized content text displayed in the summary.
   * @return {string}
   *   The formatted summarized content text.
   */
  Drupal.theme.detailsSummarizedContentText = (text) =>
    text ? ` (${text})` : '';
})(jQuery, Drupal);
;
/**
 * @file
 * Add aria attribute handling for details and summary elements.
 */

(function ($, Drupal) {
  /**
   * Handles `aria-expanded` and `aria-pressed` attributes on details elements.
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.detailsAria = {
    attach() {
      $(once('detailsAria', 'body')).on(
        'click.detailsAria',
        'summary',
        (event) => {
          const $summary = $(event.currentTarget);
          const open =
            $(event.currentTarget.parentNode).attr('open') === 'open'
              ? 'false'
              : 'true';

          $summary.attr({
            'aria-expanded': open,
            'aria-pressed': open,
          });
        },
      );
    },
  };
})(jQuery, Drupal);
;
/**
 * @file
 * Additional functionality for HTML5 details elements.
 */

(function ($) {
  /**
   * Open parent details elements of a targeted page fragment.
   *
   * Opens all (nested) details element on a hash change or fragment link click
   * when the target is a child element, in order to make sure the targeted
   * element is visible. Aria attributes on the summary
   * are set by triggering the click event listener in details-aria.js.
   *
   * @param {jQuery.Event} e
   *   The event triggered.
   * @param {jQuery} $target
   *   The targeted node as a jQuery object.
   */
  const handleFragmentLinkClickOrHashChange = (e, $target) => {
    $target.parents('details').not('[open]').find('> summary').trigger('click');
  };

  /**
   * Binds a listener to handle fragment link clicks and URL hash changes.
   */
  $('body').on(
    'formFragmentLinkClickOrHashChange.details',
    handleFragmentLinkClickOrHashChange,
  );
})(jQuery);
;
/**
 * @file
 * Claro's polyfill enhancements for HTML5 details.
 */

(($, Drupal) => {
  /**
   * Workaround for Firefox.
   *
   * Firefox applies the focus state only for keyboard navigation.
   * We have to manually trigger focus to make the behavior consistent across
   * browsers.
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.claroDetails = {
    attach(context) {
      // The second argument of once() needs to be an instance of Element, but
      // document is an instance of Document, replace it with the html Element.
      $(once('claroDetails', context === document ? 'html' : context)).on(
        'click',
        (event) => {
          if (event.target.nodeName === 'SUMMARY') {
            $(event.target).trigger('focus');
          }
        },
      );
    },
  };

  /**
   * Theme override providing a wrapper for summarized details content.
   *
   * @return {string}
   *   The markup for the element that will contain the summarized content.
   */
  Drupal.theme.detailsSummarizedContentWrapper = () =>
    `<span class="claro-details__summary-summary"></span>`;

  /**
   * Theme override of summarized details content text.
   *
   * @param {string|null} [text]
   *   (optional) The summarized content displayed in the summary.
   * @return {string}
   *   The formatted summarized content text.
   */
  Drupal.theme.detailsSummarizedContentText = (text) => text || '';
})(jQuery, Drupal);
;
/* @preserve
 * Leaflet 1.9.2+pull/7519#pullrequestreview-1169659986.0fc77c4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2022 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).leaflet={})}(this,function(t){"use strict";function l(t){for(var e,i,n=1,o=arguments.length;n<o;n++)for(e in i=arguments[n])t[e]=i[e];return t}var R=Object.create||function(t){return N.prototype=t,new N};function N(){}function a(t,e){var i,n=Array.prototype.slice;return t.bind?t.bind.apply(t,n.call(arguments,1)):(i=n.call(arguments,2),function(){return t.apply(e,i.length?i.concat(n.call(arguments)):arguments)})}var D=0;function h(t){return"_leaflet_id"in t||(t._leaflet_id=++D),t._leaflet_id}function j(t,e,i){var n,o,s=function(){n=!1,o&&(r.apply(i,o),o=!1)},r=function(){n?o=arguments:(t.apply(i,arguments),setTimeout(s,e),n=!0)};return r}function H(t,e,i){var n=e[1],e=e[0],o=n-e;return t===n&&i?t:((t-e)%o+o)%o+e}function u(){return!1}function i(t,e){return!1===e?t:(e=Math.pow(10,void 0===e?6:e),Math.round(t*e)/e)}function F(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function W(t){return F(t).split(/\s+/)}function c(t,e){for(var i in Object.prototype.hasOwnProperty.call(t,"options")||(t.options=t.options?R(t.options):{}),e)t.options[i]=e[i];return t.options}function U(t,e,i){var n,o=[];for(n in t)o.push(encodeURIComponent(i?n.toUpperCase():n)+"="+encodeURIComponent(t[n]));return(e&&-1!==e.indexOf("?")?"&":"?")+o.join("&")}var V=/\{ *([\w_ -]+) *\}/g;function q(t,i){return t.replace(V,function(t,e){e=i[e];if(void 0===e)throw new Error("No value provided for variable "+t);return e="function"==typeof e?e(i):e})}var d=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function G(t,e){for(var i=0;i<t.length;i++)if(t[i]===e)return i;return-1}var K="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function Y(t){return window["webkit"+t]||window["moz"+t]||window["ms"+t]}var X=0;function J(t){var e=+new Date,i=Math.max(0,16-(e-X));return X=e+i,window.setTimeout(t,i)}var $=window.requestAnimationFrame||Y("RequestAnimationFrame")||J,Q=window.cancelAnimationFrame||Y("CancelAnimationFrame")||Y("CancelRequestAnimationFrame")||function(t){window.clearTimeout(t)};function x(t,e,i){if(!i||$!==J)return $.call(window,a(t,e));t.call(e)}function r(t){t&&Q.call(window,t)}var tt={__proto__:null,extend:l,create:R,bind:a,get lastId(){return D},stamp:h,throttle:j,wrapNum:H,falseFn:u,formatNum:i,trim:F,splitWords:W,setOptions:c,getParamString:U,template:q,isArray:d,indexOf:G,emptyImageUrl:K,requestFn:$,cancelFn:Q,requestAnimFrame:x,cancelAnimFrame:r};function et(){}et.extend=function(t){function e(){c(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()}var i,n=e.__super__=this.prototype,o=R(n);for(i in(o.constructor=e).prototype=o,this)Object.prototype.hasOwnProperty.call(this,i)&&"prototype"!==i&&"__super__"!==i&&(e[i]=this[i]);if(t.statics&&l(e,t.statics),t.includes){var s=t.includes;if("undefined"!=typeof L&&L&&L.Mixin){s=d(s)?s:[s];for(var r=0;r<s.length;r++)s[r]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",(new Error).stack)}l.apply(null,[o].concat(t.includes))}return l(o,t),delete o.statics,delete o.includes,o.options&&(o.options=n.options?R(n.options):{},l(o.options,t.options)),o._initHooks=[],o.callInitHooks=function(){if(!this._initHooksCalled){n.callInitHooks&&n.callInitHooks.call(this),this._initHooksCalled=!0;for(var t=0,e=o._initHooks.length;t<e;t++)o._initHooks[t].call(this)}},e},et.include=function(t){var e=this.prototype.options;return l(this.prototype,t),t.options&&(this.prototype.options=e,this.mergeOptions(t.options)),this},et.mergeOptions=function(t){return l(this.prototype.options,t),this},et.addInitHook=function(t){var e=Array.prototype.slice.call(arguments,1),i="function"==typeof t?t:function(){this[t].apply(this,e)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(i),this};var e={on:function(t,e,i){if("object"==typeof t)for(var n in t)this._on(n,t[n],e);else for(var o=0,s=(t=W(t)).length;o<s;o++)this._on(t[o],e,i);return this},off:function(t,e,i){if(arguments.length)if("object"==typeof t)for(var n in t)this._off(n,t[n],e);else{t=W(t);for(var o=1===arguments.length,s=0,r=t.length;s<r;s++)o?this._off(t[s]):this._off(t[s],e,i)}else delete this._events;return this},_on:function(t,e,i,n){"function"!=typeof e?console.warn("wrong listener type: "+typeof e):!1===this._listens(t,e,i)&&(e={fn:e,ctx:i=i===this?void 0:i},n&&(e.once=!0),this._events=this._events||{},this._events[t]=this._events[t]||[],this._events[t].push(e))},_off:function(t,e,i){var n,o,s;if(this._events&&(n=this._events[t]))if(1===arguments.length){if(this._firingCount)for(o=0,s=n.length;o<s;o++)n[o].fn=u;delete this._events[t]}else"function"!=typeof e?console.warn("wrong listener type: "+typeof e):!1!==(e=this._listens(t,e,i))&&(i=n[e],this._firingCount&&(i.fn=u,this._events[t]=n=n.slice()),n.splice(e,1))},fire:function(t,e,i){if(this.listens(t,i)){var n=l({},e,{type:t,target:this,sourceTarget:e&&e.sourceTarget||this});if(this._events){var o=this._events[t];if(o){this._firingCount=this._firingCount+1||1;for(var s=0,r=o.length;s<r;s++){var a=o[s],h=a.fn;a.once&&this.off(t,h,a.ctx),h.call(a.ctx||this,n)}this._firingCount--}}i&&this._propagateEvent(n)}return this},listens:function(t,e,i,n){"string"!=typeof t&&console.warn('"string" type argument expected');var o=e,s=("function"!=typeof e&&(n=!!e,i=o=void 0),this._events&&this._events[t]);if(s&&s.length&&!1!==this._listens(t,o,i))return!0;if(n)for(var r in this._eventParents)if(this._eventParents[r].listens(t,e,i,n))return!0;return!1},_listens:function(t,e,i){if(this._events){var n=this._events[t]||[];if(!e)return!!n.length;i===this&&(i=void 0);for(var o=0,s=n.length;o<s;o++)if(n[o].fn===e&&n[o].ctx===i)return o}return!1},once:function(t,e,i){if("object"==typeof t)for(var n in t)this._on(n,t[n],e,!0);else for(var o=0,s=(t=W(t)).length;o<s;o++)this._on(t[o],e,i,!0);return this},addEventParent:function(t){return this._eventParents=this._eventParents||{},this._eventParents[h(t)]=t,this},removeEventParent:function(t){return this._eventParents&&delete this._eventParents[h(t)],this},_propagateEvent:function(t){for(var e in this._eventParents)this._eventParents[e].fire(t.type,l({layer:t.target,propagatedFrom:t.target},t),!0)}},it=(e.addEventListener=e.on,e.removeEventListener=e.clearAllEventListeners=e.off,e.addOneTimeEventListener=e.once,e.fireEvent=e.fire,e.hasEventListeners=e.listens,et.extend(e));function p(t,e,i){this.x=i?Math.round(t):t,this.y=i?Math.round(e):e}var nt=Math.trunc||function(t){return 0<t?Math.floor(t):Math.ceil(t)};function m(t,e,i){return t instanceof p?t:d(t)?new p(t[0],t[1]):null==t?t:"object"==typeof t&&"x"in t&&"y"in t?new p(t.x,t.y):new p(t,e,i)}function f(t,e){if(t)for(var i=e?[t,e]:t,n=0,o=i.length;n<o;n++)this.extend(i[n])}function _(t,e){return!t||t instanceof f?t:new f(t,e)}function s(t,e){if(t)for(var i=e?[t,e]:t,n=0,o=i.length;n<o;n++)this.extend(i[n])}function g(t,e){return t instanceof s?t:new s(t,e)}function v(t,e,i){if(isNaN(t)||isNaN(e))throw new Error("Invalid LatLng object: ("+t+", "+e+")");this.lat=+t,this.lng=+e,void 0!==i&&(this.alt=+i)}function w(t,e,i){return t instanceof v?t:d(t)&&"object"!=typeof t[0]?3===t.length?new v(t[0],t[1],t[2]):2===t.length?new v(t[0],t[1]):null:null==t?t:"object"==typeof t&&"lat"in t?new v(t.lat,"lng"in t?t.lng:t.lon,t.alt):void 0===e?null:new v(t,e,i)}p.prototype={clone:function(){return new p(this.x,this.y)},add:function(t){return this.clone()._add(m(t))},_add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.clone()._subtract(m(t))},_subtract:function(t){return this.x-=t.x,this.y-=t.y,this},divideBy:function(t){return this.clone()._divideBy(t)},_divideBy:function(t){return this.x/=t,this.y/=t,this},multiplyBy:function(t){return this.clone()._multiplyBy(t)},_multiplyBy:function(t){return this.x*=t,this.y*=t,this},scaleBy:function(t){return new p(this.x*t.x,this.y*t.y)},unscaleBy:function(t){return new p(this.x/t.x,this.y/t.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=nt(this.x),this.y=nt(this.y),this},distanceTo:function(t){var e=(t=m(t)).x-this.x,t=t.y-this.y;return Math.sqrt(e*e+t*t)},equals:function(t){return(t=m(t)).x===this.x&&t.y===this.y},contains:function(t){return t=m(t),Math.abs(t.x)<=Math.abs(this.x)&&Math.abs(t.y)<=Math.abs(this.y)},toString:function(){return"Point("+i(this.x)+", "+i(this.y)+")"}},f.prototype={extend:function(t){var e,i;if(t){if(t instanceof p||"number"==typeof t[0]||"x"in t)e=i=m(t);else if(e=(t=_(t)).min,i=t.max,!e||!i)return this;this.min||this.max?(this.min.x=Math.min(e.x,this.min.x),this.max.x=Math.max(i.x,this.max.x),this.min.y=Math.min(e.y,this.min.y),this.max.y=Math.max(i.y,this.max.y)):(this.min=e.clone(),this.max=i.clone())}return this},getCenter:function(t){return m((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,t)},getBottomLeft:function(){return m(this.min.x,this.max.y)},getTopRight:function(){return m(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(t){var e,i;return(t=("number"==typeof t[0]||t instanceof p?m:_)(t))instanceof f?(e=t.min,i=t.max):e=i=t,e.x>=this.min.x&&i.x<=this.max.x&&e.y>=this.min.y&&i.y<=this.max.y},intersects:function(t){t=_(t);var e=this.min,i=this.max,n=t.min,t=t.max,o=t.x>=e.x&&n.x<=i.x,t=t.y>=e.y&&n.y<=i.y;return o&&t},overlaps:function(t){t=_(t);var e=this.min,i=this.max,n=t.min,t=t.max,o=t.x>e.x&&n.x<i.x,t=t.y>e.y&&n.y<i.y;return o&&t},isValid:function(){return!(!this.min||!this.max)},pad:function(t){var e=this.min,i=this.max,n=Math.abs(e.x-i.x)*t,t=Math.abs(e.y-i.y)*t;return _(m(e.x-n,e.y-t),m(i.x+n,i.y+t))},equals:function(t){return!!t&&(t=_(t),this.min.equals(t.getTopLeft())&&this.max.equals(t.getBottomRight()))}},s.prototype={extend:function(t){var e,i,n=this._southWest,o=this._northEast;if(t instanceof v)i=e=t;else{if(!(t instanceof s))return t?this.extend(w(t)||g(t)):this;if(e=t._southWest,i=t._northEast,!e||!i)return this}return n||o?(n.lat=Math.min(e.lat,n.lat),n.lng=Math.min(e.lng,n.lng),o.lat=Math.max(i.lat,o.lat),o.lng=Math.max(i.lng,o.lng)):(this._southWest=new v(e.lat,e.lng),this._northEast=new v(i.lat,i.lng)),this},pad:function(t){var e=this._southWest,i=this._northEast,n=Math.abs(e.lat-i.lat)*t,t=Math.abs(e.lng-i.lng)*t;return new s(new v(e.lat-n,e.lng-t),new v(i.lat+n,i.lng+t))},getCenter:function(){return new v((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new v(this.getNorth(),this.getWest())},getSouthEast:function(){return new v(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(t){t=("number"==typeof t[0]||t instanceof v||"lat"in t?w:g)(t);var e,i,n=this._southWest,o=this._northEast;return t instanceof s?(e=t.getSouthWest(),i=t.getNorthEast()):e=i=t,e.lat>=n.lat&&i.lat<=o.lat&&e.lng>=n.lng&&i.lng<=o.lng},intersects:function(t){t=g(t);var e=this._southWest,i=this._northEast,n=t.getSouthWest(),t=t.getNorthEast(),o=t.lat>=e.lat&&n.lat<=i.lat,t=t.lng>=e.lng&&n.lng<=i.lng;return o&&t},overlaps:function(t){t=g(t);var e=this._southWest,i=this._northEast,n=t.getSouthWest(),t=t.getNorthEast(),o=t.lat>e.lat&&n.lat<i.lat,t=t.lng>e.lng&&n.lng<i.lng;return o&&t},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(t,e){return!!t&&(t=g(t),this._southWest.equals(t.getSouthWest(),e)&&this._northEast.equals(t.getNorthEast(),e))},isValid:function(){return!(!this._southWest||!this._northEast)}};var ot={latLngToPoint:function(t,e){t=this.projection.project(t),e=this.scale(e);return this.transformation._transform(t,e)},pointToLatLng:function(t,e){e=this.scale(e),t=this.transformation.untransform(t,e);return this.projection.unproject(t)},project:function(t){return this.projection.project(t)},unproject:function(t){return this.projection.unproject(t)},scale:function(t){return 256*Math.pow(2,t)},zoom:function(t){return Math.log(t/256)/Math.LN2},getProjectedBounds:function(t){var e;return this.infinite?null:(e=this.projection.bounds,t=this.scale(t),new f(this.transformation.transform(e.min,t),this.transformation.transform(e.max,t)))},infinite:!(v.prototype={equals:function(t,e){return!!t&&(t=w(t),Math.max(Math.abs(this.lat-t.lat),Math.abs(this.lng-t.lng))<=(void 0===e?1e-9:e))},toString:function(t){return"LatLng("+i(this.lat,t)+", "+i(this.lng,t)+")"},distanceTo:function(t){return st.distance(this,w(t))},wrap:function(){return st.wrapLatLng(this)},toBounds:function(t){var t=180*t/40075017,e=t/Math.cos(Math.PI/180*this.lat);return g([this.lat-t,this.lng-e],[this.lat+t,this.lng+e])},clone:function(){return new v(this.lat,this.lng,this.alt)}}),wrapLatLng:function(t){var e=this.wrapLng?H(t.lng,this.wrapLng,!0):t.lng;return new v(this.wrapLat?H(t.lat,this.wrapLat,!0):t.lat,e,t.alt)},wrapLatLngBounds:function(t){var e=t.getCenter(),i=this.wrapLatLng(e),n=e.lat-i.lat,e=e.lng-i.lng;return 0==n&&0==e?t:(i=t.getSouthWest(),t=t.getNorthEast(),new s(new v(i.lat-n,i.lng-e),new v(t.lat-n,t.lng-e)))}},st=l({},ot,{wrapLng:[-180,180],R:6371e3,distance:function(t,e){var i=Math.PI/180,n=t.lat*i,o=e.lat*i,s=Math.sin((e.lat-t.lat)*i/2),e=Math.sin((e.lng-t.lng)*i/2),t=s*s+Math.cos(n)*Math.cos(o)*e*e,i=2*Math.atan2(Math.sqrt(t),Math.sqrt(1-t));return this.R*i}}),rt=6378137,rt={R:rt,MAX_LATITUDE:85.0511287798,project:function(t){var e=Math.PI/180,i=this.MAX_LATITUDE,i=Math.max(Math.min(i,t.lat),-i),i=Math.sin(i*e);return new p(this.R*t.lng*e,this.R*Math.log((1+i)/(1-i))/2)},unproject:function(t){var e=180/Math.PI;return new v((2*Math.atan(Math.exp(t.y/this.R))-Math.PI/2)*e,t.x*e/this.R)},bounds:new f([-(rt=rt*Math.PI),-rt],[rt,rt])};function at(t,e,i,n){d(t)?(this._a=t[0],this._b=t[1],this._c=t[2],this._d=t[3]):(this._a=t,this._b=e,this._c=i,this._d=n)}function ht(t,e,i,n){return new at(t,e,i,n)}at.prototype={transform:function(t,e){return this._transform(t.clone(),e)},_transform:function(t,e){return t.x=(e=e||1)*(this._a*t.x+this._b),t.y=e*(this._c*t.y+this._d),t},untransform:function(t,e){return new p((t.x/(e=e||1)-this._b)/this._a,(t.y/e-this._d)/this._c)}};var lt=l({},st,{code:"EPSG:3857",projection:rt,transformation:ht(lt=.5/(Math.PI*rt.R),.5,-lt,.5)}),ut=l({},lt,{code:"EPSG:900913"});function ct(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function dt(t,e){for(var i,n,o,s,r="",a=0,h=t.length;a<h;a++){for(i=0,n=(o=t[a]).length;i<n;i++)r+=(i?"L":"M")+(s=o[i]).x+" "+s.y;r+=e?b.svg?"z":"x":""}return r||"M0 0"}var _t=document.documentElement.style,pt="ActiveXObject"in window,mt=pt&&!document.addEventListener,n="msLaunchUri"in navigator&&!("documentMode"in document),ft=y("webkit"),gt=y("android"),vt=y("android 2")||y("android 3"),yt=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),yt=gt&&y("Google")&&yt<537&&!("AudioNode"in window),xt=!!window.opera,wt=!n&&y("chrome"),bt=y("gecko")&&!ft&&!xt&&!pt,Pt=!wt&&y("safari"),Lt=y("phantom"),o="OTransition"in _t,Tt=0===navigator.platform.indexOf("Win"),Mt=pt&&"transition"in _t,zt="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!vt,_t="MozPerspective"in _t,Ct=!window.L_DISABLE_3D&&(Mt||zt||_t)&&!o&&!Lt,Zt="undefined"!=typeof orientation||y("mobile"),St=Zt&&ft,Et=Zt&&zt,kt=!window.PointerEvent&&window.MSPointerEvent,At=!(!window.PointerEvent&&!kt),Bt="ontouchstart"in window||!!window.TouchEvent,Ot=!window.L_NO_TOUCH&&(Bt||At),It=Zt&&xt,Rt=Zt&&bt,Nt=1<(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI),Dt=function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("testPassiveEventSupport",u,e),window.removeEventListener("testPassiveEventSupport",u,e)}catch(t){}return t}(),jt=!!document.createElement("canvas").getContext,Ht=!(!document.createElementNS||!ct("svg").createSVGRect),Ft=!!Ht&&((Ft=document.createElement("div")).innerHTML="<svg/>","http://www.w3.org/2000/svg"===(Ft.firstChild&&Ft.firstChild.namespaceURI));function y(t){return 0<=navigator.userAgent.toLowerCase().indexOf(t)}var b={ie:pt,ielt9:mt,edge:n,webkit:ft,android:gt,android23:vt,androidStock:yt,opera:xt,chrome:wt,gecko:bt,safari:Pt,phantom:Lt,opera12:o,win:Tt,ie3d:Mt,webkit3d:zt,gecko3d:_t,any3d:Ct,mobile:Zt,mobileWebkit:St,mobileWebkit3d:Et,msPointer:kt,pointer:At,touch:Ot,touchNative:Bt,mobileOpera:It,mobileGecko:Rt,retina:Nt,passiveEvents:Dt,canvas:jt,svg:Ht,vml:!Ht&&function(){try{var t=document.createElement("div"),e=(t.innerHTML='<v:shape adj="1"/>',t.firstChild);return e.style.behavior="url(#default#VML)",e&&"object"==typeof e.adj}catch(t){return!1}}(),inlineSvg:Ft,mac:0===navigator.platform.indexOf("Mac"),linux:0===navigator.platform.indexOf("Linux")},Wt=b.msPointer?"MSPointerDown":"pointerdown",Ut=b.msPointer?"MSPointerMove":"pointermove",Vt=b.msPointer?"MSPointerUp":"pointerup",qt=b.msPointer?"MSPointerCancel":"pointercancel",Gt={touchstart:Wt,touchmove:Ut,touchend:Vt,touchcancel:qt},Kt={touchstart:function(t,e){e.MSPOINTER_TYPE_TOUCH&&e.pointerType===e.MSPOINTER_TYPE_TOUCH&&A(e);ee(t,e)},touchmove:ee,touchend:ee,touchcancel:ee},Yt={},Xt=!1;function Jt(t,e,i){return"touchstart"!==e||Xt||(document.addEventListener(Wt,$t,!0),document.addEventListener(Ut,Qt,!0),document.addEventListener(Vt,te,!0),document.addEventListener(qt,te,!0),Xt=!0),Kt[e]?(i=Kt[e].bind(this,i),t.addEventListener(Gt[e],i,!1),i):(console.warn("wrong event specified:",e),L.Util.falseFn)}function $t(t){Yt[t.pointerId]=t}function Qt(t){Yt[t.pointerId]&&(Yt[t.pointerId]=t)}function te(t){delete Yt[t.pointerId]}function ee(t,e){if(e.pointerType!==(e.MSPOINTER_TYPE_MOUSE||"mouse")){for(var i in e.touches=[],Yt)e.touches.push(Yt[i]);e.changedTouches=[e],t(e)}}var ie=200;function ne(t,i){t.addEventListener("dblclick",i);var n,o=0;function e(t){var e;1!==t.detail?n=t.detail:"mouse"===t.pointerType||t.sourceCapabilities&&!t.sourceCapabilities.firesTouchEvents||((e=Ne(t)).some(function(t){return t instanceof HTMLLabelElement&&t.attributes.for})&&!e.some(function(t){return t instanceof HTMLInputElement||t instanceof HTMLSelectElement})||((e=Date.now())-o<=ie?2===++n&&i(function(t){var e,i,n={};for(i in t)e=t[i],n[i]=e&&e.bind?e.bind(t):e;return(t=n).type="dblclick",n.detail=2,n.isTrusted=!1,n._simulated=!0,n}(t)):n=1,o=e))}return t.addEventListener("click",e),{dblclick:i,simDblclick:e}}var oe,se,re,ae,he,le,ue=we(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),ce=we(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),de="webkitTransition"===ce||"OTransition"===ce?ce+"End":"transitionend";function _e(t){return"string"==typeof t?document.getElementById(t):t}function pe(t,e){var i=t.style[e]||t.currentStyle&&t.currentStyle[e];return"auto"===(i=i&&"auto"!==i||!document.defaultView?i:(t=document.defaultView.getComputedStyle(t,null))?t[e]:null)?null:i}function P(t,e,i){t=document.createElement(t);return t.className=e||"",i&&i.appendChild(t),t}function T(t){var e=t.parentNode;e&&e.removeChild(t)}function me(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function fe(t){var e=t.parentNode;e&&e.lastChild!==t&&e.appendChild(t)}function ge(t){var e=t.parentNode;e&&e.firstChild!==t&&e.insertBefore(t,e.firstChild)}function ve(t,e){return void 0!==t.classList?t.classList.contains(e):0<(t=xe(t)).length&&new RegExp("(^|\\s)"+e+"(\\s|$)").test(t)}function M(t,e){var i;if(void 0!==t.classList)for(var n=W(e),o=0,s=n.length;o<s;o++)t.classList.add(n[o]);else ve(t,e)||ye(t,((i=xe(t))?i+" ":"")+e)}function z(t,e){void 0!==t.classList?t.classList.remove(e):ye(t,F((" "+xe(t)+" ").replace(" "+e+" "," ")))}function ye(t,e){void 0===t.className.baseVal?t.className=e:t.className.baseVal=e}function xe(t){return void 0===(t=t.correspondingElement?t.correspondingElement:t).className.baseVal?t.className:t.className.baseVal}function C(t,e){if("opacity"in t.style)t.style.opacity=e;else if("filter"in t.style){var i=!1,n="DXImageTransform.Microsoft.Alpha";try{i=t.filters.item(n)}catch(t){if(1===e)return}e=Math.round(100*e),i?(i.Enabled=100!==e,i.Opacity=e):t.style.filter+=" progid:"+n+"(opacity="+e+")"}}function we(t){for(var e=document.documentElement.style,i=0;i<t.length;i++)if(t[i]in e)return t[i];return!1}function be(t,e,i){e=e||new p(0,0);t.style[ue]=(b.ie3d?"translate("+e.x+"px,"+e.y+"px)":"translate3d("+e.x+"px,"+e.y+"px,0)")+(i?" scale("+i+")":"")}function Z(t,e){t._leaflet_pos=e,b.any3d?be(t,e):(t.style.left=e.x+"px",t.style.top=e.y+"px")}function Pe(t){return t._leaflet_pos||new p(0,0)}function Le(){S(window,"dragstart",A)}function Te(){k(window,"dragstart",A)}function Me(t){for(;-1===t.tabIndex;)t=t.parentNode;t.style&&(ze(),le=(he=t).style.outline,t.style.outline="none",S(window,"keydown",ze))}function ze(){he&&(he.style.outline=le,le=he=void 0,k(window,"keydown",ze))}function Ce(t){for(;!((t=t.parentNode).offsetWidth&&t.offsetHeight||t===document.body););return t}function Ze(t){var e=t.getBoundingClientRect();return{x:e.width/t.offsetWidth||1,y:e.height/t.offsetHeight||1,boundingClientRect:e}}ae="onselectstart"in document?(re=function(){S(window,"selectstart",A)},function(){k(window,"selectstart",A)}):(se=we(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]),re=function(){var t;se&&(t=document.documentElement.style,oe=t[se],t[se]="none")},function(){se&&(document.documentElement.style[se]=oe,oe=void 0)});pt={__proto__:null,TRANSFORM:ue,TRANSITION:ce,TRANSITION_END:de,get:_e,getStyle:pe,create:P,remove:T,empty:me,toFront:fe,toBack:ge,hasClass:ve,addClass:M,removeClass:z,setClass:ye,getClass:xe,setOpacity:C,testProp:we,setTransform:be,setPosition:Z,getPosition:Pe,get disableTextSelection(){return re},get enableTextSelection(){return ae},disableImageDrag:Le,enableImageDrag:Te,preventOutline:Me,restoreOutline:ze,getSizedParentNode:Ce,getScale:Ze};function S(t,e,i,n){if(e&&"object"==typeof e)for(var o in e)ke(t,o,e[o],i);else for(var s=0,r=(e=W(e)).length;s<r;s++)ke(t,e[s],i,n);return this}var E="_leaflet_events";function k(t,e,i,n){if(1===arguments.length)Se(t),delete t[E];else if(e&&"object"==typeof e)for(var o in e)Ae(t,o,e[o],i);else if(e=W(e),2===arguments.length)Se(t,function(t){return-1!==G(e,t)});else for(var s=0,r=e.length;s<r;s++)Ae(t,e[s],i,n);return this}function Se(t,e){for(var i in t[E]){var n=i.split(/\d/)[0];e&&!e(n)||Ae(t,n,null,null,i)}}var Ee={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function ke(e,t,i,n){var o,s,r=t+h(i)+(n?"_"+h(n):"");e[E]&&e[E][r]||(s=o=function(t){return i.call(n||e,t||window.event)},!b.touchNative&&b.pointer&&0===t.indexOf("touch")?o=Jt(e,t,o):b.touch&&"dblclick"===t?o=ne(e,o):"addEventListener"in e?"touchstart"===t||"touchmove"===t||"wheel"===t||"mousewheel"===t?e.addEventListener(Ee[t]||t,o,!!b.passiveEvents&&{passive:!1}):"mouseenter"===t||"mouseleave"===t?e.addEventListener(Ee[t],o=function(t){t=t||window.event,Fe(e,t)&&s(t)},!1):e.addEventListener(t,s,!1):e.attachEvent("on"+t,o),e[E]=e[E]||{},e[E][r]=o)}function Ae(t,e,i,n,o){o=o||e+h(i)+(n?"_"+h(n):"");var s,r,i=t[E]&&t[E][o];i&&(!b.touchNative&&b.pointer&&0===e.indexOf("touch")?(n=t,r=i,Gt[s=e]?n.removeEventListener(Gt[s],r,!1):console.warn("wrong event specified:",s)):b.touch&&"dblclick"===e?(n=i,(r=t).removeEventListener("dblclick",n.dblclick),r.removeEventListener("click",n.simDblclick)):"removeEventListener"in t?t.removeEventListener(Ee[e]||e,i,!1):t.detachEvent("on"+e,i),t[E][o]=null)}function Be(t){return t.stopPropagation?t.stopPropagation():t.originalEvent?t.originalEvent._stopped=!0:t.cancelBubble=!0,this}function Oe(t){return ke(t,"wheel",Be),this}function Ie(t){return S(t,"mousedown touchstart dblclick contextmenu",Be),t._leaflet_disable_click=!0,this}function A(t){return t.preventDefault?t.preventDefault():t.returnValue=!1,this}function Re(t){return A(t),Be(t),this}function Ne(t){if(t.composedPath)return t.composedPath();for(var e=[],i=t.target;i;)e.push(i),i=i.parentNode;return e}function De(t,e){var i,n;return e?(n=(i=Ze(e)).boundingClientRect,new p((t.clientX-n.left)/i.x-e.clientLeft,(t.clientY-n.top)/i.y-e.clientTop)):new p(t.clientX,t.clientY)}var je=b.linux&&b.chrome?window.devicePixelRatio:b.mac?3*window.devicePixelRatio:0<window.devicePixelRatio?2*window.devicePixelRatio:1;function He(t){return b.edge?t.wheelDeltaY/2:t.deltaY&&0===t.deltaMode?-t.deltaY/je:t.deltaY&&1===t.deltaMode?20*-t.deltaY:t.deltaY&&2===t.deltaMode?60*-t.deltaY:t.deltaX||t.deltaZ?0:t.wheelDelta?(t.wheelDeltaY||t.wheelDelta)/2:t.detail&&Math.abs(t.detail)<32765?20*-t.detail:t.detail?t.detail/-32765*60:0}function Fe(t,e){var i=e.relatedTarget;if(!i)return!0;try{for(;i&&i!==t;)i=i.parentNode}catch(t){return!1}return i!==t}var mt={__proto__:null,on:S,off:k,stopPropagation:Be,disableScrollPropagation:Oe,disableClickPropagation:Ie,preventDefault:A,stop:Re,getPropagationPath:Ne,getMousePosition:De,getWheelDelta:He,isExternalTarget:Fe,addListener:S,removeListener:k},We=it.extend({run:function(t,e,i,n){this.stop(),this._el=t,this._inProgress=!0,this._duration=i||.25,this._easeOutPower=1/Math.max(n||.5,.2),this._startPos=Pe(t),this._offset=e.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=x(this._animate,this),this._step()},_step:function(t){var e=+new Date-this._startTime,i=1e3*this._duration;e<i?this._runFrame(this._easeOut(e/i),t):(this._runFrame(1),this._complete())},_runFrame:function(t,e){t=this._startPos.add(this._offset.multiplyBy(t));e&&t._round(),Z(this._el,t),this.fire("step")},_complete:function(){r(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(t){return 1-Math.pow(1-t,this._easeOutPower)}}),B=it.extend({options:{crs:lt,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(t,e){e=c(this,e),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(t),this._initLayout(),this._onResize=a(this._onResize,this),this._initEvents(),e.maxBounds&&this.setMaxBounds(e.maxBounds),void 0!==e.zoom&&(this._zoom=this._limitZoom(e.zoom)),e.center&&void 0!==e.zoom&&this.setView(w(e.center),e.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=ce&&b.any3d&&!b.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),S(this._proxy,de,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(t,e,i){if((e=void 0===e?this._zoom:this._limitZoom(e),t=this._limitCenter(w(t),e,this.options.maxBounds),i=i||{},this._stop(),this._loaded&&!i.reset&&!0!==i)&&(void 0!==i.animate&&(i.zoom=l({animate:i.animate},i.zoom),i.pan=l({animate:i.animate,duration:i.duration},i.pan)),this._zoom!==e?this._tryAnimatedZoom&&this._tryAnimatedZoom(t,e,i.zoom):this._tryAnimatedPan(t,i.pan)))return clearTimeout(this._sizeTimer),this;return this._resetView(t,e,i.pan&&i.pan.noMoveStart),this},setZoom:function(t,e){return this._loaded?this.setView(this.getCenter(),t,{zoom:e}):(this._zoom=t,this)},zoomIn:function(t,e){return t=t||(b.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+t,e)},zoomOut:function(t,e){return t=t||(b.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-t,e)},setZoomAround:function(t,e,i){var n=this.getZoomScale(e),o=this.getSize().divideBy(2),t=(t instanceof p?t:this.latLngToContainerPoint(t)).subtract(o).multiplyBy(1-1/n),n=this.containerPointToLatLng(o.add(t));return this.setView(n,e,{zoom:i})},_getBoundsCenterZoom:function(t,e){e=e||{},t=t.getBounds?t.getBounds():g(t);var i=m(e.paddingTopLeft||e.padding||[0,0]),n=m(e.paddingBottomRight||e.padding||[0,0]),o=this.getBoundsZoom(t,!1,i.add(n));return(o="number"==typeof e.maxZoom?Math.min(e.maxZoom,o):o)===1/0?{center:t.getCenter(),zoom:o}:(e=n.subtract(i).divideBy(2),n=this.project(t.getSouthWest(),o),i=this.project(t.getNorthEast(),o),{center:this.unproject(n.add(i).divideBy(2).add(e),o),zoom:o})},fitBounds:function(t,e){if((t=g(t)).isValid())return t=this._getBoundsCenterZoom(t,e),this.setView(t.center,t.zoom,e);throw new Error("Bounds are not valid.")},fitWorld:function(t){return this.fitBounds([[-90,-180],[90,180]],t)},panTo:function(t,e){return this.setView(t,this._zoom,{pan:e})},panBy:function(t,e){var i;return e=e||{},(t=m(t).round()).x||t.y?(!0===e.animate||this.getSize().contains(t)?(this._panAnim||(this._panAnim=new We,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),e.noMoveStart||this.fire("movestart"),!1!==e.animate?(M(this._mapPane,"leaflet-pan-anim"),i=this._getMapPanePos().subtract(t).round(),this._panAnim.run(this._mapPane,i,e.duration||.25,e.easeLinearity)):(this._rawPanBy(t),this.fire("move").fire("moveend"))):this._resetView(this.unproject(this.project(this.getCenter()).add(t)),this.getZoom()),this):this.fire("moveend")},flyTo:function(n,o,t){if(!1===(t=t||{}).animate||!b.any3d)return this.setView(n,o,t);this._stop();var s=this.project(this.getCenter()),r=this.project(n),e=this.getSize(),a=this._zoom,h=(n=w(n),o=void 0===o?a:o,Math.max(e.x,e.y)),i=h*this.getZoomScale(a,o),l=r.distanceTo(s)||1,u=1.42,c=u*u;function d(t){t=(i*i-h*h+(t?-1:1)*c*c*l*l)/(2*(t?i:h)*c*l),t=Math.sqrt(t*t+1)-t;return t<1e-9?-18:Math.log(t)}function _(t){return(Math.exp(t)-Math.exp(-t))/2}function p(t){return(Math.exp(t)+Math.exp(-t))/2}var m=d(0);function f(t){return h*(p(m)*(_(t=m+u*t)/p(t))-_(m))/c}var g=Date.now(),v=(d(1)-m)/u,y=t.duration?1e3*t.duration:1e3*v*.8;return this._moveStart(!0,t.noMoveStart),function t(){var e=(Date.now()-g)/y,i=(1-Math.pow(1-e,1.5))*v;e<=1?(this._flyToFrame=x(t,this),this._move(this.unproject(s.add(r.subtract(s).multiplyBy(f(i)/l)),a),this.getScaleZoom(h/(e=i,h*(p(m)/p(m+u*e))),a),{flyTo:!0})):this._move(n,o)._moveEnd(!0)}.call(this),this},flyToBounds:function(t,e){t=this._getBoundsCenterZoom(t,e);return this.flyTo(t.center,t.zoom,e)},setMaxBounds:function(t){return t=g(t),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),t.isValid()?(this.options.maxBounds=t,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(t){var e=this.options.minZoom;return this.options.minZoom=t,this._loaded&&e!==t&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(t):this},setMaxZoom:function(t){var e=this.options.maxZoom;return this.options.maxZoom=t,this._loaded&&e!==t&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(t):this},panInsideBounds:function(t,e){this._enforcingBounds=!0;var i=this.getCenter(),t=this._limitCenter(i,this._zoom,g(t));return i.equals(t)||this.panTo(t,e),this._enforcingBounds=!1,this},panInside:function(t,e){var i=m((e=e||{}).paddingTopLeft||e.padding||[0,0]),n=m(e.paddingBottomRight||e.padding||[0,0]),o=this.project(this.getCenter()),t=this.project(t),s=this.getPixelBounds(),i=_([s.min.add(i),s.max.subtract(n)]),s=i.getSize();return i.contains(t)||(this._enforcingBounds=!0,n=t.subtract(i.getCenter()),i=i.extend(t).getSize().subtract(s),o.x+=n.x<0?-i.x:i.x,o.y+=n.y<0?-i.y:i.y,this.panTo(this.unproject(o),e),this._enforcingBounds=!1),this},invalidateSize:function(t){if(!this._loaded)return this;t=l({animate:!1,pan:!0},!0===t?{animate:!0}:t);var e=this.getSize(),i=(this._sizeChanged=!0,this._lastCenter=null,this.getSize()),n=e.divideBy(2).round(),o=i.divideBy(2).round(),n=n.subtract(o);return n.x||n.y?(t.animate&&t.pan?this.panBy(n):(t.pan&&this._rawPanBy(n),this.fire("move"),t.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(a(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:e,newSize:i})):this},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(t){var e,i;return t=this._locateOptions=l({timeout:1e4,watch:!1},t),"geolocation"in navigator?(e=a(this._handleGeolocationResponse,this),i=a(this._handleGeolocationError,this),t.watch?this._locationWatchId=navigator.geolocation.watchPosition(e,i,t):navigator.geolocation.getCurrentPosition(e,i,t)):this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(t){var e;this._container._leaflet_id&&(e=t.code,t=t.message||(1===e?"permission denied":2===e?"position unavailable":"timeout"),this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:e,message:"Geolocation error: "+t+"."}))},_handleGeolocationResponse:function(t){if(this._container._leaflet_id){var e,i,n=new v(t.coords.latitude,t.coords.longitude),o=n.toBounds(2*t.coords.accuracy),s=this._locateOptions,r=(s.setView&&(e=this.getBoundsZoom(o),this.setView(n,s.maxZoom?Math.min(e,s.maxZoom):e)),{latlng:n,bounds:o,timestamp:t.timestamp});for(i in t.coords)"number"==typeof t.coords[i]&&(r[i]=t.coords[i]);this.fire("locationfound",r)}},addHandler:function(t,e){return e&&(e=this[t]=new e(this),this._handlers.push(e),this.options[t]&&e.enable()),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch(t){this._container._leaflet_id=void 0,this._containerId=void 0}for(var t in void 0!==this._locationWatchId&&this.stopLocate(),this._stop(),T(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(r(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload"),this._layers)this._layers[t].remove();for(t in this._panes)T(this._panes[t]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(t,e){e=P("div","leaflet-pane"+(t?" leaflet-"+t.replace("Pane","")+"-pane":""),e||this._mapPane);return t&&(this._panes[t]=e),e},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var t=this.getPixelBounds();return new s(this.unproject(t.getBottomLeft()),this.unproject(t.getTopRight()))},getMinZoom:function(){return void 0===this.options.minZoom?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return void 0===this.options.maxZoom?void 0===this._layersMaxZoom?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(t,e,i){t=g(t),i=m(i||[0,0]);var n=this.getZoom()||0,o=this.getMinZoom(),s=this.getMaxZoom(),r=t.getNorthWest(),t=t.getSouthEast(),i=this.getSize().subtract(i),t=_(this.project(t,n),this.project(r,n)).getSize(),r=b.any3d?this.options.zoomSnap:1,a=i.x/t.x,i=i.y/t.y,t=e?Math.max(a,i):Math.min(a,i),n=this.getScaleZoom(t,n);return r&&(n=Math.round(n/(r/100))*(r/100),n=e?Math.ceil(n/r)*r:Math.floor(n/r)*r),Math.max(o,Math.min(s,n))},getSize:function(){return this._size&&!this._sizeChanged||(this._size=new p(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(t,e){t=this._getTopLeftPoint(t,e);return new f(t,t.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(t){return this.options.crs.getProjectedBounds(void 0===t?this.getZoom():t)},getPane:function(t){return"string"==typeof t?this._panes[t]:t},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(t,e){var i=this.options.crs;return e=void 0===e?this._zoom:e,i.scale(t)/i.scale(e)},getScaleZoom:function(t,e){var i=this.options.crs,t=(e=void 0===e?this._zoom:e,i.zoom(t*i.scale(e)));return isNaN(t)?1/0:t},project:function(t,e){return e=void 0===e?this._zoom:e,this.options.crs.latLngToPoint(w(t),e)},unproject:function(t,e){return e=void 0===e?this._zoom:e,this.options.crs.pointToLatLng(m(t),e)},layerPointToLatLng:function(t){t=m(t).add(this.getPixelOrigin());return this.unproject(t)},latLngToLayerPoint:function(t){return this.project(w(t))._round()._subtract(this.getPixelOrigin())},wrapLatLng:function(t){return this.options.crs.wrapLatLng(w(t))},wrapLatLngBounds:function(t){return this.options.crs.wrapLatLngBounds(g(t))},distance:function(t,e){return this.options.crs.distance(w(t),w(e))},containerPointToLayerPoint:function(t){return m(t).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(t){return m(t).add(this._getMapPanePos())},containerPointToLatLng:function(t){t=this.containerPointToLayerPoint(m(t));return this.layerPointToLatLng(t)},latLngToContainerPoint:function(t){return this.layerPointToContainerPoint(this.latLngToLayerPoint(w(t)))},mouseEventToContainerPoint:function(t){return De(t,this._container)},mouseEventToLayerPoint:function(t){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))},mouseEventToLatLng:function(t){return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))},_initContainer:function(t){t=this._container=_e(t);if(!t)throw new Error("Map container not found.");if(t._leaflet_id)throw new Error("Map container is already initialized.");S(t,"scroll",this._onScroll,this),this._containerId=h(t)},_initLayout:function(){var t=this._container,e=(this._fadeAnimated=this.options.fadeAnimation&&b.any3d,M(t,"leaflet-container"+(b.touch?" leaflet-touch":"")+(b.retina?" leaflet-retina":"")+(b.ielt9?" leaflet-oldie":"")+(b.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":"")),pe(t,"position"));"absolute"!==e&&"relative"!==e&&"fixed"!==e&&(t.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var t=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),Z(this._mapPane,new p(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(M(t.markerPane,"leaflet-zoom-hide"),M(t.shadowPane,"leaflet-zoom-hide"))},_resetView:function(t,e,i){Z(this._mapPane,new p(0,0));var n=!this._loaded,o=(this._loaded=!0,e=this._limitZoom(e),this.fire("viewprereset"),this._zoom!==e);this._moveStart(o,i)._move(t,e)._moveEnd(o),this.fire("viewreset"),n&&this.fire("load")},_moveStart:function(t,e){return t&&this.fire("zoomstart"),e||this.fire("movestart"),this},_move:function(t,e,i,n){void 0===e&&(e=this._zoom);var o=this._zoom!==e;return this._zoom=e,this._lastCenter=t,this._pixelOrigin=this._getNewPixelOrigin(t),n?i&&i.pinch&&this.fire("zoom",i):((o||i&&i.pinch)&&this.fire("zoom",i),this.fire("move",i)),this},_moveEnd:function(t){return t&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return r(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(t){Z(this._mapPane,this._getMapPanePos().subtract(t))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(t){this._targets={};var e=t?k:S;e((this._targets[h(this._container)]=this)._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&e(window,"resize",this._onResize,this),b.any3d&&this.options.transform3DLimit&&(t?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){r(this._resizeRequest),this._resizeRequest=x(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var t=this._getMapPanePos();Math.max(Math.abs(t.x),Math.abs(t.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(t,e){for(var i,n=[],o="mouseout"===e||"mouseover"===e,s=t.target||t.srcElement,r=!1;s;){if((i=this._targets[h(s)])&&("click"===e||"preclick"===e)&&this._draggableMoved(i)){r=!0;break}if(i&&i.listens(e,!0)){if(o&&!Fe(s,t))break;if(n.push(i),o)break}if(s===this._container)break;s=s.parentNode}return n=n.length||r||o||!this.listens(e,!0)?n:[this]},_isClickDisabled:function(t){for(;t&&t!==this._container;){if(t._leaflet_disable_click)return!0;t=t.parentNode}},_handleDOMEvent:function(t){var e,i=t.target||t.srcElement;!this._loaded||i._leaflet_disable_events||"click"===t.type&&this._isClickDisabled(i)||("mousedown"===(e=t.type)&&Me(i),this._fireDOMEvent(t,e))},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(t,e,i){"click"===t.type&&((a=l({},t)).type="preclick",this._fireDOMEvent(a,a.type,i));var n=this._findEventTargets(t,e);if(i){for(var o=[],s=0;s<i.length;s++)i[s].listens(e,!0)&&o.push(i[s]);n=o.concat(n)}if(n.length){"contextmenu"===e&&A(t);var r,a=n[0],h={originalEvent:t};for("keypress"!==t.type&&"keydown"!==t.type&&"keyup"!==t.type&&(r=a.getLatLng&&(!a._radius||a._radius<=10),h.containerPoint=r?this.latLngToContainerPoint(a.getLatLng()):this.mouseEventToContainerPoint(t),h.layerPoint=this.containerPointToLayerPoint(h.containerPoint),h.latlng=r?a.getLatLng():this.layerPointToLatLng(h.layerPoint)),s=0;s<n.length;s++)if(n[s].fire(e,h,!0),h.originalEvent._stopped||!1===n[s].options.bubblingMouseEvents&&-1!==G(this._mouseEvents,e))return}},_draggableMoved:function(t){return(t=t.dragging&&t.dragging.enabled()?t:this).dragging&&t.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var t=0,e=this._handlers.length;t<e;t++)this._handlers[t].disable()},whenReady:function(t,e){return this._loaded?t.call(e||this,{target:this}):this.on("load",t,e),this},_getMapPanePos:function(){return Pe(this._mapPane)||new p(0,0)},_moved:function(){var t=this._getMapPanePos();return t&&!t.equals([0,0])},_getTopLeftPoint:function(t,e){return(t&&void 0!==e?this._getNewPixelOrigin(t,e):this.getPixelOrigin()).subtract(this._getMapPanePos())},_getNewPixelOrigin:function(t,e){var i=this.getSize()._divideBy(2);return this.project(t,e)._subtract(i)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(t,e,i){i=this._getNewPixelOrigin(i,e);return this.project(t,e)._subtract(i)},_latLngBoundsToNewLayerBounds:function(t,e,i){i=this._getNewPixelOrigin(i,e);return _([this.project(t.getSouthWest(),e)._subtract(i),this.project(t.getNorthWest(),e)._subtract(i),this.project(t.getSouthEast(),e)._subtract(i),this.project(t.getNorthEast(),e)._subtract(i)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(t){return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())},_limitCenter:function(t,e,i){var n,o;return!i||(n=this.project(t,e),o=this.getSize().divideBy(2),o=new f(n.subtract(o),n.add(o)),(o=this._getBoundsOffset(o,i,e)).round().equals([0,0]))?t:this.unproject(n.add(o),e)},_limitOffset:function(t,e){var i;return e?(i=new f((i=this.getPixelBounds()).min.add(t),i.max.add(t)),t.add(this._getBoundsOffset(i,e))):t},_getBoundsOffset:function(t,e,i){e=_(this.project(e.getNorthEast(),i),this.project(e.getSouthWest(),i)),i=e.min.subtract(t.min),e=e.max.subtract(t.max);return new p(this._rebound(i.x,-e.x),this._rebound(i.y,-e.y))},_rebound:function(t,e){return 0<t+e?Math.round(t-e)/2:Math.max(0,Math.ceil(t))-Math.max(0,Math.floor(e))},_limitZoom:function(t){var e=this.getMinZoom(),i=this.getMaxZoom(),n=b.any3d?this.options.zoomSnap:1;return n&&(t=Math.round(t/n)*n),Math.max(e,Math.min(i,t))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){z(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(t,e){t=this._getCenterOffset(t)._trunc();return!(!0!==(e&&e.animate)&&!this.getSize().contains(t))&&(this.panBy(t,e),!0)},_createAnimProxy:function(){var t=this._proxy=P("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(t),this.on("zoomanim",function(t){var e=ue,i=this._proxy.style[e];be(this._proxy,this.project(t.center,t.zoom),this.getZoomScale(t.zoom,1)),i===this._proxy.style[e]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){T(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var t=this.getCenter(),e=this.getZoom();be(this._proxy,this.project(t,e),this.getZoomScale(e,1))},_catchTransitionEnd:function(t){this._animatingZoom&&0<=t.propertyName.indexOf("transform")&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(t,e,i){if(!this._animatingZoom){if(i=i||{},!this._zoomAnimated||!1===i.animate||this._nothingToAnimate()||Math.abs(e-this._zoom)>this.options.zoomAnimationThreshold)return!1;var n=this.getZoomScale(e),n=this._getCenterOffset(t)._divideBy(1-1/n);if(!0!==i.animate&&!this.getSize().contains(n))return!1;x(function(){this._moveStart(!0,!1)._animateZoom(t,e,!0)},this)}return!0},_animateZoom:function(t,e,i,n){this._mapPane&&(i&&(this._animatingZoom=!0,this._animateToCenter=t,this._animateToZoom=e,M(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:t,zoom:e,noUpdate:n}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(a(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&z(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function Ue(t){return new O(t)}var Ve,O=et.extend({options:{position:"topright"},initialize:function(t){c(this,t)},getPosition:function(){return this.options.position},setPosition:function(t){var e=this._map;return e&&e.removeControl(this),this.options.position=t,e&&e.addControl(this),this},getContainer:function(){return this._container},addTo:function(t){this.remove(),this._map=t;var e=this._container=this.onAdd(t),i=this.getPosition(),t=t._controlCorners[i];return M(e,"leaflet-control"),-1!==i.indexOf("bottom")?t.insertBefore(e,t.firstChild):t.appendChild(e),this._map.on("unload",this.remove,this),this},remove:function(){return this._map&&(T(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null),this},_refocusOnMap:function(t){this._map&&t&&0<t.screenX&&0<t.screenY&&this._map.getContainer().focus()}}),qe=(B.include({addControl:function(t){return t.addTo(this),this},removeControl:function(t){return t.remove(),this},_initControlPos:function(){var i=this._controlCorners={},n="leaflet-",o=this._controlContainer=P("div",n+"control-container",this._container);function t(t,e){i[t+e]=P("div",n+t+" "+n+e,o)}t("top","left"),t("top","right"),t("bottom","left"),t("bottom","right")},_clearControlPos:function(){for(var t in this._controlCorners)T(this._controlCorners[t]);T(this._controlContainer),delete this._controlCorners,delete this._controlContainer}}),O.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(t,e,i,n){return i<n?-1:n<i?1:0}},initialize:function(t,e,i){for(var n in c(this,i),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,t)this._addLayer(t[n],n);for(n in e)this._addLayer(e[n],n,!0)},onAdd:function(t){this._initLayout(),this._update(),(this._map=t).on("zoomend",this._checkDisabledLayers,this);for(var e=0;e<this._layers.length;e++)this._layers[e].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(t){return O.prototype.addTo.call(this,t),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var t=0;t<this._layers.length;t++)this._layers[t].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(t,e){return this._addLayer(t,e),this._map?this._update():this},addOverlay:function(t,e){return this._addLayer(t,e,!0),this._map?this._update():this},removeLayer:function(t){t.off("add remove",this._onLayerChange,this);t=this._getLayer(h(t));return t&&this._layers.splice(this._layers.indexOf(t),1),this._map?this._update():this},expand:function(){M(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var t=this._map.getSize().y-(this._container.offsetTop+50);return t<this._section.clientHeight?(M(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=t+"px"):z(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return z(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var t="leaflet-control-layers",e=this._container=P("div",t),i=this.options.collapsed,n=(e.setAttribute("aria-haspopup",!0),Ie(e),Oe(e),this._section=P("section",t+"-list")),o=(i&&(this._map.on("click",this.collapse,this),S(e,{mouseenter:function(){S(n,"click",A),this.expand(),setTimeout(function(){k(n,"click",A)})},mouseleave:this.collapse},this)),this._layersLink=P("a",t+"-toggle",e));o.href="#",o.title="Layers",o.setAttribute("role","button"),S(o,"click",A),S(o,"focus",this.expand,this),i||this.expand(),this._baseLayersList=P("div",t+"-base",n),this._separator=P("div",t+"-separator",n),this._overlaysList=P("div",t+"-overlays",n),e.appendChild(n)},_getLayer:function(t){for(var e=0;e<this._layers.length;e++)if(this._layers[e]&&h(this._layers[e].layer)===t)return this._layers[e]},_addLayer:function(t,e,i){this._map&&t.on("add remove",this._onLayerChange,this),this._layers.push({layer:t,name:e,overlay:i}),this.options.sortLayers&&this._layers.sort(a(function(t,e){return this.options.sortFunction(t.layer,e.layer,t.name,e.name)},this)),this.options.autoZIndex&&t.setZIndex&&(this._lastZIndex++,t.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(this._container){me(this._baseLayersList),me(this._overlaysList),this._layerControlInputs=[];for(var t,e,i,n=0,o=0;o<this._layers.length;o++)i=this._layers[o],this._addItem(i),e=e||i.overlay,t=t||!i.overlay,n+=i.overlay?0:1;this.options.hideSingleBase&&(this._baseLayersList.style.display=(t=t&&1<n)?"":"none"),this._separator.style.display=e&&t?"":"none"}return this},_onLayerChange:function(t){this._handlingClick||this._update();var e=this._getLayer(h(t.target)),t=e.overlay?"add"===t.type?"overlayadd":"overlayremove":"add"===t.type?"baselayerchange":null;t&&this._map.fire(t,e)},_createRadioElement:function(t,e){t='<input type="radio" class="leaflet-control-layers-selector" name="'+t+'"'+(e?' checked="checked"':"")+"/>",e=document.createElement("div");return e.innerHTML=t,e.firstChild},_addItem:function(t){var e,i=document.createElement("label"),n=this._map.hasLayer(t.layer),n=(t.overlay?((e=document.createElement("input")).type="checkbox",e.className="leaflet-control-layers-selector",e.defaultChecked=n):e=this._createRadioElement("leaflet-base-layers_"+h(this),n),this._layerControlInputs.push(e),e.layerId=h(t.layer),S(e,"click",this._onInputClick,this),document.createElement("span")),o=(n.innerHTML=" "+t.name,document.createElement("span"));return i.appendChild(o),o.appendChild(e),o.appendChild(n),(t.overlay?this._overlaysList:this._baseLayersList).appendChild(i),this._checkDisabledLayers(),i},_onInputClick:function(){var t,e,i=this._layerControlInputs,n=[],o=[];this._handlingClick=!0;for(var s=i.length-1;0<=s;s--)t=i[s],e=this._getLayer(t.layerId).layer,t.checked?n.push(e):t.checked||o.push(e);for(s=0;s<o.length;s++)this._map.hasLayer(o[s])&&this._map.removeLayer(o[s]);for(s=0;s<n.length;s++)this._map.hasLayer(n[s])||this._map.addLayer(n[s]);this._handlingClick=!1,this._refocusOnMap()},_checkDisabledLayers:function(){for(var t,e,i=this._layerControlInputs,n=this._map.getZoom(),o=i.length-1;0<=o;o--)t=i[o],e=this._getLayer(t.layerId).layer,t.disabled=void 0!==e.options.minZoom&&n<e.options.minZoom||void 0!==e.options.maxZoom&&n>e.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this}})),Ge=O.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(t){var e="leaflet-control-zoom",i=P("div",e+" leaflet-bar"),n=this.options;return this._zoomInButton=this._createButton(n.zoomInText,n.zoomInTitle,e+"-in",i,this._zoomIn),this._zoomOutButton=this._createButton(n.zoomOutText,n.zoomOutTitle,e+"-out",i,this._zoomOut),this._updateDisabled(),t.on("zoomend zoomlevelschange",this._updateDisabled,this),i},onRemove:function(t){t.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(t){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(t.shiftKey?3:1))},_zoomOut:function(t){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(t.shiftKey?3:1))},_createButton:function(t,e,i,n,o){i=P("a",i,n);return i.innerHTML=t,i.href="#",i.title=e,i.setAttribute("role","button"),i.setAttribute("aria-label",e),Ie(i),S(i,"click",Re),S(i,"click",o,this),S(i,"click",this._refocusOnMap,this),i},_updateDisabled:function(){var t=this._map,e="leaflet-disabled";z(this._zoomInButton,e),z(this._zoomOutButton,e),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),!this._disabled&&t._zoom!==t.getMinZoom()||(M(this._zoomOutButton,e),this._zoomOutButton.setAttribute("aria-disabled","true")),!this._disabled&&t._zoom!==t.getMaxZoom()||(M(this._zoomInButton,e),this._zoomInButton.setAttribute("aria-disabled","true"))}}),Ke=(B.mergeOptions({zoomControl:!0}),B.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new Ge,this.addControl(this.zoomControl))}),O.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(t){var e="leaflet-control-scale",i=P("div",e),n=this.options;return this._addScales(n,e+"-line",i),t.on(n.updateWhenIdle?"moveend":"move",this._update,this),t.whenReady(this._update,this),i},onRemove:function(t){t.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(t,e,i){t.metric&&(this._mScale=P("div",e,i)),t.imperial&&(this._iScale=P("div",e,i))},_update:function(){var t=this._map,e=t.getSize().y/2,t=t.distance(t.containerPointToLatLng([0,e]),t.containerPointToLatLng([this.options.maxWidth,e]));this._updateScales(t)},_updateScales:function(t){this.options.metric&&t&&this._updateMetric(t),this.options.imperial&&t&&this._updateImperial(t)},_updateMetric:function(t){var e=this._getRoundNum(t);this._updateScale(this._mScale,e<1e3?e+" m":e/1e3+" km",e/t)},_updateImperial:function(t){var e,i,t=3.2808399*t;5280<t?(i=this._getRoundNum(e=t/5280),this._updateScale(this._iScale,i+" mi",i/e)):(i=this._getRoundNum(t),this._updateScale(this._iScale,i+" ft",i/t))},_updateScale:function(t,e,i){t.style.width=Math.round(this.options.maxWidth*i)+"px",t.innerHTML=e},_getRoundNum:function(t){var e=Math.pow(10,(Math.floor(t)+"").length-1),t=t/e;return e*(t=10<=t?10:5<=t?5:3<=t?3:2<=t?2:1)}})),Ye=O.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(b.inlineSvg?'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg> ':"")+"Leaflet</a>"},initialize:function(t){c(this,t),this._attributions={}},onAdd:function(t){for(var e in(t.attributionControl=this)._container=P("div","leaflet-control-attribution"),Ie(this._container),t._layers)t._layers[e].getAttribution&&this.addAttribution(t._layers[e].getAttribution());return this._update(),t.on("layeradd",this._addAttribution,this),this._container},onRemove:function(t){t.off("layeradd",this._addAttribution,this)},_addAttribution:function(t){t.layer.getAttribution&&(this.addAttribution(t.layer.getAttribution()),t.layer.once("remove",function(){this.removeAttribution(t.layer.getAttribution())},this))},setPrefix:function(t){return this.options.prefix=t,this._update(),this},addAttribution:function(t){return t&&(this._attributions[t]||(this._attributions[t]=0),this._attributions[t]++,this._update()),this},removeAttribution:function(t){return t&&this._attributions[t]&&(this._attributions[t]--,this._update()),this},_update:function(){if(this._map){var t,e=[];for(t in this._attributions)this._attributions[t]&&e.push(t);var i=[];this.options.prefix&&i.push(this.options.prefix),e.length&&i.push(e.join(", ")),this._container.innerHTML=i.join(' <span aria-hidden="true">|</span> ')}}}),n=(B.mergeOptions({attributionControl:!0}),B.addInitHook(function(){this.options.attributionControl&&(new Ye).addTo(this)}),O.Layers=qe,O.Zoom=Ge,O.Scale=Ke,O.Attribution=Ye,Ue.layers=function(t,e,i){return new qe(t,e,i)},Ue.zoom=function(t){return new Ge(t)},Ue.scale=function(t){return new Ke(t)},Ue.attribution=function(t){return new Ye(t)},et.extend({initialize:function(t){this._map=t},enable:function(){return this._enabled||(this._enabled=!0,this.addHooks()),this},disable:function(){return this._enabled&&(this._enabled=!1,this.removeHooks()),this},enabled:function(){return!!this._enabled}})),ft=(n.addTo=function(t,e){return t.addHandler(e,this),this},{Events:e}),Xe=b.touch?"touchstart mousedown":"mousedown",Je=it.extend({options:{clickTolerance:3},initialize:function(t,e,i,n){c(this,n),this._element=t,this._dragStartTarget=e||t,this._preventOutline=i},enable:function(){this._enabled||(S(this._dragStartTarget,Xe,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(Je._dragging===this&&this.finishDrag(!0),k(this._dragStartTarget,Xe,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(t){var e,i;this._enabled&&(this._moved=!1,ve(this._element,"leaflet-zoom-anim")||(t.touches&&1!==t.touches.length?Je._dragging===this&&this.finishDrag():Je._dragging||t.shiftKey||1!==t.which&&1!==t.button&&!t.touches||((Je._dragging=this)._preventOutline&&Me(this._element),Le(),re(),this._moving||(this.fire("down"),i=t.touches?t.touches[0]:t,e=Ce(this._element),this._startPoint=new p(i.clientX,i.clientY),this._startPos=Pe(this._element),this._parentScale=Ze(e),i="mousedown"===t.type,S(document,i?"mousemove":"touchmove",this._onMove,this),S(document,i?"mouseup":"touchend touchcancel",this._onUp,this)))))},_onMove:function(t){var e;this._enabled&&(t.touches&&1<t.touches.length?this._moved=!0:!(e=new p((e=t.touches&&1===t.touches.length?t.touches[0]:t).clientX,e.clientY)._subtract(this._startPoint)).x&&!e.y||Math.abs(e.x)+Math.abs(e.y)<this.options.clickTolerance||(e.x/=this._parentScale.x,e.y/=this._parentScale.y,A(t),this._moved||(this.fire("dragstart"),this._moved=!0,M(document.body,"leaflet-dragging"),this._lastTarget=t.target||t.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),M(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(e),this._moving=!0,this._lastEvent=t,this._updatePosition()))},_updatePosition:function(){var t={originalEvent:this._lastEvent};this.fire("predrag",t),Z(this._element,this._newPos),this.fire("drag",t)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(t){z(document.body,"leaflet-dragging"),this._lastTarget&&(z(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),k(document,"mousemove touchmove",this._onMove,this),k(document,"mouseup touchend touchcancel",this._onUp,this),Te(),ae(),this._moved&&this._moving&&this.fire("dragend",{noInertia:t,distance:this._newPos.distanceTo(this._startPos)}),this._moving=!1,Je._dragging=!1}});function $e(t,e){if(e&&t.length){var i=t=function(t,e){for(var i=[t[0]],n=1,o=0,s=t.length;n<s;n++)(function(t,e){var i=e.x-t.x,e=e.y-t.y;return i*i+e*e})(t[n],t[o])>e&&(i.push(t[n]),o=n);o<s-1&&i.push(t[s-1]);return i}(t,e=e*e),n=i.length,o=new(typeof Uint8Array!=void 0+""?Uint8Array:Array)(n);o[0]=o[n-1]=1,function t(e,i,n,o,s){var r,a,h,l=0;for(a=o+1;a<=s-1;a++)h=ni(e[a],e[o],e[s],!0),l<h&&(r=a,l=h);n<l&&(i[r]=1,t(e,i,n,o,r),t(e,i,n,r,s))}(i,o,e,0,n-1);var s,r=[];for(s=0;s<n;s++)o[s]&&r.push(i[s]);return r}return t.slice()}function Qe(t,e,i){return Math.sqrt(ni(t,e,i,!0))}function ti(t,e,i,n,o){var s,r,a,h=n?Ve:ii(t,i),l=ii(e,i);for(Ve=l;;){if(!(h|l))return[t,e];if(h&l)return!1;a=ii(r=ei(t,e,s=h||l,i,o),i),s===h?(t=r,h=a):(e=r,l=a)}}function ei(t,e,i,n,o){var s,r,a=e.x-t.x,e=e.y-t.y,h=n.min,n=n.max;return 8&i?(s=t.x+a*(n.y-t.y)/e,r=n.y):4&i?(s=t.x+a*(h.y-t.y)/e,r=h.y):2&i?(s=n.x,r=t.y+e*(n.x-t.x)/a):1&i&&(s=h.x,r=t.y+e*(h.x-t.x)/a),new p(s,r,o)}function ii(t,e){var i=0;return t.x<e.min.x?i|=1:t.x>e.max.x&&(i|=2),t.y<e.min.y?i|=4:t.y>e.max.y&&(i|=8),i}function ni(t,e,i,n){var o=e.x,e=e.y,s=i.x-o,r=i.y-e,a=s*s+r*r;return 0<a&&(1<(a=((t.x-o)*s+(t.y-e)*r)/a)?(o=i.x,e=i.y):0<a&&(o+=s*a,e+=r*a)),s=t.x-o,r=t.y-e,n?s*s+r*r:new p(o,e)}function I(t){return!d(t[0])||"object"!=typeof t[0][0]&&void 0!==t[0][0]}function oi(t){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),I(t)}function si(t,e){var i,n,o,s,r;if(!t||0===t.length)throw new Error("latlngs not passed");I(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);var a,h=[];for(a in t)h.push(e.project(w(t[a])));for(var l=h.length,u=0,c=0;u<l-1;u++)c+=h[u].distanceTo(h[u+1])/2;if(0===c)r=h[0];else for(i=u=0;u<l-1;u++)if(n=h[u],o=h[u+1],c<(i+=s=n.distanceTo(o))){r=[o.x-(s=(i-c)/s)*(o.x-n.x),o.y-s*(o.y-n.y)];break}return e.unproject(m(r))}gt={__proto__:null,simplify:$e,pointToSegmentDistance:Qe,closestPointOnSegment:function(t,e,i){return ni(t,e,i)},clipSegment:ti,_getEdgeIntersection:ei,_getBitCode:ii,_sqClosestPointOnSegment:ni,isFlat:I,_flat:oi,polylineCenter:si};function ri(t,e,i){for(var n,o,s,r,a,h,l,u=[1,4,2,8],c=0,d=t.length;c<d;c++)t[c]._code=ii(t[c],e);for(s=0;s<4;s++){for(h=u[s],n=[],c=0,o=(d=t.length)-1;c<d;o=c++)r=t[c],a=t[o],r._code&h?a._code&h||((l=ei(a,r,h,e,i))._code=ii(l,e),n.push(l)):(a._code&h&&((l=ei(a,r,h,e,i))._code=ii(l,e),n.push(l)),n.push(r));t=n}return t}function ai(t,e){var i,n,o,s,r,a;if(!t||0===t.length)throw new Error("latlngs not passed");I(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);var h,l=[];for(h in t)l.push(e.project(w(t[h])));for(var u=l.length,c=s=r=0,d=0,_=u-1;d<u;_=d++)i=l[d],n=l[_],o=i.y*n.x-n.y*i.x,s+=(i.x+n.x)*o,r+=(i.y+n.y)*o,c+=3*o;return a=0===c?l[0]:[s/c,r/c],e.unproject(m(a))}var vt={__proto__:null,clipPolygon:ri,polygonCenter:ai},yt={project:function(t){return new p(t.lng,t.lat)},unproject:function(t){return new v(t.y,t.x)},bounds:new f([-180,-90],[180,90])},xt={R:6378137,R_MINOR:6356752.314245179,bounds:new f([-20037508.34279,-15496570.73972],[20037508.34279,18764656.23138]),project:function(t){var e=Math.PI/180,i=this.R,n=t.lat*e,o=this.R_MINOR/i,o=Math.sqrt(1-o*o),s=o*Math.sin(n),s=Math.tan(Math.PI/4-n/2)/Math.pow((1-s)/(1+s),o/2),n=-i*Math.log(Math.max(s,1e-10));return new p(t.lng*e*i,n)},unproject:function(t){for(var e,i=180/Math.PI,n=this.R,o=this.R_MINOR/n,s=Math.sqrt(1-o*o),r=Math.exp(-t.y/n),a=Math.PI/2-2*Math.atan(r),h=0,l=.1;h<15&&1e-7<Math.abs(l);h++)e=s*Math.sin(a),e=Math.pow((1-e)/(1+e),s/2),a+=l=Math.PI/2-2*Math.atan(r*e)-a;return new v(a*i,t.x*i/n)}},wt={__proto__:null,LonLat:yt,Mercator:xt,SphericalMercator:rt},Pt=l({},st,{code:"EPSG:3395",projection:xt,transformation:ht(bt=.5/(Math.PI*xt.R),.5,-bt,.5)}),hi=l({},st,{code:"EPSG:4326",projection:yt,transformation:ht(1/180,1,-1/180,.5)}),Lt=l({},ot,{projection:yt,transformation:ht(1,0,-1,0),scale:function(t){return Math.pow(2,t)},zoom:function(t){return Math.log(t)/Math.LN2},distance:function(t,e){var i=e.lng-t.lng,e=e.lat-t.lat;return Math.sqrt(i*i+e*e)},infinite:!0}),o=(ot.Earth=st,ot.EPSG3395=Pt,ot.EPSG3857=lt,ot.EPSG900913=ut,ot.EPSG4326=hi,ot.Simple=Lt,it.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(t){return t.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(t){return t&&t.removeLayer(this),this},getPane:function(t){return this._map.getPane(t?this.options[t]||t:this.options.pane)},addInteractiveTarget:function(t){return this._map._targets[h(t)]=this},removeInteractiveTarget:function(t){return delete this._map._targets[h(t)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(t){var e,i=t.target;i.hasLayer(this)&&(this._map=i,this._zoomAnimated=i._zoomAnimated,this.getEvents&&(e=this.getEvents(),i.on(e,this),this.once("remove",function(){i.off(e,this)},this)),this.onAdd(i),this.fire("add"),i.fire("layeradd",{layer:this}))}})),li=(B.include({addLayer:function(t){var e;if(t._layerAdd)return e=h(t),this._layers[e]||((this._layers[e]=t)._mapToAdd=this,t.beforeAdd&&t.beforeAdd(this),this.whenReady(t._layerAdd,t)),this;throw new Error("The provided object is not a Layer.")},removeLayer:function(t){var e=h(t);return this._layers[e]&&(this._loaded&&t.onRemove(this),delete this._layers[e],this._loaded&&(this.fire("layerremove",{layer:t}),t.fire("remove")),t._map=t._mapToAdd=null),this},hasLayer:function(t){return h(t)in this._layers},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},_addLayers:function(t){for(var e=0,i=(t=t?d(t)?t:[t]:[]).length;e<i;e++)this.addLayer(t[e])},_addZoomLimit:function(t){isNaN(t.options.maxZoom)&&isNaN(t.options.minZoom)||(this._zoomBoundLayers[h(t)]=t,this._updateZoomLevels())},_removeZoomLimit:function(t){t=h(t);this._zoomBoundLayers[t]&&(delete this._zoomBoundLayers[t],this._updateZoomLevels())},_updateZoomLevels:function(){var t,e=1/0,i=-1/0,n=this._getZoomSpan();for(t in this._zoomBoundLayers)var o=this._zoomBoundLayers[t].options,e=void 0===o.minZoom?e:Math.min(e,o.minZoom),i=void 0===o.maxZoom?i:Math.max(i,o.maxZoom);this._layersMaxZoom=i===-1/0?void 0:i,this._layersMinZoom=e===1/0?void 0:e,n!==this._getZoomSpan()&&this.fire("zoomlevelschange"),void 0===this.options.maxZoom&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),void 0===this.options.minZoom&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}}),o.extend({initialize:function(t,e){var i,n;if(c(this,e),this._layers={},t)for(i=0,n=t.length;i<n;i++)this.addLayer(t[i])},addLayer:function(t){var e=this.getLayerId(t);return this._layers[e]=t,this._map&&this._map.addLayer(t),this},removeLayer:function(t){t=t in this._layers?t:this.getLayerId(t);return this._map&&this._layers[t]&&this._map.removeLayer(this._layers[t]),delete this._layers[t],this},hasLayer:function(t){return("number"==typeof t?t:this.getLayerId(t))in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(t){var e,i,n=Array.prototype.slice.call(arguments,1);for(e in this._layers)(i=this._layers[e])[t]&&i[t].apply(i,n);return this},onAdd:function(t){this.eachLayer(t.addLayer,t)},onRemove:function(t){this.eachLayer(t.removeLayer,t)},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},getLayer:function(t){return this._layers[t]},getLayers:function(){var t=[];return this.eachLayer(t.push,t),t},setZIndex:function(t){return this.invoke("setZIndex",t)},getLayerId:h})),ui=li.extend({addLayer:function(t){return this.hasLayer(t)?this:(t.addEventParent(this),li.prototype.addLayer.call(this,t),this.fire("layeradd",{layer:t}))},removeLayer:function(t){return this.hasLayer(t)?((t=t in this._layers?this._layers[t]:t).removeEventParent(this),li.prototype.removeLayer.call(this,t),this.fire("layerremove",{layer:t})):this},setStyle:function(t){return this.invoke("setStyle",t)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var t,e=new s;for(t in this._layers){var i=this._layers[t];e.extend(i.getBounds?i.getBounds():i.getLatLng())}return e}}),ci=et.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(t){c(this,t)},createIcon:function(t){return this._createIcon("icon",t)},createShadow:function(t){return this._createIcon("shadow",t)},_createIcon:function(t,e){var i=this._getIconUrl(t);if(i)return i=this._createImg(i,e&&"IMG"===e.tagName?e:null),this._setIconStyles(i,t),!this.options.crossOrigin&&""!==this.options.crossOrigin||(i.crossOrigin=!0===this.options.crossOrigin?"":this.options.crossOrigin),i;if("icon"===t)throw new Error("iconUrl not set in Icon options (see the docs).");return null},_setIconStyles:function(t,e){var i=this.options,n=i[e+"Size"],n=m(n="number"==typeof n?[n,n]:n),o=m("shadow"===e&&i.shadowAnchor||i.iconAnchor||n&&n.divideBy(2,!0));t.className="leaflet-marker-"+e+" "+(i.className||""),o&&(t.style.marginLeft=-o.x+"px",t.style.marginTop=-o.y+"px"),n&&(t.style.width=n.x+"px",t.style.height=n.y+"px")},_createImg:function(t,e){return(e=e||document.createElement("img")).src=t,e},_getIconUrl:function(t){return b.retina&&this.options[t+"RetinaUrl"]||this.options[t+"Url"]}});var di=ci.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(t){return"string"!=typeof di.imagePath&&(di.imagePath=this._detectIconPath()),(this.options.imagePath||di.imagePath)+ci.prototype._getIconUrl.call(this,t)},_stripUrl:function(t){function e(t,e,i){return(e=e.exec(t))&&e[i]}return(t=e(t,/^url\((['"])?(.+)\1\)$/,2))&&e(t,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var t=P("div","leaflet-default-icon-path",document.body),e=pe(t,"background-image")||pe(t,"backgroundImage");return document.body.removeChild(t),(e=this._stripUrl(e))?e:(t=document.querySelector('link[href$="leaflet.css"]'))?t.href.substring(0,t.href.length-"leaflet.css".length-1):""}}),_i=n.extend({initialize:function(t){this._marker=t},addHooks:function(){var t=this._marker._icon;this._draggable||(this._draggable=new Je(t,t,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),M(t,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&z(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(t){var e=this._marker,i=e._map,n=this._marker.options.autoPanSpeed,o=this._marker.options.autoPanPadding,s=Pe(e._icon),r=i.getPixelBounds(),a=i.getPixelOrigin(),a=_(r.min._subtract(a).add(o),r.max._subtract(a).subtract(o));a.contains(s)||(o=m((Math.max(a.max.x,s.x)-a.max.x)/(r.max.x-a.max.x)-(Math.min(a.min.x,s.x)-a.min.x)/(r.min.x-a.min.x),(Math.max(a.max.y,s.y)-a.max.y)/(r.max.y-a.max.y)-(Math.min(a.min.y,s.y)-a.min.y)/(r.min.y-a.min.y)).multiplyBy(n),i.panBy(o,{animate:!1}),this._draggable._newPos._add(o),this._draggable._startPos._add(o),Z(e._icon,this._draggable._newPos),this._onDrag(t),this._panRequest=x(this._adjustPan.bind(this,t)))},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(t){this._marker.options.autoPan&&(r(this._panRequest),this._panRequest=x(this._adjustPan.bind(this,t)))},_onDrag:function(t){var e=this._marker,i=e._shadow,n=Pe(e._icon),o=e._map.layerPointToLatLng(n);i&&Z(i,n),e._latlng=o,t.latlng=o,t.oldLatLng=this._oldLatLng,e.fire("move",t).fire("drag",t)},_onDragEnd:function(t){r(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",t)}}),pi=o.extend({options:{icon:new di,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(t,e){c(this,e),this._latlng=w(t)},onAdd:function(t){this._zoomAnimated=this._zoomAnimated&&t.options.markerZoomAnimation,this._zoomAnimated&&t.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(t){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&t.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(t){var e=this._latlng;return this._latlng=w(t),this.update(),this.fire("move",{oldLatLng:e,latlng:this._latlng})},setZIndexOffset:function(t){return this.options.zIndexOffset=t,this.update()},getIcon:function(){return this.options.icon},setIcon:function(t){return this.options.icon=t,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){var t;return this._icon&&this._map&&(t=this._map.latLngToLayerPoint(this._latlng).round(),this._setPos(t)),this},_initIcon:function(){var t=this.options,e="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),i=t.icon.createIcon(this._icon),n=!1,i=(i!==this._icon&&(this._icon&&this._removeIcon(),n=!0,t.title&&(i.title=t.title),"IMG"===i.tagName&&(i.alt=t.alt||"")),M(i,e),t.keyboard&&(i.tabIndex="0",i.setAttribute("role","button")),this._icon=i,t.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&S(i,"focus",this._panOnFocus,this),t.icon.createShadow(this._shadow)),o=!1;i!==this._shadow&&(this._removeShadow(),o=!0),i&&(M(i,e),i.alt=""),this._shadow=i,t.opacity<1&&this._updateOpacity(),n&&this.getPane().appendChild(this._icon),this._initInteraction(),i&&o&&this.getPane(t.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&k(this._icon,"focus",this._panOnFocus,this),T(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&T(this._shadow),this._shadow=null},_setPos:function(t){this._icon&&Z(this._icon,t),this._shadow&&Z(this._shadow,t),this._zIndex=t.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(t){this._icon&&(this._icon.style.zIndex=this._zIndex+t)},_animateZoom:function(t){t=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center).round();this._setPos(t)},_initInteraction:function(){var t;this.options.interactive&&(M(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),_i&&(t=this.options.draggable,this.dragging&&(t=this.dragging.enabled(),this.dragging.disable()),this.dragging=new _i(this),t&&this.dragging.enable()))},setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var t=this.options.opacity;this._icon&&C(this._icon,t),this._shadow&&C(this._shadow,t)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var t,e,i=this._map;i&&(t=(e=this.options.icon.options).iconSize?m(e.iconSize):m(0,0),e=e.iconAnchor?m(e.iconAnchor):m(0,0),i.panInside(this._latlng,{paddingTopLeft:e,paddingBottomRight:t.subtract(e)}))},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});var mi=o.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(t){this._renderer=t.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(t){return c(this,t),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&t&&Object.prototype.hasOwnProperty.call(t,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),fi=mi.extend({options:{fill:!0,radius:10},initialize:function(t,e){c(this,e),this._latlng=w(t),this._radius=this.options.radius},setLatLng:function(t){var e=this._latlng;return this._latlng=w(t),this.redraw(),this.fire("move",{oldLatLng:e,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(t){return this.options.radius=this._radius=t,this.redraw()},getRadius:function(){return this._radius},setStyle:function(t){var e=t&&t.radius||this._radius;return mi.prototype.setStyle.call(this,t),this.setRadius(e),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var t=this._radius,e=this._radiusY||t,i=this._clickTolerance(),t=[t+i,e+i];this._pxBounds=new f(this._point.subtract(t),this._point.add(t))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(t){return t.distanceTo(this._point)<=this._radius+this._clickTolerance()}});var gi=fi.extend({initialize:function(t,e,i){if(c(this,e="number"==typeof e?l({},i,{radius:e}):e),this._latlng=w(t),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(t){return this._mRadius=t,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var t=[this._radius,this._radiusY||this._radius];return new s(this._map.layerPointToLatLng(this._point.subtract(t)),this._map.layerPointToLatLng(this._point.add(t)))},setStyle:mi.prototype.setStyle,_project:function(){var t,e,i,n,o,s=this._latlng.lng,r=this._latlng.lat,a=this._map,h=a.options.crs;h.distance===st.distance?(n=Math.PI/180,o=this._mRadius/st.R/n,t=a.project([r+o,s]),e=a.project([r-o,s]),e=t.add(e).divideBy(2),i=a.unproject(e).lat,n=Math.acos((Math.cos(o*n)-Math.sin(r*n)*Math.sin(i*n))/(Math.cos(r*n)*Math.cos(i*n)))/n,!isNaN(n)&&0!==n||(n=o/Math.cos(Math.PI/180*r)),this._point=e.subtract(a.getPixelOrigin()),this._radius=isNaN(n)?0:e.x-a.project([i,s-n]).x,this._radiusY=e.y-t.y):(o=h.unproject(h.project(this._latlng).subtract([this._mRadius,0])),this._point=a.latLngToLayerPoint(this._latlng),this._radius=this._point.x-a.latLngToLayerPoint(o).x),this._updateBounds()}});var vi=mi.extend({options:{smoothFactor:1,noClip:!1},initialize:function(t,e){c(this,e),this._setLatLngs(t)},getLatLngs:function(){return this._latlngs},setLatLngs:function(t){return this._setLatLngs(t),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(t){for(var e=1/0,i=null,n=ni,o=0,s=this._parts.length;o<s;o++)for(var r=this._parts[o],a=1,h=r.length;a<h;a++){var l,u,c=n(t,l=r[a-1],u=r[a],!0);c<e&&(e=c,i=n(t,l,u))}return i&&(i.distance=Math.sqrt(e)),i},getCenter:function(){if(this._map)return si(this._defaultShape(),this._map.options.crs);throw new Error("Must add layer to map before using getCenter()")},getBounds:function(){return this._bounds},addLatLng:function(t,e){return e=e||this._defaultShape(),t=w(t),e.push(t),this._bounds.extend(t),this.redraw()},_setLatLngs:function(t){this._bounds=new s,this._latlngs=this._convertLatLngs(t)},_defaultShape:function(){return I(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(t){for(var e=[],i=I(t),n=0,o=t.length;n<o;n++)i?(e[n]=w(t[n]),this._bounds.extend(e[n])):e[n]=this._convertLatLngs(t[n]);return e},_project:function(){var t=new f;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,t),this._bounds.isValid()&&t.isValid()&&(this._rawPxBounds=t,this._updateBounds())},_updateBounds:function(){var t=this._clickTolerance(),t=new p(t,t);this._rawPxBounds&&(this._pxBounds=new f([this._rawPxBounds.min.subtract(t),this._rawPxBounds.max.add(t)]))},_projectLatlngs:function(t,e,i){var n,o,s=t[0]instanceof v,r=t.length;if(s){for(o=[],n=0;n<r;n++)o[n]=this._map.latLngToLayerPoint(t[n]),i.extend(o[n]);e.push(o)}else for(n=0;n<r;n++)this._projectLatlngs(t[n],e,i)},_clipPoints:function(){var t=this._renderer._bounds;if(this._parts=[],this._pxBounds&&this._pxBounds.intersects(t))if(this.options.noClip)this._parts=this._rings;else for(var e,i,n,o,s=this._parts,r=0,a=0,h=this._rings.length;r<h;r++)for(e=0,i=(o=this._rings[r]).length;e<i-1;e++)(n=ti(o[e],o[e+1],t,e,!0))&&(s[a]=s[a]||[],s[a].push(n[0]),n[1]===o[e+1]&&e!==i-2||(s[a].push(n[1]),a++))},_simplifyPoints:function(){for(var t=this._parts,e=this.options.smoothFactor,i=0,n=t.length;i<n;i++)t[i]=$e(t[i],e)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(t,e){var i,n,o,s,r,a,h=this._clickTolerance();if(this._pxBounds&&this._pxBounds.contains(t))for(i=0,s=this._parts.length;i<s;i++)for(n=0,o=(r=(a=this._parts[i]).length)-1;n<r;o=n++)if((e||0!==n)&&Qe(t,a[o],a[n])<=h)return!0;return!1}});vi._flat=oi;var yi=vi.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(this._map)return ai(this._defaultShape(),this._map.options.crs);throw new Error("Must add layer to map before using getCenter()")},_convertLatLngs:function(t){var t=vi.prototype._convertLatLngs.call(this,t),e=t.length;return 2<=e&&t[0]instanceof v&&t[0].equals(t[e-1])&&t.pop(),t},_setLatLngs:function(t){vi.prototype._setLatLngs.call(this,t),I(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return(I(this._latlngs[0])?this._latlngs:this._latlngs[0])[0]},_clipPoints:function(){var t=this._renderer._bounds,e=this.options.weight,e=new p(e,e),t=new f(t.min.subtract(e),t.max.add(e));if(this._parts=[],this._pxBounds&&this._pxBounds.intersects(t))if(this.options.noClip)this._parts=this._rings;else for(var i,n=0,o=this._rings.length;n<o;n++)(i=ri(this._rings[n],t,!0)).length&&this._parts.push(i)},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(t){var e,i,n,o,s,r,a,h,l=!1;if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(o=0,a=this._parts.length;o<a;o++)for(s=0,r=(h=(e=this._parts[o]).length)-1;s<h;r=s++)i=e[s],n=e[r],i.y>t.y!=n.y>t.y&&t.x<(n.x-i.x)*(t.y-i.y)/(n.y-i.y)+i.x&&(l=!l);return l||vi.prototype._containsPoint.call(this,t,!0)}});var xi=ui.extend({initialize:function(t,e){c(this,e),this._layers={},t&&this.addData(t)},addData:function(t){var e,i,n,o=d(t)?t:t.features;if(o){for(e=0,i=o.length;e<i;e++)((n=o[e]).geometries||n.geometry||n.features||n.coordinates)&&this.addData(n);return this}var s,r=this.options;return(!r.filter||r.filter(t))&&(s=wi(t,r))?(s.feature=Ci(t),s.defaultOptions=s.options,this.resetStyle(s),r.onEachFeature&&r.onEachFeature(t,s),this.addLayer(s)):this},resetStyle:function(t){return void 0===t?this.eachLayer(this.resetStyle,this):(t.options=l({},t.defaultOptions),this._setLayerStyle(t,this.options.style),this)},setStyle:function(e){return this.eachLayer(function(t){this._setLayerStyle(t,e)},this)},_setLayerStyle:function(t,e){t.setStyle&&("function"==typeof e&&(e=e(t.feature)),t.setStyle(e))}});function wi(t,e){var i,n,o,s,r="Feature"===t.type?t.geometry:t,a=r?r.coordinates:null,h=[],l=e&&e.pointToLayer,u=e&&e.coordsToLatLng||Pi;if(!a&&!r)return null;switch(r.type){case"Point":return bi(l,t,i=u(a),e);case"MultiPoint":for(o=0,s=a.length;o<s;o++)i=u(a[o]),h.push(bi(l,t,i,e));return new ui(h);case"LineString":case"MultiLineString":return n=Li(a,"LineString"===r.type?0:1,u),new vi(n,e);case"Polygon":case"MultiPolygon":return n=Li(a,"Polygon"===r.type?1:2,u),new yi(n,e);case"GeometryCollection":for(o=0,s=r.geometries.length;o<s;o++){var c=wi({geometry:r.geometries[o],type:"Feature",properties:t.properties},e);c&&h.push(c)}return new ui(h);case"FeatureCollection":for(o=0,s=r.features.length;o<s;o++){var d=wi(r.features[o],e);d&&h.push(d)}return new ui(h);default:throw new Error("Invalid GeoJSON object.")}}function bi(t,e,i,n){return t?t(e,i):new pi(i,n&&n.markersInheritOptions&&n)}function Pi(t){return new v(t[1],t[0],t[2])}function Li(t,e,i){for(var n,o=[],s=0,r=t.length;s<r;s++)n=e?Li(t[s],e-1,i):(i||Pi)(t[s]),o.push(n);return o}function Ti(t,e){return void 0!==(t=w(t)).alt?[i(t.lng,e),i(t.lat,e),i(t.alt,e)]:[i(t.lng,e),i(t.lat,e)]}function Mi(t,e,i,n){for(var o=[],s=0,r=t.length;s<r;s++)o.push(e?Mi(t[s],I(t[s])?0:e-1,i,n):Ti(t[s],n));return!e&&i&&o.push(o[0]),o}function zi(t,e){return t.feature?l({},t.feature,{geometry:e}):Ci(e)}function Ci(t){return"Feature"===t.type||"FeatureCollection"===t.type?t:{type:"Feature",properties:{},geometry:t}}Tt={toGeoJSON:function(t){return zi(this,{type:"Point",coordinates:Ti(this.getLatLng(),t)})}};function Zi(t,e){return new xi(t,e)}pi.include(Tt),gi.include(Tt),fi.include(Tt),vi.include({toGeoJSON:function(t){var e=!I(this._latlngs);return zi(this,{type:(e?"Multi":"")+"LineString",coordinates:Mi(this._latlngs,e?1:0,!1,t)})}}),yi.include({toGeoJSON:function(t){var e=!I(this._latlngs),i=e&&!I(this._latlngs[0]),t=Mi(this._latlngs,i?2:e?1:0,!0,t);return zi(this,{type:(i?"Multi":"")+"Polygon",coordinates:t=e?t:[t]})}}),li.include({toMultiPoint:function(e){var i=[];return this.eachLayer(function(t){i.push(t.toGeoJSON(e).geometry.coordinates)}),zi(this,{type:"MultiPoint",coordinates:i})},toGeoJSON:function(e){var i,n,t=this.feature&&this.feature.geometry&&this.feature.geometry.type;return"MultiPoint"===t?this.toMultiPoint(e):(i="GeometryCollection"===t,n=[],this.eachLayer(function(t){t.toGeoJSON&&(t=t.toGeoJSON(e),i?n.push(t.geometry):"FeatureCollection"===(t=Ci(t)).type?n.push.apply(n,t.features):n.push(t))}),i?zi(this,{geometries:n,type:"GeometryCollection"}):{type:"FeatureCollection",features:n})}});var Mt=Zi,Si=o.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(t,e,i){this._url=t,this._bounds=g(e),c(this,i)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(M(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){T(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(t){return this.options.opacity=t,this._image&&this._updateOpacity(),this},setStyle:function(t){return t.opacity&&this.setOpacity(t.opacity),this},bringToFront:function(){return this._map&&fe(this._image),this},bringToBack:function(){return this._map&&ge(this._image),this},setUrl:function(t){return this._url=t,this._image&&(this._image.src=t),this},setBounds:function(t){return this._bounds=g(t),this._map&&this._reset(),this},getEvents:function(){var t={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var t="IMG"===this._url.tagName,e=this._image=t?this._url:P("img");M(e,"leaflet-image-layer"),this._zoomAnimated&&M(e,"leaflet-zoom-animated"),this.options.className&&M(e,this.options.className),e.onselectstart=u,e.onmousemove=u,e.onload=a(this.fire,this,"load"),e.onerror=a(this._overlayOnError,this,"error"),!this.options.crossOrigin&&""!==this.options.crossOrigin||(e.crossOrigin=!0===this.options.crossOrigin?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),t?this._url=e.src:(e.src=this._url,e.alt=this.options.alt)},_animateZoom:function(t){var e=this._map.getZoomScale(t.zoom),t=this._map._latLngBoundsToNewLayerBounds(this._bounds,t.zoom,t.center).min;be(this._image,t,e)},_reset:function(){var t=this._image,e=new f(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),i=e.getSize();Z(t,e.min),t.style.width=i.x+"px",t.style.height=i.y+"px"},_updateOpacity:function(){C(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&void 0!==this.options.zIndex&&null!==this.options.zIndex&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var t=this.options.errorOverlayUrl;t&&this._url!==t&&(this._url=t,this._image.src=t)},getCenter:function(){return this._bounds.getCenter()}}),Ei=Si.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var t="VIDEO"===this._url.tagName,e=this._image=t?this._url:P("video");if(M(e,"leaflet-image-layer"),this._zoomAnimated&&M(e,"leaflet-zoom-animated"),this.options.className&&M(e,this.options.className),e.onselectstart=u,e.onmousemove=u,e.onloadeddata=a(this.fire,this,"load"),t){for(var i=e.getElementsByTagName("source"),n=[],o=0;o<i.length;o++)n.push(i[o].src);this._url=0<i.length?n:[e.src]}else{d(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(e.style,"objectFit")&&(e.style.objectFit="fill"),e.autoplay=!!this.options.autoplay,e.loop=!!this.options.loop,e.muted=!!this.options.muted,e.playsInline=!!this.options.playsInline;for(var s=0;s<this._url.length;s++){var r=P("source");r.src=this._url[s],e.appendChild(r)}}}});var ki=Si.extend({_initImage:function(){var t=this._image=this._url;M(t,"leaflet-image-layer"),this._zoomAnimated&&M(t,"leaflet-zoom-animated"),this.options.className&&M(t,this.options.className),t.onselectstart=u,t.onmousemove=u}});var Ai=o.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(t,e){t&&(t instanceof L.LatLng||d(t))?(this._latlng=w(t),c(this,e)):(c(this,t),this._source=e),this.options.content&&(this._content=this.options.content)},openOn:function(t){return(t=arguments.length?t:this._source._map).hasLayer(this)||t.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(t){return this._map?this.close():(arguments.length?this._source=t:t=this._source,this._prepareOpen(),this.openOn(t._map)),this},onAdd:function(t){this._zoomAnimated=t._zoomAnimated,this._container||this._initLayout(),t._fadeAnimated&&C(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),t._fadeAnimated&&C(this._container,1),this.bringToFront(),this.options.interactive&&(M(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(t){t._fadeAnimated?(C(this._container,0),this._removeTimeout=setTimeout(a(T,void 0,this._container),200)):T(this._container),this.options.interactive&&(z(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(t){return this._latlng=w(t),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(t){return this._content=t,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var t={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&fe(this._container),this},bringToBack:function(){return this._map&&ge(this._container),this},_prepareOpen:function(t){if(!(i=this._source)._map)return!1;if(i instanceof ui){var e,i=null,n=this._source._layers;for(e in n)if(n[e]._map){i=n[e];break}if(!i)return!1;this._source=i}if(!t)if(i.getCenter)t=i.getCenter();else if(i.getLatLng)t=i.getLatLng();else{if(!i.getBounds)throw new Error("Unable to get source layer LatLng.");t=i.getBounds().getCenter()}return this.setLatLng(t),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var t=this._contentNode,e="function"==typeof this._content?this._content(this._source||this):this._content;if("string"==typeof e)t.innerHTML=e;else{for(;t.hasChildNodes();)t.removeChild(t.firstChild);t.appendChild(e)}this.fire("contentupdate")}},_updatePosition:function(){var t,e,i;this._map&&(e=this._map.latLngToLayerPoint(this._latlng),t=m(this.options.offset),i=this._getAnchor(),this._zoomAnimated?Z(this._container,e.add(i)):t=t.add(e).add(i),e=this._containerBottom=-t.y,i=this._containerLeft=-Math.round(this._containerWidth/2)+t.x,this._container.style.bottom=e+"px",this._container.style.left=i+"px")},_getAnchor:function(){return[0,0]}}),Bi=(B.include({_initOverlay:function(t,e,i,n){var o=e;return o instanceof t||(o=new t(n).setContent(e)),i&&o.setLatLng(i),o}}),o.include({_initOverlay:function(t,e,i,n){var o=i;return o instanceof t?(c(o,n),o._source=this):(o=e&&!n?e:new t(n,this)).setContent(i),o}}),Ai.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(t){return!(t=arguments.length?t:this._source._map).hasLayer(this)&&t._popup&&t._popup.options.autoClose&&t.removeLayer(t._popup),t._popup=this,Ai.prototype.openOn.call(this,t)},onAdd:function(t){Ai.prototype.onAdd.call(this,t),t.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof mi||this._source.on("preclick",Be))},onRemove:function(t){Ai.prototype.onRemove.call(this,t),t.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof mi||this._source.off("preclick",Be))},getEvents:function(){var t=Ai.prototype.getEvents.call(this);return(void 0!==this.options.closeOnClick?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(t.preclick=this.close),this.options.keepInView&&(t.moveend=this._adjustPan),t},_initLayout:function(){var t="leaflet-popup",e=this._container=P("div",t+" "+(this.options.className||"")+" leaflet-zoom-animated"),i=this._wrapper=P("div",t+"-content-wrapper",e);this._contentNode=P("div",t+"-content",i),Ie(e),Oe(this._contentNode),S(e,"contextmenu",Be),this._tipContainer=P("div",t+"-tip-container",e),this._tip=P("div",t+"-tip",this._tipContainer),this.options.closeButton&&((i=this._closeButton=P("a",t+"-close-button",e)).setAttribute("role","button"),i.setAttribute("aria-label","Close popup"),i.href="#close",i.innerHTML='<span aria-hidden="true">&#215;</span>',S(i,"click",function(t){A(t),this.close()},this))},_updateLayout:function(){var t=this._contentNode,e=t.style,i=(e.width="",e.whiteSpace="nowrap",t.offsetWidth),i=Math.min(i,this.options.maxWidth),i=(i=Math.max(i,this.options.minWidth),e.width=i+1+"px",e.whiteSpace="",e.height="",t.offsetHeight),n=this.options.maxHeight,o="leaflet-popup-scrolled";(n&&n<i?(e.height=n+"px",M):z)(t,o),this._containerWidth=this._container.offsetWidth},_animateZoom:function(t){var t=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center),e=this._getAnchor();Z(this._container,t.add(e))},_adjustPan:function(t){var e,i,n,o,s,r,a,h;this.options.autoPan&&(this._map._panAnim&&this._map._panAnim.stop(),e=this._map,i=parseInt(pe(this._container,"marginBottom"),10)||0,i=this._container.offsetHeight+i,h=this._containerWidth,(n=new p(this._containerLeft,-i-this._containerBottom))._add(Pe(this._container)),n=e.layerPointToContainerPoint(n),s=m(this.options.autoPanPadding),o=m(this.options.autoPanPaddingTopLeft||s),s=m(this.options.autoPanPaddingBottomRight||s),r=e.getSize(),a=0,n.x+h+s.x>r.x&&(a=n.x+h-r.x+s.x),n.x-a-o.x<(h=0)&&(a=n.x-o.x),n.y+i+s.y>r.y&&(h=n.y+i-r.y+s.y),n.y-h-o.y<0&&(h=n.y-o.y),(a||h)&&e.fire("autopanstart").panBy([a,h],{animate:t&&"moveend"===t.type}))},_getAnchor:function(){return m(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}})),Oi=(B.mergeOptions({closePopupOnClick:!0}),B.include({openPopup:function(t,e,i){return this._initOverlay(Bi,t,e,i).openOn(this),this},closePopup:function(t){return(t=arguments.length?t:this._popup)&&t.close(),this}}),o.include({bindPopup:function(t,e){return this._popup=this._initOverlay(Bi,this._popup,t,e),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(t){return this._popup&&this._popup._prepareOpen(t||this._latlng)&&this._popup.openOn(this._map),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return!!this._popup&&this._popup.isOpen()},setPopupContent:function(t){return this._popup&&this._popup.setContent(t),this},getPopup:function(){return this._popup},_openPopup:function(t){var e;this._popup&&this._map&&(Re(t),e=t.layer||t.target,this._popup._source!==e||e instanceof mi?(this._popup._source=e,this.openPopup(t.latlng)):this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(t.latlng))},_movePopup:function(t){this._popup.setLatLng(t.latlng)},_onKeyPress:function(t){13===t.originalEvent.keyCode&&this._openPopup(t)}}),Ai.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(t){Ai.prototype.onAdd.call(this,t),this.setOpacity(this.options.opacity),t.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(t){Ai.prototype.onRemove.call(this,t),t.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var t=Ai.prototype.getEvents.call(this);return this.options.permanent||(t.preclick=this.close),t},_initLayout:function(){var t="leaflet-tooltip "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=P("div",t),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+h(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(t){var e,i=this._map,n=this._container,o=i.latLngToContainerPoint(i.getCenter()),i=i.layerPointToContainerPoint(t),s=this.options.direction,r=n.offsetWidth,a=n.offsetHeight,h=m(this.options.offset),l=this._getAnchor(),i="top"===s?(e=r/2+l.x,a):"bottom"===s?(e=r/2+l.x,l.y):(e="center"===s?r/2+l.x:"right"===s?0:"left"===s?r:i.x<o.x?(s="right",0):(s="left",r+2*(h.x+l.x)),a/2);t=t.subtract(m(e,i,!0)).add(h).add(l),z(n,"leaflet-tooltip-right"),z(n,"leaflet-tooltip-left"),z(n,"leaflet-tooltip-top"),z(n,"leaflet-tooltip-bottom"),M(n,"leaflet-tooltip-"+s),Z(n,t)},_updatePosition:function(){var t=this._map.latLngToLayerPoint(this._latlng);this._setPosition(t)},setOpacity:function(t){this.options.opacity=t,this._container&&C(this._container,t)},_animateZoom:function(t){t=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);this._setPosition(t)},_getAnchor:function(){return m(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}})),Ii=(B.include({openTooltip:function(t,e,i){return this._initOverlay(Oi,t,e,i).openOn(this),this},closeTooltip:function(t){return t.close(),this}}),o.include({bindTooltip:function(t,e){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(Oi,this._tooltip,t,e),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(t){var e,i;!t&&this._tooltipHandlersAdded||(e=t?"off":"on",i={remove:this.closeTooltip,move:this._moveTooltip},this._tooltip.options.permanent?i.add=this._openTooltip:(i.mouseover=this._openTooltip,i.mouseout=this.closeTooltip,i.click=this._openTooltip,this._map?this._addFocusListeners():i.add=this._addFocusListeners),this._tooltip.options.sticky&&(i.mousemove=this._moveTooltip),this[e](i),this._tooltipHandlersAdded=!t)},openTooltip:function(t){return this._tooltip&&this._tooltip._prepareOpen(t)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this)),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(t){return this._tooltip&&this._tooltip.setContent(t),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(t){var e=t.getElement();e&&(S(e,"focus",function(){this._tooltip._source=t,this.openTooltip()},this),S(e,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(t){t=t.getElement();t&&t.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(t){!this._tooltip||!this._map||this._map.dragging&&this._map.dragging.moving()||(this._tooltip._source=t.layer||t.target,this.openTooltip(this._tooltip.options.sticky?t.latlng:void 0))},_moveTooltip:function(t){var e=t.latlng;this._tooltip.options.sticky&&t.originalEvent&&(t=this._map.mouseEventToContainerPoint(t.originalEvent),t=this._map.containerPointToLayerPoint(t),e=this._map.layerPointToLatLng(t)),this._tooltip.setLatLng(e)}}),ci.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(t){var t=t&&"DIV"===t.tagName?t:document.createElement("div"),e=this.options;return e.html instanceof Element?(me(t),t.appendChild(e.html)):t.innerHTML=!1!==e.html?e.html:"",e.bgPos&&(e=m(e.bgPos),t.style.backgroundPosition=-e.x+"px "+-e.y+"px"),this._setIconStyles(t,"icon"),t},createShadow:function(){return null}}));ci.Default=di;var Ri=o.extend({options:{tileSize:256,opacity:1,updateWhenIdle:b.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(t){c(this,t)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(t){t._addZoomLimit(this)},onRemove:function(t){this._removeAllTiles(),T(this._container),t._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(fe(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(ge(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(t){return this.options.opacity=t,this._updateOpacity(),this},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){var t;return this._map&&(this._removeAllTiles(),(t=this._clampZoom(this._map.getZoom()))!==this._tileZoom&&(this._tileZoom=t,this._updateLevels()),this._update()),this},getEvents:function(){var t={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=j(this._onMoveEnd,this.options.updateInterval,this)),t.move=this._onMove),this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},createTile:function(){return document.createElement("div")},getTileSize:function(){var t=this.options.tileSize;return t instanceof p?t:new p(t,t)},_updateZIndex:function(){this._container&&void 0!==this.options.zIndex&&null!==this.options.zIndex&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(t){for(var e,i=this.getPane().children,n=-t(-1/0,1/0),o=0,s=i.length;o<s;o++)e=i[o].style.zIndex,i[o]!==this._container&&e&&(n=t(n,+e));isFinite(n)&&(this.options.zIndex=n+t(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!b.ielt9){C(this._container,this.options.opacity);var t,e=+new Date,i=!1,n=!1;for(t in this._tiles){var o,s=this._tiles[t];s.current&&s.loaded&&(o=Math.min(1,(e-s.loaded)/200),C(s.el,o),o<1?i=!0:(s.active?n=!0:this._onOpaqueTile(s),s.active=!0))}n&&!this._noPrune&&this._pruneTiles(),i&&(r(this._fadeFrame),this._fadeFrame=x(this._updateOpacity,this))}},_onOpaqueTile:u,_initContainer:function(){this._container||(this._container=P("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var t=this._tileZoom,e=this.options.maxZoom;if(void 0!==t){for(var i in this._levels)i=Number(i),this._levels[i].el.children.length||i===t?(this._levels[i].el.style.zIndex=e-Math.abs(t-i),this._onUpdateLevel(i)):(T(this._levels[i].el),this._removeTilesAtZoom(i),this._onRemoveLevel(i),delete this._levels[i]);var n=this._levels[t],o=this._map;return n||((n=this._levels[t]={}).el=P("div","leaflet-tile-container leaflet-zoom-animated",this._container),n.el.style.zIndex=e,n.origin=o.project(o.unproject(o.getPixelOrigin()),t).round(),n.zoom=t,this._setZoomTransform(n,o.getCenter(),o.getZoom()),u(n.el.offsetWidth),this._onCreateLevel(n)),this._level=n}},_onUpdateLevel:u,_onRemoveLevel:u,_onCreateLevel:u,_pruneTiles:function(){if(this._map){var t,e,i,n=this._map.getZoom();if(n>this.options.maxZoom||n<this.options.minZoom)this._removeAllTiles();else{for(t in this._tiles)(i=this._tiles[t]).retain=i.current;for(t in this._tiles)(i=this._tiles[t]).current&&!i.active&&(e=i.coords,this._retainParent(e.x,e.y,e.z,e.z-5)||this._retainChildren(e.x,e.y,e.z,e.z+2));for(t in this._tiles)this._tiles[t].retain||this._removeTile(t)}}},_removeTilesAtZoom:function(t){for(var e in this._tiles)this._tiles[e].coords.z===t&&this._removeTile(e)},_removeAllTiles:function(){for(var t in this._tiles)this._removeTile(t)},_invalidateAll:function(){for(var t in this._levels)T(this._levels[t].el),this._onRemoveLevel(Number(t)),delete this._levels[t];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(t,e,i,n){var t=Math.floor(t/2),e=Math.floor(e/2),i=i-1,o=new p(+t,+e),o=(o.z=i,this._tileCoordsToKey(o)),o=this._tiles[o];return o&&o.active?o.retain=!0:(o&&o.loaded&&(o.retain=!0),n<i&&this._retainParent(t,e,i,n))},_retainChildren:function(t,e,i,n){for(var o=2*t;o<2*t+2;o++)for(var s=2*e;s<2*e+2;s++){var r=new p(o,s),r=(r.z=i+1,this._tileCoordsToKey(r)),r=this._tiles[r];r&&r.active?r.retain=!0:(r&&r.loaded&&(r.retain=!0),i+1<n&&this._retainChildren(o,s,i+1,n))}},_resetView:function(t){t=t&&(t.pinch||t.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),t,t)},_animateZoom:function(t){this._setView(t.center,t.zoom,!0,t.noUpdate)},_clampZoom:function(t){var e=this.options;return void 0!==e.minNativeZoom&&t<e.minNativeZoom?e.minNativeZoom:void 0!==e.maxNativeZoom&&e.maxNativeZoom<t?e.maxNativeZoom:t},_setView:function(t,e,i,n){var o=Math.round(e),o=void 0!==this.options.maxZoom&&o>this.options.maxZoom||void 0!==this.options.minZoom&&o<this.options.minZoom?void 0:this._clampZoom(o),s=this.options.updateWhenZooming&&o!==this._tileZoom;n&&!s||(this._tileZoom=o,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),void 0!==o&&this._update(t),i||this._pruneTiles(),this._noPrune=!!i),this._setZoomTransforms(t,e)},_setZoomTransforms:function(t,e){for(var i in this._levels)this._setZoomTransform(this._levels[i],t,e)},_setZoomTransform:function(t,e,i){var n=this._map.getZoomScale(i,t.zoom),e=t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(e,i)).round();b.any3d?be(t.el,e,n):Z(t.el,e)},_resetGrid:function(){var t=this._map,e=t.options.crs,i=this._tileSize=this.getTileSize(),n=this._tileZoom,o=this._map.getPixelWorldBounds(this._tileZoom);o&&(this._globalTileRange=this._pxBoundsToTileRange(o)),this._wrapX=e.wrapLng&&!this.options.noWrap&&[Math.floor(t.project([0,e.wrapLng[0]],n).x/i.x),Math.ceil(t.project([0,e.wrapLng[1]],n).x/i.y)],this._wrapY=e.wrapLat&&!this.options.noWrap&&[Math.floor(t.project([e.wrapLat[0],0],n).y/i.x),Math.ceil(t.project([e.wrapLat[1],0],n).y/i.y)]},_onMoveEnd:function(){this._map&&!this._map._animatingZoom&&this._update()},_getTiledPixelBounds:function(t){var e=this._map,i=e._animatingZoom?Math.max(e._animateToZoom,e.getZoom()):e.getZoom(),i=e.getZoomScale(i,this._tileZoom),t=e.project(t,this._tileZoom).floor(),e=e.getSize().divideBy(2*i);return new f(t.subtract(e),t.add(e))},_update:function(t){var e=this._map;if(e){var i=this._clampZoom(e.getZoom());if(void 0===t&&(t=e.getCenter()),void 0!==this._tileZoom){var n,e=this._getTiledPixelBounds(t),o=this._pxBoundsToTileRange(e),s=o.getCenter(),r=[],e=this.options.keepBuffer,a=new f(o.getBottomLeft().subtract([e,-e]),o.getTopRight().add([e,-e]));if(!(isFinite(o.min.x)&&isFinite(o.min.y)&&isFinite(o.max.x)&&isFinite(o.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(n in this._tiles){var h=this._tiles[n].coords;h.z===this._tileZoom&&a.contains(new p(h.x,h.y))||(this._tiles[n].current=!1)}if(1<Math.abs(i-this._tileZoom))this._setView(t,i);else{for(var l=o.min.y;l<=o.max.y;l++)for(var u=o.min.x;u<=o.max.x;u++){var c,d=new p(u,l);d.z=this._tileZoom,this._isValidTile(d)&&((c=this._tiles[this._tileCoordsToKey(d)])?c.current=!0:r.push(d))}if(r.sort(function(t,e){return t.distanceTo(s)-e.distanceTo(s)}),0!==r.length){this._loading||(this._loading=!0,this.fire("loading"));for(var _=document.createDocumentFragment(),u=0;u<r.length;u++)this._addTile(r[u],_);this._level.el.appendChild(_)}}}}},_isValidTile:function(t){var e=this._map.options.crs;if(!e.infinite){var i=this._globalTileRange;if(!e.wrapLng&&(t.x<i.min.x||t.x>i.max.x)||!e.wrapLat&&(t.y<i.min.y||t.y>i.max.y))return!1}return!this.options.bounds||(e=this._tileCoordsToBounds(t),g(this.options.bounds).overlaps(e))},_keyToBounds:function(t){return this._tileCoordsToBounds(this._keyToTileCoords(t))},_tileCoordsToNwSe:function(t){var e=this._map,i=this.getTileSize(),n=t.scaleBy(i),i=n.add(i);return[e.unproject(n,t.z),e.unproject(i,t.z)]},_tileCoordsToBounds:function(t){t=this._tileCoordsToNwSe(t),t=new s(t[0],t[1]);return t=this.options.noWrap?t:this._map.wrapLatLngBounds(t)},_tileCoordsToKey:function(t){return t.x+":"+t.y+":"+t.z},_keyToTileCoords:function(t){var t=t.split(":"),e=new p(+t[0],+t[1]);return e.z=+t[2],e},_removeTile:function(t){var e=this._tiles[t];e&&(T(e.el),delete this._tiles[t],this.fire("tileunload",{tile:e.el,coords:this._keyToTileCoords(t)}))},_initTile:function(t){M(t,"leaflet-tile");var e=this.getTileSize();t.style.width=e.x+"px",t.style.height=e.y+"px",t.onselectstart=u,t.onmousemove=u,b.ielt9&&this.options.opacity<1&&C(t,this.options.opacity)},_addTile:function(t,e){var i=this._getTilePos(t),n=this._tileCoordsToKey(t),o=this.createTile(this._wrapCoords(t),a(this._tileReady,this,t));this._initTile(o),this.createTile.length<2&&x(a(this._tileReady,this,t,null,o)),Z(o,i),this._tiles[n]={el:o,coords:t,current:!0},e.appendChild(o),this.fire("tileloadstart",{tile:o,coords:t})},_tileReady:function(t,e,i){e&&this.fire("tileerror",{error:e,tile:i,coords:t});var n=this._tileCoordsToKey(t);(i=this._tiles[n])&&(i.loaded=+new Date,this._map._fadeAnimated?(C(i.el,0),r(this._fadeFrame),this._fadeFrame=x(this._updateOpacity,this)):(i.active=!0,this._pruneTiles()),e||(M(i.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:i.el,coords:t})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),b.ielt9||!this._map._fadeAnimated?x(this._pruneTiles,this):setTimeout(a(this._pruneTiles,this),250)))},_getTilePos:function(t){return t.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(t){var e=new p(this._wrapX?H(t.x,this._wrapX):t.x,this._wrapY?H(t.y,this._wrapY):t.y);return e.z=t.z,e},_pxBoundsToTileRange:function(t){var e=this.getTileSize();return new f(t.min.unscaleBy(e).floor(),t.max.unscaleBy(e).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var t in this._tiles)if(!this._tiles[t].loaded)return!1;return!0}});var Ni=Ri.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(t,e){this._url=t,(e=c(this,e)).detectRetina&&b.retina&&0<e.maxZoom?(e.tileSize=Math.floor(e.tileSize/2),e.zoomReverse?(e.zoomOffset--,e.minZoom=Math.min(e.maxZoom,e.minZoom+1)):(e.zoomOffset++,e.maxZoom=Math.max(e.minZoom,e.maxZoom-1)),e.minZoom=Math.max(0,e.minZoom)):e.zoomReverse?e.minZoom=Math.min(e.maxZoom,e.minZoom):e.maxZoom=Math.max(e.minZoom,e.maxZoom),"string"==typeof e.subdomains&&(e.subdomains=e.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(t,e){return this._url===t&&void 0===e&&(e=!0),this._url=t,e||this.redraw(),this},createTile:function(t,e){var i=document.createElement("img");return S(i,"load",a(this._tileOnLoad,this,e,i)),S(i,"error",a(this._tileOnError,this,e,i)),!this.options.crossOrigin&&""!==this.options.crossOrigin||(i.crossOrigin=!0===this.options.crossOrigin?"":this.options.crossOrigin),"string"==typeof this.options.referrerPolicy&&(i.referrerPolicy=this.options.referrerPolicy),i.alt="",i.src=this.getTileUrl(t),i},getTileUrl:function(t){var e={r:b.retina?"@2x":"",s:this._getSubdomain(t),x:t.x,y:t.y,z:this._getZoomForUrl()};return this._map&&!this._map.options.crs.infinite&&(t=this._globalTileRange.max.y-t.y,this.options.tms&&(e.y=t),e["-y"]=t),q(this._url,l(e,this.options))},_tileOnLoad:function(t,e){b.ielt9?setTimeout(a(t,this,null,e),0):t(null,e)},_tileOnError:function(t,e,i){var n=this.options.errorTileUrl;n&&e.getAttribute("src")!==n&&(e.src=n),t(i,e)},_onTileRemove:function(t){t.tile.onload=null},_getZoomForUrl:function(){var t=this._tileZoom,e=this.options.maxZoom;return(t=this.options.zoomReverse?e-t:t)+this.options.zoomOffset},_getSubdomain:function(t){t=Math.abs(t.x+t.y)%this.options.subdomains.length;return this.options.subdomains[t]},_abortLoading:function(){var t,e,i;for(t in this._tiles)this._tiles[t].coords.z!==this._tileZoom&&((i=this._tiles[t].el).onload=u,i.onerror=u,i.complete||(i.src=K,e=this._tiles[t].coords,T(i),delete this._tiles[t],this.fire("tileabort",{tile:i,coords:e})))},_removeTile:function(t){var e=this._tiles[t];if(e)return e.el.setAttribute("src",K),Ri.prototype._removeTile.call(this,t)},_tileReady:function(t,e,i){if(this._map&&(!i||i.getAttribute("src")!==K))return Ri.prototype._tileReady.call(this,t,e,i)}});function Di(t,e){return new Ni(t,e)}var ji=Ni.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(t,e){this._url=t;var i,n=l({},this.defaultWmsParams);for(i in e)i in this.options||(n[i]=e[i]);var t=(e=c(this,e)).detectRetina&&b.retina?2:1,o=this.getTileSize();n.width=o.x*t,n.height=o.y*t,this.wmsParams=n},onAdd:function(t){this._crs=this.options.crs||t.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var e=1.3<=this._wmsVersion?"crs":"srs";this.wmsParams[e]=this._crs.code,Ni.prototype.onAdd.call(this,t)},getTileUrl:function(t){var e=this._tileCoordsToNwSe(t),i=this._crs,i=_(i.project(e[0]),i.project(e[1])),e=i.min,i=i.max,e=(1.3<=this._wmsVersion&&this._crs===hi?[e.y,e.x,i.y,i.x]:[e.x,e.y,i.x,i.y]).join(","),i=Ni.prototype.getTileUrl.call(this,t);return i+U(this.wmsParams,i,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+e},setParams:function(t,e){return l(this.wmsParams,t),e||this.redraw(),this}});Ni.WMS=ji,Di.wms=function(t,e){return new ji(t,e)};var Hi=o.extend({options:{padding:.1},initialize:function(t){c(this,t),h(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),this._zoomAnimated&&M(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var t={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(t.zoomanim=this._onAnimZoom),t},_onAnimZoom:function(t){this._updateTransform(t.center,t.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(t,e){var i=this._map.getZoomScale(e,this._zoom),n=this._map.getSize().multiplyBy(.5+this.options.padding),o=this._map.project(this._center,e),n=n.multiplyBy(-i).add(o).subtract(this._map._getNewPixelOrigin(t,e));b.any3d?be(this._container,n,i):Z(this._container,n)},_reset:function(){for(var t in this._update(),this._updateTransform(this._center,this._zoom),this._layers)this._layers[t]._reset()},_onZoomEnd:function(){for(var t in this._layers)this._layers[t]._project()},_updatePaths:function(){for(var t in this._layers)this._layers[t]._update()},_update:function(){var t=this.options.padding,e=this._map.getSize(),i=this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();this._bounds=new f(i,i.add(e.multiplyBy(1+2*t)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),Fi=Hi.extend({options:{tolerance:0},getEvents:function(){var t=Hi.prototype.getEvents.call(this);return t.viewprereset=this._onViewPreReset,t},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){Hi.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var t=this._container=document.createElement("canvas");S(t,"mousemove",this._onMouseMove,this),S(t,"click dblclick mousedown mouseup contextmenu",this._onClick,this),S(t,"mouseout",this._handleMouseOut,this),t._leaflet_disable_events=!0,this._ctx=t.getContext("2d")},_destroyContainer:function(){r(this._redrawRequest),delete this._ctx,T(this._container),k(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){for(var t in this._redrawBounds=null,this._layers)this._layers[t]._update();this._redraw()}},_update:function(){var t,e,i,n;this._map._animatingZoom&&this._bounds||(Hi.prototype._update.call(this),t=this._bounds,e=this._container,i=t.getSize(),n=b.retina?2:1,Z(e,t.min),e.width=n*i.x,e.height=n*i.y,e.style.width=i.x+"px",e.style.height=i.y+"px",b.retina&&this._ctx.scale(2,2),this._ctx.translate(-t.min.x,-t.min.y),this.fire("update"))},_reset:function(){Hi.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(t){this._updateDashArray(t);t=(this._layers[h(t)]=t)._order={layer:t,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=t),this._drawLast=t,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(t){this._requestRedraw(t)},_removePath:function(t){var e=t._order,i=e.next,e=e.prev;i?i.prev=e:this._drawLast=e,e?e.next=i:this._drawFirst=i,delete t._order,delete this._layers[h(t)],this._requestRedraw(t)},_updatePath:function(t){this._extendRedrawBounds(t),t._project(),t._update(),this._requestRedraw(t)},_updateStyle:function(t){this._updateDashArray(t),this._requestRedraw(t)},_updateDashArray:function(t){if("string"==typeof t.options.dashArray){for(var e,i=t.options.dashArray.split(/[, ]+/),n=[],o=0;o<i.length;o++){if(e=Number(i[o]),isNaN(e))return;n.push(e)}t.options._dashArray=n}else t.options._dashArray=t.options.dashArray},_requestRedraw:function(t){this._map&&(this._extendRedrawBounds(t),this._redrawRequest=this._redrawRequest||x(this._redraw,this))},_extendRedrawBounds:function(t){var e;t._pxBounds&&(e=(t.options.weight||0)+1,this._redrawBounds=this._redrawBounds||new f,this._redrawBounds.extend(t._pxBounds.min.subtract([e,e])),this._redrawBounds.extend(t._pxBounds.max.add([e,e])))},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var t,e=this._redrawBounds;e?(t=e.getSize(),this._ctx.clearRect(e.min.x,e.min.y,t.x,t.y)):(this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore())},_draw:function(){var t,e,i=this._redrawBounds;this._ctx.save(),i&&(e=i.getSize(),this._ctx.beginPath(),this._ctx.rect(i.min.x,i.min.y,e.x,e.y),this._ctx.clip()),this._drawing=!0;for(var n=this._drawFirst;n;n=n.next)t=n.layer,(!i||t._pxBounds&&t._pxBounds.intersects(i))&&t._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(t,e){if(this._drawing){var i,n,o,s,r=t._parts,a=r.length,h=this._ctx;if(a){for(h.beginPath(),i=0;i<a;i++){for(n=0,o=r[i].length;n<o;n++)s=r[i][n],h[n?"lineTo":"moveTo"](s.x,s.y);e&&h.closePath()}this._fillStroke(h,t)}}},_updateCircle:function(t){var e,i,n,o;this._drawing&&!t._empty()&&(e=t._point,i=this._ctx,n=Math.max(Math.round(t._radius),1),1!=(o=(Math.max(Math.round(t._radiusY),1)||n)/n)&&(i.save(),i.scale(1,o)),i.beginPath(),i.arc(e.x,e.y/o,n,0,2*Math.PI,!1),1!=o&&i.restore(),this._fillStroke(i,t))},_fillStroke:function(t,e){var i=e.options;i.fill&&(t.globalAlpha=i.fillOpacity,t.fillStyle=i.fillColor||i.color,t.fill(i.fillRule||"evenodd")),i.stroke&&0!==i.weight&&(t.setLineDash&&t.setLineDash(e.options&&e.options._dashArray||[]),t.globalAlpha=i.opacity,t.lineWidth=i.weight,t.strokeStyle=i.color,t.lineCap=i.lineCap,t.lineJoin=i.lineJoin,t.stroke())},_onClick:function(t){for(var e,i,n=this._map.mouseEventToLayerPoint(t),o=this._drawFirst;o;o=o.next)(e=o.layer).options.interactive&&e._containsPoint(n)&&(("click"===t.type||"preclick"===t.type)&&this._map._draggableMoved(e)||(i=e));this._fireEvent(!!i&&[i],t)},_onMouseMove:function(t){var e;!this._map||this._map.dragging.moving()||this._map._animatingZoom||(e=this._map.mouseEventToLayerPoint(t),this._handleMouseHover(t,e))},_handleMouseOut:function(t){var e=this._hoveredLayer;e&&(z(this._container,"leaflet-interactive"),this._fireEvent([e],t,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(t,e){if(!this._mouseHoverThrottled){for(var i,n,o=this._drawFirst;o;o=o.next)(i=o.layer).options.interactive&&i._containsPoint(e)&&(n=i);n!==this._hoveredLayer&&(this._handleMouseOut(t),n&&(M(this._container,"leaflet-interactive"),this._fireEvent([n],t,"mouseover"),this._hoveredLayer=n)),this._fireEvent(!!this._hoveredLayer&&[this._hoveredLayer],t),this._mouseHoverThrottled=!0,setTimeout(a(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(t,e,i){this._map._fireDOMEvent(e,i||e.type,t)},_bringToFront:function(t){var e,i,n=t._order;n&&(e=n.next,i=n.prev,e&&((e.prev=i)?i.next=e:e&&(this._drawFirst=e),n.prev=this._drawLast,(this._drawLast.next=n).next=null,this._drawLast=n,this._requestRedraw(t)))},_bringToBack:function(t){var e,i,n=t._order;n&&(e=n.next,(i=n.prev)&&((i.next=e)?e.prev=i:i&&(this._drawLast=i),n.prev=null,n.next=this._drawFirst,this._drawFirst.prev=n,this._drawFirst=n,this._requestRedraw(t)))}});function Wi(t){return b.canvas?new Fi(t):null}var Ui=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(t){return document.createElement("<lvml:"+t+' class="lvml">')}}catch(t){}return function(t){return document.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}(),zt={_initContainer:function(){this._container=P("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(Hi.prototype._update.call(this),this.fire("update"))},_initPath:function(t){var e=t._container=Ui("shape");M(e,"leaflet-vml-shape "+(this.options.className||"")),e.coordsize="1 1",t._path=Ui("path"),e.appendChild(t._path),this._updateStyle(t),this._layers[h(t)]=t},_addPath:function(t){var e=t._container;this._container.appendChild(e),t.options.interactive&&t.addInteractiveTarget(e)},_removePath:function(t){var e=t._container;T(e),t.removeInteractiveTarget(e),delete this._layers[h(t)]},_updateStyle:function(t){var e=t._stroke,i=t._fill,n=t.options,o=t._container;o.stroked=!!n.stroke,o.filled=!!n.fill,n.stroke?(e=e||(t._stroke=Ui("stroke")),o.appendChild(e),e.weight=n.weight+"px",e.color=n.color,e.opacity=n.opacity,n.dashArray?e.dashStyle=d(n.dashArray)?n.dashArray.join(" "):n.dashArray.replace(/( *, *)/g," "):e.dashStyle="",e.endcap=n.lineCap.replace("butt","flat"),e.joinstyle=n.lineJoin):e&&(o.removeChild(e),t._stroke=null),n.fill?(i=i||(t._fill=Ui("fill")),o.appendChild(i),i.color=n.fillColor||n.color,i.opacity=n.fillOpacity):i&&(o.removeChild(i),t._fill=null)},_updateCircle:function(t){var e=t._point.round(),i=Math.round(t._radius),n=Math.round(t._radiusY||i);this._setPath(t,t._empty()?"M0 0":"AL "+e.x+","+e.y+" "+i+","+n+" 0,23592600")},_setPath:function(t,e){t._path.v=e},_bringToFront:function(t){fe(t._container)},_bringToBack:function(t){ge(t._container)}},Vi=b.vml?Ui:ct,qi=Hi.extend({_initContainer:function(){this._container=Vi("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=Vi("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){T(this._container),k(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){var t,e,i;this._map._animatingZoom&&this._bounds||(Hi.prototype._update.call(this),e=(t=this._bounds).getSize(),i=this._container,this._svgSize&&this._svgSize.equals(e)||(this._svgSize=e,i.setAttribute("width",e.x),i.setAttribute("height",e.y)),Z(i,t.min),i.setAttribute("viewBox",[t.min.x,t.min.y,e.x,e.y].join(" ")),this.fire("update"))},_initPath:function(t){var e=t._path=Vi("path");t.options.className&&M(e,t.options.className),t.options.interactive&&M(e,"leaflet-interactive"),this._updateStyle(t),this._layers[h(t)]=t},_addPath:function(t){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(t._path),t.addInteractiveTarget(t._path)},_removePath:function(t){T(t._path),t.removeInteractiveTarget(t._path),delete this._layers[h(t)]},_updatePath:function(t){t._project(),t._update()},_updateStyle:function(t){var e=t._path,t=t.options;e&&(t.stroke?(e.setAttribute("stroke",t.color),e.setAttribute("stroke-opacity",t.opacity),e.setAttribute("stroke-width",t.weight),e.setAttribute("stroke-linecap",t.lineCap),e.setAttribute("stroke-linejoin",t.lineJoin),t.dashArray?e.setAttribute("stroke-dasharray",t.dashArray):e.removeAttribute("stroke-dasharray"),t.dashOffset?e.setAttribute("stroke-dashoffset",t.dashOffset):e.removeAttribute("stroke-dashoffset")):e.setAttribute("stroke","none"),t.fill?(e.setAttribute("fill",t.fillColor||t.color),e.setAttribute("fill-opacity",t.fillOpacity),e.setAttribute("fill-rule",t.fillRule||"evenodd")):e.setAttribute("fill","none"))},_updatePoly:function(t,e){this._setPath(t,dt(t._parts,e))},_updateCircle:function(t){var e=t._point,i=Math.max(Math.round(t._radius),1),n="a"+i+","+(Math.max(Math.round(t._radiusY),1)||i)+" 0 1,0 ",e=t._empty()?"M0 0":"M"+(e.x-i)+","+e.y+n+2*i+",0 "+n+2*-i+",0 ";this._setPath(t,e)},_setPath:function(t,e){t._path.setAttribute("d",e)},_bringToFront:function(t){fe(t._path)},_bringToBack:function(t){ge(t._path)}});function Gi(t){return b.svg||b.vml?new qi(t):null}b.vml&&qi.include(zt),B.include({getRenderer:function(t){t=(t=t.options.renderer||this._getPaneRenderer(t.options.pane)||this.options.renderer||this._renderer)||(this._renderer=this._createRenderer());return this.hasLayer(t)||this.addLayer(t),t},_getPaneRenderer:function(t){var e;return"overlayPane"!==t&&void 0!==t&&(void 0===(e=this._paneRenderers[t])&&(e=this._createRenderer({pane:t}),this._paneRenderers[t]=e),e)},_createRenderer:function(t){return this.options.preferCanvas&&Wi(t)||Gi(t)}});var Ki=yi.extend({initialize:function(t,e){yi.prototype.initialize.call(this,this._boundsToLatLngs(t),e)},setBounds:function(t){return this.setLatLngs(this._boundsToLatLngs(t))},_boundsToLatLngs:function(t){return[(t=g(t)).getSouthWest(),t.getNorthWest(),t.getNorthEast(),t.getSouthEast()]}});qi.create=Vi,qi.pointsToPath=dt,xi.geometryToLayer=wi,xi.coordsToLatLng=Pi,xi.coordsToLatLngs=Li,xi.latLngToCoords=Ti,xi.latLngsToCoords=Mi,xi.getFeature=zi,xi.asFeature=Ci,B.mergeOptions({boxZoom:!0});var _t=n.extend({initialize:function(t){this._map=t,this._container=t._container,this._pane=t._panes.overlayPane,this._resetStateTimeout=0,t.on("unload",this._destroy,this)},addHooks:function(){S(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){k(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){T(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){0!==this._resetStateTimeout&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(t){if(!t.shiftKey||1!==t.which&&1!==t.button)return!1;this._clearDeferredResetState(),this._resetState(),re(),Le(),this._startPoint=this._map.mouseEventToContainerPoint(t),S(document,{contextmenu:Re,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(t){this._moved||(this._moved=!0,this._box=P("div","leaflet-zoom-box",this._container),M(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(t);var t=new f(this._point,this._startPoint),e=t.getSize();Z(this._box,t.min),this._box.style.width=e.x+"px",this._box.style.height=e.y+"px"},_finish:function(){this._moved&&(T(this._box),z(this._container,"leaflet-crosshair")),ae(),Te(),k(document,{contextmenu:Re,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(t){1!==t.which&&1!==t.button||(this._finish(),this._moved&&(this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(a(this._resetState,this),0),t=new s(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point)),this._map.fitBounds(t).fire("boxzoomend",{boxZoomBounds:t})))},_onKeyDown:function(t){27===t.keyCode&&(this._finish(),this._clearDeferredResetState(),this._resetState())}}),Ct=(B.addInitHook("addHandler","boxZoom",_t),B.mergeOptions({doubleClickZoom:!0}),n.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(t){var e=this._map,i=e.getZoom(),n=e.options.zoomDelta,i=t.originalEvent.shiftKey?i-n:i+n;"center"===e.options.doubleClickZoom?e.setZoom(i):e.setZoomAround(t.containerPoint,i)}})),Zt=(B.addInitHook("addHandler","doubleClickZoom",Ct),B.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0}),n.extend({addHooks:function(){var t;this._draggable||(t=this._map,this._draggable=new Je(t._mapPane,t._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),t.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),t.on("zoomend",this._onZoomEnd,this),t.whenReady(this._onZoomEnd,this))),M(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){z(this._map._container,"leaflet-grab"),z(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var t,e=this._map;e._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity?(t=g(this._map.options.maxBounds),this._offsetLimit=_(this._map.latLngToContainerPoint(t.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(t.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))):this._offsetLimit=null,e.fire("movestart").fire("dragstart"),e.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(t){var e,i;this._map.options.inertia&&(e=this._lastTime=+new Date,i=this._lastPos=this._draggable._absPos||this._draggable._newPos,this._positions.push(i),this._times.push(e),this._prunePositions(e)),this._map.fire("move",t).fire("drag",t)},_prunePositions:function(t){for(;1<this._positions.length&&50<t-this._times[0];)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var t=this._map.getSize().divideBy(2),e=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=e.subtract(t).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(t,e){return t-(t-e)*this._viscosity},_onPreDragLimit:function(){var t,e;this._viscosity&&this._offsetLimit&&(t=this._draggable._newPos.subtract(this._draggable._startPos),e=this._offsetLimit,t.x<e.min.x&&(t.x=this._viscousLimit(t.x,e.min.x)),t.y<e.min.y&&(t.y=this._viscousLimit(t.y,e.min.y)),t.x>e.max.x&&(t.x=this._viscousLimit(t.x,e.max.x)),t.y>e.max.y&&(t.y=this._viscousLimit(t.y,e.max.y)),this._draggable._newPos=this._draggable._startPos.add(t))},_onPreDragWrap:function(){var t=this._worldWidth,e=Math.round(t/2),i=this._initialWorldOffset,n=this._draggable._newPos.x,o=(n-e+i)%t+e-i,n=(n+e+i)%t-e-i,t=Math.abs(o+i)<Math.abs(n+i)?o:n;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=t},_onDragEnd:function(t){var e,i,n,o,s=this._map,r=s.options,a=!r.inertia||t.noInertia||this._times.length<2;s.fire("dragend",t),!a&&(this._prunePositions(+new Date),t=this._lastPos.subtract(this._positions[0]),a=(this._lastTime-this._times[0])/1e3,e=r.easeLinearity,a=(t=t.multiplyBy(e/a)).distanceTo([0,0]),i=Math.min(r.inertiaMaxSpeed,a),t=t.multiplyBy(i/a),n=i/(r.inertiaDeceleration*e),(o=t.multiplyBy(-n/2).round()).x||o.y)?(o=s._limitOffset(o,s.options.maxBounds),x(function(){s.panBy(o,{duration:n,easeLinearity:e,noMoveStart:!0,animate:!0})})):s.fire("moveend")}})),St=(B.addInitHook("addHandler","dragging",Zt),B.mergeOptions({keyboard:!0,keyboardPanDelta:80}),n.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(t){this._map=t,this._setPanDelta(t.options.keyboardPanDelta),this._setZoomDelta(t.options.zoomDelta)},addHooks:function(){var t=this._map._container;t.tabIndex<=0&&(t.tabIndex="0"),S(t,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),k(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){var t,e,i;this._focused||(i=document.body,t=document.documentElement,e=i.scrollTop||t.scrollTop,i=i.scrollLeft||t.scrollLeft,this._map._container.focus(),window.scrollTo(i,e))},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(t){for(var e=this._panKeys={},i=this.keyCodes,n=0,o=i.left.length;n<o;n++)e[i.left[n]]=[-1*t,0];for(n=0,o=i.right.length;n<o;n++)e[i.right[n]]=[t,0];for(n=0,o=i.down.length;n<o;n++)e[i.down[n]]=[0,t];for(n=0,o=i.up.length;n<o;n++)e[i.up[n]]=[0,-1*t]},_setZoomDelta:function(t){for(var e=this._zoomKeys={},i=this.keyCodes,n=0,o=i.zoomIn.length;n<o;n++)e[i.zoomIn[n]]=t;for(n=0,o=i.zoomOut.length;n<o;n++)e[i.zoomOut[n]]=-t},_addHooks:function(){S(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){k(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(t){if(!(t.altKey||t.ctrlKey||t.metaKey)){var e,i=t.keyCode,n=this._map;if(i in this._panKeys)n._panAnim&&n._panAnim._inProgress||(e=this._panKeys[i],t.shiftKey&&(e=m(e).multiplyBy(3)),n.panBy(e),n.options.maxBounds&&n.panInsideBounds(n.options.maxBounds));else if(i in this._zoomKeys)n.setZoom(n.getZoom()+(t.shiftKey?3:1)*this._zoomKeys[i]);else{if(27!==i||!n._popup||!n._popup.options.closeOnEscapeKey)return;n.closePopup()}Re(t)}}})),Et=(B.addInitHook("addHandler","keyboard",St),B.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60}),n.extend({addHooks:function(){S(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){k(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(t){var e=He(t),i=this._map.options.wheelDebounceTime,e=(this._delta+=e,this._lastMousePos=this._map.mouseEventToContainerPoint(t),this._startTime||(this._startTime=+new Date),Math.max(i-(+new Date-this._startTime),0));clearTimeout(this._timer),this._timer=setTimeout(a(this._performZoom,this),e),Re(t)},_performZoom:function(){var t=this._map,e=t.getZoom(),i=this._map.options.zoomSnap||0,n=(t._stop(),this._delta/(4*this._map.options.wheelPxPerZoomLevel)),n=4*Math.log(2/(1+Math.exp(-Math.abs(n))))/Math.LN2,i=i?Math.ceil(n/i)*i:n,n=t._limitZoom(e+(0<this._delta?i:-i))-e;this._delta=0,this._startTime=null,n&&("center"===t.options.scrollWheelZoom?t.setZoom(e+n):t.setZoomAround(this._lastMousePos,e+n))}})),kt=(B.addInitHook("addHandler","scrollWheelZoom",Et),B.mergeOptions({tapHold:b.touchNative&&b.safari&&b.mobile,tapTolerance:15}),n.extend({addHooks:function(){S(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){k(this._map._container,"touchstart",this._onDown,this)},_onDown:function(t){var e;clearTimeout(this._holdTimeout),1===t.touches.length&&(e=t.touches[0],this._startPos=this._newPos=new p(e.clientX,e.clientY),this._holdTimeout=setTimeout(a(function(){this._cancel(),this._isTapValid()&&(S(document,"touchend",A),S(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",e))},this),600),S(document,"touchend touchcancel contextmenu",this._cancel,this),S(document,"touchmove",this._onMove,this))},_cancelClickPrevent:function t(){k(document,"touchend",A),k(document,"touchend touchcancel",t)},_cancel:function(){clearTimeout(this._holdTimeout),k(document,"touchend touchcancel contextmenu",this._cancel,this),k(document,"touchmove",this._onMove,this)},_onMove:function(t){t=t.touches[0];this._newPos=new p(t.clientX,t.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(t,e){t=new MouseEvent(t,{bubbles:!0,cancelable:!0,view:window,screenX:e.screenX,screenY:e.screenY,clientX:e.clientX,clientY:e.clientY});t._simulated=!0,e.target.dispatchEvent(t)}})),At=(B.addInitHook("addHandler","tapHold",kt),B.mergeOptions({touchZoom:b.touch,bounceAtZoomLimits:!0}),n.extend({addHooks:function(){M(this._map._container,"leaflet-touch-zoom"),S(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){z(this._map._container,"leaflet-touch-zoom"),k(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(t){var e,i,n=this._map;!t.touches||2!==t.touches.length||n._animatingZoom||this._zooming||(e=n.mouseEventToContainerPoint(t.touches[0]),i=n.mouseEventToContainerPoint(t.touches[1]),this._centerPoint=n.getSize()._divideBy(2),this._startLatLng=n.containerPointToLatLng(this._centerPoint),"center"!==n.options.touchZoom&&(this._pinchStartLatLng=n.containerPointToLatLng(e.add(i)._divideBy(2))),this._startDist=e.distanceTo(i),this._startZoom=n.getZoom(),this._moved=!1,this._zooming=!0,n._stop(),S(document,"touchmove",this._onTouchMove,this),S(document,"touchend touchcancel",this._onTouchEnd,this),A(t))},_onTouchMove:function(t){if(t.touches&&2===t.touches.length&&this._zooming){var e=this._map,i=e.mouseEventToContainerPoint(t.touches[0]),n=e.mouseEventToContainerPoint(t.touches[1]),o=i.distanceTo(n)/this._startDist;if(this._zoom=e.getScaleZoom(o,this._startZoom),!e.options.bounceAtZoomLimits&&(this._zoom<e.getMinZoom()&&o<1||this._zoom>e.getMaxZoom()&&1<o)&&(this._zoom=e._limitZoom(this._zoom)),"center"===e.options.touchZoom){if(this._center=this._startLatLng,1==o)return}else{i=i._add(n)._divideBy(2)._subtract(this._centerPoint);if(1==o&&0===i.x&&0===i.y)return;this._center=e.unproject(e.project(this._pinchStartLatLng,this._zoom).subtract(i),this._zoom)}this._moved||(e._moveStart(!0,!1),this._moved=!0),r(this._animRequest);n=a(e._move,e,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=x(n,this,!0),A(t)}},_onTouchEnd:function(){this._moved&&this._zooming?(this._zooming=!1,r(this._animRequest),k(document,"touchmove",this._onTouchMove,this),k(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))):this._zooming=!1}})),Yi=(B.addInitHook("addHandler","touchZoom",At),B.BoxZoom=_t,B.DoubleClickZoom=Ct,B.Drag=Zt,B.Keyboard=St,B.ScrollWheelZoom=Et,B.TapHold=kt,B.TouchZoom=At,t.Bounds=f,t.Browser=b,t.CRS=ot,t.Canvas=Fi,t.Circle=gi,t.CircleMarker=fi,t.Class=et,t.Control=O,t.DivIcon=Ii,t.DivOverlay=Ai,t.DomEvent=mt,t.DomUtil=pt,t.Draggable=Je,t.Evented=it,t.FeatureGroup=ui,t.GeoJSON=xi,t.GridLayer=Ri,t.Handler=n,t.Icon=ci,t.ImageOverlay=Si,t.LatLng=v,t.LatLngBounds=s,t.Layer=o,t.LayerGroup=li,t.LineUtil=gt,t.Map=B,t.Marker=pi,t.Mixin=ft,t.Path=mi,t.Point=p,t.PolyUtil=vt,t.Polygon=yi,t.Polyline=vi,t.Popup=Bi,t.PosAnimation=We,t.Projection=wt,t.Rectangle=Ki,t.Renderer=Hi,t.SVG=qi,t.SVGOverlay=ki,t.TileLayer=Ni,t.Tooltip=Oi,t.Transformation=at,t.Util=tt,t.VideoOverlay=Ei,t.bind=a,t.bounds=_,t.canvas=Wi,t.circle=function(t,e,i){return new gi(t,e,i)},t.circleMarker=function(t,e){return new fi(t,e)},t.control=Ue,t.divIcon=function(t){return new Ii(t)},t.extend=l,t.featureGroup=function(t,e){return new ui(t,e)},t.geoJSON=Zi,t.geoJson=Mt,t.gridLayer=function(t){return new Ri(t)},t.icon=function(t){return new ci(t)},t.imageOverlay=function(t,e,i){return new Si(t,e,i)},t.latLng=w,t.latLngBounds=g,t.layerGroup=function(t,e){return new li(t,e)},t.map=function(t,e){return new B(t,e)},t.marker=function(t,e){return new pi(t,e)},t.point=m,t.polygon=function(t,e){return new yi(t,e)},t.polyline=function(t,e){return new vi(t,e)},t.popup=function(t,e){return new Bi(t,e)},t.rectangle=function(t,e){return new Ki(t,e)},t.setOptions=c,t.stamp=h,t.svg=Gi,t.svgOverlay=function(t,e,i){return new ki(t,e,i)},t.tileLayer=Di,t.tooltip=function(t,e){return new Oi(t,e)},t.transformation=ht,t.version="1.9.2+7519.6b90c169",t.videoOverlay=function(t,e,i){return new Ei(t,e,i)},window.L);t.noConflict=function(){return window.L=Yi,this},window.L=t});

(function($, Drupal, drupalSettings) {

  Drupal.behaviors.leaflet = {
    attach: function(context, settings) {

      // For each Leaflet Map/id defined process with Leaflet Map and Features
      // generation.
      $.each(settings.leaflet, function(m, data) {

        // Ensure the Leaflet Behavior is attached only once to each Leaflet map
        // id element.
        // @see https://www.drupal.org/project/leaflet/issues/3314762#comment-15044223
        const leaflet_elements = $(once('behaviour-leaflet', '#' + data['mapid']));
        leaflet_elements.each(function () {
          let map_container = $(this);
          let mapid = data['mapid'];

          // Function to load the Leaflet Map, based on the provided mapid.
          function loadMap(mapid) {
            // Process a new Leaflet Map only if the map container is empty.
            // Avoid reprocessing a Leaflet Map already initialised.
            if (map_container.data('leaflet') === undefined) {
              map_container.data('leaflet', new Drupal.Leaflet(L.DomUtil.get(mapid), mapid, data.map));
              if (data.features.length > 0) {
                // Add Leaflet Map Features.
                map_container.data('leaflet').add_features(data.features, true);
              }

              // Add the Leaflet map to data settings object to make it accessible.
              // @NOTE: This is used by the Leaflet Widget module.
              data.lMap = map_container.data('leaflet').lMap;

              // Add the Leaflet Map Markers to data settings object to make it accessible.
              data.markers = map_container.data('leaflet').markers;

              // Set initial Map position to wrap its defined bounds.
              map_container.data('leaflet').fitBounds();

              // Set the start center and the start zoom.
              if (!map_container.data('leaflet').start_center && !map_container.data('leaflet').start_zoom) {
                map_container.data('leaflet').start_center = map_container.data('leaflet').lMap.getCenter();
                map_container.data('leaflet').start_zoom = map_container.data('leaflet').lMap.getZoom();
              }

              // Define the global Drupal.Leaflet[mapid] object to be accessible
              // from outside - NOTE: This should always be created after setting
              // the (above) start center.
              Drupal.Leaflet[mapid] = map_container.data('leaflet');

              // Add the Map Geocoder Control if requested.
              if (!Drupal.Leaflet[mapid].geocoder_control && Drupal.Leaflet.prototype.map_geocoder_control) {
                let mapGeocoderControlDiv = document.createElement('div');
                Drupal.Leaflet[mapid].geocoder_control = Drupal.Leaflet.prototype.map_geocoder_control(mapGeocoderControlDiv, mapid);
                Drupal.Leaflet[mapid].geocoder_control.addTo(Drupal.Leaflet[mapid].lMap)
                let geocoder_settings = drupalSettings.leaflet[mapid].map.settings.geocoder.settings;
                Drupal.Leaflet.prototype.map_geocoder_control.autocomplete(mapid, geocoder_settings);
              }

              // Add the Layers Control, if initialised/existing.
              if (Drupal.Leaflet[mapid].layer_control) {
                Drupal.Leaflet[mapid].lMap.addControl(Drupal.Leaflet[mapid].layer_control);
              }

              // Add and Initialise the Map Reset View Control if requested.
              if (!Drupal.Leaflet[mapid].reset_view_control && map_container.data('leaflet').map_settings.reset_map && map_container.data('leaflet').map_settings.reset_map.control) {
                let map_reset_view_options = map_container.data('leaflet').map_settings.reset_map.options ? JSON.parse(map_container.data('leaflet').map_settings.reset_map.options) : {};
                map_reset_view_options.latlng = map_container.data('leaflet').start_center;
                map_reset_view_options.zoom = map_container.data('leaflet').start_zoom;
                Drupal.Leaflet[mapid].reset_view_control = L.control.resetView(map_reset_view_options).addTo(map_container.data('leaflet').lMap);
              }

              // Add and Initialise the Map Scale Control if requested.
              if (!Drupal.Leaflet[mapid].map_scale_control && map_container.data('leaflet').map_settings.map_scale && map_container.data('leaflet').map_settings.map_scale.control) {
                const map_scale_options = map_container.data('leaflet').map_settings.map_scale.options ? JSON.parse(map_container.data('leaflet').map_settings.map_scale.options) : {};
                Drupal.Leaflet[mapid].map_scale_control = L.control.scale(map_scale_options).addTo(map_container.data('leaflet').lMap);
              }

              // Add the Locate Control if requested.
              if (!Drupal.Leaflet[mapid].locate_control && map_container.data('leaflet').map_settings.locate && map_container.data('leaflet').map_settings.locate.control) {
                let locate_options = map_container.data('leaflet').map_settings.locate.options ? JSON.parse(map_container.data('leaflet').map_settings.locate.options) : {};
                Drupal.Leaflet[mapid].locate_control = L.control.locate(locate_options).addTo(map_container.data('leaflet').lMap);

                // In case this Leaflet Map is not in a Widget Context, eventually perform the Automatic User Locate, if requested.
                if (!data.hasOwnProperty('leaflet_widget') && map_container.data('leaflet').map_settings.hasOwnProperty('locate') && map_container.data('leaflet').map_settings.locate.automatic) {
                  Drupal.Leaflet[mapid].locate_control.start();
                }
              }

              // Add Fullscreen Control, if requested.
              if (!Drupal.Leaflet[mapid].fullscreen_control && map_container.data('leaflet').map_settings.fullscreen && map_container.data('leaflet').map_settings.fullscreen.control) {
                let map_fullscreen_options = map_container.data('leaflet').map_settings.fullscreen.options ? JSON.parse(map_container.data('leaflet').map_settings.fullscreen.options) : {};
                Drupal.Leaflet[mapid].fullscreen_control = L.control.fullscreen(
                  map_fullscreen_options
                ).addTo(map_container.data('leaflet').lMap);
              }

              // Attach Leaflet Map listeners On Popup Open.
              data.lMap.on('popupopen', function (e) {

                // On leaflet-ajax-popup selector, fetch and set Ajax content.
                let element = e.popup._contentNode;
                let content = $('*[data-leaflet-ajax-popup]', element);
                if (content.length) {
                  let url = content.data('leaflet-ajax-popup');
                  Drupal.ajax({url: url}).execute().done(function (data) {

                    // Copy the html we received via AJAX to the popup, so we won't
                    // have to make another AJAX call (#see 3258780).
                    e.popup.setContent(data[0].data);

                    // Attach drupal behaviors on new content.
                    Drupal.attachBehaviors(element, drupalSettings);
                  }).
                    // In case of failing fetching data.
                    fail(function () {
                      e.popup.close();
                    });
                }

                // Make the (eventually present) Tooltip disappear on Popup Open
                // in case the Popup is generated from a _source.
                if (e.popup._source) {
                  let tooltip = e.popup._source.getTooltip();
                  // not all features will have tooltips!
                  if (tooltip) {
                    // use opacity to make the tooltip disappear.
                    e.popup._source.getTooltip().setOpacity(0);
                  }
                }
              });

              // Attach Leaflet Map listeners On Popup Close.
              data.lMap.on('popupclose', function (e) {
                // Make the (eventually present) Tooltip re-appear on Popup Close.
                // in case the Popup is generated from a _source.
                if (e.popup._source) {
                  let tooltip = e.popup._source.getTooltip();
                  if (tooltip) tooltip.setOpacity(0.9);
                }
              });

              // NOTE: don't change this trigger arguments print, for back porting
              // compatibility.
              $(document).trigger('leafletMapInit', [data.map, data.lMap, mapid, data.markers]);
              // (Keep also the pre-existing event for back port compatibility)
              $(document).trigger('leaflet.map', [data.map, data.lMap, mapid, data.markers]);
            }
          }

          // If the IntersectionObserver API is available, create an observer to load the map when it enters the viewport
          // It will be used to handle map loading instead of displaying the map on page load.
          let mapObserver = null;
          if ('IntersectionObserver' in window){
            mapObserver = new IntersectionObserver(function (entries, observer) {
              for(var i = 0; i < entries.length; i++) {
                if(entries[i].isIntersecting){
                  const mapid = entries[i].target.id;
                  loadMap(mapid);
                }
              }
            });
          }

          // Load the Leaflet Map, lazy based on the mapObserver, or not.
          if (mapObserver && data.map.settings['map_lazy_load'] && data.map.settings['map_lazy_load']['lazy_load']) {
            mapObserver.observe(this)
          } else {
            loadMap(mapid);
          }

        });
      });
    }
  };

  /**
   * Define a main Drupal.Leaflet function being generated/triggered on each
   * Leaflet Map map_container element load.
   *
   * @param map_container
   *   The Leaflet Map map_container.
   * @param mapid
   *   The Leaflet Map id.
   * @param map_definition
   *   The Leaflet Map definition.
   * @constructor
   */
  Drupal.Leaflet = function(map_container, mapid, map_definition) {
    this.mapid = mapid;
    this.map_container = map_container;
    this.map_definition = map_definition;
    this.map_settings = this.map_definition.settings;
    this.bounds = [];
    this.base_layers = {};
    this.overlays = {};
    this.lMap = null;
    this.start_center = null;
    this.start_zoom = null;
    this.layer_control = null;
    this.markers = {};
    this.features = {};
    this.initialise(mapid);
  };

  /**
   * Initialise the specific Leaflet Map
   *
   * @param mapid
   *   The dom element #id to inject the Leaflet Map into.
   */
  Drupal.Leaflet.prototype.initialise = function(mapid) {
    // Instantiate a new Leaflet map.
    this.lMap = new L.Map(mapid, this.map_settings);

    // Add map layers (base and overlay layers).
    let i = 0;
    for (let key in this.map_definition.layers) {
      let layer = this.map_definition.layers[key];
      // Distinguish between "base" and "overlay" layers.
      // Default to "base" in case "layer_type" has not been defined in hook_leaflet_map_info().
      layer.layer_type = (typeof layer.layer_type === 'undefined') ? 'base' : layer.layer_type;

      switch (layer.layer_type) {
        case 'overlay':
          let overlay_layer = this.create_layer(layer, key);
          let layer_hidden = (typeof layer.layer_hidden === "undefined") ? false : layer.layer_hidden;
          this.add_overlay(key, overlay_layer, layer_hidden);
          break;

        default:
          this.add_base_layer(key, layer, i);
          // Only the first base layer needs to be added to the map - all the
          // others are accessed via the layer switcher.
          if (i === 0) {
            i++;
          }
          break;
      }
      i++;
    }

    // Set initial view, fallback to displaying the whole world.
    if (this.map_settings.center && this.map_settings.zoom) {
      this.lMap.setView(new L.LatLng(this.map_settings.center.lat, this.map_settings.center.lon), this.map_settings.zoom);
    }
    else {
      this.lMap.fitWorld();
    }

    // Set the position of the Zoom Control.
    this.lMap.zoomControl.setPosition(this.map_settings.zoomControlPosition);

    // Set to refresh when first in viewport to avoid missing visibility.
    new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
          this.lMap.invalidateSize();
          observer.disconnect();
        }
      });
    }).observe(this.lMap._container);

  };

  /**
   * Initialise the Leaflet Map Layers (Overlays) Control
   */
  Drupal.Leaflet.prototype.initialise_layers_control = function() {
    let count_layers = function(obj) {
      // Browser compatibility: Chrome, IE 9+, FF 4+, or Safari 5+.
      // @see http://kangax.github.com/es5-compat-table/
      return Object.keys(obj).length;
    };

    // Only add a layer switcher if it is enabled in settings, and we have
    // at least two base layers or at least one overlay.
    if (this.layer_control == null && ((this.map_settings.layerControl && count_layers(this.base_layers) > 1 || count_layers(this.overlays) > 0))) {
      const base_layers = count_layers(this.base_layers) > 1 ? this.base_layers : [];
      // Instantiate layer control, using settings.layerControl as settings.
      this.layer_control = new L.Control.Layers(base_layers, [], this.map_settings.layerControlOptions);
    }
  };

  /**
   * Create & Add a Base Layer to the Leaflet Map and Layers Control.
   *
   * @param key
   *   The Layer index/label.
   * @param definition
   *   The Layer definition,
   * @param i
   *   The layers progressive counter.
   */
  Drupal.Leaflet.prototype.add_base_layer = function(key, definition, i) {
    let base_layer = this.create_layer(definition, key);
    this.base_layers[key] = base_layer;

    // Only the first base layer needs to be added to the map - all the others are accessed via the layer switcher.
    if (i === 0) {
      this.lMap.addLayer(base_layer);
    }

    // Initialise the Layers Control, if not yet.
    if (this.layer_control == null) {
      this.initialise_layers_control();
    } else {
      // Add the new base layer to layer_control.
      this.layer_control.addBaseLayer(base_layer, key);
    }
  };

  /**
   * Adds a Specific Layer and related Overlay to the Leaflet Map.
   *
   * @param {string} label
   *   The Overlay Layer Label.
   * @param layer
   *   The Leaflet Overlay.
   * @param {bool} disabled_layer
   *   The flag to disable the Layer from the Over Layers Control.
   */
  Drupal.Leaflet.prototype.add_overlay = function(label, layer, disabled_layer) {
    if (!disabled_layer) {
      this.lMap.addLayer(layer);
    }

    // Add the Overlay to the Drupal.Leaflet object.
    this.overlays[label] = layer;

    // Initialise the Layers Control, if it is not.
    if (label && this.layer_control == null) {
      this.initialise_layers_control();
    }

    // Add the Overlay to the Layer Control only if there is a Label.
    if (label && this.layer_control) {
      // If we already have a layer control, add the new overlay to it.
      this.layer_control.addOverlay(layer, label);
    }

  };

  /**
   *
   * Add Leaflet Features to the Leaflet Map.
   *
   * @param features
   *   Features List definition.
   *
   * @param initial
   *   Boolean to identify initial status.
   */
  Drupal.Leaflet.prototype.add_features = function(features, initial) {
    // Define Map Layers holder.
    let layers = {};

    for (let i = 0; i < features.length; i++) {
      let feature = features[i];
      let lFeature;

      // In case of a Features Group.
      if (feature.group) {
        // Define a named Layer Group
        layers[feature['group_label']] = this.create_feature_group();
        for (let groupKey in feature.features) {
          let groupFeature = feature.features[groupKey];
          lFeature = this.create_feature(groupFeature);
          if (lFeature !== undefined) {
            // Add the lFeature to the lGroup.
            layers[feature['group_label']].addLayer(lFeature);

            // Allow others to do something with the feature that was just added to the map.
            $(document).trigger('leaflet.feature', [lFeature, groupFeature, this, layers]);
          }
        }

        // Add the group to the layer switcher.
        this.add_overlay(feature.group_label, layers[feature['group_label']], feature['disabled']);
      }
      else {
        lFeature = this.create_feature(feature);
        if (lFeature !== undefined) {
          // Add the Leaflet Feature to the Map.
          this.lMap.addLayer(lFeature);

          // Allow others to do something with the feature that was just added to the map.
          $(document).trigger('leaflet.feature', [lFeature, feature, this]);
        }
      }
    }

    // Allow plugins to do things after features have been added.
    $(document).trigger('leaflet.features', [initial || false, this])
  };

  /**
   * Create a Leaflet Feature Group.
   *
   * @returns {*}
   */
  Drupal.Leaflet.prototype.create_feature_group = function() {
    return new L.featureGroup();
  };

  /**
   * Add Leaflet Popup to the Leaflet Feature.
   *
   * @param lFeature
   * @param lFeature
   *   The Leaflet Feature
   * @param feature
   *   The Feature coming from Drupal settings.
   */
  Drupal.Leaflet.prototype.feature_bind_popup = function(lFeature, feature) {
    if (feature.popup) {
      const popup_options = feature.popup.options ? JSON.parse(feature.popup.options) : {};
      lFeature.bindPopup(feature.popup.value, popup_options);
    }
  };

  /**
   * Add Leaflet Tooltip to the Leaflet Feature.
   * @param lFeature
   *   The Leaflet Feature
   * @param feature
   *   The Feature coming from Drupal settings.
   */
  Drupal.Leaflet.prototype.feature_bind_tooltip = function(lFeature, feature) {
    // Set the Leaflet Tooltip, with its options (if the stripped value is not null).
    if (feature.tooltip && feature.tooltip.value.replace(/(<([^>]+)>)/gi, "").trim().length > 0) {
      const tooltip_options = feature.tooltip.options ? JSON.parse(feature.tooltip.options) : {};
      lFeature.bindTooltip(feature.tooltip.value, tooltip_options);
    }
  };

  /**
   * Set Leaflet Feature path style.
   *
   * @param lFeature
   *   The Leaflet Feature
   * @param feature
   *   The Feature coming from Drupal settings.
   */
  Drupal.Leaflet.prototype.set_feature_path_style = function(lFeature, feature) {
    const lFeature_path_style = feature.path ? (feature.path instanceof Object ? feature.path : JSON.parse(feature.path)) : {};
    lFeature.setStyle(lFeature_path_style);
  };

  /**
   * Extend Map Bounds with new lFeature/feature.
   *
   * @param lFeature
   *   The Leaflet Feature
   * @param feature
   *   The Feature coming from Drupal settings.
   *   (this parameter should be kept to eventually extend this method with
   *   conditional logics on feature properties)
   */
  Drupal.Leaflet.prototype.extend_map_bounds = function(lFeature, feature) {
    if (feature.type === 'point') {
      this.bounds.push([feature.lat, feature.lon]);
    } else {
      this.bounds.push(lFeature.getBounds().getSouthWest(), lFeature.getBounds().getNorthEast());
    }
  };

  /**
   * Add Marker and Feature to the Drupal.Leaflet object.
   *
   * @param lFeature
   *   The Leaflet Feature
   * @param feature
   *   The Feature coming from Drupal settings.
   */
  Drupal.Leaflet.prototype.push_markers_features = function(lFeature, feature) {
    if (feature['entity_id']) {
      // Generate the markers object index based on entity id (and geofield
      // cardinality), and add the marker to the markers object.
      let entity_id = feature.entity_id;
      if (this.map_definition.geofield_cardinality && this.map_definition.geofield_cardinality !== 1) {
        let i = 0;
        while (this.markers[entity_id + '-' + i]) {
          i++;
        }
        this.markers[entity_id + '-' + i] = lFeature;
        this.features[entity_id + '-' + i] = feature;
      }
      else {
        this.markers[entity_id] = lFeature;
        this.features[entity_id] = feature;
      }
    }
  }

  /**
   * Generates a Leaflet Geometry (Point or Geometry)
   *
   * @param feature
   *   The feature definition coming from Drupal backend.
   * @param map_settings
   *   The map_settings if defined, false otherwise..
   *
   * @returns {*}
   *   The generated Leaflet Geometry.
   */
  Drupal.Leaflet.prototype.create_geometry = function(feature, map_settings = false) {
    let lFeature;
    switch (feature.type) {
      case 'point':
        lFeature = this.create_point(feature);
        break;

      case 'linestring':
        lFeature = this.create_linestring(feature, map_settings ? map_settings['leaflet_markercluster']['include_path'] : false);
        break;

      case 'polygon':
        lFeature = this.create_polygon(feature, map_settings ? map_settings['leaflet_markercluster']['include_path'] : false);
        break;

      case 'multipolygon':
        lFeature = this.create_multipolygon(feature, map_settings ? map_settings['leaflet_markercluster']['include_path'] : false);
        break;

      case 'multipolyline':
        lFeature = this.create_multipoly(feature, map_settings ? map_settings['leaflet_markercluster']['include_path'] : false);
        break;

      case 'json':
        lFeature = this.create_json(feature.json, feature.events);
        break;

      case 'multipoint':
      case 'geometrycollection':
        lFeature = this.create_collection(feature);
        break;

      default:
        lFeature = {};
    }
    return lFeature;
  }

  /**
   * Generates a Leaflet Feature (Point or Geometry)
   * with Leaflet adds on (Tooltip, Popup, Path Styles, etc.)
   *
   * @param feature
   *   The feature definition coming from Drupal backend.
   * @returns {*}
   *   The generated Leaflet Feature.
   */
  Drupal.Leaflet.prototype.create_feature = function(feature) {

    const map_settings = this.map_settings ?? NULL;
    let lFeature = this.create_geometry(feature, map_settings);

    // Eventually add Tooltip to the lFeature.
    this.feature_bind_tooltip(lFeature, feature);

    // Eventually add Popup to the lFeature.
    this.feature_bind_popup(lFeature, feature);

    // Eventually Set Style for Path/Geometry lFeature.
    if (lFeature.setStyle) {
      this.set_feature_path_style(lFeature, feature);
    }

    // Eventually extend Map Bounds with new lFeature.
    this.extend_map_bounds(lFeature, feature);

    // Add Marker and Feature to the Drupal.Leaflet object.
    this.push_markers_features(lFeature, feature);

    return lFeature;
  };

  /**
   * Generate a Leaflet Layer.
   *
   * @param layer
   *   The Layer definition.
   * @param key
   *   The Layer index/label.
   *
   * @returns {*}
   */
  Drupal.Leaflet.prototype.create_layer = function(layer, key) {
    let self = this;
    let map_layer = new L.TileLayer(layer.urlTemplate);
    if (layer.type === 'wms') {
      map_layer = new L.tileLayer.wms(layer.urlTemplate, layer.options);
    }
    map_layer._leaflet_id = key;

    if (layer.options) {
      for (let option in layer.options) {
        map_layer.options[option] = layer.options[option];
      }
    }

    // Layers served from TileStream need this correction in the y coordinates.
    // TODO: Need to explore this more and find a more elegant solution.
    if (layer.type === 'tilestream') {
      map_layer.getTileUrl = function(tilePoint) {
        self._adjustTilePoint(tilePoint);
        let zoom = self._getZoomForUrl();
        return L.Util.template(self._url, L.Util.extend({
          s: self._getSubdomain(tilePoint),
          z: zoom,
          x: tilePoint.x,
          y: Math.pow(2, zoom) - tilePoint.y - 1
        }, self.options));
      }
    }
    return map_layer;
  };

  /**
   * Leaflet Icon creator.
   *
   * @param options
   *   The Icon options.
   *
   * @returns {*}
   */
  Drupal.Leaflet.prototype.create_icon = function(options) {
    let icon_options = {
      iconUrl: options.iconUrl,
    };

    // Override applicable marker defaults.
    if (options.iconSize) {
      icon_options.iconSize = new L.Point(parseInt(options.iconSize.x), parseInt(options.iconSize.y));
    }
    if (options.iconAnchor && options.iconAnchor.x && options.iconAnchor.y) {
      icon_options.iconAnchor = new L.Point(parseInt(options.iconAnchor.x), parseInt(options.iconAnchor.y));
    }
    if (options.popupAnchor && options.popupAnchor.x && options.popupAnchor.y) {
      icon_options.popupAnchor = new L.Point(parseInt(options.popupAnchor.x), parseInt(options.popupAnchor.y));
    }
    if (options.shadowUrl) {
      icon_options.shadowUrl = options.shadowUrl;
    }
    if (options.iconRetinaUrl) {
      icon_options.iconRetinaUrl = options.iconRetinaUrl;
    }
    if (options.shadowSize && options.shadowSize.x && options.shadowSize.y) {
      icon_options.shadowSize = new L.Point(parseInt(options.shadowSize.x), parseInt(options.shadowSize.y));
    }
    if (options.shadowAnchor && options.shadowAnchor.x && options.shadowAnchor.y) {
      icon_options.shadowAnchor = new L.Point(parseInt(options.shadowAnchor.x), parseInt(options.shadowAnchor.y));
    }
    if (options.className) {
      icon_options.className = options.className;
    }

    return new L.Icon(icon_options);
  };

  /**
   * Leaflet DIV Icon creator.
   *
   * @param options
   *   The Icon options.
   *
   * @returns {*}
   */
  Drupal.Leaflet.prototype.create_divicon = function (options) {
    let html_class = options['html_class'] || '';
    let icon = new L.DivIcon({html: options.html, className: html_class});

    // override applicable marker defaults
    if (options.iconSize) {
      icon.options.iconSize = new L.Point(parseInt(options.iconSize.x, 10), parseInt(options.iconSize.y, 10));
    }
    if (options.iconAnchor && options.iconAnchor.x && options.iconAnchor.y) {
      icon.options.iconAnchor = new L.Point(parseInt(options.iconAnchor.x), parseInt(options.iconAnchor.y));
    }
    if (options.popupAnchor && !isNaN(options.popupAnchor.x) && !isNaN(options.popupAnchor.y)) {
      icon.options.popupAnchor = new L.Point(parseInt(options.popupAnchor.x), parseInt(options.popupAnchor.y));
    }

    return icon;
  };

  /**
   * Leaflet Point creator.
   *
   * @param marker
   *   The Marker definition.
   *
   * @returns {*}
   */
  Drupal.Leaflet.prototype.create_point = function(marker) {
    let latLng = new L.LatLng(marker.lat, marker.lon);
    let lMarker;
    let marker_title = marker.title ? marker.title.replace(/<[^>]*>/g, '').trim() : '';
    let options = {
      title: marker_title,
      className: marker.className || '',
      alt: marker_title,
    };

    lMarker = new L.Marker(latLng, options);

    if (marker.icon) {
      if (marker.icon.iconType && marker.icon.iconType === 'html' && marker.icon.html) {
        let icon = this.create_divicon(marker.icon);
        lMarker.setIcon(icon);
      }
      else if (marker.icon.iconType && marker.icon.iconType === 'circle_marker') {
        try {
          options = marker.icon.options ? JSON.parse(marker.icon.options) : {};
          options.radius = options.radius ? parseInt(options['radius']) : 10;
        }
        catch (e) {
          options = {};
        }
        lMarker = new L.CircleMarker(latLng, options);
      }
      else if (marker.icon.iconUrl) {
        marker.icon.iconSize = marker.icon.iconSize || {};
        marker.icon.iconSize.x = marker.icon.iconSize.x || this.naturalWidth;
        marker.icon.iconSize.y = marker.icon.iconSize.y || this.naturalHeight;
        if (marker.icon.shadowUrl) {
          marker.icon.shadowSize = marker.icon.shadowSize || {};
          marker.icon.shadowSize.x = marker.icon.shadowSize.x || this.naturalWidth;
          marker.icon.shadowSize.y = marker.icon.shadowSize.y || this.naturalHeight;
        }
        let icon = this.create_icon(marker.icon);
        lMarker.setIcon(icon);
      }
    }

    return lMarker;
  };

  /**
   * Leaflet Linestring creator.
   *
   * @param polyline
   *   The Polyline definition.
   * @param clusterable
   *   Clusterable bool option.
   *
   * @returns {*}
   */
  Drupal.Leaflet.prototype.create_linestring = function(polyline, clusterable = false) {
    let latlngs = [];
    for (let i = 0; i < polyline.points.length; i++) {
      let latlng = new L.LatLng(polyline.points[i].lat, polyline.points[i].lon);
      latlngs.push(latlng);
    }
    return clusterable ? new L.PolylineClusterable(latlngs) : new L.Polyline(latlngs);
  };

  /**
   *  Leaflet Collection creator.
   *
   * @param collection
   *   The collection definition.
   *
   * @returns {*}
   */
  Drupal.Leaflet.prototype.create_collection = function(collection) {
    let layers = new L.featureGroup();
    for (let x = 0; x < collection.component.length; x++) {
      layers.addLayer(this.create_feature(collection.component[x]));
    }
    return layers;
  };

  /**
   * Leaflet Polygon creator.
   *
   * @param polygon
   *   The polygon definition,
   * @param clusterable
   *   Clusterable bool option.
   *
   * @returns {*}
   */
  Drupal.Leaflet.prototype.create_polygon = function(polygon, clusterable = false) {
    let latlngs = [];
    for (let i = 0; i < polygon.points.length; i++) {
      let latlng = new L.LatLng(polygon.points[i].lat, polygon.points[i].lon);
      latlngs.push(latlng);
    }
    return clusterable ? new L.PolygonClusterable(latlngs) : new L.Polygon(latlngs);
  };

  /**
   * Leaflet Multi-Polygon creator.
   *
   * @param multipolygon
   *   The polygon definition,
   * @param clusterable
   *   Clusterable bool option.
   *
   * @returns {*}
   */
  Drupal.Leaflet.prototype.create_multipolygon = function(multipolygon, clusterable = false) {
    let polygons = [];
    for (let x = 0; x < multipolygon.component.length; x++) {
      let latlngs = [];
      let polygon = multipolygon.component[x];
      for (let i = 0; i < polygon.points.length; i++) {
        let latlng = new L.LatLng(polygon.points[i].lat, polygon.points[i].lon);
        latlngs.push(latlng);
      }
      polygons.push(latlngs);
    }
    return clusterable ? new L.PolygonClusterable(polygons) : new L.Polygon(polygons);
  };

  /**
   * Leaflet Multi-Poly creator (both Polygons & Poly-lines)
   *
   * @param multipoly
   *   The multipoly definition,
   * @param clusterable
   *   Clusterable bool option.
   *
   * @returns {*}
   */
  Drupal.Leaflet.prototype.create_multipoly = function(multipoly, clusterable = false) {
    let polygons = [];
    for (let x = 0; x < multipoly.component.length; x++) {
      let latlngs = [];
      let polygon = multipoly.component[x];
      for (let i = 0; i < polygon.points.length; i++) {
        let latlng = new L.LatLng(polygon.points[i].lat, polygon.points[i].lon);
        latlngs.push(latlng);
      }
      polygons.push(latlngs);
    }
    if (multipoly.multipolyline) {
      return clusterable ? new L.PolylineClusterable(polygons) : new L.Polyline(polygons);
    }
    else {
      return clusterable ? new L.PolygonClusterable(polygons) : new L.Polygon(polygons);
    }
  };

  /**
   * Leaflet Geo JSON Creator.
   *
   * @param json
   *   The json input.
   * @param events
   *
   * @returns {*}
   */
  Drupal.Leaflet.prototype.create_json = function(json, events) {
    let lJSON = new L.GeoJSON();

    lJSON.options.onEachFeature = function(feature, layer) {
      for (let layer_id in layer._layers) {
        for (let i in layer._layers[layer_id]._latlngs) {
        }
      }
      if (feature.properties.style) {
        layer.setStyle(feature.properties.style);
      }
      if (feature.properties.leaflet_id) {
        layer._leaflet_id = feature.properties.leaflet_id;
      }

      // Eventually add Tooltip to the lFeature.
      this.feature_bind_tooltip(layer, feature.properties);

      // Eventually add Popup to the Layer.
      this.feature_bind_popup(layer, feature.properties);

      for (e in events) {
        let layerParam = {};
        layerParam[e] = eval(events[e]);
        layer.on(layerParam);
      }
    };

    lJSON.addData(json);
    return lJSON;
  };

  // Set Map initial map position and Zoom.  Different scenarios:
  //  1)  Force the initial map center and zoom to values provided by input settings
  //  2)  Fit multiple features onto map using Leaflet's fitBounds method
  //  3)  Fit a single polygon onto map using Leaflet's fitBounds method
  //  4)  Display a single marker using the specified zoom
  //  5)  Adjust the initial zoom using zoomFiner, if specified
  //  6)  Cater for a map with no features (use input settings for Zoom and Center, if supplied)
  //
  // @NOTE: This method used by Leaflet Markecluster module (don't remove/rename)
  Drupal.Leaflet.prototype.fitBounds = function() {
    let start_zoom = this.map_settings.zoom ? this.map_settings.zoom : 12;
    // Note: this.map_settings.center might not be defined in case of Leaflet widget and Automatically locate user current position.
    let start_center = this.map_settings.center ? new L.LatLng(this.map_settings.center.lat, this.map_settings.center.lon) : new L.LatLng(0,0);

    //  Check whether the Zoom and Center are to be forced to use the input settings
    if (this.map_settings.map_position_force) {
      //  Set the Zoom and Center to values provided by the input settings
      this.lMap.setView(start_center, start_zoom);
    } else {
      if (this.bounds.length === 0) {
        //  No features - set the Zoom and Center to values provided by the input settings, if specified
        this.lMap.setView(start_center, start_zoom);
      } else {
        //  Set the Zoom and Center by using the Leaflet fitBounds function
        const bounds = new L.LatLngBounds(this.bounds);
        this.lMap.fitBounds(bounds);
        start_center = bounds.getCenter();
        start_zoom = this.lMap.getBoundsZoom(bounds);

        if (this.bounds.length === 1) {
          //  Single marker - set zoom to input settings
          this.lMap.setZoom(this.map_settings.zoom);
          start_zoom = this.map_settings.zoom;
        }
      }

      // In case of map initial position not forced, and zooFiner not null/neutral,
      // adapt the Map Zoom and the Start Zoom accordingly.
      if (this.map_settings.hasOwnProperty('zoomFiner') && parseInt(this.map_settings.zoomFiner)) {
        start_zoom += parseFloat(this.map_settings.zoomFiner);
        this.lMap.setView(start_center, start_zoom);
      }

      // Set the map start zoom and center.
      this.start_zoom = start_zoom;
      this.start_center = start_center;
    }

  };

  /**
   * Triggers a Leaflet Map Reset View action.
   *
   * @param mapid
   *   The Map identifier, to apply the rest to.
   */
  Drupal.Leaflet.prototype.map_reset = function(mapid) {
    Drupal.Leaflet[mapid].reset_view_control._resetView();
  };

  // Extend the L.Polyline to make it clustarable.
  // @see https://gis.stackexchange.com/questions/197882/is-it-possible-to-cluster-polygons-in-leaflet
  L.PolylineClusterable = L.Polyline.extend({
    _originalInitialize: L.Polyline.prototype.initialize,

    initialize: function (bounds, options) {
      this._originalInitialize(bounds, options);
      this._latlng = this.getBounds().getCenter();
    },

    getLatLng: function () {
      return this._latlng;
    },

    setLatLng: function () {}
  });

  // Extend the L.Polygon to make it clustarable.
  // @see https://gis.stackexchange.com/questions/197882/is-it-possible-to-cluster-polygons-in-leaflet
  L.PolygonClusterable = L.Polygon.extend({
    _originalInitialize: L.Polygon.prototype.initialize,

    initialize: function (bounds, options) {
      this._originalInitialize(bounds, options);
      this._latlng = this.getBounds().getCenter();
    },

    getLatLng: function () {
      return this._latlng;
    },

    setLatLng: function () {}
  });

})(jQuery, Drupal, drupalSettings);
;
(()=>{var t={9705:(t,e,i)=>{"use strict";var n=i(1540);function r(t){var e=[Infinity,Infinity,-Infinity,-Infinity];return n.coordEach(t,(function(t){e[0]>t[0]&&(e[0]=t[0]),e[1]>t[1]&&(e[1]=t[1]),e[2]<t[0]&&(e[2]=t[0]),e[3]<t[1]&&(e[3]=t[1])})),e}r["default"]=r,e.Z=r},4102:(t,e)=>{"use strict";function i(t,e,i){void 0===i&&(i={});var n={type:"Feature"};return(0===i.id||i.id)&&(n.id=i.id),i.bbox&&(n.bbox=i.bbox),n.properties=e||{},n.geometry=t,n}function n(t,e,n){if(void 0===n&&(n={}),!t)throw new Error("coordinates is required");if(!Array.isArray(t))throw new Error("coordinates must be an Array");if(t.length<2)throw new Error("coordinates must be at least 2 numbers long");if(!d(t[0])||!d(t[1]))throw new Error("coordinates must contain numbers");return i({type:"Point",coordinates:t},e,n)}function r(t,e,n){void 0===n&&(n={});for(var r=0,a=t;r<a.length;r++){var o=a[r];if(o.length<4)throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");for(var s=0;s<o[o.length-1].length;s++)if(o[o.length-1][s]!==o[0][s])throw new Error("First and last Position are not equivalent.")}return i({type:"Polygon",coordinates:t},e,n)}function a(t,e,n){if(void 0===n&&(n={}),t.length<2)throw new Error("coordinates must be an array of two or more positions");return i({type:"LineString",coordinates:t},e,n)}function o(t,e){void 0===e&&(e={});var i={type:"FeatureCollection"};return e.id&&(i.id=e.id),e.bbox&&(i.bbox=e.bbox),i.features=t,i}function s(t,e,n){return void 0===n&&(n={}),i({type:"MultiLineString",coordinates:t},e,n)}function l(t,e,n){return void 0===n&&(n={}),i({type:"MultiPoint",coordinates:t},e,n)}function h(t,e,n){return void 0===n&&(n={}),i({type:"MultiPolygon",coordinates:t},e,n)}function u(t,i){void 0===i&&(i="kilometers");var n=e.factors[i];if(!n)throw new Error(i+" units is invalid");return t*n}function c(t,i){void 0===i&&(i="kilometers");var n=e.factors[i];if(!n)throw new Error(i+" units is invalid");return t/n}function p(t){return 180*(t%(2*Math.PI))/Math.PI}function d(t){return!isNaN(t)&&null!==t&&!Array.isArray(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.earthRadius=6371008.8,e.factors={centimeters:100*e.earthRadius,centimetres:100*e.earthRadius,degrees:e.earthRadius/111325,feet:3.28084*e.earthRadius,inches:39.37*e.earthRadius,kilometers:e.earthRadius/1e3,kilometres:e.earthRadius/1e3,meters:e.earthRadius,metres:e.earthRadius,miles:e.earthRadius/1609.344,millimeters:1e3*e.earthRadius,millimetres:1e3*e.earthRadius,nauticalmiles:e.earthRadius/1852,radians:1,yards:1.0936*e.earthRadius},e.unitsFactors={centimeters:100,centimetres:100,degrees:1/111325,feet:3.28084,inches:39.37,kilometers:.001,kilometres:.001,meters:1,metres:1,miles:1/1609.344,millimeters:1e3,millimetres:1e3,nauticalmiles:1/1852,radians:1/e.earthRadius,yards:1.0936133},e.areaFactors={acres:247105e-9,centimeters:1e4,centimetres:1e4,feet:10.763910417,hectares:1e-4,inches:1550.003100006,kilometers:1e-6,kilometres:1e-6,meters:1,metres:1,miles:386e-9,millimeters:1e6,millimetres:1e6,yards:1.195990046},e.feature=i,e.geometry=function(t,e,i){switch(void 0===i&&(i={}),t){case"Point":return n(e).geometry;case"LineString":return a(e).geometry;case"Polygon":return r(e).geometry;case"MultiPoint":return l(e).geometry;case"MultiLineString":return s(e).geometry;case"MultiPolygon":return h(e).geometry;default:throw new Error(t+" is invalid")}},e.point=n,e.points=function(t,e,i){return void 0===i&&(i={}),o(t.map((function(t){return n(t,e)})),i)},e.polygon=r,e.polygons=function(t,e,i){return void 0===i&&(i={}),o(t.map((function(t){return r(t,e)})),i)},e.lineString=a,e.lineStrings=function(t,e,i){return void 0===i&&(i={}),o(t.map((function(t){return a(t,e)})),i)},e.featureCollection=o,e.multiLineString=s,e.multiPoint=l,e.multiPolygon=h,e.geometryCollection=function(t,e,n){return void 0===n&&(n={}),i({type:"GeometryCollection",geometries:t},e,n)},e.round=function(t,e){if(void 0===e&&(e=0),e&&!(e>=0))throw new Error("precision must be a positive number");var i=Math.pow(10,e||0);return Math.round(t*i)/i},e.radiansToLength=u,e.lengthToRadians=c,e.lengthToDegrees=function(t,e){return p(c(t,e))},e.bearingToAzimuth=function(t){var e=t%360;return e<0&&(e+=360),e},e.radiansToDegrees=p,e.degreesToRadians=function(t){return t%360*Math.PI/180},e.convertLength=function(t,e,i){if(void 0===e&&(e="kilometers"),void 0===i&&(i="kilometers"),!(t>=0))throw new Error("length must be a positive number");return u(c(t,e),i)},e.convertArea=function(t,i,n){if(void 0===i&&(i="meters"),void 0===n&&(n="kilometers"),!(t>=0))throw new Error("area must be a positive number");var r=e.areaFactors[i];if(!r)throw new Error("invalid original units");var a=e.areaFactors[n];if(!a)throw new Error("invalid final units");return t/r*a},e.isNumber=d,e.isObject=function(t){return!!t&&t.constructor===Object},e.validateBBox=function(t){if(!t)throw new Error("bbox is required");if(!Array.isArray(t))throw new Error("bbox must be an Array");if(4!==t.length&&6!==t.length)throw new Error("bbox must be an Array of 4 or 6 numbers");t.forEach((function(t){if(!d(t))throw new Error("bbox must only contain numbers")}))},e.validateId=function(t){if(!t)throw new Error("id is required");if(-1===["string","number"].indexOf(typeof t))throw new Error("id must be a number or a string")}},1540:(t,e,i)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(4102);function r(t,e,i){if(null!==t)for(var n,a,o,s,l,h,u,c,p=0,d=0,f=t.type,g="FeatureCollection"===f,_="Feature"===f,m=g?t.features.length:1,y=0;y<m;y++){l=(c=!!(u=g?t.features[y].geometry:_?t.geometry:t)&&"GeometryCollection"===u.type)?u.geometries.length:1;for(var v=0;v<l;v++){var L=0,b=0;if(null!==(s=c?u.geometries[v]:u)){h=s.coordinates;var k=s.type;switch(p=!i||"Polygon"!==k&&"MultiPolygon"!==k?0:1,k){case null:break;case"Point":if(!1===e(h,d,y,L,b))return!1;d++,L++;break;case"LineString":case"MultiPoint":for(n=0;n<h.length;n++){if(!1===e(h[n],d,y,L,b))return!1;d++,"MultiPoint"===k&&L++}"LineString"===k&&L++;break;case"Polygon":case"MultiLineString":for(n=0;n<h.length;n++){for(a=0;a<h[n].length-p;a++){if(!1===e(h[n][a],d,y,L,b))return!1;d++}"MultiLineString"===k&&L++,"Polygon"===k&&b++}"Polygon"===k&&L++;break;case"MultiPolygon":for(n=0;n<h.length;n++){for(b=0,a=0;a<h[n].length;a++){for(o=0;o<h[n][a].length-p;o++){if(!1===e(h[n][a][o],d,y,L,b))return!1;d++}b++}L++}break;case"GeometryCollection":for(n=0;n<s.geometries.length;n++)if(!1===r(s.geometries[n],e,i))return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function a(t,e){var i;switch(t.type){case"FeatureCollection":for(i=0;i<t.features.length&&!1!==e(t.features[i].properties,i);i++);break;case"Feature":e(t.properties,0)}}function o(t,e){if("Feature"===t.type)e(t,0);else if("FeatureCollection"===t.type)for(var i=0;i<t.features.length&&!1!==e(t.features[i],i);i++);}function s(t,e){var i,n,r,a,o,s,l,h,u,c,p=0,d="FeatureCollection"===t.type,f="Feature"===t.type,g=d?t.features.length:1;for(i=0;i<g;i++){for(s=d?t.features[i].geometry:f?t.geometry:t,h=d?t.features[i].properties:f?t.properties:{},u=d?t.features[i].bbox:f?t.bbox:undefined,c=d?t.features[i].id:f?t.id:undefined,o=(l=!!s&&"GeometryCollection"===s.type)?s.geometries.length:1,r=0;r<o;r++)if(null!==(a=l?s.geometries[r]:s))switch(a.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":if(!1===e(a,p,h,u,c))return!1;break;case"GeometryCollection":for(n=0;n<a.geometries.length;n++)if(!1===e(a.geometries[n],p,h,u,c))return!1;break;default:throw new Error("Unknown Geometry Type")}else if(!1===e(null,p,h,u,c))return!1;p++}}function l(t,e){s(t,(function(t,i,r,a,o){var s,l=null===t?null:t.type;switch(l){case null:case"Point":case"LineString":case"Polygon":return!1!==e(n.feature(t,r,{bbox:a,id:o}),i,0)&&void 0}switch(l){case"MultiPoint":s="Point";break;case"MultiLineString":s="LineString";break;case"MultiPolygon":s="Polygon"}for(var h=0;h<t.coordinates.length;h++){var u={type:s,coordinates:t.coordinates[h]};if(!1===e(n.feature(u,r),i,h))return!1}}))}function h(t,e){l(t,(function(t,i,a){var o=0;if(t.geometry){var s=t.geometry.type;if("Point"!==s&&"MultiPoint"!==s){var l,h=0,u=0,c=0;return!1!==r(t,(function(r,s,p,d,f){if(l===undefined||i>h||d>u||f>c)return l=r,h=i,u=d,c=f,void(o=0);var g=n.lineString([l,r],t.properties);if(!1===e(g,i,a,f,o))return!1;o++,l=r}))&&void 0}}}))}function u(t,e){if(!t)throw new Error("geojson is required");l(t,(function(t,i,r){if(null!==t.geometry){var a=t.geometry.type,o=t.geometry.coordinates;switch(a){case"LineString":if(!1===e(t,i,r,0,0))return!1;break;case"Polygon":for(var s=0;s<o.length;s++)if(!1===e(n.lineString(o[s],t.properties),i,r,s))return!1}}}))}e.coordAll=function(t){var e=[];return r(t,(function(t){e.push(t)})),e},e.coordEach=r,e.coordReduce=function(t,e,i,n){var a=i;return r(t,(function(t,n,r,o,s){a=0===n&&i===undefined?t:e(a,t,n,r,o,s)}),n),a},e.featureEach=o,e.featureReduce=function(t,e,i){var n=i;return o(t,(function(t,r){n=0===r&&i===undefined?t:e(n,t,r)})),n},e.findPoint=function(t,e){if(e=e||{},!n.isObject(e))throw new Error("options is invalid");var i,r=e.featureIndex||0,a=e.multiFeatureIndex||0,o=e.geometryIndex||0,s=e.coordIndex||0,l=e.properties;switch(t.type){case"FeatureCollection":r<0&&(r=t.features.length+r),l=l||t.features[r].properties,i=t.features[r].geometry;break;case"Feature":l=l||t.properties,i=t.geometry;break;case"Point":case"MultiPoint":return null;case"LineString":case"Polygon":case"MultiLineString":case"MultiPolygon":i=t;break;default:throw new Error("geojson is invalid")}if(null===i)return null;var h=i.coordinates;switch(i.type){case"Point":return n.point(h,l,e);case"MultiPoint":return a<0&&(a=h.length+a),n.point(h[a],l,e);case"LineString":return s<0&&(s=h.length+s),n.point(h[s],l,e);case"Polygon":return o<0&&(o=h.length+o),s<0&&(s=h[o].length+s),n.point(h[o][s],l,e);case"MultiLineString":return a<0&&(a=h.length+a),s<0&&(s=h[a].length+s),n.point(h[a][s],l,e);case"MultiPolygon":return a<0&&(a=h.length+a),o<0&&(o=h[a].length+o),s<0&&(s=h[a][o].length-s),n.point(h[a][o][s],l,e)}throw new Error("geojson is invalid")},e.findSegment=function(t,e){if(e=e||{},!n.isObject(e))throw new Error("options is invalid");var i,r=e.featureIndex||0,a=e.multiFeatureIndex||0,o=e.geometryIndex||0,s=e.segmentIndex||0,l=e.properties;switch(t.type){case"FeatureCollection":r<0&&(r=t.features.length+r),l=l||t.features[r].properties,i=t.features[r].geometry;break;case"Feature":l=l||t.properties,i=t.geometry;break;case"Point":case"MultiPoint":return null;case"LineString":case"Polygon":case"MultiLineString":case"MultiPolygon":i=t;break;default:throw new Error("geojson is invalid")}if(null===i)return null;var h=i.coordinates;switch(i.type){case"Point":case"MultiPoint":return null;case"LineString":return s<0&&(s=h.length+s-1),n.lineString([h[s],h[s+1]],l,e);case"Polygon":return o<0&&(o=h.length+o),s<0&&(s=h[o].length+s-1),n.lineString([h[o][s],h[o][s+1]],l,e);case"MultiLineString":return a<0&&(a=h.length+a),s<0&&(s=h[a].length+s-1),n.lineString([h[a][s],h[a][s+1]],l,e);case"MultiPolygon":return a<0&&(a=h.length+a),o<0&&(o=h[a].length+o),s<0&&(s=h[a][o].length-s-1),n.lineString([h[a][o][s],h[a][o][s+1]],l,e)}throw new Error("geojson is invalid")},e.flattenEach=l,e.flattenReduce=function(t,e,i){var n=i;return l(t,(function(t,r,a){n=0===r&&0===a&&i===undefined?t:e(n,t,r,a)})),n},e.geomEach=s,e.geomReduce=function(t,e,i){var n=i;return s(t,(function(t,r,a,o,s){n=0===r&&i===undefined?t:e(n,t,r,a,o,s)})),n},e.lineEach=u,e.lineReduce=function(t,e,i){var n=i;return u(t,(function(t,r,a,o){n=0===r&&i===undefined?t:e(n,t,r,a,o)})),n},e.propEach=a,e.propReduce=function(t,e,i){var n=i;return a(t,(function(t,r){n=0===r&&i===undefined?t:e(n,t,r)})),n},e.segmentEach=h,e.segmentReduce=function(t,e,i){var n=i,r=!1;return h(t,(function(t,a,o,s,l){n=!1===r&&i===undefined?t:e(n,t,a,o,s,l),r=!0})),n}},414:(t,e,i)=>{"use strict";i(7107);var n=i(2492),r=i.n(n);const a=JSON.parse('{"tooltips":{"placeMarker":"Click to place marker","firstVertex":"Click to place first vertex","continueLine":"Click to continue drawing","finishLine":"Click any existing marker to finish","finishPoly":"Click first marker to finish","finishRect":"Click to finish","startCircle":"Click to place circle center","finishCircle":"Click to finish circle","placeCircleMarker":"Click to place circle marker","placeText":"Click to place text"},"actions":{"finish":"Finish","cancel":"Cancel","removeLastVertex":"Remove Last Vertex"},"buttonTitles":{"drawMarkerButton":"Draw Marker","drawPolyButton":"Draw Polygons","drawLineButton":"Draw Polyline","drawCircleButton":"Draw Circle","drawRectButton":"Draw Rectangle","editButton":"Edit Layers","dragButton":"Drag Layers","cutButton":"Cut Layers","deleteButton":"Remove Layers","drawCircleMarkerButton":"Draw Circle Marker","snappingButton":"Snap dragged marker to other layers and vertices","pinningButton":"Pin shared vertices together","rotateButton":"Rotate Layers","drawTextButton":"Draw Text"}}'),o=JSON.parse('{"tooltips":{"placeMarker":"Platziere den Marker mit Klick","firstVertex":"Platziere den ersten Marker mit Klick","continueLine":"Klicke, um weiter zu zeichnen","finishLine":"Beende mit Klick auf existierenden Marker","finishPoly":"Beende mit Klick auf ersten Marker","finishRect":"Beende mit Klick","startCircle":"Platziere das Kreiszentrum mit Klick","finishCircle":"Beende den Kreis mit Klick","placeCircleMarker":"Platziere den Kreismarker mit Klick","placeText":"Platziere den Text mit Klick"},"actions":{"finish":"Beenden","cancel":"Abbrechen","removeLastVertex":"Letzten Vertex löschen"},"buttonTitles":{"drawMarkerButton":"Marker zeichnen","drawPolyButton":"Polygon zeichnen","drawLineButton":"Polyline zeichnen","drawCircleButton":"Kreis zeichnen","drawRectButton":"Rechteck zeichnen","editButton":"Layer editieren","dragButton":"Layer bewegen","cutButton":"Layer schneiden","deleteButton":"Layer löschen","drawCircleMarkerButton":"Kreismarker zeichnen","snappingButton":"Bewegter Layer an andere Layer oder Vertexe einhacken","pinningButton":"Vertexe an der gleichen Position verknüpfen","rotateButton":"Layer drehen","drawTextButton":"Text zeichnen"}}'),s=JSON.parse('{"tooltips":{"placeMarker":"Clicca per posizionare un Marker","firstVertex":"Clicca per posizionare il primo vertice","continueLine":"Clicca per continuare a disegnare","finishLine":"Clicca qualsiasi marker esistente per terminare","finishPoly":"Clicca il primo marker per terminare","finishRect":"Clicca per terminare","startCircle":"Clicca per posizionare il punto centrale del cerchio","finishCircle":"Clicca per terminare il cerchio","placeCircleMarker":"Clicca per posizionare un Marker del cherchio"},"actions":{"finish":"Termina","cancel":"Annulla","removeLastVertex":"Rimuovi l\'ultimo vertice"},"buttonTitles":{"drawMarkerButton":"Disegna Marker","drawPolyButton":"Disegna Poligoni","drawLineButton":"Disegna Polilinea","drawCircleButton":"Disegna Cerchio","drawRectButton":"Disegna Rettangolo","editButton":"Modifica Livelli","dragButton":"Sposta Livelli","cutButton":"Ritaglia Livelli","deleteButton":"Elimina Livelli","drawCircleMarkerButton":"Disegna Marker del Cerchio","snappingButton":"Snap ha trascinato il pennarello su altri strati e vertici","pinningButton":"Pin condiviso vertici insieme"}}'),l=JSON.parse('{"tooltips":{"placeMarker":"Klik untuk menempatkan marker","firstVertex":"Klik untuk menempatkan vertex pertama","continueLine":"Klik untuk meneruskan digitasi","finishLine":"Klik pada sembarang marker yang ada untuk mengakhiri","finishPoly":"Klik marker pertama untuk mengakhiri","finishRect":"Klik untuk mengakhiri","startCircle":"Klik untuk menempatkan titik pusat lingkaran","finishCircle":"Klik untuk mengakhiri lingkaran","placeCircleMarker":"Klik untuk menempatkan penanda lingkarann"},"actions":{"finish":"Selesai","cancel":"Batal","removeLastVertex":"Hilangkan Vertex Terakhir"},"buttonTitles":{"drawMarkerButton":"Digitasi Marker","drawPolyButton":"Digitasi Polygon","drawLineButton":"Digitasi Polyline","drawCircleButton":"Digitasi Lingkaran","drawRectButton":"Digitasi Segi Empat","editButton":"Edit Layer","dragButton":"Geser Layer","cutButton":"Potong Layer","deleteButton":"Hilangkan Layer","drawCircleMarkerButton":"Digitasi Penanda Lingkaran","snappingButton":"Jepretkan penanda yang ditarik ke lapisan dan simpul lain","pinningButton":"Sematkan simpul bersama bersama"}}'),h=JSON.parse('{"tooltips":{"placeMarker":"Adaugă un punct","firstVertex":"Apasă aici pentru a adăuga primul Vertex","continueLine":"Apasă aici pentru a continua desenul","finishLine":"Apasă pe orice obiect pentru a finisa desenul","finishPoly":"Apasă pe primul obiect pentru a finisa","finishRect":"Apasă pentru a finisa","startCircle":"Apasă pentru a desena un cerc","finishCircle":"Apasă pentru a finisa un cerc","placeCircleMarker":"Adaugă un punct"},"actions":{"finish":"Termină","cancel":"Anulează","removeLastVertex":"Șterge ultimul Vertex"},"buttonTitles":{"drawMarkerButton":"Adaugă o bulină","drawPolyButton":"Desenează un poligon","drawLineButton":"Desenează o linie","drawCircleButton":"Desenează un cerc","drawRectButton":"Desenează un dreptunghi","editButton":"Editează straturile","dragButton":"Mută straturile","cutButton":"Taie straturile","deleteButton":"Șterge straturile","drawCircleMarkerButton":"Desenează marcatorul cercului","snappingButton":"Fixați marcatorul glisat pe alte straturi și vârfuri","pinningButton":"Fixați vârfurile partajate împreună"}}'),u=JSON.parse('{"tooltips":{"placeMarker":"Нажмите, чтобы нанести маркер","firstVertex":"Нажмите, чтобы нанести первый объект","continueLine":"Нажмите, чтобы продолжить рисование","finishLine":"Нажмите любой существующий маркер для завершения","finishPoly":"Выберите первую точку, чтобы закончить","finishRect":"Нажмите, чтобы закончить","startCircle":"Нажмите, чтобы добавить центр круга","finishCircle":"Нажмите, чтобы задать радиус","placeCircleMarker":"Нажмите, чтобы нанести круговой маркер"},"actions":{"finish":"Завершить","cancel":"Отменить","removeLastVertex":"Отменить последнее действие"},"buttonTitles":{"drawMarkerButton":"Добавить маркер","drawPolyButton":"Рисовать полигон","drawLineButton":"Рисовать кривую","drawCircleButton":"Рисовать круг","drawRectButton":"Рисовать прямоугольник","editButton":"Редактировать слой","dragButton":"Перенести слой","cutButton":"Вырезать слой","deleteButton":"Удалить слой","drawCircleMarkerButton":"Добавить круговой маркер","snappingButton":"Привязать перетаскиваемый маркер к другим слоям и вершинам","pinningButton":"Связать общие точки вместе"}}'),c=JSON.parse('{"tooltips":{"placeMarker":"Presiona para colocar un marcador","firstVertex":"Presiona para colocar el primer vértice","continueLine":"Presiona para continuar dibujando","finishLine":"Presiona cualquier marcador existente para finalizar","finishPoly":"Presiona el primer marcador para finalizar","finishRect":"Presiona para finalizar","startCircle":"Presiona para colocar el centro del circulo","finishCircle":"Presiona para finalizar el circulo","placeCircleMarker":"Presiona para colocar un marcador de circulo"},"actions":{"finish":"Finalizar","cancel":"Cancelar","removeLastVertex":"Remover ultimo vértice"},"buttonTitles":{"drawMarkerButton":"Dibujar Marcador","drawPolyButton":"Dibujar Polígono","drawLineButton":"Dibujar Línea","drawCircleButton":"Dibujar Circulo","drawRectButton":"Dibujar Rectángulo","editButton":"Editar Capas","dragButton":"Arrastrar Capas","cutButton":"Cortar Capas","deleteButton":"Remover Capas","drawCircleMarkerButton":"Dibujar Marcador de Circulo","snappingButton":"El marcador de Snap arrastrado a otras capas y vértices","pinningButton":"Fijar juntos los vértices compartidos"}}'),p=JSON.parse('{"tooltips":{"placeMarker":"Klik om een marker te plaatsen","firstVertex":"Klik om het eerste punt te plaatsen","continueLine":"Klik om te blijven tekenen","finishLine":"Klik op een bestaand punt om te beëindigen","finishPoly":"Klik op het eerst punt om te beëindigen","finishRect":"Klik om te beëindigen","startCircle":"Klik om het middelpunt te plaatsen","finishCircle":"Klik om de cirkel te beëindigen","placeCircleMarker":"Klik om een marker te plaatsen"},"actions":{"finish":"Bewaar","cancel":"Annuleer","removeLastVertex":"Verwijder laatste punt"},"buttonTitles":{"drawMarkerButton":"Plaats Marker","drawPolyButton":"Teken een vlak","drawLineButton":"Teken een lijn","drawCircleButton":"Teken een cirkel","drawRectButton":"Teken een vierkant","editButton":"Bewerk","dragButton":"Verplaats","cutButton":"Knip","deleteButton":"Verwijder","drawCircleMarkerButton":"Plaats Marker","snappingButton":"Snap gesleepte marker naar andere lagen en hoekpunten","pinningButton":"Speld gedeelde hoekpunten samen"}}'),d=JSON.parse('{"tooltips":{"placeMarker":"Cliquez pour placer un marqueur","firstVertex":"Cliquez pour placer le premier sommet","continueLine":"Cliquez pour continuer à dessiner","finishLine":"Cliquez sur n\'importe quel marqueur pour terminer","finishPoly":"Cliquez sur le premier marqueur pour terminer","finishRect":"Cliquez pour terminer","startCircle":"Cliquez pour placer le centre du cercle","finishCircle":"Cliquez pour finir le cercle","placeCircleMarker":"Cliquez pour placer le marqueur circulaire"},"actions":{"finish":"Terminer","cancel":"Annuler","removeLastVertex":"Retirer le dernier sommet"},"buttonTitles":{"drawMarkerButton":"Placer des marqueurs","drawPolyButton":"Dessiner des polygones","drawLineButton":"Dessiner des polylignes","drawCircleButton":"Dessiner un cercle","drawRectButton":"Dessiner un rectangle","editButton":"Éditer des calques","dragButton":"Déplacer des calques","cutButton":"Couper des calques","deleteButton":"Supprimer des calques","drawCircleMarkerButton":"Dessiner un marqueur circulaire","snappingButton":"Glisser le marqueur vers d\'autres couches et sommets","pinningButton":"Épingler ensemble les sommets partagés","rotateButton":"Tourner des calques"}}'),f=JSON.parse('{"tooltips":{"placeMarker":"单击放置标记","firstVertex":"单击放置首个顶点","continueLine":"单击继续绘制","finishLine":"单击任何存在的标记以完成","finishPoly":"单击第一个标记以完成","finishRect":"单击完成","startCircle":"单击放置圆心","finishCircle":"单击完成圆形","placeCircleMarker":"点击放置圆形标记"},"actions":{"finish":"完成","cancel":"取消","removeLastVertex":"移除最后的顶点"},"buttonTitles":{"drawMarkerButton":"绘制标记","drawPolyButton":"绘制多边形","drawLineButton":"绘制线段","drawCircleButton":"绘制圆形","drawRectButton":"绘制长方形","editButton":"编辑图层","dragButton":"拖拽图层","cutButton":"剪切图层","deleteButton":"删除图层","drawCircleMarkerButton":"画圆圈标记","snappingButton":"将拖动的标记捕捉到其他图层和顶点","pinningButton":"将共享顶点固定在一起"}}'),g=JSON.parse('{"tooltips":{"placeMarker":"單擊放置標記","firstVertex":"單擊放置第一個頂點","continueLine":"單擊繼續繪製","finishLine":"單擊任何存在的標記以完成","finishPoly":"單擊第一個標記以完成","finishRect":"單擊完成","startCircle":"單擊放置圓心","finishCircle":"單擊完成圓形","placeCircleMarker":"點擊放置圓形標記"},"actions":{"finish":"完成","cancel":"取消","removeLastVertex":"移除最後一個頂點"},"buttonTitles":{"drawMarkerButton":"放置標記","drawPolyButton":"繪製多邊形","drawLineButton":"繪製線段","drawCircleButton":"繪製圓形","drawRectButton":"繪製方形","editButton":"編輯圖形","dragButton":"移動圖形","cutButton":"裁切圖形","deleteButton":"刪除圖形","drawCircleMarkerButton":"畫圓圈標記","snappingButton":"將拖動的標記對齊到其他圖層和頂點","pinningButton":"將共享頂點固定在一起"}}'),_={en:a,de:o,it:s,id:l,ro:h,ru:u,es:c,nl:p,fr:d,pt_br:JSON.parse('{"tooltips":{"placeMarker":"Clique para posicionar o marcador","firstVertex":"Clique para posicionar o primeiro vértice","continueLine":"Clique para continuar desenhando","finishLine":"Clique em qualquer marcador existente para finalizar","finishPoly":"Clique no primeiro ponto para fechar o polígono","finishRect":"Clique para finalizar","startCircle":"Clique para posicionar o centro do círculo","finishCircle":"Clique para fechar o círculo","placeCircleMarker":"Clique para posicionar o marcador circular"},"actions":{"finish":"Finalizar","cancel":"Cancelar","removeLastVertex":"Remover último vértice"},"buttonTitles":{"drawMarkerButton":"Desenhar um marcador","drawPolyButton":"Desenhar um polígono","drawLineButton":"Desenhar uma polilinha","drawCircleButton":"Desenhar um círculo","drawRectButton":"Desenhar um retângulo","editButton":"Editar camada(s)","dragButton":"Mover camada(s)","cutButton":"Recortar camada(s)","deleteButton":"Remover camada(s)","drawCircleMarkerButton":"Marcador de círculos de desenho","snappingButton":"Marcador arrastado para outras camadas e vértices","pinningButton":"Vértices compartilhados de pinos juntos"}}'),zh:f,zh_tw:g,pl:JSON.parse('{"tooltips":{"placeMarker":"Kliknij, aby ustawić znacznik","firstVertex":"Kliknij, aby ustawić pierwszy punkt","continueLine":"Kliknij, aby kontynuować rysowanie","finishLine":"Kliknij dowolny punkt, aby zakończyć","finishPoly":"Kliknij pierwszy punkt, aby zakończyć","finishRect":"Kliknij, aby zakończyć","startCircle":"Kliknij, aby ustawić środek koła","finishCircle":"Kliknij, aby zakończyć rysowanie koła","placeCircleMarker":"Kliknij, aby ustawić okrągły znacznik"},"actions":{"finish":"Zakończ","cancel":"Anuluj","removeLastVertex":"Usuń ostatni punkt"},"buttonTitles":{"drawMarkerButton":"Narysuj znacznik","drawPolyButton":"Narysuj wielokąt","drawLineButton":"Narysuj ścieżkę","drawCircleButton":"Narysuj koło","drawRectButton":"Narysuj prostokąt","editButton":"Edytuj","dragButton":"Przesuń","cutButton":"Wytnij","deleteButton":"Usuń","drawCircleMarkerButton":"Narysuj okrągły znacznik","snappingButton":"Snap przeciągnięty marker na inne warstwy i wierzchołki","pinningButton":"Sworzeń wspólne wierzchołki razem"}}'),sv:JSON.parse('{"tooltips":{"placeMarker":"Klicka för att placera markör","firstVertex":"Klicka för att placera första hörnet","continueLine":"Klicka för att fortsätta rita","finishLine":"Klicka på en existerande punkt för att slutföra","finishPoly":"Klicka på den första punkten för att slutföra","finishRect":"Klicka för att slutföra","startCircle":"Klicka för att placera cirkelns centrum","finishCircle":"Klicka för att slutföra cirkeln","placeCircleMarker":"Klicka för att placera cirkelmarkör"},"actions":{"finish":"Slutför","cancel":"Avbryt","removeLastVertex":"Ta bort sista hörnet"},"buttonTitles":{"drawMarkerButton":"Rita Markör","drawPolyButton":"Rita Polygoner","drawLineButton":"Rita Linje","drawCircleButton":"Rita Cirkel","drawRectButton":"Rita Rektangel","editButton":"Redigera Lager","dragButton":"Dra Lager","cutButton":"Klipp i Lager","deleteButton":"Ta bort Lager","drawCircleMarkerButton":"Rita Cirkelmarkör","snappingButton":"Snäpp dra markören till andra lager och hörn","pinningButton":"Fäst delade hörn tillsammans"}}'),el:JSON.parse('{"tooltips":{"placeMarker":"Κάντε κλικ για να τοποθετήσετε Δείκτη","firstVertex":"Κάντε κλικ για να τοποθετήσετε το πρώτο σημείο","continueLine":"Κάντε κλικ για να συνεχίσετε να σχεδιάζετε","finishLine":"Κάντε κλικ σε οποιονδήποτε υπάρχον σημείο για να ολοκληρωθεί","finishPoly":"Κάντε κλικ στο πρώτο σημείο για να τελειώσετε","finishRect":"Κάντε κλικ για να τελειώσετε","startCircle":"Κάντε κλικ για να τοποθετήσετε κέντρο Κύκλου","finishCircle":"Κάντε κλικ για να ολοκληρώσετε τον Κύκλο","placeCircleMarker":"Κάντε κλικ για να τοποθετήσετε Κυκλικό Δείκτη"},"actions":{"finish":"Τέλος","cancel":"Ακύρωση","removeLastVertex":"Κατάργηση τελευταίου σημείου"},"buttonTitles":{"drawMarkerButton":"Σχεδίαση Δείκτη","drawPolyButton":"Σχεδίαση Πολυγώνου","drawLineButton":"Σχεδίαση Γραμμής","drawCircleButton":"Σχεδίαση Κύκλου","drawRectButton":"Σχεδίαση Ορθογωνίου","editButton":"Επεξεργασία Επιπέδων","dragButton":"Μεταφορά Επιπέδων","cutButton":"Αποκοπή Επιπέδων","deleteButton":"Κατάργηση Επιπέδων","drawCircleMarkerButton":"Σχεδίαση Κυκλικού Δείκτη","snappingButton":"Προσκόλληση του Δείκτη μεταφοράς σε άλλα Επίπεδα και Κορυφές","pinningButton":"Περικοπή κοινών κορυφών μαζί"}}'),hu:JSON.parse('{"tooltips":{"placeMarker":"Kattintson a jelölő elhelyezéséhez","firstVertex":"Kattintson az első pont elhelyezéséhez","continueLine":"Kattintson a következő pont elhelyezéséhez","finishLine":"A befejezéshez kattintson egy meglévő pontra","finishPoly":"A befejezéshez kattintson az első pontra","finishRect":"Kattintson a befejezéshez","startCircle":"Kattintson a kör középpontjának elhelyezéséhez","finishCircle":"Kattintson a kör befejezéséhez","placeCircleMarker":"Kattintson a körjelölő elhelyezéséhez"},"actions":{"finish":"Befejezés","cancel":"Mégse","removeLastVertex":"Utolsó pont eltávolítása"},"buttonTitles":{"drawMarkerButton":"Jelölő rajzolása","drawPolyButton":"Poligon rajzolása","drawLineButton":"Vonal rajzolása","drawCircleButton":"Kör rajzolása","drawRectButton":"Négyzet rajzolása","editButton":"Elemek szerkesztése","dragButton":"Elemek mozgatása","cutButton":"Elemek vágása","deleteButton":"Elemek törlése","drawCircleMarkerButton":"Kör jelölő rajzolása","snappingButton":"Kapcsolja a jelöltőt másik elemhez vagy ponthoz","pinningButton":"Közös pontok összekötése"}}'),da:JSON.parse('{"tooltips":{"placeMarker":"Tryk for at placere en markør","firstVertex":"Tryk for at placere det første punkt","continueLine":"Tryk for at fortsætte linjen","finishLine":"Tryk på et eksisterende punkt for at afslutte","finishPoly":"Tryk på det første punkt for at afslutte","finishRect":"Tryk for at afslutte","startCircle":"Tryk for at placere cirklens center","finishCircle":"Tryk for at afslutte cirklen","placeCircleMarker":"Tryk for at placere en cirkelmarkør"},"actions":{"finish":"Afslut","cancel":"Afbryd","removeLastVertex":"Fjern sidste punkt"},"buttonTitles":{"drawMarkerButton":"Placer markør","drawPolyButton":"Tegn polygon","drawLineButton":"Tegn linje","drawCircleButton":"Tegn cirkel","drawRectButton":"Tegn firkant","editButton":"Rediger","dragButton":"Træk","cutButton":"Klip","deleteButton":"Fjern","drawCircleMarkerButton":"Tegn cirkelmarkør","snappingButton":"Fastgør trukket markør til andre elementer","pinningButton":"Sammenlæg delte elementer"}}'),no:JSON.parse('{"tooltips":{"placeMarker":"Klikk for å plassere punkt","firstVertex":"Klikk for å plassere første punkt","continueLine":"Klikk for å tegne videre","finishLine":"Klikk på et eksisterende punkt for å fullføre","finishPoly":"Klikk første punkt for å fullføre","finishRect":"Klikk for å fullføre","startCircle":"Klikk for å sette sirkel midtpunkt","finishCircle":"Klikk for å fullføre sirkel","placeCircleMarker":"Klikk for å plassere sirkel"},"actions":{"finish":"Fullfør","cancel":"Kanseller","removeLastVertex":"Fjern forrige punkt"},"buttonTitles":{"drawMarkerButton":"Tegn Punkt","drawPolyButton":"Tegn Flate","drawLineButton":"Tegn Linje","drawCircleButton":"Tegn Sirkel","drawRectButton":"Tegn rektangel","editButton":"Rediger Objekter","dragButton":"Dra Objekter","cutButton":"Kutt Objekter","deleteButton":"Fjern Objekter","drawCircleMarkerButton":"Tegn sirkel-punkt","snappingButton":"Fest dratt punkt til andre objekter og punkt","pinningButton":"Pin delte punkt sammen"}}'),fa:JSON.parse('{"tooltips":{"placeMarker":"کلیک برای جانمایی نشان","firstVertex":"کلیک برای رسم اولین رأس","continueLine":"کلیک برای ادامه رسم","finishLine":"کلیک روی هر نشان موجود برای پایان","finishPoly":"کلیک روی اولین نشان برای پایان","finishRect":"کلیک برای پایان","startCircle":"کلیک برای رسم مرکز دایره","finishCircle":"کلیک برای پایان رسم دایره","placeCircleMarker":"کلیک برای رسم نشان دایره"},"actions":{"finish":"پایان","cancel":"لفو","removeLastVertex":"حذف آخرین رأس"},"buttonTitles":{"drawMarkerButton":"درج نشان","drawPolyButton":"رسم چندضلعی","drawLineButton":"رسم خط","drawCircleButton":"رسم دایره","drawRectButton":"رسم چهارضلعی","editButton":"ویرایش لایه‌ها","dragButton":"جابجایی لایه‌ها","cutButton":"برش لایه‌ها","deleteButton":"حذف لایه‌ها","drawCircleMarkerButton":"رسم نشان دایره","snappingButton":"نشانگر را به لایه‌ها و رئوس دیگر بکشید","pinningButton":"رئوس مشترک را با هم پین کنید","rotateButton":"چرخش لایه"}}'),ua:JSON.parse('{"tooltips":{"placeMarker":"Натисніть, щоб нанести маркер","firstVertex":"Натисніть, щоб нанести першу вершину","continueLine":"Натисніть, щоб продовжити малювати","finishLine":"Натисніть будь-який існуючий маркер для завершення","finishPoly":"Виберіть перший маркер, щоб завершити","finishRect":"Натисніть, щоб завершити","startCircle":"Натисніть, щоб додати центр кола","finishCircle":"Натисніть, щоб завершити коло","placeCircleMarker":"Натисніть, щоб нанести круговий маркер"},"actions":{"finish":"Завершити","cancel":"Відмінити","removeLastVertex":"Видалити попередню вершину"},"buttonTitles":{"drawMarkerButton":"Малювати маркер","drawPolyButton":"Малювати полігон","drawLineButton":"Малювати криву","drawCircleButton":"Малювати коло","drawRectButton":"Малювати прямокутник","editButton":"Редагувати шари","dragButton":"Перенести шари","cutButton":"Вирізати шари","deleteButton":"Видалити шари","drawCircleMarkerButton":"Малювати круговий маркер","snappingButton":"Прив’язати перетягнутий маркер до інших шарів та вершин","pinningButton":"Зв\'язати спільні вершини разом"}}'),tr:JSON.parse('{"tooltips":{"placeMarker":"İşaretçi yerleştirmek için tıklayın","firstVertex":"İlk tepe noktasını yerleştirmek için tıklayın","continueLine":"Çizime devam etmek için tıklayın","finishLine":"Bitirmek için mevcut herhangi bir işaretçiyi tıklayın","finishPoly":"Bitirmek için ilk işaretçiyi tıklayın","finishRect":"Bitirmek için tıklayın","startCircle":"Daire merkezine yerleştirmek için tıklayın","finishCircle":"Daireyi bitirmek için tıklayın","placeCircleMarker":"Daire işaretçisi yerleştirmek için tıklayın"},"actions":{"finish":"Bitir","cancel":"İptal","removeLastVertex":"Son köşeyi kaldır"},"buttonTitles":{"drawMarkerButton":"Çizim İşaretçisi","drawPolyButton":"Çokgenler çiz","drawLineButton":"Çoklu çizgi çiz","drawCircleButton":"Çember çiz","drawRectButton":"Dikdörtgen çiz","editButton":"Katmanları düzenle","dragButton":"Katmanları sürükle","cutButton":"Katmanları kes","deleteButton":"Katmanları kaldır","drawCircleMarkerButton":"Daire işaretçisi çiz","snappingButton":"Sürüklenen işaretçiyi diğer katmanlara ve köşelere yapıştır","pinningButton":"Paylaşılan köşeleri birbirine sabitle"}}'),cz:JSON.parse('{"tooltips":{"placeMarker":"Kliknutím vytvoříte značku","firstVertex":"Kliknutím vytvoříte první objekt","continueLine":"Kliknutím pokračujte v kreslení","finishLine":"Kliknutí na libovolnou existující značku pro dokončení","finishPoly":"Vyberte první bod pro dokončení","finishRect":"Klikněte pro dokončení","startCircle":"Kliknutím přidejte střed kruhu","finishCircle":"Нажмите, чтобы задать радиус","placeCircleMarker":"Kliknutím nastavte poloměr"},"actions":{"finish":"Dokončit","cancel":"Zrušit","removeLastVertex":"Zrušit poslední akci"},"buttonTitles":{"drawMarkerButton":"Přidat značku","drawPolyButton":"Nakreslit polygon","drawLineButton":"Nakreslit křivku","drawCircleButton":"Nakreslit kruh","drawRectButton":"Nakreslit obdélník","editButton":"Upravit vrstvu","dragButton":"Přeneste vrstvu","cutButton":"Vyjmout vrstvu","deleteButton":"Smazat vrstvu","drawCircleMarkerButton":"Přidat kruhovou značku","snappingButton":"Navázat tažnou značku k dalším vrstvám a vrcholům","pinningButton":"Spojit společné body dohromady"}}')};function m(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function y(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?m(Object(i),!0).forEach((function(e){v(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):m(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function v(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}const b={_globalEditModeEnabled:!1,enableGlobalEditMode:function(t){this._globalEditModeEnabled=!0,this.Toolbar.toggleButton("editMode",this.globalEditModeEnabled()),L.PM.Utils.findLayers(this.map).forEach((function(e){e.pm.enable(t)})),this.throttledReInitEdit||(this.throttledReInitEdit=L.Util.throttle(this.handleLayerAdditionInGlobalEditMode,100,this)),this._addedLayers={},this.map.on("layeradd",this._layerAdded,this),this.map.on("layeradd",this.throttledReInitEdit,this),this._fireGlobalEditModeToggled(!0)},disableGlobalEditMode:function(){this._globalEditModeEnabled=!1,L.PM.Utils.findLayers(this.map).forEach((function(t){t.pm.disable()})),this.map.off("layeradd",this.throttledReInitEdit,this),this.Toolbar.toggleButton("editMode",this.globalEditModeEnabled()),this._fireGlobalEditModeToggled(!1)},globalEditEnabled:function(){return this.globalEditModeEnabled()},globalEditModeEnabled:function(){return this._globalEditModeEnabled},toggleGlobalEditMode:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this.globalOptions;this.globalEditModeEnabled()?this.disableGlobalEditMode():this.enableGlobalEditMode(t)},handleLayerAdditionInGlobalEditMode:function(){var t=this._addedLayers;for(var e in this._addedLayers={},t){var i=t[e];this._isRelevantForEdit(i)&&this.globalEditModeEnabled()&&i.pm.enable(y({},this.globalOptions))}},_layerAdded:function(t){var e=t.layer;this._addedLayers[L.stamp(e)]=e},_isRelevantForEdit:function(t){return t.pm&&!(t instanceof L.LayerGroup)&&(!L.PM.optIn&&!t.options.pmIgnore||L.PM.optIn&&!1===t.options.pmIgnore)&&!t._pmTempLayer&&t.pm.options.allowEditing}};const k={_globalDragModeEnabled:!1,enableGlobalDragMode:function(){var t=L.PM.Utils.findLayers(this.map);this._globalDragModeEnabled=!0,this._addedLayersDrag={},t.forEach((function(t){t.pm.enableLayerDrag()})),this.throttledReInitDrag||(this.throttledReInitDrag=L.Util.throttle(this.reinitGlobalDragMode,100,this)),this.map.on("layeradd",this.throttledReInitDrag,this),this.map.on("layeradd",this._layerAddedDrag,this),this.Toolbar.toggleButton("dragMode",this.globalDragModeEnabled()),this._fireGlobalDragModeToggled(!0)},disableGlobalDragMode:function(){var t=L.PM.Utils.findLayers(this.map);this._globalDragModeEnabled=!1,t.forEach((function(t){t.pm.disableLayerDrag()})),this.map.off("layeradd",this.throttledReInitDrag,this),this.Toolbar.toggleButton("dragMode",this.globalDragModeEnabled()),this._fireGlobalDragModeToggled(!1)},globalDragModeEnabled:function(){return!!this._globalDragModeEnabled},toggleGlobalDragMode:function(){this.globalDragModeEnabled()?this.disableGlobalDragMode():this.enableGlobalDragMode()},reinitGlobalDragMode:function(){var t=this._addedLayersDrag;for(var e in this._addedLayersDrag={},t){var i=t[e];this._isRelevantForDrag(i)&&this.globalDragModeEnabled()&&i.pm.enableLayerDrag()}},_layerAddedDrag:function(t){var e=t.layer;this._addedLayersDrag[L.stamp(e)]=e},_isRelevantForDrag:function(t){return t.pm&&!(t instanceof L.LayerGroup)&&(!L.PM.optIn&&!t.options.pmIgnore||L.PM.optIn&&!1===t.options.pmIgnore)&&!t._pmTempLayer&&t.pm.options.draggable}};const M={_globalRemovalModeEnabled:!1,enableGlobalRemovalMode:function(){var t=this;this._globalRemovalModeEnabled=!0,this.map.eachLayer((function(e){t._isRelevantForRemoval(e)&&(e.pm.disable(),e.on("click",t.removeLayer,t))})),this.throttledReInitRemoval||(this.throttledReInitRemoval=L.Util.throttle(this.reinitGlobalRemovalMode,100,this)),this.map.on("layeradd",this.throttledReInitRemoval,this),this.Toolbar.toggleButton("removalMode",this.globalRemovalModeEnabled()),this._fireGlobalRemovalModeToggled(!0)},disableGlobalRemovalMode:function(){var t=this;this._globalRemovalModeEnabled=!1,this.map.eachLayer((function(e){e.off("click",t.removeLayer,t)})),this.map.off("layeradd",this.throttledReInitRemoval,this),this.Toolbar.toggleButton("removalMode",this.globalRemovalModeEnabled()),this._fireGlobalRemovalModeToggled(!1)},globalRemovalEnabled:function(){return this.globalRemovalModeEnabled()},globalRemovalModeEnabled:function(){return!!this._globalRemovalModeEnabled},toggleGlobalRemovalMode:function(){this.globalRemovalModeEnabled()?this.disableGlobalRemovalMode():this.enableGlobalRemovalMode()},reinitGlobalRemovalMode:function(t){var e=t.layer;this._isRelevantForRemoval(e)&&this.globalRemovalModeEnabled()&&(this.disableGlobalRemovalMode(),this.enableGlobalRemovalMode())},removeLayer:function(t){var e=t.target;this._isRelevantForRemoval(e)&&!e.pm.dragging()&&(e.removeFrom(this.map.pm._getContainingLayer()),e.remove(),e instanceof L.LayerGroup?(this._fireRemoveLayerGroup(e),this._fireRemoveLayerGroup(this.map,e)):(e.pm._fireRemove(e),e.pm._fireRemove(this.map,e)))},_isRelevantForRemoval:function(t){return t.pm&&!(t instanceof L.LayerGroup)&&(!L.PM.optIn&&!t.options.pmIgnore||L.PM.optIn&&!1===t.options.pmIgnore)&&!t._pmTempLayer&&t.pm.options.allowRemoval}};const x={_globalRotateModeEnabled:!1,enableGlobalRotateMode:function(){var t=this;this._globalRotateModeEnabled=!0,L.PM.Utils.findLayers(this.map).filter((function(t){return t instanceof L.Polyline})).forEach((function(e){t._isRelevantForRotate(e)&&e.pm.enableRotate()})),this.throttledReInitRotate||(this.throttledReInitRotate=L.Util.throttle(this._reinitGlobalRotateMode,100,this)),this.map.on("layeradd",this.throttledReInitRotate,this),this.Toolbar.toggleButton("rotateMode",this.globalRotateModeEnabled()),this._fireGlobalRotateModeToggled()},disableGlobalRotateMode:function(){this._globalRotateModeEnabled=!1,L.PM.Utils.findLayers(this.map).filter((function(t){return t instanceof L.Polyline})).forEach((function(t){t.pm.disableRotate()})),this.map.off("layeradd",this.throttledReInitRotate,this),this.Toolbar.toggleButton("rotateMode",this.globalRotateModeEnabled()),this._fireGlobalRotateModeToggled()},globalRotateModeEnabled:function(){return!!this._globalRotateModeEnabled},toggleGlobalRotateMode:function(){this.globalRotateModeEnabled()?this.disableGlobalRotateMode():this.enableGlobalRotateMode()},_reinitGlobalRotateMode:function(t){var e=t.layer;this._isRelevantForRotate(e)&&this.globalRotateModeEnabled()&&(this.disableGlobalRotateMode(),this.enableGlobalRotateMode())},_isRelevantForRotate:function(t){return t.pm&&!(t instanceof L.LayerGroup)&&(!L.PM.optIn&&!t.options.pmIgnore||L.PM.optIn&&!1===t.options.pmIgnore)&&!t._pmTempLayer&&t.pm.options.allowRotation}};function w(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function C(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?w(Object(i),!0).forEach((function(e){P(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):w(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function P(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var E={_fireDrawStart:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"Draw",e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};this.__fire(this._map,"pm:drawstart",{shape:this._shape,workingLayer:this._layer},t,e)},_fireDrawEnd:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"Draw",e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};this.__fire(this._map,"pm:drawend",{shape:this._shape},t,e)},_fireCreate:function(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"Draw",i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};this.__fire(this._map,"pm:create",{shape:this._shape,marker:t,layer:t},e,i)},_fireCenterPlaced:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"Draw",e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{},i="Draw"===t?this._layer:undefined,n="Draw"!==t?this._layer:undefined;this.__fire(this._layer,"pm:centerplaced",{shape:this._shape,workingLayer:i,layer:n,latlng:this._layer.getLatLng()},t,e)},_fireCut:function(t,e,i){var n=arguments.length>3&&arguments[3]!==undefined?arguments[3]:"Draw",r=arguments.length>4&&arguments[4]!==undefined?arguments[4]:{};this.__fire(t,"pm:cut",{shape:this._shape,layer:e,originalLayer:i},n,r)},_fireEdit:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this._layer,e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"Edit",i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};this.__fire(t,"pm:edit",{layer:this._layer,shape:this.getShape()},e,i)},_fireEnable:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"Edit",e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};this.__fire(this._layer,"pm:enable",{layer:this._layer,shape:this.getShape()},t,e)},_fireDisable:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"Edit",e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};this.__fire(this._layer,"pm:disable",{layer:this._layer,shape:this.getShape()},t,e)},_fireUpdate:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"Edit",e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};this.__fire(this._layer,"pm:update",{layer:this._layer,shape:this.getShape()},t,e)},_fireMarkerDragStart:function(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:undefined,i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"Edit",n=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};this.__fire(this._layer,"pm:markerdragstart",{layer:this._layer,markerEvent:t,shape:this.getShape(),indexPath:e},i,n)},_fireMarkerDrag:function(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:undefined,i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"Edit",n=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};this.__fire(this._layer,"pm:markerdrag",{layer:this._layer,markerEvent:t,shape:this.getShape(),indexPath:e},i,n)},_fireMarkerDragEnd:function(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:undefined,i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:undefined,n=arguments.length>3&&arguments[3]!==undefined?arguments[3]:"Edit",r=arguments.length>4&&arguments[4]!==undefined?arguments[4]:{};this.__fire(this._layer,"pm:markerdragend",{layer:this._layer,markerEvent:t,shape:this.getShape(),indexPath:e,intersectionReset:i},n,r)},_fireDragStart:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"Edit",e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};this.__fire(this._layer,"pm:dragstart",{layer:this._layer,shape:this.getShape()},t,e)},_fireDrag:function(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"Edit",i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};this.__fire(this._layer,"pm:drag",C(C({},t),{},{shape:this.getShape()}),e,i)},_fireDragEnd:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"Edit",e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};this.__fire(this._layer,"pm:dragend",{layer:this._layer,shape:this.getShape()},t,e)},_fireDragEnable:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"Edit",e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};this.__fire(this._layer,"pm:dragenable",{layer:this._layer,shape:this.getShape()},t,e)},_fireDragDisable:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"Edit",e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};this.__fire(this._layer,"pm:dragdisable",{layer:this._layer,shape:this.getShape()},t,e)},_fireRemove:function(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:t,i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"Edit",n=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};this.__fire(t,"pm:remove",{layer:e,shape:this.getShape()},i,n)},_fireVertexAdded:function(t,e,i){var n=arguments.length>3&&arguments[3]!==undefined?arguments[3]:"Edit",r=arguments.length>4&&arguments[4]!==undefined?arguments[4]:{};this.__fire(this._layer,"pm:vertexadded",{layer:this._layer,workingLayer:this._layer,marker:t,indexPath:e,latlng:i,shape:this.getShape()},n,r)},_fireVertexRemoved:function(t,e){var i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"Edit",n=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};this.__fire(this._layer,"pm:vertexremoved",{layer:this._layer,marker:t,indexPath:e,shape:this.getShape()},i,n)},_fireVertexClick:function(t,e){var i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"Edit",n=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};this.__fire(this._layer,"pm:vertexclick",{layer:this._layer,markerEvent:t,indexPath:e,shape:this.getShape()},i,n)},_fireIntersect:function(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"Edit",i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};this.__fire(this._layer,"pm:intersect",{layer:this._layer,intersection:t,shape:this.getShape()},e,i)},_fireLayerReset:function(t,e){var i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"Edit",n=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};this.__fire(this._layer,"pm:layerreset",{layer:this._layer,markerEvent:t,indexPath:e,shape:this.getShape()},i,n)},_fireChange:function(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"Edit",i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};this.__fire(this._layer,"pm:change",{layer:this._layer,latlngs:t,shape:this.getShape()},e,i)},_fireTextChange:function(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"Edit",i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};this.__fire(this._layer,"pm:textchange",{layer:this._layer,text:t,shape:this.getShape()},e,i)},_fireSnapDrag:function(t,e){var i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"Snapping",n=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};this.__fire(t,"pm:snapdrag",e,i,n)},_fireSnap:function(t,e){var i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"Snapping",n=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};this.__fire(t,"pm:snap",e,i,n)},_fireUnsnap:function(t,e){var i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"Snapping",n=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};this.__fire(t,"pm:unsnap",e,i,n)},_fireRotationEnable:function(t,e){var i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"Rotation",n=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};this.__fire(t,"pm:rotateenable",{layer:this._layer,helpLayer:this._rotatePoly,shape:this.getShape()},i,n)},_fireRotationDisable:function(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"Rotation",i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};this.__fire(t,"pm:rotatedisable",{layer:this._layer,shape:this.getShape()},e,i)},_fireRotationStart:function(t,e){var i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"Rotation",n=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};this.__fire(t,"pm:rotatestart",{layer:this._rotationLayer,helpLayer:this._layer,startAngle:this._startAngle,originLatLngs:e},i,n)},_fireRotation:function(t,e,i){var n=arguments.length>3&&arguments[3]!==undefined?arguments[3]:this._rotationLayer,r=arguments.length>4&&arguments[4]!==undefined?arguments[4]:"Rotation",a=arguments.length>5&&arguments[5]!==undefined?arguments[5]:{};this.__fire(t,"pm:rotate",{layer:n,helpLayer:this._layer,startAngle:this._startAngle,angle:n.pm.getAngle(),angleDiff:e,oldLatLngs:i,newLatLngs:n.getLatLngs()},r,a)},_fireRotationEnd:function(t,e,i){var n=arguments.length>3&&arguments[3]!==undefined?arguments[3]:"Rotation",r=arguments.length>4&&arguments[4]!==undefined?arguments[4]:{};this.__fire(t,"pm:rotateend",{layer:this._rotationLayer,helpLayer:this._layer,startAngle:e,angle:this._rotationLayer.pm.getAngle(),originLatLngs:i,newLatLngs:this._rotationLayer.getLatLngs()},n,r)},_fireActionClick:function(t,e,i){var n=arguments.length>3&&arguments[3]!==undefined?arguments[3]:"Toolbar",r=arguments.length>4&&arguments[4]!==undefined?arguments[4]:{};this.__fire(this._map,"pm:actionclick",{text:t.text,action:t,btnName:e,button:i},n,r)},_fireButtonClick:function(t,e){var i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"Toolbar",n=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};this.__fire(this._map,"pm:buttonclick",{btnName:t,button:e},i,n)},_fireLangChange:function(t,e,i,n){var r=arguments.length>4&&arguments[4]!==undefined?arguments[4]:"Global",a=arguments.length>5&&arguments[5]!==undefined?arguments[5]:{};this.__fire(this.map,"pm:langchange",{oldLang:t,activeLang:e,fallback:i,translations:n},r,a)},_fireGlobalDragModeToggled:function(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"Global",i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};this.__fire(this.map,"pm:globaldragmodetoggled",{enabled:t,map:this.map},e,i)},_fireGlobalEditModeToggled:function(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"Global",i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};this.__fire(this.map,"pm:globaleditmodetoggled",{enabled:t,map:this.map},e,i)},_fireGlobalRemovalModeToggled:function(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"Global",i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};this.__fire(this.map,"pm:globalremovalmodetoggled",{enabled:t,map:this.map},e,i)},_fireGlobalCutModeToggled:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"Global",e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};this.__fire(this._map,"pm:globalcutmodetoggled",{enabled:!!this._enabled,map:this._map},t,e)},_fireGlobalDrawModeToggled:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"Global",e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};this.__fire(this._map,"pm:globaldrawmodetoggled",{enabled:this._enabled,shape:this._shape,map:this._map},t,e)},_fireGlobalRotateModeToggled:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"Global",e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};this.__fire(this.map,"pm:globalrotatemodetoggled",{enabled:this.globalRotateModeEnabled(),map:this.map},t,e)},_fireRemoveLayerGroup:function(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:t,i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"Edit",n=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};this.__fire(t,"pm:remove",{layer:e,shape:undefined},i,n)},_fireKeyeventEvent:function(t,e,i){var n=arguments.length>3&&arguments[3]!==undefined?arguments[3]:"Global",r=arguments.length>4&&arguments[4]!==undefined?arguments[4]:{};this.__fire(this.map,"pm:keyevent",{event:t,eventType:e,focusOn:i},n,r)},__fire:function(t,e,i,n){var a=arguments.length>4&&arguments[4]!==undefined?arguments[4]:{};i=r()(i,a,{source:n}),L.PM.Utils._fireEvent(t,e,i)}};const S=E;const O={_lastEvents:{keydown:undefined,keyup:undefined,current:undefined},_initKeyListener:function(t){this.map=t,L.DomEvent.on(document,"keydown keyup",this._onKeyListener,this),L.DomEvent.on(window,"blur",this._onBlur,this)},_onKeyListener:function(t){var e="document";this.map.getContainer().contains(t.target)&&(e="map");var i={event:t,eventType:t.type,focusOn:e};this._lastEvents[t.type]=i,this._lastEvents.current=i,this.map.pm._fireKeyeventEvent(t,t.type,e)},_onBlur:function(t){t.altKey=!1;var e={event:t,eventType:t.type,focusOn:"document"};this._lastEvents[t.type]=e,this._lastEvents.current=e},getLastKeyEvent:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"current";return this._lastEvents[t]},isShiftKeyPressed:function(){var t;return null===(t=this._lastEvents.current)||void 0===t?void 0:t.event.shiftKey},isAltKeyPressed:function(){var t;return null===(t=this._lastEvents.current)||void 0===t?void 0:t.event.altKey},isCtrlKeyPressed:function(){var t;return null===(t=this._lastEvents.current)||void 0===t?void 0:t.event.ctrlKey},isMetaKeyPressed:function(){var t;return null===(t=this._lastEvents.current)||void 0===t?void 0:t.event.metaKey},getPressedKey:function(){var t;return null===(t=this._lastEvents.current)||void 0===t?void 0:t.event.key}};var D=i(7361),R=i.n(D),B=i(8721),T=i.n(B);function I(t){var e=L.PM.activeLang;return T()(_,e)||(e="en"),R()(_[e],t)}function j(t){return!function e(t){return t.filter((function(t){return![null,"",undefined].includes(t)})).reduce((function(t,i){return t.concat(Array.isArray(i)?e(i):i)}),[])}(t).length}function A(t){return t.reduce((function(t,e){return 0!==e.length&&t.push(Array.isArray(e)?A(e):e),t}),[])}function G(t,e,i){for(var n,r,a,o=6378137,s=6356752.3142,l=1/298.257223563,h=t.lng,u=t.lat,c=i,p=Math.PI,d=e*p/180,f=Math.sin(d),g=Math.cos(d),_=(1-l)*Math.tan(u*p/180),m=1/Math.sqrt(1+_*_),y=_*m,v=Math.atan2(_,g),b=m*f,k=1-b*b,M=k*(o*o-s*s)/(s*s),x=1+M/16384*(4096+M*(M*(320-175*M)-768)),w=M/1024*(256+M*(M*(74-47*M)-128)),C=c/(s*x),P=2*Math.PI;Math.abs(C-P)>1e-12;){n=Math.cos(2*v+C),P=C,C=c/(s*x)+w*(r=Math.sin(C))*(n+w/4*((a=Math.cos(C))*(2*n*n-1)-w/6*n*(4*r*r-3)*(4*n*n-3)))}var E=y*r-m*a*g,S=Math.atan2(y*a+m*r*g,(1-l)*Math.sqrt(b*b+E*E)),O=l/16*k*(4+l*(4-3*k)),D=h+180*(Math.atan2(r*f,m*a-y*r*g)-(1-O)*l*b*(C+O*r*(n+O*a*(2*n*n-1))))/p,R=180*S/p;return L.latLng(D,R)}function N(t,e,i,n){for(var r,a,o=!(arguments.length>4&&arguments[4]!==undefined)||arguments[4],s=[],l=0;l<i;l+=1){if(o)r=G(t,360*l/i+n,e),a=L.latLng(r.lng,r.lat);else{var h=t.lat+Math.cos(2*l*Math.PI/i)*e,u=t.lng+Math.sin(2*l*Math.PI/i)*e;a=L.latLng(h,u)}s.push(a)}return s}function z(t,e,i,n){var r=function(t,e,i){var n=t.latLngToContainerPoint(e),r=t.latLngToContainerPoint(i),a=180*Math.atan2(r.y-n.y,r.x-n.x)/Math.PI+90;return a+(a<0?360:0)}(t,e,i);return function(t,e,i){e=(e+360)%360;var n=Math.PI/180,r=180/Math.PI,a=6378137,o=t.lng*n,s=t.lat*n,l=e*n,h=Math.sin(s),u=Math.cos(s),c=Math.cos(i/a),p=Math.sin(i/a),d=Math.asin(h*c+u*p*Math.cos(l)),f=o+Math.atan2(Math.sin(l)*p*u,c-h*Math.sin(d));return f=(f*=r)>180?f-360:f<-180?f+360:f,L.latLng([d*r,f])}(e,r,n)}function U(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:t.getLatLngs();return t instanceof L.Polygon?L.polygon(e).getLatLngs():L.polyline(e).getLatLngs()}function F(t,e){var i,n;if(null!==(i=e.options.crs)&&void 0!==i&&null!==(n=i.projection)&&void 0!==n&&n.MAX_LATITUDE){var r,a,o=null===(r=e.options.crs)||void 0===r||null===(a=r.projection)||void 0===a?void 0:a.MAX_LATITUDE;t.lat=Math.max(Math.min(o,t.lat),-o)}return t}function V(t){return t.options.renderer||t._map&&(t._map._getPaneRenderer(t.options.pane)||t._map.options.renderer||t._map._renderer)||t._renderer}const K=L.Class.extend({includes:[b,k,M,x,S],initialize:function(t){this.map=t,this.Draw=new L.PM.Draw(t),this.Toolbar=new L.PM.Toolbar(t),this.Keyboard=O,this.globalOptions={snappable:!0,layerGroup:undefined,snappingOrder:["Marker","CircleMarker","Circle","Line","Polygon","Rectangle"],panes:{vertexPane:"markerPane",layerPane:"overlayPane",markerPane:"markerPane"},draggable:!0},this.Keyboard._initKeyListener(t)},setLang:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"en",e=arguments.length>1?arguments[1]:undefined,i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"en",n=L.PM.activeLang;e&&(_[t]=r()(_[i],e)),L.PM.activeLang=t,this.map.pm.Toolbar.reinit(),this._fireLangChange(n,t,i,_[t])},addControls:function(t){this.Toolbar.addControls(t)},removeControls:function(){this.Toolbar.removeControls()},toggleControls:function(){this.Toolbar.toggleControls()},controlsVisible:function(){return this.Toolbar.isVisible},enableDraw:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"Polygon",e=arguments.length>1?arguments[1]:undefined;"Poly"===t&&(t="Polygon"),this.Draw.enable(t,e)},disableDraw:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"Polygon";"Poly"===t&&(t="Polygon"),this.Draw.disable(t)},setPathOptions:function(t){var e=this,i=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{},n=i.ignoreShapes||[],r=i.merge||!1;this.map.pm.Draw.shapes.forEach((function(i){-1===n.indexOf(i)&&e.map.pm.Draw[i].setPathOptions(t,r)}))},getGlobalOptions:function(){return this.globalOptions},setGlobalOptions:function(t){var e=this,i=r()(this.globalOptions,t),n=!1;this.map.pm.Draw.CircleMarker.enabled()&&this.map.pm.Draw.CircleMarker.options.editable!==i.editable&&(this.map.pm.Draw.CircleMarker.disable(),n=!0),this.map.pm.Draw.shapes.forEach((function(t){e.map.pm.Draw[t].setOptions(i)})),n&&this.map.pm.Draw.CircleMarker.enable(),L.PM.Utils.findLayers(this.map).forEach((function(t){t.pm.setOptions(i)})),this.applyGlobalOptions(),this.globalOptions=i},applyGlobalOptions:function(){L.PM.Utils.findLayers(this.map).forEach((function(t){t.pm.enabled()&&t.pm.applyOptions()}))},globalDrawModeEnabled:function(){return!!this.Draw.getActiveShape()},globalCutModeEnabled:function(){return!!this.Draw.Cut.enabled()},enableGlobalCutMode:function(t){return this.Draw.Cut.enable(t)},toggleGlobalCutMode:function(t){return this.Draw.Cut.toggle(t)},disableGlobalCutMode:function(){return this.Draw.Cut.disable()},getGeomanLayers:function(){var t=arguments.length>0&&arguments[0]!==undefined&&arguments[0],e=L.PM.Utils.findLayers(this.map);if(!t)return e;var i=L.featureGroup();return i._pmTempLayer=!0,e.forEach((function(t){i.addLayer(t)})),i},getGeomanDrawLayers:function(){var t=arguments.length>0&&arguments[0]!==undefined&&arguments[0],e=L.PM.Utils.findLayers(this.map).filter((function(t){return!0===t._drawnByGeoman}));if(!t)return e;var i=L.featureGroup();return i._pmTempLayer=!0,e.forEach((function(t){i.addLayer(t)})),i},_getContainingLayer:function(){return this.globalOptions.layerGroup&&this.globalOptions.layerGroup instanceof L.LayerGroup?this.globalOptions.layerGroup:this.map},_isCRSSimple:function(){return this.map.options.crs===L.CRS.Simple},_touchEventCounter:0,_addTouchEvents:function(t){0===this._touchEventCounter&&(L.DomEvent.on(t,"touchmove",this._canvasTouchMove,this),L.DomEvent.on(t,"touchstart touchend touchcancel",this._canvasTouchClick,this)),this._touchEventCounter+=1},_removeTouchEvents:function(t){1===this._touchEventCounter&&(L.DomEvent.off(t,"touchmove",this._canvasTouchMove,this),L.DomEvent.off(t,"touchstart touchend touchcancel",this._canvasTouchClick,this)),this._touchEventCounter=this._touchEventCounter<=1?0:this._touchEventCounter-1},_canvasTouchMove:function(t){V(this.map)._onMouseMove(this._createMouseEvent("mousemove",t))},_canvasTouchClick:function(t){var e="";"touchstart"===t.type||"pointerdown"===t.type?e="mousedown":"touchend"===t.type||"pointerup"===t.type?e="mouseup":"touchcancel"!==t.type&&"pointercancel"!==t.type||(e="mouseup"),e&&V(this.map)._onClick(this._createMouseEvent(e,t))},_createMouseEvent:function(t,e){var i,n=e.touches[0]||e.changedTouches[0];try{i=new MouseEvent(t,{bubbles:e.bubbles,cancelable:e.cancelable,view:e.view,detail:n.detail,screenX:n.screenX,screenY:n.screenY,clientX:n.clientX,clientY:n.clientY,ctrlKey:e.ctrlKey,altKey:e.altKey,shiftKey:e.shiftKey,metaKey:e.metaKey,button:e.button,relatedTarget:e.relatedTarget})}catch(r){(i=document.createEvent("MouseEvents")).initMouseEvent(t,e.bubbles,e.cancelable,e.view,n.detail,n.screenX,n.screenY,n.clientX,n.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget)}return i}});function H(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function q(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?H(Object(i),!0).forEach((function(e){J(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):H(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function J(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}const Y=L.Control.extend({includes:[S],options:{position:"topleft"},initialize:function(t){this._button=q(q({},this.options),t)},onAdd:function(t){return this._map=t,this._map.pm.Toolbar.options.oneBlock?this._container=this._map.pm.Toolbar._createContainer(this.options.position):"edit"===this._button.tool?this._container=this._map.pm.Toolbar.editContainer:"options"===this._button.tool?this._container=this._map.pm.Toolbar.optionsContainer:"custom"===this._button.tool?this._container=this._map.pm.Toolbar.customContainer:this._container=this._map.pm.Toolbar.drawContainer,this.buttonsDomNode=this._makeButton(this._button),this._container.appendChild(this.buttonsDomNode),this._container},onRemove:function(){return this.buttonsDomNode.remove(),this._container},getText:function(){return this._button.text},getIconUrl:function(){return this._button.iconUrl},destroy:function(){this._button={},this._update()},toggle:function(t){return this._button.toggleStatus="boolean"==typeof t?t:!this._button.toggleStatus,this._applyStyleClasses(),this._button.toggleStatus},toggled:function(){return this._button.toggleStatus},onCreate:function(){this.toggle(!1)},disable:function(){this.toggle(!1),this._button.disabled=!0,this._updateDisabled()},enable:function(){this._button.disabled=!1,this._updateDisabled()},_triggerClick:function(t){t&&t.preventDefault(),this._button.disabled||(this._button.onClick(t,{button:this,event:t}),this._clicked(t),this._button.afterClick(t,{button:this,event:t}))},_makeButton:function(t){var e=this,i=this.options.position.indexOf("right")>-1?"pos-right":"",n=L.DomUtil.create("div","button-container  ".concat(i),this._container);t.title&&n.setAttribute("title",t.title);var r=L.DomUtil.create("a","leaflet-buttons-control-button",n);r.setAttribute("role","button"),r.setAttribute("tabindex","0"),r.href="#";var a=L.DomUtil.create("div","leaflet-pm-actions-container ".concat(i),n),o=t.actions,s={cancel:{text:I("actions.cancel"),onClick:function(){this._triggerClick()}},finishMode:{text:I("actions.finish"),onClick:function(){this._triggerClick()}},removeLastVertex:{text:I("actions.removeLastVertex"),onClick:function(){this._map.pm.Draw[t.jsClass]._removeLastVertex()}},finish:{text:I("actions.finish"),onClick:function(e){this._map.pm.Draw[t.jsClass]._finishShape(e)}}};o.forEach((function(n){var r,o="string"==typeof n?n:n.name;if(s[o])r=s[o];else{if(!n.text)return;r=n}var l=L.DomUtil.create("a","leaflet-pm-action ".concat(i," action-").concat(o),a);if(l.setAttribute("role","button"),l.setAttribute("tabindex","0"),l.href="#",l.innerHTML=r.text,L.DomEvent.disableClickPropagation(l),L.DomEvent.on(l,"click",L.DomEvent.stop),!t.disabled&&r.onClick){L.DomEvent.addListener(l,"click",(function(i){i.preventDefault();var n="",a=e._map.pm.Toolbar.buttons;for(var o in a)if(a[o]._button===t){n=o;break}e._fireActionClick(r,n,t)}),e),L.DomEvent.addListener(l,"click",r.onClick,e)}})),t.toggleStatus&&L.DomUtil.addClass(n,"active");var l=L.DomUtil.create("div","control-icon",r);return t.iconUrl&&l.setAttribute("src",t.iconUrl),t.className&&L.DomUtil.addClass(l,t.className),L.DomEvent.disableClickPropagation(r),L.DomEvent.on(r,"click",L.DomEvent.stop),t.disabled||(L.DomEvent.addListener(r,"click",this._onBtnClick,this),L.DomEvent.addListener(r,"click",this._triggerClick,this)),t.disabled&&(L.DomUtil.addClass(r,"pm-disabled"),r.setAttribute("aria-disabled","true")),n},_applyStyleClasses:function(){this._container&&(this._button.toggleStatus&&!1!==this._button.cssToggle?(L.DomUtil.addClass(this.buttonsDomNode,"active"),L.DomUtil.addClass(this._container,"activeChild")):(L.DomUtil.removeClass(this.buttonsDomNode,"active"),L.DomUtil.removeClass(this._container,"activeChild")))},_onBtnClick:function(){this._button.disableOtherButtons&&this._map.pm.Toolbar.triggerClickOnToggledButtons(this);var t="",e=this._map.pm.Toolbar.buttons;for(var i in e)if(e[i]._button===this._button){t=i;break}this._fireButtonClick(t,this._button)},_clicked:function(){this._button.doToggle&&this.toggle()},_updateDisabled:function(){if(this._container){var t="pm-disabled",e=this.buttonsDomNode.children[0];this._button.disabled?(L.DomUtil.addClass(e,t),e.setAttribute("aria-disabled","true"),L.DomEvent.off(e,"click",this._triggerClick,this),L.DomEvent.off(e,"click",this._onBtnClick,this)):(L.DomUtil.removeClass(e,t),e.setAttribute("aria-disabled","false"),L.DomEvent.on(e,"click",this._triggerClick,this),L.DomEvent.on(e,"click",this._onBtnClick,this))}}});function X(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function Z(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?X(Object(i),!0).forEach((function(e){$(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):X(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function $(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function W(t){return W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},W(t)}L.Control.PMButton=Y;const Q=L.Class.extend({options:{drawMarker:!0,drawRectangle:!0,drawPolyline:!0,drawPolygon:!0,drawCircle:!0,drawCircleMarker:!0,drawText:!0,editMode:!0,dragMode:!0,cutPolygon:!0,removalMode:!0,rotateMode:!0,snappingOption:!0,drawControls:!0,editControls:!0,optionsControls:!0,customControls:!0,oneBlock:!1,position:"topleft",positions:{draw:"",edit:"",options:"",custom:""}},customButtons:[],initialize:function(t){this.init(t)},reinit:function(){var t=this.isVisible;this.removeControls(),this._defineButtons(),t&&this.addControls()},init:function(t){this.map=t,this.buttons={},this.isVisible=!1,this.drawContainer=L.DomUtil.create("div","leaflet-pm-toolbar leaflet-pm-draw leaflet-bar leaflet-control"),this.editContainer=L.DomUtil.create("div","leaflet-pm-toolbar leaflet-pm-edit leaflet-bar leaflet-control"),this.optionsContainer=L.DomUtil.create("div","leaflet-pm-toolbar leaflet-pm-options leaflet-bar leaflet-control"),this.customContainer=L.DomUtil.create("div","leaflet-pm-toolbar leaflet-pm-custom leaflet-bar leaflet-control"),this._defineButtons()},_createContainer:function(t){var e="".concat(t,"Container");return this[e]||(this[e]=L.DomUtil.create("div","leaflet-pm-toolbar leaflet-pm-".concat(t," leaflet-bar leaflet-control"))),this[e]},getButtons:function(){return this.buttons},addControls:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this.options;"undefined"!=typeof t.editPolygon&&(t.editMode=t.editPolygon),"undefined"!=typeof t.deleteLayer&&(t.removalMode=t.deleteLayer),L.Util.setOptions(this,t),this.applyIconStyle(),this.isVisible=!0,this._showHideButtons()},applyIconStyle:function(){var t=this.getButtons(),e={geomanIcons:{drawMarker:"control-icon leaflet-pm-icon-marker",drawPolyline:"control-icon leaflet-pm-icon-polyline",drawRectangle:"control-icon leaflet-pm-icon-rectangle",drawPolygon:"control-icon leaflet-pm-icon-polygon",drawCircle:"control-icon leaflet-pm-icon-circle",drawCircleMarker:"control-icon leaflet-pm-icon-circle-marker",editMode:"control-icon leaflet-pm-icon-edit",dragMode:"control-icon leaflet-pm-icon-drag",cutPolygon:"control-icon leaflet-pm-icon-cut",removalMode:"control-icon leaflet-pm-icon-delete",drawText:"control-icon leaflet-pm-icon-text"}};for(var i in t){var n=t[i];L.Util.setOptions(n,{className:e.geomanIcons[i]})}},removeControls:function(){var t=this.getButtons();for(var e in t)t[e].remove();this.isVisible=!1},toggleControls:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this.options;this.isVisible?this.removeControls():this.addControls(t)},_addButton:function(t,e){return this.buttons[t]=e,this.options[t]=this.options[t]||!1,this.buttons[t]},triggerClickOnToggledButtons:function(t){var e=["snappingOption"];for(var i in this.buttons)!e.includes(i)&&this.buttons[i]!==t&&this.buttons[i].toggled()&&this.buttons[i]._triggerClick()},toggleButton:function(t,e){var i=!(arguments.length>2&&arguments[2]!==undefined)||arguments[2];return"editPolygon"===t&&(t="editMode"),"deleteLayer"===t&&(t="removalMode"),i&&this.triggerClickOnToggledButtons(this.buttons[t]),!!this.buttons[t]&&this.buttons[t].toggle(e)},_defineButtons:function(){var t=this,e={className:"control-icon leaflet-pm-icon-marker",title:I("buttonTitles.drawMarkerButton"),jsClass:"Marker",onClick:function(){},afterClick:function(e,i){t.map.pm.Draw[i.button._button.jsClass].toggle()},doToggle:!0,toggleStatus:!1,disableOtherButtons:!0,position:this.options.position,actions:["cancel"]},i={title:I("buttonTitles.drawPolyButton"),className:"control-icon leaflet-pm-icon-polygon",jsClass:"Polygon",onClick:function(){},afterClick:function(e,i){t.map.pm.Draw[i.button._button.jsClass].toggle()},doToggle:!0,toggleStatus:!1,disableOtherButtons:!0,position:this.options.position,actions:["finish","removeLastVertex","cancel"]},n={className:"control-icon leaflet-pm-icon-polyline",title:I("buttonTitles.drawLineButton"),jsClass:"Line",onClick:function(){},afterClick:function(e,i){t.map.pm.Draw[i.button._button.jsClass].toggle()},doToggle:!0,toggleStatus:!1,disableOtherButtons:!0,position:this.options.position,actions:["finish","removeLastVertex","cancel"]},r={title:I("buttonTitles.drawCircleButton"),className:"control-icon leaflet-pm-icon-circle",jsClass:"Circle",onClick:function(){},afterClick:function(e,i){t.map.pm.Draw[i.button._button.jsClass].toggle()},doToggle:!0,toggleStatus:!1,disableOtherButtons:!0,position:this.options.position,actions:["cancel"]},a={title:I("buttonTitles.drawCircleMarkerButton"),className:"control-icon leaflet-pm-icon-circle-marker",jsClass:"CircleMarker",onClick:function(){},afterClick:function(e,i){t.map.pm.Draw[i.button._button.jsClass].toggle()},doToggle:!0,toggleStatus:!1,disableOtherButtons:!0,position:this.options.position,actions:["cancel"]},o={title:I("buttonTitles.drawRectButton"),className:"control-icon leaflet-pm-icon-rectangle",jsClass:"Rectangle",onClick:function(){},afterClick:function(e,i){t.map.pm.Draw[i.button._button.jsClass].toggle()},doToggle:!0,toggleStatus:!1,disableOtherButtons:!0,position:this.options.position,actions:["cancel"]},s={title:I("buttonTitles.editButton"),className:"control-icon leaflet-pm-icon-edit",onClick:function(){},afterClick:function(){t.map.pm.toggleGlobalEditMode()},doToggle:!0,toggleStatus:!1,disableOtherButtons:!0,position:this.options.position,tool:"edit",actions:["finishMode"]},l={title:I("buttonTitles.dragButton"),className:"control-icon leaflet-pm-icon-drag",onClick:function(){},afterClick:function(){t.map.pm.toggleGlobalDragMode()},doToggle:!0,toggleStatus:!1,disableOtherButtons:!0,position:this.options.position,tool:"edit",actions:["finishMode"]},h={title:I("buttonTitles.cutButton"),className:"control-icon leaflet-pm-icon-cut",jsClass:"Cut",onClick:function(){},afterClick:function(e,i){t.map.pm.Draw[i.button._button.jsClass].toggle({snappable:!0,cursorMarker:!0,allowSelfIntersection:!1})},doToggle:!0,toggleStatus:!1,disableOtherButtons:!0,position:this.options.position,tool:"edit",actions:["finish","removeLastVertex","cancel"]},u={title:I("buttonTitles.deleteButton"),className:"control-icon leaflet-pm-icon-delete",onClick:function(){},afterClick:function(){t.map.pm.toggleGlobalRemovalMode()},doToggle:!0,toggleStatus:!1,disableOtherButtons:!0,position:this.options.position,tool:"edit",actions:["finishMode"]},c={title:I("buttonTitles.rotateButton"),className:"control-icon leaflet-pm-icon-rotate",onClick:function(){},afterClick:function(){t.map.pm.toggleGlobalRotateMode()},doToggle:!0,toggleStatus:!1,disableOtherButtons:!0,position:this.options.position,tool:"edit",actions:["finishMode"]},p={className:"control-icon leaflet-pm-icon-text",title:I("buttonTitles.drawTextButton"),jsClass:"Text",onClick:function(){},afterClick:function(e,i){t.map.pm.Draw[i.button._button.jsClass].toggle()},doToggle:!0,toggleStatus:!1,disableOtherButtons:!0,position:this.options.position,actions:["cancel"]};this._addButton("drawMarker",new L.Control.PMButton(e)),this._addButton("drawPolyline",new L.Control.PMButton(n)),this._addButton("drawRectangle",new L.Control.PMButton(o)),this._addButton("drawPolygon",new L.Control.PMButton(i)),this._addButton("drawCircle",new L.Control.PMButton(r)),this._addButton("drawCircleMarker",new L.Control.PMButton(a)),this._addButton("drawText",new L.Control.PMButton(p)),this._addButton("editMode",new L.Control.PMButton(s)),this._addButton("dragMode",new L.Control.PMButton(l)),this._addButton("cutPolygon",new L.Control.PMButton(h)),this._addButton("removalMode",new L.Control.PMButton(u)),this._addButton("rotateMode",new L.Control.PMButton(c))},_showHideButtons:function(){if(this.isVisible){this.removeControls(),this.isVisible=!0;var t=this.getButtons(),e=[];for(var i in!1===this.options.drawControls&&(e=e.concat(Object.keys(t).filter((function(e){return!t[e]._button.tool})))),!1===this.options.editControls&&(e=e.concat(Object.keys(t).filter((function(e){return"edit"===t[e]._button.tool})))),!1===this.options.optionsControls&&(e=e.concat(Object.keys(t).filter((function(e){return"options"===t[e]._button.tool})))),!1===this.options.customControls&&(e=e.concat(Object.keys(t).filter((function(e){return"custom"===t[e]._button.tool})))),t)if(this.options[i]&&-1===e.indexOf(i)){var n=t[i]._button.tool;n||(n="draw"),t[i].setPosition(this._getBtnPosition(n)),t[i].addTo(this.map)}}},_getBtnPosition:function(t){return this.options.positions&&this.options.positions[t]?this.options.positions[t]:this.options.position},setBlockPosition:function(t,e){this.options.positions[t]=e,this._showHideButtons(),this.changeControlOrder()},getBlockPositions:function(){return this.options.positions},copyDrawControl:function(t,e){if(!e)throw new TypeError("Button has no name");"object"!==W(e)&&(e={name:e});var i=this._btnNameMapping(t);if(!e.name)throw new TypeError("Button has no name");if(this.buttons[e.name])throw new TypeError("Button with this name already exists");var n=this.map.pm.Draw.createNewDrawInstance(e.name,i);return e=Z(Z({},this.buttons[i]._button),e),{drawInstance:n,control:this.createCustomControl(e)}},createCustomControl:function(t){if(!t.name)throw new TypeError("Button has no name");if(this.buttons[t.name])throw new TypeError("Button with this name already exists");t.onClick||(t.onClick=function(){}),t.afterClick||(t.afterClick=function(){}),!1!==t.toggle&&(t.toggle=!0),t.block&&(t.block=t.block.toLowerCase()),t.block&&"draw"!==t.block||(t.block=""),t.className?-1===t.className.indexOf("control-icon")&&(t.className="control-icon ".concat(t.className)):t.className="control-icon";var e={tool:t.block,className:t.className,title:t.title||"",jsClass:t.name,onClick:t.onClick,afterClick:t.afterClick,doToggle:t.toggle,toggleStatus:!1,disableOtherButtons:!0,cssToggle:t.toggle,position:this.options.position,actions:t.actions||[],disabled:!!t.disabled};!1!==this.options[t.name]&&(this.options[t.name]=!0);var i=this._addButton(t.name,new L.Control.PMButton(e));return this.changeControlOrder(),i},changeControlOrder:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[],e=this._shapeMapping(),i=[];t.forEach((function(t){e[t]?i.push(e[t]):i.push(t)}));var n=this.getButtons(),r={};i.forEach((function(t){n[t]&&(r[t]=n[t])}));var a=Object.keys(n).filter((function(t){return!n[t]._button.tool}));a.forEach((function(t){-1===i.indexOf(t)&&(r[t]=n[t])}));var o=Object.keys(n).filter((function(t){return"edit"===n[t]._button.tool}));o.forEach((function(t){-1===i.indexOf(t)&&(r[t]=n[t])}));var s=Object.keys(n).filter((function(t){return"options"===n[t]._button.tool}));s.forEach((function(t){-1===i.indexOf(t)&&(r[t]=n[t])}));var l=Object.keys(n).filter((function(t){return"custom"===n[t]._button.tool}));l.forEach((function(t){-1===i.indexOf(t)&&(r[t]=n[t])})),Object.keys(n).forEach((function(t){-1===i.indexOf(t)&&(r[t]=n[t])})),this.map.pm.Toolbar.buttons=r,this._showHideButtons()},getControlOrder:function(){var t=this.getButtons(),e=[];for(var i in t)e.push(i);return e},changeActionsOfControl:function(t,e){var i=this._btnNameMapping(t);if(!i)throw new TypeError("No name passed");if(!e)throw new TypeError("No actions passed");if(!this.buttons[i])throw new TypeError("Button with this name not exists");this.buttons[i]._button.actions=e,this.changeControlOrder()},setButtonDisabled:function(t,e){var i=this._btnNameMapping(t);e?this.buttons[i].disable():this.buttons[i].enable()},_shapeMapping:function(){return{Marker:"drawMarker",Circle:"drawCircle",Polygon:"drawPolygon",Rectangle:"drawRectangle",Polyline:"drawPolyline",Line:"drawPolyline",CircleMarker:"drawCircleMarker",Edit:"editMode",Drag:"dragMode",Cut:"cutPolygon",Removal:"removalMode",Rotate:"rotateMode",Text:"drawText"}},_btnNameMapping:function(t){var e=this._shapeMapping();return e[t]?e[t]:t}});function tt(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function et(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?tt(Object(i),!0).forEach((function(e){it(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):tt(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function it(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var nt={_initSnappableMarkers:function(){this.options.snapDistance=this.options.snapDistance||30,this.options.snapSegment=this.options.snapSegment===undefined||this.options.snapSegment,this._assignEvents(this._markers),this._layer.off("pm:dragstart",this._unsnap,this),this._layer.on("pm:dragstart",this._unsnap,this)},_disableSnapping:function(){this._layer.off("pm:dragstart",this._unsnap,this)},_assignEvents:function(t){var e=this;t.forEach((function(t){Array.isArray(t)?e._assignEvents(t):(t.off("drag",e._handleSnapping,e),t.on("drag",e._handleSnapping,e),t.off("dragend",e._cleanupSnapping,e),t.on("dragend",e._cleanupSnapping,e))}))},_cleanupSnapping:function(){delete this._snapList,this.throttledList&&(this._map.off("layeradd",this.throttledList,this),this.throttledList=undefined),this._map.off("pm:remove",this._handleSnapLayerRemoval,this),this.debugIndicatorLines&&this.debugIndicatorLines.forEach((function(t){t.remove()}))},_handleThrottleSnapping:function(){this.throttledList&&this._createSnapList()},_handleSnapping:function(t){var e=this,i=t.target;if(i._snapped=!1,this.throttledList||(this.throttledList=L.Util.throttle(this._handleThrottleSnapping,100,this)),this._map.pm.Keyboard.isAltKeyPressed())return!1;if(this._snapList===undefined&&(this._createSnapList(),this._map.off("layeradd",this.throttledList,this),this._map.on("layeradd",this.throttledList,this)),this._snapList.length<=0)return!1;var n=this._calcClosestLayer(i.getLatLng(),this._snapList);if(0===Object.keys(n).length)return!1;var r,a=n.layer instanceof L.Marker||n.layer instanceof L.CircleMarker||!this.options.snapSegment;r=a?n.latlng:this._checkPrioritiySnapping(n);var o=this.options.snapDistance,s={marker:i,shape:this._shape,snapLatLng:r,segment:n.segment,layer:this._layer,workingLayer:this._layer,layerInteractedWith:n.layer,distance:n.distance};if(this._fireSnapDrag(s.marker,s),this._fireSnapDrag(this._layer,s),n.distance<o){i._orgLatLng=i.getLatLng(),i.setLatLng(r),i._snapped=!0,i._snapInfo=s;var l=this._snapLatLng||{},h=r||{};l.lat===h.lat&&l.lng===h.lng||(e._snapLatLng=r,e._fireSnap(i,s),e._fireSnap(e._layer,s))}else this._snapLatLng&&(this._unsnap(s),i._snapped=!1,this._fireUnsnap(s.marker,s),this._fireUnsnap(this._layer,s));return!0},_createSnapList:function(){var t=this,e=[],i=[],n=this._map;n.off("pm:remove",this._handleSnapLayerRemoval,this),n.on("pm:remove",this._handleSnapLayerRemoval,this),n.eachLayer((function(t){if((t instanceof L.Polyline||t instanceof L.Marker||t instanceof L.CircleMarker||t instanceof L.ImageOverlay)&&!0!==t.options.snapIgnore){if(t.options.snapIgnore===undefined&&(!L.PM.optIn&&!0===t.options.pmIgnore||L.PM.optIn&&!1!==t.options.pmIgnore))return;(t instanceof L.Circle||t instanceof L.CircleMarker)&&t.pm&&t.pm._hiddenPolyCircle?e.push(t.pm._hiddenPolyCircle):t instanceof L.ImageOverlay&&(t=L.rectangle(t.getBounds())),e.push(t);var n=L.polyline([],{color:"red",pmIgnore:!0});n._pmTempLayer=!0,i.push(n),(t instanceof L.Circle||t instanceof L.CircleMarker)&&i.push(n)}})),e=(e=(e=e.filter((function(e){return t._layer!==e}))).filter((function(t){return t._latlng||t._latlngs&&!j(t._latlngs)}))).filter((function(t){return!t._pmTempLayer})),this._otherSnapLayers?(this._otherSnapLayers.forEach((function(){var t=L.polyline([],{color:"red",pmIgnore:!0});t._pmTempLayer=!0,i.push(t)})),this._snapList=e.concat(this._otherSnapLayers)):this._snapList=e,this.debugIndicatorLines=i},_handleSnapLayerRemoval:function(t){var e=t.layer,i=this._snapList.findIndex((function(t){return t._leaflet_id===e._leaflet_id}));this._snapList.splice(i,1)},_calcClosestLayer:function(t,e){var i=this,n=[],r={};return e.forEach((function(e,a){if(!e._parentCopy||e._parentCopy!==i._layer){var o=i._calcLayerDistances(t,e);i.debugIndicatorLines[a]&&i.debugIndicatorLines[a].setLatLngs([t,o.latlng]),(r.distance===undefined||o.distance<=r.distance)&&(o.distance<r.distance&&(n=[]),(r=o).layer=e,n.push(r))}})),this._getClosestLayerByPriority(n)},_calcLayerDistances:function(t,e){var i,n,r,a=this,o=this._map,s=e instanceof L.Marker||e instanceof L.CircleMarker,l=e instanceof L.Polygon,h=t,u=s?e.getLatLng():e.getLatLngs();if(s)return{latlng:et({},u),distance:this._getDistance(o,u,h)};return function c(t){t.forEach((function(e,s){if(Array.isArray(e))c(e);else if(a.options.snapSegment){var u,p=e;u=l?s+1===t.length?0:s+1:s+1===t.length?undefined:s+1;var d=t[u];if(d){var f=a._getDistanceToSegment(o,h,p,d);(n===undefined||f<n)&&(n=f,r=[p,d])}}else{var g=a._getDistance(o,h,e);(n===undefined||g<n)&&(n=g,i=e)}}))}(u),this.options.snapSegment?{latlng:et({},this._getClosestPointOnSegment(o,t,r[0],r[1])),segment:r,distance:n}:{latlng:i,distance:n}},_getClosestLayerByPriority:function(t){t=t.sort((function(t,e){return t._leaflet_id-e._leaflet_id}));var e=this._map.pm.globalOptions.snappingOrder||[],i=0,n={};return e.concat(["Marker","CircleMarker","Circle","Line","Polygon","Rectangle"]).forEach((function(t){n[t]||(i+=1,n[t]=i)})),t.sort(function(t,e){var i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"asc";if(!e||0===Object.keys(e).length)return function(t,e){return t-e};for(var n,r=Object.keys(e),a=r.length-1,o={};a>=0;)n=r[a],o[n.toLowerCase()]=e[n],a-=1;function s(t){return t instanceof L.Marker?"Marker":t instanceof L.Circle?"Circle":t instanceof L.CircleMarker?"CircleMarker":t instanceof L.Rectangle?"Rectangle":t instanceof L.Polygon?"Polygon":t instanceof L.Polyline?"Line":undefined}return function(e,n){var r,a;if("instanceofShape"===t){if(r=s(e.layer).toLowerCase(),a=s(n.layer).toLowerCase(),!r||!a)return 0}else{if(!e.hasOwnProperty(t)||!n.hasOwnProperty(t))return 0;r=e[t].toLowerCase(),a=n[t].toLowerCase()}var l=r in o?o[r]:Number.MAX_SAFE_INTEGER,h=a in o?o[a]:Number.MAX_SAFE_INTEGER,u=0;return l<h?u=-1:l>h&&(u=1),"desc"===i?-1*u:u}}("instanceofShape",n)),t[0]||{}},_checkPrioritiySnapping:function(t){var e=this._map,i=t.segment[0],n=t.segment[1],r=t.latlng,a=this._getDistance(e,i,r),o=this._getDistance(e,n,r),s=a<o?i:n,l=a<o?a:o;if(this.options.snapMiddle){var h=L.PM.Utils.calcMiddleLatLng(e,i,n),u=this._getDistance(e,h,r);u<a&&u<o&&(s=h,l=u)}return et({},l<this.options.snapDistance?s:r)},_unsnap:function(){delete this._snapLatLng},_getClosestPointOnSegment:function(t,e,i,n){var r=t.getMaxZoom();r===Infinity&&(r=t.getZoom());var a=t.project(e,r),o=t.project(i,r),s=t.project(n,r),l=L.LineUtil.closestPointOnSegment(a,o,s);return t.unproject(l,r)},_getDistanceToSegment:function(t,e,i,n){var r=t.latLngToLayerPoint(e),a=t.latLngToLayerPoint(i),o=t.latLngToLayerPoint(n);return L.LineUtil.pointToSegmentDistance(r,a,o)},_getDistance:function(t,e,i){return t.latLngToLayerPoint(e).distanceTo(t.latLngToLayerPoint(i))}};const rt=nt;const at=L.Class.extend({includes:[rt,S],options:{snappable:!0,snapDistance:20,snapMiddle:!1,allowSelfIntersection:!0,tooltips:!0,templineStyle:{},hintlineStyle:{color:"#3388ff",dashArray:"5,5"},pathOptions:null,cursorMarker:!0,finishOn:null,markerStyle:{draggable:!0,icon:L.icon()},hideMiddleMarkers:!1,minRadiusCircle:null,maxRadiusCircle:null,minRadiusCircleMarker:null,maxRadiusCircleMarker:null,editable:!1,markerEditable:!0,continueDrawing:!1,snapSegment:!0,requireSnapToFinish:!1},setOptions:function(t){L.Util.setOptions(this,t)},getOptions:function(){return this.options},initialize:function(t){var e=this,i=new L.Icon.Default;i.options.tooltipAnchor=[0,0],this.options.markerStyle.icon=i,this._map=t,this.shapes=["Marker","CircleMarker","Line","Polygon","Rectangle","Circle","Cut","Text"],this.shapes.forEach((function(t){e[t]=new L.PM.Draw[t](e._map)})),this.Marker.setOptions({continueDrawing:!0}),this.CircleMarker.setOptions({continueDrawing:!0})},setPathOptions:function(t){var e=arguments.length>1&&arguments[1]!==undefined&&arguments[1];this.options.pathOptions=e?r()(this.options.pathOptions,t):t},getShapes:function(){return this.shapes},getShape:function(){return this._shape},enable:function(t,e){if(!t)throw new Error("Error: Please pass a shape as a parameter. Possible shapes are: ".concat(this.getShapes().join(",")));this.disable(),this[t].enable(e)},disable:function(){var t=this;this.shapes.forEach((function(e){t[e].disable()}))},addControls:function(){var t=this;this.shapes.forEach((function(e){t[e].addButton()}))},getActiveShape:function(){var t,e=this;return this.shapes.forEach((function(i){e[i]._enabled&&(t=i)})),t},_setGlobalDrawMode:function(){"Cut"===this._shape?this._fireGlobalCutModeToggled():this._fireGlobalDrawModeToggled();var t=L.PM.Utils.findLayers(this._map);this._enabled?t.forEach((function(t){L.PM.Utils.disablePopup(t)})):t.forEach((function(t){L.PM.Utils.enablePopup(t)}))},createNewDrawInstance:function(t,e){var i=this._getShapeFromBtnName(e);if(this[t])throw new TypeError("Draw Type already exists");if(!L.PM.Draw[i])throw new TypeError("There is no class L.PM.Draw.".concat(i));return this[t]=new L.PM.Draw[i](this._map),this[t].toolbarButtonName=t,this[t]._shape=t,this.shapes.push(t),this[e]&&this[t].setOptions(this[e].options),this[t].setOptions(this[t].options),this[t]},_getShapeFromBtnName:function(t){var e={drawMarker:"Marker",drawCircle:"Circle",drawPolygon:"Polygon",drawPolyline:"Line",drawRectangle:"Rectangle",drawCircleMarker:"CircleMarker",editMode:"Edit",dragMode:"Drag",cutPolygon:"Cut",removalMode:"Removal",rotateMode:"Rotate",drawText:"Text"};return e[t]?e[t]:this[t]?this[t]._shape:t},_finishLayer:function(t){t.pm&&(t.pm.setOptions(this.options),t.pm._shape=this._shape,t.pm._map=this._map),this._addDrawnLayerProp(t)},_addDrawnLayerProp:function(t){t._drawnByGeoman=!0},_setPane:function(t,e){"layerPane"===e?t.options.pane=this._map.pm.globalOptions.panes&&this._map.pm.globalOptions.panes.layerPane||"overlayPane":"vertexPane"===e?t.options.pane=this._map.pm.globalOptions.panes&&this._map.pm.globalOptions.panes.vertexPane||"markerPane":"markerPane"===e&&(t.options.pane=this._map.pm.globalOptions.panes&&this._map.pm.globalOptions.panes.markerPane||"markerPane")},_isFirstLayer:function(){return 0===(this._map||this._layer._map).pm.getGeomanLayers().length}});at.Marker=at.extend({initialize:function(t){this._map=t,this._shape="Marker",this.toolbarButtonName="drawMarker"},enable:function(t){var e=this;L.Util.setOptions(this,t),this._enabled=!0,this._map.on("click",this._createMarker,this),this._map.pm.Toolbar.toggleButton(this.toolbarButtonName,!0),this._hintMarker=L.marker([0,0],this.options.markerStyle),this._setPane(this._hintMarker,"markerPane"),this._hintMarker._pmTempLayer=!0,this._hintMarker.addTo(this._map),this.options.tooltips&&this._hintMarker.bindTooltip(I("tooltips.placeMarker"),{permanent:!0,offset:L.point(0,10),direction:"bottom",opacity:.8}).openTooltip(),this._layer=this._hintMarker,this._map.on("mousemove",this._syncHintMarker,this),this.options.markerEditable&&this._map.eachLayer((function(t){e.isRelevantMarker(t)&&t.pm.enable()})),this._fireDrawStart(),this._setGlobalDrawMode()},disable:function(){var t=this;this._enabled&&(this._enabled=!1,this._map.off("click",this._createMarker,this),this._hintMarker.remove(),this._map.off("mousemove",this._syncHintMarker,this),this._map.eachLayer((function(e){t.isRelevantMarker(e)&&e.pm.disable()})),this._map.pm.Toolbar.toggleButton(this.toolbarButtonName,!1),this.options.snappable&&this._cleanupSnapping(),this._fireDrawEnd(),this._setGlobalDrawMode())},enabled:function(){return this._enabled},toggle:function(t){this.enabled()?this.disable():this.enable(t)},isRelevantMarker:function(t){return t instanceof L.Marker&&t.pm&&!t._pmTempLayer&&!t.pm._initTextMarker},_syncHintMarker:function(t){if(this._hintMarker.setLatLng(t.latlng),this.options.snappable){var e=t;e.target=this._hintMarker,this._handleSnapping(e)}this._fireChange(this._hintMarker.getLatLng(),"Draw")},_createMarker:function(t){if(t.latlng&&(!this.options.requireSnapToFinish||this._hintMarker._snapped||this._isFirstLayer())){this._hintMarker._snapped||this._hintMarker.setLatLng(t.latlng);var e=this._hintMarker.getLatLng(),i=new L.Marker(e,this.options.markerStyle);this._setPane(i,"markerPane"),this._finishLayer(i),i.pm||(i.options.draggable=!1),i.addTo(this._map.pm._getContainingLayer()),i.pm&&this.options.markerEditable?i.pm.enable():i.dragging&&i.dragging.disable(),this._fireCreate(i),this._cleanupSnapping(),this.options.continueDrawing||this.disable()}}});var ot=6371008.8,st={centimeters:637100880,centimetres:637100880,degrees:57.22891354143274,feet:20902260.511392,inches:39.37*ot,kilometers:6371.0088,kilometres:6371.0088,meters:ot,metres:ot,miles:3958.761333810546,millimeters:6371008800,millimetres:6371008800,nauticalmiles:ot/1852,radians:1,yards:6967335.223679999};function lt(t,e,i){void 0===i&&(i={});var n={type:"Feature"};return(0===i.id||i.id)&&(n.id=i.id),i.bbox&&(n.bbox=i.bbox),n.properties=e||{},n.geometry=t,n}function ht(t,e,i){if(void 0===i&&(i={}),!t)throw new Error("coordinates is required");if(!Array.isArray(t))throw new Error("coordinates must be an Array");if(t.length<2)throw new Error("coordinates must be at least 2 numbers long");if(!_t(t[0])||!_t(t[1]))throw new Error("coordinates must contain numbers");return lt({type:"Point",coordinates:t},e,i)}function ut(t,e,i){if(void 0===i&&(i={}),t.length<2)throw new Error("coordinates must be an array of two or more positions");return lt({type:"LineString",coordinates:t},e,i)}function ct(t,e){void 0===e&&(e={});var i={type:"FeatureCollection"};return e.id&&(i.id=e.id),e.bbox&&(i.bbox=e.bbox),i.features=t,i}function pt(t,e){void 0===e&&(e="kilometers");var i=st[e];if(!i)throw new Error(e+" units is invalid");return t*i}function dt(t,e){void 0===e&&(e="kilometers");var i=st[e];if(!i)throw new Error(e+" units is invalid");return t/i}function ft(t){return 180*(t%(2*Math.PI))/Math.PI}function gt(t){return t%360*Math.PI/180}function _t(t){return!isNaN(t)&&null!==t&&!Array.isArray(t)}function mt(t){var e,i,n={type:"FeatureCollection",features:[]};if("LineString"===(i="Feature"===t.type?t.geometry:t).type)e=[i.coordinates];else if("MultiLineString"===i.type)e=i.coordinates;else if("MultiPolygon"===i.type)e=[].concat.apply([],i.coordinates);else{if("Polygon"!==i.type)throw new Error("Input must be a LineString, MultiLineString, Polygon, or MultiPolygon Feature or Geometry");e=i.coordinates}return e.forEach((function(t){e.forEach((function(e){for(var i=0;i<t.length-1;i++)for(var r=i;r<e.length-1;r++){if(t===e){if(1===Math.abs(i-r))continue;if(0===i&&r===t.length-2&&t[i][0]===t[t.length-1][0]&&t[i][1]===t[t.length-1][1])continue}var a=yt(t[i][0],t[i][1],t[i+1][0],t[i+1][1],e[r][0],e[r][1],e[r+1][0],e[r+1][1]);a&&n.features.push(ht([a[0],a[1]]))}}))})),n}function yt(t,e,i,n,r,a,o,s){var l,h,u,c,p={x:null,y:null,onLine1:!1,onLine2:!1};return 0===(l=(s-a)*(i-t)-(o-r)*(n-e))?null!==p.x&&null!==p.y&&p:(c=(i-t)*(h=e-a)-(n-e)*(u=t-r),h=((o-r)*h-(s-a)*u)/l,u=c/l,p.x=t+h*(i-t),p.y=e+h*(n-e),h>=0&&h<=1&&(p.onLine1=!0),u>=0&&u<=1&&(p.onLine2=!0),!(!p.onLine1||!p.onLine2)&&[p.x,p.y])}function vt(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function Lt(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?vt(Object(i),!0).forEach((function(e){bt(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):vt(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function bt(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function kt(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function Mt(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?kt(Object(i),!0).forEach((function(e){xt(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):kt(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function xt(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function wt(t){if(!t)throw new Error("coord is required");if(!Array.isArray(t)){if("Feature"===t.type&&null!==t.geometry&&"Point"===t.geometry.type)return t.geometry.coordinates;if("Point"===t.type)return t.coordinates}if(Array.isArray(t)&&t.length>=2&&!Array.isArray(t[0])&&!Array.isArray(t[1]))return t;throw new Error("coord must be GeoJSON Point or an Array of numbers")}function Ct(t){if(Array.isArray(t))return t;if("Feature"===t.type){if(null!==t.geometry)return t.geometry.coordinates}else if(t.coordinates)return t.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}function Pt(t){return"Feature"===t.type?t.geometry:t}function Et(t,e){return"FeatureCollection"===t.type?"FeatureCollection":"GeometryCollection"===t.type?"GeometryCollection":"Feature"===t.type&&null!==t.geometry?t.geometry.type:t.type}function St(t,e,i){if(null!==t)for(var n,r,a,o,s,l,h,u,c=0,p=0,d=t.type,f="FeatureCollection"===d,g="Feature"===d,_=f?t.features.length:1,m=0;m<_;m++){s=(u=!!(h=f?t.features[m].geometry:g?t.geometry:t)&&"GeometryCollection"===h.type)?h.geometries.length:1;for(var y=0;y<s;y++){var v=0,L=0;if(null!==(o=u?h.geometries[y]:h)){l=o.coordinates;var b=o.type;switch(c=!i||"Polygon"!==b&&"MultiPolygon"!==b?0:1,b){case null:break;case"Point":if(!1===e(l,p,m,v,L))return!1;p++,v++;break;case"LineString":case"MultiPoint":for(n=0;n<l.length;n++){if(!1===e(l[n],p,m,v,L))return!1;p++,"MultiPoint"===b&&v++}"LineString"===b&&v++;break;case"Polygon":case"MultiLineString":for(n=0;n<l.length;n++){for(r=0;r<l[n].length-c;r++){if(!1===e(l[n][r],p,m,v,L))return!1;p++}"MultiLineString"===b&&v++,"Polygon"===b&&L++}"Polygon"===b&&v++;break;case"MultiPolygon":for(n=0;n<l.length;n++){for(L=0,r=0;r<l[n].length;r++){for(a=0;a<l[n][r].length-c;a++){if(!1===e(l[n][r][a],p,m,v,L))return!1;p++}L++}v++}break;case"GeometryCollection":for(n=0;n<o.geometries.length;n++)if(!1===St(o.geometries[n],e,i))return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function Ot(t,e){if("Feature"===t.type)e(t,0);else if("FeatureCollection"===t.type)for(var i=0;i<t.features.length&&!1!==e(t.features[i],i);i++);}function Dt(t,e){var i,n,r,a,o,s,l,h,u,c,p=0,d="FeatureCollection"===t.type,f="Feature"===t.type,g=d?t.features.length:1;for(i=0;i<g;i++){for(s=d?t.features[i].geometry:f?t.geometry:t,h=d?t.features[i].properties:f?t.properties:{},u=d?t.features[i].bbox:f?t.bbox:undefined,c=d?t.features[i].id:f?t.id:undefined,o=(l=!!s&&"GeometryCollection"===s.type)?s.geometries.length:1,r=0;r<o;r++)if(null!==(a=l?s.geometries[r]:s))switch(a.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":if(!1===e(a,p,h,u,c))return!1;break;case"GeometryCollection":for(n=0;n<a.geometries.length;n++)if(!1===e(a.geometries[n],p,h,u,c))return!1;break;default:throw new Error("Unknown Geometry Type")}else if(!1===e(null,p,h,u,c))return!1;p++}}function Rt(t,e){Dt(t,(function(t,i,n,r,a){var o,s=null===t?null:t.type;switch(s){case null:case"Point":case"LineString":case"Polygon":return!1!==e(lt(t,n,{bbox:r,id:a}),i,0)&&void 0}switch(s){case"MultiPoint":o="Point";break;case"MultiLineString":o="LineString";break;case"MultiPolygon":o="Polygon"}for(var l=0;l<t.coordinates.length;l++){var h=t.coordinates[l];if(!1===e(lt({type:o,coordinates:h},n),i,l))return!1}}))}at.Line=at.extend({initialize:function(t){this._map=t,this._shape="Line",this.toolbarButtonName="drawPolyline",this._doesSelfIntersect=!1},enable:function(t){L.Util.setOptions(this,t),this._enabled=!0,this._layerGroup=new L.LayerGroup,this._layerGroup._pmTempLayer=!0,this._layerGroup.addTo(this._map),this._layer=L.polyline([],this.options.templineStyle),this._setPane(this._layer,"layerPane"),this._layer._pmTempLayer=!0,this._layerGroup.addLayer(this._layer),this._hintline=L.polyline([],this.options.hintlineStyle),this._setPane(this._hintline,"layerPane"),this._hintline._pmTempLayer=!0,this._layerGroup.addLayer(this._hintline),this._hintMarker=L.marker(this._map.getCenter(),{interactive:!1,zIndexOffset:100,icon:L.divIcon({className:"marker-icon cursor-marker"})}),this._setPane(this._hintMarker,"vertexPane"),this._hintMarker._pmTempLayer=!0,this._layerGroup.addLayer(this._hintMarker),this.options.cursorMarker&&L.DomUtil.addClass(this._hintMarker._icon,"visible"),this.options.tooltips&&this._hintMarker.bindTooltip(I("tooltips.firstVertex"),{permanent:!0,offset:L.point(0,10),direction:"bottom",opacity:.8}).openTooltip(),this._map._container.style.cursor="crosshair",this._map.on("click",this._createVertex,this),this.options.finishOn&&"snap"!==this.options.finishOn&&this._map.on(this.options.finishOn,this._finishShape,this),"dblclick"===this.options.finishOn&&(this.tempMapDoubleClickZoomState=this._map.doubleClickZoom._enabled,this.tempMapDoubleClickZoomState&&this._map.doubleClickZoom.disable()),this._map.on("mousemove",this._syncHintMarker,this),this._hintMarker.on("move",this._syncHintLine,this),this._map.pm.Toolbar.toggleButton(this.toolbarButtonName,!0),this._otherSnapLayers=[],this._fireDrawStart(),this._setGlobalDrawMode()},disable:function(){this._enabled&&(this._enabled=!1,this._map._container.style.cursor="",this._map.off("click",this._createVertex,this),this._map.off("mousemove",this._syncHintMarker,this),this.options.finishOn&&"snap"!==this.options.finishOn&&this._map.off(this.options.finishOn,this._finishShape,this),this.tempMapDoubleClickZoomState&&this._map.doubleClickZoom.enable(),this._map.removeLayer(this._layerGroup),this._map.pm.Toolbar.toggleButton(this.toolbarButtonName,!1),this.options.snappable&&this._cleanupSnapping(),this._fireDrawEnd(),this._setGlobalDrawMode())},enabled:function(){return this._enabled},toggle:function(t){this.enabled()?this.disable():this.enable(t)},_syncHintLine:function(){var t=this._layer.getLatLngs();if(t.length>0){var e=t[t.length-1];this._hintline.setLatLngs([e,this._hintMarker.getLatLng()])}},_syncHintMarker:function(t){if(this._hintMarker.setLatLng(t.latlng),this.options.snappable){var e=t;e.target=this._hintMarker,this._handleSnapping(e)}this.options.allowSelfIntersection||this._handleSelfIntersection(!0,t.latlng);var i=this._layer._defaultShape().slice();i.push(this._hintMarker.getLatLng()),this._change(i)},hasSelfIntersection:function(){return mt(this._layer.toGeoJSON(15)).features.length>0},_handleSelfIntersection:function(t,e){var i=L.polyline(this._layer.getLatLngs());t&&(e||(e=this._hintMarker.getLatLng()),i.addLatLng(e));var n=mt(i.toGeoJSON(15));this._doesSelfIntersect=n.features.length>0,this._doesSelfIntersect?this._hintline.setStyle({color:"#f00000ff"}):this._hintline.isEmpty()||this._hintline.setStyle(this.options.hintlineStyle)},_createVertex:function(t){if(this.options.allowSelfIntersection||(this._handleSelfIntersection(!0,t.latlng),!this._doesSelfIntersect)){this._hintMarker._snapped||this._hintMarker.setLatLng(t.latlng);var e=this._hintMarker.getLatLng();if(e.equals(this._layer.getLatLngs()[0]))this._finishShape(t);else{this._layer._latlngInfo=this._layer._latlngInfo||[],this._layer._latlngInfo.push({latlng:e,snapInfo:this._hintMarker._snapInfo}),this._layer.addLatLng(e);var i=this._createMarker(e);this._setTooltipText(),this._hintline.setLatLngs([e,e]),this._fireVertexAdded(i,undefined,e,"Draw"),this._change(this._layer.getLatLngs()),"snap"===this.options.finishOn&&this._hintMarker._snapped&&this._finishShape(t)}}},_removeLastVertex:function(){var t=this._layer.getLatLngs(),e=t.pop();if(t.length<1)this.disable();else{var i=this._layerGroup.getLayers().filter((function(t){return t instanceof L.Marker})).filter((function(t){return!L.DomUtil.hasClass(t._icon,"cursor-marker")})).find((function(t){return t.getLatLng()===e})),n=this._layerGroup.getLayers().filter((function(t){return t instanceof L.Marker})),r=L.PM.Utils.findDeepMarkerIndex(n,i).indexPath;this._layerGroup.removeLayer(i),this._layer.setLatLngs(t),this._syncHintLine(),this._setTooltipText(),this._fireVertexRemoved(i,r,"Draw"),this._change(this._layer.getLatLngs())}},_finishShape:function(){if((this.options.allowSelfIntersection||(this._handleSelfIntersection(!1),!this._doesSelfIntersect))&&(!this.options.requireSnapToFinish||this._hintMarker._snapped||this._isFirstLayer())){var t=this._layer.getLatLngs();if(!(t.length<=1)){var e=L.polyline(t,this.options.pathOptions);this._setPane(e,"layerPane"),this._finishLayer(e),e.addTo(this._map.pm._getContainingLayer()),this._fireCreate(e),this.options.snappable&&this._cleanupSnapping(),this.disable(),this.options.continueDrawing&&this.enable()}}},_createMarker:function(t){var e=new L.Marker(t,{draggable:!1,icon:L.divIcon({className:"marker-icon"})});return this._setPane(e,"vertexPane"),e._pmTempLayer=!0,this._layerGroup.addLayer(e),e.on("click",this._finishShape,this),e},_setTooltipText:function(){var t="";t=I(this._layer.getLatLngs().flat().length<=1?"tooltips.continueLine":"tooltips.finishLine"),this._hintMarker.setTooltipContent(t)},_change:function(t){this._fireChange(t,"Draw")}}),at.Polygon=at.Line.extend({initialize:function(t){this._map=t,this._shape="Polygon",this.toolbarButtonName="drawPolygon"},_createMarker:function(t){var e=new L.Marker(t,{draggable:!1,icon:L.divIcon({className:"marker-icon"})});return this._setPane(e,"vertexPane"),e._pmTempLayer=!0,this._layerGroup.addLayer(e),1===this._layer.getLatLngs().flat().length?(e.on("click",this._finishShape,this),this._tempSnapLayerIndex=this._otherSnapLayers.push(e)-1,this.options.snappable&&this._cleanupSnapping()):e.on("click",(function(){return 1})),e},_setTooltipText:function(){var t="";t=I(this._layer.getLatLngs().flat().length<=2?"tooltips.continueLine":"tooltips.finishPoly"),this._hintMarker.setTooltipContent(t)},_finishShape:function(){if((this.options.allowSelfIntersection||(this._handleSelfIntersection(!0,this._layer.getLatLngs()[0]),!this._doesSelfIntersect))&&(!this.options.requireSnapToFinish||this._hintMarker._snapped||this._isFirstLayer())){var t=this._layer.getLatLngs();if(!(t.length<=2)){var e=L.polygon(t,this.options.pathOptions);this._setPane(e,"layerPane"),this._finishLayer(e),e.addTo(this._map.pm._getContainingLayer()),this._fireCreate(e),this._cleanupSnapping(),this._otherSnapLayers.splice(this._tempSnapLayerIndex,1),delete this._tempSnapLayerIndex,this.disable(),this.options.continueDrawing&&this.enable()}}}}),at.Rectangle=at.extend({initialize:function(t){this._map=t,this._shape="Rectangle",this.toolbarButtonName="drawRectangle"},enable:function(t){if(L.Util.setOptions(this,t),this._enabled=!0,this._layerGroup=new L.LayerGroup,this._layerGroup._pmTempLayer=!0,this._layerGroup.addTo(this._map),this._layer=L.rectangle([[0,0],[0,0]],this.options.pathOptions),this._setPane(this._layer,"layerPane"),this._layer._pmTempLayer=!0,this._startMarker=L.marker([0,0],{icon:L.divIcon({className:"marker-icon rect-start-marker"}),draggable:!1,zIndexOffset:-100,opacity:this.options.cursorMarker?1:0}),this._setPane(this._startMarker,"vertexPane"),this._startMarker._pmTempLayer=!0,this._layerGroup.addLayer(this._startMarker),this._hintMarker=L.marker([0,0],{zIndexOffset:150,icon:L.divIcon({className:"marker-icon cursor-marker"})}),this._setPane(this._hintMarker,"vertexPane"),this._hintMarker._pmTempLayer=!0,this._layerGroup.addLayer(this._hintMarker),this.options.tooltips&&this._hintMarker.bindTooltip(I("tooltips.firstVertex"),{permanent:!0,offset:L.point(0,10),direction:"bottom",opacity:.8}).openTooltip(),this.options.cursorMarker){L.DomUtil.addClass(this._hintMarker._icon,"visible"),this._styleMarkers=[];for(var e=0;e<2;e+=1){var i=L.marker([0,0],{icon:L.divIcon({className:"marker-icon rect-style-marker"}),draggable:!1,zIndexOffset:100});this._setPane(i,"vertexPane"),i._pmTempLayer=!0,this._layerGroup.addLayer(i),this._styleMarkers.push(i)}}this._map._container.style.cursor="crosshair",this._map.on("click",this._placeStartingMarkers,this),this._map.on("mousemove",this._syncHintMarker,this),this._map.pm.Toolbar.toggleButton(this.toolbarButtonName,!0),this._otherSnapLayers=[],this._fireDrawStart(),this._setGlobalDrawMode()},disable:function(){this._enabled&&(this._enabled=!1,this._map._container.style.cursor="",this._map.off("click",this._finishShape,this),this._map.off("click",this._placeStartingMarkers,this),this._map.off("mousemove",this._syncHintMarker,this),this._map.removeLayer(this._layerGroup),this._map.pm.Toolbar.toggleButton(this.toolbarButtonName,!1),this.options.snappable&&this._cleanupSnapping(),this._fireDrawEnd(),this._setGlobalDrawMode())},enabled:function(){return this._enabled},toggle:function(t){this.enabled()?this.disable():this.enable(t)},_placeStartingMarkers:function(t){this._hintMarker._snapped||this._hintMarker.setLatLng(t.latlng);var e=this._hintMarker.getLatLng();L.DomUtil.addClass(this._startMarker._icon,"visible"),this._startMarker.setLatLng(e),this.options.cursorMarker&&this._styleMarkers&&this._styleMarkers.forEach((function(t){L.DomUtil.addClass(t._icon,"visible"),t.setLatLng(e)})),this._map.off("click",this._placeStartingMarkers,this),this._map.on("click",this._finishShape,this),this._hintMarker.setTooltipContent(I("tooltips.finishRect")),this._setRectangleOrigin()},_setRectangleOrigin:function(){var t=this._startMarker.getLatLng();t&&(this._layerGroup.addLayer(this._layer),this._layer.setLatLngs([t,t]),this._hintMarker.on("move",this._syncRectangleSize,this))},_syncHintMarker:function(t){if(this._hintMarker.setLatLng(t.latlng),this.options.snappable){var e=t;e.target=this._hintMarker,this._handleSnapping(e)}var i=this._layerGroup&&this._layerGroup.hasLayer(this._layer)?this._layer.getLatLngs():[this._hintMarker.getLatLng()];this._fireChange(i,"Draw")},_syncRectangleSize:function(){var t=this,e=F(this._startMarker.getLatLng(),this._map),i=F(this._hintMarker.getLatLng(),this._map),n=L.PM.Utils._getRotatedRectangle(e,i,this.options.rectangleAngle||0,this._map);if(this._layer.setLatLngs(n),this.options.cursorMarker&&this._styleMarkers){var r=[];n.forEach((function(t){t.equals(e,1e-8)||t.equals(i,1e-8)||r.push(t)})),r.forEach((function(e,i){try{t._styleMarkers[i].setLatLng(e)}catch(n){}}))}},_findCorners:function(){var t=this._layer.getBounds();return[t.getNorthWest(),t.getNorthEast(),t.getSouthEast(),t.getSouthWest()]},_finishShape:function(t){this._hintMarker._snapped||this._hintMarker.setLatLng(t.latlng);var e=this._hintMarker.getLatLng(),i=this._startMarker.getLatLng();if(!this.options.requireSnapToFinish||this._hintMarker._snapped||this._isFirstLayer()){var n=L.rectangle([i,e],this.options.pathOptions);if(this.options.rectangleAngle){var r=L.PM.Utils._getRotatedRectangle(i,e,this.options.rectangleAngle||0,this._map);n.setLatLngs(r),n.pm&&n.pm._setAngle(this.options.rectangleAngle||0)}this._setPane(n,"layerPane"),this._finishLayer(n),n.addTo(this._map.pm._getContainingLayer()),this._fireCreate(n),this.disable(),this.options.continueDrawing&&this.enable()}}}),at.Circle=at.extend({initialize:function(t){this._map=t,this._shape="Circle",this.toolbarButtonName="drawCircle"},enable:function(t){L.Util.setOptions(this,t),this.options.radius=0,this._enabled=!0,this._layerGroup=new L.LayerGroup,this._layerGroup._pmTempLayer=!0,this._layerGroup.addTo(this._map),this._layer=L.circle([0,0],Lt(Lt({},this.options.templineStyle),{},{radius:0})),this._setPane(this._layer,"layerPane"),this._layer._pmTempLayer=!0,this._centerMarker=L.marker([0,0],{icon:L.divIcon({className:"marker-icon"}),draggable:!1,zIndexOffset:100}),this._setPane(this._centerMarker,"vertexPane"),this._centerMarker._pmTempLayer=!0,this._hintMarker=L.marker([0,0],{zIndexOffset:110,icon:L.divIcon({className:"marker-icon cursor-marker"})}),this._setPane(this._hintMarker,"vertexPane"),this._hintMarker._pmTempLayer=!0,this._layerGroup.addLayer(this._hintMarker),this.options.cursorMarker&&L.DomUtil.addClass(this._hintMarker._icon,"visible"),this.options.tooltips&&this._hintMarker.bindTooltip(I("tooltips.startCircle"),{permanent:!0,offset:L.point(0,10),direction:"bottom",opacity:.8}).openTooltip(),this._hintline=L.polyline([],this.options.hintlineStyle),this._setPane(this._hintline,"layerPane"),this._hintline._pmTempLayer=!0,this._layerGroup.addLayer(this._hintline),this._map._container.style.cursor="crosshair",this._map.on("click",this._placeCenterMarker,this),this._map.on("mousemove",this._syncHintMarker,this),this._map.pm.Toolbar.toggleButton(this.toolbarButtonName,!0),this._otherSnapLayers=[],this._fireDrawStart(),this._setGlobalDrawMode()},disable:function(){this._enabled&&(this._enabled=!1,this._map._container.style.cursor="",this._map.off("click",this._finishShape,this),this._map.off("click",this._placeCenterMarker,this),this._map.off("mousemove",this._syncHintMarker,this),this._map.removeLayer(this._layerGroup),this._map.pm.Toolbar.toggleButton(this.toolbarButtonName,!1),this.options.snappable&&this._cleanupSnapping(),this._fireDrawEnd(),this._setGlobalDrawMode())},enabled:function(){return this._enabled},toggle:function(t){this.enabled()?this.disable():this.enable(t)},_syncHintLine:function(){var t=this._centerMarker.getLatLng(),e=this._getNewDestinationOfHintMarker();this._hintline.setLatLngs([t,e])},_syncCircleRadius:function(){var t,e=this._centerMarker.getLatLng(),i=this._hintMarker.getLatLng();t=this._map.options.crs===L.CRS.Simple?this._map.distance(e,i):e.distanceTo(i),this.options.minRadiusCircle&&t<this.options.minRadiusCircle?this._layer.setRadius(this.options.minRadiusCircle):this.options.maxRadiusCircle&&t>this.options.maxRadiusCircle?this._layer.setRadius(this.options.maxRadiusCircle):this._layer.setRadius(t)},_syncHintMarker:function(t){if(this._hintMarker.setLatLng(t.latlng),this._hintMarker.setLatLng(this._getNewDestinationOfHintMarker()),this.options.snappable){var e=t;e.target=this._hintMarker,this._handleSnapping(e)}this._handleHintMarkerSnapping();var i=this._layerGroup&&this._layerGroup.hasLayer(this._centerMarker)?this._centerMarker.getLatLng():this._hintMarker.getLatLng();this._fireChange(i,"Draw")},_placeCenterMarker:function(t){this._layerGroup.addLayer(this._layer),this._layerGroup.addLayer(this._centerMarker),this._hintMarker._snapped||this._hintMarker.setLatLng(t.latlng);var e=this._hintMarker.getLatLng();this._layerGroup.addLayer(this._layer),this._centerMarker.setLatLng(e),this._map.off("click",this._placeCenterMarker,this),this._map.on("click",this._finishShape,this),this._placeCircleCenter()},_placeCircleCenter:function(){var t=this._centerMarker.getLatLng();t&&(this._layer.setLatLng(t),this._hintMarker.on("move",this._syncHintLine,this),this._hintMarker.on("move",this._syncCircleRadius,this),this._hintMarker.setTooltipContent(I("tooltips.finishCircle")),this._fireCenterPlaced(),this._fireChange(this._layer.getLatLng(),"Draw"))},_finishShape:function(t){if(!this.options.requireSnapToFinish||this._hintMarker._snapped||this._isFirstLayer()){this._hintMarker._snapped||this._hintMarker.setLatLng(t.latlng);var e,i=this._centerMarker.getLatLng(),n=this._hintMarker.getLatLng();e=this._map.options.crs===L.CRS.Simple?this._map.distance(i,n):i.distanceTo(n),this.options.minRadiusCircle&&e<this.options.minRadiusCircle?e=this.options.minRadiusCircle:this.options.maxRadiusCircle&&e>this.options.maxRadiusCircle&&(e=this.options.maxRadiusCircle);var r=Lt(Lt({},this.options.pathOptions),{},{radius:e}),a=L.circle(i,r);this._setPane(a,"layerPane"),this._finishLayer(a),a.addTo(this._map.pm._getContainingLayer()),a.pm&&a.pm._updateHiddenPolyCircle(),this._fireCreate(a),this.disable(),this.options.continueDrawing&&this.enable()}},_getNewDestinationOfHintMarker:function(){var t=this._centerMarker.getLatLng(),e=this._hintMarker.getLatLng(),i=t.distanceTo(e);return t.equals(L.latLng([0,0]))||(this.options.minRadiusCircle&&i<this.options.minRadiusCircle?e=z(this._map,t,e,this.options.minRadiusCircle):this.options.maxRadiusCircle&&i>this.options.maxRadiusCircle&&(e=z(this._map,t,e,this.options.maxRadiusCircle))),e},_handleHintMarkerSnapping:function(){if(this._hintMarker._snapped){var t=this._centerMarker.getLatLng(),e=this._hintMarker.getLatLng(),i=t.distanceTo(e);t.equals(L.latLng([0,0]))||(this.options.minRadiusCircle&&i<this.options.minRadiusCircle||this.options.maxRadiusCircle&&i>this.options.maxRadiusCircle)&&this._hintMarker.setLatLng(this._hintMarker._orgLatLng)}this._hintMarker.setLatLng(this._getNewDestinationOfHintMarker())}}),at.CircleMarker=at.Marker.extend({initialize:function(t){this._map=t,this._shape="CircleMarker",this.toolbarButtonName="drawCircleMarker",this._layerIsDragging=!1},enable:function(t){var e=this;if(L.Util.setOptions(this,t),this._enabled=!0,this._map.pm.Toolbar.toggleButton(this.toolbarButtonName,!0),this.options.editable){var i={};L.setOptions(i,this.options.templineStyle),i.radius=0,this._layerGroup=new L.LayerGroup,this._layerGroup._pmTempLayer=!0,this._layerGroup.addTo(this._map),this._layer=L.circleMarker([0,0],i),this._setPane(this._layer,"layerPane"),this._layer._pmTempLayer=!0,this._centerMarker=L.marker([0,0],{icon:L.divIcon({className:"marker-icon"}),draggable:!1,zIndexOffset:100}),this._setPane(this._centerMarker,"vertexPane"),this._centerMarker._pmTempLayer=!0,this._hintMarker=L.marker([0,0],{zIndexOffset:110,icon:L.divIcon({className:"marker-icon cursor-marker"})}),this._setPane(this._hintMarker,"vertexPane"),this._hintMarker._pmTempLayer=!0,this._layerGroup.addLayer(this._hintMarker),this.options.cursorMarker&&L.DomUtil.addClass(this._hintMarker._icon,"visible"),this.options.tooltips&&this._hintMarker.bindTooltip(I("tooltips.startCircle"),{permanent:!0,offset:L.point(0,10),direction:"bottom",opacity:.8}).openTooltip(),this._hintline=L.polyline([],this.options.hintlineStyle),this._setPane(this._hintline,"layerPane"),this._hintline._pmTempLayer=!0,this._layerGroup.addLayer(this._hintline),this._map.on("click",this._placeCenterMarker,this),this._map._container.style.cursor="crosshair"}else this._map.on("click",this._createMarker,this),this._hintMarker=L.circleMarker([0,0],this.options.templineStyle),this._setPane(this._hintMarker,"layerPane"),this._hintMarker._pmTempLayer=!0,this._hintMarker.addTo(this._map),this._layer=this._hintMarker,this.options.tooltips&&this._hintMarker.bindTooltip(I("tooltips.placeCircleMarker"),{permanent:!0,offset:L.point(0,10),direction:"bottom",opacity:.8}).openTooltip();this._map.on("mousemove",this._syncHintMarker,this),!this.options.editable&&this.options.markerEditable&&this._map.eachLayer((function(t){e.isRelevantMarker(t)&&t.pm.enable()})),this._layer.bringToBack(),this._fireDrawStart(),this._setGlobalDrawMode()},disable:function(){var t=this;this._enabled&&(this._enabled=!1,this.options.editable?(this._map._container.style.cursor="",this._map.off("click",this._finishShape,this),this._map.off("click",this._placeCenterMarker,this),this._map.removeLayer(this._layerGroup)):(this._map.off("click",this._createMarker,this),this._map.eachLayer((function(e){t.isRelevantMarker(e)&&e.pm.disable()})),this._hintMarker.remove()),this._map.off("mousemove",this._syncHintMarker,this),this._map.pm.Toolbar.toggleButton(this.toolbarButtonName,!1),this.options.snappable&&this._cleanupSnapping(),this._fireDrawEnd(),this._setGlobalDrawMode())},_placeCenterMarker:function(t){this._layerGroup.addLayer(this._layer),this._layerGroup.addLayer(this._centerMarker),this._hintMarker._snapped||this._hintMarker.setLatLng(t.latlng);var e=this._hintMarker.getLatLng();this._layerGroup.addLayer(this._layer),this._centerMarker.setLatLng(e),this._map.off("click",this._placeCenterMarker,this),this._map.on("click",this._finishShape,this),this._placeCircleCenter()},_placeCircleCenter:function(){var t=this._centerMarker.getLatLng();t&&(this._layer.setLatLng(t),this._hintMarker.on("move",this._syncHintLine,this),this._hintMarker.on("move",this._syncCircleRadius,this),this._hintMarker.setTooltipContent(I("tooltips.finishCircle")),this._fireCenterPlaced(),this._fireChange(this._layer.getLatLng(),"Draw"))},_syncHintLine:function(){var t=this._centerMarker.getLatLng(),e=this._getNewDestinationOfHintMarker();this._hintline.setLatLngs([t,e])},_syncCircleRadius:function(){var t=this._centerMarker.getLatLng(),e=this._hintMarker.getLatLng(),i=this._map.project(t).distanceTo(this._map.project(e));this.options.minRadiusCircleMarker&&i<this.options.minRadiusCircleMarker?this._layer.setRadius(this.options.minRadiusCircleMarker):this.options.maxRadiusCircleMarker&&i>this.options.maxRadiusCircleMarker?this._layer.setRadius(this.options.maxRadiusCircleMarker):this._layer.setRadius(i)},_syncHintMarker:function(t){if(this._hintMarker.setLatLng(t.latlng),this._hintMarker.setLatLng(this._getNewDestinationOfHintMarker()),this.options.snappable){var e=t;e.target=this._hintMarker,this._handleSnapping(e)}this._handleHintMarkerSnapping();var i=this._layerGroup&&this._layerGroup.hasLayer(this._centerMarker)?this._centerMarker.getLatLng():this._hintMarker.getLatLng();this._fireChange(i,"Draw")},isRelevantMarker:function(t){return t instanceof L.CircleMarker&&!(t instanceof L.Circle)&&t.pm&&!t._pmTempLayer},_createMarker:function(t){if((!this.options.requireSnapToFinish||this._hintMarker._snapped||this._isFirstLayer())&&t.latlng&&!this._layerIsDragging){this._hintMarker._snapped||this._hintMarker.setLatLng(t.latlng);var e=this._hintMarker.getLatLng(),i=L.circleMarker(e,this.options.pathOptions);this._setPane(i,"layerPane"),this._finishLayer(i),i.addTo(this._map.pm._getContainingLayer()),i.pm&&this.options.markerEditable&&i.pm.enable(),this._fireCreate(i),this._cleanupSnapping(),this.options.continueDrawing||this.disable()}},_finishShape:function(t){if(!this.options.requireSnapToFinish||this._hintMarker._snapped||this._isFirstLayer()){this._hintMarker._snapped||this._hintMarker.setLatLng(t.latlng);var e=this._centerMarker.getLatLng(),i=this._hintMarker.getLatLng(),n=this._map.project(e).distanceTo(this._map.project(i));this.options.editable&&(this.options.minRadiusCircleMarker&&n<this.options.minRadiusCircleMarker?n=this.options.minRadiusCircleMarker:this.options.maxRadiusCircleMarker&&n>this.options.maxRadiusCircleMarker&&(n=this.options.maxRadiusCircleMarker));var r=Mt(Mt({},this.options.pathOptions),{},{radius:n}),a=L.circleMarker(e,r);this._setPane(a,"layerPane"),this._finishLayer(a),a.addTo(this._map.pm._getContainingLayer()),a.pm&&a.pm._updateHiddenPolyCircle(),this._fireCreate(a),this.disable(),this.options.continueDrawing&&this.enable()}},_getNewDestinationOfHintMarker:function(){var t=this._hintMarker.getLatLng();if(this.options.editable){var e=this._centerMarker.getLatLng();if(e.equals(L.latLng([0,0])))return t;var i=this._map.project(e).distanceTo(this._map.project(t));this.options.minRadiusCircleMarker&&i<this.options.minRadiusCircleMarker?t=z(this._map,e,t,this._pxRadiusToMeter(this.options.minRadiusCircleMarker)):this.options.maxRadiusCircleMarker&&i>this.options.maxRadiusCircleMarker&&(t=z(this._map,e,t,this._pxRadiusToMeter(this.options.maxRadiusCircleMarker)))}return t},_handleHintMarkerSnapping:function(){if(this.options.editable){if(this._hintMarker._snapped){var t=this._centerMarker.getLatLng(),e=this._hintMarker.getLatLng(),i=this._map.project(t).distanceTo(this._map.project(e));(this.options.minRadiusCircleMarker&&i<this.options.minRadiusCircleMarker||this.options.maxRadiusCircleMarker&&i>this.options.maxRadiusCircleMarker)&&this._hintMarker.setLatLng(this._hintMarker._orgLatLng)}this._hintMarker.setLatLng(this._getNewDestinationOfHintMarker())}},_pxRadiusToMeter:function(t){var e=this._centerMarker.getLatLng(),i=this._map.project(e),n=L.point(i.x+t,i.y);return this._map.unproject(n).distanceTo(e)}});const Bt=function(t){if(!t)throw new Error("geojson is required");var e=[];return Rt(t,(function(t){!function(t,e){var i=[],n=t.geometry;if(null!==n){switch(n.type){case"Polygon":i=Ct(n);break;case"LineString":i=[Ct(n)]}i.forEach((function(i){var n=function(t,e){var i=[];return t.reduce((function(t,n){var r,a,o,s,l,h,u=ut([t,n],e);return u.bbox=(a=n,o=(r=t)[0],s=r[1],l=a[0],h=a[1],[o<l?o:l,s<h?s:h,o>l?o:l,s>h?s:h]),i.push(u),n})),i}(i,t.properties);n.forEach((function(t){t.id=e.length,e.push(t)}))}))}}(t,e)})),ct(e)};var Tt=i(1787);function It(t,e){var i=Ct(t),n=Ct(e);if(2!==i.length)throw new Error("<intersects> line1 must only contain 2 coordinates");if(2!==n.length)throw new Error("<intersects> line2 must only contain 2 coordinates");var r=i[0][0],a=i[0][1],o=i[1][0],s=i[1][1],l=n[0][0],h=n[0][1],u=n[1][0],c=n[1][1],p=(c-h)*(o-r)-(u-l)*(s-a),d=(u-l)*(a-h)-(c-h)*(r-l),f=(o-r)*(a-h)-(s-a)*(r-l);if(0===p)return null;var g=d/p,_=f/p;return g>=0&&g<=1&&_>=0&&_<=1?ht([r+g*(o-r),a+g*(s-a)]):null}const jt=function(t,e){var i={},n=[];if("LineString"===t.type&&(t=lt(t)),"LineString"===e.type&&(e=lt(e)),"Feature"===t.type&&"Feature"===e.type&&null!==t.geometry&&null!==e.geometry&&"LineString"===t.geometry.type&&"LineString"===e.geometry.type&&2===t.geometry.coordinates.length&&2===e.geometry.coordinates.length){var r=It(t,e);return r&&n.push(r),ct(n)}var a=Tt();return a.load(Bt(e)),Ot(Bt(t),(function(t){Ot(a.search(t),(function(e){var r=It(t,e);if(r){var a=Ct(r).join(",");i[a]||(i[a]=!0,n.push(r))}}))})),ct(n)};const At=function(t,e,i){void 0===i&&(i={});var n=wt(t),r=wt(e),a=gt(r[1]-n[1]),o=gt(r[0]-n[0]),s=gt(n[1]),l=gt(r[1]),h=Math.pow(Math.sin(a/2),2)+Math.pow(Math.sin(o/2),2)*Math.cos(s)*Math.cos(l);return pt(2*Math.atan2(Math.sqrt(h),Math.sqrt(1-h)),i.units)};const Gt=function(t){var e=t[0],i=t[1],n=t[2],r=t[3];if(At(t.slice(0,2),[n,i])>=At(t.slice(0,2),[e,r])){var a=(i+r)/2;return[e,a-(n-e)/2,n,a+(n-e)/2]}var o=(e+n)/2;return[o-(r-i)/2,i,o+(r-i)/2,r]};function Nt(t){var e=[Infinity,Infinity,-Infinity,-Infinity];return St(t,(function(t){e[0]>t[0]&&(e[0]=t[0]),e[1]>t[1]&&(e[1]=t[1]),e[2]<t[0]&&(e[2]=t[0]),e[3]<t[1]&&(e[3]=t[1])})),e}Nt["default"]=Nt;const zt=Nt;const Ut=function(t,e){void 0===e&&(e={});var i=e.precision,n=e.coordinates,r=e.mutate;if(i=i===undefined||null===i||isNaN(i)?6:i,n=n===undefined||null===n||isNaN(n)?3:n,!t)throw new Error("<geojson> is required");if("number"!=typeof i)throw new Error("<precision> must be a number");if("number"!=typeof n)throw new Error("<coordinates> must be a number");!1!==r&&r!==undefined||(t=JSON.parse(JSON.stringify(t)));var a=Math.pow(10,i);return St(t,(function(t){!function(t,e,i){t.length>i&&t.splice(i,t.length);for(var n=0;n<t.length;n++)t[n]=Math.round(t[n]*e)/e}(t,a,n)})),t};function Ft(t,e,i){if(void 0===i&&(i={}),!0===i.final)return function(t,e){var i=Ft(e,t);return i=(i+180)%360}(t,e);var n=wt(t),r=wt(e),a=gt(n[0]),o=gt(r[0]),s=gt(n[1]),l=gt(r[1]),h=Math.sin(o-a)*Math.cos(l),u=Math.cos(s)*Math.sin(l)-Math.sin(s)*Math.cos(l)*Math.cos(o-a);return ft(Math.atan2(h,u))}function Vt(t,e,i,n){void 0===n&&(n={});var r=wt(t),a=gt(r[0]),o=gt(r[1]),s=gt(i),l=dt(e,n.units),h=Math.asin(Math.sin(o)*Math.cos(l)+Math.cos(o)*Math.sin(l)*Math.cos(s));return ht([ft(a+Math.atan2(Math.sin(s)*Math.sin(l)*Math.cos(o),Math.cos(l)-Math.sin(o)*Math.sin(h))),ft(h)],n.properties)}const Kt=function(t,e,i){void 0===i&&(i={});var n=ht([Infinity,Infinity],{dist:Infinity}),r=0;return Rt(t,(function(t){for(var a=Ct(t),o=0;o<a.length-1;o++){var s=ht(a[o]);s.properties.dist=At(e,s,i);var l=ht(a[o+1]);l.properties.dist=At(e,l,i);var h=At(s,l,i),u=Math.max(s.properties.dist,l.properties.dist),c=Ft(s,l),p=Vt(e,u,c+90,i),d=Vt(e,u,c-90,i),f=jt(ut([p.geometry.coordinates,d.geometry.coordinates]),ut([s.geometry.coordinates,l.geometry.coordinates])),g=null;f.features.length>0&&((g=f.features[0]).properties.dist=At(e,g,i),g.properties.location=r+At(s,g,i)),s.properties.dist<n.properties.dist&&((n=s).properties.index=o,n.properties.location=r),l.properties.dist<n.properties.dist&&((n=l).properties.index=o+1,n.properties.location=r+h),g&&g.properties.dist<n.properties.dist&&((n=g).properties.index=o),r+=h}})),n};function Ht(t,e){var i=[],n=Tt();return Rt(e,(function(e){if(i.forEach((function(t,e){t.id=e})),i.length){var r=n.search(e);if(r.features.length){var a=Jt(e,r);i=i.filter((function(t){return t.id!==a.id})),n.remove(a),Ot(qt(a,e),(function(t){i.push(t),n.insert(t)}))}}else(i=qt(t,e).features).forEach((function(t){t.bbox||(t.bbox=Gt(zt(t)))})),n.load(ct(i))})),ct(i)}function qt(t,e){var i=[],n=Ct(t)[0],r=Ct(t)[t.geometry.coordinates.length-1];if(Yt(n,wt(e))||Yt(r,wt(e)))return ct([t]);var a=Tt(),o=Bt(t);a.load(o);var s=a.search(e);if(!s.features.length)return ct([t]);var l=Jt(e,s),h=function(t,e,i){var n=i;return Ot(t,(function(t,r){n=0===r&&i===undefined?t:e(n,t,r)})),n}(o,(function(t,n,r){var a=Ct(n)[1],o=wt(e);return r===l.id?(t.push(o),i.push(ut(t)),Yt(o,a)?[o]:[o,a]):(t.push(a),t)}),[n]);return h.length>1&&i.push(ut(h)),ct(i)}function Jt(t,e){if(!e.features.length)throw new Error("lines must contain features");if(1===e.features.length)return e.features[0];var i,n=Infinity;return Ot(e,(function(e){var r=Kt(e,t).properties.dist;r<n&&(i=e,n=r)})),i}function Yt(t,e){return t[0]===e[0]&&t[1]===e[1]}const Xt=function(t,e){if(!t)throw new Error("line is required");if(!e)throw new Error("splitter is required");var i=Et(t),n=Et(e);if("LineString"!==i)throw new Error("line must be LineString");if("FeatureCollection"===n)throw new Error("splitter cannot be a FeatureCollection");if("GeometryCollection"===n)throw new Error("splitter cannot be a GeometryCollection");var r=Ut(e,{precision:7});switch(n){case"Point":return qt(t,r);case"MultiPoint":return Ht(t,r);case"LineString":case"MultiLineString":case"Polygon":case"MultiPolygon":return Ht(t,jt(t,r))}};function Zt(t,e,i){if(void 0===i&&(i={}),!t)throw new Error("point is required");if(!e)throw new Error("polygon is required");var n=wt(t),r=Pt(e),a=r.type,o=e.bbox,s=r.coordinates;if(o&&!1===function(t,e){return e[0]<=t[0]&&e[1]<=t[1]&&e[2]>=t[0]&&e[3]>=t[1]}(n,o))return!1;"Polygon"===a&&(s=[s]);for(var l=!1,h=0;h<s.length&&!l;h++)if($t(n,s[h][0],i.ignoreBoundary)){for(var u=!1,c=1;c<s[h].length&&!u;)$t(n,s[h][c],!i.ignoreBoundary)&&(u=!0),c++;u||(l=!0)}return l}function $t(t,e,i){var n=!1;e[0][0]===e[e.length-1][0]&&e[0][1]===e[e.length-1][1]&&(e=e.slice(0,e.length-1));for(var r=0,a=e.length-1;r<e.length;a=r++){var o=e[r][0],s=e[r][1],l=e[a][0],h=e[a][1];if(t[1]*(o-l)+s*(l-t[0])+h*(t[0]-o)==0&&(o-t[0])*(l-t[0])<=0&&(s-t[1])*(h-t[1])<=0)return!i;s>t[1]!=h>t[1]&&t[0]<(l-o)*(t[1]-s)/(h-s)+o&&(n=!n)}return n}function Wt(t,e,i,n,r){var a=i[0],o=i[1],s=t[0],l=t[1],h=e[0],u=e[1],c=h-s,p=u-l,d=(i[0]-s)*p-(i[1]-l)*c;if(null!==r){if(Math.abs(d)>r)return!1}else if(0!==d)return!1;return n?"start"===n?Math.abs(c)>=Math.abs(p)?c>0?s<a&&a<=h:h<=a&&a<s:p>0?l<o&&o<=u:u<=o&&o<l:"end"===n?Math.abs(c)>=Math.abs(p)?c>0?s<=a&&a<h:h<a&&a<=s:p>0?l<=o&&o<u:u<o&&o<=l:"both"===n&&(Math.abs(c)>=Math.abs(p)?c>0?s<a&&a<h:h<a&&a<s:p>0?l<o&&o<u:u<o&&o<l):Math.abs(c)>=Math.abs(p)?c>0?s<=a&&a<=h:h<=a&&a<=s:p>0?l<=o&&o<=u:u<=o&&o<=l}const Qt=function(t,e,i){void 0===i&&(i={});for(var n=wt(t),r=Ct(e),a=0;a<r.length-1;a++){var o=!1;if(i.ignoreEndVertices&&(0===a&&(o="start"),a===r.length-2&&(o="end"),0===a&&a+1===r.length-1&&(o="both")),Wt(r[a],r[a+1],n,o,"undefined"==typeof i.epsilon?null:i.epsilon))return!0}return!1};function te(t,e){var i=Pt(t),n=Pt(e),r=i.type,a=n.type,o=i.coordinates,s=n.coordinates;switch(r){case"Point":if("Point"===a)return ie(o,s);throw new Error("feature2 "+a+" geometry not supported");case"MultiPoint":switch(a){case"Point":return function(t,e){var i,n=!1;for(i=0;i<t.coordinates.length;i++)if(ie(t.coordinates[i],e.coordinates)){n=!0;break}return n}(i,n);case"MultiPoint":return function(t,e){for(var i=0,n=e.coordinates;i<n.length;i++){for(var r=n[i],a=!1,o=0,s=t.coordinates;o<s.length;o++){if(ie(r,s[o])){a=!0;break}}if(!a)return!1}return!0}(i,n);default:throw new Error("feature2 "+a+" geometry not supported")}case"LineString":switch(a){case"Point":return Qt(n,i,{ignoreEndVertices:!0});case"LineString":return function(t,e){for(var i=!1,n=0,r=e.coordinates;n<r.length;n++){var a=r[n];if(Qt({type:"Point",coordinates:a},t,{ignoreEndVertices:!0})&&(i=!0),!Qt({type:"Point",coordinates:a},t,{ignoreEndVertices:!1}))return!1}return i}(i,n);case"MultiPoint":return function(t,e){for(var i=!1,n=0,r=e.coordinates;n<r.length;n++){var a=r[n];if(Qt(a,t,{ignoreEndVertices:!0})&&(i=!0),!Qt(a,t))return!1}if(i)return!0;return!1}(i,n);default:throw new Error("feature2 "+a+" geometry not supported")}case"Polygon":switch(a){case"Point":return Zt(n,i,{ignoreBoundary:!0});case"LineString":return function(t,e){var i=!1,n=0,r=zt(t),a=zt(e);if(!ee(r,a))return!1;for(;n<e.coordinates.length-1;n++){if(Zt({type:"Point",coordinates:ne(e.coordinates[n],e.coordinates[n+1])},t,{ignoreBoundary:!0})){i=!0;break}}return i}(i,n);case"Polygon":return function(t,e){if("Feature"===t.type&&null===t.geometry)return!1;if("Feature"===e.type&&null===e.geometry)return!1;var i=zt(t),n=zt(e);if(!ee(i,n))return!1;for(var r=Pt(e).coordinates,a=0,o=r;a<o.length;a++)for(var s=0,l=o[a];s<l.length;s++){if(!Zt(l[s],t))return!1}return!0}(i,n);case"MultiPoint":return function(t,e){for(var i=0,n=e.coordinates;i<n.length;i++){if(!Zt(n[i],t,{ignoreBoundary:!0}))return!1}return!0}(i,n);default:throw new Error("feature2 "+a+" geometry not supported")}default:throw new Error("feature1 "+r+" geometry not supported")}}function ee(t,e){return!(t[0]>e[0])&&(!(t[2]<e[2])&&(!(t[1]>e[1])&&!(t[3]<e[3])))}function ie(t,e){return t[0]===e[0]&&t[1]===e[1]}function ne(t,e){return[(t[0]+e[0])/2,(t[1]+e[1])/2]}var re=i(2676),ae=i.n(re);function oe(t){var e={type:"Feature"};return e.geometry=t,e}function se(t){return"Feature"===t.type?t.geometry:t}function le(t){return t.geometry.coordinates}function he(t){return oe({type:"Polygon",coordinates:t})}function ue(t){return oe({type:"MultiPolygon",coordinates:t})}function ce(t){return Array.isArray(t)?1+ce(t[0]):-1}function pe(t){t instanceof L.Polyline&&(t=t.toGeoJSON(15));var e=le(t),i=ce(e),n=[];return i>1?e.forEach((function(t){n.push(function(t){return oe({type:"LineString",coordinates:t})}(t))})):n.push(t),n}function de(t){var e=[];return t.eachLayer((function(t){e.push(le(t.toGeoJSON(15)))})),function(t){return oe({type:"MultiLineString",coordinates:t})}(e)}function fe(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var i=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==i)return;var n,r,a=[],o=!0,s=!1;try{for(i=i.call(t);!(o=(n=i.next()).done)&&(a.push(n.value),!e||a.length!==e);o=!0);}catch(l){s=!0,r=l}finally{try{o||null==i["return"]||i["return"]()}finally{if(s)throw r}}return a}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return ge(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return ge(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ge(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function _e(t){return function(t){if(Array.isArray(t))return me(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return me(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return me(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function me(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}at.Cut=at.Polygon.extend({initialize:function(t){this._map=t,this._shape="Cut",this.toolbarButtonName="cutPolygon"},_finishShape:function(){var t=this;if(this._editedLayers=[],this.options.allowSelfIntersection||(this._handleSelfIntersection(!0,this._layer.getLatLngs()[0]),!this._doesSelfIntersect)){var e=this._layer.getLatLngs(),i=L.polygon(e,this.options.pathOptions);i._latlngInfos=this._layer._latlngInfo,this.cut(i),this._cleanupSnapping(),this._otherSnapLayers.splice(this._tempSnapLayerIndex,1),delete this._tempSnapLayerIndex,this._editedLayers.forEach((function(e){var i=e.layer,n=e.originalLayer;t._fireCut(n,i,n),t._fireCut(t._map,i,n),n.pm._fireEdit()})),this._editedLayers=[],this.disable(),this.options.continueDrawing&&this.enable()}},cut:function(t){var e=this,i=this._map._layers,n=t._latlngInfos||[];Object.keys(i).map((function(t){return i[t]})).filter((function(t){return t.pm})).filter((function(t){return!t._pmTempLayer})).filter((function(t){return!L.PM.optIn&&!t.options.pmIgnore||L.PM.optIn&&!1===t.options.pmIgnore})).filter((function(t){return t instanceof L.Polyline})).filter((function(e){return e!==t})).filter((function(t){return t.pm.options.allowCutting})).filter((function(t){return!(e.options.layersToCut&&L.Util.isArray(e.options.layersToCut)&&e.options.layersToCut.length>0)||e.options.layersToCut.indexOf(t)>-1})).filter((function(t){return!e._layerGroup.hasLayer(t)})).filter((function(e){try{var i=!!jt(t.toGeoJSON(15),e.toGeoJSON(15)).features.length>0;return i||e instanceof L.Polyline&&!(e instanceof L.Polygon)?i:(n=t.toGeoJSON(15),r=e.toGeoJSON(15),a=se(n),o=se(r),!(0===(s=ae().intersection(a.coordinates,o.coordinates)).length||!(1===s.length?he(s[0]):ue(s))))}catch(l){return e instanceof L.Polygon&&console.error("You can't cut polygons with self-intersections"),!1}var n,r,a,o,s})).forEach((function(i){var r;if(i instanceof L.Polygon){var a=(r=L.polygon(i.getLatLngs())).getLatLngs();n.forEach((function(t){if(t&&t.snapInfo){var i=t.latlng,n=e._calcClosestLayer(i,[r]);if(n&&n.segment&&n.distance<e.options.snapDistance){var o=n.segment;if(o&&2===o.length){var s=L.PM.Utils._getIndexFromSegment(a,o),l=s.indexPath,h=s.parentPath,u=s.newIndex;(l.length>1?R()(a,h):a).splice(u,0,i)}}}}))}else r=i;var o=e._cutLayer(t,r),s=L.geoJSON(o,i.options);if(1===s.getLayers().length){var l=s.getLayers();s=fe(l,1)[0]}e._setPane(s,"layerPane");var h=s.addTo(e._map.pm._getContainingLayer());if(h.pm.enable(i.pm.options),h.pm.disable(),i._pmTempLayer=!0,t._pmTempLayer=!0,i.remove(),i.removeFrom(e._map.pm._getContainingLayer()),t.remove(),t.removeFrom(e._map.pm._getContainingLayer()),h.getLayers&&0===h.getLayers().length&&e._map.pm.removeLayer({target:h}),h instanceof L.LayerGroup?(h.eachLayer((function(t){e._addDrawnLayerProp(t)})),e._addDrawnLayerProp(h)):e._addDrawnLayerProp(h),e.options.layersToCut&&L.Util.isArray(e.options.layersToCut)&&e.options.layersToCut.length>0){var u=e.options.layersToCut.indexOf(i);u>-1&&e.options.layersToCut.splice(u,1)}e._editedLayers.push({layer:h,originalLayer:i})}))},_cutLayer:function(t,e){var i,n,r,a,o,s,l=L.geoJSON();if(e instanceof L.Polygon)n=e.toGeoJSON(15),r=t.toGeoJSON(15),a=se(n),o=se(r),i=0===(s=ae().difference(a.coordinates,o.coordinates)).length?null:1===s.length?he(s[0]):ue(s);else{var h=pe(e);h.forEach((function(e){var i=Xt(e,t.toGeoJSON(15));(i&&i.features.length>0?L.geoJSON(i):L.geoJSON(e)).getLayers().forEach((function(e){te(t.toGeoJSON(15),e.toGeoJSON(15))||e.addTo(l)}))})),i=h.length>1?de(l):l.toGeoJSON(15)}return i},_change:L.Util.falseFn}),at.Text=at.extend({initialize:function(t){this._map=t,this._shape="Text",this.toolbarButtonName="drawText"},enable:function(t){L.Util.setOptions(this,t),this._enabled=!0,this._map.on("click",this._createMarker,this),this._map.pm.Toolbar.toggleButton(this.toolbarButtonName,!0),this._hintMarker=L.marker(this._map.getCenter(),{interactive:!1,zIndexOffset:100,icon:L.divIcon({className:"marker-icon cursor-marker"})}),this._setPane(this._hintMarker,"vertexPane"),this._hintMarker._pmTempLayer=!0,this._hintMarker.addTo(this._map),this.options.cursorMarker&&L.DomUtil.addClass(this._hintMarker._icon,"visible"),this.options.tooltips&&this._hintMarker.bindTooltip(I("tooltips.placeText"),{permanent:!0,offset:L.point(0,10),direction:"bottom",opacity:.8}).openTooltip(),this._layer=this._hintMarker,this._map.on("mousemove",this._syncHintMarker,this),this._fireDrawStart(),this._setGlobalDrawMode()},disable:function(){this._enabled&&(this._enabled=!1,this._map.off("click",this._createMarker,this),this._hintMarker.remove(),this._map.off("mousemove",this._syncHintMarker,this),this._map.pm.Toolbar.toggleButton(this.toolbarButtonName,!1),this.options.snappable&&this._cleanupSnapping(),this._fireDrawEnd(),this._setGlobalDrawMode())},enabled:function(){return this._enabled},toggle:function(t){this.enabled()?this.disable():this.enable(t)},_syncHintMarker:function(t){if(this._hintMarker.setLatLng(t.latlng),this.options.snappable){var e=t;e.target=this._hintMarker,this._handleSnapping(e)}},_createMarker:function(t){var e;if(t.latlng&&(!this.options.requireSnapToFinish||this._hintMarker._snapped||this._isFirstLayer())){this._hintMarker._snapped||this._hintMarker.setLatLng(t.latlng);var i=this._hintMarker.getLatLng();if(this.textArea=this._createTextArea(),null!==(e=this.options.textOptions)&&void 0!==e&&e.className){var n,r=this.options.textOptions.className.split(" ");(n=this.textArea.classList).add.apply(n,_e(r))}var a=this._createTextIcon(this.textArea),o=new L.Marker(i,{textMarker:!0,_textMarkerOverPM:!0,icon:a});if(this._setPane(o,"markerPane"),this._finishLayer(o),o.pm||(o.options.draggable=!1),o.addTo(this._map.pm._getContainingLayer()),o.pm){var s,l,h,u,c;o.pm.textArea=this.textArea,L.setOptions(o.pm,{removeIfEmpty:null===(s=null===(l=this.options.textOptions)||void 0===l?void 0:l.removeIfEmpty)||void 0===s||s});var p=null===(h=null===(u=this.options.textOptions)||void 0===u?void 0:u.focusAfterDraw)||void 0===h||h;o.pm._createTextMarker(p),null!==(c=this.options.textOptions)&&void 0!==c&&c.text&&o.pm.setText(this.options.textOptions.text)}this._fireCreate(o),this._cleanupSnapping(),this.disable(),this.options.continueDrawing&&this.enable()}},_createTextArea:function(){var t=document.createElement("textarea");return t.autofocus=!0,t.readOnly=!0,t.classList.add("pm-textarea","pm-disabled"),t},_createTextIcon:function(t){return L.divIcon({className:"pm-text-marker",html:t})}});const ye={enableLayerDrag:function(){if(this.options.draggable&&this._layer._map){this.disable(),this._layerDragEnabled=!0,this._map||(this._map=this._layer._map),(this._layer instanceof L.Marker||this._layer instanceof L.ImageOverlay)&&L.DomEvent.on(this._getDOMElem(),"dragstart",this._stopDOMImageDrag),this._layer.dragging&&this._layer.dragging.disable(),this._tempDragCoord=null,V(this._layer)instanceof L.Canvas?(this._layer.on("mouseout",this.removeDraggingClass,this),this._layer.on("mouseover",this.addDraggingClass,this)):this.addDraggingClass(),this._originalMapDragState=this._layer._map.dragging._enabled,this._safeToCacheDragState=!0;var t=this._getDOMElem();t&&(V(this._layer)instanceof L.Canvas?(this._layer.on("touchstart mousedown",this._dragMixinOnMouseDown,this),this._map.pm._addTouchEvents(t)):L.DomEvent.on(t,"touchstart mousedown",this._simulateMouseDownEvent,this)),this._fireDragEnable()}},disableLayerDrag:function(){this._layerDragEnabled=!1,V(this._layer)instanceof L.Canvas?(this._layer.off("mouseout",this.removeDraggingClass,this),this._layer.off("mouseover",this.addDraggingClass,this)):this.removeDraggingClass(),this._originalMapDragState&&this._dragging&&this._map.dragging.enable(),this._safeToCacheDragState=!1,this._layer.dragging&&this._layer.dragging.disable();var t=this._getDOMElem();t&&(V(this._layer)instanceof L.Canvas?(this._layer.off("touchstart mousedown",this._dragMixinOnMouseDown,this),this._map.pm._removeTouchEvents(t)):L.DomEvent.off(t,"touchstart mousedown",this._simulateMouseDownEvent,this)),this._layerDragged&&this._fireUpdate(),this._layerDragged=!1,this._fireDragDisable()},dragging:function(){return this._dragging},layerDragEnabled:function(){return!!this._layerDragEnabled},_simulateMouseDownEvent:function(t){var e={originalEvent:t,target:this._layer},i=t.touches?t.touches[0]:t;return e.containerPoint=this._map.mouseEventToContainerPoint(i),e.latlng=this._map.containerPointToLatLng(e.containerPoint),this._dragMixinOnMouseDown(e),!1},_simulateMouseMoveEvent:function(t){var e={originalEvent:t,target:this._layer},i=t.touches?t.touches[0]:t;return e.containerPoint=this._map.mouseEventToContainerPoint(i),e.latlng=this._map.containerPointToLatLng(e.containerPoint),this._dragMixinOnMouseMove(e),!1},_simulateMouseUpEvent:function(t){var e={originalEvent:t,target:this._layer};return-1===t.type.indexOf("touch")&&(e.containerPoint=this._map.mouseEventToContainerPoint(t),e.latlng=this._map.containerPointToLatLng(e.containerPoint)),this._dragMixinOnMouseUp(e),!1},_dragMixinOnMouseDown:function(t){if(!(t.originalEvent.button>0)){this._overwriteEventIfItComesFromMarker(t);var e=t._fromLayerSync,i=this._syncLayers("_dragMixinOnMouseDown",t);this._layer instanceof L.Marker&&(!this.options.snappable||e||i?this._disableSnapping():this._initSnappableMarkers()),this._layer instanceof L.CircleMarker&&!(this._layer instanceof L.Circle)&&(!this.options.snappable||e||i?this._layer.pm.options.editable?this._layer.pm._disableSnapping():this._layer.pm._disableSnappingDrag():this._layer.pm.options.editable||this._initSnappableMarkersDrag()),this._safeToCacheDragState&&(this._originalMapDragState=this._layer._map.dragging._enabled,this._safeToCacheDragState=!1),this._tempDragCoord=t.latlng,L.DomEvent.on(this._map.getContainer(),"touchend mouseup",this._simulateMouseUpEvent,this),L.DomEvent.on(this._map.getContainer(),"touchmove mousemove",this._simulateMouseMoveEvent,this)}},_dragMixinOnMouseMove:function(t){this._overwriteEventIfItComesFromMarker(t);var e=this._getDOMElem();this._syncLayers("_dragMixinOnMouseMove",t),this._dragging||(this._dragging=!0,L.DomUtil.addClass(e,"leaflet-pm-dragging"),this._layer instanceof L.Marker||this._layer.bringToFront(),this._originalMapDragState&&this._map.dragging.disable(),this._fireDragStart()),this._tempDragCoord||(this._tempDragCoord=t.latlng),this._onLayerDrag(t),this._layer instanceof L.CircleMarker&&this._layer.pm._updateHiddenPolyCircle()},_dragMixinOnMouseUp:function(t){var e=this,i=this._getDOMElem();return this._syncLayers("_dragMixinOnMouseUp",t),this._originalMapDragState&&this._map.dragging.enable(),this._safeToCacheDragState=!0,L.DomEvent.off(this._map.getContainer(),"touchmove mousemove",this._simulateMouseMoveEvent,this),L.DomEvent.off(this._map.getContainer(),"touchend mouseup",this._simulateMouseUpEvent,this),!!this._dragging&&(this._layer instanceof L.CircleMarker&&this._layer.pm._updateHiddenPolyCircle(),this._layerDragged=!0,window.setTimeout((function(){e._dragging=!1,i&&L.DomUtil.removeClass(i,"leaflet-pm-dragging"),e._fireDragEnd(),e._fireEdit()}),10),!0)},_onLayerDrag:function(t){var e=t.latlng,i=e.lat-this._tempDragCoord.lat,n=e.lng-this._tempDragCoord.lng,r=function u(t){return t.map((function(t){if(Array.isArray(t))return u(t);var e={lat:t.lat+i,lng:t.lng+n};return(t.alt||0===t.alt)&&(e.alt=t.alt),e}))};if(this._layer instanceof L.Circle||this._layer instanceof L.CircleMarker&&this._layer.options.editable){var a=r([this._layer.getLatLng()]);this._layer.setLatLng(a[0]),this._fireChange(this._layer.getLatLng(),"Edit")}else if(this._layer instanceof L.CircleMarker||this._layer instanceof L.Marker){var o=this._layer.getLatLng();this._layer._snapped&&(o=this._layer._orgLatLng);var s=r([o]);this._layer.setLatLng(s[0]),this._fireChange(this._layer.getLatLng(),"Edit")}else if(this._layer instanceof L.ImageOverlay){var l=r([this._layer.getBounds().getNorthWest(),this._layer.getBounds().getSouthEast()]);this._layer.setBounds(l),this._fireChange(this._layer.getBounds(),"Edit")}else{var h=r(this._layer.getLatLngs());this._layer.setLatLngs(h),this._fireChange(this._layer.getLatLngs(),"Edit")}this._tempDragCoord=e,t.layer=this._layer,this._fireDrag(t)},addDraggingClass:function(){var t=this._getDOMElem();t&&L.DomUtil.addClass(t,"leaflet-pm-draggable")},removeDraggingClass:function(){var t=this._getDOMElem();t&&L.DomUtil.removeClass(t,"leaflet-pm-draggable")},_getDOMElem:function(){var t=null;return this._layer._path?t=this._layer._path:this._layer._renderer&&this._layer._renderer._container?t=this._layer._renderer._container:this._layer._image?t=this._layer._image:this._layer._icon&&(t=this._layer._icon),t},_overwriteEventIfItComesFromMarker:function(t){t.target.getLatLng&&(!t.target._radius||t.target._radius<=10)&&(t.containerPoint=this._map.mouseEventToContainerPoint(t.originalEvent),t.latlng=this._map.containerPointToLatLng(t.containerPoint))},_syncLayers:function(t,e){var i=this;if(this.enabled())return!1;if(!e._fromLayerSync&&this._layer===e.target&&this.options.syncLayersOnDrag){e._fromLayerSync=!0;var n=[];if(L.Util.isArray(this.options.syncLayersOnDrag))n=this.options.syncLayersOnDrag,this.options.syncLayersOnDrag.forEach((function(t){t instanceof L.LayerGroup&&(n=n.concat(t.pm.getLayers(!0)))}));else if(!0===this.options.syncLayersOnDrag&&this._parentLayerGroup)for(var r in this._parentLayerGroup){var a=this._parentLayerGroup[r];a.pm&&(n=a.pm.getLayers(!0))}return L.Util.isArray(n)&&n.length>0&&(n=n.filter((function(t){return!!t.pm})).filter((function(t){return!!t.pm.options.draggable}))).forEach((function(n){n!==i._layer&&n.pm[t]&&(n._snapped=!1,n.pm[t](e))})),n.length>0}return!1},_stopDOMImageDrag:function(t){return t.preventDefault(),!1}};function ve(t,e,i){var n=i.getMaxZoom();if(n===Infinity&&(n=i.getZoom()),L.Util.isArray(t)){var r=[];return t.forEach((function(t){r.push(ve(t,e,i))})),r}return t instanceof L.LatLng?function(t,e,i,n){return i.unproject(e.transform(i.project(t,n)),n)}(t,e,i,n):null}function Le(t,e){e instanceof L.Layer&&(e=e.getLatLng());var i=t.getMaxZoom();return i===Infinity&&(i=t.getZoom()),t.project(e,i)}function be(t,e){var i=t.getMaxZoom();return i===Infinity&&(i=t.getZoom()),t.unproject(e,i)}var ke={_onRotateStart:function(t){this._preventRenderingMarkers(!0),this._rotationOriginLatLng=this._getRotationCenter().clone(),this._rotationOriginPoint=Le(this._map,this._rotationOriginLatLng),this._rotationStartPoint=Le(this._map,t.target.getLatLng()),this._initialRotateLatLng=U(this._layer),this._startAngle=this.getAngle();var e=U(this._rotationLayer,this._rotationLayer.pm._rotateOrgLatLng);this._fireRotationStart(this._rotationLayer,e),this._fireRotationStart(this._map,e)},_onRotate:function(t){var e=Le(this._map,t.target.getLatLng()),i=this._rotationStartPoint,n=this._rotationOriginPoint,r=Math.atan2(e.y-n.y,e.x-n.x)-Math.atan2(i.y-n.y,i.x-n.x);this._layer.setLatLngs(this._rotateLayer(r,this._initialRotateLatLng,this._rotationOriginLatLng,L.PM.Matrix.init(),this._map));var a=this;!function h(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:[],i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:-1;if(i>-1&&e.push(i),L.Util.isArray(t[0]))t.forEach((function(t,i){return h(t,e.slice(),i)}));else{var n=R()(a._markers,e);t.forEach((function(t,e){n[e].setLatLng(t)}))}}(this._layer.getLatLngs());var o=U(this._rotationLayer);this._rotationLayer.setLatLngs(this._rotateLayer(r,this._rotationLayer.pm._rotateOrgLatLng,this._rotationOriginLatLng,L.PM.Matrix.init(),this._map));var s=180*r/Math.PI,l=(s=s<0?s+360:s)+this._startAngle;this._setAngle(l),this._rotationLayer.pm._setAngle(l),this._fireRotation(this._rotationLayer,s,o),this._fireRotation(this._map,s,o),this._rotationLayer.pm._fireChange(this._rotationLayer.getLatLngs(),"Rotation")},_onRotateEnd:function(){var t=this._startAngle;delete this._rotationOriginLatLng,delete this._rotationOriginPoint,delete this._rotationStartPoint,delete this._initialRotateLatLng,delete this._startAngle;var e=U(this._rotationLayer,this._rotationLayer.pm._rotateOrgLatLng);this._rotationLayer.pm._rotateOrgLatLng=U(this._rotationLayer),this._fireRotationEnd(this._rotationLayer,t,e),this._fireRotationEnd(this._map,t,e),this._rotationLayer.pm._fireEdit(this._rotationLayer,"Rotation"),this._preventRenderingMarkers(!1),this._layerRotated=!0},_rotateLayer:function(t,e,i,n,r){var a=Le(r,i);return this._matrix=n.clone().rotate(t,a).flip(),ve(e,this._matrix,r)},_setAngle:function(t){t=t<0?t+360:t,this._angle=t%360},_getRotationCenter:function(){var t=L.polygon(this._layer.getLatLngs(),{stroke:!1,fill:!1,pmIgnore:!0}).addTo(this._layer._map),e=t.getCenter();return t.removeFrom(this._layer._map),e},enableRotate:function(){if(this.options.allowRotation){this._rotatePoly=L.polygon(this._layer.getLatLngs(),{fill:!1,stroke:!1,pmIgnore:!1,snapIgnore:!0}).addTo(this._layer._map),this._rotatePoly.pm._setAngle(this.getAngle()),this._rotatePoly.pm.setOptions(this._layer._map.pm.getGlobalOptions()),this._rotatePoly.pm.setOptions({rotate:!0,snappable:!1,hideMiddleMarkers:!0}),this._rotatePoly.pm._rotationLayer=this._layer,this._rotatePoly.pm.enable(),this._rotateOrgLatLng=U(this._layer),this._rotateEnabled=!0,this._layer.on("remove",this.disableRotate,this),this._fireRotationEnable(this._layer),this._fireRotationEnable(this._layer._map)}else this.disableRotate()},disableRotate:function(){this.rotateEnabled()&&(this._rotatePoly.pm._layerRotated&&this._fireUpdate(),this._rotatePoly.pm._layerRotated=!1,this._rotatePoly.pm.disable(),this._rotatePoly.remove(),this._rotatePoly.pm.setOptions({rotate:!1}),this._rotatePoly=undefined,this._rotateOrgLatLng=undefined,this._layer.off("remove",this.disableRotate,this),this._rotateEnabled=!1,this._fireRotationDisable(this._layer),this._fireRotationDisable(this._layer._map))},rotateEnabled:function(){return this._rotateEnabled},rotateLayer:function(t){var e=this.getAngle(),i=this._layer.getLatLngs(),n=t*(Math.PI/180);this._layer.setLatLngs(this._rotateLayer(n,this._layer.getLatLngs(),this._getRotationCenter(),L.PM.Matrix.init(),this._layer._map)),this._rotateOrgLatLng=L.polygon(this._layer.getLatLngs()).getLatLngs(),this._setAngle(this.getAngle()+t),this.rotateEnabled()&&this._rotatePoly&&this._rotatePoly.pm.enabled()&&(this._rotatePoly.setLatLngs(this._rotateLayer(n,this._rotatePoly.getLatLngs(),this._getRotationCenter(),L.PM.Matrix.init(),this._rotatePoly._map)),this._rotatePoly.pm._initMarkers());var r=this.getAngle()-e;r=r<0?r+360:r,this._startAngle=e,this._fireRotation(this._layer,r,i,this._layer),this._fireRotation(this._map,r,i,this._layer),delete this._startAngle,this._fireChange(this._layer.getLatLngs(),"Rotation")},rotateLayerToAngle:function(t){var e=t-this.getAngle();this.rotateLayer(e)},getAngle:function(){return this._angle||0}};const Me=ke;const xe=L.Class.extend({includes:[ye,rt,Me,S],options:{snappable:!0,snapDistance:20,allowSelfIntersection:!0,allowSelfIntersectionEdit:!1,preventMarkerRemoval:!1,removeLayerBelowMinVertexCount:!0,limitMarkersToCount:-1,hideMiddleMarkers:!1,snapSegment:!0,syncLayersOnDrag:!1,draggable:!0,allowEditing:!0,allowRemoval:!0,allowCutting:!0,allowRotation:!0,addVertexOn:"click",removeVertexOn:"contextmenu",removeVertexValidation:undefined,addVertexValidation:undefined,moveVertexValidation:undefined},setOptions:function(t){L.Util.setOptions(this,t)},getOptions:function(){return this.options},applyOptions:function(){},isPolygon:function(){return this._layer instanceof L.Polygon},getShape:function(){return this._shape},_setPane:function(t,e){"layerPane"===e?t.options.pane=this._map.pm.globalOptions.panes&&this._map.pm.globalOptions.panes.layerPane||"overlayPane":"vertexPane"===e?t.options.pane=this._map.pm.globalOptions.panes&&this._map.pm.globalOptions.panes.vertexPane||"markerPane":"markerPane"===e&&(t.options.pane=this._map.pm.globalOptions.panes&&this._map.pm.globalOptions.panes.markerPane||"markerPane")},remove:function(){(this._map||this._layer._map).pm.removeLayer({target:this._layer})},_vertexValidation:function(t,e){var i=e.target,n={layer:this._layer,marker:i,event:e},r="";return"move"===t?r="moveVertexValidation":"add"===t?r="addVertexValidation":"remove"===t&&(r="removeVertexValidation"),this.options[r]&&"function"==typeof this.options[r]&&!this.options[r](n)?("move"===t&&(i._cancelDragEventChain=i.getLatLng()),!1):(i._cancelDragEventChain=null,!0)},_vertexValidationDrag:function(t){return!t._cancelDragEventChain||(t._latlng=t._cancelDragEventChain,t.update(),!1)},_vertexValidationDragEnd:function(t){return!t._cancelDragEventChain||(t._cancelDragEventChain=null,!1)}});function we(t){return function(t){if(Array.isArray(t))return Ce(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return Ce(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return Ce(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ce(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}xe.LayerGroup=L.Class.extend({initialize:function(t){var e=this;this._layerGroup=t,this._layers=this.getLayers(),this._getMap(),this._layers.forEach((function(t){return e._initLayer(t)}));this._layerGroup.on("layeradd",L.Util.throttle((function(t){if(!t.layer._pmTempLayer){e._layers=e.getLayers();var i=e._layers.filter((function(t){return!t.pm._parentLayerGroup||!(e._layerGroup._leaflet_id in t.pm._parentLayerGroup)}));i.forEach((function(t){e._initLayer(t)})),i.length>0&&e._getMap()&&e._getMap().pm.globalEditModeEnabled()&&e.enabled()&&e.enable(e.getOptions())}}),100,this),this),this._layerGroup.on("layerremove",(function(t){e._removeLayerFromGroup(t.target)}),this);this._layerGroup.on("layerremove",L.Util.throttle((function(t){t.target._pmTempLayer||(e._layers=e.getLayers())}),100,this),this)},enable:function(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:[];0===e.length&&(this._layers=this.getLayers()),this._options=t,this._layers.forEach((function(i){i instanceof L.LayerGroup?-1===e.indexOf(i._leaflet_id)&&(e.push(i._leaflet_id),i.pm.enable(t,e)):i.pm.enable(t)}))},disable:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];0===t.length&&(this._layers=this.getLayers()),this._layers.forEach((function(e){e instanceof L.LayerGroup?-1===t.indexOf(e._leaflet_id)&&(t.push(e._leaflet_id),e.pm.disable(t)):e.pm.disable()}))},enabled:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];0===t.length&&(this._layers=this.getLayers());var e=this._layers.find((function(e){return e instanceof L.LayerGroup?-1===t.indexOf(e._leaflet_id)&&(t.push(e._leaflet_id),e.pm.enabled(t)):e.pm.enabled()}));return!!e},toggleEdit:function(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:[];0===e.length&&(this._layers=this.getLayers()),this._options=t,this._layers.forEach((function(i){i instanceof L.LayerGroup?-1===e.indexOf(i._leaflet_id)&&(e.push(i._leaflet_id),i.pm.toggleEdit(t,e)):i.pm.toggleEdit(t)}))},_initLayer:function(t){var e=L.Util.stamp(this._layerGroup);t.pm._parentLayerGroup||(t.pm._parentLayerGroup={}),t.pm._parentLayerGroup[e]=this._layerGroup},_removeLayerFromGroup:function(t){if(t.pm&&t.pm._layerGroup){var e=L.Util.stamp(this._layerGroup);delete t.pm._layerGroup[e]}},dragging:function(){if(this._layers=this.getLayers(),this._layers){var t=this._layers.find((function(t){return t.pm.dragging()}));return!!t}return!1},getOptions:function(){return this.options},_getMap:function(){var t;return this._map||(null===(t=this._layers.find((function(t){return!!t._map})))||void 0===t?void 0:t._map)||null},getLayers:function(){var t=arguments.length>0&&arguments[0]!==undefined&&arguments[0],e=!(arguments.length>1&&arguments[1]!==undefined)||arguments[1],i=!(arguments.length>2&&arguments[2]!==undefined)||arguments[2],n=arguments.length>3&&arguments[3]!==undefined?arguments[3]:[],r=[];return t?this._layerGroup.getLayers().forEach((function(t){r.push(t),t instanceof L.LayerGroup&&-1===n.indexOf(t._leaflet_id)&&(n.push(t._leaflet_id),r=r.concat(t.pm.getLayers(!0,!0,!0,n)))})):r=this._layerGroup.getLayers(),i&&(r=r.filter((function(t){return!(t instanceof L.LayerGroup)}))),e&&(r=(r=(r=r.filter((function(t){return!!t.pm}))).filter((function(t){return!t._pmTempLayer}))).filter((function(t){return!L.PM.optIn&&!t.options.pmIgnore||L.PM.optIn&&!1===t.options.pmIgnore}))),r},setOptions:function(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:[];0===e.length&&(this._layers=this.getLayers()),this.options=t,this._layers.forEach((function(i){i.pm&&(i instanceof L.LayerGroup?-1===e.indexOf(i._leaflet_id)&&(e.push(i._leaflet_id),i.pm.setOptions(t,e)):i.pm.setOptions(t))}))}}),xe.Marker=xe.extend({_shape:"Marker",initialize:function(t){this._layer=t,this._enabled=!1,this._layer.on("dragend",this._onDragEnd,this)},enable:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{draggable:!0};L.Util.setOptions(this,t),this.options.allowEditing&&this._layer._map?(this._map=this._layer._map,this.enabled()&&this.disable(),this.applyOptions(),this._layer.on("remove",this.disable,this),this._enabled=!0,this._fireEnable()):this.disable()},disable:function(){this.enabled()&&(this.disableLayerDrag(),this._layer.off("remove",this.disable,this),this._layer.off("contextmenu",this._removeMarker,this),this._layerEdited&&this._fireUpdate(),this._layerEdited=!1,this._fireDisable(),this._enabled=!1)},enabled:function(){return this._enabled},toggleEdit:function(t){this.enabled()?this.disable():this.enable(t)},applyOptions:function(){this.options.snappable?this._initSnappableMarkers():this._disableSnapping(),this.options.draggable?this.enableLayerDrag():this.disableLayerDrag(),this.options.preventMarkerRemoval||this._layer.on("contextmenu",this._removeMarker,this)},_removeMarker:function(t){var e=t.target;e.remove(),this._fireRemove(e),this._fireRemove(this._map,e)},_onDragEnd:function(){this._fireEdit(),this._layerEdited=!0},_initSnappableMarkers:function(){var t=this._layer;this.options.snapDistance=this.options.snapDistance||30,this.options.snapSegment=this.options.snapSegment===undefined||this.options.snapSegment,t.off("pm:drag",this._handleSnapping,this),t.on("pm:drag",this._handleSnapping,this),t.off("pm:dragend",this._cleanupSnapping,this),t.on("pm:dragend",this._cleanupSnapping,this),t.off("pm:dragstart",this._unsnap,this),t.on("pm:dragstart",this._unsnap,this)},_disableSnapping:function(){var t=this._layer;t.off("pm:drag",this._handleSnapping,this),t.off("pm:dragend",this._cleanupSnapping,this),t.off("pm:dragstart",this._unsnap,this)}});const Pe={filterMarkerGroup:function(){this.markerCache=[],this.createCache(),this._layer.on("pm:edit",this.createCache,this),this.applyLimitFilters({}),this._layer.on("pm:disable",this._removeMarkerLimitEvents,this),this.options.limitMarkersToCount>-1&&(this._layer.on("pm:vertexremoved",this._initMarkers,this),this._map.on("mousemove",this.applyLimitFilters,this))},_removeMarkerLimitEvents:function(){this._map.off("mousemove",this.applyLimitFilters,this),this._layer.off("pm:edit",this.createCache,this),this._layer.off("pm:disable",this._removeMarkerLimitEvents,this),this._layer.off("pm:vertexremoved",this._initMarkers,this)},createCache:function(){var t=[].concat(we(this._markerGroup.getLayers()),we(this.markerCache));this.markerCache=t.filter((function(t,e,i){return i.indexOf(t)===e}))},renderLimits:function(t){var e=this;this.markerCache.forEach((function(i){t.includes(i)?e._markerGroup.addLayer(i):e._markerGroup.removeLayer(i)}))},applyLimitFilters:function(t){var e=t.latlng,i=void 0===e?{lat:0,lng:0}:e;if(!this._preventRenderMarkers){var n=we(this._filterClosestMarkers(i));this.renderLimits(n)}},_filterClosestMarkers:function(t){var e=we(this.markerCache),i=this.options.limitMarkersToCount;return e.sort((function(e,i){return e._latlng.distanceTo(t)-i._latlng.distanceTo(t)})),e.filter((function(t,e){return!(i>-1)||e<i}))},_preventRenderMarkers:!1,_preventRenderingMarkers:function(t){this._preventRenderMarkers=!!t}};function Ee(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var i=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==i)return;var n,r,a=[],o=!0,s=!1;try{for(i=i.call(t);!(o=(n=i.next()).done)&&(a.push(n.value),!e||a.length!==e);o=!0);}catch(l){s=!0,r=l}finally{try{o||null==i["return"]||i["return"]()}finally{if(s)throw r}}return a}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return Se(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return Se(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Se(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function Oe(t){return function(t){if(Array.isArray(t))return De(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return De(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return De(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function De(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}xe.Line=xe.extend({includes:[Pe],_shape:"Line",initialize:function(t){this._layer=t,this._enabled=!1},enable:function(t){L.Util.setOptions(this,t),this._map=this._layer._map,this._map&&(this.options.allowEditing?(this.enabled()&&this.disable(),this._enabled=!0,this._initMarkers(),this.applyOptions(),this._layer.on("remove",this.disable,this),this.options.allowSelfIntersection||this._layer.on("pm:vertexremoved",this._handleSelfIntersectionOnVertexRemoval,this),this.options.allowSelfIntersection?this.cachedColor=undefined:("#f00000ff"!==this._layer.options.color?(this.cachedColor=this._layer.options.color,this.isRed=!1):this.isRed=!0,this._handleLayerStyle()),this._fireEnable()):this.disable())},disable:function(){if(this.enabled()&&!this._dragging){this._enabled=!1,this._markerGroup.clearLayers(),this._markerGroup.removeFrom(this._map),this._layer.off("remove",this.disable,this),this.options.allowSelfIntersection||this._layer.off("pm:vertexremoved",this._handleSelfIntersectionOnVertexRemoval,this);var t=this._layer._path?this._layer._path:this._layer._renderer._container;L.DomUtil.removeClass(t,"leaflet-pm-draggable"),this.hasSelfIntersection()&&L.DomUtil.removeClass(t,"leaflet-pm-invalid"),this._layerEdited&&this._fireUpdate(),this._layerEdited=!1,this._fireDisable()}},enabled:function(){return this._enabled},toggleEdit:function(t){return this.enabled()?this.disable():this.enable(t),this.enabled()},applyOptions:function(){this.options.snappable?this._initSnappableMarkers():this._disableSnapping()},_initMarkers:function(){var t=this,e=this._map,i=this._layer.getLatLngs();this._markerGroup&&this._markerGroup.clearLayers(),this._markerGroup=new L.LayerGroup,this._markerGroup._pmTempLayer=!0;this._markers=function n(e){if(Array.isArray(e[0]))return e.map(n,t);var i=e.map(t._createMarker,t);return!0!==t.options.hideMiddleMarkers&&e.map((function(n,r){var a=t.isPolygon()?(r+1)%e.length:r+1;return t._createMiddleMarker(i[r],i[a])})),i}(i),this.filterMarkerGroup(),e.addLayer(this._markerGroup)},_createMarker:function(t){var e=new L.Marker(t,{draggable:!0,icon:L.divIcon({className:"marker-icon"})});return this._setPane(e,"vertexPane"),e._pmTempLayer=!0,this.options.rotate?(e.on("dragstart",this._onRotateStart,this),e.on("drag",this._onRotate,this),e.on("dragend",this._onRotateEnd,this)):(e.on("click",this._onVertexClick,this),e.on("dragstart",this._onMarkerDragStart,this),e.on("move",this._onMarkerDrag,this),e.on("dragend",this._onMarkerDragEnd,this),this.options.preventMarkerRemoval||e.on(this.options.removeVertexOn,this._removeMarker,this)),this._markerGroup.addLayer(e),e},_createMiddleMarker:function(t,e){if(!t||!e)return!1;var i=L.PM.Utils.calcMiddleLatLng(this._map,t.getLatLng(),e.getLatLng()),n=this._createMarker(i),r=L.divIcon({className:"marker-icon marker-icon-middle"});return n.setIcon(r),n.leftM=t,n.rightM=e,t._middleMarkerNext=n,e._middleMarkerPrev=n,n.on(this.options.addVertexOn,this._onMiddleMarkerClick,this),n.on("movestart",this._onMiddleMarkerMoveStart,this),n},_onMiddleMarkerClick:function(t){var e=t.target;if(this._vertexValidation("add",t)){var i=L.divIcon({className:"marker-icon"});e.setIcon(i),this._addMarker(e,e.leftM,e.rightM)}},_onMiddleMarkerMoveStart:function(t){var e=t.target;e.on("moveend",this._onMiddleMarkerMoveEnd,this),this._vertexValidation("add",t)?(e._dragging=!0,this._addMarker(e,e.leftM,e.rightM)):e.on("move",this._onMiddleMarkerMovePrevent,this)},_onMiddleMarkerMovePrevent:function(t){var e=t.target;this._vertexValidationDrag(e)},_onMiddleMarkerMoveEnd:function(t){var e=t.target;if(e.off("move",this._onMiddleMarkerMovePrevent,this),e.off("moveend",this._onMiddleMarkerMoveEnd,this),this._vertexValidationDragEnd(e)){var i=L.divIcon({className:"marker-icon"});e.setIcon(i),setTimeout((function(){delete e._dragging}),100)}},_addMarker:function(t,e,i){t.off("movestart",this._onMiddleMarkerMoveStart,this),t.off(this.options.addVertexOn,this._onMiddleMarkerClick,this);var n=t.getLatLng(),r=this._layer._latlngs;delete t.leftM,delete t.rightM;var a=L.PM.Utils.findDeepMarkerIndex(this._markers,e),o=a.indexPath,s=a.index,l=a.parentPath,h=o.length>1?R()(r,l):r,u=o.length>1?R()(this._markers,l):this._markers;h.splice(s+1,0,n),u.splice(s+1,0,t),this._layer.setLatLngs(r),!0!==this.options.hideMiddleMarkers&&(this._createMiddleMarker(e,t),this._createMiddleMarker(t,i)),this._fireEdit(),this._layerEdited=!0,this._fireChange(this._layer.getLatLngs(),"Edit"),this._fireVertexAdded(t,L.PM.Utils.findDeepMarkerIndex(this._markers,t).indexPath,n),this.options.snappable&&this._initSnappableMarkers()},hasSelfIntersection:function(){return mt(this._layer.toGeoJSON(15)).features.length>0},_handleSelfIntersectionOnVertexRemoval:function(){this._handleLayerStyle(!0),this.hasSelfIntersection()&&(this._layer.setLatLngs(this._coordsBeforeEdit),this._coordsBeforeEdit=null,this._initMarkers())},_handleLayerStyle:function(t){var e=this._layer;if(this.hasSelfIntersection()){if(!this.options.allowSelfIntersection&&this.options.allowSelfIntersectionEdit&&this._updateDisabledMarkerStyle(this._markers,!0),this.isRed)return;t?this._flashLayer():(e.setStyle({color:"#f00000ff"}),this.isRed=!0),this._fireIntersect(mt(this._layer.toGeoJSON(15)))}else e.setStyle({color:this.cachedColor}),this.isRed=!1,!this.options.allowSelfIntersection&&this.options.allowSelfIntersectionEdit&&this._updateDisabledMarkerStyle(this._markers,!1)},_flashLayer:function(){var t=this;this.cachedColor||(this.cachedColor=this._layer.options.color),this._layer.setStyle({color:"#f00000ff"}),this.isRed=!0,window.setTimeout((function(){t._layer.setStyle({color:t.cachedColor}),t.isRed=!1}),200)},_updateDisabledMarkerStyle:function(t,e){var i=this;t.forEach((function(t){Array.isArray(t)?i._updateDisabledMarkerStyle(t,e):t._icon&&(e&&!i._checkMarkerAllowedToDrag(t)?L.DomUtil.addClass(t._icon,"vertexmarker-disabled"):L.DomUtil.removeClass(t._icon,"vertexmarker-disabled"))}))},_removeMarker:function(t){var e=t.target;if(this._vertexValidation("remove",t)){if(!this.options.allowSelfIntersection){var i=this._layer.getLatLngs();this._coordsBeforeEdit=JSON.parse(JSON.stringify(i))}var n=this._layer.getLatLngs(),r=L.PM.Utils.findDeepMarkerIndex(this._markers,e),a=r.indexPath,o=r.index,s=r.parentPath;if(a){var l=a.length>1?R()(n,s):n,h=a.length>1?R()(this._markers,s):this._markers;if(this.options.removeLayerBelowMinVertexCount||!(l.length<=2||this.isPolygon()&&l.length<=3)){l.splice(o,1),this._layer.setLatLngs(n),this.isPolygon()&&l.length<=2&&l.splice(0,l.length);var u=!1;if(l.length<=1&&(l.splice(0,l.length),this._layer.setLatLngs(n),this.disable(),this.enable(this.options),u=!0),j(n)&&this._layer.remove(),n=A(n),this._layer.setLatLngs(n),this._markers=A(this._markers),!u&&(h=a.length>1?R()(this._markers,s):this._markers,e._middleMarkerPrev&&this._markerGroup.removeLayer(e._middleMarkerPrev),e._middleMarkerNext&&this._markerGroup.removeLayer(e._middleMarkerNext),this._markerGroup.removeLayer(e),h)){var c,p;if(this.isPolygon()?(c=(o+1)%h.length,p=(o+(h.length-1))%h.length):(p=o-1<0?undefined:o-1,c=o+1>=h.length?undefined:o+1),c!==p){var d=h[p],f=h[c];!0!==this.options.hideMiddleMarkers&&this._createMiddleMarker(d,f)}h.splice(o,1)}this._fireEdit(),this._layerEdited=!0,this._fireVertexRemoved(e,a),this._fireChange(this._layer.getLatLngs(),"Edit")}else this._flashLayer()}}},updatePolygonCoordsFromMarkerDrag:function(t){var e=this._layer.getLatLngs(),i=t.getLatLng(),n=L.PM.Utils.findDeepMarkerIndex(this._markers,t),r=n.indexPath,a=n.index,o=n.parentPath;(r.length>1?R()(e,o):e).splice(a,1,i),this._layer.setLatLngs(e)},_getNeighborMarkers:function(t){var e=L.PM.Utils.findDeepMarkerIndex(this._markers,t),i=e.indexPath,n=e.index,r=e.parentPath,a=i.length>1?R()(this._markers,r):this._markers,o=(n+1)%a.length;return{prevMarker:a[(n+(a.length-1))%a.length],nextMarker:a[o]}},_checkMarkerAllowedToDrag:function(t){var e=this._getNeighborMarkers(t),i=e.prevMarker,n=e.nextMarker,r=L.polyline([i.getLatLng(),t.getLatLng()]),a=L.polyline([t.getLatLng(),n.getLatLng()]),o=jt(this._layer.toGeoJSON(15),r.toGeoJSON(15)).features.length,s=jt(this._layer.toGeoJSON(15),a.toGeoJSON(15)).features.length;return t.getLatLng()===this._markers[0][0].getLatLng()?s+=1:t.getLatLng()===this._markers[0][this._markers[0].length-1].getLatLng()&&(o+=1),!(o<=2&&s<=2)},_onMarkerDragStart:function(t){var e=t.target;if(this.cachedColor||(this.cachedColor=this._layer.options.color),this._vertexValidation("move",t)){var i=L.PM.Utils.findDeepMarkerIndex(this._markers,e).indexPath;this._fireMarkerDragStart(t,i),this.options.allowSelfIntersection||(this._coordsBeforeEdit=this._layer.getLatLngs()),!this.options.allowSelfIntersection&&this.options.allowSelfIntersectionEdit&&this.hasSelfIntersection()?this._markerAllowedToDrag=this._checkMarkerAllowedToDrag(e):this._markerAllowedToDrag=null}},_onMarkerDrag:function(t){var e=t.target;if(this._vertexValidationDrag(e)){var i=L.PM.Utils.findDeepMarkerIndex(this._markers,e),n=i.indexPath,r=i.index,a=i.parentPath;if(n){if(!this.options.allowSelfIntersection&&this.options.allowSelfIntersectionEdit&&this.hasSelfIntersection()&&!1===this._markerAllowedToDrag)return this._layer.setLatLngs(this._coordsBeforeEdit),this._initMarkers(),void this._handleLayerStyle();this.updatePolygonCoordsFromMarkerDrag(e);var o=n.length>1?R()(this._markers,a):this._markers,s=(r+1)%o.length,l=(r+(o.length-1))%o.length,h=e.getLatLng(),u=o[l].getLatLng(),c=o[s].getLatLng();if(e._middleMarkerNext){var p=L.PM.Utils.calcMiddleLatLng(this._map,h,c);e._middleMarkerNext.setLatLng(p)}if(e._middleMarkerPrev){var d=L.PM.Utils.calcMiddleLatLng(this._map,h,u);e._middleMarkerPrev.setLatLng(d)}this.options.allowSelfIntersection||this._handleLayerStyle(),this._fireMarkerDrag(t,n),this._fireChange(this._layer.getLatLngs(),"Edit")}}},_onMarkerDragEnd:function(t){var e=t.target;if(this._vertexValidationDragEnd(e)){var i=L.PM.Utils.findDeepMarkerIndex(this._markers,e).indexPath,n=this.hasSelfIntersection();n&&this.options.allowSelfIntersectionEdit&&this._markerAllowedToDrag&&(n=!1);var r=!this.options.allowSelfIntersection&&n;if(this._fireMarkerDragEnd(t,i,r),r)return this._layer.setLatLngs(this._coordsBeforeEdit),this._coordsBeforeEdit=null,this._initMarkers(),this.options.snappable&&this._initSnappableMarkers(),this._handleLayerStyle(),void this._fireLayerReset(t,i);!this.options.allowSelfIntersection&&this.options.allowSelfIntersectionEdit&&this._handleLayerStyle(),this._fireEdit(),this._layerEdited=!0,this._fireChange(this._layer.getLatLngs(),"Edit")}},_onVertexClick:function(t){var e=t.target;if(!e._dragging){var i=L.PM.Utils.findDeepMarkerIndex(this._markers,e).indexPath;this._fireVertexClick(t,i)}}}),xe.Polygon=xe.Line.extend({_shape:"Polygon",_checkMarkerAllowedToDrag:function(t){var e=this._getNeighborMarkers(t),i=e.prevMarker,n=e.nextMarker,r=L.polyline([i.getLatLng(),t.getLatLng()]),a=L.polyline([t.getLatLng(),n.getLatLng()]),o=jt(this._layer.toGeoJSON(15),r.toGeoJSON(15)).features.length,s=jt(this._layer.toGeoJSON(15),a.toGeoJSON(15)).features.length;return!(o<=2&&s<=2)}}),xe.Rectangle=xe.Polygon.extend({_shape:"Rectangle",_initMarkers:function(){var t=this,e=this._map,i=this._findCorners();this._markerGroup&&this._markerGroup.clearLayers(),this._markerGroup=new L.LayerGroup,this._markerGroup._pmTempLayer=!0,e.addLayer(this._markerGroup),this._markers=[],this._markers[0]=i.map(this._createMarker,this);var n=Ee(this._markers,1);this._cornerMarkers=n[0],this._layer.getLatLngs()[0].forEach((function(e,i){var n=t._cornerMarkers.find((function(t){return t._index===i}));n&&n.setLatLng(e)}))},applyOptions:function(){this.options.snappable?this._initSnappableMarkers():this._disableSnapping(),this._addMarkerEvents()},_createMarker:function(t,e){var i=new L.Marker(t,{draggable:!0,icon:L.divIcon({className:"marker-icon"})});return this._setPane(i,"vertexPane"),i._origLatLng=t,i._index=e,i._pmTempLayer=!0,this._markerGroup.addLayer(i),i},_addMarkerEvents:function(){var t=this;this._markers[0].forEach((function(e){e.on("dragstart",t._onMarkerDragStart,t),e.on("drag",t._onMarkerDrag,t),e.on("dragend",t._onMarkerDragEnd,t),t.options.preventMarkerRemoval||e.on("contextmenu",t._removeMarker,t)}))},_removeMarker:function(){return null},_onMarkerDragStart:function(t){if(this._vertexValidation("move",t)){var e=t.target,i=this._cornerMarkers;e._oppositeCornerLatLng=i.find((function(t){return t._index===(e._index+2)%4})).getLatLng(),e._snapped=!1,this._fireMarkerDragStart(t)}},_onMarkerDrag:function(t){var e=t.target;this._vertexValidationDrag(e)&&e._index!==undefined&&(this._adjustRectangleForMarkerMove(e),this._fireMarkerDrag(t),this._fireChange(this._layer.getLatLngs(),"Edit"))},_onMarkerDragEnd:function(t){var e=t.target;this._vertexValidationDragEnd(e)&&(this._cornerMarkers.forEach((function(t){delete t._oppositeCornerLatLng})),this._fireMarkerDragEnd(t),this._fireEdit(),this._layerEdited=!0,this._fireChange(this._layer.getLatLngs(),"Edit"))},_adjustRectangleForMarkerMove:function(t){L.extend(t._origLatLng,t._latlng);var e=L.PM.Utils._getRotatedRectangle(t.getLatLng(),t._oppositeCornerLatLng,this._angle||0,this._map);this._layer.setLatLngs(e),this._adjustAllMarkers(),this._layer.redraw()},_adjustAllMarkers:function(){var t=this,e=this._layer.getLatLngs()[0];e&&4!==e.length&&e.length>0?(e.forEach((function(e,i){t._cornerMarkers[i].setLatLng(e)})),this._cornerMarkers.slice(e.length).forEach((function(t){t.setLatLng(e[0])}))):e&&e.length?this._cornerMarkers.forEach((function(t){t.setLatLng(e[t._index])})):console.error("The layer has no LatLngs")},_findCorners:function(){var t=this._layer.getLatLngs()[0];return L.PM.Utils._getRotatedRectangle(t[0],t[2],this._angle||0,this._map)}}),xe.Circle=xe.extend({_shape:"Circle",initialize:function(t){this._layer=t,this._enabled=!1,this._updateHiddenPolyCircle()},enable:function(t){L.Util.setOptions(this,t),this._map=this._layer._map,this.options.allowEditing?(this.enabled()||this.disable(),this._enabled=!0,this._initMarkers(),this.applyOptions(),this._layer.on("remove",this.disable,this),this._updateHiddenPolyCircle(),this._fireEnable()):this.disable()},disable:function(){if(this.enabled()&&!this._dragging){this._centerMarker.off("dragstart",this._onCircleDragStart,this),this._centerMarker.off("drag",this._onCircleDrag,this),this._centerMarker.off("dragend",this._onCircleDragEnd,this),this._outerMarker.off("drag",this._handleOuterMarkerSnapping,this),this._layer.off("remove",this.disable,this),this._enabled=!1,this._helperLayers.clearLayers();var t=this._layer._path?this._layer._path:this._layer._renderer._container;L.DomUtil.removeClass(t,"leaflet-pm-draggable"),this._layerEdited&&this._fireUpdate(),this._layerEdited=!1,this._fireDisable()}},enabled:function(){return this._enabled},toggleEdit:function(t){this.enabled()?this.disable():this.enable(t)},_initMarkers:function(){var t=this._map;this._helperLayers&&this._helperLayers.clearLayers(),this._helperLayers=new L.LayerGroup,this._helperLayers._pmTempLayer=!0,this._helperLayers.addTo(t);var e=this._layer.getLatLng(),i=this._layer._radius,n=this._getLatLngOnCircle(e,i);this._centerMarker=this._createCenterMarker(e),this._outerMarker=this._createOuterMarker(n),this._markers=[this._centerMarker,this._outerMarker],this._createHintLine(this._centerMarker,this._outerMarker)},applyOptions:function(){this.options.snappable?(this._initSnappableMarkers(),this._outerMarker.on("drag",this._handleOuterMarkerSnapping,this),this._outerMarker.on("move",this._syncHintLine,this),this._outerMarker.on("move",this._syncCircleRadius,this),this._centerMarker.on("move",this._moveCircle,this)):this._disableSnapping()},_createHintLine:function(t,e){var i=t.getLatLng(),n=e.getLatLng();this._hintline=L.polyline([i,n],this.options.hintlineStyle),this._setPane(this._hintline,"layerPane"),this._hintline._pmTempLayer=!0,this._helperLayers.addLayer(this._hintline)},_createCenterMarker:function(t){var e=this._createMarker(t);return L.DomUtil.addClass(e._icon,"leaflet-pm-draggable"),e.on("drag",this._moveCircle,this),e.on("dragstart",this._onCircleDragStart,this),e.on("drag",this._onCircleDrag,this),e.on("dragend",this._onCircleDragEnd,this),e},_createOuterMarker:function(t){var e=this._createMarker(t);return e.on("drag",this._resizeCircle,this),e},_createMarker:function(t){var e=new L.Marker(t,{draggable:!0,icon:L.divIcon({className:"marker-icon"})});return this._setPane(e,"vertexPane"),e._origLatLng=t,e._pmTempLayer=!0,e.on("dragstart",this._onMarkerDragStart,this),e.on("drag",this._onMarkerDrag,this),e.on("dragend",this._onMarkerDragEnd,this),this._helperLayers.addLayer(e),e},_resizeCircle:function(){this._outerMarker.setLatLng(this._getNewDestinationOfOuterMarker()),this._syncHintLine(),this._syncCircleRadius()},_moveCircle:function(t){if(!t.target._cancelDragEventChain){var e=t.latlng;this._layer.setLatLng(e);var i=this._layer._radius,n=this._getLatLngOnCircle(e,i);this._outerMarker._latlng=n,this._outerMarker.update(),this._syncHintLine(),this._updateHiddenPolyCircle(),this._fireCenterPlaced("Edit"),this._fireChange(this._layer.getLatLng(),"Edit")}},_syncCircleRadius:function(){var t=this._centerMarker.getLatLng(),e=this._outerMarker.getLatLng(),i=this._map.distance(t,e);this.options.minRadiusCircle&&i<this.options.minRadiusCircle?this._layer.setRadius(this.options.minRadiusCircle):this.options.maxRadiusCircle&&i>this.options.maxRadiusCircle?this._layer.setRadius(this.options.maxRadiusCircle):this._layer.setRadius(i),this._updateHiddenPolyCircle(),this._fireChange(this._layer.getLatLng(),"Edit")},_syncHintLine:function(){var t=this._centerMarker.getLatLng(),e=this._outerMarker.getLatLng();this._hintline.setLatLngs([t,e])},_disableSnapping:function(){var t=this;this._markers.forEach((function(e){e.off("move",t._syncHintLine,t),e.off("move",t._syncCircleRadius,t),e.off("drag",t._handleSnapping,t),e.off("dragend",t._cleanupSnapping,t)})),this._layer.off("pm:dragstart",this._unsnap,this)},_onMarkerDragStart:function(t){this._vertexValidation("move",t)&&this._fireMarkerDragStart(t)},_onMarkerDrag:function(t){var e=t.target;this._vertexValidationDrag(e)&&this._fireMarkerDrag(t)},_onMarkerDragEnd:function(t){var e=t.target;this._vertexValidationDragEnd(e)&&(this._fireEdit(),this._layerEdited=!0,this._fireMarkerDragEnd(t))},_onCircleDragStart:function(t){this._vertexValidationDrag(t.target)?(delete this._vertexValidationReset,this._fireDragStart()):this._vertexValidationReset=!0},_onCircleDrag:function(t){this._vertexValidationReset||this._fireDrag(t)},_onCircleDragEnd:function(){this._vertexValidationReset?delete this._vertexValidationReset:this._fireDragEnd()},_updateHiddenPolyCircle:function(){var t=this._map&&this._map.pm._isCRSSimple();this._hiddenPolyCircle?this._hiddenPolyCircle.setLatLngs(L.PM.Utils.circleToPolygon(this._layer,200,!t).getLatLngs()):this._hiddenPolyCircle=L.PM.Utils.circleToPolygon(this._layer,200,!t),this._hiddenPolyCircle._parentCopy||(this._hiddenPolyCircle._parentCopy=this._layer)},_getLatLngOnCircle:function(t,e){var i=this._map.project(t),n=L.point(i.x+e,i.y);return this._map.unproject(n)},_getNewDestinationOfOuterMarker:function(){var t=this._centerMarker.getLatLng(),e=this._outerMarker.getLatLng(),i=this._map.distance(t,e);return this.options.minRadiusCircle&&i<this.options.minRadiusCircle?e=z(this._map,t,e,this.options.minRadiusCircle):this.options.maxRadiusCircle&&i>this.options.maxRadiusCircle&&(e=z(this._map,t,e,this.options.maxRadiusCircle)),e},_handleOuterMarkerSnapping:function(){if(this._outerMarker._snapped){var t=this._centerMarker.getLatLng(),e=this._outerMarker.getLatLng(),i=this._map.distance(t,e);(this.options.minRadiusCircle&&i<this.options.minRadiusCircle||this.options.maxRadiusCircle&&i>this.options.maxRadiusCircle)&&this._outerMarker.setLatLng(this._outerMarker._orgLatLng)}this._outerMarker.setLatLng(this._getNewDestinationOfOuterMarker())}}),xe.CircleMarker=xe.extend({_shape:"CircleMarker",initialize:function(t){this._layer=t,this._enabled=!1,this._updateHiddenPolyCircle()},enable:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{draggable:!0,snappable:!0};L.Util.setOptions(this,t),this.options.allowEditing&&this._layer._map?(this._map=this._layer._map,this.enabled()&&this.disable(),this.applyOptions(),this._layer.on("remove",this.disable,this),this._enabled=!0,this._layer.on("pm:dragstart",this._onDragStart,this),this._layer.on("pm:drag",this._onMarkerDrag,this),this._layer.on("pm:dragend",this._onMarkerDragEnd,this),this._updateHiddenPolyCircle(),this._fireEnable()):this.disable()},disable:function(){this._dragging||(this._helperLayers&&this._helperLayers.clearLayers(),this._map||(this._map=this._layer._map),this._map||(this.options.editable?(this._map.off("move",this._syncMarkers,this),this._outerMarker&&this._outerMarker.on("drag",this._handleOuterMarkerSnapping,this)):this._map.off("move",this._updateHiddenPolyCircle,this)),this.disableLayerDrag(),this._layer.off("contextmenu",this._removeMarker,this),this._layer.off("remove",this.disable,this),this.enabled()&&(this._layerEdited&&this._fireUpdate(),this._layerEdited=!1,this._fireDisable()),this._enabled=!1)},enabled:function(){return this._enabled},toggleEdit:function(t){this.enabled()?this.disable():this.enable(t)},applyOptions:function(){!this.options.editable&&this.options.draggable?this.enableLayerDrag():this.disableLayerDrag(),this.options.editable?(this._initMarkers(),this._map.on("move",this._syncMarkers,this)):this._map.on("move",this._updateHiddenPolyCircle,this),this.options.snappable?this.options.editable?(this._initSnappableMarkers(),this._centerMarker.on("drag",this._moveCircle,this),this.options.editable&&this._outerMarker.on("drag",this._handleOuterMarkerSnapping,this),this._outerMarker.on("move",this._syncHintLine,this),this._outerMarker.on("move",this._syncCircleRadius,this)):this._initSnappableMarkersDrag():this.options.editable?this._disableSnapping():this._disableSnappingDrag(),this.options.preventMarkerRemoval||this._layer.on("contextmenu",this._removeMarker,this)},_initMarkers:function(){var t=this._map;this._helperLayers&&this._helperLayers.clearLayers(),this._helperLayers=new L.LayerGroup,this._helperLayers._pmTempLayer=!0,this._helperLayers.addTo(t);var e=this._layer.getLatLng(),i=this._layer._radius,n=this._getLatLngOnCircle(e,i);this._centerMarker=this._createCenterMarker(e),this._outerMarker=this._createOuterMarker(n),this._markers=[this._centerMarker,this._outerMarker],this._createHintLine(this._centerMarker,this._outerMarker)},_getLatLngOnCircle:function(t,e){var i=this._map.project(t),n=L.point(i.x+e,i.y);return this._map.unproject(n)},_createHintLine:function(t,e){var i=t.getLatLng(),n=e.getLatLng();this._hintline=L.polyline([i,n],this.options.hintlineStyle),this._setPane(this._hintline,"layerPane"),this._hintline._pmTempLayer=!0,this._helperLayers.addLayer(this._hintline)},_createCenterMarker:function(t){var e=this._createMarker(t);return this.options.draggable?L.DomUtil.addClass(e._icon,"leaflet-pm-draggable"):e.dragging.disable(),e},_createOuterMarker:function(t){var e=this._createMarker(t);return e.on("drag",this._resizeCircle,this),e},_createMarker:function(t){var e=new L.Marker(t,{draggable:!0,icon:L.divIcon({className:"marker-icon"})});return this._setPane(e,"vertexPane"),e._origLatLng=t,e._pmTempLayer=!0,e.on("dragstart",this._onMarkerDragStart,this),e.on("drag",this._onMarkerDrag,this),e.on("dragend",this._onMarkerDragEnd,this),this._helperLayers.addLayer(e),e},_moveCircle:function(){var t=this._centerMarker.getLatLng();this._layer.setLatLng(t);var e=this._layer._radius,i=this._getLatLngOnCircle(t,e);this._outerMarker._latlng=i,this._outerMarker.update(),this._syncHintLine(),this._updateHiddenPolyCircle(),this._fireCenterPlaced("Edit"),this._fireChange(this._layer.getLatLng(),"Edit")},_syncMarkers:function(){var t=this._layer.getLatLng(),e=this._layer._radius,i=this._getLatLngOnCircle(t,e);this._outerMarker.setLatLng(i),this._centerMarker.setLatLng(t),this._syncHintLine(),this._updateHiddenPolyCircle()},_resizeCircle:function(){this._outerMarker.setLatLng(this._getNewDestinationOfOuterMarker()),this._syncHintLine(),this._syncCircleRadius()},_syncCircleRadius:function(){var t=this._centerMarker.getLatLng(),e=this._outerMarker.getLatLng(),i=this._map.project(t).distanceTo(this._map.project(e));this.options.minRadiusCircleMarker&&i<this.options.minRadiusCircleMarker?this._layer.setRadius(this.options.minRadiusCircleMarker):this.options.maxRadiusCircleMarker&&i>this.options.maxRadiusCircleMarker?this._layer.setRadius(this.options.maxRadiusCircleMarker):this._layer.setRadius(i),this._updateHiddenPolyCircle(),this._fireChange(this._layer.getLatLng(),"Edit")},_syncHintLine:function(){var t=this._centerMarker.getLatLng(),e=this._outerMarker.getLatLng();this._hintline.setLatLngs([t,e])},_removeMarker:function(){this.options.editable&&this.disable(),this._layer.remove(),this._fireRemove(this._layer),this._fireRemove(this._map,this._layer)},_onDragStart:function(){this._map.pm.Draw.CircleMarker._layerIsDragging=!0},_onMarkerDragStart:function(t){this._vertexValidation("move",t)&&this._fireMarkerDragStart(t)},_onMarkerDrag:function(t){var e=t.target;e instanceof L.Marker&&!this._vertexValidationDrag(e)||this._fireMarkerDrag(t)},_onMarkerDragEnd:function(t){this._map.pm.Draw.CircleMarker._layerIsDragging=!1;var e=t.target;this._vertexValidationDragEnd(e)&&(this.options.editable&&(this._fireEdit(),this._layerEdited=!0),this._fireMarkerDragEnd(t))},_initSnappableMarkersDrag:function(){var t=this._layer;this.options.snapDistance=this.options.snapDistance||30,this.options.snapSegment=this.options.snapSegment===undefined||this.options.snapSegment,t.off("pm:drag",this._handleSnapping,this),t.on("pm:drag",this._handleSnapping,this),t.off("pm:dragend",this._cleanupSnapping,this),t.on("pm:dragend",this._cleanupSnapping,this),t.off("pm:dragstart",this._unsnap,this),t.on("pm:dragstart",this._unsnap,this)},_disableSnappingDrag:function(){var t=this._layer;t.off("pm:drag",this._handleSnapping,this),t.off("pm:dragend",this._cleanupSnapping,this),t.off("pm:dragstart",this._unsnap,this)},_updateHiddenPolyCircle:function(){var t=this._layer._map||this._map;if(t){var e=L.PM.Utils.pxRadiusToMeterRadius(this._layer.getRadius(),t,this._layer.getLatLng()),i=L.circle(this._layer.getLatLng(),this._layer.options);i.setRadius(e);var n=t&&t.pm._isCRSSimple();this._hiddenPolyCircle?this._hiddenPolyCircle.setLatLngs(L.PM.Utils.circleToPolygon(i,200,!n).getLatLngs()):this._hiddenPolyCircle=L.PM.Utils.circleToPolygon(i,200,!n),this._hiddenPolyCircle._parentCopy||(this._hiddenPolyCircle._parentCopy=this._layer)}},_getNewDestinationOfOuterMarker:function(){var t=this._centerMarker.getLatLng(),e=this._outerMarker.getLatLng(),i=this._map.project(t).distanceTo(this._map.project(e));return this.options.minRadiusCircleMarker&&i<this.options.minRadiusCircleMarker?e=z(this._map,t,e,L.PM.Utils.pxRadiusToMeterRadius(this.options.minRadiusCircleMarker,this._map,t)):this.options.maxRadiusCircleMarker&&i>this.options.maxRadiusCircleMarker&&(e=z(this._map,t,e,L.PM.Utils.pxRadiusToMeterRadius(this.options.maxRadiusCircleMarker,this._map,t))),e},_handleOuterMarkerSnapping:function(){if(this._outerMarker._snapped){var t=this._centerMarker.getLatLng(),e=this._outerMarker.getLatLng(),i=this._map.project(t).distanceTo(this._map.project(e));(this.options.minRadiusCircleMarker&&i<this.options.minRadiusCircleMarker||this.options.maxRadiusCircleMarker&&i>this.options.maxRadiusCircleMarker)&&this._outerMarker.setLatLng(this._outerMarker._orgLatLng)}this._outerMarker.setLatLng(this._getNewDestinationOfOuterMarker())}}),xe.ImageOverlay=xe.extend({_shape:"ImageOverlay",initialize:function(t){this._layer=t,this._enabled=!1},toggleEdit:function(t){this.enabled()?this.disable():this.enable(t)},enabled:function(){return this._enabled},enable:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{draggable:!0,snappable:!0};L.Util.setOptions(this,t),this._map=this._layer._map,this._map&&(this.options.allowEditing?(this.enabled()||this.disable(),this.enableLayerDrag(),this._layer.on("remove",this.disable,this),this._enabled=!0,this._otherSnapLayers=this._findCorners(),this._fireEnable()):this.disable())},disable:function(){this._dragging||(this._map||(this._map=this._layer._map),this.disableLayerDrag(),this._layer.off("remove",this.disable,this),this.enabled()||(this._layerEdited&&this._fireUpdate(),this._layerEdited=!1,this._fireDisable()),this._enabled=!1)},_findCorners:function(){var t=this._layer.getBounds();return[t.getNorthWest(),t.getNorthEast(),t.getSouthEast(),t.getSouthWest()]}}),xe.Text=xe.extend({_shape:"Text",initialize:function(t){this._layer=t,this._enabled=!1},enable:function(t){L.Util.setOptions(this,t),this.textArea&&(this.options.allowEditing&&this._layer._map?(this._map=this._layer._map,this.enabled()&&this.disable(),this.applyOptions(),this._focusChange(),this.textArea.readOnly=!1,this.textArea.classList.remove("pm-disabled"),this._layer.on("remove",this.disable,this),L.DomEvent.on(this.textArea,"input",this._autoResize,this),L.DomEvent.on(this.textArea,"focus",this._focusChange,this),L.DomEvent.on(this.textArea,"blur",this._focusChange,this),this._layer.on("dblclick",L.DomEvent.stop),L.DomEvent.off(this.textArea,"mousedown",this._preventTextSelection),this._enabled=!0,this._fireEnable()):this.disable())},disable:function(){if(this.enabled()){this._layer.off("remove",this.disable,this),L.DomEvent.off(this.textArea,"input",this._autoResize,this),L.DomEvent.off(this.textArea,"focus",this._focusChange,this),L.DomEvent.off(this.textArea,"blur",this._focusChange,this),L.DomEvent.off(document,"click",this._documentClick,this),this._focusChange(),this.textArea.readOnly=!0,this.textArea.classList.add("pm-disabled");var t=document.activeElement;this.textArea.focus(),this.textArea.selectionStart=0,this.textArea.selectionEnd=0,L.DomEvent.on(this.textArea,"mousedown",this._preventTextSelection),t.focus(),this._disableOnBlurActive=!1,this._layerEdited&&this._fireUpdate(),this._layerEdited=!1,this._fireDisable(),this._enabled=!1}},enabled:function(){return this._enabled},toggleEdit:function(t){this.enabled()?this.disable():this.enable(t)},applyOptions:function(){this.options.snappable?this._initSnappableMarkers():this._disableSnapping()},_initSnappableMarkers:function(){var t=this._layer;this.options.snapDistance=this.options.snapDistance||30,this.options.snapSegment=this.options.snapSegment===undefined||this.options.snapSegment,t.off("pm:drag",this._handleSnapping,this),t.on("pm:drag",this._handleSnapping,this),t.off("pm:dragend",this._cleanupSnapping,this),t.on("pm:dragend",this._cleanupSnapping,this),t.off("pm:dragstart",this._unsnap,this),t.on("pm:dragstart",this._unsnap,this)},_disableSnapping:function(){var t=this._layer;t.off("pm:drag",this._handleSnapping,this),t.off("pm:dragend",this._cleanupSnapping,this),t.off("pm:dragstart",this._unsnap,this)},_autoResize:function(){this.textArea.style.height="1px",this.textArea.style.width="1px";var t=this.textArea.scrollHeight>21?this.textArea.scrollHeight:21,e=this.textArea.scrollWidth>16?this.textArea.scrollWidth:16;this.textArea.style.height="".concat(t,"px"),this.textArea.style.width="".concat(e,"px"),this._fireTextChange(this.getText())},_disableOnBlur:function(){var t=this;this._disableOnBlurActive=!0,setTimeout((function(){t.enabled()&&L.DomEvent.on(document,"click",t._documentClick,t)}),100)},_documentClick:function(t){t.target!==this.textArea&&(this.disable(),!this.getText()&&this.options.removeIfEmpty&&this.remove())},_focusChange:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};this._hasFocus="focus"===t.type,this._hasFocus?this._applyFocus():this._removeFocus()},_applyFocus:function(){this.textArea.classList.add("pm-hasfocus"),this._map.dragging&&(this._safeToCacheDragState&&(this._originalMapDragState=this._map.dragging._enabled,this._safeToCacheDragState=!1),this._map.dragging.disable())},_removeFocus:function(){this._map.dragging&&(this._originalMapDragState&&this._map.dragging.enable(),this._safeToCacheDragState=!0),this.textArea.classList.remove("pm-hasfocus")},focus:function(){if(!this.enabled())throw new TypeError("Layer is not enabled");this.textArea.focus()},blur:function(){if(!this.enabled())throw new TypeError("Layer is not enabled");this.textArea.blur(),this._disableOnBlurActive&&this.disable()},hasFocus:function(){return this._hasFocus},getElement:function(){return this.textArea},setText:function(t){this.textArea.value=t,this._autoResize()},getText:function(){return this.textArea.value},_initTextMarker:function(){if(this.textArea=L.PM.Draw.Text.prototype._createTextArea.call(this),this.options.className){var t,e=this.options.className.split(" ");(t=this.textArea.classList).add.apply(t,Oe(e))}var i=L.PM.Draw.Text.prototype._createTextIcon.call(this,this.textArea);this._layer.setIcon(i),this._layer.once("add",this._createTextMarker,this)},_createTextMarker:function(){var t=arguments.length>0&&arguments[0]!==undefined&&arguments[0];this._layer.getElement().tabIndex=-1,this.textArea.wrap="off",this.textArea.style.overflow="hidden",this.textArea.style.height=L.DomUtil.getStyle(this.textArea,"font-size"),this.textArea.style.width="1px",this._layer.options.text&&this.setText(this._layer.options.text),this._autoResize(),t&&(this.enable(),this.focus(),this._disableOnBlur())},_preventTextSelection:function(t){t.preventDefault()}});var Re=function(t,e,i,n,r,a){this._matrix=[t,e,i,n,r,a]};Re.init=function(){return new L.PM.Matrix(1,0,0,1,0,0)},Re.prototype={transform:function(t){return this._transform(t.clone())},_transform:function(t){var e=this._matrix,i=t.x,n=t.y;return t.x=e[0]*i+e[1]*n+e[4],t.y=e[2]*i+e[3]*n+e[5],t},untransform:function(t){var e=this._matrix;return new L.Point((t.x/e[0]-e[4])/e[0],(t.y/e[2]-e[5])/e[2])},clone:function(){var t=this._matrix;return new L.PM.Matrix(t[0],t[1],t[2],t[3],t[4],t[5])},translate:function(t){return t===undefined?new L.Point(this._matrix[4],this._matrix[5]):("number"==typeof t?(e=t,i=t):(e=t.x,i=t.y),this._add(1,0,0,1,e,i));var e,i},scale:function(t,e){return t===undefined?new L.Point(this._matrix[0],this._matrix[3]):(e=e||L.point(0,0),"number"==typeof t?(i=t,n=t):(i=t.x,n=t.y),this._add(i,0,0,n,e.x,e.y)._add(1,0,0,1,-e.x,-e.y));var i,n},rotate:function(t,e){var i=Math.cos(t),n=Math.sin(t);return e=e||new L.Point(0,0),this._add(i,n,-n,i,e.x,e.y)._add(1,0,0,1,-e.x,-e.y)},flip:function(){return this._matrix[1]*=-1,this._matrix[2]*=-1,this},_add:function(t,e,i,n,r,a){var o,s=[[],[],[]],l=this._matrix,h=[[l[0],l[2],l[4]],[l[1],l[3],l[5]],[0,0,1]],u=[[t,i,r],[e,n,a],[0,0,1]];t&&t instanceof L.PM.Matrix&&(u=[[(l=t._matrix)[0],l[2],l[4]],[l[1],l[3],l[5]],[0,0,1]]);for(var c=0;c<3;c+=1)for(var p=0;p<3;p+=1){o=0;for(var d=0;d<3;d+=1)o+=h[c][d]*u[d][p];s[c][p]=o}return this._matrix=[s[0][0],s[1][0],s[0][1],s[1][1],s[0][2],s[1][2]],this}};const Be=Re;var Te={calcMiddleLatLng:function(t,e,i){var n=t.project(e),r=t.project(i);return t.unproject(n._add(r)._divideBy(2))},findLayers:function(t){var e=[];return t.eachLayer((function(t){(t instanceof L.Polyline||t instanceof L.Marker||t instanceof L.Circle||t instanceof L.CircleMarker||t instanceof L.ImageOverlay)&&e.push(t)})),e=(e=(e=e.filter((function(t){return!!t.pm}))).filter((function(t){return!t._pmTempLayer}))).filter((function(t){return!L.PM.optIn&&!t.options.pmIgnore||L.PM.optIn&&!1===t.options.pmIgnore}))},circleToPolygon:function(t){for(var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:60,i=!(arguments.length>2&&arguments[2]!==undefined)||arguments[2],n=t.getLatLng(),r=t.getRadius(),a=N(n,r,e,0,i),o=[],s=0;s<a.length;s+=1){var l=[a[s].lat,a[s].lng];o.push(l)}return L.polygon(o,t.options)},disablePopup:function(t){t.getPopup()&&(t._tempPopupCopy=t.getPopup(),t.unbindPopup())},enablePopup:function(t){t._tempPopupCopy&&(t.bindPopup(t._tempPopupCopy),delete t._tempPopupCopy)},_fireEvent:function(t,e,i){var n=arguments.length>3&&arguments[3]!==undefined&&arguments[3];t.fire(e,i,n);var r=this.getAllParentGroups(t),a=r.groups;a.forEach((function(t){t.fire(e,i,n)}))},getAllParentGroups:function(t){var e=[],i=[];return!t._pmLastGroupFetch||!t._pmLastGroupFetch.time||(new Date).getTime()-t._pmLastGroupFetch.time>1e3?(function n(t){for(var r in t._eventParents)if(-1===e.indexOf(r)){e.push(r);var a=t._eventParents[r];i.push(a),n(a)}}(t),t._pmLastGroupFetch={time:(new Date).getTime(),groups:i,groupIds:e},{groupIds:e,groups:i}):{groups:t._pmLastGroupFetch.groups,groupIds:t._pmLastGroupFetch.groupIds}},createGeodesicPolygon:N,getTranslation:I,findDeepCoordIndex:function(t,e){var i;t.some(function r(t){return function(n,a){var o=t.concat(a);return n.lat&&n.lat===e.lat&&n.lng===e.lng?(i=o,!0):Array.isArray(n)&&n.some(r(o))}}([]));var n={};return i&&(n={indexPath:i,index:i[i.length-1],parentPath:i.slice(0,i.length-1)}),n},findDeepMarkerIndex:function(t,e){var i;t.some(function r(t){return function(n,a){var o=t.concat(a);return n._leaflet_id===e._leaflet_id?(i=o,!0):Array.isArray(n)&&n.some(r(o))}}([]));var n={};return i&&(n={indexPath:i,index:i[i.length-1],parentPath:i.slice(0,i.length-1)}),n},_getIndexFromSegment:function(t,e){if(e&&2===e.length){var i=this.findDeepCoordIndex(t,e[0]),n=this.findDeepCoordIndex(t,e[1]),r=Math.max(i.index,n.index);return 0!==i.index&&0!==n.index||1===r||(r+=1),{indexA:i,indexB:n,newIndex:r,indexPath:i.indexPath,parentPath:i.parentPath}}return null},_getRotatedRectangle:function(t,e,i,n){var r=Le(n,t),a=Le(n,e),o=i*Math.PI/180,s=Math.cos(o),l=Math.sin(o),h=(a.x-r.x)*s+(a.y-r.y)*l,u=(a.y-r.y)*s-(a.x-r.x)*l,c=h*s+r.x,p=h*l+r.y,d=-u*l+r.x,f=u*s+r.y;return[be(n,r),be(n,{x:c,y:p}),be(n,a),be(n,{x:d,y:f})]},pxRadiusToMeterRadius:function(t,e,i){var n=e.project(i),r=L.point(n.x+t,n.y);return e.distance(e.unproject(r),i)}};const Ie=Te;L.PM=L.PM||{version:"2.13.0",Map:K,Toolbar:Q,Draw:at,Edit:xe,Utils:Ie,Matrix:Be,activeLang:"en",optIn:!1,initialize:function(t){this.addInitHooks(t)},setOptIn:function(t){this.optIn=!!t},addInitHooks:function(){L.Map.addInitHook((function(){this.pm=undefined,L.PM.optIn?!1===this.options.pmIgnore&&(this.pm=new L.PM.Map(this)):this.options.pmIgnore||(this.pm=new L.PM.Map(this))})),L.LayerGroup.addInitHook((function(){this.pm=undefined,L.PM.optIn?!1===this.options.pmIgnore&&(this.pm=new L.PM.Edit.LayerGroup(this)):this.options.pmIgnore||(this.pm=new L.PM.Edit.LayerGroup(this))})),L.Marker.addInitHook((function(){this.pm=undefined,L.PM.optIn?!1===this.options.pmIgnore&&(this.options.textMarker?(this.pm=new L.PM.Edit.Text(this),this.options._textMarkerOverPM||this.pm._initTextMarker(),delete this.options._textMarkerOverPM):this.pm=new L.PM.Edit.Marker(this)):this.options.pmIgnore||(this.options.textMarker?(this.pm=new L.PM.Edit.Text(this),this.options._textMarkerOverPM||this.pm._initTextMarker(),delete this.options._textMarkerOverPM):this.pm=new L.PM.Edit.Marker(this))})),L.CircleMarker.addInitHook((function(){this.pm=undefined,L.PM.optIn?!1===this.options.pmIgnore&&(this.pm=new L.PM.Edit.CircleMarker(this)):this.options.pmIgnore||(this.pm=new L.PM.Edit.CircleMarker(this))})),L.Polyline.addInitHook((function(){this.pm=undefined,L.PM.optIn?!1===this.options.pmIgnore&&(this.pm=new L.PM.Edit.Line(this)):this.options.pmIgnore||(this.pm=new L.PM.Edit.Line(this))})),L.Polygon.addInitHook((function(){this.pm=undefined,L.PM.optIn?!1===this.options.pmIgnore&&(this.pm=new L.PM.Edit.Polygon(this)):this.options.pmIgnore||(this.pm=new L.PM.Edit.Polygon(this))})),L.Rectangle.addInitHook((function(){this.pm=undefined,L.PM.optIn?!1===this.options.pmIgnore&&(this.pm=new L.PM.Edit.Rectangle(this)):this.options.pmIgnore||(this.pm=new L.PM.Edit.Rectangle(this))})),L.Circle.addInitHook((function(){this.pm=undefined,L.PM.optIn?!1===this.options.pmIgnore&&(this.pm=new L.PM.Edit.Circle(this)):this.options.pmIgnore||(this.pm=new L.PM.Edit.Circle(this))})),L.ImageOverlay.addInitHook((function(){this.pm=undefined,L.PM.optIn?!1===this.options.pmIgnore&&(this.pm=new L.PM.Edit.ImageOverlay(this)):this.options.pmIgnore||(this.pm=new L.PM.Edit.ImageOverlay(this))}))},reInitLayer:function(t){var e=this;t instanceof L.LayerGroup&&t.eachLayer((function(t){e.reInitLayer(t)})),t.pm||L.PM.optIn&&!1!==t.options.pmIgnore||t.options.pmIgnore||(t instanceof L.Map?t.pm=new L.PM.Map(t):t instanceof L.Marker?t.pm=new L.PM.Edit.Marker(t):t instanceof L.Circle?t.pm=new L.PM.Edit.Circle(t):t instanceof L.CircleMarker?t.pm=new L.PM.Edit.CircleMarker(t):t instanceof L.Rectangle?t.pm=new L.PM.Edit.Rectangle(t):t instanceof L.Polygon?t.pm=new L.PM.Edit.Polygon(t):t instanceof L.Polyline?t.pm=new L.PM.Edit.Line(t):t instanceof L.LayerGroup?t.pm=new L.PM.Edit.LayerGroup(t):t instanceof L.ImageOverlay&&(t.pm=new L.PM.Edit.ImageOverlay(t)))}},L.PM.initialize()},7107:()=>{Array.prototype.findIndex=Array.prototype.findIndex||function(t){if(null===this)throw new TypeError("Array.prototype.findIndex called on null or undefined");if("function"!=typeof t)throw new TypeError("callback must be a function");for(var e=Object(this),i=e.length>>>0,n=arguments[1],r=0;r<i;r++)if(t.call(n,e[r],r,e))return r;return-1},Array.prototype.find=Array.prototype.find||function(t){if(null===this)throw new TypeError("Array.prototype.find called on null or undefined");if("function"!=typeof t)throw new TypeError("callback must be a function");for(var e=Object(this),i=e.length>>>0,n=arguments[1],r=0;r<i;r++){var a=e[r];if(t.call(n,a,r,e))return a}},"function"!=typeof Object.assign&&(Object.assign=function(t){"use strict";if(null==t)throw new TypeError("Cannot convert undefined or null to object");t=Object(t);for(var e=1;e<arguments.length;e++){var i=arguments[e];if(null!=i)for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t}),[Element.prototype,CharacterData.prototype,DocumentType.prototype].forEach((function(t){t.hasOwnProperty("remove")||Object.defineProperty(t,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){this.parentNode.removeChild(this)}})})),Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(t,e){if(null==this)throw new TypeError('"this" is null or not defined');var i=Object(this),n=i.length>>>0;if(0===n)return!1;var r,a,o=0|e,s=Math.max(o>=0?o:n-Math.abs(o),0);for(;s<n;){if((r=i[s])===(a=t)||"number"==typeof r&&"number"==typeof a&&isNaN(r)&&isNaN(a))return!0;s++}return!1}})},1787:(t,e,i)=>{var n=i(2582),r=i(4102),a=i(1540),o=i(9705).Z,s=a.featureEach,l=(a.coordEach,r.polygon,r.featureCollection);function h(t){var e=new n(t);return e.insert=function(t){if("Feature"!==t.type)throw new Error("invalid feature");return t.bbox=t.bbox?t.bbox:o(t),n.prototype.insert.call(this,t)},e.load=function(t){var e=[];return Array.isArray(t)?t.forEach((function(t){if("Feature"!==t.type)throw new Error("invalid features");t.bbox=t.bbox?t.bbox:o(t),e.push(t)})):s(t,(function(t){if("Feature"!==t.type)throw new Error("invalid features");t.bbox=t.bbox?t.bbox:o(t),e.push(t)})),n.prototype.load.call(this,e)},e.remove=function(t,e){if("Feature"!==t.type)throw new Error("invalid feature");return t.bbox=t.bbox?t.bbox:o(t),n.prototype.remove.call(this,t,e)},e.clear=function(){return n.prototype.clear.call(this)},e.search=function(t){var e=n.prototype.search.call(this,this.toBBox(t));return l(e)},e.collides=function(t){return n.prototype.collides.call(this,this.toBBox(t))},e.all=function(){var t=n.prototype.all.call(this);return l(t)},e.toJSON=function(){return n.prototype.toJSON.call(this)},e.fromJSON=function(t){return n.prototype.fromJSON.call(this,t)},e.toBBox=function(t){var e;if(t.bbox)e=t.bbox;else if(Array.isArray(t)&&4===t.length)e=t;else if(Array.isArray(t)&&6===t.length)e=[t[0],t[1],t[3],t[4]];else if("Feature"===t.type)e=o(t);else{if("FeatureCollection"!==t.type)throw new Error("invalid geojson");e=o(t)}return{minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]}},e}t.exports=h,t.exports["default"]=h},1989:(t,e,i)=>{var n=i(1789),r=i(401),a=i(7667),o=i(1327),s=i(1866);function l(t){var e=-1,i=null==t?0:t.length;for(this.clear();++e<i;){var n=t[e];this.set(n[0],n[1])}}l.prototype.clear=n,l.prototype["delete"]=r,l.prototype.get=a,l.prototype.has=o,l.prototype.set=s,t.exports=l},8407:(t,e,i)=>{var n=i(7040),r=i(4125),a=i(2117),o=i(7518),s=i(4705);function l(t){var e=-1,i=null==t?0:t.length;for(this.clear();++e<i;){var n=t[e];this.set(n[0],n[1])}}l.prototype.clear=n,l.prototype["delete"]=r,l.prototype.get=a,l.prototype.has=o,l.prototype.set=s,t.exports=l},7071:(t,e,i)=>{var n=i(852)(i(5639),"Map");t.exports=n},3369:(t,e,i)=>{var n=i(4785),r=i(1285),a=i(6e3),o=i(9916),s=i(5265);function l(t){var e=-1,i=null==t?0:t.length;for(this.clear();++e<i;){var n=t[e];this.set(n[0],n[1])}}l.prototype.clear=n,l.prototype["delete"]=r,l.prototype.get=a,l.prototype.has=o,l.prototype.set=s,t.exports=l},6384:(t,e,i)=>{var n=i(8407),r=i(7465),a=i(3779),o=i(7599),s=i(4758),l=i(4309);function h(t){var e=this.__data__=new n(t);this.size=e.size}h.prototype.clear=r,h.prototype["delete"]=a,h.prototype.get=o,h.prototype.has=s,h.prototype.set=l,t.exports=h},2705:(t,e,i)=>{var n=i(5639).Symbol;t.exports=n},1149:(t,e,i)=>{var n=i(5639).Uint8Array;t.exports=n},6874:t=>{t.exports=function(t,e,i){switch(i.length){case 0:return t.call(e);case 1:return t.call(e,i[0]);case 2:return t.call(e,i[0],i[1]);case 3:return t.call(e,i[0],i[1],i[2])}return t.apply(e,i)}},4636:(t,e,i)=>{var n=i(2545),r=i(5694),a=i(1469),o=i(4144),s=i(5776),l=i(6719),h=Object.prototype.hasOwnProperty;t.exports=function(t,e){var i=a(t),u=!i&&r(t),c=!i&&!u&&o(t),p=!i&&!u&&!c&&l(t),d=i||u||c||p,f=d?n(t.length,String):[],g=f.length;for(var _ in t)!e&&!h.call(t,_)||d&&("length"==_||c&&("offset"==_||"parent"==_)||p&&("buffer"==_||"byteLength"==_||"byteOffset"==_)||s(_,g))||f.push(_);return f}},9932:t=>{t.exports=function(t,e){for(var i=-1,n=null==t?0:t.length,r=Array(n);++i<n;)r[i]=e(t[i],i,t);return r}},6556:(t,e,i)=>{var n=i(9465),r=i(7813);t.exports=function(t,e,i){(i!==undefined&&!r(t[e],i)||i===undefined&&!(e in t))&&n(t,e,i)}},4865:(t,e,i)=>{var n=i(9465),r=i(7813),a=Object.prototype.hasOwnProperty;t.exports=function(t,e,i){var o=t[e];a.call(t,e)&&r(o,i)&&(i!==undefined||e in t)||n(t,e,i)}},8470:(t,e,i)=>{var n=i(7813);t.exports=function(t,e){for(var i=t.length;i--;)if(n(t[i][0],e))return i;return-1}},9465:(t,e,i)=>{var n=i(8777);t.exports=function(t,e,i){"__proto__"==e&&n?n(t,e,{configurable:!0,enumerable:!0,value:i,writable:!0}):t[e]=i}},3118:(t,e,i)=>{var n=i(3218),r=Object.create,a=function(){function t(){}return function(e){if(!n(e))return{};if(r)return r(e);t.prototype=e;var i=new t;return t.prototype=undefined,i}}();t.exports=a},8483:(t,e,i)=>{var n=i(5063)();t.exports=n},7786:(t,e,i)=>{var n=i(1811),r=i(327);t.exports=function(t,e){for(var i=0,a=(e=n(e,t)).length;null!=t&&i<a;)t=t[r(e[i++])];return i&&i==a?t:undefined}},4239:(t,e,i)=>{var n=i(2705),r=i(9607),a=i(2333),o=n?n.toStringTag:undefined;t.exports=function(t){return null==t?t===undefined?"[object Undefined]":"[object Null]":o&&o in Object(t)?r(t):a(t)}},8565:t=>{var e=Object.prototype.hasOwnProperty;t.exports=function(t,i){return null!=t&&e.call(t,i)}},9454:(t,e,i)=>{var n=i(4239),r=i(7005);t.exports=function(t){return r(t)&&"[object Arguments]"==n(t)}},8458:(t,e,i)=>{var n=i(3560),r=i(5346),a=i(3218),o=i(346),s=/^\[object .+?Constructor\]$/,l=Function.prototype,h=Object.prototype,u=l.toString,c=h.hasOwnProperty,p=RegExp("^"+u.call(c).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!a(t)||r(t))&&(n(t)?p:s).test(o(t))}},8749:(t,e,i)=>{var n=i(4239),r=i(1780),a=i(7005),o={};o["[object Float32Array]"]=o["[object Float64Array]"]=o["[object Int8Array]"]=o["[object Int16Array]"]=o["[object Int32Array]"]=o["[object Uint8Array]"]=o["[object Uint8ClampedArray]"]=o["[object Uint16Array]"]=o["[object Uint32Array]"]=!0,o["[object Arguments]"]=o["[object Array]"]=o["[object ArrayBuffer]"]=o["[object Boolean]"]=o["[object DataView]"]=o["[object Date]"]=o["[object Error]"]=o["[object Function]"]=o["[object Map]"]=o["[object Number]"]=o["[object Object]"]=o["[object RegExp]"]=o["[object Set]"]=o["[object String]"]=o["[object WeakMap]"]=!1,t.exports=function(t){return a(t)&&r(t.length)&&!!o[n(t)]}},313:(t,e,i)=>{var n=i(3218),r=i(5726),a=i(3498),o=Object.prototype.hasOwnProperty;t.exports=function(t){if(!n(t))return a(t);var e=r(t),i=[];for(var s in t)("constructor"!=s||!e&&o.call(t,s))&&i.push(s);return i}},2980:(t,e,i)=>{var n=i(6384),r=i(6556),a=i(8483),o=i(9783),s=i(3218),l=i(1704),h=i(6390);t.exports=function u(t,e,i,c,p){t!==e&&a(e,(function(a,l){if(p||(p=new n),s(a))o(t,e,l,i,u,c,p);else{var d=c?c(h(t,l),a,l+"",t,e,p):undefined;d===undefined&&(d=a),r(t,l,d)}}),l)}},9783:(t,e,i)=>{var n=i(6556),r=i(4626),a=i(7133),o=i(278),s=i(8517),l=i(5694),h=i(1469),u=i(9246),c=i(4144),p=i(3560),d=i(3218),f=i(8630),g=i(6719),_=i(6390),m=i(9881);t.exports=function(t,e,i,y,v,L,b){var k=_(t,i),M=_(e,i),x=b.get(M);if(x)n(t,i,x);else{var w=L?L(k,M,i+"",t,e,b):undefined,C=w===undefined;if(C){var P=h(M),E=!P&&c(M),S=!P&&!E&&g(M);w=M,P||E||S?h(k)?w=k:u(k)?w=o(k):E?(C=!1,w=r(M,!0)):S?(C=!1,w=a(M,!0)):w=[]:f(M)||l(M)?(w=k,l(k)?w=m(k):d(k)&&!p(k)||(w=s(M))):C=!1}C&&(b.set(M,w),v(w,M,y,L,b),b["delete"](M)),n(t,i,w)}}},5976:(t,e,i)=>{var n=i(6557),r=i(5357),a=i(61);t.exports=function(t,e){return a(r(t,e,n),t+"")}},6560:(t,e,i)=>{var n=i(5703),r=i(8777),a=i(6557),o=r?function(t,e){return r(t,"toString",{configurable:!0,enumerable:!1,value:n(e),writable:!0})}:a;t.exports=o},2545:t=>{t.exports=function(t,e){for(var i=-1,n=Array(t);++i<t;)n[i]=e(i);return n}},531:(t,e,i)=>{var n=i(2705),r=i(9932),a=i(1469),o=i(3448),s=n?n.prototype:undefined,l=s?s.toString:undefined;t.exports=function h(t){if("string"==typeof t)return t;if(a(t))return r(t,h)+"";if(o(t))return l?l.call(t):"";var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e}},1717:t=>{t.exports=function(t){return function(e){return t(e)}}},1811:(t,e,i)=>{var n=i(1469),r=i(5403),a=i(5514),o=i(9833);t.exports=function(t,e){return n(t)?t:r(t,e)?[t]:a(o(t))}},4318:(t,e,i)=>{var n=i(1149);t.exports=function(t){var e=new t.constructor(t.byteLength);return new n(e).set(new n(t)),e}},4626:(t,e,i)=>{t=i.nmd(t);var n=i(5639),r=e&&!e.nodeType&&e,a=r&&t&&!t.nodeType&&t,o=a&&a.exports===r?n.Buffer:undefined,s=o?o.allocUnsafe:undefined;t.exports=function(t,e){if(e)return t.slice();var i=t.length,n=s?s(i):new t.constructor(i);return t.copy(n),n}},7133:(t,e,i)=>{var n=i(4318);t.exports=function(t,e){var i=e?n(t.buffer):t.buffer;return new t.constructor(i,t.byteOffset,t.length)}},278:t=>{t.exports=function(t,e){var i=-1,n=t.length;for(e||(e=Array(n));++i<n;)e[i]=t[i];return e}},8363:(t,e,i)=>{var n=i(4865),r=i(9465);t.exports=function(t,e,i,a){var o=!i;i||(i={});for(var s=-1,l=e.length;++s<l;){var h=e[s],u=a?a(i[h],t[h],h,i,t):undefined;u===undefined&&(u=t[h]),o?r(i,h,u):n(i,h,u)}return i}},4429:(t,e,i)=>{var n=i(5639)["__core-js_shared__"];t.exports=n},1463:(t,e,i)=>{var n=i(5976),r=i(6612);t.exports=function(t){return n((function(e,i){var n=-1,a=i.length,o=a>1?i[a-1]:undefined,s=a>2?i[2]:undefined;for(o=t.length>3&&"function"==typeof o?(a--,o):undefined,s&&r(i[0],i[1],s)&&(o=a<3?undefined:o,a=1),e=Object(e);++n<a;){var l=i[n];l&&t(e,l,n,o)}return e}))}},5063:t=>{t.exports=function(t){return function(e,i,n){for(var r=-1,a=Object(e),o=n(e),s=o.length;s--;){var l=o[t?s:++r];if(!1===i(a[l],l,a))break}return e}}},8777:(t,e,i)=>{var n=i(852),r=function(){try{var t=n(Object,"defineProperty");return t({},"",{}),t}catch(e){}}();t.exports=r},1957:(t,e,i)=>{var n="object"==typeof i.g&&i.g&&i.g.Object===Object&&i.g;t.exports=n},5050:(t,e,i)=>{var n=i(7019);t.exports=function(t,e){var i=t.__data__;return n(e)?i["string"==typeof e?"string":"hash"]:i.map}},852:(t,e,i)=>{var n=i(8458),r=i(7801);t.exports=function(t,e){var i=r(t,e);return n(i)?i:undefined}},5924:(t,e,i)=>{var n=i(5569)(Object.getPrototypeOf,Object);t.exports=n},9607:(t,e,i)=>{var n=i(2705),r=Object.prototype,a=r.hasOwnProperty,o=r.toString,s=n?n.toStringTag:undefined;t.exports=function(t){var e=a.call(t,s),i=t[s];try{t[s]=undefined;var n=!0}catch(l){}var r=o.call(t);return n&&(e?t[s]=i:delete t[s]),r}},7801:t=>{t.exports=function(t,e){return null==t?undefined:t[e]}},222:(t,e,i)=>{var n=i(1811),r=i(5694),a=i(1469),o=i(5776),s=i(1780),l=i(327);t.exports=function(t,e,i){for(var h=-1,u=(e=n(e,t)).length,c=!1;++h<u;){var p=l(e[h]);if(!(c=null!=t&&i(t,p)))break;t=t[p]}return c||++h!=u?c:!!(u=null==t?0:t.length)&&s(u)&&o(p,u)&&(a(t)||r(t))}},1789:(t,e,i)=>{var n=i(4536);t.exports=function(){this.__data__=n?n(null):{},this.size=0}},401:t=>{t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},7667:(t,e,i)=>{var n=i(4536),r=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(n){var i=e[t];return"__lodash_hash_undefined__"===i?undefined:i}return r.call(e,t)?e[t]:undefined}},1327:(t,e,i)=>{var n=i(4536),r=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return n?e[t]!==undefined:r.call(e,t)}},1866:(t,e,i)=>{var n=i(4536);t.exports=function(t,e){var i=this.__data__;return this.size+=this.has(t)?0:1,i[t]=n&&e===undefined?"__lodash_hash_undefined__":e,this}},8517:(t,e,i)=>{var n=i(3118),r=i(5924),a=i(5726);t.exports=function(t){return"function"!=typeof t.constructor||a(t)?{}:n(r(t))}},5776:t=>{var e=/^(?:0|[1-9]\d*)$/;t.exports=function(t,i){var n=typeof t;return!!(i=null==i?9007199254740991:i)&&("number"==n||"symbol"!=n&&e.test(t))&&t>-1&&t%1==0&&t<i}},6612:(t,e,i)=>{var n=i(7813),r=i(8612),a=i(5776),o=i(3218);t.exports=function(t,e,i){if(!o(i))return!1;var s=typeof e;return!!("number"==s?r(i)&&a(e,i.length):"string"==s&&e in i)&&n(i[e],t)}},5403:(t,e,i)=>{var n=i(1469),r=i(3448),a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,o=/^\w*$/;t.exports=function(t,e){if(n(t))return!1;var i=typeof t;return!("number"!=i&&"symbol"!=i&&"boolean"!=i&&null!=t&&!r(t))||(o.test(t)||!a.test(t)||null!=e&&t in Object(e))}},7019:t=>{t.exports=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}},5346:(t,e,i)=>{var n,r=i(4429),a=(n=/[^.]+$/.exec(r&&r.keys&&r.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"";t.exports=function(t){return!!a&&a in t}},5726:t=>{var e=Object.prototype;t.exports=function(t){var i=t&&t.constructor;return t===("function"==typeof i&&i.prototype||e)}},7040:t=>{t.exports=function(){this.__data__=[],this.size=0}},4125:(t,e,i)=>{var n=i(8470),r=Array.prototype.splice;t.exports=function(t){var e=this.__data__,i=n(e,t);return!(i<0)&&(i==e.length-1?e.pop():r.call(e,i,1),--this.size,!0)}},2117:(t,e,i)=>{var n=i(8470);t.exports=function(t){var e=this.__data__,i=n(e,t);return i<0?undefined:e[i][1]}},7518:(t,e,i)=>{var n=i(8470);t.exports=function(t){return n(this.__data__,t)>-1}},4705:(t,e,i)=>{var n=i(8470);t.exports=function(t,e){var i=this.__data__,r=n(i,t);return r<0?(++this.size,i.push([t,e])):i[r][1]=e,this}},4785:(t,e,i)=>{var n=i(1989),r=i(8407),a=i(7071);t.exports=function(){this.size=0,this.__data__={hash:new n,map:new(a||r),string:new n}}},1285:(t,e,i)=>{var n=i(5050);t.exports=function(t){var e=n(this,t)["delete"](t);return this.size-=e?1:0,e}},6e3:(t,e,i)=>{var n=i(5050);t.exports=function(t){return n(this,t).get(t)}},9916:(t,e,i)=>{var n=i(5050);t.exports=function(t){return n(this,t).has(t)}},5265:(t,e,i)=>{var n=i(5050);t.exports=function(t,e){var i=n(this,t),r=i.size;return i.set(t,e),this.size+=i.size==r?0:1,this}},4523:(t,e,i)=>{var n=i(8306);t.exports=function(t){var e=n(t,(function(t){return 500===i.size&&i.clear(),t})),i=e.cache;return e}},4536:(t,e,i)=>{var n=i(852)(Object,"create");t.exports=n},3498:t=>{t.exports=function(t){var e=[];if(null!=t)for(var i in Object(t))e.push(i);return e}},1167:(t,e,i)=>{t=i.nmd(t);var n=i(1957),r=e&&!e.nodeType&&e,a=r&&t&&!t.nodeType&&t,o=a&&a.exports===r&&n.process,s=function(){try{var t=a&&a.require&&a.require("util").types;return t||o&&o.binding&&o.binding("util")}catch(e){}}();t.exports=s},2333:t=>{var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},5569:t=>{t.exports=function(t,e){return function(i){return t(e(i))}}},5357:(t,e,i)=>{var n=i(6874),r=Math.max;t.exports=function(t,e,i){return e=r(e===undefined?t.length-1:e,0),function(){for(var a=arguments,o=-1,s=r(a.length-e,0),l=Array(s);++o<s;)l[o]=a[e+o];o=-1;for(var h=Array(e+1);++o<e;)h[o]=a[o];return h[e]=i(l),n(t,this,h)}}},5639:(t,e,i)=>{var n=i(1957),r="object"==typeof self&&self&&self.Object===Object&&self,a=n||r||Function("return this")();t.exports=a},6390:t=>{t.exports=function(t,e){if(("constructor"!==e||"function"!=typeof t[e])&&"__proto__"!=e)return t[e]}},61:(t,e,i)=>{var n=i(6560),r=i(1275)(n);t.exports=r},1275:t=>{var e=Date.now;t.exports=function(t){var i=0,n=0;return function(){var r=e(),a=16-(r-n);if(n=r,a>0){if(++i>=800)return arguments[0]}else i=0;return t.apply(undefined,arguments)}}},7465:(t,e,i)=>{var n=i(8407);t.exports=function(){this.__data__=new n,this.size=0}},3779:t=>{t.exports=function(t){var e=this.__data__,i=e["delete"](t);return this.size=e.size,i}},7599:t=>{t.exports=function(t){return this.__data__.get(t)}},4758:t=>{t.exports=function(t){return this.__data__.has(t)}},4309:(t,e,i)=>{var n=i(8407),r=i(7071),a=i(3369);t.exports=function(t,e){var i=this.__data__;if(i instanceof n){var o=i.__data__;if(!r||o.length<199)return o.push([t,e]),this.size=++i.size,this;i=this.__data__=new a(o)}return i.set(t,e),this.size=i.size,this}},5514:(t,e,i)=>{var n=i(4523),r=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,a=/\\(\\)?/g,o=n((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(r,(function(t,i,n,r){e.push(n?r.replace(a,"$1"):i||t)})),e}));t.exports=o},327:(t,e,i)=>{var n=i(3448);t.exports=function(t){if("string"==typeof t||n(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e}},346:t=>{var e=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return e.call(t)}catch(i){}try{return t+""}catch(i){}}return""}},5703:t=>{t.exports=function(t){return function(){return t}}},7813:t=>{t.exports=function(t,e){return t===e||t!=t&&e!=e}},7361:(t,e,i)=>{var n=i(7786);t.exports=function(t,e,i){var r=null==t?undefined:n(t,e);return r===undefined?i:r}},8721:(t,e,i)=>{var n=i(8565),r=i(222);t.exports=function(t,e){return null!=t&&r(t,e,n)}},6557:t=>{t.exports=function(t){return t}},5694:(t,e,i)=>{var n=i(9454),r=i(7005),a=Object.prototype,o=a.hasOwnProperty,s=a.propertyIsEnumerable,l=n(function(){return arguments}())?n:function(t){return r(t)&&o.call(t,"callee")&&!s.call(t,"callee")};t.exports=l},1469:t=>{var e=Array.isArray;t.exports=e},8612:(t,e,i)=>{var n=i(3560),r=i(1780);t.exports=function(t){return null!=t&&r(t.length)&&!n(t)}},9246:(t,e,i)=>{var n=i(8612),r=i(7005);t.exports=function(t){return r(t)&&n(t)}},4144:(t,e,i)=>{t=i.nmd(t);var n=i(5639),r=i(5062),a=e&&!e.nodeType&&e,o=a&&t&&!t.nodeType&&t,s=o&&o.exports===a?n.Buffer:undefined,l=(s?s.isBuffer:undefined)||r;t.exports=l},3560:(t,e,i)=>{var n=i(4239),r=i(3218);t.exports=function(t){if(!r(t))return!1;var e=n(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},1780:t=>{t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},3218:t=>{t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},7005:t=>{t.exports=function(t){return null!=t&&"object"==typeof t}},8630:(t,e,i)=>{var n=i(4239),r=i(5924),a=i(7005),o=Function.prototype,s=Object.prototype,l=o.toString,h=s.hasOwnProperty,u=l.call(Object);t.exports=function(t){if(!a(t)||"[object Object]"!=n(t))return!1;var e=r(t);if(null===e)return!0;var i=h.call(e,"constructor")&&e.constructor;return"function"==typeof i&&i instanceof i&&l.call(i)==u}},3448:(t,e,i)=>{var n=i(4239),r=i(7005);t.exports=function(t){return"symbol"==typeof t||r(t)&&"[object Symbol]"==n(t)}},6719:(t,e,i)=>{var n=i(8749),r=i(1717),a=i(1167),o=a&&a.isTypedArray,s=o?r(o):n;t.exports=s},1704:(t,e,i)=>{var n=i(4636),r=i(313),a=i(8612);t.exports=function(t){return a(t)?n(t,!0):r(t)}},8306:(t,e,i)=>{var n=i(3369);function r(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var i=function(){var n=arguments,r=e?e.apply(this,n):n[0],a=i.cache;if(a.has(r))return a.get(r);var o=t.apply(this,n);return i.cache=a.set(r,o)||a,o};return i.cache=new(r.Cache||n),i}r.Cache=n,t.exports=r},2492:(t,e,i)=>{var n=i(2980),r=i(1463)((function(t,e,i){n(t,e,i)}));t.exports=r},5062:t=>{t.exports=function(){return!1}},9881:(t,e,i)=>{var n=i(8363),r=i(1704);t.exports=function(t){return n(t,r(t))}},9833:(t,e,i)=>{var n=i(531);t.exports=function(t){return null==t?"":n(t)}},2676:function(t){t.exports=function(){"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}var n=function(){function t(t,e){this.next=null,this.key=t,this.data=e,this.left=null,this.right=null}return t}();function r(t,e){return t>e?1:t<e?-1:0}function a(t,e,i){for(var r=new n(null,null),a=r,o=r;;){var s=i(t,e.key);if(s<0){if(null===e.left)break;if(i(t,e.left.key)<0){var l=e.left;if(e.left=l.right,l.right=e,null===(e=l).left)break}o.left=e,o=e,e=e.left}else{if(!(s>0))break;if(null===e.right)break;if(i(t,e.right.key)>0&&(l=e.right,e.right=l.left,l.left=e,null===(e=l).right))break;a.right=e,a=e,e=e.right}}return a.right=e.left,o.left=e.right,e.left=r.right,e.right=r.left,e}function o(t,e,i,r){var o=new n(t,e);if(null===i)return o.left=o.right=null,o;var s=r(t,(i=a(t,i,r)).key);return s<0?(o.left=i.left,o.right=i,i.left=null):s>=0&&(o.right=i.right,o.left=i,i.right=null),o}function s(t,e,i){var n=null,r=null;if(e){var o=i((e=a(t,e,i)).key,t);0===o?(n=e.left,r=e.right):o<0?(r=e.right,e.right=null,n=e):(n=e.left,e.left=null,r=e)}return{left:n,right:r}}function l(t,e,i){return null===e?t:(null===t||((e=a(t.key,e,i)).left=t),e)}function h(t,e,i,n,r){if(t){n(e+(i?"└── ":"├── ")+r(t)+"\n");var a=e+(i?"    ":"│   ");t.left&&h(t.left,a,!1,n,r),t.right&&h(t.right,a,!0,n,r)}}var u=function(){function t(t){void 0===t&&(t=r),this._root=null,this._size=0,this._comparator=t}return t.prototype.insert=function(t,e){return this._size++,this._root=o(t,e,this._root,this._comparator)},t.prototype.add=function(t,e){var i=new n(t,e);null===this._root&&(i.left=i.right=null,this._size++,this._root=i);var r=this._comparator,o=a(t,this._root,r),s=r(t,o.key);return 0===s?this._root=o:(s<0?(i.left=o.left,i.right=o,o.left=null):s>0&&(i.right=o.right,i.left=o,o.right=null),this._size++,this._root=i),this._root},t.prototype.remove=function(t){this._root=this._remove(t,this._root,this._comparator)},t.prototype._remove=function(t,e,i){var n;return null===e?null:0===i(t,(e=a(t,e,i)).key)?(null===e.left?n=e.right:(n=a(t,e.left,i)).right=e.right,this._size--,n):e},t.prototype.pop=function(){var t=this._root;if(t){for(;t.left;)t=t.left;return this._root=a(t.key,this._root,this._comparator),this._root=this._remove(t.key,this._root,this._comparator),{key:t.key,data:t.data}}return null},t.prototype.findStatic=function(t){for(var e=this._root,i=this._comparator;e;){var n=i(t,e.key);if(0===n)return e;e=n<0?e.left:e.right}return null},t.prototype.find=function(t){return this._root&&(this._root=a(t,this._root,this._comparator),0!==this._comparator(t,this._root.key))?null:this._root},t.prototype.contains=function(t){for(var e=this._root,i=this._comparator;e;){var n=i(t,e.key);if(0===n)return!0;e=n<0?e.left:e.right}return!1},t.prototype.forEach=function(t,e){for(var i=this._root,n=[],r=!1;!r;)null!==i?(n.push(i),i=i.left):0!==n.length?(i=n.pop(),t.call(e,i),i=i.right):r=!0;return this},t.prototype.range=function(t,e,i,n){for(var r=[],a=this._comparator,o=this._root;0!==r.length||o;)if(o)r.push(o),o=o.left;else{if(a((o=r.pop()).key,e)>0)break;if(a(o.key,t)>=0&&i.call(n,o))return this;o=o.right}return this},t.prototype.keys=function(){var t=[];return this.forEach((function(e){var i=e.key;return t.push(i)})),t},t.prototype.values=function(){var t=[];return this.forEach((function(e){var i=e.data;return t.push(i)})),t},t.prototype.min=function(){return this._root?this.minNode(this._root).key:null},t.prototype.max=function(){return this._root?this.maxNode(this._root).key:null},t.prototype.minNode=function(t){if(void 0===t&&(t=this._root),t)for(;t.left;)t=t.left;return t},t.prototype.maxNode=function(t){if(void 0===t&&(t=this._root),t)for(;t.right;)t=t.right;return t},t.prototype.at=function(t){for(var e=this._root,i=!1,n=0,r=[];!i;)if(e)r.push(e),e=e.left;else if(r.length>0){if(e=r.pop(),n===t)return e;n++,e=e.right}else i=!0;return null},t.prototype.next=function(t){var e=this._root,i=null;if(t.right){for(i=t.right;i.left;)i=i.left;return i}for(var n=this._comparator;e;){var r=n(t.key,e.key);if(0===r)break;r<0?(i=e,e=e.left):e=e.right}return i},t.prototype.prev=function(t){var e=this._root,i=null;if(null!==t.left){for(i=t.left;i.right;)i=i.right;return i}for(var n=this._comparator;e;){var r=n(t.key,e.key);if(0===r)break;r<0?e=e.left:(i=e,e=e.right)}return i},t.prototype.clear=function(){return this._root=null,this._size=0,this},t.prototype.toList=function(){return d(this._root)},t.prototype.load=function(t,e,i){void 0===e&&(e=[]),void 0===i&&(i=!1);var n=t.length,r=this._comparator;if(i&&_(t,e,0,n-1,r),null===this._root)this._root=c(t,e,0,n),this._size=n;else{var a=g(this.toList(),p(t,e),r);n=this._size+n,this._root=f({head:a},0,n)}return this},t.prototype.isEmpty=function(){return null===this._root},Object.defineProperty(t.prototype,"size",{get:function(){return this._size},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"root",{get:function(){return this._root},enumerable:!0,configurable:!0}),t.prototype.toString=function(t){void 0===t&&(t=function(t){return String(t.key)});var e=[];return h(this._root,"",!0,(function(t){return e.push(t)}),t),e.join("")},t.prototype.update=function(t,e,i){var n=this._comparator,r=s(t,this._root,n),a=r.left,h=r.right;n(t,e)<0?h=o(e,i,h,n):a=o(e,i,a,n),this._root=l(a,h,n)},t.prototype.split=function(t){return s(t,this._root,this._comparator)},t}();function c(t,e,i,r){var a=r-i;if(a>0){var o=i+Math.floor(a/2),s=t[o],l=e[o],h=new n(s,l);return h.left=c(t,e,i,o),h.right=c(t,e,o+1,r),h}return null}function p(t,e){for(var i=new n(null,null),r=i,a=0;a<t.length;a++)r=r.next=new n(t[a],e[a]);return r.next=null,i.next}function d(t){for(var e=t,i=[],r=!1,a=new n(null,null),o=a;!r;)e?(i.push(e),e=e.left):i.length>0?e=(e=o=o.next=i.pop()).right:r=!0;return o.next=null,a.next}function f(t,e,i){var n=i-e;if(n>0){var r=e+Math.floor(n/2),a=f(t,e,r),o=t.head;return o.left=a,t.head=t.head.next,o.right=f(t,r+1,i),o}return null}function g(t,e,i){for(var r=new n(null,null),a=r,o=t,s=e;null!==o&&null!==s;)i(o.key,s.key)<0?(a.next=o,o=o.next):(a.next=s,s=s.next),a=a.next;return null!==o?a.next=o:null!==s&&(a.next=s),r.next}function _(t,e,i,n,r){if(!(i>=n)){for(var a=t[i+n>>1],o=i-1,s=n+1;;){do{o++}while(r(t[o],a)<0);do{s--}while(r(t[s],a)>0);if(o>=s)break;var l=t[o];t[o]=t[s],t[s]=l,l=e[o],e[o]=e[s],e[s]=l}_(t,e,i,s,r),_(t,e,s+1,n,r)}}var m=function(t,e){return t.ll.x<=e.x&&e.x<=t.ur.x&&t.ll.y<=e.y&&e.y<=t.ur.y},y=function(t,e){if(e.ur.x<t.ll.x||t.ur.x<e.ll.x||e.ur.y<t.ll.y||t.ur.y<e.ll.y)return null;var i=t.ll.x<e.ll.x?e.ll.x:t.ll.x,n=t.ur.x<e.ur.x?t.ur.x:e.ur.x;return{ll:{x:i,y:t.ll.y<e.ll.y?e.ll.y:t.ll.y},ur:{x:n,y:t.ur.y<e.ur.y?t.ur.y:e.ur.y}}},v=Number.EPSILON;v===undefined&&(v=Math.pow(2,-52));var L=v*v,b=function(t,e){if(-v<t&&t<v&&-v<e&&e<v)return 0;var i=t-e;return i*i<L*t*e?0:t<e?-1:1},k=function(){function e(){t(this,e),this.reset()}return i(e,[{key:"reset",value:function(){this.xRounder=new M,this.yRounder=new M}},{key:"round",value:function(t,e){return{x:this.xRounder.round(t),y:this.yRounder.round(e)}}}]),e}(),M=function(){function e(){t(this,e),this.tree=new u,this.round(0)}return i(e,[{key:"round",value:function(t){var e=this.tree.add(t),i=this.tree.prev(e);if(null!==i&&0===b(e.key,i.key))return this.tree.remove(t),i.key;var n=this.tree.next(e);return null!==n&&0===b(e.key,n.key)?(this.tree.remove(t),n.key):t}}]),e}(),x=new k,w=function(t,e){return t.x*e.y-t.y*e.x},C=function(t,e){return t.x*e.x+t.y*e.y},P=function(t,e,i){var n={x:e.x-t.x,y:e.y-t.y},r={x:i.x-t.x,y:i.y-t.y},a=w(n,r);return b(a,0)},E=function(t){return Math.sqrt(C(t,t))},S=function(t,e,i){var n={x:e.x-t.x,y:e.y-t.y},r={x:i.x-t.x,y:i.y-t.y};return w(r,n)/E(r)/E(n)},O=function(t,e,i){var n={x:e.x-t.x,y:e.y-t.y},r={x:i.x-t.x,y:i.y-t.y};return C(r,n)/E(r)/E(n)},D=function(t,e,i){return 0===e.y?null:{x:t.x+e.x/e.y*(i-t.y),y:i}},R=function(t,e,i){return 0===e.x?null:{x:i,y:t.y+e.y/e.x*(i-t.x)}},B=function(t,e,i,n){if(0===e.x)return R(i,n,t.x);if(0===n.x)return R(t,e,i.x);if(0===e.y)return D(i,n,t.y);if(0===n.y)return D(t,e,i.y);var r=w(e,n);if(0==r)return null;var a={x:i.x-t.x,y:i.y-t.y},o=w(a,e)/r,s=w(a,n)/r;return{x:(t.x+s*e.x+(i.x+o*n.x))/2,y:(t.y+s*e.y+(i.y+o*n.y))/2}},T=function(){function e(i,n){t(this,e),i.events===undefined?i.events=[this]:i.events.push(this),this.point=i,this.isLeft=n}return i(e,null,[{key:"compare",value:function(t,i){var n=e.comparePoints(t.point,i.point);return 0!==n?n:(t.point!==i.point&&t.link(i),t.isLeft!==i.isLeft?t.isLeft?1:-1:j.compare(t.segment,i.segment))}},{key:"comparePoints",value:function(t,e){return t.x<e.x?-1:t.x>e.x?1:t.y<e.y?-1:t.y>e.y?1:0}}]),i(e,[{key:"link",value:function(t){if(t.point===this.point)throw new Error("Tried to link already linked events");for(var e=t.point.events,i=0,n=e.length;i<n;i++){var r=e[i];this.point.events.push(r),r.point=this.point}this.checkForConsuming()}},{key:"checkForConsuming",value:function(){for(var t=this.point.events.length,e=0;e<t;e++){var i=this.point.events[e];if(i.segment.consumedBy===undefined)for(var n=e+1;n<t;n++){var r=this.point.events[n];r.consumedBy===undefined&&i.otherSE.point.events===r.otherSE.point.events&&i.segment.consume(r.segment)}}}},{key:"getAvailableLinkedEvents",value:function(){for(var t=[],e=0,i=this.point.events.length;e<i;e++){var n=this.point.events[e];n!==this&&!n.segment.ringOut&&n.segment.isInResult()&&t.push(n)}return t}},{key:"getLeftmostComparator",value:function(t){var e=this,i=new Map,n=function(n){var r=n.otherSE;i.set(n,{sine:S(e.point,t.point,r.point),cosine:O(e.point,t.point,r.point)})};return function(t,e){i.has(t)||n(t),i.has(e)||n(e);var r=i.get(t),a=r.sine,o=r.cosine,s=i.get(e),l=s.sine,h=s.cosine;return a>=0&&l>=0?o<h?1:o>h?-1:0:a<0&&l<0?o<h?-1:o>h?1:0:l<a?-1:l>a?1:0}}}]),e}(),I=0,j=function(){function e(i,n,r,a){t(this,e),this.id=++I,this.leftSE=i,i.segment=this,i.otherSE=n,this.rightSE=n,n.segment=this,n.otherSE=i,this.rings=r,this.windings=a}return i(e,null,[{key:"compare",value:function(t,e){var i=t.leftSE.point.x,n=e.leftSE.point.x,r=t.rightSE.point.x,a=e.rightSE.point.x;if(a<i)return 1;if(r<n)return-1;var o=t.leftSE.point.y,s=e.leftSE.point.y,l=t.rightSE.point.y,h=e.rightSE.point.y;if(i<n){if(s<o&&s<l)return 1;if(s>o&&s>l)return-1;var u=t.comparePoint(e.leftSE.point);if(u<0)return 1;if(u>0)return-1;var c=e.comparePoint(t.rightSE.point);return 0!==c?c:-1}if(i>n){if(o<s&&o<h)return-1;if(o>s&&o>h)return 1;var p=e.comparePoint(t.leftSE.point);if(0!==p)return p;var d=t.comparePoint(e.rightSE.point);return d<0?1:d>0?-1:1}if(o<s)return-1;if(o>s)return 1;if(r<a){var f=e.comparePoint(t.rightSE.point);if(0!==f)return f}if(r>a){var g=t.comparePoint(e.rightSE.point);if(g<0)return 1;if(g>0)return-1}if(r!==a){var _=l-o,m=r-i,y=h-s,v=a-n;if(_>m&&y<v)return 1;if(_<m&&y>v)return-1}return r>a?1:r<a||l<h?-1:l>h?1:t.id<e.id?-1:t.id>e.id?1:0}}]),i(e,[{key:"replaceRightSE",value:function(t){this.rightSE=t,this.rightSE.segment=this,this.rightSE.otherSE=this.leftSE,this.leftSE.otherSE=this.rightSE}},{key:"bbox",value:function(){var t=this.leftSE.point.y,e=this.rightSE.point.y;return{ll:{x:this.leftSE.point.x,y:t<e?t:e},ur:{x:this.rightSE.point.x,y:t>e?t:e}}}},{key:"vector",value:function(){return{x:this.rightSE.point.x-this.leftSE.point.x,y:this.rightSE.point.y-this.leftSE.point.y}}},{key:"isAnEndpoint",value:function(t){return t.x===this.leftSE.point.x&&t.y===this.leftSE.point.y||t.x===this.rightSE.point.x&&t.y===this.rightSE.point.y}},{key:"comparePoint",value:function(t){if(this.isAnEndpoint(t))return 0;var e=this.leftSE.point,i=this.rightSE.point,n=this.vector();if(e.x===i.x)return t.x===e.x?0:t.x<e.x?1:-1;var r=(t.y-e.y)/n.y,a=e.x+r*n.x;if(t.x===a)return 0;var o=(t.x-e.x)/n.x,s=e.y+o*n.y;return t.y===s?0:t.y<s?-1:1}},{key:"getIntersection",value:function(t){var e=this.bbox(),i=t.bbox(),n=y(e,i);if(null===n)return null;var r=this.leftSE.point,a=this.rightSE.point,o=t.leftSE.point,s=t.rightSE.point,l=m(e,o)&&0===this.comparePoint(o),h=m(i,r)&&0===t.comparePoint(r),u=m(e,s)&&0===this.comparePoint(s),c=m(i,a)&&0===t.comparePoint(a);if(h&&l)return c&&!u?a:!c&&u?s:null;if(h)return u&&r.x===s.x&&r.y===s.y?null:r;if(l)return c&&a.x===o.x&&a.y===o.y?null:o;if(c&&u)return null;if(c)return a;if(u)return s;var p=B(r,this.vector(),o,t.vector());return null===p?null:m(n,p)?x.round(p.x,p.y):null}},{key:"split",value:function(t){var i=[],n=t.events!==undefined,r=new T(t,!0),a=new T(t,!1),o=this.rightSE;this.replaceRightSE(a),i.push(a),i.push(r);var s=new e(r,o,this.rings.slice(),this.windings.slice());return T.comparePoints(s.leftSE.point,s.rightSE.point)>0&&s.swapEvents(),T.comparePoints(this.leftSE.point,this.rightSE.point)>0&&this.swapEvents(),n&&(r.checkForConsuming(),a.checkForConsuming()),i}},{key:"swapEvents",value:function(){var t=this.rightSE;this.rightSE=this.leftSE,this.leftSE=t,this.leftSE.isLeft=!0,this.rightSE.isLeft=!1;for(var e=0,i=this.windings.length;e<i;e++)this.windings[e]*=-1}},{key:"consume",value:function(t){for(var i=this,n=t;i.consumedBy;)i=i.consumedBy;for(;n.consumedBy;)n=n.consumedBy;var r=e.compare(i,n);if(0!==r){if(r>0){var a=i;i=n,n=a}if(i.prev===n){var o=i;i=n,n=o}for(var s=0,l=n.rings.length;s<l;s++){var h=n.rings[s],u=n.windings[s],c=i.rings.indexOf(h);-1===c?(i.rings.push(h),i.windings.push(u)):i.windings[c]+=u}n.rings=null,n.windings=null,n.consumedBy=i,n.leftSE.consumedBy=i.leftSE,n.rightSE.consumedBy=i.rightSE}}},{key:"prevInResult",value:function(){return this._prevInResult!==undefined||(this.prev?this.prev.isInResult()?this._prevInResult=this.prev:this._prevInResult=this.prev.prevInResult():this._prevInResult=null),this._prevInResult}},{key:"beforeState",value:function(){if(this._beforeState!==undefined)return this._beforeState;if(this.prev){var t=this.prev.consumedBy||this.prev;this._beforeState=t.afterState()}else this._beforeState={rings:[],windings:[],multiPolys:[]};return this._beforeState}},{key:"afterState",value:function(){if(this._afterState!==undefined)return this._afterState;var t=this.beforeState();this._afterState={rings:t.rings.slice(0),windings:t.windings.slice(0),multiPolys:[]};for(var e=this._afterState.rings,i=this._afterState.windings,n=this._afterState.multiPolys,r=0,a=this.rings.length;r<a;r++){var o=this.rings[r],s=this.windings[r],l=e.indexOf(o);-1===l?(e.push(o),i.push(s)):i[l]+=s}for(var h=[],u=[],c=0,p=e.length;c<p;c++)if(0!==i[c]){var d=e[c],f=d.poly;if(-1===u.indexOf(f))if(d.isExterior)h.push(f);else{-1===u.indexOf(f)&&u.push(f);var g=h.indexOf(d.poly);-1!==g&&h.splice(g,1)}}for(var _=0,m=h.length;_<m;_++){var y=h[_].multiPoly;-1===n.indexOf(y)&&n.push(y)}return this._afterState}},{key:"isInResult",value:function(){if(this.consumedBy)return!1;if(this._isInResult!==undefined)return this._isInResult;var t=this.beforeState().multiPolys,e=this.afterState().multiPolys;switch(q.type){case"union":var i=0===t.length,n=0===e.length;this._isInResult=i!==n;break;case"intersection":var r,a;t.length<e.length?(r=t.length,a=e.length):(r=e.length,a=t.length),this._isInResult=a===q.numMultiPolys&&r<a;break;case"xor":var o=Math.abs(t.length-e.length);this._isInResult=o%2==1;break;case"difference":var s=function(t){return 1===t.length&&t[0].isSubject};this._isInResult=s(t)!==s(e);break;default:throw new Error("Unrecognized operation type found ".concat(q.type))}return this._isInResult}}],[{key:"fromRing",value:function(t,i,n){var r,a,o,s=T.comparePoints(t,i);if(s<0)r=t,a=i,o=1;else{if(!(s>0))throw new Error("Tried to create degenerate segment at [".concat(t.x,", ").concat(t.y,"]"));r=i,a=t,o=-1}return new e(new T(r,!0),new T(a,!1),[n],[o])}}]),e}(),A=function(){function e(i,n,r){if(t(this,e),!Array.isArray(i)||0===i.length)throw new Error("Input geometry is not a valid Polygon or MultiPolygon");if(this.poly=n,this.isExterior=r,this.segments=[],"number"!=typeof i[0][0]||"number"!=typeof i[0][1])throw new Error("Input geometry is not a valid Polygon or MultiPolygon");var a=x.round(i[0][0],i[0][1]);this.bbox={ll:{x:a.x,y:a.y},ur:{x:a.x,y:a.y}};for(var o=a,s=1,l=i.length;s<l;s++){if("number"!=typeof i[s][0]||"number"!=typeof i[s][1])throw new Error("Input geometry is not a valid Polygon or MultiPolygon");var h=x.round(i[s][0],i[s][1]);h.x===o.x&&h.y===o.y||(this.segments.push(j.fromRing(o,h,this)),h.x<this.bbox.ll.x&&(this.bbox.ll.x=h.x),h.y<this.bbox.ll.y&&(this.bbox.ll.y=h.y),h.x>this.bbox.ur.x&&(this.bbox.ur.x=h.x),h.y>this.bbox.ur.y&&(this.bbox.ur.y=h.y),o=h)}a.x===o.x&&a.y===o.y||this.segments.push(j.fromRing(o,a,this))}return i(e,[{key:"getSweepEvents",value:function(){for(var t=[],e=0,i=this.segments.length;e<i;e++){var n=this.segments[e];t.push(n.leftSE),t.push(n.rightSE)}return t}}]),e}(),G=function(){function e(i,n){if(t(this,e),!Array.isArray(i))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");this.exteriorRing=new A(i[0],this,!0),this.bbox={ll:{x:this.exteriorRing.bbox.ll.x,y:this.exteriorRing.bbox.ll.y},ur:{x:this.exteriorRing.bbox.ur.x,y:this.exteriorRing.bbox.ur.y}},this.interiorRings=[];for(var r=1,a=i.length;r<a;r++){var o=new A(i[r],this,!1);o.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=o.bbox.ll.x),o.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=o.bbox.ll.y),o.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=o.bbox.ur.x),o.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=o.bbox.ur.y),this.interiorRings.push(o)}this.multiPoly=n}return i(e,[{key:"getSweepEvents",value:function(){for(var t=this.exteriorRing.getSweepEvents(),e=0,i=this.interiorRings.length;e<i;e++)for(var n=this.interiorRings[e].getSweepEvents(),r=0,a=n.length;r<a;r++)t.push(n[r]);return t}}]),e}(),N=function(){function e(i,n){if(t(this,e),!Array.isArray(i))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");try{"number"==typeof i[0][0][0]&&(i=[i])}catch(s){}this.polys=[],this.bbox={ll:{x:Number.POSITIVE_INFINITY,y:Number.POSITIVE_INFINITY},ur:{x:Number.NEGATIVE_INFINITY,y:Number.NEGATIVE_INFINITY}};for(var r=0,a=i.length;r<a;r++){var o=new G(i[r],this);o.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=o.bbox.ll.x),o.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=o.bbox.ll.y),o.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=o.bbox.ur.x),o.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=o.bbox.ur.y),this.polys.push(o)}this.isSubject=n}return i(e,[{key:"getSweepEvents",value:function(){for(var t=[],e=0,i=this.polys.length;e<i;e++)for(var n=this.polys[e].getSweepEvents(),r=0,a=n.length;r<a;r++)t.push(n[r]);return t}}]),e}(),z=function(){function e(i){t(this,e),this.events=i;for(var n=0,r=i.length;n<r;n++)i[n].segment.ringOut=this;this.poly=null}return i(e,null,[{key:"factory",value:function(t){for(var i=[],n=0,r=t.length;n<r;n++){var a=t[n];if(a.isInResult()&&!a.ringOut){for(var o=null,s=a.leftSE,l=a.rightSE,h=[s],u=s.point,c=[];o=s,s=l,h.push(s),s.point!==u;)for(;;){var p=s.getAvailableLinkedEvents();if(0===p.length){var d=h[0].point,f=h[h.length-1].point;throw new Error("Unable to complete output ring starting at [".concat(d.x,",")+" ".concat(d.y,"]. Last matching segment found ends at")+" [".concat(f.x,", ").concat(f.y,"]."))}if(1===p.length){l=p[0].otherSE;break}for(var g=null,_=0,m=c.length;_<m;_++)if(c[_].point===s.point){g=_;break}if(null===g){c.push({index:h.length,point:s.point});var y=s.getLeftmostComparator(o);l=p.sort(y)[0].otherSE;break}var v=c.splice(g)[0],L=h.splice(v.index);L.unshift(L[0].otherSE),i.push(new e(L.reverse()))}i.push(new e(h))}}return i}}]),i(e,[{key:"getGeom",value:function(){for(var t=this.events[0].point,e=[t],i=1,n=this.events.length-1;i<n;i++){var r=this.events[i].point,a=this.events[i+1].point;0!==P(r,t,a)&&(e.push(r),t=r)}if(1===e.length)return null;var o=e[0],s=e[1];0===P(o,t,s)&&e.shift(),e.push(e[0]);for(var l=this.isExteriorRing()?1:-1,h=this.isExteriorRing()?0:e.length-1,u=this.isExteriorRing()?e.length:-1,c=[],p=h;p!=u;p+=l)c.push([e[p].x,e[p].y]);return c}},{key:"isExteriorRing",value:function(){if(this._isExteriorRing===undefined){var t=this.enclosingRing();this._isExteriorRing=!t||!t.isExteriorRing()}return this._isExteriorRing}},{key:"enclosingRing",value:function(){return this._enclosingRing===undefined&&(this._enclosingRing=this._calcEnclosingRing()),this._enclosingRing}},{key:"_calcEnclosingRing",value:function(){for(var t=this.events[0],e=1,i=this.events.length;e<i;e++){var n=this.events[e];T.compare(t,n)>0&&(t=n)}for(var r=t.segment.prevInResult(),a=r?r.prevInResult():null;;){if(!r)return null;if(!a)return r.ringOut;if(a.ringOut!==r.ringOut)return a.ringOut.enclosingRing()!==r.ringOut?r.ringOut:r.ringOut.enclosingRing();r=a.prevInResult(),a=r?r.prevInResult():null}}}]),e}(),U=function(){function e(i){t(this,e),this.exteriorRing=i,i.poly=this,this.interiorRings=[]}return i(e,[{key:"addInterior",value:function(t){this.interiorRings.push(t),t.poly=this}},{key:"getGeom",value:function(){var t=[this.exteriorRing.getGeom()];if(null===t[0])return null;for(var e=0,i=this.interiorRings.length;e<i;e++){var n=this.interiorRings[e].getGeom();null!==n&&t.push(n)}return t}}]),e}(),F=function(){function e(i){t(this,e),this.rings=i,this.polys=this._composePolys(i)}return i(e,[{key:"getGeom",value:function(){for(var t=[],e=0,i=this.polys.length;e<i;e++){var n=this.polys[e].getGeom();null!==n&&t.push(n)}return t}},{key:"_composePolys",value:function(t){for(var e=[],i=0,n=t.length;i<n;i++){var r=t[i];if(!r.poly)if(r.isExteriorRing())e.push(new U(r));else{var a=r.enclosingRing();a.poly||e.push(new U(a)),a.poly.addInterior(r)}}return e}}]),e}(),V=function(){function e(i){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:j.compare;t(this,e),this.queue=i,this.tree=new u(n),this.segments=[]}return i(e,[{key:"process",value:function(t){var e=t.segment,i=[];if(t.consumedBy)return t.isLeft?this.queue.remove(t.otherSE):this.tree.remove(e),i;var n=t.isLeft?this.tree.insert(e):this.tree.find(e);if(!n)throw new Error("Unable to find segment #".concat(e.id," ")+"[".concat(e.leftSE.point.x,", ").concat(e.leftSE.point.y,"] -> ")+"[".concat(e.rightSE.point.x,", ").concat(e.rightSE.point.y,"] ")+"in SweepLine tree. Please submit a bug report.");for(var r=n,a=n,o=undefined,s=undefined;o===undefined;)null===(r=this.tree.prev(r))?o=null:r.key.consumedBy===undefined&&(o=r.key);for(;s===undefined;)null===(a=this.tree.next(a))?s=null:a.key.consumedBy===undefined&&(s=a.key);if(t.isLeft){var l=null;if(o){var h=o.getIntersection(e);if(null!==h&&(e.isAnEndpoint(h)||(l=h),!o.isAnEndpoint(h)))for(var u=this._splitSafely(o,h),c=0,p=u.length;c<p;c++)i.push(u[c])}var d=null;if(s){var f=s.getIntersection(e);if(null!==f&&(e.isAnEndpoint(f)||(d=f),!s.isAnEndpoint(f)))for(var g=this._splitSafely(s,f),_=0,m=g.length;_<m;_++)i.push(g[_])}if(null!==l||null!==d){var y=null;y=null===l?d:null===d||T.comparePoints(l,d)<=0?l:d,this.queue.remove(e.rightSE),i.push(e.rightSE);for(var v=e.split(y),L=0,b=v.length;L<b;L++)i.push(v[L])}i.length>0?(this.tree.remove(e),i.push(t)):(this.segments.push(e),e.prev=o)}else{if(o&&s){var k=o.getIntersection(s);if(null!==k){if(!o.isAnEndpoint(k))for(var M=this._splitSafely(o,k),x=0,w=M.length;x<w;x++)i.push(M[x]);if(!s.isAnEndpoint(k))for(var C=this._splitSafely(s,k),P=0,E=C.length;P<E;P++)i.push(C[P])}}this.tree.remove(e)}return i}},{key:"_splitSafely",value:function(t,e){this.tree.remove(t);var i=t.rightSE;this.queue.remove(i);var n=t.split(e);return n.push(i),t.consumedBy===undefined&&this.tree.insert(t),n}}]),e}(),K="undefined"!=typeof process&&process.env.POLYGON_CLIPPING_MAX_QUEUE_SIZE||1e6,H="undefined"!=typeof process&&process.env.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS||1e6,q=new(function(){function e(){t(this,e)}return i(e,[{key:"run",value:function(t,e,i){q.type=t,x.reset();for(var n=[new N(e,!0)],r=0,a=i.length;r<a;r++)n.push(new N(i[r],!1));if(q.numMultiPolys=n.length,"difference"===q.type)for(var o=n[0],s=1;s<n.length;)null!==y(n[s].bbox,o.bbox)?s++:n.splice(s,1);if("intersection"===q.type)for(var l=0,h=n.length;l<h;l++)for(var c=n[l],p=l+1,d=n.length;p<d;p++)if(null===y(c.bbox,n[p].bbox))return[];for(var f=new u(T.compare),g=0,_=n.length;g<_;g++)for(var m=n[g].getSweepEvents(),v=0,L=m.length;v<L;v++)if(f.insert(m[v]),f.size>K)throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big). Please file a bug report.");for(var b=new V(f),k=f.size,M=f.pop();M;){var w=M.key;if(f.size===k){var C=w.segment;throw new Error("Unable to pop() ".concat(w.isLeft?"left":"right"," SweepEvent ")+"[".concat(w.point.x,", ").concat(w.point.y,"] from segment #").concat(C.id," ")+"[".concat(C.leftSE.point.x,", ").concat(C.leftSE.point.y,"] -> ")+"[".concat(C.rightSE.point.x,", ").concat(C.rightSE.point.y,"] from queue. ")+"Please file a bug report.")}if(f.size>K)throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big). Please file a bug report.");if(b.segments.length>H)throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments). Please file a bug report.");for(var P=b.process(w),E=0,S=P.length;E<S;E++){var O=P[E];O.consumedBy===undefined&&f.insert(O)}k=f.size,M=f.pop()}x.reset();var D=z.factory(b.segments);return new F(D).getGeom()}}]),e}()),J=function(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n];return q.run("union",t,i)},Y=function(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n];return q.run("intersection",t,i)},X=function(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n];return q.run("xor",t,i)},Z=function(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n];return q.run("difference",t,i)};return{union:J,intersection:Y,xor:X,difference:Z}}()},2582:function(t){t.exports=function(){"use strict";function t(t,n,r,a,o){!function s(t,i,n,r,a){for(;r>n;){if(r-n>600){var o=r-n+1,l=i-n+1,h=Math.log(o),u=.5*Math.exp(2*h/3),c=.5*Math.sqrt(h*u*(o-u)/o)*(l-o/2<0?-1:1);s(t,i,Math.max(n,Math.floor(i-l*u/o+c)),Math.min(r,Math.floor(i+(o-l)*u/o+c)),a)}var p=t[i],d=n,f=r;for(e(t,n,i),a(t[r],p)>0&&e(t,n,r);d<f;){for(e(t,d,f),d++,f--;a(t[d],p)<0;)d++;for(;a(t[f],p)>0;)f--}0===a(t[n],p)?e(t,n,f):e(t,++f,r),f<=i&&(n=f+1),i<=f&&(r=f-1)}}(t,n,r||0,a||t.length-1,o||i)}function e(t,e,i){var n=t[e];t[e]=t[i],t[i]=n}function i(t,e){return t<e?-1:t>e?1:0}var n=function(t){void 0===t&&(t=9),this._maxEntries=Math.max(4,t),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),this.clear()};function r(t,e,i){if(!i)return e.indexOf(t);for(var n=0;n<e.length;n++)if(i(t,e[n]))return n;return-1}function a(t,e){o(t,0,t.children.length,e,t)}function o(t,e,i,n,r){r||(r=f(null)),r.minX=1/0,r.minY=1/0,r.maxX=-1/0,r.maxY=-1/0;for(var a=e;a<i;a++){var o=t.children[a];s(r,t.leaf?n(o):o)}return r}function s(t,e){return t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY),t}function l(t,e){return t.minX-e.minX}function h(t,e){return t.minY-e.minY}function u(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function c(t){return t.maxX-t.minX+(t.maxY-t.minY)}function p(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function d(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function f(t){return{children:t,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function g(e,i,n,r,a){for(var o=[i,n];o.length;)if(!((n=o.pop())-(i=o.pop())<=r)){var s=i+Math.ceil((n-i)/r/2)*r;t(e,s,i,n,a),o.push(i,s,s,n)}}return n.prototype.all=function(){return this._all(this.data,[])},n.prototype.search=function(t){var e=this.data,i=[];if(!d(t,e))return i;for(var n=this.toBBox,r=[];e;){for(var a=0;a<e.children.length;a++){var o=e.children[a],s=e.leaf?n(o):o;d(t,s)&&(e.leaf?i.push(o):p(t,s)?this._all(o,i):r.push(o))}e=r.pop()}return i},n.prototype.collides=function(t){var e=this.data;if(!d(t,e))return!1;for(var i=[];e;){for(var n=0;n<e.children.length;n++){var r=e.children[n],a=e.leaf?this.toBBox(r):r;if(d(t,a)){if(e.leaf||p(t,a))return!0;i.push(r)}}e=i.pop()}return!1},n.prototype.load=function(t){if(!t||!t.length)return this;if(t.length<this._minEntries){for(var e=0;e<t.length;e++)this.insert(t[e]);return this}var i=this._build(t.slice(),0,t.length-1,0);if(this.data.children.length)if(this.data.height===i.height)this._splitRoot(this.data,i);else{if(this.data.height<i.height){var n=this.data;this.data=i,i=n}this._insert(i,this.data.height-i.height-1,!0)}else this.data=i;return this},n.prototype.insert=function(t){return t&&this._insert(t,this.data.height-1),this},n.prototype.clear=function(){return this.data=f([]),this},n.prototype.remove=function(t,e){if(!t)return this;for(var i,n,a,o=this.data,s=this.toBBox(t),l=[],h=[];o||l.length;){if(o||(o=l.pop(),n=l[l.length-1],i=h.pop(),a=!0),o.leaf){var u=r(t,o.children,e);if(-1!==u)return o.children.splice(u,1),l.push(o),this._condense(l),this}a||o.leaf||!p(o,s)?n?(i++,o=n.children[i],a=!1):o=null:(l.push(o),h.push(i),i=0,n=o,o=o.children[0])}return this},n.prototype.toBBox=function(t){return t},n.prototype.compareMinX=function(t,e){return t.minX-e.minX},n.prototype.compareMinY=function(t,e){return t.minY-e.minY},n.prototype.toJSON=function(){return this.data},n.prototype.fromJSON=function(t){return this.data=t,this},n.prototype._all=function(t,e){for(var i=[];t;)t.leaf?e.push.apply(e,t.children):i.push.apply(i,t.children),t=i.pop();return e},n.prototype._build=function(t,e,i,n){var r,o=i-e+1,s=this._maxEntries;if(o<=s)return a(r=f(t.slice(e,i+1)),this.toBBox),r;n||(n=Math.ceil(Math.log(o)/Math.log(s)),s=Math.ceil(o/Math.pow(s,n-1))),(r=f([])).leaf=!1,r.height=n;var l=Math.ceil(o/s),h=l*Math.ceil(Math.sqrt(s));g(t,e,i,h,this.compareMinX);for(var u=e;u<=i;u+=h){var c=Math.min(u+h-1,i);g(t,u,c,l,this.compareMinY);for(var p=u;p<=c;p+=l){var d=Math.min(p+l-1,c);r.children.push(this._build(t,p,d,n-1))}}return a(r,this.toBBox),r},n.prototype._chooseSubtree=function(t,e,i,n){for(;n.push(e),!e.leaf&&n.length-1!==i;){for(var r=1/0,a=1/0,o=void 0,s=0;s<e.children.length;s++){var l=e.children[s],h=u(l),c=(p=t,d=l,(Math.max(d.maxX,p.maxX)-Math.min(d.minX,p.minX))*(Math.max(d.maxY,p.maxY)-Math.min(d.minY,p.minY))-h);c<a?(a=c,r=h<r?h:r,o=l):c===a&&h<r&&(r=h,o=l)}e=o||e.children[0]}var p,d;return e},n.prototype._insert=function(t,e,i){var n=i?t:this.toBBox(t),r=[],a=this._chooseSubtree(n,this.data,e,r);for(a.children.push(t),s(a,n);e>=0&&r[e].children.length>this._maxEntries;)this._split(r,e),e--;this._adjustParentBBoxes(n,r,e)},n.prototype._split=function(t,e){var i=t[e],n=i.children.length,r=this._minEntries;this._chooseSplitAxis(i,r,n);var o=this._chooseSplitIndex(i,r,n),s=f(i.children.splice(o,i.children.length-o));s.height=i.height,s.leaf=i.leaf,a(i,this.toBBox),a(s,this.toBBox),e?t[e-1].children.push(s):this._splitRoot(i,s)},n.prototype._splitRoot=function(t,e){this.data=f([t,e]),this.data.height=t.height+1,this.data.leaf=!1,a(this.data,this.toBBox)},n.prototype._chooseSplitIndex=function(t,e,i){for(var n,r,a,s,l,h,c,p=1/0,d=1/0,f=e;f<=i-e;f++){var g=o(t,0,f,this.toBBox),_=o(t,f,i,this.toBBox),m=(r=g,a=_,s=void 0,l=void 0,h=void 0,c=void 0,s=Math.max(r.minX,a.minX),l=Math.max(r.minY,a.minY),h=Math.min(r.maxX,a.maxX),c=Math.min(r.maxY,a.maxY),Math.max(0,h-s)*Math.max(0,c-l)),y=u(g)+u(_);m<p?(p=m,n=f,d=y<d?y:d):m===p&&y<d&&(d=y,n=f)}return n||i-e},n.prototype._chooseSplitAxis=function(t,e,i){var n=t.leaf?this.compareMinX:l,r=t.leaf?this.compareMinY:h;this._allDistMargin(t,e,i,n)<this._allDistMargin(t,e,i,r)&&t.children.sort(n)},n.prototype._allDistMargin=function(t,e,i,n){t.children.sort(n);for(var r=this.toBBox,a=o(t,0,e,r),l=o(t,i-e,i,r),h=c(a)+c(l),u=e;u<i-e;u++){var p=t.children[u];s(a,t.leaf?r(p):p),h+=c(a)}for(var d=i-e-1;d>=e;d--){var f=t.children[d];s(l,t.leaf?r(f):f),h+=c(l)}return h},n.prototype._adjustParentBBoxes=function(t,e,i){for(var n=i;n>=0;n--)s(e[n],t)},n.prototype._condense=function(t){for(var e=t.length-1,i=void 0;e>=0;e--)0===t[e].children.length?e>0?(i=t[e-1].children).splice(i.indexOf(t[e]),1):this.clear():a(t[e],this.toBBox)},n}()}},e={};function i(n){var r=e[n];if(r!==undefined)return r.exports;var a=e[n]={id:n,loaded:!1,exports:{}};return t[n].call(a.exports,a,a.exports,i),a.loaded=!0,a.exports}i.n=t=>{var e=t&&t.__esModule?()=>t["default"]:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.nmd=t=>(t.paths=[],t.children||(t.children=[]),t);i(414)})();;
/**
 * Attach functionality for Leaflet Widget behaviours.
 */
(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.leaflet_widget = {
    attach: function (context, settings) {
      $.each(settings.leaflet, function (map_id, settings) {
        $('#' + map_id, context).each(function () {
          let map_container = $(this);
          // If the attached context contains any leaflet maps with widgets, make sure we have a
          // Drupal.leaflet_widget object.
          if (map_container.data('leaflet_widget') === undefined) {
            let lMap = drupalSettings.leaflet[map_id].lMap;
            map_container.data('leaflet_widget', new Drupal.leaflet_widget(map_container, lMap, settings));
          }
          else {
            // If we already had a widget, update map to make sure that WKT and map are synchronized.
            map_container.data('leaflet_widget').update_leaflet_widget_map();
            map_container.data('leaflet_widget').update_input_state();
          }
        });
      });
    }
  };

  Drupal.leaflet_widget = function (map_container, lMap, settings) {

    // A FeatureGroup is required to store editable layers
    this.map_settings = settings.map.settings;
    this.drawnItems = new L.LayerGroup();
    this.widgetsettings = settings.leaflet_widget;
    this.mapid = this.widgetsettings.map_id;
    this.map_container = map_container;
    this.container = $(map_container).parent();
    this.widgetsettings.path_style = this.map_settings.path ? JSON.parse(this.map_settings.path) : {};
    this.json_selector = this.widgetsettings.jsonElement;

    if (settings['langcode'] && lMap.pm) {
      lMap.pm.setLang(settings['langcode']);
    }

    // Initialise a property to store/manage the map in.
    this.map = undefined;

    // Initialise the Leaflet Widget Map with its features from Value element.
    this.set_leaflet_widget_map(lMap);

    // If map is initialised (or re-initialised) then use the new instance.
    this.container.on('leafletMapInit', $.proxy(function (event, _m, lMap) {
      this.set_leaflet_widget_map(lMap);
    }, this));

    // Update map whenever the input field is changed.
    this.container.on('change', this.json_selector, $.proxy(this.update_leaflet_widget_map, this));

    // Show, hide, mark read-only.
    this.update_input_state();
  };

  /**
   * Initialise the Leaflet Widget Map with its features from Value element.
   */
  Drupal.leaflet_widget.prototype.set_leaflet_widget_map = function (map) {
    if (map !== undefined) {
      this.map = map;
      map.addLayer(this.drawnItems);

      if (this.widgetsettings.scrollZoomEnabled) {
        map.on('focus', function () {
          map.scrollWheelZoom.enable();
        });
        map.on('blur', function () {
          map.scrollWheelZoom.disable();
        });
      }

      // Adjust toolbar to show defaultMarker or circleMarker.
      this.widgetsettings.toolbarSettings.drawMarker = false;
      this.widgetsettings.toolbarSettings.drawCircleMarker = false;
      if (this.widgetsettings.toolbarSettings.marker === "defaultMarker") {
        this.widgetsettings.toolbarSettings.drawMarker = 1;
      } else if (this.widgetsettings.toolbarSettings.marker === "circleMarker") {
        this.widgetsettings.toolbarSettings.drawCircleMarker = 1;
      }
      map.pm.addControls(this.widgetsettings.toolbarSettings);

      map.on('pm:create', function(event){
        let layer = event.layer;
        this.drawnItems.addLayer(layer);
        layer.pm.enable({ allowSelfIntersection: false });
        this.update_text();
        // Listen to changes on the new layer
        this.add_layer_listeners(layer);
      }, this);

      // Start updating the Leaflet Map.
      this.update_leaflet_widget_map();
    }
  };

  /**
   * Update the WKT text input field.disableGlobalEditMode()
   */
  Drupal.leaflet_widget.prototype.update_text = function () {
    if (this.drawnItems.getLayers().length === 0) {
      $(this.json_selector, this.container).val('');
    }
    else {
      let json_string = JSON.stringify(this.drawnItems.toGeoJSON());
      $(this.json_selector, this.container).val(json_string);
    }
    this.container.trigger("change");
  };

  /**
   * Set visibility and readonly attribute of the input element.
   */
  Drupal.leaflet_widget.prototype.update_input_state = function () {
    $('.form-item.form-type-textarea, .form-item.form-type--textarea', this.container).toggle(!this.widgetsettings.inputHidden);
    $(this.json_selector, this.container).prop('readonly', this.widgetsettings.inputReadonly);
  };

  /**
   * Add/Set Listeners to the Drawn Map Layers.
   */
  Drupal.leaflet_widget.prototype.add_layer_listeners = function (layer) {

    // Listen to changes on the layer.
    layer.on('pm:edit', function(event) {
      this.update_text();
    }, this);

    // Listen to changes on the layer.
    layer.on('pm:update', function(event) {
      this.update_text();
    }, this);

    // Listen to drag events on the layer.
    layer.on('pm:dragend', function(event) {
      this.update_text();
    }, this);

    // Listen to cut events on the layer.
    layer.on('pm:cut', function(event) {
      this.drawnItems.removeLayer(event.originalLayer);
      this.drawnItems.addLayer(event.layer);
      this.update_text();
    }, this);

    // Listen to remove events on the layer.
    layer.on('pm:remove', function(event) {
      this.drawnItems.removeLayer(event.layer);
      this.update_text();
    }, this);

  };

  /**
   * Update the Leaflet Widget Map from value element.
   */
  Drupal.leaflet_widget.prototype.update_leaflet_widget_map = function () {
    let self = this;
    let value = $(this.json_selector, this.container).val();

    // Always clear the layers in drawnItems on map updates.
    this.drawnItems.clearLayers();

    // Apply styles to pm drawn items.
    this.map.pm.setGlobalOptions({
      pathOptions: this.widgetsettings.path_style
    });
    // Nothing to do if we don't have any data.
    if (value.length === 0) {
      // If no layer available, and the Map Center is not forced, locate the user position.
      if (this.map_settings.locate && this.map_settings.locate.automatic && !this.map_settings.map_position_force) {
        this.map.locate({setView: true, maxZoom: this.map_settings.zoom});
      }
      return;
    }

    try {
      let layerOpts = {
        style: function (feature) {
          return self.widgetsettings.path_style;
        }
      };
      // Use circleMarkers if specified.
      if (this.widgetsettings.toolbarSettings.marker === "circleMarker") {
        layerOpts.pointToLayer = function (feature, latlng) {
          return L.circleMarker(latlng);
        };
      }
      let obj = L.geoJson(JSON.parse(value), layerOpts);
      // See https://github.com/Leaflet/Leaflet.draw/issues/398
      obj.eachLayer(function(layer) {
        if (typeof layer.getLayers === "function") {
          let subLayers = layer.getLayers();
          for (let i = 0; i < subLayers.length; i++) {
            this.drawnItems.addLayer(subLayers[i]);
            this.add_layer_listeners(subLayers[i]);
          }
        }
        else {
          this.drawnItems.addLayer(layer);
          this.add_layer_listeners(layer);
        }

      }, this);

      // Pan the map to the feature
      if (this.widgetsettings.autoCenter) {
        let start_zoom;
        let start_center;
        if (obj.getBounds !== undefined && typeof obj.getBounds === 'function') {
          // For objects that have defined bounds or a way to get them
          let bounds = obj.getBounds();
          this.map.fitBounds(bounds);
          // Update the map start zoom and center, for correct working of Map Reset control.
          start_zoom = this.map.getBoundsZoom(bounds);
          start_center = bounds.getCenter();

          // In case of Map Zoom Forced, use the custom Map Zoom set.
          if (this.widgetsettings.map_position.force && this.widgetsettings.map_position.zoom) {
            start_zoom = this.widgetsettings.map_position.zoom;
            this.map.setZoom(start_zoom );
          }

        } else if (obj.getLatLng !== undefined && typeof obj.getLatLng === 'function') {
          this.map.panTo(obj.getLatLng());
          // Update the map start center, for correct working of Map Reset control.
          start_center = this.map.getCenter();
          start_zoom = this.map.getZoom();
        }

        // In case of map initial position not forced, and zooFiner not null/neutral,
        // adapt the Map Zoom and the Start Zoom accordingly.
        if (!this.widgetsettings.map_position.force && this.widgetsettings.map_position.hasOwnProperty('zoomFiner') && parseInt(this.widgetsettings.map_position['zoomFiner']) !== 0) {
          start_zoom += parseFloat(this.widgetsettings.map_position['zoomFiner']);
          this.map.setView(start_center, start_zoom);
        }

        // Reset the StartZoom and StartCenter.
        this.reset_start_zoom_and_center(this.mapid, start_zoom, start_center);

      }
    } catch (error) {
      if (window.console) console.error(error.message);
    }
  };

  /**
   * Update the Leaflet Widget Map from value element.
   */
  Drupal.leaflet_widget.prototype.reset_start_zoom_and_center = function (mapid, start_zoom, start_center) {
    Drupal.Leaflet[mapid].start_zoom = start_zoom;
    Drupal.Leaflet[mapid].start_center = start_center;
    if (Drupal.Leaflet[mapid].reset_view_control) {
      Drupal.Leaflet[mapid].reset_view_control.remove();
      let map_reset_view_options = this.map_container.data('leaflet').map_settings.reset_map.options ? JSON.parse(this.map_container.data('leaflet').map_settings.reset_map.options) : {};
      map_reset_view_options.latlng = start_center;
      map_reset_view_options.zoom = start_zoom;
      Drupal.Leaflet[mapid].reset_view_control = L.control.resetView(map_reset_view_options).addTo(this.map_container.data('leaflet').lMap);
    }
  }

})(jQuery, Drupal, drupalSettings);
;
/**
 * @file
 * Responsive navigation tabs.
 *
 * This also supports collapsible navigable is the 'is-collapsible' class is
 * added to the main element, and a target element is included.
 */
(($, Drupal) => {
  function init(tab) {
    const $tab = $(tab);
    const $target = $tab.find('[data-drupal-nav-tabs-target]');
    const $active = $target.find('.js-active-tab');

    const openMenu = () => {
      $target.toggleClass('is-open');
    };

    const toggleOrder = (reset) => {
      const current = $active.index();
      const original = $active.data('original-order');

      // Do not change order if already first or if already reset.
      if (original === 0 || reset === (current === original)) {
        return;
      }

      const siblings = {
        first: '[data-original-order="0"]',
        previous: `[data-original-order="${original - 1}"]`,
      };

      const $first = $target.find(siblings.first);
      const $previous = $target.find(siblings.previous);

      if (reset && current !== original) {
        $active.insertAfter($previous);
      } else if (!reset && current === original) {
        $active.insertBefore($first);
      }
    };

    const toggleCollapsed = () => {
      if (window.matchMedia('(min-width: 48em)').matches) {
        if ($tab.hasClass('is-horizontal') && !$tab.attr('data-width')) {
          let width = 0;

          $target.find('.js-tabs-link').each((index, value) => {
            width += $(value).outerWidth();
          });
          $tab.attr('data-width', width);
        }

        // Collapse the tabs if the combined width of the tabs is greater than
        // the width of the parent container.
        const isHorizontal = $tab.attr('data-width') <= $tab.outerWidth();
        $tab.toggleClass('is-horizontal', isHorizontal);
        toggleOrder(isHorizontal);
      } else {
        toggleOrder(false);
      }
    };

    $tab.addClass('position-container is-horizontal-enabled');

    $target.find('.js-tab').each((index, element) => {
      const $item = $(element);
      $item.attr('data-original-order', $item.index());
    });

    $tab.on('click.tabs', '[data-drupal-nav-tabs-trigger]', openMenu);
    $(window)
      // @todo use a media query event listener https://www.drupal.org/project/drupal/issues/3225621
      .on('resize.tabs', Drupal.debounce(toggleCollapsed, 150))
      .trigger('resize.tabs');
  }
  /**
   * Initialize the tabs JS.
   */
  Drupal.behaviors.navTabs = {
    attach(context) {
      once(
        'nav-tabs',
        '[data-drupal-nav-tabs].is-collapsible',
        context,
      ).forEach(init);
    },
  };
})(jQuery, Drupal);
;
/**
 * @file
 * Manages elements that can offset the size of the viewport.
 *
 * Measures and reports viewport offset dimensions from elements like the
 * toolbar that can potentially displace the positioning of other elements.
 */

/**
 * @typedef {object} Drupal~displaceOffset
 *
 * @prop {number} top
 * @prop {number} left
 * @prop {number} right
 * @prop {number} bottom
 */

/**
 * Triggers when layout of the page changes.
 *
 * This is used to position fixed element on the page during page resize and
 * Toolbar toggling.
 *
 * @event drupalViewportOffsetChange
 */
(function ($, Drupal, debounce) {
  /**
   *
   * @type {Drupal~displaceOffset}
   */
  const cache = {
    right: 0,
    left: 0,
    bottom: 0,
    top: 0,
  };
  /**
   * The prefix used for the css custom variable name.
   *
   * @type {string}
   */
  const cssVarPrefix = '--drupal-displace-offset';
  const documentStyle = document.documentElement.style;
  const offsetKeys = Object.keys(cache);
  /**
   * The object with accessors that update the CSS variable on value update.
   *
   * @type {Drupal~displaceOffset}
   */
  const offsetProps = {};
  offsetKeys.forEach((edge) => {
    offsetProps[edge] = {
      // Show this property when using Object.keys().
      enumerable: true,
      get() {
        return cache[edge];
      },
      set(value) {
        // Only update the CSS custom variable when the value changed.
        if (value !== cache[edge]) {
          documentStyle.setProperty(`${cssVarPrefix}-${edge}`, `${value}px`);
        }
        cache[edge] = value;
      },
    };
  });

  /**
   * Current value of the size of margins on the page.
   *
   * This property is read-only and the object is sealed to prevent key name
   * modifications since key names are used to dynamically construct CSS custom
   * variable names.
   *
   * @name Drupal.displace.offsets
   *
   * @type {Drupal~displaceOffset}
   */
  const offsets = Object.seal(Object.defineProperties({}, offsetProps));

  /**
   * Calculates displacement for element based on its dimensions and placement.
   *
   * @param {HTMLElement} el
   *   The element whose dimensions and placement will be measured.
   *
   * @param {string} edge
   *   The name of the edge of the viewport that the element is associated
   *   with.
   *
   * @return {number}
   *   The viewport displacement distance for the requested edge.
   */
  function getRawOffset(el, edge) {
    const $el = $(el);
    const documentElement = document.documentElement;
    let displacement = 0;
    const horizontal = edge === 'left' || edge === 'right';
    // Get the offset of the element itself.
    let placement = $el.offset()[horizontal ? 'left' : 'top'];
    // Subtract scroll distance from placement to get the distance
    // to the edge of the viewport.
    placement -=
      window[`scroll${horizontal ? 'X' : 'Y'}`] ||
      document.documentElement[`scroll${horizontal ? 'Left' : 'Top'}`] ||
      0;
    // Find the displacement value according to the edge.
    switch (edge) {
      // Left and top elements displace as a sum of their own offset value
      // plus their size.
      case 'top':
        // Total displacement is the sum of the elements placement and size.
        displacement = placement + $el.outerHeight();
        break;

      case 'left':
        // Total displacement is the sum of the elements placement and size.
        displacement = placement + $el.outerWidth();
        break;

      // Right and bottom elements displace according to their left and
      // top offset. Their size isn't important.
      case 'bottom':
        displacement = documentElement.clientHeight - placement;
        break;

      case 'right':
        displacement = documentElement.clientWidth - placement;
        break;

      default:
        displacement = 0;
    }
    return displacement;
  }

  /**
   * Gets a specific edge's offset.
   *
   * Any element with the attribute data-offset-{edge} e.g. data-offset-top will
   * be considered in the viewport offset calculations. If the attribute has a
   * numeric value, that value will be used. If no value is provided, one will
   * be calculated using the element's dimensions and placement.
   *
   * @function Drupal.displace.calculateOffset
   *
   * @param {string} edge
   *   The name of the edge to calculate. Can be 'top', 'right',
   *   'bottom' or 'left'.
   *
   * @return {number}
   *   The viewport displacement distance for the requested edge.
   */
  function calculateOffset(edge) {
    let edgeOffset = 0;
    const displacingElements = document.querySelectorAll(
      `[data-offset-${edge}]`,
    );
    const n = displacingElements.length;
    for (let i = 0; i < n; i++) {
      const el = displacingElements[i];
      // If the element is not visible, do consider its dimensions.
      if (el.style.display === 'none') {
        continue;
      }
      // If the offset data attribute contains a displacing value, use it.
      let displacement = parseInt(el.getAttribute(`data-offset-${edge}`), 10);
      // If the element's offset data attribute exits
      // but is not a valid number then get the displacement
      // dimensions directly from the element.
      // eslint-disable-next-line no-restricted-globals
      if (isNaN(displacement)) {
        displacement = getRawOffset(el, edge);
      }
      // If the displacement value is larger than the current value for this
      // edge, use the displacement value.
      edgeOffset = Math.max(edgeOffset, displacement);
    }

    return edgeOffset;
  }

  /**
   * Informs listeners of the current offset dimensions.
   *
   * Corresponding CSS custom variables are also updated.
   * Corresponding CSS custom variables names are:
   *  - `--drupal-displace-offset-top`
   *  - `--drupal-displace-offset-right`
   *  - `--drupal-displace-offset-bottom`
   *  - `--drupal-displace-offset-left`
   *
   * @function Drupal.displace
   *
   * @prop {Drupal~displaceOffset} offsets
   *
   * @param {boolean} [broadcast=true]
   *   When true, causes the recalculated offsets values to be
   *   broadcast to listeners. If none is given, defaults to true.
   *
   * @return {Drupal~displaceOffset}
   *   An object whose keys are the for sides an element -- top, right, bottom
   *   and left. The value of each key is the viewport displacement distance for
   *   that edge.
   *
   * @fires event:drupalViewportOffsetChange
   */
  function displace(broadcast = true) {
    const newOffsets = {};
    // Getting the offset and setting the offset needs to be separated because
    // of performance concerns. Only do DOM/style reading happening here.
    offsetKeys.forEach((edge) => {
      newOffsets[edge] = calculateOffset(edge);
    });
    // Once we have all the values, write to the DOM/style.
    offsetKeys.forEach((edge) => {
      // Updating the value in place also update Drupal.displace.offsets.
      offsets[edge] = newOffsets[edge];
    });

    if (broadcast) {
      $(document).trigger('drupalViewportOffsetChange', offsets);
    }
    return offsets;
  }

  /**
   * Registers a resize handler on the window.
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.drupalDisplace = {
    attach() {
      // Mark this behavior as processed on the first pass.
      if (this.displaceProcessed) {
        return;
      }
      this.displaceProcessed = true;
      $(window).on('resize.drupalDisplace', debounce(displace, 200));
    },
  };

  /**
   * Assign the displace function to a property of the Drupal global object.
   *
   * @ignore
   */
  Drupal.displace = displace;

  /**
   * Expose offsets to other scripts to avoid having to recalculate offsets.
   *
   * @ignore
   */
  Object.defineProperty(Drupal.displace, 'offsets', {
    value: offsets,
    // Make sure other scripts don't replace this object.
    writable: false,
  });

  /**
   * Expose method to compute a single edge offsets.
   *
   * @ignore
   */
  Drupal.displace.calculateOffset = calculateOffset;
})(jQuery, Drupal, Drupal.debounce);
;
/**
 * @file
 * Builds a nested accordion widget.
 *
 * Invoke on an HTML list element with the jQuery plugin pattern.
 *
 * @example
 * $('.toolbar-menu').drupalToolbarMenu();
 */

(function ($, Drupal, drupalSettings) {
  /**
   * Store the open menu tray.
   */
  let activeItem = Drupal.url(drupalSettings.path.currentPath);

  $.fn.drupalToolbarMenu = function () {
    const ui = {
      handleOpen: Drupal.t('Extend'),
      handleClose: Drupal.t('Collapse'),
    };

    /**
     * Toggle the open/close state of a list is a menu.
     *
     * @param {jQuery} $item
     *   The li item to be toggled.
     *
     * @param {Boolean} switcher
     *   A flag that forces toggleClass to add or a remove a class, rather than
     *   simply toggling its presence.
     */
    function toggleList($item, switcher) {
      const $toggle = $item
        .children('.toolbar-box')
        .children('.toolbar-handle');
      switcher =
        typeof switcher !== 'undefined' ? switcher : !$item.hasClass('open');
      // Toggle the item open state.
      $item.toggleClass('open', switcher);
      // Twist the toggle.
      $toggle.toggleClass('open', switcher);
      // Adjust the toggle text.
      $toggle.find('.action').each((index, element) => {
        // Expand Structure, Collapse Structure.
        element.textContent = switcher ? ui.handleClose : ui.handleOpen;
      });
    }

    /**
     * Handle clicks from the disclosure button on an item with sub-items.
     *
     * @param {Object} event
     *   A jQuery Event object.
     */
    function toggleClickHandler(event) {
      const $toggle = $(event.target);
      const $item = $toggle.closest('li');
      // Toggle the list item.
      toggleList($item);
      // Close open sibling menus.
      const $openItems = $item.siblings().filter('.open');
      toggleList($openItems, false);
    }

    /**
     * Handle clicks from a menu item link.
     *
     * @param {Object} event
     *   A jQuery Event object.
     */
    function linkClickHandler(event) {
      // If the toolbar is positioned fixed (and therefore hiding content
      // underneath), then users expect clicks in the administration menu tray
      // to take them to that destination but for the menu tray to be closed
      // after clicking: otherwise the toolbar itself is obstructing the view
      // of the destination they chose.
      if (!Drupal.toolbar.models.toolbarModel.get('isFixed')) {
        Drupal.toolbar.models.toolbarModel.set('activeTab', null);
      }
      // Stopping propagation to make sure that once a toolbar-box is clicked
      // (the whitespace part), the page is not redirected anymore.
      event.stopPropagation();
    }

    /**
     * Add markup to the menu elements.
     *
     * Items with sub-elements have a list toggle attached to them. Menu item
     * links and the corresponding list toggle are wrapped with in a div
     * classed with .toolbar-box. The .toolbar-box div provides a positioning
     * context for the item list toggle.
     *
     * @param {jQuery} $menu
     *   The root of the menu to be initialized.
     */
    function initItems($menu) {
      const options = {
        class: 'toolbar-icon toolbar-handle',
        action: ui.handleOpen,
        text: '',
      };
      // Initialize items and their links.
      $menu.find('li > a').wrap('<div class="toolbar-box">');
      // Add a handle to each list item if it has a menu.
      $menu.find('li').each((index, element) => {
        const $item = $(element);
        if ($item.children('ul.toolbar-menu').length) {
          const $box = $item.children('.toolbar-box');
          const $link = $box.find('a');
          options.text = Drupal.t('@label', {
            '@label': $link.length ? $link[0].textContent : '',
          });
          $item
            .children('.toolbar-box')
            .append(Drupal.theme('toolbarMenuItemToggle', options));
        }
      });
    }

    /**
     * Adds a level class to each list based on its depth in the menu.
     *
     * This function is called recursively on each sub level of lists elements
     * until the depth of the menu is exhausted.
     *
     * @param {jQuery} $lists
     *   A jQuery object of ul elements.
     *
     * @param {number} level
     *   The current level number to be assigned to the list elements.
     */
    function markListLevels($lists, level) {
      level = !level ? 1 : level;
      const $lis = $lists.children('li').addClass(`level-${level}`);
      $lists = $lis.children('ul');
      if ($lists.length) {
        markListLevels($lists, level + 1);
      }
    }

    /**
     * On page load, open the active menu item.
     *
     * Marks the trail of the active link in the menu back to the root of the
     * menu with .menu-item--active-trail.
     *
     * @param {jQuery} $menu
     *   The root of the menu.
     */
    function openActiveItem($menu) {
      const pathItem = $menu.find(`a[href="${window.location.pathname}"]`);
      if (pathItem.length && !activeItem) {
        activeItem = window.location.pathname;
      }
      if (activeItem) {
        const $activeItem = $menu
          .find(`a[href="${activeItem}"]`)
          .addClass('menu-item--active');
        const $activeTrail = $activeItem
          .parentsUntil('.root', 'li')
          .addClass('menu-item--active-trail');
        toggleList($activeTrail, true);
      }
    }

    // Return the jQuery object.
    return this.each(function (selector) {
      const menu = once('toolbar-menu', this);
      if (menu.length) {
        const $menu = $(menu);
        // Bind event handlers.
        $menu
          .on('click.toolbar', '.toolbar-box', toggleClickHandler)
          .on('click.toolbar', '.toolbar-box a', linkClickHandler);

        $menu.addClass('root');
        initItems($menu);
        markListLevels($menu);
        // Restore previous and active states.
        openActiveItem($menu);
      }
    });
  };

  /**
   * A toggle is an interactive element often bound to a click handler.
   *
   * @param {object} options
   *   Options for the button.
   * @param {string} options.class
   *   Class to set on the button.
   * @param {string} options.action
   *   Action for the button.
   * @param {string} options.text
   *   Used as label for the button.
   *
   * @return {string}
   *   A string representing a DOM fragment.
   */
  Drupal.theme.toolbarMenuItemToggle = function (options) {
    return `<button class="${options.class}"><span class="action">${options.action}</span> <span class="label">${options.text}</span></button>`;
  };
})(jQuery, Drupal, drupalSettings);
;
/**
 * @file
 * Defines the behavior of the Drupal administration toolbar.
 */

(function ($, Drupal, drupalSettings) {
  // Merge run-time settings with the defaults.
  const options = $.extend(
    {
      breakpoints: {
        'toolbar.narrow': '',
        'toolbar.standard': '',
        'toolbar.wide': '',
      },
    },
    drupalSettings.toolbar,
    // Merge strings on top of drupalSettings so that they are not mutable.
    {
      strings: {
        horizontal: Drupal.t('Horizontal orientation'),
        vertical: Drupal.t('Vertical orientation'),
      },
    },
  );

  /**
   * Registers tabs with the toolbar.
   *
   * The Drupal toolbar allows modules to register top-level tabs. These may
   * point directly to a resource or toggle the visibility of a tray.
   *
   * Modules register tabs with hook_toolbar().
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches the toolbar rendering functionality to the toolbar element.
   */
  Drupal.behaviors.toolbar = {
    attach(context) {
      // Verify that the user agent understands media queries. Complex admin
      // toolbar layouts require media query support.
      if (!window.matchMedia('only screen').matches) {
        return;
      }
      // Process the administrative toolbar.
      once('toolbar', '#toolbar-administration', context).forEach((toolbar) => {
        // Establish the toolbar models and views.
        const model = new Drupal.toolbar.ToolbarModel({
          locked: JSON.parse(
            localStorage.getItem('Drupal.toolbar.trayVerticalLocked'),
          ),
          activeTab: document.getElementById(
            JSON.parse(localStorage.getItem('Drupal.toolbar.activeTabID')),
          ),
          height: $('#toolbar-administration').outerHeight(),
        });

        Drupal.toolbar.models.toolbarModel = model;

        // Attach a listener to the configured media query breakpoints.
        // Executes it before Drupal.toolbar.views to avoid extra rendering.
        Object.keys(options.breakpoints).forEach((label) => {
          const mq = options.breakpoints[label];
          const mql = window.matchMedia(mq);
          Drupal.toolbar.mql[label] = mql;
          // Curry the model and the label of the media query breakpoint to
          // the mediaQueryChangeHandler function.
          mql.addListener(
            Drupal.toolbar.mediaQueryChangeHandler.bind(null, model, label),
          );
          // Fire the mediaQueryChangeHandler for each configured breakpoint
          // so that they process once.
          Drupal.toolbar.mediaQueryChangeHandler.call(null, model, label, mql);
        });

        Drupal.toolbar.views.toolbarVisualView =
          new Drupal.toolbar.ToolbarVisualView({
            el: toolbar,
            model,
            strings: options.strings,
          });
        Drupal.toolbar.views.toolbarAuralView =
          new Drupal.toolbar.ToolbarAuralView({
            el: toolbar,
            model,
            strings: options.strings,
          });
        Drupal.toolbar.views.bodyVisualView = new Drupal.toolbar.BodyVisualView(
          {
            el: toolbar,
            model,
          },
        );

        // Force layout render to fix mobile view. Only needed on load, not
        // for every media query match.
        model.trigger('change:isFixed', model, model.get('isFixed'));
        model.trigger('change:activeTray', model, model.get('activeTray'));

        // Render collapsible menus.
        const menuModel = new Drupal.toolbar.MenuModel();
        Drupal.toolbar.models.menuModel = menuModel;
        Drupal.toolbar.views.menuVisualView = new Drupal.toolbar.MenuVisualView(
          {
            el: $(toolbar).find('.toolbar-menu-administration').get(0),
            model: menuModel,
            strings: options.strings,
          },
        );

        // Handle the resolution of Drupal.toolbar.setSubtrees.
        // This is handled with a deferred so that the function may be invoked
        // asynchronously.
        Drupal.toolbar.setSubtrees.done((subtrees) => {
          menuModel.set('subtrees', subtrees);
          const theme = drupalSettings.ajaxPageState.theme;
          localStorage.setItem(
            `Drupal.toolbar.subtrees.${theme}`,
            JSON.stringify(subtrees),
          );
          // Indicate on the toolbarModel that subtrees are now loaded.
          model.set('areSubtreesLoaded', true);
        });

        // Trigger an initial attempt to load menu subitems. This first attempt
        // is made after the media query handlers have had an opportunity to
        // process. The toolbar starts in the vertical orientation by default,
        // unless the viewport is wide enough to accommodate a horizontal
        // orientation. Thus we give the Toolbar a chance to determine if it
        // should be set to horizontal orientation before attempting to load
        // menu subtrees.
        Drupal.toolbar.views.toolbarVisualView.loadSubtrees();

        $(document)
          // Update the model when the viewport offset changes.
          .on('drupalViewportOffsetChange.toolbar', (event, offsets) => {
            model.set('offsets', offsets);
          });

        // Broadcast model changes to other modules.
        model
          .on('change:orientation', (model, orientation) => {
            $(document).trigger('drupalToolbarOrientationChange', orientation);
          })
          .on('change:activeTab', (model, tab) => {
            $(document).trigger('drupalToolbarTabChange', tab);
          })
          .on('change:activeTray', (model, tray) => {
            $(document).trigger('drupalToolbarTrayChange', tray);
          });

        // If the toolbar's orientation is horizontal and no active tab is
        // defined then show the tray of the first toolbar tab by default (but
        // not the first 'Home' toolbar tab).
        if (
          Drupal.toolbar.models.toolbarModel.get('orientation') ===
            'horizontal' &&
          Drupal.toolbar.models.toolbarModel.get('activeTab') === null
        ) {
          Drupal.toolbar.models.toolbarModel.set({
            activeTab: $(
              '.toolbar-bar .toolbar-tab:not(.home-toolbar-tab) a',
            ).get(0),
          });
        }

        $(window).on({
          'dialog:aftercreate': (event, dialog, $element, settings) => {
            const $toolbar = $('#toolbar-bar');
            $toolbar.css('margin-top', '0');

            // When off-canvas is positioned in top, toolbar has to be moved down.
            if (settings.drupalOffCanvasPosition === 'top') {
              const height = Drupal.offCanvas
                .getContainer($element)
                .outerHeight();
              $toolbar.css('margin-top', `${height}px`);

              $element.on('dialogContentResize.off-canvas', () => {
                const newHeight = Drupal.offCanvas
                  .getContainer($element)
                  .outerHeight();
                $toolbar.css('margin-top', `${newHeight}px`);
              });
            }
          },
          'dialog:beforeclose': () => {
            $('#toolbar-bar').css('margin-top', '0');
          },
        });
      });
    },
  };

  /**
   * Toolbar methods of Backbone objects.
   *
   * @namespace
   */
  Drupal.toolbar = {
    /**
     * A hash of View instances.
     *
     * @type {object.<string, Backbone.View>}
     */
    views: {},

    /**
     * A hash of Model instances.
     *
     * @type {object.<string, Backbone.Model>}
     */
    models: {},

    /**
     * A hash of MediaQueryList objects tracked by the toolbar.
     *
     * @type {object.<string, object>}
     */
    mql: {},

    /**
     * Accepts a list of subtree menu elements.
     *
     * A deferred object that is resolved by an inlined JavaScript callback.
     *
     * @type {jQuery.Deferred}
     *
     * @see toolbar_subtrees_jsonp().
     */
    setSubtrees: new $.Deferred(),

    /**
     * Respond to configured narrow media query changes.
     *
     * @param {Drupal.toolbar.ToolbarModel} model
     *   A toolbar model
     * @param {string} label
     *   Media query label.
     * @param {object} mql
     *   A MediaQueryList object.
     */
    mediaQueryChangeHandler(model, label, mql) {
      switch (label) {
        case 'toolbar.narrow':
          model.set({
            isOriented: mql.matches,
            isTrayToggleVisible: false,
          });
          // If the toolbar doesn't have an explicit orientation yet, or if the
          // narrow media query doesn't match then set the orientation to
          // vertical.
          if (!mql.matches || !model.get('orientation')) {
            model.set({ orientation: 'vertical' }, { validate: true });
          }
          break;

        case 'toolbar.standard':
          model.set({
            isFixed: mql.matches,
          });
          break;

        case 'toolbar.wide':
          model.set(
            {
              orientation:
                mql.matches && !model.get('locked') ? 'horizontal' : 'vertical',
            },
            { validate: true },
          );
          // The tray orientation toggle visibility does not need to be
          // validated.
          model.set({
            isTrayToggleVisible: mql.matches,
          });
          break;

        default:
          break;
      }
    },
  };

  /**
   * A toggle is an interactive element often bound to a click handler.
   *
   * @return {string}
   *   A string representing a DOM fragment.
   */
  Drupal.theme.toolbarOrientationToggle = function () {
    return (
      '<div class="toolbar-toggle-orientation"><div class="toolbar-lining">' +
      '<button class="toolbar-icon" type="button"></button>' +
      '</div></div>'
    );
  };

  /**
   * Ajax command to set the toolbar subtrees.
   *
   * @param {Drupal.Ajax} ajax
   *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
   * @param {object} response
   *   JSON response from the Ajax request.
   * @param {number} [status]
   *   XMLHttpRequest status.
   */
  Drupal.AjaxCommands.prototype.setToolbarSubtrees = function (
    ajax,
    response,
    status,
  ) {
    Drupal.toolbar.setSubtrees.resolve(response.subtrees);
  };
})(jQuery, Drupal, drupalSettings);
;
/**
 * @file
 * A Backbone Model for collapsible menus.
 */

(function (Backbone, Drupal) {
  /**
   * Backbone Model for collapsible menus.
   *
   * @constructor
   *
   * @augments Backbone.Model
   */
  Drupal.toolbar.MenuModel = Backbone.Model.extend(
    /** @lends Drupal.toolbar.MenuModel# */ {
      /**
       * @type {object}
       *
       * @prop {object} subtrees
       */
      defaults: /** @lends Drupal.toolbar.MenuModel# */ {
        /**
         * @type {object}
         */
        subtrees: {},
      },
    },
  );
})(Backbone, Drupal);
;
/**
 * @file
 * A Backbone Model for the toolbar.
 */

(function (Backbone, Drupal) {
  /**
   * Backbone model for the toolbar.
   *
   * @constructor
   *
   * @augments Backbone.Model
   */
  Drupal.toolbar.ToolbarModel = Backbone.Model.extend(
    /** @lends Drupal.toolbar.ToolbarModel# */ {
      /**
       * @type {object}
       *
       * @prop activeTab
       * @prop activeTray
       * @prop isOriented
       * @prop isFixed
       * @prop areSubtreesLoaded
       * @prop isViewportOverflowConstrained
       * @prop orientation
       * @prop locked
       * @prop isTrayToggleVisible
       * @prop height
       * @prop offsets
       */
      defaults: /** @lends Drupal.toolbar.ToolbarModel# */ {
        /**
         * The active toolbar tab. All other tabs should be inactive under
         * normal circumstances. It will remain active across page loads. The
         * active item is stored as an ID selector e.g. '#toolbar-item--1'.
         *
         * @type {string}
         */
        activeTab: null,

        /**
         * Represents whether a tray is open or not. Stored as an ID selector e.g.
         * '#toolbar-item--1-tray'.
         *
         * @type {string}
         */
        activeTray: null,

        /**
         * Indicates whether the toolbar is displayed in an oriented fashion,
         * either horizontal or vertical.
         *
         * @type {boolean}
         */
        isOriented: false,

        /**
         * Indicates whether the toolbar is positioned absolute (false) or fixed
         * (true).
         *
         * @type {boolean}
         */
        isFixed: false,

        /**
         * Menu subtrees are loaded through an AJAX request only when the Toolbar
         * is set to a vertical orientation.
         *
         * @type {boolean}
         */
        areSubtreesLoaded: false,

        /**
         * If the viewport overflow becomes constrained, isFixed must be true so
         * that elements in the trays aren't lost off-screen and impossible to
         * get to.
         *
         * @type {boolean}
         */
        isViewportOverflowConstrained: false,

        /**
         * The orientation of the active tray.
         *
         * @type {string}
         */
        orientation: 'horizontal',

        /**
         * A tray is locked if a user toggled it to vertical. Otherwise a tray
         * will switch between vertical and horizontal orientation based on the
         * configured breakpoints. The locked state will be maintained across page
         * loads.
         *
         * @type {boolean}
         */
        locked: false,

        /**
         * Indicates whether the tray orientation toggle is visible.
         *
         * @type {boolean}
         */
        isTrayToggleVisible: true,

        /**
         * The height of the toolbar.
         *
         * @type {number}
         */
        height: null,

        /**
         * The current viewport offsets determined by {@link Drupal.displace}. The
         * offsets suggest how a module might position is components relative to
         * the viewport.
         *
         * @type {object}
         *
         * @prop {number} top
         * @prop {number} right
         * @prop {number} bottom
         * @prop {number} left
         */
        offsets: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
      },

      /**
       * {@inheritdoc}
       *
       * @param {object} attributes
       *   Attributes for the toolbar.
       * @param {object} options
       *   Options for the toolbar.
       *
       * @return {string|undefined}
       *   Returns an error message if validation failed.
       */
      validate(attributes, options) {
        // Prevent the orientation being set to horizontal if it is locked, unless
        // override has not been passed as an option.
        if (
          attributes.orientation === 'horizontal' &&
          this.get('locked') &&
          !options.override
        ) {
          return Drupal.t(
            'The toolbar cannot be set to a horizontal orientation when it is locked.',
          );
        }
      },
    },
  );
})(Backbone, Drupal);
;
/**
 * @file
 * A Backbone view for the body element.
 */

(function ($, Drupal, Backbone) {
  Drupal.toolbar.BodyVisualView = Backbone.View.extend(
    /** @lends Drupal.toolbar.BodyVisualView# */ {
      /**
       * Adjusts the body element with the toolbar position and dimension changes.
       *
       * @constructs
       *
       * @augments Backbone.View
       */
      initialize() {
        this.listenTo(this.model, 'change:activeTray ', this.render);
        this.listenTo(
          this.model,
          'change:isFixed change:isViewportOverflowConstrained',
          this.isToolbarFixed,
        );
      },

      isToolbarFixed() {
        // When the toolbar is fixed, it will not scroll with page scrolling.
        const isViewportOverflowConstrained = this.model.get(
          'isViewportOverflowConstrained',
        );
        $('body').toggleClass(
          'toolbar-fixed',
          isViewportOverflowConstrained || this.model.get('isFixed'),
        );
      },

      /**
       * {@inheritdoc}
       */
      render() {
        $('body')
          // Toggle the toolbar-tray-open class on the body element. The class is
          // applied when a toolbar tray is active. Padding might be applied to
          // the body element to prevent the tray from overlapping content.
          .toggleClass('toolbar-tray-open', !!this.model.get('activeTray'));
      },
    },
  );
})(jQuery, Drupal, Backbone);
;
/**
 * @file
 * A Backbone view for the collapsible menus.
 */

(function ($, Backbone, Drupal) {
  Drupal.toolbar.MenuVisualView = Backbone.View.extend(
    /** @lends Drupal.toolbar.MenuVisualView# */ {
      /**
       * Backbone View for collapsible menus.
       *
       * @constructs
       *
       * @augments Backbone.View
       */
      initialize() {
        this.listenTo(this.model, 'change:subtrees', this.render);
      },

      /**
       * {@inheritdoc}
       */
      render() {
        const subtrees = this.model.get('subtrees');
        // Add subtrees.
        Object.keys(subtrees || {}).forEach((id) => {
          $(
            once('toolbar-subtrees', this.$el.find(`#toolbar-link-${id}`)),
          ).after(subtrees[id]);
        });
        // Render the main menu as a nested, collapsible accordion.
        if ('drupalToolbarMenu' in $.fn) {
          this.$el.children('.toolbar-menu').drupalToolbarMenu();
        }
      },
    },
  );
})(jQuery, Backbone, Drupal);
;
/**
 * @file
 * A Backbone view for the aural feedback of the toolbar.
 */

(function (Backbone, Drupal) {
  Drupal.toolbar.ToolbarAuralView = Backbone.View.extend(
    /** @lends Drupal.toolbar.ToolbarAuralView# */ {
      /**
       * Backbone view for the aural feedback of the toolbar.
       *
       * @constructs
       *
       * @augments Backbone.View
       *
       * @param {object} options
       *   Options for the view.
       * @param {object} options.strings
       *   Various strings to use in the view.
       */
      initialize(options) {
        this.strings = options.strings;

        this.listenTo(
          this.model,
          'change:orientation',
          this.onOrientationChange,
        );
        this.listenTo(this.model, 'change:activeTray', this.onActiveTrayChange);
      },

      /**
       * Announces an orientation change.
       *
       * @param {Drupal.toolbar.ToolbarModel} model
       *   The toolbar model in question.
       * @param {string} orientation
       *   The new value of the orientation attribute in the model.
       */
      onOrientationChange(model, orientation) {
        Drupal.announce(
          Drupal.t('Tray orientation changed to @orientation.', {
            '@orientation': orientation,
          }),
        );
      },

      /**
       * Announces a changed active tray.
       *
       * @param {Drupal.toolbar.ToolbarModel} model
       *   The toolbar model in question.
       * @param {HTMLElement} tray
       *   The new value of the tray attribute in the model.
       */
      onActiveTrayChange(model, tray) {
        const relevantTray =
          tray === null ? model.previous('activeTray') : tray;
        // Current activeTray and previous activeTray are empty, no state change
        // to announce.
        if (!relevantTray) {
          return;
        }
        const action = tray === null ? Drupal.t('closed') : Drupal.t('opened');
        const trayNameElement =
          relevantTray.querySelector('.toolbar-tray-name');
        let text;
        if (trayNameElement !== null) {
          text = Drupal.t('Tray "@tray" @action.', {
            '@tray': trayNameElement.textContent,
            '@action': action,
          });
        } else {
          text = Drupal.t('Tray @action.', { '@action': action });
        }
        Drupal.announce(text);
      },
    },
  );
})(Backbone, Drupal);
;
/**
 * @file
 * A Backbone view for the toolbar element. Listens to mouse & touch.
 */

(function ($, Drupal, drupalSettings, Backbone) {
  Drupal.toolbar.ToolbarVisualView = Backbone.View.extend(
    /** @lends Drupal.toolbar.ToolbarVisualView# */ {
      /**
       * Event map for the `ToolbarVisualView`.
       *
       * @return {object}
       *   A map of events.
       */
      events() {
        // Prevents delay and simulated mouse events.
        const touchEndToClick = function (event) {
          event.preventDefault();
          event.target.click();
        };

        return {
          'click .toolbar-bar .toolbar-tab .trigger': 'onTabClick',
          'click .toolbar-toggle-orientation button':
            'onOrientationToggleClick',
          'touchend .toolbar-bar .toolbar-tab .trigger': touchEndToClick,
          'touchend .toolbar-toggle-orientation button': touchEndToClick,
        };
      },

      /**
       * Backbone view for the toolbar element. Listens to mouse & touch.
       *
       * @constructs
       *
       * @augments Backbone.View
       *
       * @param {object} options
       *   Options for the view object.
       * @param {object} options.strings
       *   Various strings to use in the view.
       */
      initialize(options) {
        this.strings = options.strings;

        this.listenTo(
          this.model,
          'change:activeTab change:orientation change:isOriented change:isTrayToggleVisible',
          this.render,
        );
        this.listenTo(this.model, 'change:mqMatches', this.onMediaQueryChange);
        this.listenTo(this.model, 'change:offsets', this.adjustPlacement);
        this.listenTo(
          this.model,
          'change:activeTab change:orientation change:isOriented',
          this.updateToolbarHeight,
        );

        // Add the tray orientation toggles, but only if there is a menu.
        this.$el
          .find('.toolbar-tray .toolbar-lining')
          .has('.toolbar-menu')
          .append(Drupal.theme('toolbarOrientationToggle'));

        // Trigger an activeTab change so that listening scripts can respond on
        // page load. This will call render.
        this.model.trigger('change:activeTab');
      },

      /**
       * Update the toolbar element height.
       *
       * @constructs
       *
       * @augments Backbone.View
       */
      updateToolbarHeight() {
        const toolbarTabOuterHeight =
          $('#toolbar-bar').find('.toolbar-tab').outerHeight() || 0;
        const toolbarTrayHorizontalOuterHeight =
          $('.is-active.toolbar-tray-horizontal').outerHeight() || 0;
        this.model.set(
          'height',
          toolbarTabOuterHeight + toolbarTrayHorizontalOuterHeight,
        );

        $('body').css({
          'padding-top': this.model.get('height'),
        });
        $('html').css({
          'scroll-padding-top': this.model.get('height'),
        });

        this.triggerDisplace();
      },

      // Trigger a recalculation of viewport displacing elements. Use setTimeout
      // to ensure this recalculation happens after changes to visual elements
      // have processed.
      triggerDisplace() {
        _.defer(() => {
          Drupal.displace(true);
        });
      },

      /**
       * {@inheritdoc}
       *
       * @return {Drupal.toolbar.ToolbarVisualView}
       *   The `ToolbarVisualView` instance.
       */
      render() {
        this.updateTabs();
        this.updateTrayOrientation();
        this.updateBarAttributes();

        $('body').removeClass('toolbar-loading');

        // Load the subtrees if the orientation of the toolbar is changed to
        // vertical. This condition responds to the case that the toolbar switches
        // from horizontal to vertical orientation. The toolbar starts in a
        // vertical orientation by default and then switches to horizontal during
        // initialization if the media query conditions are met. Simply checking
        // that the orientation is vertical here would result in the subtrees
        // always being loaded, even when the toolbar initialization ultimately
        // results in a horizontal orientation.
        //
        // @see Drupal.behaviors.toolbar.attach() where admin menu subtrees
        // loading is invoked during initialization after media query conditions
        // have been processed.
        if (
          this.model.changed.orientation === 'vertical' ||
          this.model.changed.activeTab
        ) {
          this.loadSubtrees();
        }

        return this;
      },

      /**
       * Responds to a toolbar tab click.
       *
       * @param {jQuery.Event} event
       *   The event triggered.
       */
      onTabClick(event) {
        // If this tab has a tray associated with it, it is considered an
        // activatable tab.
        if (event.currentTarget.hasAttribute('data-toolbar-tray')) {
          const activeTab = this.model.get('activeTab');
          const clickedTab = event.currentTarget;

          // Set the event target as the active item if it is not already.
          this.model.set(
            'activeTab',
            !activeTab || clickedTab !== activeTab ? clickedTab : null,
          );

          event.preventDefault();
          event.stopPropagation();
        }
      },

      /**
       * Toggles the orientation of a toolbar tray.
       *
       * @param {jQuery.Event} event
       *   The event triggered.
       */
      onOrientationToggleClick(event) {
        const orientation = this.model.get('orientation');
        // Determine the toggle-to orientation.
        const antiOrientation =
          orientation === 'vertical' ? 'horizontal' : 'vertical';
        const locked = antiOrientation === 'vertical';
        // Remember the locked state.
        if (locked) {
          localStorage.setItem('Drupal.toolbar.trayVerticalLocked', 'true');
        } else {
          localStorage.removeItem('Drupal.toolbar.trayVerticalLocked');
        }
        // Update the model.
        this.model.set(
          {
            locked,
            orientation: antiOrientation,
          },
          {
            validate: true,
            override: true,
          },
        );

        event.preventDefault();
        event.stopPropagation();
      },

      /**
       * Updates the display of the tabs: toggles a tab and the associated tray.
       */
      updateTabs() {
        const $tab = $(this.model.get('activeTab'));
        // Deactivate the previous tab.
        $(this.model.previous('activeTab'))
          .removeClass('is-active')
          .prop('aria-pressed', false);
        // Deactivate the previous tray.
        $(this.model.previous('activeTray')).removeClass('is-active');

        // Activate the selected tab.
        if ($tab.length > 0) {
          $tab
            .addClass('is-active')
            // Mark the tab as pressed.
            .prop('aria-pressed', true);
          const name = $tab.attr('data-toolbar-tray');
          // Store the active tab name or remove the setting.
          const id = $tab.get(0).id;
          if (id) {
            localStorage.setItem(
              'Drupal.toolbar.activeTabID',
              JSON.stringify(id),
            );
          }
          // Activate the associated tray.
          const $tray = this.$el.find(
            `[data-toolbar-tray="${name}"].toolbar-tray`,
          );
          if ($tray.length) {
            $tray.addClass('is-active');
            this.model.set('activeTray', $tray.get(0));
          } else {
            // There is no active tray.
            this.model.set('activeTray', null);
          }
        } else {
          // There is no active tray.
          this.model.set('activeTray', null);
          localStorage.removeItem('Drupal.toolbar.activeTabID');
        }
      },

      /**
       * Update the attributes of the toolbar bar element.
       */
      updateBarAttributes() {
        const isOriented = this.model.get('isOriented');
        if (isOriented) {
          this.$el.find('.toolbar-bar').attr('data-offset-top', '');
        } else {
          this.$el.find('.toolbar-bar').removeAttr('data-offset-top');
        }
        // Toggle between a basic vertical view and a more sophisticated
        // horizontal and vertical display of the toolbar bar and trays.
        this.$el.toggleClass('toolbar-oriented', isOriented);
      },

      /**
       * Updates the orientation of the active tray if necessary.
       */
      updateTrayOrientation() {
        const orientation = this.model.get('orientation');

        // The antiOrientation is used to render the view of action buttons like
        // the tray orientation toggle.
        const antiOrientation =
          orientation === 'vertical' ? 'horizontal' : 'vertical';

        // Toggle toolbar's parent classes before other toolbar classes to avoid
        // potential flicker and re-rendering.
        $('body')
          .toggleClass('toolbar-vertical', orientation === 'vertical')
          .toggleClass('toolbar-horizontal', orientation === 'horizontal');

        const removeClass =
          antiOrientation === 'horizontal'
            ? 'toolbar-tray-horizontal'
            : 'toolbar-tray-vertical';
        const $trays = this.$el
          .find('.toolbar-tray')
          .removeClass(removeClass)
          .addClass(`toolbar-tray-${orientation}`);

        // Update the tray orientation toggle button.
        const iconClass = `toolbar-icon-toggle-${orientation}`;
        const iconAntiClass = `toolbar-icon-toggle-${antiOrientation}`;
        const $orientationToggle = this.$el
          .find('.toolbar-toggle-orientation')
          .toggle(this.model.get('isTrayToggleVisible'));
        const $orientationToggleButton = $orientationToggle.find('button');
        $orientationToggleButton[0].value = antiOrientation;
        $orientationToggleButton
          .attr('title', this.strings[antiOrientation])
          .removeClass(iconClass)
          .addClass(iconAntiClass);
        $orientationToggleButton[0].textContent = this.strings[antiOrientation];

        // Update data offset attributes for the trays.
        const dir = document.documentElement.dir;
        const edge = dir === 'rtl' ? 'right' : 'left';
        // Remove data-offset attributes from the trays so they can be refreshed.
        $trays.removeAttr('data-offset-left data-offset-right data-offset-top');
        // If an active vertical tray exists, mark it as an offset element.
        $trays
          .filter('.toolbar-tray-vertical.is-active')
          .attr(`data-offset-${edge}`, '');
        // If an active horizontal tray exists, mark it as an offset element.
        $trays
          .filter('.toolbar-tray-horizontal.is-active')
          .attr('data-offset-top', '');
      },

      /**
       * Sets the tops of the trays so that they align with the bottom of the bar.
       */
      adjustPlacement() {
        const $trays = this.$el.find('.toolbar-tray');
        if (!this.model.get('isOriented')) {
          $trays
            .removeClass('toolbar-tray-horizontal')
            .addClass('toolbar-tray-vertical');
        }
      },

      /**
       * Calls the endpoint URI that builds an AJAX command with the rendered
       * subtrees.
       *
       * The rendered admin menu subtrees HTML is cached on the client in
       * localStorage until the cache of the admin menu subtrees on the server-
       * side is invalidated. The subtreesHash is stored in localStorage as well
       * and compared to the subtreesHash in drupalSettings to determine when the
       * admin menu subtrees cache has been invalidated.
       */
      loadSubtrees() {
        const $activeTab = $(this.model.get('activeTab'));
        const orientation = this.model.get('orientation');
        // Only load and render the admin menu subtrees if:
        //   (1) They have not been loaded yet.
        //   (2) The active tab is the administration menu tab, indicated by the
        //       presence of the data-drupal-subtrees attribute.
        //   (3) The orientation of the tray is vertical.
        if (
          !this.model.get('areSubtreesLoaded') &&
          typeof $activeTab.data('drupal-subtrees') !== 'undefined' &&
          orientation === 'vertical'
        ) {
          const subtreesHash = drupalSettings.toolbar.subtreesHash;
          const theme = drupalSettings.ajaxPageState.theme;
          const endpoint = Drupal.url(`toolbar/subtrees/${subtreesHash}`);
          const cachedSubtreesHash = localStorage.getItem(
            `Drupal.toolbar.subtreesHash.${theme}`,
          );
          const cachedSubtrees = JSON.parse(
            localStorage.getItem(`Drupal.toolbar.subtrees.${theme}`),
          );
          const isVertical = this.model.get('orientation') === 'vertical';
          // If we have the subtrees in localStorage and the subtree hash has not
          // changed, then use the cached data.
          if (
            isVertical &&
            subtreesHash === cachedSubtreesHash &&
            cachedSubtrees
          ) {
            Drupal.toolbar.setSubtrees.resolve(cachedSubtrees);
          }
          // Only make the call to get the subtrees if the orientation of the
          // toolbar is vertical.
          else if (isVertical) {
            // Remove the cached menu information.
            localStorage.removeItem(`Drupal.toolbar.subtreesHash.${theme}`);
            localStorage.removeItem(`Drupal.toolbar.subtrees.${theme}`);
            // The AJAX response's command will trigger the resolve method of the
            // Drupal.toolbar.setSubtrees Promise.
            Drupal.ajax({ url: endpoint }).execute();
            // Cache the hash for the subtrees locally.
            localStorage.setItem(
              `Drupal.toolbar.subtreesHash.${theme}`,
              subtreesHash,
            );
          }
        }
      },
    },
  );
})(jQuery, Drupal, drupalSettings, Backbone);
;
/*! shepherd.js 10.0.1 */

'use strict';(function(O,pa){"object"===typeof exports&&"undefined"!==typeof module?module.exports=pa():"function"===typeof define&&define.amd?define(pa):(O="undefined"!==typeof globalThis?globalThis:O||self,O.Shepherd=pa())})(this,function(){function O(a,b){return!1!==b.clone&&b.isMergeableObject(a)?ea(Array.isArray(a)?[]:{},a,b):a}function pa(a,b,c){return a.concat(b).map(function(d){return O(d,c)})}function Db(a){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(a).filter(function(b){return a.propertyIsEnumerable(b)}):
[]}function Sa(a){return Object.keys(a).concat(Db(a))}function Ta(a,b){try{return b in a}catch(c){return!1}}function Eb(a,b,c){var d={};c.isMergeableObject(a)&&Sa(a).forEach(function(e){d[e]=O(a[e],c)});Sa(b).forEach(function(e){if(!Ta(a,e)||Object.hasOwnProperty.call(a,e)&&Object.propertyIsEnumerable.call(a,e))if(Ta(a,e)&&c.isMergeableObject(b[e])){if(c.customMerge){var f=c.customMerge(e);f="function"===typeof f?f:ea}else f=ea;d[e]=f(a[e],b[e],c)}else d[e]=O(b[e],c)});return d}function ea(a,b,c){c=
c||{};c.arrayMerge=c.arrayMerge||pa;c.isMergeableObject=c.isMergeableObject||Fb;c.cloneUnlessOtherwiseSpecified=O;var d=Array.isArray(b),e=Array.isArray(a);return d!==e?O(b,c):d?c.arrayMerge(a,b,c):Eb(a,b,c)}function Z(a){return"function"===typeof a}function qa(a){return"string"===typeof a}function Ua(a){let b=Object.getOwnPropertyNames(a.constructor.prototype);for(let c=0;c<b.length;c++){let d=b[c],e=a[d];"constructor"!==d&&"function"===typeof e&&(a[d]=e.bind(a))}return a}function Gb(a,b){return c=>
{if(b.isOpen()){let d=b.el&&c.currentTarget===b.el;(void 0!==a&&c.currentTarget.matches(a)||d)&&b.tour.next()}}}function Hb(a){let {event:b,selector:c}=a.options.advanceOn||{};if(b){let d=Gb(c,a),e;try{e=document.querySelector(c)}catch(f){}if(void 0===c||e)e?(e.addEventListener(b,d),a.on("destroy",()=>e.removeEventListener(b,d))):(document.body.addEventListener(b,d,!0),a.on("destroy",()=>document.body.removeEventListener(b,d,!0)));else return console.error(`No element was found for the selector supplied to advanceOn: ${c}`)}else return console.error("advanceOn was defined, but no event name was passed.")}
function M(a){return a?(a.nodeName||"").toLowerCase():null}function K(a){return null==a?window:"[object Window]"!==a.toString()?(a=a.ownerDocument)?a.defaultView||window:window:a}function fa(a){var b=K(a).Element;return a instanceof b||a instanceof Element}function F(a){var b=K(a).HTMLElement;return a instanceof b||a instanceof HTMLElement}function Ea(a){if("undefined"===typeof ShadowRoot)return!1;var b=K(a).ShadowRoot;return a instanceof b||a instanceof ShadowRoot}function N(a){return a.split("-")[0]}
function ha(a,b){void 0===b&&(b=!1);var c=a.getBoundingClientRect(),d=1,e=1;F(a)&&b&&(b=a.offsetHeight,a=a.offsetWidth,0<a&&(d=ia(c.width)/a||1),0<b&&(e=ia(c.height)/b||1));return{width:c.width/d,height:c.height/e,top:c.top/e,right:c.right/d,bottom:c.bottom/e,left:c.left/d,x:c.left/d,y:c.top/e}}function Fa(a){var b=ha(a),c=a.offsetWidth,d=a.offsetHeight;1>=Math.abs(b.width-c)&&(c=b.width);1>=Math.abs(b.height-d)&&(d=b.height);return{x:a.offsetLeft,y:a.offsetTop,width:c,height:d}}function Va(a,b){var c=
b.getRootNode&&b.getRootNode();if(a.contains(b))return!0;if(c&&Ea(c)){do{if(b&&a.isSameNode(b))return!0;b=b.parentNode||b.host}while(b)}return!1}function P(a){return K(a).getComputedStyle(a)}function U(a){return((fa(a)?a.ownerDocument:a.document)||window.document).documentElement}function wa(a){return"html"===M(a)?a:a.assignedSlot||a.parentNode||(Ea(a)?a.host:null)||U(a)}function Wa(a){return F(a)&&"fixed"!==P(a).position?a.offsetParent:null}function ra(a){for(var b=K(a),c=Wa(a);c&&0<=["table","td",
"th"].indexOf(M(c))&&"static"===P(c).position;)c=Wa(c);if(c&&("html"===M(c)||"body"===M(c)&&"static"===P(c).position))return b;if(!c)a:{c=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1===navigator.userAgent.indexOf("Trident")||!F(a)||"fixed"!==P(a).position)for(a=wa(a),Ea(a)&&(a=a.host);F(a)&&0>["html","body"].indexOf(M(a));){var d=P(a);if("none"!==d.transform||"none"!==d.perspective||"paint"===d.contain||-1!==["transform","perspective"].indexOf(d.willChange)||c&&"filter"===d.willChange||
c&&d.filter&&"none"!==d.filter){c=a;break a}else a=a.parentNode}c=null}return c||b}function Ga(a){return 0<=["top","bottom"].indexOf(a)?"x":"y"}function Xa(a){return Object.assign({},{top:0,right:0,bottom:0,left:0},a)}function Ya(a,b){return b.reduce(function(c,d){c[d]=a;return c},{})}function ja(a){return a.split("-")[1]}function Za(a){var b,c=a.popper,d=a.popperRect,e=a.placement,f=a.variation,g=a.offsets,l=a.position,m=a.gpuAcceleration,k=a.adaptive,p=a.roundOffsets,q=a.isFixed;a=g.x;a=void 0===
a?0:a;var n=g.y,r=void 0===n?0:n;n="function"===typeof p?p({x:a,y:r}):{x:a,y:r};a=n.x;r=n.y;n=g.hasOwnProperty("x");g=g.hasOwnProperty("y");var x="left",h="top",t=window;if(k){var v=ra(c),A="clientHeight",u="clientWidth";v===K(c)&&(v=U(c),"static"!==P(v).position&&"absolute"===l&&(A="scrollHeight",u="scrollWidth"));if("top"===e||("left"===e||"right"===e)&&"end"===f)h="bottom",r-=(q&&v===t&&t.visualViewport?t.visualViewport.height:v[A])-d.height,r*=m?1:-1;if("left"===e||("top"===e||"bottom"===e)&&
"end"===f)x="right",a-=(q&&v===t&&t.visualViewport?t.visualViewport.width:v[u])-d.width,a*=m?1:-1}c=Object.assign({position:l},k&&Ib);!0===p?(p=r,d=window.devicePixelRatio||1,a={x:ia(a*d)/d||0,y:ia(p*d)/d||0}):a={x:a,y:r};p=a;a=p.x;r=p.y;if(m){var w;return Object.assign({},c,(w={},w[h]=g?"0":"",w[x]=n?"0":"",w.transform=1>=(t.devicePixelRatio||1)?"translate("+a+"px, "+r+"px)":"translate3d("+a+"px, "+r+"px, 0)",w))}return Object.assign({},c,(b={},b[h]=g?r+"px":"",b[x]=n?a+"px":"",b.transform="",b))}
function xa(a){return a.replace(/left|right|bottom|top/g,function(b){return Jb[b]})}function $a(a){return a.replace(/start|end/g,function(b){return Kb[b]})}function Ha(a){a=K(a);return{scrollLeft:a.pageXOffset,scrollTop:a.pageYOffset}}function Ia(a){return ha(U(a)).left+Ha(a).scrollLeft}function Ja(a){a=P(a);return/auto|scroll|overlay|hidden/.test(a.overflow+a.overflowY+a.overflowX)}function ab(a){return 0<=["html","body","#document"].indexOf(M(a))?a.ownerDocument.body:F(a)&&Ja(a)?a:ab(wa(a))}function sa(a,
b){var c;void 0===b&&(b=[]);var d=ab(a);a=d===(null==(c=a.ownerDocument)?void 0:c.body);c=K(d);d=a?[c].concat(c.visualViewport||[],Ja(d)?d:[]):d;b=b.concat(d);return a?b:b.concat(sa(wa(d)))}function Ka(a){return Object.assign({},a,{left:a.x,top:a.y,right:a.x+a.width,bottom:a.y+a.height})}function bb(a,b){if("viewport"===b){b=K(a);var c=U(a);b=b.visualViewport;var d=c.clientWidth;c=c.clientHeight;var e=0,f=0;b&&(d=b.width,c=b.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(e=b.offsetLeft,
f=b.offsetTop));a={width:d,height:c,x:e+Ia(a),y:f};a=Ka(a)}else fa(b)?(a=ha(b),a.top+=b.clientTop,a.left+=b.clientLeft,a.bottom=a.top+b.clientHeight,a.right=a.left+b.clientWidth,a.width=b.clientWidth,a.height=b.clientHeight,a.x=a.left,a.y=a.top):(f=U(a),a=U(f),d=Ha(f),b=null==(c=f.ownerDocument)?void 0:c.body,c=L(a.scrollWidth,a.clientWidth,b?b.scrollWidth:0,b?b.clientWidth:0),e=L(a.scrollHeight,a.clientHeight,b?b.scrollHeight:0,b?b.clientHeight:0),f=-d.scrollLeft+Ia(f),d=-d.scrollTop,"rtl"===P(b||
a).direction&&(f+=L(a.clientWidth,b?b.clientWidth:0)-c),a=Ka({width:c,height:e,x:f,y:d}));return a}function Lb(a){var b=sa(wa(a)),c=0<=["absolute","fixed"].indexOf(P(a).position)&&F(a)?ra(a):a;return fa(c)?b.filter(function(d){return fa(d)&&Va(d,c)&&"body"!==M(d)}):[]}function Mb(a,b,c){b="clippingParents"===b?Lb(a):[].concat(b);c=[].concat(b,[c]);c=c.reduce(function(d,e){e=bb(a,e);d.top=L(e.top,d.top);d.right=V(e.right,d.right);d.bottom=V(e.bottom,d.bottom);d.left=L(e.left,d.left);return d},bb(a,
c[0]));c.width=c.right-c.left;c.height=c.bottom-c.top;c.x=c.left;c.y=c.top;return c}function cb(a){var b=a.reference,c=a.element,d=(a=a.placement)?N(a):null;a=a?ja(a):null;var e=b.x+b.width/2-c.width/2,f=b.y+b.height/2-c.height/2;switch(d){case "top":e={x:e,y:b.y-c.height};break;case "bottom":e={x:e,y:b.y+b.height};break;case "right":e={x:b.x+b.width,y:f};break;case "left":e={x:b.x-c.width,y:f};break;default:e={x:b.x,y:b.y}}d=d?Ga(d):null;if(null!=d)switch(f="y"===d?"height":"width",a){case "start":e[d]-=
b[f]/2-c[f]/2;break;case "end":e[d]+=b[f]/2-c[f]/2}return e}function ta(a,b){void 0===b&&(b={});var c=b;b=c.placement;b=void 0===b?a.placement:b;var d=c.boundary,e=void 0===d?"clippingParents":d;d=c.rootBoundary;var f=void 0===d?"viewport":d;d=c.elementContext;d=void 0===d?"popper":d;var g=c.altBoundary,l=void 0===g?!1:g;c=c.padding;c=void 0===c?0:c;c=Xa("number"!==typeof c?c:Ya(c,ua));g=a.rects.popper;l=a.elements[l?"popper"===d?"reference":"popper":d];e=Mb(fa(l)?l:l.contextElement||U(a.elements.popper),
e,f);f=ha(a.elements.reference);l=cb({reference:f,element:g,strategy:"absolute",placement:b});g=Ka(Object.assign({},g,l));f="popper"===d?g:f;var m={top:e.top-f.top+c.top,bottom:f.bottom-e.bottom+c.bottom,left:e.left-f.left+c.left,right:f.right-e.right+c.right};a=a.modifiersData.offset;if("popper"===d&&a){var k=a[b];Object.keys(m).forEach(function(p){var q=0<=["right","bottom"].indexOf(p)?1:-1,n=0<=["top","bottom"].indexOf(p)?"y":"x";m[p]+=k[n]*q})}return m}function Nb(a,b){void 0===b&&(b={});var c=
b.boundary,d=b.rootBoundary,e=b.padding,f=b.flipVariations,g=b.allowedAutoPlacements,l=void 0===g?db:g,m=ja(b.placement);b=m?f?eb:eb.filter(function(p){return ja(p)===m}):ua;f=b.filter(function(p){return 0<=l.indexOf(p)});0===f.length&&(f=b);var k=f.reduce(function(p,q){p[q]=ta(a,{placement:q,boundary:c,rootBoundary:d,padding:e})[N(q)];return p},{});return Object.keys(k).sort(function(p,q){return k[p]-k[q]})}function Ob(a){if("auto"===N(a))return[];var b=xa(a);return[$a(a),b,$a(b)]}function fb(a,
b,c){void 0===c&&(c={x:0,y:0});return{top:a.top-b.height-c.y,right:a.right-b.width+c.x,bottom:a.bottom-b.height+c.y,left:a.left-b.width-c.x}}function gb(a){return["top","right","bottom","left"].some(function(b){return 0<=a[b]})}function Pb(a,b,c){void 0===c&&(c=!1);var d=F(b),e;if(e=F(b)){var f=b.getBoundingClientRect();e=ia(f.width)/b.offsetWidth||1;f=ia(f.height)/b.offsetHeight||1;e=1!==e||1!==f}f=e;e=U(b);a=ha(a,f);f={scrollLeft:0,scrollTop:0};var g={x:0,y:0};if(d||!d&&!c){if("body"!==M(b)||Ja(e))f=
b!==K(b)&&F(b)?{scrollLeft:b.scrollLeft,scrollTop:b.scrollTop}:Ha(b);F(b)?(g=ha(b,!0),g.x+=b.clientLeft,g.y+=b.clientTop):e&&(g.x=Ia(e))}return{x:a.left+f.scrollLeft-g.x,y:a.top+f.scrollTop-g.y,width:a.width,height:a.height}}function Qb(a){function b(f){d.add(f.name);[].concat(f.requires||[],f.requiresIfExists||[]).forEach(function(g){d.has(g)||(g=c.get(g))&&b(g)});e.push(f)}var c=new Map,d=new Set,e=[];a.forEach(function(f){c.set(f.name,f)});a.forEach(function(f){d.has(f.name)||b(f)});return e}function Rb(a){var b=
Qb(a);return Sb.reduce(function(c,d){return c.concat(b.filter(function(e){return e.phase===d}))},[])}function Tb(a){var b;return function(){b||(b=new Promise(function(c){Promise.resolve().then(function(){b=void 0;c(a())})}));return b}}function Ub(a){var b=a.reduce(function(c,d){var e=c[d.name];c[d.name]=e?Object.assign({},e,d,{options:Object.assign({},e.options,d.options),data:Object.assign({},e.data,d.data)}):d;return c},{});return Object.keys(b).map(function(c){return b[c]})}function hb(){for(var a=
arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];return!b.some(function(d){return!(d&&"function"===typeof d.getBoundingClientRect)})}function La(){La=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b],d;for(d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a};return La.apply(this,arguments)}function Vb(){return[{name:"applyStyles",fn(a){let {state:b}=a;Object.keys(b.elements).forEach(c=>{if("popper"===c){var d=b.attributes[c]||
{},e=b.elements[c];Object.assign(e.style,{position:"fixed",left:"50%",top:"50%",transform:"translate(-50%, -50%)"});Object.keys(d).forEach(f=>{let g=d[f];!1===g?e.removeAttribute(f):e.setAttribute(f,!0===g?"":g)})}})}},{name:"computeStyles",options:{adaptive:!1}}]}function ib(a){return{name:"focusAfterRender",enabled:!0,phase:"afterWrite",fn(){setTimeout(()=>{a.el&&a.el.focus({preventScroll:!0})},300)}}}function jb(a){return qa(a)&&""!==a?"-"!==a.charAt(a.length-1)?`${a}-`:a:""}function Ma(){let a=
Date.now();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,b=>{let c=(a+16*Math.random())%16|0;a=Math.floor(a/16);return("x"==b?c:c&3|8).toString(16)})}function kb(a,b){if(a.popperOptions){let c=Object.assign({},b,a.popperOptions);if(a.popperOptions.modifiers&&0<a.popperOptions.modifiers.length){let d=a.popperOptions.modifiers.map(e=>e.name);b=b.modifiers.filter(e=>!d.includes(e.name));c.modifiers=Array.from(new Set([...b,...a.popperOptions.modifiers]))}return c}return b}function G(){}
function Wb(a,b){for(let c in b)a[c]=b[c];return a}function ka(a){return a()}function lb(a){return"function"===typeof a}function Q(a,b){return a!=a?b==b:a!==b||a&&"object"===typeof a||"function"===typeof a}function H(a){a.parentNode.removeChild(a)}function mb(a){return document.createElementNS("http://www.w3.org/2000/svg",a)}function ya(a,b,c,d){a.addEventListener(b,c,d);return()=>a.removeEventListener(b,c,d)}function B(a,b,c){null==c?a.removeAttribute(b):a.getAttribute(b)!==c&&a.setAttribute(b,c)}
function nb(a,b){let c=Object.getOwnPropertyDescriptors(a.__proto__);for(let d in b)null==b[d]?a.removeAttribute(d):"style"===d?a.style.cssText=b[d]:"__value"===d?a.value=a[d]=b[d]:c[d]&&c[d].set?a[d]=b[d]:B(a,d,b[d])}function la(a,b,c){a.classList[c?"add":"remove"](b)}function za(){if(!R)throw Error("Function called outside component initialization");return R}function Na(a){Aa.push(a)}function ob(){let a=R;do{for(;Ba<va.length;){var b=va[Ba];Ba++;R=b;b=b.$$;if(null!==b.fragment){b.update();b.before_update.forEach(ka);
var c=b.dirty;b.dirty=[-1];b.fragment&&b.fragment.p(b.ctx,c);b.after_update.forEach(Na)}}R=null;for(Ba=va.length=0;ma.length;)ma.pop()();for(b=0;b<Aa.length;b+=1)c=Aa[b],Oa.has(c)||(Oa.add(c),c());Aa.length=0}while(va.length);for(;pb.length;)pb.pop()();Pa=!1;Oa.clear();R=a}function aa(){ba={r:0,c:[],p:ba}}function ca(){ba.r||ba.c.forEach(ka);ba=ba.p}function z(a,b){a&&a.i&&(Ca.delete(a),a.i(b))}function C(a,b,c,d){a&&a.o?Ca.has(a)||(Ca.add(a),ba.c.push(()=>{Ca.delete(a);d&&(c&&a.d(1),d())}),a.o(b)):
d&&d()}function da(a){a&&a.c()}function W(a,b,c,d){let {fragment:e,on_mount:f,on_destroy:g,after_update:l}=a.$$;e&&e.m(b,c);d||Na(()=>{let m=f.map(ka).filter(lb);g?g.push(...m):m.forEach(ka);a.$$.on_mount=[]});l.forEach(Na)}function X(a,b){a=a.$$;null!==a.fragment&&(a.on_destroy.forEach(ka),a.fragment&&a.fragment.d(b),a.on_destroy=a.fragment=null,a.ctx=[])}function S(a,b,c,d,e,f,g,l){void 0===l&&(l=[-1]);let m=R;R=a;let k=a.$$={fragment:null,ctx:null,props:f,update:G,not_equal:e,bound:Object.create(null),
on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(b.context||(m?m.$$.context:[])),callbacks:Object.create(null),dirty:l,skip_bound:!1,root:b.target||m.$$.root};g&&g(k.root);let p=!1;k.ctx=c?c(a,b.props||{},function(q,n){let r=(2>=arguments.length?0:arguments.length-2)?2>=arguments.length?void 0:arguments[2]:n;if(k.ctx&&e(k.ctx[q],k.ctx[q]=r)){if(!k.skip_bound&&k.bound[q])k.bound[q](r);p&&(-1===a.$$.dirty[0]&&(va.push(a),Pa||(Pa=!0,Xb.then(ob)),a.$$.dirty.fill(0)),
a.$$.dirty[q/31|0]|=1<<q%31)}return n}):[];k.update();p=!0;k.before_update.forEach(ka);k.fragment=d?d(k.ctx):!1;b.target&&(b.hydrate?(c=Array.from(b.target.childNodes),k.fragment&&k.fragment.l(c),c.forEach(H)):k.fragment&&k.fragment.c(),b.intro&&z(a.$$.fragment),W(a,b.target,b.anchor,b.customElement),ob());R=m}function Yb(a){let b,c,d,e,f;return{c(){b=document.createElement("button");B(b,"aria-label",c=a[3]?a[3]:null);B(b,"class",d=`${a[1]||""} shepherd-button ${a[4]?"shepherd-button-secondary":""}`);
b.disabled=a[2];B(b,"tabindex","0")},m(g,l){g.insertBefore(b,l||null);b.innerHTML=a[5];e||(f=ya(b,"click",function(){lb(a[0])&&a[0].apply(this,arguments)}),e=!0)},p(g,l){[l]=l;a=g;l&32&&(b.innerHTML=a[5]);l&8&&c!==(c=a[3]?a[3]:null)&&B(b,"aria-label",c);l&18&&d!==(d=`${a[1]||""} shepherd-button ${a[4]?"shepherd-button-secondary":""}`)&&B(b,"class",d);l&4&&(b.disabled=a[2])},i:G,o:G,d(g){g&&H(b);e=!1;f()}}}function Zb(a,b,c){function d(n){return Z(n)?n.call(f):n}let {config:e,step:f}=b,g,l,m,k,p,q;
a.$$set=n=>{"config"in n&&c(6,e=n.config);"step"in n&&c(7,f=n.step)};a.$$.update=()=>{a.$$.dirty&192&&(c(0,g=e.action?e.action.bind(f.tour):null),c(1,l=e.classes),c(2,m=e.disabled?d(e.disabled):!1),c(3,k=e.label?d(e.label):null),c(4,p=e.secondary),c(5,q=e.text?d(e.text):null))};return[g,l,m,k,p,q,e,f]}function qb(a,b,c){a=a.slice();a[2]=b[c];return a}function rb(a){let b,c,d=a[1],e=[];for(let g=0;g<d.length;g+=1)e[g]=sb(qb(a,d,g));let f=g=>C(e[g],1,1,()=>{e[g]=null});return{c(){for(let g=0;g<e.length;g+=
1)e[g].c();b=document.createTextNode("")},m(g,l){for(let m=0;m<e.length;m+=1)e[m].m(g,l);g.insertBefore(b,l||null);c=!0},p(g,l){if(l&3){d=g[1];let m;for(m=0;m<d.length;m+=1){let k=qb(g,d,m);e[m]?(e[m].p(k,l),z(e[m],1)):(e[m]=sb(k),e[m].c(),z(e[m],1),e[m].m(b.parentNode,b))}aa();for(m=d.length;m<e.length;m+=1)f(m);ca()}},i(g){if(!c){for(g=0;g<d.length;g+=1)z(e[g]);c=!0}},o(g){e=e.filter(Boolean);for(g=0;g<e.length;g+=1)C(e[g]);c=!1},d(g){var l=e;for(let m=0;m<l.length;m+=1)l[m]&&l[m].d(g);g&&H(b)}}}
function sb(a){let b,c;b=new $b({props:{config:a[2],step:a[0]}});return{c(){da(b.$$.fragment)},m(d,e){W(b,d,e);c=!0},p(d,e){let f={};e&2&&(f.config=d[2]);e&1&&(f.step=d[0]);b.$set(f)},i(d){c||(z(b.$$.fragment,d),c=!0)},o(d){C(b.$$.fragment,d);c=!1},d(d){X(b,d)}}}function ac(a){let b,c,d=a[1]&&rb(a);return{c(){b=document.createElement("footer");d&&d.c();B(b,"class","shepherd-footer")},m(e,f){e.insertBefore(b,f||null);d&&d.m(b,null);c=!0},p(e,f){[f]=f;e[1]?d?(d.p(e,f),f&2&&z(d,1)):(d=rb(e),d.c(),z(d,
1),d.m(b,null)):d&&(aa(),C(d,1,1,()=>{d=null}),ca())},i(e){c||(z(d),c=!0)},o(e){C(d);c=!1},d(e){e&&H(b);d&&d.d()}}}function bc(a,b,c){let d,{step:e}=b;a.$$set=f=>{"step"in f&&c(0,e=f.step)};a.$$.update=()=>{a.$$.dirty&1&&c(1,d=e.options.buttons)};return[e,d]}function cc(a){let b,c,d,e,f;return{c(){b=document.createElement("button");c=document.createElement("span");c.textContent="\u00d7";B(c,"aria-hidden","true");B(b,"aria-label",d=a[0].label?a[0].label:"Close Tour");B(b,"class","shepherd-cancel-icon");
B(b,"type","button")},m(g,l){g.insertBefore(b,l||null);b.appendChild(c);e||(f=ya(b,"click",a[1]),e=!0)},p(g,l){[l]=l;l&1&&d!==(d=g[0].label?g[0].label:"Close Tour")&&B(b,"aria-label",d)},i:G,o:G,d(g){g&&H(b);e=!1;f()}}}function dc(a,b,c){let {cancelIcon:d,step:e}=b;a.$$set=f=>{"cancelIcon"in f&&c(0,d=f.cancelIcon);"step"in f&&c(2,e=f.step)};return[d,f=>{f.preventDefault();e.cancel()},e]}function ec(a){let b;return{c(){b=document.createElement("h3");B(b,"id",a[1]);B(b,"class","shepherd-title")},m(c,
d){c.insertBefore(b,d||null);a[3](b)},p(c,d){[d]=d;d&2&&B(b,"id",c[1])},i:G,o:G,d(c){c&&H(b);a[3](null)}}}function fc(a,b,c){let {labelId:d,element:e,title:f}=b;za().$$.after_update.push(()=>{Z(f)&&c(2,f=f());c(0,e.innerHTML=f,e)});a.$$set=g=>{"labelId"in g&&c(1,d=g.labelId);"element"in g&&c(0,e=g.element);"title"in g&&c(2,f=g.title)};return[e,d,f,function(g){ma[g?"unshift":"push"](()=>{e=g;c(0,e)})}]}function tb(a){let b,c;b=new gc({props:{labelId:a[0],title:a[2]}});return{c(){da(b.$$.fragment)},
m(d,e){W(b,d,e);c=!0},p(d,e){let f={};e&1&&(f.labelId=d[0]);e&4&&(f.title=d[2]);b.$set(f)},i(d){c||(z(b.$$.fragment,d),c=!0)},o(d){C(b.$$.fragment,d);c=!1},d(d){X(b,d)}}}function ub(a){let b,c;b=new hc({props:{cancelIcon:a[3],step:a[1]}});return{c(){da(b.$$.fragment)},m(d,e){W(b,d,e);c=!0},p(d,e){let f={};e&8&&(f.cancelIcon=d[3]);e&2&&(f.step=d[1]);b.$set(f)},i(d){c||(z(b.$$.fragment,d),c=!0)},o(d){C(b.$$.fragment,d);c=!1},d(d){X(b,d)}}}function ic(a){let b,c,d,e=a[2]&&tb(a),f=a[3]&&a[3].enabled&&
ub(a);return{c(){b=document.createElement("header");e&&e.c();c=document.createTextNode(" ");f&&f.c();B(b,"class","shepherd-header")},m(g,l){g.insertBefore(b,l||null);e&&e.m(b,null);b.appendChild(c);f&&f.m(b,null);d=!0},p(g,l){[l]=l;g[2]?e?(e.p(g,l),l&4&&z(e,1)):(e=tb(g),e.c(),z(e,1),e.m(b,c)):e&&(aa(),C(e,1,1,()=>{e=null}),ca());g[3]&&g[3].enabled?f?(f.p(g,l),l&8&&z(f,1)):(f=ub(g),f.c(),z(f,1),f.m(b,null)):f&&(aa(),C(f,1,1,()=>{f=null}),ca())},i(g){d||(z(e),z(f),d=!0)},o(g){C(e);C(f);d=!1},d(g){g&&
H(b);e&&e.d();f&&f.d()}}}function jc(a,b,c){let {labelId:d,step:e}=b,f,g;a.$$set=l=>{"labelId"in l&&c(0,d=l.labelId);"step"in l&&c(1,e=l.step)};a.$$.update=()=>{a.$$.dirty&2&&(c(2,f=e.options.title),c(3,g=e.options.cancelIcon))};return[d,e,f,g]}function kc(a){let b;return{c(){b=document.createElement("div");B(b,"class","shepherd-text");B(b,"id",a[1])},m(c,d){c.insertBefore(b,d||null);a[3](b)},p(c,d){[d]=d;d&2&&B(b,"id",c[1])},i:G,o:G,d(c){c&&H(b);a[3](null)}}}function lc(a,b,c){let {descriptionId:d,
element:e,step:f}=b;za().$$.after_update.push(()=>{let {text:g}=f.options;Z(g)&&(g=g.call(f));g instanceof HTMLElement?e.appendChild(g):c(0,e.innerHTML=g,e)});a.$$set=g=>{"descriptionId"in g&&c(1,d=g.descriptionId);"element"in g&&c(0,e=g.element);"step"in g&&c(2,f=g.step)};return[e,d,f,function(g){ma[g?"unshift":"push"](()=>{e=g;c(0,e)})}]}function vb(a){let b,c;b=new mc({props:{labelId:a[1],step:a[2]}});return{c(){da(b.$$.fragment)},m(d,e){W(b,d,e);c=!0},p(d,e){let f={};e&2&&(f.labelId=d[1]);e&4&&
(f.step=d[2]);b.$set(f)},i(d){c||(z(b.$$.fragment,d),c=!0)},o(d){C(b.$$.fragment,d);c=!1},d(d){X(b,d)}}}function wb(a){let b,c;b=new nc({props:{descriptionId:a[0],step:a[2]}});return{c(){da(b.$$.fragment)},m(d,e){W(b,d,e);c=!0},p(d,e){let f={};e&1&&(f.descriptionId=d[0]);e&4&&(f.step=d[2]);b.$set(f)},i(d){c||(z(b.$$.fragment,d),c=!0)},o(d){C(b.$$.fragment,d);c=!1},d(d){X(b,d)}}}function xb(a){let b,c;b=new oc({props:{step:a[2]}});return{c(){da(b.$$.fragment)},m(d,e){W(b,d,e);c=!0},p(d,e){let f={};
e&4&&(f.step=d[2]);b.$set(f)},i(d){c||(z(b.$$.fragment,d),c=!0)},o(d){C(b.$$.fragment,d);c=!1},d(d){X(b,d)}}}function pc(a){let b,c=void 0!==a[2].options.title||a[2].options.cancelIcon&&a[2].options.cancelIcon.enabled,d,e=void 0!==a[2].options.text,f,g=Array.isArray(a[2].options.buttons)&&a[2].options.buttons.length,l,m=c&&vb(a),k=e&&wb(a),p=g&&xb(a);return{c(){b=document.createElement("div");m&&m.c();d=document.createTextNode(" ");k&&k.c();f=document.createTextNode(" ");p&&p.c();B(b,"class","shepherd-content")},
m(q,n){q.insertBefore(b,n||null);m&&m.m(b,null);b.appendChild(d);k&&k.m(b,null);b.appendChild(f);p&&p.m(b,null);l=!0},p(q,n){[n]=n;n&4&&(c=void 0!==q[2].options.title||q[2].options.cancelIcon&&q[2].options.cancelIcon.enabled);c?m?(m.p(q,n),n&4&&z(m,1)):(m=vb(q),m.c(),z(m,1),m.m(b,d)):m&&(aa(),C(m,1,1,()=>{m=null}),ca());n&4&&(e=void 0!==q[2].options.text);e?k?(k.p(q,n),n&4&&z(k,1)):(k=wb(q),k.c(),z(k,1),k.m(b,f)):k&&(aa(),C(k,1,1,()=>{k=null}),ca());n&4&&(g=Array.isArray(q[2].options.buttons)&&q[2].options.buttons.length);
g?p?(p.p(q,n),n&4&&z(p,1)):(p=xb(q),p.c(),z(p,1),p.m(b,null)):p&&(aa(),C(p,1,1,()=>{p=null}),ca())},i(q){l||(z(m),z(k),z(p),l=!0)},o(q){C(m);C(k);C(p);l=!1},d(q){q&&H(b);m&&m.d();k&&k.d();p&&p.d()}}}function qc(a,b,c){let {descriptionId:d,labelId:e,step:f}=b;a.$$set=g=>{"descriptionId"in g&&c(0,d=g.descriptionId);"labelId"in g&&c(1,e=g.labelId);"step"in g&&c(2,f=g.step)};return[d,e,f]}function yb(a){let b;return{c(){b=document.createElement("div");B(b,"class","shepherd-arrow");B(b,"data-popper-arrow",
"")},m(c,d){c.insertBefore(b,d||null)},d(c){c&&H(b)}}}function rc(a){let b,c,d,e,f,g,l,m,k=a[4].options.arrow&&a[4].options.attachTo&&a[4].options.attachTo.element&&a[4].options.attachTo.on&&yb();d=new sc({props:{descriptionId:a[2],labelId:a[3],step:a[4]}});let p=[{"aria-describedby":e=void 0!==a[4].options.text?a[2]:null},{"aria-labelledby":f=a[4].options.title?a[3]:null},a[1],{role:"dialog"},{tabindex:"0"}],q={};for(let n=0;n<p.length;n+=1)q=Wb(q,p[n]);return{c(){b=document.createElement("div");
k&&k.c();c=document.createTextNode(" ");da(d.$$.fragment);nb(b,q);la(b,"shepherd-has-cancel-icon",a[5]);la(b,"shepherd-has-title",a[6]);la(b,"shepherd-element",!0)},m(n,r){n.insertBefore(b,r||null);k&&k.m(b,null);b.appendChild(c);W(d,b,null);a[13](b);g=!0;l||(m=ya(b,"keydown",a[7]),l=!0)},p(n,r){var [x]=r;n[4].options.arrow&&n[4].options.attachTo&&n[4].options.attachTo.element&&n[4].options.attachTo.on?k||(k=yb(),k.c(),k.m(b,c)):k&&(k.d(1),k=null);r={};x&4&&(r.descriptionId=n[2]);x&8&&(r.labelId=
n[3]);x&16&&(r.step=n[4]);d.$set(r);r=b;x=[(!g||x&20&&e!==(e=void 0!==n[4].options.text?n[2]:null))&&{"aria-describedby":e},(!g||x&24&&f!==(f=n[4].options.title?n[3]:null))&&{"aria-labelledby":f},x&2&&n[1],{role:"dialog"},{tabindex:"0"}];let h={},t={},v={$$scope:1},A=p.length;for(;A--;){let u=p[A],w=x[A];if(w){for(let y in u)y in w||(t[y]=1);for(let y in w)v[y]||(h[y]=w[y],v[y]=1);p[A]=w}else for(let y in u)v[y]=1}for(let u in t)u in h||(h[u]=void 0);nb(r,q=h);la(b,"shepherd-has-cancel-icon",n[5]);
la(b,"shepherd-has-title",n[6]);la(b,"shepherd-element",!0)},i(n){g||(z(d.$$.fragment,n),g=!0)},o(n){C(d.$$.fragment,n);g=!1},d(n){n&&H(b);k&&k.d();X(d);a[13](null);l=!1;m()}}}function zb(a){return a.split(" ").filter(b=>!!b.length)}function tc(a,b,c){let {classPrefix:d,element:e,descriptionId:f,firstFocusableElement:g,focusableElements:l,labelId:m,lastFocusableElement:k,step:p,dataStepId:q}=b,n,r,x;za().$$.on_mount.push(()=>{c(1,q={[`data-${d}shepherd-step-id`]:p.id});c(9,l=e.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'));
c(8,g=l[0]);c(10,k=l[l.length-1])});za().$$.after_update.push(()=>{if(x!==p.options.classes){var h=x;qa(h)&&(h=zb(h),h.length&&e.classList.remove(...h));h=x=p.options.classes;qa(h)&&(h=zb(h),h.length&&e.classList.add(...h))}});a.$$set=h=>{"classPrefix"in h&&c(11,d=h.classPrefix);"element"in h&&c(0,e=h.element);"descriptionId"in h&&c(2,f=h.descriptionId);"firstFocusableElement"in h&&c(8,g=h.firstFocusableElement);"focusableElements"in h&&c(9,l=h.focusableElements);"labelId"in h&&c(3,m=h.labelId);"lastFocusableElement"in
h&&c(10,k=h.lastFocusableElement);"step"in h&&c(4,p=h.step);"dataStepId"in h&&c(1,q=h.dataStepId)};a.$$.update=()=>{a.$$.dirty&16&&(c(5,n=p.options&&p.options.cancelIcon&&p.options.cancelIcon.enabled),c(6,r=p.options&&p.options.title))};return[e,q,f,m,p,n,r,h=>{const {tour:t}=p;switch(h.keyCode){case 9:if(0===l.length){h.preventDefault();break}if(h.shiftKey){if(document.activeElement===g||document.activeElement.classList.contains("shepherd-element"))h.preventDefault(),k.focus()}else document.activeElement===
k&&(h.preventDefault(),g.focus());break;case 27:t.options.exitOnEsc&&p.cancel();break;case 37:t.options.keyboardNavigation&&t.back();break;case 39:t.options.keyboardNavigation&&t.next()}},g,l,k,d,()=>e,function(h){ma[h?"unshift":"push"](()=>{e=h;c(0,e)})}]}function uc(a){a&&({steps:a}=a,a.forEach(b=>{b.options&&!1===b.options.canClickTarget&&b.options.attachTo&&b.target instanceof HTMLElement&&b.target.classList.remove("shepherd-target-click-disabled")}))}function vc(a){let b,c,d,e,f;return{c(){b=
mb("svg");c=mb("path");B(c,"d",a[2]);B(b,"class",d=`${a[1]?"shepherd-modal-is-visible":""} shepherd-modal-overlay-container`)},m(g,l){g.insertBefore(b,l||null);b.appendChild(c);a[11](b);e||(f=ya(b,"touchmove",a[3]),e=!0)},p(g,l){[l]=l;l&4&&B(c,"d",g[2]);l&2&&d!==(d=`${g[1]?"shepherd-modal-is-visible":""} shepherd-modal-overlay-container`)&&B(b,"class",d)},i:G,o:G,d(g){g&&H(b);a[11](null);e=!1;f()}}}function Ab(a){if(!a)return null;let b=a instanceof HTMLElement&&window.getComputedStyle(a).overflowY;
return"hidden"!==b&&"visible"!==b&&a.scrollHeight>=a.clientHeight?a:Ab(a.parentElement)}function wc(a,b,c){function d(){c(4,p={width:0,height:0,x:0,y:0,r:0})}function e(){c(1,q=!1);l()}function f(h,t,v,A){void 0===h&&(h=0);void 0===t&&(t=0);if(A){var u=A.getBoundingClientRect();let y=u.y||u.top;u=u.bottom||y+u.height;if(v){var w=v.getBoundingClientRect();v=w.y||w.top;w=w.bottom||v+w.height;y=Math.max(y,v);u=Math.min(u,w)}let {y:Y,height:E}={y,height:Math.max(u-y,0)},{x:I,width:D,left:na}=A.getBoundingClientRect();
c(4,p={width:D+2*h,height:E+2*h,x:(I||na)-h,y:Y-h,r:t})}else d()}function g(){c(1,q=!0)}function l(){n&&(cancelAnimationFrame(n),n=void 0);window.removeEventListener("touchmove",x,{passive:!1})}function m(h){let {modalOverlayOpeningPadding:t,modalOverlayOpeningRadius:v}=h.options,A=Ab(h.target),u=()=>{n=void 0;f(t,v,A,h.target);n=requestAnimationFrame(u)};u();window.addEventListener("touchmove",x,{passive:!1})}let {element:k,openingProperties:p}=b;Ma();let q=!1,n=void 0,r;d();let x=h=>{h.preventDefault()};
a.$$set=h=>{"element"in h&&c(0,k=h.element);"openingProperties"in h&&c(4,p=h.openingProperties)};a.$$.update=()=>{if(a.$$.dirty&16){let {width:h,height:t,x:v=0,y:A=0,r:u=0}=p,{innerWidth:w,innerHeight:y}=window;c(2,r=`M${w},${y}\
H0\
V0\
H${w}\
V${y}\
Z\
M${v+u},${A}\
a${u},${u},0,0,0-${u},${u}\
V${t+A-u}\
a${u},${u},0,0,0,${u},${u}\
H${h+v-u}\
a${u},${u},0,0,0,${u}-${u}\
V${A+u}\
a${u},${u},0,0,0-${u}-${u}\
Z`)}};return[k,q,r,h=>{h.stopPropagation()},p,()=>k,d,e,f,function(h){l();h.tour.options.useModalOverlay?(m(h),g()):e()},g,function(h){ma[h?"unshift":"push"](()=>{k=h;c(0,k)})}]}var Fb=function(a){var b;if(b=!!a&&"object"===typeof a)b=Object.prototype.toString.call(a),b=!("[object RegExp]"===b||"[object Date]"===b||a.$$typeof===xc);return b},xc="function"===typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;ea.all=function(a,b){if(!Array.isArray(a))throw Error("first argument should be an array");
return a.reduce(function(c,d){return ea(c,d,b)},{})};var yc=ea;class Qa{on(a,b,c,d){void 0===d&&(d=!1);void 0===this.bindings&&(this.bindings={});void 0===this.bindings[a]&&(this.bindings[a]=[]);this.bindings[a].push({handler:b,ctx:c,once:d});return this}once(a,b,c){return this.on(a,b,c,!0)}off(a,b){if(void 0===this.bindings||void 0===this.bindings[a])return this;void 0===b?delete this.bindings[a]:this.bindings[a].forEach((c,d)=>{c.handler===b&&this.bindings[a].splice(d,1)});return this}trigger(a){for(var b=
arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];void 0!==this.bindings&&this.bindings[a]&&this.bindings[a].forEach((e,f)=>{let {ctx:g,handler:l,once:m}=e;l.apply(g||this,c);m&&this.bindings[a].splice(f,1)});return this}}var ua=["top","bottom","right","left"],eb=ua.reduce(function(a,b){return a.concat([b+"-start",b+"-end"])},[]),db=[].concat(ua,["auto"]).reduce(function(a,b){return a.concat([b,b+"-start",b+"-end"])},[]),Sb="beforeRead read afterRead beforeMain main afterMain beforeWrite write afterWrite".split(" "),
L=Math.max,V=Math.min,ia=Math.round,Ib={top:"auto",right:"auto",bottom:"auto",left:"auto"},Da={passive:!0},Jb={left:"right",right:"left",bottom:"top",top:"bottom"},Kb={start:"end",end:"start"},Bb={placement:"bottom",modifiers:[],strategy:"absolute"},zc=function(a){void 0===a&&(a={});var b=a.defaultModifiers,c=void 0===b?[]:b;a=a.defaultOptions;var d=void 0===a?Bb:a;return function(e,f,g){function l(){k.orderedModifiers.forEach(function(r){var x=r.name,h=r.options;h=void 0===h?{}:h;r=r.effect;"function"===
typeof r&&(x=r({state:k,name:x,instance:n,options:h}),p.push(x||function(){}))})}function m(){p.forEach(function(r){return r()});p=[]}void 0===g&&(g=d);var k={placement:"bottom",orderedModifiers:[],options:Object.assign({},Bb,d),modifiersData:{},elements:{reference:e,popper:f},attributes:{},styles:{}},p=[],q=!1,n={state:k,setOptions:function(r){r="function"===typeof r?r(k.options):r;m();k.options=Object.assign({},d,k.options,r);k.scrollParents={reference:fa(e)?sa(e):e.contextElement?sa(e.contextElement):
[],popper:sa(f)};r=Rb(Ub([].concat(c,k.options.modifiers)));k.orderedModifiers=r.filter(function(x){return x.enabled});l();return n.update()},forceUpdate:function(){if(!q){var r=k.elements,x=r.reference;r=r.popper;if(hb(x,r))for(k.rects={reference:Pb(x,ra(r),"fixed"===k.options.strategy),popper:Fa(r)},k.reset=!1,k.placement=k.options.placement,k.orderedModifiers.forEach(function(v){return k.modifiersData[v.name]=Object.assign({},v.data)}),x=0;x<k.orderedModifiers.length;x++)if(!0===k.reset)k.reset=
!1,x=-1;else{var h=k.orderedModifiers[x];r=h.fn;var t=h.options;t=void 0===t?{}:t;h=h.name;"function"===typeof r&&(k=r({state:k,options:t,name:h,instance:n})||k)}}},update:Tb(function(){return new Promise(function(r){n.forceUpdate();r(k)})}),destroy:function(){m();q=!0}};if(!hb(e,f))return n;n.setOptions(g).then(function(r){if(!q&&g.onFirstUpdate)g.onFirstUpdate(r)});return n}}({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(a){var b=a.state,c=a.instance;
a=a.options;var d=a.scroll,e=void 0===d?!0:d;a=a.resize;var f=void 0===a?!0:a,g=K(b.elements.popper),l=[].concat(b.scrollParents.reference,b.scrollParents.popper);e&&l.forEach(function(m){m.addEventListener("scroll",c.update,Da)});f&&g.addEventListener("resize",c.update,Da);return function(){e&&l.forEach(function(m){m.removeEventListener("scroll",c.update,Da)});f&&g.removeEventListener("resize",c.update,Da)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(a){var b=a.state;b.modifiersData[a.name]=
cb({reference:b.rects.reference,element:b.rects.popper,strategy:"absolute",placement:b.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(a){var b=a.state,c=a.options;a=c.gpuAcceleration;a=void 0===a?!0:a;var d=c.adaptive;d=void 0===d?!0:d;c=c.roundOffsets;c=void 0===c?!0:c;a={placement:N(b.placement),variation:ja(b.placement),popper:b.elements.popper,popperRect:b.rects.popper,gpuAcceleration:a,isFixed:"fixed"===b.options.strategy};null!=b.modifiersData.popperOffsets&&
(b.styles.popper=Object.assign({},b.styles.popper,Za(Object.assign({},a,{offsets:b.modifiersData.popperOffsets,position:b.options.strategy,adaptive:d,roundOffsets:c}))));null!=b.modifiersData.arrow&&(b.styles.arrow=Object.assign({},b.styles.arrow,Za(Object.assign({},a,{offsets:b.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c}))));b.attributes.popper=Object.assign({},b.attributes.popper,{"data-popper-placement":b.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",
fn:function(a){var b=a.state;Object.keys(b.elements).forEach(function(c){var d=b.styles[c]||{},e=b.attributes[c]||{},f=b.elements[c];F(f)&&M(f)&&(Object.assign(f.style,d),Object.keys(e).forEach(function(g){var l=e[g];!1===l?f.removeAttribute(g):f.setAttribute(g,!0===l?"":l)}))})},effect:function(a){var b=a.state,c={popper:{position:b.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(b.elements.popper.style,c.popper);b.styles=c;b.elements.arrow&&
Object.assign(b.elements.arrow.style,c.arrow);return function(){Object.keys(b.elements).forEach(function(d){var e=b.elements[d],f=b.attributes[d]||{};d=Object.keys(b.styles.hasOwnProperty(d)?b.styles[d]:c[d]).reduce(function(g,l){g[l]="";return g},{});F(e)&&M(e)&&(Object.assign(e.style,d),Object.keys(f).forEach(function(g){e.removeAttribute(g)}))})}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(a){var b=a.state,c=a.name;a=a.options.offset;
var d=void 0===a?[0,0]:a;a=db.reduce(function(g,l){var m=b.rects;var k=N(l);var p=0<=["left","top"].indexOf(k)?-1:1,q="function"===typeof d?d(Object.assign({},m,{placement:l})):d;m=q[0];q=q[1];m=m||0;q=(q||0)*p;k=0<=["left","right"].indexOf(k)?{x:q,y:m}:{x:m,y:q};g[l]=k;return g},{});var e=a[b.placement],f=e.x;e=e.y;null!=b.modifiersData.popperOffsets&&(b.modifiersData.popperOffsets.x+=f,b.modifiersData.popperOffsets.y+=e);b.modifiersData[c]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(a){var b=
a.state,c=a.options;a=a.name;if(!b.modifiersData[a]._skip){var d=c.mainAxis;d=void 0===d?!0:d;var e=c.altAxis;e=void 0===e?!0:e;var f=c.fallbackPlacements,g=c.padding,l=c.boundary,m=c.rootBoundary,k=c.altBoundary,p=c.flipVariations,q=void 0===p?!0:p,n=c.allowedAutoPlacements;c=b.options.placement;p=N(c);f=f||(p!==c&&q?Ob(c):[xa(c)]);var r=[c].concat(f).reduce(function(E,I){return E.concat("auto"===N(I)?Nb(b,{placement:I,boundary:l,rootBoundary:m,padding:g,flipVariations:q,allowedAutoPlacements:n}):
I)},[]);c=b.rects.reference;f=b.rects.popper;var x=new Map;p=!0;for(var h=r[0],t=0;t<r.length;t++){var v=r[t],A=N(v),u="start"===ja(v),w=0<=["top","bottom"].indexOf(A),y=w?"width":"height",Y=ta(b,{placement:v,boundary:l,rootBoundary:m,altBoundary:k,padding:g});u=w?u?"right":"left":u?"bottom":"top";c[y]>f[y]&&(u=xa(u));y=xa(u);w=[];d&&w.push(0>=Y[A]);e&&w.push(0>=Y[u],0>=Y[y]);if(w.every(function(E){return E})){h=v;p=!1;break}x.set(v,w)}if(p)for(d=function(E){var I=r.find(function(D){if(D=x.get(D))return D.slice(0,
E).every(function(na){return na})});if(I)return h=I,"break"},e=q?3:1;0<e&&"break"!==d(e);e--);b.placement!==h&&(b.modifiersData[a]._skip=!0,b.placement=h,b.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(a){var b=a.state,c=a.options;a=a.name;var d=c.mainAxis,e=void 0===d?!0:d;d=c.altAxis;var f=void 0===d?!1:d;d=c.tether;var g=void 0===d?!0:d;d=c.tetherOffset;var l=void 0===d?0:d,m=ta(b,{boundary:c.boundary,rootBoundary:c.rootBoundary,
padding:c.padding,altBoundary:c.altBoundary}),k=N(b.placement),p=ja(b.placement),q=!p,n=Ga(k);c="x"===n?"y":"x";d=b.modifiersData.popperOffsets;var r=b.rects.reference,x=b.rects.popper;l="function"===typeof l?l(Object.assign({},b.rects,{placement:b.placement})):l;var h="number"===typeof l?{mainAxis:l,altAxis:l}:Object.assign({mainAxis:0,altAxis:0},l),t=b.modifiersData.offset?b.modifiersData.offset[b.placement]:null;l={x:0,y:0};if(d){if(e){var v,A="y"===n?"top":"left",u="y"===n?"bottom":"right",w=
"y"===n?"height":"width";e=d[n];var y=e+m[A],Y=e-m[u],E=g?-x[w]/2:0,I="start"===p?r[w]:x[w];p="start"===p?-x[w]:-r[w];var D=b.elements.arrow;D=g&&D?Fa(D):{width:0,height:0};var na=b.modifiersData["arrow#persistent"]?b.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0};A=na[A];u=na[u];D=L(0,V(r[w],D[w]));I=q?r[w]/2-E-D-A-h.mainAxis:I-D-A-h.mainAxis;q=q?-r[w]/2+E+D+u+h.mainAxis:p+D+u+h.mainAxis;w=(w=b.elements.arrow&&ra(b.elements.arrow))?"y"===n?w.clientTop||0:w.clientLeft||
0:0;E=null!=(v=null==t?void 0:t[n])?v:0;v=e+q-E;y=g?V(y,e+I-E-w):y;v=g?L(Y,v):Y;v=L(y,V(e,v));d[n]=v;l[n]=v-e}if(f){var J;f=d[c];e="y"===c?"height":"width";v=f+m["x"===n?"top":"left"];m=f-m["x"===n?"bottom":"right"];k=-1!==["top","left"].indexOf(k);n=null!=(J=null==t?void 0:t[c])?J:0;J=k?v:f-r[e]-x[e]-n+h.altAxis;r=k?f+r[e]+x[e]-n-h.altAxis:m;g&&k?(J=L(J,V(f,r)),J=J>r?r:J):J=L(g?J:v,V(f,g?r:m));d[c]=J;l[c]=J-f}b.modifiersData[a]=l}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",
fn:function(a){var b,c=a.state,d=a.name,e=a.options,f=c.elements.arrow,g=c.modifiersData.popperOffsets,l=N(c.placement);a=Ga(l);l=0<=["left","right"].indexOf(l)?"height":"width";if(f&&g){e=e.padding;e="function"===typeof e?e(Object.assign({},c.rects,{placement:c.placement})):e;e=Xa("number"!==typeof e?e:Ya(e,ua));var m=Fa(f),k="y"===a?"top":"left",p="y"===a?"bottom":"right",q=c.rects.reference[l]+c.rects.reference[a]-g[a]-c.rects.popper[l];g=g[a]-c.rects.reference[a];f=(f=ra(f))?"y"===a?f.clientHeight||
0:f.clientWidth||0:0;g=f/2-m[l]/2+(q/2-g/2);l=L(e[k],V(g,f-m[l]-e[p]));c.modifiersData[d]=(b={},b[a]=l,b.centerOffset=l-g,b)}},effect:function(a){var b=a.state;a=a.options.element;a=void 0===a?"[data-popper-arrow]":a;if(null!=a){if("string"===typeof a&&(a=b.elements.popper.querySelector(a),!a))return;Va(b.elements.popper,a)&&(b.elements.arrow=a)}},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(a){var b=
a.state;a=a.name;var c=b.rects.reference,d=b.rects.popper,e=b.modifiersData.preventOverflow,f=ta(b,{elementContext:"reference"}),g=ta(b,{altBoundary:!0});c=fb(f,c);d=fb(g,d,e);e=gb(c);g=gb(d);b.modifiersData[a]={referenceClippingOffsets:c,popperEscapeOffsets:d,isReferenceHidden:e,hasPopperEscaped:g};b.attributes.popper=Object.assign({},b.attributes.popper,{"data-popper-reference-hidden":e,"data-popper-escaped":g})}}]});let R,va=[],ma=[],Aa=[],pb=[],Xb=Promise.resolve(),Pa=!1,Oa=new Set,Ba=0,Ca=new Set,
ba;class T{$destroy(){X(this,1);this.$destroy=G}$on(a,b){let c=this.$$.callbacks[a]||(this.$$.callbacks[a]=[]);c.push(b);return()=>{let d=c.indexOf(b);-1!==d&&c.splice(d,1)}}$set(a){this.$$set&&0!==Object.keys(a).length&&(this.$$.skip_bound=!0,this.$$set(a),this.$$.skip_bound=!1)}}class $b extends T{constructor(a){super();S(this,a,Zb,Yb,Q,{config:6,step:7})}}class oc extends T{constructor(a){super();S(this,a,bc,ac,Q,{step:0})}}class hc extends T{constructor(a){super();S(this,a,dc,cc,Q,{cancelIcon:0,
step:2})}}class gc extends T{constructor(a){super();S(this,a,fc,ec,Q,{labelId:1,element:0,title:2})}}class mc extends T{constructor(a){super();S(this,a,jc,ic,Q,{labelId:0,step:1})}}class nc extends T{constructor(a){super();S(this,a,lc,kc,Q,{descriptionId:1,element:0,step:2})}}class sc extends T{constructor(a){super();S(this,a,qc,pc,Q,{descriptionId:0,labelId:1,step:2})}}class Ac extends T{constructor(a){super();S(this,a,tc,rc,Q,{classPrefix:11,element:0,descriptionId:2,firstFocusableElement:8,focusableElements:9,
labelId:3,lastFocusableElement:10,step:4,dataStepId:1,getElement:12})}get getElement(){return this.$$.ctx[12]}}var Cb=function(a,b){return b={exports:{}},a(b,b.exports),b.exports}(function(a,b){(function(){a.exports={polyfill:function(){function c(h,t){this.scrollLeft=h;this.scrollTop=t}function d(h){if(null===h||"object"!==typeof h||void 0===h.behavior||"auto"===h.behavior||"instant"===h.behavior)return!0;if("object"===typeof h&&"smooth"===h.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+
h.behavior+" is not a valid value for enumeration ScrollBehavior.");}function e(h,t){if("Y"===t)return h.clientHeight+x<h.scrollHeight;if("X"===t)return h.clientWidth+x<h.scrollWidth}function f(h,t){h=k.getComputedStyle(h,null)["overflow"+t];return"auto"===h||"scroll"===h}function g(h){var t=e(h,"Y")&&f(h,"Y");h=e(h,"X")&&f(h,"X");return t||h}function l(h){var t=(r()-h.startTime)/468;var v=.5*(1-Math.cos(Math.PI*(1<t?1:t)));t=h.startX+(h.x-h.startX)*v;v=h.startY+(h.y-h.startY)*v;h.method.call(h.scrollable,
t,v);t===h.x&&v===h.y||k.requestAnimationFrame(l.bind(k,h))}function m(h,t,v){var A=r();if(h===p.body){var u=k;var w=k.scrollX||k.pageXOffset;h=k.scrollY||k.pageYOffset;var y=n.scroll}else u=h,w=h.scrollLeft,h=h.scrollTop,y=c;l({scrollable:u,method:y,startTime:A,startX:w,startY:h,x:t,y:v})}var k=window,p=document;if(!("scrollBehavior"in p.documentElement.style&&!0!==k.__forceSmoothScrollPolyfill__)){var q=k.HTMLElement||k.Element,n={scroll:k.scroll||k.scrollTo,scrollBy:k.scrollBy,elementScroll:q.prototype.scroll||
c,scrollIntoView:q.prototype.scrollIntoView},r=k.performance&&k.performance.now?k.performance.now.bind(k.performance):Date.now,x=/MSIE |Trident\/|Edge\//.test(k.navigator.userAgent)?1:0;k.scroll=k.scrollTo=function(h,t){void 0!==h&&(!0===d(h)?n.scroll.call(k,void 0!==h.left?h.left:"object"!==typeof h?h:k.scrollX||k.pageXOffset,void 0!==h.top?h.top:void 0!==t?t:k.scrollY||k.pageYOffset):m.call(k,p.body,void 0!==h.left?~~h.left:k.scrollX||k.pageXOffset,void 0!==h.top?~~h.top:k.scrollY||k.pageYOffset))};
k.scrollBy=function(h,t){void 0!==h&&(d(h)?n.scrollBy.call(k,void 0!==h.left?h.left:"object"!==typeof h?h:0,void 0!==h.top?h.top:void 0!==t?t:0):m.call(k,p.body,~~h.left+(k.scrollX||k.pageXOffset),~~h.top+(k.scrollY||k.pageYOffset)))};q.prototype.scroll=q.prototype.scrollTo=function(h,t){if(void 0!==h)if(!0===d(h)){if("number"===typeof h&&void 0===t)throw new SyntaxError("Value could not be converted");n.elementScroll.call(this,void 0!==h.left?~~h.left:"object"!==typeof h?~~h:this.scrollLeft,void 0!==
h.top?~~h.top:void 0!==t?~~t:this.scrollTop)}else t=h.left,h=h.top,m.call(this,this,"undefined"===typeof t?this.scrollLeft:~~t,"undefined"===typeof h?this.scrollTop:~~h)};q.prototype.scrollBy=function(h,t){void 0!==h&&(!0===d(h)?n.elementScroll.call(this,void 0!==h.left?~~h.left+this.scrollLeft:~~h+this.scrollLeft,void 0!==h.top?~~h.top+this.scrollTop:~~t+this.scrollTop):this.scroll({left:~~h.left+this.scrollLeft,top:~~h.top+this.scrollTop,behavior:h.behavior}))};q.prototype.scrollIntoView=function(h){if(!0===
d(h))n.scrollIntoView.call(this,void 0===h?!0:h);else{for(h=this;h!==p.body&&!1===g(h);)h=h.parentNode||h.host;var t=h.getBoundingClientRect(),v=this.getBoundingClientRect();h!==p.body?(m.call(this,h,h.scrollLeft+v.left-t.left,h.scrollTop+v.top-t.top),"fixed"!==k.getComputedStyle(h).position&&k.scrollBy({left:t.left,top:t.top,behavior:"smooth"})):k.scrollBy({left:v.left,top:v.top,behavior:"smooth"})}}}}}})()});Cb.polyfill;Cb.polyfill();class Ra extends Qa{constructor(a,b){void 0===b&&(b={});super(a,
b);this.tour=a;this.classPrefix=this.tour.options?jb(this.tour.options.classPrefix):"";this.styles=a.styles;this._resolvedAttachTo=null;Ua(this);this._setOptions(b);return this}cancel(){this.tour.cancel();this.trigger("cancel")}complete(){this.tour.complete();this.trigger("complete")}destroy(){this.tooltip&&(this.tooltip.destroy(),this.tooltip=null);this.el instanceof HTMLElement&&this.el.parentNode&&(this.el.parentNode.removeChild(this.el),this.el=null);this._updateStepTargetOnHide();this.trigger("destroy")}getTour(){return this.tour}hide(){this.tour.modal.hide();
this.trigger("before-hide");this.el&&(this.el.hidden=!0);this._updateStepTargetOnHide();this.trigger("hide")}_resolveAttachToOptions(){let a=this.options.attachTo||{},b=Object.assign({},a);Z(b.element)&&(b.element=b.element.call(this));if(qa(b.element)){try{b.element=document.querySelector(b.element)}catch(c){}b.element||console.error(`The element for this Shepherd step was not found ${a.element}`)}return this._resolvedAttachTo=b}_getResolvedAttachToOptions(){return null===this._resolvedAttachTo?
this._resolveAttachToOptions():this._resolvedAttachTo}isOpen(){return!(!this.el||this.el.hidden)}show(){if(Z(this.options.beforeShowPromise)){let a=this.options.beforeShowPromise();if(void 0!==a)return a.then(()=>this._show())}this._show()}updateStepOptions(a){Object.assign(this.options,a);this.shepherdElementComponent&&this.shepherdElementComponent.$set({step:this})}getElement(){return this.el}getTarget(){return this.target}_createTooltipContent(){this.shepherdElementComponent=new Ac({target:this.tour.options.stepsContainer||
document.body,props:{classPrefix:this.classPrefix,descriptionId:`${this.id}-description`,labelId:`${this.id}-label`,step:this,styles:this.styles}});return this.shepherdElementComponent.getElement()}_scrollTo(a){let {element:b}=this._getResolvedAttachToOptions();Z(this.options.scrollToHandler)?this.options.scrollToHandler(b):b instanceof Element&&"function"===typeof b.scrollIntoView&&b.scrollIntoView(a)}_getClassOptions(a){var b=this.tour&&this.tour.options&&this.tour.options.defaultStepOptions;b=
b&&b.classes?b.classes:"";a=[...(a.classes?a.classes:"").split(" "),...b.split(" ")];a=new Set(a);return Array.from(a).join(" ").trim()}_setOptions(a){void 0===a&&(a={});let b=this.tour&&this.tour.options&&this.tour.options.defaultStepOptions;b=yc({},b||{});this.options=Object.assign({arrow:!0},b,a);let {when:c}=this.options;this.options.classes=this._getClassOptions(a);this.destroy();this.id=this.options.id||`step-${Ma()}`;c&&Object.keys(c).forEach(d=>{this.on(d,c[d],this)})}_setupElements(){void 0!==
this.el&&this.destroy();this.el=this._createTooltipContent();this.options.advanceOn&&Hb(this);this.tooltip&&this.tooltip.destroy();let a=this._getResolvedAttachToOptions(),b=a.element;var c={modifiers:[{name:"preventOverflow",options:{altAxis:!0,tether:!1}},ib(this)],strategy:"absolute"};if(void 0!==a&&null!==a&&a.element&&a.on)c.placement=a.on;else{c=Vb();var d={placement:"top",strategy:"fixed",modifiers:[ib(this)]};c=d=La({},d,{modifiers:Array.from(new Set([...d.modifiers,...c]))})}(d=this.tour&&
this.tour.options&&this.tour.options.defaultStepOptions)&&(c=kb(d,c));c=kb(this.options,c);void 0!==a&&null!==a&&a.element&&a.on||(b=document.body,this.shepherdElementComponent.getElement().classList.add("shepherd-centered"));this.tooltip=zc(b,this.el,c);this.target=a.element}_show(){this.trigger("before-show");this._resolveAttachToOptions();this._setupElements();this.tour.modal||this.tour._setupModal();this.tour.modal.setupForStep(this);this._styleTargetElementForStep(this);this.el.hidden=!1;this.options.scrollTo&&
setTimeout(()=>{this._scrollTo(this.options.scrollTo)});this.el.hidden=!1;let a=this.shepherdElementComponent.getElement(),b=this.target||document.body;b.classList.add(`${this.classPrefix}shepherd-enabled`);b.classList.add(`${this.classPrefix}shepherd-target`);a.classList.add("shepherd-enabled");this.trigger("show")}_styleTargetElementForStep(a){let b=a.target;b&&(a.options.highlightClass&&b.classList.add(a.options.highlightClass),b.classList.remove("shepherd-target-click-disabled"),!1===a.options.canClickTarget&&
b.classList.add("shepherd-target-click-disabled"))}_updateStepTargetOnHide(){let a=this.target||document.body;this.options.highlightClass&&a.classList.remove(this.options.highlightClass);a.classList.remove("shepherd-target-click-disabled",`${this.classPrefix}shepherd-enabled`,`${this.classPrefix}shepherd-target`)}}class Bc extends T{constructor(a){super();S(this,a,wc,vc,Q,{element:0,openingProperties:4,getElement:5,closeModalOpening:6,hide:7,positionModal:8,setupForStep:9,show:10})}get getElement(){return this.$$.ctx[5]}get closeModalOpening(){return this.$$.ctx[6]}get hide(){return this.$$.ctx[7]}get positionModal(){return this.$$.ctx[8]}get setupForStep(){return this.$$.ctx[9]}get show(){return this.$$.ctx[10]}}
let oa=new Qa;class Cc extends Qa{constructor(a){void 0===a&&(a={});super(a);Ua(this);this.options=Object.assign({},{exitOnEsc:!0,keyboardNavigation:!0},a);this.classPrefix=jb(this.options.classPrefix);this.steps=[];this.addSteps(this.options.steps);"active cancel complete inactive show start".split(" ").map(b=>{(c=>{this.on(c,d=>{d=d||{};d.tour=this;oa.trigger(c,d)})})(b)});this._setTourID();return this}addStep(a,b){a instanceof Ra?a.tour=this:a=new Ra(this,a);void 0!==b?this.steps.splice(b,0,a):
this.steps.push(a);return a}addSteps(a){Array.isArray(a)&&a.forEach(b=>{this.addStep(b)});return this}back(){let a=this.steps.indexOf(this.currentStep);this.show(a-1,!1)}cancel(){this.options.confirmCancel?window.confirm(this.options.confirmCancelMessage||"Are you sure you want to stop the tour?")&&this._done("cancel"):this._done("cancel")}complete(){this._done("complete")}getById(a){return this.steps.find(b=>b.id===a)}getCurrentStep(){return this.currentStep}hide(){let a=this.getCurrentStep();if(a)return a.hide()}isActive(){return oa.activeTour===
this}next(){let a=this.steps.indexOf(this.currentStep);a===this.steps.length-1?this.complete():this.show(a+1,!0)}removeStep(a){let b=this.getCurrentStep();this.steps.some((c,d)=>{if(c.id===a)return c.isOpen()&&c.hide(),c.destroy(),this.steps.splice(d,1),!0});b&&b.id===a&&(this.currentStep=void 0,this.steps.length?this.show(0):this.cancel())}show(a,b){void 0===a&&(a=0);void 0===b&&(b=!0);if(a=qa(a)?this.getById(a):this.steps[a])this._updateStateBeforeShow(),Z(a.options.showOn)&&!a.options.showOn()?
this._skipStep(a,b):(this.trigger("show",{step:a,previous:this.currentStep}),this.currentStep=a,a.show())}start(){this.trigger("start");this.focusedElBeforeOpen=document.activeElement;this.currentStep=null;this._setupModal();this._setupActiveTour();this.next()}_done(a){let b=this.steps.indexOf(this.currentStep);Array.isArray(this.steps)&&this.steps.forEach(c=>c.destroy());uc(this);this.trigger(a,{index:b});oa.activeTour=null;this.trigger("inactive",{tour:this});this.modal&&this.modal.hide();"cancel"!==
a&&"complete"!==a||!this.modal||(a=document.querySelector(".shepherd-modal-overlay-container"))&&a.remove();this.focusedElBeforeOpen instanceof HTMLElement&&this.focusedElBeforeOpen.focus()}_setupActiveTour(){this.trigger("active",{tour:this});oa.activeTour=this}_setupModal(){this.modal=new Bc({target:this.options.modalContainer||document.body,props:{classPrefix:this.classPrefix,styles:this.styles}})}_skipStep(a,b){a=this.steps.indexOf(a);a===this.steps.length-1?this.complete():this.show(b?a+1:a-
1,b)}_updateStateBeforeShow(){this.currentStep&&this.currentStep.hide();this.isActive()||this._setupActiveTour()}_setTourID(){this.id=`${this.options.tourName||"tour"}--${Ma()}`}}Object.assign(oa,{Tour:Cc,Step:Ra});return oa})

;
/**
 * @file
 * Attaches behaviors for the Tour module's toolbar tab.
 */

(($, Backbone, Drupal, settings, document, Shepherd) => {
  const queryString = decodeURI(window.location.search);

  /**
   * Attaches the tour's toolbar tab behavior.
   *
   * It uses the query string for:
   * - tour: When ?tour=1 is present, the tour will start automatically after
   *   the page has loaded.
   * - tips: Pass ?tips=class in the url to filter the available tips to the
   *   subset which match the given class.
   *
   * @example
   * http://example.com/foo?tour=1&tips=bar
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attach tour functionality on `tour` events.
   */
  Drupal.behaviors.tour = {
    attach(context) {
      once('tour', 'body').forEach(() => {
        const model = new Drupal.tour.models.StateModel();
        // eslint-disable-next-line no-new
        new Drupal.tour.views.ToggleTourView({
          el: $(context).find('#toolbar-tab-tour'),
          model,
        });

        model
          // Allow other scripts to respond to tour events.
          .on('change:isActive', (tourModel, isActive) => {
            $(document).trigger(
              isActive ? 'drupalTourStarted' : 'drupalTourStopped',
            );
          });
        // Initialization: check whether a tour is available on the current
        // page.
        if (settings._tour_internal) {
          model.set('tour', settings._tour_internal);
        }
        // Start the tour immediately if toggled via query string.
        if (/tour=?/i.test(queryString)) {
          model.set('isActive', true);
        }
      });
    },
  };

  /**
   * @namespace
   */
  Drupal.tour = Drupal.tour || {
    /**
     * @namespace Drupal.tour.models
     */
    models: {},

    /**
     * @namespace Drupal.tour.views
     */
    views: {},
  };

  /**
   * Backbone Model for tours.
   *
   * @constructor
   *
   * @augments Backbone.Model
   */
  Drupal.tour.models.StateModel = Backbone.Model.extend(
    /** @lends Drupal.tour.models.StateModel# */ {
      /**
       * @type {object}
       */
      defaults: /** @lends Drupal.tour.models.StateModel# */ {
        /**
         * Indicates whether the Drupal root window has a tour.
         *
         * @type {Array}
         */
        tour: [],

        /**
         * Indicates whether the tour is currently running.
         *
         * @type {boolean}
         */
        isActive: false,

        /**
         * Indicates which tour is the active one (necessary to cleanly stop).
         *
         * @type {Array}
         */
        activeTour: [],
      },
    },
  );

  Drupal.tour.views.ToggleTourView = Backbone.View.extend(
    /** @lends Drupal.tour.views.ToggleTourView# */ {
      /**
       * @type {object}
       */
      events: { click: 'onClick' },

      /**
       * Handles edit mode toggle interactions.
       *
       * @constructs
       *
       * @augments Backbone.View
       */
      initialize() {
        this.listenTo(this.model, 'change:tour change:isActive', this.render);
        this.listenTo(this.model, 'change:isActive', this.toggleTour);
      },

      /**
       * {@inheritdoc}
       *
       * @return {Drupal.tour.views.ToggleTourView}
       *   The `ToggleTourView` view.
       */
      render() {
        // Render the visibility.
        this.$el.toggleClass('hidden', this._getTour().length === 0);
        // Render the state.
        const isActive = this.model.get('isActive');
        this.$el
          .find('button')
          .toggleClass('is-active', isActive)
          .attr('aria-pressed', isActive);
        return this;
      },

      /**
       * Model change handler; starts or stops the tour.
       */
      toggleTour() {
        if (this.model.get('isActive')) {
          this._removeIrrelevantTourItems(this._getTour());
          const tourItems = this.model.get('tour');
          const that = this;

          if (tourItems.length) {
            // If Joyride is positioned relative to the top or bottom of an
            // element, and its secondary position is right or left, then the
            // arrow is also positioned right or left. Shepherd defaults to
            // center positioning the arrow.
            //
            // In most cases, this arrow positioning difference has
            // little impact. However, tours built with Joyride may have tips
            // using a higher level selector than the element the tip is
            // expected to point to, and relied on Joyride's arrow positioning
            // to align the arrow with the expected reference element. Joyride's
            // arrow positioning behavior is replicated here to prevent those
            // use cases from causing UI regressions.
            //
            // This modifier is provided here instead of TourViewBuilder (where
            // most position modifications are) because it includes adding a
            // JavaScript callback function.
            settings.tourShepherdConfig.defaultStepOptions.popperOptions.modifiers.push(
              {
                name: 'moveArrowJoyridePosition',
                enabled: true,
                phase: 'write',
                fn({ state }) {
                  const { arrow } = state.elements;
                  const { placement } = state;
                  if (
                    arrow &&
                    /^top|bottom/.test(placement) &&
                    /-start|-end$/.test(placement)
                  ) {
                    const horizontalPosition = placement.split('-')[1];
                    const offset =
                      horizontalPosition === 'start'
                        ? 28
                        : state.elements.popper.clientWidth - 56;
                    arrow.style.transform = `translate3d(${offset}px, 0px, 0px)`;
                  }
                },
              },
            );
            const shepherdTour = new Shepherd.Tour(settings.tourShepherdConfig);
            shepherdTour.on('cancel', () => {
              that.model.set('isActive', false);
            });
            shepherdTour.on('complete', () => {
              that.model.set('isActive', false);
            });

            tourItems.forEach((tourStepConfig, index) => {
              // Create the configuration for a given tour step by using values
              // defined in TourViewBuilder.
              // @see \Drupal\tour\TourViewBuilder::viewMultiple()
              const tourItemOptions = {
                title: tourStepConfig.title
                  ? Drupal.checkPlain(tourStepConfig.title)
                  : null,
                text: () => Drupal.theme('tourItemContent', tourStepConfig),
                attachTo: tourStepConfig.attachTo,
                buttons: [Drupal.tour.nextButton(shepherdTour, tourStepConfig)],
                classes: tourStepConfig.classes,
                index,
              };

              tourItemOptions.when = {
                show() {
                  const nextButton =
                    shepherdTour.currentStep.el.querySelector('footer button');

                  // Drupal disables Shepherd's built in focus after item
                  // creation functionality due to focus being set on the tour
                  // item container after every scroll and resize event. In its
                  // place, the 'next' button is focused here.
                  nextButton.focus();

                  // When Stable 9 is part of the active theme, the
                  // Drupal.tour.convertToJoyrideMarkup() function is available.
                  // This function converts Shepherd markup to Joyride markup,
                  // facilitating the use of the Shepherd library that is
                  // backwards compatible with customizations intended for
                  // Joyride.
                  // The Drupal.tour.convertToJoyrideMarkup() function is
                  // internal, and will eventually be removed from Drupal core.
                  if (Drupal.tour.hasOwnProperty('convertToJoyrideMarkup')) {
                    Drupal.tour.convertToJoyrideMarkup(shepherdTour);
                  }
                },
              };

              shepherdTour.addStep(tourItemOptions);
            });
            shepherdTour.start();
            this.model.set({ isActive: true, activeTour: shepherdTour });
          }
        } else {
          this.model.get('activeTour').cancel();
          this.model.set({ isActive: false, activeTour: [] });
        }
      },

      /**
       * Toolbar tab click event handler; toggles isActive.
       *
       * @param {jQuery.Event} event
       *   The click event.
       */
      onClick(event) {
        this.model.set('isActive', !this.model.get('isActive'));
        event.preventDefault();
        event.stopPropagation();
      },

      /**
       * Gets the tour.
       *
       * @return {array}
       *   An array of Shepherd tour item objects.
       */
      _getTour() {
        return this.model.get('tour');
      },

      /**
       * Removes tour items for elements that don't have matching page elements.
       *
       * Or that are explicitly filtered out via the 'tips' query string.
       *
       * @example
       * <caption>This will filter out tips that do not have a matching
       * page element or don't have the "bar" class.</caption>
       * http://example.com/foo?tips=bar
       *
       * @param {Object[]} tourItems
       *   An array containing tour Step config objects.
       *   The object properties relevant to this function:
       *   - classes {string}: A string of classes to be added to the tour step
       *     when rendered.
       *   - selector {string}: The selector a tour step is associated with.
       */
      _removeIrrelevantTourItems(tourItems) {
        const tips = /tips=([^&]+)/.exec(queryString);
        const filteredTour = tourItems.filter((tourItem) => {
          // If the query parameter 'tips' is set, remove all tips that don't
          // have the matching class. The `tourItem` variable is a step config
          // object, and the 'classes' property is a ShepherdJS Step() config
          // option that provides a string.
          if (
            tips &&
            tourItem.hasOwnProperty('classes') &&
            tourItem.classes.indexOf(tips[1]) === -1
          ) {
            return false;
          }

          // If a selector is configured but there isn't a matching element,
          // return false.
          return !(
            tourItem.selector && !document.querySelector(tourItem.selector)
          );
        });

        // If there are tours filtered, we'll have to update model.
        if (tourItems.length !== filteredTour.length) {
          filteredTour.forEach((filteredTourItem, filteredTourItemId) => {
            filteredTour[filteredTourItemId].counter = Drupal.t(
              '!tour_item of !total',
              {
                '!tour_item': filteredTourItemId + 1,
                '!total': filteredTour.length,
              },
            );

            if (filteredTourItemId === filteredTour.length - 1) {
              filteredTour[filteredTourItemId].cancelText =
                Drupal.t('End tour');
            }
          });
          this.model.set('tour', filteredTour);
        }
      },
    },
  );

  /**
   * Provides an object that will become the tour item's 'next' button.
   *
   * Similar to a theme function, themes can override this function to customize
   * the resulting button. Unlike a theme function, it returns an object instead
   * of a string, which is why it is not part of Drupal.theme.
   *
   * @param {Tour} shepherdTour
   *  A class representing a Shepherd site tour.
   * @param {Object} tourStepConfig
   *   An object generated in TourViewBuilder used for creating the options
   *   passed to `Tour.addStep(options)`.
   *   Contains the following properties:
   *   - id {string}: The tour.tip ID specified by its config
   *   - selector {string|null}: The selector of the element the tour step is
   *     attaching to.
   *   - module {string}: The module providing the tip plugin used by this step.
   *   - counter {string}: A string indicating which tour step this is out of
   *     how many total steps.
   *   - attachTo {Object} This is directly mapped to the `attachTo` Step()
   *     option. It has two properties:
   *     - element {string}: The selector of the element the step attaches to.
   *     - on {string}: a PopperJS compatible string to specify step position.
   *   - classes {string}: Will be added to the class attribute of the step.
   *   - body {string}: Markup that is mapped to the `text` Step() option. Will
   *     become the step content.
   *   - title {string}: is mapped to the `title` Step() option.
   *
   * @return {{classes: string, action: string, text: string}}
   *    An object structured in the manner Shepherd requires to create the
   *    'next' button.
   *
   * @see https://shepherdjs.dev/docs/Tour.html
   * @see \Drupal\tour\TourViewBuilder::viewMultiple()
   * @see https://shepherdjs.dev/docs/Step.html
   */
  Drupal.tour.nextButton = (shepherdTour, tourStepConfig) => {
    return {
      classes: 'button button--primary',
      text: tourStepConfig.cancelText
        ? tourStepConfig.cancelText
        : Drupal.t('Next'),
      action: tourStepConfig.cancelText
        ? shepherdTour.cancel
        : shepherdTour.next,
    };
  };

  /**
   * Theme function for tour item content.
   *
   * @param {Object} tourStepConfig
   *   An object generated in TourViewBuilder used for creating the options
   *   passed to `Tour.addStep(options)`.
   *   Contains the following properties:
   *   - id {string}: The tour.tip ID specified by its config
   *   - selector {string|null}: The selector of the element the tour step is
   *     attaching to.
   *   - module {string}: The module providing the tip plugin used by this step.
   *   - counter {string}: A string indicating which tour step this is out of
   *     how many total steps.
   *   - attachTo {Object} This is directly mapped to the `attachTo` Step()
   *     option. It has two properties:
   *     - element {string}: The selector of the element the step attaches to.
   *     - on {string}: a PopperJS compatible string to specify step position.
   *   - classes {string}: Will be added to the class attribute of the step.
   *   - body {string}: Markup that is mapped to the `text` Step() option. Will
   *     become the step content.
   *   - title {string}: is mapped to the `title` Step() option.
   *
   * @return {string}
   *   The tour item content markup.
   *
   * @see \Drupal\tour\TourViewBuilder::viewMultiple()
   * @see https://shepherdjs.dev/docs/Step.html
   */
  Drupal.theme.tourItemContent = (tourStepConfig) =>
    `${tourStepConfig.body}<div class="tour-progress">${tourStepConfig.counter}</div>`;
})(jQuery, Backbone, Drupal, drupalSettings, document, window.Shepherd);
;
/**
 * @file
 * Manages page tabbing modifications made by modules.
 */

/**
 * Allow modules to respond to the constrain event.
 *
 * @event drupalTabbingConstrained
 */

/**
 * Allow modules to respond to the tabbingContext release event.
 *
 * @event drupalTabbingContextReleased
 */

/**
 * Allow modules to respond to the constrain event.
 *
 * @event drupalTabbingContextActivated
 */

/**
 * Allow modules to respond to the constrain event.
 *
 * @event drupalTabbingContextDeactivated
 */

(function ($, Drupal, { tabbable, isTabbable }) {
  /**
   * Provides an API for managing page tabbing order modifications.
   *
   * @constructor Drupal~TabbingManager
   */
  function TabbingManager() {
    /**
     * Tabbing sets are stored as a stack. The active set is at the top of the
     * stack. We use a JavaScript array as if it were a stack; we consider the
     * first element to be the bottom and the last element to be the top. This
     * allows us to use JavaScript's built-in Array.push() and Array.pop()
     * methods.
     *
     * @type {Array.<Drupal~TabbingContext>}
     */
    this.stack = [];
  }

  /**
   * Stores a set of tabbable elements.
   *
   * This constraint can be removed with the release() method.
   *
   * @constructor Drupal~TabbingContext
   *
   * @param {object} options
   *   A set of initiating values
   * @param {number} options.level
   *   The level in the TabbingManager's stack of this tabbingContext.
   * @param {jQuery} options.$tabbableElements
   *   The DOM elements that should be reachable via the tab key when this
   *   tabbingContext is active.
   * @param {jQuery} options.$disabledElements
   *   The DOM elements that should not be reachable via the tab key when this
   *   tabbingContext is active.
   * @param {boolean} options.released
   *   A released tabbingContext can never be activated again. It will be
   *   cleaned up when the TabbingManager unwinds its stack.
   * @param {boolean} options.active
   *   When true, the tabbable elements of this tabbingContext will be reachable
   *   via the tab key and the disabled elements will not. Only one
   *   tabbingContext can be active at a time.
   *  @param {boolean} options.trapFocus
   *   When true, focus is trapped within the tabbable elements, i.e. focus will
   *   remain within the browser.
   */
  function TabbingContext(options) {
    $.extend(
      this,
      /** @lends Drupal~TabbingContext# */ {
        /**
         * @type {?number}
         */
        level: null,

        /**
         * @type {jQuery}
         */
        $tabbableElements: $(),

        /**
         * @type {jQuery}
         */
        $disabledElements: $(),

        /**
         * @type {boolean}
         */
        released: false,

        /**
         * @type {boolean}
         */
        active: false,

        /**
         * @type {boolean}
         */
        trapFocus: false,
      },
      options,
    );
  }

  /**
   * Add public methods to the TabbingManager class.
   */
  $.extend(
    TabbingManager.prototype,
    /** @lends Drupal~TabbingManager# */ {
      /**
       * Constrain tabbing to the specified set of elements only.
       *
       * Makes elements outside of the specified set of elements unreachable via
       * the tab key.
       *
       * @param {jQuery|Selector|Element|ElementArray|object|selection} elements
       *   The set of elements to which tabbing should be constrained. Can also
       *   be any jQuery-compatible argument.
       * @param {object} [options={}]
       *   Constrain options.
       * @param {boolean} [options.trapFocus=false]
       *   When true, tabbing is trapped within the set of elements and can't
       *   leave the browser. If the final element in the set is tabbed, the
       *   first element in the set will receive focus. If the first element in
       *   the set is shift-tabbed, the last element in the set will receive
       *   focus.
       *   When false, it is possible to tab out of the browser window by
       *   tabbing the final element in the set or shift-tabbing the first
       *   element in the set.
       *
       * @return {Drupal~TabbingContext}
       *   The TabbingContext instance.
       *
       * @fires event:drupalTabbingConstrained
       */
      constrain(elements, { trapFocus = false } = {}) {
        // Deactivate all tabbingContexts to prepare for the new constraint. A
        // tabbingContext instance will only be reactivated if the stack is
        // unwound to it in the _unwindStack() method.
        const il = this.stack.length;
        for (let i = 0; i < il; i++) {
          this.stack[i].deactivate();
        }

        // The "active tabbing set" are the elements tabbing should be constrained
        // to.
        let tabbableElements = [];
        $(elements).each((index, rootElement) => {
          tabbableElements = [...tabbableElements, ...tabbable(rootElement)];
          if (isTabbable(rootElement)) {
            tabbableElements = [...tabbableElements, rootElement];
          }
        });

        const tabbingContext = new TabbingContext({
          // The level is the current height of the stack before this new
          // tabbingContext is pushed on top of the stack.
          level: this.stack.length,
          $tabbableElements: $(tabbableElements),
          trapFocus,
        });

        this.stack.push(tabbingContext);

        // Activates the tabbingContext; this will manipulate the DOM to constrain
        // tabbing.
        tabbingContext.activate();

        // Allow modules to respond to the constrain event.
        $(document).trigger('drupalTabbingConstrained', tabbingContext);

        return tabbingContext;
      },

      /**
       * Restores a former tabbingContext when an active one is released.
       *
       * The TabbingManager stack of tabbingContext instances will be unwound
       * from the top-most released tabbingContext down to the first non-released
       * tabbingContext instance. This non-released instance is then activated.
       */
      release() {
        // Unwind as far as possible: find the topmost non-released
        // tabbingContext.
        let toActivate = this.stack.length - 1;
        while (toActivate >= 0 && this.stack[toActivate].released) {
          toActivate--;
        }

        // Delete all tabbingContexts after the to be activated one. They have
        // already been deactivated, so their effect on the DOM has been reversed.
        this.stack.splice(toActivate + 1);

        // Get topmost tabbingContext, if one exists, and activate it.
        if (toActivate >= 0) {
          this.stack[toActivate].activate();
        }
      },

      /**
       * Makes all elements outside of the tabbingContext's set untabbable.
       *
       * Elements made untabbable have their original tabindex and autofocus
       * values stored so that they might be restored later when this
       * tabbingContext is deactivated.
       *
       * @param {Drupal~TabbingContext} tabbingContext
       *   The TabbingContext instance that has been activated.
       */
      activate(tabbingContext) {
        const $set = tabbingContext.$tabbableElements;
        const level = tabbingContext.level;
        // Determine which elements are reachable via tabbing by default.
        const $disabledSet = $(tabbable(document.body))
          // Exclude elements of the active tabbing set.
          .not($set);
        // Set the disabled set on the tabbingContext.
        tabbingContext.$disabledElements = $disabledSet;
        // Record the tabindex for each element, so we can restore it later.
        const il = $disabledSet.length;
        for (let i = 0; i < il; i++) {
          this.recordTabindex($disabledSet.eq(i), level);
        }
        // Make all tabbable elements outside of the active tabbing set
        // unreachable.
        $disabledSet.prop('tabindex', -1).prop('autofocus', false);

        // Set focus on an element in the tabbingContext's set of tabbable
        // elements. First, check if there is an element with an autofocus
        // attribute. Select the last one from the DOM order.
        let $hasFocus = $set.filter('[autofocus]').eq(-1);
        // If no element in the tabbable set has an autofocus attribute, select
        // the first element in the set.
        if ($hasFocus.length === 0) {
          $hasFocus = $set.eq(0);
        }
        $hasFocus.trigger('focus');

        // Trap focus within the set.
        if ($set.length && tabbingContext.trapFocus) {
          $set.last().on('keydown.focus-trap', (event) => {
            if (event.key === 'Tab' && !event.shiftKey) {
              event.preventDefault();
              $set.first().focus();
            }
          });
          $set.first().on('keydown.focus-trap', (event) => {
            if (event.key === 'Tab' && event.shiftKey) {
              event.preventDefault();
              $set.last().focus();
            }
          });
        }
      },

      /**
       * Restores that tabbable state of a tabbingContext's disabled elements.
       *
       * Elements that were made untabbable have their original tabindex and
       * autofocus values restored.
       *
       * @param {Drupal~TabbingContext} tabbingContext
       *   The TabbingContext instance that has been deactivated.
       */
      deactivate(tabbingContext) {
        const $set = tabbingContext.$disabledElements;
        const level = tabbingContext.level;
        const il = $set.length;

        tabbingContext.$tabbableElements.first().off('keydown.focus-trap');
        tabbingContext.$tabbableElements.last().off('keydown.focus-trap');
        for (let i = 0; i < il; i++) {
          this.restoreTabindex($set.eq(i), level);
        }
      },

      /**
       * Records the tabindex and autofocus values of an untabbable element.
       *
       * @param {jQuery} $el
       *   The set of elements that have been disabled.
       * @param {number} level
       *   The stack level for which the tabindex attribute should be recorded.
       */
      recordTabindex($el, level) {
        const tabInfo = $el.data('drupalOriginalTabIndices') || {};
        tabInfo[level] = {
          tabindex: $el[0].getAttribute('tabindex'),
          autofocus: $el[0].hasAttribute('autofocus'),
        };
        $el.data('drupalOriginalTabIndices', tabInfo);
      },

      /**
       * Restores the tabindex and autofocus values of a reactivated element.
       *
       * @param {jQuery} $el
       *   The element that is being reactivated.
       * @param {number} level
       *   The stack level for which the tabindex attribute should be restored.
       */
      restoreTabindex($el, level) {
        const tabInfo = $el.data('drupalOriginalTabIndices');
        if (tabInfo && tabInfo[level]) {
          const data = tabInfo[level];
          if (data.tabindex) {
            $el[0].setAttribute('tabindex', data.tabindex);
          }
          // If the element did not have a tabindex at this stack level then
          // remove it.
          else {
            $el[0].removeAttribute('tabindex');
          }
          if (data.autofocus) {
            $el[0].setAttribute('autofocus', 'autofocus');
          }

          // Clean up $.data.
          if (level === 0) {
            // Remove all data.
            $el.removeData('drupalOriginalTabIndices');
          } else {
            // Remove the data for this stack level and higher.
            let levelToDelete = level;
            while (tabInfo.hasOwnProperty(levelToDelete)) {
              delete tabInfo[levelToDelete];
              levelToDelete++;
            }
            $el.data('drupalOriginalTabIndices', tabInfo);
          }
        }
      },
    },
  );

  /**
   * Add public methods to the TabbingContext class.
   */
  $.extend(
    TabbingContext.prototype,
    /** @lends Drupal~TabbingContext# */ {
      /**
       * Releases this TabbingContext.
       *
       * Once a TabbingContext object is released, it can never be activated
       * again.
       *
       * @fires event:drupalTabbingContextReleased
       */
      release() {
        if (!this.released) {
          this.deactivate();
          this.released = true;
          Drupal.tabbingManager.release(this);
          // Allow modules to respond to the tabbingContext release event.
          $(document).trigger('drupalTabbingContextReleased', this);
        }
      },

      /**
       * Activates this TabbingContext.
       *
       * @fires event:drupalTabbingContextActivated
       */
      activate() {
        // A released TabbingContext object can never be activated again.
        if (!this.active && !this.released) {
          this.active = true;
          Drupal.tabbingManager.activate(this);
          // Allow modules to respond to the constrain event.
          $(document).trigger('drupalTabbingContextActivated', this);
        }
      },

      /**
       * Deactivates this TabbingContext.
       *
       * @fires event:drupalTabbingContextDeactivated
       */
      deactivate() {
        if (this.active) {
          this.active = false;
          Drupal.tabbingManager.deactivate(this);
          // Allow modules to respond to the constrain event.
          $(document).trigger('drupalTabbingContextDeactivated', this);
        }
      },
    },
  );

  // Mark this behavior as processed on the first pass and return if it is
  // already processed.
  if (Drupal.tabbingManager) {
    return;
  }

  /**
   * @type {Drupal~TabbingManager}
   */
  Drupal.tabbingManager = new TabbingManager();
})(jQuery, Drupal, window.tabbable);
;
/**
 * @file
 * Attaches behaviors for the Contextual module's edit toolbar tab.
 */

(function ($, Drupal, Backbone) {
  const strings = {
    tabbingReleased: Drupal.t(
      'Tabbing is no longer constrained by the Contextual module.',
    ),
    tabbingConstrained: Drupal.t(
      'Tabbing is constrained to a set of @contextualsCount and the edit mode toggle.',
    ),
    pressEsc: Drupal.t('Press the esc key to exit.'),
  };

  /**
   * Initializes a contextual link: updates its DOM, sets up model and views.
   *
   * @param {HTMLElement} context
   *   A contextual links DOM element as rendered by the server.
   */
  function initContextualToolbar(context) {
    if (!Drupal.contextual || !Drupal.contextual.collection) {
      return;
    }

    const contextualToolbar = Drupal.contextualToolbar;
    contextualToolbar.model = new contextualToolbar.StateModel(
      {
        // Checks whether localStorage indicates we should start in edit mode
        // rather than view mode.
        // @see Drupal.contextualToolbar.VisualView.persist
        isViewing:
          document.querySelector('body .contextual-region') === null ||
          localStorage.getItem('Drupal.contextualToolbar.isViewing') !==
            'false',
      },
      {
        contextualCollection: Drupal.contextual.collection,
      },
    );

    const viewOptions = {
      el: $('.toolbar .toolbar-bar .contextual-toolbar-tab'),
      model: contextualToolbar.model,
      strings,
    };
    new contextualToolbar.VisualView(viewOptions);
    new contextualToolbar.AuralView(viewOptions);
  }

  /**
   * Attaches contextual's edit toolbar tab behavior.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches contextual toolbar behavior on a contextualToolbar-init event.
   */
  Drupal.behaviors.contextualToolbar = {
    attach(context) {
      if (once('contextualToolbar-init', 'body').length) {
        initContextualToolbar(context);
      }
    },
  };

  /**
   * Namespace for the contextual toolbar.
   *
   * @namespace
   *
   * @private
   */
  Drupal.contextualToolbar = {
    /**
     * The {@link Drupal.contextualToolbar.StateModel} instance.
     *
     * @type {?Drupal.contextualToolbar.StateModel}
     *
     * @deprecated in drupal:9.4.0 and is removed from drupal:11.0.0. There is
     * no replacement.
     */
    model: null,
  };
})(jQuery, Drupal, Backbone);
;
/**
 * @file
 * A Backbone Model for the state of Contextual module's edit toolbar tab.
 */

(function (Drupal, Backbone) {
  /**
   * @deprecated in drupal:9.4.0 and is removed from drupal:11.0.0. There is no
   *  replacement.
   */
  Drupal.contextualToolbar.StateModel = Backbone.Model.extend(
    /** @lends Drupal.contextualToolbar.StateModel# */ {
      /**
       * @type {object}
       *
       * @prop {boolean} isViewing
       * @prop {boolean} isVisible
       * @prop {number} contextualCount
       * @prop {Drupal~TabbingContext} tabbingContext
       */
      defaults: /** @lends Drupal.contextualToolbar.StateModel# */ {
        /**
         * Indicates whether the toggle is currently in "view" or "edit" mode.
         *
         * @type {boolean}
         */
        isViewing: true,

        /**
         * Indicates whether the toggle should be visible or hidden. Automatically
         * calculated, depends on contextualCount.
         *
         * @type {boolean}
         */
        isVisible: false,

        /**
         * Tracks how many contextual links exist on the page.
         *
         * @type {number}
         */
        contextualCount: 0,

        /**
         * A TabbingContext object as returned by {@link Drupal~TabbingManager}:
         * the set of tabbable elements when edit mode is enabled.
         *
         * @type {?Drupal~TabbingContext}
         */
        tabbingContext: null,
      },

      /**
       * Models the state of the edit mode toggle.
       *
       * @constructs
       *
       * @augments Backbone.Model
       *
       * @param {object} attrs
       *   Attributes for the backbone model.
       * @param {object} options
       *   An object with the following option:
       * @param {Backbone.collection} options.contextualCollection
       *   The collection of {@link Drupal.contextual.StateModel} models that
       *   represent the contextual links on the page.
       */
      initialize(attrs, options) {
        // Respond to new/removed contextual links.
        this.listenTo(
          options.contextualCollection,
          'reset remove add',
          this.countContextualLinks,
        );
        this.listenTo(
          options.contextualCollection,
          'add',
          this.lockNewContextualLinks,
        );

        // Automatically determine visibility.
        this.listenTo(this, 'change:contextualCount', this.updateVisibility);

        // Whenever edit mode is toggled, lock all contextual links.
        this.listenTo(this, 'change:isViewing', (model, isViewing) => {
          options.contextualCollection.each((contextualModel) => {
            contextualModel.set('isLocked', !isViewing);
          });
        });
      },

      /**
       * Tracks the number of contextual link models in the collection.
       *
       * @param {Drupal.contextual.StateModel} contextualModel
       *   The contextual links model that was added or removed.
       * @param {Backbone.Collection} contextualCollection
       *    The collection of contextual link models.
       */
      countContextualLinks(contextualModel, contextualCollection) {
        this.set('contextualCount', contextualCollection.length);
      },

      /**
       * Lock newly added contextual links if edit mode is enabled.
       *
       * @param {Drupal.contextual.StateModel} contextualModel
       *   The contextual links model that was added.
       * @param {Backbone.Collection} [contextualCollection]
       *    The collection of contextual link models.
       */
      lockNewContextualLinks(contextualModel, contextualCollection) {
        if (!this.get('isViewing')) {
          contextualModel.set('isLocked', true);
        }
      },

      /**
       * Automatically updates visibility of the view/edit mode toggle.
       */
      updateVisibility() {
        this.set('isVisible', this.get('contextualCount') > 0);
      },
    },
  );
})(Drupal, Backbone);
;
/**
 * @file
 * A Backbone View that provides the aural view of the edit mode toggle.
 */

(function ($, Drupal, Backbone, _) {
  /**
   * @deprecated in drupal:9.4.0 and is removed from drupal:11.0.0. There is no
   *  replacement.
   */
  Drupal.contextualToolbar.AuralView = Backbone.View.extend(
    /** @lends Drupal.contextualToolbar.AuralView# */ {
      /**
       * Tracks whether the tabbing constraint announcement has been read once.
       *
       * @type {boolean}
       */
      announcedOnce: false,

      /**
       * Renders the aural view of the edit mode toggle (screen reader support).
       *
       * @constructs
       *
       * @augments Backbone.View
       *
       * @param {object} options
       *   Options for the view.
       */
      initialize(options) {
        this.options = options;

        this.listenTo(this.model, 'change', this.render);
        this.listenTo(this.model, 'change:isViewing', this.manageTabbing);

        $(document).on('keyup', _.bind(this.onKeypress, this));
        this.manageTabbing();
      },

      /**
       * {@inheritdoc}
       *
       * @return {Drupal.contextualToolbar.AuralView}
       *   The current contextual toolbar aural view.
       */
      render() {
        // Render the state.
        this.$el
          .find('button')
          .attr('aria-pressed', !this.model.get('isViewing'));

        return this;
      },

      /**
       * Limits tabbing to the contextual links and edit mode toolbar tab.
       */
      manageTabbing() {
        let tabbingContext = this.model.get('tabbingContext');
        // Always release an existing tabbing context.
        if (tabbingContext) {
          // Only announce release when the context was active.
          if (tabbingContext.active) {
            Drupal.announce(this.options.strings.tabbingReleased);
          }
          tabbingContext.release();
        }
        // Create a new tabbing context when edit mode is enabled.
        if (!this.model.get('isViewing')) {
          tabbingContext = Drupal.tabbingManager.constrain(
            $('.contextual-toolbar-tab, .contextual'),
          );
          this.model.set('tabbingContext', tabbingContext);
          this.announceTabbingConstraint();
          this.announcedOnce = true;
        }
      },

      /**
       * Announces the current tabbing constraint.
       */
      announceTabbingConstraint() {
        const strings = this.options.strings;
        Drupal.announce(
          Drupal.formatString(strings.tabbingConstrained, {
            '@contextualsCount': Drupal.formatPlural(
              Drupal.contextual.collection.length,
              '@count contextual link',
              '@count contextual links',
            ),
          }),
        );
        Drupal.announce(strings.pressEsc);
      },

      /**
       * Responds to esc and tab key press events.
       *
       * @param {jQuery.Event} event
       *   The keypress event.
       */
      onKeypress(event) {
        // The first tab key press is tracked so that an announcement about
        // tabbing constraints can be raised if edit mode is enabled when the page
        // is loaded.
        if (
          !this.announcedOnce &&
          event.keyCode === 9 &&
          !this.model.get('isViewing')
        ) {
          this.announceTabbingConstraint();
          // Set announce to true so that this conditional block won't run again.
          this.announcedOnce = true;
        }
        // Respond to the ESC key. Exit out of edit mode.
        if (event.keyCode === 27) {
          this.model.set('isViewing', true);
        }
      },
    },
  );
})(jQuery, Drupal, Backbone, _);
;
/**
 * @file
 * A Backbone View that provides the visual view of the edit mode toggle.
 */

(function (Drupal, Backbone) {
  /**
   * @deprecated in drupal:9.4.0 and is removed from drupal:11.0.0. There is no
   *  replacement.
   */
  Drupal.contextualToolbar.VisualView = Backbone.View.extend(
    /** @lends Drupal.contextualToolbar.VisualView# */ {
      /**
       * Events for the Backbone view.
       *
       * @return {object}
       *   A mapping of events to be used in the view.
       */
      events() {
        // Prevents delay and simulated mouse events.
        const touchEndToClick = function (event) {
          event.preventDefault();
          event.target.click();
        };

        return {
          click() {
            this.model.set('isViewing', !this.model.get('isViewing'));
          },
          touchend: touchEndToClick,
        };
      },

      /**
       * Renders the visual view of the edit mode toggle.
       *
       * Listens to mouse & touch and handles edit mode toggle interactions.
       *
       * @constructs
       *
       * @augments Backbone.View
       */
      initialize() {
        this.listenTo(this.model, 'change', this.render);
        this.listenTo(this.model, 'change:isViewing', this.persist);
      },

      /**
       * {@inheritdoc}
       *
       * @return {Drupal.contextualToolbar.VisualView}
       *   The current contextual toolbar visual view.
       */
      render() {
        // Render the visibility.
        this.$el.toggleClass('hidden', !this.model.get('isVisible'));
        // Render the state.
        this.$el
          .find('button')
          .toggleClass('is-active', !this.model.get('isViewing'));

        return this;
      },

      /**
       * Model change handler; persists the isViewing value to localStorage.
       *
       * `isViewing === true` is the default, so only stores in localStorage when
       * it's not the default value (i.e. false).
       *
       * @param {Drupal.contextualToolbar.StateModel} model
       *   A {@link Drupal.contextualToolbar.StateModel} model.
       * @param {boolean} isViewing
       *   The value of the isViewing attribute in the model.
       */
      persist(model, isViewing) {
        if (!isViewing) {
          localStorage.setItem('Drupal.contextualToolbar.isViewing', 'false');
        } else {
          localStorage.removeItem('Drupal.contextualToolbar.isViewing');
        }
      },
    },
  );
})(Drupal, Backbone);
;
/**
 * @file
 * Replaces the home link in toolbar with a back to site link.
 */

(function ($, Drupal, drupalSettings) {
  const pathInfo = drupalSettings.path;
  const escapeAdminPath = sessionStorage.getItem('escapeAdminPath');
  const windowLocation = window.location;

  // Saves the last non-administrative page in the browser to be able to link
  // back to it when browsing administrative pages. If there is a destination
  // parameter there is not need to save the current path because the page is
  // loaded within an existing "workflow".
  if (
    !pathInfo.currentPathIsAdmin &&
    !/destination=/.test(windowLocation.search)
  ) {
    sessionStorage.setItem('escapeAdminPath', windowLocation);
  }

  /**
   * Replaces the "Home" link with "Back to site" link.
   *
   * Back to site link points to the last non-administrative page the user
   * visited within the same browser tab.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches the replacement functionality to the toolbar-escape-admin element.
   */
  Drupal.behaviors.escapeAdmin = {
    attach() {
      const toolbarEscape = once('escapeAdmin', '[data-toolbar-escape-admin]');
      if (toolbarEscape.length && pathInfo.currentPathIsAdmin) {
        if (escapeAdminPath !== null) {
          $(toolbarEscape).attr('href', escapeAdminPath);
        } else {
          toolbarEscape[0].textContent = Drupal.t('Home');
        }
      }
    },
  };
})(jQuery, Drupal, drupalSettings);
;
/**
 * @file
 * Renders BigPipe placeholders using Drupal's Ajax system.
 */

(function (Drupal, drupalSettings) {
  /**
   * Maps textContent of <script type="application/vnd.drupal-ajax"> to an AJAX response.
   *
   * @param {string} content
   *   The text content of a <script type="application/vnd.drupal-ajax"> DOM node.
   * @return {Array|boolean}
   *   The parsed Ajax response containing an array of Ajax commands, or false in
   *   case the DOM node hasn't fully arrived yet.
   */
  function mapTextContentToAjaxResponse(content) {
    if (content === '') {
      return false;
    }

    try {
      return JSON.parse(content);
    } catch (e) {
      return false;
    }
  }

  /**
   * Executes Ajax commands in <script type="application/vnd.drupal-ajax"> tag.
   *
   * These Ajax commands replace placeholders with HTML and load missing CSS/JS.
   *
   * @param {HTMLScriptElement} placeholderReplacement
   *   Script tag created by BigPipe.
   */
  function bigPipeProcessPlaceholderReplacement(placeholderReplacement) {
    const placeholderId = placeholderReplacement.getAttribute(
      'data-big-pipe-replacement-for-placeholder-with-id',
    );
    const content = placeholderReplacement.textContent.trim();
    // Ignore any placeholders that are not in the known placeholder list. Used
    // to avoid someone trying to XSS the site via the placeholdering mechanism.
    if (
      typeof drupalSettings.bigPipePlaceholderIds[placeholderId] !== 'undefined'
    ) {
      const response = mapTextContentToAjaxResponse(content);
      // If we try to parse the content too early (when the JSON containing Ajax
      // commands is still arriving), textContent will be empty or incomplete.
      if (response === false) {
        /**
         * Mark as unprocessed so this will be retried later.
         * @see bigPipeProcessDocument()
         */
        once.remove('big-pipe', placeholderReplacement);
      } else {
        // Create a Drupal.Ajax object without associating an element, a
        // progress indicator or a URL.
        const ajaxObject = Drupal.ajax({
          url: '',
          base: false,
          element: false,
          progress: false,
        });
        // Then, simulate an AJAX response having arrived, and let the Ajax
        // system handle it.
        ajaxObject.success(response, 'success');
      }
    }
  }

  // The frequency with which to check for newly arrived BigPipe placeholders.
  // Hence 50 ms means we check 20 times per second. Setting this to 100 ms or
  // more would cause the user to see content appear noticeably slower.
  const interval = drupalSettings.bigPipeInterval || 50;

  // The internal ID to contain the watcher service.
  let timeoutID;

  /**
   * Processes a streamed HTML document receiving placeholder replacements.
   *
   * @param {HTMLDocument} context
   *   The HTML document containing <script type="application/vnd.drupal-ajax">
   *   tags generated by BigPipe.
   *
   * @return {bool}
   *   Returns true when processing has been finished and a stop signal has been
   *   found.
   */
  function bigPipeProcessDocument(context) {
    // Make sure we have BigPipe-related scripts before processing further.
    if (!context.querySelector('script[data-big-pipe-event="start"]')) {
      return false;
    }

    // Attach Drupal behaviors early, if possible.
    once('big-pipe-early-behaviors', 'body', context).forEach((el) => {
      Drupal.attachBehaviors(el);
    });

    once(
      'big-pipe',
      'script[data-big-pipe-replacement-for-placeholder-with-id]',
      context,
    ).forEach(bigPipeProcessPlaceholderReplacement);

    // If we see the stop signal, clear the timeout: all placeholder
    // replacements are guaranteed to be received and processed.
    if (context.querySelector('script[data-big-pipe-event="stop"]')) {
      if (timeoutID) {
        clearTimeout(timeoutID);
      }
      return true;
    }

    return false;
  }

  function bigPipeProcess() {
    timeoutID = setTimeout(() => {
      if (!bigPipeProcessDocument(document)) {
        bigPipeProcess();
      }
    }, interval);
  }

  bigPipeProcess();

  // If something goes wrong, make sure everything is cleaned up and has had a
  // chance to be processed with everything loaded.
  window.addEventListener('load', () => {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
    bigPipeProcessDocument(document);
  });
})(Drupal, drupalSettings);
;