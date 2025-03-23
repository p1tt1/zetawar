goog.provide('zetawar.views');
var module$node_modules$react_icons$fa$index_esm=shadow.js.require("module$node_modules$react_icons$fa$index_esm", {});
zetawar.views.tile_border = (function zetawar$views$tile_border(p__36033,q,r){
var map__36034 = p__36033;
var map__36034__$1 = cljs.core.__destructure_map(map__36034);
var view_ctx = map__36034__$1;
var conn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36034__$1,new cljs.core.Keyword(null,"conn","conn",278309663));
var vec__36036 = zetawar.tiles.offset__GT_pixel(q,r);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36036,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36036,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),["border-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(q),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('')], null),(cljs.core.truth_(cljs.core.deref(zetawar.subs.selected_QMARK_(conn,q,r)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"width","width",-384071477),zetawar.tiles.width,new cljs.core.Keyword(null,"height","height",1025178622),zetawar.tiles.height,new cljs.core.Keyword(null,"xlink-href","xlink-href",244956585),zetawar.site.prefix.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["/images/game/borders/selected.png"], 0))], null)], null):(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.deref(zetawar.subs.targeted_QMARK_(conn,q,r));
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.deref(zetawar.subs.enemy_at_QMARK_(conn,q,r));
} else {
return and__5043__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"width","width",-384071477),zetawar.tiles.width,new cljs.core.Keyword(null,"height","height",1025178622),zetawar.tiles.height,new cljs.core.Keyword(null,"xlink-href","xlink-href",244956585),zetawar.site.prefix.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["/images/game/borders/targeted-enemy.png"], 0))], null)], null):(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.deref(zetawar.subs.targeted_QMARK_(conn,q,r));
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.deref(zetawar.subs.friend_at_QMARK_(conn,q,r));
} else {
return and__5043__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"width","width",-384071477),zetawar.tiles.width,new cljs.core.Keyword(null,"height","height",1025178622),zetawar.tiles.height,new cljs.core.Keyword(null,"xlink-href","xlink-href",244956585),zetawar.site.prefix.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["/images/game/borders/targeted-friend.png"], 0))], null)], null):(cljs.core.truth_(cljs.core.deref(zetawar.subs.targeted_QMARK_(conn,q,r)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"width","width",-384071477),zetawar.tiles.width,new cljs.core.Keyword(null,"height","height",1025178622),zetawar.tiles.height,new cljs.core.Keyword(null,"xlink-href","xlink-href",244956585),zetawar.site.prefix.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["/images/game/borders/selected.png"], 0))], null)], null):null))))], null);
});
zetawar.views.unit_image = (function zetawar$views$unit_image(unit){
var color_name = cljs.core.name(zetawar.game.unit_color(unit));
var G__36043 = unit;
var G__36043__$1 = (((G__36043 == null))?null:cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(G__36043,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unit","type","unit/type",1170646544),new cljs.core.Keyword("unit-type","image","unit-type/image",1063125749)], null)));
if((G__36043__$1 == null)){
return null;
} else {
return clojure.string.replace(G__36043__$1,"COLOR",color_name);
}
});
zetawar.views.board_unit = (function zetawar$views$board_unit(p__36044,q,r){
var map__36045 = p__36044;
var map__36045__$1 = cljs.core.__destructure_map(map__36045);
var view_ctx = map__36045__$1;
var conn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36045__$1,new cljs.core.Keyword(null,"conn","conn",278309663));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36045__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
var temp__5823__auto__ = cljs.core.deref(zetawar.subs.unit_at(conn,q,r));
if(cljs.core.truth_(temp__5823__auto__)){
var unit = temp__5823__auto__;
var vec__36046 = zetawar.tiles.offset__GT_pixel(q,r);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36046,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36046,(1),null);
var image = zetawar.views.unit_image(unit);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),["unit-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zetawar.db.e(unit))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"width","width",-384071477),zetawar.tiles.width,new cljs.core.Keyword(null,"height","height",1025178622),zetawar.tiles.height,new cljs.core.Keyword(null,"xlink-href","xlink-href",244956585),zetawar.site.prefix.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["/images/game/",image], 0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__36049 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zetawar.events.ui","select-hex","zetawar.events.ui/select-hex",1365544937),q,r], null);
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__36049) : dispatch.call(null,G__36049));
})], null)], null),(cljs.core.truth_(new cljs.core.Keyword("unit","capturing","unit/capturing",247751174).cljs$core$IFn$_invoke$arity$1(unit))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"width","width",-384071477),zetawar.tiles.width,new cljs.core.Keyword(null,"height","height",1025178622),zetawar.tiles.height,new cljs.core.Keyword(null,"xlink-href","xlink-href",244956585),zetawar.site.prefix.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["/images/game/capturing.gif"], 0))], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"width","width",-384071477),zetawar.tiles.width,new cljs.core.Keyword(null,"height","height",1025178622),zetawar.tiles.height,new cljs.core.Keyword(null,"xlink-href","xlink-href",244956585),zetawar.site.prefix.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["/images/game/health/",new cljs.core.Keyword("unit","count","unit/count",2144714993).cljs$core$IFn$_invoke$arity$1(unit),".png"], 0))], null)], null)], null);
} else {
return null;
}
});
zetawar.views.tile_mask = (function zetawar$views$tile_mask(p__36050,q,r){
var map__36051 = p__36050;
var map__36051__$1 = cljs.core.__destructure_map(map__36051);
var view_ctx = map__36051__$1;
var conn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36051__$1,new cljs.core.Keyword(null,"conn","conn",278309663));
var vec__36052 = zetawar.tiles.offset__GT_pixel(q,r);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36052,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36052,(1),null);
var show = (function (){var or__5045__auto__ = (function (){var and__5043__auto__ = cljs.core.not(cljs.core.deref(zetawar.subs.unit_selected_QMARK_(conn)));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core.deref(zetawar.subs.current_unit_at_QMARK_(conn,q,r));
if(cljs.core.truth_(and__5043__auto____$1)){
return cljs.core.not(cljs.core.deref(zetawar.subs.unit_can_act_QMARK_(conn,q,r)));
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = cljs.core.deref(zetawar.subs.unit_selected_QMARK_(conn));
if(cljs.core.truth_(and__5043__auto__)){
return ((cljs.core.not(cljs.core.deref(zetawar.subs.selected_QMARK_(conn,q,r)))) && (((cljs.core.not(cljs.core.deref(zetawar.subs.enemy_in_range_of_selected_QMARK_(conn,q,r)))) && (((cljs.core.not((function (){var and__5043__auto____$3 = cljs.core.deref(zetawar.subs.repairable_friend_in_range_of_selected_QMARK_(conn,q,r));
if(cljs.core.truth_(and__5043__auto____$3)){
var and__5043__auto____$4 = cljs.core.deref(zetawar.subs.selected_can_field_repair_QMARK_(conn));
if(cljs.core.truth_(and__5043__auto____$4)){
return cljs.core.deref(zetawar.subs.has_repairable_armor_type_QMARK_(conn,q,r));
} else {
return and__5043__auto____$4;
}
} else {
return and__5043__auto____$3;
}
})())) && (cljs.core.not(cljs.core.deref(zetawar.subs.valid_destination_for_selected_QMARK_(conn,q,r)))))))));
} else {
return and__5043__auto__;
}
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),(cljs.core.truth_(show)?"visible":"hidden"),new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"width","width",-384071477),zetawar.tiles.width,new cljs.core.Keyword(null,"height","height",1025178622),zetawar.tiles.height,new cljs.core.Keyword(null,"xlink-href","xlink-href",244956585),zetawar.site.prefix.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["/images/game/mask.png"], 0))], null)], null);
});
zetawar.views.terrain_image = (function zetawar$views$terrain_image(terrain){
var color_name = cljs.core.name((function (){var or__5045__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(terrain,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("terrain","owner","terrain/owner",1031873140),new cljs.core.Keyword("faction","color","faction/color",2104478137)], null));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"none","none",1333468478);
}
})());
var G__36056 = terrain;
var G__36056__$1 = (((G__36056 == null))?null:cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(G__36056,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("terrain","type","terrain/type",-1187652655),new cljs.core.Keyword("terrain-type","image","terrain-type/image",1433542086)], null)));
if((G__36056__$1 == null)){
return null;
} else {
return clojure.string.replace(G__36056__$1,"COLOR",color_name);
}
});
zetawar.views.terrain_tile = (function zetawar$views$terrain_tile(view_ctx,terrain,q,r){
var vec__36059 = zetawar.tiles.offset__GT_pixel(q,r);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36059,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36059,(1),null);
var image = zetawar.views.terrain_image(terrain);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"width","width",-384071477),zetawar.tiles.width,new cljs.core.Keyword(null,"height","height",1025178622),zetawar.tiles.height,new cljs.core.Keyword(null,"xlink-href","xlink-href",244956585),zetawar.site.prefix.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["/images/game/",image], 0))], null)], null);
});
zetawar.views.tile = (function zetawar$views$tile(p__36063,terrain){
var map__36064 = p__36063;
var map__36064__$1 = cljs.core.__destructure_map(map__36064);
var view_ctx = map__36064__$1;
var conn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36064__$1,new cljs.core.Keyword(null,"conn","conn",278309663));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36064__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
var map__36065 = terrain;
var map__36065__$1 = cljs.core.__destructure_map(map__36065);
var q = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36065__$1,new cljs.core.Keyword("terrain","q","terrain/q",2698702));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36065__$1,new cljs.core.Keyword("terrain","r","terrain/r",-1753264147));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__36066 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zetawar.events.ui","select-hex","zetawar.events.ui/select-hex",1365544937),q,r], null);
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__36066) : dispatch.call(null,G__36066));
}),new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),(function (){
var G__36067 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zetawar.events.ui","hover-hex-enter","zetawar.events.ui/hover-hex-enter",-1240946298),q,r], null);
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__36067) : dispatch.call(null,G__36067));
}),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),(function (){
var G__36068 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zetawar.events.ui","hover-hex-leave","zetawar.events.ui/hover-hex-leave",462157149),q,r], null);
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__36068) : dispatch.call(null,G__36068));
}),new cljs.core.Keyword(null,"cursor","cursor",1011937484),(cljs.core.truth_(cljs.core.deref(zetawar.subs.clickable_QMARK_(conn,q,r)))?"pointer":"default")], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [zetawar.views.terrain_tile,view_ctx,terrain,q,r], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [zetawar.views.tile_border,view_ctx,q,r], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [zetawar.views.board_unit,view_ctx,q,r], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [zetawar.views.tile_mask,view_ctx,q,r], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(q),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('')], null));
});
zetawar.views.tiles = (function zetawar$views$tiles(p__36070){
var map__36071 = p__36070;
var map__36071__$1 = cljs.core.__destructure_map(map__36071);
var view_ctx = map__36071__$1;
var conn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36071__$1,new cljs.core.Keyword(null,"conn","conn",278309663));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905)], null),(function (){var iter__5523__auto__ = (function zetawar$views$tiles_$_iter__36074(s__36075){
return (new cljs.core.LazySeq(null,(function (){
var s__36075__$1 = s__36075;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__36075__$1);
if(temp__5823__auto__){
var s__36075__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36075__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__36075__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__36077 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__36076 = (0);
while(true){
if((i__36076 < size__5522__auto__)){
var terrain = cljs.core._nth(c__5521__auto__,i__36076);
cljs.core.chunk_append(b__36077,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zetawar.views.tile,view_ctx,terrain], null));

var G__36314 = (i__36076 + (1));
i__36076 = G__36314;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36077),zetawar$views$tiles_$_iter__36074(cljs.core.chunk_rest(s__36075__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36077),null);
}
} else {
var terrain = cljs.core.first(s__36075__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zetawar.views.tile,view_ctx,terrain], null),zetawar$views$tiles_$_iter__36074(cljs.core.rest(s__36075__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.deref(zetawar.subs.terrains(conn)));
})());
});
zetawar.views.board = (function zetawar$views$board(p__36090){
var map__36091 = p__36090;
var map__36091__$1 = cljs.core.__destructure_map(map__36091);
var view_ctx = map__36091__$1;
var conn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36091__$1,new cljs.core.Keyword(null,"conn","conn",278309663));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg#board","svg#board",-1131587405),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),cljs.core.deref(zetawar.subs.map_width_px(conn)),new cljs.core.Keyword(null,"height","height",1025178622),cljs.core.deref(zetawar.subs.map_height_px(conn))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zetawar.views.tiles,view_ctx], null)], null);
});
zetawar.views.faction_credits = (function zetawar$views$faction_credits(p__36094){
var map__36095 = p__36094;
var map__36095__$1 = cljs.core.__destructure_map(map__36095);
var view_ctx = map__36095__$1;
var conn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36095__$1,new cljs.core.Keyword(null,"conn","conn",278309663));
var translate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36095__$1,new cljs.core.Keyword(null,"translate","translate",1336199447));
var map__36097 = cljs.core.deref(zetawar.subs.current_faction(conn));
var map__36097__$1 = cljs.core.__destructure_map(map__36097);
var credits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36097__$1,new cljs.core.Keyword("faction","credits","faction/credits",-232627472));
var map__36098 = cljs.core.deref(zetawar.subs.game_map(conn));
var map__36098__$1 = cljs.core.__destructure_map(map__36098);
var credits_per_base = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36098__$1,new cljs.core.Keyword("map","credits-per-base","map/credits-per-base",15337141));
var income = cljs.core.deref(zetawar.subs.current_income(conn));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p#faction-credits.flex.justify-between.items-center.mb-4.font-medium","p#faction-credits.flex.justify-between.items-center.mb-4.font-medium",1531933397),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.font-bold","span.font-bold",-460884588),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(credits)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((translate.cljs$core$IFn$_invoke$arity$1 ? translate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"credits-label","credits-label",-1387202428)) : translate.call(null,new cljs.core.Keyword(null,"credits-label","credits-label",-1387202428))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-gray-600","span.text-gray-600",-825179194),["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(income)].join('')], null)], null);
});
zetawar.views.copy_url_link = (function zetawar$views$copy_url_link(p__36101){
var map__36102 = p__36101;
var map__36102__$1 = cljs.core.__destructure_map(map__36102);
var view_ctx = map__36102__$1;
var conn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36102__$1,new cljs.core.Keyword(null,"conn","conn",278309663));
var translate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36102__$1,new cljs.core.Keyword(null,"translate","translate",1336199447));
var clipboard = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var node_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var text_fn = (function (){
return window.location;
});
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
return cljs.core.reset_BANG_(clipboard,(new Clipboard(cljs.core.deref(node_ref),({"text": text_fn}))));
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (this$){
cljs.core.deref(clipboard).destroy();

return cljs.core.reset_BANG_(clipboard,null);
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (this$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__36099_SHARP_){
return cljs.core.reset_BANG_(node_ref,p1__36099_SHARP_);
}),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__36100_SHARP_){
return p1__36100_SHARP_.preventDefault();
})], null),(translate.cljs$core$IFn$_invoke$arity$1 ? translate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"copy-game-url-link","copy-game-url-link",-1570778521)) : translate.call(null,new cljs.core.Keyword(null,"copy-game-url-link","copy-game-url-link",-1570778521)))], null);
})], null));
});
zetawar.views.modal = (function zetawar$views$modal(p__36104){
var map__36105 = p__36104;
var map__36105__$1 = cljs.core.__destructure_map(map__36105);
var show = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36105__$1,new cljs.core.Keyword(null,"show","show",-576705889));
var on_hide = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36105__$1,new cljs.core.Keyword(null,"on-hide","on-hide",1263105709));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36105__$1,new cljs.core.Keyword(null,"title","title",636505583));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36105__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var footer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36105__$1,new cljs.core.Keyword(null,"footer","footer",1606445390));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.fixed.inset-0.z-50.overflow-auto.bg-black.bg-opacity-50","div.fixed.inset-0.z-50.overflow-auto.bg-black.bg-opacity-50",-1468543716),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(show)?"block":null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),(cljs.core.truth_(show)?"flex":"none")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.target,e.currentTarget)){
return (on_hide.cljs$core$IFn$_invoke$arity$0 ? on_hide.cljs$core$IFn$_invoke$arity$0() : on_hide.call(null));
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relative.bg-white.rounded-lg.shadow-xl.m-auto.max-w-lg.w-full","div.relative.bg-white.rounded-lg.shadow-xl.m-auto.max-w-lg.w-full",-872413547),(cljs.core.truth_(title)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.px-6.py-4.border-b.border-gray-200","div.px-6.py-4.border-b.border-gray-200",404229656),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.absolute.top-4.right-4.text-gray-500.hover:text-gray-700","button.absolute.top-4.right-4.text-gray-500.hover:text-gray-700",-1034321239),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_hide], null),"\u00D7"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.text-xl.font-medium","h4.text-xl.font-medium",488014295),title], null)], null):null),(cljs.core.truth_(body)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.px-6.py-4","div.px-6.py-4",-1138945559),body], null):null),(cljs.core.truth_(footer)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.px-6.py-4.border-t.border-gray-200.flex.justify-end.space-x-2","div.px-6.py-4.border-t.border-gray-200.flex.justify-end.space-x-2",620911834),footer], null):null)], null)], null);
});
zetawar.views.end_turn_alert = (function zetawar$views$end_turn_alert(p__36108){
var map__36109 = p__36108;
var map__36109__$1 = cljs.core.__destructure_map(map__36109);
var view_ctx = map__36109__$1;
var conn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36109__$1,new cljs.core.Keyword(null,"conn","conn",278309663));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36109__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
var translate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36109__$1,new cljs.core.Keyword(null,"translate","translate",1336199447));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zetawar.views.modal,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"show","show",-576705889),cljs.core.deref(zetawar.subs.show_end_turn_alert_QMARK_(conn)),new cljs.core.Keyword(null,"on-hide","on-hide",1263105709),(function (){
var G__36111 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zetawar.events.ui","hide-end-turn-alert","zetawar.events.ui/hide-end-turn-alert",1728478602)], null);
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__36111) : dispatch.call(null,G__36111));
}),new cljs.core.Keyword(null,"body","body",-2049205669),(translate.cljs$core$IFn$_invoke$arity$1 ? translate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end-turn-alert","end-turn-alert",1898229579)) : translate.call(null,new cljs.core.Keyword(null,"end-turn-alert","end-turn-alert",1898229579))),new cljs.core.Keyword(null,"footer","footer",1606445390),reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.space-x-2","div.flex.space-x-2",191162917),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.px-4.py-2.bg-blue-500.text-white.rounded.hover:bg-blue-600","button.px-4.py-2.bg-blue-500.text-white.rounded.hover:bg-blue-600",-886574206),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.preventDefault();

