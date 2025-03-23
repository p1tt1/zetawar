goog.provide('integrant.core');

/**
 * @interface
 */
integrant.core.RefLike = function(){};

var integrant$core$RefLike$ref_key$dyn_43710 = (function (r){
var x__5393__auto__ = (((r == null))?null:r);
var m__5394__auto__ = (integrant.core.ref_key[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(r) : m__5394__auto__.call(null,r));
} else {
var m__5392__auto__ = (integrant.core.ref_key["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(r) : m__5392__auto__.call(null,r));
} else {
throw cljs.core.missing_protocol("RefLike.ref-key",r);
}
}
});
/**
 * Return the key of the reference.
 */
integrant.core.ref_key = (function integrant$core$ref_key(r){
if((((!((r == null)))) && ((!((r.integrant$core$RefLike$ref_key$arity$1 == null)))))){
return r.integrant$core$RefLike$ref_key$arity$1(r);
} else {
return integrant$core$RefLike$ref_key$dyn_43710(r);
}
});

var integrant$core$RefLike$ref_resolve$dyn_43711 = (function (r,config,resolvef){
var x__5393__auto__ = (((r == null))?null:r);
var m__5394__auto__ = (integrant.core.ref_resolve[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(r,config,resolvef) : m__5394__auto__.call(null,r,config,resolvef));
} else {
var m__5392__auto__ = (integrant.core.ref_resolve["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(r,config,resolvef) : m__5392__auto__.call(null,r,config,resolvef));
} else {
throw cljs.core.missing_protocol("RefLike.ref-resolve",r);
}
}
});
/**
 * Return the resolved value.
 */
integrant.core.ref_resolve = (function integrant$core$ref_resolve(r,config,resolvef){
if((((!((r == null)))) && ((!((r.integrant$core$RefLike$ref_resolve$arity$3 == null)))))){
return r.integrant$core$RefLike$ref_resolve$arity$3(r,config,resolvef);
} else {
return integrant$core$RefLike$ref_resolve$dyn_43711(r,config,resolvef);
}
});

if((typeof integrant !== 'undefined') && (typeof integrant.core !== 'undefined') && (typeof integrant.core.composite_keyword !== 'undefined')){
} else {
/**
 * Return a unique keyword that is derived from an ordered collection of
 *   keywords. The function will return the same keyword for the same collection.
 */
integrant.core.composite_keyword = cljs.core.memoize((function (kws){
var parts = (function (){var iter__5523__auto__ = (function integrant$core$iter__43296(s__43297){
return (new cljs.core.LazySeq(null,(function (){
var s__43297__$1 = s__43297;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__43297__$1);
if(temp__5823__auto__){
var s__43297__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43297__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__43297__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__43299 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__43298 = (0);
while(true){
if((i__43298 < size__5522__auto__)){
var kw = cljs.core._nth(c__5521__auto__,i__43298);
cljs.core.chunk_append(b__43299,[cljs.core.namespace(kw),".",cljs.core.name(kw)].join(''));

var G__43712 = (i__43298 + (1));
i__43298 = G__43712;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43299),integrant$core$iter__43296(cljs.core.chunk_rest(s__43297__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43299),null);
}
} else {
var kw = cljs.core.first(s__43297__$2);
return cljs.core.cons([cljs.core.namespace(kw),".",cljs.core.name(kw)].join(''),integrant$core$iter__43296(cljs.core.rest(s__43297__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(kws);
})();
var prefix = [clojure.string.join.cljs$core$IFn$_invoke$arity$2("+",parts),"_"].join('');
var composite = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("integrant.composite",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(prefix)));
var seq__43300_43713 = cljs.core.seq(kws);
var chunk__43301_43714 = null;
var count__43302_43715 = (0);
var i__43303_43716 = (0);
while(true){
if((i__43303_43716 < count__43302_43715)){
var kw_43717 = chunk__43301_43714.cljs$core$IIndexed$_nth$arity$2(null,i__43303_43716);
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(composite,kw_43717);


var G__43718 = seq__43300_43713;
var G__43719 = chunk__43301_43714;
var G__43720 = count__43302_43715;
var G__43721 = (i__43303_43716 + (1));
seq__43300_43713 = G__43718;
chunk__43301_43714 = G__43719;
count__43302_43715 = G__43720;
i__43303_43716 = G__43721;
continue;
} else {
var temp__5823__auto___43722 = cljs.core.seq(seq__43300_43713);
if(temp__5823__auto___43722){
var seq__43300_43723__$1 = temp__5823__auto___43722;
if(cljs.core.chunked_seq_QMARK_(seq__43300_43723__$1)){
var c__5568__auto___43724 = cljs.core.chunk_first(seq__43300_43723__$1);
var G__43725 = cljs.core.chunk_rest(seq__43300_43723__$1);
var G__43726 = c__5568__auto___43724;
var G__43727 = cljs.core.count(c__5568__auto___43724);
var G__43728 = (0);
seq__43300_43713 = G__43725;
chunk__43301_43714 = G__43726;
count__43302_43715 = G__43727;
i__43303_43716 = G__43728;
continue;
} else {
var kw_43729 = cljs.core.first(seq__43300_43723__$1);
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(composite,kw_43729);


var G__43730 = cljs.core.next(seq__43300_43723__$1);
var G__43731 = null;
var G__43732 = (0);
var G__43733 = (0);
seq__43300_43713 = G__43730;
chunk__43301_43714 = G__43731;
count__43302_43715 = G__43732;
i__43303_43716 = G__43733;
continue;
}
} else {
}
}
break;
}

return composite;
}));
}
integrant.core.invalid_ref_exception = (function integrant$core$invalid_ref_exception(ref){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Invalid reference: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ref),". Must be a qualified keyword or a ","vector of qualified keywords."].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword("integrant.core","invalid-ref","integrant.core/invalid-ref",1043165466),new cljs.core.Keyword(null,"ref","ref",1289896967),ref], null));
});
integrant.core.composite_key_QMARK_ = (function integrant$core$composite_key_QMARK_(keys){
return ((cljs.core.vector_QMARK_(keys)) && (cljs.core.every_QMARK_(cljs.core.qualified_keyword_QMARK_,keys)));
});
/**
 * Return true if the key is a keyword or valid composite key.
 */
integrant.core.valid_config_key_QMARK_ = (function integrant$core$valid_config_key_QMARK_(key){
return ((cljs.core.qualified_keyword_QMARK_(key)) || (integrant.core.composite_key_QMARK_(key)));
});
/**
 * Given a valid Integrant key, return a keyword that uniquely identifies it.
 */
integrant.core.normalize_key = (function integrant$core$normalize_key(key){
if(integrant.core.valid_config_key_QMARK_(key)){
} else {
throw (new Error("Assert failed: (valid-config-key? key)"));
}

if(integrant.core.composite_key_QMARK_(key)){
return integrant.core.composite_keyword(key);
} else {
return key;
}
});
/**
 * Return true if a key is derived from candidate keyword or vector of
 *   keywords.
 */
integrant.core.derived_from_QMARK_ = (function integrant$core$derived_from_QMARK_(key,candidate){
var key__$1 = integrant.core.normalize_key(key);
if(cljs.core.vector_QMARK_(candidate)){
return cljs.core.every_QMARK_((function (p1__43308_SHARP_){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(key__$1,p1__43308_SHARP_);
}),candidate);
} else {
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(key__$1,candidate);
}
});
/**
 * Return a seq of all entries in a map, m, where the key is derived from the
 *   a candidate key, k. If there are no matching keys, nil is returned. The
 *   candidate key may be a keyword, or vector of keywords.
 */
integrant.core.find_derived = (function integrant$core$find_derived(m,k){
return cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__43311_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.key(p1__43311_SHARP_),k)) || (integrant.core.derived_from_QMARK_(cljs.core.key(p1__43311_SHARP_),k)));
}),m));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {integrant.core.RefLike}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
integrant.core.Ref = (function (key,__meta,__extmap,__hash){
this.key = key;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(integrant.core.Ref.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(integrant.core.Ref.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k43313,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__43320 = k43313;
var G__43320__$1 = (((G__43320 instanceof cljs.core.Keyword))?G__43320.fqn:null);
switch (G__43320__$1) {
case "key":
return self__.key;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k43313,else__5346__auto__);

}
}));

