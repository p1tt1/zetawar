goog.provide('zetawar.game');
zetawar.game.game_pos_idx = cljs.core.memoize((function zetawar$game$game_pos_idx(game,q,r){
if(cljs.core.truth_((function (){var and__5043__auto__ = game;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = q;
if(cljs.core.truth_(and__5043__auto____$1)){
return r;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
return (r + ((1000) * ((zetawar.db.e(game) * (1000)) + q)));
} else {
return (-1);
}
}));
zetawar.game.game_id_idx = (function zetawar$game$game_id_idx(game_or_game_id,id){
var game_id = (cljs.core.truth_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(game_or_game_id))?new cljs.core.Keyword("game","id","game/id",-1385234878).cljs$core$IFn$_invoke$arity$1(game_or_game_id):game_or_game_id);
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),/:/),(1))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(game_id)].join(''));
});
zetawar.game.game_by_id = (function zetawar$game$game_by_id(db,game_id){
return zetawar.db.find_by.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("game","id","game/id",-1385234878),game_id);
});
zetawar.game.current_faction_color = (function zetawar$game$current_faction_color(game){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game","current-faction","game/current-faction",-1129931374),new cljs.core.Keyword("faction","color","faction/color",2104478137)], null));
});
zetawar.game.next_faction_color = (function zetawar$game$next_faction_color(game){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(game,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game","current-faction","game/current-faction",-1129931374),new cljs.core.Keyword("faction","next-faction","faction/next-faction",23975586),new cljs.core.Keyword("faction","color","faction/color",2104478137)], null));
});
zetawar.game.game_ex = (function zetawar$game$game_ex(message,game){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(message,cljs.core.select_keys(game,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game","self-repair","game/self-repair",1572141403)], null)));
});
zetawar.game.to_faction_color = (function zetawar$game$to_faction_color(color){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"faction.color","faction.color",-1077972084,null),cljs.core.name(color));
});
zetawar.game.faction_by_color = (function zetawar$game$faction_by_color(db,game,color){
return zetawar.db.qe.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?f","?f",-1121766265,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?g","?g",589440221,null),new cljs.core.Symbol(null,"?color","?color",-2093558213,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?g","?g",589440221,null),new cljs.core.Keyword("game","factions","game/factions",148269805),new cljs.core.Symbol(null,"?f","?f",-1121766265,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?f","?f",-1121766265,null),new cljs.core.Keyword("faction","color","faction/color",2104478137),new cljs.core.Symbol(null,"?color","?color",-2093558213,null)], null)], null),db,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([zetawar.db.e(game),zetawar.game.to_faction_color(color)], 0));
});
zetawar.game.faction_count = (function zetawar$game$faction_count(db,game){
var or__5045__auto__ = cljs.core.ffirst((function (){var G__35242 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"?f","?f",-1121766265,null)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?g","?g",589440221,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?g","?g",589440221,null),new cljs.core.Keyword("game","factions","game/factions",148269805),new cljs.core.Symbol(null,"?f","?f",-1121766265,null)], null)], null);
var G__35243 = db;
var G__35244 = zetawar.db.e(game);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__35242,G__35243,G__35244) : datascript.core.q.call(null,G__35242,G__35243,G__35244));
})());
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
});
zetawar.game.ai_faction_count = (function zetawar$game$ai_faction_count(db,game){
var or__5045__auto__ = cljs.core.ffirst((function (){var G__35245 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"?f","?f",-1121766265,null)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?g","?g",589440221,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?g","?g",589440221,null),new cljs.core.Keyword("game","factions","game/factions",148269805),new cljs.core.Symbol(null,"?f","?f",-1121766265,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?f","?f",-1121766265,null),new cljs.core.Keyword("faction","ai","faction/ai",1819183109),true], null)], null);
var G__35246 = db;
var G__35247 = zetawar.db.e(game);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__35245,G__35246,G__35247) : datascript.core.q.call(null,G__35245,G__35246,G__35247));
})());
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
});
zetawar.game.human_faction_count = (function zetawar$game$human_faction_count(db,game){
return (zetawar.game.faction_count(db,game) - zetawar.game.ai_faction_count(db,game));
});
zetawar.game.faction_bases = (function zetawar$game$faction_bases(db,faction){
return zetawar.db.qess.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?f","?f",-1121766265,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.Keyword("terrain","owner","terrain/owner",1031873140),new cljs.core.Symbol(null,"?f","?f",-1121766265,null)], null)], null),db,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([zetawar.db.e(faction)], 0));
});
zetawar.game.faction_base_count = (function zetawar$game$faction_base_count(db,faction){
var or__5045__auto__ = cljs.core.ffirst((function (){var G__35254 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"?b","?b",1575118075,null)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?f","?f",-1121766265,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("terrain","owner","terrain/owner",1031873140),new cljs.core.Symbol(null,"?f","?f",-1121766265,null)], null)], null);
var G__35255 = db;
var G__35256 = zetawar.db.e(faction);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__35254,G__35255,G__35256) : datascript.core.q.call(null,G__35254,G__35255,G__35256));
})());
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
});
zetawar.game.faction_base_being_captured_count = (function zetawar$game$faction_base_being_captured_count(db,faction){
var or__5045__auto__ = cljs.core.ffirst((function (){var G__35263 = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"?b","?b",1575118075,null)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?f","?f",-1121766265,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("terrain","owner","terrain/owner",1031873140),new cljs.core.Symbol(null,"?f","?f",-1121766265,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"?ef","?ef",248987097,null),new cljs.core.Symbol(null,"f","f",43394975,null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?ef","?ef",248987097,null),new cljs.core.Keyword("faction","units","faction/units",-1588815131),new cljs.core.Symbol(null,"?u","?u",749886731,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?u","?u",749886731,null),new cljs.core.Keyword("unit","terrain","unit/terrain",692687601),new cljs.core.Symbol(null,"?b","?b",1575118075,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?u","?u",749886731,null),new cljs.core.Keyword("unit","capturing","unit/capturing",247751174),true], null)], null);
var G__35264 = db;
var G__35265 = zetawar.db.e(faction);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__35263,G__35264,G__35265) : datascript.core.q.call(null,G__35263,G__35264,G__35265));
})());
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
});
zetawar.game.enemy_base_count = (function zetawar$game$enemy_base_count(db,faction){
var or__5045__auto__ = cljs.core.ffirst((function (){var G__35278 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"?b","?b",1575118075,null)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?f","?f",-1121766265,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("terrain","owner","terrain/owner",1031873140),new cljs.core.Symbol(null,"?ef","?ef",248987097,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"?ef","?ef",248987097,null),new cljs.core.Symbol(null,"?f","?f",-1121766265,null))], null)], null);
var G__35279 = db;
var G__35280 = zetawar.db.e(faction);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__35278,G__35279,G__35280) : datascript.core.q.call(null,G__35278,G__35279,G__35280));
})());
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
});
zetawar.game.faction_unit_count = (function zetawar$game$faction_unit_count(db,faction){
var or__5045__auto__ = cljs.core.ffirst((function (){var G__35281 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"?u","?u",749886731,null)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?f","?f",-1121766265,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?f","?f",-1121766265,null),new cljs.core.Keyword("faction","units","faction/units",-1588815131),new cljs.core.Symbol(null,"?u","?u",749886731,null)], null)], null);
var G__35283 = db;
var G__35284 = zetawar.db.e(faction);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__35281,G__35283,G__35284) : datascript.core.q.call(null,G__35281,G__35283,G__35284));
})());
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
});
zetawar.game.enemy_unit_count = (function zetawar$game$enemy_unit_count(db,faction){
var or__5045__auto__ = cljs.core.ffirst((function (){var G__35289 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"?u","?u",749886731,null)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?f","?f",-1121766265,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?f","?f",-1121766265,null),new cljs.core.Keyword("faction","units","faction/units",-1588815131),new cljs.core.Symbol(null,"?u","?u",749886731,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"?f","?f",-1121766265,null),new cljs.core.Symbol(null,"?cf","?cf",757867184,null))], null)], null);
var G__35290 = db;
var G__35291 = zetawar.db.e(faction);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__35289,G__35290,G__35291) : datascript.core.q.call(null,G__35289,G__35290,G__35291));
})());
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
});
zetawar.game.faction_won_QMARK_ = (function zetawar$game$faction_won_QMARK_(db,faction){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic((0),zetawar.game.enemy_base_count,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([db,faction], 0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic((0),zetawar.game.enemy_unit_count,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([db,faction], 0))));
});
zetawar.game.income = (function zetawar$game$income(db,game,faction){
var base_count = zetawar.game.faction_base_count(db,faction);
var captured_count = zetawar.game.faction_base_being_captured_count(db,faction);
var map__35314 = game;
var map__35314__$1 = cljs.core.__destructure_map(map__35314);
var credits_per_base = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35314__$1,new cljs.core.Keyword("game","credits-per-base","game/credits-per-base",19222847));
return ((base_count - captured_count) * credits_per_base);
});
zetawar.game.to_terrain_type_id = (function zetawar$game$to_terrain_type_id(terrain_type_name){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"terrain-type.id","terrain-type.id",414185131,null),cljs.core.name(terrain_type_name));
});
zetawar.game.terrain_type_by_id = (function zetawar$game$terrain_type_by_id(db,game,terrain_type_id){
return zetawar.db.qe.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?tt","?tt",-908445421,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?g","?g",589440221,null),new cljs.core.Symbol(null,"?tt-id","?tt-id",2027377724,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?g","?g",589440221,null),new cljs.core.Keyword("game","terrain-types","game/terrain-types",515074457),new cljs.core.Symbol(null,"?tt","?tt",-908445421,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?tt","?tt",-908445421,null),new cljs.core.Keyword("terrain-type","id","terrain-type/id",-1035336862),new cljs.core.Symbol(null,"?tt-id","?tt-id",2027377724,null)], null)], null),db,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([zetawar.db.e(game),terrain_type_id], 0));
});
zetawar.game.terrain_QMARK_ = (function zetawar$game$terrain_QMARK_(x){
return cljs.core.contains_QMARK_(x,new cljs.core.Keyword("terrain","type","terrain/type",-1187652655));
});
zetawar.game.base_QMARK_ = (function zetawar$game$base_QMARK_(x){
return (!(cljs.core.empty_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("terrain","type","terrain/type",-1187652655),new cljs.core.Keyword("terrain-type","can-build","terrain-type/can-build",1032082687)], null)))));
});
zetawar.game.terrain_hex = (function zetawar$game$terrain_hex(terrain){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("terrain","q","terrain/q",2698702).cljs$core$IFn$_invoke$arity$1(terrain),new cljs.core.Keyword("terrain","r","terrain/r",-1753264147).cljs$core$IFn$_invoke$arity$1(terrain)], null);
});
zetawar.game.terrain_at = (function zetawar$game$terrain_at(db,game,q,r){
var G__35315 = db;
var G__35316 = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(cljs.core.first(datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("terrain","game-pos-idx","terrain/game-pos-idx",340565053),zetawar.game.game_pos_idx(game,q,r))));
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__35315,G__35316) : datascript.core.entity.call(null,G__35315,G__35316));
});
zetawar.game.checked_terrain_at = (function zetawar$game$checked_terrain_at(db,game,q,r){
var terrain = zetawar.game.terrain_at(db,game,q,r);
if(cljs.core.truth_(terrain)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No terrain at specified coordinates",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"q","q",689001697),q,new cljs.core.Keyword(null,"r","r",-471384190),r], null));
}

return terrain;
});
zetawar.game.base_at = (function zetawar$game$base_at(db,game,q,r){
var terrain = zetawar.game.terrain_at(db,game,q,r);
if(zetawar.game.base_QMARK_(terrain)){
return terrain;
} else {
return null;
}
});
zetawar.game.checked_base_at = (function zetawar$game$checked_base_at(db,game,q,r){
var base = zetawar.game.base_at(db,game,q,r);
if(cljs.core.truth_(base)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No base at specified coordinates",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"q","q",689001697),q,new cljs.core.Keyword(null,"r","r",-471384190),r], null));
}

return base;
});
zetawar.game.check_base_current = (function zetawar$game$check_base_current(db,game,base){
var cur_faction = new cljs.core.Keyword("game","current-faction","game/current-faction",-1129931374).cljs$core$IFn$_invoke$arity$1(game);
var base_faction = new cljs.core.Keyword("terrain","owner","terrain/owner",1031873140).cljs$core$IFn$_invoke$arity$1(base);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cur_faction,base_faction)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Base is not owned by the current faction",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-faction","current-faction",-1124664924),new cljs.core.Keyword("faction","color","faction/color",2104478137).cljs$core$IFn$_invoke$arity$1(cur_faction)], null));
} else {
return null;
}
});
zetawar.game.current_base_QMARK_ = (function zetawar$game$current_base_QMARK_(db,game,x){
if(zetawar.game.base_QMARK_(x)){
var cur_faction = new cljs.core.Keyword("game","current-faction","game/current-faction",-1129931374).cljs$core$IFn$_invoke$arity$1(game);
var base_faction = new cljs.core.Keyword("terrain","owner","terrain/owner",1031873140).cljs$core$IFn$_invoke$arity$1(x);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cur_faction,base_faction);
} else {
return null;
}
});
zetawar.game.to_unit_type_id = (function zetawar$game$to_unit_type_id(unit_type_name){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"unit-type.id","unit-type.id",-1600558602,null),cljs.core.name(unit_type_name));
});
zetawar.game.to_armor_type = (function zetawar$game$to_armor_type(armor_type_name){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"unit-type.armor-type","unit-type.armor-type",-208531064,null),cljs.core.name(armor_type_name));
});
zetawar.game.to_buildable_at = (function zetawar$game$to_buildable_at(buildable_at_name){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"unit-type.buildable-at","unit-type.buildable-at",-700508333,null),cljs.core.name(buildable_at_name));
});
zetawar.game.unit_QMARK_ = (function zetawar$game$unit_QMARK_(x){
return cljs.core.contains_QMARK_(x,new cljs.core.Keyword("unit","type","unit/type",1170646544));
});
zetawar.game.unit_hex = (function zetawar$game$unit_hex(unit){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unit","q","unit/q",675179613).cljs$core$IFn$_invoke$arity$1(unit),new cljs.core.Keyword("unit","r","unit/r",-492034562).cljs$core$IFn$_invoke$arity$1(unit)], null);
});
zetawar.game.unit_color = (function zetawar$game$unit_color(unit){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(unit,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("faction","_units","faction/_units",-227507819),new cljs.core.Keyword("faction","color","faction/color",2104478137)], null));
});
zetawar.game.unit_at = (function zetawar$game$unit_at(db,game,q,r){
var G__35317 = db;
var G__35318 = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(cljs.core.first(datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("unit","game-pos-idx","unit/game-pos-idx",2034098862),zetawar.game.game_pos_idx(game,q,r))));
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__35317,G__35318) : datascript.core.entity.call(null,G__35317,G__35318));
});
zetawar.game.checked_unit_at = (function zetawar$game$checked_unit_at(db,game,q,r){
var unit = zetawar.game.unit_at(db,game,q,r);
if(cljs.core.truth_(unit)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unit does not exist at specified coordinates",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"q","q",689001697),q,new cljs.core.Keyword(null,"r","r",-471384190),r], null));
}

return unit;
});
zetawar.game.unit_faction = (function zetawar$game$unit_faction(db,unit){
return new cljs.core.Keyword("faction","_units","faction/_units",-227507819).cljs$core$IFn$_invoke$arity$1(unit);
});
zetawar.game.check_unit_current = (function zetawar$game$check_unit_current(db,game,unit){
var cur_faction = new cljs.core.Keyword("game","current-faction","game/current-faction",-1129931374).cljs$core$IFn$_invoke$arity$1(game);
var u_faction = zetawar.game.unit_faction(db,unit);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(zetawar.db.e(cur_faction),zetawar.db.e(u_faction))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unit is not a member of the current faction",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-faction","current-faction",-1124664924),new cljs.core.Keyword("faction","color","faction/color",2104478137).cljs$core$IFn$_invoke$arity$1(cur_faction),new cljs.core.Keyword(null,"unit-faction","unit-faction",401989866),new cljs.core.Keyword("faction","color","faction/color",2104478137).cljs$core$IFn$_invoke$arity$1(u_faction)], null));
} else {
return null;
}
});
zetawar.game.unit_current_QMARK_ = (function zetawar$game$unit_current_QMARK_(db,game,unit){
try{zetawar.game.check_unit_current(db,game,unit);

return true;
}catch (e35319){var ex = e35319;
return false;
}});
zetawar.game.on_base_QMARK_ = (function zetawar$game$on_base_QMARK_(db,game,unit){
return zetawar.game.base_QMARK_(zetawar.game.terrain_at(db,game,new cljs.core.Keyword("unit","q","unit/q",675179613).cljs$core$IFn$_invoke$arity$1(unit),new cljs.core.Keyword("unit","r","unit/r",-492034562).cljs$core$IFn$_invoke$arity$1(unit)));
});
zetawar.game.on_owned_base_QMARK_ = (function zetawar$game$on_owned_base_QMARK_(db,game,unit){
var map__35320 = unit;
var map__35320__$1 = cljs.core.__destructure_map(map__35320);
var q = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35320__$1,new cljs.core.Keyword("unit","q","unit/q",675179613));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35320__$1,new cljs.core.Keyword("unit","r","unit/r",-492034562));
var terrain = zetawar.game.terrain_at(db,game,q,r);
return ((zetawar.game.base_QMARK_(terrain)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__35321 = terrain;
var G__35321__$1 = (((G__35321 == null))?null:new cljs.core.Keyword("terrain","owner","terrain/owner",1031873140).cljs$core$IFn$_invoke$arity$1(G__35321));
if((G__35321__$1 == null)){
return null;
} else {
return zetawar.db.e(G__35321__$1);
}
})(),zetawar.db.e(zetawar.game.unit_faction(db,unit)))));
});
zetawar.game.on_capturable_base_QMARK_ = (function zetawar$game$on_capturable_base_QMARK_(db,game,unit){
var map__35322 = unit;
var map__35322__$1 = cljs.core.__destructure_map(map__35322);
var q = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35322__$1,new cljs.core.Keyword("unit","q","unit/q",675179613));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35322__$1,new cljs.core.Keyword("unit","r","unit/r",-492034562));
var terrain = zetawar.game.terrain_at(db,game,q,r);
return ((zetawar.game.base_QMARK_(terrain)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__35323 = terrain;
var G__35323__$1 = (((G__35323 == null))?null:new cljs.core.Keyword("terrain","owner","terrain/owner",1031873140).cljs$core$IFn$_invoke$arity$1(G__35323));
if((G__35323__$1 == null)){
return null;
} else {
return zetawar.db.e(G__35323__$1);
}
})(),zetawar.db.e(zetawar.game.unit_faction(db,unit)))));
});
zetawar.game.unit_ex = (function zetawar$game$unit_ex(message,unit){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(message,cljs.core.select_keys(unit,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unit","q","unit/q",675179613),new cljs.core.Keyword("unit","r","unit/r",-492034562)], null)));
});
zetawar.game.unit_terrain_effects = (function zetawar$game$unit_terrain_effects(db,unit,terrain){
return zetawar.util.only((function (){var G__35324 = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?mc","?mc",-631190890,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Symbol(null,"?ar","?ar",1593389363,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?u","?u",749886731,null),new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?u","?u",749886731,null),new cljs.core.Keyword("unit","type","unit/type",1170646544),new cljs.core.Symbol(null,"?ut","?ut",1965659909,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.Keyword("terrain","type","terrain/type",-1187652655),new cljs.core.Symbol(null,"?tt","?tt",-908445421,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?tt","?tt",-908445421,null),new cljs.core.Keyword("terrain-type","effects","terrain-type/effects",490191874),new cljs.core.Symbol(null,"?e","?e",-1194391683,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("terrain-effect","unit-type","terrain-effect/unit-type",1046397533),new cljs.core.Symbol(null,"?ut","?ut",1965659909,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("terrain-effect","attack-bonus","terrain-effect/attack-bonus",-2130995456),new cljs.core.Symbol(null,"?at","?at",-1287664470,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("terrain-effect","armor-bonus","terrain-effect/armor-bonus",-1722771191),new cljs.core.Symbol(null,"?ar","?ar",1593389363,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("terrain-effect","movement-cost","terrain-effect/movement-cost",-1564991502),new cljs.core.Symbol(null,"?mc","?mc",-631190890,null)], null)], null);
var G__35325 = db;
var G__35326 = zetawar.db.e(unit);
var G__35327 = zetawar.db.e(terrain);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$4 ? datascript.core.q.cljs$core$IFn$_invoke$arity$4(G__35324,G__35325,G__35326,G__35327) : datascript.core.q.call(null,G__35324,G__35325,G__35326,G__35327));
})());
});
zetawar.game.to_unit_state_map_id = (function zetawar$game$to_unit_state_map_id(state_map_name){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"unit-state-map.id","unit-state-map.id",266371733,null),cljs.core.name(state_map_name));
});
zetawar.game.unit_state_map_by_id = (function zetawar$game$unit_state_map_by_id(db,game,unit_state_map_id){
return zetawar.db.qe.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?usm","?usm",-752005520,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?g","?g",589440221,null),new cljs.core.Symbol(null,"?usm-id","?usm-id",1155428976,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?g","?g",589440221,null),new cljs.core.Keyword("game","unit-state-maps","game/unit-state-maps",-1222635228),new cljs.core.Symbol(null,"?usm","?usm",-752005520,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?usm","?usm",-752005520,null),new cljs.core.Keyword("unit-state-map","id","unit-state-map/id",-269253347),new cljs.core.Symbol(null,"?usm-id","?usm-id",1155428976,null)], null)], null),db,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([zetawar.db.e(game),unit_state_map_id], 0));
});
zetawar.game.to_unit_state_id = (function zetawar$game$to_unit_state_id(var_args){
var G__35329 = arguments.length;
switch (G__35329) {
case 1:
return zetawar.game.to_unit_state_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return zetawar.game.to_unit_state_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zetawar.game.to_unit_state_id.cljs$core$IFn$_invoke$arity$1 = (function (unit_state_name){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"unit-state.id","unit-state.id",835117057,null),cljs.core.name(unit_state_name));
}));

