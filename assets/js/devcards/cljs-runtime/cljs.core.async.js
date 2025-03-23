goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34562 = (function (f,blockable,meta34563){
this.f = f;
this.blockable = blockable;
this.meta34563 = meta34563;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34562.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34564,meta34563__$1){
var self__ = this;
var _34564__$1 = this;
return (new cljs.core.async.t_cljs$core$async34562(self__.f,self__.blockable,meta34563__$1));
}));

(cljs.core.async.t_cljs$core$async34562.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34564){
var self__ = this;
var _34564__$1 = this;
return self__.meta34563;
}));

(cljs.core.async.t_cljs$core$async34562.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34562.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34562.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async34562.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async34562.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34563","meta34563",1931407786,null)], null);
}));

(cljs.core.async.t_cljs$core$async34562.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34562.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34562");

(cljs.core.async.t_cljs$core$async34562.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34562");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34562.
 */
cljs.core.async.__GT_t_cljs$core$async34562 = (function cljs$core$async$__GT_t_cljs$core$async34562(f,blockable,meta34563){
return (new cljs.core.async.t_cljs$core$async34562(f,blockable,meta34563));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__34561 = arguments.length;
switch (G__34561) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async34562(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__34567 = arguments.length;
switch (G__34567) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__34571 = arguments.length;
switch (G__34571) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__34574 = arguments.length;
switch (G__34574) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_36612 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36612) : fn1.call(null,val_36612));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36612) : fn1.call(null,val_36612));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__34581 = arguments.length;
switch (G__34581) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5821__auto__)){
var ret = temp__5821__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5821__auto__)){
var retb = temp__5821__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___36616 = n;
var x_36617 = (0);
while(true){
if((x_36617 < n__5636__auto___36616)){
(a[x_36617] = x_36617);

var G__36618 = (x_36617 + (1));
x_36617 = G__36618;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34582 = (function (flag,meta34583){
this.flag = flag;
this.meta34583 = meta34583;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34582.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34584,meta34583__$1){
var self__ = this;
var _34584__$1 = this;
return (new cljs.core.async.t_cljs$core$async34582(self__.flag,meta34583__$1));
}));

(cljs.core.async.t_cljs$core$async34582.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34584){
var self__ = this;
var _34584__$1 = this;
return self__.meta34583;
}));

(cljs.core.async.t_cljs$core$async34582.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34582.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34582.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34582.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async34582.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34583","meta34583",-1705314011,null)], null);
}));

(cljs.core.async.t_cljs$core$async34582.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34582.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34582");

(cljs.core.async.t_cljs$core$async34582.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34582");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34582.
 */
cljs.core.async.__GT_t_cljs$core$async34582 = (function cljs$core$async$__GT_t_cljs$core$async34582(flag,meta34583){
return (new cljs.core.async.t_cljs$core$async34582(flag,meta34583));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async34582(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34587 = (function (flag,cb,meta34588){
this.flag = flag;
this.cb = cb;
this.meta34588 = meta34588;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34587.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34589,meta34588__$1){
var self__ = this;
var _34589__$1 = this;
return (new cljs.core.async.t_cljs$core$async34587(self__.flag,self__.cb,meta34588__$1));
}));

(cljs.core.async.t_cljs$core$async34587.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34589){
var self__ = this;
var _34589__$1 = this;
return self__.meta34588;
}));

(cljs.core.async.t_cljs$core$async34587.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34587.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34587.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34587.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async34587.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34588","meta34588",-1222179752,null)], null);
}));

