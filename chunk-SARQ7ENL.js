import{$a as b,Ab as y,Bb as _,Da as M,Ga as r,Ta as k,U as h,V as d,Wb as B,Xa as p,Za as E,bc as A,ca as w,cb as a,cc as H,da as S,db as e,ea as v,eb as m,fa as C,fb as O,gb as g,ib as P,jb as T,ka as f,kb as D,lb as F,mb as I,nb as V,qb as n,rb as N,sb as l,xb as u,yb as j}from"./chunk-BWVGAE34.js";var z=["modal"],G=["*"];function U(t,x){t&1&&(a(0,"div",6)(1,"form",4)(2,"button",8),n(3,"Close"),e()()())}function W(t,x){t&1&&(a(0,"form",7)(1,"button"),n(2,"Close"),e()())}var L=(()=>{class t{constructor(){this.modalOptions=f({closable:!0}),this.modalActionOpen=f.required()}open(){console.log(this.modal),this.modal.nativeElement.showModal()}static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275cmp=d({type:t,selectors:[["app-modal"]],viewQuery:function(o,i){if(o&1&&F(z,5),o&2){let s;I(s=V())&&(i.modal=s.first)}},inputs:{modalOptions:[h.SignalBased,"modalOptions"],modalActionOpen:[h.SignalBased,"modalActionOpen"]},standalone:!0,features:[u],ngContentSelectors:G,decls:11,vars:5,consts:[["modal",""],[3,"click"],[1,"modal"],[1,"modal-box"],["method","dialog"],[1,"btn","btn-sm","btn-circle","btn-ghost","absolute","right-2","top-2"],[1,"modal-action"],["method","dialog",1,"modal-backdrop"],[1,"btn"]],template:function(o,i){if(o&1){let s=O();P(),a(0,"button",1),g("click",function(){return w(s),S(i.open())}),n(1),e(),a(2,"dialog",2,0)(4,"div",3)(5,"form",4)(6,"button",5),n(7," \u2715 "),e()(),T(8),k(9,U,4,0,"div",6),e(),k(10,W,3,0,"form",7),e()}o&2&&(E("btn "+i.modalActionOpen().styling),r(),l(" ",i.modalActionOpen().title," "),r(8),b(9,i.modalOptions().closable?-1:9),r(),b(10,i.modalOptions().closable?10:-1))},styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0})}}return t})();var $=t=>({title:t,styling:"flex-1 btn btn-md btn-outline btn-primary"}),Q=(()=>{class t{constructor(){this.package=f.required()}onDetailsClick(){console.log("View details for package:",this.package().id)}onBookNowClick(){console.log("Book package:",this.package().id)}static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275cmp=d({type:t,selectors:[["app-package-card"]],inputs:{package:[h.SignalBased,"package"]},standalone:!0,features:[u],decls:34,vars:17,consts:[[1,"bg-white","shadow-lg","rounded-xl","overflow-hidden","w-full","max-w-sm","transform","transition-all","hover:scale-105","hover:shadow-2xl"],[1,"relative"],[1,"w-full","h-48","object-cover","cursor-pointer",3,"click","src","alt"],[1,"absolute","top-2","left-2","bg-red-500","text-white","px-3","py-1","rounded-full","text-sm","font-bold"],[1,"p-4"],[1,"text-xl","font-bold","text-gray-800","hover:text-primary","transition-[color]","ease-in-out","duration-150","mb-2","cursor-pointer",3,"click"],[1,"space-y-2","mb-4"],[1,"flex","items-center","text-gray-600"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor",1,"h-5","w-5","mr-2"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h3a1 1 0 011 1v5m-4 0h4"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"],[1,"flex","items-center","justify-between","mb-4"],[1,"line-through","text-gray-400","mr-2"],[1,"text-2xl","font-bold","text-yellow-500"],[1,"flex","gap-2"],[1,"flex-1","btn","btn-md","btn-primary",3,"click"],[3,"modalActionOpen"]],template:function(o,i){o&1&&(a(0,"div",0)(1,"div",1)(2,"img",2),g("click",function(){return i.onDetailsClick()}),e(),a(3,"div",3),n(4),e()(),a(5,"div",4)(6,"a",5),g("click",function(){return i.onDetailsClick()}),n(7),e(),a(8,"div",6)(9,"div",7),v(),a(10,"svg",8),m(11,"path",9),e(),n(12),e(),C(),a(13,"div",7),v(),a(14,"svg",8),m(15,"path",10),e(),n(16),e(),C(),a(17,"div",7),v(),a(18,"svg",8),m(19,"path",11),e(),n(20),e()(),C(),a(21,"div",12)(22,"div")(23,"span",13),n(24),e(),a(25,"span",14),n(26),e()()(),a(27,"div",15)(28,"button",16),g("click",function(){return i.onBookNowClick()}),n(29),y(30,"translate"),e(),a(31,"app-modal",17),y(32,"translate"),n(33," package details component "),e()()()()),o&2&&(r(2),D("alt",i.package().title),p("src",i.package().image,M),r(2),l(" ",i.package().discountPercentage,"% OFF "),r(3),N(i.package().title),r(5),l(" ",i.package().hotelName," "),r(4),l(" ",i.package().duration," "),r(4),l(" ",i.package().airline," "),r(4),l("$",i.package().originalCost,""),r(2),l("$",i.package().discountedCost,""),r(3),l(" ",_(30,11,"BUTTON.BOOK_NOW")," "),r(2),p("modalActionOpen",j(15,$,_(32,13,"BUTTON.VIEW_DETAILS"))))},dependencies:[H,A,L],styles:[".card-hover[_ngcontent-%COMP%]{transition:transform .3s ease-in-out,box-shadow .3s ease-in-out}"],changeDetection:0})}}return t})();function Y(t,x){if(t&1&&m(0,"app-package-card",7),t&2){let c=x.$implicit;p("package",c)}}var de=(()=>{class t{constructor(){this.specialPackages=[{id:1,image:"https://kit.creativemox.com/almahyra/wp-content/uploads/sites/23/2023/12/mecca-saudi-arabia-at-night-e1701589802777.jpg",title:"\u0628\u0627\u0642\u0629 \u0627\u0644\u0639\u0645\u0631\u0629 \u0627\u0644\u0641\u0627\u062E\u0631\u0629",hotelName:"\u0641\u0646\u062F\u0642 \u0647\u064A\u0644\u062A\u0648\u0646 \u0645\u0643\u0629",duration:"\u0667 \u0623\u064A\u0627\u0645",airline:"\u0627\u0644\u062E\u0637\u0648\u0637 \u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629",originalCost:5e3,discountedCost:4500,discountPercentage:10},{id:2,image:"https://kit.creativemox.com/almahyra/wp-content/uploads/sites/23/2023/12/mecca-saudi-arabia-at-night-e1701589802777.jpg",title:"\u0628\u0627\u0642\u0629 \u0627\u0644\u062D\u062C \u0627\u0644\u0627\u0642\u062A\u0635\u0627\u062F\u064A\u0629",hotelName:"\u0641\u0646\u062F\u0642 \u0643\u0648\u0646\u0643\u0648\u0631\u062F \u0645\u0643\u0629",duration:"\u0661\u0660 \u0623\u064A\u0627\u0645",airline:"\u0637\u064A\u0631\u0627\u0646 \u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062A",originalCost:1e4,discountedCost:8500,discountPercentage:15},{id:3,image:"https://kit.creativemox.com/almahyra/wp-content/uploads/sites/23/2023/12/mecca-saudi-arabia-at-night-e1701589802777.jpg",title:"\u0628\u0627\u0642\u0629 \u0627\u0644\u062D\u062C \u0627\u0644\u0627\u0642\u062A\u0635\u0627\u062F\u064A\u0629",hotelName:"\u0641\u0646\u062F\u0642 \u0643\u0648\u0646\u0643\u0648\u0631\u062F \u0645\u0643\u0629",duration:"\u0661\u0660 \u0623\u064A\u0627\u0645",airline:"\u0637\u064A\u0631\u0627\u0646 \u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062A",originalCost:1e4,discountedCost:8500,discountPercentage:15},{id:4,image:"https://kit.creativemox.com/almahyra/wp-content/uploads/sites/23/2023/12/mecca-saudi-arabia-at-night-e1701589802777.jpg",title:"\u0628\u0627\u0642\u0629 \u0627\u0644\u062D\u062C \u0627\u0644\u0627\u0642\u062A\u0635\u0627\u062F\u064A\u0629",hotelName:"\u0641\u0646\u062F\u0642 \u0643\u0648\u0646\u0643\u0648\u0631\u062F \u0645\u0643\u0629",duration:"\u0661\u0660 \u0623\u064A\u0627\u0645",airline:"\u0637\u064A\u0631\u0627\u0646 \u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062A",originalCost:1e4,discountedCost:8500,discountPercentage:15},{id:5,image:"https://kit.creativemox.com/almahyra/wp-content/uploads/sites/23/2023/12/mecca-saudi-arabia-at-night-e1701589802777.jpg",title:"\u0628\u0627\u0642\u0629 \u0627\u0644\u062D\u062C \u0627\u0644\u0627\u0642\u062A\u0635\u0627\u062F\u064A\u0629",hotelName:"\u0641\u0646\u062F\u0642 \u0643\u0648\u0646\u0643\u0648\u0631\u062F \u0645\u0643\u0629",duration:"\u0661\u0660 \u0623\u064A\u0627\u0645",airline:"\u0637\u064A\u0631\u0627\u0646 \u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062A",originalCost:1e4,discountedCost:8500,discountPercentage:15}]}static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275cmp=d({type:t,selectors:[["app-special-packages"]],standalone:!0,features:[u],decls:9,vars:1,consts:[[1,"py-16","bg-gray-50"],[1,"container","mx-auto","px-4"],[1,"text-center","mb-12"],[1,"text-3xl","font-bold","text-gray-800","mb-4"],[1,"text-gray-600","max-w-2xl","mx-auto"],[1,"grid","md:grid-cols-3","gap-8"],[3,"package",4,"ngFor","ngForOf"],[3,"package"]],template:function(o,i){o&1&&(a(0,"section",0)(1,"div",1)(2,"div",2)(3,"h2",3),n(4," Choose Your Perfect Plan "),e(),a(5,"p",4),n(6," Discover our flexible packages designed to meet your unique needs. Whether you're a startup or an enterprise, we have a solution for you. "),e()(),a(7,"div",5),k(8,Y,1,1,"app-package-card",6),e()()()),o&2&&(r(8),p("ngForOf",i.specialPackages))},dependencies:[B,Q],styles:[".special-packages[_ngcontent-%COMP%]{background-color:#f9fafb}.package-card[_ngcontent-%COMP%]{transition:transform .3s ease,box-shadow .3s ease}.package-card[_ngcontent-%COMP%]:hover{transform:translateY(-5px);box-shadow:0 10px 15px #0000001a}"],changeDetection:0})}}return t})();export{de as SpecialPackagesComponent};