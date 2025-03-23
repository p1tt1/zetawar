goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37615){
var map__37616 = p__37615;
var map__37616__$1 = cljs.core.__destructure_map(map__37616);
var m = map__37616__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37616__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37616__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37632_38068 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37633_38069 = null;
var count__37634_38070 = (0);
var i__37635_38071 = (0);
while(true){
if((i__37635_38071 < count__37634_38070)){
var f_38074 = chunk__37633_38069.cljs$core$IIndexed$_nth$arity$2(null,i__37635_38071);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_38074], 0));


var G__38080 = seq__37632_38068;
var G__38081 = chunk__37633_38069;
var G__38082 = count__37634_38070;
var G__38083 = (i__37635_38071 + (1));
seq__37632_38068 = G__38080;
chunk__37633_38069 = G__38081;
count__37634_38070 = G__38082;
i__37635_38071 = G__38083;
continue;
} else {
var temp__5823__auto___38085 = cljs.core.seq(seq__37632_38068);
if(temp__5823__auto___38085){
var seq__37632_38086__$1 = temp__5823__auto___38085;
if(cljs.core.chunked_seq_QMARK_(seq__37632_38086__$1)){
var c__5568__auto___38091 = cljs.core.chunk_first(seq__37632_38086__$1);
var G__38095 = cljs.core.chunk_rest(seq__37632_38086__$1);
var G__38097 = c__5568__auto___38091;
var G__38098 = cljs.core.count(c__5568__auto___38091);
var G__38099 = (0);
seq__37632_38068 = G__38095;
chunk__37633_38069 = G__38097;
count__37634_38070 = G__38098;
i__37635_38071 = G__38099;
continue;
} else {
var f_38100 = cljs.core.first(seq__37632_38086__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_38100], 0));


var G__38105 = cljs.core.next(seq__37632_38086__$1);
var G__38106 = null;
var G__38107 = (0);
var G__38108 = (0);
seq__37632_38068 = G__38105;
chunk__37633_38069 = G__38106;
count__37634_38070 = G__38107;
i__37635_38071 = G__38108;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38114 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_38114], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_38114)))?cljs.core.second(arglists_38114):arglists_38114)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37657_38134 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37658_38138 = null;
var count__37659_38139 = (0);
var i__37660_38140 = (0);
while(true){
if((i__37660_38140 < count__37659_38139)){
var vec__37729_38143 = chunk__37658_38138.cljs$core$IIndexed$_nth$arity$2(null,i__37660_38140);
var name_38144 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37729_38143,(0),null);
var map__37732_38145 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37729_38143,(1),null);
var map__37732_38146__$1 = cljs.core.__destructure_map(map__37732_38145);
var doc_38147 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37732_38146__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38148 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37732_38146__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_38144], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_38148], 0));

if(cljs.core.truth_(doc_38147)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_38147], 0));
} else {
}


var G__38163 = seq__37657_38134;
var G__38164 = chunk__37658_38138;
var G__38165 = count__37659_38139;
var G__38166 = (i__37660_38140 + (1));
seq__37657_38134 = G__38163;
chunk__37658_38138 = G__38164;
count__37659_38139 = G__38165;
i__37660_38140 = G__38166;
continue;
} else {
var temp__5823__auto___38171 = cljs.core.seq(seq__37657_38134);
if(temp__5823__auto___38171){
var seq__37657_38176__$1 = temp__5823__auto___38171;
if(cljs.core.chunked_seq_QMARK_(seq__37657_38176__$1)){
var c__5568__auto___38177 = cljs.core.chunk_first(seq__37657_38176__$1);
var G__38178 = cljs.core.chunk_rest(seq__37657_38176__$1);
var G__38179 = c__5568__auto___38177;
var G__38180 = cljs.core.count(c__5568__auto___38177);
var G__38181 = (0);
seq__37657_38134 = G__38178;
chunk__37658_38138 = G__38179;
count__37659_38139 = G__38180;
i__37660_38140 = G__38181;
continue;
} else {
var vec__37737_38182 = cljs.core.first(seq__37657_38176__$1);
var name_38183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37737_38182,(0),null);
var map__37740_38184 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37737_38182,(1),null);
var map__37740_38185__$1 = cljs.core.__destructure_map(map__37740_38184);
var doc_38186 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37740_38185__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38187 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37740_38185__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_38183], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_38187], 0));

