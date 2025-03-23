goog.provide('zetawar.subs');
zetawar.subs.app_eid = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$app_eid(conn){
return cljs.core.ffirst(cljs.core.deref(posh.reagent.q.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?a","?a",1314302913,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?a","?a",1314302913,null),new cljs.core.Keyword("app","game","app/game",-441616472)], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([conn], 0))));
}));
zetawar.subs.app = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$app(conn){
return cljs.core.deref(posh.reagent.pull.cljs$core$IFn$_invoke$arity$3(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),cljs.core.deref(zetawar.subs.app_eid(conn))));
}));
zetawar.subs.game_eid = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$game_eid(conn){
return zetawar.db.e(new cljs.core.Keyword("app","game","app/game",-441616472).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(zetawar.subs.app(conn))));
}));
zetawar.subs.game_pull = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game","id","game/id",-1385234878),new cljs.core.Keyword("game","self-repair","game/self-repair",1572141403),new cljs.core.Keyword("game","credits-per-base","game/credits-per-base",19222847),new cljs.core.Keyword("game","max-count-per-unit","game/max-count-per-unit",1362901090),new cljs.core.Keyword("game","scenario-id","game/scenario-id",204472380),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("game","map","game/map",1374722543),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("game","factions","game/factions",148269805),cljs.core.PersistentVector.EMPTY], null),new cljs.core.Keyword("game","starting-faction","game/starting-faction",1985241055),new cljs.core.Keyword("game","current-faction","game/current-faction",-1129931374),new cljs.core.Keyword("game","round","game/round",2008373466)], null);
zetawar.subs.game = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$game(conn){
return cljs.core.deref(posh.reagent.pull.cljs$core$IFn$_invoke$arity$3(conn,zetawar.subs.game_pull,cljs.core.deref(zetawar.subs.game_eid(conn))));
}));
zetawar.subs.game_map_eid = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$game_map_eid(conn){
return zetawar.db.e(new cljs.core.Keyword("game","map","game/map",1374722543).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(zetawar.subs.game(conn))));
}));
zetawar.subs.game_map = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$game_map(conn){
return cljs.core.deref(posh.reagent.pull.cljs$core$IFn$_invoke$arity$3(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","description","map/description",-1428477252)], null),cljs.core.deref(zetawar.subs.game_map_eid(conn))));
}));
zetawar.subs.terrain_eid_at = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$terrain_eid_at(conn,q,r){
var game_eid_SINGLEQUOTE_ = cljs.core.deref(zetawar.subs.game_eid(conn));
var idx = zetawar.game.game_pos_idx(game_eid_SINGLEQUOTE_,q,r);
return cljs.core.ffirst(cljs.core.deref(posh.reagent.q.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?u","?u",749886731,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?idx","?idx",687068061,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?u","?u",749886731,null),new cljs.core.Keyword("terrain","game-pos-idx","terrain/game-pos-idx",340565053),new cljs.core.Symbol(null,"?idx","?idx",687068061,null)], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([conn,zetawar.game.game_pos_idx(game_eid_SINGLEQUOTE_,q,r)], 0))));
}));
zetawar.subs.terrain_pull = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("terrain","q","terrain/q",2698702),new cljs.core.Keyword("terrain","r","terrain/r",-1753264147),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("terrain","type","terrain/type",-1187652655),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("terrain-type","id","terrain-type/id",-1035336862),new cljs.core.Keyword("terrain-type","image","terrain-type/image",1433542086),new cljs.core.Keyword("terrain-type","can-build","terrain-type/can-build",1032082687)], null),new cljs.core.Keyword("terrain","owner","terrain/owner",1031873140),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("faction","color","faction/color",2104478137)], null)], null)], null);
zetawar.subs.terrain_at = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$terrain_at(conn,q,r){
var temp__5823__auto__ = cljs.core.deref(zetawar.subs.terrain_eid_at(conn,q,r));
if(cljs.core.truth_(temp__5823__auto__)){
var terrain_eid = temp__5823__auto__;
return cljs.core.deref(posh.reagent.pull.cljs$core$IFn$_invoke$arity$3(conn,zetawar.subs.terrain_pull,terrain_eid));
} else {
return null;
}
}));
zetawar.subs.terrains = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$terrains(conn){
var map_eid_SINGLEQUOTE_ = cljs.core.deref(zetawar.subs.game_map_eid(conn));
return new cljs.core.Keyword("map","terrains","map/terrains",571601527).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(posh.reagent.pull.cljs$core$IFn$_invoke$arity$3(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("map","terrains","map/terrains",571601527),zetawar.subs.terrain_pull], null)], null),map_eid_SINGLEQUOTE_)));
}));
zetawar.subs.map_width = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$map_width(conn){
var or__5045__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("terrain","q","terrain/q",2698702),cljs.core.deref(zetawar.subs.terrains(conn))));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
}));
zetawar.subs.map_height = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$map_height(conn){
var or__5045__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("terrain","r","terrain/r",-1753264147),cljs.core.deref(zetawar.subs.terrains(conn))));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
}));
zetawar.subs.map_width_px = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$map_width_px(conn){
return (zetawar.tiles.odd_row_column_offset + (zetawar.tiles.width * (cljs.core.deref(zetawar.subs.map_width(conn)) + (1))));
}));
zetawar.subs.map_height_px = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$map_height_px(conn){
return (zetawar.tiles.height + (zetawar.tiles.row_offset * cljs.core.deref(zetawar.subs.map_height(conn))));
}));
zetawar.subs.current_base_locations = (function zetawar$subs$current_base_locations(conn){
return posh.reagent.q.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?q","?q",632551402,null),new cljs.core.Symbol(null,"?r","?r",-516400708,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Keyword("app","game","app/game",-441616472),new cljs.core.Symbol(null,"?g","?g",589440221,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?g","?g",589440221,null),new cljs.core.Keyword("game","map","game/map",1374722543),new cljs.core.Symbol(null,"?m","?m",896026745,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?g","?g",589440221,null),new cljs.core.Keyword("game","current-faction","game/current-faction",-1129931374),new cljs.core.Symbol(null,"?f","?f",-1121766265,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.Keyword("terrain","owner","terrain/owner",1031873140),new cljs.core.Symbol(null,"?f","?f",-1121766265,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?m","?m",896026745,null),new cljs.core.Keyword("map","terrains","map/terrains",571601527),new cljs.core.Symbol(null,"?t","?t",1786819229,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.Keyword("terrain","q","terrain/q",2698702),new cljs.core.Symbol(null,"?q","?q",632551402,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.Keyword("terrain","r","terrain/r",-1753264147),new cljs.core.Symbol(null,"?r","?r",-516400708,null)], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([conn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cache","cache",-1237023054),new cljs.core.Keyword(null,"forever","forever",2103455015)], null)], 0));
});
zetawar.subs.current_base_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$current_base_QMARK_(conn,q,r){
return cljs.core.contains_QMARK_(cljs.core.deref(zetawar.subs.current_base_locations(conn)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,r], null));
}));
zetawar.subs.faction_eids = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$faction_eids(conn){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(zetawar.db.e),new cljs.core.Keyword("game","factions","game/factions",148269805).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(zetawar.subs.game(conn))));
}));
zetawar.subs.faction_pull = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("faction","color","faction/color",2104478137),new cljs.core.Keyword("faction","credits","faction/credits",-232627472),new cljs.core.Keyword("faction","player-type","faction/player-type",1769856328),new cljs.core.Keyword("faction","ai","faction/ai",1819183109),new cljs.core.Keyword("faction","next-faction","faction/next-faction",23975586),new cljs.core.Keyword("faction","order","faction/order",1979451148)], null);
zetawar.subs.factions_by_eid = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$factions_by_eid(conn){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (eid){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eid,cljs.core.deref(posh.reagent.pull.cljs$core$IFn$_invoke$arity$3(conn,zetawar.subs.faction_pull,eid))], null);
}),cljs.core.deref(zetawar.subs.faction_eids(conn))));
}));
zetawar.subs.factions = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$factions(conn){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("faction","order","faction/order",1979451148),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.deref(zetawar.subs.factions_by_eid(conn)))));
}));
zetawar.subs.faction_eid__GT_base_count = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$faction_eid__GT_base_count(conn){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.deref(posh.reagent.q.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?f","?f",-1121766265,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"?t","?t",1786819229,null)),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Keyword("app","game","app/game",-441616472),new cljs.core.Symbol(null,"?g","?g",589440221,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?g","?g",589440221,null),new cljs.core.Keyword("game","factions","game/factions",148269805),new cljs.core.Symbol(null,"?f","?f",-1121766265,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.Keyword("terrain","owner","terrain/owner",1031873140),new cljs.core.Symbol(null,"?f","?f",-1121766265,null)], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([conn], 0))));
}));
zetawar.subs.faction_eid__GT_base_being_captured_count = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$faction_eid__GT_base_being_captured_count(conn){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.deref(posh.reagent.q.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?f","?f",-1121766265,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"?t","?t",1786819229,null)),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Keyword("app","game","app/game",-441616472),new cljs.core.Symbol(null,"?g","?g",589440221,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?g","?g",589440221,null),new cljs.core.Keyword("game","factions","game/factions",148269805),new cljs.core.Symbol(null,"?f","?f",-1121766265,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.Keyword("terrain","owner","terrain/owner",1031873140),new cljs.core.Symbol(null,"?f","?f",-1121766265,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?g","?g",589440221,null),new cljs.core.Keyword("game","factions","game/factions",148269805),new cljs.core.Symbol(null,"?ef","?ef",248987097,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"?ef","?ef",248987097,null),new cljs.core.Symbol(null,"?f","?f",-1121766265,null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?ef","?ef",248987097,null),new cljs.core.Keyword("faction","units","faction/units",-1588815131),new cljs.core.Symbol(null,"?u","?u",749886731,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?u","?u",749886731,null),new cljs.core.Keyword("unit","terrain","unit/terrain",692687601),new cljs.core.Symbol(null,"?t","?t",1786819229,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?u","?u",749886731,null),new cljs.core.Keyword("unit","capturing","unit/capturing",247751174),true], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([conn], 0))));
}));
zetawar.subs.faction_eid__GT_unit_count = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$faction_eid__GT_unit_count(conn){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.deref(posh.reagent.q.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?f","?f",-1121766265,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"?u","?u",749886731,null)),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Keyword("app","game","app/game",-441616472),new cljs.core.Symbol(null,"?g","?g",589440221,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?g","?g",589440221,null),new cljs.core.Keyword("game","factions","game/factions",148269805),new cljs.core.Symbol(null,"?f","?f",-1121766265,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?f","?f",-1121766265,null),new cljs.core.Keyword("faction","units","faction/units",-1588815131),new cljs.core.Symbol(null,"?u","?u",749886731,null)], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([conn], 0))));
}));
zetawar.subs.winning_faction_eid = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$winning_faction_eid(conn){
var faction_eids_with_bases = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__35605_SHARP_){
return (cljs.core.second(p1__35605_SHARP_) > (0));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.first)),cljs.core.deref(zetawar.subs.faction_eid__GT_base_count(conn)));
var faction_eids_with_units = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__35606_SHARP_){
return (cljs.core.second(p1__35606_SHARP_) > (0));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.first)),cljs.core.deref(zetawar.subs.faction_eid__GT_unit_count(conn)));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(faction_eids_with_bases),(1))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(faction_eids_with_units),(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(faction_eids_with_bases,faction_eids_with_units)))))){
return cljs.core.first(faction_eids_with_bases);
} else {
return null;
}
}));
zetawar.subs.current_faction_eid = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$current_faction_eid(conn){
return zetawar.db.e(new cljs.core.Keyword("game","current-faction","game/current-faction",-1129931374).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(zetawar.subs.game(conn))));
}));
zetawar.subs.current_faction = (function zetawar$subs$current_faction(conn){
return posh.reagent.pull.cljs$core$IFn$_invoke$arity$3(conn,zetawar.subs.faction_pull,cljs.core.deref(zetawar.subs.current_faction_eid(conn)));
});
zetawar.subs.current_faction_won_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$current_faction_won_QMARK_(conn){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(zetawar.subs.current_faction_eid(conn)),cljs.core.deref(zetawar.subs.winning_faction_eid(conn)));
}));
zetawar.subs.current_base_count = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$current_base_count(conn){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(zetawar.subs.faction_eid__GT_base_count(conn)),cljs.core.deref(zetawar.subs.current_faction_eid(conn)));
}));
zetawar.subs.current_base_being_captured_count = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$current_base_being_captured_count(conn){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(zetawar.subs.faction_eid__GT_base_being_captured_count(conn)),cljs.core.deref(zetawar.subs.current_faction_eid(conn)));
}));
zetawar.subs.current_unit_count = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$current_unit_count(conn){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(zetawar.subs.faction_eid__GT_unit_count(conn)),cljs.core.deref(zetawar.subs.current_faction_eid(conn)));
}));
zetawar.subs.current_income = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$current_income(conn){
var map__35608 = cljs.core.deref(zetawar.subs.game(conn));
var map__35608__$1 = cljs.core.__destructure_map(map__35608);
var credits_per_base = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35608__$1,new cljs.core.Keyword("game","credits-per-base","game/credits-per-base",19222847));
return (credits_per_base * (cljs.core.deref(zetawar.subs.current_base_count(conn)) - cljs.core.deref(zetawar.subs.current_base_being_captured_count(conn))));
}));
zetawar.subs.enemy_unit_count = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$enemy_unit_count(conn){
var or__5045__auto__ = cljs.core.ffirst(cljs.core.deref(posh.reagent.q.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"?u","?u",749886731,null)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?cf","?cf",757867184,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?f","?f",-1121766265,null),new cljs.core.Keyword("faction","units","faction/units",-1588815131),new cljs.core.Symbol(null,"?u","?u",749886731,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"?f","?f",-1121766265,null),new cljs.core.Symbol(null,"?cf","?cf",757867184,null))], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([conn,cljs.core.deref(zetawar.subs.current_faction_eid(conn))], 0))));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
}));
zetawar.subs.enemy_base_count = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$enemy_base_count(conn){
var or__5045__auto__ = cljs.core.ffirst(cljs.core.deref(posh.reagent.q.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"?b","?b",1575118075,null)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?cf","?cf",757867184,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("terrain","owner","terrain/owner",1031873140),new cljs.core.Symbol(null,"?f","?f",-1121766265,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"?f","?f",-1121766265,null),new cljs.core.Symbol(null,"?cf","?cf",757867184,null))], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([conn,cljs.core.deref(zetawar.subs.current_faction_eid(conn))], 0))));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
}));
zetawar.subs.faction_color_name = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$faction_color_name(faction){
if(cljs.core.truth_(cljs.core.deref(faction))){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword("faction","color","faction/color",2104478137).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(faction))),"-name"].join(''));
} else {
return null;
}
}));
zetawar.subs.unit_eid_at = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$unit_eid_at(conn,q,r){
var game_eid_SINGLEQUOTE_ = cljs.core.deref(zetawar.subs.game_eid(conn));
var idx = zetawar.game.game_pos_idx(game_eid_SINGLEQUOTE_,q,r);
return cljs.core.ffirst(cljs.core.deref(posh.reagent.q.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?u","?u",749886731,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?idx","?idx",687068061,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?u","?u",749886731,null),new cljs.core.Keyword("unit","game-pos-idx","unit/game-pos-idx",2034098862),new cljs.core.Symbol(null,"?idx","?idx",687068061,null)], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([conn,idx], 0))));
}));
zetawar.subs.unit_at_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$unit_at_QMARK_(conn,q,r){
return (!((cljs.core.deref(zetawar.subs.unit_eid_at(conn,q,r)) == null)));
}));
zetawar.subs.unit_at = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$unit_at(conn,q,r){
var temp__5823__auto__ = cljs.core.deref(zetawar.subs.unit_eid_at(conn,q,r));
if(cljs.core.truth_(temp__5823__auto__)){
var unit_eid = temp__5823__auto__;
return cljs.core.deref(posh.reagent.pull.cljs$core$IFn$_invoke$arity$3(conn,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unit","q","unit/q",675179613),new cljs.core.Keyword("unit","r","unit/r",-492034562),new cljs.core.Keyword("unit","round-built","unit/round-built",1547727048),new cljs.core.Keyword("unit","move-count","unit/move-count",1192826036),new cljs.core.Keyword("unit","attack-count","unit/attack-count",635284832),new cljs.core.Keyword("unit","count","unit/count",2144714993),new cljs.core.Keyword("unit","repaired","unit/repaired",460557471),new cljs.core.Keyword("unit","capturing","unit/capturing",247751174),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("faction","_units","faction/_units",-227507819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("faction","color","faction/color",2104478137)], null),new cljs.core.Keyword("unit","type","unit/type",1170646544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unit-type","id","unit-type/id",-865738639),new cljs.core.Keyword("unit-type","description","unit-type/description",-841830541),new cljs.core.Keyword("unit-type","can-capture","unit-type/can-capture",1840854852),new cljs.core.Keyword("unit-type","can-repair","unit-type/can-repair",1128696439),new cljs.core.Keyword("unit-type","armor-type","unit-type/armor-type",101248352),new cljs.core.Keyword("unit-type","min-range","unit-type/min-range",1375530394),new cljs.core.Keyword("unit-type","max-range","unit-type/max-range",1175023596),new cljs.core.Keyword("unit-type","image","unit-type/image",1063125749)], null)], null)], null),unit_eid));
} else {
return null;
}
}));
zetawar.subs.current_unit_at = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$current_unit_at(conn,q,r){
var temp__5823__auto__ = cljs.core.deref(zetawar.subs.unit_at(conn,q,r));
if(cljs.core.truth_(temp__5823__auto__)){
var unit = temp__5823__auto__;
var cur_faction_eid = cljs.core.deref(zetawar.subs.current_faction_eid(conn));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cur_faction_eid,zetawar.db.e(new cljs.core.Keyword("faction","_units","faction/_units",-227507819).cljs$core$IFn$_invoke$arity$1(unit)))){
return unit;
} else {
return null;
}
} else {
return null;
}
}));
zetawar.subs.current_unit_eid_at = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$current_unit_eid_at(conn,q,r){
var G__35611 = cljs.core.deref(zetawar.subs.current_unit_at(conn,q,r));
if((G__35611 == null)){
return null;
} else {
return zetawar.db.e(G__35611);
}
}));
zetawar.subs.current_unit_at_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$current_unit_at_QMARK_(conn,q,r){
return (!((cljs.core.deref(zetawar.subs.current_unit_at(conn,q,r)) == null)));
}));
zetawar.subs.unit_color_at = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$unit_color_at(conn,q,r){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(zetawar.subs.unit_at(conn,q,r)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("faction","_units","faction/_units",-227507819),new cljs.core.Keyword("faction","color","faction/color",2104478137)], null));
}));
zetawar.subs.unit_type_at = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$unit_type_at(conn,q,r){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(zetawar.subs.unit_at(conn,q,r)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unit","type","unit/type",1170646544),new cljs.core.Keyword("unit-type","id","unit-type/id",-865738639)], null));
}));
zetawar.subs.enemy_locations = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$enemy_locations(conn){
return cljs.core.deref(posh.reagent.q.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?q","?q",632551402,null),new cljs.core.Symbol(null,"?r","?r",-516400708,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?g","?g",589440221,null),new cljs.core.Symbol(null,"?cf","?cf",757867184,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Keyword("app","game","app/game",-441616472),new cljs.core.Symbol(null,"?g","?g",589440221,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?g","?g",589440221,null),new cljs.core.Keyword("game","factions","game/factions",148269805),new cljs.core.Symbol(null,"?f","?f",-1121766265,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?f","?f",-1121766265,null),new cljs.core.Keyword("faction","units","faction/units",-1588815131),new cljs.core.Symbol(null,"?u","?u",749886731,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?u","?u",749886731,null),new cljs.core.Keyword("unit","q","unit/q",675179613),new cljs.core.Symbol(null,"?q","?q",632551402,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?u","?u",749886731,null),new cljs.core.Keyword("unit","r","unit/r",-492034562),new cljs.core.Symbol(null,"?r","?r",-516400708,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"?f","?f",-1121766265,null),new cljs.core.Symbol(null,"?cf","?cf",757867184,null))], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([conn,cljs.core.deref(zetawar.subs.game_eid(conn)),cljs.core.deref(zetawar.subs.current_faction_eid(conn)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cache","cache",-1237023054),new cljs.core.Keyword(null,"forever","forever",2103455015)], null)], 0)));
}));
zetawar.subs.enemy_at_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$enemy_at_QMARK_(conn,q,r){
return cljs.core.contains_QMARK_(cljs.core.deref(zetawar.subs.enemy_locations(conn)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,r], null));
}));
zetawar.subs.enemy_locations_in_range_of = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$enemy_locations_in_range_of(conn,q,r){
var attacker = cljs.core.deref(zetawar.subs.unit_at(conn,q,r));
var min_range = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(attacker,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unit","type","unit/type",1170646544),new cljs.core.Keyword("unit-type","min-range","unit-type/min-range",1375530394)], null));
var max_range = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(attacker,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unit","type","unit/type",1170646544),new cljs.core.Keyword("unit-type","max-range","unit-type/max-range",1175023596)], null));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__35612_SHARP_){
var distance = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(zetawar.hex.distance,q,r,p1__35612_SHARP_);
return (((distance >= min_range)) && ((distance <= max_range)));
})),cljs.core.deref(zetawar.subs.enemy_locations(conn)));
}));
zetawar.subs.any_enemy_in_range_of_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$any_enemy_in_range_of_QMARK_(conn,q,r){
return (!(cljs.core.empty_QMARK_(cljs.core.deref(zetawar.subs.enemy_locations_in_range_of(conn,q,r)))));
}));
zetawar.subs.in_range_of_enemy_at_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$in_range_of_enemy_at_QMARK_(conn,unit_q,unit_r,enemy_q,enemy_r){
return cljs.core.contains_QMARK_(cljs.core.deref(zetawar.subs.enemy_locations_in_range_of(conn,unit_q,unit_r)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enemy_q,enemy_r], null));
}));
zetawar.subs.friend_locations = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$friend_locations(conn){
return cljs.core.deref(posh.reagent.q.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?q","?q",632551402,null),new cljs.core.Symbol(null,"?r","?r",-516400708,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?g","?g",589440221,null),new cljs.core.Symbol(null,"?cf","?cf",757867184,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Keyword("app","game","app/game",-441616472),new cljs.core.Symbol(null,"?g","?g",589440221,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?g","?g",589440221,null),new cljs.core.Keyword("game","factions","game/factions",148269805),new cljs.core.Symbol(null,"?f","?f",-1121766265,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?f","?f",-1121766265,null),new cljs.core.Keyword("faction","units","faction/units",-1588815131),new cljs.core.Symbol(null,"?u","?u",749886731,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?u","?u",749886731,null),new cljs.core.Keyword("unit","q","unit/q",675179613),new cljs.core.Symbol(null,"?q","?q",632551402,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?u","?u",749886731,null),new cljs.core.Keyword("unit","r","unit/r",-492034562),new cljs.core.Symbol(null,"?r","?r",-516400708,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"?f","?f",-1121766265,null),new cljs.core.Symbol(null,"?cf","?cf",757867184,null))], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([conn,cljs.core.deref(zetawar.subs.game_eid(conn)),cljs.core.deref(zetawar.subs.current_faction_eid(conn)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cache","cache",-1237023054),new cljs.core.Keyword(null,"forever","forever",2103455015)], null)], 0)));
}));
zetawar.subs.friend_at_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$friend_at_QMARK_(conn,q,r){
return cljs.core.contains_QMARK_(cljs.core.deref(zetawar.subs.friend_locations(conn)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,r], null));
}));
zetawar.subs.friend_locations_in_range_of = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$friend_locations_in_range_of(conn,q,r){
var unit = cljs.core.deref(zetawar.subs.unit_at(conn,q,r));
var min_range = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(unit,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unit","type","unit/type",1170646544),new cljs.core.Keyword("unit-type","min-range","unit-type/min-range",1375530394)], null));
var max_range = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(unit,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unit","type","unit/type",1170646544),new cljs.core.Keyword("unit-type","max-range","unit-type/max-range",1175023596)], null));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__35617_SHARP_){
var distance = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(zetawar.hex.distance,q,r,p1__35617_SHARP_);
return (((distance >= min_range)) && ((distance <= max_range)));
})),cljs.core.deref(zetawar.subs.friend_locations(conn)));
}));
zetawar.subs.any_friend_in_range_of_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$any_friend_in_range_of_QMARK_(conn,q,r){
return (!(cljs.core.empty_QMARK_(cljs.core.deref(zetawar.subs.friend_locations_in_range_of(conn,q,r)))));
}));
zetawar.subs.in_range_of_friend_at_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$in_range_of_friend_at_QMARK_(conn,unit_q,unit_r,friend_q,friend_r){
return cljs.core.contains_QMARK_(cljs.core.deref(zetawar.subs.friend_locations_in_range_of(conn,unit_q,unit_r)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [friend_q,friend_r], null));
}));
zetawar.subs.unit_terrain_effects = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$unit_terrain_effects(conn,unit_q,unit_r,terrain_q,terrain_r){
var temp__5823__auto__ = cljs.core.deref(zetawar.subs.unit_at(conn,unit_q,unit_r));
if(cljs.core.truth_(temp__5823__auto__)){
var unit = temp__5823__auto__;
var terrain = cljs.core.deref(zetawar.subs.terrain_at(conn,terrain_q,terrain_r));
return zetawar.game.unit_terrain_effects(cljs.core.deref(conn),unit,terrain);
} else {
return null;
}
}));
zetawar.subs.repairable_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$repairable_QMARK_(conn,q,r){
var temp__5823__auto__ = cljs.core.deref(zetawar.subs.unit_at(conn,q,r));
if(cljs.core.truth_(temp__5823__auto__)){
var unit = temp__5823__auto__;
return zetawar.game.repairable_QMARK_(cljs.core.deref(conn),cljs.core.deref(zetawar.subs.game(conn)),unit);
} else {
return null;
}
}));
zetawar.subs.can_move_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$can_move_QMARK_(conn,q,r){
var temp__5823__auto__ = cljs.core.deref(zetawar.subs.unit_at(conn,q,r));
if(cljs.core.truth_(temp__5823__auto__)){
var unit = temp__5823__auto__;
return zetawar.game.can_move_QMARK_(cljs.core.deref(conn),cljs.core.deref(zetawar.subs.game(conn)),unit);
} else {
return null;
}
}));
zetawar.subs.can_attack_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$can_attack_QMARK_(conn,q,r){
var temp__5823__auto__ = cljs.core.deref(zetawar.subs.unit_at(conn,q,r));
if(cljs.core.truth_(temp__5823__auto__)){
var unit = temp__5823__auto__;
var and__5043__auto__ = zetawar.game.can_attack_QMARK_(cljs.core.deref(conn),cljs.core.deref(zetawar.subs.game(conn)),unit);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.deref(zetawar.subs.any_enemy_in_range_of_QMARK_(conn,q,r));
} else {
return and__5043__auto__;
}
} else {
return null;
}
}));
zetawar.subs.can_repair_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$can_repair_QMARK_(conn,q,r){
var temp__5823__auto__ = cljs.core.deref(zetawar.subs.unit_at(conn,q,r));
if(cljs.core.truth_(temp__5823__auto__)){
var unit = temp__5823__auto__;
return zetawar.game.can_repair_QMARK_(cljs.core.deref(conn),cljs.core.deref(zetawar.subs.game(conn)),unit);
} else {
return null;
}
}));
zetawar.subs.can_field_repair_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$can_field_repair_QMARK_(conn,q,r){
var temp__5823__auto__ = cljs.core.deref(zetawar.subs.unit_at(conn,q,r));
if(cljs.core.truth_(temp__5823__auto__)){
var unit = temp__5823__auto__;
return zetawar.game.can_field_repair_QMARK_(cljs.core.deref(conn),cljs.core.deref(zetawar.subs.game(conn)),unit);
} else {
return null;
}
}));
zetawar.subs.can_capture_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$can_capture_QMARK_(conn,q,r){
var unit = cljs.core.deref(zetawar.subs.unit_at(conn,q,r));
var terrain = cljs.core.deref(zetawar.subs.terrain_at(conn,q,r));
var and__5043__auto__ = unit;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = terrain;
if(cljs.core.truth_(and__5043__auto____$1)){
return zetawar.game.can_capture_QMARK_(cljs.core.deref(conn),cljs.core.deref(zetawar.subs.game(conn)),unit,terrain);
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}));
zetawar.subs.unit_can_act_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$unit_can_act_QMARK_(conn,q,r){
var or__5045__auto__ = cljs.core.deref(zetawar.subs.can_move_QMARK_(conn,q,r));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = cljs.core.deref(zetawar.subs.can_attack_QMARK_(conn,q,r));
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = cljs.core.deref(zetawar.subs.can_repair_QMARK_(conn,q,r));
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = cljs.core.deref(zetawar.subs.can_field_repair_QMARK_(conn,q,r));
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
return cljs.core.deref(zetawar.subs.can_capture_QMARK_(conn,q,r));
}
}
}
}
}));
zetawar.subs.selected_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$selected_QMARK_(conn,q,r){
var app_SINGLEQUOTE_ = cljs.core.deref(zetawar.subs.app(conn));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(q,new cljs.core.Keyword("app","selected-q","app/selected-q",1651135644).cljs$core$IFn$_invoke$arity$1(app_SINGLEQUOTE_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.Keyword("app","selected-r","app/selected-r",-2004026693).cljs$core$IFn$_invoke$arity$1(app_SINGLEQUOTE_))));
}));
zetawar.subs.targeted_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$targeted_QMARK_(conn,q,r){
var app_SINGLEQUOTE_ = cljs.core.deref(zetawar.subs.app(conn));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(q,new cljs.core.Keyword("app","targeted-q","app/targeted-q",657679208).cljs$core$IFn$_invoke$arity$1(app_SINGLEQUOTE_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.Keyword("app","targeted-r","app/targeted-r",1576976074).cljs$core$IFn$_invoke$arity$1(app_SINGLEQUOTE_))));
}));
zetawar.subs.selected_hex = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$selected_hex(conn){
return cljs.core.not_empty(zetawar.util.select_values(cljs.core.deref(zetawar.subs.app(conn)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","selected-q","app/selected-q",1651135644),new cljs.core.Keyword("app","selected-r","app/selected-r",-2004026693)], null)));
}));
zetawar.subs.targeted_hex = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$targeted_hex(conn){
return cljs.core.not_empty(zetawar.util.select_values(cljs.core.deref(zetawar.subs.app(conn)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","targeted-q","app/targeted-q",657679208),new cljs.core.Keyword("app","targeted-r","app/targeted-r",1576976074)], null)));
}));
zetawar.subs.selected_unit = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$selected_unit(conn){
var temp__5823__auto__ = cljs.core.deref(zetawar.subs.selected_hex(conn));
if(cljs.core.truth_(temp__5823__auto__)){
var vec__35654 = temp__5823__auto__;
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35654,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35654,(1),null);
return cljs.core.deref(zetawar.subs.unit_at(conn,q,r));
} else {
return null;
}
}));
zetawar.subs.selected_terrain_effects = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$selected_terrain_effects(conn){
var temp__5823__auto__ = cljs.core.deref(zetawar.subs.selected_hex(conn));
if(cljs.core.truth_(temp__5823__auto__)){
var vec__35657 = temp__5823__auto__;
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35657,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35657,(1),null);
return cljs.core.deref(zetawar.subs.unit_terrain_effects(conn,q,r,q,r));
} else {
return null;
}
}));
zetawar.subs.targeted_terrain_effects = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$targeted_terrain_effects(conn){
var temp__5823__auto__ = cljs.core.deref(zetawar.subs.targeted_hex(conn));
if(cljs.core.truth_(temp__5823__auto__)){
var vec__35662 = temp__5823__auto__;
var terrain_q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35662,(0),null);
var terrain_r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35662,(1),null);
var vec__35665 = cljs.core.deref(zetawar.subs.selected_hex(conn));
var unit_q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35665,(0),null);
var unit_r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35665,(1),null);
return cljs.core.deref(zetawar.subs.unit_terrain_effects(conn,unit_q,unit_r,terrain_q,terrain_r));
} else {
return null;
}
}));
zetawar.subs.unit_selected_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$unit_selected_QMARK_(conn){
var temp__5823__auto__ = cljs.core.deref(zetawar.subs.selected_hex(conn));
if(cljs.core.truth_(temp__5823__auto__)){
var vec__35670 = temp__5823__auto__;
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35670,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35670,(1),null);
return cljs.core.deref(zetawar.subs.unit_at_QMARK_(conn,q,r));
} else {
return null;
}
}));
zetawar.subs.selected_can_move_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$selected_can_move_QMARK_(conn){
var temp__5823__auto__ = cljs.core.deref(zetawar.subs.selected_hex(conn));
if(cljs.core.truth_(temp__5823__auto__)){
var vec__35675 = temp__5823__auto__;
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35675,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35675,(1),null);
return cljs.core.deref(zetawar.subs.can_move_QMARK_(conn,q,r));
} else {
return null;
}
}));
zetawar.subs.selected_can_attack_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$selected_can_attack_QMARK_(conn){
var temp__5823__auto__ = cljs.core.deref(zetawar.subs.selected_hex(conn));
if(cljs.core.truth_(temp__5823__auto__)){
var vec__35678 = temp__5823__auto__;
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35678,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35678,(1),null);
return cljs.core.deref(zetawar.subs.can_attack_QMARK_(conn,q,r));
} else {
return null;
}
}));
zetawar.subs.selected_can_repair_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$selected_can_repair_QMARK_(conn){
var temp__5823__auto__ = cljs.core.deref(zetawar.subs.selected_hex(conn));
if(cljs.core.truth_(temp__5823__auto__)){
var vec__35681 = temp__5823__auto__;
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35681,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35681,(1),null);
return cljs.core.deref(zetawar.subs.can_repair_QMARK_(conn,q,r));
} else {
return null;
}
}));
zetawar.subs.selected_can_field_repair_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$selected_can_field_repair_QMARK_(conn){
var temp__5823__auto__ = cljs.core.deref(zetawar.subs.selected_hex(conn));
if(cljs.core.truth_(temp__5823__auto__)){
var vec__35684 = temp__5823__auto__;
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35684,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35684,(1),null);
return cljs.core.deref(zetawar.subs.can_field_repair_QMARK_(conn,q,r));
} else {
return null;
}
}));
zetawar.subs.has_repairable_armor_type_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$has_repairable_armor_type_QMARK_(conn,targeted_q,targeted_r){
var temp__5823__auto__ = cljs.core.deref(zetawar.subs.selected_hex(conn));
if(cljs.core.truth_(temp__5823__auto__)){
var vec__35712 = temp__5823__auto__;
var selected_q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35712,(0),null);
var selected_r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35712,(1),null);
return zetawar.game.has_repairable_armor_type_QMARK_(cljs.core.deref(conn),cljs.core.deref(zetawar.subs.game(conn)),cljs.core.deref(zetawar.subs.unit_at(conn,selected_q,selected_r)),cljs.core.deref(zetawar.subs.unit_at(conn,targeted_q,targeted_r)));
} else {
return null;
}
}));
zetawar.subs.selected_can_capture_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$selected_can_capture_QMARK_(conn){
var temp__5823__auto__ = cljs.core.deref(zetawar.subs.selected_hex(conn));
if(cljs.core.truth_(temp__5823__auto__)){
var vec__35725 = temp__5823__auto__;
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35725,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35725,(1),null);
return cljs.core.deref(zetawar.subs.can_capture_QMARK_(conn,q,r));
} else {
return null;
}
}));
zetawar.subs.selected_can_build_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$selected_can_build_QMARK_(conn){
var temp__5823__auto__ = cljs.core.deref(zetawar.subs.selected_hex(conn));
if(cljs.core.truth_(temp__5823__auto__)){
var vec__35731 = temp__5823__auto__;
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35731,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35731,(1),null);
var and__5043__auto__ = cljs.core.not(cljs.core.deref(zetawar.subs.unit_selected_QMARK_(conn)));
if(and__5043__auto__){
return cljs.core.deref(zetawar.subs.current_base_QMARK_(conn,q,r));
} else {
return and__5043__auto__;
}
} else {
return null;
}
}));
zetawar.subs.valid_destinations_for_selected = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$valid_destinations_for_selected(conn){
if(cljs.core.truth_(cljs.core.deref(zetawar.subs.selected_can_move_QMARK_(conn)))){
var db = cljs.core.deref(conn);
var game_SINGLEQUOTE_ = (function (){var G__35742 = db;
var G__35743 = cljs.core.deref(zetawar.subs.game_eid(conn));
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__35742,G__35743) : datascript.core.entity.call(null,G__35742,G__35743));
})();
var vec__35739 = cljs.core.deref(zetawar.subs.selected_hex(conn));
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35739,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35739,(1),null);
var unit = zetawar.game.unit_at(db,game_SINGLEQUOTE_,q,r);
return zetawar.game.valid_destinations(db,game_SINGLEQUOTE_,unit);
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
}));
zetawar.subs.valid_destination_for_selected_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$valid_destination_for_selected_QMARK_(conn,q,r){
return cljs.core.contains_QMARK_(cljs.core.deref(zetawar.subs.valid_destinations_for_selected(conn)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,r], null));
}));
zetawar.subs.selected_can_move_to_targeted_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$selected_can_move_to_targeted_QMARK_(conn){
var temp__5823__auto__ = cljs.core.deref(zetawar.subs.targeted_hex(conn));
if(cljs.core.truth_(temp__5823__auto__)){
var vec__35745 = temp__5823__auto__;
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35745,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35745,(1),null);
var and__5043__auto__ = cljs.core.deref(zetawar.subs.selected_can_move_QMARK_(conn));
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.contains_QMARK_(cljs.core.deref(zetawar.subs.valid_destinations_for_selected(conn)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,r], null));
} else {
return and__5043__auto__;
}
} else {
return null;
}
}));
zetawar.subs.enemy_in_range_of_selected_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$enemy_in_range_of_selected_QMARK_(conn,q,r){
var temp__5823__auto__ = cljs.core.deref(zetawar.subs.selected_hex(conn));
if(cljs.core.truth_(temp__5823__auto__)){
var vec__35749 = temp__5823__auto__;
var selected_q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35749,(0),null);
var selected_r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35749,(1),null);
return cljs.core.deref(zetawar.subs.in_range_of_enemy_at_QMARK_(conn,selected_q,selected_r,q,r));
} else {
return null;
}
}));
zetawar.subs.friend_in_range_of_selected_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$friend_in_range_of_selected_QMARK_(conn,q,r){
var temp__5823__auto__ = cljs.core.deref(zetawar.subs.selected_hex(conn));
if(cljs.core.truth_(temp__5823__auto__)){
var vec__35752 = temp__5823__auto__;
var selected_q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35752,(0),null);
var selected_r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35752,(1),null);
return cljs.core.deref(zetawar.subs.in_range_of_friend_at_QMARK_(conn,selected_q,selected_r,q,r));
} else {
return null;
}
}));
zetawar.subs.repairable_friend_in_range_of_selected_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$repairable_friend_in_range_of_selected_QMARK_(conn,q,r){
var temp__5823__auto__ = cljs.core.deref(zetawar.subs.selected_hex(conn));
if(cljs.core.truth_(temp__5823__auto__)){
var vec__35755 = temp__5823__auto__;
var selected_q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35755,(0),null);
var selected_r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35755,(1),null);
var and__5043__auto__ = cljs.core.deref(zetawar.subs.in_range_of_friend_at_QMARK_(conn,selected_q,selected_r,q,r));
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.deref(zetawar.subs.repairable_QMARK_(conn,q,r));
} else {
return and__5043__auto__;
}
} else {
return null;
}
}));
zetawar.subs.selected_can_attack_targeted_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$selected_can_attack_targeted_QMARK_(conn){
var temp__5823__auto__ = cljs.core.deref(zetawar.subs.targeted_hex(conn));
if(cljs.core.truth_(temp__5823__auto__)){
var vec__35758 = temp__5823__auto__;
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35758,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35758,(1),null);
var and__5043__auto__ = cljs.core.deref(zetawar.subs.selected_can_attack_QMARK_(conn));
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.deref(zetawar.subs.enemy_in_range_of_selected_QMARK_(conn,q,r));
} else {
return and__5043__auto__;
}
} else {
return null;
}
}));
zetawar.subs.selected_can_repair_targeted_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$selected_can_repair_targeted_QMARK_(conn){
var temp__5823__auto__ = cljs.core.deref(zetawar.subs.targeted_hex(conn));
if(cljs.core.truth_(temp__5823__auto__)){
var vec__35761 = temp__5823__auto__;
var targeted_q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35761,(0),null);
var targeted_r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35761,(1),null);
var and__5043__auto__ = cljs.core.deref(zetawar.subs.selected_can_field_repair_QMARK_(conn));
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = cljs.core.deref(zetawar.subs.friend_in_range_of_selected_QMARK_(conn,targeted_q,targeted_r));
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = cljs.core.deref(zetawar.subs.repairable_QMARK_(conn,targeted_q,targeted_r));
if(cljs.core.truth_(and__5043__auto____$2)){
return cljs.core.deref(zetawar.subs.has_repairable_armor_type_QMARK_(conn,targeted_q,targeted_r));
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
} else {
return null;
}
}));
zetawar.subs.clickable_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$clickable_QMARK_(conn,q,r){
var or__5045__auto__ = cljs.core.deref(zetawar.subs.valid_destination_for_selected_QMARK_(conn,q,r));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = cljs.core.deref(zetawar.subs.enemy_in_range_of_selected_QMARK_(conn,q,r));
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = cljs.core.deref(zetawar.subs.unit_can_act_QMARK_(conn,q,r));
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = (function (){var and__5043__auto__ = cljs.core.deref(zetawar.subs.current_base_QMARK_(conn,q,r));
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.deref(zetawar.subs.unit_at_QMARK_(conn,q,r)));
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
var and__5043__auto__ = cljs.core.deref(zetawar.subs.repairable_friend_in_range_of_selected_QMARK_(conn,q,r));
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = cljs.core.deref(zetawar.subs.selected_can_field_repair_QMARK_(conn));
if(cljs.core.truth_(and__5043__auto____$1)){
return cljs.core.deref(zetawar.subs.has_repairable_armor_type_QMARK_(conn,q,r));
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
}
}
}
}));
zetawar.subs.available_unit_type_eids = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$available_unit_type_eids(conn){
var temp__5823__auto__ = cljs.core.deref(zetawar.subs.selected_hex(conn));
if(cljs.core.truth_(temp__5823__auto__)){
var vec__35772 = temp__5823__auto__;
var sel_q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35772,(0),null);
var sel_r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35772,(1),null);
var selected_base = zetawar.db.e(cljs.core.deref(zetawar.subs.terrain_at(conn,sel_q,sel_r)));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.deref(posh.reagent.q.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?ut","?ut",1965659909,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?g","?g",589440221,null),new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Keyword("app","game","app/game",-441616472),new cljs.core.Symbol(null,"?g","?g",589440221,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?g","?g",589440221,null),new cljs.core.Keyword("game","current-faction","game/current-faction",-1129931374),new cljs.core.Symbol(null,"?f","?f",-1121766265,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?f","?f",-1121766265,null),new cljs.core.Keyword("faction","credits","faction/credits",-232627472),new cljs.core.Symbol(null,"?credits","?credits",1019561360,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?ut","?ut",1965659909,null),new cljs.core.Keyword("unit-type","cost","unit-type/cost",-539586050),new cljs.core.Symbol(null,"?cost","?cost",-567120237,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?ut","?ut",1965659909,null),new cljs.core.Keyword("unit-type","id","unit-type/id",-865738639),new cljs.core.Symbol(null,"?unit-type-id","?unit-type-id",1836014251,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.Keyword("terrain","type","terrain/type",-1187652655),new cljs.core.Symbol(null,"?tt","?tt",-908445421,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?tt","?tt",-908445421,null),new cljs.core.Keyword("terrain-type","can-build","terrain-type/can-build",1032082687),new cljs.core.Symbol(null,"?ut","?ut",1965659909,null)], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([conn,cljs.core.deref(zetawar.subs.game_eid(conn)),selected_base,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cache","cache",-1237023054),new cljs.core.Keyword(null,"forever","forever",2103455015)], null)], 0)))));
} else {
return null;
}
}));
zetawar.subs.available_unit_types = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$available_unit_types(conn){
var map__35775 = cljs.core.deref(zetawar.subs.current_faction(conn));
var map__35775__$1 = cljs.core.__destructure_map(map__35775);
var credits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35775__$1,new cljs.core.Keyword("faction","credits","faction/credits",-232627472));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("unit-type","cost","unit-type/cost",-539586050),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (ut_eid){
var ut = cljs.core.deref(posh.reagent.pull.cljs$core$IFn$_invoke$arity$3(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),ut_eid));
var affordable = (new cljs.core.Keyword("unit-type","cost","unit-type/cost",-539586050).cljs$core$IFn$_invoke$arity$1(ut) <= credits);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ut,new cljs.core.Keyword(null,"affordable","affordable",-1253674052),affordable);
}),cljs.core.deref(zetawar.subs.available_unit_type_eids(conn)))));
}));
zetawar.subs.picking_unit_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$picking_unit_QMARK_(conn){
return new cljs.core.Keyword("app","picking-unit","app/picking-unit",1789755598).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(zetawar.subs.app(conn)));
}));
zetawar.subs.show_win_message_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$show_win_message_QMARK_(conn){
var and__5043__auto__ = cljs.core.deref(zetawar.subs.current_faction_won_QMARK_(conn));
if(cljs.core.truth_(and__5043__auto__)){
return ((cljs.core.not(new cljs.core.Keyword("faction","ai","faction/ai",1819183109).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(zetawar.subs.current_faction(conn))))) && (cljs.core.not(new cljs.core.Keyword("app","hide-win-message","app/hide-win-message",-1410597856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(zetawar.subs.app(conn))))));
} else {
return and__5043__auto__;
}
}));
zetawar.subs.faction_to_configure = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$faction_to_configure(conn){
var app_data = cljs.core.deref(zetawar.subs.app(conn));
var configuring_faction = new cljs.core.Keyword("app","configuring-faction","app/configuring-faction",322928126).cljs$core$IFn$_invoke$arity$1(app_data);
if(cljs.core.truth_(configuring_faction)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(zetawar.subs.factions_by_eid(conn)),zetawar.db.e(configuring_faction));
} else {
return null;
}
}));
zetawar.subs.configuring_faction_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$configuring_faction_QMARK_(conn){
return (!((cljs.core.deref(zetawar.subs.faction_to_configure(conn)) == null)));
}));
zetawar.subs.configuring_new_game_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$configuring_new_game_QMARK_(conn){
return new cljs.core.Keyword("app","configuring-new-game","app/configuring-new-game",-1151171747).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(zetawar.subs.app(conn)));
}));
zetawar.subs.hover_hex = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$hover_hex(conn){
return cljs.core.not_empty(zetawar.util.select_values(cljs.core.deref(zetawar.subs.app(conn)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","hover-q","app/hover-q",-672870885),new cljs.core.Keyword("app","hover-r","app/hover-r",-541396832)], null)));
}));
zetawar.subs.available_moves_left_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$available_moves_left_QMARK_(conn){
return cljs.core.some((function (p__35785,coordinates){
var vec__35792 = p__35785;
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35792,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35792,(1),null);
return cljs.core.deref(zetawar.subs.unit_can_act_QMARK_(conn,q,r));
}),cljs.core.deref(zetawar.subs.friend_locations(conn)));
}));
zetawar.subs.show_end_turn_alert_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.track,(function zetawar$subs$show_end_turn_alert_QMARK_(conn){
return new cljs.core.Keyword("app","end-turn-alert","app/end-turn-alert",1898394922).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(zetawar.subs.app(conn)));
}));

//# sourceMappingURL=zetawar.subs.js.map