(zetawar.game.to_unit_state_id.cljs$core$IFn$_invoke$arity$2 = (function (state_map_name,state_name){
return zetawar.game.to_unit_state_id.cljs$core$IFn$_invoke$arity$1([cljs.core.name(state_map_name),"_",cljs.core.name(state_name)].join(''));
}));

(zetawar.game.to_unit_state_id.cljs$lang$maxFixedArity = 2);

zetawar.game.unit_state_by_id = (function zetawar$game$unit_state_by_id(db,game,unit_state_id){
return zetawar.db.qe.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?us","?us",-471096328,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?g","?g",589440221,null),new cljs.core.Symbol(null,"?us-id","?us-id",1810841679,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?g","?g",589440221,null),new cljs.core.Keyword("game","unit-states","game/unit-states",-1461749553),new cljs.core.Symbol(null,"?us","?us",-471096328,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?us","?us",-471096328,null),new cljs.core.Keyword("unit-state","id","unit-state/id",1732520780),new cljs.core.Symbol(null,"?us-id","?us-id",1810841679,null)], null)], null),db,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([zetawar.db.e(game),unit_state_id], 0));
});
zetawar.game.to_action_type = (function zetawar$game$to_action_type(action_type_name){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"action.type","action.type",855879413,null),cljs.core.name(action_type_name));
});
zetawar.game.start_state = (function zetawar$game$start_state(unit_or_unit_type){
var unit_type = ((zetawar.game.unit_QMARK_(unit_or_unit_type))?new cljs.core.Keyword("unit","type","unit/type",1170646544).cljs$core$IFn$_invoke$arity$1(unit_or_unit_type):unit_or_unit_type);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(unit_type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unit-type","state-map","unit-type/state-map",-627625699),new cljs.core.Keyword("unit-state-map","start-state","unit-state-map/start-state",824516686)], null));
});
zetawar.game.built_state = (function zetawar$game$built_state(unit_or_unit_type){
var unit_type = ((zetawar.game.unit_QMARK_(unit_or_unit_type))?new cljs.core.Keyword("unit","type","unit/type",1170646544).cljs$core$IFn$_invoke$arity$1(unit_or_unit_type):unit_or_unit_type);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(unit_type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unit-type","state-map","unit-type/state-map",-627625699),new cljs.core.Keyword("unit-state-map","built-state","unit-state-map/built-state",-465310679)], null));
});
zetawar.game.next_state = (function zetawar$game$next_state(db,unit,action){
var transition_map = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("unit-state-transition","action-type","unit-state-transition/action-type",1486943669),new cljs.core.Keyword("unit-state-transition","new-state","unit-state-transition/new-state",1274069070)),new cljs.core.Keyword("unit-state","transitions","unit-state/transitions",-1006392465).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("unit","state","unit/state",-1991906543).cljs$core$IFn$_invoke$arity$1((function (){var G__35330 = db;
var G__35331 = zetawar.db.e(unit);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__35330,G__35331) : datascript.core.entity.call(null,G__35330,G__35331));
})()))));
return (transition_map.cljs$core$IFn$_invoke$arity$1 ? transition_map.cljs$core$IFn$_invoke$arity$1(action) : transition_map.call(null,action));
});
zetawar.game.checked_next_state = (function zetawar$game$checked_next_state(db,unit,action){
var new_state = zetawar.game.next_state(db,unit,action);
if(cljs.core.truth_(new_state)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No state transition from current state found for action",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-state","current-state",1048284452),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(unit,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unit","state","unit/state",-1991906543),new cljs.core.Keyword("unit-state","id","unit-state/id",1732520780)], null)),new cljs.core.Keyword(null,"action","action",-811238024),action], null));
}

return new_state;
});
zetawar.game.valid_moves = (function zetawar$game$valid_moves(db,game,unit){
var start = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unit","q","unit/q",675179613).cljs$core$IFn$_invoke$arity$1(unit),new cljs.core.Keyword("unit","r","unit/r",-492034562).cljs$core$IFn$_invoke$arity$1(unit)], null);
var u_faction_eid = zetawar.db.e(zetawar.game.unit_faction(db,unit));
var unit_type_eid = zetawar.db.e(new cljs.core.Keyword("unit","type","unit/type",1170646544).cljs$core$IFn$_invoke$arity$1(unit));
var armor_type = new cljs.core.Keyword("unit-type","armor-type","unit-type/armor-type",101248352).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("unit","type","unit/type",1170646544).cljs$core$IFn$_invoke$arity$1(unit));
var unit_movement = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(unit,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unit","type","unit/type",1170646544),new cljs.core.Keyword("unit-type","movement","unit-type/movement",-921915036)], null));
var unit_at = cljs.core.memoize((function (p1__35332_SHARP_,p2__35333_SHARP_){
return zetawar.game.unit_at(db,game,p1__35332_SHARP_,p2__35333_SHARP_);
}));
var terrain_type__GT_cost = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var G__35337 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?tt","?tt",-908445421,null),new cljs.core.Symbol(null,"?mc","?mc",-631190890,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?ut","?ut",1965659909,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?tt","?tt",-908445421,null),new cljs.core.Keyword("terrain-type","effects","terrain-type/effects",490191874),new cljs.core.Symbol(null,"?e","?e",-1194391683,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("terrain-effect","unit-type","terrain-effect/unit-type",1046397533),new cljs.core.Symbol(null,"?ut","?ut",1965659909,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("terrain-effect","movement-cost","terrain-effect/movement-cost",-1564991502),new cljs.core.Symbol(null,"?mc","?mc",-631190890,null)], null)], null);
var G__35338 = db;
var G__35339 = unit_type_eid;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__35337,G__35338,G__35339) : datascript.core.q.call(null,G__35337,G__35338,G__35339));
})());
var terrain_cost_at = cljs.core.memoize((function zetawar$game$valid_moves_$_terrain_cost_at(q,r){
var G__35340 = zetawar.game.terrain_at(db,game,q,r);
var G__35340__$1 = (((G__35340 == null))?null:new cljs.core.Keyword("terrain","type","terrain/type",-1187652655).cljs$core$IFn$_invoke$arity$1(G__35340));
var G__35340__$2 = (((G__35340__$1 == null))?null:zetawar.db.e(G__35340__$1));
if((G__35340__$2 == null)){
return null;
} else {
return (terrain_type__GT_cost.cljs$core$IFn$_invoke$arity$1 ? terrain_type__GT_cost.cljs$core$IFn$_invoke$arity$1(G__35340__$2) : terrain_type__GT_cost.call(null,G__35340__$2));
}
}));
var adjacent_costs = cljs.core.memoize((function zetawar$game$valid_moves_$_adjacent_costs(q,r){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p1__35334_SHARP_){
var temp__5823__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(terrain_cost_at,p1__35334_SHARP_);
if(cljs.core.truth_(temp__5823__auto__)){
var cost = temp__5823__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__35334_SHARP_,cost);
} else {
return null;
}
})),zetawar.hex.adjacents(q,r));
}));
var enemy_at_QMARK_ = cljs.core.memoize((function zetawar$game$valid_moves_$_enemy_at_QMARK_(q,r){
var G__35341 = unit_at(q,r);
var G__35341__$1 = (((G__35341 == null))?null:new cljs.core.Keyword("faction","_units","faction/_units",-227507819).cljs$core$IFn$_invoke$arity$1(G__35341));
var G__35341__$2 = (((G__35341__$1 == null))?null:zetawar.db.e(G__35341__$1));
if((G__35341__$2 == null)){
return null;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(G__35341__$2,u_faction_eid);
}
}));
var zoc_enemy_at_QMARK_ = cljs.core.memoize((function zetawar$game$valid_moves_$_zoc_enemy_at_QMARK_(q,r){
var temp__5823__auto__ = unit_at(q,r);
if(cljs.core.truth_(temp__5823__auto__)){
var other_unit = temp__5823__auto__;
var ou_faction_eid = zetawar.db.e(new cljs.core.Keyword("faction","_units","faction/_units",-227507819).cljs$core$IFn$_invoke$arity$1(other_unit));
var zoc_armor_types = new cljs.core.Keyword("unit-type","zoc-armor-types","unit-type/zoc-armor-types",887928037).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("unit","type","unit/type",1170646544).cljs$core$IFn$_invoke$arity$1(other_unit));
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(u_faction_eid,ou_faction_eid)) && (cljs.core.contains_QMARK_(zoc_armor_types,armor_type)));
} else {
return null;
}
}));
var adjacent_zoc_enemy_QMARK_ = cljs.core.memoize((function zetawar$game$valid_moves_$_adjacent_enemy_QMARK_(q,r){
return cljs.core.some((function (p1__35335_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(zoc_enemy_at_QMARK_,p1__35335_SHARP_);
}),zetawar.hex.adjacents(q,r));
}));
var expand_frontier = (function zetawar$game$valid_moves_$_expand_frontier(frontier,moves){
var G__35354 = frontier;
var vec__35355 = G__35354;
var seq__35356 = cljs.core.seq(vec__35355);
var first__35357 = cljs.core.first(seq__35356);
var seq__35356__$1 = cljs.core.next(seq__35356);
var vec__35358 = first__35357;
var vec__35361 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35358,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35361,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35361,(1),null);
var vec__35364 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35358,(1),null);
var frontier_cost = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35364,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35364,(1),null);
var remaining_frontier = seq__35356__$1;
var new_frontier = cljs.core.PersistentArrayMap.EMPTY;
var G__35354__$1 = G__35354;
var new_frontier__$1 = new_frontier;
while(true){
var vec__35387 = G__35354__$1;
var seq__35388 = cljs.core.seq(vec__35387);
var first__35389 = cljs.core.first(seq__35388);
var seq__35388__$1 = cljs.core.next(seq__35388);
var vec__35390 = first__35389;
var vec__35393 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35390,(0),null);
var q__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35393,(0),null);
var r__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35393,(1),null);
var vec__35396 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35390,(1),null);
var frontier_cost__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35396,(0),null);
var path__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35396,(1),null);
var remaining_frontier__$1 = seq__35388__$1;
var new_frontier__$2 = new_frontier__$1;
if(cljs.core.truth_(frontier_cost__$1)){
var remaining_movement = (unit_movement - frontier_cost__$1);
var terrain_costs = adjacent_costs(q__$1,r__$1);
var new_moves = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1(((function (G__35354__$1,new_frontier__$1,remaining_movement,terrain_costs,vec__35387,seq__35388,first__35389,seq__35388__$1,vec__35390,vec__35393,q__$1,r__$1,vec__35396,frontier_cost__$1,path__$1,remaining_frontier__$1,new_frontier__$2,G__35354,vec__35355,seq__35356,first__35357,seq__35356__$1,vec__35358,vec__35361,q,r,vec__35364,frontier_cost,path,remaining_frontier,new_frontier,start,u_faction_eid,unit_type_eid,armor_type,unit_movement,unit_at,terrain_type__GT_cost,terrain_cost_at,adjacent_costs,enemy_at_QMARK_,zoc_enemy_at_QMARK_,adjacent_zoc_enemy_QMARK_){
return (function (p__35399){
var vec__35400 = p__35399;
var q__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35400,(0),null);
var r__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35400,(1),null);
var terrain_cost = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35400,(2),null);
if(cljs.core.truth_((function (){var and__5043__auto__ = (function (){var or__5045__auto__ = new cljs.core.Keyword("game","move-through-friendly","game/move-through-friendly",1931049003).cljs$core$IFn$_invoke$arity$1(game);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.not(unit_at(q__$2,r__$2));
}
})();
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(enemy_at_QMARK_(q__$2,r__$2));
} else {
return and__5043__auto__;
}
})())){
var terrain_cost__$1 = (cljs.core.truth_(adjacent_zoc_enemy_QMARK_(q__$2,r__$2))?(function (){var x__5130__auto__ = terrain_cost;
var y__5131__auto__ = remaining_movement;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})():terrain_cost);
var new_move_cost = (frontier_cost__$1 + terrain_cost__$1);
if((((new_move_cost <= (function (){var G__35403 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q__$2,r__$2], null);
var G__35404 = unit_movement;
return (moves.cljs$core$IFn$_invoke$arity$2 ? moves.cljs$core$IFn$_invoke$arity$2(G__35403,G__35404) : moves.call(null,G__35403,G__35404));
})())) && ((new_move_cost <= (function (){var G__35405 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q__$2,r__$2], null);
var G__35406 = unit_movement;
return (new_frontier__$2.cljs$core$IFn$_invoke$arity$2 ? new_frontier__$2.cljs$core$IFn$_invoke$arity$2(G__35405,G__35406) : new_frontier__$2.call(null,G__35405,G__35406));
})())))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q__$2,r__$2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_move_cost,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q__$2,r__$2], null))], null)], null);
} else {
return null;
}
} else {
return null;
}
});})(G__35354__$1,new_frontier__$1,remaining_movement,terrain_costs,vec__35387,seq__35388,first__35389,seq__35388__$1,vec__35390,vec__35393,q__$1,r__$1,vec__35396,frontier_cost__$1,path__$1,remaining_frontier__$1,new_frontier__$2,G__35354,vec__35355,seq__35356,first__35357,seq__35356__$1,vec__35358,vec__35361,q,r,vec__35364,frontier_cost,path,remaining_frontier,new_frontier,start,u_faction_eid,unit_type_eid,armor_type,unit_movement,unit_at,terrain_type__GT_cost,terrain_cost_at,adjacent_costs,enemy_at_QMARK_,zoc_enemy_at_QMARK_,adjacent_zoc_enemy_QMARK_))
),terrain_costs);
var G__35639 = remaining_frontier__$1;
var G__35640 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_frontier__$2,new_moves);
G__35354__$1 = G__35639;
new_frontier__$1 = G__35640;
continue;
} else {
return new_frontier__$2;
}
break;
}
});
var frontier = cljs.core.PersistentArrayMap.createAsIfByAssoc([start,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY], null)]);
var moves = cljs.core.PersistentArrayMap.createAsIfByAssoc([start,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY], null)]);
while(true){
var new_frontier = expand_frontier(frontier,moves);
var new_moves = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(moves,new_frontier);
if(cljs.core.empty_QMARK_(new_frontier)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$1(((function (frontier,moves,new_frontier,new_moves,start,u_faction_eid,unit_type_eid,armor_type,unit_movement,unit_at,terrain_type__GT_cost,terrain_cost_at,adjacent_costs,enemy_at_QMARK_,zoc_enemy_at_QMARK_,adjacent_zoc_enemy_QMARK_,expand_frontier){
return (function (p1__35336_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(unit_at,cljs.core.first(p1__35336_SHARP_));
});})(frontier,moves,new_frontier,new_moves,start,u_faction_eid,unit_type_eid,armor_type,unit_movement,unit_at,terrain_type__GT_cost,terrain_cost_at,adjacent_costs,enemy_at_QMARK_,zoc_enemy_at_QMARK_,adjacent_zoc_enemy_QMARK_,expand_frontier))
),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (frontier,moves,new_frontier,new_moves,start,u_faction_eid,unit_type_eid,armor_type,unit_movement,unit_at,terrain_type__GT_cost,terrain_cost_at,adjacent_costs,enemy_at_QMARK_,zoc_enemy_at_QMARK_,adjacent_zoc_enemy_QMARK_,expand_frontier){
return (function (p__35414){
var vec__35415 = p__35414;
var dest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35415,(0),null);
var vec__35418 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35415,(1),null);
var cost = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35418,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35418,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"from","from",1815293044),start,new cljs.core.Keyword(null,"to","to",192099007),dest,new cljs.core.Keyword(null,"cost","cost",-1094861735),cost,new cljs.core.Keyword(null,"path","path",-188191168),path], null);
});})(frontier,moves,new_frontier,new_moves,start,u_faction_eid,unit_type_eid,armor_type,unit_movement,unit_at,terrain_type__GT_cost,terrain_cost_at,adjacent_costs,enemy_at_QMARK_,zoc_enemy_at_QMARK_,adjacent_zoc_enemy_QMARK_,expand_frontier))
)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(moves,start));
} else {
var G__35644 = new_frontier;
var G__35645 = new_moves;
frontier = G__35644;
moves = G__35645;
continue;
}
break;
}
});
zetawar.game.valid_destinations = (function zetawar$game$valid_destinations(db,game,unit){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"to","to",192099007)),zetawar.game.valid_moves(db,game,unit));
});
zetawar.game.valid_destination_QMARK_ = (function zetawar$game$valid_destination_QMARK_(db,game,unit,q,r){
return cljs.core.contains_QMARK_(zetawar.game.valid_destinations(db,game,unit),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,r], null));
});
zetawar.game.check_valid_destination = (function zetawar$game$check_valid_destination(db,game,unit,q,r){
if(zetawar.game.valid_destination_QMARK_(db,game,unit,q,r)){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Specified destination is not a valid move",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"q","q",689001697),q,new cljs.core.Keyword(null,"r","r",-471384190),r], null));
}
});
zetawar.game.check_can_move = (function zetawar$game$check_can_move(db,game,unit){
zetawar.game.check_unit_current(db,game,unit);

if(cljs.core.truth_(new cljs.core.Keyword("unit","capturing","unit/capturing",247751174).cljs$core$IFn$_invoke$arity$1(unit))){
throw zetawar.game.unit_ex("Unit cannot move while capturing",unit);
} else {
}

return zetawar.game.checked_next_state(db,unit,new cljs.core.Keyword("action.type","move-unit","action.type/move-unit",1139424335));
});
zetawar.game.can_move_QMARK_ = (function zetawar$game$can_move_QMARK_(db,game,unit){
try{zetawar.game.check_can_move(db,game,unit);

return true;
}catch (e35421){var ex = e35421;
return false;
}});
zetawar.game.teleport_tx = (function zetawar$game$teleport_tx(db,game,from_q,from_r,to_q,to_r){
var unit = zetawar.game.checked_unit_at(db,game,from_q,from_r);
var terrain = zetawar.game.checked_terrain_at(db,game,to_q,to_r);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",-1388397098),zetawar.db.e(unit),new cljs.core.Keyword("unit","game-pos-idx","unit/game-pos-idx",2034098862),zetawar.game.game_pos_idx(game,to_q,to_r),new cljs.core.Keyword("unit","q","unit/q",675179613),to_q,new cljs.core.Keyword("unit","r","unit/r",-492034562),to_r,new cljs.core.Keyword("unit","terrain","unit/terrain",692687601),zetawar.db.e(terrain)], null)], null);
});
/**
 * Returns a transaction that updates the unit's location and move count.
 */
