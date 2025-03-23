goog.provide('zetawar.db');
zetawar.db.schema = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("unit-type","game-id-idx","unit-type/game-id-idx",-1592580639),new cljs.core.Keyword("terrain-type","effects","terrain-type/effects",490191874),new cljs.core.Keyword("game","id","game/id",-1385234878),new cljs.core.Keyword("faction","next-faction","faction/next-faction",23975586),new cljs.core.Keyword("game","unit-types","game/unit-types",-1902099101),new cljs.core.Keyword("game","unit-state-maps","game/unit-state-maps",-1222635228),new cljs.core.Keyword("unit-type","zoc-armor-types","unit-type/zoc-armor-types",887928037),new cljs.core.Keyword("faction","units","faction/units",-1588815131),new cljs.core.Keyword("unit-state","game-id-idx","unit-state/game-id-idx",1110742406),new cljs.core.Keyword("app","game","app/game",-441616472),new cljs.core.Keyword("unit-state-map","built-state","unit-state-map/built-state",-465310679),new cljs.core.Keyword("unit","attacked-from","unit/attacked-from",1625408364),new cljs.core.Keyword("game","factions","game/factions",148269805),new cljs.core.Keyword("unit-state-map","start-state","unit-state-map/start-state",824516686),new cljs.core.Keyword("unit-state-transition","new-state","unit-state-transition/new-state",1274069070),new cljs.core.Keyword("unit","game-pos-idx","unit/game-pos-idx",2034098862),new cljs.core.Keyword("game","unit-states","game/unit-states",-1461749553),new cljs.core.Keyword("game","map","game/map",1374722543),new cljs.core.Keyword("unit-type","strengths","unit-type/strengths",2113838735),new cljs.core.Keyword("unit-state","transitions","unit-state/transitions",-1006392465),new cljs.core.Keyword("unit","type","unit/type",1170646544),new cljs.core.Keyword("unit","terrain","unit/terrain",692687601),new cljs.core.Keyword("unit","state","unit/state",-1991906543),new cljs.core.Keyword("terrain","type","terrain/type",-1187652655),new cljs.core.Keyword("game","current-faction","game/current-faction",-1129931374),new cljs.core.Keyword("unit-state-map","states","unit-state-map/states",2138433235),new cljs.core.Keyword("terrain-type","game-id-idx","terrain-type/game-id-idx",-1291404044),new cljs.core.Keyword("terrain","owner","terrain/owner",1031873140),new cljs.core.Keyword("unit-state-map","game-id-idx","unit-state-map/game-id-idx",-1226490955),new cljs.core.Keyword("unit-type","can-repair","unit-type/can-repair",1128696439),new cljs.core.Keyword("map","terrains","map/terrains",571601527),new cljs.core.Keyword("game","terrain-types","game/terrain-types",515074457),new cljs.core.Keyword("terrain","game-pos-idx","terrain/game-pos-idx",340565053),new cljs.core.Keyword("unit-type","state-map","unit-type/state-map",-627625699),new cljs.core.Keyword("terrain-effect","unit-type","terrain-effect/unit-type",1046397533),new cljs.core.Keyword("app","configuring-faction","app/configuring-faction",322928126),new cljs.core.Keyword("terrain-type","can-build","terrain-type/can-build",1032082687),new cljs.core.Keyword("game","starting-faction","game/starting-faction",1985241055)],[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","isComponent","db/isComponent",423352398),true], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","isComponent","db/isComponent",423352398),true], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","isComponent","db/isComponent",423352398),true], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","isComponent","db/isComponent",423352398),true,new cljs.core.Keyword("db","index","db/index",-1531680669),true], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","isComponent","db/isComponent",423352398),true], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","isComponent","db/isComponent",423352398),true], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","isComponent","db/isComponent",423352398),true], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","isComponent","db/isComponent",423352398),true], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","isComponent","db/isComponent",423352398),true], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","isComponent","db/isComponent",423352398),true], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","isComponent","db/isComponent",423352398),true], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","isComponent","db/isComponent",423352398),true], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","index","db/index",-1531680669),true], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null)]);
zetawar.db.prev_temp_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1000000));
zetawar.db.next_temp_id = (function zetawar$db$next_temp_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(zetawar.db.prev_temp_id,cljs.core.dec);
});
/**
 * Returns the single entity returned by a query.
 */
