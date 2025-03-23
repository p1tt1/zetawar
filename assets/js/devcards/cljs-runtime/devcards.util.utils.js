goog.provide('devcards.util.utils');
goog.scope(function(){
  devcards.util.utils.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
devcards.util.utils.react_holder = module$node_modules$react$index;
devcards.util.utils.html_env_QMARK_ = (function devcards$util$utils$html_env_QMARK_(){
var temp__5821__auto__ = goog.global.document;
if(cljs.core.truth_(temp__5821__auto__)){
var doc = temp__5821__auto__;
return devcards.util.utils.goog$module$goog$object.get(doc,"write");
} else {
return null;
}
});
devcards.util.utils.node_env_QMARK_ = (function devcards$util$utils$node_env_QMARK_(){
return (!((goog.nodeGlobalRequire == null)));
});
devcards.util.utils.pprint_str = (function devcards$util$utils$pprint_str(obj){
try{var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__39144_39150 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__39145_39151 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__39146_39152 = true;
var _STAR_print_fn_STAR__temp_val__39147_39153 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__39146_39152);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__39147_39153);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(obj);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__39145_39151);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__39144_39150);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
}catch (e39142){if((e39142 instanceof Error)){
var e1 = e39142;
try{return obj.toString();
}catch (e39143){if((e39143 instanceof Error)){
var e2 = e39143;
return "<<Un-printable Type>>";
} else {
throw e39143;

}
}} else {
throw e39142;

}
}});
devcards.util.utils.pprint_code = (function devcards$util$utils$pprint_code(code){
var _STAR_print_pprint_dispatch_STAR__orig_val__39148 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pprint_dispatch_STAR__temp_val__39149 = cljs.pprint.code_dispatch;
(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__temp_val__39149);

try{return devcards.util.utils.pprint_str(code);
}finally {(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__orig_val__39148);
}});

//# sourceMappingURL=devcards.util.utils.js.map
