(function(e){function t(t){for(var r,a,o=t[0],u=t[1],l=t[2],d=0,p=[];d<o.length;d++)a=o[d],s[a]&&p.push(s[a][0]),s[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);c&&c(t);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==s[u]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},s={app:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var c=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),s=n.n(r);s.a},"41e1":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("a026"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{alt:"Veggie Image",src:n("cdcc")}}),r("router-view")],1)},i=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h2",[e._v("Recipe Search")]),n("p",[n("router-link",{attrs:{to:"/reveal"}},[e._v("What's for dinner?")])],1),n("form",{on:{submit:function(t){return t.preventDefault(),e.findRecipe(t)}}},[n("p",[e._v("Find recipes related to: "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.ingredient,expression:"ingredient"}],attrs:{type:"text"},domProps:{value:e.ingredient},on:{input:function(t){t.target.composing||(e.ingredient=t.target.value)}}}),n("button",{attrs:{type:"submit"}},[e._v("Search")])])]),n("section",{staticClass:"results"},[e.results&&e.results.length>0?n("ul",{staticClass:"recipeCards"},e._l(e.results,function(t,r){return n("li",{key:r,staticClass:"card"},[n("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(n){return e.getMeal(t)}}},[e._v(e._s(t.strMeal))]),n("div",{attrs:{id:"thumbnail"}},[n("img",{attrs:{src:t.strMealThumb,alt:t.strMeal,height:"200",width:"200"}})])])}),0):e.results&&0===e.results.length?n("div",{staticClass:"no-results"},[n("h2",[e._v("No Recipes Found")]),n("p",[e._v("Let's look for somthing else")])]):e._e(),e.errors&&e.errors.length>0?n("ul",{staticClass:"errors"},e._l(e.errors,function(t,r){return n("li",{key:r},[e._v("\n        "+e._s(t.message)+"\n      ")])}),0):e._e()])])},o=[],u=n("bc3a"),l=n.n(u),c={name:"Recipe",data:function(){return{results:null,errors:[],ingredient:null}},methods:{getMeal:function(e){this.$router.push({name:"reveal",params:{item:e}})},findRecipe:function(){var e=this;l.a.get("https://www.themealdb.com/api/json/v1/1/filter.php",{params:{i:this.ingredient}}).then(function(t){e.results=t.data.meals,e.ingredient=""}).catch(function(t){e.errors.push(t)})}}},d=c,p=(n("8ed5"),n("2877")),f=Object(p["a"])(d,a,o,!1,null,"f77c0192",null),g=f.exports,h={name:"app",components:{Recipe:g}},v=h,_=(n("034f"),Object(p["a"])(v,s,i,!1,null,null,null)),m=_.exports,b=n("8c4f"),I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h2",[e._v("Recipe Reveal")]),n("p",[n("router-link",{attrs:{to:"/"}},[e._v("Home")])],1),n("form",{on:{submit:function(t){return t.preventDefault(),e.findMeal(t)}}}),e.results&&e.results.length>0?n("ul",{staticClass:"Instructions"},e._l(e.results,function(t,r){return n("li",{key:r,staticClass:"card"},[n("h1",[e._v(e._s(t.strMeal))]),n("h3",[e._v(e._s(t.strCategory)+" - "+e._s(t.strArea))]),n("div",{attrs:{id:"thumbnail"}},[n("img",{attrs:{src:t.strMealThumb,alt:t.strMeal,height:"200",width:"200"}})]),n("div",{staticClass:"ingredients"},[n("ul",[n("li",[e._v("\n          "+e._s(t.strIngredient1)+"\n          "+e._s(t.strIngredient2)+"\n          "+e._s(t.strIngredient3)+"\n          "+e._s(t.strIngredient4)+"\n          "+e._s(t.strIngredient5)+"\n          "+e._s(t.strIngredient6)+"\n          "+e._s(t.strIngredient7)+"\n          "+e._s(t.strIngredient8)+"\n          "+e._s(t.strIngredient9)+"\n          "+e._s(t.strIngredient10)+"\n          "+e._s(t.strIngredient11)+"\n          "+e._s(t.strIngredient12)+"\n          "+e._s(t.strIngredient13)+"\n          "+e._s(t.strIngredient14)+"\n          "+e._s(t.strIngredient15)+"\n          "+e._s(t.strIngredient16)+"\n          "+e._s(t.strIngredient17)+"\n          "+e._s(t.strIngredient18)+"\n          "+e._s(t.strIngredient19)+"\n          "+e._s(t.strIngredient20)+"\n          "+e._s(t.strIngredient21)+"\n          "+e._s(t.strIngredient22)+"\n          "+e._s(t.strIngredient23)+"\n          "+e._s(t.strIngredient24)+"\n          "+e._s(t.strIngredient25)+"\n        ")])])]),n("p",[e._v(e._s(t.strInstructions))]),n("h3",[e._v("link to Youtube")])])}),0):e.results&&0===e.results.length?n("div",{staticClass:"no-results"},[n("h2",[e._v("No Recipes Found")]),n("p",[e._v("Let's look for somthing else")])]):e._e(),e.errors&&e.errors.length>0?n("ul",{staticClass:"errors"},e._l(e.errors,function(t,r){return n("li",{key:r},[e._v(e._s(t.message))])}),0):e._e()])},y=[],w=(n("96cf"),n("3b8d")),j={name:"Reveal",data:function(){return{results:null,errors:[],ingredient:null}},created:function(){var e=Object(w["a"])(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.item=this.$route.params.item,console.log(this.item),console.log(this.item.strMeal),e.next=5,l.a.get("https://www.themealdb.com/api/json/v1/1/search.php",{params:{s:this.item.strMeal}}).then(function(e){t.results=e.data.meals,console.log(t.results)}).catch(function(e){t.errors.push(e)});case 5:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},C=j,M=(n("784b"),Object(p["a"])(C,I,y,!1,null,"ab4c96a0",null)),k=M.exports;r["default"].use(b["a"]);var x=new b["a"]({routes:[{path:"/",name:"recipe",component:g},{path:"/reveal",name:"reveal",component:k}]}),O=n("5f5b");n("f9e3"),n("2dd8");r["default"].use(O["a"]),r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(m)},router:x}).$mount("#app")},6275:function(e,t,n){},"64a9":function(e,t,n){},"784b":function(e,t,n){"use strict";var r=n("41e1"),s=n.n(r);s.a},"8ed5":function(e,t,n){"use strict";var r=n("6275"),s=n.n(r);s.a},cdcc:function(e,t,n){e.exports=n.p+"assets/img/veg.3e24ea40.jpg"}});
//# sourceMappingURL=app.ffeaace5.js.map