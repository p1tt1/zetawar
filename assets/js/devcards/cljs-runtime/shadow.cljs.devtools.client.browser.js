goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___41545 = arguments.length;
var i__5770__auto___41547 = (0);
while(true){
if((i__5770__auto___41547 < len__5769__auto___41545)){
args__5775__auto__.push((arguments[i__5770__auto___41547]));

var G__41548 = (i__5770__auto___41547 + (1));
i__5770__auto___41547 = G__41548;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq40909){
var G__40910 = cljs.core.first(seq40909);
var seq40909__$1 = cljs.core.next(seq40909);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40910,seq40909__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__40921 = cljs.core.seq(sources);
var chunk__40922 = null;
var count__40923 = (0);
var i__40924 = (0);
while(true){
if((i__40924 < count__40923)){
var map__40933 = chunk__40922.cljs$core$IIndexed$_nth$arity$2(null,i__40924);
var map__40933__$1 = cljs.core.__destructure_map(map__40933);
var src = map__40933__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40933__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40933__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40933__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40933__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e40938){var e_41550 = e40938;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_41550);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_41550.message)].join('')));
}

var G__41551 = seq__40921;
var G__41552 = chunk__40922;
var G__41553 = count__40923;
var G__41554 = (i__40924 + (1));
seq__40921 = G__41551;
chunk__40922 = G__41552;
count__40923 = G__41553;
i__40924 = G__41554;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__40921);
if(temp__5823__auto__){
var seq__40921__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40921__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__40921__$1);
var G__41555 = cljs.core.chunk_rest(seq__40921__$1);
var G__41556 = c__5568__auto__;
var G__41557 = cljs.core.count(c__5568__auto__);
var G__41558 = (0);
seq__40921 = G__41555;
chunk__40922 = G__41556;
count__40923 = G__41557;
i__40924 = G__41558;
continue;
} else {
var map__40939 = cljs.core.first(seq__40921__$1);
var map__40939__$1 = cljs.core.__destructure_map(map__40939);
var src = map__40939__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40939__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40939__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40939__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40939__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e40940){var e_41560 = e40940;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_41560);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_41560.message)].join('')));
}

var G__41562 = cljs.core.next(seq__40921__$1);
var G__41563 = null;
var G__41564 = (0);
var G__41565 = (0);
seq__40921 = G__41562;
chunk__40922 = G__41563;
count__40923 = G__41564;
i__40924 = G__41565;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__40942 = cljs.core.seq(js_requires);
var chunk__40943 = null;
var count__40944 = (0);
var i__40945 = (0);
while(true){
if((i__40945 < count__40944)){
var js_ns = chunk__40943.cljs$core$IIndexed$_nth$arity$2(null,i__40945);
var require_str_41566 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_41566);


var G__41567 = seq__40942;
var G__41568 = chunk__40943;
var G__41569 = count__40944;
var G__41570 = (i__40945 + (1));
seq__40942 = G__41567;
chunk__40943 = G__41568;
count__40944 = G__41569;
i__40945 = G__41570;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__40942);
if(temp__5823__auto__){
var seq__40942__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40942__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__40942__$1);
var G__41571 = cljs.core.chunk_rest(seq__40942__$1);
var G__41572 = c__5568__auto__;
var G__41573 = cljs.core.count(c__5568__auto__);
var G__41574 = (0);
seq__40942 = G__41571;
chunk__40943 = G__41572;
count__40944 = G__41573;
i__40945 = G__41574;
continue;
} else {
var js_ns = cljs.core.first(seq__40942__$1);
var require_str_41575 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_41575);


