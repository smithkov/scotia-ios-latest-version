(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{MOUs:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=u("mrSG"),o=u("w+IE"),i=u("18Le"),a=u("gREL"),s=u("CUZT"),b=u("JAFY"),r=u("ZZ/e"),d=function(){function l(l,n,u,e,t){var o=this;this.authenticationService=l,this.loaderService=n,this.router=u,this.modalCtrl=e,this.alertService=t,this.authenticationService.getCurrentUser().then((function(l){o.userId=l.id,o.authenticationService.getApplication().then((function(l){l&&(o.hasAppliedSel=l.hasApplied,o.purpose=l.purpose,o.reasonOfRefusal=l.reasonOfRefusal,o.moreInfo=l.moreInfo,o.id=l.id)}))})),this.authenticationService.getData().then((function(l){o.data=l}))}return l.prototype.ngOnInit=function(){},l.prototype.getHasApplied=function(l){this.hasApplied=l.target.text},l.prototype.showModal=function(){return t.b(this,void 0,void 0,(function(){var l,n=this;return t.e(this,(function(u){switch(u.label){case 0:return[4,this.modalCtrl.create({component:b.a})];case 1:return(l=u.sent()).onDidDismiss().then((function(l){void 0!==l.data&&(n.data=l.data)})),[4,l.present()];case 2:return u.sent(),[2]}}))}))},l.prototype.save=function(l){var n=this;this.loaderService.showLoader("Saving ...");var u=new o.a;u.courseId=this.data.id,u.moreInfo=l.value.moreInfo,u.purpose=l.value.purpose,u.hasApplied=l.value.hasApplied,u.reasonOfRefusal=l.value.reasonOfRefusal,u.userId=this.userId,u.applicationId=this.id,this.authenticationService.form5(u).subscribe((function(l){l.isError?n.alertService.presentToast("Something went wrong!"):(n.loaderService.hideLoader(),n.router.navigate(["pages/uploadForm"]))}))},l}(),g=function(){return function(){}}(),c=u("pMnS"),p=u("oBZk"),h=u("gIcY"),f=u("Ip0R"),m=u("ZYCi"),v=e.rb({encapsulation:0,styles:["[_ngcontent-%COMP%]:root {\n    --ion-safe-area-top: 20px;\n    --ion-safe-area-bottom: 22px;\n  }",[""]],data:{}});function C(l){return e.Nb(0,[(l()(),e.tb(0,0,null,null,11,"ion-card",[["class","ion-padding"],["color","primary"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.showModal()&&e),e}),p.V,p.g)),e.sb(1,49152,null,0,r.n,[e.h,e.k,e.z],{color:[0,"color"]},null),(l()(),e.tb(2,0,null,0,7,"ion-card-header",[],null,null,null,p.S,p.i)),e.sb(3,49152,null,0,r.p,[e.h,e.k,e.z],null,null),(l()(),e.tb(4,0,null,0,2,"ion-card-subtitle",[],null,null,null,p.T,p.j)),e.sb(5,49152,null,0,r.q,[e.h,e.k,e.z],null,null),(l()(),e.Lb(6,0,["",""])),(l()(),e.tb(7,0,null,0,2,"ion-card-title",[],null,null,null,p.U,p.k)),e.sb(8,49152,null,0,r.r,[e.h,e.k,e.z],null,null),(l()(),e.Lb(9,0,["",""])),(l()(),e.tb(10,0,null,0,1,"div",[["class","ion-text-center"]],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" (Tap to change course) "]))],(function(l,n){l(n,1,0,"primary")}),(function(l,n){var u=n.component;l(n,6,0,u.data.name),l(n,9,0,u.data.Institution.name)}))}function F(l){return e.Nb(0,[(l()(),e.tb(0,0,null,null,11,"ion-header",[],null,null,null,p.bb,p.q)),e.sb(1,49152,null,0,r.C,[e.h,e.k,e.z],null,null),(l()(),e.tb(2,0,null,0,9,"ion-toolbar",[["color","primary"]],null,null,null,p.vb,p.K)),e.sb(3,49152,null,0,r.Db,[e.h,e.k,e.z],{color:[0,"color"]},null),(l()(),e.tb(4,0,null,0,2,"ion-title",[],null,null,null,p.ub,p.J)),e.sb(5,49152,null,0,r.Bb,[e.h,e.k,e.z],null,null),(l()(),e.Lb(-1,0,["Visa History"])),(l()(),e.tb(7,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,p.Q,p.f)),e.sb(8,49152,null,0,r.m,[e.h,e.k,e.z],null,null),(l()(),e.tb(9,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Fb(l,11).onClick(u)&&t),t}),p.N,p.c)),e.sb(10,49152,null,0,r.h,[e.h,e.k,e.z],null,null),e.sb(11,16384,null,0,r.i,[[2,r.jb],r.Jb],null,null),(l()(),e.tb(12,0,null,null,73,"ion-content",[["fullscreen",""],["padding",""]],null,null,null,p.X,p.m)),e.sb(13,49152,null,0,r.v,[e.h,e.k,e.z],{fullscreen:[0,"fullscreen"]},null),e.sb(14,16384,null,0,r.e,[e.k],null,null),(l()(),e.tb(15,0,null,0,70,"form",[["method","post"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var t=!0,o=l.component;return"submit"===n&&(t=!1!==e.Fb(l,17).onSubmit(u)&&t),"reset"===n&&(t=!1!==e.Fb(l,17).onReset()&&t),"ngSubmit"===n&&(t=!1!==o.save(e.Fb(l,17))&&t),t}),null,null)),e.sb(16,16384,null,0,h.m,[],null,null),e.sb(17,4210688,[["form",4]],0,h.h,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),e.Ib(2048,null,h.a,null,[h.h]),e.sb(19,16384,null,0,h.g,[[4,h.a]],null,null),(l()(),e.tb(20,0,null,null,57,"ion-list",[["class","ion-no-margin ion-no-padding"],["lines","full"]],null,null,null,p.jb,p.x)),e.sb(21,49152,null,0,r.P,[e.h,e.k,e.z],{lines:[0,"lines"]},null),(l()(),e.tb(22,0,null,0,19,"ion-item",[],null,null,null,p.gb,p.t)),e.sb(23,49152,null,0,r.I,[e.h,e.k,e.z],null,null),(l()(),e.tb(24,0,null,0,2,"ion-label",[],null,null,null,p.hb,p.w)),e.sb(25,49152,null,0,r.O,[e.h,e.k,e.z],null,null),(l()(),e.Lb(-1,0,["Have you applied for a UK VISA before?"])),(l()(),e.tb(27,0,null,0,14,"ion-select",[["name","hasApplied"],["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(l,n,u){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==e.Fb(l,30)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Fb(l,30)._handleChangeEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(o.hasAppliedSel=u)&&t),"ionChange"===n&&(t=!1!==o.getHasApplied(u)&&t),t}),p.qb,p.E)),e.sb(28,16384,null,0,h.j,[],{required:[0,"required"]},null),e.Ib(1024,null,h.c,(function(l){return[l]}),[h.j]),e.sb(30,16384,null,0,r.Ob,[e.k],null,null),e.Ib(1024,null,h.d,(function(l){return[l]}),[r.Ob]),e.sb(32,671744,null,0,h.i,[[2,h.a],[6,h.c],[8,null],[6,h.d]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Ib(2048,null,h.e,null,[h.i]),e.sb(34,16384,null,0,h.f,[[4,h.e]],null,null),e.sb(35,49152,null,0,r.ob,[e.h,e.k,e.z],{name:[0,"name"],selectedText:[1,"selectedText"]},null),(l()(),e.tb(36,0,null,0,2,"ion-select-option",[["value","Yes"]],null,null,null,p.pb,p.F)),e.sb(37,49152,null,0,r.pb,[e.h,e.k,e.z],{value:[0,"value"]},null),(l()(),e.Lb(-1,0,[" Yes "])),(l()(),e.tb(39,0,null,0,2,"ion-select-option",[["value","No"]],null,null,null,p.pb,p.F)),e.sb(40,49152,null,0,r.pb,[e.h,e.k,e.z],{value:[0,"value"]},null),(l()(),e.Lb(-1,0,[" No "])),(l()(),e.tb(42,0,null,0,11,"ion-item",[],null,null,null,p.gb,p.t)),e.sb(43,49152,null,0,r.I,[e.h,e.k,e.z],null,null),(l()(),e.tb(44,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,p.hb,p.w)),e.sb(45,49152,null,0,r.O,[e.h,e.k,e.z],{position:[0,"position"]},null),(l()(),e.Lb(-1,0,["If yes, purpose of travel"])),(l()(),e.tb(47,0,null,0,6,"ion-textarea",[["name","purpose"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==e.Fb(l,48)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Fb(l,48)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(o.purpose=u)&&t),t}),p.tb,p.I)),e.sb(48,16384,null,0,r.Pb,[e.k],null,null),e.Ib(1024,null,h.d,(function(l){return[l]}),[r.Pb]),e.sb(50,671744,null,0,h.i,[[2,h.a],[8,null],[8,null],[6,h.d]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Ib(2048,null,h.e,null,[h.i]),e.sb(52,16384,null,0,h.f,[[4,h.e]],null,null),e.sb(53,49152,null,0,r.zb,[e.h,e.k,e.z],{name:[0,"name"]},null),(l()(),e.tb(54,0,null,0,11,"ion-item",[],null,null,null,p.gb,p.t)),e.sb(55,49152,null,0,r.I,[e.h,e.k,e.z],null,null),(l()(),e.tb(56,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,p.hb,p.w)),e.sb(57,49152,null,0,r.O,[e.h,e.k,e.z],{position:[0,"position"]},null),(l()(),e.Lb(-1,0,["If visa refused, reasons of visa refusal"])),(l()(),e.tb(59,0,null,0,6,"ion-textarea",[["name","reasonOfRefusal"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==e.Fb(l,60)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Fb(l,60)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(o.reasonOfRefusal=u)&&t),t}),p.tb,p.I)),e.sb(60,16384,null,0,r.Pb,[e.k],null,null),e.Ib(1024,null,h.d,(function(l){return[l]}),[r.Pb]),e.sb(62,671744,null,0,h.i,[[2,h.a],[8,null],[8,null],[6,h.d]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Ib(2048,null,h.e,null,[h.i]),e.sb(64,16384,null,0,h.f,[[4,h.e]],null,null),e.sb(65,49152,null,0,r.zb,[e.h,e.k,e.z],{name:[0,"name"]},null),(l()(),e.tb(66,0,null,0,11,"ion-item",[],null,null,null,p.gb,p.t)),e.sb(67,49152,null,0,r.I,[e.h,e.k,e.z],null,null),(l()(),e.tb(68,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,p.hb,p.w)),e.sb(69,49152,null,0,r.O,[e.h,e.k,e.z],{position:[0,"position"]},null),(l()(),e.Lb(-1,0,["More Information"])),(l()(),e.tb(71,0,null,0,6,"ion-textarea",[["name","moreInfo"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==e.Fb(l,72)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Fb(l,72)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(o.moreInfo=u)&&t),t}),p.tb,p.I)),e.sb(72,16384,null,0,r.Pb,[e.k],null,null),e.Ib(1024,null,h.d,(function(l){return[l]}),[r.Pb]),e.sb(74,671744,null,0,h.i,[[2,h.a],[8,null],[8,null],[6,h.d]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Ib(2048,null,h.e,null,[h.i]),e.sb(76,16384,null,0,h.f,[[4,h.e]],null,null),e.sb(77,49152,null,0,r.zb,[e.h,e.k,e.z],{name:[0,"name"]},null),(l()(),e.ib(16777216,null,null,1,null,C)),e.sb(79,16384,null,0,f.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.tb(80,0,null,null,5,"ion-toolbar",[],null,null,null,p.vb,p.K)),e.sb(81,49152,null,0,r.Db,[e.h,e.k,e.z],null,null),(l()(),e.tb(82,0,null,0,3,"div",[["class","ion-padding"]],null,null,null,null,null)),(l()(),e.tb(83,0,null,null,2,"ion-button",[["class","ion-no-margin"],["expand","block"],["type","submit"]],null,null,null,p.P,p.e)),e.sb(84,49152,null,0,r.l,[e.h,e.k,e.z],{disabled:[0,"disabled"],expand:[1,"expand"],type:[2,"type"]},null),(l()(),e.Lb(-1,0,["Save"]))],(function(l,n){var u=n.component;l(n,3,0,"primary"),l(n,13,0,""),l(n,21,0,"full"),l(n,28,0,""),l(n,32,0,"hasApplied",u.hasAppliedSel),l(n,35,0,"hasApplied",u.hasAppliedSel),l(n,37,0,"Yes"),l(n,40,0,"No"),l(n,45,0,"floating"),l(n,50,0,"purpose",u.purpose),l(n,53,0,"purpose"),l(n,57,0,"floating"),l(n,62,0,"reasonOfRefusal",u.reasonOfRefusal),l(n,65,0,"reasonOfRefusal"),l(n,69,0,"floating"),l(n,74,0,"moreInfo",u.moreInfo),l(n,77,0,"moreInfo"),l(n,79,0,u.data),l(n,84,0,e.Fb(n,17).invalid,"block","submit")}),(function(l,n){l(n,15,0,e.Fb(n,19).ngClassUntouched,e.Fb(n,19).ngClassTouched,e.Fb(n,19).ngClassPristine,e.Fb(n,19).ngClassDirty,e.Fb(n,19).ngClassValid,e.Fb(n,19).ngClassInvalid,e.Fb(n,19).ngClassPending),l(n,27,0,e.Fb(n,28).required?"":null,e.Fb(n,34).ngClassUntouched,e.Fb(n,34).ngClassTouched,e.Fb(n,34).ngClassPristine,e.Fb(n,34).ngClassDirty,e.Fb(n,34).ngClassValid,e.Fb(n,34).ngClassInvalid,e.Fb(n,34).ngClassPending),l(n,47,0,e.Fb(n,52).ngClassUntouched,e.Fb(n,52).ngClassTouched,e.Fb(n,52).ngClassPristine,e.Fb(n,52).ngClassDirty,e.Fb(n,52).ngClassValid,e.Fb(n,52).ngClassInvalid,e.Fb(n,52).ngClassPending),l(n,59,0,e.Fb(n,64).ngClassUntouched,e.Fb(n,64).ngClassTouched,e.Fb(n,64).ngClassPristine,e.Fb(n,64).ngClassDirty,e.Fb(n,64).ngClassValid,e.Fb(n,64).ngClassInvalid,e.Fb(n,64).ngClassPending),l(n,71,0,e.Fb(n,76).ngClassUntouched,e.Fb(n,76).ngClassTouched,e.Fb(n,76).ngClassPristine,e.Fb(n,76).ngClassDirty,e.Fb(n,76).ngClassValid,e.Fb(n,76).ngClassInvalid,e.Fb(n,76).ngClassPending)}))}function I(l){return e.Nb(0,[(l()(),e.tb(0,0,null,null,1,"app-forth-form",[],null,null,null,F,v)),e.sb(1,114688,null,0,d,[i.a,s.a,m.m,r.Ib,a.a],null,null)],(function(l,n){l(n,1,0)}),null)}var k=e.pb("app-forth-form",d,I,{},{},[]);u.d(n,"ForthFormPageModuleNgFactory",(function(){return z}));var z=e.qb(g,[],(function(l){return e.Cb([e.Db(512,e.j,e.bb,[[8,[c.a,k]],[3,e.j],e.x]),e.Db(4608,f.l,f.k,[e.u,[2,f.r]]),e.Db(4608,h.l,h.l,[]),e.Db(4608,r.c,r.c,[e.z,e.g]),e.Db(4608,r.Ib,r.Ib,[r.c,e.j,e.q]),e.Db(4608,r.Mb,r.Mb,[r.c,e.j,e.q]),e.Db(1073742336,f.b,f.b,[]),e.Db(1073742336,h.k,h.k,[]),e.Db(1073742336,h.b,h.b,[]),e.Db(1073742336,r.Fb,r.Fb,[]),e.Db(1073742336,m.o,m.o,[[2,m.t],[2,m.m]]),e.Db(1073742336,g,g,[]),e.Db(1024,m.k,(function(){return[[{path:"",component:d}]]}),[])])}))}}]);