(integrant.core.Ref.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__43321){
var vec__43322 = p__43321;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43322,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43322,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(integrant.core.Ref.prototype.integrant$core$RefLike$ = cljs.core.PROTOCOL_SENTINEL);

(integrant.core.Ref.prototype.integrant$core$RefLike$ref_key$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.key;
}));

(integrant.core.Ref.prototype.integrant$core$RefLike$ref_resolve$arity$3 = (function (_,config,resolvef){
var self__ = this;
var ___$1 = this;
var vec__43325 = cljs.core.first(integrant.core.find_derived(config,self__.key));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43325,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43325,(1),null);
return (resolvef.cljs$core$IFn$_invoke$arity$2 ? resolvef.cljs$core$IFn$_invoke$arity$2(k,v) : resolvef.call(null,k,v));
}));

(integrant.core.Ref.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#integrant.core.Ref{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key","key",-1516042587),self__.key],null))], null),self__.__extmap));
}));

(integrant.core.Ref.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43312){
var self__ = this;
var G__43312__$1 = this;
return (new cljs.core.RecordIter((0),G__43312__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(integrant.core.Ref.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(integrant.core.Ref.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new integrant.core.Ref(self__.key,self__.__meta,self__.__extmap,self__.__hash));
}));

(integrant.core.Ref.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(integrant.core.Ref.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (2146506987 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(integrant.core.Ref.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this43314,other43315){
var self__ = this;
var this43314__$1 = this;
return (((!((other43315 == null)))) && ((((this43314__$1.constructor === other43315.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43314__$1.key,other43315.key)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43314__$1.__extmap,other43315.__extmap)))))));
}));

(integrant.core.Ref.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new integrant.core.Ref(self__.key,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(integrant.core.Ref.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k43313){
var self__ = this;
var this__5350__auto____$1 = this;
var G__43339 = k43313;
var G__43339__$1 = (((G__43339 instanceof cljs.core.Keyword))?G__43339.fqn:null);
switch (G__43339__$1) {
case "key":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k43313);

}
}));

(integrant.core.Ref.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__43312){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__43340 = cljs.core.keyword_identical_QMARK_;
var expr__43341 = k__5352__auto__;
if(cljs.core.truth_((pred__43340.cljs$core$IFn$_invoke$arity$2 ? pred__43340.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587),expr__43341) : pred__43340.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),expr__43341)))){
return (new integrant.core.Ref(G__43312,self__.__meta,self__.__extmap,null));
} else {
return (new integrant.core.Ref(self__.key,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__43312),null));
}
}));

(integrant.core.Ref.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"key","key",-1516042587),self__.key,null))], null),self__.__extmap));
}));

(integrant.core.Ref.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__43312){
var self__ = this;
var this__5342__auto____$1 = this;
return (new integrant.core.Ref(self__.key,G__43312,self__.__extmap,self__.__hash));
}));

(integrant.core.Ref.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(integrant.core.Ref.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null)], null);
}));

(integrant.core.Ref.cljs$lang$type = true);

(integrant.core.Ref.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"integrant.core/Ref",null,(1),null));
}));

(integrant.core.Ref.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"integrant.core/Ref");
}));

/**
 * Positional factory function for integrant.core/Ref.
 */
integrant.core.__GT_Ref = (function integrant$core$__GT_Ref(key){
return (new integrant.core.Ref(key,null,null,null));
});

/**
 * Factory function for integrant.core/Ref, taking a map of keywords to field values.
 */
