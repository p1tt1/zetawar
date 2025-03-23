goog.provide('weavejester.dependency');

/**
 * @interface
 */
weavejester.dependency.DependencyGraph = function(){};

var weavejester$dependency$DependencyGraph$immediate_dependencies$dyn_42284 = (function (graph,node){
var x__5393__auto__ = (((graph == null))?null:graph);
var m__5394__auto__ = (weavejester.dependency.immediate_dependencies[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(graph,node) : m__5394__auto__.call(null,graph,node));
} else {
var m__5392__auto__ = (weavejester.dependency.immediate_dependencies["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(graph,node) : m__5392__auto__.call(null,graph,node));
} else {
throw cljs.core.missing_protocol("DependencyGraph.immediate-dependencies",graph);
}
}
});
/**
 * Returns the set of immediate dependencies of node.
 */
weavejester.dependency.immediate_dependencies = (function weavejester$dependency$immediate_dependencies(graph,node){
if((((!((graph == null)))) && ((!((graph.weavejester$dependency$DependencyGraph$immediate_dependencies$arity$2 == null)))))){
return graph.weavejester$dependency$DependencyGraph$immediate_dependencies$arity$2(graph,node);
} else {
return weavejester$dependency$DependencyGraph$immediate_dependencies$dyn_42284(graph,node);
}
});

var weavejester$dependency$DependencyGraph$immediate_dependents$dyn_42286 = (function (graph,node){
var x__5393__auto__ = (((graph == null))?null:graph);
var m__5394__auto__ = (weavejester.dependency.immediate_dependents[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(graph,node) : m__5394__auto__.call(null,graph,node));
} else {
var m__5392__auto__ = (weavejester.dependency.immediate_dependents["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(graph,node) : m__5392__auto__.call(null,graph,node));
} else {
throw cljs.core.missing_protocol("DependencyGraph.immediate-dependents",graph);
}
}
});
/**
 * Returns the set of immediate dependents of node.
 */
weavejester.dependency.immediate_dependents = (function weavejester$dependency$immediate_dependents(graph,node){
if((((!((graph == null)))) && ((!((graph.weavejester$dependency$DependencyGraph$immediate_dependents$arity$2 == null)))))){
return graph.weavejester$dependency$DependencyGraph$immediate_dependents$arity$2(graph,node);
} else {
return weavejester$dependency$DependencyGraph$immediate_dependents$dyn_42286(graph,node);
}
});

var weavejester$dependency$DependencyGraph$transitive_dependencies$dyn_42287 = (function (graph,node){
var x__5393__auto__ = (((graph == null))?null:graph);
var m__5394__auto__ = (weavejester.dependency.transitive_dependencies[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(graph,node) : m__5394__auto__.call(null,graph,node));
} else {
var m__5392__auto__ = (weavejester.dependency.transitive_dependencies["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(graph,node) : m__5392__auto__.call(null,graph,node));
} else {
throw cljs.core.missing_protocol("DependencyGraph.transitive-dependencies",graph);
}
}
});
/**
 * Returns the set of all things which node depends on, directly or
 *  transitively.
 */
weavejester.dependency.transitive_dependencies = (function weavejester$dependency$transitive_dependencies(graph,node){
if((((!((graph == null)))) && ((!((graph.weavejester$dependency$DependencyGraph$transitive_dependencies$arity$2 == null)))))){
return graph.weavejester$dependency$DependencyGraph$transitive_dependencies$arity$2(graph,node);
} else {
return weavejester$dependency$DependencyGraph$transitive_dependencies$dyn_42287(graph,node);
}
});

var weavejester$dependency$DependencyGraph$transitive_dependencies_set$dyn_42288 = (function (graph,node_set){
var x__5393__auto__ = (((graph == null))?null:graph);
var m__5394__auto__ = (weavejester.dependency.transitive_dependencies_set[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(graph,node_set) : m__5394__auto__.call(null,graph,node_set));
} else {
var m__5392__auto__ = (weavejester.dependency.transitive_dependencies_set["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(graph,node_set) : m__5392__auto__.call(null,graph,node_set));
} else {
throw cljs.core.missing_protocol("DependencyGraph.transitive-dependencies-set",graph);
}
}
});
/**
 * Returns the set of all things which any node in node-set depends
 *  on, directly or transitively.
 */
weavejester.dependency.transitive_dependencies_set = (function weavejester$dependency$transitive_dependencies_set(graph,node_set){
if((((!((graph == null)))) && ((!((graph.weavejester$dependency$DependencyGraph$transitive_dependencies_set$arity$2 == null)))))){
return graph.weavejester$dependency$DependencyGraph$transitive_dependencies_set$arity$2(graph,node_set);
} else {
return weavejester$dependency$DependencyGraph$transitive_dependencies_set$dyn_42288(graph,node_set);
}
});

var weavejester$dependency$DependencyGraph$transitive_dependents$dyn_42289 = (function (graph,node){
var x__5393__auto__ = (((graph == null))?null:graph);
var m__5394__auto__ = (weavejester.dependency.transitive_dependents[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(graph,node) : m__5394__auto__.call(null,graph,node));
} else {
var m__5392__auto__ = (weavejester.dependency.transitive_dependents["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(graph,node) : m__5392__auto__.call(null,graph,node));
} else {
throw cljs.core.missing_protocol("DependencyGraph.transitive-dependents",graph);
}
}
});
/**
 * Returns the set of all things which depend upon node, directly or
 *  transitively.
 */
weavejester.dependency.transitive_dependents = (function weavejester$dependency$transitive_dependents(graph,node){
if((((!((graph == null)))) && ((!((graph.weavejester$dependency$DependencyGraph$transitive_dependents$arity$2 == null)))))){
return graph.weavejester$dependency$DependencyGraph$transitive_dependents$arity$2(graph,node);
} else {
return weavejester$dependency$DependencyGraph$transitive_dependents$dyn_42289(graph,node);
}
});

var weavejester$dependency$DependencyGraph$transitive_dependents_set$dyn_42290 = (function (graph,node_set){
var x__5393__auto__ = (((graph == null))?null:graph);
var m__5394__auto__ = (weavejester.dependency.transitive_dependents_set[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(graph,node_set) : m__5394__auto__.call(null,graph,node_set));
} else {
var m__5392__auto__ = (weavejester.dependency.transitive_dependents_set["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(graph,node_set) : m__5392__auto__.call(null,graph,node_set));
} else {
throw cljs.core.missing_protocol("DependencyGraph.transitive-dependents-set",graph);
}
}
});
/**
 * Returns the set of all things which depend upon any node in
 *  node-set, directly or transitively.
 */
weavejester.dependency.transitive_dependents_set = (function weavejester$dependency$transitive_dependents_set(graph,node_set){
if((((!((graph == null)))) && ((!((graph.weavejester$dependency$DependencyGraph$transitive_dependents_set$arity$2 == null)))))){
return graph.weavejester$dependency$DependencyGraph$transitive_dependents_set$arity$2(graph,node_set);
} else {
return weavejester$dependency$DependencyGraph$transitive_dependents_set$dyn_42290(graph,node_set);
}
});

var weavejester$dependency$DependencyGraph$nodes$dyn_42295 = (function (graph){
var x__5393__auto__ = (((graph == null))?null:graph);
var m__5394__auto__ = (weavejester.dependency.nodes[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(graph) : m__5394__auto__.call(null,graph));
} else {
var m__5392__auto__ = (weavejester.dependency.nodes["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(graph) : m__5392__auto__.call(null,graph));
} else {
throw cljs.core.missing_protocol("DependencyGraph.nodes",graph);
}
}
});
/**
 * Returns the set of all nodes in graph.
 */
weavejester.dependency.nodes = (function weavejester$dependency$nodes(graph){
if((((!((graph == null)))) && ((!((graph.weavejester$dependency$DependencyGraph$nodes$arity$1 == null)))))){
return graph.weavejester$dependency$DependencyGraph$nodes$arity$1(graph);
} else {
return weavejester$dependency$DependencyGraph$nodes$dyn_42295(graph);
}
});


/**
 * @interface
 */
weavejester.dependency.DependencyGraphUpdate = function(){};

var weavejester$dependency$DependencyGraphUpdate$depend$dyn_42296 = (function (graph,node,dep){
var x__5393__auto__ = (((graph == null))?null:graph);
var m__5394__auto__ = (weavejester.dependency.depend[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(graph,node,dep) : m__5394__auto__.call(null,graph,node,dep));
} else {
var m__5392__auto__ = (weavejester.dependency.depend["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(graph,node,dep) : m__5392__auto__.call(null,graph,node,dep));
} else {
throw cljs.core.missing_protocol("DependencyGraphUpdate.depend",graph);
}
}
});
/**
 * Returns a new graph with a dependency from node to dep ("node depends
 *  on dep"). Forbids circular dependencies.
 */
weavejester.dependency.depend = (function weavejester$dependency$depend(graph,node,dep){
if((((!((graph == null)))) && ((!((graph.weavejester$dependency$DependencyGraphUpdate$depend$arity$3 == null)))))){
return graph.weavejester$dependency$DependencyGraphUpdate$depend$arity$3(graph,node,dep);
} else {
return weavejester$dependency$DependencyGraphUpdate$depend$dyn_42296(graph,node,dep);
}
});

var weavejester$dependency$DependencyGraphUpdate$remove_edge$dyn_42297 = (function (graph,node,dep){
var x__5393__auto__ = (((graph == null))?null:graph);
var m__5394__auto__ = (weavejester.dependency.remove_edge[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(graph,node,dep) : m__5394__auto__.call(null,graph,node,dep));
} else {
var m__5392__auto__ = (weavejester.dependency.remove_edge["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(graph,node,dep) : m__5392__auto__.call(null,graph,node,dep));
} else {
throw cljs.core.missing_protocol("DependencyGraphUpdate.remove-edge",graph);
}
}
});
/**
 * Returns a new graph with the dependency from node to dep removed.
 */
weavejester.dependency.remove_edge = (function weavejester$dependency$remove_edge(graph,node,dep){
if((((!((graph == null)))) && ((!((graph.weavejester$dependency$DependencyGraphUpdate$remove_edge$arity$3 == null)))))){
return graph.weavejester$dependency$DependencyGraphUpdate$remove_edge$arity$3(graph,node,dep);
} else {
return weavejester$dependency$DependencyGraphUpdate$remove_edge$dyn_42297(graph,node,dep);
}
});

var weavejester$dependency$DependencyGraphUpdate$remove_all$dyn_42306 = (function (graph,node){
var x__5393__auto__ = (((graph == null))?null:graph);
var m__5394__auto__ = (weavejester.dependency.remove_all[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(graph,node) : m__5394__auto__.call(null,graph,node));
} else {
var m__5392__auto__ = (weavejester.dependency.remove_all["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(graph,node) : m__5392__auto__.call(null,graph,node));
} else {
throw cljs.core.missing_protocol("DependencyGraphUpdate.remove-all",graph);
}
}
});
/**
 * Returns a new dependency graph with all references to node removed.
 */
weavejester.dependency.remove_all = (function weavejester$dependency$remove_all(graph,node){
if((((!((graph == null)))) && ((!((graph.weavejester$dependency$DependencyGraphUpdate$remove_all$arity$2 == null)))))){
return graph.weavejester$dependency$DependencyGraphUpdate$remove_all$arity$2(graph,node);
} else {
return weavejester$dependency$DependencyGraphUpdate$remove_all$dyn_42306(graph,node);
}
});

var weavejester$dependency$DependencyGraphUpdate$remove_node$dyn_42308 = (function (graph,node){
var x__5393__auto__ = (((graph == null))?null:graph);
var m__5394__auto__ = (weavejester.dependency.remove_node[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(graph,node) : m__5394__auto__.call(null,graph,node));
} else {
var m__5392__auto__ = (weavejester.dependency.remove_node["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(graph,node) : m__5392__auto__.call(null,graph,node));
} else {
throw cljs.core.missing_protocol("DependencyGraphUpdate.remove-node",graph);
}
}
});
/**
 * Removes the node from the dependency graph without removing it as a
 *  dependency of other nodes. That is, removes all outgoing edges from
 *  node.
 */
weavejester.dependency.remove_node = (function weavejester$dependency$remove_node(graph,node){
if((((!((graph == null)))) && ((!((graph.weavejester$dependency$DependencyGraphUpdate$remove_node$arity$2 == null)))))){
return graph.weavejester$dependency$DependencyGraphUpdate$remove_node$arity$2(graph,node);
} else {
return weavejester$dependency$DependencyGraphUpdate$remove_node$dyn_42308(graph,node);
}
});

weavejester.dependency.remove_from_map = (function weavejester$dependency$remove_from_map(amap,x){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__42147){
var vec__42148 = p__42147;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42148,(0),null);
var vs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42148,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(vs,x));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(amap,x));
});
/**
 * Recursively expands the set of dependency relationships starting
 *   at (get neighbors x), for each x in node-set
 */
weavejester.dependency.transitive = (function weavejester$dependency$transitive(neighbors,node_set){
var unexpanded = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(neighbors,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node_set], 0));
var expanded = cljs.core.PersistentHashSet.EMPTY;
while(true){
var temp__5821__auto__ = cljs.core.seq(unexpanded);
if(temp__5821__auto__){
var vec__42191 = temp__5821__auto__;
var seq__42192 = cljs.core.seq(vec__42191);
var first__42193 = cljs.core.first(seq__42192);
var seq__42192__$1 = cljs.core.next(seq__42192);
var node = first__42193;
var more = seq__42192__$1;
if(cljs.core.contains_QMARK_(expanded,node)){
var G__42313 = more;
var G__42314 = expanded;
unexpanded = G__42313;
expanded = G__42314;
continue;
} else {
var G__42315 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(more,(neighbors.cljs$core$IFn$_invoke$arity$1 ? neighbors.cljs$core$IFn$_invoke$arity$1(node) : neighbors.call(null,node)));
var G__42316 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(expanded,node);
unexpanded = G__42315;
expanded = G__42316;
continue;
}
} else {
return expanded;
}
break;
}
});
weavejester.dependency.set_conj = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY);

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {weavejester.dependency.DependencyGraph}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {weavejester.dependency.DependencyGraphUpdate}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
weavejester.dependency.MapDependencyGraph = (function (dependencies,dependents,__meta,__extmap,__hash){
this.dependencies = dependencies;
this.dependents = dependents;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(weavejester.dependency.MapDependencyGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(weavejester.dependency.MapDependencyGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k42208,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__42226 = k42208;
var G__42226__$1 = (((G__42226 instanceof cljs.core.Keyword))?G__42226.fqn:null);
switch (G__42226__$1) {
case "dependencies":
return self__.dependencies;

break;
case "dependents":
return self__.dependents;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k42208,else__5346__auto__);

}
}));

(weavejester.dependency.MapDependencyGraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__42232){
var vec__42233 = p__42232;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42233,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42233,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(weavejester.dependency.MapDependencyGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#weavejester.dependency.MapDependencyGraph{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dependencies","dependencies",1108064605),self__.dependencies],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dependents","dependents",136812837),self__.dependents],null))], null),self__.__extmap));
}));

(weavejester.dependency.MapDependencyGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42207){
var self__ = this;
var G__42207__$1 = this;
return (new cljs.core.RecordIter((0),G__42207__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependencies","dependencies",1108064605),new cljs.core.Keyword(null,"dependents","dependents",136812837)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(weavejester.dependency.MapDependencyGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(weavejester.dependency.MapDependencyGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new weavejester.dependency.MapDependencyGraph(self__.dependencies,self__.dependents,self__.__meta,self__.__extmap,self__.__hash));
}));

(weavejester.dependency.MapDependencyGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(weavejester.dependency.MapDependencyGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-592853898 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(weavejester.dependency.MapDependencyGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42209,other42210){
var self__ = this;
var this42209__$1 = this;
return (((!((other42210 == null)))) && ((((this42209__$1.constructor === other42210.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42209__$1.dependencies,other42210.dependencies)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42209__$1.dependents,other42210.dependents)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42209__$1.__extmap,other42210.__extmap)))))))));
}));

