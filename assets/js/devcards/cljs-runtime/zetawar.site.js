goog.provide('zetawar.site');
zetawar.site._PLUS_prefix_PLUS_ = "";
zetawar.site.prefix = (function zetawar$site$prefix(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52131 = arguments.length;
var i__5770__auto___52132 = (0);
while(true){
if((i__5770__auto___52132 < len__5769__auto___52131)){
args__5775__auto__.push((arguments[i__5770__auto___52132]));

var G__52133 = (i__5770__auto___52132 + (1));
i__5770__auto___52132 = G__52133;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return zetawar.site.prefix.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(zetawar.site.prefix.cljs$core$IFn$_invoke$arity$variadic = (function (url_parts){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,zetawar.site._PLUS_prefix_PLUS_,url_parts);
}));

(zetawar.site.prefix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(zetawar.site.prefix.cljs$lang$applyTo = (function (seq52118){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52118));
}));

zetawar.site.build = "";
zetawar.site.build_timestamp = "";
/**
 * Returns true if currently viewing devcards.
 */
zetawar.site.viewing_devcards_QMARK_ = (function zetawar$site$viewing_devcards_QMARK_(){
return cljs.core.re_matches(/.*\/devcards.*/,window.location.href);
});

//# sourceMappingURL=zetawar.site.js.map
