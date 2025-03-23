goog.provide('posh.reagent');
posh.reagent.missing_pull_result = (function posh$reagent$missing_pull_result(pull_expr){
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),null], null), null),pull_expr))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),null], null);
} else {
return null;
}
});
posh.reagent.safe_pull = (function posh$reagent$safe_pull(db,query,id){
if(cljs.core.integer_QMARK_(id)){
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(db,query,id) : datascript.core.pull.call(null,db,query,id));
} else {
if(cljs.core.vector_QMARK_(id)){
var temp__5821__auto__ = (datascript.core.entid.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entid.cljs$core$IFn$_invoke$arity$2(db,id) : datascript.core.entid.call(null,db,id));
if(cljs.core.truth_(temp__5821__auto__)){
var eid = temp__5821__auto__;
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(db,query,eid) : datascript.core.pull.call(null,db,query,eid));
} else {
return posh.reagent.missing_pull_result(query);
}
} else {
if((id == null)){
return posh.reagent.missing_pull_result(query);
} else {
return null;
}
}
}
});
posh.reagent.dcfg = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"db","db",993250759),datascript.core.db,new cljs.core.Keyword(null,"pull","pull",-860544805),posh.reagent.safe_pull,new cljs.core.Keyword(null,"q","q",689001697),datascript.core.q,new cljs.core.Keyword(null,"filter","filter",-948537934),datascript.core.filter,new cljs.core.Keyword(null,"with","with",-1536296876),datascript.core.with$,new cljs.core.Keyword(null,"entid","entid",1720688982),datascript.core.entid,new cljs.core.Keyword(null,"transact!","transact!",-822725810),datascript.core.transact_BANG_], null);
posh.reagent.set_conn_listener_BANG_ = (function posh$reagent$set_conn_listener_BANG_(posh_atom,conn,db_id){
var posh_vars = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"posh-atom","posh-atom",-510480810),posh_atom,new cljs.core.Keyword(null,"db-id","db-id",747248515),db_id], null);
datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3(conn,new cljs.core.Keyword(null,"posh-dispenser","posh-dispenser",-482466766),(function (var$){
if((var$ instanceof cljs.core.Keyword)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(posh_vars,var$);
} else {
return null;
}
}));

cljs.core.add_watch(conn,new cljs.core.Keyword(null,"posh-schema-listener","posh-schema-listener",-158129486),(function (_,___$1,old_state,new_state){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(new_state))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(posh_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),db_id], null),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(new_state));
} else {
return null;
}
}));

datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3(conn,new cljs.core.Keyword(null,"posh-listener","posh-listener",-6636061),(function (tx_report){
var map__51950 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(posh_atom,posh.core.after_transact,cljs.core.PersistentArrayMap.createAsIfByAssoc([conn,tx_report]));
var map__51950__$1 = cljs.core.__destructure_map(map__51950);
var ratoms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51950__$1,new cljs.core.Keyword(null,"ratoms","ratoms",1900437364));
var changed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51950__$1,new cljs.core.Keyword(null,"changed","changed",570724917));
var seq__51955 = cljs.core.seq(changed);
var chunk__51956 = null;
var count__51957 = (0);
var i__51958 = (0);
while(true){
if((i__51958 < count__51957)){
var vec__51972 = chunk__51956.cljs$core$IIndexed$_nth$arity$2(null,i__51958);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51972,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51972,(1),null);
cljs.core.reset_BANG_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(ratoms,k),new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(v));


var G__52173 = seq__51955;
var G__52174 = chunk__51956;
var G__52175 = count__51957;
var G__52176 = (i__51958 + (1));
seq__51955 = G__52173;
chunk__51956 = G__52174;
count__51957 = G__52175;
i__51958 = G__52176;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__51955);
if(temp__5823__auto__){
var seq__51955__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51955__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__51955__$1);
var G__52177 = cljs.core.chunk_rest(seq__51955__$1);
var G__52178 = c__5568__auto__;
var G__52179 = cljs.core.count(c__5568__auto__);
var G__52180 = (0);
seq__51955 = G__52177;
chunk__51956 = G__52178;
count__51957 = G__52179;
i__51958 = G__52180;
continue;
} else {
var vec__51975 = cljs.core.first(seq__51955__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51975,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51975,(1),null);
cljs.core.reset_BANG_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(ratoms,k),new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(v));