(weavejester.dependency.MapDependencyGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dependents","dependents",136812837),null,new cljs.core.Keyword(null,"dependencies","dependencies",1108064605),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new weavejester.dependency.MapDependencyGraph(self__.dependencies,self__.dependents,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(weavejester.dependency.MapDependencyGraph.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k42208){
var self__ = this;
var this__5350__auto____$1 = this;
var G__42241 = k42208;
var G__42241__$1 = (((G__42241 instanceof cljs.core.Keyword))?G__42241.fqn:null);
switch (G__42241__$1) {
case "dependencies":
case "dependents":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k42208);

}
}));

(weavejester.dependency.MapDependencyGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__42207){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__42242 = cljs.core.keyword_identical_QMARK_;
var expr__42243 = k__5352__auto__;
if(cljs.core.truth_((pred__42242.cljs$core$IFn$_invoke$arity$2 ? pred__42242.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dependencies","dependencies",1108064605),expr__42243) : pred__42242.call(null,new cljs.core.Keyword(null,"dependencies","dependencies",1108064605),expr__42243)))){
return (new weavejester.dependency.MapDependencyGraph(G__42207,self__.dependents,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__42242.cljs$core$IFn$_invoke$arity$2 ? pred__42242.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dependents","dependents",136812837),expr__42243) : pred__42242.call(null,new cljs.core.Keyword(null,"dependents","dependents",136812837),expr__42243)))){
return (new weavejester.dependency.MapDependencyGraph(self__.dependencies,G__42207,self__.__meta,self__.__extmap,null));
} else {
return (new weavejester.dependency.MapDependencyGraph(self__.dependencies,self__.dependents,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__42207),null));
}
}
}));

