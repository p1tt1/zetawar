goog.provide('zetawar.events.ui');
zetawar.router.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("zetawar.events.ui","alert","zetawar.events.ui/alert",538236743),(function (p__35777,p__35778){
var map__35780 = p__35777;
var map__35780__$1 = cljs.core.__destructure_map(map__35780);
var handler_ctx = map__35780__$1;
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35780__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35781 = p__35778;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35781,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35781,(1),null);
var app = zetawar.app.root(db);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),zetawar.db.e(app),new cljs.core.Keyword("app","alert-type","app/alert-type",405785136),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword("app","alert-message","app/alert-message",-1004431438),message], null)], null)], null);
}));
zetawar.router.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("zetawar.events.ui","hide-alert","zetawar.events.ui/hide-alert",-1054007407),(function (p__35786,p__35787){
var map__35788 = p__35786;
var map__35788__$1 = cljs.core.__destructure_map(map__35788);
var handler_ctx = map__35788__$1;
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35788__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35789 = p__35787;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35789,(0),null);
var app = zetawar.app.root(db);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),zetawar.db.e(app),new cljs.core.Keyword("app","alert-message","app/alert-message",-1004431438),new cljs.core.Keyword("app","alert-message","app/alert-message",-1004431438).cljs$core$IFn$_invoke$arity$1(app)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),zetawar.db.e(app),new cljs.core.Keyword("app","alert-type","app/alert-type",405785136),new cljs.core.Keyword("app","alert-type","app/alert-type",405785136).cljs$core$IFn$_invoke$arity$1(app)], null)], null)], null);
}));
zetawar.router.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("zetawar.events.ui","select-hex","zetawar.events.ui/select-hex",1365544937),(function (p__35795,p__35796){
var map__35797 = p__35795;
var map__35797__$1 = cljs.core.__destructure_map(map__35797);
var handler_ctx = map__35797__$1;
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35797__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35798 = p__35796;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35798,(0),null);
var ev_q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35798,(1),null);
var ev_r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35798,(2),null);
var app = zetawar.app.root(db);
var game = zetawar.app.current_game(db);
var vec__35801 = zetawar.app.selected_hex(db);
var selected_q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35801,(0),null);
var selected_r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35801,(1),null);
var vec__35804 = zetawar.app.targeted_hex(db);
var targeted_q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35804,(0),null);
var targeted_r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35804,(1),null);
var unit = zetawar.game.unit_at(db,game,ev_q,ev_r);
var terrain = zetawar.game.terrain_at(db,game,ev_q,ev_r);
var selected_unit = zetawar.game.unit_at(db,game,selected_q,selected_r);
var selected_terrain = zetawar.game.terrain_at(db,game,selected_q,selected_r);
var targeted_unit = zetawar.game.unit_at(db,game,targeted_q,targeted_r);
var targeted_terrain = zetawar.game.terrain_at(db,game,targeted_q,targeted_r);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tx","tx",466630418),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ev_q,selected_q)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ev_r,selected_r))))?(function (){var G__35810 = cljs.core.PersistentVector.EMPTY;
var G__35810__$1 = (cljs.core.truth_((function (){var and__5043__auto__ = selected_q;
if(cljs.core.truth_(and__5043__auto__)){
return selected_r;
} else {
return and__5043__auto__;
}
})())?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__35810,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),zetawar.db.e(app),new cljs.core.Keyword("app","selected-q","app/selected-q",1651135644),selected_q], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),zetawar.db.e(app),new cljs.core.Keyword("app","selected-r","app/selected-r",-2004026693),selected_r], null)], 0)):G__35810);
if(cljs.core.truth_((function (){var and__5043__auto__ = targeted_q;
if(cljs.core.truth_(and__5043__auto__)){
return targeted_r;
} else {
return and__5043__auto__;
}
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__35810__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),zetawar.db.e(app),new cljs.core.Keyword("app","targeted-q","app/targeted-q",657679208),targeted_q], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),zetawar.db.e(app),new cljs.core.Keyword("app","targeted-r","app/targeted-r",1576976074),targeted_r], null)], 0));
} else {
return G__35810__$1;
}
})():((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ev_q,targeted_q)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ev_r,targeted_r))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),zetawar.db.e(app),new cljs.core.Keyword("app","targeted-q","app/targeted-q",657679208),targeted_q], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),zetawar.db.e(app),new cljs.core.Keyword("app","targeted-r","app/targeted-r",1576976074),targeted_r], null)], null):(cljs.core.truth_((function (){var and__5043__auto__ = unit;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = selected_unit;
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = cljs.core.not(zetawar.game.unit_current_QMARK_(db,game,unit));
if(and__5043__auto____$2){
var and__5043__auto____$3 = zetawar.game.can_attack_QMARK_(db,game,selected_unit);
if(cljs.core.truth_(and__5043__auto____$3)){
return zetawar.game.in_range_QMARK_(db,selected_unit,unit);
} else {
return and__5043__auto____$3;
}
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),zetawar.db.e(app),new cljs.core.Keyword("app","targeted-q","app/targeted-q",657679208),ev_q,new cljs.core.Keyword("app","targeted-r","app/targeted-r",1576976074),ev_r], null)], null):(cljs.core.truth_((function (){var and__5043__auto__ = terrain;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = selected_unit;
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = zetawar.game.can_move_QMARK_(db,game,selected_unit);
if(cljs.core.truth_(and__5043__auto____$2)){
return zetawar.game.valid_destination_QMARK_(db,game,selected_unit,ev_q,ev_r);
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),zetawar.db.e(app),new cljs.core.Keyword("app","targeted-q","app/targeted-q",657679208),ev_q,new cljs.core.Keyword("app","targeted-r","app/targeted-r",1576976074),ev_r], null)], null):(cljs.core.truth_((function (){var and__5043__auto__ = unit;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = (function (){var or__5045__auto__ = selected_unit;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return selected_terrain;
}
})();
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = zetawar.game.can_field_repair_QMARK_(db,game,selected_unit);
if(cljs.core.truth_(and__5043__auto____$2)){
var and__5043__auto____$3 = zetawar.game.repairable_QMARK_(db,game,unit);
if(cljs.core.truth_(and__5043__auto____$3)){
var and__5043__auto____$4 = zetawar.game.in_range_QMARK_(db,selected_unit,unit);
if(cljs.core.truth_(and__5043__auto____$4)){
return zetawar.game.has_repairable_armor_type_QMARK_(db,game,selected_unit,unit);
} else {
return and__5043__auto____$4;
}
} else {
return and__5043__auto____$3;
}
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),zetawar.db.e(app),new cljs.core.Keyword("app","targeted-q","app/targeted-q",657679208),ev_q,new cljs.core.Keyword("app","targeted-r","app/targeted-r",1576976074),ev_r], null)], null):(cljs.core.truth_((function (){var and__5043__auto__ = terrain;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = cljs.core.not(unit);
if(and__5043__auto____$1){
var and__5043__auto____$2 = cljs.core.not(selected_unit);
if(and__5043__auto____$2){
return zetawar.game.current_base_QMARK_(db,game,terrain);
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())?(function (){var G__35824 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),zetawar.db.e(app),new cljs.core.Keyword("app","selected-q","app/selected-q",1651135644),ev_q,new cljs.core.Keyword("app","selected-r","app/selected-r",-2004026693),ev_r], null)], null);
if(cljs.core.truth_((function (){var and__5043__auto__ = targeted_q;
if(cljs.core.truth_(and__5043__auto__)){
return targeted_r;
} else {
return and__5043__auto__;
}
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__35824,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),zetawar.db.e(app),new cljs.core.Keyword("app","targeted-q","app/targeted-q",657679208),targeted_q], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),zetawar.db.e(app),new cljs.core.Keyword("app","targeted-r","app/targeted-r",1576976074),targeted_r], null)], 0));
} else {
return G__35824;
}
})():(cljs.core.truth_((function (){var and__5043__auto__ = unit;
if(cljs.core.truth_(and__5043__auto__)){
var or__5045__auto__ = zetawar.game.can_move_QMARK_(db,game,unit);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = zetawar.game.can_repair_QMARK_(db,game,unit);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = (function (){var and__5043__auto____$1 = zetawar.game.can_attack_QMARK_(db,game,unit);
if(cljs.core.truth_(and__5043__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(zetawar.game.enemies_in_range(db,game,unit)));
} else {
return and__5043__auto____$1;
}
})();
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = (function (){var and__5043__auto____$1 = zetawar.game.can_field_repair_QMARK_(db,game,unit);
if(cljs.core.truth_(and__5043__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(zetawar.game.friends_in_range(db,game,unit)));
} else {
return and__5043__auto____$1;
}
})();
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
return zetawar.game.can_capture_QMARK_(db,game,unit,terrain);
}
}
}
}
} else {
return and__5043__auto__;
}
})())?(function (){var G__35828 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),zetawar.db.e(app),new cljs.core.Keyword("app","selected-q","app/selected-q",1651135644),ev_q,new cljs.core.Keyword("app","selected-r","app/selected-r",-2004026693),ev_r], null)], null);
if(cljs.core.truth_((function (){var and__5043__auto__ = targeted_q;
if(cljs.core.truth_(and__5043__auto__)){
return targeted_r;
} else {
return and__5043__auto__;
}
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__35828,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),zetawar.db.e(app),new cljs.core.Keyword("app","targeted-q","app/targeted-q",657679208),targeted_q], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),zetawar.db.e(app),new cljs.core.Keyword("app","targeted-r","app/targeted-r",1576976074),targeted_r], null)], 0));
} else {
return G__35828;
}
})():null)))))))], null);
}));
zetawar.router.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("zetawar.events.ui","clear-selection","zetawar.events.ui/clear-selection",-835043830),(function (p__35829,_){
var map__35830 = p__35829;
var map__35830__$1 = cljs.core.__destructure_map(map__35830);
var handler_ctx = map__35830__$1;
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35830__$1,new cljs.core.Keyword(null,"db","db",993250759));
var app = zetawar.app.root(db);
var vec__35831 = zetawar.app.selected_hex(db);
var selected_q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35831,(0),null);
var selected_r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35831,(1),null);
var vec__35834 = zetawar.app.targeted_hex(db);
var targeted_q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35834,(0),null);
var targeted_r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35834,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tx","tx",466630418),(function (){var G__35848 = cljs.core.PersistentVector.EMPTY;
var G__35848__$1 = (cljs.core.truth_((function (){var and__5043__auto__ = selected_q;
if(cljs.core.truth_(and__5043__auto__)){
return selected_r;
} else {
return and__5043__auto__;
}
})())?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__35848,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),zetawar.db.e(app),new cljs.core.Keyword("app","selected-q","app/selected-q",1651135644),selected_q], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),zetawar.db.e(app),new cljs.core.Keyword("app","selected-r","app/selected-r",-2004026693),selected_r], null)], 0)):G__35848);
if(cljs.core.truth_((function (){var and__5043__auto__ = targeted_q;
if(cljs.core.truth_(and__5043__auto__)){
return targeted_r;
} else {
return and__5043__auto__;
}
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__35848__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),zetawar.db.e(app),new cljs.core.Keyword("app","targeted-q","app/targeted-q",657679208),targeted_q], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),zetawar.db.e(app),new cljs.core.Keyword("app","targeted-r","app/targeted-r",1576976074),targeted_r], null)], 0));
} else {
return G__35848__$1;
}
})()], null);
}));
zetawar.router.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("zetawar.events.ui","move-selected-unit","zetawar.events.ui/move-selected-unit",1762616731),(function (p__35896,_){
var map__35903 = p__35896;
var map__35903__$1 = cljs.core.__destructure_map(map__35903);
var handler_ctx = map__35903__$1;
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35903__$1,new cljs.core.Keyword(null,"db","db",993250759));
var game = zetawar.app.current_game(db);
var cur_faction_color = zetawar.game.current_faction_color(game);
var vec__35906 = zetawar.app.selected_hex(db);
var from_q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35906,(0),null);
var from_r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35906,(1),null);
var vec__35909 = zetawar.app.targeted_hex(db);
var to_q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35909,(0),null);
var to_r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35909,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zetawar.events.game","execute-action","zetawar.events.game/execute-action",1188354782),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("action","type","action/type",-1188085038),new cljs.core.Keyword("action.type","move-unit","action.type/move-unit",1139424335),new cljs.core.Keyword("action","faction-color","action/faction-color",-1205207995),cur_faction_color,new cljs.core.Keyword("action","from-q","action/from-q",1722081937),from_q,new cljs.core.Keyword("action","from-r","action/from-r",-1985477414),from_r,new cljs.core.Keyword("action","to-q","action/to-q",-1724817580),to_q,new cljs.core.Keyword("action","to-r","action/to-r",1666171807),to_r], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zetawar.events.ui","move-selection","zetawar.events.ui/move-selection",-1465777989),from_q,from_r,to_q,to_r], null)], null)], null);
}));
zetawar.router.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("zetawar.events.ui","move-selection","zetawar.events.ui/move-selection",-1465777989),(function (p__35915,p__35916){
var map__35917 = p__35915;
var map__35917__$1 = cljs.core.__destructure_map(map__35917);
var handler_ctx = map__35917__$1;
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35917__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35918 = p__35916;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35918,(0),null);
var from_q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35918,(1),null);
var from_r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35918,(2),null);
var to_q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35918,(3),null);
var to_r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35918,(4),null);
var app = zetawar.app.root(db);
var game = zetawar.app.current_game(db);
var unit = zetawar.game.unit_at(db,game,to_q,to_r);
var terrain = zetawar.game.base_at(db,game,to_q,to_r);
if(cljs.core.truth_((function (){var or__5045__auto__ = (function (){var and__5043__auto__ = zetawar.game.can_attack_QMARK_(db,game,unit);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not_empty(zetawar.game.enemies_in_range(db,game,unit));
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = (function (){var and__5043__auto__ = zetawar.game.can_field_repair_QMARK_(db,game,unit);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not_empty(zetawar.game.repairable_friends_in_range(db,game,unit));
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return zetawar.game.can_capture_QMARK_(db,game,unit,terrain);
}
}
})())){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),zetawar.db.e(app),new cljs.core.Keyword("app","selected-q","app/selected-q",1651135644),to_q], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),zetawar.db.e(app),new cljs.core.Keyword("app","selected-r","app/selected-r",-2004026693),to_r], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),zetawar.db.e(app),new cljs.core.Keyword("app","targeted-q","app/targeted-q",657679208),to_q], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),zetawar.db.e(app),new cljs.core.Keyword("app","targeted-r","app/targeted-r",1576976074),to_r], null)], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zetawar.events.ui","clear-selection","zetawar.events.ui/clear-selection",-835043830)], null)], null)], null);
}
}));
zetawar.router.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("zetawar.events.ui","attack-targeted","zetawar.events.ui/attack-targeted",315281836),(function (p__35928,_){
var map__35931 = p__35928;
var map__35931__$1 = cljs.core.__destructure_map(map__35931);
var handler_ctx = map__35931__$1;
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35931__$1,new cljs.core.Keyword(null,"db","db",993250759));
var game = zetawar.app.current_game(db);
var cur_faction_color = zetawar.game.current_faction_color(game);
var vec__35933 = zetawar.app.selected_hex(db);
var attacker_q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35933,(0),null);
var attacker_r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35933,(1),null);
var vec__35936 = zetawar.app.targeted_hex(db);
var defender_q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35936,(0),null);
var defender_r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35936,(1),null);
var vec__35940 = zetawar.game.battle_damage.cljs$core$IFn$_invoke$arity$6(db,game,attacker_q,attacker_r,defender_q,defender_r);
var attacker_damage = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35940,(0),null);
var defender_damage = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35940,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zetawar.events.game","execute-action","zetawar.events.game/execute-action",1188354782),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword("action","type","action/type",-1188085038),new cljs.core.Keyword("action.type","attack-unit","action.type/attack-unit",2088859929),new cljs.core.Keyword("action","faction-color","action/faction-color",-1205207995),cur_faction_color,new cljs.core.Keyword("action","attacker-q","action/attacker-q",373958008),attacker_q,new cljs.core.Keyword("action","attacker-r","action/attacker-r",-1956757933),attacker_r,new cljs.core.Keyword("action","defender-q","action/defender-q",-1218654418),defender_q,new cljs.core.Keyword("action","defender-r","action/defender-r",879623179),defender_r,new cljs.core.Keyword("action","attacker-damage","action/attacker-damage",1450940366),attacker_damage,new cljs.core.Keyword("action","defender-damage","action/defender-damage",-1437450943),defender_damage], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zetawar.events.ui","clear-selection","zetawar.events.ui/clear-selection",-835043830)], null)], null)], null);
}));
zetawar.router.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("zetawar.events.ui","repair-selected","zetawar.events.ui/repair-selected",1619572544),(function (p__35944,_){
var map__35945 = p__35944;
var map__35945__$1 = cljs.core.__destructure_map(map__35945);
var handler_ctx = map__35945__$1;
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35945__$1,new cljs.core.Keyword(null,"db","db",993250759));
var game = zetawar.app.current_game(db);
var cur_faction_color = zetawar.game.current_faction_color(game);
var vec__35946 = zetawar.app.selected_hex(db);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35946,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35946,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zetawar.events.game","execute-action","zetawar.events.game/execute-action",1188354782),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("action","type","action/type",-1188085038),new cljs.core.Keyword("action.type","repair-unit","action.type/repair-unit",2009749852),new cljs.core.Keyword("action","faction-color","action/faction-color",-1205207995),cur_faction_color,new cljs.core.Keyword("action","q","action/q",-12201265),q,new cljs.core.Keyword("action","r","action/r",-1749826320),r], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zetawar.events.ui","clear-selection","zetawar.events.ui/clear-selection",-835043830)], null)], null)], null);
}));
zetawar.router.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("zetawar.events.ui","repair-targeted","zetawar.events.ui/repair-targeted",1663905240),(function (p__35950,_){
var map__35951 = p__35950;
var map__35951__$1 = cljs.core.__destructure_map(map__35951);
var handler_ctx = map__35951__$1;
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35951__$1,new cljs.core.Keyword(null,"db","db",993250759));
var game = zetawar.app.current_game(db);
var cur_faction_color = zetawar.game.current_faction_color(game);
var vec__35952 = zetawar.app.selected_hex(db);
var repairer_q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35952,(0),null);
var repairer_r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35952,(1),null);
var vec__35955 = zetawar.app.targeted_hex(db);
var target_q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35955,(0),null);
var target_r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35955,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zetawar.events.game","execute-action","zetawar.events.game/execute-action",1188354782),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("action","type","action/type",-1188085038),new cljs.core.Keyword("action.type","field-repair-unit","action.type/field-repair-unit",162631713),new cljs.core.Keyword("action","faction-color","action/faction-color",-1205207995),cur_faction_color,new cljs.core.Keyword("action","repairer-q","action/repairer-q",1304927516),repairer_q,new cljs.core.Keyword("action","repairer-r","action/repairer-r",1885051077),repairer_r,new cljs.core.Keyword("action","target-q","action/target-q",697046445),target_q,new cljs.core.Keyword("action","target-r","action/target-r",935152355),target_r], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zetawar.events.ui","clear-selection","zetawar.events.ui/clear-selection",-835043830)], null)], null)], null);
}));
zetawar.router.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("zetawar.events.ui","capture-selected","zetawar.events.ui/capture-selected",333310514),(function (p__35958,_){
var map__35959 = p__35958;
var map__35959__$1 = cljs.core.__destructure_map(map__35959);
var handler_ctx = map__35959__$1;
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35959__$1,new cljs.core.Keyword(null,"db","db",993250759));
var game = zetawar.app.current_game(db);
var cur_faction_color = zetawar.game.current_faction_color(game);
var vec__35961 = zetawar.app.selected_hex(db);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35961,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35961,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zetawar.events.game","execute-action","zetawar.events.game/execute-action",1188354782),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("action","type","action/type",-1188085038),new cljs.core.Keyword("action.type","capture-base","action.type/capture-base",1331641506),new cljs.core.Keyword("action","faction-color","action/faction-color",-1205207995),cur_faction_color,new cljs.core.Keyword("action","q","action/q",-12201265),q,new cljs.core.Keyword("action","r","action/r",-1749826320),r], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zetawar.events.ui","clear-selection","zetawar.events.ui/clear-selection",-835043830)], null)], null)], null);
}));
zetawar.router.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("zetawar.events.ui","build-unit","zetawar.events.ui/build-unit",1748886852),(function (p__35965,p__35966){
var map__35967 = p__35965;
var map__35967__$1 = cljs.core.__destructure_map(map__35967);
var handler_ctx = map__35967__$1;
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35967__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35968 = p__35966;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35968,(0),null);
var unit_type_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35968,(1),null);
var game = zetawar.app.current_game(db);
var cur_faction_color = zetawar.game.current_faction_color(game);
var vec__35973 = zetawar.app.selected_hex(db);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35973,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35973,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zetawar.events.game","execute-action","zetawar.events.game/execute-action",1188354782),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("action","type","action/type",-1188085038),new cljs.core.Keyword("action.type","build-unit","action.type/build-unit",317525241),new cljs.core.Keyword("action","faction-color","action/faction-color",-1205207995),cur_faction_color,new cljs.core.Keyword("action","q","action/q",-12201265),q,new cljs.core.Keyword("action","r","action/r",-1749826320),r,new cljs.core.Keyword("action","unit-type-id","action/unit-type-id",651709036),unit_type_id], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zetawar.events.ui","clear-selection","zetawar.events.ui/clear-selection",-835043830)], null)], null)], null);
}));
zetawar.router.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("zetawar.events.ui","end-turn","zetawar.events.ui/end-turn",-1149399050),(function (p__35976,_){
var map__35977 = p__35976;
var map__35977__$1 = cljs.core.__destructure_map(map__35977);
var handler_ctx = map__35977__$1;
var ev_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35977__$1,new cljs.core.Keyword(null,"ev-chan","ev-chan",-1400969365));
var notify_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35977__$1,new cljs.core.Keyword(null,"notify-chan","notify-chan",-789394864));
var conn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35977__$1,new cljs.core.Keyword(null,"conn","conn",278309663));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35977__$1,new cljs.core.Keyword(null,"db","db",993250759));
var game = zetawar.app.current_game(db);
var cur_faction_color = zetawar.game.current_faction_color(game);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zetawar.events.ui","clear-selection","zetawar.events.ui/clear-selection",-835043830)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zetawar.events.game","execute-action","zetawar.events.game/execute-action",1188354782),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("action","type","action/type",-1188085038),new cljs.core.Keyword("action.type","end-turn","action.type/end-turn",1527719931),new cljs.core.Keyword("action","faction-color","action/faction-color",-1205207995),cur_faction_color], null)], null)], null)], null);
}));
zetawar.router.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("zetawar.events.ui","set-url-game-state","zetawar.events.ui/set-url-game-state",-163145787),(function (p__35978,_){
var map__35979 = p__35978;
var map__35979__$1 = cljs.core.__destructure_map(map__35979);
var handler_ctx = map__35979__$1;
var ev_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35979__$1,new cljs.core.Keyword(null,"ev-chan","ev-chan",-1400969365));
var conn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35979__$1,new cljs.core.Keyword(null,"conn","conn",278309663));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35979__$1,new cljs.core.Keyword(null,"db","db",993250759));
return zetawar.serialization.set_url_game_state_BANG_(cljs.core.deref(conn));
}));
zetawar.router.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("zetawar.events.ui","show-copy-link","zetawar.events.ui/show-copy-link",-940246085),(function (p__35981,_){
var map__35982 = p__35981;
var map__35982__$1 = cljs.core.__destructure_map(map__35982);
var handler_ctx = map__35982__$1;
var ev_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35982__$1,new cljs.core.Keyword(null,"ev-chan","ev-chan",-1400969365));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35982__$1,new cljs.core.Keyword(null,"db","db",993250759));
var app = zetawar.app.root(db);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),zetawar.db.e(app),new cljs.core.Keyword("app","show-copy-link","app/show-copy-link",835872193),true], null)], null)], null);
}));
zetawar.router.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("zetawar.events.ui","hide-copy-link","zetawar.events.ui/hide-copy-link",-1328414626),(function (p__35983,_){
var map__35984 = p__35983;
var map__35984__$1 = cljs.core.__destructure_map(map__35984);
var handler_ctx = map__35984__$1;
var ev_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35984__$1,new cljs.core.Keyword(null,"ev-chan","ev-chan",-1400969365));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35984__$1,new cljs.core.Keyword(null,"db","db",993250759));
var app = zetawar.app.root(db);
var map__35985 = app;
var map__35985__$1 = cljs.core.__destructure_map(map__35985);
var show_copy_link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35985__$1,new cljs.core.Keyword("app","show-copy-link","app/show-copy-link",835872193));
if((show_copy_link == null)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),zetawar.db.e(app),new cljs.core.Keyword("app","show-copy-link","app/show-copy-link",835872193),show_copy_link], null)], null)], null);
}
}));
zetawar.router.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("zetawar.events.ui","show-unit-picker","zetawar.events.ui/show-unit-picker",354274627),(function (p__35988,_){
var map__35989 = p__35988;
var map__35989__$1 = cljs.core.__destructure_map(map__35989);
var handler_ctx = map__35989__$1;
var ev_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35989__$1,new cljs.core.Keyword(null,"ev-chan","ev-chan",-1400969365));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35989__$1,new cljs.core.Keyword(null,"db","db",993250759));
var app = zetawar.app.root(db);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),zetawar.db.e(app),new cljs.core.Keyword("app","picking-unit","app/picking-unit",1789755598),true], null)], null)], null);
}));
zetawar.router.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("zetawar.events.ui","hide-unit-picker","zetawar.events.ui/hide-unit-picker",-1843608860),(function (p__35992,_){
var map__35993 = p__35992;
var map__35993__$1 = cljs.core.__destructure_map(map__35993);
var handler_ctx = map__35993__$1;
var ev_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35993__$1,new cljs.core.Keyword(null,"ev-chan","ev-chan",-1400969365));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35993__$1,new cljs.core.Keyword(null,"db","db",993250759));
var app = zetawar.app.root(db);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),zetawar.db.e(app),new cljs.core.Keyword("app","picking-unit","app/picking-unit",1789755598),false], null)], null)], null);
}));
zetawar.router.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("zetawar.events.ui","hide-win-message","zetawar.events.ui/hide-win-message",-166765034),(function (p__35995,_){
var map__35996 = p__35995;
var map__35996__$1 = cljs.core.__destructure_map(map__35996);
var handler_ctx = map__35996__$1;
var ev_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35996__$1,new cljs.core.Keyword(null,"ev-chan","ev-chan",-1400969365));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35996__$1,new cljs.core.Keyword(null,"db","db",993250759));
var app = zetawar.app.root(db);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),zetawar.db.e(app),new cljs.core.Keyword("app","hide-win-message","app/hide-win-message",-1410597856),true], null)], null)], null);
}));
zetawar.router.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("zetawar.events.ui","configure-faction","zetawar.events.ui/configure-faction",-1347831745),(function (p__35997,p__35998){
var map__35999 = p__35997;
var map__35999__$1 = cljs.core.__destructure_map(map__35999);
var handler_ctx = map__35999__$1;
var ev_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35999__$1,new cljs.core.Keyword(null,"ev-chan","ev-chan",-1400969365));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35999__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__36000 = p__35998;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36000,(0),null);
var faction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36000,(1),null);
var app = zetawar.app.root(db);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),zetawar.db.e(app),new cljs.core.Keyword("app","configuring-faction","app/configuring-faction",322928126),zetawar.db.e(faction)], null)], null)], null);
}));
zetawar.router.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("zetawar.events.ui","hide-faction-settings","zetawar.events.ui/hide-faction-settings",1636757853),(function (p__36004,_){
var map__36005 = p__36004;
var map__36005__$1 = cljs.core.__destructure_map(map__36005);
var handler_ctx = map__36005__$1;
var ev_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36005__$1,new cljs.core.Keyword(null,"ev-chan","ev-chan",-1400969365));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36005__$1,new cljs.core.Keyword(null,"db","db",993250759));
var app = zetawar.app.root(db);
var configuring_faction = new cljs.core.Keyword("app","configuring-faction","app/configuring-faction",322928126).cljs$core$IFn$_invoke$arity$1(app);
if(cljs.core.truth_(configuring_faction)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),zetawar.db.e(app),new cljs.core.Keyword("app","configuring-faction","app/configuring-faction",322928126),zetawar.db.e(configuring_faction)], null)], null)], null);
} else {
return null;
}
}));
zetawar.router.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("zetawar.events.ui","set-faction-player-type","zetawar.events.ui/set-faction-player-type",854396964),(function (p__36009,p__36010){
var map__36011 = p__36009;
var map__36011__$1 = cljs.core.__destructure_map(map__36011);
var handler_ctx = map__36011__$1;
var ev_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36011__$1,new cljs.core.Keyword(null,"ev-chan","ev-chan",-1400969365));
var conn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36011__$1,new cljs.core.Keyword(null,"conn","conn",278309663));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36011__$1,new cljs.core.Keyword(null,"db","db",993250759));
var players = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36011__$1,new cljs.core.Keyword(null,"players","players",-1361554569));
var vec__36012 = p__36010;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36012,(0),null);
var faction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36012,(1),null);
var player_type_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36012,(2),null);
var map__36017 = zetawar.app.root(db);
var map__36017__$1 = cljs.core.__destructure_map(map__36017);
var app = map__36017__$1;
var ai_turn_stepping = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36017__$1,new cljs.core.Keyword(null,"ai-turn-stepping","ai-turn-stepping",-435497829));
var map__36018 = zetawar.app.current_game(db);
var map__36018__$1 = cljs.core.__destructure_map(map__36018);
var factions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36018__$1,new cljs.core.Keyword("game","factions","game/factions",148269805));
var current_faction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36018__$1,new cljs.core.Keyword("game","current-faction","game/current-faction",-1129931374));
var faction__$1 = (((((faction == null)) || (cljs.core.not((function (){var or__5045__auto____$1 = typeof faction === 'number';
if(or__5045__auto____$1){
return or__5045__auto____$1;
} else {
var and__5043__auto__ = cljs.core.map_QMARK_(faction);
if(and__5043__auto__){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(faction);
} else {
return and__5043__auto__;
}
}
})()))))?new cljs.core.Keyword("app","configuring-faction","app/configuring-faction",322928126).cljs$core$IFn$_invoke$arity$1(app):faction
);
if(cljs.core.truth_(faction__$1)){
var map__36019 = faction__$1;
var map__36019__$1 = cljs.core.__destructure_map(map__36019);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36019__$1,new cljs.core.Keyword("faction","color","faction/color",2104478137));
var other_factions = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__36006_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(zetawar.db.e(faction__$1),zetawar.db.e(p1__36006_SHARP_));
}),factions);
var map__36020 = (zetawar.players.player_types_by_id.cljs$core$IFn$_invoke$arity$1 ? zetawar.players.player_types_by_id.cljs$core$IFn$_invoke$arity$1(player_type_id) : zetawar.players.player_types_by_id.call(null,player_type_id));
var map__36020__$1 = cljs.core.__destructure_map(map__36020);
var ai = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36020__$1,new cljs.core.Keyword(null,"ai","ai",760454697));
var tx = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),zetawar.db.e(faction__$1),new cljs.core.Keyword("faction","ai","faction/ai",1819183109),ai,new cljs.core.Keyword("faction","player-type","faction/player-type",1769856328),player_type_id], null)], null);
var cur_player = (function (){var G__36022 = cljs.core.deref(players);
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__36022) : color.call(null,G__36022));
})();
var new_player = zetawar.players.new_player.cljs$core$IFn$_invoke$arity$3(handler_ctx,player_type_id,color);
var notify = (cljs.core.truth_((function (){var and__5043__auto__ = ai;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(zetawar.db.e(faction__$1),zetawar.db.e(current_faction));
} else {
return and__5043__auto__;
}
})())?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zetawar.players","start-turn","zetawar.players/start-turn",-284680235),color], null)], null):null);
zetawar.players.stop(cur_player);

