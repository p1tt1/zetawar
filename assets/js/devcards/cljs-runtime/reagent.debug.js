goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__42729__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__42729 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42730__i = 0, G__42730__a = new Array(arguments.length -  0);
while (G__42730__i < G__42730__a.length) {G__42730__a[G__42730__i] = arguments[G__42730__i + 0]; ++G__42730__i;}
  args = new cljs.core.IndexedSeq(G__42730__a,0,null);
} 
return G__42729__delegate.call(this,args);};
G__42729.cljs$lang$maxFixedArity = 0;
G__42729.cljs$lang$applyTo = (function (arglist__42731){
var args = cljs.core.seq(arglist__42731);
return G__42729__delegate(args);
});
G__42729.cljs$core$IFn$_invoke$arity$variadic = G__42729__delegate;
return G__42729;
})()
);

(o.error = (function() { 
var G__42732__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__42732 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42733__i = 0, G__42733__a = new Array(arguments.length -  0);
while (G__42733__i < G__42733__a.length) {G__42733__a[G__42733__i] = arguments[G__42733__i + 0]; ++G__42733__i;}
  args = new cljs.core.IndexedSeq(G__42733__a,0,null);
} 
return G__42732__delegate.call(this,args);};
G__42732.cljs$lang$maxFixedArity = 0;
G__42732.cljs$lang$applyTo = (function (arglist__42734){
var args = cljs.core.seq(arglist__42734);
return G__42732__delegate(args);
});
G__42732.cljs$core$IFn$_invoke$arity$variadic = G__42732__delegate;
return G__42732;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