integrant.core.map__GT_Ref = (function integrant$core$map__GT_Ref(G__43316){
var extmap__5385__auto__ = (function (){var G__43355 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__43316,new cljs.core.Keyword(null,"key","key",-1516042587));
if(cljs.core.record_QMARK_(G__43316)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__43355);
} else {
return G__43355;
}
})();
return (new integrant.core.Ref(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__43316),null,cljs.core.not_empty(extmap__5385__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {integrant.core.RefLike}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
integrant.core.RefSet = (function (key,__meta,__extmap,__hash){
this.key = key;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(integrant.core.RefSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(integrant.core.RefSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k43358,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__43364 = k43358;
var G__43364__$1 = (((G__43364 instanceof cljs.core.Keyword))?G__43364.fqn:null);
switch (G__43364__$1) {
case "key":
return self__.key;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k43358,else__5346__auto__);

}
}));

(integrant.core.RefSet.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__43366){
var vec__43367 = p__43366;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43367,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43367,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(integrant.core.RefSet.prototype.integrant$core$RefLike$ = cljs.core.PROTOCOL_SENTINEL);

(integrant.core.RefSet.prototype.integrant$core$RefLike$ref_key$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.key;
}));

(integrant.core.RefSet.prototype.integrant$core$RefLike$ref_resolve$arity$3 = (function (_,config,resolvef){
var self__ = this;
var ___$1 = this;
return cljs.core.set((function (){var iter__5523__auto__ = (function integrant$core$iter__43376(s__43377){
return (new cljs.core.LazySeq(null,(function (){
var s__43377__$1 = s__43377;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__43377__$1);
if(temp__5823__auto__){
var s__43377__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43377__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__43377__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__43379 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__43378 = (0);
while(true){
if((i__43378 < size__5522__auto__)){
var vec__43384 = cljs.core._nth(c__5521__auto__,i__43378);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43384,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43384,(1),null);
cljs.core.chunk_append(b__43379,(resolvef.cljs$core$IFn$_invoke$arity$2 ? resolvef.cljs$core$IFn$_invoke$arity$2(k,v) : resolvef.call(null,k,v)));

var G__43737 = (i__43378 + (1));
i__43378 = G__43737;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43379),integrant$core$iter__43376(cljs.core.chunk_rest(s__43377__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43379),null);
}
} else {
var vec__43390 = cljs.core.first(s__43377__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43390,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43390,(1),null);
return cljs.core.cons((resolvef.cljs$core$IFn$_invoke$arity$2 ? resolvef.cljs$core$IFn$_invoke$arity$2(k,v) : resolvef.call(null,k,v)),integrant$core$iter__43376(cljs.core.rest(s__43377__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(integrant.core.find_derived(config,self__.key));
})());
}));

(integrant.core.RefSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#integrant.core.RefSet{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key","key",-1516042587),self__.key],null))], null),self__.__extmap));
}));

(integrant.core.RefSet.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43357){
var self__ = this;
var G__43357__$1 = this;
return (new cljs.core.RecordIter((0),G__43357__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(integrant.core.RefSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(integrant.core.RefSet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new integrant.core.RefSet(self__.key,self__.__meta,self__.__extmap,self__.__hash));
}));

(integrant.core.RefSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(integrant.core.RefSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1045019366 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(integrant.core.RefSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this43359,other43360){
var self__ = this;
var this43359__$1 = this;
return (((!((other43360 == null)))) && ((((this43359__$1.constructor === other43360.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43359__$1.key,other43360.key)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43359__$1.__extmap,other43360.__extmap)))))));
}));

(integrant.core.RefSet.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new integrant.core.RefSet(self__.key,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(integrant.core.RefSet.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k43358){
var self__ = this;
var this__5350__auto____$1 = this;
var G__43402 = k43358;
var G__43402__$1 = (((G__43402 instanceof cljs.core.Keyword))?G__43402.fqn:null);
switch (G__43402__$1) {
case "key":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k43358);

}
}));

(integrant.core.RefSet.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__43357){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__43403 = cljs.core.keyword_identical_QMARK_;
var expr__43404 = k__5352__auto__;
if(cljs.core.truth_((pred__43403.cljs$core$IFn$_invoke$arity$2 ? pred__43403.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587),expr__43404) : pred__43403.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),expr__43404)))){
return (new integrant.core.RefSet(G__43357,self__.__meta,self__.__extmap,null));
} else {
return (new integrant.core.RefSet(self__.key,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__43357),null));
}
}));

(integrant.core.RefSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"key","key",-1516042587),self__.key,null))], null),self__.__extmap));
}));

(integrant.core.RefSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__43357){
var self__ = this;
var this__5342__auto____$1 = this;
return (new integrant.core.RefSet(self__.key,G__43357,self__.__extmap,self__.__hash));
}));

(integrant.core.RefSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(integrant.core.RefSet.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null)], null);
}));

(integrant.core.RefSet.cljs$lang$type = true);

(integrant.core.RefSet.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"integrant.core/RefSet",null,(1),null));
}));

(integrant.core.RefSet.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"integrant.core/RefSet");
}));

/**
 * Positional factory function for integrant.core/RefSet.
 */
integrant.core.__GT_RefSet = (function integrant$core$__GT_RefSet(key){
return (new integrant.core.RefSet(key,null,null,null));
});

/**
 * Factory function for integrant.core/RefSet, taking a map of keywords to field values.
 */
integrant.core.map__GT_RefSet = (function integrant$core$map__GT_RefSet(G__43361){
var extmap__5385__auto__ = (function (){var G__43414 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__43361,new cljs.core.Keyword(null,"key","key",-1516042587));
if(cljs.core.record_QMARK_(G__43361)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__43414);
} else {
return G__43414;
}
})();
return (new integrant.core.RefSet(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__43361),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

/**
 * Create a reference to a top-level key in a config map.
 */
integrant.core.ref = (function integrant$core$ref(key){
if(integrant.core.valid_config_key_QMARK_(key)){
} else {
throw integrant.core.invalid_ref_exception(key);
}

return integrant.core.__GT_Ref(key);
});
/**
 * Create a set of references to all matching top-level keys in a config map.
 */
integrant.core.refset = (function integrant$core$refset(key){
if(integrant.core.valid_config_key_QMARK_(key)){
} else {
throw integrant.core.invalid_ref_exception(key);
}

return integrant.core.__GT_RefSet(key);
});
/**
 * Return true if its argument is a ref.
 */
integrant.core.ref_QMARK_ = (function integrant$core$ref_QMARK_(x){
return (x instanceof integrant.core.Ref);
});
/**
 * Return true if its argument is a refset.
 */
integrant.core.refset_QMARK_ = (function integrant$core$refset_QMARK_(x){
return (x instanceof integrant.core.RefSet);
});
/**
 * Return true if its argument is a ref or a refset.
 */
integrant.core.reflike_QMARK_ = (function integrant$core$reflike_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.integrant$core$RefLike$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(integrant.core.RefLike,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(integrant.core.RefLike,x);
}
});
integrant.core.depth_search = (function integrant$core$depth_search(pred_QMARK_,coll){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(pred_QMARK_,cljs.core.tree_seq(cljs.core.coll_QMARK_,cljs.core.seq,coll));
});
integrant.core.ambiguous_key_exception = (function integrant$core$ambiguous_key_exception(config,key,matching_keys){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Ambiguous key: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),". Found multiple candidates: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",matching_keys)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword("integrant.core","ambiguous-key","integrant.core/ambiguous-key",953529055),new cljs.core.Keyword(null,"config","config",994861415),config,new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"matching-keys","matching-keys",-1609370737),matching_keys], null));
});
/**
 * Return the map entry in a map, m, where the key is derived from the keyword,
 *   k. If there are no matching keys, nil is returned. If there is more than one
 *   matching key, an ambiguous key exception is raised.
 */
