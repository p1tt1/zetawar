goog.provide('zetawar.serialization');
var module$node_modules$zetawar_js_lib$index=shadow.js.require("module$node_modules$zetawar_js_lib$index", {});
zetawar.serialization.encode_game_state = (function zetawar$serialization$encode_game_state(game_state){
var writer = cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"json","json",1279968570));
return goog.crypt.base64.encodeString(unescape(encodeURIComponent(module$node_modules$zetawar_js_lib$index.lzwEncode(cognitect.transit.write(writer,game_state)))),true);
});
zetawar.serialization.decode_game_state = (function zetawar$serialization$decode_game_state(encoded_game_state){
var reader = cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"json","json",1279968570));
var transit_game_state = module$node_modules$zetawar_js_lib$index.lzwDecode(decodeURIComponent(escape(goog.crypt.base64.decodeString(encoded_game_state,true))));
return cognitect.transit.read(reader,transit_game_state);
});
zetawar.serialization.load_encoded_game_state_BANG_ = (function zetawar$serialization$load_encoded_game_state_BANG_(var_args){
var G__35766 = arguments.length;
switch (G__35766) {
case 2:
return zetawar.serialization.load_encoded_game_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 5:
return zetawar.serialization.load_encoded_game_state_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zetawar.serialization.load_encoded_game_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p__35767,encoded_game_state){
var map__35768 = p__35767;
var map__35768__$1 = cljs.core.__destructure_map(map__35768);
var app_ctx = map__35768__$1;
var conn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35768__$1,new cljs.core.Keyword(null,"conn","conn",278309663));
var players = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35768__$1,new cljs.core.Keyword(null,"players","players",-1361554569));
return zetawar.serialization.load_encoded_game_state_BANG_.cljs$core$IFn$_invoke$arity$5(app_ctx,zetawar.data.rulesets,zetawar.data.maps,zetawar.data.scenarios,encoded_game_state);
}));

(zetawar.serialization.load_encoded_game_state_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (p__35770,rulesets,map_defs,scenario_defs,encoded_game_state){
var map__35771 = p__35770;
var map__35771__$1 = cljs.core.__destructure_map(map__35771);
var app_ctx = map__35771__$1;
var conn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35771__$1,new cljs.core.Keyword(null,"conn","conn",278309663));
var players = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35771__$1,new cljs.core.Keyword(null,"players","players",-1361554569));
return zetawar.app.load_game_state_BANG_.cljs$core$IFn$_invoke$arity$5(app_ctx,rulesets,map_defs,scenario_defs,zetawar.serialization.decode_game_state(encoded_game_state));
}));

(zetawar.serialization.load_encoded_game_state_BANG_.cljs$lang$maxFixedArity = 5);

zetawar.serialization.set_url_game_state_BANG_ = (function zetawar$serialization$set_url_game_state_BANG_(db){
var encoded_game_state = zetawar.serialization.encode_game_state(zetawar.game.get_game_state.cljs$core$IFn$_invoke$arity$2(db,zetawar.app.current_game(db)));
return (window.location.hash = encoded_game_state);
});

//# sourceMappingURL=zetawar.serialization.js.map
