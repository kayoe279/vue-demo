webpackJsonp([17],{"3Cn5":function(t,e){},"4ml/":function(t,e){},N7dC:function(t,e){},NHnr:function(t,e,n){"use strict";function o(t){n("cQBd")}function i(t){return new U.a(function(e,n){t.then(function(t){e(t.data)}).catch(function(t){n(t)})})}function s(t){n("x5g5")}function a(t){n("3Cn5")}function r(t){n("vkQF")}function c(t){n("N7dC")}Object.defineProperty(e,"__esModule",{value:!0});var u=n("7+uW"),l={name:"app",created:function(){console.log(window.navigator.userAgent)}},d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},h=[],f={render:d,staticRenderFns:h},p=f,m=n("VU/8"),v=o,g=m(l,p,!1,v,null,null),w=g.exports,x=n("/ocq");u.a.use(x.a);var b=new x.a({routes:[{path:"/",alias:"/index",name:"Index",component:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"eerB"))}},{path:"/first",name:"First",component:function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"SVnx"))},redirect:"/first/firstTwo/firstThree",children:[{path:"/first/firstTwo",name:"FirstTwo",component:function(){return n.e(11).then(n.bind(null,"MzQn"))},children:[{path:"/first/firstTwo/firstThree",name:"FirstThree",component:function(){return n.e(14).then(n.bind(null,"yCWg"))}},{path:"/first/firstTwo/secondThree",name:"SecondThree",component:function(){return n.e(12).then(n.bind(null,"hI4b"))}}]},{path:"/first/secondTwo",name:"SecondTwo",component:function(){return n.e(1).then(n.bind(null,"n9eD"))}}]},{path:"/second",name:"Second",component:function(){return n.e(4).then(n.bind(null,"Sqle"))},children:[{path:"/second/secondTwo",name:"SecondTwo2",component:function(){return n.e(1).then(n.bind(null,"n9eD"))}}]},{path:"/waterfall",name:"waterfall",component:function(){return n.e(8).then(n.bind(null,"tgq5"))}},{path:"/testPage",name:"testPage",component:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"M1IH"))}},{path:"/vantTest",name:"vantTest",component:function(){return n.e(3).then(n.bind(null,"vRI5"))}},{path:"/popupTest",name:"popupTest",component:function(){return n.e(10).then(n.bind(null,"Hssq"))}},{path:"/loadingTest",name:"loadingTest",component:function(){return n.e(13).then(n.bind(null,"QWsa"))}},{path:"/toastTest",name:"toastTest",component:function(){return n.e(9).then(n.bind(null,"OtBN"))}},{path:"/modalTest",name:"modalTest",component:function(){return n.e(7).then(n.bind(null,"xJiH"))}},{path:"*",component:function(){return n.e(15).then(n.bind(null,"f2KA"))},hidden:!0}]}),C=n("NYxO"),y=n("424j");u.a.use(C.a);var T=new C.a.Store({state:{title:"默认标题",count:0,List:[],userInfo:{UserId:"Add_user_2019111900171",UserName:"海沧区",OfficeId:"350205",OfficeName:"海沧区",DepartmentId:"350205",DepartmentName:null,Token:"FB03CB543F9E5ABEC9549C24F91B5419"}},getters:{getTitle:function(t){return t.title},getCount:function(t){return t.count||0},getList:function(t){return t.List},getUserInfo:function(t){return t.userInfo||{}}},mutations:{setTitle:function(t,e){t.title=e},increment:function(t,e){t.count+=e},setList:function(t,e){t.List.push(e)},clearList:function(t){t.count=0,t.List=[]},setUserInfo:function(t,e){t.userInfo=e||{}}},actions:{invokeList:function(t,e){t.commit("setList",e)},clearList:function(t){t.commit("clearList")}},plugins:[Object(y.a)()]}),k=(n("l/Ws"),n("yh13"),n("mtWM")),S=n.n(k),$={env:"production",debug:!1};$.host=$.debug?"http://27.154.228.202:6661/":"";var _=$,D={},I={StoragePrefix:"cg_evaluate_",CookiePrefix:"cg_evaluate_",CookieExpires:"2h"};D.getData=function(t,e,n,o,i){i=i||{},i.headers=i.headers||{};var s={"Content-Type":i.headers.contentType||"application/x-www-form-urlencoded"};t.$store.getters.getUserInfo.UserId&&(s.UserId=t.$store.getters.getUserInfo.UserId),window.cbsrn&&window.cbsrn.native&&t.$store.getters.getUserInfo.DeviceId&&(s.MobileDeviceId=t.$store.getters.getUserInfo.DeviceId);var a=_.buildHttpUrl,r=-1==e.indexOf("https://")&&-1==e.indexOf("http://")?a+e:e,c=new FormData;for(var u in n)c.append(u,n[u]);S()({method:i.type||"POST",url:r,data:c||{},timeout:i.timeout||3e4,headers:s}).then(function(e){if(200==e.status){if(e.data&&1001==e.data.ErrorCode&&window.cbsrn&&window.cbsrn.native)return D.hideLoading(t),window.cbsrn.toast(e.data.ErrorMessage||"同一个账号只能登录一台设备"),void window.cbsrn.logout();"function"==typeof o&&o(e.data)}else"function"==typeof o&&o({ErrorCode:-1,ErrorMessage:"(请求错误代码"+e.status+")"})}).catch(function(e){console.log(e),D.hideLoading(t)})},D.route=function(t,e){t.$router.push(e)},D.setTitle=function(t){document.title=t,window.cbsrn&&window.cbsrn.native&&cbsrn.setNavTitle(t||"")},D.getHost=function(){return _.buildHttpUrl},D.getfileUrlById=function(t){return D.getHost()+"/system/file/download?Id="+t},D.getCookie=function(t,e){return t.$cookie.get(I.CookiePrefix+e)},D.setCookie=function(t,e,n){t.$cookie.set(I.CookiePrefix+e,n,{expires:I.CookieExpires})},D.deleteCookie=function(t,e){t.$cookie.delete(I.CookiePrefix+e)},D.getStorage=function(t){return localStorage.getItem(I.StoragePrefix+t)},D.setStorage=function(t,e){localStorage.setItem(I.StoragePrefix+t,e)},D.removeStorage=function(t){localStorage.removeItem(I.StoragePrefix+t)},D.dateTransformerFromDateStr=function(t){var e=null;if(t){var n=parseInt(t.replace("/Date(","").replace(")/",""));isNaN(n)||(e=new Date(n))}return e||""},D.dateFormatter=function(t,e){var n={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));for(var o in n)new RegExp("("+o+")").test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?n[o]:("00"+n[o]).substr((""+n[o]).length)));return e},D.dateTransformerFromDateStr=function(t){var e=null;if(t){var n=parseInt(t.replace("/Date(","").replace("(/",""));isNaN(n)||(e=new Date(n))}return e||""},D.getQueryString=function(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)"),n=window.location.search.substr(1).match(e);return null!=n?decodeURI(n[2]):null},D.getRandomStr=function(t){t=t||32;for(var e="",n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",o=0;o<t;o++){e+=n[Math.floor(n.length*Math.random())]}return e},D.isAndroid=function(){var t=navigator.userAgent;return t.indexOf("Android")>-1||t.indexOf("Adr")>-1},D.isIOS=function(){return!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)},D.blurResetScroll=function(){setTimeout(function(){var t=document.documentElement.scrollTop||document.body.scrollTop||0;window.scrollTo(0,Math.max(t-1,0))},100)},D.toast=function(t,e){u.a&&(u.a.$vux.toast.hide(),t=t||{},"string"==typeof t&&(t={text:t}),t.isShowMask=t.isShowMask||!1,t.type=t.type||"text",t.time=t.time||800,t.position=t.position||"middle",u.a.$vux.toast.show(t),e&&e instanceof Function&&setTimeout(e,t.time))},D.showLoading=function(t){u.a&&(t=t||{},"string"==typeof t&&(t={text:t}),u.a.$vux.loading.show({text:t.text||"正在加载"}))},D.hideLoading=function(){u.a&&u.a.$vux.loading.hide()},D.alert=function(t){u.a&&(t=t||{},"string"==typeof t&&(t={content:t}),u.a.$vux.alert.show({title:t.title||"提示",buttonText:t.buttonText||"",content:t.content||"",onShow:function(){t.onShow instanceof Function&&t.onShow()},onHide:function(){t.onHide instanceof Function&&t.onHide()}}))},D.confirm=function(t){u.a&&(t=t||{},"string"==typeof t&&(t={content:t}),u.a.$vux.confirm.show({title:t.title||"提示",content:t.content||"",onConfirm:function(){t.onConfirm instanceof Function&&t.onConfirm()},onCancel:function(){t.onCancel instanceof Function&&t.onCancel()}}))};var R=D,M=n("//Fk"),U=n.n(M),P=_.buildHttpUrl,L=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i(S()({method:"get",url:P+t,params:e}))},E=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i(S()({method:"post",url:P+t,data:e}))},F=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i(S()({method:"post",url:P+t,transformRequest:function(t){var e=[];for(var n in t)e.push(encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e.join("&")},headers:{"Content-Type":"application/x-www-form-urlencoded"},data:e}))},O={get:L,post:E,ajaxPost:F},B=n("fZjL"),N=n.n(B),H=(n("mw3O"),function(t){return/(http|https):\/\/([\w.]+\/?)\S*/.test(t)}),z=function(t,e){var n="";return N()(e).forEach(function(t){n+=t+"="+e[t]+"&"}),t+"?"+n.substr(0,n.length-1)},A=S.a.create({timeout:3e4});A.interceptors.request.use(function(t){var e=T.state.token,n=T.getters.getUserInfo.UserId||"";return e&&(t.headers.token=e),n&&(t.headers.UserId=n),t},function(t){return U.a.error(t)}),A.interceptors.response.use(function(t){var e=t.status,n=t.data,o=n.ErrorCode,i=n.ErrorMessage;return 200==e?(R.hideLoading(),0!==o&&R.toast(i),U.a.resolve(t)):(R.hideLoading(),R.toast("请求失败:"+e),U.a.reject(t))},function(t){if(R.hideLoading(),/timeout\sof\s\d+ms\sexceeded/.test(t.message)&&R.toast("网络出了点问题，请稍后重试！"),t.response)switch(t.response.status){case 404:R.toast("请求的资源不存在！");break;case 500:R.toast("内部错误，请稍后重试！");break;case 503:R.toast("服务器正在维护，请稍等！")}return U.a.reject(t)});var V=function(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};o.headers=o.headers||{};var i={"Content-Type":o.headers.ContentType||"application/x-www-form-urlencoded"},s=new FormData;for(var a in e)s.append(a,e[a]);var r=H(t)?t:_.host+(0==t.indexOf("/")?t:"/"+t);return new U.a(function(t,e){A({url:r,data:s,method:n,headers:i}).then(function(e){t(e.data)}).catch(function(t){e(t)})})},j=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return V(z(t,e),{},"GET",n)},q=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return V(t,e,"POST",n)},Q={get:j,post:q},W=n("Fd2+"),Y=(n("4ml/"),Boolean,String,Boolean,Boolean,Number,String,String,String,{name:"vPopup",props:{value:{type:Boolean,default:!1},mode:{type:String,default:"left"},mask:{type:Boolean,default:!0},maskCloseAble:{type:Boolean,default:!0},borderRadius:{type:[Number,String],default:0},width:{type:String,default:""},height:{type:String,default:""}},data:function(){return{visibleSync:!1,showDrawer:!1,timer:null}},computed:{showMask:function(){return this.showDrawer&&this.mask},style:function(){var t={};if("left"==this.mode||"right"==this.mode?t={width:this.width?this.getUnitValue(this.width):"auto","max-width":"80%",height:"100%",transform:"translate3D("+("left"==this.mode?"-100%":"100%")+",0px,0px)"}:"top"!=this.mode&&"bottom"!=this.mode||(t={width:"100%","max-height":"80%",height:this.height?this.getUnitValue(this.height):"auto",transform:"translate3D(0px,"+("top"==this.mode?"-100%":"100%")+",0px)"}),this.borderRadius){switch(this.mode){case"left":t.borderRadius="0 "+this.borderRadius+"px "+this.borderRadius+"px 0";break;case"top":t.borderRadius="0 0 "+this.borderRadius+"px "+this.borderRadius+"px";break;case"right":t.borderRadius=this.borderRadius+"px 0 0 "+this.borderRadius+"px";break;case"bottom":t.borderRadius=this.borderRadius+"px "+this.borderRadius+"px 0 0"}t.overflow="hidden"}return t},centerStyle:function(){var t={width:this.width?this.getUnitValue(this.width):"auto",height:this.height?this.getUnitValue(this.height):"auto","max-width":"80%","max-height":"80%"};return this.borderRadius&&(t.borderRadius=this.borderRadius+"px",t.overflow="hidden"),t}},watch:{value:function(t){t?this.open():this.close()}},methods:{getUnitValue:function(t){return/(%|px|auto)$/.test(t)?t:t+"px"},maskClick:function(){this.maskCloseAble&&this.close()},close:function(){this.showDrawer=!1,this.$emit("input",!1),this.$emit("close")},modeCenterClose:function(t){"center"==t&&this.maskCloseAble&&this.close()},open:function(){this.showDrawer=!0,this.$emit("open")}}}),J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"v-drawer"},[n("div",{staticClass:"v-mask",class:{"v-mask-show":t.showMask},on:{click:t.maskClick,touchmove:function(t){t.stopPropagation(),t.preventDefault()}}}),t._v(" "),n("div",{staticClass:"v-drawer-content",class:[t.showDrawer?"v-drawer-content-visible":"","v-drawer-"+t.mode],style:[t.style],on:{click:function(e){return t.modeCenterClose(t.mode)},touchmove:function(t){t.stopPropagation(),t.preventDefault()},tap:function(t){t.stopPropagation(),t.preventDefault()}}},["center"==t.mode?n("div",{staticClass:"v-mode-center-box",class:"center"==t.mode?"v-animation-zoom":"",style:[t.centerStyle],on:{tap:function(t){t.stopPropagation(),t.preventDefault()},touchmove:function(t){t.stopPropagation(),t.preventDefault()}}},[n("div",{staticClass:"v-drawer_scroll-view"},[t._t("default")],2)]):n("div",{staticClass:"v-drawer_scroll-view"},[t._t("default")],2)])])},G=[],K={render:J,staticRenderFns:G},X=K,Z=n("VU/8"),tt=s,et=Z(Y,X,!1,tt,"data-v-ac76a41e",null),nt=et.exports,ot=n("woOf"),it=n.n(ot),st=n("pFYg"),at=n.n(st),rt={name:"vLoading",data:function(){return{theme:"light",show:!1,title:"",type:"loading",color:"#c7c7c7",size:"50"}},computed:{cricleStyle:function(){var t={};return"circle"==this.type?(t.width=parseInt(.8*this.size)+"px",t.height=parseInt(.8*this.size)+"px",t.borderColor="#e4e4e4 #e4e4e4 #e4e4e4 "+(this.color?this.color:"#c7c7c7")):"warning"==this.type?(t.width=parseInt(.8*this.size)+"px",t.height=parseInt(.8*this.size)+"px"):(t.width=this.size+"px",t.height=this.size+"px"),t}},methods:{showLoading:function(){this.show=!0},hideLoading:function(){this.show=!1},setDefaultOptions:function(){it()(this.$data,this.$options.data())}}},ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("div",{staticClass:"v-loading-wrap",on:{touchmove:function(t){t.stopPropagation(),t.preventDefault()}}},[n("div",{staticClass:"v-loading-box",class:[t.title?"title":"",t.theme]},[n("div",{staticClass:"v-loading",class:"v-loading-"+t.type,style:[t.cricleStyle]}),t._v(" "),t.title?n("div",{staticClass:"v-loading-title"},[t._v(t._s(t.title))]):t._e()])]):t._e()},ut=[],lt={render:ct,staticRenderFns:ut},dt=lt,ht=n("VU/8"),ft=a,pt=ht(rt,dt,!1,ft,"data-v-b0968116",null),mt=pt.exports,vt=void 0,gt=function(t,e){var n=t.extend(mt);vt||(vt=new n,vt.vm=vt.$mount(),document.body.appendChild(vt.vm.$el));var o={showLoading:function(t,n){if(vt.setDefaultOptions(),"string"==typeof t)vt.title=t;else if("object"===(void 0===t?"undefined":at()(t))){t=it()({},t,e);var o=t,i=o.theme,s=o.title,a=o.type,r=o.size,c=o.color;i&&(vt.theme=i),s&&(vt.title=s),a&&(vt.type=a),r&&(vt.size=r),c&&(vt.color=c)}vt.show=!0,"function"==typeof n&&n()},hideLoading:function(t){vt.show=!1,"function"==typeof t&&t()}};t.prototype.$loading=o},wt={install:gt},xt={name:"vToast",data:function(){return{show:!1,showToast:!1,title:"",position:"middle",type:"toast",duration:1500}},computed:{toastMode:function(){return("top"==this.position||"bottom"==this.position)&&"success"!=this.type&&"warning"!=this.type}},methods:{setDefaultOptions:function(){it()(this.$data,this.$options.data())}},watch:{show:function(t){var e=this;t?this.$nextTick(function(){setTimeout(function(){e.showToast=!0},50)}):this.showToast=!1}}},bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"v-toast-wrap",on:{touchmove:function(t){t.stopPropagation(),t.preventDefault()}}},[n("div",{staticClass:"v-toast-box",class:[t.showToast?"v-toast-box-show":"",t.toastMode?"v-toast-box-"+t.position:"v-toast-common"]},["success"==t.type||"warning"==t.type?n("div",{staticClass:"v-toast",class:"v-toast-"+t.type}):t._e(),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}],staticClass:"v-toast-title",class:{limitTitle:"success"==t.type||"warning"==t.type}},[t._v(t._s(t.title))])])])},Ct=[],yt={render:bt,staticRenderFns:Ct},Tt=yt,kt=n("VU/8"),St=r,$t=kt(xt,Tt,!1,St,"data-v-3f045777",null),_t=$t.exports,Dt=void 0,It=void 0,Rt=function(t,e){var n=t.extend(_t);Dt||(Dt=new n,Dt.vm=Dt.$mount(),document.body.appendChild(Dt.vm.$el));var o=function(t,n){It&&(clearTimeout(It),It=null,Dt.setDefaultOptions());var o=1500;if("string"==typeof t)Dt.title=t;else if("object"===(void 0===t?"undefined":at()(t))){t=it()({},t,e);var i=t,s=i.title,a=i.type,r=i.size,c=i.duration,u=i.position;s&&(Dt.title=s),a&&(Dt.type=a),r&&(Dt.size=r),u&&(Dt.position=u),c&&(Dt.duration=c,o=c)}Dt.show=!0,"function"==typeof n&&n(),It=setTimeout(function(){Dt.showToast=!1,setTimeout(function(){Dt.show=!1},100)},o)};t.prototype.$toast=o},Mt={install:Rt},Ut=n("Dd8w"),Pt=n.n(Ut),Lt={name:"vModal",data:function(){return{showModal:!1,mask:!0,maskCloseAble:!1,title:"提示",content:"内容",showTitle:!0,showConfirmButton:!0,showCancelButton:!1,confirmText:"确认",cancelText:"取消",confirmColor:"#2979ff",cancelColor:"#606266",confirmStyle:{},cancelStyle:{},width:"260px",borderRadius:6,asyncClose:!1,loading:!1}},computed:{showMask:function(){return this.showModal&&this.mask},isContentHtml:function(){return/<\/?[\s\S]*?(?:".*")*>/g.test(this.content)},centerStyle:function(){var t={width:this.width?this.getUnitValue(this.width):"auto","min-width":"260px","max-width":"300px"};return this.borderRadius&&(t.borderRadius=this.borderRadius+"px",t.overflow="hidden"),t},quxiaoStyle:function(){return Pt()({},this.cancelStyle,{color:this.cancelColor})},querenStyle:function(){return Pt()({},this.confirmStyle,{color:this.confirmColor})}},methods:{getUnitValue:function(t){return/(%|px|auto)$/.test(t)?t:t+"px"},maskClick:function(){this.maskCloseAble&&this.cancel()},confirm:function(){this.showModal=!1},cancel:function(){this.showModal=!1},setDefaultOptions:function(){it()(this.$data,this.$options.data())}}},Et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"v-modal-wrap"},[n("div",{staticClass:"v-mask",class:{"v-mask-show":t.showMask},on:{click:t.maskClick,touchmove:function(t){t.stopPropagation(),t.preventDefault()}}}),t._v(" "),n("div",{staticClass:"v-modal-box",class:[t.showModal?"v-modal-box-visible":""],on:{touchmove:function(t){t.stopPropagation(),t.preventDefault()},click:function(e){return e.stopPropagation(),t.maskClick(e)}}},[n("div",{staticClass:"v-modal v-animation-zoom",style:t.centerStyle},[t.showTitle?n("div",{staticClass:"v-modal-title"},[t._v(t._s(t.title))]):t._e(),t._v(" "),n("div",{staticClass:"v-modal-content"},[t.isContentHtml?n("div",{staticClass:"v-modal-content-meeeage",domProps:{innerHTML:t._s(t.content)}}):n("div",{staticClass:"v-modal-content-meeeage"},[t._v(t._s(t.content))])]),t._v(" "),n("div",{staticClass:"v-modal-footer"},[t.showCancelButton?n("div",{staticClass:"v-modal-footer-button",style:t.quxiaoStyle,attrs:{type:"default"},on:{click:function(e){return e.stopPropagation(),t.cancel(e)}}},[t._v(t._s(t.cancelText))]):t._e(),t._v(" "),t.showConfirmButton?n("div",{staticClass:"v-modal-footer-button confirm-btn",style:t.querenStyle,on:{click:function(e){return e.stopPropagation(),t.confirm(e)}}},[t.loading?n("span",{staticClass:"asyncLoading",style:{"border-color":t.confirmColor+" "+t.confirmColor+" "+t.confirmColor+" #8f8d8e"}}):n("span",[t._v(t._s(t.confirmText))])]):t._e()])])])])},Ft=[],Ot={render:Et,staticRenderFns:Ft},Bt=Ot,Nt=n("VU/8"),Ht=c,zt=Nt(Lt,Bt,!1,Ht,"data-v-a343b958",null),At=zt.exports,Vt=void 0,jt=function(t,e){var n=t.extend(At);Vt||(Vt=new n,Vt.vm=Vt.$mount(),document.body.appendChild(Vt.vm.$el));var o=function(t){return new U.a(function(n,o){if(Vt.setDefaultOptions(),"object"!==(void 0===t?"undefined":at()(t)))console.error("请传入对象");else{t=it()({},t,e);for(var i in t)void 0!=Vt[i]&&"function"!=typeof Vt[i]&&(Vt[i]=t[i]);Vt.confirm=function(){Vt.asyncClose?Vt.loading=!0:Vt.showModal=!1,"function"==typeof t.confirm&&t.confirm(),n()},Vt.cancel=function(){Vt.showModal=!1,"function"==typeof t.cancel?t.cancel():o()}}Vt.showModal=!0})};o.close=function(){Vt.showModal=!1},o.clearLoading=function(){Vt.loading=!1},t.prototype.$modal=o},qt={install:jt},Qt=wt,Wt=Mt,Yt=qt;u.a.use(W.a),u.a.component("v-popup",nt),u.a.use(Qt).use(Wt).use(Yt),u.a.config.productionTip=!1,u.a.prototype.$utils=R,u.a.prototype.$api=O,u.a.prototype.$ajax=Q,new u.a({router:b,store:T,render:function(t){return t(w)}}).$mount("#app-box"),b.beforeEach(function(t,e,n){"/first"==t.path&&"/"==e.path&&n(),0===t.matched.length?n(e.name?{name:e.name}:"/error"):n()})},cQBd:function(t,e){},"l/Ws":function(t,e){!function(){function t(){e.style.fontSize=100*e.getBoundingClientRect().width/750+"px"}var e=document.documentElement;window.addEventListener("resize",t),t()}()},vkQF:function(t,e){},x5g5:function(t,e){},yh13:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.157eff3ac5b7069edce9.js.map