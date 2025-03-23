goog.provide('zetawar.tiles');
zetawar.tiles.width = (32);
zetawar.tiles.height = (34);
zetawar.tiles.row_offset = (26);
zetawar.tiles.odd_row_column_offset = (zetawar.tiles.width / (2));
zetawar.tiles.offset__GT_pixel = cljs.core.memoize((function (q,r){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__51667 = (q * zetawar.tiles.width);
if(cljs.core.odd_QMARK_(r)){
return (G__51667 + zetawar.tiles.odd_row_column_offset);
} else {
return G__51667;
}
})(),(r * zetawar.tiles.row_offset)], null);
}));

//# sourceMappingURL=zetawar.tiles.js.map
