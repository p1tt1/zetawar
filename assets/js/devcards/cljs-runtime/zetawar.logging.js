goog.provide('zetawar.logging');
/**
 * @define {number}
 */
zetawar.logging.LOG_LEVEL = goog.define("zetawar.logging.LOG_LEVEL",(4));
zetawar.logging.log = (function zetawar$logging$log(var_args){
var args__5775__auto__ = [];
var len__5769__auto___47714 = arguments.length;
var i__5770__auto___47715 = (0);
while(true){
if((i__5770__auto___47715 < len__5769__auto___47714)){
args__5775__auto__.push((arguments[i__5770__auto___47715]));

var G__47716 = (i__5770__auto___47715 + (1));
i__5770__auto___47715 = G__47716;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return zetawar.logging.log.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(zetawar.logging.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__47685 = args;
var seq__47686 = cljs.core.seq(vec__47685);
var first__47687 = cljs.core.first(seq__47686);
var seq__47686__$1 = cljs.core.next(seq__47686);
var ex = first__47687;
var other_args = seq__47686__$1;
if(cljs.core.truth_(ex.stack)){
console.log(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",other_args)));

return console.log(ex);
} else {
return console.log(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",args)));
}
}));

(zetawar.logging.log.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(zetawar.logging.log.cljs$lang$applyTo = (function (seq47682){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47682));
}));

zetawar.logging.error = (function zetawar$logging$error(var_args){
var args__5775__auto__ = [];
var len__5769__auto___47717 = arguments.length;
var i__5770__auto___47718 = (0);
while(true){
if((i__5770__auto___47718 < len__5769__auto___47717)){
args__5775__auto__.push((arguments[i__5770__auto___47718]));

var G__47719 = (i__5770__auto___47718 + (1));
i__5770__auto___47718 = G__47719;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return zetawar.logging.error.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(zetawar.logging.error.cljs$core$IFn$_invoke$arity$variadic = (function (args){
if((zetawar.logging.LOG_LEVEL >= (0))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(zetawar.logging.log,args);
} else {
return null;
}
}));

(zetawar.logging.error.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(zetawar.logging.error.cljs$lang$applyTo = (function (seq47700){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47700));
}));

zetawar.logging.warn = (function zetawar$logging$warn(var_args){
var args__5775__auto__ = [];
var len__5769__auto___47723 = arguments.length;
var i__5770__auto___47724 = (0);
while(true){
if((i__5770__auto___47724 < len__5769__auto___47723)){
args__5775__auto__.push((arguments[i__5770__auto___47724]));

var G__47726 = (i__5770__auto___47724 + (1));
i__5770__auto___47724 = G__47726;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return zetawar.logging.warn.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(zetawar.logging.warn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
if((zetawar.logging.LOG_LEVEL >= (1))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(zetawar.logging.log,args);
} else {
return null;
}
}));

(zetawar.logging.warn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(zetawar.logging.warn.cljs$lang$applyTo = (function (seq47707){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47707));
}));

zetawar.logging.info = (function zetawar$logging$info(var_args){
var args__5775__auto__ = [];
var len__5769__auto___47734 = arguments.length;
var i__5770__auto___47735 = (0);
while(true){
if((i__5770__auto___47735 < len__5769__auto___47734)){
args__5775__auto__.push((arguments[i__5770__auto___47735]));

var G__47736 = (i__5770__auto___47735 + (1));
i__5770__auto___47735 = G__47736;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return zetawar.logging.info.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(zetawar.logging.info.cljs$core$IFn$_invoke$arity$variadic = (function (args){
if((zetawar.logging.LOG_LEVEL >= (2))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(zetawar.logging.log,args);
} else {
return null;
}
}));

(zetawar.logging.info.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(zetawar.logging.info.cljs$lang$applyTo = (function (seq47708){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47708));
}));

zetawar.logging.debug = (function zetawar$logging$debug(var_args){
var args__5775__auto__ = [];
var len__5769__auto___47738 = arguments.length;
var i__5770__auto___47739 = (0);
while(true){
if((i__5770__auto___47739 < len__5769__auto___47738)){
args__5775__auto__.push((arguments[i__5770__auto___47739]));

var G__47740 = (i__5770__auto___47739 + (1));
i__5770__auto___47739 = G__47740;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return zetawar.logging.debug.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(zetawar.logging.debug.cljs$core$IFn$_invoke$arity$variadic = (function (args){
if((zetawar.logging.LOG_LEVEL >= (3))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(zetawar.logging.log,args);
} else {
return null;
}
}));

(zetawar.logging.debug.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(zetawar.logging.debug.cljs$lang$applyTo = (function (seq47709){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47709));
}));

zetawar.logging.trace = (function zetawar$logging$trace(var_args){
var args__5775__auto__ = [];
var len__5769__auto___47741 = arguments.length;
var i__5770__auto___47742 = (0);
while(true){
if((i__5770__auto___47742 < len__5769__auto___47741)){
args__5775__auto__.push((arguments[i__5770__auto___47742]));

var G__47743 = (i__5770__auto___47742 + (1));
i__5770__auto___47742 = G__47743;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return zetawar.logging.trace.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(zetawar.logging.trace.cljs$core$IFn$_invoke$arity$variadic = (function (args){
if((zetawar.logging.LOG_LEVEL >= (4))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(zetawar.logging.log,args);
} else {
return null;
}
}));

(zetawar.logging.trace.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(zetawar.logging.trace.cljs$lang$applyTo = (function (seq47713){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47713));
}));


//# sourceMappingURL=zetawar.logging.js.map