var G__52182 = cljs.core.next(seq__51955__$1);
var G__52183 = null;
var G__52184 = (0);
var G__52185 = (0);
seq__51955 = G__52182;
chunk__51956 = G__52183;
count__51957 = G__52184;
i__51958 = G__52185;
continue;
}
} else {
return null;
}
}
break;
}
}));

return conn;
});
posh.reagent.posh_BANG_ = (function posh$reagent$posh_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52186 = arguments.length;
var i__5770__auto___52187 = (0);
while(true){
if((i__5770__auto___52187 < len__5769__auto___52186)){
args__5775__auto__.push((arguments[i__5770__auto___52187]));

var G__52188 = (i__5770__auto___52187 + (1));
i__5770__auto___52187 = G__52188;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return posh.reagent.posh_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(posh.reagent.posh_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (conns){
var posh_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return cljs.core.reset_BANG_(posh_atom,(function (){var n = (0);
var conns__$1 = conns;
var posh_tree = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(posh.core.empty_tree(posh.reagent.dcfg,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"results","results",-1134170113)], null)),new cljs.core.Keyword(null,"ratoms","ratoms",1900437364),cljs.core.PersistentArrayMap.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"reactions","reactions",2029850654),cljs.core.PersistentArrayMap.EMPTY], 0));
while(true){
if(cljs.core.empty_QMARK_(conns__$1)){
return posh_tree;
} else {
var G__52190 = (n + (1));
var G__52191 = cljs.core.rest(conns__$1);
var G__52192 = (function (){var db_id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["conn",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
return posh.core.add_db.cljs$core$IFn$_invoke$arity$4(posh_tree,db_id,posh.reagent.set_conn_listener_BANG_(posh_atom,cljs.core.first(conns__$1),db_id),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.first(conns__$1))));
})();
n = G__52190;
conns__$1 = G__52191;
posh_tree = G__52192;
continue;
}
break;
}
})());
}));

(posh.reagent.posh_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(posh.reagent.posh_BANG_.cljs$lang$applyTo = (function (seq51978){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51978));
}));

