(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{MOUs:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J"),i=u("mrSG"),a=u("w+IE"),o=u("18Le"),t=u("gREL"),r=u("CUZT"),b=u("JAFY"),s=u("ZZ/e");class d{constructor(l,n,u,e,i){this.authenticationService=l,this.loaderService=n,this.router=u,this.modalCtrl=e,this.alertService=i,this.authenticationService.getCurrentUser().then(l=>{this.userId=l.id,this.authenticationService.getApplication().then(l=>{l&&(this.hasAppliedSel=l.hasApplied,this.purpose=l.purpose,this.reasonOfRefusal=l.reasonOfRefusal,this.moreInfo=l.moreInfo,this.id=l.id)})}),this.authenticationService.getData().then(l=>{this.data=l})}ngOnInit(){}getHasApplied(l){this.hasApplied=l.target.text}showModal(){return i.b(this,void 0,void 0,(function*(){const l=yield this.modalCtrl.create({component:b.a});l.onDidDismiss().then(l=>{void 0!==l.data&&(this.data=l.data)}),yield l.present()}))}save(l){this.loaderService.showLoader("Saving ...");let n=new a.a;n.courseId=this.data.id,n.moreInfo=l.value.moreInfo,n.purpose=l.value.purpose,n.hasApplied=l.value.hasApplied,n.reasonOfRefusal=l.value.reasonOfRefusal,n.userId=this.userId,n.applicationId=this.id,this.authenticationService.form5(n).subscribe(l=>{l.isError?this.alertService.presentToast("Something went wrong!"):(this.loaderService.hideLoader(),this.router.navigate(["pages/uploadForm"]))})}}class g{}var h=u("pMnS"),p=u("oBZk"),c=u("s7LF"),f=u("SVse"),m=u("iInd"),v=e.pb({encapsulation:0,styles:["[_ngcontent-%COMP%]:root {\n    --ion-safe-area-top: 20px;\n    --ion-safe-area-bottom: 22px;\n  }",[""]],data:{}});function C(l){return e.Lb(0,[(l()(),e.rb(0,0,null,null,11,"ion-card",[["class","ion-padding"],["color","primary"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.showModal()&&e),e}),p.V,p.g)),e.qb(1,49152,null,0,s.n,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.rb(2,0,null,0,7,"ion-card-header",[],null,null,null,p.S,p.i)),e.qb(3,49152,null,0,s.p,[e.h,e.k,e.x],null,null),(l()(),e.rb(4,0,null,0,2,"ion-card-subtitle",[],null,null,null,p.T,p.j)),e.qb(5,49152,null,0,s.q,[e.h,e.k,e.x],null,null),(l()(),e.Jb(6,0,["",""])),(l()(),e.rb(7,0,null,0,2,"ion-card-title",[],null,null,null,p.U,p.k)),e.qb(8,49152,null,0,s.r,[e.h,e.k,e.x],null,null),(l()(),e.Jb(9,0,["",""])),(l()(),e.rb(10,0,null,0,1,"div",[["class","ion-text-center"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,[" (Tap to change course) "]))],(function(l,n){l(n,1,0,"primary")}),(function(l,n){var u=n.component;l(n,6,0,u.data.name),l(n,9,0,u.data.Institution.name)}))}function D(l){return e.Lb(0,[(l()(),e.rb(0,0,null,null,11,"ion-header",[],null,null,null,p.bb,p.q)),e.qb(1,49152,null,0,s.C,[e.h,e.k,e.x],null,null),(l()(),e.rb(2,0,null,0,9,"ion-toolbar",[["color","primary"]],null,null,null,p.vb,p.K)),e.qb(3,49152,null,0,s.Db,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.rb(4,0,null,0,2,"ion-title",[],null,null,null,p.ub,p.J)),e.qb(5,49152,null,0,s.Bb,[e.h,e.k,e.x],null,null),(l()(),e.Jb(-1,0,["Visa History"])),(l()(),e.rb(7,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,p.Q,p.f)),e.qb(8,49152,null,0,s.m,[e.h,e.k,e.x],null,null),(l()(),e.rb(9,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==e.Db(l,11).onClick(u)&&i),i}),p.N,p.c)),e.qb(10,49152,null,0,s.h,[e.h,e.k,e.x],null,null),e.qb(11,16384,null,0,s.i,[[2,s.jb],s.Jb],null,null),(l()(),e.rb(12,0,null,null,73,"ion-content",[["fullscreen",""],["padding",""]],null,null,null,p.X,p.m)),e.qb(13,49152,null,0,s.v,[e.h,e.k,e.x],{fullscreen:[0,"fullscreen"]},null),e.qb(14,16384,null,0,s.e,[e.k],null,null),(l()(),e.rb(15,0,null,0,70,"form",[["method","post"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var i=!0,a=l.component;return"submit"===n&&(i=!1!==e.Db(l,17).onSubmit(u)&&i),"reset"===n&&(i=!1!==e.Db(l,17).onReset()&&i),"ngSubmit"===n&&(i=!1!==a.save(e.Db(l,17))&&i),i}),null,null)),e.qb(16,16384,null,0,c.m,[],null,null),e.qb(17,4210688,[["form",4]],0,c.h,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),e.Gb(2048,null,c.a,null,[c.h]),e.qb(19,16384,null,0,c.g,[[4,c.a]],null,null),(l()(),e.rb(20,0,null,null,57,"ion-list",[["class","ion-no-margin ion-no-padding"],["lines","full"]],null,null,null,p.jb,p.x)),e.qb(21,49152,null,0,s.P,[e.h,e.k,e.x],{lines:[0,"lines"]},null),(l()(),e.rb(22,0,null,0,19,"ion-item",[],null,null,null,p.gb,p.t)),e.qb(23,49152,null,0,s.I,[e.h,e.k,e.x],null,null),(l()(),e.rb(24,0,null,0,2,"ion-label",[],null,null,null,p.hb,p.w)),e.qb(25,49152,null,0,s.O,[e.h,e.k,e.x],null,null),(l()(),e.Jb(-1,0,["Have you applied for a UK VISA before?"])),(l()(),e.rb(27,0,null,0,14,"ion-select",[["name","hasApplied"],["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(l,n,u){var i=!0,a=l.component;return"ionBlur"===n&&(i=!1!==e.Db(l,30)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==e.Db(l,30)._handleChangeEvent(u.target)&&i),"ngModelChange"===n&&(i=!1!==(a.hasAppliedSel=u)&&i),"ionChange"===n&&(i=!1!==a.getHasApplied(u)&&i),i}),p.qb,p.E)),e.qb(28,16384,null,0,c.j,[],{required:[0,"required"]},null),e.Gb(1024,null,c.c,(function(l){return[l]}),[c.j]),e.qb(30,16384,null,0,s.Ob,[e.k],null,null),e.Gb(1024,null,c.d,(function(l){return[l]}),[s.Ob]),e.qb(32,671744,null,0,c.i,[[2,c.a],[6,c.c],[8,null],[6,c.d]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Gb(2048,null,c.e,null,[c.i]),e.qb(34,16384,null,0,c.f,[[4,c.e]],null,null),e.qb(35,49152,null,0,s.ob,[e.h,e.k,e.x],{name:[0,"name"],selectedText:[1,"selectedText"]},null),(l()(),e.rb(36,0,null,0,2,"ion-select-option",[["value","Yes"]],null,null,null,p.pb,p.F)),e.qb(37,49152,null,0,s.pb,[e.h,e.k,e.x],{value:[0,"value"]},null),(l()(),e.Jb(-1,0,[" Yes "])),(l()(),e.rb(39,0,null,0,2,"ion-select-option",[["value","No"]],null,null,null,p.pb,p.F)),e.qb(40,49152,null,0,s.pb,[e.h,e.k,e.x],{value:[0,"value"]},null),(l()(),e.Jb(-1,0,[" No "])),(l()(),e.rb(42,0,null,0,11,"ion-item",[],null,null,null,p.gb,p.t)),e.qb(43,49152,null,0,s.I,[e.h,e.k,e.x],null,null),(l()(),e.rb(44,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,p.hb,p.w)),e.qb(45,49152,null,0,s.O,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Jb(-1,0,["If yes, purpose of travel"])),(l()(),e.rb(47,0,null,0,6,"ion-textarea",[["name","purpose"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var i=!0,a=l.component;return"ionBlur"===n&&(i=!1!==e.Db(l,48)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==e.Db(l,48)._handleInputEvent(u.target)&&i),"ngModelChange"===n&&(i=!1!==(a.purpose=u)&&i),i}),p.tb,p.I)),e.qb(48,16384,null,0,s.Pb,[e.k],null,null),e.Gb(1024,null,c.d,(function(l){return[l]}),[s.Pb]),e.qb(50,671744,null,0,c.i,[[2,c.a],[8,null],[8,null],[6,c.d]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Gb(2048,null,c.e,null,[c.i]),e.qb(52,16384,null,0,c.f,[[4,c.e]],null,null),e.qb(53,49152,null,0,s.zb,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.rb(54,0,null,0,11,"ion-item",[],null,null,null,p.gb,p.t)),e.qb(55,49152,null,0,s.I,[e.h,e.k,e.x],null,null),(l()(),e.rb(56,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,p.hb,p.w)),e.qb(57,49152,null,0,s.O,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Jb(-1,0,["If visa refused, reasons of visa refusal"])),(l()(),e.rb(59,0,null,0,6,"ion-textarea",[["name","reasonOfRefusal"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var i=!0,a=l.component;return"ionBlur"===n&&(i=!1!==e.Db(l,60)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==e.Db(l,60)._handleInputEvent(u.target)&&i),"ngModelChange"===n&&(i=!1!==(a.reasonOfRefusal=u)&&i),i}),p.tb,p.I)),e.qb(60,16384,null,0,s.Pb,[e.k],null,null),e.Gb(1024,null,c.d,(function(l){return[l]}),[s.Pb]),e.qb(62,671744,null,0,c.i,[[2,c.a],[8,null],[8,null],[6,c.d]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Gb(2048,null,c.e,null,[c.i]),e.qb(64,16384,null,0,c.f,[[4,c.e]],null,null),e.qb(65,49152,null,0,s.zb,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.rb(66,0,null,0,11,"ion-item",[],null,null,null,p.gb,p.t)),e.qb(67,49152,null,0,s.I,[e.h,e.k,e.x],null,null),(l()(),e.rb(68,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,p.hb,p.w)),e.qb(69,49152,null,0,s.O,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Jb(-1,0,["More Information"])),(l()(),e.rb(71,0,null,0,6,"ion-textarea",[["name","moreInfo"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var i=!0,a=l.component;return"ionBlur"===n&&(i=!1!==e.Db(l,72)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==e.Db(l,72)._handleInputEvent(u.target)&&i),"ngModelChange"===n&&(i=!1!==(a.moreInfo=u)&&i),i}),p.tb,p.I)),e.qb(72,16384,null,0,s.Pb,[e.k],null,null),e.Gb(1024,null,c.d,(function(l){return[l]}),[s.Pb]),e.qb(74,671744,null,0,c.i,[[2,c.a],[8,null],[8,null],[6,c.d]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Gb(2048,null,c.e,null,[c.i]),e.qb(76,16384,null,0,c.f,[[4,c.e]],null,null),e.qb(77,49152,null,0,s.zb,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.gb(16777216,null,null,1,null,C)),e.qb(79,16384,null,0,f.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.rb(80,0,null,null,5,"ion-toolbar",[],null,null,null,p.vb,p.K)),e.qb(81,49152,null,0,s.Db,[e.h,e.k,e.x],null,null),(l()(),e.rb(82,0,null,0,3,"div",[["class","ion-padding"]],null,null,null,null,null)),(l()(),e.rb(83,0,null,null,2,"ion-button",[["class","ion-no-margin"],["expand","block"],["type","submit"]],null,null,null,p.P,p.e)),e.qb(84,49152,null,0,s.l,[e.h,e.k,e.x],{disabled:[0,"disabled"],expand:[1,"expand"],type:[2,"type"]},null),(l()(),e.Jb(-1,0,["Save"]))],(function(l,n){var u=n.component;l(n,3,0,"primary"),l(n,13,0,""),l(n,21,0,"full"),l(n,28,0,""),l(n,32,0,"hasApplied",u.hasAppliedSel),l(n,35,0,"hasApplied",u.hasAppliedSel),l(n,37,0,"Yes"),l(n,40,0,"No"),l(n,45,0,"floating"),l(n,50,0,"purpose",u.purpose),l(n,53,0,"purpose"),l(n,57,0,"floating"),l(n,62,0,"reasonOfRefusal",u.reasonOfRefusal),l(n,65,0,"reasonOfRefusal"),l(n,69,0,"floating"),l(n,74,0,"moreInfo",u.moreInfo),l(n,77,0,"moreInfo"),l(n,79,0,u.data),l(n,84,0,e.Db(n,17).invalid,"block","submit")}),(function(l,n){l(n,15,0,e.Db(n,19).ngClassUntouched,e.Db(n,19).ngClassTouched,e.Db(n,19).ngClassPristine,e.Db(n,19).ngClassDirty,e.Db(n,19).ngClassValid,e.Db(n,19).ngClassInvalid,e.Db(n,19).ngClassPending),l(n,27,0,e.Db(n,28).required?"":null,e.Db(n,34).ngClassUntouched,e.Db(n,34).ngClassTouched,e.Db(n,34).ngClassPristine,e.Db(n,34).ngClassDirty,e.Db(n,34).ngClassValid,e.Db(n,34).ngClassInvalid,e.Db(n,34).ngClassPending),l(n,47,0,e.Db(n,52).ngClassUntouched,e.Db(n,52).ngClassTouched,e.Db(n,52).ngClassPristine,e.Db(n,52).ngClassDirty,e.Db(n,52).ngClassValid,e.Db(n,52).ngClassInvalid,e.Db(n,52).ngClassPending),l(n,59,0,e.Db(n,64).ngClassUntouched,e.Db(n,64).ngClassTouched,e.Db(n,64).ngClassPristine,e.Db(n,64).ngClassDirty,e.Db(n,64).ngClassValid,e.Db(n,64).ngClassInvalid,e.Db(n,64).ngClassPending),l(n,71,0,e.Db(n,76).ngClassUntouched,e.Db(n,76).ngClassTouched,e.Db(n,76).ngClassPristine,e.Db(n,76).ngClassDirty,e.Db(n,76).ngClassValid,e.Db(n,76).ngClassInvalid,e.Db(n,76).ngClassPending)}))}function q(l){return e.Lb(0,[(l()(),e.rb(0,0,null,null,1,"app-forth-form",[],null,null,null,D,v)),e.qb(1,114688,null,0,d,[o.a,r.a,m.m,s.Ib,t.a],null,null)],(function(l,n){l(n,1,0)}),null)}var k=e.nb("app-forth-form",d,q,{},{},[]);u.d(n,"ForthFormPageModuleNgFactory",(function(){return I}));var I=e.ob(g,[],(function(l){return e.Ab([e.Bb(512,e.j,e.Z,[[8,[h.a,k]],[3,e.j],e.v]),e.Bb(4608,f.l,f.k,[e.s,[2,f.r]]),e.Bb(4608,c.l,c.l,[]),e.Bb(4608,s.c,s.c,[e.x,e.g]),e.Bb(4608,s.Ib,s.Ib,[s.c,e.j,e.p]),e.Bb(4608,s.Mb,s.Mb,[s.c,e.j,e.p]),e.Bb(1073742336,f.b,f.b,[]),e.Bb(1073742336,c.k,c.k,[]),e.Bb(1073742336,c.b,c.b,[]),e.Bb(1073742336,s.Fb,s.Fb,[]),e.Bb(1073742336,m.o,m.o,[[2,m.t],[2,m.m]]),e.Bb(1073742336,g,g,[]),e.Bb(1024,m.k,(function(){return[[{path:"",component:d}]]}),[])])}))}}]);