(cljs.core.async.t_cljs$core$async34587.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34587.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34587");

(cljs.core.async.t_cljs$core$async34587.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34587");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34587.
 */
cljs.core.async.__GT_t_cljs$core$async34587 = (function cljs$core$async$__GT_t_cljs$core$async34587(flag,cb,meta34588){
return (new cljs.core.async.t_cljs$core$async34587(flag,cb,meta34588));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async34587(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var ports__$1 = cljs.core.vec(ports);
var n = cljs.core.count(ports__$1);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__34592_SHARP_){
var G__34594 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34592_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34594) : fret.call(null,G__34594));
});})(i,val,idx,port,wport,flag,ports__$1,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__34593_SHARP_){
var G__34595 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34593_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34595) : fret.call(null,G__34595));
});})(i,idx,port,wport,flag,ports__$1,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__36621 = (i + (1));
i = G__36621;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5823__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var got = temp__5823__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___36622 = arguments.length;
var i__5770__auto___36623 = (0);
while(true){
if((i__5770__auto___36623 < len__5769__auto___36622)){
args__5775__auto__.push((arguments[i__5770__auto___36623]));

var G__36624 = (i__5770__auto___36623 + (1));
i__5770__auto___36623 = G__36624;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34601){
var map__34602 = p__34601;
var map__34602__$1 = cljs.core.__destructure_map(map__34602);
var opts = map__34602__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34598){
var G__34599 = cljs.core.first(seq34598);
var seq34598__$1 = cljs.core.next(seq34598);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34599,seq34598__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__34606 = arguments.length;
switch (G__34606) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__34399__auto___36628 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34400__auto__ = (function (){var switch__34140__auto__ = (function (state_34682){
var state_val_34683 = (state_34682[(1)]);
if((state_val_34683 === (7))){
var inst_34663 = (state_34682[(2)]);
var state_34682__$1 = state_34682;
var statearr_34710_36629 = state_34682__$1;
(statearr_34710_36629[(2)] = inst_34663);

(statearr_34710_36629[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (1))){
var state_34682__$1 = state_34682;
var statearr_34711_36630 = state_34682__$1;
(statearr_34711_36630[(2)] = null);

(statearr_34711_36630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (4))){
var inst_34631 = (state_34682[(7)]);
var inst_34631__$1 = (state_34682[(2)]);
var inst_34638 = (inst_34631__$1 == null);
var state_34682__$1 = (function (){var statearr_34712 = state_34682;
(statearr_34712[(7)] = inst_34631__$1);

return statearr_34712;
})();
if(cljs.core.truth_(inst_34638)){
var statearr_34713_36631 = state_34682__$1;
(statearr_34713_36631[(1)] = (5));

} else {
var statearr_34714_36633 = state_34682__$1;
(statearr_34714_36633[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (13))){
var state_34682__$1 = state_34682;
var statearr_34715_36635 = state_34682__$1;
(statearr_34715_36635[(2)] = null);

(statearr_34715_36635[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (6))){
var inst_34631 = (state_34682[(7)]);
var state_34682__$1 = state_34682;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34682__$1,(11),to,inst_34631);
} else {
if((state_val_34683 === (3))){
var inst_34669 = (state_34682[(2)]);
var state_34682__$1 = state_34682;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34682__$1,inst_34669);
} else {
if((state_val_34683 === (12))){
var state_34682__$1 = state_34682;
var statearr_34716_36636 = state_34682__$1;
(statearr_34716_36636[(2)] = null);

(statearr_34716_36636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (2))){
var state_34682__$1 = state_34682;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34682__$1,(4),from);
} else {
if((state_val_34683 === (11))){
var inst_34654 = (state_34682[(2)]);
var state_34682__$1 = state_34682;
if(cljs.core.truth_(inst_34654)){
var statearr_34717_36637 = state_34682__$1;
(statearr_34717_36637[(1)] = (12));

} else {
var statearr_34718_36638 = state_34682__$1;
(statearr_34718_36638[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (9))){
var state_34682__$1 = state_34682;
var statearr_34719_36640 = state_34682__$1;
(statearr_34719_36640[(2)] = null);

(statearr_34719_36640[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (5))){
var state_34682__$1 = state_34682;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34720_36642 = state_34682__$1;
(statearr_34720_36642[(1)] = (8));

} else {
var statearr_34721_36644 = state_34682__$1;
(statearr_34721_36644[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (14))){
var inst_34661 = (state_34682[(2)]);
var state_34682__$1 = state_34682;
var statearr_34726_36645 = state_34682__$1;
(statearr_34726_36645[(2)] = inst_34661);

(statearr_34726_36645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (10))){
var inst_34649 = (state_34682[(2)]);
var state_34682__$1 = state_34682;
var statearr_34735_36647 = state_34682__$1;
(statearr_34735_36647[(2)] = inst_34649);

(statearr_34735_36647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (8))){
var inst_34646 = cljs.core.async.close_BANG_(to);
var state_34682__$1 = state_34682;
var statearr_34744_36648 = state_34682__$1;
(statearr_34744_36648[(2)] = inst_34646);

(statearr_34744_36648[(1)] = (10));


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
}
}
});
return (function() {
var cljs$core$async$state_machine__34141__auto__ = null;
var cljs$core$async$state_machine__34141__auto____0 = (function (){
var statearr_34745 = [null,null,null,null,null,null,null,null];
(statearr_34745[(0)] = cljs$core$async$state_machine__34141__auto__);

(statearr_34745[(1)] = (1));

return statearr_34745;
});
var cljs$core$async$state_machine__34141__auto____1 = (function (state_34682){
while(true){
var ret_value__34142__auto__ = (function (){try{while(true){
var result__34143__auto__ = switch__34140__auto__(state_34682);
if(cljs.core.keyword_identical_QMARK_(result__34143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34143__auto__;
}
break;
}
}catch (e34746){var ex__34144__auto__ = e34746;
var statearr_34747_36650 = state_34682;
(statearr_34747_36650[(2)] = ex__34144__auto__);


if(cljs.core.seq((state_34682[(4)]))){
var statearr_34748_36651 = state_34682;
(statearr_34748_36651[(1)] = cljs.core.first((state_34682[(4)])));

} else {
throw ex__34144__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36652 = state_34682;
state_34682 = G__36652;
continue;
} else {
return ret_value__34142__auto__;
}
break;
}
});
cljs$core$async$state_machine__34141__auto__ = function(state_34682){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34141__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34141__auto____1.call(this,state_34682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34141__auto____0;
cljs$core$async$state_machine__34141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34141__auto____1;
return cljs$core$async$state_machine__34141__auto__;
})()
})();
var state__34401__auto__ = (function (){var statearr_34749 = f__34400__auto__();
(statearr_34749[(6)] = c__34399__auto___36628);

return statearr_34749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34401__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__34750){
var vec__34751 = p__34750;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34751,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34751,(1),null);
var job = vec__34751;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__34399__auto___36660 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34400__auto__ = (function (){var switch__34140__auto__ = (function (state_34758){
var state_val_34759 = (state_34758[(1)]);
if((state_val_34759 === (1))){
var state_34758__$1 = state_34758;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34758__$1,(2),res,v);
} else {
if((state_val_34759 === (2))){
var inst_34755 = (state_34758[(2)]);
var inst_34756 = cljs.core.async.close_BANG_(res);
var state_34758__$1 = (function (){var statearr_34760 = state_34758;
(statearr_34760[(7)] = inst_34755);

return statearr_34760;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34758__$1,inst_34756);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34141__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34141__auto____0 = (function (){
var statearr_34761 = [null,null,null,null,null,null,null,null];
(statearr_34761[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34141__auto__);

(statearr_34761[(1)] = (1));

return statearr_34761;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34141__auto____1 = (function (state_34758){
while(true){
var ret_value__34142__auto__ = (function (){try{while(true){
var result__34143__auto__ = switch__34140__auto__(state_34758);
if(cljs.core.keyword_identical_QMARK_(result__34143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34143__auto__;
}
break;
}
}catch (e34762){var ex__34144__auto__ = e34762;
var statearr_34763_36662 = state_34758;
(statearr_34763_36662[(2)] = ex__34144__auto__);


if(cljs.core.seq((state_34758[(4)]))){
var statearr_34764_36663 = state_34758;
(statearr_34764_36663[(1)] = cljs.core.first((state_34758[(4)])));

} else {
throw ex__34144__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36664 = state_34758;
state_34758 = G__36664;
continue;
} else {
return ret_value__34142__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34141__auto__ = function(state_34758){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34141__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34141__auto____1.call(this,state_34758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34141__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34141__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34141__auto__;
})()
})();
var state__34401__auto__ = (function (){var statearr_34765 = f__34400__auto__();
(statearr_34765[(6)] = c__34399__auto___36660);

return statearr_34765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34401__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__34767){
var vec__34768 = p__34767;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34768,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34768,(1),null);
var job = vec__34768;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___36665 = n;
var __36666 = (0);
while(true){
if((__36666 < n__5636__auto___36665)){
var G__34771_36667 = type;
var G__34771_36668__$1 = (((G__34771_36667 instanceof cljs.core.Keyword))?G__34771_36667.fqn:null);
switch (G__34771_36668__$1) {
case "compute":
var c__34399__auto___36670 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36666,c__34399__auto___36670,G__34771_36667,G__34771_36668__$1,n__5636__auto___36665,jobs,results,process__$1,async){
return (function (){
var f__34400__auto__ = (function (){var switch__34140__auto__ = ((function (__36666,c__34399__auto___36670,G__34771_36667,G__34771_36668__$1,n__5636__auto___36665,jobs,results,process__$1,async){
return (function (state_34784){
var state_val_34785 = (state_34784[(1)]);
if((state_val_34785 === (1))){
var state_34784__$1 = state_34784;
var statearr_34786_36671 = state_34784__$1;
(statearr_34786_36671[(2)] = null);

(statearr_34786_36671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (2))){
var state_34784__$1 = state_34784;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34784__$1,(4),jobs);
} else {
if((state_val_34785 === (3))){
var inst_34782 = (state_34784[(2)]);
var state_34784__$1 = state_34784;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34784__$1,inst_34782);
} else {
if((state_val_34785 === (4))){
var inst_34774 = (state_34784[(2)]);
var inst_34775 = process__$1(inst_34774);
var state_34784__$1 = state_34784;
if(cljs.core.truth_(inst_34775)){
var statearr_34787_36675 = state_34784__$1;
(statearr_34787_36675[(1)] = (5));

} else {
var statearr_34788_36676 = state_34784__$1;
(statearr_34788_36676[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (5))){
var state_34784__$1 = state_34784;
var statearr_34789_36677 = state_34784__$1;
(statearr_34789_36677[(2)] = null);

(statearr_34789_36677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (6))){
var state_34784__$1 = state_34784;
var statearr_34790_36678 = state_34784__$1;
(statearr_34790_36678[(2)] = null);

(statearr_34790_36678[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (7))){
var inst_34780 = (state_34784[(2)]);
var state_34784__$1 = state_34784;
var statearr_34791_36679 = state_34784__$1;
(statearr_34791_36679[(2)] = inst_34780);

(statearr_34791_36679[(1)] = (3));


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
});})(__36666,c__34399__auto___36670,G__34771_36667,G__34771_36668__$1,n__5636__auto___36665,jobs,results,process__$1,async))
;
return ((function (__36666,switch__34140__auto__,c__34399__auto___36670,G__34771_36667,G__34771_36668__$1,n__5636__auto___36665,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34141__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34141__auto____0 = (function (){
var statearr_34793 = [null,null,null,null,null,null,null];
(statearr_34793[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34141__auto__);

(statearr_34793[(1)] = (1));

return statearr_34793;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34141__auto____1 = (function (state_34784){
while(true){
var ret_value__34142__auto__ = (function (){try{while(true){
var result__34143__auto__ = switch__34140__auto__(state_34784);
if(cljs.core.keyword_identical_QMARK_(result__34143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34143__auto__;
}
break;
}
}catch (e34794){var ex__34144__auto__ = e34794;
var statearr_34795_36682 = state_34784;
(statearr_34795_36682[(2)] = ex__34144__auto__);


if(cljs.core.seq((state_34784[(4)]))){
var statearr_34796_36683 = state_34784;
(statearr_34796_36683[(1)] = cljs.core.first((state_34784[(4)])));

} else {
throw ex__34144__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36684 = state_34784;
state_34784 = G__36684;
continue;
} else {
return ret_value__34142__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34141__auto__ = function(state_34784){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34141__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34141__auto____1.call(this,state_34784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34141__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34141__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34141__auto__;
})()
;})(__36666,switch__34140__auto__,c__34399__auto___36670,G__34771_36667,G__34771_36668__$1,n__5636__auto___36665,jobs,results,process__$1,async))
})();
var state__34401__auto__ = (function (){var statearr_34797 = f__34400__auto__();
(statearr_34797[(6)] = c__34399__auto___36670);

return statearr_34797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34401__auto__);
});})(__36666,c__34399__auto___36670,G__34771_36667,G__34771_36668__$1,n__5636__auto___36665,jobs,results,process__$1,async))
);


break;
case "async":
var c__34399__auto___36685 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36666,c__34399__auto___36685,G__34771_36667,G__34771_36668__$1,n__5636__auto___36665,jobs,results,process__$1,async){
return (function (){
var f__34400__auto__ = (function (){var switch__34140__auto__ = ((function (__36666,c__34399__auto___36685,G__34771_36667,G__34771_36668__$1,n__5636__auto___36665,jobs,results,process__$1,async){
return (function (state_34810){
var state_val_34811 = (state_34810[(1)]);
if((state_val_34811 === (1))){
var state_34810__$1 = state_34810;
var statearr_34812_36689 = state_34810__$1;
(statearr_34812_36689[(2)] = null);

(statearr_34812_36689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34811 === (2))){
var state_34810__$1 = state_34810;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34810__$1,(4),jobs);
} else {
if((state_val_34811 === (3))){
var inst_34808 = (state_34810[(2)]);
var state_34810__$1 = state_34810;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34810__$1,inst_34808);
} else {
if((state_val_34811 === (4))){
var inst_34800 = (state_34810[(2)]);
var inst_34801 = async(inst_34800);
var state_34810__$1 = state_34810;
if(cljs.core.truth_(inst_34801)){
var statearr_34813_36694 = state_34810__$1;
(statearr_34813_36694[(1)] = (5));

} else {
var statearr_34814_36695 = state_34810__$1;
(statearr_34814_36695[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34811 === (5))){
var state_34810__$1 = state_34810;
var statearr_34815_36696 = state_34810__$1;
(statearr_34815_36696[(2)] = null);

(statearr_34815_36696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34811 === (6))){
var state_34810__$1 = state_34810;
var statearr_34816_36697 = state_34810__$1;
(statearr_34816_36697[(2)] = null);

(statearr_34816_36697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34811 === (7))){
var inst_34806 = (state_34810[(2)]);
var state_34810__$1 = state_34810;
var statearr_34817_36698 = state_34810__$1;
(statearr_34817_36698[(2)] = inst_34806);

(statearr_34817_36698[(1)] = (3));


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
});})(__36666,c__34399__auto___36685,G__34771_36667,G__34771_36668__$1,n__5636__auto___36665,jobs,results,process__$1,async))
;
return ((function (__36666,switch__34140__auto__,c__34399__auto___36685,G__34771_36667,G__34771_36668__$1,n__5636__auto___36665,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34141__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34141__auto____0 = (function (){
var statearr_34818 = [null,null,null,null,null,null,null];
(statearr_34818[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34141__auto__);

(statearr_34818[(1)] = (1));

return statearr_34818;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34141__auto____1 = (function (state_34810){
while(true){
var ret_value__34142__auto__ = (function (){try{while(true){
var result__34143__auto__ = switch__34140__auto__(state_34810);
if(cljs.core.keyword_identical_QMARK_(result__34143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34143__auto__;
}
break;
}
}catch (e34819){var ex__34144__auto__ = e34819;
var statearr_34820_36702 = state_34810;
(statearr_34820_36702[(2)] = ex__34144__auto__);


if(cljs.core.seq((state_34810[(4)]))){
var statearr_34821_36703 = state_34810;
(statearr_34821_36703[(1)] = cljs.core.first((state_34810[(4)])));

} else {
throw ex__34144__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36704 = state_34810;
state_34810 = G__36704;
continue;
} else {
return ret_value__34142__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34141__auto__ = function(state_34810){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34141__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34141__auto____1.call(this,state_34810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34141__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34141__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34141__auto__;
})()
;})(__36666,switch__34140__auto__,c__34399__auto___36685,G__34771_36667,G__34771_36668__$1,n__5636__auto___36665,jobs,results,process__$1,async))
})();
var state__34401__auto__ = (function (){var statearr_34822 = f__34400__auto__();
(statearr_34822[(6)] = c__34399__auto___36685);

return statearr_34822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34401__auto__);
});})(__36666,c__34399__auto___36685,G__34771_36667,G__34771_36668__$1,n__5636__auto___36665,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34771_36668__$1)].join('')));

}

var G__36705 = (__36666 + (1));
__36666 = G__36705;
continue;
} else {
}
break;
}

var c__34399__auto___36706 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34400__auto__ = (function (){var switch__34140__auto__ = (function (state_34844){
var state_val_34845 = (state_34844[(1)]);
if((state_val_34845 === (7))){
var inst_34840 = (state_34844[(2)]);
var state_34844__$1 = state_34844;
var statearr_34846_36707 = state_34844__$1;
(statearr_34846_36707[(2)] = inst_34840);

(statearr_34846_36707[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34845 === (1))){
var state_34844__$1 = state_34844;
var statearr_34847_36708 = state_34844__$1;
(statearr_34847_36708[(2)] = null);

(statearr_34847_36708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34845 === (4))){
var inst_34825 = (state_34844[(7)]);
var inst_34825__$1 = (state_34844[(2)]);
var inst_34826 = (inst_34825__$1 == null);
var state_34844__$1 = (function (){var statearr_34848 = state_34844;
(statearr_34848[(7)] = inst_34825__$1);

return statearr_34848;
})();
if(cljs.core.truth_(inst_34826)){
var statearr_34849_36709 = state_34844__$1;
(statearr_34849_36709[(1)] = (5));

} else {
var statearr_34850_36710 = state_34844__$1;
(statearr_34850_36710[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34845 === (6))){
var inst_34825 = (state_34844[(7)]);
var inst_34830 = (state_34844[(8)]);
var inst_34830__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34831 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34832 = [inst_34825,inst_34830__$1];
var inst_34833 = (new cljs.core.PersistentVector(null,2,(5),inst_34831,inst_34832,null));
var state_34844__$1 = (function (){var statearr_34851 = state_34844;
(statearr_34851[(8)] = inst_34830__$1);

return statearr_34851;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34844__$1,(8),jobs,inst_34833);
} else {
if((state_val_34845 === (3))){
var inst_34842 = (state_34844[(2)]);
var state_34844__$1 = state_34844;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34844__$1,inst_34842);
} else {
if((state_val_34845 === (2))){
var state_34844__$1 = state_34844;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34844__$1,(4),from);
} else {
if((state_val_34845 === (9))){
var inst_34837 = (state_34844[(2)]);
var state_34844__$1 = (function (){var statearr_34852 = state_34844;
(statearr_34852[(9)] = inst_34837);

return statearr_34852;
})();
var statearr_34853_36714 = state_34844__$1;
(statearr_34853_36714[(2)] = null);

(statearr_34853_36714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34845 === (5))){
var inst_34828 = cljs.core.async.close_BANG_(jobs);
var state_34844__$1 = state_34844;
var statearr_34854_36715 = state_34844__$1;
(statearr_34854_36715[(2)] = inst_34828);

(statearr_34854_36715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34845 === (8))){
var inst_34830 = (state_34844[(8)]);
var inst_34835 = (state_34844[(2)]);
var state_34844__$1 = (function (){var statearr_34855 = state_34844;
(statearr_34855[(10)] = inst_34835);

return statearr_34855;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34844__$1,(9),results,inst_34830);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34141__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34141__auto____0 = (function (){
var statearr_34856 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34856[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34141__auto__);

(statearr_34856[(1)] = (1));

return statearr_34856;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34141__auto____1 = (function (state_34844){
while(true){
var ret_value__34142__auto__ = (function (){try{while(true){
var result__34143__auto__ = switch__34140__auto__(state_34844);
if(cljs.core.keyword_identical_QMARK_(result__34143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34143__auto__;
}
break;
}
}catch (e34857){var ex__34144__auto__ = e34857;
var statearr_34858_36717 = state_34844;
(statearr_34858_36717[(2)] = ex__34144__auto__);


if(cljs.core.seq((state_34844[(4)]))){
var statearr_34859_36718 = state_34844;
(statearr_34859_36718[(1)] = cljs.core.first((state_34844[(4)])));

} else {
throw ex__34144__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36719 = state_34844;
state_34844 = G__36719;
continue;
} else {
return ret_value__34142__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34141__auto__ = function(state_34844){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34141__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34141__auto____1.call(this,state_34844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34141__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34141__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34141__auto__;
})()
})();
var state__34401__auto__ = (function (){var statearr_34860 = f__34400__auto__();
(statearr_34860[(6)] = c__34399__auto___36706);

return statearr_34860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34401__auto__);
}));


var c__34399__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34400__auto__ = (function (){var switch__34140__auto__ = (function (state_34898){
var state_val_34899 = (state_34898[(1)]);
if((state_val_34899 === (7))){
var inst_34894 = (state_34898[(2)]);
var state_34898__$1 = state_34898;
var statearr_34900_36720 = state_34898__$1;
(statearr_34900_36720[(2)] = inst_34894);

(statearr_34900_36720[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34899 === (20))){
var state_34898__$1 = state_34898;
var statearr_34901_36721 = state_34898__$1;
(statearr_34901_36721[(2)] = null);

(statearr_34901_36721[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34899 === (1))){
var state_34898__$1 = state_34898;
var statearr_34902_36722 = state_34898__$1;
(statearr_34902_36722[(2)] = null);

(statearr_34902_36722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34899 === (4))){
var inst_34863 = (state_34898[(7)]);
var inst_34863__$1 = (state_34898[(2)]);
var inst_34864 = (inst_34863__$1 == null);
var state_34898__$1 = (function (){var statearr_34903 = state_34898;
(statearr_34903[(7)] = inst_34863__$1);

return statearr_34903;
})();
if(cljs.core.truth_(inst_34864)){
var statearr_34904_36724 = state_34898__$1;
(statearr_34904_36724[(1)] = (5));

} else {
var statearr_34905_36725 = state_34898__$1;
(statearr_34905_36725[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34899 === (15))){
var inst_34876 = (state_34898[(8)]);
var state_34898__$1 = state_34898;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34898__$1,(18),to,inst_34876);
} else {
if((state_val_34899 === (21))){
var inst_34889 = (state_34898[(2)]);
var state_34898__$1 = state_34898;
var statearr_34906_36727 = state_34898__$1;
(statearr_34906_36727[(2)] = inst_34889);

(statearr_34906_36727[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34899 === (13))){
var inst_34891 = (state_34898[(2)]);
var state_34898__$1 = (function (){var statearr_34907 = state_34898;
(statearr_34907[(9)] = inst_34891);

return statearr_34907;
})();
var statearr_34908_36728 = state_34898__$1;
(statearr_34908_36728[(2)] = null);

(statearr_34908_36728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34899 === (6))){
var inst_34863 = (state_34898[(7)]);
var state_34898__$1 = state_34898;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34898__$1,(11),inst_34863);
} else {
if((state_val_34899 === (17))){
var inst_34884 = (state_34898[(2)]);
var state_34898__$1 = state_34898;
if(cljs.core.truth_(inst_34884)){
var statearr_34909_36729 = state_34898__$1;
(statearr_34909_36729[(1)] = (19));

} else {
var statearr_34910_36730 = state_34898__$1;
(statearr_34910_36730[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34899 === (3))){
var inst_34896 = (state_34898[(2)]);
var state_34898__$1 = state_34898;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34898__$1,inst_34896);
} else {
if((state_val_34899 === (12))){
var inst_34873 = (state_34898[(10)]);
var state_34898__$1 = state_34898;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34898__$1,(14),inst_34873);
} else {
if((state_val_34899 === (2))){
var state_34898__$1 = state_34898;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34898__$1,(4),results);
} else {
if((state_val_34899 === (19))){
var state_34898__$1 = state_34898;
var statearr_34911_36731 = state_34898__$1;
(statearr_34911_36731[(2)] = null);

(statearr_34911_36731[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34899 === (11))){
var inst_34873 = (state_34898[(2)]);
var state_34898__$1 = (function (){var statearr_34912 = state_34898;
(statearr_34912[(10)] = inst_34873);

return statearr_34912;
})();
var statearr_34913_36732 = state_34898__$1;
(statearr_34913_36732[(2)] = null);

(statearr_34913_36732[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34899 === (9))){
var state_34898__$1 = state_34898;
var statearr_34914_36734 = state_34898__$1;
(statearr_34914_36734[(2)] = null);

(statearr_34914_36734[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34899 === (5))){
var state_34898__$1 = state_34898;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34915_36735 = state_34898__$1;
(statearr_34915_36735[(1)] = (8));

} else {
var statearr_34916_36737 = state_34898__$1;
(statearr_34916_36737[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34899 === (14))){
var inst_34876 = (state_34898[(8)]);
var inst_34878 = (state_34898[(11)]);
var inst_34876__$1 = (state_34898[(2)]);
var inst_34877 = (inst_34876__$1 == null);
var inst_34878__$1 = cljs.core.not(inst_34877);
var state_34898__$1 = (function (){var statearr_34917 = state_34898;
(statearr_34917[(8)] = inst_34876__$1);

(statearr_34917[(11)] = inst_34878__$1);

return statearr_34917;
})();
if(inst_34878__$1){
var statearr_34918_36738 = state_34898__$1;
(statearr_34918_36738[(1)] = (15));

} else {
var statearr_34919_36742 = state_34898__$1;
(statearr_34919_36742[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34899 === (16))){
var inst_34878 = (state_34898[(11)]);
var state_34898__$1 = state_34898;
var statearr_34920_36744 = state_34898__$1;
(statearr_34920_36744[(2)] = inst_34878);

(statearr_34920_36744[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34899 === (10))){
var inst_34870 = (state_34898[(2)]);
var state_34898__$1 = state_34898;
var statearr_34921_36745 = state_34898__$1;
(statearr_34921_36745[(2)] = inst_34870);

(statearr_34921_36745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34899 === (18))){
var inst_34881 = (state_34898[(2)]);
var state_34898__$1 = state_34898;
var statearr_34922_36749 = state_34898__$1;
(statearr_34922_36749[(2)] = inst_34881);

(statearr_34922_36749[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34899 === (8))){
var inst_34867 = cljs.core.async.close_BANG_(to);
var state_34898__$1 = state_34898;
var statearr_34923_36750 = state_34898__$1;
(statearr_34923_36750[(2)] = inst_34867);

(statearr_34923_36750[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__34141__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34141__auto____0 = (function (){
var statearr_34924 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34924[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34141__auto__);

(statearr_34924[(1)] = (1));

return statearr_34924;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34141__auto____1 = (function (state_34898){
while(true){
var ret_value__34142__auto__ = (function (){try{while(true){
var result__34143__auto__ = switch__34140__auto__(state_34898);
if(cljs.core.keyword_identical_QMARK_(result__34143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34143__auto__;
}
break;
}
}catch (e34925){var ex__34144__auto__ = e34925;
var statearr_34926_36756 = state_34898;
(statearr_34926_36756[(2)] = ex__34144__auto__);


if(cljs.core.seq((state_34898[(4)]))){
var statearr_34927_36757 = state_34898;
(statearr_34927_36757[(1)] = cljs.core.first((state_34898[(4)])));

} else {
throw ex__34144__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36758 = state_34898;
state_34898 = G__36758;
continue;
} else {
return ret_value__34142__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34141__auto__ = function(state_34898){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34141__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34141__auto____1.call(this,state_34898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34141__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34141__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34141__auto__;
})()
})();
var state__34401__auto__ = (function (){var statearr_34928 = f__34400__auto__();
(statearr_34928[(6)] = c__34399__auto__);

return statearr_34928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34401__auto__);
}));

return c__34399__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__34930 = arguments.length;
switch (G__34930) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__34932 = arguments.length;
switch (G__34932) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__34935 = arguments.length;
switch (G__34935) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__34399__auto___36781 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34400__auto__ = (function (){var switch__34140__auto__ = (function (state_34961){
var state_val_34962 = (state_34961[(1)]);
if((state_val_34962 === (7))){
var inst_34957 = (state_34961[(2)]);
var state_34961__$1 = state_34961;
var statearr_34963_36782 = state_34961__$1;
(statearr_34963_36782[(2)] = inst_34957);

(statearr_34963_36782[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34962 === (1))){
var state_34961__$1 = state_34961;
var statearr_34964_36783 = state_34961__$1;
(statearr_34964_36783[(2)] = null);

(statearr_34964_36783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34962 === (4))){
var inst_34938 = (state_34961[(7)]);
var inst_34938__$1 = (state_34961[(2)]);
var inst_34939 = (inst_34938__$1 == null);
var state_34961__$1 = (function (){var statearr_34965 = state_34961;
(statearr_34965[(7)] = inst_34938__$1);

return statearr_34965;
})();
if(cljs.core.truth_(inst_34939)){
var statearr_34966_36784 = state_34961__$1;
(statearr_34966_36784[(1)] = (5));

} else {
var statearr_34967_36787 = state_34961__$1;
(statearr_34967_36787[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34962 === (13))){
var state_34961__$1 = state_34961;
var statearr_34968_36788 = state_34961__$1;
(statearr_34968_36788[(2)] = null);

(statearr_34968_36788[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34962 === (6))){
var inst_34938 = (state_34961[(7)]);
var inst_34944 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34938) : p.call(null,inst_34938));
var state_34961__$1 = state_34961;
if(cljs.core.truth_(inst_34944)){
var statearr_34969_36789 = state_34961__$1;
(statearr_34969_36789[(1)] = (9));

} else {
var statearr_34970_36790 = state_34961__$1;
(statearr_34970_36790[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34962 === (3))){
var inst_34959 = (state_34961[(2)]);
var state_34961__$1 = state_34961;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34961__$1,inst_34959);
} else {
if((state_val_34962 === (12))){
var state_34961__$1 = state_34961;
var statearr_34971_36792 = state_34961__$1;
(statearr_34971_36792[(2)] = null);

(statearr_34971_36792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34962 === (2))){
var state_34961__$1 = state_34961;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34961__$1,(4),ch);
} else {
if((state_val_34962 === (11))){
var inst_34938 = (state_34961[(7)]);
var inst_34948 = (state_34961[(2)]);
var state_34961__$1 = state_34961;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34961__$1,(8),inst_34948,inst_34938);
} else {
if((state_val_34962 === (9))){
var state_34961__$1 = state_34961;
var statearr_34972_36794 = state_34961__$1;
(statearr_34972_36794[(2)] = tc);

(statearr_34972_36794[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34962 === (5))){
var inst_34941 = cljs.core.async.close_BANG_(tc);
var inst_34942 = cljs.core.async.close_BANG_(fc);
var state_34961__$1 = (function (){var statearr_34973 = state_34961;
(statearr_34973[(8)] = inst_34941);

return statearr_34973;
})();
var statearr_34974_36795 = state_34961__$1;
(statearr_34974_36795[(2)] = inst_34942);

(statearr_34974_36795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34962 === (14))){
var inst_34955 = (state_34961[(2)]);
var state_34961__$1 = state_34961;
var statearr_34975_36796 = state_34961__$1;
(statearr_34975_36796[(2)] = inst_34955);

(statearr_34975_36796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34962 === (10))){
var state_34961__$1 = state_34961;
var statearr_34976_36797 = state_34961__$1;
(statearr_34976_36797[(2)] = fc);

(statearr_34976_36797[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34962 === (8))){
var inst_34950 = (state_34961[(2)]);
var state_34961__$1 = state_34961;
if(cljs.core.truth_(inst_34950)){
var statearr_34977_36798 = state_34961__$1;
(statearr_34977_36798[(1)] = (12));

} else {
var statearr_34978_36799 = state_34961__$1;
(statearr_34978_36799[(1)] = (13));

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
}
}
});
return (function() {
var cljs$core$async$state_machine__34141__auto__ = null;
var cljs$core$async$state_machine__34141__auto____0 = (function (){
var statearr_34979 = [null,null,null,null,null,null,null,null,null];
(statearr_34979[(0)] = cljs$core$async$state_machine__34141__auto__);

(statearr_34979[(1)] = (1));

return statearr_34979;
});
var cljs$core$async$state_machine__34141__auto____1 = (function (state_34961){
while(true){
var ret_value__34142__auto__ = (function (){try{while(true){
var result__34143__auto__ = switch__34140__auto__(state_34961);
if(cljs.core.keyword_identical_QMARK_(result__34143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34143__auto__;
}
break;
}
}catch (e34980){var ex__34144__auto__ = e34980;
var statearr_34981_36800 = state_34961;
(statearr_34981_36800[(2)] = ex__34144__auto__);


if(cljs.core.seq((state_34961[(4)]))){
var statearr_34982_36801 = state_34961;
(statearr_34982_36801[(1)] = cljs.core.first((state_34961[(4)])));

} else {
throw ex__34144__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36802 = state_34961;
state_34961 = G__36802;
continue;
} else {
return ret_value__34142__auto__;
}
break;
}
});
cljs$core$async$state_machine__34141__auto__ = function(state_34961){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34141__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34141__auto____1.call(this,state_34961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34141__auto____0;
cljs$core$async$state_machine__34141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34141__auto____1;
return cljs$core$async$state_machine__34141__auto__;
})()
})();
var state__34401__auto__ = (function (){var statearr_34983 = f__34400__auto__();
(statearr_34983[(6)] = c__34399__auto___36781);

return statearr_34983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34401__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__34399__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34400__auto__ = (function (){var switch__34140__auto__ = (function (state_35007){
var state_val_35008 = (state_35007[(1)]);
if((state_val_35008 === (7))){
var inst_35003 = (state_35007[(2)]);
var state_35007__$1 = state_35007;
var statearr_35009_36803 = state_35007__$1;
(statearr_35009_36803[(2)] = inst_35003);

(statearr_35009_36803[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35008 === (1))){
var inst_34985 = init;
var inst_34986 = inst_34985;
var state_35007__$1 = (function (){var statearr_35010 = state_35007;
(statearr_35010[(7)] = inst_34986);

return statearr_35010;
})();
var statearr_35011_36805 = state_35007__$1;
(statearr_35011_36805[(2)] = null);

(statearr_35011_36805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35008 === (4))){
var inst_34989 = (state_35007[(8)]);
var inst_34989__$1 = (state_35007[(2)]);
var inst_34990 = (inst_34989__$1 == null);
var state_35007__$1 = (function (){var statearr_35012 = state_35007;
(statearr_35012[(8)] = inst_34989__$1);

return statearr_35012;
})();
if(cljs.core.truth_(inst_34990)){
var statearr_35013_36807 = state_35007__$1;
(statearr_35013_36807[(1)] = (5));

} else {
var statearr_35014_36808 = state_35007__$1;
(statearr_35014_36808[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35008 === (6))){
var inst_34986 = (state_35007[(7)]);
var inst_34989 = (state_35007[(8)]);
var inst_34993 = (state_35007[(9)]);
var inst_34993__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34986,inst_34989) : f.call(null,inst_34986,inst_34989));
var inst_34994 = cljs.core.reduced_QMARK_(inst_34993__$1);
var state_35007__$1 = (function (){var statearr_35015 = state_35007;
(statearr_35015[(9)] = inst_34993__$1);

return statearr_35015;
})();
if(inst_34994){
var statearr_35016_36809 = state_35007__$1;
(statearr_35016_36809[(1)] = (8));

} else {
var statearr_35018_36810 = state_35007__$1;
(statearr_35018_36810[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35008 === (3))){
var inst_35005 = (state_35007[(2)]);
var state_35007__$1 = state_35007;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35007__$1,inst_35005);
} else {
if((state_val_35008 === (2))){
var state_35007__$1 = state_35007;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35007__$1,(4),ch);
} else {
if((state_val_35008 === (9))){
var inst_34993 = (state_35007[(9)]);
var inst_34986 = inst_34993;
var state_35007__$1 = (function (){var statearr_35020 = state_35007;
(statearr_35020[(7)] = inst_34986);

return statearr_35020;
})();
var statearr_35021_36811 = state_35007__$1;
(statearr_35021_36811[(2)] = null);

(statearr_35021_36811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35008 === (5))){
var inst_34986 = (state_35007[(7)]);
var state_35007__$1 = state_35007;
var statearr_35023_36812 = state_35007__$1;
(statearr_35023_36812[(2)] = inst_34986);

(statearr_35023_36812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35008 === (10))){
var inst_35001 = (state_35007[(2)]);
var state_35007__$1 = state_35007;
var statearr_35024_36813 = state_35007__$1;
(statearr_35024_36813[(2)] = inst_35001);

(statearr_35024_36813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35008 === (8))){
var inst_34993 = (state_35007[(9)]);
var inst_34996 = cljs.core.deref(inst_34993);
var state_35007__$1 = state_35007;
var statearr_35026_36814 = state_35007__$1;
(statearr_35026_36814[(2)] = inst_34996);

(statearr_35026_36814[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__34141__auto__ = null;
var cljs$core$async$reduce_$_state_machine__34141__auto____0 = (function (){
var statearr_35027 = [null,null,null,null,null,null,null,null,null,null];
(statearr_35027[(0)] = cljs$core$async$reduce_$_state_machine__34141__auto__);

(statearr_35027[(1)] = (1));

return statearr_35027;
});
var cljs$core$async$reduce_$_state_machine__34141__auto____1 = (function (state_35007){
while(true){
var ret_value__34142__auto__ = (function (){try{while(true){
var result__34143__auto__ = switch__34140__auto__(state_35007);
if(cljs.core.keyword_identical_QMARK_(result__34143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34143__auto__;
}
break;
}
}catch (e35028){var ex__34144__auto__ = e35028;
var statearr_35029_36815 = state_35007;
(statearr_35029_36815[(2)] = ex__34144__auto__);


if(cljs.core.seq((state_35007[(4)]))){
var statearr_35030_36817 = state_35007;
(statearr_35030_36817[(1)] = cljs.core.first((state_35007[(4)])));

} else {
throw ex__34144__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36818 = state_35007;
state_35007 = G__36818;
continue;
} else {
return ret_value__34142__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34141__auto__ = function(state_35007){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34141__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34141__auto____1.call(this,state_35007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34141__auto____0;
cljs$core$async$reduce_$_state_machine__34141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34141__auto____1;
return cljs$core$async$reduce_$_state_machine__34141__auto__;
})()
})();
var state__34401__auto__ = (function (){var statearr_35032 = f__34400__auto__();
(statearr_35032[(6)] = c__34399__auto__);

return statearr_35032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34401__auto__);
}));

return c__34399__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__34399__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34400__auto__ = (function (){var switch__34140__auto__ = (function (state_35038){
var state_val_35039 = (state_35038[(1)]);
if((state_val_35039 === (1))){
var inst_35033 = cljs.core.async.reduce(f__$1,init,ch);
var state_35038__$1 = state_35038;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35038__$1,(2),inst_35033);
} else {
if((state_val_35039 === (2))){
var inst_35035 = (state_35038[(2)]);
var inst_35036 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_35035) : f__$1.call(null,inst_35035));
var state_35038__$1 = state_35038;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35038__$1,inst_35036);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__34141__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34141__auto____0 = (function (){
var statearr_35041 = [null,null,null,null,null,null,null];
(statearr_35041[(0)] = cljs$core$async$transduce_$_state_machine__34141__auto__);

(statearr_35041[(1)] = (1));

return statearr_35041;
});
var cljs$core$async$transduce_$_state_machine__34141__auto____1 = (function (state_35038){
while(true){
var ret_value__34142__auto__ = (function (){try{while(true){
var result__34143__auto__ = switch__34140__auto__(state_35038);
if(cljs.core.keyword_identical_QMARK_(result__34143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34143__auto__;
}
break;
}
}catch (e35042){var ex__34144__auto__ = e35042;
var statearr_35043_36819 = state_35038;
(statearr_35043_36819[(2)] = ex__34144__auto__);


if(cljs.core.seq((state_35038[(4)]))){
var statearr_35044_36820 = state_35038;
(statearr_35044_36820[(1)] = cljs.core.first((state_35038[(4)])));

} else {
throw ex__34144__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36821 = state_35038;
state_35038 = G__36821;
continue;
} else {
return ret_value__34142__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34141__auto__ = function(state_35038){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34141__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34141__auto____1.call(this,state_35038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__34141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34141__auto____0;
cljs$core$async$transduce_$_state_machine__34141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34141__auto____1;
return cljs$core$async$transduce_$_state_machine__34141__auto__;
})()
})();
var state__34401__auto__ = (function (){var statearr_35045 = f__34400__auto__();
(statearr_35045[(6)] = c__34399__auto__);

return statearr_35045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34401__auto__);
}));

return c__34399__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__35048 = arguments.length;
switch (G__35048) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__34399__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34400__auto__ = (function (){var switch__34140__auto__ = (function (state_35073){
var state_val_35074 = (state_35073[(1)]);
if((state_val_35074 === (7))){
var inst_35055 = (state_35073[(2)]);
var state_35073__$1 = state_35073;
var statearr_35076_36827 = state_35073__$1;
(statearr_35076_36827[(2)] = inst_35055);

(statearr_35076_36827[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35074 === (1))){
var inst_35049 = cljs.core.seq(coll);
var inst_35050 = inst_35049;
var state_35073__$1 = (function (){var statearr_35077 = state_35073;
(statearr_35077[(7)] = inst_35050);

return statearr_35077;
})();
var statearr_35078_36828 = state_35073__$1;
(statearr_35078_36828[(2)] = null);

(statearr_35078_36828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35074 === (4))){
var inst_35050 = (state_35073[(7)]);
var inst_35053 = cljs.core.first(inst_35050);
var state_35073__$1 = state_35073;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35073__$1,(7),ch,inst_35053);
} else {
if((state_val_35074 === (13))){
var inst_35067 = (state_35073[(2)]);
var state_35073__$1 = state_35073;
var statearr_35079_36829 = state_35073__$1;
(statearr_35079_36829[(2)] = inst_35067);

(statearr_35079_36829[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35074 === (6))){
var inst_35058 = (state_35073[(2)]);
var state_35073__$1 = state_35073;
if(cljs.core.truth_(inst_35058)){
var statearr_35080_36830 = state_35073__$1;
(statearr_35080_36830[(1)] = (8));

} else {
var statearr_35081_36831 = state_35073__$1;
(statearr_35081_36831[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35074 === (3))){
var inst_35071 = (state_35073[(2)]);
var state_35073__$1 = state_35073;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35073__$1,inst_35071);
} else {
if((state_val_35074 === (12))){
var state_35073__$1 = state_35073;
var statearr_35082_36832 = state_35073__$1;
(statearr_35082_36832[(2)] = null);

(statearr_35082_36832[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35074 === (2))){
var inst_35050 = (state_35073[(7)]);
var state_35073__$1 = state_35073;
if(cljs.core.truth_(inst_35050)){
var statearr_35084_36833 = state_35073__$1;
(statearr_35084_36833[(1)] = (4));

} else {
var statearr_35085_36834 = state_35073__$1;
(statearr_35085_36834[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35074 === (11))){
var inst_35064 = cljs.core.async.close_BANG_(ch);
var state_35073__$1 = state_35073;
var statearr_35086_36835 = state_35073__$1;
(statearr_35086_36835[(2)] = inst_35064);

(statearr_35086_36835[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35074 === (9))){
var state_35073__$1 = state_35073;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35087_36836 = state_35073__$1;
(statearr_35087_36836[(1)] = (11));

} else {
var statearr_35088_36837 = state_35073__$1;
(statearr_35088_36837[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35074 === (5))){
var inst_35050 = (state_35073[(7)]);
var state_35073__$1 = state_35073;
var statearr_35089_36838 = state_35073__$1;
(statearr_35089_36838[(2)] = inst_35050);

(statearr_35089_36838[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35074 === (10))){
var inst_35069 = (state_35073[(2)]);
var state_35073__$1 = state_35073;
var statearr_35090_36839 = state_35073__$1;
(statearr_35090_36839[(2)] = inst_35069);

(statearr_35090_36839[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35074 === (8))){
var inst_35050 = (state_35073[(7)]);
var inst_35060 = cljs.core.next(inst_35050);
var inst_35050__$1 = inst_35060;
var state_35073__$1 = (function (){var statearr_35091 = state_35073;
(statearr_35091[(7)] = inst_35050__$1);

return statearr_35091;
})();
var statearr_35092_36840 = state_35073__$1;
(statearr_35092_36840[(2)] = null);

(statearr_35092_36840[(1)] = (2));


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
}
});
return (function() {
var cljs$core$async$state_machine__34141__auto__ = null;
var cljs$core$async$state_machine__34141__auto____0 = (function (){
var statearr_35094 = [null,null,null,null,null,null,null,null];
(statearr_35094[(0)] = cljs$core$async$state_machine__34141__auto__);

(statearr_35094[(1)] = (1));

return statearr_35094;
});
var cljs$core$async$state_machine__34141__auto____1 = (function (state_35073){
while(true){
var ret_value__34142__auto__ = (function (){try{while(true){
var result__34143__auto__ = switch__34140__auto__(state_35073);
if(cljs.core.keyword_identical_QMARK_(result__34143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34143__auto__;
}
break;
}
}catch (e35095){var ex__34144__auto__ = e35095;
var statearr_35096_36841 = state_35073;
(statearr_35096_36841[(2)] = ex__34144__auto__);


if(cljs.core.seq((state_35073[(4)]))){
var statearr_35098_36842 = state_35073;
(statearr_35098_36842[(1)] = cljs.core.first((state_35073[(4)])));

} else {
throw ex__34144__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36843 = state_35073;
state_35073 = G__36843;
continue;
} else {
return ret_value__34142__auto__;
}
break;
}
});
cljs$core$async$state_machine__34141__auto__ = function(state_35073){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34141__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34141__auto____1.call(this,state_35073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34141__auto____0;
cljs$core$async$state_machine__34141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34141__auto____1;
return cljs$core$async$state_machine__34141__auto__;
})()
})();
var state__34401__auto__ = (function (){var statearr_35099 = f__34400__auto__();
(statearr_35099[(6)] = c__34399__auto__);

return statearr_35099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34401__auto__);
}));

return c__34399__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__35102 = arguments.length;
switch (G__35102) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_36846 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_36846(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_36848 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_36848(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_36849 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_36849(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_36850 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_36850(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35114 = (function (ch,cs,meta35115){
this.ch = ch;
this.cs = cs;
this.meta35115 = meta35115;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35114.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35116,meta35115__$1){
var self__ = this;
var _35116__$1 = this;
return (new cljs.core.async.t_cljs$core$async35114(self__.ch,self__.cs,meta35115__$1));
}));

(cljs.core.async.t_cljs$core$async35114.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35116){
var self__ = this;
var _35116__$1 = this;
return self__.meta35115;
}));

(cljs.core.async.t_cljs$core$async35114.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35114.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35114.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35114.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async35114.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async35114.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async35114.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta35115","meta35115",-14863038,null)], null);
}));

(cljs.core.async.t_cljs$core$async35114.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35114.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35114");

(cljs.core.async.t_cljs$core$async35114.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35114");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35114.
 */
cljs.core.async.__GT_t_cljs$core$async35114 = (function cljs$core$async$__GT_t_cljs$core$async35114(ch,cs,meta35115){
return (new cljs.core.async.t_cljs$core$async35114(ch,cs,meta35115));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async35114(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__34399__auto___36861 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34400__auto__ = (function (){var switch__34140__auto__ = (function (state_35250){
var state_val_35251 = (state_35250[(1)]);
if((state_val_35251 === (7))){
var inst_35246 = (state_35250[(2)]);
var state_35250__$1 = state_35250;
var statearr_35253_36878 = state_35250__$1;
(statearr_35253_36878[(2)] = inst_35246);

(statearr_35253_36878[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35251 === (20))){
var inst_35151 = (state_35250[(7)]);
var inst_35163 = cljs.core.first(inst_35151);
var inst_35164 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35163,(0),null);
var inst_35165 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35163,(1),null);
var state_35250__$1 = (function (){var statearr_35254 = state_35250;
(statearr_35254[(8)] = inst_35164);

return statearr_35254;
})();
if(cljs.core.truth_(inst_35165)){
var statearr_35255_36883 = state_35250__$1;
(statearr_35255_36883[(1)] = (22));

} else {
var statearr_35256_36884 = state_35250__$1;
(statearr_35256_36884[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35251 === (27))){
var inst_35193 = (state_35250[(9)]);
var inst_35195 = (state_35250[(10)]);
var inst_35200 = (state_35250[(11)]);
var inst_35120 = (state_35250[(12)]);
var inst_35200__$1 = cljs.core._nth(inst_35193,inst_35195);
var inst_35201 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_35200__$1,inst_35120,done);
var state_35250__$1 = (function (){var statearr_35257 = state_35250;
(statearr_35257[(11)] = inst_35200__$1);

return statearr_35257;
})();
if(cljs.core.truth_(inst_35201)){
var statearr_35258_36893 = state_35250__$1;
(statearr_35258_36893[(1)] = (30));

} else {
var statearr_35259_36894 = state_35250__$1;
(statearr_35259_36894[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35251 === (1))){
var state_35250__$1 = state_35250;
var statearr_35260_36898 = state_35250__$1;
(statearr_35260_36898[(2)] = null);

(statearr_35260_36898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35251 === (24))){
var inst_35151 = (state_35250[(7)]);
var inst_35170 = (state_35250[(2)]);
var inst_35171 = cljs.core.next(inst_35151);
var inst_35129 = inst_35171;
var inst_35130 = null;
var inst_35131 = (0);
var inst_35132 = (0);
var state_35250__$1 = (function (){var statearr_35261 = state_35250;
(statearr_35261[(13)] = inst_35170);

(statearr_35261[(14)] = inst_35129);

(statearr_35261[(15)] = inst_35130);

(statearr_35261[(16)] = inst_35131);

(statearr_35261[(17)] = inst_35132);

return statearr_35261;
})();
var statearr_35263_36905 = state_35250__$1;
(statearr_35263_36905[(2)] = null);

(statearr_35263_36905[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35251 === (39))){
var state_35250__$1 = state_35250;
var statearr_35267_36906 = state_35250__$1;
(statearr_35267_36906[(2)] = null);

(statearr_35267_36906[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35251 === (4))){
var inst_35120 = (state_35250[(12)]);
var inst_35120__$1 = (state_35250[(2)]);
var inst_35121 = (inst_35120__$1 == null);
var state_35250__$1 = (function (){var statearr_35268 = state_35250;
(statearr_35268[(12)] = inst_35120__$1);

return statearr_35268;
})();
if(cljs.core.truth_(inst_35121)){
var statearr_35269_36908 = state_35250__$1;
(statearr_35269_36908[(1)] = (5));

} else {
var statearr_35270_36909 = state_35250__$1;
(statearr_35270_36909[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35251 === (15))){
var inst_35132 = (state_35250[(17)]);
var inst_35129 = (state_35250[(14)]);
var inst_35130 = (state_35250[(15)]);
var inst_35131 = (state_35250[(16)]);
var inst_35147 = (state_35250[(2)]);
var inst_35148 = (inst_35132 + (1));
var tmp35264 = inst_35131;
var tmp35265 = inst_35130;
var tmp35266 = inst_35129;
var inst_35129__$1 = tmp35266;
var inst_35130__$1 = tmp35265;
var inst_35131__$1 = tmp35264;
var inst_35132__$1 = inst_35148;
var state_35250__$1 = (function (){var statearr_35272 = state_35250;
(statearr_35272[(18)] = inst_35147);

(statearr_35272[(14)] = inst_35129__$1);

(statearr_35272[(15)] = inst_35130__$1);

(statearr_35272[(16)] = inst_35131__$1);

(statearr_35272[(17)] = inst_35132__$1);

return statearr_35272;
})();
var statearr_35273_36910 = state_35250__$1;
(statearr_35273_36910[(2)] = null);

(statearr_35273_36910[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35251 === (21))){
var inst_35174 = (state_35250[(2)]);
var state_35250__$1 = state_35250;
var statearr_35277_36911 = state_35250__$1;
(statearr_35277_36911[(2)] = inst_35174);

(statearr_35277_36911[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35251 === (31))){
var inst_35200 = (state_35250[(11)]);
var inst_35204 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_35200);
var state_35250__$1 = state_35250;
var statearr_35278_36912 = state_35250__$1;
(statearr_35278_36912[(2)] = inst_35204);

(statearr_35278_36912[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35251 === (32))){
var inst_35195 = (state_35250[(10)]);
var inst_35192 = (state_35250[(19)]);
var inst_35193 = (state_35250[(9)]);
var inst_35194 = (state_35250[(20)]);
var inst_35206 = (state_35250[(2)]);
var inst_35207 = (inst_35195 + (1));
var tmp35274 = inst_35193;
var tmp35275 = inst_35192;
var tmp35276 = inst_35194;
var inst_35192__$1 = tmp35275;
var inst_35193__$1 = tmp35274;
var inst_35194__$1 = tmp35276;
var inst_35195__$1 = inst_35207;
var state_35250__$1 = (function (){var statearr_35279 = state_35250;
(statearr_35279[(21)] = inst_35206);

(statearr_35279[(19)] = inst_35192__$1);

(statearr_35279[(9)] = inst_35193__$1);

(statearr_35279[(20)] = inst_35194__$1);

(statearr_35279[(10)] = inst_35195__$1);

return statearr_35279;
})();
var statearr_35281_36915 = state_35250__$1;
(statearr_35281_36915[(2)] = null);

(statearr_35281_36915[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35251 === (40))){
var inst_35219 = (state_35250[(22)]);
var inst_35223 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_35219);
var state_35250__$1 = state_35250;
var statearr_35282_36916 = state_35250__$1;
(statearr_35282_36916[(2)] = inst_35223);

(statearr_35282_36916[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35251 === (33))){
var inst_35210 = (state_35250[(23)]);
var inst_35212 = cljs.core.chunked_seq_QMARK_(inst_35210);
var state_35250__$1 = state_35250;
if(inst_35212){
var statearr_35283_36917 = state_35250__$1;
(statearr_35283_36917[(1)] = (36));

} else {
var statearr_35284_36918 = state_35250__$1;
(statearr_35284_36918[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35251 === (13))){
var inst_35141 = (state_35250[(24)]);
var inst_35144 = cljs.core.async.close_BANG_(inst_35141);
var state_35250__$1 = state_35250;
var statearr_35285_36920 = state_35250__$1;
(statearr_35285_36920[(2)] = inst_35144);

(statearr_35285_36920[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35251 === (22))){
var inst_35164 = (state_35250[(8)]);
var inst_35167 = cljs.core.async.close_BANG_(inst_35164);
var state_35250__$1 = state_35250;
var statearr_35286_36921 = state_35250__$1;
(statearr_35286_36921[(2)] = inst_35167);

(statearr_35286_36921[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35251 === (36))){
var inst_35210 = (state_35250[(23)]);
var inst_35214 = cljs.core.chunk_first(inst_35210);
var inst_35215 = cljs.core.chunk_rest(inst_35210);
var inst_35216 = cljs.core.count(inst_35214);
var inst_35192 = inst_35215;
var inst_35193 = inst_35214;
var inst_35194 = inst_35216;
var inst_35195 = (0);
var state_35250__$1 = (function (){var statearr_35288 = state_35250;
(statearr_35288[(19)] = inst_35192);

(statearr_35288[(9)] = inst_35193);

(statearr_35288[(20)] = inst_35194);

(statearr_35288[(10)] = inst_35195);

return statearr_35288;
})();
var statearr_35289_36922 = state_35250__$1;
(statearr_35289_36922[(2)] = null);

(statearr_35289_36922[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35251 === (41))){
var inst_35210 = (state_35250[(23)]);
var inst_35225 = (state_35250[(2)]);
var inst_35226 = cljs.core.next(inst_35210);
var inst_35192 = inst_35226;
var inst_35193 = null;
var inst_35194 = (0);
var inst_35195 = (0);
var state_35250__$1 = (function (){var statearr_35290 = state_35250;
(statearr_35290[(25)] = inst_35225);

(statearr_35290[(19)] = inst_35192);

(statearr_35290[(9)] = inst_35193);

(statearr_35290[(20)] = inst_35194);

(statearr_35290[(10)] = inst_35195);

return statearr_35290;
})();
var statearr_35291_36923 = state_35250__$1;
(statearr_35291_36923[(2)] = null);

(statearr_35291_36923[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35251 === (43))){
var state_35250__$1 = state_35250;
var statearr_35292_36924 = state_35250__$1;
(statearr_35292_36924[(2)] = null);

(statearr_35292_36924[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35251 === (29))){
var inst_35234 = (state_35250[(2)]);
var state_35250__$1 = state_35250;
var statearr_35293_36925 = state_35250__$1;
(statearr_35293_36925[(2)] = inst_35234);

(statearr_35293_36925[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35251 === (44))){
var inst_35243 = (state_35250[(2)]);
var state_35250__$1 = (function (){var statearr_35294 = state_35250;
(statearr_35294[(26)] = inst_35243);

return statearr_35294;
})();
var statearr_35296_36926 = state_35250__$1;
(statearr_35296_36926[(2)] = null);

(statearr_35296_36926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35251 === (6))){
var inst_35184 = (state_35250[(27)]);
var inst_35183 = cljs.core.deref(cs);
var inst_35184__$1 = cljs.core.keys(inst_35183);
var inst_35185 = cljs.core.count(inst_35184__$1);
var inst_35186 = cljs.core.reset_BANG_(dctr,inst_35185);
var inst_35191 = cljs.core.seq(inst_35184__$1);
var inst_35192 = inst_35191;
var inst_35193 = null;
var inst_35194 = (0);
var inst_35195 = (0);
var state_35250__$1 = (function (){var statearr_35297 = state_35250;
(statearr_35297[(27)] = inst_35184__$1);

(statearr_35297[(28)] = inst_35186);

(statearr_35297[(19)] = inst_35192);

(statearr_35297[(9)] = inst_35193);

(statearr_35297[(20)] = inst_35194);

(statearr_35297[(10)] = inst_35195);

return statearr_35297;
})();
var statearr_35298_36936 = state_35250__$1;
(statearr_35298_36936[(2)] = null);

(statearr_35298_36936[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35251 === (28))){
var inst_35192 = (state_35250[(19)]);
var inst_35210 = (state_35250[(23)]);
var inst_35210__$1 = cljs.core.seq(inst_35192);
var state_35250__$1 = (function (){var statearr_35299 = state_35250;
(statearr_35299[(23)] = inst_35210__$1);

return statearr_35299;
})();
if(inst_35210__$1){
var statearr_35300_36939 = state_35250__$1;
(statearr_35300_36939[(1)] = (33));

} else {
var statearr_35301_36940 = state_35250__$1;
(statearr_35301_36940[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35251 === (25))){
var inst_35195 = (state_35250[(10)]);
var inst_35194 = (state_35250[(20)]);
var inst_35197 = (inst_35195 < inst_35194);
var inst_35198 = inst_35197;
var state_35250__$1 = state_35250;
if(cljs.core.truth_(inst_35198)){
var statearr_35302_36941 = state_35250__$1;
(statearr_35302_36941[(1)] = (27));

} else {
var statearr_35303_36945 = state_35250__$1;
(statearr_35303_36945[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35251 === (34))){
var state_35250__$1 = state_35250;
var statearr_35305_36946 = state_35250__$1;
(statearr_35305_36946[(2)] = null);

(statearr_35305_36946[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35251 === (17))){
var state_35250__$1 = state_35250;
var statearr_35306_36947 = state_35250__$1;
(statearr_35306_36947[(2)] = null);

(statearr_35306_36947[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35251 === (3))){
var inst_35248 = (state_35250[(2)]);
var state_35250__$1 = state_35250;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35250__$1,inst_35248);
} else {
if((state_val_35251 === (12))){
var inst_35179 = (state_35250[(2)]);
var state_35250__$1 = state_35250;
var statearr_35307_36950 = state_35250__$1;
(statearr_35307_36950[(2)] = inst_35179);

(statearr_35307_36950[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35251 === (2))){
var state_35250__$1 = state_35250;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35250__$1,(4),ch);
} else {
if((state_val_35251 === (23))){
var state_35250__$1 = state_35250;
var statearr_35308_36951 = state_35250__$1;
(statearr_35308_36951[(2)] = null);

(statearr_35308_36951[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35251 === (35))){
var inst_35232 = (state_35250[(2)]);
var state_35250__$1 = state_35250;
var statearr_35309_36952 = state_35250__$1;
(statearr_35309_36952[(2)] = inst_35232);

(statearr_35309_36952[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35251 === (19))){
var inst_35151 = (state_35250[(7)]);
var inst_35155 = cljs.core.chunk_first(inst_35151);
var inst_35156 = cljs.core.chunk_rest(inst_35151);
var inst_35157 = cljs.core.count(inst_35155);
var inst_35129 = inst_35156;
var inst_35130 = inst_35155;
var inst_35131 = inst_35157;
var inst_35132 = (0);
var state_35250__$1 = (function (){var statearr_35311 = state_35250;
(statearr_35311[(14)] = inst_35129);

(statearr_35311[(15)] = inst_35130);

(statearr_35311[(16)] = inst_35131);

(statearr_35311[(17)] = inst_35132);

return statearr_35311;
})();
var statearr_35312_36955 = state_35250__$1;
(statearr_35312_36955[(2)] = null);

(statearr_35312_36955[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35251 === (11))){
var inst_35129 = (state_35250[(14)]);
var inst_35151 = (state_35250[(7)]);
var inst_35151__$1 = cljs.core.seq(inst_35129);
var state_35250__$1 = (function (){var statearr_35313 = state_35250;
(statearr_35313[(7)] = inst_35151__$1);

return statearr_35313;
})();
if(inst_35151__$1){
var statearr_35314_36956 = state_35250__$1;
(statearr_35314_36956[(1)] = (16));

} else {
var statearr_35315_36957 = state_35250__$1;
(statearr_35315_36957[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35251 === (9))){
var inst_35181 = (state_35250[(2)]);
var state_35250__$1 = state_35250;
var statearr_35316_36958 = state_35250__$1;
(statearr_35316_36958[(2)] = inst_35181);

(statearr_35316_36958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35251 === (5))){
var inst_35127 = cljs.core.deref(cs);
var inst_35128 = cljs.core.seq(inst_35127);
var inst_35129 = inst_35128;
var inst_35130 = null;
var inst_35131 = (0);
var inst_35132 = (0);
var state_35250__$1 = (function (){var statearr_35317 = state_35250;
(statearr_35317[(14)] = inst_35129);

(statearr_35317[(15)] = inst_35130);

(statearr_35317[(16)] = inst_35131);

(statearr_35317[(17)] = inst_35132);

return statearr_35317;
})();
var statearr_35318_36959 = state_35250__$1;
(statearr_35318_36959[(2)] = null);

(statearr_35318_36959[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35251 === (14))){
var state_35250__$1 = state_35250;
var statearr_35320_36960 = state_35250__$1;
(statearr_35320_36960[(2)] = null);

(statearr_35320_36960[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35251 === (45))){
var inst_35240 = (state_35250[(2)]);
var state_35250__$1 = state_35250;
var statearr_35321_36961 = state_35250__$1;
(statearr_35321_36961[(2)] = inst_35240);

(statearr_35321_36961[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35251 === (26))){
var inst_35184 = (state_35250[(27)]);
var inst_35236 = (state_35250[(2)]);
var inst_35237 = cljs.core.seq(inst_35184);
var state_35250__$1 = (function (){var statearr_35322 = state_35250;
(statearr_35322[(29)] = inst_35236);

return statearr_35322;
})();
if(inst_35237){
var statearr_35323_36962 = state_35250__$1;
(statearr_35323_36962[(1)] = (42));

} else {
var statearr_35324_36963 = state_35250__$1;
(statearr_35324_36963[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35251 === (16))){
var inst_35151 = (state_35250[(7)]);
var inst_35153 = cljs.core.chunked_seq_QMARK_(inst_35151);
var state_35250__$1 = state_35250;
if(inst_35153){
var statearr_35325_36964 = state_35250__$1;
(statearr_35325_36964[(1)] = (19));

} else {
var statearr_35326_36965 = state_35250__$1;
(statearr_35326_36965[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35251 === (38))){
var inst_35229 = (state_35250[(2)]);
var state_35250__$1 = state_35250;
var statearr_35327_36966 = state_35250__$1;
(statearr_35327_36966[(2)] = inst_35229);

(statearr_35327_36966[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35251 === (30))){
var state_35250__$1 = state_35250;
var statearr_35328_36967 = state_35250__$1;
(statearr_35328_36967[(2)] = null);

(statearr_35328_36967[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35251 === (10))){
var inst_35130 = (state_35250[(15)]);
var inst_35132 = (state_35250[(17)]);
var inst_35140 = cljs.core._nth(inst_35130,inst_35132);
var inst_35141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35140,(0),null);
var inst_35142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35140,(1),null);
var state_35250__$1 = (function (){var statearr_35330 = state_35250;
(statearr_35330[(24)] = inst_35141);

return statearr_35330;
})();
if(cljs.core.truth_(inst_35142)){
var statearr_35331_36969 = state_35250__$1;
(statearr_35331_36969[(1)] = (13));

} else {
var statearr_35332_36970 = state_35250__$1;
(statearr_35332_36970[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35251 === (18))){
var inst_35177 = (state_35250[(2)]);
var state_35250__$1 = state_35250;
var statearr_35333_36974 = state_35250__$1;
(statearr_35333_36974[(2)] = inst_35177);

(statearr_35333_36974[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35251 === (42))){
var state_35250__$1 = state_35250;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35250__$1,(45),dchan);
} else {
if((state_val_35251 === (37))){
var inst_35210 = (state_35250[(23)]);
var inst_35219 = (state_35250[(22)]);
var inst_35120 = (state_35250[(12)]);
var inst_35219__$1 = cljs.core.first(inst_35210);
var inst_35220 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_35219__$1,inst_35120,done);
var state_35250__$1 = (function (){var statearr_35334 = state_35250;
(statearr_35334[(22)] = inst_35219__$1);

return statearr_35334;
})();
if(cljs.core.truth_(inst_35220)){
var statearr_35335_36975 = state_35250__$1;
(statearr_35335_36975[(1)] = (39));

} else {
var statearr_35336_36976 = state_35250__$1;
(statearr_35336_36976[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35251 === (8))){
var inst_35132 = (state_35250[(17)]);
var inst_35131 = (state_35250[(16)]);
var inst_35134 = (inst_35132 < inst_35131);
var inst_35135 = inst_35134;
var state_35250__$1 = state_35250;
if(cljs.core.truth_(inst_35135)){
var statearr_35337_36979 = state_35250__$1;
(statearr_35337_36979[(1)] = (10));

} else {
var statearr_35339_36980 = state_35250__$1;
(statearr_35339_36980[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__34141__auto__ = null;
var cljs$core$async$mult_$_state_machine__34141__auto____0 = (function (){
var statearr_35340 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35340[(0)] = cljs$core$async$mult_$_state_machine__34141__auto__);

(statearr_35340[(1)] = (1));

return statearr_35340;
});
var cljs$core$async$mult_$_state_machine__34141__auto____1 = (function (state_35250){
while(true){
var ret_value__34142__auto__ = (function (){try{while(true){
var result__34143__auto__ = switch__34140__auto__(state_35250);
if(cljs.core.keyword_identical_QMARK_(result__34143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34143__auto__;
}
break;
}
}catch (e35341){var ex__34144__auto__ = e35341;
var statearr_35342_36985 = state_35250;
(statearr_35342_36985[(2)] = ex__34144__auto__);


if(cljs.core.seq((state_35250[(4)]))){
var statearr_35343_36986 = state_35250;
(statearr_35343_36986[(1)] = cljs.core.first((state_35250[(4)])));

} else {
throw ex__34144__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36987 = state_35250;
state_35250 = G__36987;
continue;
} else {
return ret_value__34142__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34141__auto__ = function(state_35250){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34141__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34141__auto____1.call(this,state_35250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34141__auto____0;
cljs$core$async$mult_$_state_machine__34141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34141__auto____1;
return cljs$core$async$mult_$_state_machine__34141__auto__;
})()
})();
var state__34401__auto__ = (function (){var statearr_35344 = f__34400__auto__();
(statearr_35344[(6)] = c__34399__auto___36861);

return statearr_35344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34401__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__35347 = arguments.length;
switch (G__35347) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_37003 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_37003(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_37005 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_37005(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_37006 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_37006(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_37007 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_37007(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_37008 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_37008(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___37009 = arguments.length;
var i__5770__auto___37010 = (0);
while(true){
if((i__5770__auto___37010 < len__5769__auto___37009)){
args__5775__auto__.push((arguments[i__5770__auto___37010]));

var G__37017 = (i__5770__auto___37010 + (1));
i__5770__auto___37010 = G__37017;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35358){
var map__35359 = p__35358;
var map__35359__$1 = cljs.core.__destructure_map(map__35359);
var opts = map__35359__$1;
var statearr_35360_37018 = state;
(statearr_35360_37018[(1)] = cont_block);


var temp__5823__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35362_37019 = state;
(statearr_35362_37019[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5823__auto__)){
var cb = temp__5823__auto__;
var statearr_35363_37027 = state;
(statearr_35363_37027[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35354){
var G__35355 = cljs.core.first(seq35354);
var seq35354__$1 = cljs.core.next(seq35354);
var G__35356 = cljs.core.first(seq35354__$1);
var seq35354__$2 = cljs.core.next(seq35354__$1);
var G__35357 = cljs.core.first(seq35354__$2);
var seq35354__$3 = cljs.core.next(seq35354__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35355,G__35356,G__35357,seq35354__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35367 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35368){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35368 = meta35368;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35367.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35369,meta35368__$1){
var self__ = this;
var _35369__$1 = this;
return (new cljs.core.async.t_cljs$core$async35367(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35368__$1));
}));

(cljs.core.async.t_cljs$core$async35367.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35369){
var self__ = this;
var _35369__$1 = this;
return self__.meta35368;
}));

(cljs.core.async.t_cljs$core$async35367.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35367.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35367.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35367.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35367.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35367.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35367.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35367.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35367.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35368","meta35368",-90400566,null)], null);
}));

(cljs.core.async.t_cljs$core$async35367.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35367.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35367");

(cljs.core.async.t_cljs$core$async35367.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35367");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35367.
 */
cljs.core.async.__GT_t_cljs$core$async35367 = (function cljs$core$async$__GT_t_cljs$core$async35367(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35368){
return (new cljs.core.async.t_cljs$core$async35367(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35368));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async35367(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__34399__auto___37055 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34400__auto__ = (function (){var switch__34140__auto__ = (function (state_35442){
var state_val_35443 = (state_35442[(1)]);
if((state_val_35443 === (7))){
var inst_35400 = (state_35442[(2)]);
var state_35442__$1 = state_35442;
if(cljs.core.truth_(inst_35400)){
var statearr_35444_37056 = state_35442__$1;
(statearr_35444_37056[(1)] = (8));

} else {
var statearr_35445_37057 = state_35442__$1;
(statearr_35445_37057[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35443 === (20))){
var inst_35393 = (state_35442[(7)]);
var state_35442__$1 = state_35442;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35442__$1,(23),out,inst_35393);
} else {
if((state_val_35443 === (1))){
var inst_35376 = calc_state();
var inst_35377 = cljs.core.__destructure_map(inst_35376);
var inst_35378 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35377,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35379 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35377,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35380 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35377,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35381 = inst_35376;
var state_35442__$1 = (function (){var statearr_35446 = state_35442;
(statearr_35446[(8)] = inst_35378);

(statearr_35446[(9)] = inst_35379);

(statearr_35446[(10)] = inst_35380);

(statearr_35446[(11)] = inst_35381);

return statearr_35446;
})();
var statearr_35447_37059 = state_35442__$1;
(statearr_35447_37059[(2)] = null);

(statearr_35447_37059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35443 === (24))){
var inst_35384 = (state_35442[(12)]);
var inst_35381 = inst_35384;
var state_35442__$1 = (function (){var statearr_35448 = state_35442;
(statearr_35448[(11)] = inst_35381);

return statearr_35448;
})();
var statearr_35449_37060 = state_35442__$1;
(statearr_35449_37060[(2)] = null);

(statearr_35449_37060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35443 === (4))){
var inst_35393 = (state_35442[(7)]);
var inst_35395 = (state_35442[(13)]);
var inst_35392 = (state_35442[(2)]);
var inst_35393__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35392,(0),null);
var inst_35394 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35392,(1),null);
var inst_35395__$1 = (inst_35393__$1 == null);
var state_35442__$1 = (function (){var statearr_35450 = state_35442;
(statearr_35450[(7)] = inst_35393__$1);

(statearr_35450[(14)] = inst_35394);

(statearr_35450[(13)] = inst_35395__$1);

return statearr_35450;
})();
if(cljs.core.truth_(inst_35395__$1)){
var statearr_35451_37061 = state_35442__$1;
(statearr_35451_37061[(1)] = (5));

} else {
var statearr_35452_37062 = state_35442__$1;
(statearr_35452_37062[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35443 === (15))){
var inst_35385 = (state_35442[(15)]);
var inst_35415 = (state_35442[(16)]);
var inst_35415__$1 = cljs.core.empty_QMARK_(inst_35385);
var state_35442__$1 = (function (){var statearr_35453 = state_35442;
(statearr_35453[(16)] = inst_35415__$1);

return statearr_35453;
})();
if(inst_35415__$1){
var statearr_35456_37065 = state_35442__$1;
(statearr_35456_37065[(1)] = (17));

} else {
var statearr_35458_37066 = state_35442__$1;
(statearr_35458_37066[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35443 === (21))){
var inst_35384 = (state_35442[(12)]);
var inst_35381 = inst_35384;
var state_35442__$1 = (function (){var statearr_35459 = state_35442;
(statearr_35459[(11)] = inst_35381);

return statearr_35459;
})();
var statearr_35460_37070 = state_35442__$1;
(statearr_35460_37070[(2)] = null);

(statearr_35460_37070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35443 === (13))){
var inst_35407 = (state_35442[(2)]);
var inst_35408 = calc_state();
var inst_35381 = inst_35408;
var state_35442__$1 = (function (){var statearr_35463 = state_35442;
(statearr_35463[(17)] = inst_35407);

(statearr_35463[(11)] = inst_35381);

return statearr_35463;
})();
var statearr_35465_37073 = state_35442__$1;
(statearr_35465_37073[(2)] = null);

(statearr_35465_37073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35443 === (22))){
var inst_35436 = (state_35442[(2)]);
var state_35442__$1 = state_35442;
var statearr_35466_37074 = state_35442__$1;
(statearr_35466_37074[(2)] = inst_35436);

(statearr_35466_37074[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35443 === (6))){
var inst_35394 = (state_35442[(14)]);
var inst_35398 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35394,change);
var state_35442__$1 = state_35442;
var statearr_35470_37075 = state_35442__$1;
(statearr_35470_37075[(2)] = inst_35398);

(statearr_35470_37075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35443 === (25))){
var state_35442__$1 = state_35442;
var statearr_35471_37076 = state_35442__$1;
(statearr_35471_37076[(2)] = null);

(statearr_35471_37076[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35443 === (17))){
var inst_35386 = (state_35442[(18)]);
var inst_35394 = (state_35442[(14)]);
var inst_35418 = (inst_35386.cljs$core$IFn$_invoke$arity$1 ? inst_35386.cljs$core$IFn$_invoke$arity$1(inst_35394) : inst_35386.call(null,inst_35394));
var inst_35419 = cljs.core.not(inst_35418);
var state_35442__$1 = state_35442;
var statearr_35472_37077 = state_35442__$1;
(statearr_35472_37077[(2)] = inst_35419);

(statearr_35472_37077[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35443 === (3))){
var inst_35440 = (state_35442[(2)]);
var state_35442__$1 = state_35442;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35442__$1,inst_35440);
} else {
if((state_val_35443 === (12))){
var state_35442__$1 = state_35442;
var statearr_35474_37079 = state_35442__$1;
(statearr_35474_37079[(2)] = null);

(statearr_35474_37079[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35443 === (2))){
var inst_35381 = (state_35442[(11)]);
var inst_35384 = (state_35442[(12)]);
var inst_35384__$1 = cljs.core.__destructure_map(inst_35381);
var inst_35385 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35384__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35386 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35384__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35387 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35384__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35442__$1 = (function (){var statearr_35478 = state_35442;
(statearr_35478[(12)] = inst_35384__$1);

(statearr_35478[(15)] = inst_35385);

(statearr_35478[(18)] = inst_35386);

return statearr_35478;
})();
return cljs.core.async.ioc_alts_BANG_(state_35442__$1,(4),inst_35387);
} else {
if((state_val_35443 === (23))){
var inst_35427 = (state_35442[(2)]);
var state_35442__$1 = state_35442;
if(cljs.core.truth_(inst_35427)){
var statearr_35487_37083 = state_35442__$1;
(statearr_35487_37083[(1)] = (24));

} else {
var statearr_35489_37084 = state_35442__$1;
(statearr_35489_37084[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35443 === (19))){
var inst_35422 = (state_35442[(2)]);
var state_35442__$1 = state_35442;
var statearr_35494_37085 = state_35442__$1;
(statearr_35494_37085[(2)] = inst_35422);

(statearr_35494_37085[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35443 === (11))){
var inst_35394 = (state_35442[(14)]);
var inst_35404 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35394);
var state_35442__$1 = state_35442;
var statearr_35497_37087 = state_35442__$1;
(statearr_35497_37087[(2)] = inst_35404);

(statearr_35497_37087[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35443 === (9))){
var inst_35385 = (state_35442[(15)]);
var inst_35394 = (state_35442[(14)]);
var inst_35411 = (state_35442[(19)]);
var inst_35411__$1 = (inst_35385.cljs$core$IFn$_invoke$arity$1 ? inst_35385.cljs$core$IFn$_invoke$arity$1(inst_35394) : inst_35385.call(null,inst_35394));
var state_35442__$1 = (function (){var statearr_35500 = state_35442;
(statearr_35500[(19)] = inst_35411__$1);

return statearr_35500;
})();
if(cljs.core.truth_(inst_35411__$1)){
var statearr_35501_37088 = state_35442__$1;
(statearr_35501_37088[(1)] = (14));

} else {
var statearr_35502_37089 = state_35442__$1;
(statearr_35502_37089[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35443 === (5))){
var inst_35395 = (state_35442[(13)]);
var state_35442__$1 = state_35442;
var statearr_35506_37090 = state_35442__$1;
(statearr_35506_37090[(2)] = inst_35395);

(statearr_35506_37090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35443 === (14))){
var inst_35411 = (state_35442[(19)]);
var state_35442__$1 = state_35442;
var statearr_35507_37091 = state_35442__$1;
(statearr_35507_37091[(2)] = inst_35411);

(statearr_35507_37091[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35443 === (26))){
var inst_35432 = (state_35442[(2)]);
var state_35442__$1 = state_35442;
var statearr_35509_37092 = state_35442__$1;
(statearr_35509_37092[(2)] = inst_35432);

(statearr_35509_37092[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35443 === (16))){
var inst_35424 = (state_35442[(2)]);
var state_35442__$1 = state_35442;
if(cljs.core.truth_(inst_35424)){
var statearr_35513_37093 = state_35442__$1;
(statearr_35513_37093[(1)] = (20));

} else {
var statearr_35514_37094 = state_35442__$1;
(statearr_35514_37094[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35443 === (10))){
var inst_35438 = (state_35442[(2)]);
var state_35442__$1 = state_35442;
var statearr_35516_37095 = state_35442__$1;
(statearr_35516_37095[(2)] = inst_35438);

(statearr_35516_37095[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35443 === (18))){
var inst_35415 = (state_35442[(16)]);
var state_35442__$1 = state_35442;
var statearr_35517_37096 = state_35442__$1;
(statearr_35517_37096[(2)] = inst_35415);

(statearr_35517_37096[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35443 === (8))){
var inst_35393 = (state_35442[(7)]);
var inst_35402 = (inst_35393 == null);
var state_35442__$1 = state_35442;
if(cljs.core.truth_(inst_35402)){
var statearr_35522_37097 = state_35442__$1;
(statearr_35522_37097[(1)] = (11));

} else {
var statearr_35535_37098 = state_35442__$1;
(statearr_35535_37098[(1)] = (12));

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
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__34141__auto__ = null;
var cljs$core$async$mix_$_state_machine__34141__auto____0 = (function (){
var statearr_35548 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35548[(0)] = cljs$core$async$mix_$_state_machine__34141__auto__);

(statearr_35548[(1)] = (1));

return statearr_35548;
});
var cljs$core$async$mix_$_state_machine__34141__auto____1 = (function (state_35442){
while(true){
var ret_value__34142__auto__ = (function (){try{while(true){
var result__34143__auto__ = switch__34140__auto__(state_35442);
if(cljs.core.keyword_identical_QMARK_(result__34143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34143__auto__;
}
break;
}
}catch (e35553){var ex__34144__auto__ = e35553;
var statearr_35557_37100 = state_35442;
(statearr_35557_37100[(2)] = ex__34144__auto__);


if(cljs.core.seq((state_35442[(4)]))){
var statearr_35558_37101 = state_35442;
(statearr_35558_37101[(1)] = cljs.core.first((state_35442[(4)])));

} else {
throw ex__34144__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37102 = state_35442;
state_35442 = G__37102;
continue;
} else {
return ret_value__34142__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34141__auto__ = function(state_35442){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34141__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34141__auto____1.call(this,state_35442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34141__auto____0;
cljs$core$async$mix_$_state_machine__34141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34141__auto____1;
return cljs$core$async$mix_$_state_machine__34141__auto__;
})()
})();
var state__34401__auto__ = (function (){var statearr_35560 = f__34400__auto__();
(statearr_35560[(6)] = c__34399__auto___37055);

return statearr_35560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34401__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_37110 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_37110(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_37112 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_37112(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_37119 = (function() {
var G__37120 = null;
var G__37120__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__37120__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__37120 = function(p,v){
switch(arguments.length){
case 1:
return G__37120__1.call(this,p);
case 2:
return G__37120__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37120.cljs$core$IFn$_invoke$arity$1 = G__37120__1;
G__37120.cljs$core$IFn$_invoke$arity$2 = G__37120__2;
return G__37120;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__35597 = arguments.length;
switch (G__35597) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_37119(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_37119(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35629 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35630){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35630 = meta35630;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35629.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35631,meta35630__$1){
var self__ = this;
var _35631__$1 = this;
return (new cljs.core.async.t_cljs$core$async35629(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35630__$1));
}));

(cljs.core.async.t_cljs$core$async35629.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35631){
var self__ = this;
var _35631__$1 = this;
return self__.meta35630;
}));

(cljs.core.async.t_cljs$core$async35629.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35629.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35629.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35629.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35629.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async35629.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35629.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35629.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35630","meta35630",1513696857,null)], null);
}));

(cljs.core.async.t_cljs$core$async35629.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35629.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35629");

(cljs.core.async.t_cljs$core$async35629.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35629");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35629.
 */
cljs.core.async.__GT_t_cljs$core$async35629 = (function cljs$core$async$__GT_t_cljs$core$async35629(ch,topic_fn,buf_fn,mults,ensure_mult,meta35630){
return (new cljs.core.async.t_cljs$core$async35629(ch,topic_fn,buf_fn,mults,ensure_mult,meta35630));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__35617 = arguments.length;
switch (G__35617) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35610_SHARP_){
if(cljs.core.truth_((p1__35610_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35610_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35610_SHARP_.call(null,topic)))){
return p1__35610_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35610_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async35629(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__34399__auto___37128 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34400__auto__ = (function (){var switch__34140__auto__ = (function (state_35745){
var state_val_35746 = (state_35745[(1)]);
if((state_val_35746 === (7))){
var inst_35738 = (state_35745[(2)]);
var state_35745__$1 = state_35745;
var statearr_35747_37130 = state_35745__$1;
(statearr_35747_37130[(2)] = inst_35738);

(statearr_35747_37130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35746 === (20))){
var state_35745__$1 = state_35745;
var statearr_35748_37131 = state_35745__$1;
(statearr_35748_37131[(2)] = null);

(statearr_35748_37131[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35746 === (1))){
var state_35745__$1 = state_35745;
var statearr_35749_37132 = state_35745__$1;
(statearr_35749_37132[(2)] = null);

(statearr_35749_37132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35746 === (24))){
var inst_35721 = (state_35745[(7)]);
var inst_35730 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35721);
var state_35745__$1 = state_35745;
var statearr_35750_37134 = state_35745__$1;
(statearr_35750_37134[(2)] = inst_35730);

(statearr_35750_37134[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35746 === (4))){
var inst_35660 = (state_35745[(8)]);
var inst_35660__$1 = (state_35745[(2)]);
var inst_35661 = (inst_35660__$1 == null);
var state_35745__$1 = (function (){var statearr_35752 = state_35745;
(statearr_35752[(8)] = inst_35660__$1);

return statearr_35752;
})();
if(cljs.core.truth_(inst_35661)){
var statearr_35753_37135 = state_35745__$1;
(statearr_35753_37135[(1)] = (5));

} else {
var statearr_35754_37136 = state_35745__$1;
(statearr_35754_37136[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35746 === (15))){
var inst_35713 = (state_35745[(2)]);
var state_35745__$1 = state_35745;
var statearr_35755_37141 = state_35745__$1;
(statearr_35755_37141[(2)] = inst_35713);

(statearr_35755_37141[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35746 === (21))){
var inst_35735 = (state_35745[(2)]);
var state_35745__$1 = (function (){var statearr_35756 = state_35745;
(statearr_35756[(9)] = inst_35735);

return statearr_35756;
})();
var statearr_35757_37142 = state_35745__$1;
(statearr_35757_37142[(2)] = null);

(statearr_35757_37142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35746 === (13))){
var inst_35691 = (state_35745[(10)]);
var inst_35694 = cljs.core.chunked_seq_QMARK_(inst_35691);
var state_35745__$1 = state_35745;
if(inst_35694){
var statearr_35761_37143 = state_35745__$1;
(statearr_35761_37143[(1)] = (16));

} else {
var statearr_35762_37144 = state_35745__$1;
(statearr_35762_37144[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35746 === (22))){
var inst_35727 = (state_35745[(2)]);
var state_35745__$1 = state_35745;
if(cljs.core.truth_(inst_35727)){
var statearr_35764_37145 = state_35745__$1;
(statearr_35764_37145[(1)] = (23));

} else {
var statearr_35766_37146 = state_35745__$1;
(statearr_35766_37146[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35746 === (6))){
var inst_35660 = (state_35745[(8)]);
var inst_35721 = (state_35745[(7)]);
var inst_35723 = (state_35745[(11)]);
var inst_35721__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35660) : topic_fn.call(null,inst_35660));
var inst_35722 = cljs.core.deref(mults);
var inst_35723__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35722,inst_35721__$1);
var state_35745__$1 = (function (){var statearr_35767 = state_35745;
(statearr_35767[(7)] = inst_35721__$1);

(statearr_35767[(11)] = inst_35723__$1);

return statearr_35767;
})();
if(cljs.core.truth_(inst_35723__$1)){
var statearr_35768_37147 = state_35745__$1;
(statearr_35768_37147[(1)] = (19));

} else {
var statearr_35769_37148 = state_35745__$1;
(statearr_35769_37148[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35746 === (25))){
var inst_35732 = (state_35745[(2)]);
var state_35745__$1 = state_35745;
var statearr_35770_37149 = state_35745__$1;
(statearr_35770_37149[(2)] = inst_35732);

(statearr_35770_37149[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35746 === (17))){
var inst_35691 = (state_35745[(10)]);
var inst_35703 = cljs.core.first(inst_35691);
var inst_35704 = cljs.core.async.muxch_STAR_(inst_35703);
var inst_35705 = cljs.core.async.close_BANG_(inst_35704);
var inst_35706 = cljs.core.next(inst_35691);
var inst_35673 = inst_35706;
var inst_35674 = null;
var inst_35676 = (0);
var inst_35677 = (0);
var state_35745__$1 = (function (){var statearr_35771 = state_35745;
(statearr_35771[(12)] = inst_35705);

(statearr_35771[(13)] = inst_35673);

(statearr_35771[(14)] = inst_35674);

(statearr_35771[(15)] = inst_35676);

(statearr_35771[(16)] = inst_35677);

return statearr_35771;
})();
var statearr_35772_37150 = state_35745__$1;
(statearr_35772_37150[(2)] = null);

(statearr_35772_37150[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35746 === (3))){
var inst_35740 = (state_35745[(2)]);
var state_35745__$1 = state_35745;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35745__$1,inst_35740);
} else {
if((state_val_35746 === (12))){
var inst_35715 = (state_35745[(2)]);
var state_35745__$1 = state_35745;
var statearr_35773_37151 = state_35745__$1;
(statearr_35773_37151[(2)] = inst_35715);

(statearr_35773_37151[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35746 === (2))){
var state_35745__$1 = state_35745;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35745__$1,(4),ch);
} else {
if((state_val_35746 === (23))){
var state_35745__$1 = state_35745;
var statearr_35774_37152 = state_35745__$1;
(statearr_35774_37152[(2)] = null);

(statearr_35774_37152[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35746 === (19))){
var inst_35723 = (state_35745[(11)]);
var inst_35660 = (state_35745[(8)]);
var inst_35725 = cljs.core.async.muxch_STAR_(inst_35723);
var state_35745__$1 = state_35745;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35745__$1,(22),inst_35725,inst_35660);
} else {
if((state_val_35746 === (11))){
var inst_35673 = (state_35745[(13)]);
var inst_35691 = (state_35745[(10)]);
var inst_35691__$1 = cljs.core.seq(inst_35673);
var state_35745__$1 = (function (){var statearr_35775 = state_35745;
(statearr_35775[(10)] = inst_35691__$1);

return statearr_35775;
})();
if(inst_35691__$1){
var statearr_35776_37153 = state_35745__$1;
(statearr_35776_37153[(1)] = (13));

} else {
var statearr_35777_37154 = state_35745__$1;
(statearr_35777_37154[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35746 === (9))){
var inst_35718 = (state_35745[(2)]);
var state_35745__$1 = state_35745;
var statearr_35778_37155 = state_35745__$1;
(statearr_35778_37155[(2)] = inst_35718);

(statearr_35778_37155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35746 === (5))){
var inst_35670 = cljs.core.deref(mults);
var inst_35671 = cljs.core.vals(inst_35670);
var inst_35672 = cljs.core.seq(inst_35671);
var inst_35673 = inst_35672;
var inst_35674 = null;
var inst_35676 = (0);
var inst_35677 = (0);
var state_35745__$1 = (function (){var statearr_35779 = state_35745;
(statearr_35779[(13)] = inst_35673);

(statearr_35779[(14)] = inst_35674);

(statearr_35779[(15)] = inst_35676);

(statearr_35779[(16)] = inst_35677);

return statearr_35779;
})();
var statearr_35780_37157 = state_35745__$1;
(statearr_35780_37157[(2)] = null);

(statearr_35780_37157[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35746 === (14))){
var state_35745__$1 = state_35745;
var statearr_35784_37159 = state_35745__$1;
(statearr_35784_37159[(2)] = null);

(statearr_35784_37159[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35746 === (16))){
var inst_35691 = (state_35745[(10)]);
var inst_35696 = cljs.core.chunk_first(inst_35691);
var inst_35697 = cljs.core.chunk_rest(inst_35691);
var inst_35698 = cljs.core.count(inst_35696);
var inst_35673 = inst_35697;
var inst_35674 = inst_35696;
var inst_35676 = inst_35698;
var inst_35677 = (0);
var state_35745__$1 = (function (){var statearr_35785 = state_35745;
(statearr_35785[(13)] = inst_35673);

(statearr_35785[(14)] = inst_35674);

(statearr_35785[(15)] = inst_35676);

(statearr_35785[(16)] = inst_35677);

return statearr_35785;
})();
var statearr_35786_37160 = state_35745__$1;
(statearr_35786_37160[(2)] = null);

(statearr_35786_37160[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35746 === (10))){
var inst_35674 = (state_35745[(14)]);
var inst_35677 = (state_35745[(16)]);
var inst_35673 = (state_35745[(13)]);
var inst_35676 = (state_35745[(15)]);
var inst_35682 = cljs.core._nth(inst_35674,inst_35677);
var inst_35684 = cljs.core.async.muxch_STAR_(inst_35682);
var inst_35685 = cljs.core.async.close_BANG_(inst_35684);
var inst_35686 = (inst_35677 + (1));
var tmp35781 = inst_35673;
var tmp35782 = inst_35676;
var tmp35783 = inst_35674;
var inst_35673__$1 = tmp35781;
var inst_35674__$1 = tmp35783;
var inst_35676__$1 = tmp35782;
var inst_35677__$1 = inst_35686;
var state_35745__$1 = (function (){var statearr_35787 = state_35745;
(statearr_35787[(17)] = inst_35685);

(statearr_35787[(13)] = inst_35673__$1);

(statearr_35787[(14)] = inst_35674__$1);

(statearr_35787[(15)] = inst_35676__$1);

(statearr_35787[(16)] = inst_35677__$1);

return statearr_35787;
})();
var statearr_35788_37161 = state_35745__$1;
(statearr_35788_37161[(2)] = null);

(statearr_35788_37161[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35746 === (18))){
var inst_35709 = (state_35745[(2)]);
var state_35745__$1 = state_35745;
var statearr_35789_37166 = state_35745__$1;
(statearr_35789_37166[(2)] = inst_35709);

(statearr_35789_37166[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35746 === (8))){
var inst_35677 = (state_35745[(16)]);
var inst_35676 = (state_35745[(15)]);
var inst_35679 = (inst_35677 < inst_35676);
var inst_35680 = inst_35679;
var state_35745__$1 = state_35745;
if(cljs.core.truth_(inst_35680)){
var statearr_35790_37169 = state_35745__$1;
(statearr_35790_37169[(1)] = (10));

} else {
var statearr_35791_37170 = state_35745__$1;
(statearr_35791_37170[(1)] = (11));

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
}
});
return (function() {
var cljs$core$async$state_machine__34141__auto__ = null;
var cljs$core$async$state_machine__34141__auto____0 = (function (){
var statearr_35792 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35792[(0)] = cljs$core$async$state_machine__34141__auto__);

(statearr_35792[(1)] = (1));

return statearr_35792;
});
var cljs$core$async$state_machine__34141__auto____1 = (function (state_35745){
while(true){
var ret_value__34142__auto__ = (function (){try{while(true){
var result__34143__auto__ = switch__34140__auto__(state_35745);
if(cljs.core.keyword_identical_QMARK_(result__34143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34143__auto__;
}
break;
}
}catch (e35793){var ex__34144__auto__ = e35793;
var statearr_35794_37171 = state_35745;
(statearr_35794_37171[(2)] = ex__34144__auto__);


if(cljs.core.seq((state_35745[(4)]))){
var statearr_35795_37172 = state_35745;
(statearr_35795_37172[(1)] = cljs.core.first((state_35745[(4)])));

} else {
throw ex__34144__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37173 = state_35745;
state_35745 = G__37173;
continue;
} else {
return ret_value__34142__auto__;
}
break;
}
});
cljs$core$async$state_machine__34141__auto__ = function(state_35745){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34141__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34141__auto____1.call(this,state_35745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34141__auto____0;
cljs$core$async$state_machine__34141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34141__auto____1;
return cljs$core$async$state_machine__34141__auto__;
})()
})();
var state__34401__auto__ = (function (){var statearr_35796 = f__34400__auto__();
(statearr_35796[(6)] = c__34399__auto___37128);

return statearr_35796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34401__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__35798 = arguments.length;
switch (G__35798) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__35800 = arguments.length;
switch (G__35800) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__35802 = arguments.length;
switch (G__35802) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__34399__auto___37190 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34400__auto__ = (function (){var switch__34140__auto__ = (function (state_35858){
var state_val_35863 = (state_35858[(1)]);
if((state_val_35863 === (7))){
var state_35858__$1 = state_35858;
var statearr_35872_37194 = state_35858__$1;
(statearr_35872_37194[(2)] = null);

(statearr_35872_37194[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35863 === (1))){
var state_35858__$1 = state_35858;
var statearr_35876_37195 = state_35858__$1;
(statearr_35876_37195[(2)] = null);

(statearr_35876_37195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35863 === (4))){
var inst_35808 = (state_35858[(7)]);
var inst_35807 = (state_35858[(8)]);
var inst_35810 = (inst_35808 < inst_35807);
var state_35858__$1 = state_35858;
if(cljs.core.truth_(inst_35810)){
var statearr_35878_37196 = state_35858__$1;
(statearr_35878_37196[(1)] = (6));

} else {
var statearr_35879_37197 = state_35858__$1;
(statearr_35879_37197[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35863 === (15))){
var inst_35833 = (state_35858[(9)]);
var inst_35838 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_35833);
var state_35858__$1 = state_35858;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35858__$1,(17),out,inst_35838);
} else {
if((state_val_35863 === (13))){
var inst_35833 = (state_35858[(9)]);
var inst_35833__$1 = (state_35858[(2)]);
var inst_35834 = cljs.core.some(cljs.core.nil_QMARK_,inst_35833__$1);
var state_35858__$1 = (function (){var statearr_35884 = state_35858;
(statearr_35884[(9)] = inst_35833__$1);

return statearr_35884;
})();
if(cljs.core.truth_(inst_35834)){
var statearr_35885_37198 = state_35858__$1;
(statearr_35885_37198[(1)] = (14));

} else {
var statearr_35886_37199 = state_35858__$1;
(statearr_35886_37199[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35863 === (6))){
var state_35858__$1 = state_35858;
var statearr_35887_37200 = state_35858__$1;
(statearr_35887_37200[(2)] = null);

(statearr_35887_37200[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35863 === (17))){
var inst_35840 = (state_35858[(2)]);
var state_35858__$1 = (function (){var statearr_35894 = state_35858;
(statearr_35894[(10)] = inst_35840);

return statearr_35894;
})();
var statearr_35895_37207 = state_35858__$1;
(statearr_35895_37207[(2)] = null);

(statearr_35895_37207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35863 === (3))){
var inst_35846 = (state_35858[(2)]);
var state_35858__$1 = state_35858;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35858__$1,inst_35846);
} else {
if((state_val_35863 === (12))){
var _ = (function (){var statearr_35900 = state_35858;
(statearr_35900[(4)] = cljs.core.rest((state_35858[(4)])));

return statearr_35900;
})();
var state_35858__$1 = state_35858;
var ex35889 = (state_35858__$1[(2)]);
var statearr_35901_37208 = state_35858__$1;
(statearr_35901_37208[(5)] = ex35889);


if((ex35889 instanceof Object)){
var statearr_35906_37209 = state_35858__$1;
(statearr_35906_37209[(1)] = (11));

(statearr_35906_37209[(5)] = null);

} else {
throw ex35889;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35863 === (2))){
var inst_35806 = cljs.core.reset_BANG_(dctr,cnt);
var inst_35807 = cnt;
var inst_35808 = (0);
var state_35858__$1 = (function (){var statearr_35911 = state_35858;
(statearr_35911[(11)] = inst_35806);

(statearr_35911[(8)] = inst_35807);

(statearr_35911[(7)] = inst_35808);

return statearr_35911;
})();
var statearr_35912_37216 = state_35858__$1;
(statearr_35912_37216[(2)] = null);

(statearr_35912_37216[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35863 === (11))){
var inst_35812 = (state_35858[(2)]);
var inst_35813 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_35858__$1 = (function (){var statearr_35917 = state_35858;
(statearr_35917[(12)] = inst_35812);

return statearr_35917;
})();
var statearr_35918_37217 = state_35858__$1;
(statearr_35918_37217[(2)] = inst_35813);

(statearr_35918_37217[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35863 === (9))){
var inst_35808 = (state_35858[(7)]);
var _ = (function (){var statearr_35919 = state_35858;
(statearr_35919[(4)] = cljs.core.cons((12),(state_35858[(4)])));

return statearr_35919;
})();
var inst_35819 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_35808) : chs__$1.call(null,inst_35808));
var inst_35820 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_35808) : done.call(null,inst_35808));
var inst_35821 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_35819,inst_35820);
var ___$1 = (function (){var statearr_35921 = state_35858;
(statearr_35921[(4)] = cljs.core.rest((state_35858[(4)])));

return statearr_35921;
})();
var state_35858__$1 = state_35858;
var statearr_35922_37218 = state_35858__$1;
(statearr_35922_37218[(2)] = inst_35821);

(statearr_35922_37218[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35863 === (5))){
var inst_35831 = (state_35858[(2)]);
var state_35858__$1 = (function (){var statearr_35923 = state_35858;
(statearr_35923[(13)] = inst_35831);

return statearr_35923;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35858__$1,(13),dchan);
} else {
if((state_val_35863 === (14))){
var inst_35836 = cljs.core.async.close_BANG_(out);
var state_35858__$1 = state_35858;
var statearr_35924_37219 = state_35858__$1;
(statearr_35924_37219[(2)] = inst_35836);

(statearr_35924_37219[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35863 === (16))){
var inst_35843 = (state_35858[(2)]);
var state_35858__$1 = state_35858;
var statearr_35925_37220 = state_35858__$1;
(statearr_35925_37220[(2)] = inst_35843);

(statearr_35925_37220[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35863 === (10))){
var inst_35808 = (state_35858[(7)]);
var inst_35824 = (state_35858[(2)]);
var inst_35825 = (inst_35808 + (1));
var inst_35808__$1 = inst_35825;
var state_35858__$1 = (function (){var statearr_35930 = state_35858;
(statearr_35930[(14)] = inst_35824);

(statearr_35930[(7)] = inst_35808__$1);

return statearr_35930;
})();
var statearr_35931_37223 = state_35858__$1;
(statearr_35931_37223[(2)] = null);

(statearr_35931_37223[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35863 === (8))){
var inst_35829 = (state_35858[(2)]);
var state_35858__$1 = state_35858;
var statearr_35935_37224 = state_35858__$1;
(statearr_35935_37224[(2)] = inst_35829);

(statearr_35935_37224[(1)] = (5));


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
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34141__auto__ = null;
var cljs$core$async$state_machine__34141__auto____0 = (function (){
var statearr_35937 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35937[(0)] = cljs$core$async$state_machine__34141__auto__);

(statearr_35937[(1)] = (1));

return statearr_35937;
});
var cljs$core$async$state_machine__34141__auto____1 = (function (state_35858){
while(true){
var ret_value__34142__auto__ = (function (){try{while(true){
var result__34143__auto__ = switch__34140__auto__(state_35858);
if(cljs.core.keyword_identical_QMARK_(result__34143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34143__auto__;
}
break;
}
}catch (e35941){var ex__34144__auto__ = e35941;
var statearr_35943_37226 = state_35858;
(statearr_35943_37226[(2)] = ex__34144__auto__);


if(cljs.core.seq((state_35858[(4)]))){
var statearr_35944_37227 = state_35858;
(statearr_35944_37227[(1)] = cljs.core.first((state_35858[(4)])));

} else {
throw ex__34144__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37228 = state_35858;
state_35858 = G__37228;
continue;
} else {
return ret_value__34142__auto__;
}
break;
}
});
cljs$core$async$state_machine__34141__auto__ = function(state_35858){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34141__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34141__auto____1.call(this,state_35858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34141__auto____0;
cljs$core$async$state_machine__34141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34141__auto____1;
return cljs$core$async$state_machine__34141__auto__;
})()
})();
var state__34401__auto__ = (function (){var statearr_35948 = f__34400__auto__();
(statearr_35948[(6)] = c__34399__auto___37190);

return statearr_35948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34401__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__35956 = arguments.length;
switch (G__35956) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34399__auto___37230 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34400__auto__ = (function (){var switch__34140__auto__ = (function (state_36005){
var state_val_36006 = (state_36005[(1)]);
if((state_val_36006 === (7))){
var inst_35972 = (state_36005[(7)]);
var inst_35973 = (state_36005[(8)]);
var inst_35972__$1 = (state_36005[(2)]);
var inst_35973__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35972__$1,(0),null);
var inst_35974 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35972__$1,(1),null);
var inst_35975 = (inst_35973__$1 == null);
var state_36005__$1 = (function (){var statearr_36011 = state_36005;
(statearr_36011[(7)] = inst_35972__$1);

(statearr_36011[(8)] = inst_35973__$1);

(statearr_36011[(9)] = inst_35974);

return statearr_36011;
})();
if(cljs.core.truth_(inst_35975)){
var statearr_36012_37231 = state_36005__$1;
(statearr_36012_37231[(1)] = (8));

} else {
var statearr_36013_37237 = state_36005__$1;
(statearr_36013_37237[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36006 === (1))){
var inst_35958 = cljs.core.vec(chs);
var inst_35959 = inst_35958;
var state_36005__$1 = (function (){var statearr_36014 = state_36005;
(statearr_36014[(10)] = inst_35959);

return statearr_36014;
})();
var statearr_36015_37238 = state_36005__$1;
(statearr_36015_37238[(2)] = null);

(statearr_36015_37238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36006 === (4))){
var inst_35959 = (state_36005[(10)]);
var state_36005__$1 = state_36005;
return cljs.core.async.ioc_alts_BANG_(state_36005__$1,(7),inst_35959);
} else {
if((state_val_36006 === (6))){
var inst_35997 = (state_36005[(2)]);
var state_36005__$1 = state_36005;
var statearr_36016_37244 = state_36005__$1;
(statearr_36016_37244[(2)] = inst_35997);

(statearr_36016_37244[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36006 === (3))){
var inst_35999 = (state_36005[(2)]);
var state_36005__$1 = state_36005;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36005__$1,inst_35999);
} else {
if((state_val_36006 === (2))){
var inst_35959 = (state_36005[(10)]);
var inst_35961 = cljs.core.count(inst_35959);
var inst_35962 = (inst_35961 > (0));
var state_36005__$1 = state_36005;
if(cljs.core.truth_(inst_35962)){
var statearr_36018_37245 = state_36005__$1;
(statearr_36018_37245[(1)] = (4));

} else {
var statearr_36019_37246 = state_36005__$1;
(statearr_36019_37246[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36006 === (11))){
var inst_35959 = (state_36005[(10)]);
var inst_35990 = (state_36005[(2)]);
var tmp36017 = inst_35959;
var inst_35959__$1 = tmp36017;
var state_36005__$1 = (function (){var statearr_36020 = state_36005;
(statearr_36020[(11)] = inst_35990);

(statearr_36020[(10)] = inst_35959__$1);

return statearr_36020;
})();
var statearr_36025_37247 = state_36005__$1;
(statearr_36025_37247[(2)] = null);

(statearr_36025_37247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36006 === (9))){
var inst_35973 = (state_36005[(8)]);
var state_36005__$1 = state_36005;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36005__$1,(11),out,inst_35973);
} else {
if((state_val_36006 === (5))){
var inst_35995 = cljs.core.async.close_BANG_(out);
var state_36005__$1 = state_36005;
var statearr_36027_37248 = state_36005__$1;
(statearr_36027_37248[(2)] = inst_35995);

(statearr_36027_37248[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36006 === (10))){
var inst_35993 = (state_36005[(2)]);
var state_36005__$1 = state_36005;
var statearr_36028_37249 = state_36005__$1;
(statearr_36028_37249[(2)] = inst_35993);

(statearr_36028_37249[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36006 === (8))){
var inst_35959 = (state_36005[(10)]);
var inst_35972 = (state_36005[(7)]);
var inst_35973 = (state_36005[(8)]);
var inst_35974 = (state_36005[(9)]);
var inst_35981 = (function (){var cs = inst_35959;
var vec__35964 = inst_35972;
var v = inst_35973;
var c = inst_35974;
return (function (p1__35950_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__35950_SHARP_);
});
})();
var inst_35985 = cljs.core.filterv(inst_35981,inst_35959);
var inst_35959__$1 = inst_35985;
var state_36005__$1 = (function (){var statearr_36030 = state_36005;
(statearr_36030[(10)] = inst_35959__$1);

return statearr_36030;
})();
var statearr_36031_37255 = state_36005__$1;
(statearr_36031_37255[(2)] = null);

(statearr_36031_37255[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__34141__auto__ = null;
var cljs$core$async$state_machine__34141__auto____0 = (function (){
var statearr_36032 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36032[(0)] = cljs$core$async$state_machine__34141__auto__);

(statearr_36032[(1)] = (1));

return statearr_36032;
});
var cljs$core$async$state_machine__34141__auto____1 = (function (state_36005){
while(true){
var ret_value__34142__auto__ = (function (){try{while(true){
var result__34143__auto__ = switch__34140__auto__(state_36005);
if(cljs.core.keyword_identical_QMARK_(result__34143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34143__auto__;
}
break;
}
}catch (e36034){var ex__34144__auto__ = e36034;
var statearr_36035_37256 = state_36005;
(statearr_36035_37256[(2)] = ex__34144__auto__);


if(cljs.core.seq((state_36005[(4)]))){
var statearr_36036_37258 = state_36005;
(statearr_36036_37258[(1)] = cljs.core.first((state_36005[(4)])));

} else {
throw ex__34144__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37259 = state_36005;
state_36005 = G__37259;
continue;
} else {
return ret_value__34142__auto__;
}
break;
}
});
cljs$core$async$state_machine__34141__auto__ = function(state_36005){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34141__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34141__auto____1.call(this,state_36005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34141__auto____0;
cljs$core$async$state_machine__34141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34141__auto____1;
return cljs$core$async$state_machine__34141__auto__;
})()
})();
var state__34401__auto__ = (function (){var statearr_36037 = f__34400__auto__();
(statearr_36037[(6)] = c__34399__auto___37230);

return statearr_36037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34401__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__36039 = arguments.length;
switch (G__36039) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34399__auto___37266 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34400__auto__ = (function (){var switch__34140__auto__ = (function (state_36063){
var state_val_36064 = (state_36063[(1)]);
if((state_val_36064 === (7))){
var inst_36045 = (state_36063[(7)]);
var inst_36045__$1 = (state_36063[(2)]);
var inst_36046 = (inst_36045__$1 == null);
var inst_36047 = cljs.core.not(inst_36046);
var state_36063__$1 = (function (){var statearr_36065 = state_36063;
(statearr_36065[(7)] = inst_36045__$1);

return statearr_36065;
})();
if(inst_36047){
var statearr_36066_37267 = state_36063__$1;
(statearr_36066_37267[(1)] = (8));

} else {
var statearr_36067_37268 = state_36063__$1;
(statearr_36067_37268[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36064 === (1))){
var inst_36040 = (0);
var state_36063__$1 = (function (){var statearr_36068 = state_36063;
(statearr_36068[(8)] = inst_36040);

return statearr_36068;
})();
var statearr_36069_37269 = state_36063__$1;
(statearr_36069_37269[(2)] = null);

(statearr_36069_37269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36064 === (4))){
var state_36063__$1 = state_36063;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36063__$1,(7),ch);
} else {
if((state_val_36064 === (6))){
var inst_36058 = (state_36063[(2)]);
var state_36063__$1 = state_36063;
var statearr_36070_37270 = state_36063__$1;
(statearr_36070_37270[(2)] = inst_36058);

(statearr_36070_37270[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36064 === (3))){
var inst_36060 = (state_36063[(2)]);
var inst_36061 = cljs.core.async.close_BANG_(out);
var state_36063__$1 = (function (){var statearr_36071 = state_36063;
(statearr_36071[(9)] = inst_36060);

return statearr_36071;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36063__$1,inst_36061);
} else {
if((state_val_36064 === (2))){
var inst_36040 = (state_36063[(8)]);
var inst_36042 = (inst_36040 < n);
var state_36063__$1 = state_36063;
if(cljs.core.truth_(inst_36042)){
var statearr_36072_37271 = state_36063__$1;
(statearr_36072_37271[(1)] = (4));

} else {
var statearr_36073_37272 = state_36063__$1;
(statearr_36073_37272[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36064 === (11))){
var inst_36040 = (state_36063[(8)]);
var inst_36050 = (state_36063[(2)]);
var inst_36051 = (inst_36040 + (1));
var inst_36040__$1 = inst_36051;
var state_36063__$1 = (function (){var statearr_36074 = state_36063;
(statearr_36074[(10)] = inst_36050);

(statearr_36074[(8)] = inst_36040__$1);

return statearr_36074;
})();
var statearr_36075_37273 = state_36063__$1;
(statearr_36075_37273[(2)] = null);

(statearr_36075_37273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36064 === (9))){
var state_36063__$1 = state_36063;
var statearr_36076_37274 = state_36063__$1;
(statearr_36076_37274[(2)] = null);

(statearr_36076_37274[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36064 === (5))){
var state_36063__$1 = state_36063;
var statearr_36077_37275 = state_36063__$1;
(statearr_36077_37275[(2)] = null);

(statearr_36077_37275[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36064 === (10))){
var inst_36055 = (state_36063[(2)]);
var state_36063__$1 = state_36063;
var statearr_36078_37276 = state_36063__$1;
(statearr_36078_37276[(2)] = inst_36055);

(statearr_36078_37276[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36064 === (8))){
var inst_36045 = (state_36063[(7)]);
var state_36063__$1 = state_36063;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36063__$1,(11),out,inst_36045);
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
});
return (function() {
var cljs$core$async$state_machine__34141__auto__ = null;
var cljs$core$async$state_machine__34141__auto____0 = (function (){
var statearr_36079 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36079[(0)] = cljs$core$async$state_machine__34141__auto__);

(statearr_36079[(1)] = (1));

return statearr_36079;
});
var cljs$core$async$state_machine__34141__auto____1 = (function (state_36063){
while(true){
var ret_value__34142__auto__ = (function (){try{while(true){
var result__34143__auto__ = switch__34140__auto__(state_36063);
if(cljs.core.keyword_identical_QMARK_(result__34143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34143__auto__;
}
break;
}
}catch (e36080){var ex__34144__auto__ = e36080;
var statearr_36081_37281 = state_36063;
(statearr_36081_37281[(2)] = ex__34144__auto__);


if(cljs.core.seq((state_36063[(4)]))){
var statearr_36082_37282 = state_36063;
(statearr_36082_37282[(1)] = cljs.core.first((state_36063[(4)])));

} else {
throw ex__34144__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37283 = state_36063;
state_36063 = G__37283;
continue;
} else {
return ret_value__34142__auto__;
}
break;
}
});
cljs$core$async$state_machine__34141__auto__ = function(state_36063){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34141__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34141__auto____1.call(this,state_36063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34141__auto____0;
cljs$core$async$state_machine__34141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34141__auto____1;
return cljs$core$async$state_machine__34141__auto__;
})()
})();
var state__34401__auto__ = (function (){var statearr_36083 = f__34400__auto__();
(statearr_36083[(6)] = c__34399__auto___37266);

return statearr_36083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34401__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36088 = (function (f,ch,meta36086,_,fn1,meta36089){
this.f = f;
this.ch = ch;
this.meta36086 = meta36086;
this._ = _;
this.fn1 = fn1;
this.meta36089 = meta36089;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36088.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36090,meta36089__$1){
var self__ = this;
var _36090__$1 = this;
return (new cljs.core.async.t_cljs$core$async36088(self__.f,self__.ch,self__.meta36086,self__._,self__.fn1,meta36089__$1));
}));

(cljs.core.async.t_cljs$core$async36088.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36090){
var self__ = this;
var _36090__$1 = this;
return self__.meta36089;
}));

(cljs.core.async.t_cljs$core$async36088.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36088.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36088.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36088.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36084_SHARP_){
var G__36093 = (((p1__36084_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36084_SHARP_) : self__.f.call(null,p1__36084_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36093) : f1.call(null,G__36093));
});
}));

(cljs.core.async.t_cljs$core$async36088.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36086","meta36086",818641602,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36085","cljs.core.async/t_cljs$core$async36085",318817567,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36089","meta36089",2048571651,null)], null);
}));

(cljs.core.async.t_cljs$core$async36088.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36088.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36088");

(cljs.core.async.t_cljs$core$async36088.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async36088");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36088.
 */
cljs.core.async.__GT_t_cljs$core$async36088 = (function cljs$core$async$__GT_t_cljs$core$async36088(f,ch,meta36086,_,fn1,meta36089){
return (new cljs.core.async.t_cljs$core$async36088(f,ch,meta36086,_,fn1,meta36089));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36085 = (function (f,ch,meta36086){
this.f = f;
this.ch = ch;
this.meta36086 = meta36086;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36085.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36087,meta36086__$1){
var self__ = this;
var _36087__$1 = this;
return (new cljs.core.async.t_cljs$core$async36085(self__.f,self__.ch,meta36086__$1));
}));

(cljs.core.async.t_cljs$core$async36085.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36087){
var self__ = this;
var _36087__$1 = this;
return self__.meta36086;
}));

(cljs.core.async.t_cljs$core$async36085.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36085.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36085.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36085.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36085.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async36088(self__.f,self__.ch,self__.meta36086,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36096 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36096) : self__.f.call(null,G__36096));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36085.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36085.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36085.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36086","meta36086",818641602,null)], null);
}));

(cljs.core.async.t_cljs$core$async36085.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36085.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36085");

(cljs.core.async.t_cljs$core$async36085.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async36085");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36085.
 */
cljs.core.async.__GT_t_cljs$core$async36085 = (function cljs$core$async$__GT_t_cljs$core$async36085(f,ch,meta36086){
return (new cljs.core.async.t_cljs$core$async36085(f,ch,meta36086));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async36085(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36099 = (function (f,ch,meta36100){
this.f = f;
this.ch = ch;
this.meta36100 = meta36100;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36099.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36101,meta36100__$1){
var self__ = this;
var _36101__$1 = this;
return (new cljs.core.async.t_cljs$core$async36099(self__.f,self__.ch,meta36100__$1));
}));

(cljs.core.async.t_cljs$core$async36099.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36101){
var self__ = this;
var _36101__$1 = this;
return self__.meta36100;
}));

(cljs.core.async.t_cljs$core$async36099.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36099.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36099.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36099.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36099.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36099.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36099.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36100","meta36100",1125397117,null)], null);
}));

(cljs.core.async.t_cljs$core$async36099.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36099.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36099");

(cljs.core.async.t_cljs$core$async36099.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async36099");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36099.
 */
cljs.core.async.__GT_t_cljs$core$async36099 = (function cljs$core$async$__GT_t_cljs$core$async36099(f,ch,meta36100){
return (new cljs.core.async.t_cljs$core$async36099(f,ch,meta36100));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async36099(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36102 = (function (p,ch,meta36103){
this.p = p;
this.ch = ch;
this.meta36103 = meta36103;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36102.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36104,meta36103__$1){
var self__ = this;
var _36104__$1 = this;
return (new cljs.core.async.t_cljs$core$async36102(self__.p,self__.ch,meta36103__$1));
}));

(cljs.core.async.t_cljs$core$async36102.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36104){
var self__ = this;
var _36104__$1 = this;
return self__.meta36103;
}));

(cljs.core.async.t_cljs$core$async36102.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36102.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36102.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36102.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36102.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36102.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36102.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36102.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36103","meta36103",-18346016,null)], null);
}));

(cljs.core.async.t_cljs$core$async36102.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36102.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36102");

(cljs.core.async.t_cljs$core$async36102.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async36102");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36102.
 */
cljs.core.async.__GT_t_cljs$core$async36102 = (function cljs$core$async$__GT_t_cljs$core$async36102(p,ch,meta36103){
return (new cljs.core.async.t_cljs$core$async36102(p,ch,meta36103));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async36102(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__36117 = arguments.length;
switch (G__36117) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34399__auto___37317 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34400__auto__ = (function (){var switch__34140__auto__ = (function (state_36141){
var state_val_36142 = (state_36141[(1)]);
if((state_val_36142 === (7))){
var inst_36137 = (state_36141[(2)]);
var state_36141__$1 = state_36141;
var statearr_36143_37318 = state_36141__$1;
(statearr_36143_37318[(2)] = inst_36137);

(statearr_36143_37318[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36142 === (1))){
var state_36141__$1 = state_36141;
var statearr_36144_37319 = state_36141__$1;
(statearr_36144_37319[(2)] = null);

(statearr_36144_37319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36142 === (4))){
var inst_36123 = (state_36141[(7)]);
var inst_36123__$1 = (state_36141[(2)]);
var inst_36124 = (inst_36123__$1 == null);
var state_36141__$1 = (function (){var statearr_36145 = state_36141;
(statearr_36145[(7)] = inst_36123__$1);

return statearr_36145;
})();
if(cljs.core.truth_(inst_36124)){
var statearr_36146_37320 = state_36141__$1;
(statearr_36146_37320[(1)] = (5));

} else {
var statearr_36147_37321 = state_36141__$1;
(statearr_36147_37321[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36142 === (6))){
var inst_36123 = (state_36141[(7)]);
var inst_36128 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36123) : p.call(null,inst_36123));
var state_36141__$1 = state_36141;
if(cljs.core.truth_(inst_36128)){
var statearr_36148_37322 = state_36141__$1;
(statearr_36148_37322[(1)] = (8));

} else {
var statearr_36149_37323 = state_36141__$1;
(statearr_36149_37323[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36142 === (3))){
var inst_36139 = (state_36141[(2)]);
var state_36141__$1 = state_36141;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36141__$1,inst_36139);
} else {
if((state_val_36142 === (2))){
var state_36141__$1 = state_36141;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36141__$1,(4),ch);
} else {
if((state_val_36142 === (11))){
var inst_36131 = (state_36141[(2)]);
var state_36141__$1 = state_36141;
var statearr_36157_37324 = state_36141__$1;
(statearr_36157_37324[(2)] = inst_36131);

(statearr_36157_37324[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36142 === (9))){
var state_36141__$1 = state_36141;
var statearr_36164_37325 = state_36141__$1;
(statearr_36164_37325[(2)] = null);

(statearr_36164_37325[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36142 === (5))){
var inst_36126 = cljs.core.async.close_BANG_(out);
var state_36141__$1 = state_36141;
var statearr_36165_37326 = state_36141__$1;
(statearr_36165_37326[(2)] = inst_36126);

(statearr_36165_37326[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36142 === (10))){
var inst_36134 = (state_36141[(2)]);
var state_36141__$1 = (function (){var statearr_36172 = state_36141;
(statearr_36172[(8)] = inst_36134);

return statearr_36172;
})();
var statearr_36173_37327 = state_36141__$1;
(statearr_36173_37327[(2)] = null);

(statearr_36173_37327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36142 === (8))){
var inst_36123 = (state_36141[(7)]);
var state_36141__$1 = state_36141;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36141__$1,(11),out,inst_36123);
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
});
return (function() {
var cljs$core$async$state_machine__34141__auto__ = null;
var cljs$core$async$state_machine__34141__auto____0 = (function (){
var statearr_36174 = [null,null,null,null,null,null,null,null,null];
(statearr_36174[(0)] = cljs$core$async$state_machine__34141__auto__);

(statearr_36174[(1)] = (1));

return statearr_36174;
});
var cljs$core$async$state_machine__34141__auto____1 = (function (state_36141){
while(true){
var ret_value__34142__auto__ = (function (){try{while(true){
var result__34143__auto__ = switch__34140__auto__(state_36141);
if(cljs.core.keyword_identical_QMARK_(result__34143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34143__auto__;
}
break;
}
}catch (e36175){var ex__34144__auto__ = e36175;
var statearr_36176_37328 = state_36141;
(statearr_36176_37328[(2)] = ex__34144__auto__);


if(cljs.core.seq((state_36141[(4)]))){
var statearr_36177_37329 = state_36141;
(statearr_36177_37329[(1)] = cljs.core.first((state_36141[(4)])));

} else {
throw ex__34144__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37330 = state_36141;
state_36141 = G__37330;
continue;
} else {
return ret_value__34142__auto__;
}
break;
}
});
cljs$core$async$state_machine__34141__auto__ = function(state_36141){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34141__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34141__auto____1.call(this,state_36141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34141__auto____0;
cljs$core$async$state_machine__34141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34141__auto____1;
return cljs$core$async$state_machine__34141__auto__;
})()
})();
var state__34401__auto__ = (function (){var statearr_36185 = f__34400__auto__();
(statearr_36185[(6)] = c__34399__auto___37317);

return statearr_36185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34401__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__36193 = arguments.length;
switch (G__36193) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__34399__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34400__auto__ = (function (){var switch__34140__auto__ = (function (state_36259){
var state_val_36260 = (state_36259[(1)]);
if((state_val_36260 === (7))){
var inst_36255 = (state_36259[(2)]);
var state_36259__$1 = state_36259;
var statearr_36261_37332 = state_36259__$1;
(statearr_36261_37332[(2)] = inst_36255);

(statearr_36261_37332[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (20))){
var inst_36225 = (state_36259[(7)]);
var inst_36236 = (state_36259[(2)]);
var inst_36237 = cljs.core.next(inst_36225);
var inst_36211 = inst_36237;
var inst_36212 = null;
var inst_36213 = (0);
var inst_36214 = (0);
var state_36259__$1 = (function (){var statearr_36262 = state_36259;
(statearr_36262[(8)] = inst_36236);

(statearr_36262[(9)] = inst_36211);

(statearr_36262[(10)] = inst_36212);

(statearr_36262[(11)] = inst_36213);

(statearr_36262[(12)] = inst_36214);

return statearr_36262;
})();
var statearr_36263_37336 = state_36259__$1;
(statearr_36263_37336[(2)] = null);

(statearr_36263_37336[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (1))){
var state_36259__$1 = state_36259;
var statearr_36265_37337 = state_36259__$1;
(statearr_36265_37337[(2)] = null);

(statearr_36265_37337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (4))){
var inst_36200 = (state_36259[(13)]);
var inst_36200__$1 = (state_36259[(2)]);
var inst_36201 = (inst_36200__$1 == null);
var state_36259__$1 = (function (){var statearr_36269 = state_36259;
(statearr_36269[(13)] = inst_36200__$1);

return statearr_36269;
})();
if(cljs.core.truth_(inst_36201)){
var statearr_36270_37338 = state_36259__$1;
(statearr_36270_37338[(1)] = (5));

} else {
var statearr_36271_37339 = state_36259__$1;
(statearr_36271_37339[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (15))){
var state_36259__$1 = state_36259;
var statearr_36275_37344 = state_36259__$1;
(statearr_36275_37344[(2)] = null);

(statearr_36275_37344[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (21))){
var state_36259__$1 = state_36259;
var statearr_36278_37345 = state_36259__$1;
(statearr_36278_37345[(2)] = null);

(statearr_36278_37345[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (13))){
var inst_36214 = (state_36259[(12)]);
var inst_36211 = (state_36259[(9)]);
var inst_36212 = (state_36259[(10)]);
var inst_36213 = (state_36259[(11)]);
var inst_36221 = (state_36259[(2)]);
var inst_36222 = (inst_36214 + (1));
var tmp36272 = inst_36212;
var tmp36273 = inst_36211;
var tmp36274 = inst_36213;
var inst_36211__$1 = tmp36273;
var inst_36212__$1 = tmp36272;
var inst_36213__$1 = tmp36274;
var inst_36214__$1 = inst_36222;
var state_36259__$1 = (function (){var statearr_36279 = state_36259;
(statearr_36279[(14)] = inst_36221);

(statearr_36279[(9)] = inst_36211__$1);

(statearr_36279[(10)] = inst_36212__$1);

(statearr_36279[(11)] = inst_36213__$1);

(statearr_36279[(12)] = inst_36214__$1);

return statearr_36279;
})();
var statearr_36281_37346 = state_36259__$1;
(statearr_36281_37346[(2)] = null);

(statearr_36281_37346[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (22))){
var state_36259__$1 = state_36259;
var statearr_36282_37347 = state_36259__$1;
(statearr_36282_37347[(2)] = null);

(statearr_36282_37347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (6))){
var inst_36200 = (state_36259[(13)]);
var inst_36209 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36200) : f.call(null,inst_36200));
var inst_36210 = cljs.core.seq(inst_36209);
var inst_36211 = inst_36210;
var inst_36212 = null;
var inst_36213 = (0);
var inst_36214 = (0);
var state_36259__$1 = (function (){var statearr_36284 = state_36259;
(statearr_36284[(9)] = inst_36211);

(statearr_36284[(10)] = inst_36212);

(statearr_36284[(11)] = inst_36213);

(statearr_36284[(12)] = inst_36214);

return statearr_36284;
})();
var statearr_36285_37348 = state_36259__$1;
(statearr_36285_37348[(2)] = null);

(statearr_36285_37348[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (17))){
var inst_36225 = (state_36259[(7)]);
var inst_36229 = cljs.core.chunk_first(inst_36225);
var inst_36230 = cljs.core.chunk_rest(inst_36225);
var inst_36231 = cljs.core.count(inst_36229);
var inst_36211 = inst_36230;
var inst_36212 = inst_36229;
var inst_36213 = inst_36231;
var inst_36214 = (0);
var state_36259__$1 = (function (){var statearr_36286 = state_36259;
(statearr_36286[(9)] = inst_36211);

(statearr_36286[(10)] = inst_36212);

(statearr_36286[(11)] = inst_36213);

(statearr_36286[(12)] = inst_36214);

return statearr_36286;
})();
var statearr_36287_37349 = state_36259__$1;
(statearr_36287_37349[(2)] = null);

(statearr_36287_37349[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (3))){
var inst_36257 = (state_36259[(2)]);
var state_36259__$1 = state_36259;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36259__$1,inst_36257);
} else {
if((state_val_36260 === (12))){
var inst_36245 = (state_36259[(2)]);
var state_36259__$1 = state_36259;
var statearr_36289_37354 = state_36259__$1;
(statearr_36289_37354[(2)] = inst_36245);

(statearr_36289_37354[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (2))){
var state_36259__$1 = state_36259;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36259__$1,(4),in$);
} else {
if((state_val_36260 === (23))){
var inst_36253 = (state_36259[(2)]);
var state_36259__$1 = state_36259;
var statearr_36291_37355 = state_36259__$1;
(statearr_36291_37355[(2)] = inst_36253);

(statearr_36291_37355[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (19))){
var inst_36240 = (state_36259[(2)]);
var state_36259__$1 = state_36259;
var statearr_36292_37356 = state_36259__$1;
(statearr_36292_37356[(2)] = inst_36240);

(statearr_36292_37356[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (11))){
var inst_36211 = (state_36259[(9)]);
var inst_36225 = (state_36259[(7)]);
var inst_36225__$1 = cljs.core.seq(inst_36211);
var state_36259__$1 = (function (){var statearr_36294 = state_36259;
(statearr_36294[(7)] = inst_36225__$1);

return statearr_36294;
})();
if(inst_36225__$1){
var statearr_36295_37358 = state_36259__$1;
(statearr_36295_37358[(1)] = (14));

} else {
var statearr_36297_37359 = state_36259__$1;
(statearr_36297_37359[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (9))){
var inst_36247 = (state_36259[(2)]);
var inst_36248 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36259__$1 = (function (){var statearr_36301 = state_36259;
(statearr_36301[(15)] = inst_36247);

return statearr_36301;
})();
if(cljs.core.truth_(inst_36248)){
var statearr_36302_37360 = state_36259__$1;
(statearr_36302_37360[(1)] = (21));

} else {
var statearr_36303_37361 = state_36259__$1;
(statearr_36303_37361[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (5))){
var inst_36203 = cljs.core.async.close_BANG_(out);
var state_36259__$1 = state_36259;
var statearr_36304_37362 = state_36259__$1;
(statearr_36304_37362[(2)] = inst_36203);

(statearr_36304_37362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (14))){
var inst_36225 = (state_36259[(7)]);
var inst_36227 = cljs.core.chunked_seq_QMARK_(inst_36225);
var state_36259__$1 = state_36259;
if(inst_36227){
var statearr_36305_37363 = state_36259__$1;
(statearr_36305_37363[(1)] = (17));

} else {
var statearr_36306_37364 = state_36259__$1;
(statearr_36306_37364[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (16))){
var inst_36243 = (state_36259[(2)]);
var state_36259__$1 = state_36259;
var statearr_36307_37365 = state_36259__$1;
(statearr_36307_37365[(2)] = inst_36243);

(statearr_36307_37365[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (10))){
var inst_36212 = (state_36259[(10)]);
var inst_36214 = (state_36259[(12)]);
var inst_36219 = cljs.core._nth(inst_36212,inst_36214);
var state_36259__$1 = state_36259;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36259__$1,(13),out,inst_36219);
} else {
if((state_val_36260 === (18))){
var inst_36225 = (state_36259[(7)]);
var inst_36234 = cljs.core.first(inst_36225);
var state_36259__$1 = state_36259;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36259__$1,(20),out,inst_36234);
} else {
if((state_val_36260 === (8))){
var inst_36214 = (state_36259[(12)]);
var inst_36213 = (state_36259[(11)]);
var inst_36216 = (inst_36214 < inst_36213);
var inst_36217 = inst_36216;
var state_36259__$1 = state_36259;
if(cljs.core.truth_(inst_36217)){
var statearr_36308_37367 = state_36259__$1;
(statearr_36308_37367[(1)] = (10));

} else {
var statearr_36309_37368 = state_36259__$1;
(statearr_36309_37368[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__34141__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__34141__auto____0 = (function (){
var statearr_36310 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36310[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34141__auto__);

(statearr_36310[(1)] = (1));

return statearr_36310;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34141__auto____1 = (function (state_36259){
while(true){
var ret_value__34142__auto__ = (function (){try{while(true){
var result__34143__auto__ = switch__34140__auto__(state_36259);
if(cljs.core.keyword_identical_QMARK_(result__34143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34143__auto__;
}
break;
}
}catch (e36311){var ex__34144__auto__ = e36311;
var statearr_36312_37373 = state_36259;
(statearr_36312_37373[(2)] = ex__34144__auto__);


if(cljs.core.seq((state_36259[(4)]))){
var statearr_36313_37374 = state_36259;
(statearr_36313_37374[(1)] = cljs.core.first((state_36259[(4)])));

} else {
throw ex__34144__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37375 = state_36259;
state_36259 = G__37375;
continue;
} else {
return ret_value__34142__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34141__auto__ = function(state_36259){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34141__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34141__auto____1.call(this,state_36259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34141__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34141__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34141__auto__;
})()
})();
var state__34401__auto__ = (function (){var statearr_36314 = f__34400__auto__();
(statearr_36314[(6)] = c__34399__auto__);

return statearr_36314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34401__auto__);
}));

return c__34399__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36316 = arguments.length;
switch (G__36316) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__36318 = arguments.length;
switch (G__36318) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__36322 = arguments.length;
switch (G__36322) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34399__auto___37379 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34400__auto__ = (function (){var switch__34140__auto__ = (function (state_36356){
var state_val_36357 = (state_36356[(1)]);
if((state_val_36357 === (7))){
var inst_36351 = (state_36356[(2)]);
var state_36356__$1 = state_36356;
var statearr_36358_37380 = state_36356__$1;
(statearr_36358_37380[(2)] = inst_36351);

(statearr_36358_37380[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36357 === (1))){
var inst_36333 = null;
var state_36356__$1 = (function (){var statearr_36359 = state_36356;
(statearr_36359[(7)] = inst_36333);

return statearr_36359;
})();
var statearr_36360_37381 = state_36356__$1;
(statearr_36360_37381[(2)] = null);

(statearr_36360_37381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36357 === (4))){
var inst_36336 = (state_36356[(8)]);
var inst_36336__$1 = (state_36356[(2)]);
var inst_36337 = (inst_36336__$1 == null);
var inst_36338 = cljs.core.not(inst_36337);
var state_36356__$1 = (function (){var statearr_36361 = state_36356;
(statearr_36361[(8)] = inst_36336__$1);

return statearr_36361;
})();
if(inst_36338){
var statearr_36362_37382 = state_36356__$1;
(statearr_36362_37382[(1)] = (5));

} else {
var statearr_36363_37383 = state_36356__$1;
(statearr_36363_37383[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36357 === (6))){
var state_36356__$1 = state_36356;
var statearr_36364_37384 = state_36356__$1;
(statearr_36364_37384[(2)] = null);

(statearr_36364_37384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36357 === (3))){
var inst_36353 = (state_36356[(2)]);
var inst_36354 = cljs.core.async.close_BANG_(out);
var state_36356__$1 = (function (){var statearr_36369 = state_36356;
(statearr_36369[(9)] = inst_36353);

return statearr_36369;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36356__$1,inst_36354);
} else {
if((state_val_36357 === (2))){
var state_36356__$1 = state_36356;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36356__$1,(4),ch);
} else {
if((state_val_36357 === (11))){
var inst_36336 = (state_36356[(8)]);
var inst_36345 = (state_36356[(2)]);
var inst_36333 = inst_36336;
var state_36356__$1 = (function (){var statearr_36370 = state_36356;
(statearr_36370[(10)] = inst_36345);

(statearr_36370[(7)] = inst_36333);

return statearr_36370;
})();
var statearr_36371_37385 = state_36356__$1;
(statearr_36371_37385[(2)] = null);

(statearr_36371_37385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36357 === (9))){
var inst_36336 = (state_36356[(8)]);
var state_36356__$1 = state_36356;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36356__$1,(11),out,inst_36336);
} else {
if((state_val_36357 === (5))){
var inst_36336 = (state_36356[(8)]);
var inst_36333 = (state_36356[(7)]);
var inst_36340 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36336,inst_36333);
var state_36356__$1 = state_36356;
if(inst_36340){
var statearr_36377_37387 = state_36356__$1;
(statearr_36377_37387[(1)] = (8));

} else {
var statearr_36378_37388 = state_36356__$1;
(statearr_36378_37388[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36357 === (10))){
var inst_36348 = (state_36356[(2)]);
var state_36356__$1 = state_36356;
var statearr_36379_37389 = state_36356__$1;
(statearr_36379_37389[(2)] = inst_36348);

(statearr_36379_37389[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36357 === (8))){
var inst_36333 = (state_36356[(7)]);
var tmp36372 = inst_36333;
var inst_36333__$1 = tmp36372;
var state_36356__$1 = (function (){var statearr_36380 = state_36356;
(statearr_36380[(7)] = inst_36333__$1);

return statearr_36380;
})();
var statearr_36381_37390 = state_36356__$1;
(statearr_36381_37390[(2)] = null);

(statearr_36381_37390[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__34141__auto__ = null;
var cljs$core$async$state_machine__34141__auto____0 = (function (){
var statearr_36382 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36382[(0)] = cljs$core$async$state_machine__34141__auto__);

(statearr_36382[(1)] = (1));

return statearr_36382;
});
var cljs$core$async$state_machine__34141__auto____1 = (function (state_36356){
while(true){
var ret_value__34142__auto__ = (function (){try{while(true){
var result__34143__auto__ = switch__34140__auto__(state_36356);
if(cljs.core.keyword_identical_QMARK_(result__34143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34143__auto__;
}
break;
}
}catch (e36383){var ex__34144__auto__ = e36383;
var statearr_36384_37395 = state_36356;
(statearr_36384_37395[(2)] = ex__34144__auto__);


if(cljs.core.seq((state_36356[(4)]))){
var statearr_36385_37396 = state_36356;
(statearr_36385_37396[(1)] = cljs.core.first((state_36356[(4)])));

} else {
throw ex__34144__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37400 = state_36356;
state_36356 = G__37400;
continue;
} else {
return ret_value__34142__auto__;
}
break;
}
});
cljs$core$async$state_machine__34141__auto__ = function(state_36356){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34141__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34141__auto____1.call(this,state_36356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34141__auto____0;
cljs$core$async$state_machine__34141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34141__auto____1;
return cljs$core$async$state_machine__34141__auto__;
})()
})();
var state__34401__auto__ = (function (){var statearr_36386 = f__34400__auto__();
(statearr_36386[(6)] = c__34399__auto___37379);

return statearr_36386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34401__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__36390 = arguments.length;
switch (G__36390) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34399__auto___37402 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34400__auto__ = (function (){var switch__34140__auto__ = (function (state_36431){
var state_val_36432 = (state_36431[(1)]);
if((state_val_36432 === (7))){
var inst_36427 = (state_36431[(2)]);
var state_36431__$1 = state_36431;
var statearr_36433_37403 = state_36431__$1;
(statearr_36433_37403[(2)] = inst_36427);

(statearr_36433_37403[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36432 === (1))){
var inst_36394 = (new Array(n));
var inst_36395 = inst_36394;
var inst_36396 = (0);
var state_36431__$1 = (function (){var statearr_36434 = state_36431;
(statearr_36434[(7)] = inst_36395);

(statearr_36434[(8)] = inst_36396);

return statearr_36434;
})();
var statearr_36435_37404 = state_36431__$1;
(statearr_36435_37404[(2)] = null);

(statearr_36435_37404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36432 === (4))){
var inst_36399 = (state_36431[(9)]);
var inst_36399__$1 = (state_36431[(2)]);
var inst_36400 = (inst_36399__$1 == null);
var inst_36401 = cljs.core.not(inst_36400);
var state_36431__$1 = (function (){var statearr_36436 = state_36431;
(statearr_36436[(9)] = inst_36399__$1);

return statearr_36436;
})();
if(inst_36401){
var statearr_36437_37408 = state_36431__$1;
(statearr_36437_37408[(1)] = (5));

} else {
var statearr_36438_37409 = state_36431__$1;
(statearr_36438_37409[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36432 === (15))){
var inst_36421 = (state_36431[(2)]);
var state_36431__$1 = state_36431;
var statearr_36439_37410 = state_36431__$1;
(statearr_36439_37410[(2)] = inst_36421);

(statearr_36439_37410[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36432 === (13))){
var state_36431__$1 = state_36431;
var statearr_36440_37411 = state_36431__$1;
(statearr_36440_37411[(2)] = null);

(statearr_36440_37411[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36432 === (6))){
var inst_36396 = (state_36431[(8)]);
var inst_36417 = (inst_36396 > (0));
var state_36431__$1 = state_36431;
if(cljs.core.truth_(inst_36417)){
var statearr_36441_37412 = state_36431__$1;
(statearr_36441_37412[(1)] = (12));

} else {
var statearr_36442_37413 = state_36431__$1;
(statearr_36442_37413[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36432 === (3))){
var inst_36429 = (state_36431[(2)]);
var state_36431__$1 = state_36431;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36431__$1,inst_36429);
} else {
if((state_val_36432 === (12))){
var inst_36395 = (state_36431[(7)]);
var inst_36419 = cljs.core.vec(inst_36395);
var state_36431__$1 = state_36431;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36431__$1,(15),out,inst_36419);
} else {
if((state_val_36432 === (2))){
var state_36431__$1 = state_36431;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36431__$1,(4),ch);
} else {
if((state_val_36432 === (11))){
var inst_36411 = (state_36431[(2)]);
var inst_36412 = (new Array(n));
var inst_36395 = inst_36412;
var inst_36396 = (0);
var state_36431__$1 = (function (){var statearr_36443 = state_36431;
(statearr_36443[(10)] = inst_36411);

(statearr_36443[(7)] = inst_36395);

(statearr_36443[(8)] = inst_36396);

return statearr_36443;
})();
var statearr_36444_37415 = state_36431__$1;
(statearr_36444_37415[(2)] = null);

(statearr_36444_37415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36432 === (9))){
var inst_36395 = (state_36431[(7)]);
var inst_36409 = cljs.core.vec(inst_36395);
var state_36431__$1 = state_36431;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36431__$1,(11),out,inst_36409);
} else {
if((state_val_36432 === (5))){
var inst_36395 = (state_36431[(7)]);
var inst_36396 = (state_36431[(8)]);
var inst_36399 = (state_36431[(9)]);
var inst_36404 = (state_36431[(11)]);
var inst_36403 = (inst_36395[inst_36396] = inst_36399);
var inst_36404__$1 = (inst_36396 + (1));
var inst_36405 = (inst_36404__$1 < n);
var state_36431__$1 = (function (){var statearr_36445 = state_36431;
(statearr_36445[(12)] = inst_36403);

(statearr_36445[(11)] = inst_36404__$1);

return statearr_36445;
})();
if(cljs.core.truth_(inst_36405)){
var statearr_36446_37416 = state_36431__$1;
(statearr_36446_37416[(1)] = (8));

} else {
var statearr_36447_37417 = state_36431__$1;
(statearr_36447_37417[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36432 === (14))){
var inst_36424 = (state_36431[(2)]);
var inst_36425 = cljs.core.async.close_BANG_(out);
var state_36431__$1 = (function (){var statearr_36449 = state_36431;
(statearr_36449[(13)] = inst_36424);

return statearr_36449;
})();
var statearr_36450_37418 = state_36431__$1;
(statearr_36450_37418[(2)] = inst_36425);

(statearr_36450_37418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36432 === (10))){
var inst_36415 = (state_36431[(2)]);
var state_36431__$1 = state_36431;
var statearr_36451_37419 = state_36431__$1;
(statearr_36451_37419[(2)] = inst_36415);

(statearr_36451_37419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36432 === (8))){
var inst_36395 = (state_36431[(7)]);
var inst_36404 = (state_36431[(11)]);
var tmp36448 = inst_36395;
var inst_36395__$1 = tmp36448;
var inst_36396 = inst_36404;
var state_36431__$1 = (function (){var statearr_36452 = state_36431;
(statearr_36452[(7)] = inst_36395__$1);

(statearr_36452[(8)] = inst_36396);

return statearr_36452;
})();
var statearr_36453_37420 = state_36431__$1;
(statearr_36453_37420[(2)] = null);

(statearr_36453_37420[(1)] = (2));


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
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34141__auto__ = null;
var cljs$core$async$state_machine__34141__auto____0 = (function (){
var statearr_36454 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36454[(0)] = cljs$core$async$state_machine__34141__auto__);

(statearr_36454[(1)] = (1));

return statearr_36454;
});
var cljs$core$async$state_machine__34141__auto____1 = (function (state_36431){
while(true){
var ret_value__34142__auto__ = (function (){try{while(true){
var result__34143__auto__ = switch__34140__auto__(state_36431);
if(cljs.core.keyword_identical_QMARK_(result__34143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34143__auto__;
}
break;
}
}catch (e36455){var ex__34144__auto__ = e36455;
var statearr_36456_37421 = state_36431;
(statearr_36456_37421[(2)] = ex__34144__auto__);


if(cljs.core.seq((state_36431[(4)]))){
var statearr_36457_37422 = state_36431;
(statearr_36457_37422[(1)] = cljs.core.first((state_36431[(4)])));

} else {
throw ex__34144__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37423 = state_36431;
state_36431 = G__37423;
continue;
} else {
return ret_value__34142__auto__;
}
break;
}
});
cljs$core$async$state_machine__34141__auto__ = function(state_36431){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34141__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34141__auto____1.call(this,state_36431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34141__auto____0;
cljs$core$async$state_machine__34141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34141__auto____1;
return cljs$core$async$state_machine__34141__auto__;
})()
})();
var state__34401__auto__ = (function (){var statearr_36458 = f__34400__auto__();
(statearr_36458[(6)] = c__34399__auto___37402);

return statearr_36458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34401__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__36460 = arguments.length;
switch (G__36460) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34399__auto___37431 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34400__auto__ = (function (){var switch__34140__auto__ = (function (state_36506){
var state_val_36507 = (state_36506[(1)]);
if((state_val_36507 === (7))){
var inst_36502 = (state_36506[(2)]);
var state_36506__$1 = state_36506;
var statearr_36511_37432 = state_36506__$1;
(statearr_36511_37432[(2)] = inst_36502);

(statearr_36511_37432[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36507 === (1))){
var inst_36462 = [];
var inst_36463 = inst_36462;
var inst_36464 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36506__$1 = (function (){var statearr_36512 = state_36506;
(statearr_36512[(7)] = inst_36463);

(statearr_36512[(8)] = inst_36464);

return statearr_36512;
})();
var statearr_36513_37433 = state_36506__$1;
(statearr_36513_37433[(2)] = null);

(statearr_36513_37433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36507 === (4))){
var inst_36467 = (state_36506[(9)]);
var inst_36467__$1 = (state_36506[(2)]);
var inst_36468 = (inst_36467__$1 == null);
var inst_36469 = cljs.core.not(inst_36468);
var state_36506__$1 = (function (){var statearr_36514 = state_36506;
(statearr_36514[(9)] = inst_36467__$1);

return statearr_36514;
})();
if(inst_36469){
var statearr_36515_37434 = state_36506__$1;
(statearr_36515_37434[(1)] = (5));

} else {
var statearr_36516_37435 = state_36506__$1;
(statearr_36516_37435[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36507 === (15))){
var inst_36463 = (state_36506[(7)]);
var inst_36494 = cljs.core.vec(inst_36463);
var state_36506__$1 = state_36506;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36506__$1,(18),out,inst_36494);
} else {
if((state_val_36507 === (13))){
var inst_36489 = (state_36506[(2)]);
var state_36506__$1 = state_36506;
var statearr_36517_37437 = state_36506__$1;
(statearr_36517_37437[(2)] = inst_36489);

(statearr_36517_37437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36507 === (6))){
var inst_36463 = (state_36506[(7)]);
var inst_36491 = inst_36463.length;
var inst_36492 = (inst_36491 > (0));
var state_36506__$1 = state_36506;
if(cljs.core.truth_(inst_36492)){
var statearr_36518_37438 = state_36506__$1;
(statearr_36518_37438[(1)] = (15));

} else {
var statearr_36519_37439 = state_36506__$1;
(statearr_36519_37439[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36507 === (17))){
var inst_36499 = (state_36506[(2)]);
var inst_36500 = cljs.core.async.close_BANG_(out);
var state_36506__$1 = (function (){var statearr_36520 = state_36506;
(statearr_36520[(10)] = inst_36499);

return statearr_36520;
})();
var statearr_36521_37440 = state_36506__$1;
(statearr_36521_37440[(2)] = inst_36500);

(statearr_36521_37440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36507 === (3))){
var inst_36504 = (state_36506[(2)]);
var state_36506__$1 = state_36506;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36506__$1,inst_36504);
} else {
if((state_val_36507 === (12))){
var inst_36463 = (state_36506[(7)]);
var inst_36482 = cljs.core.vec(inst_36463);
var state_36506__$1 = state_36506;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36506__$1,(14),out,inst_36482);
} else {
if((state_val_36507 === (2))){
var state_36506__$1 = state_36506;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36506__$1,(4),ch);
} else {
if((state_val_36507 === (11))){
var inst_36463 = (state_36506[(7)]);
var inst_36467 = (state_36506[(9)]);
var inst_36471 = (state_36506[(11)]);
var inst_36479 = inst_36463.push(inst_36467);
var tmp36522 = inst_36463;
var inst_36463__$1 = tmp36522;
var inst_36464 = inst_36471;
var state_36506__$1 = (function (){var statearr_36527 = state_36506;
(statearr_36527[(12)] = inst_36479);

(statearr_36527[(7)] = inst_36463__$1);

(statearr_36527[(8)] = inst_36464);

return statearr_36527;
})();
var statearr_36528_37445 = state_36506__$1;
(statearr_36528_37445[(2)] = null);

(statearr_36528_37445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36507 === (9))){
var inst_36464 = (state_36506[(8)]);
var inst_36475 = cljs.core.keyword_identical_QMARK_(inst_36464,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_36506__$1 = state_36506;
var statearr_36529_37446 = state_36506__$1;
(statearr_36529_37446[(2)] = inst_36475);

(statearr_36529_37446[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36507 === (5))){
var inst_36467 = (state_36506[(9)]);
var inst_36471 = (state_36506[(11)]);
var inst_36464 = (state_36506[(8)]);
var inst_36472 = (state_36506[(13)]);
var inst_36471__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36467) : f.call(null,inst_36467));
var inst_36472__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36471__$1,inst_36464);
var state_36506__$1 = (function (){var statearr_36530 = state_36506;
(statearr_36530[(11)] = inst_36471__$1);

(statearr_36530[(13)] = inst_36472__$1);

return statearr_36530;
})();
if(inst_36472__$1){
var statearr_36531_37447 = state_36506__$1;
(statearr_36531_37447[(1)] = (8));

} else {
var statearr_36532_37448 = state_36506__$1;
(statearr_36532_37448[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36507 === (14))){
var inst_36467 = (state_36506[(9)]);
var inst_36471 = (state_36506[(11)]);
var inst_36484 = (state_36506[(2)]);
var inst_36485 = [];
var inst_36486 = inst_36485.push(inst_36467);
var inst_36463 = inst_36485;
var inst_36464 = inst_36471;
var state_36506__$1 = (function (){var statearr_36533 = state_36506;
(statearr_36533[(14)] = inst_36484);

(statearr_36533[(15)] = inst_36486);

(statearr_36533[(7)] = inst_36463);

(statearr_36533[(8)] = inst_36464);

return statearr_36533;
})();
var statearr_36534_37453 = state_36506__$1;
(statearr_36534_37453[(2)] = null);

(statearr_36534_37453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36507 === (16))){
var state_36506__$1 = state_36506;
var statearr_36535_37454 = state_36506__$1;
(statearr_36535_37454[(2)] = null);

(statearr_36535_37454[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36507 === (10))){
var inst_36477 = (state_36506[(2)]);
var state_36506__$1 = state_36506;
if(cljs.core.truth_(inst_36477)){
var statearr_36536_37455 = state_36506__$1;
(statearr_36536_37455[(1)] = (11));

} else {
var statearr_36537_37456 = state_36506__$1;
(statearr_36537_37456[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36507 === (18))){
var inst_36496 = (state_36506[(2)]);
var state_36506__$1 = state_36506;
var statearr_36538_37457 = state_36506__$1;
(statearr_36538_37457[(2)] = inst_36496);

(statearr_36538_37457[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36507 === (8))){
var inst_36472 = (state_36506[(13)]);
var state_36506__$1 = state_36506;
var statearr_36539_37458 = state_36506__$1;
(statearr_36539_37458[(2)] = inst_36472);

(statearr_36539_37458[(1)] = (10));


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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34141__auto__ = null;
var cljs$core$async$state_machine__34141__auto____0 = (function (){
var statearr_36540 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36540[(0)] = cljs$core$async$state_machine__34141__auto__);

(statearr_36540[(1)] = (1));

return statearr_36540;
});
var cljs$core$async$state_machine__34141__auto____1 = (function (state_36506){
while(true){
var ret_value__34142__auto__ = (function (){try{while(true){
var result__34143__auto__ = switch__34140__auto__(state_36506);
if(cljs.core.keyword_identical_QMARK_(result__34143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34143__auto__;
}
break;
}
}catch (e36541){var ex__34144__auto__ = e36541;
var statearr_36542_37459 = state_36506;
(statearr_36542_37459[(2)] = ex__34144__auto__);


if(cljs.core.seq((state_36506[(4)]))){
var statearr_36543_37460 = state_36506;
(statearr_36543_37460[(1)] = cljs.core.first((state_36506[(4)])));

} else {
throw ex__34144__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37461 = state_36506;
state_36506 = G__37461;
continue;
} else {
return ret_value__34142__auto__;
}
break;
}
});
cljs$core$async$state_machine__34141__auto__ = function(state_36506){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34141__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34141__auto____1.call(this,state_36506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34141__auto____0;
cljs$core$async$state_machine__34141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34141__auto____1;
return cljs$core$async$state_machine__34141__auto__;
})()
})();
var state__34401__auto__ = (function (){var statearr_36544 = f__34400__auto__();
(statearr_36544[(6)] = c__34399__auto___37431);

return statearr_36544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34401__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