(weavejester.dependency.MapDependencyGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"dependencies","dependencies",1108064605),self__.dependencies,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"dependents","dependents",136812837),self__.dependents,null))], null),self__.__extmap));
}));

(weavejester.dependency.MapDependencyGraph.prototype.weavejester$dependency$DependencyGraph$ = cljs.core.PROTOCOL_SENTINEL);

(weavejester.dependency.MapDependencyGraph.prototype.weavejester$dependency$DependencyGraph$immediate_dependencies$arity$2 = (function (graph,node){
var self__ = this;
var graph__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.dependencies,node,cljs.core.PersistentHashSet.EMPTY);
}));

(weavejester.dependency.MapDependencyGraph.prototype.weavejester$dependency$DependencyGraph$immediate_dependents$arity$2 = (function (graph,node){
var self__ = this;
var graph__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.dependents,node,cljs.core.PersistentHashSet.EMPTY);
}));

(weavejester.dependency.MapDependencyGraph.prototype.weavejester$dependency$DependencyGraph$transitive_dependencies$arity$2 = (function (graph,node){
var self__ = this;
var graph__$1 = this;
return weavejester.dependency.transitive(self__.dependencies,cljs.core.PersistentHashSet.createAsIfByAssoc([node]));
}));

(weavejester.dependency.MapDependencyGraph.prototype.weavejester$dependency$DependencyGraph$transitive_dependencies_set$arity$2 = (function (graph,node_set){
var self__ = this;
var graph__$1 = this;
return weavejester.dependency.transitive(self__.dependencies,node_set);
}));