var G__41576 = cljs.core.next(seq__40942__$1);
var G__41577 = null;
var G__41578 = (0);
var G__41579 = (0);
seq__40942 = G__41576;
chunk__40943 = G__41577;
count__40944 = G__41578;
i__40945 = G__41579;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__40957){
var map__40959 = p__40957;
var map__40959__$1 = cljs.core.__destructure_map(map__40959);
var msg = map__40959__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40959__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40959__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40960(s__40961){
return (new cljs.core.LazySeq(null,(function (){
var s__40961__$1 = s__40961;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__40961__$1);
if(temp__5823__auto__){
var xs__6383__auto__ = temp__5823__auto__;
var map__40968 = cljs.core.first(xs__6383__auto__);
var map__40968__$1 = cljs.core.__destructure_map(map__40968);
var src = map__40968__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40968__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40968__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__40961__$1,map__40968,map__40968__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__40959,map__40959__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40960_$_iter__40962(s__40963){
return (new cljs.core.LazySeq(null,((function (s__40961__$1,map__40968,map__40968__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__40959,map__40959__$1,msg,info,reload_info){
return (function (){
var s__40963__$1 = s__40963;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__40963__$1);
if(temp__5823__auto____$1){
var s__40963__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__40963__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__40963__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__40965 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__40964 = (0);
while(true){
if((i__40964 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__40964);
cljs.core.chunk_append(b__40965,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__41581 = (i__40964 + (1));
i__40964 = G__41581;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40965),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40960_$_iter__40962(cljs.core.chunk_rest(s__40963__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40965),null);
}
} else {
var warning = cljs.core.first(s__40963__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40960_$_iter__40962(cljs.core.rest(s__40963__$2)));
}
} else {
return null;
}
break;
}
});})(s__40961__$1,map__40968,map__40968__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__40959,map__40959__$1,msg,info,reload_info))
,null,null));
});})(s__40961__$1,map__40968,map__40968__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__40959,map__40959__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40960(cljs.core.rest(s__40961__$1)));
} else {
var G__41582 = cljs.core.rest(s__40961__$1);
s__40961__$1 = G__41582;
continue;
}
} else {
var G__41583 = cljs.core.rest(s__40961__$1);
s__40961__$1 = G__41583;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__40995_41585 = cljs.core.seq(warnings);
var chunk__40996_41586 = null;
var count__40997_41587 = (0);
var i__40998_41588 = (0);
while(true){
if((i__40998_41588 < count__40997_41587)){
var map__41009_41589 = chunk__40996_41586.cljs$core$IIndexed$_nth$arity$2(null,i__40998_41588);
var map__41009_41590__$1 = cljs.core.__destructure_map(map__41009_41589);
var w_41591 = map__41009_41590__$1;
var msg_41592__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41009_41590__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_41593 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41009_41590__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_41594 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41009_41590__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_41595 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41009_41590__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_41595)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_41593),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_41594),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_41592__$1)].join(''));


var G__41596 = seq__40995_41585;
var G__41597 = chunk__40996_41586;
var G__41598 = count__40997_41587;
var G__41599 = (i__40998_41588 + (1));
seq__40995_41585 = G__41596;
chunk__40996_41586 = G__41597;
count__40997_41587 = G__41598;
i__40998_41588 = G__41599;
continue;
} else {
var temp__5823__auto___41600 = cljs.core.seq(seq__40995_41585);
if(temp__5823__auto___41600){
var seq__40995_41601__$1 = temp__5823__auto___41600;
if(cljs.core.chunked_seq_QMARK_(seq__40995_41601__$1)){
var c__5568__auto___41602 = cljs.core.chunk_first(seq__40995_41601__$1);
var G__41603 = cljs.core.chunk_rest(seq__40995_41601__$1);
var G__41604 = c__5568__auto___41602;
var G__41605 = cljs.core.count(c__5568__auto___41602);
var G__41606 = (0);
seq__40995_41585 = G__41603;
chunk__40996_41586 = G__41604;
count__40997_41587 = G__41605;
i__40998_41588 = G__41606;
continue;
} else {
var map__41010_41607 = cljs.core.first(seq__40995_41601__$1);
var map__41010_41608__$1 = cljs.core.__destructure_map(map__41010_41607);
var w_41609 = map__41010_41608__$1;
var msg_41610__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41010_41608__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_41611 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41010_41608__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_41612 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41010_41608__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_41613 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41010_41608__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_41613)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_41611),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_41612),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_41610__$1)].join(''));