posh.reagent.get_conn_var = (function posh$reagent$get_conn_var(conn,var$){
var fexpr__51980 = new cljs.core.Keyword(null,"posh-dispenser","posh-dispenser",-482466766).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(conn))));
return (fexpr__51980.cljs$core$IFn$_invoke$arity$1 ? fexpr__51980.cljs$core$IFn$_invoke$arity$1(var$) : fexpr__51980.call(null,var$));
});
posh.reagent.get_posh_atom = (function posh$reagent$get_posh_atom(poshdb_or_conn){
if(datascript.core.conn_QMARK_(poshdb_or_conn)){
return posh.reagent.get_conn_var(poshdb_or_conn,new cljs.core.Keyword(null,"posh-atom","posh-atom",-510480810));
} else {
return posh.stateful.get_posh_atom(poshdb_or_conn);
}
});
posh.reagent.get_db = (function posh$reagent$get_db(poshdb_or_conn){
if(datascript.core.conn_QMARK_(poshdb_or_conn)){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),posh.reagent.get_conn_var(poshdb_or_conn,new cljs.core.Keyword(null,"db-id","db-id",747248515))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"posh","posh",-1205664462),posh.reagent.get_conn_var(poshdb_or_conn,new cljs.core.Keyword(null,"posh-atom","posh-atom",-510480810))], null));
} else {
return poshdb_or_conn;
}
});
posh.reagent.rm_posh_item = (function posh$reagent$rm_posh_item(posh_atom,storage_key){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(posh_atom,(function (posh_atom_val){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(posh.core.remove_item(posh_atom_val,storage_key),new cljs.core.Keyword(null,"ratoms","ratoms",1900437364),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ratoms","ratoms",1900437364).cljs$core$IFn$_invoke$arity$1(posh_atom_val),storage_key),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"reactions","reactions",2029850654),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reactions","reactions",2029850654).cljs$core$IFn$_invoke$arity$1(posh_atom_val),storage_key)], 0));
}));
});
posh.reagent.make_query_reaction = (function posh$reagent$make_query_reaction(var_args){
var G__51982 = arguments.length;
switch (G__51982) {
case 4:
return posh.reagent.make_query_reaction.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return posh.reagent.make_query_reaction.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(posh.reagent.make_query_reaction.cljs$core$IFn$_invoke$arity$4 = (function (posh_atom,storage_key,add_query_fn,options){
var temp__5821__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(posh_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reactions","reactions",2029850654),storage_key], null));
if(cljs.core.truth_(temp__5821__auto__)){
var r = temp__5821__auto__;
return r;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reactions","reactions",2029850654).cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(posh_atom,(function (posh_atom_val){
var posh_atom_with_query = (add_query_fn.cljs$core$IFn$_invoke$arity$1 ? add_query_fn.cljs$core$IFn$_invoke$arity$1(posh_atom_val) : add_query_fn.call(null,posh_atom_val));
var query_result = new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cache","cache",-1237023054).cljs$core$IFn$_invoke$arity$1(posh_atom_with_query),storage_key));
var query_ratom = (function (){var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ratoms","ratoms",1900437364).cljs$core$IFn$_invoke$arity$1(posh_atom_with_query),storage_key);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1(query_result);
}
})();
var query_reaction = reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic((function (){
return cljs.core.deref(query_ratom);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360),(function (_,___$1){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cache","cache",-1237023054).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.Keyword(null,"forever","forever",2103455015))){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(posh_atom,(function (posh_atom_val__$1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(posh.core.remove_item(posh_atom_val__$1,storage_key),new cljs.core.Keyword(null,"ratoms","ratoms",1900437364),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ratoms","ratoms",1900437364).cljs$core$IFn$_invoke$arity$1(posh_atom_val__$1),storage_key),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"reactions","reactions",2029850654),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reactions","reactions",2029850654).cljs$core$IFn$_invoke$arity$1(posh_atom_val__$1),storage_key)], 0));
}));
}
})], 0));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(posh_atom_with_query,new cljs.core.Keyword(null,"ratoms","ratoms",1900437364),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"ratoms","ratoms",1900437364).cljs$core$IFn$_invoke$arity$1(posh_atom_with_query),storage_key,query_ratom),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"reactions","reactions",2029850654),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"reactions","reactions",2029850654).cljs$core$IFn$_invoke$arity$1(posh_atom_with_query),storage_key,query_reaction)], 0));
}))),storage_key);
}
}));

(posh.reagent.make_query_reaction.cljs$core$IFn$_invoke$arity$3 = (function (posh_atom,storage_key,add_query_fn){
return posh.reagent.make_query_reaction.cljs$core$IFn$_invoke$arity$4(posh_atom,storage_key,add_query_fn,cljs.core.PersistentArrayMap.EMPTY);
}));

(posh.reagent.make_query_reaction.cljs$lang$maxFixedArity = 4);

/**
 * Returns a reaction of a pull expression. The options argument may specify `:cache :forever`, which keeps query results
 *   cached indefinitely, even if the reaction is disposed.
 */