zetawar.game.move_tx = (function zetawar$game$move_tx(var_args){
var G__35423 = arguments.length;
switch (G__35423) {
case 4:
return zetawar.game.move_tx.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 6:
return zetawar.game.move_tx.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zetawar.game.move_tx.cljs$core$IFn$_invoke$arity$4 = (function (db,game,unit,to_terrain){
var new_move_count = (new cljs.core.Keyword("unit","move-count","unit/move-count",1192826036).cljs$core$IFn$_invoke$arity$2(unit,(0)) + (1));
var vec__35424 = zetawar.game.terrain_hex(to_terrain);
var to_q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35424,(0),null);
var to_r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35424,(1),null);
var new_state = zetawar.game.check_can_move(db,game,unit);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("db","id","db/id",-1388397098),zetawar.db.e(unit),new cljs.core.Keyword("unit","game-pos-idx","unit/game-pos-idx",2034098862),zetawar.game.game_pos_idx(game,to_q,to_r),new cljs.core.Keyword("unit","q","unit/q",675179613),to_q,new cljs.core.Keyword("unit","r","unit/r",-492034562),to_r,new cljs.core.Keyword("unit","terrain","unit/terrain",692687601),zetawar.db.e(to_terrain),new cljs.core.Keyword("unit","move-count","unit/move-count",1192826036),new_move_count,new cljs.core.Keyword("unit","state","unit/state",-1991906543),zetawar.db.e(new_state)], null)], null);
}));

(zetawar.game.move_tx.cljs$core$IFn$_invoke$arity$6 = (function (db,game,from_q,from_r,to_q,to_r){
var unit = zetawar.game.checked_unit_at(db,game,from_q,from_r);
var terrain = zetawar.game.checked_terrain_at(db,game,to_q,to_r);
return zetawar.game.move_tx.cljs$core$IFn$_invoke$arity$4(db,game,unit,terrain);
}));

(zetawar.game.move_tx.cljs$lang$maxFixedArity = 6);

zetawar.game.move_BANG_ = (function zetawar$game$move_BANG_(conn,game_id,from_q,from_r,to_q,to_r){
var db = cljs.core.deref(conn);
var game = zetawar.game.game_by_id(db,game_id);
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,zetawar.game.move_tx.cljs$core$IFn$_invoke$arity$6(db,game,from_q,from_r,to_q,to_r));
});
zetawar.game.check_can_attack = (function zetawar$game$check_can_attack(db,game,unit){
zetawar.game.check_unit_current(db,game,unit);

if(cljs.core.truth_(new cljs.core.Keyword("unit","capturing","unit/capturing",247751174).cljs$core$IFn$_invoke$arity$1(unit))){
throw zetawar.game.unit_ex("Unit cannot attack while capturing",unit);
} else {
}

return zetawar.game.checked_next_state(db,unit,new cljs.core.Keyword("action.type","attack-unit","action.type/attack-unit",2088859929));
});
zetawar.game.can_attack_QMARK_ = (function zetawar$game$can_attack_QMARK_(db,game,unit){
try{zetawar.game.check_can_attack(db,game,unit);

return true;
}catch (e35427){var ex = e35427;
return false;
}});
zetawar.game.check_in_range = (function zetawar$game$check_in_range(db,attacker,defender){
var distance = zetawar.hex.distance(new cljs.core.Keyword("unit","q","unit/q",675179613).cljs$core$IFn$_invoke$arity$1(attacker),new cljs.core.Keyword("unit","r","unit/r",-492034562).cljs$core$IFn$_invoke$arity$1(attacker),new cljs.core.Keyword("unit","q","unit/q",675179613).cljs$core$IFn$_invoke$arity$1(defender),new cljs.core.Keyword("unit","r","unit/r",-492034562).cljs$core$IFn$_invoke$arity$1(defender));
var min_range = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(attacker,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unit","type","unit/type",1170646544),new cljs.core.Keyword("unit-type","min-range","unit-type/min-range",1375530394)], null));
var max_range = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(attacker,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unit","type","unit/type",1170646544),new cljs.core.Keyword("unit-type","max-range","unit-type/max-range",1175023596)], null));
if((((distance < min_range)) || ((distance > max_range)))){
throw zetawar.game.unit_ex("Targeted unit is not in range",attacker);
} else {
return null;
}
});
zetawar.game.in_range_QMARK_ = (function zetawar$game$in_range_QMARK_(db,attacker,defender){
try{zetawar.game.check_in_range(db,attacker,defender);

return true;
}catch (e35428){var ex = e35428;
return false;
}});
zetawar.game.attack_damage = (function zetawar$game$attack_damage(db,game,attacker,defender,attacker_terrain,defender_terrain){
var defender_armor_type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(defender,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unit","type","unit/type",1170646544),new cljs.core.Keyword("unit-type","armor-type","unit-type/armor-type",101248352)], null));
var vec__35433 = zetawar.game.unit_hex(attacker);
var attacker_q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35433,(0),null);
var attacker_r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35433,(1),null);
var vec__35436 = zetawar.game.unit_hex(defender);
var defender_q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35436,(0),null);
var defender_r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35436,(1),null);
var attack_strength = zetawar.util.oonly((function (){var G__35439 = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?s","?s",456183954,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?u","?u",749886731,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?u","?u",749886731,null),new cljs.core.Keyword("unit","type","unit/type",1170646544),new cljs.core.Symbol(null,"?ut","?ut",1965659909,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?ut","?ut",1965659909,null),new cljs.core.Keyword("unit-type","strengths","unit-type/strengths",2113838735),new cljs.core.Symbol(null,"?us","?us",-471096328,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?us","?us",-471096328,null),new cljs.core.Keyword("unit-strength","armor-type","unit-strength/armor-type",-1492629529),new cljs.core.Symbol(null,"?at","?at",-1287664470,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?us","?us",-471096328,null),new cljs.core.Keyword("unit-strength","attack","unit-strength/attack",-474082794),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null)], null);
var G__35440 = db;
var G__35441 = zetawar.db.e(attacker);
var G__35442 = defender_armor_type;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$4 ? datascript.core.q.cljs$core$IFn$_invoke$arity$4(G__35439,G__35440,G__35441,G__35442) : datascript.core.q.call(null,G__35439,G__35440,G__35441,G__35442));
})());
var armor = (cljs.core.truth_(new cljs.core.Keyword("unit","capturing","unit/capturing",247751174).cljs$core$IFn$_invoke$arity$1(defender))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(defender,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unit","type","unit/type",1170646544),new cljs.core.Keyword("unit-type","capturing-armor","unit-type/capturing-armor",269152958)], null)):cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(defender,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unit","type","unit/type",1170646544),new cljs.core.Keyword("unit-type","armor","unit-type/armor",-1309357770)], null)));
var attack_bonus = zetawar.util.oonly((function (){var G__35443 = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?a","?a",1314302913,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?u","?u",749886731,null),new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?u","?u",749886731,null),new cljs.core.Keyword("unit","type","unit/type",1170646544),new cljs.core.Symbol(null,"?ut","?ut",1965659909,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.Keyword("terrain","type","terrain/type",-1187652655),new cljs.core.Symbol(null,"?tt","?tt",-908445421,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?tt","?tt",-908445421,null),new cljs.core.Keyword("terrain-type","effects","terrain-type/effects",490191874),new cljs.core.Symbol(null,"?e","?e",-1194391683,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("terrain-effect","unit-type","terrain-effect/unit-type",1046397533),new cljs.core.Symbol(null,"?ut","?ut",1965659909,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("terrain-effect","attack-bonus","terrain-effect/attack-bonus",-2130995456),new cljs.core.Symbol(null,"?a","?a",1314302913,null)], null)], null);
var G__35444 = db;
var G__35445 = zetawar.db.e(attacker);
var G__35446 = zetawar.db.e(attacker_terrain);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$4 ? datascript.core.q.cljs$core$IFn$_invoke$arity$4(G__35443,G__35444,G__35445,G__35446) : datascript.core.q.call(null,G__35443,G__35444,G__35445,G__35446));
})());
var armor_bonus = zetawar.util.oonly((function (){var G__35447 = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?d","?d",-1851543854,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?u","?u",749886731,null),new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?u","?u",749886731,null),new cljs.core.Keyword("unit","type","unit/type",1170646544),new cljs.core.Symbol(null,"?ut","?ut",1965659909,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.Keyword("terrain","type","terrain/type",-1187652655),new cljs.core.Symbol(null,"?tt","?tt",-908445421,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?tt","?tt",-908445421,null),new cljs.core.Keyword("terrain-type","effects","terrain-type/effects",490191874),new cljs.core.Symbol(null,"?e","?e",-1194391683,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("terrain-effect","unit-type","terrain-effect/unit-type",1046397533),new cljs.core.Symbol(null,"?ut","?ut",1965659909,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("terrain-effect","armor-bonus","terrain-effect/armor-bonus",-1722771191),new cljs.core.Symbol(null,"?d","?d",-1851543854,null)], null)], null);
var G__35448 = db;
var G__35449 = zetawar.db.e(defender);
var G__35450 = zetawar.db.e(defender_terrain);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$4 ? datascript.core.q.cljs$core$IFn$_invoke$arity$4(G__35447,G__35448,G__35449,G__35450) : datascript.core.q.call(null,G__35447,G__35448,G__35449,G__35450));
})());
var attack_hexes = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(zetawar.game.terrain_hex),new cljs.core.Keyword("unit","attacked-from","unit/attacked-from",1625408364).cljs$core$IFn$_invoke$arity$1(defender));
var ranged_attack_hexes = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__35429_SHARP_){
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$4(zetawar.hex.distance,defender_q,defender_r,p1__35429_SHARP_) > (1));
})),attack_hexes);
var adjacent_attack_hexes = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__35430_SHARP_){
var and__5043__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(zetawar.hex.adjacent_QMARK_,attacker_q,attacker_r,p1__35430_SHARP_);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(zetawar.hex.adjacent_QMARK_,defender_q,defender_r,p1__35430_SHARP_);
} else {
return and__5043__auto__;
}
})),attack_hexes);
var opposite_attack_hexes = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__35431_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(zetawar.hex.opposite_QMARK_,attacker_q,attacker_r,defender_q,defender_r,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__35431_SHARP_], 0));
})),attack_hexes);
var flanking_attack_hexes = clojure.set.difference.cljs$core$IFn$_invoke$arity$variadic(attack_hexes,ranged_attack_hexes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([adjacent_attack_hexes,opposite_attack_hexes], 0));
var gang_up_bonus = ((((cljs.core.count(ranged_attack_hexes) * new cljs.core.Keyword("game","ranged-attack-bonus","game/ranged-attack-bonus",-1896137306).cljs$core$IFn$_invoke$arity$1(game)) + (cljs.core.count(adjacent_attack_hexes) * new cljs.core.Keyword("game","adjacent-attack-bonus","game/adjacent-attack-bonus",-151670683).cljs$core$IFn$_invoke$arity$1(game))) + (cljs.core.count(flanking_attack_hexes) * new cljs.core.Keyword("game","flanking-attack-bonus","game/flanking-attack-bonus",1533163755).cljs$core$IFn$_invoke$arity$1(game))) + (cljs.core.count(opposite_attack_hexes) * new cljs.core.Keyword("game","opposite-attack-bonus","game/opposite-attack-bonus",-2070868646).cljs$core$IFn$_invoke$arity$1(game)));
var p = (function (){var x__5133__auto__ = (function (){var x__5130__auto__ = (0.5 + (0.05 * (((attack_strength + attack_bonus) - (armor + armor_bonus)) + gang_up_bonus)));
var y__5131__auto__ = (0);
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})();
var y__5134__auto__ = (1);
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
return Math.round((cljs.core.truth_(new cljs.core.Keyword("game","stochastic-damage","game/stochastic-damage",527007533).cljs$core$IFn$_invoke$arity$1(game))?(function (){var hits = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__35432_SHARP_){
return (p1__35432_SHARP_ < p);
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2(((6) * new cljs.core.Keyword("unit","count","unit/count",2144714993).cljs$core$IFn$_invoke$arity$1(attacker)),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.rand.cljs$core$IFn$_invoke$arity$0();
})))));
return cljs.core.quot(hits,(6));
})():(new cljs.core.Keyword("unit","count","unit/count",2144714993).cljs$core$IFn$_invoke$arity$1(attacker) * p)));
});
zetawar.game.battle_damage = (function zetawar$game$battle_damage(var_args){
var G__35452 = arguments.length;
switch (G__35452) {
case 4:
return zetawar.game.battle_damage.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 6:
return zetawar.game.battle_damage.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zetawar.game.battle_damage.cljs$core$IFn$_invoke$arity$4 = (function (db,game,attacker,defender){
var attacker_terrain = new cljs.core.Keyword("unit","terrain","unit/terrain",692687601).cljs$core$IFn$_invoke$arity$1(attacker);
var defender_terrain = new cljs.core.Keyword("unit","terrain","unit/terrain",692687601).cljs$core$IFn$_invoke$arity$1(defender);
var attack_count = new cljs.core.Keyword("unit","attack-count","unit/attack-count",635284832).cljs$core$IFn$_invoke$arity$2(attacker,(0));
var defender_damage = zetawar.game.attack_damage(db,game,attacker,defender,attacker_terrain,defender_terrain);
var attacker_damage = (cljs.core.truth_(zetawar.game.in_range_QMARK_(db,defender,attacker))?zetawar.game.attack_damage(db,game,defender,attacker,defender_terrain,attacker_terrain):(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__5133__auto__ = new cljs.core.Keyword("unit","count","unit/count",2144714993).cljs$core$IFn$_invoke$arity$1(attacker);
var y__5134__auto__ = attacker_damage;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})(),(function (){var x__5133__auto__ = new cljs.core.Keyword("unit","count","unit/count",2144714993).cljs$core$IFn$_invoke$arity$1(defender);
var y__5134__auto__ = defender_damage;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})()], null);
}));

(zetawar.game.battle_damage.cljs$core$IFn$_invoke$arity$6 = (function (db,game,attacker_q,attacker_r,defender_q,defender_r){
var attacker = zetawar.game.checked_unit_at(db,game,attacker_q,attacker_r);
var defender = zetawar.game.checked_unit_at(db,game,defender_q,defender_r);
return zetawar.game.battle_damage.cljs$core$IFn$_invoke$arity$4(db,game,attacker,defender);
}));

(zetawar.game.battle_damage.cljs$lang$maxFixedArity = 6);

zetawar.game.battle_tx = (function zetawar$game$battle_tx(var_args){
var G__35454 = arguments.length;
switch (G__35454) {
case 6:
return zetawar.game.battle_tx.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 8:
return zetawar.game.battle_tx.cljs$core$IFn$_invoke$arity$8((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zetawar.game.battle_tx.cljs$core$IFn$_invoke$arity$6 = (function (db,game,attacker,defender,attacker_damage,defender_damage){
var new_state = zetawar.game.check_can_attack(db,game,attacker);
zetawar.game.check_in_range(db,attacker,defender);

var attacker_terrain = new cljs.core.Keyword("unit","terrain","unit/terrain",692687601).cljs$core$IFn$_invoke$arity$1(attacker);
var defender_terrain = new cljs.core.Keyword("unit","terrain","unit/terrain",692687601).cljs$core$IFn$_invoke$arity$1(defender);
var attack_count = new cljs.core.Keyword("unit","attack-count","unit/attack-count",635284832).cljs$core$IFn$_invoke$arity$2(attacker,(0));
var attacker_count = new cljs.core.Keyword("unit","count","unit/count",2144714993).cljs$core$IFn$_invoke$arity$1(attacker);
var defender_count = new cljs.core.Keyword("unit","count","unit/count",2144714993).cljs$core$IFn$_invoke$arity$1(defender);
var G__35455 = cljs.core.PersistentVector.EMPTY;
var G__35455__$1 = (((defender_count > defender_damage))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__35455,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),zetawar.db.e(defender),new cljs.core.Keyword("unit","count","unit/count",2144714993),(defender_count - defender_damage),new cljs.core.Keyword("unit","attacked-count","unit/attacked-count",752022709),(new cljs.core.Keyword("unit","attacked-count","unit/attacked-count",752022709).cljs$core$IFn$_invoke$arity$1(defender) + (1)),new cljs.core.Keyword("unit","attacked-from","unit/attacked-from",1625408364),zetawar.db.e(attacker_terrain)], null)):G__35455);
var G__35455__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(defender_count,defender_damage))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__35455__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),zetawar.db.e(defender)], null)):G__35455__$1);
var G__35455__$3 = (((attacker_count > attacker_damage))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__35455__$2,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),zetawar.db.e(attacker),new cljs.core.Keyword("unit","count","unit/count",2144714993),(attacker_count - attacker_damage),new cljs.core.Keyword("unit","attack-count","unit/attack-count",635284832),(attack_count + (1)),new cljs.core.Keyword("unit","state","unit/state",-1991906543),zetawar.db.e(new_state)], null)):G__35455__$2);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attacker_count,attacker_damage)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__35455__$3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),zetawar.db.e(attacker)], null));
} else {
return G__35455__$3;
}
}));

(zetawar.game.battle_tx.cljs$core$IFn$_invoke$arity$8 = (function (db,game,attacker_q,attacker_r,defender_q,defender_r,attacker_damage,defender_damage){
var attacker = zetawar.game.checked_unit_at(db,game,attacker_q,attacker_r);
var defender = zetawar.game.checked_unit_at(db,game,defender_q,defender_r);
return zetawar.game.battle_tx.cljs$core$IFn$_invoke$arity$6(db,game,attacker,defender,attacker_damage,defender_damage);
}));

(zetawar.game.battle_tx.cljs$lang$maxFixedArity = 8);

