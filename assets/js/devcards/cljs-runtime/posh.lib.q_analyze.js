goog.provide('posh.lib.q_analyze');
posh.lib.q_analyze.take_until = (function posh$lib$q_analyze$take_until(stop_at_QMARK_,ls){
if(cljs.core.truth_((function (){var or__5045__auto__ = cljs.core.empty_QMARK_(ls);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var G__50923 = cljs.core.first(ls);
return (stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__50923) : stop_at_QMARK_.call(null,G__50923));
}
})())){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons(cljs.core.first(ls),(function (){var G__50924 = stop_at_QMARK_;
var G__50925 = cljs.core.rest(ls);
return (posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2(G__50924,G__50925) : posh.lib.q_analyze.take_until.call(null,G__50924,G__50925));
})());
}
});
posh.lib.q_analyze.rest_at = (function posh$lib$q_analyze$rest_at(rest_at_QMARK_,ls){
while(true){
if(cljs.core.truth_((function (){var or__5045__auto__ = cljs.core.empty_QMARK_(ls);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var G__50926 = cljs.core.first(ls);
return (rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__50926) : rest_at_QMARK_.call(null,G__50926));
}
})())){
return ls;
} else {
var G__51594 = rest_at_QMARK_;
var G__51595 = cljs.core.rest(ls);
rest_at_QMARK_ = G__51594;
ls = G__51595;
continue;
}
break;
}
});
posh.lib.q_analyze.split_list_at = (function posh$lib$q_analyze$split_list_at(split_at_QMARK_,ls){
if(cljs.core.empty_QMARK_(ls)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ls),posh.lib.q_analyze.take_until(split_at_QMARK_,posh.lib.q_analyze.take_until(split_at_QMARK_,cljs.core.rest(ls)))]),(function (){var G__50927 = split_at_QMARK_;
var G__50928 = posh.lib.q_analyze.rest_at(split_at_QMARK_,cljs.core.rest(ls));
return (posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2(G__50927,G__50928) : posh.lib.q_analyze.split_list_at.call(null,G__50927,G__50928));
})()], 0));
}
});
posh.lib.q_analyze.query_to_map = (function posh$lib$q_analyze$query_to_map(query){
if((!(cljs.core.map_QMARK_(query)))){
return posh.lib.q_analyze.split_list_at(cljs.core.keyword_QMARK_,query);
} else {
return query;
}
});
posh.lib.q_analyze.dbvar_QMARK_ = (function posh$lib$q_analyze$dbvar_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)),"$")));
});
posh.lib.q_analyze.qvar_QMARK_ = (function posh$lib$q_analyze$qvar_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)),"?")));
});
posh.lib.q_analyze.get_all_vars = (function posh$lib$q_analyze$get_all_vars(query){
if(cljs.core.empty_QMARK_(query)){
return cljs.core.PersistentHashSet.EMPTY;
} else {
if(cljs.core.coll_QMARK_(cljs.core.first(query))){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2((function (){var G__50930 = cljs.core.first(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__50930) : posh.lib.q_analyze.get_all_vars.call(null,G__50930));
})(),(function (){var G__50931 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__50931) : posh.lib.q_analyze.get_all_vars.call(null,G__50931));
})());
} else {
if(posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(query))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__50932 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__50932) : posh.lib.q_analyze.get_all_vars.call(null,G__50932));
})(),cljs.core.first(query));
} else {
var G__50933 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__50933) : posh.lib.q_analyze.get_all_vars.call(null,G__50933));

}
}
}
});
posh.lib.q_analyze.qvar_gen = (function (){var qvar_count = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((3284832));
return (function (){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["?var",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(qvar_count,cljs.core.inc))].join(''));
});
})();
posh.lib.q_analyze.eav_QMARK_ = (function posh$lib$q_analyze$eav_QMARK_(v){
return ((cljs.core.vector_QMARK_(v)) && (cljs.core.not(cljs.core.some(cljs.core.coll_QMARK_,v))));
});
posh.lib.q_analyze.wildcard_QMARK_ = (function posh$lib$q_analyze$wildcard_QMARK_(s){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.Symbol(null,"_","_",-1201019570,null));
});
posh.lib.q_analyze.normalize_eav_helper = (function posh$lib$q_analyze$normalize_eav_helper(eav,n,neweav,vars){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(0))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eav","eav",-1118737308),neweav,new cljs.core.Keyword(null,"vars","vars",-2046957217),vars], null);
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.first(eav);
if(cljs.core.truth_(and__5043__auto__)){
return (!(posh.lib.q_analyze.wildcard_QMARK_(cljs.core.first(eav))));
} else {
return and__5043__auto__;
}
})())){
var G__50942 = cljs.core.rest(eav);
var G__50943 = (n - (1));
var G__50944 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,cljs.core.first(eav));
var G__50945 = vars;
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__50942,G__50943,G__50944,G__50945) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__50942,G__50943,G__50944,G__50945));
} else {
var var$ = posh.lib.q_analyze.qvar_gen();
var G__50949 = cljs.core.rest(eav);
var G__50950 = (n - (1));
var G__50951 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,var$);
var G__50952 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vars,var$);
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__50949,G__50950,G__50951,G__50952) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__50949,G__50950,G__50951,G__50952));
}
}
});
posh.lib.q_analyze.normalize_eav = (function posh$lib$q_analyze$normalize_eav(eav){
var dbeav = ((posh.lib.q_analyze.dbvar_QMARK_(cljs.core.first(eav)))?eav:cljs.core.cons(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("$"),eav));
return cljs.core.vec(cljs.core.cons(cljs.core.first(dbeav),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"eav","eav",-1118737308).cljs$core$IFn$_invoke$arity$1(posh.lib.q_analyze.normalize_eav_helper(cljs.core.rest(dbeav),(3),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY)),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((4),dbeav))));
});
posh.lib.q_analyze.normalize_all_eavs = (function posh$lib$q_analyze$normalize_all_eavs(where){
if(cljs.core.empty_QMARK_(where)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core.list_QMARK_(where)){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(where)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.Symbol(null,"not-join","not-join",-645515756,null)], null)))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(where),cljs.core.second(where)], null),(function (){var G__50964 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__50964) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__50964));
})());
} else {
return cljs.core.cons(cljs.core.first(where),(function (){var G__50965 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__50965) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__50965));
})());
}
} else {
if(posh.lib.q_analyze.eav_QMARK_(where)){
return posh.lib.q_analyze.normalize_eav(where);
} else {
if(((cljs.core.vector_QMARK_(where)) && (cljs.core.list_QMARK_(cljs.core.first(where))))){
return where;
} else {
if(cljs.core.coll_QMARK_(where)){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.normalize_all_eavs,where));
} else {
return where;

}
}
}
}
}
});
posh.lib.q_analyze.get_eavs = (function posh$lib$q_analyze$get_eavs(where){
if(cljs.core.empty_QMARK_(where)){
return cljs.core.PersistentVector.EMPTY;
} else {
var item = cljs.core.first(where);
if(cljs.core.seq_QMARK_(item)){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(item)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.Symbol(null,"not-join","not-join",-645515756,null)], null)))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__50968 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__50968) : posh.lib.q_analyze.get_eavs.call(null,G__50968));
})(),(function (){var G__50972 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__50972) : posh.lib.q_analyze.get_eavs.call(null,G__50972));
})());
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__50973 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__50973) : posh.lib.q_analyze.get_eavs.call(null,G__50973));
})(),(function (){var G__50974 = cljs.core.vec(cljs.core.rest(item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__50974) : posh.lib.q_analyze.get_eavs.call(null,G__50974));
})());
}
} else {
if(posh.lib.q_analyze.eav_QMARK_(item)){
return cljs.core.cons(item,(function (){var G__50975 = cljs.core.rest(where);
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__50975) : posh.lib.q_analyze.get_eavs.call(null,G__50975));
})());
} else {
if(((cljs.core.vector_QMARK_(item)) && (cljs.core.seq_QMARK_(cljs.core.first(item))))){
var ocr_50994 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(cljs.core.first(item))], null),cljs.core.rest(item)));
try{if(((cljs.core.vector_QMARK_(ocr_50994)) && ((cljs.core.count(ocr_50994) === 2)))){
try{var ocr_50994_0__50999 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_50994,(0));
if(((cljs.core.vector_QMARK_(ocr_50994_0__50999)) && ((cljs.core.count(ocr_50994_0__50999) === 5)))){
try{var ocr_50994_0__50999_0__51001 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_50994_0__50999,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_50994_0__50999_0__51001,new cljs.core.Symbol(null,"get-else","get-else",1312024065,null))){
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_50994_0__50999,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_50994_0__50999,(2));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_50994_0__50999,(3));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_50994,(1));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [db,e,a,v], null)], null),(function (){var G__51023 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__51023) : posh.lib.q_analyze.get_eavs.call(null,G__51023));
})());
} else {
throw cljs.core.match.backtrack;

}
}catch (e51022){if((e51022 instanceof Error)){
var e__50020__auto__ = e51022;
if((e__50020__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto__;
}
} else {
throw e51022;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51019){if((e51019 instanceof Error)){
var e__50020__auto__ = e51019;
if((e__50020__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto__;
}
} else {
throw e51019;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51013){if((e51013 instanceof Error)){
var e__50020__auto__ = e51013;
if((e__50020__auto__ === cljs.core.match.backtrack)){
var G__51018 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__51018) : posh.lib.q_analyze.get_eavs.call(null,G__51018));
} else {
throw e__50020__auto__;
}
} else {
throw e51013;

}
}} else {
var G__51024 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__51024) : posh.lib.q_analyze.get_eavs.call(null,G__51024));

}
}
}
}
});
posh.lib.q_analyze.qm_to_query = (function posh$lib$q_analyze$qm_to_query(qm){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (xs,p__51025){
var vec__51026 = p__51025;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51026,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51026,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(xs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
}),cljs.core.PersistentVector.EMPTY,qm);
});
posh.lib.q_analyze.create_q_datoms = (function posh$lib$q_analyze$create_q_datoms(results,eavs,vars){
return cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (r){
var vs = cljs.core.zipmap(vars,r);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (eav){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51029_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__51029_SHARP_)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vs,p1__51029_SHARP_);
} else {
return p1__51029_SHARP_;
}
}),eav));
}),eavs);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([results], 0)));
});
posh.lib.q_analyze.count_qvars = (function posh$lib$q_analyze$count_qvars(xs){
if(cljs.core.empty_QMARK_(xs)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.coll_QMARK_(cljs.core.first(xs))){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__51032 = cljs.core.first(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__51032) : posh.lib.q_analyze.count_qvars.call(null,G__51032));
})(),(function (){var G__51033 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__51033) : posh.lib.q_analyze.count_qvars.call(null,G__51033));
})()], 0));
} else {
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(xs)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(xs),(1)]):null),(function (){var G__51034 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__51034) : posh.lib.q_analyze.count_qvars.call(null,G__51034));
})()], 0));

}
}
});
posh.lib.q_analyze.fill_qvar_set = (function posh$lib$q_analyze$fill_qvar_set(qvar,results,where){
var iter__5523__auto__ = (function posh$lib$q_analyze$fill_qvar_set_$_iter__51035(s__51036){
return (new cljs.core.LazySeq(null,(function (){
var s__51036__$1 = s__51036;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__51036__$1);
if(temp__5823__auto__){
var s__51036__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51036__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__51036__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__51038 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__51037 = (0);
while(true){
if((i__51037 < size__5522__auto__)){
var r = cljs.core._nth(c__5521__auto__,i__51037);
cljs.core.chunk_append(b__51038,(function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})());

var G__51605 = (i__51037 + (1));
i__51037 = G__51605;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51038),posh$lib$q_analyze$fill_qvar_set_$_iter__51035(cljs.core.chunk_rest(s__51036__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51038),null);
}
} else {
var r = cljs.core.first(s__51036__$2);
return cljs.core.cons((function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})(),posh$lib$q_analyze$fill_qvar_set_$_iter__51035(cljs.core.rest(s__51036__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(results);
});
posh.lib.q_analyze.seq_merge_with = (function posh$lib$q_analyze$seq_merge_with(f,seq1,seq2){
if(cljs.core.empty_QMARK_(seq1)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons((function (){var G__51042 = cljs.core.first(seq1);
var G__51043 = cljs.core.first(seq2);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__51042,G__51043) : f.call(null,G__51042,G__51043));
})(),(function (){var G__51044 = f;
var G__51045 = cljs.core.rest(seq1);
var G__51046 = cljs.core.rest(seq2);
return (posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3(G__51044,G__51045,G__51046) : posh.lib.q_analyze.seq_merge_with.call(null,G__51044,G__51045,G__51046));
})());
}
});
posh.lib.q_analyze.stack_vectors = (function posh$lib$q_analyze$stack_vectors(vs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (stacked,eav){
return posh.lib.q_analyze.seq_merge_with(cljs.core.conj,stacked,eav);
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.first(vs)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),vs);
});
posh.lib.q_analyze.pattern_from_eav__old = (function posh$lib$q_analyze$pattern_from_eav__old(vars,p__51051){
var vec__51052 = p__51051;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51052,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51052,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51052,(2),null);
var eav = vec__51052;
var vec__51058 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav);
var qe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51058,(0),null);
var qa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51058,(1),null);
var qv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51058,(2),null);
var iter__5523__auto__ = (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__51061(s__51062){
return (new cljs.core.LazySeq(null,(function (){
var s__51062__$1 = s__51062;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__51062__$1);
if(temp__5823__auto__){
var xs__6383__auto__ = temp__5823__auto__;
var ee = cljs.core.first(xs__6383__auto__);
var iterys__5519__auto__ = ((function (s__51062__$1,ee,xs__6383__auto__,temp__5823__auto__,vec__51058,qe,qa,qv,vec__51052,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__51061_$_iter__51063(s__51064){
return (new cljs.core.LazySeq(null,((function (s__51062__$1,ee,xs__6383__auto__,temp__5823__auto__,vec__51058,qe,qa,qv,vec__51052,e,a,v,eav){
return (function (){
var s__51064__$1 = s__51064;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__51064__$1);
if(temp__5823__auto____$1){
var xs__6383__auto____$1 = temp__5823__auto____$1;
var aa = cljs.core.first(xs__6383__auto____$1);
var iterys__5519__auto__ = ((function (s__51064__$1,s__51062__$1,aa,xs__6383__auto____$1,temp__5823__auto____$1,ee,xs__6383__auto__,temp__5823__auto__,vec__51058,qe,qa,qv,vec__51052,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__51061_$_iter__51063_$_iter__51065(s__51066){
return (new cljs.core.LazySeq(null,((function (s__51064__$1,s__51062__$1,aa,xs__6383__auto____$1,temp__5823__auto____$1,ee,xs__6383__auto__,temp__5823__auto__,vec__51058,qe,qa,qv,vec__51052,e,a,v,eav){
return (function (){
var s__51066__$1 = s__51066;
while(true){
var temp__5823__auto____$2 = cljs.core.seq(s__51066__$1);
if(temp__5823__auto____$2){
var s__51066__$2 = temp__5823__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__51066__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__51066__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__51068 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__51067 = (0);
while(true){
if((i__51067 < size__5522__auto__)){
var vv = cljs.core._nth(c__5521__auto__,i__51067);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__51067,s__51066__$1,s__51064__$1,s__51062__$1,vv,c__5521__auto__,size__5522__auto__,b__51068,s__51066__$2,temp__5823__auto____$2,aa,xs__6383__auto____$1,temp__5823__auto____$1,ee,xs__6383__auto__,temp__5823__auto__,vec__51058,qe,qa,qv,vec__51052,e,a,v,eav){
return (function (p1__51049_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__51049_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__51067,s__51066__$1,s__51064__$1,s__51062__$1,vv,c__5521__auto__,size__5522__auto__,b__51068,s__51066__$2,temp__5823__auto____$2,aa,xs__6383__auto____$1,temp__5823__auto____$1,ee,xs__6383__auto__,temp__5823__auto__,vec__51058,qe,qa,qv,vec__51052,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__51067,s__51066__$1,s__51064__$1,s__51062__$1,wildcard_count,vv,c__5521__auto__,size__5522__auto__,b__51068,s__51066__$2,temp__5823__auto____$2,aa,xs__6383__auto____$1,temp__5823__auto____$1,ee,xs__6383__auto__,temp__5823__auto__,vec__51058,qe,qa,qv,vec__51052,e,a,v,eav){
return (function (p__51071){
var vec__51072 = p__51071;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51072,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51072,(1),null);
if(cljs.core.truth_((function (){var and__5043__auto__ = var_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,new cljs.core.Symbol(null,"_","_",-1201019570,null));
} else {
return and__5043__auto__;
}
})())){
return (1);
} else {
return (0);
}
});})(i__51067,s__51066__$1,s__51064__$1,s__51062__$1,wildcard_count,vv,c__5521__auto__,size__5522__auto__,b__51068,s__51066__$2,temp__5823__auto____$2,aa,xs__6383__auto____$1,temp__5823__auto____$1,ee,xs__6383__auto__,temp__5823__auto__,vec__51058,qe,qa,qv,vec__51052,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__51067,s__51066__$1,s__51064__$1,s__51062__$1,wildcard_count,exposed_qvars,vv,c__5521__auto__,size__5522__auto__,b__51068,s__51066__$2,temp__5823__auto____$2,aa,xs__6383__auto____$1,temp__5823__auto____$1,ee,xs__6383__auto__,temp__5823__auto__,vec__51058,qe,qa,qv,vec__51052,e,a,v,eav){
return (function (p1__51050_SHARP_){
if(cljs.core.truth_(p1__51050_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__51067,s__51066__$1,s__51064__$1,s__51062__$1,wildcard_count,exposed_qvars,vv,c__5521__auto__,size__5522__auto__,b__51068,s__51066__$2,temp__5823__auto____$2,aa,xs__6383__auto____$1,temp__5823__auto____$1,ee,xs__6383__auto__,temp__5823__auto__,vec__51058,qe,qa,qv,vec__51052,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)))));
})()){
cljs.core.chunk_append(b__51068,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null));

var G__51612 = (i__51067 + (1));
i__51067 = G__51612;
continue;
} else {
var G__51614 = (i__51067 + (1));
i__51067 = G__51614;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51068),posh$lib$q_analyze$pattern_from_eav__old_$_iter__51061_$_iter__51063_$_iter__51065(cljs.core.chunk_rest(s__51066__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51068),null);
}
} else {
var vv = cljs.core.first(s__51066__$2);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__51066__$1,s__51064__$1,s__51062__$1,vv,s__51066__$2,temp__5823__auto____$2,aa,xs__6383__auto____$1,temp__5823__auto____$1,ee,xs__6383__auto__,temp__5823__auto__,vec__51058,qe,qa,qv,vec__51052,e,a,v,eav){
return (function (p1__51049_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__51049_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__51066__$1,s__51064__$1,s__51062__$1,vv,s__51066__$2,temp__5823__auto____$2,aa,xs__6383__auto____$1,temp__5823__auto____$1,ee,xs__6383__auto__,temp__5823__auto__,vec__51058,qe,qa,qv,vec__51052,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__51066__$1,s__51064__$1,s__51062__$1,wildcard_count,vv,s__51066__$2,temp__5823__auto____$2,aa,xs__6383__auto____$1,temp__5823__auto____$1,ee,xs__6383__auto__,temp__5823__auto__,vec__51058,qe,qa,qv,vec__51052,e,a,v,eav){
return (function (p__51112){
var vec__51113 = p__51112;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51113,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51113,(1),null);
if(cljs.core.truth_((function (){var and__5043__auto__ = var_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,new cljs.core.Symbol(null,"_","_",-1201019570,null));
} else {
return and__5043__auto__;
}
})())){
return (1);
} else {
return (0);
}
});})(s__51066__$1,s__51064__$1,s__51062__$1,wildcard_count,vv,s__51066__$2,temp__5823__auto____$2,aa,xs__6383__auto____$1,temp__5823__auto____$1,ee,xs__6383__auto__,temp__5823__auto__,vec__51058,qe,qa,qv,vec__51052,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__51066__$1,s__51064__$1,s__51062__$1,wildcard_count,exposed_qvars,vv,s__51066__$2,temp__5823__auto____$2,aa,xs__6383__auto____$1,temp__5823__auto____$1,ee,xs__6383__auto__,temp__5823__auto__,vec__51058,qe,qa,qv,vec__51052,e,a,v,eav){
return (function (p1__51050_SHARP_){
if(cljs.core.truth_(p1__51050_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__51066__$1,s__51064__$1,s__51062__$1,wildcard_count,exposed_qvars,vv,s__51066__$2,temp__5823__auto____$2,aa,xs__6383__auto____$1,temp__5823__auto____$1,ee,xs__6383__auto__,temp__5823__auto__,vec__51058,qe,qa,qv,vec__51052,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)))));
})()){
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null),posh$lib$q_analyze$pattern_from_eav__old_$_iter__51061_$_iter__51063_$_iter__51065(cljs.core.rest(s__51066__$2)));
} else {
var G__51628 = cljs.core.rest(s__51066__$2);
s__51066__$1 = G__51628;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__51064__$1,s__51062__$1,aa,xs__6383__auto____$1,temp__5823__auto____$1,ee,xs__6383__auto__,temp__5823__auto__,vec__51058,qe,qa,qv,vec__51052,e,a,v,eav))
,null,null));
});})(s__51064__$1,s__51062__$1,aa,xs__6383__auto____$1,temp__5823__auto____$1,ee,xs__6383__auto__,temp__5823__auto__,vec__51058,qe,qa,qv,vec__51052,e,a,v,eav))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__((cljs.core.truth_(qv)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,v)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null))));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__51061_$_iter__51063(cljs.core.rest(s__51064__$1)));
} else {
var G__51629 = cljs.core.rest(s__51064__$1);
s__51064__$1 = G__51629;
continue;
}
} else {
return null;
}
break;
}
});})(s__51062__$1,ee,xs__6383__auto__,temp__5823__auto__,vec__51058,qe,qa,qv,vec__51052,e,a,v,eav))
,null,null));
});})(s__51062__$1,ee,xs__6383__auto__,temp__5823__auto__,vec__51058,qe,qa,qv,vec__51052,e,a,v,eav))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__((cljs.core.truth_(qa)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,a)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null))));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__51061(cljs.core.rest(s__51062__$1)));
} else {
var G__51633 = cljs.core.rest(s__51062__$1);
s__51062__$1 = G__51633;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__((cljs.core.truth_(qe)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,e)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null)));
});
posh.lib.q_analyze.get_ = (function posh$lib$q_analyze$get_(m,k){

var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
}
});
posh.lib.q_analyze.pattern_from_eav = (function posh$lib$q_analyze$pattern_from_eav(vars,eav){
var ocr_51158 = cljs.core.vec(eav);
var ocr_51159 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_51158)) && ((cljs.core.count(ocr_51158) === 3)))){
try{var ocr_51158_0__51195 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_51158_0__51195,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_51158_1__51196 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_51158_1__51196,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_51158_2__51197 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_51158_2__51197,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51337){if((e51337 instanceof Error)){
var e__50020__auto__ = e51337;
if((e__50020__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_51159)) && ((cljs.core.count(ocr_51159) === 3)))){
try{var ocr_51159_2__51222 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51159,(2));
if((ocr_51159_2__51222 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51339){if((e51339 instanceof Error)){
var e__50020__auto____$1 = e51339;
if((e__50020__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_51159_2__51222 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51159,(2));
if((ocr_51159_2__51222 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51340){if((e51340 instanceof Error)){
var e__50020__auto____$2 = e51340;
if((e__50020__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$2;
}
} else {
throw e51340;

}
}} else {
throw e__50020__auto____$1;
}
} else {
throw e51339;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51338){if((e51338 instanceof Error)){
var e__50020__auto____$1 = e51338;
if((e__50020__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$1;
}
} else {
throw e51338;

}
}} else {
throw e__50020__auto__;
}
} else {
throw e51337;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51331){if((e51331 instanceof Error)){
var e__50020__auto__ = e51331;
if((e__50020__auto__ === cljs.core.match.backtrack)){
try{var ocr_51158_2__51197 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_51158_2__51197,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_51159)) && ((cljs.core.count(ocr_51159) === 3)))){
try{var ocr_51159_1__51224 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51159,(1));
if((ocr_51159_1__51224 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51334){if((e51334 instanceof Error)){
var e__50020__auto____$1 = e51334;
if((e__50020__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_51159_1__51224 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51159,(1));
if((ocr_51159_1__51224 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51335){if((e51335 instanceof Error)){
var e__50020__auto____$2 = e51335;
if((e__50020__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$2;
}
} else {
throw e51335;

}
}} else {
throw e__50020__auto____$1;
}
} else {
throw e51334;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51333){if((e51333 instanceof Error)){
var e__50020__auto____$1 = e51333;
if((e__50020__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$1;
}
} else {
throw e51333;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51332){if((e51332 instanceof Error)){
var e__50020__auto____$1 = e51332;
if((e__50020__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$1;
}
} else {
throw e51332;

}
}} else {
throw e__50020__auto__;
}
} else {
throw e51331;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51245){if((e51245 instanceof Error)){
var e__50020__auto__ = e51245;
if((e__50020__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_51159)) && ((cljs.core.count(ocr_51159) === 3)))){
try{var ocr_51159_0__51228 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51159,(0));
if((ocr_51159_0__51228 === false)){
try{var ocr_51158_1__51196 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_51158_1__51196,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_51158_2__51197 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_51158_2__51197,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51330){if((e51330 instanceof Error)){
var e__50020__auto____$1 = e51330;
if((e__50020__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$1;
}
} else {
throw e51330;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51329){if((e51329 instanceof Error)){
var e__50020__auto____$1 = e51329;
if((e__50020__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$1;
}
} else {
throw e51329;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51248){if((e51248 instanceof Error)){
var e__50020__auto____$1 = e51248;
if((e__50020__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_51159_0__51228 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51159,(0));
if((ocr_51159_0__51228 === true)){
try{var ocr_51158_2__51197 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_51158_2__51197,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_51158_1__51196 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_51158_1__51196,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51320){if((e51320 instanceof Error)){
var e__50020__auto____$2 = e51320;
if((e__50020__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_51159_1__51229 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51159,(1));
if((ocr_51159_1__51229 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51321){if((e51321 instanceof Error)){
var e__50020__auto____$3 = e51321;
if((e__50020__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_51159_1__51229 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51159,(1));
if((ocr_51159_1__51229 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51322){if((e51322 instanceof Error)){
var e__50020__auto____$4 = e51322;
if((e__50020__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$4;
}
} else {
throw e51322;

}
}} else {
throw e__50020__auto____$3;
}
} else {
throw e51321;

}
}} else {
throw e__50020__auto____$2;
}
} else {
throw e51320;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51319){if((e51319 instanceof Error)){
var e__50020__auto____$2 = e51319;
if((e__50020__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$2;
}
} else {
throw e51319;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51249){if((e51249 instanceof Error)){
var e__50020__auto____$2 = e51249;
if((e__50020__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_51159_0__51228 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51159,(0));
if((ocr_51159_0__51228 === false)){
try{var ocr_51159_1__51229 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51159,(1));
if((ocr_51159_1__51229 === true)){
try{var ocr_51158_2__51197 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_51158_2__51197,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51318){if((e51318 instanceof Error)){
var e__50020__auto____$3 = e51318;
if((e__50020__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$3;
}
} else {
throw e51318;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51314){if((e51314 instanceof Error)){
var e__50020__auto____$3 = e51314;
if((e__50020__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_51159_1__51229 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51159,(1));
if((ocr_51159_1__51229 === false)){
try{var ocr_51158_2__51197 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_51158_2__51197,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51317){if((e51317 instanceof Error)){
var e__50020__auto____$4 = e51317;
if((e__50020__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$4;
}
} else {
throw e51317;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51315){if((e51315 instanceof Error)){
var e__50020__auto____$4 = e51315;
if((e__50020__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$4;
}
} else {
throw e51315;

}
}} else {
throw e__50020__auto____$3;
}
} else {
throw e51314;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51250){if((e51250 instanceof Error)){
var e__50020__auto____$3 = e51250;
if((e__50020__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_51159_2__51230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51159,(2));
if((ocr_51159_2__51230 === true)){
try{var ocr_51159_0__51228 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51159,(0));
if((ocr_51159_0__51228 === true)){
try{var ocr_51158_1__51196 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_51158_1__51196,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51312){if((e51312 instanceof Error)){
var e__50020__auto____$4 = e51312;
if((e__50020__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$4;
}
} else {
throw e51312;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51311){if((e51311 instanceof Error)){
var e__50020__auto____$4 = e51311;
if((e__50020__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$4;
}
} else {
throw e51311;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51251){if((e51251 instanceof Error)){
var e__50020__auto____$4 = e51251;
if((e__50020__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_51159_2__51230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51159,(2));
if((ocr_51159_2__51230 === false)){
try{var ocr_51159_0__51228 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51159,(0));
if((ocr_51159_0__51228 === true)){
try{var ocr_51158_1__51196 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_51158_1__51196,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51310){if((e51310 instanceof Error)){
var e__50020__auto____$5 = e51310;
if((e__50020__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$5;
}
} else {
throw e51310;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51309){if((e51309 instanceof Error)){
var e__50020__auto____$5 = e51309;
if((e__50020__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$5;
}
} else {
throw e51309;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51252){if((e51252 instanceof Error)){
var e__50020__auto____$5 = e51252;
if((e__50020__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_51159_2__51230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51159,(2));
if((ocr_51159_2__51230 === true)){
try{var ocr_51159_0__51228 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51159,(0));
if((ocr_51159_0__51228 === false)){
try{var ocr_51158_1__51196 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_51158_1__51196,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51307){if((e51307 instanceof Error)){
var e__50020__auto____$6 = e51307;
if((e__50020__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$6;
}
} else {
throw e51307;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51306){if((e51306 instanceof Error)){
var e__50020__auto____$6 = e51306;
if((e__50020__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$6;
}
} else {
throw e51306;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51253){if((e51253 instanceof Error)){
var e__50020__auto____$6 = e51253;
if((e__50020__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_51159_2__51230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51159,(2));
if((ocr_51159_2__51230 === false)){
try{var ocr_51159_0__51228 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51159,(0));
if((ocr_51159_0__51228 === false)){
try{var ocr_51158_1__51196 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_51158_1__51196,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51305){if((e51305 instanceof Error)){
var e__50020__auto____$7 = e51305;
if((e__50020__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$7;
}
} else {
throw e51305;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51303){if((e51303 instanceof Error)){
var e__50020__auto____$7 = e51303;
if((e__50020__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$7;
}
} else {
throw e51303;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51254){if((e51254 instanceof Error)){
var e__50020__auto____$7 = e51254;
if((e__50020__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_51159_2__51230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51159,(2));
if((ocr_51159_2__51230 === true)){
try{var ocr_51159_1__51229 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51159,(1));
if((ocr_51159_1__51229 === true)){
try{var ocr_51158_0__51195 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_51158_0__51195,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51301){if((e51301 instanceof Error)){
var e__50020__auto____$8 = e51301;
if((e__50020__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$8;
}
} else {
throw e51301;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51299){if((e51299 instanceof Error)){
var e__50020__auto____$8 = e51299;
if((e__50020__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$8;
}
} else {
throw e51299;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51255){if((e51255 instanceof Error)){
var e__50020__auto____$8 = e51255;
if((e__50020__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_51159_2__51230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51159,(2));
if((ocr_51159_2__51230 === false)){
try{var ocr_51159_1__51229 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51159,(1));
if((ocr_51159_1__51229 === true)){
try{var ocr_51158_0__51195 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_51158_0__51195,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51298){if((e51298 instanceof Error)){
var e__50020__auto____$9 = e51298;
if((e__50020__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$9;
}
} else {
throw e51298;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51297){if((e51297 instanceof Error)){
var e__50020__auto____$9 = e51297;
if((e__50020__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$9;
}
} else {
throw e51297;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51256){if((e51256 instanceof Error)){
var e__50020__auto____$9 = e51256;
if((e__50020__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_51159_2__51230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51159,(2));
if((ocr_51159_2__51230 === true)){
try{var ocr_51159_1__51229 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51159,(1));
if((ocr_51159_1__51229 === false)){
try{var ocr_51158_0__51195 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_51158_0__51195,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51294){if((e51294 instanceof Error)){
var e__50020__auto____$10 = e51294;
if((e__50020__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$10;
}
} else {
throw e51294;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51292){if((e51292 instanceof Error)){
var e__50020__auto____$10 = e51292;
if((e__50020__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$10;
}
} else {
throw e51292;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51258){if((e51258 instanceof Error)){
var e__50020__auto____$10 = e51258;
if((e__50020__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_51159_2__51230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51159,(2));
if((ocr_51159_2__51230 === false)){
try{var ocr_51159_1__51229 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51159,(1));
if((ocr_51159_1__51229 === false)){
try{var ocr_51158_0__51195 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_51158_0__51195,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51289){if((e51289 instanceof Error)){
var e__50020__auto____$11 = e51289;
if((e__50020__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$11;
}
} else {
throw e51289;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51286){if((e51286 instanceof Error)){
var e__50020__auto____$11 = e51286;
if((e__50020__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$11;
}
} else {
throw e51286;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51259){if((e51259 instanceof Error)){
var e__50020__auto____$11 = e51259;
if((e__50020__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_51159_2__51230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51159,(2));
if((ocr_51159_2__51230 === true)){
try{var ocr_51159_0__51228 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51159,(0));
if((ocr_51159_0__51228 === true)){
try{var ocr_51159_1__51229 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51159,(1));
if((ocr_51159_1__51229 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51285){if((e51285 instanceof Error)){
var e__50020__auto____$12 = e51285;
if((e__50020__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$12;
}
} else {
throw e51285;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51279){if((e51279 instanceof Error)){
var e__50020__auto____$12 = e51279;
if((e__50020__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_51159_0__51228 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51159,(0));
if((ocr_51159_0__51228 === false)){
try{var ocr_51159_1__51229 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51159,(1));
if((ocr_51159_1__51229 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51284){if((e51284 instanceof Error)){
var e__50020__auto____$13 = e51284;
if((e__50020__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$13;
}
} else {
throw e51284;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51280){if((e51280 instanceof Error)){
var e__50020__auto____$13 = e51280;
if((e__50020__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_51159_0__51228 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51159,(0));
if((ocr_51159_0__51228 === true)){
try{var ocr_51159_1__51229 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51159,(1));
if((ocr_51159_1__51229 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51282){if((e51282 instanceof Error)){
var e__50020__auto____$14 = e51282;
if((e__50020__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$14;
}
} else {
throw e51282;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51281){if((e51281 instanceof Error)){
var e__50020__auto____$14 = e51281;
if((e__50020__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$14;
}
} else {
throw e51281;

}
}} else {
throw e__50020__auto____$13;
}
} else {
throw e51280;

}
}} else {
throw e__50020__auto____$12;
}
} else {
throw e51279;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51260){if((e51260 instanceof Error)){
var e__50020__auto____$12 = e51260;
if((e__50020__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_51159_2__51230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51159,(2));
if((ocr_51159_2__51230 === false)){
try{var ocr_51159_0__51228 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51159,(0));
if((ocr_51159_0__51228 === true)){
try{var ocr_51159_1__51229 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51159,(1));
if((ocr_51159_1__51229 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51277){if((e51277 instanceof Error)){
var e__50020__auto____$13 = e51277;
if((e__50020__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$13;
}
} else {
throw e51277;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51276){if((e51276 instanceof Error)){
var e__50020__auto____$13 = e51276;
if((e__50020__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$13;
}
} else {
throw e51276;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51261){if((e51261 instanceof Error)){
var e__50020__auto____$13 = e51261;
if((e__50020__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_51159_2__51230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51159,(2));
if((ocr_51159_2__51230 === true)){
try{var ocr_51159_0__51228 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51159,(0));
if((ocr_51159_0__51228 === false)){
try{var ocr_51159_1__51229 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51159,(1));
if((ocr_51159_1__51229 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51275){if((e51275 instanceof Error)){
var e__50020__auto____$14 = e51275;
if((e__50020__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$14;
}
} else {
throw e51275;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51274){if((e51274 instanceof Error)){
var e__50020__auto____$14 = e51274;
if((e__50020__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$14;
}
} else {
throw e51274;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51262){if((e51262 instanceof Error)){
var e__50020__auto____$14 = e51262;
if((e__50020__auto____$14 === cljs.core.match.backtrack)){
try{var ocr_51159_2__51230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51159,(2));
if((ocr_51159_2__51230 === false)){
try{var ocr_51159_0__51228 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51159,(0));
if((ocr_51159_0__51228 === true)){
try{var ocr_51159_1__51229 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51159,(1));
if((ocr_51159_1__51229 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51272){if((e51272 instanceof Error)){
var e__50020__auto____$15 = e51272;
if((e__50020__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$15;
}
} else {
throw e51272;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51266){if((e51266 instanceof Error)){
var e__50020__auto____$15 = e51266;
if((e__50020__auto____$15 === cljs.core.match.backtrack)){
try{var ocr_51159_0__51228 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51159,(0));
if((ocr_51159_0__51228 === false)){
try{var ocr_51159_1__51229 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51159,(1));
if((ocr_51159_1__51229 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51268){if((e51268 instanceof Error)){
var e__50020__auto____$16 = e51268;
if((e__50020__auto____$16 === cljs.core.match.backtrack)){
try{var ocr_51159_1__51229 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51159,(1));
if((ocr_51159_1__51229 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51158,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51269){if((e51269 instanceof Error)){
var e__50020__auto____$17 = e51269;
if((e__50020__auto____$17 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$17;
}
} else {
throw e51269;

}
}} else {
throw e__50020__auto____$16;
}
} else {
throw e51268;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51267){if((e51267 instanceof Error)){
var e__50020__auto____$16 = e51267;
if((e__50020__auto____$16 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$16;
}
} else {
throw e51267;

}
}} else {
throw e__50020__auto____$15;
}
} else {
throw e51266;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51264){if((e51264 instanceof Error)){
var e__50020__auto____$15 = e51264;
if((e__50020__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$15;
}
} else {
throw e51264;

}
}} else {
throw e__50020__auto____$14;
}
} else {
throw e51262;

}
}} else {
throw e__50020__auto____$13;
}
} else {
throw e51261;

}
}} else {
throw e__50020__auto____$12;
}
} else {
throw e51260;

}
}} else {
throw e__50020__auto____$11;
}
} else {
throw e51259;

}
}} else {
throw e__50020__auto____$10;
}
} else {
throw e51258;

}
}} else {
throw e__50020__auto____$9;
}
} else {
throw e51256;

}
}} else {
throw e__50020__auto____$8;
}
} else {
throw e51255;

}
}} else {
throw e__50020__auto____$7;
}
} else {
throw e51254;

}
}} else {
throw e__50020__auto____$6;
}
} else {
throw e51253;

}
}} else {
throw e__50020__auto____$5;
}
} else {
throw e51252;

}
}} else {
throw e__50020__auto____$4;
}
} else {
throw e51251;

}
}} else {
throw e__50020__auto____$3;
}
} else {
throw e51250;

}
}} else {
throw e__50020__auto____$2;
}
} else {
throw e51249;

}
}} else {
throw e__50020__auto____$1;
}
} else {
throw e51248;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51246){if((e51246 instanceof Error)){
var e__50020__auto____$1 = e51246;
if((e__50020__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$1;
}
} else {
throw e51246;

}
}} else {
throw e__50020__auto__;
}
} else {
throw e51245;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51244){if((e51244 instanceof Error)){
var e__50020__auto__ = e51244;
if((e__50020__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__50020__auto__;
}
} else {
throw e51244;

}
}});
posh.lib.q_analyze.filter_pattern_from_eav = (function posh$lib$q_analyze$filter_pattern_from_eav(vars,eav){
var ocr_51343 = cljs.core.vec(eav);
var ocr_51344 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_51343)) && ((cljs.core.count(ocr_51343) === 3)))){
try{var ocr_51343_0__51375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51343,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_51343_0__51375,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_51343_1__51376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51343,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_51343_1__51376,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_51343_2__51377 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51343,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_51343_2__51377,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return cljs.core.PersistentVector.EMPTY;
} else {
throw cljs.core.match.backtrack;

}
}catch (e51501){if((e51501 instanceof Error)){
var e__50020__auto__ = e51501;
if((e__50020__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_51344)) && ((cljs.core.count(ocr_51344) === 3)))){
try{var ocr_51344_2__51384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51344,(2));
if((ocr_51344_2__51384 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51343,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51503){if((e51503 instanceof Error)){
var e__50020__auto____$1 = e51503;
if((e__50020__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_51344_2__51384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51344,(2));
if((ocr_51344_2__51384 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51343,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51504){if((e51504 instanceof Error)){
var e__50020__auto____$2 = e51504;
if((e__50020__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$2;
}
} else {
throw e51504;

}
}} else {
throw e__50020__auto____$1;
}
} else {
throw e51503;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51502){if((e51502 instanceof Error)){
var e__50020__auto____$1 = e51502;
if((e__50020__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$1;
}
} else {
throw e51502;

}
}} else {
throw e__50020__auto__;
}
} else {
throw e51501;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51494){if((e51494 instanceof Error)){
var e__50020__auto__ = e51494;
if((e__50020__auto__ === cljs.core.match.backtrack)){
try{var ocr_51343_2__51377 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51343,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_51343_2__51377,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_51344)) && ((cljs.core.count(ocr_51344) === 3)))){
try{var ocr_51344_1__51386 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51344,(1));
if((ocr_51344_1__51386 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51343,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51497){if((e51497 instanceof Error)){
var e__50020__auto____$1 = e51497;
if((e__50020__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_51344_1__51386 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51344,(1));
if((ocr_51344_1__51386 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51343,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51498){if((e51498 instanceof Error)){
var e__50020__auto____$2 = e51498;
if((e__50020__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$2;
}
} else {
throw e51498;

}
}} else {
throw e__50020__auto____$1;
}
} else {
throw e51497;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51496){if((e51496 instanceof Error)){
var e__50020__auto____$1 = e51496;
if((e__50020__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$1;
}
} else {
throw e51496;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51495){if((e51495 instanceof Error)){
var e__50020__auto____$1 = e51495;
if((e__50020__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$1;
}
} else {
throw e51495;

}
}} else {
throw e__50020__auto__;
}
} else {
throw e51494;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51434){if((e51434 instanceof Error)){
var e__50020__auto__ = e51434;
if((e__50020__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_51344)) && ((cljs.core.count(ocr_51344) === 3)))){
try{var ocr_51344_0__51388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51344,(0));
if((ocr_51344_0__51388 === false)){
try{var ocr_51343_1__51376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51343,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_51343_1__51376,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_51343_2__51377 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51343,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_51343_2__51377,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51343,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51493){if((e51493 instanceof Error)){
var e__50020__auto____$1 = e51493;
if((e__50020__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$1;
}
} else {
throw e51493;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51492){if((e51492 instanceof Error)){
var e__50020__auto____$1 = e51492;
if((e__50020__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$1;
}
} else {
throw e51492;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51437){if((e51437 instanceof Error)){
var e__50020__auto____$1 = e51437;
if((e__50020__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_51344_0__51388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51344,(0));
if((ocr_51344_0__51388 === true)){
try{var ocr_51343_2__51377 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51343,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_51343_2__51377,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_51343_1__51376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51343,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_51343_1__51376,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51343,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51487){if((e51487 instanceof Error)){
var e__50020__auto____$2 = e51487;
if((e__50020__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_51344_1__51389 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51344,(1));
if((ocr_51344_1__51389 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51343,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51343,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51488){if((e51488 instanceof Error)){
var e__50020__auto____$3 = e51488;
if((e__50020__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_51344_1__51389 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51344,(1));
if((ocr_51344_1__51389 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51343,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51343,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51489){if((e51489 instanceof Error)){
var e__50020__auto____$4 = e51489;
if((e__50020__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$4;
}
} else {
throw e51489;

}
}} else {
throw e__50020__auto____$3;
}
} else {
throw e51488;

}
}} else {
throw e__50020__auto____$2;
}
} else {
throw e51487;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51486){if((e51486 instanceof Error)){
var e__50020__auto____$2 = e51486;
if((e__50020__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$2;
}
} else {
throw e51486;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51438){if((e51438 instanceof Error)){
var e__50020__auto____$2 = e51438;
if((e__50020__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_51344_0__51388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51344,(0));
if((ocr_51344_0__51388 === false)){
try{var ocr_51344_1__51389 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51344,(1));
if((ocr_51344_1__51389 === true)){
try{var ocr_51343_2__51377 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51343,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_51343_2__51377,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51343,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51343,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51485){if((e51485 instanceof Error)){
var e__50020__auto____$3 = e51485;
if((e__50020__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$3;
}
} else {
throw e51485;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51484){if((e51484 instanceof Error)){
var e__50020__auto____$3 = e51484;
if((e__50020__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$3;
}
} else {
throw e51484;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51440){if((e51440 instanceof Error)){
var e__50020__auto____$3 = e51440;
if((e__50020__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_51344_2__51390 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51344,(2));
if((ocr_51344_2__51390 === true)){
try{var ocr_51344_0__51388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51344,(0));
if((ocr_51344_0__51388 === true)){
try{var ocr_51343_1__51376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51343,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_51343_1__51376,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51343,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51343,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51483){if((e51483 instanceof Error)){
var e__50020__auto____$4 = e51483;
if((e__50020__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$4;
}
} else {
throw e51483;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51482){if((e51482 instanceof Error)){
var e__50020__auto____$4 = e51482;
if((e__50020__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$4;
}
} else {
throw e51482;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51441){if((e51441 instanceof Error)){
var e__50020__auto____$4 = e51441;
if((e__50020__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_51344_2__51390 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51344,(2));
if((ocr_51344_2__51390 === false)){
try{var ocr_51344_0__51388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51344,(0));
if((ocr_51344_0__51388 === true)){
try{var ocr_51343_1__51376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51343,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_51343_1__51376,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51343,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51343,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51480){if((e51480 instanceof Error)){
var e__50020__auto____$5 = e51480;
if((e__50020__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$5;
}
} else {
throw e51480;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51479){if((e51479 instanceof Error)){
var e__50020__auto____$5 = e51479;
if((e__50020__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$5;
}
} else {
throw e51479;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51442){if((e51442 instanceof Error)){
var e__50020__auto____$5 = e51442;
if((e__50020__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_51344_2__51390 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51344,(2));
if((ocr_51344_2__51390 === true)){
try{var ocr_51344_0__51388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51344,(0));
if((ocr_51344_0__51388 === false)){
try{var ocr_51343_1__51376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51343,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_51343_1__51376,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51343,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51343,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51478){if((e51478 instanceof Error)){
var e__50020__auto____$6 = e51478;
if((e__50020__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$6;
}
} else {
throw e51478;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51475){if((e51475 instanceof Error)){
var e__50020__auto____$6 = e51475;
if((e__50020__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_51344_1__51389 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51344,(1));
if((ocr_51344_1__51389 === true)){
try{var ocr_51343_0__51375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51343,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_51343_0__51375,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51343,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51343,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51477){if((e51477 instanceof Error)){
var e__50020__auto____$7 = e51477;
if((e__50020__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$7;
}
} else {
throw e51477;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51476){if((e51476 instanceof Error)){
var e__50020__auto____$7 = e51476;
if((e__50020__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$7;
}
} else {
throw e51476;

}
}} else {
throw e__50020__auto____$6;
}
} else {
throw e51475;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51443){if((e51443 instanceof Error)){
var e__50020__auto____$6 = e51443;
if((e__50020__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_51344_2__51390 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51344,(2));
if((ocr_51344_2__51390 === false)){
try{var ocr_51344_1__51389 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51344,(1));
if((ocr_51344_1__51389 === true)){
try{var ocr_51343_0__51375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51343,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_51343_0__51375,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51343,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51343,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51474){if((e51474 instanceof Error)){
var e__50020__auto____$7 = e51474;
if((e__50020__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$7;
}
} else {
throw e51474;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51473){if((e51473 instanceof Error)){
var e__50020__auto____$7 = e51473;
if((e__50020__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$7;
}
} else {
throw e51473;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51444){if((e51444 instanceof Error)){
var e__50020__auto____$7 = e51444;
if((e__50020__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_51344_2__51390 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51344,(2));
if((ocr_51344_2__51390 === true)){
try{var ocr_51344_1__51389 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51344,(1));
if((ocr_51344_1__51389 === false)){
try{var ocr_51343_0__51375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51343,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_51343_0__51375,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51343,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51343,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51471){if((e51471 instanceof Error)){
var e__50020__auto____$8 = e51471;
if((e__50020__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$8;
}
} else {
throw e51471;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51461){if((e51461 instanceof Error)){
var e__50020__auto____$8 = e51461;
if((e__50020__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_51344_1__51389 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51344,(1));
if((ocr_51344_1__51389 === true)){
try{var ocr_51344_0__51388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51344,(0));
if((ocr_51344_0__51388 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51343,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51343,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51343,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51467){if((e51467 instanceof Error)){
var e__50020__auto____$9 = e51467;
if((e__50020__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_51344_0__51388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51344,(0));
if((ocr_51344_0__51388 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51343,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51343,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51343,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51468){if((e51468 instanceof Error)){
var e__50020__auto____$10 = e51468;
if((e__50020__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$10;
}
} else {
throw e51468;

}
}} else {
throw e__50020__auto____$9;
}
} else {
throw e51467;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51462){if((e51462 instanceof Error)){
var e__50020__auto____$9 = e51462;
if((e__50020__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_51344_1__51389 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51344,(1));
if((ocr_51344_1__51389 === false)){
try{var ocr_51344_0__51388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51344,(0));
if((ocr_51344_0__51388 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51343,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51343,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51343,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51466){if((e51466 instanceof Error)){
var e__50020__auto____$10 = e51466;
if((e__50020__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$10;
}
} else {
throw e51466;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51463){if((e51463 instanceof Error)){
var e__50020__auto____$10 = e51463;
if((e__50020__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$10;
}
} else {
throw e51463;

}
}} else {
throw e__50020__auto____$9;
}
} else {
throw e51462;

}
}} else {
throw e__50020__auto____$8;
}
} else {
throw e51461;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51445){if((e51445 instanceof Error)){
var e__50020__auto____$8 = e51445;
if((e__50020__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_51344_2__51390 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51344,(2));
if((ocr_51344_2__51390 === false)){
try{var ocr_51344_0__51388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51344,(0));
if((ocr_51344_0__51388 === true)){
try{var ocr_51344_1__51389 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51344,(1));
if((ocr_51344_1__51389 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51343,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51343,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51343,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51460){if((e51460 instanceof Error)){
var e__50020__auto____$9 = e51460;
if((e__50020__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$9;
}
} else {
throw e51460;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51459){if((e51459 instanceof Error)){
var e__50020__auto____$9 = e51459;
if((e__50020__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$9;
}
} else {
throw e51459;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51446){if((e51446 instanceof Error)){
var e__50020__auto____$9 = e51446;
if((e__50020__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_51344_2__51390 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51344,(2));
if((ocr_51344_2__51390 === true)){
try{var ocr_51344_0__51388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51344,(0));
if((ocr_51344_0__51388 === false)){
try{var ocr_51344_1__51389 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51344,(1));
if((ocr_51344_1__51389 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51343,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51343,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51343,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51458){if((e51458 instanceof Error)){
var e__50020__auto____$10 = e51458;
if((e__50020__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$10;
}
} else {
throw e51458;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51457){if((e51457 instanceof Error)){
var e__50020__auto____$10 = e51457;
if((e__50020__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$10;
}
} else {
throw e51457;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51447){if((e51447 instanceof Error)){
var e__50020__auto____$10 = e51447;
if((e__50020__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_51344_2__51390 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51344,(2));
if((ocr_51344_2__51390 === false)){
try{var ocr_51344_0__51388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51344,(0));
if((ocr_51344_0__51388 === true)){
try{var ocr_51344_1__51389 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51344,(1));
if((ocr_51344_1__51389 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51343,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51343,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51343,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51453){if((e51453 instanceof Error)){
var e__50020__auto____$11 = e51453;
if((e__50020__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$11;
}
} else {
throw e51453;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51449){if((e51449 instanceof Error)){
var e__50020__auto____$11 = e51449;
if((e__50020__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_51344_0__51388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51344,(0));
if((ocr_51344_0__51388 === false)){
try{var ocr_51344_1__51389 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51344,(1));
if((ocr_51344_1__51389 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51343,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51343,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_51343,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51452){if((e51452 instanceof Error)){
var e__50020__auto____$12 = e51452;
if((e__50020__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$12;
}
} else {
throw e51452;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51450){if((e51450 instanceof Error)){
var e__50020__auto____$12 = e51450;
if((e__50020__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$12;
}
} else {
throw e51450;

}
}} else {
throw e__50020__auto____$11;
}
} else {
throw e51449;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51448){if((e51448 instanceof Error)){
var e__50020__auto____$11 = e51448;
if((e__50020__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$11;
}
} else {
throw e51448;

}
}} else {
throw e__50020__auto____$10;
}
} else {
throw e51447;

}
}} else {
throw e__50020__auto____$9;
}
} else {
throw e51446;

}
}} else {
throw e__50020__auto____$8;
}
} else {
throw e51445;

}
}} else {
throw e__50020__auto____$7;
}
} else {
throw e51444;

}
}} else {
throw e__50020__auto____$6;
}
} else {
throw e51443;

}
}} else {
throw e__50020__auto____$5;
}
} else {
throw e51442;

}
}} else {
throw e__50020__auto____$4;
}
} else {
throw e51441;

}
}} else {
throw e__50020__auto____$3;
}
} else {
throw e51440;

}
}} else {
throw e__50020__auto____$2;
}
} else {
throw e51438;

}
}} else {
throw e__50020__auto____$1;
}
} else {
throw e51437;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51435){if((e51435 instanceof Error)){
var e__50020__auto____$1 = e51435;
if((e__50020__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50020__auto____$1;
}
} else {
throw e51435;

}
}} else {
throw e__50020__auto__;
}
} else {
throw e51434;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51429){if((e51429 instanceof Error)){
var e__50020__auto__ = e51429;
if((e__50020__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__50020__auto__;
}
} else {
throw e51429;

}
}});
posh.lib.q_analyze.patterns_from_eavs = (function posh$lib$q_analyze$patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__51514){
var vec__51515 = p__51514;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51515,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51515,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__51513_SHARP_){
return posh.lib.q_analyze.pattern_from_eav(vars,cljs.core.rest(p1__51513_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.filter_patterns_from_eavs = (function posh$lib$q_analyze$filter_patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__51519){
var vec__51520 = p__51519;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51520,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51520,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__51518_SHARP_){
return posh.lib.q_analyze.filter_pattern_from_eav(vars,cljs.core.rest(p1__51518_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.just_qvars = (function posh$lib$q_analyze$just_qvars(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((((cljs.core.first(ins) instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(ins))),"$"))))?null:cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)])),(function (){var G__51527 = cljs.core.rest(ins);
var G__51528 = cljs.core.rest(args);
return (posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2(G__51527,G__51528) : posh.lib.q_analyze.just_qvars.call(null,G__51527,G__51528));
})()], 0));
}
});
posh.lib.q_analyze.get_input_sets = (function posh$lib$q_analyze$get_input_sets(ins,args){
var varmap = posh.lib.q_analyze.just_qvars(ins,args);
if((!(cljs.core.empty_QMARK_(varmap)))){
var qvars = cljs.core.vec(posh.lib.q_analyze.get_all_vars(cljs.core.keys(varmap)));
var varvals = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(datascript.core.q,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),qvars,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.keys(varmap)], null)),cljs.core.vals(varmap));
var varsets = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.conj),cljs.core.zipmap(qvars,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51530_SHARP_){
return cljs.core.zipmap(qvars,p1__51530_SHARP_);
}),varvals));
return varsets;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
posh.lib.q_analyze.pull_pattern_QMARK_ = (function posh$lib$q_analyze$pull_pattern_QMARK_(x){
return ((cljs.core.coll_QMARK_(x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(x),new cljs.core.Symbol(null,"pull","pull",779986722,null))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),cljs.core.count(x))))));
});
posh.lib.q_analyze.replace_find_pulls = (function posh$lib$q_analyze$replace_find_pulls(qfind){

return clojure.walk.postwalk((function (x){
if(posh.lib.q_analyze.pull_pattern_QMARK_(x)){
return cljs.core.second(x);
} else {
return x;
}
}),qfind);
});
posh.lib.q_analyze.get_pull_var_pairs = (function posh$lib$q_analyze$get_pull_var_pairs(qfind){

if(cljs.core.coll_QMARK_(qfind)){
if(cljs.core.empty_QMARK_(qfind)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(posh.lib.q_analyze.pull_pattern_QMARK_(qfind)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.second(qfind),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(qfind,(2))]);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.get_pull_var_pairs,qfind));

}
}
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
posh.lib.q_analyze.match_var_to_db = (function posh$lib$q_analyze$match_var_to_db(var$,dbvarmap,dbeavs){
while(true){
if(cljs.core.empty_QMARK_(dbeavs)){
return null;
} else {
var vec__51540 = cljs.core.first(dbeavs);
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51540,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51540,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51540,(2),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51540,(3),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,e)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,v)) && (posh.lib.pull_analyze.ref_QMARK_(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db))),a)))))){
return (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db));
} else {
var G__51757 = var$;
var G__51758 = dbvarmap;
var G__51759 = cljs.core.rest(dbeavs);
var$ = G__51757;
dbvarmap = G__51758;
dbeavs = G__51759;
continue;
}
}
break;
}
});
posh.lib.q_analyze.match_vars_to_dbs = (function posh$lib$q_analyze$match_vars_to_dbs(vars,dbvarmap,dbeavs){
if(cljs.core.empty_QMARK_(vars)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(vars),posh.lib.q_analyze.match_var_to_db(cljs.core.first(vars),dbvarmap,dbeavs)]),(function (){var G__51545 = cljs.core.rest(vars);
var G__51546 = dbvarmap;
var G__51547 = dbeavs;
return (posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3(G__51545,G__51546,G__51547) : posh.lib.q_analyze.match_vars_to_dbs.call(null,G__51545,G__51546,G__51547));
})()], 0));
}
});
posh.lib.q_analyze.index_of = (function posh$lib$q_analyze$index_of(xs,x){
var n = (0);
var xs__$1 = xs;
while(true){
if(cljs.core.empty_QMARK_(xs__$1)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(xs__$1),x)){
return n;
} else {
var G__51761 = (n + (1));
var G__51762 = cljs.core.rest(xs__$1);
n = G__51761;
xs__$1 = G__51762;
continue;

}
}
break;
}
});
posh.lib.q_analyze.db_arg_QMARK_ = (function posh$lib$q_analyze$db_arg_QMARK_(arg){
var and__5043__auto__ = cljs.core.map_QMARK_(arg);
if(and__5043__auto__){
var and__5043__auto____$1 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(arg);
if(cljs.core.truth_(and__5043__auto____$1)){
return new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(arg);
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
});
posh.lib.q_analyze.convert_args_to = (function posh$lib$q_analyze$convert_args_to(type,args){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51548_SHARP_){
if(cljs.core.truth_(posh.lib.q_analyze.db_arg_QMARK_(p1__51548_SHARP_))){
return (type.cljs$core$IFn$_invoke$arity$1 ? type.cljs$core$IFn$_invoke$arity$1(p1__51548_SHARP_) : type.call(null,p1__51548_SHARP_));
} else {
return p1__51548_SHARP_;
}
}),args);
});
posh.lib.q_analyze.make_dbarg_map = (function posh$lib$q_analyze$make_dbarg_map(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.dbvar_QMARK_(cljs.core.first(ins)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)]):null),(function (){var G__51549 = cljs.core.rest(ins);
var G__51550 = cljs.core.rest(args);
return (posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2(G__51549,G__51550) : posh.lib.q_analyze.make_dbarg_map.call(null,G__51549,G__51550));
})()], 0));
}
});
posh.lib.q_analyze.split_datoms = (function posh$lib$q_analyze$split_datoms(datoms){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__51551){
var vec__51552 = p__51551;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51552,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51552,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([db_sym,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.rest),db_datoms)]);
}),cljs.core.group_by(cljs.core.first,datoms)));
});
posh.lib.q_analyze.resolve_any_idents = (function posh$lib$q_analyze$resolve_any_idents(entid_fn,db,input_set){
return cljs.core.set((function (){var iter__5523__auto__ = (function posh$lib$q_analyze$resolve_any_idents_$_iter__51555(s__51556){
return (new cljs.core.LazySeq(null,(function (){
var s__51556__$1 = s__51556;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__51556__$1);
if(temp__5823__auto__){
var s__51556__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51556__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__51556__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__51558 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__51557 = (0);
while(true){
if((i__51557 < size__5522__auto__)){
var x = cljs.core._nth(c__5521__auto__,i__51557);
cljs.core.chunk_append(b__51558,((cljs.core.coll_QMARK_(x))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,x) : entid_fn.call(null,db,x)):x));

var G__51766 = (i__51557 + (1));
i__51557 = G__51766;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51558),posh$lib$q_analyze$resolve_any_idents_$_iter__51555(cljs.core.chunk_rest(s__51556__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51558),null);
}
} else {
var x = cljs.core.first(s__51556__$2);
return cljs.core.cons(((cljs.core.coll_QMARK_(x))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,x) : entid_fn.call(null,db,x)):x),posh$lib$q_analyze$resolve_any_idents_$_iter__51555(cljs.core.rest(s__51556__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(input_set);
})());
});
posh.lib.q_analyze.q_analyze = (function posh$lib$q_analyze$q_analyze(dcfg,retrieve,query,args){
var qm = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null)], null),posh.lib.q_analyze.query_to_map(query)], 0));
var where = posh.lib.q_analyze.normalize_all_eavs(cljs.core.vec(new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(qm)));
var eavs = posh.lib.q_analyze.get_eavs(where);
var vars = cljs.core.vec(posh.lib.q_analyze.get_all_vars(eavs));
var newqm = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([qm,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),vars,new cljs.core.Keyword(null,"where","where",-2044795965),where], null)], 0));
var dbvarmap = posh.lib.q_analyze.make_dbarg_map(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var fixed_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__51564){
var vec__51565 = p__51564;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51565,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51565,(1),null);
var or__5045__auto__ = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,sym));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return arg;
}
}),cljs.core.zipmap(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args));
var r = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),newqm),fixed_args);
var lookup_ref_patterns = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__51568){
var vec__51569 = p__51568;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51569,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51569,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$3(cljs.core.vector_QMARK_,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.first),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,(2)),cljs.core.count)),args));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?(function (){var datoms = posh.lib.q_analyze.split_datoms(posh.lib.q_analyze.create_q_datoms(r,eavs,vars));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__51572){
var vec__51573 = p__51572;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51573,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51573,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym))),db_datoms]);
}),datoms))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__51576){
var vec__51577 = p__51576;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51577,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51577,(1),null);
var db = (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(db),posh.lib.util.t_for_datoms(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(db),db_datoms)]);
}),datoms))], null):null)], 0));
})():null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),(function (){var G__51581 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.vec(new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(qm)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null)], null);
var G__51582 = cljs.core.vec(r);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__51581,G__51582) : datascript.core.q.call(null,G__51581,G__51582));
})()], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null,new cljs.core.Keyword(null,"patterns","patterns",1164082024),null,new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?(function (){var in_vars = posh.lib.q_analyze.get_input_sets(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var eavs_ins = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__51583){
var vec__51584 = p__51583;
var seq__51585 = cljs.core.seq(vec__51584);
var first__51586 = cljs.core.first(seq__51585);
var seq__51585__$1 = cljs.core.next(seq__51585);
var db = first__51586;
var eav = seq__51585__$1;
return cljs.core.vec(cljs.core.cons(db,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51561_SHARP_){
var temp__5821__auto__ = (in_vars.cljs$core$IFn$_invoke$arity$1 ? in_vars.cljs$core$IFn$_invoke$arity$1(p1__51561_SHARP_) : in_vars.call(null,p1__51561_SHARP_));
if(cljs.core.truth_(temp__5821__auto__)){
var v = temp__5821__auto__;
return posh.lib.q_analyze.resolve_any_idents(new cljs.core.Keyword(null,"entid","entid",1720688982).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,db)),v);
} else {
return p1__51561_SHARP_;
}
}),eav)));
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(lookup_ref_patterns,eavs));
var qvar_count = posh.lib.q_analyze.count_qvars(eavs_ins);
var linked_qvars = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__51587){
var vec__51588 = p__51587;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51588,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51588,(1),null);
if((v > (1))){
return k;
} else {
return null;
}
}),qvar_count)));
var rvars = cljs.core.zipmap(vars,posh.lib.q_analyze.stack_vectors(r));
var prepped_eavs = clojure.walk.postwalk((function (p1__51562_SHARP_){
if(((posh.lib.q_analyze.qvar_QMARK_(p1__51562_SHARP_)) && (cljs.core.not((linked_qvars.cljs$core$IFn$_invoke$arity$1 ? linked_qvars.cljs$core$IFn$_invoke$arity$1(p1__51562_SHARP_) : linked_qvars.call(null,p1__51562_SHARP_)))))){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__51562_SHARP_;
}
}),eavs_ins);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,clojure.walk.postwalk((function (p1__51563_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__51563_SHARP_)){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__51563_SHARP_;
}
}),eavs_ins))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,prepped_eavs),new cljs.core.Keyword(null,"linked","linked",-1703156372),linked_qvars], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),posh.lib.q_analyze.filter_patterns_from_eavs(dbvarmap,rvars,prepped_eavs)], null):null)], 0));
})():null)], 0));
});

//# sourceMappingURL=posh.lib.q_analyze.js.map
