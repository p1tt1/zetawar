goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__34585){
var map__34586 = p__34585;
var map__34586__$1 = cljs.core.__destructure_map(map__34586);
var runtime = map__34586__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34586__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_34681 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_34681)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__34590 = runtime;
var G__34591 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_34681);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__34590,G__34591) : shadow.remote.runtime.shared.process.call(null,G__34590,G__34591));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__34596,res){
var map__34597 = p__34596;
var map__34597__$1 = cljs.core.__destructure_map(map__34597);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34597__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34597__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__34600 = res;
var G__34600__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34600,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__34600);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34600__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__34600__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__34604 = arguments.length;
switch (G__34604) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__34607,msg,handlers,timeout_after_ms){
var map__34608 = p__34607;
var map__34608__$1 = cljs.core.__destructure_map(map__34608);
var runtime = map__34608__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34608__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___34686 = arguments.length;
var i__5770__auto___34687 = (0);
while(true){
if((i__5770__auto___34687 < len__5769__auto___34686)){
args__5775__auto__.push((arguments[i__5770__auto___34687]));

var G__34688 = (i__5770__auto___34687 + (1));
i__5770__auto___34687 = G__34688;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__34612,ev,args){
var map__34613 = p__34612;
var map__34613__$1 = cljs.core.__destructure_map(map__34613);
var runtime = map__34613__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34613__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__34614 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__34617 = null;
var count__34618 = (0);
var i__34619 = (0);
while(true){
if((i__34619 < count__34618)){
var ext = chunk__34617.cljs$core$IIndexed$_nth$arity$2(null,i__34619);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__34690 = seq__34614;
var G__34691 = chunk__34617;
var G__34692 = count__34618;
var G__34693 = (i__34619 + (1));
seq__34614 = G__34690;
chunk__34617 = G__34691;
count__34618 = G__34692;
i__34619 = G__34693;
continue;
} else {
var G__34694 = seq__34614;
var G__34695 = chunk__34617;
var G__34696 = count__34618;
var G__34697 = (i__34619 + (1));
seq__34614 = G__34694;
chunk__34617 = G__34695;
count__34618 = G__34696;
i__34619 = G__34697;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__34614);
if(temp__5823__auto__){
var seq__34614__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34614__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34614__$1);
var G__34698 = cljs.core.chunk_rest(seq__34614__$1);
var G__34699 = c__5568__auto__;
var G__34700 = cljs.core.count(c__5568__auto__);
var G__34701 = (0);
seq__34614 = G__34698;
chunk__34617 = G__34699;
count__34618 = G__34700;
i__34619 = G__34701;
continue;
} else {
var ext = cljs.core.first(seq__34614__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__34702 = cljs.core.next(seq__34614__$1);
var G__34703 = null;
var G__34704 = (0);
var G__34705 = (0);
seq__34614 = G__34702;
chunk__34617 = G__34703;
count__34618 = G__34704;
i__34619 = G__34705;
continue;
} else {
var G__34706 = cljs.core.next(seq__34614__$1);
var G__34707 = null;
var G__34708 = (0);
var G__34709 = (0);
seq__34614 = G__34706;
chunk__34617 = G__34707;
count__34618 = G__34708;
i__34619 = G__34709;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq34609){
var G__34610 = cljs.core.first(seq34609);
var seq34609__$1 = cljs.core.next(seq34609);
var G__34611 = cljs.core.first(seq34609__$1);
var seq34609__$2 = cljs.core.next(seq34609__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34610,G__34611,seq34609__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__34623,p__34624){
var map__34625 = p__34623;
var map__34625__$1 = cljs.core.__destructure_map(map__34625);
var runtime = map__34625__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34625__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__34626 = p__34624;
var map__34626__$1 = cljs.core.__destructure_map(map__34626);
var msg = map__34626__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34626__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__34627 = cljs.core.deref(state_ref);
var map__34627__$1 = cljs.core.__destructure_map(map__34627);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34627__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34627__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__34628,msg){
var map__34629 = p__34628;
var map__34629__$1 = cljs.core.__destructure_map(map__34629);
var runtime = map__34629__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34629__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__34632,key,p__34633){
var map__34634 = p__34632;
var map__34634__$1 = cljs.core.__destructure_map(map__34634);
var state = map__34634__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34634__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__34635 = p__34633;
var map__34635__$1 = cljs.core.__destructure_map(map__34635);
var spec = map__34635__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34635__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__34636,key,spec){
var map__34637 = p__34636;
var map__34637__$1 = cljs.core.__destructure_map(map__34637);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34637__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__34639_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__34639_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__34640_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__34640_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__34641_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__34641_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__34642_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__34642_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__34643_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__34643_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__34650,key){
var map__34652 = p__34650;
var map__34652__$1 = cljs.core.__destructure_map(map__34652);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34652__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__34656,msg){
var map__34657 = p__34656;
var map__34657__$1 = cljs.core.__destructure_map(map__34657);
var runtime = map__34657__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34657__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__34664,p__34665){
var map__34666 = p__34664;
var map__34666__$1 = cljs.core.__destructure_map(map__34666);
var runtime = map__34666__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34666__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__34667 = p__34665;
var map__34667__$1 = cljs.core.__destructure_map(map__34667);
var msg = map__34667__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34667__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34667__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__34671 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__34673 = null;
var count__34674 = (0);
var i__34675 = (0);
while(true){
if((i__34675 < count__34674)){
var map__34679 = chunk__34673.cljs$core$IIndexed$_nth$arity$2(null,i__34675);
var map__34679__$1 = cljs.core.__destructure_map(map__34679);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34679__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__34722 = seq__34671;
var G__34723 = chunk__34673;
var G__34724 = count__34674;
var G__34725 = (i__34675 + (1));
seq__34671 = G__34722;
chunk__34673 = G__34723;
count__34674 = G__34724;
i__34675 = G__34725;
continue;
} else {
var G__34727 = seq__34671;
var G__34728 = chunk__34673;
var G__34729 = count__34674;
var G__34730 = (i__34675 + (1));
seq__34671 = G__34727;
chunk__34673 = G__34728;
count__34674 = G__34729;
i__34675 = G__34730;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__34671);
if(temp__5823__auto__){
var seq__34671__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34671__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34671__$1);
var G__34731 = cljs.core.chunk_rest(seq__34671__$1);
var G__34732 = c__5568__auto__;
var G__34733 = cljs.core.count(c__5568__auto__);
var G__34734 = (0);
seq__34671 = G__34731;
chunk__34673 = G__34732;
count__34674 = G__34733;
i__34675 = G__34734;
continue;
} else {
var map__34680 = cljs.core.first(seq__34671__$1);
var map__34680__$1 = cljs.core.__destructure_map(map__34680);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34680__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__34736 = cljs.core.next(seq__34671__$1);
var G__34737 = null;
var G__34738 = (0);
var G__34739 = (0);
seq__34671 = G__34736;
chunk__34673 = G__34737;
count__34674 = G__34738;
i__34675 = G__34739;
continue;
} else {
var G__34740 = cljs.core.next(seq__34671__$1);
var G__34741 = null;
var G__34742 = (0);
var G__34743 = (0);
seq__34671 = G__34740;
chunk__34673 = G__34741;
count__34674 = G__34742;
i__34675 = G__34743;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
