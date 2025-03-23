goog.provide('zetawar.devcards.maps_and_scenarios');
zetawar.devcards.maps_and_scenarios.init_scenario = (function zetawar$devcards$maps_and_scenarios$init_scenario(scenario_id){
var system = integrant.core.init.cljs$core$IFn$_invoke$arity$1(zetawar.system.game_config);
var game_cfg = new cljs.core.Keyword("zetawar.system","game","zetawar.system/game",-196614196).cljs$core$IFn$_invoke$arity$1(system);
zetawar.app.start_new_game_BANG_.cljs$core$IFn$_invoke$arity$2(game_cfg,scenario_id);

return system;
});

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
zetawar.devcards.maps_and_scenarios.t_zetawar$devcards$maps_and_scenarios36558 = (function (meta36559){
this.meta36559 = meta36559;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(zetawar.devcards.maps_and_scenarios.t_zetawar$devcards$maps_and_scenarios36558.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36560,meta36559__$1){
var self__ = this;
var _36560__$1 = this;
return (new zetawar.devcards.maps_and_scenarios.t_zetawar$devcards$maps_and_scenarios36558(meta36559__$1));
}));

(zetawar.devcards.maps_and_scenarios.t_zetawar$devcards$maps_and_scenarios36558.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36560){
var self__ = this;
var _36560__$1 = this;
return self__.meta36559;
}));

(zetawar.devcards.maps_and_scenarios.t_zetawar$devcards$maps_and_scenarios36558.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(zetawar.devcards.maps_and_scenarios.t_zetawar$devcards$maps_and_scenarios36558.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__30710__auto__,devcard_opts__30711__auto__){
var self__ = this;
var this__30710__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__30711__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__30729__auto__ = (function (){var views_cfg = new cljs.core.Keyword("zetawar.system","game-views","zetawar.system/game-views",439449159).cljs$core$IFn$_invoke$arity$1(zetawar.devcards.maps_and_scenarios.init_scenario(new cljs.core.Keyword(null,"sterlings-aruba-multiplayer","sterlings-aruba-multiplayer",-1973857203)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zetawar.views.board,views_cfg], null);
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

(zetawar.devcards.maps_and_scenarios.t_zetawar$devcards$maps_and_scenarios36558.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta36559","meta36559",-661749262,null)], null);
}));

(zetawar.devcards.maps_and_scenarios.t_zetawar$devcards$maps_and_scenarios36558.cljs$lang$type = true);

(zetawar.devcards.maps_and_scenarios.t_zetawar$devcards$maps_and_scenarios36558.cljs$lang$ctorStr = "zetawar.devcards.maps-and-scenarios/t_zetawar$devcards$maps_and_scenarios36558");

(zetawar.devcards.maps_and_scenarios.t_zetawar$devcards$maps_and_scenarios36558.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"zetawar.devcards.maps-and-scenarios/t_zetawar$devcards$maps_and_scenarios36558");
}));

/**
 * Positional factory function for zetawar.devcards.maps-and-scenarios/t_zetawar$devcards$maps_and_scenarios36558.
 */
zetawar.devcards.maps_and_scenarios.__GT_t_zetawar$devcards$maps_and_scenarios36558 = (function zetawar$devcards$maps_and_scenarios$__GT_t_zetawar$devcards$maps_and_scenarios36558(meta36559){
return (new zetawar.devcards.maps_and_scenarios.t_zetawar$devcards$maps_and_scenarios36558(meta36559));
});


devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"zetawar.devcards.maps_and_scenarios","zetawar.devcards.maps_and_scenarios",1309799995),new cljs.core.Keyword(null,"sterlings-aruba-multiplayer-card","sterlings-aruba-multiplayer-card",-1586907242)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"sterlings-aruba-multiplayer-card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(new zetawar.devcards.maps_and_scenarios.t_zetawar$devcards$maps_and_scenarios36558(null)),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
zetawar.devcards.maps_and_scenarios.t_zetawar$devcards$maps_and_scenarios36561 = (function (meta36562){
this.meta36562 = meta36562;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(zetawar.devcards.maps_and_scenarios.t_zetawar$devcards$maps_and_scenarios36561.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36563,meta36562__$1){
var self__ = this;
var _36563__$1 = this;
return (new zetawar.devcards.maps_and_scenarios.t_zetawar$devcards$maps_and_scenarios36561(meta36562__$1));
}));

(zetawar.devcards.maps_and_scenarios.t_zetawar$devcards$maps_and_scenarios36561.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36563){
var self__ = this;
var _36563__$1 = this;
return self__.meta36562;
}));

(zetawar.devcards.maps_and_scenarios.t_zetawar$devcards$maps_and_scenarios36561.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(zetawar.devcards.maps_and_scenarios.t_zetawar$devcards$maps_and_scenarios36561.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__30710__auto__,devcard_opts__30711__auto__){
var self__ = this;
var this__30710__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__30711__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__30729__auto__ = (function (){var views_cfg = new cljs.core.Keyword("zetawar.system","game-views","zetawar.system/game-views",439449159).cljs$core$IFn$_invoke$arity$1(zetawar.devcards.maps_and_scenarios.init_scenario(new cljs.core.Keyword(null,"city-sprawl-multiplayer","city-sprawl-multiplayer",371926273)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zetawar.views.board,views_cfg], null);
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

(zetawar.devcards.maps_and_scenarios.t_zetawar$devcards$maps_and_scenarios36561.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta36562","meta36562",1241249231,null)], null);
}));

(zetawar.devcards.maps_and_scenarios.t_zetawar$devcards$maps_and_scenarios36561.cljs$lang$type = true);

(zetawar.devcards.maps_and_scenarios.t_zetawar$devcards$maps_and_scenarios36561.cljs$lang$ctorStr = "zetawar.devcards.maps-and-scenarios/t_zetawar$devcards$maps_and_scenarios36561");

(zetawar.devcards.maps_and_scenarios.t_zetawar$devcards$maps_and_scenarios36561.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"zetawar.devcards.maps-and-scenarios/t_zetawar$devcards$maps_and_scenarios36561");
}));

/**
 * Positional factory function for zetawar.devcards.maps-and-scenarios/t_zetawar$devcards$maps_and_scenarios36561.
 */
zetawar.devcards.maps_and_scenarios.__GT_t_zetawar$devcards$maps_and_scenarios36561 = (function zetawar$devcards$maps_and_scenarios$__GT_t_zetawar$devcards$maps_and_scenarios36561(meta36562){
return (new zetawar.devcards.maps_and_scenarios.t_zetawar$devcards$maps_and_scenarios36561(meta36562));
});


devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"zetawar.devcards.maps_and_scenarios","zetawar.devcards.maps_and_scenarios",1309799995),new cljs.core.Keyword(null,"city-sprawl-multiplayer-card","city-sprawl-multiplayer-card",1317338653)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"city-sprawl-multiplayer-card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(new zetawar.devcards.maps_and_scenarios.t_zetawar$devcards$maps_and_scenarios36561(null)),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=zetawar.devcards.maps_and_scenarios.js.map
