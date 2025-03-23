goog.provide('zetawar.router');
goog.scope(function(){
  zetawar.router.goog$module$goog$object = goog.module.get('goog.object');
});
if((typeof Raven !== 'undefined')){
} else {
var stub_51867 = ({"captureMessage": (function (){
return cljs.core.List.EMPTY;
}), "captureException": (function (){
return console.trace();
})});
var global_51868__$1 = (((typeof window !== 'undefined'))?window:global);
zetawar.router.goog$module$goog$object.set(global_51868__$1,"Raven",stub_51867);
}
if((typeof zetawar !== 'undefined') && (typeof zetawar.router !== 'undefined') && (typeof zetawar.router.handle_event !== 'undefined')){
} else {
zetawar.router.handle_event = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__51802 = cljs.core.get_global_hierarchy;
return (fexpr__51802.cljs$core$IFn$_invoke$arity$0 ? fexpr__51802.cljs$core$IFn$_invoke$arity$0() : fexpr__51802.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("zetawar.router","handle-event"),(function (ev_ctx,p__51803){
var vec__51804 = p__51803;
var seq__51805 = cljs.core.seq(vec__51804);
var first__51806 = cljs.core.first(seq__51805);
var seq__51805__$1 = cljs.core.next(seq__51805);
var ev_type = first__51806;
var _ = seq__51805__$1;
return ev_type;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
zetawar.router.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,msg){
var log_msg_51869 = ["Unhandled event: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0))].join('');
Raven.captureMessage(log_msg_51869);

zetawar.logging.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([log_msg_51869], 0));

return null;
}));
zetawar.router.dispatch = (function zetawar$router$dispatch(ch,msg){
if(cljs.core.truth_(msg)){
if(cljs.core.truth_(cljs.core.async.offer_BANG_(ch,msg))){
return zetawar.logging.info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Dispatching event:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0))], 0));
} else {
var log_msg = ["Failed to dispatch event (buffer full?): ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0))].join('');
Raven.captureMessage(log_msg);

return zetawar.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([log_msg], 0));
}
} else {
var log_msg = "Unable to dispatch 'nil' event message";
Raven.captureMessage(log_msg);

return zetawar.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([log_msg], 0));
}
});
zetawar.router.handle_event_STAR_ = (function zetawar$router$handle_event_STAR_(p__51811,msg){
var map__51812 = p__51811;
var map__51812__$1 = cljs.core.__destructure_map(map__51812);
var router_ctx = map__51812__$1;
var conn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51812__$1,new cljs.core.Keyword(null,"conn","conn",278309663));
var ev_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51812__$1,new cljs.core.Keyword(null,"ev-chan","ev-chan",-1400969365));
var notify_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51812__$1,new cljs.core.Keyword(null,"notify-chan","notify-chan",-789394864));
var ev_ctx = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(router_ctx,new cljs.core.Keyword(null,"db","db",993250759),cljs.core.deref(conn));
var map__51815 = zetawar.router.handle_event.cljs$core$IFn$_invoke$arity$2(ev_ctx,msg);
var map__51815__$1 = cljs.core.__destructure_map(map__51815);
var ret = map__51815__$1;
var tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51815__$1,new cljs.core.Keyword(null,"tx","tx",466630418));
zetawar.logging.trace.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Handler returned:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ret], 0))], 0));

if(cljs.core.truth_(tx)){
zetawar.logging.debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Transacting:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tx], 0))], 0));

datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,tx);
} else {
}

