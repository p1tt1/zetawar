goog.provide('zetawar.hex');
zetawar.hex.min_q = (0);
zetawar.hex.min_r = (0);
zetawar.hex.max_q = (100);
zetawar.hex.max_r = (100);
zetawar.hex.east = (function zetawar$hex$east(q,r){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(q + (1)),r], null);
});
zetawar.hex.east_of_QMARK_ = (function zetawar$hex$east_of_QMARK_(q1,r1,q2,r2){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q2,r2], null),zetawar.hex.east(q1,r1));
});
zetawar.hex.west = (function zetawar$hex$west(q,r){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(q - (1)),r], null);
});
zetawar.hex.west_of_QMARK_ = (function zetawar$hex$west_of_QMARK_(q1,r1,q2,r2){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q2,r2], null),zetawar.hex.west(q1,r1));
});
zetawar.hex.northeast = (function zetawar$hex$northeast(q,r){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.mod(r,(2)),(0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,(r - (1))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(q + (1)),(r - (1))], null);
}
});
zetawar.hex.northeast_of_QMARK_ = (function zetawar$hex$northeast_of_QMARK_(q1,r1,q2,r2){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q2,r2], null),zetawar.hex.northeast(q1,r1));
});
zetawar.hex.northwest = (function zetawar$hex$northwest(q,r){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.mod(r,(2)),(0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(q - (1)),(r - (1))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,(r - (1))], null);
}
});
zetawar.hex.northwest_of_QMARK_ = (function zetawar$hex$northwest_of_QMARK_(q1,r1,q2,r2){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q2,r2], null),zetawar.hex.northwest(q1,r1));
});
zetawar.hex.southeast = (function zetawar$hex$southeast(q,r){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.mod(r,(2)),(0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,(r + (1))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(q + (1)),(r + (1))], null);
}
});
zetawar.hex.southeast_of_QMARK_ = (function zetawar$hex$southeast_of_QMARK_(q1,r1,q2,r2){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q2,r2], null),zetawar.hex.southeast(q1,r1));
});
zetawar.hex.southwest = (function zetawar$hex$southwest(q,r){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.mod(r,(2)),(0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(q - (1)),(r + (1))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,(r + (1))], null);
}
});
zetawar.hex.southwest_of_QMARK_ = (function zetawar$hex$southwest_of_QMARK_(q1,r1,q2,r2){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q2,r2], null),zetawar.hex.southwest(q1,r1));
});
zetawar.hex.opposite_QMARK_ = (function zetawar$hex$opposite_QMARK_(q1,r1,q2,r2,q3,r3){
return ((((zetawar.hex.east_of_QMARK_(q1,r1,q2,r2)) && (zetawar.hex.east_of_QMARK_(q2,r2,q3,r3)))) || (((((zetawar.hex.west_of_QMARK_(q1,r1,q2,r2)) && (zetawar.hex.west_of_QMARK_(q2,r2,q3,r3)))) || (((((zetawar.hex.northwest_of_QMARK_(q1,r1,q2,r2)) && (zetawar.hex.northwest_of_QMARK_(q2,r2,q3,r3)))) || (((((zetawar.hex.southwest_of_QMARK_(q1,r1,q2,r2)) && (zetawar.hex.southwest_of_QMARK_(q2,r2,q3,r3)))) || (((((zetawar.hex.northeast_of_QMARK_(q1,r1,q2,r2)) && (zetawar.hex.northeast_of_QMARK_(q2,r2,q3,r3)))) || (((zetawar.hex.southeast_of_QMARK_(q1,r1,q2,r2)) && (zetawar.hex.southeast_of_QMARK_(q2,r2,q3,r3)))))))))))));
});
zetawar.hex.adjacents = cljs.core.memoize((function zetawar$hex$adjacents(q,r){
return cljs.core.PersistentHashSet.createAsIfByAssoc([zetawar.hex.northeast(q,r),zetawar.hex.southeast(q,r),zetawar.hex.east(q,r),zetawar.hex.southwest(q,r),zetawar.hex.west(q,r),zetawar.hex.northwest(q,r)]);
}));
zetawar.hex.adjacent_QMARK_ = (function zetawar$hex$adjacent_QMARK_(q1,r1,q2,r2){
var G__47992 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q2,r2], null);
var fexpr__47991 = zetawar.hex.adjacents(q1,r1);
return (fexpr__47991.cljs$core$IFn$_invoke$arity$1 ? fexpr__47991.cljs$core$IFn$_invoke$arity$1(G__47992) : fexpr__47991.call(null,G__47992));
});
zetawar.hex.offset__GT_cube = (function zetawar$hex$offset__GT_cube(q,r){
var x = (q - ((r - cljs.core.mod(r,(2))) / (2)));
var z = r;
var y = (((0) - x) - z);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null);
});
zetawar.hex.distance = (function zetawar$hex$distance(q1,r1,q2,r2){
var vec__48011 = zetawar.hex.offset__GT_cube(q1,r1);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48011,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48011,(1),null);
var z1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48011,(2),null);
var vec__48014 = zetawar.hex.offset__GT_cube(q2,r2);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48014,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48014,(1),null);
var z2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48014,(2),null);
var x__5130__auto__ = (function (){var x__5130__auto__ = zetawar.util.abs((x1 - x2));
var y__5131__auto__ = zetawar.util.abs((y1 - y2));
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})();
var y__5131__auto__ = zetawar.util.abs((z1 - z2));
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
});

//# sourceMappingURL=zetawar.hex.js.map
