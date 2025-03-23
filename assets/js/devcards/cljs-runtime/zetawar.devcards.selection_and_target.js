goog.provide('zetawar.devcards.selection_and_target');

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
zetawar.devcards.selection_and_target.t_zetawar$devcards$selection_and_target36664 = (function (meta36665){
this.meta36665 = meta36665;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(zetawar.devcards.selection_and_target.t_zetawar$devcards$selection_and_target36664.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36666,meta36665__$1){
var self__ = this;
var _36666__$1 = this;
return (new zetawar.devcards.selection_and_target.t_zetawar$devcards$selection_and_target36664(meta36665__$1));
}));

(zetawar.devcards.selection_and_target.t_zetawar$devcards$selection_and_target36664.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36666){
var self__ = this;
var _36666__$1 = this;
return self__.meta36665;
}));

(zetawar.devcards.selection_and_target.t_zetawar$devcards$selection_and_target36664.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(zetawar.devcards.selection_and_target.t_zetawar$devcards$selection_and_target36664.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__30710__auto__,devcard_opts__30711__auto__){
var self__ = this;
var this__30710__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__30711__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__30729__auto__ = (function (){var system = integrant.core.init.cljs$core$IFn$_invoke$arity$1(zetawar.system.game_config);
var game_cfg = new cljs.core.Keyword("zetawar.system","game","zetawar.system/game",-196614196).cljs$core$IFn$_invoke$arity$1(system);
var views_cfg = new cljs.core.Keyword("zetawar.system","game-views","zetawar.system/game-views",439449159).cljs$core$IFn$_invoke$arity$1(system);
var conn = new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(views_cfg);
zetawar.app.start_new_game_BANG_.cljs$core$IFn$_invoke$arity$2(game_cfg,new cljs.core.Keyword(null,"sterlings-aruba-multiplayer","sterlings-aruba-multiplayer",-1973857203));

datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),zetawar.db.e(zetawar.app.root(cljs.core.deref(conn))),new cljs.core.Keyword("app","selected-q","app/selected-q",1651135644),(2),new cljs.core.Keyword("app","selected-r","app/selected-r",-2004026693),(2)], null)], null));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zetawar.views.game_interface,views_cfg], null);
})();
if(cljs.core.fn_QMARK_(v__30729__auto__)){
return (function (data_atom__30730__auto__,owner__30731__auto__){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__30729__auto__,data_atom__30730__auto__,owner__30731__auto__], null));
});
} else {
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(v__30729__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__30711__auto__))], 0))], 0));
}));

(zetawar.devcards.selection_and_target.t_zetawar$devcards$selection_and_target36664.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta36665","meta36665",1218937506,null)], null);
}));

(zetawar.devcards.selection_and_target.t_zetawar$devcards$selection_and_target36664.cljs$lang$type = true);

(zetawar.devcards.selection_and_target.t_zetawar$devcards$selection_and_target36664.cljs$lang$ctorStr = "zetawar.devcards.selection-and-target/t_zetawar$devcards$selection_and_target36664");

(zetawar.devcards.selection_and_target.t_zetawar$devcards$selection_and_target36664.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"zetawar.devcards.selection-and-target/t_zetawar$devcards$selection_and_target36664");
}));

/**
 * Positional factory function for zetawar.devcards.selection-and-target/t_zetawar$devcards$selection_and_target36664.
 */
zetawar.devcards.selection_and_target.__GT_t_zetawar$devcards$selection_and_target36664 = (function zetawar$devcards$selection_and_target$__GT_t_zetawar$devcards$selection_and_target36664(meta36665){
return (new zetawar.devcards.selection_and_target.t_zetawar$devcards$selection_and_target36664(meta36665));
});


devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"zetawar.devcards.selection_and_target","zetawar.devcards.selection_and_target",-1601554849),new cljs.core.Keyword(null,"unit-selected","unit-selected",1450762630)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"unit-selected",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(new zetawar.devcards.selection_and_target.t_zetawar$devcards$selection_and_target36664(null)),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
zetawar.devcards.selection_and_target.t_zetawar$devcards$selection_and_target36667 = (function (meta36668){
this.meta36668 = meta36668;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(zetawar.devcards.selection_and_target.t_zetawar$devcards$selection_and_target36667.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36669,meta36668__$1){
var self__ = this;
var _36669__$1 = this;
return (new zetawar.devcards.selection_and_target.t_zetawar$devcards$selection_and_target36667(meta36668__$1));
}));