zetawar.game.attack_tx = (function zetawar$game$attack_tx(var_args){
var G__35457 = arguments.length;
switch (G__35457) {
case 4:
return zetawar.game.attack_tx.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 6:
return zetawar.game.attack_tx.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zetawar.game.attack_tx.cljs$core$IFn$_invoke$arity$4 = (function (db,game,attacker,defender){
zetawar.game.check_can_attack(db,game,attacker);

zetawar.game.check_in_range(db,attacker,defender);

return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(zetawar.game.battle_tx,db,game,attacker,defender,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([zetawar.game.battle_damage.cljs$core$IFn$_invoke$arity$4(db,game,attacker,defender)], 0));
}));

(zetawar.game.attack_tx.cljs$core$IFn$_invoke$arity$6 = (function (db,game,attacker_q,attacker_r,defender_q,defender_r){
var attacker = zetawar.game.checked_unit_at(db,game,attacker_q,attacker_r);
var defender = zetawar.game.checked_unit_at(db,game,defender_q,defender_r);
return zetawar.game.attack_tx.cljs$core$IFn$_invoke$arity$4(db,game,attacker,defender);
}));

(zetawar.game.attack_tx.cljs$lang$maxFixedArity = 6);

zetawar.game.attack_BANG_ = (function zetawar$game$attack_BANG_(conn,game_id,attacker_q,attacker_r,defender_q,defender_r){
var db = cljs.core.deref(conn);
var game = zetawar.game.game_by_id(db,game_id);
var tx = zetawar.game.attack_tx.cljs$core$IFn$_invoke$arity$6(db,game,attacker_q,attacker_r,defender_q,defender_r);
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,tx);
});
zetawar.game.check_repairable = (function zetawar$game$check_repairable(db,game,unit){
if((new cljs.core.Keyword("unit","count","unit/count",2144714993).cljs$core$IFn$_invoke$arity$1(unit) >= new cljs.core.Keyword("game","max-count-per-unit","game/max-count-per-unit",1362901090).cljs$core$IFn$_invoke$arity$1(game))){
throw zetawar.game.unit_ex("Unit is already fully repaired",unit);
} else {
}

return unit;
});
zetawar.game.repairable_QMARK_ = (function zetawar$game$repairable_QMARK_(db,game,unit){
try{zetawar.game.check_repairable(db,game,unit);

return true;
}catch (e35458){var ex = e35458;
return false;
}});
zetawar.game.check_can_repair = (function zetawar$game$check_can_repair(db,game,unit){
zetawar.game.check_unit_current(db,game,unit);

if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword("game","self-repair","game/self-repair",1572141403).cljs$core$IFn$_invoke$arity$1(game);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return zetawar.game.on_owned_base_QMARK_(db,game,unit);
}
})())){
} else {
throw zetawar.game.game_ex("Unit self repair is not allowed",game);
}

if(cljs.core.truth_(new cljs.core.Keyword("unit","capturing","unit/capturing",247751174).cljs$core$IFn$_invoke$arity$1(unit))){
throw zetawar.game.unit_ex("Unit cannot make repairs while capturing",unit);
} else {
}

zetawar.game.check_repairable(db,game,unit);

return zetawar.game.checked_next_state(db,unit,new cljs.core.Keyword("action.type","repair-unit","action.type/repair-unit",2009749852));
});
zetawar.game.can_repair_QMARK_ = (function zetawar$game$can_repair_QMARK_(db,game,unit){
try{zetawar.game.check_can_repair(db,game,unit);

return true;
}catch (e35459){var ex = e35459;
return false;
}});
/**
 * Returns a transaction that increments unit count and sets the unit repaired
 *   flag to true.
 */
zetawar.game.repair_tx = (function zetawar$game$repair_tx(var_args){
var G__35461 = arguments.length;
switch (G__35461) {
case 3:
return zetawar.game.repair_tx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return zetawar.game.repair_tx.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zetawar.game.repair_tx.cljs$core$IFn$_invoke$arity$3 = (function (db,game,unit){
var new_state = zetawar.game.check_can_repair(db,game,unit);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),zetawar.db.e(unit),new cljs.core.Keyword("unit","count","unit/count",2144714993),(function (){var x__5133__auto__ = new cljs.core.Keyword("game","max-count-per-unit","game/max-count-per-unit",1362901090).cljs$core$IFn$_invoke$arity$1(game);
var y__5134__auto__ = (new cljs.core.Keyword("unit","count","unit/count",2144714993).cljs$core$IFn$_invoke$arity$1(unit) + cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(unit,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unit","type","unit/type",1170646544),new cljs.core.Keyword("unit-type","repair","unit-type/repair",1154037365)], null)));
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})(),new cljs.core.Keyword("unit","repaired","unit/repaired",460557471),true,new cljs.core.Keyword("unit","state","unit/state",-1991906543),zetawar.db.e(new_state)], null)], null);
}));

(zetawar.game.repair_tx.cljs$core$IFn$_invoke$arity$4 = (function (db,game,q,r){
var unit = zetawar.game.checked_unit_at(db,game,q,r);
return zetawar.game.repair_tx.cljs$core$IFn$_invoke$arity$3(db,game,unit);
}));

(zetawar.game.repair_tx.cljs$lang$maxFixedArity = 4);

zetawar.game.repair_BANG_ = (function zetawar$game$repair_BANG_(conn,game_id,q,r){
var db = cljs.core.deref(conn);
var game = zetawar.game.game_by_id(db,game_id);
var tx = zetawar.game.repair_tx.cljs$core$IFn$_invoke$arity$4(db,game,q,r);
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,tx);
});
zetawar.game.check_can_field_repair = (function zetawar$game$check_can_field_repair(db,game,unit){
zetawar.game.check_unit_current(db,game,unit);

if(cljs.core.truth_(new cljs.core.Keyword("unit","capturing","unit/capturing",247751174).cljs$core$IFn$_invoke$arity$1(unit))){
throw zetawar.game.unit_ex("Unit cannot make repairs while capturing",unit);
} else {
}

if(cljs.core.empty_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(unit,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unit","type","unit/type",1170646544),new cljs.core.Keyword("unit-type","can-repair","unit-type/can-repair",1128696439)], null)))){
throw zetawar.game.unit_ex("Unit cannot repair other units",unit);
} else {
}

return zetawar.game.checked_next_state(db,unit,new cljs.core.Keyword("action.type","field-repair-unit","action.type/field-repair-unit",162631713));
});
zetawar.game.can_field_repair_QMARK_ = (function zetawar$game$can_field_repair_QMARK_(db,game,unit){
try{zetawar.game.check_can_field_repair(db,game,unit);

return true;
}catch (e35462){var ex = e35462;
return false;
}});
zetawar.game.check_has_repairable_armor_type = (function zetawar$game$check_has_repairable_armor_type(db,game,repairer,target){
var possible_repair_types = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(repairer,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unit","type","unit/type",1170646544),new cljs.core.Keyword("unit-type","can-repair","unit-type/can-repair",1128696439)], null));
var goal_repair_type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(target,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unit","type","unit/type",1170646544),new cljs.core.Keyword("unit-type","armor-type","unit-type/armor-type",101248352)], null));
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([goal_repair_type]),possible_repair_types))){
} else {
throw zetawar.game.unit_ex("Armor types are not compatible",repairer);
}

return repairer;
});
zetawar.game.has_repairable_armor_type_QMARK_ = (function zetawar$game$has_repairable_armor_type_QMARK_(db,game,repairer,target){
try{zetawar.game.check_has_repairable_armor_type(db,game,repairer,target);

return true;
}catch (e35463){var ex = e35463;
return false;
}});
zetawar.game.field_repair_tx = (function zetawar$game$field_repair_tx(var_args){
var G__35465 = arguments.length;
switch (G__35465) {
case 4:
return zetawar.game.field_repair_tx.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 6:
return zetawar.game.field_repair_tx.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zetawar.game.field_repair_tx.cljs$core$IFn$_invoke$arity$4 = (function (db,game,repairer,target){
var new_state = zetawar.game.check_can_field_repair(db,game,repairer);
zetawar.game.check_in_range(db,repairer,target);

zetawar.game.check_repairable(db,game,target);

zetawar.game.check_has_repairable_armor_type(db,game,repairer,target);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),zetawar.db.e(target),new cljs.core.Keyword("unit","count","unit/count",2144714993),(function (){var x__5133__auto__ = new cljs.core.Keyword("game","max-count-per-unit","game/max-count-per-unit",1362901090).cljs$core$IFn$_invoke$arity$1(game);
var y__5134__auto__ = (new cljs.core.Keyword("unit","count","unit/count",2144714993).cljs$core$IFn$_invoke$arity$1(target) + cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(repairer,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unit","type","unit/type",1170646544),new cljs.core.Keyword("unit-type","repair","unit-type/repair",1154037365)], null)));
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})()], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),zetawar.db.e(repairer),new cljs.core.Keyword("unit","state","unit/state",-1991906543),zetawar.db.e(new_state)], null)], null);
}));

(zetawar.game.field_repair_tx.cljs$core$IFn$_invoke$arity$6 = (function (db,game,q1,r1,q2,r2){
var repairer = zetawar.game.checked_unit_at(db,game,q1,r1);
var target = zetawar.game.checked_unit_at(db,game,q2,r2);
return zetawar.game.field_repair_tx.cljs$core$IFn$_invoke$arity$4(db,game,repairer,target);
}));

(zetawar.game.field_repair_tx.cljs$lang$maxFixedArity = 6);

zetawar.game.check_capturable = (function zetawar$game$check_capturable(db,game,unit,terrain){
zetawar.game.check_unit_current(db,game,unit);

if(cljs.core.truth_(new cljs.core.Keyword("unit-type","can-capture","unit-type/can-capture",1840854852).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("unit","type","unit/type",1170646544).cljs$core$IFn$_invoke$arity$1(unit)))){
} else {
throw zetawar.game.unit_ex("Unit does not have the ability to capture",unit);
}

if(cljs.core.truth_((function (){var and__5043__auto__ = terrain;
if(cljs.core.truth_(and__5043__auto__)){
return zetawar.game.base_QMARK_(terrain);
} else {
return and__5043__auto__;
}
})())){
} else {
throw zetawar.game.unit_ex("Unit unit is not on a base",unit);
}

if(cljs.core.truth_(new cljs.core.Keyword("unit","capturing","unit/capturing",247751174).cljs$core$IFn$_invoke$arity$1(unit))){
throw zetawar.game.unit_ex("Unit is already caturing",unit);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(zetawar.db.e(zetawar.game.unit_faction(db,unit)),(function (){var G__35466 = terrain;
var G__35466__$1 = (((G__35466 == null))?null:new cljs.core.Keyword("terrain","owner","terrain/owner",1031873140).cljs$core$IFn$_invoke$arity$1(G__35466));
if((G__35466__$1 == null)){
return null;
} else {
return zetawar.db.e(G__35466__$1);
}
})())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Base is already owned by current faction",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"q","q",689001697),new cljs.core.Keyword("terrain","q","terrain/q",2698702).cljs$core$IFn$_invoke$arity$1(terrain),new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword("terrain","r","terrain/r",-1753264147).cljs$core$IFn$_invoke$arity$1(terrain)], null));
} else {
}

return zetawar.game.checked_next_state(db,unit,new cljs.core.Keyword("action.type","capture-base","action.type/capture-base",1331641506));
});
zetawar.game.can_capture_QMARK_ = (function zetawar$game$can_capture_QMARK_(db,game,unit,terrain){
try{zetawar.game.check_capturable(db,game,unit,terrain);

return true;
}catch (e35467){var ex = e35467;
return false;
}});
/**
 * Returns a transaction that sets the unit capturing flag and capture round.
 */
zetawar.game.capture_tx = (function zetawar$game$capture_tx(var_args){
var G__35469 = arguments.length;
switch (G__35469) {
case 3:
return zetawar.game.capture_tx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return zetawar.game.capture_tx.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zetawar.game.capture_tx.cljs$core$IFn$_invoke$arity$3 = (function (db,game,unit){
var base = zetawar.game.base_at(db,game,new cljs.core.Keyword("unit","q","unit/q",675179613).cljs$core$IFn$_invoke$arity$1(unit),new cljs.core.Keyword("unit","r","unit/r",-492034562).cljs$core$IFn$_invoke$arity$1(unit));
var round = new cljs.core.Keyword("game","round","game/round",2008373466).cljs$core$IFn$_invoke$arity$1(game);
var new_state = zetawar.game.check_capturable(db,game,unit,base);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),zetawar.db.e(unit),new cljs.core.Keyword("unit","capturing","unit/capturing",247751174),true,new cljs.core.Keyword("unit","capture-round","unit/capture-round",-1153071298),(round + (1)),new cljs.core.Keyword("unit","state","unit/state",-1991906543),zetawar.db.e(new_state)], null)], null);
}));

(zetawar.game.capture_tx.cljs$core$IFn$_invoke$arity$4 = (function (db,game,q,r){
var unit = zetawar.game.checked_unit_at(db,game,q,r);
return zetawar.game.capture_tx.cljs$core$IFn$_invoke$arity$3(db,game,unit);
}));

(zetawar.game.capture_tx.cljs$lang$maxFixedArity = 4);

zetawar.game.capture_BANG_ = (function zetawar$game$capture_BANG_(conn,game_id,q,r){
var db = cljs.core.deref(conn);
var game = zetawar.game.game_by_id(db,game_id);
var tx = zetawar.game.capture_tx.cljs$core$IFn$_invoke$arity$4(db,game,q,r);
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,tx);
});
zetawar.game.check_unoccupied = (function zetawar$game$check_unoccupied(db,game,q,r){
var unit = zetawar.game.unit_at(db,game,q,r);
if(cljs.core.truth_(unit)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Base is occupied",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"q","q",689001697),q,new cljs.core.Keyword(null,"r","r",-471384190),r], null));
} else {
return null;
}
});
zetawar.game.unoccupied_QMARK_ = (function zetawar$game$unoccupied_QMARK_(db,game,q,r){
try{zetawar.game.check_unoccupied(db,game,q,r);

return true;
}catch (e35470){var ex = e35470;
return false;
}});
/**
 * Returns a transaction that creates a new unit and updates faction credits.
 */
zetawar.game.build_tx = (function zetawar$game$build_tx(var_args){
var G__35472 = arguments.length;
switch (G__35472) {
case 5:
return zetawar.game.build_tx.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 4:
return zetawar.game.build_tx.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zetawar.game.build_tx.cljs$core$IFn$_invoke$arity$5 = (function (db,game,q,r,unit_type_id){
var base = zetawar.game.checked_base_at(db,game,q,r);
return zetawar.game.build_tx.cljs$core$IFn$_invoke$arity$4(db,game,base,unit_type_id);
}));

(zetawar.game.build_tx.cljs$core$IFn$_invoke$arity$4 = (function (db,game,base,unit_type_id){
var unit_type = zetawar.db.find_by.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("unit-type","id","unit-type/id",-865738639),unit_type_id);
var cur_faction = new cljs.core.Keyword("game","current-faction","game/current-faction",-1129931374).cljs$core$IFn$_invoke$arity$1(game);
var credits = new cljs.core.Keyword("faction","credits","faction/credits",-232627472).cljs$core$IFn$_invoke$arity$1(cur_faction);
var cost = new cljs.core.Keyword("unit-type","cost","unit-type/cost",-539586050).cljs$core$IFn$_invoke$arity$1(unit_type);
var base_q = new cljs.core.Keyword("terrain","q","terrain/q",2698702).cljs$core$IFn$_invoke$arity$1(base);
var base_r = new cljs.core.Keyword("terrain","r","terrain/r",-1753264147).cljs$core$IFn$_invoke$arity$1(base);
zetawar.game.check_base_current(db,game,base);

zetawar.game.check_unoccupied(db,game,base_q,base_r);

if((cost > credits)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unit cost exceeds available credits",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"credits","credits",785860820),credits,new cljs.core.Keyword(null,"cost","cost",-1094861735),cost], null));
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("unit","attack-count","unit/attack-count",635284832),new cljs.core.Keyword("unit","capturing","unit/capturing",247751174),new cljs.core.Keyword("unit","round-built","unit/round-built",1547727048),new cljs.core.Keyword("unit","game-pos-idx","unit/game-pos-idx",2034098862),new cljs.core.Keyword("unit","type","unit/type",1170646544),new cljs.core.Keyword("unit","count","unit/count",2144714993),new cljs.core.Keyword("unit","terrain","unit/terrain",692687601),new cljs.core.Keyword("unit","state","unit/state",-1991906543),new cljs.core.Keyword("unit","move-count","unit/move-count",1192826036),new cljs.core.Keyword("unit","attacked-count","unit/attacked-count",752022709),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("unit","q","unit/q",675179613),new cljs.core.Keyword("unit","r","unit/r",-492034562),new cljs.core.Keyword("unit","repaired","unit/repaired",460557471)],[(0),false,new cljs.core.Keyword("game","round","game/round",2008373466).cljs$core$IFn$_invoke$arity$1(game),zetawar.game.game_pos_idx(game,base_q,base_r),zetawar.db.e(unit_type),new cljs.core.Keyword("game","max-count-per-unit","game/max-count-per-unit",1362901090).cljs$core$IFn$_invoke$arity$1(game),zetawar.db.e(base),zetawar.db.e(zetawar.game.built_state(unit_type)),(0),(0),(-1),base_q,base_r,false]),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),zetawar.db.e(cur_faction),new cljs.core.Keyword("faction","credits","faction/credits",-232627472),(credits - cost),new cljs.core.Keyword("faction","units","faction/units",-1588815131),(-1)], null)], null);
}));

(zetawar.game.build_tx.cljs$lang$maxFixedArity = 5);

zetawar.game.build_BANG_ = (function zetawar$game$build_BANG_(conn,game_id,q,r,unit_type_id){
var db = cljs.core.deref(conn);
var game = zetawar.game.game_by_id(db,game_id);
var tx = zetawar.game.build_tx.cljs$core$IFn$_invoke$arity$5(db,game,q,r,unit_type_id);
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,tx);
});
zetawar.game.unit_end_turn_tx = (function zetawar$game$unit_end_turn_tx(db,game,unit){
var map__35473 = unit;
var map__35473__$1 = cljs.core.__destructure_map(map__35473);
var q = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35473__$1,new cljs.core.Keyword("unit","q","unit/q",675179613));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35473__$1,new cljs.core.Keyword("unit","r","unit/r",-492034562));
var capturing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35473__$1,new cljs.core.Keyword("unit","capturing","unit/capturing",247751174));
var capture_round = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35473__$1,new cljs.core.Keyword("unit","capture-round","unit/capture-round",-1153071298));
if(cljs.core.truth_((function (){var and__5043__auto__ = capturing;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(capture_round,new cljs.core.Keyword("game","round","game/round",2008373466).cljs$core$IFn$_invoke$arity$1(game));
} else {
return and__5043__auto__;
}
})())){
var faction = zetawar.game.unit_faction(db,unit);
var terrain = zetawar.game.checked_base_at(db,game,q,r);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),zetawar.db.e(terrain),new cljs.core.Keyword("terrain","owner","terrain/owner",1031873140),zetawar.db.e(faction)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),zetawar.db.e(unit)], null)], null);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("db","id","db/id",-1388397098),zetawar.db.e(unit),new cljs.core.Keyword("unit","repaired","unit/repaired",460557471),false,new cljs.core.Keyword("unit","move-count","unit/move-count",1192826036),(0),new cljs.core.Keyword("unit","attack-count","unit/attack-count",635284832),(0),new cljs.core.Keyword("unit","attacked-count","unit/attacked-count",752022709),(0),new cljs.core.Keyword("unit","state","unit/state",-1991906543),zetawar.db.e(zetawar.game.start_state(unit))], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (u){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),zetawar.db.e(unit),new cljs.core.Keyword("unit","attacked-from","unit/attacked-from",1625408364),zetawar.db.e(u)], null);
})),new cljs.core.Keyword("unit","attacked-from","unit/attacked-from",1625408364).cljs$core$IFn$_invoke$arity$1(unit));
}
});
/**
 * Return a transaction that completes captures, clears per round unit flags,
 *   updates the current faction, adds faction credits, and updates the round.
 */
