goog.provide('zetawar.players');
zetawar.players.player_types = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zetawar.players","human","zetawar.players/human",407772126),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"description","description",-1428560544),"Human",new cljs.core.Keyword(null,"ai","ai",760454697),false], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zetawar.players","reference-ai","zetawar.players/reference-ai",-515778141),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"description","description",-1428560544),"Reference AI",new cljs.core.Keyword(null,"ai","ai",760454697),true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zetawar.players","custom-ai","zetawar.players/custom-ai",753718703),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"description","description",-1428560544),"Custom AI",new cljs.core.Keyword(null,"ai","ai",760454697),true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zetawar.players","custom-js-ai","zetawar.players/custom-js-ai",1752535884),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"description","description",-1428560544),"Custom JavaScript AI",new cljs.core.Keyword(null,"ai","ai",760454697),true], null)], null)], null);
zetawar.players.player_types_by_id = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,zetawar.players.player_types);

/**
 * @interface
 */
zetawar.players.Player = function(){};

var zetawar$players$Player$start$dyn_35607 = (function (player){
var x__5393__auto__ = (((player == null))?null:player);
var m__5394__auto__ = (zetawar.players.start[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(player) : m__5394__auto__.call(null,player));
} else {
var m__5392__auto__ = (zetawar.players.start["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(player) : m__5392__auto__.call(null,player));
} else {
throw cljs.core.missing_protocol("Player.start",player);
}
}
});
zetawar.players.start = (function zetawar$players$start(player){
if((((!((player == null)))) && ((!((player.zetawar$players$Player$start$arity$1 == null)))))){
return player.zetawar$players$Player$start$arity$1(player);
} else {
return zetawar$players$Player$start$dyn_35607(player);
}
});

var zetawar$players$Player$stop$dyn_35609 = (function (player){
var x__5393__auto__ = (((player == null))?null:player);
var m__5394__auto__ = (zetawar.players.stop[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(player) : m__5394__auto__.call(null,player));
} else {
var m__5392__auto__ = (zetawar.players.stop["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(player) : m__5392__auto__.call(null,player));
} else {
throw cljs.core.missing_protocol("Player.stop",player);
}
}
});
zetawar.players.stop = (function zetawar$players$stop(player){
if((((!((player == null)))) && ((!((player.zetawar$players$Player$stop$arity$1 == null)))))){
return player.zetawar$players$Player$stop$arity$1(player);
} else {
return zetawar$players$Player$stop$dyn_35609(player);
}
});

if((typeof zetawar !== 'undefined') && (typeof zetawar.players !== 'undefined') && (typeof zetawar.players.new_player !== 'undefined')){
} else {
zetawar.players.new_player = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__35604 = cljs.core.get_global_hierarchy;
return (fexpr__35604.cljs$core$IFn$_invoke$arity$0 ? fexpr__35604.cljs$core$IFn$_invoke$arity$0() : fexpr__35604.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("zetawar.players","new-player"),(function (player_ctx,player_type,faction_color){
return player_type;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
zetawar.players.notify = (function zetawar$players$notify(notify_chan,msg){
zetawar.logging.debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Notifying player:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0))], 0));

return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(notify_chan,msg);
});
zetawar.players.load_player_game_state_BANG_ = (function zetawar$players$load_player_game_state_BANG_(conn,game_state){
return zetawar.game.load_game_state_BANG_(conn,zetawar.data.rulesets,zetawar.data.maps,zetawar.data.scenarios,game_state);
});

//# sourceMappingURL=zetawar.players.js.map
