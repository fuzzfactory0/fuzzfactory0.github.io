import{j as u}from"./chunk-ER725NKB.js";import{Bb as n,Cb as r,Db as p,Gb as x,Pb as m,Qb as y,Rb as C,Sb as M,Ua as g,Wa as o,_ as c,eb as l,fb as d,jb as h,ub as s,uc as v,xc as S}from"./chunk-FYGIAP3M.js";var b=(()=>{class e{constructor(){this.name="reimu",this.price="49.99",this.stock=Math.floor(Math.random()*500+100),this.soldout=!1,this.realName=""}ngOnInit(){this.realName=this.name.charAt(0).toUpperCase()+this.name.substring(1),this.decreaseStock()}sellout(){this.soldout=!0,this.stock=0}decreaseStock(){if(this.stock==0){this.soldout=!0;return}this.stock--,setTimeout(()=>this.decreaseStock(),16)}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=l({type:e,selectors:[["app-fumo-item"]],inputs:{name:"name",price:"price"},standalone:!1,decls:9,vars:6,consts:[[1,"card"],[1,"name"],["alt","fumo","height","250",3,"src"],[1,"price"],[1,"trigger",3,"mouseenter"],[1,"buy-now",3,"disabled"]],template:function(t,i){t&1&&(n(0,"div",0)(1,"h2",1),m(2),r(),p(3,"img",2),n(4,"h3",3),m(5),r(),n(6,"div",4),x("mouseenter",function(){return i.sellout()}),n(7,"button",5),m(8),r()()()),t&2&&(o(2),M("",i.realName," (",i.stock," left)"),o(),s("src","/assets/sale/images/"+i.name+".jpg",g),o(2),C("$",i.price,""),o(2),s("disabled",i.soldout),o(),y(i.soldout?"SOLD OUT":"BUY NOW"))},styles:[".card[_ngcontent-%COMP%]{display:flex;flex-direction:column;background-color:#fff;align-items:center;width:300px;border-radius:10px;box-shadow:1px 1px 10px #aaa}.name[_ngcontent-%COMP%]{margin-top:10px;margin-bottom:0}.price[_ngcontent-%COMP%]{margin:0}.buy-now[_ngcontent-%COMP%]{background-color:#4169e1;border:none;border-radius:5px;height:40px;width:140px;margin-bottom:15px;color:#fff;font-weight:bolder;font-size:20px}.buy-now[_ngcontent-%COMP%]:disabled{background-color:#dc3545}.trigger[_ngcontent-%COMP%]{display:flex;justify-content:center;width:200px;padding-top:10px}"]})}}return e})();function w(e,k){if(e&1&&(n(0,"div",6),p(1,"app-fumo-item",7),r()),e&2){let a=k.$implicit;o(),s("name",a.name)("price",a.price)}}var O=(()=>{class e{constructor(){this.fumolist=[{name:"reimu",price:"49.99"},{name:"marisa",price:"69.99"},{name:"cirno",price:"29.99"},{name:"chen",price:"49.99"},{name:"flandre",price:"149.99"},{name:"koishi",price:"99.99"},{name:"mokou",price:"89.99"},{name:"momiji",price:"49.99"},{name:"patchouli",price:"129.99"},{name:"remilia",price:"159.99"},{name:"sakuya",price:"59.99"},{name:"youmu",price:"199.99"},{name:"satori",price:"44.99"},{name:"yuyuko",price:"169.99"}]}ngOnInit(){}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=l({type:e,selectors:[["app-sale"]],standalone:!1,decls:8,vars:1,consts:[[1,"header"],["src","/assets/sale/images/nyamazon.png","height","50px"],[1,"search"],[1,"sale"],[1,"fumolist"],["class","fumo",4,"ngFor","ngForOf"],[1,"fumo"],[3,"name","price"]],template:function(t,i){t&1&&(n(0,"div",0),p(1,"img",1),n(2,"h3",2),m(3,"Touhou Fan Fumo Buying Experience Simulator"),r()(),n(4,"h1",3),m(5,"HOT FUMO SALE"),r(),n(6,"div",4),h(7,w,2,2,"div",5),r()),t&2&&(o(7),s("ngForOf",i.fumolist))},dependencies:[v,b],styles:[".header[_ngcontent-%COMP%]{background-color:#122b54;width:100%;padding:5px 10px;display:flex;align-items:center}.search[_ngcontent-%COMP%]{height:30px;color:#fff;margin:0 0 0 100px}.sale[_ngcontent-%COMP%]{text-align:center}.fumolist[_ngcontent-%COMP%]{display:grid;padding:0 200px;background-color:#d3d3d3;grid-template-columns:1fr 1fr 1fr 1fr}.fumo[_ngcontent-%COMP%]{margin:30px}"]})}}return e})();var I=[{path:"",component:O}],_=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=d({type:e})}static{this.\u0275inj=c({imports:[u.forChild(I),u]})}}return e})();var $=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=d({type:e})}static{this.\u0275inj=c({imports:[S,_]})}}return e})();export{$ as SaleModule};