var seq__51817_51870 = cljs.core.seq(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009).cljs$core$IFn$_invoke$arity$1(ret));
var chunk__51818_51871 = null;
var count__51819_51872 = (0);
var i__51820_51873 = (0);
while(true){
if((i__51820_51873 < count__51819_51872)){
var new_msg_51874 = chunk__51818_51871.cljs$core$IIndexed$_nth$arity$2(null,i__51820_51873);
zetawar.router.dispatch(ev_chan,new_msg_51874);


var G__51875 = seq__51817_51870;
var G__51876 = chunk__51818_51871;
var G__51877 = count__51819_51872;
var G__51878 = (i__51820_51873 + (1));
seq__51817_51870 = G__51875;
chunk__51818_51871 = G__51876;
count__51819_51872 = G__51877;
i__51820_51873 = G__51878;
continue;
} else {
var temp__5823__auto___51879 = cljs.core.seq(seq__51817_51870);
if(temp__5823__auto___51879){
var seq__51817_51880__$1 = temp__5823__auto___51879;
if(cljs.core.chunked_seq_QMARK_(seq__51817_51880__$1)){
var c__5568__auto___51881 = cljs.core.chunk_first(seq__51817_51880__$1);
var G__51882 = cljs.core.chunk_rest(seq__51817_51880__$1);
var G__51883 = c__5568__auto___51881;
var G__51884 = cljs.core.count(c__5568__auto___51881);
var G__51885 = (0);
seq__51817_51870 = G__51882;
chunk__51818_51871 = G__51883;
count__51819_51872 = G__51884;
i__51820_51873 = G__51885;
continue;
} else {
var new_msg_51886 = cljs.core.first(seq__51817_51880__$1);
zetawar.router.dispatch(ev_chan,new_msg_51886);


var G__51887 = cljs.core.next(seq__51817_51880__$1);
var G__51888 = null;
var G__51889 = (0);
var G__51890 = (0);
seq__51817_51870 = G__51887;
chunk__51818_51871 = G__51888;
count__51819_51872 = G__51889;
i__51820_51873 = G__51890;
continue;
}
} else {
}
}
break;
}