integrant.core.find_derived_1 = (function integrant$core$find_derived_1(m,k){
var kvs = integrant.core.find_derived(m,k);
if(cljs.core.next(kvs)){
throw integrant.core.ambiguous_key_exception(m,k,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,kvs));
} else {
}

return cljs.core.first(kvs);
});
integrant.core.find_derived_refs = (function integrant$core$find_derived_refs(config,v,include_refsets_QMARK_){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__43421_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,integrant.core.find_derived(config,p1__43421_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(integrant.core.ref_key,integrant.core.depth_search((cljs.core.truth_(include_refsets_QMARK_)?integrant.core.reflike_QMARK_:integrant.core.ref_QMARK_),v))], 0));
});
/**
 * Return a dependency graph of all the refs and refsets in a config. Resolves
 *   derived dependencies. Takes the following options:
 * 
 *   `:include-refsets?`
 *   : whether to include refsets in the dependency graph (defaults to true)
 */
integrant.core.dependency_graph = (function integrant$core$dependency_graph(var_args){
var G__43430 = arguments.length;
switch (G__43430) {
case 1:
return integrant.core.dependency_graph.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return integrant.core.dependency_graph.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(integrant.core.dependency_graph.cljs$core$IFn$_invoke$arity$1 = (function (config){
return integrant.core.dependency_graph.cljs$core$IFn$_invoke$arity$2(config,cljs.core.PersistentArrayMap.EMPTY);
}));

(integrant.core.dependency_graph.cljs$core$IFn$_invoke$arity$2 = (function (config,p__43435){
var map__43436 = p__43435;
var map__43436__$1 = cljs.core.__destructure_map(map__43436);
var include_refsets_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43436__$1,new cljs.core.Keyword(null,"include-refsets?","include-refsets?",-1173964472),true);
var find_refs = (function integrant$core$find_refs(v){
return integrant.core.find_derived_refs(config,v,include_refsets_QMARK_);
});
return cljs.core.reduce_kv((function (g,k,v){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__43423_SHARP_,p2__43424_SHARP_){
return weavejester.dependency.depend(p1__43423_SHARP_,k,p2__43424_SHARP_);
}),g,find_refs(v));
}),weavejester.dependency.graph(),config);
}));

(integrant.core.dependency_graph.cljs$lang$maxFixedArity = 2);

/**
 * Create a key comparator from the dependency graph of a configuration map.
 *   The comparator is deterministic; it will always result in the same key
 *   order.
 */
integrant.core.key_comparator = (function integrant$core$key_comparator(graph){
return weavejester.dependency.topo_comparator.cljs$core$IFn$_invoke$arity$2((function (p1__43438_SHARP_,p2__43439_SHARP_){
return cljs.core.compare(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__43438_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__43439_SHARP_));
}),graph);
});
integrant.core.find_keys = (function integrant$core$find_keys(config,keys,f){
var graph = integrant.core.dependency_graph.cljs$core$IFn$_invoke$arity$2(config,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"include-refsets?","include-refsets?",-1173964472),false], null));
var keyset = cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__43440_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,integrant.core.find_derived(config,p1__43440_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys], 0)));
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(integrant.core.key_comparator(integrant.core.dependency_graph.cljs$core$IFn$_invoke$arity$1(config)),clojure.set.union.cljs$core$IFn$_invoke$arity$2(keyset,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(graph,keyset) : f.call(null,graph,keyset))));
});
integrant.core.dependent_keys = (function integrant$core$dependent_keys(config,keys){
return integrant.core.find_keys(config,keys,weavejester.dependency.transitive_dependencies_set);
});
integrant.core.reverse_dependent_keys = (function integrant$core$reverse_dependent_keys(config,keys){
return cljs.core.reverse(integrant.core.find_keys(config,keys,weavejester.dependency.transitive_dependents_set));
});
integrant.core.default_readers = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("ig","ref","ig/ref",-1364534932,null),integrant.core.ref,new cljs.core.Symbol("ig","refset","ig/refset",1839005826,null),integrant.core.refset], null);
/**
 * Read a config from a string of edn. Refs may be denotied by tagging keywords
 *   with #ig/ref.
 */
integrant.core.read_string = (function integrant$core$read_string(var_args){
var G__43451 = arguments.length;
switch (G__43451) {
case 1:
return integrant.core.read_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return integrant.core.read_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(integrant.core.read_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return integrant.core.read_string.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eof","eof",-489063237),null], null),s);
}));

(integrant.core.read_string.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
var readers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([integrant.core.default_readers,new cljs.core.Keyword(null,"readers","readers",-2118263030).cljs$core$IFn$_invoke$arity$2(opts,cljs.core.PersistentArrayMap.EMPTY)], 0));
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"readers","readers",-2118263030),readers),s);
}));

(integrant.core.read_string.cljs$lang$maxFixedArity = 2);