(weavejester.dependency.MapDependencyGraph.prototype.weavejester$dependency$DependencyGraph$transitive_dependents$arity$2 = (function (graph,node){
var self__ = this;
var graph__$1 = this;
return weavejester.dependency.transitive(self__.dependents,cljs.core.PersistentHashSet.createAsIfByAssoc([node]));
}));

(weavejester.dependency.MapDependencyGraph.prototype.weavejester$dependency$DependencyGraph$transitive_dependents_set$arity$2 = (function (graph,node_set){
var self__ = this;
var graph__$1 = this;
return weavejester.dependency.transitive(self__.dependents,node_set);
}));

(weavejester.dependency.MapDependencyGraph.prototype.weavejester$dependency$DependencyGraph$nodes$arity$1 = (function (graph){
var self__ = this;
var graph__$1 = this;
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(self__.dependencies)),cljs.core.set(cljs.core.keys(self__.dependents)));
}));

(weavejester.dependency.MapDependencyGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__42207){
var self__ = this;
var this__5342__auto____$1 = this;
return (new weavejester.dependency.MapDependencyGraph(self__.dependencies,self__.dependents,G__42207,self__.__extmap,self__.__hash));
}));

(weavejester.dependency.MapDependencyGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(weavejester.dependency.MapDependencyGraph.prototype.weavejester$dependency$DependencyGraphUpdate$ = cljs.core.PROTOCOL_SENTINEL);

(weavejester.dependency.MapDependencyGraph.prototype.weavejester$dependency$DependencyGraphUpdate$depend$arity$3 = (function (graph,node,dep){
var self__ = this;
var graph__$1 = this;
if(cljs.core.truth_((function (){var or__5045__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node,dep);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return (weavejester.dependency.depends_QMARK_.cljs$core$IFn$_invoke$arity$3 ? weavejester.dependency.depends_QMARK_.cljs$core$IFn$_invoke$arity$3(graph__$1,dep,node) : weavejester.dependency.depends_QMARK_.call(null,graph__$1,dep,node));
}
})())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Circular dependency between ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node], 0))," and ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dep], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword("weavejester.dependency","circular-dependency","weavejester.dependency/circular-dependency",463394013),new cljs.core.Keyword(null,"node","node",581201198),node,new cljs.core.Keyword(null,"dependency","dependency",1300131203),dep], null));
} else {
}