var G__36112_36323 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zetawar.events.ui","end-turn","zetawar.events.ui/end-turn",-1149399050)], null);
(dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__36112_36323) : dispatch.call(null,G__36112_36323));

var G__36113 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zetawar.events.ui","hide-end-turn-alert","zetawar.events.ui/hide-end-turn-alert",1728478602)], null);
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__36113) : dispatch.call(null,G__36113));
})], null),(translate.cljs$core$IFn$_invoke$arity$1 ? translate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end-turn-confirm","end-turn-confirm",-1181517772)) : translate.call(null,new cljs.core.Keyword(null,"end-turn-confirm","end-turn-confirm",-1181517772)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.px-4.py-2.bg-gray-300.text-gray-800.rounded.hover:bg-gray-400","button.px-4.py-2.bg-gray-300.text-gray-800.rounded.hover:bg-gray-400",-620674386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__36114 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zetawar.events.ui","hide-end-turn-alert","zetawar.events.ui/hide-end-turn-alert",1728478602)], null);
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__36114) : dispatch.call(null,G__36114));
})], null),(translate.cljs$core$IFn$_invoke$arity$1 ? translate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"cancel-button","cancel-button",-45389038)) : translate.call(null,new cljs.core.Keyword(null,"cancel-button","cancel-button",-45389038)))], null)], null))], null)], null);
});
zetawar.views.faction_status = (function zetawar$views$faction_status(p__36115){
var map__36116 = p__36115;
var map__36116__$1 = cljs.core.__destructure_map(map__36116);
var view_ctx = map__36116__$1;
var conn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36116__$1,new cljs.core.Keyword(null,"conn","conn",278309663));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36116__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
var translate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36116__$1,new cljs.core.Keyword(null,"translate","translate",1336199447));
var map__36117 = cljs.core.deref(zetawar.subs.app(conn));
var map__36117__$1 = cljs.core.__destructure_map(map__36117);
var show_copy_link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36117__$1,new cljs.core.Keyword("app","show-copy-link","app/show-copy-link",835872193));
var map__36118 = cljs.core.deref(zetawar.subs.game(conn));
var map__36118__$1 = cljs.core.__destructure_map(map__36118);
var round = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36118__$1,new cljs.core.Keyword("game","round","game/round",2008373466));
var base_count = cljs.core.deref(zetawar.subs.current_base_count(conn));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#faction-status.flex.justify-between.items-center.mb-4","div#faction-status.flex.justify-between.items-center.mb-4",1804375848),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-red-600.hover:text-red-800.font-medium","a.text-red-600.hover:text-red-800.font-medium",-876658123),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.preventDefault();