integrant.core.missing_refs_exception = (function integrant$core$missing_refs_exception(config,refs){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Missing definitions for refs: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",refs)].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword("integrant.core","missing-refs","integrant.core/missing-refs",-232418620),new cljs.core.Keyword(null,"config","config",994861415),config,new cljs.core.Keyword(null,"missing-refs","missing-refs",-2034637127),refs], null));
});
integrant.core.ambiguous_refs = (function integrant$core$ambiguous_refs(config){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__43455_SHARP_){
return cljs.core.next(integrant.core.find_derived(config,p1__43455_SHARP_));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(integrant.core.ref_key,integrant.core.depth_search(integrant.core.ref_QMARK_,config)));
});
integrant.core.missing_refs = (function integrant$core$missing_refs(config){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__43456_SHARP_){
return integrant.core.find_derived(config,p1__43456_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(integrant.core.ref_key,integrant.core.depth_search(integrant.core.ref_QMARK_,config)));
});
integrant.core.invalid_composite_keys = (function integrant$core$invalid_composite_keys(config){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(integrant.core.composite_key_QMARK_,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,cljs.core.keys(config)));
});
integrant.core.invalid_composite_key_exception = (function integrant$core$invalid_composite_key_exception(config,key){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Invalid composite key: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),". ","Every keyword must be namespaced."].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword("integrant.core","invalid-composite-key","integrant.core/invalid-composite-key",-858672303),new cljs.core.Keyword(null,"config","config",994861415),config,new cljs.core.Keyword(null,"key","key",-1516042587),key], null));
});
integrant.core.expand_key = (function integrant$core$expand_key(config,resolvef,value){
return clojure.walk.postwalk((function (p1__43459_SHARP_){
if(integrant.core.reflike_QMARK_(p1__43459_SHARP_)){
return integrant.core.ref_resolve(p1__43459_SHARP_,config,resolvef);
} else {
return p1__43459_SHARP_;
}
}),value);
});
integrant.core.run_exception = (function integrant$core$run_exception(system,completed,remaining,f,k,v,t){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(["Error on key ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)," when running system"].join(''),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword("integrant.core","run-threw-exception","integrant.core/run-threw-exception",1175352467),new cljs.core.Keyword(null,"system","system",-29381724),system,new cljs.core.Keyword(null,"completed-keys","completed-keys",-988226740),cljs.core.reverse(completed),new cljs.core.Keyword(null,"remaining-keys","remaining-keys",-607706590),cljs.core.rest(remaining),new cljs.core.Keyword(null,"function","function",-2127255473),f,new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"value","value",305978217),v], null),t);
});
integrant.core.try_run_action = (function integrant$core$try_run_action(system,completed,remaining,f,k){
var v = (system.cljs$core$IFn$_invoke$arity$1 ? system.cljs$core$IFn$_invoke$arity$1(k) : system.call(null,k));
try{return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(k,v) : f.call(null,k,v));
}catch (e43463){var t = e43463;
throw integrant.core.run_exception(system,completed,remaining,f,k,v,t);
}});
integrant.core.run_loop = (function integrant$core$run_loop(system,keys,f){
var completed = cljs.core.List.EMPTY;
var remaining = keys;
while(true){
if(cljs.core.seq(remaining)){
var k = cljs.core.first(remaining);
integrant.core.try_run_action(system,completed,remaining,f,k);

var G__43749 = cljs.core.cons(k,completed);
var G__43750 = cljs.core.rest(remaining);
completed = G__43749;
remaining = G__43750;
continue;
} else {
return null;
}
break;
}
});
integrant.core.system_origin = (function integrant$core$system_origin(system){
return cljs.core.select_keys(new cljs.core.Keyword("integrant.core","origin","integrant.core/origin",-1025941839).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(system)),cljs.core.keys(system));
});
/**
 * Apply a side-effectful function f to each key value pair in a system map.
 *   Keys are traversed in dependency order. The function should take two
 *   arguments, a key and value.
 */
integrant.core.run_BANG_ = (function integrant$core$run_BANG_(system,keys,f){
if(cljs.core.map_QMARK_(system)){
} else {
throw (new Error("Assert failed: (map? system)"));
}

if(cljs.core.truth_((function (){var G__43465 = system;
var G__43465__$1 = (((G__43465 == null))?null:cljs.core.meta(G__43465));
if((G__43465__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("integrant.core","origin","integrant.core/origin",-1025941839).cljs$core$IFn$_invoke$arity$1(G__43465__$1);
}
})())){
} else {
throw (new Error("Assert failed: (some-> system meta :integrant.core/origin)"));
}

return integrant.core.run_loop(system,integrant.core.dependent_keys(integrant.core.system_origin(system),keys),f);
});
/**
 * Apply a side-effectful function f to each key value pair in a system map.
 *   Keys are traversed in reverse dependency order. The function should take two
 *   arguments, a key and value.
 */
integrant.core.reverse_run_BANG_ = (function integrant$core$reverse_run_BANG_(system,keys,f){
if(cljs.core.map_QMARK_(system)){
} else {
throw (new Error("Assert failed: (map? system)"));
}

if(cljs.core.truth_((function (){var G__43469 = system;
var G__43469__$1 = (((G__43469 == null))?null:cljs.core.meta(G__43469));
if((G__43469__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("integrant.core","origin","integrant.core/origin",-1025941839).cljs$core$IFn$_invoke$arity$1(G__43469__$1);
}
})())){
} else {
throw (new Error("Assert failed: (some-> system meta :integrant.core/origin)"));
}

return integrant.core.run_loop(system,integrant.core.reverse_dependent_keys(integrant.core.system_origin(system),keys),f);
});
/**
 * Reduce all the key value pairs in system map in dependency order, starting
 *   from an initial value. The function should take three arguments: the
 *   accumulator, the current key and the current value.
 */
integrant.core.fold = (function integrant$core$fold(system,f,val){
var graph = integrant.core.dependency_graph.cljs$core$IFn$_invoke$arity$1(integrant.core.system_origin(system));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__43470_SHARP_,p2__43471_SHARP_){
var G__43472 = p1__43470_SHARP_;
var G__43473 = p2__43471_SHARP_;
var G__43474 = (system.cljs$core$IFn$_invoke$arity$1 ? system.cljs$core$IFn$_invoke$arity$1(p2__43471_SHARP_) : system.call(null,p2__43471_SHARP_));
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__43472,G__43473,G__43474) : f.call(null,G__43472,G__43473,G__43474));
}),val,cljs.core.sort.cljs$core$IFn$_invoke$arity$2(integrant.core.key_comparator(graph),cljs.core.keys(system)));
});
integrant.core.build_exception = (function integrant$core$build_exception(system,f,k,v,t){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(["Error on key ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)," when building system"].join(''),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword("integrant.core","build-threw-exception","integrant.core/build-threw-exception",-205617592),new cljs.core.Keyword(null,"system","system",-29381724),system,new cljs.core.Keyword(null,"function","function",-2127255473),f,new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"value","value",305978217),v], null),t);
});
integrant.core.try_build_action = (function integrant$core$try_build_action(system,f,k,v){
try{return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(k,v) : f.call(null,k,v));
}catch (e43479){var t = e43479;
throw integrant.core.build_exception(system,f,k,v,t);
}});
integrant.core.build_key = (function integrant$core$build_key(f,assertf,resolvef,system,p__43482){
var vec__43483 = p__43482;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43483,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43483,(1),null);
var v_SINGLEQUOTE_ = integrant.core.expand_key(system,resolvef,v);
(assertf.cljs$core$IFn$_invoke$arity$3 ? assertf.cljs$core$IFn$_invoke$arity$3(system,k,v_SINGLEQUOTE_) : assertf.call(null,system,k,v_SINGLEQUOTE_));

return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(system,k,integrant.core.try_build_action(system,f,k,v_SINGLEQUOTE_)),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("integrant.core","build","integrant.core/build",-1937237701),k], null),v_SINGLEQUOTE_);
});
/**
 * Apply a function f to each key value pair in a configuration map. Keys are
 *   traversed in dependency order, and any references in the value expanded. The
 *   function should take two arguments, a key and value, and return a new value.
 *   An optional fourth argument, assertf, may be supplied to provide an assertion
 *   check on the system, key and expanded value.
 */
