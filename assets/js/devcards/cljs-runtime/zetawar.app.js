goog.provide('zetawar.app');
zetawar.app.root = (function zetawar$app$root(db){
return zetawar.db.find_by.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("app","game","app/game",-441616472));
});
zetawar.app.current_game = (function zetawar$app$current_game(db){
return new cljs.core.Keyword("app","game","app/game",-441616472).cljs$core$IFn$_invoke$arity$1(zetawar.app.root(db));
});
zetawar.app.current_game_id = (function zetawar$app$current_game_id(db){
return new cljs.core.Keyword("game","id","game/id",-1385234878).cljs$core$IFn$_invoke$arity$1(zetawar.app.current_game(db));
});
zetawar.app.selected_hex = (function zetawar$app$selected_hex(db){
var map__35613 = zetawar.app.root(db);
var map__35613__$1 = cljs.core.__destructure_map(map__35613);
var selected_q = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35613__$1,new cljs.core.Keyword("app","selected-q","app/selected-q",1651135644));
var selected_r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35613__$1,new cljs.core.Keyword("app","selected-r","app/selected-r",-2004026693));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [selected_q,selected_r], null);
});
zetawar.app.targeted_hex = (function zetawar$app$targeted_hex(db){
var map__35614 = zetawar.app.root(db);
var map__35614__$1 = cljs.core.__destructure_map(map__35614);
var targeted_q = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35614__$1,new cljs.core.Keyword("app","targeted-q","app/targeted-q",657679208));
var targeted_r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35614__$1,new cljs.core.Keyword("app","targeted-r","app/targeted-r",1576976074));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [targeted_q,targeted_r], null);
});
zetawar.app.create_players_BANG_ = (function zetawar$app$create_players_BANG_(p__35615){
var map__35616 = p__35615;
var map__35616__$1 = cljs.core.__destructure_map(map__35616);
var app_ctx = map__35616__$1;
var conn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35616__$1,new cljs.core.Keyword(null,"conn","conn",278309663));
var players = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35616__$1,new cljs.core.Keyword(null,"players","players",-1361554569));
var factions = zetawar.db.qess(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?f","?f",-1121766265,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Keyword("app","game","app/game",-441616472),new cljs.core.Symbol(null,"?g","?g",589440221,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?g","?g",589440221,null),new cljs.core.Keyword("game","factions","game/factions",148269805),new cljs.core.Symbol(null,"?f","?f",-1121766265,null)], null)], null),cljs.core.deref(conn));
if(cljs.core.truth_(players)){
var seq__35618_35687 = cljs.core.seq(cljs.core.deref(players));
var chunk__35619_35688 = null;
var count__35620_35689 = (0);
var i__35621_35690 = (0);
while(true){
if((i__35621_35690 < count__35620_35689)){
var vec__35628_35691 = chunk__35619_35688.cljs$core$IIndexed$_nth$arity$2(null,i__35621_35690);
var __35692 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35628_35691,(0),null);
var player_35693 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35628_35691,(1),null);
if(cljs.core.truth_(player_35693)){
zetawar.players.stop(player_35693);
} else {
}


var G__35694 = seq__35618_35687;
var G__35695 = chunk__35619_35688;
var G__35696 = count__35620_35689;
var G__35697 = (i__35621_35690 + (1));
seq__35618_35687 = G__35694;
chunk__35619_35688 = G__35695;
count__35620_35689 = G__35696;
i__35621_35690 = G__35697;
continue;
} else {
var temp__5823__auto___35698 = cljs.core.seq(seq__35618_35687);
if(temp__5823__auto___35698){
var seq__35618_35699__$1 = temp__5823__auto___35698;
if(cljs.core.chunked_seq_QMARK_(seq__35618_35699__$1)){
var c__5568__auto___35700 = cljs.core.chunk_first(seq__35618_35699__$1);
var G__35701 = cljs.core.chunk_rest(seq__35618_35699__$1);
var G__35702 = c__5568__auto___35700;
var G__35703 = cljs.core.count(c__5568__auto___35700);
var G__35704 = (0);
seq__35618_35687 = G__35701;
chunk__35619_35688 = G__35702;
count__35620_35689 = G__35703;
i__35621_35690 = G__35704;
continue;
} else {
var vec__35631_35705 = cljs.core.first(seq__35618_35699__$1);
var __35706 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35631_35705,(0),null);
var player_35707 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35631_35705,(1),null);
if(cljs.core.truth_(player_35707)){
zetawar.players.stop(player_35707);
} else {
}


var G__35708 = cljs.core.next(seq__35618_35699__$1);
var G__35709 = null;
var G__35710 = (0);
var G__35711 = (0);
seq__35618_35687 = G__35708;
chunk__35619_35688 = G__35709;
count__35620_35689 = G__35710;
i__35621_35690 = G__35711;
continue;
}
} else {
}
}
break;
}
} else {
}