var G__41614 = cljs.core.next(seq__40995_41601__$1);
var G__41615 = null;
var G__41616 = (0);
var G__41617 = (0);
seq__40995_41585 = G__41614;
chunk__40996_41586 = G__41615;
count__40997_41587 = G__41616;
i__40998_41588 = G__41617;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__40955_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__40955_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__41025){
var map__41026 = p__41025;
var map__41026__$1 = cljs.core.__destructure_map(map__41026);
var msg = map__41026__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41026__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41026__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__41027 = cljs.core.seq(updates);
var chunk__41029 = null;
var count__41030 = (0);
var i__41031 = (0);
while(true){
if((i__41031 < count__41030)){
var path = chunk__41029.cljs$core$IIndexed$_nth$arity$2(null,i__41031);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__41269_41618 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__41273_41619 = null;
var count__41274_41620 = (0);
var i__41275_41621 = (0);
while(true){
if((i__41275_41621 < count__41274_41620)){
var node_41622 = chunk__41273_41619.cljs$core$IIndexed$_nth$arity$2(null,i__41275_41621);
if(cljs.core.not(node_41622.shadow$old)){
var path_match_41623 = shadow.cljs.devtools.client.browser.match_paths(node_41622.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41623)){
var new_link_41624 = (function (){var G__41332 = node_41622.cloneNode(true);
G__41332.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41623),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__41332;
})();
(node_41622.shadow$old = true);

(new_link_41624.onload = ((function (seq__41269_41618,chunk__41273_41619,count__41274_41620,i__41275_41621,seq__41027,chunk__41029,count__41030,i__41031,new_link_41624,path_match_41623,node_41622,path,map__41026,map__41026__$1,msg,updates,reload_info){
return (function (e){
var seq__41334_41625 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__41336_41626 = null;
var count__41337_41627 = (0);
var i__41338_41628 = (0);
while(true){
if((i__41338_41628 < count__41337_41627)){
var map__41347_41629 = chunk__41336_41626.cljs$core$IIndexed$_nth$arity$2(null,i__41338_41628);
var map__41347_41630__$1 = cljs.core.__destructure_map(map__41347_41629);
var task_41631 = map__41347_41630__$1;
var fn_str_41632 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41347_41630__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41633 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41347_41630__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41634 = goog.getObjectByName(fn_str_41632,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41633)].join(''));

(fn_obj_41634.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41634.cljs$core$IFn$_invoke$arity$2(path,new_link_41624) : fn_obj_41634.call(null,path,new_link_41624));


var G__41635 = seq__41334_41625;
var G__41636 = chunk__41336_41626;
var G__41637 = count__41337_41627;
var G__41638 = (i__41338_41628 + (1));
seq__41334_41625 = G__41635;
chunk__41336_41626 = G__41636;
count__41337_41627 = G__41637;
i__41338_41628 = G__41638;
continue;
} else {
var temp__5823__auto___41639 = cljs.core.seq(seq__41334_41625);
if(temp__5823__auto___41639){
var seq__41334_41640__$1 = temp__5823__auto___41639;
if(cljs.core.chunked_seq_QMARK_(seq__41334_41640__$1)){
var c__5568__auto___41641 = cljs.core.chunk_first(seq__41334_41640__$1);
var G__41642 = cljs.core.chunk_rest(seq__41334_41640__$1);
var G__41643 = c__5568__auto___41641;
var G__41644 = cljs.core.count(c__5568__auto___41641);
var G__41645 = (0);
seq__41334_41625 = G__41642;
chunk__41336_41626 = G__41643;
count__41337_41627 = G__41644;
i__41338_41628 = G__41645;
continue;
} else {
var map__41356_41646 = cljs.core.first(seq__41334_41640__$1);
var map__41356_41647__$1 = cljs.core.__destructure_map(map__41356_41646);
var task_41648 = map__41356_41647__$1;
var fn_str_41649 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41356_41647__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41650 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41356_41647__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41651 = goog.getObjectByName(fn_str_41649,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41650)].join(''));

(fn_obj_41651.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41651.cljs$core$IFn$_invoke$arity$2(path,new_link_41624) : fn_obj_41651.call(null,path,new_link_41624));


var G__41652 = cljs.core.next(seq__41334_41640__$1);
var G__41653 = null;
var G__41654 = (0);
var G__41655 = (0);
seq__41334_41625 = G__41652;
chunk__41336_41626 = G__41653;
count__41337_41627 = G__41654;
i__41338_41628 = G__41655;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_41622);
});})(seq__41269_41618,chunk__41273_41619,count__41274_41620,i__41275_41621,seq__41027,chunk__41029,count__41030,i__41031,new_link_41624,path_match_41623,node_41622,path,map__41026,map__41026__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41623], 0));

goog.dom.insertSiblingAfter(new_link_41624,node_41622);


var G__41656 = seq__41269_41618;
var G__41657 = chunk__41273_41619;
var G__41658 = count__41274_41620;
var G__41659 = (i__41275_41621 + (1));
seq__41269_41618 = G__41656;
chunk__41273_41619 = G__41657;
count__41274_41620 = G__41658;
i__41275_41621 = G__41659;
continue;
} else {
var G__41660 = seq__41269_41618;
var G__41661 = chunk__41273_41619;
var G__41662 = count__41274_41620;
var G__41663 = (i__41275_41621 + (1));
seq__41269_41618 = G__41660;
chunk__41273_41619 = G__41661;
count__41274_41620 = G__41662;
i__41275_41621 = G__41663;
continue;
}
} else {
var G__41664 = seq__41269_41618;
var G__41665 = chunk__41273_41619;
var G__41666 = count__41274_41620;
var G__41667 = (i__41275_41621 + (1));
seq__41269_41618 = G__41664;
chunk__41273_41619 = G__41665;
count__41274_41620 = G__41666;
i__41275_41621 = G__41667;
continue;
}
} else {
var temp__5823__auto___41668 = cljs.core.seq(seq__41269_41618);
if(temp__5823__auto___41668){
var seq__41269_41669__$1 = temp__5823__auto___41668;
if(cljs.core.chunked_seq_QMARK_(seq__41269_41669__$1)){
var c__5568__auto___41670 = cljs.core.chunk_first(seq__41269_41669__$1);
var G__41671 = cljs.core.chunk_rest(seq__41269_41669__$1);
var G__41672 = c__5568__auto___41670;
var G__41673 = cljs.core.count(c__5568__auto___41670);
var G__41674 = (0);
seq__41269_41618 = G__41671;
chunk__41273_41619 = G__41672;
count__41274_41620 = G__41673;
i__41275_41621 = G__41674;
continue;
} else {
var node_41675 = cljs.core.first(seq__41269_41669__$1);
if(cljs.core.not(node_41675.shadow$old)){
var path_match_41676 = shadow.cljs.devtools.client.browser.match_paths(node_41675.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41676)){
var new_link_41677 = (function (){var G__41388 = node_41675.cloneNode(true);
G__41388.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41676),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__41388;
})();
(node_41675.shadow$old = true);

(new_link_41677.onload = ((function (seq__41269_41618,chunk__41273_41619,count__41274_41620,i__41275_41621,seq__41027,chunk__41029,count__41030,i__41031,new_link_41677,path_match_41676,node_41675,seq__41269_41669__$1,temp__5823__auto___41668,path,map__41026,map__41026__$1,msg,updates,reload_info){
return (function (e){
var seq__41393_41678 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__41395_41679 = null;
var count__41396_41680 = (0);
var i__41397_41681 = (0);
while(true){
if((i__41397_41681 < count__41396_41680)){
var map__41403_41682 = chunk__41395_41679.cljs$core$IIndexed$_nth$arity$2(null,i__41397_41681);
var map__41403_41683__$1 = cljs.core.__destructure_map(map__41403_41682);
var task_41684 = map__41403_41683__$1;
var fn_str_41685 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41403_41683__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41686 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41403_41683__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41687 = goog.getObjectByName(fn_str_41685,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41686)].join(''));

(fn_obj_41687.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41687.cljs$core$IFn$_invoke$arity$2(path,new_link_41677) : fn_obj_41687.call(null,path,new_link_41677));


var G__41688 = seq__41393_41678;
var G__41689 = chunk__41395_41679;
var G__41690 = count__41396_41680;
var G__41691 = (i__41397_41681 + (1));
seq__41393_41678 = G__41688;
chunk__41395_41679 = G__41689;
count__41396_41680 = G__41690;
i__41397_41681 = G__41691;
continue;
} else {
var temp__5823__auto___41692__$1 = cljs.core.seq(seq__41393_41678);
if(temp__5823__auto___41692__$1){
var seq__41393_41693__$1 = temp__5823__auto___41692__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41393_41693__$1)){
var c__5568__auto___41694 = cljs.core.chunk_first(seq__41393_41693__$1);
var G__41695 = cljs.core.chunk_rest(seq__41393_41693__$1);
var G__41696 = c__5568__auto___41694;
var G__41697 = cljs.core.count(c__5568__auto___41694);
var G__41698 = (0);
seq__41393_41678 = G__41695;
chunk__41395_41679 = G__41696;
count__41396_41680 = G__41697;
i__41397_41681 = G__41698;
continue;
} else {
var map__41404_41699 = cljs.core.first(seq__41393_41693__$1);
var map__41404_41700__$1 = cljs.core.__destructure_map(map__41404_41699);
var task_41701 = map__41404_41700__$1;
var fn_str_41702 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41404_41700__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41703 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41404_41700__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41704 = goog.getObjectByName(fn_str_41702,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41703)].join(''));

(fn_obj_41704.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41704.cljs$core$IFn$_invoke$arity$2(path,new_link_41677) : fn_obj_41704.call(null,path,new_link_41677));


var G__41705 = cljs.core.next(seq__41393_41693__$1);
var G__41706 = null;
var G__41707 = (0);
var G__41708 = (0);
seq__41393_41678 = G__41705;
chunk__41395_41679 = G__41706;
count__41396_41680 = G__41707;
i__41397_41681 = G__41708;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_41675);
});})(seq__41269_41618,chunk__41273_41619,count__41274_41620,i__41275_41621,seq__41027,chunk__41029,count__41030,i__41031,new_link_41677,path_match_41676,node_41675,seq__41269_41669__$1,temp__5823__auto___41668,path,map__41026,map__41026__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41676], 0));

goog.dom.insertSiblingAfter(new_link_41677,node_41675);


var G__41709 = cljs.core.next(seq__41269_41669__$1);
var G__41710 = null;
var G__41711 = (0);
var G__41712 = (0);
seq__41269_41618 = G__41709;
chunk__41273_41619 = G__41710;
count__41274_41620 = G__41711;
i__41275_41621 = G__41712;
continue;
} else {
var G__41713 = cljs.core.next(seq__41269_41669__$1);
var G__41714 = null;
var G__41715 = (0);
var G__41716 = (0);
seq__41269_41618 = G__41713;
chunk__41273_41619 = G__41714;
count__41274_41620 = G__41715;
i__41275_41621 = G__41716;
continue;
}
} else {
var G__41717 = cljs.core.next(seq__41269_41669__$1);
var G__41718 = null;
var G__41719 = (0);
var G__41720 = (0);
seq__41269_41618 = G__41717;
chunk__41273_41619 = G__41718;
count__41274_41620 = G__41719;
i__41275_41621 = G__41720;
continue;
}
}
} else {
}
}
break;
}