if(cljs.core.truth_(cljs.core.deref(zetawar.subs.available_moves_left_QMARK_(conn)))){
var G__36119 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zetawar.events.ui","show-end-turn-alert","zetawar.events.ui/show-end-turn-alert",1406394794)], null);
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__36119) : dispatch.call(null,G__36119));
} else {
var G__36120 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zetawar.events.ui","end-turn","zetawar.events.ui/end-turn",-1149399050)], null);
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__36120) : dispatch.call(null,G__36120));
}
})], null),(translate.cljs$core$IFn$_invoke$arity$1 ? translate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end-turn-link","end-turn-link",-1083328577)) : translate.call(null,new cljs.core.Keyword(null,"end-turn-link","end-turn-link",-1083328577)))], null),(cljs.core.truth_(show_copy_link)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.mx-2","span.mx-2",1754833005),"\u00B7",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.mx-2","span.mx-2",1754833005),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zetawar.views.copy_url_link,view_ctx], null)], null)], null):null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-blue-600.hover:text-blue-800.mr-2","a.text-blue-600.hover:text-blue-800.mr-2",-707553860),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.preventDefault();

var G__36121 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zetawar.events.ui","show-new-game-settings","zetawar.events.ui/show-new-game-settings",-1754236332)], null);
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__36121) : dispatch.call(null,G__36121));
})], null),(translate.cljs$core$IFn$_invoke$arity$1 ? translate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"new-game-link","new-game-link",1678341409)) : translate.call(null,new cljs.core.Keyword(null,"new-game-link","new-game-link",1678341409)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.mx-2","span.mx-2",1754833005),"\u00B7"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ml-2","span.ml-2",729972922),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((translate.cljs$core$IFn$_invoke$arity$1 ? translate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"round-label","round-label",-1196443603)) : translate.call(null,new cljs.core.Keyword(null,"round-label","round-label",-1196443603))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(round)].join('')], null)], null)], null);
});
zetawar.views.faction_actions = (function zetawar$views$faction_actions(p__36122){
var map__36123 = p__36122;
var map__36123__$1 = cljs.core.__destructure_map(map__36123);
var view_ctx = map__36123__$1;
var conn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36123__$1,new cljs.core.Keyword(null,"conn","conn",278309663));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36123__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
var translate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36123__$1,new cljs.core.Keyword(null,"translate","translate",1336199447));
var vec__36124 = cljs.core.first(cljs.core.deref(posh.reagent.q.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?round","?round",-859793781,null),new cljs.core.Symbol(null,"?current-color","?current-color",2022746362,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?g","?g",589440221,null),new cljs.core.Keyword("game","round","game/round",2008373466),new cljs.core.Symbol(null,"?round","?round",-859793781,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?g","?g",589440221,null),new cljs.core.Keyword("game","current-faction","game/current-faction",-1129931374),new cljs.core.Symbol(null,"?f","?f",-1121766265,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?f","?f",-1121766265,null),new cljs.core.Keyword("faction","color","faction/color",2104478137),new cljs.core.Symbol(null,"?current-color","?current-color",2022746362,null)], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([conn], 0))));
var round = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36124,(0),null);
var current_color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36124,(1),null);
var map__36127 = cljs.core.deref(zetawar.subs.current_faction(conn));
var map__36127__$1 = cljs.core.__destructure_map(map__36127);
var credits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36127__$1,new cljs.core.Keyword("faction","credits","faction/credits",-232627472));
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#faction-actions","div#faction-actions",348103917),(cljs.core.truth_(cljs.core.deref(zetawar.subs.selected_can_move_to_targeted_QMARK_(conn)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.w-full.py-2.px-4.bg-blue-500.text-white.rounded.hover:bg-blue-600.focus:outline-none.focus:ring-2.focus:ring-blue-500.focus:ring-opacity-50","button.w-full.py-2.px-4.bg-blue-500.text-white.rounded.hover:bg-blue-600.focus:outline-none.focus:ring-2.focus:ring-blue-500.focus:ring-opacity-50",-1105401120),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__36129 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zetawar.events.ui","move-selected-unit","zetawar.events.ui/move-selected-unit",1762616731)], null);
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__36129) : dispatch.call(null,G__36129));
})], null),(translate.cljs$core$IFn$_invoke$arity$1 ? translate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"move-unit-button","move-unit-button",1265418172)) : translate.call(null,new cljs.core.Keyword(null,"move-unit-button","move-unit-button",1265418172)))], null)], null):null),(cljs.core.truth_(cljs.core.deref(zetawar.subs.selected_can_build_QMARK_(conn)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.w-full.py-2.px-4.bg-blue-500.text-white.rounded.hover:bg-blue-600.focus:outline-none.focus:ring-2.focus:ring-blue-500.focus:ring-opacity-50","button.w-full.py-2.px-4.bg-blue-500.text-white.rounded.hover:bg-blue-600.focus:outline-none.focus:ring-2.focus:ring-blue-500.focus:ring-opacity-50",-1105401120),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__36130 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zetawar.events.ui","show-unit-picker","zetawar.events.ui/show-unit-picker",354274627)], null);
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__36130) : dispatch.call(null,G__36130));
})], null),(translate.cljs$core$IFn$_invoke$arity$1 ? translate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"build-unit-button","build-unit-button",-2131782299)) : translate.call(null,new cljs.core.Keyword(null,"build-unit-button","build-unit-button",-2131782299)))], null)], null):null),(cljs.core.truth_(cljs.core.deref(zetawar.subs.selected_can_attack_targeted_QMARK_(conn)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.w-full.py-2.px-4.bg-red-500.text-white.rounded.hover:bg-red-600.focus:outline-none.focus:ring-2.focus:ring-red-500.focus:ring-opacity-50","button.w-full.py-2.px-4.bg-red-500.text-white.rounded.hover:bg-red-600.focus:outline-none.focus:ring-2.focus:ring-red-500.focus:ring-opacity-50",785373423),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__36131 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zetawar.events.ui","attack-targeted","zetawar.events.ui/attack-targeted",315281836)], null);
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__36131) : dispatch.call(null,G__36131));
})], null),(translate.cljs$core$IFn$_invoke$arity$1 ? translate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"attack-unit-button","attack-unit-button",1161352216)) : translate.call(null,new cljs.core.Keyword(null,"attack-unit-button","attack-unit-button",1161352216)))], null)], null):null),(cljs.core.truth_(cljs.core.deref(zetawar.subs.selected_can_repair_QMARK_(conn)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.w-full.py-2.px-4.bg-green-500.text-white.rounded.hover:bg-green-600.focus:outline-none.focus:ring-2.focus:ring-green-500.focus:ring-opacity-50","button.w-full.py-2.px-4.bg-green-500.text-white.rounded.hover:bg-green-600.focus:outline-none.focus:ring-2.focus:ring-green-500.focus:ring-opacity-50",-747808567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__36132 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zetawar.events.ui","repair-selected","zetawar.events.ui/repair-selected",1619572544)], null);
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__36132) : dispatch.call(null,G__36132));
})], null),(translate.cljs$core$IFn$_invoke$arity$1 ? translate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"repair-unit-button","repair-unit-button",-365302898)) : translate.call(null,new cljs.core.Keyword(null,"repair-unit-button","repair-unit-button",-365302898)))], null)], null):null),(cljs.core.truth_(cljs.core.deref(zetawar.subs.selected_can_repair_targeted_QMARK_(conn)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.w-full.py-2.px-4.bg-green-500.text-white.rounded.hover:bg-green-600.focus:outline-none.focus:ring-2.focus:ring-green-500.focus:ring-opacity-50","button.w-full.py-2.px-4.bg-green-500.text-white.rounded.hover:bg-green-600.focus:outline-none.focus:ring-2.focus:ring-green-500.focus:ring-opacity-50",-747808567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__36133 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zetawar.events.ui","repair-targeted","zetawar.events.ui/repair-targeted",1663905240)], null);
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__36133) : dispatch.call(null,G__36133));
})], null),(translate.cljs$core$IFn$_invoke$arity$1 ? translate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"field-repair-button","field-repair-button",-457736006)) : translate.call(null,new cljs.core.Keyword(null,"field-repair-button","field-repair-button",-457736006)))], null)], null):null),(cljs.core.truth_(cljs.core.deref(zetawar.subs.selected_can_capture_QMARK_(conn)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.w-full.py-2.px-4.bg-blue-500.text-white.rounded.hover:bg-blue-600.focus:outline-none.focus:ring-2.focus:ring-blue-500.focus:ring-opacity-50","button.w-full.py-2.px-4.bg-blue-500.text-white.rounded.hover:bg-blue-600.focus:outline-none.focus:ring-2.focus:ring-blue-500.focus:ring-opacity-50",-1105401120),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__36134 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zetawar.events.ui","capture-selected","zetawar.events.ui/capture-selected",333310514)], null);
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__36134) : dispatch.call(null,G__36134));
})], null),(translate.cljs$core$IFn$_invoke$arity$1 ? translate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"capture-base-button","capture-base-button",-536849544)) : translate.call(null,new cljs.core.Keyword(null,"capture-base-button","capture-base-button",-536849544)))], null)], null):null),((cljs.core.not((function (){var or__5045__auto__ = cljs.core.deref(zetawar.subs.selected_can_move_QMARK_(conn));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = cljs.core.deref(zetawar.subs.selected_can_build_QMARK_(conn));
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = cljs.core.deref(zetawar.subs.selected_can_attack_QMARK_(conn));
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = cljs.core.deref(zetawar.subs.selected_can_repair_QMARK_(conn));
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
return cljs.core.deref(zetawar.subs.selected_can_capture_QMARK_(conn));
}
}
}
}
})()))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.hidden-xs.hidden-sm","p.hidden-xs.hidden-sm",-789286995),(translate.cljs$core$IFn$_invoke$arity$1 ? translate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"select-unit-or-base-tip","select-unit-or-base-tip",980446862)) : translate.call(null,new cljs.core.Keyword(null,"select-unit-or-base-tip","select-unit-or-base-tip",980446862)))], null):null),(cljs.core.truth_((function (){var and__5043__auto__ = (function (){var or__5045__auto__ = cljs.core.deref(zetawar.subs.selected_can_move_QMARK_(conn));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = cljs.core.deref(zetawar.subs.selected_can_attack_QMARK_(conn));
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return cljs.core.deref(zetawar.subs.selected_can_repair_QMARK_(conn));
}
}
})();
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not((function (){var or__5045__auto__ = cljs.core.deref(zetawar.subs.selected_can_move_to_targeted_QMARK_(conn));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = cljs.core.deref(zetawar.subs.selected_can_attack_targeted_QMARK_(conn));
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return cljs.core.deref(zetawar.subs.selected_can_repair_targeted_QMARK_(conn));
}
}
})());
} else {
return and__5043__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.hidden-xs.hidden-sm","p.hidden-xs.hidden-sm",-789286995),(translate.cljs$core$IFn$_invoke$arity$1 ? translate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"select-target-or-destination-tip","select-target-or-destination-tip",325592052)) : translate.call(null,new cljs.core.Keyword(null,"select-target-or-destination-tip","select-target-or-destination-tip",325592052)))], null):null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(round,(1))) && (cljs.core.not(cljs.core.deref(zetawar.subs.selected_hex(conn))))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.hidden-xs.hidden-sm","p.hidden-xs.hidden-sm",-789286995),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),(translate.cljs$core$IFn$_invoke$arity$1 ? translate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"multiplayer-tip","multiplayer-tip",1438391910)) : translate.call(null,new cljs.core.Keyword(null,"multiplayer-tip","multiplayer-tip",1438391910)))], null)], null)], null):null)], null);
});
zetawar.views.faction_list = (function zetawar$views$faction_list(p__36137){
var map__36138 = p__36137;
var map__36138__$1 = cljs.core.__destructure_map(map__36138);
var view_ctx = map__36138__$1;
var conn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36138__$1,new cljs.core.Keyword(null,"conn","conn",278309663));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36138__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
var translate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36138__$1,new cljs.core.Keyword(null,"translate","translate",1336199447));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.divide-y.divide-gray-200.border.border-gray-200.rounded","ul.divide-y.divide-gray-200.border.border-gray-200.rounded",1092885016)], null),(function (){var iter__5523__auto__ = (function zetawar$views$faction_list_$_iter__36140(s__36141){
return (new cljs.core.LazySeq(null,(function (){
var s__36141__$1 = s__36141;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__36141__$1);
if(temp__5823__auto__){
var s__36141__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36141__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__36141__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__36143 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__36142 = (0);
while(true){
if((i__36142 < size__5522__auto__)){
var faction = cljs.core._nth(c__5521__auto__,i__36142);
cljs.core.chunk_append(b__36143,(function (){var faction_eid = zetawar.db.e(faction);
var color = clojure.string.capitalize(cljs.core.name(new cljs.core.Keyword("faction","color","faction/color",2104478137).cljs$core$IFn$_invoke$arity$1(faction)));
var active = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(faction_eid,cljs.core.deref(zetawar.subs.current_faction_eid(conn)));
var li_class = ((active)?"bg-blue-100 text-blue-800 px-4 py-2 flex justify-between items-center":"bg-white hover:bg-gray-50 px-4 py-2 flex justify-between items-center");
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),li_class], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center","div.flex.items-center",-1537844053),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),color], null)," ",((active)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_icons$fa$index_esm.FaAngleDoubleLeft,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"ml-2",new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true], null)], null):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(new cljs.core.Keyword("faction","ai","faction/ai",1819183109).cljs$core$IFn$_invoke$arity$1(faction))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_icons$fa$index_esm.FaLaptop,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",-1983287057),"cursor-pointer",new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (i__36142,faction_eid,color,active,li_class,faction,c__5521__auto__,size__5522__auto__,b__36143,s__36141__$2,temp__5823__auto__,map__36138,map__36138__$1,view_ctx,conn,dispatch,translate){
return (function (){
var G__36145 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zetawar.events.ui","configure-faction","zetawar.events.ui/configure-faction",-1347831745),faction], null);
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__36145) : dispatch.call(null,G__36145));
});})(i__36142,faction_eid,color,active,li_class,faction,c__5521__auto__,size__5522__auto__,b__36143,s__36141__$2,temp__5823__auto__,map__36138,map__36138__$1,view_ctx,conn,dispatch,translate))
,new cljs.core.Keyword(null,"title","title",636505583),(translate.cljs$core$IFn$_invoke$arity$1 ? translate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"configure-faction-tip","configure-faction-tip",-2074051649)) : translate.call(null,new cljs.core.Keyword(null,"configure-faction-tip","configure-faction-tip",-2074051649)))], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_icons$fa$index_esm.FaUser,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",-1983287057),"cursor-pointer",new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (i__36142,faction_eid,color,active,li_class,faction,c__5521__auto__,size__5522__auto__,b__36143,s__36141__$2,temp__5823__auto__,map__36138,map__36138__$1,view_ctx,conn,dispatch,translate){
return (function (){
var G__36146 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zetawar.events.ui","configure-faction","zetawar.events.ui/configure-faction",-1347831745),faction], null);
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__36146) : dispatch.call(null,G__36146));
});})(i__36142,faction_eid,color,active,li_class,faction,c__5521__auto__,size__5522__auto__,b__36143,s__36141__$2,temp__5823__auto__,map__36138,map__36138__$1,view_ctx,conn,dispatch,translate))
,new cljs.core.Keyword(null,"title","title",636505583),(translate.cljs$core$IFn$_invoke$arity$1 ? translate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"configure-faction-tip","configure-faction-tip",-2074051649)) : translate.call(null,new cljs.core.Keyword(null,"configure-faction-tip","configure-faction-tip",-2074051649)))], null)], null))], null)], null);
})());