posh.reagent.pull = (function posh$reagent$pull(var_args){
var G__51986 = arguments.length;
switch (G__51986) {
case 4:
return posh.reagent.pull.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return posh.reagent.pull.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(posh.reagent.pull.cljs$core$IFn$_invoke$arity$4 = (function (poshdb,pull_pattern,eid,options){
var true_poshdb = posh.reagent.get_db(poshdb);
var storage_key = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pull","pull",-860544805),true_poshdb,pull_pattern,eid], null);
var posh_atom = posh.reagent.get_posh_atom(poshdb);
return posh.reagent.make_query_reaction.cljs$core$IFn$_invoke$arity$4(posh_atom,storage_key,(function (p1__51983_SHARP_){
return posh.core.add_pull(p1__51983_SHARP_,true_poshdb,pull_pattern,eid);
}),options);
}));

(posh.reagent.pull.cljs$core$IFn$_invoke$arity$3 = (function (poshdb,pull_pattern,eid){
return posh.reagent.pull.cljs$core$IFn$_invoke$arity$4(poshdb,pull_pattern,eid,cljs.core.PersistentArrayMap.EMPTY);
}));

(posh.reagent.pull.cljs$lang$maxFixedArity = 4);

posh.reagent.pull_info = (function posh$reagent$pull_info(poshdb,pull_pattern,eid){
var true_poshdb = posh.reagent.get_db(poshdb);
var storage_key = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pull","pull",-860544805),true_poshdb,pull_pattern,eid], null);
var posh_atom = posh.reagent.get_posh_atom(poshdb);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(posh.lib.update.update_pull(cljs.core.deref(posh_atom),storage_key),new cljs.core.Keyword(null,"reload-fn","reload-fn",-1150160860));
});
posh.reagent.pull_tx = (function posh$reagent$pull_tx(tx_patterns,poshdb,pull_pattern,eid){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["pull-tx is deprecated. Calling pull without your tx-patterns."], 0));

return posh.reagent.pull.cljs$core$IFn$_invoke$arity$3(poshdb,pull_pattern,eid);
});
posh.reagent.parse_q_query = (function posh$reagent$parse_q_query(query){
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__52012,query_item){
var vec__52014 = p__52012;
var parsed_query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52014,(0),null);
var last_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52014,(1),null);
if((query_item instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parsed_query,query_item,cljs.core.PersistentVector.EMPTY),query_item], null);
} else {
if(cljs.core.truth_(last_key)){
} else {
throw (new Error("Assert failed: last-key"));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.cljs$core$IFn$_invoke$arity$4(parsed_query,last_key,cljs.core.conj,query_item),last_key], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,null], null),query));
});
posh.reagent.q_args_count = (function posh$reagent$q_args_count(query){
var parsed_query = posh.reagent.parse_q_query(query);
var temp__5821__auto__ = new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(parsed_query);
if(cljs.core.truth_(temp__5821__auto__)){
var in_clause = temp__5821__auto__;
return cljs.core.count(in_clause);
} else {
return (1);
}
});
/**
 * Returns a datalog query reaction. If args count doens't match the query's input count, a final options map argument
 *   is accepted. This options map may specify `:cache :forever`, which keeps query results cached even if the reaction is
 *   disposed.
 */
posh.reagent.q = (function posh$reagent$q(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52208 = arguments.length;
var i__5770__auto___52209 = (0);
while(true){
if((i__5770__auto___52209 < len__5769__auto___52208)){
args__5775__auto__.push((arguments[i__5770__auto___52209]));

var G__52210 = (i__5770__auto___52209 + (1));
i__5770__auto___52209 = G__52210;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return posh.reagent.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(posh.reagent.q.cljs$core$IFn$_invoke$arity$variadic = (function (query,args){
var n_query_args = posh.reagent.q_args_count(query);
var vec__52058 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n_query_args,cljs.core.count(args)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [args,cljs.core.PersistentArrayMap.EMPTY], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((n_query_args + (1)),cljs.core.count(args)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.butlast(args),cljs.core.last(args)], null):(function(){throw "Incorrect number of args passed to posh query"})()
));
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52058,(0),null);
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52058,(1),null);
var true_poshdb_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52046_SHARP_){
if(datascript.core.conn_QMARK_(p1__52046_SHARP_)){
return posh.reagent.get_db(p1__52046_SHARP_);
} else {
return p1__52046_SHARP_;
}
}),args__$1);
var posh_atom = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.reagent.get_posh_atom,args__$1)));
var storage_key = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"q","q",689001697),query,true_poshdb_args], null);
return posh.reagent.make_query_reaction.cljs$core$IFn$_invoke$arity$4(posh_atom,storage_key,(function (p1__52048_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(posh.core.add_q,p1__52048_SHARP_,query),true_poshdb_args);
}),options);
}));

(posh.reagent.q.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(posh.reagent.q.cljs$lang$applyTo = (function (seq52053){
var G__52054 = cljs.core.first(seq52053);
var seq52053__$1 = cljs.core.next(seq52053);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52054,seq52053__$1);
}));