integrant.core.build = (function integrant$core$build(var_args){
var G__43490 = arguments.length;
switch (G__43490) {
case 3:
return integrant.core.build.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return integrant.core.build.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return integrant.core.build.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(integrant.core.build.cljs$core$IFn$_invoke$arity$3 = (function (config,keys,f){
return integrant.core.build.cljs$core$IFn$_invoke$arity$4(config,keys,f,(function (_,___$1,___$2){
return null;
}));
}));

(integrant.core.build.cljs$core$IFn$_invoke$arity$4 = (function (config,keys,f,assertf){
return integrant.core.build.cljs$core$IFn$_invoke$arity$5(config,keys,f,assertf,(function (_,v){
return v;
}));
}));

(integrant.core.build.cljs$core$IFn$_invoke$arity$5 = (function (config,keys,f,assertf,resolvef){
if(cljs.core.map_QMARK_(config)){
} else {
throw (new Error("Assert failed: (map? config)"));
}

var relevant_keys = integrant.core.dependent_keys(config,keys);
var relevant_config = cljs.core.select_keys(config,relevant_keys);
var temp__5823__auto___43757 = cljs.core.first(integrant.core.invalid_composite_keys(config));
if(cljs.core.truth_(temp__5823__auto___43757)){
var invalid_key_43758 = temp__5823__auto___43757;
throw integrant.core.invalid_composite_key_exception(config,invalid_key_43758);
} else {
}

var temp__5823__auto___43759 = cljs.core.first(integrant.core.ambiguous_refs(relevant_config));
if(cljs.core.truth_(temp__5823__auto___43759)){
var ref_43760 = temp__5823__auto___43759;
throw integrant.core.ambiguous_key_exception(config,ref_43760,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,integrant.core.find_derived(config,ref_43760)));
} else {
}

var temp__5823__auto___43761 = cljs.core.seq(integrant.core.missing_refs(relevant_config));
if(temp__5823__auto___43761){
var refs_43762 = temp__5823__auto___43761;
throw integrant.core.missing_refs_exception(config,refs_43762);
} else {
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(integrant.core.build_key,f,assertf,resolvef),cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("integrant.core","origin","integrant.core/origin",-1025941839),config], null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (k){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(config.cljs$core$IFn$_invoke$arity$1 ? config.cljs$core$IFn$_invoke$arity$1(k) : config.call(null,k))], null);
}),relevant_keys));
}));

(integrant.core.build.cljs$lang$maxFixedArity = 5);

