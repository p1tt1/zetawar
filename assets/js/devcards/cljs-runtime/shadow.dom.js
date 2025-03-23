goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_37574 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_37574(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_37575 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_37575(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__36680 = coll;
var G__36681 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__36680,G__36681) : shadow.dom.lazy_native_coll_seq.call(null,G__36680,G__36681));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__36726 = arguments.length;
switch (G__36726) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__36736 = arguments.length;
switch (G__36736) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__36755 = arguments.length;
switch (G__36755) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__36772 = arguments.length;
switch (G__36772) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__36793 = arguments.length;
switch (G__36793) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__36806 = arguments.length;
switch (G__36806) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e36816){if((e36816 instanceof Object)){
var e = e36816;
return console.log("didnt support attachEvent",el,e);
} else {
throw e36816;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__36823 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__36824 = null;
var count__36825 = (0);
var i__36826 = (0);
while(true){
if((i__36826 < count__36825)){
var el = chunk__36824.cljs$core$IIndexed$_nth$arity$2(null,i__36826);
var handler_37582__$1 = ((function (seq__36823,chunk__36824,count__36825,i__36826,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__36823,chunk__36824,count__36825,i__36826,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_37582__$1);


var G__37583 = seq__36823;
var G__37584 = chunk__36824;
var G__37585 = count__36825;
var G__37586 = (i__36826 + (1));
seq__36823 = G__37583;
chunk__36824 = G__37584;
count__36825 = G__37585;
i__36826 = G__37586;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__36823);
if(temp__5823__auto__){
var seq__36823__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36823__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36823__$1);
var G__37587 = cljs.core.chunk_rest(seq__36823__$1);
var G__37588 = c__5568__auto__;
var G__37589 = cljs.core.count(c__5568__auto__);
var G__37590 = (0);
seq__36823 = G__37587;
chunk__36824 = G__37588;
count__36825 = G__37589;
i__36826 = G__37590;
continue;
} else {
var el = cljs.core.first(seq__36823__$1);
var handler_37591__$1 = ((function (seq__36823,chunk__36824,count__36825,i__36826,el,seq__36823__$1,temp__5823__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__36823,chunk__36824,count__36825,i__36826,el,seq__36823__$1,temp__5823__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_37591__$1);


var G__37592 = cljs.core.next(seq__36823__$1);
var G__37593 = null;
var G__37594 = (0);
var G__37595 = (0);
seq__36823 = G__37592;
chunk__36824 = G__37593;
count__36825 = G__37594;
i__36826 = G__37595;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__36847 = arguments.length;
switch (G__36847) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__36853 = cljs.core.seq(events);
var chunk__36854 = null;
var count__36855 = (0);
var i__36856 = (0);
while(true){
if((i__36856 < count__36855)){
var vec__36875 = chunk__36854.cljs$core$IIndexed$_nth$arity$2(null,i__36856);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36875,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36875,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__37603 = seq__36853;
var G__37604 = chunk__36854;
var G__37605 = count__36855;
var G__37606 = (i__36856 + (1));
seq__36853 = G__37603;
chunk__36854 = G__37604;
count__36855 = G__37605;
i__36856 = G__37606;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__36853);
if(temp__5823__auto__){
var seq__36853__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36853__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36853__$1);
var G__37607 = cljs.core.chunk_rest(seq__36853__$1);
var G__37608 = c__5568__auto__;
var G__37609 = cljs.core.count(c__5568__auto__);
var G__37610 = (0);
seq__36853 = G__37607;
chunk__36854 = G__37608;
count__36855 = G__37609;
i__36856 = G__37610;
continue;
} else {
var vec__36879 = cljs.core.first(seq__36853__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36879,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36879,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__37611 = cljs.core.next(seq__36853__$1);
var G__37612 = null;
var G__37613 = (0);
var G__37614 = (0);
seq__36853 = G__37611;
chunk__36854 = G__37612;
count__36855 = G__37613;
i__36856 = G__37614;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__36886 = cljs.core.seq(styles);
var chunk__36887 = null;
var count__36888 = (0);
var i__36889 = (0);
while(true){
if((i__36889 < count__36888)){
var vec__36899 = chunk__36887.cljs$core$IIndexed$_nth$arity$2(null,i__36889);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36899,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36899,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__37617 = seq__36886;
var G__37618 = chunk__36887;
var G__37619 = count__36888;
var G__37620 = (i__36889 + (1));
seq__36886 = G__37617;
chunk__36887 = G__37618;
count__36888 = G__37619;
i__36889 = G__37620;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__36886);
if(temp__5823__auto__){
var seq__36886__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36886__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36886__$1);
var G__37621 = cljs.core.chunk_rest(seq__36886__$1);
var G__37622 = c__5568__auto__;
var G__37623 = cljs.core.count(c__5568__auto__);
var G__37624 = (0);
seq__36886 = G__37621;
chunk__36887 = G__37622;
count__36888 = G__37623;
i__36889 = G__37624;
continue;
} else {
var vec__36902 = cljs.core.first(seq__36886__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36902,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36902,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__37625 = cljs.core.next(seq__36886__$1);
var G__37626 = null;
var G__37627 = (0);
var G__37628 = (0);
seq__36886 = G__37625;
chunk__36887 = G__37626;
count__36888 = G__37627;
i__36889 = G__37628;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__36907_37629 = key;
var G__36907_37630__$1 = (((G__36907_37629 instanceof cljs.core.Keyword))?G__36907_37629.fqn:null);
switch (G__36907_37630__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_37636 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_37636,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_37636,"aria-");
}
})())){
el.setAttribute(ks_37636,value);
} else {
(el[ks_37636] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__36937){
var map__36938 = p__36937;
var map__36938__$1 = cljs.core.__destructure_map(map__36938);
var props = map__36938__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36938__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__36942 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36942,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36942,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36942,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__36948 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__36948,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__36948;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__36954 = arguments.length;
switch (G__36954) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__36968){
var vec__36971 = p__36968;
var seq__36972 = cljs.core.seq(vec__36971);
var first__36973 = cljs.core.first(seq__36972);
var seq__36972__$1 = cljs.core.next(seq__36972);
var nn = first__36973;
var first__36973__$1 = cljs.core.first(seq__36972__$1);
var seq__36972__$2 = cljs.core.next(seq__36972__$1);
var np = first__36973__$1;
var nc = seq__36972__$2;
var node = vec__36971;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__36977 = nn;
var G__36978 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__36977,G__36978) : create_fn.call(null,G__36977,G__36978));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__36981 = nn;
var G__36982 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__36981,G__36982) : create_fn.call(null,G__36981,G__36982));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__36988 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36988,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36988,(1),null);
var seq__36991_37638 = cljs.core.seq(node_children);
var chunk__36992_37639 = null;
var count__36993_37640 = (0);
var i__36994_37641 = (0);
while(true){
if((i__36994_37641 < count__36993_37640)){
var child_struct_37642 = chunk__36992_37639.cljs$core$IIndexed$_nth$arity$2(null,i__36994_37641);
var children_37643 = shadow.dom.dom_node(child_struct_37642);
if(cljs.core.seq_QMARK_(children_37643)){
var seq__37038_37644 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_37643));
var chunk__37040_37645 = null;
var count__37041_37646 = (0);
var i__37042_37647 = (0);
while(true){
if((i__37042_37647 < count__37041_37646)){
var child_37648 = chunk__37040_37645.cljs$core$IIndexed$_nth$arity$2(null,i__37042_37647);
if(cljs.core.truth_(child_37648)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37648);


var G__37649 = seq__37038_37644;
var G__37650 = chunk__37040_37645;
var G__37651 = count__37041_37646;
var G__37652 = (i__37042_37647 + (1));
seq__37038_37644 = G__37649;
chunk__37040_37645 = G__37650;
count__37041_37646 = G__37651;
i__37042_37647 = G__37652;
continue;
} else {
var G__37653 = seq__37038_37644;
var G__37654 = chunk__37040_37645;
var G__37655 = count__37041_37646;
var G__37656 = (i__37042_37647 + (1));
seq__37038_37644 = G__37653;
chunk__37040_37645 = G__37654;
count__37041_37646 = G__37655;
i__37042_37647 = G__37656;
continue;
}
} else {
var temp__5823__auto___37661 = cljs.core.seq(seq__37038_37644);
if(temp__5823__auto___37661){
var seq__37038_37663__$1 = temp__5823__auto___37661;
if(cljs.core.chunked_seq_QMARK_(seq__37038_37663__$1)){
var c__5568__auto___37669 = cljs.core.chunk_first(seq__37038_37663__$1);
var G__37670 = cljs.core.chunk_rest(seq__37038_37663__$1);
var G__37671 = c__5568__auto___37669;
var G__37672 = cljs.core.count(c__5568__auto___37669);
var G__37673 = (0);
seq__37038_37644 = G__37670;
chunk__37040_37645 = G__37671;
count__37041_37646 = G__37672;
i__37042_37647 = G__37673;
continue;
} else {
var child_37674 = cljs.core.first(seq__37038_37663__$1);
if(cljs.core.truth_(child_37674)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37674);


var G__37675 = cljs.core.next(seq__37038_37663__$1);
var G__37676 = null;
var G__37677 = (0);
var G__37678 = (0);
seq__37038_37644 = G__37675;
chunk__37040_37645 = G__37676;
count__37041_37646 = G__37677;
i__37042_37647 = G__37678;
continue;
} else {
var G__37679 = cljs.core.next(seq__37038_37663__$1);
var G__37680 = null;
var G__37681 = (0);
var G__37682 = (0);
seq__37038_37644 = G__37679;
chunk__37040_37645 = G__37680;
count__37041_37646 = G__37681;
i__37042_37647 = G__37682;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_37643);
}


var G__37683 = seq__36991_37638;
var G__37684 = chunk__36992_37639;
var G__37685 = count__36993_37640;
var G__37686 = (i__36994_37641 + (1));
seq__36991_37638 = G__37683;
chunk__36992_37639 = G__37684;
count__36993_37640 = G__37685;
i__36994_37641 = G__37686;
continue;
} else {
var temp__5823__auto___37687 = cljs.core.seq(seq__36991_37638);
if(temp__5823__auto___37687){
var seq__36991_37688__$1 = temp__5823__auto___37687;
if(cljs.core.chunked_seq_QMARK_(seq__36991_37688__$1)){
var c__5568__auto___37689 = cljs.core.chunk_first(seq__36991_37688__$1);
var G__37690 = cljs.core.chunk_rest(seq__36991_37688__$1);
var G__37691 = c__5568__auto___37689;
var G__37692 = cljs.core.count(c__5568__auto___37689);
var G__37693 = (0);
seq__36991_37638 = G__37690;
chunk__36992_37639 = G__37691;
count__36993_37640 = G__37692;
i__36994_37641 = G__37693;
continue;
} else {
var child_struct_37694 = cljs.core.first(seq__36991_37688__$1);
var children_37695 = shadow.dom.dom_node(child_struct_37694);
if(cljs.core.seq_QMARK_(children_37695)){
var seq__37113_37696 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_37695));
var chunk__37115_37697 = null;
var count__37116_37698 = (0);
var i__37117_37699 = (0);
while(true){
if((i__37117_37699 < count__37116_37698)){
var child_37704 = chunk__37115_37697.cljs$core$IIndexed$_nth$arity$2(null,i__37117_37699);
if(cljs.core.truth_(child_37704)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37704);


var G__37705 = seq__37113_37696;
var G__37706 = chunk__37115_37697;
var G__37707 = count__37116_37698;
var G__37708 = (i__37117_37699 + (1));
seq__37113_37696 = G__37705;
chunk__37115_37697 = G__37706;
count__37116_37698 = G__37707;
i__37117_37699 = G__37708;
continue;
} else {
var G__37709 = seq__37113_37696;
var G__37710 = chunk__37115_37697;
var G__37711 = count__37116_37698;
var G__37712 = (i__37117_37699 + (1));
seq__37113_37696 = G__37709;
chunk__37115_37697 = G__37710;
count__37116_37698 = G__37711;
i__37117_37699 = G__37712;
continue;
}
} else {
var temp__5823__auto___37713__$1 = cljs.core.seq(seq__37113_37696);
if(temp__5823__auto___37713__$1){
var seq__37113_37714__$1 = temp__5823__auto___37713__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37113_37714__$1)){
var c__5568__auto___37715 = cljs.core.chunk_first(seq__37113_37714__$1);
var G__37716 = cljs.core.chunk_rest(seq__37113_37714__$1);
var G__37717 = c__5568__auto___37715;
var G__37718 = cljs.core.count(c__5568__auto___37715);
var G__37719 = (0);
seq__37113_37696 = G__37716;
chunk__37115_37697 = G__37717;
count__37116_37698 = G__37718;
i__37117_37699 = G__37719;
continue;
} else {
var child_37720 = cljs.core.first(seq__37113_37714__$1);
if(cljs.core.truth_(child_37720)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37720);


var G__37721 = cljs.core.next(seq__37113_37714__$1);
var G__37722 = null;
var G__37723 = (0);
var G__37724 = (0);
seq__37113_37696 = G__37721;
chunk__37115_37697 = G__37722;
count__37116_37698 = G__37723;
i__37117_37699 = G__37724;
continue;
} else {
var G__37725 = cljs.core.next(seq__37113_37714__$1);
var G__37726 = null;
var G__37727 = (0);
var G__37728 = (0);
seq__37113_37696 = G__37725;
chunk__37115_37697 = G__37726;
count__37116_37698 = G__37727;
i__37117_37699 = G__37728;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_37695);
}


var G__37733 = cljs.core.next(seq__36991_37688__$1);
var G__37734 = null;
var G__37735 = (0);
var G__37736 = (0);
seq__36991_37638 = G__37733;
chunk__36992_37639 = G__37734;
count__36993_37640 = G__37735;
i__36994_37641 = G__37736;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__37137 = cljs.core.seq(node);
var chunk__37138 = null;
var count__37139 = (0);
var i__37140 = (0);
while(true){
if((i__37140 < count__37139)){
var n = chunk__37138.cljs$core$IIndexed$_nth$arity$2(null,i__37140);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__37742 = seq__37137;
var G__37743 = chunk__37138;
var G__37744 = count__37139;
var G__37745 = (i__37140 + (1));
seq__37137 = G__37742;
chunk__37138 = G__37743;
count__37139 = G__37744;
i__37140 = G__37745;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__37137);
if(temp__5823__auto__){
var seq__37137__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37137__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37137__$1);
var G__37746 = cljs.core.chunk_rest(seq__37137__$1);
var G__37747 = c__5568__auto__;
var G__37748 = cljs.core.count(c__5568__auto__);
var G__37749 = (0);
seq__37137 = G__37746;
chunk__37138 = G__37747;
count__37139 = G__37748;
i__37140 = G__37749;
continue;
} else {
var n = cljs.core.first(seq__37137__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__37750 = cljs.core.next(seq__37137__$1);
var G__37751 = null;
var G__37752 = (0);
var G__37753 = (0);
seq__37137 = G__37750;
chunk__37138 = G__37751;
count__37139 = G__37752;
i__37140 = G__37753;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__37158 = arguments.length;
switch (G__37158) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__37168 = arguments.length;
switch (G__37168) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__37188 = arguments.length;
switch (G__37188) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___37761 = arguments.length;
var i__5770__auto___37762 = (0);
while(true){
if((i__5770__auto___37762 < len__5769__auto___37761)){
args__5775__auto__.push((arguments[i__5770__auto___37762]));

var G__37763 = (i__5770__auto___37762 + (1));
i__5770__auto___37762 = G__37763;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__37250_37764 = cljs.core.seq(nodes);
var chunk__37251_37765 = null;
var count__37252_37766 = (0);
var i__37253_37767 = (0);
while(true){
if((i__37253_37767 < count__37252_37766)){
var node_37768 = chunk__37251_37765.cljs$core$IIndexed$_nth$arity$2(null,i__37253_37767);
fragment.appendChild(shadow.dom._to_dom(node_37768));


var G__37769 = seq__37250_37764;
var G__37770 = chunk__37251_37765;
var G__37771 = count__37252_37766;
var G__37772 = (i__37253_37767 + (1));
seq__37250_37764 = G__37769;
chunk__37251_37765 = G__37770;
count__37252_37766 = G__37771;
i__37253_37767 = G__37772;
continue;
} else {
var temp__5823__auto___37773 = cljs.core.seq(seq__37250_37764);
if(temp__5823__auto___37773){
var seq__37250_37774__$1 = temp__5823__auto___37773;
if(cljs.core.chunked_seq_QMARK_(seq__37250_37774__$1)){
var c__5568__auto___37775 = cljs.core.chunk_first(seq__37250_37774__$1);
var G__37776 = cljs.core.chunk_rest(seq__37250_37774__$1);
var G__37777 = c__5568__auto___37775;
var G__37778 = cljs.core.count(c__5568__auto___37775);
var G__37779 = (0);
seq__37250_37764 = G__37776;
chunk__37251_37765 = G__37777;
count__37252_37766 = G__37778;
i__37253_37767 = G__37779;
continue;
} else {
var node_37780 = cljs.core.first(seq__37250_37774__$1);
fragment.appendChild(shadow.dom._to_dom(node_37780));


var G__37781 = cljs.core.next(seq__37250_37774__$1);
var G__37782 = null;
var G__37783 = (0);
var G__37784 = (0);
seq__37250_37764 = G__37781;
chunk__37251_37765 = G__37782;
count__37252_37766 = G__37783;
i__37253_37767 = G__37784;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq37222){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37222));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__37284_37785 = cljs.core.seq(scripts);
var chunk__37285_37786 = null;
var count__37286_37787 = (0);
var i__37287_37788 = (0);
while(true){
if((i__37287_37788 < count__37286_37787)){
var vec__37294_37789 = chunk__37285_37786.cljs$core$IIndexed$_nth$arity$2(null,i__37287_37788);
var script_tag_37790 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37294_37789,(0),null);
var script_body_37791 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37294_37789,(1),null);
eval(script_body_37791);


var G__37792 = seq__37284_37785;
var G__37793 = chunk__37285_37786;
var G__37794 = count__37286_37787;
var G__37795 = (i__37287_37788 + (1));
seq__37284_37785 = G__37792;
chunk__37285_37786 = G__37793;
count__37286_37787 = G__37794;
i__37287_37788 = G__37795;
continue;
} else {
var temp__5823__auto___37796 = cljs.core.seq(seq__37284_37785);
if(temp__5823__auto___37796){
var seq__37284_37797__$1 = temp__5823__auto___37796;
if(cljs.core.chunked_seq_QMARK_(seq__37284_37797__$1)){
var c__5568__auto___37798 = cljs.core.chunk_first(seq__37284_37797__$1);
var G__37799 = cljs.core.chunk_rest(seq__37284_37797__$1);
var G__37800 = c__5568__auto___37798;
var G__37801 = cljs.core.count(c__5568__auto___37798);
var G__37802 = (0);
seq__37284_37785 = G__37799;
chunk__37285_37786 = G__37800;
count__37286_37787 = G__37801;
i__37287_37788 = G__37802;
continue;
} else {
var vec__37297_37803 = cljs.core.first(seq__37284_37797__$1);
var script_tag_37804 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37297_37803,(0),null);
var script_body_37805 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37297_37803,(1),null);
eval(script_body_37805);


var G__37806 = cljs.core.next(seq__37284_37797__$1);
var G__37807 = null;
var G__37808 = (0);
var G__37809 = (0);
seq__37284_37785 = G__37806;
chunk__37285_37786 = G__37807;
count__37286_37787 = G__37808;
i__37287_37788 = G__37809;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__37300){
var vec__37301 = p__37300;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37301,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37301,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__37315 = arguments.length;
switch (G__37315) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__37340 = cljs.core.seq(style_keys);
var chunk__37341 = null;
var count__37342 = (0);
var i__37343 = (0);
while(true){
if((i__37343 < count__37342)){
var it = chunk__37341.cljs$core$IIndexed$_nth$arity$2(null,i__37343);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__37812 = seq__37340;
var G__37813 = chunk__37341;
var G__37814 = count__37342;
var G__37815 = (i__37343 + (1));
seq__37340 = G__37812;
chunk__37341 = G__37813;
count__37342 = G__37814;
i__37343 = G__37815;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__37340);
if(temp__5823__auto__){
var seq__37340__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37340__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37340__$1);
var G__37818 = cljs.core.chunk_rest(seq__37340__$1);
var G__37819 = c__5568__auto__;
var G__37820 = cljs.core.count(c__5568__auto__);
var G__37821 = (0);
seq__37340 = G__37818;
chunk__37341 = G__37819;
count__37342 = G__37820;
i__37343 = G__37821;
continue;
} else {
var it = cljs.core.first(seq__37340__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__37822 = cljs.core.next(seq__37340__$1);
var G__37823 = null;
var G__37824 = (0);
var G__37825 = (0);
seq__37340 = G__37822;
chunk__37341 = G__37823;
count__37342 = G__37824;
i__37343 = G__37825;
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
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k37351,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__37366 = k37351;
var G__37366__$1 = (((G__37366 instanceof cljs.core.Keyword))?G__37366.fqn:null);
switch (G__37366__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37351,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__37369){
var vec__37370 = p__37369;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37370,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37370,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37350){
var self__ = this;
var G__37350__$1 = this;
return (new cljs.core.RecordIter((0),G__37350__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37352,other37353){
var self__ = this;
var this37352__$1 = this;
return (((!((other37353 == null)))) && ((((this37352__$1.constructor === other37353.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37352__$1.x,other37353.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37352__$1.y,other37353.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37352__$1.__extmap,other37353.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k37351){
var self__ = this;
var this__5350__auto____$1 = this;
var G__37391 = k37351;
var G__37391__$1 = (((G__37391 instanceof cljs.core.Keyword))?G__37391.fqn:null);
switch (G__37391__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k37351);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__37350){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__37397 = cljs.core.keyword_identical_QMARK_;
var expr__37398 = k__5352__auto__;
if(cljs.core.truth_((pred__37397.cljs$core$IFn$_invoke$arity$2 ? pred__37397.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__37398) : pred__37397.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__37398)))){
return (new shadow.dom.Coordinate(G__37350,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__37397.cljs$core$IFn$_invoke$arity$2 ? pred__37397.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__37398) : pred__37397.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__37398)))){
return (new shadow.dom.Coordinate(self__.x,G__37350,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__37350),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__37350){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__37350,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__37357){
var extmap__5385__auto__ = (function (){var G__37414 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37357,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__37357)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37414);
} else {
return G__37414;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__37357),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__37357),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
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
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k37426,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__37436 = k37426;
var G__37436__$1 = (((G__37436 instanceof cljs.core.Keyword))?G__37436.fqn:null);
switch (G__37436__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37426,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__37441){
var vec__37442 = p__37441;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37442,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37442,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37425){
var self__ = this;
var G__37425__$1 = this;
return (new cljs.core.RecordIter((0),G__37425__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37427,other37428){
var self__ = this;
var this37427__$1 = this;
return (((!((other37428 == null)))) && ((((this37427__$1.constructor === other37428.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37427__$1.w,other37428.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37427__$1.h,other37428.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37427__$1.__extmap,other37428.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k37426){
var self__ = this;
var this__5350__auto____$1 = this;
var G__37466 = k37426;
var G__37466__$1 = (((G__37466 instanceof cljs.core.Keyword))?G__37466.fqn:null);
switch (G__37466__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k37426);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__37425){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__37467 = cljs.core.keyword_identical_QMARK_;
var expr__37468 = k__5352__auto__;
if(cljs.core.truth_((pred__37467.cljs$core$IFn$_invoke$arity$2 ? pred__37467.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__37468) : pred__37467.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__37468)))){
return (new shadow.dom.Size(G__37425,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__37467.cljs$core$IFn$_invoke$arity$2 ? pred__37467.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__37468) : pred__37467.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__37468)))){
return (new shadow.dom.Size(self__.w,G__37425,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__37425),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__37425){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__37425,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__37430){
var extmap__5385__auto__ = (function (){var G__37470 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37430,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__37430)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37470);
} else {
return G__37470;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__37430),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__37430),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__37982 = (i + (1));
var G__37983 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__37982;
ret = G__37983;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37477){
var vec__37478 = p__37477;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37478,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37478,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__37482 = arguments.length;
switch (G__37482) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5821__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5821__auto__)){
var child = temp__5821__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__38016 = ps;
var G__38017 = (i + (1));
el__$1 = G__38016;
i = G__38017;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__37483 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37483,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37483,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37483,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__37486_38023 = cljs.core.seq(props);
var chunk__37487_38024 = null;
var count__37488_38025 = (0);
var i__37489_38026 = (0);
while(true){
if((i__37489_38026 < count__37488_38025)){
var vec__37496_38027 = chunk__37487_38024.cljs$core$IIndexed$_nth$arity$2(null,i__37489_38026);
var k_38028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37496_38027,(0),null);
var v_38029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37496_38027,(1),null);
el.setAttributeNS((function (){var temp__5823__auto__ = cljs.core.namespace(k_38028);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_38028),v_38029);


var G__38030 = seq__37486_38023;
var G__38031 = chunk__37487_38024;
var G__38032 = count__37488_38025;
var G__38033 = (i__37489_38026 + (1));
seq__37486_38023 = G__38030;
chunk__37487_38024 = G__38031;
count__37488_38025 = G__38032;
i__37489_38026 = G__38033;
continue;
} else {
var temp__5823__auto___38034 = cljs.core.seq(seq__37486_38023);
if(temp__5823__auto___38034){
var seq__37486_38035__$1 = temp__5823__auto___38034;
if(cljs.core.chunked_seq_QMARK_(seq__37486_38035__$1)){
var c__5568__auto___38036 = cljs.core.chunk_first(seq__37486_38035__$1);
var G__38037 = cljs.core.chunk_rest(seq__37486_38035__$1);
var G__38038 = c__5568__auto___38036;
var G__38039 = cljs.core.count(c__5568__auto___38036);
var G__38040 = (0);
seq__37486_38023 = G__38037;
chunk__37487_38024 = G__38038;
count__37488_38025 = G__38039;
i__37489_38026 = G__38040;
continue;
} else {
var vec__37499_38041 = cljs.core.first(seq__37486_38035__$1);
var k_38042 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37499_38041,(0),null);
var v_38043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37499_38041,(1),null);
el.setAttributeNS((function (){var temp__5823__auto____$1 = cljs.core.namespace(k_38042);
if(cljs.core.truth_(temp__5823__auto____$1)){
var ns = temp__5823__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_38042),v_38043);


var G__38044 = cljs.core.next(seq__37486_38035__$1);
var G__38045 = null;
var G__38046 = (0);
var G__38047 = (0);
seq__37486_38023 = G__38044;
chunk__37487_38024 = G__38045;
count__37488_38025 = G__38046;
i__37489_38026 = G__38047;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__37507 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37507,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37507,(1),null);
var seq__37513_38048 = cljs.core.seq(node_children);
var chunk__37515_38049 = null;
var count__37516_38050 = (0);
var i__37517_38051 = (0);
while(true){
if((i__37517_38051 < count__37516_38050)){
var child_struct_38052 = chunk__37515_38049.cljs$core$IIndexed$_nth$arity$2(null,i__37517_38051);
if((!((child_struct_38052 == null)))){
if(typeof child_struct_38052 === 'string'){
var text_38053 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_38053),child_struct_38052].join(''));
} else {
var children_38054 = shadow.dom.svg_node(child_struct_38052);
if(cljs.core.seq_QMARK_(children_38054)){
var seq__37531_38055 = cljs.core.seq(children_38054);
var chunk__37533_38056 = null;
var count__37534_38057 = (0);
var i__37535_38058 = (0);
while(true){
if((i__37535_38058 < count__37534_38057)){
var child_38059 = chunk__37533_38056.cljs$core$IIndexed$_nth$arity$2(null,i__37535_38058);
if(cljs.core.truth_(child_38059)){
node.appendChild(child_38059);


var G__38060 = seq__37531_38055;
var G__38061 = chunk__37533_38056;
var G__38062 = count__37534_38057;
var G__38063 = (i__37535_38058 + (1));
seq__37531_38055 = G__38060;
chunk__37533_38056 = G__38061;
count__37534_38057 = G__38062;
i__37535_38058 = G__38063;
continue;
} else {
var G__38064 = seq__37531_38055;
var G__38065 = chunk__37533_38056;
var G__38066 = count__37534_38057;
var G__38067 = (i__37535_38058 + (1));
seq__37531_38055 = G__38064;
chunk__37533_38056 = G__38065;
count__37534_38057 = G__38066;
i__37535_38058 = G__38067;
continue;
}
} else {
var temp__5823__auto___38072 = cljs.core.seq(seq__37531_38055);
if(temp__5823__auto___38072){
var seq__37531_38073__$1 = temp__5823__auto___38072;
if(cljs.core.chunked_seq_QMARK_(seq__37531_38073__$1)){
var c__5568__auto___38075 = cljs.core.chunk_first(seq__37531_38073__$1);
var G__38076 = cljs.core.chunk_rest(seq__37531_38073__$1);
var G__38077 = c__5568__auto___38075;
var G__38078 = cljs.core.count(c__5568__auto___38075);
var G__38079 = (0);
seq__37531_38055 = G__38076;
chunk__37533_38056 = G__38077;
count__37534_38057 = G__38078;
i__37535_38058 = G__38079;
continue;
} else {
var child_38084 = cljs.core.first(seq__37531_38073__$1);
if(cljs.core.truth_(child_38084)){
node.appendChild(child_38084);


var G__38087 = cljs.core.next(seq__37531_38073__$1);
var G__38088 = null;
var G__38089 = (0);
var G__38090 = (0);
seq__37531_38055 = G__38087;
chunk__37533_38056 = G__38088;
count__37534_38057 = G__38089;
i__37535_38058 = G__38090;
continue;
} else {
var G__38092 = cljs.core.next(seq__37531_38073__$1);
var G__38093 = null;
var G__38094 = (0);
var G__38096 = (0);
seq__37531_38055 = G__38092;
chunk__37533_38056 = G__38093;
count__37534_38057 = G__38094;
i__37535_38058 = G__38096;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_38054);
}
}


var G__38101 = seq__37513_38048;
var G__38102 = chunk__37515_38049;
var G__38103 = count__37516_38050;
var G__38104 = (i__37517_38051 + (1));
seq__37513_38048 = G__38101;
chunk__37515_38049 = G__38102;
count__37516_38050 = G__38103;
i__37517_38051 = G__38104;
continue;
} else {
var G__38109 = seq__37513_38048;
var G__38110 = chunk__37515_38049;
var G__38111 = count__37516_38050;
var G__38112 = (i__37517_38051 + (1));
seq__37513_38048 = G__38109;
chunk__37515_38049 = G__38110;
count__37516_38050 = G__38111;
i__37517_38051 = G__38112;
continue;
}
} else {
var temp__5823__auto___38113 = cljs.core.seq(seq__37513_38048);
if(temp__5823__auto___38113){
var seq__37513_38115__$1 = temp__5823__auto___38113;
if(cljs.core.chunked_seq_QMARK_(seq__37513_38115__$1)){
var c__5568__auto___38116 = cljs.core.chunk_first(seq__37513_38115__$1);
var G__38117 = cljs.core.chunk_rest(seq__37513_38115__$1);
var G__38118 = c__5568__auto___38116;
var G__38119 = cljs.core.count(c__5568__auto___38116);
var G__38120 = (0);
seq__37513_38048 = G__38117;
chunk__37515_38049 = G__38118;
count__37516_38050 = G__38119;
i__37517_38051 = G__38120;
continue;
} else {
var child_struct_38121 = cljs.core.first(seq__37513_38115__$1);
if((!((child_struct_38121 == null)))){
if(typeof child_struct_38121 === 'string'){
var text_38122 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_38122),child_struct_38121].join(''));
} else {
var children_38123 = shadow.dom.svg_node(child_struct_38121);
if(cljs.core.seq_QMARK_(children_38123)){
var seq__37538_38124 = cljs.core.seq(children_38123);
var chunk__37540_38125 = null;
var count__37541_38126 = (0);
var i__37542_38127 = (0);
while(true){
if((i__37542_38127 < count__37541_38126)){
var child_38128 = chunk__37540_38125.cljs$core$IIndexed$_nth$arity$2(null,i__37542_38127);
if(cljs.core.truth_(child_38128)){
node.appendChild(child_38128);


var G__38129 = seq__37538_38124;
var G__38130 = chunk__37540_38125;
var G__38131 = count__37541_38126;
var G__38132 = (i__37542_38127 + (1));
seq__37538_38124 = G__38129;
chunk__37540_38125 = G__38130;
count__37541_38126 = G__38131;
i__37542_38127 = G__38132;
continue;
} else {
var G__38133 = seq__37538_38124;
var G__38135 = chunk__37540_38125;
var G__38136 = count__37541_38126;
var G__38137 = (i__37542_38127 + (1));
seq__37538_38124 = G__38133;
chunk__37540_38125 = G__38135;
count__37541_38126 = G__38136;
i__37542_38127 = G__38137;
continue;
}
} else {
var temp__5823__auto___38141__$1 = cljs.core.seq(seq__37538_38124);
if(temp__5823__auto___38141__$1){
var seq__37538_38142__$1 = temp__5823__auto___38141__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37538_38142__$1)){
var c__5568__auto___38149 = cljs.core.chunk_first(seq__37538_38142__$1);
var G__38150 = cljs.core.chunk_rest(seq__37538_38142__$1);
var G__38151 = c__5568__auto___38149;
var G__38152 = cljs.core.count(c__5568__auto___38149);
var G__38153 = (0);
seq__37538_38124 = G__38150;
chunk__37540_38125 = G__38151;
count__37541_38126 = G__38152;
i__37542_38127 = G__38153;
continue;
} else {
var child_38154 = cljs.core.first(seq__37538_38142__$1);
if(cljs.core.truth_(child_38154)){
node.appendChild(child_38154);


var G__38155 = cljs.core.next(seq__37538_38142__$1);
var G__38156 = null;
var G__38157 = (0);
var G__38158 = (0);
seq__37538_38124 = G__38155;
chunk__37540_38125 = G__38156;
count__37541_38126 = G__38157;
i__37542_38127 = G__38158;
continue;
} else {
var G__38159 = cljs.core.next(seq__37538_38142__$1);
var G__38160 = null;
var G__38161 = (0);
var G__38162 = (0);
seq__37538_38124 = G__38159;
chunk__37540_38125 = G__38160;
count__37541_38126 = G__38161;
i__37542_38127 = G__38162;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_38123);
}
}


var G__38167 = cljs.core.next(seq__37513_38115__$1);
var G__38168 = null;
var G__38169 = (0);
var G__38170 = (0);
seq__37513_38048 = G__38167;
chunk__37515_38049 = G__38168;
count__37516_38050 = G__38169;
i__37517_38051 = G__38170;
continue;
} else {
var G__38172 = cljs.core.next(seq__37513_38115__$1);
var G__38173 = null;
var G__38174 = (0);
var G__38175 = (0);
seq__37513_38048 = G__38172;
chunk__37515_38049 = G__38173;
count__37516_38050 = G__38174;
i__37517_38051 = G__38175;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___38192 = arguments.length;
var i__5770__auto___38193 = (0);
while(true){
if((i__5770__auto___38193 < len__5769__auto___38192)){
args__5775__auto__.push((arguments[i__5770__auto___38193]));

var G__38196 = (i__5770__auto___38193 + (1));
i__5770__auto___38193 = G__38196;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq37547){
var G__37548 = cljs.core.first(seq37547);
var seq37547__$1 = cljs.core.next(seq37547);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37548,seq37547__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__37550 = arguments.length;
switch (G__37550) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__34399__auto___38215 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34400__auto__ = (function (){var switch__34140__auto__ = (function (state_37558){
var state_val_37559 = (state_37558[(1)]);
if((state_val_37559 === (1))){
var state_37558__$1 = state_37558;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37558__$1,(2),once_or_cleanup);
} else {
if((state_val_37559 === (2))){
var inst_37555 = (state_37558[(2)]);
var inst_37556 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_37558__$1 = (function (){var statearr_37560 = state_37558;
(statearr_37560[(7)] = inst_37555);

return statearr_37560;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37558__$1,inst_37556);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__34141__auto__ = null;
var shadow$dom$state_machine__34141__auto____0 = (function (){
var statearr_37561 = [null,null,null,null,null,null,null,null];
(statearr_37561[(0)] = shadow$dom$state_machine__34141__auto__);

(statearr_37561[(1)] = (1));

return statearr_37561;
});
var shadow$dom$state_machine__34141__auto____1 = (function (state_37558){
while(true){
var ret_value__34142__auto__ = (function (){try{while(true){
var result__34143__auto__ = switch__34140__auto__(state_37558);
if(cljs.core.keyword_identical_QMARK_(result__34143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34143__auto__;
}
break;
}
}catch (e37562){var ex__34144__auto__ = e37562;
var statearr_37563_38216 = state_37558;
(statearr_37563_38216[(2)] = ex__34144__auto__);


if(cljs.core.seq((state_37558[(4)]))){
var statearr_37564_38217 = state_37558;
(statearr_37564_38217[(1)] = cljs.core.first((state_37558[(4)])));

} else {
throw ex__34144__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38218 = state_37558;
state_37558 = G__38218;
continue;
} else {
return ret_value__34142__auto__;
}
break;
}
});
shadow$dom$state_machine__34141__auto__ = function(state_37558){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__34141__auto____0.call(this);
case 1:
return shadow$dom$state_machine__34141__auto____1.call(this,state_37558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__34141__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__34141__auto____0;
shadow$dom$state_machine__34141__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__34141__auto____1;
return shadow$dom$state_machine__34141__auto__;
})()
})();
var state__34401__auto__ = (function (){var statearr_37565 = f__34400__auto__();
(statearr_37565[(6)] = c__34399__auto___38215);

return statearr_37565;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34401__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