if(cljs.core.truth_(doc_38186)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_38186], 0));
} else {
}


var G__38188 = cljs.core.next(seq__37657_38176__$1);
var G__38189 = null;
var G__38190 = (0);
var G__38191 = (0);
seq__37657_38134 = G__38188;
chunk__37658_38138 = G__38189;
count__37659_38139 = G__38190;
i__37660_38140 = G__38191;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5823__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5823__auto__)){
var fnspec = temp__5823__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__37754 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37755 = null;
var count__37756 = (0);
var i__37757 = (0);
while(true){
if((i__37757 < count__37756)){
var role = chunk__37755.cljs$core$IIndexed$_nth$arity$2(null,i__37757);
var temp__5823__auto___38195__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___38195__$1)){
var spec_38197 = temp__5823__auto___38195__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_38197)], 0));
} else {
}


var G__38198 = seq__37754;
var G__38199 = chunk__37755;
var G__38200 = count__37756;
var G__38201 = (i__37757 + (1));
seq__37754 = G__38198;
chunk__37755 = G__38199;
count__37756 = G__38200;
i__37757 = G__38201;
continue;
} else {
var temp__5823__auto____$1 = cljs.core.seq(seq__37754);
if(temp__5823__auto____$1){
var seq__37754__$1 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__37754__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37754__$1);
var G__38202 = cljs.core.chunk_rest(seq__37754__$1);
var G__38203 = c__5568__auto__;
var G__38204 = cljs.core.count(c__5568__auto__);
var G__38205 = (0);
seq__37754 = G__38202;
chunk__37755 = G__38203;
count__37756 = G__38204;
i__37757 = G__38205;
continue;
} else {
var role = cljs.core.first(seq__37754__$1);
var temp__5823__auto___38206__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___38206__$2)){
var spec_38207 = temp__5823__auto___38206__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_38207)], 0));
} else {
}