zetawar.game.end_turn_tx = (function zetawar$game$end_turn_tx(db,game){
var starting_faction = new cljs.core.Keyword("game","starting-faction","game/starting-faction",1985241055).cljs$core$IFn$_invoke$arity$1(game);
var cur_faction = new cljs.core.Keyword("game","current-faction","game/current-faction",-1129931374).cljs$core$IFn$_invoke$arity$1(game);
var next_faction = new cljs.core.Keyword("faction","next-faction","faction/next-faction",23975586).cljs$core$IFn$_invoke$arity$1(cur_faction);
var cur_round = new cljs.core.Keyword("game","round","game/round",2008373466).cljs$core$IFn$_invoke$arity$1(game);
var new_round = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(starting_faction,next_faction))?(cur_round + (1)):cur_round);
var credits = (new cljs.core.Keyword("faction","credits","faction/credits",-232627472).cljs$core$IFn$_invoke$arity$1(next_faction) + (((new_round > (1)))?zetawar.game.income(db,game,next_faction):(0)));
var units = new cljs.core.Keyword("faction","units","faction/units",-1588815131).cljs$core$IFn$_invoke$arity$1(cur_faction);
var attacked_froms = new cljs.core.Keyword("game","attacked-froms","game/attacked-froms",-208172598).cljs$core$IFn$_invoke$arity$1(game);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),zetawar.db.e(next_faction),new cljs.core.Keyword("faction","credits","faction/credits",-232627472),credits], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),zetawar.db.e(game),new cljs.core.Keyword("game","round","game/round",2008373466),new_round,new cljs.core.Keyword("game","current-faction","game/current-faction",-1129931374),zetawar.db.e(next_faction)], null)], null),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__35474_SHARP_){
return zetawar.game.unit_end_turn_tx(db,game,p1__35474_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([units], 0)));
});
zetawar.game.end_turn_BANG_ = (function zetawar$game$end_turn_BANG_(conn,game_id){
var db = cljs.core.deref(conn);
var game = zetawar.game.game_by_id(db,game_id);
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,zetawar.game.end_turn_tx(db,game));
});
zetawar.game.action_tx = (function zetawar$game$action_tx(db,game,action){
var G__35475 = new cljs.core.Keyword("action","type","action/type",-1188085038).cljs$core$IFn$_invoke$arity$1(action);
var G__35475__$1 = (((G__35475 instanceof cljs.core.Keyword))?G__35475.fqn:null);
switch (G__35475__$1) {
case "action.type/build-unit":
var map__35476 = action;
var map__35476__$1 = cljs.core.__destructure_map(map__35476);
var q = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35476__$1,new cljs.core.Keyword("action","q","action/q",-12201265));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35476__$1,new cljs.core.Keyword("action","r","action/r",-1749826320));
var unit_type_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35476__$1,new cljs.core.Keyword("action","unit-type-id","action/unit-type-id",651709036));
return zetawar.game.build_tx.cljs$core$IFn$_invoke$arity$5(db,game,q,r,unit_type_id);

break;
case "action.type/move-unit":
var map__35477 = action;
var map__35477__$1 = cljs.core.__destructure_map(map__35477);
var from_q = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35477__$1,new cljs.core.Keyword("action","from-q","action/from-q",1722081937));
var from_r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35477__$1,new cljs.core.Keyword("action","from-r","action/from-r",-1985477414));
var to_q = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35477__$1,new cljs.core.Keyword("action","to-q","action/to-q",-1724817580));
var to_r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35477__$1,new cljs.core.Keyword("action","to-r","action/to-r",1666171807));
return zetawar.game.move_tx.cljs$core$IFn$_invoke$arity$6(db,game,from_q,from_r,to_q,to_r);

break;
case "action.type/attack-unit":
var map__35478 = action;
var map__35478__$1 = cljs.core.__destructure_map(map__35478);
var attacker_q = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35478__$1,new cljs.core.Keyword("action","attacker-q","action/attacker-q",373958008));
var attacker_r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35478__$1,new cljs.core.Keyword("action","attacker-r","action/attacker-r",-1956757933));
var defender_q = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35478__$1,new cljs.core.Keyword("action","defender-q","action/defender-q",-1218654418));
var defender_r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35478__$1,new cljs.core.Keyword("action","defender-r","action/defender-r",879623179));
var attacker_damage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35478__$1,new cljs.core.Keyword("action","attacker-damage","action/attacker-damage",1450940366));
var defender_damage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35478__$1,new cljs.core.Keyword("action","defender-damage","action/defender-damage",-1437450943));
return zetawar.game.battle_tx.cljs$core$IFn$_invoke$arity$8(db,game,attacker_q,attacker_r,defender_q,defender_r,attacker_damage,defender_damage);

break;
case "action.type/repair-unit":
var map__35479 = action;
var map__35479__$1 = cljs.core.__destructure_map(map__35479);
var q = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35479__$1,new cljs.core.Keyword("action","q","action/q",-12201265));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35479__$1,new cljs.core.Keyword("action","r","action/r",-1749826320));
return zetawar.game.repair_tx.cljs$core$IFn$_invoke$arity$4(db,game,q,r);

break;
case "action.type/field-repair-unit":
var map__35480 = action;
var map__35480__$1 = cljs.core.__destructure_map(map__35480);
var repairer_q = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35480__$1,new cljs.core.Keyword("action","repairer-q","action/repairer-q",1304927516));
var repairer_r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35480__$1,new cljs.core.Keyword("action","repairer-r","action/repairer-r",1885051077));
var target_q = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35480__$1,new cljs.core.Keyword("action","target-q","action/target-q",697046445));
var target_r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35480__$1,new cljs.core.Keyword("action","target-r","action/target-r",935152355));
return zetawar.game.field_repair_tx.cljs$core$IFn$_invoke$arity$6(db,game,repairer_q,repairer_r,target_q,target_r);

break;
case "action.type/capture-base":
var map__35481 = action;
var map__35481__$1 = cljs.core.__destructure_map(map__35481);
var q = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35481__$1,new cljs.core.Keyword("action","q","action/q",-12201265));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35481__$1,new cljs.core.Keyword("action","r","action/r",-1749826320));
return zetawar.game.capture_tx.cljs$core$IFn$_invoke$arity$4(db,game,q,r);

