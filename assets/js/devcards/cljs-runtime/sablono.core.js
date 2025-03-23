goog.provide('sablono.core');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
/**
 * The React.js create element function.
 */
sablono.core.create_element = module$node_modules$react$index.createElement;
/**
 * The React.js Fragment.
 */
sablono.core.fragment = module$node_modules$react$index.Fragment;
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__41292__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__40914 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__40915 = cljs.core.seq(vec__40914);
var first__40916 = cljs.core.first(seq__40915);
var seq__40915__$1 = cljs.core.next(seq__40915);
var tag = first__40916;
var body = seq__40915__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__41292 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41296__i = 0, G__41296__a = new Array(arguments.length -  0);
while (G__41296__i < G__41296__a.length) {G__41296__a[G__41296__i] = arguments[G__41296__i + 0]; ++G__41296__i;}
  args = new cljs.core.IndexedSeq(G__41296__a,0,null);
} 
return G__41292__delegate.call(this,args);};
G__41292.cljs$lang$maxFixedArity = 0;
G__41292.cljs$lang$applyTo = (function (arglist__41297){
var args = cljs.core.seq(arglist__41297);
return G__41292__delegate(args);
});
G__41292.cljs$core$IFn$_invoke$arity$variadic = G__41292__delegate;
return G__41292;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5523__auto__ = (function sablono$core$update_arglists_$_iter__40917(s__40918){
return (new cljs.core.LazySeq(null,(function (){
var s__40918__$1 = s__40918;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__40918__$1);
if(temp__5823__auto__){
var s__40918__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40918__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__40918__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__40920 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__40919 = (0);
while(true){
if((i__40919 < size__5522__auto__)){
var args = cljs.core._nth(c__5521__auto__,i__40919);
cljs.core.chunk_append(b__40920,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__41299 = (i__40919 + (1));
i__40919 = G__41299;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40920),sablono$core$update_arglists_$_iter__40917(cljs.core.chunk_rest(s__40918__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40920),null);
}
} else {
var args = cljs.core.first(s__40918__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__40917(cljs.core.rest(s__40918__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__5775__auto__ = [];
var len__5769__auto___41300 = arguments.length;
var i__5770__auto___41301 = (0);
while(true){
if((i__5770__auto___41301 < len__5769__auto___41300)){
args__5775__auto__.push((arguments[i__5770__auto___41301]));

var G__41302 = (i__5770__auto___41301 + (1));
i__5770__auto___41301 = G__41302;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5523__auto__ = (function sablono$core$iter__40934(s__40935){
return (new cljs.core.LazySeq(null,(function (){
var s__40935__$1 = s__40935;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__40935__$1);
if(temp__5823__auto__){
var s__40935__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40935__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__40935__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__40937 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__40936 = (0);
while(true){
if((i__40936 < size__5522__auto__)){
var style = cljs.core._nth(c__5521__auto__,i__40936);
cljs.core.chunk_append(b__40937,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__41304 = (i__40936 + (1));
i__40936 = G__41304;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40937),sablono$core$iter__40934(cljs.core.chunk_rest(s__40935__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40937),null);
}
} else {
var style = cljs.core.first(s__40935__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__40934(cljs.core.rest(s__40935__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(styles);
}));

(sablono.core.include_css.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sablono.core.include_css.cljs$lang$applyTo = (function (seq40926){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40926));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js("http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to40951 = (function sablono$core$link_to40951(var_args){
var args__5775__auto__ = [];
var len__5769__auto___41311 = arguments.length;
var i__5770__auto___41312 = (0);
while(true){
if((i__5770__auto___41312 < len__5769__auto___41311)){
args__5775__auto__.push((arguments[i__5770__auto___41312]));

var G__41313 = (i__5770__auto___41312 + (1));
i__5770__auto___41312 = G__41313;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to40951.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(sablono.core.link_to40951.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to40951.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to40951.cljs$lang$applyTo = (function (seq40969){
var G__40970 = cljs.core.first(seq40969);
var seq40969__$1 = cljs.core.next(seq40969);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40970,seq40969__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to40951);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to40978 = (function sablono$core$mail_to40978(var_args){
var args__5775__auto__ = [];
var len__5769__auto___41319 = arguments.length;
var i__5770__auto___41320 = (0);
while(true){
if((i__5770__auto___41320 < len__5769__auto___41319)){
args__5775__auto__.push((arguments[i__5770__auto___41320]));

var G__41321 = (i__5770__auto___41320 + (1));
i__5770__auto___41320 = G__41321;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to40978.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(sablono.core.mail_to40978.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__40981){
var vec__40982 = p__40981;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40982,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__5045__auto__ = content;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to40978.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to40978.cljs$lang$applyTo = (function (seq40979){
var G__40980 = cljs.core.first(seq40979);
var seq40979__$1 = cljs.core.next(seq40979);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40980,seq40979__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to40978);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list40985 = (function sablono$core$unordered_list40985(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5523__auto__ = (function sablono$core$unordered_list40985_$_iter__40986(s__40987){
return (new cljs.core.LazySeq(null,(function (){
var s__40987__$1 = s__40987;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__40987__$1);
if(temp__5823__auto__){
var s__40987__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40987__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__40987__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__40989 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__40988 = (0);
while(true){
if((i__40988 < size__5522__auto__)){
var x = cljs.core._nth(c__5521__auto__,i__40988);
cljs.core.chunk_append(b__40989,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__41324 = (i__40988 + (1));
i__40988 = G__41324;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40989),sablono$core$unordered_list40985_$_iter__40986(cljs.core.chunk_rest(s__40987__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40989),null);
}
} else {
var x = cljs.core.first(s__40987__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list40985_$_iter__40986(cljs.core.rest(s__40987__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list40985);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list40990 = (function sablono$core$ordered_list40990(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__5523__auto__ = (function sablono$core$ordered_list40990_$_iter__40991(s__40992){
return (new cljs.core.LazySeq(null,(function (){
var s__40992__$1 = s__40992;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__40992__$1);
if(temp__5823__auto__){
var s__40992__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40992__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__40992__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__40994 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__40993 = (0);
while(true){
if((i__40993 < size__5522__auto__)){
var x = cljs.core._nth(c__5521__auto__,i__40993);
cljs.core.chunk_append(b__40994,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__41326 = (i__40993 + (1));
i__40993 = G__41326;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40994),sablono$core$ordered_list40990_$_iter__40991(cljs.core.chunk_rest(s__40992__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40994),null);
}
} else {
var x = cljs.core.first(s__40992__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list40990_$_iter__40991(cljs.core.rest(s__40992__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list40990);
/**
 * Create an image element.
 */
sablono.core.image41000 = (function sablono$core$image41000(var_args){
var G__41002 = arguments.length;
switch (G__41002) {
case 1:
return sablono.core.image41000.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image41000.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image41000.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image41000.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image41000.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image41000);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__41004_SHARP_,p2__41005_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41004_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__41005_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__41007_SHARP_,p2__41008_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41007_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__41008_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__41012 = arguments.length;
switch (G__41012) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5045__auto__ = value;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3);

/**
 * Creates a color input field.
 */
sablono.core.color_field41020 = (function sablono$core$color_field41020(var_args){
var G__41023 = arguments.length;
switch (G__41023) {
case 1:
return sablono.core.color_field41020.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field41020.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field41020.cljs$core$IFn$_invoke$arity$1 = (function (name__40901__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__40901__auto__);
}));

(sablono.core.color_field41020.cljs$core$IFn$_invoke$arity$2 = (function (name__40901__auto__,value__40902__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__40901__auto__,value__40902__auto__);
}));

(sablono.core.color_field41020.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field41020);

/**
 * Creates a date input field.
 */
sablono.core.date_field41052 = (function sablono$core$date_field41052(var_args){
var G__41055 = arguments.length;
switch (G__41055) {
case 1:
return sablono.core.date_field41052.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field41052.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field41052.cljs$core$IFn$_invoke$arity$1 = (function (name__40901__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__40901__auto__);
}));

(sablono.core.date_field41052.cljs$core$IFn$_invoke$arity$2 = (function (name__40901__auto__,value__40902__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__40901__auto__,value__40902__auto__);
}));

(sablono.core.date_field41052.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field41052);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field41059 = (function sablono$core$datetime_field41059(var_args){
var G__41063 = arguments.length;
switch (G__41063) {
case 1:
return sablono.core.datetime_field41059.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field41059.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field41059.cljs$core$IFn$_invoke$arity$1 = (function (name__40901__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__40901__auto__);
}));

(sablono.core.datetime_field41059.cljs$core$IFn$_invoke$arity$2 = (function (name__40901__auto__,value__40902__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__40901__auto__,value__40902__auto__);
}));

(sablono.core.datetime_field41059.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field41059);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field41067 = (function sablono$core$datetime_local_field41067(var_args){
var G__41077 = arguments.length;
switch (G__41077) {
case 1:
return sablono.core.datetime_local_field41067.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field41067.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field41067.cljs$core$IFn$_invoke$arity$1 = (function (name__40901__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__40901__auto__);
}));

(sablono.core.datetime_local_field41067.cljs$core$IFn$_invoke$arity$2 = (function (name__40901__auto__,value__40902__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__40901__auto__,value__40902__auto__);
}));

(sablono.core.datetime_local_field41067.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field41067);

/**
 * Creates a email input field.
 */
sablono.core.email_field41091 = (function sablono$core$email_field41091(var_args){
var G__41101 = arguments.length;
switch (G__41101) {
case 1:
return sablono.core.email_field41091.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field41091.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field41091.cljs$core$IFn$_invoke$arity$1 = (function (name__40901__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__40901__auto__);
}));

(sablono.core.email_field41091.cljs$core$IFn$_invoke$arity$2 = (function (name__40901__auto__,value__40902__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__40901__auto__,value__40902__auto__);
}));

(sablono.core.email_field41091.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field41091);

/**
 * Creates a file input field.
 */
sablono.core.file_field41104 = (function sablono$core$file_field41104(var_args){
var G__41106 = arguments.length;
switch (G__41106) {
case 1:
return sablono.core.file_field41104.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field41104.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field41104.cljs$core$IFn$_invoke$arity$1 = (function (name__40901__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__40901__auto__);
}));

(sablono.core.file_field41104.cljs$core$IFn$_invoke$arity$2 = (function (name__40901__auto__,value__40902__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__40901__auto__,value__40902__auto__);
}));

(sablono.core.file_field41104.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field41104);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field41113 = (function sablono$core$hidden_field41113(var_args){
var G__41115 = arguments.length;
switch (G__41115) {
case 1:
return sablono.core.hidden_field41113.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field41113.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field41113.cljs$core$IFn$_invoke$arity$1 = (function (name__40901__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__40901__auto__);
}));

(sablono.core.hidden_field41113.cljs$core$IFn$_invoke$arity$2 = (function (name__40901__auto__,value__40902__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__40901__auto__,value__40902__auto__);
}));

(sablono.core.hidden_field41113.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field41113);

/**
 * Creates a month input field.
 */
sablono.core.month_field41116 = (function sablono$core$month_field41116(var_args){
var G__41118 = arguments.length;
switch (G__41118) {
case 1:
return sablono.core.month_field41116.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field41116.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field41116.cljs$core$IFn$_invoke$arity$1 = (function (name__40901__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__40901__auto__);
}));

(sablono.core.month_field41116.cljs$core$IFn$_invoke$arity$2 = (function (name__40901__auto__,value__40902__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__40901__auto__,value__40902__auto__);
}));

(sablono.core.month_field41116.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field41116);

/**
 * Creates a number input field.
 */
sablono.core.number_field41119 = (function sablono$core$number_field41119(var_args){
var G__41121 = arguments.length;
switch (G__41121) {
case 1:
return sablono.core.number_field41119.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field41119.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field41119.cljs$core$IFn$_invoke$arity$1 = (function (name__40901__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__40901__auto__);
}));

(sablono.core.number_field41119.cljs$core$IFn$_invoke$arity$2 = (function (name__40901__auto__,value__40902__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__40901__auto__,value__40902__auto__);
}));

(sablono.core.number_field41119.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field41119);

/**
 * Creates a password input field.
 */
sablono.core.password_field41122 = (function sablono$core$password_field41122(var_args){
var G__41124 = arguments.length;
switch (G__41124) {
case 1:
return sablono.core.password_field41122.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field41122.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field41122.cljs$core$IFn$_invoke$arity$1 = (function (name__40901__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__40901__auto__);
}));

(sablono.core.password_field41122.cljs$core$IFn$_invoke$arity$2 = (function (name__40901__auto__,value__40902__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__40901__auto__,value__40902__auto__);
}));

(sablono.core.password_field41122.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field41122);

/**
 * Creates a range input field.
 */
sablono.core.range_field41125 = (function sablono$core$range_field41125(var_args){
var G__41127 = arguments.length;
switch (G__41127) {
case 1:
return sablono.core.range_field41125.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field41125.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field41125.cljs$core$IFn$_invoke$arity$1 = (function (name__40901__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__40901__auto__);
}));

(sablono.core.range_field41125.cljs$core$IFn$_invoke$arity$2 = (function (name__40901__auto__,value__40902__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__40901__auto__,value__40902__auto__);
}));

(sablono.core.range_field41125.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field41125);

/**
 * Creates a search input field.
 */
sablono.core.search_field41128 = (function sablono$core$search_field41128(var_args){
var G__41130 = arguments.length;
switch (G__41130) {
case 1:
return sablono.core.search_field41128.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field41128.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field41128.cljs$core$IFn$_invoke$arity$1 = (function (name__40901__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__40901__auto__);
}));

(sablono.core.search_field41128.cljs$core$IFn$_invoke$arity$2 = (function (name__40901__auto__,value__40902__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__40901__auto__,value__40902__auto__);
}));

(sablono.core.search_field41128.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field41128);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field41131 = (function sablono$core$tel_field41131(var_args){
var G__41133 = arguments.length;
switch (G__41133) {
case 1:
return sablono.core.tel_field41131.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field41131.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field41131.cljs$core$IFn$_invoke$arity$1 = (function (name__40901__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__40901__auto__);
}));

(sablono.core.tel_field41131.cljs$core$IFn$_invoke$arity$2 = (function (name__40901__auto__,value__40902__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__40901__auto__,value__40902__auto__);
}));

(sablono.core.tel_field41131.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field41131);

/**
 * Creates a text input field.
 */
sablono.core.text_field41134 = (function sablono$core$text_field41134(var_args){
var G__41136 = arguments.length;
switch (G__41136) {
case 1:
return sablono.core.text_field41134.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field41134.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field41134.cljs$core$IFn$_invoke$arity$1 = (function (name__40901__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__40901__auto__);
}));

(sablono.core.text_field41134.cljs$core$IFn$_invoke$arity$2 = (function (name__40901__auto__,value__40902__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__40901__auto__,value__40902__auto__);
}));

(sablono.core.text_field41134.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field41134);

/**
 * Creates a time input field.
 */
sablono.core.time_field41137 = (function sablono$core$time_field41137(var_args){
var G__41139 = arguments.length;
switch (G__41139) {
case 1:
return sablono.core.time_field41137.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field41137.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field41137.cljs$core$IFn$_invoke$arity$1 = (function (name__40901__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__40901__auto__);
}));

(sablono.core.time_field41137.cljs$core$IFn$_invoke$arity$2 = (function (name__40901__auto__,value__40902__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__40901__auto__,value__40902__auto__);
}));

(sablono.core.time_field41137.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field41137);

/**
 * Creates a url input field.
 */
sablono.core.url_field41140 = (function sablono$core$url_field41140(var_args){
var G__41142 = arguments.length;
switch (G__41142) {
case 1:
return sablono.core.url_field41140.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field41140.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field41140.cljs$core$IFn$_invoke$arity$1 = (function (name__40901__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__40901__auto__);
}));

(sablono.core.url_field41140.cljs$core$IFn$_invoke$arity$2 = (function (name__40901__auto__,value__40902__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__40901__auto__,value__40902__auto__);
}));

(sablono.core.url_field41140.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field41140);

/**
 * Creates a week input field.
 */
sablono.core.week_field41143 = (function sablono$core$week_field41143(var_args){
var G__41145 = arguments.length;
switch (G__41145) {
case 1:
return sablono.core.week_field41143.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field41143.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field41143.cljs$core$IFn$_invoke$arity$1 = (function (name__40901__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__40901__auto__);
}));

(sablono.core.week_field41143.cljs$core$IFn$_invoke$arity$2 = (function (name__40901__auto__,value__40902__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__40901__auto__,value__40902__auto__);
}));

(sablono.core.week_field41143.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field41143);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box41147 = (function sablono$core$check_box41147(var_args){
var G__41153 = arguments.length;
switch (G__41153) {
case 1:
return sablono.core.check_box41147.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box41147.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box41147.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box41147.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box41147.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box41147.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box41147.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box41147);
/**
 * Creates a radio button.
 */
sablono.core.radio_button41160 = (function sablono$core$radio_button41160(var_args){
var G__41165 = arguments.length;
switch (G__41165) {
case 1:
return sablono.core.radio_button41160.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button41160.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button41160.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button41160.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button41160.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button41160.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button41160.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button41160);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options41181 = (function sablono$core$select_options41181(coll){
var iter__5523__auto__ = (function sablono$core$select_options41181_$_iter__41183(s__41184){
return (new cljs.core.LazySeq(null,(function (){
var s__41184__$1 = s__41184;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__41184__$1);
if(temp__5823__auto__){
var s__41184__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41184__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__41184__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__41186 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__41185 = (0);
while(true){
if((i__41185 < size__5522__auto__)){
var x = cljs.core._nth(c__5521__auto__,i__41185);
cljs.core.chunk_append(b__41186,((cljs.core.sequential_QMARK_(x))?(function (){var vec__41213 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41213,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41213,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41213,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options41181.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options41181.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options41181.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__41400 = (i__41185 + (1));
i__41185 = G__41400;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41186),sablono$core$select_options41181_$_iter__41183(cljs.core.chunk_rest(s__41184__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41186),null);
}
} else {
var x = cljs.core.first(s__41184__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__41229 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41229,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41229,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41229,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options41181.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options41181.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options41181.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options41181_$_iter__41183(cljs.core.rest(s__41184__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options41181);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down41233 = (function sablono$core$drop_down41233(var_args){
var G__41235 = arguments.length;
switch (G__41235) {
case 2:
return sablono.core.drop_down41233.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down41233.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down41233.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down41233.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down41233.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),sablono.core.select_options(options,selected)], null);
}));

(sablono.core.drop_down41233.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down41233);
/**
 * Creates a text area element.
 */
sablono.core.text_area41238 = (function sablono$core$text_area41238(var_args){
var G__41241 = arguments.length;
switch (G__41241) {
case 1:
return sablono.core.text_area41238.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area41238.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area41238.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area41238.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5045__auto__ = value;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area41238.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area41238);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label41246 = (function sablono$core$label41246(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label41246);
/**
 * Creates a submit button.
 */
sablono.core.submit_button41247 = (function sablono$core$submit_button41247(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button41247);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button41249 = (function sablono$core$reset_button41249(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button41249);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to41257 = (function sablono$core$form_to41257(var_args){
var args__5775__auto__ = [];
var len__5769__auto___41407 = arguments.length;
var i__5770__auto___41408 = (0);
while(true){
if((i__5770__auto___41408 < len__5769__auto___41407)){
args__5775__auto__.push((arguments[i__5770__auto___41408]));

var G__41409 = (i__5770__auto___41408 + (1));
i__5770__auto___41408 = G__41409;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to41257.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(sablono.core.form_to41257.cljs$core$IFn$_invoke$arity$variadic = (function (p__41264,body){
var vec__41265 = p__41264;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41265,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41265,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
}));

(sablono.core.form_to41257.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to41257.cljs$lang$applyTo = (function (seq41260){
var G__41261 = cljs.core.first(seq41260);
var seq41260__$1 = cljs.core.next(seq41260);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41261,seq41260__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to41257);

//# sourceMappingURL=sablono.core.js.map