var G__41721 = seq__41027;
var G__41722 = chunk__41029;
var G__41723 = count__41030;
var G__41724 = (i__41031 + (1));
seq__41027 = G__41721;
chunk__41029 = G__41722;
count__41030 = G__41723;
i__41031 = G__41724;
continue;
} else {
var G__41725 = seq__41027;
var G__41726 = chunk__41029;
var G__41727 = count__41030;
var G__41728 = (i__41031 + (1));
seq__41027 = G__41725;
chunk__41029 = G__41726;
count__41030 = G__41727;
i__41031 = G__41728;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__41027);
if(temp__5823__auto__){
var seq__41027__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41027__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__41027__$1);
var G__41729 = cljs.core.chunk_rest(seq__41027__$1);
var G__41730 = c__5568__auto__;
var G__41731 = cljs.core.count(c__5568__auto__);
var G__41732 = (0);
seq__41027 = G__41729;
chunk__41029 = G__41730;
count__41030 = G__41731;
i__41031 = G__41732;
continue;
} else {
var path = cljs.core.first(seq__41027__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__41410_41733 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__41414_41734 = null;
var count__41415_41735 = (0);
var i__41416_41736 = (0);
while(true){
if((i__41416_41736 < count__41415_41735)){
var node_41737 = chunk__41414_41734.cljs$core$IIndexed$_nth$arity$2(null,i__41416_41736);
if(cljs.core.not(node_41737.shadow$old)){
var path_match_41738 = shadow.cljs.devtools.client.browser.match_paths(node_41737.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41738)){
var new_link_41739 = (function (){var G__41479 = node_41737.cloneNode(true);
G__41479.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41738),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__41479;
})();
(node_41737.shadow$old = true);

(new_link_41739.onload = ((function (seq__41410_41733,chunk__41414_41734,count__41415_41735,i__41416_41736,seq__41027,chunk__41029,count__41030,i__41031,new_link_41739,path_match_41738,node_41737,path,seq__41027__$1,temp__5823__auto__,map__41026,map__41026__$1,msg,updates,reload_info){
return (function (e){
var seq__41480_41740 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__41482_41741 = null;
var count__41483_41742 = (0);
var i__41484_41743 = (0);
while(true){
if((i__41484_41743 < count__41483_41742)){
var map__41488_41744 = chunk__41482_41741.cljs$core$IIndexed$_nth$arity$2(null,i__41484_41743);
var map__41488_41745__$1 = cljs.core.__destructure_map(map__41488_41744);
var task_41746 = map__41488_41745__$1;
var fn_str_41747 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41488_41745__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41748 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41488_41745__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41749 = goog.getObjectByName(fn_str_41747,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41748)].join(''));

(fn_obj_41749.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41749.cljs$core$IFn$_invoke$arity$2(path,new_link_41739) : fn_obj_41749.call(null,path,new_link_41739));


var G__41750 = seq__41480_41740;
var G__41751 = chunk__41482_41741;
var G__41752 = count__41483_41742;
var G__41753 = (i__41484_41743 + (1));
seq__41480_41740 = G__41750;
chunk__41482_41741 = G__41751;
count__41483_41742 = G__41752;
i__41484_41743 = G__41753;
continue;
} else {
var temp__5823__auto___41754__$1 = cljs.core.seq(seq__41480_41740);
if(temp__5823__auto___41754__$1){
var seq__41480_41755__$1 = temp__5823__auto___41754__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41480_41755__$1)){
var c__5568__auto___41756 = cljs.core.chunk_first(seq__41480_41755__$1);
var G__41757 = cljs.core.chunk_rest(seq__41480_41755__$1);
var G__41758 = c__5568__auto___41756;
var G__41759 = cljs.core.count(c__5568__auto___41756);
var G__41760 = (0);
seq__41480_41740 = G__41757;
chunk__41482_41741 = G__41758;
count__41483_41742 = G__41759;
i__41484_41743 = G__41760;
continue;
} else {
var map__41489_41761 = cljs.core.first(seq__41480_41755__$1);
var map__41489_41762__$1 = cljs.core.__destructure_map(map__41489_41761);
var task_41763 = map__41489_41762__$1;
var fn_str_41764 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41489_41762__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41765 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41489_41762__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41766 = goog.getObjectByName(fn_str_41764,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41765)].join(''));

(fn_obj_41766.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41766.cljs$core$IFn$_invoke$arity$2(path,new_link_41739) : fn_obj_41766.call(null,path,new_link_41739));


var G__41767 = cljs.core.next(seq__41480_41755__$1);
var G__41768 = null;
var G__41769 = (0);
var G__41770 = (0);
seq__41480_41740 = G__41767;
chunk__41482_41741 = G__41768;
count__41483_41742 = G__41769;
i__41484_41743 = G__41770;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_41737);
});})(seq__41410_41733,chunk__41414_41734,count__41415_41735,i__41416_41736,seq__41027,chunk__41029,count__41030,i__41031,new_link_41739,path_match_41738,node_41737,path,seq__41027__$1,temp__5823__auto__,map__41026,map__41026__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41738], 0));

goog.dom.insertSiblingAfter(new_link_41739,node_41737);


var G__41771 = seq__41410_41733;
var G__41772 = chunk__41414_41734;
var G__41773 = count__41415_41735;
var G__41774 = (i__41416_41736 + (1));
seq__41410_41733 = G__41771;
chunk__41414_41734 = G__41772;
count__41415_41735 = G__41773;
i__41416_41736 = G__41774;
continue;
} else {
var G__41775 = seq__41410_41733;
var G__41776 = chunk__41414_41734;
var G__41777 = count__41415_41735;
var G__41778 = (i__41416_41736 + (1));
seq__41410_41733 = G__41775;
chunk__41414_41734 = G__41776;
count__41415_41735 = G__41777;
i__41416_41736 = G__41778;
continue;
}
} else {
var G__41779 = seq__41410_41733;
var G__41780 = chunk__41414_41734;
var G__41781 = count__41415_41735;
var G__41782 = (i__41416_41736 + (1));
seq__41410_41733 = G__41779;
chunk__41414_41734 = G__41780;
count__41415_41735 = G__41781;
i__41416_41736 = G__41782;
continue;
}
} else {
var temp__5823__auto___41783__$1 = cljs.core.seq(seq__41410_41733);
if(temp__5823__auto___41783__$1){
var seq__41410_41784__$1 = temp__5823__auto___41783__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41410_41784__$1)){
var c__5568__auto___41785 = cljs.core.chunk_first(seq__41410_41784__$1);
var G__41786 = cljs.core.chunk_rest(seq__41410_41784__$1);
var G__41787 = c__5568__auto___41785;
var G__41788 = cljs.core.count(c__5568__auto___41785);
var G__41789 = (0);
seq__41410_41733 = G__41786;
chunk__41414_41734 = G__41787;
count__41415_41735 = G__41788;
i__41416_41736 = G__41789;
continue;
} else {
var node_41790 = cljs.core.first(seq__41410_41784__$1);
if(cljs.core.not(node_41790.shadow$old)){
var path_match_41791 = shadow.cljs.devtools.client.browser.match_paths(node_41790.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41791)){
var new_link_41792 = (function (){var G__41496 = node_41790.cloneNode(true);
G__41496.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41791),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__41496;
})();
(node_41790.shadow$old = true);

(new_link_41792.onload = ((function (seq__41410_41733,chunk__41414_41734,count__41415_41735,i__41416_41736,seq__41027,chunk__41029,count__41030,i__41031,new_link_41792,path_match_41791,node_41790,seq__41410_41784__$1,temp__5823__auto___41783__$1,path,seq__41027__$1,temp__5823__auto__,map__41026,map__41026__$1,msg,updates,reload_info){
return (function (e){
var seq__41497_41793 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__41499_41794 = null;
var count__41500_41795 = (0);
var i__41501_41796 = (0);
while(true){
if((i__41501_41796 < count__41500_41795)){
var map__41507_41797 = chunk__41499_41794.cljs$core$IIndexed$_nth$arity$2(null,i__41501_41796);
var map__41507_41798__$1 = cljs.core.__destructure_map(map__41507_41797);
var task_41799 = map__41507_41798__$1;
var fn_str_41800 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41507_41798__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41801 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41507_41798__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41802 = goog.getObjectByName(fn_str_41800,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41801)].join(''));

(fn_obj_41802.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41802.cljs$core$IFn$_invoke$arity$2(path,new_link_41792) : fn_obj_41802.call(null,path,new_link_41792));


var G__41803 = seq__41497_41793;
var G__41804 = chunk__41499_41794;
var G__41805 = count__41500_41795;
var G__41806 = (i__41501_41796 + (1));
seq__41497_41793 = G__41803;
chunk__41499_41794 = G__41804;
count__41500_41795 = G__41805;
i__41501_41796 = G__41806;
continue;
} else {
var temp__5823__auto___41807__$2 = cljs.core.seq(seq__41497_41793);
if(temp__5823__auto___41807__$2){
var seq__41497_41808__$1 = temp__5823__auto___41807__$2;
if(cljs.core.chunked_seq_QMARK_(seq__41497_41808__$1)){
var c__5568__auto___41809 = cljs.core.chunk_first(seq__41497_41808__$1);
var G__41810 = cljs.core.chunk_rest(seq__41497_41808__$1);
var G__41811 = c__5568__auto___41809;
var G__41812 = cljs.core.count(c__5568__auto___41809);
var G__41813 = (0);
seq__41497_41793 = G__41810;
chunk__41499_41794 = G__41811;
count__41500_41795 = G__41812;
i__41501_41796 = G__41813;
continue;
} else {
var map__41509_41814 = cljs.core.first(seq__41497_41808__$1);
var map__41509_41815__$1 = cljs.core.__destructure_map(map__41509_41814);
var task_41816 = map__41509_41815__$1;
var fn_str_41817 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41509_41815__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41818 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41509_41815__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41819 = goog.getObjectByName(fn_str_41817,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41818)].join(''));

(fn_obj_41819.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41819.cljs$core$IFn$_invoke$arity$2(path,new_link_41792) : fn_obj_41819.call(null,path,new_link_41792));


var G__41820 = cljs.core.next(seq__41497_41808__$1);
var G__41821 = null;
var G__41822 = (0);
var G__41823 = (0);
seq__41497_41793 = G__41820;
chunk__41499_41794 = G__41821;
count__41500_41795 = G__41822;
i__41501_41796 = G__41823;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_41790);
});})(seq__41410_41733,chunk__41414_41734,count__41415_41735,i__41416_41736,seq__41027,chunk__41029,count__41030,i__41031,new_link_41792,path_match_41791,node_41790,seq__41410_41784__$1,temp__5823__auto___41783__$1,path,seq__41027__$1,temp__5823__auto__,map__41026,map__41026__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41791], 0));