var seq__35634 = cljs.core.seq(factions);
var chunk__35635 = null;
var count__35636 = (0);
var i__35637 = (0);
while(true){
if((i__35637 < count__35636)){
var map__35642 = chunk__35635.cljs$core$IIndexed$_nth$arity$2(null,i__35637);
var map__35642__$1 = cljs.core.__destructure_map(map__35642);
var faction = map__35642__$1;
var ai = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35642__$1,new cljs.core.Keyword("faction","ai","faction/ai",1819183109));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35642__$1,new cljs.core.Keyword("faction","color","faction/color",2104478137));
var player_type_35715 = (cljs.core.truth_(ai)?new cljs.core.Keyword("zetawar.players","reference-ai","zetawar.players/reference-ai",-515778141):new cljs.core.Keyword("zetawar.players","human","zetawar.players/human",407772126));
var player_35716 = zetawar.players.new_player.cljs$core$IFn$_invoke$arity$3(app_ctx,player_type_35715,color);
datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),zetawar.db.e(faction),new cljs.core.Keyword("faction","player-type","faction/player-type",1769856328),player_type_35715], null)], null));

zetawar.players.start(player_35716);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(players,cljs.core.assoc,color,player_35716);


var G__35717 = seq__35634;
var G__35718 = chunk__35635;
var G__35719 = count__35636;
var G__35720 = (i__35637 + (1));
seq__35634 = G__35717;
chunk__35635 = G__35718;
count__35636 = G__35719;
i__35637 = G__35720;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__35634);
if(temp__5823__auto__){
var seq__35634__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35634__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__35634__$1);
var G__35721 = cljs.core.chunk_rest(seq__35634__$1);
var G__35722 = c__5568__auto__;
var G__35723 = cljs.core.count(c__5568__auto__);
var G__35724 = (0);
seq__35634 = G__35721;
chunk__35635 = G__35722;
count__35636 = G__35723;
i__35637 = G__35724;
continue;
} else {
var map__35643 = cljs.core.first(seq__35634__$1);
var map__35643__$1 = cljs.core.__destructure_map(map__35643);
var faction = map__35643__$1;
var ai = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35643__$1,new cljs.core.Keyword("faction","ai","faction/ai",1819183109));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35643__$1,new cljs.core.Keyword("faction","color","faction/color",2104478137));
var player_type_35729 = (cljs.core.truth_(ai)?new cljs.core.Keyword("zetawar.players","reference-ai","zetawar.players/reference-ai",-515778141):new cljs.core.Keyword("zetawar.players","human","zetawar.players/human",407772126));
var player_35730 = zetawar.players.new_player.cljs$core$IFn$_invoke$arity$3(app_ctx,player_type_35729,color);
datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),zetawar.db.e(faction),new cljs.core.Keyword("faction","player-type","faction/player-type",1769856328),player_type_35729], null)], null));

zetawar.players.start(player_35730);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(players,cljs.core.assoc,color,player_35730);


var G__35734 = cljs.core.next(seq__35634__$1);
var G__35735 = null;
var G__35736 = (0);
var G__35737 = (0);
seq__35634 = G__35734;
chunk__35635 = G__35735;
count__35636 = G__35736;
i__35637 = G__35737;
continue;
}
} else {
return null;
}
}
break;
}
});
zetawar.app.start_new_game_BANG_ = (function zetawar$app$start_new_game_BANG_(var_args){
var G__35647 = arguments.length;
switch (G__35647) {
case 2:
return zetawar.app.start_new_game_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 5:
return zetawar.app.start_new_game_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zetawar.app.start_new_game_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p__35649,scenario_id){
var map__35650 = p__35649;
var map__35650__$1 = cljs.core.__destructure_map(map__35650);
var app_ctx = map__35650__$1;
var conn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35650__$1,new cljs.core.Keyword(null,"conn","conn",278309663));
var players = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35650__$1,new cljs.core.Keyword(null,"players","players",-1361554569));
return zetawar.app.start_new_game_BANG_.cljs$core$IFn$_invoke$arity$5(app_ctx,zetawar.data.rulesets,zetawar.data.maps,zetawar.data.scenarios,scenario_id);
}));

