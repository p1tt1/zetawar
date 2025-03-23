goog.provide('devcards.core');
goog.scope(function(){
  devcards.core.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
var module$node_modules$create_react_class$index=shadow.js.require("module$node_modules$create_react_class$index", {});
/**
 * @define {boolean}
 */
devcards.core.active = goog.define("devcards.core.active",false);
/**
 * @define {number}
 */
devcards.core.card_buffer_size = goog.define("devcards.core.card_buffer_size",(5000));
cljs.core.enable_console_print_BANG_();
if((typeof devcards !== 'undefined') && (typeof devcards.core !== 'undefined') && (typeof devcards.core.devcard_event_chan !== 'undefined')){
} else {
devcards.core.devcard_event_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer(devcards.core.card_buffer_size));
}
/**
 * Make a react Symbol the same way as React 0.14
 */
devcards.core.react_element_type_symbol = (function (){var or__5045__auto__ = (function (){var and__5043__auto__ = (typeof Symbol !== 'undefined');
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core.fn_QMARK_(Symbol);
if(and__5043__auto____$1){
var and__5043__auto____$2 = devcards.core.goog$module$goog$object.get(Symbol,"for");
if(cljs.core.truth_(and__5043__auto____$2)){
var fexpr__42461 = devcards.core.goog$module$goog$object.get(Symbol,"for");
return (fexpr__42461.cljs$core$IFn$_invoke$arity$1 ? fexpr__42461.cljs$core$IFn$_invoke$arity$1("react.element") : fexpr__42461.call(null,"react.element"));
} else {
return and__5043__auto____$2;
}
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
return (60103);
}
})();
/**
 * This event doesn't need to be fired for the system to run. It will just render
 * a little faster on reload if it is fired. Figwheel isn't required to run devcards.
 */
devcards.core.register_figwheel_listeners_BANG_ = (function devcards$core$register_figwheel_listeners_BANG_(){
if((typeof devcards !== 'undefined') && (typeof devcards.core !== 'undefined') && (typeof devcards.core.register_listeners_fig !== 'undefined')){
return null;
} else {
return (
devcards.core.register_listeners_fig = (function (){
document.body.addEventListener("figwheel.js-reload",(function (p1__42464_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsreload","jsreload",331693051),p1__42464_SHARP_.detail], null));
}));

return true;
})()
)
;
}
});
devcards.core.assert_options_map = (function devcards$core$assert_options_map(m){
if((!((((m == null)) || (cljs.core.map_QMARK_(m)))))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),m], null)], null)], null);
} else {
return m;
}
});
devcards.core.start_devcard_ui_BANG__STAR_ = (function devcards$core$start_devcard_ui_BANG__STAR_(var_args){
var G__42467 = arguments.length;
switch (G__42467) {
case 0:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}));

(devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1 = (function (options){
if(((cljs.core.map_QMARK_(options)) && (cljs.core.map_QMARK_(new cljs.core.Keyword(null,"default-card-options","default-card-options",1708667352).cljs$core$IFn$_invoke$arity$1(options))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756)], null),(function (opts){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.Keyword(null,"default-card-options","default-card-options",1708667352).cljs$core$IFn$_invoke$arity$1(options)], 0));
}));
} else {
}

devcards.system.start_ui(devcards.core.devcard_event_chan);

return devcards.core.register_figwheel_listeners_BANG_();
}));

(devcards.core.start_devcard_ui_BANG__STAR_.cljs$lang$maxFixedArity = 1);

devcards.core.card_QMARK_ = (function devcards$core$card_QMARK_(c){
var and__5043__auto__ = cljs.core.map_QMARK_(c);
if(and__5043__auto__){
var map__42468 = c;
var map__42468__$1 = cljs.core.__destructure_map(map__42468);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42468__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var func = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42468__$1,new cljs.core.Keyword(null,"func","func",-238706040));
cljs.core.vector_QMARK_(path);

cljs.core.not_empty(path);

cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,path);

return cljs.core.fn_QMARK_(func);
} else {
return and__5043__auto__;
}
});
devcards.core.register_card = (function devcards$core$register_card(c){
if(devcards.core.card_QMARK_(c)){
} else {
throw (new Error("Assert failed: (card? c)"));
}


return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"register-card","register-card",-1375971588),c], null));
});
devcards.core.react_raw = (function devcards$core$react_raw(raw_html_str){

return module$node_modules$react$index.createElement("div",({"key": cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(raw_html_str)), "dangerouslySetInnerHTML": ({"__html": raw_html_str})}));
});

devcards.core.highlight_node = (function devcards$core$highlight_node(this$){
if(cljs.core.truth_(goog.labs.userAgent.device.isMobile())){
return null;
} else {
var temp__5823__auto__ = (devcards.core.ref__GT_node.cljs$core$IFn$_invoke$arity$2 ? devcards.core.ref__GT_node.cljs$core$IFn$_invoke$arity$2(this$,"code-ref") : devcards.core.ref__GT_node.call(null,this$,"code-ref"));
if(cljs.core.truth_(temp__5823__auto__)){
var node = temp__5823__auto__;
return DevcardsSyntaxHighlighter.highlightBlock(node);
} else {
return null;
}
}
});
devcards.core.CodeHighlight = (function (){var ctor__39106__auto__ = (function (props__39103__auto__){
var this__39104__auto__ = this;
devcards.util.utils.react_holder.Component.call(this__39104__auto__,props__39103__auto__);

return this__39104__auto__;
});
goog.inherits(ctor__39106__auto__,devcards.util.utils.react_holder.Component);

var x42473_43344 = ctor__39106__auto__.prototype;
(x42473_43344.componentDidMount = (function (){
var this$ = this;
return devcards.core.highlight_node(this$);
}));

(x42473_43344.componentDidUpdate = (function (){
var this$ = this;
return devcards.core.highlight_node(this$);
}));

(x42473_43344.render = (function (){
var this$ = this;
var G__42475 = "pre";
var G__42476 = ({"className": ((cljs.core.not(goog.labs.userAgent.device.isMobile()))?"com-rigsomelight-devcards-code-highlighting":""), "key": cljs.core.hash((devcards.core.get_props.cljs$core$IFn$_invoke$arity$2 ? devcards.core.get_props.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"code","code",1586293142)) : devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142))))});
var G__42477 = (function (){var G__42479 = "code";
var G__42481 = ({"className": (function (){var or__5045__auto__ = (devcards.core.get_props.cljs$core$IFn$_invoke$arity$2 ? devcards.core.get_props.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"lang","lang",-1819677104)) : devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"lang","lang",-1819677104)));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})(), "ref": "code-ref"});
var G__42482 = sablono.interpreter.interpret((devcards.core.get_props.cljs$core$IFn$_invoke$arity$2 ? devcards.core.get_props.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"code","code",1586293142)) : devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142))));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__42479,G__42481,G__42482) : sablono.core.create_element.call(null,G__42479,G__42481,G__42482));
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__42475,G__42476,G__42477) : sablono.core.create_element.call(null,G__42475,G__42476,G__42477));
}));


return ctor__39106__auto__;
})();