(zetawar.devcards.selection_and_target.t_zetawar$devcards$selection_and_target36667.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36669){
var self__ = this;
var _36669__$1 = this;
return self__.meta36668;
}));

(zetawar.devcards.selection_and_target.t_zetawar$devcards$selection_and_target36667.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(zetawar.devcards.selection_and_target.t_zetawar$devcards$selection_and_target36667.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__30710__auto__,devcard_opts__30711__auto__){
var self__ = this;
var this__30710__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__30711__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__30729__auto__ = (function (){var system = integrant.core.init.cljs$core$IFn$_invoke$arity$1(zetawar.system.game_config);
var game_cfg = new cljs.core.Keyword("zetawar.system","game","zetawar.system/game",-196614196).cljs$core$IFn$_invoke$arity$1(system);
var views_cfg = new cljs.core.Keyword("zetawar.system","game-views","zetawar.system/game-views",439449159).cljs$core$IFn$_invoke$arity$1(system);
var conn = new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(views_cfg);
zetawar.app.start_new_game_BANG_.cljs$core$IFn$_invoke$arity$2(game_cfg,new cljs.core.Keyword(null,"sterlings-aruba-multiplayer","sterlings-aruba-multiplayer",-1973857203));

var db_36679 = cljs.core.deref(conn);
var game_36680 = zetawar.app.current_game(db_36679);
var unit_36681 = zetawar.game.unit_at(db_36679,game_36680,(2),(2));
var done_state_36682 = zetawar.game.unit_state_by_id(db_36679,game_36680,new cljs.core.Keyword("unit-state.id","move-attack_moved","unit-state.id/move-attack_moved",-1651169811));
datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),zetawar.db.e(zetawar.app.root(db_36679)),new cljs.core.Keyword("app","selected-q","app/selected-q",1651135644),(2),new cljs.core.Keyword("app","selected-r","app/selected-r",-2004026693),(2)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),zetawar.db.e(unit_36681),new cljs.core.Keyword("unit","move-count","unit/move-count",1192826036),(1),new cljs.core.Keyword("unit","state","unit/state",-1991906543),zetawar.db.e(done_state_36682)], null)], null));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zetawar.views.game_interface,views_cfg], null);
})();
if(cljs.core.fn_QMARK_(v__30729__auto__)){
return (function (data_atom__30730__auto__,owner__30731__auto__){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__30729__auto__,data_atom__30730__auto__,owner__30731__auto__], null));
});
} else {
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(v__30729__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__30711__auto__))], 0))], 0));
}));

(zetawar.devcards.selection_and_target.t_zetawar$devcards$selection_and_target36667.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta36668","meta36668",1558692962,null)], null);
}));

(zetawar.devcards.selection_and_target.t_zetawar$devcards$selection_and_target36667.cljs$lang$type = true);

(zetawar.devcards.selection_and_target.t_zetawar$devcards$selection_and_target36667.cljs$lang$ctorStr = "zetawar.devcards.selection-and-target/t_zetawar$devcards$selection_and_target36667");

(zetawar.devcards.selection_and_target.t_zetawar$devcards$selection_and_target36667.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"zetawar.devcards.selection-and-target/t_zetawar$devcards$selection_and_target36667");
}));

/**
 * Positional factory function for zetawar.devcards.selection-and-target/t_zetawar$devcards$selection_and_target36667.
 */
zetawar.devcards.selection_and_target.__GT_t_zetawar$devcards$selection_and_target36667 = (function zetawar$devcards$selection_and_target$__GT_t_zetawar$devcards$selection_and_target36667(meta36668){
return (new zetawar.devcards.selection_and_target.t_zetawar$devcards$selection_and_target36667(meta36668));
});


devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"zetawar.devcards.selection_and_target","zetawar.devcards.selection_and_target",-1601554849),new cljs.core.Keyword(null,"moved-unit-selected","moved-unit-selected",2039398212)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"moved-unit-selected",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(new zetawar.devcards.selection_and_target.t_zetawar$devcards$selection_and_target36667(null)),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
zetawar.devcards.selection_and_target.t_zetawar$devcards$selection_and_target36670 = (function (meta36671){
this.meta36671 = meta36671;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(zetawar.devcards.selection_and_target.t_zetawar$devcards$selection_and_target36670.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36672,meta36671__$1){
var self__ = this;
var _36672__$1 = this;
return (new zetawar.devcards.selection_and_target.t_zetawar$devcards$selection_and_target36670(meta36671__$1));
}));