(zetawar.app.start_new_game_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (p__35651,rulesets,map_defs,scenario_defs,scenario_id){
var map__35652 = p__35651;
var map__35652__$1 = cljs.core.__destructure_map(map__35652);
var app_ctx = map__35652__$1;
var conn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35652__$1,new cljs.core.Keyword(null,"conn","conn",278309663));
var players = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35652__$1,new cljs.core.Keyword(null,"players","players",-1361554569));
var game = zetawar.app.current_game(cljs.core.deref(conn));
if(cljs.core.truth_(game)){
datascript.core.transact.cljs$core$IFn$_invoke$arity$2(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),zetawar.db.e(game)], null)], null));
} else {
}

var scenario_def = (scenario_defs.cljs$core$IFn$_invoke$arity$1 ? scenario_defs.cljs$core$IFn$_invoke$arity$1(scenario_id) : scenario_defs.call(null,scenario_id));
var game_id = zetawar.game.load_scenario_BANG_(conn,rulesets,map_defs,scenario_def);
var db = cljs.core.deref(conn);
var app_eid = (function (){var or__5045__auto__ = (function (){var G__35653 = zetawar.app.root(db);
if((G__35653 == null)){
return null;
} else {
return zetawar.db.e(G__35653);
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (-101);
}
})();
var game__$1 = zetawar.game.game_by_id(db,game_id);
var turn_stepping = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(zetawar.game.faction_count(db,game__$1),zetawar.game.ai_faction_count(db,game__$1));
datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),app_eid,new cljs.core.Keyword("app","game","app/game",-441616472),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game","id","game/id",-1385234878),game_id], null),new cljs.core.Keyword("app","hide-win-message","app/hide-win-message",-1410597856),false,new cljs.core.Keyword("app","ai-turn-stepping","app/ai-turn-stepping",-437954950),turn_stepping], null)], null));

if(cljs.core.truth_(players)){
return zetawar.app.create_players_BANG_(app_ctx);
} else {
return null;
}
}));

(zetawar.app.start_new_game_BANG_.cljs$lang$maxFixedArity = 5);

zetawar.app.load_game_state_BANG_ = (function zetawar$app$load_game_state_BANG_(var_args){
var G__35661 = arguments.length;
switch (G__35661) {
case 2:
return zetawar.app.load_game_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 5:
return zetawar.app.load_game_state_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zetawar.app.load_game_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p__35668,game_state){
var map__35669 = p__35668;
var map__35669__$1 = cljs.core.__destructure_map(map__35669);
var app_ctx = map__35669__$1;
var conn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35669__$1,new cljs.core.Keyword(null,"conn","conn",278309663));
var players = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35669__$1,new cljs.core.Keyword(null,"players","players",-1361554569));
return zetawar.app.load_game_state_BANG_.cljs$core$IFn$_invoke$arity$5(app_ctx,zetawar.data.rulesets,zetawar.data.maps,zetawar.data.scenarios,game_state);
}));

(zetawar.app.load_game_state_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (p__35673,rulesets,map_defs,scenario_defs,game_state){
var map__35674 = p__35673;
var map__35674__$1 = cljs.core.__destructure_map(map__35674);
var app_ctx = map__35674__$1;
var conn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35674__$1,new cljs.core.Keyword(null,"conn","conn",278309663));
var players = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35674__$1,new cljs.core.Keyword(null,"players","players",-1361554569));
var game_id = zetawar.game.load_game_state_BANG_(conn,rulesets,map_defs,scenario_defs,game_state);
var db = cljs.core.deref(conn);
var game = zetawar.game.game_by_id(db,game_id);
var turn_stepping = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(zetawar.game.faction_count(db,game),zetawar.game.ai_faction_count(db,game));
datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-1),new cljs.core.Keyword("app","game","app/game",-441616472),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game","id","game/id",-1385234878),game_id], null),new cljs.core.Keyword("app","ai-turn-stepping","app/ai-turn-stepping",-437954950),turn_stepping], null)], null));

if(cljs.core.truth_(players)){
return zetawar.app.create_players_BANG_(app_ctx);
} else {
return null;
}
}));

(zetawar.app.load_game_state_BANG_.cljs$lang$maxFixedArity = 5);


//# sourceMappingURL=zetawar.app.js.map