var G__36340 = (i__36142 + (1));
i__36142 = G__36340;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36143),zetawar$views$faction_list_$_iter__36140(cljs.core.chunk_rest(s__36141__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36143),null);
}
} else {
var faction = cljs.core.first(s__36141__$2);
return cljs.core.cons((function (){var faction_eid = zetawar.db.e(faction);
var color = clojure.string.capitalize(cljs.core.name(new cljs.core.Keyword("faction","color","faction/color",2104478137).cljs$core$IFn$_invoke$arity$1(faction)));
var active = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(faction_eid,cljs.core.deref(zetawar.subs.current_faction_eid(conn)));
var li_class = ((active)?"bg-blue-100 text-blue-800 px-4 py-2 flex justify-between items-center":"bg-white hover:bg-gray-50 px-4 py-2 flex justify-between items-center");
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),li_class], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center","div.flex.items-center",-1537844053),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),color], null)," ",((active)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_icons$fa$index_esm.FaAngleDoubleLeft,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"ml-2",new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true], null)], null):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(new cljs.core.Keyword("faction","ai","faction/ai",1819183109).cljs$core$IFn$_invoke$arity$1(faction))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_icons$fa$index_esm.FaLaptop,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",-1983287057),"cursor-pointer",new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (faction_eid,color,active,li_class,faction,s__36141__$2,temp__5823__auto__,map__36138,map__36138__$1,view_ctx,conn,dispatch,translate){
return (function (){
var G__36147 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zetawar.events.ui","configure-faction","zetawar.events.ui/configure-faction",-1347831745),faction], null);
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__36147) : dispatch.call(null,G__36147));
});})(faction_eid,color,active,li_class,faction,s__36141__$2,temp__5823__auto__,map__36138,map__36138__$1,view_ctx,conn,dispatch,translate))
,new cljs.core.Keyword(null,"title","title",636505583),(translate.cljs$core$IFn$_invoke$arity$1 ? translate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"configure-faction-tip","configure-faction-tip",-2074051649)) : translate.call(null,new cljs.core.Keyword(null,"configure-faction-tip","configure-faction-tip",-2074051649)))], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_icons$fa$index_esm.FaUser,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",-1983287057),"cursor-pointer",new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (faction_eid,color,active,li_class,faction,s__36141__$2,temp__5823__auto__,map__36138,map__36138__$1,view_ctx,conn,dispatch,translate){
return (function (){
var G__36150 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zetawar.events.ui","configure-faction","zetawar.events.ui/configure-faction",-1347831745),faction], null);
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__36150) : dispatch.call(null,G__36150));
});})(faction_eid,color,active,li_class,faction,s__36141__$2,temp__5823__auto__,map__36138,map__36138__$1,view_ctx,conn,dispatch,translate))
,new cljs.core.Keyword(null,"title","title",636505583),(translate.cljs$core$IFn$_invoke$arity$1 ? translate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"configure-faction-tip","configure-faction-tip",-2074051649)) : translate.call(null,new cljs.core.Keyword(null,"configure-faction-tip","configure-faction-tip",-2074051649)))], null)], null))], null)], null);
})(),zetawar$views$faction_list_$_iter__36140(cljs.core.rest(s__36141__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.deref(zetawar.subs.factions(conn)));
})());
});
zetawar.views.status_info = (function zetawar$views$status_info(p__36152){
var map__36153 = p__36152;
var map__36153__$1 = cljs.core.__destructure_map(map__36153);
var view_ctx = map__36153__$1;
var conn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36153__$1,new cljs.core.Keyword(null,"conn","conn",278309663));
var translate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36153__$1,new cljs.core.Keyword(null,"translate","translate",1336199447));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-4.text-sm.text-gray-700","div.mt-4.text-sm.text-gray-700",-1729743258),(function (){var vec__36154 = cljs.core.deref(zetawar.subs.selected_hex(conn));
var sel_q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36154,(0),null);
var sel_r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36154,(1),null);
var vec__36157 = cljs.core.deref(zetawar.subs.targeted_hex(conn));
var tar_q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36157,(0),null);
var tar_r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36157,(1),null);
var vec__36160 = cljs.core.deref(zetawar.subs.selected_terrain_effects(conn));
var sel_mc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36160,(0),null);
var sel_at = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36160,(1),null);
var sel_ar = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36160,(2),null);
var vec__36163 = cljs.core.deref(zetawar.subs.targeted_terrain_effects(conn));
var tar_mc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36163,(0),null);
var tar_at = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36163,(1),null);
var tar_ar = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36163,(2),null);
var vec__36166 = cljs.core.deref(zetawar.subs.hover_hex(conn));
var hover_q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36166,(0),null);
var hover_r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36166,(1),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-wrap.items-center","div.flex.flex-wrap.items-center",1689267639),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mr-2","div.mr-2",234425641),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.font-medium","span.font-medium",1169799421),(translate.cljs$core$IFn$_invoke$arity$1 ? translate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selected-label","selected-label",-902280703)) : translate.call(null,new cljs.core.Keyword(null,"selected-label","selected-label",-902280703)))], null),(cljs.core.truth_(sel_q)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abbr.ml-1.font-mono","abbr.ml-1.font-mono",418875078),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),(translate.cljs$core$IFn$_invoke$arity$1 ? translate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tile-coordinates-label","tile-coordinates-label",-1196032156)) : translate.call(null,new cljs.core.Keyword(null,"tile-coordinates-label","tile-coordinates-label",-1196032156))),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"inherit"], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sel_q),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sel_r)].join('')], null),(cljs.core.truth_(sel_mc)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abbr.font-mono","abbr.font-mono",1426161337),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),(translate.cljs$core$IFn$_invoke$arity$1 ? translate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"terrain-effects-label","terrain-effects-label",655643533)) : translate.call(null,new cljs.core.Keyword(null,"terrain-effects-label","terrain-effects-label",655643533))),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"inherit"], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sel_mc),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sel_at),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sel_ar)].join('')], null),")"], null):null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ml-1","span.ml-1",-436032201),"-"], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mx-2","div.mx-2",1012214686),"\u2022"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mx-2","div.mx-2",1012214686),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.font-medium","span.font-medium",1169799421),(translate.cljs$core$IFn$_invoke$arity$1 ? translate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"targeted-label","targeted-label",-916246250)) : translate.call(null,new cljs.core.Keyword(null,"targeted-label","targeted-label",-916246250)))], null),(cljs.core.truth_(tar_q)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abbr.ml-1.font-mono","abbr.ml-1.font-mono",418875078),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),(translate.cljs$core$IFn$_invoke$arity$1 ? translate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tile-coordinates-label","tile-coordinates-label",-1196032156)) : translate.call(null,new cljs.core.Keyword(null,"tile-coordinates-label","tile-coordinates-label",-1196032156))),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"inherit"], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(tar_q),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tar_r)].join('')], null)," (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abbr.font-mono","abbr.font-mono",1426161337),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),(translate.cljs$core$IFn$_invoke$arity$1 ? translate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"terrain-effects-label","terrain-effects-label",655643533)) : translate.call(null,new cljs.core.Keyword(null,"terrain-effects-label","terrain-effects-label",655643533))),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"inherit"], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(tar_mc),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tar_at),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tar_ar)].join('')], null),")"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ml-1","span.ml-1",-436032201),"-"], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hidden.md:block","div.hidden.md:block",-1468927411),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mx-2","div.mx-2",1012214686),"\u2022"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mx-2","div.mx-2",1012214686),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.font-medium","span.font-medium",1169799421),(translate.cljs$core$IFn$_invoke$arity$1 ? translate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hover-tile-location","hover-tile-location",-1718402906)) : translate.call(null,new cljs.core.Keyword(null,"hover-tile-location","hover-tile-location",-1718402906)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ml-1.font-mono","span.ml-1.font-mono",1678317157),(cljs.core.truth_(hover_q)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hover_q),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hover_r)].join(''):"-")], null)], null)], null)], null);
})()], null);
});
zetawar.views.armor_type_abbrevs = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("unit-type.armor-type","personnel","unit-type.armor-type/personnel",374712967),"P",new cljs.core.Keyword("unit-type.armor-type","armored","unit-type.armor-type/armored",-198658220),"Ar",new cljs.core.Keyword("unit-type.armor-type","naval","unit-type.armor-type/naval",-1965102267),"N",new cljs.core.Keyword("unit-type.armor-type","air","unit-type.armor-type/air",-1397984649),"Ai"], null);
zetawar.views.unit_picker_row = (function zetawar$views$unit_picker_row(unit_type,color,translate,dispatch){
var color_or_grey = (cljs.core.truth_(new cljs.core.Keyword(null,"affordable","affordable",-1253674052).cljs$core$IFn$_invoke$arity$1(unit_type))?color:"unavailable");
var image = ["/images/game/",clojure.string.replace(new cljs.core.Keyword("unit-type","image","unit-type/image",1063125749).cljs$core$IFn$_invoke$arity$1(unit_type),"COLOR",color_or_grey)].join('');
var media_class = (cljs.core.truth_(new cljs.core.Keyword(null,"affordable","affordable",-1253674052).cljs$core$IFn$_invoke$arity$1(unit_type))?"media text-left":"media text-left text-muted");
var map__36169 = unit_type;
var map__36169__$1 = cljs.core.__destructure_map(map__36169);
var min_range = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36169__$1,new cljs.core.Keyword("unit-type","min-range","unit-type/min-range",1375530394));
var cost = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36169__$1,new cljs.core.Keyword("unit-type","cost","unit-type/cost",-539586050));
var capturing_armor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36169__$1,new cljs.core.Keyword("unit-type","capturing-armor","unit-type/capturing-armor",269152958));
var armor_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36169__$1,new cljs.core.Keyword("unit-type","armor-type","unit-type/armor-type",101248352));
var can_capture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36169__$1,new cljs.core.Keyword("unit-type","can-capture","unit-type/can-capture",1840854852));
var movement = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36169__$1,new cljs.core.Keyword("unit-type","movement","unit-type/movement",-921915036));
var max_range = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36169__$1,new cljs.core.Keyword("unit-type","max-range","unit-type/max-range",1175023596));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36169__$1,new cljs.core.Keyword("unit-type","id","unit-type/id",-865738639));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36169__$1,new cljs.core.Keyword("unit-type","description","unit-type/description",-841830541));
var armor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36169__$1,new cljs.core.Keyword("unit-type","armor","unit-type/armor",-1309357770));
var armor_type_abbrev = (zetawar.views.armor_type_abbrevs.cljs$core$IFn$_invoke$arity$1 ? zetawar.views.armor_type_abbrevs.cljs$core$IFn$_invoke$arity$1(armor_type) : zetawar.views.armor_type_abbrevs.call(null,armor_type));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.text-center.clickable","tr.text-center.clickable",-577429234),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"affordable","affordable",-1253674052).cljs$core$IFn$_invoke$arity$1(unit_type))){
var G__36170_36345 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zetawar.events.ui","hide-unit-picker","zetawar.events.ui/hide-unit-picker",-1843608860)], null);
(dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__36170_36345) : dispatch.call(null,G__36170_36345));