posh.reagent.q_info = (function posh$reagent$q_info(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52211 = arguments.length;
var i__5770__auto___52212 = (0);
while(true){
if((i__5770__auto___52212 < len__5769__auto___52211)){
args__5775__auto__.push((arguments[i__5770__auto___52212]));

var G__52213 = (i__5770__auto___52212 + (1));
i__5770__auto___52212 = G__52213;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return posh.reagent.q_info.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(posh.reagent.q_info.cljs$core$IFn$_invoke$arity$variadic = (function (query,args){
var true_poshdb_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52079_SHARP_){
if(datascript.core.conn_QMARK_(p1__52079_SHARP_)){
return posh.reagent.get_db(p1__52079_SHARP_);
} else {
return p1__52079_SHARP_;
}
}),args);
var posh_atom = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.reagent.get_posh_atom,args)));
var storage_key = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"q","q",689001697),query,true_poshdb_args], null);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(posh.lib.update.update_q(cljs.core.deref(posh_atom),storage_key),new cljs.core.Keyword(null,"reload-fn","reload-fn",-1150160860));
}));

(posh.reagent.q_info.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(posh.reagent.q_info.cljs$lang$applyTo = (function (seq52086){
var G__52087 = cljs.core.first(seq52086);
var seq52086__$1 = cljs.core.next(seq52086);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52087,seq52086__$1);
}));

posh.reagent.q_tx = (function posh$reagent$q_tx(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52214 = arguments.length;
var i__5770__auto___52215 = (0);
while(true){
if((i__5770__auto___52215 < len__5769__auto___52214)){
args__5775__auto__.push((arguments[i__5770__auto___52215]));

var G__52216 = (i__5770__auto___52215 + (1));
i__5770__auto___52215 = G__52216;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return posh.reagent.q_tx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(posh.reagent.q_tx.cljs$core$IFn$_invoke$arity$variadic = (function (tx_patterns,query,args){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["q-tx is deprecated. Calling q without your tx-patterns."], 0));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(posh.reagent.q,query,args);
}));

(posh.reagent.q_tx.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(posh.reagent.q_tx.cljs$lang$applyTo = (function (seq52114){
var G__52115 = cljs.core.first(seq52114);
var seq52114__$1 = cljs.core.next(seq52114);
var G__52116 = cljs.core.first(seq52114__$1);
var seq52114__$2 = cljs.core.next(seq52114__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52115,G__52116,seq52114__$2);
}));

posh.reagent.filter_tx = (function posh$reagent$filter_tx(poshdb,tx_patterns){
return posh.stateful.add_filter_tx(posh.reagent.get_db(poshdb),tx_patterns);
});
posh.reagent.filter_pull = (function posh$reagent$filter_pull(poshdb,pull_pattern,eid){
return posh.stateful.add_filter_pull(posh.reagent.get_db(poshdb),pull_pattern,eid);
});
posh.reagent.filter_q = (function posh$reagent$filter_q(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52220 = arguments.length;
var i__5770__auto___52221 = (0);
while(true){
if((i__5770__auto___52221 < len__5769__auto___52220)){
args__5775__auto__.push((arguments[i__5770__auto___52221]));

var G__52222 = (i__5770__auto___52221 + (1));
i__5770__auto___52221 = G__52222;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return posh.reagent.filter_q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(posh.reagent.filter_q.cljs$core$IFn$_invoke$arity$variadic = (function (query,args){
var true_poshdb_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52126_SHARP_){
if(datascript.core.conn_QMARK_(p1__52126_SHARP_)){
return posh.reagent.get_db(p1__52126_SHARP_);
} else {
return p1__52126_SHARP_;
}
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(posh.stateful.add_filter_q,query,true_poshdb_args);
}));

(posh.reagent.filter_q.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(posh.reagent.filter_q.cljs$lang$applyTo = (function (seq52127){
var G__52128 = cljs.core.first(seq52127);
var seq52127__$1 = cljs.core.next(seq52127);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52128,seq52127__$1);
}));

posh.reagent.transact_BANG_ = (function posh$reagent$transact_BANG_(poshdb_or_conn,txs){
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(((datascript.core.conn_QMARK_(poshdb_or_conn))?poshdb_or_conn:posh.stateful.poshdb__GT_conn(poshdb_or_conn)),txs);
});

//# sourceMappingURL=posh.reagent.js.map
