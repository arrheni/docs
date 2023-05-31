import{I as h,L as t,K as m,ad as H,H as M,d as F,n as N,P as C,Q as j,g as p,S as O,R as i,T as V,h as W,l as r,z as K,V as D,a3 as Q,bb as q,ai as G,bc as J,bd as U,be as X,bf as Y}from"./app-b2114602.js";import{d as Z,r as ee}from"./resolve-slot-1fe04be3.js";const oe=h("alert",`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`,[t("border",`
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `),m("closable",[h("alert-body",[t("title",`
 padding-right: 24px;
 `)])]),t("icon",{color:"var(--n-icon-color)"}),h("alert-body",{padding:"var(--n-padding)"},[t("title",{color:"var(--n-title-text-color)"}),t("content",{color:"var(--n-content-text-color)"})]),H({originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.9)"}}),t("icon",`
 position: absolute;
 left: 0;
 top: 0;
 align-items: center;
 justify-content: center;
 display: flex;
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 margin: var(--n-icon-margin);
 `),t("close",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `),m("show-icon",[h("alert-body",{paddingLeft:"calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))"})]),h("alert-body",`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[t("title",`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[M("& +",[t("content",{marginTop:"9px"})])]),t("content",{transition:"color .3s var(--n-bezier)",fontSize:"var(--n-font-size)"})]),t("icon",{transition:"color .3s var(--n-bezier)"})]),re=Object.assign(Object.assign({},C.props),{title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:"default"},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function}),le=F({name:"Alert",inheritAttrs:!1,props:re,setup(n){const{mergedClsPrefixRef:e,mergedBorderedRef:a,inlineThemeDisabled:b,mergedRtlRef:g}=N(n),d=C("Alert","-alert",oe,q,n,e),z=j("Alert",g,e),u=p(()=>{const{common:{cubicBezierEaseInOut:l},self:o}=d.value,{fontSize:y,borderRadius:I,titleFontWeight:R,lineHeight:A,iconSize:w,iconMargin:v,iconMarginRtl:P,closeIconSize:T,closeBorderRadius:$,closeSize:_,closeMargin:B,closeMarginRtl:S,padding:L}=o,{type:s}=n,{left:k,right:E}=O(v);return{"--n-bezier":l,"--n-color":o[i("color",s)],"--n-close-icon-size":T,"--n-close-border-radius":$,"--n-close-color-hover":o[i("closeColorHover",s)],"--n-close-color-pressed":o[i("closeColorPressed",s)],"--n-close-icon-color":o[i("closeIconColor",s)],"--n-close-icon-color-hover":o[i("closeIconColorHover",s)],"--n-close-icon-color-pressed":o[i("closeIconColorPressed",s)],"--n-icon-color":o[i("iconColor",s)],"--n-border":o[i("border",s)],"--n-title-text-color":o[i("titleTextColor",s)],"--n-content-text-color":o[i("contentTextColor",s)],"--n-line-height":A,"--n-border-radius":I,"--n-font-size":y,"--n-title-font-weight":R,"--n-icon-size":w,"--n-icon-margin":v,"--n-icon-margin-rtl":P,"--n-close-size":_,"--n-close-margin":B,"--n-close-margin-rtl":S,"--n-padding":L,"--n-icon-margin-left":k,"--n-icon-margin-right":E}}),c=b?V("alert",p(()=>n.type[0]),u,n):void 0,f=W(!0),x=()=>{const{onAfterLeave:l,onAfterHide:o}=n;l&&l(),o&&o()};return{rtlEnabled:z,mergedClsPrefix:e,mergedBordered:a,visible:f,handleCloseClick:()=>{var l;Promise.resolve((l=n.onClose)===null||l===void 0?void 0:l.call(n)).then(o=>{o!==!1&&(f.value=!1)})},handleAfterLeave:()=>{x()},mergedTheme:d,cssVars:b?void 0:u,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender}},render(){var n;return(n=this.onRender)===null||n===void 0||n.call(this),r(Q,{onAfterLeave:this.handleAfterLeave},{default:()=>{const{mergedClsPrefix:e,$slots:a}=this,b={class:[`${e}-alert`,this.themeClass,this.closable&&`${e}-alert--closable`,this.showIcon&&`${e}-alert--show-icon`,this.rtlEnabled&&`${e}-alert--rtl`],style:this.cssVars,role:"alert"};return this.visible?r("div",Object.assign({},K(this.$attrs,b)),this.closable&&r(D,{clsPrefix:e,class:`${e}-alert__close`,onClick:this.handleCloseClick}),this.bordered&&r("div",{class:`${e}-alert__border`}),this.showIcon&&r("div",{class:`${e}-alert__icon`,"aria-hidden":"true"},Z(a.icon,()=>[r(G,{clsPrefix:e},{default:()=>{switch(this.type){case"success":return r(Y,null);case"info":return r(X,null);case"warning":return r(U,null);case"error":return r(J,null);default:return null}}})])),r("div",{class:[`${e}-alert-body`,this.mergedBordered&&`${e}-alert-body--bordered`]},ee(a.header,g=>{const d=g||this.title;return d?r("div",{class:`${e}-alert-body__title`},d):null}),a.default&&r("div",{class:`${e}-alert-body__content`},a))):null}})}});export{le as N};