break;
case "action.type/end-turn":
return zetawar.game.end_turn_tx(db,game);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35475__$1)].join('')));

}
});
zetawar.game.buildable_unit_types = (function zetawar$game$buildable_unit_types(db,game){
return zetawar.db.qess.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?ut","?ut",1965659909,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?g","?g",589440221,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?g","?g",589440221,null),new cljs.core.Keyword("game","current-faction","game/current-faction",-1129931374),new cljs.core.Symbol(null,"?f","?f",-1121766265,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?f","?f",-1121766265,null),new cljs.core.Keyword("faction","credits","faction/credits",-232627472),new cljs.core.Symbol(null,"?credits","?credits",1019561360,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?ut","?ut",1965659909,null),new cljs.core.Keyword("unit-type","cost","unit-type/cost",-539586050),new cljs.core.Symbol(null,"?cost","?cost",-567120237,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"?credits","?credits",1019561360,null),new cljs.core.Symbol(null,"?cost","?cost",-567120237,null))], null)], null),db,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([zetawar.db.e(game)], 0));
});
zetawar.game.base_can_act_QMARK_ = (function zetawar$game$base_can_act_QMARK_(db,game,base){
var map__35482 = base;
var map__35482__$1 = cljs.core.__destructure_map(map__35482);
var q = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35482__$1,new cljs.core.Keyword("terrain","q","terrain/q",2698702));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35482__$1,new cljs.core.Keyword("terrain","r","terrain/r",-1753264147));
var and__5043__auto__ = (cljs.core.count(zetawar.game.buildable_unit_types(db,game)) > (0));
if(and__5043__auto__){
return zetawar.game.unoccupied_QMARK_(db,game,q,r);
} else {
return and__5043__auto__;
}
});
zetawar.game.base_actions = (function zetawar$game$base_actions(db,game,base){
var map__35483 = base;
var map__35483__$1 = cljs.core.__destructure_map(map__35483);
var q = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35483__$1,new cljs.core.Keyword("terrain","q","terrain/q",2698702));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35483__$1,new cljs.core.Keyword("terrain","r","terrain/r",-1753264147));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (ut){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("action","type","action/type",-1188085038),new cljs.core.Keyword("action.type","build-unit","action.type/build-unit",317525241),new cljs.core.Keyword("action","q","action/q",-12201265),q,new cljs.core.Keyword("action","r","action/r",-1749826320),r,new cljs.core.Keyword("action","unit-type-id","action/unit-type-id",651709036),new cljs.core.Keyword("unit-type","id","unit-type/id",-865738639).cljs$core$IFn$_invoke$arity$1(ut)], null);
}),zetawar.game.buildable_unit_types(db,game));
});
zetawar.game.actionable_bases = (function zetawar$game$actionable_bases(db,game){
var faction = new cljs.core.Keyword("game","current-faction","game/current-faction",-1129931374).cljs$core$IFn$_invoke$arity$1(game);
var bases = zetawar.game.faction_bases(db,faction);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__35484_SHARP_){
return zetawar.game.base_can_act_QMARK_(db,game,p1__35484_SHARP_);
}),bases);
});
zetawar.game.enemies = (function zetawar$game$enemies(db,game,unit){
var u_faction = zetawar.game.unit_faction(db,unit);
return zetawar.db.qess.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?u","?u",749886731,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?g","?g",589440221,null),new cljs.core.Symbol(null,"?f-arg","?f-arg",-259893567,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?g","?g",589440221,null),new cljs.core.Keyword("game","factions","game/factions",148269805),new cljs.core.Symbol(null,"?f","?f",-1121766265,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?f","?f",-1121766265,null),new cljs.core.Keyword("faction","units","faction/units",-1588815131),new cljs.core.Symbol(null,"?u","?u",749886731,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"?f","?f",-1121766265,null),new cljs.core.Symbol(null,"?f-arg","?f-arg",-259893567,null))], null)], null),db,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([zetawar.db.e(game),zetawar.db.e(u_faction)], 0));
});
zetawar.game.enemies_in_range = (function zetawar$game$enemies_in_range(db,game,unit){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__35485_SHARP_){
return zetawar.game.in_range_QMARK_(db,unit,p1__35485_SHARP_);
})),zetawar.game.enemies(db,game,unit));
});
zetawar.game.closest_enemy = (function zetawar$game$closest_enemy(db,game,unit){
var unit_q = new cljs.core.Keyword("unit","q","unit/q",675179613).cljs$core$IFn$_invoke$arity$1(unit);
var unit_r = new cljs.core.Keyword("unit","r","unit/r",-492034562).cljs$core$IFn$_invoke$arity$1(unit);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (closest,enemy){
var enemy_q = new cljs.core.Keyword("unit","q","unit/q",675179613).cljs$core$IFn$_invoke$arity$1(enemy);
var enemy_r = new cljs.core.Keyword("unit","r","unit/r",-492034562).cljs$core$IFn$_invoke$arity$1(enemy);
var closest_q = new cljs.core.Keyword("unit","q","unit/q",675179613).cljs$core$IFn$_invoke$arity$1(closest);
var closest_r = new cljs.core.Keyword("unit","r","unit/r",-492034562).cljs$core$IFn$_invoke$arity$1(closest);
if((zetawar.hex.distance(unit_q,unit_r,enemy_q,enemy_r) < zetawar.hex.distance(unit_q,unit_r,closest_q,closest_r))){
return enemy;
} else {
return closest;
}
}),zetawar.game.enemies(db,game,unit));
});
zetawar.game.friends = (function zetawar$game$friends(db,game,unit){
var u_faction = zetawar.game.unit_faction(db,unit);
return zetawar.db.qess.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?u","?u",749886731,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?g","?g",589440221,null),new cljs.core.Symbol(null,"?f-arg","?f-arg",-259893567,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?g","?g",589440221,null),new cljs.core.Keyword("game","factions","game/factions",148269805),new cljs.core.Symbol(null,"?f","?f",-1121766265,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?f","?f",-1121766265,null),new cljs.core.Keyword("faction","units","faction/units",-1588815131),new cljs.core.Symbol(null,"?u","?u",749886731,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"?f","?f",-1121766265,null),new cljs.core.Symbol(null,"?f-arg","?f-arg",-259893567,null))], null)], null),db,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([zetawar.db.e(game),zetawar.db.e(u_faction)], 0));
});
zetawar.game.friends_in_range = (function zetawar$game$friends_in_range(db,game,unit){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__35486_SHARP_){
return zetawar.game.in_range_QMARK_(db,unit,p1__35486_SHARP_);
})),zetawar.game.friends(db,game,unit));
});
zetawar.game.repairable_friends_in_range = (function zetawar$game$repairable_friends_in_range(db,game,unit){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__35487_SHARP_){
return zetawar.game.repairable_QMARK_(db,game,p1__35487_SHARP_);
})),zetawar.game.friends_in_range(db,game,unit));
});
zetawar.game.closest_friend = (function zetawar$game$closest_friend(db,game,unit){
var unit_q = new cljs.core.Keyword("unit","q","unit/q",675179613).cljs$core$IFn$_invoke$arity$1(unit);
var unit_r = new cljs.core.Keyword("unit","r","unit/r",-492034562).cljs$core$IFn$_invoke$arity$1(unit);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (closest,friend){
var friend_q = new cljs.core.Keyword("unit","q","unit/q",675179613).cljs$core$IFn$_invoke$arity$1(friend);
var friend_r = new cljs.core.Keyword("unit","r","unit/r",-492034562).cljs$core$IFn$_invoke$arity$1(friend);
var closest_q = new cljs.core.Keyword("unit","q","unit/q",675179613).cljs$core$IFn$_invoke$arity$1(closest);
var closest_r = new cljs.core.Keyword("unit","r","unit/r",-492034562).cljs$core$IFn$_invoke$arity$1(closest);
if((zetawar.hex.distance(unit_q,unit_r,friend_q,friend_r) < zetawar.hex.distance(unit_q,unit_r,closest_q,closest_r))){
return friend;
} else {
return closest;
}
}),zetawar.game.friends(db,game,unit));
});
zetawar.game.unit_can_act_QMARK_ = (function zetawar$game$unit_can_act_QMARK_(db,game,unit){
var terrain = new cljs.core.Keyword("unit","terrain","unit/terrain",692687601).cljs$core$IFn$_invoke$arity$1(unit);
var or__5045__auto__ = zetawar.game.can_move_QMARK_(db,game,unit);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = (function (){var and__5043__auto__ = zetawar.game.can_attack_QMARK_(db,game,unit);
if(cljs.core.truth_(and__5043__auto__)){
return (cljs.core.count(zetawar.game.enemies_in_range(db,game,unit)) > (0));
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = zetawar.game.can_repair_QMARK_(db,game,unit);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
return zetawar.game.can_capture_QMARK_(db,game,unit,terrain);
}
}
}
});
zetawar.game.move_actions = (function zetawar$game$move_actions(db,game,unit){
if(cljs.core.truth_(zetawar.game.can_move_QMARK_(db,game,unit))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (move){
var vec__35488 = new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(move);
var to_q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35488,(0),null);
var to_r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35488,(1),null);
var vec__35491 = new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(move);
var from_q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35491,(0),null);
var from_r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35491,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(move,new cljs.core.Keyword(null,"to","to",192099007),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"from","from",1815293044)], 0)),new cljs.core.Keyword("action","type","action/type",-1188085038),new cljs.core.Keyword("action.type","move-unit","action.type/move-unit",1139424335),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("action","to-q","action/to-q",-1724817580),to_q,new cljs.core.Keyword("action","to-r","action/to-r",1666171807),to_r,new cljs.core.Keyword("action","from-q","action/from-q",1722081937),from_q,new cljs.core.Keyword("action","from-r","action/from-r",-1985477414),from_r], 0));
}),zetawar.game.valid_moves(db,game,unit));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
zetawar.game.attack_actions = (function zetawar$game$attack_actions(db,game,unit){
if(cljs.core.truth_(zetawar.game.can_attack_QMARK_(db,game,unit))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (defender){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("action","type","action/type",-1188085038),new cljs.core.Keyword("action.type","attack-unit","action.type/attack-unit",2088859929),new cljs.core.Keyword("action","attacker-q","action/attacker-q",373958008),new cljs.core.Keyword("unit","q","unit/q",675179613).cljs$core$IFn$_invoke$arity$1(unit),new cljs.core.Keyword("action","attacker-r","action/attacker-r",-1956757933),new cljs.core.Keyword("unit","r","unit/r",-492034562).cljs$core$IFn$_invoke$arity$1(unit),new cljs.core.Keyword("action","defender-q","action/defender-q",-1218654418),new cljs.core.Keyword("unit","q","unit/q",675179613).cljs$core$IFn$_invoke$arity$1(defender),new cljs.core.Keyword("action","defender-r","action/defender-r",879623179),new cljs.core.Keyword("unit","r","unit/r",-492034562).cljs$core$IFn$_invoke$arity$1(defender)], null);
}),zetawar.game.enemies_in_range(db,game,unit));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
zetawar.game.repair_actions = (function zetawar$game$repair_actions(db,game,unit){
if(cljs.core.truth_(zetawar.game.can_repair_QMARK_(db,game,unit))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("action","type","action/type",-1188085038),new cljs.core.Keyword("action.type","repair-unit","action.type/repair-unit",2009749852),new cljs.core.Keyword("action","q","action/q",-12201265),new cljs.core.Keyword("unit","q","unit/q",675179613).cljs$core$IFn$_invoke$arity$1(unit),new cljs.core.Keyword("action","r","action/r",-1749826320),new cljs.core.Keyword("unit","r","unit/r",-492034562).cljs$core$IFn$_invoke$arity$1(unit)], null)], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
zetawar.game.field_repair_actions = (function zetawar$game$field_repair_actions(db,game,unit){
if(cljs.core.truth_(zetawar.game.can_field_repair_QMARK_(db,game,unit))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (target){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("action","type","action/type",-1188085038),new cljs.core.Keyword("action.type","field-repair-unit","action.type/field-repair-unit",162631713),new cljs.core.Keyword("action","repairer-q","action/repairer-q",1304927516),new cljs.core.Keyword("unit","q","unit/q",675179613).cljs$core$IFn$_invoke$arity$1(unit),new cljs.core.Keyword("action","repairer-r","action/repairer-r",1885051077),new cljs.core.Keyword("unit","r","unit/r",-492034562).cljs$core$IFn$_invoke$arity$1(unit),new cljs.core.Keyword("action","target-q","action/target-q",697046445),new cljs.core.Keyword("unit","q","unit/q",675179613).cljs$core$IFn$_invoke$arity$1(target),new cljs.core.Keyword("action","target-r","action/target-r",935152355),new cljs.core.Keyword("unit","r","unit/r",-492034562).cljs$core$IFn$_invoke$arity$1(target)], null);
}),zetawar.game.friends_in_range(db,game,unit));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
zetawar.game.capture_actions = (function zetawar$game$capture_actions(db,game,unit){
var map__35494 = unit;
var map__35494__$1 = cljs.core.__destructure_map(map__35494);
var q = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35494__$1,new cljs.core.Keyword("unit","q","unit/q",675179613));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35494__$1,new cljs.core.Keyword("unit","r","unit/r",-492034562));
var terrain = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35494__$1,new cljs.core.Keyword("unit","terrain","unit/terrain",692687601));
if(cljs.core.truth_(zetawar.game.can_capture_QMARK_(db,game,unit,terrain))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("action","type","action/type",-1188085038),new cljs.core.Keyword("action.type","capture-base","action.type/capture-base",1331641506),new cljs.core.Keyword("action","q","action/q",-12201265),q,new cljs.core.Keyword("action","r","action/r",-1749826320),r], null)], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
zetawar.game.unit_actions = (function zetawar$game$unit_actions(db,game,unit){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(zetawar.game.move_actions(db,game,unit),zetawar.game.attack_actions(db,game,unit),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([zetawar.game.repair_actions(db,game,unit),zetawar.game.field_repair_actions(db,game,unit),zetawar.game.capture_actions(db,game,unit)], 0));
});
zetawar.game.actionable_units = (function zetawar$game$actionable_units(db,game){
var units = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game","current-faction","game/current-faction",-1129931374),new cljs.core.Keyword("faction","units","faction/units",-1588815131)], null));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__35495_SHARP_){
return zetawar.game.unit_can_act_QMARK_(db,game,p1__35495_SHARP_);
}),units);
});
zetawar.game.actionable_actors = (function zetawar$game$actionable_actors(db,game){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(zetawar.game.actionable_units(db,game),zetawar.game.actionable_bases(db,game));
});
zetawar.game.capturable_bases = (function zetawar$game$capturable_bases(db,game,unit){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(unit,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unit","type","unit/type",1170646544),new cljs.core.Keyword("unit-type","can-capture","unit-type/can-capture",1840854852)], null)))){
var u_faction = zetawar.game.unit_faction(db,unit);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__35496_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(u_faction,new cljs.core.Keyword("terrain","owner","terrain/owner",1031873140).cljs$core$IFn$_invoke$arity$1(p1__35496_SHARP_));
})),zetawar.db.qess.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?g","?g",589440221,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?g","?g",589440221,null),new cljs.core.Keyword("game","map","game/map",1374722543),new cljs.core.Symbol(null,"?m","?m",896026745,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?m","?m",896026745,null),new cljs.core.Keyword("map","terrains","map/terrains",571601527),new cljs.core.Symbol(null,"?t","?t",1786819229,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.Keyword("terrain","type","terrain/type",-1187652655),new cljs.core.Symbol(null,"?tt","?tt",-908445421,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?tt","?tt",-908445421,null),new cljs.core.Keyword("terrain-type","id","terrain-type/id",-1035336862),new cljs.core.Keyword("terrain-type.id","base","terrain-type.id/base",-459522637)], null)], null),db,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([zetawar.db.e(game)], 0)));
} else {
return null;
}
});
zetawar.game.closest_capturable_base = (function zetawar$game$closest_capturable_base(db,game,unit){
var unit_q = new cljs.core.Keyword("unit","q","unit/q",675179613).cljs$core$IFn$_invoke$arity$1(unit);
var unit_r = new cljs.core.Keyword("unit","r","unit/r",-492034562).cljs$core$IFn$_invoke$arity$1(unit);
var bases = zetawar.game.capturable_bases(db,game,unit);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (closest,terrain){
var terrain_q = new cljs.core.Keyword("terrain","q","terrain/q",2698702).cljs$core$IFn$_invoke$arity$1(terrain);
var terrain_r = new cljs.core.Keyword("terrain","r","terrain/r",-1753264147).cljs$core$IFn$_invoke$arity$1(terrain);
var closest_q = new cljs.core.Keyword("terrain","q","terrain/q",2698702).cljs$core$IFn$_invoke$arity$1(closest);
var closest_r = new cljs.core.Keyword("terrain","r","terrain/r",-1753264147).cljs$core$IFn$_invoke$arity$1(closest);
if((zetawar.hex.distance(unit_q,unit_r,terrain_q,terrain_r) < zetawar.hex.distance(unit_q,unit_r,closest_q,closest_r))){
return terrain;
} else {
return closest;
}
}),bases);
});
zetawar.game.closest_move_to_hex = (function zetawar$game$closest_move_to_hex(db,game,unit,q,r){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (closest,move){
if(cljs.core.truth_(closest)){
var vec__35497 = new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(closest);
var closest_q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35497,(0),null);
var closest_r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35497,(1),null);
var vec__35500 = new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(move);
var move_q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35500,(0),null);
var move_r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35500,(1),null);
if((zetawar.hex.distance(move_q,move_r,q,r) < zetawar.hex.distance(closest_q,closest_r,q,r))){
return move;
} else {
return closest;
}
} else {
return move;
}
}),zetawar.game.valid_moves(db,game,unit));
});
zetawar.game.settings_tx = (function zetawar$game$settings_tx(db,game_id,settings_def){
var game = zetawar.game.game_by_id(db,game_id);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword("db","id","db/id",-1388397098),zetawar.db.e(game),new cljs.core.Keyword("game","ranged-attack-bonus","game/ranged-attack-bonus",-1896137306),new cljs.core.Keyword(null,"ranged-attack-bonus","ranged-attack-bonus",-1907756620).cljs$core$IFn$_invoke$arity$1(settings_def),new cljs.core.Keyword("game","adjacent-attack-bonus","game/adjacent-attack-bonus",-151670683),new cljs.core.Keyword(null,"adjacent-attack-bonus","adjacent-attack-bonus",-154766057).cljs$core$IFn$_invoke$arity$1(settings_def),new cljs.core.Keyword("game","flanking-attack-bonus","game/flanking-attack-bonus",1533163755),new cljs.core.Keyword(null,"flanking-attack-bonus","flanking-attack-bonus",1538450661).cljs$core$IFn$_invoke$arity$1(settings_def),new cljs.core.Keyword("game","opposite-attack-bonus","game/opposite-attack-bonus",-2070868646),new cljs.core.Keyword(null,"opposite-attack-bonus","opposite-attack-bonus",-2050958996).cljs$core$IFn$_invoke$arity$1(settings_def),new cljs.core.Keyword("game","stochastic-damage","game/stochastic-damage",527007533),new cljs.core.Keyword(null,"stochastic-damage","stochastic-damage",521784115).cljs$core$IFn$_invoke$arity$1(settings_def),new cljs.core.Keyword("game","self-repair","game/self-repair",1572141403),new cljs.core.Keyword(null,"self-repair","self-repair",1575267669).cljs$core$IFn$_invoke$arity$1(settings_def),new cljs.core.Keyword("game","move-through-friendly","game/move-through-friendly",1931049003),new cljs.core.Keyword(null,"move-through-friendly","move-through-friendly",1929970617).cljs$core$IFn$_invoke$arity$1(settings_def)], null)], null);
});
zetawar.game.terrain_types_tx = (function zetawar$game$terrain_types_tx(db,game_id,terrains_def){
var game = zetawar.game.game_by_id(db,game_id);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__35503){
var vec__35504 = p__35503;
var terrain_type_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35504,(0),null);
var terrain_def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35504,(1),null);
var terrain_type_id = zetawar.game.to_terrain_type_id(terrain_type_name);
var terrain_type_idx = zetawar.game.game_id_idx(game_id,terrain_type_id);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("db","id","db/id",-1388397098),zetawar.db.next_temp_id(),new cljs.core.Keyword("game","_terrain-types","game/_terrain-types",-2084990286),zetawar.db.e(game),new cljs.core.Keyword("terrain-type","id","terrain-type/id",-1035336862),terrain_type_id,new cljs.core.Keyword("terrain-type","game-id-idx","terrain-type/game-id-idx",-1291404044),terrain_type_idx,new cljs.core.Keyword("terrain-type","description","terrain-type/description",1944484930),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(terrain_def),new cljs.core.Keyword("terrain-type","image","terrain-type/image",1433542086),new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(terrain_def)], null);
})),terrains_def);
});
zetawar.game.attack_strengths_tx = (function zetawar$game$attack_strengths_tx(db,game_id,unit_type_eid,attack_strengths_def){
var game = zetawar.game.game_by_id(db,game_id);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__35507){
var vec__35508 = p__35507;
var armor_type_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35508,(0),null);
var attack_strength = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35508,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),zetawar.db.next_temp_id(),new cljs.core.Keyword("unit-type","_strengths","unit-type/_strengths",-1428819806),unit_type_eid,new cljs.core.Keyword("unit-strength","armor-type","unit-strength/armor-type",-1492629529),zetawar.game.to_armor_type(armor_type_name),new cljs.core.Keyword("unit-strength","attack","unit-strength/attack",-474082794),attack_strength], null);
})),attack_strengths_def);
});
zetawar.game.terrain_effects_tx = (function zetawar$game$terrain_effects_tx(db,game_id,unit_type_eid,terrain_effects_def){
var game = zetawar.game.game_by_id(db,game_id);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__35511){
var vec__35512 = p__35511;
var terrain_type_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35512,(0),null);
var terrain_effect_def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35512,(1),null);
var map__35515 = terrain_effect_def;
var map__35515__$1 = cljs.core.__destructure_map(map__35515);
var attack_bonus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35515__$1,new cljs.core.Keyword(null,"attack-bonus","attack-bonus",1793710551));
var armor_bonus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35515__$1,new cljs.core.Keyword(null,"armor-bonus","armor-bonus",-1463382428));
var movement_cost = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35515__$1,new cljs.core.Keyword(null,"movement-cost","movement-cost",-716301045));
var terrain_type_idx = zetawar.game.game_id_idx(game_id,zetawar.game.to_terrain_type_id(terrain_type_name));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("db","id","db/id",-1388397098),zetawar.db.next_temp_id(),new cljs.core.Keyword("terrain-type","_effects","terrain-type/_effects",-775010855),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("terrain-type","game-id-idx","terrain-type/game-id-idx",-1291404044),terrain_type_idx], null),new cljs.core.Keyword("terrain-effect","unit-type","terrain-effect/unit-type",1046397533),unit_type_eid,new cljs.core.Keyword("terrain-effect","movement-cost","terrain-effect/movement-cost",-1564991502),movement_cost,new cljs.core.Keyword("terrain-effect","attack-bonus","terrain-effect/attack-bonus",-2130995456),attack_bonus,new cljs.core.Keyword("terrain-effect","armor-bonus","terrain-effect/armor-bonus",-1722771191),armor_bonus], null);
})),terrain_effects_def);
});
zetawar.game.terrain_build_tx = (function zetawar$game$terrain_build_tx(db,game_id,unit_type_eid,buildable_at_def){
var game = zetawar.game.game_by_id(db,game_id);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (terrain_type_name){
var terrain_type_idx = zetawar.game.game_id_idx(game_id,zetawar.game.to_terrain_type_id(terrain_type_name));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("terrain-type","game-id-idx","terrain-type/game-id-idx",-1291404044),terrain_type_idx], null),new cljs.core.Keyword("terrain-type","can-build","terrain-type/can-build",1032082687),unit_type_eid], null);
})),buildable_at_def);
});
zetawar.game.unit_types_tx = (function zetawar$game$unit_types_tx(db,game_id,units_def){
var game = zetawar.game.game_by_id(db,game_id);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p__35518){
var vec__35519 = p__35518;
var unit_type_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35519,(0),null);
var unit_def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35519,(1),null);
var map__35522 = unit_def;
var map__35522__$1 = cljs.core.__destructure_map(map__35522);
var armor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35522__$1,new cljs.core.Keyword(null,"armor","armor",-829575337));
var capturing_armor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35522__$1,new cljs.core.Keyword(null,"capturing-armor","capturing-armor",-251655975));
var state_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35522__$1,new cljs.core.Keyword(null,"state-map","state-map",-1313872128));
var unit_state_map_idx = zetawar.game.game_id_idx(game_id,zetawar.game.to_unit_state_map_id(state_map));
var unit_type_eid = zetawar.db.next_temp_id();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("unit-type","armor-type","unit-type/armor-type",101248352),new cljs.core.Keyword("unit-type","movement","unit-type/movement",-921915036),new cljs.core.Keyword("unit-type","can-capture","unit-type/can-capture",1840854852),new cljs.core.Keyword("unit-type","zoc-armor-types","unit-type/zoc-armor-types",887928037),new cljs.core.Keyword("unit-type","max-range","unit-type/max-range",1175023596),new cljs.core.Keyword("unit-type","id","unit-type/id",-865738639),new cljs.core.Keyword("unit-type","description","unit-type/description",-841830541),new cljs.core.Keyword("unit-type","repair","unit-type/repair",1154037365),new cljs.core.Keyword("unit-type","image","unit-type/image",1063125749),new cljs.core.Keyword("unit-type","armor","unit-type/armor",-1309357770),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("game","_unit-types","game/_unit-types",-1175958570),new cljs.core.Keyword("unit-type","can-repair","unit-type/can-repair",1128696439),new cljs.core.Keyword("unit-type","min-range","unit-type/min-range",1375530394),new cljs.core.Keyword("unit-type","state-map","unit-type/state-map",-627625699),new cljs.core.Keyword("unit-type","cost","unit-type/cost",-539586050),new cljs.core.Keyword("unit-type","capturing-armor","unit-type/capturing-armor",269152958)],[zetawar.game.to_armor_type(new cljs.core.Keyword(null,"armor-type","armor-type",619697681).cljs$core$IFn$_invoke$arity$1(unit_def)),new cljs.core.Keyword(null,"movement","movement",1777030977).cljs$core$IFn$_invoke$arity$1(unit_def),new cljs.core.Keyword(null,"can-capture","can-capture",1860291941).cljs$core$IFn$_invoke$arity$1(unit_def),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35517_SHARP_){
return zetawar.game.to_armor_type(p1__35517_SHARP_);
}),new cljs.core.Keyword(null,"zoc","zoc",2109885226).cljs$core$IFn$_invoke$arity$1(unit_def)),new cljs.core.Keyword(null,"max-range","max-range",623016397).cljs$core$IFn$_invoke$arity$1(unit_def),zetawar.game.to_unit_type_id(unit_type_name),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(unit_def),new cljs.core.Keyword(null,"repair","repair",599188556).cljs$core$IFn$_invoke$arity$1(unit_def),new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(unit_def),armor,unit_type_eid,zetawar.db.e(game),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35516_SHARP_){
return zetawar.game.to_armor_type(p1__35516_SHARP_);
}),new cljs.core.Keyword(null,"can-repair","can-repair",576169110).cljs$core$IFn$_invoke$arity$1(unit_def)),new cljs.core.Keyword(null,"min-range","min-range",1898381141).cljs$core$IFn$_invoke$arity$1(unit_def),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unit-state-map","game-id-idx","unit-state-map/game-id-idx",-1226490955),unit_state_map_idx], null),new cljs.core.Keyword(null,"cost","cost",-1094861735).cljs$core$IFn$_invoke$arity$1(unit_def),(function (){var or__5045__auto__ = capturing_armor;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return armor;
}
})()])], null),zetawar.game.attack_strengths_tx(db,game_id,unit_type_eid,new cljs.core.Keyword(null,"attack-strengths","attack-strengths",-919895276).cljs$core$IFn$_invoke$arity$1(unit_def))),zetawar.game.terrain_effects_tx(db,game_id,unit_type_eid,new cljs.core.Keyword(null,"terrain-effects","terrain-effects",310290438).cljs$core$IFn$_invoke$arity$1(unit_def))),zetawar.game.terrain_build_tx(db,game_id,unit_type_eid,new cljs.core.Keyword(null,"buildable-at","buildable-at",-1547501492).cljs$core$IFn$_invoke$arity$1(unit_def)));
})),units_def);
});
zetawar.game.unit_states_tx = (function zetawar$game$unit_states_tx(db,game_id,state_map_eid,state_map_name,states){
var game = zetawar.game.game_by_id(db,game_id);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__35523){
var vec__35524 = p__35523;
var state_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35524,(0),null);
var states__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35524,(1),null);
var state_id = zetawar.game.to_unit_state_id.cljs$core$IFn$_invoke$arity$2(state_map_name,state_name);
var state_idx = zetawar.game.game_id_idx(game_id,state_id);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",-1388397098),zetawar.db.next_temp_id(),new cljs.core.Keyword("game","_unit-states","game/_unit-states",-1768912661),zetawar.db.e(game),new cljs.core.Keyword("unit-state","id","unit-state/id",1732520780),state_id,new cljs.core.Keyword("unit-state","game-id-idx","unit-state/game-id-idx",1110742406),state_idx,new cljs.core.Keyword("unit-state-map","_states","unit-state-map/_states",915085587),state_map_eid], null);
})),states);
});
zetawar.game.unit_states_transitions_tx = (function zetawar$game$unit_states_transitions_tx(db,game_id,state_map_name,states){
var game = zetawar.game.game_by_id(db,game_id);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p__35527){
var vec__35528 = p__35527;
var state_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35528,(0),null);
var map__35531 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35528,(1),null);
var map__35531__$1 = cljs.core.__destructure_map(map__35531);
var transitions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35531__$1,new cljs.core.Keyword(null,"transitions","transitions",-2046216121));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35532){
var vec__35533 = p__35532;
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35533,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35533,(1),null);
var state_idx = zetawar.game.game_id_idx(game_id,zetawar.game.to_unit_state_id.cljs$core$IFn$_invoke$arity$2(state_map_name,state_name));
var new_state_idx = zetawar.game.game_id_idx(game_id,zetawar.game.to_unit_state_id.cljs$core$IFn$_invoke$arity$2(state_map_name,new_state));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),zetawar.db.next_temp_id(),new cljs.core.Keyword("unit-state-transition","action-type","unit-state-transition/action-type",1486943669),zetawar.game.to_action_type(action),new cljs.core.Keyword("unit-state-transition","new-state","unit-state-transition/new-state",1274069070),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unit-state","game-id-idx","unit-state/game-id-idx",1110742406),new_state_idx], null),new cljs.core.Keyword("unit-state","_transitions","unit-state/_transitions",-1725505447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unit-state","game-id-idx","unit-state/game-id-idx",1110742406),state_idx], null)], null);
}),transitions);
})),states);
});
zetawar.game.unit_state_map_tx = (function zetawar$game$unit_state_map_tx(db,game_id,state_maps_def){
var game = zetawar.game.game_by_id(db,game_id);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p__35536){
var vec__35537 = p__35536;
var state_map_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35537,(0),null);
var state_map_def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35537,(1),null);
var map__35540 = state_map_def;
var map__35540__$1 = cljs.core.__destructure_map(map__35540);
var states = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35540__$1,new cljs.core.Keyword(null,"states","states",1389013542));
var start_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35540__$1,new cljs.core.Keyword(null,"start-state","start-state",2056408421));
var built_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35540__$1,new cljs.core.Keyword(null,"built-state","built-state",1461258004));
var map_id = zetawar.game.to_unit_state_map_id(state_map_name);
var map_idx = zetawar.game.game_id_idx(game_id,map_id);
var start_idx = zetawar.game.game_id_idx(game_id,zetawar.game.to_unit_state_id.cljs$core$IFn$_invoke$arity$2(state_map_name,start_state));
var built_idx = zetawar.game.game_id_idx(game_id,zetawar.game.to_unit_state_id.cljs$core$IFn$_invoke$arity$2(state_map_name,built_state));
var state_map_temp_eid = zetawar.db.next_temp_id();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),state_map_temp_eid,new cljs.core.Keyword("game","_unit-state-maps","game/_unit-state-maps",2068663023),zetawar.db.e(game),new cljs.core.Keyword("unit-state-map","id","unit-state-map/id",-269253347),map_id,new cljs.core.Keyword("unit-state-map","game-id-idx","unit-state-map/game-id-idx",-1226490955),map_idx], null)], null),zetawar.game.unit_states_tx(db,game_id,state_map_temp_eid,state_map_name,states)),zetawar.game.unit_states_transitions_tx(db,game_id,state_map_name,states)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),state_map_temp_eid,new cljs.core.Keyword("unit-state-map","start-state","unit-state-map/start-state",824516686),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unit-state","game-id-idx","unit-state/game-id-idx",1110742406),start_idx], null),new cljs.core.Keyword("unit-state-map","built-state","unit-state-map/built-state",-465310679),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unit-state","game-id-idx","unit-state/game-id-idx",1110742406),built_idx], null)], null)], null));
})),state_maps_def);
});
zetawar.game.game_map_tx = (function zetawar$game$game_map_tx(db,game_id,map_def){
var game = zetawar.game.game_by_id(db,game_id);
var map_eid = zetawar.db.next_temp_id();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),map_eid,new cljs.core.Keyword("map","id","map/id",-1388423944),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(map_def),new cljs.core.Keyword("map","description","map/description",-1428477252),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(map_def),new cljs.core.Keyword("game","_map","game/_map",-1047706542),zetawar.db.e(game)], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (t){
var map__35541 = t;
var map__35541__$1 = cljs.core.__destructure_map(map__35541);
var q = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35541__$1,new cljs.core.Keyword(null,"q","q",689001697));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35541__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var terrain_type_id = zetawar.game.to_terrain_type_id(new cljs.core.Keyword(null,"terrain-type","terrain-type",-1982390111).cljs$core$IFn$_invoke$arity$1(t));
var terrain_type = zetawar.game.terrain_type_by_id(db,game,terrain_type_id);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("db","id","db/id",-1388397098),zetawar.db.next_temp_id(),new cljs.core.Keyword("terrain","game-pos-idx","terrain/game-pos-idx",340565053),zetawar.game.game_pos_idx(game,q,r),new cljs.core.Keyword("terrain","q","terrain/q",2698702),q,new cljs.core.Keyword("terrain","r","terrain/r",-1753264147),r,new cljs.core.Keyword("terrain","type","terrain/type",-1187652655),zetawar.db.e(terrain_type),new cljs.core.Keyword("map","_terrains","map/_terrains",-381659712),map_eid], null);
}),new cljs.core.Keyword(null,"terrains","terrains",571447067).cljs$core$IFn$_invoke$arity$1(map_def)));
});
zetawar.game.create_game_BANG_ = (function zetawar$game$create_game_BANG_(var_args){
var G__35543 = arguments.length;
switch (G__35543) {
case 2:
return zetawar.game.create_game_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return zetawar.game.create_game_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zetawar.game.create_game_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,scenario_def){
return zetawar.game.create_game_BANG_.cljs$core$IFn$_invoke$arity$3(conn,scenario_def,cljs.core.PersistentArrayMap.EMPTY);
}));

