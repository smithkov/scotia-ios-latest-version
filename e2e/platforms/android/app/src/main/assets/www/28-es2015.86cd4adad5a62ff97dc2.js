(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"0m3x":function(l,n,u){"use strict";u.r(n);var e=u("8Y7J"),o=u("18Le"),r=u("AytR"),t=u("9B/o");class a{constructor(l,n,u){this.router=l,this.iab=n,this.authenticationService=u,this.selectedPath="",this.router.events.subscribe(l=>{this.selectedPath=l.url})}ngOnInit(){this.authenticationService.getCurrentUser().then(l=>{this.username=l.username,this.roleId=l.roleId,this.photoUrl=l.photo?r.a.photoUrl+l.photo:r.a.defaultPhoto})}openBrowser(){this.iab.create("https://scotstudy.co.uk")}logout(){this.authenticationService.logout()}}class i{}var b=u("pMnS"),c=u("oBZk"),d=u("ZZ/e"),s=u("iInd"),h=u("SVse"),m=e.pb({encapsulation:0,styles:[[".active-item[_ngcontent-%COMP%]{border-left:8px solid var(--ion-color-primary)}#menu-avatar[_ngcontent-%COMP%]   .icon-badge[_ngcontent-%COMP%]{top:0;right:0;background:#ff5d5d;color:#fff;font-size:12px;position:absolute;padding:5px 8px;border-radius:15px}#menu-avatar[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%]{padding:.5em}#menu-avatar[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%], #menu-avatar[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#fff;font-weight:700}#menu-avatar[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{background:0 0}#menu-avatar[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]{background:linear-gradient(48deg,rgba(157,72,173,.8) 0,rgba(157,72,173,.86) 28%,rgba(0,168,168,.98) 93%,#00a8a8 100%)}#menu-avatar[_ngcontent-%COMP%]   .menu-inner[_ngcontent-%COMP%]{background:rgba(255,255,255,.3)}.head[_ngcontent-%COMP%]{--background:#3880ff;--color:#3880ff}"]],data:{}});function g(l){return e.Lb(0,[(l()(),e.rb(0,0,null,null,10,"ion-menu-toggle",[["auto-hide","false"]],null,null,null,c.lb,c.B)),e.qb(1,49152,null,0,d.T,[e.h,e.k,e.x],null,null),(l()(),e.rb(2,0,null,0,8,"ion-item",[["routerDirection","forward"],["routerLink","/pages/compose"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==e.Db(l,4).onClick()&&o),"click"===n&&(o=!1!==e.Db(l,5).onClick(u)&&o),o}),c.gb,c.t)),e.qb(3,49152,null,0,d.I,[e.h,e.k,e.x],{routerDirection:[0,"routerDirection"]},null),e.qb(4,16384,null,0,s.n,[s.m,s.a,[8,null],e.B,e.k],{routerLink:[0,"routerLink"]},null),e.qb(5,737280,null,0,d.Nb,[h.h,d.Jb,e.k,s.m,[2,s.n]],{routerDirection:[0,"routerDirection"]},null),(l()(),e.rb(6,0,null,0,1,"ion-icon",[["name","create"],["slot","start"]],null,null,null,c.cb,c.r)),e.qb(7,49152,null,0,d.D,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.rb(8,0,null,0,2,"ion-label",[],null,null,null,c.hb,c.w)),e.qb(9,49152,null,0,d.O,[e.h,e.k,e.x],null,null),(l()(),e.Jb(-1,0,[" Compose "]))],(function(l,n){l(n,3,0,"forward"),l(n,4,0,"/pages/compose"),l(n,5,0,"forward"),l(n,7,0,"create")}),null)}function k(l){return e.Lb(0,[(l()(),e.rb(0,0,null,null,99,"ion-split-pane",[],null,null,null,c.rb,c.G)),e.qb(1,49152,null,0,d.ub,[e.h,e.k,e.x],null,null),(l()(),e.rb(2,0,null,0,95,"ion-menu",[["contentId","content"]],null,null,null,c.mb,c.z)),e.qb(3,49152,null,0,d.R,[e.h,e.k,e.x],{contentId:[0,"contentId"]},null),(l()(),e.rb(4,0,null,0,6,"ion-header",[],null,null,null,c.bb,c.q)),e.qb(5,49152,null,0,d.C,[e.h,e.k,e.x],null,null),(l()(),e.rb(6,0,null,0,4,"ion-toolbar",[["color","primary"]],null,null,null,c.vb,c.K)),e.qb(7,49152,null,0,d.Db,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.rb(8,0,null,0,2,"ion-title",[],null,null,null,c.ub,c.J)),e.qb(9,49152,null,0,d.Bb,[e.h,e.k,e.x],null,null),(l()(),e.Jb(-1,0,["Menu"])),(l()(),e.rb(11,0,null,0,86,"ion-content",[],null,null,null,c.X,c.m)),e.qb(12,49152,null,0,d.v,[e.h,e.k,e.x],null,null),(l()(),e.rb(13,0,null,0,18,"div",[["class","head"]],null,null,null,null,null)),(l()(),e.rb(14,0,null,null,13,"ion-row",[["style","align-items:center;"]],null,null,null,c.nb,c.C)),e.qb(15,49152,null,0,d.kb,[e.h,e.k,e.x],null,null),(l()(),e.rb(16,0,null,0,1,"ion-col",[["col-3",""]],null,null,null,c.W,c.l)),e.qb(17,49152,null,0,d.u,[e.h,e.k,e.x],null,null),(l()(),e.rb(18,0,null,0,6,"ion-col",[["col-6",""]],null,null,null,c.W,c.l)),e.qb(19,49152,null,0,d.u,[e.h,e.k,e.x],null,null),(l()(),e.rb(20,0,null,0,4,"ion-avatar",[["routerDirection","forward"],["routerLink","/pages/photo"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==e.Db(l,22).onClick()&&o),"click"===n&&(o=!1!==e.Db(l,23).onClick(u)&&o),o}),c.M,c.b)),e.qb(21,49152,null,0,d.g,[e.h,e.k,e.x],null,null),e.qb(22,16384,null,0,s.n,[s.m,s.a,[8,null],e.B,e.k],{routerLink:[0,"routerLink"]},null),e.qb(23,737280,null,0,d.Nb,[h.h,d.Jb,e.k,s.m,[2,s.n]],{routerDirection:[0,"routerDirection"]},null),(l()(),e.rb(24,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),e.rb(25,0,null,0,2,"ion-col",[["col-3",""]],null,null,null,c.W,c.l)),e.qb(26,49152,null,0,d.u,[e.h,e.k,e.x],null,null),(l()(),e.rb(27,0,null,0,0,"img",[["src",""]],null,null,null,null,null)),(l()(),e.rb(28,0,null,null,3,"ion-row",[["style","justify-content: center;"]],null,null,null,c.nb,c.C)),e.qb(29,49152,null,0,d.kb,[e.h,e.k,e.x],null,null),(l()(),e.rb(30,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),e.Jb(31,null,["",""])),(l()(),e.rb(32,0,null,0,65,"ion-list",[],null,null,null,c.jb,c.x)),e.qb(33,49152,null,0,d.P,[e.h,e.k,e.x],null,null),(l()(),e.rb(34,0,null,0,10,"ion-menu-toggle",[["auto-hide","false"]],null,null,null,c.lb,c.B)),e.qb(35,49152,null,0,d.T,[e.h,e.k,e.x],null,null),(l()(),e.rb(36,0,null,0,8,"ion-item",[["routerDirection","forward"],["routerLink","/pages/dashboard"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==e.Db(l,38).onClick()&&o),"click"===n&&(o=!1!==e.Db(l,39).onClick(u)&&o),o}),c.gb,c.t)),e.qb(37,49152,null,0,d.I,[e.h,e.k,e.x],{routerDirection:[0,"routerDirection"]},null),e.qb(38,16384,null,0,s.n,[s.m,s.a,[8,null],e.B,e.k],{routerLink:[0,"routerLink"]},null),e.qb(39,737280,null,0,d.Nb,[h.h,d.Jb,e.k,s.m,[2,s.n]],{routerDirection:[0,"routerDirection"]},null),(l()(),e.rb(40,0,null,0,1,"ion-icon",[["name","home"],["slot","start"]],null,null,null,c.cb,c.r)),e.qb(41,49152,null,0,d.D,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.rb(42,0,null,0,2,"ion-label",[],null,null,null,c.hb,c.w)),e.qb(43,49152,null,0,d.O,[e.h,e.k,e.x],null,null),(l()(),e.Jb(-1,0,[" Home "])),(l()(),e.gb(16777216,null,0,1,null,g)),e.qb(46,16384,null,0,h.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.rb(47,0,null,0,10,"ion-menu-toggle",[["auto-hide","false"]],null,null,null,c.lb,c.B)),e.qb(48,49152,null,0,d.T,[e.h,e.k,e.x],null,null),(l()(),e.rb(49,0,null,0,8,"ion-item",[["routerDirection","forward"],["routerLink","/pages/message-sent"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==e.Db(l,51).onClick()&&o),"click"===n&&(o=!1!==e.Db(l,52).onClick(u)&&o),o}),c.gb,c.t)),e.qb(50,49152,null,0,d.I,[e.h,e.k,e.x],{routerDirection:[0,"routerDirection"]},null),e.qb(51,16384,null,0,s.n,[s.m,s.a,[8,null],e.B,e.k],{routerLink:[0,"routerLink"]},null),e.qb(52,737280,null,0,d.Nb,[h.h,d.Jb,e.k,s.m,[2,s.n]],{routerDirection:[0,"routerDirection"]},null),(l()(),e.rb(53,0,null,0,1,"ion-icon",[["name","arrow-round-forward"],["slot","start"]],null,null,null,c.cb,c.r)),e.qb(54,49152,null,0,d.D,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.rb(55,0,null,0,2,"ion-label",[],null,null,null,c.hb,c.w)),e.qb(56,49152,null,0,d.O,[e.h,e.k,e.x],null,null),(l()(),e.Jb(-1,0,[" Sent Messages "])),(l()(),e.rb(58,0,null,0,10,"ion-menu-toggle",[["auto-hide","false"]],null,null,null,c.lb,c.B)),e.qb(59,49152,null,0,d.T,[e.h,e.k,e.x],null,null),(l()(),e.rb(60,0,null,0,8,"ion-item",[["routerDirection","forward"],["routerLink","/pages/help"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==e.Db(l,62).onClick()&&o),"click"===n&&(o=!1!==e.Db(l,63).onClick(u)&&o),o}),c.gb,c.t)),e.qb(61,49152,null,0,d.I,[e.h,e.k,e.x],{routerDirection:[0,"routerDirection"]},null),e.qb(62,16384,null,0,s.n,[s.m,s.a,[8,null],e.B,e.k],{routerLink:[0,"routerLink"]},null),e.qb(63,737280,null,0,d.Nb,[h.h,d.Jb,e.k,s.m,[2,s.n]],{routerDirection:[0,"routerDirection"]},null),(l()(),e.rb(64,0,null,0,1,"ion-icon",[["name","help"],["slot","start"]],null,null,null,c.cb,c.r)),e.qb(65,49152,null,0,d.D,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.rb(66,0,null,0,2,"ion-label",[],null,null,null,c.hb,c.w)),e.qb(67,49152,null,0,d.O,[e.h,e.k,e.x],null,null),(l()(),e.Jb(-1,0,[" Help "])),(l()(),e.rb(69,0,null,0,10,"ion-menu-toggle",[["auto-hide","false"]],null,null,null,c.lb,c.B)),e.qb(70,49152,null,0,d.T,[e.h,e.k,e.x],null,null),(l()(),e.rb(71,0,null,0,8,"ion-item",[["routerDirection","forward"],["routerLink","/pages/checklist"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==e.Db(l,73).onClick()&&o),"click"===n&&(o=!1!==e.Db(l,74).onClick(u)&&o),o}),c.gb,c.t)),e.qb(72,49152,null,0,d.I,[e.h,e.k,e.x],{routerDirection:[0,"routerDirection"]},null),e.qb(73,16384,null,0,s.n,[s.m,s.a,[8,null],e.B,e.k],{routerLink:[0,"routerLink"]},null),e.qb(74,737280,null,0,d.Nb,[h.h,d.Jb,e.k,s.m,[2,s.n]],{routerDirection:[0,"routerDirection"]},null),(l()(),e.rb(75,0,null,0,1,"ion-icon",[["name","done-all"],["slot","start"]],null,null,null,c.cb,c.r)),e.qb(76,49152,null,0,d.D,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.rb(77,0,null,0,2,"ion-label",[],null,null,null,c.hb,c.w)),e.qb(78,49152,null,0,d.O,[e.h,e.k,e.x],null,null),(l()(),e.Jb(-1,0,[" Checklist "])),(l()(),e.rb(80,0,null,0,8,"ion-menu-toggle",[["auto-hide","false"]],null,null,null,c.lb,c.B)),e.qb(81,49152,null,0,d.T,[e.h,e.k,e.x],null,null),(l()(),e.rb(82,0,null,0,6,"ion-item",[],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.openBrowser()&&e),e}),c.gb,c.t)),e.qb(83,49152,null,0,d.I,[e.h,e.k,e.x],null,null),(l()(),e.rb(84,0,null,0,1,"ion-icon",[["name","globe"],["slot","start"]],null,null,null,c.cb,c.r)),e.qb(85,49152,null,0,d.D,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.rb(86,0,null,0,2,"ion-label",[],null,null,null,c.hb,c.w)),e.qb(87,49152,null,0,d.O,[e.h,e.k,e.x],null,null),(l()(),e.Jb(-1,0,[" Connect to Website "])),(l()(),e.rb(89,0,null,0,8,"ion-menu-toggle",[["auto-hide","false"]],null,null,null,c.lb,c.B)),e.qb(90,49152,null,0,d.T,[e.h,e.k,e.x],null,null),(l()(),e.rb(91,0,null,0,6,"ion-item",[],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.logout()&&e),e}),c.gb,c.t)),e.qb(92,49152,null,0,d.I,[e.h,e.k,e.x],null,null),(l()(),e.rb(93,0,null,0,1,"ion-icon",[["name","log-out"],["slot","start"]],null,null,null,c.cb,c.r)),e.qb(94,49152,null,0,d.D,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.rb(95,0,null,0,2,"ion-label",[],null,null,null,c.hb,c.w)),e.qb(96,49152,null,0,d.O,[e.h,e.k,e.x],null,null),(l()(),e.Jb(-1,0,[" Logout "])),(l()(),e.rb(98,16777216,null,0,1,"ion-router-outlet",[["id","content"],["main",""]],null,null,null,null,null)),e.qb(99,212992,null,0,d.jb,[s.b,e.M,e.j,[8,null],[8,null],d.d,d.Jb,h.g,e.k,s.m,e.x,s.a,[3,d.jb]],null,null)],(function(l,n){var u=n.component;l(n,3,0,"content"),l(n,7,0,"primary"),l(n,22,0,"/pages/photo"),l(n,23,0,"forward"),l(n,37,0,"forward"),l(n,38,0,"/pages/dashboard"),l(n,39,0,"forward"),l(n,41,0,"home"),l(n,46,0,!u.roleId),l(n,50,0,"forward"),l(n,51,0,"/pages/message-sent"),l(n,52,0,"forward"),l(n,54,0,"arrow-round-forward"),l(n,61,0,"forward"),l(n,62,0,"/pages/help"),l(n,63,0,"forward"),l(n,65,0,"help"),l(n,72,0,"forward"),l(n,73,0,"/pages/checklist"),l(n,74,0,"forward"),l(n,76,0,"done-all"),l(n,85,0,"globe"),l(n,94,0,"log-out"),l(n,99,0)}),(function(l,n){var u=n.component;l(n,24,0,e.vb(1,"",u.photoUrl,"")),l(n,31,0,u.username)}))}function p(l){return e.Lb(0,[(l()(),e.rb(0,0,null,null,1,"app-menu",[],null,null,null,k,m)),e.qb(1,114688,null,0,a,[s.m,t.a,o.a],null,null)],(function(l,n){l(n,1,0)}),null)}var f=e.nb("app-menu",a,p,{},{},[]),C=u("s7LF");u.d(n,"MenuPageModuleNgFactory",(function(){return q}));var q=e.ob(i,[],(function(l){return e.Ab([e.Bb(512,e.j,e.Z,[[8,[b.a,f]],[3,e.j],e.v]),e.Bb(4608,h.l,h.k,[e.s,[2,h.r]]),e.Bb(4608,C.l,C.l,[]),e.Bb(4608,d.c,d.c,[e.x,e.g]),e.Bb(4608,d.Ib,d.Ib,[d.c,e.j,e.p]),e.Bb(4608,d.Mb,d.Mb,[d.c,e.j,e.p]),e.Bb(1073742336,h.b,h.b,[]),e.Bb(1073742336,C.k,C.k,[]),e.Bb(1073742336,C.b,C.b,[]),e.Bb(1073742336,d.Fb,d.Fb,[]),e.Bb(1073742336,s.o,s.o,[[2,s.t],[2,s.m]]),e.Bb(1073742336,i,i,[]),e.Bb(1024,s.k,(function(){return[[{path:"",redirectTo:"dashboard",pathMatch:"full"},{path:"",component:a,children:[{path:"university",loadChildren:"../university/university.module#UniversityPageModule"},{path:"course-detail/:courseObj",loadChildren:"../course-detail/course-detail.module#CourseDetailPageModule"},{path:"dashboard",loadChildren:"../dashboard/dashboard.module#DashboardPageModule"},{path:"course/:facultyId/:schoolId",loadChildren:"../course/course.module#CoursePageModule"},{path:"form",loadChildren:"../first-form/first-form.module#FirstFormPageModule"},{path:"secondForm",loadChildren:"../second-form/second-form.module#SecondFormPageModule"},{path:"thirdForm",loadChildren:"../third-form/third-form.module#ThirdFormPageModule"},{path:"forthForm",loadChildren:"../forth-form/forth-form.module#ForthFormPageModule"},{path:"fifthForm",loadChildren:"../fifth-form/fifth-form.module#FifthFormPageModule"},{path:"finalForm",loadChildren:"../final/final.module#FinalPageModule"},{path:"uploadForm",loadChildren:"../upload/upload.module#UploadPageModule"},{path:"setting",loadChildren:"../setting/setting.module#SettingPageModule"},{path:"password",loadChildren:"../password/password.module#PasswordPageModule"},{path:"messages",loadChildren:"../messages/messages.module#MessagesPageModule"},{path:"compose",loadChildren:"../compose/compose.module#ComposePageModule"},{path:"message-sent",loadChildren:"../message-sent/message-sent.module#MessageSentPageModule"},{path:"message-create",loadChildren:"../message-create/message-create.module#MessageCreatePageModule"},{path:"message-read/:msgObj",loadChildren:"../message-read/message-read.module#MessageReadPageModule"},{path:"photo",loadChildren:"../photo/photo.module#PhotoPageModule"},{path:"checklist",loadChildren:"../checklist/checklist.module#ChecklistPageModule"},{path:"help",loadChildren:"../help/help.module#HelpPageModule"},{path:"viewApplication",loadChildren:"../application-view/application-view.module#ApplicationViewPageModule"}]}]]}),[])])}))}}]);