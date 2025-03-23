goog.provide('zetawar.util');
/**
 * Like first, but throws if more than one item.
 */
zetawar.util.solo = (function zetawar$util$solo(coll){
if(cljs.core.not(cljs.core.next(coll))){
} else {
throw (new Error("Assert failed: (not (next coll))"));
}

return cljs.core.first(coll);
});
/**
 * Like first, but throws unless exactly one item.
 */
zetawar.util.only = (function zetawar$util$only(coll){
if(cljs.core.not(cljs.core.next(coll))){
} else {
throw (new Error("Assert failed: (not (next coll))"));
}

var temp__5821__auto__ = cljs.core.first(coll);
if(cljs.core.truth_(temp__5821__auto__)){
var result = temp__5821__auto__;
return result;
} else {
throw (new Error("Assert failed: false"));

}
});
/**
 * Same as (solo (solo coll)).
 */
zetawar.util.ssolo = (function zetawar$util$ssolo(coll){
return zetawar.util.solo(zetawar.util.solo(coll));
});
/**
 * Same as (only (only coll)).
 */
zetawar.util.oonly = (function zetawar$util$oonly(coll){
return zetawar.util.only(zetawar.util.only(coll));
});
/**
 * Returns a vector containing only those values who's key is in ks.
 */
zetawar.util.select_values = (function zetawar$util$select_values(m,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__33821_SHARP_,p2__33820_SHARP_){
var temp__5821__auto__ = (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(p2__33820_SHARP_) : m.call(null,p2__33820_SHARP_));
if(cljs.core.truth_(temp__5821__auto__)){
var v = temp__5821__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__33821_SHARP_,v);
} else {
return p1__33821_SHARP_;
}
}),cljs.core.PersistentVector.EMPTY,ks);
});
zetawar.util.abs = (function zetawar$util$abs(x){
return Math.abs(x);
});
zetawar.util.log_inspect = (function zetawar$util$log_inspect(expr,result){
return console.debug(expr,result);
});
zetawar.util.inspect_1 = (function zetawar$util$inspect_1(expr){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"result__33822__auto__","result__33822__auto__",126643273,null),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("zetawar.util","log-inspect","zetawar.util/log-inspect",-158539123,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"result__33822__auto__","result__33822__auto__",126643273,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"result__33822__auto__","result__33822__auto__",126643273,null),null,(1),null))], 0))));
});

//# sourceMappingURL=zetawar.util.js.map