return (new weavejester.dependency.MapDependencyGraph(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(self__.dependencies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null),weavejester.dependency.set_conj,dep),cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(self__.dependents,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep], null),weavejester.dependency.set_conj,node),null,null,null));
}));

(weavejester.dependency.MapDependencyGraph.prototype.weavejester$dependency$DependencyGraphUpdate$remove_edge$arity$3 = (function (graph,node,dep){
var self__ = this;
var graph__$1 = this;
return (new weavejester.dependency.MapDependencyGraph(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(self__.dependencies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null),cljs.core.disj,dep),cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(self__.dependents,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep], null),cljs.core.disj,node),null,null,null));
}));

(weavejester.dependency.MapDependencyGraph.prototype.weavejester$dependency$DependencyGraphUpdate$remove_all$arity$2 = (function (graph,node){
var self__ = this;
var graph__$1 = this;
return (new weavejester.dependency.MapDependencyGraph(weavejester.dependency.remove_from_map(self__.dependencies,node),weavejester.dependency.remove_from_map(self__.dependents,node),null,null,null));
}));

(weavejester.dependency.MapDependencyGraph.prototype.weavejester$dependency$DependencyGraphUpdate$remove_node$arity$2 = (function (graph,node){
var self__ = this;
var graph__$1 = this;
return (new weavejester.dependency.MapDependencyGraph(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.dependencies,node),self__.dependents,null,null,null));
}));