var seq__51821 = cljs.core.seq(new cljs.core.Keyword(null,"notify","notify",-1256867814).cljs$core$IFn$_invoke$arity$1(ret));
var chunk__51822 = null;
var count__51823 = (0);
var i__51824 = (0);
while(true){
if((i__51824 < count__51823)){
var notify_msg = chunk__51822.cljs$core$IIndexed$_nth$arity$2(null,i__51824);
zetawar.players.notify(notify_chan,notify_msg);


var G__51891 = seq__51821;
var G__51892 = chunk__51822;
var G__51893 = count__51823;
var G__51894 = (i__51824 + (1));
seq__51821 = G__51891;
chunk__51822 = G__51892;
count__51823 = G__51893;
i__51824 = G__51894;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__51821);
if(temp__5823__auto__){
var seq__51821__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51821__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__51821__$1);
var G__51895 = cljs.core.chunk_rest(seq__51821__$1);
var G__51896 = c__5568__auto__;
var G__51897 = cljs.core.count(c__5568__auto__);
var G__51898 = (0);
seq__51821 = G__51895;
chunk__51822 = G__51896;
count__51823 = G__51897;
i__51824 = G__51898;
continue;
} else {
var notify_msg = cljs.core.first(seq__51821__$1);
zetawar.players.notify(notify_chan,notify_msg);


var G__51899 = cljs.core.next(seq__51821__$1);
var G__51900 = null;
var G__51901 = (0);
var G__51902 = (0);
seq__51821 = G__51899;
chunk__51822 = G__51900;
count__51823 = G__51901;
i__51824 = G__51902;
continue;
}
} else {
return null;
}
}
break;
}
});
zetawar.router.start = (function zetawar$router$start(p__51825){
var map__51826 = p__51825;
var map__51826__$1 = cljs.core.__destructure_map(map__51826);
var router_ctx = map__51826__$1;
var ev_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51826__$1,new cljs.core.Keyword(null,"ev-chan","ev-chan",-1400969365));
var handler_wrapper_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51826__$1,new cljs.core.Keyword(null,"handler-wrapper-fn","handler-wrapper-fn",946459975));
var max_render_interval = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51826__$1,new cljs.core.Keyword(null,"max-render-interval","max-render-interval",-1305146198));
var handler_wrapper = (cljs.core.truth_(handler_wrapper_fn)?(handler_wrapper_fn.cljs$core$IFn$_invoke$arity$1 ? handler_wrapper_fn.cljs$core$IFn$_invoke$arity$1(router_ctx) : handler_wrapper_fn.call(null,router_ctx)):(function (handler){
var c__34399__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34400__auto__ = (function (){var switch__34140__auto__ = (function (state_51829){
var state_val_51830 = (state_51829[(1)]);
if((state_val_51830 === (1))){
var inst_51827 = (handler.cljs$core$IFn$_invoke$arity$0 ? handler.cljs$core$IFn$_invoke$arity$0() : handler.call(null));
var state_51829__$1 = state_51829;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51829__$1,inst_51827);
} else {
return null;
}
});
return (function() {
var zetawar$router$start_$_state_machine__34141__auto__ = null;
var zetawar$router$start_$_state_machine__34141__auto____0 = (function (){
var statearr_51831 = [null,null,null,null,null,null,null];
(statearr_51831[(0)] = zetawar$router$start_$_state_machine__34141__auto__);

(statearr_51831[(1)] = (1));

return statearr_51831;
});
var zetawar$router$start_$_state_machine__34141__auto____1 = (function (state_51829){
while(true){
var ret_value__34142__auto__ = (function (){try{while(true){
var result__34143__auto__ = switch__34140__auto__(state_51829);
if(cljs.core.keyword_identical_QMARK_(result__34143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34143__auto__;
}
break;
}
}catch (e51832){var ex__34144__auto__ = e51832;
var statearr_51833_51904 = state_51829;
(statearr_51833_51904[(2)] = ex__34144__auto__);


if(cljs.core.seq((state_51829[(4)]))){
var statearr_51834_51905 = state_51829;
(statearr_51834_51905[(1)] = cljs.core.first((state_51829[(4)])));

} else {
throw ex__34144__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51906 = state_51829;
state_51829 = G__51906;
continue;
} else {
return ret_value__34142__auto__;
}
break;
}
});
zetawar$router$start_$_state_machine__34141__auto__ = function(state_51829){
switch(arguments.length){
case 0:
return zetawar$router$start_$_state_machine__34141__auto____0.call(this);
case 1:
return zetawar$router$start_$_state_machine__34141__auto____1.call(this,state_51829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
zetawar$router$start_$_state_machine__34141__auto__.cljs$core$IFn$_invoke$arity$0 = zetawar$router$start_$_state_machine__34141__auto____0;
zetawar$router$start_$_state_machine__34141__auto__.cljs$core$IFn$_invoke$arity$1 = zetawar$router$start_$_state_machine__34141__auto____1;
return zetawar$router$start_$_state_machine__34141__auto__;
})()
})();
var state__34401__auto__ = (function (){var statearr_51835 = f__34400__auto__();
(statearr_51835[(6)] = c__34399__auto__);

return statearr_51835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34401__auto__);
}));

return c__34399__auto__;
}));
var c__34399__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34400__auto__ = (function (){var switch__34140__auto__ = (function (state_51851){
var state_val_51852 = (state_51851[(1)]);
if((state_val_51852 === (1))){
var state_51851__$1 = state_51851;
var statearr_51853_51907 = state_51851__$1;
(statearr_51853_51907[(2)] = null);

(statearr_51853_51907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51852 === (2))){
var state_51851__$1 = state_51851;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51851__$1,(4),ev_chan);
} else {
if((state_val_51852 === (3))){
var inst_51849 = (state_51851[(2)]);
var state_51851__$1 = state_51851;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51851__$1,inst_51849);
} else {
if((state_val_51852 === (4))){
var inst_51838 = (state_51851[(7)]);
var inst_51838__$1 = (state_51851[(2)]);
var state_51851__$1 = (function (){var statearr_51854 = state_51851;
(statearr_51854[(7)] = inst_51838__$1);

return statearr_51854;
})();
if(cljs.core.truth_(inst_51838__$1)){
var statearr_51855_51908 = state_51851__$1;
(statearr_51855_51908[(1)] = (5));

} else {
var statearr_51856_51909 = state_51851__$1;
(statearr_51856_51909[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51852 === (5))){
var inst_51838 = (state_51851[(7)]);
var inst_51840 = (function (){var temp__5823__auto__ = inst_51838;
var msg = inst_51838;
return (function (){
try{zetawar.logging.debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Handling event:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0))], 0));

return zetawar.router.handle_event_STAR_(router_ctx,msg);
}catch (e51857){var ex = e51857;
Raven.captureException(ex);

return zetawar.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ex,"Error handling event:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0))], 0));
}});
})();
var inst_51841 = (handler_wrapper.cljs$core$IFn$_invoke$arity$1 ? handler_wrapper.cljs$core$IFn$_invoke$arity$1(inst_51840) : handler_wrapper.call(null,inst_51840));
var state_51851__$1 = state_51851;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51851__$1,(8),inst_51841);
} else {
if((state_val_51852 === (6))){
var state_51851__$1 = state_51851;
var statearr_51858_51910 = state_51851__$1;
(statearr_51858_51910[(2)] = null);

(statearr_51858_51910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51852 === (7))){
var inst_51847 = (state_51851[(2)]);
var state_51851__$1 = state_51851;
var statearr_51859_51911 = state_51851__$1;
(statearr_51859_51911[(2)] = inst_51847);

(statearr_51859_51911[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51852 === (8))){
var inst_51843 = (state_51851[(2)]);
var state_51851__$1 = (function (){var statearr_51860 = state_51851;
(statearr_51860[(8)] = inst_51843);

return statearr_51860;
})();
var statearr_51861_51912 = state_51851__$1;
(statearr_51861_51912[(2)] = null);

(statearr_51861_51912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});
return (function() {
var zetawar$router$start_$_state_machine__34141__auto__ = null;
var zetawar$router$start_$_state_machine__34141__auto____0 = (function (){
var statearr_51862 = [null,null,null,null,null,null,null,null,null];
(statearr_51862[(0)] = zetawar$router$start_$_state_machine__34141__auto__);

(statearr_51862[(1)] = (1));

return statearr_51862;
});
var zetawar$router$start_$_state_machine__34141__auto____1 = (function (state_51851){
while(true){
var ret_value__34142__auto__ = (function (){try{while(true){
var result__34143__auto__ = switch__34140__auto__(state_51851);
if(cljs.core.keyword_identical_QMARK_(result__34143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34143__auto__;
}
break;
}
}catch (e51863){var ex__34144__auto__ = e51863;
var statearr_51864_51915 = state_51851;
(statearr_51864_51915[(2)] = ex__34144__auto__);


if(cljs.core.seq((state_51851[(4)]))){
var statearr_51865_51916 = state_51851;
(statearr_51865_51916[(1)] = cljs.core.first((state_51851[(4)])));

} else {
throw ex__34144__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51917 = state_51851;
state_51851 = G__51917;
continue;
} else {
return ret_value__34142__auto__;
}
break;
}
});
zetawar$router$start_$_state_machine__34141__auto__ = function(state_51851){
switch(arguments.length){
case 0:
return zetawar$router$start_$_state_machine__34141__auto____0.call(this);
case 1:
return zetawar$router$start_$_state_machine__34141__auto____1.call(this,state_51851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
zetawar$router$start_$_state_machine__34141__auto__.cljs$core$IFn$_invoke$arity$0 = zetawar$router$start_$_state_machine__34141__auto____0;
zetawar$router$start_$_state_machine__34141__auto__.cljs$core$IFn$_invoke$arity$1 = zetawar$router$start_$_state_machine__34141__auto____1;
return zetawar$router$start_$_state_machine__34141__auto__;
})()
})();
var state__34401__auto__ = (function (){var statearr_51866 = f__34400__auto__();
(statearr_51866[(6)] = c__34399__auto__);

return statearr_51866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34401__auto__);
}));

return c__34399__auto__;
});

//# sourceMappingURL=zetawar.router.js.map
