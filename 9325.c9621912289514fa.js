"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9325],{9325:function(F,y,u){u.r(y),u.d(y,{ion_segment:function(){return B},ion_segment_button:function(){return I}});var s=u(4942),O=u(5861),w=u(7762),_=u(5671),C=u(3144),Z=u(7757),E=u.n(Z),l=u(9533),x=u(7639),f=u(6499),S=u(5062),v=u(7300),B=function(){function m(i){var t=this;(0,_.Z)(this,m),(0,l.r)(this,i),this.ionChange=(0,l.e)(this,"ionChange",7),this.ionSelect=(0,l.e)(this,"ionSelect",7),this.ionStyle=(0,l.e)(this,"ionStyle",7),this.didInit=!1,this.activated=!1,this.disabled=!1,this.scrollable=!1,this.swipeGesture=!0,this.selectOnFocus=!1,this.onClick=function(n){var e=n.target,o=t.checked;"ION-SEGMENT"!==e.tagName&&(t.value=e.value,(t.scrollable||!t.swipeGesture)&&(o?t.checkButton(o,e):t.setCheckedClasses()),t.checked=e)},this.getSegmentButton=function(n){var e=t.getButtons().filter(function(r){return!r.disabled}),o=e.findIndex(function(r){return r===document.activeElement});switch(n){case"first":return e[0];case"last":return e[e.length-1];case"next":return e[o+1]||e[0];case"previous":return e[o-1]||e[e.length-1];default:return null}}}return(0,C.Z)(m,[{key:"colorChanged",value:function(t,n){(void 0===n&&void 0!==t||void 0!==n&&void 0===t)&&this.emitStyle()}},{key:"swipeGestureChanged",value:function(){this.gestureChanged()}},{key:"valueChanged",value:function(t,n){this.ionSelect.emit({value:t}),(""!==n||this.didInit)&&(this.activated?this.valueAfterGesture=t:this.ionChange.emit({value:t}))}},{key:"disabledChanged",value:function(){this.gestureChanged();var e,t=this.getButtons(),n=(0,w.Z)(t);try{for(n.s();!(e=n.n()).done;)e.value.disabled=this.disabled}catch(r){n.e(r)}finally{n.f()}}},{key:"gestureChanged",value:function(){this.gesture&&this.gesture.enable(!this.scrollable&&!this.disabled&&this.swipeGesture)}},{key:"connectedCallback",value:function(){this.emitStyle()}},{key:"componentWillLoad",value:function(){this.emitStyle()}},{key:"componentDidLoad",value:(i=(0,O.Z)(E().mark(function n(){var e=this;return E().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return this.setCheckedClasses(),this.ensureFocusable(),r.next=4,Promise.resolve().then(u.bind(u,1363));case 4:this.gesture=r.sent.createGesture({el:this.el,gestureName:"segment",gesturePriority:100,threshold:0,passive:!1,onStart:function(c){return e.onStart(c)},onMove:function(c){return e.onMove(c)},onEnd:function(c){return e.onEnd(c)}}),this.gestureChanged(),this.disabled&&this.disabledChanged(),this.didInit=!0;case 8:case"end":return r.stop()}},n,this)})),function t(){return i.apply(this,arguments)})},{key:"onStart",value:function(t){this.activate(t)}},{key:"onMove",value:function(t){this.setNextIndex(t)}},{key:"onEnd",value:function(t){this.setActivated(!1);var n=this.setNextIndex(t,!0);t.event.stopImmediatePropagation(),n&&this.addRipple(t);var e=this.valueAfterGesture;void 0!==e&&(this.ionChange.emit({value:e}),this.valueAfterGesture=void 0)}},{key:"getButtons",value:function(){return Array.from(this.el.querySelectorAll("ion-segment-button"))}},{key:"addRipple",value:function(t){var n=this;if(x.c.getBoolean("animated",!0)&&x.c.getBoolean("rippleEffect",!0)){var r=this.getButtons().find(function(b){return b.value===n.value}),c=(r.shadowRoot||r).querySelector("ion-ripple-effect");if(c){var d=(0,f.p)(t.event);c.addRipple(d.x,d.y).then(function(b){return b()})}}}},{key:"setActivated",value:function(t){this.getButtons().forEach(function(e){t?e.classList.add("segment-button-activated"):e.classList.remove("segment-button-activated")}),this.activated=t}},{key:"activate",value:function(t){var n=this,e=t.event.target,r=this.getButtons().find(function(a){return a.value===n.value});"ION-SEGMENT-BUTTON"===e.tagName&&(r||(this.value=e.value,this.setCheckedClasses()),this.value===e.value&&this.setActivated(!0))}},{key:"getIndicator",value:function(t){return(t.shadowRoot||t).querySelector(".segment-button-indicator")}},{key:"checkButton",value:function(t,n){var e=this.getIndicator(t),o=this.getIndicator(n);if(null!==e&&null!==o){var r=e.getBoundingClientRect(),a=o.getBoundingClientRect(),c=r.width/a.width,g="translate3d(".concat(r.left-a.left,"px, 0, 0) scaleX(").concat(c,")");(0,l.c)(function(){o.classList.remove("segment-button-indicator-animated"),o.style.setProperty("transform",g),o.getBoundingClientRect(),o.classList.add("segment-button-indicator-animated"),o.style.setProperty("transform","")}),this.value=n.value,this.setCheckedClasses()}}},{key:"setCheckedClasses",value:function(){var t=this,n=this.getButtons(),o=n.findIndex(function(d){return d.value===t.value})+1;this.checked=n.find(function(d){return d.value===t.value});var a,r=(0,w.Z)(n);try{for(r.s();!(a=r.n()).done;)a.value.classList.remove("segment-button-after-checked")}catch(d){r.e(d)}finally{r.f()}o<n.length&&n[o].classList.add("segment-button-after-checked")}},{key:"setNextIndex",value:function(t){var g,h,n=this,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=(0,S.i)(this.el),r=this.activated,a=this.getButtons(),c=a.findIndex(function(K){return K.value===n.value}),d=a[c];if(-1!==c){var b=d.getBoundingClientRect(),p=b.left,D=b.width,k=t.currentX,W=b.top+b.height/2,U=this.el.getRootNode(),T=U.elementFromPoint(k,W),N=o?k>p+D:k<p,G=o?k<p:k>p+D;if(r&&!e){if(N){var P=c-1;P>=0&&(h=P)}else if(G&&r&&!e){var M=c+1;M<a.length&&(h=M)}void 0!==h&&!a[h].disabled&&(g=a[h])}if(!r&&e&&(g=T),null!=g){if("ION-SEGMENT"===g.tagName)return!1;d!==g&&this.checkButton(d,g)}return!0}}},{key:"emitStyle",value:function(){this.ionStyle.emit({segment:!0})}},{key:"onKeyDown",value:function(t){var o,n=(0,S.i)(this.el),e=this.selectOnFocus;switch(t.key){case"ArrowRight":t.preventDefault(),o=this.getSegmentButton(n?"previous":"next");break;case"ArrowLeft":t.preventDefault(),o=this.getSegmentButton(n?"next":"previous");break;case"Home":t.preventDefault(),o=this.getSegmentButton("first");break;case"End":t.preventDefault(),o=this.getSegmentButton("last");break;case" ":case"Enter":t.preventDefault(),o=document.activeElement,e=!0}o&&(e&&this.checkButton(this.checked||o,o),o.focus())}},{key:"ensureFocusable",value:function(){var t;void 0===this.value&&(null===(t=this.getButtons()[0])||void 0===t||t.setAttribute("tabindex","0"))}},{key:"render",value:function(){var t,n=(0,x.b)(this);return(0,l.h)(l.H,{role:"tablist",onClick:this.onClick,class:(0,v.c)(this.color,(t={},(0,s.Z)(t,n,!0),(0,s.Z)(t,"in-toolbar",(0,v.h)("ion-toolbar",this.el)),(0,s.Z)(t,"in-toolbar-color",(0,v.h)("ion-toolbar[color]",this.el)),(0,s.Z)(t,"segment-activated",this.activated),(0,s.Z)(t,"segment-disabled",this.disabled),(0,s.Z)(t,"segment-scrollable",this.scrollable),t))},(0,l.h)("slot",null))}},{key:"el",get:function(){return(0,l.i)(this)}}],[{key:"watchers",get:function(){return{color:["colorChanged"],swipeGesture:["swipeGestureChanged"],value:["valueChanged"],disabled:["disabledChanged"]}}}]),m;var i}();B.style={ios:":host{--ripple-color:currentColor;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:center;justify-content:center;width:100%;background:var(--background);font-family:var(--ion-font-family, inherit);text-align:center;contain:paint;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host(.segment-scrollable){-ms-flex-pack:start;justify-content:start;width:auto;overflow-x:auto}:host(.segment-scrollable::-webkit-scrollbar){display:none}:host{--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.065);border-radius:8px;overflow:hidden;z-index:0}:host(.ion-color){background:rgba(var(--ion-color-base-rgb), 0.065)}:host(.in-toolbar){margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;width:auto}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-toolbar){margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}:host(.in-toolbar:not(.ion-color)){background:var(--ion-toolbar-segment-background, var(--background))}:host(.in-toolbar-color:not(.ion-color)){background:rgba(var(--ion-color-contrast-rgb), 0.11)}",md:":host{--ripple-color:currentColor;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:center;justify-content:center;width:100%;background:var(--background);font-family:var(--ion-font-family, inherit);text-align:center;contain:paint;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host(.segment-scrollable){-ms-flex-pack:start;justify-content:start;width:auto;overflow-x:auto}:host(.segment-scrollable::-webkit-scrollbar){display:none}:host{--background:transparent}:host(.segment-scrollable) ::slotted(ion-segment-button){min-width:auto}"};var j=0,I=function(){function m(i){var t=this;(0,_.Z)(this,m),(0,l.r)(this,i),this.segmentEl=null,this.checked=!1,this.disabled=!1,this.layout="icon-top",this.type="button",this.value="ion-sb-"+j++,this.updateStyle=function(){(0,l.j)(t)},this.updateState=function(){t.segmentEl&&(t.checked=t.segmentEl.value===t.value)}}return(0,C.Z)(m,[{key:"connectedCallback",value:function(){var t=this.segmentEl=this.el.closest("ion-segment");t&&(this.updateState(),(0,f.a)(t,"ionSelect",this.updateState),(0,f.a)(t,"ionStyle",this.updateStyle))}},{key:"disconnectedCallback",value:function(){var t=this.segmentEl;t&&((0,f.b)(t,"ionSelect",this.updateState),(0,f.b)(t,"ionStyle",this.updateStyle),this.segmentEl=null)}},{key:"hasLabel",get:function(){return!!this.el.querySelector("ion-label")}},{key:"hasIcon",get:function(){return!!this.el.querySelector("ion-icon")}},{key:"tabIndex",get:function(){return this.checked&&!this.disabled?0:-1}},{key:"render",value:function(){var t,n=this.checked,e=this.type,o=this.disabled,r=this.hasIcon,a=this.hasLabel,c=this.layout,d=this.segmentEl,g=this.tabIndex,h=(0,x.b)(this);return(0,l.h)(l.H,{role:"tab","aria-selected":n?"true":"false","aria-disabled":o?"true":null,tabIndex:g,class:(t={},(0,s.Z)(t,h,!0),(0,s.Z)(t,"in-toolbar",(0,v.h)("ion-toolbar",this.el)),(0,s.Z)(t,"in-toolbar-color",(0,v.h)("ion-toolbar[color]",this.el)),(0,s.Z)(t,"in-segment",(0,v.h)("ion-segment",this.el)),(0,s.Z)(t,"in-segment-color",null!==d&&void 0!==d.color),(0,s.Z)(t,"segment-button-has-label",a),(0,s.Z)(t,"segment-button-has-icon",r),(0,s.Z)(t,"segment-button-has-label-only",a&&!r),(0,s.Z)(t,"segment-button-has-icon-only",r&&!a),(0,s.Z)(t,"segment-button-disabled",o),(0,s.Z)(t,"segment-button-checked",n),(0,s.Z)(t,"segment-button-layout-".concat(c),!0),(0,s.Z)(t,"ion-activatable",!0),(0,s.Z)(t,"ion-activatable-instant",!0),(0,s.Z)(t,"ion-focusable",!0),t)},(0,l.h)("button",{type:e,tabIndex:-1,class:"button-native",part:"native",disabled:o},(0,l.h)("span",{class:"button-inner"},(0,l.h)("slot",null)),"md"===h&&(0,l.h)("ion-ripple-effect",null)),(0,l.h)("div",{part:"indicator",class:{"segment-button-indicator":!0,"segment-button-indicator-animated":!0}},(0,l.h)("div",{part:"indicator-background",class:"segment-button-indicator-background"})))}},{key:"el",get:function(){return(0,l.i)(this)}}]),m}();I.style={ios:':host{--color:initial;--color-hover:var(--color);--color-checked:var(--color);--color-disabled:var(--color);--padding-start:0;--padding-end:0;--padding-top:0;--padding-bottom:0;border-radius:var(--border-radius);display:-ms-flexbox;display:flex;position:relative;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-direction:column;flex-direction:column;height:auto;background:var(--background);color:var(--color);text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none;cursor:pointer}.button-native{border-radius:0;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:var(--margin-start);margin-right:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;min-width:inherit;max-width:inherit;height:auto;min-height:inherit;max-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border:none;outline:none;background:transparent;contain:content;pointer-events:none;overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{margin-left:unset;margin-right:unset;-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end)}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:inherit;flex-flow:inherit;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}:host(.segment-button-checked){background:var(--background-checked);color:var(--color-checked)}:host(.segment-button-disabled){cursor:default;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}:host(:focus){outline:none}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}:host(.segment-button-checked:hover) .button-native{color:var(--color-checked)}}::slotted(ion-icon){-ms-flex-negative:0;flex-shrink:0;-ms-flex-order:-1;order:-1;pointer-events:none}::slotted(ion-label){display:block;-ms-flex-item-align:center;align-self:center;line-height:22px;text-overflow:ellipsis;white-space:nowrap;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}:host(.segment-button-layout-icon-top) .button-native{-ms-flex-direction:column;flex-direction:column}:host(.segment-button-layout-icon-start) .button-native{-ms-flex-direction:row;flex-direction:row}:host(.segment-button-layout-icon-end) .button-native{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.segment-button-layout-icon-bottom) .button-native{-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.segment-button-layout-icon-hide) ::slotted(ion-icon){display:none}:host(.segment-button-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color, var(--color-checked))}.segment-button-indicator{-webkit-transform-origin:left;transform-origin:left;position:absolute;opacity:0;-webkit-box-sizing:border-box;box-sizing:border-box;will-change:transform, opacity;pointer-events:none}.segment-button-indicator-background{width:100%;height:var(--indicator-height);-webkit-transform:var(--indicator-transform);transform:var(--indicator-transform);-webkit-box-shadow:var(--indicator-box-shadow);box-shadow:var(--indicator-box-shadow);pointer-events:none}.segment-button-indicator-animated{-webkit-transition:var(--indicator-transition);transition:var(--indicator-transition)}:host(.segment-button-checked) .segment-button-indicator{opacity:1}@media (prefers-reduced-motion: reduce){.segment-button-indicator-background{-webkit-transform:none;transform:none}.segment-button-indicator-animated{-webkit-transition:none;transition:none}}:host{--background:none;--background-checked:none;--background-hover:none;--background-hover-opacity:0;--background-focused:none;--background-focused-opacity:0;--border-radius:7px;--border-width:1px;--border-color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.12);--border-style:solid;--indicator-box-shadow:0 0 5px rgba(0, 0, 0, 0.16);--indicator-color:var(--ion-color-step-350, var(--ion-background-color, #fff));--indicator-height:100%;--indicator-transition:transform 260ms cubic-bezier(0.4, 0, 0.2, 1);--indicator-transform:none;--transition:100ms all linear;--padding-top:0;--padding-end:13px;--padding-bottom:0;--padding-start:13px;margin-top:2px;margin-bottom:2px;position:relative;-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-direction:row;flex-direction:row;min-width:70px;min-height:28px;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);font-size:13px;font-weight:450;line-height:37px}:host::before{margin-left:0;margin-right:0;margin-top:5px;margin-bottom:5px;-webkit-transition:160ms opacity ease-in-out;transition:160ms opacity ease-in-out;-webkit-transition-delay:100ms;transition-delay:100ms;border-left:var(--border-width) var(--border-style) var(--border-color);content:"";opacity:1;will-change:opacity}:host(:first-of-type)::before{border-left-color:transparent}:host(.segment-button-disabled){opacity:0.3}::slotted(ion-icon){font-size:24px}:host(.segment-button-layout-icon-start) ::slotted(ion-label){margin-left:2px;margin-right:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.segment-button-layout-icon-start) ::slotted(ion-label){margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:0;margin-inline-end:0}}:host(.segment-button-layout-icon-end) ::slotted(ion-label){margin-left:0;margin-right:2px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.segment-button-layout-icon-end) ::slotted(ion-label){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:2px;margin-inline-end:2px}}.segment-button-indicator{padding-left:2px;padding-right:2px;left:0;right:0;top:0;bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.segment-button-indicator{padding-left:unset;padding-right:unset;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-padding-end:2px;padding-inline-end:2px}}.segment-button-indicator-background{border-radius:var(--border-radius);background:var(--indicator-color)}.segment-button-indicator-background{-webkit-transition:var(--indicator-transition);transition:var(--indicator-transition)}:host(.segment-button-checked)::before,:host(.segment-button-after-checked)::before{opacity:0}:host(.segment-button-checked){z-index:-1}:host(.segment-button-activated){--indicator-transform:scale(0.95)}:host(.ion-focused) .button-native{opacity:0.7}@media (any-hover: hover){:host(:hover) .button-native{opacity:0.5}:host(.segment-button-checked:hover) .button-native{opacity:1}}:host(.in-segment-color){background:none;color:var(--ion-text-color, #000)}:host(.in-segment-color) .segment-button-indicator-background{background:var(--ion-color-step-350, var(--ion-background-color, #fff))}@media (any-hover: hover){:host(.in-segment-color:hover) .button-native,:host(.in-segment-color.segment-button-checked:hover) .button-native{color:var(--ion-text-color, #000)}}:host(.in-toolbar:not(.in-segment-color)){--background-checked:var(--ion-toolbar-segment-background-checked, none);--color:var(--ion-toolbar-segment-color, var(--ion-toolbar-color), initial);--color-checked:var(--ion-toolbar-segment-color-checked, var(--ion-toolbar-color), initial);--indicator-color:var(--ion-toolbar-segment-indicator-color, var(--ion-color-step-350, var(--ion-background-color, #fff)))}:host(.in-toolbar-color) .segment-button-indicator-background{background:#fff}:host(.in-toolbar-color:not(.in-segment-color)) .button-native{color:var(--ion-color-contrast)}:host(.in-toolbar-color.segment-button-checked:not(.in-segment-color)) .button-native{color:var(--ion-color-base)}@media (any-hover: hover){:host(.in-toolbar-color:not(.in-segment-color):hover) .button-native{color:var(--ion-color-contrast)}:host(.in-toolbar-color.segment-button-checked:not(.in-segment-color):hover) .button-native{color:var(--ion-color-base)}}',md:':host{--color:initial;--color-hover:var(--color);--color-checked:var(--color);--color-disabled:var(--color);--padding-start:0;--padding-end:0;--padding-top:0;--padding-bottom:0;border-radius:var(--border-radius);display:-ms-flexbox;display:flex;position:relative;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-direction:column;flex-direction:column;height:auto;background:var(--background);color:var(--color);text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none;cursor:pointer}.button-native{border-radius:0;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:var(--margin-start);margin-right:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;min-width:inherit;max-width:inherit;height:auto;min-height:inherit;max-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border:none;outline:none;background:transparent;contain:content;pointer-events:none;overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{margin-left:unset;margin-right:unset;-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end)}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:inherit;flex-flow:inherit;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}:host(.segment-button-checked){background:var(--background-checked);color:var(--color-checked)}:host(.segment-button-disabled){cursor:default;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}:host(:focus){outline:none}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}:host(.segment-button-checked:hover) .button-native{color:var(--color-checked)}}::slotted(ion-icon){-ms-flex-negative:0;flex-shrink:0;-ms-flex-order:-1;order:-1;pointer-events:none}::slotted(ion-label){display:block;-ms-flex-item-align:center;align-self:center;line-height:22px;text-overflow:ellipsis;white-space:nowrap;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}:host(.segment-button-layout-icon-top) .button-native{-ms-flex-direction:column;flex-direction:column}:host(.segment-button-layout-icon-start) .button-native{-ms-flex-direction:row;flex-direction:row}:host(.segment-button-layout-icon-end) .button-native{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.segment-button-layout-icon-bottom) .button-native{-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.segment-button-layout-icon-hide) ::slotted(ion-icon){display:none}:host(.segment-button-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color, var(--color-checked))}.segment-button-indicator{-webkit-transform-origin:left;transform-origin:left;position:absolute;opacity:0;-webkit-box-sizing:border-box;box-sizing:border-box;will-change:transform, opacity;pointer-events:none}.segment-button-indicator-background{width:100%;height:var(--indicator-height);-webkit-transform:var(--indicator-transform);transform:var(--indicator-transform);-webkit-box-shadow:var(--indicator-box-shadow);box-shadow:var(--indicator-box-shadow);pointer-events:none}.segment-button-indicator-animated{-webkit-transition:var(--indicator-transition);transition:var(--indicator-transition)}:host(.segment-button-checked) .segment-button-indicator{opacity:1}@media (prefers-reduced-motion: reduce){.segment-button-indicator-background{-webkit-transform:none;transform:none}.segment-button-indicator-animated{-webkit-transition:none;transition:none}}:host{--background:none;--background-checked:none;--background-hover:var(--color-checked);--background-focused:var(--color-checked);--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04;--color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.6);--color-checked:var(--ion-color-primary, #3880ff);--indicator-box-shadow:none;--indicator-color:var(--color-checked);--indicator-height:2px;--indicator-transition:transform 250ms cubic-bezier(0.4, 0, 0.2, 1);--indicator-transform:none;--padding-top:0;--padding-end:16px;--padding-bottom:0;--padding-start:16px;--transition:color 0.15s linear 0s, opacity 0.15s linear 0s;min-width:90px;max-width:360px;min-height:48px;border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);font-size:14px;font-weight:500;letter-spacing:0.06em;line-height:40px;text-transform:uppercase}:host(.segment-button-disabled){opacity:0.3}:host(.in-segment-color){background:none;color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.6)}:host(.in-segment-color) ion-ripple-effect{color:var(--ion-color-base)}:host(.in-segment-color) .segment-button-indicator-background{background:var(--ion-color-base)}:host(.in-segment-color.segment-button-checked) .button-native{color:var(--ion-color-base)}:host(.in-segment-color.ion-focused) .button-native::after{background:var(--ion-color-base)}@media (any-hover: hover){:host(.in-segment-color:hover) .button-native{color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.6)}:host(.in-segment-color:hover) .button-native::after{background:var(--ion-color-base)}:host(.in-segment-color.segment-button-checked:hover) .button-native{color:var(--ion-color-base)}}:host(.in-toolbar:not(.in-segment-color)){--background:var(--ion-toolbar-segment-background, none);--background-checked:var(--ion-toolbar-segment-background-checked, none);--color:var(--ion-toolbar-segment-color, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.6));--color-checked:var(--ion-toolbar-segment-color-checked, var(--ion-color-primary, #3880ff));--indicator-color:var(--ion-toolbar-segment-color-checked, var(--color-checked))}:host(.in-toolbar-color:not(.in-segment-color)) .button-native{color:rgba(var(--ion-color-contrast-rgb), 0.6)}:host(.in-toolbar-color.segment-button-checked:not(.in-segment-color)) .button-native{color:var(--ion-color-contrast)}@media (any-hover: hover){:host(.in-toolbar-color:not(.in-segment-color)) .button-native::after{background:var(--ion-color-contrast)}}::slotted(ion-icon){margin-top:12px;margin-bottom:12px;font-size:24px}::slotted(ion-label){margin-top:12px;margin-bottom:12px}:host(.segment-button-layout-icon-top) ::slotted(ion-label),:host(.segment-button-layout-icon-bottom) ::slotted(ion-icon){margin-top:0}:host(.segment-button-layout-icon-top) ::slotted(ion-icon),:host(.segment-button-layout-icon-bottom) ::slotted(ion-label){margin-bottom:0}:host(.segment-button-layout-icon-start) ::slotted(ion-label){margin-left:8px;margin-right:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.segment-button-layout-icon-start) ::slotted(ion-label){margin-left:unset;margin-right:unset;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:0;margin-inline-end:0}}:host(.segment-button-layout-icon-end) ::slotted(ion-label){margin-left:0;margin-right:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.segment-button-layout-icon-end) ::slotted(ion-label){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px}}:host(.segment-button-has-icon-only) ::slotted(ion-icon){margin-top:12px;margin-bottom:12px}:host(.segment-button-has-label-only) ::slotted(ion-label){margin-top:12px;margin-bottom:12px}.segment-button-indicator{left:0;right:0;bottom:0}.segment-button-indicator-background{background:var(--indicator-color)}:host(.in-toolbar:not(.in-segment-color)) .segment-button-indicator-background{background:var(--ion-toolbar-segment-indicator-color, var(--indicator-color))}:host(.in-toolbar-color:not(.in-segment-color)) .segment-button-indicator-background{background:var(--ion-color-contrast)}'}}}]);