(zetawar.game.create_game_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,scenario_def,game_state){
var game_id = cljs.core.random_uuid();
var map__35544 = scenario_def;
var map__35544__$1 = cljs.core.__destructure_map(map__35544);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35544__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var credits_per_base = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35544__$1,new cljs.core.Keyword(null,"credits-per-base","credits-per-base",15967561));
var max_count_per_unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35544__$1,new cljs.core.Keyword(null,"max-count-per-unit","max-count-per-unit",1366049888));
datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("db","id","db/id",-1388397098),zetawar.db.next_temp_id(),new cljs.core.Keyword("game","id","game/id",-1385234878),game_id,new cljs.core.Keyword("game","scenario-id","game/scenario-id",204472380),id,new cljs.core.Keyword("game","round","game/round",2008373466),new cljs.core.Keyword(null,"round","round",2009433328).cljs$core$IFn$_invoke$arity$2(game_state,(1)),new cljs.core.Keyword("game","max-count-per-unit","game/max-count-per-unit",1362901090),max_count_per_unit,new cljs.core.Keyword("game","credits-per-base","game/credits-per-base",19222847),credits_per_base], null)], null));

return game_id;
}));

(zetawar.game.create_game_BANG_.cljs$lang$maxFixedArity = 3);

zetawar.game.bases_tx = (function zetawar$game$bases_tx(db,game_id,scenario_def){
var game = zetawar.game.game_by_id(db,game_id);
var iter__5523__auto__ = (function zetawar$game$bases_tx_$_iter__35545(s__35546){
return (new cljs.core.LazySeq(null,(function (){
var s__35546__$1 = s__35546;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__35546__$1);
if(temp__5823__auto__){
var s__35546__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35546__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__35546__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__35548 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__35547 = (0);
while(true){
if((i__35547 < size__5522__auto__)){
var base = cljs.core._nth(c__5521__auto__,i__35547);
cljs.core.chunk_append(b__35548,(function (){var map__35549 = base;
var map__35549__$1 = cljs.core.__destructure_map(map__35549);
var q = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35549__$1,new cljs.core.Keyword(null,"q","q",689001697));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35549__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var base_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35549__$1,new cljs.core.Keyword(null,"base-type","base-type",1167971299));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("terrain","game-pos-idx","terrain/game-pos-idx",340565053),zetawar.game.game_pos_idx(game,q,r),new cljs.core.Keyword("terrain","q","terrain/q",2698702),q,new cljs.core.Keyword("terrain","r","terrain/r",-1753264147),r,new cljs.core.Keyword("terrain","type","terrain/type",-1187652655),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("terrain-type","game-id-idx","terrain-type/game-id-idx",-1291404044),zetawar.game.game_id_idx(game_id,zetawar.game.to_terrain_type_id(base_type))], null),new cljs.core.Keyword("map","_terrains","map/_terrains",-381659712),zetawar.db.e(new cljs.core.Keyword("game","map","game/map",1374722543).cljs$core$IFn$_invoke$arity$1(game))], null);
})());

var G__36107 = (i__35547 + (1));
i__35547 = G__36107;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35548),zetawar$game$bases_tx_$_iter__35545(cljs.core.chunk_rest(s__35546__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35548),null);
}
} else {
var base = cljs.core.first(s__35546__$2);
return cljs.core.cons((function (){var map__35550 = base;
var map__35550__$1 = cljs.core.__destructure_map(map__35550);
var q = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35550__$1,new cljs.core.Keyword(null,"q","q",689001697));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35550__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var base_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35550__$1,new cljs.core.Keyword(null,"base-type","base-type",1167971299));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("terrain","game-pos-idx","terrain/game-pos-idx",340565053),zetawar.game.game_pos_idx(game,q,r),new cljs.core.Keyword("terrain","q","terrain/q",2698702),q,new cljs.core.Keyword("terrain","r","terrain/r",-1753264147),r,new cljs.core.Keyword("terrain","type","terrain/type",-1187652655),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("terrain-type","game-id-idx","terrain-type/game-id-idx",-1291404044),zetawar.game.game_id_idx(game_id,zetawar.game.to_terrain_type_id(base_type))], null),new cljs.core.Keyword("map","_terrains","map/_terrains",-381659712),zetawar.db.e(new cljs.core.Keyword("game","map","game/map",1374722543).cljs$core$IFn$_invoke$arity$1(game))], null);
})(),zetawar$game$bases_tx_$_iter__35545(cljs.core.rest(s__35546__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"bases","bases",-1036892420).cljs$core$IFn$_invoke$arity$1(scenario_def));
});
zetawar.game.factions_tx = (function zetawar$game$factions_tx(db,game_id,factions){
var game = zetawar.game.game_by_id(db,game_id);
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,faction){
var map__35551 = faction;
var map__35551__$1 = cljs.core.__destructure_map(map__35551);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35551__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var credits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35551__$1,new cljs.core.Keyword(null,"credits","credits",785860820));
var ai = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35551__$1,new cljs.core.Keyword(null,"ai","ai",760454697));
var next_id = ((-101) - cljs.core.mod((i + (1)),cljs.core.count(factions)));
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("db","id","db/id",-1388397098),((-101) - i),new cljs.core.Keyword("faction","color","faction/color",2104478137),zetawar.game.to_faction_color(color),new cljs.core.Keyword("faction","credits","faction/credits",-232627472),credits,new cljs.core.Keyword("faction","ai","faction/ai",1819183109),ai,new cljs.core.Keyword("faction","order","faction/order",1979451148),(i + (1)),new cljs.core.Keyword("faction","next-faction","faction/next-faction",23975586),next_id,new cljs.core.Keyword("game","_factions","game/_factions",-1665187516),zetawar.db.e(game)], null);
}),factions);
});
zetawar.game.factions_bases_tx = (function zetawar$game$factions_bases_tx(db,game_id,factions){
var game = zetawar.game.game_by_id(db,game_id);
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (faction){
var map__35552 = faction;
var map__35552__$1 = cljs.core.__destructure_map(map__35552);
var bases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35552__$1,new cljs.core.Keyword(null,"bases","bases",-1036892420));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35552__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var faction__$1 = zetawar.game.faction_by_color(db,game,color);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35553){
var map__35554 = p__35553;
var map__35554__$1 = cljs.core.__destructure_map(map__35554);
var q = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35554__$1,new cljs.core.Keyword(null,"q","q",689001697));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35554__$1,new cljs.core.Keyword(null,"r","r",-471384190));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("terrain","game-pos-idx","terrain/game-pos-idx",340565053),zetawar.game.game_pos_idx(game,q,r),new cljs.core.Keyword("terrain","owner","terrain/owner",1031873140),zetawar.db.e(faction__$1)], null);
}),bases);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([factions], 0));
});
zetawar.game.factions_units_tx = (function zetawar$game$factions_units_tx(db,game_id,factions){
var game = zetawar.game.game_by_id(db,game_id);
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (faction){
var map__35555 = game;
var map__35555__$1 = cljs.core.__destructure_map(map__35555);
var max_count_per_unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35555__$1,new cljs.core.Keyword("game","max-count-per-unit","game/max-count-per-unit",1362901090));
var map__35556 = faction;
var map__35556__$1 = cljs.core.__destructure_map(map__35556);
var units = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35556__$1,new cljs.core.Keyword(null,"units","units",-533089095));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35556__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var faction_eid = zetawar.db.e(zetawar.game.faction_by_color(db,game,color));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35557){
var map__35558 = p__35557;
var map__35558__$1 = cljs.core.__destructure_map(map__35558);
var unit = map__35558__$1;
var q = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35558__$1,new cljs.core.Keyword(null,"q","q",689001697));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35558__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var unit_type_id = zetawar.game.to_unit_type_id(new cljs.core.Keyword(null,"unit-type","unit-type",767606086).cljs$core$IFn$_invoke$arity$1(unit));
var unit_state = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(unit);
var unit_type = zetawar.db.find_by.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("unit-type","id","unit-type/id",-865738639),unit_type_id);
var capturing = new cljs.core.Keyword(null,"capturing","capturing",251243898).cljs$core$IFn$_invoke$arity$2(unit,false);
var terrain = zetawar.game.terrain_at(db,game,q,r);
var G__35559 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("unit","attack-count","unit/attack-count",635284832),new cljs.core.Keyword("unit","capturing","unit/capturing",247751174),new cljs.core.Keyword("unit","round-built","unit/round-built",1547727048),new cljs.core.Keyword("unit","game-pos-idx","unit/game-pos-idx",2034098862),new cljs.core.Keyword("unit","type","unit/type",1170646544),new cljs.core.Keyword("unit","count","unit/count",2144714993),new cljs.core.Keyword("unit","terrain","unit/terrain",692687601),new cljs.core.Keyword("unit","state","unit/state",-1991906543),new cljs.core.Keyword("unit","move-count","unit/move-count",1192826036),new cljs.core.Keyword("unit","attacked-count","unit/attacked-count",752022709),new cljs.core.Keyword("faction","_units","faction/_units",-227507819),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("unit","q","unit/q",675179613),new cljs.core.Keyword("unit","r","unit/r",-492034562),new cljs.core.Keyword("unit","repaired","unit/repaired",460557471)],[new cljs.core.Keyword(null,"attack-count","attack-count",515139316).cljs$core$IFn$_invoke$arity$2(unit,(0)),capturing,new cljs.core.Keyword(null,"round-built","round-built",1551406892).cljs$core$IFn$_invoke$arity$2(unit,(0)),zetawar.game.game_pos_idx(game,q,r),zetawar.db.e(unit_type),new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$2(unit,max_count_per_unit),zetawar.db.e(terrain),(cljs.core.truth_(unit_state)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unit-state","game-id-idx","unit-state/game-id-idx",1110742406),zetawar.game.game_id_idx(game_id,zetawar.game.to_unit_state_id.cljs$core$IFn$_invoke$arity$1(unit_state))], null):zetawar.db.e(zetawar.game.start_state(unit_type))),new cljs.core.Keyword(null,"move-count","move-count",1189091840).cljs$core$IFn$_invoke$arity$2(unit,(0)),new cljs.core.Keyword(null,"attack-count","attack-count",515139316).cljs$core$IFn$_invoke$arity$2(unit,(0)),faction_eid,zetawar.db.next_temp_id(),q,r,new cljs.core.Keyword(null,"repaired","repaired",287223323).cljs$core$IFn$_invoke$arity$2(unit,false)]);
if(cljs.core.truth_(capturing)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35559,new cljs.core.Keyword("unit","capture-round","unit/capture-round",-1153071298),new cljs.core.Keyword(null,"capture-round","capture-round",-1149440582).cljs$core$IFn$_invoke$arity$1(unit));
} else {
return G__35559;
}
}),units);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([factions], 0));
});
zetawar.game.load_scenario_BANG_ = (function zetawar$game$load_scenario_BANG_(conn,rulesets,map_defs,scenario_def){
var game_id = zetawar.game.create_game_BANG_.cljs$core$IFn$_invoke$arity$2(conn,scenario_def);
var map__35560 = scenario_def;
var map__35560__$1 = cljs.core.__destructure_map(map__35560);
var ruleset_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35560__$1,new cljs.core.Keyword(null,"ruleset-id","ruleset-id",2099887593));
var map_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35560__$1,new cljs.core.Keyword(null,"map-id","map-id",-2108508083));
var credits_per_base = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35560__$1,new cljs.core.Keyword(null,"credits-per-base","credits-per-base",15967561));
var factions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35560__$1,new cljs.core.Keyword(null,"factions","factions",193345267));
var starting_faction_color = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(factions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),new cljs.core.Keyword(null,"color","color",1011675173)], null));
var ruleset = (rulesets.cljs$core$IFn$_invoke$arity$1 ? rulesets.cljs$core$IFn$_invoke$arity$1(ruleset_id) : rulesets.call(null,ruleset_id));
datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,zetawar.game.settings_tx(cljs.core.deref(conn),game_id,new cljs.core.Keyword(null,"settings","settings",1556144875).cljs$core$IFn$_invoke$arity$1(ruleset)));

datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,zetawar.game.terrain_types_tx(cljs.core.deref(conn),game_id,new cljs.core.Keyword(null,"terrains","terrains",571447067).cljs$core$IFn$_invoke$arity$1(ruleset)));

datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,zetawar.game.unit_state_map_tx(cljs.core.deref(conn),game_id,new cljs.core.Keyword(null,"unit-state-maps","unit-state-maps",-1183853262).cljs$core$IFn$_invoke$arity$1(ruleset)));

datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,zetawar.game.unit_types_tx(cljs.core.deref(conn),game_id,new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(ruleset)));

datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,zetawar.game.game_map_tx(cljs.core.deref(conn),game_id,(map_defs.cljs$core$IFn$_invoke$arity$1 ? map_defs.cljs$core$IFn$_invoke$arity$1(map_id) : map_defs.call(null,map_id))));

datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,zetawar.game.bases_tx(cljs.core.deref(conn),game_id,scenario_def));

datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,zetawar.game.factions_tx(cljs.core.deref(conn),game_id,factions));

datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,zetawar.game.factions_bases_tx(cljs.core.deref(conn),game_id,factions));

datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,zetawar.game.factions_units_tx(cljs.core.deref(conn),game_id,factions));

var db_36118 = cljs.core.deref(conn);
var game_36119 = zetawar.game.game_by_id(db_36118,game_id);
var starting_faction_eid_36120 = zetawar.db.e(zetawar.game.faction_by_color(db_36118,game_36119,starting_faction_color));
datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),zetawar.db.e(game_36119),new cljs.core.Keyword("game","starting-faction","game/starting-faction",1985241055),starting_faction_eid_36120,new cljs.core.Keyword("game","current-faction","game/current-faction",-1129931374),starting_faction_eid_36120], null)], null));

return game_id;
});
zetawar.game.load_game_state_BANG_ = (function zetawar$game$load_game_state_BANG_(conn,rulesets,map_defs,scenario_defs,game_state){
var map__35561 = game_state;
var map__35561__$1 = cljs.core.__destructure_map(map__35561);
var scenario_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35561__$1,new cljs.core.Keyword(null,"scenario-id","scenario-id",199208014));
var factions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35561__$1,new cljs.core.Keyword(null,"factions","factions",193345267));
var current_faction_color = new cljs.core.Keyword(null,"current-faction","current-faction",-1124664924).cljs$core$IFn$_invoke$arity$1(game_state);
var scenario_def = (scenario_defs.cljs$core$IFn$_invoke$arity$1 ? scenario_defs.cljs$core$IFn$_invoke$arity$1(scenario_id) : scenario_defs.call(null,scenario_id));
var starting_faction_color = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(scenario_def,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"factions","factions",193345267),(0),new cljs.core.Keyword(null,"color","color",1011675173)], null));
var game_id = zetawar.game.create_game_BANG_.cljs$core$IFn$_invoke$arity$3(conn,scenario_def,game_state);
var map__35562 = scenario_def;
var map__35562__$1 = cljs.core.__destructure_map(map__35562);
var ruleset_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35562__$1,new cljs.core.Keyword(null,"ruleset-id","ruleset-id",2099887593));
var map_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35562__$1,new cljs.core.Keyword(null,"map-id","map-id",-2108508083));
var credits_per_base = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35562__$1,new cljs.core.Keyword(null,"credits-per-base","credits-per-base",15967561));
var ruleset = (rulesets.cljs$core$IFn$_invoke$arity$1 ? rulesets.cljs$core$IFn$_invoke$arity$1(ruleset_id) : rulesets.call(null,ruleset_id));
datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,zetawar.game.settings_tx(cljs.core.deref(conn),game_id,new cljs.core.Keyword(null,"settings","settings",1556144875).cljs$core$IFn$_invoke$arity$1(ruleset)));

datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,zetawar.game.terrain_types_tx(cljs.core.deref(conn),game_id,new cljs.core.Keyword(null,"terrains","terrains",571447067).cljs$core$IFn$_invoke$arity$1(ruleset)));

datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,zetawar.game.unit_state_map_tx(cljs.core.deref(conn),game_id,new cljs.core.Keyword(null,"unit-state-maps","unit-state-maps",-1183853262).cljs$core$IFn$_invoke$arity$1(ruleset)));

datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,zetawar.game.unit_types_tx(cljs.core.deref(conn),game_id,new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(ruleset)));

datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,zetawar.game.game_map_tx(cljs.core.deref(conn),game_id,(map_defs.cljs$core$IFn$_invoke$arity$1 ? map_defs.cljs$core$IFn$_invoke$arity$1(map_id) : map_defs.call(null,map_id))));

datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,zetawar.game.bases_tx(cljs.core.deref(conn),game_id,scenario_def));

datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,zetawar.game.factions_tx(cljs.core.deref(conn),game_id,factions));

datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,zetawar.game.factions_bases_tx(cljs.core.deref(conn),game_id,factions));

datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,zetawar.game.factions_units_tx(cljs.core.deref(conn),game_id,factions));

var db_36125 = cljs.core.deref(conn);
var game_36126 = zetawar.game.game_by_id(db_36125,game_id);
var starting_faction_eid_36127 = zetawar.db.e(zetawar.game.faction_by_color(db_36125,game_36126,starting_faction_color));
var current_faction_eid_36128 = zetawar.db.e(zetawar.game.faction_by_color(db_36125,game_36126,current_faction_color));
datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),zetawar.db.e(game_36126),new cljs.core.Keyword("game","starting-faction","game/starting-faction",1985241055),starting_faction_eid_36127,new cljs.core.Keyword("game","current-faction","game/current-faction",-1129931374),current_faction_eid_36128], null)], null));

return game_id;
});
zetawar.game.get_game_state = (function zetawar$game$get_game_state(var_args){
var G__35564 = arguments.length;
switch (G__35564) {
case 2:
return zetawar.game.get_game_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return zetawar.game.get_game_state.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zetawar.game.get_game_state.cljs$core$IFn$_invoke$arity$2 = (function (db,game){
return zetawar.game.get_game_state.cljs$core$IFn$_invoke$arity$3(db,game,new cljs.core.Keyword(null,"minimal","minimal",1065044499));
}));

(zetawar.game.get_game_state.cljs$core$IFn$_invoke$arity$3 = (function (db,game,dump_type){
var factions = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword("game","factions","game/factions",148269805).cljs$core$IFn$_invoke$arity$1(game));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"scenario-id","scenario-id",199208014),new cljs.core.Keyword("game","scenario-id","game/scenario-id",204472380).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"round","round",2009433328),new cljs.core.Keyword("game","round","game/round",2008373466).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"current-faction","current-faction",-1124664924),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword("faction","color","faction/color",2104478137).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("game","current-faction","game/current-faction",-1129931374).cljs$core$IFn$_invoke$arity$1(game)))),new cljs.core.Keyword(null,"factions","factions",193345267),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5523__auto__ = (function zetawar$game$iter__35565(s__35566){
return (new cljs.core.LazySeq(null,(function (){
var s__35566__$1 = s__35566;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__35566__$1);
if(temp__5823__auto__){
var s__35566__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35566__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__35566__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__35568 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__35567 = (0);
while(true){
if((i__35567 < size__5522__auto__)){
var faction = cljs.core._nth(c__5521__auto__,i__35567);
cljs.core.chunk_append(b__35568,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"credits","credits",785860820),new cljs.core.Keyword("faction","credits","faction/credits",-232627472).cljs$core$IFn$_invoke$arity$1(faction),new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword("faction","ai","faction/ai",1819183109).cljs$core$IFn$_invoke$arity$1(faction),new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword("faction","color","faction/color",2104478137).cljs$core$IFn$_invoke$arity$1(faction))),new cljs.core.Keyword(null,"bases","bases",-1036892420),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5523__auto__ = ((function (i__35567,faction,c__5521__auto__,size__5522__auto__,b__35568,s__35566__$2,temp__5823__auto__,factions){
return (function zetawar$game$iter__35565_$_iter__35569(s__35570){
return (new cljs.core.LazySeq(null,((function (i__35567,faction,c__5521__auto__,size__5522__auto__,b__35568,s__35566__$2,temp__5823__auto__,factions){
return (function (){
var s__35570__$1 = s__35570;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__35570__$1);
if(temp__5823__auto____$1){
var s__35570__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35570__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__35570__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__35572 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__35571 = (0);
while(true){
if((i__35571 < size__5522__auto____$1)){
var base = cljs.core._nth(c__5521__auto____$1,i__35571);
cljs.core.chunk_append(b__35572,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"q","q",689001697),new cljs.core.Keyword("terrain","q","terrain/q",2698702).cljs$core$IFn$_invoke$arity$1(base),new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword("terrain","r","terrain/r",-1753264147).cljs$core$IFn$_invoke$arity$1(base)], null));

var G__36138 = (i__35571 + (1));
i__35571 = G__36138;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35572),zetawar$game$iter__35565_$_iter__35569(cljs.core.chunk_rest(s__35570__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35572),null);
}
} else {
var base = cljs.core.first(s__35570__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"q","q",689001697),new cljs.core.Keyword("terrain","q","terrain/q",2698702).cljs$core$IFn$_invoke$arity$1(base),new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword("terrain","r","terrain/r",-1753264147).cljs$core$IFn$_invoke$arity$1(base)], null),zetawar$game$iter__35565_$_iter__35569(cljs.core.rest(s__35570__$2)));
}
} else {
return null;
}
break;
}
});})(i__35567,faction,c__5521__auto__,size__5522__auto__,b__35568,s__35566__$2,temp__5823__auto__,factions))
,null,null));
});})(i__35567,faction,c__5521__auto__,size__5522__auto__,b__35568,s__35566__$2,temp__5823__auto__,factions))
;
return iter__5523__auto__(zetawar.game.faction_bases(db,faction));
})()),new cljs.core.Keyword(null,"units","units",-533089095),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5523__auto__ = ((function (i__35567,faction,c__5521__auto__,size__5522__auto__,b__35568,s__35566__$2,temp__5823__auto__,factions){
return (function zetawar$game$iter__35565_$_iter__35573(s__35574){
return (new cljs.core.LazySeq(null,((function (i__35567,faction,c__5521__auto__,size__5522__auto__,b__35568,s__35566__$2,temp__5823__auto__,factions){
return (function (){
var s__35574__$1 = s__35574;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__35574__$1);
if(temp__5823__auto____$1){
var s__35574__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35574__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__35574__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__35576 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__35575 = (0);
while(true){
if((i__35575 < size__5522__auto____$1)){
var unit = cljs.core._nth(c__5521__auto____$1,i__35575);
cljs.core.chunk_append(b__35576,(function (){var G__35577 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"q","q",689001697),new cljs.core.Keyword("unit","q","unit/q",675179613).cljs$core$IFn$_invoke$arity$1(unit),new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword("unit","r","unit/r",-492034562).cljs$core$IFn$_invoke$arity$1(unit),new cljs.core.Keyword(null,"unit-type","unit-type",767606086),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword("unit-type","id","unit-type/id",-865738639).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("unit","type","unit/type",1170646544).cljs$core$IFn$_invoke$arity$1(unit)))),new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.Keyword("unit","count","unit/count",2144714993).cljs$core$IFn$_invoke$arity$1(unit)], null);
var G__35577__$1 = (cljs.core.truth_(new cljs.core.Keyword("unit","capturing","unit/capturing",247751174).cljs$core$IFn$_invoke$arity$1(unit))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__35577,new cljs.core.Keyword(null,"capturing","capturing",251243898),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"capture-round","capture-round",-1149440582),new cljs.core.Keyword("unit","capture-round","unit/capture-round",-1153071298).cljs$core$IFn$_invoke$arity$1(unit)], 0)):G__35577);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dump_type,new cljs.core.Keyword(null,"full","full",436801220))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__35577__$1,new cljs.core.Keyword(null,"attack-count","attack-count",515139316),new cljs.core.Keyword("unit","attack-count","unit/attack-count",635284832).cljs$core$IFn$_invoke$arity$1(unit),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"move-count","move-count",1189091840),new cljs.core.Keyword("unit","move-count","unit/move-count",1192826036).cljs$core$IFn$_invoke$arity$1(unit),new cljs.core.Keyword(null,"repaired","repaired",287223323),new cljs.core.Keyword("unit","repaired","unit/repaired",460557471).cljs$core$IFn$_invoke$arity$1(unit),new cljs.core.Keyword(null,"round-built","round-built",1551406892),new cljs.core.Keyword("unit","round-built","unit/round-built",1547727048).cljs$core$IFn$_invoke$arity$1(unit),new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword("unit-state","id","unit-state/id",1732520780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("unit","state","unit/state",-1991906543).cljs$core$IFn$_invoke$arity$1(unit))))], 0));
} else {
return G__35577__$1;
}
})());

var G__36153 = (i__35575 + (1));
i__35575 = G__36153;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35576),zetawar$game$iter__35565_$_iter__35573(cljs.core.chunk_rest(s__35574__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35576),null);
}
} else {
var unit = cljs.core.first(s__35574__$2);
return cljs.core.cons((function (){var G__35578 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"q","q",689001697),new cljs.core.Keyword("unit","q","unit/q",675179613).cljs$core$IFn$_invoke$arity$1(unit),new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword("unit","r","unit/r",-492034562).cljs$core$IFn$_invoke$arity$1(unit),new cljs.core.Keyword(null,"unit-type","unit-type",767606086),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword("unit-type","id","unit-type/id",-865738639).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("unit","type","unit/type",1170646544).cljs$core$IFn$_invoke$arity$1(unit)))),new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.Keyword("unit","count","unit/count",2144714993).cljs$core$IFn$_invoke$arity$1(unit)], null);
var G__35578__$1 = (cljs.core.truth_(new cljs.core.Keyword("unit","capturing","unit/capturing",247751174).cljs$core$IFn$_invoke$arity$1(unit))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__35578,new cljs.core.Keyword(null,"capturing","capturing",251243898),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"capture-round","capture-round",-1149440582),new cljs.core.Keyword("unit","capture-round","unit/capture-round",-1153071298).cljs$core$IFn$_invoke$arity$1(unit)], 0)):G__35578);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dump_type,new cljs.core.Keyword(null,"full","full",436801220))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__35578__$1,new cljs.core.Keyword(null,"attack-count","attack-count",515139316),new cljs.core.Keyword("unit","attack-count","unit/attack-count",635284832).cljs$core$IFn$_invoke$arity$1(unit),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"move-count","move-count",1189091840),new cljs.core.Keyword("unit","move-count","unit/move-count",1192826036).cljs$core$IFn$_invoke$arity$1(unit),new cljs.core.Keyword(null,"repaired","repaired",287223323),new cljs.core.Keyword("unit","repaired","unit/repaired",460557471).cljs$core$IFn$_invoke$arity$1(unit),new cljs.core.Keyword(null,"round-built","round-built",1551406892),new cljs.core.Keyword("unit","round-built","unit/round-built",1547727048).cljs$core$IFn$_invoke$arity$1(unit),new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword("unit-state","id","unit-state/id",1732520780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("unit","state","unit/state",-1991906543).cljs$core$IFn$_invoke$arity$1(unit))))], 0));
} else {
return G__35578__$1;
}
})(),zetawar$game$iter__35565_$_iter__35573(cljs.core.rest(s__35574__$2)));
}
} else {
return null;
}
break;
}
});})(i__35567,faction,c__5521__auto__,size__5522__auto__,b__35568,s__35566__$2,temp__5823__auto__,factions))
,null,null));
});})(i__35567,faction,c__5521__auto__,size__5522__auto__,b__35568,s__35566__$2,temp__5823__auto__,factions))
;
return iter__5523__auto__(new cljs.core.Keyword("faction","units","faction/units",-1588815131).cljs$core$IFn$_invoke$arity$1(faction));
})())], null));

var G__36159 = (i__35567 + (1));
i__35567 = G__36159;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35568),zetawar$game$iter__35565(cljs.core.chunk_rest(s__35566__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35568),null);
}
} else {
var faction = cljs.core.first(s__35566__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"credits","credits",785860820),new cljs.core.Keyword("faction","credits","faction/credits",-232627472).cljs$core$IFn$_invoke$arity$1(faction),new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword("faction","ai","faction/ai",1819183109).cljs$core$IFn$_invoke$arity$1(faction),new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword("faction","color","faction/color",2104478137).cljs$core$IFn$_invoke$arity$1(faction))),new cljs.core.Keyword(null,"bases","bases",-1036892420),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5523__auto__ = ((function (faction,s__35566__$2,temp__5823__auto__,factions){
return (function zetawar$game$iter__35565_$_iter__35579(s__35580){
return (new cljs.core.LazySeq(null,(function (){
var s__35580__$1 = s__35580;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__35580__$1);
if(temp__5823__auto____$1){
var s__35580__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35580__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__35580__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__35582 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__35581 = (0);
while(true){
if((i__35581 < size__5522__auto__)){
var base = cljs.core._nth(c__5521__auto__,i__35581);
cljs.core.chunk_append(b__35582,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"q","q",689001697),new cljs.core.Keyword("terrain","q","terrain/q",2698702).cljs$core$IFn$_invoke$arity$1(base),new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword("terrain","r","terrain/r",-1753264147).cljs$core$IFn$_invoke$arity$1(base)], null));

var G__36169 = (i__35581 + (1));
i__35581 = G__36169;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35582),zetawar$game$iter__35565_$_iter__35579(cljs.core.chunk_rest(s__35580__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35582),null);
}
} else {
var base = cljs.core.first(s__35580__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"q","q",689001697),new cljs.core.Keyword("terrain","q","terrain/q",2698702).cljs$core$IFn$_invoke$arity$1(base),new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword("terrain","r","terrain/r",-1753264147).cljs$core$IFn$_invoke$arity$1(base)], null),zetawar$game$iter__35565_$_iter__35579(cljs.core.rest(s__35580__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(faction,s__35566__$2,temp__5823__auto__,factions))
;
return iter__5523__auto__(zetawar.game.faction_bases(db,faction));
})()),new cljs.core.Keyword(null,"units","units",-533089095),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5523__auto__ = ((function (faction,s__35566__$2,temp__5823__auto__,factions){
return (function zetawar$game$iter__35565_$_iter__35583(s__35584){
return (new cljs.core.LazySeq(null,(function (){
var s__35584__$1 = s__35584;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__35584__$1);
if(temp__5823__auto____$1){
var s__35584__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35584__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__35584__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__35586 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__35585 = (0);
while(true){
if((i__35585 < size__5522__auto__)){
var unit = cljs.core._nth(c__5521__auto__,i__35585);
cljs.core.chunk_append(b__35586,(function (){var G__35587 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"q","q",689001697),new cljs.core.Keyword("unit","q","unit/q",675179613).cljs$core$IFn$_invoke$arity$1(unit),new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword("unit","r","unit/r",-492034562).cljs$core$IFn$_invoke$arity$1(unit),new cljs.core.Keyword(null,"unit-type","unit-type",767606086),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword("unit-type","id","unit-type/id",-865738639).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("unit","type","unit/type",1170646544).cljs$core$IFn$_invoke$arity$1(unit)))),new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.Keyword("unit","count","unit/count",2144714993).cljs$core$IFn$_invoke$arity$1(unit)], null);
var G__35587__$1 = (cljs.core.truth_(new cljs.core.Keyword("unit","capturing","unit/capturing",247751174).cljs$core$IFn$_invoke$arity$1(unit))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__35587,new cljs.core.Keyword(null,"capturing","capturing",251243898),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"capture-round","capture-round",-1149440582),new cljs.core.Keyword("unit","capture-round","unit/capture-round",-1153071298).cljs$core$IFn$_invoke$arity$1(unit)], 0)):G__35587);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dump_type,new cljs.core.Keyword(null,"full","full",436801220))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__35587__$1,new cljs.core.Keyword(null,"attack-count","attack-count",515139316),new cljs.core.Keyword("unit","attack-count","unit/attack-count",635284832).cljs$core$IFn$_invoke$arity$1(unit),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"move-count","move-count",1189091840),new cljs.core.Keyword("unit","move-count","unit/move-count",1192826036).cljs$core$IFn$_invoke$arity$1(unit),new cljs.core.Keyword(null,"repaired","repaired",287223323),new cljs.core.Keyword("unit","repaired","unit/repaired",460557471).cljs$core$IFn$_invoke$arity$1(unit),new cljs.core.Keyword(null,"round-built","round-built",1551406892),new cljs.core.Keyword("unit","round-built","unit/round-built",1547727048).cljs$core$IFn$_invoke$arity$1(unit),new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword("unit-state","id","unit-state/id",1732520780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("unit","state","unit/state",-1991906543).cljs$core$IFn$_invoke$arity$1(unit))))], 0));
} else {
return G__35587__$1;
}
})());

var G__36170 = (i__35585 + (1));
i__35585 = G__36170;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35586),zetawar$game$iter__35565_$_iter__35583(cljs.core.chunk_rest(s__35584__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35586),null);
}
} else {
var unit = cljs.core.first(s__35584__$2);
return cljs.core.cons((function (){var G__35588 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"q","q",689001697),new cljs.core.Keyword("unit","q","unit/q",675179613).cljs$core$IFn$_invoke$arity$1(unit),new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword("unit","r","unit/r",-492034562).cljs$core$IFn$_invoke$arity$1(unit),new cljs.core.Keyword(null,"unit-type","unit-type",767606086),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword("unit-type","id","unit-type/id",-865738639).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("unit","type","unit/type",1170646544).cljs$core$IFn$_invoke$arity$1(unit)))),new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.Keyword("unit","count","unit/count",2144714993).cljs$core$IFn$_invoke$arity$1(unit)], null);
var G__35588__$1 = (cljs.core.truth_(new cljs.core.Keyword("unit","capturing","unit/capturing",247751174).cljs$core$IFn$_invoke$arity$1(unit))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__35588,new cljs.core.Keyword(null,"capturing","capturing",251243898),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"capture-round","capture-round",-1149440582),new cljs.core.Keyword("unit","capture-round","unit/capture-round",-1153071298).cljs$core$IFn$_invoke$arity$1(unit)], 0)):G__35588);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dump_type,new cljs.core.Keyword(null,"full","full",436801220))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__35588__$1,new cljs.core.Keyword(null,"attack-count","attack-count",515139316),new cljs.core.Keyword("unit","attack-count","unit/attack-count",635284832).cljs$core$IFn$_invoke$arity$1(unit),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"move-count","move-count",1189091840),new cljs.core.Keyword("unit","move-count","unit/move-count",1192826036).cljs$core$IFn$_invoke$arity$1(unit),new cljs.core.Keyword(null,"repaired","repaired",287223323),new cljs.core.Keyword("unit","repaired","unit/repaired",460557471).cljs$core$IFn$_invoke$arity$1(unit),new cljs.core.Keyword(null,"round-built","round-built",1551406892),new cljs.core.Keyword("unit","round-built","unit/round-built",1547727048).cljs$core$IFn$_invoke$arity$1(unit),new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword("unit-state","id","unit-state/id",1732520780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("unit","state","unit/state",-1991906543).cljs$core$IFn$_invoke$arity$1(unit))))], 0));
} else {
return G__35588__$1;
}
})(),zetawar$game$iter__35565_$_iter__35583(cljs.core.rest(s__35584__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(faction,s__35566__$2,temp__5823__auto__,factions))
;
return iter__5523__auto__(new cljs.core.Keyword("faction","units","faction/units",-1588815131).cljs$core$IFn$_invoke$arity$1(faction));
})())], null),zetawar$game$iter__35565(cljs.core.rest(s__35566__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(factions);
})())], null);
}));

(zetawar.game.get_game_state.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=zetawar.game.js.map