(zetawar.devcards.selection_and_target.t_zetawar$devcards$selection_and_target36670.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36672){
var self__ = this;
var _36672__$1 = this;
return self__.meta36671;
}));

(zetawar.devcards.selection_and_target.t_zetawar$devcards$selection_and_target36670.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(zetawar.devcards.selection_and_target.t_zetawar$devcards$selection_and_target36670.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__30710__auto__,devcard_opts__30711__auto__){
var self__ = this;
var this__30710__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__30711__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__30729__auto__ = (function (){var system = integrant.core.init.cljs$core$IFn$_invoke$arity$1(zetawar.system.game_config);
var game_cfg = new cljs.core.Keyword("zetawar.system","game","zetawar.system/game",-196614196).cljs$core$IFn$_invoke$arity$1(system);
var views_cfg = new cljs.core.Keyword("zetawar.system","game-views","zetawar.system/game-views",439449159).cljs$core$IFn$_invoke$arity$1(system);
var conn = new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(views_cfg);
zetawar.app.start_new_game_BANG_.cljs$core$IFn$_invoke$arity$2(game_cfg,new cljs.core.Keyword(null,"sterlings-aruba-multiplayer","sterlings-aruba-multiplayer",-1973857203));

var db_36683 = cljs.core.deref(conn);
var game_36684 = zetawar.app.current_game(db_36683);
var unit_36685 = zetawar.game.unit_at(db_36683,game_36684,(2),(2));
var done_state_36686 = zetawar.game.unit_state_by_id(db_36683,game_36684,new cljs.core.Keyword("unit-state.id","move-attack_moved","unit-state.id/move-attack_moved",-1651169811));
datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,cljs.core.into.cljs$core$IFn$_invoke$arity$2(zetawar.game.teleport_tx(db_36683,game_36684,(2),(2),(6),(8)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),zetawar.db.e(zetawar.app.root(db_36683)),new cljs.core.Keyword("app","selected-q","app/selected-q",1651135644),(6),new cljs.core.Keyword("app","selected-r","app/selected-r",-2004026693),(8)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),zetawar.db.e(unit_36685),new cljs.core.Keyword("unit","move-count","unit/move-count",1192826036),(1),new cljs.core.Keyword("unit","state","unit/state",-1991906543),zetawar.db.e(done_state_36686)], null)], null)));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zetawar.views.game_interface,views_cfg], null);
})();
if(cljs.core.fn_QMARK_(v__30729__auto__)){
return (function (data_atom__30730__auto__,owner__30731__auto__){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__30729__auto__,data_atom__30730__auto__,owner__30731__auto__], null));
});
} else {
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(v__30729__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__30711__auto__))], 0))], 0));
}));

(zetawar.devcards.selection_and_target.t_zetawar$devcards$selection_and_target36670.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta36671","meta36671",-1309035657,null)], null);
}));

(zetawar.devcards.selection_and_target.t_zetawar$devcards$selection_and_target36670.cljs$lang$type = true);

(zetawar.devcards.selection_and_target.t_zetawar$devcards$selection_and_target36670.cljs$lang$ctorStr = "zetawar.devcards.selection-and-target/t_zetawar$devcards$selection_and_target36670");

(zetawar.devcards.selection_and_target.t_zetawar$devcards$selection_and_target36670.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"zetawar.devcards.selection-and-target/t_zetawar$devcards$selection_and_target36670");
}));

/**
 * Positional factory function for zetawar.devcards.selection-and-target/t_zetawar$devcards$selection_and_target36670.
 */
zetawar.devcards.selection_and_target.__GT_t_zetawar$devcards$selection_and_target36670 = (function zetawar$devcards$selection_and_target$__GT_t_zetawar$devcards$selection_and_target36670(meta36671){
return (new zetawar.devcards.selection_and_target.t_zetawar$devcards$selection_and_target36670(meta36671));
});


devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"zetawar.devcards.selection_and_target","zetawar.devcards.selection_and_target",-1601554849),new cljs.core.Keyword(null,"moved-unit-with-attacks","moved-unit-with-attacks",-932100213)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"moved-unit-with-attacks",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(new zetawar.devcards.selection_and_target.t_zetawar$devcards$selection_and_target36670(null)),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
zetawar.devcards.selection_and_target.t_zetawar$devcards$selection_and_target36673 = (function (meta36674){
this.meta36674 = meta36674;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(zetawar.devcards.selection_and_target.t_zetawar$devcards$selection_and_target36673.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36675,meta36674__$1){
var self__ = this;
var _36675__$1 = this;
return (new zetawar.devcards.selection_and_target.t_zetawar$devcards$selection_and_target36673(meta36674__$1));
}));

(zetawar.devcards.selection_and_target.t_zetawar$devcards$selection_and_target36673.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36675){
var self__ = this;
var _36675__$1 = this;
return self__.meta36674;
}));

(zetawar.devcards.selection_and_target.t_zetawar$devcards$selection_and_target36673.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(zetawar.devcards.selection_and_target.t_zetawar$devcards$selection_and_target36673.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__30710__auto__,devcard_opts__30711__auto__){
var self__ = this;
var this__30710__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__30711__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__30729__auto__ = (function (){var system = integrant.core.init.cljs$core$IFn$_invoke$arity$1(zetawar.system.game_config);
var game_cfg = new cljs.core.Keyword("zetawar.system","game","zetawar.system/game",-196614196).cljs$core$IFn$_invoke$arity$1(system);
var views_cfg = new cljs.core.Keyword("zetawar.system","game-views","zetawar.system/game-views",439449159).cljs$core$IFn$_invoke$arity$1(system);
var conn = new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(views_cfg);
zetawar.app.start_new_game_BANG_.cljs$core$IFn$_invoke$arity$2(game_cfg,new cljs.core.Keyword(null,"sterlings-aruba-multiplayer","sterlings-aruba-multiplayer",-1973857203));

var game_36687 = zetawar.app.current_game(cljs.core.deref(conn));
var unit_36688 = zetawar.game.unit_at(cljs.core.deref(conn),game_36687,(2),(2));
datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,cljs.core.into.cljs$core$IFn$_invoke$arity$2(zetawar.game.teleport_tx(cljs.core.deref(conn),game_36687,(2),(2),(6),(8)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",-1388397098),zetawar.db.e(zetawar.app.root(cljs.core.deref(conn))),new cljs.core.Keyword("app","selected-q","app/selected-q",1651135644),(6),new cljs.core.Keyword("app","selected-r","app/selected-r",-2004026693),(8),new cljs.core.Keyword("app","targeted-q","app/targeted-q",657679208),(7),new cljs.core.Keyword("app","targeted-r","app/targeted-r",1576976074),(8)], null)], null)));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zetawar.views.game_interface,views_cfg], null);
})();
if(cljs.core.fn_QMARK_(v__30729__auto__)){
return (function (data_atom__30730__auto__,owner__30731__auto__){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__30729__auto__,data_atom__30730__auto__,owner__30731__auto__], null));
});
} else {
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(v__30729__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__30711__auto__))], 0))], 0));
}));

(zetawar.devcards.selection_and_target.t_zetawar$devcards$selection_and_target36673.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta36674","meta36674",-920994689,null)], null);
}));

(zetawar.devcards.selection_and_target.t_zetawar$devcards$selection_and_target36673.cljs$lang$type = true);

(zetawar.devcards.selection_and_target.t_zetawar$devcards$selection_and_target36673.cljs$lang$ctorStr = "zetawar.devcards.selection-and-target/t_zetawar$devcards$selection_and_target36673");

(zetawar.devcards.selection_and_target.t_zetawar$devcards$selection_and_target36673.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"zetawar.devcards.selection-and-target/t_zetawar$devcards$selection_and_target36673");
}));

/**
 * Positional factory function for zetawar.devcards.selection-and-target/t_zetawar$devcards$selection_and_target36673.
 */
zetawar.devcards.selection_and_target.__GT_t_zetawar$devcards$selection_and_target36673 = (function zetawar$devcards$selection_and_target$__GT_t_zetawar$devcards$selection_and_target36673(meta36674){
return (new zetawar.devcards.selection_and_target.t_zetawar$devcards$selection_and_target36673(meta36674));
});


devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"zetawar.devcards.selection_and_target","zetawar.devcards.selection_and_target",-1601554849),new cljs.core.Keyword(null,"targeted-enemy","targeted-enemy",1046898922)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"targeted-enemy",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(new zetawar.devcards.selection_and_target.t_zetawar$devcards$selection_and_target36673(null)),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
zetawar.devcards.selection_and_target.t_zetawar$devcards$selection_and_target36676 = (function (meta36677){
this.meta36677 = meta36677;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(zetawar.devcards.selection_and_target.t_zetawar$devcards$selection_and_target36676.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36678,meta36677__$1){
var self__ = this;
var _36678__$1 = this;
return (new zetawar.devcards.selection_and_target.t_zetawar$devcards$selection_and_target36676(meta36677__$1));
}));

(zetawar.devcards.selection_and_target.t_zetawar$devcards$selection_and_target36676.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36678){
var self__ = this;
var _36678__$1 = this;
return self__.meta36677;
}));

(zetawar.devcards.selection_and_target.t_zetawar$devcards$selection_and_target36676.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(zetawar.devcards.selection_and_target.t_zetawar$devcards$selection_and_target36676.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__30710__auto__,devcard_opts__30711__auto__){
var self__ = this;
var this__30710__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__30711__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__30729__auto__ = (function (){var system = integrant.core.init.cljs$core$IFn$_invoke$arity$1(zetawar.system.game_config);
var game_cfg = new cljs.core.Keyword("zetawar.system","game","zetawar.system/game",-196614196).cljs$core$IFn$_invoke$arity$1(system);
var views_cfg = new cljs.core.Keyword("zetawar.system","game-views","zetawar.system/game-views",439449159).cljs$core$IFn$_invoke$arity$1(system);
var conn = new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(views_cfg);
zetawar.app.start_new_game_BANG_.cljs$core$IFn$_invoke$arity$2(game_cfg,new cljs.core.Keyword(null,"sterlings-aruba-multiplayer","sterlings-aruba-multiplayer",-1973857203));

datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),zetawar.db.e(zetawar.app.root(cljs.core.deref(conn))),new cljs.core.Keyword("app","selected-q","app/selected-q",1651135644),(1),new cljs.core.Keyword("app","selected-r","app/selected-r",-2004026693),(2)], null)], null));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zetawar.views.game_interface,views_cfg], null);
})();
if(cljs.core.fn_QMARK_(v__30729__auto__)){
return (function (data_atom__30730__auto__,owner__30731__auto__){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__30729__auto__,data_atom__30730__auto__,owner__30731__auto__], null));
});
} else {
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(v__30729__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__30711__auto__))], 0))], 0));
}));

(zetawar.devcards.selection_and_target.t_zetawar$devcards$selection_and_target36676.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta36677","meta36677",455417745,null)], null);
}));

(zetawar.devcards.selection_and_target.t_zetawar$devcards$selection_and_target36676.cljs$lang$type = true);

(zetawar.devcards.selection_and_target.t_zetawar$devcards$selection_and_target36676.cljs$lang$ctorStr = "zetawar.devcards.selection-and-target/t_zetawar$devcards$selection_and_target36676");

(zetawar.devcards.selection_and_target.t_zetawar$devcards$selection_and_target36676.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"zetawar.devcards.selection-and-target/t_zetawar$devcards$selection_and_target36676");
}));

/**
 * Positional factory function for zetawar.devcards.selection-and-target/t_zetawar$devcards$selection_and_target36676.
 */
zetawar.devcards.selection_and_target.__GT_t_zetawar$devcards$selection_and_target36676 = (function zetawar$devcards$selection_and_target$__GT_t_zetawar$devcards$selection_and_target36676(meta36677){
return (new zetawar.devcards.selection_and_target.t_zetawar$devcards$selection_and_target36676(meta36677));
});


devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"zetawar.devcards.selection_and_target","zetawar.devcards.selection_and_target",-1601554849),new cljs.core.Keyword(null,"base-selected","base-selected",-1061201783)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"base-selected",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(new zetawar.devcards.selection_and_target.t_zetawar$devcards$selection_and_target36676(null)),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=zetawar.devcards.selection_and_target.js.map