var G__36171 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zetawar.events.ui","build-unit","zetawar.events.ui/build-unit",1748886852),id], null);
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__36171) : dispatch.call(null,G__36171));
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),media_class], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.media-left.media-middle","div.media-left.media-middle",-1286242750),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),image], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.media-body","div.media-body",-1089439484),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.media-heading","h4.media-heading",-1536879151),description], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((translate.cljs$core$IFn$_invoke$arity$1 ? translate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"unit-cost-label","unit-cost-label",1756936344)) : translate.call(null,new cljs.core.Keyword(null,"unit-cost-label","unit-cost-label",1756936344)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cost)].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(function (){var G__36172 = armor_type;
var G__36172__$1 = (((G__36172 instanceof cljs.core.Keyword))?G__36172.fqn:null);
switch (G__36172__$1) {
case "unit-type.armor-type/personnel":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abbr","abbr",2088591884),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),(translate.cljs$core$IFn$_invoke$arity$1 ? translate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"personnel-name","personnel-name",-1508700166)) : translate.call(null,new cljs.core.Keyword(null,"personnel-name","personnel-name",-1508700166))),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"inherit"], null)], null),armor_type_abbrev], null);

break;
case "unit-type.armor-type/armored":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abbr","abbr",2088591884),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),(translate.cljs$core$IFn$_invoke$arity$1 ? translate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"armored-name","armored-name",-91521489)) : translate.call(null,new cljs.core.Keyword(null,"armored-name","armored-name",-91521489))),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"inherit"], null)], null),armor_type_abbrev], null);

break;
case "unit-type.armor-type/naval":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abbr","abbr",2088591884),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),(translate.cljs$core$IFn$_invoke$arity$1 ? translate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"naval-name","naval-name",874111044)) : translate.call(null,new cljs.core.Keyword(null,"naval-name","naval-name",874111044))),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"inherit"], null)], null),armor_type_abbrev], null);

break;
case "unit-type.armor-type/air":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abbr","abbr",2088591884),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),(translate.cljs$core$IFn$_invoke$arity$1 ? translate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"air-name","air-name",-1455624201)) : translate.call(null,new cljs.core.Keyword(null,"air-name","air-name",-1455624201))),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"inherit"], null)], null),armor_type_abbrev], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36172__$1)].join('')));

}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),movement], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(cljs.core.truth_(can_capture)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abbr","abbr",2088591884),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((translate.cljs$core$IFn$_invoke$arity$1 ? translate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"while-capturing-label","while-capturing-label",-1903081937)) : translate.call(null,new cljs.core.Keyword(null,"while-capturing-label","while-capturing-label",-1903081937)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(capturing_armor)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"inherit"], null)], null),armor], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abbr","abbr",2088591884),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),(translate.cljs$core$IFn$_invoke$arity$1 ? translate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"unit-cannot-capture-bases-label","unit-cannot-capture-bases-label",-1346622597)) : translate.call(null,new cljs.core.Keyword(null,"unit-cannot-capture-bases-label","unit-cannot-capture-bases-label",-1346622597))),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"inherit"], null)], null),armor], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(min_range),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_range)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(function (){var iter__5523__auto__ = (function zetawar$views$unit_picker_row_$_iter__36174(s__36175){
return (new cljs.core.LazySeq(null,(function (){
var s__36175__$1 = s__36175;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__36175__$1);
if(temp__5823__auto__){
var s__36175__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36175__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__36175__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__36177 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__36176 = (0);
while(true){
if((i__36176 < size__5522__auto__)){
var unit_strength = cljs.core._nth(c__5521__auto__,i__36176);
cljs.core.chunk_append(b__36177,(function (){var map__36179 = unit_strength;
var map__36179__$1 = cljs.core.__destructure_map(map__36179);
var armor_type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36179__$1,new cljs.core.Keyword("unit-strength","armor-type","unit-strength/armor-type",-1492629529));
var attack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36179__$1,new cljs.core.Keyword("unit-strength","attack","unit-strength/attack",-474082794));
var armor_type_abbrev__$1 = (zetawar.views.armor_type_abbrevs.cljs$core$IFn$_invoke$arity$1 ? zetawar.views.armor_type_abbrevs.cljs$core$IFn$_invoke$arity$1(armor_type__$1) : zetawar.views.armor_type_abbrevs.call(null,armor_type__$1));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(armor_type_abbrev__$1),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attack)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["strength-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-",cljs.core.name(armor_type__$1)].join('')], null));
})());

var G__36355 = (i__36176 + (1));
i__36176 = G__36355;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36177),zetawar$views$unit_picker_row_$_iter__36174(cljs.core.chunk_rest(s__36175__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36177),null);
}
} else {
var unit_strength = cljs.core.first(s__36175__$2);
return cljs.core.cons((function (){var map__36182 = unit_strength;
var map__36182__$1 = cljs.core.__destructure_map(map__36182);
var armor_type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36182__$1,new cljs.core.Keyword("unit-strength","armor-type","unit-strength/armor-type",-1492629529));
var attack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36182__$1,new cljs.core.Keyword("unit-strength","attack","unit-strength/attack",-474082794));
var armor_type_abbrev__$1 = (zetawar.views.armor_type_abbrevs.cljs$core$IFn$_invoke$arity$1 ? zetawar.views.armor_type_abbrevs.cljs$core$IFn$_invoke$arity$1(armor_type__$1) : zetawar.views.armor_type_abbrevs.call(null,armor_type__$1));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(armor_type_abbrev__$1),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attack)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["strength-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-",cljs.core.name(armor_type__$1)].join('')], null));
})(),zetawar$views$unit_picker_row_$_iter__36174(cljs.core.rest(s__36175__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword("unit-type","strengths","unit-type/strengths",2113838735).cljs$core$IFn$_invoke$arity$1(unit_type));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",(function (){var iter__5523__auto__ = (function zetawar$views$unit_picker_row_$_iter__36183(s__36184){
return (new cljs.core.LazySeq(null,(function (){
var s__36184__$1 = s__36184;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__36184__$1);
if(temp__5823__auto__){
var s__36184__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36184__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__36184__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__36186 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__36185 = (0);
while(true){
if((i__36185 < size__5522__auto__)){
var can_repair = cljs.core._nth(c__5521__auto__,i__36185);
cljs.core.chunk_append(b__36186,(zetawar.views.armor_type_abbrevs.cljs$core$IFn$_invoke$arity$2 ? zetawar.views.armor_type_abbrevs.cljs$core$IFn$_invoke$arity$2(can_repair,"") : zetawar.views.armor_type_abbrevs.call(null,can_repair,"")));

var G__36366 = (i__36185 + (1));
i__36185 = G__36366;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36186),zetawar$views$unit_picker_row_$_iter__36183(cljs.core.chunk_rest(s__36184__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36186),null);
}
} else {
var can_repair = cljs.core.first(s__36184__$2);
return cljs.core.cons((zetawar.views.armor_type_abbrevs.cljs$core$IFn$_invoke$arity$2 ? zetawar.views.armor_type_abbrevs.cljs$core$IFn$_invoke$arity$2(can_repair,"") : zetawar.views.armor_type_abbrevs.call(null,can_repair,"")),zetawar$views$unit_picker_row_$_iter__36183(cljs.core.rest(s__36184__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword("unit-type","can-repair","unit-type/can-repair",1128696439).cljs$core$IFn$_invoke$arity$1(unit_type));
})())], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["unit-row-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null));
});
zetawar.views.unit_picker = (function zetawar$views$unit_picker(p__36188){
var map__36192 = p__36188;
var map__36192__$1 = cljs.core.__destructure_map(map__36192);
var view_ctx = map__36192__$1;
var conn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36192__$1,new cljs.core.Keyword(null,"conn","conn",278309663));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36192__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
var translate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36192__$1,new cljs.core.Keyword(null,"translate","translate",1336199447));
var unit_types = cljs.core.deref(zetawar.subs.available_unit_types(conn));
var cur_faction = cljs.core.deref(zetawar.subs.current_faction(conn));
var color = cljs.core.name(new cljs.core.Keyword("faction","color","faction/color",2104478137).cljs$core$IFn$_invoke$arity$1(cur_faction));
var hide_picker = (function (){
var G__36193 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zetawar.events.ui","hide-unit-picker","zetawar.events.ui/hide-unit-picker",-1843608860)], null);
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__36193) : dispatch.call(null,G__36193));
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zetawar.views.modal,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"show","show",-576705889),cljs.core.deref(zetawar.subs.picking_unit_QMARK_(conn)),new cljs.core.Keyword(null,"on-hide","on-hide",1263105709),hide_picker,new cljs.core.Keyword(null,"title","title",636505583),(translate.cljs$core$IFn$_invoke$arity$1 ? translate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"build-title","build-title",1218506937)) : translate.call(null,new cljs.core.Keyword(null,"build-title","build-title",1218506937))),new cljs.core.Keyword(null,"body","body",-2049205669),reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table.table-bordered.table-striped.table-condensed.table-hover","table.table.table-bordered.table-striped.table-condensed.table-hover",1189753864),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),""], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.text-center","th.text-center",738072305),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"12%"], null)], null),(translate.cljs$core$IFn$_invoke$arity$1 ? translate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"armor-type-label","armor-type-label",2146666643)) : translate.call(null,new cljs.core.Keyword(null,"armor-type-label","armor-type-label",2146666643)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.text-center","th.text-center",738072305),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"12%"], null)], null),(translate.cljs$core$IFn$_invoke$arity$1 ? translate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"movement-label","movement-label",294844967)) : translate.call(null,new cljs.core.Keyword(null,"movement-label","movement-label",294844967)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.text-center","th.text-center",738072305),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"12%"], null)], null),(translate.cljs$core$IFn$_invoke$arity$1 ? translate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"armor-label","armor-label",-513380952)) : translate.call(null,new cljs.core.Keyword(null,"armor-label","armor-label",-513380952)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.text-center","th.text-center",738072305),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"12%"], null)], null),(translate.cljs$core$IFn$_invoke$arity$1 ? translate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"range-label","range-label",1817464406)) : translate.call(null,new cljs.core.Keyword(null,"range-label","range-label",1817464406)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.text-center","th.text-center",738072305),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"12%"], null)], null),(translate.cljs$core$IFn$_invoke$arity$1 ? translate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"attack-label","attack-label",824391156)) : translate.call(null,new cljs.core.Keyword(null,"attack-label","attack-label",824391156)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.text-center","th.text-center",738072305),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"12%"], null)], null),(translate.cljs$core$IFn$_invoke$arity$1 ? translate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"field-repair-label","field-repair-label",2029780152)) : translate.call(null,new cljs.core.Keyword(null,"field-repair-label","field-repair-label",2029780152)))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5523__auto__ = (function zetawar$views$unit_picker_$_iter__36198(s__36199){
return (new cljs.core.LazySeq(null,(function (){
var s__36199__$1 = s__36199;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__36199__$1);
if(temp__5823__auto__){
var s__36199__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36199__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__36199__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__36201 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__36200 = (0);
while(true){
if((i__36200 < size__5522__auto__)){
var unit_type = cljs.core._nth(c__5521__auto__,i__36200);
cljs.core.chunk_append(b__36201,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [zetawar.views.unit_picker_row,unit_type,color,translate,dispatch], null));

var G__36373 = (i__36200 + (1));
i__36200 = G__36373;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36201),zetawar$views$unit_picker_$_iter__36198(cljs.core.chunk_rest(s__36199__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36201),null);
}
} else {
var unit_type = cljs.core.first(s__36199__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [zetawar.views.unit_picker_row,unit_type,color,translate,dispatch], null),zetawar$views$unit_picker_$_iter__36198(cljs.core.rest(s__36199__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(unit_types);
})()], null)], null)], null)),new cljs.core.Keyword(null,"footer","footer",1606445390),reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.px-4.py-2.bg-gray-300.text-gray-800.rounded.hover:bg-gray-400.focus:outline-none.focus:ring-2.focus:ring-gray-500.focus:ring-opacity-50","button.px-4.py-2.bg-gray-300.text-gray-800.rounded.hover:bg-gray-400.focus:outline-none.focus:ring-2.focus:ring-gray-500.focus:ring-opacity-50",-936042050),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),hide_picker], null),(translate.cljs$core$IFn$_invoke$arity$1 ? translate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"cancel-button","cancel-button",-45389038)) : translate.call(null,new cljs.core.Keyword(null,"cancel-button","cancel-button",-45389038)))], null))], null)], null);
});
zetawar.views.faction_settings_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected-player-type","selected-player-type",992594283),null], null));
zetawar.views.faction_settings = (function zetawar$views$faction_settings(p__36212){
var map__36213 = p__36212;
var map__36213__$1 = cljs.core.__destructure_map(map__36213);
var views_ctx = map__36213__$1;
var conn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36213__$1,new cljs.core.Keyword(null,"conn","conn",278309663));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36213__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
var translate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36213__$1,new cljs.core.Keyword(null,"translate","translate",1336199447));
var faction = cljs.core.deref(zetawar.subs.faction_to_configure(conn));
var faction_color = (cljs.core.truth_(faction)?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword("faction","color","faction/color",2104478137).cljs$core$IFn$_invoke$arity$1(faction)),"-name"].join('')):null);
var hide_settings = (function (){
var G__36217 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zetawar.events.ui","hide-faction-settings","zetawar.events.ui/hide-faction-settings",1636757853)], null);
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__36217) : dispatch.call(null,G__36217));
});
var select_player_type = (function (p1__36210_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(zetawar.views.faction_settings_state,cljs.core.assoc,new cljs.core.Keyword(null,"selected-player-type","selected-player-type",992594283),p1__36210_SHARP_.target.value);
});
var set_player_type = (function (e){
e.preventDefault();

var temp__5823__auto___36374 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"zetawar.players","zetawar.players",-243265940,null),(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"selected-player-type","selected-player-type",992594283).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(zetawar.views.faction_settings_state));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"human","human",-772334390);
}
})());
if(cljs.core.truth_(temp__5823__auto___36374)){
var player_type_id_36375 = temp__5823__auto___36374;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(zetawar.views.faction_settings_state,cljs.core.assoc,new cljs.core.Keyword(null,"selected-player-type","selected-player-type",992594283),null);

if(cljs.core.truth_(faction)){
var G__36221_36376 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zetawar.events.ui","set-faction-player-type","zetawar.events.ui/set-faction-player-type",854396964),faction,player_type_id_36375], null);
(dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__36221_36376) : dispatch.call(null,G__36221_36376));
} else {
}
} else {
}