(weavejester.dependency.MapDependencyGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dependencies","dependencies",-1546371164,null),new cljs.core.Symbol(null,"dependents","dependents",1777344364,null)], null);
}));

(weavejester.dependency.MapDependencyGraph.cljs$lang$type = true);

(weavejester.dependency.MapDependencyGraph.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"weavejester.dependency/MapDependencyGraph",null,(1),null));
}));

(weavejester.dependency.MapDependencyGraph.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"weavejester.dependency/MapDependencyGraph");
}));

/**
 * Positional factory function for weavejester.dependency/MapDependencyGraph.
 */
weavejester.dependency.__GT_MapDependencyGraph = (function weavejester$dependency$__GT_MapDependencyGraph(dependencies,dependents){
return (new weavejester.dependency.MapDependencyGraph(dependencies,dependents,null,null,null));
});

/**
 * Factory function for weavejester.dependency/MapDependencyGraph, taking a map of keywords to field values.
 */
weavejester.dependency.map__GT_MapDependencyGraph = (function weavejester$dependency$map__GT_MapDependencyGraph(G__42214){
var extmap__5385__auto__ = (function (){var G__42245 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__42214,new cljs.core.Keyword(null,"dependencies","dependencies",1108064605),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dependents","dependents",136812837)], 0));
if(cljs.core.record_QMARK_(G__42214)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__42245);
} else {
return G__42245;
}
})();
return (new weavejester.dependency.MapDependencyGraph(new cljs.core.Keyword(null,"dependencies","dependencies",1108064605).cljs$core$IFn$_invoke$arity$1(G__42214),new cljs.core.Keyword(null,"dependents","dependents",136812837).cljs$core$IFn$_invoke$arity$1(G__42214),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

/**
 * Returns a new, empty, dependency graph.
 */
weavejester.dependency.graph = (function weavejester$dependency$graph(){
return weavejester.dependency.__GT_MapDependencyGraph(cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * True if x is directly or transitively dependent on y.
 */
weavejester.dependency.depends_QMARK_ = (function weavejester$dependency$depends_QMARK_(graph,x,y){
return cljs.core.contains_QMARK_(weavejester.dependency.transitive_dependencies(graph,x),y);
});
/**
 * True if y is a dependent of x.
 */
weavejester.dependency.dependent_QMARK_ = (function weavejester$dependency$dependent_QMARK_(graph,x,y){
return cljs.core.contains_QMARK_(weavejester.dependency.transitive_dependents(graph,x),y);
});
/**
 * Returns a topologically-sorted list of nodes in graph. Takes an
 *   optional comparator to provide secondary sorting when the order of
 *   nodes is ambiguous.
 */
weavejester.dependency.topo_sort = (function weavejester$dependency$topo_sort(var_args){
var G__42250 = arguments.length;
switch (G__42250) {
case 1:
return weavejester.dependency.topo_sort.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return weavejester.dependency.topo_sort.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(weavejester.dependency.topo_sort.cljs$core$IFn$_invoke$arity$1 = (function (graph){
return weavejester.dependency.topo_sort.cljs$core$IFn$_invoke$arity$2(cljs.core.constantly((0)),graph);
}));

(weavejester.dependency.topo_sort.cljs$core$IFn$_invoke$arity$2 = (function (comp,graph){
var sorted = cljs.core.List.EMPTY;
var g = graph;
var todo = cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (sorted,g){
return (function (p1__42246_SHARP_){
return cljs.core.empty_QMARK_(weavejester.dependency.immediate_dependents(graph,p1__42246_SHARP_));
});})(sorted,g))
,weavejester.dependency.nodes(graph)));
while(true){
if(cljs.core.empty_QMARK_(todo)){
return sorted;
} else {
var vec__42267 = cljs.core.sort.cljs$core$IFn$_invoke$arity$2(((function (sorted,g,todo){
return (function (p1__42248_SHARP_,p2__42247_SHARP_){
return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(p2__42247_SHARP_,p1__42248_SHARP_) : comp.call(null,p2__42247_SHARP_,p1__42248_SHARP_));
});})(sorted,g,todo))
,todo);
var seq__42268 = cljs.core.seq(vec__42267);
var first__42269 = cljs.core.first(seq__42268);
var seq__42268__$1 = cljs.core.next(seq__42268);
var node = first__42269;
var more = seq__42268__$1;
var deps = weavejester.dependency.immediate_dependencies(g,node);
var vec__42270 = (function (){var deps__$1 = deps;
var g__$1 = g;
var add = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cljs.core.seq(deps__$1)){
var d = cljs.core.first(deps__$1);
var g_SINGLEQUOTE_ = weavejester.dependency.remove_edge(g__$1,node,d);
if(cljs.core.empty_QMARK_(weavejester.dependency.immediate_dependents(g_SINGLEQUOTE_,d))){
var G__42349 = cljs.core.rest(deps__$1);
var G__42350 = g_SINGLEQUOTE_;
var G__42351 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(add,d);
deps__$1 = G__42349;
g__$1 = G__42350;
add = G__42351;
continue;
} else {
var G__42352 = cljs.core.rest(deps__$1);
var G__42353 = g_SINGLEQUOTE_;
var G__42354 = add;
deps__$1 = G__42352;
g__$1 = G__42353;
add = G__42354;
continue;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [add,g__$1], null);
}
break;
}
})();
var add = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42270,(0),null);
var g_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42270,(1),null);
var G__42355 = cljs.core.cons(node,sorted);
var G__42356 = weavejester.dependency.remove_node(g_SINGLEQUOTE_,node);
var G__42357 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(more),cljs.core.set(add));
sorted = G__42355;
g = G__42356;
todo = G__42357;
continue;
}
break;
}
}));