var G__38209 = cljs.core.next(seq__37754__$1);
var G__38210 = null;
var G__38211 = (0);
var G__38212 = (0);
seq__37754 = G__38209;
chunk__37755 = G__38210;
count__37756 = G__38211;
i__37757 = G__38212;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5823__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5823__auto__)){
var msg = temp__5823__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5823__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5823__auto__)){
var ed = temp__5823__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__38213 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__38214 = cljs.core.ex_cause(t);
via = G__38213;
t = G__38214;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5823__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5823__auto__)){
var root_msg = temp__5823__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5823__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5823__auto__)){
var data = temp__5823__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5823__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5823__auto__)){
var phase = temp__5823__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__37834 = datafied_throwable;
var map__37834__$1 = cljs.core.__destructure_map(map__37834);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37834__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37834__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37834__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__37835 = cljs.core.last(via);
var map__37835__$1 = cljs.core.__destructure_map(map__37835);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37835__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37835__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37835__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__37836 = data;
var map__37836__$1 = cljs.core.__destructure_map(map__37836);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37836__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37836__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37836__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__37837 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__37837__$1 = cljs.core.__destructure_map(map__37837);
var top_data = map__37837__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37837__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__37839 = phase;
var G__37839__$1 = (((G__37839 instanceof cljs.core.Keyword))?G__37839.fqn:null);
switch (G__37839__$1) {
case "read-source":
var map__37841 = data;
var map__37841__$1 = cljs.core.__destructure_map(map__37841);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37841__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37841__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__37842 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__37842__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37842,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__37842);
var G__37842__$2 = (cljs.core.truth_((function (){var fexpr__37851 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__37851.cljs$core$IFn$_invoke$arity$1 ? fexpr__37851.cljs$core$IFn$_invoke$arity$1(source) : fexpr__37851.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__37842__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__37842__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37842__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__37842__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__37861 = top_data;
var G__37861__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37861,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__37861);
var G__37861__$2 = (cljs.core.truth_((function (){var fexpr__37862 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__37862.cljs$core$IFn$_invoke$arity$1 ? fexpr__37862.cljs$core$IFn$_invoke$arity$1(source) : fexpr__37862.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__37861__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__37861__$1);
var G__37861__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37861__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__37861__$2);
var G__37861__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37861__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__37861__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37861__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__37861__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__37870 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37870,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37870,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37870,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37870,(3),null);
var G__37873 = top_data;
var G__37873__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37873,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__37873);
var G__37873__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37873__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__37873__$1);
var G__37873__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37873__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__37873__$2);
var G__37873__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37873__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__37873__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37873__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__37873__$4;
}

break;
case "execution":
var vec__37879 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37879,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37879,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37879,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37879,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__37831_SHARP_){
var or__5045__auto__ = (p1__37831_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__37891 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__37891.cljs$core$IFn$_invoke$arity$1 ? fexpr__37891.cljs$core$IFn$_invoke$arity$1(p1__37831_SHARP_) : fexpr__37891.call(null,p1__37831_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__37892 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__37892__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37892,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__37892);
var G__37892__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37892__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__37892__$1);
var G__37892__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37892__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__37892__$2);
var G__37892__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37892__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__37892__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37892__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__37892__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37839__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__37952){
var map__37957 = p__37952;
var map__37957__$1 = cljs.core.__destructure_map(map__37957);
var triage_data = map__37957__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37957__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37957__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37957__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37957__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37957__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37957__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37957__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37957__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__37968 = phase;
var G__37968__$1 = (((G__37968 instanceof cljs.core.Keyword))?G__37968.fqn:null);
switch (G__37968__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__37972 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__37973 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37974 = loc;
var G__37975 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37978_38225 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37979_38226 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37980_38227 = true;
var _STAR_print_fn_STAR__temp_val__37981_38228 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37980_38227);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37981_38228);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37918_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__37918_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37979_38226);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37978_38225);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__37972,G__37973,G__37974,G__37975) : format.call(null,G__37972,G__37973,G__37974,G__37975));

break;
case "macroexpansion":
var G__37986 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__37987 = cause_type;
var G__37988 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37989 = loc;
var G__37990 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37986,G__37987,G__37988,G__37989,G__37990) : format.call(null,G__37986,G__37987,G__37988,G__37989,G__37990));

break;
case "compile-syntax-check":
var G__37994 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__37995 = cause_type;
var G__37996 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37997 = loc;
var G__37998 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37994,G__37995,G__37996,G__37997,G__37998) : format.call(null,G__37994,G__37995,G__37996,G__37997,G__37998));

break;
case "compilation":
var G__37999 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__38000 = cause_type;
var G__38001 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38002 = loc;
var G__38003 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37999,G__38000,G__38001,G__38002,G__38003) : format.call(null,G__37999,G__38000,G__38001,G__38002,G__38003));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__38006 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__38007 = symbol;
var G__38008 = loc;
var G__38009 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38012_38234 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38013_38235 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38014_38236 = true;
var _STAR_print_fn_STAR__temp_val__38015_38237 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38014_38236);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38015_38237);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37919_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__37919_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38013_38235);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38012_38234);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__38006,G__38007,G__38008,G__38009) : format.call(null,G__38006,G__38007,G__38008,G__38009));
} else {
var G__38018 = "Execution error%s at %s(%s).\n%s\n";
var G__38019 = cause_type;
var G__38020 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38021 = loc;
var G__38022 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38018,G__38019,G__38020,G__38021,G__38022) : format.call(null,G__38018,G__38019,G__38020,G__38021,G__38022));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37968__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
