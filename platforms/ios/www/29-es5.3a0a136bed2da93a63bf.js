(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"0m3x":function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),o=u("18Le"),t=u("AytR"),r=u("9B/o"),a=function(){function l(l,n,u){var e=this;this.router=l,this.iab=n,this.authenticationService=u,this.selectedPath="",this.router.events.subscribe((function(l){e.selectedPath=l.url}))}return l.prototype.ngOnInit=function(){var l=this;this.authenticationService.getCurrentUser().then((function(n){l.username=n.username,l.roleId=n.roleId,l.photoUrl=n.photo?t.a.photoUrl+n.photo:t.a.defaultPhoto}))},l.prototype.openBrowser=function(){this.iab.create("https://scotstudy.co.uk")},l.prototype.logout=function(){this.authenticationService.logout()},l}(),i=function(){return function(){}}(),b=u("pMnS"),s=u("oBZk"),c=u("ZZ/e"),d=u("ZYCi"),h=u("Ip0R"),m=e.rb({encapsulation:0,styles:[[".active-item[_ngcontent-%COMP%]{border-left:8px solid var(--ion-color-primary)}#menu-avatar[_ngcontent-%COMP%]   .icon-badge[_ngcontent-%COMP%]{top:0;right:0;background:#ff5d5d;color:#fff;font-size:12px;position:absolute;padding:5px 8px;border-radius:15px}#menu-avatar[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%]{padding:.5em}#menu-avatar[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%], #menu-avatar[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#fff;font-weight:700}#menu-avatar[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{background:0 0}#menu-avatar[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]{background:linear-gradient(48deg,rgba(157,72,173,.8) 0,rgba(157,72,173,.86) 28%,rgba(0,168,168,.98) 93%,#00a8a8 100%)}#menu-avatar[_ngcontent-%COMP%]   .menu-inner[_ngcontent-%COMP%]{background:rgba(255,255,255,.3)}.head[_ngcontent-%COMP%]{--background:#3880ff;--color:#3880ff}"]],data:{}});function g(l){return e.Nb(0,[(l()(),e.tb(0,0,null,null,10,"ion-menu-toggle",[["auto-hide","false"]],null,null,null,s.rb,s.D)),e.sb(1,49152,null,0,c.T,[e.h,e.k,e.z],null,null),(l()(),e.tb(2,0,null,0,8,"ion-item",[["routerDirection","forward"],["routerLink","/pages/compose"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==e.Fb(l,4).onClick()&&o),"click"===n&&(o=!1!==e.Fb(l,5).onClick(u)&&o),o}),s.mb,s.v)),e.sb(3,49152,null,0,c.I,[e.h,e.k,e.z],{routerDirection:[0,"routerDirection"]},null),e.sb(4,16384,null,0,d.n,[d.m,d.a,[8,null],e.D,e.k],{routerLink:[0,"routerLink"]},null),e.sb(5,737280,null,0,c.Ob,[h.h,c.Jb,e.k,d.m,[2,d.n]],{routerDirection:[0,"routerDirection"]},null),(l()(),e.tb(6,0,null,0,1,"ion-icon",[["name","create"],["slot","start"]],null,null,null,s.gb,s.r)),e.sb(7,49152,null,0,c.D,[e.h,e.k,e.z],{name:[0,"name"]},null),(l()(),e.tb(8,0,null,0,2,"ion-label",[],null,null,null,s.nb,s.y)),e.sb(9,49152,null,0,c.O,[e.h,e.k,e.z],null,null),(l()(),e.Lb(-1,0,[" Compose "]))],(function(l,n){l(n,3,0,"forward"),l(n,4,0,"/pages/compose"),l(n,5,0,"forward"),l(n,7,0,"create")}),null)}function k(l){return e.Nb(0,[(l()(),e.tb(0,0,null,null,99,"ion-split-pane",[],null,null,null,s.zb,s.K)),e.sb(1,49152,null,0,c.ub,[e.h,e.k,e.z],null,null),(l()(),e.tb(2,0,null,0,95,"ion-menu",[["contentId","content"]],null,null,null,s.sb,s.B)),e.sb(3,49152,null,0,c.R,[e.h,e.k,e.z],{contentId:[0,"contentId"]},null),(l()(),e.tb(4,0,null,0,6,"ion-header",[],null,null,null,s.fb,s.q)),e.sb(5,49152,null,0,c.C,[e.h,e.k,e.z],null,null),(l()(),e.tb(6,0,null,0,4,"ion-toolbar",[["color","primary"]],null,null,null,s.Db,s.O)),e.sb(7,49152,null,0,c.Db,[e.h,e.k,e.z],{color:[0,"color"]},null),(l()(),e.tb(8,0,null,0,2,"ion-title",[],null,null,null,s.Cb,s.N)),e.sb(9,49152,null,0,c.Bb,[e.h,e.k,e.z],null,null),(l()(),e.Lb(-1,0,["Menu"])),(l()(),e.tb(11,0,null,0,86,"ion-content",[],null,null,null,s.bb,s.m)),e.sb(12,49152,null,0,c.v,[e.h,e.k,e.z],null,null),(l()(),e.tb(13,0,null,0,18,"div",[["class","head"]],null,null,null,null,null)),(l()(),e.tb(14,0,null,null,13,"ion-row",[["style","align-items:center;"]],null,null,null,s.vb,s.G)),e.sb(15,49152,null,0,c.kb,[e.h,e.k,e.z],null,null),(l()(),e.tb(16,0,null,0,1,"ion-col",[["col-3",""]],null,null,null,s.ab,s.l)),e.sb(17,49152,null,0,c.u,[e.h,e.k,e.z],null,null),(l()(),e.tb(18,0,null,0,6,"ion-col",[["col-6",""]],null,null,null,s.ab,s.l)),e.sb(19,49152,null,0,c.u,[e.h,e.k,e.z],null,null),(l()(),e.tb(20,0,null,0,4,"ion-avatar",[["routerDirection","forward"],["routerLink","/pages/photo"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==e.Fb(l,22).onClick()&&o),"click"===n&&(o=!1!==e.Fb(l,23).onClick(u)&&o),o}),s.Q,s.b)),e.sb(21,49152,null,0,c.g,[e.h,e.k,e.z],null,null),e.sb(22,16384,null,0,d.n,[d.m,d.a,[8,null],e.D,e.k],{routerLink:[0,"routerLink"]},null),e.sb(23,737280,null,0,c.Ob,[h.h,c.Jb,e.k,d.m,[2,d.n]],{routerDirection:[0,"routerDirection"]},null),(l()(),e.tb(24,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),e.tb(25,0,null,0,2,"ion-col",[["col-3",""]],null,null,null,s.ab,s.l)),e.sb(26,49152,null,0,c.u,[e.h,e.k,e.z],null,null),(l()(),e.tb(27,0,null,0,0,"img",[["src",""]],null,null,null,null,null)),(l()(),e.tb(28,0,null,null,3,"ion-row",[["style","justify-content: center;"]],null,null,null,s.vb,s.G)),e.sb(29,49152,null,0,c.kb,[e.h,e.k,e.z],null,null),(l()(),e.tb(30,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),e.Lb(31,null,["",""])),(l()(),e.tb(32,0,null,0,65,"ion-list",[],null,null,null,s.pb,s.z)),e.sb(33,49152,null,0,c.P,[e.h,e.k,e.z],null,null),(l()(),e.tb(34,0,null,0,10,"ion-menu-toggle",[["auto-hide","false"]],null,null,null,s.rb,s.D)),e.sb(35,49152,null,0,c.T,[e.h,e.k,e.z],null,null),(l()(),e.tb(36,0,null,0,8,"ion-item",[["routerDirection","forward"],["routerLink","/pages/dashboard"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==e.Fb(l,38).onClick()&&o),"click"===n&&(o=!1!==e.Fb(l,39).onClick(u)&&o),o}),s.mb,s.v)),e.sb(37,49152,null,0,c.I,[e.h,e.k,e.z],{routerDirection:[0,"routerDirection"]},null),e.sb(38,16384,null,0,d.n,[d.m,d.a,[8,null],e.D,e.k],{routerLink:[0,"routerLink"]},null),e.sb(39,737280,null,0,c.Ob,[h.h,c.Jb,e.k,d.m,[2,d.n]],{routerDirection:[0,"routerDirection"]},null),(l()(),e.tb(40,0,null,0,1,"ion-icon",[["name","home"],["slot","start"]],null,null,null,s.gb,s.r)),e.sb(41,49152,null,0,c.D,[e.h,e.k,e.z],{name:[0,"name"]},null),(l()(),e.tb(42,0,null,0,2,"ion-label",[],null,null,null,s.nb,s.y)),e.sb(43,49152,null,0,c.O,[e.h,e.k,e.z],null,null),(l()(),e.Lb(-1,0,[" Home "])),(l()(),e.ib(16777216,null,0,1,null,g)),e.sb(46,16384,null,0,h.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.tb(47,0,null,0,10,"ion-menu-toggle",[["auto-hide","false"]],null,null,null,s.rb,s.D)),e.sb(48,49152,null,0,c.T,[e.h,e.k,e.z],null,null),(l()(),e.tb(49,0,null,0,8,"ion-item",[["routerDirection","forward"],["routerLink","/pages/message-sent"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==e.Fb(l,51).onClick()&&o),"click"===n&&(o=!1!==e.Fb(l,52).onClick(u)&&o),o}),s.mb,s.v)),e.sb(50,49152,null,0,c.I,[e.h,e.k,e.z],{routerDirection:[0,"routerDirection"]},null),e.sb(51,16384,null,0,d.n,[d.m,d.a,[8,null],e.D,e.k],{routerLink:[0,"routerLink"]},null),e.sb(52,737280,null,0,c.Ob,[h.h,c.Jb,e.k,d.m,[2,d.n]],{routerDirection:[0,"routerDirection"]},null),(l()(),e.tb(53,0,null,0,1,"ion-icon",[["name","arrow-round-forward"],["slot","start"]],null,null,null,s.gb,s.r)),e.sb(54,49152,null,0,c.D,[e.h,e.k,e.z],{name:[0,"name"]},null),(l()(),e.tb(55,0,null,0,2,"ion-label",[],null,null,null,s.nb,s.y)),e.sb(56,49152,null,0,c.O,[e.h,e.k,e.z],null,null),(l()(),e.Lb(-1,0,[" Sent Messages "])),(l()(),e.tb(58,0,null,0,10,"ion-menu-toggle",[["auto-hide","false"]],null,null,null,s.rb,s.D)),e.sb(59,49152,null,0,c.T,[e.h,e.k,e.z],null,null),(l()(),e.tb(60,0,null,0,8,"ion-item",[["routerDirection","forward"],["routerLink","/pages/help"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==e.Fb(l,62).onClick()&&o),"click"===n&&(o=!1!==e.Fb(l,63).onClick(u)&&o),o}),s.mb,s.v)),e.sb(61,49152,null,0,c.I,[e.h,e.k,e.z],{routerDirection:[0,"routerDirection"]},null),e.sb(62,16384,null,0,d.n,[d.m,d.a,[8,null],e.D,e.k],{routerLink:[0,"routerLink"]},null),e.sb(63,737280,null,0,c.Ob,[h.h,c.Jb,e.k,d.m,[2,d.n]],{routerDirection:[0,"routerDirection"]},null),(l()(),e.tb(64,0,null,0,1,"ion-icon",[["name","help"],["slot","start"]],null,null,null,s.gb,s.r)),e.sb(65,49152,null,0,c.D,[e.h,e.k,e.z],{name:[0,"name"]},null),(l()(),e.tb(66,0,null,0,2,"ion-label",[],null,null,null,s.nb,s.y)),e.sb(67,49152,null,0,c.O,[e.h,e.k,e.z],null,null),(l()(),e.Lb(-1,0,[" Help "])),(l()(),e.tb(69,0,null,0,10,"ion-menu-toggle",[["auto-hide","false"]],null,null,null,s.rb,s.D)),e.sb(70,49152,null,0,c.T,[e.h,e.k,e.z],null,null),(l()(),e.tb(71,0,null,0,8,"ion-item",[["routerDirection","forward"],["routerLink","/pages/checklist"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==e.Fb(l,73).onClick()&&o),"click"===n&&(o=!1!==e.Fb(l,74).onClick(u)&&o),o}),s.mb,s.v)),e.sb(72,49152,null,0,c.I,[e.h,e.k,e.z],{routerDirection:[0,"routerDirection"]},null),e.sb(73,16384,null,0,d.n,[d.m,d.a,[8,null],e.D,e.k],{routerLink:[0,"routerLink"]},null),e.sb(74,737280,null,0,c.Ob,[h.h,c.Jb,e.k,d.m,[2,d.n]],{routerDirection:[0,"routerDirection"]},null),(l()(),e.tb(75,0,null,0,1,"ion-icon",[["name","done-all"],["slot","start"]],null,null,null,s.gb,s.r)),e.sb(76,49152,null,0,c.D,[e.h,e.k,e.z],{name:[0,"name"]},null),(l()(),e.tb(77,0,null,0,2,"ion-label",[],null,null,null,s.nb,s.y)),e.sb(78,49152,null,0,c.O,[e.h,e.k,e.z],null,null),(l()(),e.Lb(-1,0,[" Checklist "])),(l()(),e.tb(80,0,null,0,8,"ion-menu-toggle",[["auto-hide","false"]],null,null,null,s.rb,s.D)),e.sb(81,49152,null,0,c.T,[e.h,e.k,e.z],null,null),(l()(),e.tb(82,0,null,0,6,"ion-item",[],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.openBrowser()&&e),e}),s.mb,s.v)),e.sb(83,49152,null,0,c.I,[e.h,e.k,e.z],null,null),(l()(),e.tb(84,0,null,0,1,"ion-icon",[["name","globe"],["slot","start"]],null,null,null,s.gb,s.r)),e.sb(85,49152,null,0,c.D,[e.h,e.k,e.z],{name:[0,"name"]},null),(l()(),e.tb(86,0,null,0,2,"ion-label",[],null,null,null,s.nb,s.y)),e.sb(87,49152,null,0,c.O,[e.h,e.k,e.z],null,null),(l()(),e.Lb(-1,0,[" Connect to Website "])),(l()(),e.tb(89,0,null,0,8,"ion-menu-toggle",[["auto-hide","false"]],null,null,null,s.rb,s.D)),e.sb(90,49152,null,0,c.T,[e.h,e.k,e.z],null,null),(l()(),e.tb(91,0,null,0,6,"ion-item",[],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.logout()&&e),e}),s.mb,s.v)),e.sb(92,49152,null,0,c.I,[e.h,e.k,e.z],null,null),(l()(),e.tb(93,0,null,0,1,"ion-icon",[["name","log-out"],["slot","start"]],null,null,null,s.gb,s.r)),e.sb(94,49152,null,0,c.D,[e.h,e.k,e.z],{name:[0,"name"]},null),(l()(),e.tb(95,0,null,0,2,"ion-label",[],null,null,null,s.nb,s.y)),e.sb(96,49152,null,0,c.O,[e.h,e.k,e.z],null,null),(l()(),e.Lb(-1,0,[" Logout "])),(l()(),e.tb(98,16777216,null,0,1,"ion-router-outlet",[["id","content"],["main",""]],null,null,null,null,null)),e.sb(99,212992,null,0,c.jb,[d.b,e.O,e.j,[8,null],[8,null],c.d,c.Jb,h.g,e.k,d.m,e.z,d.a,[3,c.jb]],null,null)],(function(l,n){var u=n.component;l(n,3,0,"content"),l(n,7,0,"primary"),l(n,22,0,"/pages/photo"),l(n,23,0,"forward"),l(n,37,0,"forward"),l(n,38,0,"/pages/dashboard"),l(n,39,0,"forward"),l(n,41,0,"home"),l(n,46,0,!u.roleId),l(n,50,0,"forward"),l(n,51,0,"/pages/message-sent"),l(n,52,0,"forward"),l(n,54,0,"arrow-round-forward"),l(n,61,0,"forward"),l(n,62,0,"/pages/help"),l(n,63,0,"forward"),l(n,65,0,"help"),l(n,72,0,"forward"),l(n,73,0,"/pages/checklist"),l(n,74,0,"forward"),l(n,76,0,"done-all"),l(n,85,0,"globe"),l(n,94,0,"log-out"),l(n,99,0)}),(function(l,n){var u=n.component;l(n,24,0,e.xb(1,"",u.photoUrl,"")),l(n,31,0,u.username)}))}function p(l){return e.Nb(0,[(l()(),e.tb(0,0,null,null,1,"app-menu",[],null,null,null,k,m)),e.sb(1,114688,null,0,a,[d.m,r.a,o.a],null,null)],(function(l,n){l(n,1,0)}),null)}var f=e.pb("app-menu",a,p,{},{},[]),C=u("gIcY");u.d(n,"MenuPageModuleNgFactory",(function(){return D}));var D=e.qb(i,[],(function(l){return e.Cb([e.Db(512,e.j,e.bb,[[8,[b.a,f]],[3,e.j],e.x]),e.Db(4608,h.l,h.k,[e.u,[2,h.r]]),e.Db(4608,C.l,C.l,[]),e.Db(4608,c.c,c.c,[e.z,e.g]),e.Db(4608,c.Ib,c.Ib,[c.c,e.j,e.q]),e.Db(4608,c.Nb,c.Nb,[c.c,e.j,e.q]),e.Db(1073742336,h.b,h.b,[]),e.Db(1073742336,C.k,C.k,[]),e.Db(1073742336,C.b,C.b,[]),e.Db(1073742336,c.Fb,c.Fb,[]),e.Db(1073742336,d.o,d.o,[[2,d.t],[2,d.m]]),e.Db(1073742336,i,i,[]),e.Db(1024,d.k,(function(){return[[{path:"",redirectTo:"dashboard",pathMatch:"full"},{path:"",component:a,children:[{path:"university",loadChildren:"../university/university.module#UniversityPageModule"},{path:"course-detail/:courseObj",loadChildren:"../course-detail/course-detail.module#CourseDetailPageModule"},{path:"dashboard",loadChildren:"../dashboard/dashboard.module#DashboardPageModule"},{path:"course/:facultyId/:schoolId",loadChildren:"../course/course.module#CoursePageModule"},{path:"form",loadChildren:"../first-form/first-form.module#FirstFormPageModule"},{path:"secondForm",loadChildren:"../second-form/second-form.module#SecondFormPageModule"},{path:"thirdForm",loadChildren:"../third-form/third-form.module#ThirdFormPageModule"},{path:"forthForm",loadChildren:"../forth-form/forth-form.module#ForthFormPageModule"},{path:"fifthForm",loadChildren:"../fifth-form/fifth-form.module#FifthFormPageModule"},{path:"finalForm",loadChildren:"../final/final.module#FinalPageModule"},{path:"uploadForm",loadChildren:"../upload/upload.module#UploadPageModule"},{path:"setting",loadChildren:"../setting/setting.module#SettingPageModule"},{path:"password",loadChildren:"../password/password.module#PasswordPageModule"},{path:"messages",loadChildren:"../messages/messages.module#MessagesPageModule"},{path:"compose",loadChildren:"../compose/compose.module#ComposePageModule"},{path:"message-sent",loadChildren:"../message-sent/message-sent.module#MessageSentPageModule"},{path:"message-create",loadChildren:"../message-create/message-create.module#MessageCreatePageModule"},{path:"message-read/:msgObj",loadChildren:"../message-read/message-read.module#MessageReadPageModule"},{path:"photo",loadChildren:"../photo/photo.module#PhotoPageModule"},{path:"checklist",loadChildren:"../checklist/checklist.module#ChecklistPageModule"},{path:"help",loadChildren:"../help/help.module#HelpPageModule"},{path:"viewApplication",loadChildren:"../application-view/application-view.module#ApplicationViewPageModule"},{path:"coursenew",loadChildren:"../coursenew/coursenew.module#CoursenewPageModule"}]}]]}),[])])}))}}]);