(weavejester.dependency.topo_sort.cljs$lang$maxFixedArity = 2);

weavejester.dependency.max_number = Number.MAX_VALUE;
/**
 * Returns a comparator fn which produces a topological sort based on
 *   the dependencies in graph. Nodes not present in the graph will sort
 *   after nodes in the graph. Takes an optional secondary comparator to
 *   provide secondary sorting when the order of nodes is ambiguous.
 */
weavejester.dependency.topo_comparator = (function weavejester$dependency$topo_comparator(var_args){
var G__42276 = arguments.length;
switch (G__42276) {
case 1:
return weavejester.dependency.topo_comparator.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return weavejester.dependency.topo_comparator.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(weavejester.dependency.topo_comparator.cljs$core$IFn$_invoke$arity$1 = (function (graph){
return weavejester.dependency.topo_comparator.cljs$core$IFn$_invoke$arity$2(cljs.core.constantly((0)),graph);
}));

(weavejester.dependency.topo_comparator.cljs$core$IFn$_invoke$arity$2 = (function (comp,graph){
var pos = cljs.core.zipmap(weavejester.dependency.topo_sort.cljs$core$IFn$_invoke$arity$2(comp,graph),cljs.core.range.cljs$core$IFn$_invoke$arity$0());
return (function (a,b){
var pos_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pos,a);
var pos_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pos,b);
if((((pos_a == null)) && ((pos_b == null)))){
return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(a,b) : comp.call(null,a,b));
} else {
return cljs.core.compare((function (){var or__5045__auto__ = pos_a;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return weavejester.dependency.max_number;
}
})(),(function (){var or__5045__auto__ = pos_b;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return weavejester.dependency.max_number;
}
})());
}
});
}));

(weavejester.dependency.topo_comparator.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=weavejester.dependency.js.map
