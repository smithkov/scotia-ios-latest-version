(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"22TP":function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=u("18Le"),i=u("ZZ/e"),o=u("AytR"),b=u("CUZT"),r=function(){function l(l,n,u,t,e,i){var b=this;this.auth=l,this.navCtrl=n,this.router=u,this.storage=t,this.loaderService=e,this.authenticationService=i,this.loaderService.showLoader("Loading ..."),this.photoUrl=o.a.photoUrl,this.authenticationService.getCurrentUser().then((function(l){b.authenticationService.getMessages(l).subscribe((function(n){b.loaderService.hideLoader(),b.messages=n.data,b.roleId=l.roleId}))}))}return l.prototype.ngOnInit=function(){},l.prototype.read=function(l){var n=this,u=JSON.stringify(l);l.hasRead?this.router.navigate(["pages/message-read",u]):this.authenticationService.markMessageAsRead(l.id).subscribe((function(l){console.log(l),n.router.navigate(["pages/message-read",u])}))},l.prototype.compose=function(){this.router.navigate(["/pages/compose"])},l}(),s=function(){return function(){}}(),c=u("pMnS"),a=u("oBZk"),p=u("Ip0R"),h=u("ZYCi"),g=u("iw74"),f=t.rb({encapsulation:0,styles:[".msg[_ngcontent-%COMP%] {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }",[""]],data:{}});function m(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,3,"ion-buttons",[["slot","end"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.compose()&&t),t}),a.U,a.f)),t.sb(1,49152,null,0,i.m,[t.h,t.k,t.z],null,null),(l()(),t.tb(2,0,null,0,1,"ion-icon",[["name","create"],["size","large"]],null,null,null,a.gb,a.r)),t.sb(3,49152,null,0,i.D,[t.h,t.k,t.z],{name:[0,"name"],size:[1,"size"]},null)],(function(l,n){l(n,3,0,"create","large")}),null)}function d(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,10,"ion-label",[],null,null,null,a.nb,a.y)),t.sb(1,49152,null,0,i.O,[t.h,t.k,t.z],null,null),(l()(),t.tb(2,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),t.Lb(3,null,["Sent by ",""])),(l()(),t.tb(4,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),t.Lb(5,null,["",""])),(l()(),t.tb(6,0,null,0,2,"h5",[["slot","end"]],null,null,null,null,null)),(l()(),t.Lb(7,null,["",""])),t.Hb(8,1),(l()(),t.tb(9,0,null,0,1,"h6",[["class","msg"]],null,null,null,null,null)),(l()(),t.Lb(10,null,["",""]))],null,(function(l,n){l(n,3,0,n.parent.context.$implicit.senderName),l(n,5,0,n.parent.context.$implicit.subject);var u=t.Mb(n,7,0,l(n,8,0,t.Fb(n.parent.parent,0),n.parent.context.$implicit.createdAt));l(n,7,0,u),l(n,10,0,n.parent.context.$implicit.message)}))}function k(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,14,"ion-label",[],null,null,null,a.nb,a.y)),t.sb(1,49152,null,0,i.O,[t.h,t.k,t.z],null,null),(l()(),t.tb(2,0,null,0,2,"h2",[],null,null,null,null,null)),(l()(),t.tb(3,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Lb(4,null,["Sent by ",""])),(l()(),t.tb(5,0,null,0,2,"h3",[],null,null,null,null,null)),(l()(),t.tb(6,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Lb(7,null,["",""])),(l()(),t.tb(8,0,null,0,3,"h5",[["slot","end"]],null,null,null,null,null)),(l()(),t.tb(9,0,null,null,2,"strong",[],null,null,null,null,null)),(l()(),t.Lb(10,null,["",""])),t.Hb(11,1),(l()(),t.tb(12,0,null,0,2,"h6",[["class","msg"]],null,null,null,null,null)),(l()(),t.tb(13,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Lb(14,null,["",""]))],null,(function(l,n){l(n,4,0,n.parent.context.$implicit.senderName),l(n,7,0,n.parent.context.$implicit.subject);var u=t.Mb(n,10,0,l(n,11,0,t.Fb(n.parent.parent,0),n.parent.context.$implicit.createdAt));l(n,10,0,u),l(n,14,0,n.parent.context.$implicit.message)}))}function v(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,8,"ion-item",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.read(l.context.$implicit)&&t),t}),a.mb,a.v)),t.sb(1,49152,null,0,i.I,[t.h,t.k,t.z],null,null),(l()(),t.tb(2,0,null,0,2,"ion-avatar",[["slot","start"]],null,null,null,a.Q,a.b)),t.sb(3,49152,null,0,i.g,[t.h,t.k,t.z],null,null),(l()(),t.tb(4,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),t.ib(16777216,null,0,1,null,d)),t.sb(6,16384,null,0,p.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,0,1,null,k)),t.sb(8,16384,null,0,p.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,6,0,n.context.$implicit.hasRead),l(n,8,0,!n.context.$implicit.hasRead)}),(function(l,n){l(n,4,0,t.xb(2,"",n.component.photoUrl,"",n.context.$implicit.senderPhoto,""))}))}function z(l){return t.Nb(0,[t.Gb(0,p.d,[t.u]),(l()(),t.tb(1,0,null,null,13,"ion-header",[],null,null,null,a.fb,a.q)),t.sb(2,49152,null,0,i.C,[t.h,t.k,t.z],null,null),(l()(),t.tb(3,0,null,0,11,"ion-toolbar",[["color","primary"]],null,null,null,a.Db,a.O)),t.sb(4,49152,null,0,i.Db,[t.h,t.k,t.z],{color:[0,"color"]},null),(l()(),t.tb(5,0,null,0,2,"ion-title",[],null,null,null,a.Cb,a.N)),t.sb(6,49152,null,0,i.Bb,[t.h,t.k,t.z],null,null),(l()(),t.Lb(-1,0,["Inbox"])),(l()(),t.tb(8,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,a.U,a.f)),t.sb(9,49152,null,0,i.m,[t.h,t.k,t.z],null,null),(l()(),t.tb(10,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Fb(l,12).onClick(u)&&e),e}),a.R,a.c)),t.sb(11,49152,null,0,i.h,[t.h,t.k,t.z],null,null),t.sb(12,16384,null,0,i.i,[[2,i.jb],i.Jb],null,null),(l()(),t.ib(16777216,null,0,1,null,m)),t.sb(14,16384,null,0,p.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.tb(15,0,null,null,9,"ion-content",[["fullscreen",""],["padding",""]],null,null,null,a.bb,a.m)),t.sb(16,49152,null,0,i.v,[t.h,t.k,t.z],{fullscreen:[0,"fullscreen"]},null),t.sb(17,16384,null,0,i.e,[t.k],null,null),(l()(),t.tb(18,0,null,0,6,"ion-list",[],null,null,null,a.pb,a.z)),t.sb(19,49152,null,0,i.P,[t.h,t.k,t.z],null,null),(l()(),t.tb(20,0,null,0,2,"ion-list-header",[],null,null,null,a.ob,a.A)),t.sb(21,49152,null,0,i.Q,[t.h,t.k,t.z],null,null),(l()(),t.Lb(-1,0,[" Messages "])),(l()(),t.ib(16777216,null,0,1,null,v)),t.sb(24,278528,null,0,p.i,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,4,0,"primary"),l(n,14,0,!u.roleId),l(n,16,0,""),l(n,24,0,u.messages)}),null)}function L(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,1,"app-messages",[],null,null,null,z,f)),t.sb(1,114688,null,0,r,[e.a,i.Jb,h.m,g.b,b.a,e.a],null,null)],(function(l,n){l(n,1,0)}),null)}var x=t.pb("app-messages",r,L,{},{},[]),D=u("gIcY");u.d(n,"MessagesPageModuleNgFactory",(function(){return I}));var I=t.qb(s,[],(function(l){return t.Cb([t.Db(512,t.j,t.bb,[[8,[c.a,x]],[3,t.j],t.x]),t.Db(4608,p.l,p.k,[t.u,[2,p.r]]),t.Db(4608,D.l,D.l,[]),t.Db(4608,i.c,i.c,[t.z,t.g]),t.Db(4608,i.Ib,i.Ib,[i.c,t.j,t.q]),t.Db(4608,i.Nb,i.Nb,[i.c,t.j,t.q]),t.Db(1073742336,p.b,p.b,[]),t.Db(1073742336,D.k,D.k,[]),t.Db(1073742336,D.b,D.b,[]),t.Db(1073742336,i.Fb,i.Fb,[]),t.Db(1073742336,h.o,h.o,[[2,h.t],[2,h.m]]),t.Db(1073742336,s,s,[]),t.Db(1024,h.k,(function(){return[[{path:"",component:r}]]}),[])])}))}}]);