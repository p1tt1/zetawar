goog.provide('zetawar.views.common');
zetawar.views.common.nav_links = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),zetawar.site.prefix.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["/"], 0)),new cljs.core.Keyword(null,"title","title",636505583),"Game"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),zetawar.site.prefix.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["/blog"], 0)),new cljs.core.Keyword(null,"title","title",636505583),"Blog"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),zetawar.site.prefix.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["/docs"], 0)),new cljs.core.Keyword(null,"title","title",636505583),"Documentation"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/zetawar/zetawar/issues",new cljs.core.Keyword(null,"title","title",636505583),"Roadmap"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),zetawar.site.prefix.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["/backers"], 0)),new cljs.core.Keyword(null,"title","title",636505583),"Backers"], null)], null);
zetawar.views.common.navbar = (function zetawar$views$common$navbar(var_args){
var G__52145 = arguments.length;
switch (G__52145) {
case 0:
return zetawar.views.common.navbar.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return zetawar.views.common.navbar.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zetawar.views.common.navbar.cljs$core$IFn$_invoke$arity$0 = (function (){
return zetawar.views.common.navbar.cljs$core$IFn$_invoke$arity$1(null);
}));

(zetawar.views.common.navbar.cljs$core$IFn$_invoke$arity$1 = (function (active_title){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.fixed.top-0.left-0.right-0.z-50.bg-gray-800.text-white","nav.fixed.top-0.left-0.right-0.z-50.bg-gray-800.text-white",1971510522),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container.mx-auto.px-4","div.container.mx-auto.px-4",903284582),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.justify-between.h-16","div.flex.items-center.justify-between.h-16",1464393540),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.flex.items-center.text-xl.font-bold.mr-4","a.flex.items-center.text-xl.font-bold.mr-4",-717150379),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.inline.mr-3","img.inline.mr-3",-1665696333),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),zetawar.site.prefix.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["/images/navbar-logo.svg"], 0))], null)], null),"Zetawar"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.flex.space-x-4","ul.flex.space-x-4",-1546171988)], null),(function (){var iter__5523__auto__ = (function zetawar$views$common$iter__52146(s__52147){
return (new cljs.core.LazySeq(null,(function (){
var s__52147__$1 = s__52147;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__52147__$1);
if(temp__5823__auto__){
var s__52147__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52147__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__52147__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__52149 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__52148 = (0);
while(true){
if((i__52148 < size__5522__auto__)){
var map__52152 = cljs.core._nth(c__5521__auto__,i__52148);
var map__52152__$1 = cljs.core.__destructure_map(map__52152);
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52152__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52152__$1,new cljs.core.Keyword(null,"title","title",636505583));
cljs.core.chunk_append(b__52149,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(title,active_title))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.active","li.active",-1051611101),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-white.font-medium","a.text-white.font-medium",-2070612560),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),href], null),title], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-gray-300.hover:text-white.transition-colors","a.text-gray-300.hover:text-white.transition-colors",-1690322062),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),href], null),title], null)], null)));

var G__52195 = (i__52148 + (1));
i__52148 = G__52195;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52149),zetawar$views$common$iter__52146(cljs.core.chunk_rest(s__52147__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52149),null);
}
} else {
var map__52153 = cljs.core.first(s__52147__$2);
var map__52153__$1 = cljs.core.__destructure_map(map__52153);
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52153__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52153__$1,new cljs.core.Keyword(null,"title","title",636505583));
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(title,active_title))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.active","li.active",-1051611101),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-white.font-medium","a.text-white.font-medium",-2070612560),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),href], null),title], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-gray-300.hover:text-white.transition-colors","a.text-gray-300.hover:text-white.transition-colors",-1690322062),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),href], null),title], null)], null)),zetawar$views$common$iter__52146(cljs.core.rest(s__52147__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(zetawar.views.common.nav_links);
})())], null)], null)], null)], null);
}));

(zetawar.views.common.navbar.cljs$lang$maxFixedArity = 1);

zetawar.views.common.footer = (function zetawar$views$common$footer(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container.mx-auto.px-4","div.container.mx-auto.px-4",903284582),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#footer.text-center.mt-5.py-2.border-t.border-gray-300.text-gray-600","div#footer.text-center.mt-5.py-2.border-t.border-gray-300.text-gray-600",-1056893715),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Build: ",(cljs.core.truth_(cljs.core.not_empty(zetawar.site.build))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-gray-600.hover:text-gray-800","a.text-gray-600.hover:text-gray-800",-1203675131),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["/builds/",zetawar.site.build].join('')], null),zetawar.site.build], null):"DEV"),(cljs.core.truth_(cljs.core.not_empty(zetawar.site.build_timestamp))?[" \u2022 ",zetawar.site.build_timestamp].join(''):null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Follow ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-gray-600.hover:text-gray-800","a.text-gray-600.hover:text-gray-800",-1203675131),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://twitter.com/ZetawarGame"], null),"@ZetawarGame"], null)," for updates. ","Questions or comments? Send us some ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-gray-600.hover:text-gray-800","a.text-gray-600.hover:text-gray-800",-1203675131),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"http://goo.gl/forms/RgTpkCYDBk"], null),"feedback"], null),"."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Copyright 2016 Arugaba LLC under the ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-gray-600.hover:text-gray-800","a.text-gray-600.hover:text-gray-800",-1203675131),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/Zetawar/zetawar/blob/master/LICENSE.txt"], null),"MIT license"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Artwork from ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-gray-600.hover:text-gray-800","a.text-gray-600.hover:text-gray-800",-1203675131),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/cvincent/elite-command"], null),"Elite Command"], null)," Copyright 2015 Chris Vincent under ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-gray-600.hover:text-gray-800","a.text-gray-600.hover:text-gray-800",-1203675131),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"http://creativecommons.org/licenses/by/4.0/"], null),"Creative Commons Attribution 4.0 International License"], null)], null)], null)], null);
});

//# sourceMappingURL=zetawar.views.common.js.map