return hide_settings();
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zetawar.views.modal,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"show","show",-576705889),(!((faction == null))),new cljs.core.Keyword(null,"on-hide","on-hide",1263105709),hide_settings,new cljs.core.Keyword(null,"title","title",636505583),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((translate.cljs$core$IFn$_invoke$arity$1 ? translate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"configure-faction-title-prefix","configure-faction-title-prefix",-604408287)) : translate.call(null,new cljs.core.Keyword(null,"configure-faction-title-prefix","configure-faction-title-prefix",-604408287))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(faction_color)?(translate.cljs$core$IFn$_invoke$arity$1 ? translate.cljs$core$IFn$_invoke$arity$1(faction_color) : translate.call(null,faction_color)):null))].join(''),new cljs.core.Keyword(null,"body","body",-2049205669),reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),set_player_type], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-4","div.mb-4",-1002350692),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.block.text-gray-700.text-sm.font-bold.mb-2","label.block.text-gray-700.text-sm.font-bold.mb-2",1829044229),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"player-type"], null),(translate.cljs$core$IFn$_invoke$arity$1 ? translate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player-type-label","player-type-label",-341561387)) : translate.call(null,new cljs.core.Keyword(null,"player-type-label","player-type-label",-341561387)))], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.shadow.appearance-none.border.rounded.w-full.py-2.px-3.text-gray-700.leading-tight.focus:outline-none.focus:shadow-outline","select.shadow.appearance-none.border.rounded.w-full.py-2.px-3.text-gray-700.leading-tight.focus:outline-none.focus:shadow-outline",1181182888),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"player-type",new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"selected-player-type","selected-player-type",992594283).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(zetawar.views.faction_settings_state));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = (function (){var G__36224 = faction;
var G__36224__$1 = (((G__36224 == null))?null:new cljs.core.Keyword("faction","player-type","faction/player-type",1769856328).cljs$core$IFn$_invoke$arity$1(G__36224));
if((G__36224__$1 == null)){
return null;
} else {
return cljs.core.name(G__36224__$1);
}
})();
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return "";
}
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),select_player_type], null)], null),(function (){var iter__5523__auto__ = (function zetawar$views$faction_settings_$_iter__36225(s__36226){
return (new cljs.core.LazySeq(null,(function (){
var s__36226__$1 = s__36226;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__36226__$1);
if(temp__5823__auto__){
var s__36226__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36226__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__36226__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__36228 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__36227 = (0);
while(true){
if((i__36227 < size__5522__auto__)){
var vec__36229 = cljs.core._nth(c__5521__auto__,i__36227);
var player_type_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36229,(0),null);
var map__36232 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36229,(1),null);
var map__36232__$1 = cljs.core.__destructure_map(map__36232);
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36232__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var ai = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36232__$1,new cljs.core.Keyword(null,"ai","ai",760454697));
cljs.core.chunk_append(b__36228,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name(player_type_id),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name(player_type_id)], null),description], null));

var G__36377 = (i__36227 + (1));
i__36227 = G__36377;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36228),zetawar$views$faction_settings_$_iter__36225(cljs.core.chunk_rest(s__36226__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36228),null);
}
} else {
var vec__36233 = cljs.core.first(s__36226__$2);
var player_type_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36233,(0),null);
var map__36236 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36233,(1),null);
var map__36236__$1 = cljs.core.__destructure_map(map__36236);
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36236__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var ai = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36236__$1,new cljs.core.Keyword(null,"ai","ai",760454697));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name(player_type_id),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name(player_type_id)], null),description], null),zetawar$views$faction_settings_$_iter__36225(cljs.core.rest(s__36226__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(zetawar.players.player_types);
})())], null)], null)),new cljs.core.Keyword(null,"footer","footer",1606445390),reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.space-x-2","div.flex.space-x-2",191162917),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.px-4.py-2.bg-blue-500.text-white.rounded.hover:bg-blue-600.focus:outline-none.focus:ring-2.focus:ring-blue-500.focus:ring-opacity-50","button.px-4.py-2.bg-blue-500.text-white.rounded.hover:bg-blue-600.focus:outline-none.focus:ring-2.focus:ring-blue-500.focus:ring-opacity-50",-506385008),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),set_player_type], null),(translate.cljs$core$IFn$_invoke$arity$1 ? translate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"save-button","save-button",-242340916)) : translate.call(null,new cljs.core.Keyword(null,"save-button","save-button",-242340916)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.px-4.py-2.bg-gray-300.text-gray-800.rounded.hover:bg-gray-400.focus:outline-none.focus:ring-2.focus:ring-gray-500.focus:ring-opacity-50","button.px-4.py-2.bg-gray-300.text-gray-800.rounded.hover:bg-gray-400.focus:outline-none.focus:ring-2.focus:ring-gray-500.focus:ring-opacity-50",-936042050),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),hide_settings], null),(translate.cljs$core$IFn$_invoke$arity$1 ? translate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"cancel-button","cancel-button",-45389038)) : translate.call(null,new cljs.core.Keyword(null,"cancel-button","cancel-button",-45389038)))], null)], null))], null)], null);
});
zetawar.views.new_game_settings_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected-scenario-id","selected-scenario-id",-2024830476),new cljs.core.Keyword(null,"sterlings-aruba-multiplayer","sterlings-aruba-multiplayer",-1973857203)], null));
zetawar.views.new_game_settings = (function zetawar$views$new_game_settings(p__36238){
var map__36239 = p__36238;
var map__36239__$1 = cljs.core.__destructure_map(map__36239);
var view_ctx = map__36239__$1;
var conn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36239__$1,new cljs.core.Keyword(null,"conn","conn",278309663));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36239__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
var translate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36239__$1,new cljs.core.Keyword(null,"translate","translate",1336199447));
var default_scenario_id = new cljs.core.Keyword(null,"sterlings-aruba-multiplayer","sterlings-aruba-multiplayer",-1973857203);
var hide_settings = (function (){
var G__36240 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zetawar.events.ui","hide-new-game-settings","zetawar.events.ui/hide-new-game-settings",-1226415710)], null);
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__36240) : dispatch.call(null,G__36240));
});
var select_scenario = (function (p1__36237_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(zetawar.views.new_game_settings_state,cljs.core.assoc,new cljs.core.Keyword(null,"selected-scenario-id","selected-scenario-id",-2024830476),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__36237_SHARP_.target.value));
});
var start_new_game = (function (e){
e.preventDefault();

var G__36242_36378 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zetawar.events.ui","start-new-game","zetawar.events.ui/start-new-game",1269968919),new cljs.core.Keyword(null,"selected-scenario-id","selected-scenario-id",-2024830476).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(zetawar.views.new_game_settings_state))], null);
(dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__36242_36378) : dispatch.call(null,G__36242_36378));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(zetawar.views.new_game_settings_state,cljs.core.assoc,new cljs.core.Keyword(null,"selected-scenario-id","selected-scenario-id",-2024830476),default_scenario_id);

return hide_settings();
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zetawar.views.modal,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"show","show",-576705889),cljs.core.deref(zetawar.subs.configuring_new_game_QMARK_(conn)),new cljs.core.Keyword(null,"on-hide","on-hide",1263105709),hide_settings,new cljs.core.Keyword(null,"title","title",636505583),(translate.cljs$core$IFn$_invoke$arity$1 ? translate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"new-game-title","new-game-title",1832113000)) : translate.call(null,new cljs.core.Keyword(null,"new-game-title","new-game-title",1832113000))),new cljs.core.Keyword(null,"body","body",-2049205669),reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),start_new_game], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-4","div.mb-4",-1002350692),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.block.text-gray-700.text-sm.font-bold.mb-2","label.block.text-gray-700.text-sm.font-bold.mb-2",1829044229),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"scenario-id"], null),(translate.cljs$core$IFn$_invoke$arity$1 ? translate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"scenario-label","scenario-label",-189918890)) : translate.call(null,new cljs.core.Keyword(null,"scenario-label","scenario-label",-189918890)))], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.shadow.appearance-none.border.rounded.w-full.py-2.px-3.text-gray-700.leading-tight.focus:outline-none.focus:shadow-outline","select.shadow.appearance-none.border.rounded.w-full.py-2.px-3.text-gray-700.leading-tight.focus:outline-none.focus:shadow-outline",1181182888),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"scenario-id",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name(new cljs.core.Keyword(null,"selected-scenario-id","selected-scenario-id",-2024830476).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(zetawar.views.new_game_settings_state))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),select_scenario], null)], null),(function (){var iter__5523__auto__ = (function zetawar$views$new_game_settings_$_iter__36243(s__36244){
return (new cljs.core.LazySeq(null,(function (){
var s__36244__$1 = s__36244;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__36244__$1);
if(temp__5823__auto__){
var s__36244__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36244__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__36244__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__36246 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__36245 = (0);
while(true){
if((i__36245 < size__5522__auto__)){
var vec__36249 = cljs.core._nth(c__5521__auto__,i__36245);
var scenario_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36249,(0),null);
var map__36252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36249,(1),null);
var map__36252__$1 = cljs.core.__destructure_map(map__36252);
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36252__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var notes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36252__$1,new cljs.core.Keyword(null,"notes","notes",-1039600523));
cljs.core.chunk_append(b__36246,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["scenario-",cljs.core.name(scenario_id)].join(''),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name(scenario_id)], null),(cljs.core.truth_(notes)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(description),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(notes)].join(''):description)], null));