zetawar.db.qe = (function zetawar$db$qe(var_args){
var args__5775__auto__ = [];
var len__5769__auto___49518 = arguments.length;
var i__5770__auto___49519 = (0);
while(true){
if((i__5770__auto___49519 < len__5769__auto___49518)){
args__5775__auto__.push((arguments[i__5770__auto___49519]));

var G__49521 = (i__5770__auto___49519 + (1));
i__5770__auto___49519 = G__49521;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return zetawar.db.qe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(zetawar.db.qe.cljs$core$IFn$_invoke$arity$variadic = (function (query,db,args){
var temp__5823__auto__ = zetawar.util.ssolo(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(datascript.core.q,query,db,args));
if(cljs.core.truth_(temp__5823__auto__)){
var result = temp__5823__auto__;
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,result) : datascript.core.entity.call(null,db,result));
} else {
return null;
}
}));

(zetawar.db.qe.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(zetawar.db.qe.cljs$lang$applyTo = (function (seq49395){
var G__49396 = cljs.core.first(seq49395);
var seq49395__$1 = cljs.core.next(seq49395);
var G__49397 = cljs.core.first(seq49395__$1);
var seq49395__$2 = cljs.core.next(seq49395__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49396,G__49397,seq49395__$2);
}));

/**
 * Returns the unique entity identified by either attr (for singleton
 *   entities) or attr and val.
 */
zetawar.db.find_by = (function zetawar$db$find_by(var_args){
var G__49401 = arguments.length;
switch (G__49401) {
case 2:
return zetawar.db.find_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return zetawar.db.find_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zetawar.db.find_by.cljs$core$IFn$_invoke$arity$2 = (function (db,attr){
return zetawar.db.qe.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?attr","?attr",-2066507837,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"?attr","?attr",-2066507837,null)], null)], null),db,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr], 0));
}));

(zetawar.db.find_by.cljs$core$IFn$_invoke$arity$3 = (function (db,attr,val){
return zetawar.db.qe.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?attr","?attr",-2066507837,null),new cljs.core.Symbol(null,"?val","?val",-44429635,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"?attr","?attr",-2066507837,null),new cljs.core.Symbol(null,"?val","?val",-44429635,null)], null)], null),db,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr,val], 0));
}));

(zetawar.db.find_by.cljs$lang$maxFixedArity = 3);

/**
 * Returns the entities returned by a query, assuming that
 *   all :find results are entity ids.
 */
zetawar.db.qes = (function zetawar$db$qes(var_args){
var args__5775__auto__ = [];
var len__5769__auto___49523 = arguments.length;
var i__5770__auto___49524 = (0);
while(true){
if((i__5770__auto___49524 < len__5769__auto___49523)){
args__5775__auto__.push((arguments[i__5770__auto___49524]));

var G__49525 = (i__5770__auto___49524 + (1));
i__5770__auto___49524 = G__49525;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return zetawar.db.qes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(zetawar.db.qes.cljs$core$IFn$_invoke$arity$variadic = (function (query,db,args){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (items){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(datascript.core.entity,db),items);
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$4(datascript.core.q,query,db,args));
}));

(zetawar.db.qes.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(zetawar.db.qes.cljs$lang$applyTo = (function (seq49402){
var G__49403 = cljs.core.first(seq49402);
var seq49402__$1 = cljs.core.next(seq49402);
var G__49404 = cljs.core.first(seq49402__$1);
var seq49402__$2 = cljs.core.next(seq49402__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49403,G__49404,seq49402__$2);
}));

/**
 * Return a sequence of entities returned by a query, assuming
 *   that each :find result contains a single entity id.
 */
zetawar.db.qess = (function zetawar$db$qess(var_args){
var args__5775__auto__ = [];
var len__5769__auto___49526 = arguments.length;
var i__5770__auto___49527 = (0);
while(true){
if((i__5770__auto___49527 < len__5769__auto___49526)){
args__5775__auto__.push((arguments[i__5770__auto___49527]));

var G__49528 = (i__5770__auto___49527 + (1));
i__5770__auto___49527 = G__49528;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return zetawar.db.qess.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(zetawar.db.qess.cljs$core$IFn$_invoke$arity$variadic = (function (query,db,args){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__49406_SHARP_){
var G__49410 = db;
var G__49411 = zetawar.util.solo(p1__49406_SHARP_);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__49410,G__49411) : datascript.core.entity.call(null,G__49410,G__49411));
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$4(datascript.core.q,query,db,args));
}));

(zetawar.db.qess.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(zetawar.db.qess.cljs$lang$applyTo = (function (seq49407){
var G__49408 = cljs.core.first(seq49407);
var seq49407__$1 = cljs.core.next(seq49407);
var G__49409 = cljs.core.first(seq49407__$1);
var seq49407__$2 = cljs.core.next(seq49407__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49408,G__49409,seq49407__$2);
}));

/**
 * Returns all entities possessing attr.
 */
zetawar.db.find_all_by = (function zetawar$db$find_all_by(db,attr){
return zetawar.db.qess.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?attr","?attr",-2066507837,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"?attr","?attr",-2066507837,null)], null)], null),db,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr], 0));
});

/**
 * A protocol for retrieving an object's entity id.
 * @interface
 */
zetawar.db.Eid = function(){};

var zetawar$db$Eid$e$dyn_49529 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (zetawar.db.e[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (zetawar.db.e["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Eid.e",_);
}
}
});
/**
 * identifying id for a value
 */
zetawar.db.e = (function zetawar$db$e(_){
if((((!((_ == null)))) && ((!((_.zetawar$db$Eid$e$arity$1 == null)))))){
return _.zetawar$db$Eid$e$arity$1(_);
} else {
return zetawar$db$Eid$e$dyn_49529(_);
}
});

(zetawar.db.Eid["number"] = true);

(zetawar.db.e["number"] = (function (n){
return n;
}));

(cljs.core.PersistentHashMap.prototype.zetawar$db$Eid$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.zetawar$db$Eid$e$arity$1 = (function (ent){
var ent__$1 = this;
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(ent__$1);
}));

(cljs.core.PersistentArrayMap.prototype.zetawar$db$Eid$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.zetawar$db$Eid$e$arity$1 = (function (ent){
var ent__$1 = this;
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(ent__$1);
}));

(datascript.impl.entity.Entity.prototype.zetawar$db$Eid$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.impl.entity.Entity.prototype.zetawar$db$Eid$e$arity$1 = (function (ent){
var ent__$1 = this;
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(ent__$1);
}));

//# sourceMappingURL=zetawar.db.js.map