if((typeof integrant !== 'undefined') && (typeof integrant.core !== 'undefined') && (typeof integrant.core.resolve_key !== 'undefined')){
} else {
/**
 * Return a value to substitute for a reference prior to initiation. By default
 *   the value of the key is returned unaltered. This can be used to hide
 *   information that is only necessary to halt or suspend the key.
 */
integrant.core.resolve_key = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__43494 = cljs.core.get_global_hierarchy;
return (fexpr__43494.cljs$core$IFn$_invoke$arity$0 ? fexpr__43494.cljs$core$IFn$_invoke$arity$0() : fexpr__43494.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("integrant.core","resolve-key"),(function (key,_value){
return integrant.core.normalize_key(key);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
integrant.core.resolve_key.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,v){
return v;
}));
/**
 * Replace all refs with the values they correspond to.
 */
integrant.core.expand = (function integrant$core$expand(config){
return integrant.core.build.cljs$core$IFn$_invoke$arity$5(config,cljs.core.keys(config),(function (_,v){
return v;
}),(function (_,___$1,___$2){
return null;
}),integrant.core.resolve_key);
});
if((typeof integrant !== 'undefined') && (typeof integrant.core !== 'undefined') && (typeof integrant.core.prep_key !== 'undefined')){
} else {
/**
 * Prepare the configuration associated with a key for initiation. This is
 *   generally used to add in default values and references. By default the
 *   method returns the value unaltered.
 */
integrant.core.prep_key = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__43537 = cljs.core.get_global_hierarchy;
return (fexpr__43537.cljs$core$IFn$_invoke$arity$0 ? fexpr__43537.cljs$core$IFn$_invoke$arity$0() : fexpr__43537.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("integrant.core","prep-key"),(function (key,_value){
return integrant.core.normalize_key(key);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
integrant.core.prep_key.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,v){
return v;
}));
if((typeof integrant !== 'undefined') && (typeof integrant.core !== 'undefined') && (typeof integrant.core.init_key !== 'undefined')){
} else {
/**
 * Turn a config value associated with a key into a concrete implementation.
 *   For example, a database URL might be turned into a database connection.
 */
integrant.core.init_key = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__43555 = cljs.core.get_global_hierarchy;
return (fexpr__43555.cljs$core$IFn$_invoke$arity$0 ? fexpr__43555.cljs$core$IFn$_invoke$arity$0() : fexpr__43555.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("integrant.core","init-key"),(function (key,_value){
return integrant.core.normalize_key(key);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
if((typeof integrant !== 'undefined') && (typeof integrant.core !== 'undefined') && (typeof integrant.core.halt_key_BANG_ !== 'undefined')){
} else {
/**
 * Halt a running or suspended implementation associated with a key. This is
 *   often used for stopping processes or cleaning up resources. For example, a
 *   database connection might be closed. This multimethod must be idempotent.
 *   The return value of this multimethod is discarded.
 */
integrant.core.halt_key_BANG_ = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__43563 = cljs.core.get_global_hierarchy;
return (fexpr__43563.cljs$core$IFn$_invoke$arity$0 ? fexpr__43563.cljs$core$IFn$_invoke$arity$0() : fexpr__43563.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("integrant.core","halt-key!"),(function (key,_value){
return integrant.core.normalize_key(key);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
integrant.core.halt_key_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,___$1){
return null;
}));
if((typeof integrant !== 'undefined') && (typeof integrant.core !== 'undefined') && (typeof integrant.core.resume_key !== 'undefined')){
} else {
/**
 * Turn a config value associated with a key into a concrete implementation,
 *   but reuse resources (e.g. connections, running threads, etc) from an existing
 *   implementation. By default this multimethod calls init-key and ignores the
 *   additional argument.
 */
integrant.core.resume_key = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__43572 = cljs.core.get_global_hierarchy;
return (fexpr__43572.cljs$core$IFn$_invoke$arity$0 ? fexpr__43572.cljs$core$IFn$_invoke$arity$0() : fexpr__43572.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("integrant.core","resume-key"),(function (key,_value,_old_value,_old_impl){
return integrant.core.normalize_key(key);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
integrant.core.resume_key.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (k,v,_,___$1){
return integrant.core.init_key.cljs$core$IFn$_invoke$arity$2(k,v);
}));
if((typeof integrant !== 'undefined') && (typeof integrant.core !== 'undefined') && (typeof integrant.core.suspend_key_BANG_ !== 'undefined')){
} else {
/**
 * Suspend a running implementation associated with a key, so that it may be
 *   eventually passed to resume-key. By default this multimethod calls halt-key!,
 *   but it may be customized to do things like keep a server running, but buffer
 *   incoming requests until the server is resumed.
 */
integrant.core.suspend_key_BANG_ = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__43575 = cljs.core.get_global_hierarchy;
return (fexpr__43575.cljs$core$IFn$_invoke$arity$0 ? fexpr__43575.cljs$core$IFn$_invoke$arity$0() : fexpr__43575.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("integrant.core","suspend-key!"),(function (key,_value){
return integrant.core.normalize_key(key);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
integrant.core.suspend_key_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (k,v){
return integrant.core.halt_key_BANG_.cljs$core$IFn$_invoke$arity$2(k,v);
}));
if((typeof integrant !== 'undefined') && (typeof integrant.core !== 'undefined') && (typeof integrant.core.pre_init_spec !== 'undefined')){
} else {
/**
 * Return a spec for the supplied key that is used to check the associated
 *   value before the key is initiated.
 */
integrant.core.pre_init_spec = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__43588 = cljs.core.get_global_hierarchy;
return (fexpr__43588.cljs$core$IFn$_invoke$arity$0 ? fexpr__43588.cljs$core$IFn$_invoke$arity$0() : fexpr__43588.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("integrant.core","pre-init-spec"),integrant.core.normalize_key,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
integrant.core.pre_init_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return null;
}));
integrant.core.spec_exception = (function integrant$core$spec_exception(system,k,v,spec,ed){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Spec failed on key ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)," when building system\n",(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__43597_43764 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__43598_43765 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__43600_43766 = true;
var _STAR_print_fn_STAR__temp_val__43601_43767 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__43600_43766);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__43601_43767);

try{cljs.spec.alpha.explain_out(ed);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__43598_43765);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__43597_43764);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})()].join(''),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword("integrant.core","build-failed-spec","integrant.core/build-failed-spec",1167262590),new cljs.core.Keyword(null,"system","system",-29381724),system,new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"spec","spec",347520401),spec,new cljs.core.Keyword(null,"explain","explain",484226146),ed], null));
});
integrant.core.assert_pre_init_spec = (function integrant$core$assert_pre_init_spec(system,key,value){
var temp__5823__auto__ = integrant.core.pre_init_spec.cljs$core$IFn$_invoke$arity$1(key);
if(cljs.core.truth_(temp__5823__auto__)){
var spec = temp__5823__auto__;
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec,value)){
return null;
} else {
throw integrant.core.spec_exception(system,key,value,spec,cljs.spec.alpha.explain_data(spec,value));
}
} else {
return null;
}
});
/**
 * Prepare a config map for initiation. The prep-key method is applied to each
 *   entry in the map, and the values replaced with the return value. This is used
 *   for adding default values and references to the configuration.
 */
integrant.core.prep = (function integrant$core$prep(var_args){
var G__43626 = arguments.length;
switch (G__43626) {
case 1:
return integrant.core.prep.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return integrant.core.prep.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(integrant.core.prep.cljs$core$IFn$_invoke$arity$1 = (function (config){
return integrant.core.prep.cljs$core$IFn$_invoke$arity$2(config,cljs.core.keys(config));
}));

(integrant.core.prep.cljs$core$IFn$_invoke$arity$2 = (function (config,keys){
if(cljs.core.map_QMARK_(config)){
} else {
throw (new Error("Assert failed: (map? config)"));
}

var keyset = cljs.core.set(keys);
return cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(cljs.core.truth_((keyset.cljs$core$IFn$_invoke$arity$1 ? keyset.cljs$core$IFn$_invoke$arity$1(k) : keyset.call(null,k)))?integrant.core.prep_key.cljs$core$IFn$_invoke$arity$2(k,v):v));
}),cljs.core.PersistentArrayMap.EMPTY,config);
}));

(integrant.core.prep.cljs$lang$maxFixedArity = 2);

/**
 * Turn a config map into an system map. Keys are traversed in dependency
 *   order, initiated via the init-key multimethod, then the refs associated with
 *   the key are expanded.
 */