(devcards.core.CodeHighlight.displayName = cljs.core.name(new cljs.core.Symbol(null,"CodeHighlight","CodeHighlight",-2140212327,null)));
devcards.core.code_highlight = (function devcards$core$code_highlight(code_str,lang){
return module$node_modules$react$index.createElement(devcards.core.CodeHighlight,({"code": code_str, "lang": lang}));
});
if((typeof devcards !== 'undefined') && (typeof devcards.core !== 'undefined') && (typeof devcards.core.markdown_block__GT_react !== 'undefined')){
} else {
devcards.core.markdown_block__GT_react = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__42485 = cljs.core.get_global_hierarchy;
return (fexpr__42485.cljs$core$IFn$_invoke$arity$0 ? fexpr__42485.cljs$core$IFn$_invoke$arity$0() : fexpr__42485.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devcards.core","markdown-block->react"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
devcards.core.markdown_block__GT_react.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__42487){
var map__42488 = p__42487;
var map__42488__$1 = cljs.core.__destructure_map(map__42488);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42488__$1,new cljs.core.Keyword(null,"content","content",15833224));
return devcards.core.react_raw(devcards.util.markdown.markdown_to_html(content));
}));
devcards.core.markdown_block__GT_react.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"code-block","code-block",-2113425141),(function (p__42489){
var map__42490 = p__42489;
var map__42490__$1 = cljs.core.__destructure_map(map__42490);
var block = map__42490__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42490__$1,new cljs.core.Keyword(null,"content","content",15833224));
return module$node_modules$react$index.createElement(devcards.core.CodeHighlight,({"code": new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(block), "lang": new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(block)}));
}));
devcards.core.markdown__GT_react = (function devcards$core$markdown__GT_react(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43350 = arguments.length;
var i__5770__auto___43351 = (0);
while(true){
if((i__5770__auto___43351 < len__5769__auto___43350)){
args__5775__auto__.push((arguments[i__5770__auto___43351]));

var G__43352 = (i__5770__auto___43351 + (1));
i__5770__auto___43351 = G__43352;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic = (function (strs){
var strs__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
if(typeof x === 'string'){
return x;
} else {
if(cljs.core.truth_((devcards.core.react_element_QMARK_.cljs$core$IFn$_invoke$arity$1 ? devcards.core.react_element_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : devcards.core.react_element_QMARK_.call(null,x)))){
return null;
} else {
return ["```clojure\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devcards.util.utils.pprint_code(x)),"```\n"].join('');
}
}
}),strs);
if(cljs.core.every_QMARK_(cljs.core.string_QMARK_,strs__$1)){
var blocks = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(devcards.util.markdown.parse_out_blocks,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([strs__$1], 0));
var G__42499 = "div";
var G__42500 = ({"key": "devcards-markdown-block", "className": "com-rigsomelight-devcards-markdown com-rigsomelight-devcards-typog"});
var G__42501 = sablono.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,data){
var G__42503 = "div";
var G__42504 = ({"key": i});
var G__42505 = sablono.interpreter.interpret(devcards.core.markdown_block__GT_react.cljs$core$IFn$_invoke$arity$1(data));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__42503,G__42504,G__42505) : sablono.core.create_element.call(null,G__42503,G__42504,G__42505));
}),blocks));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__42499,G__42500,G__42501) : sablono.core.create_element.call(null,G__42499,G__42500,G__42501));
} else {
var message = "Devcards Error: Didn't pass a seq of strings to less-sensitive-markdown.\n You are probably trying to pass react to markdown instead of strings. (defcard-doc (doc ...)) won't work.";
console.error(message);

var G__42506 = "div";
var G__42507 = ({"style": ({"color": "#a94442"}), "key": "devcards-markdown-error"});
var G__42508 = sablono.interpreter.interpret(message);
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__42506,G__42507,G__42508) : sablono.core.create_element.call(null,G__42506,G__42507,G__42508));
}
}));

(devcards.core.markdown__GT_react.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devcards.core.markdown__GT_react.cljs$lang$applyTo = (function (seq42491){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42491));
}));

devcards.core.naked_card = (function devcards$core$naked_card(children,card){
var classname = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"classname","classname",777390796)], null));
var padding_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"padding","padding",1660304693)], null));
var G__42511 = "div";
var G__42512 = ({"key": "devcards_naked-card", "className": (function (){var G__42515 = devcards.system.devcards_rendered_card_class;
var G__42515__$1 = (cljs.core.truth_(padding_QMARK_)?[G__42515," com-rigsomelight-devcards-devcard-padding"].join(''):G__42515);
if(cljs.core.truth_(cljs.core.not_empty(classname))){
return [G__42515__$1," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(classname)].join('');
} else {
return G__42515__$1;
}
})()});
var G__42513 = sablono.interpreter.interpret(children);
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__42511,G__42512,G__42513) : sablono.core.create_element.call(null,G__42511,G__42512,G__42513));
});
devcards.core.frame = (function devcards$core$frame(var_args){
var G__42519 = arguments.length;
switch (G__42519) {
case 1:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(devcards.core.frame.cljs$core$IFn$_invoke$arity$1 = (function (children){
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2(children,cljs.core.PersistentArrayMap.EMPTY);
}));

(devcards.core.frame.cljs$core$IFn$_invoke$arity$2 = (function (children,card){
var map__42520 = card;
var map__42520__$1 = cljs.core.__destructure_map(map__42520);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42520__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42520__$1,new cljs.core.Keyword(null,"options","options",99638489));
if(cljs.core.not(new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(options))){
if(new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(options) === false){
var G__42521 = "div";
var G__42522 = ({"key": cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0)), "className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["com-rigsomelight-devcards-card-base-no-pad ",(cljs.core.truth_(new cljs.core.Keyword(null,"hide-border","hide-border",1463657151).cljs$core$IFn$_invoke$arity$1(options))?" com-rigsomelight-devcards-card-hide-border":null)].join('')], null))});
var G__42523 = sablono.interpreter.interpret(devcards.core.naked_card(children,card));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__42521,G__42522,G__42523) : sablono.core.create_element.call(null,G__42521,G__42522,G__42523));
} else {
var G__42528 = "div";
var G__42529 = ({"key": cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0)), "className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad"});
var G__42530 = (function (){var G__42532 = "div";
var G__42533 = ({"key": "devcards_frame-normal-body", "className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-typog"});
var G__42534 = (cljs.core.truth_(path)?sablono.interpreter.interpret((function (){var G__42536 = "a";
var G__42537 = ({"href": "#", "onClick": devcards.system.prevent__GT_((function (){
return devcards.system.set_current_path_BANG_(devcards.system.app_state,path);
}))});
var G__42538 = sablono.interpreter.interpret(cljs.core.name(cljs.core.last(path)));
var G__42539 = " ";
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$4 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$4(G__42536,G__42537,G__42538,G__42539) : sablono.core.create_element.call(null,G__42536,G__42537,G__42538,G__42539));
})()):sablono.interpreter.interpret((function (){var attrs42544 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(card);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"span",((cljs.core.map_QMARK_(attrs42544))?sablono.interpreter.attributes(attrs42544):null),((cljs.core.map_QMARK_(attrs42544))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs42544)], null)));
})()));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__42532,G__42533,G__42534) : sablono.core.create_element.call(null,G__42532,G__42533,G__42534));
})();
var G__42531 = sablono.interpreter.interpret(devcards.core.naked_card(children,card));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$4 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$4(G__42528,G__42529,G__42530,G__42531) : sablono.core.create_element.call(null,G__42528,G__42529,G__42530,G__42531));
}
} else {
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$2 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$2("span",null) : sablono.core.create_element.call(null,"span",null));
}
}));

(devcards.core.frame.cljs$lang$maxFixedArity = 2);


/**
 * @interface
 */
devcards.core.IDevcardOptions = function(){};

var devcards$core$IDevcardOptions$_devcard_options$dyn_43362 = (function (this$,devcard_opts){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (devcards.core._devcard_options[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,devcard_opts) : m__5394__auto__.call(null,this$,devcard_opts));
} else {
var m__5392__auto__ = (devcards.core._devcard_options["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,devcard_opts) : m__5392__auto__.call(null,this$,devcard_opts));
} else {
throw cljs.core.missing_protocol("IDevcardOptions.-devcard-options",this$);
}
}
});
devcards.core._devcard_options = (function devcards$core$_devcard_options(this$,devcard_opts){
if((((!((this$ == null)))) && ((!((this$.devcards$core$IDevcardOptions$_devcard_options$arity$2 == null)))))){
return this$.devcards$core$IDevcardOptions$_devcard_options$arity$2(this$,devcard_opts);
} else {
return devcards$core$IDevcardOptions$_devcard_options$dyn_43362(this$,devcard_opts);
}
});


/**
 * @interface
 */
devcards.core.IDevcard = function(){};

var devcards$core$IDevcard$_devcard$dyn_43363 = (function (this$,devcard_opts){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (devcards.core._devcard[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,devcard_opts) : m__5394__auto__.call(null,this$,devcard_opts));
} else {
var m__5392__auto__ = (devcards.core._devcard["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,devcard_opts) : m__5392__auto__.call(null,this$,devcard_opts));
} else {
throw cljs.core.missing_protocol("IDevcard.-devcard",this$);
}
}
});
devcards.core._devcard = (function devcards$core$_devcard(this$,devcard_opts){
if((((!((this$ == null)))) && ((!((this$.devcards$core$IDevcard$_devcard$arity$2 == null)))))){
return this$.devcards$core$IDevcard$_devcard$arity$2(this$,devcard_opts);
} else {
return devcards$core$IDevcard$_devcard$dyn_43363(this$,devcard_opts);
}
});

devcards.core.ref__GT_node = (function devcards$core$ref__GT_node(this$,ref){
var temp__5823__auto__ = devcards.core.goog$module$goog$object.get(this$.refs,ref);
if(cljs.core.truth_(temp__5823__auto__)){
var comp = temp__5823__auto__;
return module$node_modules$react_dom$index.findDOMNode(comp);
} else {
return null;
}
});
devcards.core.get_props = (function devcards$core$get_props(this$,k){
return devcards.core.goog$module$goog$object.get(this$.props,cljs.core.name(k));
});
devcards.core.get_state = (function devcards$core$get_state(this$,k){
if(cljs.core.truth_(this$.state)){
return devcards.core.goog$module$goog$object.get(this$.state,cljs.core.name(k));
} else {
return null;
}
});
devcards.core.DontUpdate = (function (){var ctor__39106__auto__ = (function (props__39103__auto__){
var this__39104__auto__ = this;
devcards.util.utils.react_holder.Component.call(this__39104__auto__,props__39103__auto__);

return this__39104__auto__;
});
goog.inherits(ctor__39106__auto__,devcards.util.utils.react_holder.Component);

var x42595_43365 = ctor__39106__auto__.prototype;
(x42595_43365.shouldComponentUpdate = (function (next_props,b){
var this$ = this;
var update_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(devcards.core.goog$module$goog$object.get(next_props,"change_count"),devcards.core.get_props(this$,new cljs.core.Keyword(null,"change_count","change_count",-533812109)));
return update_QMARK_;
}));

(x42595_43365.render = (function (){
var this$ = this;
var attrs42597 = devcards.core.get_props(this$,new cljs.core.Keyword(null,"children_thunk","children_thunk",-1161306645));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"div",((cljs.core.map_QMARK_(attrs42597))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-dont-update"], null)], null),attrs42597], 0))):({"className": "com-rigsomelight-dont-update"})),((cljs.core.map_QMARK_(attrs42597))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs42597)], null)));
}));


return ctor__39106__auto__;
})();

(devcards.core.DontUpdate.displayName = cljs.core.name(new cljs.core.Symbol(null,"DontUpdate","DontUpdate",-547080925,null)));
devcards.core.dont_update = (function devcards$core$dont_update(change_count,children_thunk){
return module$node_modules$react$index.createElement(devcards.core.DontUpdate,({"change_count": change_count, "children_thunk": children_thunk}));
});
devcards.core.wrangle_inital_data = (function devcards$core$wrangle_inital_data(this$){
var data = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(devcards.core.get_props(this$,new cljs.core.Keyword(null,"card","card",-1430355152)));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
if((((!((data == null))))?(((((data.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === data.cljs$core$IAtom$))))?true:(((!data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,data):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,data))){
return data;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(data);
}
});
devcards.core.get_data_atom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_())?(function (this$){
return devcards.core.get_state(this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
}):(function (this$){
return devcards.core.wrangle_inital_data(this$);
}));
devcards.core.default_derive_main = (function devcards$core$default_derive_main(parent_elem,card,data_atom,change_count){
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
var main_obj_SINGLEQUOTE_ = (function (){var m = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.fn_QMARK_(m)){
return (m.cljs$core$IFn$_invoke$arity$2 ? m.cljs$core$IFn$_invoke$arity$2(data_atom,parent_elem) : m.call(null,data_atom,parent_elem));
} else {
return m;
}
})();
var main_obj = (((((!((main_obj_SINGLEQUOTE_ == null)))) && (cljs.core.not((devcards.core.react_element_QMARK_.cljs$core$IFn$_invoke$arity$1 ? devcards.core.react_element_QMARK_.cljs$core$IFn$_invoke$arity$1(main_obj_SINGLEQUOTE_) : devcards.core.react_element_QMARK_.call(null,main_obj_SINGLEQUOTE_))))))?devcards.core.code_highlight(devcards.util.utils.pprint_code(main_obj_SINGLEQUOTE_),"clojure"):main_obj_SINGLEQUOTE_);
if(new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308).cljs$core$IFn$_invoke$arity$1(options) === false){
return devcards.core.dont_update(change_count,main_obj);
} else {
return main_obj;
}
});
devcards.core.render_all_card_elements = (function devcards$core$render_all_card_elements(main,data_atom,card){
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
var project = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"projection","projection",-412523042).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.identity;
}
})();
var hist_ctl = (cljs.core.truth_(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(options))?(devcards.core.hist_recorder_STAR_.cljs$core$IFn$_invoke$arity$1 ? devcards.core.hist_recorder_STAR_.cljs$core$IFn$_invoke$arity$1(data_atom) : devcards.core.hist_recorder_STAR_.call(null,data_atom)):null);
var document__$1 = (function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(temp__5823__auto__)){
var docu = temp__5823__auto__;
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([docu], 0));
} else {
return null;
}
})();
var edn = (cljs.core.truth_(new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006).cljs$core$IFn$_invoke$arity$1(options))?devcards.util.edn_renderer.html_edn((function (){var G__42625 = cljs.core.deref(data_atom);
return (project.cljs$core$IFn$_invoke$arity$1 ? project.cljs$core$IFn$_invoke$arity$1(G__42625) : project.call(null,G__42625));
})()):null);
var card__$1 = ((((typeof main === 'string') || ((main == null))))?cljs.core.assoc_in(card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"hide-border","hide-border",1463657151)], null),true):card);
var main__$1 = (function (){var G__42626 = "div";
var G__42627 = ({"key": "devcards-main-section"});
var G__42628 = sablono.interpreter.interpret(main);
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__42626,G__42627,G__42628) : sablono.core.create_element.call(null,G__42626,G__42627,G__42628));
})();
var children = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,(new cljs.core.List(null,document__$1,(new cljs.core.List(null,main__$1,(new cljs.core.List(null,hist_ctl,(new cljs.core.List(null,edn,null,(1),null)),(2),null)),(3),null)),(4),null)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(options))){
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2(children,card__$1);
} else {
var G__42629 = "div";
var G__42630 = ({"className": "com-rigsomelight-devcards-frameless"});
var G__42631 = sablono.interpreter.interpret(children);
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__42629,G__42630,G__42631) : sablono.core.create_element.call(null,G__42629,G__42630,G__42631));
}
});
devcards.core.DevcardBase = (function (){var ctor__39106__auto__ = (function (props__39101__auto__){
var this__39102__auto__ = this;
devcards.util.utils.react_holder.Component.call(this__39102__auto__,props__39101__auto__);

(function (props){
var this$ = this;
return (this$.state = ({"unique_id": cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"devcards-base-","devcards-base-",-1457268595,null)), "state_change_count": (0)}));
}).call(this__39102__auto__,props__39101__auto__);

return this__39102__auto__;
});
goog.inherits(ctor__39106__auto__,devcards.util.utils.react_holder.Component);

var x42636_43387 = ctor__39106__auto__.prototype;
(x42636_43387.componentDidUpdate = (function (_,___$1){
var this$ = this;
var atom = devcards.core.get_state(this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var card = devcards.core.get_props(this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(new cljs.core.Keyword(null,"static-state","static-state",-1049492012).cljs$core$IFn$_invoke$arity$1(options))){
var initial_data = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(card);
var data = (cljs.core.truth_((devcards.core.atom_like_QMARK_.cljs$core$IFn$_invoke$arity$1 ? devcards.core.atom_like_QMARK_.cljs$core$IFn$_invoke$arity$1(initial_data) : devcards.core.atom_like_QMARK_.call(null,initial_data)))?cljs.core.deref(initial_data):initial_data);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(atom),data)){
return cljs.core.reset_BANG_(atom,data);
} else {
return null;
}
} else {
return null;
}
}));

(x42636_43387.componentWillMount = (function (){
var this$ = this;
if(cljs.core.truth_(devcards.util.utils.html_env_QMARK_())){
return this$.setState((function (){var or__5045__auto__ = (function (){var and__5043__auto__ = devcards.core.get_state(this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(and__5043__auto__)){
return this$.state;
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return ({"data_atom": devcards.core.wrangle_inital_data(this$)});
}
})());
} else {
return null;
}
}));

(x42636_43387.componentWillUnmount = (function (){
var this$ = this;
var data_atom = devcards.core.get_state(this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state(this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
if(cljs.core.truth_((function (){var and__5043__auto__ = data_atom;
if(cljs.core.truth_(and__5043__auto__)){
return id;
} else {
return and__5043__auto__;
}
})())){
return cljs.core.remove_watch(data_atom,id);
} else {
return null;
}
}));

(x42636_43387.componentDidMount = (function (){
var this$ = this;
if(cljs.core.truth_(devcards.util.utils.html_env_QMARK_())){
var temp__5823__auto__ = devcards.core.get_state(this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(temp__5823__auto__)){
var data_atom = temp__5823__auto__;
var temp__5823__auto____$1 = devcards.core.get_state(this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
if(cljs.core.truth_(temp__5823__auto____$1)){
var id = temp__5823__auto____$1;
return cljs.core.add_watch(data_atom,id,(function (_,___$1,___$2,___$3){
return this$.setState(({"state_change_count": (devcards.core.get_state(this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612)) + (1))}));
}));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}));

(x42636_43387.render = (function (){
var this$ = this;
var data_atom = devcards.core.get_data_atom(this$);
var card = devcards.core.get_props(this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var change_count = devcards.core.get_state(this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612));
var main = devcards.core.default_derive_main(this$,card,data_atom,change_count);
return devcards.core.render_all_card_elements(main,data_atom,card);
}));


return ctor__39106__auto__;
})();

(devcards.core.DevcardBase.displayName = cljs.core.name(new cljs.core.Symbol(null,"DevcardBase","DevcardBase",-1441442980,null)));
devcards.core.render_into_dom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_())?(function (this$){
var temp__5823__auto__ = devcards.core.get_props(this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(temp__5823__auto__)){
var node_fn = temp__5823__auto__;
var temp__5823__auto____$1 = devcards.core.ref__GT_node(this$,devcards.core.get_state(this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329)));
if(cljs.core.truth_(temp__5823__auto____$1)){
var node = temp__5823__auto____$1;
var G__42657 = devcards.core.get_props(this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var G__42658 = node;
return (node_fn.cljs$core$IFn$_invoke$arity$2 ? node_fn.cljs$core$IFn$_invoke$arity$2(G__42657,G__42658) : node_fn.call(null,G__42657,G__42658));
} else {
return null;
}
} else {
return null;
}
}):cljs.core.identity);
devcards.core.DomComponent = (function (){var ctor__39106__auto__ = (function (props__39101__auto__){
var this__39102__auto__ = this;
devcards.util.utils.react_holder.Component.call(this__39102__auto__,props__39101__auto__);

(function (props){
var this$ = this;
return (this$.state = ({"unique_id": cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"devcards-dom-component-","devcards-dom-component-",-730322144,null)))}));
}).call(this__39102__auto__,props__39101__auto__);

return this__39102__auto__;
});
goog.inherits(ctor__39106__auto__,devcards.util.utils.react_holder.Component);

var x42666_43394 = ctor__39106__auto__.prototype;
(x42666_43394.componentDidUpdate = (function (prevP,prevS){
var this$ = this;
if(cljs.core.truth_((function (){var and__5043__auto__ = devcards.core.get_props(this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(devcards.core.get_props(this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791)),devcards.core.goog$module$goog$object.get(prevP,"node_fn"));
} else {
return and__5043__auto__;
}
})())){
return (devcards.core.render_into_dom.cljs$core$IFn$_invoke$arity$1 ? devcards.core.render_into_dom.cljs$core$IFn$_invoke$arity$1(this$) : devcards.core.render_into_dom.call(null,this$));
} else {
return null;
}
}));

(x42666_43394.componentWillUnmount = (function (){
var this$ = this;
var temp__5823__auto__ = devcards.core.ref__GT_node(this$,devcards.core.get_state(this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329)));
if(cljs.core.truth_(temp__5823__auto__)){
var node = temp__5823__auto__;
return module$node_modules$react_dom$index.unmountComponentAtNode(node);
} else {
return null;
}
}));

(x42666_43394.componentDidMount = (function (){
var this$ = this;
return (devcards.core.render_into_dom.cljs$core$IFn$_invoke$arity$1 ? devcards.core.render_into_dom.cljs$core$IFn$_invoke$arity$1(this$) : devcards.core.render_into_dom.call(null,this$));
}));

(x42666_43394.render = (function (){
var this$ = this;
if(cljs.core.truth_(devcards.util.utils.html_env_QMARK_())){
return module$node_modules$react$index.createElement("div",({"className": "com-rigsomelight-devcards-dom-node", "ref": devcards.core.get_state(this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329))}),"Card has not mounted DOM node.");
} else {
return module$node_modules$react$index.createElement("div",null,"Card has not mounted DOM node.");
}
}));


return ctor__39106__auto__;
})();

(devcards.core.DomComponent.displayName = cljs.core.name(new cljs.core.Symbol(null,"DomComponent","DomComponent",-1557765022,null)));
devcards.core.booler_QMARK_ = (function devcards$core$booler_QMARK_(key,opts){
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,key);
var or__5045__auto__ = x === true;
if(or__5045__auto__){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = x === false;
if(or__5045__auto____$1){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = (x == null);
if(or__5045__auto____$2){
return or__5045__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be boolean or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
}
});
devcards.core.stringer_QMARK_ = (function devcards$core$stringer_QMARK_(key,opts){
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,key);
var or__5045__auto__ = typeof x === 'string';
if(or__5045__auto__){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = (x == null);
if(or__5045__auto____$1){
return or__5045__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be string or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
});
devcards.core.react_element_QMARK_ = (function devcards$core$react_element_QMARK_(main_obj){
var or__5045__auto__ = devcards.core.goog$module$goog$object.get(main_obj,"_isReactElement");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(devcards.core.react_element_type_symbol,devcards.core.goog$module$goog$object.get(main_obj,"$$typeof"));
}
});
devcards.core.validate_card_options = (function devcards$core$validate_card_options(opts){
if(cljs.core.map_QMARK_(opts)){
var propagated_errors = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)], null));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__42674_SHARP_){
return (!(p1__42674_SHARP_ === true));
}),(function (){var map__42678 = opts;
var map__42678__$1 = cljs.core.__destructure_map(map__42678);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42678__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var main_obj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42678__$1,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742));
var initial_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42678__$1,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42678__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(propagated_errors,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__5045__auto__ = cljs.core.map_QMARK_(options);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = (options == null);
if(or__5045__auto____$1){
return or__5045__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil",new cljs.core.Keyword(null,"value","value",305978217),options], null);
}
}
})(),devcards.core.stringer_QMARK_(new cljs.core.Keyword(null,"name","name",1843675177),opts),devcards.core.stringer_QMARK_(new cljs.core.Keyword(null,"documentation","documentation",1889593999),opts),(function (){var or__5045__auto__ = (initial_data == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = cljs.core.vector_QMARK_(initial_data);
if(or__5045__auto____$1){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = cljs.core.map_QMARK_(initial_data);
if(or__5045__auto____$2){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = (((!((initial_data == null))))?(((((initial_data.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === initial_data.cljs$core$IAtom$))))?true:(((!initial_data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,initial_data):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,initial_data));
if(or__5045__auto____$3){
return or__5045__auto____$3;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.Keyword(null,"message","message",-406056002),"should be an Atom or a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),initial_data], null);
}
}
}
}
})()], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__42675_SHARP_){
return devcards.core.booler_QMARK_(p1__42675_SHARP_,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(opts));
}),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"heading","heading",-1312171873),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"static-state","static-state",-1049492012)], null))], 0));
})());
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Card should be a Map.",new cljs.core.Keyword(null,"value","value",305978217),opts], null)], null);
}
});
devcards.core.error_line = (function devcards$core$error_line(e){
var G__42709 = "div";
var G__42710 = ({"style": ({"color": "#a94442", "display": "flex", "margin": "0.5em 0px"})});
var G__42711 = sablono.interpreter.interpret((function (){var G__42716 = "code";
var G__42717 = ({"style": ({"flex": "1 100px", "marginRight": "10px"})});
var G__42718 = (cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e))?sablono.interpreter.interpret(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e)], 0))):null);
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__42716,G__42717,G__42718) : sablono.core.create_element.call(null,G__42716,G__42717,G__42718));
})());
var G__42712 = (function (){var G__42719 = "span";
var G__42720 = ({"style": ({"flex": "3 100px", "marginRight": "10px"})});
var G__42721 = sablono.interpreter.interpret(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(e));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__42719,G__42720,G__42721) : sablono.core.create_element.call(null,G__42719,G__42720,G__42721));
})();
var G__42713 = (function (){var G__42723 = "span";
var G__42724 = ({"style": ({"flex": "1 100px"})});
var G__42725 = " Received: ";
var G__42726 = (function (){var attrs42722 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(e)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"code",((cljs.core.map_QMARK_(attrs42722))?sablono.interpreter.attributes(attrs42722):null),((cljs.core.map_QMARK_(attrs42722))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs42722)], null)));
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$4 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$4(G__42723,G__42724,G__42725,G__42726) : sablono.core.create_element.call(null,G__42723,G__42724,G__42725,G__42726));
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$5 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$5(G__42709,G__42710,G__42711,G__42712,G__42713) : sablono.core.create_element.call(null,G__42709,G__42710,G__42711,G__42712,G__42713));
});
devcards.core.render_errors = (function devcards$core$render_errors(opts,errors){
var G__42736 = "div";
var G__42737 = ({"className": "com-rigsomelight-devcards-card-base-no-pad"});
var G__42738 = (function (){var attrs42735 = [((((cljs.core.map_QMARK_(opts)) && (typeof new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts) === 'string')))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts)),": "].join(''):null),"Devcard received bad options"].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"div",((cljs.core.map_QMARK_(attrs42735))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-panel-heading","com-rigsomelight-devcards-fail"], null)], null),attrs42735], 0))):({"className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-fail"})),((cljs.core.map_QMARK_(attrs42735))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs42735)], null)));
})();
var G__42739 = sablono.interpreter.interpret(devcards.core.naked_card((function (){var G__42743 = "div";
var G__42744 = null;
var G__42745 = (function (){var attrs42740 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(devcards.core.error_line,errors);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"div",((cljs.core.map_QMARK_(attrs42740))?sablono.interpreter.attributes(attrs42740):null),((cljs.core.map_QMARK_(attrs42740))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs42740)], null)));
})();
var G__42746 = ((cljs.core.map_QMARK_(opts))?sablono.interpreter.interpret((function (){var attrs42753 = devcards.util.edn_renderer.html_edn(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"div",((cljs.core.map_QMARK_(attrs42753))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-padding-top-border"], null)], null),attrs42753], 0))):({"className": "com-rigsomelight-devcards-padding-top-border"})),((cljs.core.map_QMARK_(attrs42753))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs42753)], null)));
})()):null);
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$4 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$4(G__42743,G__42744,G__42745,G__42746) : sablono.core.create_element.call(null,G__42743,G__42744,G__42745,G__42746));
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),true], null)], null)));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$4 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$4(G__42736,G__42737,G__42738,G__42739) : sablono.core.create_element.call(null,G__42736,G__42737,G__42738,G__42739));
});
devcards.core.add_environment_defaults = (function devcards$core$add_environment_defaults(card_options){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(card_options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),(function (p1__42754_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(devcards.system.app_state)),p1__42754_SHARP_], 0));
}));
});
devcards.core.card_with_errors = (function devcards$core$card_with_errors(card_options){
var errors = devcards.core.validate_card_options(card_options);
if(cljs.core.truth_(cljs.core.not_empty(errors))){
return devcards.core.render_errors(card_options,errors);
} else {
return module$node_modules$react$index.createElement(devcards.core.DevcardBase,({"card": devcards.core.add_environment_defaults(card_options)}));
}
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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.IdentityOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(devcards.core.IdentityOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(devcards.core.IdentityOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k42756,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__42760 = k42756;
var G__42760__$1 = (((G__42760 instanceof cljs.core.Keyword))?G__42760.fqn:null);
switch (G__42760__$1) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k42756,else__5346__auto__);

}
}));

(devcards.core.IdentityOptions.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__42761){
var vec__42762 = p__42761;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42762,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42762,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(devcards.core.IdentityOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#devcards.core.IdentityOptions{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
}));

(devcards.core.IdentityOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42755){
var self__ = this;
var G__42755__$1 = this;
return (new cljs.core.RecordIter((0),G__42755__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(devcards.core.IdentityOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(devcards.core.IdentityOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new devcards.core.IdentityOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
}));

(devcards.core.IdentityOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(devcards.core.IdentityOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-550579441 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(devcards.core.IdentityOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42757,other42758){
var self__ = this;
var this42757__$1 = this;
return (((!((other42758 == null)))) && ((((this42757__$1.constructor === other42758.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42757__$1.obj,other42758.obj)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42757__$1.__extmap,other42758.__extmap)))))));
}));

(devcards.core.IdentityOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new devcards.core.IdentityOptions(self__.obj,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(devcards.core.IdentityOptions.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k42756){
var self__ = this;
var this__5350__auto____$1 = this;
var G__42766 = k42756;
var G__42766__$1 = (((G__42766 instanceof cljs.core.Keyword))?G__42766.fqn:null);
switch (G__42766__$1) {
case "obj":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k42756);

}
}));

(devcards.core.IdentityOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__42755){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__42767 = cljs.core.keyword_identical_QMARK_;
var expr__42768 = k__5352__auto__;
if(cljs.core.truth_((pred__42767.cljs$core$IFn$_invoke$arity$2 ? pred__42767.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"obj","obj",981763962),expr__42768) : pred__42767.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__42768)))){
return (new devcards.core.IdentityOptions(G__42755,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.IdentityOptions(self__.obj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__42755),null));
}
}));

(devcards.core.IdentityOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj,null))], null),self__.__extmap));
}));

(devcards.core.IdentityOptions.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(devcards.core.IdentityOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return opts;
}));

(devcards.core.IdentityOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__42755){
var self__ = this;
var this__5342__auto____$1 = this;
return (new devcards.core.IdentityOptions(self__.obj,G__42755,self__.__extmap,self__.__hash));
}));

(devcards.core.IdentityOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(devcards.core.IdentityOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
}));

(devcards.core.IdentityOptions.cljs$lang$type = true);

(devcards.core.IdentityOptions.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"devcards.core/IdentityOptions",null,(1),null));
}));

(devcards.core.IdentityOptions.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"devcards.core/IdentityOptions");
}));

/**
 * Positional factory function for devcards.core/IdentityOptions.
 */
devcards.core.__GT_IdentityOptions = (function devcards$core$__GT_IdentityOptions(obj){
return (new devcards.core.IdentityOptions(obj,null,null,null));
});

/**
 * Factory function for devcards.core/IdentityOptions, taking a map of keywords to field values.
 */
devcards.core.map__GT_IdentityOptions = (function devcards$core$map__GT_IdentityOptions(G__42759){
var extmap__5385__auto__ = (function (){var G__42778 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__42759,new cljs.core.Keyword(null,"obj","obj",981763962));
if(cljs.core.record_QMARK_(G__42759)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__42778);
} else {
return G__42778;
}
})();
return (new devcards.core.IdentityOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__42759),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

devcards.core.atom_like_options = (function devcards$core$atom_like_options(main_obj,p__42779){
var map__42780 = p__42779;
var map__42780__$1 = cljs.core.__destructure_map(map__42780);
var devcard_opts = map__42780__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42780__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (data_atom,_){
return devcards.util.edn_renderer.html_edn(cljs.core.deref(data_atom));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),main_obj,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"history","history",-247395220),true], null),devcards.core.assert_options_map(options)], 0))], 0));
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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.AtomLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k42783,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__42792 = k42783;
var G__42792__$1 = (((G__42792 instanceof cljs.core.Keyword))?G__42792.fqn:null);
switch (G__42792__$1) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k42783,else__5346__auto__);

}
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__42793){
var vec__42794 = p__42793;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42794,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42794,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#devcards.core.AtomLikeOptions{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42782){
var self__ = this;
var G__42782__$1 = this;
return (new cljs.core.RecordIter((0),G__42782__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1574099704 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42784,other42785){
var self__ = this;
var this42784__$1 = this;
return (((!((other42785 == null)))) && ((((this42784__$1.constructor === other42785.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42784__$1.obj,other42785.obj)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42784__$1.__extmap,other42785.__extmap)))))));
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k42783){
var self__ = this;
var this__5350__auto____$1 = this;
var G__42799 = k42783;
var G__42799__$1 = (((G__42799 instanceof cljs.core.Keyword))?G__42799.fqn:null);
switch (G__42799__$1) {
case "obj":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k42783);

}
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__42782){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__42800 = cljs.core.keyword_identical_QMARK_;
var expr__42801 = k__5352__auto__;
if(cljs.core.truth_((pred__42800.cljs$core$IFn$_invoke$arity$2 ? pred__42800.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"obj","obj",981763962),expr__42801) : pred__42800.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__42801)))){
return (new devcards.core.AtomLikeOptions(G__42782,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__42782),null));
}
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj,null))], null),self__.__extmap));
}));

(devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.atom_like_options(self__.obj,opts);
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__42782){
var self__ = this;
var this__5342__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,G__42782,self__.__extmap,self__.__hash));
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(devcards.core.AtomLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
}));

(devcards.core.AtomLikeOptions.cljs$lang$type = true);

(devcards.core.AtomLikeOptions.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"devcards.core/AtomLikeOptions",null,(1),null));
}));

(devcards.core.AtomLikeOptions.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"devcards.core/AtomLikeOptions");
}));

/**
 * Positional factory function for devcards.core/AtomLikeOptions.
 */
devcards.core.__GT_AtomLikeOptions = (function devcards$core$__GT_AtomLikeOptions(obj){
return (new devcards.core.AtomLikeOptions(obj,null,null,null));
});

/**
 * Factory function for devcards.core/AtomLikeOptions, taking a map of keywords to field values.
 */
devcards.core.map__GT_AtomLikeOptions = (function devcards$core$map__GT_AtomLikeOptions(G__42788){
var extmap__5385__auto__ = (function (){var G__42805 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__42788,new cljs.core.Keyword(null,"obj","obj",981763962));
if(cljs.core.record_QMARK_(G__42788)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__42805);
} else {
return G__42805;
}
})();
return (new devcards.core.AtomLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__42788),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

devcards.core.edn_like_options = (function devcards$core$edn_like_options(main_obj,devcard_opts){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.util.edn_renderer.html_edn((((((!((main_obj == null))))?(((((main_obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === main_obj.cljs$core$IDeref$))))?true:(((!main_obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,main_obj):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,main_obj)))?cljs.core.deref(main_obj):main_obj)));
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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.EdnLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k42811,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__42816 = k42811;
var G__42816__$1 = (((G__42816 instanceof cljs.core.Keyword))?G__42816.fqn:null);
switch (G__42816__$1) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k42811,else__5346__auto__);

}
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__42817){
var vec__42818 = p__42817;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42818,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42818,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#devcards.core.EdnLikeOptions{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42810){
var self__ = this;
var G__42810__$1 = this;
return (new cljs.core.RecordIter((0),G__42810__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (1012705544 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42812,other42813){
var self__ = this;
var this42812__$1 = this;
return (((!((other42813 == null)))) && ((((this42812__$1.constructor === other42813.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42812__$1.obj,other42813.obj)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42812__$1.__extmap,other42813.__extmap)))))));
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k42811){
var self__ = this;
var this__5350__auto____$1 = this;
var G__42830 = k42811;
var G__42830__$1 = (((G__42830 instanceof cljs.core.Keyword))?G__42830.fqn:null);
switch (G__42830__$1) {
case "obj":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k42811);

}
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__42810){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__42831 = cljs.core.keyword_identical_QMARK_;
var expr__42832 = k__5352__auto__;
if(cljs.core.truth_((pred__42831.cljs$core$IFn$_invoke$arity$2 ? pred__42831.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"obj","obj",981763962),expr__42832) : pred__42831.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__42832)))){
return (new devcards.core.EdnLikeOptions(G__42810,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__42810),null));
}
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj,null))], null),self__.__extmap));
}));

(devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.edn_like_options(self__.obj,devcard_opts);
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__42810){
var self__ = this;
var this__5342__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,G__42810,self__.__extmap,self__.__hash));
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(devcards.core.EdnLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
}));

(devcards.core.EdnLikeOptions.cljs$lang$type = true);

(devcards.core.EdnLikeOptions.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"devcards.core/EdnLikeOptions",null,(1),null));
}));

(devcards.core.EdnLikeOptions.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"devcards.core/EdnLikeOptions");
}));

/**
 * Positional factory function for devcards.core/EdnLikeOptions.
 */
devcards.core.__GT_EdnLikeOptions = (function devcards$core$__GT_EdnLikeOptions(obj){
return (new devcards.core.EdnLikeOptions(obj,null,null,null));
});

/**
 * Factory function for devcards.core/EdnLikeOptions, taking a map of keywords to field values.
 */
devcards.core.map__GT_EdnLikeOptions = (function devcards$core$map__GT_EdnLikeOptions(G__42814){
var extmap__5385__auto__ = (function (){var G__42835 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__42814,new cljs.core.Keyword(null,"obj","obj",981763962));
if(cljs.core.record_QMARK_(G__42814)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__42835);
} else {
return G__42835;
}
})();
return (new devcards.core.EdnLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__42814),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

devcards.core.atom_like_QMARK_ = (function devcards$core$atom_like_QMARK_(x){
var and__5043__auto__ = (((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition1$ & (2))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IWatchable$))))?true:(((!x.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,x));
if(and__5043__auto__){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
}
} else {
return and__5043__auto__;
}
});
devcards.core.edn_like_QMARK_ = (function devcards$core$edn_like_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
}
});
devcards.core.coerce_to_devcards_options = (function devcards$core$coerce_to_devcards_options(main_obj){
if((((!((main_obj == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === main_obj.devcards$core$IDevcardOptions$))))?true:(((!main_obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(devcards.core.IDevcardOptions,main_obj):false)):cljs.core.native_satisfies_QMARK_(devcards.core.IDevcardOptions,main_obj))){
return main_obj;
} else {
if(devcards.core.atom_like_QMARK_(main_obj)){
return (new devcards.core.AtomLikeOptions(main_obj,null,null,null));
} else {
if(devcards.core.edn_like_QMARK_(main_obj)){
return (new devcards.core.EdnLikeOptions(main_obj,null,null,null));
} else {
return (new devcards.core.IdentityOptions(main_obj,null,null,null));

}
}
}
});
devcards.core.card_base = (function devcards$core$card_base(opts){
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_));
if((function (){var G__42849 = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1);
if((!((G__42849 == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === G__42849.devcards$core$IDevcard$)))){
return true;
} else {
if((!G__42849.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(devcards.core.IDevcard,G__42849);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(devcards.core.IDevcard,G__42849);
}
})()){
return devcards.core._devcard(new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1),opts__$1);
} else {
return devcards.core.card_with_errors(devcards.core._devcard_options(devcards.core.coerce_to_devcards_options(new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1)),opts__$1));
}
});
devcards.core.dom_node_STAR_ = (function devcards$core$dom_node_STAR_(node_fn){
return (function (data_atom,owner){
return module$node_modules$react$index.createElement(devcards.core.DomComponent,({"node_fn": node_fn, "data_atom": data_atom}));
});
});
(devcards.core.IDevcardOptions["string"] = true);

(devcards.core._devcard_options["string"] = (function (this$,devcard_opts){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(devcard_opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742)], null),devcards.core.markdown__GT_react);
}));
(cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
}));
(cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
}));
(cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
}));
(cljs.core.List.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.List.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
}));
(cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
}));
(cljs.core.Cons.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Cons.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
}));
(cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
}));
(cljs.core.Atom.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Atom.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.atom_like_options(this$__$1,devcard_opts);
}));
devcards.core.can_go_back = (function devcards$core$can_go_back(this$){
var map__42858 = cljs.core.deref(devcards.core.get_state(this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)));
var map__42858__$1 = cljs.core.__destructure_map(map__42858);
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42858__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42858__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
return ((pointer + (1)) < cljs.core.count(history__$1));
});
devcards.core.can_go_forward = (function devcards$core$can_go_forward(this$){
return (new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(devcards.core.get_state(this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)))) > (0));
});
devcards.core.in_time_machine_QMARK_ = (function devcards$core$in_time_machine_QMARK_(this$){
return (!((new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(devcards.core.get_state(this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)))) === (0))));
});
devcards.core.back_in_history_BANG_ = (function devcards$core$back_in_history_BANG_(this$){
var history_atom = devcards.core.get_state(this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__42866 = cljs.core.deref(history_atom);
var map__42866__$1 = cljs.core.__destructure_map(map__42866);
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42866__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42866__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
if(devcards.core.can_go_back(this$)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(pointer + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true], 0));

cljs.core.reset_BANG_(devcards.core.get_props(this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(history__$1,(pointer + (1))));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.forward_in_history_BANG_ = (function devcards$core$forward_in_history_BANG_(this$){
var history_atom = devcards.core.get_state(this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__42869 = cljs.core.deref(history_atom);
var map__42869__$1 = cljs.core.__destructure_map(map__42869);
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42869__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42869__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
if(devcards.core.can_go_forward(this$)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(pointer - (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true], 0));

cljs.core.reset_BANG_(devcards.core.get_props(this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(history__$1,(pointer - (1))));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.continue_on_BANG_ = (function devcards$core$continue_on_BANG_(this$){
var history_atom = devcards.core.get_state(this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__42872 = cljs.core.deref(history_atom);
var map__42872__$1 = cljs.core.__destructure_map(map__42872);
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42872__$1,new cljs.core.Keyword(null,"history","history",-247395220));
if(devcards.core.can_go_forward(this$)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(0),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true], 0));

cljs.core.reset_BANG_(devcards.core.get_props(this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.first(history__$1));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.HistoryComponent = (function (){var ctor__39106__auto__ = (function (props__39101__auto__){
var this__39102__auto__ = this;
devcards.util.utils.react_holder.Component.call(this__39102__auto__,props__39101__auto__);

(function (props){
var this$ = this;
return (this$.state = ({"unique_id": cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"devcards-history-runner-","devcards-history-runner-",-1709703043,null))), "history_atom": cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"pointer","pointer",85071187),(0)], null))}));
}).call(this__39102__auto__,props__39101__auto__);

return this__39102__auto__;
});
goog.inherits(ctor__39106__auto__,devcards.util.utils.react_holder.Component);

var x42875_43462 = ctor__39106__auto__.prototype;
(x42875_43462.componentWillMount = (function (){
var this$ = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(devcards.core.get_state(this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220)], null),(new cljs.core.List(null,cljs.core.deref(devcards.core.get_props(this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504))),null,(1),null)));
}));

(x42875_43462.componentDidMount = (function (){
var this$ = this;
var data_atom = devcards.core.get_props(this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state(this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
var history_atom = devcards.core.get_state(this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
if(cljs.core.truth_((function (){var and__5043__auto__ = data_atom;
if(cljs.core.truth_(and__5043__auto__)){
return id;
} else {
return and__5043__auto__;
}
})())){
return cljs.core.add_watch(data_atom,id,(function (_,___$1,___$2,n){
if(devcards.core.in_time_machine_QMARK_(this$)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(history_atom,(function (p__42877){
var map__42878 = p__42877;
var map__42878__$1 = cljs.core.__destructure_map(map__42878);
var ha = map__42878__$1;
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42878__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42878__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var ignore_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42878__$1,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927));
if(cljs.core.truth_(ignore_click)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ha,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),false);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ha,new cljs.core.Keyword(null,"history","history",-247395220),(function (){var abridged_hist = cljs.core.drop.cljs$core$IFn$_invoke$arity$2(pointer,history__$1);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(n,cljs.core.first(abridged_hist))){
return cljs.core.cons(n,abridged_hist);
} else {
return abridged_hist;
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pointer","pointer",85071187),(0)], 0));
}
}));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"history","history",-247395220),(function (){var hist = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(history_atom));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(n,cljs.core.first(hist))){
return cljs.core.cons(n,hist);
} else {
return hist;
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),false], 0));
}
}));
} else {
return null;
}
}));

(x42875_43462.render = (function (){
var this$ = this;
if(((devcards.core.can_go_back(this$)) || (devcards.core.can_go_forward(this$)))){
var G__42879 = "div";
var G__42880 = ({"style": ({"display": ((((devcards.core.can_go_back(this$)) || (devcards.core.can_go_forward(this$))))?"block":"none")}), "className": "com-rigsomelight-devcards-history-control-bar"});
var G__42881 = (function (){var action = (function (e){
e.preventDefault();

return devcards.core.back_in_history_BANG_(this$);
});
return sablono.interpreter.interpret((function (){var G__42887 = "button";
var G__42888 = ({"style": ({"visibility": ((devcards.core.can_go_back(this$))?"visible":"hidden")}), "href": "#", "onClick": action, "onTouchEnd": action});
var G__42889 = (function (){var G__42891 = "span";
var G__42892 = ({"className": "com-rigsomelight-devcards-history-control-left"});
var G__42893 = "";
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__42891,G__42892,G__42893) : sablono.core.create_element.call(null,G__42891,G__42892,G__42893));
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__42887,G__42888,G__42889) : sablono.core.create_element.call(null,G__42887,G__42888,G__42889));
})());
})();
var G__42882 = (function (){var action = (function (e){
e.preventDefault();

var data_atom = devcards.core.get_props(this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
return cljs.core.reset_BANG_(data_atom,cljs.core.deref(data_atom));
});
return sablono.interpreter.interpret((function (){var G__42902 = "button";
var G__42903 = ({"style": ({"visibility": ((devcards.core.can_go_forward(this$))?"visible":"hidden")}), "onClick": action, "onTouchEnd": action});
var G__42904 = (function (){var G__42907 = "span";
var G__42908 = ({"className": "com-rigsomelight-devcards-history-stop"});
var G__42909 = "";
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__42907,G__42908,G__42909) : sablono.core.create_element.call(null,G__42907,G__42908,G__42909));
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__42902,G__42903,G__42904) : sablono.core.create_element.call(null,G__42902,G__42903,G__42904));
})());
})();
var G__42883 = (function (){var action = (function (e){
e.preventDefault();

return devcards.core.forward_in_history_BANG_(this$);
});
return sablono.interpreter.interpret((function (){var G__42912 = "button";
var G__42913 = ({"style": ({"visibility": ((devcards.core.can_go_forward(this$))?"visible":"hidden")}), "onClick": action, "onTouchEnd": action});
var G__42914 = (function (){var G__42915 = "span";
var G__42916 = ({"className": "com-rigsomelight-devcards-history-control-right"});
var G__42917 = "";
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__42915,G__42916,G__42917) : sablono.core.create_element.call(null,G__42915,G__42916,G__42917));
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__42912,G__42913,G__42914) : sablono.core.create_element.call(null,G__42912,G__42913,G__42914));
})());
})();
var G__42884 = (function (){var listener = (function (e){
e.preventDefault();

return devcards.core.continue_on_BANG_(this$);
});
return sablono.interpreter.interpret((function (){var G__42929 = "button";
var G__42930 = ({"style": ({"visibility": ((devcards.core.can_go_forward(this$))?"visible":"hidden")}), "onClick": listener, "onTouchEnd": listener});
var G__42931 = (function (){var G__42934 = "span";
var G__42935 = ({"className": "com-rigsomelight-devcards-history-control-small-arrow"});
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$2 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$2(G__42934,G__42935) : sablono.core.create_element.call(null,G__42934,G__42935));
})();
var G__42932 = (function (){var G__42936 = "span";
var G__42937 = ({"className": "com-rigsomelight-devcards-history-control-small-arrow"});
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$2 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$2(G__42936,G__42937) : sablono.core.create_element.call(null,G__42936,G__42937));
})();
var G__42933 = (function (){var G__42938 = "span";
var G__42939 = ({"className": "com-rigsomelight-devcards-history-control-block"});
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$2 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$2(G__42938,G__42939) : sablono.core.create_element.call(null,G__42938,G__42939));
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$5 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$5(G__42929,G__42930,G__42931,G__42932,G__42933) : sablono.core.create_element.call(null,G__42929,G__42930,G__42931,G__42932,G__42933));
})());
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$6 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$6(G__42879,G__42880,G__42881,G__42882,G__42883,G__42884) : sablono.core.create_element.call(null,G__42879,G__42880,G__42881,G__42882,G__42883,G__42884));
} else {
return null;
}
}));


return ctor__39106__auto__;
})();

(devcards.core.HistoryComponent.displayName = cljs.core.name(new cljs.core.Symbol(null,"HistoryComponent","HistoryComponent",-932269385,null)));
devcards.core.hist_recorder_STAR_ = (function devcards$core$hist_recorder_STAR_(data_atom){
return module$node_modules$react$index.createElement(devcards.core.HistoryComponent,({"data_atom": data_atom, "key": "devcards-history-control-bar"}));
});
devcards.core.collect_test = (function devcards$core$collect_test(m){
return cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(cljs.test.get_current_env(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null)),m], 0))], 0));
});
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"pass","pass",1574159993)], null),(function (m){
cljs.test.inc_report_counter_BANG_(new cljs.core.Keyword(null,"pass","pass",1574159993));

devcards.core.collect_test(m);

return m;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"fail","fail",1706214930)], null),(function (m){
cljs.test.inc_report_counter_BANG_(new cljs.core.Keyword(null,"fail","fail",1706214930));

devcards.core.collect_test(m);

return m;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"error","error",-978969032)], null),(function (m){
cljs.test.inc_report_counter_BANG_(new cljs.core.Keyword(null,"error","error",-978969032));

devcards.core.collect_test(m);

return m;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463)], null),(function (m){
devcards.core.collect_test(m);

return m;
}));
devcards.core.run_test_block = (function devcards$core$run_test_block(f){
var _STAR_current_env_STAR__orig_val__42956 = cljs.test._STAR_current_env_STAR_;
var _STAR_current_env_STAR__temp_val__42957 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));
(cljs.test._STAR_current_env_STAR_ = _STAR_current_env_STAR__temp_val__42957);

try{(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

return cljs.test.get_current_env();
}finally {(cljs.test._STAR_current_env_STAR_ = _STAR_current_env_STAR__orig_val__42956);
}});
if((typeof devcards !== 'undefined') && (typeof devcards.core !== 'undefined') && (typeof devcards.core.test_render !== 'undefined')){
} else {
devcards.core.test_render = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__42962 = cljs.core.get_global_hierarchy;
return (fexpr__42962.cljs$core$IFn$_invoke$arity$0 ? fexpr__42962.cljs$core$IFn$_invoke$arity$0() : fexpr__42962.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devcards.core","test-render"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (m){
var attrs42965 = cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"div",((cljs.core.map_QMARK_(attrs42965))?sablono.interpreter.attributes(attrs42965):null),((cljs.core.map_QMARK_(attrs42965))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs42965)], null)));
}));
devcards.core.display_message = (function devcards$core$display_message(p__42966,body){
var map__42967 = p__42966;
var map__42967__$1 = cljs.core.__destructure_map(map__42967);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42967__$1,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.truth_(message)){
var G__42969 = "div";
var G__42970 = null;
var G__42971 = (function (){var attrs42968 = message;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"span",((cljs.core.map_QMARK_(attrs42968))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-message"], null)], null),attrs42968], 0))):({"className": "com-rigsomelight-devcards-test-message"})),((cljs.core.map_QMARK_(attrs42968))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs42968)], null)));
})();
var G__42972 = sablono.interpreter.interpret(body);
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$4 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$4(G__42969,G__42970,G__42971,G__42972) : sablono.core.create_element.call(null,G__42969,G__42970,G__42971,G__42972));
} else {
return body;
}
});
devcards.core.render_pass_fail = (function devcards$core$render_pass_fail(p__42974){
var map__42975 = p__42974;
var map__42975__$1 = cljs.core.__destructure_map(map__42975);
var m = map__42975__$1;
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42975__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42975__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42975__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return devcards.core.display_message(m,(function (){var attrs42980 = module$node_modules$react$index.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code(expected), "lang": "clojure"}));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"div",((cljs.core.map_QMARK_(attrs42980))?sablono.interpreter.attributes(attrs42980):null),((cljs.core.map_QMARK_(attrs42980))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?sablono.interpreter.interpret((function (){var G__42986 = "div";
var G__42987 = ({"style": ({"marginTop": "5px"})});
var G__42988 = (function (){var G__42990 = "div";
var G__42991 = ({"style": ({"position": "absolute", "fontSize": "0.9em"})});
var G__42992 = "\u25B6";
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__42990,G__42991,G__42992) : sablono.core.create_element.call(null,G__42990,G__42991,G__42992));
})();
var G__42989 = (function (){var G__42993 = "div";
var G__42994 = ({"style": ({"marginLeft": "20px"})});
var G__42995 = sablono.interpreter.interpret(module$node_modules$react$index.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code(actual), "lang": "clojure"})));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__42993,G__42994,G__42995) : sablono.core.create_element.call(null,G__42993,G__42994,G__42995));
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$4 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$4(G__42986,G__42987,G__42988,G__42989) : sablono.core.create_element.call(null,G__42986,G__42987,G__42988,G__42989));
})()):null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs42980),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?sablono.interpreter.interpret((function (){var G__43006 = "div";
var G__43007 = ({"style": ({"marginTop": "5px"})});
var G__43008 = (function (){var G__43010 = "div";
var G__43011 = ({"style": ({"position": "absolute", "fontSize": "0.9em"})});
var G__43012 = "\u25B6";
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__43010,G__43011,G__43012) : sablono.core.create_element.call(null,G__43010,G__43011,G__43012));
})();
var G__43009 = (function (){var G__43013 = "div";
var G__43014 = ({"style": ({"marginLeft": "20px"})});
var G__43015 = sablono.interpreter.interpret(module$node_modules$react$index.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code(actual), "lang": "clojure"})));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__43013,G__43014,G__43015) : sablono.core.create_element.call(null,G__43013,G__43014,G__43015));
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$4 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$4(G__43006,G__43007,G__43008,G__43009) : sablono.core.create_element.call(null,G__43006,G__43007,G__43008,G__43009));
})()):null)], null)));
})());
});
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (m){
return devcards.core.render_pass_fail(m);
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fail","fail",1706214930),(function (m){
return devcards.core.render_pass_fail(m);
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"error","error",-978969032),(function (m){
return devcards.core.display_message(m,(function (){var G__43031 = "div";
var G__43032 = null;
var G__43033 = (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3("strong",null,"Error: ") : sablono.core.create_element.call(null,"strong",null,"Error: "));
var G__43034 = (function (){var attrs43030 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"code",((cljs.core.map_QMARK_(attrs43030))?sablono.interpreter.attributes(attrs43030):null),((cljs.core.map_QMARK_(attrs43030))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs43030)], null)));
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$4 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$4(G__43031,G__43032,G__43033,G__43034) : sablono.core.create_element.call(null,G__43031,G__43032,G__43033,G__43034));
})());
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),(function (m){
var attrs43038 = devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(m)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"div",((cljs.core.map_QMARK_(attrs43038))?sablono.interpreter.attributes(attrs43038):null),((cljs.core.map_QMARK_(attrs43038))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs43038)], null)));
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"context","context",-830191113),(function (p__43046){
var map__43047 = p__43046;
var map__43047__$1 = cljs.core.__destructure_map(map__43047);
var testing_contexts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43047__$1,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523));
var attrs43048 = cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" / ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,t){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#bbb"], null)], null),t," "], null);
}),cljs.core.reverse(cljs.core.rest(testing_contexts))),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(-1)], null),cljs.core.first(testing_contexts)], null),null,(1),null))));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"div",((cljs.core.map_QMARK_(attrs43048))?sablono.interpreter.attributes(attrs43048):null),((cljs.core.map_QMARK_(attrs43048))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs43048)], null)));
}));
devcards.core.test_doc = (function devcards$core$test_doc(s){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),new cljs.core.Keyword(null,"documentation","documentation",1889593999),s], null));
});
devcards.core.test_renderer = (function devcards$core$test_renderer(t,i){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,i], 0)),new cljs.core.Keyword(null,"className","className",-1983287057),["com-rigsomelight-devcards-test-line com-rigsomelight-devcards-",cljs.core.name(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t))].join('')], null),devcards.core.test_render.cljs$core$IFn$_invoke$arity$1(t)], null);
});
devcards.core.layout_tests = (function devcards$core$layout_tests(tests){
var attrs43058 = new cljs.core.Keyword(null,"html-list","html-list",-2067090601).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__43059,p__43060){
var map__43061 = p__43059;
var map__43061__$1 = cljs.core.__destructure_map(map__43061);
var last_context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43061__$1,new cljs.core.Keyword(null,"last-context","last-context",-820617548));
var html_list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43061__$1,new cljs.core.Keyword(null,"html-list","html-list",-2067090601));
var vec__43062 = p__43060;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43062,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43062,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-context","last-context",-820617548),new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"html-list","html-list",-2067090601),(function (){var res = (new cljs.core.List(null,devcards.core.test_renderer(t,i),null,(1),null));
var res__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(last_context,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?res:(cljs.core.truth_(cljs.core.not_empty(new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?cljs.core.cons(devcards.core.test_renderer(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"context","context",-830191113)], null),cljs.core.select_keys(t,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null))], 0)),i),res):res));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(html_list,res__$1);
})()], null);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.reverse(tests))));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"div",((cljs.core.map_QMARK_(attrs43058))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-card"], null)], null),attrs43058], 0))):({"className": "com-rigsomelight-devcards-test-card"})),((cljs.core.map_QMARK_(attrs43058))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs43058)], null)));
});
devcards.core.render_tests = (function devcards$core$render_tests(this$,path,test_summary){
var error_QMARK_ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(test_summary);
var tests = new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary);
var some_tests = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__43071){
var map__43072 = p__43071;
var map__43072__$1 = cljs.core.__destructure_map(map__43072);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43072__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463));
}),new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary));
var total_tests = cljs.core.count(some_tests);
var map__43069 = new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(test_summary);
var map__43069__$1 = cljs.core.__destructure_map(map__43069);
var fail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43069__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));
var pass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43069__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43069__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var error__$1 = (cljs.core.truth_(error_QMARK_)?(error + (1)):error);
var G__43076 = "div";
var G__43077 = ({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad com-rigsomelight-devcards-typog"});
var G__43078 = (function (){var G__43083 = "div";
var G__43084 = ({"className": "com-rigsomelight-devcards-panel-heading"});
var G__43085 = (function (){var G__43089 = "a";
var G__43090 = ({"href": "#", "onClick": devcards.system.prevent__GT_((function (){
return devcards.system.set_current_path_BANG_(devcards.system.app_state,path);
}))});
var G__43091 = (cljs.core.truth_(path)?sablono.interpreter.interpret(cljs.core.name(cljs.core.last(path))):null);
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__43089,G__43090,G__43091) : sablono.core.create_element.call(null,G__43089,G__43090,G__43091));
})();
var G__43086 = (function (){var G__43092 = "button";
var G__43093 = ({"style": ({"float": "right", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_((function (){
return this$.setState(({"filter": cljs.core.identity}));
})), "className": "com-rigsomelight-devcards-badge"});
var G__43094 = sablono.interpreter.interpret(total_tests);
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__43092,G__43093,G__43094) : sablono.core.create_element.call(null,G__43092,G__43093,G__43094));
})();
var G__43087 = ((((fail + error__$1) === (0)))?null:sablono.interpreter.interpret((function (){var G__43095 = "button";
var G__43096 = ({"style": ({"float": "right", "backgroundColor": "#F7918E", "color": "#fff", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_((function (){
return this$.setState(({"filter": (function (p__43098){
var map__43099 = p__43098;
var map__43099__$1 = cljs.core.__destructure_map(map__43099);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43099__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var fexpr__43100 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fail","fail",1706214930),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null);
return (fexpr__43100.cljs$core$IFn$_invoke$arity$1 ? fexpr__43100.cljs$core$IFn$_invoke$arity$1(type) : fexpr__43100.call(null,type));
})}));
})), "className": "com-rigsomelight-devcards-badge"});
var G__43097 = sablono.interpreter.interpret(cljs.core.str.cljs$core$IFn$_invoke$arity$1((fail + error__$1)));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__43095,G__43096,G__43097) : sablono.core.create_element.call(null,G__43095,G__43096,G__43097));
})()));
var G__43088 = (((((pass == null)) || ((pass === (0)))))?null:sablono.interpreter.interpret((function (){var G__43101 = "button";
var G__43102 = ({"style": ({"float": "right", "backgroundColor": "#92C648", "color": "#fff", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_((function (){
return this$.setState(({"filter": (function (p__43104){
var map__43105 = p__43104;
var map__43105__$1 = cljs.core.__destructure_map(map__43105);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43105__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"pass","pass",1574159993));
})}));
})), "className": "com-rigsomelight-devcards-badge"});
var G__43103 = sablono.interpreter.interpret(pass);
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__43101,G__43102,G__43103) : sablono.core.create_element.call(null,G__43101,G__43102,G__43103));
})()));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$6 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$6(G__43083,G__43084,G__43085,G__43086,G__43087,G__43088) : sablono.core.create_element.call(null,G__43083,G__43084,G__43085,G__43086,G__43087,G__43088));
})();
var G__43079 = (function (){var G__43106 = "div";
var G__43107 = ({"className": devcards.system.devcards_rendered_card_class});
var G__43108 = sablono.interpreter.interpret(devcards.core.layout_tests(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (){var or__5045__auto__ = devcards.core.get_state(this$,new cljs.core.Keyword(null,"filter","filter",-948537934));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.identity;
}
})(),tests)));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__43106,G__43107,G__43108) : sablono.core.create_element.call(null,G__43106,G__43107,G__43108));
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$4 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$4(G__43076,G__43077,G__43078,G__43079) : sablono.core.create_element.call(null,G__43076,G__43077,G__43078,G__43079));
});
devcards.core.test_timeout = (800);
if((typeof devcards !== 'undefined') && (typeof devcards.core !== 'undefined') && (typeof devcards.core.test_channel !== 'undefined')){
} else {
devcards.core.test_channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
}
devcards.core.run_card_tests = (function devcards$core$run_card_tests(test_thunks){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var test_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));
cljs.test.set_env_BANG_(test_env);

var tests = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(test_thunks,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,cljs.test.get_current_env());

return cljs.core.async.close_BANG_(out);
})], null));
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Running tests!!"], 0));

cljs.test.run_block(tests);

return out;
});
if((typeof devcards !== 'undefined') && (typeof devcards.core !== 'undefined') && (typeof devcards.core.test_loop !== 'undefined')){
} else {
devcards.core.test_loop = (function (){var c__34399__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34400__auto__ = (function (){var switch__34140__auto__ = (function (state_43164){
var state_val_43165 = (state_43164[(1)]);
if((state_val_43165 === (7))){
var inst_43160 = (state_43164[(2)]);
var state_43164__$1 = state_43164;
var statearr_43166_43495 = state_43164__$1;
(statearr_43166_43495[(2)] = inst_43160);

(statearr_43166_43495[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43165 === (1))){
var state_43164__$1 = state_43164;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43164__$1,(2),devcards.core.test_channel);
} else {
if((state_val_43165 === (4))){
var inst_43162 = (state_43164[(2)]);
var state_43164__$1 = state_43164;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43164__$1,inst_43162);
} else {
if((state_val_43165 === (6))){
var state_43164__$1 = state_43164;
var statearr_43169_43496 = state_43164__$1;
(statearr_43169_43496[(2)] = null);

(statearr_43169_43496[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43165 === (3))){
var inst_43121 = (state_43164[(7)]);
var inst_43125 = (state_43164[(8)]);
var inst_43124 = cljs.core.__destructure_map(inst_43121);
var inst_43125__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43124,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_43126 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43124,new cljs.core.Keyword(null,"callback","callback",-705136228));
var state_43164__$1 = (function (){var statearr_43170 = state_43164;
(statearr_43170[(8)] = inst_43125__$1);

(statearr_43170[(9)] = inst_43126);

return statearr_43170;
})();
if(cljs.core.truth_(inst_43125__$1)){
var statearr_43173_43498 = state_43164__$1;
(statearr_43173_43498[(1)] = (5));

} else {
var statearr_43174_43499 = state_43164__$1;
(statearr_43174_43499[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43165 === (12))){
var inst_43156 = (state_43164[(2)]);
var inst_43121 = inst_43156;
var state_43164__$1 = (function (){var statearr_43176 = state_43164;
(statearr_43176[(7)] = inst_43121);

return statearr_43176;
})();
var statearr_43177_43500 = state_43164__$1;
(statearr_43177_43500[(2)] = null);

(statearr_43177_43500[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43165 === (2))){
var inst_43116 = (state_43164[(2)]);
var inst_43117 = cljs.core.__destructure_map(inst_43116);
var inst_43118 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43117,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_43120 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43117,new cljs.core.Keyword(null,"callback","callback",-705136228));
var inst_43121 = inst_43116;
var state_43164__$1 = (function (){var statearr_43178 = state_43164;
(statearr_43178[(10)] = inst_43118);

(statearr_43178[(11)] = inst_43120);

(statearr_43178[(7)] = inst_43121);

return statearr_43178;
})();
var statearr_43179_43502 = state_43164__$1;
(statearr_43179_43502[(2)] = null);

(statearr_43179_43502[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43165 === (11))){
var inst_43153 = (state_43164[(2)]);
var inst_43154 = cljs.test.clear_env_BANG_();
var state_43164__$1 = (function (){var statearr_43180 = state_43164;
(statearr_43180[(12)] = inst_43153);

(statearr_43180[(13)] = inst_43154);

return statearr_43180;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43164__$1,(12),devcards.core.test_channel);
} else {
if((state_val_43165 === (9))){
var inst_43126 = (state_43164[(9)]);
var inst_43139 = (state_43164[(14)]);
var inst_43143 = (inst_43126.cljs$core$IFn$_invoke$arity$1 ? inst_43126.cljs$core$IFn$_invoke$arity$1(inst_43139) : inst_43126.call(null,inst_43139));
var state_43164__$1 = state_43164;
var statearr_43181_43503 = state_43164__$1;
(statearr_43181_43503[(2)] = inst_43143);

(statearr_43181_43503[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43165 === (5))){
var inst_43125 = (state_43164[(8)]);
var inst_43132 = (state_43164[(15)]);
var inst_43132__$1 = cljs.core.async.timeout(devcards.core.test_timeout);
var inst_43133 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43134 = devcards.core.run_card_tests(inst_43125);
var inst_43135 = [inst_43134,inst_43132__$1];
var inst_43136 = (new cljs.core.PersistentVector(null,2,(5),inst_43133,inst_43135,null));
var state_43164__$1 = (function (){var statearr_43183 = state_43164;
(statearr_43183[(15)] = inst_43132__$1);

return statearr_43183;
})();
return cljs.core.async.ioc_alts_BANG_(state_43164__$1,(8),inst_43136);
} else {
if((state_val_43165 === (10))){
var inst_43126 = (state_43164[(9)]);
var inst_43145 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"actual","actual",107306363)];
var inst_43146 = [new cljs.core.Keyword(null,"error","error",-978969032),"Tests timed out. Please check Dev Console for Exceptions"];
var inst_43147 = cljs.core.PersistentHashMap.fromArrays(inst_43145,inst_43146);
var inst_43148 = devcards.core.collect_test(inst_43147);
var inst_43149 = cljs.test.get_current_env();
var inst_43150 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_43149,new cljs.core.Keyword(null,"error","error",-978969032),"Execution timed out!");
var inst_43151 = (inst_43126.cljs$core$IFn$_invoke$arity$1 ? inst_43126.cljs$core$IFn$_invoke$arity$1(inst_43150) : inst_43126.call(null,inst_43150));
var state_43164__$1 = (function (){var statearr_43185 = state_43164;
(statearr_43185[(16)] = inst_43148);

return statearr_43185;
})();
var statearr_43186_43508 = state_43164__$1;
(statearr_43186_43508[(2)] = inst_43151);

(statearr_43186_43508[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43165 === (8))){
var inst_43132 = (state_43164[(15)]);
var inst_43138 = (state_43164[(2)]);
var inst_43139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43138,(0),null);
var inst_43140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43138,(1),null);
var inst_43141 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(inst_43140,inst_43132);
var state_43164__$1 = (function (){var statearr_43187 = state_43164;
(statearr_43187[(14)] = inst_43139);

return statearr_43187;
})();
if(inst_43141){
var statearr_43189_43509 = state_43164__$1;
(statearr_43189_43509[(1)] = (9));

} else {
var statearr_43190_43510 = state_43164__$1;
(statearr_43190_43510[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var devcards$core$state_machine__34141__auto__ = null;
var devcards$core$state_machine__34141__auto____0 = (function (){
var statearr_43195 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43195[(0)] = devcards$core$state_machine__34141__auto__);

(statearr_43195[(1)] = (1));

return statearr_43195;
});
var devcards$core$state_machine__34141__auto____1 = (function (state_43164){
while(true){
var ret_value__34142__auto__ = (function (){try{while(true){
var result__34143__auto__ = switch__34140__auto__(state_43164);
if(cljs.core.keyword_identical_QMARK_(result__34143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34143__auto__;
}
break;
}
}catch (e43196){var ex__34144__auto__ = e43196;
var statearr_43198_43511 = state_43164;
(statearr_43198_43511[(2)] = ex__34144__auto__);


if(cljs.core.seq((state_43164[(4)]))){
var statearr_43201_43512 = state_43164;
(statearr_43201_43512[(1)] = cljs.core.first((state_43164[(4)])));

} else {
throw ex__34144__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43513 = state_43164;
state_43164 = G__43513;
continue;
} else {
return ret_value__34142__auto__;
}
break;
}
});
devcards$core$state_machine__34141__auto__ = function(state_43164){
switch(arguments.length){
case 0:
return devcards$core$state_machine__34141__auto____0.call(this);
case 1:
return devcards$core$state_machine__34141__auto____1.call(this,state_43164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$state_machine__34141__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$state_machine__34141__auto____0;
devcards$core$state_machine__34141__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$state_machine__34141__auto____1;
return devcards$core$state_machine__34141__auto__;
})()
})();
var state__34401__auto__ = (function (){var statearr_43203 = f__34400__auto__();
(statearr_43203[(6)] = c__34399__auto__);

return statearr_43203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34401__auto__);
}));

return c__34399__auto__;
})();
}
devcards.core.test_card_test_run = (function devcards$core$test_card_test_run(this$,tests){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(devcards.core.test_channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tests","tests",-1041085625),tests,new cljs.core.Keyword(null,"callback","callback",-705136228),(function (results){
return this$.setState(({"test_results": results}));
})], null));
});
devcards.core.TestDevcard = (function (){var ctor__39106__auto__ = (function (props__39103__auto__){
var this__39104__auto__ = this;
devcards.util.utils.react_holder.Component.call(this__39104__auto__,props__39103__auto__);

return this__39104__auto__;
});
goog.inherits(ctor__39106__auto__,devcards.util.utils.react_holder.Component);

var x43209_43515 = ctor__39106__auto__.prototype;
(x43209_43515.componentWillMount = (function (){
var this$ = this;
var temp__5823__auto__ = devcards.core.get_props(this$,new cljs.core.Keyword(null,"test_thunks","test_thunks",304669805));
if(cljs.core.truth_(temp__5823__auto__)){
var test_thunks = temp__5823__auto__;
return devcards.core.test_card_test_run(this$,test_thunks);
} else {
return null;
}
}));

(x43209_43515.componentWillReceiveProps = (function (next_props){
var this$ = this;
var temp__5823__auto__ = devcards.core.goog$module$goog$object.get(next_props,cljs.core.name(new cljs.core.Keyword(null,"test_thunks","test_thunks",304669805)));
if(cljs.core.truth_(temp__5823__auto__)){
var test_thunks = temp__5823__auto__;
return devcards.core.test_card_test_run(this$,test_thunks);
} else {
return null;
}
}));

(x43209_43515.render = (function (){
var this$ = this;
var test_summary = devcards.core.get_state(this$,new cljs.core.Keyword(null,"test_results","test_results",1062111317));
var path = devcards.core.get_props(this$,new cljs.core.Keyword(null,"path","path",-188191168));
return devcards.core.render_tests(this$,path,test_summary);
}));


return ctor__39106__auto__;
})();

(devcards.core.TestDevcard.displayName = cljs.core.name(new cljs.core.Symbol(null,"TestDevcard","TestDevcard",-506859910,null)));

/**
* @constructor
 * @implements {devcards.core.IDevcard}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
devcards.core.t_devcards$core43220 = (function (test_thunks,meta43221){
this.test_thunks = test_thunks;
this.meta43221 = meta43221;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(devcards.core.t_devcards$core43220.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43222,meta43221__$1){
var self__ = this;
var _43222__$1 = this;
return (new devcards.core.t_devcards$core43220(self__.test_thunks,meta43221__$1));
}));

(devcards.core.t_devcards$core43220.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43222){
var self__ = this;
var _43222__$1 = this;
return self__.meta43221;
}));

(devcards.core.t_devcards$core43220.prototype.devcards$core$IDevcard$ = cljs.core.PROTOCOL_SENTINEL);

(devcards.core.t_devcards$core43220.prototype.devcards$core$IDevcard$_devcard$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
var path = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_);
return module$node_modules$react$index.createElement(devcards.core.TestDevcard,({"test_thunks": self__.test_thunks, "path": path}));
}));

(devcards.core.t_devcards$core43220.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"test-thunks","test-thunks",2032684042,null),new cljs.core.Symbol(null,"meta43221","meta43221",543633967,null)], null);
}));

(devcards.core.t_devcards$core43220.cljs$lang$type = true);

(devcards.core.t_devcards$core43220.cljs$lang$ctorStr = "devcards.core/t_devcards$core43220");

(devcards.core.t_devcards$core43220.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"devcards.core/t_devcards$core43220");
}));

/**
 * Positional factory function for devcards.core/t_devcards$core43220.
 */
devcards.core.__GT_t_devcards$core43220 = (function devcards$core$__GT_t_devcards$core43220(test_thunks,meta43221){
return (new devcards.core.t_devcards$core43220(test_thunks,meta43221));
});


devcards.core.test_card = (function devcards$core$test_card(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43517 = arguments.length;
var i__5770__auto___43518 = (0);
while(true){
if((i__5770__auto___43518 < len__5769__auto___43517)){
args__5775__auto__.push((arguments[i__5770__auto___43518]));

var G__43519 = (i__5770__auto___43518 + (1));
i__5770__auto___43518 = G__43519;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic = (function (test_thunks){
return (new devcards.core.t_devcards$core43220(test_thunks,cljs.core.PersistentArrayMap.EMPTY));
}));

(devcards.core.test_card.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devcards.core.test_card.cljs$lang$applyTo = (function (seq43216){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq43216));
}));

devcards.core.get_front_matter = (function devcards$core$get_front_matter(munged_namespace){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__43237_SHARP_,p2__43238_SHARP_){
return devcards.core.goog$module$goog$object.get(p1__43237_SHARP_,p2__43238_SHARP_);
}),goog.global,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(munged_namespace),"."),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["front_matter"], null)));
});
devcards.core.get_cards_for_ns = (function devcards$core$get_cards_for_ns(ns_symbol){
var temp__5823__auto__ = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(devcards.system.app_state));
if(cljs.core.truth_(temp__5823__auto__)){
var cards = temp__5823__auto__;
var temp__5823__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cards,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.munge(ns_symbol))], null));
if(cljs.core.truth_(temp__5823__auto____$1)){
var card = temp__5823__auto____$1;
return card;
} else {
return null;
}
} else {
return null;
}
});
devcards.core.load_data_from_channel_BANG_ = (function devcards$core$load_data_from_channel_BANG_(){
return devcards.system.load_data_from_channel_BANG_(devcards.core.devcard_event_chan);
});
goog.exportSymbol('devcards.core.load_data_from_channel_BANG_', devcards.core.load_data_from_channel_BANG_);
devcards.core.merge_front_matter_options_BANG_ = (function devcards$core$merge_front_matter_options_BANG_(ns_symbol){
var temp__5823__auto__ = new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(devcards.core.get_front_matter(cljs.core.name(cljs.core.munge(ns_symbol))));
if(cljs.core.truth_(temp__5823__auto__)){
var base_card_options = temp__5823__auto__;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Adding base card options!",cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([base_card_options], 0))], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756)], null),(function (opts){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,base_card_options], 0));
}));
} else {
return null;
}
});
goog.exportSymbol('devcards.core.merge_front_matter_options_BANG_', devcards.core.merge_front_matter_options_BANG_);
devcards.core.render_namespace_to_string = (function devcards$core$render_namespace_to_string(ns_symbol){
var temp__5823__auto__ = devcards.core.get_cards_for_ns(ns_symbol);
if(cljs.core.truth_(temp__5823__auto__)){
var card = temp__5823__auto__;
devcards.core.merge_front_matter_options_BANG_(ns_symbol);

return ["<div id=\"com-rigsomelight-devcards-main\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ReactDOMServer.renderToString((function (){var attrs43245 = devcards.system.render_cards(devcards.system.display_cards(card),devcards.system.app_state);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"div",((cljs.core.map_QMARK_(attrs43245))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs43245], 0))):({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"})),((cljs.core.map_QMARK_(attrs43245))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs43245)], null)));
})())),"</div>"].join('');
} else {
return null;
}
});
goog.exportSymbol('devcards.core.render_namespace_to_string', devcards.core.render_namespace_to_string);
devcards.core.render_ns = (function devcards$core$render_ns(ns_symbol,app_state){
var temp__5823__auto__ = devcards.core.get_cards_for_ns(ns_symbol);
if(cljs.core.truth_(temp__5823__auto__)){
var card = temp__5823__auto__;
return module$node_modules$react_dom$index.render((function (){var attrs43251 = devcards.system.render_cards(devcards.system.display_cards(card),app_state);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"div",((cljs.core.map_QMARK_(attrs43251))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs43251], 0))):({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"})),((cljs.core.map_QMARK_(attrs43251))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs43251)], null)));
})(),devcards.system.devcards_app_node());
} else {
return null;
}
});
devcards.core.mount_namespace = (function devcards$core$mount_namespace(ns_symbol){
devcards.core.merge_front_matter_options_BANG_(ns_symbol);

var c__34399__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34400__auto__ = (function (){var switch__34140__auto__ = (function (state_43265){
var state_val_43266 = (state_43265[(1)]);
if((state_val_43266 === (1))){
var inst_43254 = devcards.core.load_data_from_channel_BANG_();
var state_43265__$1 = state_43265;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43265__$1,(2),inst_43254);
} else {
if((state_val_43266 === (2))){
var inst_43256 = (state_43265[(2)]);
var inst_43259 = cljs.core.async.timeout((100));
var state_43265__$1 = (function (){var statearr_43267 = state_43265;
(statearr_43267[(7)] = inst_43256);

return statearr_43267;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43265__$1,(3),inst_43259);
} else {
if((state_val_43266 === (3))){
var inst_43261 = (state_43265[(2)]);
var inst_43262 = (function (){return (function (){
return devcards.core.render_ns(ns_symbol,devcards.system.app_state);
});
})();
var inst_43263 = setTimeout(inst_43262,(0));
var state_43265__$1 = (function (){var statearr_43270 = state_43265;
(statearr_43270[(8)] = inst_43261);

return statearr_43270;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43265__$1,inst_43263);
} else {
return null;
}
}
}
});
return (function() {
var devcards$core$mount_namespace_$_state_machine__34141__auto__ = null;
var devcards$core$mount_namespace_$_state_machine__34141__auto____0 = (function (){
var statearr_43275 = [null,null,null,null,null,null,null,null,null];
(statearr_43275[(0)] = devcards$core$mount_namespace_$_state_machine__34141__auto__);

(statearr_43275[(1)] = (1));

return statearr_43275;
});
var devcards$core$mount_namespace_$_state_machine__34141__auto____1 = (function (state_43265){
while(true){
var ret_value__34142__auto__ = (function (){try{while(true){
var result__34143__auto__ = switch__34140__auto__(state_43265);
if(cljs.core.keyword_identical_QMARK_(result__34143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34143__auto__;
}
break;
}
}catch (e43281){var ex__34144__auto__ = e43281;
var statearr_43282_43540 = state_43265;
(statearr_43282_43540[(2)] = ex__34144__auto__);


if(cljs.core.seq((state_43265[(4)]))){
var statearr_43284_43545 = state_43265;
(statearr_43284_43545[(1)] = cljs.core.first((state_43265[(4)])));

} else {
throw ex__34144__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43547 = state_43265;
state_43265 = G__43547;
continue;
} else {
return ret_value__34142__auto__;
}
break;
}
});
devcards$core$mount_namespace_$_state_machine__34141__auto__ = function(state_43265){
switch(arguments.length){
case 0:
return devcards$core$mount_namespace_$_state_machine__34141__auto____0.call(this);
case 1:
return devcards$core$mount_namespace_$_state_machine__34141__auto____1.call(this,state_43265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$mount_namespace_$_state_machine__34141__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$mount_namespace_$_state_machine__34141__auto____0;
devcards$core$mount_namespace_$_state_machine__34141__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$mount_namespace_$_state_machine__34141__auto____1;
return devcards$core$mount_namespace_$_state_machine__34141__auto__;
})()
})();
var state__34401__auto__ = (function (){var statearr_43292 = f__34400__auto__();
(statearr_43292[(6)] = c__34399__auto__);

return statearr_43292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34401__auto__);
}));

return c__34399__auto__;
});
goog.exportSymbol('devcards.core.mount_namespace', devcards.core.mount_namespace);
devcards.core.mount_namespace_live = (function devcards$core$mount_namespace_live(ns_symbol){
devcards.core.merge_front_matter_options_BANG_(ns_symbol);

return devcards.system.start_ui_with_renderer(devcards.core.devcard_event_chan,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devcards.core.render_ns,ns_symbol));
});
goog.exportSymbol('devcards.core.mount_namespace_live', devcards.core.mount_namespace_live);

//# sourceMappingURL=devcards.core.js.map