zetawar.players.start(new_player);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(players,cljs.core.assoc,color,new_player);

if(cljs.core.truth_((function (){var and__5043__auto__ = ai;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(other_factions),cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("faction","ai","faction/ai",1819183109),other_factions)));
} else {
return and__5043__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx","tx",466630418),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tx,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),zetawar.db.e(app),new cljs.core.Keyword("app","ai-turn-stepping","app/ai-turn-stepping",-437954950),cljs.core.not(ai_turn_stepping)], null)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zetawar.events.ui","alert","zetawar.events.ui/alert",538236743),"AI enabled for all factions. Enabling turn stepping."], null)], null),new cljs.core.Keyword(null,"notify","notify",-1256867814),notify], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tx","tx",466630418),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tx,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),zetawar.db.e(app),new cljs.core.Keyword("app","ai-turn-stepping","app/ai-turn-stepping",-437954950),false], null)),new cljs.core.Keyword(null,"notify","notify",-1256867814),notify], null);
}
} else {
return null;
}
}));
zetawar.router.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("zetawar.events.ui","show-new-game-settings","zetawar.events.ui/show-new-game-settings",-1754236332),(function (p__36023,_){
var map__36024 = p__36023;
var map__36024__$1 = cljs.core.__destructure_map(map__36024);
var handler_ctx = map__36024__$1;
var ev_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36024__$1,new cljs.core.Keyword(null,"ev-chan","ev-chan",-1400969365));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36024__$1,new cljs.core.Keyword(null,"db","db",993250759));
var app = zetawar.app.root(db);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),zetawar.db.e(app),new cljs.core.Keyword("app","configuring-new-game","app/configuring-new-game",-1151171747),true], null)], null)], null);
}));
zetawar.router.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("zetawar.events.ui","hide-new-game-settings","zetawar.events.ui/hide-new-game-settings",-1226415710),(function (p__36026,_){
var map__36027 = p__36026;
var map__36027__$1 = cljs.core.__destructure_map(map__36027);
var handler_ctx = map__36027__$1;
var ev_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36027__$1,new cljs.core.Keyword(null,"ev-chan","ev-chan",-1400969365));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36027__$1,new cljs.core.Keyword(null,"db","db",993250759));
var app = zetawar.app.root(db);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),zetawar.db.e(app),new cljs.core.Keyword("app","configuring-new-game","app/configuring-new-game",-1151171747),false], null)], null)], null);
}));
zetawar.router.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("zetawar.events.ui","start-new-game","zetawar.events.ui/start-new-game",1269968919),(function (p__36028,p__36029){
var map__36030 = p__36028;
var map__36030__$1 = cljs.core.__destructure_map(map__36030);
var handler_ctx = map__36030__$1;
var ev_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36030__$1,new cljs.core.Keyword(null,"ev-chan","ev-chan",-1400969365));
var conn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36030__$1,new cljs.core.Keyword(null,"conn","conn",278309663));
var vec__36031 = p__36029;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36031,(0),null);
var scenario_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36031,(1),null);
return zetawar.app.start_new_game_BANG_.cljs$core$IFn$_invoke$arity$2(handler_ctx,scenario_id);
}));
zetawar.router.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("zetawar.events.ui","hover-hex-enter","zetawar.events.ui/hover-hex-enter",-1240946298),(function (p__36035,p__36036){
var map__36037 = p__36035;
var map__36037__$1 = cljs.core.__destructure_map(map__36037);
var handler_ctx = map__36037__$1;
var ev_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36037__$1,new cljs.core.Keyword(null,"ev-chan","ev-chan",-1400969365));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36037__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__36038 = p__36036;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36038,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36038,(1),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36038,(2),null);
var app = zetawar.app.root(db);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),zetawar.db.e(app),new cljs.core.Keyword("app","hover-q","app/hover-q",-672870885),q], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),zetawar.db.e(app),new cljs.core.Keyword("app","hover-r","app/hover-r",-541396832),r], null)], null)], null);
}));
zetawar.router.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("zetawar.events.ui","hover-hex-leave","zetawar.events.ui/hover-hex-leave",462157149),(function (p__36041,p__36042){
var map__36043 = p__36041;
var map__36043__$1 = cljs.core.__destructure_map(map__36043);
var handler_ctx = map__36043__$1;
var ev_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36043__$1,new cljs.core.Keyword(null,"ev-chan","ev-chan",-1400969365));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36043__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__36044 = p__36042;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36044,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36044,(1),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36044,(2),null);
var app = zetawar.app.root(db);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),zetawar.db.e(app),new cljs.core.Keyword("app","hover-q","app/hover-q",-672870885),q], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),zetawar.db.e(app),new cljs.core.Keyword("app","hover-r","app/hover-r",-541396832),r], null)], null)], null);
}));
zetawar.router.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("zetawar.events.ui","show-end-turn-alert","zetawar.events.ui/show-end-turn-alert",1406394794),(function (p__36047,_){
var map__36048 = p__36047;
var map__36048__$1 = cljs.core.__destructure_map(map__36048);
var handler_ctx = map__36048__$1;
var ev_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36048__$1,new cljs.core.Keyword(null,"ev-chan","ev-chan",-1400969365));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36048__$1,new cljs.core.Keyword(null,"db","db",993250759));
var app = zetawar.app.root(db);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),zetawar.db.e(app),new cljs.core.Keyword("app","end-turn-alert","app/end-turn-alert",1898394922),true], null)], null)], null);
}));
zetawar.router.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("zetawar.events.ui","hide-end-turn-alert","zetawar.events.ui/hide-end-turn-alert",1728478602),(function (p__36050,_){
var map__36051 = p__36050;
var map__36051__$1 = cljs.core.__destructure_map(map__36051);
var handler_ctx = map__36051__$1;
var ev_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36051__$1,new cljs.core.Keyword(null,"ev-chan","ev-chan",-1400969365));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36051__$1,new cljs.core.Keyword(null,"db","db",993250759));
var app = zetawar.app.root(db);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),zetawar.db.e(app),new cljs.core.Keyword("app","end-turn-alert","app/end-turn-alert",1898394922),false], null)], null)], null);
}));

//# sourceMappingURL=zetawar.events.ui.js.map