integrant.core.init = (function integrant$core$init(var_args){
var G__43633 = arguments.length;
switch (G__43633) {
case 1:
return integrant.core.init.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return integrant.core.init.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(integrant.core.init.cljs$core$IFn$_invoke$arity$1 = (function (config){
return integrant.core.init.cljs$core$IFn$_invoke$arity$2(config,cljs.core.keys(config));
}));

(integrant.core.init.cljs$core$IFn$_invoke$arity$2 = (function (config,keys){
if(cljs.core.map_QMARK_(config)){
} else {
throw (new Error("Assert failed: (map? config)"));
}

return integrant.core.build.cljs$core$IFn$_invoke$arity$5(config,keys,integrant.core.init_key,integrant.core.assert_pre_init_spec,integrant.core.resolve_key);
}));

(integrant.core.init.cljs$lang$maxFixedArity = 2);

/**
 * Halt a system map by applying halt-key! in reverse dependency order.
 */
integrant.core.halt_BANG_ = (function integrant$core$halt_BANG_(var_args){
var G__43641 = arguments.length;
switch (G__43641) {
case 1:
return integrant.core.halt_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return integrant.core.halt_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(integrant.core.halt_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (system){
return integrant.core.halt_BANG_.cljs$core$IFn$_invoke$arity$2(system,cljs.core.keys(system));
}));

(integrant.core.halt_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (system,keys){
if(cljs.core.map_QMARK_(system)){
} else {
throw (new Error("Assert failed: (map? system)"));
}

if(cljs.core.truth_((function (){var G__43649 = system;
var G__43649__$1 = (((G__43649 == null))?null:cljs.core.meta(G__43649));
if((G__43649__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("integrant.core","origin","integrant.core/origin",-1025941839).cljs$core$IFn$_invoke$arity$1(G__43649__$1);
}
})())){
} else {
throw (new Error("Assert failed: (some-> system meta :integrant.core/origin)"));
}

return integrant.core.reverse_run_BANG_(system,keys,integrant.core.halt_key_BANG_);
}));

(integrant.core.halt_BANG_.cljs$lang$maxFixedArity = 2);

integrant.core.missing_keys = (function integrant$core$missing_keys(system,ks){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(ks),cljs.core.keys(system));
});
integrant.core.halt_missing_keys_BANG_ = (function integrant$core$halt_missing_keys_BANG_(config,system,keys){
var graph = integrant.core.dependency_graph.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("integrant.core","origin","integrant.core/origin",-1025941839).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(system)));
var missing_keys = integrant.core.missing_keys(system,integrant.core.dependent_keys(config,keys));
var seq__43650 = cljs.core.seq(cljs.core.sort.cljs$core$IFn$_invoke$arity$2(integrant.core.key_comparator(graph),missing_keys));
var chunk__43651 = null;
var count__43652 = (0);
var i__43653 = (0);
while(true){
if((i__43653 < count__43652)){
var k = chunk__43651.cljs$core$IIndexed$_nth$arity$2(null,i__43653);
integrant.core.halt_key_BANG_.cljs$core$IFn$_invoke$arity$2(k,(system.cljs$core$IFn$_invoke$arity$1 ? system.cljs$core$IFn$_invoke$arity$1(k) : system.call(null,k)));


var G__43774 = seq__43650;
var G__43775 = chunk__43651;
var G__43776 = count__43652;
var G__43777 = (i__43653 + (1));
seq__43650 = G__43774;
chunk__43651 = G__43775;
count__43652 = G__43776;
i__43653 = G__43777;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__43650);
if(temp__5823__auto__){
var seq__43650__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43650__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__43650__$1);
var G__43778 = cljs.core.chunk_rest(seq__43650__$1);
var G__43779 = c__5568__auto__;
var G__43780 = cljs.core.count(c__5568__auto__);
var G__43781 = (0);
seq__43650 = G__43778;
chunk__43651 = G__43779;
count__43652 = G__43780;
i__43653 = G__43781;
continue;
} else {
var k = cljs.core.first(seq__43650__$1);
integrant.core.halt_key_BANG_.cljs$core$IFn$_invoke$arity$2(k,(system.cljs$core$IFn$_invoke$arity$1 ? system.cljs$core$IFn$_invoke$arity$1(k) : system.call(null,k)));


var G__43782 = cljs.core.next(seq__43650__$1);
var G__43783 = null;
var G__43784 = (0);
var G__43785 = (0);
seq__43650 = G__43782;
chunk__43651 = G__43783;
count__43652 = G__43784;
i__43653 = G__43785;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Turn a config map into a system map, reusing resources from an existing
 *   system when it's possible to do so. Keys are traversed in dependency order,
 *   resumed with the resume-key multimethod, then the refs associated with the
 *   key are expanded.
 */
integrant.core.resume = (function integrant$core$resume(var_args){
var G__43657 = arguments.length;
switch (G__43657) {
case 2:
return integrant.core.resume.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return integrant.core.resume.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(integrant.core.resume.cljs$core$IFn$_invoke$arity$2 = (function (config,system){
return integrant.core.resume.cljs$core$IFn$_invoke$arity$3(config,system,cljs.core.keys(config));
}));

(integrant.core.resume.cljs$core$IFn$_invoke$arity$3 = (function (config,system,keys){
if(cljs.core.map_QMARK_(config)){
} else {
throw (new Error("Assert failed: (map? config)"));
}

if(cljs.core.map_QMARK_(system)){
} else {
throw (new Error("Assert failed: (map? system)"));
}

if(cljs.core.truth_((function (){var G__43658 = system;
var G__43658__$1 = (((G__43658 == null))?null:cljs.core.meta(G__43658));
if((G__43658__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("integrant.core","origin","integrant.core/origin",-1025941839).cljs$core$IFn$_invoke$arity$1(G__43658__$1);
}
})())){
} else {
throw (new Error("Assert failed: (some-> system meta :integrant.core/origin)"));
}

integrant.core.halt_missing_keys_BANG_(config,system,keys);

return integrant.core.build.cljs$core$IFn$_invoke$arity$5(config,keys,(function (k,v){
if(cljs.core.contains_QMARK_(system,k)){
return integrant.core.resume_key.cljs$core$IFn$_invoke$arity$4(k,v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("integrant.core","build","integrant.core/build",-1937237701).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(system)),k),(system.cljs$core$IFn$_invoke$arity$1 ? system.cljs$core$IFn$_invoke$arity$1(k) : system.call(null,k)));
} else {
return integrant.core.init_key.cljs$core$IFn$_invoke$arity$2(k,v);
}
}),integrant.core.assert_pre_init_spec,integrant.core.resolve_key);
}));

(integrant.core.resume.cljs$lang$maxFixedArity = 3);

/**
 * Suspend a system map by applying suspend-key! in reverse dependency order.
 */
integrant.core.suspend_BANG_ = (function integrant$core$suspend_BANG_(var_args){
var G__43660 = arguments.length;
switch (G__43660) {
case 1:
return integrant.core.suspend_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return integrant.core.suspend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(integrant.core.suspend_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (system){
return integrant.core.suspend_BANG_.cljs$core$IFn$_invoke$arity$2(system,cljs.core.keys(system));
}));

(integrant.core.suspend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (system,keys){
if(cljs.core.map_QMARK_(system)){
} else {
throw (new Error("Assert failed: (map? system)"));
}

if(cljs.core.truth_((function (){var G__43707 = system;
var G__43707__$1 = (((G__43707 == null))?null:cljs.core.meta(G__43707));
if((G__43707__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("integrant.core","origin","integrant.core/origin",-1025941839).cljs$core$IFn$_invoke$arity$1(G__43707__$1);
}
})())){
} else {
throw (new Error("Assert failed: (some-> system meta :integrant.core/origin)"));
}

return integrant.core.reverse_run_BANG_(system,keys,integrant.core.suspend_key_BANG_);
}));

(integrant.core.suspend_BANG_.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=integrant.core.js.map