var G__36383 = (i__36245 + (1));
i__36245 = G__36383;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36246),zetawar$views$new_game_settings_$_iter__36243(cljs.core.chunk_rest(s__36244__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36246),null);
}
} else {
var vec__36256 = cljs.core.first(s__36244__$2);
var scenario_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36256,(0),null);
var map__36259 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36256,(1),null);
var map__36259__$1 = cljs.core.__destructure_map(map__36259);
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36259__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var notes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36259__$1,new cljs.core.Keyword(null,"notes","notes",-1039600523));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["scenario-",cljs.core.name(scenario_id)].join(''),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name(scenario_id)], null),(cljs.core.truth_(notes)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(description),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(notes)].join(''):description)], null),zetawar$views$new_game_settings_$_iter__36243(cljs.core.rest(s__36244__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(zetawar.data.scenarios);
})())], null)], null)),new cljs.core.Keyword(null,"footer","footer",1606445390),reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.space-x-2","div.flex.space-x-2",191162917),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.px-4.py-2.bg-blue-500.text-white.rounded.hover:bg-blue-600.focus:outline-none.focus:ring-2.focus:ring-blue-500.focus:ring-opacity-50","button.px-4.py-2.bg-blue-500.text-white.rounded.hover:bg-blue-600.focus:outline-none.focus:ring-2.focus:ring-blue-500.focus:ring-opacity-50",-506385008),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),start_new_game], null),(translate.cljs$core$IFn$_invoke$arity$1 ? translate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start-button","start-button",-922527827)) : translate.call(null,new cljs.core.Keyword(null,"start-button","start-button",-922527827)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.px-4.py-2.bg-gray-300.text-gray-800.rounded.hover:bg-gray-400.focus:outline-none.focus:ring-2.focus:ring-gray-500.focus:ring-opacity-50","button.px-4.py-2.bg-gray-300.text-gray-800.rounded.hover:bg-gray-400.focus:outline-none.focus:ring-2.focus:ring-gray-500.focus:ring-opacity-50",-936042050),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),hide_settings], null),(translate.cljs$core$IFn$_invoke$arity$1 ? translate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"cancel-button","cancel-button",-45389038)) : translate.call(null,new cljs.core.Keyword(null,"cancel-button","cancel-button",-45389038)))], null)], null))], null)], null);
});
zetawar.views.alert = (function zetawar$views$alert(p__36261){
var map__36262 = p__36261;
var map__36262__$1 = cljs.core.__destructure_map(map__36262);
var view_ctx = map__36262__$1;
var conn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36262__$1,new cljs.core.Keyword(null,"conn","conn",278309663));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36262__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
var map__36263 = cljs.core.deref(zetawar.subs.app(conn));
var map__36263__$1 = cljs.core.__destructure_map(map__36263);
var alert_message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36263__$1,new cljs.core.Keyword("app","alert-message","app/alert-message",-1004431438));
var alert_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36263__$1,new cljs.core.Keyword("app","alert-type","app/alert-type",405785136));
var alert_class = (function (){var G__36264 = (function (){var G__36265 = alert_type;
if((G__36265 == null)){
return null;
} else {
return cljs.core.name(G__36265);
}
})();
switch (G__36264) {
case "success":
return "bg-green-100 border-green-500 text-green-700";

break;
case "info":
return "bg-blue-100 border-blue-500 text-blue-700";

break;
case "warning":
return "bg-yellow-100 border-yellow-500 text-yellow-700";

break;
case "danger":
return "bg-red-100 border-red-500 text-red-700";

break;
default:
return "bg-gray-100 border-gray-500 text-gray-700";

}
})();
if(cljs.core.truth_(alert_message)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w-full.mb-4","div.w-full.mb-4",1338945098),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w-full","div.w-full",-1626749092),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.border-l-4.p-4.rounded","div.border-l-4.p-4.rounded",563684540),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),alert_class], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.float-right.text-gray-500.hover:text-gray-700","button.float-right.text-gray-500.hover:text-gray-700",486528805),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"Close",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__36266 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zetawar.events.ui","hide-alert","zetawar.events.ui/hide-alert",-1054007407)], null);
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__36266) : dispatch.call(null,G__36266));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true], null),"\u00D7"], null)], null),alert_message], null)], null)], null);
} else {
return null;
}
});
zetawar.views.game_interface = (function zetawar$views$game_interface(view_ctx){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-wrap"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full md:w-1/6 lg:w-1/5 p-2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zetawar.views.faction_credits,view_ctx], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zetawar.views.faction_list,view_ctx], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zetawar.views.faction_actions,view_ctx], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full md:w-5/6 lg:w-4/5 p-2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zetawar.views.faction_status,view_ctx], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zetawar.views.board,view_ctx], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zetawar.views.status_info,view_ctx], null)], null)], null);
});
zetawar.views.app_root = (function zetawar$views$app_root(p__36272){
var map__36273 = p__36272;
var map__36273__$1 = cljs.core.__destructure_map(map__36273);
var view_ctx = map__36273__$1;
var conn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36273__$1,new cljs.core.Keyword(null,"conn","conn",278309663));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36273__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
var translate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36273__$1,new cljs.core.Keyword(null,"translate","translate",1336199447));
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zetawar.views.new_game_settings,view_ctx], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zetawar.views.faction_settings,view_ctx], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zetawar.views.unit_picker,view_ctx], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zetawar.views.end_turn_alert,view_ctx], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zetawar.views.modal,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"show","show",-576705889),cljs.core.deref(zetawar.subs.show_win_message_QMARK_(conn)),new cljs.core.Keyword(null,"on-hide","on-hide",1263105709),(function (){
var G__36274 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zetawar.events.ui","hide-win-message","zetawar.events.ui/hide-win-message",-166765034)], null);
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__36274) : dispatch.call(null,G__36274));
}),new cljs.core.Keyword(null,"title","title",636505583),(translate.cljs$core$IFn$_invoke$arity$1 ? translate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"win-title","win-title",-189588247)) : translate.call(null,new cljs.core.Keyword(null,"win-title","win-title",-189588247))),new cljs.core.Keyword(null,"body","body",-2049205669),reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),(translate.cljs$core$IFn$_invoke$arity$1 ? translate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"win-body","win-body",727114451)) : translate.call(null,new cljs.core.Keyword(null,"win-body","win-body",727114451)))], null)], null)], null)),new cljs.core.Keyword(null,"footer","footer",1606445390),reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.px-4.py-2.bg-gray-300.text-gray-800.rounded.hover:bg-gray-400.focus:outline-none.focus:ring-2.focus:ring-gray-500.focus:ring-opacity-50","button.px-4.py-2.bg-gray-300.text-gray-800.rounded.hover:bg-gray-400.focus:outline-none.focus:ring-2.focus:ring-gray-500.focus:ring-opacity-50",-936042050),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__36277 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zetawar.events.ui","hide-win-message","zetawar.events.ui/hide-win-message",-166765034)], null);
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__36277) : dispatch.call(null,G__36277));
})], null),(translate.cljs$core$IFn$_invoke$arity$1 ? translate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"close-button","close-button",1885538121)) : translate.call(null,new cljs.core.Keyword(null,"close-button","close-button",1885538121)))], null))], null)], null),zetawar.views.common.navbar.cljs$core$IFn$_invoke$arity$1("Game"),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"container mx-auto px-4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zetawar.views.alert,view_ctx], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zetawar.views.game_interface,view_ctx], null)], null),zetawar.views.common.footer()], null);
});

//# sourceMappingURL=zetawar.views.js.map