goog.dom.insertSiblingAfter(new_link_41792,node_41790);


var G__41824 = cljs.core.next(seq__41410_41784__$1);
var G__41825 = null;
var G__41826 = (0);
var G__41827 = (0);
seq__41410_41733 = G__41824;
chunk__41414_41734 = G__41825;
count__41415_41735 = G__41826;
i__41416_41736 = G__41827;
continue;
} else {
var G__41828 = cljs.core.next(seq__41410_41784__$1);
var G__41829 = null;
var G__41830 = (0);
var G__41831 = (0);
seq__41410_41733 = G__41828;
chunk__41414_41734 = G__41829;
count__41415_41735 = G__41830;
i__41416_41736 = G__41831;
continue;
}
} else {
var G__41832 = cljs.core.next(seq__41410_41784__$1);
var G__41833 = null;
var G__41834 = (0);
var G__41835 = (0);
seq__41410_41733 = G__41832;
chunk__41414_41734 = G__41833;
count__41415_41735 = G__41834;
i__41416_41736 = G__41835;
continue;
}
}
} else {
}
}
break;
}


var G__41836 = cljs.core.next(seq__41027__$1);
var G__41837 = null;
var G__41838 = (0);
var G__41839 = (0);
seq__41027 = G__41836;
chunk__41029 = G__41837;
count__41030 = G__41838;
i__41031 = G__41839;
continue;
} else {
var G__41840 = cljs.core.next(seq__41027__$1);
var G__41841 = null;
var G__41842 = (0);
var G__41843 = (0);
seq__41027 = G__41840;
chunk__41029 = G__41841;
count__41030 = G__41842;
i__41031 = G__41843;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__41515){
var map__41516 = p__41515;
var map__41516__$1 = cljs.core.__destructure_map(map__41516);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41516__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__41517,done,error){
var map__41518 = p__41517;
var map__41518__$1 = cljs.core.__destructure_map(map__41518);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41518__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__41524,done,error){
var map__41525 = p__41524;
var map__41525__$1 = cljs.core.__destructure_map(map__41525);
var msg = map__41525__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41525__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41525__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41525__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__41526){
var map__41527 = p__41526;
var map__41527__$1 = cljs.core.__destructure_map(map__41527);
var src = map__41527__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41527__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__41529 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__41529) : done.call(null,G__41529));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__41531){
var map__41532 = p__41531;
var map__41532__$1 = cljs.core.__destructure_map(map__41532);
var msg__$1 = map__41532__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41532__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e41533){var ex = e41533;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__41534){
var map__41535 = p__41534;
var map__41535__$1 = cljs.core.__destructure_map(map__41535);
var env = map__41535__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41535__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__41540){
var map__41541 = p__41540;
var map__41541__$1 = cljs.core.__destructure_map(map__41541);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41541__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41541__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__41542){
var map__41543 = p__41542;
var map__41543__$1 = cljs.core.__destructure_map(map__41543);
var svc = map__41543__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41543__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
